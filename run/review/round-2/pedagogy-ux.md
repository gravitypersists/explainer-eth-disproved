# Pedagogy & UX review: round 2

## Summary
I found nothing blocking, and all ten P- findings are closed. The v2 rebuild of chapters 2–6 now flows for a novice. The puzzle is named in plain words before the "3-SAT" label appears. The NP family figure comes before graph colouring. The per-switch multiplier thread runs from the wall's step 6 through the ladder, the ETH statement, f-seth, the claim and the recap. The ladder has a single encoding: order, on a labelled axis. SETH gets its own beat, figure and check, and the prose says outright that it returns in chapter 7. I walked the wall and both ladder states at 360×640, 740×360 and 1280×800, in light and dark. Nothing overprints, nothing overflows, and there are no console errors. The reading time is 17.1 min (gate), against a 12-min brief. That is reported only (d-07). Three non-blocking deviations are noted at the end.

## Scores
- acceptance criteria: 4 — ac-01…ac-20 are met in substance. ac-19's "More ·" kicker is hidden under 600px (see notes).
- cognitive load fit: 4 — The ladder now asks for one reading (order), plus two brackets and one line, revealed one per step.
- engagement where intended: 5 — There are commit-before-reveal checks at every key idea. k-09 feeds k-06, and the wrong-answer feedback explains why.
- misconception handling: 5 — "ETH broken ⇒ P = NP" is confronted at k-03, the claim step 3 and myth card 1. "Unproven ≠ false" is handled by neutral chips, the caption and k-08(d).
- split attention and redundancy: 4 — Labels sit on the rungs and brackets, with no legend. Step cards carry the interpretation, and the canvas carries the numbers.
- mobile UX: 4 — The canvas is never covered. All steps activate at every size. Tap targets are 44px. Race labels are ≥12px.
- clarity of interaction: 5 — Disclosures read as clickable boxes. The before/after toggle is a full-width two-segment control.
- visual consistency and polish: 4 — Colour meaning is consistent: red = refuted (claimed), green = stands, neutral = unproven. Dark mode is intact.

## Findings

### P-01
severity: should
criterion: mobile UX (controls/steps and effect visible together)
location: s-03 w-wall, s-04/s-06 w-ladder at <900px
evidence: The scroll walk activated every step (wall 1–6, ladder eth 1–3, claim 1–3) at 360×640 and 740×360, light and dark, and logged step and canvas rects. The canvas is opaque and sits on top, so no step card ever covers it. Wall step 5/6's digit blocks and the claim-step-3 "P vs NP untouched" chip are fully visible (run/screenshots/probe/r2-360x640-light-wall-6.png, r2-360x640-light-ladclaim-3.png). Steps stay active while their text is below the canvas.
expected_fix: none
status: closed

### P-02
severity: should
criterion: mobile UX (landscape phone)
location: w-ladder at 740×360
evidence: Compact mode puts one line per rung, and the bracket labels are right-aligned. Nothing overprints in eth step 3 or claim step 3, in light or dark (r2-740x360-dark-ladeth-3.png, r2-740x360-light-ladclaim-3.png).
expected_fix: none
status: closed

### P-03
severity: should
criterion: ac-07 / mobile legibility
location: w-ladder state "claim", step 3, 360×640
evidence: The rungs sit at a fixed pitch. "P vs NP untouched" is a green chip on the n³ rung with no collision, and "order as n gets large" is visible (r2-360x640-light-ladclaim-3.png). The P≠NP-band layout that caused the clash no longer exists.
expected_fix: none
status: closed

### P-04
severity: should
criterion: misconception handling (ETH stronger than P≠NP)
location: s-04 w-ladder, rungs 2^√n and n³
evidence: Closed because the plan-v2 rebuild removed the content. The ladder no longer has bar lengths or digit counts (H-05/H-07), so there are no identical bars to contradict the prose. The prose reads "even 2^√n, which still outgrows every polynomial, is ruled out". Order on the labelled axis carries the point, and ETH's bracket is visibly shorter (r2-1280x800-light-ladeth-3.png).
expected_fix: none
status: closed

### P-05
severity: should
criterion: misconception handling (m-05) / colour meaning
location: s-07 f-foundation-b chips
evidence: "Unproven again — not disproved" uses muted ink with a dashed grey border. Red is reserved for "refuted (claimed)" on ETH and SETH, and green for "still stands" and "SETH basis lost · still stands on OVC" (r2-360x640-dark-found1.png).
expected_fix: none
status: closed

### P-06
severity: nit
criterion: visual consistency and polish
location: s-07 f-foundation-b ETH/SETH blocks
evidence: The cracks are confined to a strip at the block's right edge and no longer cross "SETH ⇒ ETH" or "the Exponential Time Hypothesis" (r2-360x640-dark-found1.png).
expected_fix: none
status: closed

### P-07
severity: nit
criterion: engagement (prediction quality)
location: s-06 k-05 options
evidence: The options are now "Immediately: SAT solvers get faster" / "Within a few dozen variables" / "Only at enormous sizes, if ever". They are similar in length, and the constants caveat has moved into the feedback. Picking the wrong first option gives "You chose … The answer is …" plus the explanation, and reveals w-race.
expected_fix: none
status: closed

### P-08
severity: nit
criterion: mobile UX (tap targets)
location: .d-more summary, .d-replay
evidence: Measured at 360 with touch: the disclosure summary is 326×44 and the sweep Replay button is 44px tall. The w-race toggle buttons are 44px.
expected_fix: none
status: closed

### P-09
severity: nit
criterion: mobile UX (diagram legibility)
location: w-wall axis; w-race labels
evidence: The w-wall log axis has been removed entirely (H-02). The smallest w-race SVG text measured at 360 is 12px effective (24 text nodes), and the gate's legibility check passes at 360/768/1280.
expected_fix: none
status: closed

### P-10
severity: nit
criterion: framing (d-02)
location: timeline (now s-08, "How the claim surfaced")
evidence: The timeline reads "16 Oct — Model produces the claimed disproof (as reported)" and now sits directly above the review-status card.
expected_fix: none
status: closed

## Notes (not findings; for the human review)

- **ac-18, the page builder's reading.** k-09 sits before f-foundation in the reading order, and nothing is gated. I find this acceptable. f-foundation is a static summary in s-05, the plan sets s-05's pacing to "continuous", and R-09 removed motion from it. Gating a static figure on a check would add friction and wouldn't make the reader retrieve anything. The gate that matters, k-06 before state B in s-07, is in place.
- **ac-19 deviation (non-blocking).** `@media (max-width: 599px) { .d-more .more-k { display: none; } }` hides the "More ·" kicker on phones (r2-360x640-dark-more-closed.png). The box, tinted fill, chevron and "show" hint still make it read as clickable, so the intent of the criterion holds. Restore the kicker if strict ac-19 compliance is wanted.
- **Claim-rung chip wording (d-02 framing, non-blocking).** The chip on OpenAI's rung reads "ETH's bet is lost", not the plan's "if this holds, ETH's bet is lost". The rung name ("OpenAI's claimed algorithm") carries the hedge, but the chip on its own reads as settled.
- **Mobile step text slides under the canvas.** At 360×640, a step stays active while its first lines scroll under the opaque canvas (r2-360x640-light-wall-3b.png). This is cosmetic; the canvas stays fully visible, which is what P-01 was about.
- Reading time: 17.1 min measured by the gate (page-round-12), against a 12-min brief. Per d-07 this is the user's call.
- Note that `run/screenshots/page-round-12/` is empty. I took my own screenshots at run/screenshots/probe/r2-*.png.
