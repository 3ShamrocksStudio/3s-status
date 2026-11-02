# Fairent · הוגן · Design System · v1.1 (2 Nov 2026)
Product of 3Shamrocks Studio. Seat: CDO. Status: **parked** (board 2 Nov; stays off the studio site). A night worker rebuilds it tonight on staging.

Sources read: Mac `3S Projects/Fairent/{BRAND.md, Brand/, ds/brands.css, ds/tokens.css}`, repo `/home/claude/fairent/index.html` (`[data-brand="fairent"]`, fonts), Mac 3SDS `brands.css`.

## 1. Essence
"Power back to renters. Fair rent, verified by the community." Civic, trustworthy, Hebrew first. Justice indigo + a fair-home green signal.

## 2. Tokens
### Colour (the 4 real brand colours, extracted from the vector art; no invented anchors)
| # | Token | Hex | Role | Contrast |
|---|---|---|---|---|
| 1 | Deep Indigo `--brand-700` | `#310A91` | primary: justice / trust ("RENT"), light theme-color, neutral tint | white on it 13.27:1 |
| 2 | Electric Violet `--brand-500` | `#6550FF` | action / energy; dark-mode accent | white on it 5.07:1 · on ink 4.0:1 (large/UI only) |
| 3 | Signal Green `--signature-500` | `#53D805` | "the home" / fair; badges, verified marks | ink on it 10.8:1 · **never text on white** |
| 4 | Ink Black `--brand-950` | `#050511` | text, dark canvas, wordmark ink | — |
Ramp tints/shades around these are generated for states only. Dark mode tint `#241a63` @ 20%. Status = shared 3SDS semantic colours.

Provenance: `Brand/Fairent_icon.svg` (.cls-1 `#310a91`, .cls-2 `#6550ff`, .cls-3 `#53d805`), `Brand/Fairent_icon_logo.svg` (+ .cls-3 `#050511`).

### Type
Display **Heebo** 700–900 · Body **Assistant** (fallback Heebo) · mono `ui-monospace, JetBrains Mono` for numbers in tables. Hebrew first: `dir="rtl"`, `lang="he"`, Latin chrome pinned LTR.

### Spacing, radius, shadow, motion
3SDS shared scales (4px spacing, major-third type). Radius: rounded, calm (3SDS "rounded · calm" world, radius unit ≈ 12–14px). Shadows: indigo-tinted, soft. Motion: calm, standard durations.

## 3. Logo rules
- Files: `Brand/Fairent_icon_logo.svg` (full lockup), `Brand/Fairent_icon.svg` (icon), `fairrent-logotype.png` / `fairrent-logotype-white.png` (wordmark dark/light), `favicon-32.png`, `icon-180.png`, `icon-512.png`, source `Fairent.ai`. Hebrew mark: `hogen-primary.jpg`, `hogen-shield.jpg`.
- **Conflict to fix:** BRAND.md says the lockup sits "on a white chip so it reads in both modes". That breaks the studio rule "never box a logo". Use the dark wordmark on light and the white wordmark (`fairrent-logotype-white.png`) on dark instead of a chip.
- Spelling: the brand is **Fairent**; some file names say "fairrent" (double r). Never show "Fairrent" in UI.
- Studio credit: quiet footer standard.

## 4. Iconography
Line icons 2px, indigo; verified/fair marks in signal green with a check + word. Data viz: indigo for the renter's value, violet for the area median, green only for "fair".

## 5. Imagery
Real data views (rent comparisons, CBS-sourced figures with the source shown), Israeli apartment exteriors without people's faces, the board mockup (`mockup/fairent-cbs-mockup.png`). No invented rent numbers; every figure carries its source and date.

## 6. Voice and tone
Plain, fair, on the renter's side, never angry at landlords. Hebrew first.
| Don't | Do |
|---|---|
| "Landlords are ripping you off" | "כמה משלמים על דירה כמו שלך? בדקו." |
| uncited numbers | "לפי הלמ"ס, רבעון 2 2026" |

## 7. Components
3SDS Layer 3 with `data-brand="fairent"`: primary button indigo, white text; comparison card (your rent vs area median, source line); verified chip (green, ink text); RTL forms.

## 8. Do / Don't
**Do**: the 4 real colours only · cite every number · RTL done right.
**Don't**: white-chip logo · green text on white · "Fairrent" · put Fairent on the studio site while parked.

## 9. Open items (NEEDS YOUR EYES)
- Approve dropping the white logo chip in favour of the two wordmark colour versions.
