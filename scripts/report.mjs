import fs from 'node:fs';
const audit  = JSON.parse(fs.readFileSync('audit.json','utf8'));
const syntax = JSON.parse(fs.readFileSync('syntax.json','utf8'));
const stale  = JSON.parse(fs.readFileSync('staleness.json','utf8'));
const now = new Date(audit.generated);
const stamp = now.toISOString().replace('T',' ').slice(0,16) + ' UTC';
const C = { PASS:'#1f9d55', WARN:'#f0a020', FAIL:'#d64545', MISSING:'#888' };
const counts = { PASS:0, WARN:0, FAIL:0 };
audit.results.forEach(r => counts[r.verdict] !== undefined && counts[r.verdict]++);

const rows = audit.results.sort((a,b)=>a.prio-b.prio || a.name.localeCompare(b.name)).map(r => {
  const sx = syntax.results.filter(s => s.name === r.name);
  const sxBad = sx.filter(s => s.verdict === 'FAIL');
  const st = stale.results.find(x => x.product === r.name);
  const staleLine = st && (st.verdict === 'STALE' || st.verdict === 'LAGGING')
    ? `<div class="d warn">DEPLOY ${st.verdict}: source is ${st.lagDays} days ahead of the live build</div>` : '';
  const detail = [
    ...r.errors.map(e => `<div class="d err">${esc(e)}</div>`),
    ...r.http4xx.map(e => `<div class="d warn">HTTP ${esc(e)}</div>`),
    ...sxBad.flatMap(s => s.fails.map(f => `<div class="d err">SYNTAX ${esc(s.path)} block ${f.block}: ${esc(f.error)}</div>`)),
    ...r.viewports.filter(v=>v.hscroll).map(v => `<div class="d warn">horizontal scroll @ ${v.vp}</div>`),
    ...r.viewports.filter(v=>v.loadError).map(v => `<div class="d err">load failed @ ${v.vp}: ${esc(v.loadError)}</div>`),
  ].join('') + staleLine || '<div class="d ok">no issues detected</div>';
  const ctrls = r.viewports.map(v => v.controls).filter(x=>x!==undefined);
  return `<tr><td><span class="dot" style="background:${C[r.verdict]}"></span></td>
    <td class="n">${esc(r.name)}<div class="u"><a href="${r.url}">${esc(r.url.replace(/^https?:\/\//,''))}</a></div></td>
    <td class="v" style="color:${C[r.verdict]}">${r.verdict}</td>
    <td class="m">${r.status||'—'}</td>
    <td class="m">${ctrls.length?Math.max(...ctrls):'—'}</td>
    <td class="det">${detail}</td></tr>`;
}).join('');

function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}

fs.writeFileSync('index.html', `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>3SDS Nightly Status</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Heebo:wght@200;400;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}body{margin:0;background:#060F1E;color:#e8edf5;font-family:Heebo,system-ui,sans-serif;padding:28px 18px 60px}
.wrap{max-width:1080px;margin:0 auto}
h1{font-family:Cinzel,serif;font-weight:900;color:#faac22;font-size:clamp(24px,4vw,38px);margin:0 0 4px;letter-spacing:.5px}
.sub{color:#8fa3c0;font-size:14px;margin-bottom:24px}
.pills{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:22px}
.pill{border-radius:999px;padding:8px 18px;font-weight:700;font-size:14px;background:#0c1b39;border:1px solid #1e315f}
table{width:100%;border-collapse:collapse;background:#0c1b39;border-radius:18px;overflow:hidden}
th{background:#1e315f;color:#cfe0ff;font-size:11px;letter-spacing:1px;text-transform:uppercase;padding:12px 10px;text-align:left;font-weight:700}
td{padding:14px 10px;border-top:1px solid #16264a;vertical-align:top;font-size:14px}
.dot{display:inline-block;width:12px;height:12px;border-radius:50%}
.n{font-weight:700;min-width:130px}.u{font-weight:200;font-size:12px}
.u a{color:#6f8ab8;text-decoration:none}
.v{font-weight:700;font-size:13px}.m{color:#8fa3c0;font-size:13px}
.det{width:46%}.d{font-size:12px;padding:4px 0;font-weight:200;line-height:1.45}
.err{color:#ff9c9c}.warn{color:#f5c976}.ok{color:#5f7fa8}
footer{color:#5f7fa8;font-size:12px;margin-top:22px;font-weight:200}
@media(max-width:700px){.det{width:auto}td,th{padding:10px 6px;font-size:13px}}
</style></head><body><div class="wrap">
<h1>3SDS NIGHTLY STATUS</h1>
<div class="sub">Automated audit — every product, 3 viewports, JS syntax, HTTP errors · ${stamp}</div>
<div class="pills">
  <div class="pill" style="color:${C.PASS}">${counts.PASS} passing</div>
  <div class="pill" style="color:${C.WARN}">${counts.WARN} warnings</div>
  <div class="pill" style="color:${C.FAIL}">${counts.FAIL} failing</div>
</div>
<table><thead><tr><th></th><th>Product</th><th>Verdict</th><th>HTTP</th><th>Controls</th><th>Findings</th></tr></thead>
<tbody>${rows}</tbody></table>
<footer>Runs nightly at 02:00 UTC on GitHub Actions. No credentials required. Verdict FAIL = JS error, dead page, or broken syntax. WARN = layout overflow or missing asset.</footer>
</div></body></html>`);
console.log(`report written — ${counts.PASS} pass / ${counts.WARN} warn / ${counts.FAIL} fail`);
