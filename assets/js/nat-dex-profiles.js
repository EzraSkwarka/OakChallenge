(() => {
  const PROFILE_STORAGE_KEY = "oak-nationaldex-profiles";
  const ACTIVE_PROFILE_KEY = "oak-nationaldex-active-profile";
  const BASE_GAME_ID = window.gameData?.gameId || "nationaldex";

  function createProfileId() {
    if (window.crypto?.randomUUID) {
      return window.crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function getProfiles() {
    try {
      const stored = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || "[]");

      if (Array.isArray(stored)) {
        return stored;
      }
    } catch {
      return [];
    }

    return [];
  }

  function saveProfiles(profiles) {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profiles));
  }

  function createDefaultProfile() {
    return {
      id: "default",
      name: "Default",
    };
  }

  function ensureProfiles() {
    const profiles = getProfiles();

    if (!profiles.length) {
      const defaultProfile = createDefaultProfile();

      saveProfiles([defaultProfile]);
      localStorage.setItem(ACTIVE_PROFILE_KEY, defaultProfile.id);

      return [defaultProfile];
    }

    return profiles;
  }

  function getActiveProfileId() {
    const profiles = ensureProfiles();
    const savedId = localStorage.getItem(ACTIVE_PROFILE_KEY);

    if (profiles.some((profile) => profile.id === savedId)) {
      return savedId;
    }

    localStorage.setItem(ACTIVE_PROFILE_KEY, profiles[0].id);

    return profiles[0].id;
  }

  function getActiveProfile() {
    const profiles = ensureProfiles();
    const activeId = getActiveProfileId();

    return profiles.find((profile) => profile.id === activeId) || profiles[0];
  }

  function getProfileGameId(profileId) {
    if (profileId === "default") {
      return BASE_GAME_ID;
    }

    return `${BASE_GAME_ID}:profile:${profileId}`;
  }

  function activateProfile(profileId) {
    const profiles = getProfiles();

    if (!profiles.some((profile) => profile.id === profileId)) {
      return;
    }

    localStorage.setItem(ACTIVE_PROFILE_KEY, profileId);
    window.location.reload();
  }

  function addProfile() {
    const enteredName = window.prompt("Profile name:");

    if (!enteredName) {
      return;
    }

    const name = enteredName.trim();

    if (!name) {
      return;
    }

    const profiles = getProfiles();

    if (profiles.some((profile) => profile.name.toLowerCase() === name.toLowerCase())) {
      window.alert("A profile with that name already exists.");
      return;
    }

    const profile = {
      id: createProfileId(),
      name,
    };

    profiles.push(profile);
    saveProfiles(profiles);
    activateProfile(profile.id);
  }

  function renameProfile() {
    const profiles = getProfiles();
    const activeProfile = getActiveProfile();

    const enteredName = window.prompt("New profile name:", activeProfile.name);

    if (!enteredName) {
      return;
    }

    const name = enteredName.trim();

    if (!name || name === activeProfile.name) {
      return;
    }

    if (profiles.some((profile) => profile.id !== activeProfile.id && profile.name.toLowerCase() === name.toLowerCase())) {
      window.alert("A profile with that name already exists.");
      return;
    }

    activeProfile.name = name;
    saveProfiles(profiles);
    renderProfileControls();
  }

  function deleteProfile() {
    const profiles = getProfiles();
    const activeProfile = getActiveProfile();

    if (profiles.length === 1) {
      window.alert("At least one profile must remain.");
      return;
    }

    const shouldDelete = window.confirm(`Delete the profile "${activeProfile.name}"? Tracker progress saved under this profile will no longer be accessible.`);

    if (!shouldDelete) {
      return;
    }

    const remainingProfiles = profiles.filter((profile) => profile.id !== activeProfile.id);

    saveProfiles(remainingProfiles);
    activateProfile(remainingProfiles[0].id);
  }

  function createProfileSelect(profiles, activeProfile) {
    const select = document.createElement("select");

    select.id = "nationaldex-profile-select";
    select.className = "nationaldex-profile-select";
    select.setAttribute("aria-label", "Active National Pokédex profile");

    profiles.forEach((profile) => {
      const option = document.createElement("option");

      option.value = profile.id;
      option.textContent = profile.name;
      option.selected = profile.id === activeProfile.id;

      select.appendChild(option);
    });

    select.addEventListener("change", () => {
      activateProfile(select.value);
    });

    return select;
  }

  function createButton(text, className, handler) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = className;
    button.textContent = text;
    button.addEventListener("click", handler);

    return button;
  }

  function renderProfileControls() {
    const existing = document.getElementById("nationaldex-profile-section");

    if (existing) {
      existing.remove();
    }

    const tableWrap = document.querySelector(".table-wrap");

    if (!tableWrap?.parentNode) {
      return false;
    }

    const profiles = getProfiles();
    const activeProfile = getActiveProfile();

    const container = document.createElement("div");

    container.id = "nationaldex-profile-section";
    container.className = "container nationaldex-profile-section";

    const panel = document.createElement("section");

    panel.className = "nationaldex-profile-panel";

    const heading = document.createElement("h2");

    heading.className = "nationaldex-profile-title";
    heading.textContent = "Tracker Profile";

    const description = document.createElement("p");

    description.className = "nationaldex-profile-description";
    description.textContent = "Use separate profiles to track different collections, such as a living Pokédex, Pokémon HOME collection, or another playthrough.";

    const controls = document.createElement("div");

    controls.className = "nationaldex-profile-controls";

    controls.appendChild(createProfileSelect(profiles, activeProfile));

    controls.appendChild(createButton("New Profile", "nationaldex-profile-button", addProfile));

    controls.appendChild(createButton("Rename", "nationaldex-profile-button", renameProfile));

    controls.appendChild(createButton("Delete", "nationaldex-profile-button nationaldex-profile-delete", deleteProfile));

    panel.appendChild(heading);
    panel.appendChild(description);
    panel.appendChild(controls);
    container.appendChild(panel);

    const toggleSection = document.getElementById("tracker-extension-section");

    if (toggleSection) {
      toggleSection.parentNode.insertBefore(container, toggleSection);
    } else {
      tableWrap.parentNode.insertBefore(container, tableWrap);
    }

    return true;
  }

  function waitForTracker() {
    if (!renderProfileControls()) {
      window.setTimeout(waitForTracker, 100);
    }
  }

  const activeProfile = getActiveProfile();

  window.gameData.gameId = getProfileGameId(activeProfile.id);

  window.addEventListener("load", waitForTracker);
})();
