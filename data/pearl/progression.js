/* ----------------------
    - img src: 
    - Guide: 
    ----------------------- */
const guideLink =
  "https://docs.google.com/document/d/1Edz1FjpUKoHiryD00rjHvvGTkirJaH6vb68vLRySYoI/edit?tab=t.0";
const guideSource = `
      <p class="tips-source">
        <a href="${guideLink}" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>`;

const imgBasehref = "assets/images/Diamond and Pearl/pokedex/Spr_4d_";
const badgeBasehref = "assets/images/Diamond and Pearl/badges/Spr_DP_";

window.gameData = {
  gameId: "pearl",
  gameTitle: "Pearl",
  logo: "assets/images/logos/pearl.png",
  aboutHtml: `
   <section class="game-intro-content">
      <ul>
        <li>MUNCHLAX!!! This is the pokemon that can potentially destroy your perfect run. Of all the honey trees in the game, only some will yield Munchlax and it’s entirely dependent on your trainer ID. Start a new game and then check this website: https://www.dragonflycave.com/sinnoh/honey-trees If your guaranteed honey tree ISN’T Floaroma Meadow, Route 205 (north or south) or Valley Windworks then it will not be possible to catch Munchlax before your second badge. Additionally, Munchlax is a major pain in the ass to find. You need to wait 6 real time hours for the trees to spawn a pokemon and even if you have the right tree it’s a 1% chance to find Munchlax. See the walkthrough below (Section 2.2) for a guide to honey trees.</li>
        <li>Grinding – As expected, there is a lot of grinding in this challenge! For the first part of the game, grinding against wild pokemon is pretty much the only way to go. Once you’ve obtained 2 badges you’ll have access to the Vs Seeker which is an invaluable tool. There are some excellent spots outlined in the guide itself to battle against the same trainers over and over. Obviously this all depends on the type of pokemon you are raising and what attacks it has. </li>
        <li>Learning new moves shouldn’t be taken for granted, particularly with pokemon that evolve at higher levels. During a normal game you might be quick to replace a weak move with a stronger one but getting rid of non-attacking moves is a better strategy here. On the first part of the challenge before Roark, you are battling low level pokemon and will run out of PP very quickly while that exp bar goes up very slowly. You need to maximize the amount of pokemon you can defeat, so having multiple attacking moves, regardless of how weak they are, will be beneficial. You have no need for moves like Growl or Sand Attack.</li>
        <li>This challenge is a fun alternative to a regular play through and you may really appreciate having to train pokemon up yourself that you never trained before. On the other hand you may end up despising certain pokemon due to their inability to attack when you first get them or their generally poor stats/levelling up moves. </li>
        <li>It’s not really a rule, but my preferred method is that you train them yourself except when they can’t battle themselves (i.e. Magikarp before it learns Tackle). This is all down to your own limitations that you set. I don’t like using Rare Candy anymore as it defeats the purpose of the challenge and I don’t like using any exp sharing items. But remember that this is YOUR challenge so feel free to add or remove restrictions as you see fit.</li>
        <li>Please note that this is not a full guide to the game, I am only listing the pokemon you can catch at the earliest opportunities and any required items. I do not go into full detail on optimal exp gains or where to find the highest level for an individual pokemon etc. This playthrough and guide were done as a casual play rather than a speed run. Please consult other guides for a full walkthrough or more detailed information. </li>
      </ul>
      ${guideSource}
    </section>
    `,
  progression: {
    roark: {
      headerTitle: "Pre Badge 1 - Roark",
      headerImg: badgeBasehref + "Roark.png",
      headerImgAlt: "Roark as he appeared in Pokémon Diamond and Pearl",

      summaryShort: `This first part will cover everything you can do from starting in Twinleaf Town up right up to Oreburgh City BEFORE you get that first badge from Roark. This WILL take a while so it will really test your patience…`,
      summaryHtml: `
        <h5>Twinleaf Town</h5>
        <p>
          After talking to your mother, head over to your rival’s house and he will dash off to Route 201. Follow him out the north side of town and you’ll quickly be given the chance to get your first pokemon. While all are completely viable for this first section, the only one you may have problems with at first is Chimchar. This is purely because there are so many rock types (and a fire type) that you’ll be battling against in the wild. Obviously this will change in your favour when Monferno learns fighting type moves, so it will only be the early levels that may cause trouble.
        </p>
        <pre>
          Turtwig → Lv. 18 → Grotle → Lv. 32 → Torterra
          OR
          Chimchar → Lv. 14 → Monferno → Lv. 36 → Infernape
          OR
          Piplup → Lv. 16 → Prinplup → Lv. 36 → Empoleon
        </pre>
        <p>
          When you’re able to, head to Sandgem Town to the east. As you don’t have any pokeballs yet, head that way ASAP and train your starter up a level or two.
        </p>

        <h5>Sandgem Town</h5>
        <p>
          Pay Professor Rowan a visit and you’ll be given a pokedex. Route 202 is your next stop (north from Sandgem) but feel free to explore. Go to the Pokemart and you’ll be able to buy your first pokeballs. Revisit Route 201 where you’ll find Bidoof and Starly.
        </p>
        <pre>
          Bidoof → Lv. 15 → Bibarel
          Starly → Lv. 14 → Staravia → Lv. 34 → Staraptor
        </pre>

        <h5>Route 202</h5>
        <p>
          Lucas/Dawn will be waiting for you and will show you the tutorial on catching pokemon. If you’ve caught the above three pokemon, obviously this is not necessary! You’ll also be given five more pokeballs for free. On this route there is one pokemon to catch – Shinx. If it’s night time you’ll also find Kricketot.
        </p>
        <pre>
          Shinx → Lv. 15 → Luxio → Lv. 30 → Luxray
          Kricketot → Lv. 10 → Kricketune
        </pre>

        <h5>Jubilife City</h5>
        <p>
          Talk to the gentleman in the middle of the crossroads in town to start the Poketch mission. Talk to the three clowns outside to obtain vouchers and receive the Poketch. Head out the west gate and speak to the fisherman in the gatehouse to obtain the Old Rod. Continue to Route 218 where you can fish.
        </p>
        <pre>
          Magikarp → Lv. 20 → Gyarados
        </pre>

        <h5>Route 204</h5>
        <p>
          Head north out of Jubilife City. Budew can be caught at all times, while Zubat only appears at night.
        </p>
        <pre>
          Budew → Friendship (Day) → Roselia
          Zubat → Lv. 22 → Golbat → Friendship → Crobat
        </pre>

        <h5>Ravaged Path</h5>
        <p>
          Enter the cave north of Route 204. You can catch Psyduck and Geodude here. Zubat also appears during the daytime.
        </p>
        <pre>
          Psyduck → Lv. 33 → Golduck
          Geodude → Lv. 25 → Graveler
        </pre>

        <h5>Route 203</h5>
        <p>
          Head east from Jubilife City. Abra is the single new pokemon here.
        </p>
        <pre>
          Abra → Lv. 16 → Kadabra
        </pre>

        <h5>Oreburgh Gate</h5>
        <p>
          Talk to the hiker at the entrance to receive HM06 Rock Smash.
        </p>

        <h5>Oreburgh City</h5>
        <p>
          The gym is currently closed. Roark can be found inside Oreburgh Mine in the south east corner of town. Inside the mine you can catch Onix.
        </p>
        <pre>
          Onix
        </pre>

        <h5>Route 207</h5>
        <p>
          Through the north east exit of town you can find Machop.
        </p>
        <pre>
          Machop → Lv. 28 → Machoke
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          My preferred training ground is Route 207 during the daytime where Geodude and Machop give the best experience. At night, Zubat and Kricketot appear and give poor experience.
        </p>

        <p>
          <strong>End of part 1:</strong><br/>
          Caught 29, Remaining 122
        </p>

        ${guideSource}
  `,

      rows: [
        /* ================= Starter Choice ================= */
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "turtwig",
          pokemon: { img: imgBasehref + "387.png", name: "Turtwig" },
          method: "Choose Turtwig as your starter",
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "chimchar",
          pokemon: { img: imgBasehref + "390.png", name: "Chimchar" },
          method: "Choose Chimchar as your starter",
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "piplup",
          pokemon: { img: imgBasehref + "393.png", name: "Piplup" },
          method: "Choose Piplup as your starter",
        },

        {
          pokemon: { img: imgBasehref + "387.png", name: "Turtwig" },
          method: "Starter",
          requires: { starter: "turtwig" },
        },
        {
          pokemon: { img: imgBasehref + "388.png", name: "Grotle" },
          method: "Evolve from Turtwig at level 18",
          requires: { starter: "turtwig" },
        },
        {
          pokemon: { img: imgBasehref + "389.png", name: "Torterra" },
          method: "Evolve from Grotle at level 32",
          requires: { starter: "turtwig" },
        },

        {
          pokemon: { img: imgBasehref + "390.png", name: "Chimchar" },
          method: "Starter",
          requires: { starter: "chimchar" },
        },
        {
          pokemon: { img: imgBasehref + "391.png", name: "Monferno" },
          method: "Evolve from Chimchar at level 14",
          requires: { starter: "chimchar" },
        },
        {
          pokemon: { img: imgBasehref + "392.png", name: "Infernape" },
          method: "Evolve from Monferno at level 36",
          requires: { starter: "chimchar" },
        },

        {
          pokemon: { img: imgBasehref + "393.png", name: "Piplup" },
          method: "Starter",
          requires: { starter: "piplup" },
        },
        {
          pokemon: { img: imgBasehref + "394.png", name: "Prinplup" },
          method: "Evolve from Piplup at level 16",
          requires: { starter: "piplup" },
        },
        {
          pokemon: { img: imgBasehref + "395.png", name: "Empoleon" },
          method: "Evolve from Prinplup at level 36",
          requires: { starter: "piplup" },
        },

        {
          pokemon: { img: imgBasehref + "399.png", name: "Bidoof" },
          method: "Route 201",
        },
        {
          pokemon: { img: imgBasehref + "400.png", name: "Bibarel" },
          method: "Evolve from Bidoof at level 15",
        },
        {
          pokemon: { img: imgBasehref + "396.png", name: "Starly" },
          method: "Route 201",
        },
        {
          pokemon: { img: imgBasehref + "397.png", name: "Staravia" },
          method: "Evolve from Starly at level 14",
        },
        {
          pokemon: { img: imgBasehref + "398.png", name: "Staraptor" },
          method: "Evolve from Staravia at level 34",
        },

        {
          pokemon: { img: imgBasehref + "403.png", name: "Shinx" },
          method: "Route 202",
        },
        {
          pokemon: { img: imgBasehref + "404.png", name: "Luxio" },
          method: "Evolve from Shinx at level 15",
        },
        {
          pokemon: { img: imgBasehref + "405.png", name: "Luxray" },
          method: "Evolve from Luxio at level 30",
        },

        {
          pokemon: { img: imgBasehref + "401.png", name: "Kricketot" },
          method: "Route 202 (night)",
        },
        {
          pokemon: { img: imgBasehref + "402.png", name: "Kricketune" },
          method: "Evolve from Kricketot at level 10",
        },

        {
          pokemon: { img: imgBasehref + "129.png", name: "Magikarp" },
          method: "Old Rod — Route 218",
        },
        {
          pokemon: { img: imgBasehref + "130.png", name: "Gyarados" },
          method: "Evolve from Magikarp at level 20",
        },

        {
          pokemon: { img: imgBasehref + "406.png", name: "Budew" },
          method: "Route 204",
        },
        {
          pokemon: { img: imgBasehref + "407.png", name: "Roselia" },
          method: "Evolve from Budew with friendship during the day",
        },

        {
          pokemon: { img: imgBasehref + "041.png", name: "Zubat" },
          method: "Route 204 (night) / Ravaged Path",
        },
        {
          pokemon: { img: imgBasehref + "042.png", name: "Golbat" },
          method: "Evolve from Zubat at level 22",
        },
        {
          pokemon: { img: imgBasehref + "169.png", name: "Crobat" },
          method: "Evolve from Golbat with high friendship",
        },

        {
          pokemon: { img: imgBasehref + "054.png", name: "Psyduck" },
          method: "Ravaged Path",
        },
        {
          pokemon: { img: imgBasehref + "055.png", name: "Golduck" },
          method: "Evolve from Psyduck at level 33",
        },

        {
          pokemon: { img: imgBasehref + "074.png", name: "Geodude" },
          method: "Ravaged Path",
        },
        {
          pokemon: { img: imgBasehref + "075.png", name: "Graveler" },
          method: "Evolve from Geodude at level 25",
        },

        {
          pokemon: { img: imgBasehref + "063.png", name: "Abra" },
          method: "Route 203",
        },
        {
          pokemon: { img: imgBasehref + "064.png", name: "Kadabra" },
          method: "Evolve from Abra at level 16",
        },

        {
          pokemon: { img: imgBasehref + "095.png", name: "Onix" },
          method: "Oreburgh Mine",
        },

        {
          pokemon: { img: imgBasehref + "066.png", name: "Machop" },
          method: "Route 207",
        },
        {
          pokemon: { img: imgBasehref + "067.png", name: "Machoke" },
          method: "Evolve from Machop at level 28",
        },
      ],
    },
    gardenia: {
      headerTitle: "Pre Badge 2 - Gardenia",
      headerImg: badgeBasehref + "Gardenia.png",
      headerImgAlt: "Gardenia as she appeared in Pokémon Diamond and Pearl",

      summaryShort: `With the ability to use Rock Smash I ventured into the lower level of Oreburgh Gate but found no new Pokémon. Progressing onwards opens up Floaroma, Honey Trees, Eterna Forest, and several evolution stones, making this one of the densest early sections of the run.`,
      summaryHtml: `
        <p>
          With the ability to use Rock Smash I ventured into the lower level of Oreburgh Gate to pick up some items but there were no new pokemon here. I proceeded to Ravaged Path so that I could reach Route 204 North which also has no new pokemon.
        </p>

        <h5>Route 205 / Valley Windworks</h5>
        <p>
          After reaching Floaroma Town, pick up the Sprayduck can and head east toward Valley Windworks. Several new Pokémon are available here.
        </p>
        <pre>
          Shellos → Lv. 30 → Gastrodon
          Buizel → Lv. 26 → Floatzel
          Pachirisu
          (Friday only, after Galactic) Drifloon → Lv. 28 → Drifblim
        </pre>

        <h5>Honey Trees</h5>
        <p>
          You can now start using Honey Trees. The available Pokémon include a large pool with very low encounter rates. These trees will take up the bulk of your time in this section.
        </p>
        <pre>
          Wurmple → Silcoon → Beautifly
          Wurmple → Cascoon → Dustox
          Aipom → (Double Hit) → Ambipom
          Burmy (♀) → Wormadam
          Burmy (♂) → Mothim
          Cherubi → Lv. 25 → Cherrim
          Combee (♀) → Vespiquen
          Heracross
          Munchlax → Friendship → Snorlax
        </pre>

        <h5>Eterna Forest</h5>
        <p>
          Cheryl will accompany you, healing your party after every battle. Nighttime exclusives appear here depending on version.
        </p>
        <pre>
          Buneary → Friendship → Lopunny
          Murkrow
        </pre>

        <h5>Eterna City / Underground</h5>
        <p>
          Trade your spare Buizel for a Chatot. The Underground will allow you to mine a fossil and a Moon Stone.
        </p>
        <pre>
          Chatot
          Cranidos → Lv. 30 → Rampardos
        </pre>

        <h5>Route 211</h5>
        <pre>
          Meditite → Lv. 37 → Medicham
          Chingling → Friendship (Night) → Chimecho
          Ponyta → Lv. 40 → Rapidash
          Hoothoot → Lv. 20 → Noctowl
        </pre>

        <h5>Mt. Coronet</h5>
        <pre>
          Cleffa → Friendship → Clefairy → Moon Stone → Clefable
        </pre>

        <h5>Stone Evolutions</h5>
        <pre>
          Roselia → Shiny Stone → Roserade
          Murkrow → Dusk Stone → Honchkrow
        </pre>

        <p>
          <strong>End of part 2:</strong><br/>
          Caught 72, Remaining 79
        </p>

        ${guideSource}
  `,

      rows: [
        /* ---------------- Valley Windworks ---------------- */
        {
          pokemon: { img: imgBasehref + "422.png", name: "Shellos" },
          method: "Route 205 / Valley Windworks",
        },
        {
          pokemon: { img: imgBasehref + "423.png", name: "Gastrodon" },
          method: "Evolve from Shellos at level 30",
        },
        {
          pokemon: { img: imgBasehref + "418.png", name: "Buizel" },
          method: "Route 205 / Valley Windworks",
        },
        {
          pokemon: { img: imgBasehref + "419.png", name: "Floatzel" },
          method: "Evolve from Buizel at level 26",
        },
        {
          pokemon: { img: imgBasehref + "417.png", name: "Pachirisu" },
          method: "Valley Windworks",
        },
        {
          pokemon: { img: imgBasehref + "425.png", name: "Drifloon" },
          method: "Valley Windworks (Friday only)",
        },
        {
          pokemon: { img: imgBasehref + "426.png", name: "Drifblim" },
          method: "Evolve from Drifloon at level 28",
        },

        /* ---------------- Honey Tree Pokémon ---------------- */
        {
          pokemon: { img: imgBasehref + "265.png", name: "Wurmple" },
          method: "Honey Trees",
        },
        {
          pokemon: { img: imgBasehref + "266.png", name: "Silcoon" },
          method: "Evolve from Wurmple at level 7 (branch)",
        },
        {
          pokemon: { img: imgBasehref + "267.png", name: "Beautifly" },
          method: "Evolve from Silcoon at level 10",
        },
        {
          pokemon: { img: imgBasehref + "268.png", name: "Cascoon" },
          method: "Evolve from Wurmple at level 7 (branch)",
        },
        {
          pokemon: { img: imgBasehref + "269.png", name: "Dustox" },
          method: "Evolve from Cascoon at level 10",
        },
        {
          pokemon: { img: imgBasehref + "190.png", name: "Aipom" },
          method: "Honey Trees",
        },
        {
          pokemon: { img: imgBasehref + "424.png", name: "Ambipom" },
          method: "Level up Aipom knowing Double Hit",
        },
        {
          pokemon: { img: imgBasehref + "412.png", name: "Burmy" },
          method: "Honey Trees",
        },
        {
          pokemon: { img: imgBasehref + "413.png", name: "Wormadam" },
          method: "Female Burmy evolves at level 20",
        },
        {
          pokemon: { img: imgBasehref + "414.png", name: "Mothim" },
          method: "Male Burmy evolves at level 20",
        },
        {
          pokemon: { img: imgBasehref + "420.png", name: "Cherubi" },
          method: "Honey Trees",
        },
        {
          pokemon: { img: imgBasehref + "421.png", name: "Cherrim" },
          method: "Evolve from Cherubi at level 25",
        },
        {
          pokemon: { img: imgBasehref + "415.png", name: "Combee" },
          method: "Honey Trees (must be female)",
        },
        {
          pokemon: { img: imgBasehref + "416.png", name: "Vespiquen" },
          method: "Evolve female Combee at level 21",
        },
        {
          pokemon: { img: imgBasehref + "214.png", name: "Heracross" },
          method: "Honey Trees",
        },
        {
          pokemon: { img: imgBasehref + "446.png", name: "Munchlax" },
          method: "Honey Trees (1% rare)",
        },
        {
          pokemon: { img: imgBasehref + "143.png", name: "Snorlax" },
          method: "Evolve Munchlax with friendship",
        },

        /* ---------------- Eterna Forest ---------------- */
        {
          pokemon: { img: imgBasehref + "427.png", name: "Buneary" },
          method: "Eterna Forest",
        },
        {
          pokemon: { img: imgBasehref + "428.png", name: "Lopunny" },
          method: "Evolve from Buneary with friendship",
        },
        {
          pokemon: { img: imgBasehref + "198.png", name: "Murkrow" },
          method: "Eterna Forest at night",
        },

        /* ---------------- Fossil Revivals (gated) ---------------- */
        {
          pokemon: { img: imgBasehref + "441.png", name: "Chatot" },
          method: "Revive Skull Fossil at Oreburgh Museum",
        },
        {
          pokemon: { img: imgBasehref + "408.png", name: "Cranidos" },
          method: "Revive Skull Fossil at Oreburgh Museum",
        },
        {
          pokemon: { img: imgBasehref + "409.png", name: "Rampardos" },
          method: "Evolve from Cranidos at level 30",
        },

        /* ---------------- Routes 211 / Mt Coronet ---------------- */
        {
          pokemon: { img: imgBasehref + "307.png", name: "Meditite" },
          method: "Route 211",
        },
        {
          pokemon: { img: imgBasehref + "308.png", name: "Medicham" },
          method: "Evolve from Meditite at level 37",
        },
        {
          pokemon: { img: imgBasehref + "433.png", name: "Chingling" },
          method: "Mt Coronet / Route 211",
        },
        {
          pokemon: { img: imgBasehref + "358.png", name: "Chimecho" },
          method: "Evolve from Chingling with friendship at night",
        },
        {
          pokemon: { img: imgBasehref + "077.png", name: "Ponyta" },
          method: "Route 211",
        },
        {
          pokemon: { img: imgBasehref + "078.png", name: "Rapidash" },
          method: "Evolve from Ponyta at level 40",
        },
        {
          pokemon: { img: imgBasehref + "163.png", name: "Hoothoot" },
          method: "Route 211 (Night)",
        },
        {
          pokemon: { img: imgBasehref + "164.png", name: "Noctowl" },
          method: "Evolve from Hoothoot at level 20",
        },

        /* ---------------- Mt Coronet stone line ---------------- */
        {
          pokemon: { img: imgBasehref + "173.png", name: "Cleffa" },
          method: "Mt Coronet",
        },
        {
          pokemon: { img: imgBasehref + "035.png", name: "Clefairy" },
          method: "Evolve Cleffa with friendship",
        },
        {
          pokemon: { img: imgBasehref + "036.png", name: "Clefable" },
          method: "Use Moon Stone on Clefairy",
        },

        /* ---------------- Stone Evolutions ---------------- */
        {
          pokemon: { img: imgBasehref + "430.png", name: "Honchkrow" },
          method: "Use Dusk Stone on Murkrow",
        },
      ],
    },
    "maylene-wake": {
      headerTitle: "Pre Badge 3 & 4 - Maylene and Crasher Wake",
      headerImg: badgeBasehref + "Maylene.png",
      headerImgAlt: "Maylene as she appeared in Pokémon Diamond and Pearl",

      summaryShort: `Now this is where the challenge gets interesting as your pokedex completion explodes during this section! You’ll be venturing through FOUR towns/cities before it’s time for another badge.`,
      summaryHtml: `
        <p>
          As soon as that 2nd badge is in hand, Cut will now be usable and you can enter the building in the north end of town. Here you will face some Team Galactic members. This is a good chance to get some serious experience for your Pickup pokemon as you will want to jump from Lv. 41 to Lv. 51 by the end of this next section. Once you have defeated the commander you will be thanked by the man who owns the bike shop. Clear a slot in your team and head to the bike shop to collect your reward.
        </p>

        <h5>Ghosts at the Old Chateau</h5>
        <p>
          Head into the Old Chateau situated in Eterna Forest. Throughout the building you’ll encounter Gastly. You can also grab the Soothe Bell.
        </p>
        <pre>
          Gastly → Lv. 25 → Haunter
        </pre>

        <h5>Route 206</h5>
        <p>
          Access the lower road from the southern end of Cycling Road. At the northern end you can enter Wayward Cave, but it’s best to wait until later to fully explore it due to a one-time doubles partner.
        </p>
        <pre>
          Bronzor → Lv. 33 → Bronzong
        </pre>

        <h5>Route 207 / Mt Coronet</h5>
        <p>
          Use the cycling slope shortcut back to Oreburgh. Head east to receive the Vs Seeker for trainer rematches, then pass through Mt Coronet.
        </p>

        <h5>Hearthome City</h5>
        <p>
          Visit the contest hall and leave the city through the east. A hiker will give you a Happiny egg.
        </p>
        <pre>
          Happiny → Level up holding Oval Stone → Chansey → Friendship → Blissey
        </pre>

        <h5>Route 209</h5>
        <pre>
          Bonsly → Level up knowing Mimic → Sudowoodo
        </pre>

        <h5>Good Fishing Tour</h5>
        <pre>
          Goldeen → Lv. 33 → Seaking
          Barboach → Lv. 30 → Whiscash
          Finneon → Lv. 31 → Lumineon
        </pre>

        <h5>Solaceon Ruins</h5>
        <pre>
          Unown
        </pre>

        <h5>Route 214 / Ruin Maniac Cave</h5>
        <pre>
          Girafarig
          Hippopotas → Lv. 34 → Hippowdon
        </pre>

        <h5>Route 213</h5>
        <pre>
          Wingull → Lv. 25 → Pelipper
          Remoraid → Lv. 25 → Octillery
        </pre>

        <h5>Pastoria City – Great Marsh</h5>
        <pre>
          Wooper → Lv. 20 → Quagsire
          Azurill
          Marill → Lv. 18 → Azumarill
          Carnivine
          Skorupi → Lv. 40 → Drapion
          Croagunk → Lv. 37 → Toxicroak
        </pre>

        <h5>Trophy Garden</h5>
        <pre>
          Pichu → Friendship → Pikachu → Thunder Stone → Raichu
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          Teaming up with Mira is a one-time opportunity with free heals after every battle, so bring a full team to train. Route 214 and the Lake Valor Hotel café provide excellent rematch experience, while Cheryl’s forest earlier remains one of the best grind spots overall.
        </p>

        <p>
          <strong>End of part 3:</strong><br/>
          Caught 110, Remaining 41<br/>
        </p>

        ${guideSource}
  `,

      rows: [
        /* ---------------- Old Chateau ---------------- */
        {
          pokemon: { img: imgBasehref + "092.png", name: "Gastly" },
          method: "Old Chateau",
        },
        {
          pokemon: { img: imgBasehref + "093.png", name: "Haunter" },
          method: "Evolve from Gastly at level 25",
        },

        /* ---------------- Route 206 ---------------- */
        {
          pokemon: { img: imgBasehref + "436.png", name: "Bronzor" },
          method: "Route 206",
        },
        {
          pokemon: { img: imgBasehref + "437.png", name: "Bronzong" },
          method: "Evolve from Bronzor at level 33",
        },

        /* ---------------- Hearthome ---------------- */
        {
          pokemon: { img: imgBasehref + "440.png", name: "Happiny" },
          method: "Egg from hiker east of Hearthome",
        },
        {
          pokemon: { img: imgBasehref + "113.png", name: "Chansey" },
          method: "Evolve Happiny holding Oval Stone",
        },
        {
          pokemon: { img: imgBasehref + "242.png", name: "Blissey" },
          method: "Evolve Chansey with friendship",
        },

        /* ---------------- Route 209 ---------------- */

        {
          pokemon: { img: imgBasehref + "438.png", name: "Bonsly" },
          method: "(Pearl) Route 209",
        },
        {
          pokemon: { img: imgBasehref + "185.png", name: "Sudowoodo" },
          method: "Level up Bonsly knowing Mimic",
        },

        /* ---------------- Fishing ---------------- */
        {
          pokemon: { img: imgBasehref + "118.png", name: "Goldeen" },
          method: "Good Rod — Route 209",
        },
        {
          pokemon: { img: imgBasehref + "119.png", name: "Seaking" },
          method: "Evolve from Goldeen at level 33",
        },
        {
          pokemon: { img: imgBasehref + "339.png", name: "Barboach" },
          method: "Good Rod — Mt Coronet",
        },
        {
          pokemon: { img: imgBasehref + "340.png", name: "Whiscash" },
          method: "Evolve from Barboach at level 30",
        },
        {
          pokemon: { img: imgBasehref + "456.png", name: "Finneon" },
          method: "Good Rod — Route 205 South",
        },
        {
          pokemon: { img: imgBasehref + "457.png", name: "Lumineon" },
          method: "Evolve from Finneon at level 31",
        },

        /* ---------------- Solaceon / 214 / 213 ---------------- */
        {
          pokemon: { img: imgBasehref + "201.png", name: "Unown" },
          method: "Solaceon Ruins",
        },
        {
          pokemon: { img: imgBasehref + "203.png", name: "Girafarig" },
          method: "Route 214",
        },
        {
          pokemon: { img: imgBasehref + "449.png", name: "Hippopotas" },
          method: "Ruin Maniac Cave",
        },
        {
          pokemon: { img: imgBasehref + "450.png", name: "Hippowdon" },
          method: "Evolve from Hippopotas at level 34",
        },
        {
          pokemon: { img: imgBasehref + "278.png", name: "Wingull" },
          method: "Route 213",
        },
        {
          pokemon: { img: imgBasehref + "279.png", name: "Pelipper" },
          method: "Evolve from Wingull at level 25",
        },
        {
          pokemon: { img: imgBasehref + "223.png", name: "Remoraid" },
          method: "Good Rod — Route 213",
        },
        {
          pokemon: { img: imgBasehref + "224.png", name: "Octillery" },
          method: "Evolve from Remoraid at level 25",
        },

        /* ---------------- Great Marsh ---------------- */
        {
          pokemon: { img: imgBasehref + "194.png", name: "Wooper" },
          method: "Great Marsh",
        },
        {
          pokemon: { img: imgBasehref + "195.png", name: "Quagsire" },
          method: "Evolve from Wooper at level 20",
        },
        {
          pokemon: { img: imgBasehref + "298.png", name: "Azurill" },
          method: "Great Marsh",
        },
        {
          pokemon: { img: imgBasehref + "183.png", name: "Marill" },
          method: "Great Marsh",
        },
        {
          pokemon: { img: imgBasehref + "184.png", name: "Azumarill" },
          method: "Evolve from Marill at level 18",
        },
        {
          pokemon: { img: imgBasehref + "455.png", name: "Carnivine" },
          method: "Great Marsh binocular rotation",
        },
        {
          pokemon: { img: imgBasehref + "451.png", name: "Skorupi" },
          method: "Great Marsh binocular rotation",
        },
        {
          pokemon: { img: imgBasehref + "452.png", name: "Drapion" },
          method: "Evolve from Skorupi at level 40",
        },
        {
          pokemon: { img: imgBasehref + "453.png", name: "Croagunk" },
          method: "Great Marsh binocular rotation",
        },
        {
          pokemon: { img: imgBasehref + "454.png", name: "Toxicroak" },
          method: "Evolve from Croagunk at level 37",
        },

        /* ---------------- Trophy Garden ---------------- */
        {
          pokemon: { img: imgBasehref + "172.png", name: "Pichu" },
          method: "Trophy Garden",
        },
        {
          pokemon: { img: imgBasehref + "025.png", name: "Pikachu" },
          method: "Evolve from Pichu by friendship",
        },
        {
          pokemon: { img: imgBasehref + "026.png", name: "Raichu" },
          method: "Use Thunder Stone on Pikachu",
        },
      ],
    },
    fantina: {
      headerTitle: "Pre Badge 5 - Fantina",
      headerImg: badgeBasehref + "Fantina.png",
      headerImgAlt: "Fantina as she appeared in Pokémon Diamond and Pearl",

      summaryShort: `There’s two gyms to pick from and both need to be defeated to advance the plot, so grab two badges in a row.`,
      summaryHtml: `
        <p>
          There’s two gyms to pick from and both need to be defeated to advance the plot, so grab two badges in a row. Do Maylene’s first from Veilstone City. Afterwards you’ll need to help Lucas/Dawn get their pokedex back. Then get Crasher Wake’s badge from Pastoria City. A Galactic Grunt will appear outside the Great Marsh who you can start chasing down to obtain the SecretPotion from Cynthia. Head all the way up to Celestic Town to continue the plot and return to battle Fantina. That’s right, three gym leaders in a row without any pokemon.
        </p>

        <p>
          <strong>End of part 4:</strong><br/>
          Caught 110, Remaining 41<br/>
        </p>

        ${guideSource}
  `,

      rows: [],
    },
    byron: {
      headerTitle: "Pre Badge 6 - Byron",
      headerImg: badgeBasehref + "Byron.png",
      headerImgAlt: "Byron as he appeared in Pokémon Diamond and Pearl",

      summaryShort: `OK, now you can start to get some new pokemon! You can now use Surf which means there’s a few new areas you can reach.`,
      summaryHtml: `
        <h5>Route 218</h5>
        <p>
          West of Jubilife City you can finally venture further than the pier. Surfing on the water you’ll encounter a Tentacool.
        </p>
        <pre>
          Tentacool → Lv. 30 → Tentacruel
          Glameow → Lv. 38 → Purugly
        </pre>

        <h5>Canalave City and Iron Island</h5>
        <p>
          If you’ve caught everything so far, now is the time to do this section with another temporary double battle partner (i.e. free healing). In the south western part of Canalave City you’ll find a sailor next to a boat who will take you to Iron Island. You’ll also pick up Strength HM on the way in.
        </p>
        <p>
          If you venture far enough into the cave you’ll meet Riley who will team up with you and his Lucario. On this floor you have the rare opportunity to catch a wild trade evolution pokemon – Steelix! Run around the small section before you meet Riley for the chance to catch it solo. Completing this area of the cave and meeting Team Galactic will end your quest here. Riley will give you an egg, make sure you have a spare slot in your team. The egg will contain a Riolu which cannot be found in the wild. Another happiness evolution, I’m sure you know the drill by now.
        </p>
        <pre>
          Steelix
          Riolu → Happiness (day time) → Lucario
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          There isn’t really much to say about this section of the game. You have few pokemon that actually need to level up properly and you have plenty of new trainers to battle, particularly along the sea routes to Route 221.
        </p>

        <p>
          <strong>End of part 5:</strong><br/>
          Caught 115, Remaining 36
        </p>

        ${guideSource}
  `,

      rows: [
        /* --------------------------- Route 218 -------------------------------- */
        {
          pokemon: { img: imgBasehref + "072.png", name: "Tentacool" },
          method: "Surf on Route 218",
        },
        {
          pokemon: { img: imgBasehref + "073.png", name: "Tentacruel" },
          method: "Evolve from Tentacool at level 30",
        },

        {
          pokemon: { img: imgBasehref + "431.png", name: "Glameow" },
          method: "(Pearl) Route 218",
        },
        {
          pokemon: { img: imgBasehref + "432.png", name: "Purugly" },
          method: "Evolve Glameow at level 38",
        },
        /* --------------------------- Iron Island -------------------------------- */
        {
          pokemon: { img: imgBasehref + "208.png", name: "Steelix" },
          method: "Iron Island (wild encounter before meeting Riley)",
        },
        {
          pokemon: { img: imgBasehref + "447.png", name: "Riolu" },
          method: "Egg from Riley after clearing Iron Island",
        },
        {
          pokemon: { img: imgBasehref + "448.png", name: "Lucario" },
          method: "Evolve Riolu with high friendship during the day",
        },
      ],
    },
    candice: {
      headerTitle: "Pre Badge 7 - Candice",
      headerImg: badgeBasehref + "Candice.png",
      headerImgAlt: "Candice as she appeared in Pokémon Diamond and Pearl",

      summaryShort: `Once you’ve cleared the gym you’ll officially start the main Galactic part of the plot. Go to Canalave Library to meet Prof Rowan and you’ll soon be sent on a mission to check out the lakes of Sinnoh. Let’s do a detour first.`,
      summaryHtml: `
        <h5>Wayward Cave</h5>
        <p>
          Instead of going through the normal entrance, there’s a hidden one underneath the cycling road. With Strength you can enter the cave to find the dragon type, Gible, found in the basement levels.
        </p>
        <pre>
          Gible → Lv. 24 → Gabite → Lv. 48 → Garchomp
        </pre>
        <p>
          Getting a Garchomp will take a while! Reaching the end of this stretch of the cave will reward you with the Earthquake TM. Teaching this to Gible is a great idea as its best Ground type move from levelling up is Dig. Garchomp will also be ready for the Elite Four later ;)
        </p>

        <h5>Team Galactic and the Lakes</h5>
        <p>
          Begin the Galactic plot at Lake Valor south of Veilstone City, then return to Lake Verity near your hometown. Defeat the commanders at both locations to progress.
        </p>

        <h5>Mt Coronet</h5>
        <p>
          To reach Lake Acuity, Fly to Celestic Town and enter Mt Coronet from the north. New floors open up with Strength. Inside is the famous Feebas fishing area.
        </p>
        <pre>
          Feebas → Level up with Beauty stat at least 170 → Milotic
        </pre>
        <p>
          Only four water tiles per day can yield Feebas, each with a 50% catch chance. Catch a female and wait until Snowpoint City to evolve it properly with poffins. Recommended natures are Modest, Mild, Rash or Quiet.
        </p>

        <h5>Route 216 / 217</h5>
        <p>
          Exiting Mt Coronet brings you to the snowy routes. Keep an eye out for the Rock Climb HM during the blizzards.
        </p>
        <pre>
          Sneasel
          Snover → Lv. 40 → Abomasnow
        </pre>
        <p>
          We can’t evolve Sneasel yet due to lack of a Razor Claw.
        </p>

        <h5>Snowpoint City</h5>
        <p>
          Skip Acuity Lakefront for now. While in town you may be tempted to trade a Medicham for a Haunter—don’t do it, the Haunter holds an Everstone! This is a story section only.
        </p>

        <h5>Levelling Tips</h5>
        <p>
          Snover is the biggest levelling challenge due to its high evolution level. Make use of trainers on Routes 216 and 217 or gym trainers if available. With Fly unlocked, plenty of rematch opportunities are open to you across Sinnoh.
        </p>

        <p>
          <strong>End of part 6:</strong><br/>
          Caught 123, Remaining 28
        </p>

        ${guideSource}
  `,

      rows: [
        /* --------------------------- Wayward Cave --------------------------- */
        {
          pokemon: { img: imgBasehref + "443.png", name: "Gible" },
          method: "Wayward Cave hidden entrance (basement)",
        },
        {
          pokemon: { img: imgBasehref + "444.png", name: "Gabite" },
          method: "Evolve from Gible at level 24",
        },
        {
          pokemon: { img: imgBasehref + "445.png", name: "Garchomp" },
          method: "Evolve from Gabite at level 48",
        },

        /* --------------------------- Mt Coronet ----------------------------- */
        {
          pokemon: { img: imgBasehref + "349.png", name: "Feebas" },
          method: "Mt Coronet fishing (4 daily tiles)",
        },
        {
          pokemon: { img: imgBasehref + "350.png", name: "Milotic" },
          method: "Level up Feebas with Beauty ≥ 170",
        },

        /* --------------------------- Routes 216 / 217 ----------------------- */
        {
          pokemon: { img: imgBasehref + "215.png", name: "Sneasel" },
          method: "Route 216 / 217",
        },
        {
          pokemon: { img: imgBasehref + "459.png", name: "Snover" },
          method: "Route 216 / 217",
        },
        {
          pokemon: { img: imgBasehref + "460.png", name: "Abomasnow" },
          method: "Evolve from Snover at level 40",
        },
      ],
    },
    volkner: {
      headerTitle: "Pre Badge 8 - Volkner",
      headerImg: badgeBasehref + "Volkner.png",
      headerImgAlt: "Volkner as he appeared in Pokémon Diamond and Pearl",

      summaryShort: `Now you can use Rock Climb! Only one more badge and one more HM move stops you from exploring everywhere before the Elite Four.`,
      summaryHtml: `
        <p>
          Now you can use Rock Climb! Head back to Acuity Lakefront and climb up the rocks to finally start the finale of the Galactic quest. You’ll need to infiltrate the Veilstone Galactic Building, then free the Lake Trio. Cyrus will retreat to Mt Coronet.
        </p>

        <h5>Mt Coronet</h5>
        <p>
          Enter Mt Coronet between Oreburgh and Hearthome and scale the wall using Rock Climb. No new pokemon appear until reaching the summit, where you’ll face Cyrus again and trigger the arrival of the box legendary.
        </p>
        <pre>
          Palkia
        </pre>
        <p>
          You can use your Master Ball here but it may be wiser to save it for a roaming legendary or post-game. Status effects and patience with Ultra/Dusk/Timer Balls work just as well.
        </p>

        <h5>Sunyshore City</h5>
        <p>
          Travel east from the Valor Lakefront to reach Sunyshore City. Route 222 has no new pokemon. Head north of the city and surf the surrounding waters.
        </p>
        <pre>
          Mantyke → Level up with Remoraid in party → Mantine
        </pre>

        <h5>The Lake Trio</h5>
        <p>
          Before challenging the final gym leader, return to each of Sinnoh’s lakes to catch Azelf, Uxie, and Mesprit. Azelf and Uxie function like normal legendaries, while Mesprit roams Sinnoh.
        </p>
        <p>
          Mesprit flees on the first turn of every encounter. Use the Poketch Map Marker to track it, weaken it over multiple encounters, and try Quick Balls or Mean Look strategies. Status effects persist between encounters.
        </p>
        <pre>
          Azelf
          Mesprit
          Uxie
        </pre>

        <p>
          Once these pokemon are captured, it’s finally time to challenge Volkner and obtain the final badge needed to use Waterfall.
        </p>

        <h5>Levelling Tips</h5>
        <p>
          You’re mad if you need levelling tips for this part! The only pokemon that evolve in this section will do so in one level once their requirements are met.
        </p>

        <p>
          <strong>End of part 7:</strong><br/>
          Caught 129, Remaining 22
        </p>

        ${guideSource}
  `,

      rows: [
        /* --------------------------- Mt Coronet (gated) ------------------------- */
        {
          pokemon: { img: imgBasehref + "484.png", name: "Palkia" },
          method: "Mt Coronet summit encounter",
        },

        /* --------------------------- Sunyshore waters --------------------------- */
        {
          pokemon: { img: imgBasehref + "458.png", name: "Mantyke" },
          method: "Surf north of Sunyshore City",
        },
        {
          pokemon: { img: imgBasehref + "226.png", name: "Mantine" },
          method: "Level up Mantyke with Remoraid in party",
        },

        /* --------------------------- The Lake Trio ------------------------------ */
        {
          pokemon: { img: imgBasehref + "480.png", name: "Uxie" },
          method: "Lake Acuity cavern",
        },
        {
          pokemon: { img: imgBasehref + "481.png", name: "Mesprit" },
          method: "Lake Verity cavern → roaming Sinnoh",
        },
        {
          pokemon: { img: imgBasehref + "482.png", name: "Azelf" },
          method: "Lake Valor cavern",
        },
      ],
    },
    "pre-elite-four": {
      headerTitle: "Pre Elite Four",
      headerImg: badgeBasehref + "Cynthia.png",
      headerImgAlt: "Cynthia as she appeared in Pokémon Diamond and Pearl",

      summaryShort: `This last badge lets you use Waterfall which lets you find…ONE new pokemon!`,
      summaryHtml: `
        <h5>Victory Road</h5>
        <p>
          With the final badge earned, you can now use Waterfall. Head back to the beach north of Sunyshore City where you’ll meet Jasmine from Johto who will give you the Waterfall HM.
        </p>
        <p>
          On your way through Victory Road, keep an eye out for items, specifically the Razor Claw. Attach this to your Sneasel and level it up at night to evolve it.
        </p>
        <pre>
          Sneasel → Level up at night holding Razor Claw → Weavile
        </pre>
        <p>
          With that simple task done, there’s nothing else left to catch. Go and conquer the Elite Four!
        </p>

        <p>
          <strong>End of part 8:</strong><br/>
          Caught 130, Remaining 21
        </p>

        ${guideSource}
  `,

      rows: [
        /* --------------------------- Victory Road ---------------------------- */
        {
          pokemon: { img: imgBasehref + "461.png", name: "Weavile" },
          method: "Level up Sneasel at night while holding Razor Claw",
        },
      ],
    },
    "post-game": {
      headerTitle: "Post Game",
      headerImg: "assets/images/Diamond and Pearl/badges/Spr_HGSS_Oak.png",
      headerImgAlt: "Prof Oak as he appeared in HeartGold and SoulSilver",

      summaryShort: `The main story challenge has technically ended but feel free to work on that pokedex as much as you can by yourself!`,

      summaryHtml: `<p>
          The main story challenge has technically ended but feel free to work on that pokedex as much as you can by yourself! Go and see Professor Rowan and, if you’ve seen all 150 pokemon in Sinnoh (the remaining 31 would be from battling trainers. Check Serebii if you’re missing any for the trainer locations and also visit Celestic Town where Cynthia’s grandmother will show you a picture of the other box legendary), you’ll get the National Dex and the Pokeradar. There is an island in the north eastern reaches of Sinnoh which you can visit, but before you do that, here’s a few side quests in the Sinnoh mainland. For any stone evolutions, these can be found in the Sinnoh Underground with much higher spawn rates!
        </p>

        <h5>Ghost at the Haunted Chateau</h5>
        <p>
          Visit the Old Chateau at night and head to the room upstairs which has the TV. Save your game and encounter Rotom! It plays the music for legendary pokemon but it isn’t one ;)
        </p>
        <pre>
          Rotom
        </pre>

        <h5>Hearthome City</h5>
        <p>
          Enter the house to the right of the pokemon center and talk to Bebe who will give you an Eevee. Getting a female would be beneficial but you can obtain a Ditto with the Pokeradar.
        </p>
        <pre>
          Eevee → Fire Stone → Flareon
          Eevee → Water Stone → Vaporeon
          Eevee → Thunder Stone → Jolteon
          Eevee → Happiness (daytime) → Espeon
          Eevee → Happiness (night time) → Umbreon
          Eevee → Lv up in Eterna Forest → Leafeon
          Eevee → Lv up on Route 217 → Glaceon
        </pre>

        <h5>Another Roaming Pokemon</h5>
        <p>
          Go to Canalave City and enter the house next to the boat that takes you to Iron Island. Speak to the boy and his mother, then speak to the sailor who will take you to a new island where you can interact with Cresselia who will flee and start roaming too. Cresselia can be found on the Map Marker app like with the Lake Trio.
        </p>
        <pre>
          Cresselia
        </pre>

        <h5>The Antimatter Legendary</h5>
        <p>
          Go to Sendoff Spring which is north east from Valor Lakefront Hotel. When you enter Turnback Cave you’ll need to find Giratina amongst the maze. You can either do this randomly and hope for good luck or check out a guide on how to solve it quickly. Once you find Giratina, save your game and prepare to catch it at a whopping Lv70. Either use your Master Ball if you still have it or bring your strongest ‘mons (or come back later once you’re stronger). Dusk Balls work great and so do Timer Balls if the battle drags on.
        </p>
        <pre>
          Giratina
        </pre>

        <h5>Daily Swarming Pokemon</h5>
        <p>
          This will contribute a lot towards your National Dex. Every day, go to Lucas/Dawn’s house in Sandgem Town and speak to their little sister who will tell you of a swarm of pokemon not native to Sinnoh on a certain route. This changes every day. Sadly, there’s no way to soft reset to get the desired pokemon. Changing the clock gets a bit tricky with timings but you’re not going to cheat are you? I won’t list their routes since the girl will tell you, but the pokemon available are:
        </p>
        <pre>
          Pidgey → Lv. 18 → Pidgeotto → Lv. 36 → Pidgeot
          Magnemite → Lv. 30 → Magneton → Lv up in Mt Coronet → Magnezone
          Farfetch’d
          Doduo → Lv. 31 → Dodrio
          Drowzee → Lv. 26 → Hypno
          Krabby → Lv. 28 → Kingler
          Voltorb → Lv. 30 → Electrode
          Cubone → Lv. 28 → Marowak
          Lickitung → Lv up knowing Rollout → Lickilicky
          Natu → Lv. 25 → Xatu
          Dunsparce
          Snubbull → Lv. 23 → Granbull
          Swinub → Lv. 33 → Piloswine → Lv up knowing Ancientpower → Mamoswine
          Corsola
          Delibird
          Phanpy → Lv. 25 → Donphan
          Smoochum → Lv. 30 → Jynx
          Zigzagoon → Lv. 20 → Linoone
          Surskit → Lv. 22 → Masquerain
          Slakoth → Lv. 18 → Vigoroth → Lv. 36 → Slaking
          Makuhita → Lv. 24 → Hariyama
          Nosepass → Lv up in Mt Coronet → Probopass
          Skitty → Moon Stone → Delcatty
          Electrike → Lv. 26 → Manectric
          Spoink → Lv. 32 → Grumpig
          Spinda
          Absol
          Beldum → Lv. 20 → Metang → Lv. 45 → Metagross
        </pre>

        <h5>Pokeradar</h5>
        <p>
          Another big contributor, if you use the Pokeradar within patches of grass you will have a chance of finding pokemon that are otherwise unobtainable. Some of these routes are part of the new areas yet to be mentioned in this walkthrough.
        </p>
        <pre>
          (Route 201) Nidoran♀ → Lv. 16 → Nidorina → Moon Stone → Nidoqueen
          (Route 201) Nidoran♂ → Lv. 16 → Nidorino → Moon Stone → Nidoking
          (Route 202) Sentret → Lv. 15 → Furret
          (Route 203) Ralts → Lv. 20 → Kirlia → Lv. 30 → Gardevoir
          (Route 203) Ralts (male) → Lv. 20 → Kirlia (male) → Dawn Stone → Gallade
          (Route 204 North) Sunkern → Sun Stone → Sunflora
          (Route 205 North) Slowpoke → Lv. 37 → Slowbro
          (Route 205 South) Hoppip → Lv. 18 → Skiploom → Lv. 27 → Jumpluff
          (Route 206) Baltoy → Lv. 36 → Claydol
          (Route 207) Stantler
          (Route 210 North) Bagon → Lv. 30 → Shelgon → Lv. 50 → Salamence
          (Route 210 South) Tauros
          (Route 210 South) Miltank
          (Route 211 East) Swablu → Lv. 35 → Altaria
          (Route 211 West) Tyrogue → Lv. 20 Attack higher than Defense → Hitmonlee
          (Route 211 West) Tyrogue → Lv. 20 Defense higher than Attack → Hitmonchan
          (Route 211 West) Tyrogue → Lv. 20 Attack same as Defense → Hitmontop
          (Route 212 North) Smeargle
          (Route 212 South) Grimer → Lv. 38 → Muk
          (Route 213) Swellow
          (Route 214) Houndoom
          (Route 216) Snorunt → Lv. 42 → Glalie
          (Route 216) Snorunt (female) → Dawn Stone → Froslass
          (Route 218) Ditto
          (Route 224) Duskull → Lv. 37 → Dusclops
          (Route 225) Mankey → Lv. 28 → Primeape
          (Route 227) Torkoal
          (Route 228) Trapinch → Lv. 35 → Vibrava → Lv. 45 → Flygon
          (Route 229) Venonat → Lv. 31 → Venomoth
          (Route 230) Togepi → Happiness → Togetic → Shiny Stone → Togekiss
          (Eterna Forest) Nincada → Lv. 20 → Ninjask
          (Eterna Forest) Nincada → Lv. 20 with spare slot in party → Shedinja
          (Lake Verity/Valor) Wobbuffet
          (Mt Coronet external snowy area) Loudred → Lv. 40 → Exploud
          (Valley Windworks) Mareep → Lv. 15 → Flaaffy → Lv. 30 → Ampharos
        </pre>

        <p>
          Because we can’t get trade evolutions, Pearl only gets 8 out of 9 version exclusives from the pokeradar. And as a few of these are already evolved, there’s a few eggs to hatch:
        </p>
        <pre>
          Swellow → Breed → Taillow
          Wobbuffet → Breed holding Lax Incense → Wynaut
          Loudred/Exploud → Breed → Whismur
          Houndoom → Breed → Houndour
        </pre>

        <h5>Daily Trophy Garden Pokemon</h5>
        <p>
          Return to the mansion on Route 212 and go to Mr. Backlot’s office and SAVE the game before you speak to him. Unlike the swarms, the daily pokemon that are added to the garden CAN be soft-reset to get the desired pokemon. Mr. Backlot will claim that he saw a certain pokemon in the garden and his butler will rush off to populate the garden with these pokemon to stop his master from being branded as a liar! A lot of these will be baby pokemon that you already own, but there are a few new additions.
        </p>
        <pre>
          Jigglypuff → Moon Stone → Wigglytuff
          Porygon
          Plusle
          Minun
          Castform
          Meowth → Lv. 28 → Persian
          Mime Jr → Lv up knowing Mimic → Mr Mime
        </pre>

        <p>
          And of course, breed Jigglypuff:
        </p>
        <pre>
          Jigglypuff/Wigglytuff → Breed → Igglybuff
        </pre>

        <h5>More Great Marsh Daily Pokemon</h5>
        <pre>
          Paras → Lv. 24 → Parasect
          Exeggcute → Leaf Stone → Exeggutor
          Kangaskhan
          Shroomish → Lv. 23 → Breloom
          Gulpin → Lv. 26 → Swalot
          Yanma → Lv up knowing Ancientpower → Yanmega
        </pre>

        <h5>Doin’ more Diggin’</h5>
        <p>
          Head to the Sinnoh Underground. Not only are you likely to start swimming in evolution stones which are now much more common, you may also stumble across extra fossils. In fact, every other fossil excluding the one you couldn’t get earlier (Cranidos/Shieldon) can be found meaning that you now have these ancient dudes in your dex:
        </p>
        <pre>
          Omanyte → Lv. 40 → Omastar
          Kabuto → Lv. 40 → Kabutops
          Aerodactyl
          Anorith → Lv. 40 → Armaldo
          Lileep → Lv. 40 → Cradily
        </pre>

        <h5>Victory Road revisited</h5>
        <p>
          Enter Victory Road from the Pokemon League side and there is a cave on the right hand side that previously had someone blocking it. This is now open for you to visit. Down here you will team up with another double battle partner (Marley and her Arcanine). You can explore the room in full with her accompanying you but best to come back afterwards with Surf to make it easier. Surfing could yield a Lapras!
        </p>
        <pre>
          Lapras
        </pre>

        <h5>Route 224</h5>
        <p>
          Emerge from Victory Road to find a new seaside route. There are new pokemon here but since you can’t Fly back here, either make the most of this visit or catch them all on a different route. Weepinbell and Gloom are the main pokemon to look for here.
        </p>
        <pre>
          Gloom → Leaf Stone → Vileplume
          Gloom → Sun Stone → Bellossom
          Weepinbell → Leaf Stone → Victreebel
        </pre>

        <p>
          Once you’re back in civilization, don’t forget to breed them!
        </p>
        <pre>
          Gloom/Vileplume/Bellossom → Breed → Oddish
          Weepinbell/Victreebel → Breed → Bellsprout
        </pre>

        <h5>To the Battle Park</h5>
        <p>
          Take the ferry from Snowpoint City which will take you to the island in the north eastern part of Sinnoh where the climate is much warmer. You’ll first be given an intro to the Battle Park, after which you are free to explore. If you have the National Dex (which of course you do!) then you can leave the Fight Area and see other routes. Talk to the fisherman by the pier to get the Super Rod!
        </p>

        <h5>Super Fishing Tour</h5>
        <pre>
          (Pokemon League) Luvdisc
          (Route 219/221) Clamperl
          (Route 220) Chinchou → Lv. 27 → Lanturn
          (Canalave City) Staryu → Water Stone → Starmie
          (Iron Island) Qwilfish
          (Route 205) Shellder → Water Stone → Cloyster
          (Great Marsh) Carvanha → Lv. 30 → Sharpedo
          (Celestic Town) Corphish → Lv. 30 → Crawdaunt
          (Mt Coronet waterfall room) Dratini → Lv. 30 → Dragonair → Lv. 55 → Dragonite
          (Route 223) Wailmer → Lv. 40 → Wailord
        </pre>

        <h5>Route 225</h5>
        <p>
          OK so let’s return to the Fight Area and head north to Route 225. This complicated route holds a few new pokemon to catch. Banette is the only one that will only appear at night, the others appear at all times of the day:
        </p>
        <pre>
          Spearow → Lv. 20 → Fearow
          Rattata → Lv. 20 → Raticate
          Banette
        </pre>

        <p>
          Breed your Banette of course!
        </p>
        <pre>
          Banette → Breed → Shuppet
        </pre>

        <p>
          Use a Good Rod to catch a Poliwag and/or a Super Rod for Poliwhirl:
        </p>
        <pre>
          Poliwag → Lv. 25 → Poliwhirl → Water Stone → Poliwrath
        </pre>

        <h5>Route 226</h5>
        <p>
          You can have a respite at the Survival Area and then leave the eastern side to reach Route 226 which requires Rock Climb. There’s nothing new in the grass but the water areas hold a couple of pokemon obtained from fishing. Horsea can be caught with a Good Rod while Relicanth (and Seadra) can be found with a Super Rod.
        </p>
        <pre>
          Horsea → Lv. 32 → Seadra
          Relicanth
        </pre>

        <p>
          And surfing in the waters will let you encounter Spheal
        </p>
        <pre>
          Spheal → Lv. 32 → Sealeo → Lv. 44 → Walrein
        </pre>

        <h5>Route 228</h5>
        <p>
          Skip Route 227 for now, we’ll head there last. Route 228 is covered in sandstorms! Throw yourself into the grass to find a few more pokemon to add to the collection:
        </p>
        <pre>
          Diglett → Lv. 26 → Dugtrio
          Cacnea → Lv. 32 → Cacturne
          Rhydon
        </pre>

        <p>
          And then breed your Rhydon for a Rhyhorn:
        </p>
        <pre>
          Rhydon → Breed → Rhyhorn
        </pre>

        <h5>Route 229</h5>
        <p>
          South from Route 228 is a lush, grassy route with plenty of grass and bug types. Quite a few new pokemon here:
        </p>
        <pre>
          (Day time) Ledian
          (Night time) Ariados
          Volbeat
          Illumise
          Pinsir
        </pre>

        <p>
          And then obviously breed your new bugs:
        </p>
        <pre>
          Ledian → Breed → Ledyba
          Ariados → Breed → Spinarak
        </pre>

        <h5>Route 227</h5>
        <p>
          There’s nothing interesting for your dex at the Resort Area, though you may want to go there to enable you to Fly there. Route 230 also has nothing new, so backtrack to Route 227 and embark on the final stretch! This is the last time you’ll need to use your pokeradar to get Torkoal. Through regular encounters you will find:
        </p>
        <pre>
          Skarmory
          Numel → Lv. 33 → Camerupt
          Weezing
        </pre>

        <p>
          And you can either catch a Koffing within Stark Mountain (rare) or breed Weezing:
        </p>
        <pre>
          Weezing → Breed → Koffing
        </pre>

        <h5>Stark Mountain</h5>
        <p>
          You will team up with Buck here, so it’s a great opportunity to train the mountains of pokemon you’ve caught since you beat the Elite Four. I found this very handy to level up the late evolvers (Pupitar, Dragonair, Shelgon etc). Only one evolution line to catch here:
        </p>
        <pre>
          Slugma → Lv. 38 → Magcargo
        </pre>

        <p>
          Once you’ve reached Team Galactic at the very back of the mountain, Buck will leave with the Magma Stone. Return to the Survival Area and go to the battleground café to confront him and he will return the stone. Go back to the room in Stark Mountain to battle Heatran! Timer and Dusk balls will be your friends here.
        </p>
        <pre>
          Heatran
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          You have access to everywhere so the world is your Cloyster. Personally as mentioned above, I stuck to keeping Buck available as a double battle partner for endless healing but obviously train wherever you would like and re-battle whomever!
        </p>

        <p>
          <strong>End of the challenge:</strong><br/>
          Sinnoh Dex - Caught 132, Remaining 19<br/>
          National Dex - Caught 357, Remaining 136
        </p>
  
  ${guideSource}`,

      rows: [
        /* ================= Haunted Chateau ================= */
        {
          pokemon: { img: imgBasehref + "479.png", name: "Rotom" },
          method: "Old Chateau TV room (night only)",
        },

        /* ================= Eevee Line ================= */
        {
          pokemon: { img: imgBasehref + "133.png", name: "Eevee" },
          method: "Gift from Bebe in Hearthome City",
        },
        {
          pokemon: { img: imgBasehref + "136.png", name: "Flareon" },
          method: "Use Fire Stone on Eevee",
        },
        {
          pokemon: { img: imgBasehref + "134.png", name: "Vaporeon" },
          method: "Use Water Stone on Eevee",
        },
        {
          pokemon: { img: imgBasehref + "135.png", name: "Jolteon" },
          method: "Use Thunder Stone on Eevee",
        },
        {
          pokemon: { img: imgBasehref + "196.png", name: "Espeon" },
          method: "High friendship, level up during day",
        },
        {
          pokemon: { img: imgBasehref + "197.png", name: "Umbreon" },
          method: "High friendship, level up at night",
        },
        {
          pokemon: { img: imgBasehref + "470.png", name: "Leafeon" },
          method: "Level up Eevee in Eterna Forest",
        },
        {
          pokemon: { img: imgBasehref + "471.png", name: "Glaceon" },
          method: "Level up Eevee on Route 217",
        },

        /* ================= Roaming ================= */
        {
          pokemon: { img: imgBasehref + "488.png", name: "Cresselia" },
          method: "Fullmoon Island, then roaming Sinnoh",
        },

        /* ================= Turnback Cave ================= */
        {
          pokemon: { img: imgBasehref + "487.png", name: "Giratina" },
          method: "Turnback Cave (Lv. 70)",
        },

        /* ================= Daily Swarms ================= */
        {
          pokemon: { img: imgBasehref + "016.png", name: "Pidgey" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "017.png", name: "Pidgeotto" },
          method: "Evolve Pidgey at level 18",
        },
        {
          pokemon: { img: imgBasehref + "018.png", name: "Pidgeot" },
          method: "Evolve Pidgeotto at level 36",
        },

        {
          pokemon: { img: imgBasehref + "081.png", name: "Magnemite" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "082.png", name: "Magneton" },
          method: "Evolve Magnemite at level 30",
        },
        {
          pokemon: { img: imgBasehref + "462.png", name: "Magnezone" },
          method: "Level up Magneton in Mt Coronet",
        },

        {
          pokemon: { img: imgBasehref + "083.png", name: "Farfetch’d" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "084.png", name: "Doduo" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "085.png", name: "Dodrio" },
          method: "Evolve Doduo at level 31",
        },

        {
          pokemon: { img: imgBasehref + "096.png", name: "Drowzee" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "097.png", name: "Hypno" },
          method: "Evolve Drowzee at level 26",
        },

        {
          pokemon: { img: imgBasehref + "098.png", name: "Krabby" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "099.png", name: "Kingler" },
          method: "Evolve Krabby at level 28",
        },

        {
          pokemon: { img: imgBasehref + "100.png", name: "Voltorb" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "101.png", name: "Electrode" },
          method: "Evolve Voltorb at level 30",
        },

        {
          pokemon: { img: imgBasehref + "104.png", name: "Cubone" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "105.png", name: "Marowak" },
          method: "Evolve Cubone at level 28",
        },

        {
          pokemon: { img: imgBasehref + "108.png", name: "Lickitung" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "463.png", name: "Lickilicky" },
          method: "Level up Lickitung knowing Rollout",
        },

        {
          pokemon: { img: imgBasehref + "177.png", name: "Natu" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "178.png", name: "Xatu" },
          method: "Evolve Natu at level 25",
        },

        {
          pokemon: { img: imgBasehref + "206.png", name: "Dunsparce" },
          method: "Daily swarm",
        },

        {
          pokemon: { img: imgBasehref + "209.png", name: "Snubbull" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "210.png", name: "Granbull" },
          method: "Evolve Snubbull at level 23",
        },

        {
          pokemon: { img: imgBasehref + "220.png", name: "Swinub" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "221.png", name: "Piloswine" },
          method: "Evolve Swinub at level 33",
        },
        {
          pokemon: { img: imgBasehref + "473.png", name: "Mamoswine" },
          method: "Level up Piloswine knowing Ancientpower",
        },

        {
          pokemon: { img: imgBasehref + "222.png", name: "Corsola" },
          method: "Daily swarm",
        },

        {
          pokemon: { img: imgBasehref + "225.png", name: "Delibird" },
          method: "Daily swarm",
        },

        {
          pokemon: { img: imgBasehref + "231.png", name: "Phanpy" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "232.png", name: "Donphan" },
          method: "Evolve Phanpy at level 25",
        },

        {
          pokemon: { img: imgBasehref + "238.png", name: "Smoochum" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "124.png", name: "Jynx" },
          method: "Evolve Smoochum at level 30",
        },

        {
          pokemon: { img: imgBasehref + "263.png", name: "Zigzagoon" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "264.png", name: "Linoone" },
          method: "Evolve Zigzagoon at level 20",
        },

        {
          pokemon: { img: imgBasehref + "283.png", name: "Surskit" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "284.png", name: "Masquerain" },
          method: "Evolve Surskit at level 22",
        },

        {
          pokemon: { img: imgBasehref + "287.png", name: "Slakoth" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "288.png", name: "Vigoroth" },
          method: "Evolve Slakoth at level 18",
        },
        {
          pokemon: { img: imgBasehref + "289.png", name: "Slaking" },
          method: "Evolve Vigoroth at level 36",
        },

        {
          pokemon: { img: imgBasehref + "296.png", name: "Makuhita" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "297.png", name: "Hariyama" },
          method: "Evolve Makuhita at level 24",
        },

        {
          pokemon: { img: imgBasehref + "299.png", name: "Nosepass" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "476.png", name: "Probopass" },
          method: "Level up Nosepass in Mt Coronet",
        },

        {
          pokemon: { img: imgBasehref + "300.png", name: "Skitty" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "301.png", name: "Delcatty" },
          method: "Use Moon Stone on Skitty",
        },

        {
          pokemon: { img: imgBasehref + "309.png", name: "Electrike" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "310.png", name: "Manectric" },
          method: "Evolve Electrike at level 26",
        },

        {
          pokemon: { img: imgBasehref + "325.png", name: "Spoink" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "326.png", name: "Grumpig" },
          method: "Evolve Spoink at level 32",
        },

        {
          pokemon: { img: imgBasehref + "327.png", name: "Spinda" },
          method: "Daily swarm",
        },

        {
          pokemon: { img: imgBasehref + "359.png", name: "Absol" },
          method: "Daily swarm",
        },

        {
          pokemon: { img: imgBasehref + "374.png", name: "Beldum" },
          method: "Daily swarm",
        },
        {
          pokemon: { img: imgBasehref + "375.png", name: "Metang" },
          method: "Evolve Beldum at level 20",
        },
        {
          pokemon: { img: imgBasehref + "376.png", name: "Metagross" },
          method: "Evolve Metang at level 45",
        },
        /* ================= Pokeradar continued ================= */

        {
          pokemon: { img: imgBasehref + "029.png", name: "Nidoran♀" },
          method: "Pokeradar (Route 201)",
        },
        {
          pokemon: { img: imgBasehref + "030.png", name: "Nidorina" },
          method: "Evolve from Nidoran♀ at level 16",
        },
        {
          pokemon: { img: imgBasehref + "031.png", name: "Nidoqueen" },
          method: "Use Moon Stone on Nidorina",
        },

        {
          pokemon: { img: imgBasehref + "032.png", name: "Nidoran♂" },
          method: "Pokeradar (Route 201)",
        },
        {
          pokemon: { img: imgBasehref + "033.png", name: "Nidorino" },
          method: "Evolve from Nidoran♂ at level 16",
        },
        {
          pokemon: { img: imgBasehref + "034.png", name: "Nidoking" },
          method: "Use Moon Stone on Nidorino",
        },

        {
          pokemon: { img: imgBasehref + "161.png", name: "Sentret" },
          method: "Pokeradar (Route 202)",
        },
        {
          pokemon: { img: imgBasehref + "162.png", name: "Furret" },
          method: "Evolve from Sentret at level 15",
        },

        {
          pokemon: { img: imgBasehref + "280.png", name: "Ralts" },
          method: "Pokeradar (Route 203)",
        },
        {
          pokemon: { img: imgBasehref + "281.png", name: "Kirlia" },
          method: "Evolve from Ralts at level 20",
        },
        {
          pokemon: { img: imgBasehref + "282.png", name: "Gardevoir" },
          method: "Evolve from Kirlia at level 30",
        },
        {
          pokemon: { img: imgBasehref + "475.png", name: "Gallade" },
          method: "Use Dawn Stone on male Kirlia",
        },

        {
          pokemon: { img: imgBasehref + "191.png", name: "Sunkern" },
          method: "Pokeradar (Route 204 North)",
        },
        {
          pokemon: { img: imgBasehref + "192.png", name: "Sunflora" },
          method: "Use Sun Stone on Sunkern",
        },

        {
          pokemon: { img: imgBasehref + "079.png", name: "Slowpoke" },
          method: "Route 205 North",
        },
        {
          pokemon: { img: imgBasehref + "080.png", name: "Slowbro" },
          method: "Evolve Slowpoke at level 37",
        },

        {
          pokemon: { img: imgBasehref + "187.png", name: "Hoppip" },
          method: "Pokeradar (Route 205 South)",
        },
        {
          pokemon: { img: imgBasehref + "188.png", name: "Skiploom" },
          method: "Evolve from Hoppip at level 18",
        },
        {
          pokemon: { img: imgBasehref + "189.png", name: "Jumpluff" },
          method: "Evolve from Skiploom at level 27",
        },

        {
          pokemon: { img: imgBasehref + "343.png", name: "Baltoy" },
          method: "Pokeradar (Route 206)",
        },
        {
          pokemon: { img: imgBasehref + "344.png", name: "Claydol" },
          method: "Evolve from Baltoy at level 36",
        },

        {
          pokemon: { img: imgBasehref + "234.png", name: "Stantler" },
          method: "Route 207",
        },

        {
          pokemon: { img: imgBasehref + "371.png", name: "Bagon" },
          method: "Route 210 North",
        },
        {
          pokemon: { img: imgBasehref + "372.png", name: "Shelgon" },
          method: "Evolve Bagon at level 30",
        },
        {
          pokemon: { img: imgBasehref + "373.png", name: "Salamence" },
          method: "Evolve Shelgon at level 50",
        },

        {
          pokemon: { img: imgBasehref + "128.png", name: "Tauros" },
          method: "Pokeradar (Route 210 South)",
        },
        {
          pokemon: { img: imgBasehref + "241.png", name: "Miltank" },
          method: "Pokeradar (Route 210 South)",
        },

        {
          pokemon: { img: imgBasehref + "333.png", name: "Swablu" },
          method: "Pokeradar (Route 211 East)",
        },
        {
          pokemon: { img: imgBasehref + "334.png", name: "Altaria" },
          method: "Evolve from Swablu at level 35",
        },

        {
          pokemon: { img: imgBasehref + "236.png", name: "Tyrogue" },
          method: "Pokeradar (Route 211 West)",
        },
        {
          pokemon: { img: imgBasehref + "106.png", name: "Hitmonlee" },
          method: "Tyrogue evolve (Atk > Def)",
        },
        {
          pokemon: { img: imgBasehref + "107.png", name: "Hitmonchan" },
          method: "Tyrogue evolve (Def > Atk)",
        },
        {
          pokemon: { img: imgBasehref + "237.png", name: "Hitmontop" },
          method: "Tyrogue evolve (Atk = Def)",
        },

        {
          pokemon: { img: imgBasehref + "235.png", name: "Smeargle" },
          method: "Pokeradar (Route 212 North)",
        },

        {
          pokemon: { img: imgBasehref + "088.png", name: "Grimer" },
          method: "Pokeradar (Route 212 South)",
        },
        {
          pokemon: { img: imgBasehref + "089.png", name: "Muk" },
          method: "Evolve from Grimer at level 38",
        },

        {
          pokemon: { img: imgBasehref + "277.png", name: "Swellow" },
          method: "Pokeradar (Route 213)",
        },

        {
          pokemon: { img: imgBasehref + "229.png", name: "Houndoom" },
          method: "Route 214",
        },

        {
          pokemon: { img: imgBasehref + "361.png", name: "Snorunt" },
          method: "Pokeradar (Route 216)",
        },
        {
          pokemon: { img: imgBasehref + "362.png", name: "Glalie" },
          method: "Evolve Snorunt at level 42",
        },
        {
          pokemon: { img: imgBasehref + "478.png", name: "Froslass" },
          method: "Use Dawn Stone on female Snorunt",
        },

        {
          pokemon: { img: imgBasehref + "132.png", name: "Ditto" },
          method: "Pokeradar (Route 218)",
        },

        {
          pokemon: { img: imgBasehref + "355.png", name: "Duskull" },
          method: "Pokeradar (Route 224)",
        },
        {
          pokemon: { img: imgBasehref + "356.png", name: "Dusclops" },
          method: "Evolve Duskull at level 37",
        },

        {
          pokemon: { img: imgBasehref + "056.png", name: "Mankey" },
          method: "Pokeradar (Route 225)",
        },
        {
          pokemon: { img: imgBasehref + "057.png", name: "Primeape" },
          method: "Evolve Mankey at level 28",
        },

        {
          pokemon: { img: imgBasehref + "324.png", name: "Torkoal" },
          method: "Pokeradar (Route 227)",
        },

        {
          pokemon: { img: imgBasehref + "328.png", name: "Trapinch" },
          method: "Pokeradar (Route 228)",
        },
        {
          pokemon: { img: imgBasehref + "329.png", name: "Vibrava" },
          method: "Evolve Trapinch at level 35",
        },
        {
          pokemon: { img: imgBasehref + "330.png", name: "Flygon" },
          method: "Evolve Vibrava at level 45",
        },

        {
          pokemon: { img: imgBasehref + "048.png", name: "Venonat" },
          method: "Pokeradar (Route 229)",
        },
        {
          pokemon: { img: imgBasehref + "049.png", name: "Venomoth" },
          method: "Evolve Venonat at level 31",
        },

        {
          pokemon: { img: imgBasehref + "175.png", name: "Togepi" },
          method: "Pokeradar (Route 230)",
        },
        {
          pokemon: { img: imgBasehref + "176.png", name: "Togetic" },
          method: "Evolve Togepi by friendship",
        },
        {
          pokemon: { img: imgBasehref + "468.png", name: "Togekiss" },
          method: "Use Shiny Stone on Togetic",
        },

        {
          pokemon: { img: imgBasehref + "290.png", name: "Nincada" },
          method: "Pokeradar (Eterna Forest)",
        },
        {
          pokemon: { img: imgBasehref + "291.png", name: "Ninjask" },
          method: "Evolve Nincada at level 20",
        },
        {
          pokemon: { img: imgBasehref + "292.png", name: "Shedinja" },
          method: "Evolve Nincada at level 20 with empty party slot",
        },

        {
          pokemon: { img: imgBasehref + "202.png", name: "Wobbuffet" },
          method: "Pokeradar (Lake Verity/Valor)",
        },

        {
          pokemon: { img: imgBasehref + "294.png", name: "Loudred" },
          method: "Pokeradar (Mt Coronet snowy area)",
        },
        {
          pokemon: { img: imgBasehref + "295.png", name: "Exploud" },
          method: "Evolve Loudred at level 40",
        },

        {
          pokemon: { img: imgBasehref + "179.png", name: "Mareep" },
          method: "Pokeradar (Valley Windworks)",
        },
        {
          pokemon: { img: imgBasehref + "180.png", name: "Flaaffy" },
          method: "Evolve Mareep at level 15",
        },
        {
          pokemon: { img: imgBasehref + "181.png", name: "Ampharos" },
          method: "Evolve Flaaffy at level 30",
        },

        /* Eggs */
        {
          pokemon: { img: imgBasehref + "276.png", name: "Taillow" },
          method: "Breed Swellow",
        },
        {
          pokemon: { img: imgBasehref + "360.png", name: "Wynaut" },
          method: "Breed Wobbuffet holding Lax Incense",
        },
        {
          pokemon: { img: imgBasehref + "293.png", name: "Whismur" },
          method: "Breed Loudred or Exploud",
        },
        {
          pokemon: { img: imgBasehref + "228.png", name: "Houndour" },
          method: "Breed Houndoom",
        },

        /* ================= Daily Trophy Garden Pokémon ================= */
        {
          pokemon: { img: imgBasehref + "039.png", name: "Jigglypuff" },
          method: "Daily Trophy Garden Pokémon",
        },
        {
          pokemon: { img: imgBasehref + "040.png", name: "Wigglytuff" },
          method: "Use Moon Stone on Jigglypuff",
        },
        {
          pokemon: { img: imgBasehref + "137.png", name: "Porygon" },
          method: "Daily Trophy Garden Pokémon",
        },
        {
          pokemon: { img: imgBasehref + "311.png", name: "Plusle" },
          method: "Daily Trophy Garden Pokémon",
        },
        {
          pokemon: { img: imgBasehref + "312.png", name: "Minun" },
          method: "Daily Trophy Garden Pokémon",
        },
        {
          pokemon: { img: imgBasehref + "351.png", name: "Castform" },
          method: "Daily Trophy Garden Pokémon",
        },
        {
          pokemon: { img: imgBasehref + "052.png", name: "Meowth" },
          method: "Daily Trophy Garden Pokémon",
        },
        {
          pokemon: { img: imgBasehref + "053.png", name: "Persian" },
          method: "Evolve Meowth at level 28",
        },

        {
          pokemon: { img: imgBasehref + "439.png", name: "Mime Jr." },
          method: "Version‑exclusive encounter",
        },
        {
          pokemon: { img: imgBasehref + "122.png", name: "Mr. Mime" },
          method: "Level up Mime Jr. knowing Mimic",
        },

        {
          pokemon: { img: imgBasehref + "174.png", name: "Igglybuff" },
          method: "Breed Jigglypuff or Wigglytuff",
        },

        /* ================= More Great Marsh Daily Pokémon ================= */
        {
          pokemon: { img: imgBasehref + "046.png", name: "Paras" },
          method: "Great Marsh daily binocular Pokémon",
        },
        {
          pokemon: { img: imgBasehref + "047.png", name: "Parasect" },
          method: "Evolve Paras at level 24",
        },
        {
          pokemon: { img: imgBasehref + "102.png", name: "Exeggcute" },
          method: "Great Marsh daily binocular Pokémon",
        },
        {
          pokemon: { img: imgBasehref + "103.png", name: "Exeggutor" },
          method: "Use Leaf Stone on Exeggcute",
        },
        {
          pokemon: { img: imgBasehref + "115.png", name: "Kangaskhan" },
          method: "Great Marsh daily binocular Pokémon",
        },
        {
          pokemon: { img: imgBasehref + "285.png", name: "Shroomish" },
          method: "Great Marsh daily binocular Pokémon",
        },
        {
          pokemon: { img: imgBasehref + "286.png", name: "Breloom" },
          method: "Evolve Shroomish at level 23",
        },
        {
          pokemon: { img: imgBasehref + "316.png", name: "Gulpin" },
          method: "Great Marsh daily binocular Pokémon",
        },
        {
          pokemon: { img: imgBasehref + "317.png", name: "Swalot" },
          method: "Evolve Gulpin at level 26",
        },
        {
          pokemon: { img: imgBasehref + "193.png", name: "Yanma" },
          method: "Great Marsh daily binocular Pokémon",
        },
        {
          pokemon: { img: imgBasehref + "469.png", name: "Yanmega" },
          method: "Level up Yanma knowing Ancientpower",
        },

        /* ================= Doin’ More Diggin’ ================= */
        {
          pokemon: { img: imgBasehref + "138.png", name: "Omanyte" },
          method: "Underground fossil revival",
        },
        {
          pokemon: { img: imgBasehref + "139.png", name: "Omastar" },
          method: "Evolve Omanyte at level 40",
        },
        {
          pokemon: { img: imgBasehref + "140.png", name: "Kabuto" },
          method: "Underground fossil revival",
        },
        {
          pokemon: { img: imgBasehref + "141.png", name: "Kabutops" },
          method: "Evolve Kabuto at level 40",
        },
        {
          pokemon: { img: imgBasehref + "142.png", name: "Aerodactyl" },
          method: "Old Amber revival",
        },
        {
          pokemon: { img: imgBasehref + "347.png", name: "Anorith" },
          method: "Underground fossil revival",
        },
        {
          pokemon: { img: imgBasehref + "348.png", name: "Armaldo" },
          method: "Evolve Anorith at level 40",
        },
        {
          pokemon: { img: imgBasehref + "345.png", name: "Lileep" },
          method: "Underground fossil revival",
        },
        {
          pokemon: { img: imgBasehref + "346.png", name: "Cradily" },
          method: "Evolve Lileep at level 40",
        },

        /* ================= Victory Road Revisited ================= */
        {
          pokemon: { img: imgBasehref + "131.png", name: "Lapras" },
          method: "Surf in Victory Road (post‑game)",
        },

        /* ================= Route 224 ================= */
        {
          pokemon: { img: imgBasehref + "044.png", name: "Gloom" },
          method: "Route 224",
        },
        {
          pokemon: { img: imgBasehref + "045.png", name: "Vileplume" },
          method: "Use Leaf Stone on Gloom",
        },
        {
          pokemon: { img: imgBasehref + "182.png", name: "Bellossom" },
          method: "Use Sun Stone on Gloom",
        },
        {
          pokemon: { img: imgBasehref + "070.png", name: "Weepinbell" },
          method: "Route 224",
        },
        {
          pokemon: { img: imgBasehref + "071.png", name: "Victreebel" },
          method: "Use Leaf Stone on Weepinbell",
        },
        {
          pokemon: { img: imgBasehref + "043.png", name: "Oddish" },
          method: "Breed Gloom / Vileplume / Bellossom",
        },
        {
          pokemon: { img: imgBasehref + "069.png", name: "Bellsprout" },
          method: "Breed Weepinbell / Victreebel",
        },
        /* ================= Super Fishing Tour ================= */
        {
          pokemon: { img: imgBasehref + "370.png", name: "Luvdisc" },
          method: "Super Rod (Pokemon League)",
        },

        {
          pokemon: { img: imgBasehref + "366.png", name: "Clamperl" },
          method: "Super Rod (Route 219 / Route 221)",
        },

        {
          pokemon: { img: imgBasehref + "170.png", name: "Chinchou" },
          method: "Super Rod (Route 220)",
        },
        {
          pokemon: { img: imgBasehref + "171.png", name: "Lanturn" },
          method: "Evolve Chinchou at level 27",
        },

        {
          pokemon: { img: imgBasehref + "120.png", name: "Staryu" },
          method: "Super Rod (Canalave City)",
        },
        {
          pokemon: { img: imgBasehref + "121.png", name: "Starmie" },
          method: "Use Water Stone on Staryu",
        },

        {
          pokemon: { img: imgBasehref + "211.png", name: "Qwilfish" },
          method: "Super Rod (Iron Island)",
        },

        {
          pokemon: { img: imgBasehref + "090.png", name: "Shellder" },
          method: "Super Rod (Route 205)",
        },
        {
          pokemon: { img: imgBasehref + "091.png", name: "Cloyster" },
          method: "Use Water Stone on Shellder",
        },

        {
          pokemon: { img: imgBasehref + "318.png", name: "Carvanha" },
          method: "Super Rod (Great Marsh)",
        },
        {
          pokemon: { img: imgBasehref + "319.png", name: "Sharpedo" },
          method: "Evolve Carvanha at level 30",
        },

        {
          pokemon: { img: imgBasehref + "341.png", name: "Corphish" },
          method: "Super Rod (Celestic Town)",
        },
        {
          pokemon: { img: imgBasehref + "342.png", name: "Crawdaunt" },
          method: "Evolve Corphish at level 30",
        },

        {
          pokemon: { img: imgBasehref + "147.png", name: "Dratini" },
          method: "Super Rod (Mt Coronet waterfall room)",
        },
        {
          pokemon: { img: imgBasehref + "148.png", name: "Dragonair" },
          method: "Evolve Dratini at level 30",
        },
        {
          pokemon: { img: imgBasehref + "149.png", name: "Dragonite" },
          method: "Evolve Dragonair at level 55",
        },

        {
          pokemon: { img: imgBasehref + "320.png", name: "Wailmer" },
          method: "Super Rod (Route 223)",
        },
        {
          pokemon: { img: imgBasehref + "321.png", name: "Wailord" },
          method: "Evolve Wailmer at level 40",
        },

        /* ================= Route 225 ================= */
        {
          pokemon: { img: imgBasehref + "021.png", name: "Spearow" },
          method: "Route 225",
        },
        {
          pokemon: { img: imgBasehref + "022.png", name: "Fearow" },
          method: "Evolve Spearow at level 20",
        },

        {
          pokemon: { img: imgBasehref + "019.png", name: "Rattata" },
          method: "Route 225",
        },
        {
          pokemon: { img: imgBasehref + "020.png", name: "Raticate" },
          method: "Evolve Rattata at level 20",
        },

        {
          pokemon: { img: imgBasehref + "354.png", name: "Banette" },
          method: "Route 225 (night)",
        },
        {
          pokemon: { img: imgBasehref + "353.png", name: "Shuppet" },
          method: "Breed Banette",
        },

        {
          pokemon: { img: imgBasehref + "060.png", name: "Poliwag" },
          method: "Good Rod (Route 225)",
        },
        {
          pokemon: { img: imgBasehref + "061.png", name: "Poliwhirl" },
          method: "Evolve Poliwag at level 25",
        },
        {
          pokemon: { img: imgBasehref + "062.png", name: "Poliwrath" },
          method: "Use Water Stone on Poliwhirl",
        },

        /* ================= Route 226 ================= */
        {
          pokemon: { img: imgBasehref + "116.png", name: "Horsea" },
          method: "Good Rod (Route 226)",
        },
        {
          pokemon: { img: imgBasehref + "117.png", name: "Seadra" },
          method: "Evolve Horsea at level 32",
        },

        {
          pokemon: { img: imgBasehref + "369.png", name: "Relicanth" },
          method: "Super Rod (Route 226)",
        },

        {
          pokemon: { img: imgBasehref + "363.png", name: "Spheal" },
          method: "Wild encounter",
        },
        {
          pokemon: { img: imgBasehref + "364.png", name: "Sealeo" },
          method: "Evolve Spheal at level 32",
        },
        {
          pokemon: { img: imgBasehref + "365.png", name: "Walrein" },
          method: "Evolve Sealeo at level 44",
        },

        /* ================= Route 228 ================= */
        {
          pokemon: { img: imgBasehref + "050.png", name: "Diglett" },
          method: "Route 228",
        },
        {
          pokemon: { img: imgBasehref + "051.png", name: "Dugtrio" },
          method: "Evolve Diglett at level 26",
        },

        {
          pokemon: { img: imgBasehref + "331.png", name: "Cacnea" },
          method: "Route 228",
        },
        {
          pokemon: { img: imgBasehref + "332.png", name: "Cacturne" },
          method: "Evolve Cacnea at level 32",
        },

        {
          pokemon: { img: imgBasehref + "112.png", name: "Rhydon" },
          method: "Route 228",
        },
        {
          pokemon: { img: imgBasehref + "111.png", name: "Rhyhorn" },
          method: "Breed Rhydon",
        },

        /* ================= Route 229 ================= */
        {
          pokemon: { img: imgBasehref + "166.png", name: "Ledian" },
          method: "Route 229 (day)",
        },
        {
          pokemon: { img: imgBasehref + "165.png", name: "Ledyba" },
          method: "Breed Ledian",
        },

        {
          pokemon: { img: imgBasehref + "168.png", name: "Ariados" },
          method: "Route 229 (night)",
        },
        {
          pokemon: { img: imgBasehref + "167.png", name: "Spinarak" },
          method: "Breed Ariados",
        },

        {
          pokemon: { img: imgBasehref + "313.png", name: "Volbeat" },
          method: "Route 229",
        },
        {
          pokemon: { img: imgBasehref + "314.png", name: "Illumise" },
          method: "Route 229",
        },

        {
          pokemon: { img: imgBasehref + "127.png", name: "Pinsir" },
          method: "Wild encounter",
        },

        /* ================= Route 227 ================= */
        {
          pokemon: { img: imgBasehref + "227.png", name: "Skarmory" },
          method: "Route 227",
        },

        {
          pokemon: { img: imgBasehref + "322.png", name: "Numel" },
          method: "Route 227",
        },
        {
          pokemon: { img: imgBasehref + "323.png", name: "Camerupt" },
          method: "Evolve Numel at level 33",
        },

        {
          pokemon: { img: imgBasehref + "110.png", name: "Weezing" },
          method: "Route 227",
        },
        {
          pokemon: { img: imgBasehref + "109.png", name: "Koffing" },
          method: "Breed Weezing",
        },

        /* ================= Stark Mountain ================= */
        {
          pokemon: { img: imgBasehref + "218.png", name: "Slugma" },
          method: "Stark Mountain",
        },
        {
          pokemon: { img: imgBasehref + "219.png", name: "Magcargo" },
          method: "Evolve Slugma at level 38",
        },
        {
          pokemon: { img: imgBasehref + "485.png", name: "Heatran" },
          method: "Stark Mountain (event battle)",
        },
      ],
    },
  },
};
