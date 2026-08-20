import { chromium } from 'playwright';
import fs from 'node:fs';

const TARGETS = [
  { name: 'SHOMER site',    url: 'https://www.shomer-app.co.il/',                        prio: 1 },
  { name: 'SHOMER app',     url: 'https://www.shomer-app.co.il/shomer.html',             prio: 1 },
  { name: 'TH MVP',         url: 'https://3shamrocksstudio.github.io/th-mvp-web/',       prio: 1 },
  { name: 'Chore Royale',   url: 'https://3shamrocksstudio.github.io/chore-wars/',       prio: 2 },
  { name: 'Ezra',           url: 'https://3shamrocksstudio.github.io/senior-helper/',    prio: 2 },
  { name: 'MILO',           url: 'https://3shamrocksstudio.github.io/milo-app/',         prio: 3 },
  { name: 'J8N.IX',         url: 'https://3shamrocksstudio.github.io/j8nix/',            prio: 3 },
  { name: 'Fairent',        url: 'https://3shamrocksstudio.github.io/fairent/',          prio: 3 },
  { name: 'SHOMER Nature',  url: 'https://3shamrocksstudio.github.io/shomer-nature/',    prio: 3 },
  { name: '3SDS site',      url: 'https://3shamrocksstudio.github.io/',                  prio: 3 },
];

const VIEWPORTS = [
  { label: 'phone',   width: 390,  height: 844 },
  { label: 'tablet',  width: 768,  height: 1024 },
  { label: 'desktop', width: 1440, height: 900 },
];

const results = [];
const browser = await chromium.launch();

for (const t of TARGETS) {
  const entry = { ...t, viewports: [], errors: [], http4xx: [], status: 0, verdict: 'PASS' };
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();
    const errs = [], bad = [];
    page.on('pageerror', e => errs.push('JS: ' + String(e).slice(0, 160)));
    page.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE: ' + m.text().slice(0, 160)); });
    page.on('response', r => { if (r.status() >= 400) bad.push(`${r.status()} ${r.url().slice(-70)}`); });
    try {
      // 'load' not 'networkidle': apps with live Firebase/websocket connections never
      // reach network idle, which produced false FAILs and partial-page garbage.
      const resp = await page.goto(t.url + '?ci=' + Date.now(), { waitUntil: 'load', timeout: 45000 });
      await page.waitForTimeout(6000);
      entry.status = resp ? resp.status() : 0;
      const m = await page.evaluate(() => ({
        hscroll: document.documentElement.scrollWidth > innerWidth + 1,
        textLen: document.body ? document.body.innerText.trim().length : 0,
        controls: [...document.querySelectorAll('button,a[href],[role=button],input,select,textarea,[onclick]')]
          .filter(e => { const r = e.getBoundingClientRect(); return r.width > 4 && r.height > 4; }).length,
        title: document.title.slice(0, 60),
      }));
      entry.title = m.title;
      entry.viewports.push({ vp: vp.label, ...m });
      if (m.hscroll) entry.verdict = 'WARN';
      if (m.textLen < 40) entry.verdict = 'FAIL';
    } catch (e) {
      entry.viewports.push({ vp: vp.label, loadError: String(e).slice(0, 140) });
      entry.verdict = 'FAIL';
    }
    entry.errors.push(...errs); entry.http4xx.push(...bad);
    await ctx.close();
  }
  entry.errors = [...new Set(entry.errors)].slice(0, 6);
  entry.http4xx = [...new Set(entry.http4xx)].slice(0, 6);
  if (entry.errors.length) entry.verdict = 'FAIL';
  else if (entry.http4xx.length && entry.verdict === 'PASS') entry.verdict = 'WARN';
  results.push(entry);
  console.log(`${entry.verdict.padEnd(4)} ${t.name}`);
}
await browser.close();
fs.writeFileSync('audit.json', JSON.stringify({ generated: new Date().toISOString(), results }, null, 2));
