const sectionsEl = document.getElementById("sections");

let suppressSave = false;

function getPokemon(name) {
  return window.POKEMON_BY_NAME?.[name.toLowerCase()] || null;
}

function getDexString(pokemon) {
  const dex = pokemon?.dexNumber ?? pokemon?.dex ?? pokemon?.nationalDex;

  return String(dex).padStart(3, "0");
}

function buildPokemonBlock(pokemon) {
  return `pokemon: {
            img: imgBasehref + "${getDexString(pokemon)}.png",
            name: "${pokemon.name}"
        }`;
}

function buildEvolutionMethod(previousPokemon, pokemon) {
  const evolution = (previousPokemon.evolutions || []).find((evo) => evo.species?.toLowerCase() === pokemon.name.toLowerCase());

  if (!evolution) {
    return null;
  }

  switch (evolution.method) {
    case "level-up":
      return evolution.level ? `Evolve ${previousPokemon.name} at level ${evolution.level}` : `Evolve ${previousPokemon.name} by leveling up`;

    case "friendship":
      return `Evolve ${previousPokemon.name} with friendship`;

    case "trade":
      return `Trade ${previousPokemon.name}`;

    case "stone":
      return evolution.item ? `Use ${evolution.item} on ${previousPokemon.name}` : `Use evolution stone on ${previousPokemon.name}`;

    default:
      return null;
  }
}

function populatePokemonList() {
  const list = document.getElementById("pokemon-list");

  list.innerHTML = "";

  Object.values(window.POKEMON_BY_NAME || {})
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((pokemon) => {
      const option = document.createElement("option");

      option.value = pokemon.name;

      list.appendChild(option);
    });
}

function addPokemonRow(tbody) {
  const template = document.getElementById("pokemon-row-template");

  const row = template.content.firstElementChild.cloneNode(true);

  const levelupBox = row.querySelector(".pokemon-levelup");

  const methodBox = row.querySelector(".pokemon-method");

  function syncState() {
    methodBox.disabled = levelupBox.checked;

    if (levelupBox.checked) {
      methodBox.value = "";

      methodBox.placeholder = "Auto-generated";
    } else {
      methodBox.placeholder = "Method";
    }
  }

  levelupBox.checked = tbody.children.length > 0;

  syncState();

  levelupBox.addEventListener("change", syncState);

  row.querySelector(".remove-pokemon").addEventListener("click", () => row.remove());

  tbody.appendChild(row);

  saveState();
}

function createStandardSection(container) {
  const section = document.getElementById("standard-section-template").content.firstElementChild.cloneNode(true);

  const tbody = section.querySelector(".standard-pokemon-rows");

  addPokemonRow(tbody);

  section.querySelector(".add-standard-pokemon").addEventListener("click", () => addPokemonRow(tbody));

  section.querySelector(".remove-standard-section").addEventListener("click", () => section.remove());

  container.appendChild(section);

  saveState();
}

function createBranch(container) {
  const branch = document.getElementById("branch-template").content.firstElementChild.cloneNode(true);

  const tbody = branch.querySelector(".pokemon-rows");

  addPokemonRow(tbody);

  branch.querySelector(".add-pokemon").addEventListener("click", () => addPokemonRow(tbody));

  branch.querySelector(".remove-branch").addEventListener("click", () => branch.remove());

  container.appendChild(branch);

  saveState();
}

function createChoiceBlock(container) {
  const block = document.getElementById("choice-block-template").content.firstElementChild.cloneNode(true);

  const branchContainer = block.querySelector(".choice-block-branches");

  block.querySelector(".add-choice-branch").addEventListener("click", () => createBranch(branchContainer));

  block.querySelector(".remove-choice-block").addEventListener("click", () => block.remove());

  createBranch(branchContainer);

  container.appendChild(block);

  saveState();
}

function createSection() {
  const section = document.getElementById("section-template").content.firstElementChild.cloneNode(true);

  section.querySelector(".add-section-standard").addEventListener("click", () => createStandardSection(section.querySelector(".section-standard-sections")));

  section.querySelector(".add-choice-block").addEventListener("click", () => createChoiceBlock(section.querySelector(".section-choice-blocks")));

  section.querySelector(".remove-builder-section").addEventListener("click", () => section.remove());

  sectionsEl.appendChild(section);

  saveState();
}

function markdownToSummaryHtml(markdown) {
  const lines = markdown.split("\n");

  const output = [];

  let paragraph = [];

  let pre = [];

  function flushParagraph() {
    if (!paragraph.length) {
      return;
    }

    output.push(
      `<p>
${paragraph.join(" ")}
</p>`,
    );

    paragraph = [];
  }

  function flushPre() {
    if (!pre.length) {
      return;
    }

    output.push(
      `<pre>
${pre.join("\n")}
</pre>`,
    );

    pre = [];
  }

  lines.forEach((line) => {
    if (line.startsWith("# ")) {
      flushParagraph();
      flushPre();

      output.push(`<h5>${line.substring(2).trim()}</h5>`);

      return;
    }

    if (line.startsWith("     ")) {
      flushParagraph();

      pre.push(line.substring(5));

      return;
    }

    if (!line.trim()) {
      flushParagraph();
      flushPre();

      return;
    }

    flushPre();

    paragraph.push(line.trim());
  });

  flushParagraph();
  flushPre();

  return output.join("\n\n");
}

function buildSummaryShort(markdown) {
  const lines = markdown.split("\n");

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      continue;
    }

    if (trimmed.startsWith("#")) {
      continue;
    }

    if (line.startsWith("     ")) {
      continue;
    }

    return trimmed;
  }

  return "";
}

function generateStandardRows(section) {
  const rows = [];

  section.querySelectorAll(".standard-section").forEach((standardSection) => {
    const header = standardSection.querySelector(".section-header").value.trim();

    if (header) {
      rows.push(`/* --------------------------- ${header} ---------------------------- */`);
    }

    let previousPokemon = null;

    const defaultMethod = standardSection.querySelector(".default-method").value.trim();

    standardSection.querySelectorAll(".standard-pokemon-rows tr").forEach((row) => {
      const pokemonName = row.querySelector(".pokemon-name").value.trim();

      if (!pokemonName) {
        return;
      }

      const pokemon = getPokemon(pokemonName);

      if (!pokemon) {
        return;
      }

      let method = row.querySelector(".pokemon-method").value.trim();

      const levelup = row.querySelector(".pokemon-levelup").checked;

      if (levelup && previousPokemon) {
        method = buildEvolutionMethod(previousPokemon, pokemon) || method;
      }

      if (!method) {
        method = defaultMethod;
      }

      rows.push(
        `{
          ${buildPokemonBlock(pokemon)},
          method: "${method}"
        },`,
      );

      previousPokemon = pokemon;
    });

    rows.push("");
  });

  return rows;
}

function generateChoiceRows(section) {
  const rows = [];

  section.querySelectorAll(".choice-block").forEach((choiceBlock) => {
    const choiceKey = choiceBlock.querySelector(".choice-key").value.trim();

    if (!choiceKey) {
      return;
    }

    const choiceRows = [];

    const lineRows = [];

    choiceBlock.querySelectorAll(".branch").forEach((branch) => {
      const choiceValue = branch.querySelector(".choice-value").value.trim().toLowerCase();

      if (!choiceValue) {
        return;
      }

      let previousPokemon = null;

      let firstPokemon = null;

      const branchRows = [];

      branch.querySelectorAll(".pokemon-rows tr").forEach((row, index) => {
        const pokemonName = row.querySelector(".pokemon-name").value.trim();

        if (!pokemonName) {
          return;
        }

        const pokemon = getPokemon(pokemonName);

        if (!pokemon) {
          return;
        }

        let method = row.querySelector(".pokemon-method").value.trim();

        const levelup = row.querySelector(".pokemon-levelup").checked;

        if (levelup && previousPokemon) {
          method = buildEvolutionMethod(previousPokemon, pokemon) || method;
        }

        if (!method) {
          method = "TODO";
        }

        if (index === 0) {
          firstPokemon = pokemon;

          choiceRows.push(
            `{
          type: "choice",
          choiceKey: "${choiceKey}",
          choiceValue: "${choiceValue}",
          ${buildPokemonBlock(pokemon)},
          method: "Pick this ${choiceKey} to show the ${pokemon.name} line"
        },`,
          );
        }

        branchRows.push(
          `{
          ${buildPokemonBlock(pokemon)},
          method: "${method}",

          requires: {
            ${choiceKey}: "${choiceValue}"
          }
        },`,
        );

        previousPokemon = pokemon;
      });

      if (firstPokemon) {
        lineRows.push(`/* --------------------------- ${firstPokemon.name} Line ---------------------------- */`);

        lineRows.push(...branchRows);

        lineRows.push("");
      }
    });

    if (choiceRows.length) {
      rows.push(`/* --------------------------- ${choiceKey.charAt(0).toUpperCase() + choiceKey.slice(1)} Choice Rows ---------------------------- */`);

      rows.push(...choiceRows);

      rows.push("");

      rows.push(...lineRows);
    }
  });

  return rows;
}

function generateOutput() {
  const gameId = document.getElementById("gameId").value.trim();

  const gameTitle = document.getElementById("gameTitle").value.trim();

  const gameLogo = document.getElementById("gameLogo").value.trim();

  const guideSource = document.getElementById("guideSource").value;

  const sections = [];

  document.querySelectorAll(".builder-section").forEach((section) => {
    const key = section.querySelector(".section-key").value.trim();

    if (!key) {
      return;
    }

    const title = section.querySelector(".section-title").value.trim();

    const image = section.querySelector(".section-image").value.trim();

    const imageAlt = section.querySelector(".section-image-alt").value.trim();

    const summary = section.querySelector(".section-summary").value;

    const rows = [...generateStandardRows(section), ...generateChoiceRows(section)];

    sections.push(
      `"${key}": {
      headerTitle: ${JSON.stringify(title)},
      headerImg: ${JSON.stringify(image)},
      headerImgAlt: ${JSON.stringify(imageAlt)},

      summaryShort: ${JSON.stringify(buildSummaryShort(summary))},

      summaryHtml: \`
${markdownToSummaryHtml(summary)}
\`,

      summaryOpen: false,

      rows: [
${rows.join("\n")}
      ]
    }`,
    );
  });

  document.getElementById("output").value = `gameId: "${gameId}",
gameTitle: "${gameTitle}",
logo: "${gameLogo}",

aboutHtml: \`
<section class="game-intro-content">
${guideSource}
</section>
\`,

progression: {
  ${sections.join(",\n\n")}
}`;
}

document.getElementById("addSection").addEventListener("click", createSection);

document.getElementById("generate").addEventListener("click", generateOutput);

document.getElementById("copyOutput").addEventListener("click", async () => {
  await navigator.clipboard.writeText(document.getElementById("output").value);
});

const STORAGE_KEY = "oak-progression-builder";

const PROFILE_KEY = "oak-progression-profile";

function saveState() {
  if (suppressSave) {
    return;
  }

  console.log("Saving profile:", getCurrentProfile());
  const profiles = getProfiles();

  profiles[getCurrentProfile()] = {
    gameId: document.getElementById("gameId").value,

    gameTitle: document.getElementById("gameTitle").value,

    gameLogo: document.getElementById("gameLogo").value,

    guideSource: document.getElementById("guideSource").value,

    html: sectionsEl.innerHTML,
  };

  console.log(profiles);

  setProfiles(profiles);
}

function restoreState() {
  suppressSave = true;

  try {
    const profiles = getProfiles();

    const profile = profiles[getCurrentProfile()];

    if (!profile) {
      sectionsEl.innerHTML = "";

      createSection();

      return;
    }

    document.getElementById("gameId").value = profile.gameId || "";

    document.getElementById("gameTitle").value = profile.gameTitle || "";

    document.getElementById("gameLogo").value = profile.gameLogo || "";

    document.getElementById("guideSource").value = profile.guideSource || "";

    sectionsEl.innerHTML = profile.html || "";

    sectionsEl.querySelectorAll(".builder-section").forEach(restoreSection);

    if (!sectionsEl.children.length) {
      createSection();
    }
  } finally {
    suppressSave = false;
  }
}
function restoreSection(section) {
  section.querySelector(".add-section-standard").addEventListener("click", () => {
    createStandardSection(section.querySelector(".section-standard-sections"));

    saveState();
  });

  section.querySelector(".add-choice-block").addEventListener("click", () => {
    createChoiceBlock(section.querySelector(".section-choice-blocks"));

    saveState();
  });

  section.querySelector(".remove-builder-section").addEventListener("click", () => {
    section.remove();

    saveState();
  });

  section.querySelectorAll(".standard-section").forEach(restoreStandardSection);

  section.querySelectorAll(".choice-block").forEach(restoreChoiceBlock);
}

function restoreStandardSection(section) {
  const tbody = section.querySelector(".standard-pokemon-rows");

  section.querySelector(".add-standard-pokemon").addEventListener("click", () => {
    addPokemonRow(tbody);

    saveState();
  });

  section.querySelector(".remove-standard-section").addEventListener("click", () => {
    section.remove();

    saveState();
  });

  tbody.querySelectorAll("tr").forEach(restorePokemonRow);
}

function restoreChoiceBlock(block) {
  const branchContainer = block.querySelector(".choice-block-branches");

  block.querySelector(".add-choice-branch").addEventListener("click", () => {
    createBranch(branchContainer);

    saveState();
  });

  block.querySelector(".remove-choice-block").addEventListener("click", () => {
    block.remove();

    saveState();
  });

  branchContainer.querySelectorAll(".branch").forEach(restoreBranch);
}

function restoreBranch(branch) {
  const tbody = branch.querySelector(".pokemon-rows");

  branch.querySelector(".add-pokemon").addEventListener("click", () => {
    addPokemonRow(tbody);

    saveState();
  });

  branch.querySelector(".remove-branch").addEventListener("click", () => {
    branch.remove();

    saveState();
  });

  tbody.querySelectorAll("tr").forEach(restorePokemonRow);
}

function restorePokemonRow(row) {
  const levelup = row.querySelector(".pokemon-levelup");

  const method = row.querySelector(".pokemon-method");

  function sync() {
    method.disabled = levelup.checked;

    if (levelup.checked) {
      method.placeholder = "Auto-generated";
    }
  }

  sync();

  levelup.addEventListener("change", () => {
    sync();

    saveState();
  });

  row.querySelector(".remove-pokemon").addEventListener("click", () => {
    row.remove();

    saveState();
  });
}

function getProfiles() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
}

function setProfiles(profiles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
}

function getCurrentProfile() {
  return localStorage.getItem(PROFILE_KEY) || "default";
}

function setCurrentProfile(profile) {
  localStorage.setItem(PROFILE_KEY, profile);
}

function refreshProfileList() {
  const select = document.getElementById("profileSelect");

  const profiles = getProfiles();

  select.innerHTML = "";

  Object.keys(profiles)
    .sort()
    .forEach((name) => {
      const option = document.createElement("option");

      option.value = name;

      option.textContent = name;

      select.appendChild(option);
    });

  select.value = getCurrentProfile();
}

document.addEventListener("input", saveState);

document.addEventListener("change", saveState);

profileSelect.addEventListener("change", (event) => {
  saveState();

  setCurrentProfile(event.target.value);

  restoreState();
});

document.getElementById("newProfile").addEventListener("click", () => {
  saveState();

  const name = prompt("Profile name?");

  if (!name) {
    return;
  }

  const profiles = getProfiles();

  if (profiles[name]) {
    alert("A profile with that name already exists.");

    return;
  }

  profiles[name] = {};

  setProfiles(profiles);

  setCurrentProfile(name);

  refreshProfileList();

  suppressSave = true;

  document.getElementById("gameId").value = "";

  document.getElementById("gameTitle").value = "";

  document.getElementById("gameLogo").value = "";

  document.getElementById("guideSource").value = "";

  sectionsEl.innerHTML = "";

  createSection();

  suppressSave = false;

  saveState();
});

document.getElementById("renameProfile").addEventListener("click", () => {
  const current = getCurrentProfile();

  const next = prompt("New profile name", current);

  if (!next || next === current) {
    return;
  }

  const profiles = getProfiles();

  profiles[next] = profiles[current];

  delete profiles[current];

  setProfiles(profiles);

  setCurrentProfile(next);

  refreshProfileList();
});

document.getElementById("deleteProfile").addEventListener("click", () => {
  const current = getCurrentProfile();

  if (!confirm(`Delete profile "${current}"?`)) {
    return;
  }

  const profiles = getProfiles();

  delete profiles[current];

  setProfiles(profiles);

  const remaining = Object.keys(profiles);

  const next = remaining[0] || "default";

  if (!profiles[next]) {
    profiles[next] = {};

    setProfiles(profiles);
  }

  setCurrentProfile(next);

  refreshProfileList();

  restoreState();
});

populatePokemonList();

const profiles = getProfiles();

if (!Object.keys(profiles).length) {
  profiles.default = {};

  setProfiles(profiles);
}

refreshProfileList();

restoreState();
