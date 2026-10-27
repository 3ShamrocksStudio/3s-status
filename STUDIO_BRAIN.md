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
| Services (retainer ₪18k/mo, sprint ₪24k, DS install from ₪45k — pending Dave OK) | 8 LinkedIn requests sent 25 Oct · Alex (Chamelio) DM drafted · offer page staged | Next: SH✡MER pilot one-pager | Approve top 10 drafts, send from LinkedIn |
| SH✡MER pilots (₪2.5k 90-day → ₪25k/yr) | Drafts to Ohad, Natan, Mitronis waiting since 22 Oct | — | Approve & send the 4 messages |
| Grants & CSR | Shortlist done (grants/GRANTS_SHORTLIST.md). Tnufa closes 9 Nov 12:00 — up to ₪200k × 2 apps | Drafting both Tnufa applications | Decide applicant entity; ID/company docs + CVs by 5 Nov; sign |
| Products | Frozen (no payments rail) | — | Open MoR payments account when M1 hits |

## Products — technical state (nightly audit 2026-10-25)
| Product | Live check | Hard blocker |
|---|---|---|
| SH✡MER site + app | PASS | Firebase `deploy --only database` (security hole). Twilio done. |
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
1. **[DONE — awaiting Dave]** Services outbound list: 31 Israeli startups funded Aug–Oct 2026, sourced, with draft LinkedIn messages. Kept private (not in this public repo). Nothing sent.
2. **[STAGED — NEEDS YOUR EYES]** Offer page `3shamrocksstudio.github.io/work-with-me.html` (EN/HE). Unlinked + noindex until Dave approves; then link from home and from outreach.
3. **[STAGED — NEEDS YOUR EYES]** SH✡MER pilot one-pager (HE): 3shamrocksstudio.github.io/shomer-pilot.html (unlinked, noindex).
4. **[DONE]** Grants shortlist. 5. **[DRAFTED — awaiting Dave]** Tnufa A (TH) + B (SH✡MER), ₪250k budgets each; drafts sent to Dave in chat (not in this public repo). Dave decisions by 29 Oct, docs by 5 Nov, submit 8 Nov. 6. **[DONE — awaiting Dave]** Outreach batch 2 (10 notes) + 7 follow-up DMs, in Dave's to-do list. 7. **[RUNNING]** TH backend on Supabase free tier + staging web build wired.

## Log
- 2026-10-25 — Brain initialised from ops/data.json, BLOCKERS.md, nightly audit. Started queue item 1.
- 2026-10-25 — Outbound list done: 31 companies, top fits Zenzap, Loora, Chamelio, enso, Euno. Spot-check: Zenzap $44M confirmed (TechCrunch 14 Oct). Now: queue item 2.
- 2026-10-25 — Offer page staged and verified (claims match site, prices match board, EN/HE render clean). Now: queue item 3.
- 2026-10-25 — Offer page rebuilt on site branding; prices cut to ₪18k/mo · ₪24k · from ₪45k. Awaiting Dave's OK.
- 2026-10-25 — Full studio review; TLDB (ops board) rebuilt: 2 focus, 7 parked-built, 6 paused, 3 retired/unknown. Open questions to Dave: Fairent state, WH33LZ/AXIS, Chabad pilot, Vibrant reply.
- 2026-10-27 — Status check: 8 LinkedIn requests were sent 25 Oct (board missed it; fixed). SH✡MER v292. Twilio resolved. LickPick still getting releases while paused.
- 2026-10-27 — Agents: batch-2 outreach + follow-ups → to-do list; SH✡MER pilot one-pager staged; grants shortlist (Tnufa 9 Nov is the only strong open fit); Tnufa drafting started; TH backend wake-up running. Morning plan rewritten to execute, not just report.
- 2026-10-27 — Tnufa drafts done; IIA email in Dave's Gmail drafts (unsent). Rule found: 3Shamrocks can't be paid from the grant → Dave applies personally.
