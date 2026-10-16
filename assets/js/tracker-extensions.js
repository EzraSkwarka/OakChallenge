(() => {
  const STORAGE_PREFIX = "oak-tracker-toggle-";

  function getGroups() {
    return window.gameData?.trackerExtensions?.groups || [];
  }

  function getStorageKey(id) {
    return `${STORAGE_PREFIX}${window.gameData.gameId}-${id}`;
  }

  function loadState(id) {
    const saved = localStorage.getItem(getStorageKey(id));

    if (saved === null) {
      return true;
    }

    return saved === "true";
  }

  function saveState(id, value) {
    localStorage.setItem(getStorageKey(id), String(value));
  }

  function getSectionRows(sectionId) {
    const headerRow = document.querySelector(`#pokemon-table tbody tr[data-key="header:${CSS.escape(sectionId)}"]`);

    if (!headerRow) {
      return [];
    }

    const rows = [headerRow];
    let nextRow = headerRow.nextElementSibling;

    while (nextRow && rows.length < 4) {
      rows.push(nextRow);
      nextRow = nextRow.nextElementSibling;
    }

    return rows;
  }

  function applyVisibility() {
    getGroups().forEach((group) => {
      const visible = loadState(group.id);

      group.sections.forEach((sectionId) => {
        getSectionRows(sectionId).forEach((row) => {
          row.hidden = !visible;
        });
      });
    });
  }

  function createToggle(group) {
    const label = document.createElement("label");
    label.className = "tracker-extension-toggle";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = loadState(group.id);
    checkbox.dataset.toggleId = group.id;

    checkbox.addEventListener("change", () => {
      saveState(group.id, checkbox.checked);
      applyVisibility();
    });

    const text = document.createElement("span");
    text.textContent = group.label;

    label.appendChild(checkbox);
    label.appendChild(text);

    return label;
  }

  function buildToggleSection() {
    const groups = getGroups();

    if (!groups.length) {
      return;
    }

    const existing = document.getElementById("tracker-extension-section");

    if (existing) {
      existing.remove();
    }

    const tableWrap = document.querySelector(".table-wrap");

    if (!tableWrap || !tableWrap.parentNode) {
      return;
    }

    const sectionContainer = document.createElement("div");
    sectionContainer.id = "tracker-extension-section";
    sectionContainer.className = "container tracker-extension-section";

    const section = document.createElement("section");
    section.className = "tracker-extension-panel";

    const heading = document.createElement("h2");
    heading.className = "tracker-extension-title";
    heading.textContent = "Tracker Sections";

    const description = document.createElement("p");
    description.className = "tracker-extension-description";
    description.textContent = "Use these toggles to show or hide sections of the tracker. Hiding a section does not reset or remove any saved progress.";

    const toolbar = document.createElement("div");
    toolbar.className = "tracker-extension-bar";

    groups.forEach((group) => {
      toolbar.appendChild(createToggle(group));
    });

    section.appendChild(heading);
    section.appendChild(description);
    section.appendChild(toolbar);
    sectionContainer.appendChild(section);

    tableWrap.parentNode.insertBefore(sectionContainer, tableWrap);
  }

  function initialize() {
    if (!getGroups().length) {
      return;
    }

    buildToggleSection();
    applyVisibility();
  }

  function trackerIsReady() {
    return Boolean(document.querySelector('#pokemon-table tbody tr[data-key^="header:"]'));
  }

  function waitForTracker() {
    if (!trackerIsReady()) {
      window.setTimeout(waitForTracker, 100);
      return;
    }

    initialize();
  }

  waitForTracker();
})();
