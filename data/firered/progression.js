/* ----------------------
 - img src: https://archives.bulbagarden.net/wiki/Category:FireRed_and_LeafGreen_sprites 
 - badges: https://bulbapedia.bulbagarden.net/wiki/Badge
 - pokedex: https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex
 - Guide: https://docs.google.com/document/d/1KF_Qkn5YnPcYvSDVaI3mMhS8RgBsHRsXmbXWCzOhRk0/edit?tab=t.0
----------------------- */
window.gameData = {
  gameId: "firered",
  gameTitle: "Pokémon FireRed",

  logo: "/assets/images/logos/firered.png",

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
      headerImg: "/assets/images/FRLG/badges/boulder-badge.png",
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
            img: "/assets/images/FRLG/Pokedex/Spr_3f_001.png",
            name: "Bulbasaur",
          },
          method: "Pick this starter to show the Bulbasaur line",
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "charmander",
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_004.png",
            name: "Charmander",
          },
          method: "Pick this starter to show the Charmander line",
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "squirtle",
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_007.png",
            name: "Squirtle",
          },
          method: "Pick this starter to show the Squirtle line",
        },

        /* --------------------------- Bulbasaur Line ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_001.png",
            name: "Bulbasaur",
          },
          method: "Choose as Starter",

          requires: { starter: "bulbasaur" },
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_002.png",
            name: "Ivysaur",
          },
          method: "Evolve from Bulbasaur at Lvl. 16",

          requires: { starter: "bulbasaur" },
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_003.png",
            name: "Venusaur",
          },
          method: "Evolve from Ivysaur at Lvl. 32",

          requires: { starter: "bulbasaur" },
        },

        /* --------------------------- Charmander Line ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_004.png",
            name: "Charmander",
          },
          method: "Choose as Starter",

          requires: { starter: "charmander" },
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_005.png",
            name: "Charmeleon",
          },
          method: "Evolve from Charmander at Lvl. 16",

          requires: { starter: "charmander" },
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_006.png",
            name: "Charizard",
          },
          method: "Evolve from Charmeleon at Lvl. 36",

          requires: { starter: "charmander" },
        },

        /* --------------------------- Squirtle Line ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_007.png",
            name: "Squirtle",
          },
          method: "Choose as Starter",

          requires: { starter: "squirtle" },
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_008.png",
            name: "Wartortle",
          },
          method: "Evolve from Squirtle at Lvl. 16",

          requires: { starter: "squirtle" },
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_009.png",
            name: "Blastoise",
          },
          method: "Evolve from Wartortle at Lvl. 36",

          requires: { starter: "squirtle" },
        },

        /* --------------------------- Wild Pokémon ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_010.png",
            name: "Caterpie",
          },
          method: "Catch in the Viridian Forest",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_011.png",
            name: "Metapod",
          },
          method: "Evolve from Caterpie at level 7",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_012.png",
            name: "Butterfree",
          },
          method: "Evolve from Metapod at level 10",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_013.png",
            name: "Weedle",
          },
          method: "Catch in the Viridian Forest",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_014.png",
            name: "Kakuna",
          },
          method: "Evolve from Weedle at level 7",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_015.png",
            name: "Beedrill",
          },
          method: "Evolve from Kakuna at level 10",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_016.png",
            name: "Pidgey",
          },
          method: "Catch on Route 1",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_017.png",
            name: "Pidgeotto",
          },
          method: "Evolve from Pidgey at level 18",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_018.png",
            name: "Pidgeot",
          },
          method: "Evolve from Pidgeotto at level 36",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_019.png",
            name: "Rattata",
          },
          method: "Catch on Route 1",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_020.png",
            name: "Raticate",
          },
          method: "Evolve from Rattata at level 20",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_021.png",
            name: "Spearow",
          },
          method: "Catch on Route 22; You will need two for a trade later",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_022.png",
            name: "Fearow",
          },
          method: "Evolve from Spearow at level 20",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_025.png",
            name: "Pikachu",
          },
          method: "Viridian Forest",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_056.png",
            name: "Mankey",
          },
          method: "Catch on Route 22",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_057.png",
            name: "Primeape",
          },
          method: "Evolve from Mankey at level 28",
        },
      ],
    },

    "Pre Badge 2: Misty": {
      headerImg: "/assets/images/FRLG/badges/cascade-badge.png",
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
          Ekans → Lv. 22 → Arbok
        </pre>

        <h5>Route 24</h5>
        <p>Enter Cerulean City, heal up, and head north to Route 24.</p>
        <pre>
          Abra → Lv. 16 → Kadabra
          Oddish → Lv. 21 → Gloom
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
            img: "/assets/images/FRLG/Dream_Dome_Fossil_Sprite.png",
            name: "Dome Fossil",
          },
          method: "Choose the Dome Fossil to unlock Kabuto/Kabutops later",
        },
        {
          type: "choice",
          choiceKey: "fossil",
          choiceValue: "helix",
          pokemon: {
            img: "/assets/images/FRLG/Dream_Helix_Fossil_Sprite.png",
            name: "Helix Fossil",
          },
          method: "Choose the Helix Fossil to unlock Omanyte/Omastar later",
        },

        /* --------------------------- Wild Pokémon ---------------------------- */
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3f_023.png", name: "Ekans" },
          method: "Catch on Route 4",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3f_024.png", name: "Arbok" },
          method: "Evolve from Ekans at level 22",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_029.png",
            name: "Nidoran F",
          },
          method: "Catch on Route 3",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_030.png",
            name: "Nidorina",
          },
          method: "Evolve from Nidoran F at level 16",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_031.png",
            name: "Nidoqueen",
          },
          method: "Use a Moon Stone on Nidorina",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_032.png",
            name: "Nidoran M",
          },
          method: "Catch on Route 3",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_033.png",
            name: "Nidorino",
          },
          method: "Evolve from Nidoran M at level 16",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_034.png",
            name: "Nidoking",
          },
          method: "Use a Moon Stone on Nidorino",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_035.png",
            name: "Clefairy",
          },
          method: "Catch in Mt. Moon",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_036.png",
            name: "Clefable",
          },
          method: "Use a Moon Stone on Clefairy",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_039.png",
            name: "Jigglypuff",
          },
          method: "Catch on Route 3",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_040.png",
            name: "Wigglytuff",
          },
          method: "Use a Moon Stone on Jigglypuff",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3f_041.png", name: "Zubat" },
          method: "Catch in Mt. Moon",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_042.png",
            name: "Golbat",
          },
          method: "Evolve from Zubat at level 22",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_043.png",
            name: "Oddish",
          },
          method: "Catch on Route 24",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3f_044.png", name: "Gloom" },
          method: "Evolve from Oddish at level 21",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3f_046.png", name: "Paras" },
          method: "Catch in Mt. Moon",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_047.png",
            name: "Parasect",
          },
          method: "Evolve from Paras at level 24",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_050.png",
            name: "Diglett",
          },
          method: "Catch in Diglett Cave",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_051.png",
            name: "Dugtrio",
          },
          method: "Evolve from Diglett at level 26",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_052.png",
            name: "Meowth",
          },
          method: "Catch on Route 5",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_053.png",
            name: "Persian",
          },
          method: "Evolve from Meowth at level 28",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3f_063.png", name: "Abra" },
          method: "Catch on Route 24",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_064.png",
            name: "Kadabra",
          },
          method: "Evolve from Abra at level 16",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_074.png",
            name: "Geodude",
          },
          method: "Catch in Mt. Moon",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_075.png",
            name: "Graveler",
          },
          method: "Evolve from Geodude at level 25",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_083.png",
            name: "Farfetch'd",
          },
          method: "Trade for Spearow in Vermilion City",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_096.png",
            name: "Drowzee",
          },
          method: "Catch on Route 11",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3f_097.png", name: "Hypno" },
          method: "Evolve from Drowzee at level 26",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_122.png",
            name: "Mr. Mime",
          },
          method: "Trade for Abra in the house north of Diglett Cave",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_129.png",
            name: "Magikarp",
          },
          method: "Buy a Magikarp from the salesman in the Pokémon center",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_130.png",
            name: "Gyarados",
          },
          method: "Evolve from Magikarp at level 20",
        },
      ],
    },

    "Pre Badge 3: Koga": {
      headerImg: "/assets/images/FRLG/badges/soul-badge.png",
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
          Growlithe
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
          Growlithe → Fire Stone → Arcanine
          Gloom → Leaf Stone → Vileplume
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
          Shellder → Water Stone → Cloyster (Super Rod – Pallet Town)
          Horsea → Lv. 32 → Seadra (Good Rod – Pallet Town)
          Psyduck → Lv. 33 → Golduck (Super Rod – Viridian City)
          Poliwag → Lv. 25 → Poliwhirl → Water Stone → Poliwrath (Good Rod – Viridian City)
          Goldeen → Lv. 33 → Seaking (Good Rod – Viridian City)
          Krabby → Lv. 28 → Kingler (Good Rod – Pallet Town)
          Grimer → Lv. 38 → Muk (Super Rod – Celadon City)
        </pre>
        <p>Catching Grimer is particularly difficult due to its 1% encounter rate in Celadon City. Catch additional Poliwhirl and Golduck to complete two trades:</p>
        <pre>
          Jynx
          Lickitung
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
          Scyther
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
            img: "/assets/images/FRLG/Pokedex/Spr_3f_134.png",
            name: "Vaporeon",
          },
          method: "Pick this Eeveelution to show the Vaporeon line",
        },
        {
          type: "choice",
          choiceKey: "eeveelution",
          choiceValue: "jolteon",
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_135.png",
            name: "Jolteon",
          },
          method: "Pick this Eeveelution to show the Jolteon line",
        },
        {
          type: "choice",
          choiceKey: "eeveelution",
          choiceValue: "flareon",
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_136.png",
            name: "Flareon",
          },
          method: "Pick this Eeveelution to show the Flareon line",
        },

        /* --------------------------- Dojo Choice Rows ---------------------------- */
        {
          type: "choice",
          choiceKey: "dojo",
          choiceValue: "hitmonlee",
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_106.png",
            name: "Hitmonlee",
          },
          method: "Pick this Hitmon to show the Hitmonlee line",
        },
        {
          type: "choice",
          choiceKey: "dojo",
          choiceValue: "hitmonchan",
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_107.png",
            name: "Hitmonchan",
          },
          method: "Pick this Hitmon to show the Hitmonchan line",
        },

        /* --------------------------- Wild Pokémon ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_026.png",
            name: "Raichu",
          },
          method: "Use a Thunder Stone on Pikachu",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_045.png",
            name: "Vileplume",
          },
          method: "Use a Leaf Stone on Gloom",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_048.png",
            name: "Venonat",
          },
          method: "Catch on Route 14",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_049.png",
            name: "Venomoth",
          },
          method: "Evolve From Venonat at level 31",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_054.png",
            name: "Psyduck",
          },
          method: "Fish in Viridian City",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_055.png",
            name: "Golduck",
          },
          method: "Evolve From Psyduck at level 33; Need two",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_058.png",
            name: "Growlithe",
          },
          method: "Catch on Route 8",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_059.png",
            name: "Arcanine",
          },
          method: "Use a Fire Stone on Growlithe",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_060.png",
            name: "Poliwag",
          },
          method: "Fish in Viridian City",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_061.png",
            name: "Poliwhirl",
          },
          method: "Evolve From Poliwag at level 25; Need Two",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_062.png",
            name: "Poliwrath",
          },
          method: "Use a Water Stone on Poliwhirl",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_066.png",
            name: "Machop",
          },
          method: "Catch in Rock Tunnel",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_067.png",
            name: "Machoke",
          },
          method: "Evolve From Machop at level 28",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3f_084.png", name: "Doduo" },
          method: "Catch on Route 16",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_085.png",
            name: "Dodrio",
          },
          method: "Evolve From Doduo at level 31",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_088.png",
            name: "Grimer",
          },
          method: "Fish in Celadon City",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3f_089.png", name: "Muk" },
          method: "Evolve From Grimer at level 38",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_090.png",
            name: "Shellder",
          },
          method: "Fish in Pallet Town",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_091.png",
            name: "Cloyster",
          },
          method: "Use a Water Stone on Shellder",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_092.png",
            name: "Gastly",
          },
          method: "Catch in Pokémon Tower",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_093.png",
            name: "Haunter",
          },
          method: "Evolve From Gastly at level 25",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3f_095.png", name: "Onix" },
          method: "Catch in Rock Tunnel",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_098.png",
            name: "Krabby",
          },
          method: "Fish in Pallet Town",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_099.png",
            name: "Kingler",
          },
          method: "Evolve From Krabby at level 28",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_100.png",
            name: "Voltorb",
          },
          method:
            "East of Cerulean City, cut the tree down and pass through Route 9 to reach Route 10.",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_101.png",
            name: "Electrode",
          },
          method: "Evolve From Voltorb at level 30",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_102.png",
            name: "Exeggcute",
          },
          method: "Safari Zone",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_103.png",
            name: "Exeggutor",
          },
          method: "Use a Leaf Stone on Exeggcute",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_104.png",
            name: "Cubone",
          },
          method: "Catch in Pokémon Tower",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_105.png",
            name: "Marowak",
          },
          method: "Evolve From Cubone at level 28",
        },

        /* --------------------------- Hitmonlee Line ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_106.png",
            name: "Hitmonlee",
          },
          method: "Choose as Starter",

          requires: { dojo: "hitmonlee" },
        },

        /* --------------------------- Hitmonchan Line ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_107.png",
            name: "Hitmonchan",
          },
          method: "Choose as Starter",

          requires: { dojo: "hitmonchan" },
        },

        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_108.png",
            name: "Lickitung",
          },
          method: "Trade (Route 18 gate): Golduck → Lickitung",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_111.png",
            name: "Rhyhorn",
          },
          method: "Safari Zone",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_112.png",
            name: "Rhydon",
          },
          method: "Evolve From Rhyhorn at level 42",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_113.png",
            name: "Chansey",
          },
          method: "Safari Zone",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_115.png",
            name: "Kangaskhan",
          },
          method: "Safari Zone",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_116.png",
            name: "Horsea",
          },
          method: "Fish in Pallet Town",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_117.png",
            name: "Seadra",
          },
          method: "Evolve From Horsea at level 32",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_118.png",
            name: "Goldeen",
          },
          method: "Fish in Viridian City",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_119.png",
            name: "Seaking",
          },
          method: "Evolve From Goldeen at level 33",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_123.png",
            name: "Scyther",
          },
          method: "Safari Zone",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3f_124.png", name: "Jynx" },
          method: "Trade (Cerulean City): Poliwhirl → Jynx",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_128.png",
            name: "Tauros",
          },
          method: "Safari Zone",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_131.png",
            name: "Lapras",
          },
          method: "Silph Co",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3f_132.png", name: "Ditto" },
          method: "Catch on Route 14",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3f_133.png", name: "Eevee" },
          method: "Celadon City",
        },

        /* --------------------------- Flareon Line ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_136.png",
            name: "Flareon",
          },
          method: "Choose as Starter",

          requires: { eeveelution: "flareon" },
        },

        /* --------------------------- Jolteon Line ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_135.png",
            name: "Jolteon",
          },
          method: "Choose as Starter",

          requires: { eeveelution: "jolteon" },
        },

        /* --------------------------- Vaporeon Line ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_134.png",
            name: "Vaporeon",
          },
          method: "Choose as Starter",

          requires: { eeveelution: "vaporeon" },
        },

        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_137.png",
            name: "Porygon",
          },
          method: "Celadon City Game Corner",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_143.png",
            name: "Snorlax",
          },
          method: "Catch on Route 12",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_147.png",
            name: "Dratini",
          },
          method: "Safari Zone; Game Corner",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_148.png",
            name: "Dragonair",
          },
          method: "Evolve From Dratini at level 30",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_149.png",
            name: "Dragonite",
          },
          method: "Evolve From Dragonair at level 55",
        },
      ],
    },

    "Pre Badge 4: Blaine": {
      headerImg: "/assets/images/FRLG/badges/volcano-badge.png",
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
          Electabuzz
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

        <p><strong>End of Part 4</strong><br/>Caught: 117 · Remaining: 34</p>
        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1KF_Qkn5YnPcYvSDVaI3mMhS8RgBsHRsXmbXWCzOhRk0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,

      rows: [
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_072.png",
            name: "Tentacool",
          },
          method: "Surf",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_073.png",
            name: "Tentacruel",
          },
          method: "Evolve from Tentacool at level 30",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_081.png",
            name: "Magnemite",
          },
          method: "Power Plant",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_082.png",
            name: "Magneton",
          },
          method: "Evolve from Magnemite at level 30",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3f_086.png", name: "Seel" },
          method: "Seafoam Islands",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_087.png",
            name: "Dewgong",
          },
          method: "Evolve from Seel at level 34",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_109.png",
            name: "Koffing",
          },
          method: "Pokémon Mansion",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_110.png",
            name: "Weezing",
          },
          method: "Evolve from Koffing at level 35",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_114.png",
            name: "Tangela",
          },
          method: "Pallet Town + Surf",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_125.png",
            name: "Electabuzz",
          },
          method: "Power Plant",
        },

        /* Helix Line */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_138.png",
            name: "Omanyte",
          },
          method: "Choose Helix Fossil",

          requires: { fossil: "helix" },
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_139.png",
            name: "Omastar",
          },
          method: "Evolve Omanyte at level 40",

          requires: { fossil: "helix" },
        },

        /* Dome Line */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_140.png",
            name: "Kabuto",
          },
          method: "Choose Dome Fossil",

          requires: { fossil: "dome" },
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_141.png",
            name: "Kabutops",
          },
          method: "Evolve Kabuto at level 40",

          requires: { fossil: "dome" },
        },

        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_142.png",
            name: "Aerodactyl",
          },
          method: "Cinnabar Island",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_145.png",
            name: "Zapdos",
          },
          method: "Power Plant",
        },
      ],
    },

    "Pre Badge 5: Erika": {
      headerImg: "/assets/images/FRLG/badges/rainbow-badge.png",
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

        <p><strong>End of Part 5</strong><br/>FireRed: Caught 119 · Remaining 32</p>
        <p class="tips-source">
          <a href="https://docs.google.com/document/d/1KF_Qkn5YnPcYvSDVaI3mMhS8RgBsHRsXmbXWCzOhRk0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Source: Professor Oak Challenge Guide (Google Doc)
          </a>
        </p>
      `,

      rows: [
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_077.png",
            name: "Ponyta",
          },
          method: "One Island",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_078.png",
            name: "Rapidash",
          },
          method: "Evolve from Ponyta at level 40",
        },
      ],
    },

    "Pre Elite Four": {
      headerImg: "/assets/images/FRLG/badges/earth-badge.png",
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
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_144.png",
            name: "Articuno",
          },
          method: "Seafoam Islands",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_146.png",
            name: "Moltres",
          },
          method: "Mt. Ember",
        },
      ],
    },

    "Post Game": {
      headerImg: "/assets/images/FRLG/badges/pokedex.png",
      headerImgAlt: "Gen III Kanto Pokedex",
      summaryShort:
        "With no further Pokémon available in Kanto before the League, defeat Lt. Surge, Sabrina, and Giovanni, clear the Elite Four, and obtain the National Pokédex. From there, the remainder of the challenge can be completed in any order, beginning with finishing the Kanto Dex before moving on to National Dex Pokémon.",

      summaryHtml: `
        <p>
          Since no additional Pokémon can be caught in Kanto before earning more badges, continue your League challenge. Defeat Lt. Surge, Sabrina, and Giovanni to collect the remaining badges, then challenge the Elite Four.
        </p>
        <p>
          After the credits roll, Professor Oak will evaluate your progress and award you the National Pokédex, expanding the Pokédex limit to 386 Pokémon. With no badges gating progress, the remaining objectives can be completed in any order. Before doing so, finish all remaining Kanto Pokédex entries.
        </p>

        <h5>Cerulean Cave</h5>
        <p>This area cannot be accessed until you complete the Ruby/Sapphire quest on the Sevii Islands. Leave Cerulean City via the north exit, cross Nugget Bridge, and Surf along the river to reach Cerulean Cave.</p>
        <p>Deep inside you’ll encounter:</p>
        <pre>
          Mewtwo
        </pre>
        <p>Mewtwo is level 70. It is recommended not to use the Master Ball here, as there is a later encounter where it is far more valuable.</p>

        <h5>Four Island</h5>
        <p>Return to One Island and speak with Celio in the Pokémon Center to receive the Rainbow Pass and begin the Ruby/Sapphire quest. Travel to Four Island to access the Breeding Center.</p>
        <pre>
          Tyrogue → Lv. 20 → Hitmonlee / Hitmonchan
          Eevee → Fire / Thunder / Water Stone → Flareon / Jolteon / Vaporeon
        </pre>
        <p>This completes all possible Kanto Pokédex entries.</p>

        <h5>Extra Evolutions (National Dex)</h5>
        <p>With the National Dex obtained, additional evolutions become available. The Sun Stone can be found in Ruin Valley on Six Island. Note that Espeon and Umbreon are not obtainable due to the lack of a day/night system.</p>
        <pre>
          Chansey → Happiness → Blissey
          Golbat → Happiness → Crobat
          Gloom → Sun Stone → Bellossom
        </pre>
        <p>Additional baby Pokémon can be obtained through breeding:</p>
        <pre>
          Tyrogue → Lv. 20 (Atk = Def) → Hitmontop
          Pikachu / Raichu → Breed → Pichu
          Clefairy / Clefable → Breed → Cleffa
          Jigglypuff / Wigglytuff → Breed → Igglybuff
          Jynx → Breed → Smoochum
          Electabuzz → Breed → Elekid
        </pre>

        <h5>One Island</h5>
        <p>Return to Mt. Ember and access the newly opened area guarded by Team Rocket.</p>
        <pre>
          Slugma → Lv. 38 → Magcargo
        </pre>

        <h5>Three Island</h5>
        <pre>
          Dunsparce
        </pre>

        <h5>Four Island</h5>
        <p>Surf in the lake and explore Icefall Cave:</p>
        <pre>
          Wooper → Lv. 20 → Quagsire
          Delibird
          Swinub → Lv. 33 → Piloswine
        </pre>

        <h5>Five Island</h5>
        <pre>
          Hoppip → Lv. 18 → Skiploom → Lv. 27 → Jumpluff
          Sentret → Lv. 15 → Furret
          Qwilfish
          Togepi → Happiness → Togetic
          Murkrow
        </pre>

        <h5>Six Island</h5>
        <pre>
          Yanma
          Natu → Lv. 25 → Xatu
          Wobbuffet
          Spinarak → Lv. 22 → Ariados
          Ledyba → Lv. 18 → Ledian
          Heracross
          Wobbuffet → Breed (Lax Incense) → Wynaut
        </pre>

        <h5>Seven Island</h5>
        <pre>
          Phanpy → Lv. 25 → Donphan
          Larvitar → Lv. 30 → Pupitar → Lv. 55 → Tyranitar
          Skarmory
          Unown
        </pre>

        <h5>Roaming Legendary</h5>
        <p>After resolving Team Rocket activity and updating the trading system, return to Kanto to encounter the roaming beast based on your starter choice. This is the encounter recommended for the Master Ball.</p>
        <pre>
          Raikou
          OR
          Entei
          OR
          Suicune
        </pre>

        <h5>Switch Version Exclusives</h5>
        <p>On Nintendo Switch re‑releases, Mystic and Aurora Tickets are provided automatically.</p>
        <pre>
          Lugia
          Ho‑Oh
          Deoxys
        </pre>

        <h5>Levelling Tips</h5>
        <p>The Sevii Islands provide excellent Vs. Seeker training opportunities. The hot spring area on One Island and hikers on Seven Island are particularly effective. The Elite Four can also be rematched at higher levels.</p>

        <p><strong>End of the Challenge</strong><br/>
          Kanto Dex: Caught 125 · Remaining 26<br/>
          FireRed National Dex: Caught 170 · Remaining 216<br/>
          FireRed (Switch) National Dex: Caught 173 · Remaining 213
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
            img: "/assets/images/FRLG/Pokedex/Spr_3r_243.png",
            name: "Raikou",
          },
          method: "Pick the Kanto roamer to track",
        },
        {
          type: "choice",
          choiceKey: "beast",
          choiceValue: "entei",
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3r_244.png", name: "Entei" },
          method: "Pick the Kanto roamer to track",
        },
        {
          type: "choice",
          choiceKey: "beast",
          choiceValue: "suicune",
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_245.png",
            name: "Suicune",
          },
          method: "Pick the Kanto roamer to track",
        },

        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_243.png",
            name: "Raikou",
          },
          method: "Kanto (roaming) — recommended Master Ball target",

          requires: { beast: "raikou" },
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3r_244.png", name: "Entei" },
          method: "Kanto (roaming) — recommended Master Ball target",

          requires: { beast: "entei" },
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_245.png",
            name: "Suicune",
          },
          method: "Kanto (roaming) — recommended Master Ball target",

          requires: { beast: "suicune" },
        },

        /* --------------------------- Cerulean Cave ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_150.png",
            name: "Mewtwo",
          },
          method: "Cerulean Cave",
        },
        /* --------------------------- Four Island (Breeding Center) ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_236.png",
            name: "Tyrogue",
          },
          method: "Breed Hitmonlee/Hitmonchan with Ditto (Four Island Nursery)",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_106.png",
            name: "Hitmonlee",
          },
          method: "Evolve Tyrogue at level 20 (Atk > Def)",

          requires: { dojo: "hitmonchan" },
        } /* show the other one */,
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_107.png",
            name: "Hitmonchan",
          },
          method: "Evolve Tyrogue at level 20 (Def > Atk)",

          requires: { dojo: "hitmonlee" },
        } /* show the other one */,
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_237.png",
            name: "Hitmontop",
          },
          method: "Evolve Tyrogue at level 20 (Atk = Def)",
        },

        /* --------------------------- Eeveelution cleanup (show only NOT chosen earlier) ---------------------------- */
        /* If earlier pick was Jolteon → show Flareon & Vaporeon */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_136.png",
            name: "Flareon",
          },
          method: "Use a Fire Stone on Eevee (Four Island Nursery)",

          requires: { eeveelution: "jolteon" },
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_134.png",
            name: "Vaporeon",
          },
          method: "Use a Water Stone on Eevee (Four Island Nursery)",

          requires: { eeveelution: "jolteon" },
        },

        /* If earlier pick was Flareon → show Jolteon & Vaporeon */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_135.png",
            name: "Jolteon",
          },
          method: "Use a Thunder Stone on Eevee (Four Island Nursery)",

          requires: { eeveelution: "flareon" },
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_134.png",
            name: "Vaporeon",
          },
          method: "Use a Water Stone on Eevee (Four Island Nursery)",

          requires: { eeveelution: "flareon" },
        },

        /* If earlier pick was Vaporeon → show Jolteon & Flareon */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_135.png",
            name: "Jolteon",
          },
          method: "Use a Thunder Stone on Eevee (Four Island Nursery)",

          requires: { eeveelution: "vaporeon" },
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_136.png",
            name: "Flareon",
          },
          method: "Use a Fire Stone on Eevee (Four Island Nursery)",

          requires: { eeveelution: "vaporeon" },
        },

        /* --------------------------- Extra Evolutions (National Dex) ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_242.png",
            name: "Blissey",
          },
          method: "Evolve from Chansey with high Friendship",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_169.png",
            name: "Crobat",
          },
          method: "Evolve from Golbat with high Friendship",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_182.png",
            name: "Bellossom",
          },
          method: "Use a Sun Stone on Gloom (Ruin Valley - Six Island)",
        },

        /* Babies from breeding */
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3r_172.png", name: "Pichu" },
          method: "Breed Pikachu/Raichu",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_173.png",
            name: "Cleffa",
          },
          method: "Breed Clefairy/Clefable",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_174.png",
            name: "Igglybuff",
          },
          method: "Breed Jigglypuff/Wigglytuff",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_238.png",
            name: "Smoochum",
          },
          method: "Breed Jynx",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_239.png",
            name: "Elekid",
          },
          method: "Breed Electabuzz",
        },

        /* --------------------------- One Island (Mt. Ember area) ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_218.png",
            name: "Slugma",
          },
          method: "Mt. Ember (newly opened area)",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_219.png",
            name: "Magcargo",
          },
          method: "Evolve from Slugma at level 38",
        },

        /* --------------------------- Three Island ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_206.png",
            name: "Dunsparce",
          },
          method: "Three Island cave patch",
        },

        /* --------------------------- Four Island (Icefall Cave & lake) ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_194.png",
            name: "Wooper",
          },
          method: "Four Island lake / Icefall Cave",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_195.png",
            name: "Quagsire",
          },
          method: "Evolve from Wooper at level 20",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_225.png",
            name: "Delibird",
          },
          method: "Icefall Cave",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_220.png",
            name: "Swinub",
          },
          method: "Icefall Cave",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_221.png",
            name: "Piloswine",
          },
          method: "Evolve from Swinub at level 33",
        },

        /* --------------------------- Five Island ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_187.png",
            name: "Hoppip",
          },
          method: "Five Island Meadow / water route",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_188.png",
            name: "Skiploom",
          },
          method: "Evolve from Hoppip at level 18",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_189.png",
            name: "Jumpluff",
          },
          method: "Evolve from Skiploom at level 27",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_161.png",
            name: "Sentret",
          },
          method: "Five Island Meadow",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_162.png",
            name: "Furret",
          },
          method: "Evolve from Sentret at level 15",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_211.png",
            name: "Qwilfish",
          },
          method: "Five Island (Super Rod)",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_175.png",
            name: "Togepi",
          },
          method: "Gift Egg (happy mon check) → hatch",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_176.png",
            name: "Togetic",
          },
          method: "Evolve from Togepi with high Friendship",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_198.png",
            name: "Murkrow",
          },
          method: "Lost Cave (rooms with items)",
        },

        /* --------------------------- Six Island ---------------------------- */
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3r_193.png", name: "Yanma" },
          method: "Ruin Valley / Pattern Bush approaches",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3r_177.png", name: "Natu" },
          method: "Six Island (Ruin Valley/grass)",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3r_178.png", name: "Xatu" },
          method: "Evolve from Natu at level 25",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_202.png",
            name: "Wobbuffet",
          },
          method: "Six Island grass (safari-style areas)",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_167.png",
            name: "Spinarak",
          },
          method: "Pattern Bush",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_168.png",
            name: "Ariados",
          },
          method: "Evolve from Spinarak at level 22",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_165.png",
            name: "Ledyba",
          },
          method: "Pattern Bush",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_166.png",
            name: "Ledian",
          },
          method: "Evolve from Ledyba at level 18",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_214.png",
            name: "Heracross",
          },
          method: "Pattern Bush",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_360.png",
            name: "Wynaut",
          },
          method: "Breed Wobbuffet holding Lax Incense",
        },

        /* --------------------------- Seven Island ---------------------------- */
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_231.png",
            name: "Phanpy",
          },
          method: "Canyon Entrance (Seven Island)",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_232.png",
            name: "Donphan",
          },
          method: "Evolve from Phanpy at level 25",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_246.png",
            name: "Larvitar",
          },
          method: "Sevault Canyon (Seven Island)",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_247.png",
            name: "Pupitar",
          },
          method: "Evolve from Larvitar at level 30",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_248.png",
            name: "Tyranitar",
          },
          method: "Evolve from Pupitar at level 55",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_227.png",
            name: "Skarmory",
          },
          method: "Sevault Canyon (tall grass)",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3r_201F.png",
            name: "Unown",
          },
          method: "Tanoby Ruins (after boulder puzzles)",
        },

        /* --------------------------- Switch Version Exclusives ---------------------------- */
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3r_249.png", name: "Lugia" },
          method: "Navel Rock (Switch re‑release ticket)",
        },
        {
          pokemon: { img: "/assets/images/FRLG/Pokedex/Spr_3r_250.png", name: "Ho-Oh" },
          method: "Navel Rock (Switch re‑release ticket)",
        },
        {
          pokemon: {
            img: "/assets/images/FRLG/Pokedex/Spr_3f_386.png",
            name: "Deoxys",
          },
          method: "Birth Island (triangle puzzle; Switch re‑release ticket)",
        },
      ],
    },
  },
};
