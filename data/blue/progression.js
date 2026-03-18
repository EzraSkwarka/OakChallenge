/* ----------------------
 - img src: https://archives.bulbagarden.net/wiki/Category:Red_and_Blue_sprites
 - Guide: https://docs.google.com/document/d/1gmp-piwpfUUyxnWULjQtB2m2lzWeYc-wwsXnnbyp_RY/edit?tab=t.0#heading=h.gjdgxs
 - Blastoise src: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Ff0%2Fb4%2F00f0b4d0c1b4b06d09640de6f29716fd.png&f=1&nofb=1&ipt=360a7eee2366c5a49ea29588beaa93f23f13b4314635ab22e6b3ad476c1df7b6
----------------------- */
window.gameData = {
  gameId: "blue",
  gameTitle: "Pokémon Blue",

  logo: "assets/images/logos/blue.png",

  aboutHtml: `
    <section class="game-intro-content">
      <ul>
        <li>I played this version AFTER FireRed and this is much harder due to the abysmal move sets that a pokemon learns from levelling up. A prime example at the start of the game is Pidgey who only knows Quick Attack and Gust until it learns Wing Attack in its late 20s! You also need to get used to PC boxes being full, lack of running shoes/Vs Seeker, your bag getting full etc. </li>
        <li>This will be a very grindy challenge. If you don’t think you’ve got the patience, then now would be the time to back out. The first part of the game alone (before Brock) will take you tens of hours! It gets less grindy as the game proceeds, but it will be a long road.  </li>
        <li>Learning new moves shouldn’t be taken for granted, particularly with pokemon that evolve at higher levels. During a normal game you might be quick to replace Charmander’s Scratch with Slash but getting rid of non-attacking moves is a better strategy here. Also consider stopping your pokemon from evolving if they are a three stage evolution so that you can learn more/better moves. Again, on the first part of the challenge before Brock, you are battling low level pokemon and will run out of PP very quickly while your exp gained goes up very slowly. You need to maximize the amount of pokemon you can defeat, so having multiple attacking moves, regardless of how weak they are, will be beneficial. You have no need for moves like Growl or Sand Attack. </li>
        <li>This challenge is a fun alternative to a regular play through and you may really appreciate having to train pokemon up yourself that you never trained before. On the other hand you may end up despising certain pokemon due to their inability to attack when you first get them or their generally poor levelling up moves.  </li>
        <li>It’s not really a rule, but my preferred method is that you train them yourself except when they can’t battle themselves (i.e. Magikarp before it learns Tackle). This is all down to your own limitations that you set. I don’t like using Rare Candy anymore as it defeats the purpose of the challenge and I don’t like using any exp sharing items. But remember that this is YOUR challenge so feel free to add or remove restrictions as you see fit. </li>
        <li>Please note that this is not a full guide to the game, I am only listing the pokemon you can catch at the earliest opportunities and any required items. I do not go into full detail on optimal exp gains or where to find the highest level for an individual pokemon etc. This playthrough and guide were done as a casual play rather than a speed run. Please consult other guides for a full walkthrough or more detailed information.  </li>
      </ul>
      <p class="tips-source">
        <a href="https://docs.google.com/document/d/1gmp-piwpfUUyxnWULjQtB2m2lzWeYc-wwsXnnbyp_RY/edit?tab=t.0#heading=h.gjdgxs" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
    </section>
  `,

  progression: {
    "brock": {
      headerTitle: "Pre Badge #1 - Brock",
      headerImg: "assets/images/Red and Blue/badges/Spr_RG_Brock.png",
      headerImgAlt: "Brock as he appeared in Pokemon Red and Blue",

      summaryShort:
        "This first part will cover everything you can do BEFORE you get that first badge from Brock. This is probably the most daunting part of the challenge…",

      summaryHtml: `
        <h5>Pallet Town</h5>

        <p>
            Starting off in your hometown, you’ll soon be given the chance to grab your first starter pokemon. As tempting as Bulbasaur might be because it evolves into its final stage earlier than the others, I find Bulbasaur very difficult to train in Viridian Forest since you don’t have any reliable attacks other than Tackle. But of course, it’s your choice! It’s a choice of whether you want to swap the convenience of the other starters for the additional 4 levels to fully evolve (which can take a long time).
        </p>

        <p>
            There is a glitch in these games where your starter won’t register if you evolve it prior to getting the pokedex, so rather than chance it, go to Viridian City, grab the parcel from the Pokemart, deliver it to Professor Oak and grab that important pokedex and some pokeballs to go with it. You can now evolve:
        </p>

        <pre>
            Bulbasaur → Lv. 16 → Ivysaur → Lv. 32 → Venusaur
            OR
            Charmander → Lv. 16 → Charmeleon → Lv. 36 → Charizard
            OR
            Squirtle → Lv. 16 → Wartortle → Lv. 36 → Blastoise
        </pre>

        <p>
            You’re not honestly expected to do this right now, you have all the time in the world…well, right up until you need to beat Brock. This will likely be one of the last pokemon you’ll evolve in this first section.
        </p>

        <h5>Route 1</h5>

        <p>
            Only two pokemon to catch and evolve here. You can of course opt to hold out a little longer to get them at slightly higher levels but it’s negligible extra work that a couple of Metapod/Kakuna can’t fix.
        </p>

        <pre>
            Pidgey → Lv. 18 → Pidgeotto → Lv. 36 → Pidgeot
            Rattata → Lv. 20 → Raticate
        </pre>

        <h5>Route 22</h5>

        <p>
            Pass through Viridian City and go West to Route 22 where you can catch the following Pokémon. The rarity of the Nidoran varies between versions with the male being more common in Red version but the female more commonly found in Blue version.
        </p>

        <pre>
            Nidoran F → Lv. 16 → Nidorina
            Nidoran M → Lv. 16 → Nidorino
            Spearow → Lv. 20 → Fearow
        </pre>

        <p>
            Catch another Spearow for a trade later on. You can battle your rival here should you need to battle a trainer that gives a bit more experience than wild Pokémon. Your starter or Pidgey/Pidgeotto could use it. Nidorina and Nidorino can’t evolve any further just yet.
        </p>

        <h5>Viridian Forest</h5>

        <p>
            Back into Viridian City, head north this time and skip over Route 2 to Viridian Forest. Depending on your version, one of these bugs will be rarer than the others. Red will find Weedle more frequently while Blue has Caterpie as the common bug.
        </p>

        <pre>
            Caterpie → Lv. 7 → Metapod → Lv. 10 → Butterfree
            Weedle → Lv. 7 → Kakuna → Lv. 10 → Beedrill
            Pikachu
        </pre>

        <p>
            You can’t get a Thunderstone at this point in the game so Pikachu will stay unevolved for now. Note that you can catch Metapod and Kakuna but as they won’t have any attacking moves, the better strategy is to level Caterpie/Weedle up to level 9, evolve them and then train the cocoons one more level. They also get an attack drop when they evolve so that’s why it’s not advisable to evolve them at level 7.
        </p>

        <h5>Pewter City</h5>

        <p>
            You can enter Pewter City but can’t advance further until you get your first badge so this is where our first wall is.
        </p>

        <h5>Levelling up tips</h5>

        <p>
            This will be the longest part of your challenge and is made even more painful without any way to rematch trainers or run/cycle. The real killers are getting that fully evolved starter and Pidgeot. I tend to continuously battle using the same pokemon until it runs out of PP or is KO’d. Once you are able to OHKO Weedle, you don’t need to worry about being poisoned and can endure many more battles. As mentioned earlier, definitely prioritize attacking moves over non attack moves. I actually decided NOT to evolve Pidgey until it learned Wing Attack at Lv28 otherwise Pidgeotto won’t learn it until Lv31 and it’d be stuck with only two attacking moves and will level VERY slowly due to running out of PP. For some extra experience, go defeat the trainers in the gym, just make sure you don’t talk to Brock until you’ve maxed out the dex for this part.
        </p>

        <p>
            <strong>End of part 1:</strong><br/>
            Caught 21, Remaining 130
        </p>
        `,
      summaryOpen: false,

      rows: [
        /* --------------------------- Starter Choice Rows ---------------------------- */
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "bulbasaur",
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_001.png", name: "Bulbasaur" },
          method: "Pick this starter to show the Bulbasaur line"
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "charmander",
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_004.png", name: "Charmander" },
          method: "Pick this starter to show the Charmander line"
        },
        {
          type: "choice",
          choiceKey: "starter",
          choiceValue: "squirtle",
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_007.png", name: "Squirtle" },
          method: "Pick this starter to show the Squirtle line"
        },

        /* --------------------------- Bulbasaur Line ---------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_001.png", name: "Bulbasaur" },
          method: "Choose as Starter",
          requires: { starter: "bulbasaur" }
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_002.png", name: "Ivysaur" },
          method: "Evolve from Bulbasaur at level 16",
          requires: { starter: "bulbasaur" }
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_003.png", name: "Venusaur" },
          method: "Evolve from Ivysaur at level 32",
          requires: { starter: "bulbasaur" }
        },

        /* --------------------------- Charmander Line ---------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_004.png", name: "Charmander" },
          method: "Choose as Starter",
          requires: { starter: "charmander" }
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_005.png", name: "Charmeleon" },
          method: "Evolve from Charmander at level 16",
          requires: { starter: "charmander" }
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_006.png", name: "Charizard" },
          method: "Evolve from Charmeleon at level 36",
          requires: { starter: "charmander" }
        },

        /* --------------------------- Squirtle Line ---------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_007.png", name: "Squirtle" },
          method: "Choose as Starter",
          requires: { starter: "squirtle" }
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_008.png", name: "Wartortle" },
          method: "Evolve from Squirtle at level 16",
          requires: { starter: "squirtle" }
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_009.png", name: "Blastoise" },
          method: "Evolve from Wartortle at level 36",
          requires: { starter: "squirtle" }
        },

        /* --------------------------- Route 1 --------------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_016.png", name: "Pidgey" },
          method: "Catch on Route 1"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_017.png", name: "Pidgeotto" },
          method: "Evolve from Pidgey at level 18"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_018.png", name: "Pidgeot" },
          method: "Evolve from Pidgeotto at level 36"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_019.png", name: "Rattata" },
          method: "Catch on Route 1"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_020.png", name: "Raticate" },
          method: "Evolve from Rattata at level 20"
        },

        /* --------------------------- Route 22 -------------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_021.png", name: "Spearow" },
          method: "Catch on Route 22"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_022.png", name: "Fearow" },
          method: "Evolve from Spearow at level 20"
        },

        /* --------------------------- Viridian Forest ------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_010.png", name: "Caterpie" },
          method: "Catch in Viridian Forest"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_011.png", name: "Metapod" },
          method: "Evolve from Caterpie at level 7"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_012.png", name: "Butterfree" },
          method: "Evolve from Metapod at level 10"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_013.png", name: "Weedle" },
          method: "Catch in Viridian Forest"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_014.png", name: "Kakuna" },
          method: "Evolve from Weedle at level 7"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_015.png", name: "Beedrill" },
          method: "Evolve from Kakuna at level 10"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_025.png", name: "Pikachu" },
          method: "Catch in Viridian Forest"
        }
      ]
    },
    "misty": {
      headerTitle: "Pre Badge #2 - Misty",
      headerImg: "assets/images/Red and Blue/badges/Spr_RG_Misty.png",
      headerImgAlt: "Misty as she appeared in Pokemon Red and Blue",

      summaryShort:
        "Take on Brock with your fearsome team and get that first badge. You can finally leave through the eastern exit of Pewter City.",

      summaryHtml: `
        <h5>Route 3</h5>
        <p>
          Now that you don’t need any experience, lots of trainers will be trying to challenge you! Try to skip as many as you can so you can come back with new pokemon. Past the trainers you will find some patches of grass to catch:
        </p>
        <pre>
          Jigglypuff
        </pre>
        <p>No Moon Stones are available yet to evolve it but we can obtain some shortly.</p>

        <h5>Route 4</h5>
        <p>
          Go north from Route 3 and buy a Magikarp from the salesman in the pokemon center. You can catch it later without paying for it but with the long journey until you can get the Old Rod in Vermilion City it may be better to start training it now. Bait and switch Magikarp on the trainers on Route 3 for some help levelling it up before entering Mt Moon.
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
          Graveler won’t EVER be able to evolve into Golem since you can’t trade. Catching Clefairy completes your set for moon stone evolution pokemon but at this point in time you won’t have any. You’ll need four Moon Stones in total. There are two moon stones inside Mt Moon. One is a standard item to pick up near the ladder in the top left of the entrance room, the other is invisible. You’ll find it in the narrow alcove on the right just before you pick up the fossils. The remaining two Moon Stones you need will come later in the challenge. It’s your choice who to evolve but at this point I evolved my Nidos because I’d had them the longest:
        </p>
        <pre>
          Nidorina/Nidorino/Jigglypuff/Clefairy → Moon Stone → Nidoqueen/Nidoking/Wigglytuff/Clefable
        </pre>
        <p>
          Pick up one of the fossils on your way out. I took the Helix fossil. I knew that if I didn’t say what I’d take, you’d all ask. Actually, now that I think about it, everyone ask anyway. Comments are good for the YouTube algorithm. (Oh wait, wrong platform). By the time you resurrect it you’ll have plenty of training options but I tend to find Omanyte is easier to train so pick up the Helix Fossil if you’d like that option. If you prefer the cooler Kabutops, pick up the Dome Fossil.
        </p>

        <h5>Route 4</h5>
        <p>
          If you’re confident you’ve caught Jigglypuff, Geodude, Clefairy, Zubat, Paras and obtained the two Moon Stones, you can finally leave the cave. In the patch of grass you can catch:
        </p>
        <pre>
          Sandshrew → Lv. 22 → Sandslash
        </pre>
        <p>
          This is also another opportunity to catch another Spearow for a trade in this section if you forgot to earlier.
        </p>

        <h5>Route 24</h5>
        <p>
          Enter Cerulean City and once you’re healed up, go north to route 24.
        </p>
        <pre>
          Abra → Lv. 16 → Kadabra
          Bellsprout → Lv. 21 → Weepinbell
        </pre>
        <p>
          Catch a second Abra for a trade later on. Continue east and go to Bill’s house where you can get the SS Ticket.
        </p>

        <h5>Route 5</h5>
        <p>
          Go back to Cerulean City but forget the Cerulean Gym. We can come back later. Go through the burgled house to go south to route 5. Here you’ll find:
        </p>
        <pre>
          Meowth → Lv. 28 → Persian
        </pre>
        <p>
          If you allow the daycare in your run, it’s also on this route. Magikarp is a good contender if you haven’t been raising it so far.
        </p>

        <h5>Vermilion City</h5>
        <p>
          Go through the underground tunnel on Route 5, skip the next route as there’s nothing new and go south to Vermilion City. In one of the houses you can trade your spare Spearow for:
        </p>
        <pre>
          Farfetch’d
        </pre>
        <p>
          Also pick up the bike voucher from the fan club’s president if you want the bike.
        </p>

        <h5>Route 11</h5>
        <p>
          Go east from Vermilion City to Route 11 and catch a single pokemon:
        </p>
        <pre>
          Drowzee → Lv. 26 → Hypno
        </pre>

        <h5>Diglett Cave</h5>
        <p>
          Take your spare Abra with you through Diglett Cave. You want to leave through the far exit. On the way, catch a Diglett.
        </p>
        <pre>
          Diglett → Lv. 26 → Dugtrio
        </pre>
        <p>
          You can either evolve one or catch a wild Dugtrio.
        </p>

        <h5>Route 2</h5>
        <p>
          Leave the north exit in Diglett Cave and enter the house to trade your Abra for a Mr. Mime.
        </p>
        <pre>
          Mr. Mime
        </pre>

        <h5>SS Anne</h5>
        <p>
          Go back to Vermilion City and clear the SS Anne to get the HM for Cut. Bear in mind that once you have Cut, the ship will leave forever taking any items and trainers with it so be sure to take advantage of the trainers here for exp. There’s nothing more you can do without the badge to use Cut which is by beating Misty in Cerulean City.
        </p>

        <h5>Levelling Tips</h5>
        <p>
          Battle everyone you can! Aside from defeating all the trainers available (don’t forget the ones in Cerulean Gym) the best place to train would be Diglett Cave as Diglett gives fairly good exp despite being quite frail.
        </p>

        <p>
          <strong>End of part 2:</strong><br/>
          Caught 47, Remaining 104
        </p>
        <p class="tips-source">
        <a href="https://docs.google.com/document/d/1gmp-piwpfUUyxnWULjQtB2m2lzWeYc-wwsXnnbyp_RY/edit?tab=t.0#heading=h.gjdgxs" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
        `,
      summaryOpen: false,

      rows: [
        /* --------------------------- Fossil Choice Rows ---------------------------- */
        {
          type: "choice",
          choiceKey: "fossil",
          choiceValue: "dome",
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_140.png", name: "Kabuto" },
          method: "Choose the Dome Fossil to unlock Kabuto/Kabutops"
        },
        {
          type: "choice",
          choiceKey: "fossil",
          choiceValue: "helix",
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_138.png", name: "Omanyte" },
          method: "Choose the Helix Fossil to unlock Omanyte/Omastar"
        },
        /* --------------------------- Route 3 --------------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_039.png", name: "Jigglypuff" },
          method: "Catch on Route 3"
        },

        /* --------------------------- Route 4 (Pokémon Center) ---------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_129.png", name: "Magikarp" },
          method: "Buy from the salesman in the Route 4 Pokémon Center"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_130.png", name: "Gyarados" },
          method: "Evolve from Magikarp at level 20"
        },

        /* --------------------------- Mt Moon -------------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_041.png", name: "Zubat" },
          method: "Catch in Mt. Moon"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_042.png", name: "Golbat" },
          method: "Evolve from Zubat at level 22"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_074.png", name: "Geodude" },
          method: "Catch in Mt. Moon"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_075.png", name: "Graveler" },
          method: "Evolve from Geodude at level 25"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_046.png", name: "Paras" },
          method: "Catch in Mt. Moon"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_047.png", name: "Parasect" },
          method: "Evolve from Paras at level 24"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_035.png", name: "Clefairy" },
          method: "Catch in Mt. Moon"
        },

        /* --------------------------- Moon Stone Evolutions ------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_031.png", name: "Nidoqueen" },
          method: "Use a Moon Stone on Nidorina"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_034.png", name: "Nidoking" },
          method: "Use a Moon Stone on Nidorino"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_040.png", name: "Wigglytuff" },
          method: "Use a Moon Stone on Jigglypuff"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_036.png", name: "Clefable" },
          method: "Use a Moon Stone on Clefairy"
        },

        /* --------------------------- Route 4 (post–Mt Moon) ------------------ */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_027.png", name: "Sandshrew" },
          method: "Catch on Route 4"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_028.png", name: "Sandslash" },
          method: "Evolve from Sandshrew at level 22"
        },

        /* --------------------------- Route 24 -------------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_063.png", name: "Abra" },
          method: "Catch on Route 24"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_064.png", name: "Kadabra" },
          method: "Evolve from Abra at level 16"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_069.png", name: "Bellsprout" },
          method: "Catch on Route 24"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_070.png", name: "Weepinbell" },
          method: "Evolve from Bellsprout at level 21"
        },

        /* --------------------------- Route 5 --------------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_052.png", name: "Meowth" },
          method: "Catch on Route 5"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_053.png", name: "Persian" },
          method: "Evolve from Meowth at level 28"
        },

        /* --------------------------- Vermilion City -------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_083.png", name: "Farfetch'd" },
          method: "Trade Spearow for Farfetch’d in Vermilion City"
        },

        /* --------------------------- Route 11 -------------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_096.png", name: "Drowzee" },
          method: "Catch on Route 11"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_097.png", name: "Hypno" },
          method: "Evolve from Drowzee at level 26"
        },

        /* --------------------------- Diglett Cave ---------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_050.png", name: "Diglett" },
          method: "Catch in Diglett Cave"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_051.png", name: "Dugtrio" },
          method: "Evolve from Diglett at level 26"
        },

        /* --------------------------- Route 2 --------------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_122.png", name: "Mr. Mime" },
          method: "Trade Abra for Mr. Mime (house north of Diglett Cave)"
        }
      ]
    },
    "koga": {
      headerTitle: "Pre Badge #3 - Koga",
      headerImg: "assets/images/Red and Blue/badges/Spr_RG_Koga.png",
      headerImgAlt: "Koga as he appeared in Pokemon Red and Blue",

      summaryShort:
        "Defeat Misty and get that Cascade Badge and the ability to use Cut. Whilst you’re in Cerulean City, exchange the bike voucher for a bike for faster movement whilst grinding. There’s no need to defeat Lt Surge as this only gives you access to Fly so we can skip this gym until it’s time for the Elite Four! There is a LOT open to you at this point before considering another badge and you have almost the entirety of Kanto accessible.",

      summaryHtml: `
        <h5>Route 4/Pewter City</h5>
        <p>
          Go back through Diglett Cave and use Cut on Route 4 to get the HM for Flash and an extra Moon Stone as well as the Old Amber from the side entrance of the Pewter City Museum.
        </p>
        <pre>
          Nidorina/Nidorino/Jigglypuff/Clefairy → Moon  Stone → Nidoqueen/Nidoking/Wigglytuff/Clefable
        </pre>

        <h5>Route 9/Route 10</h5>
        <p>
          East of Cerulean City, cut the tree down and pass through route 9 to go to route 10. The patch of grass by the water contains a new pokemon.
        </p>
        <pre>
          Voltorb → Lv. 30 → Electrode
        </pre>

        <h5>Rock Tunnel</h5>
        <p>
          Flash will be helpful but isn’t essential. In the tunnel you can catch:
        </p>
        <pre>
          Machop → Lv. 28 → Machoke
          Onix
        </pre>

        <h5>Route 8</h5>
        <p>
          Pass through Lavender Town for now and go West to route 8. The only new pokemon here is Vulpix.
        </p>
        <pre>
          Vulpix
        </pre>

        <h5>Celadon City</h5>
        <p>
          Go through the tunnel to Celadon City. Here you can pick up:
        </p>
        <pre>
          Eevee
          Porygon
        </pre>
        <p>
          Eevee can be found in the back entrance of one of the tall buildings. The Game Corner has a few pokemon, some of which will be in the safari zone so we won’t buy them here (they can still be caught before getting the next badge). Porygon is the only one you will have to buy. If you can’t afford it now, come back once you’ve battled every trainer you can in this section to get enough cash to exchange for coins (6500 for Blue, 9999 for Red). Go to Celadon Department Store and buy stones to evolve some of your pokemon:
        </p>
        <pre>
          Pikachu → Thunder Stone → Raichu
          Eevee → Fire/Thunder/Water Stone → Flareon/Jolteon/Vaporeon
          Vulpix → Fire Stone → Ninetales
          Weepinbell → Leaf Stone → Victreebel
        </pre>
        <p>
          From now on, every time you catch a pokemon that needs a stone, come back here to buy one. If you’re feeling flush right now, buy the 3 Water Stones and 1 Leaf Stone now which will cover the rest of the run.
        </p>
        <p>
          While you’re in Celadon, clear out the Rocket Hideout at the Game Corner to obtain the Silph Scope. There is also another Moon Stone here within the hideout for you to evolve your fourth and final evolution with this stone.
        </p>
        <pre>
          Nidorina/Nidorino/Jigglypuff/Clefairy → Moon  Stone → Nidoqueen/Nidoking/Wigglytuff/Clefable
        </pre>

        <h5>Route 16</h5>
        <p>
          Head West to Route 16 and use Cut to access the grass to catch a Doduo. You can also grab the Fly HM whilst here for when you get to the boss rush later on.
        </p>
        <pre>
          Doduo → Lv. 31 → Dodrio
        </pre>

        <h5>Lavender Town</h5>
        <p>
          Return to Lavender Town and rescue Mr. Fuji from Pokemon Tower. With the Silph Scope you can now catch the pokemon here. The healing spot mid way up the tower can make for a nice training spot.
        </p>
        <pre>
          Gastly → Lv. 25 → Haunter
          Cubone → Lv. 28 → Marowak
        </pre>
        <p>
          As a reward for saving Mr. Fuji you’ll get the pokeflute. Head south from Lavender Town and catch Snorlax. Be sure to save the game first as there’s only two chances to catch Snorlax.
        </p>
        <pre>
          Snorlax
        </pre>

        <h5>Route 12</h5>
        <p>
          Continue south past Snorlax and enter the house to get the Super Rod.
        </p>

        <h5>Fuschia City</h5>
        <p>
          Defeat/catch the other Snorlax West of Celadon and go down Cycling Road to get to Fuschia City where you can pick up a Good Rod.
        </p>

        <h5>Fishing Spree and Completing Trades</h5>
        <p>
          Touring through Kanto again with the Good Rod and Super Rod you can catch and evolve a multitude of pokemon:
        </p>
        <pre>
          Shellder → Water Stone → Cloyster (Super Rod – Vermilion City)
          Poliwag → Lv. 25 → Poliwhirl → Water Stone → Poliwrath (Good Rod – Vermilion City)
          Goldeen → Lv. 33 → Seaking (Good Rod – Vermilion City)
          Krabby → Lv. 28 → Kingler (Super Rod – Vermilion City)
          Horsea → Lv. 32 → Seadra  (Super Rod – Route 19)
          Staryu → Water Stone → Starmie (Super Rod – Route 19)
          Psyduck → Lv. 33 → Golduck (Super Rod – Route 24)
          Slowpoke → Lv. 37 → Slowbro (Super Rod – Route 10)
          Tentacool → Lv. 30 → Tentacruel (Super Rod – Viridian City)
        </pre>
        <p>
          Catch an additional Poliwhirl and Slowpoke/Slowbro(or use the Slowbro you’ve evolved) to complete two trades. One in Cerulean City (Poliwhirl for Jynx) and at the gatehouse between Route 18/Fuschia City (Slowbro for Lickitung)
        </p>
        <pre>
          Jynx
          Lickitung
        </pre>

        <h5>Route 14 and 15</h5>
        <p>
          East of Fuschia City on routes 14 and 15 you can find Ditto and Venonat. These are the last standard wild encounters for this portion of the challenge.
        </p>
        <pre>
          Ditto
          Venonat → Lv. 31 → Venomoth
        </pre>

        <h5>Safari Zone</h5>
        <p>
          You may have to go here several times! Pick up the HM for Surf and the Gold Teeth so you can trade for the Strength HM. For catching pokemon, you’ll be obtaining:
        </p>
        <pre>
          Dratini → Lv. 30 → Dragonair → Lv. 55 → Dragonite
          Exeggcute → Leaf Stone → Exeggutor
          Rhyhorn → Lv. 42 → Rhydon
          Chansey
          Pinsir
          Tauros
          Kangaskhan
        </pre>
        <p>
          In any area, fish in the water with the Super Rod for Dratini. The last four in this list will give you a headache… Pinsir is best found in Area 1, Kangaskhan in Area 2, Chansey in Area 3 and Tauros in Area 4. All have a 4% encounter rate in those areas and also have low capture rates which may really frustrate you! If you save the game whilst in the Safari Zone you can simply soft reset (A+B+Start+Select) if your run wasn’t fruitful. This will save on some money from entering multiple times.
        </p>

        <h5>Saffron City</h5>
        <p>
          You can beat the Dojo and get either Hitmonlee or Hitmonchan as your reward.
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
          Getting that Dragonite will certainly be a difficult task. Consider teaching it Surf to avoid wasting a TM. Trying to keep as many trainers from battling you is a great idea. The two Rocket areas (Game Corner and Silph Co) can be great for lots of battles. The move Wrap in Gen 1 means the enemy can’t attack, so it’s certainly helpful since Dratini has terrible levelling up moves. There’s also no real reason to keep it unevolved to learn moves quicker, Dragon Rage isn’t much help at this stage in the game. For general grinding, the areas to the East and West of Fuschia City give the highest exp.
        </p>

        <p>
          <strong>End of part 3:</strong><br/>
          Caught 105, Remaining 46
        </p>
        <p class="tips-source">
        <a href="https://docs.google.com/document/d/1gmp-piwpfUUyxnWULjQtB2m2lzWeYc-wwsXnnbyp_RY/edit?tab=t.0#heading=h.gjdgxs" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
`,
      summaryOpen: false,

      rows: [
        /* --------------------------- Eeveelution Rows ---------------------------- */
        {
          type: "choice",
          choiceKey: "eeveelution",
          choiceValue: "flareon",
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_136.png", name: "Flareon" },
          method: "Pick this Eeveelution to show the Flareon line"
        },
        {
          type: "choice",
          choiceKey: "eeveelution",
          choiceValue: "jolteon",
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_135.png", name: "Jolteon" },
          method: "Pick this Eeveelution to show the Jolteon line"
        },
        {
          type: "choice",
          choiceKey: "eeveelution",
          choiceValue: "vaporeon",
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_134.png", name: "Vaporeon" },
          method: "Pick this Eeveelution to show the Vaporeon line"
        },

        /* --------------------------- Dojo Choice Rows ---------------------------- */
        {
          type: "choice",
          choiceKey: "dojo",
          choiceValue: "hitmonlee",
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_106.png", name: "Hitmonlee" },
          method: "Pick this Hitmon to show the Hitmonlee line"
        },
        {
          type: "choice",
          choiceKey: "dojo",
          choiceValue: "hitmonchan",
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_107.png", name: "Hitmonchan" },
          method: "Pick this Hitmon to show the Hitmonchan line"
        },

        /* --------------------------- Route 4 / Pewter City ------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_031.png", name: "Nidoqueen" },
          method: "Use a Moon Stone on Nidorina"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_034.png", name: "Nidoking" },
          method: "Use a Moon Stone on Nidorino"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_040.png", name: "Wigglytuff" },
          method: "Use a Moon Stone on Jigglypuff"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_036.png", name: "Clefable" },
          method: "Use a Moon Stone on Clefairy"
        },

        /* --------------------------- Route 9 / Route 10 ---------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_100.png", name: "Voltorb" },
          method: "Catch on Route 10"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_101.png", name: "Electrode" },
          method: "Evolve from Voltorb at level 30"
        },

        /* --------------------------- Rock Tunnel ----------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_066.png", name: "Machop" },
          method: "Catch in Rock Tunnel"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_067.png", name: "Machoke" },
          method: "Evolve from Machop at level 28"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_095.png", name: "Onix" },
          method: "Catch in Rock Tunnel"
        },

        /* --------------------------- Route 8 --------------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_037.png", name: "Vulpix" },
          method: "Catch on Route 8"
        },

        /* --------------------------- Celadon City ---------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_133.png", name: "Eevee" },
          method: "Celadon City"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_137.png", name: "Porygon" },
          method: "Celadon Game Corner"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_026.png", name: "Raichu" },
          method: "Use a Thunder Stone on Pikachu"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_136.png", name: "Flareon" },
          method: "Use a Fire Stone on Eevee",
          requires: { eeveelution: "flareon" }
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_135.png", name: "Jolteon" },
          method: "Use a Thunder Stone on Eevee",
          requires: { eeveelution: "jolteon" }
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_134.png", name: "Vaporeon" },
          method: "Use a Water Stone on Eevee",
          requires: { eeveelution: "vaporeon" }
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_038.png", name: "Ninetales" },
          method: "Use a Fire Stone on Vulpix"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_071.png", name: "Victreebel" },
          method: "Use a Leaf Stone on Weepinbell"
        },

        /* --------------------------- Celadon (Hideout Moon Stone) ------------ */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_031.png", name: "Nidoqueen" },
          method: "Use a Moon Stone on Nidorina (Rocket Hideout Moon Stone)"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_034.png", name: "Nidoking" },
          method: "Use a Moon Stone on Nidorino (Rocket Hideout Moon Stone)"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_040.png", name: "Wigglytuff" },
          method: "Use a Moon Stone on Jigglypuff (Rocket Hideout Moon Stone)"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_036.png", name: "Clefable" },
          method: "Use a Moon Stone on Clefairy (Rocket Hideout Moon Stone)"
        },

        /* --------------------------- Route 16 -------------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_084.png", name: "Doduo" },
          method: "Catch on Route 16"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_085.png", name: "Dodrio" },
          method: "Evolve from Doduo at level 31"
        },

        /* --------------------------- Lavender Town (Pokémon Tower) ----------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_092.png", name: "Gastly" },
          method: "Catch in Pokémon Tower"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_093.png", name: "Haunter" },
          method: "Evolve from Gastly at level 25"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_104.png", name: "Cubone" },
          method: "Catch in Pokémon Tower"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_105.png", name: "Marowak" },
          method: "Evolve from Cubone at level 28"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_143.png", name: "Snorlax" },
          method: "Route 12 / Route 16 Snorlax encounter"
        },

        /* --------------------------- Fishing Spree & Trades ------------------ */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_090.png", name: "Shellder" },
          method: "Super Rod — Vermilion City"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_091.png", name: "Cloyster" },
          method: "Use a Water Stone on Shellder"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_060.png", name: "Poliwag" },
          method: "Good Rod — Vermilion City"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_061.png", name: "Poliwhirl" },
          method: "Evolve from Poliwag at level 25"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_062.png", name: "Poliwrath" },
          method: "Use a Water Stone on Poliwhirl"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_118.png", name: "Goldeen" },
          method: "Good Rod — Vermilion City"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_119.png", name: "Seaking" },
          method: "Evolve from Goldeen at level 33"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_098.png", name: "Krabby" },
          method: "Super Rod — Vermilion City"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_099.png", name: "Kingler" },
          method: "Evolve from Krabby at level 28"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_116.png", name: "Horsea" },
          method: "Super Rod — Route 19"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_117.png", name: "Seadra" },
          method: "Evolve from Horsea at level 32"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_120.png", name: "Staryu" },
          method: "Super Rod — Route 19"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_121.png", name: "Starmie" },
          method: "Use a Water Stone on Staryu"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_054.png", name: "Psyduck" },
          method: "Super Rod — Route 24"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_055.png", name: "Golduck" },
          method: "Evolve from Psyduck at level 33"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_079.png", name: "Slowpoke" },
          method: "Super Rod — Route 10"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_080.png", name: "Slowbro" },
          method: "Evolve from Slowpoke at level 37"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_072.png", name: "Tentacool" },
          method: "Super Rod — Viridian City"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_073.png", name: "Tentacruel" },
          method: "Evolve from Tentacool at level 30"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_124.png", name: "Jynx" },
          method: "Trade (Cerulean City): Poliwhirl → Jynx"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_108.png", name: "Lickitung" },
          method: "Trade (Route 18 gatehouse): Slowbro → Lickitung"
        },

        /* --------------------------- Route 14 / Route 15 --------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_132.png", name: "Ditto" },
          method: "Catch on Routes 14–15"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_048.png", name: "Venonat" },
          method: "Catch on Routes 14–15"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_049.png", name: "Venomoth" },
          method: "Evolve from Venonat at level 31"
        },

        /* --------------------------- Safari Zone ----------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_147.png", name: "Dratini" },
          method: "Safari Zone (fish with Super Rod)"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_148.png", name: "Dragonair" },
          method: "Evolve from Dratini at level 30"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_149.png", name: "Dragonite" },
          method: "Evolve from Dragonair at level 55"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_102.png", name: "Exeggcute" },
          method: "Safari Zone"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_103.png", name: "Exeggutor" },
          method: "Use a Leaf Stone on Exeggcute"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_111.png", name: "Rhyhorn" },
          method: "Safari Zone"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_112.png", name: "Rhydon" },
          method: "Evolve from Rhyhorn at level 42"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_113.png", name: "Chansey" },
          method: "Safari Zone"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_127.png", name: "Pinsir" },
          method: "Safari Zone"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_128.png", name: "Tauros" },
          method: "Safari Zone"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_115.png", name: "Kangaskhan" },
          method: "Safari Zone"
        },

        /* --------------------------- Saffron City ---------------------------- */
        /* --------------------------- Dojo Requires Rows -------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_106.png", name: "Hitmonlee" },
          method: "Fighting Dojo (choose one)",
          requires: { dojo: "hitmonlee" }
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_107.png", name: "Hitmonchan" },
          method: "Fighting Dojo (choose one)",
          requires: { dojo: "hitmonchan" }
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_131.png", name: "Lapras" },
          method: "Silph Co. (gift from employee)"
        }
      ]
    },
    "erika": {
      headerTitle: "Pre Badge #4 - Erika",
      headerImg: "assets/images/Red and Blue/badges/Spr_RG_Erika.png",
      headerImgAlt: "Erika as she appeared in Pokemon Red and Blue",

      summaryShort:
        "You can pick between Lt. Surge, Sabrina, Koga and Erika at this point. The former two won’t unlock any useful HMs while the latter do. However, Erika’s Strength won’t actually be used anywhere without Surf, which is why Koga is your next badge. ",

      summaryHtml: `
        <h5>Power Plant</h5>
        <p>
          Surf to the Power Plant where you can catch a few electric types and a Red version exclusive:
        </p>
        <pre>
          Magnemite → Lv. 30 → Magneton
          Zapdos
        </pre>
        <p>
          Yes, you are really catching a legendary pokemon with only three badges :)
        </p>

        <h5>Pallet Town</h5>
        <p>
          The patch of grass south of Pallet Town can now be reached with Surf where you’ll catch Tangela.
        </p>
        <pre>
          Tangela
        </pre>

        <h5>Cinnabar Island</h5>
        <p>
          You can finally Surf to Cinnabar Island. Visit the lab to revive the fossil from Mt Moon and the Old Amber from Pewter City.
        </p>
        <pre>
          Aerodactyl
          Kabuto/Omanyte → Lv. 40 → Kabutops/Omastar
        </pre>
        <p>
          In Pokemon Mansion, there are a few new pokemon running around. For Blue players, Magmar is found in the basement. Also grab the key to the gym while you’re here.
        </p>
        <pre>
          Koffing → Lv. 35 → Weezing
          Grimer → Lv. 38 → Muk
          Ponyta → Lv. 40 → Rapidash
          Magmar
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
          Caught 121, Remaining 30
        </p>
        <p class="tips-source">
        <a href="https://docs.google.com/document/d/1gmp-piwpfUUyxnWULjQtB2m2lzWeYc-wwsXnnbyp_RY/edit?tab=t.0#heading=h.gjdgxs" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
`,
      summaryOpen: false,

      rows: [
        /* --------------------------- Power Plant ----------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_081.png", name: "Magnemite" },
          method: "Power Plant"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_082.png", name: "Magneton" },
          method: "Evolve from Magnemite at level 30"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_145.png", name: "Zapdos" },
          method: "Power Plant"
        },

        /* --------------------------- Pallet Town ----------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_114.png", name: "Tangela" },
          method: "Pallet Town (south grass via Surf)"
        },

        /* --------------------------- Cinnabar Island ------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_142.png", name: "Aerodactyl" },
          method: "Revive Old Amber (Cinnabar Lab)"
        },

        /* --------------------------- Fossil Requires Rows -------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_140.png", name: "Kabuto" },
          method: "Revive Dome Fossil (Cinnabar Lab)",
          requires: { fossil: "dome" }
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_141.png", name: "Kabutops" },
          method: "Evolve from Kabuto at level 40",
          requires: { fossil: "dome" }
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_138.png", name: "Omanyte" },
          method: "Revive Helix Fossil (Cinnabar Lab)",
          requires: { fossil: "helix" }
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_139.png", name: "Omastar" },
          method: "Evolve from Omanyte at level 40",
          requires: { fossil: "helix" }
        },
        /* --------------------------- Pokémon Mansion ------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_109.png", name: "Koffing" },
          method: "Pokémon Mansion"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_110.png", name: "Weezing" },
          method: "Evolve from Koffing at level 35"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_088.png", name: "Grimer" },
          method: "Pokémon Mansion"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_089.png", name: "Muk" },
          method: "Evolve from Grimer at level 38"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_077.png", name: "Ponyta" },
          method: "Pokémon Mansion"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_078.png", name: "Rapidash" },
          method: "Evolve from Ponyta at level 40"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_126.png", name: "Magmar" },
          method: "Pokémon Mansion"
        },

        /* --------------------------- Seafoam Island -------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_086.png", name: "Seel" },
          method: "Seafoam Island"
        },
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_087.png", name: "Dewgong" },
          method: "Evolve from Seel at level 34"
        }
      ]
    },
    "5-8": {
      headerTitle: "Pre Badges #5-8 - Giovanni",
      headerImg: "assets/images/Red and Blue/badges/Spr_RG_Giovanni.png",
      headerImgAlt: "Giovanni as he appeared in Pokemon Red and Blue",

      summaryShort:
        "Defeating Erika gives you Strength which you can now use to catch ONE pokemon! No other badges by themselves give any benefits of new pokemon.",

      summaryHtml: `
        <h5>Seafoam Island Revisited</h5>
        <p>
          Solve the puzzles with the boulders to slow down the current and you can reach the area with Articuno and catch your second legendary.
        </p>
        <pre>
          Articuno
        </pre>

        <p>
          <strong>End of part 5:</strong><br/>
          Caught 122, Remaining 29
        </p>
        <p class="tips-source">
        <a href="https://docs.google.com/document/d/1gmp-piwpfUUyxnWULjQtB2m2lzWeYc-wwsXnnbyp_RY/edit?tab=t.0#heading=h.gjdgxs" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
`,
      summaryOpen: true,

      rows: [
        /* --------------------------- Seafoam Island Revisited --------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_144.png", name: "Articuno" },
          method: "Seafoam Islands (boulder puzzles to reach)"
        }
      ]
    },
    "E4": {
      headerTitle: "Pre Elite Four",
      headerImg: "assets/images/Red and Blue/badges/Spr_RG_Lance.png",
      headerImgAlt: "Lance as he appeared in Pokemon Red and Blue",

      summaryShort:
        "Since there’s only one pokemon left to catch before the Elite Four, your Pokemon League challenge can continue in full swing. Defeat Lt Surge, Sabrina, Blaine and Giovanni for the last badges and then head up to Victory Road.",

      summaryHtml: `
        <p>
          On the way through the cave you’ll find your third legendary bird, Moltres.
        </p>
        <pre>
          Moltres
        </pre>

        <p>
          <strong>End of part 6:</strong><br/>
          Caught 123, Remaining 28
        </p>
        <p class="tips-source">
        <a href="https://docs.google.com/document/d/1gmp-piwpfUUyxnWULjQtB2m2lzWeYc-wwsXnnbyp_RY/edit?tab=t.0#heading=h.gjdgxs" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
`,
      summaryOpen: true,

      rows: [
        /* --------------------------- Victory Road / Cave Path --------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_146.png", name: "Moltres" },
          method: "Victory Road"
        }
      ]
    },
    "PG": {
      headerTitle: "Post Game",
      headerImg: "assets/images/Red and Blue/badges/180px-RG_Pokédex.png",
      headerImgAlt: "The Kanto Pokédex Pokemon Red and Green",

      summaryShort:
        "March up to the pokemon league and kick the Elite Four’s butts. You’re now the Champion! But there’s still one final challenge left… ",

      summaryHtml: `
        <h5>Cerulean Cave</h5>
        <p>
          Before you go on this next trip, make sure your current PC box has space! Leave Cerulean City from the north exit, cross Nugget Bridge and then Surf along the river to reach Cerulean Cave. Deep inside you’ll find the 150th pokemon, Mewtwo. Throw that Master Ball! Or if you want to do it legitimately, Mewtwo is Lv. 70 so bring your best ‘mons.
        </p>
        <pre>
          Mewtwo
        </pre>

        <p>
          And with that, the challenge is complete!
        </p>

        <p>
          <strong>End of the challenge:</strong><br/>
          Caught 124, Remaining 27
        </p>
        <p class="tips-source">
        <a href="https://docs.google.com/document/d/1gmp-piwpfUUyxnWULjQtB2m2lzWeYc-wwsXnnbyp_RY/edit?tab=t.0#heading=h.gjdgxs" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>
`,

      summaryOpen: true,

      rows: [
        /* --------------------------- Cerulean Cave --------------------------- */
        {
          pokemon: { img: "assets/images/Red and Blue/pokedex/Spr_1b_150.png", name: "Mewtwo" },
          method: "Cerulean Cave"
        }
      ]
    }
  }
};
