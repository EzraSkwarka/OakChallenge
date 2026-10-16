const fs = require("fs");
const vm = require("vm");
const path = require("path");

const POKEMON_JS = process.argv[2] || "../data/pokemon.js";

const OUTPUT = process.argv[3] || "./nationaldex-progression.js";

const sandbox = {
  window: {},
};

vm.createContext(sandbox);

vm.runInContext(fs.readFileSync(POKEMON_JS, "utf8"), sandbox);

const pokemonData = Object.values(sandbox.window.POKEMON_BY_NAME)
  .filter((p) => typeof p.dexNumber === "number")
  .sort((a, b) => a.dexNumber - b.dexNumber);

const GENERATIONS = [
  {
    key: "gen1",
    title: "Generation I",
    min: 1,
    max: 151,
  },
  {
    key: "gen2",
    title: "Generation II",
    min: 152,
    max: 251,
  },
  {
    key: "gen3",
    title: "Generation III",
    min: 252,
    max: 386,
  },
  {
    key: "gen4",
    title: "Generation IV",
    min: 387,
    max: 493,
  },
  {
    key: "gen5",
    title: "Generation V",
    min: 494,
    max: 649,
  },
  {
    key: "gen6",
    title: "Generation VI",
    min: 650,
    max: 721,
  },
  {
    key: "gen7",
    title: "Generation VII",
    min: 722,
    max: 809,
  },
  {
    key: "gen8",
    title: "Generation VIII",
    min: 810,
    max: 905,
  },
  {
    key: "gen9",
    title: "Generation IX",
    min: 906,
    max: 1025,
  },
];

function buildOutput() {
  const lines = [];

  lines.push(
    `/* ----------------------
- National Dex Generator
----------------------- */

const guideLink = "";

const guideSource = \`
      <p class="tips-source">
        National Pokédex Tracker
      </p>\`;

const imgBasehref = "assets/images/NationalDex/pokedex/Spr_";
const badgeBasehref = "";

window.gameData = {
  gameId: "nationaldex",
  gameTitle: "National Pokédex",
  logo: "assets/images/logos/nationaldex.png",

  aboutHtml: \`
   <section class="game-intro-content">
      <p>
        Track every Pokémon species in National Dex order.
      </p>

      \${guideSource}
   </section>
  \`,

  progression: {
`,
  );

  GENERATIONS.forEach((generation, generationIndex) => {
    const generationPokemon = pokemonData.filter((p) => p.dexNumber >= generation.min && p.dexNumber <= generation.max);

    lines.push(
      `    "${generation.key}": {
      headerTitle: "${generation.title}",

      headerImg: "",
      headerImgAlt: "",

      summaryShort: "Track all Pokémon from ${generation.title}.",

      summaryHtml: \`
<p>
Track all Pokémon from ${generation.title}.
</p>
\`,

      summaryOpen: false,

      rows: [
`,
    );

    generationPokemon.forEach((pokemon) => {
      const dex = String(pokemon.dexNumber).padStart(3, "0");

      lines.push(
        `        {
          pokemon: {
            img: imgBasehref + "${dex}.png",
            name: "${pokemon.name}"
          },

          method: "National Pokédex"
        },`,
      );
    });

    lines.push(
      `      ]
    }${generationIndex === GENERATIONS.length - 1 ? "" : ","}
`,
    );
  });

  lines.push(
    `  }
};
`,
  );

  return lines.join("\n");
}

fs.writeFileSync(OUTPUT, buildOutput(), "utf8");

console.log(`Generated ${path.resolve(OUTPUT)}`);

console.log(`${pokemonData.length} Pokémon written`);
