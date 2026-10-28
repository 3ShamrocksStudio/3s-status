# STUDIO BRAIN — 3Shamrocks Studio
Single source of truth. Updated: 2026-10-28 (day 8 of 182).
Live board data: `3shamrocksstudio.github.io/ops/data.json` · Blockers: `BLOCKERS.md` · Nightly checks: `audit.json`, `staleness.json`.

## Goal vs reality
- Target: $1M booked by 2027-04-21 → $16M later. Next gate M1: $25k by 2026-11-21 (27 days).
- Booked: **$0**. Pipeline: 0 calls · 0 proposals · 0 pilots.
- Pace needed now: ~$925/day to hit M1.
- Revenue split (live board): services $600k · SH✡MER B2B2C $220k · grants $130k · products $50k.
- Rule: product work paused until a first call is booked (weekly review #2).

## STRATEGY v2 (28 Oct 2026 — Claude decides; never ask Dave "is X a money product")
1. **Cash now — Design Services.** Sprint ₪32k (2 wks) → **Launch Package ₪120k** (brand + product UI + design system, 6 wks, pitched right after a funding round) → retainer ₪24k/mo (2 days) or ₪38k/mo (full-time). All + VAT. Bench of 2 from the 3rd client.
2. **Big contracts — SH✡MER.** Testers opt-in → Play production → pilots. Buyers by speed: communities/yishuvim → schools & youth movements → regional councils → US communities (Miami foothold). Free for residents always. Founding-partner offer (free 90 days for feedback + case study) only for the first 1–2 communities; everyone else ₪2.5k pilot. Nature = add-on only, after Dave tests it himself.
3. **Grants & sponsors.** Tnufa ×2 (TH + SH✡MER) pending Dave go/no — it's a grant repaid only via royalties on sales. Govtech-type programs for SH✡MER. Rotary/CSR for Trashure-Hunters (lead: Suzan Kagan, Rotary D-2490).
4. **Passive, no new build.** LickPick Pro $9.99/yr, AI Brand Kit $29, Chore Wars family plan. Payments (Lemon Squeezy) + one launch post each; pour effort only if one earns in 30 days. No more LickPick feature work.
- **Parked:** Ezra, Milo, Fairent, Rookie & King, J8N.IX, Design System (becomes the ₪55k install), TH extras, WH33LZ, AXIS, Media Network.
- **Messaging rule:** nothing is sent on Dave's behalf; every message is matched to the recipient's role (buyer / design partner / connector / endorser / tester) before it goes in his to-do list.
- **Honest range by 21 Apr:** $250–550k on the current path; $1M needs ~4 Launch Packages + 6 retainers + 1 council deal.

## Revenue engines — next action
| Engine | Status | Claude does | Dave must do to unlock |
|---|---|---|---|
| Services | 7 connect requests + Alex DM pending; 10 batch-2 notes queued; prices set 28 Oct | Add Launch Package to offer page; follow-ups for accepts; teardown per reply | Send Alex DM; report accepts |
| SH✡MER | 3 of 14 testers opted in; reminder email in Dave's Gmail drafts | Role-matched pilot messages once Ohad/Natan roles known | Send reminder; answer Ohad/Natan roles |
| Grants | Tnufa drafts done, deadline 9 Nov | Finish both apps | Go/no; portal by 1 Nov; CV + ID by 5 Nov |
| Passive apps | Frozen pending payments | Wire Lemon Squeezy when account exists | Open Lemon Squeezy |

## Products — technical state (nightly audit 2026-10-25)
| Product | Live check | Hard blocker |
|---|---|---|
| SH✡MER site + app | PASS | Firebase `deploy --only database` (security hole). Twilio done. |
| SH✡MER Nature | PASS | Missing `nature-hero.jpg`, `nature-badge.png` |
| Trashure Hunters MVP | Staging sign-in works on real backend (28 Oct) | Optional: Anthropic key for AI photo checks (photos auto-approve until then) |
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
4. **[DONE]** Grants shortlist. 5. **[DRAFTED — awaiting Dave]** Tnufa A (TH) + B (SH✡MER), ₪250k budgets each; drafts sent to Dave in chat (not in this public repo). Dave decisions by 29 Oct, docs by 5 Nov, submit 8 Nov. 6. **[DONE — awaiting Dave]** Outreach batch 2 (10 notes) + 7 follow-up DMs, in Dave's to-do list. 7. **[DONE]** TH backend live on Supabase free tier; staging web build signs up, signs in, reaches the map; rewards locked to server.

## Log
- 2026-10-25 — Brain initialised from ops/data.json, BLOCKERS.md, nightly audit. Started queue item 1.
- 2026-10-25 — Outbound list done: 31 companies, top fits Zenzap, Loora, Chamelio, enso, Euno. Spot-check: Zenzap $44M confirmed (TechCrunch 14 Oct). Now: queue item 2.
- 2026-10-25 — Offer page staged and verified (claims match site, prices match board, EN/HE render clean). Now: queue item 3.
- 2026-10-25 — Offer page rebuilt on site branding; prices cut to ₪18k/mo · ₪24k · from ₪45k. Awaiting Dave's OK.
- 2026-10-25 — Full studio review; TLDB (ops board) rebuilt: 2 focus, 7 parked-built, 6 paused, 3 retired/unknown. Open questions to Dave: Fairent state, WH33LZ/AXIS, Chabad pilot, Vibrant reply.
- 2026-10-27 — Status check: 8 LinkedIn requests were sent 25 Oct (board missed it; fixed). SH✡MER v292. Twilio resolved. LickPick still getting releases while paused.
- 2026-10-27 — Agents: batch-2 outreach + follow-ups → to-do list; SH✡MER pilot one-pager staged; grants shortlist (Tnufa 9 Nov is the only strong open fit); Tnufa drafting started; TH backend wake-up running. Morning plan rewritten to execute, not just report.
- 2026-10-27 — Tnufa drafts done; IIA email in Dave's Gmail drafts (unsent). Rule found: 3Shamrocks can't be paid from the grant → Dave applies personally.
- 2026-10-27 — Dave delegated the Tnufa call to Claude → GO on both (A TH, B SH✡MER); applicant Dave personally; start Feb 2027; global pitch as drafted. Co-funding only if approved (Jan). Open from Dave: עוסק/בע"מ, portal registration (1 Nov), ID + LinkedIn (5 Nov), submit (8 Nov).
- 2026-10-27 — Dave: 3Shamrocks is עוסק מורשה → IP already his personally; no transfer paper. Drafts updated.
- 2026-10-28 — TH backend done: all migrations applied (seasonal events + security lock-down, old reward function renamed not dropped), rewards server-only verified, staging sign-in verified end to end. 2 harmless test accounts left on staging (deletion blocked).
