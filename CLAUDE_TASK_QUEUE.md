# 3SDS Task Queue

Persistent across sessions. Lives in `3s-status` because Claude's sandbox is ephemeral.
Updated 2026-08-24.

## Active — one at a time

| # | Task | Product | State | Owner |
|---|---|---|---|---|
| 1 | Deploy hardened RTDB rules | SHOMER | `[blocked]` — creds | Dave |
| 2 | Re-enable Twilio Fraud Guard → Standard | SHOMER | `[blocked]` — creds | Dave |
| 3 | Supply `nature-hero.jpg` + `nature-badge.png` | SHOMER Nature | `[blocked]` — assets | Dave |
| 4 | Supabase URL + anon key + access token | TH MVP | `[blocked]` — creds | Dave |
| 5 | Apple Developer enrollment ($99/yr) | TH MVP / SHOMER | `[blocked]` — payment | Dave |
| 6 | Stale-deploy detection in Watchtower | Infra | `[completed]` 24.08 | Claude |
| 7 | Malformed image URL 404s (cosmetic) | SHOMER | `[awaiting decision]` | Dave |

## Completed

- `[completed]` Ezra syntax repair — 8 gershayim + 14 multi-line literals. First successful boot ever. 20.08
- `[completed]` TH MVP rebuild — restored `(app)` + `onboarding` routes after month-stale deploy. 20.08
- `[completed]` SHOMER close-CTA padding symmetrised, live-verified. 20.08
- `[completed]` SHOMER v210 APK built + staged. 20.08
- `[completed]` SOS security fix committed (per-uid write locks + `responders` path). Awaiting deploy. 20.08
- `[completed]` Nightly Watchtower built; verified firing on schedule 21/22/23.08
- `[completed]` Watchtower false-positive tuning ×3 — networkidle, hscroll, benign console noise

## Rules

- Never substitute brand/design assets. Missing image = blocker, not an invitation to invent one.
- Verify live after every push. Local pass is not proof.
- `node --check` every inline script block before pushing HTML.
- Minimal change only. Do not rewrite working code chasing a symptom.
