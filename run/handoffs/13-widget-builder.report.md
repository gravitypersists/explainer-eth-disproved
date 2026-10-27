status: done_with_concerns

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-ladder/index.js — the layout is rewritten. It now picks one of three modes by measured fit: regular, narrow, or compact (one-line rungs for short mounts). It also adds the 2^√n note, the A-04 caveat in the live text, and a footer whose height is reserved so it doesn't reflow between steps.
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-ladder/index.css — row children are now absolutely positioned. Adds styles for `.wl-note`, compact mode and the narrow count. All rules are scoped and use tokens only.
- /Users/m/workspace/eth/explainers/eth-disproved/run/gate/w-ladder-round-4.json — the verify result, which is PASS.

summary: Rungs are now placed explicitly from measured label, bar and count heights, so their contents can't overlap. When the regular two-line layout can't fit, as on a landscape phone (198px mount), the widget switches to compact mode. Each rung goes on one line with a label column, and the zone labels sit at the right end of the zone's first rung. Portrait phones never use compact mode; the rung padding shrinks instead. The 2^√n note is built from the formulas: 2^√(10⁶) has 302 digits and (10⁶)³ has 19. The finding's suggested "301 vs 18" are the base-10 logarithms, not digit counts. The note uses the longest of three wordings that fits. Content is now anchored to the top of the mount, with the footer right below it.

How I checked it: I wrote a Playwright script (scratchpad lad.mjs) at 360×640, 740×360, 390×844 and 1280×800, in light and dark. It sets data-step and fires `didactician:step` for every step of both mounts, takes a screenshot of the mount, and checks every visible text box for overlap and for spilling out of the mount. Result: 0 issues across all 56 states. There's no horizontal overflow, and the smallest text is 11.5px (the superscripts). I looked at contact sheets for all of them, in `/private/tmp/claude-501/-Users-m-workspace-eth/456ff478-f5ce-41e1-9832-377ffc71af12/scratchpad/shots/` (sheet-*.png). verify.mjs --widget w-ladder: PASS.

concerns:
- P-01 is only partly addressed inside the widget. I didn't flip the ladder, because the prose calls n³ "the bottom rung". The P≠NP band and the n³ rung therefore still sit in the lower part of the stack. On a 390×844 phone the stack ends about 60% of the way down the canvas, with the footer right under it. The real fix is still the page builder's step-activation change.
- At 360×640 in the claim state, the 2^√n note doesn't fit and is left out. In the eth state at 360 it uses the short wording "at n = 10⁶: 302 vs n³'s 19 digits", which drops "pulls away fast". The live text always gives the full comparison in eth steps 1 and 3.
- In compact (landscape) mode the "claim lands inside ↓" pill is hidden when it doesn't fit next to the claim bar, which happens at 740px. The claim rung is still highlighted in red inside the ETH band.
- Page prose: s-04 step text should match the note, e.g. "302 vs 19 digits at n = 10⁶" rather than 301/18, if the page quotes numbers.

relaxed:
- none

dispositions:
- P-02: fixed — at 740×360 the widget now uses compact mode. Rungs are 26–36px each, bars and counts sit on one line beside the labels, the zone labels are right-aligned on the zone's first rung, and the counts are shortened to "N digits". No overlaps in any step, light or dark.
- P-03: fixed — at 360×640 in claim step 3, "↑ Far below the claim, so P vs NP is untouched." now sits inside the P≠NP zone to the right of n³ and its count, measured so it doesn't collide. The 2^√n line no longer runs into the P≠NP band. The footer's height is reserved for the claim caveat, so the layout doesn't jump between steps.
- P-04 (widget half): fixed — the 2^√n rung has an italic note: "close to n³ at n = 1,000; pulls away fast: at n = 10⁶, 302 vs 19 digits", with shorter wordings where the width is tight. The digits are computed with the same formulas as the bars and use the same digit convention, which gives 302/19 rather than the finding's 301/18. The eth live text for steps 1 and 3 adds the same comparison.
- A-04 (widget live text): fixed — claim step 2's live text now says the bar uses the sparse-formula bound with all hidden constants set to 1, so its exact position next to 1.307ⁿ (115 vs 117 digits) is illustrative and the real constants are unknown. It no longer says "just below". The visible footer now says "so its exact position is illustrative" at every width ("exact spot" on narrow screens).
- P-01 (cheap widget part): fixed (partial) — the stack is anchored to the top instead of centred, rung growth on phones is capped at 8px, and the footer follows the stack, so the canvas's lower part is mostly empty. Rest is in concerns.
