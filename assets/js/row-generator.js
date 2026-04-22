/* ==========================================================================
   Oak Tracker – Row Generator Helper
   Paste rendered section summary HTML to generate rows data
   ========================================================================== */

/* --------------------------------------------------------------------------
   Pokédex lookup
   -------------------------------------------------------------------------- */
const pokedex = {
  "Bulbasaur": 1,
  "Ivysaur": 2,
  "Venusaur": 3,
  "Charmander": 4,
  "Charmeleon": 5,
  "Charizard": 6,
  "Squirtle": 7,
  "Wartortle": 8,
  "Blastoise": 9,
  "Caterpie": 10,
  "Metapod": 11,
  "Butterfree": 12,
  "Weedle": 13,
  "Kakuna": 14,
  "Beedrill": 15,
  "Pidgey": 16,
  "Pidgeotto": 17,
  "Pidgeot": 18,
  "Rattata": 19,
  "Raticate": 20,
  "Spearow": 21,
  "Fearow": 22,
  "Ekans": 23,
  "Arbok": 24,
  "Pikachu": 25,
  "Raichu": 26,
  "Sandshrew": 27,
  "Sandslash": 28,
  "Nidoran♀": 29,
  "Nidorina": 30,
  "Nidoqueen": 31,
  "Nidoran♂": 32,
  "Nidorino": 33,
  "Nidoking": 34,
  "Clefairy": 35,
  "Clefable": 36,
  "Vulpix": 37,
  "Ninetales": 38,
  "Jigglypuff": 39,
  "Wigglytuff": 40,
  "Zubat": 41,
  "Golbat": 42,
  "Oddish": 43,
  "Gloom": 44,
  "Vileplume": 45,
  "Paras": 46,
  "Parasect": 47,
  "Venonat": 48,
  "Venomoth": 49,
  "Diglett": 50,
  "Dugtrio": 51,
  "Meowth": 52,
  "Persian": 53,
  "Psyduck": 54,
  "Golduck": 55,
  "Mankey": 56,
  "Primeape": 57,
  "Growlithe": 58,
  "Arcanine": 59,
  "Poliwag": 60,
  "Poliwhirl": 61,
  "Poliwrath": 62,
  "Abra": 63,
  "Kadabra": 64,
  "Alakazam": 65,
  "Machop": 66,
  "Machoke": 67,
  "Machamp": 68,
  "Bellsprout": 69,
  "Weepinbell": 70,
  "Victreebel": 71,
  "Tentacool": 72,
  "Tentacruel": 73,
  "Geodude": 74,
  "Graveler": 75,
  "Golem": 76,
  "Ponyta": 77,
  "Rapidash": 78,
  "Slowpoke": 79,
  "Slowbro": 80,
  "Magnemite": 81,
  "Magneton": 82,
  "Farfetch'd": 83,
  "Doduo": 84,
  "Dodrio": 85,
  "Seel": 86,
  "Dewgong": 87,
  "Grimer": 88,
  "Muk": 89,
  "Shellder": 90,
  "Cloyster": 91,
  "Gastly": 92,
  "Haunter": 93,
  "Gengar": 94,
  "Onix": 95,
  "Drowzee": 96,
  "Hypno": 97,
  "Krabby": 98,
  "Kingler": 99,
  "Voltorb": 100,
  "Electrode": 101,
  "Exeggcute": 102,
  "Exeggutor": 103,
  "Cubone": 104,
  "Marowak": 105,
  "Hitmonlee": 106,
  "Hitmonchan": 107,
  "Lickitung": 108,
  "Koffing": 109,
  "Weezing": 110,
  "Rhyhorn": 111,
  "Rhydon": 112,
  "Chansey": 113,
  "Tangela": 114,
  "Kangaskhan": 115,
  "Horsea": 116,
  "Seadra": 117,
  "Goldeen": 118,
  "Seaking": 119,
  "Staryu": 120,
  "Starmie": 121,
  "Mr. Mime": 122,
  "Scyther": 123,
  "Jynx": 124,
  "Electabuzz": 125,
  "Magmar": 126,
  "Pinsir": 127,
  "Tauros": 128,
  "Magikarp": 129,
  "Gyarados": 130,
  "Lapras": 131,
  "Ditto": 132,
  "Eevee": 133,
  "Vaporeon": 134,
  "Jolteon": 135,
  "Flareon": 136,
  "Porygon": 137,
  "Omanyte": 138,
  "Omastar": 139,
  "Kabuto": 140,
  "Kabutops": 141,
  "Aerodactyl": 142,
  "Snorlax": 143,
  "Articuno": 144,
  "Zapdos": 145,
  "Moltres": 146,
  "Dratini": 147,
  "Dragonair": 148,
  "Dragonite": 149,
  "Mewtwo": 150,
  "Mew": 151,
  "Chikorita": 152,
  "Bayleef": 153,
  "Meganium": 154,
  "Cyndaquil": 155,
  "Quilava": 156,
  "Typhlosion": 157,
  "Totodile": 158,
  "Croconaw": 159,
  "Feraligatr": 160,
  "Sentret": 161,
  "Furret": 162,
  "Hoothoot": 163,
  "Noctowl": 164,
  "Ledyba": 165,
  "Ledian": 166,
  "Spinarak": 167,
  "Ariados": 168,
  "Crobat": 169,
  "Chinchou": 170,
  "Lanturn": 171,
  "Pichu": 172,
  "Cleffa": 173,
  "Igglybuff": 174,
  "Togepi": 175,
  "Togetic": 176,
  "Natu": 177,
  "Xatu": 178,
  "Mareep": 179,
  "Flaaffy": 180,
  "Ampharos": 181,
  "Bellossom": 182,
  "Marill": 183,
  "Azumarill": 184,
  "Sudowoodo": 185,
  "Politoed": 186,
  "Hoppip": 187,
  "Skiploom": 188,
  "Jumpluff": 189,
  "Aipom": 190,
  "Sunkern": 191,
  "Sunflora": 192,
  "Yanma": 193,
  "Wooper": 194,
  "Quagsire": 195,
  "Espeon": 196,
  "Umbreon": 197,
  "Murkrow": 198,
  "Slowking": 199,
  "Misdreavus": 200,
  "Unown": 201,
  "Wobbuffet": 202,
  "Girafarig": 203,
  "Pineco": 204,
  "Forretress": 205,
  "Dunsparce": 206,
  "Gligar": 207,
  "Steelix": 208,
  "Snubbull": 209,
  "Granbull": 210,
  "Qwilfish": 211,
  "Scizor": 212,
  "Shuckle": 213,
  "Heracross": 214,
  "Sneasel": 215,
  "Teddiursa": 216,
  "Ursaring": 217,
  "Slugma": 218,
  "Magcargo": 219,
  "Swinub": 220,
  "Piloswine": 221,
  "Corsola": 222,
  "Remoraid": 223,
  "Octillery": 224,
  "Delibird": 225,
  "Mantine": 226,
  "Skarmory": 227,
  "Houndour": 228,
  "Houndoom": 229,
  "Kingdra": 230,
  "Phanpy": 231,
  "Donphan": 232,
  "Porygon2": 233,
  "Stantler": 234,
  "Smeargle": 235,
  "Tyrogue": 236,
  "Hitmontop": 237,
  "Smoochum": 238,
  "Elekid": 239,
  "Magby": 240,
  "Miltank": 241,
  "Blissey": 242,
  "Raikou": 243,
  "Entei": 244,
  "Suicune": 245,
  "Larvitar": 246,
  "Pupitar": 247,
  "Tyranitar": 248,
  "Lugia": 249,
  "Ho-oh": 250,
  "Celebi": 251,
  "Treecko": 252,
  "Grovyle": 253,
  "Sceptile": 254,
  "Torchic": 255,
  "Combusken": 256,
  "Blaziken": 257,
  "Mudkip": 258,
  "Marshtomp": 259,
  "Swampert": 260,
  "Poochyena": 261,
  "Mightyena": 262,
  "Zigzagoon": 263,
  "Linoone": 264,
  "Wurmple": 265,
  "Silcoon": 266,
  "Beautifly": 267,
  "Cascoon": 268,
  "Dustox": 269,
  "Lotad": 270,
  "Lombre": 271,
  "Ludicolo": 272,
  "Seedot": 273,
  "Nuzleaf": 274,
  "Shiftry": 275,
  "Taillow": 276,
  "Swellow": 277,
  "Wingull": 278,
  "Pelipper": 279,
  "Ralts": 280,
  "Kirlia": 281,
  "Gardevoir": 282,
  "Surskit": 283,
  "Masquerain": 284,
  "Shroomish": 285,
  "Breloom": 286,
  "Slakoth": 287,
  "Vigoroth": 288,
  "Slaking": 289,
  "Nincada": 290,
  "Ninjask": 291,
  "Shedinja": 292,
  "Whismur": 293,
  "Loudred": 294,
  "Exploud": 295,
  "Makuhita": 296,
  "Hariyama": 297,
  "Azurill": 298,
  "Nosepass": 299,
  "Skitty": 300,
  "Delcatty": 301,
  "Sableye": 302,
  "Mawile": 303,
  "Aron": 304,
  "Lairon": 305,
  "Aggron": 306,
  "Meditite": 307,
  "Medicham": 308,
  "Electrike": 309,
  "Manectric": 310,
  "Plusle": 311,
  "Minun": 312,
  "Volbeat": 313,
  "Illumise": 314,
  "Roselia": 315,
  "Gulpin": 316,
  "Swalot": 317,
  "Carvanha": 318,
  "Sharpedo": 319,
  "Wailmer": 320,
  "Wailord": 321,
  "Numel": 322,
  "Camerupt": 323,
  "Torkoal": 324,
  "Spoink": 325,
  "Grumpig": 326,
  "Spinda": 327,
  "Trapinch": 328,
  "Vibrava": 329,
  "Flygon": 330,
  "Cacnea": 331,
  "Cacturne": 332,
  "Swablu": 333,
  "Altaria": 334,
  "Zangoose": 335,
  "Seviper": 336,
  "Lunatone": 337,
  "Solrock": 338,
  "Barboach": 339,
  "Whiscash": 340,
  "Corphish": 341,
  "Crawdaunt": 342,
  "Baltoy": 343,
  "Claydol": 344,
  "Lileep": 345,
  "Cradily": 346,
  "Anorith": 347,
  "Armaldo": 348,
  "Feebas": 349,
  "Milotic": 350,
  "Castform": 351,
  "Kecleon": 352,
  "Shuppet": 353,
  "Banette": 354,
  "Duskull": 355,
  "Dusclops": 356,
  "Tropius": 357,
  "Chimecho": 358,
  "Absol": 359,
  "Wynaut": 360,
  "Snorunt": 361,
  "Glalie": 362,
  "Spheal": 363,
  "Sealeo": 364,
  "Walrein": 365,
  "Clamperl": 366,
  "Huntail": 367,
  "Gorebyss": 368,
  "Relicanth": 369,
  "Luvdisc": 370,
  "Bagon": 371,
  "Shelgon": 372,
  "Salamence": 373,
  "Beldum": 374,
  "Metang": 375,
  "Metagross": 376,
  "Regirock": 377,
  "Regice": 378,
  "Registeel": 379,
  "Latias": 380,
  "Latios": 381,
  "Kyogre": 382,
  "Groudon": 383,
  "Rayquaza": 384,
  "Jirachi": 385,
  "Deoxys": 386,
  "Turtwig": 387,
  "Grotle": 388,
  "Torterra": 389,
  "Chimchar": 390,
  "Monferno": 391,
  "Infernape": 392,
  "Piplup": 393,
  "Prinplup": 394,
  "Empoleon": 395,
  "Starly": 396,
  "Staravia": 397,
  "Staraptor": 398,
  "Bidoof": 399,
  "Bibarel": 400,
  "Kricketot": 401,
  "Kricketune": 402,
  "Shinx": 403,
  "Luxio": 404,
  "Luxray": 405,
  "Budew": 406,
  "Roserade": 407,
  "Cranidos": 408,
  "Rampardos": 409,
  "Shieldon": 410,
  "Bastiodon": 411,
  "Burmy": 412,
  "Wormadam": 413,
  "Mothim": 414,
  "Combee": 415,
  "Vespiquen": 416,
  "Pachirisu": 417,
  "Buizel": 418,
  "Floatzel": 419,
  "Cherubi": 420,
  "Cherrim": 421,
  "Shellos": 422,
  "Gastrodon": 423,
  "Ambipom": 424,
  "Drifloon": 425,
  "Drifblim": 426,
  "Buneary": 427,
  "Lopunny": 428,
  "Mismagius": 429,
  "Honchkrow": 430,
  "Glameow": 431,
  "Purugly": 432,
  "Chingling": 433,
  "Stunky": 434,
  "Skuntank": 435,
  "Bronzor": 436,
  "Bronzong": 437,
  "Bonsly": 438,
  "Mime Jr.": 439,
  "Happiny": 440,
  "Chatot": 441,
  "Spiritomb": 442,
  "Gible": 443,
  "Gabite": 444,
  "Garchomp": 445,
  "Munchlax": 446,
  "Riolu": 447,
  "Lucario": 448,
  "Hippopotas": 449,
  "Hippowdon": 450,
  "Skorupi": 451,
  "Drapion": 452,
  "Croagunk": 453,
  "Toxicroak": 454,
  "Carnivine": 455,
  "Finneon": 456,
  "Lumineon": 457,
  "Mantyke": 458,
  "Snover": 459,
  "Abomasnow": 460,
  "Weavile": 461,
  "Magnezone": 462,
  "Lickilicky": 463,
  "Rhyperior": 464,
  "Tangrowth": 465,
  "Electivire": 466,
  "Magmortar": 467,
  "Togekiss": 468,
  "Yanmega": 469,
  "Leafeon": 470,
  "Glaceon": 471,
  "Gliscor": 472,
  "Mamoswine": 473,
  "Porygon-Z": 474,
  "Gallade": 475,
  "Probopass": 476,
  "Dusknoir": 477,
  "Froslass": 478,
  "Rotom": 479,
  "Uxie": 480,
  "Mesprit": 481,
  "Azelf": 482,
  "Dialga": 483,
  "Palkia": 484,
  "Heatran": 485,
  "Regigigas": 486,
  "Giratina": 487,
  "Cresselia": 488,
  "Phione": 489,
  "Manaphy": 490,
  "Darkrai": 491,
  "Shaymin": 492,
  "Arceus": 493,
  "Victini": 494,
  "Snivy": 495,
  "Servine": 496,
  "Serperior": 497,
  "Tepig": 498,
  "Pignite": 499,
  "Emboar": 500,
  "Oshawott": 501,
  "Dewott": 502,
  "Samurott": 503,
  "Patrat": 504,
  "Watchog": 505,
  "Lillipup": 506,
  "Herdier": 507,
  "Stoutland": 508,
  "Purrloin": 509,
  "Liepard": 510,
  "Pansage": 511,
  "Simisage": 512,
  "Pansear": 513,
  "Simisear": 514,
  "Panpour": 515,
  "Simipour": 516,
  "Munna": 517,
  "Musharna": 518,
  "Pidove": 519,
  "Tranquill": 520,
  "Unfezant": 521,
  "Blitzle": 522,
  "Zebstrika": 523,
  "Roggenrola": 524,
  "Boldore": 525,
  "Gigalith": 526,
  "Woobat": 527,
  "Swoobat": 528,
  "Drilbur": 529,
  "Excadrill": 530,
  "Audino": 531,
  "Timburr": 532,
  "Gurdurr": 533,
  "Conkeldurr": 534,
  "Tympole": 535,
  "Palpitoad": 536,
  "Seismitoad": 537,
  "Throh": 538,
  "Sawk": 539,
  "Sewaddle": 540,
  "Swadloon": 541,
  "Leavanny": 542,
  "Venipede": 543,
  "Whirlipede": 544,
  "Scolipede": 545,
  "Cottonee": 546,
  "Whimsicott": 547,
  "Petilil": 548,
  "Lilligant": 549,
  "Basculin": 550,
  "Sandile": 551,
  "Krokorok": 552,
  "Krookodile": 553,
  "Darumaka": 554,
  "Darmanitan": 555,
  "Maractus": 556,
  "Dwebble": 557,
  "Crustle": 558,
  "Scraggy": 559,
  "Scrafty": 560,
  "Sigilyph": 561,
  "Yamask": 562,
  "Cofagrigus": 563,
  "Tirtouga": 564,
  "Carracosta": 565,
  "Archen": 566,
  "Archeops": 567,
  "Trubbish": 568,
  "Garbodor": 569,
  "Zorua": 570,
  "Zoroark": 571,
  "Minccino": 572,
  "Cinccino": 573,
  "Gothita": 574,
  "Gothorita": 575,
  "Gothitelle": 576,
  "Solosis": 577,
  "Duosion": 578,
  "Reuniclus": 579,
  "Ducklett": 580,
  "Swanna": 581,
  "Vanillite": 582,
  "Vanillish": 583,
  "Vanilluxe": 584,
  "Deerling": 585,
  "Sawsbuck": 586,
  "Emolga": 587,
  "Karrablast": 588,
  "Escavalier": 589,
  "Foongus": 590,
  "Amoonguss": 591,
  "Frillish": 592,
  "Jellicent": 593,
  "Alomomola": 594,
  "Joltik": 595,
  "Galvantula": 596,
  "Ferroseed": 597,
  "Ferrothorn": 598,
  "Klink": 599,
  "Klang": 600,
  "Klinklang": 601,
  "Tynamo": 602,
  "Eelektrik": 603,
  "Eelektross": 604,
  "Elgyem": 605,
  "Beheeyem": 606,
  "Litwick": 607,
  "Lampent": 608,
  "Chandelure": 609,
  "Axew": 610,
  "Fraxure": 611,
  "Haxorus": 612,
  "Cubchoo": 613,
  "Beartic": 614,
  "Cryogonal": 615,
  "Shelmet": 616,
  "Accelgor": 617,
  "Stunfisk": 618,
  "Mienfoo": 619,
  "Mienshao": 620,
  "Druddigon": 621,
  "Golett": 622,
  "Golurk": 623,
  "Pawniard": 624,
  "Bisharp": 625,
  "Bouffalant": 626,
  "Rufflet": 627,
  "Braviary": 628,
  "Vullaby": 629,
  "Mandibuzz": 630,
  "Heatmor": 631,
  "Durant": 632,
  "Deino": 633,
  "Zweilous": 634,
  "Hydreigon": 635,
  "Larvesta": 636,
  "Volcarona": 637,
  "Cobalion": 638,
  "Terrakion": 639,
  "Virizion": 640,
  "Tornadus": 641,
  "Thundurus": 642,
  "Reshiram": 643,
  "Zekrom": 644,
  "Landorus": 645,
  "Kyurem": 646,
  "Keldeo": 647,
  "Meloetta": 648,
  "Genesect": 649,
  "Chespin": 650,
  "Quilladin": 651,
  "Chesnaught": 652,
  "Fennekin": 653,
  "Braixen": 654,
  "Delphox": 655,
  "Froakie": 656,
  "Frogadier": 657,
  "Greninja": 658,
  "Bunnelby": 659,
  "Diggersby": 660,
  "Fletchling": 661,
  "Fletchinder": 662,
  "Talonflame": 663,
  "Scatterbug": 664,
  "Spewpa": 665,
  "Vivillon": 666,
  "Litleo": 667,
  "Pyroar": 668,
  "Flabébé": 669,
  "Floette": 670,
  "Florges": 671,
  "Skiddo": 672,
  "Gogoat": 673,
  "Pancham": 674,
  "Pangoro": 675,
  "Furfrou": 676,
  "Espurr": 677,
  "Meowstic": 678,
  "Honedge": 679,
  "Doublade": 680,
  "Aegislash": 681,
  "Spritzee": 682,
  "Aromatisse": 683,
  "Swirlix": 684,
  "Slurpuff": 685,
  "Inkay": 686,
  "Malamar": 687,
  "Binacle": 688,
  "Barbaracle": 689,
  "Skrelp": 690,
  "Dragalge": 691,
  "Clauncher": 692,
  "Clawitzer": 693,
  "Helioptile": 694,
  "Heliolisk": 695,
  "Tyrunt": 696,
  "Tyrantrum": 697,
  "Amaura": 698,
  "Aurorus": 699,
  "Sylveon": 700,
  "Hawlucha": 701,
  "Dedenne": 702,
  "Carbink": 703,
  "Goomy": 704,
  "Sliggoo": 705,
  "Goodra": 706,
  "Klefki": 707,
  "Phantump": 708,
  "Trevenant": 709,
  "Pumpkaboo": 710,
  "Gourgeist": 711,
  "Bergmite": 712,
  "Avalugg": 713,
  "Noibat": 714,
  "Noivern": 715,
  "Xerneas": 716,
  "Yveltal": 717,
  "Zygarde": 718,
  "Diancie": 719,
  "Hoopa": 720,
  "Volcanion": 721,
  "Rowlet": 722,
  "Dartrix": 723,
  "Decidueye": 724,
  "Litten": 725,
  "Torracat": 726,
  "Incineroar": 727,
  "Popplio": 728,
  "Brionne": 729,
  "Primarina": 730,
  "Pikipek": 731,
  "Trumbeak": 732,
  "Toucannon": 733,
  "Yungoos": 734,
  "Gumshoos": 735,
  "Grubbin": 736,
  "Charjabug": 737,
  "Vikavolt": 738,
  "Crabrawler": 739,
  "Crabominable": 740,
  "Oricorio": 741,
  "Cutiefly": 742,
  "Ribombee": 743,
  "Rockruff": 744,
  "Lycanroc": 745,
  "Wishiwashi": 746,
  "Mareanie": 747,
  "Toxapex": 748,
  "Mudbray": 749,
  "Mudsdale": 750,
  "Dewpider": 751,
  "Araquanid": 752,
  "Fomantis": 753,
  "Lurantis": 754,
  "Morelull": 755,
  "Shiinotic": 756,
  "Salandit": 757,
  "Salazzle": 758,
  "Stufful": 759,
  "Bewear": 760,
  "Bounsweet": 761,
  "Steenee": 762,
  "Tsareena": 763,
  "Comfey": 764,
  "Oranguru": 765,
  "Passimian": 766,
  "Wimpod": 767,
  "Golisopod": 768,
  "Sandygast": 769,
  "Palossand": 770,
  "Pyukumuku": 771,
  "Type: Null": 772,
  "Silvally": 773,
  "Minior": 774,
  "Komala": 775,
  "Turtonator": 776,
  "Togedemaru": 777,
  "Mimikyu": 778,
  "Bruxish": 779,
  "Drampa": 780,
  "Dhelmise": 781,
  "Jangmo-o": 782,
  "Hakamo-o": 783,
  "Kommo-o": 784,
  "Tapu Koko": 785,
  "Tapu Lele": 786,
  "Tapu Bulu": 787,
  "Tapu Fini": 788,
  "Cosmog": 789,
  "Cosmoem": 790,
  "Solgaleo": 791,
  "Lunala": 792,
  "Nihilego": 793,
  "Buzzwole": 794,
  "Pheromosa": 795,
  "Xurkitree": 796,
  "Celesteela": 797,
  "Kartana": 798,
  "Guzzlord": 799,
  "Necrozma": 800,
  "Magearna": 801,
  "Marshadow": 802,
  "Poipole": 803,
  "Naganadel": 804,
  "Stakataka": 805,
  "Blacephalon": 806,
  "Zeraora": 807,
  "Meltan": 808,
  "Melmetal": 809,
  "Grookey": 810,
  "Thwackey": 811,
  "Rillaboom": 812,
  "Scorbunny": 813,
  "Raboot": 814,
  "Cinderace": 815,
  "Sobble": 816,
  "Drizzile": 817,
  "Inteleon": 818,
  "Skwovet": 819,
  "Greedent": 820,
  "Rookidee": 821,
  "Corvisquire": 822,
  "Corviknight": 823,
  "Blipbug": 824,
  "Dottler": 825,
  "Orbeetle": 826,
  "Nickit": 827,
  "Thievul": 828,
  "Gossifleur": 829,
  "Eldegoss": 830,
  "Wooloo": 831,
  "Dubwool": 832,
  "Chewtle": 833,
  "Drednaw": 834,
  "Yamper": 835,
  "Boltund": 836,
  "Rolycoly": 837,
  "Carkol": 838,
  "Coalossal": 839,
  "Applin": 840,
  "Flapple": 841,
  "Appletun": 842,
  "Silicobra": 843,
  "Sandaconda": 844,
  "Cramorant": 845,
  "Arrokuda": 846,
  "Barraskewda": 847,
  "Toxel": 848,
  "Toxtricity": 849,
  "Sizzlipede": 850,
  "Centiskorch": 851,
  "Clobbopus": 852,
  "Grapploct": 853,
  "Sinistea": 854,
  "Polteageist": 855,
  "Hatenna": 856,
  "Hattrem": 857,
  "Hatterene": 858,
  "Impidimp": 859,
  "Morgrem": 860,
  "Grimmsnarl": 861,
  "Obstagoon": 862,
  "Perrserker": 863,
  "Cursola": 864,
  "Sirfetch'd": 865,
  "Mr. Rime": 866,
  "Runerigus": 867,
  "Milcery": 868,
  "Alcremie": 869,
  "Falinks": 870,
  "Pincurchin": 871,
  "Snom": 872,
  "Frosmoth": 873,
  "Stonjourner": 874,
  "Eiscue": 875,
  "Indeedee": 876,
  "Morpeko": 877,
  "Cufant": 878,
  "Copperajah": 879,
  "Dracozolt": 880,
  "Arctozolt": 881,
  "Dracovish": 882,
  "Arctovish": 883,
  "Duraludon": 884,
  "Dreepy": 885,
  "Drakloak": 886,
  "Dragapult": 887,
  "Zacian": 888,
  "Zamazenta": 889,
  "Eternatus": 890,
  "Kubfu": 891,
  "Urshifu": 892,
  "Zarude": 893,
  "Regieleki": 894,
  "Regidrago": 895,
  "Glastrier": 896,
  "Spectrier": 897,
  "Calyrex": 898,
  "Wyrdeer": 899,
  "Kleavor": 900,
  "Ursaluna": 901,
  "Basculegion": 902,
  "Sneasler": 903,
  "Overqwil": 904,
  "Enamorus": 905,
  "Sprigatito": 906,
  "Floragato": 907,
  "Meowscarada": 908,
  "Fuecoco": 909,
  "Crocalor": 910,
  "Skeledirge": 911,
  "Quaxly": 912,
  "Quaxwell": 913,
  "Quaquaval": 914,
  "Lechonk": 915,
  "Oinkologne": 916,
  "Tarountula": 917,
  "Spidops": 918,
  "Nymble": 919,
  "Lokix": 920,
  "Pawmi": 921,
  "Pawmo": 922,
  "Pawmot": 923,
  "Tandemaus": 924,
  "Maushold": 925,
  "Fidough": 926,
  "Dachsbun": 927,
  "Smoliv": 928,
  "Dolliv": 929,
  "Arboliva": 930,
  "Squawkabilly": 931,
  "Nacli": 932,
  "Naclstack": 933,
  "Garganacl": 934,
  "Charcadet": 935,
  "Armarouge": 936,
  "Ceruledge": 937,
  "Tadbulb": 938,
  "Bellibolt": 939,
  "Wattrel": 940,
  "Kilowattrel": 941,
  "Maschiff": 942,
  "Mabosstiff": 943,
  "Shroodle": 944,
  "Grafaiai": 945,
  "Bramblin": 946,
  "Brambleghast": 947,
  "Toedscool": 948,
  "Toedscruel": 949,
  "Klawf": 950,
  "Capsakid": 951,
  "Scovillain": 952,
  "Rellor": 953,
  "Rabsca": 954,
  "Flittle": 955,
  "Espathra": 956,
  "Tinkatink": 957,
  "Tinkatuff": 958,
  "Tinkaton": 959,
  "Wiglett": 960,
  "Wugtrio": 961,
  "Bombirdier": 962,
  "Finizen": 963,
  "Palafin": 964,
  "Varoom": 965,
  "Revavroom": 966,
  "Cyclizar": 967,
  "Orthworm": 968,
  "Glimmet": 969,
  "Glimmora": 970,
  "Greavard": 971,
  "Houndstone": 972,
  "Flamigo": 973,
  "Cetoddle": 974,
  "Cetitan": 975,
  "Veluza": 976,
  "Dondozo": 977,
  "Tatsugiri": 978,
  "Annihilape": 979,
  "Clodsire": 980,
  "Farigiraf": 981,
  "Dudunsparce": 982,
  "Kingambit": 983,
  "Great Tusk": 984,
  "Scream Tail": 985,
  "Brute Bonnet": 986,
  "Flutter Mane": 987,
  "Slither Wing": 988,
  "Sandy Shocks": 989,
  "Iron Treads": 990,
  "Iron Bundle": 991,
  "Iron Hands": 992,
  "Iron Jugulis": 993,
  "Iron Moth": 994,
  "Iron Thorns": 995,
  "Frigibax": 996,
  "Arctibax": 997,
  "Baxcalibur": 998,
  "Gimmighoul": 999,
  "Gholdengo": 1000,
  "Wo-Chien": 1001,
  "Chien-Pao": 1002,
  "Ting-Lu": 1003,
  "Chi-Yu": 1004,
  "Roaring Moon": 1005,
  "Iron Valiant": 1006,
  "Koraidon": 1007,
  "Miraidon": 1008,
  "Walking Wake": 1009,
  "Iron Leaves": 1010,
  "Dipplin": 1011,
  "Poltchageist": 1012,
  "Sinistcha": 1013,
  "Okidogi": 1014,
  "Munkidori": 1015,
  "Fezandipiti": 1016,
  "Ogerpon": 1017,
  "Archaludon": 1018,
  "Hydrapple": 1019,
  "Gouging Fire": 1020,
  "Raging Bolt": 1021,
  "Iron Boulder": 1022,
  "Iron Crown": 1023,
  "Terapagos": 1024,
  "Pecharunt": 1025
};
const STORAGE_KEY = "oak-row-generator-state";

/* --------------------------------------------------------------------------
 Section Pipline
 -------------------------------------------------------------------------- */

const SectionStore = {
  sections: new Map(),

  addSection(initial = {}) {
    const id = crypto.randomUUID();
    const section = createDefaultSection(id, initial);
    this.sections.set(id, section);
    return section;
  },

  removeSection(id) {
    this.sections.delete(id);
  },

  updateSection(id, updater) {
    const section = this.sections.get(id);
    if (!section) return;
    updater(section);
  },

  getAll() {
    return [...this.sections.values()];
  }
};

function renderSection(section) {
  const el = document.createElement("div");
  el.className = "section-editor";
  el.dataset.sectionId = section.id;

  el.append(
    renderSectionMeta(section.meta),
    renderSummary(section.summary),
    renderRowsTable(section.rows),
    renderSectionControls(section.id)
  );

  return el;
}

function renderAllSections() {
  const root = document.getElementById("sections-root");
  root.innerHTML = "";

  SectionStore.getAll().forEach(section => {
    root.appendChild(renderSection(section));
  });
}


/* --------------------------------------------------------------------------
 Row Types
 -------------------------------------------------------------------------- */
const ROW_TYPES = {
  NORMAL: { value: "normal", label: "Normal" },
  CHOICE: { value: "choice", label: "Choice" },
  CONDITIONAL: { value: "conditional", label: "Conditional" },
  OMIT: { value: "omit", label: "Omit" }
};

function renderRowTypeSelect(selected = ROW_TYPES.NORMAL.value) {
  return `
    <select class="row-type">
      ${Object.values(ROW_TYPES)
      .map(t => `
          <option value="${t.value}"${t.value === selected ? " selected" : ""}>
            ${t.label}
          </option>
        `)
      .join("")}
    </select>
  `;
}

/* --------------------------------------------------------------------------
 Utilities
 -------------------------------------------------------------------------- */
function qs(root, selector) {
  return root.querySelector(selector);
}

function getSectionEl(el) {
  return el.closest(".section-editor");
}

function valueOrPlaceholder(input) {
  if (!input) return "";
  return input.value.trim() || input.placeholder || "";
}

function debounce(fn, delay = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

function insertConditionalAfter(tr) {
  const tbody = tr.parentElement;
  const next = tr.nextElementSibling;
  if (next && next.querySelector(".row-type")?.value === "conditional") return;

  const clone = tr.cloneNode(true);
  clone.querySelector(".row-type").value = "conditional";
  clone.querySelector(".cell-meta input").value =
    tr.querySelector(".cell-meta input").value || "";

  tbody.insertBefore(clone, tr.nextSibling);
}

/* --------------------------------------------------------------------------
 Section Meta
 -------------------------------------------------------------------------- */
function collectSectionMeta(section) {
  return {
    sectionKey: valueOrPlaceholder(qs(section, ".section-key")),
    headerTitle: valueOrPlaceholder(qs(section, ".header-title")),
    headerImg: valueOrPlaceholder(qs(section, ".header-img")),
    headerImgAlt: valueOrPlaceholder(qs(section, ".header-img-alt")),
    summaryShort: valueOrPlaceholder(qs(section, ".summary-short"))
  };
}

/* --------------------------------------------------------------------------
 Game Meta
 -------------------------------------------------------------------------- */
function collectGameMeta() {
  return {
    gameId: valueOrPlaceholder(document.querySelector(".game-id")),
    gameTitle: valueOrPlaceholder(document.querySelector(".game-title")),
    logo: valueOrPlaceholder(document.querySelector(".game-logo")),
    imgBasehref: valueOrPlaceholder(document.querySelector(".img-basehref")),
    badgeBasehref: valueOrPlaceholder(document.querySelector(".badge-basehref")),
    aboutHtml: valueOrPlaceholder(document.querySelector(".about-html"))
  };
}

/* --------------------------------------------------------------------------
 Author Text → HTML
 -------------------------------------------------------------------------- */
function authorTextToHtml(text) {
  const lines = text.replace(/\u00A0/g, " ").split("\n");
  const blocks = [];
  let para = [];
  let pre = [];

  const flushPara = () => {
    if (para.length) {
      blocks.push(`<p>${para.join(" ")}</p>`);
      para = [];
    }
  };

  const flushPre = () => {
    if (pre.length) {
      blocks.push(`<pre>\n${pre.join("\n")}\n</pre>`);
      pre = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushPara();
      flushPre();
      continue;
    }
    if (line.startsWith("# ")) {
      flushPara();
      flushPre();
      blocks.push(`<h5>${line.slice(2).trim()}</h5>`);
      continue;
    }
    if (/^(\s{2,}|\t)/.test(raw)) {
      flushPara();
      pre.push(line.trim());
      continue;
    }
    flushPre();
    para.push(line.trim());
  }

  flushPara();
  flushPre();
  return blocks.join("\n\n");
}

/* --------------------------------------------------------------------------
 Row Generation (HTML → DRAFT ROWS)
 -------------------------------------------------------------------------- */
function generateRowsFromHtml(html) {
  const root = document.createElement("div");
  root.innerHTML = html;
  const rows = [];
  let currentSection = null;

  for (const el of root.children) {
    if (el.tagName === "H5") {
      currentSection = el.textContent.trim();
      continue;
    }
    if (el.tagName !== "PRE" || !currentSection) continue;

    const lines = el.textContent
      .split("\n")
      .map(l => l.trim())
      .filter(Boolean);

    for (const line of lines) {
      rows.push({
        pokemon: { name: line, img: null },
        method: `Catch in ${currentSection}`
      });
    }
  }

  return rows;
}

/* --------------------------------------------------------------------------
 Rows Table (EDITOR UI)
 -------------------------------------------------------------------------- */
function renderRowsTable(tbody, rows) {
  tbody.innerHTML = "";
  for (const row of rows) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="cell-type">${renderRowTypeSelect()}</td>
      <td class="cell-name">${row.pokemon.name}</td>
      <td class="cell-img">${row.pokemon.img ?? ""}</td>
      <td class="cell-method">
        <input type="text" value="${row.method}" />
      </td>
      <td class="cell-meta">
        <input type="text"
          placeholder='starter=bulbasaur or starter:"bulbasaur"' />
      </td>
    `;
    tbody.appendChild(tr);
  }
}

/* --------------------------------------------------------------------------
 Semantic Row Reader
 -------------------------------------------------------------------------- */
function readRowFromTr(tr) {
  const type = tr.querySelector(".row-type")?.value ?? ROW_TYPES.NORMAL.value;
  const meta = tr.querySelector(".cell-meta input")?.value.trim() ?? "";

  const base = {
    type,
    pokemon: {
      name: tr.querySelector(".cell-name")?.textContent.trim() ?? "",
      img: tr.querySelector(".cell-img")?.textContent.trim() ?? null
    },
    method: tr.querySelector(".cell-method input")?.value.trim() ?? "",
    meta
  };

  if (type === "choice") {
    const parsed = parseChoiceMeta(meta);
    if (parsed) {
      base.choiceKey = parsed.choiceKey;
      base.choiceValue = parsed.choiceValue;
    }
  }

  if (type === "conditional") {
    base.requires = parseRequires(meta);
  }

  return base;
}

/* --------------------------------------------------------------------------
 Choice / Requires Parsing
 -------------------------------------------------------------------------- */
function normalizeQuotedValue(v) {
  v = v.trim();
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) return v;
  return `"${v}"`;
}

function parseChoiceMeta(input) {
  if (!input || !input.includes("=")) return null;
  const [k, v] = input.split("=").map(s => s.trim());
  if (!k || !v) return null;
  return {
    choiceKey: k,
    choiceValue: normalizeQuotedValue(v).slice(1, -1)
  };
}

function parseRequires(input) {
  const obj = {};
  input.split(",").forEach(part => {
    const [k, v] = part.split(":").map(s => s.trim());
    if (!k || !v) return;
    obj[k] = v.replace(/^['"]|['"]$/g, "");
  });
  return obj;
}

/* --------------------------------------------------------------------------
 Row Export Interpretation
 -------------------------------------------------------------------------- */
const ROW_TYPE_EXPORTERS = {
  normal: d => ({
    pokemon: d.pokemon,
    method: d.method
  }),
  conditional: d => ({
    pokemon: d.pokemon,
    method: d.method,
    requires: parseRequires(d.meta)
  }),
  choice: d => {
    const c = parseChoiceMeta(d.meta);
    if (!c) return null;
    return {
      type: "choice",
      choiceKey: c.choiceKey,
      choiceValue: c.choiceValue,
      pokemon: d.pokemon,
      method: d.method
    };
  },
  omit: () => null
};

function collectRowsFromTable(section) {
  const gameMeta = collectGameMeta();
  const rows = [];

  section.querySelectorAll(".rows-table tbody tr")
    .forEach(tr => {
      const r = readRowFromTr(tr);
      if (r.type === ROW_TYPES.OMIT.value) return;

      r.pokemon.img = resolveEditorPath(
        r.pokemon.img ?? "",
        gameMeta
      );

      if (r.type === ROW_TYPES.NORMAL.value) {
        delete r.meta;
        delete r.requires;
      }

      rows.push(r);
    });

  return rows;
}


function resolveEditorPath(src, gameMeta) {
  if (!src || typeof src !== "string") return ""

  const m = src.match(/^(\w+)\s*\+\s*"(.+)"$/)
  if (!m) return src

  const [, base, file] = m

  if (base === "imgBasehref") {
    return gameMeta.imgBasehref + file
  }

  if (base === "badgeBasehref") {
    return gameMeta.badgeBasehref + file
  }

  return src
}

function reorderRowsForExport(rows) {
  const groups = new Map();
  const rest = [];
  for (const r of rows) {
    if (r.type === "choice") {
      if (!groups.has(r.choiceKey)) groups.set(r.choiceKey, []);
      groups.get(r.choiceKey).push(r);
    } else {
      rest.push(r);
    }
  }
  return [...groups.values()].flat().concat(rest);
}

function exportAllSections() {
  const gameMeta = collectGameMeta();
  const sections = document.querySelectorAll(".section-editor");
  const sectionBlocks = [];

  for (const section of sections) {
    const meta = collectSectionMeta(section);
    if (!meta.sectionKey && !meta.headerTitle) continue;

    const raw = qs(section, ".summary-input").value.trim();
    const useHtml = qs(section, ".use-html").checked;
    const summaryHtml = useHtml && raw ? raw : authorTextToHtml(raw);

    const rawRows = collectRowsFromTable(section);
    const rows = reorderRowsForExport(rawRows);

    const rowBlocks = rows.map(row => {
      if (row.type === "choice") {
        return `{
          type: "choice",
          choiceKey: "${row.choiceKey}",
          choiceValue: "${row.choiceValue}",
          pokemon: {
            name: "${row.pokemon.name}",
            img: ${row.pokemon.img ?? '""'}
          },
          method: "${row.method}"
        }`;
      }

      const requiresBlock = row.requires
        ? `,
          requires: ${JSON.stringify(row.requires)}
        `
        : "";

      return `{
          pokemon: {
            name: "${row.pokemon.name}",
            img: ${row.pokemon.img ?? '""'}
          },
          method: "${row.method}"${requiresBlock}
        }`;
    });

    sectionBlocks.push(
      `"${meta.sectionKey}": {
        headerTitle: "${meta.headerTitle}",
        headerImg: ${meta.headerImg ? `"${meta.headerImg}"` : '""'},
        headerImgAlt: "${meta.headerImgAlt}",
        summaryShort: "${meta.summaryShort}",
        summaryHtml: \`
${summaryHtml}
        \`,
        rows: [
${rowBlocks.join(",\n")}
        ]
      }`
    );
  }

  document.getElementById("export-output").value = `window.gameData = {
    gameId: "${gameMeta.gameId}",
    gameTitle: "${gameMeta.gameTitle}",
    logo: "${gameMeta.logo}",
    imgBasehref: "${gameMeta.imgBasehref}",
    badgeBasehref: "${gameMeta.badgeBasehref}",
    aboutHtml: \`
${gameMeta.aboutHtml}
    \`,
    progression: {
${sectionBlocks.join(",\n\n")}
    }
  };`;
}



/* --------------------------------------------------------------------------
 Preview (Oak Tracker Accurate)
 -------------------------------------------------------------------------- */
function updateOakPreview() {
  const gameMeta = collectGameMeta();

  const progression = {};

  document.querySelectorAll(".section-editor").forEach(section => {
    const meta = collectSectionMeta(section);
    if (!meta.sectionKey) return;

    progression[meta.sectionKey] = {
      headerTitle: meta.headerTitle,
      headerImg: meta.headerImg || "",
      headerImgAlt: meta.headerImgAlt || "",
      summaryShort: meta.summaryShort,
      summaryHtml: authorTextToHtml(
        qs(section, ".summary-input").value
      ),
      rows: reorderRowsForExport(
        collectRowsFromTable(section)
      )
    };
  });

  const gameData = {
    gameId: gameMeta.gameId,
    gameTitle: gameMeta.gameTitle,
    logo: gameMeta.logo,
    imgBasehref: gameMeta.imgBasehref,
    badgeBasehref: gameMeta.badgeBasehref,
    aboutHtml: gameMeta.aboutHtml,
    progression
  };

  document
    .getElementById("oak-preview")
    ?.contentWindow
    ?.postMessage(
      { type: "oak-preview", payload: gameData, theme: getTheme() },
      "*"
    );
}

function buildSingleSectionPreviewGameData(section) {
  const gameMeta = collectGameMeta();
  const meta = collectSectionMeta(section);

  if (!meta.sectionKey) return null;

  return {
    gameId: gameMeta.gameId,
    gameTitle: gameMeta.gameTitle,
    logo: gameMeta.logo,
    imgBasehref: gameMeta.imgBasehref,
    badgeBasehref: gameMeta.badgeBasehref,

    aboutHtml: "",

    progression: {
      [meta.sectionKey]: {
        headerTitle: meta.headerTitle,
        headerImg:
          resolveEditorPath(meta.headerImg, gameMeta),
        headerImgAlt: meta.headerImgAlt || "",
        summaryShort: meta.summaryShort,
        summaryHtml: authorTextToHtml(
          qs(section, ".summary-input").value
        ),
        rows: reorderRowsForExport(
          collectRowsFromTable(section)
        )
      }
    }
  };
}

function updateOakPreviewForSection(section) {
  const gameData = buildSingleSectionPreviewGameData(section);
  if (!gameData) return;

  document
    .getElementById("oak-preview")
    ?.contentWindow
    ?.postMessage(
      { type: "oak-preview", payload: gameData },
      "*"
    );
}


/* --------------------------------------------------------------------------
 Live Preview Wiring
 -------------------------------------------------------------------------- */
const updatePreviewDebounced = debounce(section => {
  const meta = collectSectionMeta(section);
  const raw = qs(section, ".summary-input").value;
  const useHtml = qs(section, ".use-html").checked;
  const summaryHtml = useHtml ? raw : authorTextToHtml(raw);
});

/* --------------------------------------------------------------------------
 Local Storage Persistence
 -------------------------------------------------------------------------- */
function saveToLocalStorage() {
  const prevRaw = localStorage.getItem(STORAGE_KEY);
  let createdAt = new Date().toISOString();

  if (prevRaw) {
    try {
      const prev = JSON.parse(prevRaw);
      if (prev.createdAt) {
        createdAt = prev.createdAt;
      }
    } catch { }
  }

  const sections = [];

  document.querySelectorAll(".section-editor").forEach(section => {
    sections.push({
      meta: collectSectionMeta(section),
      summaryInput: qs(section, ".summary-input").value,
      useHtml: qs(section, ".use-html").checked,
      rows: [...qs(section, ".rows-table tbody").querySelectorAll("tr")]
        .map(readRowFromTr)
        .filter(r => r.type !== ROW_TYPES.OMIT.value)
    });
  });

  const payload = {
    version: 1,
    createdAt,
    updatedAt: new Date().toISOString(),
    gameMeta: collectGameMeta(),
    sections
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}


function loadFromLocalStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  const state = JSON.parse(raw);

  if (state.gameMeta) {
    Object.entries(state.gameMeta).forEach(([key, value]) => {
      const el = document.querySelector(
        "." + key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
      );
      if (el) el.value = value ?? "";
    });
  }

  const root = document.getElementById("sections-root");
  const template = root.querySelector(".section-editor");
  root.innerHTML = "";

  state.sections.forEach(s => {
    const section = template.cloneNode(true);
    Object.entries(s.meta).forEach(([k, v]) => {
      const el = qs(section, "." + k.replace(/[A-Z]/g, m => "-" + m.toLowerCase()));
      if (el) el.value = v;
    });

    qs(section, ".summary-input").value = s.summaryInput;
    qs(section, ".use-html").checked = s.useHtml;

    const tbody = qs(section, ".rows-table tbody");
    tbody.innerHTML = "";
    s.rows.forEach(r => {
      if (r.type === ROW_TYPES.OMIT.value) return;

      const tr = document.createElement("tr");
      tr.innerHTML = `
    <td class="cell-type">${renderRowTypeSelect(r.type)}</td>
    <td class="cell-name">${r.pokemon.name}</td>
    <td class="cell-img">${r.pokemon.img ?? ""}</td>
    <td class="cell-method"><input value="${r.method}" /></td>
    <td class="cell-meta"><input value="${r.meta ?? ""}" /></td>
     `;
      tbody.appendChild(tr);
    });


    root.appendChild(section);
    updatePreviewDebounced(section);
    updateOakPreview();
  });
}

/* --------------------------------------------------------------------------
 Drafting
 -------------------------------------------------------------------------- */
function exportDraftToFile() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    alert("No draft data to export.");
    return;
  }

  const data = JSON.parse(raw);
  const stamp = (data.updatedAt || new Date().toISOString())
    .replace(/[:.]/g, "-");

  const blob = new Blob(
    [JSON.stringify(data, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `oak-tracker-draft-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}


function importDraftFromFile(file) {
  const reader = new FileReader();

  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);

      if (!parsed || !parsed.sections || !parsed.gameMeta) {
        throw new Error("Invalid draft format.");
      }

      const now = new Date().toISOString();

      const payload = {
        version: parsed.version ?? 1,
        createdAt: parsed.createdAt ?? now,
        updatedAt: now,
        gameMeta: parsed.gameMeta,
        sections: parsed.sections
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      loadFromLocalStorage();

      const firstSection = document.querySelector(".section-editor");
      if (firstSection) {
        updateOakPreviewForSection(firstSection);
      }
    } catch (err) {
      alert("Failed to import draft: " + err.message);
    }
  };

  reader.readAsText(file);
}

document.getElementById("export-draft")
  ?.addEventListener("click", exportDraftToFile);

document.getElementById("import-draft")
  ?.addEventListener("click", () => {
    document.getElementById("import-draft-file")?.click();
  });

document.getElementById("import-draft-file")
  ?.addEventListener("change", e => {
    const file = e.target.files[0];
    if (file) importDraftFromFile(file);
    e.target.value = "";
  });


/* --------------------------------------------------------------------------
 Theme
 -------------------------------------------------------------------------- */
function getTheme() {
  return document.documentElement.dataset.theme || "light";
}

/* --------------------------------------------------------------------------
 Events
 -------------------------------------------------------------------------- */
document.addEventListener("input", e => {
  const section = e.target.closest(".section-editor");
  if (!section) return;

  if (
    e.target.closest(".rows-table") ||
    e.target.classList.contains("summary-input")
  ) {
    updateOakPreviewForSection(section);
    saveToLocalStorage();
  }
});

document.addEventListener("change", e => {
  if (!e.target.classList.contains("row-type")) return;

  const tr = e.target.closest("tr");
  const section = tr.closest(".section-editor");
  if (!section) return;

  if (e.target.value === "choice") {
    insertConditionalAfter(tr);
  }

  updateOakPreviewForSection(section);
  saveToLocalStorage();
});

document.addEventListener("click", e => {
  // Generate rows
  if (e.target.classList.contains("generate-rows")) {
    const section = e.target.closest(".section-editor");
    if (!section) return;

    updateOakPreviewForSection(section);
    saveToLocalStorage();
    return;
  }

  // Remove section
  if (e.target.classList.contains("remove-section")) {
    const section = e.target.closest(".section-editor");
    if (!section) return;

    section.remove();
    saveToLocalStorage();

    const fallback = document.querySelector(".section-editor");
    if (fallback) {
      updateOakPreviewForSection(fallback);
    }
    return;
  }

  // Add section
  if (e.target.id === "add-section") {
    const sections = document.querySelectorAll(".section-editor");
    if (!sections.length) return;

    const clone = sections[sections.length - 1].cloneNode(true);

    clone.querySelectorAll("input, textarea").forEach(el => {
      if (el.type === "checkbox") {
        el.checked = false;
      } else {
        el.value = "";
      }
    });

    clone.querySelectorAll("tbody").forEach(tb => tb.innerHTML = "");

    sections[sections.length - 1].after(clone);

    saveToLocalStorage();
    updateOakPreviewForSection(clone);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();

  const firstSection = document.querySelector(".section-editor");
  if (firstSection) {
    pendingInitialPreviewSection = firstSection;
  }
});

window.addEventListener("message", e => {
  if (e.data?.type !== "oak-preview-ready") return;

  previewIframeReady = true;

  if (pendingInitialPreviewSection) {
    updateOakPreviewForSection(pendingInitialPreviewSection);
    pendingInitialPreviewSection = null;
  }
});

function attemptInitialPreviewRender() {
  const iframe = document.getElementById("oak-preview");
  if (!iframe || !iframe.contentWindow) return;

  const firstSection = document.querySelector(".section-editor");
  if (!firstSection) return;

  updateOakPreviewForSection(firstSection);
}

document.getElementById("export-js")
  ?.addEventListener("click", exportAllSections);

document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("oak-preview");
  if (!iframe) return;

  new MutationObserver(() => {
    if (!iframe.contentWindow) return;

    iframe.contentWindow.postMessage(
      {
        type: "oak-preview-theme",
        theme: getTheme()
      },
      "*"
    );
  }).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"]
  });

  iframe.addEventListener("load", () => {
    iframe.contentWindow.postMessage(
      {
        type: "oak-preview-theme",
        theme: getTheme()
      },
      "*"
    );
  });
});


let pendingInitialPreviewSection = null;
let previewIframeReady = false;