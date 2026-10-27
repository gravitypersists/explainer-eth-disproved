status: done_with_concerns

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/run/review/round-2/accuracy.md — closure review, round 2: A-01…A-09 statuses, 2 new blocking findings, list of v2 content verified clean
- /Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/probe/acc2-fseth.png, acc2-ffamily.png — 1280px probe captures of f-seth and f-family

summary: All nine round-1 accuracy findings are closed with evidence from the current site. A-04's content was removed by the v2 ladder redesign. I recomputed every derived v2 number and all are correct: wall digit counts 302/117/81 (also computed with BigInt in the widget), ≈40,000 years at n=100 and ≈41M years at n=110, race crossovers ≈815 and ≈10^78.7, SETH bases matching c-33 and plotted at the right linear positions, and the ladder ordering 2ⁿ > 1.307ⁿ > ETH line > 2^(n/√log n) > 2^√n > n³. The per-switch ETH wording matches c-04's safer form. I raised two new blocking findings. (1) s-07 f-foundation-b labels graph colouring "unproven again — not disproved", but the manuscript's Corollary 1.4 (c-24 note) claims a 2^o(v) algorithm for counting q-colourings, so if the claim holds it is disproved. (2) In s-02, the f-family text and its two-headed arrows say the rewrites run both ways "about the same size". The sources support only 3-SAT → problem (c-30, c-31, c-27 note). Read both ways, it implies the claim makes Hamiltonian cycle, vertex cover and clique subexponential, which contradicts chapter 7.

concerns:
- New finding 1 involves content that was already in v1 and that round 1 missed. I raised it because it is a blocking contradiction with a primary source, and the v2 rebuild made colouring the central example.
- The two new findings interact. Fix them together so the s-02 asymmetry sets up the colouring exception in s-07.
- Possible non-blocking issue, not filed because only blocking findings are allowed this round: s-02 defines NP as the problems where finding "seems to need a search". NP also contains easy problems (c-26 note).

relaxed:
- none

dispositions:
- A-01: closed — k-06 feedback and edit-distance chip "SETH basis lost · still stands on OVC" verified
- A-02: closed — 10^79 in feedback, chart label and live text; recomputed 10^78.7
- A-03: closed — attributed to press coverage (Unite.AI)
- A-04: closed — the v2 ladder is ordinal only, with no magnitudes; "by order alone" text present
- A-05: closed — k-08(d) now says "hardness results … become unproven, not false"
- A-06: closed — "around 800"; distractor "Within a few dozen variables"; recomputed 815
- A-07: closed — "a close relative of what diff computes"
- A-08: closed — "among those reviewing it"
- A-09: closed — "doesn't imply subexponential algorithms for general NP problems"
