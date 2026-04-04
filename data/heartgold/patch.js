window.gameDataPatch = {
  progression: {
    falkner: {
      summary: {
        replace: [
          {
            match: `Ledyba (SS) in the mornings, Caterpie (HG) or Weedle (SS) in the mornings/daytime and Spinarak (HG) at night.`,
            value: `Caterpie in the mornings/daytime and Spinarak at night.`,
          },
          {
            match: `
          (HG) Caterpie → Lv. 7 → Metapod → Lv. 10 → Butterfree
          (SS) Weedle → Lv. 7 → Kakuna → Lv. 10 → Beedrill
          (HG) Spinarak → Lv. 22 → Ariados
          (SS) Ledyba → Lv. 18 → Ledian`,
            value: `
          Caterpie → Lv. 7 → Metapod → Lv. 10 → Butterfree
          Spinarak → Lv. 22 → Ariados`,
          },
          {
            match: `(HeartGold) Caught 41, Remaining 215<br/>
          (SoulSilver) Caught 43, Remaining 213`,
            value: `Caught 41, Remaining 215`,
          },
        ],
        remove: [`For SoulSilver players there is an additional obstacle with an extra pokemon – Ekans.`, `(SS) Ekans → Lv. 22 → Arbok`],
      },
      rows: {
        remove: [(r) => [`Weedle`, `Kakuna`, `Beedrill`, `Ledyba`, `Ledian`, `Ekans`, `Arbok`].includes(r.pokemon?.name)],
      },
    },

    bugsy: {
      summary: {
        replace: [
          {
            match: `(HG) Sandshrew → Lv. 22 → Sandslash`,
            value: `Sandshrew → Lv. 22 → Sandslash`,
          },
        ],
      },
    },

    whitney: {
      summary: {
        replace: [
          {
            match: `(HG) Ekans → Lv. 22 → Arbok
          (SS) Sandshrew → Lv. 22 → Sandslash`,
            value: `Ekans → Lv. 22 → Arbok`,
          },
          {
            match: `(HG) Weedle → Lv. 7 → Kakuna → Lv. 10 → Beedrill
        (SS) Caterpie → Lv. 7 → Metapod → Lv. 10 → Butterfree`,
            value: `Weedle → Lv. 7 → Kakuna → Lv. 10 → Beedrill`,
          },
          {
            match: `(HG) Growlithe
        (SS) Vulpix`,
            value: `Growlithe`,
          },
          {
            match: `(HG) Growlithe → Fire Stone → Arcanine
        (SS) Vulpix → Fire Stone → Ninetales`,
            value: `Growlithe → Fire Stone → Arcanine`,
          },
        ],
      },
      rows: {
        remove: [(r) => [`Caterpie`, `Metapod`, `Butterfree`, `Sandshrew`, `Sandslash`, `Vulpix`, `Ninetales`].includes(r.pokemon?.name)],
      },
    },

    morty: {
      summary: {
        replace: [
          {
            match: `dive into the grassy patch directly below to find a Mankey (HG)`,
            value: `dive into the grassy patch directly below to find a Mankey`,
          },
          {
            match: `(HG) Mankey → Lv. 28 → Primeape`,
            value: `Mankey → Lv. 28 → Primeape`,
          },
        ],
        remove: [`(SS) Meowth → Lv. 28 → Persian`],
      },
      rows: {
        remove: [(r) => [`Meowth`, `Persian`].includes(r.pokemon?.name)],
      },
    },

    pryce: {
      summary: {
        replace: [
          {
            match: `(HeartGold) Caught 176, Remaining 80<br/>
        (SoulSilver) Caught 175, Remaining 81`,
            value: `Caught 176, Remaining 80`,
          },
        ],
      },
    },

    "chuck-jasmine": {
      summary: {
        replace: [
          {
            match: `(HeartGold) Caught 178, Remaining 78<br/>
        (SoulSilver) Caught 177, Remaining 79`,
            value: `Caught 178, Remaining 78`,
          },
        ],
      },
    },

    clair: {
      summary: {
        replace: [
          {
            match: `The cave at the end of the route leads to the chilly Ice Path where most of the pokemon are new to you. Swinub and Jynx are found in both versions while SoulSilver has an additional pokemon, Delibird.`,
            value: `The cave at the end of the route leads to the chilly Ice Path where most of the pokemon are new to you. Swinub and Jynx are found here.`,
          },
          {
            match: `(HG) Phanpy → Lv. 25 → Donphan
        (HG) Gligar
        (SS) Teddiursa → Lv. 30 → Ursaring
        (SS) Skarmory`,
            value: `Phanpy → Lv. 25 → Donphan
          Gligar`,
          },
        ],
        remove: [`(SS) Delibird`, `This has a lot of version exclusive pokemon in it. HeartGold players will find Phanpy and Gligar while SoulSilver players will meet Teddiursa and Skarmory.`],
      },
      rows: {
        remove: [(r) => [`Delibird`, `Teddiursa`, `Ursaring`, `Skarmory`].includes(r.pokemon?.name)],
      },
    },

    "pre-elite-4": {
      summary: {
        replace: [
          {
            match: `Go back to Ecruteak City and defeat the Kimono sisters at the dance theatre. Doing so will make your box legendary appear. For HeartGold players, simply climb the tower right here in Ecruteak. For Lugia, go to the Whirl Islands and enter the closest island to Olivine City. When you reach a junction, take the northern route. Make sure you have a pokemon that can give the legendary a status condition (preferably Sleep) and bring your bulkiest pokemon, most likely Tyranitar and Dragonite. You can simply use the Master Ball but I honestly would save this for other legendaries, which are Lv70, or for the roaming pokemon you have yet to unlock (Latias/Latios). Other pokeballs that are useful are Heavy Balls for Lugia, Dusk Balls (Lugia only unless it’s night for Ho-Oh) and Timer Balls for long, gruelling battles.`,
            value: `Go back to Ecruteak City and defeat the Kimono sisters at the dance theatre. Doing so will make your box legendary appear. Simply climb the tower right here in Ecruteak. Make sure you have a pokemon that can give the legendary a status condition (preferably Sleep) and bring your bulkiest pokemon, most likely Tyranitar and Dragonite. You can simply use the Master Ball but I honestly would save this for other legendaries, which are Lv70, or for the roaming pokemon you have yet to unlock (Latias/Latios).`,
          },
          {
            match: `(HG) Ho-Oh
        (SS) Lugia`,
            value: `Ho-Oh`,
          },
        ],
      },
      rows: {
        remove: [(r) => r.pokemon?.name === `Lugia`],
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
            value: `Sableye
          Swablu → Lv. 35 → Altaria
          (Fish) Whiscash
          Baltoy → Lv. 36 → Claydol`,
          },
          {
            match: `(HG) Omanyte → Lv. 40 → Omastar
        (SS) Kabuto → Lv. 40 → Kabutops`,
            value: `Omanyte → Lv. 40 → Omastar`,
          },
          {
            match: `For SoulSilver players, go find Ho-Oh in Ecruteak City. For HeartGold players, dive into the Whirl Islands for Lugia (see previous sections on catching box legendaries after your 8th Johto badge). These guys are at a massive Lv70. Heavy Balls work great for Lugia, even without a status effect it’s just under a 10% chance to catch it if its HP is red.`,
            value: `Dive into the Whirl Islands for Lugia and enter the closest island to Olivine City. When you reach a junction, take the northern route. Lugia is at a massive Lv70. Heavy Balls work great for Lugia, even without a status effect it’s just under a 10% chance to catch it if its HP is red.`,
          },
          {
            match: `(SS) Ho-Oh
        (HG) Lugia`,
            value: `Lugia`,
          },
          {
            match: `(HG) Gligar → Lv up at night holding Razor Fang → Gliscor`,
            value: `Gligar → Lv up at night holding Razor Fang → Gliscor`,
          },
          {
            match: `(HG) Anorith → Lv. 40 → Armaldo
        (SS) Lileep → Lv. 40 → Cradily`,
            value: `Anorith → Lv. 40 → Armaldo`,
          },
          {
            match: `(HG) Latias
        (SS) Latios`,
            value: `Latias`,
          },
          {
            match: `(HeartGold) National Dex Caught 348, Remaining 145<br/>
        (SoulSilver) National Dex Caught 347, Remaining 146`,
            value: `National Dex Caught 348, Remaining 145`,
          },
        ],
        remove: [
          `Like with Omanyte and Kabuto, these are version exclusives. HeartGold players will obtain the Claw fossil which can be resurrected at the Pewter City museum to get Anorith, SoulSilver players will find the Root fossil to resurrect Lileep.`,
        ],
      },
      rows: {
        remove: [(r) => [`Ho-Oh`, `Kabuto`, `Kabutops`, `Mawile`, `Gulpin`, `Swalot`, `Lileep`, `Cradily`, `Latios`].includes(r.pokemon?.name)],
      },
    },

    "pre-elite-4-kanto": {
      summary: {
        replace: [
          {
            match: `(HeartGold) National Dex Caught 349, Remaining 144<br/>
        (SoulSilver) National Dex Caught 348, Remaining 145`,
            value: `National Dex Caught 349, Remaining 144`,
          },
        ],
      },
    },

    red: {
      summary: {
        replace: [
          {
            match: `(HG) Mantine → Breed holding Wave Incense → Mantyke`,
            value: `Mantine → Breed holding Wave Incense → Mantyke`,
          },
          {
            match: `(HeartGold) National Dex Caught 366, Remaining 127 <br/>
        (SoulSilver) National Dex Caught 364, Remaining 129`,
            value: `National Dex Caught 366, Remaining 127`,
          },
        ],
      },
    },

    postgame: {
      summary: {
        replace: [
          {
            match: `(HG) Kyogre
        (SS) Groudon`,
            value: `Kyogre`,
          },
          {
            match: `(HeartGold) National Dex Caught 373, Remaining 120<br/>
        (SoulSilver) National Dex Caught 371, Remaining 122`,
            value: `National Dex Caught 373, Remaining 120`,
          },
        ],
      },
      rows: {
        remove: [(r) => r.pokemon?.name === `Groudon`],
      },
    },
  },
};
