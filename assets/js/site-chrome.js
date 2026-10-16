/**
 * Site Chrome Injector
 *
 * Injects the shared header, footer, styles, and global scripts used
 * throughout Oak Challenge. Header-specific behavior is initialized
 * after the shared header markup has been added to the page.
 */

(function () {
  const HEADER_PATH = "OakChallenge/partials/header.html";
  const FOOTER_PATH = "OakChallenge/partials/footer.html";
  const RECENT_GAME_KEY = "oak-recent-game";

  const CSS_INCLUDES = [
    "OakChallenge/assets/css/base.css",
    "OakChallenge/assets/css/chrome.css",
    "OakChallenge/assets/css/tracker.css",
    "OakChallenge/assets/css/sticky-header.css",
    "OakChallenge/assets/css/icons.css",
    "OakChallenge/assets/css/tracker-extensions.css",
  ];

  const JS_INCLUDES = ["OakChallenge/assets/js/site-theme.js", "OakChallenge/assets/js/sticky-header.js"];

  function ensureHost(id, parent, position) {
    let host = document.getElementById(id);

    if (!host) {
      host = document.createElement("div");
      host.id = id;
      (parent || document.body)[position || "prepend"](host);
    }

    return host;
  }

  function abs(path) {
    try {
      return new URL(path, window.location.origin).toString();
    } catch {
      return path;
    }
  }

  function getRecentGame() {
    try {
      return JSON.parse(localStorage.getItem(RECENT_GAME_KEY) || "null");
    } catch {
      return null;
    }
  }

  function renderRecentGameLinks(host) {
    const recentGame = getRecentGame();

    const containers = [host.querySelector("#recent-game-link-drawer"), host.querySelector("#recent-game-link-menu")];

    containers.forEach((container) => {
      if (!container) {
        return;
      }

      container.replaceChildren();

      if (!recentGame?.href || !recentGame?.title) {
        return;
      }

      const link = document.createElement("a");

      link.href = recentGame.href;
      link.className = "menu-link recent-game-link";
      link.textContent = `Continue: ${recentGame.title}`;

      container.appendChild(link);
    });
  }

  function saveCurrentGame(host) {
    const gameData = window.gameData;

    if (!gameData?.gameId || !gameData?.gameTitle || !gameData?.progression) {
      return false;
    }

    localStorage.setItem(
      RECENT_GAME_KEY,
      JSON.stringify({
        gameId: gameData.gameId,
        title: gameData.gameTitle,
        href: window.location.pathname + window.location.search + window.location.hash,
      }),
    );

    renderRecentGameLinks(host);

    return true;
  }

  function waitForCurrentGame(host, attempts = 50) {
    if (saveCurrentGame(host) || attempts <= 0) {
      return;
    }

    window.setTimeout(() => waitForCurrentGame(host, attempts - 1), 100);
  }

  function ensureHeadLink(href) {
    const head = document.head || document.getElementsByTagName("head")[0];

    const url = abs(href);

    const exists = Array.from(head.querySelectorAll('link[rel="stylesheet"]')).some((link) => (link.href || "").split("#")[0] === url);

    if (exists) {
      return;
    }

    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = url;

    head.appendChild(link);
  }

  function ensureHeadScript(src) {
    const head = document.head || document.getElementsByTagName("head")[0];

    const url = abs(src);

    const exists = Array.from(head.querySelectorAll("script")).some((script) => (script.src || "").split("#")[0] === url);

    if (exists) {
      return;
    }

    const script = document.createElement("script");

    script.src = url;
    script.async = false;

    head.appendChild(script);
  }

  function initializeDrawer(host) {
    const menuBtn = host.querySelector(".menu-btn");
    const drawer = host.querySelector("#site-drawer");
    const backdrop = host.querySelector(".menu-backdrop");
    const closeBtn = host.querySelector(".drawer-close");

    if (!menuBtn || !drawer || !backdrop) {
      return;
    }

    let closeTimer = null;
    let previouslyFocused = null;

    function clearCloseTimer() {
      if (closeTimer === null) {
        return;
      }

      window.clearTimeout(closeTimer);
      closeTimer = null;
    }

    function positionDrawer() {
      const buttonRect = menuBtn.getBoundingClientRect();

      drawer.style.setProperty("--drawer-anchor-top", `${buttonRect.top}px`);

      drawer.style.setProperty("--drawer-anchor-right", `${Math.max(8, window.innerWidth - buttonRect.right)}px`);
    }

    function finishClose() {
      if (drawer.classList.contains("is-open")) {
        return;
      }

      drawer.hidden = true;
      backdrop.hidden = true;
      document.body.style.overflow = "";

      clearCloseTimer();
    }

    function openDrawer() {
      clearCloseTimer();

      previouslyFocused = document.activeElement;

      positionDrawer();

      drawer.hidden = false;
      backdrop.hidden = false;

      menuBtn.setAttribute("aria-expanded", "true");

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          drawer.classList.add("is-open");
          backdrop.classList.add("is-open");
        });
      });
    }

    function closeDrawer() {
      if (drawer.hidden) {
        return;
      }

      drawer.classList.remove("is-open");
      backdrop.classList.remove("is-open");

      menuBtn.setAttribute("aria-expanded", "false");

      closeTimer = window.setTimeout(finishClose, 180);

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      } else {
        menuBtn.focus();
      }
    }

    function toggleDrawer(event) {
      event.stopPropagation();

      if (drawer.classList.contains("is-open")) {
        closeDrawer();
      } else {
        openDrawer();
      }
    }

    function handleDocumentClick(event) {
      if (drawer.hidden) {
        return;
      }

      if (drawer.contains(event.target) || menuBtn.contains(event.target)) {
        return;
      }

      closeDrawer();
    }

    function handleKeydown(event) {
      if (event.key !== "Escape" || drawer.hidden) {
        return;
      }

      closeDrawer();
      menuBtn.focus();
    }

    function handleViewportChange() {
      if (!drawer.hidden) {
        positionDrawer();
      }
    }

    menuBtn.addEventListener("click", toggleDrawer);
    closeBtn?.addEventListener("click", closeDrawer);
    backdrop.addEventListener("click", closeDrawer);

    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeydown);
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, {
      passive: true,
    });
  }

  async function inject(id, url) {
    const host = ensureHost(id);

    try {
      const response = await fetch(abs(url), {
        cache: "no-cache",
      });

      if (!response.ok) {
        throw new Error(`Unable to load ${url}`);
      }

      host.innerHTML = await response.text();

      if (id === "site-header-host") {
        applyLocalOnlyLinks(host);
        renderRecentGameLinks(host);
        initializeDrawer(host);
        waitForCurrentGame(host);
      }

      if (window.ThemeUI && typeof window.ThemeUI.sync === "function") {
        window.ThemeUI.sync();
      }
    } catch (error) {
      console.error(error);
    }
  }

  function applyLocalOnlyLinks(host) {
    const isLocalhost = location.hostname === "localhost" || location.hostname === "127.0.0.1";

    const containers = ["#local-dev-links-drawer", "#local-dev-links-menu"];

    containers.forEach((selector) => {
      const container = host.querySelector(selector);

      if (!container) {
        return;
      }

      if (!isLocalhost) {
        container.remove();
        return;
      }

      const link = document.createElement("a");

      link.href = "pages/tools/choiceblockbuilder.html";
      link.className = "menu-link";
      link.textContent = "Progression Builder";

      container.replaceChildren(link);
    });
  }

  function initializeChrome() {
    CSS_INCLUDES.forEach(ensureHeadLink);

    JS_INCLUDES.forEach(ensureHeadScript);

    const body = document.body;

    ensureHost("site-header-host", body, "prepend");

    ensureHost("site-footer-host", body, "append");

    inject("site-header-host", HEADER_PATH);

    inject("site-footer-host", FOOTER_PATH);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeChrome);
  } else {
    initializeChrome();
  }
})();
