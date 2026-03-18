/* -----------------------------
 Professor Oak’s Challenge — Progress Tracker Engine
------------------------------ */
/**
 * This file reads the game-specific data exposed as `window.gameData`
 * and renders it into an interactive tracker view. It is responsible
 * for transforming declarative progression data into a normalized
 * runtime model, applying choice-based gating, and syncing state
 * changes back into the DOM.
 *
 * Core responsibilities:
 * - Interpret `progression.js` and build renderable rows and sections
 * - Apply choice requirements and recalculate visible rows
 * - Persist and restore caught/choice state per game
 * - Re-render affected sections when state changes
 *
 * This file assumes all game content is defined elsewhere and contains
 * no game-specific logic or data.
 */
/* -----------------------------
 Constants / Helpers
------------------------------ */
const PLACEHOLDER_SRC = "assets/images/placeholder.png";
const POKEBALL_CAUGHT = "assets/images/ui/pokeball.png";
const POKEBALL_UNCAUGHT = "assets/images/ui/pokeball_dark.png";
const CHOICE_DEFAULT_CAP = 1;
const cap = (s) => (s ? s[0].toUpperCase() + s.slice(1) : s);
const norm = (v) => (typeof v === "string" ? v.trim().toLowerCase() : v);
const slug = (s) => String(s).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
const safeImg = (src) => (!src || src === "link" ? PLACEHOLDER_SRC : src);

/* -----------------------------
 Validate / Load Game Data
------------------------------ */
if (typeof window.gameData !== "object") {
  throw new Error(
    "gameData not found. Load data/<game>/progression.js before the tracker."
  );
}
const PAGE_NS = gameData.gameId || "default";
const GAME_TITLE = gameData.gameTitle || "Pokémon Game";
const BADGE_GROUPS =
  (gameData.badgeGroups && typeof gameData.badgeGroups === "object" && gameData.badgeGroups) ||
  (gameData.progression && typeof gameData.progression === "object" && gameData.progression) ||
  {};

function ensureDataOrExplain() {
  if (Object.keys(BADGE_GROUPS).length > 0) return;
  const tbody = document.querySelector("#pokemon-table tbody");
  if (!tbody) return;
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.colSpan = 3;
  td.className = "muted";
  td.textContent =
    "No sections to display. Ensure your data file defines window.gameData.{badgeGroups|progression} and is included before the tracker.";
  tr.appendChild(td);
  tbody.textContent = "";
  tbody.appendChild(tr);
}

/* -----------------------------
 State Atom (choices, caught)
------------------------------ */
const store = (() => {
  let state = { choices: {}, caught: {} };
  let listeners = [];
  function getState() { return state; }
  function setState(partial) { state = Object.assign({}, state, partial); listeners.forEach((fn) => fn(state)); }
  function subscribe(fn) { listeners.push(fn); return () => (listeners = listeners.filter((f) => f !== fn)); }
  return { getState, setState, subscribe };
})();

/* -----------------------------
 Persistence
------------------------------ */
const LS_CHOICES = `poke-choices:${PAGE_NS}`;
const LS_CAUGHT = `poke-caught:${PAGE_NS}`;
function loadPersisted() {
  let choices = {};
  try {
    const c = JSON.parse(localStorage.getItem(LS_CHOICES) || "{}");
    for (const [k, v] of Object.entries(c)) choices[k] = norm(v);
  } catch {}
  let caught = {};
  try { caught = JSON.parse(localStorage.getItem(LS_CAUGHT) || "{}"); } catch {}
  store.setState({ choices, caught });
}
function saveChoices(choices) { localStorage.setItem(LS_CHOICES, JSON.stringify(choices)); }
function saveCaught(caught)   { localStorage.setItem(LS_CAUGHT, JSON.stringify(caught)); }

/* -----------------------------
 UI Refresh
------------------------------ */
function refreshUI() { render(); StickyHeader.update(); }
function setChoice(key, value) {
  const current = store.getState();
  const choices = { ...current.choices, [key]: norm(value) };
  saveChoices(choices);
  store.setState({ choices });
  refreshUI();
}
function clearChoice(key) {
  const current = store.getState();
  const choices = { ...current.choices };
  delete choices[key];
  saveChoices(choices);
  store.setState({ choices });
  refreshUI();
}
function toggleChoiceMulti(key, value, capN) {
  const current = store.getState();
  const choices = { ...current.choices };
  const v = norm(value);
  const cur = choices[key];
  let arr = Array.isArray(cur) ? [...cur] : cur ? [norm(cur)] : [];
  const i = arr.indexOf(v);
  if (i >= 0) arr.splice(i, 1);
  else if (arr.length < Math.max(1, capN || CHOICE_DEFAULT_CAP)) arr.push(v);
  if (arr.length === 0) delete choices[key];
  else if (arr.length === 1 && (capN || CHOICE_DEFAULT_CAP) === 1) choices[key] = arr[0];
  else choices[key] = arr;
  saveChoices(choices);
  store.setState({ choices });
  refreshUI();
}
function toggleCaught(name) {
  if (!name) return;
  const current = store.getState();
  const caught = { ...current.caught };
  caught[name] ? delete caught[name] : (caught[name] = true);
  saveCaught(caught);
  store.setState({ caught });
  refreshUI();
}
function resetAll() {
  localStorage.removeItem(LS_CHOICES);
  localStorage.removeItem(LS_CAUGHT);
  store.setState({ choices: {}, caught: {} });
  refreshUI();
}

/* -----------------------------
 Choice Helpers (selection/disable for multi-select)
------------------------------ */
function choiceSelections(key) { const cur = store.getState().choices[key]; return Array.isArray(cur) ? cur : cur ? [cur] : []; }
function isChoiceSelected(key, value) { const v = (value ?? "").toString().trim().toLowerCase(); return choiceSelections(key).includes(v); }
function isChoiceDisabled(capN, key, value) {
  if ((capN || 1) <= 1) return false;
  const sel = choiceSelections(key);
  if (sel.includes((value ?? "").toString().trim().toLowerCase())) return false;
  return sel.length >= (capN || 1);
}
function syncChoiceRowState(tr, row) {
  if (!tr || row.__kind !== "choice") return;
  const selected = isChoiceSelected(row.choiceKey, row.choiceValue);
  const disabled = isChoiceDisabled(row.cap, row.choiceKey, row.choiceValue);
  tr.classList.toggle("is-selected", selected);
  tr.classList.toggle("is-disabled", disabled);
  tr.setAttribute("aria-pressed", selected ? "true" : "false");
  if (disabled) tr.setAttribute("aria-disabled", "true");
  else tr.removeAttribute("aria-disabled");
}

/* -----------------------------
 Header Layout (logo left, tips right)
------------------------------ */
function ensureHeaderGrid() {
  const container = document.querySelector(".page-band .container");
  if (!container) return null;
  let grid = container.querySelector(".header-grid");
  if (!grid) { grid = document.createElement("section"); grid.className = "header-grid"; container.insertBefore(grid, container.firstChild); }
  let left = grid.querySelector(".header-left"); if (!left) { left = document.createElement("div"); left.className = "header-left"; grid.appendChild(left); }
  let right = grid.querySelector(".header-right"); if (!right) { right = document.createElement("div"); right.className = "header-right"; grid.appendChild(right); }
  return { grid, left, right };
}

/* -----------------------------
 Game Header (logo replaces title)
------------------------------ */
function setGameHeader() {
  const slots = ensureHeaderGrid(); if (!slots) return; const { left } = slots; left.textContent = "";
  const titleEl = document.getElementById("game-title"); if (titleEl) titleEl.textContent = "";
  const logo = gameData && typeof gameData.logo === "string" ? gameData.logo.trim() : "";
  if (logo) { const img = document.createElement("img"); img.src = logo; img.alt = (gameData.gameTitle || "Game") + " logo"; img.className = "game-logo-title"; img.decoding = "async"; img.loading = "lazy"; left.appendChild(img); }
  else if (titleEl) { titleEl.textContent = GAME_TITLE; left.appendChild(titleEl); }
}

/* -----------------------------
 Game Tips (accordion)
------------------------------ */
function renderGameTips() {
  const slots = ensureHeaderGrid(); if (!slots) return; const { right } = slots; right.textContent = "";
  const html = gameData && typeof gameData.aboutHtml === "string" ? gameData.aboutHtml.trim() : "";
  if (!html) return;
  const section = document.createElement("section"); section.className = "game-tips";
  const details = document.createElement("details"); details.className = "summary-accordion"; details.setAttribute("open", "");
  const summary = document.createElement("summary"); summary.textContent = "Tips on this version";
  const body = document.createElement("div"); body.className = "summary-long"; body.innerHTML = html;
  details.append(summary, body); section.appendChild(details); right.appendChild(section);
}

/* -----------------------------
 View Mode
------------------------------ */
const VIEW_LS = `poke-view:${PAGE_NS}`;
let VIEW_MODE = localStorage.getItem(VIEW_LS) === "grid" ? "grid" : "list";
function setViewMode(mode) { VIEW_MODE = mode === "grid" ? "grid" : "list"; localStorage.setItem(VIEW_LS, VIEW_MODE); render(); StickyHeader.update(); syncViewButtons(); }
function syncViewButtons() {
  const isGrid = VIEW_MODE === "grid";
  document.querySelectorAll(".view-btn.view-list").forEach((b) => b.classList.toggle("active", !isGrid));
  document.querySelectorAll(".view-btn.view-grid").forEach((b) => b.classList.toggle("active", isGrid));
}

/* -----------------------------
 Data Normalization / Model
------------------------------ */
function buildModel() {
  const { choices, caught } = store.getState();
  const out = [];
  for (const [groupTitle, def] of Object.entries(BADGE_GROUPS)) {
    const rows = Array.isArray(def) ? def : def && Array.isArray(def.rows) ? def.rows : [];
    const summaryShort = def && typeof def === "object" ? (typeof def.summaryShort === "string" && def.summaryShort) || (typeof def.summary === "string" && def.summary) || null : null;
    const summaryHtml = def && typeof def === "object" && typeof def.summaryHtml === "string" ? def.summaryHtml : null;
    const summaryOpen = !!(def && typeof def === "object" && def.summaryOpen === true);
    const headerTitle = def?.headerTitle || groupTitle;

    out.push({ __kind: "header", __key: `header:${groupTitle}`, title: headerTitle, headerImg: def?.headerImg || null, headerImgAlt: def?.headerImgAlt || "" });
    if (summaryShort || summaryHtml) out.push({ __kind: "summary", __key: `summary:${groupTitle}`, short: summaryShort, html: summaryHtml, open: summaryOpen });

    const choiceRows = rows.filter((r) => r.type === "choice");
    const keys = [...new Set(choiceRows.map((r) => r.choiceKey))];
    const capMap = {};
    for (const r of choiceRows) {
      const k = r.choiceKey;
      const c = Number.isFinite(r.choiceCap) && r.choiceCap > 0 ? Math.floor(r.choiceCap) : null;
      if (c) capMap[k] = Math.max(capMap[k] || 0, c);
    }

    for (let i = 0; i < rows.length; i++) {
      const r = rows[i];
      if (r.type === "choice") {
        const k = r.choiceKey; const capN = capMap[k] || CHOICE_DEFAULT_CAP; const cur = choices[k];
        const selCount = Array.isArray(cur) ? cur.length : cur ? 1 : 0;
        if (selCount >= capN) { continue; }
        const prev = rows[i - 1]; const next = rows[i + 1];
        const isStart = !(prev && prev.type === "choice" && prev.choiceKey === k);
        const isEnd = !(next && next.type === "choice" && next.choiceKey === k);

        // Custom subheader label support
        let customLabel = null;
        if (typeof r.choiceTitle === "string" && r.choiceTitle.trim()) customLabel = r.choiceTitle.trim();
        else if (def && def.choiceTitles && typeof def.choiceTitles === "object" && typeof def.choiceTitles[k] === "string") customLabel = String(def.choiceTitles[k]).trim();
        const defaultLabel = `${cap(k)} — ${capN === 1 ? "choose one" : `choose up to ${capN}`}`;
        const label = customLabel || defaultLabel;

        if (isStart) { out.push({ __kind: "choiceSubheader", __key: `choiceSubheader:${groupTitle}:${k}:${i}`, __group: groupTitle, label }); }
        out.push({ __kind: "choice", __key: `choice:${groupTitle}:${k}:${norm(r.choiceValue)}`, __group: groupTitle, choiceKey: k, choiceValue: norm(r.choiceValue), cap: capN, pokemon: { name: r.pokemon?.name || "Choice", img: safeImg(r.pokemon?.img) }, method: r.method || "Pick an option", groupRunStart: isStart, groupRunEnd: isEnd });
        continue;
      }
      if (!meetsRequirements(r, choices)) continue;
      const nm = r.pokemon?.name || "Unknown";
      out.push({ __kind: "pokemon", __key: `pokemon:${groupTitle}:${nm}`, __group: groupTitle, pokemon: { name: nm, img: safeImg(r.pokemon?.img) }, method: r.method || "—", caught: !!caught[nm] });
    }

    const eligible = rows.filter((r) => r.type !== "choice").filter((r) => meetsRequirements(r, choices));
    const total = eligible.length;
    const caughtCount = eligible.filter((r) => r.pokemon && caught[r.pokemon.name]).length;

    const allChoicesMade = (() => {
      if (!keys.length) return true;
      for (const k of keys) {
        const capN = capMap[k] || CHOICE_DEFAULT_CAP; const cur = choices[k];
        const selCount = Array.isArray(cur) ? cur.length : cur ? 1 : 0;
        if (selCount < capN) return false;
      }
      return true;
    })();

    if (allChoicesMade) out.push({ __kind: "progress", __key: `progress:${groupTitle}`, total, caught: caughtCount });
  }
  return out;
}

/* -----------------------------
 Requirements Check (supports requires and requiresNot)
------------------------------ */
function meetsRequirements(row, choices) {
  if (!row) return true;
  function hasValue(k, v) {
    const need = (v ?? "").toString().trim().toLowerCase();
    const cur = choices[k];
    if (Array.isArray(cur)) return cur.some((x) => (x ?? "").toString().trim().toLowerCase() === need);
    return ((cur ?? "").toString().trim().toLowerCase() === need);
  }
  function passRequires(req) {
    if (!req) return true;
    if (Array.isArray(req)) return req.every((r) => r?.key && hasValue(r.key, r.value));
    if (typeof req === "object") return Object.entries(req).every(([k, v]) => hasValue(k, v));
    return true;
  }
  function passRequiresNot(notReq) {
    if (!notReq) return true;
    if (Array.isArray(notReq)) return notReq.every((r) => r?.key && !hasValue(r.key, r.value));
    if (typeof notReq === "object") return Object.entries(notReq).every(([k, v]) => !hasValue(k, v));
    return true;
  }
  return passRequires(row.requires) && passRequiresNot(row.requiresNot);
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
  const host = el("choice-status"); if (!host) return; host.textContent = "";
  const { choices } = store.getState();
  for (const [key, value] of Object.entries(choices)) {
    const chip = document.createElement("div"); chip.className = "chip";
    let label; label = Array.isArray(value) ? `${cap(key)}: ${value.map((v) => cap(String(v))).join(", ")}` : `${cap(key)}: ${cap(String(value))}`;
    chip.textContent = label;
    const btn = document.createElement("button"); btn.textContent = "Change"; btn.onclick = () => clearChoice(key);
    chip.appendChild(btn); host.appendChild(chip);
  }
}

/* -----------------------------
 Row Factories
------------------------------ */
function trHeader(row) {
  const tr = document.createElement("tr"); tr.className = "section-header";
  const td = document.createElement("td"); td.colSpan = 3;
  const wrap = document.createElement("div"); wrap.className = "section-header-content";
  if (row.headerImg) { const img = document.createElement("img"); img.className = "section-header-img"; img.src = row.headerImg; img.alt = row.headerImgAlt || ""; wrap.appendChild(img); }
  const title = document.createElement("span"); title.className = "section-header-title"; title.textContent = row.title; wrap.appendChild(title);
  const controls = document.createElement("div"); controls.className = "section-header-controls";
  const btnList = document.createElement("button"); btnList.type = "button"; btnList.className = "view-btn view-list"; btnList.textContent = "List"; btnList.onclick = () => setViewMode("list");
  const btnGrid = document.createElement("button"); btnGrid.type = "button"; btnGrid.className = "view-btn view-grid"; btnGrid.textContent = "Grid"; btnGrid.onclick = () => setViewMode("grid");
  controls.append(btnList, btnGrid); wrap.appendChild(controls); td.appendChild(wrap); tr.appendChild(td); return tr;
}
function trSummary(row) {
  const tr = document.createElement("tr"); tr.className = "section-summary";
  const td = document.createElement("td"); td.colSpan = 3;
  const wrap = document.createElement("div"); wrap.className = "summary-block";
  if (row.short) { const short = document.createElement("div"); short.className = "summary-short"; short.textContent = row.short; wrap.appendChild(short); }
  if (row.html) { const details = document.createElement("details"); details.className = "summary-accordion"; if (row.open) details.setAttribute("open", ""); const sum = document.createElement("summary"); sum.textContent = "More info"; const long = document.createElement("div"); long.className = "summary-long"; long.innerHTML = row.html; details.append(sum, long); wrap.appendChild(details); }
  td.appendChild(wrap); tr.appendChild(td); return tr;
}
function trChoiceSubheader(row) { const tr = document.createElement("tr"); tr.className = "choice-subheader-row"; const td = document.createElement("td"); td.colSpan = 3; td.textContent = row.label; tr.appendChild(td); return tr; }
function trChoice(row) {
  const tr = document.createElement("tr"); tr.className = "row-choice compact-band";
  if (row.groupRunStart) tr.classList.add("choice-group-start");
  if (row.groupRunEnd) tr.classList.add("choice-group-end");
  const tdP = document.createElement("td"); const wrap = document.createElement("div"); wrap.className = "pkm";
  const img = document.createElement("img"); img.src = row.pokemon.img; img.alt = row.pokemon.name || "Choice";
  const name = document.createElement("span"); name.textContent = row.pokemon.name || "Choice";
  wrap.append(img, name); tdP.appendChild(wrap);
  const tdM = document.createElement("td"); tdM.textContent = row.method || "Pick an option";
  const tdA = document.createElement("td"); tdA.className = "center"; // empty
  tr.append(tdP, tdM, tdA);
  tr.addEventListener("click", () => {
    const disabled = isChoiceDisabled(row.cap, row.choiceKey, row.choiceValue);
    if (disabled) return;
    if ((row.cap || CHOICE_DEFAULT_CAP) === 1) setChoice(row.choiceKey, row.choiceValue);
    else toggleChoiceMulti(row.choiceKey, row.choiceValue, row.cap);
  });
  return tr;
}
function trPokemon(row) {
  const tr = document.createElement("tr"); tr.className = "row-normal pkm-node"; tr.dataset.name = row.pokemon.name; if (row.caught) tr.classList.add("is-caught");
  const tdP = document.createElement("td"); const wrap = document.createElement("div"); wrap.className = "pkm";
  const sprite = document.createElement("img"); sprite.src = row.pokemon.img; sprite.alt = row.pokemon.name || "Pokémon";
  const name = document.createElement("span"); name.textContent = row.pokemon.name || "Unknown";
  wrap.append(sprite, name); tdP.appendChild(wrap);
  const tdM = document.createElement("td"); tdM.textContent = row.method;
  const tdC = document.createElement("td"); tdC.className = "center";
  const btn = document.createElement("button"); btn.type = "button"; btn.className = "catch-btn";
  const mark = document.createElement("img"); mark.className = "catch-mark"; mark.alt = row.caught ? "Caught" : "Uncaught"; mark.src = row.caught ? POKEBALL_CAUGHT : POKEBALL_UNCAUGHT;
  btn.appendChild(mark);
  btn.addEventListener("click", (e) => { e.stopPropagation(); toggleCaught(row.pokemon.name); });
  tr.addEventListener("click", (e) => { if (!btn.contains(e.target)) toggleCaught(row.pokemon.name); });
  tdC.appendChild(btn); tr.append(tdP, tdM, tdC); return tr;
}
function trProgress(row) {
  const tr = document.createElement("tr"); tr.className = "section-progress progress-row";
  const td = document.createElement("td"); td.colSpan = 3;
  const bar = document.createElement("div"); bar.className = "progress-bar";
  const fill = document.createElement("div"); fill.className = "progress-fill";
  const pct = row.total ? Math.max(0, Math.min(100, Math.round((row.caught / row.total) * 100))) : 0;
  fill.classList.add(`w-${pct}`);
  bar.appendChild(fill);
  const label = document.createElement("div"); label.className = "progress-label"; label.textContent = `${row.caught} / ${row.total} caught`;
  td.appendChild(bar); td.appendChild(label); tr.appendChild(td); return tr;
}

/* -----------------------------
 Grid Renderer (Group)
------------------------------ */
function trGrid(row) {
  const tr = document.createElement("tr"); tr.className = "grid-row";
  const td = document.createElement("td"); td.colSpan = 3;
  const grid = document.createElement("div"); grid.className = "group-grid";
  row.items.forEach((it, i) => {
    const card = document.createElement("div"); card.className = "pkm-card pkm-node"; card.dataset.idx = String(i); card.dataset.name = it.name; if (it.caught) card.classList.add("is-caught"); card.tabIndex = 0;
    const thumb = document.createElement("div"); thumb.className = "pkm-card-thumb";
    const img = document.createElement("img"); img.className = "pkm-card-sprite"; img.src = it.img; img.alt = it.name;
    const dot = document.createElement("img"); dot.className = "catch-mark"; dot.alt = it.caught ? "Caught" : "Uncaught"; dot.src = it.caught ? POKEBALL_CAUGHT : POKEBALL_UNCAUGHT;
    thumb.append(img, dot);
    const label = document.createElement("div"); label.className = "pkm-card-name"; label.textContent = it.name;
    card.append(thumb, label);
    const toggle = () => toggleCaught(it.name);
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    grid.appendChild(card);
  });
  td.appendChild(grid); tr.appendChild(td); return tr;
}

/* -----------------------------
 Grid Justification
------------------------------ */
function adjustGridJustification() {
  const grids = document.querySelectorAll(".group-grid"); if (!grids.length) return;
  grids.forEach((grid) => {
    const cards = grid.querySelectorAll(".pkm-card"); if (cards.length <= 1) { stripGapClass(grid); return; }
    const style = getComputedStyle(grid); const baseGap = parseFloat(style.gap) || 12; const gridW = Math.floor(grid.clientWidth);
    const sample = grid.querySelector(".pkm-card"); if (!sample) { stripGapClass(grid); return; }
    const cardW = Math.ceil(sample.getBoundingClientRect().width);
    const cols = Math.max(1, Math.floor((gridW + baseGap) / (cardW + baseGap)));
    const rows = Math.ceil(cards.length / cols);
    if (rows <= 1) { stripGapClass(grid); return; }
    const exactGap = (gridW - cols * cardW) / Math.max(1, cols - 1); const gap = Math.round(exactGap);
    const used = cols * cardW + (cols - 1) * gap; const remaining = gridW - used;
    if (remaining < cardW && gap > baseGap) { const clamped = Math.max(4, Math.min(32, gap)); applyGapClass(grid, clamped); }
    else { stripGapClass(grid); }
  });
}
function applyGapClass(grid, px) { stripGapClass(grid); grid.classList.add(`gap-${px}`); }
function stripGapClass(grid) { for (let i = 4; i <= 32; i++) grid.classList.remove(`gap-${i}`); }

/* -----------------------------
 View Model Transform
------------------------------ */
function modelForView(model) {
  if (VIEW_MODE !== "grid") return model;
  const out = []; let bucket = [];
  function flushBucket() { if (!bucket.length) return; out.push({ __kind: "grid", __key: `grid:${out.length}`, items: bucket.map((r) => ({ name: r.pokemon.name, img: r.pokemon.img, caught: !!r.caught })) }); bucket = []; }
  for (const row of model) { if (row.__kind === "pokemon") { bucket.push(row); continue; } flushBucket(); out.push(row); }
  flushBucket(); return out;
}

/* -----------------------------
 Unified Capture/Choice UI Updater
------------------------------ */
function updateCaptureUI() {
  const { caught } = store.getState();
  const nodes = document.querySelectorAll(".pkm-node[data-name]");
  nodes.forEach((node) => {
    const name = node.dataset.name || ""; const isCaught = !!caught[name];
    node.classList.toggle("is-caught", isCaught);
    const mark = node.querySelector(".catch-mark"); if (mark) { mark.src = isCaught ? POKEBALL_CAUGHT : POKEBALL_UNCAUGHT; mark.alt = isCaught ? "Caught" : "Uncaught"; }
  });
}

/* -----------------------------
 Diffing Renderer (animated)
------------------------------ */
const renderCtx = { keyOrder: [], rowNodes: new Map() };
function render() {
  ensureDataOrExplain(); renderChoiceStatus();
  const model = buildModel(); const viewModel = modelForView(model);
  const tbody = tbodyEl(); if (!tbody) return;
  const tbl = el("pokemon-table"); tbl?.classList.toggle("has-data", model.some((r) => r.__kind === "pokemon" || r.__kind === "choice"));
  const newKeys = viewModel.map((m) => m.__key);
  const sameShape = newKeys.length === renderCtx.keyOrder.length && newKeys.every((k, i) => k === renderCtx.keyOrder[i]);

  if (!sameShape) {
    const existing = renderCtx.rowNodes; const toKeep = new Set(newKeys); const exitNodes = [];
    for (const [oldKey, tr] of existing.entries()) {
      if (!toKeep.has(oldKey)) {
        tr.classList.add("row-exit");
        const h = tr.getBoundingClientRect().height; tr.style.height = h + "px"; tr.style.opacity = "1"; void tr.offsetHeight; tr.style.height = "0px"; tr.style.opacity = "0";
        exitNodes.push({ key: oldKey, tr });
      }
    }
    const ensureNodeFor = (row) => {
      let tr = existing.get(row.__key);
      if (tr) return tr;
      if (row.__kind === "header") tr = trHeader(row);
      else if (row.__kind === "summary") tr = trSummary(row);
      else if (row.__kind === "choiceSubheader") tr = trChoiceSubheader(row);
      else if (row.__kind === "choice") tr = trChoice(row);
      else if (row.__kind === "grid") tr = trGrid(row);
      else if (row.__kind === "pokemon") tr = trPokemon(row);
      else if (row.__kind === "progress") tr = trProgress(row);
      if (!tr) return null;
      tr.dataset.key = row.__key; tr.classList.add("row-enter"); requestAnimationFrame(() => tr.classList.add("row-enter-active"));
      existing.set(row.__key, tr); if (row.__kind === "choice") syncChoiceRowState(tr, row); return tr;
    };
    const anchor = { node: null };
    for (const row of viewModel) {
      const tr = ensureNodeFor(row); if (!tr) continue;
      if (tr.parentNode !== tbody) {
        if (anchor.node && anchor.node.nextSibling) tbody.insertBefore(tr, anchor.node.nextSibling);
        else if (!anchor.node && tbody.firstChild) tbody.insertBefore(tr, tbody.firstChild);
        else tbody.appendChild(tr);
      } else {
        const shouldBeAfter = anchor.node; if (shouldBeAfter && tr.previousSibling !== shouldBeAfter) tbody.insertBefore(tr, shouldBeAfter.nextSibling);
      }
      anchor.node = tr;
    }
    for (const row of viewModel) { if (row.__kind !== "choice") continue; const tr = renderCtx.rowNodes.get(row.__key); syncChoiceRowState(tr, row); }
    exitNodes.forEach(({ key, tr }) => { const done = () => { tr.removeEventListener("transitionend", done); tr.remove(); existing.delete(key); }; tr.addEventListener("transitionend", done); });
    renderCtx.keyOrder = newKeys; updateCaptureUI(); adjustGridJustification(); StickyHeader.update(); syncViewButtons(); return;
  }

  for (const row of viewModel) {
    const tr = renderCtx.rowNodes.get(row.__key); if (!tr) continue;
    if (row.__kind === "choice") syncChoiceRowState(tr, row);
    if (row.__kind === "progress") {
      const fill = tr.querySelector(".progress-fill"); const label = tr.querySelector(".progress-label");
      if (fill) { const pct = row.total ? Math.max(0, Math.min(100, Math.round((row.caught / row.total) * 100))) : 0; fill.className = fill.className.replace(/\bw-\d+\b/g, "").trim(); fill.classList.add(`w-${pct}`); }
      if (label) label.textContent = `${row.caught} / ${row.total} caught`;
    }
  }
  updateCaptureUI(); adjustGridJustification(); StickyHeader.update(); syncViewButtons();
}

/* -----------------------------
 Boot
------------------------------ */
function boot() {
  setGameHeader(); renderGameTips(); loadPersisted(); render(); StickyHeader.init();
  window.addEventListener("resize", adjustGridJustification, { passive: true });
  store.subscribe(() => { render(); StickyHeader.update(); });
  const resetBtn = document.getElementById("reset-all");
  resetBtn?.addEventListener("click", () => { if (confirm("Reset all choices and caught progress?")) resetAll(); });
}
document.addEventListener("DOMContentLoaded", boot);
