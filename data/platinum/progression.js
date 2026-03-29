/* ----------------------
    - img src: 
    ----------------------- */
const guideLink = "https://docs.google.com/document/d/1rYii00OuCG3Ys0toeu7y7Gugic0EniQzK03zFXzN5fM/edit?usp=sharing";
const guideSource = `
      <p class="tips-source">
        <a href="${guideLink}" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>`;

const imgBasehref = "assets/images/Platinum/pokedex/Spr_4p_";
const badgeBasehref = "assets/images/Platinum/badges/Spr_Pt_";

window.gameData = {
  gameId: "platinum",
  gameTitle: "Platinum",
  logo: "assets/images/logos/platinum.png",
  aboutHtml: `
   <section class="game-intro-content">
      <ul>
        <li>MUNCHLAX!!! This is the pokemon that can potentially destroy your perfect run. Of all the honey trees in the game, only some will yield Munchlax and it’s entirely dependent on your trainer ID. Start a new game and then check this website: https://www.dragonflycave.com/sinnoh/honey-trees If your guaranteed honey tree ISN’T Floaroma Meadow, Route 205 (north or south) or Valley Windworks then it will not be possible to catch Munchlax before your second badge. Additionally, Munchlax is a major pain in the ass to find. You need to wait 6 real time hours for the trees to spawn a pokemon and even if you have the right tree it’s a 1% chance to find Munchlax. See the walkthrough below (Section 2.2) for a guide to honey trees.</li>
        <li>Grinding – As expected, there is a lot of grinding in this challenge! For the first part of the game, grinding against wild pokemon is pretty much the only way to go. Once you’ve obtained 2 badges you’ll have access to the Vs Seeker which is an invaluable tool. There are some excellent spots outlined in the guide itself to battle against the same trainers over and over. Obviously this all depends once the type of pokemon you are raising and what attacks it has. </li>
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
      headerImgAlt: "Roark in Pokémon Diamond and Pearl",

      summaryShort: `This first part will cover everything you can do from starting in Twinleaf Town up right up to Oreburgh City BEFORE you get that first badge from Roark.`,
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
          Battle your rival (it makes no difference if you win or lose) and you will be urged to go home. Upon leaving and re-entering Route 201, you’ll make a quick detour to Lake Verity. Afterwards you can head to Sandgem Town to the east. As you don’t have any pokeballs yet, head that way ASAP and train your starter up a level or two.
        </p>

        <h5>Sandgem Town</h5>
        <p>
          Pay Professor Rowan a visit and you’ll be given a pokedex. You also get a nice TM for Return should you want to use it (I’d recommend saving it). Route 202 is your next stop (north from Sandgem) but feel free to explore. Go to the Pokemart and you’ll be able to buy your first pokeballs. Revisit Route 201 where you’ll find Bidoof and Starly at least, but if it’s night time you’ll also find Kricketot.
        </p>
        <pre>
          Bidoof → Lv. 15 → Bibarel
          Starly → Lv. 14 → Staravia → Lv. 34 → Staraptor
          Kricketot → Lv. 10 → Kricketune
        </pre>

        <h5>Route 202</h5>
        <p>
          Lucas/Dawn will be waiting for you and will show you the tutorial on catching pokemon. If you’ve caught the above three pokemon, obviously this is not necessary! You’ll also be given five more pokeballs for free. On this route there is one pokemon to catch – Shinx. I would strongly recommend catching one with Intimidate (you’ll know because it will lower your attack at the start of the battle). Its other ability is Rivalry which will lower your attack against pokemon of the opposite gender. This is an inconvenience that you don’t really need.
        </p>
        <pre>
          Shinx → Lv. 15 → Luxio → Lv. 30 → Luxray
        </pre>

        <h5>Jubilife City</h5>
        <p>
          You’ll soon bump in to Looker who doesn’t really add anything at this point in the game. Talk to the gentleman in the middle of the crossroads in town to start the Poketch mission. There are three clowns in town (all outside). Talk to them all to get the vouchers needed to get a Poketch for free from the same gentleman. Head out the west side of town and you’ll find a fisherman in the gatehouse. He’ll give you the Old Rod. Unfortunately these games return to only being able to catch Magikarp with this rod which you’ll still need regardless. Continue out the gatehouse to Route 218 where you can fish for one.
        </p>
        <pre>
          Magikarp → Lv. 20 → Gyarados
        </pre>

        <h5>Route 204</h5>
        <p>
          Head north out of Jubilife City this time. In this small route you can catch Budew at all times of the day. During the daytime you can catch Wurmple and at night Zubat will appear. Catch at least two Wurmple to get both evolutions. If it doesn’t evolve into the right cocoon at Lv. 7 then you may need to come back and catch another one until it does evolve correctly!
        </p>
        <pre>
          Budew → Happiness (day) → Roselia
          Zubat → Lv. 22 → Golbat → Happiness → Crobat
          Wurmple → Lv. 7 → Silcoon → Lv. 10 → Beautifly
          Wurmple → Lv. 7 → Cascoon → Lv. 10 → Dustox
        </pre>
        <p>
          No Shiny Stones yet to evolve Roselia but don’t worry, the opportunity will come after getting a badge.
        </p>

        <h5>Ravaged Path</h5>
        <p>
          Enter the cave at the northern end of the route. It’s extremely cramped until you get Rock Smash but you can at least catch a Psyduck. If it’s daytime and you couldn’t catch Zubat on Route 204, it will be here at all times of the day.
        </p>
        <pre>
          Psyduck → Lv. 33 → Golduck
        </pre>

        <h5>Route 203</h5>
        <p>
          Back to Jubilife City and leave through the final exit (east) to Route 203. One new pokemon awaits you – Abra. Throw a pokeball straight away. If it keeps breaking out, you may want to consider saving your game so you don’t run out of pokeballs (there’s still some more pokemon to catch!). Since you’ll likely be switch training Abra, consider an upcoming trade in Oreburgh City for a Machop for faster exp.
        </p>
        <pre>
          Abra → Lv. 16 → Kadabra
        </pre>
        <p>
          Kadabra is our first trade evolution pokemon so it will never evolve…
        </p>

        <h5>Oreburgh Gate</h5>
        <p>
          This is a small cave connecting Route 203 to Oreburgh City. Talk to the hiker at the entrance for HM06 Rock Smash. You’ll need it later to progress. One more pokemon is in here and it’s another trade evolution line. Catch the rocky pokemon Geodude.
        </p>
        <pre>
          Geodude → Lv. 25 → Graveler
        </pre>

        <h5>Oreburgh City</h5>
        <p>
          Home of the first pokemon gym in the game. But we’re not ready for that yet. The gym is currently closed, you’ll find the gym leader, Roark, in the Oreburgh Mine. This can be found in the south east corner of town. Within the mine you can catch yourself an Onix. We can’t do this trade evolution into Steelix but it CAN be caught in the wild later on.
        </p>
        <pre>
          Onix
        </pre>

        <h5>Route 207</h5>
        <p>
          Through the north east exit of town is a big patch of grass. This is the only accessible part of Route 207 for now. At least there are two more pokemon to catch:
        </p>
        <pre>
          Ponyta → Lv. 40 → Rapidash
          Machop → Lv. 28 → Machoke
        </pre>
        <p>
          The third of the original trade evolutions and another pokemon you won’t be able to fully evolve. With all pokemon caught it’s time to evolve them!
        </p>

        <h5>Levelling up tips</h5>
        <p>
          Another early game struggle. While Oreburgh Mine can be ideal, I found Onix too rare and Zubat too common for it to be particularly viable. My preferred training ground is Route 207 but only during the day time. At night and in the mornings, Zubat and Kricketot appear which both give pathetic exp. Machop, Geodude and Ponyta will be your only opponents during the daytime and you’ll be hoping for the latter as that is where the true exp gains will be! Quite a few pokemon to train in this section and a fair few that evolve in their 30s. As with previous challenges I tried to rotate my pokemon after each level but once the numbers of pokemon left to evolve dropped I started battling each pokemon until it ran out of PP and moved on to the next pokemon. Aside from having a few pokemon with no attacking moves (Magikarp, Abra, Kricketot) it’s a pretty straight forward grind. Ponyta will likely be the last pokemon you evolve at a whopping Lv40.
        </p>

        <p>
          <strong>End of part 1:</strong><br/>
          Caught 36, Remaining 174
        </p>

        ${guideSource}
  `,

      rows: [
        /* Starters */
        { type: "choice", choiceKey: "starter", choiceValue: "turtwig", pokemon: { img: imgBasehref + "387.png", name: "Turtwig" }, method: "Starter choice" },
        { type: "choice", choiceKey: "starter", choiceValue: "chimchar", pokemon: { img: imgBasehref + "390.png", name: "Chimchar" }, method: "Starter choice" },
        { type: "choice", choiceKey: "starter", choiceValue: "piplup", pokemon: { img: imgBasehref + "393.png", name: "Piplup" }, method: "Starter choice" },

        { pokemon: { img: imgBasehref + "387.png", name: "Turtwig" }, method: "Choose as your Starter", requires: { starter: "turtwig" } },
        { pokemon: { img: imgBasehref + "388.png", name: "Grotle" }, method: "Evolve Turtwig at level 18", requires: { starter: "turtwig" } },
        { pokemon: { img: imgBasehref + "389.png", name: "Torterra" }, method: "Evolve Grotle at level 32", requires: { starter: "turtwig" } },

        { pokemon: { img: imgBasehref + "390.png", name: "Chimchar" }, method: "Choose as your Starter", requires: { starter: "chimchar" } },
        { pokemon: { img: imgBasehref + "391.png", name: "Monferno" }, method: "Evolve Chimchar at level 14", requires: { starter: "chimchar" } },
        { pokemon: { img: imgBasehref + "392.png", name: "Infernape" }, method: "Evolve Monferno at level 36", requires: { starter: "chimchar" } },

        { pokemon: { img: imgBasehref + "393.png", name: "Piplup" }, method: "Choose as your Starter", requires: { starter: "piplup" } },
        { pokemon: { img: imgBasehref + "394.png", name: "Prinplup" }, method: "Evolve Piplup at level 16", requires: { starter: "piplup" } },
        { pokemon: { img: imgBasehref + "395.png", name: "Empoleon" }, method: "Evolve Prinplup at level 36", requires: { starter: "piplup" } },

        /* Route 201 */
        { pokemon: { img: imgBasehref + "399.png", name: "Bidoof" }, method: "Route 201" },
        { pokemon: { img: imgBasehref + "400.png", name: "Bibarel" }, method: "Evolve Bidoof at level 15" },
        { pokemon: { img: imgBasehref + "396.png", name: "Starly" }, method: "Route 201" },
        { pokemon: { img: imgBasehref + "397.png", name: "Staravia" }, method: "Evolve Starly at level 14" },
        { pokemon: { img: imgBasehref + "398.png", name: "Staraptor" }, method: "Evolve Staravia at level 34" },
        { pokemon: { img: imgBasehref + "401.png", name: "Kricketot" }, method: "Route 201 (night)" },
        { pokemon: { img: imgBasehref + "402.png", name: "Kricketune" }, method: "Evolve Kricketot at level 10" },

        /* Route 202 */
        { pokemon: { img: imgBasehref + "403.png", name: "Shinx" }, method: "Route 202" },
        { pokemon: { img: imgBasehref + "404.png", name: "Luxio" }, method: "Evolve Shinx at level 15" },
        { pokemon: { img: imgBasehref + "405.png", name: "Luxray" }, method: "Evolve Luxio at level 30" },

        /* Fishing */
        { pokemon: { img: imgBasehref + "129.png", name: "Magikarp" }, method: "Old Rod (Route 218)" },
        { pokemon: { img: imgBasehref + "130.png", name: "Gyarados" }, method: "Evolve Magikarp at level 20" },

        /* Route 204 */
        { pokemon: { img: imgBasehref + "406.png", name: "Budew" }, method: "Route 204" },
        { pokemon: { img: imgBasehref + "315.png", name: "Roselia" }, method: "Evolve Budew with happiness during day" },
        { pokemon: { img: imgBasehref + "041.png", name: "Zubat" }, method: "Route 204 (night)" },
        { pokemon: { img: imgBasehref + "042.png", name: "Golbat" }, method: "Evolve Zubat at level 22" },
        { pokemon: { img: imgBasehref + "169.png", name: "Crobat" }, method: "Evolve Golbat with happiness" },
        { pokemon: { img: imgBasehref + "265.png", name: "Wurmple" }, method: "Route 204 (day)" },
        { pokemon: { img: imgBasehref + "266.png", name: "Silcoon" }, method: "Evolve Wurmple at level 7" },
        { pokemon: { img: imgBasehref + "267.png", name: "Beautifly" }, method: "Evolve Silcoon at level 10" },
        { pokemon: { img: imgBasehref + "268.png", name: "Cascoon" }, method: "Evolve Wurmple at level 7" },
        { pokemon: { img: imgBasehref + "269.png", name: "Dustox" }, method: "Evolve Cascoon at level 10" },

        /* Ravaged Path */
        { pokemon: { img: imgBasehref + "054.png", name: "Psyduck" }, method: "Ravaged Path" },
        { pokemon: { img: imgBasehref + "055.png", name: "Golduck" }, method: "Evolve Psyduck at level 33" },

        /* Route 203 / Gate / Mine */
        { pokemon: { img: imgBasehref + "063.png", name: "Abra" }, method: "Route 203" },
        { pokemon: { img: imgBasehref + "064.png", name: "Kadabra" }, method: "Evolve Abra at level 16" },
        { pokemon: { img: imgBasehref + "074.png", name: "Geodude" }, method: "Oreburgh Gate" },
        { pokemon: { img: imgBasehref + "075.png", name: "Graveler" }, method: "Evolve Geodude at level 25" },
        { pokemon: { img: imgBasehref + "095.png", name: "Onix" }, method: "Oreburgh Mine" },

        /* Route 207 */
        { pokemon: { img: imgBasehref + "077.png", name: "Ponyta" }, method: "Route 207" },
        { pokemon: { img: imgBasehref + "078.png", name: "Rapidash" }, method: "Evolve Ponyta at level 40" },
        { pokemon: { img: imgBasehref + "066.png", name: "Machop" }, method: "Route 207" },
        { pokemon: { img: imgBasehref + "067.png", name: "Machoke" }, method: "Evolve Machop at level 28" },
      ],
    },
    gardenia: {
      headerTitle: "Pre Badge 2 - Gardenia",
      headerImg: badgeBasehref + "Gardenia.png",
      headerImgAlt: "Gardenia in Pokémon Diamond and Pearl",

      summaryShort: `With the ability to use Rock Smash I ventured into the lower level of Oreburgh Gate to pick up some items but there were no new pokemon here.`,
      summaryHtml: `
        <p>
          With the ability to use Rock Smash I ventured into the lower level of Oreburgh Gate to pick up some items but there were no new pokemon here. I proceeded to Ravaged Path so that I could reach Route 204 North which also has no new pokemon.
        </p>

        <h5>Valley Windworks</h5>
        <p>
          Once you reach Floaroma Town there’s not much to do at present other than picking up the Sprayduck can. You want to head east and go to the Valley Windworks. There are new pokemon here! You can catch:
        </p>
        <pre>
          Shellos → Lv. 30 → Gastrodon
          Buizel → Lv. 26 → Floatzel
          Pachirisu
          (Friday only AFTER defeating Team Galactic inside the building) Drifloon → Lv. 28 → Drifblim
        </pre>
        <p>
          Catch an additional Buizel for a trade later on. Battle the Team Galactic grunt outside the building and then head back to Floaroma Town and in the North West corner you can reach Floaroma Meadow and defeat two more grunts.
        </p>

        <h5>Honey Trees</h5>
        <p>
          You now have access to the honey trees! The man in Floaroma Meadow will sell you Honey at P100 or 10 for P1,000. There are three trees available immediately (and if you took my advice earlier, you have the right Munchlax trees). One is in Floaroma Meadow, the second outside Valley Windworks and the third is on Route 205. A fourth tree is available on route 205 on the north side after passing through Eterna Forest. These are the only four trees prior to Gardenia. The rest of the trees in the game will have no relevance on this run as you will have caught everything by the time you get your next badge. The new pokemon available are:
        </p>
        <pre>
          Aipom → Level up with Double Hit → Ambipom
          Burmy (female) → Lv. 20 → Wormadam
          Burmy (male) → Lv. 20 → Mothim
          Cherubi → Lv. 25 → Cherrim
          Combee → Lv. 21 → Vespiquen
          Heracross
          Munchlax → Happiness (anytime) → Snorlax
        </pre>
        <p>
          This will be what slows down your progress on this run. Having to wait 6 real time hours before anything will appear can be annoying. Thankfully I found my Munchlax within 3 or 4 days. On top of low encounter rates for pokemon like Heracross (5%) and Munchlax (1%), you need to catch a male and female Burmy and a female Combee (12.5%). Buying honey will eat through your savings. Having a Combee with Honey Gather can help you out but I find the rate of obtaining honey after a battle is pretty low. Levelling up Combee to increase those chances isn’t fun as it’s really weak and only knows three moves. An alternative method of getting money is to get pokemon with Pickup (Aipom, Pachirisu and MUNCHLAX lol) and level them up enough that they start collecting rarer items to sell. Having the Poketch app open that shows your team will help so you don’t have to go into the party screen after every battle to check for items. You’ll have to level up a Pickup pokemon anyway for some stones so now would be a good opportunity. Mining in the Underground and selling loot (revives, extra stones etc) is another good idea.
        </p>
        <p>
          In terms of checking trees, you have two things to watch out for. One is that the trees might not shake. Still check them anyway for a possible encounter. If it says there is a sweet scent in the air, the honey failed and there are no pokemon to encounter. The second is that the mechanics are a bit finicky with just checking a tree and slapping honey on it again as this may trigger the same pokemon over and over. The best strategy is to check the trees in a cycle. I like to start with Floaroma Meadow, then Valley Windworks, then Route 205. Once they’ve all been checked, start the cycle again, putting honey on the tree at Floaroma Meadow, then Valley Windworks, then Route 205.
        </p>

        <h5>Eterna Forest</h5>
        <p>
          You can skip through Route 205 as everything you can catch here could be done at Valley Windworks. When you enter Eterna Forest you’ll be greeted by Cheryl. She will partner up with you and all encounters in the forest will be double battles. Additionally, she will heal your pokemon after every battle. This is a fantastic training opportunity and you should really take your time to take advantage of this. Every pokemon I had at the time was around 18-19 before I moved on. Once you reach the other exit of Eterna Forest, Cheryl will leave and you won’t be able to partner up. Her Chansey also doesn’t take any exp meaning that you get the full experience from both pokemon you defeat in battle. I was able to train a Burmy with only Protect thanks to this until it learned Tackle! You can catch some more pokemon here but bear in mind that you can only catch them if there’s one wild pokemon remaining.
        </p>
        <pre>
          Buneary → Happiness (anytime) → Lopunny
          Gastly → Lv. 25 → Haunter
          Hoothoot → Lv. 20 → Noctowl
        </pre>
        <p>
          Hoothoot is the only time-specific pokemon being found at night. Haunter completes your set of the original four trade pokemon who will never evolve…When you leave Eterna Forest Cheryl will give you a Soothe Bell which is extremely convenient as there are quite a few pokemon in this section that only evolve with happiness. If you have one of those in your party (e.g. Buneary) then attach the Soothe Bell straight away.
        </p>

        <h5>Route 205 and Eterna City</h5>
        <p>
          There’s no new pokemon in this part of route 205 but the final honey tree of the section is here. There is a trade you can do in Eterna City - Your spare Buizel for a Chatot.
        </p>
        <pre>
          Chatot
        </pre>
        <p>
          In the house next to the pokemon center you’ll find the Underground Man who will give you the Explorer Kit. Head into the Underground and keep mining until you find a Skull or Armor Fossil (depends on your trainer ID) and since you’re here, look for a Moon Stone as well. You will need it for this section. Head all the way back to Oreburgh (yes, it’s a long walk) and get the fossil revived at Oreburgh Museum for:
        </p>
        <pre>
          Cranidos → Lv. 30 → Rampardos
          OR
          Shieldon → Lv. 30 → Bastiodon
        </pre>

        <h5>Route 211</h5>
        <p>
          East of Eterna City you will hit Route 211. There are a few extra pokemon lurking here:
        </p>
        <pre>
          Meditite → Lv. 37 → Medicham
          Bronzor → Lv. 33 → Bronzong
          Chingling → Happiness (night time) → Chimecho
        </pre>

        <h5>Mt Coronet</h5>
        <p>
          You are limited to a small room but that’s enough to find the last few pokemon of this section:
        </p>
        <pre>
          Cleffa → Happiness (any time) → Clefairy → Moon Stone → Clefable
          Nosepass → Level up in Mt Coronet → Probopass
        </pre>
        <p>
          Nosepass is a nice easy evolution. One level up in this location and you’ve got an extra ‘mon for your dex. This is the last area for catching new pokemon so it’s evolving time!
        </p>

        <h5>Stones</h5>
        <p>
          There are two pokemon you can evolve with stones. The first is Clefable as already mentioned with a Moon Stone from the Underground (or 5% chance of Cleffa holding one). The second will require you to level up a pokemon with Pickup (either Aipom/Ambipom or Pachirisu) to at least Lv. 41 for a chance to pick up a Shiny Stone. Levelling up to Lv. 51 will give you the full range of extra stones introduced in gen 4 but you don’t need to level up that high at present (that’s the next section!).
        </p>
        <pre>
          Roselia → Shiny Stone → Roserade
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          As mentioned, abuse the training with Cheryl as much as possible. I could have fully evolved everything prior to Eterna City but I really wanted that extra honey tree. There’s FOUR pokemon that evolve via happiness. Keep that Soothe Bell on whoever you’re training and ensure you keep as many of them in your team as you can so that their happiness increases from running around. Easier said than done since you also want a Pickup pokemon and preferably Honey Gather which fills your team of 6 already! After Cheryl has gone, I found that Route 211 and Mt Coronet were certainly the best places for exp but were frustrating because of Bronzor. At this stage of the game you have very few pokemon capable of inflicting any worthwhile damage on a steel type other than maybe Shellos or Buizel. I ended up sticking to Route 205 north just because the pokemon were simple to take down, were similar to those in Eterna Forest and had slightly higher levels. The odd Silcoon/Cascoon is greatly welcomed and the rare 1% Dustox/Beautifly gives great exp.
        </p>

        <p>
          <strong>End of part 2:</strong><br/>
          Caught 76, Remaining 134
        </p>
        ${guideSource}
  `,

      rows: [
        {
          type: "choice",
          choiceKey: "eterna-fossil",
          choiceValue: "cranidos",
          pokemon: { img: imgBasehref + "408.png", name: "Cranidos" },
          method: "Revive Skull Fossil",
        },
        {
          type: "choice",
          choiceKey: "eterna-fossil",
          choiceValue: "shieldon",
          pokemon: { img: imgBasehref + "410.png", name: "Shieldon" },
          method: "Revive Armor Fossil",
        },
        { pokemon: { img: imgBasehref + "422.png", name: "Shellos" }, method: "Valley Windworks" },
        { pokemon: { img: imgBasehref + "423.png", name: "Gastrodon" }, method: "Evolve Shellos at level 30" },
        { pokemon: { img: imgBasehref + "418.png", name: "Buizel" }, method: "Valley Windworks" },
        { pokemon: { img: imgBasehref + "419.png", name: "Floatzel" }, method: "Evolve Buizel at level 26" },
        { pokemon: { img: imgBasehref + "417.png", name: "Pachirisu" }, method: "Valley Windworks" },
        { pokemon: { img: imgBasehref + "425.png", name: "Drifloon" }, method: "Valley Windworks (Friday after Galactic)" },
        { pokemon: { img: imgBasehref + "426.png", name: "Drifblim" }, method: "Evolve Drifloon at level 28" },

        { pokemon: { img: imgBasehref + "190.png", name: "Aipom" }, method: "Honey Trees" },
        { pokemon: { img: imgBasehref + "424.png", name: "Ambipom" }, method: "Level up Aipom knowing Double Hit" },
        { pokemon: { img: imgBasehref + "412.png", name: "Burmy" }, method: "Honey Trees" },
        { pokemon: { img: imgBasehref + "413.png", name: "Wormadam" }, method: "Female Burmy evolves at level 20" },
        { pokemon: { img: imgBasehref + "414.png", name: "Mothim" }, method: "Male Burmy evolves at level 20" },
        { pokemon: { img: imgBasehref + "420.png", name: "Cherubi" }, method: "Honey Trees" },
        { pokemon: { img: imgBasehref + "421.png", name: "Cherrim" }, method: "Evolve Cherubi at level 25" },
        { pokemon: { img: imgBasehref + "415.png", name: "Combee" }, method: "Honey Trees" },
        { pokemon: { img: imgBasehref + "416.png", name: "Vespiquen" }, method: "Evolve female Combee at level 21" },
        { pokemon: { img: imgBasehref + "214.png", name: "Heracross" }, method: "Honey Trees" },
        { pokemon: { img: imgBasehref + "446.png", name: "Munchlax" }, method: "Honey Trees" },
        { pokemon: { img: imgBasehref + "143.png", name: "Snorlax" }, method: "Evolve Munchlax with happiness" },

        { pokemon: { img: imgBasehref + "427.png", name: "Buneary" }, method: "Eterna Forest" },
        { pokemon: { img: imgBasehref + "428.png", name: "Lopunny" }, method: "Evolve Buneary with happiness" },
        { pokemon: { img: imgBasehref + "092.png", name: "Gastly" }, method: "Eterna Forest" },
        { pokemon: { img: imgBasehref + "093.png", name: "Haunter" }, method: "Evolve Gastly at level 25" },
        { pokemon: { img: imgBasehref + "163.png", name: "Hoothoot" }, method: "Eterna Forest (night)" },
        { pokemon: { img: imgBasehref + "164.png", name: "Noctowl" }, method: "Evolve Hoothoot at level 20" },

        { pokemon: { img: imgBasehref + "441.png", name: "Chatot" }, method: "Trade Buizel in Eterna City" },

        {
          pokemon: { img: imgBasehref + "408.png", name: "Cranidos" },
          method: "Revive Skull Fossil",
          requires: { "eterna-fossil": "cranidos" },
        },
        { pokemon: { img: imgBasehref + "409.png", name: "Rampardos" }, method: "Evolve Cranidos at level 30", requires: { "eterna-fossil": "cranidos" } },

        {
          pokemon: { img: imgBasehref + "410.png", name: "Shieldon" },
          method: "Revive Armor Fossil",
          requires: { "eterna-fossil": "shieldon" },
        },
        { pokemon: { img: imgBasehref + "411.png", name: "Bastiodon" }, method: "Evolve Shieldon at level 30", requires: { "eterna-fossil": "shieldon" } },

        { pokemon: { img: imgBasehref + "307.png", name: "Meditite" }, method: "Route 211" },
        { pokemon: { img: imgBasehref + "308.png", name: "Medicham" }, method: "Evolve Meditite at level 37" },
        { pokemon: { img: imgBasehref + "436.png", name: "Bronzor" }, method: "Route 211" },
        { pokemon: { img: imgBasehref + "437.png", name: "Bronzong" }, method: "Evolve Bronzor at level 33" },
        { pokemon: { img: imgBasehref + "433.png", name: "Chingling" }, method: "Route 211" },
        { pokemon: { img: imgBasehref + "358.png", name: "Chimecho" }, method: "Evolve Chingling with happiness at night" },

        { pokemon: { img: imgBasehref + "173.png", name: "Cleffa" }, method: "Mt Coronet" },
        { pokemon: { img: imgBasehref + "035.png", name: "Clefairy" }, method: "Evolve Cleffa with happiness" },
        { pokemon: { img: imgBasehref + "036.png", name: "Clefable" }, method: "Use Moon Stone on Clefairy" },
        { pokemon: { img: imgBasehref + "299.png", name: "Nosepass" }, method: "Mt Coronet" },
        { pokemon: { img: imgBasehref + "476.png", name: "Probopass" }, method: "Level up Nosepass in Mt Coronet" },
        { pokemon: { img: imgBasehref + "407.png", name: "Roserade" }, method: "Use Shiny Stone on Roselia" },
      ],
    },
    fantina: {
      headerTitle: "Pre Badge 3 - Fantina",
      headerImg: badgeBasehref + "Fantina.png",
      headerImgAlt: "Fantina in Pokémon Diamond and Pearl",

      summaryShort: `As soon as that 2nd badge is in hand, Cut will now be usable and you can enter the building in the north end of town.`,

      summaryHtml: `
      <p>
          Here you will face some Team Galactic members. This is a good chance to get some serious experience for your Pickup pokemon as you will want to jump from Lv41 to Lv51 by the end of this next section so you’ll gain a few levels if you defeat every grunt. Once you have defeated the commander you will be thanked by the man who owns the bike shop. Clear a slot in your team and head to the bike shop to collect your reward. On the way, Cynthia will stop you and give you a pokemon egg which will hatch into Togepi.
        </p>
        <pre>
          Togepi → Happiness (any time) → Togetic → Shiny Stone → Togekiss
        </pre>
        <p>
          Another happiness/friendship evolution! As soon as it hatches, slap a Soothe Bell on it. As it’s hatched from an egg, its base happiness is actually higher than normal so after running around collecting the other pokemon in this section it should just be a case of levelling it up a few levels with the Soothe Bell still equipped to get Togetic. As you will have already levelled your Pickup pokemon to Lv41, another Shiny Stone can be obtained to get Togekiss. Pick up the bike from the bike shop to be able to access the next area!
        </p>

        <h5>Ghost at the Old Chateau</h5>
        <p>
          If you are playing at night (8pm+) then head into the Old Chateau situated in Eterna Forest. On the top floor is a room with a TV. If you examine this it will prompt a battle with the ghost pokemon, Rotom, which was normally a post-game encounter in Diamond and Pearl.
        </p>
        <pre>
          Rotom
        </pre>

        <h5>Route 206</h5>
        <p>
          There’s two parts to this route, the cycling road which is full of trainers and the lower road with wild pokemon. Only one new pokemon here. It does evolve, but not yet…
        </p>
        <pre>
          Gligar
        </pre>

        <h5>Wayward Cave</h5>
        <p>
          At the far north of Route 206 is a cave entrance. Within Wayward Cave is the dragon type, Gible.
        </p>
        <pre>
          Gible → Lv. 24 → Gabite → Lv. 48 → Garchomp
        </pre>
        <p>
          Getting a Garchomp will take a while! Luckily there’s two tips to level this pokemon up. I would advise NOT to proceed any further into the cave yet. The reason being that there’s another doubles partner deep in the cave who will leave once you exit the cave so it really is a one shot deal. Come back later when you have more pokemon to train. Incidentally there’s a secret entrance to wayward cave hidden underneath the cycling path. Reaching the end of this stretch of the cave will reward you with the Earthquake TM. Teaching this to Gible is a great idea as its best Ground type move from levelling up is Dig. Garchomp will also be ready for the Elite Four later ;)
        </p>

        <h5>Route 207</h5>
        <p>
          Our old training grounds from before our first badge…We’re not here for the pokemon though. There is a nice shortcut to Oreburgh via the cycling slope. Instead of heading south to Oreburgh, head east towards another Mt Coronet entrance where you will receive the Vs Seeker for trainer rematches. See levelling tips for ideal spots. Head into Mt Coronet and out the other side as there are no pokemon here you haven’t caught yet.
        </p>

        <h5>Route 208</h5>
        <p>
          On the other side, head into the grass to find your next new pokemon – Ralts. You’ll want two!
        </p>
        <pre>
          Ralts → Lv. 20 → Kirlia → Lv. 30 → Gardevoir
          Ralts → Lv. 20 → Kirlia (Male) → Dawn Stone → Gallade
        </pre>
        <p>
          One of the two Ralts will need to be a male in order to use a Dawn Stone on it for Gallade. Your Pickup pokemon now needs to reach Lv.51 to have a chance of getting one. The other Ralts can be either gender, it only needs to level up high enough.
        </p>

        <h5>Hearthome City</h5>
        <p>
          Enter the house to the right of the pokemon center and SAVE YOUR GAME! Talk to Bebe who will give you an Eevee. This Eevee HAS TO BE FEMALE. If not, you’ve screwed up the run as there’s no Ditto available in the next section to get the rest of the Eeveelutions. Soft reset until you do get a female. You technically can evolve Eevee into any Eeveelution besides Glaceon but for simplicity, go for Leafeon. I stupidly tried going for Espeon/Umbreon but honestly it’s easier to do it later as you will be hatching them from eggs and they’ll have higher friendship/happiness. The evolution stones can be found in the Sinnoh Underground if you want them now but you’ll get all three in Solaceon Ruins in the next section. You’ll be able to breed for more Eevee and the rest of the evolutions in the next section of the walkthrough so just worry about one evolution for now.
        </p>
        <pre>
          Eevee → Fire Stone → Flareon
          OR
          Eevee → Water Stone → Vaporeon
          OR
          Eevee → Thunder Stone → Jolteon
          OR
          Eevee → Happiness (daytime) → Espeon
          OR
          Eevee → Happiness (night time) → Umbreon
          OR
          Eevee → Lv up in Eterna Forest → Leafeon
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          Well that’s the end of this short section for catching. Gardevoir and Garchomp will be your main pokemon that need a lot of training. If you have the two Ralts you need and Gible, head back to Wayward Cave (standard entrance) and in the top right corner of the map you’ll find a girl named Mira who will partner up with you for double battles. Her Kadabra will take most pokemon out in one hit and has Shockwave for any Bronzor you may encounter. I would stick here as long as possible as you will be healed after every battle. Once you find your way to the entrance you will part ways and be unable to team up again.
        </p>
        <p>
          Outside of Wayward Cave, the Vs Seeker will be your main source of gaining exp. The two areas I would recommend the most (for both exp and easy to get to) are:
        </p>
        <p>
          Route 207 outside Mt Coronet – A female Picnicker with Pachirisu and a Hiker with a Geodude and a Nosepass. Pachirisu and Nosepass will give around 500ish exp each. The male Picnicker (Camper) has a Chimchar which is less desirable but it’s still exp at the end of the day.
        </p>
        <p>
          Route 208 outside Mt Coronet/on the bridge – Two hikers, one with Nosepass and one with Onix. Again, about 500 exp each.
        </p>
        <p>
          Don’t forget that you can defeat the trainers in the gym and there are a fair few of them! Consider using a few rare candies from Pickup if you want to shave those last few levels off to get Garchomp…I did it at Lv.45!
        </p>

        <p>
          <strong>End of part 3:</strong><br/>
          Caught 90, Remaining 120
        </p>
        ${guideSource}
  `,

      rows: [
        {
          type: "choice",
          choiceKey: "eevee-evolution-1",
          choiceValue: "flareon",
          pokemon: { img: imgBasehref + "136.png", name: "Flareon" },
          method: "Use Fire Stone on Eevee",
        },
        {
          type: "choice",
          choiceKey: "eevee-evolution-1",
          choiceValue: "vaporeon",
          pokemon: { img: imgBasehref + "134.png", name: "Vaporeon" },
          method: "Use Water Stone on Eevee",
        },
        {
          type: "choice",
          choiceKey: "eevee-evolution-1",
          choiceValue: "jolteon",
          pokemon: { img: imgBasehref + "135.png", name: "Jolteon" },
          method: "Use Thunder Stone on Eevee",
        },
        {
          type: "choice",
          choiceKey: "eevee-evolution-1",
          choiceValue: "espeon",
          pokemon: { img: imgBasehref + "196.png", name: "Espeon" },
          method: "Evolve Eevee with happiness during the day",
        },
        {
          type: "choice",
          choiceKey: "eevee-evolution-1",
          choiceValue: "umbreon",
          pokemon: { img: imgBasehref + "197.png", name: "Umbreon" },
          method: "Evolve Eevee with happiness at night",
        },
        {
          type: "choice",
          choiceKey: "eevee-evolution-1",
          choiceValue: "leafeon",
          pokemon: { img: imgBasehref + "470.png", name: "Leafeon" },
          method: "Level up Eevee in Eterna Forest",
        },
        /* ================= Togepi ================= */
        { pokemon: { img: imgBasehref + "175.png", name: "Togepi" }, method: "Egg from Cynthia" },
        { pokemon: { img: imgBasehref + "176.png", name: "Togetic" }, method: "Evolve Togepi with happiness" },
        { pokemon: { img: imgBasehref + "468.png", name: "Togekiss" }, method: "Use Shiny Stone on Togetic" },

        /* ================= Old Chateau ================= */
        { pokemon: { img: imgBasehref + "479.png", name: "Rotom" }, method: "Old Chateau TV room (night)" },

        /* ================= Route 206 ================= */
        { pokemon: { img: imgBasehref + "207.png", name: "Gligar" }, method: "Route 206" },

        /* ================= Wayward Cave ================= */
        { pokemon: { img: imgBasehref + "443.png", name: "Gible" }, method: "Wayward Cave" },
        { pokemon: { img: imgBasehref + "444.png", name: "Gabite" }, method: "Evolve Gible at level 24" },
        { pokemon: { img: imgBasehref + "445.png", name: "Garchomp" }, method: "Evolve Gabite at level 48" },

        /* ================= Route 208 ================= */
        { pokemon: { img: imgBasehref + "280.png", name: "Ralts" }, method: "Route 208" },
        { pokemon: { img: imgBasehref + "281.png", name: "Kirlia" }, method: "Evolve Ralts at level 20" },
        { pokemon: { img: imgBasehref + "282.png", name: "Gardevoir" }, method: "Evolve Kirlia at level 30" },
        { pokemon: { img: imgBasehref + "475.png", name: "Gallade" }, method: "Use Dawn Stone on male Kirlia" },

        /* ================= Hearthome City ================= */
        { pokemon: { img: imgBasehref + "133.png", name: "Eevee" }, method: "Gift from Bebe (female required)" },
        {
          pokemon: { img: imgBasehref + "136.png", name: "Flareon" },
          method: "Use Fire Stone on Eevee",
          requires: { "eevee-evolution-1": "flareon" },
        },
        {
          pokemon: { img: imgBasehref + "134.png", name: "Vaporeon" },
          method: "Use Water Stone on Eevee",
          requires: { "eevee-evolution-1": "vaporeon" },
        },
        {
          pokemon: { img: imgBasehref + "135.png", name: "Jolteon" },
          method: "Use Thunder Stone on Eevee",
          requires: { "eevee-evolution-1": "jolteon" },
        },
        {
          pokemon: { img: imgBasehref + "196.png", name: "Espeon" },
          method: "Evolve Eevee with happiness during the day",
          requires: { "eevee-evolution-1": "espeon" },
        },
        {
          pokemon: { img: imgBasehref + "197.png", name: "Umbreon" },
          method: "Evolve Eevee with happiness at night",
          requires: { "eevee-evolution-1": "umbreon" },
        },
        {
          pokemon: { img: imgBasehref + "470.png", name: "Leafeon" },
          method: "Level up Eevee in Eterna Forest",
          requires: { "eevee-evolution-1": "leafeon" },
        },
      ],
    },
    maylene: {
      headerTitle: "Pre Badge 4 - Maylene",
      headerImg: badgeBasehref + "Maylene.png",
      headerImgAlt: "Maylene in Pokémon Diamond and Pearl",

      summaryShort: `Now this is where the challenge gets interesting as your pokedex completion explodes during this section!`,
      summaryHtml: `
        <p>
          You’ll be venturing to Solaceon Town, through to Veilstone City, all the way round to Pastoria City and back to Hearthome City!
        </p>

        <h5>Route 209</h5>
        <p>
          Leave through the eastern exit out of Hearthome City onto a new route. There are two pokemon to catch:
        </p>
        <pre>
          Chansey → Happiness (anytime) → Blissey
          Duskull → Lv. 37 → Dusclops
        </pre>
        <p>
          Duskull can only be found at night while Chansey can be found at any time of the day. Dusclops can’t evolve into Dusknoir without a trade so that’s a no-go. The Lost Tower contains no new pokemon (but you can also catch Duskull there at night) so you can clear this for items and some exp although you may want to return once you have more pokemon to train. Speak to the fisherman on the pier to get the Good Rod!
        </p>

        <h5>Good Fishing Tour</h5>
        <p>
          OK so there’s not a huge selection of new pokemon to catch with the Good Rod. Goldeen, Barboach and Finneon are all you can catch at present. Below are the easiest locations to revisit to catch them:
        </p>
        <pre>
          (Route 209) Goldeen → Lv. 33 → Seaking
          (Mt Coronet) Barboach → Lv. 30 → Whiscash
          (Route 205 south) Finneon → Lv. 31 → Lumineon
        </pre>

        <h5>Solaceon Ruins</h5>
        <p>
          Before embarking on anything else in town, drop into the ruins accessed via the top right of Solaceon town. Within the ruins you’ll find one pokemon – Unown. If you explore every room and check the rocks when you reach dead end rooms, you’ll be able to pick up a Water Stone, Fire Stone and Thunder Stone.
        </p>
        <pre>
          Unown
        </pre>

        <h5>Solaceon Town</h5>
        <p>
          Home of the pokemon daycare, you can breed some pokemon here! With your female Eeveelution, breed it with a compatible male partner and get yourself 6 eggs to complete your set! Thanks to the three stones from Solaceon Ruins you can now evolve Eevee into all of its evolutions with the exception of Glaceon. Keep that spare Eevee available for later on. As mentioned before, the happiness evolutions are easier to get if you hatch Eevee from an egg as its base happiness is higher. With that logic it may be more beneficial to breed the Chansey you just caught so its happiness is higher too and can level up faster from Lv. 1. As usual, slap that Soothe Bell on a pokemon at all times to help those increases.
        </p>
        <pre>
          Eevee → Fire Stone → Flareon
          OR
          Eevee → Water Stone → Vaporeon
          OR
          Eevee → Thunder Stone → Jolteon
          OR
          Eevee → Happiness (daytime) → Espeon
          OR
          Eevee → Happiness (night time) → Umbreon
          OR
          Eevee → Lv up in Eterna Forest → Leafeon
        </pre>

        <h5>Route 210</h5>
        <p>
          North of Solaceon Town you can catch a Scyther. Unfortunately another trade evolution is required. There are a couple of nice training spots here for the Vs Seeker. The father/daughter combo in the long grass has a Rapidash and Ponyta double battle. As you will be training a lot of water/ground pokemon, this is a good place. There is also a breeder in the top left corner of the route who has an Elekid and Happiny. Like it’s evolved forms, Happiny gives out ridiculous amount of exp points. Defeating it will give you over 1,000 exp! It likes to spam Charm, so ensure you can still damage it.
        </p>
        <pre>
          Scyther
        </pre>

        <h5>Route 215</h5>
        <p>
          The route numbering jumps ahead and starts working backwards on this rainy route. Due to the rain, this is also a potential training spot for any water type pokemon on your team thanks to the boost from the weather. Two new pokemon are here and you’ll find that Marill has moved out of the Great Marsh since Diamond and Pearl and you’ll find it here instead. Be sure to catch a female one for breeding later.
        </p>
        <pre>
          Marill → Lv. 18 → Azumarill
          Lickitung → Level up after learning Rollout → Lickilicky
        </pre>

        <h5>Veilstone City</h5>
        <p>
          Team Galactic are causing trouble here. Unfortunately there’s not much you can do until you’ve got a badge from Maylene. Head over to the gym anyway and Crasher Wake will emerge. You can also defeat the gym trainers for some exp while you’re here. Veilstone also has a game corner, but, unlike some of the older generations, there are no pokemon that can be obtained, only items and TMs. However, the game corner mascot itself, Porygon, is available as a gift from one of this city’s residents. Neither one of its evolutions will be yours as they are both trade evolutions!
        </p>
        <pre>
          Porygon
        </pre>

        <h5>Route 214</h5>
        <p>
          Skipping the Veilstone Gym for now, we can head south towards Pastoria City. On this mountainous route there are two new pokemon in the grass.
        </p>
        <pre>
          Houndour → Lv. 24 → Houndoom
          Rhyhorn → Lv. 42 → Rhydon
        </pre>
        <p>
          Yet another trade evolution. No Rhyperior for you. Of the two patches of long grass, the southern one has a gap in the bottom right. This empty space holds an invisible item, a Razor Fang! Slap this on your Gligar from the previous section and evolve it during the night time to get yourself a Gliscor.
        </p>
        <pre>
          Gligar → Level up holding Razor Fang (night) → Gliscor
        </pre>

        <h5>Ruin Maniac’s Cave</h5>
        <p>
          You’ll find the maniac digging his way into Solaceon Ruins, but aside from wild Geodude you’ll also encounter the rare Hippopotas:
        </p>
        <pre>
          Hippopotas → Lv. 34 → Hippowdon
        </pre>

        <h5>Valor Lakefront</h5>
        <p>
          Continuing south from Route 214 you’ll run into a huge patch of grass outside Lake Valor. There’s no entry into the lake just yet, but take the time to search this grass for a Girafarig.
        </p>
        <pre>
          Girafarig
        </pre>

        <h5>Route 213</h5>
        <p>
          Pass through the Grand Lake Hotel and you’ll hit the beach. Go west and the patch of grass within this route will yield Wingull. Crack out that Good Rod for a chance to hook a Remoraid. Consider catching a second Remoraid which is required for an evolution later.
        </p>
        <pre>
          Wingull → Lv. 25 → Pelipper
          Remoraid → Lv. 25 → Octillery
        </pre>

        <h5>Pastoria City</h5>
        <p>
          This is where your pokedex will get a massive boost thanks to the Great Marsh which is the Sinnoh equivalent of the Safari Zone. The problem that you’ll have with catching everything here is that the rotation of some pokemon changes (Skorupi/Drapion, Croagunk/Toxicroak and Carnivine are the new ones you need). For your first couple of visits I would suggest just exploring each area to see what’s there and picking up any items. Once you have the majority of the pokemon, check the binoculars upstairs in the entrance building to see if that pokemon appears. You will need to try several times to get a good idea if it’s there and also memorise the area that it appears in as it looks very similar! If the pokemon does not appear, come back again tomorrow and check the binoculars.
        </p>
        <pre>
          Wooper → Lv. 20 → Quagsire
          Tropius
          Carnivine
          Skorupi → Lv. 40 → Drapion
          Croagunk → Lv. 37 → Toxicroak
          Tangela → Lv up after learning Ancientpower → Tangrowth
          Yanma → Lv up after learning Ancientpower → Yanmega
        </pre>

        <h5>Route 212</h5>
        <p>
          West of Pastoria City we finish off our ‘circle’ which will end up back in Hearthome City. The southern part of the route is rainy and boggy like the Great Marsh. In fact you’ll find Croagunk here if it didn’t appear as one of the binocular pokemon.
        </p>

        <h5>Trophy Garden</h5>
        <p>
          Enter the mansion on this route. If you go to Mr. Backlot’s office on the right side of the corridor you can examine the book on his desk to add Manaphy as a ‘seen’ pokemon in your dex which is crucial for getting the national pokedex. Go into the trophy garden where you’ll find a few new pokemon, namely Pichu and Pikachu. Now all you need is a Thunderstone which you will have to get from the Sinnoh Underground.
        </p>
        <pre>
          Pichu → Happiness (any time) → Pikachu → Thunder Stone → Raichu
        </pre>

        <p>
          And with that done, you can carry on to Hearthome City and you’ve cleared all the areas in this section.
        </p>

        <h5>Levelling Tips</h5>
        <p>
          With the Vs Seeker in mind, there are three trainers that I found useful to rematch over and over. The Breeder with a Happiny on Route 210 is a godsend for weaker pokemon. Happiny knows Sweet Kiss, Charm, Copycat and Refresh. So it’s only actual attacking move is potentially Copycat. Route 214 was probably my favourite route for rematches. There’s two Collector trainers with fantastic teams for gaining exp. In the northern side of the route running between two fences is a Collector with a full team of six (Skorupi, Yanma, Tropius, Tangela, Carnivine and Croagunk). He’s obviously got a good haul from the Great Marsh! The second Collector is at the very southern tip of the route. He has Jolteon, Vaporeon and Flareon. All of them give over 1k exp each! Aside from the rematches, the café at Lake Valor Hotel is a great source of exp with all the double battles that are available every day.
        </p>

        <p>
          <strong>End of part 4:</strong><br/>
          Caught 139, Remaining 71
        </p>

        ${guideSource}
  `,

      rows: [
        { pokemon: { img: imgBasehref + "113.png", name: "Chansey" }, method: "Route 209" },
        { pokemon: { img: imgBasehref + "242.png", name: "Blissey" }, method: "Evolve Chansey with happiness" },
        { pokemon: { img: imgBasehref + "355.png", name: "Duskull" }, method: "Route 209 (night)" },
        { pokemon: { img: imgBasehref + "356.png", name: "Dusclops" }, method: "Evolve Duskull at level 37" },

        { pokemon: { img: imgBasehref + "118.png", name: "Goldeen" }, method: "Good Rod" },
        { pokemon: { img: imgBasehref + "119.png", name: "Seaking" }, method: "Evolve Goldeen at level 33" },
        { pokemon: { img: imgBasehref + "339.png", name: "Barboach" }, method: "Good Rod" },
        { pokemon: { img: imgBasehref + "340.png", name: "Whiscash" }, method: "Evolve Barboach at level 30" },
        { pokemon: { img: imgBasehref + "456.png", name: "Finneon" }, method: "Good Rod" },
        { pokemon: { img: imgBasehref + "457.png", name: "Lumineon" }, method: "Evolve Finneon at level 31" },

        { pokemon: { img: imgBasehref + "201.png", name: "Unown" }, method: "Solaceon Ruins" },

        {
          pokemon: { img: imgBasehref + "136.png", name: "Flareon" },
          method: "Use Fire Stone on Eevee",
          requiresNot: { "eevee-evolution-1": "flareon" },
        },
        {
          pokemon: { img: imgBasehref + "134.png", name: "Vaporeon" },
          method: "Use Water Stone on Eevee",
          requiresNot: { "eevee-evolution-1": "vaporeon" },
        },
        {
          pokemon: { img: imgBasehref + "135.png", name: "Jolteon" },
          method: "Use Thunder Stone on Eevee",
          requiresNot: { "eevee-evolution-1": "jolteon" },
        },
        {
          pokemon: { img: imgBasehref + "196.png", name: "Espeon" },
          method: "Evolve Eevee with happiness during the day",
          requiresNot: { "eevee-evolution-1": "espeon" },
        },
        {
          pokemon: { img: imgBasehref + "197.png", name: "Umbreon" },
          method: "Evolve Eevee with happiness at night",
          requiresNot: { "eevee-evolution-1": "umbreon" },
        },
        {
          pokemon: { img: imgBasehref + "470.png", name: "Leafeon" },
          method: "Level up Eevee in Eterna Forest",
          requiresNot: { "eevee-evolution-1": "leafeon" },
        },
        { pokemon: { img: imgBasehref + "123.png", name: "Scyther" }, method: "Route 210" },

        { pokemon: { img: imgBasehref + "183.png", name: "Marill" }, method: "Route 215" },
        { pokemon: { img: imgBasehref + "184.png", name: "Azumarill" }, method: "Evolve Marill at level 18" },
        { pokemon: { img: imgBasehref + "108.png", name: "Lickitung" }, method: "Route 215" },
        { pokemon: { img: imgBasehref + "463.png", name: "Lickilicky" }, method: "Level up Lickitung knowing Rollout" },

        { pokemon: { img: imgBasehref + "137.png", name: "Porygon" }, method: "Gift in Veilstone City" },

        { pokemon: { img: imgBasehref + "228.png", name: "Houndour" }, method: "Route 214" },
        { pokemon: { img: imgBasehref + "229.png", name: "Houndoom" }, method: "Evolve Houndour at level 24" },
        { pokemon: { img: imgBasehref + "111.png", name: "Rhyhorn" }, method: "Route 214" },
        { pokemon: { img: imgBasehref + "112.png", name: "Rhydon" }, method: "Evolve Rhyhorn at level 42" },
        { pokemon: { img: imgBasehref + "472.png", name: "Gliscor" }, method: "Level up Gligar holding Razor Fang at night" },

        { pokemon: { img: imgBasehref + "449.png", name: "Hippopotas" }, method: "Ruin Maniac’s Cave" },
        { pokemon: { img: imgBasehref + "450.png", name: "Hippowdon" }, method: "Evolve Hippopotas at level 34" },

        { pokemon: { img: imgBasehref + "203.png", name: "Girafarig" }, method: "Valor Lakefront" },

        { pokemon: { img: imgBasehref + "278.png", name: "Wingull" }, method: "Route 213" },
        { pokemon: { img: imgBasehref + "279.png", name: "Pelipper" }, method: "Evolve Wingull at level 25" },
        { pokemon: { img: imgBasehref + "223.png", name: "Remoraid" }, method: "Good Rod (Route 213)" },
        { pokemon: { img: imgBasehref + "224.png", name: "Octillery" }, method: "Evolve Remoraid at level 25" },

        { pokemon: { img: imgBasehref + "194.png", name: "Wooper" }, method: "Great Marsh" },
        { pokemon: { img: imgBasehref + "195.png", name: "Quagsire" }, method: "Evolve Wooper at level 20" },
        { pokemon: { img: imgBasehref + "357.png", name: "Tropius" }, method: "Great Marsh" },
        { pokemon: { img: imgBasehref + "455.png", name: "Carnivine" }, method: "Great Marsh" },
        { pokemon: { img: imgBasehref + "451.png", name: "Skorupi" }, method: "Great Marsh" },
        { pokemon: { img: imgBasehref + "452.png", name: "Drapion" }, method: "Evolve Skorupi at level 40" },
        { pokemon: { img: imgBasehref + "453.png", name: "Croagunk" }, method: "Great Marsh / Route 212" },
        { pokemon: { img: imgBasehref + "454.png", name: "Toxicroak" }, method: "Evolve Croagunk at level 37" },
        { pokemon: { img: imgBasehref + "114.png", name: "Tangela" }, method: "Great Marsh" },
        { pokemon: { img: imgBasehref + "465.png", name: "Tangrowth" }, method: "Level up Tangela knowing Ancientpower" },
        { pokemon: { img: imgBasehref + "193.png", name: "Yanma" }, method: "Great Marsh" },
        { pokemon: { img: imgBasehref + "469.png", name: "Yanmega" }, method: "Level up Yanma knowing Ancientpower" },

        { pokemon: { img: imgBasehref + "172.png", name: "Pichu" }, method: "Trophy Garden" },
        { pokemon: { img: imgBasehref + "025.png", name: "Pikachu" }, method: "Evolve Pichu with happiness" },
        { pokemon: { img: imgBasehref + "026.png", name: "Raichu" }, method: "Use Thunder Stone on Pikachu" },
      ],
    },
    "crasher-wake": {
      headerTitle: "Pre Badge 5 - Crasher Wake",
      headerImg: badgeBasehref + "Crasher_Wake.png",
      headerImgAlt: "Crasher Wake in Pokémon Diamond and Pearl",

      summaryShort: `After defeating Maylene, team up with Lucas/Dawn to get their pokedex back.`,
      summaryHtml: `
        <p>
          You can investigate the building and meet Looker who will advise you cannot proceed any further. Go to Pastoria City and defeat Crasher Wake. Yep, that’s it for this section. Being able to use Fly does not yield any new pokemon and you cannot access new areas…
        </p>

        <p>
          <strong>End of part 5:</strong><br/>
          Caught 139, Remaining 71
        </p>

        ${guideSource}
  `,

      rows: [],
    },
    byron: {
      headerTitle: "Pre Badge 6 - Byron",
      headerImg: badgeBasehref + "Byron.png",
      headerImgAlt: "Byron in Pokémon Diamond and Pearl",

      summaryShort: `OK, now you can start to get some new pokemon! You can now use Surf which means there’s a few new areas you can reach but you need the HM first.`,
      summaryHtml: `
        <p>
          Let’s get the plot moving for now. Leave the gym and go to the entrance to the Great Marsh where you’ll start to chase a Team Galactic member. Follow him all the way to the Lake Hotel where you’ll finally battle him and Cynthia will give you the SecretPotion to help clear the Psyduck on Route 210.
        </p>

        <h5>Route 210</h5>
        <p>
          Clear the Psyduck and you’ll be given the Old Charm by Cynthia and a request to go to Celestic Town. Bring a pokemon with Defog on this trip. Now that you’ve passed Psyduck you’ll be able to find a Swablu in this patch of grass.
        </p>
        <pre>
          Swablu → Lv. 35 → Altaria
        </pre>

        <h5>Celestic Town</h5>
        <p>
          Defeat the Galactic Grunt in the middle of town to kick start a sequence with Cynthia’s grandmother and Cyrus. Once Cyrus is defeated, you will get the HM for Surf at last! The section of Route 211 west of Celestic Town doesn’t have any new pokemon so now let’s do some sightseeing…
        </p>

        <h5>Fuego Ironworks</h5>
        <p>
          East of Floaroma Town before you hit the Windworks, you’ll find a small river. Surf up the west side of it to reach the external area of Fuego Ironworks. On the way there you may encounter a Tentacool. In the grass outside the building you’ll be able to find a Magnemite and a Magmar.
        </p>
        <pre>
          Tentacool → Lv. 30 → Tentacruel
          Magnemite → Lv. 30 → Magneton → Lv up in Mt Coronet → Magnezone
          Magmar
        </pre>

        <p>
          Catch a female Magmar and breed it at Solaceon Daycare to hatch a Magby:
        </p>
        <pre>
          Magmar → Breed → Magby
        </pre>

        <h5>Route 219, 220 &amp; 221</h5>
        <p>
          Return to Sandgem Town and go south onto the beach. You can now Surf across this route and find Tentacool if you didn’t manage to on the way to Fuego Ironworks. After a long trip you’ll finally reach land where you’ll learn that you came all this way to catch a fake tree…Make sure it’s female for breeding! Pal Park is not open yet so we can’t Fly back here
        </p>
        <pre>
          Sudowoodo
        </pre>

        <h5>Route 218</h5>
        <p>
          West of Jubilife City you can finally venture further than the pier. On the other side of the water you’ll find a patch of grass where you can get a Mr. Mime. Make sure it’s female (Mrs. Mime? Ms. Mime?).
        </p>
        <pre>
          Mr. Mime
        </pre>

        <h5>Canalave City and Iron Island</h5>
        <p>
          If you’ve caught everything so far, now is the time to do this section with another temporary double battle partner (i.e. free healing). In the south western part of Canalave City you’ll find a sailor next to a boat who will take you to Iron Island. You’ll also pick up Strength HM on the way in. If you venture far enough into the cave you’ll meet Riley who will team up with you and his Lucario. On this floor you have the rare opportunity to catch a wild trade evolution pokemon – Steelix! Run around the small section before you meet Riley for the chance to catch it solo. Completing this area of the cave and meeting Team Galactic will end your quest here. Riley will give you an egg, make sure you have a spare slot in your team. The egg will contain a Riolu which cannot be found in the wild. Another happiness evolution, I’m sure you know the drill by now.
        </p>
        <pre>
          Steelix
          Riolu → Happiness (day time) → Lucario
        </pre>

        <h5>So many babies!</h5>
        <p>
          With access to new locations there are a few baby pokemon we can hatch now that the appropriate incenses are available. You should already have the Odd Incense from Solaceon Ruins. You can now reach the Luck Incense in Ravaged Path, the Sea Incense from Route 204 and the Rock Incense from Fuego Ironworks (inside the building). With these we can hatch the following by placing the female pokemon in the daycare alongside a suitable partner:
        </p>
        <pre>
          Mr. Mime → Breed holding Odd Incense → Mime Jr
          Chansey/Blissey → Breed holding Luck Incense → Happiny
          Sudowoodo → Breed holding Rock Incense → Bonsly
          Marill/Azumarill → Breed holding Sea Incense → Azurill
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          There isn’t really much to say about this section of the game, You have few pokemon that actually need to level up properly (Swablu, Magnemite and Tentacool) and you have plenty of new trainers to battle, particularly along the sea routes to Route 221.
        </p>

        <p>
          <strong>End of part 6:</strong><br/>
          Caught 157, Remaining 53
        </p>
      ${guideSource}`,

      rows: [
        { pokemon: { img: imgBasehref + "333.png", name: "Swablu" }, method: "Route 210 (after clearing Psyduck)" },
        { pokemon: { img: imgBasehref + "334.png", name: "Altaria" }, method: "Evolve Swablu at level 35" },

        { pokemon: { img: imgBasehref + "072.png", name: "Tentacool" }, method: "Surf (Fuego Ironworks river / sea routes)" },
        { pokemon: { img: imgBasehref + "073.png", name: "Tentacruel" }, method: "Evolve Tentacool at level 30" },

        { pokemon: { img: imgBasehref + "081.png", name: "Magnemite" }, method: "Fuego Ironworks grass" },
        { pokemon: { img: imgBasehref + "082.png", name: "Magneton" }, method: "Evolve Magnemite at level 30" },
        { pokemon: { img: imgBasehref + "462.png", name: "Magnezone" }, method: "Level up Magneton in Mt Coronet" },

        { pokemon: { img: imgBasehref + "126.png", name: "Magmar" }, method: "Fuego Ironworks grass" },
        { pokemon: { img: imgBasehref + "240.png", name: "Magby" }, method: "Breed Magmar" },

        { pokemon: { img: imgBasehref + "185.png", name: "Sudowoodo" }, method: "Route 219/220/221 (Surf)" },

        { pokemon: { img: imgBasehref + "122.png", name: "Mr. Mime" }, method: "Route 218 grass" },

        { pokemon: { img: imgBasehref + "208.png", name: "Steelix" }, method: "Iron Island (before meeting Riley)" },

        { pokemon: { img: imgBasehref + "447.png", name: "Riolu" }, method: "Egg from Riley (Iron Island)" },
        { pokemon: { img: imgBasehref + "448.png", name: "Lucario" }, method: "Evolve Riolu with happiness (day)" },

        { pokemon: { img: imgBasehref + "439.png", name: "Mime Jr." }, method: "Breed Mr. Mime holding Odd Incense" },
        { pokemon: { img: imgBasehref + "440.png", name: "Happiny" }, method: "Breed Chansey/Blissey holding Luck Incense" },
        { pokemon: { img: imgBasehref + "438.png", name: "Bonsly" }, method: "Breed Sudowoodo holding Rock Incense" },
        { pokemon: { img: imgBasehref + "298.png", name: "Azurill" }, method: "Breed Marill/Azumarill holding Sea Incense" },
      ],
    },
    candice: {
      headerTitle: "Pre Badge 7 - Candice",
      headerImg: badgeBasehref + "Candice.png",
      headerImgAlt: "Candice in Pokémon Diamond and Pearl",

      summaryShort: `Once you’ve cleared the gym you’ll officially start the main Galactic part of the plot.`,
      summaryHtml: `
        <p>
          Go to Canalave Library to meet Prof Rowan and you’ll soon be sent on a mission to check out the lakes of Sinnoh. You’ll first be tasked with Lake Valor which is south of Veilstone City. Beat the Galactic Commander there to move on to Lake Verity, right next to your hometown. Defeat the Commander.
        </p>

        <h5>Mt Coronet</h5>
        <p>
          The last lake is Lake Acuity in the very northern reaches of Sinnoh. To get there, Fly to Celestic Town and enter Mt Coronet from that side. Using Strength you’ll access new floors of the mountain. You will eventually pass a huge lake within the cave. This is the famous fishing spot for Feebas! Out of all the water tiles, only four of these will give a 50% chance of hooking a Feebas (with any rod). This changes daily and there’s a lot of ground…er, water…to cover. I would suggest going left to right on the top row of water and zig zag your way across and then down to cover every tile. I would also recommend fishing at least twice in each space, that way unless you have seriously bad luck, you should find one by the time you’ve checked every tile.
        </p>
        <pre>
          Feebas → Level up with Beauty stat at least 170 → Milotic
        </pre>
        <p>
          Then you have the mission of evolving it. Once you’ve found a Feebas spot, CATCH A FEMALE. This will help immensely. Wait until you’ve reached Snowpoint City before back tracking. You need a Feebas with either a Modest, Mild, Rash or Quiet nature, hence why you need a female so you can breed it to get the desired nature. The easiest solution is to buy poffins from Veilstone Department Store. If you don’t want to do it the lazy way or if you didn’t realise that was an option (like me until I started writing this!) then you also need a good supply of berries that give Beauty to their poffins (Chesto, Oran, Pamtre, Wiki, Charti). You also have the difficulty that you are doing this solo so you are producing very basic poffins which requires you to have some fairly good berries to hand and you need to be good at the poffin mini game otherwise you will make weak poffins and your Feebas will have eaten all it can without reaching the required level of Beauty. I resorted to using a few Chesto berries to finish the job but mostly used Wiki berries. Contrary to popular belief, Feebas does not need maximum beauty so don’t panic. I’d recommend saving the game before you start making your poffins in case you mess up. Once you’ve fed it all the dry poffins you can, level it up and, fingers crossed, you’ll get the evolution to trigger.
        </p>

        <h5>Route 216/217</h5>
        <p>
          Emerging from Mt Coronet you’ll now be on this snowy set of routes. Skip 216 for catching pokemon for now and head on to Route 217 where you’ll find something we haven’t seen in a long time…every pokemon on this route is new! Snorunt is the only one that requires you to come here at night, while everything else is available at all times of the day. You’ll need two Snorunt for both of its evolutions:
        </p>
        <pre>
          Swinub → Lv. 33 → Piloswine → Lv up after learning Ancientpower → Mamoswine
          Sneasel
          Snover → Lv. 40 → Abomasnow
          Snorunt → Lv. 42 → Glalie
          Snorunt (female) → Dawn Stone → Froslass
        </pre>
        <p>
          We can’t evolve Sneasel in this section as we can’t access a Razor Claw. Once Swinub has evolved into Piloswine you’ll need to return to Pastoria City with a Heart Scale to get the move tutor to teach it Ancientpower. One more level and you’ve got a tough Mamoswine on your hands. If you’ve been harvesting items along the way, you should have a Heart Scale. If not, do some digging in the Sinnoh Underground, they’re not particularly rare. For the Dawn Stone, get your Pickup pokemon back out again if you didn’t find a second stone already. It will already be at a high enough level from when you needed a Dawn Stone for Kirlia. When you are in the part with the serious blizzards, look around for the Rock Climb HM.
        </p>

        <h5>Snowpoint City</h5>
        <p>
          Skip Acuity Lakefront, there’s the same pokemon in the grass and we can’t reach the lake yet. Head into town and you’ll be able to Fly back here if you want to start the Feebas evolution process now. While you’re here, remove the spare Eevee in your box, go back to Route 217 and level it up to get the last Eeveelution.
        </p>
        <pre>
          Eevee → Lv up on Route 217 → Glaceon
        </pre>
        <p>
          While you’re in town, you may be tempted to trade a Medicham for a Haunter. Don’t do it, this guy is the ultimate troll and will give you a Haunter with an Everstone attached meaning that it won’t evolve!
        </p>
        <p>
          That’s as far as you can go in this fairly short sequence as you will need the badge from Snowpoint to use Rock Climb and access Lake Acuity.
        </p>

        <h5>Levelling Tips</h5>
        <p>
          Snover and Snorunt will be the main challenges due to their high evolution levels. There are lots of trainers around routes 216 and 217 if you’ve avoided them. Otherwise, practice on the trainers in the gym. Failing that, go back to previous training spots such as the Collectors on Route 214. You can access almost anywhere in Sinnoh so you have a plethora of trainers to rematch.
        </p>

        <p>
          <strong>End of part 7:</strong><br/>
          Caught 169, Remaining 41
        </p>


        ${guideSource}
  `,

      rows: [
        /* ================= Mt Coronet ================= */
        { pokemon: { img: imgBasehref + "349.png", name: "Feebas" }, method: "Fishing in Mt Coronet underground lake" },
        { pokemon: { img: imgBasehref + "350.png", name: "Milotic" }, method: "Level up Feebas with Beauty ≥ 170" },

        /* ================= Route 217 ================= */
        { pokemon: { img: imgBasehref + "220.png", name: "Swinub" }, method: "Route 217" },
        { pokemon: { img: imgBasehref + "221.png", name: "Piloswine" }, method: "Evolve Swinub at level 33" },
        { pokemon: { img: imgBasehref + "473.png", name: "Mamoswine" }, method: "Level up Piloswine knowing Ancientpower" },

        { pokemon: { img: imgBasehref + "215.png", name: "Sneasel" }, method: "Route 217" },

        { pokemon: { img: imgBasehref + "459.png", name: "Snover" }, method: "Route 217" },
        { pokemon: { img: imgBasehref + "460.png", name: "Abomasnow" }, method: "Evolve Snover at level 40" },

        { pokemon: { img: imgBasehref + "361.png", name: "Snorunt" }, method: "Route 217" },
        { pokemon: { img: imgBasehref + "362.png", name: "Glalie" }, method: "Evolve Snorunt at level 42" },
        { pokemon: { img: imgBasehref + "478.png", name: "Froslass" }, method: "Use Dawn Stone on female Snorunt" },

        /* ================= Snowpoint ================= */
        { pokemon: { img: imgBasehref + "471.png", name: "Glaceon" }, method: "Level up Eevee on Route 217" },
      ],
    },
    volkner: {
      headerTitle: "Pre Badge 8 - Volkner",
      headerImg: badgeBasehref + "Volkner.png",
      headerImgAlt: "Volkner in Pokémon Diamond and Pearl",

      summaryShort: `Now you can use Rock Climb! Only one more badge and one more HM move stops you from exploring everywhere before the Elite Four.`,
      summaryHtml: `
        <p>
          Head back to Acuity Lakefront and climb up the rocks to finally start the finale of the Galactic quest. You will need to go to Veilstone City next. Go to the building on the north eastern side of town and then afterwards, the north western side to enter the warehouse proper. After you finally battle Cyrus, be sure to check this room with the dowsing app to find a hidden Razor Claw! Slap it on Sneasel and level it up at night to get that Weavile.
        </p>
        <pre>
          Sneasel → Lv up holding Razor Claw (night) → Weavile
        </pre>
        <p>
          Carry on and release the Lake trio. Cyrus will now head up Mt Coronet.
        </p>

        <h5>Mt Coronet</h5>
        <p>
          Head into the section between Oreburgh and Hearthome where you’ll find a wall you can scale with Rock Climb so you can start your ascent up the mountain. Eventually you will reach an external part of the mountain where you’ll find the Disaster pokemon, Absol.
        </p>
        <pre>
          Absol
        </pre>
        <p>
          And finally, at the top of the mountain, you’ll encounter Cyrus again and trigger the arrival of the box legendary, Giratina. Follow Cyrus into the Distortion World and prepare for a legendary capture!
        </p>
        <pre>
          Giratina
        </pre>
        <p>
          You can throw your Master Ball straight away but I’d personally save it for either Palkia or Dialga during the post-game as they are a whopping Lv70 or the roaming legendary that will be flying around during this section of the challenge. Dusk Balls work great, I personally like to alternate between Dusk and Timer balls as the battle draws on. Try to inflict Paralysis or Sleep if you can, I didn’t have anything that could do that so it took me a while to catch it! You don’t get another opportunity to catch Giratina until after the Elite Four so this HAS to be done now. After catching it you’ll be at Sendoff Spring and you’re free to resume your journey!
        </p>

        <h5>Route 222</h5>
        <p>
          South from Sendoff Spring you’ll be back at the lake hotel and can FINALLY head east towards the final gym in Sunyshore City. Route 222 only has one new pokemon – Electabuzz. Catch a female so you can breed it straight away.
        </p>
        <pre>
          Electabuzz
          Electabuzz → Breed → Elekid
        </pre>

        <h5>Sunyshore City</h5>
        <p>
          Head into the City and go to the north beach where you can Surf around these waters to find a Mantyke. Catch yourself another Remoraid if you didn’t earlier, keep it in your party and level up Mantyke to evolve it.
        </p>
        <pre>
          Mantyke → Lv up with Remoraid in party → Mantine
        </pre>

        <h5>The Lake Trio</h5>
        <p>
          Before you go marching in to that final gym, there’s three more pokemon to catch: Azelf, Mesprit and Uxie. Return to each of the three lakes and enter the caves at the center of them to find all three legendaries. Azelf and Uxie are fairly straight forward in that you simply battle them and you should follow the same strategy as with Giratina. Mesprit is unique in that it actually flees when you interact with it and roams Sinnoh, changing its location all the time. If you don’t have it yet, go to the Poketch Company in Jubilife City and speak to the President to get some free apps, one of which is the Map Marker which will show Mesprit’s position and you don’t need to open the pokedex over and over like with some of the older games. Mesprit will flee on the first turn of every encounter. If you are slower than it, it will flee before you can attack (it’s also Lv50). Consider using priority attacks (Ice Shard, Quick Attack etc) to chip away at its health. Also bear in mind that any status effect will STAY after it runs away. I poisoned it by accident but as it flees every turn, the poison doesn’t take effect. When you have its HP as low as you feel comfortable with (save between encounters to be safe), start trying to catch it. The traditional method is to use Mean Look to prevent it from fleeing, then treating it as a normal battle. I personally try to use Quick Balls as it disregards any previous encounters and treats it as the first turn.
        </p>
        <p>
          Low HP + Status Effect + First Turn = (kind of) good chances of capture! Less than 10% but certainly doable with Quick Balls.
        </p>
        <pre>
          Azelf
          Mesprit
          Uxie
        </pre>
        <p>
          You need to be able to use Waterfall to carry on exploring so it’s final gym time!
        </p>

        <h5>Levelling Tips</h5>
        <p>
          You’re mad if you need levelling tips for this part! The only pokemon that evolve in this section will do so in ONE level if you’ve met the requirements.
        </p>

        <p>
          <strong>End of part 8:</strong><br/>
          Caught 179, Remaining 31
        </p>

        ${guideSource}
  `,

      rows: [
        /* ================= Veilstone Galactic ================= */
        { pokemon: { img: imgBasehref + "461.png", name: "Weavile" }, method: "Level up Sneasel holding Razor Claw at night" },

        /* ================= Mt Coronet ================= */
        { pokemon: { img: imgBasehref + "359.png", name: "Absol" }, method: "Mt Coronet exterior (Rock Climb area)" },
        { pokemon: { img: imgBasehref + "487.png", name: "Giratina" }, method: "Distortion World encounter" },

        /* ================= Route 222 ================= */
        { pokemon: { img: imgBasehref + "125.png", name: "Electabuzz" }, method: "Route 222" },
        { pokemon: { img: imgBasehref + "239.png", name: "Elekid" }, method: "Breed Electabuzz" },

        /* ================= Sunyshore ================= */
        { pokemon: { img: imgBasehref + "458.png", name: "Mantyke" }, method: "Surf north of Sunyshore City" },
        { pokemon: { img: imgBasehref + "226.png", name: "Mantine" }, method: "Level up Mantyke with Remoraid in party" },

        /* ================= Lake Trio ================= */
        { pokemon: { img: imgBasehref + "480.png", name: "Uxie" }, method: "Lake Acuity cavern" },
        { pokemon: { img: imgBasehref + "481.png", name: "Mesprit" }, method: "Lake Verity → roaming Sinnoh" },
        { pokemon: { img: imgBasehref + "482.png", name: "Azelf" }, method: "Lake Valor cavern" },
      ],
    },
    "pre-elite-four": {
      headerTitle: "Pre Elite Four",
      headerImg: badgeBasehref + "Cynthia.png",
      headerImgAlt: "Cynthia as she appeared in Pokemon Platinum",

      summaryShort: `This last badge lets you use Waterfall which lets you find….no new pokemon…`,
      summaryHtml: `
        <p>
          This last badge lets you use Waterfall which lets you find….no new pokemon… Head back to the beach north of Sunyshore where you’ll meet Jasmine from Johto who will give you the Waterfall HM. Go beat the Elite Four!
        </p>

        <p>
          <strong>End of part 9:</strong><br/>
          Caught 179, Remaining 31
        </p>

        ${guideSource}
  `,

      rows: [],
    },

    "post-game": {
      headerTitle: "Post Game",
      headerImg: "assets/images/Platinum/badges/Spr_HGSS_Oak.png",
      headerImgAlt: "Prof Oak as he appeared in HeartGold and SoulSilver.",

      summaryShort: `The main story challenge has technically ended but feel free to work on that pokedex as much as you can by yourself!`,
      summaryHtml: `<p>
          The main story challenge has technically ended but feel free to work on that pokedex as much as you can by yourself!
        </p>

        <p>
          Go and see Professor Rowan and, if you’ve seen every pokemon in Sinnoh (the remaining 31 would be from battling trainers. Check Serebii if you’re missing any and the trainer locations), you’ll get the National Dex and the Pokeradar. There is an island in the north eastern reaches of Sinnoh which you can visit, but before you do that, here’s a few side quests in the Sinnoh mainland. For any stone evolutions, these can be found in the Sinnoh Underground with much higher spawn rates!
        </p>

        <h5>More Roaming Pokemon</h5>
        <p>
          Go back to the Pal Park. You can’t Fly there yet but once you go in you’ll then be able to Fly back. Speak to Professor Oak who will explain the basics of the park. He will then leave and go to Eterna City. Fly there and find him in the house near the south end. He’ll confirm that Articuno, Zapdos and Moltres have been sighted. Also go to Canalave City and enter the house next to the boat that takes you to Iron Island. Speak to the boy and his mother, then speak to the sailor who will take you to a new island where you can interact with Cresselia who will flee and start roaming too. All four of these pokemon can be found on the Map Marker app like with the Lake Trio.
        </p>
        <pre>
          Articuno
          Zapdos
          Moltres
          Cresselia
        </pre>

        <h5>The Legends of Time and Space</h5>
        <p>
          The only remaining pokemon in your original Sinnoh Dex of 210 pokemon. Return to Celestic Town and speak to Cynthia’s grandmother in the large building. Head into Mt Coronet as if you were heading to the Spear Pillar again (where you encountered Cyrus and Giratina). There’s a room with a waterfall in it that you can climb to reach a small room that has the Adamant and Lustrous Orbs. With both of this in hand, go to the Spear Pillar on top of the mountain. You can interact with the glowing portals to encounter both Dialga and Palkia. They are a whopping Lv70 so you might want to use a Master Ball on one if you desire.
        </p>
        <pre>
          Dialga
          Palkia
        </pre>

        <h5>Daily Swarming Pokemon</h5>
        <p>
          This will contribute a lot towards your National Dex. Every day, go to Lucas/Dawn’s house in Sandgem Town and speak to their little sister who will tell you of a swarm of pokemon not native to Sinnoh on a certain route. This changes every day. Sadly, there’s no way to soft reset to get the desired pokemon. Changing the clock gets a bit tricky with timings but you’re not going to cheat are you? I won’t list their routes since the girl will tell you, but the pokemon available are:
        </p>
        <pre>
          Farfetch’d
          Doduo → Lv. 31 → Dodrio
          Drowzee → Lv. 26 → Hypno
          Krabby → Lv. 28 → Kingler
          Voltorb → Lv. 30 → Electrode
          Cubone → Lv. 28 → Marowak
          Pinsir
          Natu → Lv. 25 → Xatu
          Dunsparce
          Snubbull → Lv. 23 → Granbull
          Corsola
          Delibird
          Phanpy → Lv. 25 → Donphan
          Larvitar → Lv. 30 → Pupitar → Lv. 55 → Tyranitar
          Zigzagoon → Lv. 20 → Linoone
          Slakoth → Lv. 18 → Vigoroth → Lv. 36 → Slaking
          Makuhita → Lv. 24 → Hariyama
          Skitty → Moon Stone → Delcatty
          Electrike → Lv. 26 → Manectric
          Spoink → Lv. 32 → Grumpig
          Spinda
          Beldum → Lv. 20 → Metang → Lv. 45 → Metagross
        </pre>

        <h5>Pokeradar</h5>
        <p>
          Another big contributor, if you use the Pokeradar within patches of grass you will have a chance of finding pokemon that are otherwise unobtainable. Some of these routes are part of the new areas yet to be mentioned in this walkthrough.
        </p>
        <pre>
          (Route 201) Nidoran f → Lv. 16 → Nidorina → Moon Stone → Nidoqueen
          (Route 201) Nidoran m → Lv. 16 → Nidorino → Moon Stone → Nidoking
          (Route 202) Sentret → Lv. 15 → Furret
          (Route 204 North) Sunkern → Sun Stone → Sunflora
          (Route 205 South) Hoppip → Lv. 18 → Skiploom → Lv. 27 → Jumpluff
          (Route 205 North) Slowpoke → Lv. 37 → Slowbro
          (Route 206) Baltoy → Lv. 36 → Claydol
          (Route 207) Stantler
          (Route 208) Smeargle
          (Route 210 South) Tauros
          (Route 210 South) Miltank
          (Route 210 North) Bagon → Lv. 30 → Shelgon → Lv. 50 → Salamence
          (Route 211 West) Tyrogue → Lv. 20 Attack higher than Defense → Hitmonlee
          (Route 211 West) Tyrogue → Lv. 20 Defense higher than Attack → Hitmonchan
          (Route 211 West) Tyrogue → Lv. 20 Attack same as Defense → Hitmontop
          (Route 212 South) Grimer → Lv. 38 → Muk
          (Route 213) Swellow
          (Route 214) Poochyena → Lv. 18 → Mightyena
          (Route 225) Mankey → Lv. 28 → Primeape
          (Route 227) Torkoal
          (Route 229) Venonat → Lv. 31 → Venomoth
          (Lake Verity/Valor) Wobbuffet
          (Fuego Ironworks) Aron → Lv. 32 → Lairon → Lv. 42 → Aggron
          (Valley Windworks) Mareep → Lv. 15 → Flaaffy → Lv. 30 → Ampharos
          (Eterna Forest) Nincada → Lv. 20 → Ninjask
          (Eterna Forest) Nincada → Lv. 20 with spare slot in party → Shedinja
          (Mt Coronet external snowy area) Loudred → Lv. 40 → Exploud
        </pre>

        <p>
          And as a few of these are already evolved, there’s a few eggs to hatch:
        </p>
        <pre>
          Swellow → Breed → Taillow
          Wobbuffet → Breed holding Lax Incense → Wynaut
          Loudred/Exploud → Breed → Whismur
        </pre>

        <h5>Daily Trophy Garden Pokemon</h5>
        <p>
          Return to the mansion on Route 212 and go to Mr. Backlot’s office and SAVE the game before you speak to him. Unlike the swarms, the daily pokemon that are added to the garden CAN be soft-reset to get the desired pokemon. Mr. Backlot will claim that he saw a certain pokemon in the garden and his butler will rush off to populate the garden with these pokemon to stop his master from being branded as a liar! A lot of these will be baby pokemon that you already own, but there are a few new additions. This is also the only way to get a Ditto in Platinum!
        </p>
        <pre>
          Jigglypuff → Moon Stone → Wigglytuff
          Ditto
          Plusle
          Minun
          Castform
          Meowth → Lv. 28 → Persian
        </pre>

        <p>
          And of course, breed Jigglypuff:
        </p>
        <pre>
          Jigglypuff/Wigglytuff → Breed → Igglybuff
        </pre>

        <h5>More Great Marsh Daily Pokemon</h5>
        <p>
          Yes you heard right, additional pokemon are now in rotation as part of the ‘binocular’ pokemon selection. I’m excluding Carvanha as it can be caught without being one of the daily pokemon shortly. Have a look through the binoculars to see if any of these new additions is around:
        </p>
        <pre>
          Paras → Lv. 24 → Parasect
          Exeggcute → Leaf Stone → Exeggutor
          Kangaskhan
          Shroomish → Lv. 23 → Breloom
          Gulpin → Lv. 26 → Swalot
          Kecleon
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
          Enter Victory Road from the Pokemon League side and there is a cave on the right hand side that previously had someone blocking it. This is now open for you to visit. Down here you will team up with another double battle partner (Marley and her Arcanine). You can explore the room in full with her accompanying you but best to come back afterwards with Surf to make it easier. Dewgong can be found on the ground while Surfing could yield a Lapras.
        </p>
        <pre>
          Dewgong
          Lapras
        </pre>

        <h5>Route 224</h5>
        <p>
          Emerge from Victory Road to find a new seaside route. There are new pokemon here but since you can’t Fly back here, either make the most of this visit or catch them all on a different route. Weepinbell and Gloom are found all day while Bellsprout and Oddish are only found during the day and night respectively.
        </p>
        <pre>
          Oddish → Lv. 21 → Gloom → Leaf Stone → Vileplume
          Oddish → Lv. 21 → Gloom → Sun Stone → Bellossom
          Bellsprout → Lv. 21 → Weepinbell → Leaf Stone → Victreebel
        </pre>

        <p>
          Once you’re back in civilization, don’t forget to breed Dewgong to get Seel!
        </p>
        <pre>
          Dewgong → Breed → Seel
        </pre>

        <h5>Snowpoint Temple</h5>
        <p>
          Go to Snowpoint City and try to enter the temple. You’ll be turned away as usual, but Candice will show up and let you in. Only one evolution line to catch here (both available in different floors):
        </p>
        <pre>
          Smoochum → Lv. 30 → Jynx
        </pre>

        <h5>To the Battle Frontier</h5>
        <p>
          Take the ferry from Snowpoint City which will take you to the island in the north eastern part of Sinnoh where the climate is much warmer. You’ll first be given an intro to the Battle Frontier, after which you are free to explore. If you have the National Dex (which of course you do!) then you can leave the Fight Area and see other routes. Talk to the fisherman by the pier to get the Super Rod!
        </p>

        <h5>Super Fishing Tour</h5>
        <pre>
          (Pokemon League) Luvdisc
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
          And of course breed your Banette:
        </p>
        <pre>
          Banette → Breed → Shuppet
        </pre>

        <h5>Route 226</h5>
        <p>
          You can have a respite at the Survival Area and then leave the eastern side to reach Route 226 which requires Rock Climb. There’s nothing new in the grass but the water areas hold a couple of pokemon obtained from fishing. Horsea can be caught with a Good Rod while Relicanth (and Seadra) can be found with a Super Rod.
        </p>
        <pre>
          Horsea → Lv. 32 → Seadra
          Relicanth
        </pre>

        <h5>Route 228</h5>
        <p>
          Skip Route 227 for now, we’ll head there last. Route 228 is covered in sandstorms! Throw yourself into the grass to find a few more pokemon to add to the collection:
        </p>
        <pre>
          Diglett → Lv. 26 → Dugtrio
          Cacnea → Lv. 32 → Cacturne
        </pre>

        <p>
          Surf in the waters to catch:
        </p>
        <pre>
          Poliwag → Lv. 25 → Poliwhirl → Water Stone → Poliwrath
        </pre>

        <h5>Route 229</h5>
        <p>
          South from Route 228 is a lush, grassy route with plenty of grass and bug types. Quite a few new pokemon here:
        </p>
        <pre>
          (Day time) Ledian
          (Night time) Ariados
          Pidgey → Lv. 18 → Pidgeotto → Lv. 36 → Pidgeot
          Volbeat
          Illumise
        </pre>

        <p>
          Surfing here will also net you:
        </p>
        <pre>
          Surskit → Lv. 22 → Masquerain
        </pre>

        <p>
          And then obviously breed your new bugs:
        </p>
        <pre>
          Ledian → Breed → Ledyba
          Ariados → Breed → Spinarak
        </pre>

        <h5>Route 230</h5>
        <p>
          There’s nothing interesting for your dex at the Resort Area, though you may want to go there to enable you to Fly there. The pokemon are very similar to another route by Victory Road so the only new one for you is to Surf for a Sealeo:
        </p>
        <pre>
          Sealeo → Lv. 44 → Walrein
        </pre>

        <p>
          And breed it to get Spheal:
        </p>
        <pre>
          Sealeo/Walrein → Breed → Spheal
        </pre>

        <h5>Route 227</h5>
        <p>
          The final stretch! This is the last time you’ll need to use your pokeradar to get Torkoal. Through regular encounters you will find:
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
          <strong>End of part 10:</strong><br/>
          Sinnoh Dex - Caught 181, Remaining 29<br/>
          National Dex - Caught 374, Remaining 119
        </p>
        ${guideSource}
  `,

      rows: [
        /* ================= Roaming Pokémon ================= */
        { pokemon: { img: imgBasehref + "144.png", name: "Articuno" }, method: "Roaming Sinnoh (Map Marker)" },
        { pokemon: { img: imgBasehref + "145.png", name: "Zapdos" }, method: "Roaming Sinnoh (Map Marker)" },
        { pokemon: { img: imgBasehref + "146.png", name: "Moltres" }, method: "Roaming Sinnoh (Map Marker)" },
        { pokemon: { img: imgBasehref + "488.png", name: "Cresselia" }, method: "Roaming Sinnoh (Map Marker)" },

        /* ================= Legends of Time and Space ================= */
        { pokemon: { img: imgBasehref + "483.png", name: "Dialga" }, method: "Spear Pillar (Lv. 70)" },
        { pokemon: { img: imgBasehref + "484.png", name: "Palkia" }, method: "Spear Pillar (Lv. 70)" },

        /* ================= Daily Swarming Pokémon ================= */
        { pokemon: { img: imgBasehref + "083.png", name: "Farfetch’d" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "084.png", name: "Doduo" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "085.png", name: "Dodrio" }, method: "Evolve Doduo at level 31" },
        { pokemon: { img: imgBasehref + "096.png", name: "Drowzee" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "097.png", name: "Hypno" }, method: "Evolve Drowzee at level 26" },
        { pokemon: { img: imgBasehref + "098.png", name: "Krabby" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "099.png", name: "Kingler" }, method: "Evolve Krabby at level 28" },
        { pokemon: { img: imgBasehref + "100.png", name: "Voltorb" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "101.png", name: "Electrode" }, method: "Evolve Voltorb at level 30" },
        { pokemon: { img: imgBasehref + "104.png", name: "Cubone" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "105.png", name: "Marowak" }, method: "Evolve Cubone at level 28" },
        { pokemon: { img: imgBasehref + "127.png", name: "Pinsir" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "177.png", name: "Natu" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "178.png", name: "Xatu" }, method: "Evolve Natu at level 25" },
        { pokemon: { img: imgBasehref + "206.png", name: "Dunsparce" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "209.png", name: "Snubbull" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "210.png", name: "Granbull" }, method: "Evolve Snubbull at level 23" },
        { pokemon: { img: imgBasehref + "222.png", name: "Corsola" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "225.png", name: "Delibird" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "231.png", name: "Phanpy" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "232.png", name: "Donphan" }, method: "Evolve Phanpy at level 25" },
        { pokemon: { img: imgBasehref + "246.png", name: "Larvitar" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "247.png", name: "Pupitar" }, method: "Evolve Larvitar at level 30" },
        { pokemon: { img: imgBasehref + "248.png", name: "Tyranitar" }, method: "Evolve Pupitar at level 55" },
        { pokemon: { img: imgBasehref + "263.png", name: "Zigzagoon" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "264.png", name: "Linoone" }, method: "Evolve Zigzagoon at level 20" },
        { pokemon: { img: imgBasehref + "287.png", name: "Slakoth" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "288.png", name: "Vigoroth" }, method: "Evolve Slakoth at level 18" },
        { pokemon: { img: imgBasehref + "289.png", name: "Slaking" }, method: "Evolve Vigoroth at level 36" },
        { pokemon: { img: imgBasehref + "296.png", name: "Makuhita" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "297.png", name: "Hariyama" }, method: "Evolve Makuhita at level 24" },
        { pokemon: { img: imgBasehref + "300.png", name: "Skitty" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "301.png", name: "Delcatty" }, method: "Use Moon Stone on Skitty" },
        { pokemon: { img: imgBasehref + "309.png", name: "Electrike" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "310.png", name: "Manectric" }, method: "Evolve Electrike at level 26" },
        { pokemon: { img: imgBasehref + "325.png", name: "Spoink" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "326.png", name: "Grumpig" }, method: "Evolve Spoink at level 32" },
        { pokemon: { img: imgBasehref + "327.png", name: "Spinda" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "374.png", name: "Beldum" }, method: "Daily swarm" },
        { pokemon: { img: imgBasehref + "375.png", name: "Metang" }, method: "Evolve Beldum at level 20" },
        { pokemon: { img: imgBasehref + "376.png", name: "Metagross" }, method: "Evolve Metang at level 45" },
        /* ================= Pokéradar ================= */

        { pokemon: { img: imgBasehref + "029.png", name: "Nidoran♀" }, method: "Pokéradar (Route 201)" },
        { pokemon: { img: imgBasehref + "030.png", name: "Nidorina" }, method: "Evolve Nidoran♀ at level 16" },
        { pokemon: { img: imgBasehref + "031.png", name: "Nidoqueen" }, method: "Use Moon Stone on Nidorina" },

        { pokemon: { img: imgBasehref + "032.png", name: "Nidoran♂" }, method: "Pokéradar (Route 201)" },
        { pokemon: { img: imgBasehref + "033.png", name: "Nidorino" }, method: "Evolve Nidoran♂ at level 16" },
        { pokemon: { img: imgBasehref + "034.png", name: "Nidoking" }, method: "Use Moon Stone on Nidorino" },

        { pokemon: { img: imgBasehref + "161.png", name: "Sentret" }, method: "Pokéradar (Route 202)" },
        { pokemon: { img: imgBasehref + "162.png", name: "Furret" }, method: "Evolve Sentret at level 15" },

        { pokemon: { img: imgBasehref + "191.png", name: "Sunkern" }, method: "Pokéradar (Route 204 North)" },
        { pokemon: { img: imgBasehref + "192.png", name: "Sunflora" }, method: "Use Sun Stone on Sunkern" },

        { pokemon: { img: imgBasehref + "187.png", name: "Hoppip" }, method: "Pokéradar (Route 205 South)" },
        { pokemon: { img: imgBasehref + "188.png", name: "Skiploom" }, method: "Evolve Hoppip at level 18" },
        { pokemon: { img: imgBasehref + "189.png", name: "Jumpluff" }, method: "Evolve Skiploom at level 27" },

        { pokemon: { img: imgBasehref + "079.png", name: "Slowpoke" }, method: "Pokéradar (Route 205 North)" },
        { pokemon: { img: imgBasehref + "080.png", name: "Slowbro" }, method: "Evolve Slowpoke at level 37" },

        { pokemon: { img: imgBasehref + "343.png", name: "Baltoy" }, method: "Pokéradar (Route 206)" },
        { pokemon: { img: imgBasehref + "344.png", name: "Claydol" }, method: "Evolve Baltoy at level 36" },

        { pokemon: { img: imgBasehref + "234.png", name: "Stantler" }, method: "Pokéradar (Route 207)" },

        { pokemon: { img: imgBasehref + "235.png", name: "Smeargle" }, method: "Pokéradar (Route 208)" },

        { pokemon: { img: imgBasehref + "128.png", name: "Tauros" }, method: "Pokéradar (Route 210 South)" },
        { pokemon: { img: imgBasehref + "241.png", name: "Miltank" }, method: "Pokéradar (Route 210 South)" },

        { pokemon: { img: imgBasehref + "371.png", name: "Bagon" }, method: "Pokéradar (Route 210 North)" },
        { pokemon: { img: imgBasehref + "372.png", name: "Shelgon" }, method: "Evolve Bagon at level 30" },
        { pokemon: { img: imgBasehref + "373.png", name: "Salamence" }, method: "Evolve Shelgon at level 50" },

        { pokemon: { img: imgBasehref + "236.png", name: "Tyrogue" }, method: "Pokéradar (Route 211 West)" },
        { pokemon: { img: imgBasehref + "106.png", name: "Hitmonlee" }, method: "Evolve Tyrogue (Attack > Defense)" },
        { pokemon: { img: imgBasehref + "107.png", name: "Hitmonchan" }, method: "Evolve Tyrogue (Defense > Attack)" },
        { pokemon: { img: imgBasehref + "237.png", name: "Hitmontop" }, method: "Evolve Tyrogue (Attack = Defense)" },

        { pokemon: { img: imgBasehref + "088.png", name: "Grimer" }, method: "Pokéradar (Route 212 South)" },
        { pokemon: { img: imgBasehref + "089.png", name: "Muk" }, method: "Evolve Grimer at level 38" },

        { pokemon: { img: imgBasehref + "277.png", name: "Swellow" }, method: "Pokéradar (Route 213)" },

        { pokemon: { img: imgBasehref + "261.png", name: "Poochyena" }, method: "Pokéradar (Route 214)" },
        { pokemon: { img: imgBasehref + "262.png", name: "Mightyena" }, method: "Evolve Poochyena at level 18" },

        { pokemon: { img: imgBasehref + "056.png", name: "Mankey" }, method: "Pokéradar (Route 225)" },
        { pokemon: { img: imgBasehref + "057.png", name: "Primeape" }, method: "Evolve Mankey at level 28" },

        { pokemon: { img: imgBasehref + "324.png", name: "Torkoal" }, method: "Pokéradar (Route 227)" },

        { pokemon: { img: imgBasehref + "048.png", name: "Venonat" }, method: "Pokéradar (Route 229)" },
        { pokemon: { img: imgBasehref + "049.png", name: "Venomoth" }, method: "Evolve Venonat at level 31" },

        { pokemon: { img: imgBasehref + "202.png", name: "Wobbuffet" }, method: "Pokéradar (Lake Verity / Lake Valor)" },

        { pokemon: { img: imgBasehref + "304.png", name: "Aron" }, method: "Pokéradar (Fuego Ironworks)" },
        { pokemon: { img: imgBasehref + "305.png", name: "Lairon" }, method: "Evolve Aron at level 32" },
        { pokemon: { img: imgBasehref + "306.png", name: "Aggron" }, method: "Evolve Lairon at level 42" },

        { pokemon: { img: imgBasehref + "179.png", name: "Mareep" }, method: "Pokéradar (Valley Windworks)" },
        { pokemon: { img: imgBasehref + "180.png", name: "Flaaffy" }, method: "Evolve Mareep at level 15" },
        { pokemon: { img: imgBasehref + "181.png", name: "Ampharos" }, method: "Evolve Flaaffy at level 30" },

        { pokemon: { img: imgBasehref + "290.png", name: "Nincada" }, method: "Pokéradar (Eterna Forest)" },
        { pokemon: { img: imgBasehref + "291.png", name: "Ninjask" }, method: "Evolve Nincada at level 20" },
        { pokemon: { img: imgBasehref + "292.png", name: "Shedinja" }, method: "Evolve Nincada at level 20 with spare party slot" },

        { pokemon: { img: imgBasehref + "294.png", name: "Loudred" }, method: "Pokéradar (Mt Coronet snowy exterior)" },
        { pokemon: { img: imgBasehref + "295.png", name: "Exploud" }, method: "Evolve Loudred at level 40" },

        /* ================= Eggs ================= */

        { pokemon: { img: imgBasehref + "276.png", name: "Taillow" }, method: "Breed Swellow" },
        { pokemon: { img: imgBasehref + "360.png", name: "Wynaut" }, method: "Breed Wobbuffet holding Lax Incense" },
        { pokemon: { img: imgBasehref + "293.png", name: "Whismur" }, method: "Breed Loudred or Exploud" },
        /* ================= Daily Trophy Garden Pokémon ================= */

        { pokemon: { img: imgBasehref + "039.png", name: "Jigglypuff" }, method: "Daily Trophy Garden Pokémon" },
        { pokemon: { img: imgBasehref + "040.png", name: "Wigglytuff" }, method: "Use Moon Stone on Jigglypuff" },

        { pokemon: { img: imgBasehref + "132.png", name: "Ditto" }, method: "Daily Trophy Garden Pokémon" },

        { pokemon: { img: imgBasehref + "311.png", name: "Plusle" }, method: "Daily Trophy Garden Pokémon" },
        { pokemon: { img: imgBasehref + "312.png", name: "Minun" }, method: "Daily Trophy Garden Pokémon" },

        { pokemon: { img: imgBasehref + "351.png", name: "Castform" }, method: "Daily Trophy Garden Pokémon" },

        { pokemon: { img: imgBasehref + "052.png", name: "Meowth" }, method: "Daily Trophy Garden Pokémon" },
        { pokemon: { img: imgBasehref + "053.png", name: "Persian" }, method: "Evolve Meowth at level 28" },

        { pokemon: { img: imgBasehref + "174.png", name: "Igglybuff" }, method: "Breed Jigglypuff or Wigglytuff" },

        /* ================= More Great Marsh Daily Pokémon ================= */

        { pokemon: { img: imgBasehref + "046.png", name: "Paras" }, method: "Great Marsh daily binocular Pokémon" },
        { pokemon: { img: imgBasehref + "047.png", name: "Parasect" }, method: "Evolve Paras at level 24" },

        { pokemon: { img: imgBasehref + "102.png", name: "Exeggcute" }, method: "Great Marsh daily binocular Pokémon" },
        { pokemon: { img: imgBasehref + "103.png", name: "Exeggutor" }, method: "Use Leaf Stone on Exeggcute" },

        { pokemon: { img: imgBasehref + "115.png", name: "Kangaskhan" }, method: "Great Marsh daily binocular Pokémon" },

        { pokemon: { img: imgBasehref + "285.png", name: "Shroomish" }, method: "Great Marsh daily binocular Pokémon" },
        { pokemon: { img: imgBasehref + "286.png", name: "Breloom" }, method: "Evolve Shroomish at level 23" },

        { pokemon: { img: imgBasehref + "316.png", name: "Gulpin" }, method: "Great Marsh daily binocular Pokémon" },
        { pokemon: { img: imgBasehref + "317.png", name: "Swalot" }, method: "Evolve Gulpin at level 26" },

        { pokemon: { img: imgBasehref + "352.png", name: "Kecleon" }, method: "Great Marsh daily binocular Pokémon" },

        /* ================= Doin’ More Diggin’ ================= */

        { pokemon: { img: imgBasehref + "138.png", name: "Omanyte" }, method: "Underground fossil revival" },
        { pokemon: { img: imgBasehref + "139.png", name: "Omastar" }, method: "Evolve Omanyte at level 40" },

        { pokemon: { img: imgBasehref + "140.png", name: "Kabuto" }, method: "Underground fossil revival" },
        { pokemon: { img: imgBasehref + "141.png", name: "Kabutops" }, method: "Evolve Kabuto at level 40" },

        { pokemon: { img: imgBasehref + "142.png", name: "Aerodactyl" }, method: "Old Amber revival" },

        { pokemon: { img: imgBasehref + "347.png", name: "Anorith" }, method: "Underground fossil revival" },
        { pokemon: { img: imgBasehref + "348.png", name: "Armaldo" }, method: "Evolve Anorith at level 40" },

        { pokemon: { img: imgBasehref + "345.png", name: "Lileep" }, method: "Underground fossil revival" },
        { pokemon: { img: imgBasehref + "346.png", name: "Cradily" }, method: "Evolve Lileep at level 40" },

        /* ================= Victory Road Revisited ================= */

        { pokemon: { img: imgBasehref + "087.png", name: "Dewgong" }, method: "Victory Road cave (ground encounter)" },
        { pokemon: { img: imgBasehref + "131.png", name: "Lapras" }, method: "Surf in Victory Road caves" },
        { pokemon: { img: imgBasehref + "086.png", name: "Seel" }, method: "Breed Dewgong" },

        /* ================= Route 224 ================= */
        { pokemon: { img: imgBasehref + "043.png", name: "Oddish" }, method: "Route 224" },
        { pokemon: { img: imgBasehref + "044.png", name: "Gloom" }, method: "Evolve Oddish at level 21" },
        { pokemon: { img: imgBasehref + "045.png", name: "Vileplume" }, method: "Use Leaf Stone on Gloom" },
        { pokemon: { img: imgBasehref + "182.png", name: "Bellossom" }, method: "Use Sun Stone on Gloom" },

        { pokemon: { img: imgBasehref + "069.png", name: "Bellsprout" }, method: "Route 224 (day)" },
        { pokemon: { img: imgBasehref + "070.png", name: "Weepinbell" }, method: "Evolve Bellsprout at level 21" },
        { pokemon: { img: imgBasehref + "071.png", name: "Victreebel" }, method: "Use Leaf Stone on Weepinbell" },

        /* ================= Snowpoint Temple ================= */
        { pokemon: { img: imgBasehref + "238.png", name: "Smoochum" }, method: "Snowpoint Temple" },
        { pokemon: { img: imgBasehref + "124.png", name: "Jynx" }, method: "Evolve Smoochum at level 30" },

        /* ================= Super Fishing Tour ================= */
        { pokemon: { img: imgBasehref + "370.png", name: "Luvdisc" }, method: "Super Rod (Pokémon League)" },

        { pokemon: { img: imgBasehref + "170.png", name: "Chinchou" }, method: "Super Rod (Route 220)" },
        { pokemon: { img: imgBasehref + "171.png", name: "Lanturn" }, method: "Evolve Chinchou at level 27" },

        { pokemon: { img: imgBasehref + "120.png", name: "Staryu" }, method: "Super Rod (Canalave City)" },
        { pokemon: { img: imgBasehref + "121.png", name: "Starmie" }, method: "Use Water Stone on Staryu" },

        { pokemon: { img: imgBasehref + "211.png", name: "Qwilfish" }, method: "Super Rod (Iron Island)" },

        { pokemon: { img: imgBasehref + "090.png", name: "Shellder" }, method: "Super Rod (Route 205)" },
        { pokemon: { img: imgBasehref + "091.png", name: "Cloyster" }, method: "Use Water Stone on Shellder" },

        { pokemon: { img: imgBasehref + "318.png", name: "Carvanha" }, method: "Super Rod (Great Marsh)" },
        { pokemon: { img: imgBasehref + "319.png", name: "Sharpedo" }, method: "Evolve Carvanha at level 30" },

        { pokemon: { img: imgBasehref + "341.png", name: "Corphish" }, method: "Super Rod (Celestic Town)" },
        { pokemon: { img: imgBasehref + "342.png", name: "Crawdaunt" }, method: "Evolve Corphish at level 30" },

        { pokemon: { img: imgBasehref + "147.png", name: "Dratini" }, method: "Super Rod (Mt Coronet waterfall room)" },
        { pokemon: { img: imgBasehref + "148.png", name: "Dragonair" }, method: "Evolve Dratini at level 30" },
        { pokemon: { img: imgBasehref + "149.png", name: "Dragonite" }, method: "Evolve Dragonair at level 55" },

        { pokemon: { img: imgBasehref + "320.png", name: "Wailmer" }, method: "Super Rod (Route 223)" },
        { pokemon: { img: imgBasehref + "321.png", name: "Wailord" }, method: "Evolve Wailmer at level 40" },

        /* ================= Route 225 ================= */
        { pokemon: { img: imgBasehref + "021.png", name: "Spearow" }, method: "Route 225" },
        { pokemon: { img: imgBasehref + "022.png", name: "Fearow" }, method: "Evolve Spearow at level 20" },

        { pokemon: { img: imgBasehref + "019.png", name: "Rattata" }, method: "Route 225" },
        { pokemon: { img: imgBasehref + "020.png", name: "Raticate" }, method: "Evolve Rattata at level 20" },

        { pokemon: { img: imgBasehref + "354.png", name: "Banette" }, method: "Route 225 (night)" },
        { pokemon: { img: imgBasehref + "353.png", name: "Shuppet" }, method: "Breed Banette" },

        /* ================= Route 226 ================= */
        { pokemon: { img: imgBasehref + "116.png", name: "Horsea" }, method: "Good Rod (Route 226)" },
        { pokemon: { img: imgBasehref + "117.png", name: "Seadra" }, method: "Evolve Horsea at level 32" },
        { pokemon: { img: imgBasehref + "369.png", name: "Relicanth" }, method: "Super Rod (Route 226)" },

        /* ================= Route 228 ================= */
        { pokemon: { img: imgBasehref + "050.png", name: "Diglett" }, method: "Route 228" },
        { pokemon: { img: imgBasehref + "051.png", name: "Dugtrio" }, method: "Evolve Diglett at level 26" },

        { pokemon: { img: imgBasehref + "331.png", name: "Cacnea" }, method: "Route 228" },
        { pokemon: { img: imgBasehref + "332.png", name: "Cacturne" }, method: "Evolve Cacnea at level 32" },

        { pokemon: { img: imgBasehref + "060.png", name: "Poliwag" }, method: "Surf (Route 228)" },
        { pokemon: { img: imgBasehref + "061.png", name: "Poliwhirl" }, method: "Evolve Poliwag at level 25" },
        { pokemon: { img: imgBasehref + "062.png", name: "Poliwrath" }, method: "Use Water Stone on Poliwhirl" },

        /* ================= Route 229 ================= */
        { pokemon: { img: imgBasehref + "166.png", name: "Ledian" }, method: "Route 229 (day)" },
        { pokemon: { img: imgBasehref + "168.png", name: "Ariados" }, method: "Route 229 (night)" },

        { pokemon: { img: imgBasehref + "016.png", name: "Pidgey" }, method: "Route 229" },
        { pokemon: { img: imgBasehref + "017.png", name: "Pidgeotto" }, method: "Evolve Pidgey at level 18" },
        { pokemon: { img: imgBasehref + "018.png", name: "Pidgeot" }, method: "Evolve Pidgeotto at level 36" },

        { pokemon: { img: imgBasehref + "313.png", name: "Volbeat" }, method: "Route 229" },
        { pokemon: { img: imgBasehref + "314.png", name: "Illumise" }, method: "Route 229" },

        { pokemon: { img: imgBasehref + "283.png", name: "Surskit" }, method: "Surf (Route 229)" },
        { pokemon: { img: imgBasehref + "284.png", name: "Masquerain" }, method: "Evolve Surskit at level 22" },

        { pokemon: { img: imgBasehref + "165.png", name: "Ledyba" }, method: "Breed Ledian" },
        { pokemon: { img: imgBasehref + "167.png", name: "Spinarak" }, method: "Breed Ariados" },

        /* ================= Route 230 ================= */
        { pokemon: { img: imgBasehref + "364.png", name: "Sealeo" }, method: "Surf (Route 230)" },
        { pokemon: { img: imgBasehref + "365.png", name: "Walrein" }, method: "Evolve Sealeo at level 44" },
        { pokemon: { img: imgBasehref + "363.png", name: "Spheal" }, method: "Breed Sealeo or Walrein" },

        /* ================= Route 227 ================= */
        { pokemon: { img: imgBasehref + "227.png", name: "Skarmory" }, method: "Route 227" },
        { pokemon: { img: imgBasehref + "322.png", name: "Numel" }, method: "Route 227" },
        { pokemon: { img: imgBasehref + "323.png", name: "Camerupt" }, method: "Evolve Numel at level 33" },
        { pokemon: { img: imgBasehref + "110.png", name: "Weezing" }, method: "Route 227" },
        { pokemon: { img: imgBasehref + "109.png", name: "Koffing" }, method: "Breed Weezing" },

        /* ================= Stark Mountain ================= */
        { pokemon: { img: imgBasehref + "218.png", name: "Slugma" }, method: "Stark Mountain" },
        { pokemon: { img: imgBasehref + "219.png", name: "Magcargo" }, method: "Evolve Slugma at level 38" },
        { pokemon: { img: imgBasehref + "485.png", name: "Heatran" }, method: "Stark Mountain (event battle)" },
      ],
    },
  },
};
