/* ----------------------
    - img src: 
    - Guide: 
    ----------------------- */
const guideLink = "";
const guideSource = `
      <p class="tips-source">
        <a href="${guideLink}" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>`;

const imgBasehref = "";
const badgeBasehref = "";

window.gameData = {
  gameId: "heartgold",
  gameTitle: "HeartGold",
  logo: "assets/images/logos/heartgold.png",
  aboutHtml: `
   <section class="game-intro-content">
      <ul>
        <li>Grinding - The first section of the game was WAY longer than it was on Sapphire and FireRed. Part of this is due to the fact that the wild pokemon in this game are always horrifically low compared to trainer battles. Trainer rematches in this version are entirely dependent on the day/time. There are certain windows where you can call a trainer for a rematch (e.g. Monday morning only) meaning that if it’s not that time, you can’t get a rematch unless you organized it previously during said window. The rematches also only occur very late into your Johto campaign so you’re at the mercy of wild pokemon grinding until then. The plus side is, if you are in the right time slot for a rematch you can continuously call that trainer from a different area to infinitely rematch them. As always, you want to make sure that any new trainer battles are prioritized for when you actually have pokemon with you that you want to level up. Exploring every route to get all the trainers (e.g. along the sea routes) is recommended.</li>
        <li>This will be a very grindy challenge. If you don’t think you’ve got the patience, then now would be the time to back out. The first part of the game alone (before Falkner) took me about 50 hours! It gets less grindy as the game proceeds, but it will be a long road. </li>
        <li>Learning new moves shouldn’t be taken for granted, particularly with pokemon that evolve at higher levels. During a normal game you might be quick to replace a weak move with a stronger one but getting rid of non-attacking moves is a better strategy here. Again, on the first part of the challenge before Falkner, you are battling low level pokemon and will run out of PP very quickly while that exp bar goes up very slowly. You need to maximize the amount of pokemon you can defeat, so having multiple attacking moves, regardless of how weak they are, will be beneficial. You have no need for moves like Growl or Sand Attack.</li>
        <li>Pokegear contacts – I went through the game obtaining contacts as I defeated specific trainers. It wasn’t until I passed Bugsy and had to WAIT for PokeGear calls from two characters for evolution stones that I realised I probably shouldn’t have registered the useless ones. There is no way to delete contacts in this game! I still don’t fully understand the mechanics of the PokeGear phone calls and haven’t managed to find a guide that goes into enough detail. All I know is that if you do no actions (wild battles, talking to NPCs etc) every 10 minutes on the dot you may get a phone call. I don’t know if it picks one NPC randomly in the list of total possible contacts, checks to see if you have that person registered and they call you if you have. It may also just be pure RNG to determine if you even get a phone call in the first place since there were times that I’d get no phone calls for 40 mins or more. All I know is that I could have made this easier/quicker/less painful if I DIDN’T register every trainer. If I hadn’t, only three people would ever call – Picnicker Gina (possible Leaf Stone), Schoolkid Alan (possible Fire Stone) and Lyra/Ethan (forced to register them). It may not have improved my chances for the stones but there would have been a lot less spam calls!</li>
        <li>This challenge is a fun alternative to a regular play through and you may really appreciate having to train pokemon up yourself that you never trained before. On the other hand you may end up despising certain pokemon due to their inability to attack when you first get them or their generally poor stats/levelling up moves. </li>
        <li>It’s not really a rule, but my preferred method is that you train them yourself except when they can’t battle themselves (i.e. Magikarp before it learns Tackle). This is all down to your own limitations that you set. I don’t like using Rare Candy anymore as it defeats the purpose of the challenge and I don’t like using any exp sharing items. But remember that this is YOUR challenge so feel free to add or remove restrictions as you see fit.</li>
        <li>Please note that this is not a full guide to the game, I am only listing the pokemon you can catch at the earliest opportunities and any required items. I do not go into full detail on optimal exp gains or where to find the highest level for an individual pokemon etc. This playthrough and guide were done as a casual play rather than a speed run. Please consult other guides for a full walkthrough or more detailed information. </li>
      </ul>
      ${guideSource}
    </section>
    `,
  progression: {
    falkner: {
      headerTitle: "Pre Badge 1 - Falkner",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort:
        "This first part will cover everything you can do from the get-go up right up to the Violet City Gym BEFORE you get that first badge from Falkner. This WILL take a while so it will really test your patience…",
      summaryHtml: `        <h5>New Bark Town</h5>

        <p>
			*********************</br>
			IMPORTANT NOTE!
			With your Pokegear obtained, I would recommend NOT registering anyone unless you’re forced to. The reason for this is that you will only want a handful of contacts that will call you for potential evolution stone rewards. Anyone else in your contacts list will slow this process down!</br>
			********************
        </p>

        <p>
          Visiting Professor Elm should be the first part of your journey. A trip to his lab will trigger an event whereby you are given a starter pokemon to run an errand. There aren’t any advantages or disadvantages over the other. You will be mostly training against a mix of grass, bug and normal types with a few others dotted around. Chikorita is the only one I can see being difficult to start with due to its stat distribution focused more on defence but with enough levels under its belt that disadvantage quickly disappears. For this run I picked Totodile for its earlier evolution level into its last stage. You won’t be able to catch any pokemon until you return here so press on and train your starter up by a few levels.
        </p>

        <h5>To Mr. Pokemon and back again</h5>
        <p>
          Travel west to Cherrygrove City. Be sure to talk to the old man hanging around to take the tour and receive the running shoes. Leave through the north exit and he’ll give you the map card for your PokeGear. Continue up and stop by the house to get the Apricorn Box. You’ll want this to get some of Kurt’s pokeballs later on. At the top of the route on the right hand side you’ll find Mr. Pokemon’s house. Talk to him to get an egg (item) and Professor Oak will also hand you the Johto Pokedex.
        </p>

        <p>
          Leaving the house you’ll get a call from Professor Elm. Hurry back to New Bark Town and battle your rival as you leave Cherrygrove City. Return to Professor Elm, name your rival, deliver the egg and you can embark on your journey at last! Before heading off, talk to your mother. You have the choice of letting her keep some of your money from trainer battles to buy items with. The only noteworthy one is the Moon Stone but there’s another way of getting them that doesn’t require money so decline her offer, you want the money for pokeballs instead.
        </p>

        <pre>
          Chikorita → Lv. 16 → Bayleef → Lv. 32 → Meganium
          OR
          Cyndaquil → Lv. 14 → Quilava → Lv. 36 → Typhlosion
          OR
          Totodile → Lv. 18 → Croconaw → Lv. 30 → Feraligatr
        </pre>

        <h5>Route 29</h5>
        <p>
          On the first route of Johto you can catch four different evolution lines. Rattata is available consistently throughout the day. Pidgey and Sentret are only available during the Morning/Daytime while Hoothoot is night time only.
        </p>
        <pre>
          Pidgey → Lv. 18 → Pidgeotto → Lv. 36 → Pidgeot
          Rattata → Lv. 20 → Raticate
          Sentret → Lv. 15 → Furret
          Hoothoot → Lv. 20 → Noctowl
        </pre>

        <h5>Route 46</h5>
        <p>
          Rather than heading west again, go north through the gate to reach the lower part of the route that comes from Blackthorn City. You can’t advance any further than this patch of grass but it does hold wild Spearow and Geodude (both daytime only).
        </p>
        <pre>
          Geodude → Lv. 25 → Graveler
          Spearow → Lv. 20 → Fearow
        </pre>
        <p>
          Graveler is the first trade evolution pokemon in this game and as such will never evolve until you’ve finished the challenge and open up trading to other games.
        </p>

        <h5>Route 30</h5>
        <p>
          Go through Cherrygrove City again heading towards Mr. Pokemon’s house. On this route you’ll find some more varying pokemon depending on the time of the day – Ledyba (SS) in the mornings, Caterpie (HG) or Weedle (SS) in the mornings/daytime and Spinarak (HG) at night.
        </p>
        <pre>
          (HG) Caterpie → Lv. 7 → Metapod → Lv. 10 → Butterfree
          (SS) Weedle → Lv. 7 → Kakuna → Lv. 10 → Beedrill
          (HG) Spinarak → Lv. 22 → Ariados
          (SS) Ledyba → Lv. 18 → Ledian
        </pre>

        <h5>Route 31</h5>
        <p>
          The only pokemon here to catch is Bellsprout. Catch one to evolve and another to trade with an NPC very shortly.
        </p>
        <pre>
          Bellsprout → Lv. 21 → Weepinbell
        </pre>
        <p>
          There are no Leaf Stones yet so Weepinbell cannot evolve further.
        </p>

        <h5>Dark Cave</h5>
        <p>
          On the eastern side of the junction between Routes 30 and 31. You can’t go very far inside but at least you can catch some pokemon!
        </p>
        <pre>
          Zubat → Lv. 22 → Golbat → Happiness → Crobat
          Dunsparce
        </pre>
        <p>
          That Dunsparce has only a 1% encounter rate so get in some good training while you’re searching for it.
        </p>

        <h5>Violet City</h5>
        <p>
          South west of the pokemon center is a house where the resident would like to trade his humungous Onix for a teeny Bellsprout. Take him up on this offer, Onix is not available yet.
        </p>
        <pre>
          Onix
        </pre>

        <p>
          On the northeast side of town you’ll find Sprout Tower. Venture up the ladder at night to find wild Gastly. If you come here in the daytime you’ll only encounter Rattata.
        </p>
        <pre>
          Gastly → Lv. 25 → Haunter
        </pre>
        <p>
          Another trade evolution so Haunter is the end of the line. I would recommend keeping Haunter around and keeping Mean Look and Hypnosis for later.
        </p>

        <p>
          A controversial decision can be made here. Inside the pokemon center is a man named Primo. If you give him the right password he will reward you with box wallpapers and even some eggs. Two of the eggs are Mareep and Wooper which can be caught in this section anyway. Slugma is the other egg. Slugma cannot be caught until you get to Kanto. I did allow myself to get this egg because it is a gift from an NPC that is triggered entirely within the game and not a Mystery Gift menu. The only trick is that you need to calculate the password via a website which is based on your trainer ID. There is no expiry for this as it’s unique to you so you could theoretically guess this password so I’m not ruling it out.
        </p>
        <pre>
          Slugma → Lv. 38 → Magcargo
        </pre>

        <h5>Ruins of Alph</h5>
        <p>
          Head west out of Violet City and grab the Rock Smash HM from the man standing near the suspicious ‘tree’ and then go south through the gate to get to these mysterious ruins. Enter the chamber with the sliding puzzle and solve it to unlock wild Unown in the ruins below. Catch one for now. If you like catching all 28 Unown, now is not the time to do it because of pokeball/money restraints.
        </p>
        <pre>
          Unown
        </pre>

        <h5>Route 32</h5>
        <p>
          A patch of grass can be found at the northern tip of this route which was unavailable in the original games. It houses a few new pokemon. Hoppip can only be found in the day while Wooper only appears at night. For SoulSilver players there is an additional obstacle with an extra pokemon – Ekans.
        </p>
        <pre>
          Hoppip → Lv. 18 → Skiploom → Lv. 27 → Jumpluff
          Wooper → Lv. 20 → Quagsire
          Mareep → Lv. 15 → Flaaffy → Lv. 30 → Ampharos
          (SS) Ekans → Lv. 22 → Arbok
        </pre>

        <h5>Levelling up tips</h5>
        <p>
          Level 6 is the highest wild pokemon you can train against…And you have 16 evolutionary families to evolve. Think about that! Route 32 is THE place to train. This walkthrough was written whilst playing HeartGold which means that Bellsprout gives amazing exp followed by Hoppip (day) and Wooper (night). Be careful of direct contact moves against Mareep or you will be paralyzed. You’ll be cursing Rattata for appearing due to its significantly worse exp. For SoulSilver players, Ekans’ Intimidate ability and low exp make it less fruitful. Before you stick to this route, make sure you clear out all the trainers in Sprout Tower who pretty much all have Bellsprout for more excellent experience. There are also the trainers in the gym, just be careful not to talk to Falkner. Some people also prefer battling at either the Ruins of Alph or Sprout Tower at night for Gastly encounters.
        </p>

        <p>
          Keep Zubat in your party at all times to get that happiness as high as possible. You’ll be doing so much running around in the grass that by the time it evolves into Golbat it should evolve straight away on the next level. I was more obsessive with levelling up my pokemon on this game, purely because I knew how long I’d be training on Route 32. I got every pokemon to the same level and levelled them all up one level at a time then switched them out in the PC. Once they evolved, I moved them out of the party. This wasn’t very efficient with the time but it made things a little less repetitive.
        </p>

        <p>
          The pokemon I struggled with were Hoppip (terrible moves, consider evolving it at Lv19 rather than 18 to get Bullet Seed a bit faster), Mareep (Static ability keeps attracting more Mareep) and Zubat is always difficult to train as its moves are so weak until it learns Bite. My controversial choice shot me in the foot as Slugma had the highest evolution level…38! Congrats if you made this part, it’s hands down the grindiest section.
        </p>

        <p>
          <strong>End of part 1:</strong><br/>
          (HeartGold) Caught 41, Remaining 215<br/>
          (SoulSilver) Caught 43, Remaining 213
        </p>
        ${guideSource}
        `,
      rows: [
        /* ================= Starters ================= */
        {
          type: "choice",
          choiceKey: "johto-starter",
          choiceValue: "chikorita",
          pokemon: { img: imgBasehref + "152.png", name: "Chikorita" },
          method: "Starter choice from Professor Elm"
        },
        {
          type: "choice",
          choiceKey: "johto-starter",
          choiceValue: "cyndaquil",
          pokemon: { img: imgBasehref + "155.png", name: "Cyndaquil" },
          method: "Starter choice from Professor Elm"
        },
        {
          type: "choice",
          choiceKey: "johto-starter",
          choiceValue: "totodile",
          pokemon: { img: imgBasehref + "158.png", name: "Totodile" },
          method: "Starter choice from Professor Elm"
        },

        { pokemon: { img: imgBasehref + "152.png", name: "Chikorita" }, method: "Choose Chikorita as your starter", requires: { "johto-starter": "chikorita" } },
        { pokemon: { img: imgBasehref + "153.png", name: "Bayleef" }, method: "Evolve Chikorita at level 16", requires: { "johto-starter": "chikorita" } },
        { pokemon: { img: imgBasehref + "154.png", name: "Meganium" }, method: "Evolve Bayleef at level 32", requires: { "johto-starter": "chikorita" } },

        { pokemon: { img: imgBasehref + "155.png", name: "Cyndaquil" }, method: "Choose Cyndaquil as your starter", requires: { "johto-starter": "cyndaquil" } },
        { pokemon: { img: imgBasehref + "156.png", name: "Quilava" }, method: "Evolve Cyndaquil at level 14", requires: { "johto-starter": "cyndaquil" } },
        { pokemon: { img: imgBasehref + "157.png", name: "Typhlosion" }, method: "Evolve Quilava at level 36", requires: { "johto-starter": "cyndaquil" } },

        { pokemon: { img: imgBasehref + "158.png", name: "Totodile" }, method: "Choose Totodile as your starter", requires: { "johto-starter": "totodile" } },
        { pokemon: { img: imgBasehref + "159.png", name: "Croconaw" }, method: "Evolve Totodile at level 18", requires: { "johto-starter": "totodile" } },
        { pokemon: { img: imgBasehref + "160.png", name: "Feraligatr" }, method: "Evolve Croconaw at level 30", requires: { "johto-starter": "totodile" } },

        /* ================= Route 29 ================= */
        { pokemon: { img: imgBasehref + "016.png", name: "Pidgey" }, method: "Route 29 (morning/day)" },
        { pokemon: { img: imgBasehref + "017.png", name: "Pidgeotto" }, method: "Evolve Pidgey at level 18" },
        { pokemon: { img: imgBasehref + "018.png", name: "Pidgeot" }, method: "Evolve Pidgeotto at level 36" },

        { pokemon: { img: imgBasehref + "019.png", name: "Rattata" }, method: "Route 29" },
        { pokemon: { img: imgBasehref + "020.png", name: "Raticate" }, method: "Evolve Rattata at level 20" },

        { pokemon: { img: imgBasehref + "161.png", name: "Sentret" }, method: "Route 29 (morning/day)" },
        { pokemon: { img: imgBasehref + "162.png", name: "Furret" }, method: "Evolve Sentret at level 15" },

        { pokemon: { img: imgBasehref + "163.png", name: "Hoothoot" }, method: "Route 29 (night)" },
        { pokemon: { img: imgBasehref + "164.png", name: "Noctowl" }, method: "Evolve Hoothoot at level 20" },

        /* ================= Route 46 ================= */
        { pokemon: { img: imgBasehref + "074.png", name: "Geodude" }, method: "Route 46 (day)" },
        { pokemon: { img: imgBasehref + "075.png", name: "Graveler" }, method: "Evolve Geodude at level 25" },

        { pokemon: { img: imgBasehref + "021.png", name: "Spearow" }, method: "Route 46 (day)" },
        { pokemon: { img: imgBasehref + "022.png", name: "Fearow" }, method: "Evolve Spearow at level 20" },

        /* ================= Route 30 ================= */
        { pokemon: { img: imgBasehref + "010.png", name: "Caterpie" }, method: "(HG) Route 30 (morning/day)" },
        { pokemon: { img: imgBasehref + "011.png", name: "Metapod" }, method: "Evolve Caterpie at level 7" },
        { pokemon: { img: imgBasehref + "012.png", name: "Butterfree" }, method: "Evolve Metapod at level 10" },

        { pokemon: { img: imgBasehref + "013.png", name: "Weedle" }, method: "(SS) Route 30 (morning/day)" },
        { pokemon: { img: imgBasehref + "014.png", name: "Kakuna" }, method: "Evolve Weedle at level 7" },
        { pokemon: { img: imgBasehref + "015.png", name: "Beedrill" }, method: "Evolve Kakuna at level 10" },

        { pokemon: { img: imgBasehref + "168.png", name: "Spinarak" }, method: "(HG) Route 30 (night)" },
        { pokemon: { img: imgBasehref + "167.png", name: "Ariados" }, method: "Evolve Spinarak at level 22" },

        { pokemon: { img: imgBasehref + "165.png", name: "Ledyba" }, method: "(SS) Route 30 (morning)" },
        { pokemon: { img: imgBasehref + "166.png", name: "Ledian" }, method: "Evolve Ledyba at level 18" },

        /* ================= Route 31 ================= */
        { pokemon: { img: imgBasehref + "069.png", name: "Bellsprout" }, method: "Route 31" },
        { pokemon: { img: imgBasehref + "070.png", name: "Weepinbell" }, method: "Evolve Bellsprout at level 21" },

        /* ================= Dark Cave ================= */
        { pokemon: { img: imgBasehref + "041.png", name: "Zubat" }, method: "Dark Cave" },
        { pokemon: { img: imgBasehref + "042.png", name: "Golbat" }, method: "Evolve Zubat at level 22" },
        { pokemon: { img: imgBasehref + "169.png", name: "Crobat" }, method: "Evolve Golbat with happiness" },
        { pokemon: { img: imgBasehref + "206.png", name: "Dunsparce" }, method: "Dark Cave (1% encounter)" },

        /* ================= Violet City ================= */
        { pokemon: { img: imgBasehref + "095.png", name: "Onix" }, method: "In-game trade for Bellsprout" },

        { pokemon: { img: imgBasehref + "092.png", name: "Gastly" }, method: "Sprout Tower (night)" },
        { pokemon: { img: imgBasehref + "093.png", name: "Haunter" }, method: "Evolve Gastly at level 25" },

        { pokemon: { img: imgBasehref + "218.png", name: "Slugma" }, method: "Primo egg (optional)" },
        { pokemon: { img: imgBasehref + "219.png", name: "Magcargo" }, method: "Evolve Slugma at level 38" },

        /* ================= Ruins of Alph ================= */
        { pokemon: { img: imgBasehref + "201.png", name: "Unown" }, method: "Ruins of Alph (sliding puzzle)" },

        /* ================= Route 32 ================= */
        { pokemon: { img: imgBasehref + "187.png", name: "Hoppip" }, method: "Route 32 (day)" },
        { pokemon: { img: imgBasehref + "188.png", name: "Skiploom" }, method: "Evolve Hoppip at level 18" },
        { pokemon: { img: imgBasehref + "189.png", name: "Jumpluff" }, method: "Evolve Skiploom at level 27" },

        { pokemon: { img: imgBasehref + "194.png", name: "Wooper" }, method: "Route 32 (night)" },
        { pokemon: { img: imgBasehref + "195.png", name: "Quagsire" }, method: "Evolve Wooper at level 20" },

        { pokemon: { img: imgBasehref + "179.png", name: "Mareep" }, method: "Route 32" },
        { pokemon: { img: imgBasehref + "180.png", name: "Flaaffy" }, method: "Evolve Mareep at level 15" },
        { pokemon: { img: imgBasehref + "181.png", name: "Ampharos" }, method: "Evolve Flaaffy at level 30" },

        { pokemon: { img: imgBasehref + "023.png", name: "Ekans" }, method: "(SS) Route 32" },
        { pokemon: { img: imgBasehref + "024.png", name: "Arbok" }, method: "Evolve Ekans at level 22" }
      ]
    },
    "Pre Badge 2": {
      headerTitle: "Pre Badge 2",

      headerImg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "Defeating Falkner will allow you to pass through Route 32 and begin expanding your Johto Pokédex before facing Bugsy.",

      summaryHtml: `
        <p>
          Defeating Falkner will allow you to pass through Route 32 to the south and will let you use Rock Smash.
        </p>

        <p>
          Teach it to a pokemon and go to the Ruins of Alph. Smash the rocks (with Rock Smash funnily enough) to try and find the Old Amber and Helix Fossil (HeartGold) or Dome Fossil (SoulSilver) to save you coming back later. If you don’t get the items you want, go into the north gate and re-enter the ruins for the rocks to respawn. Pick up the egg from Prof Elm’s aide in the Pokemart (not the pokemon center as in the original games). If you did get Slugma, keep Magcargo in your party to hatch it faster.
        </p>
        <pre>
          Togepi → Happiness → Togetic
        </pre>

        <h5>Old Fishing Tour</h5>
        <p>
          In the pokemon center at the southern end of Route32, a fisherman will give you the Old Rod. You can catch pokemon other than Magikarp in this game with the Old Rod though they are rare (5%). Revisit the following places to fish for these pokemon:
        </p>
        <pre>
          (Anywhere) Magikarp → Lv. 20 → Gyarados
          (Route 32) Tentacool → Lv. 30 → Tentacruel
          (Cherrygrove City) Krabby → Lv. 28 → Kingler
          (Route 30) Poliwag → Lv. 25 → Poliwhirl
          (Dark Cave) Goldeen → Lv. 33 → Seaking
        </pre>

        <p>
          Catch a second Krabby for a trade later on.
        </p>

        <h5>Union Cave</h5>
        <p>
          For HeartGold players you can catch Sandshrew here but nothing else. For SoulSilver, Focus on levelling up your new water pokemon as you pass through.
        </p>
        <pre>
          (HG) Sandshrew → Lv. 22 → Sandslash
        </pre>

        <h5>Azalea Town/Slowpoke Well</h5>
        <p>
          Enter Azalea Town and rest up at the pokemon center. Visit Kurt in the top left corner of town and speak to him. He will rush over to the Slowpoke Well. Follow him there where you can catch a Slowpoke!
        </p>
        <pre>
          Slowpoke → Lv. 37 → Slowbro
        </pre>

        <h5>Ilex Forest</h5>
        <p>
          You’ll be stopped by your rival upon trying to enter the forest but once inside you’ll find wild Paras and if you return at night, Oddish will also be available. You may want to consider catching a second one to get both of Gloom’s evolutions.
        </p>
        <pre>
          Paras → Lv. 24 → Parasect
          Oddish → Lv. 21 → Gloom
        </pre>

        <h5>Headbutt Pokemon</h5>
        <p>
          Despite reaching a dead end which requires Cut, there are still additional pokemon to catch in this section. Ordinarily you’d need to get through Ilex Forest and be taught Headbutt to knock pokemon out of trees but it IS possible at this section of the game. Level up your Slowpoke to Lv. 25 and it will learn the move itself. There are four pokemon you can obtain at the moment. The rules of Headbutt trees are as follows: If no pokemon fall out of the tree, no pokemon ever will. Try a different tree. If a tree does house pokemon, it always will, however the wild pokemon are determined by two tables of possible pokemon, so the rare pokemon you’re looking for might not be available in the tree you’re checking and you may need to try different trees. The following pokemon are found in the trees:
        </p>
        <pre>
          (Ilex Forest) Pineco → Lv. 31 → Forretress
          (Azalea Town) Aipom → Knows Double Hit (Lv. 32) → Ambipom
          (Azalea Town) Heracross
          (Route 32) Exeggcute
        </pre>

        <h5>An Early Sun Stone</h5>
        <p>
          The last ‘hurdle’ to get everything you need to complete this section is thanks to Aipom’s Pickup ability. Aipom has two abilities, so obviously the one with Run Away is the less desirable one. If you get Aipom up to Lv31+ (which you would do anyway to get it to learn Double Hit and evolve into Ambipom), there is a low chance that it will pick up a Sun Stone which can evolve your Gloom into Bellossom.
        </p>
        <pre>
          Gloom → Sun Stone → Bellossom
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          As with Zubat, keep Togepi in your party at all times to raise its happiness. Thanks to its egg move (Extrasensory) it’s much more bearable to train with and level up to help its happiness increase as well. For grinding, it depends on who you’re training. Any pokemon that have grass or water attacks would be suited to the basement level in Union Cave. Geodude, Sandshrew and Onix give very nice exp. For those who don’t have these moves or would be ineffective against rock types, stick to Headbutt trees. In Azalea Town, go to the bottom left corner. The second tree from the left you can Headbutt (on the south side) can yield Heracross who gives ungodly exp points. The only catch is that Heracross’s encounter rate isn’t particularly high and Spearow/Aipom don’t give great exp. Heracross is also at low levels.
        </p>

        <p>
          I shrugged off Ilex Forest Headbutt trees for a while but I actually think they’re more helpful. Facing the left trees as you enter the forest, Headbutt the 4th tree up. You have 10% chance to find Noctowl and 10% for Butterfree which give huge exp and their levels reach higher than with Heracross. The other pokemon in this tree are Hoothoot and Pineco. While they don’t give out great exp, they’re certainly not as poor as the Aipom/Spearow from Azalea Town trees or Rattata and Zubat from Union Cave. On top of that, you don’t even have to move, you can just repeatedly mash the A button (but watch out for shinies!).
        </p>

        <p>
          <strong>End of part 2:</strong><br/>
          Caught 68, Remaining 188
        </p>

        ${guideSource}
  `,

      rows: [
        { pokemon: { img: imgBasehref + "175.png", name: "Togepi" }, method: "Egg from Professor Elm's aide" },
        { pokemon: { img: imgBasehref + "176.png", name: "Togetic" }, method: "Evolve Togepi with happiness" },

        { pokemon: { img: imgBasehref + "129.png", name: "Magikarp" }, method: "Old Rod (various locations)" },
        { pokemon: { img: imgBasehref + "130.png", name: "Gyarados" }, method: "Evolve Magikarp at level 20" },

        { pokemon: { img: imgBasehref + "072.png", name: "Tentacool" }, method: "Old Rod (Route 32)" },
        { pokemon: { img: imgBasehref + "073.png", name: "Tentacruel" }, method: "Evolve Tentacool at level 30" },

        { pokemon: { img: imgBasehref + "098.png", name: "Krabby" }, method: "Old Rod (Cherrygrove City)" },
        { pokemon: { img: imgBasehref + "099.png", name: "Kingler" }, method: "Evolve Krabby at level 28" },

        { pokemon: { img: imgBasehref + "060.png", name: "Poliwag" }, method: "Old Rod (Route 30)" },
        { pokemon: { img: imgBasehref + "061.png", name: "Poliwhirl" }, method: "Evolve Poliwag at level 25" },

        { pokemon: { img: imgBasehref + "118.png", name: "Goldeen" }, method: "Old Rod (Dark Cave)" },
        { pokemon: { img: imgBasehref + "119.png", name: "Seaking" }, method: "Evolve Goldeen at level 33" },

        { pokemon: { img: imgBasehref + "027.png", name: "Sandshrew" }, method: "(HG) Union Cave" },
        { pokemon: { img: imgBasehref + "028.png", name: "Sandslash" }, method: "Evolve Sandshrew at level 22" },

        { pokemon: { img: imgBasehref + "079.png", name: "Slowpoke" }, method: "Slowpoke Well" },
        { pokemon: { img: imgBasehref + "080.png", name: "Slowbro" }, method: "Evolve Slowpoke at level 37" },

        { pokemon: { img: imgBasehref + "046.png", name: "Paras" }, method: "Ilex Forest" },
        { pokemon: { img: imgBasehref + "047.png", name: "Parasect" }, method: "Evolve Paras at level 24" },

        { pokemon: { img: imgBasehref + "043.png", name: "Oddish" }, method: "Ilex Forest (night)" },
        { pokemon: { img: imgBasehref + "044.png", name: "Gloom" }, method: "Evolve Oddish at level 21" },

        { pokemon: { img: imgBasehref + "204.png", name: "Pineco" }, method: "Headbutt tree (Ilex Forest)" },
        { pokemon: { img: imgBasehref + "205.png", name: "Forretress" }, method: "Evolve Pineco at level 31" },

        { pokemon: { img: imgBasehref + "190.png", name: "Aipom" }, method: "Headbutt tree (Azalea Town)" },
        { pokemon: { img: imgBasehref + "424.png", name: "Ambipom" }, method: "Level up Aipom knowing Double Hit" },

        { pokemon: { img: imgBasehref + "214.png", name: "Heracross" }, method: "Headbutt tree (Azalea Town)" },

        { pokemon: { img: imgBasehref + "102.png", name: "Exeggcute" }, method: "Headbutt tree (Route 32)" },

        { pokemon: { img: imgBasehref + "182.png", name: "Bellossom" }, method: "Use Sun Stone on Gloom" }
      ]
    },
    "Pre Badge 3": {
      headerTitle: "Pre Badge 3",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "",
      summaryHtml: "",
      rows: []
    },
    /*"Pre Badge 1": {
      headerTitle: "Pre Badge 1",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "",
      summaryHtml: "",
      rows: []
    },
    "Pre Badge 1": {
      headerTitle: "Pre Badge 1",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "",
      summaryHtml: "",
      rows: []
    },
    "Pre Badge 1": {
      headerTitle: "Pre Badge 1",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "",
      summaryHtml: "",
      rows: []
    },
    "Pre Badge 1": {
      headerTitle: "Pre Badge 1",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "",
      summaryHtml: "",
      rows: []
    },
    "Pre Badge 1": {
      headerTitle: "Pre Badge 1",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "",
      summaryHtml: "",
      rows: []
    },
    "Pre Badge 1": {
      headerTitle: "Pre Badge 1",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "",
      summaryHtml: "",
      rows: []
    },
    "Pre Badge 1": {
      headerTitle: "Pre Badge 1",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "",
      summaryHtml: "",
      rows: []
    },
    "Pre Badge 1": {
      headerTitle: "Pre Badge 1",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "",
      summaryHtml: "",
      rows: []
    },
    "Pre Badge 1": {
      headerTitle: "Pre Badge 1",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "",
      summaryHtml: "",
      rows: []
    },
    "Pre Badge 1": {
      headerTitle: "Pre Badge 1",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "",
      summaryHtml: "",
      rows: []
    }*/
  }
};
