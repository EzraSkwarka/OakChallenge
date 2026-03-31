/* ----------------------
    - img src: 
    - Guide: 
    ----------------------- */
const guideLink = "https://docs.google.com/document/d/1Fd1eqnxnnD3hAKWN63hrxjBiw3JIyCiPevY11OvwmwQ/edit?tab=t.0";
const guideSource = `
      <p class="tips-source">
        <a href="${guideLink}" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>`;

const imgBasehref = "assets/images/HeartGold and SoulSilver/pokedex/Spr_4h_";
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
    bugsy: {
      headerTitle: "Pre Badge 2 - Bugsy",

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
    whitney: {
      headerTitle: "Pre Badge 3 - Whitney",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort:
        "You can finally get through Ilex Forest with Cut. Do you know what’s on the other side of the forest? Wild pokemon that are over level 10! There is nothing to do in the forest so get through as quickly as possible.",
      summaryHtml: `
        Part 3 - Pre Badge #3 from Whitney

        <h5>Route 34 </h5>
        <p>The single most important thing on this route is the Pokegear number from Picnicker Gina. She will randomly call you to say she’s found an item. One of these items is a Leaf Stone. You’ll need these to evolve some of the pokemon you’ve already caught. You’ll need three of these! </p>

        <p>*************************************<br/>
        IMPORTANT NOTE!<br/>
        If you want to save a lot of time and stay sane, Discord user gabriel Bombled (and tested by TheAndyXFailer) has suggested that you get Gina’s number and then go back to Azalea Town to wait for the phone calls from her. She won’t call you if you’re on the same route, you can’t get calls in Ilex Forest and if you progress further up Route 34 you’ll be forced to visit the daycare which results in you getting Ethan/Lyra’s phone number. If you return to Azalea Town then you’ll hopefully ONLY have Gina in your contacts list and can only receive calls from her. It’s still a matter of waiting, but this should drastically reduce the amount of spam calls you’ll be getting.<br/>
        *************************************<br/></p>

        <p>If you want to get to the pokemon center in Goldenrod ASAP it is possible to avoid every trainer on this route. It might be wise until you’ve caught some new pokemon to train. On this route you can catch a Drowzee, Abra and Ditto. Catch a second Drowzee for an upcoming trade! If Abra breaking out of pokeballs drives you nuts, you can simply buy one at the Game Corner for 200 coins which will be closer to evolving than the wild ones.</p>

        <pre>
          Drowzee → Lv. 26 → Hypno
          Abra → Lv. 16 → Kadabra
          Ditto
        </pre>

        <h5>Goldenrod City</h5>
        <p>Grab the bike from the new bike shop to make your life a bit easier. Inside one of the houses is a trainer who wants to trade your spare Drowzee for a Machop. Make sure you do, Machop isn’t available until later in the game. </p>

        <pre>Machop → Lv. 28 → Machoke</pre>

        <p>This gives you your fourth and final pokemon from the original trade evolutions so obviously Machoke won’t fully evolve either. Goldenrod is also home to the Johto Game Corner. There are two pokemon you need</h5>your pseudo version exclusive (Ekans/Sandshrew) and you will also be able to bag a Dratini. To get these you’ll need to play Voltorb Flip for a while (unless you’re good at it) until you have 2,800 coins. I’d recommend reading this webpage for a logical way to play: <br/>
        https://www.dragonflycave.com/voltorbflip.aspx <br/>
        I saw too many YouTube videos where they proceed to guessing far too early and it made me uneasy…Aside from shopping there’s not much else to do in the city so feel free to advance north.</p>

        <pre>
          (HG) Ekans → Lv. 22 → Arbok
          (SS) Sandshrew → Lv. 22 → Sandslash
          Dratini → Lv. 30 → Dragonair → Lv. 55 → Dragonite
        </pre>

        <h5>Route 35</h5>
        <p>A flurry of new pokemon (well, three) can be caught here. Both Nidoran will be the most common pokemon you’ll find here. These guys will fully evolve very soon…Yanma will be the pokemon you struggle with finding. Outside of swarms (not available until national dex) it only has a 1% chance to encounter so make sure you don’t knock it out by accident! Like Ambipom, this gen 4 pokemon is available in Johto once Yanma learns the correct move.</p>

        <pre>
        Nidoran F → Lv. 16 → Nidorina
        Nidoran M → Lv. 16 → Nidorino
        Yanma → Lv up with Ancientpower (Lv. 33) → Yanmega
        </pre>

        <h5>National Park</h5>
        <p>Upon entering the gatehouse you’ll see someone standing guard on the left. He’s blocking the way to the Pokeathlon which would be a much easier way to get all the evolution stones you need. Unfortunately he won’t move until you’ve defeated Whitney. Enter the park where the only new pokemon you can catch is a Sunkern.</p>

        <pre>
        Sunkern
        </pre>

        <h5>The Bug Catching Contest</h5>
        <p>This is held every Tuesday, Thursday and Saturday. There’s no need to worry about winning the first place prize any more (Sun Stone) but there are some exclusive bug pokemon that aren’t caught here normally. Specifically you’ll need Venonat, the Weedle line, Scyther and Pinsir. Logically you’d want to catch Weedle to prevent unnecessary breeding. If you only want the dex entry you could catch Weedle, Kakuna, Beedrill, Scyther and Pinsir and let them go finishing off with Venonat so the least number of times you’d need to enter is one, otherwise it’ll take at least 4 attempts (assuming you can find the pokemon within 20 minutes). </p>

        <pre>
        (HG) Weedle → Lv. 7 → Kakuna → Lv. 10 → Beedrill
        (SS) Caterpie → Lv. 7 → Metapod → Lv. 10 → Butterfree
        Venonat → Lv. 31 → Venomoth
        Scyther
        Pinsir
        </pre>

        <p>That Scyther won’t evolve any time soon since we can’t trade.</p>

        <h5>Route 36</h5>
        <p>Dive into the grass to find a Growlithe (which has Roar for extra annoyance) and Stantler.</p>

        <pre>
        (HG) Growlithe
        (SS) Vulpix
        Stantler
        </pre>

        <p>Like with Picnicker Gina, get School Kid Alan’s Pokegear number as he may call you up and give you a Fire Stone to evolve that new Growlithe/Vulpix of yours. Sudowoodo blocks the path to Ecruteak City and the chain of events to clear it are done after beating Whitney so it’s time to grind!</p>

        <h5>Have you got the stones?</h5>
        <p>THIS….CAN BE….TORTURE!!! There are a large number of pokemon that can be evolved at this part but the stones to evolve them aren’t especially simple to obtain. If you haven’t already picked one up before, your Ambipom with Pickup can net you another Sun Stone for Sunkern. You’ll need two Moon Stones which can also be found with Pickup but you’re going to need to raise Ambipom’s level up to at least Lv. 41 to have a chance of picking any up. Finally you’ll need a Fire Stone from Alan and a whopping THREE Leaf Stones from Gina. There’s no way to force these phone calls and you may be unlucky enough not to get the stones when they call you, it might just be them bragging about something else. You’re going to have to be vigilant when the phone rings, especially if you’re running around in the grass between battles. The best solution would be to just leave your DS on and do nothing except listen out for the ring. At certain times of the day I was getting a call exactly every 10 minutes or, at other times of the day, 20/30/40 mins apart on the dot. This is slowed down when you talk to people, enter battles and use the PC. I can confirm that the stone giveaways are not day-specific. I initially thought that the windows for the items were the same as their rematch windows (Wednesday for Alan, Sunday for Gina). When I got the phone call from Alan giving me a second Fire Stone on a Saturday I knew that the calls could be done on any day. Sadly, neither of the two trainers called much, and most of the times they did they bragged about their pokemon instead. This part could set you back a long time if you don’t get the phone calls. I found this part really frustrating because only one battle stood between me and the Pokeathlon for stones. That battle of course would be Whitney. Determined not to stray from the challenge I was literally leaving my DS on for hours every day for weeks hoping for the calls. My play time has literally gone up to over 300 hours. Hopefully you’ll get your phone calls while you’re training up that Dragonair to Lv. 55…</p>

        <pre>
        Sunkern → Sun Stone → Sunflora
        Nidorina → Moon Stone → Nidoqueen
        Nidorino → Moon Stone → Nidoking
        Weepinbell → Leaf Stone → Victreebel
        Gloom → Leaf Stone → Vileplume
        Exeggcute → Leaf Stone → Exeggutor
        (HG) Growlithe → Fire Stone → Arcanine
        (SS) Vulpix → Fire Stone → Ninetales
        </pre>

        <h5>Levelling Tips</h5>
        <p>Abuse the Headbutt move tutor as much as possible! Most pokemon can learn this move and it’s much easier levelling up your new pokemon with a power 70 move than their default ones. Even with its abysmal attack I was able to level up Abra on its own rather than switching out all the time. Dratini/Dragonair are unfortunately VERY slow at levelling up and the moves it learns on the way to the massive Lv 55 are quite inaccurate which doesn’t help much. Consider using TMs (especially from the Game Corner or the Department Store so you don’t waste the one-time TMs). The wild pokemon might be at higher levels but the exp isn’t all that better. I knew Dragonite would likely carry me through the Elite Four later on so I kept it as a Dratini until Lv 51 so it learned Outrage.</p>

        <p>You might only get 20 mins every few days but consider using the bug catching contest to grind as the pokemon will range between levels 7 and 18. Finding a Scyther, Pinsir, Beedrill or Butterfree that are Lv13+ will grant you a decent burst of exp. Outside of this, I trained primarily on Route 35 since Drowzee wasn’t bad experience. I tried to stay away from Route 34 and 36 in case Gina and Alan won’t call you if you’re on the same route as them. I pray that you get the evolution stones during the Dragonair grind-fest! If Dragonite is the last pokemon left to evolve, another option would be to consider breeding Ambipom to get a few Aipom with Pickup and farm Rare Candies to shave those last few levels off.</p>

        <p>
        <strong>End of part 3:</strong><br/>
        Caught 103, Remaining 153
        </p>
        ${guideSource}`,
      rows: [
        /* ================= Route 34 ================= */
        { pokemon: { img: imgBasehref + "096.png", name: "Drowzee" }, method: "Route 34" },
        { pokemon: { img: imgBasehref + "097.png", name: "Hypno" }, method: "Evolve Drowzee at level 26" },

        { pokemon: { img: imgBasehref + "063.png", name: "Abra" }, method: "Route 34 / Game Corner" },
        { pokemon: { img: imgBasehref + "064.png", name: "Kadabra" }, method: "Evolve Abra at level 16" },

        { pokemon: { img: imgBasehref + "132.png", name: "Ditto" }, method: "Route 34" },

        /* ================= Goldenrod City ================= */
        { pokemon: { img: imgBasehref + "066.png", name: "Machop" }, method: "Trade Drowzee in Goldenrod City" },
        { pokemon: { img: imgBasehref + "067.png", name: "Machoke" }, method: "Evolve Machop at level 28" },

        { pokemon: { img: imgBasehref + "023.png", name: "Ekans" }, method: "(HG) Goldenrod Game Corner" },
        { pokemon: { img: imgBasehref + "024.png", name: "Arbok" }, method: "Evolve Ekans at level 22" },

        { pokemon: { img: imgBasehref + "027.png", name: "Sandshrew" }, method: "(SS) Goldenrod Game Corner" },
        { pokemon: { img: imgBasehref + "028.png", name: "Sandslash" }, method: "Evolve Sandshrew at level 22" },

        { pokemon: { img: imgBasehref + "147.png", name: "Dratini" }, method: "Goldenrod Game Corner" },
        { pokemon: { img: imgBasehref + "148.png", name: "Dragonair" }, method: "Evolve Dratini at level 30" },
        { pokemon: { img: imgBasehref + "149.png", name: "Dragonite" }, method: "Evolve Dragonair at level 55" },

        /* ================= Route 35 ================= */
        { pokemon: { img: imgBasehref + "029.png", name: "Nidoran♀" }, method: "Route 35" },
        { pokemon: { img: imgBasehref + "030.png", name: "Nidorina" }, method: "Evolve Nidoran♀ at level 16" },

        { pokemon: { img: imgBasehref + "032.png", name: "Nidoran♂" }, method: "Route 35" },
        { pokemon: { img: imgBasehref + "033.png", name: "Nidorino" }, method: "Evolve Nidoran♂ at level 16" },

        { pokemon: { img: imgBasehref + "193.png", name: "Yanma" }, method: "Route 35 (1% encounter)" },
        { pokemon: { img: imgBasehref + "469.png", name: "Yanmega" }, method: "Level up Yanma knowing Ancientpower" },

        /* ================= National Park ================= */
        { pokemon: { img: imgBasehref + "191.png", name: "Sunkern" }, method: "National Park" },

        /* ================= Bug Catching Contest ================= */
        { pokemon: { img: imgBasehref + "013.png", name: "Weedle" }, method: "(HG) Bug Catching Contest" },
        { pokemon: { img: imgBasehref + "014.png", name: "Kakuna" }, method: "Evolve Weedle at level 7" },
        { pokemon: { img: imgBasehref + "015.png", name: "Beedrill" }, method: "Evolve Kakuna at level 10" },

        { pokemon: { img: imgBasehref + "010.png", name: "Caterpie" }, method: "(SS) Bug Catching Contest" },
        { pokemon: { img: imgBasehref + "011.png", name: "Metapod" }, method: "Evolve Caterpie at level 7" },
        { pokemon: { img: imgBasehref + "012.png", name: "Butterfree" }, method: "Evolve Metapod at level 10" },

        { pokemon: { img: imgBasehref + "048.png", name: "Venonat" }, method: "Bug Catching Contest" },
        { pokemon: { img: imgBasehref + "049.png", name: "Venomoth" }, method: "Evolve Venonat at level 31" },

        { pokemon: { img: imgBasehref + "123.png", name: "Scyther" }, method: "Bug Catching Contest" },
        { pokemon: { img: imgBasehref + "127.png", name: "Pinsir" }, method: "Bug Catching Contest" },

        /* ================= Route 36 ================= */
        { pokemon: { img: imgBasehref + "058.png", name: "Growlithe" }, method: "(HG) Route 36" },
        { pokemon: { img: imgBasehref + "037.png", name: "Vulpix" }, method: "(SS) Route 36" },

        { pokemon: { img: imgBasehref + "234.png", name: "Stantler" }, method: "Route 36" },

        /* ================= Stone Evolutions ================= */
        { pokemon: { img: imgBasehref + "192.png", name: "Sunflora" }, method: "Use Sun Stone on Sunkern" },
        { pokemon: { img: imgBasehref + "031.png", name: "Nidoqueen" }, method: "Use Moon Stone on Nidorina" },
        { pokemon: { img: imgBasehref + "034.png", name: "Nidoking" }, method: "Use Moon Stone on Nidorino" },
        { pokemon: { img: imgBasehref + "071.png", name: "Victreebel" }, method: "Use Leaf Stone on Weepinbell" },
        { pokemon: { img: imgBasehref + "045.png", name: "Vileplume" }, method: "Use Leaf Stone on Gloom" },
        { pokemon: { img: imgBasehref + "103.png", name: "Exeggutor" }, method: "Use Leaf Stone on Exeggcute" },
        { pokemon: { img: imgBasehref + "059.png", name: "Arcanine" }, method: "(HG) Use Fire Stone on Growlithe" },
        { pokemon: { img: imgBasehref + "038.png", name: "Ninetales" }, method: "(SS) Use Fire Stone on Vulpix" }
      ]
    },
    morty: {
      headerTitle: "Pre Badge 4 - Morty",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort:
        "Having the Plain Badge from Whitney lets you use Strength which we don’t have yet and even with it, it doesn’t give us any new areas to access without Surf as well. Beating Whitney does however allow us to finally progress to other towns and cities.",
      summaryHtml: `
        <p>Swing by the flower shop in the very north western part of Goldenrod City to get the watering can required to move Sudowoodo and then head towards the gate where the bug catching contest is. </p>

        <h5>What? More stones already??? </h5>
        <p>Once inside the gate, instead of passing through into National Park, you can instead go to the left and enter the Pokeathlon Dome. This is the usual mini game found in pokemon games (similar to contests etc) and you can earn points to cash in at the prize exchange counter. The prizes we are looking at in particular are the evolution stones, which cost 2500 points each and are only available one day per week. We need one Fire Stone (Tuesday), four Water Stones (Wednesday) and one Thunder Stone (Thursday). Best get to work on those Water Stones as quickly as you can to avoid waiting around for the next Wednesday to come around. Changing the clock is cheating but also does mess up clock based events so be careful. Straight off the bat we can evolve our Poliwhirl:</p>

        <pre>Poliwhirl → Water Stone → Poliwrath</pre>

        <h5>Route 36 </h5>
        <p>Yes, you’ve been here before but the ‘tree’ that’s blocking the way can now be moved! Save your game before hand as this is the only opportunity to catch Sudowoodo.</p>

        <pre>Sudowoodo</pre>

        <p>At last we have advanced onto Route 37! The downside is…there’s no new pokemon on this route! Carry on to Ecruteak City. </p>

        <h5>Ecruteak City </h5>
        <p>Go to the Pokemon Center as you should do when entering a new town and Bill from Kanto will approach you. He will head back to Goldenrod City to see his family. You should go there straight away and talk to him for an Eevee and then breed away at your heart’s content to get the Eeveelutions:</p>

        <pre>
        Eevee → Water Stone → Vaporeon
        Eevee → Thunder Stone → Jolteon
        Eevee → Fire Stone → Flareon
        Eevee → Happiness (day) → Espeon
        Eevee → Happiness (night) → Umbreon
        </pre>

        <p>Sadly Glaceon and Leafeon are not part of the Johto Dex and not obtainable within the game as there are no areas with conditions for location-based evolutions. Best to evolve your original Eevee from Bill into one of the stone based evolutions so that your hatched ones will have a higher base happiness/friendship level to make Espeon and Umbreon easier to get. The Soothe Bell is available in National Park so keep it on one of your two Eevee and bear in mind you can visit the haircut brothers in the Goldenrod Underground area for a further happiness boost. </p>

        <p>Back in Ecruteak, your next stop in getting new pokemon should be to go to the Burned Tower in the upper left corner. Here you will meet Morty, Eusine and your rival. On the entry level you can find a Koffing, while the basement will house Magmar. Get close to the three legendary beasts in the basement and they will flee. This will trigger Raikou and Entei’s roaming around Johto for you to find and catch. Suicune does not roam, much like Pokemon Crystal and is found by interacting with it much later on. </p>

        <pre>
        Koffing → Lv. 35 → Weezing
        Magmar
        </pre>

        <p>Then of course you can go back to Goldenrod and breed Magmar to get a Magby!</p>

        <pre>Magmar → Breed → Magby</pre>

        <p>Finally, visit the Kimono Dance Theatre where you will battle a Team Rocket grunt who is harassing a Kimono Girl. Your reward for intervening will be the Surf HM (though we can’t use it yet). </p>

        <h5>Route 38/39 </h5>
        <p>Out of the western exit from Ecruteak we head towards Olivine City. It is a fairly straight forward route, but do dive into the grass in order to find quite a number of new pokemon. Both routes have exactly the same pokemon with the exception of Snubbull who is only on Route 38 and is extremely rare at a 1% encounter rate. The only time-based appearance to worry about here is Farfetch’d who does not appear at night time.</p>

        <pre>
        Magnemite → Lv. 30 → Magneton
        Snubbull → Lv. 23 → Granbull
        Farfetch’d
        Tauros
        Miltank
        (SS) Meowth → Lv. 28 → Persian
        </pre>

        <h5>Olivine City </h5>
        <p>There’s a few places you’ll need to stop at in order to help progress both the plot and your pokedex completion. First, you will find a man inside one of the houses who will trade Billy the Voltorb for your spare Krabby. If you didn’t catch one, you’ll shortly be able to grab one easily with a new fishing rod. </p>

        <pre>Voltorb → Lv. 30 → Electrode</pre>

        <p>Make sure you work your way up the lighthouse to see Jasmine though you may want to wait until you have a large squad of pokemon to train. There is a fisherman in Olivine who will give you a Good Rod for some more fishing. </p>

        <h5>Good Fishing Tour </h5>
        <p>It’s time to cast your rod once again with a tour around Johto to catch some new species. You can find the following pokemon deep in the waters:</p>

        <pre>
        (Olivine City Morning/Day) Corsola
        (Olivine City Night) Staryu → Water Stone → Starmie
        (Route 32) Qwilfish (2% encounter rate)
        (New Bark Town) Shellder → Water Stone → Cloyster
        (New Bark Town) Chinchou → Lv. 27 → Lanturn
        </pre>

        <h5>Mt Mortar </h5>
        <p>Without Surf, going past Olivine City is not possible so we’ll have to go in a different direction. Head through the east exit from Ecruteak City and as you reach the entrance to Mt Mortar you’ll meet a hiker who will give you the Strength HM. As mentioned, there’s not really much use for this at present other than coming out of another Dark Cave exit which doesn’t yield any more pokemon. Head inside the mountain and you can start your long search for Marill within the first area. Venture into the next floor and you won’t be able to find it. Marill is one of the original swarm pokemon from Gen 2 but can now be found here normally at a tiny 1% encounter rate. </p>

        <pre>Marill → Lv. 18 → Azumarill</pre>

        <h5>Route 42 </h5>
        <p>When you emerge from the cave, dive into the grassy patch directly below to find a Mankey (HG). Defeat Fisherman Tully and there’s a chance he’ll call you and give you a Water Stone. Feel free to register him but after the hell from the previous section I’d rather get mine from the Pokeathlon Dome every Wednesday.</p>

        <pre>(HG) Mankey → Lv. 28 → Primeape</pre>

        <h5>Mahogany Town/Route 43 - </h5>
        <p>There’s really very little to do in Mahogany Town at present, so head north towards the Lake of Rage. In the grasses of Route 43 you’ll encounter the last of our wild pokemon from this section:</p>

        <pre>Girafarig</pre>

        <h5>Chasing the Beasts </h5>
        <p>So we have two roaming pokemon that happen to be legendaries on the prowl. If you open the PokeGear map you’ll see Raikou and Entei’s current positions. Every time you move to a different area/town/route they will move to an adjacent route to the one they are currently on or in some cases may jump randomly across the map. The annoying part of chasing them is that you can’t keep the map open while you run around so you will be constantly opening the map, seeing if they are near, moving to an area, opening the map etc until they are in your location. I would suggest moving from Ecruteak/Route 36/Route 37 because there are no gates to pass through, it’s all out in the open. Once you are in the same location, spray a repel (assuming your lead pokemon is no higher than Lv40). </p>

        <p>In Platinum, if the roaming pokemon was faster than you, it would flee before you could use an attack. The nice thing in HeartGold/SoulSilver is that fleeing is a low priority action, meaning that even the slowest pokemon can act first. This means you can slowly chip away at their health during each encounter until their HP is low enough. I used a Haunter with Night Shade so I wouldn’t score a critical hit. Saving between encounters is also a good idea. Bear in mind that their HP and any status moves will be the same when you encounter them again. If you can trap them with Mean Look (also from Haunter) then you get a few turns to try and catch them. The down side is that there just aren’t many decent pokeballs available. You’ll likely only have a few Ultra Balls. The best ball to use is a Fast Ball as both Entei and Raikou have base speed of 100+. Get yourself a minimum of ten and get ready to catch them. Having their HP in the red and having a status move (I put them to sleep) helps tremendously. If you can’t catch the pokemon within 5 Fast Balls, reset and try again. You can either throw a Fast Ball at the sleeping pokemon straight off or use Mean Look to trap it for a few turns, bearing in mind that it might wake up in which case it could use Roar to make you flee, knock you out and of course you need to put it to sleep again.</p>

        <pre>
        Raikou
        Entei
        </pre>

        <h5>Levelling Tips </h5>
        <p>Save the gym trainers in Ecruteak for the pokemon that evolve at higher levels as well as the lighthouse trainers. The two best places to grind would be Route 43 or Routes 38/39. Although Tauros/Miltank do give a lot of exp, I found the common Rattata encounters too frequent as they give bad exp and Magnemite was annoying to battle against with water/electric pokemon. I think Route 43 was more beneficial, Girafarig was fairly common and gives the best exp on the route. Training here at night is a great idea, Noctowl gives better exp than Pidgeotto. The only downside to this route is that Flaaffy’s Static ability gets quite irritating.</p>

        <p>If you don’t mind the trek and lack of healing options, it’s possible to cross over through Dark Cave and reach Route 45 where the Headbutt trees have higher levelled pokemon and include Heracross! (Thanks to Serpent19 for this)</p>

        <p>
        <strong>End of part 4:</strong><br/>>
        Caught 139, Remaining 117
        </p>
        ${guideSource}`,
      rows: [
        /* ================= Sudowoodo / Route 36 ================= */
        { pokemon: { img: imgBasehref + "185.png", name: "Sudowoodo" }, method: "Route 36 (only encounter, requires SquirtBottle)" },

        /* ================= Poliwhirl Evolution ================= */
        { pokemon: { img: imgBasehref + "061.png", name: "Poliwhirl" }, method: "Earlier capture" },
        { pokemon: { img: imgBasehref + "062.png", name: "Poliwrath" }, method: "Use Water Stone on Poliwhirl" },

        /* ================= Eevee and Evolutions ================= */
        { pokemon: { img: imgBasehref + "133.png", name: "Eevee" }, method: "Gift from Bill (Goldenrod City)" },
        { pokemon: { img: imgBasehref + "134.png", name: "Vaporeon" }, method: "Use Water Stone on Eevee" },
        { pokemon: { img: imgBasehref + "135.png", name: "Jolteon" }, method: "Use Thunder Stone on Eevee" },
        { pokemon: { img: imgBasehref + "136.png", name: "Flareon" }, method: "Use Fire Stone on Eevee" },
        { pokemon: { img: imgBasehref + "196.png", name: "Espeon" }, method: "Evolve Eevee with happiness (day)" },
        { pokemon: { img: imgBasehref + "197.png", name: "Umbreon" }, method: "Evolve Eevee with happiness (night)" },

        /* ================= Burned Tower ================= */
        { pokemon: { img: imgBasehref + "109.png", name: "Koffing" }, method: "Burned Tower" },
        { pokemon: { img: imgBasehref + "110.png", name: "Weezing" }, method: "Evolve Koffing at level 35" },
        { pokemon: { img: imgBasehref + "126.png", name: "Magmar" }, method: "Burned Tower (basement)" },
        { pokemon: { img: imgBasehref + "240.png", name: "Magby" }, method: "Breed Magmar" },

        /* ================= Route 38 / 39 ================= */
        { pokemon: { img: imgBasehref + "081.png", name: "Magnemite" }, method: "Route 38 / 39" },
        { pokemon: { img: imgBasehref + "082.png", name: "Magneton" }, method: "Evolve Magnemite at level 30" },

        { pokemon: { img: imgBasehref + "209.png", name: "Snubbull" }, method: "Route 38 (1% encounter)" },
        { pokemon: { img: imgBasehref + "210.png", name: "Granbull" }, method: "Evolve Snubbull at level 23" },

        { pokemon: { img: imgBasehref + "083.png", name: "Farfetch’d" }, method: "Route 38 / 39 (not at night)" },
        { pokemon: { img: imgBasehref + "128.png", name: "Tauros" }, method: "Route 38 / 39" },
        { pokemon: { img: imgBasehref + "241.png", name: "Miltank" }, method: "Route 38 / 39" },

        { pokemon: { img: imgBasehref + "052.png", name: "Meowth" }, method: "(SS) Route 38 / 39" },
        { pokemon: { img: imgBasehref + "053.png", name: "Persian" }, method: "Evolve Meowth at level 28" },

        /* ================= Olivine City ================= */
        { pokemon: { img: imgBasehref + "100.png", name: "Voltorb" }, method: "Trade spare Krabby in Olivine City" },
        { pokemon: { img: imgBasehref + "101.png", name: "Electrode" }, method: "Evolve Voltorb at level 30" },

        /* ================= Good Fishing Tour ================= */
        { pokemon: { img: imgBasehref + "222.png", name: "Corsola" }, method: "Good Rod (Olivine City, day)" },
        { pokemon: { img: imgBasehref + "120.png", name: "Staryu" }, method: "Good Rod (Olivine City, night)" },
        { pokemon: { img: imgBasehref + "121.png", name: "Starmie" }, method: "Use Water Stone on Staryu" },
        { pokemon: { img: imgBasehref + "211.png", name: "Qwilfish" }, method: "Good Rod (Route 32, 2% encounter)" },
        { pokemon: { img: imgBasehref + "090.png", name: "Shellder" }, method: "Good Rod (New Bark Town)" },
        { pokemon: { img: imgBasehref + "091.png", name: "Cloyster" }, method: "Use Water Stone on Shellder" },
        { pokemon: { img: imgBasehref + "170.png", name: "Chinchou" }, method: "Good Rod (New Bark Town)" },
        { pokemon: { img: imgBasehref + "171.png", name: "Lanturn" }, method: "Evolve Chinchou at level 27" },

        /* ================= Mt Mortar ================= */
        { pokemon: { img: imgBasehref + "183.png", name: "Marill" }, method: "Mt Mortar (1% encounter)" },
        { pokemon: { img: imgBasehref + "184.png", name: "Azumarill" }, method: "Evolve Marill at level 18" },

        /* ================= Route 42 ================= */
        { pokemon: { img: imgBasehref + "056.png", name: "Mankey" }, method: "(HG) Route 42" },
        { pokemon: { img: imgBasehref + "057.png", name: "Primeape" }, method: "Evolve Mankey at level 28" },

        /* ================= Route 43 ================= */
        { pokemon: { img: imgBasehref + "203.png", name: "Girafarig" }, method: "Route 43" },

        /* ================= Roaming Legendary Beasts ================= */
        { pokemon: { img: imgBasehref + "243.png", name: "Raikou" }, method: "Roaming Johto after Burned Tower event" },
        { pokemon: { img: imgBasehref + "244.png", name: "Entei" }, method: "Roaming Johto after Burned Tower event" }
      ]
    },
    pryce: {
      headerTitle: "Pre Badge 5 - Pryce",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort:
        "Here we go! As with most games, having access to Surf has a plethora of additional areas for you to now delve into! Although you are free to start exploring now, there is a time-sensitive event to be aware of. Getting the Safari Zone side quest started is your main priority. ",
      summaryHtml: `
        <p>Surf to Cianwood City, get the medicine for Amphy and return to Jasmine at the lighthouse. Doing so will unlock the Safari Zone and you’ll get a phone call to confirm this. Go back to Cianwood and go west until you reach the Safari Zone. Baoba (the owner) will give you a task to catch a Geodude in the first area as you enter. As soon as you catch it, retire from the safari and show it to Baoba. Once you’ve done that, you’ll need to wait 3 in game hours to take the next test which opens up more areas within the safari zone so it’s best to get this covered now so that those 3 hours pass while you’re catching and training. With that done, we can start exploring! </p>

        <p>A worthwhile detour to do here would be to capture or defeat the Red Gyarados at the Lake of Rage. With the Red Scale obtained afterwards, take it back to Mr Pokémon north of Cherrygrove City and trade it for the exp share. Any Pokémon holding this item will get half the exp earned from the battle without even participating! </p>

        <h5>Route 41</h5>
        <p>Surf just off the eastern coast of Cianwood and you’ll dip into Route 41. If you’re playing HeartGold, you may encounter a Mantine to add to your collection. For SoulSilver players, it’s just the standard Tentacool/Tentacruel.</p>

        <pre>(HG) Mantine</pre>

        <h5>Cianwood City</h5>
        <p>The gym here is skippable at present although it does make travelling a little more awkward without being able to use Fly. Inside one of the houses is a man that will give you his Shuckle to look after for a while. Make sure you have a spare slot in your team. Go to the northern reach of the beach to find Suicune. Don’t worry, you won’t battle it yet.</p>

        <pre>Shuckle</pre>

        <h5>Route 47</h5>
        <p>Start heading back towards the safari zone. Inside the caves are a large number of different pokemon. Like with Diamond/Pearl/Platinum, it’s possible to catch a wild Steelix which means that you’ll have a trade evolution pokemon without trading! Have a rummage in the caves at night for a chance to catch Misdreavus which we can’t evolve until post game. Misdreavus is also found in the Safari Zone during all times of the day so consider catching it there if it’s not currently night time. </p>

        <pre>
        Steelix
        Misdreavus
        </pre>

        <p>Make your way down the ladders in the caves and go outside to Surf in the waters for a chance to catch a Seel.</p>

        <pre>Seel → Lv. 34 → Dewgong</pre>

        <h5>Route 48</h5>
        <p>The last patch of grass before you get back to the safari zone has Diglett hiding within it. This is also a great training spot for grinding.</p>

        <pre>Diglett → Lv. 26 → Dugtrio</pre>

        <h5>Safari Zone</h5>
        <p>The safari zone has six different areas already laid out but the areas are not the same for all players. As mentioned before, you need to ‘activate’ the safari zone and wait 3 in-game hours to be able to move areas around. We will assume that you’ve reached this point. There’s quite a difference in the available pokemon at different times of the day so you’ll need to come back during day and night times. </p>

        <p>Being in the Peak area at night will make Wobbuffet appear (alternatively you can explore the deep regions of Dark Cave now).</p>

        <pre>Wobbuffet</pre>

        <p>In the Marshland you’ll find a Grimer in the grass and via Surfing unless it’s night time in which case you can still find it by Surfing. </p>

        <pre>Grimer → Lv. 38 → Muk</pre>

        <p>In the Forest area, Mr Mime hangs around here during the morning/daytime:</p>

        <pre>Mr Mime</pre>

        <p>In the Mountain area, come here at any time apart from night to find:</p>

        <pre>
        (Day/Morning) Larvitar → Lv. 30 → Pupitar → Lv. 55 → Tyranitar
        (Day/Morning) Lickitung → Level up after learning Rollout (Lv. 33) → Lickilicky
        </pre>

        <p>In the Swamp area you’ll need to visit at different times of the day:</p>

        <pre>
        (Day/Morning) Jigglypuff → Moon Stone → Wigglytuff
        (Any time) Murkrow
        </pre>

        <p>In the Wasteland area you’ll want to be here during daylight hours to find a classic Safari Zone pokemon:</p>

        <pre>(Day/Morning) Kangaskhan</pre>

        <p>In the Plains area you’ll find a Smeargle in the day/morning. I’d recommend capturing it here rather than Ruins of Alph because of Sketch/Struggle issues. </p>

        <pre>Smeargle</pre>

        <p>In the Meadow area you’ll find Clefairy at night. </p>

        <pre>Clefairy → Moon Stone → Clefable</pre>

        <p>Doduo inhabits the Rocky Beach area during the day/morning and you can Surf here for a Lapras instead of waiting until Friday for it to appear in Union Cave. </p>

        <pre>
        Doduo → Lv. 31 → Dodrio
        Lapras
        </pre>

        <p>Psyduck lives in the Wetland in the grass during the night or at any time via Surfing. Golduck can also be caught here if you don’t want to evolve Psyduck.</p>

        <pre>Psyduck → Lv. 33 → Golduck</pre>

        <p>The Savannah houses Rhyhorn during daylight hours. </p>

        <pre>Rhyhorn → Lv. 42 → Rhydon</pre>

        <p>Finally, in the Desert area you’ll find Cubone (and Marowak) during the day/morning. </p>

        <pre>Cubone → Lv. 28 → Marowak</pre>

        <p>With all these new pokemon there are two we can breed for baby pokemon:</p>

        <pre>
        Clefairy/Clefable → Breed → Cleffa
        Jigglypuff/Wigglytuff → Breed → Igglybuff
        </pre>

        <h5>Ruins of Alph</h5>
        <p>So catching everything in/on the way to the Safari Zone was the bulk of this section. The only other place to go for new pokemon is in the grassy areas of the Ruins of Alph. However we can’t get there directly. Go to Union Cave via Route 32 and go down the steps in the top left corner of the cave. Once you Surf across it’s a straightforward layout which will bring you outside in the ruins. Smeargle is here if you didn’t catch it at the Safari Zone. Otherwise we’re only here for one pokemon:</p>

        <pre>Natu → Lv. 25 → Xatu</pre>

        <h5>Levelling Tips</h5>
        <p>So we have a lot of pokemon to catch in this section but only 10 pokemon to train, a few of which are late evolvers. Fresh out of the Safari Zone, I found route 48 was a good spot to train (mostly while I was looking for Diglett) but for HeartGold players this can be an annoyance as Tauros and Growlithe both potentially have Intimidate. Otherwise we actually get much higher levels for wild pokemon. Anywhere that requires Surf to get to is a good place to train so that includes deeper areas of Dark Cave, Union Cave and Mt Mortar. Don’t forget to battle all of the trainers along the sea routes between Cianwood and Olivine and of course the trainers in the Cianwood gym (except for Chuck). You could also go to the Lake of Rage and kick Team Rocket out of Mahogany Town which I would highly recommend since the next section gives very few new pokemon to catch. The only pokemon I found difficulty training in this section was Natu because it had NO attacking moves. Even if you catch one at level 18-19 it will only have Night Shade. Natu can be caught as high as Level 24 which means it’s only one level away from evolving. </p>

        <p>
        <strong>End of part 5:</strong><br/>
        (HeartGold) Caught 176, Remaining 80<br/>
        (SoulSilver) Caught 175, Remaining 81
        </p>
        ${guideSource}
        `,
      rows: [
        /* ================= Route 41 ================= */ { pokemon: { img: imgBasehref + "226.png", name: "Mantine" }, method: "(HG) Route 41 (Surf)" },

        /* ================= Cianwood City ================= */
        { pokemon: { img: imgBasehref + "213.png", name: "Shuckle" }, method: "Gift Pokémon in Cianwood City" },

        /* ================= Route 47 ================= */
        { pokemon: { img: imgBasehref + "208.png", name: "Steelix" }, method: "Wild encounter in Route 47 caves" },
        { pokemon: { img: imgBasehref + "200.png", name: "Misdreavus" }, method: "Route 47 caves (night) or Safari Zone" },

        { pokemon: { img: imgBasehref + "086.png", name: "Seel" }, method: "Surf in Route 47 waters" },
        { pokemon: { img: imgBasehref + "087.png", name: "Dewgong" }, method: "Evolve Seel at level 34" },

        /* ================= Route 48 ================= */
        { pokemon: { img: imgBasehref + "050.png", name: "Diglett" }, method: "Route 48 grass" },
        { pokemon: { img: imgBasehref + "051.png", name: "Dugtrio" }, method: "Evolve Diglett at level 26" },

        /* ================= Safari Zone ================= */
        { pokemon: { img: imgBasehref + "202.png", name: "Wobbuffet" }, method: "Safari Zone (Peak, night)" },

        { pokemon: { img: imgBasehref + "088.png", name: "Grimer" }, method: "Safari Zone (Marshland)" },
        { pokemon: { img: imgBasehref + "089.png", name: "Muk" }, method: "Evolve Grimer at level 38" },

        { pokemon: { img: imgBasehref + "122.png", name: "Mr. Mime" }, method: "Safari Zone (Forest, day/morning)" },

        { pokemon: { img: imgBasehref + "246.png", name: "Larvitar" }, method: "Safari Zone (Mountain, day/morning)" },
        { pokemon: { img: imgBasehref + "247.png", name: "Pupitar" }, method: "Evolve Larvitar at level 30" },
        { pokemon: { img: imgBasehref + "248.png", name: "Tyranitar" }, method: "Evolve Pupitar at level 55" },

        { pokemon: { img: imgBasehref + "108.png", name: "Lickitung" }, method: "Safari Zone (Mountain, day/morning)" },
        { pokemon: { img: imgBasehref + "463.png", name: "Lickilicky" }, method: "Level up Lickitung knowing Rollout" },

        { pokemon: { img: imgBasehref + "039.png", name: "Jigglypuff" }, method: "Safari Zone (Swamp, day/morning)" },
        { pokemon: { img: imgBasehref + "040.png", name: "Wigglytuff" }, method: "Use Moon Stone on Jigglypuff" },

        { pokemon: { img: imgBasehref + "198.png", name: "Murkrow" }, method: "Safari Zone (Swamp, any time)" },

        { pokemon: { img: imgBasehref + "115.png", name: "Kangaskhan" }, method: "Safari Zone (Wasteland, day/morning)" },

        { pokemon: { img: imgBasehref + "235.png", name: "Smeargle" }, method: "Safari Zone (Plains, day/morning)" },

        { pokemon: { img: imgBasehref + "035.png", name: "Clefairy" }, method: "Safari Zone (Meadow, night)" },
        { pokemon: { img: imgBasehref + "036.png", name: "Clefable" }, method: "Use Moon Stone on Clefairy" },

        { pokemon: { img: imgBasehref + "084.png", name: "Doduo" }, method: "Safari Zone (Rocky Beach, day/morning)" },
        { pokemon: { img: imgBasehref + "085.png", name: "Dodrio" }, method: "Evolve Doduo at level 31" },

        { pokemon: { img: imgBasehref + "131.png", name: "Lapras" }, method: "Safari Zone (Rocky Beach, Surf)" },

        { pokemon: { img: imgBasehref + "054.png", name: "Psyduck" }, method: "Safari Zone (Wetland)" },
        { pokemon: { img: imgBasehref + "055.png", name: "Golduck" }, method: "Evolve Psyduck at level 33" },

        { pokemon: { img: imgBasehref + "111.png", name: "Rhyhorn" }, method: "Safari Zone (Savannah, day)" },
        { pokemon: { img: imgBasehref + "112.png", name: "Rhydon" }, method: "Evolve Rhyhorn at level 42" },

        { pokemon: { img: imgBasehref + "104.png", name: "Cubone" }, method: "Safari Zone (Desert, day/morning)" },
        { pokemon: { img: imgBasehref + "105.png", name: "Marowak" }, method: "Evolve Cubone at level 28" },

        { pokemon: { img: imgBasehref + "173.png", name: "Cleffa" }, method: "Breed Clefairy or Clefable" },
        { pokemon: { img: imgBasehref + "174.png", name: "Igglybuff" }, method: "Breed Jigglypuff or Wigglytuff" },

        /* ================= Ruins of Alph ================= */
        { pokemon: { img: imgBasehref + "177.png", name: "Natu" }, method: "Ruins of Alph grass (Surf access)" },
        { pokemon: { img: imgBasehref + "178.png", name: "Xatu" }, method: "Evolve Natu at level 25" }
      ]
    },
    "chuck-jasmine": {
      headerTitle: "Pre Badges 6 and 7 - Chuck, Jasmine",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort:
        "So there’s a dilemma here…We have three gyms we can access in any order, so which do we pick? Well Jasmine’s badge doesn’t give any perks. Chuck’s badge lets you use Fly which, while useful, doesn’t give new pokemon. What about Pryce? His badge lets you use Whirlpool which DOES give access to a small area for new pokemon so we’ll take his badge first.",
      summaryHtml: `
        <p>This is assuming that you have defeated Team Rocket in Mahogany Town. Sadly this does not move the guy blocked the eastern exit just yet. With the Whirlpool HM from the Team Rocket hideout, go back to the Whirl Islands between Cianwood and Olivine. Using Whirlpool will let you swim across the whirlpools allowing you to enter the caves. Surfing inside will find you a Horsea.</p>

        <pre>Horsea → Lv. 32 → Seadra</pre>

        <h5>Levelling Tips – </h5>
        <p>Yep, that’s it! Teach Horsea Surf and go into any cave that has lots of Rock/Ground types for a quick win!</p>

        <p>
        <strong>End of part 6:</strong> <br/>
        (HeartGold) Caught 178, Remaining 78<br/>
        (SoulSilver) Caught 177, Remaining 79
        </p>
        ${guideSource}
      `,
      rows: [
        { pokemon: { img: imgBasehref + "116.png", name: "Horsea" }, method: "Whirl Isalnds" },
        { pokemon: { img: imgBasehref + "117.png", name: "Seadra" }, method: "Evlove Horsea at level 32" }
      ]
    },
    clair: {
      headerTitle: "Pre Badge 8 - Clair",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort:
        "Since they give no new pokemon by themselves, let’s cover both gyms at once. As soon as badge number 7 is in your possession, you’ll get a call from Prof. Elm and you can take on Team Rocket in Goldenrod City at the Radio Tower. Sadly there’s nowhere to go for new pokemon until AFTER this section so feel free to let your toughest pokemon level up even more (Tyranitar/Dragonite/Pickup pokemon). Once Team Rocket is out of the way you can FINALLY get past Mahogany Town!",
      summaryHtml: `
        Part 7 - Pre Badge 8 from Clair

        <h5>Route 44</h5>
        <p>A brand new route with some brand new pokemon! Within the waters of this route you’ll find a new pokemon to fish for. Like Qwilfish, it is extremely rare (2%) to catch it with a Good Rod outside of swarms which are unavailable until you have the national dex. You’ll need to surf across the water to find some grass where you’ll find a Tangela. </p>

        <pre>
        Remoraid-->Lv. 25-->Octillery
        Tangela-->Lv. Up knowing Ancientpower-->Tangrowth
        </pre>

        <h5>Ice Path</h5>
        <p>The cave at the end of the route leads to the chilly Ice Path where most of the pokemon are new to you. Swinub and Jynx are found in both versions while SoulSilver has an additional pokemon, Delibird. Make sure to pick up the HM for Waterfall!</p>

        <pre>
        Swinub-->Lv. 33-->Piloswine-->Lv. Up knowing Ancientpower-->Mamoswine
        Jynx
        (SS) Delibird
        </pre>

        <p>And with Jynx in hand we can breed it for another baby pokemon:</p>

        <pre>Jynx-->Breed-->Smoochum</pre>

        <h5>Blackthorn City and Route 45</h5>
        <p>Emerging from the cave you’ll reach the site of the final gym. Here you’ll find the move tutor who will teach your pokemon a move that they have forgotten. This is perfect timing because when you have your Piloswine you will need to do exactly this to let it learn Ancientpower so it can evolve. Head south from Blackthorn City until you find a patch of grass. This has a lot of version exclusive pokemon in it. HeartGold players will find Phanpy and Gligar while SoulSilver players will meet Teddiursa and Skarmory. </p>

        <pre>
        (HG) Phanpy-->Lv. 25-->Donphan
        (HG) Gligar
        (SS) Teddiursa-->Lv. 30-->Ursaring
        (SS) Skarmory
        </pre>

        <h5>Levelling Tips</h5>
        <p>It was another pretty short section. We do have access to trainer rematches so you can grab what you can. There are lots of guides out there so I’d suggest calling whoever has their trainer rematch window open and abuse that. If you want to just grind on wild pokemon, Route 45 is good for Tangela and Swinub but not so good for Teddiursa/Phanpy who might be better suited for places like Route 43. </p>

        <p>
        <strong>End of part 7:</strong><br/>
        Caught 190, Remaining 66
        </p>
        ${guideSource}
      `,
      rows: [
        /* ================= Route 44 ================= */
        { pokemon: { img: imgBasehref + "223.png", name: "Remoraid" }, method: "Route 44 (Good Rod, Surf areas)" },
        { pokemon: { img: imgBasehref + "224.png", name: "Octillery" }, method: "Evolve Remoraid at level 25" },

        { pokemon: { img: imgBasehref + "114.png", name: "Tangela" }, method: "Route 44 grass (Surf access)" },
        { pokemon: { img: imgBasehref + "465.png", name: "Tangrowth" }, method: "Level up Tangela knowing Ancientpower" },

        /* ================= Ice Path ================= */
        { pokemon: { img: imgBasehref + "220.png", name: "Swinub" }, method: "Ice Path" },
        { pokemon: { img: imgBasehref + "221.png", name: "Piloswine" }, method: "Evolve Swinub at level 33" },
        { pokemon: { img: imgBasehref + "473.png", name: "Mamoswine" }, method: "Level up Piloswine knowing Ancientpower" },

        { pokemon: { img: imgBasehref + "124.png", name: "Jynx" }, method: "Ice Path" },
        { pokemon: { img: imgBasehref + "238.png", name: "Smoochum" }, method: "Breed Jynx" },

        { pokemon: { img: imgBasehref + "225.png", name: "Delibird" }, method: "(SS) Ice Path" },

        /* ================= Blackthorn City / Route 45 ================= */
        { pokemon: { img: imgBasehref + "231.png", name: "Phanpy" }, method: "(HG) Route 45 grass" },
        { pokemon: { img: imgBasehref + "232.png", name: "Donphan" }, method: "Evolve Phanpy at level 25" },

        { pokemon: { img: imgBasehref + "207.png", name: "Gligar" }, method: "(HG) Route 45 grass" },

        { pokemon: { img: imgBasehref + "216.png", name: "Teddiursa" }, method: "(SS) Route 45 grass" },
        { pokemon: { img: imgBasehref + "217.png", name: "Ursaring" }, method: "Evolve Teddiursa at level 30" },

        { pokemon: { img: imgBasehref + "227.png", name: "Skarmory" }, method: "(SS) Route 45 grass" }
      ]
    },
    "pre-elite-4": {
      headerTitle: "Pre Elite 4",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort:
        "Defeat Clair and clear the Dragon’s Den and then, with your final Johto badge in your case, either jump down the ledges or Fly to New Bark Town. Speak to Professor Elm to receive a Master Ball. He will mention that the Kimono girls are looking for you. ",
      summaryHtml: `
        <h5>Mt Mortar revisited</h5>
        <p>You’ll need two things to consider…You need a HM slave that has Surf, Strength and Waterfall (Gyarados is a good candidate) and you’ll need a spare slot in your team. Between Ecruteak/Mahogany Town there’s another entrance to Mt Mortar which you can Surf to. Interact with Suicune while you’re here to make it flee to the next location. Go through this entrance, Surf on the water then go up the waterfall to the north. This will lead you to an extra section of the cave where you’ll eventually find Black Belt Kiyo who, once defeated, will give you a Tyrogue! Breed this a couple of times and raise their stats as appropriate to get all three Hitmons. Having a nature that affects Attack or Defence (or neutral for Hitmontop) is definitely a good start. Consider training on Route 48 for attack based EVs to help evolve Tyrogue into Hitmonlee and Route 45 for defense EVs to get Hitmonchan, alternating if one stat goes above the other to get Hitmontop (thanks LuckyIGN for the training tip!)</p>

        <pre>
        Tyrogue-->Lv. 20 (Attack higher than Defence)-->Hitmonlee
        Tyrogue-->Lv. 20 (Defence higher than Attack)-->Hitmonchan
        Tyrogue-->Lv. 20 (Attack and Defence equal)-->Hitmontop
        </pre>

        <h5>Box Legendary</h5>
        <p>Go back to Ecruteak City and defeat the Kimono sisters at the dance theatre. Doing so will make your box legendary appear. For HeartGold players, simply climb the tower right here in Ecruteak. For Lugia, go to the Whirl Islands and enter the closest island to Olivine City. When you reach a junction, take the northern route. Make sure you have a pokemon that can give the legendary a status condition (preferably Sleep) and bring your bulkiest pokemon, most likely Tyranitar and Dragonite. You can simply use the Master Ball but I honestly would save this for other legendaries, which are Lv70, or for the roaming pokemon you have yet to unlock (Latias/Latios). Other pokeballs that are useful are Heavy Balls for Lugia, Dusk Balls (Lugia only unless it’s night for Ho-Oh) and Timer Balls for long, gruelling battles. </p>

        <pre>
        (HG) Ho-Oh
        (SS) Lugia
        </pre>

        <h5>To Kanto!</h5>
        <p>Once you’ve caught the above, grab your Waterfall pokemon and head east from New Bark Town and you’ll be in the nostalgic region of Kanto. Use Waterfall to cross Tohjo Falls and when you emerge you’ll be on Route 27 proper. Lurking in the grass is one new pokemon:</p>

        <pre>Ponyta-->Lv. 40-->Rapidash</pre>

        <p>Head north east through Route 26 and Victory Road and it’s time for the Elite Four! But you shouldn’t have any problems with that…your Dragonite has been stronger than the Champion’s since before you got your third badge!!! </p>

        <h5>Levelling Tips</h5>
        <p>Also not a long section. Tyrogue should be easy enough to level as it only evolves at Lv20. Ponyta takes longer, but training in the route you caught it in is the best place. You want to use it ideally against the trainers on Route 26/27 for some serious experience, but maybe pump it up a few levels first. As before, trainer rematches are available, check what time it is and see if anyone will battle you. </p>

        <p>
        <strong>End of part 8: <br/></strong>
        Caught 197, Remaining 59
        </p>

        <p>Technically this could be the end of the challenge but surely you want to keep going???</p>

        ${guideSource}
      `,
      rows: [
        /* ================= Mt Mortar Revisited ================= */
        { pokemon: { img: imgBasehref + "236.png", name: "Tyrogue" }, method: "Gift from Black Belt Kiyo in Mt Mortar" },
        { pokemon: { img: imgBasehref + "106.png", name: "Hitmonlee" }, method: "Evolve Tyrogue at level 20 (Attack > Defense)" },
        { pokemon: { img: imgBasehref + "107.png", name: "Hitmonchan" }, method: "Evolve Tyrogue at level 20 (Defense > Attack)" },
        { pokemon: { img: imgBasehref + "237.png", name: "Hitmontop" }, method: "Evolve Tyrogue at level 20 (Attack = Defense)" },

        /* ================= Box Legendary ================= */
        { pokemon: { img: imgBasehref + "250.png", name: "Ho-Oh" }, method: "(HG) Bell Tower after Kimono Girls" },
        { pokemon: { img: imgBasehref + "249.png", name: "Lugia" }, method: "(SS) Whirl Islands after Kimono Girls" },

        /* ================= Kanto Access ================= */
        { pokemon: { img: imgBasehref + "077.png", name: "Ponyta" }, method: "Route 27 grass" },
        { pokemon: { img: imgBasehref + "078.png", name: "Rapidash" }, method: "Evolve Ponyta at level 40" }
      ]
    },
    misty: {
      headerTitle: "Pre Kanto Badge 1 - Misty",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "Be prepared for a ridiculously large undertaking…",
      summaryHtml: `
        <p>So you’re the champion! Go see Professor Elm immediately to get an SS Ticket which you can use to get the ferry from Olivine City to Vermilion City. Before you board, you’ll have a shiny new National Pokedex from Professor Oak to work on! For the rest of this challenge we will still operate under the same rules in that we need as many pokemon as possible before the next badge. </p>

        <p>Before you start working on captures in Kanto, you’ll want to secure your way back to Johto to take advantage of the things you’ll want to do in tandem. </p>

        <h5>There’s two important things to do before we can access almost everywhere in Kanto: </h5>
        <p>1. You’ll need to restore the Power Plant in Kanto. Go to the Power Plant on Route 10 to find out about a robber, chase the robber (Team Rocket) from the Cerulean City gym to get the missing part and return it to the Power Plant. Then speak to the director at the Lavender Town radio tower for a radio upgrade including a pokeflute for Snorlax!</p>
        <p>2. In order to return to Johto easily, we need to get the Magnet Train pass. Now that the power is restored, talk to the Copycat family in Saffron City to find out that Copycat has lost her pokedoll. Retrieve it from the pokemon fan club in Vermilion City and you’ll be given a pass for the train which takes you back to Goldenrod City. If you’re dead set on getting everything out of the Safari Zone you may want to start the next test and plant the areas you want to level up so you don’t waste any days.</p>

        <h5>Safari Zone – </h5>
        <p>You definitely want to start this as soon as you possibly can. If you’re planning on catching EVERY pokemon in the game you will need to wait a whopping 100 days (over 3 months) for everything to appear. The mechanics of the safari zone aren’t very clear from the information given in the game and I will try to explain it as simply as I can!  </p>

        <p>When you rearrange the areas of the safari zone, for every 10 days that an area is active as one of the 6 areas placed, it will level up one of its attributes (peak, forest, waterside etc). When you place an object it will give one point to its relevant attribute, but when an area levels up, it multiplies the effect of any objects placed. For example, if the Rocky Beach area has been active for enough days (40 days), the level for its Waterside attribute is now Lv2. When you place a waterside object, it gives double the amount of points (2 points). Some pokemon require a specific number of object points to appear. Some are available as soon as you place enough objects, some will require you to level up the areas first to be able to reach the amount of points required (Lv4 = 4x multiplier). The attributes level up as follows:</p>

        <pre>
        10 days – Plains attribute reaches Lv2
        20 days - Forest attribute reaches Lv2
        30 days - Peak attribute reaches Lv2
        40 days – Waterside attribute reaches Lv2
        50 days – Plains attribute reaches Lv3
        60 days – Forest attribute reaches Lv3
        70 days – Peak attribute reaches Lv3
        80 days – Waterside attribute reaches Lv3
        100 days – Plains attribute reaches Lv4
        110 days – Forest attribute reaches Lv4
        120 days – Peak attribute reaches Lv4
        130 days – Waterside attribute reaches Lv4
        </pre>

        <p>Since Rocky Beach requires the longest period of time, you’ll want this area active as early as possible. Unfortunately, you can’t just skip the DS 100 days ahead. It is possible to adjust the time to 23:59, allow the day to cross over into midnight and repeat the process but a) you might consider that cheating and b) it can be quite finicky. I waited the entire 100 days to match the spirit of the challenge. I’m also not entirely sure if you have to actually PLAY HGSS every day or if the DS simply recognises that x days have passed. If people have done the above trick by changing the time to 23:59 then you may not have to play the game every day but I have just to be safe. The four areas that require the longest period are:</p>

        <pre>
        Rocky Beach (100 days)
        Wetland (70 days)
        Meadow (70 days)
        Forest (70 days)
        </pre>

        <p>These four areas can remain placed for the entirety of the rest of the challenge. For the remaining three slots I’ve placed the below with the intention of changing them once all pokemon in that area are unlocked:</p>

        <pre>
        Peak
        Savannah
        </pre>

        <p>I’ve removed some pokemon from the list below since they (or their pre-evolution) can be caught elsewhere without waiting for the required number of days. Pokemon that can be caught elsewhere that can also be caught in the Safari Zone immediately (e.g. Zigzagoon) I’ve left in. The schedule for catching is as below. This is assuming you catch and swap areas at the very first opportunity as listed. For stone evolutions, all can be obtained from the Pokeathlon which is the easiest method (aside from Pickup Sun/Moon Stones) or alternatively visit Bill’s grandfather in Kanto. Since this will take 100 days, you may want to combine this with obtaining BP for evolution items (see further below for evolving existing Pokémon).</p>

        <h5>Immediately Available (The First Day)</h5>
        <p>
        <strong>Rocky Beach</strong>
        </p>
        <pre>
        Place 10 Plains objects, grass encounter – Electrike-->Lv. 26-->Manectric
        Place 18 Forest objects, grass encounter – Budew-->Happiness (daytime)-->Roselia-->Shiny Stone-->Roserade
        Place 24 Peak objects, grass encounter – Aron-->Lv. 32-->Lairon-->Lv. 42-->Aggron
        Place 15 Water objects, fish Super Rod (obtained on Route 12) – Corphish-->Lv. 30-->Crawdaunt
        </pre>

        <p>
        <strong>Wetland</strong>
        </p>
        <pre>
        Place 6 Plains objects, grass encounter – Surskit-->Lv. 22-->Masquerain
        Place 14 Plains objects, grass encounter – Lombre-->Water Stone-->Ludicolo
        Place 8 Forest objects, grass encounter – Pachirisu
        </pre>

        <p><strong>Meadow</strong></p>
        <pre>Place 28 Forest objects, grass encounter – Nuzleaf-->Leaf Stone-->Shiftry</pre>

        <p>
        <strong>Peak</strong></p>
        <pre>Place 12 Plains objects, grass encounter – Zangoose</pre>

        <p>
        <strong>Savannah</strong></p>
        <pre>
        Place 10 Plains objects, grass encounter – Zigzagoon-->Lv. 20-->Linoone
        Place 24 Plains objects, grass encounter – Luxio-->Lv. 30-->Luxray
        Place 5 Water objects, grass encounter - Azurill
        </pre>

        <h5>At 20 days – </h5>
        <p>
        <strong>Savannah</strong></p>
        <pre>Place 18 Forest objects, grass encounter – Cacturne</pre>
        <p>
        <strong>Forest</strong></p>
        <pre>Place 18 Forest objects, grass encounter – Shuppet-->Lv. 37-->Banette</pre>

        <h5>At 30 days – </h5>
        <p>
        <strong>Savannah</strong></p>
        <pre>Place 18 Peak objects, grass encounter – Torkoal </pre>
        <p>Once you’ve caught Torkoal, swap the Savannah area for the Wasteland area</p>

        <p>
        <strong>Wasteland</strong></p>
        <pre>
        Place 10 Plains objects, grass encounter – Illumise
        Place 28 Peak objects, grass encounter – Skorupi-->Lv. 40-->Drapion
        </pre>
        <p>
        <strong>Meadow</strong></p>
        <pre>Place 18 Peak objects, grass encounter - Nosepass</pre>

        <h5>At 40 days –</h5>
        <p>
        <strong>Peak</strong></p>
        <pre>Place 18 Water objects, grass encounter – Spheal-->Lv. 32-->Sealeo-->Lv. 44-->Walrein</pre>
        <p>Once you’ve caught Spheal, swap the Peak area for the Desert area</p>
        <p>
        <strong>Desert</strong></p>
        <pre>Place 28 Peak objects, grass encounter – Hippopotas-->Lv. 34-->Hippowdon</pre>

        <h5>At 60 days –</h5>
        <p>
        <strong>Desert</strong></p>
        <pre>Place 25 Forest objects, grass encounter – Vibrava-->Lv. 45-->Flygon</pre>
        <p>Once you’ve caught Vibrava, swap the Desert area for the Marshland area</p>
        <p>
        <strong>Wasteland - </strong></p>
        <pre>Place 21 Peak objects, grass encounter – Solrock</pre>
        <p>Once you’ve caught Solrock, swap the Wasteland area for the Swamp area</p>
        <p>
        <strong>Swamp</strong></p>
        <pre>Place 28 Peak objects, grass encounter – Duskull-->Lv. 37-->Dusclops </pre>
        <p>Once you’ve caught Duskull, swap the Swamp area for the Mountain area</p>
        <p>
        <strong>Mountain</strong></p>
        <pre>Place 15 Peak objects, grass encounter - Lunatone</pre>

        <h5>At 70 days</h5>
        <p>
        <stron>Marshland – </p></stron>
        <pre>Place 18 Plains objects, grass encounter – Seviper</pre>
        <p>
        <strong>Wetland</strong></p>
        <pre>Place 21 Peak objects, grass encounter – Shelgon-->Lv. 50-->Salamence</pre>
        <p>
        <strong>Meadow</strong></p>
        <pre>Place 10 Forest and 14 Peak objects – Riolu-->Happiness (daytime)-->Lucario </pre>
        <p>
        <strong>Forest</strong></p>
        <pre>Place 21 Peak objects, grass encounter - Beldum-->Lv. 20-->Metang-->Lv. 45-->Metagross</pre>

        <h5>At 80 days</h5>
        <p>
        <strong>Marshland</sttrong></p>
        <pre>Place 21 Forest objects, grass encounter – Croagunk-->Lv. 37-->Toxicroak</pre>

        <h5>At 100 days</h5>
        <p>
        <strong>Rocky Beach</strong></p>
        <pre>Place 13 Plains and 17 Peak objects, grass encounter – Gible-->Lv. 24-->Gabite-->Lv. 48-->Garchomp</pre>

        <p>And we can breed some of the evolved pokemon:</p>
        <pre>
        Lombre/Ludicolo-->Breed-->Lotad
        Shelgon/Salamence-->Breed-->Bagon
        Nuzleaf/Shiftry-->Breed-->Seedot
        Luxio/Luxray-->Breed-->Shinx
        Cacturne-->Breed-->Cacnea
        Illumise-->Breed-->(50% chance)Volbeat OR catch Volbeat in Bug Catching Contest
        Vibrava/Flygon-->Breed-->Trapinch
        </pre>


        <h5>Swarms</h5>
        <p>A staple to many pokemon games, tune in to the radio every day and listen to Mary and Prof Oak’s show. They will tell you of a swarm of pokemon and will tell you the particular route that they are in (so I won’t list the routes). Some of these are pokemon you have already caught and spent ages trying to find that 1% encounter rate! But some are genuinely new pokemon from Hoenn/Sinnoh. I’ve excluded Kricketot as it would be easier to get from the Bug Catching Contest. Dawn Stones can be obtained from Pokeathlon or Bug Catching Contest.These cannot be soft reset to get the desired Pokémon. It may just be entirely luck based, but the last two Pokémon I needed didn’t show up until near the end of my 100 day safari zone wait. I was always getting Kanto/Johto pokemon until I saved the game after seeing what the swarm Pokémon was and then sure enough the next few days I finally got Buneary and Baltoy. But again, this might have just been rotten luck.</p>

        <pre>
        Poochyena-->Lv. 18-->Mightyena
        Wingull-->Lv. 25-->Pelipper
        Ralts-->Lv. 20-->Kirlia-->Lv. 30-->Gardevoir
        Ralts-->Lv. 20-->Kirlia (male)-->Dawn Stone-->Gallade
        (HG) Sableye
        (SS) Mawile
        (SS) Gulpin-->Lv. 26-->Swalot
        Swablu-->Lv. 35-->Altaria
        (Fish) Whiscash
        (HG) Baltoy-->Lv. 36-->Claydol
        Clamperl
        Relicanth
        Luvdisc
        Buneary-->Happiness (any time)-->Lopunny
        </pre>

        <p>And after fishing for Whiscash:</p>
        <pre>Whiscash-->Breed-->Barboach</pre>

        <h5>Hoenn Sound</h5>
        <p>Every Wednesday you can tune into Hoenn Sound on the radio on your Pokegear. This will lead to encounters with pokemon from the Hoenn games. They are low encounter rates so don’t get discouraged if they don’t appear. You will also need to turn the radio back on after every encounter otherwise you will just find the usual selection of pokemon. To make this easier you may want to catch the pokemon at higher levels so that they evolve quicker unless you’re like me and you’ve caught them at the first routes on the guide you look at (info from Bulbapedia) and therefore catch them really low levelled!</p>

        <p>Sprout Tower, Bell Tower, and Burned Tower</p>
        <pre>Spinda</pre>

        <p>Routes 4, 6, 9, 10, 13, 21, 22, 24, 25, 26, 27, 28, 30, 31, 32, 34, 35, 42, 43, 44, 45, 47, Ruins of Alph, and Mt. Silver (outside)</p>
        <pre>Whismur-->Lv. 20-->Loudred-->Lv. 40-->Exploud</pre>

        <p>Slowpoke Well, Union Cave, Mt. Mortar, Dark Cave, Whirl Islands, Mt. Silver (cave), Ice Path, Cliff Cave, Diglett's Cave, Mt. Moon, Cerulean Cave, Rock Tunnel, Seafoam Islands, Victory Road, Tohjo Falls</p>
        <pre>
        Makuhita-->Lv. 24-->Hariyama
        Absol
        </pre>

        <p>Routes 1, 2, 3, 5, 7, 8, 11, 14, 15, 16, 17, 18, 29, 33, 36, 37, 38, 39, 46, 48, and National Park</p>
        <pre>
        Plusle
        Minun
        </pre>

        <p>Ilex Forest and Viridian Forest</p>
        <pre>
        Numel-->Lv. 33-->Camerupt
        Spoink-->Lv. 32-->Grumpig
        </pre>

        <h5>Sinnoh Sound</h5>
        <p>This works exactly the same as Hoenn Sound but this particular station only plays on Thursdays. Pokemon found in the Sinnoh games (yes, even Meditite, a Hoenn pokemon) will come out to battle. The locations are also the same. </p>

        <p>Sprout Tower, Bell Tower, and Burned Tower</p>
        <pre>
        Meditite-->Lv. 37-->Medicham
        Chatot
        </pre>

        <p>Routes 4, 6, 9, 10, 13, 21, 22, 24, 25, 26, 27, 28, 30, 31, 32, 34, 35, 42, 43, 44, 45, 47, Ruins of Alph, and Mt. Silver (outside)</p>
        <pre>
        Bidoof-->Lv. 15-->Bibarel
        Buizel-->Lv. 26-->Floatzel
        </pre>

        <p>Slowpoke Well, Union Cave, Mt. Mortar, Dark Cave, Whirl Islands, Mt. Silver (cave), Ice Path, Cliff Cave, Diglett's Cave, Mt. Moon, Cerulean Cave, Rock Tunnel, Seafoam Islands, Victory Road, Tohjo Falls</p>
        <pre>
        Chingling-->Happiness (Night)-->Chimecho
        Bronzor-->Lv. 33-->Bronzong
        </pre>

        <p>Ilex Forest and Viridian Forest</p>
        <pre>Carnivine</pre>


        <h5>Bug Catching Contest</h5>
        <p>On Thursdays and Saturdays, the bug catching contest now has additional bug pokemon from other regions! If you’ve followed the guide closely so far, then the only two pokemon you’ll need are Nincada and Kricketot/Kricketune. If you didn’t breed Illumise for Volbeat you can also catch one here too.</p>

        <pre>
        Nincada-->Lv. 20-->Ninjask
        Nincada-->Lv. 20 with spare slot in team-->Shedinja
        Kricketot-->Lv. 10-->Kricketune
        </pre>

        <h5>Starting your Kanto conquest</h5>

        <h5>Route 15</h5>
        <p>With no Safari Zone, Chansey has fled to the nearby areas which include routes 13 and 14 as well. It is extremely rare with only a 1% encounter rate but at least it won’t flee! Get a Lv25 pokemon and give it a Smoke Ball then spray a repel. You’ll only ever encounter Chansey and either Pidgeotto or Noctowl depending on the time of day. Try to capture it in a Friend or Luxury Ball to make its happiness raise faster or breed it for a better initial happiness rating. Give it a Soothe Bell so that when you’re done with the rest of your Kanto tour you’ll have made good progress towards boosting its happiness. </p>

        <p>Chansey also has a 5% chance of holding a Lucky Egg which is great for bonus exp but trying to find a wild Chansey can be difficult enough! Having a Pokémon with the Compound Eyes ability in the lead slot helps increase the chances of it holding one.</p>

        <pre>Chansey-->Happiness-->Blissey</pre>

        <h5>Wake Up Snorlax</h5>
        <p>Snorlax is outside Diglett Cave just east of Vermilion City. With the above information you will have the pokeflute on your radio. Play the station (requires manual tuning) then examine Snorlax to initiate a battle. Make sure you save beforehand! </p>

        <pre>Snorlax</pre>

        <h5>The Power Plant</h5>
        <p>The Power Plant is still located on Route 10. It doesn’t have wild pokemon inside anymore but the patch of grass outside will have an Electabuzz in it which you can also then breed for Elekid. </p>

        <pre>
        Electabuzz
        Electabuzz-->Breed-->Elekid
        </pre>

        <h5>Viridian Forest</h5>
        <p>Inside Viridian Forest lives that shocking mascot we all know. Catch one and breed it. Thunder Stones are much easier to find now in the Pokeathlon and the bug catching contest or you can show a Pichu to Bill’s grandfather north of Cerulean City. </p>

        <pre>
        Pikachu-->Thunder Stone-->Raichu
        Pikachu-->Breed-->Pichu
        </pre>

        <h5>Articuno and the Seafoam Islands</h5>
        <p>Surf from Pallet Town to Cinnabar Island and the East to the Seafoam Islands. You’ll be able to track down Articuno in its old stomping grounds. This is the only one of the legendary bird trio you can get prior to getting all Kanto badges. </p>

        <pre>Articuno</pre>

        <h5>Celadon City and Route 7</h5>
        <p>Porygon is still stuck inside the Game Corner as a prize so the only way to get one is to get enough coins to buy it! Time for some more Voltorb flip. Just east of Celadon City you’ll find Houndour in the grass at night. </p>

        <pre>
        Porygon
        Houndour-->Lv. 24-->Houndoom
        </pre>

        <h5>Pewter City Science Museum</h5>
        <p>Enter the museum and speak to the scientist on the right and you’ll be able to resurrect the fossil you picked up in the Ruins of Alph along with the Old Amber you should have also picked up. If not, get back there and smash some rocks. </p>

        <pre>
        Aerodactyl
        (HG) Omanyte-->Lv. 40-->Omastar
        (SS) Kabuto-->Lv. 40-->Kabutops
        </pre>

        <h5>The other box legendary</h5>
        <p>Go to Pewter City and speak to a man who is walking around outside who will give you the item to awaken the other box legendary. For SoulSilver players, go find Ho-Oh in Ecruteak City. For HeartGold players, dive into the Whirl Islands for Lugia (see previous sections on catching box legendaries after your 8th Johto badge). These guys are at a massive Lv70. Heavy Balls work great for Lugia, even without a status effect it’s just under a 10% chance to catch it if its HP is red.</p>

        <pre>
        (SS) Ho-Oh
        (HG) Lugia
        </pre>

        <h5>Headbutt Trees</h5>
        <p>There are a few select areas where the Headbutt trees are different to the usual selection of pokemon.</p>

        <pre>
        Pewter City – From Route 2, go behind the fence on the left.
        Starly-->Lv. 14-->Staravia-->Lv. 34-->Staraptor
        Wurmple-->Lv. 7-->Cascoon-->Lv. 10-->Dustox
        Wurmple-->Lv. 7-->Silcoon-->Lv. 10-->Beautifly
        </pre>

        <p>Route 25 – In the very north western corner after crossing Nugget Bridge.</p>
        <pre>
        Combee(female)-->Lv. 21-->Vespiquen
        Slakoth-->Lv. 18-->Vigoroth-->Lv. 36-->Slaking
        </pre>

        <p>Viridian Forest – Go forward and then left from the southern entrance to see a cluster of 8 trees (2x4). Headbutt the top left tree.</p>
        <pre>Shroomish-->Lv. 23-->Breloom</pre>

        <h5>Evolving existing pokemon</h5>
        <p>With access to new areas we can get certain items to evolve pokemon from our Johto dex. For HeartGold players you will need to purchase a Razor Fang which can only be bought in the Battle Frontier (48BP). I would recommend raising a Pokémon properly (nature, IVs, EV trained) to get the points from the Battle Tower. Although the Battle Factory lets you use rental Pokémon, it’s far too luck based and you need to defeat 7 trainers before you get any BP and even then it’s a pitiful amount. A great tip from u/kevbot011, battling at the Trainer House in Viridian City will net you 1BP per day. Since the Safari Zone will take you 100 days, this is a much more reliable and gradual way to get BP without the stress of losing battle streaks at the Battle Frontier or spending time on EV training Pokémon. If you’re not in a rush, this is a nice alternative to getting those 96BP if you’re playing HeartGold to get the Razor Fang and the Razor Claw for the final section of the challenge.</p>

        <p>Dusk Stones can be obtained from a Pokegear call from Biker Reese (Route 17), one of the random bug catching contest prizes or from the Pokeathlon (most days). Shiny Stone can be obtained in the same way as the Dusk Stone, the only difference is the Pokegear call reward is from Birdkeeper Josh (Route 14). Honestly, it’s best to get both stones from Pokeathlon as it’s much easier.</p>

        <pre>
        (HG) Gligar-->Lv up at night holding Razor Fang-->Gliscor
        Murkrow-->Dusk Stone-->Honchkrow
        Misdreavus-->Dusk Stone-->Mismagius
        Togetic-->Shiny Stone-->Togekiss
        </pre>

        <p>Breeding existing pokemon</p>
        <p>Just one baby Pokémon for now with more to come later. Grab the Luck Incense in Vermillion City to breed for a Happiny</p>

        <pre>Chansey/Blissey-->Breed holding Luck Incense-->Happiny</pre>

        <p>Resurrecting more fossils</p>
        <p>If you go back to the cave you passed through on the way to the Safari Zone in Johto (Cliff Cave) and use Rock Smash on the rocks. You may be lucky enough to obtain a fossil! Like with Omanyte and Kabuto, these are version exclusives. HeartGold players will obtain the Claw fossil which can be resurrected at the Pewter City museum to get Anorith, SoulSilver players will find the Root fossil to resurrect Lileep.</p>

        <pre>
        (HG) Anorith-->Lv. 40-->Armaldo
        (SS) Lileep-->Lv. 40-->Cradily
        </pre>

        <h5>Another Roaming Legendary</h5>
        <p>Once you’ve met Steven Stone in Vermilion City after getting the pokedoll from the pokemon fan club, the legendary roamer from Hoenn will be in Kanto. As before with the legendary beasts, the Eon pokemon can be seen on the PokeGear map. Once you’ve found it, either capture it as before with the beasts or simply throw your coveted Master Ball. </p>

        <pre>
        (HG) Latias
        (SS) Latios
        </pre>

        <p><strong>End of part 9:</strong><p><br/>
        (HeartGold) National Dex Caught 348, Remaining 145<br/>
        (SoulSilver) National Dex Caught 347, Remaining 146
        ${guideSource}

      `,
      rows: [
        /* ================= Safari Zone – object placement ================= */
        { pokemon: { img: imgBasehref + "309.png", name: "Electrike" }, method: "Safari Zone plains (10 Plains objects)" },
        { pokemon: { img: imgBasehref + "310.png", name: "Manectric" }, method: "Evolve Electrike at level 26" },

        { pokemon: { img: imgBasehref + "406.png", name: "Budew" }, method: "Safari Zone forest (18 Forest objects)" },
        { pokemon: { img: imgBasehref + "315.png", name: "Roselia" }, method: "Evolve Budew with happiness (daytime)" },
        { pokemon: { img: imgBasehref + "407.png", name: "Roserade" }, method: "Use Shiny Stone on Roselia" },

        { pokemon: { img: imgBasehref + "304.png", name: "Aron" }, method: "Safari Zone peak (24 Peak objects)" },
        { pokemon: { img: imgBasehref + "305.png", name: "Lairon" }, method: "Evolve Aron at level 32" },
        { pokemon: { img: imgBasehref + "306.png", name: "Aggron" }, method: "Evolve Lairon at level 42" },

        { pokemon: { img: imgBasehref + "341.png", name: "Corphish" }, method: "Safari Zone water (15 Water objects, Super Rod)" },
        { pokemon: { img: imgBasehref + "342.png", name: "Crawdaunt" }, method: "Evolve Corphish at level 30" },

        { pokemon: { img: imgBasehref + "283.png", name: "Surskit" }, method: "Safari Zone plains (6 Plains objects)" },
        { pokemon: { img: imgBasehref + "284.png", name: "Masquerain" }, method: "Evolve Surskit at level 22" },

        { pokemon: { img: imgBasehref + "270.png", name: "Lombre" }, method: "Safari Zone plains (14 Plains objects)" },
        { pokemon: { img: imgBasehref + "272.png", name: "Ludicolo" }, method: "Use Water Stone on Lombre" },

        { pokemon: { img: imgBasehref + "417.png", name: "Pachirisu" }, method: "Safari Zone forest (8 Forest objects)" },

        { pokemon: { img: imgBasehref + "274.png", name: "Nuzleaf" }, method: "Safari Zone meadow (28 Forest objects)" },
        { pokemon: { img: imgBasehref + "275.png", name: "Shiftry" }, method: "Use Leaf Stone on Nuzleaf" },

        { pokemon: { img: imgBasehref + "335.png", name: "Zangoose" }, method: "Safari Zone peak (12 Plains objects)" },

        { pokemon: { img: imgBasehref + "263.png", name: "Zigzagoon" }, method: "Safari Zone savannah (10 Plains objects)" },
        { pokemon: { img: imgBasehref + "264.png", name: "Linoone" }, method: "Evolve Zigzagoon at level 20" },

        { pokemon: { img: imgBasehref + "404.png", name: "Luxio" }, method: "Safari Zone savannah (24 Plains objects)" },
        { pokemon: { img: imgBasehref + "405.png", name: "Luxray" }, method: "Evolve Luxio at level 30" },

        { pokemon: { img: imgBasehref + "298.png", name: "Azurill" }, method: "Safari Zone savannah (5 Water objects)" },

        { pokemon: { img: imgBasehref + "327.png", name: "Spinda" }, method: "Hoenn Sound areas" },

        { pokemon: { img: imgBasehref + "292.png", name: "Shedinja" }, method: "Evolve Nincada at level 20 with spare party slot" },
        { pokemon: { img: imgBasehref + "291.png", name: "Ninjask" }, method: "Evolve Nincada at level 20" },

        { pokemon: { img: imgBasehref + "353.png", name: "Shuppet" }, method: "Safari Zone forest (20 days)" },
        { pokemon: { img: imgBasehref + "354.png", name: "Banette" }, method: "Evolve Shuppet at level 37" },

        { pokemon: { img: imgBasehref + "324.png", name: "Torkoal" }, method: "Safari Zone savannah (30 days)" },

        { pokemon: { img: imgBasehref + "451.png", name: "Skorupi" }, method: "Safari Zone wasteland (30 days)" },
        { pokemon: { img: imgBasehref + "452.png", name: "Drapion" }, method: "Evolve Skorupi at level 40" },

        { pokemon: { img: imgBasehref + "299.png", name: "Nosepass" }, method: "Safari Zone meadow (30 days)" },

        { pokemon: { img: imgBasehref + "363.png", name: "Spheal" }, method: "Safari Zone peak (40 days)" },
        { pokemon: { img: imgBasehref + "364.png", name: "Sealeo" }, method: "Evolve Spheal at level 32" },
        { pokemon: { img: imgBasehref + "365.png", name: "Walrein" }, method: "Evolve Sealeo at level 44" },

        { pokemon: { img: imgBasehref + "449.png", name: "Hippopotas" }, method: "Safari Zone desert (40 days)" },
        { pokemon: { img: imgBasehref + "450.png", name: "Hippowdon" }, method: "Evolve Hippopotas at level 34" },

        { pokemon: { img: imgBasehref + "329.png", name: "Vibrava" }, method: "Safari Zone desert (60 days)" },
        { pokemon: { img: imgBasehref + "330.png", name: "Flygon" }, method: "Evolve Vibrava at level 45" },

        { pokemon: { img: imgBasehref + "337.png", name: "Lunatone" }, method: "Safari Zone mountain (60 days)" },
        { pokemon: { img: imgBasehref + "338.png", name: "Solrock" }, method: "Safari Zone wasteland (60 days)" },

        { pokemon: { img: imgBasehref + "355.png", name: "Duskull" }, method: "Safari Zone swamp (60 days)" },
        { pokemon: { img: imgBasehref + "356.png", name: "Dusclops" }, method: "Evolve Duskull at level 37" },

        { pokemon: { img: imgBasehref + "353.png", name: "Seviper" }, method: "Safari Zone marshland (70 days)" },

        { pokemon: { img: imgBasehref + "372.png", name: "Shelgon" }, method: "Safari Zone wetland (70 days)" },
        { pokemon: { img: imgBasehref + "373.png", name: "Salamence" }, method: "Evolve Shelgon at level 50" },

        { pokemon: { img: imgBasehref + "447.png", name: "Riolu" }, method: "Safari Zone meadow (70 days)" },
        { pokemon: { img: imgBasehref + "448.png", name: "Lucario" }, method: "Evolve Riolu with happiness (daytime)" },

        { pokemon: { img: imgBasehref + "374.png", name: "Beldum" }, method: "Safari Zone forest (70 days)" },
        { pokemon: { img: imgBasehref + "375.png", name: "Metang" }, method: "Evolve Beldum at level 20" },
        { pokemon: { img: imgBasehref + "376.png", name: "Metagross" }, method: "Evolve Metang at level 45" },

        { pokemon: { img: imgBasehref + "453.png", name: "Croagunk" }, method: "Safari Zone marshland (80 days)" },
        { pokemon: { img: imgBasehref + "454.png", name: "Toxicroak" }, method: "Evolve Croagunk at level 37" },

        { pokemon: { img: imgBasehref + "443.png", name: "Gible" }, method: "Safari Zone rocky beach (100 days)" },
        { pokemon: { img: imgBasehref + "444.png", name: "Gabite" }, method: "Evolve Gible at level 24" },
        { pokemon: { img: imgBasehref + "445.png", name: "Garchomp" }, method: "Evolve Gabite at level 48" },
        /* ================= Breeding ================= */
        { pokemon: { img: imgBasehref + "270.png", name: "Lotad" }, method: "Breed Lombre or Ludicolo" },
        { pokemon: { img: imgBasehref + "371.png", name: "Bagon" }, method: "Breed Shelgon or Salamence" },
        { pokemon: { img: imgBasehref + "273.png", name: "Seedot" }, method: "Breed Nuzleaf or Shiftry" },
        { pokemon: { img: imgBasehref + "403.png", name: "Shinx" }, method: "Breed Luxio or Luxray" },
        { pokemon: { img: imgBasehref + "331.png", name: "Cacnea" }, method: "Breed Cacturne" },
        { pokemon: { img: imgBasehref + "313.png", name: "Volbeat" }, method: "50% chance breeding Illumise or Bug Catching Contest" },
        { pokemon: { img: imgBasehref + "328.png", name: "Trapinch" }, method: "Breed Vibrava or Flygon" },

        /* ================= Swarms ================= */
        { pokemon: { img: imgBasehref + "261.png", name: "Poochyena" }, method: "Swarm" },
        { pokemon: { img: imgBasehref + "262.png", name: "Mightyena" }, method: "Evolve Poochyena at level 18" },

        { pokemon: { img: imgBasehref + "278.png", name: "Wingull" }, method: "Swarm" },
        { pokemon: { img: imgBasehref + "279.png", name: "Pelipper" }, method: "Evolve Wingull at level 25" },

        { pokemon: { img: imgBasehref + "280.png", name: "Ralts" }, method: "Swarm" },
        { pokemon: { img: imgBasehref + "281.png", name: "Kirlia" }, method: "Evolve Ralts at level 20" },
        { pokemon: { img: imgBasehref + "282.png", name: "Gardevoir" }, method: "Evolve Kirlia at level 30" },
        { pokemon: { img: imgBasehref + "475.png", name: "Gallade" }, method: "Use Dawn Stone on male Kirlia" },

        { pokemon: { img: imgBasehref + "302.png", name: "Sableye" }, method: "(HG) Swarm" },
        { pokemon: { img: imgBasehref + "303.png", name: "Mawile" }, method: "(SS) Swarm" },

        { pokemon: { img: imgBasehref + "316.png", name: "Gulpin" }, method: "(SS) Swarm" },
        { pokemon: { img: imgBasehref + "317.png", name: "Swalot" }, method: "Evolve Gulpin at level 26" },

        { pokemon: { img: imgBasehref + "333.png", name: "Swablu" }, method: "Swarm" },
        { pokemon: { img: imgBasehref + "334.png", name: "Altaria" }, method: "Evolve Swablu at level 35" },

        { pokemon: { img: imgBasehref + "340.png", name: "Whiscash" }, method: "Swarm / Fishing" },

        { pokemon: { img: imgBasehref + "343.png", name: "Baltoy" }, method: "(HG) Swarm" },
        { pokemon: { img: imgBasehref + "344.png", name: "Claydol" }, method: "Evolve Baltoy at level 36" },

        { pokemon: { img: imgBasehref + "366.png", name: "Clamperl" }, method: "Swarm" },
        { pokemon: { img: imgBasehref + "369.png", name: "Relicanth" }, method: "Swarm" },
        { pokemon: { img: imgBasehref + "370.png", name: "Luvdisc" }, method: "Swarm" },

        { pokemon: { img: imgBasehref + "427.png", name: "Buneary" }, method: "Swarm" },
        { pokemon: { img: imgBasehref + "428.png", name: "Lopunny" }, method: "Evolve Buneary with happiness" },

        { pokemon: { img: imgBasehref + "339.png", name: "Barboach" }, method: "Breed Whiscash" },

        /* ================= Hoenn Sound ================= */
        { pokemon: { img: imgBasehref + "327.png", name: "Spinda" }, method: "Hoenn Sound" },
        { pokemon: { img: imgBasehref + "293.png", name: "Whismur" }, method: "Hoenn Sound" },
        { pokemon: { img: imgBasehref + "294.png", name: "Loudred" }, method: "Evolve Whismur at level 20" },
        { pokemon: { img: imgBasehref + "295.png", name: "Exploud" }, method: "Evolve Loudred at level 40" },

        { pokemon: { img: imgBasehref + "296.png", name: "Makuhita" }, method: "Hoenn Sound" },
        { pokemon: { img: imgBasehref + "297.png", name: "Hariyama" }, method: "Evolve Makuhita at level 24" },
        { pokemon: { img: imgBasehref + "359.png", name: "Absol" }, method: "Hoenn Sound" },

        { pokemon: { img: imgBasehref + "311.png", name: "Plusle" }, method: "Hoenn Sound" },
        { pokemon: { img: imgBasehref + "312.png", name: "Minun" }, method: "Hoenn Sound" },

        { pokemon: { img: imgBasehref + "322.png", name: "Numel" }, method: "Hoenn Sound" },
        { pokemon: { img: imgBasehref + "323.png", name: "Camerupt" }, method: "Evolve Numel at level 33" },
        { pokemon: { img: imgBasehref + "325.png", name: "Spoink" }, method: "Hoenn Sound" },
        { pokemon: { img: imgBasehref + "326.png", name: "Grumpig" }, method: "Evolve Spoink at level 32" },

        /* ================= Sinnoh Sound ================= */
        { pokemon: { img: imgBasehref + "307.png", name: "Meditite" }, method: "Sinnoh Sound" },
        { pokemon: { img: imgBasehref + "308.png", name: "Medicham" }, method: "Evolve Meditite at level 37" },
        { pokemon: { img: imgBasehref + "441.png", name: "Chatot" }, method: "Sinnoh Sound" },

        { pokemon: { img: imgBasehref + "399.png", name: "Bidoof" }, method: "Sinnoh Sound" },
        { pokemon: { img: imgBasehref + "400.png", name: "Bibarel" }, method: "Evolve Bidoof at level 15" },
        { pokemon: { img: imgBasehref + "418.png", name: "Buizel" }, method: "Sinnoh Sound" },
        { pokemon: { img: imgBasehref + "419.png", name: "Floatzel" }, method: "Evolve Buizel at level 26" },

        { pokemon: { img: imgBasehref + "433.png", name: "Chingling" }, method: "Sinnoh Sound" },
        { pokemon: { img: imgBasehref + "358.png", name: "Chimecho" }, method: "Evolve Chingling with happiness (night)" },
        { pokemon: { img: imgBasehref + "436.png", name: "Bronzor" }, method: "Sinnoh Sound" },
        { pokemon: { img: imgBasehref + "437.png", name: "Bronzong" }, method: "Evolve Bronzor at level 33" },

        { pokemon: { img: imgBasehref + "455.png", name: "Carnivine" }, method: "Sinnoh Sound" },

        /* ================= Bug Catching Contest ================= */
        { pokemon: { img: imgBasehref + "290.png", name: "Nincada" }, method: "Bug Catching Contest" },
        { pokemon: { img: imgBasehref + "291.png", name: "Ninjask" }, method: "Evolve Nincada at level 20" },
        { pokemon: { img: imgBasehref + "292.png", name: "Shedinja" }, method: "Evolve Nincada with spare party slot" },
        { pokemon: { img: imgBasehref + "401.png", name: "Kricketot" }, method: "Bug Catching Contest" },
        { pokemon: { img: imgBasehref + "402.png", name: "Kricketune" }, method: "Evolve Kricketot at level 10" },

        /* ================= Kanto ================= */
        { pokemon: { img: imgBasehref + "113.png", name: "Chansey" }, method: "Route 15 / Routes 13–14" },
        { pokemon: { img: imgBasehref + "242.png", name: "Blissey" }, method: "Evolve Chansey with happiness" },

        { pokemon: { img: imgBasehref + "143.png", name: "Snorlax" }, method: "Wake with Poké Flute near Diglett Cave" },

        { pokemon: { img: imgBasehref + "125.png", name: "Electabuzz" }, method: "Route 10 grass near Power Plant" },
        { pokemon: { img: imgBasehref + "239.png", name: "Elekid" }, method: "Breed Electabuzz" },

        { pokemon: { img: imgBasehref + "025.png", name: "Pikachu" }, method: "Viridian Forest" },
        { pokemon: { img: imgBasehref + "026.png", name: "Raichu" }, method: "Use Thunder Stone on Pikachu" },
        { pokemon: { img: imgBasehref + "172.png", name: "Pichu" }, method: "Breed Pikachu" },

        { pokemon: { img: imgBasehref + "144.png", name: "Articuno" }, method: "Seafoam Islands" },

        { pokemon: { img: imgBasehref + "137.png", name: "Porygon" }, method: "Celadon Game Corner" },
        { pokemon: { img: imgBasehref + "228.png", name: "Houndour" }, method: "Route 7 (night)" },
        { pokemon: { img: imgBasehref + "229.png", name: "Houndoom" }, method: "Evolve Houndour at level 24" },

        { pokemon: { img: imgBasehref + "142.png", name: "Aerodactyl" }, method: "Pewter City Science Museum" },
        { pokemon: { img: imgBasehref + "138.png", name: "Omanyte" }, method: "(HG) Resurrect fossil" },
        { pokemon: { img: imgBasehref + "139.png", name: "Omastar" }, method: "Evolve Omanyte at level 40" },
        { pokemon: { img: imgBasehref + "140.png", name: "Kabuto" }, method: "(SS) Resurrect fossil" },
        { pokemon: { img: imgBasehref + "141.png", name: "Kabutops" }, method: "Evolve Kabuto at level 40" },

        { pokemon: { img: imgBasehref + "249.png", name: "Lugia" }, method: "(HG) Whirl Islands" },
        { pokemon: { img: imgBasehref + "250.png", name: "Ho-Oh" }, method: "(SS) Ecruteak City" },

        /* ================= Headbutt Trees ================= */
        { pokemon: { img: imgBasehref + "396.png", name: "Starly" }, method: "Headbutt (Pewter City)" },
        { pokemon: { img: imgBasehref + "397.png", name: "Staravia" }, method: "Evolve Starly at level 14" },
        { pokemon: { img: imgBasehref + "398.png", name: "Staraptor" }, method: "Evolve Staravia at level 34" },
        { pokemon: { img: imgBasehref + "265.png", name: "Wurmple" }, method: "Headbutt" },
        { pokemon: { img: imgBasehref + "266.png", name: "Silcoon" }, method: "Evolve Wurmple at level 7" },
        { pokemon: { img: imgBasehref + "269.png", name: "Dustox" }, method: "Evolve Cascoon at level 10" },
        { pokemon: { img: imgBasehref + "267.png", name: "Beautifly" }, method: "Evolve Silcoon at level 10" },

        { pokemon: { img: imgBasehref + "415.png", name: "Combee" }, method: "Headbutt Route 25" },
        { pokemon: { img: imgBasehref + "416.png", name: "Vespiquen" }, method: "Evolve female Combee at level 21" },
        { pokemon: { img: imgBasehref + "287.png", name: "Slakoth" }, method: "Headbutt Route 25" },
        { pokemon: { img: imgBasehref + "288.png", name: "Vigoroth" }, method: "Evolve Slakoth at level 18" },
        { pokemon: { img: imgBasehref + "289.png", name: "Slaking" }, method: "Evolve Vigoroth at level 36" },

        { pokemon: { img: imgBasehref + "285.png", name: "Shroomish" }, method: "Headbutt Viridian Forest" },
        { pokemon: { img: imgBasehref + "286.png", name: "Breloom" }, method: "Evolve Shroomish at level 23" },

        /* ================= Evolution Items ================= */
        { pokemon: { img: imgBasehref + "472.png", name: "Gliscor" }, method: "(HG) Level up Gligar at night holding Razor Fang" },
        { pokemon: { img: imgBasehref + "430.png", name: "Honchkrow" }, method: "Use Dusk Stone on Murkrow" },
        { pokemon: { img: imgBasehref + "429.png", name: "Mismagius" }, method: "Use Dusk Stone on Misdreavus" },
        { pokemon: { img: imgBasehref + "468.png", name: "Togekiss" }, method: "Use Shiny Stone on Togetic" },

        { pokemon: { img: imgBasehref + "440.png", name: "Happiny" }, method: "Breed Chansey or Blissey holding Luck Incense" },

        /* ================= Cliff Cave Fossils ================= */
        { pokemon: { img: imgBasehref + "347.png", name: "Anorith" }, method: "(HG) Resurrect Claw Fossil" },
        { pokemon: { img: imgBasehref + "348.png", name: "Armaldo" }, method: "Evolve Anorith at level 40" },
        { pokemon: { img: imgBasehref + "345.png", name: "Lileep" }, method: "(SS) Resurrect Root Fossil" },
        { pokemon: { img: imgBasehref + "346.png", name: "Cradily" }, method: "Evolve Lileep at level 40" },

        /* ================= Roaming Legendary ================= */
        { pokemon: { img: imgBasehref + "380.png", name: "Latias" }, method: "(HG) Roaming Kanto after Steven Stone" },
        { pokemon: { img: imgBasehref + "381.png", name: "Latios" }, method: "(SS) Roaming Kanto after Steven Stone" }
      ]
    },
    "pre-elite-4-kanto": {
      headerTitle: "Pre Kanto Elite Four",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "",
      summaryHtml: `
        <h5>Chasing after Suicune</h5>
        <p>Hopefully you would have met Suicune in several places during your adventure. It will stay in a permanent location for you to catch it once you’ve seen it in the following places:</p>
        <pre>
        Northern beach of Cianwood City
        Outside Mt Mortar entrance (requires Surf)
        Vermilion City Harbour once you disembark from SS Aqua
        Route 14 in Kanto
        </pre>

        <p>You then need to actually defeat Misty to get Suicune to appear. Suicune will now appear at Cerulean Cape (north of Cerulean City) where it will be stationary and ready for you to challenge it. Make sure you save your game before encountering it.</p>

        <pre>Suicune</pre>

        <p>
        <strong>End of part 10:</strong> <br/>
        (HeartGold) National Dex Caught 349, Remaining 144<br/>
        (SoulSilver) National Dex Caught 348, Remaining 145
        </p>
        ${guideSource}`,
      rows: [
        {
          pokemon: { img: imgBasehref + "245.png", name: "Suicune" },
          method: "Cerulean Cape (after encountering Suicune at Cianwood City, Mt Mortar entrance, Vermilion City Harbour, Route 14, and defeating Misty)"
        }
      ]
    },
    red: {
      headerTitle: "Pre Red",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort:
        "Earn all the remaining 8 badges in a row, finishing with Blue in Viridian City (after meeting him on Cinnabar Island). Go speak to Professor Oak and he’ll let you explore more areas of Kanto. He’ll also give you HM08 Rock Climb. ",
      summaryHtml: `
        <p>So where can we go? Well to start there’s a bunch of Kanto legendaries waiting for you.</p>

        <h5>Zapdos and the Power Plant</h5>
        <p>Zapdos will now be found outside of the Power Plant on Route 10  at Lv50.</p>

        <pre>Zapdos</pre>

        <h5>Cerulean Cave</h5>
        <p>Mewtwo’s famous spot is inside the cave north west of Cerulean City. Mewtwo is also at a whopping Lv70 so bring your strongest pokemon. </p>

        <pre>Mewtwo</pre>

        <h5>Mt Silver</h5>
        <p>From Viridian City, go west and you can cross over the gate to Victory Road and enter Route 28 which leads up to Mt Silver. In the grass outside you’ll be able to find a Sneasel. Inside the mountain you’ll find Moltres has found a home there so capture the third legendary bird. At the top of the mountain you can battle the legendary trainer, Red, but not until you’ve caught everything in this section! You’ll need to purchase another expensive Battle Frontier item to get the Razor Claw for 48BP.</p>

        <pre>
        Sneasel-->Lv up at night holding Razor Claw-->Weavile
        Moltres
        </pre>

        <h5>More baby Pokémon</h5>
        <p>With Rock Climb we can grab some more incenses for breeding. The locations are: Full Incense in Mt. Mortar, Lax Incense on Route 38, Odd Incense in Cerulean Cave, Pure Incense in Mt. Silver, Rock Incense in Diglett's Cave, Rose Incense on Route 15, Sea Incense in Cerulean Cave and Wave Incense on Route 47.</p>

        <pre>
        Wobbuffet-->Breed holding Lax Incense-->Wynaut
        Snorlax-->Breed holding Full Incense-->Munchlax
        Mr Mime-->Breed holding Odd Incense-->Mime Jr
        Sudowoodo-->Breed holding Rock Incense-->Bonsly
        (HG) Mantine-->Breed holding Wave Incense-->Mantyke
        </pre>

        <h5>More Headbutt Trees</h5>
        <p>As before, some special trees give access to separate pokemon from the normal Headbutt Pokémon. These trees require Rock Climb to get to. </p>

        <p>Cherrygrove City – Surf off the beach and then use Rock Climb. </p>
        <pre>Taillow-->Lv. 22-->Swellow</pre>

        <p>National Park – Use Rock Climb in the north eastern corner behind the fence:</p>
        <pre>Cherubi-->Lv. 25-->Cherrim</pre>

        <p>Route 38 – Accessed from Route 39, use Rock Climb. </p>
        <pre>
        Burmy(female)-->Lv. 20-->Wormadam
        Burmy(male)-->Lv. 20-->Mothim
        </pre>

        <p><strong>End of part 11:</strong> <br/>
        (HeartGold) National Dex Caught 366, Remaining 127 <br/>
        (SoulSilver) National Dex Caught 364, Remaining 129
        </p>
        ${guideSource}
        `,
      rows: [
        /* ================= Zapdos ================= */
        {
          pokemon: { img: imgBasehref + "145.png", name: "Zapdos" },
          method: "Outside the Power Plant on Route 10 (Lv. 50)"
        },

        /* ================= Mewtwo ================= */
        {
          pokemon: { img: imgBasehref + "150.png", name: "Mewtwo" },
          method: "Cerulean Cave (Lv. 70)"
        },

        /* ================= Mt Silver ================= */
        {
          pokemon: { img: imgBasehref + "215.png", name: "Sneasel" },
          method: "Route 28 grass (outside Mt Silver)"
        },
        {
          pokemon: { img: imgBasehref + "461.png", name: "Weavile" },
          method: "Level up Sneasel at night holding Razor Claw"
        },
        {
          pokemon: { img: imgBasehref + "146.png", name: "Moltres" },
          method: "Mt Silver interior"
        },

        /* ================= Baby Pokémon (Incense Breeding) ================= */
        {
          pokemon: { img: imgBasehref + "360.png", name: "Wynaut" },
          method: "Breed Wobbuffet holding Lax Incense"
        },
        {
          pokemon: { img: imgBasehref + "446.png", name: "Munchlax" },
          method: "Breed Snorlax holding Full Incense"
        },
        {
          pokemon: { img: imgBasehref + "439.png", name: "Mime Jr." },
          method: "Breed Mr. Mime holding Odd Incense"
        },
        {
          pokemon: { img: imgBasehref + "438.png", name: "Bonsly" },
          method: "Breed Sudowoodo holding Rock Incense"
        },
        {
          pokemon: { img: imgBasehref + "458.png", name: "Mantyke" },
          method: "(HG) Breed Mantine holding Wave Incense"
        },

        /* ================= Special Headbutt Trees ================= */
        {
          pokemon: { img: imgBasehref + "276.png", name: "Taillow" },
          method: "Headbutt tree (Cherrygrove City, Rock Climb access)"
        },
        {
          pokemon: { img: imgBasehref + "277.png", name: "Swellow" },
          method: "Evolve Taillow at level 22"
        },

        {
          pokemon: { img: imgBasehref + "420.png", name: "Cherubi" },
          method: "Headbutt tree (National Park, Rock Climb access)"
        },
        {
          pokemon: { img: imgBasehref + "421.png", name: "Cherrim" },
          method: "Evolve Cherubi at level 25"
        },

        {
          pokemon: { img: imgBasehref + "412.png", name: "Burmy" },
          method: "Headbutt tree (Route 38, Rock Climb access)"
        },
        {
          pokemon: { img: imgBasehref + "413.png", name: "Wormadam" },
          method: "Evolve female Burmy at level 20"
        },
        {
          pokemon: { img: imgBasehref + "414.png", name: "Mothim" },
          method: "Evolve male Burmy at level 20"
        }
      ]
    },
    postgame: {
      headerTitle: "Post Red",

      headerimg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "Go see Professor Oak once Red is defeated and he’ll let you pick ONE of the Kanto starters!",
      summaryHtml: `
        <h5>Back to where it all began</h5>

        <pre>
        Bulbasaur-->Lv. 16-->Ivysaur-->Lv. 32-->Venusaur
        OR
        Charmander-->Lv. 16-->Charmeleon-->Lv. 36-->Charizard
        OR
        Squirtle-->Lv. 16-->Wartortle-->Lv. 36-->Blastoise
        </pre>

        <h5>Steven Stone and the Hoenn starters</h5>
        <p>Once you’ve defeated Red you can visit Steven again in the Silph Co building in Saffron City where he’ll ask you to pick a colour – Green, Red or Blue. Picking one of these will give you a Hoenn starter – Treecko, Torchic or Mudkip respectively. You can only pick one!</p>

        <pre>
        Treecko-->Lv. 16-->Grovyle-->Lv. 36-->Sceptile
        OR
        Torchic-->Lv. 16-->Combusken-->Lv. 36-->Blaziken
        OR
        Mudkip-->Lv. 16-->Marshtomp-->Lv. 36-->Swampert
        </pre>

        <h5>The Hoenn Legend</h5>
        <p>Visit Mr Pokemon north of Cherrygrove City to obtain either the Blue or Red Orb depending on your version. Take the orb to Embedded Tower which can be located by exiting from the basement of Cliff Cave on Route 47 and then Surfing to the left and using Rock Climb. You’ll find either Groudon or Kyogre here. Once you’ve caught it, Professor Oak will tell you some cool info on the Hoenn legends if you go and see him. Unfortunately it would require trades to get the other legendary and flush out Rayquaza.</p>

        <pre>
        (HG) Kyogre
        (SS) Groudon
        </pre>

        <p>And that’s the end of the true challenge though there is one more section which is optional and depends on if you’ve got the hardware. You’ll obviously have everything at your disposal to evolve all of the above pokemon so take your time and have fun with it!</p>

        <p><strong>End of the challenge:</strong><br/>
        (HeartGold) National Dex Caught 373, Remaining 120<br/>
        (SoulSilver) National Dex Caught 371, Remaining 122
        </p>
        ${guideSource}
        `,
      rows: [
        /* ================= Kanto Starters ================= */
        {
          type: "choice",
          choiceKey: "kanto-starter",
          choiceValue: "bulbasaur",
          pokemon: { img: imgBasehref + "001.png", name: "Bulbasaur" },
          method: "Starter gift (Back to where it all began)"
        },
        {
          type: "choice",
          choiceKey: "kanto-starter",
          choiceValue: "charmander",
          pokemon: { img: imgBasehref + "004.png", name: "Charmander" },
          method: "Starter gift (Back to where it all began)"
        },
        {
          type: "choice",
          choiceKey: "kanto-starter",
          choiceValue: "squirtle",
          pokemon: { img: imgBasehref + "007.png", name: "Squirtle" },
          method: "Starter gift (Back to where it all began)"
        },

        /* ================= Hoenn Starters (Steven Stone) ================= */
        {
          type: "choice",
          choiceKey: "hoenn-starter",
          choiceValue: "treecko",
          pokemon: { img: imgBasehref + "252.png", name: "Treecko" },
          method: "Gift from Steven Stone (choose Green)"
        },
        {
          type: "choice",
          choiceKey: "hoenn-starter",
          choiceValue: "torchic",
          pokemon: { img: imgBasehref + "255.png", name: "Torchic" },
          method: "Gift from Steven Stone (choose Red)"
        },
        {
          type: "choice",
          choiceKey: "hoenn-starter",
          choiceValue: "mudkip",
          pokemon: { img: imgBasehref + "258.png", name: "Mudkip" },
          method: "Gift from Steven Stone (choose Blue)"
        },

        /* ================= Kanto Starters ================= */

        {
          pokemon: { img: imgBasehref + "001.png", name: "Bulbasaur" },
          method: "Starter gift (Back to where it all began)",
          requires: { "kanto-starter": "bulbasaur" }
        },

        { pokemon: { img: imgBasehref + "002.png", name: "Ivysaur" }, method: "Evolve Bulbasaur at level 16", requires: { "kanto-starter": "bulbasaur" } },
        { pokemon: { img: imgBasehref + "003.png", name: "Venusaur" }, method: "Evolve Ivysaur at level 32", requires: { "kanto-starter": "bulbasaur" } },
        {
          pokemon: { img: imgBasehref + "004.png", name: "Charmander" },
          method: "Starter gift (Back to where it all began)",
          requires: { "kanto-starter": "charmander" }
        },

        { pokemon: { img: imgBasehref + "005.png", name: "Charmeleon" }, method: "Evolve Charmander at level 16", requires: { "kanto-starter": "charmander" } },
        { pokemon: { img: imgBasehref + "006.png", name: "Charizard" }, method: "Evolve Charmeleon at level 36", requires: { "kanto-starter": "charmander" } },

        {
          pokemon: { img: imgBasehref + "007.png", name: "Squirtle" },
          method: "Starter gift (Back to where it all began)",
          requires: { "kanto-starter": "squirtle" }
        },
        { pokemon: { img: imgBasehref + "008.png", name: "Wartortle" }, method: "Evolve Squirtle at level 16", requires: { "kanto-starter": "squirtle" } },
        { pokemon: { img: imgBasehref + "009.png", name: "Blastoise" }, method: "Evolve Wartortle at level 36", requires: { "kanto-starter": "squirtle" } },

        /* ================= Hoenn Starters  ================= */

        {
          pokemon: { img: imgBasehref + "252.png", name: "Treecko" },
          method: "Gift from Steven Stone (choose Green)",
          requires: { "hoenn-starter": "treecko" }
        },
        { pokemon: { img: imgBasehref + "253.png", name: "Grovyle" }, method: "Evolve Treecko at level 16", requires: { "hoenn-starter": "treecko" } },
        { pokemon: { img: imgBasehref + "254.png", name: "Sceptile" }, method: "Evolve Grovyle at level 36", requires: { "hoenn-starter": "treecko" } },

        {
          pokemon: { img: imgBasehref + "255.png", name: "Torchic" },
          method: "Gift from Steven Stone (choose Red)",
          requires: { "hoenn-starter": "torchic" }
        },
        { pokemon: { img: imgBasehref + "256.png", name: "Combusken" }, method: "Evolve Torchic at level 16", requires: { "hoenn-starter": "torchic" } },
        { pokemon: { img: imgBasehref + "257.png", name: "Blaziken" }, method: "Evolve Combusken at level 36", requires: { "hoenn-starter": "torchic" } },

        {
          pokemon: { img: imgBasehref + "258.png", name: "Mudkip" },
          method: "Gift from Steven Stone (choose Blue)",
          requires: { "hoenn-starter": "mudkip" }
        },
        { pokemon: { img: imgBasehref + "259.png", name: "Marshtomp" }, method: "Evolve Mudkip at level 16", requires: { "hoenn-starter": "mudkip" } },
        { pokemon: { img: imgBasehref + "260.png", name: "Swampert" }, method: "Evolve Marshtomp at level 36", requires: { "hoenn-starter": "mudkip" } },

        /* ================= Hoenn Legendary ================= */
        {
          pokemon: { img: imgBasehref + "382.png", name: "Kyogre" },
          method: "(HG) Embedded Tower with Blue Orb"
        },
        {
          pokemon: { img: imgBasehref + "383.png", name: "Groudon" },
          method: "(SS) Embedded Tower with Red Orb"
        }
      ]
    }
  }
};
