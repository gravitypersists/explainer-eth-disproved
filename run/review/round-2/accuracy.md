# Accuracy review: round 2

## Summary
All nine round-1 accuracy findings are closed. A-04's content was removed by the v2 ladder redesign. Every derived number in the v2 content recomputes correctly: wall digits 302/117/81, the wall's time translations (≈40,000 years at n=100 and ≈41 million at n=110), race crossovers ≈815 and ≈10^78.7, the SETH bases from c-33 plotted at their true linear positions, and the ladder ordering. The per-switch statements of ETH, subexponential and SETH match c-04 and c-07. I raise two new blocking findings, both about which way the problem-to-problem rewrites run. (1) Chapter 7 says graph colouring's 2^o(n) bound is "unproven again — not disproved", but the manuscript itself claims a 2^o(v) algorithm for colouring (c-24 note, Corollary 1.4). (2) The family figure says the rewrites run both ways "about the same size". The sources support only the 3-SAT → problem direction.

## Findings

### A-01
severity: blocking
criterion: o-3 / o-4
location: s-07 k-06 feedback; f-foundation-b edit-distance block
evidence: The feedback now reads "Yet the quadratic bound itself still stands. Backurs and Indyk's proof actually starts from the Orthogonal Vectors Conjecture (OVC)… The same holds for longest common subsequence and regex matching." In f-foundation-b, the edit-distance block reads "unless SETH fails · and unless OVC fails · SETH basis lost · still stands on OVC" with the class `fnd-chip-ok`. The s-07 paragraph and the recap match. This is consistent with c-12 and c-13.
expected_fix: none
verdict: contradicted
status: closed

### A-02
severity: should
criterion: o-4
location: s-06 k-05 feedback; w-race (assets/page.js L437, L439)
evidence: The feedback says "around n ≈ 10^79 for the general bound". The chart label reads "crossover ≈ n = 10⁷⁹ →" and the live text reads "roughly n = 10 to the 79". Recomputed: ln ln n/√ln n = ln1.307/ln2 = 0.38626 at ln n ≈ 181.2, so n ≈ 10^78.7.
expected_fix: none
verdict: contradicted
status: closed

### A-03
severity: should
criterion: d-02
location: s-06 k-05 feedback
evidence: It now reads "(Press coverage, e.g. Unite.AI, says turning this into practical speedups would take substantial further research.)". This matches the c-24 note: the remark is the press's, not OpenAI's.
expected_fix: none
verdict: unsupported
status: closed

### A-04
severity: should
criterion: o-4
location: w-ladder state "claim", step 2
evidence: The plan-v2 rebuild removed the content. The ladder no longer has bars or digit counts (w-ladder/index.js RUNGS), so it makes no claim about size at n = 1,000. Step 2 now says "Its place is by order alone… The ladder says nothing about which is quicker at any particular size." The live text adds "Positions show order as n gets large, not size at any particular n." The constants caveat stays in the k-05 feedback ("nobody knows the real constants").
expected_fix: none
verdict: misleading-simplification
status: closed

### A-05
severity: should
criterion: o-3
location: s-09 k-08 item d
evidence: Item d now reads "The hardness results proved “unless ETH fails” become unproven, not false." It is keyed "Follows". The round-1 issue is fixed. A colouring-specific exception is raised under new finding 1 below.
expected_fix: none
verdict: misleading-simplification
status: closed

### A-06
severity: nit
criterion: o-4
location: s-06 k-05 options and feedback; w-race sparse label
evidence: The feedback says "around 800 variables", the distractor is "Within a few dozen variables", and the chart label reads "crossover ≈ n = 800". Recomputed: √ln n = ln2/ln1.307 = 2.589, so n ≈ 815.
expected_fix: none
verdict: misleading-simplification
status: closed

### A-07
severity: nit
criterion: o-1
location: s-05, s-07 k-06 prompt, foundation blocks
evidence: The text now reads "a close relative of what diff computes" and "(a close relative of diff)".
expected_fix: none
verdict: ok-but-uncited
status: closed

### A-08
severity: nit
criterion: o-4
location: s-08
evidence: It now reads "ETH's own inventors are among those reviewing it, and they say their involvement isn't a certification." The causal claim is gone.
expected_fix: none
verdict: unsupported
status: closed

### A-09
severity: nit
criterion: o-2
location: s-07 "So P = NP?"
evidence: It now reads "The paper itself notes that its result doesn't imply subexponential algorithms for general NP problems". This matches the c-24 quote.
expected_fix: none
verdict: misleading-simplification
status: closed

### new
severity: blocking
criterion: o-3 / o-4
location: s-07 f-foundation-b, the block "Graph colouring, Hamiltonian cycle, vertex cover: no 2^o(n) algorithm · unless ETH fails · unproven again — not disproved" (index.html, f-foundation-b first theorem block); also the s-07 caption "stays true when ETH fails. It just stops telling us anything about hardness" and s-09 k-08 (d) as they apply to colouring
evidence: The manuscript claims more than the refutation of ETH for colouring. Its Corollary 1.4 reads: "On simple graphs with v vertices and e edges, the number of independent sets and, for each fixed q≥2, the number of proper q-colorings can be computed deterministically in 2^{o(v)} time" (main_full_version.tex, fetched; also facts.md c-24 note: "The paper does derive subexponential counting for … graph colorings"). A count above zero decides 3-colourability. So if the claim holds, "graph colouring has no 2^o(n) algorithm" is not "unproven again — not disproved": the same manuscript claims to disprove it. Colouring is the page's worked example (s-05) and the first item in that chip's block, so the reader learns the "unproven, not false" rule (m-05) on the one problem where, per the manuscript, it doesn't apply. Hamiltonian cycle and vertex cover aren't covered by the corollary, so their chips are fine.
expected_fix: Split colouring out of the "unproven again" block in state B. Give it its own block or chip, e.g. "Graph colouring · the manuscript also claims a 2^o(n) colouring algorithm: claimed disproved, not just unproven" (red or claim-coloured, marked claimed). Keep "Hamiltonian cycle, vertex cover" (and k-Clique) under "unproven again — not disproved". Add one sentence to the s-07 paragraph after "The theorem blocks keep their statements…", e.g. "One exception: for graph colouring the manuscript goes further and claims a subexponential algorithm of its own, because colouring can be rewritten *into* a SAT formula with about one switch per dot." Leave k-08 (d) as is, since it is true in general, or make it "Most hardness results…". Cite the c-24 note (Corollary 1.4) as the source.
verdict: contradicted

### new
severity: blocking
criterion: o-3 / o-4 (c-27 note, c-30, c-31, c-24)
location: s-02 "One puzzle stands for a whole family", the paragraph "A 3-SAT formula can be turned into a colouring problem with the same answer, and a colouring problem into a 3-SAT formula. For the four problems below, the rewrite also stays about the same size."; f-family arrow label "⟷ rewrite one as another, about the same size" (two-headed arrows) and its aria-label "two-way arrow meaning they can be rewritten as one another at about the same size"
evidence: The sources back "about the same size" only for the direction 3-SAT → problem: c-30 (3-SAT to a graph with O(n+m) vertices), c-31 and c-10 ("SIZE PARAMETER… the reductions from 3-SAT are linear"). The c-27 note: "Reduction guarantees only POLYNOMIAL size growth… true only for the specific linear reductions in c-30/c-31". No claim supports a same-size rewrite of Hamiltonian cycle, vertex cover or clique *into* 3-SAT. The manuscript itself marks the asymmetry: "To obtain a faster algorithm for a target problem from our SAT algorithm, we need a reduction in the other direction, from that problem to fixed-width SAT". It claims such consequences only for colourings, independent sets and perfect matchings (Corollary 1.4). With two-way same-size rewrites, an attentive reader concludes that OpenAI's claimed 3-SAT algorithm immediately gives subexponential algorithms for all four problems. That is unsupported for Hamiltonian cycle, vertex cover and clique. It also contradicts the page's own chapter 7, which marks them "not disproved". The ETH lower bounds (s-05) need only the one-way direction, which the page states correctly in s-05 ("turns any 3-SAT formula into a colouring problem with about as many dots…").
expected_fix: Keep the two-way claim for NP-completeness (polynomial size), and make the size claim one-way. In s-02, replace the last sentence with something like "And for the four problems below, the rewrite *from* 3-SAT stays about the same size: a formula becomes a graph with about as many dots as it has switches and rules." In f-family, change the arrow label to "3-SAT rewrites into each, about the same size" (single-headed arrows from 3-SAT outward, or keep two-headed arrows labelled "rewrite one as another" without the size clause and add a separate "→ same size" mark on the outward direction). Update the aria-label to match. The s-02 sentence "a fast way to solve any one of them would hand you one for 3-SAT" is fine as polynomial-time NP-completeness, so it can stay.
verdict: misleading-simplification

## Verified without findings (v2 content)

- **Wall (w-wall, s-03 step cards).** The widget computes its digits with BigInt: len(2^1000) = 302, len(⌊1.307^1000⌋) = 117, len(10^80) = 81. I recomputed all three in Python. 2^20 = 1,048,576 ("about a million", "well under a second"). 2^30 ≈ 1.07×10^9 ("about a billion"). 2^100 / 10^18 per second ≈ 40,000 years ("tens of thousands of years"). 2^110 gives ≈ 41 million years ("tens of millions"). 2^10 = 1,024 (k-02).
- **SETH figure (f-seth).** The bases 1.307/1.469/1.569/1.638 match c-33 (Hertli 2011 table: 1.307032, 1.468984, 1.569427, 1.637874). They're labelled "best algorithms so far (the PPSZ algorithm)", and the caption says they aren't evidence for SETH, as c-33's caution requires. In the 1280 screenshot the dots sit at the correct linear positions on the ×1–×2 scale (run/screenshots/probe/acc2-fseth.png). "Climbs toward ×2, getting as close to it as you like" matches c-07 (s_∞ = 1).
- **Ladder (w-ladder) order.** 2ⁿ > 1.307ⁿ > ETH's line > 2^(n/√log n) > 2^√n > n³ holds asymptotically: n/√log n = o(n) and n/√log n ≫ √n. It also holds for the paper's general bound n·loglog n/√log n and for the Lean bound n(loglog n)²/√log n. Multipliers: ×2, ×1.307, both subexponential rungs "fade toward ×1", and n³ is "doubling the switches: ×8". All correct.
- **Per-switch reading.** The s-04 statement "pays on average at least some fixed multiplier for each extra switch, on the hardest puzzles of each size… might be tiny, ×1.001, but it never fades to ×1" is c-04's safer wording, with both caveats. The disclosure's (2^s)^n algebra is correct.
- **Family section.** "All five problems are NP-complete" is true for the decision versions (c-29: all are on Karp's list). "Size counts … dots for the others" agrees with c-10. Only the direction of "about the same size" is a problem (finding above).
- **s-05 and s-06.** "Log n … from a thousand to a million only doubles it": correct. "n/√log n grows more slowly than any fixed fraction of n": correct. The colouring conditional and the one-way rewrite in s-05 match c-30 and c-31.
- **H-related text** (wall step cards, ladder labels, timeline in s-08): no factual problem found.
