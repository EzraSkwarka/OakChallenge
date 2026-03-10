/**
 * Reactive Pokémon Table Engine
 * - Central state atom (choices, caught)
 * - Deterministic model builder from gameData
 * - Diffing renderer (rebuild only when row set changes; otherwise patch)
 * - Works across pages; robust to missing DOM nodes
 */

/* -----------------------------
   Constants / Helpers
------------------------------ */

const PLACEHOLDER_SRC = "../images/placeholder.png";
const POKEBALL_CAUGHT = "../images/pokeball.png";
const POKEBALL_UNCAUGHT = "../images/pokeball_dark.png";

const cap = (s) => (s ? s[0].toUpperCase() + s.slice(1) : s);
const norm = (v) => (typeof v === "string" ? v.trim().toLowerCase() : v);
const slug = (s) =>
  String(s)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
const safeImg = (src) => (!src || src === "link" ? PLACEHOLDER_SRC : src);

/* -----------------------------
   Validate / Load Game Data
------------------------------ */

if (typeof gameData !== "object") {
  throw new Error("gameData not found. Each page must load X-data.js first.");
}

const PAGE_NS = gameData.gameId || "default";
const GAME_TITLE = gameData.gameTitle || "Pokémon Game";
const BADGE_GROUPS = gameData.badgeGroups || {};

const LS_CHOICES = `poke-choices:${PAGE_NS}`;
const LS_CAUGHT = `poke-caught:${PAGE_NS}`;

/* -----------------------------
   State Atom (choices, caught)
------------------------------ */

const store = (() => {
  let state = {
    choices: {},
    caught: {} // { [pokemonName]: true }
  };
  let listeners = [];

  function getState() {
    return state;
  }

  function setState(partial) {
    state = Object.assign({}, state, partial);
    listeners.forEach((fn) => fn(state));
  }

  function subscribe(fn) {
    listeners.push(fn);
    return () => (listeners = listeners.filter((f) => f !== fn));
  }

  return { getState, setState, subscribe };
})();

/* -----------------------------
   Persistence
------------------------------ */

function loadPersisted() {
  let choices = {};
  try {
    const c = JSON.parse(localStorage.getItem(LS_CHOICES) || "{}");
    for (const [k, v] of Object.entries(c)) choices[k] = norm(v);
  } catch {
    /* noop */
  }

  let caught = {};
  try {
    caught = JSON.parse(localStorage.getItem(LS_CAUGHT) || "{}");
  } catch {
    /* noop */
  }

  store.setState({ choices, caught });
}

function saveChoices(choices) {
  localStorage.setItem(LS_CHOICES, JSON.stringify(choices));
}
function saveCaught(caught) {
  localStorage.setItem(LS_CAUGHT, JSON.stringify(caught));
}

function setChoice(key, value) {
  const current = store.getState();
  const choices = { ...current.choices, [key]: norm(value) };
  saveChoices(choices);
  store.setState({ choices });
}

function clearChoice(key) {
  const current = store.getState();
  const choices = { ...current.choices };
  delete choices[key];
  saveChoices(choices);
  store.setState({ choices });
}

function toggleCaught(name) {
  if (!name) return;
  const current = store.getState();
  const caught = { ...current.caught };
  if (caught[name]) delete caught[name];
  else caught[name] = true;
  saveCaught(caught);
  store.setState({ caught });
}

function resetAll() {
  localStorage.removeItem(LS_CHOICES);
  localStorage.removeItem(LS_CAUGHT);
  store.setState({ choices: {}, caught: {} });
}

/* -----------------------------
   Data Normalization / Model
------------------------------ */

/**
 * Returns an ordered array of normalized rows to render.
 * Each entry has a stable __key and a __kind for the renderer.
 */
function buildModel() {
  const { choices, caught } = store.getState();
  const out = [];

  for (const [groupTitle, def] of Object.entries(BADGE_GROUPS)) {
    const rows = Array.isArray(def) ? def : def && Array.isArray(def.rows) ? def.rows : [];
    const summary = def && typeof def === "object" ? def.summary || null : null;

    // Header
    out.push({ __kind: "header", __key: `header:${groupTitle}`, title: groupTitle });

    // Summary
    if (summary) {
      out.push({
        __kind: "summary",
        __key: `summary:${groupTitle}`,
        text: summary
      });
    }

    const choiceRows = rows.filter((r) => r.type === "choice");
    const choiceKeys = [...new Set(choiceRows.map((r) => r.choiceKey))];
    const allChoicesMade = choiceKeys.every((k) => !!choices[k]);

    const showChoiceRows = !allChoicesMade;

    // Materialize in original order (choices shown only if not all group choices are made)
    for (let i = 0; i < rows.length; i++) {
      const r = rows[i];

      if (r.type === "choice") {
        if (!showChoiceRows) continue;

        const prev = rows[i - 1];
        const next = rows[i + 1];
        const isStart = !(prev && prev.type === "choice" && prev.choiceKey === r.choiceKey);
        const isEnd = !(next && next.type === "choice" && next.choiceKey === r.choiceKey);

        // Subheader appears exactly once per contiguous block
        if (isStart) {
          out.push({
            __kind: "choiceSubheader",
            __key: `choiceSubheader:${groupTitle}:${r.choiceKey}:${i}`,
            __group: groupTitle,
            label: `${cap(r.choiceKey)} — choose one`
          });
        }

        const nm = r.pokemon?.name || "Choice";
        out.push({
          __kind: "choice",
          __key: `choice:${groupTitle}:${r.choiceKey}:${norm(r.choiceValue)}`,
          __group: groupTitle,
          choiceKey: r.choiceKey,
          choiceValue: norm(r.choiceValue),
          pokemon: { name: nm, img: safeImg(r.pokemon?.img) },
          method: r.method || "Pick an option",
          groupRunStart: isStart,
          groupRunEnd: isEnd
        });
        continue;
      }

      // Pokémon rows
      if (r.requires && !meetsRequirements(r, choices)) continue;

      const nm = r.pokemon?.name || "Unknown";
      out.push({
        __kind: "pokemon",
        __key: `pokemon:${groupTitle}:${nm}`,
        __group: groupTitle,
        pokemon: { name: nm, img: safeImg(r.pokemon?.img) },
        method: r.method || "—",
        caught: !!caught[nm]
      });
    }

    // Progress at bottom ONLY if all group choices made
    if (allChoicesMade) {
      const total = rows
        .filter((r) => r.type !== "choice")
        .filter((r) => !r.requires || meetsRequirements(r, choices))
        .filter((r) => r.pokemon).length;

      const caughtCount = rows
        .filter((r) => r.type !== "choice")
        .filter((r) => !r.requires || meetsRequirements(r, choices))
        .filter((r) => r.pokemon && caught[r.pokemon.name]).length;

      out.push({
        __kind: "progress",
        __key: `progress:${groupTitle}`,
        group: groupTitle,
        total,
        caught: caughtCount
      });
    }
  }

  return out;
}

function meetsRequirements(row, choices) {
  if (!row.requires) return true;
  for (const [k, v] of Object.entries(row.requires)) {
    if (norm(choices[k]) !== norm(v)) return false;
  }
  return true;
}

/* -----------------------------
   DOM References
------------------------------ */

function el(id) {
  return document.getElementById(id);
}
function tbodyEl() {
  return document.querySelector("#pokemon-table tbody");
}

/* -----------------------------
   Choice Status Chips
------------------------------ */

function renderChoiceStatus() {
  const host = el("choice-status");
  if (!host) return;

  host.textContent = "";
  const { choices } = store.getState();
  for (const [key, value] of Object.entries(choices)) {
    const chip = document.createElement("div");
    chip.className = "chip";

    const span = document.createElement("span");
    span.textContent = `${cap(key)}: ${cap(value)}`;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Change";
    btn.addEventListener("click", () => {
      clearChoice(key);
    });

    chip.appendChild(span);
    chip.appendChild(btn);
    host.appendChild(chip);
  }
}

/* -----------------------------
   Row Factories (TR builders)
------------------------------ */

function trHeader(row) {
  const tr = document.createElement("tr");
  tr.className = "section-header";
  const td = document.createElement("td");
  td.colSpan = 3;
  td.textContent = row.title;
  tr.appendChild(td);
  return tr;
}

function trSummary(row) {
  const tr = document.createElement("tr");
  tr.className = "section-summary";
  const td = document.createElement("td");
  td.colSpan = 3;
  td.textContent = row.text;
  tr.appendChild(td);
  return tr;
}

function trProgress(row) {
  const tr = document.createElement("tr");
  tr.className = "section-progress progress-row";

  const td = document.createElement("td");
  td.colSpan = 3;

  const bar = document.createElement("div");
  bar.className = "progress-bar";

  const fill = document.createElement("div");
  fill.className = "progress-fill";
  fill.style.width = "0%"; // start empty

  const pct = row.total ? (row.caught / row.total) * 100 : 0;
  requestAnimationFrame(() => {
    fill.style.width = `${pct}%`; // animate
  });

  bar.appendChild(fill);

  const label = document.createElement("div");
  label.className = "progress-label";
  label.textContent = `${row.caught} / ${row.total} caught`;

  td.appendChild(bar);
  td.appendChild(label);
  tr.appendChild(td);

  return tr;
}

function trChoiceSubheader(row) {
  const tr = document.createElement("tr");
  tr.className = "choice-subheader-row";
  const td = document.createElement("td");
  td.colSpan = 3;
  td.textContent = row.label;
  tr.appendChild(td);
  return tr;
}

function trChoice(row) {
  const tr = document.createElement("tr");
  tr.className = "row-choice compact-band";

  if (row.groupRunStart) tr.classList.add("choice-group-start");
  if (row.groupRunEnd) tr.classList.add("choice-group-end");

  const tdP = document.createElement("td");
  const wrap = document.createElement("div");
  wrap.className = "pkm";
  const img = document.createElement("img");
  img.src = row.pokemon?.img;
  img.alt = row.pokemon?.name || "Choice";
  const name = document.createElement("span");
  name.textContent = row.pokemon?.name || "Choice";
  wrap.append(img, name);
  tdP.appendChild(wrap);

  const tdM = document.createElement("td");
  tdM.textContent = row.method || "Pick an option";

  const tdA = document.createElement("td");
  tdA.className = "center";
  tdA.textContent = ""; // now empty

  // Entire row is now clickable
  const pick = () => setChoice(row.choiceKey, row.choiceValue);
  tr.addEventListener("click", pick);

  tr.append(tdP, tdM, tdA);
  return tr;
}

function trPokemon(row) {
  const tr = document.createElement("tr");
  tr.className = "row-normal";
  if (row.caught) tr.classList.add("caught-true");

  const tdP = document.createElement("td");
  const wrap = document.createElement("div");
  wrap.className = "pkm";
  const img = document.createElement("img");
  img.src = row.pokemon.img;
  img.alt = row.pokemon.name || "Pokémon";
  const name = document.createElement("span");
  name.textContent = row.pokemon.name || "Unknown";
  wrap.append(img, name);
  tdP.appendChild(wrap);

  const tdM = document.createElement("td");
  tdM.textContent = row.method;

  const tdC = document.createElement("td");
  tdC.className = "center";

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "catch-btn";
  const icon = document.createElement("img");
  icon.className = "catch-icon";
  icon.alt = row.caught ? "Caught" : "Uncaught";
  icon.src = row.caught ? POKEBALL_CAUGHT : POKEBALL_UNCAUGHT;
  btn.appendChild(icon);

  const toggle = () => toggleCaught(row.pokemon.name);
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
  });
  tr.addEventListener("click", (e) => {
    if (!btn.contains(e.target)) toggle();
  });

  tdC.appendChild(btn);
  tr.append(tdP, tdM, tdC);
  return tr;
}

/* -----------------------------
   Diffing Renderer
------------------------------ */

const renderCtx = {
  keyOrder: [],
  rowNodes: new Map() // key -> tr
};

function render() {
  renderChoiceStatus();

  const model = buildModel();
  const tbody = tbodyEl();
  if (!tbody) return;

  const newKeys = model.map((m) => m.__key);
  const sameShape =
    newKeys.length === renderCtx.keyOrder.length && newKeys.every((k, i) => k === renderCtx.keyOrder[i]);

  if (!sameShape) {
    // FULL REBUILD — no fade-out, only fade-in
    const frag = document.createDocumentFragment();
    renderCtx.rowNodes.clear();

    for (const row of model) {
      let tr;
      if (row.__kind === "header") tr = trHeader(row);
      else if (row.__kind === "summary") tr = trSummary(row);
      else if (row.__kind === "progress") tr = trProgress(row);
      else if (row.__kind === "choice") tr = trChoice(row);
      else if (row.__kind === "pokemon") tr = trPokemon(row);
      else if (row.__kind === "choiceSubheader") tr = trChoiceSubheader(row);

      if (tr) {
        tr.dataset.key = row.__key;
        // fade-in on creation
        tr.classList.add("fade-in");
        setTimeout(() => tr.classList.remove("fade-in"), 170);

        renderCtx.rowNodes.set(row.__key, tr);
        frag.appendChild(tr);
      }
    }

    tbody.textContent = "";
    tbody.appendChild(frag);
    renderCtx.keyOrder = newKeys;
    return;
  }

  // PATCH PATH — shapes are identical: do fade-out for removed keys (none), and patch dynamic bits

  // (There are no removed keys in same-shape mode; still keep this guard for future extensions)

  for (const row of model) {
    const tr = renderCtx.rowNodes.get(row.__key);
    if (!tr) continue;

    if (row.__kind === "progress") {
      const bar = tr.querySelector(".progress-fill");
      const label = tr.querySelector(".progress-label");
      if (bar) {
        const pct = row.total ? (row.caught / row.total) * 100 : 0;
        requestAnimationFrame(() => {
          bar.style.width = `${pct}%`;
        });
      }
      if (label) {
        label.textContent = `${row.caught} / ${row.total} caught`;
      }
    } else if (row.__kind === "pokemon") {
      tr.classList.toggle("caught-true", !!row.caught);
      const icon = tr.querySelector(".catch-icon");
      if (icon) {
        icon.src = row.caught ? "../images/pokeball.png" : "../images/pokeball_dark.png";
        icon.alt = row.caught ? "Caught" : "Uncaught";
      }
    }
    // header/summary/choice rows are static after creation
  }
}

/* -----------------------------
   Boot
------------------------------ */

function boot() {
  const titleEl = el("game-title");
  if (titleEl) titleEl.textContent = GAME_TITLE;

  loadPersisted();
  render();

  const unsub = store.subscribe(() => {
    render();
  });

  const resetBtn = el("reset-all");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset all choices and caught progress?")) resetAll();
    });
  }
  return () => unsub();
}

document.addEventListener("DOMContentLoaded", boot);
