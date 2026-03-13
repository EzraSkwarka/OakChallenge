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
  let state = { choices: {}, caught: {} };
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
  } catch {}

  let caught = {};
  try {
    caught = JSON.parse(localStorage.getItem(LS_CAUGHT) || "{}");
  } catch {}

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
  caught[name] ? delete caught[name] : (caught[name] = true);
  saveCaught(caught);
  store.setState({ caught });
}

function resetAll() {
  localStorage.removeItem(LS_CHOICES);
  localStorage.removeItem(LS_CAUGHT);
  store.setState({ choices: {}, caught: {} });
}

/* -----------------------------
   Sticky Section Offset
------------------------------ */

/** sets --chrome-offset to current .site-header height */
function applyStickyOffset() {
  const h = document.querySelector(".site-header");
  const px = h ? `${h.clientHeight}px` : "0px";
  document.documentElement.style.setProperty("--chrome-offset", px);
}
function initStickyOffset() {
  applyStickyOffset();
  window.addEventListener("resize", applyStickyOffset, { passive: true });
  const header = document.querySelector(".site-header");
  if (header && "ResizeObserver" in window) {
    new ResizeObserver(applyStickyOffset).observe(header);
  }
}

/* -----------------------------
   Sticky Visual State
------------------------------ */

/** toggles .stuck on header rows for a subtle shadow while sticky */
function initStickyVisualState() {
  const rows = document.querySelectorAll("tr.section-header");
  if (!rows.length) return;

  const topPx =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--section-sticky-top"
      )
    ) || 0;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const stuck =
          e.boundingClientRect.top <= topPx && e.intersectionRatio < 1;
        e.target.classList.toggle("stuck", stuck);
      });
    },
    { root: null, threshold: [1.0] }
  );

  rows.forEach((r) => io.observe(r));
}

/* -----------------------------
   Floating Section Header
------------------------------ */

/** ensures fixed bar + spacer exist */
function ensureFloatingHeaderHost() {
  const band = document.querySelector(".page-band") || document.body;

  let spacer = document.getElementById("floating-section-spacer");
  if (!spacer) {
    spacer = document.createElement("div");
    spacer.id = "floating-section-spacer";
    spacer.className = "floating-section-spacer";
    band.insertBefore(spacer, band.querySelector(".table-wrap"));
  }

  let bar = document.getElementById("floating-section");
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "floating-section";
    bar.className = "floating-section";
    bar.innerHTML = `
      <div class="floating-section-inner">
        <img alt="" hidden>
        <span class="section-header-title"></span>
      </div>
    `;
    band.insertBefore(bar, band.querySelector(".table-wrap"));
  }

  return { spacer, bar };
}

/** updates bar content from current section and sets spacer height */
function updateFloatingHeader() {
  const { spacer, bar } = ensureFloatingHeaderHost();
  const inner = bar.querySelector(".floating-section-inner");
  const img = inner.querySelector("img");
  const titleSpan = inner.querySelector(".section-header-title");

  const headers = Array.from(document.querySelectorAll("tr.section-header"));
  if (!headers.length) {
    bar.style.display = "none";
    spacer.style.height = "0px";
    return;
  }

  const offsetTop =
    (parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--section-sticky-top"
      )
    ) || 0) + 1;

  let current = null;
  for (const tr of headers) {
    const rect = tr.getBoundingClientRect();
    if (rect.top <= offsetTop) current = tr;
    else break;
  }

  if (!current) {
    const first = headers[0];
    if (first.getBoundingClientRect().top > offsetTop) {
      bar.style.display = "none";
      spacer.style.height = "0px";
      return;
    }
    current = first;
  }

  bar.style.display = "";
  const content = current.querySelector(".section-header-content");
  const title =
    content?.querySelector(".section-header-title")?.textContent || "";
  const badgeEl = content?.querySelector(".section-header-img");
  const badge = badgeEl?.getAttribute("src") || "";
  const alt = badgeEl?.getAttribute("alt") || "";

  titleSpan.textContent = title;
  if (badge) {
    img.src = badge;
    img.alt = alt || "";
    img.hidden = false;
  } else {
    img.hidden = true;
  }

  const barH = bar.getBoundingClientRect().height;
  spacer.style.height = `${barH}px`;
}

/** init listeners */
function initFloatingHeader() {
  ensureFloatingHeaderHost();
  updateFloatingHeader();
  window.addEventListener("scroll", updateFloatingHeader, { passive: true });
  window.addEventListener(
    "resize",
    () => {
      updateFloatingHeader();
      applyStickyOffset();
    },
    { passive: true }
  );
}

/* -----------------------------
   Data Normalization / Model
------------------------------ */

function buildModel() {
  const { choices, caught } = store.getState();
  const out = [];

  for (const [groupTitle, def] of Object.entries(BADGE_GROUPS)) {
    const rows = Array.isArray(def)
      ? def
      : def && Array.isArray(def.rows)
      ? def.rows
      : [];

    const summary = def && typeof def === "object" ? def.summary || null : null;

    const headerTitle = def?.headerTitle || groupTitle;
    out.push({
      __kind: "header",
      __key: `header:${groupTitle}`,
      title: headerTitle,
      headerImg: def?.headerImg || null,
      headerImgAlt: def?.headerImgAlt || "",
    });

    if (summary) {
      out.push({
        __kind: "summary",
        __key: `summary:${groupTitle}`,
        text: summary,
      });
    }

    const choiceRows = rows.filter((r) => r.type === "choice");
    const choiceKeys = [...new Set(choiceRows.map((r) => r.choiceKey))];
    const allChoicesMade = choiceKeys.every((k) => !!choices[k]);

    for (let i = 0; i < rows.length; i++) {
      const r = rows[i];

      if (r.type === "choice") {
        if (allChoicesMade) continue;

        const prev = rows[i - 1];
        const next = rows[i + 1];
        const isStart = !(prev && prev.type === "choice");
        const isEnd = !(next && next.type === "choice");

        if (isStart) {
          out.push({
            __kind: "choiceSubheader",
            __key: `choiceSubheader:${groupTitle}:${i}`,
            label: `${cap(r.choiceKey)} — choose one`,
          });
        }

        out.push({
          __kind: "choice",
          __key: `choice:${groupTitle}:${norm(r.choiceValue)}`,
          choiceKey: r.choiceKey,
          choiceValue: norm(r.choiceValue),
          pokemon: {
            name: r.pokemon?.name || "Choice",
            img: safeImg(r.pokemon?.img),
          },
          method: r.method || "Pick an option",
          groupRunStart: isStart,
          groupRunEnd: isEnd,
        });
        continue;
      }

      if (r.requires && !meetsRequirements(r, choices)) continue;

      const nm = r.pokemon?.name || "Unknown";
      out.push({
        __kind: "pokemon",
        __key: `pokemon:${groupTitle}:${nm}`,
        pokemon: { name: nm, img: safeImg(r.pokemon?.img) },
        method: r.method || "—",
        caught: !!caught[nm],
      });
    }

    if (allChoicesMade) {
      const total = rows.filter(
        (r) =>
          r.type !== "choice" && (!r.requires || meetsRequirements(r, choices))
      ).length;
      const caughtCount = rows.filter(
        (r) => r.type !== "choice" && caught[r.pokemon?.name]
      ).length;
      out.push({
        __kind: "progress",
        __key: `progress:${groupTitle}`,
        total,
        caught: caughtCount,
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

const el = (id) => document.getElementById(id);
const tbodyEl = () => document.querySelector("#pokemon-table tbody");

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
    chip.textContent = `${cap(key)}: ${cap(value)}`;

    const btn = document.createElement("button");
    btn.textContent = "Change";
    btn.onclick = () => clearChoice(key);

    chip.appendChild(btn);
    host.appendChild(chip);
  }
}

/* -----------------------------
   Row Factories
------------------------------ */

function trHeader(row) {
  const tr = document.createElement("tr");
  tr.className = "section-header";
  const td = document.createElement("td");
  td.colSpan = 3;

  const wrap = document.createElement("div");
  wrap.className = "section-header-content";

  if (row.headerImg) {
    const img = document.createElement("img");
    img.className = "section-header-img";
    img.src = row.headerImg;
    img.alt = row.headerImgAlt || "";
    wrap.appendChild(img);
  }

  const title = document.createElement("span");
  title.className = "section-header-title";
  title.textContent = row.title;
  wrap.appendChild(title);

  td.appendChild(wrap);
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

  tr.onclick = () => setChoice(row.choiceKey, row.choiceValue);

  tr.innerHTML = `
    <td><div class="pkm"><img src="${row.pokemon.img}"><span>${row.pokemon.name}</span></div></td>
    <td>${row.method}</td>
    <td class="center"></td>
  `;
  return tr;
}

/* -----------------------------
   Row Factory: Pokémon
------------------------------ */

function trPokemon(row) {
  const tr = document.createElement("tr");
  tr.className = "row-normal";
  if (row.caught) tr.classList.add("caught-true");

  const tdP = document.createElement("td");
  const wrap = document.createElement("div");
  wrap.className = "pkm";

  const sprite = document.createElement("img");
  sprite.src = row.pokemon.img;
  sprite.alt = row.pokemon.name || "Pokémon";

  const name = document.createElement("span");
  name.textContent = row.pokemon.name || "Unknown";

  wrap.append(sprite, name);
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

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleCaught(row.pokemon.name);
  });

  tr.addEventListener("click", (e) => {
    if (!btn.contains(e.target)) toggleCaught(row.pokemon.name);
  });

  tdC.appendChild(btn);
  tr.append(tdP, tdM, tdC);
  return tr;
}

function trProgress(row) {
  const tr = document.createElement("tr");
  tr.className = "section-progress progress-row";
  const pct = row.total ? (row.caught / row.total) * 100 : 0;
  tr.innerHTML = `
    <td colspan="3">
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="progress-label">${row.caught} / ${row.total} caught</div>
    </td>
  `;
  return tr;
}

/* -----------------------------
   Diffing Renderer
------------------------------ */

const renderCtx = { keyOrder: [], rowNodes: new Map() };

function render() {
  renderChoiceStatus();
  const model = buildModel();
  const tbody = tbodyEl();
  if (!tbody) return;

  const tbl = el("pokemon-table");
  tbl?.classList.toggle(
    "has-data",
    model.some((r) => r.__kind === "pokemon" || r.__kind === "choice")
  );

  const newKeys = model.map((m) => m.__key);
  const sameShape =
    newKeys.length === renderCtx.keyOrder.length &&
    newKeys.every((k, i) => k === renderCtx.keyOrder[i]);

  if (!sameShape) {
    renderCtx.rowNodes.clear();
    tbody.textContent = "";
    const frag = document.createDocumentFragment();

    for (const row of model) {
      let tr;
      if (row.__kind === "header") tr = trHeader(row);
      else if (row.__kind === "summary") tr = trSummary(row);
      else if (row.__kind === "choiceSubheader") tr = trChoiceSubheader(row);
      else if (row.__kind === "choice") tr = trChoice(row);
      else if (row.__kind === "pokemon") tr = trPokemon(row);
      else if (row.__kind === "progress") tr = trProgress(row);

      if (tr) {
        tr.dataset.key = row.__key;
        tr.classList.add("fade-in");
        setTimeout(() => tr.classList.remove("fade-in"), 170);
        renderCtx.rowNodes.set(row.__key, tr);
        frag.appendChild(tr);
      }
    }

    tbody.appendChild(frag);
    renderCtx.keyOrder = newKeys;
    return;
  }

  for (const row of model) {
    if (row.__kind === "pokemon") {
      const tr = renderCtx.rowNodes.get(row.__key);
      if (!tr) continue;
      tr.classList.toggle("caught-true", !!row.caught);
      const icon = tr.querySelector(".catch-icon");
      if (icon) icon.src = row.caught ? POKEBALL_CAUGHT : POKEBALL_UNCAUGHT;
    }
  }
}

/* -----------------------------
   Boot
------------------------------ */

function boot() {
  const t = document.getElementById("game-title");
  if (t) t.textContent = GAME_TITLE;

  initStickyOffset();
  loadPersisted();
  render();
  initFloatingHeader();

  store.subscribe(() => {
    render();
    updateFloatingHeader();
  });

  const resetBtn = document.getElementById("reset-all");
  resetBtn?.addEventListener("click", () => {
    if (confirm("Reset all choices and caught progress?")) resetAll();
  });
}
document.addEventListener("DOMContentLoaded", boot);
