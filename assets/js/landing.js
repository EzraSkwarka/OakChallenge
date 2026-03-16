/* Two-grid landing with:
   - Default (no query): available -> top grid, not available -> lower grid
   - With query: matches -> top grid, non-matches -> lower grid
   - Fixed 3-col layout handled in CSS (no resizing of cards)
   - Arrow-key navigation across both grids
   - Whole-card click for available entries
*/
const MANIFEST_URL = "/data/manifest.games.json";
const PLACEHOLDER = "/assets/images/covers/placeholder.png";

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  return n;
};

let ALL_GAMES = [];
let LAST_QUERY = "";

const normalize = (s) => (s ?? "").toString().trim().toLowerCase();

/* -----------------------------
 Card Component
------------------------------ */
function buildCard(game) {
  const available = !!game.available;
  const card = el("article", "game-card");

  card.setAttribute("tabindex", "0");
  card.setAttribute("role", available ? "link" : "group");

  if (!available) card.classList.add("is-disabled");

  if (available && game.href) {
    card.dataset.href = game.href;
  } else {
    card.setAttribute("aria-disabled", "true");
    card.title = "Coming soon";
  }

  const coverWrap = el("div", "cover-wrap");
  const img = el("img", "game-cover");

  img.loading = "lazy";
  img.alt = `${game.name} cover`;
  img.src = game.cover || PLACEHOLDER;

  coverWrap.appendChild(img);

  const body = el("div", "card-body");
  const name = el("div", "game-name");
  const sub = el("div", "game-sub");
  const notes = el("div", "game-notes");

  name.textContent = game.name || game.id;
  sub.textContent = `${game.region || "—"} • ${game.gen || "—"}`;
  notes.textContent = game.notes || "";

  body.append(name, sub, notes);

  if (available && game.href) {
    const a = el("a", "card-link");
    a.href = game.href;
    a.setAttribute("aria-label", `Open ${game.name}`);
    card.appendChild(a);
  } else {
    const badge = el("div", "coming-badge");
    const overlay = el("div", "coming-overlay");
    badge.textContent = "Coming soon";
    card.append(badge, overlay);
  }

  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const href = card.dataset.href;
      if (href) {
        e.preventDefault();
        window.location.href = href;
      }
    } else if (e.key.startsWith("Arrow")) {
      handleArrowNav(e, card);
    }
  });

  card.append(coverWrap, body);
  return card;
}

/* -----------------------------
 Rendering Helpers
------------------------------ */
function renderGrid(container, items) {
  container.textContent = "";
  const frag = document.createDocumentFragment();
  for (const g of items) frag.appendChild(buildCard(g));
  container.appendChild(frag);
}

function updateSectionVisibility(primary, secondary, hasQuery) {
  const primaryWrap = $("#primary-wrap");
  const primaryTitle = $("#primary-title");
  const secondaryWrap = $("#secondary-wrap");
  const secondaryTitle = $("#secondary-title");

  primaryTitle.hidden = !hasQuery;
  secondaryTitle.hidden = !hasQuery;

  primaryWrap.hidden = primary.length === 0;
  secondaryWrap.hidden = secondary.length === 0;
}

function focusFirstAvailableCard() {
  const all = getFocusableCards();
  if (all.length && (!document.activeElement || document.activeElement === document.body)) {
    all[0].focus();
  }
}

function getFocusableCards() {
  const top = Array.from(document.querySelectorAll("#grid .game-card:not(.is-disabled)"));
  const bottom = Array.from(document.querySelectorAll("#grid-secondary .game-card:not(.is-disabled)"));
  return [...top, ...bottom];
}

function getGridCols(gridEl) {
  if (!gridEl) return 1;
  const cols = getComputedStyle(gridEl).gridTemplateColumns;
  return cols ? cols.split(" ").filter(Boolean).length || 1 : 1;
}

function handleArrowNav(e, currentCard) {
  const topGrid = $("#grid");
  const botGrid = $("#grid-secondary");

  const topCards = Array.from(topGrid.querySelectorAll(".game-card:not(.is-disabled)"));
  const botCards = Array.from(botGrid.querySelectorAll(".game-card:not(.is-disabled)"));

  const inTop = topCards.includes(currentCard);
  const cards = inTop ? topCards : botCards;
  const gridEl = inTop ? topGrid : botGrid;

  let idx = cards.indexOf(currentCard);
  if (idx === -1) return;

  const cols = getGridCols(gridEl);
  let targetIdx = idx;

  switch (e.key) {
    case "ArrowRight":
      targetIdx = Math.min(idx + 1, cards.length - 1);
      break;
    case "ArrowLeft":
      targetIdx = Math.max(idx - 1, 0);
      break;
    case "ArrowDown":
      targetIdx = idx + cols;
      if (targetIdx >= cards.length && inTop && botCards.length) {
        e.preventDefault();
        botCards[0].focus();
        return;
      }
      targetIdx = Math.min(targetIdx, cards.length - 1);
      break;
    case "ArrowUp":
      targetIdx = idx - cols;
      if (targetIdx < 0 && !inTop && topCards.length) {
        e.preventDefault();
        const tCols = getGridCols(topGrid);
        const lastRowStart = Math.floor((topCards.length - 1) / tCols) * tCols;
        const col = idx % cols;
        topCards[Math.min(lastRowStart + col, topCards.length - 1)].focus();
        return;
      }
      targetIdx = Math.max(targetIdx, 0);
      break;
    default:
      return;
  }

  if (targetIdx !== idx) {
    e.preventDefault();
    cards[targetIdx].focus();
  }
}

/* -----------------------------
 Partition Logic
------------------------------ */
function partitionDefault(games) {
  const top = [];
  const bottom = [];
  for (const g of games) (g.available ? top : bottom).push(g);
  return { primary: top, secondary: bottom };
}

function partitionByQuery(games, query) {
  const q = normalize(query);
  if (!q) return partitionDefault(games);

  const matches = [];
  const others = [];

  for (const g of games) {
    const isMatch = normalize(g.name).includes(q) || normalize(g.region).includes(q) || normalize(g.gen).includes(q);

    (isMatch ? matches : others).push(g);
  }

  return { primary: matches, secondary: others };
}

/* -----------------------------
 Search Bindings & Boot
------------------------------ */
function bindSearch() {
  const input = $("#search");
  if (!input) return;

  let t = null;

  input.addEventListener("input", () => {
    clearTimeout(t);
    t = setTimeout(() => {
      LAST_QUERY = input.value || "";
      renderFromQuery(LAST_QUERY);
    }, 120);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      input.value = "";
      LAST_QUERY = "";
      renderFromQuery("");
      input.blur();
    }
  });
}

function renderFromQuery(query) {
  const primaryGrid = $("#grid");
  const secondaryGrid = $("#grid-secondary");

  const { primary, secondary } = partitionByQuery(ALL_GAMES, query);

  renderGrid(primaryGrid, primary);
  renderGrid(secondaryGrid, secondary);

  updateSectionVisibility(primary, secondary, normalize(query).length > 0);
  focusFirstAvailableCard();
}

async function loadManifest() {
  const res = await fetch(MANIFEST_URL, { cache: "no-cache" });
  if (!res.ok) throw new Error(`Failed to load manifest (${res.status})`);

  const data = await res.json();
  if (!data || !Array.isArray(data.games)) {
    throw new Error("Invalid manifest format");
  }

  return data.games;
}

async function boot() {
  const fallback = $("#grid-fallback");
  const gridTop = $("#grid");
  const gridBot = $("#grid-secondary");

  function attachGridClick(gridEl) {
    gridEl.addEventListener("click", (e) => {
      const card = e.target.closest(".game-card");
      if (!card) return;
      const href = card.dataset && card.dataset.href;
      if (href) window.location.href = href;
    });
  }

  try {
    ALL_GAMES = await loadManifest();

    ALL_GAMES.sort((a, b) => {
      const ga = (a.gen || "").replace(/[^0-9]/g, "") || "0";
      const gb = (b.gen || "").replace(/[^0-9]/g, "") || "0";
      if (ga !== gb) return Number(ga) - Number(gb);
      return (a.name || a.id).localeCompare(b.name || b.id);
    });

    bindSearch();
    attachGridClick(gridTop);
    attachGridClick(gridBot);

    renderFromQuery("");
  } catch {
    if (fallback) fallback.hidden = false;
  }
}

document.addEventListener("DOMContentLoaded", boot);