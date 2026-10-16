/* ----------------------
- National Dex Generator
----------------------- */

const guideLink = "";

const guideSource = `
      <p class="tips-source">
        National Pokédex Tracker
      </p>`;

const imgBasehref = "assets/images/NationalDex/pokedex/Spr_";
const badgeBasehref = "";

window.gameData = {
  gameId: "nationaldex",
  gameTitle: "National Pokédex",
  logo: "assets/images/logos/nationaldex.png",

  aboutHtml: `
   <section class="game-intro-content">
      <p>
        Track every Pokémon species in National Dex order.
      </p>

      ${guideSource}
   </section>
  `,

  progression: {

    "gen1": {
      headerTitle: "Generation I",

      headerImg: "",
      headerImgAlt: "",

      summaryShort: "Track all Pokémon from Generation I.",

      summaryHtml: `
<p>
Track all Pokémon from Generation I.
</p>
`,

      summaryOpen: false,

      rows: [

        {
          pokemon: {
            img: imgBasehref + "001.png",
            name: "Bulbasaur"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "002.png",
            name: "Ivysaur"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "003.png",
            name: "Venusaur"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "004.png",
            name: "Charmander"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "005.png",
            name: "Charmeleon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "006.png",
            name: "Charizard"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "007.png",
            name: "Squirtle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "008.png",
            name: "Wartortle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "009.png",
            name: "Blastoise"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "010.png",
            name: "Caterpie"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "011.png",
            name: "Metapod"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "012.png",
            name: "Butterfree"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "013.png",
            name: "Weedle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "014.png",
            name: "Kakuna"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "015.png",
            name: "Beedrill"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "016.png",
            name: "Pidgey"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "017.png",
            name: "Pidgeotto"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "018.png",
            name: "Pidgeot"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "019.png",
            name: "Rattata"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "020.png",
            name: "Raticate"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "021.png",
            name: "Spearow"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "022.png",
            name: "Fearow"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "023.png",
            name: "Ekans"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "024.png",
            name: "Arbok"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "025.png",
            name: "Pikachu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "026.png",
            name: "Raichu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "027.png",
            name: "Sandshrew"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "028.png",
            name: "Sandslash"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "029.png",
            name: "Nidoran-F"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "030.png",
            name: "Nidorina"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "031.png",
            name: "Nidoqueen"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "032.png",
            name: "Nidoran-M"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "033.png",
            name: "Nidorino"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "034.png",
            name: "Nidoking"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "035.png",
            name: "Clefairy"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "036.png",
            name: "Clefable"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "037.png",
            name: "Vulpix"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "038.png",
            name: "Ninetales"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "039.png",
            name: "Jigglypuff"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "040.png",
            name: "Wigglytuff"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "041.png",
            name: "Zubat"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "042.png",
            name: "Golbat"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "043.png",
            name: "Oddish"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "044.png",
            name: "Gloom"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "045.png",
            name: "Vileplume"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "046.png",
            name: "Paras"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "047.png",
            name: "Parasect"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "048.png",
            name: "Venonat"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "049.png",
            name: "Venomoth"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "050.png",
            name: "Diglett"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "051.png",
            name: "Dugtrio"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "052.png",
            name: "Meowth"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "053.png",
            name: "Persian"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "054.png",
            name: "Psyduck"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "055.png",
            name: "Golduck"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "056.png",
            name: "Mankey"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "057.png",
            name: "Primeape"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "058.png",
            name: "Growlithe"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "059.png",
            name: "Arcanine"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "060.png",
            name: "Poliwag"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "061.png",
            name: "Poliwhirl"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "062.png",
            name: "Poliwrath"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "063.png",
            name: "Abra"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "064.png",
            name: "Kadabra"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "065.png",
            name: "Alakazam"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "066.png",
            name: "Machop"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "067.png",
            name: "Machoke"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "068.png",
            name: "Machamp"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "069.png",
            name: "Bellsprout"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "070.png",
            name: "Weepinbell"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "071.png",
            name: "Victreebel"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "072.png",
            name: "Tentacool"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "073.png",
            name: "Tentacruel"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "074.png",
            name: "Geodude"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "075.png",
            name: "Graveler"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "076.png",
            name: "Golem"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "077.png",
            name: "Ponyta"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "078.png",
            name: "Rapidash"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "079.png",
            name: "Slowpoke"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "080.png",
            name: "Slowbro"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "081.png",
            name: "Magnemite"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "082.png",
            name: "Magneton"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "083.png",
            name: "Farfetchd"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "084.png",
            name: "Doduo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "085.png",
            name: "Dodrio"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "086.png",
            name: "Seel"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "087.png",
            name: "Dewgong"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "088.png",
            name: "Grimer"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "089.png",
            name: "Muk"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "090.png",
            name: "Shellder"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "091.png",
            name: "Cloyster"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "092.png",
            name: "Gastly"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "093.png",
            name: "Haunter"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "094.png",
            name: "Gengar"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "095.png",
            name: "Onix"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "096.png",
            name: "Drowzee"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "097.png",
            name: "Hypno"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "098.png",
            name: "Krabby"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "099.png",
            name: "Kingler"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "100.png",
            name: "Voltorb"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "101.png",
            name: "Electrode"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "102.png",
            name: "Exeggcute"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "103.png",
            name: "Exeggutor"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "104.png",
            name: "Cubone"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "105.png",
            name: "Marowak"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "106.png",
            name: "Hitmonlee"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "107.png",
            name: "Hitmonchan"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "108.png",
            name: "Lickitung"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "109.png",
            name: "Koffing"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "110.png",
            name: "Weezing"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "111.png",
            name: "Rhyhorn"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "112.png",
            name: "Rhydon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "113.png",
            name: "Chansey"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "114.png",
            name: "Tangela"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "115.png",
            name: "Kangaskhan"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "116.png",
            name: "Horsea"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "117.png",
            name: "Seadra"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "118.png",
            name: "Goldeen"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "119.png",
            name: "Seaking"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "120.png",
            name: "Staryu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "121.png",
            name: "Starmie"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "122.png",
            name: "Mr-Mime"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "123.png",
            name: "Scyther"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "124.png",
            name: "Jynx"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "125.png",
            name: "Electabuzz"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "126.png",
            name: "Magmar"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "127.png",
            name: "Pinsir"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "128.png",
            name: "Tauros"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "129.png",
            name: "Magikarp"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "130.png",
            name: "Gyarados"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "131.png",
            name: "Lapras"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "132.png",
            name: "Ditto"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "133.png",
            name: "Eevee"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "134.png",
            name: "Vaporeon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "135.png",
            name: "Jolteon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "136.png",
            name: "Flareon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "137.png",
            name: "Porygon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "138.png",
            name: "Omanyte"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "139.png",
            name: "Omastar"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "140.png",
            name: "Kabuto"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "141.png",
            name: "Kabutops"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "142.png",
            name: "Aerodactyl"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "143.png",
            name: "Snorlax"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "144.png",
            name: "Articuno"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "145.png",
            name: "Zapdos"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "146.png",
            name: "Moltres"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "147.png",
            name: "Dratini"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "148.png",
            name: "Dragonair"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "149.png",
            name: "Dragonite"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "150.png",
            name: "Mewtwo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "151.png",
            name: "Mew"
          },

          method: "National Pokédex"
        },
      ]
    },

    "gen2": {
      headerTitle: "Generation II",

      headerImg: "",
      headerImgAlt: "",

      summaryShort: "Track all Pokémon from Generation II.",

      summaryHtml: `
<p>
Track all Pokémon from Generation II.
</p>
`,

      summaryOpen: false,

      rows: [

        {
          pokemon: {
            img: imgBasehref + "152.png",
            name: "Chikorita"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "153.png",
            name: "Bayleef"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "154.png",
            name: "Meganium"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "155.png",
            name: "Cyndaquil"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "156.png",
            name: "Quilava"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "157.png",
            name: "Typhlosion"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "158.png",
            name: "Totodile"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "159.png",
            name: "Croconaw"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "160.png",
            name: "Feraligatr"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "161.png",
            name: "Sentret"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "162.png",
            name: "Furret"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "163.png",
            name: "Hoothoot"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "164.png",
            name: "Noctowl"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "165.png",
            name: "Ledyba"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "166.png",
            name: "Ledian"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "167.png",
            name: "Spinarak"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "168.png",
            name: "Ariados"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "169.png",
            name: "Crobat"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "170.png",
            name: "Chinchou"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "171.png",
            name: "Lanturn"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "172.png",
            name: "Pichu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "173.png",
            name: "Cleffa"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "174.png",
            name: "Igglybuff"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "175.png",
            name: "Togepi"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "176.png",
            name: "Togetic"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "177.png",
            name: "Natu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "178.png",
            name: "Xatu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "179.png",
            name: "Mareep"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "180.png",
            name: "Flaaffy"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "181.png",
            name: "Ampharos"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "182.png",
            name: "Bellossom"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "183.png",
            name: "Marill"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "184.png",
            name: "Azumarill"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "185.png",
            name: "Sudowoodo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "186.png",
            name: "Politoed"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "187.png",
            name: "Hoppip"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "188.png",
            name: "Skiploom"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "189.png",
            name: "Jumpluff"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "190.png",
            name: "Aipom"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "191.png",
            name: "Sunkern"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "192.png",
            name: "Sunflora"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "193.png",
            name: "Yanma"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "194.png",
            name: "Wooper"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "195.png",
            name: "Quagsire"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "196.png",
            name: "Espeon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "197.png",
            name: "Umbreon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "198.png",
            name: "Murkrow"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "199.png",
            name: "Slowking"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "200.png",
            name: "Misdreavus"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "201.png",
            name: "Unown"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "202.png",
            name: "Wobbuffet"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "203.png",
            name: "Girafarig"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "204.png",
            name: "Pineco"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "205.png",
            name: "Forretress"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "206.png",
            name: "Dunsparce"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "207.png",
            name: "Gligar"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "208.png",
            name: "Steelix"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "209.png",
            name: "Snubbull"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "210.png",
            name: "Granbull"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "211.png",
            name: "Qwilfish"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "212.png",
            name: "Scizor"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "213.png",
            name: "Shuckle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "214.png",
            name: "Heracross"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "215.png",
            name: "Sneasel"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "216.png",
            name: "Teddiursa"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "217.png",
            name: "Ursaring"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "218.png",
            name: "Slugma"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "219.png",
            name: "Magcargo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "220.png",
            name: "Swinub"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "221.png",
            name: "Piloswine"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "222.png",
            name: "Corsola"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "223.png",
            name: "Remoraid"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "224.png",
            name: "Octillery"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "225.png",
            name: "Delibird"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "226.png",
            name: "Mantine"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "227.png",
            name: "Skarmory"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "228.png",
            name: "Houndour"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "229.png",
            name: "Houndoom"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "230.png",
            name: "Kingdra"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "231.png",
            name: "Phanpy"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "232.png",
            name: "Donphan"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "233.png",
            name: "Porygon2"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "234.png",
            name: "Stantler"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "235.png",
            name: "Smeargle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "236.png",
            name: "Tyrogue"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "237.png",
            name: "Hitmontop"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "238.png",
            name: "Smoochum"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "239.png",
            name: "Elekid"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "240.png",
            name: "Magby"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "241.png",
            name: "Miltank"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "242.png",
            name: "Blissey"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "243.png",
            name: "Raikou"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "244.png",
            name: "Entei"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "245.png",
            name: "Suicune"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "246.png",
            name: "Larvitar"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "247.png",
            name: "Pupitar"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "248.png",
            name: "Tyranitar"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "249.png",
            name: "Lugia"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "250.png",
            name: "Ho-Oh"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "251.png",
            name: "Celebi"
          },

          method: "National Pokédex"
        },
      ]
    },

    "gen3": {
      headerTitle: "Generation III",

      headerImg: "",
      headerImgAlt: "",

      summaryShort: "Track all Pokémon from Generation III.",

      summaryHtml: `
<p>
Track all Pokémon from Generation III.
</p>
`,

      summaryOpen: false,

      rows: [

        {
          pokemon: {
            img: imgBasehref + "252.png",
            name: "Treecko"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "253.png",
            name: "Grovyle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "254.png",
            name: "Sceptile"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "255.png",
            name: "Torchic"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "256.png",
            name: "Combusken"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "257.png",
            name: "Blaziken"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "258.png",
            name: "Mudkip"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "259.png",
            name: "Marshtomp"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "260.png",
            name: "Swampert"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "261.png",
            name: "Poochyena"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "262.png",
            name: "Mightyena"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "263.png",
            name: "Zigzagoon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "264.png",
            name: "Linoone"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "265.png",
            name: "Wurmple"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "266.png",
            name: "Silcoon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "267.png",
            name: "Beautifly"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "268.png",
            name: "Cascoon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "269.png",
            name: "Dustox"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "270.png",
            name: "Lotad"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "271.png",
            name: "Lombre"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "272.png",
            name: "Ludicolo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "273.png",
            name: "Seedot"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "274.png",
            name: "Nuzleaf"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "275.png",
            name: "Shiftry"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "276.png",
            name: "Taillow"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "277.png",
            name: "Swellow"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "278.png",
            name: "Wingull"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "279.png",
            name: "Pelipper"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "280.png",
            name: "Ralts"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "281.png",
            name: "Kirlia"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "282.png",
            name: "Gardevoir"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "283.png",
            name: "Surskit"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "284.png",
            name: "Masquerain"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "285.png",
            name: "Shroomish"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "286.png",
            name: "Breloom"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "287.png",
            name: "Slakoth"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "288.png",
            name: "Vigoroth"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "289.png",
            name: "Slaking"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "290.png",
            name: "Nincada"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "291.png",
            name: "Ninjask"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "292.png",
            name: "Shedinja"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "293.png",
            name: "Whismur"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "294.png",
            name: "Loudred"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "295.png",
            name: "Exploud"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "296.png",
            name: "Makuhita"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "297.png",
            name: "Hariyama"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "298.png",
            name: "Azurill"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "299.png",
            name: "Nosepass"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "300.png",
            name: "Skitty"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "301.png",
            name: "Delcatty"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "302.png",
            name: "Sableye"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "303.png",
            name: "Mawile"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "304.png",
            name: "Aron"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "305.png",
            name: "Lairon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "306.png",
            name: "Aggron"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "307.png",
            name: "Meditite"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "308.png",
            name: "Medicham"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "309.png",
            name: "Electrike"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "310.png",
            name: "Manectric"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "311.png",
            name: "Plusle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "312.png",
            name: "Minun"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "313.png",
            name: "Volbeat"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "314.png",
            name: "Illumise"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "315.png",
            name: "Roselia"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "316.png",
            name: "Gulpin"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "317.png",
            name: "Swalot"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "318.png",
            name: "Carvanha"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "319.png",
            name: "Sharpedo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "320.png",
            name: "Wailmer"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "321.png",
            name: "Wailord"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "322.png",
            name: "Numel"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "323.png",
            name: "Camerupt"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "324.png",
            name: "Torkoal"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "325.png",
            name: "Spoink"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "326.png",
            name: "Grumpig"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "327.png",
            name: "Spinda"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "328.png",
            name: "Trapinch"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "329.png",
            name: "Vibrava"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "330.png",
            name: "Flygon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "331.png",
            name: "Cacnea"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "332.png",
            name: "Cacturne"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "333.png",
            name: "Swablu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "334.png",
            name: "Altaria"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "335.png",
            name: "Zangoose"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "336.png",
            name: "Seviper"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "337.png",
            name: "Lunatone"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "338.png",
            name: "Solrock"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "339.png",
            name: "Barboach"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "340.png",
            name: "Whiscash"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "341.png",
            name: "Corphish"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "342.png",
            name: "Crawdaunt"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "343.png",
            name: "Baltoy"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "344.png",
            name: "Claydol"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "345.png",
            name: "Lileep"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "346.png",
            name: "Cradily"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "347.png",
            name: "Anorith"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "348.png",
            name: "Armaldo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "349.png",
            name: "Feebas"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "350.png",
            name: "Milotic"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "351.png",
            name: "Castform"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "352.png",
            name: "Kecleon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "353.png",
            name: "Shuppet"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "354.png",
            name: "Banette"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "355.png",
            name: "Duskull"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "356.png",
            name: "Dusclops"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "357.png",
            name: "Tropius"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "358.png",
            name: "Chimecho"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "359.png",
            name: "Absol"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "360.png",
            name: "Wynaut"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "361.png",
            name: "Snorunt"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "362.png",
            name: "Glalie"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "363.png",
            name: "Spheal"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "364.png",
            name: "Sealeo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "365.png",
            name: "Walrein"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "366.png",
            name: "Clamperl"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "367.png",
            name: "Huntail"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "368.png",
            name: "Gorebyss"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "369.png",
            name: "Relicanth"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "370.png",
            name: "Luvdisc"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "371.png",
            name: "Bagon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "372.png",
            name: "Shelgon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "373.png",
            name: "Salamence"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "374.png",
            name: "Beldum"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "375.png",
            name: "Metang"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "376.png",
            name: "Metagross"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "377.png",
            name: "Regirock"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "378.png",
            name: "Regice"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "379.png",
            name: "Registeel"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "380.png",
            name: "Latias"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "381.png",
            name: "Latios"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "382.png",
            name: "Kyogre"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "383.png",
            name: "Groudon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "384.png",
            name: "Rayquaza"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "385.png",
            name: "Jirachi"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "386.png",
            name: "Deoxys"
          },

          method: "National Pokédex"
        },
      ]
    },

    "gen4": {
      headerTitle: "Generation IV",

      headerImg: "",
      headerImgAlt: "",

      summaryShort: "Track all Pokémon from Generation IV.",

      summaryHtml: `
<p>
Track all Pokémon from Generation IV.
</p>
`,

      summaryOpen: false,

      rows: [

        {
          pokemon: {
            img: imgBasehref + "387.png",
            name: "Turtwig"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "388.png",
            name: "Grotle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "389.png",
            name: "Torterra"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "390.png",
            name: "Chimchar"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "391.png",
            name: "Monferno"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "392.png",
            name: "Infernape"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "393.png",
            name: "Piplup"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "394.png",
            name: "Prinplup"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "395.png",
            name: "Empoleon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "396.png",
            name: "Starly"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "397.png",
            name: "Staravia"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "398.png",
            name: "Staraptor"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "399.png",
            name: "Bidoof"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "400.png",
            name: "Bibarel"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "401.png",
            name: "Kricketot"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "402.png",
            name: "Kricketune"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "403.png",
            name: "Shinx"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "404.png",
            name: "Luxio"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "405.png",
            name: "Luxray"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "406.png",
            name: "Budew"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "407.png",
            name: "Roserade"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "408.png",
            name: "Cranidos"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "409.png",
            name: "Rampardos"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "410.png",
            name: "Shieldon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "411.png",
            name: "Bastiodon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "412.png",
            name: "Burmy"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "413.png",
            name: "Wormadam"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "414.png",
            name: "Mothim"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "415.png",
            name: "Combee"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "416.png",
            name: "Vespiquen"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "417.png",
            name: "Pachirisu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "418.png",
            name: "Buizel"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "419.png",
            name: "Floatzel"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "420.png",
            name: "Cherubi"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "421.png",
            name: "Cherrim"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "422.png",
            name: "Shellos"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "423.png",
            name: "Gastrodon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "424.png",
            name: "Ambipom"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "425.png",
            name: "Drifloon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "426.png",
            name: "Drifblim"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "427.png",
            name: "Buneary"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "428.png",
            name: "Lopunny"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "429.png",
            name: "Mismagius"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "430.png",
            name: "Honchkrow"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "431.png",
            name: "Glameow"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "432.png",
            name: "Purugly"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "433.png",
            name: "Chingling"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "434.png",
            name: "Stunky"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "435.png",
            name: "Skuntank"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "436.png",
            name: "Bronzor"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "437.png",
            name: "Bronzong"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "438.png",
            name: "Bonsly"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "439.png",
            name: "Mime-Jr"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "440.png",
            name: "Happiny"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "441.png",
            name: "Chatot"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "442.png",
            name: "Spiritomb"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "443.png",
            name: "Gible"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "444.png",
            name: "Gabite"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "445.png",
            name: "Garchomp"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "446.png",
            name: "Munchlax"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "447.png",
            name: "Riolu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "448.png",
            name: "Lucario"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "449.png",
            name: "Hippopotas"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "450.png",
            name: "Hippowdon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "451.png",
            name: "Skorupi"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "452.png",
            name: "Drapion"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "453.png",
            name: "Croagunk"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "454.png",
            name: "Toxicroak"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "455.png",
            name: "Carnivine"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "456.png",
            name: "Finneon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "457.png",
            name: "Lumineon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "458.png",
            name: "Mantyke"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "459.png",
            name: "Snover"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "460.png",
            name: "Abomasnow"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "461.png",
            name: "Weavile"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "462.png",
            name: "Magnezone"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "463.png",
            name: "Lickilicky"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "464.png",
            name: "Rhyperior"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "465.png",
            name: "Tangrowth"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "466.png",
            name: "Electivire"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "467.png",
            name: "Magmortar"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "468.png",
            name: "Togekiss"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "469.png",
            name: "Yanmega"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "470.png",
            name: "Leafeon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "471.png",
            name: "Glaceon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "472.png",
            name: "Gliscor"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "473.png",
            name: "Mamoswine"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "474.png",
            name: "Porygon-Z"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "475.png",
            name: "Gallade"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "476.png",
            name: "Probopass"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "477.png",
            name: "Dusknoir"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "478.png",
            name: "Froslass"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "479.png",
            name: "Rotom"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "480.png",
            name: "Uxie"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "481.png",
            name: "Mesprit"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "482.png",
            name: "Azelf"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "483.png",
            name: "Dialga"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "484.png",
            name: "Palkia"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "485.png",
            name: "Heatran"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "486.png",
            name: "Regigigas"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "487.png",
            name: "Giratina"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "488.png",
            name: "Cresselia"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "489.png",
            name: "Phione"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "490.png",
            name: "Manaphy"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "491.png",
            name: "Darkrai"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "492.png",
            name: "Shaymin"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "493.png",
            name: "Arceus"
          },

          method: "National Pokédex"
        },
      ]
    },

    "gen5": {
      headerTitle: "Generation V",

      headerImg: "",
      headerImgAlt: "",

      summaryShort: "Track all Pokémon from Generation V.",

      summaryHtml: `
<p>
Track all Pokémon from Generation V.
</p>
`,

      summaryOpen: false,

      rows: [

        {
          pokemon: {
            img: imgBasehref + "494.png",
            name: "Victini"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "495.png",
            name: "Snivy"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "496.png",
            name: "Servine"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "497.png",
            name: "Serperior"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "498.png",
            name: "Tepig"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "499.png",
            name: "Pignite"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "500.png",
            name: "Emboar"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "501.png",
            name: "Oshawott"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "502.png",
            name: "Dewott"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "503.png",
            name: "Samurott"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "504.png",
            name: "Patrat"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "505.png",
            name: "Watchog"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "506.png",
            name: "Lillipup"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "507.png",
            name: "Herdier"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "508.png",
            name: "Stoutland"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "509.png",
            name: "Purrloin"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "510.png",
            name: "Liepard"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "511.png",
            name: "Pansage"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "512.png",
            name: "Simisage"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "513.png",
            name: "Pansear"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "514.png",
            name: "Simisear"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "515.png",
            name: "Panpour"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "516.png",
            name: "Simipour"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "517.png",
            name: "Munna"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "518.png",
            name: "Musharna"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "519.png",
            name: "Pidove"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "520.png",
            name: "Tranquill"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "521.png",
            name: "Unfezant"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "522.png",
            name: "Blitzle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "523.png",
            name: "Zebstrika"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "524.png",
            name: "Roggenrola"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "525.png",
            name: "Boldore"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "526.png",
            name: "Gigalith"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "527.png",
            name: "Woobat"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "528.png",
            name: "Swoobat"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "529.png",
            name: "Drilbur"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "530.png",
            name: "Excadrill"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "531.png",
            name: "Audino"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "532.png",
            name: "Timburr"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "533.png",
            name: "Gurdurr"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "534.png",
            name: "Conkeldurr"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "535.png",
            name: "Tympole"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "536.png",
            name: "Palpitoad"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "537.png",
            name: "Seismitoad"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "538.png",
            name: "Throh"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "539.png",
            name: "Sawk"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "540.png",
            name: "Sewaddle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "541.png",
            name: "Swadloon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "542.png",
            name: "Leavanny"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "543.png",
            name: "Venipede"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "544.png",
            name: "Whirlipede"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "545.png",
            name: "Scolipede"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "546.png",
            name: "Cottonee"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "547.png",
            name: "Whimsicott"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "548.png",
            name: "Petilil"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "549.png",
            name: "Lilligant"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "550.png",
            name: "Basculin"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "551.png",
            name: "Sandile"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "552.png",
            name: "Krokorok"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "553.png",
            name: "Krookodile"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "554.png",
            name: "Darumaka"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "555.png",
            name: "Darmanitan"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "556.png",
            name: "Maractus"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "557.png",
            name: "Dwebble"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "558.png",
            name: "Crustle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "559.png",
            name: "Scraggy"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "560.png",
            name: "Scrafty"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "561.png",
            name: "Sigilyph"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "562.png",
            name: "Yamask"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "563.png",
            name: "Cofagrigus"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "564.png",
            name: "Tirtouga"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "565.png",
            name: "Carracosta"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "566.png",
            name: "Archen"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "567.png",
            name: "Archeops"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "568.png",
            name: "Trubbish"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "569.png",
            name: "Garbodor"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "570.png",
            name: "Zorua"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "571.png",
            name: "Zoroark"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "572.png",
            name: "Minccino"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "573.png",
            name: "Cinccino"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "574.png",
            name: "Gothita"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "575.png",
            name: "Gothorita"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "576.png",
            name: "Gothitelle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "577.png",
            name: "Solosis"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "578.png",
            name: "Duosion"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "579.png",
            name: "Reuniclus"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "580.png",
            name: "Ducklett"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "581.png",
            name: "Swanna"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "582.png",
            name: "Vanillite"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "583.png",
            name: "Vanillish"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "584.png",
            name: "Vanilluxe"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "585.png",
            name: "Deerling"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "586.png",
            name: "Sawsbuck"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "587.png",
            name: "Emolga"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "588.png",
            name: "Karrablast"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "589.png",
            name: "Escavalier"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "590.png",
            name: "Foongus"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "591.png",
            name: "Amoonguss"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "592.png",
            name: "Frillish"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "593.png",
            name: "Jellicent"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "594.png",
            name: "Alomomola"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "595.png",
            name: "Joltik"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "596.png",
            name: "Galvantula"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "597.png",
            name: "Ferroseed"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "598.png",
            name: "Ferrothorn"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "599.png",
            name: "Klink"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "600.png",
            name: "Klang"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "601.png",
            name: "Klinklang"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "602.png",
            name: "Tynamo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "603.png",
            name: "Eelektrik"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "604.png",
            name: "Eelektross"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "605.png",
            name: "Elgyem"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "606.png",
            name: "Beheeyem"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "607.png",
            name: "Litwick"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "608.png",
            name: "Lampent"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "609.png",
            name: "Chandelure"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "610.png",
            name: "Axew"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "611.png",
            name: "Fraxure"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "612.png",
            name: "Haxorus"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "613.png",
            name: "Cubchoo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "614.png",
            name: "Beartic"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "615.png",
            name: "Cryogonal"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "616.png",
            name: "Shelmet"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "617.png",
            name: "Accelgor"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "618.png",
            name: "Stunfisk"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "619.png",
            name: "Mienfoo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "620.png",
            name: "Mienshao"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "621.png",
            name: "Druddigon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "622.png",
            name: "Golett"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "623.png",
            name: "Golurk"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "624.png",
            name: "Pawniard"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "625.png",
            name: "Bisharp"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "626.png",
            name: "Bouffalant"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "627.png",
            name: "Rufflet"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "628.png",
            name: "Braviary"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "629.png",
            name: "Vullaby"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "630.png",
            name: "Mandibuzz"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "631.png",
            name: "Heatmor"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "632.png",
            name: "Durant"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "633.png",
            name: "Deino"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "634.png",
            name: "Zweilous"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "635.png",
            name: "Hydreigon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "636.png",
            name: "Larvesta"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "637.png",
            name: "Volcarona"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "638.png",
            name: "Cobalion"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "639.png",
            name: "Terrakion"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "640.png",
            name: "Virizion"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "641.png",
            name: "Tornadus"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "642.png",
            name: "Thundurus"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "643.png",
            name: "Reshiram"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "644.png",
            name: "Zekrom"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "645.png",
            name: "Landorus"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "646.png",
            name: "Kyurem"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "647.png",
            name: "Keldeo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "648.png",
            name: "Meloetta"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "649.png",
            name: "Genesect"
          },

          method: "National Pokédex"
        },
      ]
    },

    "gen6": {
      headerTitle: "Generation VI",

      headerImg: "",
      headerImgAlt: "",

      summaryShort: "Track all Pokémon from Generation VI.",

      summaryHtml: `
<p>
Track all Pokémon from Generation VI.
</p>
`,

      summaryOpen: false,

      rows: [

        {
          pokemon: {
            img: imgBasehref + "650.png",
            name: "Chespin"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "651.png",
            name: "Quilladin"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "652.png",
            name: "Chesnaught"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "653.png",
            name: "Fennekin"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "654.png",
            name: "Braixen"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "655.png",
            name: "Delphox"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "656.png",
            name: "Froakie"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "657.png",
            name: "Frogadier"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "658.png",
            name: "Greninja"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "659.png",
            name: "Bunnelby"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "660.png",
            name: "Diggersby"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "661.png",
            name: "Fletchling"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "662.png",
            name: "Fletchinder"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "663.png",
            name: "Talonflame"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "664.png",
            name: "Scatterbug"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "665.png",
            name: "Spewpa"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "666.png",
            name: "Vivillon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "667.png",
            name: "Litleo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "668.png",
            name: "Pyroar"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "669.png",
            name: "Flabebe"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "670.png",
            name: "Floette"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "671.png",
            name: "Florges"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "672.png",
            name: "Skiddo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "673.png",
            name: "Gogoat"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "674.png",
            name: "Pancham"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "675.png",
            name: "Pangoro"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "676.png",
            name: "Furfrou"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "677.png",
            name: "Espurr"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "678.png",
            name: "Meowstic"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "679.png",
            name: "Honedge"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "680.png",
            name: "Doublade"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "681.png",
            name: "Aegislash"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "682.png",
            name: "Spritzee"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "683.png",
            name: "Aromatisse"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "684.png",
            name: "Swirlix"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "685.png",
            name: "Slurpuff"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "686.png",
            name: "Inkay"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "687.png",
            name: "Malamar"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "688.png",
            name: "Binacle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "689.png",
            name: "Barbaracle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "690.png",
            name: "Skrelp"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "691.png",
            name: "Dragalge"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "692.png",
            name: "Clauncher"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "693.png",
            name: "Clawitzer"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "694.png",
            name: "Helioptile"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "695.png",
            name: "Heliolisk"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "696.png",
            name: "Tyrunt"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "697.png",
            name: "Tyrantrum"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "698.png",
            name: "Amaura"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "699.png",
            name: "Aurorus"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "700.png",
            name: "Sylveon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "701.png",
            name: "Hawlucha"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "702.png",
            name: "Dedenne"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "703.png",
            name: "Carbink"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "704.png",
            name: "Goomy"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "705.png",
            name: "Sliggoo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "706.png",
            name: "Goodra"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "707.png",
            name: "Klefki"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "708.png",
            name: "Phantump"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "709.png",
            name: "Trevenant"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "710.png",
            name: "Pumpkaboo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "711.png",
            name: "Gourgeist"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "712.png",
            name: "Bergmite"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "713.png",
            name: "Avalugg"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "714.png",
            name: "Noibat"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "715.png",
            name: "Noivern"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "716.png",
            name: "Xerneas"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "717.png",
            name: "Yveltal"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "718.png",
            name: "Zygarde"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "719.png",
            name: "Diancie"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "720.png",
            name: "Hoopa"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "721.png",
            name: "Volcanion"
          },

          method: "National Pokédex"
        },
      ]
    },

    "gen7": {
      headerTitle: "Generation VII",

      headerImg: "",
      headerImgAlt: "",

      summaryShort: "Track all Pokémon from Generation VII.",

      summaryHtml: `
<p>
Track all Pokémon from Generation VII.
</p>
`,

      summaryOpen: false,

      rows: [

        {
          pokemon: {
            img: imgBasehref + "722.png",
            name: "Rowlet"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "723.png",
            name: "Dartrix"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "724.png",
            name: "Decidueye"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "725.png",
            name: "Litten"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "726.png",
            name: "Torracat"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "727.png",
            name: "Incineroar"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "728.png",
            name: "Popplio"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "729.png",
            name: "Brionne"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "730.png",
            name: "Primarina"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "731.png",
            name: "Pikipek"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "732.png",
            name: "Trumbeak"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "733.png",
            name: "Toucannon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "734.png",
            name: "Yungoos"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "735.png",
            name: "Gumshoos"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "736.png",
            name: "Grubbin"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "737.png",
            name: "Charjabug"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "738.png",
            name: "Vikavolt"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "739.png",
            name: "Crabrawler"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "740.png",
            name: "Crabominable"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "741.png",
            name: "Oricorio"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "742.png",
            name: "Cutiefly"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "743.png",
            name: "Ribombee"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "744.png",
            name: "Rockruff"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "745.png",
            name: "Lycanroc"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "746.png",
            name: "Wishiwashi"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "747.png",
            name: "Mareanie"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "748.png",
            name: "Toxapex"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "749.png",
            name: "Mudbray"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "750.png",
            name: "Mudsdale"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "751.png",
            name: "Dewpider"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "752.png",
            name: "Araquanid"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "753.png",
            name: "Fomantis"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "754.png",
            name: "Lurantis"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "755.png",
            name: "Morelull"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "756.png",
            name: "Shiinotic"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "757.png",
            name: "Salandit"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "758.png",
            name: "Salazzle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "759.png",
            name: "Stufful"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "760.png",
            name: "Bewear"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "761.png",
            name: "Bounsweet"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "762.png",
            name: "Steenee"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "763.png",
            name: "Tsareena"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "764.png",
            name: "Comfey"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "765.png",
            name: "Oranguru"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "766.png",
            name: "Passimian"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "767.png",
            name: "Wimpod"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "768.png",
            name: "Golisopod"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "769.png",
            name: "Sandygast"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "770.png",
            name: "Palossand"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "771.png",
            name: "Pyukumuku"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "772.png",
            name: "Type-Null"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "773.png",
            name: "Silvally"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "774.png",
            name: "Minior"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "775.png",
            name: "Komala"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "776.png",
            name: "Turtonator"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "777.png",
            name: "Togedemaru"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "778.png",
            name: "Mimikyu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "779.png",
            name: "Bruxish"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "780.png",
            name: "Drampa"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "781.png",
            name: "Dhelmise"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "782.png",
            name: "Jangmo-O"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "783.png",
            name: "Hakamo-O"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "784.png",
            name: "Kommo-O"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "785.png",
            name: "Tapu-Koko"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "786.png",
            name: "Tapu-Lele"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "787.png",
            name: "Tapu-Bulu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "788.png",
            name: "Tapu-Fini"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "789.png",
            name: "Cosmog"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "790.png",
            name: "Cosmoem"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "791.png",
            name: "Solgaleo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "792.png",
            name: "Lunala"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "793.png",
            name: "Nihilego"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "794.png",
            name: "Buzzwole"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "795.png",
            name: "Pheromosa"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "796.png",
            name: "Xurkitree"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "797.png",
            name: "Celesteela"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "798.png",
            name: "Kartana"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "799.png",
            name: "Guzzlord"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "800.png",
            name: "Necrozma"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "801.png",
            name: "Magearna"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "802.png",
            name: "Marshadow"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "803.png",
            name: "Poipole"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "804.png",
            name: "Naganadel"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "805.png",
            name: "Stakataka"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "806.png",
            name: "Blacephalon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "807.png",
            name: "Zeraora"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "808.png",
            name: "Meltan"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "809.png",
            name: "Melmetal"
          },

          method: "National Pokédex"
        },
      ]
    },

    "gen8": {
      headerTitle: "Generation VIII",

      headerImg: "",
      headerImgAlt: "",

      summaryShort: "Track all Pokémon from Generation VIII.",

      summaryHtml: `
<p>
Track all Pokémon from Generation VIII.
</p>
`,

      summaryOpen: false,

      rows: [

        {
          pokemon: {
            img: imgBasehref + "810.png",
            name: "Grookey"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "811.png",
            name: "Thwackey"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "812.png",
            name: "Rillaboom"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "813.png",
            name: "Scorbunny"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "814.png",
            name: "Raboot"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "815.png",
            name: "Cinderace"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "816.png",
            name: "Sobble"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "817.png",
            name: "Drizzile"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "818.png",
            name: "Inteleon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "819.png",
            name: "Skwovet"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "820.png",
            name: "Greedent"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "821.png",
            name: "Rookidee"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "822.png",
            name: "Corvisquire"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "823.png",
            name: "Corviknight"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "824.png",
            name: "Blipbug"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "825.png",
            name: "Dottler"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "826.png",
            name: "Orbeetle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "827.png",
            name: "Nickit"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "828.png",
            name: "Thievul"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "829.png",
            name: "Gossifleur"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "830.png",
            name: "Eldegoss"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "831.png",
            name: "Wooloo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "832.png",
            name: "Dubwool"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "833.png",
            name: "Chewtle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "834.png",
            name: "Drednaw"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "835.png",
            name: "Yamper"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "836.png",
            name: "Boltund"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "837.png",
            name: "Rolycoly"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "838.png",
            name: "Carkol"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "839.png",
            name: "Coalossal"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "840.png",
            name: "Applin"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "841.png",
            name: "Flapple"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "842.png",
            name: "Appletun"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "843.png",
            name: "Silicobra"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "844.png",
            name: "Sandaconda"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "845.png",
            name: "Cramorant"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "846.png",
            name: "Arrokuda"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "847.png",
            name: "Barraskewda"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "848.png",
            name: "Toxel"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "849.png",
            name: "Toxtricity"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "850.png",
            name: "Sizzlipede"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "851.png",
            name: "Centiskorch"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "852.png",
            name: "Clobbopus"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "853.png",
            name: "Grapploct"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "854.png",
            name: "Sinistea"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "855.png",
            name: "Polteageist"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "856.png",
            name: "Hatenna"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "857.png",
            name: "Hattrem"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "858.png",
            name: "Hatterene"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "859.png",
            name: "Impidimp"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "860.png",
            name: "Morgrem"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "861.png",
            name: "Grimmsnarl"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "862.png",
            name: "Obstagoon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "863.png",
            name: "Perrserker"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "864.png",
            name: "Cursola"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "865.png",
            name: "Sirfetchd"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "866.png",
            name: "Mr-Rime"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "867.png",
            name: "Runerigus"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "868.png",
            name: "Milcery"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "869.png",
            name: "Alcremie"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "870.png",
            name: "Falinks"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "871.png",
            name: "Pincurchin"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "872.png",
            name: "Snom"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "873.png",
            name: "Frosmoth"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "874.png",
            name: "Stonjourner"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "875.png",
            name: "Eiscue"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "876.png",
            name: "Indeedee"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "877.png",
            name: "Morpeko"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "878.png",
            name: "Cufant"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "879.png",
            name: "Copperajah"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "880.png",
            name: "Dracozolt"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "881.png",
            name: "Arctozolt"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "882.png",
            name: "Dracovish"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "883.png",
            name: "Arctovish"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "884.png",
            name: "Duraludon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "885.png",
            name: "Dreepy"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "886.png",
            name: "Drakloak"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "887.png",
            name: "Dragapult"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "888.png",
            name: "Zacian"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "889.png",
            name: "Zamazenta"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "890.png",
            name: "Eternatus"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "891.png",
            name: "Kubfu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "892.png",
            name: "Urshifu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "893.png",
            name: "Zarude"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "894.png",
            name: "Regieleki"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "895.png",
            name: "Regidrago"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "896.png",
            name: "Glastrier"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "897.png",
            name: "Spectrier"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "898.png",
            name: "Calyrex"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "899.png",
            name: "Wyrdeer"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "900.png",
            name: "Kleavor"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "901.png",
            name: "Ursaluna"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "902.png",
            name: "Basculegion"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "903.png",
            name: "Sneasler"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "904.png",
            name: "Overqwil"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "905.png",
            name: "Enamorus"
          },

          method: "National Pokédex"
        },
      ]
    },

    "gen9": {
      headerTitle: "Generation IX",

      headerImg: "",
      headerImgAlt: "",

      summaryShort: "Track all Pokémon from Generation IX.",

      summaryHtml: `
<p>
Track all Pokémon from Generation IX.
</p>
`,

      summaryOpen: false,

      rows: [

        {
          pokemon: {
            img: imgBasehref + "906.png",
            name: "Sprigatito"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "907.png",
            name: "Floragato"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "908.png",
            name: "Meowscarada"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "909.png",
            name: "Fuecoco"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "910.png",
            name: "Crocalor"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "911.png",
            name: "Skeledirge"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "912.png",
            name: "Quaxly"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "913.png",
            name: "Quaxwell"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "914.png",
            name: "Quaquaval"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "915.png",
            name: "Lechonk"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "916.png",
            name: "Oinkologne"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "917.png",
            name: "Tarountula"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "918.png",
            name: "Spidops"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "919.png",
            name: "Nymble"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "920.png",
            name: "Lokix"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "921.png",
            name: "Pawmi"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "922.png",
            name: "Pawmo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "923.png",
            name: "Pawmot"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "924.png",
            name: "Tandemaus"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "925.png",
            name: "Maushold"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "926.png",
            name: "Fidough"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "927.png",
            name: "Dachsbun"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "928.png",
            name: "Smoliv"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "929.png",
            name: "Dolliv"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "930.png",
            name: "Arboliva"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "931.png",
            name: "Squawkabilly"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "932.png",
            name: "Nacli"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "933.png",
            name: "Naclstack"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "934.png",
            name: "Garganacl"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "935.png",
            name: "Charcadet"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "936.png",
            name: "Armarouge"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "937.png",
            name: "Ceruledge"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "938.png",
            name: "Tadbulb"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "939.png",
            name: "Bellibolt"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "940.png",
            name: "Wattrel"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "941.png",
            name: "Kilowattrel"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "942.png",
            name: "Maschiff"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "943.png",
            name: "Mabosstiff"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "944.png",
            name: "Shroodle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "945.png",
            name: "Grafaiai"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "946.png",
            name: "Bramblin"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "947.png",
            name: "Brambleghast"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "948.png",
            name: "Toedscool"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "949.png",
            name: "Toedscruel"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "950.png",
            name: "Klawf"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "951.png",
            name: "Capsakid"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "952.png",
            name: "Scovillain"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "953.png",
            name: "Rellor"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "954.png",
            name: "Rabsca"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "955.png",
            name: "Flittle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "956.png",
            name: "Espathra"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "957.png",
            name: "Tinkatink"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "958.png",
            name: "Tinkatuff"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "959.png",
            name: "Tinkaton"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "960.png",
            name: "Wiglett"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "961.png",
            name: "Wugtrio"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "962.png",
            name: "Bombirdier"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "963.png",
            name: "Finizen"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "964.png",
            name: "Palafin"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "965.png",
            name: "Varoom"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "966.png",
            name: "Revavroom"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "967.png",
            name: "Cyclizar"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "968.png",
            name: "Orthworm"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "969.png",
            name: "Glimmet"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "970.png",
            name: "Glimmora"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "971.png",
            name: "Greavard"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "972.png",
            name: "Houndstone"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "973.png",
            name: "Flamigo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "974.png",
            name: "Cetoddle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "975.png",
            name: "Cetitan"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "976.png",
            name: "Veluza"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "977.png",
            name: "Dondozo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "978.png",
            name: "Tatsugiri"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "979.png",
            name: "Annihilape"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "980.png",
            name: "Clodsire"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "981.png",
            name: "Farigiraf"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "982.png",
            name: "Dudunsparce"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "983.png",
            name: "Kingambit"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "984.png",
            name: "Great-Tusk"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "985.png",
            name: "Scream-Tail"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "986.png",
            name: "Brute-Bonnet"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "987.png",
            name: "Flutter-Mane"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "988.png",
            name: "Slither-Wing"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "989.png",
            name: "Sandy-Shocks"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "990.png",
            name: "Iron-Treads"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "991.png",
            name: "Iron-Bundle"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "992.png",
            name: "Iron-Hands"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "993.png",
            name: "Iron-Jugulis"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "994.png",
            name: "Iron-Moth"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "995.png",
            name: "Iron-Thorns"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "996.png",
            name: "Frigibax"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "997.png",
            name: "Arctibax"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "998.png",
            name: "Baxcalibur"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "999.png",
            name: "Gimmighoul"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1000.png",
            name: "Gholdengo"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1001.png",
            name: "Wo-Chien"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1002.png",
            name: "Chien-Pao"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1003.png",
            name: "Ting-Lu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1004.png",
            name: "Chi-Yu"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1005.png",
            name: "Roaring-Moon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1006.png",
            name: "Iron-Valiant"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1007.png",
            name: "Koraidon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1008.png",
            name: "Miraidon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1009.png",
            name: "Walking-Wake"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1010.png",
            name: "Iron-Leaves"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1011.png",
            name: "Dipplin"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1012.png",
            name: "Poltchageist"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1013.png",
            name: "Sinistcha"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1014.png",
            name: "Okidogi"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1015.png",
            name: "Munkidori"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1016.png",
            name: "Fezandipiti"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1017.png",
            name: "Ogerpon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1018.png",
            name: "Archaludon"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1019.png",
            name: "Hydrapple"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1020.png",
            name: "Gouging-Fire"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1021.png",
            name: "Raging-Bolt"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1022.png",
            name: "Iron-Boulder"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1023.png",
            name: "Iron-Crown"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1024.png",
            name: "Terapagos"
          },

          method: "National Pokédex"
        },
        {
          pokemon: {
            img: imgBasehref + "1025.png",
            name: "Pecharunt"
          },

          method: "National Pokédex"
        },
      ]
    }

  }
};
