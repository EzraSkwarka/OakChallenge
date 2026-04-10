/* ----------------------
    - img src: 
    - Guide: 
    ----------------------- */
const guideLink = "https://docs.google.com/document/d/1V1dGgjCvTF9W3dzTUxV9KO1vUxt3bMSvSc2NO0rG1uo/edit?tab=t.0";
const guideSource = `
      <p class="tips-source">
        <a href="${guideLink}" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>`;

const imgBasehref = "assets/images/Black and White/pokedex/";
const badgeBasehref = "assets/images/Black and White/badges/";

window.gameData = {
  gameId: "black",
  gameTitle: "black",
  logo: "assets/images/logos/black.png",
  aboutHtml: `
   <section class="game-intro-content">
      <ul>
    
      </ul>
      ${guideSource}
    </section>
    `,
  progression: {
    "Pre Badge 1": {
      headerTitle: "Pre Badge 1 - Striaton Gym",

      headerImg: badgeBasehref + ".png",
      headerImgAlt: "",

      summaryShort:
        "This first part will cover everything you can do from the get-go right up to the Striaton City Gym BEFORE you get that first badge from Cilan/Chili/Cress. This WILL take a while so it will really test your patience…",
      summaryHtml: `
        <h5>Nuvema Town</h5>
        <p>
          Very early on as you start the game, your neighbours, Bianca and Cheren, will visit you and you’ll all get to pick a starter pokemon. You’ll be lucky enough to pick first. Honestly, there’s no real advantage to any of the starters as they all evolve at level 36. There’s also no real type advantage against the wild pokemon as you’ll only be battling three different types of wild pokemon for the entire section – Patrat, Lillipup and Purrloin. Go visit Professor Juniper and you’ll each get a pokedex meaning that we can now register our starter.
        </p>

        <pre>
          Snivy → Lv. 17 → Servine → Lv. 36 → Serperior
          OR
          Tepig → Lv. 17 → Pignite → Lv. 36 → Emboar
          OR
          Oshawott → Lv. 17 → Dewott → Lv. 36 → Samurott
        </pre>

        <h5>Route 1</h5>
        <p>
          Leave your home town via the northern exit and you’ll get the usual capture tutorial. Bianca then challenges you and Cheren to a catching contest. There’s only two pokemon to catch here and if you catch them both, you win. Unfortunately there’s no prize!
        </p>

        <pre>
          Lillipup → Lv. 16 → Herdier → Lv. 32 → Stoutland
          Patrat → Lv. 20 → Watchog
        </pre>

        <p>
          Lillipup has two abilities which can come in handy. Vital Spirit means that, if it’s in the lead spot (even if KO’d), higher level pokemon are more likely to appear. The other ability is Pickup, which you will need later on in the game for various items or you can use it in this section to get Rare Candies. It loses both of these abilities when it evolves, so consider carefully when to do that (if at all).
        </p>

        <h5>Accumula Town and Route 2</h5>
        <p>
          Once you arrive in Accumula Town, Professor Juniper will show you the ropes and introduce you to the pokemon center. Once you’re healed up, you’ll see Team Plasma making an announcement in the square. You’ll also get your first interaction with N, who will battle you with his Purrloin. Victorious, head west out of the town and proceed through Route 2. You’ll get the Running Shoes which will help with getting into battles faster. There’s an extra pokemon to be caught here, Purrloin. You’ll also get to battle Bianca here again.
        </p>

        <pre>
          Purrloin → Lv. 20 → Liepard
        </pre>

        <h5>Striaton City and the Dream Yard</h5>
        <p>
          Arriving in the next town already, stop by the pokemon center and heal up of course. The first gym is here! There’s a couple of things you can do here. Visit the Trainer School and you’ll be able to battle Cheren. You can enter the gym itself and battle the two regular trainers. I would strongly recommend leaving as many trainer battles as possible until your starter is at level 35. If you go west out of Striaton City you’ll be blocked off pretty quickly so that way is a no-go. East out of Striaton is the Dream Yard. The place is currently blocked off here too, so we won’t be able to get into the grassy area yet. There is a young lady here who will give you a pokemon based on your starter.
        </p>

        <pre>
          (Chose Snivy) Panpour
          OR
          (Chose Tepig) Pansage
          OR
          (Chose Oshawott) Pansear
        </pre>

        <p>
          And with that we’ve hit the wall already! We need to fully evolve everything before we tackle the gym leader.
        </p>

        <h5>Levelling up tips</h5>
        <p>
          Wow, so we’ve only got FOUR pokemon to evolve. Easy! Well, maybe not…As mentioned already, the exp gain is horrible to you in this game. Training a pokemon up to Level 36 is a mammoth task. If your rules allow it, train a Pickup squad (5 Lillipup with Pickup) but the downside to this is that they need to be at least Lv21 to get Rare Candies, which means you’ll have to put in a lot of effort just to assemble the squad in the first place. There are also very limited areas you can train. Literally, Route 2 is your best spot. If you decide to be crazy and grind it out like me without Rare Candies, this will take AGES. Like, 50+hours and several thousand wild battles. For four pokemon. I kept my pokemon unevolved as long as possible so they’d get more attacking moves ASAP to be able to defeat more pokemon without healing. Whilst you’re grinding, consider putting a KO’d Vital Spirit Lillipup in the lead slot so that you’re more likely to get those level 7 Patrat and Lillipup. As painful as this is, Black 2/White 2 are far worse. Try to delay battling Cheren and the gym trainers until your starter has only one level to go. The craziness is that a Lv10 Lillipup owned by the gym trainers gives TRIPLE exp compared to battling a wild Lv7 Lillipup so definitely take advantage of this when it’s most needed.
        </p>

        <p>
          <strong>End of part 1:</strong><br/>
          Caught 11, Remaining 145
        </p>
        `,
      rows: [
        {
          pokemon: { img: imgBasehref + "495.png", name: "Snivy" },
          method: "Choose as your starter.",
          requires: { "starter": "snivy" }
        },
        {
          pokemon: { img: imgBasehref + "496.png", name: "Servine" },
          method: "Evolve from Snivy at level 17",
          requires: { "starter": "snivy" }
        },
        {
          pokemon: { img: imgBasehref + "497.png", name: "Serperior" },
          method: "Evolve from Servine at level 36",
          requires: { "starter": "snivy" }
        },
        {
          pokemon: { img: imgBasehref + "498.png", name: "Tepig" },
          method: "Choose as your starter.",
          requires: { "starter": "tepig" }
        },
        {
          pokemon: { img: imgBasehref + "499.png", name: "Pignite" },
          method: "Evolve from Tepig at level 17",
          requires: { "starter": "tepig" }
        },
        {
          pokemon: { img: imgBasehref + "500.png", name: "Emboar" },
          method: "Evolve from Pignite at level 36",
          requires: { "starter": "tepig" }
        },
        {
          pokemon: { img: imgBasehref + "501.png", name: "Oshawott" },
          method: "Choose as your starter.",
          requires: { "starter": "oshawott" }
        },
        {
          pokemon: { img: imgBasehref + "502.png", name: "Dewott" },
          method: "Evolve from Oshawott at level 17",
          requires: { "starter": "oshawott" }
        },
        {
          pokemon: { img: imgBasehref + "503.png", name: "Samurott" },
          method: "Evolve from Dewott at level 36",
          requires: { "starter": "oshawott" }
        },
        {
          pokemon: { img: imgBasehref + "506.png", name: "Lillipup" },
          method: "Catch in Route 1"
        },
        {
          pokemon: { img: imgBasehref + "507.png", name: "Herdier" },
          method: "Evolve from Lillipup at level 16"
        },
        {
          pokemon: { img: imgBasehref + "508.png", name: "Stoutland" },
          method: "Evolve from Herdier at level 32"
        },
        {
          pokemon: { img: imgBasehref + "504.png", name: "Patrat" },
          method: "Catch in Route 1"
        },
        {
          pokemon: { img: imgBasehref + "505.png", name: "Watchog" },
          method: "Evolve from Patrat at level 20"
        },
        {
          pokemon: { img: imgBasehref + "509.png", name: "Purrloin" },
          method: "Catch in Accumula Town and Route 2"
        },
        {
          pokemon: { img: imgBasehref + "510.png", name: "Liepard" },
          method: "Evolve from Purrloin at level 20"
        },
        {
          pokemon: { img: imgBasehref + "515.png", name: "Panpour" },
          method: "Dream Yard",
          requires: { "starter": "snivy" }
        },
        {
          pokemon: { img: imgBasehref + "511.png", name: "Pansage" },
          method: "Dream Yard",
          requires: { "starter": "tepig" }
        },
        {
          pokemon: { img: imgBasehref + "513.png", name: "Pansear" },
          method: "Dream Yard",
          requires: { "starter": "oshawott" }
        }
      ]
    },
    "Pre Badge 2": {
      headerTitle: "Pre Badge #2 (Nacrene Gym)",

      headerImg: badgeBasehref + ".png",
      headerImgAlt: "",

      summaryShort:
        "Take on the gym leader to find out that type advantages have no effect on pokemon that are 20 levels higher! With the first badge in hand, Fennel will stop you once you leave the gym. Follow her to the lab to get the HM for Cut and a mission to go to the Dream Yard.",
      summaryHtml: `<h5>Munna and the Dreamyard</h5>
        <p>
          Finally you can visit a new section of the Dreamyard. Cut through the small tree and head in to the central part of the Dreamyard to take on a couple of Team Plasma grunts. Once you’re free to explore, check in the grass to find a Munna.
        </p>

        <pre>
          Munna
        </pre>

        <h5>Route 3</h5>
        <p>
          Leave west out of Striaton City to embark on a brand new route. This is the home of the day-care centre if you want to do any breeding. Advance further up the path to bump in to Cheren and Bianca who will ask you to help stop a couple more Plasma grunts. The patch of grass here has several new pokemon:
        </p>

        <pre>
          Pidove → Lv. 21 → Tranquill → Lv. 32 → Unfezant
          Blitzle → Lv. 27 → Zebstrika
        </pre>

        <p>
          And if you run around on the path, the grass will shake. If you can reach that spot you’ll encounter an Audino:
        </p>

        <pre>
          Audino
        </pre>

        <p>
          Audino is a god for exp and you’ll see a MASSIVE difference in the amount of exp you’ll suddenly be gaining compared to Route 2. Keep going west to reach Cheren outside of Wellspring Cave.
        </p>

        <h5>Wellspring Cave</h5>
        <p>
          Your main goal in here is to defeat Team Plasma. Other than that, there’s not a lot of space to explore here at the moment. Two new pokemon can be found as a standard encounter here:
        </p>

        <pre>
          Roggenrola → Lv. 25 → Boldore
          Woobat → Happiness → Swoobat
        </pre>

        <p>
          Roggenrola is our first trade evolution pokemon so we unfortunately can’t progress further than Boldore in its evolutionary line. Woobat is also our first happiness evolution pokemon. There’s no time of day connected to its evolution, it can evolve at any time. There’s no Soothe Bell available at this point in the game so we need to raise its happiness the old fashioned way. Keep it in your party at all times. Give it a few quick levels from Audino and then once you’ve finished running around flushing out Audino to evolve all your other pokemon, Woobat should evolve straight away once it levels up. If you run around in the cave you might trigger a dust cloud which can lead to a wild battle with Drilbur. This is best done with a Repel as it can require a lot of running and you’ll obviously get into a random encounter.
        </p>

        <pre>
          Drilbur → Lv. 31 → Excadrill
        </pre>

        <h5>Nacrene City and Pinwheel Forest</h5>
        <p>
          South down Route 3 you’ll reach Nacrene City. There’s not a lot to do here as we’re skipping the gym until we’re ready. One thing to note here is that there’s a trade we can do to get a Petilil/Cottonee depending on your version but we can’t do this yet. Head out the west side of town to reach the outer area of Pinwheel Forest. You can enter the forest if you like but you’ll soon be stopped by Team Plasma blocking the path. In the outside area, defeat the nurse so that you can get healed out in the field by talking to her which is very useful.
        </p>

        <p>
          Head south into the grass and you’ll eventually make a circle. You can battle a bunch of trainers but most importantly, catch more pokemon! In this area you’ll find:
        </p>

        <pre>
          Tympole → Lv. 25 → Palpitoad → Lv. 36 → Seismitoad
          Timburr → Lv. 25 → Gurdurr
          (W) Throh
          (B) Sawk
        </pre>

        <p>
          Throh and Sawk can be particularly difficult to catch and can hit hard. The rustling grass here will also yield Audino for training but 5% of the time you will be able to encounter the other fighting type pokemon:
        </p>

        <pre>
          (B) Throh
          (W) Sawk
        </pre>

        <h5>A couple of stones to seal the deal</h5>
        <p>
          You’ve caught everything but there’s still a couple of pokemon to evolve other than grinding the new ones above. You’ll need a stone for your elemental monkey as well as a Moon Stone for Munna.
        </p>

        <p>
          For the Fire/Water/Leaf Stone, they can only be obtained at this point in the game from dust clouds in Wellspring Cave. There’s only a 10% chance of finding a stone in the dust cloud and it could be any of the evolutions stones as well as Oval Stones, Everstones and Hard Stones so the chances of finding one that you want is less than 1%. You definitely want to use Repels here, but as you won’t be swimming in money, it’s best to save, use up to 10 repels and if you don’t find what you’re looking for, soft reset and try again. You could also use the items from your Pickup squad to sell for more money for repels.
        </p>

        <p>
          The Moon Stone for Munna can also be found here, but personally I think it’s better to go back to the Dreamyard and try get a 5% encounter in the shaking grass for a wild Musharna. You could also get one via Pickup if you can get Lillipup up to Level 41+
        </p>

        <pre>
          Munna → Moon Stone → Musharna
          Pansage/Pansear/Panpour → Leaf/Fire/Water Stone → Simisage/Simisear/Simipour
        </pre>

        <p>
          And with that, you’ve finished catching for this section!
        </p>

        <h5>Levelling up tips</h5>
        <p>
          One word – Audino. Just run around outside Pinwheel Forest and encounter Audino that range between levels 12-15. There really isn’t much to say other than that, try and preserve trainers for when you are nearly finished with Palpitoad or Tranquill to benefit the most.
        </p>

        <p>
          <strong>End of part 2:</strong><br/>
          Caught 33, Remaining 123
        </p>
        ${guideSource}
        `,
      rows: []
    },
    "Pre Badge 2": {
      headerTitle: "Pre Badge #3 (Castelia Gym)",

      headerImg: badgeBasehref + ".png",
      headerImgAlt: "",

      summaryShort: "Show no mercy to Lenora and her Normal types and you’ll find that Team Plasma has stolen a skull from the museum.",
      summaryHtml: `<h5>Pinwheel Forest Interior</h5>
        <p>
          Chase Team Plasma into Pinwheel Forest where you’ll have to go off the path which does mean you can catch some more pokemon. In standard wild battles you’ll be able to find Venipede and Sewaddle and either Petilil/Cottonee depending on your version. In the rustling grass you’ll also have a good chance at finding all three elemental monkeys (Pansage/Pansear/Panpour) so catch the other two that you don’t have already (we’ll cover the stones later). You might also find a Lilligant/Whimsicott which may be easier than getting a Sun Stone from a Lv31+ Pickup pokemon or from dust clouds in Wellspring Cave.
        </p>

        <pre>
          Sewaddle → Lv. 20 → Swadloon → Happiness → Leavanny
          Venipede → Lv. 22 → Whirlipede → Lv. 30 → Scolipede
          Panpour / Pansage / Pansear
          (W) Petilil → Sun Stone → Lilligant
          (B) Cottonee → Sun Stone → Whimsicott
        </pre>

        <p>
          Keep Sewaddle in your party to allow its happiness to go up while you run around which you’ll be doing a lot of in this section. Catch a second Petilil/Cottonee and go back to Nacrene City to trade for the other ‘version exclusive’.
        </p>

        <pre>
          (B) Petilil → Sun Stone → Lilligant
          (W) Cottonee → Sun Stone → Whimsicott
        </pre>

        <h5>Castelia City</h5>
        <p>
          Once you’ve beaten Team Plasma and retrieved the skull, you’re free to leave the forest through the northern exit. You’ll arrive at Skyarrow Bridge which will take you into the enormous Castelia City. Feel free to explore as you desire to get various items but the main places of interest are the Pokemon Centre and the Battle Company (for great exp). On the first street to the north as you enter town is a building (on the left side) where you can get massages for your pokemon. Definitely use this for Sewaddle/Swadloon. On the furthest street is the pokemon gym which obviously we’re not ready for yet.
        </p>

        <h5>Route 4</h5>
        <p>
          Go all the way to the north of Castelia and you can exit to Route 4 where a fierce sandstorm blows. We can’t venture too far into the route but we can at least access an area for wild pokemon. In the sand you can find Sandile, Scraggy and Darumaka. There’s no sand shaking spots on this route so that’s everything you can catch.
        </p>

        <pre>
          Sandile → Lv. 29 → Krokorok → Lv. 40 → Krookodile
          Scraggy → Lv. 39 → Scrafty
          Darumaka → Lv. 35 → Darmanitan
        </pre>

        <h5>More Stones again</h5>
        <p>
          We have found ourselves needing more evolution stones again for the third section in a row! We need two Sun Stones (or one if you caught a wild Lilligant/Whimsicott) from either the dust clouds in Wellspring Cave or a Lv31+ Pickup pokemon. We’ll also need two stones for either Pansage (Leaf Stone), Pansear (Fire Stone) or Panpour (Water Stone). For these you’ll have to get them from dust clouds but there is also a nice man on the first pier as you enter Castelia City who will give you a free stone if you tell him which of the monkeys you want to evolve. I would suggest looking for one of the two stones from dust clouds (save, use Repels and soft reset if you didn’t get one) and then get the man to give you the other.
        </p>

        <pre>
          Pansage / Pansear / Panpour → Leaf / Fire / Water Stone → Simisage / Simisear / Simipour
        </pre>

        <h5>Levelling up tips</h5>
        <p>
          And here we are again at the end of the section. Despite being able to reach Route 4, the last place you can find Audino in this section is inside Pinwheel Forest and even then, it’s only a 65% chance compared to the exterior section of the forest which is 95% encounter rate in shaking grass. So it’s up to you whether you want consistency or higher levels. I chose to bite the bullet and train inside the forest with a fainted Vital Spirit Lillipup to try and get more of the Lv17 Audino to appear. The evolution levels are creeping up in this section going as high as Lv40 for Krookodile so patience is a virtue. As mentioned, keep Sewaddle/Swadloon in your party at all times. With the amount of ground covered running across Skyarrow Bridge, through Castelia City and trying to find Audino, the number of steps you take will be phenomenal.
        </p>

        <p>
          <strong>End of part 3:</strong><br/>
          Caught 54, Remaining 102
        </p>
        ${guideSource}
        `,
      rows: []
    },
    "Pre Badge 4": {
      headerTitle: "Pre Badge 4",

      headerImg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "Before challenging Elesa at the Nimbasa Gym, explore the Desert Resort, Relic Castle, and new routes branching from Nimbasa City.",

      summaryHtml: `
        <h5>Part 4 - Pre Badge #4 (Nimbasa Gym)</h5>

        <p>
          Defeating Burgh lets us advance further along Route 4 and you’ll be battling both rivals on the way. You’ll reach a fork on Route 4, one road goes north to the next city, Nimbasa City. The one going west leads to the Desert Resort.
        </p>

        <h5>Desert Resort</h5>
        <p>
          This place is built up of three areas, the entrance part where the weather is calm, the desert itself which has a sandstorm permanently blowing and the ruins of the resort known as Relic Castle. Between the two desert areas, the same pokemon appear with one extra in the sandstorm area so you may as well search there. There’s a doctor close to the gate house who, once defeated, will heal you whenever you like making this a good training ground as you search. There’s also a Fire Stone in the desert should you wish to pick it up.
        </p>

        <pre>
          Dwebble → Lv. 34 → Crustle
          Sigilyph
          Maractus
        </pre>

        <p>
          In Relic Castle, there’s not much you can explore at this moment in time but enough to find a wild Yamask and pick up a fossil from a backpacker. It’s your choice who to pick, Archen (plume fossil) is the one you may want to consider NOT picking as it has a fairly annoying ability that activates once below 50% HP but is otherwise quite tough. But again, it’s down to personal preference. You can resurrect the fossil in Nacrene City at the entrance desk on the right.
        </p>

        <pre>
          Yamask → Lv. 34 → Cofagrigus
        </pre>

        <pre>
          Tirtouga → Lv. 37 → Carracosta
          OR
          Archen → Lv. 37 → Archeops
        </pre>

        <h5>Nimbasa City</h5>
        <p>
          Once you’re finished getting the sand out of your shoes you can reach Nimbasa City, another place with lots to do. Encounter Team Plasma as you enter and you’ll get access to the bike which will make flushing out Audino much quicker. Around town you can grab a few items including HM04 Strength, the Soothe Bell to help out with happiness evolutions and a Sun Stone. You can also visit Small Court and Big Stadium on the north side of town where (depending on the time of day) you can battle trainers who refresh daily but overall I think it’s not worth it, stick to Audino. You can check out the Battle Subway but there’s not much to do here or at Anville Town (via the subway). Visit the hall where musicals take place to get the prop case and when you’re done, visit the amusement park to encounter N. There’s two exits from Nimbasa, the eastern exit goes to Route 16 while the western one goes to Route 5.
        </p>

        <h5>Route 16</h5>
        <p>
          Let’s go in the wrong direction first. You can only go so far until you’re blocked off at a gate. We won’t be passing through this gate for a looong time. You can explore the grass to find either a Solosis or Gothita depending on your version. Fun fact, these are our first genuine version exclusives! You’ll also find Trubbish and Mincinno in the grass. As well as Audino, rustling grass here can also reveal an Emolga and a Cincinno if you don’t want to deal with dust clouds again. You’ll be grinding a lot either here or on Route 5 (which has the same pokemon) so you’re likely to find one while farming for Audino. Catch a second Mincinno for a trade.
        </p>

        <pre>
          (B) Gothita → Lv. 32 → Gothorita → Lv. 41 → Gothitelle
          (W) Solosis → Lv. 32 → Duosion → Lv. 41 → Reuniclus
          Trubbish → Lv. 36 → Garbodor
          Mincinno → Shiny Stone → Cincinno
          Emolga
        </pre>

        <p>
          You can also visit Lostlorn Forest but without some event pokemon, this place isn’t worth the visit at the moment.
        </p>

        <h5>Route 5</h5>
        <p>
          Not much to be seen here other than a few trainers. The pokemon are exactly the same although you can access the dark grass for slightly higher levels or double battles. You’ll reach the drawbridge to Driftveil City but it’s closed until you defeat Elesa so it’s grinding time once again.
        </p>

        <h5>Levelling up tips</h5>
        <p>
          As usual, defeat all trainers available including those in the gym. Sticking to Audino is, again, the best option. Route 5 or Route 16 is obviously the best place for this as Audino’s level can go up to Level 22. The only frustrating thing about these routes is that there isn’t enough space to cycle back and forth without making the grass rustle quite deep in the area (which increases the chance of getting into a random encounter before you get there). I stuck to Route 5, there’s a small ‘square’ to the right of the van where you can ride round in circles. The only pokemon I struggled with training was Yamask as it didn’t learn any non-ghost attacking moves so I had to rely on Will-O-Wisp (while Audino has Refresh) or Curse.
        </p>

        <p>
          <strong>End of part 4:</strong><br/>
          Caught 70, Remaining 86
        </p>

        ${guideSource}
  `,
      rows: []
    },
    "Pre Badge 5": {
      headerTitle: "Pre Badge 5",

      headerImg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "Advance into Driftveil City, Clear Cold Storage, and prepare for the Driftveil Gym.",

      summaryHtml: `
        <h5>Part 5 - Pre Badge #5 (Driftveil Gym)</h5>

        <p>
          This is actually a pretty short section in comparison to the previous couple.
        </p>

        <p>
          Defeat Elesa and she’ll agree to meet you at Driftveil Drawbridge. Cheren will challenge you on the way and then team up in a double battle to beat the snot out of a couple of pre-schoolers. The drawbridge will be lowered and you can cross over to Driftveil City. On the way, look out for shadows on the bridge. Most will give you items when you move to that spot, but you may also encounter a Ducklett.
        </p>

        <pre>
          Ducklett → Lv. 35 → Swanna
        </pre>

        <h5>Driftveil City</h5>
        <p>
          Before you can challenge the gym, you’ll need to check out the Cold Storage area to find Team Plasma. Have a look around town first though. You’ll be able to grab a Water Stone and trade your spare Mincinno for a Basculin (not obtainable with Surf or a Rod). Have a look around the market if you’re interested and then head down to the Cold Storage on the south end of the city.
        </p>

        <pre>
          Basculin
        </pre>

        <h5>Cold Storage</h5>
        <p>
          Talk to one of the workers here (outside area) to get a Rocky Helmet. This is an amazing item for this portion of the run. If you give it a pokemon to hold who isn’t great at big damage output (Foongus and Vanillite spring to mind) then Audino will severely hurt itself from using Doubleslap. Run around in the grass to find Vanillite and then head into the storage unit at the south eastern part of the area to find Team Plasma and continue your journey.
        </p>

        <pre>
          Vanillite → Lv. 35 → Vanillish → Lv. 47 → Vanilluxe
        </pre>

        <h5>Route 6</h5>
        <p>
          From the north western exit you’ll go straight into a wooded area. Here you’ll be able to catch a Karrablast, Deerling and Foongus (either from the grass or disguised as a pokeball). With no way to trade Karrablast, it will remain unevolved. There’s a rest area in one of the huts should you need it and if you carry on you’ll soon be blocked off by a spider web covering the entrance to the cave. That’s as far as we can go so it’s time to evolve already. Grab the Leaf Stone on your way through the route and speak to the girl in the rest area for a Shiny Stone.
        </p>

        <pre>
          Karrablast
          Foongus → Lv. 39 → Amoonguss
          Deerling → Lv. 34 → Sawsbuck
        </pre>

        <h5>Levelling up tips</h5>
        <p>
          Evolution levels in Unova are generally pretty high but Vanilluxe takes the lead spot for highest evolution so far at a massive Level 47. Any guesses on the best way to level up? That’s right, Audino again. They can be slightly higher levelled on Route 6 so my strategy was to have a fainted Vital Spirit Lillipup in the first slot and then battling level 25 Audino over and over. If you’re playing in Winter, the chances of finding Audino are 75% compared to 70% in any other season. If you think that’s too low, try Cold Storage where it’s a higher 90% but Audino will be at a maximum of Level 23. Don’t forget to battle the trainers in the gym! With this section completed we’ve hit the half way mark on the Unova dex…
        </p>

        <p>
          <strong>End of part 5:</strong><br/>
          Caught 81, Remaining 75
        </p>

        ${guideSource}
      `,
      rows: []
    },
    "Pre Badge 6": {
      headerTitle: "Pre Badge 6",

      headerImg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "Advance through Chargestone Cave, Celestial Tower, and Route 7 before challenging Skyla at the Mistralton Gym.",

      summaryHtml: `
        <h5>Part 6 - Pre Badge #6 (Mistralton Gym)</h5>

        <p>
          Clay will let you pass through to Chargestone Cave, so head on up there and he’ll clear the cobwebs blocking the entrance.
        </p>

        <h5>Chargestone Cave</h5>
        <p>
          You’ll meet Bianca and Professor Juniper in here. The Professor will give you a Lucky Egg which is a great help in gaining EVEN MORE exp from Audino (and levelling up in general). Within the cave you’ll find several new pokemon and encounter Team Plasma again. Explore the cave fully and you’ll be able to grab a Thunder Stone which you need for a pokemon you’ll catch in here.
        </p>

        <pre>
          Joltik → Lv. 36 → Galvantula
          Klink → Lv. 38 → Klang → Lv. 49 → Klinklang
          Tynamo → Lv. 39 → Eelektrik → Thunder Stone → Eelektross
          Ferroseed → Lv. 40 → Ferrothorn
        </pre>

        <h5>Route 7</h5>
        <p>
          Once you leave Chargestone Cave you’ll arrive in Mistralton City. Skyla the gym leader will tell you that she’s off to Celestial Tower. Follow her there through the north eastern side of town onto Route 7. This is the first route of the game where it is required to be a certain season in order to catch a pokemon Cubchoo is only found on this route in Winter (April, August, December). If it’s not Winter then you’ll be unable to complete this section properly so you will need to either wait for the appropriate month or change the DS clock.
        </p>

        <pre>
          Cubchoo → Lv. 37 → Beartic
        </pre>

        <h5>Celestial Tower</h5>
        <p>
          The entrance floor is peaceful but once you access the next floor up, trainers and wild pokemon await. Litwick will initially be the only pokemon you’ll encounter here but as you venture further up, Elgyem will become more common topping at a 50% encounter rate on the top floor. Meet with Skyla on the roof and shell ask you to ring the bell before returning to the gym where you can challenge her. Litwick evolves into Lampent through levelling up but cannot evolve into Chandelure without a Dusk Stone. Unfortunately there aren’t any available (but will be in the next section as a slap in the face) without doing more dust cloud searching. Thankfully this is MUCH easier than Wellspring Cave. Grab some Max Repels from the Pokemart and head back into Chargestone Cave. The areas in here are bigger and provide plenty of room to run around. Obviously the catch is that the low chance of getting a stone (and then for it to be a Dusk Stone) is still there so the usual trick of saving and soft resetting once you’re out of Repels is still a good trick.
        </p>

        <pre>
          Litwick → Lv. 41 → Lampent → Dusk Stone → Chandelure
          Elgyem → Lv. 42 → Beheeyem
        </pre>

        <p>
          We once again reach a gym leader related barrier. You can’t get any further than Route 7 as Twist Mountain is blocked off until you’ve got your next badge.
        </p>

        <h5>Levelling up tips</h5>
        <p>
          This is another fairly short section of the game but with more pokemon than you can fit in your party. Overall this isn’t a massive challenge. Klinklang is now the highest evolving pokemon so far at level 49 (but it gets worse in the next sections…) but it isn’t overly difficult training against Audino as usual. Make good use of the Lucky Egg that Prof Juniper gave you. Ensure that whichever pokemon you are training has it equipped. Litwick enjoys complete immunity to all of Audino’s moves! The only pokemon I struggled with were Cubchoo and Tynamo who were both fairly fragile. Try and battle Audino of the same gender so you don’t get hit with Attract for a better chance of winning or consider backtracking and battling lower level Audino for a while. As always, don’t forget to battle the trainers in the gym!
        </p>

        <p>
          <strong>End of part 6:</strong><br/>
          Caught 98, Remaining 58
        </p>

        ${guideSource}
        `,
      rows: []
    },
    "Pre Badge 7": {
      headerTitle: "Pre Badge 7",

      headerImg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "Backtracking with Surf unlocks new routes, legendaries, and Ice-type areas before challenging Brycen in Icirrus City.",

      summaryHtml: `
        <h5>Part 7 - Pre Badge #7 (Icirrus Gym)</h5>

        <p>
          Venture up to Twist Mountain and you’ll battle Cheren again and then be given HM03 Surf from Alder. Now is a good chance to do some backtracking.
        </p>

        <h5>Route 17/18/P2 Lab</h5>
        <p>
          Head all the way back to Route 1 and you can head west out onto Route 17. You can surf around here to find a wild Frillish and if you surf over to a dark spot in the water that is basically the equivalent of shaking grass (referred to as rippling water), you are likely to encounter an Alomomola.
        </p>

        <pre>
          Frillish → Lv. 40 → Jellicent
          Alomomola
        </pre>

        <p>
          Access Route 18 where you’ll stop by a house where someone will give you an egg (you’ll need a spare slot in your party) which will hatch into a Larvesta! You can also pick up the HM for Waterfall here. You can also work your way around to the P2 lab but there’s not much out there of interest other than a Dubious Disc which doesn’t have any relevance to the challenge.
        </p>

        <pre>
          Larvesta → Lv. 59 → Volcarona
        </pre>

        <h5>Two of the three Muskedeers</h5>
        <p>
          Go back to Route 6 (just before Chargestone Cave) and you can surf along the river at the northern part of the route to access Mistralton Cave. You’ll need Strength and ideally Flash for this cave. Run around to eventually encounter an Axew. If possible, try to catch one with the Mold Breaker ability rather than Rivalry as this can hinder your battles against Audino (reduced attack power against opposite gender). Venture further into the cave and you’ll meet a man who will explain the lore behind Cobalion, Virizion and Terrakion. As you enter the deepest part of the cave you can encounter Cobalion. Save before you encounter it. Try to inflict a status effect on it and get its HP into the red. If you have any Dusk Balls, these work great, otherwise try Ultra Balls. Your encounter with Cobalion will now allow you to encounter the remaining two of the trio. Terrakion isn’t accessible yet, but if you revisit Pinwheel Forest (interior) you can go through the doubles grass on the east side to find another cave where Virizion will be waiting in the open. Again, Dusk Balls work well here.
        </p>

        <pre>
          Axew → Lv. 38 → Fraxure → Lv. 48 → Haxorus
          Cobalion
          Virizion
        </pre>

        <h5>Twist Mountain</h5>
        <p>
          Back from your sightseeing tour, head north up Route 7 to eventually reach Twist Mountain. This is one of the first of several areas that cannot be fully explored without revisiting in different seasons. Assuming it’s still Winter after catching Cubchoo, There are several rooms that you can reach with some decent items inside, the only catch is that a few tunnels have been blocked off by snow, so come back in another season to explore some more. For the purpose of the challenge, nothing affects what pokemon you can catch other than the encounter rate. Cryogonal is the pokemon you’ll be looking out for, with a 5% encounter rate during Winter and a 1% chance any other time. You’ll find Cheren on the eastern side of the mountain by the exit to Icirrus City.
        </p>

        <pre>
          Cryogonal
        </pre>

        <h5>Icirrus City</h5>
        <p>
          This is the home of the ice type gym leader, Brycen. This is also the time that we want Winter to end. Located within the city itself are several pools of water. These can lead to encounters with wild pokemon, but if it’s winter, these are just icy lakes. Come back in any other season to find Shelmet and Stunfisk
        </p>

        <pre>
          Shelmet
          Stunfisk
        </pre>

        <h5>Dragonspiral Tower</h5>
        <p>
          We can’t enter the tower itself just yet but you can explore the grass outside to look for a Mienfoo. You can also find Druddigon but as you know, dragon types don’t like ice so you won’t find it in the Winter.
        </p>

        <pre>
          Mienfoo → Lv. 50 → Mienshao
          Druddigon
        </pre>

        <p>
          Route 8 (north east of Icirrus City) has the same pokemon as the city and again, only in non-winter months. You will be blocked off by Team Plasma to stop you from going any further so it’s training time.
        </p>

        <h5>Levelling up tips</h5>
        <p>
          Thanks to the detours from obtaining Surf, it feels like we’ve covered a lot more ground in this section. Larvesta takes the silver medal for the highest level pokemon to evolve in Unova at a huge level 59. There’s also only four pokemon to evolve in this section. Frillish enjoys being a ghost type and is invincible against Audino and Mienfoo has no problem laying the smack down. Axew should be fairly straight forward as long as you didn’t catch a Rivalry one. The reduced attack power and getting hit by Attract gets old fast. It also doesn’t really learn any useful moves by keeping it unevolved, so let it change into Fraxure ASAP. Larvesta can cause problems. The issue I had with it was mostly its durability. Unless you use TMs, it’s attacks aren’t very powerful unless you use recoil moves (not advised) and it only learns a new move every 10 levels. Things get easier when it learns Bug Bite as it will steal and consume Audino’s berries. Levelling up Larvesta really starts to slow down once you’ve passed Lv50. As always, keep the Lucky Egg attached and remember the trainers in the gym which Larvesta will really enjoy thrashing.
        </p>

        <p>
          <strong>End of part 7:</strong><br/>
          Caught 114, Remaining 42
        </p>

        ${guideSource}
  `,
      rows: []
    },
    "Pre Badge 8": {
      headerTitle: "Pre Badge 8",

      headerImg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "Final progression before Opelucid Gym, including Dragonspiral Tower, Route 9, and Route 10 encounters.",

      summaryHtml: `
        <h5>Part 8 - Pre Badge #8 (Opelucid Gym)</h5>

        <p>
          As with most pokemon games, it’s usually around gym 7 that you need to take on the evil team. Once you’ve beaten Brycen, you’ll be urged to go to Dragonspiral Tower where Team Plasma have broken in. Knock out the grunts on the way up the tower and look out for a wild Golett! Reaching the top you’ll find that N has already awakened the opposite box legendary to yours and will become Champion of Unova.
        </p>

        <pre>
          Golett → Lv. 43 → Golurk
        </pre>

        <p>
          You will then be asked to go to Relic Castle in the desert off of Route 4 where you can knock out more grunts and find out that the stone you are looking for isn’t there. Lenora will shortly give this to you when you revisit her in Nacrene City. You can now resume your challenge!
        </p>

        <h5>Route 9</h5>
        <p>
          From Icirrus City, head through the Moors of Icirrus and onto Tubeline Bridge where Bianca will challenge you. Cross the bridge afterwards to reach a very small route which also houses the largest Pokemart in Unova. In the wild grass here you’ll find a Pawniard.
        </p>

        <pre>
          Pawniard → Lv. 52 → Bisharp
        </pre>

        <h5>Opelucid City and Route 10</h5>
        <p>
          When you reach Opelucid City further events will unfold with Ghetsis and you’ll also be asked to speak to Iris and Drayden about how to resurrect your box legendary. Afterwards you are free to head onto Route 10 out the northern side of the city. This route leads up to Victory Road and will naturally be full of strong trainers. If you dive into the grass here you’ll encounter either a Vullaby or Rufflet as well as a Bouffalant. And with that, you’ve caught everything in this short section!
        </p>

        <pre>
          (B) Vullaby → Lv. 54 → Mandibuzz
          (W) Rufflet → Lv. 54 → Braviary
          Bouffalant
        </pre>

        <h5>Levelling up tips</h5>
        <p>
          Once again we have very high evolution levels for most of our pokemon, particularly Pawniard and Vullaby/Rufflet. Training against Audino is of course the best solution although the trainers in the area as well as in the gym will give good exp. Audino, if a high enough level, will now start to know Heal Pulse, a move which recovers your HP, making training against it much easier (even though Pawniard and Golett laugh off any damaging moves).
        </p>

        <p>
          <strong>End of part 8:</strong><br/>
          Caught 121, Remaining 35
        </p>

        ${guideSource}
  `,
      rows: []
    },
    "Pre Elite Four": {
      headerTitle: "Pre Elite Four",

      headerImg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "Final legendary hunts and Victory Road preparation before taking on the Elite Four.",

      summaryHtml: `
        <h5>Part 9 - Pre Elite Four</h5>

        <p>
          As soon as you leave the gym, Professor Juniper will give you a Master Ball!
        </p>

        <h5>Chasing the legend</h5>
        <p>
          Oh boy, a roaming pokemon! Everyone’s favourite type of legendary…If you enter Route 10 you’ll be stopped and informed that there’s strange weather on Route 7. Head to the rest house just east of Celestial Tower and you’ll unlock your version exclusive roaming legendary. For Black, it’s Tornadus. For White, it’s Thundurus. To get a clue as to their whereabouts, check the notice boards in the gates between cities/routes and it will state where there is a strange storm. Head to that route and you’ll know straight away if it’s there because of extreme weather. If there’s no crazy weather, simply enter and exit the route. Dive into the grass and hope to encounter it. If the weather stops after a random encounter with a standard pokemon, leave and re-enter the route to get the weather back.
        </p>

        <p>
          Usual rules apply here for roaming pokemon…Their HP remains the same between encounters, ditto for status effects. This means that you can get its HP into the red and inflict a status on it (e.g. paralysis/sleep) and simply throw a Quick Ball next time you encounter it for a decent chance. It will always flee on its first turn, but this is a low priority, meaning that you can attack first regardless of speed. You can of course use things like Mean Look to keep it trapped if you want to battle it legitimately. You can also use the Master Ball if you want but I’d strongly recommend keeping it since the above strategy worked fine for me, it only took about five Quick Balls to catch it.
        </p>

        <pre>
          (B) Tornadus
          (W) Thundurus
        </pre>

        <h5>Victory Road</h5>
        <p>
          It’s finally time to end the challenge as far as the main game goes! We can now venture past Route 10 and on to Victory Road. You can encounter pokemon within the cave system as well as the cracked dirt areas outside as you venture up the mountain. Straight off from the first cave area of Victory Road you can catch a Deino and a Durant. Once you can access your first cracked dirt area, search around to find Durant’s nemesis, Heatmor. You’ll encounter a doctor on the ascent so be sure to use him if your pokemon get worn out. Also take the opportunity to push any boulders into holes to make it quicker should you need to leave and come back.
        </p>

        <pre>
          Durant
          Heatmor
          Deino → Lv. 50 → Zweilous → Lv. 64 → Hydreigon
        </pre>

        <p>
          Once you have reached the top of Victory Road, heal up in the pokemon centre and take advantage of the pokemart’s selection of decent pokeballs. Stock up on Dusk Balls and take your legendary catching team back into Victory Road to catch the third Muskedeer, Terrakion. From the highest cave entrance, simply descend until you reach the spot where the Strength boulder is, pass over it and take a left to find the cave entrance where Terrakion dwells. I’m sure I don’t need to tell you how to catch this one, it’s the same as the other two and it’s not a higher level than the others.
        </p>

        <pre>
          Terrakion
        </pre>

        <h5>Levelling up tips</h5>
        <p>
          Only one pokemon to evolve…and it’s the big one. At the time of writing (gen 7), Zweilous still holds the title of highest levelled pokemon to evolve by levelling up at a whopping Lv. 64! And getting Deino into Zweilous doesn’t happen until Lv. 50…Suffice to say, this will take a large number of Audino defeats. As always, keep the Lucky Egg attached at all times. Deino/Zweilous’s ability, Hustle, is also quite the annoyance. With any physical moves used, accuracy is lowered but the attack stat is boosted. This doesn’t help when you could OHKO Audino but you missed and get hit with Attract. Special moves like Dragon Pulse are unaffected, but sadly these pokemon are more interested in physical attacks until fully evolved. The higher level Audino do help somewhat with their knowledge of the move Heal Pulse meaning that as you hit the late 50s, you’re more likely to run out of PP than get KO’d. Route 10 is still the place to find the highest levelled Audino possible (capping at Lv. 36) so try to keep a Vital Spirit pokemon fainted in the lead spot to flush out the stronger ones.
        </p>

        <p>
          <strong>End of part 9:</strong><br/>
          Caught 128, Remaining 28
        </p>

        ${guideSource}
  `,
      rows: []
    },
    "Pre Final Showdown": {
      headerTitle: "Pre Final Showdown",

      headerImg: badgeBasehref + "",
      headerImgAlt: "",

      summaryShort: "The climactic conclusion of the Unova journey, culminating in the capture of the box legendary and the final battles against N and Ghetsis.",

      summaryHtml: `
        <h5>Part 10 - Pre Final Showdown</h5>

        <h5>The Final Showdown</h5>
        <p>
          After defeating the four core members of the Elite Four, you’ll find that Alder has been defeated and N is the new Champion. Team Galactic’s castle will then surround the place and you’ll need to venture to the top to reach N for your final battle. Before you battle him, your stone will react and you’ll now be able to capture your box legendary (very late). For White, it’s Zekrom. For Black, it’s Reshiram. You are forced to capture it, even if you defeat it or have no pokeballs, it will simply respawn and prevent you from advancing the plot so don’t worry too much about failing this capture. Reshiram/Zekrom have easier capture rates than standard legendaries so don’t feel that you have to use the Master Ball unless you really want to. As usual, the Master Ball would be better saved for post-game legendaries.
        </p>

        <pre>
          (B) Reshiram
          (W) Zekrom
        </pre>

        <p>
          And once you’ve caught the legendary pokemon, you’ll have a final battle with N followed by Ghetsis. With an overpowered Hydreigon and some of your other high evolution pokemon, this should hopefully be easier than a standard play through. Congrats, you’ve completed the challenge!
        </p>

        <p>
          <strong>End of part 10 (and the standard challenge):</strong><br/>
          Caught 129, Remaining 27
        </p>

        ${guideSource}
  `,
      rows: []
    },
    postgame: {
      headerTitle: "Post Game",

      headerImg: badgeBasehref + ".png",
      headerImgAlt: "",

      summaryShort:
        "If you’re a hard-core POC player, then of course you’re going to carry on the challenge into the post-game! Straight off the bat once you load your game you’ll be given the Super Rod and the National Pokedex and can jump straight in to catching those National Dex mons!",
      summaryHtml: `<h5>Swarms</h5>
        <p>
          A staple of pokemon post-game sections, there are pokemon from other regions that have decided to randomly appear throughout Unova on specific days. If you visit one of the electronic boards within the gates it will tell you where there is an outbreak. You can soft reset for these, so when you load your game up for the day, go straight to the board and if it’s a repeat of a pokemon you already have, simply soft reset and try again. Some of these are on routes we have yet to visit but here’s the complete list:
        </p>

        <pre>
          Route 1 – Farfetch’d
          Route 2 – Wynaut → Lv. 15 → Wobbuffet
          Route 3 – (B) Volbeat
          Route 3 – (W) Illumise
          Route 4 – Hippopotas → Lv. 34 → Hippowdon
          Route 5 – Smeargle
          Route 6 – (B) Plusle
          Route 6 – (W) Minun
          Route 7 – Sentret → Lv. 15 → Furret
          Route 8 – Croagunk → Lv. 37 → Toxicroak
          Route 9 – (B) Houndour → Lv. 24 → Houndoom
          Route 9 – (W) Poochyena → Lv. 18 → Mightyena
          Route 10 – Tyrogue → Lv. 20 (Atk higher than Def) → Hitmonlee
          Route 10 – Tyrogue → Lv. 20 (Def higher than Atk) → Hitmonchan
          Route 10 – Tyrogue → Lv. 20 (Atk and Def equal) → Hitmontop
          Route 11 – (B) Shroomish → Lv. 23 → Breloom
          Route 11 – (W) Paras → Lv. 24 → Parasect
          Route 12 – Doduo → Lv. 31 → Dodrio
          Route 13 – Shuppet → Lv. 37 → Banette
          Route 14 – Yanma → Level up knowing Ancient Power → Yanmega
          Route 15 – Mankey → Lv. 28 → Primeape
          Route 16 – Pineco → Lv. 31 → Forretress
          Route 18 – Exeggcute → Leaf Stone → Exeggutor
        </pre>

        <p>
          And even though Volbeat and Illumise are version exclusive, you can simply breed with a Ditto (caught later) for a chance of hatching the other.
        </p>

        <pre>
          (B) Illumise
          (W) Volbeat
        </pre>

        <h5>Fossils from Twist Mountain</h5>
        <p>
          If you venture into Twist Mountain post-game, there’s a cave entrance right in the middle of the central area (located outdoors) in which you’ll find a man who will give you fossils. This includes every fossil except the two you had to choose between in Relic Castle. He’ll give you a fossil every day. Again, these can be soft reset to get the full set of the Dome, Helix, Claw, Root, Armor and Skull fossils as well as the Old Amber.
        </p>

        <pre>
          Kabuto → Lv. 40 → Kabutops
          Omanyte → Lv. 40 → Omastar
          Aerodactyl
          Lileep → Lv. 40 → Cradily
          Anorith → Lv. 40 → Armaldo
          Cranidos → Lv. 30 → Rampardos
          Shieldon → Lv. 30 → Bastiodon
        </pre>

        <h5>Super Fishing Tour</h5>
        <p>
          You may have noticed that the fishing rod we were given is the first fishing rod of the game. That’s right, the Old and Good Rods were abolished in these games and your only opportunity to hook those water pokemon begins now. There are some additional routes we can visit, but let’s look at what we can fish by revisiting old routes. With the rippling water we can actually fish some trade evolution pokemon which is great since we can’t trade. The down side is that, like shaking grass, it’s usually only a 5% chance to encounter them. Watch out particularly for Politoed which knows Perish Song! You can also catch the evolved versions of pokemon whilst fishing so it’s up to you if you want to catch the evolved version or level up the unevolved ones (which are generally high levelled anyway). This may be an attractive option for stone evolution pokemon too in case you don’t have enough to save you from running around for dust clouds.
        </p>

        <pre>
          Feebas (Route 1)
          Milotic (Route 1 Rippling Water)
          Finneon → Lv. 31 → Lumineon (Route 17)
          Horsea → Lv. 32 → Seadra (Route 17)
          Kingdra (Route 17 Rippling Water)
          Qwilfish (Route 17 Rippling Water)
          Goldeen → Lv. 33 → Seaking (Route 3)
          Krabby → Lv. 28 → Kingler (Route 4)
          Luvdisc (Route 4)
          Clamperl (Route 4)
          (B) Huntail (Route 4 Rippling Water)
          (W) Gorebyss (Route 4 Rippling Water)
          Relicanth (Route 4 Rippling Water)
          Chinchou → Lv. 27 → Lanturn (Driftveil City)
          Poliwag → Lv. 25 → Poliwhirl → Water Stone → Poliwrath (Route 6)
          Politoed (Route 6 Rippling Water)
          Barboach → Lv. 30 → Whiscash (Icirrus City)
          Dratini → Lv. 30 → Dragonair → Lv. 55 → Dragonite (Dragonspiral Tower Exterior)
        </pre>

        <h5>Dreamyard Revisited</h5>
        <p>
          If you head back to the Dreamyard east of Striaton City, the orange traffic cone has been removed (why you couldn’t move it I don’t know…) so you can enter the basement. In here are a bunch of psychic type trainers. If you make it out the other end of the basement you’ll find some doubles grass and if you go down the other entrance to the basement (next to the Strength boulder) you can find some grass indoors as well which doesn’t provide anything that you can’t catch outside other than a hidden ability Musharna on a Friday. In the doubles grass outside you’ll find Raticate and a bunch of evolved bug types.
        </p>

        <pre>
          Raticate
          Ledian
          Ariados
          Kricketune
          Venomoth
        </pre>

        <h5>Challenger’s Cave</h5>
        <p>
          On Route 9 there was a cave entrance that was previously blocked off. As you are now the champion, you are welcome to enter. On the entrance floor you’ll be able to find Lickitung, Graveler, Mawile and Sableye. Head deeper into the cave and you’ll find exactly the same along with Riolu, so start your search from the next floor to get the full range. As Riolu evolves with happiness, try to capture it with a Luxury Ball. You will have to use a Heart Scale for Lickitung to remember Rollout for its evolution.
        </p>

        <pre>
          Graveler
          Lickitung → Level up knowing Rollout → Lickilicky
          Mawile
          Sableye
          Riolu → Happiness during the day → Lucario
        </pre>

        <h5>Relic Castle Maze</h5>
        <p>
          Revisit the Relic Castle at the Desert Resort and drop through the sandpits to reach the lowest floor. There’s a big pile of sand that leads up to a doorway. Enter through this and you can reach the maze of the castle. Within the maze you can encounter Sandslash and Onix. If you reach the end of the maze, a Volcarona is available to interact with if you want to catch it despite already having one. Within this room, the only wild encounter is with Claydol.
        </p>

        <pre>
          Sandslash
          Onix
          Claydol
        </pre>

        <h5>Route 11</h5>
        <p>
          Now it’s time to enter eastern Unova where a bunch of national dex pokemon have decided to show up and be contained in this one side of the region (barring the above pokemon we’ve just caught!). East from Opelucid City you’ll be able to pass the guard and enter Route 11. Enter the grass for four new pokemon – Zangoose, Seviper, Gligar and Golduck. You will get a Razor Fang for Gliscor at Abundant Shrine (coming up) but if you’re really desperate, you can catch a Gliscor as a 5% shaking grass encounter. Surfing on this route will let you find a Buizel and fishing yields nothing new.
        </p>

        <pre>
          Zangoose
          Seviper
          Gligar → Level up at night holding Razor Fang → Gliscor
          Golduck
          Buizel → Lv. 26 → Floatzel
        </pre>

        <h5>Village Bridge</h5>
        <p>
          My favourite location in Unova due to the music that you can adjust by talking to the musicians. The grass in the village will let you catch a Bibarel, otherwise it’s the same kinds of pokemon from Route 11. Head down to the waterfront and fish for a Carvanha (Sharpedo in rippling water) and prepare to run around lots to get water ripples to appear for a 5% chance of encountering Lapras. It’s very rare, very hard to catch and knows Perish Song as well!
        </p>

        <pre>
          Bibarel
          Carvanha → Lv. 30 → Sharpedo
          Lapras
        </pre>

        <h5>Route 12</h5>
        <p>
          So many pokemon to catch here! With the exception of Tranquill, every single pokemon here is new to you. Pokemon Black players get to find Kakuna, with White players getting Metapod.
        </p>

        <pre>
          Rapidash
          (B) Kakuna → Lv. 10 → Beedrill
          (W) Metapod → Lv. 10 → Butterfree
          Heracross
          Pinsir
          Dunsparce
          Combee (female) → Lv. 21 → Vespiquen
          Cherrim
          Sunkern → Sun Stone → Sunflora
        </pre>

        <h5>Route 13</h5>
        <p>
          Head past Lacunosa Town after healing up and continue east onto Route 13. You’ll notice a boulder in the way which you can Surf around to which will provide a shortcut to Giant Chasm (visited at the end of the challenge). Like with Route 12, there’s a lot of pokemon to catch. In fact every standard grass encounter is a new pokemon.
        </p>

        <pre>
          Tangela → Level up knowing Ancient Power → Tangrowth
          Lunatone
          Solrock
          Absol
          Pelipper
          Drifblim
          Golbat → Happiness → Crobat
          Swellow
          Staryu → Water Stone → Starmie
          Corsola
          Shellder → Water Stone → Cloyster
        </pre>

        <h5>Undella Town</h5>
        <p>
          South from Route 13 you’ll hit the beautiful seaside resort of Undella. Surf around for a Mantyke which you can evolve with Remoraid in your party which coincidentally can be fished here too! Alternatively you can catch a Mantine by surfing on the rippling water. Surfing on rippling water will also let you find Wailmer quite frequently. You can also battle Cynthia, the Sinnoh Champion, during Spring/Summer. There’s also an in game trade during the Summer where you can obtain Munchlax by offering a Cincinno that you will already have.
        </p>

        <pre>
          Mantyke → Level up with Remoraid in party → Mantine
          Remoraid → Lv. 25 → Octillery
          Wailmer → Lv. 40 → Wailord
          Munchlax → Happiness → Snorlax
        </pre>

        <h5>Undella Bay</h5>
        <p>
          The sea to the right has mostly the same pokemon but with one extra that is only available during the Winter which is frustrating after requiring the above Munchlax trade in summer. You will find the idea of changing the date on your DS very attractive in this instance! In Winter, surf around for a Spheal.
        </p>

        <pre>
          Spheal → Lv. 32 → Sealeo → Lv. 44 → Walrein
        </pre>

        <h5>Route 14</h5>
        <p>
          Ignore the waterfalls for now, we will be heading up there shortly. For now, run around in the grass to find another bunch of new pokemon. Namely, Jigglypuff, Tropius, Altaria and Shuckle. Nothing new in the water unfortunately.
        </p>

        <pre>
          Jigglypuff → Moon Stone → Wigglytuff
          Tropius
          Shuckle
          Altaria
        </pre>

        <h5>Abundant Shrine</h5>
        <p>
          Now you can climb the waterfalls on Route 14 and as you wind around the top of the falls you’ll eventually reach an opening to Abundant Shrine, the home of Landorus. As this legendary pokemon requires a Tornadus from Black and Thundurus from White, this won’t be possible to obtain in this challenge. There are very few pokemon here that you haven’t caught yet so there’s lots of running in the grass to be done. You’ll find Vulpix, Chimecho, Noctowl, Stantler, Bronzong and a version exclusive – Murkrow for Black, Misdreavus for White. Surfing in the water will help you find a Slowpoke whilst BOTH of its evolved forms can be found in rippling water which is good news for Slowking who is a trade evolution pokemon.
        </p>

        <pre>
          Vulpix → Fire Stone → Ninetales
          Chimecho
          Noctowl
          Stantler
          Bronzong
          (B) Murkrow → Dusk Stone → Honchkrow
          (W) Misdreavus → Dusk Stone → Mismagius
          Slowpoke → Lv. 37 → Slowbro
          Slowking
        </pre>

        <h5>Black City / White Forest</h5>
        <p>
          These two locations depend on which version you are playing. There is also a unique factor with these places where the number of residents depend on how long it’s taken you to reach this place. In Black, this is a great training spot and you can buy evolution items (including stones) if the right people reside here. Take advantage of this ASAP as they can and will disappear over time if left alone. 

		  If you’re playing White, this is a place where wild pokemon live as long as the right person is residing there. If there’s no named residents (you can see their name when you talk to them) then no grass or water will appear in the forest. If you are playing White, it’s best that you skip this section or your dex totals won’t match the guide. If you’re wanting to capture all the pokemon in White Forest, you’ll need two separate DS’s each with a different version. This obviously bends the rules of the challenge, so we will leave this until the end of the challenge as a bonus section. Of course if you’re insistent on catching pokemon just because there’s grass/water areas already there, make you sure you take this into consideration with the dex totals at the end of this section. 
        </p>

        <h5>Route 15 / Marvellous Bridge</h5>
        <p>
          We’ve almost reached the end of our journey. This is the location of the Pokemon Transfer Lab, used to shift pokemon from Gen 4 into Gen 5. But of course we won’t do that with the rules of the challenge. In the grass you’ll find Kangaskhan, Fearow, Pupitar and Marowak.  There is also an in game trade where you can trade a Ditto for a Rotom. Enter the caravan/trailer to find the NPC. Ditto will be caught at Giant Chasm (our next location). Head out onto Marvellous Bridge and in a nice call back to the original pokemon games, you can buy a Magikarp. Make sure you have a spare slot. Unlike every other game, Magikarp is NOT common…In fact this is the only way to obtain one!
        </p>

        <pre>
          Kangaskhan
          Fearow
          Pupitar → Lv. 55 → Tyranitar
          Marowak
          Rotom
          Magikarp → Lv. 20 → Gyarados
        </pre>

        <h5>Giant Chasm</h5>
        <p>
          This is it, the last location. North west of Lacunosa Town on the other side of the Strength boulder. The grass outside the entrance has nothing new, so head inside the cave to find Piloswine, Sneasel, Delibird and Jynx. Surf in the water to find Seel. Once you’ve worked your way around the cave to go through the central exit, you’ll be outside again. In this foggy crater you’ll be able to catch a Clefairy, Metang and Ditto. If you navigate the area correctly you’ll reach a small pond at which point the whole area will freeze over letting you access a cave at the northern side of the chasm. In here you’ll find a super strong legendary, Kyurem. It will be at level 75 so unless you want to use your toughest pokemon and catch it legitimately, this is the encounter you want to save your Master Ball for. Dusk and Timer Balls work here as usual. 
        </p>

        <pre>
          Piloswine → Level up knowing Ancient Power → Mamoswine
          Sneasel → Level up at night holding Razor Claw → Weavile
          Delibird
          Jynx
          Seel → Lv. 34 → Dewgong
          Clefairy → Moon Stone → Clefable
          Metang → Lv. 45 → Metagross
          Ditto
          Kyurem
        </pre>

        <h5>A Lot of Breeding</h5>
        <p>
          With so many fully evolved pokemon in the post-game, their unevolved forms have been missed so we will need to breed many pokemon to get their pre-evolutions. This is made much easier with a Ditto from Giant Chasm otherwise you’ll need to worry about catching a female pokemon for breeding. 
        </p>

        <pre>
          Rattata
          Ledyba
          Spinarak
          Kricketot
          Venonat
          Psyduck
          Geodude
          Sandshrew
          Baltoy
          Bidoof
          (B) Weedle
          (W) Caterpie
          Ponyta
          Cherubi
          Wingull
          Drifloon
          Igglybuff
          Zubat
          Taillow
          Swablu
          Chingling
          Hoothoot
          Bronzor
          Spearow
          Larvitar
          Cubone
          Swinub
          Smoochum
          Cleffa
          Beldum
        </pre>

        <h5>Levelling up tips</h5>
        <p>
          You can go anywhere and challenge anyone at this point so it’s entirely up to you. If you’ve got people in Black City, these are strong trainers who give great money and exp. If you’re sticking to traditional Audino training, I found Route 13 just above Undella Town was a great place since there weren’t as many non-Audino pokemon in the shaking grass. The Audino reach up to Level 50 so there’s some great exp to earned here. Level 50 Audino know Double Edge as their only attacking moves and also still have Heal Pulse so it’s only a 25% chance of being attacked. Anything lower than Level 50 will have Take Down instead of Double Edge. 
        </p>

        <p>
          <strong>End of the challenge:</strong><br/>
          Unova Pokedex - Caught 130, Remaining 26<br/>
          National Pokedex - Caught 332, Remaining 317
        </p>
		
		<p>
		Slightly disappointing that we can only catch just over 50% of the national dex but with White Forest we can boost it slightly further now that the challenge is over and, of course, assuming you’re playing White version. I won’t list who’s missing as that would be a big list!
		</p>

        ${guideSource}
`,
      rows: []
    }
  }
};
