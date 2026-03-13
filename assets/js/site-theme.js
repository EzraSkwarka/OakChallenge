/* -----------------------------
   Theme Toggle
------------------------------ */
(function () {
    const KEY = "oak-theme";
  
    function apply(theme) {
      const t = theme || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", t === "dark" ? "dark" : "light");
      const btns = document.querySelectorAll(".theme-btn");
      btns.forEach(b => {
        const isDark = t === "dark";
        b.setAttribute("aria-pressed", String(isDark));
        b.textContent = isDark ? "Light Mode" : "Dark Mode";
      });
    }
  
    function current() {
      return localStorage.getItem(KEY) || "";
    }
  
    function set(theme) {
      localStorage.setItem(KEY, theme);
      apply(theme);
    }
  
    function toggle() {
      const t = current() || (document.documentElement.getAttribute("data-theme") || "");
      set(t === "dark" ? "light" : "dark");
    }
  
    document.addEventListener("DOMContentLoaded", () => {
      apply(current());
      document.body.addEventListener("click", (e) => {
        const btn = e.target.closest(".theme-btn");
        if (btn) toggle();
      });
    });
  })();