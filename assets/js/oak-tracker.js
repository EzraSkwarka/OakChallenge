/**
 * Professor Oak’s Challenge — Progress Tracker Engine
 *
 * Responsibilities:
 * - Render Pokémon progress by badge group
 * - Handle choice-gated progression
 * - Persist caught/choice state to localStorage
 * - Support List and Grid views with a unified data model
 * - Manage floating section headers and layout behavior
 *
 * This file is game-agnostic.
 * All game-specific content is supplied via data/<game>/progression.js.
 *
 * CSP-safe: no inline scripts, no inline styles.
 */

/* -----------------------------
   Constants / Helpers
------------------------------ */

const PLACEHOLDER_SRC = "/assets/images/placeholder.png";
const POKEBALL_CAUGHT = "/assets/images/ui/pokeball.png";
const POKEBALL_UNCAUGHT = "/assets/images/ui/pokeball_dark.png";

const cap = (s) => (s ? s[0].toUpperCase() + s.slice(1) : s);
const norm = (v) => (typeof v === "string" ? v.trim().toLowerCase() : v);
const slug = (s) =>
  String(s)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
const safeImg = (src) => (!src || src === "link" ? PLACEHOLDER_SRC : src);

/* -----------------------------
   View Mode Buttons Sync
------------------------------ */
function syncViewButtons() {
  const isGrid = VIEW_MODE === "grid";
  document
    .querySelectorAll(".view-btn.view-list")
    .forEach((b) => b.classList.toggle("active", !isGrid));
  document
    .querySelectorAll(".view-btn.view-grid")
    .forEach((b) => b.classList.toggle("active", isGrid));
}

/* -----------------------------
   Validate / Load Game Data
------------------------------ */

if (typeof gameData !== "object") {
  throw new Error("gameData not found. Each page must load X-data.js first.");
}

const PAGE_NS = gameData.gameId || "default";
const GAME_TITLE = gameData.gameTitle || "Pokémon Game";
const BADGE_GROUPS = gameData.progression || {};

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
   View Mode
------------------------------ */
const VIEW_LS = `poke-view:${PAGE_NS}`;
let VIEW_MODE = localStorage.getItem(VIEW_LS) === "grid" ? "grid" : "list";

function setViewMode(mode) {
  VIEW_MODE = mode === "grid" ? "grid" : "list";
  localStorage.setItem(VIEW_LS, VIEW_MODE);
  render();
  updateFloatingHeader();
  syncViewButtons();
}

/* -----------------------------
   Sticky Section Offset
------------------------------ */
function measureHeaderOffset() {
  const header =
    document.querySelector("#site-header-host .site-header") ||
    document.querySelector(".site-header");

  if (!header) {
    document.documentElement.style.setProperty("--chrome-offset", "0px");
    return;
  }

  const headerRect = header.getBoundingClientRect();
  const bodyRect = document.body.getBoundingClientRect();

  const offset = Math.max(0, Math.round(headerRect.bottom - bodyRect.top));

  document.documentElement.style.setProperty("--chrome-offset", `${offset}px`);
}

function applyStickyOffset() {
  requestAnimationFrame(() => requestAnimationFrame(measureHeaderOffset));
}

function initStickyOffset() {
  applyStickyOffset();

  if ("ResizeObserver" in window) {
    const ro = new ResizeObserver(applyStickyOffset);
    ro.observe(document.body);
  }

  window.addEventListener("resize", applyStickyOffset, { passive: true });
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
function ensureFloatingHeaderHost() {
  const headerHost = document.getElementById("site-header-host");
  let bar = document.getElementById("floating-section");

  if (!bar) {
    bar = document.createElement("div");
    bar.id = "floating-section";
    bar.className = "floating-section";
    bar.innerHTML = `
      <div class="floating-section-inner">
        <img alt="" hidden>
        <span class="section-header-title"></span>
        <div class="floating-controls">
          <button type="button" class="view-btn view-list">List</button>
         <button type="button" class="view-btn view-grid">Grid</button>
       </div>      
      </div>
    `;
    if (headerHost) headerHost.insertAdjacentElement("afterend", bar);
    else document.body.insertAdjacentElement("afterbegin", bar);

    const btnList = bar.querySelector(".view-list");
    const btnGrid = bar.querySelector(".view-grid");
    btnList.onclick = () => setViewMode("list");
    btnGrid.onclick = () => setViewMode("grid");
  }

  return bar;
}

function updateFloatingHeader() {
  const bar = ensureFloatingHeaderHost();
  const inner = bar.querySelector(".floating-section-inner");
  const img = inner.querySelector("img");
  const titleSpan = inner.querySelector(".section-header-title");
  const btnList = inner.querySelector(".view-list");
  const btnGrid = inner.querySelector(".view-grid");

  const headers = Array.from(document.querySelectorAll("tr.section-header"));
  if (!headers.length) {
    bar.style.display = "none";
    return;
  }

  const firstRect = headers[0].getBoundingClientRect();
  if (firstRect.top > 0) {
    bar.style.display = "none";
    return;
  }

  bar.style.display = "";

  let current = headers[0];
  for (const tr of headers) {
    const r = tr.getBoundingClientRect();
    if (r.top <= 0) current = tr;
    else break;
  }

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

  btnList.classList.toggle("active", VIEW_MODE === "list");
  btnGrid.classList.toggle("active", VIEW_MODE === "grid");
}

function initFloatingHeader() {
  ensureFloatingHeaderHost();
  updateFloatingHeader();
  window.addEventListener("scroll", updateFloatingHeader, { passive: true });
  window.addEventListener("resize", updateFloatingHeader, { passive: true });
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

    const summaryShort =
      def && typeof def === "object"
        ? (typeof def.summaryShort === "string" && def.summaryShort) ||
          (typeof def.summary === "string" && def.summary) ||
          null
        : null;

    const summaryHtml =
      def && typeof def === "object" && typeof def.summaryHtml === "string"
        ? def.summaryHtml
        : null;

    const summaryOpen = !!(
      def &&
      typeof def === "object" &&
      def.summaryOpen === true
    );

    const headerTitle = def?.headerTitle || groupTitle;
    out.push({
      __kind: "header",
      __key: `header:${groupTitle}`,
      title: headerTitle,
      headerImg: def?.headerImg || null,
      headerImgAlt: def?.headerImgAlt || "",
    });

    if (summaryShort || summaryHtml) {
      out.push({
        __kind: "summary",
        __key: `summary:${groupTitle}`,
        short: summaryShort,
        html: summaryHtml,
        open: summaryOpen,
      });
    }

    const choiceRows = rows.filter((r) => r.type === "choice");
    const choiceKeys = [...new Set(choiceRows.map((r) => r.choiceKey))];
    const allChoicesMade = choiceKeys.every((k) => !!choices[k]);

    for (let i = 0; i < rows.length; i++) {
      const r = rows[i];

      if (r.type === "choice") {
        const keyChosen = !!choices[r.choiceKey];
        if (keyChosen) continue;

        const prev = rows[i - 1];
        const next = rows[i + 1];
        const isStart = !(
          prev &&
          prev.type === "choice" &&
          prev.choiceKey === r.choiceKey
        );
        const isEnd = !(
          next &&
          next.type === "choice" &&
          next.choiceKey === r.choiceKey
        );

        if (isStart) {
          out.push({
            __kind: "choiceSubheader",
            __key: `choiceSubheader:${groupTitle}:${r.choiceKey}:${i}`,
            __group: groupTitle,
            label: `${cap(r.choiceKey)} — choose one`,
          });
        }

        out.push({
          __kind: "choice",
          __key: `choice:${groupTitle}:${r.choiceKey}:${norm(r.choiceValue)}`,
          __group: groupTitle,
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
        __group: groupTitle,
        pokemon: { name: nm, img: safeImg(r.pokemon?.img) },
        method: r.method || "—",
        caught: !!caught[nm],
      });
    }

    if (allChoicesMade) {
      const total = rows
        .filter((r) => r.type !== "choice")
        .filter((r) => !r.requires || meetsRequirements(r, choices)).length;

      const caughtCount = rows
        .filter((r) => r.type !== "choice")
        .filter((r) => r.pokemon && caught[r.pokemon.name]).length;

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

  const controls = document.createElement("div");
  controls.className = "section-header-controls";

  const btnList = document.createElement("button");
  btnList.type = "button";
  btnList.className = "view-btn view-list";
  btnList.textContent = "List";
  btnList.onclick = () => setViewMode("list");

  const btnGrid = document.createElement("button");
  btnGrid.type = "button";
  btnGrid.className = "view-btn view-grid";
  btnGrid.textContent = "Grid";
  btnGrid.onclick = () => setViewMode("grid");

  controls.append(btnList, btnGrid);
  wrap.appendChild(controls);

  td.appendChild(wrap);
  tr.appendChild(td);
  return tr;
}

/* -----------------------------
   Row Factory: Summary (rich)
------------------------------ */
function trSummary(row) {
  const tr = document.createElement("tr");
  tr.className = "section-summary";
  const td = document.createElement("td");
  td.colSpan = 3;

  const wrap = document.createElement("div");
  wrap.className = "summary-block";

  if (row.short) {
    const short = document.createElement("div");
    short.className = "summary-short";
    short.textContent = row.short;
    wrap.appendChild(short);
  }

  if (row.html) {
    const details = document.createElement("details");
    details.className = "summary-accordion";
    if (row.open) details.setAttribute("open", "");

    const sum = document.createElement("summary");
    sum.textContent = "More info";

    const long = document.createElement("div");
    long.className = "summary-long";
    long.innerHTML = row.html;

    details.append(sum, long);
    wrap.appendChild(details);
  }

  td.appendChild(wrap);
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
   Row Factory: Pokémon (List)
------------------------------ */
function trPokemon(row) {
  const tr = document.createElement("tr");
  tr.className = "row-normal pkm-node";
  tr.dataset.name = row.pokemon.name;
  if (row.caught) tr.classList.add("is-caught");

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
  const mark = document.createElement("img");
  mark.className = "catch-mark";
  mark.alt = row.caught ? "Caught" : "Uncaught";
  mark.src = row.caught ? POKEBALL_CAUGHT : POKEBALL_UNCAUGHT;
  btn.appendChild(mark);

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

/* -----------------------------
   Row Factory: Progress
------------------------------ */
function trProgress(row) {
  const tr = document.createElement("tr");
  tr.className = "section-progress progress-row";

  const td = document.createElement("td");
  td.colSpan = 3;

  const bar = document.createElement("div");
  bar.className = "progress-bar";

  const fill = document.createElement("div");
  fill.className = "progress-fill";

  const pct = row.total
    ? Math.max(0, Math.min(100, Math.round((row.caught / row.total) * 100)))
    : 0;
  fill.classList.add(`w-${pct}`);

  bar.appendChild(fill);

  const label = document.createElement("div");
  label.className = "progress-label";
  label.textContent = `${row.caught} / ${row.total} caught`;

  td.appendChild(bar);
  td.appendChild(label);
  tr.appendChild(td);
  return tr;
}

/* -----------------------------
   Grid Renderer (Group)
------------------------------ */
function trGrid(row) {
  const tr = document.createElement("tr");
  tr.className = "grid-row";
  const td = document.createElement("td");
  td.colSpan = 3;

  const grid = document.createElement("div");
  grid.className = "group-grid";

  row.items.forEach((it, i) => {
    const card = document.createElement("div");
    card.className = "pkm-card pkm-node";
    card.dataset.idx = String(i);
    card.dataset.name = it.name;
    if (it.caught) card.classList.add("is-caught");
    card.tabIndex = 0;

    const thumb = document.createElement("div");
    thumb.className = "pkm-card-thumb";

    const img = document.createElement("img");
    img.className = "pkm-card-sprite";
    img.src = it.img;
    img.alt = it.name;

    const dot = document.createElement("img");
    dot.className = "catch-mark";
    dot.alt = it.caught ? "Caught" : "Uncaught";
    dot.src = it.caught ? POKEBALL_CAUGHT : POKEBALL_UNCAUGHT;

    thumb.append(img, dot);

    const label = document.createElement("div");
    label.className = "pkm-card-name";
    label.textContent = it.name;

    card.append(thumb, label);

    const toggle = () => toggleCaught(it.name);
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });

    grid.appendChild(card);
  });

  td.appendChild(grid);
  tr.appendChild(td);
  return tr;
}

/* -----------------------------
   Grid Justification
------------------------------ */
function adjustGridJustification() {
  const grids = document.querySelectorAll(".group-grid");
  if (!grids.length) return;

  grids.forEach((grid) => {
    const cards = grid.querySelectorAll(".pkm-card");
    if (cards.length <= 1) {
      stripGapClass(grid);
      return;
    }

    const style = getComputedStyle(grid);
    const baseGap = parseFloat(style.gap) || 12;
    const gridW = Math.floor(grid.clientWidth);

    const sample = grid.querySelector(".pkm-card");
    if (!sample) {
      stripGapClass(grid);
      return;
    }
    const cardW = Math.ceil(sample.getBoundingClientRect().width);

    const cols = Math.max(1, Math.floor((gridW + baseGap) / (cardW + baseGap)));
    const rows = Math.ceil(cards.length / cols);
    if (rows <= 1) {
      stripGapClass(grid);
      return;
    }

    const exactGap = (gridW - cols * cardW) / Math.max(1, cols - 1);
    const gap = Math.round(exactGap);
    const used = cols * cardW + (cols - 1) * gap;
    const remaining = gridW - used;

    if (remaining < cardW && gap > baseGap) {
      const clamped = Math.max(4, Math.min(32, gap));
      applyGapClass(grid, clamped);
    } else {
      stripGapClass(grid);
    }
  });
}

function applyGapClass(grid, px) {
  stripGapClass(grid);
  grid.classList.add(`gap-${px}`);
}

function stripGapClass(grid) {
  for (let i = 4; i <= 32; i++) grid.classList.remove(`gap-${i}`);
}

/* -----------------------------
View Model Transform
------------------------------ */
function modelForView(model) {
  if (VIEW_MODE !== "grid") return model;

  const out = [];
  let bucket = [];

  function flushBucket() {
    if (!bucket.length) return;
    out.push({
      __kind: "grid",
      __key: `grid:${out.length}`,
      items: bucket.map((r) => ({
        name: r.pokemon.name,
        img: r.pokemon.img,
        caught: !!r.caught,
      })),
    });
    bucket = [];
  }

  for (const row of model) {
    if (row.__kind === "pokemon") {
      bucket.push(row);
      continue;
    }
    flushBucket();
    out.push(row);
  }
  flushBucket();

  return out;
}

/* -----------------------------
   Unified Capture UI Updater
------------------------------ */
function updateCaptureUI() {
  const { caught } = store.getState();
  const nodes = document.querySelectorAll(".pkm-node[data-name]");
  nodes.forEach((node) => {
    const name = node.dataset.name || "";
    const isCaught = !!caught[name];
    node.classList.toggle("is-caught", isCaught);

    const mark = node.querySelector(".catch-mark");
    if (mark) {
      mark.src = isCaught ? POKEBALL_CAUGHT : POKEBALL_UNCAUGHT;
      mark.alt = isCaught ? "Caught" : "Uncaught";
    }
  });
}

/* -----------------------------
   Requirements Check
------------------------------ */
function meetsRequirements(row, choices) {
  if (!row || !row.requires) return true;

  // supports object: { key: "value", ... }
  if (typeof row.requires === "object" && !Array.isArray(row.requires)) {
    for (const [k, v] of Object.entries(row.requires)) {
      if (
        (choices[k] ?? "").toString().trim().toLowerCase() !==
        (v ?? "").toString().trim().toLowerCase()
      ) {
        return false;
      }
    }
    return true;
  }

  if (Array.isArray(row.requires)) {
    for (const req of row.requires) {
      const k = req?.key;
      const v = req?.value;
      if (!k) return false;
      if (
        (choices[k] ?? "").toString().trim().toLowerCase() !==
        (v ?? "").toString().trim().toLowerCase()
      ) {
        return false;
      }
    }
    return true;
  }

  return true;
}

/* -----------------------------
   Diffing Renderer
------------------------------ */
const renderCtx = { keyOrder: [], rowNodes: new Map() };

function render() {
  renderChoiceStatus();

  const model = buildModel();
  const viewModel = modelForView(model);
  const tbody = tbodyEl();
  if (!tbody) return;

  const tbl = el("pokemon-table");
  tbl?.classList.toggle(
    "has-data",
    model.some((r) => r.__kind === "pokemon" || r.__kind === "choice")
  );

  const newKeys = viewModel.map((m) => m.__key);
  const sameShape =
    newKeys.length === renderCtx.keyOrder.length &&
    newKeys.every((k, i) => k === renderCtx.keyOrder[i]);

  if (!sameShape) {
    renderCtx.rowNodes.clear();
    tbody.textContent = "";

    const frag = document.createDocumentFragment();

    for (const row of viewModel) {
      let tr;
      if (row.__kind === "header") tr = trHeader(row);
      else if (row.__kind === "summary") tr = trSummary(row);
      else if (row.__kind === "choiceSubheader") tr = trChoiceSubheader(row);
      else if (row.__kind === "choice") tr = trChoice(row);
      else if (row.__kind === "grid") tr = trGrid(row);
      else if (row.__kind === "pokemon") tr = trPokemon(row);
      else if (row.__kind === "progress") tr = trProgress(row);

      if (!tr) continue;

      tr.dataset.key = row.__key;
      tr.classList.add("fade-in");
      setTimeout(() => tr.classList.remove("fade-in"), 170);

      renderCtx.rowNodes.set(row.__key, tr);
      frag.appendChild(tr);
    }

    tbody.appendChild(frag);
    renderCtx.keyOrder = newKeys;

    updateCaptureUI();
    adjustGridJustification();
    updateFloatingHeader();
    syncViewButtons();
    return;
  }

  for (const row of viewModel) {
    const tr = renderCtx.rowNodes.get(row.__key);
    if (!tr) continue;

    if (row.__kind === "progress") {
      const fill = tr.querySelector(".progress-fill");
      const label = tr.querySelector(".progress-label");

      if (fill) {
        const pct = row.total
          ? Math.max(
              0,
              Math.min(100, Math.round((row.caught / row.total) * 100))
            )
          : 0;
        fill.className = fill.className.replace(/\bw-\d+\b/g, "").trim();
        fill.classList.add(`w-${pct}`);
      }

      if (label) {
        label.textContent = `${row.caught} / ${row.total} caught`;
      }
    }
  }

  updateCaptureUI();
  adjustGridJustification();
  updateFloatingHeader();
  syncViewButtons();
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

  window.addEventListener("resize", adjustGridJustification, { passive: true });

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
