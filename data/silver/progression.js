/* ----------------------
 - img src: https://archives.bulbagarden.net/wiki/Category:Silver_sprites
 - Guide: https://docs.google.com/document/d/1fXwvGspNnlGn9fw-SAJxVyDjYxQ43TOV38sgWhbaIT8/edit?tab=t.0
----------------------- */
window.gameData = {
  gameId: "silver",
  gameTitle: "Silver",
  logo: "assets/images/logos/silver.png",
  aboutHtml: `
  <section class="game-intro-content">
      <ul>
        <li>Although it’s a step up from Gen 1, I still found the move sets for pokemon pretty lacking/slow. A prime example near the start of the game is Hoppip who literally only knows Tackle (and not until Lv10) as an attacking move even if you left it unevolved right up until level 26 into Skiploom and level 27 into Jumpluff. You also still have the problem of PC boxes being full (though you can get a PokeGear call when that happens), lack of running shoes/Vs Seeker, your bag getting full etc.</li>
        <li>This will be a very grindy challenge. If you don’t think you’ve got the patience, then now would be the time to back out. The first part of the game alone (before Falkner) will take you tens of hours! It gets less grindy as the game proceeds, but it will be a long road. </li>
        <li>Learning new moves shouldn’t be taken for granted, particularly with pokemon that evolve at higher levels. During a normal game you might be quick to replace Cyndaquil’s Tackle with Swift but getting rid of non-attacking moves is a better strategy here. Also consider stopping your pokemon from evolving if they are a three stage evolution so that you can learn more/better moves. Again, on the first part of the challenge before Falkner, you are battling low level pokemon and will run out of PP very quickly while your exp gained goes up very slowly. You need to maximize the amount of pokemon you can defeat, so having multiple attacking moves, regardless of how weak they are, will be beneficial. You have no need for moves like Growl or Sand Attack.</li>
        <li>Time of day – As these were the first games to introduce a clock, there are multiple pokemon only available during the morning/day/night so be aware of them. Morning is 4am-9:59am, Day is 10am-5:59pm and Night is 6pm-3:59am</li>
        <li>This challenge is a fun alternative to a regular play through and you may really appreciate having to train pokemon up yourself that you never trained before. On the other hand you may end up despising certain pokemon due to their inability to attack when you first get them or their generally poor levelling up moves. </li>
        <li>It’s not really a rule, but my preferred method is that you train them yourself except when they can’t battle themselves (i.e. Magikarp before it learns Tackle). This is all down to your own limitations that you set. I don’t like using Rare Candy anymore as it defeats the purpose of the challenge and I don’t like using any exp sharing items. But remember that this is YOUR challenge so feel free to add or remove restrictions as you see fit.</li>
        <li>Please note that this is not a full guide to the game, I am only listing the pokemon you can catch at the earliest opportunities and any required items. I do not go into full detail on optimal exp gains or where to find the highest level for an individual pokemon etc. This playthrough and guide were done as a casual play rather than a speed run. Please consult other guides for a full walkthrough or more detailed information. </li>
      </ul>
      <p class="tips-source">
        <a href="https://docs.google.com/document/d/1fXwvGspNnlGn9fw-SAJxVyDjYxQ43TOV38sgWhbaIT8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
    </section>`,
  progression: {
    "falkner": {
      headerTitle: "Pre Badge #1 - Falkner",
      headerImg: "assets/images/Gold/badges/Spr_GS_Falkner.png",
      headerImgAlt: "Falkner as he appeared in Pokemon Gold and Silver",

      summaryShort: `This first part will cover everything you can do BEFORE you get that first badge from Falkner. This is probably the most daunting part of the challenge…Before you start you need to ask yourself whether you’re a sane or an insane person. The difference being that an insane person will have a Wigglytuff before Falkner. If you are insane, read the below on how to get a Moon Stone before Falkner. Even if you aren’t going for the Moon Stone, you should have it for section 2 of the challenge, but you’ll need to make sure you’re smart with your money, try to make every pokeball count and don’t bother with buying anything. This is what you need to do before starting the challenge properly:`,
      summaryHtml: `
        <h5>Moon Stone</h5>
        <p>
          When you leave New Bark Town after delivering the egg to Professor Elm, your mother will offer to save your money for you (speak to her before leaving). With every trainer that you defeat, a quarter of the winnings go to her automatically. But this isn’t going to be enough so we need to give her as much money as we can by going home and manually depositing it to her. Once the savings reach a certain amount, she will call you to say that she’s purchased something for you and deposited it in your PC items. The catch is that to trigger this phone call you need to defeat a trainer where your mother is already at the required threshold, or the money she receives from this battle will push her over that threshold. This means that you need to keep trainers available for battle each time she’s about to purchase an item since you can’t rematch anyone yet. The trainers at the Violet City Gym won’t count as you won’t get a signal in there (so defeat them for money), but trainers on routes and in Sprout Tower WILL trigger the call. I kept the sages towards the top of Sprout Tower completely free until I knew exactly how many left I’d need as I’d already hit the first threshold before I’d reached them.
        </p>
        <p>The thresholds and items purchased are as follows:</p>
        <pre>
          P900 – Super Potion
          P4,000 – Repel
          P7,000 – Super Potion
          P10,000 – Charmander Doll
          P15,000 – Moon Stone
        </pre>
        <p>
          Now when she buys these, obviously her savings are going to drop down so in total you actually need P18,270 in total. So how do we get this much money? Don’t buy a single item which includes pokeballs. You will ONLY be using your starter in battles until you’ve got the Moon Stone. You need to pick up every available item. Shake every berry tree, grab every item on the ground in all areas accessible and even pick up invisible items (refer to a hidden items guide for locations/screenshots). There are also two of the weekday siblings available who give you items, one from Arthur of Thursday on Route 36 (by Sudowoodo) and one from Tuscany of Tuesday on Route 29. Try to get these before you start adjusting the clock as they might not appear. Sell EVERYTHING including any items that your mother buys and deposit as much money as you can as early as you can so you can bump the first threshold with trainers on Route 30/31. Once you’ve sold everything and done as much as you possibly can, you are going to be short of reaching the 15k by a considerable amount. So how do we get the rest of the money? Berries. They replenish daily and sell for a whopping P5 each. With five trees available (Route 29, Route 30, outside Mr. Pokemon’s house, Route 31 and Route 32) you can only make P25 a day. You will need to adjust the clock either via DS clock settings for Virtual Console or using a password reset generator:
          <a href="http://www.psypokes.com/gsc/timechange.php" target="_blank" rel="noopener noreferrer">http://www.psypokes.com/gsc/timechange.php</a>
        </p>
        <p>
          Save in front of a berry tree, change the clock to refresh the berries, pick the berry, save the game and repeat. Sell them all once you’ve accumulated enough, deposit the money with your mother and defeat a trainer to trigger the phone call. Once you’ve got the Moon Stone you can retrieve all of your money and blow it on as many pokeballs as you like!
        </p>
        <p>
          SingingShyGuy wrote a more in depth guide on getting a Moon Stone so please check it out:
          <a href="https://docs.google.com/document/d/1_040Dw1ln72dl5iMWtu_ljizeR_FszF3H0hJlSWzqKo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Moon Stone Guide</a>
        </p>

        <h5>New Bark Town</h5>
        <p>
          Set the clock and start your game. You’ll get a PokeGear from your Mother and you can then head straight off to Professor Elm’s lab. He’ll ask you to visit Mr. Pokemon (real original name) and will let you take a pokemon partner with you. Of course you can only pick one:
        </p>
        <pre>
          Chikorita → (Lv. 16) → Bayleef → (Lv. 32) → Meganium
          OR
          Cyndaquil → (Lv. 14) → Quilava → (Lv. 36) → Typhlosion
          OR
          Totodile → (Lv. 18) → Croconaw → (Lv. 30) → Feraligatr
        </pre>
        <p>
          This is entirely up to you whether you want to pick pokemon because they’re your favourite or if you want to make the Professor Oak Challenge easier/harder. In terms of type match up, Chikorita is the one that you don’t particularly want as there are a lot of bug/flying/poison types at the start of the game. In terms of evolution, Totodile is the easier option as it can be fully evolved at Lv. 30, Cyndaquil fully evolves at Lv. 36 and Chikorita’s final evolution is in between at Lv. 32. The challenge doesn’t really kick off until you’ve got your pokedex and some pokeballs so head on up to Mr. Pokemon’s house, return to New Bark Town and your challenge will begin!
        </p>

        <h5>Route 29</h5>
        <p>
          Straight out of New Bark Town, several pokemon are here that appear at different times of the day. Pidgey and Sentret can be found during Morning/Day, Hoothoot at night and Rattata at all times of the day.
        </p>
        <pre>
          Pidgey → (Lv. 18) → Pidgeotto → (Lv. 36) → Pidgeot
          Sentret → (Lv. 15) → Furret
          Hoothoot → (Lv. 20) → Noctowl
          Rattata → (Lv. 20) → Raticate
        </pre>

        <h5>Route 46</h5>
        <p>
          Go through the northern gate on the route to reach the lower section of Route 46, a place you won’t be able to fully explore until MUCH later in the game. Here you’ll be able to catch several new pokemon. Spearow is the only time specific pokemon, appearing any time except night.
        </p>
        <pre>
          Geodude → (Lv. 25) → Graveler
          Jigglypuff → (Moon Stone) → Wigglytuff
          Spearow → (Lv. 20) → Fearow
        </pre>
        <p>
          Graveler will become our first trade evolution so it won’t be available to us. Evolving Jigglypuff into Wigglytuff obviously depends on whether you’ve decided to go for the Moon Stone for the first section.
        </p>

        <h5>Route 30</h5>
        <p>
          Pass through Cherrygrove City and head north to Route 30. You’ll find your first version exclusive as well as a pseudo one (can be caught later). You’ll find Caterpie (Gold) or Weedle (Silver) during Morning/Day and your version exclusive will either be Spinarak (Gold) available only at night or Ledyba (Silver) available only during the morning.
        </p>
        <pre>
          Weedle → (Lv. 7) → Kakuna → (Lv. 10) → Beedrill
          Ledyba → (Lv. 18) → Ledian
        </pre>

        <h5>Route 31</h5>
        <p>
          Head further north onto Route 31 where you’ll be able to catch a Bellsprout at all times of the day.
        </p>
        <pre>
          Bellsprout → (Lv. 21) → Weepinbell
        </pre>
        <p>There’s no Leaf Stone available yet so we’ll look at this later. Make sure you catch a second Bellsprout for a trade coming up shortly.</p>

        <h5>Dark Cave</h5>
        <p>
          Instead of heading west to Violet City, home of the first gym, go into the cave. You won’t get far (and it’s dark in there anyway) but you’ll be able to stumble far enough to catch a Zubat and a super rare 1% encounter Dunsparce.
        </p>
        <pre>
          Zubat → (Lv. 22) → Golbat → (Happiness Anytime) → Crobat
          Dunsparce
        </pre>
        <p>Make sure you keep Zubat in your team at all times so that Golbat will evolve quickly into Crobat after all the running around you’ll be doing.</p>

        <h5>Violet City</h5>
        <p>
          It’s not time for the gym yet! In one of the houses in town you’ll find someone who wants to trade an Onix for your Bellsprout. Definitely do this as you can’t catch Onix until later. If you go to Sprout Tower you’ll be able to catch a Gastly at night. If you want to clear out the tower you’ll get the HM for Flash at the top.
        </p>
        <pre>
          Gastly → (Lv. 25) → Haunter
          Onix
        </pre>

        <h5>Ruins of Alph</h5>
        <p>
          If you leave from either the West or South exits of Violet City, you’ll eventually end up at the Ruins of Alph where you can solve the first of the tile puzzles and encounter some forms of Unown. Catch one (or more if you want the full set later on) but be aware that they may flee.
        </p>
        <pre>
          Unown
        </pre>

        <p>And that’s the end of catching for the first section of the challenge.</p>

        <h5>Levelling up tips</h5>
        <p>
          This will be the longest part of your challenge and is made even more painful without any way to rematch trainers or cycle. The real killers are getting that fully evolved starter and Pidgeot. I tend to continuously battle using the same pokemon until it runs out of PP or is KO’d or you could level each pokemon up in your team once and then switch your lead pokemon to make it less tedious.
        </p>
        <p>
          In terms of location, it depends on the pokemon you’re training. Sprout Tower at night is great for training against Gastly although getting into random encounters can be a bit slow. If you can’t hit Ghost types then you may want to consider either Ruins of Alph, Dark Cave (for Geodude) or Route 31 (for Bellsprout). Consider leaving your starter and Pidgey unevolved so that they learn moves quicker to help deal with the sheer number of wild pokemon you’ll need to KO.
        </p>

        <p>
          <strong>End of part 1:</strong><br/>
          (With Moon Stone) Caught 33, Remaining 218<br/>
          (Without Moon Stone) Caught 32, Remaining 219
        </p>
        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1fXwvGspNnlGn9fw-SAJxVyDjYxQ43TOV38sgWhbaIT8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
        `,
      rows: [
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "chikorita",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_152.png", name: "Chikorita" },
          method: "Pick this starter to show the Chikorita line"
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "cyndaquil",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_155.png", name: "Cyndaquil" },
          method: "Pick this starter to show the Cyndaquil line"
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "totodile",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_158.png", name: "Totodile" },
          method: "Pick this starter to show the Totodile line"
        },

        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_152.png", name: "Chikorita" },
          method: "Choose as Starter",
          requires: { starter: "chikorita" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_153.png", name: "Bayleef" },
          method: "Evolve from Chikorita at level 16",
          requires: { starter: "chikorita" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_154.png", name: "Meganium" },
          method: "Evolve from Bayleef at level 32",
          requires: { starter: "chikorita" }
        },

        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_155.png", name: "Cyndaquil" },
          method: "Choose as Starter",
          requires: { starter: "cyndaquil" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_156.png", name: "Quilava" },
          method: "Evolve from Cyndaquil at level 14",
          requires: { starter: "cyndaquil" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_157.png", name: "Typhlosion" },
          method: "Evolve from Quilava at level 36",
          requires: { starter: "cyndaquil" }
        },

        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_158.png", name: "Totodile" },
          method: "Choose as Starter",
          requires: { starter: "totodile" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_159.png", name: "Croconaw" },
          method: "Evolve from Totodile at level 18",
          requires: { starter: "totodile" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_160.png", name: "Feraligatr" },
          method: "Evolve from Croconaw at level 30",
          requires: { starter: "totodile" }
        },

        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_016.png", name: "Pidgey" },
          method: "Catch on Route 29 (Morning/Day)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_017.png", name: "Pidgeotto" },
          method: "Evolve from Pidgey at level 18"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_018.png", name: "Pidgeot" },
          method: "Evolve from Pidgeotto at level 36"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_161.png", name: "Sentret" },
          method: "Catch on Route 29 (Morning/Day)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_162.png", name: "Furret" },
          method: "Evolve from Sentret at level 15"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_163.png", name: "Hoothoot" },
          method: "Catch on Route 29 (Night)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_164.png", name: "Noctowl" },
          method: "Evolve from Hoothoot at level 20"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_019.png", name: "Rattata" },
          method: "Catch on Route 29 (All day)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_020.png", name: "Raticate" },
          method: "Evolve from Rattata at level 20"
        },

        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_074.png", name: "Geodude" },
          method: "Catch on Route 46 (lower section)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_075.png", name: "Graveler" },
          method: "Evolve from Geodude at level 25"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_039.png", name: "Jigglypuff" },
          method: "Catch on Route 46"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_040.png", name: "Wigglytuff" },
          method: "Use a Moon Stone on Jigglypuff"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_021.png", name: "Spearow" },
          method: "Catch on Route 46 (not at night)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_022.png", name: "Fearow" },
          method: "Evolve from Spearow at level 20"
        },

        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_013.png", name: "Weedle" },
          method: "Catch on Route 30 (Silver, Morning/Day)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_014.png", name: "Kakuna" },
          method: "Evolve from Weedle at level 7"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_015.png", name: "Beedrill" },
          method: "Evolve from Kakuna at level 10"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_165.png", name: "Ledyba" },
          method: "Catch on Route 30 (Silver, Morning)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_166.png", name: "Ledian" },
          method: "Evolve from Ledyba at level 18"
        },

        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_069.png", name: "Bellsprout" },
          method: "Catch on Route 31 (any time)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_070.png", name: "Weepinbell" },
          method: "Evolve from Bellsprout at level 21"
        },

        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_041.png", name: "Zubat" },
          method: "Catch in Dark Cave"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_042.png", name: "Golbat" },
          method: "Evolve from Zubat at level 22"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_169.png", name: "Crobat" },
          method: "Evolve from Golbat with high Friendship"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_206.png", name: "Dunsparce" },
          method: "Catch in Dark Cave (very rare)"
        },

        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_092.png", name: "Gastly" },
          method: "Catch in Sprout Tower (Night)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_093.png", name: "Haunter" },
          method: "Evolve from Gastly at level 25"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_095.png", name: "Onix" },
          method: "Trade Bellsprout → Onix (Violet City)"
        },

        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_201F.png", name: "Unown" },
          method: "Ruins of Alph (after tile puzzle)"
        }
      ]
    },
    "bugsy": {
      headerTitle: "Pre Badge #2 - Bugsy",
      headerImg: "assets/images/Gold/badges/Spr_GS_Bugsy.png",
      headerImgAlt: "Bugsy as he appeared in Pokemon Gold and Silver",

      summaryShort: `You need to seriously consider getting the Moon Stone in this section as it’s a lot more feasible. Refer to the Moon Stone section at the beginning of the guide. Sell everything you have including pokeballs and your new TM (don’t worry you’ll get money to buy more pokeballs) before heading south from Violet City and deposit everything to your mother, making sure she will save money for you otherwise your winnings don’t get sent to her. The differences here are that you obviously have more trainers to battle to make some more money but make sure you leave enough trainers to trigger the phone calls once your mother has reached the thresholds. Trainers in Union Cave won’t trigger the calls (bad reception) so feel free to defeat them all as well as the trainers in the gym except for Bugsy of course. If you’re short on money still, you will have to repeat the daily berry trick but it’s much easier. Instead of berries, do this with the white Apricorn outside Kurt’s house which sell for P100 each which means you’ll have to do this a lot less than in section 1! Once you have the Moon Stone, retrieve your money and buy pokeballs and resume the challenge.`,
      summaryHtml: `
        <p>
          Jigglypuff → (Moon Stone) → Wigglytuff
        </p>

        <p>
          With Falkner defeated you’ll get a call from Professor Elm stating that one of his aides is in the pokemon center with a present for you. It’s an egg! This will eventually hatch into Togepi which you want to keep in your party so that it’s happiness increases whilst grinding.
        </p>
        <pre>
          Togepi → (Happiness) → Togetic
        </pre>

        <h5>Route 32</h5>
        <p>
          Heading south from Violet City (skipping Ruins of Alph) you can access the next route where you’ll find a bunch of new pokemon at various times of the day. Mareep is available at all times, Hoppip during the morning/day and Wooper during the night/morning. If you’re playing Silver you’ll also be able to catch Ekans at all times of the day.
        </p>
        <pre>
          Mareep → (Lv. 15) → Flaaffy → (Lv. 30) → Ampharos
          Hoppip → (Lv. 18) → Skiploom → (Lv. 27) → Jumpluff
          Wooper → (Lv. 20) → Quagsire
          Ekans → (Lv. 22) → Arbok
        </pre>
        <p>
          Whilst on this route you will eventually find a pokemon center where you can talk to a man inside to get the Old Rod.
        </p>

        <h5>Old Fishing Tour</h5>
        <p>
          With this worn out rod in our possession we can catch several new pokemon by backtracking. If you get Fisherman Ralph’s phone number here on Route 32 it’s possible to catch Qwilfish at this point. If you go back home and change Daylight Savings Time (DST) with your Mother then there’s a high chance that one of your PokeGear contacts will call you. If Ralph says there’s an outbreak of Qwilfish, head down there and catch one! Catch a second Krabby for a trade.
        </p>
        <pre>
          (Anywhere) Magikarp → (Lv. 20) → Gyarados
          (New Bark Town) Tentacool → (Lv. 30) → Tentacruel
          (Cherrygrove City) Krabby → (Lv. 28) → Kingler
          (Route 30) Poliwag → (Lv. 25) → Poliwhirl
          (Dark Cave) Goldeen → (Lv. 33) → Seaking
          (Route 32) Qwilfish
        </pre>

        <h5>Slowpoke Well</h5>
        <p>
          If you go to Kurt’s house he will leave for the Slowpoke Well. Follow him there and you can catch a Slowpoke and of course defeat Team Rocket. After this he will be happy to make special pokeballs from apricorns so be sure to stock up on some should you wish to.
        </p>
        <pre>
          Slowpoke → (Lv. 37) → Slowbro
        </pre>

        <h5>Ilex Forest</h5>
        <p>
          You can leave out of the western exit from Azalea Town (but you’ll need to defeat your rival first) and can explore this place to get the HM for Cut as well as catching a few new pokemon. Oddish is available at night while Paras is available at all times.
        </p>
        <pre>
          Oddish → (Lv. 21) → Gloom
          Paras → (Lv. 24) → Parasect
        </pre>

        <h5>Headbutt Trees</h5>
        <p>
          We may be blocked off until we’ve got the Hive Badge to use Cut but we can still catch several more pokemon! If you level up Slowpoke until it learns Headbutt, you can start headbutting trees early. Have a look at this tool http://tshadowknight.com/Headbutt%20Grid.htm to calculate which encounters are in which tree since it’s dependent on your Trainer ID, otherwise it’s mostly a case of “try headbutting a tree and see what falls out”. In Ilex Forest/Azalea Town you can catch an Exeggcute and a Pineco and on Route 33 you can get an Aipom and a Heracross.
        </p>
        <pre>
          Exeggcute
          Pineco → (Lv. 31) → Forretress
          Aipom
          Heracross
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          The basement of Union Cave is the ideal place to train initially, especially with the water types you’ve caught like Krabby and Poliwag thanks to Onix and Geodude. Once Slowpoke learns Headbutt, this is the best way to gain exp. The link here http://tshadowknight.com/Headbutt%20Grid.htm shows which trees have which encounters. If you can find a Headbutt tree with a star, this is where you should stick to training. Heracross gives fantastic exp. Aside from accuracy drops, Aipom doesn’t cause much trouble and gives fairly good exp. Training at night also means that Spearow, your most common encounter, will be asleep which means your weaker Pokémon can pick it off.
        </p>
        <p>
          Hoppip was one of the worst pokemon to train as it essentially only has Tackle and passive damaging moves like Poisonpowder and Leech Seed. Tentacool was also pretty bad initially with very low power moves like Poison Sting and Constrict but at least it learns better moves once it’s levelled up more.
        </p>

        <p>
          <strong>End of part 2:</strong><br/>
          Caught 67, Remaining 184
        </p>

        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1fXwvGspNnlGn9fw-SAJxVyDjYxQ43TOV38sgWhbaIT8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,

      rows: [
        /* --------------------------- Moon Stone Evolution -------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_039.png", name: "Jigglypuff" },
          method: "Evolve with Moon Stone → Wigglytuff (recommended this section)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_040.png", name: "Wigglytuff" },
          method: "Use a Moon Stone on Jigglypuff"
        },

        /* --------------------------- Egg Gift & Happiness -------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_175.png", name: "Togepi" },
          method: "Gift Egg from Elm’s aide (Pokémon Center after Falkner)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_176.png", name: "Togetic" },
          method: "Evolve from Togepi with high Friendship"
        },

        /* --------------------------- Route 32 -------------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_179.png", name: "Mareep" },
          method: "Catch on Route 32 (any time)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_180.png", name: "Flaaffy" },
          method: "Evolve from Mareep at level 15"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_181.png", name: "Ampharos" },
          method: "Evolve from Flaaffy at level 30"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_187.png", name: "Hoppip" },
          method: "Catch on Route 32 (morning/day)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_188.png", name: "Skiploom" },
          method: "Evolve from Hoppip at level 18"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_189.png", name: "Jumpluff" },
          method: "Evolve from Skiploom at level 27"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_194.png", name: "Wooper" },
          method: "Catch on Route 32 (night/morning)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_195.png", name: "Quagsire" },
          method: "Evolve from Wooper at level 20"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_023.png", name: "Ekans" },
          method: "Catch on Route 32 (Silver only; any time)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_024.png", name: "Arbok" },
          method: "Evolve from Ekans at level 22"
        },

        /* --------------------------- Old Fishing Tour ------------------------ */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_129.png", name: "Magikarp" },
          method: "Old Rod — anywhere"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_130.png", name: "Gyarados" },
          method: "Evolve from Magikarp at level 20"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_072.png", name: "Tentacool" },
          method: "Old Rod — New Bark Town"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_073.png", name: "Tentacruel" },
          method: "Evolve from Tentacool at level 30"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_098.png", name: "Krabby" },
          method: "Old Rod — Cherrygrove City (catch two; one for trade)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_099.png", name: "Kingler" },
          method: "Evolve from Krabby at level 28"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_060.png", name: "Poliwag" },
          method: "Old Rod — Route 30"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_061.png", name: "Poliwhirl" },
          method: "Evolve from Poliwag at level 25"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_118.png", name: "Goldeen" },
          method: "Old Rod — Dark Cave"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_119.png", name: "Seaking" },
          method: "Evolve from Goldeen at level 33"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_211.png", name: "Qwilfish" },
          method: "Route 32 swarm (Fisherman Ralph phone call)"
        },

        /* --------------------------- Slowpoke Well --------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_079.png", name: "Slowpoke" },
          method: "Slowpoke Well"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_080.png", name: "Slowbro" },
          method: "Evolve from Slowpoke at level 37"
        },

        /* --------------------------- Ilex Forest ----------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_043.png", name: "Oddish" },
          method: "Ilex Forest (night)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_044.png", name: "Gloom" },
          method: "Evolve from Oddish at level 21"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_046.png", name: "Paras" },
          method: "Ilex Forest (any time)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_047.png", name: "Parasect" },
          method: "Evolve from Paras at level 24"
        },

        /* --------------------------- Headbutt Trees -------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_102.png", name: "Exeggcute" },
          method: "Headbutt trees (Ilex Forest / Azalea Town)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_204.png", name: "Pineco" },
          method: "Headbutt trees (Ilex Forest / Azalea Town)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_205.png", name: "Forretress" },
          method: "Evolve from Pineco at level 31"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_190.png", name: "Aipom" },
          method: "Headbutt trees (Route 33)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_214.png", name: "Heracross" },
          method: "Headbutt trees (Route 33)"
        }
      ]
    },
    "whitney": {
      headerTitle: "Pre Badge #3 - Whitney",
      headerImg: "assets/images/Gold/badges/Spr_GS_Whitney.png",
      headerImgAlt: "Whitney as she appeared in Pokemon Gold and Silver",

      summaryShort: `With Bugsy defeated, we can finally use Cut and advance through Ilex Forest. There’s nothing else to catch here.`,
      summaryHtml: `
        <h5>Route 34</h5>
        <p>
          Several new pokemon await you in this route as well as the daycare center for when you’ll need to breed some baby pokemon for your dex. This coincidentally happens to be where you’ll catch a Ditto! Catch a second Drowzee for an upcoming trade.
        </p>
        <pre>
          Drowzee → (Lv. 26) → Hypno
          Abra → (Lv. 16) → Kadabra
          Ditto
        </pre>
        <p>Breed your Wigglytuff with a Ditto to get an Igglybuff</p>
        <pre>
          Jigglypuff/Wigglytuff → (Breed) → Igglybuff
        </pre>

        <h5>Goldenrod City</h5>
        <p>
          Here we are, the biggest city in Johto! There’s lots to do, don’t forget to grab the bike so that you can get around a bit quicker. If you go to the Underground, you’ll be able to get a Coin Case so you can start earning coins to grab a few pokemon from the Game Corner. It turns out that Ekans and Sandshrew aren’t version exclusives, you can grab the other one here for 700 coins as well as a Dratini for 2,100 coins. You’ll also be able to trade your spare Drowzee for a Machop who isn’t available until the next section. Speaking of trades, you can get a leg up on a future trade by obtaining another Dratini which MUST be female which then needs to evolve into Dragonair. Not required at this point, but be aware. Grab the radio card now from the Radio Tower to avoid any nasty surprises when you get to Kanto…
        </p>
        <pre>
          Sandshrew → (Lv. 22) → Sandslash
          Dratini → (Lv. 30) → Dragonair → (Lv. 55) → Dragonite
          Machop → (Lv. 28) → Machoke
        </pre>

        <h5>Route 35</h5>
        <p>
          Leaving the north end of Goldenrod, you’ll be on this small route where you can catch a few more pokemon including another ultra-rare pokemon, Yanma, who has another 1% encounter rate. There is a bug catcher who will call you for swarms if you want to travel all the way back to New Bark Town to trigger the call faster but you’ll be likely grinding here for a while so you might as well hunt for it the old fashioned way.
        </p>
        <pre>
          Nidoran(f) → (Lv. 16) → Nidorina
          Nidoran(m) → (Lv. 16) → Nidorino
          Yanma
        </pre>

        <h5>National Park</h5>
        <p>
          Through the northern gate on Route 35 you’ll find a secluded area which is Johto National Park. Only one new pokemon awaits you here, Sunkern, who is available during the daytime only. However if you come back on Tuesday, Thursday or Saturday you’ll be able to enter the bug catching contest where several bug pokemon will be new to you. You’ll be able to catch a few rare ones as well as Caterpie/Weedle (whichever one you didn’t get earlier).
        </p>
        <pre>
          Sunkern
          Scyther
          Pinsir
          Caterpie → (Lv. 7) → Metapod → (Lv. 10) → Butterfree
          Venonat → (Lv. 31) → Venomoth
        </pre>

        <h5>Route 36</h5>
        <p>
          The final area we get to visit in this section. There’s a ‘tree’ blocking the way but we can still access a patch of grass which is what we need to catch more! These pokemon can be caught at all times of the day:
        </p>
        <pre>
          Vulpix
          Stantler
        </pre>

        <h5>Gotta win ‘em all</h5>
        <p>
          There’s two more pokemon we can evolve – Sunkern and Gloom. But to do that we need to win the bug catching contest and get the Sun Stone for each pokemon. Save your game before you enter so that if you lose you can simply start again. Definitely try to get a Pinsir/Scyther for the win but it’s based mostly on stats, so chance will play a big part. One thing that is in your control is the pokemon’s HP. If you can put them to sleep and catch them at full HP then that will help you a lot. Here’s a reddit post showing the odds of winning and how you should retry the competition if Cooltrainer Nick has entered. https://www.reddit.com/r/Pokemonguide/comments/7b05g2/how_to_win_the_bugcatching_contest/?utm_source=share&amp;utm_medium=ios_app&amp;utm_name=iossmf
        </p>
        <pre>
          Sunkern → (Sun Stone) → Sunflora
          Gloom → (Sun Stone) → Bellossom
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          Dragonite is obviously the difficult one here to evolve. You have the option of trainer rematches although you’ll need to either wait for the calls naturally or journey ALL the way back to New Bark Town to do the daylight savings trick. Training on Route 36 is ok but consider either headbutting trees again for Heracross/Butterfree/Beedrill or enter the bug catching contest for the purpose of exp rather than winning the contest. There are some pokemon that give great exp (particularly Scyther/Pinsir).
        </p>

        <p>
          <strong>End of part 3:</strong><br/>
          Caught 97, Remaining 154
        </p>

        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1fXwvGspNnlGn9fw-SAJxVyDjYxQ43TOV38sgWhbaIT8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,

      rows: [
        /* --------------------------- Route 34 -------------------------------- */
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_096.png", name: "Drowzee" }, method: "Catch on Route 34" },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_097.png", name: "Hypno" },
          method: "Evolve from Drowzee at level 26"
        },
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_063.png", name: "Abra" }, method: "Catch on Route 34" },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_064.png", name: "Kadabra" },
          method: "Evolve from Abra at level 16"
        },
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_132.png", name: "Ditto" }, method: "Catch on Route 34" },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_174.png", name: "Igglybuff" },
          method: "Breed Jigglypuff/Wigglytuff with Ditto (Route 34 Daycare)"
        },

        /* --------------------------- Goldenrod City -------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_027.png", name: "Sandshrew" },
          method: "Goldenrod Game Corner (coins)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_028.png", name: "Sandslash" },
          method: "Evolve from Sandshrew at level 22"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_147.png", name: "Dratini" },
          method: "Goldenrod Game Corner (coins)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_148.png", name: "Dragonair" },
          method: "Evolve from Dratini at level 30"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_149.png", name: "Dragonite" },
          method: "Evolve from Dragonair at level 55"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_066.png", name: "Machop" },
          method: "Trade Drowzee → Machop (Goldenrod trade)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_067.png", name: "Machoke" },
          method: "Evolve from Machop at level 28"
        },

        /* --------------------------- Route 35 -------------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_029.png", name: "Nidoran F" },
          method: "Catch on Route 35"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_030.png", name: "Nidorina" },
          method: "Evolve from Nidoran F at level 16"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_032.png", name: "Nidoran M" },
          method: "Catch on Route 35"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_033.png", name: "Nidorino" },
          method: "Evolve from Nidoran M at level 16"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_193.png", name: "Yanma" },
          method: "Catch on Route 35 (very rare; swarm via Bug Catcher call)"
        },

        /* --------------------------- National Park --------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_191.png", name: "Sunkern" },
          method: "National Park (daytime)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_123.png", name: "Scyther" },
          method: "Bug-Catching Contest (National Park)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_127.png", name: "Pinsir" },
          method: "Bug-Catching Contest (National Park)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_010.png", name: "Caterpie" },
          method: "Bug-Catching Contest (Silver)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_011.png", name: "Metapod" },
          method: "Evolve from Caterpie at level 7"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_012.png", name: "Butterfree" },
          method: "Evolve from Metapod at level 10"
        },
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_048.png", name: "Venonat" }, method: "National Park" },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_049.png", name: "Venomoth" },
          method: "Evolve from Venonat at level 31"
        },

        /* --------------------------- Route 36 -------------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_037.png", name: "Vulpix" },
          method: "Catch on Route 36 (Silver)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_234.png", name: "Stantler" },
          method: "Catch on Route 36"
        },

        /* --------------------------- Sun Stone Evolutions -------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_192.png", name: "Sunflora" },
          method: "Use a Sun Stone on Sunkern (Bug-Catching Contest prize)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_182.png", name: "Bellossom" },
          method: "Use a Sun Stone on Gloom (Bug-Catching Contest prize)"
        }
      ]
    },
    "morty": {
      headerTitle: "Pre Badge #4 - Morty",
      headerImg: "assets/images/Gold/badges/Spr_GS_Morty.png",
      headerImgAlt: "Morty as he appeared in Pokemon Gold and Silver",

      summaryShort: `Defeat Whitney and then go to the flower shop to get the watering can which will help you get rid of the ‘tree’ on route 36. Head up there, save your game before hand as this is your only chance to capture a Sudowoodo. Once you’ve caught it, speak to the man on the right of Sudowoodo who will give you the TM for Rock Smash.`,
      summaryHtml: `
        <h5>Sudowoodo</h5>
        <p>
          Sudowoodo
        </p>

        <h5>Ecruteak City</h5>
        <p>
          Skip over Route 37 as there’s nothing new here and enter Ecruteak City. When you enter the pokemon center, Bill will pass you and head back to Goldenrod. If you follow him there and speak to him he’ll give you an Eevee. There are no Fire/Water/Thunder Stones until post-game so most of the Eeveelutions are unobtainable at this point. You can however get both Espeon and Umbreon. Consider breeding your Eevee twice as the new baby will have a higher happiness. Keep them in your party to raise the happiness and consider giving them haircuts in the Goldenrod Underground.
        </p>
        <pre>
          Eevee → (Happiness Day Time) → Espeon
          Eevee → (Happiness Night Time) → Umbreon
        </pre>
        <p>
          Back in Ecruteak City, take on the Kimono sisters to get the HM for Surf and visit the Burned Tower. Exploring the main floor of Burned Tower you’ll be able to find Koffing, and in the basement you’ll encounter Magmar which you can then immediately breed to get a Magby. You’ll also disturb the three legendary beasts of Johto who will now start roaming the region.
        </p>
        <pre>
          Koffing → (Lv. 35) → Weezing
          Magmar → (Breed) → Magby
        </pre>

        <h5>Route 38</h5>
        <p>
          Let’s go west to Route 38 next where a bunch of new pokemon await, all of which are available at all times of the day excluding Farfetch’d who does not appear at night. Another 1% encounter here with Snubbull. Since a few pokemon here are 4% and 5% encounter rates you may as well keep looking normally but if you are still missing Snubbull, Schoolboy Chad is on this route and will call you if there is a swarm. If you’re playing Silver you can find a Meowth. Gold players will find the version exclusive counterpart shortly!
        </p>
        <pre>
          Magnemite → (Lv. 30) → Magneton
          Farfetch’d
          Miltank
          Tauros
          Snubbull → (Lv. 23) → Granbull
          Meowth → (Lv. 28) → Persian
        </pre>

        <h5>Olivine City</h5>
        <p>
          Skip Route 37, there’s no new pokemon that weren’t on Route 38. Reach the top of the lighthouse and talk to Jasmine to start the errand for Amphy’s medicine (which we’re not doing yet). There’s a trade to be done here in town, your spare Krabby for a Voltorb. Also grab the HM for Strength. In the small beach route to the west on Route 40, if you smash the rocks you have a chance of finding a wild Shuckle.
        </p>
        <pre>
          Voltorb → (Lv. 30) → Electrode
          Shuckle
        </pre>

        <h5>Good Fishing Tour</h5>
        <p>
          You can also pick up the Good Rod in Olivine City which means a bunch of new pokemon are now available:
        </p>
        <pre>
          (Olivine Harbor/New Bark Town) Shellder
          (Olivine Harbor/New Bark Town) Chinchou → (Lv. 27) → Lanturn
          (Olivine City Day/Morning) Corsola
          (Olivine City Night) Staryu
        </pre>

        <h5>Route 42/Mt Mortar</h5>
        <p>
          Journey all the way back to Ecruteak and this time take the eastern exit to Route 42 where you’ll find the entrance to Mt Mortar. We won’t be able to fully explore the place yet but look around for another 1% encounter, this time it’s Marill. It doesn’t appear on every floor, so stick to the room that you first enter for best results.
        </p>
        <pre>
          Marill → (Lv. 18) → Azumarill
        </pre>

        <h5>Route 43</h5>
        <p>
          One more stop on our journey for this section. Stop off in Mahogany Town and rest up, then head north to Route 43 where you can catch a Girafarig. Keep going north to reach the Lake of Rage but there’s nothing to do here just yet.
        </p>
        <pre>
          Girafarig
        </pre>

        <h5>Rounding up the beasts</h5>
        <p>
          You’ve got three badges. Did you expect to catch any legendaries this early on in the game? Because you’re about to catch THREE of them. First off you need to actually find the beasts. This may have happened randomly already during your grinding. If not, you may need to run around from route to route, trigger a few encounters and then move to another route, possibly with a Repel to prevent normal encounters. Once you’ve seen them, you can check their location in the dex. Every time you move to a different area/town/route they will move to an adjacent route to the one they are currently on or in some cases may jump randomly across the map. The annoying part of chasing them is that you are constantly checking their location, seeing if they are near, moving to an area, checking locations etc until they are in your location. I would suggest moving from Ecruteak/Route 36/Route 37/Violet City because there are no gates to pass through, it’s all out in the open. Once you are in the same location, spray a repel (assuming your lead pokemon is no higher than Lv40).
        </p>
        <p>
          If the roaming pokemon is faster than you, it will flee before you can use an attack. They will flee on the first turn and their HP carries over between battles which means you can slowly chip away at their health during each encounter until their HP is low enough. A Haunter with Night Shade is a good idea so that it doesn’t score a critical hit. Also consider holding the Quick Claw from National Park to allow even a slow pokemon to potentially act first. Saving between encounters is also a good idea. If you can trap them with Mean Look (also from Haunter) then you get a few turns to try and catch them. The down side is that there just aren’t many decent pokeballs available. You’ll likely only have a few Ultra Balls. The best ball to use WOULD BE a Fast Ball but thanks to the programming, it doesn’t work as intended so you’re stuck with the few Ultra Balls you have or Great Balls. Having their HP in the red and having a status move (I put them to sleep) helps tremendously. If you can’t catch the pokemon within a few balls, consider resetting and trying again to save pokeballs/money. You can either throw a ball as soon as it appears or use Mean Look to trap it for a few turns, bearing in mind that it could use Roar to make you flee or it could knock you out. Chamale (creator of the POC!) wrote a great guide to finding and catching them:  https://www.reddit.com/r/pokemon/comments/759vhg/how_to_catch_raikou_suicune_and_entei_a/?utm_source=share&amp;utm_medium=ios_app&amp;utm_name=iossmf
        </p>
        <pre>
          Raikou
          Entei
          Suicune
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          With only seven pokemon to evolve via levelling up, this section isn’t that rough. You are covering quite a bit of ground so try to train your new pokemon up as you go from place to place. Route 43 is a nice place to train due to some evolved pokemon, but training at night is preferential as Noctowl gives much better exp than Pidgeotto. Fishing with the Good Rod in places like Olivine City is also a good option. At lv20, Krabby gives over 300 exp.
        </p>

        <p>
          <strong>End of part 4:</strong><br/>
          Caught 128, Remaining 123
        </p>

        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1fXwvGspNnlGn9fw-SAJxVyDjYxQ43TOV38sgWhbaIT8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,

      rows: [
        /* --------------------------- Sudowoodo -------------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_185.png", name: "Sudowoodo" },
          method: "Route 36 (stationary encounter; one chance)"
        },

        /* --------------------------- Ecruteak / Bill's Gift ------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_133.png", name: "Eevee" },
          method: "Gift from Bill in Goldenrod after meeting him in Ecruteak Pokémon Center"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_196.png", name: "Espeon" },
          method: "Evolve from Eevee with high Friendship (Day)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_197.png", name: "Umbreon" },
          method: "Evolve from Eevee with high Friendship (Night)"
        },

        /* --------------------------- Burned Tower ----------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_109.png", name: "Koffing" },
          method: "Burned Tower (main floor)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_110.png", name: "Weezing" },
          method: "Evolve from Koffing at level 35"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_126.png", name: "Magmar" },
          method: "Burned Tower (basement)"
        },
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_240.png", name: "Magby" }, method: "Breed Magmar" },

        /* --------------------------- Roaming Beasts --------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_243.png", name: "Raikou" },
          method: "Johto (roaming after Burned Tower event)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_244.png", name: "Entei" },
          method: "Johto (roaming after Burned Tower event)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_245.png", name: "Suicune" },
          method: "Johto (roaming after Burned Tower event)"
        },

        /* --------------------------- Route 38 --------------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_081.png", name: "Magnemite" },
          method: "Catch on Route 38"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_082.png", name: "Magneton" },
          method: "Evolve from Magnemite at level 30"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_083.png", name: "Farfetch'd" },
          method: "Catch on Route 38 (not at night)"
        },
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_241.png", name: "Miltank" }, method: "Catch on Route 38" },
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_128.png", name: "Tauros" }, method: "Catch on Route 38" },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_209.png", name: "Snubbull" },
          method: "Catch on Route 38 (rare; swarm via Schoolboy Chad)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_210.png", name: "Granbull" },
          method: "Evolve from Snubbull at level 23"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_052.png", name: "Meowth" },
          method: "Catch on Route 38 (Silver)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_053.png", name: "Persian" },
          method: "Evolve from Meowth at level 28"
        },

        /* --------------------------- Olivine / Route 40 ----------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_100.png", name: "Voltorb" },
          method: "Trade Krabby → Voltorb (Olivine City)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_101.png", name: "Electrode" },
          method: "Evolve from Voltorb at level 30"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_213.png", name: "Shuckle" },
          method: "Rock Smash on Route 40 (chance encounter)"
        },

        /* --------------------------- Good Rod Fishing ------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_090.png", name: "Shellder" },
          method: "Good Rod — Olivine Harbor / New Bark Town"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_170.png", name: "Chinchou" },
          method: "Good Rod — Olivine Harbor / New Bark Town"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_171.png", name: "Lanturn" },
          method: "Evolve from Chinchou at level 27"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_222.png", name: "Corsola" },
          method: "Good Rod — Olivine City (Day/Morning)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_120.png", name: "Staryu" },
          method: "Good Rod — Olivine City (Night)"
        },

        /* --------------------------- Route 42 / Mt. Mortar -------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_183.png", name: "Marill" },
          method: "Mt. Mortar first room (rare)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_184.png", name: "Azumarill" },
          method: "Evolve from Marill at level 18"
        },

        /* --------------------------- Route 43 --------------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_203.png", name: "Girafarig" },
          method: "Catch on Route 43"
        }
      ]
    },
    "pryce": {
      headerTitle: "Pre Badge #5 - Pryce",
      headerImg: "assets/images/Gold/badges/Spr_GS_Pryce.png",
      headerImgAlt: "Pryce as he appeared in Pokemon Gold and Silver",

      summaryShort: `We’ve got a choice between THREE gyms at this point! Defeating Chuck only gives us access to Fly which doesn’t give us any pokemon. Defeating Jasmine gives us NO perks therefore we will be going with Pryce who will give us access to use Whirlpool which lets us catch a small handful of pokemon.

With the ability to use Surf we can access a few additional areas. Before we do that, let’s backtrack for a moment.`,
      summaryHtml: `
        <h5>Tohjo Falls</h5>
        <p>
          Surf east from New Bark Town to access Route 27 and enter Tohjo Falls. You can’t get past the waterfalls but you can surf over to the Moon Stone and evolve your Nidorina or Nidorino. The final Moon Stone won’t be obtained until after the Elite Four.
        </p>
        <pre>
          Nidorina/Nidorino → (Moon Stone) → Nidoqueen/Nidoking
        </pre>

        <h5>Dark Cave Surfing</h5>
        <p>
          Go back to Dark Cave and Surf over the pool of water. This will let you reach the northern section of the cave. Though you can’t advance due to the ledges, you can still run around until a Wobbuffet shows up.
        </p>
        <pre>
          Wobbuffet
        </pre>

        <h5>Union Cave and the Ruins of Alph</h5>
        <p>
          If you revisit Union Cave, you can reach a ladder to the basement on foot. In the basement, Surf across the water and you’ll be able to emerge at a grassy area of the Ruins of Alph. Here you can catch yourself a Natu and a Smeargle. Back in Union Cave, Surf across some water on the main floor to delve deeper into the cave. If you come here on a Friday, Lapras will be swimming around on the lowest floor for you to interact with and catch.
        </p>
        <pre>
          Natu → (Lv. 25) → Xatu
          Smeargle
          Lapras
        </pre>

        <h5>Ilex Forest</h5>
        <p>
          On the Goldenrod side of Ilex Forest is a pool of water. Simply return here and Surf to find a Psyduck (and even a 10% encounter with Golduck).
        </p>
        <pre>
          Psyduck → (Lv. 33) → Golduck
        </pre>

        <h5>The Lake of Rage and Team Rocket</h5>
        <p>
          Go to the Lake of Rage and surf over to the shiny Gyarados. Once you’ve caught/defeated it, speak to Lance who will team up with you and go to the Rocket Hideout in Mahogany Town. Whilst you’re inside, you’ll get the HM for Whirlpool but also grab the TM for Thief as it may come in handy for Moon Stone farming later on.
        </p>

        <h5>Levelling Tips</h5>
        <p>
          Only Natu and Psyduck to evolve so try and level them up whilst going through the Rocket Hideout and exploring caves. Of course you have all of the gym trainers in the Cianwood and Mahogany gym to train against. If it’s still not enough, stick to Route 43.
        </p>

        <p>
          <strong>End of part 5:</strong><br/>
          (Gold) Caught 137, Remaining 114<br/>
          (Silver) Caught 136, Remaining 115
        </p>

        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1fXwvGspNnlGn9fw-SAJxVyDjYxQ43TOV38sgWhbaIT8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,
      rows: [
        /* --------------------------- Tohjo Falls — Moon Stone Choice --------- */
        {
          type: "choice",
          choiceKey: "moonstone-nido",
          choiceValue: "nidorina",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_030.png", name: "Nidorina" },
          method: "Choose Nidorina to evolve with the Moon Stone (Tohjo Falls)"
        },
        {
          type: "choice",
          choiceKey: "moonstone-nido",
          choiceValue: "nidorino",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_033.png", name: "Nidorino" },
          method: "Choose Nidorino to evolve with the Moon Stone (Tohjo Falls)"
        },

        /* --------------------------- Choice Requires (apply selection) ------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_031.png", name: "Nidoqueen" },
          method: "Use a Moon Stone on Nidorina (Tohjo Falls)",
          requires: { "moonstone-nido": "nidorina" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_034.png", name: "Nidoking" },
          method: "Use a Moon Stone on Nidorino (Tohjo Falls)",
          requires: { "moonstone-nido": "nidorino" }
        },

        /* --------------------------- Dark Cave (Surf section) ---------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_202.png", name: "Wobbuffet" },
          method: "Dark Cave (northern section via Surf)"
        },

        /* --------------------------- Union Cave / Ruins of Alph -------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_177.png", name: "Natu" },
          method: "Ruins of Alph grass (from Union Cave basement via Surf)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_178.png", name: "Xatu" },
          method: "Evolve from Natu at level 25"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_235.png", name: "Smeargle" },
          method: "Ruins of Alph grass (Surf path from Union Cave)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_131.png", name: "Lapras" },
          method: "Union Cave lowest floor (Friday encounter via Surf)"
        },

        /* --------------------------- Ilex Forest (Surf pool) ----------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_054.png", name: "Psyduck" },
          method: "Ilex Forest (Surf pool — also rare Golduck encounter)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_055.png", name: "Golduck" },
          method: "Evolve from Psyduck at level 33"
        }
      ]
    },
    "jasminechuck": {
      headerTitle: "Pre Badge #6 - Jasmine (also Chuck)",
      headerImg: "assets/images/Gold/badges/Spr_GS_Jamsine.png",
      headerImgAlt: "Jasmine as she appeared in Pokemon Gold and Silver",

      summaryShort: `With Pryce defeated, Whirlpool can be used to get us into the Whirl Islands on Route 41. Running around in the caves you’ll be able to find a Seel, whilst Horsea can be found when you surf on the water.`,
      summaryHtml: `
        <h5>Whirl Islands</h5>
        <p>
          With Pryce defeated, Whirlpool can be used to get us into the Whirl Islands on Route 41. Running around in the caves you’ll be able to find a Seel, whilst Horsea can be found when you surf on the water.
        </p>
        <pre>
          Seel → (Lv. 34) → Dewgong
          Horsea → (Lv. 32) → Seadra
        </pre>

        <p>
          And that’s the end of this very short section! Once you’re done evolving these two, defeat Chuck and Jasmine both in a row.
        </p>

        <h5>Levelling Tips</h5>
        <p>
          Again, only two pokemon to evolve but there’s not really any new areas to train in, so sticking to Route 43 is probably the best bet unless you find they are not strong enough to beat the wild pokemon easily, in which case fall back by a few routes.
        </p>

        <p>
          <strong>End of part 6:</strong><br/>
          (Gold) Caught 141, Remaining 110<br/>
          (Silver) Caught 140, Remaining 111
        </p>

        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1fXwvGspNnlGn9fw-SAJxVyDjYxQ43TOV38sgWhbaIT8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,

      rows: [
        /* --------------------------- Whirl Islands (Route 41) ---------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_086.png", name: "Seel" },
          method: "Whirl Islands (cave encounter)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_087.png", name: "Dewgong" },
          method: "Evolve from Seel at level 34"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_116.png", name: "Horsea" },
          method: "Whirl Islands (Surf encounter)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_117.png", name: "Seadra" },
          method: "Evolve from Horsea at level 32"
        }
      ]
    },
    "clair": {
      headerTitle: "Pre Badge #8 - Clair",
      headerImg: "assets/images/Gold/badges/Spr_GS_Clair.png",
      headerImgAlt: "Clair as she appeared in Pokemon Gold and Silver",

      summaryShort: `Once you’ve obtained the seventh badge, Professor Elm will call you and you can kick off the events that require you to stop Team Rocket’s takeover in Goldenrod City’s Radio Tower. It is possible to venture onwards to Blackthorn before clearing the Radio Tower so consider obtaining some new Pokémon and training them up against the grunts. Once you’ve kicked out Team Rocket you’ll be given the Rainbow Wing (Gold) or Silver Wing (Silver) which will let you catch the box legendary.`,
      summaryHtml: `
        <h5>Version Legendaries</h5>
        <p>
          In Pokemon Silver, you will need to traverse the Whirl Islands. Enter the north eastern island, hop over the ledge and then over the upper of the next two ledges. From there it’s a pretty straight forward route which requires you to go down a waterfall (no HM required) and enter the cave to the left where you can find Lugia.
        </p>
        <p>
          Both legendaries will be at level 40 and will know their signature moves which will be very powerful – Aeroblast for Lugia and Sacred Fire for Ho-Oh. Get their HP into the red and give them a status problem (paralyze or sleep) before throwing Ultra Balls. Heavy Balls can work on Lugia but they’re much more awkward to obtain for a small bonus so stick to Ultra Balls which can be purchased in Blackthorn City.
        </p>
        <pre>
          Lugia
        </pre>

        <h5>Route 44</h5>
        <p>
          It’s onwards to new adventures! With 7 badges in hand, the pesky guy blocking the eastern exit out of Mahogany Town is finally gone and you can explore some new areas. There’s grass on the route but it’s in the middle of the water so you’ll need to surf across. Here you’ll be able to catch a Lickitung and a Tangela (can flee!). If you obtain Fisherman Wilton’s phone number, he’ll be able to call you when there’s a swarm of Remoraid on this route. Normally you’d have to wait to get the Super Rod from Kanto. This can of course be triggered with the daylight savings trick, similar to Ralph and the Qwilfish swarm from earlier on.
        </p>
        <pre>
          Lickitung
          Tangela
          Remoraid → (Lv. 25) → Octillery
        </pre>

        <h5>Ice Path</h5>
        <p>
          You will have to slide your way through the cave to get out the other side. Don’t forget to pick up the Waterfall HM. Inside you’ll be able to catch Swinub and Jynx throughout the cave whereas Silver players can catch Delibird to even up the catch total.
        </p>
        <pre>
          Jynx
          Swinub → (Lv. 33) → Piloswine
          Delibird
        </pre>

        <h5>Blackthorn City</h5>
        <p>
          Emerging from Ice Path you’ll now be in the city where the 8th gym resides. There’s an in game trade here which isn’t ideal but sadly it IS required…The trade in question is for a Rhydon which you can’t get until after the 8th badge. The catch is that you need to trade a female Dragonair. Either catch a Dratini with the Good Rod on Route 45 or go back to Goldenrod and buy or win enough coins to get another Dratini. Save before you exchange the coins so you can soft reset for a female. Once you’ve traded for Rhydon, go back to the daycare and breed it with a Ditto for Rhyhorn. While you’re there, breed your Jynx for a Smoochum.
        </p>
        <pre>
          Rhydon
          Rhydon → (Breed) → Rhyhorn
          Jynx → (Breed) → Smoochum
        </pre>

        <h5>Route 45</h5>
        <p>
          South of Blackthorn you’ll be able to grab a few more pokemon. Be careful about jumping over any ledges or you’ll need Fly to get back. In the grass you’ll be able to catch a few version exclusives. You’ll find Phanpy and Skarmory. Watch out because Teddiursa and Phanpy can flee!
        </p>
        <pre>
          Phanpy → (Lv. 25) → Donphan
          Skarmory
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          Not many pokemon to evolve again. Depending on who you are training depends on the area you train in. Ice Cave works well for Teddiursa whereas its attacks aren’t great against rock types on Route 45. Phanpy can cause problems as it’s weak against ice types in Ice Path, has no ground attacks for Geodude/Graveler and is weak to grass types on Route 44. Best to go back to Route 43. Swinub should have no problems against Geodude and Graveler on Route 45. You can also test out these pokemon against the gym trainers but bear in mind that all your opponents will be Horsea/Seadra and Dratini/Dragonair. Also consider taking advantage of trainer rematches on these late game routes. By using the daylight savings trick you can trigger calls for battles rapidly.
        </p>

        <p>
          <strong>End of part 7:</strong><br/>
          Caught 155, Remaining 96
        </p>

        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1fXwvGspNnlGn9fw-SAJxVyDjYxQ43TOV38sgWhbaIT8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,

      rows: [
        /* --------------------------- Version Legendaries --------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_249.png", name: "Lugia" },
          method: "Whirl Islands NE path (Silver) — Level 40"
        },

        /* --------------------------- Route 44 -------------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_108.png", name: "Lickitung" },
          method: "Catch on Route 44 (surf to central grass)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_114.png", name: "Tangela" },
          method: "Catch on Route 44 (may flee)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_223.png", name: "Remoraid" },
          method: "Route 44 swarm (Fisherman Wilton call)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_224.png", name: "Octillery" },
          method: "Evolve from Remoraid at level 25"
        },

        /* --------------------------- Ice Path -------------------------------- */
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_124.png", name: "Jynx" }, method: "Ice Path" },
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_220.png", name: "Swinub" }, method: "Ice Path" },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_221.png", name: "Piloswine" },
          method: "Evolve from Swinub at level 33"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_225.png", name: "Delibird" },
          method: "Ice Path (Silver)"
        },

        /* --------------------------- Blackthorn City ------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_112.png", name: "Rhydon" },
          method: "In‑game trade (requires female Dragonair)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_111.png", name: "Rhyhorn" },
          method: "Breed Rhydon with Ditto (Daycare)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_238.png", name: "Smoochum" },
          method: "Breed Jynx (Daycare)"
        },

        /* --------------------------- Route 45 -------------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_231.png", name: "Phanpy" },
          method: "Route 45 (Silver; can flee)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_232.png", name: "Donphan" },
          method: "Evolve from Phanpy at level 25"
        },
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_227.png", name: "Skarmory" }, method: "Route 45 (Silver)" }
      ]
    },
    "E4": {
      headerTitle: "Pre Elite Four",
      headerImg: "assets/images/Gold/badges/Spr_GS_Lance.png",
      headerImgAlt: "Lance as he appeared in Pokemon Gold and Silver",

      summaryShort: `Clair is defeated and you will need to do the trial in the Dragons Den. Once that’s over you’ll have your final badge and also be able to use Waterfall. Head to New Bark Town and see Prof Elm for a Master Ball. Before you head to the Pokemon League there’s a small detour to make. Bring your HM slaves to Mt Mortar leaving a spare slot in your party. Enter the middle section of Mt Mortar (surf over the water between Mahogany/Ecruteak) and climb up the waterfall, enter the next room and work your way round the cave until you reach a Karate King trainer. Defeat him and he’ll give you a Tyrogue. Depending on its stats at level 20 decides which pokemon it will evolve into. Once you’ve evolved it, breed that evolution with Ditto to hatch more eggs to get the other two evolutions.`,
      summaryHtml: `
        <h5>Mt Mortar (Karate King)</h5>
        <p>
          Clair is defeated and you will need to do the trial in the Dragons Den. Once that’s over you’ll have your final badge and also be able to use Waterfall. Head to New Bark Town and see Prof Elm for a Master Ball. Before you head to the Pokemon League there’s a small detour to make. Bring your HM slaves to Mt Mortar leaving a spare slot in your party. Enter the middle section of Mt Mortar (surf over the water between Mahogany/Ecruteak) and climb up the waterfall, enter the next room and work your way round the cave until you reach a Karate King trainer. Defeat him and he’ll give you a Tyrogue. Depending on its stats at level 20 decides which pokemon it will evolve into. Once you’ve evolved it, breed that evolution with Ditto to hatch more eggs to get the other two evolutions.
        </p>
        <pre>
          Tyrogue → (Lv. 20 Def higher than Atk) → Hitmonchan
          Tyrogue → (Lv. 20 Atk higher than Def) → Hitmonlee
          Tyrogue → (Lv. 20 Atk and Def are equal) → Hitmontop
        </pre>

        <h5>Into Kanto</h5>
        <p>
          Surf east of New Bark Town to reach Route 27 and enter the cave to Tohjo Falls. Cross over the waterfall and you’ll be able to enter Route 27 proper. In the grass, catch a Ponyta and a Doduo. Note that Doduo is not available at night. If you’re playing Gold you’re also able to catch a wild Dodrio on Route 26, whereas Silver players can catch it on Route 27.
        </p>
        <pre>
          Ponyta → (Lv. 40) → Rapidash
          Doduo → (Lv. 31) → Dodrio
        </pre>
        <p>
          And with all those pokemon caught and evolved it’s Elite Four time!
        </p>

        <h5>Levelling Tips</h5>
        <p>
          Only Doduo and Ponyta that you really need to work on here, both of which are best trained as you work your way towards Victory Road. Following that, continue training here on Routes 26 and 27 taking advantage of the rest house. If you get any trainer rematches during this time, take the time to do those as Ponyta and Doduo will be up for it.
        </p>

        <p>
          <strong>End of part 8:</strong><br/>
          Caught 163, Remaining 88
        </p>

        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1fXwvGspNnlGn9fw-SAJxVyDjYxQ43TOV38sgWhbaIT8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,
      rows: [
        /* --------------------------- Mt. Mortar (Karate King) ---------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_236.png", name: "Tyrogue" },
          method: "Gift from Karate King in Mt. Mortar (middle entrance; Waterfall required)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_107.png", name: "Hitmonchan" },
          method: "Evolve Tyrogue at level 20 (Def > Atk)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_106.png", name: "Hitmonlee" },
          method: "Evolve Tyrogue at level 20 (Atk > Def)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_237.png", name: "Hitmontop" },
          method: "Evolve Tyrogue at level 20 (Atk = Def)"
        },

        /* --------------------------- Into Kanto (Routes 27/26) --------------- */
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_077.png", name: "Ponyta" }, method: "Route 27 (grass)" },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_078.png", name: "Rapidash" },
          method: "Evolve from Ponyta at level 40"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_084.png", name: "Doduo" },
          method: "Route 27 (not at night)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_085.png", name: "Dodrio" },
          method: "Evolve from Doduo at level 31"
        }
      ]
    },
    "prekanto": {
      headerTitle: "Pre Kanto Badges",
      headerImg: "assets/images/Gold/badges/Spr_GS_Blue.png",
      headerImgAlt: "Blue as he appeared in Pokemon Gold and Silver",

      summaryShort: `So you’re the Johto champion and you can now sail to Vermilion City and take on the gym challenge. The majority of the remaining pokemon in the challenge can be caught before obtaining a single badge from any of the Kanto Gym Leaders. Your two main objectives to get around Kanto properly is to restore the power plant and get the radio card upgrade.`,
      summaryHtml: `
        <h5>Restoring the Power</h5>
        <p>
          Sail on the SS Aqua from Olivine to Vermilion City. First you’ll want to visit the Power Plant on Route 10. Go north from Vermilion City until you reach Saffron City then continue going north to Cerulean City. Then head east until you reach Route 10 where the Power Plant is. Search the grass first to catch an Electabuzz. Surf around to the Power Plant where you’ll be informed of a missing part that’s been stolen. Head back to Cerulean City and enter the gym to give chase to a Team Rocket member. Follow him to Nugget Bridge (north from here) and he’ll tell you about the stolen part which you can now pick up from the central pool of water in the gym and return it to the Power Plant.
        </p>
        <pre>
          Electabuzz
        </pre>

        <h5>The Radio Tower and the Magnet Train</h5>
        <p>
          From Route 10, go south to Rock Tunnel. Inside you’ll be able to catch a Cubone and, on the lower floors, a Kangaskhan and Marowak. Exit the tunnel via the South exit to Lavender Town and enter the Radio Tower which replaces the old graveyard from Red/Blue. It’s here that you’ll be given a radio expansion card which lets you play the pokeflute. Head back to Saffron City and visit the copycat girl who will tell you she’s lost her doll. Visit the pokemon fan club in Vermilion City and one of the members will give you the pokedoll which you can return to the girl who will give you a ticket for the Magnet Train which allows quick access back to Johto.
        </p>
        <pre>
          Cubone → (Lv. 28) → Marowak
          Kangaskhan
        </pre>

        <h5>Running Around Kanto</h5>
        <p>
          Take the train back to Kanto and, from Saffron City, head west towards Celadon City. On Route 7 at night time only, you’ll be able to catch a Houndour and a Murkrow. Now head into Celadon. You’ll want to head into the Game Corner and exchange a huge 9,999 coins for Porygon. West of Celadon on routes 16, 17 and 18 (basically everything before reaching Fuschia City) you can find a rare Slugma in the grass as well as Grimer and Muk..
        </p>
        <p>
          Fuschia City doesn’t have anything interesting to catch now that the Safari Zone is gone and we can’t surf towards Seafoam Islands right now so continue east to Route 15. In the grass you’ll be able to catch Chansey but it’s an incredibly rare 1% encounter. However it is found at level 25 whereas all other pokemon apart from Pidgeotto are only found up to level 23 so if you spray a repel with a level 24 pokemon in the lead party (give it a smoke ball to flee) you will find it a bit more easily. To get Chansey’s happiness based evolution, you can either catch it in a Friend Ball (though Chansey is a pain to catch) or breed it so that the level 5 Chansey has a higher happiness and can level up faster to trigger the evolution. Just a bit further east on Route 14, there is a lady in a patch of grass who wants to trade her Aerodactyl for a Chansey. Make sure you’ve bred one so you don’t trade your only Chansey!
        </p>
        <pre>
          Houndour → (Lv. 24) → Houndoom
          Murkrow
          Grimer → (Lv. 38) → Muk
          Porygon
          Slugma → (Lv. 38) → Magcargo
          Chansey → (Happiness) → Blissey
          Aerodactyl
        </pre>

        <h5>Unlocking the last areas of Kanto</h5>
        <p>
          We’re nearly done with our Kanto tour. There’s a few towns and cities we can’t reach just yet so we’ll have to take care of the Snorlax blocking Diglett Cave just east of Vermilion City. With the radio expansion card we can play the pokeflute channel and wake up Snorlax for a battle (save the game first!). Enter Diglett Cave and catch (you guessed it) a Diglett. Dugtrio also appears here if you’d rather not evolve Diglett. You’ll emerge on Route 2 where you can finally catch a Pikachu. Travel up north to Pewter City where you can talk to an old man outside who will give you a Rainbow Wing or Silver Wing which will allow you to challenge and capture the other box legendary (refer to Pre Badge 8 section for details). They will be at a higher level (Lv. 70) so I would recommend using your Master Ball if you’ve kept it. From Pewter City, head east to reach Mt Moon. Be warned that your rival will challenge you here. In Mt Moon you’ll be able to catch a Clefairy. This is also where you’ll be able to get a Moon Stone to evolve it as well as the Nidoking or Nidoqueen you didn’t evolve earlier. On Monday nights you can find the Clefairy dancing in the outer area up the ladder and will need to use Rock Smash to obtain it so make sure you have a pokemon with Rock Smash BEFORE this happens otherwise it will be gone when you come back. You can also find a Clefairy holding a Moon Stone although it’s only a 2% chance. If you picked up the Thief TM earlier then this will save you from having to catch Clefairy over and over. Finally, head back to Pewter City and go south all the way to Pallet Town. Surf into the water so you can access the grass on Route 21 to catch a Mr Mime during the morning or night at a 5% encounter rate (can flee!).
        </p>
        <pre>
          Snorlax
          Diglett → (Lv. 26) → Dugtrio
          Pikachu
          Ho-Oh
          Clefairy → (Moon Stone) → Clefable
          Nidorina/Nidorino → (Moon Stone) → Nidoqueen/Nidoking
          Mr Mime
        </pre>

        <h5>The last few evolutions and pre-evolutions</h5>
        <p>
          Head back to Johto and visit the daycare center. You can now breed a few of the pokemon you caught in Kanto for their baby pokemon.
        </p>
        <pre>
          Electabuzz → (Breed) → Elekid
          Pikachu/Raichu → (Breed) → Pichu
          Clefairy/Clefable → (Breed) → Cleffa
        </pre>

        <h5>Evolution Stones (one each!)</h5>
        <p>
          Now you can also get some evolution stones. In an unusual decision, there’s only ONE Fire, Leaf, Water and Thunder Stone in the entire game! To get these, go to Bill’s old house in Kanto on Route 25 where his grandfather is looking after the place. He will ask you to show him specific pokemon and will reward you with a corresponding stone. You will need to show him a Lickitung for an Everstone, Oddish for a Leaf Stone, Staryu for a Water Stone, Vulpix/Growlithe for a Fire Stone and Pichu for a Thunder Stone. With these items we can obviously only evolve one pokemon per stone:
        </p>
        <pre>
          Vulpix/Growlithe/Eevee → (Fire Stone) → Ninetales/Arcanine/Flareon
          Pikachu/Eevee → (Thunder Stone) → Raichu/Jolteon
          Gloom/Weepinbell/Exeggcute → (Grass Stone) → Vileplume/Victreebel/Exeggutor
          Poliwhirl/Shellder/Staryu/Eevee → (Water Stone) → Poliwrath/Cloyster/Starmie/Vaporeon
        </pre>

        <p>
          And that’s as far as we can go for now. The last location in the game requires us to have all of the Kanto badges.
        </p>

        <h5>Levelling Tips</h5>
        <p>
          A number of pokemon available to evolve, but since the trainers of Kanto are high levelled to match your Champion status, it’s tricky to train your new captures against them. I would recommend grinding in the Kanto grass depending on the pokemon’s level as you’ll often find evolved pokemon, some of which are lower than their evolution levels which makes for good exp.
        </p>

        <p>
          <strong>End of part 9:</strong><br/>
          Caught 194, Remaining 57
        </p>

        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1fXwvGspNnlGn9fw-SAJxVyDjYxQ43TOV38sgWhbaIT8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,

      rows: [
        /* =========================== Stone Choices (one each) =========================== */
        /* --------------------------- Fire Stone (choice) ---------------------- */
        {
          type: "choice",
          choiceKey: "stone-fire",
          choiceValue: "ninetales",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_038.png", name: "Ninetales" },
          method: "Pick the Fire Stone evolution (Vulpix → Ninetales)"
        },
        {
          type: "choice",
          choiceKey: "stone-fire",
          choiceValue: "flareon",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_136.png", name: "Flareon" },
          method: "Pick the Fire Stone evolution (Eevee → Flareon)"
        },
        /* --------------------------- Thunder Stone (choice) ------------------- */
        {
          type: "choice",
          choiceKey: "stone-thunder",
          choiceValue: "raichu",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_026.png", name: "Raichu" },
          method: "Pick the Thunder Stone evolution (Pikachu → Raichu)"
        },
        {
          type: "choice",
          choiceKey: "stone-thunder",
          choiceValue: "jolteon",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_135.png", name: "Jolteon" },
          method: "Pick the Thunder Stone evolution (Eevee → Jolteon)"
        },
        /* --------------------------- Leaf Stone (choice) ---------------------- */
        {
          type: "choice",
          choiceKey: "stone-leaf",
          choiceValue: "vileplume",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_045.png", name: "Vileplume" },
          method: "Pick the Leaf Stone evolution (Gloom → Vileplume)"
        },
        {
          type: "choice",
          choiceKey: "stone-leaf",
          choiceValue: "victreebel",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_071.png", name: "Victreebel" },
          method: "Pick the Leaf Stone evolution (Weepinbell → Victreebel)"
        },
        {
          type: "choice",
          choiceKey: "stone-leaf",
          choiceValue: "exeggutor",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_103.png", name: "Exeggutor" },
          method: "Pick the Leaf Stone evolution (Exeggcute → Exeggutor)"
        },

        /* --------------------------- Water Stone (choice) --------------------- */
        {
          type: "choice",
          choiceKey: "stone-water",
          choiceValue: "poliwrath",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_062.png", name: "Poliwrath" },
          method: "Pick the Water Stone evolution (Poliwhirl → Poliwrath)"
        },
        {
          type: "choice",
          choiceKey: "stone-water",
          choiceValue: "cloyster",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_091.png", name: "Cloyster" },
          method: "Pick the Water Stone evolution (Shellder → Cloyster)"
        },
        {
          type: "choice",
          choiceKey: "stone-water",
          choiceValue: "starmie",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_121.png", name: "Starmie" },
          method: "Pick the Water Stone evolution (Staryu → Starmie)"
        },
        {
          type: "choice",
          choiceKey: "stone-water",
          choiceValue: "vaporeon",
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_134.png", name: "Vaporeon" },
          method: "Pick the Water Stone evolution (Eevee → Vaporeon)"
        },

        /* --------------------------- Power Plant / Route 10 ------------------ */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_125.png", name: "Electabuzz" },
          method: "Route 10 grass (Power Plant approach)"
        },

        /* --------------------------- Rock Tunnel ----------------------------- */
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_104.png", name: "Cubone" }, method: "Rock Tunnel" },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_105.png", name: "Marowak" },
          method: "Evolve from Cubone at level 28"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_115.png", name: "Kangaskhan" },
          method: "Rock Tunnel (lower floors)"
        },

        /* --------------------------- Route 7 (Night) ------------------------- */
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_228.png", name: "Houndour" }, method: "Route 7 (night)" },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_229.png", name: "Houndoom" },
          method: "Evolve from Houndour at level 24"
        },
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_198.png", name: "Murkrow" }, method: "Route 7 (night)" },

        /* --------------------------- Celadon & West Routes ------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_137.png", name: "Porygon" },
          method: "Celadon Game Corner (9,999 coins)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_218.png", name: "Slugma" },
          method: "Routes 16–18 (rare grass)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_219.png", name: "Magcargo" },
          method: "Evolve from Slugma at level 38"
        },
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_088.png", name: "Grimer" }, method: "Routes 16–18" },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_089.png", name: "Muk" },
          method: "Evolve from Grimer at level 38"
        },

        /* --------------------------- Route 15 / 14 --------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_113.png", name: "Chansey" },
          method: "Route 15 (repel trick lvl 24 lead)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_242.png", name: "Blissey" },
          method: "Evolve from Chansey with high Friendship"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_142.png", name: "Aerodactyl" },
          method: "Trade (Route 14): Chansey → Aerodactyl"
        },

        /* --------------------------- Snorlax / Diglett / Pikachu ------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_143.png", name: "Snorlax" },
          method: "Vermilion east — Poké Flute (radio) wake"
        },
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_050.png", name: "Diglett" }, method: "Diglett Cave" },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_051.png", name: "Dugtrio" },
          method: "Evolve from Diglett at level 26 (or catch in Diglett Cave)"
        },
        { pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_025.png", name: "Pikachu" }, method: "Route 2 area" },

        /* --------------------------- Other Box Legendary --------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_250.png", name: "Ho-Oh" },
          method: "Pewter elder wing path (Silver) — Level 70"
        },

        /* --------------------------- Mt. Moon / Route 21 --------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_035.png", name: "Clefairy" },
          method: "Mt. Moon (Monday dance; Thief for Moon Stone chance)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_036.png", name: "Clefable" },
          method: "Use a Moon Stone on Clefairy"
        },
        /* --- Nido 'requiresNot' cleanup (evolve the one not chosen earlier) --- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_031.png", name: "Nidoqueen" },
          method: "Use a Moon Stone on Nidorina (Mt. Moon)",
          requiresNot: { "moonstone-nido": "nidorina" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_034.png", name: "Nidoking" },
          method: "Use a Moon Stone on Nidorino (Mt. Moon)",
          requiresNot: { "moonstone-nido": "nidorino" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_122.png", name: "Mr. Mime" },
          method: "Route 21 grass (morning/night; can flee)"
        },

        /* --------------------------- Kanto Breeding (babies) ----------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_239.png", name: "Elekid" },
          method: "Breed Electabuzz (Daycare)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_172.png", name: "Pichu" },
          method: "Breed Pikachu/Raichu (Daycare)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_173.png", name: "Cleffa" },
          method: "Breed Clefairy/Clefable (Daycare)"
        },

        /* =========================== Stone Gates (one each) =========================== */
        /* --------------------------- Fire Stone (gate) ---------------------- */

        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_038.png", name: "Ninetales" },
          method: "Use a Fire Stone on Vulpix",
          requires: { "stone-fire": "ninetales" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_136.png", name: "Flareon" },
          method: "Use a Fire Stone on Eevee",
          requires: { "stone-fire": "flareon" }
        },

        /* --------------------------- Thunder Stone (gate) ------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_026.png", name: "Raichu" },
          method: "Use a Thunder Stone on Pikachu",
          requires: { "stone-thunder": "raichu" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_135.png", name: "Jolteon" },
          method: "Use a Thunder Stone on Eevee",
          requires: { "stone-thunder": "jolteon" }
        },

        /* --------------------------- Leaf Stone (Gate) ---------------------- */

        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_045.png", name: "Vileplume" },
          method: "Use a Leaf Stone on Gloom",
          requires: { "stone-leaf": "vileplume" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_071.png", name: "Victreebel" },
          method: "Use a Leaf Stone on Weepinbell",
          requires: { "stone-leaf": "victreebel" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_103.png", name: "Exeggutor" },
          method: "Use a Leaf Stone on Exeggcute",
          requires: { "stone-leaf": "exeggutor" }
        },

        /* --------------------------- Water Stone (gate) --------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_062.png", name: "Poliwrath" },
          method: "Use a Water Stone on Poliwhirl",
          requires: { "stone-water": "poliwrath" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_091.png", name: "Cloyster" },
          method: "Use a Water Stone on Shellder",
          requires: { "stone-water": "cloyster" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_121.png", name: "Starmie" },
          method: "Use a Water Stone on Staryu",
          requires: { "stone-water": "starmie" }
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_134.png", name: "Vaporeon" },
          method: "Use a Water Stone on Eevee",
          requires: { "stone-water": "vaporeon" }
        }
      ]
    },
    "postkanto": {
      headerTitle: "Post Kanto Badges",
      headerImg: "assets/images/Gold/badges/Spr_GS_Oak.png",
      headerImgAlt: "Professor Oak as he appeared in Pokemon Gold and Silver",

      summaryShort: `With all of the Kanto badges, go see Professor Oak who will let you access Mt Silver. Head up to the pokemon league gates and you can exit to the west on to Route 28.`,
      summaryHtml: `
        <h5>Route 28 and Silver Cave</h5>
        <p>
          There’s only one pokemon to catch in the grassy route leading up to Silver Cave – Sneasel. This is only obtainable during the night time. Once you’re done, head inside the cave. On any floor you’ll be able to catch a Larvitar. It’s level is much lower than the other wild pokemon so make sure you’ve got a way of lowering its HP safely (e.g. False Swipe). The final wild pokemon is Misdreavus which you’ll be able to find in the deeper floors (anywhere but the entrance) during night time only. If you make your way all the way to the top of Mt Silver you’ll of course be able to battle the former Champion, Red. Be warned, his team is very high levelled.
        </p>
        <pre>
          Sneasel
          Larvitar → (Lv. 30) → Pupitar → (Lv. 55) → Tyranitar
          Misdreavus
        </pre>

        <p>
          And with that, the challenge is complete!
        </p>

        <h5>Levelling Tips</h5>
        <p>
          Only Larvitar to worry about, however since you catch it at a low level, this is a grind to get it to evolve into Tyranitar. Again, grind against wild Kanto pokemon where possible to battle evolved pokemon for some decent exp.
        </p>

        <p>
          <strong>End of the challenge:</strong><br/>
          Caught 199, Remaining 52
        </p>

        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1fXwvGspNnlGn9fw-SAJxVyDjYxQ43TOV38sgWhbaIT8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,

      rows: [
        /* --------------------------- Route 28 -------------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_215.png", name: "Sneasel" },
          method: "Route 28 grass (night only)"
        },

        /* --------------------------- Silver Cave ----------------------------- */
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_246.png", name: "Larvitar" },
          method: "Silver Cave (any floor; low level)"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_247.png", name: "Pupitar" },
          method: "Evolve from Larvitar at level 30"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_248.png", name: "Tyranitar" },
          method: "Evolve from Pupitar at level 55"
        },
        {
          pokemon: { img: "assets/images/Gold/pokedex/Spr_2g_200.png", name: "Misdreavus" },
          method: "Silver Cave deeper floors (night only)"
        }
      ]
    }
  }
};
