# New Page Setup Guide (HTML + Asset Structure)

This guide explains how to set up a new game page using the reactive table engine, including file structure, HTML skeleton, and script ordering.

---

## 1) Recommended Project Structure

```
/your-project/
  index.html               # Optional landing page
  style.css                # Shared styles
  script.js                # Reactive engine (shared)
  /images/                 # All Pokémon assets + icons
    bulbasaur.png
    pokeball.png
    pokeball_dark.png
    placeholder.png
  /subpages/
    firered.html           # Specific game page
    firered-data.js        # Data file providing `gameData`
    <another-game>.html
    <another-game>-data.js
```

> Paths in `firered-data.js` are relative to **`firered.html`**. From `/subpages/` to `/images/` is `../images/...`.

---

## 2) HTML Skeleton (copy & adapt)

Create `/subpages/firered.html`:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Pokémon FireRed</title>
  <link rel="stylesheet" href="../style.css" />
</head>
<body>
  <div class="container">
    <h1 id="game-title"></h1>
    <div id="choice-status" class="choice-status"></div>
  </div>

  <div class="table-wrap">
    <table id="pokemon-table" aria-label="Pokémon capture status">
      <thead>
        <tr>
          <th>Pokémon</th>
          <th>Method</th>
          <th class="center">Action / Caught</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>

  <div class="footer-actions">
    <button id="reset-all" type="button" class="reset-btn">Reset all progress</button>
  </div>

  <!-- Load data first, then engine -->
  <script src="./firered-data.js"></script>
  <script src="../script.js"></script>
</body>
</html>
```

### Key points
- Load the **data file first** so `gameData` exists before `script.js` runs.
- `script.js` attaches its boot routine on `DOMContentLoaded` and reads `gameData`.
- Keep IDs: `game-title`, `choice-status`, `pokemon-table`, `reset-all`.

---

## 3) CSS Hooks You’ll Likely Need

Add (or verify) these classes in `style.css` to match the engine’s DOM:

```css
/* Row states */
tr.section-header {}
tr.section-summary {}
tr.section-progress {}
tr.row-choice {}
tr.row-normal {}
tr.row-normal.caught-true { background: #ecffec; }

/* Pokémon cell */
.pkm { display: flex; align-items: center; gap: 8px; }
.pkm img { width: 28px; height: 28px; image-rendering: pixelated; }

/* Buttons */
.choice-btn, .catch-btn, .reset-btn { cursor: pointer; }
.center { text-align: center; }

/* Chips */
.choice-status { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; }
.chip { display: inline-flex; gap: 6px; align-items: center; padding: 4px 8px; border-radius: 12px; background: #f1f1f1; }

/* Animations (rows) */
tr.fade-in { opacity: 0; transform: translateY(-4px); animation: rowFadeIn 160ms ease-out forwards; }
@keyframes rowFadeIn { to { opacity: 1; transform: translateY(0); } }
tr.fade-out { opacity: 1; transform: translateY(0); animation: rowFadeOut 160ms ease-in forwards; }
@keyframes rowFadeOut { to { opacity: 0; transform: translateY(-4px); } }

/* Progress bar */
.progress-row { padding: 0; }
.progress-bar { position: relative; width: 100%; height: 14px; background: #e3e3e3; border-radius: 8px; overflow: hidden; margin-top: 4px; }
.progress-fill { height: 100%; background: #4caf50; width: 0%; transition: width 400ms ease-in-out; }
.progress-label { font-size: 12px; text-align: right; margin-top: 4px; color: #3c3c3c; }
```

---

## 4) Engine Expectations & Behavior

- **Order preserved:** Rows render in the order listed in your data file.
- **Choices:** All `choice` rows are shown until **every** unique `choiceKey` in that group has a selection. After that, choice rows hide.
- **Gated rows:** Shown when their `requires` object matches the user’s current choices.
- **Progress bar:** Renders **at the bottom** of each group **only when all choices are made** for that group, and animates its fill as caught changes.
- **Persistence:** Choices and caught flags are saved in `localStorage` with keys namespaced by `gameId`.

---

## 5) Common Pitfalls

1. **Wrong script order** – Always include `*-data.js` before `script.js`.
2. **Bad paths** – From `/subpages/` to `/images/` is `../images/...`.
3. **Missing IDs** – The engine queries `#game-title`, `#choice-status`, `#pokemon-table tbody`, `#reset-all`.
4. **CSP blocks inline/eval** – Keep scripts in external files; avoid inline `<script>` with code if your server enforces strict CSP.
5. **Caching** – Use a hard reload (Ctrl/Cmd+Shift+R) during dev or append a version query: `script.js?v=3`.

---

## 6) Run a Simple Local Server (optional)

From the project root:

```bash
# Python 3
python -m http.server 8080
# or
py -3 -m http.server 8080
```

Then open: `http://localhost:8080/subpages/firered.html`

---

## 7) Creating a New Game Page

1. Duplicate `firered-data.js` → rename to `<new>-data.js` and edit `gameId`, `gameTitle`, and groups/rows.
2. Duplicate `firered.html` → rename to `<new>.html` and update the `<script src="./<new>-data.js">`.
3. Keep `../script.js` as-is if you’re sharing the engine across games.
4. Drop new images into `/images/` and reference them from the new `*-data.js`.

You’re done. Open the new page via your local server and verify choices, gating, and progress behavior.
