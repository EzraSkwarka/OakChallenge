# Pokémon Data File Guide (`<game>-data.js`)

This guide explains how to author a `gameData` file (e.g., `firered-data.js`) that the reactive table engine consumes.

> **TL;DR:** Export a single global `gameData` object with a unique `gameId`, a `gameTitle`, and a `badgeGroups` map. Rows are written **in Pokédex order** and the UI preserves that order; visibility is driven by simple `requires` rules and optional `choice` rows.

---

## Minimal Example

```js
// firered-data.js
const gameData = {
  gameId: "firered",
  gameTitle: "Pokémon FireRed",
  badgeGroups: {
    "Pre Badge 1": {
      summary: "This is the pre badge 1 section summary",
      rows: [
        // Choice rows (appear until selected)
        { type: "choice", choiceKey: "starter", choiceValue: "bulbasaur",
          pokemon: { img: "../images/bulbasaur.png", name: "Bulbasaur" },
          method: "Pick this starter to show the Bulbasaur line" },
        { type: "choice", choiceKey: "starter", choiceValue: "charmander",
          pokemon: { img: "../images/charmander.png", name: "Charmander" },
          method: "Pick this starter to show the Charmander line" },
        { type: "choice", choiceKey: "starter", choiceValue: "squirtle",
          pokemon: { img: "../images/squirtle.png", name: "Squirtle" },
          method: "Pick this starter to show the Squirtle line" },

        // Gated rows (visible when requirements match)
        { pokemon: { img: "../images/bulbasaur.png", name: "Bulbasaur" },
          method: "Choose as Starter", requires: { starter: "bulbasaur" } },
        { pokemon: { img: "../images/ivysaur.png", name: "Ivysaur" },
          method: "Evolve from Bulbasaur at Lvl. 16", requires: { starter: "bulbasaur" } },
        { pokemon: { img: "../images/venusaur.png", name: "Venusaur" },
          method: "Evolve from Ivysaur at Lvl. 32", requires: { starter: "bulbasaur" } },

        // Ungated rows (always visible)
        { pokemon: { img: "../images/pidgey.png", name: "Pidgey" }, method: "Route 1" },
        { pokemon: { img: "../images/weedle.png", name: "Weedle" }, method: "Viridian Forest" },
        { pokemon: { img: "../images/pikachu.png", name: "Pikachu" }, method: "Viridian Forest" }
      ]
    }
  }
};
```

---

## `gameData` Schema

```ts
interface GameData {
  gameId: string;       // Unique namespace for localStorage keys
  gameTitle: string;    // Page H1 title
  badgeGroups: Record<string, BadgeGroup | Row[]>; // Section name -> group
}

interface BadgeGroup {
  summary?: string;     // Optional short description shown under header
  rows: Row[];          // Written in desired (Pokédex) order
}

// A Row is either a Choice row or a Pokémon row

type Row = ChoiceRow | PokemonRow;

interface ChoiceRow {
  type: "choice";
  choiceKey: string;     // e.g., "starter", "fossil", "eevee-evo"
  choiceValue: string;   // value persisted when selected (normalized lower-case)
  pokemon: {
    name: string;        // Display name
    img?: string;        // Relative or absolute path; missing -> placeholder
  };
  method?: string;       // Display text under "Method"
}

interface PokemonRow {
  pokemon: {
    name: string;
    img?: string;
  };
  method?: string;       // e.g., "Route 1", "Evolve at Lvl. 36"
  requires?: Record<string, string>; // e.g., { starter: "bulbasaur" }
}
```

### Notes
- **Ordering matters**: Rows render in the exact order provided. Keep data in Pokédex order.
- **Images**: Omit or set to `"link"` to use the placeholder image automatically.
- **`requires`**: Provide key/value pairs that must match user choices (normalized to lower-case trimmed strings).
- **Multiple choices per group**: You may include several `choiceKey`s in the same group. The UI will **hide all choice rows** once **every unique choiceKey** in that group has a selection.

---

## Multi‑Group & Multi‑Choice Example

```js
const gameData = {
  gameId: "custom",
  gameTitle: "Pokémon Custom Version",
  badgeGroups: {
    "Pre Badge 1": {
      summary: "Pick a starter and get going!",
      rows: [
        { type: "choice", choiceKey: "starter", choiceValue: "bulbasaur", pokemon: { name: "Bulbasaur", img: "../images/bulbasaur.png" }, method: "Starter" },
        { type: "choice", choiceKey: "starter", choiceValue: "charmander", pokemon: { name: "Charmander", img: "../images/charmander.png" }, method: "Starter" },
        { type: "choice", choiceKey: "starter", choiceValue: "squirtle", pokemon: { name: "Squirtle", img: "../images/squirtle.png" }, method: "Starter" },

        { pokemon: { name: "Bulbasaur", img: "../images/bulbasaur.png" }, method: "Choose as Starter", requires: { starter: "bulbasaur" } },
        { pokemon: { name: "Ivysaur", img: "../images/ivysaur.png" }, method: "Evolve at Lvl. 16", requires: { starter: "bulbasaur" } },

        { pokemon: { name: "Pidgey", img: "../images/pidgey.png" }, method: "Route 1" }
      ]
    },
    "Fossils": {
      summary: "Choose a fossil at Mt. Moon",
      rows: [
        { type: "choice", choiceKey: "fossil", choiceValue: "helix", pokemon: { name: "Omanyte", img: "../images/omanyte.png" }, method: "Pick Helix" },
        { type: "choice", choiceKey: "fossil", choiceValue: "dome",  pokemon: { name: "Kabuto",  img: "../images/kabuto.png"  }, method: "Pick Dome" },

        { pokemon: { name: "Omanyte", img: "../images/omanyte.png" }, method: "Revive Helix", requires: { fossil: "helix" } },
        { pokemon: { name: "Omastar", img: "../images/omastar.png" }, method: "Evolve at Lvl. 40", requires: { fossil: "helix" } },
        { pokemon: { name: "Kabuto",  img: "../images/kabuto.png"  }, method: "Revive Dome",  requires: { fossil: "dome" } },
        { pokemon: { name: "Kabutops",img: "../images/kabutops.png"}, method: "Evolve at Lvl. 40", requires: { fossil: "dome" } }
      ]
    }
  }
};
```

---

## Validation Checklist
- [ ] `gameId` is unique per game (affects localStorage keys)
- [ ] `gameTitle` is set
- [ ] `badgeGroups` has at least one group
- [ ] Each group has `rows` in the desired order
- [ ] Choice rows have `type`, `choiceKey`, `choiceValue`, and `pokemon.name`
- [ ] Gated rows include `requires: { key: value }` matching a choiceKey
- [ ] Relative image paths are correct from the **HTML file location** (e.g., subpage → `../images/...`)

---

## Behavior Summary (Engine)
- **Order preserved:** Renders rows in the order provided.
- **Choice visibility:** All `choice` rows are shown until **every** `choiceKey` in the group has a selection.
- **Gated rows:** Shown when `requires` match current choices.
- **Progress bar:** Renders at the bottom of a group **only after** all group choices are made; animates fill on updates.
- **Persistence:** Choices and caught flags are saved per `gameId` in `localStorage`.
