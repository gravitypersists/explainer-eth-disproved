# Pedagogy & UX review: round 1

## Summary
A strong, faithful build. All 16 acceptance criteria are met at 390 and 1280 in light and dark mode. Every check commits before it reveals, explains the tempting wrong answer, and locks after the first answer. The gates (sweep, n=110, race chart, foundation B) hold until the commit. The misconceptions (P=NP, crypto, "now easy", SETH survives) are confronted. The "flashy, presentational" ask is met: dark hero with bit field, a stamped manuscript card, giant tabular counters, a cracking foundation. No blocking issues. The main weaknesses are on phones. Opaque step cards slide over the bottom of the sticky canvas, which is exactly where the ladder's P≠NP rung and the wall's 1.307^n bar sit. The ladder breaks at 360×640 and in landscape. Also, the ladder's 2^√n and n³ bars are the same length while the prose says 2^√n "towers over any polynomial".

## Scores
- acceptance criteria: 5 — all 16 met; probed each at 390 and 1280
- cognitive load fit: 4 — s-06 stacks symbols + formula + scaffold + timeline + ladder + check + chart, but each is chunked and scaffolds are collapsed
- engagement where intended: 5 — predict/apply/explain at each key idea; goal-free switchboard before k-01; interleaved k-08
- misconception handling: 4 — all four confronted with reasons; red "unproven again" chips visually contradict "not disproved" (see finding)
- split attention and redundancy: 5 — direct labels throughout; captions add conditions; no legends
- mobile UX: 3 — sticky canvases work at activation, but step cards cover the changing part of the canvas during reading; ladder collides at 360×640 and collapses in landscape
- clarity of interaction: 5 — "Tap a switch to flip it", lock notes ("Answer the question to continue the climb"), on/off words on lamps, keyboard Space toggles switches with a visible 2px focus ring
- visual consistency and polish: 4 — dark mode intact everywhere; crack strokes overprint labels; some tiny axis text

## Findings

### new
severity: should
criterion: mobile UX (controls/steps and their effect visible together); supports ac-05, ac-06, ac-07 on phones
location: s-03 w-wall, s-04 and s-06 w-ladder, at <900px (components.css `.d-step` margin 0 0 60vh; page.js activation line `innerHeight * 0.6`)
evidence: When a step activates, its top sits about 3px below the 55vh canvas, so the whole canvas is visible (run/screenshots/probe/a360-act-lad-2-0.58.png). As the reader keeps scrolling to read the step, the opaque card slides up over the bottom third of the canvas, and the step stays active the whole way up. That bottom third holds the very thing each step is about. Ladder step 2 ("Nothing on the bottom rung") hides the n³ rung and P≠NP band (w390-08-ladder-eth-2.png, a360-act-lad-2-0.4.png). Wall step 5 hides the 1.307^n bar (w390-07-wall-5.png). Claim step 3 cuts off the "P vs NP is untouched" label (w390-13-ladder-claim-3.png).
expected_fix: On narrow screens, keep the active step below the canvas while it is read. One way: move the activation line to just under the canvas bottom (about 55vh + 16px) and cut the inter-step margin to about 35vh, so the next step takes over before the current card reaches the canvas. Another: give `.d-scrolly-steps .d-step` a scroll-margin and spacer so the step reads in the lower 45vh. As a minimum, put each step's changing element in the top half of the mobile canvas (e.g. flip the mobile ladder so the bottom rung renders near the top, or shorten the readout above the wall bars).

### new
severity: should
criterion: mobile UX (re-layout, don't shrink; landscape phone check)
location: s-04/s-06 w-ladder at 740×360 (landscape phone)
evidence: In landscape the ladder compresses into overlapping text. "2ⁿ brute force" overprints "1.307ⁿ best known", the "P ≠ NP says: not down here" label overprints "n³ polynomial" and "10 digits · 1 billion", and the bars are not visible (run/screenshots/probe/land-act-lad-2-0.58.png, land-act-lad-3-0.58.png). The ladder is unreadable at this size.
expected_fix: Give the ladder a minimum rung pitch (about 36px per rung). When 55vh can't fit five rungs, switch to a compact layout: labels on one line beside the bars, and the "digits" text dropped or moved into the bar. Alternatively, raise the mount's max-height for short viewports and let the step column scroll under it.

### new
severity: should
criterion: ac-07 / mobile legibility
location: s-06 w-ladder state "claim", step 3, at 360×640
evidence: At the smallest supported phone the claim-state ladder runs out of height. The "2^√n subexponential · 10 digits · 3.3 billion" line sits under the P≠NP band's dashed border. The green "n³ is still nowhere near the claim, so P vs NP is untouched" label collides with "10 digits · 1 billion" (run/screenshots/probe/a360-act-claim-3.png). That label carries ac-07's "P vs NP is untouched" message. At 390×844 it fits.
expected_fix: Lay out rungs at a fixed pitch with the zone labels in reserved rows, so nothing overlaps. Alternatively, put the "still nowhere near" label beside the claimed rung, where there's free width, rather than inside the P≠NP band.

### new
severity: should
criterion: misconception handling (o-2: ETH is stronger than P≠NP); figure/prose consistency
location: s-04 w-ladder (all states), rungs "2^√n" and "n³"
evidence: Both bars are drawn the same length: "10 digits · 3.3 billion" and "10 digits · 1 billion" (w390-08-ladder-eth-1.png, d1280-08-ladder-eth-3 in sheet). The step text beside it says: "Even 2^√n, which towers over any polynomial, is ruled out." The reader is told the subexponential rung towers over the polynomial one while looking at two identical bars. That weakens the point that ETH's zone is genuinely larger than P≠NP's.
expected_fix: Pick one. (a) Add a short label on the 2^√n rung: "close at n = 1,000; pulls away fast: at n = 10⁶, 301 vs 18 digits". (b) Encode the bars at a larger n, where the gap shows, keeping the honest-scale caption. (c) Soften the prose to "which eventually outgrows any polynomial".

### new
severity: should
criterion: misconception handling (m-05: "unproven, not false"); visual consistency (colour meaning)
location: s-07 f-foundation-b, theorem-block chips
evidence: The chips "UNPROVEN AGAIN — NOT DISPROVED" and "BASIS LOST · …" use the same red outline and red text as the "REFUTED (CLAIMED)" badges on ETH and SETH (fb390-fb.png, d1280-17-foundation-b-after.png). Colour tells the reader the theorems are broken too, which is the misconception that myth card 3 and k-08(d) argue against.
expected_fix: Give "unproven again — not disproved" a neutral or amber treatment, such as the muted ink or a dashed grey border, distinct from the red "refuted" colour. Red stays reserved for the claimed-refuted hypotheses, and green for "still stands".

### new
severity: nit
criterion: visual consistency and polish
location: s-07 f-foundation-b, ETH and SETH blocks (all widths)
evidence: The decorative crack strokes are drawn over the block text: "SETH ⇒ ETH" and "the Exponential Time Hypothesis" are struck through by the zigzags (fb390-fb.png, d360-17-foundation-b-after.png).
expected_fix: Draw the cracks behind the text (z-order), or confine them to the block's padding and edges.

### new
severity: nit
criterion: engagement where intended (prediction quality)
location: s-06 k-05 options
evidence: The correct option, "Only at enormous sizes, if ever in practice, and nobody knows the real constants", is twice the length of the others and is the only hedged one. A test-wise reader can pick it without predicting.
expected_fix: Make the options parallel in length and tone, e.g. "Immediately: SAT solvers get faster" / "Around a few hundred variables" / "Only at astronomically large sizes". Keep the constants caveat in the feedback.

### new
severity: nit
criterion: mobile UX (tap targets ≥ 44px)
location: `.d-more summary` (5 disclosures: "How to read NOT and OR", "The formal statement", "Why is SETH stronger?", "What the paper actually proves", "The exact formal bound"); `.d-replay` buttons
evidence: The probe at 390 measured the summaries at 340×32 and the Replay buttons at 93×32 and 86×40.
expected_fix: Set `min-height: var(--tap)` on `.d-more summary` and `.d-replay` under `(pointer: coarse)`, matching `.d-toc-mobile summary`.

### new
severity: nit
criterion: mobile UX (diagram text legibility)
location: w-wall log axis tick exponents (10⁰…10³⁰⁰); w-race axis ticks and end labels
evidence: Computed effective sizes at 390 are 7.9px for the wall tick superscripts, 8.6px for the bar-end exponents, and 11px for the race chart tick and end-value labels.
expected_fix: Raise the wall tick labels to ≥11px, with superscripts ≥9px or written as "1e100". Raise the race chart labels to 12–13px on mobile.

### new
severity: nit
criterion: framing rule (d-02) / consistency
location: s-06 timeline strip, first item
evidence: "16 Oct — Model produces the disproof (as reported)". Everywhere else the page says "claimed".
expected_fix: Change it to "Model produces the claimed disproof (as reported)".

## Acceptance criteria (evidence)
- ac-01 met: the first screen at 360 and 390 shows the manuscript title card with the "CLAIM · UNDER REVIEW" stamp and the reviewers' names (p360b-first.png, w390-01-top.png). No heading asserts the refutation as fact.
- ac-02 met: x→F lit rule 1 off and rule 2 on immediately; z→T gave "All 4 satisfied". The default x=T,y=F,z=F shows "3 of 4", with rule 2 "off" as a word.
- ac-03 met: "Try all 8" is disabled before k-01 and enabled after. The sweep ends with "2 of 8 settings work: (F, F, T) and (F, T, T)", and a Replay control is present. With reduced motion it jumps to the end state.
- ac-04 met: n and rows are on the canvas at each step, and n=100 reads "tens of thousands of years".
- ac-05 met: steps 4–5 are hidden until k-02. Step 5 shows the 1.307ⁿ bar beside 2ⁿ, "best known before the claim (randomised, PPSZ family)", "Smaller base, same exponential shape".
- ac-06 met: the bands are labelled on the ladder, with ETH covering 3 rungs and P≠NP 1 (mobile visibility caveat above).
- ac-07 met: the claimed rung sits inside the ETH band, with the label "Still nowhere near this, so P vs NP is untouched" (360×640 collision above).
- ac-08 met: the chart is hidden until k-05. The in-chart banner reads "Illustrative · constants set to 1", and both crossovers are printed on the chart.
- ac-09 met: n, m, log n and o(1) are introduced before the display formula. The text says counting, fixed width k, deterministic, polynomial memory.
- ac-10 met: ETH is called an "unproven assumption", and k-03's feedback explains why 2^√n breaks ETH but not P≠NP.
- ac-11 met: the graph-colouring "unless ETH fails" form is shown, and no paper count appears.
- ac-12 met: the figure title changes from "before the claim" to "if the claim holds" only after k-06. ETH and SETH read "refuted (claimed)", the theorems read "unproven again — not disproved", and OVC reads "still stands".
- ac-13 met: the three myth cards are a grid at 1280 and stacked on mobile, with GNFS cited.
- ac-14 met: the Lean/humans two-column table is present, the quote is attributed "as reported by The Next Web", and the withdrawal is framed as "says nothing about the ETH proof".
- ac-15 met: each of the five statements commits independently with in-place feedback ("Not quite"/"Right" plus a section link). The page then ends with the Recap and Further reading.
- ac-16 met: the 16/17 Oct dates are marked "(as reported)" with sources, and "practical gains" is attributed to press reports.

Other notes: reading time 13 min against a 12-min budget (gate), for information only. No horizontal overflow at 360 or 390. No console errors. Dark mode is clean at 360 and 1280. The "flashy, presentational" request is met.
