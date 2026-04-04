(function (global) {
    function clone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    function applyGameDataPatch(baseData, patchData) {
        const data = clone(baseData);
        const errors = [];

        function record(message) {
            errors.push(message);
        }

        if (!patchData || !patchData.progression) {
            return { data, errors };
        }

        for (const section of Object.keys(patchData.progression)) {
            const baseSection =
                data.progression && data.progression[section];
            const patchSection = patchData.progression[section];

            if (!baseSection) {
                record(
                    `[PATCH ERROR] ${section}\n` +
                    `Section not found in progression`
                );
                continue;
            }

            /* ================= SUMMARY ================= */

            if (patchSection.summary) {
                let html = baseSection.summaryHtml || "";

                if (patchSection.summary.remove) {
                    for (const match of patchSection.summary.remove) {
                        const occurrences =
                            html.split(match).length - 1;

                        if (occurrences === 0) {
                            record(
                                `[PATCH ERROR] ${section} → summary.remove\n` +
                                `Match not found:\n${match}`
                            );
                            continue;
                        }

                        if (occurrences > 1) {
                            record(
                                `[PATCH ERROR] ${section} → summary.remove\n` +
                                `Expected exactly 1 match, found ${occurrences}:\n${match}`
                            );
                            continue;
                        }

                        html = html.split(match).join("");
                    }
                }

                if (patchSection.summary.replace) {
                    for (const { match, value } of patchSection.summary.replace) {
                        const occurrences =
                            html.split(match).length - 1;

                        if (occurrences === 0) {
                            record(
                                `[PATCH ERROR] ${section} → summary.replace\n` +
                                `Match not found:\n${match}`
                            );
                            continue;
                        }

                        if (occurrences > 1) {
                            record(
                                `[PATCH ERROR] ${section} → summary.replace\n` +
                                `Expected exactly 1 match, found ${occurrences}:\n${match}`
                            );
                            continue;
                        }

                        const idx = html.indexOf(match);
                        html =
                            html.slice(0, idx) +
                            value +
                            html.slice(idx + match.length);
                    }
                }

                if (patchSection.summary.insertAfter) {
                    for (const { match, value } of patchSection.summary.insertAfter) {
                        const occurrences =
                            html.split(match).length - 1;

                        if (occurrences === 0) {
                            record(
                                `[PATCH ERROR] ${section} → summary.insertAfter\n` +
                                `Match not found:\n${match}`
                            );
                            continue;
                        }

                        if (occurrences > 1) {
                            record(
                                `[PATCH ERROR] ${section} → summary.insertAfter\n` +
                                `Expected exactly 1 match, found ${occurrences}:\n${match}`
                            );
                            continue;
                        }

                        const idx = html.indexOf(match);
                        html =
                            html.slice(0, idx + match.length) +
                            value +
                            html.slice(idx + match.length);
                    }
                }

                baseSection.summaryHtml = html;
            }

            /* ================= ROWS ================= */

            if (patchSection.rows) {
                let rows = Array.isArray(baseSection.rows)
                    ? baseSection.rows.slice()
                    : [];

                if (patchSection.rows.remove) {
                    for (const predicate of patchSection.rows.remove) {
                        const before = rows.length;
                        rows = rows.filter(r => !predicate(r));

                        if (rows.length === before) {
                            record(
                                `[PATCH ERROR] ${section} → rows.remove\n` +
                                `Predicate did not match any row`
                            );
                        }
                    }
                }

                if (patchSection.rows.replace) {
                    for (const { match, value } of patchSection.rows.replace) {
                        const idx = rows.findIndex(match);

                        if (idx === -1) {
                            record(
                                `[PATCH ERROR] ${section} → rows.replace\n` +
                                `No matching row found`
                            );
                            continue;
                        }

                        rows = [
                            ...rows.slice(0, idx),
                            value,
                            ...rows.slice(idx + 1),
                        ];
                    }
                }

                if (patchSection.rows.insertAfter) {
                    for (const { match, value } of patchSection.rows.insertAfter) {
                        const idx = rows.findIndex(match);

                        if (idx === -1) {
                            record(
                                `[PATCH ERROR] ${section} → rows.insertAfter\n` +
                                `No matching row found`
                            );
                            continue;
                        }

                        rows = [
                            ...rows.slice(0, idx + 1),
                            value,
                            ...rows.slice(idx + 1),
                        ];
                    }
                }

                baseSection.rows = rows;
            }
        }

        if (errors.length > 0) {
            throw new Error(
                `PATCH FAILED WITH ${errors.length} ERROR(S):\n\n` +
                errors.join("\n\n")
            );
        }

        return { data, errors };
    }

    global.applyGameDataPatch = applyGameDataPatch;

    if (typeof module !== "undefined" && module.exports) {
        module.exports = { applyGameDataPatch };
    }
})(typeof window !== "undefined" ? window : globalThis);