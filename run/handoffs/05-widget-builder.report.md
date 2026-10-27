status: done_with_concerns

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-ladder/index.js: the ladder model and rendering. It initialises both mounts (querySelectorAll) and branches on data-state ("eth" or "claim").
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-ladder/index.css: scoped styles, tokens only.

summary: I built w-ladder in vanilla HTML/CSS with no libraries and no CDN. Each bar's length is log10 of the step count at n = 1,000, computed from the formulas: n³, 2^√n, 2^(n/√ln n) with constants set to 1 (x-03), 1.307ⁿ and 2ⁿ. Nothing is hard-coded. Each bar prints its digit count: 302, 117, 115, 10 and 10. The two short bars also print their value, 3.3 billion for 2^√n and 1 billion for n³, so the rungs that are close in length still read in their asymptotic order. Both zones are nested bands with their names printed in the band. Rendering depends only on the step, from the attribute or the event, so a fast jump to a later step shows that step's full state. The active change is at full ink and the rest is at 0.35 opacity. An aria-live sentence describes each step. The pre-flight check passed: the model matches c-02, c-03, c-04, c-05, c-06, c-14, x-03 and x-04.

How I checked:
- `verify.mjs --widget w-ladder` gives RESULT: PASS (round 3). Round 1 failed only on a 404 for w-wall/index.css, which was missing at the time; that file belongs to the other builder.
- I ran probe.mjs at 360 and 1280, scrolling to each `.d-step` and taking element shots of both mounts. I also ran a Playwright script with light and dark colour schemes at 360 and 1280. It reported no console errors, scrollWidth equal to clientWidth (no overflow), and no text under 11px.
- ac-06 (screenshots e3 and e4): the ETH band covers the empty rung, 2^√n and n³. The P≠NP band covers n³ only, nested inside the ETH band. Both are labelled.
- ac-07 (screenshots c2 and c3): the claim rung appears inside the ETH band with a "claim lands inside ↓" flag. The polynomial rung is 115 vs 10 digits below it and carries the P vs NP note.
- ac-10 is covered by the page prose.

concerns:
- On mobile the page sticks the canvas at 55vh and switches steps at 60% of the viewport. As the active step card scrolls up, it covers the bottom of the canvas, which is where n³ and the P≠NP zone sit. When a step first activates, the card sits just below the canvas (verified at 800px viewport height). This is for the page builder to look at, for example a later trigger line on mobile.
- The P vs NP label wording changes with width. At the 1280 desktop layout (where the mount is about 480px wide) it reads "↑ Still nowhere near this, so P vs NP is untouched." and sits to the right of n³. In the claim state on narrow mounts (under 440px) it sits on its own line under n³ and reads "n³ is still nowhere near the claim, so P vs NP is untouched.", because "this" would be ambiguous there.
- On narrow mounts in the claim state, the zone labels are shortened to "ETH: nothing down here" and "P ≠ NP: not down here" to make room for the flag. The eth state always shows the full wording.
- I added a footer line in claim steps 2 and 3: "Claimed bar: sparse-formula bound, hidden constants set to 1. Zones are about how counts grow, not their size here." It is there because at n = 1,000 the claim bar is almost as long as 1.307ⁿ, and 2^√n sits inside the forbidden zone with only 10 digits.
- Digit counts are true digit counts (floor(log10) + 1). So 1.307ⁿ shows "117 digits", while w-wall and w-race show it as ≈10¹¹⁶. Both are correct.

relaxed:
- Zone label text on narrow mounts in the claim state: shortened as described above, for lack of room at 360px.

dispositions: none (first round)
