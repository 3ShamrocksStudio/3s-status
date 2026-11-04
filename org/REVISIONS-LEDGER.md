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
- OPEN (Dave's eyes): homepage quote; small starter offer

## Instagram
- DONE: first posts on 6 accounts; bios; 4 free pages; 3 proof reels scheduled for 4 Nov; old posts removed on shomer, meetinq and dealxscout
- OPEN (night shift 00:13): 18 proof reels, each brand in its own style; replace the old getfetch and echoxreels posts; schedule to audience times
- OPEN: daily engagement with an approval queue (17:23)
- BLOCKED (Dave): bio links in the phone app; keep or redraw the AI-made echoxreels/meetinq logos
- Rule: stay logged in, never log out, switch between accounts

## Chore Wars / R&K (Rookie & King)
- OPEN (night lab 01:23): game rethink (one fantasy, clear win/lose, pass cards) plus a playable prototype; R&K concept/design/monetization upgrade. Game part replaced by the 4 Nov rebuild below
- OPEN (awaiting verifier + Dave, 4 Nov): Dave rejected the overnight v2 prototype. Rebuilt as Chore Wars at https://3shamrocksstudio.github.io/lab/chore-wars/ (old /lab/chore-royale-v2/ redirects there). Each complaint and the fix:
  - "Boring, dull, design is lame": new bright game look. Purple arena, chunky ink outlines, hard shadows, springy reward motion, sounds and haptics.
  - "No branding, identity, iconography, typography or style": spray-blaster logo and wordmark (SVG + PNG), 6-colour system, Bungee + Nunito, 33 custom icons, 4 ranks, 8 player avatars. Brand sheet at /lab/chore-wars/brand.html
  - "Lots of words, kids won't read": icon-first screens, labels of 6 words or fewer, onboarding is 3 swipes
  - "Not experience focused": points burst with confetti, crown drop for the champion, steal shake and pink flash, live feed
  - "All users on one phone?": every player joins on their own phone with a code or QR, realtime sync (Supabase, free project). 3-phone test: 9/9 sync checks PASS
  - "Users fight for points, XP, chore-switching": grab, steal (Steal card), Shield block, swap offer/accept/counter, parent bounty, weekly duels, weekly leaderboard with crown, streaks, parent photo approval
  - "Nobody will pay ₪20/month; use paid ads and paid users": free to play, opt-in rewarded ad slot (placeholder, no SDK), per-player extras (skins, season pass, card packs, price TBD). Sourced 1-page model at /lab/chore-wars/model.html
  - Old names (Chore Royale, ClanForge, ChoreQuest) removed from the new build, the lab path and the chore-wars README
- BLOCKED (Dave): prices for extras; ad network choice after a kids-ads legal check; change the M Clan demo parent PIN (now 1234)

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
