# Builder dispositions for round-1 findings and site-1 H- findings

Extracted verbatim from the builders' reports (only the dispositions sections). Since then, the page was rebuilt to plan v2 (see learning-plan.md `## Revision 2 changes`); some round-1 findings concern content that no longer exists.

## From 12-page-builder
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

## From 13-widget-builder
dispositions:
- P-02: fixed — at 740×360 the widget now uses compact mode. Rungs are 26–36px each, bars and counts sit on one line beside the labels, the zone labels are right-aligned on the zone's first rung, and the counts are shortened to "N digits". No overlaps in any step, light or dark.
- P-03: fixed — at 360×640 in claim step 3, "↑ Far below the claim, so P vs NP is untouched." now sits inside the P≠NP zone to the right of n³ and its count, measured so it doesn't collide. The 2^√n line no longer runs into the P≠NP band. The footer's height is reserved for the claim caveat, so the layout doesn't jump between steps.
- P-04 (widget half): fixed — the 2^√n rung has an italic note: "close to n³ at n = 1,000; pulls away fast: at n = 10⁶, 302 vs 19 digits", with shorter wordings where the width is tight. The digits are computed with the same formulas as the bars and use the same digit convention, which gives 302/19 rather than the finding's 301/18. The eth live text for steps 1 and 3 adds the same comparison.
- A-04 (widget live text): fixed — claim step 2's live text now says the bar uses the sparse-formula bound with all hidden constants set to 1, so its exact position next to 1.307ⁿ (115 vs 117 digits) is illustrative and the real constants are unknown. It no longer says "just below". The visible footer now says "so its exact position is illustrative" at every width ("exact spot" on narrow screens).
- P-01 (cheap widget part): fixed (partial) — the stack is anchored to the top instead of centred, rung growth on phones is capped at 8px, and the footer follows the stack, so the canvas's lower part is mostly empty. Rest is in concerns.

## From 14-widget-builder
dispositions:
- P-09 (wall half): fixed — .ww-axlab 12px, .ww-sup 10px (was .72em ≈ 7.9/8.6px), wide axis gutter widened to fit. Verify's legibility check is clean at 360/768/1280.
- P-01 (wall, cheap part): fixed — the narrow layout puts the chart above the readout, so the step-5 1.307ⁿ bar is in the upper part of the mobile canvas (ww360-s5.png, ww390-s5w.png). Step activation itself is still the page builder's job.

## From 17-page-builder
dispositions:
- H-01: fixed (step-card half) — every time translation is now in the wall's step cards: step 1 "instant", step 2 "well under a second", step 3 "tens of thousands of years", step 4 "tens of millions of years", step 5 the atoms comparison, step 6 the ×1.307 point. The canvas half belongs to the w-wall builder.
- H-03: fixed — "Four running times for 3-SAT" is gone. The s-04 intro now asks where the best *possible* 3-SAT algorithm could sit, and introduces the figure as "four possible answers… two are algorithms we have, and two are speeds nobody has found".
- H-04: fixed (prose half) — "The gaps are to scale" is deleted. Step 1 now explains the vertical order ("Higher… means the work grows faster as you add switches").
- H-08: fixed — the ToC uses the UI sans at 14px, numbered tabular chapters and full titles that wrap, with no └ and no ellipsis. The current chapter has a 3px accent bar, a tinted pill, weight 600 and an accent number. Visited chapters use the secondary ink and upcoming ones the muted ink. Progress is a 4px accent track with "Chapter N of 9 · ~17 min". The mobile summary reads "Contents · Chapter N of 9: <short title>" and updates on scroll.
- H-09: fixed — all five disclosures are now bordered, tinted boxes with a rotating chevron, a "More ·" kicker, a show/hide hint, an accent border on hover and focus, and a 44px minimum height. The timeline moved from s-06 to s-08 as "How the claim surfaced", directly above the review card, with its content and the "as reported" marks unchanged.
- R-01, R-02, R-05, R-07, R-08, R-09, R-10, R-11, R-12, R-13, R-15: fixed as described above. Also changed:
  - k-01 feedback gains the lopsidedness line.
  - k-03 feedback now says "below ETH's line".
  - k-08 (e) now links to "A bolder bet: SETH".
  - The recap now states both bets as multipliers per extra switch.
  - All round-1 fixes are kept: A-01 OVC wording and chip, P-05 neutral chips, P-06 cracks behind the text (now static).

## From 18-widget-builder
dispositions:
- H-01 (canvas half): fixed — w-wall/index.js has no time text. The canvas shows only n, the row count and the bar or digit block. The time text belongs in the page builder's step cards.
- H-02: fixed — the log axis and ticks are gone. Steps 1–4 are true-scale linear bars, each crushing the previous one to a labelled hairline. Steps 5–6 write the numbers out in full (302, 117 and 81 digits).
- H-05: fixed — on the step-5 canvas the label reads "2¹⁰⁰⁰ = a **302-digit** number of rows". A bracket labelled "302 digits" spans the block, and a "N digits per line" ruler above it ties width to digit count. On short canvases the ruler is dropped (see relaxed). Step 6 sets 117 and 81 in the same type and line width, so block size is digit count.

## From 19-widget-builder
dispositions:
- H-03: fixed (widget half). The figure is titled with the question "Where could the best possible 3-SAT algorithm sit?". Each rung is tagged "we have this", "nobody has found this" or "claimed", which answers "is this four algorithms' running times?". The rest is the page builder's prose (R-05).
- H-04: fixed (in-figure half). No lengths are left to compare, so "the gaps" has nothing to refer to. Order is the only encoding, and the axis names it.
- H-05: fixed (ladder half: length encoding removed). There are no bars or digit counts. Each rung states its per-switch multiplier in words. The "2^1000 = 302 digits" magnitude belongs to the wall, as the plan says.
- H-06: fixed. The vertical axis is drawn and labelled "work grows faster as you add switches (order as n gets large)". "Not anywhere down here" is gone. The bets are labelled brackets, and the ETH boundary is a drawn, labelled "ETH's line".
- H-07: fixed. The 2^√n vs n³ note is deleted, in the widget and in the live text.
- P-01 / P-02 / P-03 (round 1): not regressed. Content is anchored to the top. 740×360 fits in compact mode. 360×640 has no collisions in any state, light or dark.
