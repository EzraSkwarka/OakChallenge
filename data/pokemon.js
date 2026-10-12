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

function getPokemonImage(name) {
  const pokemon = findPokemon(name);

  if (!pokemon?.image) {
    return "assets/images/placeholder.png";
  }

  return `assets/images/HOME/${pokemon.image}`;
}

window.GROWTH_RATES = {
  fast(level) {
    return Math.floor((4 * level ** 3) / 5);
  },

  "medium-fast"(level) {
    return level ** 3;
  },

  "medium-slow"(level) {
    return Math.floor((6 * level ** 3) / 5 - 15 * level ** 2 + 100 * level - 140);
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
      return Math.floor((level ** 3 * ((level + 1) / 3 + 24)) / 50);
    }

    if (level <= 36) {
      return Math.floor((level ** 3 * (level + 14)) / 50);
    }

    return Math.floor((level ** 3 * (level / 2 + 32)) / 50);
  },
};

window.POKEMON_DATA = [
  {
    dexNumber: 1,
    name: "Bulbasaur",
    image: "Menu_HOME_0001.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Ivysaur",
        method: "level",
        level: 16,
      },
    ],
  },
  {
    dexNumber: 2,
    name: "Ivysaur",
    image: "Menu_HOME_0002.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Venusaur",
        method: "level",
        level: 32,
      },
    ],
  },
  {
    dexNumber: 3,
    name: "Venusaur",
    image: "Menu_HOME_0003.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 4,
    name: "Charmander",
    image: "Menu_HOME_0004.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Charmeleon",
        method: "level",
        level: 16,
      },
    ],
  },
  {
    dexNumber: 5,
    name: "Charmeleon",
    image: "Menu_HOME_0005.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Charizard",
        method: "level",
        level: 36,
      },
    ],
  },
  {
    dexNumber: 6,
    name: "Charizard",
    image: "Menu_HOME_0006.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 7,
    name: "Squirtle",
    image: "Menu_HOME_0007.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Wartortle",
        method: "level",
        level: 16,
      },
    ],
  },
  {
    dexNumber: 8,
    name: "Wartortle",
    image: "Menu_HOME_0008.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Blastoise",
        method: "level",
        level: 36,
      },
    ],
  },
  {
    dexNumber: 9,
    name: "Blastoise",
    image: "Menu_HOME_0009.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 10,
    name: "Caterpie",
    image: "Menu_HOME_0010.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Metapod",
        method: "level",
        level: 7,
      },
    ],
  },
  {
    dexNumber: 11,
    name: "Metapod",
    image: "Menu_HOME_0011.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Butterfree",
        method: "level",
        level: 10,
      },
    ],
  },
  {
    dexNumber: 12,
    name: "Butterfree",
    image: "Menu_HOME_0012.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 13,
    name: "Weedle",
    image: "Menu_HOME_0013.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Kakuna",
        method: "level",
        level: 7,
      },
    ],
  },
  {
    dexNumber: 14,
    name: "Kakuna",
    image: "Menu_HOME_0014.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Beedrill",
        method: "level",
        level: 10,
      },
    ],
  },
  {
    dexNumber: 15,
    name: "Beedrill",
    image: "Menu_HOME_0015.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 16,
    name: "Pidgey",
    image: "Menu_HOME_0016.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Pidgeotto",
        method: "level",
        level: 18,
      },
    ],
  },
  {
    dexNumber: 17,
    name: "Pidgeotto",
    image: "Menu_HOME_0017.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Pidgeot",
        method: "level",
        level: 36,
      },
    ],
  },
  {
    dexNumber: 18,
    name: "Pidgeot",
    image: "Menu_HOME_0018.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 19,
    name: "Rattata",
    image: "Menu_HOME_0019.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Raticate",
        method: "level",
        level: 20,
      },
    ],
  },
  {
    dexNumber: 20,
    name: "Raticate",
    image: "Menu_HOME_0020.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 21,
    name: "Spearow",
    image: "Menu_HOME_0021.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Fearow",
        method: "level",
        level: 20,
      },
    ],
  },
  {
    dexNumber: 22,
    name: "Fearow",
    image: "Menu_HOME_0022.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 23,
    name: "Ekans",
    image: "Menu_HOME_0023.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Arbok",
        method: "level",
        level: 22,
      },
    ],
  },
  {
    dexNumber: 24,
    name: "Arbok",
    image: "Menu_HOME_0024.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 25,
    name: "Pikachu",
    image: "Menu_HOME_0025.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Raichu",
        method: "stone",
        item: "Thunder Stone",
      },
    ],
  },
  {
    dexNumber: 26,
    name: "Raichu",
    image: "Menu_HOME_0026.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 27,
    name: "Sandshrew",
    image: "Menu_HOME_0027.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Sandslash",
        method: "level",
        level: 22,
      },
    ],
  },
  {
    dexNumber: 28,
    name: "Sandslash",
    image: "Menu_HOME_0028.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 29,
    name: "Nidoran♀",
    image: "Menu_HOME_0029.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Nidorina",
        method: "level",
        level: 16,
      },
    ],
  },
  {
    dexNumber: 30,
    name: "Nidorina",
    image: "Menu_HOME_0030.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Nidoqueen",
        method: "stone",
        item: "Moon Stone",
      },
    ],
  },
  {
    dexNumber: 31,
    name: "Nidoqueen",
    image: "Menu_HOME_0031.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 32,
    name: "Nidoran♂",
    image: "Menu_HOME_0032.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Nidorino",
        method: "level",
        level: 16,
      },
    ],
  },
  {
    dexNumber: 33,
    name: "Nidorino",
    image: "Menu_HOME_0033.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Nidoking",
        method: "stone",
        item: "Moon Stone",
      },
    ],
  },
  {
    dexNumber: 34,
    name: "Nidoking",
    image: "Menu_HOME_0034.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 35,
    name: "Clefairy",
    image: "Menu_HOME_0035.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Clefable",
        method: "stone",
        item: "Moon Stone",
      },
    ],
  },
  {
    dexNumber: 36,
    name: "Clefable",
    image: "Menu_HOME_0036.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 37,
    name: "Vulpix",
    image: "Menu_HOME_0037.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Ninetales",
        method: "stone",
        item: "Fire Stone",
      },
    ],
  },
  {
    dexNumber: 38,
    name: "Ninetales",
    image: "Menu_HOME_0038.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 39,
    name: "Jigglypuff",
    image: "Menu_HOME_0039.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Wigglytuff",
        method: "stone",
        item: "Moon Stone",
      },
    ],
  },
  {
    dexNumber: 40,
    name: "Wigglytuff",
    image: "Menu_HOME_0040.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 41,
    name: "Zubat",
    image: "Menu_HOME_0041.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Golbat",
        method: "level",
        level: 22,
      },
    ],
  },
  {
    dexNumber: 42,
    name: "Golbat",
    image: "Menu_HOME_0042.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 43,
    name: "Oddish",
    image: "Menu_HOME_0043.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Gloom",
        method: "level",
        level: 21,
      },
    ],
  },
  {
    dexNumber: 44,
    name: "Gloom",
    image: "Menu_HOME_0044.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Vileplume",
        method: "stone",
        item: "Leaf Stone",
      },
      {
        species: "Bellossom",
        method: "stone",
        item: "Sun Stone",
      },
    ],
  },
  {
    dexNumber: 45,
    name: "Vileplume",
    image: "Menu_HOME_0045.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 46,
    name: "Paras",
    image: "Menu_HOME_0046.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Parasect",
        method: "level",
        level: 24,
      },
    ],
  },
  {
    dexNumber: 47,
    name: "Parasect",
    image: "Menu_HOME_0047.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 48,
    name: "Venonat",
    image: "Menu_HOME_0048.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Venomoth",
        method: "level",
        level: 31,
      },
    ],
  },
  {
    dexNumber: 49,
    name: "Venomoth",
    image: "Menu_HOME_0049.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 50,
    name: "Diglett",
    image: "Menu_HOME_0050.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Dugtrio",
        method: "level",
        level: 26,
      },
    ],
  },
  {
    dexNumber: 51,
    name: "Dugtrio",
    image: "Menu_HOME_0051.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 52,
    name: "Meowth",
    image: "Menu_HOME_0052.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Persian",
        method: "level",
        level: 28,
      },
    ],
  },
  {
    dexNumber: 53,
    name: "Persian",
    image: "Menu_HOME_0053.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 54,
    name: "Psyduck",
    image: "Menu_HOME_0054.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Golduck",
        method: "level",
        level: 33,
      },
    ],
  },
  {
    dexNumber: 55,
    name: "Golduck",
    image: "Menu_HOME_0055.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 56,
    name: "Mankey",
    image: "Menu_HOME_0056.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Primeape",
        method: "level",
        level: 28,
      },
    ],
  },
  {
    dexNumber: 57,
    name: "Primeape",
    image: "Menu_HOME_0057.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 58,
    name: "Growlithe",
    image: "Menu_HOME_0058.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Arcanine",
        method: "stone",
        item: "Fire Stone",
      },
    ],
  },
  {
    dexNumber: 59,
    name: "Arcanine",
    image: "Menu_HOME_0059.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 60,
    name: "Poliwag",
    image: "Menu_HOME_0060.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Poliwhirl",
        method: "level",
        level: 25,
      },
    ],
  },
  {
    dexNumber: 61,
    name: "Poliwhirl",
    image: "Menu_HOME_0061.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Poliwrath",
        method: "stone",
        item: "Water Stone",
      },
      {
        species: "Politoed",
        method: "trade",
        item: "King's Rock",
      },
    ],
  },
  {
    dexNumber: 62,
    name: "Poliwrath",
    image: "Menu_HOME_0062.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 63,
    name: "Abra",
    image: "Menu_HOME_0063.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Kadabra",
        method: "level",
        level: 16,
      },
    ],
  },
  {
    dexNumber: 64,
    name: "Kadabra",
    image: "Menu_HOME_0064.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Alakazam",
        method: "trade",
      },
    ],
  },
  {
    dexNumber: 65,
    name: "Alakazam",
    image: "Menu_HOME_0065.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 66,
    name: "Machop",
    image: "Menu_HOME_0066.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Machoke",
        method: "level",
        level: 28,
      },
    ],
  },
  {
    dexNumber: 67,
    name: "Machoke",
    image: "Menu_HOME_0067.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Machamp",
        method: "trade",
      },
    ],
  },
  {
    dexNumber: 68,
    name: "Machamp",
    image: "Menu_HOME_0068.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 69,
    name: "Bellsprout",
    image: "Menu_HOME_0069.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Weepinbell",
        method: "level",
        level: 21,
      },
    ],
  },
  {
    dexNumber: 70,
    name: "Weepinbell",
    image: "Menu_HOME_0070.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Victreebel",
        method: "stone",
        item: "Leaf Stone",
      },
    ],
  },
  {
    dexNumber: 71,
    name: "Victreebel",
    image: "Menu_HOME_0071.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 72,
    name: "Tentacool",
    image: "Menu_HOME_0072.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Tentacruel",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 73,
    name: "Tentacruel",
    image: "Menu_HOME_0073.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 74,
    name: "Geodude",
    image: "Menu_HOME_0074.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Graveler",
        method: "level",
        level: 25,
      },
    ],
  },
  {
    dexNumber: 75,
    name: "Graveler",
    image: "Menu_HOME_0075.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Golem",
        method: "trade",
      },
    ],
  },
  {
    dexNumber: 76,
    name: "Golem",
    image: "Menu_HOME_0076.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 77,
    name: "Ponyta",
    image: "Menu_HOME_0077.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Rapidash",
        method: "level",
        level: 40,
      },
    ],
  },
  {
    dexNumber: 78,
    name: "Rapidash",
    image: "Menu_HOME_0078.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 79,
    name: "Slowpoke",
    image: "Menu_HOME_0079.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Slowbro",
        method: "level",
        level: 37,
      },
      {
        species: "Slowking",
        method: "trade",
        item: "King's Rock",
      },
    ],
  },
  {
    dexNumber: 80,
    name: "Slowbro",
    image: "Menu_HOME_0080.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 81,
    name: "Magnemite",
    image: "Menu_HOME_0081.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Magneton",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 82,
    name: "Magneton",
    image: "Menu_HOME_0082.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 83,
    name: "Farfetch'd",
    image: "Menu_HOME_0083.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 84,
    name: "Doduo",
    image: "Menu_HOME_0084.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Dodrio",
        method: "level",
        level: 31,
      },
    ],
  },
  {
    dexNumber: 85,
    name: "Dodrio",
    image: "Menu_HOME_0085.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 86,
    name: "Seel",
    image: "Menu_HOME_0086.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Dewgong",
        method: "level",
        level: 34,
      },
    ],
  },
  {
    dexNumber: 87,
    name: "Dewgong",
    image: "Menu_HOME_0087.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 88,
    name: "Grimer",
    image: "Menu_HOME_0088.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Muk",
        method: "level",
        level: 38,
      },
    ],
  },
  {
    dexNumber: 89,
    name: "Muk",
    image: "Menu_HOME_0089.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 90,
    name: "Shellder",
    image: "Menu_HOME_0090.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Cloyster",
        method: "stone",
        item: "Water Stone",
      },
    ],
  },
  {
    dexNumber: 91,
    name: "Cloyster",
    image: "Menu_HOME_0091.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 92,
    name: "Gastly",
    image: "Menu_HOME_0092.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Haunter",
        method: "level",
        level: 25,
      },
    ],
  },
  {
    dexNumber: 93,
    name: "Haunter",
    image: "Menu_HOME_0093.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Gengar",
        method: "trade",
      },
    ],
  },
  {
    dexNumber: 94,
    name: "Gengar",
    image: "Menu_HOME_0094.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 95,
    name: "Onix",
    image: "Menu_HOME_0095.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Steelix",
        method: "trade",
        item: "Metal Coat",
      },
    ],
  },
  {
    dexNumber: 96,
    name: "Drowzee",
    image: "Menu_HOME_0096.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Hypno",
        method: "level",
        level: 26,
      },
    ],
  },
  {
    dexNumber: 97,
    name: "Hypno",
    image: "Menu_HOME_0097.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 98,
    name: "Krabby",
    image: "Menu_HOME_0098.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Kingler",
        method: "level",
        level: 28,
      },
    ],
  },
  {
    dexNumber: 99,
    name: "Kingler",
    image: "Menu_HOME_0099.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 100,
    name: "Voltorb",
    image: "Menu_HOME_0100.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Electrode",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 101,
    name: "Electrode",
    image: "Menu_HOME_0101.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 102,
    name: "Exeggcute",
    image: "Menu_HOME_0102.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Exeggutor",
        method: "stone",
        item: "Leaf Stone",
      },
    ],
  },
  {
    dexNumber: 103,
    name: "Exeggutor",
    image: "Menu_HOME_0103.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 104,
    name: "Cubone",
    image: "Menu_HOME_0104.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Marowak",
        method: "level",
        level: 28,
      },
    ],
  },
  {
    dexNumber: 105,
    name: "Marowak",
    image: "Menu_HOME_0105.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 106,
    name: "Hitmonlee",
    image: "Menu_HOME_0106.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 107,
    name: "Hitmonchan",
    image: "Menu_HOME_0107.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 108,
    name: "Lickitung",
    image: "Menu_HOME_0108.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 109,
    name: "Koffing",
    image: "Menu_HOME_0109.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Weezing",
        method: "level",
        level: 35,
      },
    ],
  },
  {
    dexNumber: 110,
    name: "Weezing",
    image: "Menu_HOME_0110.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 111,
    name: "Rhyhorn",
    image: "Menu_HOME_0111.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Rhydon",
        method: "level",
        level: 42,
      },
    ],
  },
  {
    dexNumber: 112,
    name: "Rhydon",
    image: "Menu_HOME_0112.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Rhyperior",
        method: "trade",
        item: "Protector",
      },
    ],
  },
  {
    dexNumber: 113,
    name: "Chansey",
    image: "Menu_HOME_0113.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 114,
    name: "Tangela",
    image: "Menu_HOME_0114.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 115,
    name: "Kangaskhan",
    image: "Menu_HOME_0115.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 116,
    name: "Horsea",
    image: "Menu_HOME_0116.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Seadra",
        method: "level",
        level: 32,
      },
    ],
  },
  {
    dexNumber: 117,
    name: "Seadra",
    image: "Menu_HOME_0117.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Kingdra",
        method: "trade",
        item: "Dragon Scale",
      },
    ],
  },
  {
    dexNumber: 118,
    name: "Goldeen",
    image: "Menu_HOME_0118.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Seaking",
        method: "level",
        level: 33,
      },
    ],
  },
  {
    dexNumber: 119,
    name: "Seaking",
    image: "Menu_HOME_0119.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 120,
    name: "Staryu",
    image: "Menu_HOME_0120.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Starmie",
        method: "stone",
        item: "Water Stone",
      },
    ],
  },
  {
    dexNumber: 121,
    name: "Starmie",
    image: "Menu_HOME_0121.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 122,
    name: "Mr. Mime",
    image: "Menu_HOME_0122.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 123,
    name: "Scyther",
    image: "Menu_HOME_0123.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Scizor",
        method: "trade",
        item: "Metal Coat",
      },
    ],
  },
  {
    dexNumber: 124,
    name: "Jynx",
    image: "Menu_HOME_0124.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 125,
    name: "Electabuzz",
    image: "Menu_HOME_0125.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Electivire",
        method: "trade",
        item: "Electirizer",
      },
    ],
  },
  {
    dexNumber: 126,
    name: "Magmar",
    image: "Menu_HOME_0126.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Magmortar",
        method: "trade",
        item: "Magmarizer",
      },
    ],
  },
  {
    dexNumber: 127,
    name: "Pinsir",
    image: "Menu_HOME_0127.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 128,
    name: "Tauros",
    image: "Menu_HOME_0128.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 129,
    name: "Magikarp",
    image: "Menu_HOME_0129.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Gyarados",
        method: "level",
        level: 20,
      },
    ],
  },
  {
    dexNumber: 130,
    name: "Gyarados",
    image: "Menu_HOME_0130.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 131,
    name: "Lapras",
    image: "Menu_HOME_0131.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 132,
    name: "Ditto",
    image: "Menu_HOME_0132.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 133,
    name: "Eevee",
    image: "Menu_HOME_0133.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Vaporeon",
        method: "stone",
        item: "Water Stone",
      },
      {
        species: "Jolteon",
        method: "stone",
        item: "Thunder Stone",
      },
      {
        species: "Flareon",
        method: "stone",
        item: "Fire Stone",
      },
      {
        species: "Espeon",
        method: "friendship",
      },
      {
        species: "Umbreon",
        method: "friendship",
      },
      {
        species: "Leafeon",
        method: "stone",
        item: "Leaf Stone",
      },
      {
        species: "Glaceon",
        method: "stone",
        item: "Ice Stone",
      },
      {
        species: "Sylveon",
        method: "friendship",
      },
    ],
  },
  {
    dexNumber: 134,
    name: "Vaporeon",
    image: "Menu_HOME_0134.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 135,
    name: "Jolteon",
    image: "Menu_HOME_0135.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 136,
    name: "Flareon",
    image: "Menu_HOME_0136.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 137,
    name: "Porygon",
    image: "Menu_HOME_0137.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Porygon2",
        method: "trade",
        item: "Up-Grade",
      },
    ],
  },
  {
    dexNumber: 138,
    name: "Omanyte",
    image: "Menu_HOME_0138.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Omastar",
        method: "level",
        level: 40,
      },
    ],
  },
  {
    dexNumber: 139,
    name: "Omastar",
    image: "Menu_HOME_0139.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 140,
    name: "Kabuto",
    image: "Menu_HOME_0140.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Kabutops",
        method: "level",
        level: 40,
      },
    ],
  },
  {
    dexNumber: 141,
    name: "Kabutops",
    image: "Menu_HOME_0141.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 142,
    name: "Aerodactyl",
    image: "Menu_HOME_0142.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 143,
    name: "Snorlax",
    image: "Menu_HOME_0143.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 144,
    name: "Articuno",
    image: "Menu_HOME_0144.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 145,
    name: "Zapdos",
    image: "Menu_HOME_0145.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 146,
    name: "Moltres",
    image: "Menu_HOME_0146.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 147,
    name: "Dratini",
    image: "Menu_HOME_0147.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Dragonair",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 148,
    name: "Dragonair",
    image: "Menu_HOME_0148.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Dragonite",
        method: "level",
        level: 55,
      },
    ],
  },
  {
    dexNumber: 149,
    name: "Dragonite",
    image: "Menu_HOME_0149.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 150,
    name: "Mewtwo",
    image: "Menu_HOME_0150.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 151,
    name: "Mew",
    image: "Menu_HOME_0151.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 152,
    name: "Chikorita",
    image: "Menu_HOME_0152.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Bayleef",
        method: "level",
        level: 16,
      },
    ],
  },
  {
    dexNumber: 153,
    name: "Bayleef",
    image: "Menu_HOME_0153.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Meganium",
        method: "level",
        level: 32,
      },
    ],
  },
  {
    dexNumber: 154,
    name: "Meganium",
    image: "Menu_HOME_0154.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 155,
    name: "Cyndaquil",
    image: "Menu_HOME_0155.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Quilava",
        method: "level",
        level: 14,
      },
    ],
  },
  {
    dexNumber: 156,
    name: "Quilava",
    image: "Menu_HOME_0156.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Typhlosion",
        method: "level",
        level: 36,
      },
    ],
  },
  {
    dexNumber: 157,
    name: "Typhlosion",
    image: "Menu_HOME_0157.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 158,
    name: "Totodile",
    image: "Menu_HOME_0158.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Croconaw",
        method: "level",
        level: 18,
      },
    ],
  },
  {
    dexNumber: 159,
    name: "Croconaw",
    image: "Menu_HOME_0159.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Feraligatr",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 160,
    name: "Feraligatr",
    image: "Menu_HOME_0160.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 161,
    name: "Sentret",
    image: "Menu_HOME_0161.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Furret",
        method: "level",
        level: 15,
      },
    ],
  },
  {
    dexNumber: 162,
    name: "Furret",
    image: "Menu_HOME_0162.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 163,
    name: "Hoothoot",
    image: "Menu_HOME_0163.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Noctowl",
        method: "level",
        level: 20,
      },
    ],
  },
  {
    dexNumber: 164,
    name: "Noctowl",
    image: "Menu_HOME_0164.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 165,
    name: "Ledyba",
    image: "Menu_HOME_0165.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Ledian",
        method: "level",
        level: 18,
      },
    ],
  },
  {
    dexNumber: 166,
    name: "Ledian",
    image: "Menu_HOME_0166.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 167,
    name: "Spinarak",
    image: "Menu_HOME_0167.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Ariados",
        method: "level",
        level: 22,
      },
    ],
  },
  {
    dexNumber: 168,
    name: "Ariados",
    image: "Menu_HOME_0168.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 169,
    name: "Crobat",
    image: "Menu_HOME_0169.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 170,
    name: "Chinchou",
    image: "Menu_HOME_0170.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Lanturn",
        method: "level",
        level: 27,
      },
    ],
  },
  {
    dexNumber: 171,
    name: "Lanturn",
    image: "Menu_HOME_0171.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 172,
    name: "Pichu",
    image: "Menu_HOME_0172.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Pikachu",
        method: "friendship",
      },
    ],
  },
  {
    dexNumber: 173,
    name: "Cleffa",
    image: "Menu_HOME_0173.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Clefairy",
        method: "friendship",
      },
    ],
  },
  {
    dexNumber: 174,
    name: "Igglybuff",
    image: "Menu_HOME_0174.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Jigglypuff",
        method: "friendship",
      },
    ],
  },
  {
    dexNumber: 175,
    name: "Togepi",
    image: "Menu_HOME_0175.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Togetic",
        method: "friendship",
      },
    ],
  },
  {
    dexNumber: 176,
    name: "Togetic",
    image: "Menu_HOME_0176.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Togekiss",
        method: "stone",
        item: "Shiny Stone",
      },
    ],
  },
  {
    dexNumber: 177,
    name: "Natu",
    image: "Menu_HOME_0177.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Xatu",
        method: "level",
        level: 25,
      },
    ],
  },
  {
    dexNumber: 178,
    name: "Xatu",
    image: "Menu_HOME_0178.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 179,
    name: "Mareep",
    image: "Menu_HOME_0179.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Flaaffy",
        method: "level",
        level: 15,
      },
    ],
  },
  {
    dexNumber: 180,
    name: "Flaaffy",
    image: "Menu_HOME_0180.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Ampharos",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 181,
    name: "Ampharos",
    image: "Menu_HOME_0181.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 182,
    name: "Bellossom",
    image: "Menu_HOME_0182.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 183,
    name: "Marill",
    image: "Menu_HOME_0183.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Azumarill",
        method: "level",
        level: 18,
      },
    ],
  },
  {
    dexNumber: 184,
    name: "Azumarill",
    image: "Menu_HOME_0184.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 185,
    name: "Sudowoodo",
    image: "Menu_HOME_0185.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 186,
    name: "Politoed",
    image: "Menu_HOME_0186.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 187,
    name: "Hoppip",
    image: "Menu_HOME_0187.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Skiploom",
        method: "level",
        level: 18,
      },
    ],
  },
  {
    dexNumber: 188,
    name: "Skiploom",
    image: "Menu_HOME_0188.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Jumpluff",
        method: "level",
        level: 27,
      },
    ],
  },
  {
    dexNumber: 189,
    name: "Jumpluff",
    image: "Menu_HOME_0189.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 190,
    name: "Aipom",
    image: "Menu_HOME_0190.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Ambipom",
        method: "move",
      },
    ],
  },
  {
    dexNumber: 191,
    name: "Sunkern",
    image: "Menu_HOME_0191.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Sunflora",
        method: "stone",
        item: "Sun Stone",
      },
    ],
  },
  {
    dexNumber: 192,
    name: "Sunflora",
    image: "Menu_HOME_0192.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 193,
    name: "Yanma",
    image: "Menu_HOME_0193.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Yanmega",
        method: "move",
      },
    ],
  },
  {
    dexNumber: 194,
    name: "Wooper",
    image: "Menu_HOME_0194.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Quagsire",
        method: "level",
        level: 20,
      },
    ],
  },
  {
    dexNumber: 195,
    name: "Quagsire",
    image: "Menu_HOME_0195.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 196,
    name: "Espeon",
    image: "Menu_HOME_0196.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 197,
    name: "Umbreon",
    image: "Menu_HOME_0197.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 198,
    name: "Murkrow",
    image: "Menu_HOME_0198.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Honchkrow",
        method: "stone",
        item: "Dusk Stone",
      },
    ],
  },
  {
    dexNumber: 199,
    name: "Slowking",
    image: "Menu_HOME_0199.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 200,
    name: "Misdreavus",
    image: "Menu_HOME_0200.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Mismagius",
        method: "stone",
        item: "Dusk Stone",
      },
    ],
  },
  {
    dexNumber: 201,
    name: "Unown",
    image: "Menu_HOME_0201.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 202,
    name: "Wobbuffet",
    image: "Menu_HOME_0202.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 203,
    name: "Girafarig",
    image: "Menu_HOME_0203.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Farigiraf",
        method: "move",
      },
    ],
  },
  {
    dexNumber: 204,
    name: "Pineco",
    image: "Menu_HOME_0204.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Forretress",
        method: "level",
        level: 31,
      },
    ],
  },
  {
    dexNumber: 205,
    name: "Forretress",
    image: "Menu_HOME_0205.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 206,
    name: "Dunsparce",
    image: "Menu_HOME_0206.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Dudunsparce",
        method: "move",
      },
    ],
  },
  {
    dexNumber: 207,
    name: "Gligar",
    image: "Menu_HOME_0207.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Gliscor",
        method: "item-level",
        item: "Razor Fang",
      },
    ],
  },
  {
    dexNumber: 208,
    name: "Steelix",
    image: "Menu_HOME_0208.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 209,
    name: "Snubbull",
    image: "Menu_HOME_0209.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Granbull",
        method: "level",
        level: 23,
      },
    ],
  },
  {
    dexNumber: 210,
    name: "Granbull",
    image: "Menu_HOME_0210.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 211,
    name: "Qwilfish",
    image: "Menu_HOME_0211.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 212,
    name: "Scizor",
    image: "Menu_HOME_0212.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 213,
    name: "Shuckle",
    image: "Menu_HOME_0213.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 214,
    name: "Heracross",
    image: "Menu_HOME_0214.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 215,
    name: "Sneasel",
    image: "Menu_HOME_0215.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Weavile",
        method: "item-level",
        item: "Razor Claw",
      },
    ],
  },
  {
    dexNumber: 216,
    name: "Teddiursa",
    image: "Menu_HOME_0216.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Ursaring",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 217,
    name: "Ursaring",
    image: "Menu_HOME_0217.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Ursaluna",
        method: "item",
        item: "Peat Block",
      },
    ],
  },
  {
    dexNumber: 218,
    name: "Slugma",
    image: "Menu_HOME_0218.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Magcargo",
        method: "level",
        level: 38,
      },
    ],
  },
  {
    dexNumber: 219,
    name: "Magcargo",
    image: "Menu_HOME_0219.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 220,
    name: "Swinub",
    image: "Menu_HOME_0220.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Piloswine",
        method: "level",
        level: 33,
      },
    ],
  },
  {
    dexNumber: 221,
    name: "Piloswine",
    image: "Menu_HOME_0221.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Mamoswine",
        method: "move",
      },
    ],
  },
  {
    dexNumber: 222,
    name: "Corsola",
    image: "Menu_HOME_0222.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 223,
    name: "Remoraid",
    image: "Menu_HOME_0223.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Octillery",
        method: "level",
        level: 25,
      },
    ],
  },
  {
    dexNumber: 224,
    name: "Octillery",
    image: "Menu_HOME_0224.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 225,
    name: "Delibird",
    image: "Menu_HOME_0225.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 226,
    name: "Mantine",
    image: "Menu_HOME_0226.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 227,
    name: "Skarmory",
    image: "Menu_HOME_0227.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 228,
    name: "Houndour",
    image: "Menu_HOME_0228.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Houndoom",
        method: "level",
        level: 24,
      },
    ],
  },
  {
    dexNumber: 229,
    name: "Houndoom",
    image: "Menu_HOME_0229.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 230,
    name: "Kingdra",
    image: "Menu_HOME_0230.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 231,
    name: "Phanpy",
    image: "Menu_HOME_0231.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Donphan",
        method: "level",
        level: 25,
      },
    ],
  },
  {
    dexNumber: 232,
    name: "Donphan",
    image: "Menu_HOME_0232.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 233,
    name: "Porygon2",
    image: "Menu_HOME_0233.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Porygon-Z",
        method: "trade",
        item: "Dubious Disc",
      },
    ],
  },
  {
    dexNumber: 234,
    name: "Stantler",
    image: "Menu_HOME_0234.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Wyrdeer",
        method: "move",
      },
    ],
  },
  {
    dexNumber: 235,
    name: "Smeargle",
    image: "Menu_HOME_0235.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 236,
    name: "Tyrogue",
    image: "Menu_HOME_0236.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Hitmonlee",
        method: "stat",
      },
      {
        species: "Hitmonchan",
        method: "stat",
      },
      {
        species: "Hitmontop",
        method: "stat",
      },
    ],
  },
  {
    dexNumber: 237,
    name: "Hitmontop",
    image: "Menu_HOME_0237.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 238,
    name: "Smoochum",
    image: "Menu_HOME_0238.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Jynx",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 239,
    name: "Elekid",
    image: "Menu_HOME_0239.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Electabuzz",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 240,
    name: "Magby",
    image: "Menu_HOME_0240.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Magmar",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 241,
    name: "Miltank",
    image: "Menu_HOME_0241.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 242,
    name: "Blissey",
    image: "Menu_HOME_0242.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 243,
    name: "Raikou",
    image: "Menu_HOME_0243.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 244,
    name: "Entei",
    image: "Menu_HOME_0244.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 245,
    name: "Suicune",
    image: "Menu_HOME_0245.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 246,
    name: "Larvitar",
    image: "Menu_HOME_0246.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Pupitar",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 247,
    name: "Pupitar",
    image: "Menu_HOME_0247.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Tyranitar",
        method: "level",
        level: 55,
      },
    ],
  },
  {
    dexNumber: 248,
    name: "Tyranitar",
    image: "Menu_HOME_0248.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 249,
    name: "Lugia",
    image: "Menu_HOME_0249.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 250,
    name: "Ho-Oh",
    image: "Menu_HOME_0250.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 251,
    name: "Celebi",
    image: "Menu_HOME_0251.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
    {
    dexNumber: 252,
    name: "Treecko",
    image: "Menu_HOME_0252.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Grovyle",
        method: "level",
        level: 16,
      },
    ],
  },
  {
    dexNumber: 253,
    name: "Grovyle",
    image: "Menu_HOME_0253.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Sceptile",
        method: "level",
        level: 36,
      },
    ],
  },
  {
    dexNumber: 254,
    name: "Sceptile",
    image: "Menu_HOME_0254.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 255,
    name: "Torchic",
    image: "Menu_HOME_0255.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Combusken",
        method: "level",
        level: 16,
      },
    ],
  },
  {
    dexNumber: 256,
    name: "Combusken",
    image: "Menu_HOME_0256.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Blaziken",
        method: "level",
        level: 36,
      },
    ],
  },
  {
    dexNumber: 257,
    name: "Blaziken",
    image: "Menu_HOME_0257.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 258,
    name: "Mudkip",
    image: "Menu_HOME_0258.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Marshtomp",
        method: "level",
        level: 16,
      },
    ],
  },
  {
    dexNumber: 259,
    name: "Marshtomp",
    image: "Menu_HOME_0259.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Swampert",
        method: "level",
        level: 36,
      },
    ],
  },
  {
    dexNumber: 260,
    name: "Swampert",
    image: "Menu_HOME_0260.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 261,
    name: "Poochyena",
    image: "Menu_HOME_0261.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Mightyena",
        method: "level",
        level: 18,
      },
    ],
  },
  {
    dexNumber: 262,
    name: "Mightyena",
    image: "Menu_HOME_0262.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 263,
    name: "Zigzagoon",
    image: "Menu_HOME_0263.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Linoone",
        method: "level",
        level: 20,
      },
    ],
  },
  {
    dexNumber: 264,
    name: "Linoone",
    image: "Menu_HOME_0264.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 265,
    name: "Wurmple",
    image: "Menu_HOME_0265.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Silcoon",
        method: "level",
        level: 7,
      },
      {
        species: "Cascoon",
        method: "level",
        level: 7,
      },
    ],
  },
  {
    dexNumber: 266,
    name: "Silcoon",
    image: "Menu_HOME_0266.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Beautifly",
        method: "level",
        level: 10,
      },
    ],
  },
  {
    dexNumber: 267,
    name: "Beautifly",
    image: "Menu_HOME_0267.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 268,
    name: "Cascoon",
    image: "Menu_HOME_0268.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Dustox",
        method: "level",
        level: 10,
      },
    ],
  },
  {
    dexNumber: 269,
    name: "Dustox",
    image: "Menu_HOME_0269.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 270,
    name: "Lotad",
    image: "Menu_HOME_0270.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Lombre",
        method: "level",
        level: 14,
      },
    ],
  },
  {
    dexNumber: 271,
    name: "Lombre",
    image: "Menu_HOME_0271.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Ludicolo",
        method: "stone",
        item: "Water Stone",
      },
    ],
  },
  {
    dexNumber: 272,
    name: "Ludicolo",
    image: "Menu_HOME_0272.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 273,
    name: "Seedot",
    image: "Menu_HOME_0273.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Nuzleaf",
        method: "level",
        level: 14,
      },
    ],
  },
  {
    dexNumber: 274,
    name: "Nuzleaf",
    image: "Menu_HOME_0274.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Shiftry",
        method: "stone",
        item: "Leaf Stone",
      },
    ],
  },
  {
    dexNumber: 275,
    name: "Shiftry",
    image: "Menu_HOME_0275.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 276,
    name: "Taillow",
    image: "Menu_HOME_0276.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Swellow",
        method: "level",
        level: 22,
      },
    ],
  },
  {
    dexNumber: 277,
    name: "Swellow",
    image: "Menu_HOME_0277.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 278,
    name: "Wingull",
    image: "Menu_HOME_0278.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Pelipper",
        method: "level",
        level: 25,
      },
    ],
  },
  {
    dexNumber: 279,
    name: "Pelipper",
    image: "Menu_HOME_0279.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 280,
    name: "Ralts",
    image: "Menu_HOME_0280.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Kirlia",
        method: "level",
        level: 20,
      },
    ],
  },
  {
    dexNumber: 281,
    name: "Kirlia",
    image: "Menu_HOME_0281.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Gardevoir",
        method: "level",
        level: 30,
      },
      {
        species: "Gallade",
        method: "stone",
        item: "Dawn Stone",
      },
    ],
  },
  {
    dexNumber: 282,
    name: "Gardevoir",
    image: "Menu_HOME_0282.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 283,
    name: "Surskit",
    image: "Menu_HOME_0283.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Masquerain",
        method: "level",
        level: 22,
      },
    ],
  },
  {
    dexNumber: 284,
    name: "Masquerain",
    image: "Menu_HOME_0284.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 285,
    name: "Shroomish",
    image: "Menu_HOME_0285.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Breloom",
        method: "level",
        level: 23,
      },
    ],
  },
  {
    dexNumber: 286,
    name: "Breloom",
    image: "Menu_HOME_0286.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 287,
    name: "Slakoth",
    image: "Menu_HOME_0287.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Vigoroth",
        method: "level",
        level: 18,
      },
    ],
  },
  {
    dexNumber: 288,
    name: "Vigoroth",
    image: "Menu_HOME_0288.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Slaking",
        method: "level",
        level: 36,
      },
    ],
  },
  {
    dexNumber: 289,
    name: "Slaking",
    image: "Menu_HOME_0289.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 290,
    name: "Nincada",
    image: "Menu_HOME_0290.png",
    growthRate: "erratic",
    evolutions: [
      {
        species: "Ninjask",
        method: "level",
        level: 20,
      },
      {
        species: "Shedinja",
        method: "special",
      },
    ],
  },
  {
    dexNumber: 291,
    name: "Ninjask",
    image: "Menu_HOME_0291.png",
    growthRate: "erratic",
    evolutions: [],
  },
  {
    dexNumber: 292,
    name: "Shedinja",
    image: "Menu_HOME_0292.png",
    growthRate: "erratic",
    evolutions: [],
  },
  {
    dexNumber: 293,
    name: "Whismur",
    image: "Menu_HOME_0293.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Loudred",
        method: "level",
        level: 20,
      },
    ],
  },
  {
    dexNumber: 294,
    name: "Loudred",
    image: "Menu_HOME_0294.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Exploud",
        method: "level",
        level: 40,
      },
    ],
  },
  {
    dexNumber: 295,
    name: "Exploud",
    image: "Menu_HOME_0295.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 296,
    name: "Makuhita",
    image: "Menu_HOME_0296.png",
    growthRate: "fluctuating",
    evolutions: [
      {
        species: "Hariyama",
        method: "level",
        level: 24,
      },
    ],
  },
  {
    dexNumber: 297,
    name: "Hariyama",
    image: "Menu_HOME_0297.png",
    growthRate: "fluctuating",
    evolutions: [],
  },
  {
    dexNumber: 298,
    name: "Azurill",
    image: "Menu_HOME_0298.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Marill",
        method: "friendship",
      },
    ],
  },
  {
    dexNumber: 299,
    name: "Nosepass",
    image: "Menu_HOME_0299.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Probopass",
        method: "special",
      },
    ],
  },
  {
    dexNumber: 300,
    name: "Skitty",
    image: "Menu_HOME_0300.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Delcatty",
        method: "stone",
        item: "Moon Stone",
      },
    ],
  },
  {
    dexNumber: 301,
    name: "Delcatty",
    image: "Menu_HOME_0301.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 302,
    name: "Sableye",
    image: "Menu_HOME_0302.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 303,
    name: "Mawile",
    image: "Menu_HOME_0303.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 304,
    name: "Aron",
    image: "Menu_HOME_0304.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Lairon",
        method: "level",
        level: 32,
      },
    ],
  },
  {
    dexNumber: 305,
    name: "Lairon",
    image: "Menu_HOME_0305.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Aggron",
        method: "level",
        level: 42,
      },
    ],
  },
  {
    dexNumber: 306,
    name: "Aggron",
    image: "Menu_HOME_0306.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 307,
    name: "Meditite",
    image: "Menu_HOME_0307.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Medicham",
        method: "level",
        level: 37,
      },
    ],
  },
  {
    dexNumber: 308,
    name: "Medicham",
    image: "Menu_HOME_0308.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 309,
    name: "Electrike",
    image: "Menu_HOME_0309.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Manectric",
        method: "level",
        level: 26,
      },
    ],
  },
  {
    dexNumber: 310,
    name: "Manectric",
    image: "Menu_HOME_0310.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 311,
    name: "Plusle",
    image: "Menu_HOME_0311.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 312,
    name: "Minun",
    image: "Menu_HOME_0312.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 313,
    name: "Volbeat",
    image: "Menu_HOME_0313.png",
    growthRate: "erratic",
    evolutions: [],
  },
  {
    dexNumber: 314,
    name: "Illumise",
    image: "Menu_HOME_0314.png",
    growthRate: "erratic",
    evolutions: [],
  },
  {
    dexNumber: 315,
    name: "Roselia",
    image: "Menu_HOME_0315.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Roserade",
        method: "stone",
        item: "Shiny Stone",
      },
    ],
  },
  {
    dexNumber: 316,
    name: "Gulpin",
    image: "Menu_HOME_0316.png",
    growthRate: "fluctuating",
    evolutions: [
      {
        species: "Swalot",
        method: "level",
        level: 26,
      },
    ],
  },
  {
    dexNumber: 317,
    name: "Swalot",
    image: "Menu_HOME_0317.png",
    growthRate: "fluctuating",
    evolutions: [],
  },
  {
    dexNumber: 318,
    name: "Carvanha",
    image: "Menu_HOME_0318.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Sharpedo",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 319,
    name: "Sharpedo",
    image: "Menu_HOME_0319.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 320,
    name: "Wailmer",
    image: "Menu_HOME_0320.png",
    growthRate: "fluctuating",
    evolutions: [
      {
        species: "Wailord",
        method: "level",
        level: 40,
      },
    ],
  },
  {
    dexNumber: 321,
    name: "Wailord",
    image: "Menu_HOME_0321.png",
    growthRate: "fluctuating",
    evolutions: [],
  },
  {
    dexNumber: 322,
    name: "Numel",
    image: "Menu_HOME_0322.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Camerupt",
        method: "level",
        level: 33,
      },
    ],
  },
  {
    dexNumber: 323,
    name: "Camerupt",
    image: "Menu_HOME_0323.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 324,
    name: "Torkoal",
    image: "Menu_HOME_0324.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 325,
    name: "Spoink",
    image: "Menu_HOME_0325.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Grumpig",
        method: "level",
        level: 32,
      },
    ],
  },
  {
    dexNumber: 326,
    name: "Grumpig",
    image: "Menu_HOME_0326.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 327,
    name: "Spinda",
    image: "Menu_HOME_0327.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 328,
    name: "Trapinch",
    image: "Menu_HOME_0328.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Vibrava",
        method: "level",
        level: 35,
      },
    ],
  },
  {
    dexNumber: 329,
    name: "Vibrava",
    image: "Menu_HOME_0329.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Flygon",
        method: "level",
        level: 45,
      },
    ],
  },
  {
    dexNumber: 330,
    name: "Flygon",
    image: "Menu_HOME_0330.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 331,
    name: "Cacnea",
    image: "Menu_HOME_0331.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Cacturne",
        method: "level",
        level: 32,
      },
    ],
  },
  {
    dexNumber: 332,
    name: "Cacturne",
    image: "Menu_HOME_0332.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 333,
    name: "Swablu",
    image: "Menu_HOME_0333.png",
    growthRate: "erratic",
    evolutions: [
      {
        species: "Altaria",
        method: "level",
        level: 35,
      },
    ],
  },
  {
    dexNumber: 334,
    name: "Altaria",
    image: "Menu_HOME_0334.png",
    growthRate: "erratic",
    evolutions: [],
  },
  {
    dexNumber: 335,
    name: "Zangoose",
    image: "Menu_HOME_0335.png",
    growthRate: "erratic",
    evolutions: [],
  },
  {
    dexNumber: 336,
    name: "Seviper",
    image: "Menu_HOME_0336.png",
    growthRate: "fluctuating",
    evolutions: [],
  },
  {
    dexNumber: 337,
    name: "Lunatone",
    image: "Menu_HOME_0337.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 338,
    name: "Solrock",
    image: "Menu_HOME_0338.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 339,
    name: "Barboach",
    image: "Menu_HOME_0339.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Whiscash",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 340,
    name: "Whiscash",
    image: "Menu_HOME_0340.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 341,
    name: "Corphish",
    image: "Menu_HOME_0341.png",
    growthRate: "fluctuating",
    evolutions: [
      {
        species: "Crawdaunt",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 342,
    name: "Crawdaunt",
    image: "Menu_HOME_0342.png",
    growthRate: "fluctuating",
    evolutions: [],
  },
  {
    dexNumber: 343,
    name: "Baltoy",
    image: "Menu_HOME_0343.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Claydol",
        method: "level",
        level: 36,
      },
    ],
  },
  {
    dexNumber: 344,
    name: "Claydol",
    image: "Menu_HOME_0344.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 345,
    name: "Lileep",
    image: "Menu_HOME_0345.png",
    growthRate: "erratic",
    evolutions: [
      {
        species: "Cradily",
        method: "level",
        level: 40,
      },
    ],
  },
  {
    dexNumber: 346,
    name: "Cradily",
    image: "Menu_HOME_0346.png",
    growthRate: "erratic",
    evolutions: [],
  },
  {
    dexNumber: 347,
    name: "Anorith",
    image: "Menu_HOME_0347.png",
    growthRate: "erratic",
    evolutions: [
      {
        species: "Armaldo",
        method: "level",
        level: 40,
      },
    ],
  },
  {
    dexNumber: 348,
    name: "Armaldo",
    image: "Menu_HOME_0348.png",
    growthRate: "erratic",
    evolutions: [],
  },
  {
    dexNumber: 349,
    name: "Feebas",
    image: "Menu_HOME_0349.png",
    growthRate: "erratic",
    evolutions: [
      {
        species: "Milotic",
        method: "beauty",
      },
    ],
  },
  {
    dexNumber: 350,
    name: "Milotic",
    image: "Menu_HOME_0350.png",
    growthRate: "erratic",
    evolutions: [],
  },
  {
    dexNumber: 351,
    name: "Castform",
    image: "Menu_HOME_0351.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 352,
    name: "Kecleon",
    image: "Menu_HOME_0352.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 353,
    name: "Shuppet",
    image: "Menu_HOME_0353.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Banette",
        method: "level",
        level: 37,
      },
    ],
  },
  {
    dexNumber: 354,
    name: "Banette",
    image: "Menu_HOME_0354.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 355,
    name: "Duskull",
    image: "Menu_HOME_0355.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Dusclops",
        method: "level",
        level: 37,
      },
    ],
  },
  {
    dexNumber: 356,
    name: "Dusclops",
    image: "Menu_HOME_0356.png",
    growthRate: "fast",
    evolutions: [
      {
        species: "Dusknoir",
        method: "trade",
        item: "Reaper Cloth",
      },
    ],
  },
  {
    dexNumber: 357,
    name: "Tropius",
    image: "Menu_HOME_0357.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 358,
    name: "Chimecho",
    image: "Menu_HOME_0358.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 359,
    name: "Absol",
    image: "Menu_HOME_0359.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 360,
    name: "Wynaut",
    image: "Menu_HOME_0360.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Wobbuffet",
        method: "level",
        level: 15,
      },
    ],
  },
  {
    dexNumber: 361,
    name: "Snorunt",
    image: "Menu_HOME_0361.png",
    growthRate: "medium-fast",
    evolutions: [
      {
        species: "Glalie",
        method: "level",
        level: 42,
      },
      {
        species: "Froslass",
        method: "stone",
        item: "Dawn Stone",
      },
    ],
  },
  {
    dexNumber: 362,
    name: "Glalie",
    image: "Menu_HOME_0362.png",
    growthRate: "medium-fast",
    evolutions: [],
  },
  {
    dexNumber: 363,
    name: "Spheal",
    image: "Menu_HOME_0363.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Sealeo",
        method: "level",
        level: 32,
      },
    ],
  },
  {
    dexNumber: 364,
    name: "Sealeo",
    image: "Menu_HOME_0364.png",
    growthRate: "medium-slow",
    evolutions: [
      {
        species: "Walrein",
        method: "level",
        level: 44,
      },
    ],
  },
  {
    dexNumber: 365,
    name: "Walrein",
    image: "Menu_HOME_0365.png",
    growthRate: "medium-slow",
    evolutions: [],
  },
  {
    dexNumber: 366,
    name: "Clamperl",
    image: "Menu_HOME_0366.png",
    growthRate: "erratic",
    evolutions: [
      {
        species: "Huntail",
        method: "trade",
        item: "Deep Sea Tooth",
      },
      {
        species: "Gorebyss",
        method: "trade",
        item: "Deep Sea Scale",
      },
    ],
  },
  {
    dexNumber: 367,
    name: "Huntail",
    image: "Menu_HOME_0367.png",
    growthRate: "erratic",
    evolutions: [],
  },
  {
    dexNumber: 368,
    name: "Gorebyss",
    image: "Menu_HOME_0368.png",
    growthRate: "erratic",
    evolutions: [],
  },
  {
    dexNumber: 369,
    name: "Relicanth",
    image: "Menu_HOME_0369.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 370,
    name: "Luvdisc",
    image: "Menu_HOME_0370.png",
    growthRate: "fast",
    evolutions: [],
  },
  {
    dexNumber: 371,
    name: "Bagon",
    image: "Menu_HOME_0371.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Shelgon",
        method: "level",
        level: 30,
      },
    ],
  },
  {
    dexNumber: 372,
    name: "Shelgon",
    image: "Menu_HOME_0372.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Salamence",
        method: "level",
        level: 50,
      },
    ],
  },
  {
    dexNumber: 373,
    name: "Salamence",
    image: "Menu_HOME_0373.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 374,
    name: "Beldum",
    image: "Menu_HOME_0374.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Metang",
        method: "level",
        level: 20,
      },
    ],
  },
  {
    dexNumber: 375,
    name: "Metang",
    image: "Menu_HOME_0375.png",
    growthRate: "slow",
    evolutions: [
      {
        species: "Metagross",
        method: "level",
        level: 45,
      },
    ],
  },
  {
    dexNumber: 376,
    name: "Metagross",
    image: "Menu_HOME_0376.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 377,
    name: "Regirock",
    image: "Menu_HOME_0377.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 378,
    name: "Regice",
    image: "Menu_HOME_0378.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 379,
    name: "Registeel",
    image: "Menu_HOME_0379.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 380,
    name: "Latias",
    image: "Menu_HOME_0380.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 381,
    name: "Latios",
    image: "Menu_HOME_0381.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 382,
    name: "Kyogre",
    image: "Menu_HOME_0382.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 383,
    name: "Groudon",
    image: "Menu_HOME_0383.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 384,
    name: "Rayquaza",
    image: "Menu_HOME_0384.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 385,
    name: "Jirachi",
    image: "Menu_HOME_0385.png",
    growthRate: "slow",
    evolutions: [],
  },
  {
    dexNumber: 386,
    name: "Deoxys",
    image: "Menu_HOME_0386.png",
    growthRate: "slow",
    evolutions: [],
  },
];
