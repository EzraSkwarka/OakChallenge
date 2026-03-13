// /site-chrome.js
(function () {
  const HEADER_PATH = "/partials/header.html";
  const FOOTER_PATH = "/partials/footer.html";

  // Find placeholders or create them if missing (safeguard)
  function ensureHost(id, parent, position) {
    let host = document.getElementById(id);
    if (!host) {
      host = document.createElement("div");
      host.id = id;
      (parent || document.body)[position || "prepend"](host);
    }
    return host;
  }

  // Resolve absolute path for fetch regardless of current page depth
  function abs(path) {
    try {
      return new URL(path, window.location.origin).toString();
    } catch {
      return path; // fallback
    }
  }

  async function inject(id, url) {
    const host = ensureHost(id);
    try {
      const res = await fetch(abs(url), { cache: "no-cache" });
      if (!res.ok) throw new Error(`Failed to load ${url} (${res.status})`);
      const html = await res.text();
      host.innerHTML = html;
    } catch (err) {
      // Non-fatal: leave host empty
      // If you want a visible warning during dev, you can insert a small note here.
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Insert header at the very top of body
    const body = document.body;
    const headerHost = ensureHost("site-header-host", body, "prepend");
    const footerHost = ensureHost("site-footer-host", body, "append");

    // Fetch and inject
    inject("site-header-host", HEADER_PATH);
    inject("site-footer-host", FOOTER_PATH);
  });
})();
