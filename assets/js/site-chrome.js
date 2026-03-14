/*
  site-chrome.js
  Injects site header/footer and ensures global head includes are present once per page.
  After injection, calls ThemeUI.sync() once so the theme button text/aria match immediately.
  Fixes ensureHost insertion and makes dynamically-added scripts non-async for predictable load.
*/

(function () {
  const HEADER_PATH = "/partials/header.html";
  const FOOTER_PATH = "/partials/footer.html";

  const CSS_INCLUDES = [
    "/assets/css/base.css",
    "/assets/css/chrome.css",
    "/assets/css/tracker.css",
    "/assets/css/sticky-header.css",
    "/assets/css/icons.css",
  ];

  const JS_INCLUDES = [
    // do not self-include this file
    "/assets/js/site-theme.js",
    "/assets/js/sticky-header.js",
  ];

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
    const exists = !!Array.from(
      head.querySelectorAll('link[rel="stylesheet"]')
    ).find((l) => (l.href || "").split("#")[0] === url);
    if (!exists) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      head.appendChild(link);
    }
  }

  function ensureHeadScript(src) {
    const head = document.head || document.getElementsByTagName("head")[0];
    const url = abs(src);
    const exists = !!Array.from(head.querySelectorAll("script")).find(
      (s) => (s.src || "").split("#")[0] === url
    );
    if (!exists) {
      const script = document.createElement("script");
      script.src = url;
      script.async = false; // important: predictable execution order for dynamically added scripts
      head.appendChild(script);
    }
  }

  async function inject(id, url) {
    const host = ensureHost(id);
    try {
      const res = await fetch(abs(url), { cache: "no-cache" });
      if (!res.ok) throw new Error();
      const html = await res.text();
      host.innerHTML = html;

      // One-time post-inject theme button sync (safe no-op if ThemeUI is absent)
      if (window.ThemeUI && typeof window.ThemeUI.sync === "function") {
        window.ThemeUI.sync();
      }
    } catch {}
  }

  document.addEventListener("DOMContentLoaded", () => {
    CSS_INCLUDES.forEach(ensureHeadLink);
    JS_INCLUDES.forEach(ensureHeadScript);

    const body = document.body;
    ensureHost("site-header-host", body, "prepend");
    ensureHost("site-footer-host", body, "append");

    inject("site-header-host", HEADER_PATH);
    inject("site-footer-host", FOOTER_PATH);
  });
})();
