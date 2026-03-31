
window.gameDataPatch = {
    progression: {
        /*falkner: {
            summary: {
                remove: [
                    "Slugma → Lv. 38 → Magcargo"
                ],
                insertAfter: [
                    {
                        match: "<h5>Ruins of Alph</h5>",
                        value: `
<p><strong>Patch note:</strong> HEY LISTEN!</p>
`
                    }
                ]
            },
            rows: {
                remove: [
                    r => r.pokemon?.name === "Slugma"
                ],
                insertAfter: [
                    {
                        match: r => r.pokemon?.name === "Haunter",
                        value: {
                            pokemon: { img: "999.png", name: "Custommon" },
                            method: "Custom challenge condition"
                        }
                    }
                ]
            }
        }*/
    }
};