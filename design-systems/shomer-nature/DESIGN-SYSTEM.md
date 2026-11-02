# SH✡MER Nature · Design System · v1.0 (2 Nov 2026)
Part of the SH✡MER family (same company, contact and umbrella). Seat: CDO. Staging only: https://3shamrocksstudio.github.io/shomer-nature-preview/ (a night worker is rebuilding it tonight; re-check tokens against the rebuild on 3 Nov).

Sources read: `shomer-nature-preview/index.html` `:root` (staging), `nature-v2/img/`, `shomer-app/nature-badge.png` (alpha checked), Mac `3S Projects/Shomer/Nature/README.md`, Dave's to-do note 29 Oct ("brand identity more 'for nature and animals': messaging, imagery, icons, language"), memory ("based on the main SH✡MER branding only, with nature adjustments; lives on shomer-app.co.il/nature").

## 1. Essence
"שומרים על מי שאין לו קול" (we guard those who have no voice). Animals, wildlife, trails and coast. Light, natural and calm; the SH✡MER gold star keeps it in the family. Sold only as an add-on inside SH✡MER deals, after Dave's own test.

## 2. Tokens

### Colour (staging `:root`)
| Token | Hex | Use | Contrast (measured) |
|---|---|---|---|
| `--sand` | `#FAF6EC` | page background | — |
| `--sand2` | `#F2EBDB` | alternate band | — |
| `--paper` | `#FFFFFF` | cards | — |
| `--leaf` | `#2F8540` | primary action, links | on sand 4.28:1 → large text / buttons only; **for body links use `#27753A` (5.27:1)** |
| `--leaf2` | `#4FA85C` | hover, illustration | decorative |
| `--leaf-t` / `--leaf-tx` | `#E6F2DF` / `#276E36` | tinted chip + its text | 5.38:1 |
| `--sky` / `--sky-d` | `#E2F0F8` / `#2A78A8` | water, coast, info | `#2A78A8` on white 4.83:1 |
| `--earth` / `--earth-t` | `#8A6A44` / `#F3E9DA` | trails, earth tones | — |
| `--gold` | `#E0A828` | the SH✡MER star (family link) | on ink 6.86:1; never text on sand |
| `--ink` | `#1F2B24` | headings, body | 13.61:1 on sand |
| `--ink2` | `#4D5B52` | secondary text | — |
| `--ink3` | `#6E7A71` | meta | 4.15:1 on sand → **fails body text; use `#5E6A61` (5.24:1)** |
| `--line` | `#E4DCCB` | hairlines | — |
| `--sos` | `#C93636` | SOS / emergency only | white on it 5.17:1 |

### Type
**Heebo** (300–900) for Hebrew and English. Headlines 800, tight; body 400/500, 1.6 line-height. Wordmark "SH✡MER Nature" uses the SH✡MER lettering (artwork), with "Nature / טבע" set in Heebo.

### Spacing, radius, shadow, motion
- 3SDS 4px spacing scale; generous section padding (nature = breathing room).
- Radius `--r: 22px` (soft, organic); buttons pill or 14px; photos 22px.
- Shadow `--sh: 0 18px 40px -26px rgba(48,60,40,.45)` (warm, earthy, never black).
- Motion: slow and soft (`--dur-scale` ≈1.2); no flashing except SOS.

## 3. Logo rules
- File: `nature-badge.png` (560×560, transparent) / `nature-v2/img/badge.png` (240×240, transparent); vector `SHOMERNature_VECTORLOGO.ai` on the Mac.
- **Never inside a square or background frame** (same hard rule as SH✡MER). Place the transparent badge directly on sand, leaf-tinted or photo grounds with enough contrast.
- Never recolour the gold star; never swap the badge for the city SH✡MER badge on Nature pages.
- Studio credit: quiet footer standard.

## 4. Iconography
Animal- and nature-first (Dave's 29 Oct note): paw, bird, turtle, leaf, wave, trail marker, flame for wildfire, drop for flood/heat. Rounded line icons 2px, leaf or ink colour; SOS icon red. Hazard list (README): wildfire, pollution/dumping, injured wildlife, rip current/drowning, lost hiker/child, trail/beach hazard.

## 5. Imagery
Real photos in `nature-v2/img/`: `dog.jpg`, `pets.jpg`, `turtle.jpg`, `trail.jpg`, `hero-wide.jpg`, `hero-tall.jpg`. Animals cared for, people helping animals, daylight, Israeli landscapes. **No injured-animal close-ups, no blood, nothing distressing.** Map markers are area overviews, never fake incidents.

## 6. Voice and tone
Gentle, caring, practical. Speaks for animals and nature, not about fear. Hebrew first, English parity.
| Don't | Do |
|---|---|
| "Report incidents in your area" (generic) | "ראית בעל חיים פצוע? שלחו מיקום, ומי שקרוב מגיע." |
| military/security wording from the city app | care wording: "לעזור", "לשמור", "להגיע בזמן" |
| claim official partnership with KKL/INPA | name them as the authorities to call |

## 7. Components
- **Hero**: photo (animal or trail) with sand overlay, badge transparent at top, H1 in ink.
- **Primary button**: leaf fill, white text (white on `#2F8540` ≈ 4.6:1), pill. Secondary: ghost with leaf border.
- **Hazard cards**: paper card, icon in tinted circle chip (the chip is for the icon, never for the logo), title + one line.
- **Download block**: APK + QR (`qr-nature.svg`) for Android test; clearly "גרסת בדיקה".
- **SOS**: red, same behaviour as SH✡MER.

## 8. Do / Don't
**Do**: sand + leaf + sky, gold star as the family thread · animals first · label test builds.
**Don't**: navy-heavy city look · logo in a frame · dark green-toned UI (Dave dislikes it) · Nature outreach before Dave's own test.

## 9. Open items (NEEDS YOUR EYES)
- After tonight's rebuild, confirm the palette above still matches (CDO re-checks 3 Nov).
- `--ink3` and `--leaf` text contrast fixes proposed above; apply in the next Nature build only with Dave's GO.
