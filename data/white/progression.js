
    /* ----------------------
    - img src: 
    - Guide: 
    ----------------------- */
    const guideLink = "";
    const guideSource = `
      <p class="tips-source">
        <a href="${guideLink}" target="_blank" rel="noopener noreferrer">
          Source: Professor Oak Challenge Guide (Google Doc)
        </a>
      </p>`;

      const imgBasehref = ""
      const badgeBasehref = ""

    window.gameData = {
  gameId: "white",
  gameTitle: "white",
  logo: "assets/images/logos/white.png",
  aboutHtml: `
   <section class="game-intro-content">
      <ul>
    
      </ul>
      ${guideSource}
    </section>
    `,
  progression: {
    "Pre Badge 1": {
      headerTitle: "Pre Badge 1",
      
      headerImg: "assets/images/white/badges/",
      headerImgAlt: "",

      summaryShort: "",
      summaryHtml: "",
      rows: []
    }
  }
};
