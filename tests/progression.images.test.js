const fs = require("fs");
const path = require("path");

/* ========================= CONFIG ========================= */

const DATA_DIR = path.resolve(__dirname, "../data");
const PROJECT_ROOT = path.resolve(__dirname, "..");
const IMAGE_ROOT = path.join(PROJECT_ROOT, "assets/images");
const IMAGE_EXTENSIONS = /\.(png|jpe?g|gif|webp|svg)$/i;

/* ===================== FILE DISCOVERY ===================== */

function findFilesRecursive(dir, predicate) {
  const results = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...findFilesRecursive(fullPath, predicate));
    } else if (predicate(entry, fullPath)) {
      results.push(fullPath);
    }
  }

  return results;
}

function findProgressionFiles(dir) {
  return findFilesRecursive(
    dir,
    (entry) =>
      entry.isFile() &&
      entry.name.startsWith("progression") &&
      entry.name.endsWith(".js"),
  );
}

/* ===================== IMAGE EXTRACTION =================== */

function extractAllImages(root) {
  const images = new Set();

  function walk(node) {
    if (!node) return;

    if (typeof node === "string" && IMAGE_EXTENSIONS.test(node)) {
      images.add(node.replace(/\\/g, "/"));
      return;
    }

    if (Array.isArray(node)) {
      for (const item of node) walk(item);
      return;
    }

    if (typeof node === "object") {
      for (const value of Object.values(node)) {
        walk(value);
      }
    }
  }

  walk(root);
  return images;
}

/* ======= NON‑CHOICE POKÉMON ROW EXTRACTION ======= */

function extractUnconditionalPokemonRows(gameData) {
  const rows = [];

  function walk(node) {
    if (!node) return;

    if (Array.isArray(node)) {
      for (const item of node) walk(item);
      return;
    }

    if (typeof node === "object") {
      if (
        node.pokemon &&
        typeof node.pokemon.img === "string" &&
        node.type !== "choice" &&
        !node.requires &&
        !node.requiresNot
      ) {
        rows.push({
          img: node.pokemon.img.replace(/\\/g, "/"),
          name: node.pokemon.name || "(unnamed)",
        });
      }

      for (const value of Object.values(node)) {
        walk(value);
      }
    }
  }

  walk(gameData);
  return rows;
}

/* =========================== TEST ========================= */

describe("Progression image integrity", () => {
  const progressionFiles = findProgressionFiles(DATA_DIR);
  const referencedImages = new Set();

  if (progressionFiles.length === 0) {
    throw new Error(`No progression*.js files found under ${DATA_DIR}`);
  }

  for (const filePath of progressionFiles) {
    const relativeFilePath = path
      .relative(DATA_DIR, filePath)
      .replace(/\\/g, "/");

    test(`${relativeFilePath} → image and data integrity`, () => {
      delete require.cache[require.resolve(filePath)];
      global.window = {};

      require(filePath);

      if (!window.gameData) {
        throw new Error(`${relativeFilePath} did not define window.gameData`);
      }

      const images = extractAllImages(window.gameData);

      const missingImages = [];

      for (const img of images) {
        referencedImages.add(img);

        const absolutePath = path.join(PROJECT_ROOT, img);
        if (!fs.existsSync(absolutePath)) {
          missingImages.push(img);
        }
      }

      if (missingImages.length > 0) {
        throw new Error(
          [
            `Missing image references in ${relativeFilePath}:`,
            "",
            ...missingImages,
          ].join("\n"),
        );
      }

      const rows = extractUnconditionalPokemonRows(window.gameData);
      const seen = new Map();
      const duplicates = [];

      for (const row of rows) {
        if (seen.has(row.img)) {
          duplicates.push({
            img: row.img,
            first: seen.get(row.img),
            duplicate: row.name,
          });
        } else {
          seen.set(row.img, row.name);
        }
      }

      if (duplicates.length > 0) {
        throw new Error(
          [
            `Duplicate Pokémon entries detected in ${relativeFilePath}:`,
            "",
            ...duplicates.map(
              (d) =>
                `${d.img}\n  first: ${d.first}\n  duplicate: ${d.duplicate}`,
            ),
          ].join("\n"),
        );
      }
    });
  }

  test("No unused images in badges or pokedex directories", () => {
    const diskImages = findFilesRecursive(
      IMAGE_ROOT,
      (entry, fullPath) =>
        IMAGE_EXTENSIONS.test(entry.name) &&
        (fullPath.includes(`${path.sep}badges${path.sep}`) ||
          fullPath.includes(`${path.sep}pokedex${path.sep}`)),
    ).map((absolutePath) =>
      path.relative(PROJECT_ROOT, absolutePath).replace(/\\/g, "/"),
    );

    const unused = diskImages.filter((img) => !referencedImages.has(img));

    if (unused.length > 0) {
      throw new Error(
        [
          "Unused images found in badges / pokedex directories:",
          "",
          ...unused,
        ].join("\n"),
      );
    }
  });
});
