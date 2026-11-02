# 3SDS · 3Shamrocks Studio Design System · v4.0 (2 Nov 2026)
Owner: Dave Markovich (CEO, brand). Seat: CDO. Status: canonical for every studio surface.
Supersedes the studio palette in the Mac's `3Shamrocks-Studio/Design-System` v3.1.0 (indigo `#5f4fcc` + green `#52cc7a`, Space Grotesk display). Dave's 2 Nov rule (3s-status/org/ORG.md, "Studio site & brand rules") sets the live studio brand below. The v3.1 **architecture** (4 layers, one brand block per product, shared components, RULES R1–R6) stays and is restated here.

Sources read: `3shamrocksstudio.github.io/index.html` (live tokens), `ops/` + to-do page (light 3SDS tokens), Mac `3S Projects/3Shamrocks-Studio/Design-System/{BRAND_BOOK.md, RULES.md, DESIGN-SYSTEM.md, tokens.css, brands.css}`, `assets/studio/` logo files, ORG.md.

---

## 1. Model
The studio is one brand. Every product is its own world (own colour, type, corners, motion) built on the same 4-layer architecture:

| Layer | Scope | Holds |
|---|---|---|
| 0 Primitives | shared | type scale, spacing, breakpoints, motion curves, elevation formula |
| 1 Brand | **per product** (`[data-brand="x"]`) | colour ramp, signature, neutral tint, fonts, radius unit, motion feel |
| 2 Semantic | shared, computed | `--bg --surface --text* --accent* --border* --success --warning --danger --info --focus-ring` (light + dark) |
| 3 Components | shared | buttons, cards, forms, chips, nav, sheets, toasts, lists; consume only Layer 0 + 2 |

Product brands never inherit the studio purple/green. Studio deliverables (site, one-pagers, proposals, decks, PDFs, the ops board, Dave's to-do) always use the studio brand.

## 2. Tokens

### Colour (studio, Layer 1)
| Token | Dark (default site) | Light | Use | Contrast (measured) |
|---|---|---|---|---|
| `--purple` | `#8239ea` | `#8239ea` | primary accent, buttons, links on light | white text on it 5.64:1 · on `#08080f` 3.54:1 (large/UI only) |
| `--purple-2` | `#9b59f7` | `#9b59f7` | accent text on dark, hover | on `#08080f` 4.91:1 |
| `--purple-3` | `#b07cff` | — | glows, gradient end | decorative |
| `--green` | `#3dcc6e` | `#2fb862` (fills only) | the shamrock: success, progress, highlights | on `#08080f` 9.56:1 · on white 2.09:1 → **never text on light** |
| `--green-text` (new) | — | `#187a42` | green text on light | on white 5.38:1 · on `#f4f4fb` 4.92:1 |
| `--green-2` | `#52e87d` | — | gradient end | decorative |
| `--navy` / ink | `#0f1035` | `#0f1035` | headings on light, deep panels | on `#f4f4fb` 16.74:1 |
| `--black` (bg) | `#08080f` | `#f4f4fb` | page background | — |
| `--black-2` (surface) | `#0d0d1a` | `#ffffff` | cards | — |
| `--black-3` (raised) | `#111120` | `#f0eefb` (soft) | raised / chips | — |
| `--off-white` (text) | `#e8e8f4` | `#0f1035` | body text | 16.43:1 on `#08080f` |
| `--mut` | `#a3a4c4` | `#6a6c8c` | secondary text | `#6a6c8c` on white 5.08:1 |
| `--line` | `#26264a` | `#e6e6f2` | hairlines, borders | — |
| Status | success `#2fb862`/`#3dcc6e` · warning `#f0a030` (both used on the site today) · danger + info: not defined on studio pages yet; use the 3SDS shared semantic `--danger` / `--info` from Mac `tokens.css` | | each state owns its hue; colour + dot/icon + label | — |

Gradients: **Brand** `linear-gradient(90deg,#8239ea,#3dcc6e)` (progress, one hero accent per view) · **Mark** `linear-gradient(135deg,#8239ea,#5a1fc0)` (monogram tiles only).

### Type
| Role | Family | Weights | Notes |
|---|---|---|---|
| Display / headings | **Syne** | 600 · 700 · 800 | tight tracking (-0.01em), sentence case |
| Body / UI | **Inter** | 400 · 500 · 600 | 15–16px base, line-height 1.45–1.6 |
| Numbers, labels, data | **Space Grotesk** | 500 · 600 | tabular numbers (`font-variant-numeric: tabular-nums`) |
| Hebrew | **Heebo** (fallback Assistant) | 400–800 | `dir="rtl"`, logical properties |

Scale (Layer 0, major third, 16px base): `xs .75rem · sm .875 · base 1 · lg 1.125 · xl 1.25 · 2xl 1.5 · 3xl 1.953 · 4xl 2.441 · 5xl 3.052 · 6xl 3.815 · 7xl 4.768rem`.

### Spacing (Layer 0, 4px base)
`--space-1 .25rem · 2 .5 · 3 .75 · 4 1 · 5 1.5 · 6 2 · 7 2.5 · 8 3 · 9 4 · 10 6rem`. Page gutter 16px on phones, container 1180px (site) / 680px (to-do, reading pages).

### Radius
Studio radius unit **14px** (cards, panels), 10–12px (buttons, inputs), 999px (chips, pills). Derived set from the unit: xs ×.45 · sm ×1 · md ×1.5 · lg ×2.3.

### Shadow
Soft, low and tinted: `--shadow-sm: 0 1px 3px rgb(16 23 41/.10)` · `--shadow-md: 0 6px 18px -8px rgba(130,57,234,.45)` (purple glow, primary buttons and the monogram only) · cards on light rely on a 1px `--line` border, not heavy shadow. Dark mode: shadows `rgb(0 0 0/.4–.6)`.

### Motion
`--ease: cubic-bezier(.2,0,0,1)`; 120 / 200 / 320 ms. Progress bars animate width .4s. Respect `prefers-reduced-motion` (durations collapse to ~0).

## 3. Logo rules
Files (only these, never redrawn or AI-made): `assets/studio/3shamrocks.png` (light wordmark, for dark surfaces), `assets/studio/3shamrocks_black.png` (dark wordmark, for light surfaces), `assets/studio/3S_logo.png` (monogram). Mac: `3S Projects/3Shamrocks-Studio/Brand-Assets/`.
1. Pick the version that contrasts with the surface; swap by theme.
2. On studio surfaces: large, unboxed, clear space ≥ half the logo height; min height 24px, below that use the monogram.
3. **Never box it**: no plate, chip, badge, circle crop or square frame. Never recolour, stretch, rotate, add effects.
4. On a **product**: the studio credit is the quiet "Shomer standard" footer: `3shamrocks.png` at 13–15px height, ~60% opacity, then `© 2026 3Shamrocks Studio. All rights reserved.` at ~10.5px, centred, muted.
5. Product logos are the hero on product surfaces; the studio mark never competes.

## 4. Iconography
Line icons, 1.75–2px stroke, rounded caps, 20/24px grid, `currentColor`. Emoji are allowed only as group markers on internal tools (ops board, to-do), never on client-facing studio pages. Studio illustration icons: `assets/studio/icon-human.png`, `icon-ops.png`, `icon-systems.png`.

## 5. Imagery
Real work only: product screens (`assets/real/`, `assets/screens/`), Dave's real photos (`dave-portrait.png`, `dave-studio.jpg`, `minime*`). Device mockups on soft gradient grounds. No stock people, no AI faces, nothing uncanny. Client work (VIBRANT, AposHealth) only with true captions.

## 6. Voice and tone
Premium but warm. Confident, never corporate. Clear over clever; human, not robotic; encouraging; tight.
- Founder-to-founder, first person ("I"), short sentences, active voice.
- Proof over adjectives: "led design of VIBRANT's companion app (TIME Best Inventions 2023; patient retention 68% vs 34%)". Never "+68%". Never claim Dave built a product at AposHealth (he led brand + product marketing / design system).
- Hebrew first for Israeli founders; warm closings ("שיהיה רק בהצלחה!").
- Never "launched/live" for staged things. No prices in first contact.
| Don't | Do |
|---|---|
| "No records found." | "Nothing here yet. Let's fix that." |
| "Leverage our synergistic design solutions." | "Brand, product UI and design system in one pair of hands." |
| "+68% retention" | "2× patient retention (68% vs 34%)" |

## 7. Components (Layer 3 notes)
- **Button**: primary = purple fill, white text, 44px min height, radius 10–12px, purple glow shadow; secondary = 1px line border; ghost = text in purple. One primary per view.
- **Card**: surface + 1px line + radius 14px; 16px padding on phone, 24px desktop; left 4px colour rule allowed for grouped lists (to-do pattern).
- **Chip / count**: Space Grotesk 12px, pill, soft purple bg.
- **Tabs**: segmented pill bar, selected = purple fill + white.
- **Progress**: 6px track, brand gradient fill.
- **Hero stat**: Space Grotesk 40px purple number + label (to-do pattern). Numbers must be real.
- **Focus**: 2px purple outline, 2px offset, never removed.
- Tap targets ≥ 44×44px; no horizontal scroll at 390px; light + dark both shipped.

## 8. Do / Don't
**Do**: one accent moment per view · real assets only · light and dark · Hebrew RTL done properly · `© 2026 3Shamrocks Studio. All rights reserved.` · contact dave@3shamrocks.com.
**Don't**: force studio purple/green onto products · green text on light backgrounds · dark green-toned themes for Dave's dashboards (his stated dislike) · boxed or cropped logos · placeholder numbers · parked products (J8N.IX, Ezra, Milo, Fairent, Rookie & King, Media Network) on the studio site.

## 9. Product brand index
See `../INDEX.md`. Each product's `DESIGN-SYSTEM.md` is its Layer-1 block plus rules.

## 10. Open items (NEEDS YOUR EYES)
- Mac DS v3.1 still documents the older indigo `#5f4fcc` studio palette and "Shomergency" naming. Proposed: bump the Mac DS to v4.0 with this file (copied to `3S Projects/3SDS/`). The old files were not changed or deleted.
- `--green-text #187a42` is new (needed for AA green text on light). OK to adopt?
