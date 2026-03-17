# Adding a New Game to the Oak Challenge Tracker

This document explains how to add a **new game** to the Oak Challenge Tracker. It covers updating the game manifest, creating the game’s HTML entry page, establishing conventions for images and data, and authoring the game’s `progression.js` file.

All progression data is based on the **Professor Oak Challenge** guides written by **u/mewlax84**:

- Author: <https://www.reddit.com/user/mewlax84/>
- Guide collection: <https://www.reddit.com/r/ProfessorOak/comments/bj6yeh/professor_oak_challenge_guides/>

The examples below consistently use **Pokémon Blue** so the structure and relationships are easy to follow.

---

## 1) Registering the Game in `manifest.games.json`

All games are discovered via `manifest.games.json`. To add a new game, append a new object using the **full schema** shown below.

### Example entry (Pokémon Blue)

```json
{
  "id": "blue",
  "name": "Pokémon Blue",
  "region": "Kanto",
  "gen": "Gen 1",
  "notes": "Paired version to Red.",
  "cover": "assets/images/covers/blue.png",
  "href": "pages/tracker/blue.html",
  "available": false
}
```

### Field definitions

- **`id`**  
  A unique, URL‑safe identifier. This must match:
  - the folder name under `data/blue/`
  - the `gameId` value inside `progression.js`

- **`name`**  
  The display name shown on the landing page.

- **`region`**  
  The Pokémon region (e.g. `Kanto`, `Johto`, `Hoenn`).

- **`gen`**  
  The generation label (e.g. `Gen 1`, `Gen 3`).

- **`notes`**  
  Optional descriptive text shown on the landing page.

- **`cover`**  
  Absolute path to the cover image used on the landing page.

- **`href`**  
  Path to the HTML entry page for the game.

- **`available`**  
  Controls whether the game is selectable.
  - `false` = visible but disabled
  - `true` = playable

---

## 2) Creating the Game HTML Entry Page

Each game has its own static HTML entry page. This page loads the tracker UI and the game’s data file.

### Requirements

- CSP‑safe: **no inline scripts or styles**
- Load order matters: `progression.js` **must be last**
- Structure should match existing tracker pages
- Do not forget the base href tag or your references WILL NOT WORK

### Minimal example (`pages/tracker/blue.html`)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <base href="/OakChallenge/" />
    <title>Pokémon Blue – Oak Challenge Tracker</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    assets/css/tracker.css
  </head>
  <body>
    <header id="site-header-host"></header>

    <main class="page-band">
      <section class="container">
        <h1 id="game-title"></h1>
        <div id="choice-status" class="choice-status"></div>

        <div class="table-wrap">
          <table id="pokemon-table">
            <thead>
              <tr>
                <th>Pokémon</th>
                <th>Method</th>
                <th class="center">Caught</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        <div class="footer-actions">
          <button id="reset-all" class="reset-btn">Reset All</button>
        </div>
      </section>
    </main>

    <footer id="site-footer-host"></footer>

    assets/js/site-theme.js</script>
    assets/js/site-chrome.js</script>
    assets/js/oak-tracker.js</script>
    data/blue/progression.js</script>
  </body>
</html>
```

---

## 3) Image and File Conventions

### 3.1 Cover images

- Used on the landing page
- Stored at:  
  ```
  assets/images/covers/blue.png
  ```

### 3.2 Logos

- Used in the tracker header
- Stored at:  
  ```
  assets/images/logos/blue.png
  ```

### 3.3 Sprites

- Store sprites under a logical folder, for example:
  ```
  assets/images/FRLG/
  ```
- Reference sprites using **absolute paths**
- If a sprite is missing, use:
  ```js
  img: "link"
  ```
  This will fall back to the placeholder sprite.

---

## 4) Structure of `progression.js`

Each game defines **exactly one** global object:

```js
window.gameData = {
  gameId: "blue",
  gameTitle: "Pokémon Blue",
  logo: "assets/images/logos/blue.png",

  aboutHtml: `
    <section class="game-intro-content">
      <p>This tracker follows the Professor Oak Challenge rules.</p>
      <p class="tips-source">
        https://www.reddit.com/r/ProfessorOak/comments/bj6yeh/professor_oak_challenge_guides/
          Source: u/mewlax84 – Professor Oak Challenge Guides
        </a>
      </p>
    </section>
  `,

  progression: {
    "Pre Badge 1: Brock": { /* group */ },
    "Pre Badge 2: Misty": { /* group */ },
    "Post Game": { /* group */ }
  }
};
```

Groups are rendered **in insertion order**.

---

## 5) Progression Groups and Rows (with Gated Choice Results)

Each progression group represents a phase of the game.

### Example: Pre Badge 1 (Starter choice with gated evolutions)

```js
"Pre Badge 1: Brock": {
  headerTitle: "Pre Badge 1: Brock",

  summaryShort: "Everything available before Brock.",
  summaryHtml: `
    <h5>Pallet Town</h5>
    <p>Choose a starter and complete its evolution line.</p>
    <pre>
      Bulbasaur → Ivysaur → Venusaur
      Charmander → Charmeleon → Charizard
      Squirtle → Wartortle → Blastoise
    </pre>
  `,

  rows: [
    /* ---- Choice rows (must come first) ---- */
    {
      type: "choice",
      choiceKey: "starter",
      choiceValue: "bulbasaur",
      pokemon: { img: "assets/images/FRLG/Spr_3f_001.png", name: "Bulbasaur" },
      method: "Choose as starter"
    },
    {
      type: "choice",
      choiceKey: "starter",
      choiceValue: "charmander",
      pokemon: { img: "assets/images/FRLG/Spr_3f_004.png", name: "Charmander" },
      method: "Choose as starter"
    },
    {
      type: "choice",
      choiceKey: "starter",
      choiceValue: "squirtle",
      pokemon: { img: "assets/images/FRLG/Spr_3f_007.png", name: "Squirtle" },
      method: "Choose as starter"
    },

    /* ---- Gated results (only one line appears) ---- */
    {
      pokemon: { img: "assets/images/FRLG/Spr_3f_002.png", name: "Ivysaur" },
      method: "Evolve Bulbasaur at Lv. 16",
      requires: { starter: "bulbasaur" }
    },
    {
      pokemon: { img: "assets/images/FRLG/Spr_3f_003.png", name: "Venusaur" },
      method: "Evolve Ivysaur at Lv. 32",
      requires: { starter: "bulbasaur" }
    },

    {
      pokemon: { img: "assets/images/FRLG/Spr_3f_005.png", name: "Charmeleon" },
      method: "Evolve Charmander at Lv. 16",
      requires: { starter: "charmander" }
    },
    {
      pokemon: { img: "assets/images/FRLG/Spr_3f_006.png", name: "Charizard" },
      method: "Evolve Charmeleon at Lv. 36",
      requires: { starter: "charmander" }
    },

    {
      pokemon: { img: "assets/images/FRLG/Spr_3f_008.png", name: "Wartortle" },
      method: "Evolve Squirtle at Lv. 16",
      requires: { starter: "squirtle" }
    },
    {
      pokemon: { img: "assets/images/FRLG/Spr_3f_009.png", name: "Blastoise" },
      method: "Evolve Wartortle at Lv. 36",
      requires: { starter: "squirtle" }
    },
      /* ---- Non-gated Pokémon (always shown) ---- */
	{
	  pokemon: { img: "assets/images/FRLG/Spr_3f_016.png", name: "Pidgey" },
	  method: "Catch on Route 1"
	},
	{
	  pokemon: { img: "assets/images/FRLG/Spr_3f_017.png", name: "Pidgeotto" },
	  method: "Evolve Pidgey at Lv. 18"
	},
	{
	  pokemon: { img: "assets/images/FRLG/Spr_3f_018.png", name: "Pidgeot" },
	  method: "Evolve Pidgeotto at Lv. 36"
	}
  ]
}
```

### Rules demonstrated

- **Choice rows always come first**
- All choice rows share the same `choiceKey`
- `choiceValue` must be lowercase
- Gated rows use `requires` to reference the chosen value
- Only rows matching the selected choice are rendered
- Row order matches the narrative order in `summaryHtml`

---

## 6) Final Checklist

Before marking a game as available:

- `manifest.games.json` entry is complete and accurate  
- HTML entry page exists and loads scripts in the correct order  
- Cover and logo images are present and correctly pathed  
- `progression.js`:
  - uses **HTML only** in summaries
  - places **choice rows first**
  - uses **lowercase choice values**
  - includes **gated rows** where applicable
  - does **not** include `caught` in row data  
- Local testing confirms:
  - choices gate rows correctly
  - caught toggles work in list and grid views
  - progress bars update as expected  

Once these conditions are met, the game integrates cleanly with the tracker and behaves consistently with existing entries.
