# R&K (Rookie & King) · Design System · v7.0 (8 Nov 2026)
Product of 3Shamrocks Studio. Seat: CDO. Status: **concept, not built yet** (portfolio page staged at https://3shamrocksstudio.github.io/work/rk.html).
Source of truth: `3shamrocksstudio.github.io/assets/brand-v3/rk/` (BRAND.md, palette.json, tokens.css, board.html). Built from Dave's own logo file `~/Desktop/3S Projects/R&K/R&Klogo.ai`; every logo shape is his vector, extracted, never redrawn. v6 is archived in `assets/brand-proposals/rk-archive-2026-11-08/`.

## 1. Essence
A gamified business-connections platform: one game of chess instead of a cold message. Professional first, game energy second. Bold, high-contrast, no cartoon characters. The mark is one piece made of two players.

## 2. Tokens
| Token | Hex | Use | Contrast |
|---|---|---|---|
| `--rk-navy-900` Navy | `#06133F` | canvas (his artboard) | — |
| `--rk-navy-950` Night | `#030A24` | board frame, deepest | — |
| `--rk-navy-800` Surface | `#0B1D55` | cards | — |
| `--rk-navy-700` Raised | `#12286B` | raised, XP track | — |
| `--rk-blue-600` Electric Blue | `#1F5BFF` | Rookie, primary action | white on it 5.25:1; on Navy 3.4:1 (large/UI only) |
| `--rk-blue-400` Sky | `#5A86FF` | links, move hints | 5.36:1 on Navy |
| `--rk-blue-200` Ice | `#B3C7FF` | highlight, focus | 10.7:1 |
| `#FFFFFF` White | | King, text | 17.9:1 |
| `--rk-steel-400` Steel | `#8B9AB8` | cold, waiting, labels | 6.3:1 |
| `--rk-steel-300` Mist | `#A9B6D6` | secondary text | 8.8:1 |
| `--rk-amber-500` Win Amber | `#F59E0B` | the win only | 8.3:1; Navy text on it 8.3:1 |
| `--rk-amber-700` Amber Deep | `#B45309` | amber on light | 5.0:1 on white |
Light: Paper `#F4F6FB`, Navy text 16.6:1, Electric Blue 4.9:1.
Type: **Poppins 800/900** display (closest Google font to his wordmark) · **Inter 400–600** text, tabular clocks.
Radius 8 / 12 / 16 / 24 · 4 px spacing · soft shadows (not hard offsets).

## 3. Logo rules
- Mark = split piece (blue Rookie half + white King half). Primary lockup = mark + infinity-OO wordmark. Stacked lockup for splash screens. Display wordmark (rook-I, king-I) only at 320 px and up. Rook+king = illustration only.
- Clear space ½X (X = one wordmark line's cap height), built into the files. Min: lockup 120 px, flat mark 16 px.
- Never recolour or swap the halves, put amber in the logo, retype the wordmark, box the mark on a page (app icon only), or reuse the overlapping drafts.

## 4. Iconography
Solid silhouettes, 24 grid, 2 px knockouts, 2.5 radius, `currentColor`. Rookie, King and Connect (infinity) are Dave's vectors. Sprite: `icons.svg`.

## 5. Game components
Board (light `#1C3A8C`, dark `#0A1A4E`, Night frame), his pieces (`pieces.svg`), Sky move hints, blue→Ice trail, connection = amber trail + infinity. Challenge card, player rows with clocks, primary/win/secondary/cold buttons, XP bar (blue fill, amber level-up), rank shields (Rookie → Contender → Strategist → Grandmaster → King; proposed thresholds, concept only).

## 6. Voice
Primary tagline "Play the game. Build the network." Short, verb-first, one chess word per line, respect rank then remove it, real results only, no emoji in UI. Microcopy in BRAND.md.

## 7. Do / Don't
**Do**: Navy canvas · one blue action per view · amber only at the handshake · his vectors only.
**Don't**: cartoon characters · amber in the logo or as card fill · Inter Tight/v6 pawn-amber mark · "launched".

## 8. NEEDS YOUR EYES
1. Primary wordmark is the infinity version; rook-I/king-I is display-only. Swap if you prefer.
2. Win Amber kept as the win-only accent beside your blue; the system also works blue-only.
