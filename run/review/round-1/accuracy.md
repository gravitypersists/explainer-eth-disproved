# Accuracy review: round 1

## Summary
The page is accurate on almost everything and frames OpenAI's result as a claim throughout, as d-02 requires. I recomputed the brute-force counts, digit counts, ladder bar lengths, the ×1,024 and ×14.5 multipliers and the sparse crossover (≈815), and all of them are correct. One blocking error remains. Chapter 7 says edit distance's quadratic lower bound becomes "unproven again" while LCS and regex "still stand" via OVC. But Backurs–Indyk reduce from Orthogonal Vectors, so the edit-distance bound also survives under OVC. Smaller problems: the general-bound crossover is ≈10^79, not 10^83. The ladder's "just below 1.307ⁿ" depends on its constants-of-1 choice and doesn't say so. One "OpenAI said" is really the press outlet's own statement. Sort item (d) clashes with the page's "stays true" message.

## Findings

### new
severity: blocking
criterion: o-3 / o-4
location: s-07 check feedback (index.html L400: "The quadratic bound is simply unproven again. Some related bounds (longest common subsequence, regex matching) can still lean on ... OVC"); s-07 foundation diagram, edit-distance block chip "basis lost · unproven again — not disproved" (L410) vs LCS block "still stands"
evidence: Backurs & Indyk (arXiv 1412.0348) prove the edit-distance bound by reduction from Orthogonal Vectors. The paper's outline reads "3.2 Reducing the Orthogonal Vectors Problem to PATTERN" and "3.3 Reducing PATTERN to EDIT". So "no O(n^{2−δ}) edit distance unless OVC fails" holds just as it does for LCS and regex, the examples the OpenAI paper names (c-13). Note c-13 only says edit distance "was not named" as surviving. It does not say it fails. As written, the page tells readers that edit distance has lost its lower bound while LCS keeps one. That contrast is false, and the diagram makes it visual.
expected_fix: Treat edit distance like LCS/regex. In the s-07 feedback, replace "The quadratic bound is simply unproven again..." with something like "Its stated basis, SETH, is gone, but Backurs and Indyk's proof actually goes through the Orthogonal Vectors Conjecture (OVC), a weaker assumption this claim doesn't touch, so the quadratic bound still stands on OVC. The same holds for longest common subsequence and regex matching." In the after-diagram, change the edit-distance chip to "SETH basis lost · still stands on OVC" and draw it resting on OVC. The quiz's correct option ("It loses its basis: SETH falls too") can stay, because SETH does fall. Optionally use a different SETH-only example. Add a facts.md claim citing arXiv 1412.0348 §3.2–3.3.
verdict: contradicted

### new
severity: should
criterion: o-4
location: s-06 race check feedback ("around n≈10^83 for the general bound"); w-race general-mode label "crossover ≈ n = 10⁸³ →" and live text (assets/page.js L406–408); source x-03
evidence: The race chart's own general formula, digits = n·log10(2)·ln ln n/√ln n, is set equal to n·log10(1.307). Solving gives ln ln n/√ln n = ln1.307/ln2 = 0.3863, so ln n ≈ 181.2 and n ≈ 10^78.7. It is not 10^83. (With base-2 logs the result is ≈10^168. The figure depends heavily on conventions either way.) The sparse crossover (≈815) checks out.
expected_fix: Change the figure to "around 10^79" (or "beyond 10^75") in the feedback, the chart label and the live text, and correct x-03.
verdict: contradicted

### new
severity: should
criterion: d-02 (attribute secondary-sourced details) / o-4
location: s-06 race check feedback, "(Press reports OpenAI itself saying practical gains would need substantial further work.)"
evidence: The Unite.AI article (fetched) quotes OpenAI only as saying the refutation "reopens questions about how much faster these tasks could become". The remark that turning the advance into real speedups "will take substantial additional research" is the article's own statement and is not attributed to OpenAI. The Next Web says nothing about practical gains. c-24's note already hedges it as a "paraphrase".
expected_fix: Change to "(Press coverage, e.g. Unite.AI, says turning this into practical speedups would take substantial further research.)" or remove it.
verdict: unsupported

### new
severity: should
criterion: o-4
location: w-ladder state "claim", step 2 (s-06 step text "just below 1.307ⁿ at this scale"; widget live text "115 vs 117 digits at n = 1,000")
evidence: The claim rung is computed as 2^{n/√ln n} with every constant set to 1 and the sparse-formula form (w-ladder/index.js RUNGS.claim). At n = 1,000 the general bound from the same paper, 2^{n·lnln n/√ln n}, gives ≈221 digits, which sits well above 1.307ⁿ's 117. With base-2 logs the sparse form gives ≈96 digits. The rung's position relative to 1.307ⁿ is therefore a choice of constants, and nothing at that point in the page says so. The caveat only appears two checks later. A reader can come away thinking the claimed algorithm already beats PPSZ at n = 1,000. The asymptotic ordering on the ladder is correct.
expected_fix: Add a short caveat to the claim rung or the step-2 text, e.g. "(sparse-formula bound, all hidden constants set to 1; the real constants are unknown)". Or drop "at this scale" and say only that the rung sits inside ETH's zone, with an exact bar position that is illustrative.
verdict: misleading-simplification

### new
severity: should
criterion: o-3
location: s-09 sort item d, "Theorems proved “unless ETH fails” become unproven, not false." (index.html L535), keyed "Follows"
evidence: The page says elsewhere that such theorems "stay true when ETH fails. It just stops telling us anything about hardness" (s-07 caption), and that the blocks "keep their statements" (s-07 prose). The theorem, a conditional, stays proven. What becomes unproven is the hardness of the problem. Item d says the theorems themselves become unproven, which contradicts the page's own key distinction (m-05) in the end-of-piece synthesis check.
expected_fix: Reword item d to "The hardness results proved “unless ETH fails” become unproven, not false." or "Problems shown hard ‘unless ETH fails’ are no longer known to be hard, but aren't known to be easy either." Keep the key as "Follows".
verdict: misleading-simplification

### new
severity: nit
criterion: o-4
location: s-06 race check, distractor "Somewhere around a few hundred variables" vs feedback "only edges past 1.307ⁿ at around a thousand variables for sparse formulas"
evidence: The page's own computation puts the sparse crossover at n ≈ 815 (page.js L397 comment "≈ 815"). That is arguably "a few hundred", so the wrong option is close to the page's own illustrative number. The correct answer is right for a different reason (real constants unknown, real formulas).
expected_fix: Say "around 800 variables" in the feedback and make the distractor clearly different, e.g. "Within a few dozen variables". Or reword the distractor to "Around a few hundred variables, so SAT solvers speed up soon".
verdict: misleading-simplification

### new
severity: nit
criterion: o-1
location: s-05 prose and foundation diagram, "edit distance ... that sits at the core of diff"
evidence: Unix diff tools compute a shortest insert/delete edit script, which is equivalent to longest common subsequence (Myers' algorithm). Backurs–Indyk concern Levenshtein edit distance, which also allows substitutions. "Core of diff" is a loose but common gloss, and it's not in facts.md. It's harmless once the edit-distance/OVC finding above is fixed, since LCS and edit distance then have the same status.
expected_fix: Optionally soften to "a close relative of what diff computes", or leave it.
verdict: ok-but-uncited

### new
severity: nit
criterion: o-4
location: s-08, "That's why ETH's own inventors are reviewing it, and why they say their involvement isn't a certification."
evidence: No source gives a reason why Impagliazzo, Paturi and Williams are reviewing. c-21 says only that they "will examine and explain the proof". The causal "That's why" is the page's own inference.
expected_fix: Change to "ETH's own inventors are among those reviewing it, and they say their involvement isn't a certification."
verdict: unsupported

### new
severity: nit
criterion: o-2
location: s-07 "Three tempting conclusions" → "So P = NP?": "The paper itself notes that its result doesn't make general NP problems subexponential"
evidence: c-24 quotes the paper: "our result does not imply that general NP problems admit subexponential time algorithms." "Doesn't make" can be read as saying they aren't subexponential. The paper only says its result doesn't imply that they are.
expected_fix: Change to "...notes that its result doesn't imply subexponential algorithms for general NP problems...".
verdict: misleading-simplification
