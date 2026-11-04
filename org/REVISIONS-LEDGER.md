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
- DONE v322 (8e2312d, 0b6050b, 8382971; verifier pending): events on the map for ALL users (no preview gate, pill "N אירועים"); 90 days from event time on map, באזור שלי and SH✡MER Command (Zalka pinned); +8 sourced events (fire, medical, suspicious, weather/quake), 2 sources each, credited "צוות SH✡MER · לפי <outlet>", linked "מקור:", category image + "מה עושים במצב כזה" + 100 · 101 · 102; sources in docs/events-sources.md. NEEDS YOUR EYES: confirm/dispute votes stay preview-only until the votes rules are deployed
- OPEN (awaiting Dave's yes): rename "עדכונים" to "באזור שלי", one feed matching the map
- BLOCKED (Dave): locked-phone push alarm, build 1.0.64. Needs GO Blaze, Firebase key, google-services.json, GO Play, and approval of the privacy text
- BLOCKED (Dave): the 9 event-lifecycle decisions, then build steps 0–7 (EVENT-LIFECYCLE-SPEC.md)
- BLOCKED (Dave): GO on live fixes: iPhone SOS instruction text, 5 vs 6 shakes, privacy policy
- BLOCKED (Dave): iOS native. Needs Xcode plus Apple Developer enrolment, then "Apple done"
- OPEN: Arabic role term شومير vs حارس (Dave decides)
- OPEN: LinkedIn tester post image, built from current v318 screens with the PNG logo, simple and fitted to the cause
- BLOCKED (Dave GO Nature): SH✡MER Nature page on the brand domain

## LickPick
- DONE lp-2026-11-03e: audio damage fixed; band accuracy improved; "licks"/"jams" wording; edge cases handled
- DONE lp-2026-11-04a (dbe0816): band key detection tells a key from its relative major/minor
- REOPENED (verifier B2 FAIL on lp-2026-11-04a, e5d6cff): half-time cutoff was 140 not ~130, flag never shown, click and notes paths disagreed at 150 BPM
- OPEN, awaiting verifier: lp-2026-11-04c (ec135a3) key vs its fifth now decided by the scale notes (C major with F stays C even ending on G; G major needs F#), one 130 BPM half-time cutoff everywhere, "½×" also on the Groove button. Supersedes lp-2026-11-04b (ec66f17), which read a C-major lick ending on G as G major. Staging: https://3shamrocksstudio.github.io/lickpick/app/
- DONE lp-2026-11-04a: "licks" wording checked, no user-visible "takes" left
- OPEN: check the landing page "pops" and the LickPick folder in 3S Projects with brand and business files
- BLOCKED (Dave): Lemon Squeezy "Activate your store"

## Studio site / portfolio
- DONE: all 16 homepage items, work-with-me, pilot page, floating-device portfolio per the reference, animated minime
- OPEN: verifier fixes in progress (carousel slides, tap copy, Nature page eyebrows/footer/link, pilot monthly prices, work-with-me style, demo names)
- BLOCKED (Dave): 5 Wix DNS changes, then migrate to www.3shamrocks.com (old Wix design retired)
- OPEN (Dave's eyes): small starter offer
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
- OPEN (awaiting verifier, 4 Nov final fix pass "c"; chore-wars 6dacdb3, site 2ff00eb): global code-guess budget (30 misses/10 min across all callers, then 5 min cool-down) + backoff per /24; 8-char codes (no 0/O/1/I), M Clan code rotated (not in any repo); server refuses photos over 250 KB; shop shows "Coming soon" locks (TBD stays on model.html only); ad countdown shows a spinning card, reward name and ring; PIN shows dots with a brief last-digit peek; toasts moved off the header; victory screen + rank-up, rival callout, avatar streak flame. "Jakob" placeholder replaced (SH✡MER, nature preview). QA live 390x844: all PASS, 0 console errors, 40 rotating-device bad codes hit the global limit. Screens: chore-wars-qa/2026-11-04c/live
- OPEN (awaiting verifier, 4 Nov pass "d"; chore-wars e4d9653/1bcebf6/ca425ae, site b947c7e): code-guess lockout fixed. Only real misses from callers not in backoff count; 'locked'/'busy' tries and successful joins never count; one /24 fills at most 10 of the 30 global slots, so one attacker network cannot lock families out. QA (rolled-back SQL simulation): attacker /24 at 30 tries/10 min for 40 min reached 9 global slots, never 'busy'; a family on another /24 joined 4/4 and code-checked 8/8 meanwhile; 4 attacker /24s together close it at 30, refused tries add 0 rows. UI: a chore tile with no partner on its row is centred; header is solid brand purple, full width. Screens: chore-wars-qa/2026-11-04d, 0 console errors
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
- BLOCKED (Dave): GO private for the 3s-status repo; GO scrub of repo history
- BLOCKED (Dave): backups to the external drive (needs folder access)
- Rule: $0 budget; token-lean runs
