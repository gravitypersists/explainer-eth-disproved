status: blocked
reason: contradiction
claim: The handoff asks for new claims c-26 onward and also requires check_research.py to pass. But facts.md already sat at the `standard` cap of 25 claims (d-03), so any new ID fails the check.
evidence: `python3 .../check_research.py .../run` prints "counts: claims 33/25, sources 15/15 ... ERROR claims: 33 exceeds the `standard` cap of 25 ... RESULT: FAIL". Before this round it read "claims 25/25 ... PASS". This cap is the only error.
affects: d-03 (research depth Standard, source: user); handoff 16 "Done when" (source: designer/orchestrator)
tried: I kept the additions to 8 claims by reusing existing claims (c-10 already states the vertex-count bounds; c-11 already covers k-clique). Two verdicts went into notes on c-04 and c-10 rather than new IDs. Sources stay within cap at 15/15.
options:
- Relax the claim cap for this run, e.g. let the user extend d-03 to allow about 33 claims for fill-in rounds. Everything is already written and the check otherwise passes. Recommended: d-07 ("don't cut or tighten") points this way.
- Keep the cap. I would fold c-26 to c-33 into notes on c-01, c-10 and c-07 (no new IDs, check passes). The cost: downstream agents would cite notes, not claim IDs, for the f-family and f-seth facts.
partial: /Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md (all four items done; pre-edit backup at /private/tmp/claude-501/-Users-m-workspace-eth/456ff478-f5ce-41e1-9832-377ffc71af12/scratchpad/facts.bak.md)
side_effects: clean (only facts.md changed; existing IDs c-01 to c-25 are unchanged apart from notes added to c-04 and c-10)

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md — new claims c-26 to c-33, new notes on c-04 and c-10, question lines q-1, q-2 and q-4 updated

summary: I added 8 claims.
- **F-1:** c-26 (NP = quick to check), c-27 (NP-complete: in NP, and everything in NP reduces to it in polynomial time), c-28 (SAT: Cook 1971 / Levin 1973), c-29 (3-SAT NP-complete, on Karp's 1972 list with all four f-family problems).
- **F-2:** c-30 (3-SAT becomes a 3-colouring graph with O(n+m) vertices), c-31 (sparsification gives no 2^o(m) in clauses, which is why linear translations transfer ETH), c-32 (size blow-up gives weaker bounds, e.g. planar Hamiltonian cycle only gets 2^o(√n)). Source: Lokshtanov–Marx–Saurabh's EATCS survey.
- **Item 4:** c-33 has the PPSZ bases 3/4/5/6-SAT = 1.307/1.469/1.569/1.638 (Hertli 2011 table, from the arXiv source), so f-seth can use real numbers.
- **Item 3 verdict** (note on c-04): the per-switch reading is correct.

Facts likely to surprise readers:
- "About the same size" is NOT true of NP-complete translations in general. They only guarantee polynomial growth.
- The k-SAT bases already climb steadily toward ×2.

concerns:
- The plan's R-02(b) wording "any instance of one can be rewritten as an instance of another of about the same size" is wrong as a general statement about NP-complete problems (c-27 note, c-24). Safer: "can be rewritten as one another, and for these four the rewrite is about the same size." The "fast for one, fast for all" in R-02(c) holds for polynomial time. For subexponential time it holds only through the linear translations.
- Clique fits "about the same size" only when size is counted in vertices. The independent-set reduction applied to the complement graph keeps the vertex count but can create about n² edges. My own derivation (marked model in the c-10 note) says clique has a 2^O(√m) algorithm in edges, so it has no ETH bound in edges. The other three (colouring, vertex cover, Hamiltonian cycle) are linear in vertices per the survey. The survey's Theorem 3.3 names Hamiltonian *Path*; Wikipedia (c-10) names Hamiltonian cycle.
- Item 3 safer wording, recorded in the c-04 note: "ETH bets that on its hardest puzzles every algorithm pays, on average, at least some fixed multiplier per extra switch: maybe tiny, ×1.001, but it never fades to ×1." Two caveats: it is an average (geometric-mean) multiplier, not a literal step-by-step ratio, and it is a worst-case bound. The "fades toward ×1" reading for 2^o(n) is exactly right.
- f-seth: the c-33 bases are upper bounds that algorithms achieve. SETH bets on the true lower bound. Label the climb as "best we can do so far", not as evidence for SETH. No tabulated values exist past k = 6 in this source.
- The survey and Hertli quotes came from text extracted from the PDF or LaTeX, with math symbols re-typed (noted in each claim).

relaxed:
- none (the cap was left in place, which is why this report is blocked)

dispositions:
- F-1: fixed — c-26, c-27, c-28, c-29 in facts.md
- F-2: fixed — c-30, c-31, c-32, plus a size-parameter note on c-10 (clique caveat)
