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
<p class="tips-source">
        <a href="${guideLink}" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
</section>
`,

  progression: {
    "badge-1": {
      headerTitle: "Part 1 - Pre Badge #1 (Striaton Gym)",
      headerImg: "",
      headerImgAlt: "",

      summaryShort: "This first part will cover everything you can do from the get-go right up to the Striaton City Gym BEFORE you get that first badge from Cilan/Chili/Cress. This WILL take a while so it will really test your patience…",

      summaryHtml: `
<p>
This first part will cover everything you can do from the get-go right up to the Striaton City Gym BEFORE you get that first badge from Cilan/Chili/Cress. This WILL take a while so it will really test your patience…
</p>

<h5>Nuvema Town</h5>

<p>
Very early on as you start the game, your neighbours, Bianca and Cheren, will visit you and you’ll all get to pick a starter pokemon. You’ll be lucky enough to pick first. Honestly, there’s no real advantage to any of the starters as they all evolve at level 36. There’s also no real type advantage against the wild pokemon as you’ll only be battling three different types of wild pokemon for the entire section – Patrat, Lillipup and Purrloin. Go visit Professor Juniper and you’ll each get a pokedex meaning that we can now register our starter.
</p>

<pre>
Snivy --(Lv. 17)-->Servine--(Lv. 36)-->Serperior
OR
* Tepig--(Lv. 17)-->Pignite--(Lv. 36)-->Emboar
OR
* Oshawott--(Lv. 17)-->Dewott--(Lv. 36)-->Samurott
</pre>

<h5>Route 1</h5>

<p>
Leave your home town via the northern exit and you’ll get the usual capture tutorial. Bianca then challenges you and Cheren to a catching contest. There’s only two pokemon to catch here and if you catch them both, you win. Unfortunately there’s no prize!
</p>

<pre>
Lillipup--(Lv. 16)-->Herdier--(Lv. 32)-->Stoutland
Patrat--(Lv. 20)-->Watchog
</pre>

<p>
Lillipup has two abilities which can come in handy. Vital Spirit means that, if it’s in the lead spot (even if KO’d), higher level pokemon are more likely to appear. The other ability is Pickup, which you will need later on in the game for various items or you can use it in this section to get Rare Candies. It loses both of these abilities when it evolves, so consider carefully when to do that (if at all).
</p>

<h5>Accumula Town and Route 2</h5>

<p>
Once you arrive in Accumula Town, Professor Juniper will show you the ropes and introduce you to the pokemon center. Once you’re healed up, you’ll see Team Plasma making an announcement in the square. You’ll also get your first interaction with N, who will battle you with his Purrloin. Victorious, head west out of the town and proceed through Route 2. You’ll get the Running Shoes which will help with getting into battles faster. There’s an extra pokemon to be caught here, Purrloin. You’ll also get to battle Bianca here again.
</p>

<pre>
Purrloin--(Lv. 20)-->Liepard
</pre>

<h5>Striaton City and the Dream Yard</h5>

<p>
Arriving in the next town already, stop by the pokemon center and heal up of course. The first gym is here! There’s a couple of things you can do here. Visit the Trainer School and you’ll be able to battle Cheren. You can enter the gym itself and battle the two regular trainers. I would strongly recommend leaving as many trainer battles as possible until your starter is at level 35. If you go west out of Striaton City you’ll be blocked off pretty quickly so that way is a no-go. East out of Striaton is the Dream Yard. The place is currently blocked off here too, so we won’t be able to get into the grassy area yet. There is a young lady here who will give you a pokemon based on your starter.
</p>

<p>
(Chose Snivy) Panpour OR (Chose Tepig) Pansage OR (Chose Oshawott) Pansear
</p>

<p>
And with that we’ve hit the wall already! We need to fully evolve everything before we tackle the gym leader.
</p>

<h5>Levelling up tips</h5>

<p>
Wow, so we’ve only got FOUR pokemon to evolve. Easy! Well, maybe not…As mentioned already, the exp gain is horrible to you in this game. Training a pokemon up to Level 36 is a mammoth task. If your rules allow it, train a Pickup squad (5 Lillipup with Pickup) but the downside to this is that they need to be at least Lv21 to get Rare Candies, which means you’ll have to put in a lot of effort just to assemble the squad in the first place. There are also very limited areas you can train. Literally, Route 2 is your best spot. If you decide to be crazy and grind it out like me without Rare Candies, this will take AGES. Like, 50+hours and several thousand wild battles. For four pokemon. I kept my pokemon unevolved as long as possible so they’d get more attacking moves ASAP to be able to defeat more pokemon without healing. Whilst you’re grinding, consider putting a KO’d Vital Spirit Lillipup in the lead slot so that you’re more likely to get those level 7 Patrat and Lillipup. As painful as this is, Black 2/White 2 are far worse. Try to delay battling Cheren and the gym trainers until your starter has only one level to go. The craziness is that a Lv10 Lillipup owned by the gym trainers gives TRIPLE exp compared to battling a wild Lv7 Lillipup so definitely take advantage of this when it’s most needed.
</p>

<p>
End of part 1: Caught 11, Remaining 145
</p>
`,

      summaryOpen: false,

      rows: [
        /* --------------------------- Route 1 ---------------------------- */
        {
          pokemon: {
            img: imgBasehref + "506.png",
            name: "Lillipup",
          },
          method: "Catch in the grass on Route 1",
        },
        {
          pokemon: {
            img: imgBasehref + "507.png",
            name: "Herdier",
          },
          method: "Evolve Lillipup at level 16",
        },
        {
          pokemon: {
            img: imgBasehref + "508.png",
            name: "Stoutland",
          },
          method: "Evolve Herdier at level 32",
        },
        {
          pokemon: {
            img: imgBasehref + "504.png",
            name: "Patrat",
          },
          method: "Catch in the grass on Route 1",
        },
        {
          pokemon: {
            img: imgBasehref + "505.png",
            name: "Watchog",
          },
          method: "Evolve Patrat at level 20",
        },

        /* --------------------------- Accumula Town and Route 2 ---------------------------- */
        {
          pokemon: {
            img: imgBasehref + "509.png",
            name: "Purrloin",
          },
          method: "Catch in the grass on Route 2",
        },
        {
          pokemon: {
            img: imgBasehref + "510.png",
            name: "Liepard",
          },
          method: "Evolve Purrloin at level 20",
        },

        /* --------------------------- Starter Choice Rows ---------------------------- */
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "snivy",
          pokemon: {
            img: imgBasehref + "495.png",
            name: "Snivy",
          },
          method: "Pick this starter to show the Snivy line",
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "tepig",
          pokemon: {
            img: imgBasehref + "498.png",
            name: "Tepig",
          },
          method: "Pick this starter to show the Tepig line",
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "oshawott",
          pokemon: {
            img: imgBasehref + "501.png",
            name: "Oshawott",
          },
          method: "Pick this starter to show the Oshawott line",
        },

        /* --------------------------- Snivy Line ---------------------------- */
        {
          pokemon: {
            img: imgBasehref + "495.png",
            name: "Snivy",
          },
          method: "Chhose as your starter",

          requires: {
            starter: "snivy",
          },
        },
        {
          pokemon: {
            img: imgBasehref + "496.png",
            name: "Servine",
          },
          method: "Evolve Snivy at level 17",

          requires: {
            starter: "snivy",
          },
        },
        {
          pokemon: {
            img: imgBasehref + "497.png",
            name: "Serperior",
          },
          method: "Evolve Servine at level 36",

          requires: {
            starter: "snivy",
          },
        },
        {
          pokemon: {
            img: imgBasehref + "515.png",
            name: "Panpour",
          },
          method: "Dreamyard Gift Monkey (Chose Snivy)",

          requires: {
            starter: "snivy",
          },
        },

        /* --------------------------- Tepig Line ---------------------------- */
        {
          pokemon: {
            img: imgBasehref + "498.png",
            name: "Tepig",
          },
          method: "Chhose as your starter",

          requires: {
            starter: "tepig",
          },
        },
        {
          pokemon: {
            img: imgBasehref + "499.png",
            name: "Pignite",
          },
          method: "Evolve Tepig at level 17",

          requires: {
            starter: "tepig",
          },
        },
        {
          pokemon: {
            img: imgBasehref + "500.png",
            name: "Emboar",
          },
          method: "Evolve Pignite at level 36",

          requires: {
            starter: "tepig",
          },
        },
        {
          pokemon: {
            img: imgBasehref + "511.png",
            name: "Pansage",
          },
          method: "Dreamyard Gift Monkey (Chose Snivy)",

          requires: {
            starter: "tepig",
          },
        },

        /* --------------------------- Oshawott Line ---------------------------- */
        {
          pokemon: {
            img: imgBasehref + "501.png",
            name: "Oshawott",
          },
          method: "Chhose as your starter",

          requires: {
            starter: "oshawott",
          },
        },
        {
          pokemon: {
            img: imgBasehref + "502.png",
            name: "Dewott",
          },
          method: "Evolve Oshawott at level 17",

          requires: {
            starter: "oshawott",
          },
        },
        {
          pokemon: {
            img: imgBasehref + "503.png",
            name: "Samurott",
          },
          method: "Evolve Dewott at level 36",

          requires: {
            starter: "oshawott",
          },
        },
        {
          pokemon: {
            img: imgBasehref + "513.png",
            name: "Pansear",
          },
          method: "Dreamyard Gift Monkey (Chose Snivy)",

          requires: {
            starter: "oshawott",
          },
        },
      ],
    },
  },
};
