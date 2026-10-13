/* -----------------------------
| Rare Candy Planner
| -------------------------------------------------------
| Calculates optimal Rare Candy usage for a Professor
| Oak Challenge by evaluating each candy from the final
| evolution level backwards and assigning candies where
| they save the greatest amount of experience.
|
| Workflow:
| 1. User adds Pokémon families to the planner.
| 2. Evolution chains and growth rates are loaded from
|    pokemon.js.
| 3. Candy allocations are calculated from the highest
|    value levels downward.
| 4. Pokémon cards display:
|      - Base species
|      - Final evolution
|      - Recommended candy count
|      - Estimated EXP saved
|
| This file contains only planner logic and UI updates.
| All Pokémon data is loaded from window.POKEMON_DATA and
| window.POKEMON_BY_NAME.
------------------------------ */

/* -----------------------------
| Persistence
------------------------------ */

const LS_RARE_CANDY = "oak-rare-candy-count";

const LS_POKEMON = "oak-rare-candy-pokemon";

function savePlannerState() {
  const pokemon = [];

  document.querySelectorAll(".pokemon-entry").forEach((card) => {
    pokemon.push({
      name: card.querySelector(".pokemon-name").value,

      level: Number(card.querySelector(".current-level").value) || 1,
    });
  });

  localStorage.setItem(LS_POKEMON, JSON.stringify(pokemon));

  localStorage.setItem(LS_RARE_CANDY, rareCandyInput.value);
}

function loadPlannerState() {
  const savedCandies = localStorage.getItem(LS_RARE_CANDY);

  if (savedCandies !== null) {
    rareCandyInput.value = savedCandies;
  }

  const savedPokemon = JSON.parse(localStorage.getItem(LS_POKEMON) || "[]");

  savedPokemon.forEach((pokemon) => {
    createPokemonCard(pokemon.name, pokemon.level);
  });
}

function clearPlannerState() {
  localStorage.removeItem(LS_POKEMON);

  localStorage.removeItem(LS_RARE_CANDY);
}

/* -----------------------------
| DOM References
------------------------------ */

let gameManifest = null;

const pokemonList = document.getElementById("pokemonCardContainer");

const rareCandyInput = document.getElementById("rareCandyCount");

/* -----------------------------
| Pokemon Name Datalist
------------------------------ */

function populatePokemonNames() {
  const datalist = document.getElementById("pokemonNames");

  datalist.innerHTML = "";

  Object.values(window.POKEMON_DATA)
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((pokemon) => {
      const option = document.createElement("option");

      option.value = pokemon.name;

      datalist.appendChild(option);
    });
}

function findPokemon(name) {
  if (!name) {
    return null;
  }

  return window.POKEMON_BY_NAME[name.toLowerCase()];
}

/* -----------------------------
| Growth Rates
------------------------------- */
function getTotalExpForLevel(level, growthRate) {
  const curve = window.GROWTH_RATES[growthRate];

  if (!curve) {
    throw new Error(`Unknown growth rate: ${growthRate}`);
  }

  return curve(level);
}

function getExpForNextLevel(level, growthRate) {
  return getTotalExpForLevel(level + 1, growthRate) - getTotalExpForLevel(level, growthRate);
}

/* -----------------------------
| Import Game
------------------------------ */

async function loadGameManifest() {
  const response = await fetch("data/manifest.games.json");

  gameManifest = await response.json();
}

function getGameInfo(gameId) {
  if (!gameManifest || !gameManifest.games) {
    return null;
  }

  return gameManifest.games.find((game) => game.id === gameId);
}

function pokemonNeedsEvolution(pokemon) {
  return pokemon && pokemon.evolutions && pokemon.evolutions.length > 0;
}

function getEvolutionDepth(pokemon) {
  let depth = 0;
  let current = pokemon;

  while (current && current.evolutions && current.evolutions.length > 0) {
    depth++;

    current = findPokemon(current.evolutions[0].species);
  }

  return depth;
}

function importTrackerProgress(gameId) {
  const caughtData = JSON.parse(localStorage.getItem(`poke-caught:${gameId}`) || "{}");

  const families = {};

  Object.keys(caughtData).forEach((pokemonName) => {
    const pokemon = findPokemon(pokemonName);

    if (!pokemon) {
      return;
    }

    const familyKey = getFinalEvolution(pokemon.name)?.name ?? pokemon.name;

    const current = families[familyKey];

    if (!current) {
      families[familyKey] = pokemon;

      return;
    }

    const currentDepth = getEvolutionDepth(current);

    const pokemonDepth = getEvolutionDepth(pokemon);

    if (pokemonDepth < currentDepth) {
      families[familyKey] = pokemon;
    }
  });

  Object.values(families).forEach((pokemon) => {
    const hasLevelEvolution = pokemon.evolutions.some((evo) => evo.level != null);

    if (!hasLevelEvolution) {
      return;
    }

    const alreadyExists = [...document.querySelectorAll(".pokemon-name")].some((input) => input.value === pokemon.name);

    if (alreadyExists) {
      return;
    }

    createPokemonCard(pokemon.name);
  });

  updatePlanner();
}
/* -----------------------------
| Tracker Import
------------------------------ */

function getAvailableTrackers() {
  const trackers = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (!key.startsWith("poke-caught:")) {
      continue;
    }

    trackers.push(key.replace("poke-caught:", ""));
  }

  return trackers.sort();
}

function formatTrackerName(gameId) {
  return gameId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function renderTrackerImport() {
  const container = document.getElementById("pokemonCardContainer");

  if (!container) {
    return;
  }

  const hasCards = container.querySelectorAll(".pokemon-entry").length > 0;

  if (hasCards) {
    return;
  }

  const trackers = getAvailableTrackers();

  if (!trackers.length) {
    container.innerHTML = `
      <div class="tracker-import-empty">
        No tracker saves were found.
      </div>
    `;

    return;
  }

  container.innerHTML = `
    <div class="tracker-import-wrapper">

      <h3>Import Game</h3>

      <div class="tracker-import-grid">

        ${trackers
          .map((tracker) => {
            const game = getGameInfo(tracker);

            return `
      <button
        type="button"
        class="tracker-import-card"
        data-game="${tracker}"
      >

        ${
          game
            ? `
              <img
                class="tracker-import-image"
                src="${game.cover}"
                alt="${game.name}"
              >
            `
            : ""
        }

        <span>
          ${game?.name ?? formatTrackerName(tracker)}
        </span>

      </button>
    `;
          })
          .join("")}


      </div>

    </div>
  `;

  container.querySelectorAll(".tracker-import-card").forEach((card) => {
    card.addEventListener("click", () => {
      container.innerHTML = "";

      importTrackerProgress(card.dataset.game);
    });
  });
}

/* -----------------------------
| Pokemon Row Management
------------------------------ */

function createPokemonCard(pokemonName, level = 1) {
  const pokemon = findPokemon(pokemonName);

  if (!pokemon) {
    return;
  }

  const finalPokemon = getFinalEvolution(pokemon.name);

  const card = document.createElement("div");

  card.className = "pokemon-entry pokemon-card";

  card.innerHTML = `
  <button
    class="pokemon-card-remove"
    type="button"
  >
    ✕
  </button>

  <input
    type="hidden"
    class="pokemon-name"
    value="${pokemon.name}"
  >

  <input
    type="hidden"
    class="evolution-level"
    value="${getFinalEvolutionLevel(pokemon.name) ?? ""}"
  >

  <div class="pokemon-card-title">
    ${finalPokemon?.name ?? pokemon.name}
  </div>

  <div class="candy-path">

    <img
      class="candy-path-pokemon"
      src="${getPokemonImage(pokemon.name)}"
      alt="${pokemon.name}"
    >

    <div class="candy-path-middle">

      <img
        class="rare-candy-icon"
        src="assets/images/ui/rarecandy.png"
        alt="Rare Candy"
      >

    </div>

    <img
      class="candy-path-pokemon"
      src="${getPokemonImage(finalPokemon?.name ?? pokemon.name)}"
      alt="${finalPokemon?.name ?? pokemon.name}"
    >

  </div>

<div class="candy-level-row">

  <div class="current-level-wrap">
    Lvl.
    <input
      type="number"
      class="current-level"
      min="1"
      max="100"
      value="${level}"
    >
  </div>

  <div class="allocation-summary">
    Saves
    <span class="allocation-exp">
      0
    </span>
    EXP
  </div>

</div>

  <div class="pokemon-allocation-summary">
    Use
    <strong class="allocation-summary-count">
      0
    </strong>
    Rare Candies
  </div>

</div>
`;
  document.getElementById("pokemonCardContainer").querySelector(".tracker-import-wrapper")?.remove();
  pokemonList.appendChild(card);

  card.querySelector(".pokemon-card-remove").addEventListener("click", () => {
    card.remove();

    updatePlanner();

    if (document.querySelectorAll(".pokemon-entry").length === 0) {
      renderTrackerImport();
    }
  });

  card.querySelector(".current-level").addEventListener("input", updatePlanner);
}

function getPokemonImage(name) {
  const pokemon = findPokemon(name);

  if (!pokemon?.image) {
    return "assets/images/placeholder.png";
  }

  return `assets/images/HOME/${pokemon.image}`;
}

/* -----------------------------
| Planner Data Collection
------------------------------ */

function getPlannerPokemon() {
  const pokemon = [];

  document.querySelectorAll(".pokemon-entry").forEach((entry) => {
    const name = entry.querySelector(".pokemon-name").value.trim();

    const current = Number(entry.querySelector(".current-level").value);

    const evolve = Number(entry.querySelector(".evolution-level").value);

    // console.log(name, current, evolve);

    if (!name || !current || !evolve || current >= evolve) {
      return;
    }

    const pokemonData = findPokemon(name);

    pokemon.push({
      name,
      current,
      evolve,
      needed: evolve - current,
      growthRate: pokemonData?.growthRate ?? "medium-fast",
      candiesAllocated: 0,
    });
  });

  return pokemon;
}

function getFinalEvolutionLevel(speciesName) {
  const pokemon = findPokemon(speciesName);

  if (!pokemon) {
    return null;
  }

  let highestLevel = null;

  function walk(currentPokemon) {
    currentPokemon.evolutions.forEach((evo) => {
      if (evo.level != null) {
        highestLevel = highestLevel === null ? evo.level : Math.max(highestLevel, evo.level);
      }

      const nextPokemon = findPokemon(evo.species);

      if (nextPokemon) {
        walk(nextPokemon);
      }
    });
  }

  walk(pokemon);

  return highestLevel;
}

function getFinalEvolution(speciesName) {
  const pokemon = findPokemon(speciesName);

  if (!pokemon) {
    return null;
  }

  let finalPokemon = pokemon;

  function walk(currentPokemon) {
    currentPokemon.evolutions.forEach((evo) => {
      const nextPokemon = findPokemon(evo.species);

      if (nextPokemon) {
        finalPokemon = nextPokemon;
        walk(nextPokemon);
      }
    });
  }

  walk(pokemon);

  return finalPokemon;
}

/* -----------------------------
| Recommendation Builder
------------------------------ */

function calculateAllocation(pokemon, rareCandies) {
  let candiesLeft = rareCandies;

  let totalExpSaved = 0;

  const workingPokemon = pokemon.map((mon) => ({
    ...mon,
  }));

  while (candiesLeft > 0) {
    let bestPokemon = null;
    let bestExpSave = -1;

    workingPokemon.forEach((mon) => {
      if (mon.candiesAllocated >= mon.needed) {
        return;
      }

      const levelBeingSkipped = mon.evolve - mon.candiesAllocated - 1;

      const expSave = getExpForNextLevel(levelBeingSkipped, mon.growthRate);

      if (expSave > bestExpSave) {
        bestExpSave = expSave;
        bestPokemon = mon;
      }
    });

    if (!bestPokemon) {
      break;
    }

    totalExpSaved += bestExpSave;

    bestPokemon.candiesAllocated++;

    candiesLeft--;
  }

  return {
    pokemon: workingPokemon,
    candiesLeft,
    totalExpSaved,
  };
}

function updatePokemonCards(allocationResult) {
  allocationResult.pokemon.forEach((allocation) => {
    const card = [...document.querySelectorAll(".pokemon-entry")].find((entry) => entry.querySelector(".pokemon-name").value === allocation.name);

    if (!card) {
      return;
    }
    if (allocation.candiesAllocated === 0) {
      card.classList.add("is-unallocated");
    } else {
      card.classList.remove("is-unallocated");
    }

    const levelBeingSkipped = allocation.evolve - allocation.candiesAllocated;

    const expSaved = getTotalExpForLevel(allocation.evolve, allocation.growthRate) - getTotalExpForLevel(levelBeingSkipped, allocation.growthRate);

    const candyCount = card.querySelector(".allocation-summary-count");

    if (candyCount) {
      candyCount.textContent = allocation.candiesAllocated;
    }

    card.querySelector(".allocation-exp").textContent = expSaved.toLocaleString();
  });

  const total = document.getElementById("plannerXpSaved");

  if (total) {
    total.textContent = `Estimated XP Saved: ${allocationResult.totalExpSaved.toLocaleString()}`;
  }
}

/* -----------------------------
| Main Planner Update
------------------------------ */

function updatePlanner() {
  const rareCandies = Number(rareCandyInput.value) || 0;

  const pokemon = getPlannerPokemon();

  const allocationResult = calculateAllocation(pokemon, rareCandies);

  updatePokemonCards(allocationResult);

  const xpDisplay = document.getElementById("plannerXpSaved");

  if (xpDisplay) {
    xpDisplay.textContent = `Estimated XP Saved: ${allocationResult.totalExpSaved.toLocaleString()}`;
  }

  savePlannerState();
}

/* -----------------------------
| Pokemon Search
------------------------------ */

const pokemonSearch = document.getElementById("pokemonSearch");

function addPokemonFromSearch() {
  const pokemonName = pokemonSearch.value.trim();

  if (!pokemonName || !findPokemon(pokemonName)) {
    return;
  }

  const alreadyExists = [...document.querySelectorAll(".pokemon-name")].some((input) => input.value === pokemonName);

  if (alreadyExists) {
    pokemonSearch.value = "";
    return;
  }

  createPokemonCard(pokemonName);

  pokemonSearch.value = "";

  updatePlanner();
}
pokemonSearch.addEventListener("change", addPokemonFromSearch);
pokemonSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    addPokemonFromSearch();
  }
});

/* -----------------------------
| Event Wiring
------------------------------ */

rareCandyInput.addEventListener("input", updatePlanner);

/* -----------------------------
| Startup
------------------------------ */

async function boot() {
  await loadGameManifest();

  populatePokemonNames();

  const savedPokemon = JSON.parse(localStorage.getItem(LS_POKEMON) || "[]");

  if (savedPokemon.length > 0) {
    loadPlannerState();
  } else {
    renderTrackerImport();
  }

  updatePlanner();
}

document.addEventListener("DOMContentLoaded", boot);
