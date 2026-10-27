status: done_with_concerns

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/accuracy.md: round-1 accuracy review with 9 findings (1 blocking, 4 should, 4 nit). The parse_findings parser from findings.py reads all 9.

summary: I checked every prose claim, caption, check-feedback line and figure in site/index.html against facts.md. I recomputed the w-wall numbers from the JS: 2^20, 2^100 ≈ 1.27e30, 2^110, 2^1000 ≈ 1.07e301, 1.307^1000 ≈ 10^116, the ×1,024 and ×14.5 multipliers, and "tens of thousands of years" (≈40k). I also recomputed the w-ladder digit counts (302 / 117 / 115 / 10 / 10) and the w-race crossovers. I spot-checked the secondary sources: Backurs–Indyk on arXiv, The Next Web, Unite.AI and Gizmodo. d-02 framing (claim, Lean check, pending review, "as reported") is honoured throughout.

Blocking: the page says edit distance's quadratic bound becomes "unproven again" while LCS and regex survive via OVC. Backurs–Indyk actually reduce from Orthogonal Vectors (OV → PATTERN → EDIT), so the edit-distance bound also stands under OVC.

Should:
- The general-bound crossover is ≈10^79, not 10^83.
- Practical-gains remark misattributed to OpenAI; it is Unite.AI's own statement.
- The ladder's "just below 1.307ⁿ" depends on setting the constants to 1 and on the sparse form, and the page doesn't say so at that point.
- Sort item (d) says the theorems "become unproven", which contradicts the page's own "stays true".

concerns:
- I verified the widgets by reading their source and recomputing, not by driving them with probe.mjs. The numbers come straight from formulas in the code, so the risk is low, but no probe screenshots were taken.
- facts.md's x-03 also contains the 10^83 error, and c-13's note doesn't mention edit distance's OV route. Both should be corrected upstream.

relaxed:
- none

dispositions:
- none (first round)
