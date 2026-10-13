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
| DOM References
------------------------------ */

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

  pokemonList.appendChild(card);

  card.querySelector(".pokemon-card-remove").addEventListener("click", () => {
    card.remove();
    updatePlanner();
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

function boot() {
  populatePokemonNames();

  // populateTestData();
}

document.addEventListener("DOMContentLoaded", boot);

/* -----------------------------
| Testing
------------------------------ */
function populateTestData() {
  const defaults = [
    {
      name: "Bulbasaur",
      current: 1,
    },
    {
      name: "Weedle",
      current: 1,
    },
    {
      name: "Ekans",
      current: 1,
    },
  ];

  defaults.forEach((entry) => {
    createPokemonCard(entry.name, entry.current);
  });

  updatePlanner();
}
