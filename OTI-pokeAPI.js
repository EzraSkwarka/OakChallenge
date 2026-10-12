const fs = require("fs");

async function getJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `${response.status} ${url}`,
    );
  }

  return response.json();
}

async function main() {
  const pokemonList = await getJson(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
  );

  const output = [];

  for (const entry of pokemonList.results) {
    const pokemon =
      await getJson(entry.url);

    const species =
      await getJson(
        pokemon.species.url,
      );

    const evolutionChain =
      await getJson(
        species.evolution_chain.url,
      );

    output.push({
      pokemon,
      species,
      evolutionChain,
    });

    console.log(
      `Downloaded #${pokemon.id} ${pokemon.name}`,
    );
  }

  fs.writeFileSync(
    "pokeapi-full.json",
    JSON.stringify(
      output,
      null,
      2,
    ),
  );

  console.log(
    `Saved ${output.length} entries.`,
  );
}

main().catch(console.error);