# 3SDS MASTER PROJECT MAP
Updated: 2026-08-25 | Authority: Dave Markovich

## GROUND RULES
- "Done" = Dave has reviewed and approved the live product personally
- Code passing audit ≠ done. Features existing ≠ done. Dave's eyes = done.
- Every product needs: working app/site + brand + UX + business model + launch plan

---

## 1. SH✡MER URBAN (Priority #1 — revenue now)

**Status: SOFT LAUNCH BLOCKED on website + app quality**

### Website must-fix (before ANY announcement)
- [ ] Chrome MCP visual audit — screenshot every section desktop + mobile
- [ ] Fix every alignment, spacing, layout issue Dave can see
- [ ] Dave approves the website visually

### App must-fix (before public launch)
- [ ] Full user flow test: register → SMS → map → SOS → circles → emergency guide
- [ ] Every screen tested, every failure logged, every bug fixed
- [ ] Dave approves the app personally on device

### Dave credentials needed
- [ ] Firebase login:ci → run firebase deploy --only database (closes security hole)
- [ ] Twilio Fraud Guard re-enable on VAa6d1d6e530cbcd67bda268bb22dc0ace

### Business model
- FREE to all citizens — always
- B2B2C: employers, schools, shuls, municipalities pay for guardian coverage
- Pilot pricing: ₪500–2,000/month per organization
- Compliance dashboard for organizations
- Target first sale: Chabad network (already in discussion)

### Launch sequence
1. Fix website (Claude, this week)
2. Fix app (Claude + Dave device testing)
3. Chabad pilot signed (Dave)
4. Israeli tech press release (Claude drafts, Dave sends)
5. LinkedIn campaign (Claude writes, Dave posts)

---

## 2. TH MVP (Priority #2 — biggest commercial potential)

### App must-complete
- [ ] Dave provides: Supabase URL + anon key + service role key
- [ ] Dave provides: expo.dev token + GitHub workflow-scope PAT
- [ ] Claude: runs CI, deploys to TestFlight + Play Store
- [ ] Dave: Apple Developer account ($99) — start NOW

### TH Website (separate marketing site — NOT built yet)
- [ ] Full marketing site: characters, gameplay video/GIF, story, download CTA
- [ ] Elemonster character showcase
- [ ] Waitlist/pre-registration form
- [ ] Domain: trashure-hunters.com or similar

### Business model
- Free to play (clean up real trash to earn XP/Elemonsters)
- Premium: cosmetic skins, special Elemonsters, zone unlocks
- School/municipality partnerships: sponsored cleanup events
- Brand partnerships: environmental brands pay for in-game placement
- IP licensing: animation, merchandise long-term

### Launch sequence
1. Supabase credentials from Dave → CI live → TestFlight (Claude)
2. Marketing website built (Claude)
3. Soft launch: 50 beta testers (Dave recruits)
4. App Store + Play Store submission (needs Apple Dev account)

---

## 3. MILO (Priority #3 — needs full design rebuild)

**Status: CODE EXISTS BUT PRODUCT NOT READY**
Dave confirmed: branding, character design, UI/UX, system all need rebuild

### What needs to happen
- [ ] Dave: define the character system (what does Milo look like? is it one character or customizable?)
- [ ] Dave: define the brand (color, typography, emotional design language)
- [ ] Claude: rebuild UI/UX based on Dave's direction
- [ ] Dave: approves the new design before Claude codes anything

### Business model (define before launch)
- App for kids 6–14 and their parents
- Free tier: basic Milo stages 1–3
- Premium: all 5 stages + parent dashboard + therapist reports ($4.99/month)
- School/therapy clinic licensing ($X/month per seat)
- Target first customers: school psychologists, child therapists, pediatricians

### NOT launching until Dave approves brand + UX direction

---

## 4. EZRA (Priority #4 — needs UX rebuild)

**Status: CODE EXISTS BUT UX IS BROKEN IN REAL USE**
Dave confirmed: far from perfect in real use

### What needs to happen
- [ ] Dave: test the app on a real elderly user (or simulate it)
- [ ] Dave: list every UX failure point
- [ ] Claude: fix every failure point
- [ ] Real Hebrew voice interactions must work end to end
- [ ] AI responses must be accurate and helpful in Hebrew

### Business model
- Free for individual users
- B2B: elder care facilities, health funds (kupot holim), municipalities pay for managed deployment
- Family plans: family pays ₪X/month for parent/grandparent access
- Integration: can be white-labeled for Maccabi/Clalit/Meuhedet

---

## 5. FAIRENT (Priority #5 — civic product, needs launch strategy)

**Status: FUNCTIONALLY COMPLETE, needs launch strategy**
Purpose: anonymous rent data sharing so Israeli renters can see if they're overpaying

### What needs to happen
- [ ] Data contribution UX: is it easy for renters to submit their rent anonymously?
- [ ] Data visualization: do renters get useful comparisons?
- [ ] Privacy: is the anonymization actually working?
- [ ] Hebrew-first: is every word natural Hebrew?

### Business model
- Completely free to users (civic product)
- Monetization: media/PR partnerships, data insights sold to journalists/researchers
- OR: real estate transparency NGO grant funding
- OR: law firm partnerships (renters who find they're overpaying)

### Launch strategy
- Israeli housing journalists (Calcalist, TheMarker, Ynet)
- Social: "find out if your landlord is ripping you off" — one viral hook
- NO formal launch needed — just post the link with the right framing

---

## 6. J8N.IX (Priority #6 — define public use case)

**Status: COMPLETE FOR INTERNAL USE — public use case undefined**

### Key question Dave must answer
Is J8N.IX a public product or 3SDS internal tooling?
- If public: what's the use case for someone who's not Dave?
- If internal: close it off, don't list it as a public product

### If public product
- Business model TBD
- UI/UX needs to work for non-Dave users

---

## 7. SH✡MER NATURE (Priority #7 — after Urban launches)

- Full 232KB app exists and works
- One async bug fixed (showA2HS)
- Needs: nature-hero.jpg + nature-badge.png (Dave provides)
- Launch AFTER SH✡MER Urban is proven

---

## IG ACCOUNTS (URGENT — months of neglect)

**@dealxscout.ai | @getfetch.ai | @meetinq.ai | @echoxreels**

### What's needed RIGHT NOW
- [ ] Claude in Chrome: access Metricool
- [ ] Profile images: Dispatch reads logos from /Users/davemarkovich/Desktop/3S Projects/3s-logos-review/assets/
- [ ] xAI Grok generates profile images for each account
- [ ] Claude writes bios for each account
- [ ] Claude drafts first 3 posts per account
- [ ] Metricool schedules posts

### Content strategy per account
- @dealxscout.ai: deal-finding, negotiation, consumer savings content
- @getfetch.ai: productivity, AI-assisted task completion
- @meetinq.ai: meeting culture, async communication, workplace efficiency
- @echoxreels: short-form content creation, reels strategy

---

## WEBSITES NEEDED

| Website | Status | Priority |
|---|---|---|
| shomer-app.co.il | Live, needs fixes | Now |
| TH MVP web (app) | Live, 4MB bundle | After Supabase |
| TH marketing site | NOT BUILT | Build next |
| 3shamrocksstudio.github.io | Live, needs polish | This week |
| MILO website | Not needed yet | After brand approved |
| Ezra website | Not needed yet | After UX fixed |
| Fairent website | IS the product | Fix UX |
| SH✡MER Nature | Landing live | After Urban launches |

---

## 3SDS BRAND PROTOCOLS

**Current state: NEEDS AUDIT**
- Do all products meet Dave's standard? NO (Milo, Ezra confirmed substandard)
- Is the 3SDS design system documented and enforced? Partially
- Is every product using the correct fonts, colors, spacing? Unknown

### What Claude needs from Dave
One reference: a site, a screenshot, a product that represents the quality level Dave wants. That becomes the benchmark.

---

## BUSINESS MODEL SUMMARY

| Product | Revenue model | First $$ from |
|---|---|---|
| SH✡MER | B2B2C (org subscriptions) | Chabad pilot this month |
| TH MVP | Freemium + brand partnerships | App Store launch |
| MILO | Freemium + therapy licensing | After rebrand |
| Ezra | B2B (elder care orgs) | After UX fix |
| Fairent | Civic/free (grants/media) | Viral launch |
| J8N.IX | TBD | TBD |
| IG Media Network | Brand sponsorships (future) | After 10K followers |

---

## REMINDER — DAVE MUST DO (in order)

1. Apple Developer account ($99) — start TODAY, 24–48hr approval
2. Firebase login:ci on Mac → send token → Claude deploys
3. Twilio Fraud Guard re-enable
4. Supabase credentials for TH
5. Expo token + GitHub PAT (workflow scope)
6. Ezra: paste Anthropic API key in settings panel
7. Milo: define character + brand direction before Claude touches it
8. J8N.IX: decide public vs internal
9. Provide nature-hero.jpg + nature-badge.png
