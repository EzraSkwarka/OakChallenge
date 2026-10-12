/* -----------------------------
| DOM References
------------------------------ */

const pokemonList = document.getElementById("pokemonList");
const addPokemonBtn = document.getElementById("addPokemonBtn");
const rareCandyInput = document.getElementById("rareCandyCount");

/* -----------------------------
| Pokemon Name Datalist
------------------------------ */

function populatePokemonNames() {
  const datalist = document.getElementById("pokemonNames");

  datalist.innerHTML = "";

  window.POKEMON_DATA.sort((a, b) => a.name.localeCompare(b.name)).forEach((pokemon) => {
    const option = document.createElement("option");

    option.value = pokemon.name;

    datalist.appendChild(option);
  });
}

function findPokemon(name) {
  return window.POKEMON_DATA.find((pokemon) => pokemon.name.toLowerCase() === name.trim().toLowerCase());
}

/* -----------------------------
| Pokemon Row Management
------------------------------ */

function createPokemonRow() {
  const row = document.createElement("tr");

  row.className = "pokemon-entry";

  row.innerHTML = `
    <td>
        <input
            type="text"
            class="pokemon-name"
            list="pokemonNames"
        >
    </td>

    <td>
        <input
            type="number"
            class="current-level"
            min="1"
            max="100"
            value="1"
        >
    </td>

    <td>
        <input
            type="number"
            class="evolution-level"
            min="1"
            max="100"
        >
    </td>

    <td class="center">
        <button
            type="button"
            class="remove-pokemon-btn"
        >
            Remove
        </button>
    </td>
`;

  pokemonList.appendChild(row);

  setupRowEvents(row);

  updatePlanner();
}

function setupRowEvents(row) {
  const pokemonInput = row.querySelector(".pokemon-name");

  pokemonInput.addEventListener("change", () => {
    populateEvolutionLevel(row);
  });

  row.querySelector(".remove-pokemon-btn").addEventListener("click", () => {
    row.remove();
    updatePlanner();
  });

  row.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", updatePlanner);
  });
}

function populateEvolutionLevel(row) {
  const pokemonName = row.querySelector(".pokemon-name").value;

  const pokemon = findPokemon(pokemonName);

  if (!pokemon) {
    return;
  }

  row.querySelector(".evolution-level").value = getFinalEvolutionLevel(pokemon.name) ?? "";

  updatePlanner();
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
      if (evo.method === "level") {
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

/* -----------------------------
| Evolution Requirements Table
------------------------------ */

function renderCandidateTable(pokemon) {
  const tbody = document.querySelector("#candidateTable tbody");

  tbody.innerHTML = "";

  pokemon.forEach((mon) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <div class="pkm">
            <img
                src="${getPokemonImage(mon.name)}"
                alt="${mon.name}"
            >
            <span>${mon.name}</span>
            </div>
        </td>

        <td>${mon.current}</td>
        <td>${mon.evolve}</td>
        <td>${mon.needed}</td>
    `;

    tbody.appendChild(row);
  });
}

/* -----------------------------
| Recommendation Builder
------------------------------ */

function buildRecommendation(pokemon, rareCandies, container) {
  container.innerHTML = "";

  let candiesLeft = rareCandies;
  let totalExpSaved = 0;

  const workingPokemon = pokemon.map((mon) => ({
    ...mon,
  }));

  while (candiesLeft > 0) {
    let bestPokemon = null;
    let bestExpSave = -1;

    workingPokemon.forEach((mon) => {
      if (mon.current >= mon.evolve) {
        return;
      }

      const expSave = getExpForNextLevel(mon.current, mon.growthRate);

      if (expSave > bestExpSave) {
        bestExpSave = expSave;
        bestPokemon = mon;
      }
    });

    if (!bestPokemon) {
      break;
    }

    bestPokemon.current++;
    totalExpSaved += bestExpSave;
    bestPokemon.candiesAllocated++;

    candiesLeft--;
  }

  const allocations = workingPokemon.filter((mon) => mon.candiesAllocated > 0);

  if (!allocations.length) {
    container.textContent = "No recommendation available.";

    return;
  }

  const ul = document.createElement("ul");

  allocations.forEach((item) => {
    const li = document.createElement("li");

    li.textContent = `${item.name}: ${item.candiesAllocated}`;

    ul.appendChild(li);
  });

  container.appendChild(ul);

  const remaining = document.createElement("p");

  remaining.textContent = `Candies Remaining: ${candiesLeft}`;

  container.appendChild(remaining);

  const xpSaved = document.createElement("p");

  xpSaved.textContent = `Estimated XP Saved: ${totalExpSaved.toLocaleString()}`;

  container.appendChild(xpSaved);
}

/* -----------------------------
| Main Planner Update
------------------------------ */

function updatePlanner() {
  const recommendationOutput = document.getElementById("recommendationOutput");

  const rareCandies = Number(rareCandyInput.value) || 0;

  const pokemon = getPlannerPokemon();

  renderCandidateTable(pokemon);

  buildRecommendation(pokemon, rareCandies, recommendationOutput);
}

/* -----------------------------
| Event Wiring
------------------------------ */

addPokemonBtn.addEventListener("click", createPokemonRow);

rareCandyInput.addEventListener("input", updatePlanner);

/* -----------------------------
| Startup
------------------------------ */

function boot() {
  populatePokemonNames();

  populateTestData();
  //   createPokemonRow();
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
    createPokemonRow();

    const rows = document.querySelectorAll(".pokemon-entry");

    const row = rows[rows.length - 1];

    row.querySelector(".pokemon-name").value = entry.name;

    populateEvolutionLevel(row);

    row.querySelector(".current-level").value = entry.current;
  });

  updatePlanner();
}
