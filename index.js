/* Two-grid landing with:
   - Default (no query): available -> top grid, not available -> lower grid
   - With query: matches -> top grid, non-matches -> lower grid
   - Fixed 3-col layout handled in CSS (no resizing of cards)
   - Arrow-key navigation across both grids
   - Whole-card click for available entries
*/
const MANIFEST_URL = "./games.json";
const PLACEHOLDER = "./images/covers/placeholder.png";

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  return n;
};

let ALL_GAMES = [];
let LAST_QUERY = "";

const normalize = (s) => (s || "").toString().trim().toLowerCase();

/* -----------------------------
   Card Component
------------------------------ */
function buildCard(game) {
  const available = !!game.available;
  const card = el("article", "game-card");
  card.setAttribute("tabindex", "0"); // focusable for arrow navigation
  card.setAttribute("role", available ? "link" : "group");
  if (!available) card.classList.add("is-disabled");

  // Store href on the card for keyboard activation
  if (available && game.href) {
    card.dataset.href = game.href;
  } else {
    card.setAttribute("aria-disabled", "true");
    card.title = "Coming soon";
  }

  // Cover slot (size/ratio controlled via CSS)
  const coverWrap = el("div", "cover-wrap");
  const img = el("img", "game-cover");
  img.loading = "lazy";
  img.alt = `${game.name} cover`;
  img.src = game.cover || PLACEHOLDER;
  coverWrap.appendChild(img);

  // Body
  const body = el("div", "card-body");
  const name = el("div", "game-name");
  name.textContent = game.name || game.id;
  const sub = el("div", "game-sub");
  sub.textContent = `${game.region || "—"} • ${game.gen || "—"}`;
  const notes = el("div", "game-notes");
  notes.textContent = game.notes || "";
  body.append(name, sub, notes);

  // Whole-card link overlay (pointer users)
  if (available && game.href) {
    const a = el("a", "card-link");
    a.href = game.href;
    a.setAttribute("aria-label", `Open ${game.name}`);
    card.appendChild(a);
  } else {
    const badge = el("div", "coming-badge");
    badge.textContent = "Coming soon";
    const overlay = el("div", "coming-overlay");
    card.append(badge, overlay);
  }

  // Keyboard: Enter/Space opens; Arrows navigate grids
  card.addEventListener("keydown", (e) => {
    const key = e.key;
    if (key === "Enter" || key === " ") {
      const href = card.dataset.href;
      if (href) {
        e.preventDefault();
        window.location.href = href;
      }
    } else if (key.startsWith("Arrow")) {
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

/**
 * Controls visibility of titles/sections:
 * - Without query: we hide titles; show both sections if they have items
 * - With query: show titles; secondary shows only if it has items
 */
function updateSectionVisibility(primary, secondary, hasQuery) {
  const primaryWrap = $("#primary-wrap");
  const primaryTitle = $("#primary-title");
  const secondaryWrap = $("#secondary-wrap");
  const secondaryTitle = $("#secondary-title");

  // When searching: show titles. When not: hide titles.
  primaryTitle.hidden = !hasQuery;
  secondaryTitle.hidden = !hasQuery;

  // Show wrap if it has content
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

/* Determine how many columns the grid currently has (we fixed to 3, but compute anyway) */
function getGridCols(gridEl) {
  if (!gridEl) return 1;
  const style = getComputedStyle(gridEl);
  const cols = style.gridTemplateColumns;
  if (!cols) return 1;
  return cols.split(" ").filter(Boolean).length || 1;
}

function handleArrowNav(e, currentCard) {
  const topGrid = $("#grid");
  const botGrid = $("#grid-secondary");

  const topCards = Array.from(topGrid.querySelectorAll(".game-card:not(.is-disabled)"));
  const botCards = Array.from(botGrid.querySelectorAll(".game-card:not(.is-disabled)"));

  const inTop = topCards.includes(currentCard);
  const inBot = botCards.includes(currentCard);

  let cards = inTop ? topCards : botCards;
  let gridEl = inTop ? topGrid : botGrid;
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
      if (targetIdx >= cards.length) {
        if (inTop && botCards.length) {
          e.preventDefault();
          botCards[0].focus();
          return;
        }
        targetIdx = cards.length - 1;
      }
      break;
    case "ArrowUp":
      targetIdx = idx - cols;
      if (targetIdx < 0) {
        if (inBot && topCards.length) {
          e.preventDefault();
          const tCols = getGridCols(topGrid);
          const lastRowStart = Math.floor((topCards.length - 1) / tCols) * tCols;
          const col = idx % cols; // try to keep similar column
          const candidate = Math.min(lastRowStart + col, topCards.length - 1);
          topCards[candidate].focus();
          return;
        }
        targetIdx = 0;
      }
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
  // No query: available on top, not available on bottom
  const top = [];
  const bottom = [];
  for (const g of games) {
    if (g.available) top.push(g);
    else bottom.push(g);
  }
  return { primary: top, secondary: bottom };
}

function partitionByQuery(games, query) {
  const q = normalize(query);
  if (!q) return partitionDefault(games);

  const matches = [];
  const others = [];
  for (const g of games) {
    const name = normalize(g.name);
    const region = normalize(g.region);
    const gen = normalize(g.gen);
    const isMatch = name.includes(q) || region.includes(q) || gen.includes(q);
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

  // Clear search on Escape
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      input.value = "";
      LAST_QUERY = "";
      renderFromQuery(LAST_QUERY);
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

  const hasQuery = normalize(query).length > 0;
  updateSectionVisibility(primary, secondary, hasQuery);
  focusFirstAvailableCard();
}

async function loadManifest() {
  const res = await fetch(MANIFEST_URL, { cache: "no-cache" });
  if (!res.ok) throw new Error(`Failed to load manifest (${res.status})`);
  const data = await res.json();
  if (!data || !Array.isArray(data.games)) throw new Error("Invalid manifest format");
  return data.games;
}

async function boot() {
  const fallback = $("#grid-fallback");
  const gridTop = $("#grid");
  const gridBot = $("#grid-secondary");

  // Click anywhere on available card (both grids)
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

    // Optional: sort by generation number, then name (keeps order consistent)
    ALL_GAMES.sort((a, b) => {
      const ga = (a.gen || "").replace(/[^0-9]/g, "") || "0";
      const gb = (b.gen || "").replace(/[^0-9]/g, "") || "0";
      if (ga !== gb) return Number(ga) - Number(gb);
      return (a.name || a.id).localeCompare(b.name || b.id);
    });

    bindSearch();
    attachGridClick(gridTop);
    attachGridClick(gridBot);

    // Initial render: available on top, rest on bottom
    renderFromQuery("");
  } catch (err) {
    if (fallback) fallback.hidden = false;
  }
}

document.addEventListener("DOMContentLoaded", boot);
