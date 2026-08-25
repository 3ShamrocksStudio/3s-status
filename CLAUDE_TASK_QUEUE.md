# 3SDS Task Queue
Persistent across sessions. Updated 25.08.26.

## HARD BLOCKERS — Dave only (Claude is done here)

| # | What | Product | Action |
|---|---|---|---|
| B1 | Firebase deploy `--only database --project shomergency` | SH✡MER | 5 min. Closes live 401s + security hole |
| B2 | Re-enable Twilio Fraud Guard on `VAa6d1d6e530cbcd67bda268bb22dc0ace` | SH✡MER | 2 min in Twilio console |
| B3 | Supabase URL + anon key + access token | TH MVP | Unblocks entire product |
| B4 | Apple Developer account $99/yr | TH MVP / SH✡MER | Start now — longest lead time |
| B5 | Google Play Console $25 | TH MVP | After Apple |
| B6 | `nature-hero.jpg` + `nature-badge.png` brand assets | SH✡MER Nature | Assets only |
| B7 | Deploy Ezra Cloudflare worker (3 min) | Ezra | dash.cloudflare.com → Workers → paste `cloudflare-worker.js` → Deploy → Secrets → add `ANTHROPIC_KEY` → copy URL → paste into `PROXY_URL` in index.html |
| B8 | GitHub token with `workflow` scope | TH MVP | Generate at github.com/settings/tokens → enable `workflow` scope → share here |

## CLAUDE EXECUTION QUEUE (no blockers)

| # | Task | Product | Status |
|---|---|---|---|
| C1 | SH✡MER app functional audit — test every screen flow | SH✡MER | 🔜 Next |
| C2 | MILO — daily notification prompt + polish pass | MILO | 🔜 Next |
| C3 | Media Network — draft IG bios for 4 accounts | Media Network | 🔜 Next |
| C4 | SH✡MER Nature app — brand alignment pass | SH✡MER Nature | 🔜 Next |
| C5 | Fairent — UX pass, missing features audit | Fairent | 🔜 Next |
| C6 | 3SDS website — visual polish, font pass | 3SDS | 🔜 Next |

## COMPLETED THIS SESSION (25.08.26)

- ✅ SH✡MER website — 10 surgical fixes: nav wordmark, badge height, adv alignment, h1 unconstrained, mobile CTA
- ✅ Chore Royale — parent PIN verification screen added (4-digit, retry, +15 bonus XP)
- ✅ Chore Royale — localStorage persistence (XP/streaks/boss survive refresh)
- ✅ Chore Royale — PWA manifest (installable on mobile)
- ✅ 3SDS website — SH✡MER URL/brand, Chore Royale name, J8N.IX name, descriptions updated
- ✅ TH MVP — Claude Vision provider implemented (`_claude_provider.ts`, `_provider.ts`, `index.ts`)
- ✅ TH MVP — CI-READY.md with full EAS workflow written
- ✅ SH✡MER app — v87, founderFastPath removed, Chabad soft-launch ready
- ✅ Ezra — localBrain 12→25+ Hebrew patterns
- ✅ Ezra — Cloudflare worker updated to Claude Haiku API
- ✅ SH✡MER Nature — landing page live
- ✅ All 8 projects verified live

## RULES

- Never substitute brand/design assets. Missing image = blocker.
- Verify live after every push. Local pass is not proof.
- Minimal change only. Never rewrite working code chasing a symptom.
- Parallel sessions overwrite each other — one session owns each file.
