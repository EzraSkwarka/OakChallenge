const fs = require("fs");

const raw = JSON.parse(fs.readFileSync("tools/pokeapi-full.json", "utf8"));

function parseEvolutionNode(node) {
  const evolutions = [];

  node.evolves_to.forEach((child) => {
    const details = child.evolution_details[0] || {};

    let method = details.trigger?.name || "unknown";

    const evo = {
      species: child.species.name.replace(/\b\w/g, (c) => c.toUpperCase()),
      method,
    };

    if (details.min_level != null) {
      evo.level = details.min_level;
    }

    if (details.item) {
      evo.item = details.item.name;
    }

    evolutions.push(evo);
  });

  return evolutions;
}

const pokemonByDex = {};
const pokemonByName = {};

raw.forEach((entry) => {
  const pokemon = entry.pokemon;
  const species = entry.species;
  const evolutionChain = entry.evolutionChain;

  let chainNode = null;

  function findNode(node) {
    if (node.species.name === pokemon.name) {
      chainNode = node;
      return;
    }

    node.evolves_to.forEach(findNode);
  }

  findNode(evolutionChain.chain);

  const parsedPokemon = {
    dexNumber: pokemon.id,

    name: species.name.replace(/\b\w/g, (c) => c.toUpperCase()),

    image: `Menu_HOME_${String(pokemon.id).padStart(4, "0")}.png`,

    growthRate: species.growth_rate.name,

    evolutions: chainNode ? parseEvolutionNode(chainNode) : [],
  };

  pokemonByDex[pokemon.id] = parsedPokemon;

  pokemonByName[pokemon.name.toLowerCase()] = parsedPokemon;
});

fs.writeFileSync(
  "pokemon-data.js",
  `
window.POKEMON_DATA =
${JSON.stringify(pokemonByDex, null, 2)};

window.POKEMON_BY_NAME =
${JSON.stringify(pokemonByName, null, 2)};
`,
);
console.log(
  `Generated:
   ${Object.keys(pokemonByDex).length} dex entries
   ${Object.keys(pokemonByName).length} name lookups`,
);
