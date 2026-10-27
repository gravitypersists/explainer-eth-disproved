# Misconceptions

### m-01
objective: o-2
misconception: Disproving ETH means P = NP (or "NP problems are now easy").
why_tempting: Headlines say a famous hardness assumption about SAT fell, and SAT is the poster child of P vs NP.
counter: c-05, c-06, c-24
source: model

### m-02
objective: o-4
misconception: OpenAI's result breaks cryptography (RSA, AES, Bitcoin).
why_tempting: "Hard problems got easier" plus vague knowledge that crypto relies on hard problems.
counter: c-25, c-24
source: model

### m-03
objective: o-4
misconception: SAT solvers and real software will get dramatically faster now.
why_tempting: "Exponential → subexponential" sounds like a huge speedup, and practical SAT solvers already handle millions of variables.
counter: c-14, c-03, c-24
source: model
note: See x-03. The improvement is a ~√log n factor in the exponent, with unknown constants. Practical solvers exploit structure in real instances, not worst-case bounds.

### m-04
objective: o-4
misconception: "Verified in Lean" means the result is certainly correct and settled.
why_tempting: Formal verification sounds like a mathematical guarantee, and press summaries say "verified".
counter: c-19, c-18, c-20, c-22
source: https://gizmodo.com/openai-trumpets-3-more-math-and-science-results-along-with-a-new-plan-for-publishing-them-2000830956
note: Lean guarantees the formal statement is proved; humans still have to confirm that the formal definitions (machine model, encoding, time bound) mean what the paper claims. The experts reviewing it explicitly decline to certify it yet.

### m-05
objective: o-3
misconception: If ETH is false, all the lower bounds built on it are now wrong, and those problems have fast algorithms.
why_tempting: "Built on a false assumption" sounds like "false".
counter: c-10, c-13, c-24
source: model
note: The conditional statements remain true (vacuously). They just no longer prove hardness. Some survive via weaker hypotheses (OVC), and fast algorithms for, e.g., Hamiltonian cycle don't automatically follow.

### m-06
objective: o-3
misconception: Results stated "unless SETH is false" are untouched because only ETH was refuted.
why_tempting: SETH is a different-sounding hypothesis, and the brief itself initially assumed SETH results would "survive".
counter: c-08, c-09, c-12, c-13
source: model
note: SETH itself falls with ETH (c-08), so SETH no longer supports anything. But many SETH-stated bounds were actually proved via Orthogonal Vectors, a weaker assumption the claim does not refute, so they still stand: LCS and regex matching (c-13) and edit distance (c-12). The correct picture is "basis swapped to OVC", not "untouched" and not "lost".
