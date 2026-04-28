// console.log("[iframe] oak-preview-bridge loaded");

// window.addEventListener("message", e => {
//     console.log("[iframe] message received:", e.data);
// });


// let previewMsgCount = 0;

// window.addEventListener("message", e => {
//     if (e.data?.type === "oak-preview") {
//         previewMsgCount++;
//         console.log(
//             `[oak-preview] message #${previewMsgCount}`,
//             JSON.stringify(e.data.payload, null, 2)
//         );
//     }
// });

window.__OAK_PREVIEW_READY = false;

function initPreviewTracker(data) {
    window.gameData = data;
    window.__OAK_PREVIEW_READY = true;
    initOakTracker();
}



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
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
}


/* Remember last theme so we can reapply on reload */
let currentTheme = null;

/* Message handler */
window.addEventListener("message", e => {
    if (!e.data || !e.data.type) return;

    if (e.data.type === "oak-preview-theme") {
        currentTheme = e.data.theme || "light";
        applyTheme(currentTheme);
        return;
    }
if (e.data.type === "oak-preview") {
    const { payload, theme } = e.data;

    if (theme) {
        currentTheme = theme;
        applyTheme(theme);
    }

    const section = payload.badgeGroups?.[0];
    if (!section) return;

    const gd = window.gameData;

    gd.gameId = payload.game.gameId;
    gd.gameTitle = payload.game.gameTitle;
    gd.logo = payload.game.logo;
    gd.imgBasehref = payload.game.imgBasehref;
    gd.badgeBasehref = payload.game.badgeBasehref;
    gd.aboutHtml = payload.game.aboutHtml;

    gd.progression[section.key] = section;

    window.forceRerender?.();
}


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
