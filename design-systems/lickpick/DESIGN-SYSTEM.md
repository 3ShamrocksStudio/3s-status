# LickPick™ · Design System · v1.0 (2 Nov 2026)
Product of 3Shamrocks Studio. Seat: CDO. Staging: https://3shamrocksstudio.github.io/lickpick/ (landing) and /lickpick/app/ (PWA). A night worker is rebuilding LickPick tonight; re-check tokens against the rebuild on 3 Nov.

Sources read: `lickpick/index.html` + `lickpick/app/index.html` `:root` and component CSS, inline logo `<symbol id="logo">`, `app/icon-*-v5.png`, landing copy. No LickPick folder exists on the Mac yet (created tonight for this file).

## 1. Essence
"Keep the licks. Kill the flubs." A stage-at-night, gig-poster brand for players who hit record a lot. Loud colour on a dark stage, chunky type, offset "sticker" shadows. The app finds your best take; the brand feels like the amp is on.

## 2. Tokens
### Colour (app + landing `:root`, dark only: `color-scheme: dark`)
| Token | Hex | Use | Contrast on `--stage` |
|---|---|---|---|
| `--stage` | `#0B0912` | page background | — |
| `--panel` | `#15111F` | cards | — |
| `--raise` | `#1E1830` | raised / ghost buttons | — |
| `--line` | `#332A4A` | borders | — |
| `--mute` | `#8F83B3` | meta text | 5.71:1 |
| `--text` | `#FFF7F0` | body | 18.66:1 |
| `--dim` | `#C9BEDB` | secondary | 10.49:1 on panel |
| `--ink` | `#07060B` | text on bright fills, outlines | `--ink` on volt 15.93:1 |
| `--volt` | `#FFE600` | primary action, "Keep" | 15.6:1 |
| `--hot` | `#FF2E88` | offset shadow, highlights | 5.65:1 |
| `--cyan` | `#2BE7FF` | info, waveform | 13.16:1 |
| `--blaze` | `#B47CFF` | "Review" | 6.84:1 |
| `--red` | `#FF3D5A` | "Trash", errors | 5.71:1 |
Semantic: `--keep: volt` · `--review: blaze` · `--trash: red`.
Gradients: `--amp` 4-stop hard bands hot / blaze / volt / cyan (the amp strip) · `--fire` cyan → blaze → hot (hero accents).

### Type
| Role | Family | Notes |
|---|---|---|
| Display | **Dela Gothic One** (fallback Arial Black / Impact) | headlines, numbers, the wordmark feel |
| Body / UI | **Archivo** | 400–800; buttons 800 |

### Spacing, radius, shadow, motion
- Spacing: 3SDS 4px scale; buttons 12×18px padding; icon buttons 42×42 (raise to 44 for AA targets).
- Radius: `--r 16px` cards; buttons 14px; icon buttons 12px.
- Shadow: **hard offset, no blur**: primary `4px 4px 0 var(--hot)`; ghost `3px 3px 0 var(--ink)`; pressed state translates 3px and shrinks the shadow to 1px (tactile "stomp box" press).
- Borders: 3px ink on primary buttons, 2px line on ghost.
- Motion: snappy (60 ms press); beat-synced pulses only where music plays; respect reduced motion.

## 3. Logo rules
- Mark: inline SVG `#logo` (100×100): a pick shape in volt with a 4px ink stroke, offset hot-pink copy behind it, ink play triangle inside. App icons: `app/icon-192-v5.png`, `icon-512-v5.png`, `icon-maskable-512-v5.png`.
- Wordmark: "Lick**Pick**™" (Pick bold), with a small "Beta" tag while in beta.
- Use the mark as drawn; never recolour the volt/hot pair, never place it in a frame or tile on the page (app icons are the only tiles).
- Studio credit: quiet footer standard (`assets/3shamrocks.png`).

## 4. Iconography
Chunky line icons, 2–2.5px stroke, rounded joins, volt or text colour; Keep / Review / Trash stamps use their semantic colours plus a word, never colour alone.

## 5. Imagery
Real product screens (`assets/m_home.jpg`, `m_pick.jpg`, `m_band.jpg`, `m_export.jpg`, `m_post.jpg`) and real-feeling player photos already in `assets/` (`ph_couch.jpg`, `ph_crowd.jpg`, `ph_drums.jpg`). Night, warm stage light, hands on instruments. No fake reviews, no fake play counts, no celebrity guitars.

## 6. Voice and tone
Player to player. Short, punchy, a bit cheeky, never mean. Musician words (lick, take, bar, jam, flub).
| Don't | Do |
|---|---|
| "AI-powered audio optimisation" | "Raw jam in. Post out. Three taps." |
| "Upgrade now!" | "Free is the jam. Pro is the record." |
| invented user numbers | "Your clips never leave your phone." (true, on-device) |
Prices shown must match the live checkout (today: Pro $2.99/mo or $14.99/yr; data.json still lists the old one-time price, CFO reconciling).

## 7. Components
- **Primary button**: volt fill, ink text 800, 3px ink border, hot offset shadow, press = translate.
- **Ghost button**: raise fill, line border, ink offset shadow.
- **Icon button**: panel fill, 2px line border, volt glyph; `.hot` variant = hot fill.
- **Take card**: panel + stamp (Keep / Review / Trash) + waveform in cyan.
- **Pricing card**: Free vs Pro, the Pro card gets the amp strip on top.
- **Beta tag**: small pill next to the wordmark.

## 8. Do / Don't
**Do**: dark stage always · one volt action per view · hard shadows · honest pricing.
**Don't**: light mode (not designed) · soft blurry shadows · gradient text on body copy · "launched" (it is Beta).

## 9. Open items (NEEDS YOUR EYES)
- Icon buttons are 42px; raise to 44px for AA targets in the next build.
- Re-check this file against tonight's rebuild.
