# Trashure-Hunters™ · Design System · v1.0 (2 Nov 2026)
Product of 3Shamrocks Studio. Seat: CDO. Staging: https://3shamrocksstudio.github.io/th-site/ (site) and /th-mvp/ (web test build). Parked to 15 Nov (board).

Sources read: Mac `3S Projects/Trashure-Hunters/02_Brand-Assets/brand-system.md` (2026), `th-site/index.html` `:root` + fonts, `trashure-hunters` repo (app), memory (locked slogan, Elemonster facts).

## 1. Essence
**Slogan (LOCKED): "Clean the World. Win the Game."** (the old "Team Up. Clean Up. Save the Planet." is retired, never use it.)
Cleaning real-world trash heals a fictional game world. For kids 8–14 and their parents. Hopeful, heroic, adventurous, never preachy: "No villains, only neglect." Positioning line (internal/investor): "Pokémon GO meets Ingress meets a Pixar environmental movie."

## 2. Tokens
### Colour (brand-system.md + th-site)
| Role | Token | Hex | Contrast |
|---|---|---|---|
| Primary energy / CTA | `--orange` | `#FF6C00` | on navy 6.75:1 · **white text on it 2.84:1 → fails**; CTA text = navy `#0A0A2E` (6.75:1) |
| Primary light | `--orange-l` | `#FF8A33` / `#FF7B1A` | hover |
| Ground / cosmic | `--navy` | `#0A0A2E` | — |
| Panel | slate night | `#2E3C4B` | — |
| Growth / success | green 500 | `#22C55E` | — |
| Reward | `--gold` | `#FCD34D` | navy on gold 13.29:1 |
| Ink (light pages) | `--ink` | `#16163A` | on cream 16.3:1 |
| Ink 2 | `--ink-2` | `#4A4A6A` | on cream 7.96:1 |
| Cream page | `--cream` | `#FFF7E8` | — |
| Neutral | charcoal / neutral | `#1E1E1E` / `#F5F5F5` | — |

Realm / Elemonster colours (Game Bible v2.1): Cosmix space `#D94FAA` · Wispo air `#5B2D8E` (site uses `#A78BFA` on dark) · Bloop water `#4BA3E3` · Sproutz earth `#2EBD8A` · Blazo fire `#F5961E` · Orbo light = white + warm glow. Realm sections pair a top/bottom ground (`--top`/`--bot`, e.g. `#06283A`, `#0A2B20`, `#1A0B36`, `#2A1307`) with a pale card tint (`--pc` `#E6F3FC`, `#E7F8F0`, `#FBE8F4`, `#FFF0DC`).

### Type
| Role | Family | Notes |
|---|---|---|
| Display (site) | **Fredoka** 500–700 (self-hosted `assets/fonts/fredoka.woff2`) | rounded, playful |
| Body (site + app + deck) | **Inter** 400–700 | app ships Inter in `android/app/src/main/res/font` |
| Logo wordmark | custom rounded lettering (green gradient, dark outline) | artwork only |
(Older 3SDS docs list Baloo 2 + Nunito: superseded by what ships.)

### Spacing, radius, shadow, motion
- 3SDS 4px spacing; big touch targets for kids (≥48px in the app).
- Radius: cards 28px, chips/buttons 999px, round avatars 50%.
- Shadow: soft coloured glows under Elemonsters; cards soft drop.
- Motion: bouncy (spring ease), hatch/catch celebrations; reduced motion respected; nothing flashing.

## 3. Logo rules
- Files: `logo_H.png` (horizontal), `logo_V.png` (vertical), `TH_logo.png` (mascot + wordmark), `TH_icon.png` (one-eyed Elemonster app icon); site `assets/img/logo.webp`. Mac: `02_Brand-Assets/logos/`.
- Clear space = the height of the mascot's eye. Full-colour logo on light or navy grounds; never boxed or placed on a tile on a page.
- Studio endorsement: quiet footer (`3shamrocks.png`), `© 2026 3Shamrocks Studio. All rights reserved.`; external decks add "Strictly Confidential … Not for distribution without signed NDA."

## 4. Iconography
Rounded, chunky, filled-plus-outline game icons; realm colour per Elemonster; XP, Trash-Cash, Trash-Cam, Grime Zones each have one fixed icon. Never use real brand logos of trash/recycling companies.

## 5. Imagery
3D-render Elemonsters (Sproutz, Bloop, Blazo, Wispo, Cosmix, Orbo), each with 4 stage images; **Cosmix is star-shaped**, not round. King Grime (trash monster) only as a funny, non-scary contrast. Restored-world motif: `THonbrd_BG.png`. **No photos of real children**, no user photos shown publicly (app rule), no scary imagery.

## 6. Voice and tone
Kid-credible hero voice; parents' voice on safety pages. Short, active, celebratory.
| Don't | Do |
|---|---|
| "Reduce your environmental footprint." | "Snap the trash. Heal the realm." |
| shame: "You're polluting the planet" | "No villains, only neglect." |
| invented download or user counts | real reward numbers from the game rules |
Safety promises (site) must match what the app actually does (COPPA consent, no public photos).

## 7. Components
- **CTA**: orange pill, navy text, 48px+.
- **Realm card**: realm gradient ground + pale tinted card + Elemonster render + one line.
- **XP / Trash-Cash chips**: gold pill, navy text, Inter tabular numerals.
- **Parent panel**: cream page, ink text, calm, no game noise.

## 8. Do / Don't
**Do**: locked slogan · realm colours per Elemonster · parent-safe copy.
**Don't**: white text on orange · retired slogan · Baloo 2 · real kids' photos · "launched".

## 9. Open items (NEEDS YOUR EYES)
- Navy `#0A0A2E` / slate `#2E3C4B` were "Claude's defensible choices pending Dave's sign-off" in brand-system.md. Still unsigned.
