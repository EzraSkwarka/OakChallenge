# Contributing to Oak Challenge Tracker

This document describes how to extend the Oak Challenge Tracker.
It is intended for maintainers and contributors, not end users.

---

## Design Principles

- All game content is data-driven
- Adding a game must not require changes to application logic
- All files must remain CSP-safe
- Code should be readable without inline commentary

---

## Adding a New Game

Each game consists of:

1. A manifest entry (`data/manifest.games.json`)
2. A static HTML entry page (`pages/tracker/<game-id>.html`)
3. A data file (`data/<game-id>/progression.js`)

No other files should be modified when adding a game.

---

## Manifest Entry

```json
{
  "id": "blue",
  "name": "Pokémon Blue",
  "region": "Kanto",
  "gen": "Gen 1",
  "notes": "Paired version to Red.",
  "cover": "/assets/images/covers/blue.png",
  "href": "/pages/tracker/blue.html",
  "available": true
}
```

---

## progression.js Structure

Each game defines a single global object:

```js
window.gameData = {
  gameId,
  gameTitle,
  logo,
  aboutHtml,
  progression
};
```

Groups are rendered in insertion order.

---

## Row Types

### Choice Rows

```js
{
  type: "choice",
  choiceKey: "starter",
  choiceValue: "bulbasaur",
  pokemon: { name: "Bulbasaur", img: "…" },
  method: "Choose as starter"
}
```

### Gated Rows

```js
{
  pokemon: { name: "Ivysaur", img: "…" },
  method: "Evolve Bulbasaur at Lv. 16",
  requires: { starter: "bulbasaur" }
}
```

### Non-Gated Rows

```js
{
  pokemon: { name: "Pidgey", img: "…" },
  method: "Catch on Route 1"
}
```

---

## Assets

- Covers: `/assets/images/covers/<game-id>.png`
- Logos: `/assets/images/logos/<game-id>.png`
- Sprites: grouped by family (e.g. `/assets/images/FRLG/`)

If an image is unavailable, use:

```js
img: "link"
```

---

## License

By contributing, you agree that your contributions are licensed under the MIT License.
