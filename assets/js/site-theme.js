/**
 * Theme State Manager
 *
 * This file manages global light/dark theme state for the site.
 * It applies the active theme to the document root and persists
 * the user’s preference across sessions.
 *
 * It has no knowledge of page content or layout.
 */

(function () {
  const LS_KEY = "site-theme";
  const root = document.documentElement;

  function readTheme() {
    const attr = root.getAttribute("data-theme");
    if (attr === "dark" || attr === "light") return attr;
    const saved = localStorage.getItem(LS_KEY);
    if (saved === "dark" || saved === "light") return saved;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  function labelFor(theme) {
    return theme === "dark" ? "Dark Mode" : "Light Mode";
  }

  function applyTheme(theme) {
    const t = theme === "dark" ? "dark" : "light";

    // Attributes for :root/body attribute selectors
    root.setAttribute("data-theme", t);
    document.body.setAttribute("data-theme", t);

    // Classes for .dark/.light selectors
    root.classList.toggle("dark", t === "dark");
    root.classList.toggle("light", t === "light");
    document.body.classList.toggle("dark", t === "dark");
    document.body.classList.toggle("light", t === "light");

    // Persist
    localStorage.setItem(LS_KEY, t);

    // Button state (all theme buttons)
    const isDark = t === "dark";
    document.querySelectorAll(".theme-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(isDark));
      btn.textContent = labelFor(t);
    });

    // Broadcast for any listeners (optional)
    window.dispatchEvent(
      new CustomEvent("themechange", { detail: { theme: t } })
    );
  }

  function toggleTheme() {
    const current = readTheme();
    applyTheme(current === "dark" ? "light" : "dark");
  }

  function init() {
    applyTheme(readTheme());
  }

  // Delegated click so late-injected headers work
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".theme-btn");
    if (!btn) return;
    e.preventDefault();
    toggleTheme();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  // One-time sync hook for the injector
  window.ThemeUI = Object.assign({}, window.ThemeUI, {
    sync: () => applyTheme(readTheme()),
  });
})();
