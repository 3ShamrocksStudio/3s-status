# STUDIO BRAIN — 3Shamrocks Studio
Single source of truth. Updated: 2026-10-25 (day 4 of 182).
Live board data: `3shamrocksstudio.github.io/ops/data.json` · Blockers: `BLOCKERS.md` · Nightly checks: `audit.json`, `staleness.json`.

## Goal vs reality
- Target: $1M booked by 2027-04-21 → $16M later. Next gate M1: $25k by 2026-11-21 (27 days).
- Booked: **$0**. Pipeline: 0 calls · 0 proposals · 0 pilots.
- Pace needed now: ~$925/day to hit M1.
- Revenue split (live board): services $600k · SH✡MER B2B2C $220k · grants $130k · products $50k.
- Rule: product work paused until a first call is booked (weekly review #2).

## Revenue engines — next action
| Engine | Status | Claude does | Dave must do to unlock |
|---|---|---|---|
| Services (retainer ₪35–40k/mo, sprint ₪55k, DS install ₪110k) | 0 outreach sent | Build list of Israeli startups funded Aug–Oct 2026 + personalised drafts | Approve drafts, then send/post |
| SH✡MER pilots (₪2.5k 90-day → ₪25k/yr) | Drafts to Ohad, Natan, Mitronis waiting since 22 Oct | — | Approve & send the 4 messages |
| Grants & CSR | Not started | Shortlist Innovation Authority / security-tech calls | Nothing yet |
| Products | Frozen (no payments rail) | — | Open MoR payments account when M1 hits |

## Products — technical state (nightly audit 2026-10-25)
| Product | Live check | Hard blocker |
|---|---|---|
| SH✡MER site + app | PASS | Firebase `deploy --only database` (security hole); Twilio Fraud Guard re-enable |
| SH✡MER Nature | PASS | Missing `nature-hero.jpg`, `nature-badge.png` |
| Trashure Hunters MVP | Loads, sign-in dead | Supabase project URL + keys |
| Chore Royale / Chore Wars | PASS | Trademark check open |
| Ezra | PASS | — |
| MILO | PASS | — |
| Fairent | PASS | — |
| J8N.IX | PASS (15 days since push) | Payments rail |
| 3S portfolio site | PASS | — |
| LickPick | Frozen per review #2 | — |

## Execution queue (highest value first)
1. **[RUNNING]** Services outbound list: funded Israeli startups (Aug–Oct 2026), decision-maker, angle, draft message. Output → `outbound/` for Dave's approval. Nothing is sent.
2. 3S portfolio site: offer page for the 3 service packages (Hebrew + English) linked from home.
3. SH✡MER pilot one-pager (Hebrew) for the pilot calls.
4. Grants shortlist with deadlines.

## Log
- 2026-10-25 — Brain initialised from ops/data.json, BLOCKERS.md, nightly audit. Started queue item 1.
