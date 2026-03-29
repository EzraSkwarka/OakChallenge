/* ----------------------
 - img src: https://archives.bulbagarden.net/wiki/Category:FireRed_and_LeafGreen_sprites 
 - badges: https://bulbapedia.bulbagarden.net/wiki/Badge
 - pokedex: https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex
 - Guide: https://docs.google.com/document/d/1KF_Qkn5YnPcYvSDVaI3mMhS8RgBsHRsXmbXWCzOhRk0/edit?tab=t.0
----------------------- */
const imgBasehref = "assets/images/FireRed and LeafGreen/pokedex/Spr_3f_";
const badgeBasehref = "assets/images/FireRed and LeafGreen/badges/";


window.gameData = {
  gameId: "leafgreen",
  gameTitle: "Pokémon LeafGreen",

  logo: "assets/images/logos/leafgreen.png",

  aboutHtml: `
    <section class="game-intro-content">
      <ul>
        <li>This is a damn sight easier than playing the original Red and Blue games because of generation 1’s awful limitations on how few moves a Pokémon learned, PC boxes being full, lack of running shoes/Vs Seeker etc.</li>
        <li>This will be a very grindy challenge. If you don’t think you’ve got the patience, then now would be the time to back out. The first part of the game alone (before Brock) will take you about 30 hours! It gets less grindy as the game proceeds, but it will be a long road.</li>
        <li>Learning new moves shouldn’t be taken for granted, particularly with Pokémon that evolve at higher levels. During a normal game you might be quick to replace Charmander’s Scratch with Slash but getting rid of non-attacking moves is a better strategy here. Again, on the first part of the challenge before Brock, you are battling low level Pokémon and will run out of PP very quickly while that exp bar goes up very slowly. You need to maximize the amount of Pokémon you can defeat, so having multiple attacking moves, regardless of how weak they are, will be beneficial. You have no need for moves like Growl or Sand Attack.</li>
        <li>This challenge is a fun alternative to a regular play through and you may really appreciate having to train Pokémon up yourself that you never trained before. On the other hand you may end up despising certain Pokémon due to their inability to attack when you first get them or their generally poor levelling up moves.</li>
        <li>It’s not really a rule, but my preferred method is that you train them yourself except when they can’t battle themselves (i.e. Magikarp before it learns Tackle). This is all down to your own limitations that you set. I don’t like using Rare Candy anymore as it defeats the purpose of the challenge and I don’t like using any exp sharing items. But remember that this is YOUR challenge so feel free to add or remove restrictions as you see fit.</li>
        <li>Please note that this is not a full guide to the game, I am only listing the Pokémon you can catch at the earliest opportunities and any required items. I do not go into full detail on optimal exp gains or where to find the highest level for an individual Pokémon etc. This playthrough and guide were done as a casual play rather than a speed run. Please consult other guides for a full walkthrough or more detailed information.</li>
      </ul>
      <p class="tips-source">
        <a href="https://docs.google.com/document/d/1KF_Qkn5YnPcYvSDVaI3mMhS8RgBsHRsXmbXWCzOhRk0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
    </section>
  `,

  progression: {
    "Pre Badge 1": {
      headerTitle: "Pre Badge 1: Brock",
      headerImg: badgeBasehref + "boulder-badge.png",
      headerImgAlt: "Boulder Badge",

      summaryShort:
        "This first part will cover everything you can do BEFORE you get that first badge from Brock. This is probably the most daunting part of the challenge…",

      summaryHtml: `
        <h5>Pallet Town</h5>

        <p>
          Starting off in your hometown, you’ll soon be given the chance to grab your first starter Pokémon. Knowing that I’d need to evolve my starter twice, I picked Charmander, who would be the easiest Pokémon to grind with in the early routes. Squirtle and Bulbasaur are fine, but I anticipated a much harder struggle against the Viridian Forest bugs with grass-type moves.
        </p>
        <p>
          I don’t know if they fixed the glitch from RBY where your starter wouldn’t register if you evolved it prior to getting the Pokédex, so rather than chance it, go to Viridian City, grab the parcel from the PokéMart, deliver it to Professor Oak, and obtain the Pokédex and Poké Balls before evolving anything.
        </p>
        <p>You can now evolve:</p>
        <pre>
          Bulbasaur → Lv. 16 → Ivysaur → Lv. 32 → Venusaur
          Charmander → Lv. 16 → Charmeleon → Lv. 36 → Charizard
          Squirtle → Lv. 16 → Wartortle → Lv. 36 → Blastoise
        </pre>

        <p>You’re not expected to finish these evolutions immediately. This will likely be one of the last Pokémon you complete before defeating Brock.</p>

        <h5>Route 1</h5>
        <p>Only two Pokémon to catch and evolve here:</p>
        <pre>
          Pidgey → Lv. 18 → Pidgeotto → Lv. 36 → Pidgeot
          Rattata → Lv. 20 → Raticate
        </pre>

        <h5>Route 22</h5>
        <p>Head west from Viridian City to Route 22 to catch:</p>
        <pre>
          Mankey → Lv. 28 → Primeape
          Spearow → Lv. 20 → Fearow
        </pre>
        <p>Catch an extra Spearow for a trade later on. You can also battle your rival here if you need trainer experience—your starter or Pidgey/Pidgeotto can benefit from it.</p>

        <h5>Viridian Forest</h5>
        <p>Return to Viridian City and head north into Viridian Forest.</p>
        <pre>
          Caterpie → Lv. 7 → Metapod → Lv. 10 → Butterfree
          Weedle → Lv. 7 → Kakuna → Lv. 10 → Beedrill
          Pikachu
        </pre>
        <p>You can’t obtain a Thunder Stone yet, so Pikachu will remain unevolved for now.</p>

        <h5>Pewter City</h5>
        <p>You may enter Pewter City, but you cannot progress until you obtain your first badge.</p>

        <h5>Levelling Up Tips</h5>
        <p>This will be the longest and most grind-heavy part of the challenge, especially without Running Shoes or the Vs. Seeker. Fully evolving your starter and Pidgeot are the biggest time sinks.</p>
        <ul>
          <li>Rotate Pokémon to reduce PP drain and tedium.</li>
          <li>Once you can OHKO Weedle, poison becomes irrelevant.</li>
          <li>Consider fleeing from Pikachu to avoid paralysis from Static.</li>
          <li>Prioritize attacking moves over utility moves early.</li>
        </ul>
        <p>For extra experience, defeat the trainers in the gym—but do not talk to Brock until your Pokédex for this section is complete.</p>

        <p><strong>End of Part 1</strong><br/>Caught: 19 · Remaining: 132</p>
        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1KF_Qkn5YnPcYvSDVaI3mMhS8RgBsHRsXmbXWCzOhRk0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,
      summaryOpen: false,

      rows: [
        /* --------------------------- Starter Choice Rows ---------------------------- */
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "bulbasaur",
          pokemon: {
            img: imgBasehref +"001.png",
            name: "Bulbasaur"
          },
          method: "Pick this starter to show the Bulbasaur line"
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "charmander",
          pokemon: {
            img: imgBasehref +"004.png",
            name: "Charmander"
          },
          method: "Pick this starter to show the Charmander line"
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "squirtle",
          pokemon: {
            img: imgBasehref +"007.png",
            name: "Squirtle"
          },
          method: "Pick this starter to show the Squirtle line"
        },

        /* --------------------------- Bulbasaur Line ---------------------------- */
        {
          pokemon: {
            img: imgBasehref +"001.png",
            name: "Bulbasaur"
          },
          method: "Choose as Starter",

          requires: { starter: "bulbasaur" }
        },
        {
          pokemon: {
            img: imgBasehref +"002.png",
            name: "Ivysaur"
          },
          method: "Evolve from Bulbasaur at Lvl. 16",

          requires: { starter: "bulbasaur" }
        },
        {
          pokemon: {
            img: imgBasehref +"003.png",
            name: "Venusaur"
          },
          method: "Evolve from Ivysaur at Lvl. 32",

          requires: { starter: "bulbasaur" }
        },

        /* --------------------------- Charmander Line ---------------------------- */
        {
          pokemon: {
            img: imgBasehref +"004.png",
            name: "Charmander"
          },
          method: "Choose as Starter",

          requires: { starter: "charmander" }
        },
        {
          pokemon: {
            img: imgBasehref +"005.png",
            name: "Charmeleon"
          },
          method: "Evolve from Charmander at Lvl. 16",

          requires: { starter: "charmander" }
        },
        {
          pokemon: {
            img: imgBasehref +"006.png",
            name: "Charizard"
          },
          method: "Evolve from Charmeleon at Lvl. 36",

          requires: { starter: "charmander" }
        },

        /* --------------------------- Squirtle Line ---------------------------- */
        {
          pokemon: {
            img: imgBasehref +"007.png",
            name: "Squirtle"
          },
          method: "Choose as Starter",

          requires: { starter: "squirtle" }
        },
        {
          pokemon: {
            img: imgBasehref +"008.png",
            name: "Wartortle"
          },
          method: "Evolve from Squirtle at Lvl. 16",

          requires: { starter: "squirtle" }
        },
        {
          pokemon: {
            img: imgBasehref +"009.png",
            name: "Blastoise"
          },
          method: "Evolve from Wartortle at Lvl. 36",

          requires: { starter: "squirtle" }
        },

        /* --------------------------- Wild Pokémon ---------------------------- */
        /* --------------------------- Route 1 --------------------------------- */
        {
          pokemon: {
            img: imgBasehref +"016.png",
            name: "Pidgey"
          },
          method: "Catch on Route 1"
        },
        {
          pokemon: {
            img: imgBasehref +"017.png",
            name: "Pidgeotto"
          },
          method: "Evolve from Pidgey at level 18"
        },
        {
          pokemon: {
            img: imgBasehref +"018.png",
            name: "Pidgeot"
          },
          method: "Evolve from Pidgeotto at level 36"
        },
        {
          pokemon: {
            img: imgBasehref +"019.png",
            name: "Rattata"
          },
          method: "Catch on Route 1"
        },
        {
          pokemon: {
            img: imgBasehref +"020.png",
            name: "Raticate"
          },
          method: "Evolve from Rattata at level 20"
        },
        /* --------------------------- Route 22 -------------------------------- */
        {
          pokemon: {
            img: imgBasehref +"021.png",
            name: "Spearow"
          },
          method: "Catch on Route 22; You will need two for a trade later"
        },
        {
          pokemon: {
            img: imgBasehref +"022.png",
            name: "Fearow"
          },
          method: "Evolve from Spearow at level 20"
        },
        {
          pokemon: {
            img: imgBasehref +"056.png",
            name: "Mankey"
          },
          method: "Catch on Route 22"
        },
        {
          pokemon: {
            img: imgBasehref +"057.png",
            name: "Primeape"
          },
          method: "Evolve from Mankey at level 28"
        },
        /* --------------------------- Viridian Forest ------------------------- */

        {
          pokemon: {
            img: imgBasehref +"010.png",
            name: "Caterpie"
          },
          method: "Catch in the Viridian Forest"
        },
        {
          pokemon: {
            img: imgBasehref +"011.png",
            name: "Metapod"
          },
          method: "Evolve from Caterpie at level 7"
        },
        {
          pokemon: {
            img: imgBasehref +"012.png",
            name: "Butterfree"
          },
          method: "Evolve from Metapod at level 10"
        },
        {
          pokemon: {
            img: imgBasehref +"013.png",
            name: "Weedle"
          },
          method: "Catch in the Viridian Forest"
        },
        {
          pokemon: {
            img: imgBasehref +"014.png",
            name: "Kakuna"
          },
          method: "Evolve from Weedle at level 7"
        },
        {
          pokemon: {
            img: imgBasehref +"015.png",
            name: "Beedrill"
          },
          method: "Evolve from Kakuna at level 10"
        },

        {
          pokemon: {
            img: imgBasehref +"025.png",
            name: "Pikachu"
          },
          method: "Viridian Forest"
        }
      ]
    },

    "Pre Badge 2: Misty": {
      headerImg: badgeBasehref + "cascade-badge.png",
      headerImgAlt: "Cascade Badge",
      summaryShort:
        "Take on Brock with your fearsome team and get that first badge. You can finally leave through the eastern exit of Pewter City.",

      summaryHtml: `
        <h5>Route 3</h5>

        <p>
          Now that you don’t need experience immediately, plenty of trainers will be waiting for you. Try to skip as many as possible so you can return later with new Pokémon. Past the trainers you’ll find grass patches containing:
        </p>
        <pre>
          Nidoran♀ → Lv. 16 → Nidorina
          Nidoran♂ → Lv. 16 → Nidorino
          Jigglypuff
        </pre>
        <p>All three Pokémon require a Moon Stone to evolve, which we’ll be able to obtain shortly.</p>

        <h5>Route 4 (Pokémon Center)</h5>
        <p>
          Head north from Route 3 and purchase a Magikarp from the salesman in the Pokémon Center. Use a bait‑and‑switch strategy against Route 3 trainers to help level it up.
        </p>
        <pre>
          Magikarp → Lv. 20 → Gyarados
        </pre>

        <h5>Mt. Moon</h5>
        <p><strong>Important:</strong> Be very cautious about progressing through Mt. Moon too quickly. There is a point of no return—once you exit the cave and hop over the ledge, you cannot return without another badge, which would fail the challenge.</p>
        <p>Inside the cave you can catch:</p>
        <pre>
          Zubat → Lv. 22 → Golbat
          Geodude → Lv. 25 → Graveler
          Paras → Lv. 24 → Parasect
          Clefairy
        </pre>
        <p>
          Due to National Dex restrictions, Golbat cannot evolve into Crobat, so don’t waste time trying. Graveler will also never evolve into Golem since trading is not allowed.
        </p>
        <p>You will need four Moon Stones total:</p>
        <ul>
          <li>One visible pickup in Mt. Moon</li>
          <li>One invisible pickup in the narrow right‑hand alcove before the fossils</li>
          <li>Two held by wild Clefairy (5% chance each)</li>
        </ul>
        <p>You may either catch Clefairy repeatedly or use the TM for Thief (found in Mt. Moon) to steal the stones.</p>
        <p>With all four Moon Stones, you can evolve:</p>
        <pre>
          Jigglypuff → Moon Stone → Wigglytuff
          Clefairy → Moon Stone → Clefable
          Nidorina → Moon Stone → Nidoqueen
          Nidorino → Moon Stone → Nidoking
        </pre>
        <p>Pick up one fossil on your way out of the cave.</p>

        <h5>Route 4 (Post–Mt. Moon)</h5>
        <p>Once you’re confident you’ve caught Geodude, Clefairy, Zubat, Paras, and obtained all four Moon Stones, you can finally leave the cave. In the grass you can catch:</p>
        <pre>
          Sandshrew → Lv. 22 → Sandslash
        </pre>

        <h5>Route 24</h5>
        <p>Enter Cerulean City, heal up, and head north to Route 24.</p>
        <pre>
          Abra → Lv. 16 → Kadabra
          Bellsprout → Lv. 21 → Weepinbell
        </pre>
        <p>
          Catch a second Abra for a trade later. Continue east to Bill’s house and obtain the S.S. Ticket.
        </p>

        <h5>Route 5</h5>
        <p>Return to Cerulean City but ignore the Gym for now. Go through the burgled house and head south to Route 5.</p>
        <pre>
          Meowth → Lv. 28 → Persian
        </pre>

        <h5>Vermilion City</h5>
        <p>Travel through the underground tunnel from Route 5 and continue south to Vermilion City. In one of the houses, trade your spare Spearow for:</p>
        <pre>
          Farfetch’d
        </pre>
        <p>Pick up the Bike Voucher from the Pokémon Fan Club president, and grab the Vs. Seeker from the Pokémon Center. This will be invaluable for levelling throughout the rest of the game.</p>

        <h5>Route 11</h5>
        <pre>
          Drowzee → Lv. 26 → Hypno
        </pre>

        <h5>Diglett Cave</h5>
        <p>Bring your spare Abra through Diglett Cave and exit through the far side. Catch a Diglett along the way.</p>
        <pre>
          Diglett → Lv. 26 → Dugtrio
        </pre>
        <p>You may evolve one or catch a wild Dugtrio directly.</p>

        <h5>Route 2</h5>
        <p>Exit Diglett Cave to the north and enter the nearby house to trade your Abra for:</p>
        <pre>
          Mr. Mime
        </pre>

        <h5>S.S. Anne</h5>
        <p>Return to Vermilion City and clear the S.S. Anne to obtain the HM for Cut. You cannot use Cut until you defeat Misty, so progression stops here for now.</p>

        <h5>Levelling Tips</h5>
        <ul>
          <li>Use the Vs. Seeker as much as possible.</li>
          <li>North of Vermilion City, a Bug Catcher with a Butterfree gives strong experience.</li>
          <li>The routes between Cerulean City and Bill’s house are ideal for repeated rematches.</li>
        </ul>

        <p><strong>End of Part 2</strong><br/>Caught: 51 · Remaining: 100</p>
        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1KF_Qkn5YnPcYvSDVaI3mMhS8RgBsHRsXmbXWCzOhRk0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,

      rows: [
        /* --------------------------- Fossil Choice Rows ---------------------------- */
        {
          type: "choice",
          choiceKey: "fossil",
          choiceValue: "dome",
          pokemon: {
            img: "assets/images/FireRed and LeafGreen/pokedex/Dream_Dome_Fossil_Sprite.png",
            name: "Dome Fossil"
          },
          method: "Choose the Dome Fossil to unlock Kabuto/Kabutops later"
        },
        {
          type: "choice",
          choiceKey: "fossil",
          choiceValue: "helix",
          pokemon: {
            img: "assets/images/FireRed and LeafGreen/pokedex/Dream_Helix_Fossil_Sprite.png",
            name: "Helix Fossil"
          },
          method: "Choose the Helix Fossil to unlock Omanyte/Omastar later"
        },

        /* --------------------------- Wild Pokémon ---------------------------- */
        /* --------------------------- Route 3 --------------------------------- */
        {
          pokemon: {
            img: imgBasehref +"029.png",
            name: "Nidoran F"
          },
          method: "Catch on Route 3"
        },
        {
          pokemon: {
            img: imgBasehref +"030.png",
            name: "Nidorina"
          },
          method: "Evolve from Nidoran F at level 16"
        },
        {
          pokemon: {
            img: imgBasehref +"031.png",
            name: "Nidoqueen"
          },
          method: "Use a Moon Stone on Nidorina"
        },
        {
          pokemon: {
            img: imgBasehref +"032.png",
            name: "Nidoran M"
          },
          method: "Catch on Route 3"
        },
        {
          pokemon: {
            img: imgBasehref +"033.png",
            name: "Nidorino"
          },
          method: "Evolve from Nidoran M at level 16"
        },
        {
          pokemon: {
            img: imgBasehref +"034.png",
            name: "Nidoking"
          },
          method: "Use a Moon Stone on Nidorino"
        },
        {
          pokemon: {
            img: imgBasehref +"039.png",
            name: "Jigglypuff"
          },
          method: "Catch on Route 3"
        },
        {
          pokemon: {
            img: imgBasehref +"040.png",
            name: "Wigglytuff"
          },
          method: "Use a Moon Stone on Jigglypuff"
        },
        /* --------------------------- Route 4 --------------------------------- */
        {
          pokemon: {
            img: imgBasehref +"129.png",
            name: "Magikarp"
          },
          method: "Buy a Magikarp from the salesman in the Pokémon center"
        },
        {
          pokemon: {
            img: imgBasehref +"130.png",
            name: "Gyarados"
          },
          method: "Evolve from Magikarp at level 20"
        },

        /* --------------------------- Mt. Moon -------------------------------- */
        {
          pokemon: { img: imgBasehref +"041.png", name: "Zubat" },
          method: "Catch in Mt. Moon"
        },
        {
          pokemon: {
            img: imgBasehref +"042.png",
            name: "Golbat"
          },
          method: "Evolve from Zubat at level 22"
        },
        {
          pokemon: {
            img: imgBasehref +"074.png",
            name: "Geodude"
          },
          method: "Catch in Mt. Moon"
        },
        {
          pokemon: {
            img: imgBasehref +"075.png",
            name: "Graveler"
          },
          method: "Evolve from Geodude at level 25"
        },
        {
          pokemon: { img: imgBasehref +"046.png", name: "Paras" },
          method: "Catch in Mt. Moon"
        },
        {
          pokemon: {
            img: imgBasehref +"047.png",
            name: "Parasect"
          },
          method: "Evolve from Paras at level 24"
        },
        {
          pokemon: {
            img: imgBasehref +"035.png",
            name: "Clefairy"
          },
          method: "Catch in Mt. Moon"
        },
        {
          pokemon: {
            img: imgBasehref +"036.png",
            name: "Clefable"
          },
          method: "Use a Moon Stone on Clefairy"
        },

        /* --------------------------- Route 4 after Mt. Moon ------------------ */
        {
          pokemon: { img: imgBasehref +"027.png", name: "Sandshrew" },
          method: "Catch on Route 4"
        },
        {
          pokemon: { img: imgBasehref +"028.png", name: "Sandslash" },
          method: "Evolve from Sandshrew at level 22"
        },
        /* --------------------------- Route 24 -------------------------------- */
        {
          pokemon: { img: imgBasehref +"063.png", name: "Abra" },
          method: "Catch on Route 24"
        },
        {
          pokemon: {
            img: imgBasehref +"064.png",
            name: "Kadabra"
          },
          method: "Evolve from Abra at level 16"
        },
        {
          pokemon: {
            img: imgBasehref +"069.png",
            name: "Bellsprout"
          },
          method: "Catch on Route 24"
        },
        {
          pokemon: { img: imgBasehref +"070.png", name: "Weepinbell" },
          method: "Evolve from Bellsprout at level 21"
        },
        /* --------------------------- Route 5 --------------------------------- */
        {
          pokemon: {
            img: imgBasehref +"052.png",
            name: "Meowth"
          },
          method: "Catch on Route 5"
        },
        {
          pokemon: {
            img: imgBasehref +"053.png",
            name: "Persian"
          },
          method: "Evolve from Meowth at level 28"
        },
        /* --------------------------- Vermilion City -------------------------- */
        {
          pokemon: {
            img: imgBasehref +"083.png",
            name: "Farfetch'd"
          },
          method: "Trade for Spearow in Vermilion City"
        },
        /* --------------------------- Route 11 -------------------------------- */
        {
          pokemon: {
            img: imgBasehref +"096.png",
            name: "Drowzee"
          },
          method: "Catch on Route 11"
        },
        {
          pokemon: { img: imgBasehref +"097.png", name: "Hypno" },
          method: "Evolve from Drowzee at level 26"
        },
        /* --------------------------- Diglett Cave ---------------------------- */
        {
          pokemon: {
            img: imgBasehref +"050.png",
            name: "Diglett"
          },
          method: "Catch in Diglett Cave"
        },
        {
          pokemon: {
            img: imgBasehref +"051.png",
            name: "Dugtrio"
          },
          method: "Evolve from Diglett at level 26"
        },
        /* --------------------------- Route 2 --------------------------------- */
        {
          pokemon: {
            img: imgBasehref +"122.png",
            name: "Mr. Mime"
          },
          method: "Trade for Abra in the house north of Diglett Cave"
        }
      ]
    },

    "Pre Badge 3: Koga": {
      headerImg: badgeBasehref + "soul-badge.png",
      headerImgAlt: "Soul Badge",
      summaryShort:
        "Defeat Misty to earn the Cascade Badge and unlock Cut. With the bike acquired, nearly all of Kanto opens up. Lt. Surge can be skipped for now, allowing massive Pokédex progress before earning another badge.",

      summaryHtml: `
        <h5>Route 4 / Pewter City</h5>
        <p>Return through Diglett Cave and use Cut on Route 4 to obtain the HM for Flash. While in Pewter City, enter the side entrance of the museum to collect the Old Amber.</p>

        <h5>Route 9 / Route 10</h5>
        <p>East of Cerulean City, cut down the tree on Route 9 and continue through to Route 10. The grass patch near the water contains:</p>
        <pre>
          Voltorb → Lv. 30 → Electrode
        </pre>

        <h5>Rock Tunnel</h5>
        <p>Flash is helpful but not required. Inside Rock Tunnel you can catch:</p>
        <pre>
          Machop → Lv. 28 → Machoke
          Onix
        </pre>

        <h5>Route 8</h5>
        <p>Pass through Lavender Town and head west to Route 8. The only new Pokémon here is:</p>
        <pre>
          Vulpix
        </pre>

        <h5>Celadon City</h5>
        <p>Travel through the underground tunnel to reach Celadon City. Here you can obtain:</p>
        <pre>
          Eevee
          Porygon
        </pre>
        <p>Eevee is found through a back entrance of one of the tall buildings. The Game Corner contains several Pokémon, but most can be obtained later in the Safari Zone. Porygon must be purchased here.</p>
        <p>Using the Vs. Seeker for trainer rematches is the best way to earn money for coins (9,999 in FireRed).</p>
        <p>Visit the Celadon Department Store to purchase evolution stones and evolve:</p>
        <pre>
          Pikachu → Thunder Stone → Raichu
          Eevee → Fire / Thunder / Water Stone → Flareon / Jolteon / Vaporeon
          Vulpix → Fire Stone → Ninetails
          Weepinbell → Leaf Stone → Victreebel
        </pre>
        <p>From this point onward, any Pokémon that requires a stone should be evolved here. While in Celadon, clear out the Rocket Hideout to obtain the Silph Scope.</p>

        <h5>Route 16</h5>
        <p>Head west and use Cut to access the grass on Route 16.</p>
        <pre>
          Doduo → Lv. 31 → Dodrio
        </pre>

        <h5>Lavender Town</h5>
        <p>Return to Lavender Town and rescue Mr. Fuji from Pokémon Tower. With the Silph Scope, you can now catch:</p>
        <pre>
          Gastly → Lv. 25 → Haunter
          Cubone → Lv. 28 → Marowak
        </pre>
        <p>As a reward, you will receive the Poké Flute. Head south to awaken and catch:</p>
        <pre>
          Snorlax
        </pre>

        <h5>Route 12</h5>
        <p>Continue south and enter the fishing house to obtain the Super Rod.</p>

        <h5>Fuchsia City</h5>
        <p>Catch the second Snorlax west of Celadon City and ride Cycling Road south to reach Fuchsia City, where you can obtain the Good Rod.</p>

        <h5>Fishing Spree and Completing Trades</h5>
        <p>With both rods, tour Kanto to catch and evolve:</p>
        <pre>
          Staryu → Water Stone → Starmie (Super Rod – Pallet Town)
          Horsea → Lv. 32 → Seadra (Good Rod – Pallet Town)
          Poliwag → Lv. 25 → Poliwhirl → Water Stone → Poliwrath (Good Rod – Viridian City)
          Goldeen → Lv. 33 → Seaking (Good Rod – Viridian City)
          Krabby → Lv. 28 → Kingler (Good Rod – Pallet Town)
          Grimer → Lv. 38 → Muk (Super Rod – Celadon City)
        </pre>
        <p>Catching Grimer is particularly difficult due to its 1% encounter rate in Celadon City. Catch an additional Poliwhirl and bring your extra Slowbro to complete two trades:</p>
        <pre>
          Slowbro → Lickitung
          Poliwhirl → Jynx
        </pre>

        <h5>Route 14 and Route 15</h5>
        <pre>
          Ditto
          Venonat → Lv. 31 → Venomoth
        </pre>

        <h5>Safari Zone</h5>
        <p>You may need multiple visits. Collect Surf and the Gold Teeth to trade for Strength. Pokémon to obtain here include:</p>
        <pre>
          Dratini → Lv. 30 → Dragonair → Lv. 55 → Dragonite
          Exeggcute → Leaf Stone → Exeggutor
          Rhyhorn → Lv. 42 → Rhydon
          Chansey
          Pinsir
          Tauros
          Kangaskhan
        </pre>
        <p>Each has a low encounter and capture rate. Expect frustration.</p>

        <h5>Saffron City</h5>
        <p>Defeat the Fighting Dojo to obtain:</p>
        <pre>
          Hitmonlee / Hitmonchan
        </pre>
        <p>Clear Silph Co. and receive:</p>
        <pre>
          Lapras
        </pre>

        <p>At this point, it’s finally time to earn another badge. You’ve now completed nearly two‑thirds of the Pokédex with only two badges.</p>

        <h5>Levelling Tips</h5>
        <p>Dragonite will be the hardest evolution here. Teaching Surf helps conserve TMs. A Hiker outside Rock Tunnel (Lavender side) and the biker cluster on Cycling Road are excellent Vs. Seeker targets.</p>

        <p><strong>End of Part 3</strong><br/>Caught: 103 · Remaining: 48</p>
        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1KF_Qkn5YnPcYvSDVaI3mMhS8RgBsHRsXmbXWCzOhRk0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,

      rows: [
        /* --------------------------- Eeveelution Choice Rows ---------------------------- */
        {
          type: "choice",
          choiceKey: "eeveelution",
          choiceValue: "vaporeon",
          pokemon: {
            img: imgBasehref +"134.png",
            name: "Vaporeon"
          },
          method: "Pick this Eeveelution to show the Vaporeon line"
        },
        {
          type: "choice",
          choiceKey: "eeveelution",
          choiceValue: "jolteon",
          pokemon: {
            img: imgBasehref +"135.png",
            name: "Jolteon"
          },
          method: "Pick this Eeveelution to show the Jolteon line"
        },
        {
          type: "choice",
          choiceKey: "eeveelution",
          choiceValue: "flareon",
          pokemon: {
            img: imgBasehref +"136.png",
            name: "Flareon"
          },
          method: "Pick this Eeveelution to show the Flareon line"
        },

        /* --------------------------- Dojo Choice Rows ---------------------------- */
        {
          type: "choice",
          choiceKey: "dojo",
          choiceValue: "hitmonlee",
          pokemon: {
            img: imgBasehref +"106.png",
            name: "Hitmonlee"
          },
          method: "Pick this Hitmon to show the Hitmonlee line"
        },
        {
          type: "choice",
          choiceKey: "dojo",
          choiceValue: "hitmonchan",
          pokemon: {
            img: imgBasehref +"107.png",
            name: "Hitmonchan"
          },
          method: "Pick this Hitmon to show the Hitmonchan line"
        },

        /* --------------------------- Wild Pokémon ---------------------------- */
        /* --------------------------- Route 9/Route 10 ------------------------ */
        {
          pokemon: {
            img: imgBasehref +"100.png",
            name: "Voltorb"
          },
          method: "East of Cerulean City, cut the tree down and pass through Route 9 to reach Route 10."
        },
        {
          pokemon: {
            img: imgBasehref +"101.png",
            name: "Electrode"
          },
          method: "Evolve From Voltorb at level 30"
        },
        /* --------------------------- Rock Tunnel ----------------------------- */
        {
          pokemon: {
            img: imgBasehref +"066.png",
            name: "Machop"
          },
          method: "Catch in Rock Tunnel"
        },
        {
          pokemon: {
            img: imgBasehref +"067.png",
            name: "Machoke"
          },
          method: "Evolve From Machop at level 28"
        },
        {
          pokemon: { img: imgBasehref +"095.png", name: "Onix" },
          method: "Catch in Rock Tunnel"
        },
        /* --------------------------- Route 8 --------------------------------- */
        {
          pokemon: {
            img: imgBasehref +"037.png",
            name: "Vulpix"
          },
          method: "Catch on Route 8"
        },
        {
          pokemon: {
            img: imgBasehref +"038.png",
            name: "Ninetails"
          },
          method: "Use a Fire Stone on Vulpix"
        },
        /* --------------------------- Celadon City ---------------------------- */
        {
          pokemon: { img: imgBasehref +"133.png", name: "Eevee" },
          method: "Celadon City"
        },

        /* --------------------------- Flareon Line ---------------------------- */
        {
          pokemon: {
            img: imgBasehref +"136.png",
            name: "Flareon"
          },
          method: "Choose as Starter",

          requires: { eeveelution: "flareon" }
        },

        /* --------------------------- Jolteon Line ---------------------------- */
        {
          pokemon: {
            img: imgBasehref +"135.png",
            name: "Jolteon"
          },
          method: "Choose as Starter",

          requires: { eeveelution: "jolteon" }
        },

        /* --------------------------- Vaporeon Line ---------------------------- */
        {
          pokemon: {
            img: imgBasehref +"134.png",
            name: "Vaporeon"
          },
          method: "Choose as Starter",

          requires: { eeveelution: "vaporeon" }
        },

        {
          pokemon: {
            img: imgBasehref +"137.png",
            name: "Porygon"
          },
          method: "Celadon City Game Corner"
        },
        {
          pokemon: {
            img: imgBasehref +"026.png",
            name: "Raichu"
          },
          method: "Use a Thunder Stone on Pikachu"
        },
        {
          pokemon: {
            img: imgBasehref +"071.png",
            name: "Victreebel"
          },
          method: "Use a Leaf Stone on Weepinbell"
        },
        /* --------------------------- Route 16 -------------------------------- */
        {
          pokemon: { img: imgBasehref +"084.png", name: "Doduo" },
          method: "Catch on Route 16"
        },
        {
          pokemon: {
            img: imgBasehref +"085.png",
            name: "Dodrio"
          },
          method: "Evolve From Doduo at level 31"
        },
        /* --------------------------- Lavendar Town --------------------------- */
        {
          pokemon: {
            img: imgBasehref +"092.png",
            name: "Gastly"
          },
          method: "Catch in Pokémon Tower"
        },
        {
          pokemon: {
            img: imgBasehref +"093.png",
            name: "Haunter"
          },
          method: "Evolve From Gastly at level 25"
        },
        {
          pokemon: {
            img: imgBasehref +"104.png",
            name: "Cubone"
          },
          method: "Catch in Pokémon Tower"
        },
        {
          pokemon: {
            img: imgBasehref +"105.png",
            name: "Marowak"
          },
          method: "Evolve From Cubone at level 28"
        },
        {
          pokemon: {
            img: imgBasehref +"143.png",
            name: "Snorlax"
          },
          method: "Catch on Route 12"
        },
        /* --------------------------- "Fishing Spree" ------------------------- */
        {
          pokemon: {
            img: imgBasehref +"120.png",
            name: "Staryu"
          },
          method: "Fish in Pallet Town"
        },
        {
          pokemon: {
            img: imgBasehref +"121.png",
            name: "Starmie"
          },
          method: "Use a Water Stone on Staryu"
        },
        {
          pokemon: {
            img: imgBasehref +"116.png",
            name: "Horsea"
          },
          method: "Fish in Pallet Town"
        },
        {
          pokemon: {
            img: imgBasehref +"117.png",
            name: "Seadra"
          },
          method: "Evolve From Horsea at level 32"
        },
        {
          pokemon: {
            img: imgBasehref +"079.png",
            name: "Slowpoke"
          },
          method: "Fish in Viridian City"
        },
        {
          pokemon: {
            img: imgBasehref +"080.png",
            name: "Slowbro"
          },
          method: "Evolve From Slowpoke at level 37; Need two"
        },
        {
          pokemon: {
            img: imgBasehref +"060.png",
            name: "Poliwag"
          },
          method: "Fish in Viridian City"
        },
        {
          pokemon: {
            img: imgBasehref +"061.png",
            name: "Poliwhirl"
          },
          method: "Evolve From Poliwag at level 25; Need Two"
        },
        {
          pokemon: {
            img: imgBasehref +"062.png",
            name: "Poliwrath"
          },
          method: "Use a Water Stone on Poliwhirl"
        },
        {
          pokemon: {
            img: imgBasehref +"118.png",
            name: "Goldeen"
          },
          method: "Fish in Viridian City"
        },
        {
          pokemon: {
            img: imgBasehref +"119.png",
            name: "Seaking"
          },
          method: "Evolve From Goldeen at level 33"
        },
        {
          pokemon: {
            img: imgBasehref +"098.png",
            name: "Krabby"
          },
          method: "Fish in Pallet Town"
        },
        {
          pokemon: {
            img: imgBasehref +"099.png",
            name: "Kingler"
          },
          method: "Evolve From Krabby at level 28"
        },
        {
          pokemon: {
            img: imgBasehref +"088.png",
            name: "Grimer"
          },
          method: "Fish in Celadon City"
        },
        {
          pokemon: { img: imgBasehref +"089.png", name: "Muk" },
          method: "Evolve From Grimer at level 38"
        },
        {
          pokemon: { img: imgBasehref +"124.png", name: "Jynx" },
          method: "Trade (Cerulean City): Poliwhirl → Jynx"
        },
        {
          pokemon: {
            img: imgBasehref +"108.png",
            name: "Lickitung"
          },
          method: "Trade (Route 18 gate): Slowbro → Lickitung"
        },
        /* --------------------------- Route 14/Routeb 15 ---------------------- */
        {
          pokemon: { img: imgBasehref +"132.png", name: "Ditto" },
          method: "Catch on Route 14"
        },
        {
          pokemon: {
            img: imgBasehref +"048.png",
            name: "Venonat"
          },
          method: "Catch on Route 14"
        },
        {
          pokemon: {
            img: imgBasehref +"049.png",
            name: "Venomoth"
          },
          method: "Evolve From Venonat at level 31"
        },
        /* --------------------------- Safari Zone ----------------------------- */
        {
          pokemon: {
            img: imgBasehref +"147.png",
            name: "Dratini"
          },
          method: "Safari Zone; Game Corner"
        },
        {
          pokemon: {
            img: imgBasehref +"148.png",
            name: "Dragonair"
          },
          method: "Evolve From Dratini at level 30"
        },
        {
          pokemon: {
            img: imgBasehref +"149.png",
            name: "Dragonite"
          },
          method: "Evolve From Dragonair at level 55"
        },

        {
          pokemon: {
            img: imgBasehref +"102.png",
            name: "Exeggcute"
          },
          method: "Safari Zone"
        },
        {
          pokemon: {
            img: imgBasehref +"103.png",
            name: "Exeggutor"
          },
          method: "Use a Leaf Stone on Exeggcute"
        },
        {
          pokemon: {
            img: imgBasehref +"111.png",
            name: "Rhyhorn"
          },
          method: "Safari Zone"
        },
        {
          pokemon: {
            img: imgBasehref +"112.png",
            name: "Rhydon"
          },
          method: "Evolve From Rhyhorn at level 42"
        },
        {
          pokemon: {
            img: imgBasehref +"113.png",
            name: "Chansey"
          },
          method: "Safari Zone"
        },
        {
          pokemon: {
            img: imgBasehref +"127.png",
            name: "Pinsir"
          },
          method: "Safari Zone"
        },
        {
          pokemon: {
            img: imgBasehref +"128.png",
            name: "Tauros"
          },
          method: "Safari Zone"
        },
        {
          pokemon: {
            img: imgBasehref +"115.png",
            name: "Kangaskhan"
          },
          method: "Safari Zone"
        },
        /* --------------------------- Saffron City ---------------------------- */
        /* --------------------------- Hitmonlee Line ---------------------------- */
        {
          pokemon: {
            img: imgBasehref +"106.png",
            name: "Hitmonlee"
          },
          method: "Choose Hitmonlee at the Dojo",

          requires: { dojo: "hitmonlee" }
        },

        /* --------------------------- Hitmonchan Line ---------------------------- */
        {
          pokemon: {
            img: imgBasehref +"107.png",
            name: "Hitmonchan"
          },
          method: "Choose Hitmonchan at the Dojo",

          requires: { dojo: "hitmonchan" }
        },
        {
          pokemon: {
            img: imgBasehref +"131.png",
            name: "Lapras"
          },
          method: "Silph Co"
        }
      ]
    },

    "Pre Badge 4: Blaine": {
      headerImg: badgeBasehref + "volcano-badge.png",
      headerImgAlt: "Volcano Badge",
      summaryShort:
        "With Surf available, prioritize water routes, the Power Plant, and Cinnabar (fossils), then proceed toward your fourth badge.",

      summaryHtml: `
        <p>
          At this point you can challenge Lt. Surge, Sabrina, Koga, or Erika. Lt. Surge and Sabrina unlock no useful HMs, and Erika’s Strength isn’t usable without Surf, making Koga the optimal next badge. With access to Surf, you can now begin clearing large water routes and several late‑game areas even with only three badges. Although multiple gyms are available, Koga is the optimal choice since Surf enables the most progress before the next badge.
        </p>

        <h5>Surf Encounters</h5>
        <p>Surf anywhere possible, particularly sea routes, to begin catching:</p>
        <pre>
          Tentacool → Lv. 30 → Tentacruel
        </pre>

        <h5>Power Plant</h5>
        <p>Surf to the Power Plant to catch:</p>
        <pre>
          Magnemite → Lv. 30 → Magneton
          Zapdos
        </pre>
        <p>Yes — you are catching a legendary Pokémon with only three badges.</p>

        <h5>Pallet Town</h5>
        <p>The grass patch south of Pallet Town is now accessible via Surf.</p>
        <pre>
          Tangela
        </pre>

        <h5>Cinnabar Island</h5>
        <p>Surf to Cinnabar Island and visit the Pokémon Lab to revive fossils obtained earlier.</p>
        <pre>
          Aerodactyl
          Kabuto / Omanyte → Lv. 40 → Kabutops / Omastar
        </pre>
        <p>Inside Pokémon Mansion, the only new Pokémon available is:</p>
        <pre>
          Koffing → Lv. 35 → Weezing
        </pre>
        <p>Be sure to pick up the Secret Key for the gym while you’re here.</p>

        <h5>Seafoam Islands</h5>
        <p>Surf east from Cinnabar Island to reach Seafoam Islands. For now, the only Pokémon you can catch is:</p>
        <pre>
          Seel → Lv. 34 → Dewgong
        </pre>

        <p>There are no further Pokémon available without additional badges, making this a relatively short section.</p>

        <h5>Levelling Tips</h5>
        <p>Use the same levelling strategies as the previous section. You haven’t unlocked many new efficient training routes yet, so Vs. Seeker grinding remains your best option.</p>

        <p><strong>End of Part 4</strong><br/>Caught: 116 · Remaining: 35</p>
        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1KF_Qkn5YnPcYvSDVaI3mMhS8RgBsHRsXmbXWCzOhRk0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,

      rows: [
        /* --------------------------- Wild Pokémon ---------------------------- */
        /* --------------------------- Surf ------------------------------------ */
        {
          pokemon: {
            img: imgBasehref +"072.png",
            name: "Tentacool"
          },
          method: "Surf"
        },
        {
          pokemon: {
            img: imgBasehref +"073.png",
            name: "Tentacruel"
          },
          method: "Evolve from Tentacool at level 30"
        },
        /* --------------------------- Power Plant ----------------------------- */
        {
          pokemon: {
            img: imgBasehref +"081.png",
            name: "Magnemite"
          },
          method: "Power Plant"
        },
        {
          pokemon: {
            img: imgBasehref +"082.png",
            name: "Magneton"
          },
          method: "Evolve from Magnemite at level 30"
        },
        {
          pokemon: {
            img: imgBasehref +"145.png",
            name: "Zapdos"
          },
          method: "Power Plant"
        },
        /* --------------------------- Pallet Town ----------------------------- */
        {
          pokemon: {
            img: imgBasehref +"114.png",
            name: "Tangela"
          },
          method: "Pallet Town + Surf"
        },
        /* --------------------------- Cinnabar Island ------------------------- */
        /* Helix Line */
        {
          pokemon: {
            img: imgBasehref +"138.png",
            name: "Omanyte"
          },
          method: "Choose Helix Fossil",

          requires: { fossil: "helix" }
        },
        {
          pokemon: {
            img: imgBasehref +"139.png",
            name: "Omastar"
          },
          method: "Evolve Omanyte at level 40",

          requires: { fossil: "helix" }
        },

        /* Dome Line */
        {
          pokemon: {
            img: imgBasehref +"140.png",
            name: "Kabuto"
          },
          method: "Choose Dome Fossil",

          requires: { fossil: "dome" }
        },
        {
          pokemon: {
            img: imgBasehref +"141.png",
            name: "Kabutops"
          },
          method: "Evolve Kabuto at level 40",

          requires: { fossil: "dome" }
        },

        {
          pokemon: {
            img: imgBasehref +"142.png",
            name: "Aerodactyl"
          },
          method: "Cinnabar Island"
        },
        {
          pokemon: {
            img: imgBasehref +"109.png",
            name: "Koffing"
          },
          method: "Pokémon Mansion"
        },
        {
          pokemon: {
            img: imgBasehref +"110.png",
            name: "Weezing"
          },
          method: "Evolve from Koffing at level 35"
        },
        /* --------------------------- Seafoam Islands ------------------------- */
        {
          pokemon: { img: imgBasehref +"086.png", name: "Seel" },
          method: "Seafoam Islands"
        },
        {
          pokemon: {
            img: imgBasehref +"087.png",
            name: "Dewgong"
          },
          method: "Evolve from Seel at level 34"
        }
      ]
    },

    "Pre Badge 5: Erika": {
      headerImg: badgeBasehref + "rainbow-badge.png",
      headerImgAlt: "Rainbow Badge",
      summaryShort:
        "Defeating Blaine grants access to the first Sevii Islands and allows you to catch two additional Pokémon, while defeating Erika to use Strength only unlocks one. For maximum progress, Blaine should be your fourth badge.",

      summaryHtml: `
        <h5>One Island</h5>

        <p>With the Volcano Badge earned from Blaine, you gain access to the first Sevii Islands. Surf east and then north to Kindle Road to catch:</p>
        <pre>
          Ponyta → Lv. 40 → Rapidash
        </pre>

        <p>There is nothing further you can do without the ability to use Strength, making this section even shorter than the previous one.</p>

        <p><strong>End of Part 5</strong><br/>FireRed: Caught 118 · Remaining 33</p>
        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1KF_Qkn5YnPcYvSDVaI3mMhS8RgBsHRsXmbXWCzOhRk0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,

      rows: [
        {
          pokemon: {
            img: imgBasehref +"077.png",
            name: "Ponyta"
          },
          method: "One Island"
        },
        {
          pokemon: {
            img: imgBasehref +"078.png",
            name: "Rapidash"
          },
          method: "Evolve from Ponyta at level 40"
        }
      ]
    },

    "Pre Elite Four": {
      headerImg: badgeBasehref + "earth-badge.png",
      headerImgAlt: "Earth Badge",
      summaryShort:
        "Defeating Erika unlocks Strength, allowing you to catch Articuno at Seafoam Islands and Moltres at Mt. Ember. After this, no additional Pokémon can be caught until the post‑game.",

      summaryHtml: `
        <p>With the Rainbow Badge obtained from Erika, you can now use Strength. This unlocks the final two Pokémon available before the post‑game.</p>

        <h5>Seafoam Islands</h5>
        <p>Return to Seafoam Islands and use Strength to access and catch:</p>
        <pre>
          Articuno
        </pre>

        <h5>One Island / Mt. Ember</h5>
        <p>Return to One Island and travel to Mt. Ember. Catch:</p>
        <pre>
          Magmar
          Moltres
        </pre>

        <p>There are no additional Pokémon available to catch until the post‑game.</p>

        <p><strong>End of Part 6</strong><br/>Caught: 121 · Remaining: 30</p>
        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1KF_Qkn5YnPcYvSDVaI3mMhS8RgBsHRsXmbXWCzOhRk0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,

      rows: [
        /* --------------------------- Wild Pokémon ---------------------------- */

        {
          pokemon: {
            img: imgBasehref +"144.png",
            name: "Articuno"
          },
          method: "Seafoam Islands"
        },
        {
          pokemon: {
            img: imgBasehref +"126.png",
            name: "Magmar"
          },
          method: "Mt Ember"
        },
        {
          pokemon: {
            img: imgBasehref +"146.png",
            name: "Moltres"
          },
          method: "Mt. Ember"
        }
      ]
    },

    "Post Game": {
      headerImg: badgeBasehref + "pokedex.png",
      headerImgAlt: "Gen III Kanto Pokedex",
      summaryShort:
        "With no further Pokémon available in Kanto before the League, defeat Lt. Surge, Sabrina, and Giovanni, clear the Elite Four, and obtain the National Pokédex. From there, the remainder of the challenge can be completed in any order, beginning with finishing the Kanto Dex before moving on to National Dex Pokémon.",

      summaryHtml: `
  <h5>Cerulean Cave </h5>
  <p>
    Note that this can’t be done until you’ve done the Ruby/Sapphire quest on Sevii Islands. Leave Cerulean City from the north exit, cross Nugget Bridge and then Surf along the river to reach Cerulean Cave. Deep inside you’ll find the 150th pokemon, Mewtwo. I’d recommend NOT using the Master Ball for this encounter, a far more deserving pokemon with potential challenge-breaking mechanics would be more beneficial. Mewtwo is Lv. 70 so bring your best ‘mons or come back later.
  </p>
  <pre>
    Mewtwo
  </pre>

  <h5>Four Island </h5>
  <p>
    Go back to One Island and talk to Celio in the pokemon center who will give you his pass to get to the other Sevii Islands and start the Ruby/Sapphire quest. Take the ferry to Four Island where you can access the breeding center. Breed your Hitmonlee/Hitmonchan with Ditto to get a Tyrogue which you can evolve into the one you didn’t pick. You can do the same with Eevee and evolve it into the other two Eeveelutions.
  </p>
  <pre>
    Tyrogue → Lv. 20 → Hitmonlee/Hitmonchan (depending on its stats)
    Eevee → Fire/Thunder/Water Stone → Flareon/Jolteon/Vaporeon
  </pre>
  <p>That’s as far as your Kanto dex can go!</p>

  <h5>Extra Evolutions -</h5>
  <p>
    With the National Dex in hand, some of your Kanto pokemon can evolve further! Two happiness evolutions and a stone evolution if you’re playing FireRed. The Sun Stone can be found in Ruin Valley on Six Island. There is no clock or day/night system so evolving Eevee into Espeon and Umbreon is not possible in these games.
  </p>
  <pre>
    Chansey → Happiness → Blissey
    Golbat → Happiness → Crobat
  </pre>
  <p>
    A bunch of other pokemon can breed with Ditto to hatch some baby pokemon and you can evolve another Tyrogue to get the last Hitmon for your collection:
  </p>
  <pre>
    Tyrogue → Lv. 20 (attack = defense) → Hitmontop
    Breed Pikachu/Raichu → Pichu
    Breed Clefairy/Clefable → Cleffa
    Breed Jigglypuff/Wigglytuff → Igglybuff
    Breed Jynx → Smoochum
    Breed Magmar → Magby
  </pre>

  <h5>One Island </h5>
  <p>
    Return to Mt Ember and you can exit a new area guarded by Team Rocket. Inside this cave you’ll encounter Slugma. Grab the gem at the end and return it to Celio.
  </p>
  <pre>
    Slugma → Lv. 38 → Magcargo
  </pre>

  <h5>Three Island</h5>
  <p>
    Straight off the ferry on Three Island, go through the nearby cave to find a patch of grass containing only one pokemon:
  </p>
  <pre>
    Dunsparce
  </pre>

  <h5>Four Island </h5>
  <p>
    Surf in the lake to find Wooper, while Delibird/Sneasel and Swinub can be found within Icefall Cave (don’t forget the Waterfall HM and use it to fight Team Rocket to help unlock a pokemon later)
  </p>
  <pre>
    Marill → Lv. 18 → Azumarill
    Sneasel
    Swinub → Lv. 33 → Piloswine
  </pre>

  <h5>Five Island </h5>
  <p>
    First go east to Five Island Meadow to catch Sentret and use the Super Rod there to catch Qwilfish (FR) or Remoraid (LG). North of the harbor you can Surf to encounter Hoppip on the water. In the western part of the water route you can find a man who will give you a Togepi egg if you show him a happy pokemon. In the north east part of the island, Murkrow/Misdreavus can be found in Lost Cave in the rooms that have items in them. Pick up the Sea and Lax Incense while you’re here.
  </p>
  <pre>
    Hoppip → Lv. 18 → Skiploom → Lv. 27 → Jumpluff
    Sentret → Lv. 15 → Furret
    Remoraid → Lv. 25 → Octillery
    Togepi → Happiness → Togetic
    Misdreavus
  </pre>
  <p>
    With the Sea Incense, attach it to a Marill and breed it to get Azurill.
  </p>
  <pre>
    Marill/Azumarill → Breed (holding Seas Incense) → Azurill
  </pre>

  <h5>Six Island </h5>
  <p>
    Go to Ruin Valley and catch a few Johto pokemon. Make sure you investigate Dotted Hole (use Cut to open the door) and allow the Team Rocket Scientist to steal the gem.
  </p>
  <pre>
    Yanma
    Natu → Lv. 25 → Xatu
    Wobbuffet
  </pre>
  <p>Then go to the North side of Six Island to Pattern Bush where a few bug types are waiting for you:</p>
  <pre>
    Spinarak → Lv. 22 → Ariados
    Ledyba → Lv. 18 → Ledian
    Heracross
  </pre>
  <p>Go and breed with Wobbuffet with a Lax Incense:</p>
  <pre>
    Wobbuffet → Breed (holding Lax Incense) → Wynaut
  </pre>

  <h5>Seven Island </h5>
  <p>
    The last of the Sevii Islands. Go south to Canyon Entrance and catch Phanpy. Further South in Sevault Canyon, catch a Larvitar.
  </p>
  <pre>
    Phanpy → Lv. 25 → Donphan
    Larvitar → Lv. 30 → Pupitar → Lv. 55 → Tyranitar
  </pre>
  <p>
    Solve the boulder puzzles in the cave in Sevault Canyon to unlock Tanoby Ruins will let you catch Unown. Surfing outside will get you a Mantine.
  </p>
  <pre>
    Unown
    Mantine
  </pre>

  <p>
    Finally, after clearing out Team Rocket and updating the trade system to allow trades with Ruby and Sapphire (which we’re not using), go back to Kanto where you can find one of the roaming beasts. Suicune if you picked Charmander, Raikou for Squirtle or Entei for Bulbasaur. THIS is the encounter you wanted to save the Master Ball for. There is a glitch in which the pokemon could use Roar and never be encountered again (fixed in Switch versions).
  </p>
  <pre>
    Raikou
    OR
    Entei
    OR
    Suicune
  </pre>
  <p>
    And with the roaming beast caught, that’s the end of the challenge! That’s the most number of pokemon you can possibly catch on your own.
  </p>

  <h5>Switch Version Exclusives </h5>
  <p>
    With the re-release of the games on Nintendo Switch, once you’ve defeated the Elite Four you’ll enter the post game with the Mystic Ticket and Aurora Ticket already in your bag. With these you can board the ferry in Vermilion City to reach Navel Rock where Lugia is on the lowest floor and Ho-Oh is on the highest. On Birth Island you’ll need to solve the triangle puzzle but completing it will trigger an encounter with Deoxys.
  </p>
  <pre>
    Lugia
    Ho-Oh
    Deoxys
  </pre>

  <h5>Levelling Tips </h5>
  <p>
    Honestly, anywhere on the Sevii Islands is a great place to train with the Vs Seeker. One of my favourite spots was outside the hot springs on One Island. They all used fighting types but it was the ease of going to the hot spring to heal and then by the time you’re back outside, the Vs Seeker was recharged. The hikers on Seven Island are also great for high level pokemon. You can also rematch the Elite Four who have higher levels than before.
  </p>

  <p>
    <strong>End of the challenge:</strong><br/>
    (Both Versions) Kanto Dex Caught 125, Remaining 26<br/>
    (LeafGreen) National Dex Caught 171, Remaining 215<br/>
    (LeafGreen Switch) National Dex Caught 174, Remaining 212
  </p>
          <p class="tips-source">
          <a href="https://docs.google.com/document/d/1KF_Qkn5YnPcYvSDVaI3mMhS8RgBsHRsXmbXWCzOhRk0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
`,
      rows: [
        /* --------------------------- Roaming Legendary (choice) ---------------------------- */
        {
          type: "choice",
          choiceKey: "beast",
          choiceValue: "raikou",
          pokemon: {
           img: imgBasehref +"243.png",
            name: "Raikou"
          },
          method: "Pick the Kanto roamer to track"
        },
        {
          type: "choice",
          choiceKey: "beast",
          choiceValue: "entei",
          pokemon: {img: imgBasehref +"244.png", name: "Entei" },
          method: "Pick the Kanto roamer to track"
        },
        {
          type: "choice",
          choiceKey: "beast",
          choiceValue: "suicune",
          pokemon: {
           img: imgBasehref +"245.png",
            name: "Suicune"
          },
          method: "Pick the Kanto roamer to track"
        },

        {
          pokemon: {
           img: imgBasehref +"243.png",
            name: "Raikou"
          },
          method: "Kanto (roaming) — recommended Master Ball target",

          requires: { beast: "raikou" }
        },
        {
          pokemon: {img: imgBasehref +"244.png", name: "Entei" },
          method: "Kanto (roaming) — recommended Master Ball target",

          requires: { beast: "entei" }
        },
        {
          pokemon: {
           img: imgBasehref +"245.png",
            name: "Suicune"
          },
          method: "Kanto (roaming) — recommended Master Ball target",

          requires: { beast: "suicune" }
        },

        /* --------------------------- Cerulean Cave ---------------------------- */
        {
          pokemon: {
            img: imgBasehref +"150.png",
            name: "Mewtwo"
          },
          method: "Cerulean Cave"
        },
        /* --------------------------- Four Island (Breeding Center) ---------------------------- */
        {
          pokemon: {
           img: imgBasehref +"236.png",
            name: "Tyrogue"
          },
          method: "Breed Hitmonlee/Hitmonchan with Ditto (Four Island Nursery)"
        },
        {
          pokemon: {
            img: imgBasehref +"106.png",
            name: "Hitmonlee"
          },
          method: "Evolve Tyrogue at level 20 (Atk > Def)",

          requires: { dojo: "hitmonchan" }
        } /* show the other one */,
        {
          pokemon: {
            img: imgBasehref +"107.png",
            name: "Hitmonchan"
          },
          method: "Evolve Tyrogue at level 20 (Def > Atk)",

          requires: { dojo: "hitmonlee" }
        } /* show the other one */,
        {
          pokemon: {
           img: imgBasehref +"237.png",
            name: "Hitmontop"
          },
          method: "Evolve Tyrogue at level 20 (Atk = Def)"
        },

        /* --------------------------- Eeveelution cleanup (show only NOT chosen earlier) ---------------------------- */
        /* If earlier pick was Jolteon → show Flareon & Vaporeon */
        {
          pokemon: {
            img: imgBasehref +"136.png",
            name: "Flareon"
          },
          method: "Use a Fire Stone on Eevee (Four Island Nursery)",

          requires: { eeveelution: "jolteon" }
        },
        {
          pokemon: {
            img: imgBasehref +"134.png",
            name: "Vaporeon"
          },
          method: "Use a Water Stone on Eevee (Four Island Nursery)",

          requires: { eeveelution: "jolteon" }
        },

        /* If earlier pick was Flareon → show Jolteon & Vaporeon */
        {
          pokemon: {
            img: imgBasehref +"135.png",
            name: "Jolteon"
          },
          method: "Use a Thunder Stone on Eevee (Four Island Nursery)",

          requires: { eeveelution: "flareon" }
        },
        {
          pokemon: {
            img: imgBasehref +"134.png",
            name: "Vaporeon"
          },
          method: "Use a Water Stone on Eevee (Four Island Nursery)",

          requires: { eeveelution: "flareon" }
        },

        /* If earlier pick was Vaporeon → show Jolteon & Flareon */
        {
          pokemon: {
            img: imgBasehref +"135.png",
            name: "Jolteon"
          },
          method: "Use a Thunder Stone on Eevee (Four Island Nursery)",

          requires: { eeveelution: "vaporeon" }
        },
        {
          pokemon: {
            img: imgBasehref +"136.png",
            name: "Flareon"
          },
          method: "Use a Fire Stone on Eevee (Four Island Nursery)",

          requires: { eeveelution: "vaporeon" }
        },

        /* --------------------------- Extra Evolutions (National Dex) ---------------------------- */
        {
          pokemon: {
           img: imgBasehref +"242.png",
            name: "Blissey"
          },
          method: "Evolve from Chansey with high Friendship"
        },
        {
          pokemon: {
           img: imgBasehref +"169.png",
            name: "Crobat"
          },
          method: "Evolve from Golbat with high Friendship"
        },

        /* Babies from breeding */
        {
          pokemon: {img: imgBasehref +"172.png", name: "Pichu" },
          method: "Breed Pikachu/Raichu"
        },
        {
          pokemon: {
           img: imgBasehref +"173.png",
            name: "Cleffa"
          },
          method: "Breed Clefairy/Clefable"
        },
        {
          pokemon: {
           img: imgBasehref +"174.png",
            name: "Igglybuff"
          },
          method: "Breed Jigglypuff/Wigglytuff"
        },
        {
          pokemon: {
           img: imgBasehref +"238.png",
            name: "Smoochum"
          },
          method: "Breed Jynx"
        },
        {
          pokemon: {
           img: imgBasehref +"240.png",
            name: "Magby"
          },
          method: "Breed Magmar"
        },

        /* --------------------------- One Island (Mt. Ember area) ---------------------------- */
        {
          pokemon: {
           img: imgBasehref +"218.png",
            name: "Slugma"
          },
          method: "Mt. Ember (newly opened area)"
        },
        {
          pokemon: {
           img: imgBasehref +"219.png",
            name: "Magcargo"
          },
          method: "Evolve from Slugma at level 38"
        },

        /* --------------------------- Three Island ---------------------------- */
        {
          pokemon: {
           img: imgBasehref +"206.png",
            name: "Dunsparce"
          },
          method: "Three Island cave patch"
        },

        /* --------------------------- Four Island (Icefall Cave & lake) ---------------------------- */
        {
          pokemon: {
           img: imgBasehref +"183.png",
            name: "Marill"
          },
          method: "Four Island lake / Icefall Cave"
        },
        {
          pokemon: {
           img: imgBasehref +"184.png",
            name: "Azumarill"
          },
          method: "Evolve from Wooper at level 18"
        },
        {
          pokemon: {
           img: imgBasehref +"215.png",
            name: "Sneasel"
          },
          method: "Icefall Cave"
        },
        {
          pokemon: {
           img: imgBasehref +"220.png",
            name: "Swinub"
          },
          method: "Icefall Cave"
        },
        {
          pokemon: {
           img: imgBasehref +"221.png",
            name: "Piloswine"
          },
          method: "Evolve from Swinub at level 33"
        },

        /* --------------------------- Five Island ---------------------------- */
        {
          pokemon: {
           img: imgBasehref +"187.png",
            name: "Hoppip"
          },
          method: "Five Island Meadow / water route"
        },
        {
          pokemon: {
           img: imgBasehref +"188.png",
            name: "Skiploom"
          },
          method: "Evolve from Hoppip at level 18"
        },
        {
          pokemon: {
           img: imgBasehref +"189.png",
            name: "Jumpluff"
          },
          method: "Evolve from Skiploom at level 27"
        },
        {
          pokemon: {
           img: imgBasehref +"161.png",
            name: "Sentret"
          },
          method: "Five Island Meadow"
        },
        {
          pokemon: {
           img: imgBasehref +"162.png",
            name: "Furret"
          },
          method: "Evolve from Sentret at level 15"
        },
        {
          pokemon: {
           img: imgBasehref +"223.png",
            name: "Remoraid"
          },
          method: "Five Island - Super Rod"
        },
        {
          pokemon: {
           img: imgBasehref +"224.png",
            name: "Octillery"
          },
          method: "Evolve from Remoraid at level 25"
        },
        {
          pokemon: {
           img: imgBasehref +"175.png",
            name: "Togepi"
          },
          method: "Gift Egg (happy mon check) → hatch"
        },
        {
          pokemon: {
           img: imgBasehref +"176.png",
            name: "Togetic"
          },
          method: "Evolve from Togepi with high Friendship"
        },
        {
          pokemon: {
           img: imgBasehref +"200.png",
            name: "Misdreavus"
          },
          method: "Lost Cave (rooms with items)"
        },
        {
          pokemon: {
           img: imgBasehref +"298.png",
            name: "Azuril"
          },
          method: "Breed Marill/Azumarill (holding Sea Incense)"
        },

        /* --------------------------- Six Island ---------------------------- */
        {
          pokemon: {img: imgBasehref +"193.png", name: "Yanma" },
          method: "Ruin Valley / Pattern Bush approaches"
        },
        {
          pokemon: {img: imgBasehref +"177.png", name: "Natu" },
          method: "Six Island (Ruin Valley/grass)"
        },
        {
          pokemon: {img: imgBasehref +"178.png", name: "Xatu" },
          method: "Evolve from Natu at level 25"
        },
        {
          pokemon: {
           img: imgBasehref +"202.png",
            name: "Wobbuffet"
          },
          method: "Six Island grass (safari-style areas)"
        },
        {
          pokemon: {
           img: imgBasehref +"167.png",
            name: "Spinarak"
          },
          method: "Pattern Bush"
        },
        {
          pokemon: {
           img: imgBasehref +"168.png",
            name: "Ariados"
          },
          method: "Evolve from Spinarak at level 22"
        },
        {
          pokemon: {
           img: imgBasehref +"165.png",
            name: "Ledyba"
          },
          method: "Pattern Bush"
        },
        {
          pokemon: {
           img: imgBasehref +"166.png",
            name: "Ledian"
          },
          method: "Evolve from Ledyba at level 18"
        },
        {
          pokemon: {
           img: imgBasehref +"214.png",
            name: "Heracross"
          },
          method: "Pattern Bush"
        },
        {
          pokemon: {
           img: imgBasehref +"360.png",
            name: "Wynaut"
          },
          method: "Breed Wobbuffet holding Lax Incense"
        },

        /* --------------------------- Seven Island ---------------------------- */
        {
          pokemon: {
           img: imgBasehref +"231.png",
            name: "Phanpy"
          },
          method: "Canyon Entrance (Seven Island)"
        },
        {
          pokemon: {
           img: imgBasehref +"232.png",
            name: "Donphan"
          },
          method: "Evolve from Phanpy at level 25"
        },
        {
          pokemon: {
           img: imgBasehref +"246.png",
            name: "Larvitar"
          },
          method: "Sevault Canyon (Seven Island)"
        },
        {
          pokemon: {
           img: imgBasehref +"247.png",
            name: "Pupitar"
          },
          method: "Evolve from Larvitar at level 30"
        },
        {
          pokemon: {
           img: imgBasehref +"248.png",
            name: "Tyranitar"
          },
          method: "Evolve from Pupitar at level 55"
        },
        {
          pokemon: {
           img: imgBasehref +"201F.png",
            name: "Unown"
          },
          method: "Tanoby Ruins (after boulder puzzles)"
        },
        {
          pokemon: {
           img: imgBasehref +"226.png",
            name: "Mantine"
          },
          method: "Tanoby Ruins"
        },

        /* --------------------------- Switch Version Exclusives ---------------------------- */
        {
          pokemon: {img: imgBasehref +"249.png", name: "Lugia" },
          method: "Navel Rock (Switch re‑release ticket)"
        },
        {
          pokemon: {img: imgBasehref +"250.png", name: "Ho-Oh" },
          method: "Navel Rock (Switch re‑release ticket)"
        },
        {
          pokemon: {
            img: imgBasehref +"386.png",
            name: "Deoxys"
          },
          method: "Birth Island (triangle puzzle; Switch re‑release ticket)"
        }
      ]
    }
  }
};
