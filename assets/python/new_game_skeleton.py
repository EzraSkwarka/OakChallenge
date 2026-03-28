#!/usr/bin/env python3
import argparse, os, re

def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

def slugify(s):
    s = s.strip().lower()
    s = re.sub(r"\s+", "-", s)
    s = re.sub(r"[^a-z0-9\-]", "", s)
    s = re.sub(r"-{2,}", "-", s).strip("-")
    return s or "game"

def main():
    p = argparse.ArgumentParser(prog="new_game_skeleton", description="Generate Oak Challenge Tracker skeleton for a new game")
    p.add_argument("--name", required=True)
    args = p.parse_args()

    gname = args.name.strip()
    gid = slugify(gname)
    logo_path = f"assets/images/logos/{gid}.png"

    html_path = f"pages/tracker/{gid}.html"
    data_path = f"data/{gid}/progression.js"
    pokedex_dir = f"assets/images/{gname}/pokedex"
    badges_dir = f"assets/images/{gname}/badges"

    html = f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <base href="/OakChallenge/" />
    <link rel="icon" href="favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{gname} — Oak Tracker</title>

    <!-- Global CSS (load early so theme variables are active immediately) -->
    <link rel="stylesheet" href="assets/css/base.css" />
    <link rel="stylesheet" href="assets/css/chrome.css" />
    <link rel="stylesheet" href="assets/css/tracker.css" />
    <link rel="stylesheet" href="assets/css/sticky-header.css" />
    <link rel="stylesheet" href="assets/css/icons.css" />

    <!-- Global JS (infrastructure) -->
    <script src="assets/js/site-chrome.js" defer></script>
    <script src="assets/js/site-theme.js" defer></script>
  </head>
  <body>
    <div id="site-header-host"></div>

    <div class="page-band">
      <div class="container">
        <h1 id="game-title"></h1>
        <div id="choice-status" class="choice-status"></div>
      </div>

      <div class="table-wrap">
        <table id="pokemon-table" aria-label="Pokémon capture status">
          <thead>
            <tr>
              <th>Pokémon</th>
              <th>Method</th>
              <th class="center">Action / Caught</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      <div class="footer-actions">
        <button id="reset-all" type="button" class="reset-btn">Reset all progress</button>
      </div>
    </div>

    <div id="site-footer-host"></div>

    <!-- Page-specific JS only -->
    <script src="data/{gid}/progression.js" defer></script>
    <script src="assets/js/oak-tracker.js" defer></script>
  </body>
</html>
"""

    progression = f"""
    /* ----------------------
    - img src: 
    - Guide: 
    ----------------------- */
    const guideLink = "";
    const guideSource = `
      <p class="tips-source">
        <a href="${{guideLink}}" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>`;

      const imgBasehref = ""
      const badgeBasehref = ""

    window.gameData = {{
  gameId: "{gid}",
  gameTitle: "{gname}",
  logo: "{logo_path}",
  aboutHtml: `
   <section class="game-intro-content">
      <ul>
    
      </ul>
      ${{guideSource}}
    </section>
    `,
  progression: {{
    "Pre Badge 1": {{
      headerTitle: "Pre Badge 1",
      
      headerImg: "assets/images/{gname}/badges/",
      headerImgAlt: "",

      summaryShort: "",
      summaryHtml: "",
      rows: []
    }}
  }}
}};
"""

    write(html_path, html)
    write(data_path, progression)
    os.makedirs(pokedex_dir, exist_ok=True)
    os.makedirs(badges_dir, exist_ok=True)

    print("Created:")
    print(" ", html_path)
    print(" ", data_path)
    print(" ", pokedex_dir + "/")
    print(" ", badges_dir + "/")
    print("ID:", gid)
    print("Logo path:", logo_path)

if __name__ == "__main__":
    main()
