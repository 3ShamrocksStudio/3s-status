// Syntax-checks inline JS of every single-file HTML app across the 3SDS org.
// This is the check that would have caught Ezra months ago.
import fs from 'node:fs';
import { execSync } from 'node:child_process';

const TOKEN = process.env.GH_TOKEN;
const OWNER = '3ShamrocksStudio';
const REPOS = [
  { repo: 'senior-helper', path: 'index.html',  name: 'Ezra' },
  { repo: 'shomer-app',    path: 'shomer.html', name: 'SHOMER app' },
  { repo: 'shomer-app',    path: 'index.html',  name: 'SHOMER site' },
  { repo: 'chore-wars',    path: 'index.html',  name: 'Chore Royale' },
  { repo: 'milo-app',      path: 'index.html',  name: 'MILO' },
  { repo: 'j8nix',         path: 'index.html',  name: 'J8N.IX' },
  { repo: 'shomer-nature', path: 'index.html',  name: 'SHOMER Nature' },
  { repo: 'fairent',       path: 'index.html',  name: 'Fairent' },
];

async function raw(repo, path) {
  const r = await fetch(`https://api.github.com/repos/${OWNER}/${repo}/contents/${path}`, {
    headers: { Authorization: `token ${TOKEN}`, Accept: 'application/vnd.github.v3.raw' },
  });
  if (!r.ok) return null;
  return await r.text();
}

const out = [];
fs.mkdirSync('/tmp/sx', { recursive: true });

for (const t of REPOS) {
  const html = await raw(t.repo, t.path);
  if (html === null) { out.push({ ...t, verdict: 'MISSING' }); console.log(`MISSING ${t.name}`); continue; }
  const blocks = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  const fails = [];
  blocks.forEach((code, i) => {
    if (!code.trim()) return;
    const f = `/tmp/sx/${t.repo}_${t.path.replace(/\W/g,'_')}_${i}.js`;
    fs.writeFileSync(f, code);
    try { execSync(`node --check ${f}`, { stdio: 'pipe' }); }
    catch (e) {
      const msg = (e.stderr?.toString() || '').split('\n').filter(l => l.includes('Error') || /^\s+\^/.test(l))[0] || 'SyntaxError';
      fails.push({ block: i, error: msg.trim().slice(0, 180) });
    }
  });
  const verdict = fails.length ? 'FAIL' : 'PASS';
  out.push({ ...t, blocks: blocks.length, fails, verdict });
  console.log(`${verdict.padEnd(7)} ${t.name} (${blocks.length} inline scripts, ${fails.length} broken)`);
}
fs.writeFileSync('syntax.json', JSON.stringify({ generated: new Date().toISOString(), results: out }, null, 2));
