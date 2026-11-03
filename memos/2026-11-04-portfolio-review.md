# Portfolio deep-scan review · plan for Wed 4 Nov 2026

Prepared 3 Nov 2026 evening by Claude (COO seat) for Dave (CEO). Staged products are not launched.

## Where we stand
- Booked: **$0**. M1 = $25k by 21 Nov: 18 days left, about $1,390/day needed. Source: ops/data.json (`booked: []`, score `booked_ils: 0`).
- Pipeline: 27 sent, 8 accepted (Catch, Modelyo, Rein, Keewano, Mave on 28 Oct; Bites, Swish, Marquee on 2 Nov), 0 replies, 0 calls, 0 proposals, ₪800 quoted (VIBRANT). Source: ops/data.json `score`.
- Only one product can still put cash in by 21 Nov: **studio services**. Everything else is slower.

## Method
Score = ($ value × probability) ÷ days-to-cash, as BRAIN.md section 3 says. $ values use the prices already set in ops/data.json `engines` and the dashboard, converted at about ₪3.7 per $ (an assumption). **Probabilities and days are Claude's estimates, not data.** They are written so the next review can check them against what happens. Steps that wait on Dave score only once he does them.

Verdicts: **fire** = all-out push now · **pour** = keep investing · **park** = frozen, no build work, revisit date · **kill** = retire (revived only on Dave's word).

## Scoreboard (highest first)

| # | Product | Next cash event | $ | P | Days | Score | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | Studio services | First Sprint ₪32k | 8,650 | 0.15 | 25 | **52** | FIRE |
| 2 | SH✡MER | First ₪2,500 pilot (+ Tnufa ~₪100k, scored separately: 45) | 680 | 0.25 | 30 | **5.7** | POUR |
| 3 | Trashure Hunters | One CSR/sponsor deal (~$5k) | 5,000 | 0.05 | 90 | **2.8** | PARK to 15 Nov |
| 4 | LickPick | First month of Pro subs (~10 × $2.99) | 30 | 0.3 | 7 after ID step | **1.3** | POUR (passive) |
| 5 | Ezra | One health-fund/council pilot (~$10k) | 10,000 | 0.02 | 180 | **1.1** | PARK to 21 Dec |
| 6 | Fairent | One data-licence trial (~₪5k) | 1,350 | 0.05 | 90 | **0.75** | PARK to 21 Dec |
| 7 | Media Network (6 IG accounts) | First affiliate/lead income | 100 | 0.1 | 30 | **0.3** + indirect leads | POUR (automated, low cost) |
| 8 | Chore Royale | Family plan / parent-side ads (not built) | 100 | 0.1 | 90 | **0.1** | PARK |
| 9 | SH✡MER Nature | Sold only inside SH✡MER deals | 0 standalone | — | — | **0** | PARK (add-on) |
| 10 | Milo | None: needs clinical/legal clearance first | 0 | — | — | **0** | PARK to 21 Dec |
| 11 | J8NIX | None: internal tool, no buyer | 0 | — | — | **0** | KILL as a product |
| 12 | R&K (Rookie & King) | None: no pricing, no live page | 0 | — | — | **0** | KILL (retire) |

## Product by product

### 1 · Studio services — FIRE (score 52)
Evidence: offer page staged (https://3shamrocksstudio.github.io/work-with-me.html); 8 founders accepted on LinkedIn, messages ready in Dave's own template but not sent (to-do, checked 2 Nov 13:00); 5 DMs of 28 Oct unanswered.
1. It is the only engine that can pay before 21 Nov. One Sprint is a third of M1.
2. Everything is ready: the only missing step is Dave pressing Send (about 30 s each).
3. The 36% accept rate (8 of 22) is healthy; 0 replies so far is because none of the 8 accepted founders has been messaged yet (only the 5 DMs of 28 Oct went out).

### 2 · SH✡MER — POUR (score 5.7; Tnufa 45)
Evidence: v312 app fixes on main (fb412cd), live site at v318 (3 Nov: popups, update notices, 'הידעת?' tips, status dot; events preview visible to Dave only); in-app SOS alarm takeover on main (3b70529); closed-app push on branch sos-push-alarm; lifecycle spec reviewed (8be87aa, 9 decisions for Dave); iOS prepared on branch ios-native; 11 council emails ready, none sent; 3 of 14 Play testers opted in.
1. A single council deal is worth ₪50–300k a year, the largest ticket we have after services.
2. The Tnufa grant (~₪100k, submit 8 Nov) depends on SH✡MER being real and moving.
3. But pilots cannot be paid until the Morning payment links and the dashboard lock exist, so near-term $ is small: send the no-price emails now, keep build work to what Dave's test asked for.

### 3 · Trashure Hunters — PARK to 15 Nov (score 2.8)
Evidence: MVP built and tested (430 unit + 122 security tests, 23 Oct); site deepened 3 Nov; hunts wait on one DB approval from Dave.
1. Money comes from sponsors/CSR and the next Tnufa round, both months away.
2. A closed Play test needs 12 testers and a Play account step.
3. Assets are strong, so parking costs little; it returns as the second grant.

### 4 · LickPick — POUR, passive only (score 1.3)
Evidence: Pro subscription built ($2.99/mo, $14.99/yr); Lemon Squeezy still shows "Activate your store" (checked 3 Nov 16:47); audio bug + band-harmony fix in progress.
1. One 5-minute identity step from Dave switches on recurring revenue (his preferred model).
2. Tiny $ near term; no new features until it earns.
3. Kill rule stays: 0 sales 30 days after payments go live → kill.

### 5 · Ezra — PARK to 21 Dec (score 1.1)
Evidence: Hebrew-first agentic helper for older adults; staging page https://3shamrocksstudio.github.io/senior-helper/ (last change 21 Oct); dashboard notes "UX broken in real use" and "AI answers not working".
1. The buyer (health funds, councils) has a long cycle: ~6 months to a first pilot.
2. The product is not demo-ready: the AI answers do not work and real use broke the UX.
3. It fits the same councils as SH✡MER, so it can ride along later at almost no sales cost.

### 6 · Fairent — PARK to 21 Dec (score 0.75)
Evidence: app on staging, last push 2 Nov (repo fairent); its own audit (FAIRENT-AUDIT-2026-11-02.md) says expected cash before 21 Jan 2027 ≈ 0.
1. Renters do not pay; the only paid path is a data licence to publishers, untested.
2. The cheapest disproof (10 publisher conversations) needs Dave's time, which services need more.
3. Strong PR/civic story: keep the staged app, revisit when SH✡MER pays.

### 7 · Media Network (6 IG accounts) — POUR at low cost (score 0.3 + indirect)
Evidence: first posts live on all 6; 4 free pages live (getfetch, dealxscout, meetinq, echoxreels) at /n/<account>/free/ (HTTP 200, 3 Nov); 18 proof pieces made, 4 verified; Chrome logged out of all 6 on 3 Nov.
1. Runs almost fully on Claude's time (scheduled daily/weekly tasks), so the cost to Dave is one log-in.
2. Direct income is small; the value is leads for services and LickPick, and proof for every product.
3. Dave rejected the old post style on 3 Nov; only verified proof reels go out from now on.

### 8 · Chore Royale — PARK (score 0.1)
Evidence: studio page rebuilt from the crest 3 Nov; app at https://3shamrocksstudio.github.io/chore-wars/ (last change 21 Oct); no payment or ads built; name not decided (Royale vs Wars).
1. Free-for-families model with no payment path built.
2. Trademark check on the name not done.
3. Works as a studio showcase piece already; no more build until engines 1–2 pay.

### 9 · SH✡MER Nature — PARK as an add-on (score 0)
Evidence: page rebuilt on the SH✡MER template 3 Nov (staging); APK 1.0.8 + nature-v2 test APK.
1. Sold only inside SH✡MER deals (board, 2 Nov).
2. Dave's re-test is the gate; nothing else to do until then.
3. Two council emails (Eilot, Arava) stay on hold until his GO.

### 10 · Milo — PARK to 21 Dec (score 0)
Evidence: prototype at https://3shamrocksstudio.github.io/milo-app/ (last change 22 Oct); its own audit says "design prototype, not clinically or legally cleared".
1. A product for vulnerable children needs clinical and legal review before any sale.
2. Needs Dave's brand/character direction before any rebuild.
3. Buyers (clinics) are slow and regulated; no cash this quarter.

### 11 · J8NIX — KILL as a product (score 0)
Evidence: "3Shamrocks Studio Command Center" dashboard, live page last changed 10 Oct (https://3shamrocksstudio.github.io/j8nix/).
1. Its job (every project, what waits on Dave) is now done by the ops dashboard and Dave's to-do, which are kept current every shift.
2. No buyer, no price, no plan; as a public product it would compete with free tools.
3. Keeping two dashboards in sync costs shifts and causes conflicting numbers.

### 12 · R&K = Rookie & King — KILL / retire (score 0)
What it is: a LinkedIn chess ice-breaker prototype (dashboard: "Prototype on staging, 22 Oct"). Linear has one backlog line, 3SHMRX-133 "R&K (conference)" pitch, untouched since 22 Oct. No live page found (/rookie-king/ 404) and no folder on Dave's Mac (Desktop/3S Projects, searched 3 Nov).
1. No way to make money was ever defined.
2. Nothing live to show or sell.
3. Retiring it frees one line of attention; revive on "revive R&K".

## Dave asked: "J8NIX, EZRA, FAIRENT — worth pushing forward?"
**No, not now.** None can bring cash before 21 Jan, and each hour spent there is taken from services, the only engine that can hit M1.
- **J8NIX: kill as a product.** The ops dashboard + to-do already do its job.
- **EZRA: park to 21 Dec.** Fix only when SH✡MER council talks open a door to sell it alongside.
- **FAIRENT: park to 21 Dec.** Keep it as a portfolio case; one cheap licence test later.

## Plan for Wed 4 Nov

### Dave (ordered by $ impact; every item is in the to-do, self-contained)
1. Send the 8 founder messages already written in your template (founders of Bites, Swish, Marquee, Modelyo, Rein, Keewano, Mave, Catch). Services, score 52.
2. Send the 5 follow-ups due Wed 4 Nov (Chamelio, enso, Euno, June, Pluto founders).
3. Tnufa: answer the advisor yes/no and drop the 2 filled files into the chat (needed by Thu 5 Nov; submit Sun 8 Nov).
4. Send the 7 council emails from dave@3shamrocks.com, then the 2 community-lead WhatsApps.
5. Wix: change the 4 DNS lines so 3shamrocks.com shows the new studio site founders will open.
6. Lemon Squeezy identity step (5 min): switches on LickPick subscriptions.
7. SH✡MER: answer the 9 SOS decisions (incl. Firebase Blaze yes/no), and GO on the 3 site text fixes.
8. Instagram: log back in to all 6 accounts in Chrome; then the 5 bio links on the phone.
9. Apple: install Xcode + enrol ($99, already approved).
10. Confirm the portfolio calls: kill J8NIX + R&K, park Ezra/Fairent/Milo.

### Claude
- CTO: popups, update notices, 'הידעת?' tips + status dot done (v318 live); events preview live for Dave only; fix the app feedback address (still markodave@gmail.com on main) in the next version; build the closed-app push APK for the Play testing track (server part only after Blaze yes).
- CRO: role-check the 8 founders before Dave sends; draft replies the same day; 10 new qualified funded-startup contacts with sources.
- CFO: create the 4 Morning payment links for SH✡MER pilots/licences (test mode) and reconcile LickPick pricing in data.json.
- Grants: finish both Tnufa files the hour Dave drops them.
- CMO: swap the 20 old-style IG posts (4–10 Nov) for verified proof reels; finish the tester post image (v311 screens, PNG logo).
- CDO: finish the studio site revision list; fix the wrong VIBRANT logo file.
- COO: retire J8NIX + R&K on the dashboard once Dave confirms; keep every surface current.

## Check dates
Each verdict is logged in ops/brain/brain.json `decisions` with a check date (services 9 Nov, the rest 21 Nov or their revisit date).
