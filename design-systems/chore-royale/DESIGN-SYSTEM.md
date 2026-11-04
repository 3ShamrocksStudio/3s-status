# Chore Royale™ · Design System · v1.1 (2 Nov 2026)
Product of 3Shamrocks Studio. Seat: CDO. Studio case page: https://3shamrocksstudio.github.io/work/chore-royale.html (a night worker rebuilds it tonight). App source: Mac `3S Projects/Chore-Wars/` (`index.html`, `data-brand="choreroyale"`).
Name: the app, the Mac BRAND.md and Dave's 2 Nov studio rule say **Chore Royale**; a 22 Oct memory note says "Chore Wars is the only name". **NEEDS YOUR EYES: one name.** This file uses Chore Royale until Dave answers.

Sources read: Mac `Chore-Wars/BRAND.md` (v1.0), Mac 3SDS `brands.css` block `[data-brand="choreroyale"]` (v3.1.0), `Chore-Wars/Brand/logos/`, `work/chore-royale.html`.

## 1. Essence
"A TV game show in your hand." Spin · Battle · Win. Spotlights, a wheel, a cheering crowd; the prizes are real and **the scoring is incorruptible**: the game sets every star, no human hands out points. Families with kids 8–18. Free for families; family-safe ads for parents only; ad-free family plan.

## 2. Tokens (3SDS Layer-1 block, measured AA)
### Colour
| Token | Hex | Use | Contrast |
|---|---|---|---|
| `--brand-600` royale violet | `#6a21c4` | primary, buttons (light) | white on it 7.99:1 |
| `--brand-400` | `#8a4fe6` | accent on dark | white on it 4.84:1 |
| ramp | `50 #f6f1ff · 100 #ece0ff · 200 #d8c0ff · 300 #bd95fb · 500 #7a30dc · 700 #561b9e · 800 #431679 · 900 #311155 · 950 #200b39` | surfaces, states | — |
| `--signature-500` game-show gold | `#f59e0b` (400 `#fbbf24`, 600 `#d97f08`) | stars, crown, lights; **fill/glyph only** | dark-on-gold 9.37:1 |
| `--brand-gradient` | `linear-gradient(120deg,#8a4fe6,#7a30dc 45%,#c026d3 115%)` | hero, wheel rim | — |
| `--tint` | `#3b2d63` @ 8% (dark: `#2c1e4f` @ 16%) | violet-tinted neutrals | — |
| Status | shared 3SDS `--success/--warning/--danger/--info` | gold is never a state | — |

### Type
Display **Fredoka** 600 (the marquee) · Body **Nunito**. Sizes from the 3SDS scale (`--text-xs … --text-7xl`).

### Spacing, radius, shadow, motion
- 3SDS 4px spacing; kid-sized targets ≥ 48px.
- `--radius-unit: 16px` (sm 16 · md 24 · lg ≈37): round and friendly, not babyish.
- Shadows violet-tinted: `--shadow-color: 36 20 64`.
- Motion `--dur-scale: 1.1`, spring ease `cubic-bezier(.34,1.6,.5,1)`: bouncy game-show energy; collapses under reduced motion.

## 3. Logo rules
- Files: `Chore-Wars/Brand/logos/Chore-Royale_FinalLogo.jpg` (final), `chore-a.jpg`, `chore-b.jpg` (concepts). Studio page screen: `assets/real/scr-chore.png`.
- The final logo exists **only as JPG** (opaque background). Until a transparent PNG/SVG exists, use it only on a matching background or inside the app screenshot; never put the JPG on a contrasting tile.
- The product crest is the hero; the studio credit is the quiet footer standard. Never fabricate, recolour or box.

## 4. Iconography
Rounded filled icons with 2px outlines; stars and crown in gold; wheel segments in ramp violets; avatars round. Every state = colour + icon + word.

## 5. Imagery
No photos (Dave's 17 Oct direction: logo, no photos, per-player app). Illustration and UI only: the wheel, the battle arena, the splat, avatars of the household.

## 6. Voice: "The Host"
Warm, hyped family game-show host. Brings the energy, fair to a fault, kid-friendly never babyish, roots for the player, tight.
| Don't | Do |
|---|---|
| "No records found." | "No chores yet. Spin to win one! 🎡" |
| "Task submitted for approval." | "Sent to Dad to confirm ✓" |
| "You lost the match." | "Zap takes the round. Your turn's coming!" |
| "Invalid: insufficient balance." | "Need ⭐ 12 more for that. Keep finishing chores!" |
| "Purchase subscription." | "Unlock the whole show: Chore Royale Plus 👑" |

## 7. Components
3SDS Layer 3 (`.btn .card .badge .chip .toast .modal .avatar .progress .segmented .switch .empty .list-row`) plus token-only game pieces: **wheel**, **battle arena**, **splat**. Primary button violet fill white text; gold only for rewards. Gate: `ds-audit.py` ≥ 90 before "done".

## 8. Do / Don't
**Do**: game-show energy with honest scoring · parents control money/ads · light + dark.
**Don't**: ads to kids · photos · gold as a status colour · retired names in the UI (ClanForge, ChoreQuest).

## 9. Open items (NEEDS YOUR EYES)
- Name: Chore Royale or Chore Wars?
- Transparent logo file needed (export from the source art).
