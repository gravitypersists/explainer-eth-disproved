status: done

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/run/review/round-2/pedagogy-ux.md — the round-2 closure review: all ten P- findings have a status, plus scores and non-blocking notes
- /Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/probe/r2-*.png — my scroll walk at 360×640, 740×360 and 1280×800, light and dark. It covers every w-wall step, every w-ladder step in both states, f-family, f-seth, f-foundation A and B, the disclosures, the ToC, the k-09 wrong answer and w-race after a wrong k-05.

summary: P-01 to P-10 are all closed. P-04 is closed because the v2 ladder no longer has bars at all. I found no new blocking issues. The v2 chapters now flow for a novice:
- 3-SAT is described in plain words before the label appears.
- The NP family figure comes before graph colouring.
- The per-switch multiplier thread runs through the wall, the ladder, ETH, f-seth, the claim and the recap.
- The ladder now encodes only order, on a labelled axis, with the bets as brackets and ETH's line drawn.
- SETH has its own beat, figure and k-09 check, with an explicit "comes back in chapter 7".

Every step activated at all viewports, and the opaque canvas is never covered. Nothing overprints at 360×640 or 740×360. There is no overflow and no console errors. Tap targets are 44px, and w-race labels are at least 12px. Reading time is 17.1 min against the 12-min brief; I'm reporting it only (d-07).

concerns:
- ac-18: the page builder's reading (k-09 sits before f-foundation, nothing is gated) is acceptable. f-foundation is a static summary, s-05 is planned as continuous, and gating it would add friction with no retrieval benefit.
- ac-19, minor deviation: CSS hides the "More ·" kicker under 600px. The disclosure still reads as clickable (box, chevron, "show" hint), so I didn't count it as blocking. The page builder can restore it for strict compliance.
- d-02 framing, non-blocking: the claim-rung chip says "ETH's bet is lost", not the plan's "if this holds, ETH's bet is lost". The rung's name, "OpenAI's claimed algorithm", carries the hedge, but the user may want the chip hedged too.
- run/screenshots/page-round-12/ is empty even though the gate JSON reports a pass. I used my own screenshots instead.
- Every H- finding I looked at appears addressed in the rebuild. I left all of them open, since only the user closes those.

relaxed:
- none

dispositions:
- P-01: closed — the canvas is opaque and on top, so no step covers it, and all steps activate at 360 and 740×360
- P-02: closed — compact mode at 740×360, with no overprint in light or dark
- P-03: closed — the "P vs NP untouched" chip on n³ has no collision at 360×640
- P-04: closed — the bars were removed in the v2 rebuild, and the prose now says "outgrows every polynomial"
- P-05: closed — neutral dashed chips; red only for "refuted (claimed)"
- P-06: closed — cracks confined to the right-edge strip
- P-07: closed — the k-05 options are now parallel
- P-08: closed — summaries, Replay and the race toggle all measured at 44px
- P-09: closed — the wall's log axis is gone, and race text is at least 12px
- P-10: closed — the timeline says "claimed disproof (as reported)", now in s-08
