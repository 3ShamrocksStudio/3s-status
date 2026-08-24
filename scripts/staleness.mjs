// Detects deployed builds that lag their source repo.
// This is the check that would have caught TH MVP being a month stale.
import fs from 'node:fs';

const TOKEN = process.env.GH_TOKEN;
const OWNER = '3ShamrocksStudio';

// { product, source repo, repo that serves the live site }
const PAIRS = [
  { product: 'TH MVP',        source: 'Trashure-Hunters', deploy: 'th-mvp-web',   built: true  },
  { product: 'SHOMER app',    source: 'shomer-app',       deploy: 'shomer-app',   built: false },
  { product: 'Ezra',          source: 'senior-helper',    deploy: 'senior-helper',built: false },
  { product: 'Chore Royale',  source: 'chore-wars',       deploy: 'chore-wars',   built: false },
  { product: 'SHOMER Nature', source: 'shomer-nature',    deploy: 'shomer-nature',built: false },
  { product: 'MILO',          source: 'milo-app',         deploy: 'milo-app',     built: false },
  { product: 'J8N.IX',        source: 'j8nix',            deploy: 'j8nix',        built: false },
  { product: 'Fairent',       source: 'fairent',          deploy: 'fairent',      built: false },
];

async function lastPush(repo) {
  const r = await fetch(`https://api.github.com/repos/${OWNER}/${repo}`, {
    headers: { Authorization: `token ${TOKEN}` },
  });
  if (!r.ok) return null;
  const j = await r.json();
  return j.pushed_at;
}

const DAY = 86400000;
const out = [];

for (const p of PAIRS) {
  const src = await lastPush(p.source);
  const dep = p.source === p.deploy ? src : await lastPush(p.deploy);
  if (!src) { out.push({ ...p, verdict: 'UNKNOWN' }); continue; }

  const lagDays = dep ? Math.round((new Date(src) - new Date(dep)) / DAY) : null;
  let verdict = 'FRESH';
  // Only meaningful when source and deploy are different repos (a build step exists).
  if (p.built && lagDays !== null) {
    if (lagDays >= 7) verdict = 'STALE';
    else if (lagDays >= 2) verdict = 'LAGGING';
  }
  const ageDays = Math.round((Date.now() - new Date(src)) / DAY);
  out.push({ ...p, sourcePush: src, deployPush: dep, lagDays, ageDays, verdict });
  console.log(`${verdict.padEnd(8)} ${p.product.padEnd(15)} lag=${lagDays ?? '-'}d  untouched=${ageDays}d`);
}

fs.writeFileSync('staleness.json', JSON.stringify({ generated: new Date().toISOString(), results: out }, null, 2));
