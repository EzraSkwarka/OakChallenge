// console.log("[iframe] oak-preview-bridge loaded");

// window.addEventListener("message", e => {
//   console.log("[iframe] message received:", e.data);
// });

/* ------------------------------------------------------------------
   Preview iframe bridge for Oak Tracker
   ------------------------------------------------------------------ */

/* Disable StickyHeader ONLY inside iframe */
window.StickyHeader = {
    update() { },
    destroy() { }
};

/* Theme handling (matches tracker.css exactly) */
function applyTheme(theme) {
    const root = document.documentElement;
    const body = document.body;

    root.removeAttribute("data-theme");
    body.removeAttribute("data-theme");

    if (theme === "dark") {
        root.setAttribute("data-theme", "dark");
        body.setAttribute("data-theme", "dark");
    }
}

/* Remember last theme so we can reapply on reload */
let currentTheme = null;

/* Message handler */
window.addEventListener("message", e => {
    if (!e.data || !e.data.type) return;

    /* 🔹 Theme-only updates */
    if (e.data.type === "oak-preview-theme") {
        currentTheme = e.data.theme || "light";
        applyTheme(currentTheme);
        return;
    }

    /* 🔹 Full preview update */
    if (e.data.type === "oak-preview") {

        if (e.data.theme) {
            currentTheme = e.data.theme;
            applyTheme(currentTheme);
        }

        const payload = e.data.payload;
        const gd = window.gameData;

        gd.gameId = payload.gameId;
        gd.gameTitle = payload.gameTitle;
        gd.logo = payload.logo;
        gd.imgBasehref = payload.imgBasehref;
        gd.badgeBasehref = payload.badgeBasehref;
        gd.aboutHtml = payload.aboutHtml;

        const target =
            gd.badgeGroups ||
            gd.progression ||
            (gd.progression = {});

        for (const key of Object.keys(target)) {
            delete target[key];
        }

        for (const [key, value] of Object.entries(payload.progression)) {
            target[key] = value;
        }

        if (typeof window.forceRerender === "function") {
            window.forceRerender();
        }
    }

    /* 🔹 Reset */
    if (e.data.type === "oak-preview-reset") {
        if (typeof window.resetAll === "function") {
            window.resetAll();
        } else {
            console.warn("resetAll not available in preview iframe");
        }
    }
});

/* Apply theme again after DOM is ready (iframe reload case) */
document.addEventListener("DOMContentLoaded", () => {
    if (currentTheme) {
        applyTheme(currentTheme);
    }
});

/*ResetAll Button*/
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("reset-preview");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (typeof window.resetAll === "function") {
      window.resetAll();
    } else {
      console.warn("resetAll() not available yet");
    }
  });
});

/* Pingout */
document.addEventListener("DOMContentLoaded", () => {
  parent.postMessage(
    { type: "oak-preview-ready" },
    "*"
  );
});
