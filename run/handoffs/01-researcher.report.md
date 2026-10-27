status: done_with_concerns

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md — 25 claims from 12 sources; each OpenAI claim is marked primary (openai/math repo, Lean file) or secondary (press)
- /Users/m/workspace/eth/explainers/eth-disproved/run/research/examples.md — 6 examples: a toy 3-SAT with count 2, 2^n numbers, a growth-rate comparison, a ladder of growth rates, a foundation-stone analogy, a GNFS analogy
- /Users/m/workspace/eth/explainers/eth-disproved/run/research/misconceptions.md — 6 misconceptions
- /Users/m/workspace/eth/explainers/eth-disproved/run/research/parking-lot.md — 9 off-objective items

summary: openai.com returned 403, but OpenAI's own GitHub repo (openai/math) holds the primary material: the manuscript LaTeX, history.md, the README and the Lean Comparator challenge. I read these directly and quote them.

The claim: a deterministic algorithm that counts the solutions of any fixed-width k-CNF in (n+m)^{O(1)}·2^{n/(log n)^{1/2+o(1)}} time and polynomial space. The 3-SAT case refutes ETH.

The Lean statement proves a slightly weaker bound, 2^{A·n(log log n)²/√log n}. That is still enough to refute ETH.

Points most likely to surprise readers:
1. SETH falls too. The paper says so, and SETH implies ETH. Edit-distance-style lower bounds lose their basis, though some survive through the Orthogonal Vectors Conjecture.
2. It is barely subexponential. Even with constants set to 1, it only beats the old 1.307^n bound at around n≈1000 (sparse formulas) or n≈10^83 (general bound).
3. ETH's own co-authors are reviewing it and say their involvement "should not be taken as certification."

concerns:
- The blog post itself was not read. Dates (found Oct 16, Lean Oct 17) and the "practical gains need further work" line come only from press paraphrase. They are marked secondary, confidence medium.
- No Hacker News or complexity-blog reactions could be found (the result is hours old, and HN search failed). The only expert reaction on file is the review group's statement, quoted second-hand from The Next Web.
- The brief's q-4 premise that SETH-based results "would survive" is wrong (c-08, c-09, m-06). The designer should frame SETH as also refuted, with partial survival through OVC.
- No authoritative count of papers that depend on ETH was found. "Hundreds" is a press figure only; do not state a number as fact.
- The crypto point (c-25) uses GNFS as an analogy. The step "RSA/AES never rested on ETH" is my own inference, labelled in the claim's note.
- I did not run Comparator myself. The Lean claims come from reading the challenge file and the tool's README.
- The growth-rate crossover numbers in x-03 are my own calculation with constants set to 1. They are illustrative, and the real constants are unknown.
- The 2^{o(√n)} bound for planar graph problems was dropped because the survey PDF could not be read.

relaxed:
- none

dispositions:
- none
