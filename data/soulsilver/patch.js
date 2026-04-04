window.gameDataPatch = {
  progression: {
    falkner: {
      summary: {
        replace: [
          {
            match: `Ledyba (SS) in the mornings, Caterpie (HG) or Weedle (SS) in the mornings/daytime and Spinarak (HG) at night.`,
            value: `Ledyba in the mornings and Weedle (SS) in the mornings/daytime.`,
          },
          {
            match: ` (HG) Caterpie → Lv. 7 → Metapod → Lv. 10 → Butterfree
          (SS) Weedle → Lv. 7 → Kakuna → Lv. 10 → Beedrill
          (HG) Spinarak → Lv. 22 → Ariados
          (SS) Ledyba → Lv. 18 → Ledian`,
            value: `Weedle → Lv. 7 → Kakuna → Lv. 10 → Beedrill
Ledyba → Lv. 18 → Ledian`,
          },
          {
            match: `(HeartGold) Caught 41, Remaining 215<br/>
          (SoulSilver) Caught 43, Remaining 213`,
            value: `Caught 43, Remaining 213`,
          },
        ],
      },
      rows: {
        remove: [(r) => ["Caterpie", "Metapod", "Butterfree", "Spinarak", "Ariados"].includes(r.pokemon?.name)],
      },
    },

    bugsy: {
      summary: {
        remove: [`(HG) Sandshrew → Lv. 22 → Sandslash`],
      },
      rows: {
        remove: [(r) => ["Sandshrew", "Sandslash"].includes(r.pokemon?.name)],
      },
    },

    whitney: {
      summary: {
        replace: [
          {
            match: `(HG) Ekans → Lv. 22 → Arbok
          (SS) Sandshrew → Lv. 22 → Sandslash`,
            value: `Sandshrew → Lv. 22 → Sandslash`,
          },
          {
            match: `(HG) Weedle → Lv. 7 → Kakuna → Lv. 10 → Beedrill
        (SS) Caterpie → Lv. 7 → Metapod → Lv. 10 → Butterfree`,
            value: `Caterpie → Lv. 7 → Metapod → Lv. 10 → Butterfree`,
          },
          {
            match: `(HG) Growlithe
        (SS) Vulpix`,
            value: `Vulpix`,
          },
          {
            match: `(HG) Growlithe → Fire Stone → Arcanine
        (SS) Vulpix → Fire Stone → Ninetales`,
            value: `Vulpix → Fire Stone → Ninetales`,
          },
        ],
      },
      rows: {
        remove: [(r) => ["Weedle", "Kakuna", "Beedrill", "Ekans", "Arbok", "Growlithe", "Arcanine"].includes(r.pokemon?.name)],
      },
    },

    morty: {
      summary: {
        replace: [
          {
            match: `(SS) Meowth → Lv. 28 → Persian`,
            value: `Meowth → Lv. 28 → Persian`,
          },
        ],
        remove: [`dive into the grassy patch directly below to find a Mankey (HG)`, `(HG) Mankey → Lv. 28 → Primeape`],
      },
      rows: {
        remove: [(r) => ["Mankey", "Primeape"].includes(r.pokemon?.name)],
      },
    },

    pryce: {
      summary: {
        replace: [
          {
            match: `(HeartGold) Caught 176, Remaining 80<br/>
        (SoulSilver) Caught 175, Remaining 81`,
            value: `Caught 175, Remaining 81`,
          },
        ],
      },
      rows: {
        remove: [(r) => ["Mantine"].includes(r.pokemon?.name)],
      },
    },

    "chuck-jasmine": {
      summary: {
        replace: [
          {
            match: `(HeartGold) Caught 178, Remaining 78<br/>
        (SoulSilver) Caught 177, Remaining 79`,
            value: `Caught 177, Remaining 79`,
          },
        ],
      },
    },

    clair: {
      summary: {
        replace: [
          {
            match: `The cave at the end of the route leads to the chilly Ice Path where most of the pokemon are new to you. Swinub and Jynx are found in both versions while SoulSilver has an additional pokemon, Delibird.`,
            value: `The cave at the end of the route leads to the chilly Ice Path where most of the pokemon are new to you. Swinub, Jynx and Delibird are found here.`,
          },
          {
            match: `(HG) Phanpy → Lv. 25 → Donphan
        (HG) Gligar
        (SS) Teddiursa → Lv. 30 → Ursaring
        (SS) Skarmory`,
            value: `Teddiursa → Lv. 30 → Ursaring
          Skarmory`,
          },
        ],
      },
      rows: {
        remove: [(r) => ["Gligar", "Phanpy", "Donphan"].includes(r.pokemon?.name)],
      },
    },

    "pre-elite-4": {
      summary: {
        replace: [
          {
            match: `Go back to Ecruteak City and defeat the Kimono sisters at the dance theatre. Doing so will make your box legendary appear. For HeartGold players, simply climb the tower right here in Ecruteak. For Lugia, go to the Whirl Islands and enter the closest island to Olivine City. When you reach a junction, take the northern route. Make sure you have a pokemon that can give the legendary a status condition (preferably Sleep) and bring your bulkiest pokemon, most likely Tyranitar and Dragonite. You can simply use the Master Ball but I honestly would save this for other legendaries, which are Lv70, or for the roaming pokemon you have yet to unlock (Latias/Latios). Other pokeballs that are useful are Heavy Balls for Lugia, Dusk Balls (Lugia only unless it’s night for Ho-Oh) and Timer Balls for long, gruelling battles.`,
            value: `Go back to Ecruteak City and defeat the Kimono sisters at the dance theatre. Doing so will make your box legendary appear. Go to the Whirl Islands and enter the closest island to Olivine City. When you reach a junction, take the northern route. Make sure you have a pokemon that can give the legendary a status condition (preferably Sleep) and bring your bulkiest pokemon, most likely Tyranitar and Dragonite. You can simply use the Master Ball but I honestly would save this for other legendaries, which are Lv70, or for the roaming pokemon you have yet to unlock (Latias/Latios). Other pokeballs that are useful are Heavy Balls for Lugia, Dusk Balls (Lugia only unless it’s night for Ho-Oh) and Timer Balls for long, gruelling battles.`,
          },
          {
            match: `(HG) Ho-Oh
        (SS) Lugia`,
            value: `Lugia`,
          },
        ],
      },
      rows: {
        remove: [(r) => r.pokemon?.name === "Ho-Oh"],
      },
    },

    misty: {
      summary: {
        replace: [
          {
            match: `(HG) Sableye
        (SS) Mawile
        (SS) Gulpin → Lv. 26 → Swalot
        Swablu → Lv. 35 → Altaria
        (Fish) Whiscash
        (HG) Baltoy → Lv. 36 → Claydol`,
            value: `Mawile
          Gulpin → Lv. 26 → Swalot
          Swablu → Lv. 35 → Altaria
          (Fish) Whiscash`,
          },
          {
            match: `(HG) Omanyte → Lv. 40 → Omastar
        (SS) Kabuto → Lv. 40 → Kabutops`,
            value: `Kabuto → Lv. 40 → Kabutops`,
          },
          {
            match: `For SoulSilver players, go find Ho-Oh in Ecruteak City. For HeartGold players, dive into the Whirl Islands for Lugia (see previous sections on catching box legendaries after your 8th Johto badge). These guys are at a massive Lv70. Heavy Balls work great for Lugia, even without a status effect it’s just under a 10% chance to catch it if its HP is red.`,
            value: `Go find Ho-Oh in Ecruteak City.`,
          },
          {
            match: `(SS) Ho-Oh
        (HG) Lugia`,
            value: `Ho-Oh`,
          },
          {
            match: `(HG) Anorith → Lv. 40 → Armaldo
        (SS) Lileep → Lv. 40 → Cradily`,
            value: `Lileep → Lv. 40 → Cradily`,
          },
          {
            match: `(HG) Latias
        (SS) Latios`,
            value: `Latios`,
          },
          {
            match: `(HeartGold) National Dex Caught 348, Remaining 145<br/>
        (SoulSilver) National Dex Caught 347, Remaining 146`,
            value: `National Dex Caught 347, Remaining 146`,
          },
        ],
        remove: [
          `Like with Omanyte and Kabuto, these are version exclusives. HeartGold players will obtain the Claw fossil which can be resurrected at the Pewter City museum to get Anorith, SoulSilver players will find the Root fossil to resurrect Lileep.`,
          `(HG) Gligar → Lv up at night holding Razor Fang → Gliscor`,
        ],
      },
      rows: {
        remove: [(r) => ["Lugia", "Omanyte", "Omastar", "Sableye", "Baltoy", "Claydol", "Anorith", "Armaldo", "Latias", "Gliscor"].includes(r.pokemon?.name)],
      },
    },

    "pre-elite-4-kanto": {
      summary: {
        replace: [
          {
            match: `(HeartGold) National Dex Caught 349, Remaining 144<br/>
        (SoulSilver) National Dex Caught 348, Remaining 145`,
            value: `National Dex Caught 348, Remaining 145`,
          },
        ],
      },
    },

    red: {
      summary: {
        replace: [
          {
            match: `(HeartGold) National Dex Caught 366, Remaining 127 <br/>
        (SoulSilver) National Dex Caught 364, Remaining 129`,
            value: `National Dex Caught 364, Remaining 129`,
          },
        ],
        remove: [`(HG) Mantine → Breed holding Wave Incense → Mantyke`],
      },
      rows: {
        remove: [(r) => ["Mantyke"].includes(r.pokemon?.name)],
      },
    },

    postgame: {
      summary: {
        replace: [
          {
            match: `(HG) Kyogre
        (SS) Groudon`,
            value: `Groudon`,
          },
          {
            match: `(HeartGold) National Dex Caught 373, Remaining 120<br/>
        (SoulSilver) National Dex Caught 371, Remaining 122`,
            value: `National Dex Caught 371, Remaining 122`,
          },
        ],
      },
      rows: {
        remove: [(r) => r.pokemon?.name === "Kyogre"],
      },
    },
  },
};
