/* ----------------------
| - img src: https://archives.bulbagarden.net/wiki/Category:FireRed_and_LeafGreen_sprites
----------------------- */
const gameData = {
  gameId: "firered",
  gameTitle: "Pokémon FireRed",

  badgeGroups: {
    "Pre Badge 1": {
      headerTitle: "Pre Badge 1: Brock",
      headerImg: "../images/badges/boulder-badge.png",
      headerImgAlt: "Boulder Badge",
      summaryShort: "This is the pre badge 1 section summary",
      summaryHtml:
        "<p>This is the <strong>FANCY</strong>pre badge 1 section summary.</p>",
      summaryOpen: true,

      rows: [
        /* ---------------------------
           Starter Choice Rows
        ---------------------------- */
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "bulbasaur",
          pokemon: {
            img: "../images/FRLG/Spr_3f_001.png",
            name: "Bulbasaur",
          },
          method: "Pick this starter to show the Bulbasaur line",
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "charmander",
          pokemon: {
            img: "../images/FRLG/Spr_3f_004.png",
            name: "Charmander",
          },
          method: "Pick this starter to show the Charmander line",
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "squirtle",
          pokemon: {
            img: "../images/FRLG/Spr_3f_007.png",
            name: "Squirtle",
          },
          method: "Pick this starter to show the Squirtle line",
        },

        /* ---------------------------
           Bulbasaur Line
        ---------------------------- */
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_001.png",
            name: "Bulbasaur",
          },
          method: "Choose as Starter",
          caught: false,
          requires: { starter: "bulbasaur" },
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_002.png",
            name: "Ivysaur",
          },
          method: "Evolve from Bulbasaur at Lvl. 16",
          caught: false,
          requires: { starter: "bulbasaur" },
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_003.png",
            name: "Venusaur",
          },
          method: "Evolve from Ivysaur at Lvl. 32",
          caught: false,
          requires: { starter: "bulbasaur" },
        },

        /* ---------------------------
           Charmander Line
        ---------------------------- */
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_004.png",
            name: "Charmander",
          },
          method: "Choose as Starter",
          caught: false,
          requires: { starter: "charmander" },
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_005.png",
            name: "Charmeleon",
          },
          method: "Evolve from Charmander at Lvl. 16",
          caught: false,
          requires: { starter: "charmander" },
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_006.png",
            name: "Charizard",
          },
          method: "Evolve from Charmeleon at Lvl. 36",
          caught: false,
          requires: { starter: "charmander" },
        },

        /* ---------------------------
           Squirtle Line
        ---------------------------- */
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_007.png",
            name: "Squirtle",
          },
          method: "Choose as Starter",
          caught: false,
          requires: { starter: "squirtle" },
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_008.png",
            name: "Wartortle",
          },
          method: "Evolve from Squirtle at Lvl. 16",
          caught: false,
          requires: { starter: "squirtle" },
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_009.png",
            name: "Blastoise",
          },
          method: "Evolve from Wartortle at Lvl. 36",
          caught: false,
          requires: { starter: "squirtle" },
        },

        /* ---------------------------
           Wild Pokémon
        ---------------------------- */
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_010.png",
            name: "Caterpie",
          },
          method: "Catch in the Viridian Forest",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_011.png",
            name: "Metapod",
          },
          method: "Evolve from Caterpie at level 7",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_012.png",
            name: "Butterfree",
          },
          method: "Evolve from Metapod at level 10",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_013.png",
            name: "Weedle",
          },
          method: "Catch in the Viridian Forest",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_014.png",
            name: "Kakuna",
          },
          method: "Evolve from Weedle at level 7",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_015.png",
            name: "Beedrill",
          },
          method: "Evolve from Kakuna at level 10",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_016.png",
            name: "Pidgey",
          },
          method: "Catch on Route 1",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_017.png",
            name: "Pidgeotto",
          },
          method: "Evolve from Pidgey at level 18",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_018.png",
            name: "Pidgeot",
          },
          method: "Evolve from Pidgeotto at level 36",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_019.png",
            name: "Rattata",
          },
          method: "Catch on Route 1",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_020.png",
            name: "Raticate",
          },
          method: "Evolve from Rattata at level 20",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_021.png",
            name: "Spearow",
          },
          method: "Catch on Route 22; You will need two for a trade later",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_022.png",
            name: "Fearow",
          },
          method: "Evolve from Spearow at level 20",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_025.png",
            name: "Pikachu",
          },
          method: "Viridian Forest",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_056.png",
            name: "Mankey",
          },
          method: "Catch on Route 22",
          caught: false,
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_057.png",
            name: "Primeape",
          },
          method: "Evolve from Mankey at level 28",
          caught: false,
        },
      ],
    },
    "Pre Badge 2: Misty": {
      summary:
        "Take on Brock with your fearsome team and get that first badge. You can finally leave through the eastern exit of Pewter City. /n" +
        "Be cautious about proceeding through the cave too fast, there is a point of no return which will make or break the success of this challenge. Once you leave the cave and hop over the ledge on the other side, you won’t be able to get back without another badge, therefore failing the challenge. /n" +
        "With the national dex restrictions you won’t be able to evolve Golbat into Crobat so don’t waste your time. You may want to keep it in your team as its happiness will increase if you walk lots with it in your party which you will be doing! Graveler also won’t EVER be able to evolve into Golem since you can’t trade. Catching Clefairy completes your set for moon stone evolution pokemon but at this point in time you won’t have any. You’ll need four Moon Stones in total. There are two moon stones inside Mt Moon. One is a standard item to pick up, the other is invisible. You’ll find it in the narrow alcove on the right just before you pick up the fossils. To get the remaining two Moon Stones you need, these can be found as hold items on Clefairy but there’s only a 5% chance of it holding one. You can either catch them and hope for the best or you can pick up the TM for Thief in Mt Moon and can get them by stealing them from wild Clefairy.",
      rows: [
        /* ---------------------------
           Fossil Choice Rows
        ---------------------------- */
        {
          type: "choice",
          choiceKey: "fossil",
          choiceValue: "dome",
          pokemon: {
            img: "link",
            name: "Dome Fossil",
          },
          method: "Pick this starter to show the Bulbasaur line",
        },
        {
          type: "choice",
          choiceKey: "fossil",
          choiceValue: "helix",
          pokemon: {
            img: "link",
            name: "Helix Fossil",
          },
          method: "Pick this starter to show the Charmander line",
        },

        /* ---------------------------
           Wild Pokémon
        ---------------------------- */
        {
          pokemon: { img: "../images/FRLG/Spr_3f_023.png", name: "Enkas" },
          method: "Catch on Route 4",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_024.png", name: "Arbok" },
          method: "Evolve from Enkas at level 22",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_029.png", name: "Nidoran F" },
          method: "Catch on Route 3",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_030.png", name: "Nidorina" },
          method: "Evolve from Nidoran F at level 16",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_031.png", name: "Nidoqueen" },
          method: "Use a Moon Stone on ",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_032.png", name: "Nidoran M" },
          method: "Catch on Route 3",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_033.png", name: "Nidorino" },
          method: "Evolve from Nidoran M at level 16",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_034.png", name: "Nidoking" },
          method: "Use a Moon Stone on ",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_035.png", name: "Clefairy" },
          method: "Catch in Mt. Moon",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_036.png", name: "Clefable" },
          method: "Use a Moon Stone on ",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_039.png", name: "Jigglypuff" },
          method: "Catch on Route 3",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_040.png", name: "Wigglytuff" },
          method: "Use a Moon Stone on ",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_041.png", name: "Zubat" },
          method: "Catch in Mt. Moon",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_042.png", name: "Golbat" },
          method: "Evolve from Zubat at level 22",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_043.png", name: "Oddish" },
          method: "Catch on Route 24",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_044.png", name: "Gloom" },
          method: "Evolve from Oddish at level 21",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_046.png", name: "Paras" },
          method: "Catch in Mt. Moon",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_047.png", name: "Parasect" },
          method: "Evolve from Paras at level 24",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_050.png", name: "Diglett" },
          method: "Catch in Diglet Cave",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_051.png", name: "Dugtrio" },
          method: "Evolve from Diglet at level 26",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_052.png", name: "Meowth" },
          method: "Catch on Route 5",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_053.png", name: "Persian" },
          method: "Evolve from Meowth at level 28",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_063.png", name: "Abra" },
          method: "Catch on Route 24",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_064.png", name: "Kadabra" },
          method: "Evolve from Abra at level 16",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_074.png", name: "Geodude" },
          method: "Catch in Mt. Moon",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_075.png", name: "Graveler" },
          method: "Evlolve from Geodude at level 25",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_083.png", name: "Farfetch'd" },
          method: "Trade for Spearow in Vermilion City",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_096.png", name: "Drowzee" },
          method: "Catch on Route 11",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_097.png", name: "Hypno" },
          method: "Evolve from Drowzee at level 26",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_122.png", name: "Mr. Mime" },
          method: "Trade for Abra at the house North of Diglet Cave",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_129.png", name: "Magikarp" },
          method: "Buy a from from the salesman in the pokemon center",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_130.png", name: "Gyarados" },
          method: "Evole from Magikarp at level 20",
          caught: false,
        },
      ],
    },
    "Pre Badge 3: Koga": {
      summary: "",
      rows: [
        /* ---------------------------
           Eeveelution Choice Rows
        ---------------------------- */
        {
          type: "choice",
          choiceKey: "eeveelution",
          choiceValue: "vaporeon",
          pokemon: {
            img: "../images/FRLG/Spr_3f_134.png",
            name: "Vaporeon",
          },
          method: "Pick this Eeveelution to show the Vaporeon line",
        },

        {
          type: "choice",
          choiceKey: "eeveelution",
          choiceValue: "jolteon",
          pokemon: {
            img: "../images/FRLG/Spr_3f_135.png",
            name: "Jolteon",
          },
          method: "Pick this Eeveelution to show the Jolteon line",
        },
        {
          type: "choice",
          choiceKey: "eeveelution",
          choiceValue: "flareon",
          pokemon: {
            img: "../images/FRLG/Spr_3f_136.png",
            name: "Flareon",
          },
          method: "Pick this Eeveelution to show the Flareon line",
        },
        /* ---------------------------
           Dojo Choice Rows
        ---------------------------- */
        {
          type: "choice",
          choiceKey: "dojo",
          choiceValue: "hitmonlee",
          pokemon: {
            img: "../images/FRLG/Spr_3f_106.png",
            name: "Hitmonlee",
          },
          method: "Pick this Hitmon to show the Hitmonlee line",
        },
        {
          type: "choice",
          choiceKey: "dojo",
          choiceValue: "hitmonchan",
          pokemon: {
            img: "../images/FRLG/Spr_3f_107.png",
            name: "Hitmonchan",
          },
          method: "Pick this Hitmon to show the Hitmonchan line",
        },
        /* ---------------------------
           Wild Pokémon
        ---------------------------- */
        {
          pokemon: { img: "../images/FRLG/Spr_3f_026.png", name: "Raichu" },
          method: "Use a Thunder Stone on Pikachu",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_045.png", name: "Vileplume" },
          method: "Use a Leaf Stone on Gloom",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_048.png", name: "Venonat" },
          method: "Catch on Route 14",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_049.png", name: "Venomoth" },
          method: "Evolve From Venonat at level 31",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_054.png", name: "Psyduck" },
          method: "Fish in Viridian City",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_055.png", name: "Golduck" },
          method: "Evolve From Psyduck at level 33; Need two",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_058.png", name: "Growlithe" },
          method: "Catch on Route 8",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_059.png", name: "Arcanine" },
          method: "Use a Fire Stone on Growlithe",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_060.png", name: "Poliwag" },
          method: "Fish in Viridian City",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_061.png", name: "Poliwhirl" },
          method: "Evolve From Poliwag at level 25; Need Two",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_062.png", name: "Poliwrath" },
          method: "Use a Water Stone on Poliwhirl",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_066.png", name: "Machop" },
          method: "Catch in Rock Tunnel",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_067.png", name: "Machoke" },
          method: "Evolve From Machop at level 28",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_084.png", name: "Doduo" },
          method: "Catch on Route 16",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_085.png", name: "Dodrio" },
          method: "Evolve From Doduo at level 31",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_088.png", name: "Grimer" },
          method: "Fish in Celadon City",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_089.png", name: "Muk" },
          method: "Evolve From Grimer at level 38",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_090.png", name: "Shellder" },
          method: "Fish in Pallet Town",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_091.png", name: "Cloyster" },
          method: "Use a Water Stone on Shellder",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_092.png", name: "Gastly" },
          method: "Catch in Pokemon Tower",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_093.png", name: "Haunter" },
          method: "Evolve From Gastly at level 25",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_095.png", name: "Onix" },
          method: "Catch in Rock Tunnel",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_098.png", name: "Krabby" },
          method: "Fish in Pallet Town",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_099.png", name: "Kingler" },
          method: "Evolve From Krabby at level 28",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_100.png", name: "Voltorb" },
          method:
            "East of Cerulean City, cut the tree down and pass through route 9 to go to route 10.",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_101.png", name: "Electrode" },
          method: "Evolve From Voltorb at level 30",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_102.png", name: "Exeggcute" },
          method: "Safari Zone",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_103.png", name: "Exeggutor" },
          method: "Use a Leaf Stone on Exeggcute",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_104.png", name: "Cubone" },
          method: "Catch in Pokemon Tower",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_105.png", name: "Marowak" },
          method: "Evolve From Cubone at level 28",
          caught: false,
        },
        /* ---------------------------
           Hitmonlee Line
        ---------------------------- */
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_106.png",
            name: "Hitmonlee",
          },
          method: "Choose as Starter",
          caught: false,
          requires: { dojo: "hitmonlee" },
        },

        /* ---------------------------
           Hitmonchan Line
        ---------------------------- */
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_107.png",
            name: "Hitmonchan",
          },
          method: "Choose as Starter",
          caught: false,
          requires: { dojo: "Hitmonchan" },
        },

        {
          pokemon: { img: "../images/FRLG/Spr_3f_108.png", name: "Lickitung" },
          method: "Trade for Golduck",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_111.png", name: "Rhyhorn" },
          method: "Safari Zone",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_112.png", name: "Rhydon" },
          method: "Evolve From Rhyhorn at level 42",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_113.png", name: "Chansey" },
          method: "Safari Zone",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_115.png", name: "Kangaskhan" },
          method: "Safari Zone",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_116.png", name: "Horsea" },
          method: "Fish in Pallet Town",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_117.png", name: "Seadra" },
          method: "Evolve From Horsea at level 32",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_118.png", name: "Goldeen" },
          method: "Fish in Viridian City",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_119.png", name: "Seaking" },
          method: "Evolve From Goldeen at level 33",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_123.png", name: "Scyther" },
          method: "Safari Zone",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_124.png", name: "Jynx" },
          method: "Trade for Poliwhirl",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_128.png", name: "Tauros" },
          method: "Safari Zone",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_131.png", name: "Lapras" },
          method: "Silph Co",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_132.png", name: "Ditto" },
          method: "Catch on Route 14",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_133.png", name: "Eevee" },
          method: "Celadon City",
          caught: false,
        },
        /* ---------------------------
           Flareon Line
        ---------------------------- */
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_001.png",
            name: "Flareon",
          },
          method: "Choose as Starter",
          caught: false,
          requires: { eeveelution: "flareon" },
        },

        /* ---------------------------
           Jolteon Line
        ---------------------------- */
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_001.png",
            name: "Jolteon",
          },
          method: "Choose as Starter",
          caught: false,
          requires: { eeveelution: "jolteon" },
        },

        /* ---------------------------
           Vaporeon Line
        ---------------------------- */
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_001.png",
            name: "Vaporeon",
          },
          method: "Choose as Starter",
          caught: false,
          requires: { eeveelution: "vaporeon" },
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_137.png", name: "Porygon" },
          method: "Celadon City Game Corner",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_143.png", name: "Snorlax" },
          method: "Catch on Route 12",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_147.png", name: "Dratini" },
          method: "Safari Zone; Game Corner",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_148.png", name: "Dragonair" },
          method: "Evolve From Dratini at level 30",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_149.png", name: "Dragonite" },
          method: "Evolve From Dragonair at level 55",
          caught: false,
        },
      ],
    },
    "Pre Badge 4: Blaine": {
      summary: "",
      rows: [
        /* ---------------------------
           Wild Pokémon
        ---------------------------- */
        {
          pokemon: { img: "../images/FRLG/Spr_3f_072.png", name: "Tentacool" },
          method: "Surf",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_073.png", name: "Tentacruel" },
          method: "Evlove from Tentacool at level 30",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_081.png", name: "Magnemite" },
          method: "Power Plant",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_082.png", name: "Magneton" },
          method: "Evolv from Magnemite at level 30",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_086.png", name: "Seel" },
          method: "Seafoam Island",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_087.png", name: "Dewgong" },
          method: "Evolve from See at level 34",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_109.png", name: "Koffing" },
          method: "Pokemon Mansion",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_110.png", name: "Weezing" },
          method: "Evolve from Koffing at level 35",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_114.png", name: "Tangela" },
          method: "Pallet Town + Surf",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_125.png", name: "Electabuzz" },
          method: "Power Plant",
          caught: false,
        },
        /* ---------------------------
           Helix Line
        ---------------------------- */
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_138.png",
            name: "Omanyte",
          },
          method: "Choose Helix Fossil",
          caught: false,
          requires: { fossil: "helix" },
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_139.png",
            name: "Omastar",
          },
          method: "Evlove Omanyte at level 40",
          caught: false,
          requires: { fossil: "helix" },
        },
        /* ---------------------------
           Dome Line
        ---------------------------- */
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_140.png",
            name: "Kabuto",
          },
          method: "Choose Dome Fossil",
          caught: false,
          requires: { fossil: "dome" },
        },
        {
          pokemon: {
            img: "../images/FRLG/Spr_3f_141.png",
            name: "Kabutops",
          },
          method: "Evlove Kabuto at level 40",
          caught: false,
          requires: { fossil: "dome" },
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_142.png", name: "Aerodactyl" },
          method: "Cinnabar Island",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_145.png", name: "Zapdos" },
          method: "Power Plant",
          caught: false,
        },
      ],
    },
    "Pre Badge 5: Erika": {
      summary: "",
      rows: [
        {
          pokemon: { img: "../images/FRLG/Spr_3f_077.png", name: "Ponyta" },
          method: "One Island",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_078.png", name: "Rapidash" },
          method: "Evolve from Ponyta at level 40",
          caught: false,
        },
      ],
    },
    "Pre Elite Four": {
      summary: "",
      rows: [
        {
          pokemon: { img: "../images/FRLG/Spr_3f_144.png", name: "Articuno" },
          method: "Seafoam Island",
          caught: false,
        },
        {
          pokemon: { img: "../images/FRLG/Spr_3f_146.png", name: "Moltres" },
          method: "Mt. Ember",
          caught: false,
        },
      ],
    },
    "Post Game": {
      summary: "",
      rows: [],
    },
  },
};
