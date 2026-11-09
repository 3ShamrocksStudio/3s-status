# Dave's revisions ledger (every request, until done)
Rule (Dave, 3 Nov 22:53): never skip any of his revisions, comments, demands or requests.
Every shift reads this file. A line moves to DONE only with a live link plus a verifier PASS.
Status: OPEN, BLOCKED (on Dave, with the exact ask) or DONE.

## SH✡MER
- DONE v318: move shomers between circles; map zoom; green SOS banner; one-line labels; popup scheduler; update card for everyone; SOS stays red; "הידעת?" tips; status dot; in-app SOS takeover
- DONE: events preview for Dave only (Zalka as a regular event plus 5 sourced events, rating, 3-tap report, dashboard ?evp=1)
- DONE v319 (379bf9a): events polish - event time (not publish) on cards and SH✡MER Command popups, tappable summary, "הידעת?" tip never covers the event card
- DONE v320 (45c186d): removed the gold "+ דיווח" button and its report sheet from the map (events preview); older report entry points kept
- DONE v320 (326cdad): map - only my own position shows the gold ✡; every other user (incl. the founder) is a green pulsing dot, ~1 km rounding kept
- DONE v320 (c83b2b6): CPR card - 110/min beep metronome (Web Audio), big start/stop, pulse on beat, screen kept awake, stops when the card closes
- DONE v320 (f5949a4): event card shows only on a tap; X, map tap or another sheet closes it; sits above the bottom safe area
- DONE v320 (71ddde3): "עדכונים" renamed "באזור שלי" - real rows (SOS, nearby, recent; archive = last 90 days), new filters, one-line rows open the event card
- DONE v320 (636db16): version bump, live version.json = v320
- DONE v322 (8e2312d, 0b6050b, 8382971; VERIFIED PASS 2026-11-05: live v327 as a non-preview user loads 13 events with no gate, the 8 new ones carry src + src2, live events-seed.json = repo md5; the "N אירועים" pill was later removed in v324 as asked): events on the map for ALL users (no preview gate, pill "N אירועים"); 90 days from event time on map, באזור שלי and SH✡MER Command (Zalka pinned); +8 sourced events (fire, medical, suspicious, weather/quake), 2 sources each, credited "צוות SH✡MER · לפי <outlet>", linked "מקור:", category image + "מה עושים במצב כזה" + 100 · 101 · 102; sources in docs/events-sources.md. NEEDS YOUR EYES: confirm/dispute votes stay preview-only until the votes rules are deployed
- VERIFIED PASS (2026-11-05, live www.shomer-app.co.il/shomer.html v327, Playwright 390x844, cache-buster, SW and every Firebase call blocked, nothing sent): v324 bb18736 no events counter (no #evp-pill, no "N אירועים" text); v325 f6bb63e bell gold for new events (class has-new, border + badge rgb(201,168,76), bellGlow); v326 e86a283/903de75 bell red during an active circle SOS (has-sos, border/icon/badge rgb(204,20,38), badge "SOS" with 0 new; an 'old' SOS or a cleared one drops it); own position = gold ✡ (meIcon mk-me-founder svg), others/circle/presence = green dot rgb(43,196,126), no crest; CPR beep measured 110.0 bpm (0.545 s apart); no "+ דיווח" anywhere; "באזור שלי" opens with real sourced rows (Petah Tikva, Route 232, Dimona…); 0 page errors
- DONE (stale line, reconciled 9 Nov): rename "עדכונים" to "באזור שלי" shipped in v320 (71ddde3, line above); live v332 shomer.html shows "באזור שלי" and no "עדכונים" label (curl with cache-buster, 9 Nov)
- BLOCKED (Dave): locked-phone push alarm, build 1.0.64. Needs GO Blaze, Firebase key, google-services.json, GO Play, and approval of the privacy text
- BLOCKED (Dave): the 9 event-lifecycle decisions, then build steps 0–7 (EVENT-LIFECYCLE-SPEC.md)
- BLOCKED (Dave): GO on live fixes: iPhone SOS instruction text, 5 vs 6 shakes, privacy policy
- BLOCKED (Dave): iOS native. Needs Xcode plus Apple Developer enrolment, then "Apple done"
- BLOCKED (Dave): Arabic role term. Ask: "شومير" or "حارس"
- BLOCKED (Dave): LinkedIn tester post image is ready since 3 Nov (outputs/linkedin-shomer-beta.png: v318 screens, PNG logo). Ask: "post it" or "skip". It says 15 testers; Claude updates the number to the live opt-in count before you post
- BLOCKED (Dave GO Nature): SH✡MER Nature page on the brand domain
- OPEN (privacy, advanced 9 Nov): person alerts carry the subject's account id (`subjUid`) in a record every signed-in user can read. Plan written: private `pasubj` record + per-alert hash tag, rules switch, 90-day expiry, privacy-page wording (644ca91, branch subjuid-plan, docs/SUBJUID-PLAN.md). Build waits on the "yes Firebase" rules batch. NEEDS YOUR EYES: the privacy-page sentence

## LickPick
- DONE lp-2026-11-03e: audio damage fixed; band accuracy improved; "licks"/"jams" wording; edge cases handled
- DONE lp-2026-11-04a (dbe0816): band key detection tells a key from its relative major/minor
- REOPENED (verifier B2 FAIL on lp-2026-11-04a, e5d6cff): half-time cutoff was 140 not ~130, flag never shown, click and notes paths disagreed at 150 BPM
- VERIFIED PASS (2026-11-05; live staging LP_VER lp-2026-11-04c, deployed index.html = repo md5; tempoOctave 129/130 → 1×, 131/140/150 → ½× with halfTime; sung-notes grid 120/128 full, 135/150 half-time; keyOfNotes: C-major lick with F ending on long G → C, G-major lick with F# → G; Groove button "½×" in deployed code; bandA and notes paths both use tempoOctave. Note: a lick with no C or C# ending on D reads D, by the tonic tie-break): lp-2026-11-04c (ec135a3) key vs its fifth now decided by the scale notes (C major with F stays C even ending on G; G major needs F#), one 130 BPM half-time cutoff everywhere, "½×" also on the Groove button. Supersedes lp-2026-11-04b (ec66f17), which read a C-major lick ending on G as G major. Staging: https://3shamrocksstudio.github.io/lickpick/app/
- DONE lp-2026-11-04a: "licks" wording checked, no user-visible "takes" left
- OPEN (half done 9 Nov): landing page checked live (https://3shamrocksstudio.github.io/lickpick/, Playwright 1440 + 390, full scroll: 0 console errors, 0 failed requests, 0 broken images, nothing stuck hidden, no "takes", no sideways scroll). Left: the LickPick folder in 3S Projects (brand and business files) needs the Mac folder connected; next shift with device access
- BLOCKED (Dave): Lemon Squeezy "Activate your store"

## Studio site / portfolio
- DONE: all 16 homepage items, work-with-me, pilot page, floating-device portfolio per the reference, animated minime
- OPEN: verifier fixes in progress (carousel slides, tap copy, Nature page eyebrows/footer/link, pilot monthly prices, work-with-me style, demo names)
- BLOCKED (Dave): 5 Wix DNS changes, then migrate to www.3shamrocks.com (old Wix design retired)
- OPEN (Dave's eyes): small starter offer
- DONE 8 Nov (Dave approved): Concept Lab tile and page (3e01e23, 3fdd5a1), fit quiz linked from nav, hero and work pages (6421820), quiz prices removed (b9ed26d), J8NIX off the site (52d58b6)
- DONE 9 Nov (c252d3b): J8NIX residue removed: homepage brand-sheet tab gone, work/j8nix.html redirects home. Live with cache-buster: 0 "bt-j8" on index.html, work/j8nix.html title "Moved"; Playwright 1440 + 390: 4 brand tabs switch, no J8NIX text or image, no sideways scroll
- DONE 9 Nov (7612b50): carousel approval board says "licks", not "takes" (LickPick rule). Live https://3shamrocksstudio.github.io/review/carousel/: 0 "takes"
- DONE 8 Nov (b9ed26d + work-with-me.html): fractional offer prices removed; page reads "Fixed price, agreed after a 20-minute call"
- OPEN, awaiting verifier + Dave (4 Nov homepage pass, site 469f4df, staging https://3shamrocksstudio.github.io/):
  - Name: Chore Wars only. Work pages/menus/redirects back to the 1e591ae rename, ops text fixed, old preview-home.html now redirects home (59270ca)
  - 1 Minime devices: right phone removed; one phone left of the minime cycles 11 real screens (SH✡MER v322 x3, LickPick x2, Chore Wars demo x3, TH x2, FaiRent x2) with a brand tag; no welcome/splash screens
  - 2 "2×" stat: on the same line as 20+, 10+, 11 at 1440 and 390
  - 3 68% vs 34% strip: removed with all its text; logo strip AposHealth, VIBRANT, Guberman, Eldan, Winplant (mono, colour on hover). VIBRANT logo cut from its own brand book. Visualed left out: no real logo on the Mac or in the repo
  - 4 Things I build: 1-2-3-4 flow removed; 4 product-led tiles (Trashure-Hunters, LickPick, Chore Wars, SH✡MER) with real screens/art, no numbers
  - 5 Portfolio: f7e2f7b floating-device stage restored (splash when off, hover plays screens, click opens the page, Coming soon for J8NIX/EZRA/Milo/Media Network); Chore Wars tile uses its own logo + current screens
  - 6 Quote: removed; brand wall of real marks (SH✡MER + Nature, Chore Wars, LickPick, TH cast, FaiRent, J8NIX, Milo, EZRA, R&K) + moving Chore Wars icon set
  - 7 Overall: light page (no dark/green theme), Bricolage Grotesque + Instrument Sans, one hero load sequence, 0 console errors, 0 broken images, no image over 400 KB, no sideways scroll at 390
- OPEN, awaiting verifier + Dave (4 Nov homepage pass "s4", site 658f49f/078efca/0ecc785/32f4b8e, staging https://3shamrocksstudio.github.io/):
  - Name: Chore Royale on the whole studio site (home, footer, work/chore-royale.html is the page again; work/chore-wars.html, chorewars-case.html, products/chore-royale.html redirect to it; ops product label). Game app links /lab/chore-wars/ and /chore-wars/app/ unchanged
  - 1 Minime: clean cutout (minime_nobg.webp, alpha checked), no box; SVG eye layer on his eyes only: irises follow the cursor, drift gently on touch, lids blink every 2.4-6 s; one phone on his left
  - 2 XP bar: "Level 20+ · since 2007", fills to 100% on load with glow, glint and sparkles; "Next quest: your product →" links to #contact
  - 3 Background: black page, fixed canvas with brand-purple aurora and particles that swirl round the cursor, ripple on click and drift with scroll; low alpha behind text; static frame on reduced motion
  - 4 Devices: new titanium phone and laptop frames, dynamic island, glass glare, coloured under-glow, floor reflection, float motion; real screens at 2x
  - 5 Logo strip under the hero: removed
  - 6 One section "Things I build.": 9 floating devices, branded splash when off, hover plays real screens, click opens the page, Coming soon on Milo/EZRA/J8NIX/R&K. Phones: SH✡MER, Chore Royale, LickPick, FaiRent, TH, Milo, EZRA, R&K. J8NIX = only laptop, real platform screens (live /j8nix/ captures, internal items hidden). SH✡MER Nature and Media Network gone from the site (Nature pages redirect to work/shomer.html)
  - 7 Marks wall: SH✡MER badge + 9 real map markers + 4 emergency icons + 8 first-aid cards; LickPick logo + 12 app icons; Chore Royale mark + 45-icon band; J8NIX wordmark, app icon, status chips and platform colours; full TH cast (5 eggs, 5 Elemonsters, 5 kings, Orbo, King Grime). FaiRent/EZRA/Milo/R&K removed from the wall
  - 8 Contact: no screens; one line, one "Start a project" button, email + LinkedIn
  - 9 Facts: 20+ yrs since 2007, 10+ HealthTech, 9 products = 9 devices, 2x retention once (hero), TIME Best Invention 2023 once (VIBRANT card), AposHealth brand and product marketing
  - Brand-v3: assets/brand-v3/rk/ exists locally but is not committed; R&K stays on assets/studio/rk/logo.png until that team pushes. No milo/ezra folders yet
  - QA: screens /tmp/claude-0/pw/s4-*.png (1440 + 390), 0 console errors, 0 broken images, no sideways scroll at 390, no image over 400 KB
- OPEN, awaiting verifier + Dave (4 Nov homepage pass "s7", site b73b60e..9ceb40e, staging https://3shamrocksstudio.github.io/):
  - 1 Minime: 13% smaller; Grok Imagine idle loop (breath, head turn, blinks), keyed to alpha webm (472 KB) + poster; Safari and reduced motion keep the still with live eyes
  - 2 Career level bar (2007 Studio, HealthTech VIBRANT/AposHealth, TIME 2023, Now 9 products) fills node by node; hero logo pill under the phone removed
  - 3 Eyebrow "Product Design Director · since 2007"; heart icon removed
  - 4 "See the 4 ways" link removed (footer "Work with me" too)
  - 5 Particles pulled in and magnified near the cursor, slower; click burst throws shamrock leaves (3S greens, teal, purple)
  - 6 Stats in first screen (bottom 838/900 desktop, 714/844 phone); "built in weeks" no lone word
  - 7 Order: SH✡MER, J8NIX laptop, LickPick, TH, Chore Royale, FaiRent, then Milo, EZRA, R&K (coming soon); nothing removed; J8NIX uses Dave's real logo and icon.svg (assets/brand/j8nix-real), brand-v3/j8nix no longer used
  - 8 Marks: kept, rebuilt as 5 tabbed 3SDS brand sheets with each brand's palette, type and motion
  - 9 "Product and brand leadership in HealthTech": AposHealth laptop, VIBRANT laptop + phone, real slides and app screens
  - 10 Contact: River of Three background (crop, no watermark, 64 KB); 3S mark draws itself, sprout unfurls, glitch; leaves lean to cursor, bloom + leaf burst on click
  - 11 Photo stickers: hat, hair, pixel shades, moustache, shamrock pin; drag, tap, drag off, Reset
  - NEEDS YOUR EYES: "9 products" label avoids "shipped" because 4 are coming soon
  - QA: /tmp/claude-0/pw/s7-*.png (1440 + 390), live check 0 console errors, 0 broken images, no sideways scroll, images under 400 KB, video under 2.5 MB, reduced motion OK

## Instagram
- DONE: first posts on 6 accounts; bios; 4 free pages; 3 proof reels scheduled for 4 Nov; old posts removed on shomer, meetinq and dealxscout
- OPEN (night shift 00:13): 18 proof reels, each brand in its own style; replace the old getfetch and echoxreels posts; schedule to audience times
- OPEN: daily engagement with an approval queue (17:23)
- BLOCKED (Dave): bio links in the phone app; keep or redraw the AI-made echoxreels/meetinq logos
- Rule: stay logged in, never log out, switch between accounts

## Chore Wars / R&K (Rookie & King)
- OPEN (night lab 01:23): game rethink (one fantasy, clear win/lose, pass cards) plus a playable prototype; R&K concept/design/monetization upgrade. Game part replaced by the 4 Nov rebuild below
- OPEN (superseded by the fix pass below, 4 Nov): Dave rejected the overnight v2 prototype. Rebuilt as Chore Wars at https://3shamrocksstudio.github.io/lab/chore-wars/ (old /lab/chore-royale-v2/ redirects there). Each complaint and the fix:
  - "Boring, dull, design is lame": new bright game look. Purple arena, chunky ink outlines, hard shadows, springy reward motion, sounds and haptics.
  - "No branding, identity, iconography, typography or style": spray-blaster logo and wordmark (SVG + PNG), 6-colour system, Bungee + Nunito, 33 custom icons, 4 ranks, 8 player avatars. Brand sheet at /lab/chore-wars/brand.html
  - "Lots of words, kids won't read": icon-first screens, labels of 6 words or fewer, onboarding is 3 swipes
  - "Not experience focused": points burst with confetti, crown drop for the champion, steal shake and pink flash, live feed
  - "All users on one phone?": every player joins on their own phone with a code or QR, realtime sync (Supabase, free project). 3-phone test: 9/9 sync checks PASS
  - "Users fight for points, XP, chore-switching": grab, steal (Steal card), Shield block, swap offer/accept/counter, parent bounty, weekly duels, weekly leaderboard with crown, streaks, parent photo approval
  - "Nobody will pay ₪20/month; use paid ads and paid users": free to play, opt-in rewarded ad slot (placeholder, no SDK), per-player extras (skins, season pass, card packs, price TBD). Sourced 1-page model at /lab/chore-wars/model.html
  - Old names (Chore Royale, ClanForge, ChoreQuest) removed from the new build, the lab path and the chore-wars README
- OPEN (awaiting verifier + Dave, 4 Nov fix pass after verifier review; chore-wars 85a99a5, site 7da526c):
  - Security: a code alone shows nothing; new phones wait until a parent taps "Let in" (freed kid seats too). Code, join and PIN tries locked after 5 per 15 min (joins 8). PINs bcrypt. Unreviewed proof photos auto-delete after 7 days (pg_cron); photos max 720 px JPEG
  - Public demo is the invented "Thunder House" (Captain, Zap, Nova), in-browser only, resets on reload. M Clan is off every public path; its code was rotated and is not in any repo. Test households (incl. verifier's 56XTCH) deleted
  - Name: /chore-wars/ and /royale/ etc. redirect to the new app; studio home, footer and every work page menu say Chore Wars; work/chore-wars.html (old path redirects)
  - Design: Check it shows the photo big or a "No photo" badge, big Approve/Redo; labelled "Ad" countdown + card flip; kids open on Chores with Grab pulsing; rarity board (Bounty/Legend wide + glowing, Epic/Rare/Common), flip + points burst; badges at join, rank tiers, crown ceremony, streak flames, sound toggle with synth SFX
  - Model page: Israeli Privacy Law Amendment 13 (in force 14 Aug 2025), COPPA/GDPR-K: contextual ads only
  - QA (live staging, 390x844): 19/19 checks PASS incl. parent-approved join, stranger sees nothing, 6 wrong PINs lock. Screens: chore-wars-qa/2026-11-04b/live
- VERIFIED PASS (2026-11-05, SELECT-only on the live DB + live demo): 6/6 codes 8 chars with no 0/O/1/I (check constraint live); photo cap live (cw_chores_proof_250kb + cw_act > 256000); budget superseded by pass "d"; demo shop 3 "Coming soon", no prices; PIN dots with 700 ms peek in code; "Jakob" gone from shomer.html/nature.html; 0 page errors. Not re-run: the 40-device attack (would write rows). Was: OPEN (awaiting verifier, 4 Nov final fix pass "c"; chore-wars 6dacdb3, site 2ff00eb): global code-guess budget (30 misses/10 min across all callers, then 5 min cool-down) + backoff per /24; 8-char codes (no 0/O/1/I), M Clan code rotated (not in any repo); server refuses photos over 250 KB; shop shows "Coming soon" locks (TBD stays on model.html only); ad countdown shows a spinning card, reward name and ring; PIN shows dots with a brief last-digit peek; toasts moved off the header; victory screen + rank-up, rival callout, avatar streak flame. "Jakob" placeholder replaced (SH✡MER, nature preview). QA live 390x844: all PASS, 0 console errors, 40 rotating-device bad codes hit the global limit. Screens: chore-wars-qa/2026-11-04c/live
- VERIFIED PASS (2026-11-05, SELECT-only): live cw__code_gate counts 'gcode' rows and returns 'locked' without counting; live cw__code_fail caps 10 gcode per /24 per 10 min; cw_seats/cw_join/cw_parent (anon) all go through the gate + fail; old overloads not executable by anon; internals not executable by anon/authenticated; /24 backoff (5,10,20… s) caps one /24 at ~9 per 10 min, so it takes 4 networks to fill 30 (matches the QA). PINs: 6/6 bcrypt $2?$08$, 60 chars, checked by cw__pin_ok, 5 tries per 15 min per household; all 8 cw tables RLS on, no anon table rights, no policies (RPC only). Live demo: lone tile centred (93/93 px), header solid rgb(106,59,255), 390 wide. Leftovers as in the BLOCKED line below: cw__code_global, cw_tmp_dbg still exist (not callable), attempt rows not purged. Was: OPEN (awaiting verifier, 4 Nov pass "d"; chore-wars e4d9653/1bcebf6/ca425ae, site b947c7e): code-guess lockout fixed. Only real misses from callers not in backoff count; 'locked'/'busy' tries and successful joins never count; one /24 fills at most 10 of the 30 global slots, so one attacker network cannot lock families out. QA (rolled-back SQL simulation): attacker /24 at 30 tries/10 min for 40 min reached 9 global slots, never 'busy'; a family on another /24 joined 4/4 and code-checked 8/8 meanwhile; 4 attacker /24s together close it at 30, refused tries add 0 rows. UI: a chore tile with no partner on its row is centred; header is solid brand purple, full width. Screens: chore-wars-qa/2026-11-04d, 0 console errors
- BLOCKED (Dave): approve the Supabase DROP/DELETE prompt (auto-cancelled again 4 Nov) to: purge attempt rows older than 24h in the hourly cw-purge job, drop empty cw_tmp_dbg() and unused cw__code_global(). SQL ready in chore-wars db/06_guard_fair.sql. Admin household-delete function (old part 8) still not added
- BLOCKED (Dave): approve the Supabase delete prompt (it auto-cancelled) so test households (Verifier Owl Den x2, QA House x3) are removed and the admin cleanup function is added
- BLOCKED (Dave): prices for extras; ad network choice after a kids-ads legal check. NEEDS YOUR EYES: design score (identity, teen appeal, 2-second clarity)

## LinkedIn / leads
- OPEN (night 02:43): review the new accepts, check current roles, build a private pipeline with a next-steps timeline, draft messages for Dave to send
- BLOCKED (Dave): send the drafted founder DMs and council emails; GO on LinkedIn company pages for 3S and SH✡MER

## Trashure Hunters
- DONE: standalone test APK at /th-mvp-android/
- OPEN (Dave): install it and test (uninstall old copies first)

## Ops
- DONE: dashboard, brain and to-do updated; private names removed from public files
- DONE 9 Nov (341906d): Nightly Watchtower CI fixed. It failed every night since 5 Nov because ubuntu-latest moved to 26.04, where Playwright 1.56 cannot install; pinned to ubuntu-24.04. Manual run 42566947943: all 9 steps success, published 35b1c34
- BLOCKED (Dave): GO private for the 3s-status repo; GO scrub of repo history
- BLOCKED (Dave): backups to the external drive (needs folder access)
- Rule: $0 budget; token-lean runs

## Weekend shift (Thu 5 Nov 22:31 → Sun), goal: income toward M1 $25k by 21 Nov
- DONE (verified 15/15): fractional pipeline, 30 prospects, 15 first-touches + 30 follow-ups, offer one-pager; HealthTech case page work/healthtech.html (verified 8/10). Awaiting Dave: approve drafts, offer prices
- DONE: SH✡MER pilot pack (20 targets, Hebrew proposal, 10 drafts). Awaiting Dave: price. Dashboard fixes v328-v330 live and verified (mobile, honest demo labels, founders reads own entry only). BLOCKED (Dave: 'yes Firebase'): deploy tightened rules + strip one old account-id field
- DONE (verified 7/7): homepage real screens, mosaic dedupe, R&K brand, CONCEPT banners
- DONE: verifier sweep, all PASS (SH✡MER v320-v327, LickPick lp-2026-11-04c, Chore Wars c/d). 2026-11-05 sweep: SH✡MER v322–v326, LickPick lp-2026-11-04c, Chore Wars "c" and "d" VERIFIED PASS. Still awaiting verifier: homepage passes (4 Nov, s4, s7) and the Chore Wars 85a99a5 pass (its security part is covered by the "d" check)
- BLOCKED (Dave): Milo Grok brief needs Grok sign-in; J8NIX public exposure; SH✡MER live-site AI photos; R&K board level; FaiRent wordmark

- DONE (verified 10/10): Milo app reset per Grok brief on branch grok-reset, preview /milo-reset-preview/. Awaiting Dave: merge to public, crisis numbers professional check
- DONE (verified): Milo brand v2 proposal, shades removed, assets/brand-proposals/milo-v2/. Awaiting Dave: chain keep/drop, ice-cube dot
- DONE 8 Nov (8b86d19): VIBRANT stat. Dave: the 68% vs 34% figure is from the real research. Homepage reads "Refill reorders with the VIBRANT app (68% vs 34%, ACG 2024)"

## Week of 8 Nov (Sun 8 – Sat 14 Nov; work paused Fri 6–Sat 7, restarted Sun 8 Nov 13:30)
Goal check: booked $0 · M1 $25k by 21 Nov · 13 days left · ~$1,920/day. Full plan with prices and names is private (Dave's outputs folder), not in this repo.
- DONE (8 Nov, ops 3e40254): ops board brought up to date for the week: every product's status, milestones and "your move" line; week plan block; log entry. Playwright 1440 + 390: 0 errors, no sideways scroll. No names, no new prices
- DONE 8 Nov: fractional offer prices: removed from work-with-me.html, now "Fixed price, agreed after a 20-minute call"
- BLOCKED (Dave): the first messages. Ask: today 08:30–09:30 send the LinkedIn kit (1 reply, 2 warm-intro asks, 7 connect notes); Tue 10 Nov 16:00–17:30 the 5 US connects. Exact texts and links are one-tap items at the top of the private to-do
- DONE (Sun 8 Nov 20:56, submitted by Dave via the portal): Tnufa request 01185745, form 718686. No repo commit. Follow-up task checks Gmail for the intake answer Wed 11 Nov
- OPEN (Dave): SH✡MER Android testers, 4 of 12 opted in (6 Nov); 14-day clock starts at 12; Android public earliest ~early Dec
- BLOCKED (Dave: "yes Firebase"): deploy tightened SH✡MER database rules. City emails wait on this
- BLOCKED (Dave): SH✡MER city pilot price (pilot pack ready)
- BLOCKED (Dave): Apple Developer enrolment (approved 3 Nov) for SH✡MER iOS
- NEW DECISION (7 Nov, approved direction, staging only): SH✡MER Nature becomes a layer inside SH✡MER. One free app, one SOS; an unclassified SOS is always a person event (Person layer only); a separate "Nature report" goes to the Nature layer; wildfire near a community goes to both; when in doubt, Person. One dashboard with Person and Nature layers; plans Person only, Nature only or combined, priced by org size and type. No separate store app. Engineering is building it on a staging branch. NEEDS YOUR EYES: nothing goes live (app, site, dashboard, live GitHub) until Dave says GO
- DONE on staging 9 Nov (71bcc12, https://3shamrocksstudio.github.io/shomer-command/app/dashboard.html?demo=1): D5 demo header follows the chosen city (?terr=כפר סבא shows "כפר סבא · דמו", map centre 32.177, 34.901); D6 population for all 60 crime-data cities from the CBS 2024 localities file (bycode2024.xlsx), Modi'in alias, e.g. מודיעין-מכבים-רעות 100,052 and ראש העין 79,023; D3 demo makes 0 requests to dashfeed or Nominatim; D4 scrollWidth 390 at 390 px. Playwright 390 + 1440, 5 cases, 0 errors. Live dashboard (v332) untouched; porting to live waits on Dave's GO for `dashboard-lock`
- WAITING (outside): LickPick, Lemon Squeezy application under review, store in test mode; Play closed test has no active testers
- BLOCKED (Dave: "OK cleanup"): Chore Royale test-data cleanup (demo staged, security verified)
- BLOCKED (Dave): Milo brand v2, chain keep/drop + ice-cube dot. Value-proposition study in progress
- BLOCKED (Dave): the J8NIX tool itself is still public at https://3shamrocksstudio.github.io/j8nix/ (it left the studio site 8–9 Nov). Ask: "J8NIX private" or "keep"
- BLOCKED (Dave): R&K, run the free 2-week test or kill
- DONE 8 Nov (8b86d19): VIBRANT stat confirmed by Dave as real research; homepage cites ACG 2024
- Week bar (check Fri 13 Nov): 3 calls booked · 1 proposal out · Tnufa submitted · testers 12/12 · privacy rules deployed

## Audit of Dave's chat revisions, 8 Nov 18:31 – 9 Nov 22:54 (checked live 9 Nov 23:20)
Every atomic request from Dave's chat messages. Staging = https://3shamrocksstudio.github.io/ (Playwright 390 + 1440, cache-buster, 0 page errors). Full table is private in Dave's outputs (ops/REVISIONS-AUDIT-2026-11-09.md).
- OPEN (9 Nov 22:40 "post reels in ig accounts… prepare and post"): no reel confirmed scheduled tonight. The IG weekly content run fired 22:24 and ended 22:26; ops funnel shows IG scheduled/posted unknown and shomer.app logged out since 8 Nov. Plan: re-run IG scheduling in Chrome with the verified Shorts, screenshot Scheduled content per account; Dave logs shomer.app back in
- DONE 9 Nov (c54dc79; was only on home-staging.html): Dave's carousel picks on the staging homepage (SH slot 2 route screen, SH slot 3 out, LP-1, CR-2, TH-5 splash, FR-2 + FR-3). Live: index.html = home-staging.html minus noindex; 6 new screens 200; old app-cpr/th-cine/live-grid gone; 0 errors. Verifier agent still to run
- BLOCKED (Dave): TH carousel movie-scene mockup needs his Gemini reference image
- DONE 9 Nov (96df391): Tnufa intake confirmed by email 9 Nov 14:17; ops funnel no longer says "awaiting intake"
- DONE 9 Nov (Dave's outputs ops/ULTRA-PROMPT.md): the "ULTRA-PROMPT" he asked for at 17:34, saved as a file (was chat-only)
- OPEN (Score v4 B worker running now): site background music (8 Nov "gaming background music", "changes by section", "per product in portfolio", "play on load"; 9 Nov "annoying… low quality", "sounds like the Shire… masculine, relaxing, chill"). v2 and v3 rejected; music:false on staging since 612f9d6; B (night drive) being wired. Browsers allow sound only after the first tap. Then BLOCKED (Dave): "B OK" or "A"
- BLOCKED (Dave): forest tap ripple, fix cap 2 reached. Ask: "forest A" (keep) or "forest B" (phone crop shows the stream)
- DONE 8 Nov (ee3935f, 43992e0): living forest at contact: full-bleed, flowing water, swaying leaves, fireflies follow the finger, shamrock glow (seen live 390 + 1440)
- DONE 8 Nov (a8f8319): mosaic 1,813 unique tiles, max 2 repeats, incl. past studio work
- DONE 8 Nov (dc8f135, 3d500a8): Trashure Hunters page rebuilt from Dave's real game and onboarding screens
- DONE 8 Nov (051a343): per-product swipe SFX (SH✡MER, LickPick, TH, Chore Royale, FaiRent, Concepts) + click/coin/level-up cues live. Needs Dave's ear
- DONE 8 Nov (d85c084): endless products carousel on phones (items on both sides from load)
- DONE 8 Nov (29e4ba9, 67be40b, a64e61b, 8b971f5): R&K rook + king mark (no pawn), darker Night mockup background, new glass board and pieces on work/rk.html
- DONE 8 Nov (083df88): branded gamified pop-ups (achievement toasts, XP badges) and Mini-Dave scripted guide ("Davebot")
- DONE 8 Nov (b7a3df3, 6f2b14b, 3b0cec1, a03582b): Google reviews badge + 2 quotes, visit counter, 404, share images
- DONE 9 Nov (dcaa2f9, d8cd468, 29e034e, 2ad72c9, 8181e08, 72f0cec, bb7e8dc; verifier PASS): inner-page fixes. BLOCKED (Dave): shared "Next project" + footer on every case page, "Trashure Hunters" vs "Trashure-Hunters", sound pill covering headings on phones
- DONE 9 Nov (3f6ee42): premium carousel candidates on https://3shamrocksstudio.github.io/review/carousel/
- DONE 9 Nov (f7db14c): live revenue funnel panel on the ops dashboard
- BLOCKED (Dave): new-site reel v2 (outputs reels/3S-new-site-reel-v2.mp4). Ask: "reel OK" or a new end-card line
- BLOCKED (Dave): EZRA brand proposal (outputs ezra-brand/EZRA-BRAND.html, verified 6/7). Ask: "EZRA A" or "EZRA B"
- BLOCKED (Dave): TH trailer script + storyboards (outputs th-video/, verified). Ask: King Grime "real" or "comic"
- BLOCKED (Dave): LinkedIn (Dave + studio page) and YouTube Shorts content pack (outputs content/, 22 items, verifier running). Ask: "approve 1–22" and which YouTube channel
- OPEN (scheduled 10 Nov 08:05): SH✡MER.app AI brand film, one message ("שומר אחי אנוכי"), app users only. Grok weekly limit; treatment in outputs shomer-film/TREATMENT.md. Faster if Dave says "Firefly in"
- DONE 9 Nov (outputs shomer-reels/): boy and woman reels delivered; superseded by Dave's 17:21 rejection (brand film above)
- OPEN (scheduled): night shift 23:05 with repo attach step; watchdogs 23:45 and 03:45; IG engagement 17:23 + 23:23; relay 06:40 builds the 08:30 morning pack
