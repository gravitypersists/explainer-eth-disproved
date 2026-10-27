status: done_with_concerns

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/site/index.html — prose, check and diagram markup fixes
- /Users/m/workspace/eth/explainers/eth-disproved/site/assets/page.js — second foundation arrow (edit distance → OVC), new labelB, race crossover labels and live text, mobile step-activation line
- /Users/m/workspace/eth/explainers/eth-disproved/site/assets/page.css — neutral and OK chip colours, cracks confined to the block edge, mobile sticky canvas above the steps, tap targets, race text sizes and label halo
- /Users/m/workspace/eth/explainers/eth-disproved/run/gate/page-round-7.json — gate PASS
- /Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/probe/fix12*-*.png — self-check shots (foundation B at 360 and 1280, race at 360, mobile scrolly)

summary: I fixed every listed finding in the page, w-race, w-switchboard and the foundation diagram. I did not touch w-ladder or w-wall. In foundation state B, edit distance now shows "and unless OVC fails" with a green chip reading "SETH basis lost · still stands on OVC", plus a solid green arrow to OVC. That arrow runs diagonally on wide screens and in a right-hand gutter on narrow ones. Hamiltonian cycle (t1, ETH-only) is still the "lost" example. For P-01, on screens under 900px the sticky canvas now sits above the step cards (opaque, z-index 2), so cards slide under it and never cover it. A step activates once it is readable in the band below the canvas, and steps are 35vh apart. `verify.mjs --phase page` passes. The only remaining non-pass is "pending", for the widgets.

concerns:
- To match A-01, I also reworded two lines outside the listed findings. The recap bullet in s-09 now says edit distance still stands on OVC, and the s-07 paragraph now names edit distance among the bounds that survive. Without these, both would have repeated the old "results become unproven" contrast.
- P-01: putting the canvas on top means the probe's `scroll:` action (which centres an element) lands step cards under the canvas. Reviewers probing at 360 should judge from the lower band, not from centred shots.
- The landscape ladder (P-02) and P-03 are the ladder builder's. I did not check how they interact with the new mobile canvas stacking.
- facts.md already carries the corrected c-12, citing arXiv 1412.0348 §3.2–3.3. I did not edit the research files.

relaxed:
- none

dispositions:
- A-01: fixed — k-06 feedback now says Backurs–Indyk start from OVC, so the quadratic bound still stands, and the same holds for LCS and regex. Foundation B's t3 has the chip "SETH basis lost · still stands on OVC" (green), an "and unless OVC fails" line, and a solid arrow to OVC (`data-also="ovc"`, page.js Foundation.draw). The aria labelB, the s-07 paragraph and the recap are updated to match. The quiz's correct option is unchanged.
- A-02: fixed — ≈10^79 in the k-05 feedback (KaTeX span edited in place), the chart label "crossover ≈ n = 10⁷⁹ →" and the live text.
- A-03: fixed — now reads "(Press coverage, e.g. Unite.AI [linked], says turning this into practical speedups would take substantial further research.)"
- A-04: fixed (step-text half) — ladder-claim step 2 now says the bar position is illustrative: sparse-formula bound, every hidden constant set to 1, real constants unknown. "just below 1.307ⁿ at this scale" is removed.
- A-05: fixed — k-08 item d reads "The hardness results proved “unless ETH fails” become unproven, not false." The key stays "Follows".
- A-06: fixed — feedback says "around 800 variables". The distractor is now "Within a few dozen variables". The sparse chart label and live text say n = 800.
- A-07: fixed — "a close relative of what diff computes" in s-05 and the k-06 prompt, and "a close relative of diff" in both foundation blocks.
- A-08: fixed — "ETH's own inventors are among those reviewing it, and they say their involvement isn't a certification."
- A-09: fixed — "doesn't imply subexponential algorithms for general NP problems".
- P-01: fixed — page.css: under 900px the canvas has z-index 2, top 0, an opaque background, and steps 35vh apart. page.js: the activation line is 45% into the band below the canvas bottom. Probe at 360 confirms ladder steps 2 and 3 and wall step 5 activate, and the canvas is never covered.
- P-04: fixed (prose half) — "which eventually outgrows any polynomial".
- P-05: fixed — the "unproven again — not disproved" chips are now muted ink with a dashed grey border. Red is kept for "refuted (claimed)", and green for "still stands" and the edit-distance chip.
- P-06: fixed — the crack SVG is confined to a 56px strip at the right edge, and ETH and SETH get 68px right padding in state B, so the cracks no longer cross the text (checked at 360 and 1280).
- P-07: fixed — options now read "Immediately: SAT solvers get faster" / "Within a few dozen variables" / "Only at enormous sizes, if ever". The constants caveat moved into the feedback.
- P-08: fixed — `.d-more summary` and `.d-replay` get min-height var(--tap) under (pointer: coarse).
- P-09: fixed (w-race half) — under 600px, ticks and values are 12px, and line labels and crossover text are 13px. The crossover text also gets a surface-colour halo so it reads over the lines.
- P-10: fixed — "Model produces the claimed disproof (as reported)".
