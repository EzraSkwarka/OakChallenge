# Oak Challenge Tracker

A static, CSP-safe web application for tracking progress through the **Professor Oak Challenge** across multiple Pokémon games. Each game is defined entirely by data, allowing new titles to be added without modifying application logic.

This project uses **plain HTML, CSS, and JavaScript**—no frameworks, no build step, and no inline scripts or styles.

---

## What This Project Does

The Oak Challenge Tracker provides:

- A landing page that lists supported games and routes to individual trackers
- A per-game tracker that shows all obtainable Pokémon before each badge
- Choice-based progression (starters, fossils, dojo rewards, roaming legendaries, etc.)
- Persistent tracking of caught Pokémon and player choices
- Both list and grid views backed by the same data model

All progression content is declarative and lives in per-game data files.

---

## Guide Attribution

Progression data and ordering are based on the **Professor Oak Challenge** guides written by **u/mewlax84**:

- Author: https://www.reddit.com/user/mewlax84/
- Guide collection: https://www.reddit.com/r/ProfessorOak/comments/bj6yeh/professor_oak_challenge_guides/

---

## Repository Structure

```
assets/
  css/
    landing.css
    tracker.css
  images/
    covers/
    logos/
    FRLG/
  js/
    landing.js
    oak-tracker.js
    site-chrome.js
    site-theme.js
    sticky-header.js

data/
  manifest.games.json
  <game-id>/
    progression.js

pages/
  tracker/
    <game-id>.html

docs/
  ADDING_A_NEW_GAME.md

serve.ps1
README.md
```

---

## Architecture Overview

### Landing Page
- Driven by `manifest.games.json`
- Renders a grid of games with search and filtering
- Routes to per-game tracker pages

### Per-Game Tracker
- A static HTML page that loads:
  - shared site chrome
  - theme manager
  - core tracker logic
  - a game-specific `progression.js` file

### Data-Driven Design
- All game content is defined in `progression.js`
- No game-specific logic exists in application code
- Choices and caught state are persisted per game using `localStorage`

### Security Model
- Strict Content Security Policy
- No inline scripts or styles
- No `eval`, `Function`, or dynamic code generation

---

## Local Development

### Requirements
- Windows PowerShell 5.1 or PowerShell 7+
- No external dependencies

### Start the Local Server

```powershell
.\serve.ps1
```

If you encounter a listener permission error, run once as Administrator:

```powershell
netsh http add urlacl url=http://localhost:8000/ user=$env:USERNAME
```

Then open:

```
http://localhost:8000/
```

The local server mirrors production behavior with correct MIME types and a strict CSP.

---

## Adding a New Game

See **`ADDING_A_NEW_GAME.md`** for full documentation on:

- Updating `manifest.games.json`
- Creating a per-game HTML entry page
- Image and sprite conventions
- Building `progression.js`, including:
  - choice rows
  - gated rows
  - non-gated rows
  - ordering rules that match the written summary

---

## Data and Assets

### Covers
Used on the landing page:

```
/assets/images/covers/<game-id>.png
```

### Logos
Used in the tracker header:

```
/assets/images/logos/<game-id>.png
```

### Sprites
Organized by game family (for example):

```
/assets/images/FRLG/
```

Sprite paths referenced in data files are always absolute. If a sprite is not available, `img: "link"` may be used to fall back to a placeholder.

### Fonts
Some fonts used by the site are sourced from:

https://pokemondungeon.com/media-downloads/fonts/

---

## Accessibility & Browser Support

- Full keyboard navigation on landing and tracker pages
- Visible focus states for interactive elements
- Lazy-loaded images where applicable
- Tested in modern Chromium-based browsers, Firefox, and Safari

---

## Contributing

- Keep all scripts and styles CSP-safe
- Preserve section-header comments in CSS and JavaScript files
- Avoid inline explanatory comments; favor clear structure
- Use consistent lowercase slugs for choice values and requirements
- Keep row ordering aligned with the summary narrative

---

## License

Source code is provided under the repository’s license (see `LICENSE` if present).

This license applies to the project’s source code only and does not grant rights to Pokémon names, images, or other copyrighted materials owned by their respective holders.”

Pokémon and related media are © Nintendo / Creatures Inc. / GAME FREAK inc. This is a fan project for informational and organizational purposes only.

---

## Credits

- **Professor Oak Challenge Guides**  
  u/mewlax84  
  https://www.reddit.com/user/mewlax84/  
  https://www.reddit.com/r/ProfessorOak/comments/bj6yeh/professor_oak_challenge_guides/

- **Fonts**  
  Pokémon Dungeon media downloads  
  https://pokemondungeon.com/media-downloads/fonts/
