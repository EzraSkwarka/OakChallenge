# Oak Challenge Tracker

A static, CSP-safe web application for tracking progress through the
**Professor Oak Challenge** across multiple Pokémon games.

Each game is defined entirely by data, allowing new titles to be added
without modifying application logic. The project uses plain HTML, CSS,
and JavaScript.

---

## What This Is

The Oak Challenge Tracker allows players to:

- Track all obtainable Pokémon before each badge
- Handle choice-based progression (starters, fossils, dojo rewards, roaming legendaries)
- Persist progress locally between sessions
- View progress in both list and grid layouts

All progression content is declarative and lives in per-game data files.

---

## Guide Attribution

Progression ordering and availability are based on the
**Professor Oak Challenge** guides written by **u/mewlax84**:

- https://www.reddit.com/user/mewlax84/
- https://www.reddit.com/r/ProfessorOak/comments/bj6yeh/professor_oak_challenge_guides/

---

## Running Locally

```powershell
.\\serve.ps1
```

Then open:

```
http://localhost:8000/
```

---

## Adding Games

If you want to add a new game to the tracker, see:

**`CONTRIBUTING.md`**

---

## License

This project is licensed under the MIT License.

Pokémon and related media are © Nintendo / Creatures Inc. / GAME FREAK inc.
This is a fan project for informational and organizational purposes only.

---

## Credits

- **Professor Oak Challenge Guides**  
  u/mewlax84  
  https://www.reddit.com/user/mewlax84/  
  https://www.reddit.com/r/ProfessorOak/comments/bj6yeh/professor_oak_challenge_guides/

- **Fonts**  
  Some fonts used by the site are sourced from:  
  https://pokemondungeon.com/media-downloads/fonts/

  **Insporation**
  I stumbled upon this repo trying to do something similar but as best i can tell its abandoned
  https://github.com/PYR0M4NC3R/oak-challenge
