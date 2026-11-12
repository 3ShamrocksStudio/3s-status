// Checks the version actually INSIDE each deployed artifact, not repo push dates.
//
// Why this exists: staleness.mjs compares when repos were last pushed. For SHOMER
// the source and the deployed site are the same repo, so it always says FRESH —
// and on 11 Nov 2026 the downloadable APK was sitting at v311 while the live web
// app was v332, twenty-one versions behind, for four days. Push dates cannot see
// that. This opens the files and reads the version strings out of them.
//
// Writes versions.json. Exit code is always 0: this reports, it does not gate.

import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const TMP = process.env.RUNNER_TEMP || '/tmp';
const out = [];

function note(check, verdict, detail) {
  out.push({ check, verdict, detail });
  console.log(`${verdict.padEnd(8)} ${check.padEnd(28)} ${detail}`);
}

async function text(url) {
  try {
    const r = await fetch(url, { redirect: 'follow' });
    if (!r.ok) return null;
    return await r.text();
  } catch { return null; }
}

/* ---------- 1. SHOMER: version.json vs the live app vs the downloadable APK ---------- */
async function shomer() {
  const base = 'https://www.shomer-app.co.il';
  const bust = `?cb=${Date.now()}`;

  let declared = null;
  const vj = await text(`${base}/version.json${bust}`);
  if (vj) { try { declared = JSON.parse(vj).v; } catch {} }

  const page = await text(`${base}/shomer.html${bust}`);
  const inPage = page && (page.match(/APP_VER\s*=\s*'([^']+)'/) || [])[1];

  let inApk = null;
  try {
    const apk = `${TMP}/shomer-check.apk`;
    execFileSync('curl', ['-sS', '-L', '--max-time', '240', '-o', apk, `${base}/SHOMER.apk${bust}`]);
    const html = execFileSync('unzip', ['-p', apk, 'assets/public/index.html'], {
      maxBuffer: 1 << 28, encoding: 'latin1',
    });
    inApk = (html.match(/APP_VER\s*=\s*'([^']+)'/) || [])[1] || null;
    fs.rmSync(apk, { force: true });
  } catch (e) {
    note('SHOMER apk readable', 'UNKNOWN', String(e.message).slice(0, 120));
  }

  const trio = { declared, inPage, inApk };
  if (!declared || !inPage) {
    note('SHOMER version triple', 'UNKNOWN', JSON.stringify(trio));
  } else if (declared !== inPage) {
    // This is the one that makes the app force-reload forever.
    note('SHOMER version triple', 'BROKEN',
      `version.json=${declared} but live app=${inPage} — the app will loop on "update available"`);
  } else if (inApk && inApk !== declared) {
    note('SHOMER apk vs site', 'STALE',
      `download gives ${inApk}, site is ${declared} — every new download gets an old app`);
  } else {
    note('SHOMER version triple', 'OK', `all at ${declared}`);
  }
}

/* ---------- 2. Is the studio site still served over plaintext http? ---------- */
async function httpsEnforced() {
  try {
    const r = await fetch('http://3shamrocks.com/', { redirect: 'manual' });
    const loc = r.headers.get('location') || '';
    if (r.status >= 300 && r.status < 400 && loc.startsWith('https://')) {
      note('3shamrocks.com HTTPS', 'OK', `http redirects to ${loc}`);
    } else {
      note('3shamrocks.com HTTPS', 'WARN',
        `http returns ${r.status} and serves the page — "Enforce HTTPS" is still off, visitors see "Not secure"`);
    }
  } catch (e) {
    note('3shamrocks.com HTTPS', 'UNKNOWN', String(e.message).slice(0, 120));
  }
}

/* ---------- 3. Fairent: is the CBS table it cites still the newest one? ---------- */
async function fairentData() {
  const page = await text(`https://3shamrocks.com/fairent/?cb=${Date.now()}`);
  if (!page) { note('Fairent CBS data', 'UNKNOWN', 'page not reachable'); return; }
  const cited = (page.match(/DocLib\/(\d{4})\/price09a/) || [])[1];
  if (!cited) { note('Fairent CBS data', 'UNKNOWN', 'no CBS source link found'); return; }

  // CBS publishes table 4.9 per year at a predictable path. If next year's is up,
  // the page is quoting an out-of-date table while claiming it is the newest.
  const next = String(Number(cited) + 1);
  // CBS answers 200 for ANY year in this path, including 2099 — a soft 404.
  // Only a real table comes back with content-type application/pdf, so status
  // alone reports a new table every single night.
  let newer = false;
  try {
    const r = await fetch(`https://www.cbs.gov.il/he/publications/Madad/DocLib/${next}/price09a/a4_9_e.pdf`,
      { method: 'HEAD' });
    newer = r.ok && (r.headers.get('content-type') || '').includes('application/pdf');
  } catch {}
  if (newer) {
    note('Fairent CBS data', 'STALE',
      `page cites the ${cited} table but CBS has published ${next} — the "most recent we verified" claim is false`);
  } else {
    note('Fairent CBS data', 'OK', `cites ${cited}, no newer table published yet`);
  }
}

/* ---------- 4. LickPick: can anyone actually pay yet? ---------- */
async function lickpickPay() {
  const app = await text(`https://3shamrocks.com/lickpick/app/?cb=${Date.now()}`);
  if (!app) { note('LickPick checkout', 'UNKNOWN', 'app not reachable'); return; }
  // Anchor to the LP_PAY object. A loose /mode:\s*"(test|live)"/ matches the
  // HTML comment above it that explains how to go live, and reports OK while
  // the buy button is still switched off.
  const mode = (app.match(/window\.LP_PAY\s*=\s*\{[^}]*?mode:\s*"(test|live)"/) || [])[1];
  if (mode === 'live') note('LickPick checkout', 'OK', 'payments are live');
  else note('LickPick checkout', 'BLOCKED',
    `LP_PAY.mode="${mode || '?'}" — the buy button is disabled and reads "Checkout opens soon"`);
}

await shomer();
await httpsEnforced();
await fairentData();
await lickpickPay();

fs.writeFileSync('versions.json',
  JSON.stringify({ generated: new Date().toISOString(), results: out }, null, 2));

const bad = out.filter(o => o.verdict === 'BROKEN' || o.verdict === 'STALE').length;
console.log(`\n${bad} problem(s) that push-date checks cannot see.`);
