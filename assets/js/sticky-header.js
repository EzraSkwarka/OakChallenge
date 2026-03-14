/*
  sticky-header.js
  Fixed-position floating section bar at viewport top with spacer.
  Delegates all view-mode state and highlighting to setViewMode()/syncViewButtons() in oak-tracker.js.
*/

(function (global) {
  const StickyHeader = {
    bar: null,
    spacer: null,
    barH: 0,
    headers: [],
    ticking: 0,
    mo: null,

    /* -----------------------------
        Utilities
      ------------------------------ */
    syncWithTracker() {
      if (typeof global.syncViewButtons === "function") {
        global.syncViewButtons();
      }
    },

    /* -----------------------------
        DOM: ensure bar and spacer
      ------------------------------ */
    ensureBar() {
      if (this.bar) return this.bar;

      const host = document.getElementById("site-header-host");
      const bar = document.createElement("div");
      bar.id = "floating-section";
      bar.className = "floating-section";
      bar.innerHTML = [
        '<div class="floating-section-inner">',
        '<img src="" alt="" hidden />',
        '<span class="section-header-title"></span>',
        '<div class="floating-controls">',
        '<button type="button" class="view-btn view-list">List</button>',
        '<button type="button" class="view-btn view-grid">Grid</button>',
        "</div>",
        "</div>",
      ].join("");

      if (host) host.insertAdjacentElement("afterend", bar);
      else document.body.insertAdjacentElement("afterbegin", bar);

      const spacer = document.createElement("div");
      spacer.className = "floating-section-spacer";
      bar.insertAdjacentElement("afterend", spacer);

      const btnList = bar.querySelector(".view-list");
      const btnGrid = bar.querySelector(".view-grid");
      btnList.onclick = () => {
        if (typeof global.setViewMode === "function")
          global.setViewMode("list");
      };
      btnGrid.onclick = () => {
        if (typeof global.setViewMode === "function")
          global.setViewMode("grid");
      };

      this.bar = bar;
      this.spacer = spacer;

      this.syncWithTracker();
      return bar;
    },

    /* -----------------------------
        Measure
      ------------------------------ */
    measure() {
      const bar = this.ensureBar();
      const rect = bar.getBoundingClientRect();
      this.barH = rect.height || 0;
      document.documentElement.style.setProperty(
        "--floatingBarH",
        this.barH + "px"
      );
    },

    /* -----------------------------
        Capture section headers
      ------------------------------ */
    collectHeaders() {
      const selectors = [
        ".section-header",
        ".subheader-row",
        "[data-section-header='true']",
      ];
      let nodes = [];
      for (let i = 0; i < selectors.length && nodes.length === 0; i++) {
        nodes = Array.from(document.querySelectorAll(selectors[i]));
      }
      this.headers = nodes.filter((el) => el && el.getClientRects().length > 0);
    },

    /* -----------------------------
        Determine current section
      ------------------------------ */
    computeIndex() {
      if (!this.headers.length) return -1;

      const barRect = this.bar.getBoundingClientRect();
      const lineY = barRect.bottom;
      const EPS = 1;

      let current = -1;
      for (let i = 0; i < this.headers.length; i++) {
        const top = this.headers[i].getBoundingClientRect().top;
        if (top <= lineY + EPS) current = i;
        else break;
      }
      return current;
    },

    /* -----------------------------
        Extract display data
      ------------------------------ */
    extractData(sectionEl) {
      const content =
        sectionEl.querySelector(".section-header-content") ||
        sectionEl.querySelector(".subheader-wrap") ||
        sectionEl;

      const titleEl =
        content.querySelector(".section-header-title") ||
        content.querySelector(".subheader-title") ||
        content.querySelector("[data-section-title]");

      const badgeEl =
        content.querySelector(".section-header-img") ||
        content.querySelector("[data-section-badge]") ||
        content.querySelector("img");

      const title = titleEl ? titleEl.textContent || "" : "";
      const badge =
        badgeEl && badgeEl.getAttribute ? badgeEl.getAttribute("src") : "";
      const alt =
        badgeEl && badgeEl.getAttribute
          ? badgeEl.getAttribute("alt") || ""
          : "";

      return { title, badge, alt };
    },

    /* -----------------------------
        Render bar contents
      ------------------------------ */
    render(idx) {
      const bar = this.ensureBar();
      if (idx < 0) {
        bar.style.display = "none";
        this.spacer.style.display = "none";
        return;
      }
      bar.style.display = "";
      this.spacer.style.display = "";

      const cur = this.headers[idx];
      const inner = bar.querySelector(".floating-section-inner");
      const img = inner.querySelector("img");
      const titleSpan = inner.querySelector(".section-header-title");

      const data = this.extractData(cur);

      titleSpan.textContent = data.title;
      if (data.badge) {
        img.src = data.badge;
        img.alt = data.alt;
        img.hidden = false;
      } else {
        img.hidden = true;
      }

      this.syncWithTracker();
    },

    /* -----------------------------
        Update cycle
      ------------------------------ */
    update() {
      this.measure();
      const idx = this.computeIndex();
      this.render(idx);
    },

    /* -----------------------------
        Throttled event bridge
      ------------------------------ */
    onChange() {
      if (this.ticking) return;
      this.ticking = 1;
      requestAnimationFrame(() => {
        this.ticking = 0;
        this.update();
      });
    },

    /* -----------------------------
        Init
      ------------------------------ */
    init() {
      this.ensureBar();
      this.collectHeaders();
      this.update();

      const onChange = this.onChange.bind(this);
      global.addEventListener("scroll", onChange, { passive: true });
      global.addEventListener("resize", onChange, { passive: true });
      global.addEventListener(
        "load",
        () => {
          this.syncWithTracker();
          this.update();
        },
        { once: true }
      );

      this.mo = new MutationObserver(() => {
        this.collectHeaders();
        this.onChange();
        this.syncWithTracker();
      });
      this.mo.observe(document.body, { childList: true, subtree: true });
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => StickyHeader.init(), {
      once: true,
    });
  } else {
    StickyHeader.init();
  }

  global.StickyHeader = StickyHeader;
})(window);
