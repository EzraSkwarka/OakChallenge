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

  const CSS_INCLUDES = [
    "OakChallenge/assets/css/base.css",
    "OakChallenge/assets/css/chrome.css",
    "OakChallenge/assets/css/tracker.css",
    "OakChallenge/assets/css/sticky-header.css",
    "OakChallenge/assets/css/icons.css",
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

    const drawer = host.querySelector("#site-menu");

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

      drawer.hidden = false;
      backdrop.hidden = false;

      document.body.style.overflow = "hidden";

      menuBtn.setAttribute("aria-expanded", "true");

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          drawer.classList.add("is-open");

          backdrop.classList.add("is-open");

          closeBtn?.focus();
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

      closeTimer = window.setTimeout(finishClose, 350);

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      } else {
        menuBtn.focus();
      }
    }

    function toggleDrawer() {
      if (drawer.classList.contains("is-open")) {
        closeDrawer();
      } else {
        openDrawer();
      }
    }

    function handleTransitionEnd(event) {
      if (event.target !== drawer || event.propertyName !== "transform") {
        return;
      }

      finishClose();
    }

    function handleKeydown(event) {
      if (event.key === "Escape" && !drawer.hidden) {
        closeDrawer();
      }
    }

    menuBtn.addEventListener("click", toggleDrawer);

    closeBtn?.addEventListener("click", closeDrawer);

    backdrop.addEventListener("click", closeDrawer);

    drawer.addEventListener("transitionend", handleTransitionEnd);

    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });

    document.addEventListener("keydown", handleKeydown);
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
        initializeDrawer(host);
      }

      if (window.ThemeUI && typeof window.ThemeUI.sync === "function") {
        window.ThemeUI.sync();
      }
    } catch (error) {
      console.error(error);
    }
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
