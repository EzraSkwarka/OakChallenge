const fs = require("fs");
const path = require("path");

const DATA_ROOT = path.resolve(__dirname, "../data");

/* ===================== FILE DISCOVERY ===================== */

function findPatchFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      findPatchFiles(full, out);
    } else if (entry.isFile() && entry.name === "patch.js") {
      out.push(full);
    }
  }
  return out;
}

/* =========================== TEST ========================== */

describe("Patch integrity across all game data", () => {
  const patchFiles = findPatchFiles(DATA_ROOT);

  if (patchFiles.length === 0) {
    throw new Error(`No patch.js files found under ${DATA_ROOT}`);
  }

  for (const patchPath of patchFiles) {
    const dir = path.dirname(patchPath);
    const gameLabel = path.relative(DATA_ROOT, dir).replace(/\\/g, "/");
    const progressionPath = path.join(dir, "progression.js");

    test(`${gameLabel} → patch applies cleanly`, () => {
      if (!fs.existsSync(progressionPath)) {
        throw new Error(`patch.js found but no progression.js in ${gameLabel}`);
      }

      delete require.cache[require.resolve(progressionPath)];
      delete require.cache[require.resolve(patchPath)];
      delete require.cache[require.resolve("../assets/js/game-data-patcher.js")];

      global.window = {};

      require(progressionPath);

      if (!window.gameData) {
        throw new Error(`${gameLabel}/progression.js did not define window.gameData`);
      }

      const rawGameData = JSON.parse(JSON.stringify(window.gameData));

      require(patchPath);

      if (!window.gameDataPatch) {
        throw new Error(`${gameLabel}/patch.js did not define window.gameDataPatch`);
      }

      const patchData = window.gameDataPatch;

      const { applyGameDataPatch } = require("../assets/js/game-data-patcher.js");

      expect(() => {
        applyGameDataPatch(rawGameData, patchData);
      }).not.toThrow();
    });
  }
});
