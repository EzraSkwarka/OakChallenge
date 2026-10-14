const fs = require("fs");
const vm = require("vm");

const POKEMON_JS = "../data/pokemon.js";

let pokemonByName = {};

const parseWarnings = [];

function addWarning(type, details) {
  parseWarnings.push({
    type,
    details,
  });
}

function getPokemonData(name) {
  const key = Object.keys(pokemonByName).find((k) => pokemonByName[k].name.toLowerCase() === name.toLowerCase());

  return key ? pokemonByName[key] : null;
}

function loadPokemonMatcher() {
  const sandbox = {
    window: {},
  };

  vm.createContext(sandbox);

  vm.runInContext(fs.readFileSync(POKEMON_JS, "utf8"), sandbox);

  pokemonByName = sandbox.window.POKEMON_BY_NAME || {};

  const names = Object.values(pokemonByName)
    .map((p) => p.name)
    .filter(Boolean);

  const uniqueNames = [...new Set(names)];

  return new RegExp(
    uniqueNames
      .sort((a, b) => b.length - a.length)
      .map((v) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    "i",
  );
}

function isLocationLine(line) {
  return /^[A-Z].+\-\s*$/.test(line) && !line.startsWith("Part ");
}

function isOrLine(line) {
  return line.trim() === "OR";
}

function chainToDisplay(chain) {
  return chain
    .replace(/^\*\s*/, "")
    .replace(/--\((.*?)\)-->/g, " → $1 → ")
    .replace(/-->/g, " → ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildSummaryHtml(body) {
  const lines = body.split("\n");

  const html = [];

  let paragraphBuffer = [];
  let chainBuffer = [];

  function flushParagraph() {
    if (!paragraphBuffer.length) return;

    html.push(
      `<p>
  ${paragraphBuffer.join(" ")}
</p>`,
    );

    paragraphBuffer = [];
  }

  function flushChains() {
    if (!chainBuffer.length) return;

    html.push(
      `<pre>
${chainBuffer.join("\n")}
</pre>`,
    );

    chainBuffer = [];
  }

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) continue;

    if (line.startsWith("Part ")) {
      continue;
    }

    if (line.startsWith("Pokemon in this section")) {
      continue;
    }

    if (/^End of part/i.test(line)) {
      continue;
    }

    if (/^Caught\s+/i.test(line)) {
      continue;
    }

    if (/^_+$/.test(line)) {
      continue;
    }

    if (isLocationLine(line)) {
      flushParagraph();
      flushChains();

      html.push(`<h5>${line.replace(/\s*-\s*$/, "")}</h5>`);

      continue;
    }

    if (isChain(line)) {
      flushParagraph();

      chainBuffer.push(chainToDisplay(line));

      continue;
    }

    if (isOrLine(line)) {
      if (chainBuffer.length) {
        chainBuffer.push("OR");
      } else {
        paragraphBuffer.push("OR");
      }

      continue;
    }

    flushChains();

    paragraphBuffer.push(line);
  }

  flushParagraph();
  flushChains();

  return html.join("\n\n");
}

const pokemonMatcher = loadPokemonMatcher();

function resolvePokemonName(raw) {
  const match = raw.match(pokemonMatcher);

  if (!match) {
    addWarning("Unknown Pokemon", raw);

    return {
      name: raw.trim(),
      dexNumber: null,
      parseWarning: true,
    };
  }

  const pokemon = getPokemonData(match[0]);

  return {
    name: pokemon?.name ?? match[0],

    dexNumber: pokemon?.dexNumber ?? null,

    parseWarning: false,
  };
}

function slug(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalize(text) {
  return text
    .replace(/\r/g, "")
    .replace(/--\((.*?)\)-->/g, "→$1→")
    .replace(/-->/g, "→")
    .replace(/–/g, "-");
}

function sectionId(title) {
  return slug(title);
}

function parseParts(text) {
  const matches = [...text.matchAll(/Part\s+\d+\s*-\s*(.+?)(?=\n)/g)];

  const parts = [];

  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index;

    const end = i < matches.length - 1 ? matches[i + 1].index : text.length;

    parts.push({
      title: matches[i][1].trim(),
      body: text.substring(start, end),
    });
  }

  return parts;
}

function isChain(line) {
  return /^\*/.test(line.trim());
}

function isChoiceHeader(line) {
  return /^Choices\s*\(/i.test(line) || /Exclusive:/i.test(line);
}

function choiceKey(line) {
  return slug(
    line
      .replace(/^Choices\s*\(/i, "")
      .replace(/\)\s*:?\s*$/i, "")
      .replace(/Exclusive:/i, "")
      .trim(),
  );
}

function isTriggerToken(token) {
  return /^Lv\./i.test(token) || /^Level/i.test(token) || /Stone/i.test(token) || /Happiness/i.test(token) || /Breed/i.test(token) || /Trade/i.test(token);
}

function parseTrigger(trigger, previous) {
  trigger = trigger.trim();

  const level = trigger.match(/^Lv\.?\s*(\d+)/i);

  if (level) {
    return `Evolve ${previous} at level ${level[1]}`;
  }

  if (/Happiness/i.test(trigger)) return `Evolve ${previous} with happiness`;

  if (/Breed/i.test(trigger)) return `Breed ${previous}`;

  if (/Stone/i.test(trigger)) return `Use ${trigger} on ${previous}`;

  if (/Trade/i.test(trigger)) return `Trade ${previous}`;

  if (/Level/i.test(trigger)) return `${trigger} (${previous})`;

  addWarning("Unknown Trigger", trigger);

  return trigger;
}

function parseChainRow(chain, location) {
  const parts = chain
    .replace(/^\*\s*/, "")
    .split("→")
    .map((v) => v.trim())
    .filter(Boolean);

  const rows = [];

  let previousPokemon = null;

  for (let i = 0; i < parts.length; i++) {
    const token = parts[i];

    if (isTriggerToken(token)) {
      continue;
    }

    const pokemon = resolvePokemonName(token);

    rows.push({
      pokemon: {
        name: pokemon.name,

        dexNumber: pokemon.dexNumber,

        ...(pokemon.parseWarning
          ? {
              parseWarning: true,
            }
          : {}),
      },

      group: location,

      method: previousPokemon ? parseTrigger(parts[i - 1], previousPokemon) : location,

      _source: chain.trim(),
    });

    previousPokemon = pokemon.name;
  }

  return rows;
}

function parseSection(part) {
  const lines = part.body.split("\n");

  let rows = [];

  let currentLocation = "Unknown";

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) continue;

    if (/^Route\s+\d+/i.test(line) || /^[A-Z].+\-\s*$/.test(line)) {
      currentLocation = line
        .replace(/\s*-\s*$/, "")
        .replace(/:$/, "")
        .trim();
    }

    if (isChoiceHeader(line)) {
      continue;
    }

    if (isChain(line)) {
      rows.push(...parseChainRow(line, currentLocation));
    }
  }

  const summaryHtml = buildSummaryHtml(part.body);

  const summaryText = summaryHtml
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return {
    headerTitle: part.title,

    summaryShort: summaryText.substring(0, 250),

    summaryHtml,

    rows,
  };
}

function buildGameData(text, gameId, gameTitle) {
  text = normalize(text);

  const parts = parseParts(text);

  const progression = {};

  for (const part of parts) {
    progression[sectionId(part.title)] = parseSection(part);
  }

  return {
    gameId,
    gameTitle,
    progression,
  };
}

function jsString(str) {
  return JSON.stringify(str);
}

function jsMultiline(str) {
  if (!str) return "``";

  return "`\n" + str.replace(/`/g, "\\`") + "\n`";
}

function writeOutput(data, output) {
  const gameFolder = data.gameTitle.replace(/^Pokemon\s+/i, "");

  let out = [];

  out.push(`/* ----------------------
- Guide:
----------------------- */`);

  out.push(`const guideLink = "";`);

  out.push(`
const guideSource = \`
      <p class="tips-source">
        <a href="\${guideLink}" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>\`;
`);

  out.push(`const imgBasehref = "assets/images/${gameFolder}/pokedex/Spr_";`);

  out.push(`const badgeBasehref = "assets/images/${gameFolder}/badges/Spr_";`);

  out.push("");

  out.push("window.gameData = {");

  out.push(`  gameId: ${jsString(data.gameId)},`);

  out.push(`  gameTitle: ${jsString(data.gameTitle)},`);

  out.push(`  logo: "assets/images/logos/${data.gameId}.png",`);

  out.push(`
  aboutHtml: \`
   <section class="game-intro-content">
      \${guideSource}
    </section>
  \`,
`);

  out.push("  progression: {");

  const sectionEntries = Object.entries(data.progression);

  sectionEntries.forEach(([key, section], index) => {
    out.push(`    ${JSON.stringify(key)}: {`);

    out.push(`      headerTitle: ${jsString(section.headerTitle)},`);

    out.push(`      summaryShort: ${jsString(section.summaryShort)},`);

    out.push(`      summaryHtml: ${jsMultiline(section.summaryHtml)},`);

    out.push("      rows: [");

    let currentGroup = null;

    section.rows.forEach((row) => {
      if (row.group && row.group !== currentGroup) {
        out.push(`        /* ${row.group} */`);

        currentGroup = row.group;
      }

      const dex = row.pokemon.dexNumber ? String(row.pokemon.dexNumber).padStart(3, "0") : null;

      out.push(
        `        {
          pokemon: {
            ${dex ? `img: imgBasehref + "${dex}.png",` : ""}
            name: ${jsString(row.pokemon.name)}${
              row.pokemon.parseWarning
                ? `,
            parseWarning: true`
                : ""
            }
          },
          method: ${jsString(row.method)},
          _source: ${jsString(row._source)}
        },`,
      );
    });

    out.push("      ]");

    out.push(index === sectionEntries.length - 1 ? "    }" : "    },");
  });

  out.push("  }");
  out.push("};");

  fs.writeFileSync(output, out.join("\n"));
}

function writeReport(output) {
  const reportFile = output.replace(/\.js$/i, "-parse-report.txt");

  const lines = [];

  lines.push("===== PARSE REPORT =====");

  lines.push("");

  lines.push(`Warnings: ${parseWarnings.length}`);

  lines.push("");

  const grouped = {};

  for (const warning of parseWarnings) {
    grouped[warning.type] ??= [];

    grouped[warning.type].push(warning.details);
  }

  for (const [type, entries] of Object.entries(grouped)) {
    lines.push(type);

    lines.push("=".repeat(type.length));

    lines.push("");

    entries.forEach((entry) => lines.push(entry));

    lines.push("");
  }

  fs.writeFileSync(reportFile, lines.join("\n"));
}

if (require.main === module) {
  const input = process.argv[2];

  const gameId = process.argv[3];

  const gameTitle = process.argv[4];

  const output = process.argv[5] || "progression.js";

  const source = fs.readFileSync(input, "utf8");

  const gameData = buildGameData(source, gameId, gameTitle);

  writeOutput(gameData, output);

  writeReport(output);

  console.log(`Generated ${output}`);
}
