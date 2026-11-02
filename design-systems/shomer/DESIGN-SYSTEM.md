# SH✡MER · Design System · v1.0 (2 Nov 2026)
Product of 3Shamrocks Studio. Seat: CDO. Layer-1 brand on the 3SDS architecture.
Always written **SH✡MER** (never SHOMER in visible copy; "SHOMER app" only as an SEO keyword). Never the English word "guardians": the feature is **My Shomers / השומרים שלי**.

Sources read: `shomer-app/` repo (`index.html` = www.shomer-app.co.il, `shomer.html` app, `BRAND.md`, `brand.css`, logo PNGs checked for alpha), `3shamrocksstudio.github.io/shomer-command/assets/sc.css` (Command funnel, written against shomer-app.co.il), Mac `3S Projects/Shomer/Core/{BRAND.md, brand.css}`, memory.

## 1. Essence
"Citizens protecting citizens": a social network of citizens for citizens (רשת חברתית של אזרחים למען אזרחים). Name and badge come from the 1909 HaShomer movement. Calm authority, never fear. The app is free for every resident; communities and councils pay for SH✡MER Command.

Two surfaces, one brand:
- **Marketing + Command (buyer side)**: navy bars, light paper bands, orange CTA (the www.shomer-app.co.il look; Dave asked every SH✡MER page to match it, 29 Oct).
- **App (resident side)**: deep navy UI, gold authority, red reserved for SOS.

## 2. Tokens

### Colour · marketing / Command (source: shomer-app.co.il `:root`, sc.css)
| Token | Hex | Use | Contrast |
|---|---|---|---|
| `--n1` bar navy | `#0C1B3A` | top bar, navy bands | white on it 17.0:1 |
| `--n0` deep | `#08152F` | deepest band | — |
| `--n4` band navy | `#1F315F` | advantages band | `#CDD6EC` on it 8.68:1 |
| `--g3` orange | `#FC9918` | primary CTA, the ✡ in the wordmark | on `#0C1B3A` 7.87:1 · **on white 2.16:1 → never text on light**; button text = ink `#16202E` (7.58:1) |
| `--g2` orange-d | `#E8850F` | hover, ✡ on light paper | — |
| `--g4` star gold | `#FAAC22` | star accents | decorative |
| `--paper` | `#F3F4F8` | light bands | ink on it 14.93:1 |
| `--card` | `#FFFFFF` | cards on paper | — |
| `--ink` | `#16202E` | body text on light | — |
| `--ink2` / `--ink3` | `#44506A` / `#6B7387` | secondary / meta | — |
| `--tx1` | `#CDD6EC` | text on navy | — |
| footer | `#141C27` | footer band | — |
| SOS red | `#CC1426` (base) · `#E8182C` (pulse) | **SOS / emergency only** | white on `#CC1426` 5.68:1 |
| safe green | `#0E8840` | "handled", responding | — |

### Colour · app (source: `BRAND.md` LOCKED palette)
Navy `--n0 #060F1E … --n6 #2E4070` · gold `--g1 #9A6C1A`, `--g2 #C09020`, `--g3 #E0A828`, `--g4 #F5C840` (gold on `#0A1628` 8.46:1) · platinum `--p1 #5C6B82 … --p4 #E6ECF6` · red `--r1 #8A0E1A … --r4 #E8182C` · status `--grn #0E8840`, `--amb #C07808`, `--blu #1852C0` (me-dot), `--pur #6B32D8` · text `--tx0 #F0F4FF … --tx4 #344060`.
Gold gradient (app CTA/title only): `linear-gradient(135deg,#C09020,#E0A828 60%,#F5C840)`.

Rules: navy is the base; gold/orange = authority and action; **red only for SOS**; never introduce off-palette colours.

### Type
| Role | Family | Notes |
|---|---|---|
| Marketing + Command, Hebrew and English | **Alef** 400/700 | the shomer-app.co.il face |
| Wordmark | **Marion** (lettering of the logo; artwork, not set as UI text) | `.sh` class renders "SH✡MER" LTR, weight 800, ✡ in `--g3` |
| App UI | **Inter + Heebo** (`--font-main`), Heebo for Hebrew | 3-language app: Hebrew, Arabic, English |
Numbers, prices, dates: always LTR isolated (`<bdi>`), so they read the same in RTL.

### Spacing, radius, shadow, motion
- Spacing: 3SDS 4px scale; marketing wrap 1240px, gutter 32px (16px phone); body 18px / 1.6 on Command pages.
- Radius: app 4 / 8 / 12 / 16 / 24px; marketing cards 14px; buttons 10px; pills 999px.
- Shadow: cards `0 1px 0 rgba(22,32,46,.04), 0 18px 40px -24px rgba(22,32,46,.28)`; app elevation `--e1…--e4` (dark, high contrast).
- Motion: calm. SOS pulse only on SOS. Command demo alarm: red/blue panel flash at a **safe rate (≤3 flashes/s, WCAG 2.3.1)**, reduced-motion = static red border.
- Focus: `0 0 0 3px rgba(252,153,24,.6)`.

## 3. Logo rules (Dave, hard rule)
- Files: `SHOMER_logo_big.png` (1024×1024, **transparent RGBA**, metallic badge with the gold Star of David as the "O"), `SHOMER_VECTORLOGO.ai`, `Brand/SVG/`; web: `assets/shomer-pilot/shomer-badge.webp`, `wordmark-white.svg`.
- **NEVER inside a square or any background frame.** Use the transparent PNG/SVG only, directly on a relevant brand background (navy band, `SHOMER-bg.jpg`, paper).
- `logo-512.png` / `logo-192.png` are **opaque navy squares** (app icons): use them only as the launcher/PWA icon, never on a page.
- Never regenerate, redraw, recolour or crop the badge. Clear space ≥ ¼ badge width.
- Studio credit: quiet footer (`3shamrocks.png` 13–15px, ~60% opacity, `© 2026 3Shamrocks Studio. All rights reserved.`).

## 4. Iconography
Brand icons from the site (`sos-icon-96.png`, `report-icon-96.png`, `badge-192/512.png`), line icons 2px stroke elsewhere. SOS icon is always red. Category pins use status colours with a label, never colour alone.

## 5. Imagery
Real app screens (`app-v200-*.jpg`, `brand-app-*.webp`), the neighbourhood hero (`hero-neighbours*.webp`), `SHOMER-KeyVisual.jpg`, `scenario-family.jpg`, `scenario-medical.jpg`. Warm, daylight, neighbours helping. **No scary or uncanny imagery** (no masked attackers, no blood, no AI faces). Dashboard demo data is always labelled "נתונים לדוגמה".

## 6. Voice and tone
Calm, protective, plain Hebrew. Short sentences. Respect for 100/101/102: "משלים את 100, לא מחליף". Privacy first: "בלי שמות", "התושב מחליט".
| Don't | Do |
|---|---|
| "guardians" | "השומרים שלי / My Shomers" |
| "Live now in your city!" (staged) | "בפיילוט" / "בבדיקה" |
| fear: "Crime is everywhere" | "מי שכבר נמצא דקה ממך" |
| prices in a first message | who we are → what you get → one true reason → short call |
Signature: דייב מרקוביץ', מייסד SH✡MER · 3Shamrocks Studio · dave@3shamrocks.com (sales) / support@shomer-app.co.il (user support).

## 7. Components
- **CTA button**: orange fill, ink text, 44px+, radius 10px. On navy: orange fill. Never red for anything but SOS.
- **Band**: alternating navy (`.navy`) and paper sections with an SVG ground (`ground-navy.svg`, `ground-gold.svg`).
- **SOS button (app)**: large red circle, pulse, hold/shake; red only here.
- **Command panels**: dark navy cards; normal state calm; emergency state = red/blue flash + checklist "מה עושים עכשיו" ending in an event report.
- **Tour popups (demo)**: short header + one line + value, details folded under "עוד פרטים"; branded (navy card, orange accent, wordmark).
- **Price table** (Command page only, never in outreach): pilot ₪2,500 / 90 days; monthly-first licence; "לפני מע"מ".
- Privacy chips: "בלי שמות", "אנונימי כברירת מחדל".

## 8. Do / Don't
**Do**: transparent logo on navy · one orange action per view · Hebrew RTL with LTR numbers · label sample data · trilingual parity.
**Don't**: logo in a square/tile/frame · red for decoration · "launched/live" · real people on public maps · any new data field without the privacy-policy check (CLAUDE.md data policy).

## 9. Open items (NEEDS YOUR EYES)
- Two coexisting looks (orange marketing vs gold app). Proposal: keep both; orange = act/buy, gold = the badge and in-app authority. OK?
- Older 3SDS docs call the brand "Shomergency™" with Sora display. Current surfaces use Alef (site) and Inter/Heebo (app). This file treats Sora as retired.
