/* ----------------------
- Guide:
----------------------- */
const guideLink = "";

const guideSource = `
      <p class="tips-source">
        <a href="${guideLink}" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>`;

const imgBasehref = "assets/images/Black/pokedex/Spr_";
const badgeBasehref = "assets/images/Black/badges/Spr_";

window.gameData = {
  gameId: "black",
  gameTitle: "Pokemon Black",
  logo: "assets/images/logos/black.png",

  aboutHtml: `
   <section class="game-intro-content">
      ${guideSource}
    </section>
  `,

  progression: {
    "pre-badge-1-striaton-gym": {
      headerTitle: "Pre Badge #1 (Striaton Gym)",
      summaryShort:
        "This first part will cover everything you can do from the get-go right up to the Striaton City Gym BEFORE you get that first badge from Cilan/Chili/Cress. This WILL take a while so it will really test your patience…",
      summaryHtml: `
        <h5>Nuvema Town</h5>

        <p>
          Very early on as you start the game, your neighbours, Bianca and Cheren, will visit you and you’ll all get to pick a starter pokemon. You’ll be lucky enough to pick first. Honestly, there’s no real advantage to any of the starters as they all evolve at level 36. There’s also no real type advantage against the wild pokemon as you’ll only be battling three different types of wild pokemon for the entire section - Patrat, Lillipup and Purrloin. Go visit Professor Juniper and you’ll each get a pokedex meaning that we can now register our starter.
        </p>

        <pre>
        Snivy →Lv. 17→Servine→Lv. 36→Serperior
        OR
        Tepig→Lv. 17→Pignite→Lv. 36→Emboar
        OR
        Oshawott→Lv. 17→Dewott→Lv. 36→Samurott
        </pre>

        <h5>Route 1</h5>

        <p>
          Leave your home town via the northern exit and you’ll get the usual capture tutorial. Bianca then challenges you and Cheren to a catching contest. There’s only two pokemon to catch here and if you catch them both, you win. Unfortunately there’s no prize!
        </p>

        <pre>
        Lillipup→Lv. 16→Herdier→Lv. 32→Stoutland
        Patrat→Lv. 20→Watchog
        </pre>

        <p>
          Lillipup has two abilities which can come in handy. Vital Spirit means that, if it’s in the lead spot (even if KO’d), higher level pokemon are more likely to appear. The other ability is Pickup, which you will need later on in the game for various items or you can use it in this section to get Rare Candies. It loses both of these abilities when it evolves, so consider carefully when to do that (if at all).
        </p>

        <h5>Accumula Town and Route 2</h5>

        <p>
          Once you arrive in Accumula Town, Professor Juniper will show you the ropes and introduce you to the pokemon center. Once you’re healed up, you’ll see Team Plasma making an announcement in the square. You’ll also get your first interaction with N, who will battle you with his Purrloin. Victorious, head west out of the town and proceed through Route 2. You’ll get the Running Shoes which will help with getting into battles faster. There’s an extra pokemon to be caught here, Purrloin. You’ll also get to battle Bianca here again.
        </p>

        <pre>
        Purrloin→Lv. 20→Liepard
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

        ${guideSource}
`,
      rows: [
        /* Nuvema Town */
        {
          pokemon: {
            img: imgBasehref + "495.png",
            name: "Snivy",
          },
          method: "Nuvema Town",
          _source: "* Snivy →Lv. 17→Servine→Lv. 36→Serperior",
        },
        {
          pokemon: {
            img: imgBasehref + "496.png",
            name: "Servine",
          },
          method: "Evolve Snivy at level 17",
          _source: "* Snivy →Lv. 17→Servine→Lv. 36→Serperior",
        },
        {
          pokemon: {
            img: imgBasehref + "497.png",
            name: "Serperior",
          },
          method: "Evolve Servine at level 36",
          _source: "* Snivy →Lv. 17→Servine→Lv. 36→Serperior",
        },
        {
          pokemon: {
            img: imgBasehref + "498.png",
            name: "Tepig",
          },
          method: "Nuvema Town",
          _source: "* Tepig→Lv. 17→Pignite→Lv. 36→Emboar",
        },
        {
          pokemon: {
            img: imgBasehref + "499.png",
            name: "Pignite",
          },
          method: "Evolve Tepig at level 17",
          _source: "* Tepig→Lv. 17→Pignite→Lv. 36→Emboar",
        },
        {
          pokemon: {
            img: imgBasehref + "500.png",
            name: "Emboar",
          },
          method: "Evolve Pignite at level 36",
          _source: "* Tepig→Lv. 17→Pignite→Lv. 36→Emboar",
        },
        {
          pokemon: {
            img: imgBasehref + "501.png",
            name: "Oshawott",
          },
          method: "Nuvema Town",
          _source: "* Oshawott→Lv. 17→Dewott→Lv. 36→Samurott",
        },
        {
          pokemon: {
            img: imgBasehref + "502.png",
            name: "Dewott",
          },
          method: "Evolve Oshawott at level 17",
          _source: "* Oshawott→Lv. 17→Dewott→Lv. 36→Samurott",
        },
        {
          pokemon: {
            img: imgBasehref + "503.png",
            name: "Samurott",
          },
          method: "Evolve Dewott at level 36",
          _source: "* Oshawott→Lv. 17→Dewott→Lv. 36→Samurott",
        },
        /* Route 1 */
        {
          pokemon: {
            img: imgBasehref + "506.png",
            name: "Lillipup",
          },
          method: "Route 1",
          _source: "* Lillipup→Lv. 16→Herdier→Lv. 32→Stoutland",
        },
        {
          pokemon: {
            img: imgBasehref + "507.png",
            name: "Herdier",
          },
          method: "Evolve Lillipup at level 16",
          _source: "* Lillipup→Lv. 16→Herdier→Lv. 32→Stoutland",
        },
        {
          pokemon: {
            img: imgBasehref + "508.png",
            name: "Stoutland",
          },
          method: "Evolve Herdier at level 32",
          _source: "* Lillipup→Lv. 16→Herdier→Lv. 32→Stoutland",
        },
        {
          pokemon: {
            img: imgBasehref + "504.png",
            name: "Patrat",
          },
          method: "Route 1",
          _source: "* Patrat→Lv. 20→Watchog",
        },
        {
          pokemon: {
            img: imgBasehref + "505.png",
            name: "Watchog",
          },
          method: "Evolve Patrat at level 20",
          _source: "* Patrat→Lv. 20→Watchog",
        },
        /* Accumula Town and Route 2 */
        {
          pokemon: {
            img: imgBasehref + "509.png",
            name: "Purrloin",
          },
          method: "Accumula Town and Route 2",
          _source: "* Purrloin→Lv. 20→Liepard",
        },
        {
          pokemon: {
            img: imgBasehref + "510.png",
            name: "Liepard",
          },
          method: "Evolve Purrloin at level 20",
          _source: "* Purrloin→Lv. 20→Liepard",
        },
        /* Striaton City and the Dream Yard */
        {
          pokemon: {
            img: imgBasehref + "515.png",
            name: "Panpour",
          },
          method: "Striaton City and the Dream Yard",
          _source: "* (Chose Snivy) Panpour",
        },
        {
          pokemon: {
            img: imgBasehref + "511.png",
            name: "Pansage",
          },
          method: "Striaton City and the Dream Yard",
          _source: "* (Chose Tepig) Pansage",
        },
        {
          pokemon: {
            img: imgBasehref + "513.png",
            name: "Pansear",
          },
          method: "Striaton City and the Dream Yard",
          _source: "* (Chose Oshawott) Pansear",
        },
      ],
    },
    "pre-badge-2-nacrene-gym": {
      headerTitle: "Pre Badge #2 (Nacrene Gym)",
      summaryShort:
        "Choices (evolve your one monkey): / / Take on the gym leader to find out that type advantages have no effect on pokemon that are 20 levels higher! With the first badge in hand, Fennel will stop you once you leave the gym. Follow her to the lab to get",
      summaryHtml: `
<p>
  Choices (evolve your one monkey): /  / Take on the gym leader to find out that type advantages have no effect on pokemon that are 20 levels higher! With the first badge in hand, Fennel will stop you once you leave the gym. Follow her to the lab to get the HM for Cut and a mission to go to the Dream Yard.
</p>

<h5>Munna and the Dreamyard</h5>

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
Pidove→Lv. 21→Tranquill→Lv. 32→Unfezant
Blitzle→Lv. 27→Zebstrika
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
Roggenrola→Lv. 25→Boldore
Woobat→Happiness→Swoobat
</pre>

<p>
  Roggenrola is our first trade evolution pokemon so we unfortunately can’t progress further than Boldore in its evolutionary line. Woobat is also our first happiness evolution pokemon. There’s no time of day connected to its evolution, it can evolve at any time. There’s no Soothe Bell available at this point in the game so we need to raise its happiness the old fashioned way. Keep it in your party at all times. Give it a few quick levels from Audino and then once you’ve finished running around flushing out Audino to evolve all your other pokemon, Woobat should evolve straight away once it levels up. If you run around in the cave you might trigger a dust cloud which can lead to a wild battle with Drilbur. This is best done with a Repel as it can require a lot of running and you’ll obviously get into a random encounter.
</p>

<pre>
Drilbur→Lv. 31→Excadrill
</pre>

<h5>Nacrene City and Pinwheel Forest</h5>

<p>
  South down Route 3 you’ll reach Nacrene City. There’s not a lot to do here as we’re skipping the gym until we’re ready. One thing to note here is that there’s a trade we can do to get a Petilil/Cottonee depending on your version but we can’t do this yet. Head out the west side of town to reach the outer area of Pinwheel Forest. You can enter the forest if you like but you’ll soon be stopped by Team Plasma blocking the path. In the outside area, defeat the nurse so that you can get healed out in the field by talking to her which is very useful. Head south into the grass and you’ll eventually make a circle. You can battle a bunch of trainers but most importantly, catch more pokemon! In this area you’ll find:
</p>

<pre>
Tympole→Lv. 25→Palpitoad→Lv. 36→Seismitoad
Timburr→Lv. 25→Gurdurr
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
  You’ve caught everything but there’s still a couple of pokemon to evolve other than grinding the new ones above. You’ll need a stone for your elemental monkey as well as a Moon Stone for Munna. For the Fire/Water/Leaf Stone, they can only be obtained at this point in the game from dust clouds in Wellspring Cave. There’s only a 10% chance of finding a stone in the dust cloud and it could be any of the evolutions stones as well as Oval Stones, Everstones and Hard Stones so the chances of finding one that you want is less than 1%. You definitely want to use Repels here, but as you won’t be swimming in money, it’s best to save, use up to 10 repels and if you don’t find what you’re looking for, soft reset and try again. You could also use the items from your Pickup squad to sell for more money for repels. The Moon Stone for Munna can also be found here, but personally I think it’s better to go back to the Dreamyard and try get a 5% encounter in the shaking grass for a wild Musharna. You could also get one via Pickup if you can get Lillipup up to Level 41+
</p>

<pre>
Munna→Moon Stone→Musharna
Pansage/Pansear/Panpour→Leaf/Fire/Water Stone→Simisage/Simisear/Simipour
</pre>

<p>
  And with that, you’ve finished catching for this section!
</p>

<h5>Levelling up tips</h5>

<p>
  One word - Audino. Just run around outside Pinwheel Forest and encounter Audino that range between levels 12-15. There really isn’t much to say other than that, try and preserve trainers for when you are nearly finished with Palpitoad or Tranquill to benefit the most.
</p>
`,
      rows: [
        /* Munna and the Dreamyard */
        {
          pokemon: {
            img: imgBasehref + "517.png",
            name: "Munna",
          },
          method: "Munna and the Dreamyard",
          _source: "* Munna",
        },
        /* Route 3 */
        {
          pokemon: {
            img: imgBasehref + "519.png",
            name: "Pidove",
          },
          method: "Route 3",
          _source: "* Pidove→Lv. 21→Tranquill→Lv. 32→Unfezant",
        },
        {
          pokemon: {
            img: imgBasehref + "520.png",
            name: "Tranquill",
          },
          method: "Evolve Pidove at level 21",
          _source: "* Pidove→Lv. 21→Tranquill→Lv. 32→Unfezant",
        },
        {
          pokemon: {
            img: imgBasehref + "521.png",
            name: "Unfezant",
          },
          method: "Evolve Tranquill at level 32",
          _source: "* Pidove→Lv. 21→Tranquill→Lv. 32→Unfezant",
        },
        {
          pokemon: {
            img: imgBasehref + "522.png",
            name: "Blitzle",
          },
          method: "Route 3",
          _source: "* Blitzle→Lv. 27→Zebstrika",
        },
        {
          pokemon: {
            img: imgBasehref + "523.png",
            name: "Zebstrika",
          },
          method: "Evolve Blitzle at level 27",
          _source: "* Blitzle→Lv. 27→Zebstrika",
        },
        {
          pokemon: {
            img: imgBasehref + "531.png",
            name: "Audino",
          },
          method: "Route 3",
          _source: "* Audino",
        },
        /* Wellspring Cave */
        {
          pokemon: {
            img: imgBasehref + "524.png",
            name: "Roggenrola",
          },
          method: "Wellspring Cave",
          _source: "* Roggenrola→Lv. 25→Boldore",
        },
        {
          pokemon: {
            img: imgBasehref + "525.png",
            name: "Boldore",
          },
          method: "Evolve Roggenrola at level 25",
          _source: "* Roggenrola→Lv. 25→Boldore",
        },
        {
          pokemon: {
            img: imgBasehref + "527.png",
            name: "Woobat",
          },
          method: "Wellspring Cave",
          _source: "* Woobat→Happiness→Swoobat",
        },
        {
          pokemon: {
            img: imgBasehref + "528.png",
            name: "Swoobat",
          },
          method: "Evolve Woobat with happiness",
          _source: "* Woobat→Happiness→Swoobat",
        },
        {
          pokemon: {
            img: imgBasehref + "529.png",
            name: "Drilbur",
          },
          method: "Wellspring Cave",
          _source: "* Drilbur→Lv. 31→Excadrill",
        },
        {
          pokemon: {
            img: imgBasehref + "530.png",
            name: "Excadrill",
          },
          method: "Evolve Drilbur at level 31",
          _source: "* Drilbur→Lv. 31→Excadrill",
        },
        /* Nacrene City and Pinwheel Forest */
        {
          pokemon: {
            img: imgBasehref + "535.png",
            name: "Tympole",
          },
          method: "Nacrene City and Pinwheel Forest",
          _source: "* Tympole→Lv. 25→Palpitoad→Lv. 36→Seismitoad",
        },
        {
          pokemon: {
            img: imgBasehref + "536.png",
            name: "Palpitoad",
          },
          method: "Evolve Tympole at level 25",
          _source: "* Tympole→Lv. 25→Palpitoad→Lv. 36→Seismitoad",
        },
        {
          pokemon: {
            img: imgBasehref + "537.png",
            name: "Seismitoad",
          },
          method: "Evolve Palpitoad at level 36",
          _source: "* Tympole→Lv. 25→Palpitoad→Lv. 36→Seismitoad",
        },
        {
          pokemon: {
            img: imgBasehref + "532.png",
            name: "Timburr",
          },
          method: "Nacrene City and Pinwheel Forest",
          _source: "* Timburr→Lv. 25→Gurdurr",
        },
        {
          pokemon: {
            img: imgBasehref + "533.png",
            name: "Gurdurr",
          },
          method: "Evolve Timburr at level 25",
          _source: "* Timburr→Lv. 25→Gurdurr",
        },
        {
          pokemon: {
            img: imgBasehref + "538.png",
            name: "Throh",
          },
          method: "Nacrene City and Pinwheel Forest",
          _source: "* (W) Throh",
        },
        {
          pokemon: {
            img: imgBasehref + "539.png",
            name: "Sawk",
          },
          method: "Nacrene City and Pinwheel Forest",
          _source: "* (B) Sawk",
        },
        {
          pokemon: {
            img: imgBasehref + "538.png",
            name: "Throh",
          },
          method: "Nacrene City and Pinwheel Forest",
          _source: "* (B) Throh",
        },
        {
          pokemon: {
            img: imgBasehref + "539.png",
            name: "Sawk",
          },
          method: "Nacrene City and Pinwheel Forest",
          _source: "* (W) Sawk",
        },
        /* A couple of stones to seal the deal */
        {
          pokemon: {
            img: imgBasehref + "517.png",
            name: "Munna",
          },
          method: "A couple of stones to seal the deal",
          _source: "* Munna→Moon Stone→Musharna",
        },
        {
          pokemon: {
            img: imgBasehref + "518.png",
            name: "Musharna",
          },
          method: "Use Moon Stone on Munna",
          _source: "* Munna→Moon Stone→Musharna",
        },
        {
          pokemon: {
            img: imgBasehref + "511.png",
            name: "Pansage",
          },
          method: "A couple of stones to seal the deal",
          _source: "* Pansage/Pansear/Panpour→Leaf/Fire/Water Stone→Simisage/Simisear/Simipour",
        },
        {
          pokemon: {
            img: imgBasehref + "512.png",
            name: "Simisage",
          },
          method: "Use Leaf/Fire/Water Stone on Pansage",
          _source: "* Pansage/Pansear/Panpour→Leaf/Fire/Water Stone→Simisage/Simisear/Simipour",
        },
      ],
    },
    "pre-badge-3-castelia-gym": {
      headerTitle: "Pre Badge #3 (Castelia Gym)",
      summaryShort:
        "Choices (the remaining two monkeys): / / Show no mercy to Lenora and her Normal types and you’ll find that Team Plasma has stolen a skull from the museum. Pinwheel Forest Interior Chase Team Plasma into Pinwheel Forest where you’ll have to go off the",
      summaryHtml: `
<p>
  Choices (the remaining two monkeys): /    / Show no mercy to Lenora and her Normal types and you’ll find that Team Plasma has stolen a skull from the museum.
</p>

<h5>Pinwheel Forest Interior</h5>

<p>
  Chase Team Plasma into Pinwheel Forest where you’ll have to go off the path which does mean you can catch some more pokemon. In standard wild battles you’ll be able to find Venipede and Sewaddle and either Petilil/Cottonee depending on your version. In the rustling grass you’ll also have a good chance at finding all three elemental monkeys (Pansage/Pansear/Panpour) so catch the other two that you don’t have already (we’ll cover the stones later). You might also find a Lilligant/Whimsicott which may be easier than getting a Sun Stone from a Lv31+ Pickup pokemon or from dust clouds in Wellspring Cave.
</p>

<pre>
Sewaddle→Lv. 20→Swadloon→Happiness→Leavanny
Venipede→Lv. 22→Whirlipede→Lv. 30→Scolipede
Panpour/Pansage/Pansear
(W) Petilil→Sun Stone→Lilligant
(B) Cottonee→Sun Stone→Whimsicott
</pre>

<p>
  Keep Sewaddle in your party to allow its happiness to go up while you run around which you’ll be doing a lot of in this section. Catch a second Petilil/Cottonee and go back to Nacrene City to trade for the other ‘version exclusive’.
</p>

<pre>
(B) Petilil→Sun Stone→Lilligant
(W) Cottonee→Sun Stone→Whimsicott
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
Sandile→Lv. 29→Krokorok→Lv. 40→Krookodile
Scraggy→Lv. 39→Scrafty
Darumaka→Lv. 35→Darmanitan
</pre>

<h5>More Stones again</h5>

<p>
  We have found ourselves needing more evolution stones again for the third section in a row! We need two Sun Stones (or one if you caught a wild Lilligant/Whimsicott) from either the dust clouds in Wellspring Cave or a Lv31+ Pickup pokemon. We’ll also need two stones for either Pansage (Leaf Stone), Pansear (Fire Stone) or Panpour (Water Stone). For these you’ll have to get them from dust clouds but there is also a nice man on the first pier as you enter Castelia City who will give you a free stone if you tell him which of the monkeys you want to evolve. I would suggest looking for one of the two stones from dust clouds (save, use Repels and soft reset if you didn’t get one) and then get the man to give you the other.
</p>

<pre>
Pansage/Pansear/Panpour→Leaf/Fire/Water Stone→Simisage/Simisear/Simipour
</pre>

<h5>Levelling up tips</h5>

<p>
  And here we are again at the end of the section. Despite being able to reach Route 4, the last place you can find Audino in this section is inside Pinwheel Forest and even then, it’s only a 65% chance compared to the exterior section of the forest which is 95% encounter rate in shaking grass. So it’s up to you whether you want consistency or higher levels. I chose to bite the bullet and train inside the forest with a fainted Vital Spirit Lillipup to try and get more of the Lv17 Audino to appear. The evolution levels are creeping up in this section going as high as Lv40 for Krookodile so patience is a virtue. As mentioned, keep Sewaddle/Swadloon in your party at all times. With the amount of ground covered running across Skyarrow Bridge, through Castelia City and trying to find Audino, the number of steps you take will be phenomenal.
</p>
`,
      rows: [
        /* Pinwheel Forest Interior */
        {
          pokemon: {
            img: imgBasehref + "540.png",
            name: "Sewaddle",
          },
          method: "Pinwheel Forest Interior",
          _source: "* Sewaddle→Lv. 20→Swadloon→Happiness→Leavanny",
        },
        {
          pokemon: {
            img: imgBasehref + "541.png",
            name: "Swadloon",
          },
          method: "Evolve Sewaddle at level 20",
          _source: "* Sewaddle→Lv. 20→Swadloon→Happiness→Leavanny",
        },
        {
          pokemon: {
            img: imgBasehref + "542.png",
            name: "Leavanny",
          },
          method: "Evolve Swadloon with happiness",
          _source: "* Sewaddle→Lv. 20→Swadloon→Happiness→Leavanny",
        },
        {
          pokemon: {
            img: imgBasehref + "543.png",
            name: "Venipede",
          },
          method: "Pinwheel Forest Interior",
          _source: "* Venipede→Lv. 22→Whirlipede→Lv. 30→Scolipede",
        },
        {
          pokemon: {
            img: imgBasehref + "544.png",
            name: "Whirlipede",
          },
          method: "Evolve Venipede at level 22",
          _source: "* Venipede→Lv. 22→Whirlipede→Lv. 30→Scolipede",
        },
        {
          pokemon: {
            img: imgBasehref + "545.png",
            name: "Scolipede",
          },
          method: "Evolve Whirlipede at level 30",
          _source: "* Venipede→Lv. 22→Whirlipede→Lv. 30→Scolipede",
        },
        {
          pokemon: {
            img: imgBasehref + "515.png",
            name: "Panpour",
          },
          method: "Pinwheel Forest Interior",
          _source: "* Panpour/Pansage/Pansear",
        },
        {
          pokemon: {
            img: imgBasehref + "548.png",
            name: "Petilil",
          },
          method: "Pinwheel Forest Interior",
          _source: "* (W) Petilil→Sun Stone→Lilligant",
        },
        {
          pokemon: {
            img: imgBasehref + "549.png",
            name: "Lilligant",
          },
          method: "Use Sun Stone on Petilil",
          _source: "* (W) Petilil→Sun Stone→Lilligant",
        },
        {
          pokemon: {
            img: imgBasehref + "546.png",
            name: "Cottonee",
          },
          method: "Pinwheel Forest Interior",
          _source: "* (B) Cottonee→Sun Stone→Whimsicott",
        },
        {
          pokemon: {
            img: imgBasehref + "547.png",
            name: "Whimsicott",
          },
          method: "Use Sun Stone on Cottonee",
          _source: "* (B) Cottonee→Sun Stone→Whimsicott",
        },
        {
          pokemon: {
            img: imgBasehref + "548.png",
            name: "Petilil",
          },
          method: "Pinwheel Forest Interior",
          _source: "* (B) Petilil→Sun Stone→Lilligant",
        },
        {
          pokemon: {
            img: imgBasehref + "549.png",
            name: "Lilligant",
          },
          method: "Use Sun Stone on Petilil",
          _source: "* (B) Petilil→Sun Stone→Lilligant",
        },
        {
          pokemon: {
            img: imgBasehref + "546.png",
            name: "Cottonee",
          },
          method: "Pinwheel Forest Interior",
          _source: "* (W) Cottonee→Sun Stone→Whimsicott",
        },
        {
          pokemon: {
            img: imgBasehref + "547.png",
            name: "Whimsicott",
          },
          method: "Use Sun Stone on Cottonee",
          _source: "* (W) Cottonee→Sun Stone→Whimsicott",
        },
        /* Route 4 */
        {
          pokemon: {
            img: imgBasehref + "551.png",
            name: "Sandile",
          },
          method: "Route 4",
          _source: "* Sandile→Lv. 29→Krokorok→Lv. 40→Krookodile",
        },
        {
          pokemon: {
            img: imgBasehref + "552.png",
            name: "Krokorok",
          },
          method: "Evolve Sandile at level 29",
          _source: "* Sandile→Lv. 29→Krokorok→Lv. 40→Krookodile",
        },
        {
          pokemon: {
            img: imgBasehref + "553.png",
            name: "Krookodile",
          },
          method: "Evolve Krokorok at level 40",
          _source: "* Sandile→Lv. 29→Krokorok→Lv. 40→Krookodile",
        },
        {
          pokemon: {
            img: imgBasehref + "559.png",
            name: "Scraggy",
          },
          method: "Route 4",
          _source: "* Scraggy→Lv. 39→Scrafty",
        },
        {
          pokemon: {
            img: imgBasehref + "560.png",
            name: "Scrafty",
          },
          method: "Evolve Scraggy at level 39",
          _source: "* Scraggy→Lv. 39→Scrafty",
        },
        {
          pokemon: {
            img: imgBasehref + "554.png",
            name: "Darumaka",
          },
          method: "Route 4",
          _source: "* Darumaka→Lv. 35→Darmanitan",
        },
        {
          pokemon: {
            img: imgBasehref + "555.png",
            name: "Darmanitan",
          },
          method: "Evolve Darumaka at level 35",
          _source: "* Darumaka→Lv. 35→Darmanitan",
        },
        /* More Stones again */
        {
          pokemon: {
            img: imgBasehref + "511.png",
            name: "Pansage",
          },
          method: "More Stones again",
          _source: "* Pansage/Pansear/Panpour→Leaf/Fire/Water Stone→Simisage/Simisear/Simipour",
        },
        {
          pokemon: {
            img: imgBasehref + "512.png",
            name: "Simisage",
          },
          method: "Use Leaf/Fire/Water Stone on Pansage",
          _source: "* Pansage/Pansear/Panpour→Leaf/Fire/Water Stone→Simisage/Simisear/Simipour",
        },
      ],
    },
    "pre-badge-4-nimbasa-gym": {
      headerTitle: "Pre Badge #4 (Nimbasa Gym)",
      summaryShort:
        "Black Exclusive: White Exclusive: Choices (pick one fossil): / Defeating Burgh lets us advance further along Route 4 and you’ll be battling both rivals on the way. You’ll reach a fork on Route 4, one road goes north to the next city, Nimbasa City. Th",
      summaryHtml: `
<p>
  Black Exclusive: White Exclusive: Choices (pick one fossil): / Defeating Burgh lets us advance further along Route 4 and you’ll be battling both rivals on the way. You’ll reach a fork on Route 4, one road goes north to the next city, Nimbasa City. The one going west leads to the Desert Resort.
</p>

<h5>Desert Resort</h5>

<p>
  This place is built up of three areas, the entrance part where the weather is calm, the desert itself which has a sandstorm permanently blowing and the ruins of the resort known as Relic Castle. Between the two desert areas, the same pokemon appear with one extra in the sandstorm area so you may as well search there. There’s a doctor close to the gate house who, once defeated, will heal you whenever you like making this a good training ground as you search. There’s also a Fire Stone in the desert should you wish to pick it up.
</p>

<pre>
Dwebble→Lv. 34→Crustle
Sigilyph
Maractus
</pre>

<p>
  In Relic Castle, there’s not much you can explore at this moment in time but enough to find a wild Yamask and pick up a fossil from a backpacker. It’s your choice who to pick, Archen (plume fossil) is the one you may want to consider NOT picking as it has a fairly annoying ability that activates once below 50% HP but is otherwise quite tough. But again, it’s down to personal preference. You can resurrect the fossil in Nacrene City at the entrance desk on the right.
</p>

<pre>
Yamask→Lv. 34→Cofagrigus
Tirtouga→Lv. 37→Carracosta
OR
Archen→Lv. 37→Archeops
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
(B) Gothita→Lv. 32→Gothorita→Lv. 41→Gothitelle
(W) Solosis→Lv. 32→Duosion→Lv. 41→Reuniclus
Trubbish→Lv. 36→Garbodor
Mincinno→Shiny Stone→Cincinno
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
  As usual, defeat all trainers available including those in the gym. Sticking to Audino is, again, the best option. Route 5 or Route 16 is obviously the best place for this as Audino’s level can go up to Level 22. The only frustrating thing about these routes is that there isn’t enough space to cycle back and forth without making the grass rustle quite deep in the area (which increases the chance of getting into a random encounter before you get there). I stuck to Route 5, there’s a small ‘square’ to the right of the van where you can ride round in circles. The only pokemon I struggled with training was Yamask as it didn’t learn any non-ghost attacking moves so I had to rely on Will-O-Wisp  (while Audino has Refresh) or Curse.
</p>
`,
      rows: [
        /* Desert Resort */
        {
          pokemon: {
            img: imgBasehref + "557.png",
            name: "Dwebble",
          },
          method: "Desert Resort",
          _source: "* Dwebble→Lv. 34→Crustle",
        },
        {
          pokemon: {
            img: imgBasehref + "558.png",
            name: "Crustle",
          },
          method: "Evolve Dwebble at level 34",
          _source: "* Dwebble→Lv. 34→Crustle",
        },
        {
          pokemon: {
            img: imgBasehref + "561.png",
            name: "Sigilyph",
          },
          method: "Desert Resort",
          _source: "* Sigilyph",
        },
        {
          pokemon: {
            img: imgBasehref + "556.png",
            name: "Maractus",
          },
          method: "Desert Resort",
          _source: "* Maractus",
        },
        {
          pokemon: {
            img: imgBasehref + "562.png",
            name: "Yamask",
          },
          method: "Desert Resort",
          _source: "* Yamask→Lv. 34→Cofagrigus",
        },
        {
          pokemon: {
            img: imgBasehref + "563.png",
            name: "Cofagrigus",
          },
          method: "Evolve Yamask at level 34",
          _source: "* Yamask→Lv. 34→Cofagrigus",
        },
        {
          pokemon: {
            img: imgBasehref + "564.png",
            name: "Tirtouga",
          },
          method: "Desert Resort",
          _source: "* Tirtouga→Lv. 37→Carracosta",
        },
        {
          pokemon: {
            img: imgBasehref + "565.png",
            name: "Carracosta",
          },
          method: "Evolve Tirtouga at level 37",
          _source: "* Tirtouga→Lv. 37→Carracosta",
        },
        {
          pokemon: {
            img: imgBasehref + "566.png",
            name: "Archen",
          },
          method: "Desert Resort",
          _source: "* Archen→Lv. 37→Archeops",
        },
        {
          pokemon: {
            img: imgBasehref + "567.png",
            name: "Archeops",
          },
          method: "Evolve Archen at level 37",
          _source: "* Archen→Lv. 37→Archeops",
        },
        /* Route 16 */
        {
          pokemon: {
            img: imgBasehref + "574.png",
            name: "Gothita",
          },
          method: "Route 16",
          _source: "* (B) Gothita→Lv. 32→Gothorita→Lv. 41→Gothitelle",
        },
        {
          pokemon: {
            img: imgBasehref + "575.png",
            name: "Gothorita",
          },
          method: "Evolve Gothita at level 32",
          _source: "* (B) Gothita→Lv. 32→Gothorita→Lv. 41→Gothitelle",
        },
        {
          pokemon: {
            img: imgBasehref + "576.png",
            name: "Gothitelle",
          },
          method: "Evolve Gothorita at level 41",
          _source: "* (B) Gothita→Lv. 32→Gothorita→Lv. 41→Gothitelle",
        },
        {
          pokemon: {
            img: imgBasehref + "577.png",
            name: "Solosis",
          },
          method: "Route 16",
          _source: "* (W) Solosis→Lv. 32→Duosion→Lv. 41→Reuniclus",
        },
        {
          pokemon: {
            img: imgBasehref + "578.png",
            name: "Duosion",
          },
          method: "Evolve Solosis at level 32",
          _source: "* (W) Solosis→Lv. 32→Duosion→Lv. 41→Reuniclus",
        },
        {
          pokemon: {
            img: imgBasehref + "579.png",
            name: "Reuniclus",
          },
          method: "Evolve Duosion at level 41",
          _source: "* (W) Solosis→Lv. 32→Duosion→Lv. 41→Reuniclus",
        },
        {
          pokemon: {
            img: imgBasehref + "568.png",
            name: "Trubbish",
          },
          method: "Route 16",
          _source: "* Trubbish→Lv. 36→Garbodor",
        },
        {
          pokemon: {
            img: imgBasehref + "569.png",
            name: "Garbodor",
          },
          method: "Evolve Trubbish at level 36",
          _source: "* Trubbish→Lv. 36→Garbodor",
        },
        {
          pokemon: {
            name: "Mincinno",
            parseWarning: true,
          },
          method: "Route 16",
          _source: "* Mincinno→Shiny Stone→Cincinno",
        },
        {
          pokemon: {
            name: "Cincinno",
            parseWarning: true,
          },
          method: "Use Shiny Stone on Mincinno",
          _source: "* Mincinno→Shiny Stone→Cincinno",
        },
        {
          pokemon: {
            img: imgBasehref + "587.png",
            name: "Emolga",
          },
          method: "Route 16",
          _source: "* Emolga",
        },
      ],
    },
    "pre-badge-5-driftveil-gym": {
      headerTitle: "Pre Badge #5 (Driftveil Gym)",
      summaryShort:
        "This is actually a pretty short section in comparison to the previous couple. Defeat Elesa and she’ll agree to meet you at Driftveil Drawbridge. Cheren will challenge you on the way and then team up in a double battle to beat the snot out of a couple",
      summaryHtml: `
<p>
  This is actually a pretty short section in comparison to the previous couple. Defeat Elesa and she’ll agree to meet you at Driftveil Drawbridge. Cheren will challenge you on the way and then team up in a double battle to beat the snot out of a couple of pre-schoolers. The drawbridge will be lowered and you can cross over to Driftveil City. On the way, look out for shadows on the bridge. Most will give you items when you move to that spot, but you may also encounter a Ducklett.
</p>

<pre>
Ducklett→Lv. 35→Swanna
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
Vanillite→Lv. 35→Vanillish→Lv. 47→Vanilluxe
</pre>

<h5>Route 6</h5>

<p>
  From the north western exit you’ll go straight into a wooded area. Here you’ll be able to catch a Karrablast, Deerling and Foongus (either from the grass or disguised as a pokeball). With no way to trade Karrablast, it will remain unevolved. There’s a rest area in one of the huts should you need it and if you carry on you’ll soon be blocked off by a spider web covering the entrance to the cave. That’s as far as we can go so it’s time to evolve already. Grab the Leaf Stone on your way through the route and speak to the girl in the rest area for a Shiny Stone.
</p>

<pre>
Karrablast
Foongus→Lv. 39→Amoonguss
Deerling→Lv. 34→Sawsbuck
</pre>

<h5>Levelling up tips</h5>

<p>
  Evolution levels in Unova are generally pretty high but Vanilluxe takes the lead spot for highest evolution so far at a massive Level 47. Any guesses on the best way to level up? That’s right, Audino again. They can be slightly higher levelled on Route 6 so my strategy was to have a fainted Vital Spirit Lillipup in the first slot and then battling level 25 Audino over and over. If you’re playing in Winter, the chances of finding Audino are 75% compared to 70% in any other season. If you think that’s too low, try Cold Storage where it’s a higher 90% but Audino will be at a maximum of Level 23. Don’t forget to battle the trainers in the gym! With this section completed we’ve hit the half way mark on the Unova dex…
</p>
`,
      rows: [
        /* Unknown */
        {
          pokemon: {
            img: imgBasehref + "580.png",
            name: "Ducklett",
          },
          method: "Unknown",
          _source: "* Ducklett→Lv. 35→Swanna",
        },
        {
          pokemon: {
            img: imgBasehref + "581.png",
            name: "Swanna",
          },
          method: "Evolve Ducklett at level 35",
          _source: "* Ducklett→Lv. 35→Swanna",
        },
        /* Driftveil City */
        {
          pokemon: {
            img: imgBasehref + "550.png",
            name: "Basculin",
          },
          method: "Driftveil City",
          _source: "* Basculin",
        },
        /* Cold Storage */
        {
          pokemon: {
            img: imgBasehref + "582.png",
            name: "Vanillite",
          },
          method: "Cold Storage",
          _source: "* Vanillite→Lv. 35→Vanillish→Lv. 47→Vanilluxe",
        },
        {
          pokemon: {
            img: imgBasehref + "583.png",
            name: "Vanillish",
          },
          method: "Evolve Vanillite at level 35",
          _source: "* Vanillite→Lv. 35→Vanillish→Lv. 47→Vanilluxe",
        },
        {
          pokemon: {
            img: imgBasehref + "584.png",
            name: "Vanilluxe",
          },
          method: "Evolve Vanillish at level 47",
          _source: "* Vanillite→Lv. 35→Vanillish→Lv. 47→Vanilluxe",
        },
        /* Route 6 */
        {
          pokemon: {
            img: imgBasehref + "588.png",
            name: "Karrablast",
          },
          method: "Route 6",
          _source: "* Karrablast",
        },
        {
          pokemon: {
            img: imgBasehref + "590.png",
            name: "Foongus",
          },
          method: "Route 6",
          _source: "* Foongus→Lv. 39→Amoonguss",
        },
        {
          pokemon: {
            img: imgBasehref + "591.png",
            name: "Amoonguss",
          },
          method: "Evolve Foongus at level 39",
          _source: "* Foongus→Lv. 39→Amoonguss",
        },
        {
          pokemon: {
            img: imgBasehref + "585.png",
            name: "Deerling",
          },
          method: "Route 6",
          _source: "* Deerling→Lv. 34→Sawsbuck",
        },
        {
          pokemon: {
            img: imgBasehref + "586.png",
            name: "Sawsbuck",
          },
          method: "Evolve Deerling at level 34",
          _source: "* Deerling→Lv. 34→Sawsbuck",
        },
      ],
    },
    "pre-badge-6-mistralton-gym": {
      headerTitle: "Pre Badge #6 (Mistralton Gym)",
      summaryShort:
        "Chargestone Cave Clay will let you pass through to Chargestone Cave, so head on up there and he’ll clear the cobwebs blocking the entrance. You’ll meet Bianca and Professor Juniper in here. The Professor will give you a Lucky Egg which is a great hel",
      summaryHtml: `
<h5>Chargestone Cave</h5>

<p>
  Clay will let you pass through to Chargestone Cave, so head on up there and he’ll clear the cobwebs blocking the entrance. You’ll meet Bianca and Professor Juniper in here. The Professor will give you a Lucky Egg which is a great help in gaining EVEN MORE exp from Audino (and levelling up in general). Within the cave you’ll find several new pokemon and encounter Team Plasma again. Explore the cave fully and you’ll be able to grab a Thunder Stone which you need for a pokemon you’ll catch in here.
</p>

<pre>
Joltik→Lv. 36→Galvantula
Klink→Lv. 38→Klang→Lv. 49→Klinklang
Tynamo→Lv. 39→Eelektrik→Thunder Stone→Eelektross
Ferroseed→Lv. 40→Ferrothorn
</pre>

<h5>Route 7</h5>

<p>
  Once you leave Chargestone Cave you’ll arrive in Mistralton City. Skyla the gym leader will tell you that she’s off to Celestial Tower. Follow her there through the north eastern side of town onto Route 7. This is the first route of the game where it is required to be a certain season in order to catch a pokemon Cubchoo is only found on this route in Winter (April, August, December). If it’s not Winter then you’ll be unable to complete this section properly so you will need to either wait for the appropriate month or change the DS clock.
</p>

<pre>
Cubchoo→Lv. 37→Beartic
</pre>

<h5>Celestial Tower</h5>

<p>
  The entrance floor is peaceful but once you access the next floor up, trainers and wild pokemon await. Litwick will initially be the only pokemon you’ll encounter here but as you venture further up, Elgyem will become more common topping at a 50% encounter rate on the top floor. Meet with Skyla on the roof and shell ask you to ring the bell before returning to the gym where you can challenge her. Litwick evolves into Lampent through levelling up but cannot evolve into Chandelure without a Dusk Stone. Unfortunately there aren’t any available (but will be in the next section as a slap in the face) without doing more dust cloud searching. Thankfully this is MUCH easier than Wellspring Cave. Grab some Max Repels from the Pokemart and head back into Chargestone Cave. The areas in here are bigger and provide plenty of room to run around. Obviously the catch is that the low chance of getting a stone (and then for it to be a Dusk Stone) is still there so the usual trick of saving and soft resetting once you’re out of Repels is still a good trick.
</p>

<pre>
Litwick→Lv. 41→Lampent→Dusk Stone→Chandelure
Elgyem→Lv. 42→Beheeyem
</pre>

<p>
  We once again reach a gym leader related barrier. You can’t get any further than Route 7 as Twist Mountain is blocked off until you’ve got your next badge.
</p>

<h5>Levelling up tips</h5>

<p>
  This is another fairly short section of the game but with more pokemon than you can fit in your party. Overall this isn’t a massive challenge. Klinklang is now the highest evolving pokemon so far at level 49 (but it gets worse in the next sections…) but it isn’t overly difficult training against Audino as usual. Make good use of the Lucky Egg that Prof Juniper gave you. Ensure that whichever pokemon you are training has it equipped. Litwick enjoys complete immunity to all of Audino’s moves! The only pokemon I struggled with were Cubchoo and Tynamo who were both fairly fragile. Try and battle Audino of the same gender so you don’t get hit with Attract for a better chance of winning or consider backtracking and battling lower level Audino for a while. As always, don’t forget to battle the trainers in the gym!
</p>
`,
      rows: [
        /* Chargestone Cave */
        {
          pokemon: {
            img: imgBasehref + "595.png",
            name: "Joltik",
          },
          method: "Chargestone Cave",
          _source: "* Joltik→Lv. 36→Galvantula",
        },
        {
          pokemon: {
            img: imgBasehref + "596.png",
            name: "Galvantula",
          },
          method: "Evolve Joltik at level 36",
          _source: "* Joltik→Lv. 36→Galvantula",
        },
        {
          pokemon: {
            img: imgBasehref + "599.png",
            name: "Klink",
          },
          method: "Chargestone Cave",
          _source: "* Klink→Lv. 38→Klang→Lv. 49→Klinklang",
        },
        {
          pokemon: {
            img: imgBasehref + "600.png",
            name: "Klang",
          },
          method: "Evolve Klink at level 38",
          _source: "* Klink→Lv. 38→Klang→Lv. 49→Klinklang",
        },
        {
          pokemon: {
            img: imgBasehref + "601.png",
            name: "Klinklang",
          },
          method: "Evolve Klang at level 49",
          _source: "* Klink→Lv. 38→Klang→Lv. 49→Klinklang",
        },
        {
          pokemon: {
            img: imgBasehref + "602.png",
            name: "Tynamo",
          },
          method: "Chargestone Cave",
          _source: "* Tynamo→Lv. 39→Eelektrik→Thunder Stone→Eelektross",
        },
        {
          pokemon: {
            img: imgBasehref + "603.png",
            name: "Eelektrik",
          },
          method: "Evolve Tynamo at level 39",
          _source: "* Tynamo→Lv. 39→Eelektrik→Thunder Stone→Eelektross",
        },
        {
          pokemon: {
            img: imgBasehref + "604.png",
            name: "Eelektross",
          },
          method: "Use Thunder Stone on Eelektrik",
          _source: "* Tynamo→Lv. 39→Eelektrik→Thunder Stone→Eelektross",
        },
        {
          pokemon: {
            img: imgBasehref + "597.png",
            name: "Ferroseed",
          },
          method: "Chargestone Cave",
          _source: "* Ferroseed→Lv. 40→Ferrothorn",
        },
        {
          pokemon: {
            img: imgBasehref + "598.png",
            name: "Ferrothorn",
          },
          method: "Evolve Ferroseed at level 40",
          _source: "* Ferroseed→Lv. 40→Ferrothorn",
        },
        /* Route 7 */
        {
          pokemon: {
            img: imgBasehref + "613.png",
            name: "Cubchoo",
          },
          method: "Route 7",
          _source: "* Cubchoo→Lv. 37→Beartic",
        },
        {
          pokemon: {
            img: imgBasehref + "614.png",
            name: "Beartic",
          },
          method: "Evolve Cubchoo at level 37",
          _source: "* Cubchoo→Lv. 37→Beartic",
        },
        /* Celestial Tower */
        {
          pokemon: {
            img: imgBasehref + "607.png",
            name: "Litwick",
          },
          method: "Celestial Tower",
          _source: "* Litwick→Lv. 41→Lampent→Dusk Stone→Chandelure",
        },
        {
          pokemon: {
            img: imgBasehref + "608.png",
            name: "Lampent",
          },
          method: "Evolve Litwick at level 41",
          _source: "* Litwick→Lv. 41→Lampent→Dusk Stone→Chandelure",
        },
        {
          pokemon: {
            img: imgBasehref + "609.png",
            name: "Chandelure",
          },
          method: "Use Dusk Stone on Lampent",
          _source: "* Litwick→Lv. 41→Lampent→Dusk Stone→Chandelure",
        },
        {
          pokemon: {
            img: imgBasehref + "605.png",
            name: "Elgyem",
          },
          method: "Celestial Tower",
          _source: "* Elgyem→Lv. 42→Beheeyem",
        },
        {
          pokemon: {
            img: imgBasehref + "606.png",
            name: "Beheeyem",
          },
          method: "Evolve Elgyem at level 42",
          _source: "* Elgyem→Lv. 42→Beheeyem",
        },
      ],
    },
    "pre-badge-7-icirrus-gym": {
      headerTitle: "Pre Badge #7 (Icirrus Gym)",
      summaryShort:
        "Venture up to Twist Mountain and you’ll battle Cheren again and then be given HM03 Surf from Alder. Now is a good chance to do some backtracking. Route 17/18/P2 Lab Head all the way back to Route 1 and you can head west out onto Route 17. You can sur",
      summaryHtml: `
<p>
  Venture up to Twist Mountain and you’ll battle Cheren again and then be given HM03 Surf from Alder. Now is a good chance to do some backtracking.
</p>

<h5>Route 17/18/P2 Lab</h5>

<p>
  Head all the way back to Route 1 and you can head west out onto Route 17. You can surf around here to find a wild Frillish and if you surf over to a dark spot in the water that is basically the equivalent of shaking grass (referred to as rippling water), you are likely to encounter an Alomomola.
</p>

<pre>
Frillish→Lv. 40→Jellicent
Alomomola
</pre>

<p>
  Access Route 18 where you’ll stop by a house where someone will give you an egg (you’ll need a spare slot in your party) which will hatch into a Larvesta! You can also pick up the HM for Waterfall here. You can also work your way around to the P2 lab but there’s not much out there of interest other than a Dubious Disc which doesn’t have any relevance to the challenge.
</p>

<pre>
Larvesta→Lv. 59→Volcarona
</pre>

<h5>Two of the three Muskedeers</h5>

<p>
  Go back to Route 6 (just before Chargestone Cave) and you can surf along the river at the northern part of the route to access Mistralton Cave. You’ll need Strength and ideally Flash for this cave. Run around to eventually encounter an Axew. If possible, try to catch one with the Mold Breaker ability rather than Rivalry as this can hinder your battles against Audino (reduced attack power against opposite gender). Venture further into the cave and you’ll meet a man who will explain the lore behind Cobalion, Virizion and Terrakion. As you enter the deepest part of the cave you can encounter Cobalion. Save before you encounter it. Try to inflict a status effect on it and get its HP into the red. If you have any Dusk Balls, these work great, otherwise try Ultra Balls. Your encounter with Cobalion will now allow you to encounter the remaining two of the trio. Terrakion isn’t accessible yet, but if you revisit Pinwheel Forest (interior) you can go through the doubles grass on the east side to find another cave where Virizion will be waiting in the open. Again, Dusk Balls work well here.
</p>

<pre>
Axew→Lv. 38→Fraxure→Lv. 48→Haxorus
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
Mienfoo→Lv. 50→Mienshao
Druddigon
</pre>

<p>
  Route 8 (north east of Icirrus City) has the same pokemon as the city and again, only in non-winter months. You will be blocked off by Team Plasma to stop you from going any further so it’s training time.
</p>

<h5>Levelling up tips</h5>

<p>
  Thanks to the detours from obtaining Surf, it feels like we’ve covered a lot more ground in this section. Larvesta takes the silver medal for the highest level pokemon to evolve in Unova at a huge level 59. There’s also only four pokemon to evolve in this section. Frillish enjoys being a ghost type and is invincible against Audino and Mienfoo has no problem laying the smack down. Axew should be fairly straight forward as long as you didn’t catch a Rivalry one. The reduced attack power and getting hit by Attract gets old fast. It also doesn’t really learn any useful moves by keeping it unevolved, so let it change into Fraxure ASAP. Larvesta can cause problems. The issue I had with it was mostly its durability. Unless you use TMs, it’s attacks aren’t very powerful unless you use recoil moves (not advised) and it only learns a new move every 10 levels. Things get easier when it learns Bug Bite as it will steal and consume Audino’s berries. Levelling up Larvesta really starts to slow down once you’ve passed Lv50. As always, keep the Lucky Egg attached and remember the trainers in the gym which Larvesta will really enjoy thrashing.
</p>
`,
      rows: [
        /* Route 17/18/P2 Lab */
        {
          pokemon: {
            img: imgBasehref + "592.png",
            name: "Frillish",
          },
          method: "Route 17/18/P2 Lab",
          _source: "* Frillish→Lv. 40→Jellicent",
        },
        {
          pokemon: {
            img: imgBasehref + "593.png",
            name: "Jellicent",
          },
          method: "Evolve Frillish at level 40",
          _source: "* Frillish→Lv. 40→Jellicent",
        },
        {
          pokemon: {
            img: imgBasehref + "594.png",
            name: "Alomomola",
          },
          method: "Route 17/18/P2 Lab",
          _source: "* Alomomola",
        },
        {
          pokemon: {
            img: imgBasehref + "636.png",
            name: "Larvesta",
          },
          method: "Route 17/18/P2 Lab",
          _source: "* Larvesta→Lv. 59→Volcarona",
        },
        {
          pokemon: {
            img: imgBasehref + "637.png",
            name: "Volcarona",
          },
          method: "Evolve Larvesta at level 59",
          _source: "* Larvesta→Lv. 59→Volcarona",
        },
        /* Two of the three Muskedeers */
        {
          pokemon: {
            img: imgBasehref + "610.png",
            name: "Axew",
          },
          method: "Two of the three Muskedeers",
          _source: "* Axew→Lv. 38→Fraxure→Lv. 48→Haxorus",
        },
        {
          pokemon: {
            img: imgBasehref + "611.png",
            name: "Fraxure",
          },
          method: "Evolve Axew at level 38",
          _source: "* Axew→Lv. 38→Fraxure→Lv. 48→Haxorus",
        },
        {
          pokemon: {
            img: imgBasehref + "612.png",
            name: "Haxorus",
          },
          method: "Evolve Fraxure at level 48",
          _source: "* Axew→Lv. 38→Fraxure→Lv. 48→Haxorus",
        },
        {
          pokemon: {
            img: imgBasehref + "638.png",
            name: "Cobalion",
          },
          method: "Two of the three Muskedeers",
          _source: "* Cobalion",
        },
        {
          pokemon: {
            img: imgBasehref + "640.png",
            name: "Virizion",
          },
          method: "Two of the three Muskedeers",
          _source: "* Virizion",
        },
        /* Twist Mountain */
        {
          pokemon: {
            img: imgBasehref + "615.png",
            name: "Cryogonal",
          },
          method: "Twist Mountain",
          _source: "* Cryogonal",
        },
        /* Icirrus City */
        {
          pokemon: {
            img: imgBasehref + "616.png",
            name: "Shelmet",
          },
          method: "Icirrus City",
          _source: "* Shelmet",
        },
        {
          pokemon: {
            img: imgBasehref + "618.png",
            name: "Stunfisk",
          },
          method: "Icirrus City",
          _source: "* Stunfisk",
        },
        /* Dragonspiral Tower */
        {
          pokemon: {
            img: imgBasehref + "619.png",
            name: "Mienfoo",
          },
          method: "Dragonspiral Tower",
          _source: "* Mienfoo→Lv. 50→Mienshao",
        },
        {
          pokemon: {
            img: imgBasehref + "620.png",
            name: "Mienshao",
          },
          method: "Evolve Mienfoo at level 50",
          _source: "* Mienfoo→Lv. 50→Mienshao",
        },
        {
          pokemon: {
            img: imgBasehref + "621.png",
            name: "Druddigon",
          },
          method: "Dragonspiral Tower",
          _source: "* Druddigon",
        },
      ],
    },
    "pre-badge-8-opelucid-gym": {
      headerTitle: "Pre Badge #8 (Opelucid Gym)",
      summaryShort:
        "Black Exclusive: White Exclusive: As with most pokemon games, it’s usually around gym 7 that you need to take on the evil team. Once you’ve beaten Brycen, you’ll be urged to go to Dragonspiral Tower where Team Plasma have broken in. Knock out the gru",
      summaryHtml: `
<p>
  Black Exclusive: White Exclusive: As with most pokemon games, it’s usually around gym 7 that you need to take on the evil team. Once you’ve beaten Brycen, you’ll be urged to go to Dragonspiral Tower where Team Plasma have broken in. Knock out the grunts on the way up the tower and look out for a wild Golett! Reaching the top you’ll find that N has already awakened the opposite box legendary to yours and will become Champion of Unova.
</p>

<pre>
Golett→Lv. 43→Golurk
</pre>

<p>
  You will then be asked to go to Relic Castle in the desert off of Route 4 where you can knock out more grunts and find out that the stone you are looking for isn’t there. Lenora will shortly give this to you when you revisit her in Nacrene City. You can now resume your challenge!
</p>

<h5>Route 9</h5>

<p>
  From Icirrus City, head through the Moors of Icirrus and onto Tubeline Bridge where Bianca will challenge you. Cross the bridge afterwards to reach a very small route which also houses the largest Pokemart in Unova. In the wild grass here you’ll find a Pawniard.
</p>

<pre>
Pawniard→Lv. 52→Bisharp
</pre>

<h5>Opelucid City and Route 10</h5>

<p>
  When you reach Opelucid City further events will unfold with Ghetsis and you’ll also be asked to speak to Iris and Drayden about how to resurrect your box legendary. Afterwards you are free to head onto Route 10 out the northern side of the city. This route leads up to Victory Road and will naturally be full of strong trainers. If you dive into the grass here you’ll encounter either a Vullaby or Rufflet as well as a Bouffalant. And with that, you’ve caught everything in this short section!
</p>

<pre>
(B) Vullaby→Lv. 54→Mandibuzz
(W) Rufflet→Lv. 54→Braviary
Bouffalant
</pre>

<h5>Levelling up tips</h5>

<p>
  Once again we have very high evolution levels for most of our pokemon, particularly Pawniard and Vullaby/Rufflet. Training against Audino is of course the best solution although the trainers in the area as well as in the gym will give good exp. Audino, if a high enough level, will now start to know Heal Pulse, a move which recovers your HP, making training against it much easier (even though Pawniard and Golett laugh off any damaging moves).
</p>
`,
      rows: [
        /* Unknown */
        {
          pokemon: {
            img: imgBasehref + "622.png",
            name: "Golett",
          },
          method: "Unknown",
          _source: "* Golett→Lv. 43→Golurk",
        },
        {
          pokemon: {
            img: imgBasehref + "623.png",
            name: "Golurk",
          },
          method: "Evolve Golett at level 43",
          _source: "* Golett→Lv. 43→Golurk",
        },
        /* Route 9 */
        {
          pokemon: {
            img: imgBasehref + "624.png",
            name: "Pawniard",
          },
          method: "Route 9",
          _source: "* Pawniard→Lv. 52→Bisharp",
        },
        {
          pokemon: {
            img: imgBasehref + "625.png",
            name: "Bisharp",
          },
          method: "Evolve Pawniard at level 52",
          _source: "* Pawniard→Lv. 52→Bisharp",
        },
        /* Opelucid City and Route 10 */
        {
          pokemon: {
            img: imgBasehref + "629.png",
            name: "Vullaby",
          },
          method: "Opelucid City and Route 10",
          _source: "* (B) Vullaby→Lv. 54→Mandibuzz",
        },
        {
          pokemon: {
            img: imgBasehref + "630.png",
            name: "Mandibuzz",
          },
          method: "Evolve Vullaby at level 54",
          _source: "* (B) Vullaby→Lv. 54→Mandibuzz",
        },
        {
          pokemon: {
            img: imgBasehref + "627.png",
            name: "Rufflet",
          },
          method: "Opelucid City and Route 10",
          _source: "* (W) Rufflet→Lv. 54→Braviary",
        },
        {
          pokemon: {
            img: imgBasehref + "628.png",
            name: "Braviary",
          },
          method: "Evolve Rufflet at level 54",
          _source: "* (W) Rufflet→Lv. 54→Braviary",
        },
        {
          pokemon: {
            img: imgBasehref + "626.png",
            name: "Bouffalant",
          },
          method: "Opelucid City and Route 10",
          _source: "* Bouffalant",
        },
      ],
    },
    "pre-elite-four": {
      headerTitle: "Pre Elite Four",
      summaryShort:
        "Black Exclusive: White Exclusive: As soon as you leave the gym, Professor Juniper will give you a Master Ball! Chasing the legend Oh boy, a roaming pokemon! Everyone’s favourite type of legendary…If you enter Route 10 you’ll be stopped and informed t",
      summaryHtml: `
<p>
  Black Exclusive: White Exclusive: As soon as you leave the gym, Professor Juniper will give you a Master Ball!
</p>

<h5>Chasing the legend</h5>

<p>
  Oh boy, a roaming pokemon! Everyone’s favourite type of legendary…If you enter Route 10 you’ll be stopped and informed that there’s strange weather on Route 7. Head to the rest house just east of Celestial Tower and you’ll unlock your version exclusive roaming legendary. For Black, it’s Tornadus. For White, it’s Thundurus. To get a clue as to their whereabouts, check the notice boards in the gates between cities/routes and it will state where there is a strange storm. Head to that route and you’ll know straight away if it’s there because of extreme weather. If there’s no crazy weather, simply enter and exit the route. Dive into the grass and hope to encounter it. If the weather stops after a random encounter with a standard pokemon, leave and re-enter the route to get the weather back. Usual rules apply here for roaming pokemon…Their HP remains the same between encounters, ditto for status effects. This means that you can get its HP into the red and inflict a status on it (e.g. paralysis/sleep) and simply throw a Quick Ball next time you encounter it for a decent chance. It will always flee on its first turn, but this is a low priority, meaning that you can attack first regardless of speed. You can of course use things like Mean Look to keep it trapped if you want to battle it legitimately. You can also use the Master Ball if you want but I’d strongly recommend keeping it since the above strategy worked fine for me, it only took about five Quick Balls to catch it.
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
Deino→Lv. 50→Zweilous→Lv. 64→Hydreigon
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
`,
      rows: [
        /* Chasing the legend */
        {
          pokemon: {
            img: imgBasehref + "641.png",
            name: "Tornadus",
          },
          method: "Chasing the legend",
          _source: "* (B) Tornadus",
        },
        {
          pokemon: {
            img: imgBasehref + "642.png",
            name: "Thundurus",
          },
          method: "Chasing the legend",
          _source: "* (W) Thundurus",
        },
        /* Victory Road */
        {
          pokemon: {
            img: imgBasehref + "632.png",
            name: "Durant",
          },
          method: "Victory Road",
          _source: "* Durant",
        },
        {
          pokemon: {
            img: imgBasehref + "631.png",
            name: "Heatmor",
          },
          method: "Victory Road",
          _source: "* Heatmor",
        },
        {
          pokemon: {
            img: imgBasehref + "633.png",
            name: "Deino",
          },
          method: "Victory Road",
          _source: "* Deino→Lv. 50→Zweilous→Lv. 64→Hydreigon",
        },
        {
          pokemon: {
            img: imgBasehref + "634.png",
            name: "Zweilous",
          },
          method: "Evolve Deino at level 50",
          _source: "* Deino→Lv. 50→Zweilous→Lv. 64→Hydreigon",
        },
        {
          pokemon: {
            img: imgBasehref + "635.png",
            name: "Hydreigon",
          },
          method: "Evolve Zweilous at level 64",
          _source: "* Deino→Lv. 50→Zweilous→Lv. 64→Hydreigon",
        },
        {
          pokemon: {
            img: imgBasehref + "639.png",
            name: "Terrakion",
          },
          method: "Victory Road",
          _source: "* Terrakion",
        },
      ],
    },
    "pre-final-showdown": {
      headerTitle: "Pre Final Showdown",
      summaryShort:
        "Black Exclusive: White Exclusive: The Final Showdown After defeating the four core members of the Elite Four, you’ll find that Alder has been defeated and N is the new Champion. Team Galactic’s castle will then surround the place and you’ll need to v",
      summaryHtml: `
<p>
  Black Exclusive: White Exclusive:
</p>

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
`,
      rows: [
        /* The Final Showdown */
        {
          pokemon: {
            img: imgBasehref + "643.png",
            name: "Reshiram",
          },
          method: "The Final Showdown",
          _source: "* (B) Reshiram",
        },
        {
          pokemon: {
            img: imgBasehref + "644.png",
            name: "Zekrom",
          },
          method: "The Final Showdown",
          _source: "* (W) Zekrom",
        },
      ],
    },
    "post-game": {
      headerTitle: "Post Game",
      summaryShort:
        "Black Exclusive: White Exclusive: If you’re a hard-core POC player, then of course you’re going to carry on the challenge into the post-game! Straight off the bat once you load your game you’ll be given the Super Rod and the National Pokedex and can ",
      summaryHtml: `
<p>
  Black Exclusive: White Exclusive: If you’re a hard-core POC player, then of course you’re going to carry on the challenge into the post-game! Straight off the bat once you load your game you’ll be given the Super Rod and the National Pokedex and can jump straight in to catching those National Dex mons!
</p>

<h5>Swarms</h5>

<p>
  A staple of pokemon post-game sections, there are pokemon from other regions that have decided to randomly appear throughout Unova on specific days. If you visit one of the electronic boards within the gates it will tell you where there is an outbreak. You can soft reset for these, so when you load your game up for the day, go straight to the board and if it’s a repeat of a pokemon you already have, simply soft reset and try again. Some of these are on routes we have yet to visit but here’s the complete list:
</p>

<pre>
Route 1 - Farfetch’d
Route 2 - Wynaut→Lv. 15→Wobbuffet
Route 3 - (B) Volbeat
Route 3 - (W) Illumise
Route 4 - Hippopotas→Lv. 34→Hippowdon
Route 5 - Smeargle
Route 6 - (B) Plusle
Route 6 - (W) Minun
Route 7 - Sentret→Lv. 15→Furret
Route 8 - Croagunk→Lv. 37→Toxicroak
Route 9 - (B) Houndour→Lv. 24→Houndoom
Route 9 - (W) Poochyena→Lv. 18→Mightyena
Route 10 - Tyrogue→Lv. 20 Atk higher than Def→Hitmonlee
Route 10 - Tyrogue→Lv. 20 Def higher than Atk→Hitmonchan
Route 10 - Tyrogue→Lv. 20 Atk and Def equal→Hitmontop
Route 11 - (B) Shroomish→Lv. 23→Breloom
Route 11 - (W) Paras→Lv. 24→Parasect
Route 12 - Doduo→Lv. 31→Dodrio
Route 13 - Shuppet→Lv. 37→Banette
Route 14 - Yanma→Level up knowing Ancient Power→Yanmega
Route 15 - Mankey→Lv. 28→Primeape
Route 16 - Pineco→Lv. 31→Forretress
Route 18 - Exeggcute→Leaf Stone→Exeggutor
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
Kabuto→Lv. 40→Kabutops
Omanyte→Lv. 40→Omastar
Aerodactyl
Lileep→Lv. 40→Cradily
Anorith→Lv. 40→Armaldo
Cranidos→Lv. 30→Rampardos
Shieldon→Lv. 30→Bastiodon
</pre>

<h5>Super Fishing Tour</h5>

<p>
  You may have noticed that the fishing rod we were given is the first fishing rod of the game. That’s right, the Old and Good Rods were abolished in these games and your only opportunity to hook those water pokemon begins now. There are some additional routes we can visit, but let’s look at what we can fish by revisiting old routes. With the rippling water we can actually fish some trade evolution pokemon which is great since we can’t trade. The down side is that, like shaking grass, it’s usually only a 5% chance to encounter them. Watch out particularly for Politoed which knows Perish Song! You can also catch the evolved versions of pokemon whilst fishing so it’s up to you if you want to catch the evolved version or level up the unevolved ones (which are generally high levelled anyway). This may be an attractive option for stone evolution pokemon too in case you don’t have enough to save you from running around for dust clouds. I haven’t listed this, but the evolved forms will obviously be on the same routes as their pre-evolutions.
</p>

<pre>
Feebas (Route 1)
Milotic (Route 1 Rippling Water)
Finneon→Lv. 31→Lumineon (Route 17)
Horsea→Lv. 32→Seadra (Route 17)
Kingdra (Route 17 Rippling Water)
Qwilfish (Route 17 Rippling Water)
Goldeen→Lv. 33→Seaking (Route 3)
Krabby→Lv. 28→Kingler (Route 4)
Luvdisc (Route 4)
Clamperl (Route 4)
(B) Huntail (Route 4 Rippling Water)
(W) Gorebyss (Route 4 Rippling Water)
Relicanth (Route 4 Rippling Water)
Chinchou→Lv. 27→Lanturn (Driftveil City)
Poliwag→Lv. 25→Poliwhirl→Water Stone→Poliwrath (Route 6)
Politoed (Route 6 Rippling Water)
Barboach→Lv. 30→Whiscash (Icirrus City)
Dratini→Lv. 30→Dragonair→Lv. 55→Dragonite (Dragonspiral Tower Exterior)
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
Lickitung→Level up knowing Rollout→Lickilicky
Mawile
Sableye
Riolu→Happiness during the day→Lucario
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
  Now it’s time to enter eastern Unova where a bunch of national dex pokemon have decided to show up and be contained in this one side of the region (barring the above pokemon we’ve just caught!). East from Opelucid City you’ll be able to pass the guard and enter Route 11. Enter the grass for four new pokemon - Zangoose, Seviper, Gligar and Golduck. You will get a Razor Fang for Gliscor at Abundant Shrine (coming up) but if you’re really desperate, you can catch a Gliscor as a 5% shaking grass encounter. Surfing on this route will let you find a Buizel and fishing yields nothing new.
</p>

<pre>
Zangoose
Seviper
Gligar→Level up at night holding Razor Fang→Gliscor
Golduck
Buizel→Lv. 26→Floatzel
</pre>

<h5>Village Bridge</h5>

<p>
  My favourite location in Unova due to the music that you can adjust by talking to the musicians. The grass in the village will let you catch a Bibarel, otherwise it’s the same kinds of pokemon from Route 11. Head down to the waterfront and fish for a Carvanha (Sharpedo in rippling water) and prepare to run around lots to get water ripples to appear for a 5% chance of encountering Lapras. It’s very rare, very hard to catch and known Perish Song as well!
</p>

<pre>
Bibarel
Carvanha→Lv. 30→Sharpedo
Lapras
</pre>

<h5>Route 12</h5>

<p>
  So many pokemon to catch here! With the exception of Tranquill, every single pokemon here is new to you. Pokemon Black players get to find Kakuna, with White players getting Metapod.
</p>

<pre>
Rapidash
(B) Kakuna→Lv. 10→Beedrill
(W) Metapod→Lv. 10→Butterfree
Heracross
Pinsir
Dunsparce
Combee (female)→Lv. 21→Vespiquen
Cherrim
Sunkern→Sun Stone→Sunflora
</pre>

<h5>Route 13</h5>

<p>
  Head past Lacunosa Town after healing up and continue east onto Route 13. You’ll notice a boulder in the way which you can Surf around to which will provide a shortcut to Giant Chasm (visited at the end of the challenge). Like with Route 12, there’s a lot of pokemon to catch. In fact every standard grass encounter is a new pokemon. Golbat is another happiness evolution to consider catching it in a Luxury Ball or breeding it and raising the Zubat from level 1 with higher base happiness. Surf around to catch a Wingull (or simply breed Pelipper) as well as a Staryu and check out the water ripples for a Corsola encounter. Throw in your Super Rod for a chance to catch a Shellder. There’s also a Razor Claw to be grabbed in this route for a Sneasel evolution coming up as well as getting it as a potential gift from the pool of random items that the man in a black suit with glasses will give you daily.
</p>

<pre>
Tangela→Level up knowing Ancient Power→Tangrowth
Lunatone
Solrock
Absol
Pelipper
Drifblim
Golbat→Happiness→Crobat
Swellow
Staryu→Water Stone→Starmie
Corsola
Shellder→Water Stone→Cloyster
</pre>

<h5>Undella Town</h5>

<p>
  South from Route 13 you’ll hit the beautiful seaside resort of Undella. Surf around for a Mantyke which you can evolve with Remoraid in your party which coincidentally can be fished here too! Alternatively you can catch a Mantine by surfing on the rippling water. Surfing on rippling water will also let you find Wailmer quite frequently. You can also battle Cynthia, the Sinnoh Champion, during Spring/Summer. There’s also an in game trade during the Summer where you can obtain Munchlax by offering a Cincinno that you will already have.
</p>

<pre>
Mantyke→Level up with Remoraid in party→Mantine
Remoraid→Lv. 25→Octillery
Wailmer→Lv. 40→Wailord
Munchlax→Happiness→Snorlax
</pre>

<h5>Undella Bay</h5>

<p>
  The sea to the right has mostly the same pokemon but with one extra that is only available during the Winter which is frustrating after requiring the above Munchlax trade in summer. You will find the idea of changing the date on your DS very attractive in this instance! In Winter, surf around for a Spheal.
</p>

<pre>
Spheal→Lv. 32→Sealeo→Lv. 44→Walrein
</pre>

<h5>Route 14</h5>

<p>
  Ignore the waterfalls for now, we will be heading up there shortly. For now, run around in the grass to find another bunch of new pokemon. Namely, Jigglypuff, Tropius, Altaria and Shuckle. Nothing new in the water unfortunately.
</p>

<pre>
Jigglypuff→Moon Stone→Wigglytuff
Tropius
Shuckle
Altaria
</pre>

<h5>Abundant Shrine</h5>

<p>
  Now you can climb the waterfalls on Route 14 and as you wind around the top of the falls you’ll eventually reach an opening to Abundant Shrine, the home of Landorus. As this legendary pokemon requires a Tornadus from Black and Thundurus from White, this won’t be possible to obtain in this challenge. There are very few pokemon here that you haven’t caught yet so there’s lots of running in the grass to be done. You’ll find Vulpix, Chimecho, Noctowl, Stantler, Bronzong and a version exclusive - Murkrow for Black, Misdreavus for White. Surfing in the water will help you find a Slowpoke whilst BOTH of its evolved forms can be found in rippling water which is good news for Slowking who is a trade evolution pokemon.
</p>

<pre>
Vulpix→Fire Stone→Ninetales
Chimecho
Noctowl
Stantler
Bronzong
(B) Murkrow→Dusk Stone→Honchkrow
(W) Misdreavus→Dusk Stone→Mismagius
Slowpoke→Lv. 37→Slowbro
Slowking
</pre>

<h5>Black City/White Forest</h5>

<p>
  These two locations depend on which version you are playing. There is also a unique factor with these places where the number of residents depend on how long it’s taken you to reach this place. In Black, this is a great training spot and you can buy evolution items (including stones) if the right people reside here. Take advantage of this ASAP as they can and will disappear over time if left alone. If you’re playing White, this is a place where wild pokemon live as long as the right person is residing there. If there’s no named residents (you can see their name when you talk to them) then no grass or water will appear in the forest. If you are playing White, it’s best that you skip this section or your dex totals won’t match the guide. If you’re wanting to capture all the pokemon in White Forest, you’ll need two separate DS’s each with a different version. This obviously bends the rules of the challenge, so we will leave this until the end of the challenge as a bonus section. Of course if you’re insistent on catching pokemon just because there’s grass/water areas already there, make you sure you take this into consideration with the dex totals at the end of this section.
</p>

<h5>Route 15/Marvellous Bridge</h5>

<p>
  We’ve almost reached the end of our journey. This is the location of the Pokemon Transfer Lab, used to shift pokemon from Gen 4 into Gen 5. But of course we won’t do that with the rules of the challenge. In the grass you’ll find Kangaskhan, Fearow, Pupitar and Marowak.  There is also an in game trade where you can trade a Ditto for a Rotom. Enter the caravan/trailer to find the NPC. Ditto will be caught at Giant Chasm (our next location). Head out onto Marvellous Bridge and in a nice call back to the original pokemon games, you can buy a Magikarp. Make sure you have a spare slot. Unlike every other game, Magikarp is NOT common…In fact this is the only way to obtain one!
</p>

<pre>
Kangaskhan
Fearow
Pupitar→Lv. 55→Tyranitar
Marowak
Rotom
Magikarp→Lv. 20→Gyarados
</pre>

<h5>Giant Chasm</h5>

<p>
  This is it, the last location. North west of Lacunosa Town on the other side of the Strength boulder. The grass outside the entrance has nothing new, so head inside the cave to find Piloswine, Sneasel, Delibird and Jynx. Surf in the water to find Seel. Once you’ve worked your way around the cave to go through the central exit, you’ll be outside again. In this foggy crater you’ll be able to catch a Clefairy, Metang and Ditto. If you navigate the area correctly you’ll reach a small pond at which point the whole area will freeze over letting you access a cave at the northern side of the chasm. In here you’ll find a super strong legendary, Kyurem. It will be at level 75 so unless you want to use your toughest pokemon and catch it legitimately, this is the encounter you want to save your Master Ball for. Dusk and Timer Balls work here as usual.
</p>

<pre>
Piloswine→Level up knowing Ancient Power→Mamoswine
Sneasel→Level up at night holding Razor Claw→Weavile
Delibird
Jynx
Seel→Lv. 34→Dewgong
Clefairy→Moon Stone→Clefable
Metang→Lv. 45→Metagross
Ditto
Kyurem
</pre>

<p>
  And that’s all the pokemon you can catch!
</p>

<h5>A Lot of Breeding</h5>

<p>
  With so many fully evolved pokemon in the post-game, their unevolved forms have been missed so we will need to breed many pokemon to get their pre-evolutions. This is made much easier with a Ditto from Giant Chasm otherwise you’ll need to worry about catching a female pokemon for breeding.
</p>

<pre>
Rattata (breed Raticate)
Ledyba (breed Ledian)
Spinarak (breed Ariados)
Kricketot (breed Kricketune)
Venonat (breed Venomoth)
Psyduck (breed Golduck)
Geodude (breed Graveler)
Sandshrew (breed Sandslash)
Baltoy (breed Claydol)
Bidoof (breed Bibarel)
(B) Weedle (breed Kakuna/Beedrill)
(W) Caterpie (breed Metapod/Butterfree)
Ponyta (breed Rapidash)
Cherubi (breed Cherrim)
Wingull (breed Pelipper)
Drifloon (breed Drifblim)
Igglybuff (breed Jigglypuff/Wigglytuff)
Zubat (breed Golbat/Crobat)
Taillow (breed Swellow)
Swablu (breed Altaria)
Chingling (breed Chimecho whilst holding a Pure Incense)
Hoothoot (breed Noctowl)
Bronzor (breed Bronzong)
Spearow (breed Fearow)
Larvitar (breed Pupitar/Tyranitar)
Cubone (breed Marowak)
Swinub (breed Piloswine/Mamoswine)
Smoochum (breed Jynx)
Cleffa (breed Clefairy/Clefable)
Beldum (breed Metang/Metagross)
</pre>

<p>
  So with everything caught, evolved and bred, we are now finished with the challenge!
</p>

<h5>Levelling up tips</h5>

<p>
  You can go anywhere and challenge anyone at this point so it’s entirely up to you. If you’ve got people in Black City, these are strong trainers who give great money and exp. If you’re sticking to traditional Audino training, I found Route 13 just above Undella Town was a great place since there weren’t as many non-Audino pokemon in the shaking grass. The Audino reach up to Level 50 so there’s some great exp to earned here. Level 50 Audino know Double Edge as their only attacking moves and also still have Heal Pulse so it’s only a 25% chance of being attacked. Anything lower than Level 50 will have Take Down instead of Double Edge. End of the challenge: Unova Pokedex - Caught 130, Remaining 26 National Pokedex - Caught 332, Remaining 317 Slightly disappointing that we can only catch just over 50% of the national dex but with White Forest we can boost it slightly further now that the challenge is over and, of course, assuming you’re playing White version. I won’t list who’s missing as that would be a big list! So who’s missing (Unova Dex)? Choices (8): With the choice of only being able to keep one starter and one fossil, the missing pokemon will be the other two starters and their evolutionary lines and the other fossil line. /      / / Version Exclusives (7): As always you can’t catch ‘em all without the other version. These are the pokemon found exclusively on the other game. Black players will be missing: White players will be missing: Trade Evolutions (4): We have their pre-evolutions but since trading is a standard POC rule, we cannot get these evolutions without connecting with a friend. Legendaries/Mythicals (5): Rare pokemon that are unavailable without an event/Mystery Gift. Landorus is in the game but requires us to have both Thundurus and Tornadus which is therefore unobtainable without trading. Miscellaneous pokemon not available in the game (2): In Black and White they made Zorua and Zoroark locked behind an event so they cannot be captured in these games. So who’s missing (National Dex)? Starters (36): Basically all the starters from the other regions. None are available in these games without migrating from previous generations. More Trade Evolutions (10): Some of these are only available through evolving White Forest exclusive pokemon and included in this section instead since you couldn’t evolve them even with access to White Forest. More Version Exclusives (11): These are the version exclusives found in the post game. Black Players will be missing: White Players will be missing: Legendaries/Mythicals (35): More legendaries all from other regions and not found in the game without migrating. White Forest Exclusive Pokemon (92): These pokemon are technically in the game but require Pokemon White with connectivity to other versions of Black to make more pokemon appear. As this includes connecting to other games they’re not required but are covered in the below bonus section. Miscellaneous pokemon not available in the game (107): Everything else that’s left. These are the remaining families of pokemon that are not found anywhere in the games and require migration from previous gens to obtain.
</p>
`,
      rows: [
        /* Swarms */
        {
          pokemon: {
            name: "Route 1 - Farfetch’d",
            parseWarning: true,
          },
          method: "Swarms",
          _source: "* Route 1 - Farfetch’d",
        },
        {
          pokemon: {
            img: imgBasehref + "360.png",
            name: "Wynaut",
          },
          method: "Swarms",
          _source: "* Route 2 - Wynaut→Lv. 15→Wobbuffet",
        },
        {
          pokemon: {
            img: imgBasehref + "202.png",
            name: "Wobbuffet",
          },
          method: "Evolve Wynaut at level 15",
          _source: "* Route 2 - Wynaut→Lv. 15→Wobbuffet",
        },
        {
          pokemon: {
            img: imgBasehref + "313.png",
            name: "Volbeat",
          },
          method: "Swarms",
          _source: "* Route 3 - (B) Volbeat",
        },
        {
          pokemon: {
            img: imgBasehref + "314.png",
            name: "Illumise",
          },
          method: "Swarms",
          _source: "* Route 3 - (W) Illumise",
        },
        {
          pokemon: {
            img: imgBasehref + "449.png",
            name: "Hippopotas",
          },
          method: "Swarms",
          _source: "* Route 4 - Hippopotas→Lv. 34→Hippowdon",
        },
        {
          pokemon: {
            img: imgBasehref + "450.png",
            name: "Hippowdon",
          },
          method: "Evolve Hippopotas at level 34",
          _source: "* Route 4 - Hippopotas→Lv. 34→Hippowdon",
        },
        {
          pokemon: {
            img: imgBasehref + "235.png",
            name: "Smeargle",
          },
          method: "Swarms",
          _source: "* Route 5 - Smeargle",
        },
        {
          pokemon: {
            img: imgBasehref + "311.png",
            name: "Plusle",
          },
          method: "Swarms",
          _source: "* Route 6 - (B) Plusle",
        },
        {
          pokemon: {
            img: imgBasehref + "312.png",
            name: "Minun",
          },
          method: "Swarms",
          _source: "* Route 6 - (W) Minun",
        },
        {
          pokemon: {
            img: imgBasehref + "161.png",
            name: "Sentret",
          },
          method: "Swarms",
          _source: "* Route 7 - Sentret→Lv. 15→Furret",
        },
        {
          pokemon: {
            img: imgBasehref + "162.png",
            name: "Furret",
          },
          method: "Evolve Sentret at level 15",
          _source: "* Route 7 - Sentret→Lv. 15→Furret",
        },
        {
          pokemon: {
            img: imgBasehref + "453.png",
            name: "Croagunk",
          },
          method: "Swarms",
          _source: "* Route 8 - Croagunk→Lv. 37→Toxicroak",
        },
        {
          pokemon: {
            img: imgBasehref + "454.png",
            name: "Toxicroak",
          },
          method: "Evolve Croagunk at level 37",
          _source: "* Route 8 - Croagunk→Lv. 37→Toxicroak",
        },
        {
          pokemon: {
            img: imgBasehref + "228.png",
            name: "Houndour",
          },
          method: "Swarms",
          _source: "* Route 9 - (B) Houndour→Lv. 24→Houndoom",
        },
        {
          pokemon: {
            img: imgBasehref + "229.png",
            name: "Houndoom",
          },
          method: "Evolve Houndour at level 24",
          _source: "* Route 9 - (B) Houndour→Lv. 24→Houndoom",
        },
        {
          pokemon: {
            img: imgBasehref + "261.png",
            name: "Poochyena",
          },
          method: "Swarms",
          _source: "* Route 9 - (W) Poochyena→Lv. 18→Mightyena",
        },
        {
          pokemon: {
            img: imgBasehref + "262.png",
            name: "Mightyena",
          },
          method: "Evolve Poochyena at level 18",
          _source: "* Route 9 - (W) Poochyena→Lv. 18→Mightyena",
        },
        {
          pokemon: {
            img: imgBasehref + "236.png",
            name: "Tyrogue",
          },
          method: "Swarms",
          _source: "* Route 10 - Tyrogue→Lv. 20 Atk higher than Def→Hitmonlee",
        },
        {
          pokemon: {
            img: imgBasehref + "106.png",
            name: "Hitmonlee",
          },
          method: "Evolve Tyrogue at level 20",
          _source: "* Route 10 - Tyrogue→Lv. 20 Atk higher than Def→Hitmonlee",
        },
        {
          pokemon: {
            img: imgBasehref + "236.png",
            name: "Tyrogue",
          },
          method: "Swarms",
          _source: "* Route 10 - Tyrogue→Lv. 20 Def higher than Atk→Hitmonchan",
        },
        {
          pokemon: {
            img: imgBasehref + "107.png",
            name: "Hitmonchan",
          },
          method: "Evolve Tyrogue at level 20",
          _source: "* Route 10 - Tyrogue→Lv. 20 Def higher than Atk→Hitmonchan",
        },
        {
          pokemon: {
            img: imgBasehref + "236.png",
            name: "Tyrogue",
          },
          method: "Swarms",
          _source: "* Route 10 - Tyrogue→Lv. 20 Atk and Def equal→Hitmontop",
        },
        {
          pokemon: {
            img: imgBasehref + "237.png",
            name: "Hitmontop",
          },
          method: "Evolve Tyrogue at level 20",
          _source: "* Route 10 - Tyrogue→Lv. 20 Atk and Def equal→Hitmontop",
        },
        {
          pokemon: {
            img: imgBasehref + "285.png",
            name: "Shroomish",
          },
          method: "Swarms",
          _source: "* Route 11 - (B) Shroomish→Lv. 23→Breloom",
        },
        {
          pokemon: {
            img: imgBasehref + "286.png",
            name: "Breloom",
          },
          method: "Evolve Shroomish at level 23",
          _source: "* Route 11 - (B) Shroomish→Lv. 23→Breloom",
        },
        {
          pokemon: {
            img: imgBasehref + "046.png",
            name: "Paras",
          },
          method: "Swarms",
          _source: "* Route 11 - (W) Paras→Lv. 24→Parasect",
        },
        {
          pokemon: {
            img: imgBasehref + "047.png",
            name: "Parasect",
          },
          method: "Evolve Paras at level 24",
          _source: "* Route 11 - (W) Paras→Lv. 24→Parasect",
        },
        {
          pokemon: {
            img: imgBasehref + "084.png",
            name: "Doduo",
          },
          method: "Swarms",
          _source: "* Route 12 - Doduo→Lv. 31→Dodrio",
        },
        {
          pokemon: {
            img: imgBasehref + "085.png",
            name: "Dodrio",
          },
          method: "Evolve Doduo at level 31",
          _source: "* Route 12 - Doduo→Lv. 31→Dodrio",
        },
        {
          pokemon: {
            img: imgBasehref + "353.png",
            name: "Shuppet",
          },
          method: "Swarms",
          _source: "* Route 13 - Shuppet→Lv. 37→Banette",
        },
        {
          pokemon: {
            img: imgBasehref + "354.png",
            name: "Banette",
          },
          method: "Evolve Shuppet at level 37",
          _source: "* Route 13 - Shuppet→Lv. 37→Banette",
        },
        {
          pokemon: {
            img: imgBasehref + "193.png",
            name: "Yanma",
          },
          method: "Swarms",
          _source: "* Route 14 - Yanma→Level up knowing Ancient Power→Yanmega",
        },
        {
          pokemon: {
            img: imgBasehref + "469.png",
            name: "Yanmega",
          },
          method: "Level up knowing Ancient Power (Yanma)",
          _source: "* Route 14 - Yanma→Level up knowing Ancient Power→Yanmega",
        },
        {
          pokemon: {
            img: imgBasehref + "056.png",
            name: "Mankey",
          },
          method: "Swarms",
          _source: "* Route 15 - Mankey→Lv. 28→Primeape",
        },
        {
          pokemon: {
            img: imgBasehref + "057.png",
            name: "Primeape",
          },
          method: "Evolve Mankey at level 28",
          _source: "* Route 15 - Mankey→Lv. 28→Primeape",
        },
        {
          pokemon: {
            img: imgBasehref + "204.png",
            name: "Pineco",
          },
          method: "Swarms",
          _source: "* Route 16 - Pineco→Lv. 31→Forretress",
        },
        {
          pokemon: {
            img: imgBasehref + "205.png",
            name: "Forretress",
          },
          method: "Evolve Pineco at level 31",
          _source: "* Route 16 - Pineco→Lv. 31→Forretress",
        },
        {
          pokemon: {
            img: imgBasehref + "102.png",
            name: "Exeggcute",
          },
          method: "Swarms",
          _source: "* Route 18 - Exeggcute→Leaf Stone→Exeggutor",
        },
        {
          pokemon: {
            img: imgBasehref + "103.png",
            name: "Exeggutor",
          },
          method: "Use Leaf Stone on Exeggcute",
          _source: "* Route 18 - Exeggcute→Leaf Stone→Exeggutor",
        },
        {
          pokemon: {
            img: imgBasehref + "314.png",
            name: "Illumise",
          },
          method: "Swarms",
          _source: "* (B) Illumise",
        },
        {
          pokemon: {
            img: imgBasehref + "313.png",
            name: "Volbeat",
          },
          method: "Swarms",
          _source: "* (W) Volbeat",
        },
        /* Fossils from Twist Mountain */
        {
          pokemon: {
            img: imgBasehref + "140.png",
            name: "Kabuto",
          },
          method: "Fossils from Twist Mountain",
          _source: "* Kabuto→Lv. 40→Kabutops",
        },
        {
          pokemon: {
            img: imgBasehref + "141.png",
            name: "Kabutops",
          },
          method: "Evolve Kabuto at level 40",
          _source: "* Kabuto→Lv. 40→Kabutops",
        },
        {
          pokemon: {
            img: imgBasehref + "138.png",
            name: "Omanyte",
          },
          method: "Fossils from Twist Mountain",
          _source: "* Omanyte→Lv. 40→Omastar",
        },
        {
          pokemon: {
            img: imgBasehref + "139.png",
            name: "Omastar",
          },
          method: "Evolve Omanyte at level 40",
          _source: "* Omanyte→Lv. 40→Omastar",
        },
        {
          pokemon: {
            img: imgBasehref + "142.png",
            name: "Aerodactyl",
          },
          method: "Fossils from Twist Mountain",
          _source: "* Aerodactyl",
        },
        {
          pokemon: {
            img: imgBasehref + "345.png",
            name: "Lileep",
          },
          method: "Fossils from Twist Mountain",
          _source: "* Lileep→Lv. 40→Cradily",
        },
        {
          pokemon: {
            img: imgBasehref + "346.png",
            name: "Cradily",
          },
          method: "Evolve Lileep at level 40",
          _source: "* Lileep→Lv. 40→Cradily",
        },
        {
          pokemon: {
            img: imgBasehref + "347.png",
            name: "Anorith",
          },
          method: "Fossils from Twist Mountain",
          _source: "* Anorith→Lv. 40→Armaldo",
        },
        {
          pokemon: {
            img: imgBasehref + "348.png",
            name: "Armaldo",
          },
          method: "Evolve Anorith at level 40",
          _source: "* Anorith→Lv. 40→Armaldo",
        },
        {
          pokemon: {
            img: imgBasehref + "408.png",
            name: "Cranidos",
          },
          method: "Fossils from Twist Mountain",
          _source: "* Cranidos→Lv. 30→Rampardos",
        },
        {
          pokemon: {
            img: imgBasehref + "409.png",
            name: "Rampardos",
          },
          method: "Evolve Cranidos at level 30",
          _source: "* Cranidos→Lv. 30→Rampardos",
        },
        {
          pokemon: {
            img: imgBasehref + "410.png",
            name: "Shieldon",
          },
          method: "Fossils from Twist Mountain",
          _source: "* Shieldon→Lv. 30→Bastiodon",
        },
        {
          pokemon: {
            img: imgBasehref + "411.png",
            name: "Bastiodon",
          },
          method: "Evolve Shieldon at level 30",
          _source: "* Shieldon→Lv. 30→Bastiodon",
        },
        /* Super Fishing Tour */
        {
          pokemon: {
            img: imgBasehref + "349.png",
            name: "Feebas",
          },
          method: "Super Fishing Tour",
          _source: "* Feebas (Route 1)",
        },
        {
          pokemon: {
            img: imgBasehref + "350.png",
            name: "Milotic",
          },
          method: "Super Fishing Tour",
          _source: "* Milotic (Route 1 Rippling Water)",
        },
        {
          pokemon: {
            img: imgBasehref + "456.png",
            name: "Finneon",
          },
          method: "Super Fishing Tour",
          _source: "* Finneon→Lv. 31→Lumineon (Route 17)",
        },
        {
          pokemon: {
            img: imgBasehref + "457.png",
            name: "Lumineon",
          },
          method: "Evolve Finneon at level 31",
          _source: "* Finneon→Lv. 31→Lumineon (Route 17)",
        },
        {
          pokemon: {
            img: imgBasehref + "116.png",
            name: "Horsea",
          },
          method: "Super Fishing Tour",
          _source: "* Horsea→Lv. 32→Seadra (Route 17)",
        },
        {
          pokemon: {
            img: imgBasehref + "117.png",
            name: "Seadra",
          },
          method: "Evolve Horsea at level 32",
          _source: "* Horsea→Lv. 32→Seadra (Route 17)",
        },
        {
          pokemon: {
            img: imgBasehref + "230.png",
            name: "Kingdra",
          },
          method: "Super Fishing Tour",
          _source: "* Kingdra (Route 17 Rippling Water)",
        },
        {
          pokemon: {
            img: imgBasehref + "211.png",
            name: "Qwilfish",
          },
          method: "Super Fishing Tour",
          _source: "* Qwilfish (Route 17 Rippling Water)",
        },
        {
          pokemon: {
            img: imgBasehref + "118.png",
            name: "Goldeen",
          },
          method: "Super Fishing Tour",
          _source: "* Goldeen→Lv. 33→Seaking (Route 3)",
        },
        {
          pokemon: {
            img: imgBasehref + "119.png",
            name: "Seaking",
          },
          method: "Evolve Goldeen at level 33",
          _source: "* Goldeen→Lv. 33→Seaking (Route 3)",
        },
        {
          pokemon: {
            img: imgBasehref + "098.png",
            name: "Krabby",
          },
          method: "Super Fishing Tour",
          _source: "* Krabby→Lv. 28→Kingler (Route 4)",
        },
        {
          pokemon: {
            img: imgBasehref + "099.png",
            name: "Kingler",
          },
          method: "Evolve Krabby at level 28",
          _source: "* Krabby→Lv. 28→Kingler (Route 4)",
        },
        {
          pokemon: {
            img: imgBasehref + "370.png",
            name: "Luvdisc",
          },
          method: "Super Fishing Tour",
          _source: "* Luvdisc (Route 4)",
        },
        {
          pokemon: {
            img: imgBasehref + "366.png",
            name: "Clamperl",
          },
          method: "Super Fishing Tour",
          _source: "* Clamperl (Route 4)",
        },
        {
          pokemon: {
            img: imgBasehref + "367.png",
            name: "Huntail",
          },
          method: "Super Fishing Tour",
          _source: "* (B) Huntail (Route 4 Rippling Water)",
        },
        {
          pokemon: {
            img: imgBasehref + "368.png",
            name: "Gorebyss",
          },
          method: "Super Fishing Tour",
          _source: "* (W) Gorebyss (Route 4 Rippling Water)",
        },
        {
          pokemon: {
            img: imgBasehref + "369.png",
            name: "Relicanth",
          },
          method: "Super Fishing Tour",
          _source: "* Relicanth (Route 4 Rippling Water)",
        },
        {
          pokemon: {
            img: imgBasehref + "170.png",
            name: "Chinchou",
          },
          method: "Super Fishing Tour",
          _source: "* Chinchou→Lv. 27→Lanturn (Driftveil City)",
        },
        {
          pokemon: {
            img: imgBasehref + "171.png",
            name: "Lanturn",
          },
          method: "Evolve Chinchou at level 27",
          _source: "* Chinchou→Lv. 27→Lanturn (Driftveil City)",
        },
        {
          pokemon: {
            img: imgBasehref + "060.png",
            name: "Poliwag",
          },
          method: "Super Fishing Tour",
          _source: "* Poliwag→Lv. 25→Poliwhirl→Water Stone→Poliwrath (Route 6)",
        },
        {
          pokemon: {
            img: imgBasehref + "061.png",
            name: "Poliwhirl",
          },
          method: "Evolve Poliwag at level 25",
          _source: "* Poliwag→Lv. 25→Poliwhirl→Water Stone→Poliwrath (Route 6)",
        },
        {
          pokemon: {
            img: imgBasehref + "062.png",
            name: "Poliwrath",
          },
          method: "Use Water Stone on Poliwhirl",
          _source: "* Poliwag→Lv. 25→Poliwhirl→Water Stone→Poliwrath (Route 6)",
        },
        {
          pokemon: {
            img: imgBasehref + "186.png",
            name: "Politoed",
          },
          method: "Super Fishing Tour",
          _source: "* Politoed (Route 6 Rippling Water)",
        },
        {
          pokemon: {
            img: imgBasehref + "339.png",
            name: "Barboach",
          },
          method: "Super Fishing Tour",
          _source: "* Barboach→Lv. 30→Whiscash (Icirrus City)",
        },
        {
          pokemon: {
            img: imgBasehref + "340.png",
            name: "Whiscash",
          },
          method: "Evolve Barboach at level 30",
          _source: "* Barboach→Lv. 30→Whiscash (Icirrus City)",
        },
        {
          pokemon: {
            img: imgBasehref + "147.png",
            name: "Dratini",
          },
          method: "Super Fishing Tour",
          _source: "* Dratini→Lv. 30→Dragonair→Lv. 55→Dragonite (Dragonspiral Tower Exterior)",
        },
        {
          pokemon: {
            img: imgBasehref + "148.png",
            name: "Dragonair",
          },
          method: "Evolve Dratini at level 30",
          _source: "* Dratini→Lv. 30→Dragonair→Lv. 55→Dragonite (Dragonspiral Tower Exterior)",
        },
        {
          pokemon: {
            img: imgBasehref + "149.png",
            name: "Dragonite",
          },
          method: "Evolve Dragonair at level 55",
          _source: "* Dratini→Lv. 30→Dragonair→Lv. 55→Dragonite (Dragonspiral Tower Exterior)",
        },
        /* Dreamyard Revisited */
        {
          pokemon: {
            img: imgBasehref + "020.png",
            name: "Raticate",
          },
          method: "Dreamyard Revisited",
          _source: "* Raticate",
        },
        {
          pokemon: {
            img: imgBasehref + "166.png",
            name: "Ledian",
          },
          method: "Dreamyard Revisited",
          _source: "* Ledian",
        },
        {
          pokemon: {
            img: imgBasehref + "168.png",
            name: "Ariados",
          },
          method: "Dreamyard Revisited",
          _source: "* Ariados",
        },
        {
          pokemon: {
            img: imgBasehref + "402.png",
            name: "Kricketune",
          },
          method: "Dreamyard Revisited",
          _source: "* Kricketune",
        },
        {
          pokemon: {
            img: imgBasehref + "049.png",
            name: "Venomoth",
          },
          method: "Dreamyard Revisited",
          _source: "* Venomoth",
        },
        /* Challenger’s Cave */
        {
          pokemon: {
            img: imgBasehref + "075.png",
            name: "Graveler",
          },
          method: "Challenger’s Cave",
          _source: "* Graveler",
        },
        {
          pokemon: {
            img: imgBasehref + "108.png",
            name: "Lickitung",
          },
          method: "Challenger’s Cave",
          _source: "* Lickitung→Level up knowing Rollout→Lickilicky",
        },
        {
          pokemon: {
            img: imgBasehref + "463.png",
            name: "Lickilicky",
          },
          method: "Level up knowing Rollout (Lickitung)",
          _source: "* Lickitung→Level up knowing Rollout→Lickilicky",
        },
        {
          pokemon: {
            img: imgBasehref + "303.png",
            name: "Mawile",
          },
          method: "Challenger’s Cave",
          _source: "* Mawile",
        },
        {
          pokemon: {
            img: imgBasehref + "302.png",
            name: "Sableye",
          },
          method: "Challenger’s Cave",
          _source: "* Sableye",
        },
        {
          pokemon: {
            img: imgBasehref + "447.png",
            name: "Riolu",
          },
          method: "Challenger’s Cave",
          _source: "* Riolu→Happiness during the day→Lucario",
        },
        {
          pokemon: {
            img: imgBasehref + "448.png",
            name: "Lucario",
          },
          method: "Evolve Riolu with happiness",
          _source: "* Riolu→Happiness during the day→Lucario",
        },
        /* Relic Castle Maze */
        {
          pokemon: {
            img: imgBasehref + "028.png",
            name: "Sandslash",
          },
          method: "Relic Castle Maze",
          _source: "* Sandslash",
        },
        {
          pokemon: {
            img: imgBasehref + "095.png",
            name: "Onix",
          },
          method: "Relic Castle Maze",
          _source: "* Onix",
        },
        {
          pokemon: {
            img: imgBasehref + "344.png",
            name: "Claydol",
          },
          method: "Relic Castle Maze",
          _source: "* Claydol",
        },
        /* Route 11 */
        {
          pokemon: {
            img: imgBasehref + "335.png",
            name: "Zangoose",
          },
          method: "Route 11",
          _source: "* Zangoose",
        },
        {
          pokemon: {
            img: imgBasehref + "336.png",
            name: "Seviper",
          },
          method: "Route 11",
          _source: "* Seviper",
        },
        {
          pokemon: {
            img: imgBasehref + "207.png",
            name: "Gligar",
          },
          method: "Route 11",
          _source: "* Gligar→Level up at night holding Razor Fang→Gliscor",
        },
        {
          pokemon: {
            img: imgBasehref + "472.png",
            name: "Gliscor",
          },
          method: "Level up at night holding Razor Fang (Gligar)",
          _source: "* Gligar→Level up at night holding Razor Fang→Gliscor",
        },
        {
          pokemon: {
            img: imgBasehref + "055.png",
            name: "Golduck",
          },
          method: "Route 11",
          _source: "* Golduck",
        },
        {
          pokemon: {
            img: imgBasehref + "418.png",
            name: "Buizel",
          },
          method: "Route 11",
          _source: "* Buizel→Lv. 26→Floatzel",
        },
        {
          pokemon: {
            img: imgBasehref + "419.png",
            name: "Floatzel",
          },
          method: "Evolve Buizel at level 26",
          _source: "* Buizel→Lv. 26→Floatzel",
        },
        /* Village Bridge */
        {
          pokemon: {
            img: imgBasehref + "400.png",
            name: "Bibarel",
          },
          method: "Village Bridge",
          _source: "* Bibarel",
        },
        {
          pokemon: {
            img: imgBasehref + "318.png",
            name: "Carvanha",
          },
          method: "Village Bridge",
          _source: "* Carvanha→Lv. 30→Sharpedo",
        },
        {
          pokemon: {
            img: imgBasehref + "319.png",
            name: "Sharpedo",
          },
          method: "Evolve Carvanha at level 30",
          _source: "* Carvanha→Lv. 30→Sharpedo",
        },
        {
          pokemon: {
            img: imgBasehref + "131.png",
            name: "Lapras",
          },
          method: "Village Bridge",
          _source: "* Lapras",
        },
        /* Route 12 */
        {
          pokemon: {
            img: imgBasehref + "078.png",
            name: "Rapidash",
          },
          method: "Route 12",
          _source: "* Rapidash",
        },
        {
          pokemon: {
            img: imgBasehref + "014.png",
            name: "Kakuna",
          },
          method: "Route 12",
          _source: "* (B) Kakuna→Lv. 10→Beedrill",
        },
        {
          pokemon: {
            img: imgBasehref + "015.png",
            name: "Beedrill",
          },
          method: "Evolve Kakuna at level 10",
          _source: "* (B) Kakuna→Lv. 10→Beedrill",
        },
        {
          pokemon: {
            img: imgBasehref + "011.png",
            name: "Metapod",
          },
          method: "Route 12",
          _source: "* (W) Metapod→Lv. 10→Butterfree",
        },
        {
          pokemon: {
            img: imgBasehref + "012.png",
            name: "Butterfree",
          },
          method: "Evolve Metapod at level 10",
          _source: "* (W) Metapod→Lv. 10→Butterfree",
        },
        {
          pokemon: {
            img: imgBasehref + "214.png",
            name: "Heracross",
          },
          method: "Route 12",
          _source: "* Heracross",
        },
        {
          pokemon: {
            img: imgBasehref + "127.png",
            name: "Pinsir",
          },
          method: "Route 12",
          _source: "* Pinsir",
        },
        {
          pokemon: {
            img: imgBasehref + "206.png",
            name: "Dunsparce",
          },
          method: "Route 12",
          _source: "* Dunsparce",
        },
        {
          pokemon: {
            img: imgBasehref + "415.png",
            name: "Combee",
          },
          method: "Route 12",
          _source: "* Combee (female)→Lv. 21→Vespiquen",
        },
        {
          pokemon: {
            img: imgBasehref + "416.png",
            name: "Vespiquen",
          },
          method: "Evolve Combee at level 21",
          _source: "* Combee (female)→Lv. 21→Vespiquen",
        },
        {
          pokemon: {
            img: imgBasehref + "421.png",
            name: "Cherrim",
          },
          method: "Route 12",
          _source: "* Cherrim",
        },
        {
          pokemon: {
            img: imgBasehref + "191.png",
            name: "Sunkern",
          },
          method: "Route 12",
          _source: "* Sunkern→Sun Stone→Sunflora",
        },
        {
          pokemon: {
            img: imgBasehref + "192.png",
            name: "Sunflora",
          },
          method: "Use Sun Stone on Sunkern",
          _source: "* Sunkern→Sun Stone→Sunflora",
        },
        /* Route 13 */
        {
          pokemon: {
            img: imgBasehref + "114.png",
            name: "Tangela",
          },
          method: "Route 13",
          _source: "* Tangela→Level up knowing Ancient Power→Tangrowth",
        },
        {
          pokemon: {
            img: imgBasehref + "465.png",
            name: "Tangrowth",
          },
          method: "Level up knowing Ancient Power (Tangela)",
          _source: "* Tangela→Level up knowing Ancient Power→Tangrowth",
        },
        {
          pokemon: {
            img: imgBasehref + "337.png",
            name: "Lunatone",
          },
          method: "Route 13",
          _source: "* Lunatone",
        },
        {
          pokemon: {
            img: imgBasehref + "338.png",
            name: "Solrock",
          },
          method: "Route 13",
          _source: "* Solrock",
        },
        {
          pokemon: {
            img: imgBasehref + "359.png",
            name: "Absol",
          },
          method: "Route 13",
          _source: "* Absol",
        },
        {
          pokemon: {
            img: imgBasehref + "279.png",
            name: "Pelipper",
          },
          method: "Route 13",
          _source: "* Pelipper",
        },
        {
          pokemon: {
            img: imgBasehref + "426.png",
            name: "Drifblim",
          },
          method: "Route 13",
          _source: "* Drifblim",
        },
        {
          pokemon: {
            img: imgBasehref + "042.png",
            name: "Golbat",
          },
          method: "Route 13",
          _source: "* Golbat→Happiness→Crobat",
        },
        {
          pokemon: {
            img: imgBasehref + "169.png",
            name: "Crobat",
          },
          method: "Evolve Golbat with happiness",
          _source: "* Golbat→Happiness→Crobat",
        },
        {
          pokemon: {
            img: imgBasehref + "277.png",
            name: "Swellow",
          },
          method: "Route 13",
          _source: "* Swellow",
        },
        {
          pokemon: {
            img: imgBasehref + "120.png",
            name: "Staryu",
          },
          method: "Route 13",
          _source: "* Staryu→Water Stone→Starmie",
        },
        {
          pokemon: {
            img: imgBasehref + "121.png",
            name: "Starmie",
          },
          method: "Use Water Stone on Staryu",
          _source: "* Staryu→Water Stone→Starmie",
        },
        {
          pokemon: {
            img: imgBasehref + "222.png",
            name: "Corsola",
          },
          method: "Route 13",
          _source: "* Corsola",
        },
        {
          pokemon: {
            img: imgBasehref + "090.png",
            name: "Shellder",
          },
          method: "Route 13",
          _source: "* Shellder→Water Stone→Cloyster",
        },
        {
          pokemon: {
            img: imgBasehref + "091.png",
            name: "Cloyster",
          },
          method: "Use Water Stone on Shellder",
          _source: "* Shellder→Water Stone→Cloyster",
        },
        /* Undella Town */
        {
          pokemon: {
            img: imgBasehref + "458.png",
            name: "Mantyke",
          },
          method: "Undella Town",
          _source: "* Mantyke→Level up with Remoraid in party→Mantine",
        },
        {
          pokemon: {
            img: imgBasehref + "226.png",
            name: "Mantine",
          },
          method: "Level up with Remoraid in party (Mantyke)",
          _source: "* Mantyke→Level up with Remoraid in party→Mantine",
        },
        {
          pokemon: {
            img: imgBasehref + "223.png",
            name: "Remoraid",
          },
          method: "Undella Town",
          _source: "* Remoraid→Lv. 25→Octillery",
        },
        {
          pokemon: {
            img: imgBasehref + "224.png",
            name: "Octillery",
          },
          method: "Evolve Remoraid at level 25",
          _source: "* Remoraid→Lv. 25→Octillery",
        },
        {
          pokemon: {
            img: imgBasehref + "320.png",
            name: "Wailmer",
          },
          method: "Undella Town",
          _source: "* Wailmer→Lv. 40→Wailord",
        },
        {
          pokemon: {
            img: imgBasehref + "321.png",
            name: "Wailord",
          },
          method: "Evolve Wailmer at level 40",
          _source: "* Wailmer→Lv. 40→Wailord",
        },
        {
          pokemon: {
            img: imgBasehref + "446.png",
            name: "Munchlax",
          },
          method: "Undella Town",
          _source: "* Munchlax→Happiness→Snorlax",
        },
        {
          pokemon: {
            img: imgBasehref + "143.png",
            name: "Snorlax",
          },
          method: "Evolve Munchlax with happiness",
          _source: "* Munchlax→Happiness→Snorlax",
        },
        /* Undella Bay */
        {
          pokemon: {
            img: imgBasehref + "363.png",
            name: "Spheal",
          },
          method: "Undella Bay",
          _source: "* Spheal→Lv. 32→Sealeo→Lv. 44→Walrein",
        },
        {
          pokemon: {
            img: imgBasehref + "364.png",
            name: "Sealeo",
          },
          method: "Evolve Spheal at level 32",
          _source: "* Spheal→Lv. 32→Sealeo→Lv. 44→Walrein",
        },
        {
          pokemon: {
            img: imgBasehref + "365.png",
            name: "Walrein",
          },
          method: "Evolve Sealeo at level 44",
          _source: "* Spheal→Lv. 32→Sealeo→Lv. 44→Walrein",
        },
        /* Route 14 */
        {
          pokemon: {
            img: imgBasehref + "039.png",
            name: "Jigglypuff",
          },
          method: "Route 14",
          _source: "* Jigglypuff→Moon Stone→Wigglytuff",
        },
        {
          pokemon: {
            img: imgBasehref + "040.png",
            name: "Wigglytuff",
          },
          method: "Use Moon Stone on Jigglypuff",
          _source: "* Jigglypuff→Moon Stone→Wigglytuff",
        },
        {
          pokemon: {
            img: imgBasehref + "357.png",
            name: "Tropius",
          },
          method: "Route 14",
          _source: "* Tropius",
        },
        {
          pokemon: {
            img: imgBasehref + "213.png",
            name: "Shuckle",
          },
          method: "Route 14",
          _source: "* Shuckle",
        },
        {
          pokemon: {
            img: imgBasehref + "334.png",
            name: "Altaria",
          },
          method: "Route 14",
          _source: "* Altaria",
        },
        /* Abundant Shrine */
        {
          pokemon: {
            img: imgBasehref + "037.png",
            name: "Vulpix",
          },
          method: "Abundant Shrine",
          _source: "* Vulpix→Fire Stone→Ninetales",
        },
        {
          pokemon: {
            img: imgBasehref + "038.png",
            name: "Ninetales",
          },
          method: "Use Fire Stone on Vulpix",
          _source: "* Vulpix→Fire Stone→Ninetales",
        },
        {
          pokemon: {
            img: imgBasehref + "358.png",
            name: "Chimecho",
          },
          method: "Abundant Shrine",
          _source: "* Chimecho",
        },
        {
          pokemon: {
            img: imgBasehref + "164.png",
            name: "Noctowl",
          },
          method: "Abundant Shrine",
          _source: "* Noctowl",
        },
        {
          pokemon: {
            img: imgBasehref + "234.png",
            name: "Stantler",
          },
          method: "Abundant Shrine",
          _source: "* Stantler",
        },
        {
          pokemon: {
            img: imgBasehref + "437.png",
            name: "Bronzong",
          },
          method: "Abundant Shrine",
          _source: "* Bronzong",
        },
        {
          pokemon: {
            img: imgBasehref + "198.png",
            name: "Murkrow",
          },
          method: "Abundant Shrine",
          _source: "* (B) Murkrow→Dusk Stone→Honchkrow",
        },
        {
          pokemon: {
            img: imgBasehref + "430.png",
            name: "Honchkrow",
          },
          method: "Use Dusk Stone on Murkrow",
          _source: "* (B) Murkrow→Dusk Stone→Honchkrow",
        },
        {
          pokemon: {
            img: imgBasehref + "200.png",
            name: "Misdreavus",
          },
          method: "Abundant Shrine",
          _source: "* (W) Misdreavus→Dusk Stone→Mismagius",
        },
        {
          pokemon: {
            img: imgBasehref + "429.png",
            name: "Mismagius",
          },
          method: "Use Dusk Stone on Misdreavus",
          _source: "* (W) Misdreavus→Dusk Stone→Mismagius",
        },
        {
          pokemon: {
            img: imgBasehref + "079.png",
            name: "Slowpoke",
          },
          method: "Abundant Shrine",
          _source: "* Slowpoke→Lv. 37→Slowbro",
        },
        {
          pokemon: {
            img: imgBasehref + "080.png",
            name: "Slowbro",
          },
          method: "Evolve Slowpoke at level 37",
          _source: "* Slowpoke→Lv. 37→Slowbro",
        },
        {
          pokemon: {
            img: imgBasehref + "199.png",
            name: "Slowking",
          },
          method: "Abundant Shrine",
          _source: "* Slowking",
        },
        /* Route 15/Marvellous Bridge */
        {
          pokemon: {
            img: imgBasehref + "115.png",
            name: "Kangaskhan",
          },
          method: "Route 15/Marvellous Bridge",
          _source: "* Kangaskhan",
        },
        {
          pokemon: {
            img: imgBasehref + "022.png",
            name: "Fearow",
          },
          method: "Route 15/Marvellous Bridge",
          _source: "* Fearow",
        },
        {
          pokemon: {
            img: imgBasehref + "247.png",
            name: "Pupitar",
          },
          method: "Route 15/Marvellous Bridge",
          _source: "* Pupitar→Lv. 55→Tyranitar",
        },
        {
          pokemon: {
            img: imgBasehref + "248.png",
            name: "Tyranitar",
          },
          method: "Evolve Pupitar at level 55",
          _source: "* Pupitar→Lv. 55→Tyranitar",
        },
        {
          pokemon: {
            img: imgBasehref + "105.png",
            name: "Marowak",
          },
          method: "Route 15/Marvellous Bridge",
          _source: "* Marowak",
        },
        {
          pokemon: {
            img: imgBasehref + "479.png",
            name: "Rotom",
          },
          method: "Route 15/Marvellous Bridge",
          _source: "* Rotom",
        },
        {
          pokemon: {
            img: imgBasehref + "129.png",
            name: "Magikarp",
          },
          method: "Route 15/Marvellous Bridge",
          _source: "* Magikarp→Lv. 20→Gyarados",
        },
        {
          pokemon: {
            img: imgBasehref + "130.png",
            name: "Gyarados",
          },
          method: "Evolve Magikarp at level 20",
          _source: "* Magikarp→Lv. 20→Gyarados",
        },
        /* Giant Chasm */
        {
          pokemon: {
            img: imgBasehref + "221.png",
            name: "Piloswine",
          },
          method: "Giant Chasm",
          _source: "* Piloswine→Level up knowing Ancient Power→Mamoswine",
        },
        {
          pokemon: {
            img: imgBasehref + "473.png",
            name: "Mamoswine",
          },
          method: "Level up knowing Ancient Power (Piloswine)",
          _source: "* Piloswine→Level up knowing Ancient Power→Mamoswine",
        },
        {
          pokemon: {
            img: imgBasehref + "215.png",
            name: "Sneasel",
          },
          method: "Giant Chasm",
          _source: "* Sneasel→Level up at night holding Razor Claw→Weavile",
        },
        {
          pokemon: {
            img: imgBasehref + "461.png",
            name: "Weavile",
          },
          method: "Level up at night holding Razor Claw (Sneasel)",
          _source: "* Sneasel→Level up at night holding Razor Claw→Weavile",
        },
        {
          pokemon: {
            img: imgBasehref + "225.png",
            name: "Delibird",
          },
          method: "Giant Chasm",
          _source: "* Delibird",
        },
        {
          pokemon: {
            img: imgBasehref + "124.png",
            name: "Jynx",
          },
          method: "Giant Chasm",
          _source: "* Jynx",
        },
        {
          pokemon: {
            img: imgBasehref + "086.png",
            name: "Seel",
          },
          method: "Giant Chasm",
          _source: "* Seel→Lv. 34→Dewgong",
        },
        {
          pokemon: {
            img: imgBasehref + "087.png",
            name: "Dewgong",
          },
          method: "Evolve Seel at level 34",
          _source: "* Seel→Lv. 34→Dewgong",
        },
        {
          pokemon: {
            img: imgBasehref + "035.png",
            name: "Clefairy",
          },
          method: "Giant Chasm",
          _source: "* Clefairy→Moon Stone→Clefable",
        },
        {
          pokemon: {
            img: imgBasehref + "036.png",
            name: "Clefable",
          },
          method: "Use Moon Stone on Clefairy",
          _source: "* Clefairy→Moon Stone→Clefable",
        },
        {
          pokemon: {
            img: imgBasehref + "375.png",
            name: "Metang",
          },
          method: "Giant Chasm",
          _source: "* Metang→Lv. 45→Metagross",
        },
        {
          pokemon: {
            img: imgBasehref + "376.png",
            name: "Metagross",
          },
          method: "Evolve Metang at level 45",
          _source: "* Metang→Lv. 45→Metagross",
        },
        {
          pokemon: {
            img: imgBasehref + "132.png",
            name: "Ditto",
          },
          method: "Giant Chasm",
          _source: "* Ditto",
        },
        {
          pokemon: {
            img: imgBasehref + "646.png",
            name: "Kyurem",
          },
          method: "Giant Chasm",
          _source: "* Kyurem",
        },
      ],
    },
    "bonus-chapter-white-forest": {
      headerTitle: "Bonus Chapter: White Forest",
      summaryShort:
        "I usually do these extra sections where the normal challenge is completed but an additional feature or peripheral allows you to catch more pokemon without trading with other versions. This requires that you do actually connect with another version. I",
      summaryHtml: `
<p>
  I usually do these extra sections where the normal challenge is completed but an additional feature or peripheral allows you to catch more pokemon without trading with other versions. This requires that you do actually connect with another version. If you’re playing White, you will need to visit Black City via Entralink. To do this, enter the Entralink using the C-Gear on the lower DS screen and select Wireless and then Entralink. Head over to one of the bridges and wait there. On Black, fire up the game, go to Black City and switch on the C-Gear. This should allow you to cross over into their Entralink which will be in black and white. You can then use the lower screen to teleport to Black City. Once you’re at the Entralink version of Black City you can invite the named residents over to your version. The pokemon that they use in battle in Black City will be available at its lowest stage at Level 5 in the grass or by surfing on the water. There is a maximum limit of 10 residents so you will need to ignore the residents once the pokemon that they bring over have been caught so that they will eventually leave when their invisible happiness gauge drops to zero. Talking to them while they’re in White Forest increases their happiness causing them to stick around longer. Even just entering White Forest increases their happiness so only come here when you’ve moved in a new resident and catch their pokemon. Once they leave, this will free up space which will then allow you to recruit more. Even if the Black version that you link to has no residents, it will in the Entralink version of that city. I connected to my Black version which hasn’t been played in years and there were two remaining named residents, but when I visited it via Entralink, there were plenty of people hanging around to invite back to White Forest. Remember that with both Nidoran, you can breed them to potentially hatch the other. Once Nidoran female has evolved into Nidorina, it cannot breed so do it early! Lotad appears both in the grass and in the water, but with it available in the water from multiple residents, you may as well skip recruiting Ralph. Some items are also available in White Forest every day depending on the residents, so you may get an evolution stone that corresponds to the pokemon you can also catch with them as a resident. The available pokemon and their relevant people are: In the grass:
</p>

<pre>
(Leo) Pidgey→Lv. 18→Pidgeotto→Lv. 36→Pidgeot
(Jacques) Nidoran female→Lv. 16→Nidorina→Moon Stone→Nidoqueen
(Ken) Nidoran male→Lv. 16→Nidorino→Moon Stone→Nidoking
(Lynette) Oddish→Lv. 21→Gloom→Leaf Stone→Vileplume
(Lynette) Oddish→Lv. 21→Gloom→Sun Stone→Bellossom
(Collin) Abra→Lv. 16→Kadabra
(Ryder) Machop→Lv. 28→Machoke
(Piper) Bellsprout→Lv. 21→Weepinbell→Leaf Stone→Victreebel
(Marie) Magnemite→Lv. 30→Magneton→Level up in Chargestone Cave→Magnezone
(Dave) Gastly→Lv. 25→Haunter
(Shane) Rhyhorn→Lv. 42→Rhydon
(Herman) Porygon
(Miki) Togepi→Happiness→Togetic→Shiny Stone→Togekiss
(Pierce) Mareep→Lv. 15→Flaaffy→Lv. 30→Ampharos
(Britney) Hoppip→Lv. 18→Skiploom→Lv. 27→Jumpluff
(Robbie) Elekid→Lv. 30→Electabuzz
(Vincent) Magby→Lv. 30→Magmar
(Silvia) Wurmple→Lv. 7→Silcoon→Lv. 10→Beautifly
(Silvia) Wurmple→Lv. 7→Cascoon→Lv. 10→Dustox
(Ralph) Lotad→Lv. 14→Lombre→Water Stone→Ludicolo
(Miho) Seedot→Lv. 14→Nuzleaf→Leaf Stone→Shiftry
(Lena) Ralts→Lv. 20→Kirlia→Lv. 30→Gardevoir
(Lena) Ralts→Lv. 20→Kirlia male→Dawn Stone→Gallade
(Karenna) Slakoth→Lv. 18→Vigoroth→Lv. 36→Slaking
(Rosa) Whismur→Lv. 20→Loudred→Lv. 40→Exploud
(Molly) Azurill→Happiness→Marill→Lv. 18→Azumarill
(Gene) Aron→Lv. 32→Lairon→Lv. 42→Aggron
(Eliza) Trapinch→Lv. 35→Vibrava→Lv. 45→Flygon
(Grace) Bagon→Lv. 30→Shelgon→Lv. 50→Salamence
(Carlos) Starly→Lv. 14→Staravia→Lv. 34→Staraptor
(Doug) Shinx→Lv. 15→Luxio→Lv. 30→Luxray
(Frederic) Budew→Happiness during the day→Roselia→Shiny Stone→Roserade
(Emi) Happiny→Level up holding Oval Stone during the day→Chansey→Happiness→Blissey
</pre>

<p>
  In the water:
</p>

<pre>
(Lena/Frederic/Herman/Grace) Wooper→Lv. 20→Quagsire
(Ryder/Karenna/Doug/Marie/Molly/Eliza/Collin/Jacques/Rosa) Lotad→Lv. 14→Lombre→Water Stone→Ludicolo
(Leo/Silvia/Dave/Britney/Robbie/Miki/Lynette/Pierce/Gene/Piper/Miho/Shane/Ralph) Surskit→Lv. 22→Masquerain
(Vincent/Carlos/Ken/Emi) Corphish→Lv. 30→Crawdaunt
</pre>

<p>
  Just under a hundred extra pokemon available which is a great boost! End of the bonus section: Unova Pokedex - Caught 130, Remaining 26 National Pokedex - Caught 424, Remaining 225 3. The End/Thanks A huge thank you to Reddit user Chamale for first inspiring me to play this challenge way back in 2018. I usually play a pokemon game by catching every pokemon on a route but never evolve them all (unless they’re on my team) until post-game. Since doing several POCs over the years I've truly appreciated the journey and the community that has grown as the challenge has had its voice heard. And a special thanks to Johnstone and Chaotic Meatball for making our Reddit so much more popular! If you would like to add any comments/thoughts/advice on improving this guide such as levelling tips, please drop me a message on Reddit u/mewlax84. Until next time! Social Media Plug: Instagram: Poké Mewlax (@pokemewlax) • Instagram photos and videos Twitter: Mewlax (@Mewlax1) / Twitter Reddit profile: mewlax84 (u/mewlax84) - Reddit
</p>
`,
      rows: [
        /* Unknown */
        {
          pokemon: {
            img: imgBasehref + "016.png",
            name: "Pidgey",
          },
          method: "Unknown",
          _source: "* (Leo) Pidgey→Lv. 18→Pidgeotto→Lv. 36→Pidgeot",
        },
        {
          pokemon: {
            img: imgBasehref + "017.png",
            name: "Pidgeotto",
          },
          method: "Evolve Pidgey at level 18",
          _source: "* (Leo) Pidgey→Lv. 18→Pidgeotto→Lv. 36→Pidgeot",
        },
        {
          pokemon: {
            img: imgBasehref + "018.png",
            name: "Pidgeot",
          },
          method: "Evolve Pidgeotto at level 36",
          _source: "* (Leo) Pidgey→Lv. 18→Pidgeotto→Lv. 36→Pidgeot",
        },
        {
          pokemon: {
            name: "(Jacques) Nidoran female",
            parseWarning: true,
          },
          method: "Unknown",
          _source: "* (Jacques) Nidoran female→Lv. 16→Nidorina→Moon Stone→Nidoqueen",
        },
        {
          pokemon: {
            img: imgBasehref + "030.png",
            name: "Nidorina",
          },
          method: "Evolve (Jacques) Nidoran female at level 16",
          _source: "* (Jacques) Nidoran female→Lv. 16→Nidorina→Moon Stone→Nidoqueen",
        },
        {
          pokemon: {
            img: imgBasehref + "031.png",
            name: "Nidoqueen",
          },
          method: "Use Moon Stone on Nidorina",
          _source: "* (Jacques) Nidoran female→Lv. 16→Nidorina→Moon Stone→Nidoqueen",
        },
        {
          pokemon: {
            name: "(Ken) Nidoran male",
            parseWarning: true,
          },
          method: "Unknown",
          _source: "* (Ken) Nidoran male→Lv. 16→Nidorino→Moon Stone→Nidoking",
        },
        {
          pokemon: {
            img: imgBasehref + "033.png",
            name: "Nidorino",
          },
          method: "Evolve (Ken) Nidoran male at level 16",
          _source: "* (Ken) Nidoran male→Lv. 16→Nidorino→Moon Stone→Nidoking",
        },
        {
          pokemon: {
            img: imgBasehref + "034.png",
            name: "Nidoking",
          },
          method: "Use Moon Stone on Nidorino",
          _source: "* (Ken) Nidoran male→Lv. 16→Nidorino→Moon Stone→Nidoking",
        },
        {
          pokemon: {
            img: imgBasehref + "043.png",
            name: "Oddish",
          },
          method: "Unknown",
          _source: "* (Lynette) Oddish→Lv. 21→Gloom→Leaf Stone→Vileplume",
        },
        {
          pokemon: {
            img: imgBasehref + "044.png",
            name: "Gloom",
          },
          method: "Evolve Oddish at level 21",
          _source: "* (Lynette) Oddish→Lv. 21→Gloom→Leaf Stone→Vileplume",
        },
        {
          pokemon: {
            img: imgBasehref + "045.png",
            name: "Vileplume",
          },
          method: "Use Leaf Stone on Gloom",
          _source: "* (Lynette) Oddish→Lv. 21→Gloom→Leaf Stone→Vileplume",
        },
        {
          pokemon: {
            img: imgBasehref + "043.png",
            name: "Oddish",
          },
          method: "Unknown",
          _source: "* (Lynette) Oddish→Lv. 21→Gloom→Sun Stone→Bellossom",
        },
        {
          pokemon: {
            img: imgBasehref + "044.png",
            name: "Gloom",
          },
          method: "Evolve Oddish at level 21",
          _source: "* (Lynette) Oddish→Lv. 21→Gloom→Sun Stone→Bellossom",
        },
        {
          pokemon: {
            img: imgBasehref + "182.png",
            name: "Bellossom",
          },
          method: "Use Sun Stone on Gloom",
          _source: "* (Lynette) Oddish→Lv. 21→Gloom→Sun Stone→Bellossom",
        },
        {
          pokemon: {
            img: imgBasehref + "063.png",
            name: "Abra",
          },
          method: "Unknown",
          _source: "* (Collin) Abra→Lv. 16→Kadabra",
        },
        {
          pokemon: {
            img: imgBasehref + "064.png",
            name: "Kadabra",
          },
          method: "Evolve Abra at level 16",
          _source: "* (Collin) Abra→Lv. 16→Kadabra",
        },
        {
          pokemon: {
            img: imgBasehref + "066.png",
            name: "Machop",
          },
          method: "Unknown",
          _source: "* (Ryder) Machop→Lv. 28→Machoke",
        },
        {
          pokemon: {
            img: imgBasehref + "067.png",
            name: "Machoke",
          },
          method: "Evolve Machop at level 28",
          _source: "* (Ryder) Machop→Lv. 28→Machoke",
        },
        {
          pokemon: {
            img: imgBasehref + "069.png",
            name: "Bellsprout",
          },
          method: "Unknown",
          _source: "* (Piper) Bellsprout→Lv. 21→Weepinbell→Leaf Stone→Victreebel",
        },
        {
          pokemon: {
            img: imgBasehref + "070.png",
            name: "Weepinbell",
          },
          method: "Evolve Bellsprout at level 21",
          _source: "* (Piper) Bellsprout→Lv. 21→Weepinbell→Leaf Stone→Victreebel",
        },
        {
          pokemon: {
            img: imgBasehref + "071.png",
            name: "Victreebel",
          },
          method: "Use Leaf Stone on Weepinbell",
          _source: "* (Piper) Bellsprout→Lv. 21→Weepinbell→Leaf Stone→Victreebel",
        },
        {
          pokemon: {
            img: imgBasehref + "081.png",
            name: "Magnemite",
          },
          method: "Unknown",
          _source: "* (Marie) Magnemite→Lv. 30→Magneton→Level up in Chargestone Cave→Magnezone",
        },
        {
          pokemon: {
            img: imgBasehref + "082.png",
            name: "Magneton",
          },
          method: "Evolve Magnemite at level 30",
          _source: "* (Marie) Magnemite→Lv. 30→Magneton→Level up in Chargestone Cave→Magnezone",
        },
        {
          pokemon: {
            img: imgBasehref + "462.png",
            name: "Magnezone",
          },
          method: "Use Level up in Chargestone Cave on Magneton",
          _source: "* (Marie) Magnemite→Lv. 30→Magneton→Level up in Chargestone Cave→Magnezone",
        },
        {
          pokemon: {
            img: imgBasehref + "092.png",
            name: "Gastly",
          },
          method: "Unknown",
          _source: "* (Dave) Gastly→Lv. 25→Haunter",
        },
        {
          pokemon: {
            img: imgBasehref + "093.png",
            name: "Haunter",
          },
          method: "Evolve Gastly at level 25",
          _source: "* (Dave) Gastly→Lv. 25→Haunter",
        },
        {
          pokemon: {
            img: imgBasehref + "111.png",
            name: "Rhyhorn",
          },
          method: "Unknown",
          _source: "* (Shane) Rhyhorn→Lv. 42→Rhydon",
        },
        {
          pokemon: {
            img: imgBasehref + "112.png",
            name: "Rhydon",
          },
          method: "Evolve Rhyhorn at level 42",
          _source: "* (Shane) Rhyhorn→Lv. 42→Rhydon",
        },
        {
          pokemon: {
            img: imgBasehref + "137.png",
            name: "Porygon",
          },
          method: "Unknown",
          _source: "* (Herman) Porygon",
        },
        {
          pokemon: {
            img: imgBasehref + "175.png",
            name: "Togepi",
          },
          method: "Unknown",
          _source: "* (Miki) Togepi→Happiness→Togetic→Shiny Stone→Togekiss",
        },
        {
          pokemon: {
            img: imgBasehref + "176.png",
            name: "Togetic",
          },
          method: "Evolve Togepi with happiness",
          _source: "* (Miki) Togepi→Happiness→Togetic→Shiny Stone→Togekiss",
        },
        {
          pokemon: {
            img: imgBasehref + "468.png",
            name: "Togekiss",
          },
          method: "Use Shiny Stone on Togetic",
          _source: "* (Miki) Togepi→Happiness→Togetic→Shiny Stone→Togekiss",
        },
        {
          pokemon: {
            img: imgBasehref + "179.png",
            name: "Mareep",
          },
          method: "Unknown",
          _source: "* (Pierce) Mareep→Lv. 15→Flaaffy→Lv. 30→Ampharos",
        },
        {
          pokemon: {
            img: imgBasehref + "180.png",
            name: "Flaaffy",
          },
          method: "Evolve Mareep at level 15",
          _source: "* (Pierce) Mareep→Lv. 15→Flaaffy→Lv. 30→Ampharos",
        },
        {
          pokemon: {
            img: imgBasehref + "181.png",
            name: "Ampharos",
          },
          method: "Evolve Flaaffy at level 30",
          _source: "* (Pierce) Mareep→Lv. 15→Flaaffy→Lv. 30→Ampharos",
        },
        {
          pokemon: {
            img: imgBasehref + "187.png",
            name: "Hoppip",
          },
          method: "Unknown",
          _source: "* (Britney) Hoppip→Lv. 18→Skiploom→Lv. 27→Jumpluff",
        },
        {
          pokemon: {
            img: imgBasehref + "188.png",
            name: "Skiploom",
          },
          method: "Evolve Hoppip at level 18",
          _source: "* (Britney) Hoppip→Lv. 18→Skiploom→Lv. 27→Jumpluff",
        },
        {
          pokemon: {
            img: imgBasehref + "189.png",
            name: "Jumpluff",
          },
          method: "Evolve Skiploom at level 27",
          _source: "* (Britney) Hoppip→Lv. 18→Skiploom→Lv. 27→Jumpluff",
        },
        {
          pokemon: {
            img: imgBasehref + "239.png",
            name: "Elekid",
          },
          method: "Unknown",
          _source: "* (Robbie) Elekid→Lv. 30→Electabuzz",
        },
        {
          pokemon: {
            img: imgBasehref + "125.png",
            name: "Electabuzz",
          },
          method: "Evolve Elekid at level 30",
          _source: "* (Robbie) Elekid→Lv. 30→Electabuzz",
        },
        {
          pokemon: {
            img: imgBasehref + "240.png",
            name: "Magby",
          },
          method: "Unknown",
          _source: "* (Vincent) Magby→Lv. 30→Magmar",
        },
        {
          pokemon: {
            img: imgBasehref + "126.png",
            name: "Magmar",
          },
          method: "Evolve Magby at level 30",
          _source: "* (Vincent) Magby→Lv. 30→Magmar",
        },
        {
          pokemon: {
            img: imgBasehref + "265.png",
            name: "Wurmple",
          },
          method: "Unknown",
          _source: "* (Silvia) Wurmple→Lv. 7→Silcoon→Lv. 10→Beautifly",
        },
        {
          pokemon: {
            img: imgBasehref + "266.png",
            name: "Silcoon",
          },
          method: "Evolve Wurmple at level 7",
          _source: "* (Silvia) Wurmple→Lv. 7→Silcoon→Lv. 10→Beautifly",
        },
        {
          pokemon: {
            img: imgBasehref + "267.png",
            name: "Beautifly",
          },
          method: "Evolve Silcoon at level 10",
          _source: "* (Silvia) Wurmple→Lv. 7→Silcoon→Lv. 10→Beautifly",
        },
        {
          pokemon: {
            img: imgBasehref + "265.png",
            name: "Wurmple",
          },
          method: "Unknown",
          _source: "* (Silvia) Wurmple→Lv. 7→Cascoon→Lv. 10→Dustox",
        },
        {
          pokemon: {
            img: imgBasehref + "268.png",
            name: "Cascoon",
          },
          method: "Evolve Wurmple at level 7",
          _source: "* (Silvia) Wurmple→Lv. 7→Cascoon→Lv. 10→Dustox",
        },
        {
          pokemon: {
            img: imgBasehref + "269.png",
            name: "Dustox",
          },
          method: "Evolve Cascoon at level 10",
          _source: "* (Silvia) Wurmple→Lv. 7→Cascoon→Lv. 10→Dustox",
        },
        {
          pokemon: {
            img: imgBasehref + "270.png",
            name: "Lotad",
          },
          method: "Unknown",
          _source: "* (Ralph) Lotad→Lv. 14→Lombre→Water Stone→Ludicolo",
        },
        {
          pokemon: {
            img: imgBasehref + "271.png",
            name: "Lombre",
          },
          method: "Evolve Lotad at level 14",
          _source: "* (Ralph) Lotad→Lv. 14→Lombre→Water Stone→Ludicolo",
        },
        {
          pokemon: {
            img: imgBasehref + "272.png",
            name: "Ludicolo",
          },
          method: "Use Water Stone on Lombre",
          _source: "* (Ralph) Lotad→Lv. 14→Lombre→Water Stone→Ludicolo",
        },
        {
          pokemon: {
            img: imgBasehref + "273.png",
            name: "Seedot",
          },
          method: "Unknown",
          _source: "* (Miho) Seedot→Lv. 14→Nuzleaf→Leaf Stone→Shiftry",
        },
        {
          pokemon: {
            img: imgBasehref + "274.png",
            name: "Nuzleaf",
          },
          method: "Evolve Seedot at level 14",
          _source: "* (Miho) Seedot→Lv. 14→Nuzleaf→Leaf Stone→Shiftry",
        },
        {
          pokemon: {
            img: imgBasehref + "275.png",
            name: "Shiftry",
          },
          method: "Use Leaf Stone on Nuzleaf",
          _source: "* (Miho) Seedot→Lv. 14→Nuzleaf→Leaf Stone→Shiftry",
        },
        {
          pokemon: {
            img: imgBasehref + "280.png",
            name: "Ralts",
          },
          method: "Unknown",
          _source: "* (Lena) Ralts→Lv. 20→Kirlia→Lv. 30→Gardevoir",
        },
        {
          pokemon: {
            img: imgBasehref + "281.png",
            name: "Kirlia",
          },
          method: "Evolve Ralts at level 20",
          _source: "* (Lena) Ralts→Lv. 20→Kirlia→Lv. 30→Gardevoir",
        },
        {
          pokemon: {
            img: imgBasehref + "282.png",
            name: "Gardevoir",
          },
          method: "Evolve Kirlia at level 30",
          _source: "* (Lena) Ralts→Lv. 20→Kirlia→Lv. 30→Gardevoir",
        },
        {
          pokemon: {
            img: imgBasehref + "280.png",
            name: "Ralts",
          },
          method: "Unknown",
          _source: "* (Lena) Ralts→Lv. 20→Kirlia male→Dawn Stone→Gallade",
        },
        {
          pokemon: {
            img: imgBasehref + "281.png",
            name: "Kirlia",
          },
          method: "Evolve Ralts at level 20",
          _source: "* (Lena) Ralts→Lv. 20→Kirlia male→Dawn Stone→Gallade",
        },
        {
          pokemon: {
            img: imgBasehref + "475.png",
            name: "Gallade",
          },
          method: "Use Dawn Stone on Kirlia",
          _source: "* (Lena) Ralts→Lv. 20→Kirlia male→Dawn Stone→Gallade",
        },
        {
          pokemon: {
            img: imgBasehref + "287.png",
            name: "Slakoth",
          },
          method: "Unknown",
          _source: "* (Karenna) Slakoth→Lv. 18→Vigoroth→Lv. 36→Slaking",
        },
        {
          pokemon: {
            img: imgBasehref + "288.png",
            name: "Vigoroth",
          },
          method: "Evolve Slakoth at level 18",
          _source: "* (Karenna) Slakoth→Lv. 18→Vigoroth→Lv. 36→Slaking",
        },
        {
          pokemon: {
            img: imgBasehref + "289.png",
            name: "Slaking",
          },
          method: "Evolve Vigoroth at level 36",
          _source: "* (Karenna) Slakoth→Lv. 18→Vigoroth→Lv. 36→Slaking",
        },
        {
          pokemon: {
            img: imgBasehref + "293.png",
            name: "Whismur",
          },
          method: "Unknown",
          _source: "* (Rosa) Whismur→Lv. 20→Loudred→Lv. 40→Exploud",
        },
        {
          pokemon: {
            img: imgBasehref + "294.png",
            name: "Loudred",
          },
          method: "Evolve Whismur at level 20",
          _source: "* (Rosa) Whismur→Lv. 20→Loudred→Lv. 40→Exploud",
        },
        {
          pokemon: {
            img: imgBasehref + "295.png",
            name: "Exploud",
          },
          method: "Evolve Loudred at level 40",
          _source: "* (Rosa) Whismur→Lv. 20→Loudred→Lv. 40→Exploud",
        },
        {
          pokemon: {
            img: imgBasehref + "298.png",
            name: "Azurill",
          },
          method: "Unknown",
          _source: "* (Molly) Azurill→Happiness→Marill→Lv. 18→Azumarill",
        },
        {
          pokemon: {
            img: imgBasehref + "183.png",
            name: "Marill",
          },
          method: "Evolve Azurill with happiness",
          _source: "* (Molly) Azurill→Happiness→Marill→Lv. 18→Azumarill",
        },
        {
          pokemon: {
            img: imgBasehref + "184.png",
            name: "Azumarill",
          },
          method: "Evolve Marill at level 18",
          _source: "* (Molly) Azurill→Happiness→Marill→Lv. 18→Azumarill",
        },
        {
          pokemon: {
            img: imgBasehref + "304.png",
            name: "Aron",
          },
          method: "Unknown",
          _source: "* (Gene) Aron→Lv. 32→Lairon→Lv. 42→Aggron",
        },
        {
          pokemon: {
            img: imgBasehref + "305.png",
            name: "Lairon",
          },
          method: "Evolve Aron at level 32",
          _source: "* (Gene) Aron→Lv. 32→Lairon→Lv. 42→Aggron",
        },
        {
          pokemon: {
            img: imgBasehref + "306.png",
            name: "Aggron",
          },
          method: "Evolve Lairon at level 42",
          _source: "* (Gene) Aron→Lv. 32→Lairon→Lv. 42→Aggron",
        },
        {
          pokemon: {
            img: imgBasehref + "328.png",
            name: "Trapinch",
          },
          method: "Unknown",
          _source: "* (Eliza) Trapinch→Lv. 35→Vibrava→Lv. 45→Flygon",
        },
        {
          pokemon: {
            img: imgBasehref + "329.png",
            name: "Vibrava",
          },
          method: "Evolve Trapinch at level 35",
          _source: "* (Eliza) Trapinch→Lv. 35→Vibrava→Lv. 45→Flygon",
        },
        {
          pokemon: {
            img: imgBasehref + "330.png",
            name: "Flygon",
          },
          method: "Evolve Vibrava at level 45",
          _source: "* (Eliza) Trapinch→Lv. 35→Vibrava→Lv. 45→Flygon",
        },
        {
          pokemon: {
            img: imgBasehref + "371.png",
            name: "Bagon",
          },
          method: "Unknown",
          _source: "* (Grace) Bagon→Lv. 30→Shelgon→Lv. 50→Salamence",
        },
        {
          pokemon: {
            img: imgBasehref + "372.png",
            name: "Shelgon",
          },
          method: "Evolve Bagon at level 30",
          _source: "* (Grace) Bagon→Lv. 30→Shelgon→Lv. 50→Salamence",
        },
        {
          pokemon: {
            img: imgBasehref + "373.png",
            name: "Salamence",
          },
          method: "Evolve Shelgon at level 50",
          _source: "* (Grace) Bagon→Lv. 30→Shelgon→Lv. 50→Salamence",
        },
        {
          pokemon: {
            img: imgBasehref + "396.png",
            name: "Starly",
          },
          method: "Unknown",
          _source: "* (Carlos) Starly→Lv. 14→Staravia→Lv. 34→Staraptor",
        },
        {
          pokemon: {
            img: imgBasehref + "397.png",
            name: "Staravia",
          },
          method: "Evolve Starly at level 14",
          _source: "* (Carlos) Starly→Lv. 14→Staravia→Lv. 34→Staraptor",
        },
        {
          pokemon: {
            img: imgBasehref + "398.png",
            name: "Staraptor",
          },
          method: "Evolve Staravia at level 34",
          _source: "* (Carlos) Starly→Lv. 14→Staravia→Lv. 34→Staraptor",
        },
        {
          pokemon: {
            img: imgBasehref + "403.png",
            name: "Shinx",
          },
          method: "Unknown",
          _source: "* (Doug) Shinx→Lv. 15→Luxio→Lv. 30→Luxray",
        },
        {
          pokemon: {
            img: imgBasehref + "404.png",
            name: "Luxio",
          },
          method: "Evolve Shinx at level 15",
          _source: "* (Doug) Shinx→Lv. 15→Luxio→Lv. 30→Luxray",
        },
        {
          pokemon: {
            img: imgBasehref + "405.png",
            name: "Luxray",
          },
          method: "Evolve Luxio at level 30",
          _source: "* (Doug) Shinx→Lv. 15→Luxio→Lv. 30→Luxray",
        },
        {
          pokemon: {
            img: imgBasehref + "406.png",
            name: "Budew",
          },
          method: "Unknown",
          _source: "* (Frederic) Budew→Happiness during the day→Roselia→Shiny Stone→Roserade",
        },
        {
          pokemon: {
            img: imgBasehref + "315.png",
            name: "Roselia",
          },
          method: "Evolve Budew with happiness",
          _source: "* (Frederic) Budew→Happiness during the day→Roselia→Shiny Stone→Roserade",
        },
        {
          pokemon: {
            img: imgBasehref + "407.png",
            name: "Roserade",
          },
          method: "Use Shiny Stone on Roselia",
          _source: "* (Frederic) Budew→Happiness during the day→Roselia→Shiny Stone→Roserade",
        },
        {
          pokemon: {
            img: imgBasehref + "440.png",
            name: "Happiny",
          },
          method: "Unknown",
          _source: "* (Emi) Happiny→Level up holding Oval Stone during the day→Chansey→Happiness→Blissey",
        },
        {
          pokemon: {
            img: imgBasehref + "113.png",
            name: "Chansey",
          },
          method: "Use Level up holding Oval Stone during the day on Happiny",
          _source: "* (Emi) Happiny→Level up holding Oval Stone during the day→Chansey→Happiness→Blissey",
        },
        {
          pokemon: {
            img: imgBasehref + "242.png",
            name: "Blissey",
          },
          method: "Evolve Chansey with happiness",
          _source: "* (Emi) Happiny→Level up holding Oval Stone during the day→Chansey→Happiness→Blissey",
        },
        {
          pokemon: {
            img: imgBasehref + "194.png",
            name: "Wooper",
          },
          method: "Unknown",
          _source: "* (Lena/Frederic/Herman/Grace) Wooper→Lv. 20→Quagsire",
        },
        {
          pokemon: {
            img: imgBasehref + "195.png",
            name: "Quagsire",
          },
          method: "Evolve Wooper at level 20",
          _source: "* (Lena/Frederic/Herman/Grace) Wooper→Lv. 20→Quagsire",
        },
        {
          pokemon: {
            img: imgBasehref + "270.png",
            name: "Lotad",
          },
          method: "Unknown",
          _source: "* (Ryder/Karenna/Doug/Marie/Molly/Eliza/Collin/Jacques/Rosa) Lotad→Lv. 14→Lombre→Water Stone→Ludicolo",
        },
        {
          pokemon: {
            img: imgBasehref + "271.png",
            name: "Lombre",
          },
          method: "Evolve Lotad at level 14",
          _source: "* (Ryder/Karenna/Doug/Marie/Molly/Eliza/Collin/Jacques/Rosa) Lotad→Lv. 14→Lombre→Water Stone→Ludicolo",
        },
        {
          pokemon: {
            img: imgBasehref + "272.png",
            name: "Ludicolo",
          },
          method: "Use Water Stone on Lombre",
          _source: "* (Ryder/Karenna/Doug/Marie/Molly/Eliza/Collin/Jacques/Rosa) Lotad→Lv. 14→Lombre→Water Stone→Ludicolo",
        },
        {
          pokemon: {
            img: imgBasehref + "283.png",
            name: "Surskit",
          },
          method: "Unknown",
          _source: "* (Leo/Silvia/Dave/Britney/Robbie/Miki/Lynette/Pierce/Gene/Piper/Miho/Shane/Ralph) Surskit→Lv. 22→Masquerain",
        },
        {
          pokemon: {
            img: imgBasehref + "284.png",
            name: "Masquerain",
          },
          method: "Evolve Surskit at level 22",
          _source: "* (Leo/Silvia/Dave/Britney/Robbie/Miki/Lynette/Pierce/Gene/Piper/Miho/Shane/Ralph) Surskit→Lv. 22→Masquerain",
        },
        {
          pokemon: {
            img: imgBasehref + "341.png",
            name: "Corphish",
          },
          method: "Unknown",
          _source: "* (Vincent/Carlos/Ken/Emi) Corphish→Lv. 30→Crawdaunt",
        },
        {
          pokemon: {
            img: imgBasehref + "342.png",
            name: "Crawdaunt",
          },
          method: "Evolve Corphish at level 30",
          _source: "* (Vincent/Carlos/Ken/Emi) Corphish→Lv. 30→Crawdaunt",
        },
      ],
    },
  },
};
