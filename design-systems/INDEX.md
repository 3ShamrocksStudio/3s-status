# 3Shamrocks design systems · index (2 Nov 2026)
One studio system (3SDS) and one Layer-1 brand file per product. Every file lists its sources; colours were read from real assets and live code, and text contrast was measured (WCAG 2.x formula).
Mac copies: `~/Desktop/3S Projects/3SDS/` (studio + this index) and `~/Desktop/3S Projects/<Product>/Brand/DESIGN-SYSTEM.md`.

| Brand | File | Base / accent | Type | Logo rule in one line | Status |
|---|---|---|---|---|---|
| 3Shamrocks Studio (3SDS v4.0) | [3shamrocks-studio](3shamrocks-studio/DESIGN-SYSTEM.md) | `#08080f` / purple `#8239ea` + green `#3dcc6e` | Syne · Inter · Space Grotesk | real wordmark files only, large, never boxed; quiet footer credit on products | canonical |
| SH✡MER | [shomer](shomer/DESIGN-SYSTEM.md) | navy `#0C1B3A` / orange `#FC9918` (site, Command) · gold `#E0A828` (app) · red = SOS only | Alef (site) · Inter + Heebo (app) | transparent badge PNG only, **never in a square or frame** | staged / closed beta |
| SH✡MER Nature | [shomer-nature](shomer-nature/DESIGN-SYSTEM.md) | sand `#FAF6EC` / leaf `#2F8540` + gold star | Heebo | transparent Nature badge only, never framed | staged, rebuild tonight |
| LickPick™ | [lickpick](lickpick/DESIGN-SYSTEM.md) | stage `#0B0912` / volt `#FFE600` + hot `#FF2E88` | Dela Gothic One · Archivo | SVG pick mark as drawn; tiles only as app icons | Beta, rebuild tonight |
| Trashure-Hunters™ | [trashure-hunters](trashure-hunters/DESIGN-SYSTEM.md) | navy `#0A0A2E` / orange `#FF6C00` + realm colours | Fredoka · Inter | clear space = mascot eye; never boxed | parked to 15 Nov |
| Chore Royale™ | [chore-royale](chore-royale/DESIGN-SYSTEM.md) | violet `#6a21c4` / gold `#f59e0b` | Fredoka · Nunito | crest is the hero; transparent file still needed | parked, rebuild tonight |
| Fairent · הוגן | [fairent](fairent/DESIGN-SYSTEM.md) | indigo `#310A91` / violet `#6550FF` + green `#53D805` | Heebo · Assistant | drop the white logo chip, use 2 wordmark colours | parked |
| Scout · @dealxscout.ai | [dealxscout](dealxscout/DESIGN-SYSTEM.md) | navy `#0d1d31` / brass `#d9a441` | Space Grotesk · Inter · Space Mono | brass corner stamp | parked (IG) |
| Fetch · @getfetch.ai | [getfetch](getfetch/DESIGN-SYSTEM.md) | teal `#06231f` / orange `#ff7a2f` | same | footer badge | parked (IG) |
| Inq · @meetinq.ai | [meetinq](meetinq/DESIGN-SYSTEM.md) | indigo `#0b0913` / violet `#8a78f2` | same (+ rare serif word) | line-art corner mark | parked (IG) |
| Echo · @echoxreels | [echoxreels](echoxreels/DESIGN-SYSTEM.md) | plum `#160610` / teal, coral or gold | same | line-art corner mark | parked (IG) |

## Shared rules (every brand)
1. 4-layer 3SDS architecture: primitives → one brand block → semantic tokens → shared components. No raw hex in component code.
2. WCAG AA measured: body 4.5:1, large/UI 3:1, focus visible, targets ≥ 44px, status = colour + icon + word, reduced motion honoured.
3. Logos: real files only, never AI-redrawn, never boxed/framed/recoloured. SH✡MER and SH✡MER Nature: transparent PNG only, never in a square.
4. Studio credit on products: `3shamrocks.png` 13–15px, ~60% opacity, `© 2026 3Shamrocks Studio. All rights reserved.`
5. Real data only; staged things are never "launched/live"; no prices in first contact.

## Contrast fixes found (proposed, not applied)
- Studio: green text on light needs `#187a42` (5.38:1); `#3dcc6e` on white is 2.09:1.
- SH✡MER: orange `#FC9918` on white is 2.16:1 → orange buttons carry ink text, never white.
- Nature: `--ink3 #6E7A71` 4.15:1 → `#5E6A61`; leaf links `#2F8540` 4.28:1 → `#27753A`.
- Trashure-Hunters: white on orange 2.84:1 → navy text on orange.
- LickPick: icon buttons 42px → 44px.

## Decisions needed from Dave (NEEDS YOUR EYES)
1. Chore Royale or Chore Wars as the one name.
2. Fairent: drop the white logo chip.
3. SH✡MER: keep orange (act/buy) + gold (badge/app) as two roles of one brand.
4. Mac 3SDS v3.1 (indigo `#5f4fcc`) is superseded by v4.0 (purple `#8239ea`), per your 2 Nov studio rule.
