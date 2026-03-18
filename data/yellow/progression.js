/* ----------------------
 - img src: https://archives.bulbagarden.net/wiki/Category:Yellow_sprites
 - Guide: https://docs.google.com/document/d/1_ffM1uUOhfVgxkQfhe41qPq1KHZ_ISAzxnJtHt23u9M/edit?usp=sharing
 - Pikachu src: https://bulbapedia.bulbagarden.net/wiki/File:025Pikachu_Y.png
----------------------- */
window.gameData = {
  gameId: `yellow`,
  gameTitle: `Pokémon Yellow Version: Special Pikachu Edition`,

  logo: `assets/images/logos/yellow.png`,

  aboutHtml: `<section class="game-intro-content">
      <ul>
        <li>I played this version AFTER FireRed and this is much harder due to the abysmal move sets that a pokemon learns from levelling up. A prime example at the start of the game is Pidgey who only knows Quick Attack and Gust until it learns Wing Attack in its late 20s! You also need to get used to PC boxes being full, lack of running shoes/Vs Seeker, your bag getting full etc.</li>
        <li>This will be a very grindy challenge. If you don’t think you’ve got the patience, then now would be the time to back out. The first part of the game alone (before Brock) will take you tens of hours! It gets less grindy as the game proceeds, but it will be a long road. </li>
        <li>Learning new moves shouldn’t be taken for granted, particularly with pokemon that evolve at higher levels. During a normal game you might be quick to replace weaker moves with stronger ones but getting rid of non-attacking moves is a better strategy here. Also consider stopping your pokemon from evolving if they are a three stage evolution so that you can learn more/better moves. Again, on the first part of the challenge before Brock, you are battling low level pokemon and will run out of PP very quickly while your exp gained goes up very slowly. You need to maximize the amount of pokemon you can defeat, so having multiple attacking moves, regardless of how weak they are, will be beneficial. You have no need for moves like Growl or Sand Attack.</li>
        <li>This challenge is a fun alternative to a regular play through and you may really appreciate having to train pokemon up yourself that you never trained before. On the other hand you may end up despising certain pokemon due to their inability to attack when you first get them or their generally poor levelling up moves. </li>
        <li>It’s not really a rule, but my preferred method is that you train them yourself except when they can’t battle themselves (i.e. Magikarp before it learns Tackle). This is all down to your own limitations that you set. I don’t like using Rare Candy anymore as it defeats the purpose of the challenge and I don’t like using any exp sharing items. </li>
        <li>Please note that this is not a full guide to the game, I am only listing the pokemon you can catch at the earliest opportunities and any required items. I do not go into full detail on optimal exp gains or where to find the highest level for an individual pokemon etc. This playthrough and guide were done as a casual play rather than a speed run. Please consult other guides for a full walkthrough or more detailed information.</li>
      </ul>
      <p class="tips-source">
        <a href="https://docs.google.com/document/d/1_ffM1uUOhfVgxkQfhe41qPq1KHZ_ISAzxnJtHt23u9M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
    </section>`,

  progression: {
    brock: {
      headerTitle: `Pre Badge #1 - Brock`,
      headerImg: `assets/images/Yellow/badges/Spr_Y_Brock.png`,
      headerImgAlt: `Brock as he appered in Pokemon Yellow`,

      summaryShort: `This first part will cover everything you can do BEFORE you get that first badge from Brock. This is probably the most daunting part of the challenge…`,

      summaryHtml: `
        <h5>Pallet Town</h5>
        <p>
          Starting off in your home town, you’ll soon be given the chance to grab your first starter pokemon which is of course Pikachu. This is less challenging than picking the usual starters, or at least it would be were there not one additional pokemon added to this selection in Yellow. Go to Viridian City, grab the parcel from the Pokemart, deliver it to Professor Oak and grab that important pokedex and some pokeballs to go with it.
        </p>
        <pre>
          Pikachu
        </pre>
        <p>
          Straight off we’re stuck with a non-evolving pokemon since you can’t use a Thunder Stone on Pikachu successfully and there are no other Pikachu in the game which means that Raichu is completely unobtainable.
        </p>

        <h5>Route 1</h5>
        <p>
          Only two pokemon to catch and evolve here:
        </p>
        <pre>
          Pidgey → Lv. 18 → Pidgeotto → Lv. 36 → Pidgeot
          Rattata → Lv. 20 → Raticate
        </pre>

        <h5>Route 22</h5>
        <p>
          Pass through Viridian City and go West to Route 22 where you can catch:
        </p>
        <pre>
          Nidoran F → Lv. 16 → Nidorina
          Nidoran M → Lv. 16 → Nidorino
          Spearow → Lv. 20 → Fearow
          Mankey → Lv. 28 → Primeape
        </pre>
        <p>
          You can battle your rival here should you need to battle a trainer that gives a bit more experience than wild Pokémon. Mankey or Pidgey/Pidgeotto could use it. Nidorina and Nidorino can’t evolve any further just yet.
        </p>

        <h5>Viridian Forest</h5>
        <p>
          Back into Viridian City, head north this time and skip over Route 2 to Viridian Forest.
        </p>
        <pre>
          Caterpie → Lv. 7 → Metapod → Lv. 10 → Butterfree
        </pre>
        <p>
          Viridian Forest is somewhat of a double-edged sword in comparison to Red and Blue. On the plus side, there’s no Weedle to poison you. The downside is that instead of Weedle and Kakuna, you will find Pidgey and a very rare Pidgeotto. Pidgey gives much worse exp than Kakuna and is more common than Metapod so grinding levels here will take longer. On top of that, Metapod is rarely found above Lv4 so grinding takes a lot longer than Red/Blue.
        </p>

        <h5>Pewter City</h5>
        <p>
          You can enter Pewter City but can’t advance until you get your first badge.
        </p>

        <h5>Levelling up tips</h5>
        <p>
          This will be the longest part of your challenge and is made even more painful without any way to rematch trainers or run/cycle. The real killers are getting Pidgeot followed by Primeape. I tend to continuously battle using the same pokemon until it runs out of PP or is KO’d or you could level each pokemon up in your team once and then switch your lead pokemon to make it less tedious. As mentioned earlier, definitely prioritize attacking moves over non attack moves. I actually decided NOT to evolve Pidgey until it learned Wing Attack at Lv28 otherwise Pidgeotto won’t learn it until Lv31 and it’d be stuck with only two attacking moves and will level VERY slowly due to running out of PP. For some extra experience, go defeat the trainers in the gym, just make sure you don’t talk to Brock until you’ve maxed out the dex for this part.
        </p>

        <p>
          <strong>End of part 1:</strong><br/>
          Caught 17, Remaining 134
        </p>
              <p class="tips-source">
        <a href="https://docs.google.com/document/d/1_ffM1uUOhfVgxkQfhe41qPq1KHZ_ISAzxnJtHt23u9M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
      `,
      summaryOpen: false,

      rows: [
        /* --------------------------- Pallet Town ----------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_025.png",
            name: "Pikachu",
          },
          method: "Starter (cannot evolve in Yellow)",
        },

        /* --------------------------- Route 1 --------------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_016.png",
            name: "Pidgey",
          },
          method: "Catch on Route 1",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_017.png",
            name: "Pidgeotto",
          },
          method: "Evolve from Pidgey at level 18",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_018.png",
            name: "Pidgeot",
          },
          method: "Evolve from Pidgeotto at level 36",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_019.png",
            name: "Rattata",
          },
          method: "Catch on Route 1",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_020.png",
            name: "Raticate",
          },
          method: "Evolve from Rattata at level 20",
        },

        /* --------------------------- Route 22 -------------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_029.png",
            name: "Nidoran F",
          },
          method: "Catch on Route 22",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_030.png",
            name: "Nidorina",
          },
          method: "Evolve from Nidoran F at level 16",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_032.png",
            name: "Nidoran M",
          },
          method: "Catch on Route 22",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_033.png",
            name: "Nidorino",
          },
          method: "Evolve from Nidoran M at level 16",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_021.png",
            name: "Spearow",
          },
          method: "Catch on Route 22",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_022.png",
            name: "Fearow",
          },
          method: "Evolve from Spearow at level 20",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_056.png",
            name: "Mankey",
          },
          method: "Catch on Route 22",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_057.png",
            name: "Primeape",
          },
          method: "Evolve from Mankey at level 28",
        },

        /* --------------------------- Viridian Forest ------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_010.png",
            name: "Caterpie",
          },
          method: "Catch in Viridian Forest",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_011.png",
            name: "Metapod",
          },
          method: "Evolve from Caterpie at level 7",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_012.png",
            name: "Butterfree",
          },
          method: "Evolve from Metapod at level 10",
        },
      ],
    },
    misty: {
      headerTitle: `Pre Badge #2 - Misty`,
      headerImg: `assets/images/Yellow/badges/Spr_Y_Misty.png`,
      headerImgAlt: `Misty as she appered in Pokemon Yellow`,

      summaryShort: `Take on Brock with your fearsome team and get that first badge. You can finally leave through the eastern exit of Pewter City.`,

      summaryHtml: `
        <h5>Route 3</h5>
        <p>
          Now that you don’t need any experience, lots of trainers will be trying to challenge you! Try to skip as many as you can so you can come back with new pokemon. Past the trainers you will find some patches of grass to catch:
        </p>
        <pre>
          Sandshrew → Lv. 22 → Sandslash
        </pre>
        <p>Or you can wait until Mt Moon instead to catch one.</p>

        <h5>Route 4</h5>
        <p>
          Go north from Route 3 and buy a Magikarp from the salesman in the pokemon center. Bait and switch Magikarp on the trainers on Route 3 for some help levelling it up. Alternatively you can wait until Vermilion City where you’ll get the Old Rod which gives 100% encounter rate for Magikarp in any fishable area.
        </p>
        <pre>
          Magikarp → Lv. 20 → Gyarados
        </pre>

        <h5>Mt Moon</h5>
        <p>
          Be cautious about proceeding through the cave too fast, there is a point of no return which will make or break the success of this challenge. Once you leave the cave and hop over the ledge on the other side, you won’t be able to get back without another badge, therefore failing the challenge. In the cave you can catch:
        </p>
        <pre>
          Zubat → Lv. 22 → Golbat
          Geodude → Lv. 25 → Graveler
          Paras → Lv. 24 → Parasect
          Clefairy
        </pre>
        <p>
          Paras and Clefairy are more common the deeper you go. Graveler won’t EVER be able to evolve into Golem since you can’t trade. Catching Clefairy completes your set for moon stone evolution pokemon but at this point in time you won’t have any. You’ll need four Moon Stones in total. There are two moon stones inside Mt Moon. One is a standard item to pick up, the other is invisible. You’ll find it in the narrow alcove on the right just before you pick up the fossils. The remaining two Moon Stones you need will come later in the challenge.
        </p>
        <p>
          Make sure you catch another Clefairy for a trade coming up. Pick up one of the fossils on your way out. If you’re confident you’ve caught Geodude, Zubat, Paras, TWO Clefairy and obtained the two Moon Stones, you can finally leave the cave.
        </p>

        <h5>Cerulean City</h5>
        <p>
          In one of the houses you can pick up a Bulbasaur if your Pikachu is happy enough. This depends on whether you’ve actually been training it given the nature of the challenge. You can spam Potions even if they won’t do anything and Pikachu will soon be happy enough.
        </p>
        <pre>
          Bulbasaur → Lv. 16 → Ivysaur → Lv. 32 → Venusaur
        </pre>

        <h5>Route 24</h5>
        <p>
          Enter Cerulean City and once you’re healed up, go north to route 24.
        </p>
        <pre>
          Venonat → Lv. 31 → Venomoth
          Oddish → Lv. 21 → Gloom
          Bellsprout → Lv. 21 → Weepinbell
        </pre>
        <p>
          If you talk to the trainer in the top left area of the route after Nugget Bridge, he will give you a Charmander. Continue east and go to Bill’s house where you can get the SS Ticket.
        </p>
        <pre>
          Charmander → Lv. 16 → Charmeleon → Lv. 36 → Charizard
        </pre>

        <h5>Route 5</h5>
        <p>
          Go back to Cerulean City but forget the Cerulean Gym. We can come back later. Go through the burgled house to go south to route 5. Here you’ll find:
        </p>
        <pre>
          Abra → Lv. 16 → Kadabra
          Jigglypuff
        </pre>
        <p>
          With Jigglypuff you now have all four Moon Stone evolutions so it’s your choice who to evolve. The remaining two Moon Stones are available in the next section.
        </p>
        <pre>
          Nidorina/ Nidorino/ Clefairy/ Jigglypuff → Moon Stone → Nidoqueen/ Nidoking/ Clefable/ Wigglytuff
        </pre>

        <h5>Vermilion City</h5>
        <p>
          Go through the underground tunnel on Route 5, skip the next route as there’s nothing new and go south to Vermilion City. Grab the bike voucher from the fan club’s president if you want it (you don’t need to).
        </p>

        <h5>Route 11</h5>
        <p>
          Go east from Vermilion City to Route 11 and catch:
        </p>
        <pre>
          Drowzee → Lv. 26 → Hypno
        </pre>

        <h5>Diglett Cave</h5>
        <p>
          Take your spare Clefairy with you through Diglett Cave. You want to leave through the far exit. On the way, catch a Diglett.
        </p>
        <pre>
          Diglett → Lv. 26 → Dugtrio
        </pre>
        <p>
          You can either evolve one or catch a wild Dugtrio.
        </p>

        <h5>Route 2</h5>
        <p>
          Leave the north exit in Diglett Cave and enter the house to trade your Clefairy for a Mr. Mime.
        </p>
        <pre>
          Mr. Mime
        </pre>

        <h5>SS Anne</h5>
        <p>
          Go back to Vermilion City and clear the SS Anne to get the HM for Cut. There’s nothing more you can do without the badge to use Cut which is by beating Misty in Cerulean City.
        </p>

        <h5>Levelling Tips</h5>
        <p>
          Battle everyone you can! Aside from defeating all the trainers available (don’t forget the ones in Cerulean Gym) the best place to train would be Diglett Cave as Diglett give fairly good exp despite being quite frail.
        </p>

        <p>
          <strong>End of part 2:</strong><br/>
          Caught 50, Remaining 101
        </p>
              <p class="tips-source">
        <a href="https://docs.google.com/document/d/1_ffM1uUOhfVgxkQfhe41qPq1KHZ_ISAzxnJtHt23u9M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
      `,
      summaryOpen: false,

      rows: [
        /* --------------------------- Moon Stone Choices --------------------------------- */
        {
          type: "choice",
          choiceTitle: "Pick two Pokémon to use your Moon Stones on:",
          choiceKey: "moon-stone-1",
          choiceValue: "nidoqueen",
          choiceCap: 2,
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_031.png",
            name: "Nidoqueen",
          },
          method: "Use a Moon Stone on Nidorina",
        },
        {
          type: "choice",
          choiceTitle: "Pick two Pokémon to use your Moon Stones on:",
          choiceKey: "moon-stone-1",
          choiceValue: "nidoking",
          choiceCap: 2,
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_034.png",
            name: "Nidoking",
          },
          method: "Use a Moon Stone on Nidorino",
        },
        {
          type: "choice",
          choiceTitle: "Pick two Pokémon to use your Moon Stones on:",
          choiceKey: "moon-stone-1",
          choiceValue: "clefable",
          choiceCap: 2,
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_036.png",
            name: "Clefable",
          },
          method: "Use a Moon Stone on Clefairy",
        },
        {
          type: "choice",
          choiceTitle: "Pick two Pokémon to use your Moon Stones on:",
          choiceKey: "moon-stone-1",
          choiceValue: "wigglytuff",
          choiceCap: 2,
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_040.png",
            name: "Wigglytuff",
          },
          method: "Use a Moon Stone on Jigglypuff",
        },
        /* --------------------------- Fossil Choices --------------------------------- */
        {
          type: "choice",
          choiceKey: "fossil",
          choiceValue: "kabuto",
          choiceCap: 1,
          choiceTitle: "Choose which Fossil to revive:",
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_140.png",
            name: "Kabuto",
          },
          method: "Revive Dome Fossil (Cinnabar Lab)",
        },
        {
          type: "choice",
          choiceKey: "fossil",
          choiceValue: "omanyte",
          choiceCap: 1,
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_138.png",
            name: "Omanyte",
          },
          method: "Revive Helix Fossil (Cinnabar Lab)",
        },
        /* --------------------------- Route 3 --------------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_027.png",
            name: "Sandshrew",
          },
          method: "Catch on Route 3 (or later in Mt. Moon)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_028.png",
            name: "Sandslash",
          },
          method: "Evolve from Sandshrew at level 22",
        },

        /* --------------------------- Route 4 --------------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_129.png",
            name: "Magikarp",
          },
          method:
            "Buy from Route 4 Pokémon Center (or fish later with Old Rod)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_130.png",
            name: "Gyarados",
          },
          method: "Evolve from Magikarp at level 20",
        },

        /* --------------------------- Mt. Moon -------------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_041.png",
            name: "Zubat",
          },
          method: "Catch in Mt. Moon",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_042.png",
            name: "Golbat",
          },
          method: "Evolve from Zubat at level 22",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_074.png",
            name: "Geodude",
          },
          method: "Catch in Mt. Moon",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_075.png",
            name: "Graveler",
          },
          method: "Evolve from Geodude at level 25",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_046.png",
            name: "Paras",
          },
          method: "Catch in Mt. Moon",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_047.png",
            name: "Parasect",
          },
          method: "Evolve from Paras at level 24",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_035.png",
            name: "Clefairy",
          },
          method: "Catch in Mt. Moon (catch two for later trade)",
        },

        /* --------------------------- Cerulean City --------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_001.png",
            name: "Bulbasaur",
          },
          method: "Gift in Cerulean City (requires high Pikachu friendship)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_002.png",
            name: "Ivysaur",
          },
          method: "Evolve from Bulbasaur at level 16",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_003.png",
            name: "Venusaur",
          },
          method: "Evolve from Ivysaur at level 32",
        },

        /* --------------------------- Route 24 -------------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_048.png",
            name: "Venonat",
          },
          method: "Catch on Route 24",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_049.png",
            name: "Venomoth",
          },
          method: "Evolve from Venonat at level 31",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_043.png",
            name: "Oddish",
          },
          method: "Catch on Route 24",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_044.png",
            name: "Gloom",
          },
          method: "Evolve from Oddish at level 21",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_069.png",
            name: "Bellsprout",
          },
          method: "Catch on Route 24",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_070.png",
            name: "Weepinbell",
          },
          method: "Evolve from Bellsprout at level 21",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_004.png",
            name: "Charmander",
          },
          method: "Gift from trainer after Nugget Bridge (Route 24)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_005.png",
            name: "Charmeleon",
          },
          method: "Evolve from Charmander at level 16",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_006.png",
            name: "Charizard",
          },
          method: "Evolve from Charmeleon at level 36",
        },

        /* --------------------------- Route 5 --------------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_063.png",
            name: "Abra",
          },
          method: "Catch on Route 5",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_064.png",
            name: "Kadabra",
          },
          method: "Evolve from Abra at level 16",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_039.png",
            name: "Jigglypuff",
          },
          method: "Catch on Route 5",
        },

        /* --------------------------- Moon Stone Evolutions ------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_031.png",
            name: "Nidoqueen",
          },
          method: "Use a Moon Stone on Nidorina",
          requires: { "moon-stone-1": "nidoqueen" },
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_034.png",
            name: "Nidoking",
          },
          method: "Use a Moon Stone on Nidorino",
          requires: { "moon-stone-1": "nidoking" },
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_036.png",
            name: "Clefable",
          },
          method: "Use a Moon Stone on Clefairy",
          requires: { "moon-stone-1": "clefable" },
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_040.png",
            name: "Wigglytuff",
          },
          method: "Use a Moon Stone on Jigglypuff",
          requires: { "moon-stone-1": "wigglytuff" },
        },

        /* --------------------------- Route 11 -------------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_096.png",
            name: "Drowzee",
          },
          method: "Catch on Route 11",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_097.png",
            name: "Hypno",
          },
          method: "Evolve from Drowzee at level 26",
        },

        /* --------------------------- Diglett Cave ---------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_050.png",
            name: "Diglett",
          },
          method: "Catch in Diglett Cave",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_051.png",
            name: "Dugtrio",
          },
          method: "Evolve from Diglett at level 26 (or catch a wild Dugtrio)",
        },

        /* --------------------------- Route 2 --------------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_122.png",
            name: "Mr. Mime",
          },
          method: "Trade Clefairy for Mr. Mime (house north of Diglett Cave)",
        },
      ],
    },
    koga: {
      headerTitle: `Pre Badge #3 - Koga`,
      headerImg: `assets/images/Yellow/badges/Spr_Y_Koga.png`,
      headerImgAlt: `Koga as he appered in Pokemon Yellow`,

      summaryShort: `Defeat Misty and get that Cascade Badge and the ability to use Cut. Whilst you’re in Cerulean City, exchange the bike voucher for a bike for faster movement whilst grinding. There’s no need to defeat Lt Surge as this only gives you access to Fly and three more pokemon so we can skip this gym until later. There is a LOT open to you at this point before considering another badge and you have almost the entirety of Kanto accessible.`,

      summaryHtml: `
        <h5>Route 2/Pewter City</h5>
        <p>
          Go back through Diglett Cave and use Cut on Route 4 to get the HM for Flash and an extra Moon Stone as well as the Old Amber from the side entrance of the Pewter City Museum. You can now evolve your third Moon Stone pokemon.
        </p>
        <pre>
          Nidorina/ Nidorino/ Clefairy/ Jigglypuff → Moon Stone → Nidoqueen/ Nidoking/ Clefable/ Wigglytuff
        </pre>

        <h5>Route 9/Route 10</h5>
        <p>
          East of Cerulean City, cut the tree down and pass through route 9 to go to route 10. The patch of grass by the water contains a new pokemon.
        </p>
        <pre>
          Machop → Lv. 28 → Machoke
          Magnemite → Lv. 30 → Magneton
        </pre>
        <p>
          Machop is fairly rare so you may want to wait until Rock Tunnel. You CAN evolve your Machop now but there’s a much easier way to get Machoke shortly…
        </p>

        <h5>Rock Tunnel</h5>
        <p>
          Flash will be helpful but isn’t essential. In the tunnel you can catch Onix lurking in the lower floors:
        </p>
        <pre>
          Onix
        </pre>

        <h5>Celadon City</h5>
        <p>
          Once you’ve reached Lavender Town, head west, skip over Routes 7 and 8 and go straight to Celadon City. Here you can pick up:
        </p>
        <pre>
          Eevee
          Vulpix
          Porygon
        </pre>
        <p>
          Eevee can be found in the back entrance of one of the tall buildings. The Game Corner has a few pokemon, some of which will be in the safari zone so we won’t buy them here (they can still be caught before getting the next badge). Vulpix and Porygon are the only two you will have to buy. If you can’t afford it now, come back once you’ve battled every trainer you can in this section to get enough cash to exchange for coins (1000 for Vulpix, 9999 for Porygon). Go to Celadon Department Store and buy stones to evolve some of your pokemon:
        </p>
        <pre>
          Eevee → Fire/Thunder/Water Stone → Flareon/Jolteon/Vaporeon
          Vulpix → Fire Stone → Ninetales
          Gloom → Leaf Stone → Vileplume
          Weepinbell → Leaf Stone → Victreebel
        </pre>
        <p>
          From now on, every time you catch a pokemon that needs a stone, come back here to buy one. While you’re in Celadon, clear out the Rocket Hideout at the Game Corner to obtain the Silph Scope. There is also another Moon Stone here within the hideout for you to evolve your final Moon Stone pokemon.
        </p>
        <pre>
          Nidorina/ Nidorino/ Clefairy/ Jigglypuff → Moon Stone → Nidoqueen/ Nidoking/ Clefable/ Wigglytuff
        </pre>

        <h5>Route 16</h5>
        <p>
          Head West to Route 16 and use Cut to access the grass to catch a Doduo.
        </p>
        <pre>
          Doduo → Lv. 31 → Dodrio
        </pre>

        <h5>Lavender Town</h5>
        <p>
          Return to Lavender Town and rescue Mr. Fuji from Pokemon Tower. With the Silph Scope you can now catch the pokemon here.
        </p>
        <pre>
          Gastly → Lv. 25 → Haunter
          Cubone → Lv. 28 → Marowak
        </pre>
        <p>
          Catch a second Cubone and go back to the underground tunnel between Cerulean and Vermilion to trade it for a Machoke which will then evolve into a Machamp! As a reward for saving Mr. Fuji you’ll get the pokeflute. Head south from Lavender Town and catch Snorlax.
        </p>
        <pre>
          Machoke → Evolves when received → Machamp
          Snorlax
        </pre>

        <h5>Route 12</h5>
        <p>
          Continue south past Snorlax and enter the house to get the Super Rod.
        </p>

        <h5>Route 17</h5>
        <p>
          Defeat or catch the other Snorlax West of Celadon and go down Cycling Road where you’ll find a Ponyta in the grass:
        </p>
        <pre>
          Ponyta → Lv. 40 → Rapidash
        </pre>

        <h5>Fishing Spree</h5>
        <p>
          Carry on down Cycling Road to get to Fuschia City where you can pick up a Good Rod. Touring through Kanto again with the Good Rod and Super Rod you can catch and evolve a multitude of pokemon. If you fish in the same routes with the Super Rod you can also find the evolved forms of most of these Pokémon (Poliwhirl, Seaking, Kingler, Seadra and Tentacruel)
        </p>
        <pre>
          Shellder → Water Stone → Cloyster (Super Rod –Route 17)
          Poliwag → Lv. 25 → Poliwhirl → Water Stone → Poliwrath (Super Rod – Route 22)
          Goldeen → Lv. 33 → Seaking (Super Rod – Route 24)
          Krabby → Lv. 28 → Kingler (Super Rod – Route 10)
          Horsea → Lv. 32 → Seadra  (Super Rod – Route 12)
          Staryu → Water Stone → Starmie (Super Rod – Route 19)
          Tentacool → Lv. 30 → Tentacruel (Super Rod – Route 19)
        </pre>

        <h5>Route 13</h5>
        <p>
          Between Fuschia City and Lavender Town in Route 13 you can find a wild Farfetch’d. This are the last standard wild encounter for this portion of the challenge.
        </p>
        <pre>
          Farfetch’d
        </pre>

        <h5>Safari Zone</h5>
        <p>
          You may have to go here several times! Pick up the HM for Surf and the Gold Teeth so you can trade for the Strength HM. For catching pokemon, you’ll be obtaining:
        </p>
        <pre>
          Dratini → Lv. 30 → Dragonair → Lv. 55 → Dragonite
          Exeggcute → Leaf Stone → Exeggutor
          Rhyhorn → Lv. 42 → Rhydon
          Tangela
          Chansey
          Scyther
          Pinsir
          Tauros
          Kangaskhan
        </pre>
        <p>
          In any area, fish in the water with the Super Rod for Dratini. Yellow gives you more of a headache as the rare pokemon are more numerous since you’ve got BOTH version exclusives (Scyther and Pinsir) as well as Tangela thrown in as well. Tangela is best found in Area 1, Tauros and Chansey in Area 2, Kangaskhan and Scyther in Area 3 and Pinsir in Area 4. All have low encounter rates in those areas and also have low capture rates which may really frustrate you! Honestly it’s best to simply throw a safari ball than mess around with bait or rocks. If it says “you missed the Pokémon” you’re not doing anything wrong, it just has a low capture rate. When the ball does hit you’ve guaranteed a catch. You can also save in the safari zone so soft resetting on an unlucky expedition is a great way to save money.
        </p>

        <h5>Saffron City</h5>
        <p>
          You can beat the Dojo and get either Hitmonlee or Hitmonchan.
        </p>
        <pre>
          Hitmonlee/Hitmonchan
        </pre>
        <p>
          You can also clear out Silph Co and get the Lapras from the Silph employee.
        </p>
        <pre>
          Lapras
        </pre>
        <p>
          Now it’s finally time to get another badge! Did you ever imagine you could complete two thirds of the pokedex with only two badges???
        </p>

        <h5>Levelling Tips</h5>
        <p>
          Getting that Dragonite will certainly be a difficult task. Consider teaching it Surf to avoid wasting a TM. Trying to keep as many trainers from battling you is a great idea. The two Rocket areas (Game Corner and Silph Co) can be great for lots of battles. Wrap in Gen 1 means the enemy can’t attack, so it’s certainly helpful since Dratini has terrible levelling up moves. There’s also no real reason to keep it unevolved to learn moves quicker, Dragon Rage isn’t much help at this stage in the game. For general grinding, the areas to the East and West of Fuschia City give the highest exp.
        </p>

        <p>
          <strong>End of part 3:</strong><br/>
          Caught 105, Remaining 46
        </p>
              <p class="tips-source">
        <a href="https://docs.google.com/document/d/1_ffM1uUOhfVgxkQfhe41qPq1KHZ_ISAzxnJtHt23u9M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
      `,

      summaryOpen: false,

      rows: [
        /* --------------------------- Eeveelution ------------------- */
        {
          type: "choice",
          choiceKey: "eeveelution",
          choiceValue: "flareon",
          choiceCap: 1,
          choiceTitle: "Choose your Eeveelution:",
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_136.png",
            name: "Flareon",
          },
          method: "Use a Fire Stone on Eevee",
        },
        {
          type: "choice",
          choiceKey: "eeveelution",
          choiceValue: "jolteon",
          choiceCap: 1,
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_135.png",
            name: "Jolteon",
          },
          method: "Use a Thunder Stone on Eevee",
        },
        {
          type: "choice",
          choiceKey: "eeveelution",
          choiceValue: "vaporeon",
          choiceCap: 1,
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_134.png",
            name: "Vaporeon",
          },
          method: "Use a Water Stone on Eevee",
        },
        /* --------------------------- Hitmon ------------------- */
        {
          type: "choice",
          choiceKey: "hitmon",
          choiceValue: "hitmonlee",
          choiceCap: 1,
          choiceTitle: "Choose your Hitmon:",
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_106.png",
            name: "Hitmonlee",
          },
          method: "Fighting Dojo (choose one)",
        },
        {
          type: "choice",
          choiceKey: "hitmon",
          choiceValue: "hitmonchan",
          choiceCap: 1,
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_107.png",
            name: "Hitmonchan",
          },
          method: "Fighting Dojo (choose one)",
        },

        /* --------------------------- Route 2 / Pewter City ------------------- */

        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_031.png",
            name: "Nidoqueen",
          },
          method: "Use a Moon Stone on Nidorina",
          requiresNot: { "moon-stone-1": "nidoqueen" },
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_034.png",
            name: "Nidoking",
          },
          method: "Use a Moon Stone on Nidorino",
          requiresNot: { "moon-stone-1": "nidoking" },
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_036.png",
            name: "Clefable",
          },
          method: "Use a Moon Stone on Clefairy",
          requiresNot: { "moon-stone-1": "clefable" },
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_040.png",
            name: "Wigglytuff",
          },
          method: "Use a Moon Stone on Jigglypuff",
          requiresNot: { "moon-stone-1": "wigglytuff" },
        },

        /* --------------------------- Route 9 / Route 10 ---------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_066.png",
            name: "Machop",
          },
          method: "Catch on Route 10 (grass by water)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_067.png",
            name: "Machoke",
          },
          method: "Evolve from Machop at level 28",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_081.png",
            name: "Magnemite",
          },
          method: "Catch on Route 10 (grass by water)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_082.png",
            name: "Magneton",
          },
          method: "Evolve from Magnemite at level 30",
        },

        /* --------------------------- Rock Tunnel ----------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_095.png",
            name: "Onix",
          },
          method: "Catch in Rock Tunnel",
        },

        /* --------------------------- Celadon City ---------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_133.png",
            name: "Eevee",
          },
          method: "Celadon City (back entrance)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_037.png",
            name: "Vulpix",
          },
          method: "Celadon Game Corner (purchase)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_137.png",
            name: "Porygon",
          },
          method: "Celadon Game Corner (purchase)",
        },

        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_136.png",
            name: "Flareon",
          },
          method: "Use a Fire Stone on Eevee",
          requires: { eeveelution: "flareon" },
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_135.png",
            name: "Jolteon",
          },
          method: "Use a Thunder Stone on Eevee",
          requires: { eeveelution: "jolteon" },
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_134.png",
            name: "Vaporeon",
          },
          method: "Use a Water Stone on Eevee",
          requires: { eeveelution: "vaporeon" },
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_038.png",
            name: "Ninetales",
          },
          method: "Use a Fire Stone on Vulpix",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_045.png",
            name: "Vileplume",
          },
          method: "Use a Leaf Stone on Gloom",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_071.png",
            name: "Victreebel",
          },
          method: "Use a Leaf Stone on Weepinbell",
        },

        /* --------------------------- Celadon Hideout Moon Stone -------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_031.png",
            name: "Nidoqueen",
          },
          method: "Use a Moon Stone on Nidorina (Rocket Hideout Moon Stone)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_034.png",
            name: "Nidoking",
          },
          method: "Use a Moon Stone on Nidorino (Rocket Hideout Moon Stone)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_036.png",
            name: "Clefable",
          },
          method: "Use a Moon Stone on Clefairy (Rocket Hideout Moon Stone)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_040.png",
            name: "Wigglytuff",
          },
          method: "Use a Moon Stone on Jigglypuff (Rocket Hideout Moon Stone)",
        },

        /* --------------------------- Route 16 -------------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_084.png",
            name: "Doduo",
          },
          method: "Catch on Route 16",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_085.png",
            name: "Dodrio",
          },
          method: "Evolve from Doduo at level 31",
        },

        /* --------------------------- Lavender Town (Pokémon Tower) ----------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_092.png",
            name: "Gastly",
          },
          method: "Catch in Pokémon Tower",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_093.png",
            name: "Haunter",
          },
          method: "Evolve from Gastly at level 25",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_104.png",
            name: "Cubone",
          },
          method: "Catch in Pokémon Tower",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_105.png",
            name: "Marowak",
          },
          method: "Evolve from Cubone at level 28",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_068.png",
            name: "Machamp",
          },
          method: "Trade: receive Machoke (auto-evolves to Machamp)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_143.png",
            name: "Snorlax",
          },
          method: "Snorlax encounter (Poké Flute)",
        },

        /* --------------------------- Route 17 -------------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_077.png",
            name: "Ponyta",
          },
          method: "Catch on Route 17 (Cycling Road)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_078.png",
            name: "Rapidash",
          },
          method: "Evolve from Ponyta at level 40",
        },

        /* --------------------------- Fishing Spree --------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_090.png",
            name: "Shellder",
          },
          method: "Super Rod — Route 17",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_091.png",
            name: "Cloyster",
          },
          method: "Use a Water Stone on Shellder",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_060.png",
            name: "Poliwag",
          },
          method: "Super Rod — Route 22",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_061.png",
            name: "Poliwhirl",
          },
          method: "Evolve from Poliwag at level 25",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_062.png",
            name: "Poliwrath",
          },
          method: "Use a Water Stone on Poliwhirl",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_118.png",
            name: "Goldeen",
          },
          method: "Super Rod — Route 24",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_119.png",
            name: "Seaking",
          },
          method: "Evolve from Goldeen at level 33",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_098.png",
            name: "Krabby",
          },
          method: "Super Rod — Route 10",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_099.png",
            name: "Kingler",
          },
          method: "Evolve from Krabby at level 28",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_116.png",
            name: "Horsea",
          },
          method: "Super Rod — Route 12",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_117.png",
            name: "Seadra",
          },
          method: "Evolve from Horsea at level 32",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_120.png",
            name: "Staryu",
          },
          method: "Super Rod — Route 19",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_121.png",
            name: "Starmie",
          },
          method: "Use a Water Stone on Staryu",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_072.png",
            name: "Tentacool",
          },
          method: "Super Rod — Route 19",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_073.png",
            name: "Tentacruel",
          },
          method: "Evolve from Tentacool at level 30",
        },

        /* --------------------------- Route 13 -------------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_083.png",
            name: "Farfetch'd",
          },
          method: "Catch on Route 13",
        },

        /* --------------------------- Safari Zone ----------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_147.png",
            name: "Dratini",
          },
          method: "Safari Zone (fish with Super Rod)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_148.png",
            name: "Dragonair",
          },
          method: "Evolve from Dratini at level 30",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_149.png",
            name: "Dragonite",
          },
          method: "Evolve from Dragonair at level 55",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_102.png",
            name: "Exeggcute",
          },
          method: "Safari Zone",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_103.png",
            name: "Exeggutor",
          },
          method: "Use a Leaf Stone on Exeggcute",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_111.png",
            name: "Rhyhorn",
          },
          method: "Safari Zone",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_112.png",
            name: "Rhydon",
          },
          method: "Evolve from Rhyhorn at level 42",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_114.png",
            name: "Tangela",
          },
          method: "Safari Zone",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_113.png",
            name: "Chansey",
          },
          method: "Safari Zone",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_123.png",
            name: "Scyther",
          },
          method: "Safari Zone",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_127.png",
            name: "Pinsir",
          },
          method: "Safari Zone",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_128.png",
            name: "Tauros",
          },
          method: "Safari Zone",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_115.png",
            name: "Kangaskhan",
          },
          method: "Safari Zone",
        },

        /* --------------------------- Saffron City ---------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_106.png",
            name: "Hitmonlee",
          },
          method: "Fighting Dojo",
          requires: { hitmon: "hitmonlee" },
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_107.png",
            name: "Hitmonchan",
          },
          method: "Fighting Dojo",
          requires: { hitmon: "hitmonchan" },
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_131.png",
            name: "Lapras",
          },
          method: "Silph Co. (gift from employee)",
        },
      ],
    },
    surge: {
      headerTitle: `Pre Badge #4 - Lt Surge`,
      headerImg: `assets/images/Yellow/badges/Spr_Y_Surge.png`,
      headerImgAlt: `Lt Surge as he appered in Pokemon Yellow`,

      summaryShort: `You can pick between Lt. Surge, Sabrina, Koga and Erika at this point. Sabrina’s badge unlocks nothing, Erika’s Strength won’t actually be used anywhere without Surf, so it’s between Lt Surge (3 pokemon) or Koga (a lot more) so go get that Soul Badge! There’s a few places to go with Surf now unlocked.`,
      summaryHtml: `
        <h5>Route 6/Route 12</h5>
        <p>
          Revisit these routes and Surf around to encounter a couple of pokemon that can’t be fished like they could in Red and Blue. Psyduck is on Route 6 while Slowpoke is on Route 12
        </p>
        <pre>
          Psyduck → Lv. 33 → Golduck
          Slowpoke → Lv. 37 → Slowbro
        </pre>

        <h5>Power Plant</h5>
        <p>
          Surf to the Power Plant where you can catch a few electric types and a Red version exclusive:
        </p>
        <pre>
          Voltorb → Lv. 30 → Electrode
          Grimer → Lv. 38 → Muk
          Zapdos
        </pre>
        <p>
          Yes, you are really catching a legendary pokemon with only three badges :)
        </p>

        <h5>Cinnabar Island</h5>
        <p>
          You can finally Surf to Cinnabar Island. Visit the lab to revive the fossil from Mt Moon and the Old Amber from Pewter City.
        </p>
        <pre>
          Aerodactyl
          Kabuto/Omanyte → Lv. 40 → Kabutops/Omastar
        </pre>
        <p>
          In Pokemon Mansion, there are a few new pokemon running around. Growlithe is found in the entrance floor while Ditto is found in the basement. Also grab the key to the gym while you’re here.
        </p>
        <pre>
          Growlithe → Fire Stone → Arcanine
          Ditto
        </pre>

        <h5>Seafoam Island</h5>
        <p>
          Surf east from Cinnabar to Seafoam Island where you’ll only be able to catch Seel for now.
        </p>
        <pre>
          Seel → Lv. 34 → Dewgong
        </pre>

        <p>
          There are no more pokemon to catch without more badges so this was a short section!
        </p>

        <h5>Levelling Tips</h5>
        <p>
          Again, try to preserve as many trainers as you can so that when your new pokemon are a bit more capable, they can mow down the competition. Hanging around nearby Fuschia City still works, but you also have the above new areas if you want to try something different.
        </p>

        <p>
          <strong>End of part 4:</strong><br/>
          Caught 122, Remaining 29
        </p>
              <p class="tips-source">
        <a href="https://docs.google.com/document/d/1_ffM1uUOhfVgxkQfhe41qPq1KHZ_ISAzxnJtHt23u9M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
        `,
      summaryOpen: false,

      rows: [
        /* --------------------------- Route 6 / Route 12 ---------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_054.png",
            name: "Psyduck",
          },
          method: "Surf encounter on Route 6",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_055.png",
            name: "Golduck",
          },
          method: "Evolve from Psyduck at level 33",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_079.png",
            name: "Slowpoke",
          },
          method: "Surf encounter on Route 12",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_080.png",
            name: "Slowbro",
          },
          method: "Evolve from Slowpoke at level 37",
        },

        /* --------------------------- Power Plant ----------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_100.png",
            name: "Voltorb",
          },
          method: "Power Plant",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_101.png",
            name: "Electrode",
          },
          method: "Evolve from Voltorb at level 30",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_088.png",
            name: "Grimer",
          },
          method: "Power Plant",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_089.png",
            name: "Muk",
          },
          method: "Evolve from Grimer at level 38",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_145.png",
            name: "Zapdos",
          },
          method: "Power Plant",
        },

        /* --------------------------- Cinnabar Island ------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_142.png",
            name: "Aerodactyl",
          },
          method: "Revive Old Amber (Cinnabar Lab)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_140.png",
            name: "Kabuto",
          },
          method: "Revive Dome Fossil (Cinnabar Lab)",
          requires: { fossil: "kabuto" },
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_141.png",
            name: "Kabutops",
          },
          method: "Evolve from Kabuto at level 40",
          requires: { fossil: "kabuto" },
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_138.png",
            name: "Omanyte",
          },
          method: "Revive Helix Fossil (Cinnabar Lab)",
          requires: { fossil: "omanyte" },
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_139.png",
            name: "Omastar",
          },
          method: "Evolve from Omanyte at level 40",
          requires: { fossil: "omanyte" },
        },

        /* --------------------------- Pokémon Mansion ------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_058.png",
            name: "Growlithe",
          },
          method: "Pokémon Mansion (entrance floor)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_059.png",
            name: "Arcanine",
          },
          method: "Use a Fire Stone on Growlithe",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_132.png",
            name: "Ditto",
          },
          method: "Pokémon Mansion (basement)",
        },

        /* --------------------------- Seafoam Island -------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_086.png",
            name: "Seel",
          },
          method: "Seafoam Island",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_087.png",
            name: "Dewgong",
          },
          method: "Evolve from Seel at level 34",
        },
      ],
    },
    erika: {
      headerTitle: `Pre Badge #5 - Erika`,
      headerImg: `assets/images/Yellow/badges/Spr_Y_Erika.png`,
      headerImgAlt: `Erika as she appered in Pokemon Yellow`,

      summaryShort: `Normally we would defeat Erika in Red and Blue next for Strength but that only unlocks one new pokemon whereas Lt. Surge gives three, so we’ll beat Surge now.`,
      summaryHtml: `
        <h5>Vermilion City</h5>
        <p>
          Once that badge is yours, speak to Officer Jenny who is out in the open and she’ll give you a Squirtle, much later than intended compared to a normal play through!
        </p>
        <pre>
          Squirtle → Lv. 16 → Wartortle → Lv. 36 → Blastoise
        </pre>

        <h5>Levelling Tips</h5>
        <p>
          Once it’s in its late teens, train in Diglett Cave for a while and then in mid 20s venture onwards to any of your favourite training spots!
        </p>

        <p>
          <strong>End of part 5:</strong><br/>
          Caught 125, Remaining 26
        </p>
              <p class="tips-source">
        <a href="https://docs.google.com/document/d/1_ffM1uUOhfVgxkQfhe41qPq1KHZ_ISAzxnJtHt23u9M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
      `,

      summaryOpen: false,

      rows: [
        /* --------------------------- Vermilion City -------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_007.png",
            name: "Squirtle",
          },
          method:
            "Gift from Officer Jenny in Vermilion City after defeating Lt. Surge",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_008.png",
            name: "Wartortle",
          },
          method: "Evolve from Squirtle at level 16",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_009.png",
            name: "Blastoise",
          },
          method: "Evolve from Wartortle at level 36",
        },
      ],
    },
    "6-8": {
      headerTitle: `Pre Badges #6 to #8 - Giovanni`,
      headerImg: `assets/images/Yellow/badges/Spr_Y_Giovanni.png`,
      headerImgAlt: `Giovanni as he appered in Pokemon Yellow`,

      summaryShort: `There’s hardly any pokemon left in the challenge so it’s slim pickings at the moment. Defeating Erika gives you Strength which you can now use to catch ONE pokemon! No other badges by themselves give any benefits of new pokemon.`,
      summaryHtml: `
        <h5>Seafoam Island Revisited</h5>
        <p>
          Solve the puzzles with the boulders to slow down the current and you can reach the area with Articuno and catch your second legendary.
        </p>
        <pre>
          Articuno
        </pre>

        <p>
          <strong>End of part 6:</strong><br/>
          Caught 126, Remaining 25
        </p>
              <p class="tips-source">
        <a href="https://docs.google.com/document/d/1_ffM1uUOhfVgxkQfhe41qPq1KHZ_ISAzxnJtHt23u9M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
      `,

      summaryOpen: false,

      rows: [
        /* --------------------------- Seafoam Island Revisited ---------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_144.png",
            name: "Articuno",
          },
          method: "Seafoam Island (use Strength to reach)",
        },
      ],
    },
    E4: {
      headerTitle: `Pre Elite Four`,
      headerImg: `assets/images/Yellow/badges/Spr_Y_Lance.png`,
      headerImgAlt: `Lance as he appered in Pokemon Yellow`,

      summaryShort: `Since there’s only one pokemon left to catch before the Elite Four, your Pokemon League challenge can continue in full swing. Defeat Sabrina, Blaine and Giovanni for the last badges and then head up to Victory Road.`,
      summaryHtml: `
        <h5>Victory Road</h5>
        <p>
          On the way through the cave you’ll find your third legendary bird, Moltres.
        </p>
        <pre>
          Moltres
        </pre>

        <p>
          <strong>End of part 7:</strong><br/>
          Caught 127, Remaining 24
        </p>
              <p class="tips-source">
        <a href="https://docs.google.com/document/d/1_ffM1uUOhfVgxkQfhe41qPq1KHZ_ISAzxnJtHt23u9M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
      `,
      summaryOpen: true,

      rows: [
        /* --------------------------- Victory Road ---------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_146.png",
            name: "Moltres",
          },
          method: "Victory Road (cave encounter)",
        },
      ],
    },
    PG: {
      headerTitle: `Post Game`,
      headerImg: `assets/images/Yellow/badges/180px-RG_Pokédex.png`,
      headerImgAlt: `The Kanto Pokédex`,

      summaryShort: `March up to the pokemon league and kick the Elite Four’s butts. You’re now the Champion! But there’s still one final challenge left…`,
      summaryHtml: `
        <h5>Cerulean Cave</h5>
        <p>
          Leave Cerulean City from the north exit, cross Nugget Bridge and then Surf along the river to reach Cerulean Cave. Once you reach the lower floors you may be able to find a wild Lickitung. Deep inside the cave you’ll find the 150th pokemon, Mewtwo. Throw that Master Ball! Or if you want to do it legitimately, Mewtwo is Lv. 70 so bring your best ‘mons.
        </p>
        <pre>
          Lickitung
          Mewtwo
        </pre>

        <p>
          And with that, the challenge is complete!
        </p>

        <p>
          <strong>End of the challenge:</strong><br/>
          Caught 129, Remaining 22 (5 more pokemon than Red and Blue!)
        </p>
              <p class="tips-source">
        <a href="https://docs.google.com/document/d/1_ffM1uUOhfVgxkQfhe41qPq1KHZ_ISAzxnJtHt23u9M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
      `,
      summaryOpen: false,

      rows: [
        /* --------------------------- Cerulean Cave --------------------------- */
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_108.png",
            name: "Lickitung",
          },
          method: "Cerulean Cave (wild encounter in lower floors)",
        },
        {
          pokemon: {
            img: "assets/images/Yellow/pokedex/Spr_1y_150.png",
            name: "Mewtwo",
          },
          method: "Cerulean Cave (deepest floors)",
        },
      ],
    },
  },
};
