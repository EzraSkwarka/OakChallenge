/* ----------------------
    - img src: 
    - Guide: 
    ----------------------- */
const guideLink = "https://docs.google.com/document/d/1cn5awGNEVZx3wuv-2EsIn3e746RfH5-Spm7mnP-_PxU/edit?usp=sharing";
const guideSource = `
      <p class="tips-source">
        <a href="${guideLink}" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>`;

const imgBasehref = "assets/images/Emerald/pokedex/Spr_3e_";
const badgeBasehref = "assets/images/Emerald/badges/Spr_RS_";

window.gameData = {
  gameId: "emerald",
  gameTitle: "Emerald",
  logo: "assets/images/logos/emerald.png",
  aboutHtml: `
   <section class="game-intro-content">
      <ul>
        <li>Playing this after the Professor Oak Run on FireRed I found this one not only longer, but harder. The main reason being that there is no Vs Seeker in this game, only the Match Call (formerly Trainer Eye) which is slightly improved compared to Ruby and Sapphire. You can only use this after 5 badges. Overall I found the rematches somewhat unreliable so I was grinding against wild pokemon for almost the entire run. You want to make sure that any new trainer battles are prioritized for when you actually have pokemon with you that you want to level up. Exploring every route to get all the trainers (e.g. along the sea routes) is recommended.</li>
        <li>This will be a very grindy challenge. If you don’t think you’ve got the patience, then now would be the time to back out. The first part of the game alone (before Roxanne) will take you about 30 hours! It gets less grindy as the game proceeds, but it will be a long road. </li>
        <li>Learning new moves shouldn’t be taken for granted, particularly with pokemon that evolve at higher levels. During a normal game you might be quick to replace a weak move with a stronger one but getting rid of non-attacking moves is a better strategy here. Again, on the first part of the challenge before Roxanne, you are battling low level pokemon and will run out of PP very quickly while that exp bar goes up very slowly. You need to maximize the amount of pokemon you can defeat, so having multiple attacking moves, regardless of how weak they are, will be beneficial. You have no need for moves like Growl or Sand Attack.</li>
        <li>This challenge is a fun alternative to a regular play through and you may really appreciate having to train pokemon up yourself that you never trained before. On the other hand you may end up despising certain pokemon due to their inability to attack when you first get them or their generally poor stats/levelling up moves. </li>
        <li><B>If you’re playing this on a real cartridge rather than an emulator, the dry battery may be a serious obstacle. The battery that controls the clock is dead, so you can either open up your cartridge and replace it (not recommended, it’s not as simple as you’d think) or ensure that you set the clock AT THE START OF THE GAME for a time that results in a low tide in Shoal Cave (3am-8:59am or 3pm-8.59pm). Failure to do so will end up in a nasty surprise when you realise you can’t catch Snorunt!</B></li>
        <li>It’s not really a rule, but my preferred method is that you train them yourself except when they can’t battle themselves (i.e. Magikarp before it learns Tackle). This is all down to your own limitations that you set. I don’t like using Rare Candy anymore as it defeats the purpose of the challenge and I don’t like using any exp sharing items. But remember that this is YOUR challenge so feel free to add or remove restrictions as you see fit.</li>
        <li>Please note that this is not a full guide to the game, I am only listing the pokemon you can catch at the earliest opportunities and any required items. I do not go into full detail on optimal exp gains or where to find the highest level for an individual pokemon etc. This playthrough and guide were done as a casual play rather than a speed run. Please consult other guides for a full walkthrough or more detailed information. </li>
      </ul>
      ${guideSource}
    </section>
    `,
  progression: {
    "roxanne": {
      headerTitle: "Pre Badge 1 - Roxanne",
      headerImg: badgeBasehref + "Roxanne.png",
      headerImgAlt: "Roxanne as she appeared in Pokemon Emerald",

      summaryShort: `This first part will cover everything you can do BEFORE you get that first badge from Roxanne. This is probably the most daunting part of the challenge…`,
      summaryHtml: `
        <h5>Littleroot Town</h5>
        <p>
          Starting off in your new home, you’ll soon be given the chance to grab your first starter pokemon. There’s no real advantage over any of them in this game, your primary location for grinding will be against Whismur in Rusturf Tunnel so there’s no type advantages to worry about. Even if you pick Torchic, your Blaziken will know Fighting type moves for the gym battle against Roxanne. For this guide, I picked Mudkip. Head north to Route 103 to meet your rival and then come back to Birch’s lab to officially start your adventure. You can now evolve:
        </p>
        <pre>
          Mudkip → Lv. 16 → Marshtomp → Lv. 36 → Swampert
          OR
          Treecko → Lv. 16 → Grovyle → Lv. 36 → Sceptile
          OR
          Torchic → Lv. 16 → Combusken → Lv. 36 → Blaziken
        </pre>
        <p>
          You’re not honestly expected to do this right now, you have all the time in the world…well, right up until you need to beat Roxanne. This will likely be one of the last pokemon you’ll evolve in this first section.
        </p>

        <h5>Route 101</h5>
        <p>
          Back to the first route of the game where there are three pokemon to catch and evolve here:
        </p>
        <pre>
          Zigzagoon → Lv. 20 → Linoone
          Poochyena → Lv. 18 → Mightyena
          Wurmple → Lv. 7 → Silcoon → Lv. 10 → Beautifly
          Wurmple → Lv. 7 → Cascoon → Lv. 10 → Dustox
        </pre>
        <p>
          Evolving Wurmple into both evolutions could be frustrating for you as there’s no way to know which it will evolve into. I got Silcoon on my first evolution, another Silcoon on the second and finally Cascoon on the third. Alternatively you can catch a Silcoon/Cascoon in Petalburg woods although it won’t have any attacking moves so you may need to bait and switch for it to level up.
        </p>

        <h5>Route 103</h5>
        <p>
          Pass through Oldale Town back to where you battled your rival where you can catch:
        </p>
        <pre>
          Wingull → Lv. 25 → Pelipper
        </pre>

        <h5>Route 102</h5>
        <p>
          Back to Oldale Town, head west this time to Route 102. Seedot is a rare 1% encounter and there’s an opportunity to trade for one in Rustboro City with a Ralts, but bear in mind that Ralts is only a 4% encounter and a traded Pokémon will disobey you from Lv11 with no badges.
        </p>
        <pre>
          Ralts → Lv. 20 → Kirlia → Lv. 30 → Gardevoir
          Lotad → Lv. 14 → Lombre
          Seedot → Lv. 14 → Nuzleaf
        </pre>
        <p>
          You can’t get a Water or Leaf Stone at this point in the game so Lombre and Nuzleaf will stay unevolved for quite a while.
        </p>

        <h5>Petalburg City and Route 104</h5>
        <p>
          Go to the gym and help Wally catch his Ralts. Afterwards, head west out of town to Route 104 and catch a Taillow and a Marill.
        </p>
        <pre>
          Taillow → Lv. 22 → Swellow
          Marill → Lv. 18 → Azumarill
        </pre>
        <p>
          Try to catch a female Marill for breeding a baby pokemon later on once we have the Sea Incense.
        </p>

        <h5>Petalburg Woods</h5>
        <p>
          This can be a good location to train up a bit although Shroomish’s Effect Spore can be irritating so be cautious of direct contact moves. A few new pokemon to catch:
        </p>
        <pre>
          Shroomish → Lv. 23 → Breloom
          Slakoth → Lv. 18 → Vigoroth → Lv. 36 → Slaking
        </pre>

        <h5>Route 116</h5>
        <p>
          We’re not ready for the gym yet, so head out of the north east exit to Route 116 and catch a few new additions:
        </p>
        <pre>
          Skitty
          Abra → Lv. 16 → Kadabra
          Whismur → Lv. 20 → Loudred → Lv. 40 → Exploud
          Nincada → Lv. 20 → Ninjask AND Shedinja (with a spare slot in your team)
        </pre>
        <p>
          Kadabra is the first of your trade evolution pokemon who obviously can’t be obtained in a solo play through. You have a lot of pokemon to evolve but make sure that you keep that spare slot in your team when you are ready to evolve Nincada otherwise Shedinja will simply disappear! You have now caught everything you can, it’s just a matter of evolving them which is easier said than done…
        </p>

        <h5>Levelling up tips</h5>
        <p>
          The best spot to train for simplicity is Rusturf Tunnel against Whismur. This will be the longest part of your challenge…You have a lot of pokemon to evolve and some evolve as high as level 40…You can either continuously battle with the same pokemon until it runs out of PP or maybe level each pokemon in your team once and switch to make it less tedious. As mentioned earlier, definitely prioritize attacking moves over non attack moves. For some extra experience, go defeat the trainers in the gym, just make sure you don’t talk to Roxanne until you’ve maxed out the dex for this part.
        </p>
        <p>
          The pokemon you may have trouble with are:
          Kirlia – Just doesn’t have the PP to level up efficiently and is very slow at levelling up. Trace will copy Soundproof which makes you immune to one of Whismur’s two attacks
          Nincada – Also slow to level up and has weak moves
          Exploud – Why level 40????
          Slakoth – Truant is a real pain, but once you’ve got Vigoroth it’s smooth sailing.
        </p>

        <p>
          <strong>End of part 1:</strong><br/>
          Caught 39, Remaining 165
        </p>

        ${guideSource}
  `,

      rows: [
        /* --------------------------- Starter Choice ------------------------- */
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "mudkip",
          pokemon: { img: imgBasehref + "258.png", name: "Mudkip" },
          method: "Choose Mudkip as your starter"
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "treecko",
          pokemon: { img: imgBasehref + "252.png", name: "Treecko" },
          method: "Choose Treecko as your starter"
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "torchic",
          pokemon: { img: imgBasehref + "255.png", name: "Torchic" },
          method: "Choose Torchic as your starter"
        },

        {
          pokemon: { img: imgBasehref + "258.png", name: "Mudkip" },
          method: "Choose as Starter",
          requires: { starter: "mudkip" }
        },
        {
          pokemon: { img: imgBasehref + "259.png", name: "Marshtomp" },
          method: "Evolve from Mudkip at level 16",
          requires: { starter: "mudkip" }
        },
        {
          pokemon: { img: imgBasehref + "260.png", name: "Swampert" },
          method: "Evolve from Marshtomp at level 36",
          requires: { starter: "mudkip" }
        },

        {
          pokemon: { img: imgBasehref + "252.png", name: "Treecko" },
          method: "Choose as Starter",
          requires: { starter: "treecko" }
        },
        {
          pokemon: { img: imgBasehref + "253.png", name: "Grovyle" },
          method: "Evolve from Treecko at level 16",
          requires: { starter: "treecko" }
        },
        {
          pokemon: { img: imgBasehref + "254.png", name: "Sceptile" },
          method: "Evolve from Grovyle at level 36",
          requires: { starter: "treecko" }
        },

        {
          pokemon: { img: imgBasehref + "255.png", name: "Torchic" },
          method: "Choose as Starter",
          requires: { starter: "torchic" }
        },
        {
          pokemon: { img: imgBasehref + "256.png", name: "Combusken" },
          method: "Evolve from Torchic at level 16",
          requires: { starter: "torchic" }
        },
        {
          pokemon: { img: imgBasehref + "257.png", name: "Blaziken" },
          method: "Evolve from Combusken at level 36",
          requires: { starter: "torchic" }
        },

        /* --------------------------- Routes -------------------------------- */
        { pokemon: { img: imgBasehref + "263.png", name: "Zigzagoon" }, method: "Route 101" },
        { pokemon: { img: imgBasehref + "264.png", name: "Linoone" }, method: "Evolve from Zigzagoon at level 20" },
        { pokemon: { img: imgBasehref + "261.png", name: "Poochyena" }, method: "Route 101" },
        { pokemon: { img: imgBasehref + "262.png", name: "Mightyena" }, method: "Evolve from Poochyena at level 18" },

        { pokemon: { img: imgBasehref + "265.png", name: "Wurmple" }, method: "Route 101" },
        {
          pokemon: { img: imgBasehref + "266.png", name: "Silcoon" },
          method: "Evolve from Wurmple at level 7 (branch)"
        },
        { pokemon: { img: imgBasehref + "267.png", name: "Beautifly" }, method: "Evolve from Silcoon at level 10" },
        {
          pokemon: { img: imgBasehref + "268.png", name: "Cascoon" },
          method: "Evolve from Wurmple at level 7 (branch)"
        },
        { pokemon: { img: imgBasehref + "269.png", name: "Dustox" }, method: "Evolve from Cascoon at level 10" },

        { pokemon: { img: imgBasehref + "278.png", name: "Wingull" }, method: "Route 103" },
        { pokemon: { img: imgBasehref + "279.png", name: "Pelipper" }, method: "Evolve from Wingull at level 25" },

        { pokemon: { img: imgBasehref + "280.png", name: "Ralts" }, method: "Route 102" },
        { pokemon: { img: imgBasehref + "281.png", name: "Kirlia" }, method: "Evolve from Ralts at level 20" },
        { pokemon: { img: imgBasehref + "282.png", name: "Gardevoir" }, method: "Evolve from Kirlia at level 30" },

        { pokemon: { img: imgBasehref + "270.png", name: "Lotad" }, method: "Route 102" },
        { pokemon: { img: imgBasehref + "271.png", name: "Lombre" }, method: "Evolve from Lotad at level 14" },
        { pokemon: { img: imgBasehref + "273.png", name: "Seedot" }, method: "Route 102 or Rustboro trade" },
        { pokemon: { img: imgBasehref + "274.png", name: "Nuzleaf" }, method: "Evolve from Seedot at level 14" },

        { pokemon: { img: imgBasehref + "276.png", name: "Taillow" }, method: "Route 104" },
        { pokemon: { img: imgBasehref + "277.png", name: "Swellow" }, method: "Evolve from Taillow at level 22" },
        { pokemon: { img: imgBasehref + "183.png", name: "Marill" }, method: "Route 104" },
        { pokemon: { img: imgBasehref + "184.png", name: "Azumarill" }, method: "Evolve from Marill at level 18" },

        { pokemon: { img: imgBasehref + "285.png", name: "Shroomish" }, method: "Petalburg Woods" },
        { pokemon: { img: imgBasehref + "286.png", name: "Breloom" }, method: "Evolve from Shroomish at level 23" },
        { pokemon: { img: imgBasehref + "287.png", name: "Slakoth" }, method: "Petalburg Woods" },
        { pokemon: { img: imgBasehref + "288.png", name: "Vigoroth" }, method: "Evolve from Slakoth at level 18" },
        { pokemon: { img: imgBasehref + "289.png", name: "Slaking" }, method: "Evolve from Vigoroth at level 36" },

        { pokemon: { img: imgBasehref + "300.png", name: "Skitty" }, method: "Route 116" },
        { pokemon: { img: imgBasehref + "063.png", name: "Abra" }, method: "Route 116" },
        { pokemon: { img: imgBasehref + "064.png", name: "Kadabra" }, method: "Evolve from Abra at level 16" },
        { pokemon: { img: imgBasehref + "293.png", name: "Whismur" }, method: "Route 116 / Rusturf Tunnel" },
        { pokemon: { img: imgBasehref + "294.png", name: "Loudred" }, method: "Evolve from Whismur at level 20" },
        { pokemon: { img: imgBasehref + "295.png", name: "Exploud" }, method: "Evolve from Loudred at level 40" },

        { pokemon: { img: imgBasehref + "290.png", name: "Nincada" }, method: "Route 116" },
        { pokemon: { img: imgBasehref + "291.png", name: "Ninjask" }, method: "Evolve from Nincada at level 20" },
        {
          pokemon: { img: imgBasehref + "292.png", name: "Shedinja" },
          method: "Evolve from Nincada at level 20 with spare party slot"
        }
      ]
    },
    "wattson": {
      headerTitle: "Pre Badge 2 - Mauville Gym",
      headerImg: badgeBasehref + "Wattson.png",
      headerImgAlt: "Wattson as he appeared in Pokemon Emerald",

      summaryShort: `Once you’ve got that first shiny badge and helped Mr. Briney at Rusturf Tunnel, you can return to his shack on Route 104 and take his boat to Dewford Town.`,
      summaryHtml: `
        <h5>Old Fishing Tour</h5>
        <p>
          Speak to the fisherman here to get the Old Rod. Fish on the waters here to catch a Magikarp and Tentacool, then head back to Route 102 or Petalburg City to fish for Goldeen.
        </p>
        <pre>
          Magikarp → Lv. 20 → Gyarados
          Tentacool → Lv. 30 → Tentacruel
          Goldeen → Lv. 33 → Seaking
        </pre>

        <h5>Granite Cave</h5>
        <p>
          Zubat, Geodude and Makuhita can be found in the first room of the cave. Head down the ladder to find Sableye and Aron. Deliver the letter to Steven Stone by passing through the cave.
        </p>
        <pre>
          Zubat → Lv. 22 → Golbat → Happiness → Crobat
          Makuhita → Lv. 24 → Hariyama
          Geodude → Lv. 25 → Graveler
          Sableye
          Aron → Lv. 32 → Lairon → Lv. 42 → Aggron
        </pre>
        <p>
          Once Zubat has evolved you may want to keep it in your party and not battle for a while to raise its happiness level and then try evolving it later on in this section. Brawly can actually be skipped until you need to defeat Norman so as long as you’ve delivered the letter to Steven, you can hop back in the boat and go to Slateport City.
        </p>

        <h5>Route 110</h5>
        <p>
          After leaving the city, go north to Route 110. The grass here contains a few new pokemon:
        </p>
        <pre>
          Plusle
          Minun
          Electrike → Lv. 26 → Manectric
          Oddish → Lv. 21 → Gloom
          Gulpin → Lv. 26 → Swalot
        </pre>
        <p>
          Catching a second Oddish and evolving it into Gloom is optional as you can catch a Gloom in the wild near to where you will get the Stone for its second evolution.
        </p>

        <h5>Route 117</h5>
        <p>
          Head up to Mauville City and leave through the west exit to Route 117, home of the pokemon daycare. This is the last batch of pokemon before needing another badge.
        </p>
        <pre>
          Volbeat
          Illumise
        </pre>
        <p>
          Volbeat is extremely rare so it might be best to train here and catch it when you see it.
        </p>

        <h5>Levelling Tips</h5>
        <p>
          Training on Route 117 is probably the best place to train until you’ve got Surf. Volbeat/Illumise give excellent exp! Volbeat will annoy you with its Double Team/Confuse Ray/Moonlight combo but once you’re able to OHKO it, it becomes less of a problem.
        </p>

        <p>
          <strong>End of part 2:</strong><br/>
          Caught 66, Remaining 136
        </p>

        ${guideSource}
  `,

      rows: [
        /* --------------------------- Old Rod Fishing ----------------------- */
        { pokemon: { img: imgBasehref + "129.png", name: "Magikarp" }, method: "Old Rod — Dewford Town waters" },
        { pokemon: { img: imgBasehref + "130.png", name: "Gyarados" }, method: "Evolve from Magikarp at level 20" },
        { pokemon: { img: imgBasehref + "072.png", name: "Tentacool" }, method: "Old Rod — Dewford Town waters" },
        { pokemon: { img: imgBasehref + "073.png", name: "Tentacruel" }, method: "Evolve from Tentacool at level 30" },
        { pokemon: { img: imgBasehref + "118.png", name: "Goldeen" }, method: "Old Rod — Route 102 or Petalburg City" },
        { pokemon: { img: imgBasehref + "119.png", name: "Seaking" }, method: "Evolve from Goldeen at level 33" },

        /* --------------------------- Granite Cave -------------------------- */
        { pokemon: { img: imgBasehref + "041.png", name: "Zubat" }, method: "Granite Cave (entrance)" },
        { pokemon: { img: imgBasehref + "042.png", name: "Golbat" }, method: "Evolve from Zubat at level 22" },
        { pokemon: { img: imgBasehref + "169.png", name: "Crobat" }, method: "Evolve from Golbat with high Friendship" },
        { pokemon: { img: imgBasehref + "296.png", name: "Makuhita" }, method: "Granite Cave (entrance)" },
        { pokemon: { img: imgBasehref + "297.png", name: "Hariyama" }, method: "Evolve from Makuhita at level 24" },
        { pokemon: { img: imgBasehref + "074.png", name: "Geodude" }, method: "Granite Cave (entrance)" },
        { pokemon: { img: imgBasehref + "075.png", name: "Graveler" }, method: "Evolve from Geodude at level 25" },
        { pokemon: { img: imgBasehref + "302.png", name: "Sableye" }, method: "Granite Cave lower floors (Sapphire)" },
        { pokemon: { img: imgBasehref + "304.png", name: "Aron" }, method: "Granite Cave lower floors" },
        { pokemon: { img: imgBasehref + "305.png", name: "Lairon" }, method: "Evolve from Aron at level 32" },
        { pokemon: { img: imgBasehref + "306.png", name: "Aggron" }, method: "Evolve from Lairon at level 42" },

        /* --------------------------- Route 110 ----------------------------- */
        { pokemon: { img: imgBasehref + "311.png", name: "Plusle" }, method: "Route 110" },
        { pokemon: { img: imgBasehref + "312.png", name: "Minun" }, method: "Route 110" },
        { pokemon: { img: imgBasehref + "309.png", name: "Electrike" }, method: "Route 110" },
        { pokemon: { img: imgBasehref + "310.png", name: "Manectric" }, method: "Evolve from Electrike at level 26" },
        { pokemon: { img: imgBasehref + "043.png", name: "Oddish" }, method: "Route 110" },
        { pokemon: { img: imgBasehref + "044.png", name: "Gloom" }, method: "Evolve from Oddish at level 21" },
        { pokemon: { img: imgBasehref + "316.png", name: "Gulpin" }, method: "Route 110" },
        { pokemon: { img: imgBasehref + "317.png", name: "Swalot" }, method: "Evolve from Gulpin at level 26" },

        /* --------------------------- Route 117 ----------------------------- */
        { pokemon: { img: imgBasehref + "313.png", name: "Volbeat" }, method: "Route 117 (very rare)" },
        { pokemon: { img: imgBasehref + "314.png", name: "Illumise" }, method: "Route 117" }
      ]
    },
    "flannery": {
      headerTitle: "Pre Badge 3 - Lavaridge Gym",
      headerImg: badgeBasehref + "Flannery.png",
      headerImgAlt: "Flannery as she appeared in Pokemon Emerald",

      summaryShort: `Defeat Wattson and get that badge and the ability to use Rock Smash.`,
      summaryHtml: `
        <p>
          Before heading north, go back to Mr. Briney south of Slateport City and return to Dewford. In the lower floors of Granite Cave you’ll find some rocks you can smash. Within these you might find Roxanne’s signature pokemon, Nosepass!
        </p>
        <pre>
          Nosepass
        </pre>

        <h5>Route 112</h5>
        <p>
          Go back to Mauville and go north to Route 111 and then west to Route 112 and catch a Numel outside Fiery Path:
        </p>
        <pre>
          Numel → Lv. 33 → Camerupt
        </pre>

        <h5>Fiery Path</h5>
        <p>
          Inside the cave, there are a bunch of fire and poison types waiting to be caught:
        </p>
        <pre>
          Grimer → Lv. 38 → Muk
          Koffing → Lv. 35 → Weezing
          Slugma → Lv. 38 → Magcargo
          Machop → Lv. 28 → Machoke
          Torkoal
        </pre>

        <h5>Route 113</h5>
        <p>
          Exit through Fiery Path and go north and then west to the ash-covered Route 113.
        </p>
        <pre>
          Spinda
          Skarmory
        </pre>

        <h5>Route 114</h5>
        <p>
          Go past Fallarbor Town to Route 114 to catch:
        </p>
        <pre>
          Swablu → Lv. 35 → Altaria
          Seviper
        </pre>

        <h5>Meteor Falls</h5>
        <p>
          Only one pokemon to catch here at the moment:
        </p>
        <pre>
          Solrock
        </pre>
        <p>
          You can also pick up a Moon Stone here which we can use to evolve Skitty. You can also evolve your Gloom if you can obtain a Sun Stone from a Solrock. If you have a stealing move such as Thief or Covet, this is easier than catching them.
        </p>
        <pre>
          Skitty → Moon Stone → Delcatty
          Gloom → Sun Stone → Bellossom
        </pre>

        <h5>Jagged Pass</h5>
        <p>
          After the encounter with Team Aqua/Magma at Meteor Falls, head back to the base of the volcano and take the cable car. Once the evil teams have gone, head down through Jagged Pass to find one available pokemon.
        </p>
        <pre>
          Spoink → Lv. 32 → Grumpig
        </pre>

        <h5>Lavaridge Town</h5>
        <p>
          Talk to the old lady by the hot springs to receive an egg which contains Wynaut!
        </p>
        <pre>
          Wynaut → Lv. 15 → Wobbuffet
        </pre>

        <p>Nothing left to do but evolve some pokemon.</p>

        <h5>Levelling Tips</h5>
        <p>
          The majority of pokemon in this section evolve in their late thirties. Route 114 is a good place to stick to thanks to Seviper, Lombre and Nuzleaf giving some good exp.
        </p>

        <p>
          <strong>End of part 3:</strong><br/>
          Caught 90, Remaining 112
        </p>

        ${guideSource}
  `,

      rows: [
        /* --------------------------- Granite Cave (Rock Smash) -------------- */
        { pokemon: { img: imgBasehref + "299.png", name: "Nosepass" }, method: "Granite Cave lower floors (Rock Smash rocks)" },

        /* --------------------------- Route 112 ------------------------------ */
        { pokemon: { img: imgBasehref + "322.png", name: "Numel" }, method: "Route 112 (outside Fiery Path)" },
        { pokemon: { img: imgBasehref + "323.png", name: "Camerupt" }, method: "Evolve from Numel at level 33" },

        /* --------------------------- Fiery Path ----------------------------- */
        { pokemon: { img: imgBasehref + "088.png", name: "Grimer" }, method: "Fiery Path" },
        { pokemon: { img: imgBasehref + "089.png", name: "Muk" }, method: "Evolve from Grimer at level 38" },
        { pokemon: { img: imgBasehref + "109.png", name: "Koffing" }, method: "Fiery Path" },
        { pokemon: { img: imgBasehref + "110.png", name: "Weezing" }, method: "Evolve from Koffing at level 35" },
        { pokemon: { img: imgBasehref + "218.png", name: "Slugma" }, method: "Fiery Path" },
        { pokemon: { img: imgBasehref + "219.png", name: "Magcargo" }, method: "Evolve from Slugma at level 38" },
        { pokemon: { img: imgBasehref + "066.png", name: "Machop" }, method: "Fiery Path" },
        { pokemon: { img: imgBasehref + "067.png", name: "Machoke" }, method: "Evolve from Machop at level 28" },
        { pokemon: { img: imgBasehref + "324.png", name: "Torkoal" }, method: "Fiery Path" },

        /* --------------------------- Route 113 ------------------------------ */
        { pokemon: { img: imgBasehref + "327.png", name: "Spinda" }, method: "Route 113" },
        { pokemon: { img: imgBasehref + "227.png", name: "Skarmory" }, method: "Route 113 (rare)" },

        /* --------------------------- Route 114 ------------------------------ */
        { pokemon: { img: imgBasehref + "333.png", name: "Swablu" }, method: "Route 114" },
        { pokemon: { img: imgBasehref + "334.png", name: "Altaria" }, method: "Evolve from Swablu at level 35" },
        { pokemon: { img: imgBasehref + "336.png", name: "Seviper" }, method: "Route 114" },

        /* --------------------------- Meteor Falls --------------------------- */
        { pokemon: { img: imgBasehref + "338.png", name: "Solrock" }, method: "Meteor Falls" },
        { pokemon: { img: imgBasehref + "301.png", name: "Delcatty" }, method: "Use a Moon Stone on Skitty (Meteor Falls)" },
        { pokemon: { img: imgBasehref + "182.png", name: "Bellossom" }, method: "Use a Sun Stone on Gloom (stolen from Solrock)" },

        /* --------------------------- Jagged Pass ---------------------------- */
        { pokemon: { img: imgBasehref + "325.png", name: "Spoink" }, method: "Jagged Pass" },
        { pokemon: { img: imgBasehref + "326.png", name: "Grumpig" }, method: "Evolve from Spoink at level 32" },

        /* --------------------------- Lavaridge Town ------------------------- */
        { pokemon: { img: imgBasehref + "360.png", name: "Wynaut" }, method: "Egg from old lady at Lavaridge hot springs" },
        { pokemon: { img: imgBasehref + "202.png", name: "Wobbuffet" }, method: "Evolve from Wynaut at level 15" }
      ]
    },
    "brawly-norman": {
      headerTitle: "Pre Badge 4 - Dewford Gym and #5 - Petalburg Gym",
      headerImg: badgeBasehref + "Norman.png",
      headerImgAlt: "Norman as he appeared in Pokemon Emerald",

      summaryShort: `Defeat Flannery. The next gym in linear order would be Norman, however he won’t battle you without 4 badges which means we’ll have to defeat Brawly, but there are some things we can do first!`,
      summaryHtml: `
        <h5>Route 111 Desert</h5>
        <p>
          Now you can use Strength, go back to Fiery Path and collect the Fire Stone for later. With the Go-Goggles now in hand, you can finally enter the desert which yields 9 more pokemon in total:
        </p>
        <pre>
          Cacnea → Lv. 32 → Cacturne
          Sandshrew → Lv. 22 → Sandslash
          Baltoy → Lv. 36 → Claydol
          Trapinch → Lv. 35 → Vibrava → Lv. 45 → Flygon
        </pre>
        <p>
          You can also collect either the Root or Claw Fossil from the desert and take it back to Rustboro City’s Devon Corporation to resurrect it. I personally find Anorith easier to train as Lileep is a more defensive pokemon. In Emerald you get the fossils from the top of mirage tower, which can disappear and reappear when you enter and leave the Route. If it’s not there, head onto Route 113 and then come back to the desert to see if it’s appeared. You’ll need a Pokémon with Rock Smash and the Mach Bike to reach the top.
        </p>
        <pre>
          Anorith → Lv. 40 → Armaldo
          OR
          Lileep → Lv. 40 → Cradily
        </pre>
        <p>
          NOW you can go and defeat Brawly and then Norman for badges 4 and 5.
        </p>

        <h5>Levelling Tips</h5>
        <p>
          Unfortunately there’s still no reliable training spots other than ones from the last section. Although the desert Pokémon are higher levelled, they don’t give as much exp as on Route 114…Don’t worry, the next section helps avoid this :)
        </p>

        <p>
          Congrats, your pokedex is exactly 50% complete!
        </p>

        <p>
          <strong>End of part 4:</strong><br/>
          Caught 101, Remaining 101
        </p>

        ${guideSource}
  `,

      rows: [
        /* ===================== Fossil Choice (must appear first) ===================== */
        {
          type: "choice",
          choiceKey: "desert-fossil",
          choiceValue: "anorith",
          pokemon: { img: imgBasehref + "347.png", name: "Anorith" },
          method: "Choose the Claw Fossil in Route 111 Desert (revive at Devon Corp, Rustboro)"
        },
        {
          type: "choice",
          choiceKey: "desert-fossil",
          choiceValue: "lileep",
          pokemon: { img: imgBasehref + "345.png", name: "Lileep" },
          method: "Choose the Root Fossil in Route 111 Desert (revive at Devon Corp, Rustboro)"
        },

        /* --------------------------- Route 111 Desert mons --------------------------- */
        { pokemon: { img: imgBasehref + "331.png", name: "Cacnea" }, method: "Route 111 Desert" },
        { pokemon: { img: imgBasehref + "332.png", name: "Cacturne" }, method: "Evolve from Cacnea at level 32" },

        { pokemon: { img: imgBasehref + "027.png", name: "Sandshrew" }, method: "Route 111 Desert" },
        { pokemon: { img: imgBasehref + "028.png", name: "Sandslash" }, method: "Evolve from Sandshrew at level 22" },

        { pokemon: { img: imgBasehref + "343.png", name: "Baltoy" }, method: "Route 111 Desert" },
        { pokemon: { img: imgBasehref + "344.png", name: "Claydol" }, method: "Evolve from Baltoy at level 36" },

        { pokemon: { img: imgBasehref + "328.png", name: "Trapinch" }, method: "Route 111 Desert" },
        { pokemon: { img: imgBasehref + "329.png", name: "Vibrava" }, method: "Evolve from Trapinch at level 35" },
        { pokemon: { img: imgBasehref + "330.png", name: "Flygon" }, method: "Evolve from Vibrava at level 45" },

        /* --------------------------- Fossil gated evolutions ------------------------- */
        { pokemon: { img: imgBasehref + "347.png", name: "Anorith" }, method: "Revive Claw Fossil at Devon Corp (Rustboro)", requires: { "desert-fossil": "anorith" } },
        { pokemon: { img: imgBasehref + "348.png", name: "Armaldo" }, method: "Evolve from Anorith at level 40", requires: { "desert-fossil": "anorith" } },

        { pokemon: { img: imgBasehref + "345.png", name: "Lileep" }, method: "Revive Root Fossil at Devon Corp (Rustboro)", requires: { "desert-fossil": "lileep" } },
        { pokemon: { img: imgBasehref + "346.png", name: "Cradily" }, method: "Evolve from Lileep at level 40", requires: { "desert-fossil": "lileep" } }
      ]
    },
    "mossdeep": {
      headerTitle: "Pre Badge 6 - Mossdeep Gym",
      headerImg: badgeBasehref + "Tate_and_Liza.png",
      headerImgAlt: "Tate and Liza as they appeared in Pokemon Emerald",

      summaryShort: `As with most games, having access to Surf opens up most of the remainder of the region which means there’s lots to do before the next badge. Trainer rematches are also available in this section which leads to some higher levelled rematches, but getting them to want to battle you is annoying…`,
      summaryHtml: `
        <h5>Revisiting old areas</h5>
        <p>
          Go to Route 115 (north of Rustboro) and Surf up to a hidden section of the route. In the grass you can catch Jigglypuff. Unfortunately, as there’s no Lunatone in Emerald, the only Moon Stone in the game has already been used on Skitty!
        </p>
        <pre>
          Jigglypuff
        </pre>
        <p>
          Breed a female Jigglypuff with a male one or any other pokemon in the same egg group to hatch an Igglybuff:
        </p>
        <pre>
          Jigglypuff → Breed → Igglybuff
        </pre>
        <p>
          Go to Mauville City and Wattson will greet you outside the Pokemon Centre and give you the key to New Mauville which can be found in a cave along the water of Route 110. Inside you’ll find:
        </p>
        <pre>
          Magnemite → Lv. 30 → Magneton
          Voltorb → Lv. 30 → Electrode
        </pre>
        <p>
          You can find their evolved forms here too but they’re very rare (1%). Alternatively you can find Electrode at the Team Aqua hideout later on in this section. Pick up the Thunder Stone here for later.
        </p>

        <h5>Good Fishing Tour</h5>
        <p>
          Surf east from Mauville City and on the opposite bank there is a fisherman who will give you the Good Rod. Fishing in the following old areas will catch you:
        </p>
        <pre>
          (Route 103) Wailmer → Lv. 40 → Wailord
          (Route 102) Corphish → Lv. 30 → Crawdaunt
          (Route 111) Barboach → Lv. 30 → Whiscash
          (Route 118) Carvanha → Lv. 30 → Sharpedo
        </pre>
        <p>
          If you don’t want to spend time training these guys, all of their evolved forms except Crawdaunt can be caught later on in the section with a Super Rod or very rare surfing encounters.
        </p>

        <h5>Route 118</h5>
        <p>
          Surf back over to where you got the Good Rod and you can catch a Kecleon in the grass, though you will have some forced encounters later on (before the next badge).
        </p>
        <pre>
          Kecleon
        </pre>

        <h5>Route 119</h5>
        <p>
          North from Route 118 you can catch a Tropius in the tall grass. There is also a Leaf Stone on this route which we can use to evolve another Gloom (if you have another one. If not, your opportunity is coming up) or your Shiftry.
        </p>
        <pre>
          Tropius
          Gloom/Nuzleaf → Leaf Stone → Vileplume/Shiftry
        </pre>
        <p>
          Further up the route you’ll encounter Team Aqua at the Weather Institute. After defeating them, the head scientist will give you a Castform for your troubles.
        </p>
        <pre>
          Castform
        </pre>
        <p>
          Route 119 is also the famous fishing spot of Feebas…Out of every water tile on this route, only 6 will have Feebas in them. This gets changed whenever the trendy phrase is changed in Dewford Town. The best and biggest place to fish is just over the bridge from the Weather Institute. Strategically you’ll want to go in a zigzag pattern along the route so you fish in every spot. I started from the base of the waterfall. You can catch it with any rod so I prefer the Old Rod as it’s easier to reel in. If Feebas is there it’ll appear 50% of the time so if you fish 2 or 3 times per tile, you’ll have a good chance of encountering it. Luckily I caught it within about 50 tiles but this could take longer and really slow the challenge down. If you’re unlucky enough to sweep all the water tiles available right now and don’t find Feebas, you’ll simply have to try again or consider changing the trendy phrase in Dewford although it’s a long journey there and back. With abilities getting an upgrade in Emerald, Suction Cups (Cradily) and Sticky Hold (Grimer/Gulpin line) improve your fishing chances if it’s in the lead slot of your party. This will drastically speed up the fishing process. At the very end of this river is the above mentioned Leaf Stone.
        </p>
        <p>
          Then you have the trouble of getting it to evolve. We’re going to assume that you can’t evolve it at this point as the best pokeblocks to get it to evolve are made in Lilycove City which we will be visiting before the next badge. You’ll want a specific nature for Feebas, specifically a Rash, Quiet, Modest or Mild one as the pokeblocks to raise its beauty are more effective. Once you find the spot you could theoretically keep catching them until you get one with the right nature or just catch a female and breed one later.
        </p>
        <pre>
          Feebas
        </pre>

        <h5>Route 120</h5>
        <p>
          Once you reach Fortree City you can pass right through as there’s another skippable gym leader. In fact you don’t even need to defeat Winona until you need your 8th badge! The only drawback to this is the lack of Fly which, given Hoenn’s structure, can be a pain. I would recommend keeping a pokemon with Teleport in your party and strategically stopping off at pokemon centers that you want to fast travel back to. On the other side of Fortree City on Route 120, you can find the Disaster pokemon, Absol. You will also be forced to battle a Kecleon, so if you didn’t catch it earlier, now’s your chance.
        </p>
        <pre>
          Absol
        </pre>

        <h5>Route 121</h5>
        <p>
          You’re at the junction between the Safari Zone, Lilycove City and Mt Pyre. Stay on route 121 to catch a Shuppet and then head to Mt Pyre or just head straight to Mt Pyre and catch it there. This is a good route to catch another Gloom (or Oddish and evolve it) as you will need to evolve it into Vileplume with the Leaf Stone from Route 119.
        </p>
        <pre>
          Shuppet → Lv. 37 → Banette
        </pre>

        <h5>Mt. Pyre</h5>
        <p>
          Head up the tower (indoors) and you’ll find Duskull on the upper floors.
        </p>
        <pre>
          Duskull → Lv. 37 → Dusclops
        </pre>
        <p>
          Fall through the holes in the floor and you can pick up the Sea Incense on the way down. This means you can now head back to the daycare and breed for an Azurill but you need to go back to a previous area shortly so we’ll hold off for now. Go to the outside area of Mt Pyre (left of the entrance) to find patches of grass which house a few new pokemon. Vulpix is found in the immediate grass as you reach the outdoor area while Chimecho is found at the summit where Team Aqua are.
        </p>
        <pre>
          Vulpix → Fire Stone → Ninetales
          Chimecho
        </pre>
        <p>
          Chimecho is very rare (2%) so you may be up here for a while…Use the Fire Stone you picked up in Fiery Path to evolve Vulpix. Proceed to the very top of the tower and confront Team Aqua to progress the story. You’ll be given the Magma Emblem.
        </p>

        <h5>Safari Zone</h5>
        <p>
          Time for a big catching spree in the Safari Zone! You’ll need to swap bikes to access all the areas. Specifically the North East area which needs the Acro Bike and the North West which needs the Mach Bike. If you STILL don’t have another Gloom to your extra evolution, you can catch one here too. In the South East are where you enter, catch the following pokemon:
        </p>
        <pre>
          Doduo → Lv. 31 → Dodrio
          Girafarig
          Natu → Lv. 25 → Xatu
          Pikachu → Thunder Stone → Raichu
        </pre>
        <p>
          Use the Thunder Stone from New Mauville to evolve Pikachu. Ideally you’ll want a female Pikachu so you can breed it. No other new pokemon are in the grass in the South West area, though you can Surf here for a Psyduck.
        </p>
        <pre>
          Psyduck → Lv. 33 → Golduck
        </pre>
        <p>
          In the North West area:
        </p>
        <pre>
          Rhyhorn → Lv. 42 → Rhydon
          Pinsir
        </pre>
        <p>
          And finally in the North East area:
        </p>
        <pre>
          Heracross
          Phanpy → Lv. 25 → Donphan
        </pre>

        <h5>A couple of places to revisit</h5>
        <p>
          Maybe grab a Teleport pokemon for this section so you can return to Fortree/Lilycove quicker and make sure you don’t enter any other Pokémon centres! Visit rest spots or deposit and withdraw Pokémon from the pc at the daycare for healing. Go to Jagged Pass (take the cable car up the volcano and jump the ledges) to find the entrance to the Magma Hideout where you can turf out Maxie.
        </p>
        <p>
          Go to Slateport City and investigate the crowd outside the submarine dock. Talk to Captain Stern and Team Aqua will steal the sub. This is necessary to both advance the plot and to let you leave Lilycove City.
        </p>
        <p>
          Now is also the chance to head back to the daycare for Azurill and Pichu. Slap the Sea Incense on a female Marill/Azumarill and breed it with a compatible partner. If you haven’t got a female, Marill can be found on the same route as the daycare. Repeat the process with Pikachu/Raichu (no item required). Now may also be a good chance to breed that Feebas for the right nature to evolve. If you have an Everstone you can give it to a male compatible pokemon with the required nature (Rash, Quiet, Modest or Mild) to improve your chances of passing that nature down.. Once you’re done, head to Lilycove City.
        </p>
        <pre>
          Marill/Azumarill → Breed holding Sea Incense → Azurill
          Pikachu/Raichu → Breed → Pichu
        </pre>

        <h5>Lilycove City</h5>
        <p>
          On the east side of the city you can Surf into the Team Aqua hideout and turf them out. Make sure you pick up the Master Ball while you’re here. And if you haven’t caught an Electrode yet, you can get one here posing as a Pokéball. Defeating Team Aqua will unlock the sea routes for exploration. While you’re in Lilycove, visit the contest hall and use the berry blender with three people around it to make blue/indigo pokeblocks for Feebas using blue berries or any good berries that have a dry flavour such as Kelpsy or Chesto berries. Save your game before doing this, if you feed Feebas too many pokeblocks to fill it up and it hasn’t reached the required Beauty level, you’ll have to do it again. Once Feebas has a high enough beauty level, let it level up and it will evolve into Milotic. Having the right nature really helps here, especially if you aren’t very skilled at the berry blender mini game.
        </p>
        <pre>
          Feebas → Level up with high beauty stat (170+) → Milotic
        </pre>

        <h5>Mossdeep City</h5>
        <p>
          Surf east from Lilycove all the way to Mossdeep City. A couple of things to grab, get HM08 from Steven’s house and the Super Rod from the fisherman.
        </p>

        <h5>Shoal Cave</h5>
        <p>
          Spheal can be found throughout the cave while Snorunt specifically is found on the lowest floor (ice room).
        </p>
        <pre>
          Spheal → Lv. 32 → Sealeo → Lv. 44 → Walrein
          Snorunt → Lv. 42 → Glalie
        </pre>

        <h5>Super Fishing Tour</h5>
        <p>
          Return to Lilycove City and fish from the beach to catch a Staryu. We’ll have the Water Stone soon.
        </p>
        <pre>
          Staryu
        </pre>
        <p>
          Head down to the far south eastern part of the sea routes to the base of the waterfall at Evergrande City. With the Super Rod you can catch a couple of single stage pokemon:
        </p>
        <pre>
          Corsola
          Luvdisc
        </pre>
        <p>
          Finally, pass through Pacifidlog Town to Route 132 and fish with the Super Rod for Horsea.
        </p>
        <pre>
          Horsea → Lv. 32 → Seadra
        </pre>

        <p>
          This is the end of this long part! Everything else you can do requires either Dive or Waterfall (the latter of which can’t be done until you can use Dive.
        </p>

        <h5>Levelling Tips</h5>
        <p>
          You can finally leave the Illumise/Volbeat area! There are a lot of water pokemon to catch in this section. For general wild pokemon grinding, I found Mt Pyre indoors as a good place to train. Only one pokemon at the entrance floor (Shuppet) so as long as you have moves to hit it, it’s not too much of a threat. In fact, using Curse is sometimes more of a blessing than a…well…curse! Curse will reduce its HP by 50% regardless of whether it even has that much left so more often than not it was defeating itself before the Curse was making me lose health.
        </p>
        <p>
          Other than that, trainer rematches are available to you now. The best bet would be to just run around to all the trainers that already want a rematch with you. With the improvement in Emerald, you can also repeatedly run in and out of a route that your rematch is on in order to trigger the battle request so you can battle the same person over and over. I like battling the breeders on Route 117 since there’s two of them each with a full team of 6. There’s also several other trainers on this route to rematch. Again, battling all the trainers on the sea routes is good for exp but this is obviously hard when you’re primarily training up water/ice types. You also have the gym trainers in both Fortree and Mossdeep.
        </p>

        <p>
          <strong>End of part 5:</strong><br/>
          Caught 156, Remaining 46
        </p>

        ${guideSource}
  `,

      rows: [
        /* ================= Leaf Stone one-of (must appear first) ================= */
        {
          type: "choice",
          choiceKey: "leaf-stone-one",
          choiceValue: "vileplume",
          pokemon: { img: imgBasehref + "045.png", name: "Vileplume" },
          method: "Spend the single Leaf Stone on Gloom → Vileplume"
        },
        { type: "choice", choiceKey: "leaf-stone-one", choiceValue: "shiftry", pokemon: { img: imgBasehref + "275.png", name: "Shiftry" }, method: "Spend the single Leaf Stone on Nuzleaf → Shiftry" },

        /* --------------------------- Route 115 (hidden section) ------------------- */
        { pokemon: { img: imgBasehref + "039.png", name: "Jigglypuff" }, method: "Route 115 hidden section (Surf)" },
        { pokemon: { img: imgBasehref + "174.png", name: "Igglybuff" }, method: "Breed Jigglypuff (female preferred)" },

        /* --------------------------- New Mauville ------------------------------- */
        { pokemon: { img: imgBasehref + "081.png", name: "Magnemite" }, method: "New Mauville (common)" },
        { pokemon: { img: imgBasehref + "082.png", name: "Magneton" }, method: "Evolve from Magnemite at level 30 (rare wild too)" },
        { pokemon: { img: imgBasehref + "100.png", name: "Voltorb" }, method: "New Mauville (common)" },
        { pokemon: { img: imgBasehref + "101.png", name: "Electrode" }, method: "Evolve from Voltorb at level 30 (or Team Aqua Hideout)" },

        /* --------------------------- Good Rod tour ------------------------------ */
        { pokemon: { img: imgBasehref + "320.png", name: "Wailmer" }, method: "Good Rod — Route 103" },
        { pokemon: { img: imgBasehref + "321.png", name: "Wailord" }, method: "Evolve from Wailmer at level 40" },
        { pokemon: { img: imgBasehref + "341.png", name: "Corphish" }, method: "Good Rod — Route 102" },
        { pokemon: { img: imgBasehref + "342.png", name: "Crawdaunt" }, method: "Evolve from Corphish at level 30" },
        { pokemon: { img: imgBasehref + "339.png", name: "Barboach" }, method: "Good Rod — Route 111" },
        { pokemon: { img: imgBasehref + "340.png", name: "Whiscash" }, method: "Evolve from Barboach at level 30" },
        { pokemon: { img: imgBasehref + "318.png", name: "Carvanha" }, method: "Good Rod — Route 118" },
        { pokemon: { img: imgBasehref + "319.png", name: "Sharpedo" }, method: "Evolve from Carvanha at level 30" },

        /* --------------------------- Route 118/119 ------------------------------ */
        { pokemon: { img: imgBasehref + "352.png", name: "Kecleon" }, method: "Route 118 grass (forced battle later if missed)" },
        { pokemon: { img: imgBasehref + "357.png", name: "Tropius" }, method: "Route 119 tall grass" },

        /* ---- Place the Leaf Stone gated evolutions where the Leaf Stone is discussed (Route 119) ---- */
        { pokemon: { img: imgBasehref + "045.png", name: "Vileplume" }, method: "Use a Leaf Stone on Gloom (Route 119 Leaf Stone)", requires: { "leaf-stone-one": "vileplume" } },
        { pokemon: { img: imgBasehref + "275.png", name: "Shiftry" }, method: "Use a Leaf Stone on Nuzleaf (Route 119 Leaf Stone)", requires: { "leaf-stone-one": "shiftry" } },

        { pokemon: { img: imgBasehref + "351.png", name: "Castform" }, method: "Weather Institute gift (party slot required)" },
        { pokemon: { img: imgBasehref + "349.png", name: "Feebas" }, method: "Route 119 fishing (6 secret tiles; Old/Good/Super Rod)" },

        /* --------------------------- Route 120 ---------------------------------- */
        { pokemon: { img: imgBasehref + "359.png", name: "Absol" }, method: "Route 120" },

        /* --------------------------- Route 121 / Mt. Pyre (indoor) ------------- */
        { pokemon: { img: imgBasehref + "353.png", name: "Shuppet" }, method: "Route 121 or Mt. Pyre indoors" },
        { pokemon: { img: imgBasehref + "354.png", name: "Banette" }, method: "Evolve from Shuppet at level 37" },
        { pokemon: { img: imgBasehref + "355.png", name: "Duskull" }, method: "Mt. Pyre upper floors (indoors)" },
        { pokemon: { img: imgBasehref + "356.png", name: "Dusclops" }, method: "Evolve from Duskull at level 37" },

        /* --------------------------- Mt. Pyre (outside) ------------------------ */
        { pokemon: { img: imgBasehref + "037.png", name: "Vulpix" }, method: "Mt. Pyre outside (lower grass)" },
        { pokemon: { img: imgBasehref + "038.png", name: "Ninetales" }, method: "Use a Fire Stone on Vulpix" },
        { pokemon: { img: imgBasehref + "358.png", name: "Chimecho" }, method: "Mt. Pyre summit (very rare ~2%)" },

        /* --------------------------- Safari Zone -------------------------------- */
        { pokemon: { img: imgBasehref + "084.png", name: "Doduo" }, method: "Safari Zone (SE area)" },
        { pokemon: { img: imgBasehref + "085.png", name: "Dodrio" }, method: "Evolve from Doduo at level 31" },
        { pokemon: { img: imgBasehref + "203.png", name: "Girafarig" }, method: "Safari Zone" },
        { pokemon: { img: imgBasehref + "177.png", name: "Natu" }, method: "Safari Zone" },
        { pokemon: { img: imgBasehref + "178.png", name: "Xatu" }, method: "Evolve from Natu at level 25" },
        { pokemon: { img: imgBasehref + "025.png", name: "Pikachu" }, method: "Safari Zone (SE)" },
        { pokemon: { img: imgBasehref + "026.png", name: "Raichu" }, method: "Use a Thunder Stone on Pikachu (from New Mauville)" },
        { pokemon: { img: imgBasehref + "054.png", name: "Psyduck" }, method: "Safari Zone (SW via Surf)" },
        { pokemon: { img: imgBasehref + "055.png", name: "Golduck" }, method: "Evolve from Psyduck at level 33" },
        { pokemon: { img: imgBasehref + "111.png", name: "Rhyhorn" }, method: "Safari Zone (NW)" },
        { pokemon: { img: imgBasehref + "112.png", name: "Rhydon" }, method: "Evolve from Rhyhorn at level 42" },
        { pokemon: { img: imgBasehref + "127.png", name: "Pinsir" }, method: "Safari Zone (NW)" },
        { pokemon: { img: imgBasehref + "214.png", name: "Heracross" }, method: "Safari Zone (NE)" },
        { pokemon: { img: imgBasehref + "231.png", name: "Phanpy" }, method: "Safari Zone (NE)" },
        { pokemon: { img: imgBasehref + "232.png", name: "Donphan" }, method: "Evolve from Phanpy at level 25" },

        /* --------------------------- Breeding returns --------------------------- */
        { pokemon: { img: imgBasehref + "298.png", name: "Azurill" }, method: "Breed Marill/Azumarill holding Sea Incense" },
        { pokemon: { img: imgBasehref + "172.png", name: "Pichu" }, method: "Breed Pikachu/Raichu (no item required)" },

        /* --------------------------- Lilycove, contests, evolutions ------------ */
        { pokemon: { img: imgBasehref + "350.png", name: "Milotic" }, method: "Evolve Feebas by levelling with Beauty ≥ 170 (Pokéblocks)" },

        /* --------------------------- Shoal Cave ------------------------------- */
        { pokemon: { img: imgBasehref + "363.png", name: "Spheal" }, method: "Shoal Cave (various tides)" },
        { pokemon: { img: imgBasehref + "364.png", name: "Sealeo" }, method: "Evolve from Spheal at level 32" },
        { pokemon: { img: imgBasehref + "365.png", name: "Walrein" }, method: "Evolve from Sealeo at level 44" },
        { pokemon: { img: imgBasehref + "361.png", name: "Snorunt" }, method: "Shoal Cave lowest ice room" },
        { pokemon: { img: imgBasehref + "362.png", name: "Glalie" }, method: "Evolve from Snorunt at level 42" },

        /* --------------------------- Super Rod catches ------------------------- */
        { pokemon: { img: imgBasehref + "120.png", name: "Staryu" }, method: "Fish at Lilycove beach (Super Rod later for evolution)" },
        { pokemon: { img: imgBasehref + "222.png", name: "Corsola" }, method: "Super Rod — Evergrande base waterfall area" },
        { pokemon: { img: imgBasehref + "370.png", name: "Luvdisc" }, method: "Super Rod — Evergrande base waterfall area" },
        { pokemon: { img: imgBasehref + "116.png", name: "Horsea" }, method: "Super Rod — Route 132 (Pacifidlog area)" },
        { pokemon: { img: imgBasehref + "117.png", name: "Seadra" }, method: "Evolve from Horsea at level 32" }
      ]
    },
    "sootopolis": {
      headerTitle: "Pre Badge 7 - Sootopolis Gym",
      headerImg: "assets/images/Emerald/badges/Spr_E_Juan.png",
      headerImgAlt: "Juan as he appeared in Pokemon Emerald",

      summaryShort: `Defeating Tate and Liza now lets you Dive underwater. Head to the Mossdeep Space Centre and defeat Team Magma then visit Steven’s house on the island to get the HM. Dive down to search for some underwater pokemon! The best place would be outside Sootopolis City where you fill find in the seaweed:`,
      summaryHtml: `
        <p>
          Chinchou → Lv. 27 → Lanturn<br/>
          Relicanth<br/>
          Clamperl
        </p>

        <p>
          You can also get the shards needed to trade the treasure hunter who lives just west of Mossdeep City for some evolution stones. Shards can be found underwater in hidden spots (look for lone rocks or ‘circles’ in the sand) or by resurfacing in places you can’t normally access over sea level. There’s an easy green shard if you surf east from Lilycove. It’s the patch of water below the first trainer you see.
        </p>
        <p>
          Another option is using Thief to steal the shards off of various sea pokemon. Relicanth has Green Shards, Chinchou has Yellow, Clamperl has Blue and Corsola has Red. These can be traded for Leaf, Thunder, Water and Fire stones respectively. You’ll need one Leaf Stone and two Water Stones for Staryu, Lombre and Gloom/Nuzleaf. Note that there is also a Water Stone in the Abandoned Ship which requires Dive although it’s a long journey back.
        </p>
        <pre>
          Staryu → Water Stone → Starmie
          Lombre → Water Stone → Ludicolo
          Gloom/Nuzleaf → Leaf Stone → Vileplume/Shiftry
        </pre>

        <h5>The Regis</h5>
        <p>
          With a Relicanth and a Wailord in your party and a pokemon with Dig you can start the quest for the three Regis. Surf west from Pacifidlog Town and if you can take the correct path through the currents you will end up at a spot of deep water you can Dive in to access the Sealed Chamber. Read the braille message and surface there to reach the cave. Examine the text at the back of the room and then use Dig to open the door. In the next chamber, ensure that Wailord is first in your party and Relicanth is last. Examine the text at the back of the room and you should get a message saying that the doors have opened. Stock up on Ultra Balls and Timer Balls.
        </p>
        <p>
          Go to the desert on Route 111 to find a cave. Examine the text and take two steps left, then two steps down and then use Rock Smash to open the door. Here you’ll find the first of the trio. Lower its HP into the red as much as possible, inflict a status (preferably Sleep) and throw Ultra Balls. If you’ve spent many turns throwing Ultra Balls and putting Regirock back to sleep, try using a Timer Ball every few turns. This is the preferred strategy for catching all legendaries.
        </p>
        <pre>
          Regirock
        </pre>
        <p>
          To the northwest of Dewford Town on Route 105 is another cave that you can Surf to. Inside, examine the text on the back wall and then run around the edges of the room (stay by the walls). Once you’ve done a lap, the door will open. Catch the second golem:
        </p>
        <pre>
          Regice
        </pre>
        <p>
          Head over to the south part of Route 120 to find the final Regi cave. Examine the text on the back wall, walk into the center of the room and use Flash to unlock the room where Registeel lies…
        </p>
        <pre>
          Registeel
        </pre>

        <h5>Route 128</h5>
        <p>
          Underwater on this route you’ll find the submarine that was stolen from Slateport City. Surface here and knock the socks off of Team Aqua. You’ll witness Kyogre’s awakening and kick off the rain storms around Hoenn.
        </p>

        <h5>Sootopolis City</h5>
        <p>
          Dive underwater in Route 126 to find the entrance to Sootopolis City. Go to the west side of the city and head north, following the path round to reach the Cave of Origin. You’ll meet Wallace and soon you’ll need to awaken Rayquaza.
        </p>

        <h5>Sky Pillar</h5>
        <p>
          Just east of Pacifidlog Town you’ll find the tower. Climb up the tower and meet Rayquaza. Don’t worry, you won’t be catching it yet. Return to Sootopolis to watch the fight between the weather trio end. You can return to the Sky Pillar with your Mach Bike to challenge Rayquaza although it is a MASSIVE Lv70 so you may have trouble catching it. Use the same strategy as the Regis. It is your choice whether to use the Master Ball here as Rayquaza is so high levelled but a roaming pokemon in the post-game is more deserving of it.
        </p>
        <pre>
          Rayquaza
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          There’s only one pokemon you are evolving in this section (Chinchou) so there’s not much to say here.
        </p>

        <p>
          <strong>End of part 6:</strong><br/>
          Caught 167, Remaining 35
        </p>

        ${guideSource}
  `,

      rows: [
        /* --------------------------- Dive: seaweed outside Sootopolis -------- */
        { pokemon: { img: imgBasehref + "170.png", name: "Chinchou" }, method: "Underwater seaweed outside Sootopolis" },
        { pokemon: { img: imgBasehref + "171.png", name: "Lanturn" }, method: "Evolve from Chinchou at level 27" },
        { pokemon: { img: imgBasehref + "369.png", name: "Relicanth" }, method: "Underwater seaweed; can hold Green Shard" },
        { pokemon: { img: imgBasehref + "366.png", name: "Clamperl" }, method: "Underwater seaweed; can hold Blue Shard" },

        /* --------------------------- Stones via shards / Abandoned Ship ------ */
        { pokemon: { img: imgBasehref + "121.png", name: "Starmie" }, method: "Use a Water Stone on Staryu (shard trade or Abandoned Ship)" },
        { pokemon: { img: imgBasehref + "272.png", name: "Ludicolo" }, method: "Use a Water Stone on Lombre" },

        /* ---- Insert Leaf Stone requires-not rows relative to where stones are discussed ---- */
        {
          pokemon: { img: imgBasehref + "045.png", name: "Vileplume" },
          method: "Use a Leaf Stone on Gloom (alternative if Shiftry was chosen earlier)",
          requiresNot: { "leaf-stone-one": "vileplume" }
        },
        {
          pokemon: { img: imgBasehref + "275.png", name: "Shiftry" },
          method: "Use a Leaf Stone on Nuzleaf (alternative if Vileplume was chosen earlier)",
          requiresNot: { "leaf-stone-one": "shiftry" }
        },

        /* --------------------------- The Regis -------------------------------- */
        { pokemon: { img: imgBasehref + "377.png", name: "Regirock" }, method: "Desert Ruins (Route 111): 2 left, 2 down, Rock Smash" },
        { pokemon: { img: imgBasehref + "378.png", name: "Regice" }, method: "Island Cave (Route 105): circle the room along the walls" },
        { pokemon: { img: imgBasehref + "379.png", name: "Registeel" }, method: "Ancient Tomb (Route 120): stand center and use Flash" },

        /* --------------------------- Sky Pillar -------------------------------- */
        { pokemon: { img: imgBasehref + "384.png", name: "Rayquaza" }, method: "Sky Pillar summit (Mach Bike required; optional now)" }
      ]
    },
    "winona": {
      headerTitle: "Pre Badge 8 - Fortree Gym",
      headerImg: badgeBasehref + "Winona.png",
      headerImgAlt: "Winona as she appeared in Pokemon Emerald",

      summaryShort: `With your penultimate badge you can now use Waterfall to get to the pokemon league in Evergrande City. This is a very short section with only three pokemon available.`,
      summaryHtml: `
        <h5>Meteor Falls</h5>
        <p>
          Teach Waterfall to a pokemon and you can get to the small room at the back of the cave which has a rare pokemon, Bagon!
        </p>
        <pre>
          Bagon → Lv. 30 → Shelgon → Lv. 50 → Salamence
        </pre>

        <h5>Victory Road</h5>
        <p>
          It’s only the Elite Four that you can’t access without 8 badges so you are free to explore Victory Road. Head down to the lower floors to catch a Mawile. (Thanks to ChaoticMeatball for pointing this out!)
        </p>
        <pre>
          Mawile
        </pre>

        <p>
          With that taken care of, go and defeat Winona in Fortree City for your final badge!
        </p>

        <h5>Levelling Tips</h5>
        <p>
          This is one heck of a grind fest to evolve this little dragon. It should evolve soon enough into Shelgon but it’s getting it to Salamence that’s the problem. The problem gets worse when you realise that it doesn’t really learn any powerful moves. I ended up using the TM for Dragon Claw even though it would eventually learn it just to make things easier. Trainer rematches is again your best friend, busting ghosts in Mt Pyre is also good training for its attack stat and Victory Road houses the highest leveled pokemon you can train against, though Hariyama’s Whirlwind gets old really fast. Consider having a bunch of Zigzagoon with Pickup to help farm some Rare Candies. On the plus side, once you have that funky Salamence it will help you rip through the Elite Four.
        </p>

        <p>
          <strong>End of part 7:</strong><br/>
          Caught 171, Remaining 31
        </p>

        ${guideSource}
  `,

      rows: [
        /* --------------------------- Meteor Falls (Waterfall room) ---------- */
        { pokemon: { img: imgBasehref + "371.png", name: "Bagon" }, method: "Meteor Falls back room (Waterfall required)" },
        { pokemon: { img: imgBasehref + "372.png", name: "Shelgon" }, method: "Evolve from Bagon at level 30" },
        { pokemon: { img: imgBasehref + "373.png", name: "Salamence" }, method: "Evolve from Shelgon at level 50" },

        /* --------------------------- Victory Road (lower floors) ------------ */
        { pokemon: { img: imgBasehref + "303.png", name: "Mawile" }, method: "Victory Road lower floors" }
      ]
    },
    "pre-elite-four": {
      headerTitle: "Pre Elite Four",
      headerImg: badgeBasehref + "Wallace.png",
      headerImgAlt: "Wallace as he appeared in Pokemon Emerald",

      summaryShort: `Now you can freely Fly around Hoenn at your leisure although there’s only one place left to go…Go through Victory Road and then defeat the Elite Four and become Champion! There are no Pokémon to catch in this section!`,
      summaryHtml: `
        <p>
          Now you can freely Fly around Hoenn at your leisure although there’s only one place left to go…Go through Victory Road and then defeat the Elite Four and become Champion! There are no Pokémon to catch in this section!
        </p>

        <p>
          <strong>End of part 8:</strong><br/>
          Caught 171, Remaining 31
        </p>

        ${guideSource}
  `,

      rows: []
    },
    "post-game": {
      headerTitle: "Post Game",
      headerImg: "assets/images/Emerald/badges/Spr_FRLG_Oak.png",
      headerImgAlt: "Prof Oak as he appeared in Pokemon FireRed and LeafGren",

      summaryShort: `Ruby and Sapphire have a pretty poor post game to them but Emerald does give you additional pokemon to catch in your new National Pokedex. Before you leave your house you’ll be asked what colour pokemon was on TV. You can choose between whether you want to catch Latias or Latios.`,
      summaryHtml: `
        <h5>A roaming legendary dragon</h5>
        <p>
          Latias/Latios can be tracked via your pokedex IF you have seen it, so the most annoying part is trying to find it the first time. Stock up on 20+ Max Repels and get a pokemon that’s in its high 30s, preferably around Lv. 38 ish, enough to out-level the wild Tentacool but not enough to prevent the roaming legendary from appearing. I chose Muk as it evolved at Lv. 38. Save your game in Lilycove, use a Max Repel and then keep your high Lv. 30s pokemon in the first slot of your party and Surf from Lilycove to Mossdeep, down to Pacifidlog and back again. If your repel runs out, spray another one. Eventually you will encounter Latias/Latios as you Surf around. Unfortunately it moves so it’s a case of being in the right place at the right time. If you run out of repels, simply reset the game and try again until you get lucky.
        </p>
        <p>
          If you kept your Master Ball, throw it to avoid having to chase after it again. If you don’t have the Master Ball, let it flee for now so you can track it. Get a pokemon that’s fast but won’t OHKO it (it’s Dragon/Psychic type). Go back to the sea routes which I listed above and check your dex to see if it’s nearby. Each time you change location, it will move to an adjacent route from its current location. Zone between routes (e.g. two steps into route 126, check dex, two steps into route 127, check dex, repeat) until it is in your location and Surf around until you encounter it. Save your game before each encounter. Damage it but don’t worry about catching it yet. It will flee on its first turn but will keep its HP the same after each encounter. Continuously weaken it until you’re ready to catch it. For your final encounter, get a pokemon with Shadow Tag (e.g. Wobbuffet) or a fast pokemon with Mean Look. Sadly there’s no pokemon that learn Mean Look AND a sleeping move in this game unless you breed Mean Look onto a Ralts and level it up until Gardevoir learns Hypnosis. Stop it from fleeing and spam Ultra Balls, going on to Timer Balls if the battle lasts a long time.
        </p>
        <pre>
          Latias
          OR
          Latios
        </pre>

        <h5>A gift from Steven Stone</h5>
        <p>
          Fly to Mossdeep City and go to Steven’s house. There’s a pokeball on the table containing the second pseudo-legendary line of the region.
        </p>
        <pre>
          Beldum → Lv. 20 → Metang → Lv. 45 → Metagross
        </pre>

        <h5>Extra box legendaries</h5>
        <p>
          Visit the Weather Institute to find out about strange weather patterns which will tell you where Groudon and Kyogre are currently residing. They will be in temporary locations so time is of the essence. Visit Marine Cave and Terra Cave to encounter them. They are at Level 70 so you may need to train against the Elite Four to boost your levels. Again, the usual strategy works well here to catch them with the added bonus of using Net Balls against Kyogre.
        </p>
        <pre>
          Groudon
          Kyogre
        </pre>

        <h5>Desert Underpass</h5>
        <p>
          Visit the Fossil Maniac in Fallarbor Town to find a new area. Within the area you’ll find a Ditto in the wild. Right at the end of the tunnel you’ll find the fossil that you DIDN’T pick in the desert meaning that you can have both in one game. Take it back to Rustboro to get it revived.
        </p>
        <pre>
          Ditto
          Lileep → Lv. 40 → Cradily
          OR
          Anorith → Lv. 40 → Armaldo
        </pre>

        <h5>The Battle Frontier</h5>
        <p>
          Take the SS Tidal to the new area where you can catch four additional pokemon for the national dex. One of the Frontier visitors is looking for a Skitty and will trade you his Meowth for it. There is a Sudowoodo that you can interact with to initiate a battle and after it has moved you can visit Artisan Cave for a Smeargle.
        </p>
        <pre>
          Meowth → Lv. 28 → Persian
          Sudowoodo
          Smeargle
        </pre>

        <h5>The Safari Zone Revisited</h5>
        <p>
          Exclusive to Emerald, a new area has opened up in the Safari Zone allowing you to catch several Johto pokemon. Area 5 contains:
        </p>
        <pre>
          Hoothoot → Lv. 20 → Noctowl
          Spinarak → Lv. 22 → Ariados
          Mareep → Lv. 15 → Flaaffy → Lv. 30 → Ampharos
          Aipom
          Sunkern → Sun Stone → Sunflora
          Gligar
          Snubbull → Lv. 23 → Granbull
          Stantler
          (Surf) Wooper → Lv. 20 → Quagsire
          (Good/Super Rod) Remoraid → Lv. 25 → Octillery
        </pre>
        <p>
          And in Area 6 to the north you’ll be able to find:
        </p>
        <pre>
          Ledyba → Lv. 18 → Ledian
          Pineco → Lv. 31 → Forretress
          Teddiursa → Lv. 30 → Ursaring
          Houndour → Lv. 24 → Houndoom
          Miltank
          Shuckle
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          Evolving Beldum all the way to Metagross is a tough road. Having only Take Down at the start is not good for its HP. Once it evolves into Metang things get a bit easier. Being a Steel type it’s quite resistant so you can go up against most pokemon without too much concern. Abuse trainers rematches over and over until you reach that sweet point where it’s finally ready to evolve into Metagross. For the Johto pokemon, grind in areas in the wild where your pokemon is capable of holding its own. Trainer rematches are also possible as long as you know what kind of level they will be.
        </p>

        <p>
          <strong>End of the challenge:</strong><br/>
          Hoenn Dex Caught 179, Remaining 23<br/>
          National Dex Caught 212, Remaining 174
        </p>

        ${guideSource}
  `,

      rows: [
        { type: "choice", choiceKey: "lati-choice", choiceValue: "latias", pokemon: { img: imgBasehref + "380.png", name: "Latias" }, method: "Pick Latias from the TV colour prompt" },
        { type: "choice", choiceKey: "lati-choice", choiceValue: "latios", pokemon: { img: imgBasehref + "381.png", name: "Latios" }, method: "Pick Latios from the TV colour prompt" },

        { pokemon: { img: imgBasehref + "380.png", name: "Latias" }, method: "Roaming legendary after TV prompt", requires: { "lati-choice": "latias" } },
        { pokemon: { img: imgBasehref + "381.png", name: "Latios" }, method: "Roaming legendary after TV prompt", requires: { "lati-choice": "latios" } },

        { pokemon: { img: imgBasehref + "374.png", name: "Beldum" }, method: "Gift at Steven’s house (Mossdeep City)" },
        { pokemon: { img: imgBasehref + "375.png", name: "Metang" }, method: "Evolve from Beldum at level 20" },
        { pokemon: { img: imgBasehref + "376.png", name: "Metagross" }, method: "Evolve from Metang at level 45" },

        { pokemon: { img: imgBasehref + "383.png", name: "Groudon" }, method: "Terra Cave weather event (Lv. 70)" },
        { pokemon: { img: imgBasehref + "382.png", name: "Kyogre" }, method: "Marine Cave weather event (Lv. 70)" },

        { pokemon: { img: imgBasehref + "132.png", name: "Ditto" }, method: "Desert Underpass" },

        { pokemon: { img: imgBasehref + "345.png", name: "Lileep" }, method: "Desert Underpass fossil; revive at Devon Corp (if Claw was chosen earlier)", requiresNot: { "desert-fossil": "lileep" } },
        { pokemon: { img: imgBasehref + "346.png", name: "Cradily" }, method: "Evolve from Lileep at level 40", requiresNot: { "desert-fossil": "lileep" } },

        {
          pokemon: { img: imgBasehref + "347.png", name: "Anorith" },
          method: "Desert Underpass fossil; revive at Devon Corp (if Root was chosen earlier)",
          requiresNot: { "desert-fossil": "anorith" }
        },
        { pokemon: { img: imgBasehref + "348.png", name: "Armaldo" }, method: "Evolve from Anorith at level 40", requiresNot: { "desert-fossil": "anorith" } },

        { pokemon: { img: imgBasehref + "052.png", name: "Meowth" }, method: "Battle Frontier trade (for Skitty)" },
        { pokemon: { img: imgBasehref + "053.png", name: "Persian" }, method: "Evolve from Meowth at level 28" },
        { pokemon: { img: imgBasehref + "185.png", name: "Sudowoodo" }, method: "Battle Frontier encounter" },
        { pokemon: { img: imgBasehref + "235.png", name: "Smeargle" }, method: "Artisan Cave (Battle Frontier)" },

        { pokemon: { img: imgBasehref + "163.png", name: "Hoothoot" }, method: "Safari Zone Area 5" },
        { pokemon: { img: imgBasehref + "164.png", name: "Noctowl" }, method: "Evolve from Hoothoot at level 20" },
        { pokemon: { img: imgBasehref + "167.png", name: "Spinarak" }, method: "Safari Zone Area 5" },
        { pokemon: { img: imgBasehref + "168.png", name: "Ariados" }, method: "Evolve from Spinarak at level 22" },
        { pokemon: { img: imgBasehref + "179.png", name: "Mareep" }, method: "Safari Zone Area 5" },
        { pokemon: { img: imgBasehref + "180.png", name: "Flaaffy" }, method: "Evolve from Mareep at level 15" },
        { pokemon: { img: imgBasehref + "181.png", name: "Ampharos" }, method: "Evolve from Flaaffy at level 30" },
        { pokemon: { img: imgBasehref + "190.png", name: "Aipom" }, method: "Safari Zone Area 5" },
        { pokemon: { img: imgBasehref + "191.png", name: "Sunkern" }, method: "Safari Zone Area 5" },
        { pokemon: { img: imgBasehref + "192.png", name: "Sunflora" }, method: "Use a Sun Stone on Sunkern" },
        { pokemon: { img: imgBasehref + "207.png", name: "Gligar" }, method: "Safari Zone Area 5" },
        { pokemon: { img: imgBasehref + "209.png", name: "Snubbull" }, method: "Safari Zone Area 5" },
        { pokemon: { img: imgBasehref + "210.png", name: "Granbull" }, method: "Evolve from Snubbull at level 23" },
        { pokemon: { img: imgBasehref + "234.png", name: "Stantler" }, method: "Safari Zone Area 5" },
        { pokemon: { img: imgBasehref + "194.png", name: "Wooper" }, method: "Safari Zone Area 5 (Surf)" },
        { pokemon: { img: imgBasehref + "195.png", name: "Quagsire" }, method: "Evolve from Wooper at level 20" },
        { pokemon: { img: imgBasehref + "223.png", name: "Remoraid" }, method: "Safari Zone Area 5 (Good/Super Rod)" },
        { pokemon: { img: imgBasehref + "224.png", name: "Octillery" }, method: "Evolve from Remoraid at level 25" },

        { pokemon: { img: imgBasehref + "165.png", name: "Ledyba" }, method: "Safari Zone Area 6" },
        { pokemon: { img: imgBasehref + "166.png", name: "Ledian" }, method: "Evolve from Ledyba at level 18" },
        { pokemon: { img: imgBasehref + "204.png", name: "Pineco" }, method: "Safari Zone Area 6" },
        { pokemon: { img: imgBasehref + "205.png", name: "Forretress" }, method: "Evolve from Pineco at level 31" },
        { pokemon: { img: imgBasehref + "216.png", name: "Teddiursa" }, method: "Safari Zone Area 6" },
        { pokemon: { img: imgBasehref + "217.png", name: "Ursaring" }, method: "Evolve from Teddiursa at level 30" },
        { pokemon: { img: imgBasehref + "228.png", name: "Houndour" }, method: "Safari Zone Area 6" },
        { pokemon: { img: imgBasehref + "229.png", name: "Houndoom" }, method: "Evolve from Houndour at level 24" },
        { pokemon: { img: imgBasehref + "241.png", name: "Miltank" }, method: "Safari Zone Area 6" },
        { pokemon: { img: imgBasehref + "213.png", name: "Shuckle" }, method: "Safari Zone Area 6" }
      ]
    }
  }
};
