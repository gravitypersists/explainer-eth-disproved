status: done

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/site/index.html — s-02 opener, NP definition and family paragraph; f-family aria-label and arrow label; s-05 one-way rewrite sentence; s-07 f-foundation-b split colouring block and exception paragraph; k-08(d) and its feedback; s-09 recap
- /Users/m/workspace/eth/explainers/eth-disproved/site/assets/page.css — 5/6-column grid for #f-foundation-b (wide and narrow), `.fnd-chip-claim` and `.fnd-note-b` in the claim colour (--c2), narrow family glyph "↑↓", removed the rule that hid "More ·" under 600px
- /Users/m/workspace/eth/explainers/eth-disproved/site/assets/page.js — f-family arrows now single-headed, pointing from 3-SAT out to each card; s-07 labelB updated
- /Users/m/workspace/eth/explainers/eth-disproved/run/gate/page-round-13.json — gate PASS
- /Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/probe/r3-{360,1280}-{fam,fndb,fnda,more}.png — visual checks after k-06 commit

summary: I made the targeted fixes only, with no restructuring or cuts. Colouring now has its own s-07 block ("Graph colouring: no 2^o(n) algorithm"). In state B it carries a red/claim-colour "CLAIMED DISPROVED" chip and the note "The paper also claims a 2^o(n) colouring algorithm of its own". The block for Hamiltonian cycle and vertex cover, and the k-Clique block, keep "unproven again — not disproved". The same-size rewrite in s-02 is now one-way, from 3-SAT outward. I also fixed s-05's matching sentence, which made the same two-way claim. Gate: PASS (only `pending` remains). Reading time ~17.4 min (230 wpm), 241 KB, 20 requests. I checked the screenshots at 360 and 1280, state B and Before: no overlap, and the arrows resolve.

concerns:
- The "why" sentence says colouring rewrites into "a SAT formula with short rules and only a few switches per dot", not "about one switch per dot" as the handoff suggested. A q-colouring takes a few (O(1)) variables per vertex, so "one" would be inaccurate. The source is the c-24 note / Corollary 1.4.
- s-05 also said "Colouring and 3-SAT can be rewritten as one another at about the same size", the same two-way size claim A-11 flags. I changed it to "3-SAT can be rewritten as colouring at about the same size" so it matches s-02.
- f-foundation-a (s-05) still shows the combined "Graph colouring, Hamiltonian cycle, vertex cover" block. That is correct before the claim, but it means the "Before" state in s-07 (now split) doesn't exactly match the s-05 diagram.

relaxed:
- none

dispositions:
- A-10: fixed — f-foundation-b now has a separate t0 block "Graph colouring: no 2^o(n) algorithm", with a "claimed disproved" chip (--c2) and a state-B note "The paper also claims a 2^o(n) colouring algorithm of its own". The t1 block now reads "Hamiltonian cycle, vertex cover", and it and k-Clique keep "unproven again — not disproved". The s-07 paragraph adds: "One exception: for graph colouring the paper goes further and claims a subexponential colouring algorithm of its own. It can, because colouring also rewrites the other way, into a SAT formula with short rules and only a few switches per dot, so a fast SAT algorithm becomes a fast colouring algorithm. For Hamiltonian cycle, vertex cover and k-Clique it claims nothing of the kind, so they are only unproven again." labelB names colouring as claimed disproved. The Before/After toggle works in both states (screenshots r3-*-fndb/fnda). k-08(d) now reads "Most hardness results proved “unless ETH fails” become unproven, not false.", and its feedback adds the colouring exception. The s-09 recap reads "most ETH-based results become unproven again (for colouring, the paper also claims a fast algorithm outright)".
- A-11: fixed — the s-02 paragraph keeps the two-way rewrite and adds: "And for the four problems below, the rewrite from 3-SAT stays about the same size: a formula becomes a graph with about as many dots as it has switches and rules. The rewrites back into 3-SAT aren't guaranteed to stay that small." The f-family arrows are single-headed from 3-SAT to each card. The label reads "3-SAT rewrites into each, about the same size", with "↑↓" on narrow screens. The aria-label reads "An arrow points from 3-SAT to each, meaning a 3-SAT formula can be rewritten as that problem at about the same size." s-05 is adjusted to match.
- H-10: fixed — the s-02 opener now reads "Let's start with something you can solve in your head."
- note (NP definition): applied — "Computer scientists call the problems where a proposed answer is quick to check NP. Being in NP doesn't make a problem hard, since easy problems are in it too, but for its hardest members, finding an answer seems to need a search." The next paragraph now begins "Those hardest members, the NP-complete problems…"
- note (ac-19): applied — removed `@media (max-width: 599px) { .d-more .more-k { display: none; } }`. "More ·" now shows at 360 (r3-360-more.png).
