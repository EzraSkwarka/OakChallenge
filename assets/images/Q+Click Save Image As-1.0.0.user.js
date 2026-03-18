// ==UserScript==
// @name         Q+Click Save Image As
// @namespace    ezra.scripts
// @version      1.0.0
// @description  Hold "q" and click an image to trigger Save As via GM_download
// @match        *://*/*
// @grant        GM_download
// @run-at       document-start
// ==/UserScript==

(function () {
  let qDown = false;

  const setQ = (down) => { qDown = down; };

  addEventListener('keydown', (e) => {
    if (e.key === 'q' || e.key === 'Q') setQ(true);
  }, true);

  addEventListener('keyup', (e) => {
    if (e.key === 'q' || e.key === 'Q') setQ(false);
  }, true);

  addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') setQ(false);
  }, true);

  addEventListener('blur', () => setQ(false), true);

  const sanitizeName = (s) => s.replace(/[\\/:*?"<>|]+/g, '_').slice(-200);

  const guessExtFromUrl = (u) => {
    try {
      const urlObj = new URL(u, location.href);
      const last = urlObj.pathname.split('/').pop() || '';
      const base = last.split('?')[0].split('#')[0];
      const m = base.match(/\.(png|jpe?g|gif|webp|svg|bmp|avif|ico)$/i);
      return m ? m[0].toLowerCase() : '';
    } catch {
      const m = (u || '').match(/\.(png|jpe?g|gif|webp|svg|bmp|avif|ico)(?:[?#].*)?$/i);
      return m ? m[0].toLowerCase() : '';
    }
  };

  const deriveFilename = (url, img) => {
    let name = '';
    try {
      const u = new URL(url, location.href);
      name = u.pathname.split('/').filter(Boolean).pop() || '';
      name = name.split('?')[0].split('#')[0];
    } catch {
      // leave empty
    }

    if (!name) {
      if (img && img.alt) name = sanitizeName(img.alt.trim());
      else if (img && img.title) name = sanitizeName(img.title.trim());
    }

    if (!name) name = 'image';

    const hasExt = /\.[a-z0-9]{2,5}$/i.test(name);
    const ext = guessExtFromUrl(url);
    if (!hasExt) {
      if (ext) name += ext;
      else name += '.png';
    }

    return sanitizeName(name);
  };

  addEventListener('click', (e) => {
    if (!qDown) return;

    const img = e.target && (e.target.closest ? e.target.closest('img') : null);
    if (!img) return;

    const url = img.currentSrc || img.src || '';
    if (!url) return;

    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    const name = deriveFilename(url, img);

    try {
      GM_download({
        url,
        name,
        saveAs: true,
        headers: { 'Referer': location.href },
        onerror: () => {
          // Fallback: retry without headers
          GM_download({ url, name, saveAs: true });
        }
      });
    } catch {
      // Silent fail to avoid breaking page behavior
    }
  }, true);
})();