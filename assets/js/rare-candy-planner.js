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

      finalPokemon: card.querySelector(".final-pokemon-name")?.value ?? "",

      evolutionLevel: Number(card.querySelector(".evolution-level").value) || null,

      gameId: card.querySelector(".source-game")?.value ?? "",
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

  savedPokemon.forEach((saved) => {
    const finalPokemon = findPokemon(saved.finalPokemon);

    const trackerEvolution =
      finalPokemon && saved.evolutionLevel != null
        ? {
            finalPokemon,
            evolutionLevel: saved.evolutionLevel,
            gameId: saved.gameId ?? "",
          }
        : null;

    createPokemonCard(saved.name, saved.level, trackerEvolution);
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
| Growth Rates
------------------------------ */

const GROWTH_RATES = {
  fast(level) {
    return Math.floor((4 * level ** 3) / 5);
  },

  "medium-fast"(level) {
    return level ** 3;
  },

  "medium-slow"(level) {
    return Math.max(0, Math.floor((6 * level ** 3) / 5 - 15 * level ** 2 + 100 * level - 140));
  },

  slow(level) {
    return Math.floor((5 * level ** 3) / 4);
  },

  erratic(level) {
    if (level <= 50) {
      return Math.floor((level ** 3 * (100 - level)) / 50);
    }

    if (level <= 68) {
      return Math.floor((level ** 3 * (150 - level)) / 100);
    }

    if (level <= 98) {
      return Math.floor((level ** 3 * Math.floor((1911 - 10 * level) / 3)) / 500);
    }

    return Math.floor((level ** 3 * (160 - level)) / 100);
  },

  fluctuating(level) {
    if (level <= 15) {
      return Math.floor((level ** 3 * (Math.floor((level + 1) / 3) + 24)) / 50);
    }

    if (level <= 35) {
      return Math.floor((level ** 3 * (level + 14)) / 50);
    }

    return Math.floor((level ** 3 * (Math.floor(level / 2) + 32)) / 50);
  },
};

const GROWTH_RATE_ALIASES = {
  medium: "medium-fast",
  "med-fast": "medium-fast",
  "med-slow": "medium-slow",
  "slow-then-very-fast": "erratic",
  "fast-then-very-slow": "fluctuating",
};

function normalizeGrowthRate(growthRate) {
  const normalized = String(growthRate ?? "medium-fast")
    .trim()
    .toLowerCase()
    .replaceAll("_", "-")
    .replaceAll(" ", "-");

  return GROWTH_RATE_ALIASES[normalized] ?? normalized;
}

function getTotalExpForLevel(level, growthRate) {
  const normalizedRate = normalizeGrowthRate(growthRate);

  const curve = GROWTH_RATES[normalizedRate];

  if (!curve) {
    throw new Error(`Unknown growth rate: ${growthRate}`);
  }

  return curve(level);
}

function getExpForNextLevel(level, growthRate) {
  return getTotalExpForLevel(level + 1, growthRate) - getTotalExpForLevel(level, growthRate);
}
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
| Import Game
------------------------------ */

async function loadGameManifest() {
  try {
    const response = await fetch("data/manifest.games.json");

    if (!response.ok) {
      throw new Error(`Manifest request failed: ${response.status}`);
    }

    gameManifest = await response.json();
  } catch {
    gameManifest = {
      games: [],
    };
  }
}

function getGameInfo(gameId) {
  if (!gameManifest || !gameManifest.games) {
    return null;
  }

  return gameManifest.games.find((game) => game.id === gameId);
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
      importTrackerProgress(card.dataset.game);
    });
  });
}

/* -----------------------------
| Pokemon Row Management
------------------------------ */

function createPokemonCard(pokemonName, level = 1, trackerEvolution = null) {
  const pokemon = findPokemon(pokemonName);

  if (!pokemon) {
    return;
  }

  const finalPokemon = trackerEvolution?.finalPokemon ?? getFinalEvolution(pokemon.name);

  const evolutionLevel = trackerEvolution?.evolutionLevel ?? getFinalEvolutionLevel(pokemon.name);

  if (!finalPokemon || evolutionLevel == null) {
    return;
  }

  const card = document.createElement("div");

  card.className = "pokemon-entry pokemon-card";

  card.innerHTML = `
    <button
      class="pokemon-card-remove"
      type="button"
      aria-label="Remove ${pokemon.name}"
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
      value="${evolutionLevel}"
    >

    <input
      type="hidden"
      class="final-pokemon-name"
      value="${finalPokemon.name}"
    >

    <input
      type="hidden"
      class="source-game"
      value="${trackerEvolution?.gameId ?? ""}"
    >

    <div class="pokemon-card-title">
      ${finalPokemon.name}
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
        src="${getPokemonImage(finalPokemon.name)}"
        alt="${finalPokemon.name}"
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
  Rare Candies starting at Lvl.
  <strong class="allocation-start-level">
    —
  </strong>
</div>
  `;

  pokemonList.querySelector(".tracker-import-wrapper")?.remove();

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
function getLevelEvolutionResult(speciesName, allowedPokemon = null) {
  const pokemon = findPokemon(speciesName);

  if (!pokemon) {
    return null;
  }

  if (allowedPokemon && !allowedPokemon.has(pokemon.name.toLowerCase())) {
    return null;
  }

  function walk(currentPokemon, highestLevel = null, depth = 0) {
    const candidates = currentPokemon.evolutions
      .filter((evolution) => {
        if (evolution.level == null) {
          return false;
        }

        if (allowedPokemon && !allowedPokemon.has(evolution.species.toLowerCase())) {
          return false;
        }

        return true;
      })
      .map((evolution) => {
        const nextPokemon = findPokemon(evolution.species);

        if (!nextPokemon) {
          return null;
        }

        return walk(nextPokemon, Math.max(highestLevel ?? 0, evolution.level), depth + 1);
      })
      .filter(Boolean);

    if (!candidates.length) {
      return {
        pokemon: currentPokemon,
        level: highestLevel,
        depth,
      };
    }

    return candidates.sort((a, b) => {
      if (b.depth !== a.depth) {
        return b.depth - a.depth;
      }

      return a.pokemon.dexNumber - b.pokemon.dexNumber;
    })[0];
  }

  return walk(pokemon);
}

function getFinalEvolution(speciesName, allowedPokemon = null) {
  return getLevelEvolutionResult(speciesName, allowedPokemon)?.pokemon ?? null;
}

function getFinalEvolutionLevel(speciesName, allowedPokemon = null) {
  return getLevelEvolutionResult(speciesName, allowedPokemon)?.level ?? null;
}

function getPlannerPokemon() {
  return [...document.querySelectorAll(".pokemon-entry")]
    .map((entry) => {
      const name = entry.querySelector(".pokemon-name")?.value.trim() ?? "";

      const current = Number(entry.querySelector(".current-level")?.value);

      const evolve = Number(entry.querySelector(".evolution-level")?.value);

      const pokemonData = findPokemon(name);

      if (!pokemonData || !Number.isFinite(current) || !Number.isFinite(evolve) || current < 1 || evolve < 1 || current >= evolve) {
        return null;
      }

      return {
        name: pokemonData.name,

        current,

        evolve,

        needed: evolve - current,

        growthRate: pokemonData.growthRate ?? "medium-fast",

        candiesAllocated: 0,
      };
    })
    .filter(Boolean);
}

function isTrackerPokemonCaught(caughtData, pokemonName) {
  const matchingKey = Object.keys(caughtData).find((name) => name.toLowerCase() === pokemonName.toLowerCase());

  if (!matchingKey) {
    return false;
  }

  const value = caughtData[matchingKey];

  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "number") {
    return value === 1;
  }

  if (typeof value === "string") {
    return value === "true" || value === "1";
  }

  if (value && typeof value === "object") {
    return value.caught === true || value.checked === true || value.complete === true;
  }

  return false;
}

const progressionCache = new Map();

function loadGameProgression(gameId) {
  if (progressionCache.has(gameId)) {
    return Promise.resolve(progressionCache.get(gameId));
  }

  return new Promise((resolve, reject) => {
    const previousGameData = window.gameData;

    const script = document.createElement("script");

    script.src = `data/${gameId}/progression.js`;

    script.onload = () => {
      const loadedGameData = window.gameData;

      if (!loadedGameData || loadedGameData.gameId !== gameId || !loadedGameData.progression) {
        window.gameData = previousGameData;

        script.remove();

        reject(new Error(`Invalid progression data for ${gameId}`));

        return;
      }

      progressionCache.set(gameId, loadedGameData);

      window.gameData = previousGameData;

      script.remove();

      resolve(loadedGameData);
    };

    script.onerror = () => {
      window.gameData = previousGameData;

      script.remove();

      reject(new Error(`Unable to load progression data for ${gameId}`));
    };

    document.head.appendChild(script);
  });
}

function getProgressionPokemonNames(gameData) {
  const names = new Set();

  Object.values(gameData.progression ?? {}).forEach((section) => {
    (section.rows ?? []).forEach((row) => {
      const name = row.pokemon?.name?.trim();

      if (name && findPokemon(name)) {
        names.add(name.toLowerCase());
      }
    });
  });

  return names;
}

async function importTrackerProgress(gameId) {
  const caughtData = JSON.parse(localStorage.getItem(`poke-caught:${gameId}`) || "{}");

  let gameData;

  try {
    gameData = await loadGameProgression(gameId);
  } catch (error) {
    console.error(error);
    return;
  }

  const allowedPokemon = getProgressionPokemonNames(gameData);

  const families = new Map();

  Object.keys(caughtData).forEach((pokemonName) => {
    const pokemon = findPokemon(pokemonName);

    if (!pokemon || !isTrackerPokemonCaught(caughtData, pokemon.name) || !allowedPokemon.has(pokemon.name.toLowerCase())) {
      return;
    }

    const evolutionResult = getLevelEvolutionResult(pokemon.name, allowedPokemon);

    if (!evolutionResult || evolutionResult.depth === 0 || evolutionResult.level == null) {
      return;
    }

    if (isTrackerPokemonCaught(caughtData, evolutionResult.pokemon.name)) {
      return;
    }

    const familyKey = evolutionResult.pokemon.name;

    const existing = families.get(familyKey);

    if (!existing || evolutionResult.depth < existing.evolutionResult.depth) {
      families.set(familyKey, {
        pokemon,
        evolutionResult,
      });
    }
  });

  let importedCount = 0;

  families.forEach(({ pokemon, evolutionResult }) => {
    const alreadyExists = [...document.querySelectorAll(".pokemon-name")].some((input) => input.value.toLowerCase() === pokemon.name.toLowerCase());

    if (alreadyExists) {
      return;
    }

    createPokemonCard(pokemon.name, 1, {
      finalPokemon: evolutionResult.pokemon,

      evolutionLevel: evolutionResult.level,

      gameId,
    });

    importedCount++;
  });

  updatePlanner();

  if (importedCount === 0) {
    renderTrackerImport();
  }
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
  const allocations = new Map(allocationResult.pokemon.map((allocation) => [allocation.name.toLowerCase(), allocation]));

  document.querySelectorAll(".pokemon-entry").forEach((card) => {
    const name = card.querySelector(".pokemon-name")?.value.trim().toLowerCase();

    const allocation = allocations.get(name);

    const candiesAllocated = allocation?.candiesAllocated ?? 0;

    const startLevel = allocation && candiesAllocated > 0 ? allocation.evolve - candiesAllocated : null;

    let expSaved = 0;

    if (allocation && candiesAllocated > 0) {
      expSaved = getTotalExpForLevel(allocation.evolve, allocation.growthRate) - getTotalExpForLevel(startLevel, allocation.growthRate);
    }

    const candyCount = card.querySelector(".allocation-summary-count");

    const startLevelElement = card.querySelector(".allocation-start-level");

    const expElement = card.querySelector(".allocation-exp");

    if (candyCount) {
      candyCount.textContent = candiesAllocated;
    }

    if (startLevelElement) {
      startLevelElement.textContent = startLevel ?? "—";
    }

    if (expElement) {
      expElement.textContent = expSaved.toLocaleString();
    }

    card.classList.toggle("is-unallocated", candiesAllocated === 0);
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
  const rareCandies = Math.max(0, Math.floor(Number(rareCandyInput.value) || 0));

  const pokemon = getPlannerPokemon();

  const allocationResult = calculateAllocation(pokemon, rareCandies);

  updatePokemonCards(allocationResult);

  savePlannerState();
}
/* -----------------------------
| Pokemon Search
------------------------------ */

const pokemonSearch = document.getElementById("pokemonSearch");

function getManualLevelEvolutionSteps(pokemonName) {
  const steps = [];

  let currentPokemon = findPokemon(pokemonName);
  let currentLevel = 1;

  const visited = new Set();

  while (currentPokemon) {
    const currentKey = currentPokemon.name.toLowerCase();

    if (visited.has(currentKey)) {
      break;
    }

    visited.add(currentKey);

    const evolution = (currentPokemon.evolutions || [])
      .filter((entry) => {
        return entry.method === "level-up" && Number.isFinite(Number(entry.level));
      })
      .sort((a, b) => {
        const levelDifference = Number(a.level) - Number(b.level);

        if (levelDifference !== 0) {
          return levelDifference;
        }

        const aPokemon = findPokemon(a.species);
        const bPokemon = findPokemon(b.species);

        return (aPokemon?.dexNumber ?? Number.MAX_SAFE_INTEGER) - (bPokemon?.dexNumber ?? Number.MAX_SAFE_INTEGER);
      })[0];

    if (!evolution) {
      break;
    }

    const nextPokemon = findPokemon(evolution.species);
    const evolutionLevel = Number(evolution.level);

    if (!nextPokemon || !Number.isFinite(evolutionLevel) || evolutionLevel <= currentLevel) {
      break;
    }

    steps.push({
      pokemon: currentPokemon,
      startingLevel: currentLevel,
      finalPokemon: nextPokemon,
      evolutionLevel,
    });

    currentPokemon = nextPokemon;
    currentLevel = evolutionLevel;
  }

  return steps;
}

function addPokemonFromSearch() {
  const pokemonName = pokemonSearch.value.trim();
  const pokemon = findPokemon(pokemonName);

  if (!pokemon) {
    return;
  }

  const steps = getManualLevelEvolutionSteps(pokemon.name);

  if (!steps.length) {
    pokemonSearch.value = "";
    return;
  }

  steps.forEach((step) => {
    const alreadyExists = [...document.querySelectorAll(".pokemon-entry")].some((card) => {
      const existingPokemon = card.querySelector(".pokemon-name")?.value.trim().toLowerCase();

      const existingFinal = card.querySelector(".final-pokemon-name")?.value.trim().toLowerCase();

      return existingPokemon === step.pokemon.name.toLowerCase() && existingFinal === step.finalPokemon.name.toLowerCase();
    });

    if (alreadyExists) {
      return;
    }

    createPokemonCard(step.pokemon.name, step.startingLevel, {
      finalPokemon: step.finalPokemon,
      evolutionLevel: step.evolutionLevel,
      gameId: "",
    });
  });

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
