# Accuracy review: round 3

## Summary
Focused closure check (d-12). A-10 and A-11 are both closed. I compared every changed sentence (s-02 NP definition and family paragraph, the f-family arrows, label and aria-label, the s-05 one-way sentence, the s-07 colouring block, chip and note, the exception paragraph, k-08(d) and its feedback, and the s-09 recap) with facts.md c-10 note, c-24 note, c-26, c-27, c-30 and c-31. I also re-read the primary manuscript (main_full_version.tex, Corollary 1.4 and its proof, and the "reduction in the other direction" passage). The new colouring wording matches the manuscript's own derivation: q Boolean variables per vertex and a q-CNF of width q, for fixed q, where the page's family card fixes q = 3. No new blocking findings. Probe screenshots: run/screenshots/probe/a3-{1280,360}-{fam,fndb}.png.

## Findings

### A-10
severity: blocking
criterion: o-3 / o-4
location: s-07 f-foundation-b block t0 and t1, labelB, s-07 k-06-gated paragraph, k-08(d) and its feedback, s-09 recap
evidence: State B (probe a3-1280-fndb.png and a3-360-fndb.png, after clicking the correct k-06 option) shows a separate block: "Graph colouring: no 2^o(n) algorithm · unless ETH fails · CLAIMED DISPROVED · The paper also claims a 2^o(n) colouring algorithm of its own." The block "Hamiltonian cycle, vertex cover" and the k-Clique block keep "unproven again — not disproved". The aria-label in state B reads "Graph colouring is marked claimed disproved, because the paper also claims a 2^o(n) colouring algorithm of its own. The other theorems … Hamiltonian cycle, vertex cover and k-Clique … unproven again, not disproved." The s-07 paragraph adds the exception and its reason. k-08(d) now reads "Most hardness results proved 'unless ETH fails' become unproven, not false." Its feedback names colouring as the exception, and the s-09 recap carries the parenthetical "(for colouring, the paper also claims a fast algorithm outright)". Source check: manuscript Corollary 1.4 ("for each fixed q≥2, the number of proper q-colorings can be computed deterministically in 2^{o(v)} time"), with proof "use one Boolean variable per vertex and color … a counting-preserving q-CNF encoding with qv variables and O_q(v+e) clauses". The page's colouring card fixes 3 colours, so the fixed-q condition holds. A positive count decides colourability, so "claims a subexponential colouring algorithm" is faithful. The manuscript claims no algorithm for Hamiltonian cycle, vertex cover or k-Clique. Its only mentions of them are prior work and lower bounds (lines ~275, ~330, ~399), so "claims nothing of the kind" is accurate. Everything is framed as the paper's claim (d-02).
expected_fix: none
verdict: contradicted
status: closed

### A-11
severity: blocking
criterion: o-3 / o-4 (c-27 note, c-30, c-31, c-24)
location: s-02 family paragraph, f-family arrows, label and aria-label, s-05 opener
evidence: s-02 now keeps the two-way rewrite only for NP-completeness ("they can all be rewritten as one another"), which c-27 supports at polynomial size. The size claim is now one-way: "the rewrite *from* 3-SAT stays about the same size: a formula becomes a graph with about as many dots as it has switches and rules. The rewrites back into 3-SAT aren't guaranteed to stay that small." c-30 supports this (O(n+m) vertices), as do c-31 and the c-10 note (linear reductions from 3-SAT; clique counted in vertices via the complement graph). In f-family at 1280 (a3-1280-fam.png), four single-headed arrows point from the 3-SAT box out to each card, labelled "3-SAT rewrites into each, about the same size". At 360 (a3-360-fam.png) the arrows are replaced by brackets from the centre and the label reads "↑↓ 3-SAT rewrites into each, about the same size". There the arrows point up and down from the centre to the two rows, so they still read as outward and one-way. The aria-label reads "An arrow points from 3-SAT to each, meaning a 3-SAT formula can be rewritten as that problem at about the same size." The s-05 sentence "3-SAT can be rewritten as colouring at about the same size" is one-way and matches c-30. The two-way size implication that the finding objected to is gone.
expected_fix: none
verdict: misleading-simplification
status: closed

### note (not a finding)
The s-02 sentence "The rewrites back into 3-SAT aren't guaranteed to stay that small" and the s-07 sentence "colouring also rewrites the other way, into a SAT formula with short rules and only a few switches per dot" are consistent. The first is a hedge about the family in general, and the second names the one member for which the manuscript gives a small reverse encoding (qv variables, width q). The s-07 paragraph flags it explicitly as "One exception", so a reader isn't left with a contradiction. No action needed.
