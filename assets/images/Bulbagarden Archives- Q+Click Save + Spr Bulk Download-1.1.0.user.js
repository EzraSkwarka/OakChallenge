// ==UserScript==
// @name         Bulbagarden Archives: Q+Click Save + Spr Bulk Download
// @namespace    ezra.scripts
// @version      1.1.0
// @description  Hold "q" and click an image for Save As; button to bulk download Spr_* images
// @match        https://archives.bulbagarden.net/*
// @grant        GM_download
// @connect      *
// @run-at       document-idle
// ==/UserScript==

(function () {
  /* -----------------------------  State  ------------------------------ */
  let qDown = false;

  /* ---------------------------  Utilities  ---------------------------- */
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
    } catch {}
    if (!name) {
      if (img && img.alt) name = sanitizeName(img.alt.trim());
      else if (img && img.title) name = sanitizeName(img.title.trim());
    }
    if (!name) name = 'image';
    const hasExt = /\.[a-z0-9]{2,5}$/i.test(name);
    const ext = guessExtFromUrl(url);
    if (!hasExt) name += ext || '.png';
    return sanitizeName(name);
  };

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  const saveUrl = (url, name, saveAs) => new Promise((resolve) => {
    try {
      GM_download({
        url,
        name,
        saveAs,
        headers: { 'Referer': location.href },
        onload: () => resolve(),
        onerror: () => {
          try {
            GM_download({ url, name, saveAs, onload: () => resolve(), onerror: () => resolve() });
          } catch {
            resolve();
          }
        }
      });
    } catch {
      resolve();
    }
  });

  /* -----------------------  Q+Click Single Save  ---------------------- */
  addEventListener('keydown', (e) => {
    if (e.key === 'q' || e.key === 'Q') qDown = true;
  }, true);

  addEventListener('keyup', (e) => {
    if (e.key === 'q' || e.key === 'Q') qDown = false;
  }, true);

  addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') qDown = false;
  }, true);

  addEventListener('blur', () => { qDown = false; }, true);

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
    void saveUrl(url, name, true);
  }, true);

  /* ------------------  Collect Spr_* Images On Page  ------------------ */
  const collectSprUrls = () => {
    const urls = new Set();
    const nodes = document.querySelectorAll('li.gallerybox a.mw-file-description img, li.gallerybox .thumb img, .gallerybox img, img');
    nodes.forEach((img) => {
      const u = img.currentSrc || img.src || '';
      if (!u) return;
      let fn = '';
      try {
        const uu = new URL(u, location.href);
        fn = uu.pathname.split('/').pop() || '';
      } catch {
        fn = (u.split('/').pop() || '');
      }
      if (/^Spr_[^/]+\.(png|gif|svg|webp|jpe?g|bmp|avif|ico)$/i.test(fn)) urls.add(u);
    });
    return Array.from(urls);
  };

  /* -----------------------  Bulk Download Button  --------------------- */
  const injectButton = () => {
    const id = 'spr-bulk-download-btn';
    if (document.getElementById(id)) return;
    const btn = document.createElement('button');
    btn.id = id;
    btn.type = 'button';
    btn.textContent = 'Download Spr_*';
    btn.setAttribute('style', [
      'position:fixed',
      'bottom:16px',
      'right:16px',
      'z-index:2147483647',
      'padding:10px 14px',
      'border-radius:10px',
      'border:1px solid #1f2937',
      'background:#111827',
      'color:#fff',
      'font:600 14px/1.2 ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,Helvetica Neue,Arial,"Apple Color Emoji","Segoe UI Emoji"',
      'box-shadow:0 4px 12px rgba(0,0,0,.35)',
      'cursor:pointer'
    ].join(';'));
    btn.addEventListener('click', async () => {
      btn.disabled = true;
      const original = btn.textContent;
      try {
        const list = collectSprUrls();
        let done = 0;
        for (const u of list) {
          btn.textContent = `Downloading ${++done}/${list.length}`;
          const name = deriveFilename(u, null);
          await saveUrl(u, name, false);
          await wait(250);
        }
        btn.textContent = `Done ${done}`;
      } finally {
        await wait(800);
        btn.textContent = 'Download Spr_*';
        btn.disabled = false;
      }
    });
    document.body.appendChild(btn);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectButton, { once: true });
  } else {
    injectButton();
  }
})();
