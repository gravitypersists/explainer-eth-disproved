# Facts

Primary vs secondary for the OpenAI claim: claims c-14, c-15, c-16, c-18, c-19, c-21, c-23 and c-24 cite OpenAI's own public repository (github.com/openai/math) or the Lean/Comparator project directly. That is primary text. The openai.com blog post itself returned 403 and was NOT read. c-17, c-20 and c-22 rely on press coverage (secondary) and are marked as such in `note:`.

## Questions
- q-1: answered — c-01, c-02, c-03, c-26, c-27, c-28, c-29 (c-26–c-29 give the NP / NP-complete family context added in fill-in round 2)
- q-2: answered — c-04, c-05, c-07, c-08, c-33
- q-3: answered — c-06, c-24
- q-4: answered — c-10, c-11, c-12, c-13, c-09, c-30, c-31, c-32 (no reliable count of dependent papers found; press says "hundreds", unverified, see note on c-10)
- q-5: answered — c-14, c-15, c-16, c-17, c-18, c-19, c-21, c-23
- q-6: answered — c-20, c-22, c-23, c-18, c-19 (only the review group's statement found; no Hacker News or complexity-blog reactions were retrievable within hours of the release)
- q-7: answered — c-24, c-25, c-09, c-13 (practical SAT-solver impact is inferred from the bounds, see examples x-03)

## Claims

### c-01
objective: o-1
claim: A 3-SAT instance is a list of clauses joined by AND; each clause is an OR of up to three variables or their negations. The question is whether some true/false setting makes every clause true.
source: https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/build/main_full_version.tex#L55
quote: "F(x_1,\ldots,x_n)=\bigwedge_{e=1}^m \bigl[(x_{i_{e,1}}\oplus b_{e,1})\vee\cdots\vee (x_{i_{e,k}}\oplus b_{e,k})\bigr]"
confidence: high
note: Paper's general k-CNF definition; 3-SAT is k=3. The same intro (L46) says "$k$-SAT is the canonical NP-complete problem".

### c-02
objective: o-1
claim: With n variables there are 2^n possible true/false assignments, so trying them all takes on the order of 2^n steps.
source: https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/build/main_full_version.tex#L66
quote: "\#F=\bigl|\{x\in\{0,1\}^n:F(x)=1\}\bigr|."
confidence: high
note: The set {0,1}^n has 2^n elements; brute force checks each against all m clauses, so (roughly) 2^n·m work.

### c-03
objective: o-1
claim: Before this claim, the best known 3-SAT algorithms were still exponential, around 1.307^n (randomized, PPSZ family), compared with brute force's 2^n.
source: https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/build/main_full_version.tex#L229
quote: "For general $3$-SAT, a preprint by Jiang and Cai gives a randomized $O^*(1.307031578^n)$ bound"
confidence: high
note: Same section: Schöning's random-walk gives (4/3)^n; Hertli 2014 established 1.308^n for PPSZ; the best deterministic was Liu 2018, 1.32793^n. 1.307 is from a 2026 preprint; 1.308 is the well-established figure.

### c-04
objective: o-2
claim: ETH, proposed by Impagliazzo and Paturi in 1999, says 3-SAT cannot be solved in subexponential time: some constant s>0 exists so every correct algorithm needs at least 2^(s·n) time.
source: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
quote: "the usual form of the hypothesis asserts the existence of a number s_3 > 0 such that all algorithms that correctly solve 3-SAT require time at least 2^{s_3 n}."
confidence: high
note: Equivalent phrasing: no 2^{o(n)} algorithm. Via the sparsification lemma (Impagliazzo–Paturi–Zane 2001), a subexponential 3-SAT algorithm would give subexponential k-SAT for every k. ETH is a hypothesis: an unproven assumption, not a theorem. PER-SWITCH READING (fill-in round 2, verdict: correct, with one safer wording): 2^(s·n) = (2^s)^n, so a 2^(s·n) lower bound means the average per-switch multiplier T(n)^(1/n) is at least 2^s > 1 and never fades; for any T(n) = 2^(o(n)), T(n)^(1/n) = 2^(o(n)/n) → 1, i.e. fades toward ×1 (polynomial n^c fades too, faster). Two precision caveats: (i) it is the AVERAGE (geometric-mean) multiplier, not the literal ratio T(n+1)/T(n) for each added switch, which ETH does not constrain; (ii) it is a worst-case bound, about the hardest puzzles of each size. Safer wording: "ETH bets that on its hardest puzzles every algorithm pays, on average, at least some fixed multiplier per extra switch: maybe tiny, ×1.001, but it never fades to ×1." Source for the algebra: model (elementary; 2^(o(n))/n → 0 is the definition of o(n)).

### c-05
objective: o-2
claim: If ETH is true then P ≠ NP, but ETH is a stronger claim: it says not just "not polynomial" but "genuinely exponential".
source: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
quote: "The exponential time hypothesis, if true, would imply that P ≠ NP, but it is a stronger statement."
confidence: high

### c-06
objective: o-2
claim: ETH being false does not settle P versus NP; 3-SAT could need, say, 2^(√n) time, which is subexponential but still not polynomial.
source: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
quote: "However, if the exponential time hypothesis fails, it would have no implication for the P versus NP problem."
confidence: high
note: Wikipedia's example uses O(2^{n^c}) for c<1. The claimed bound 2^{n/(log n)^{1/2+o(1)}} is far from polynomial.

### c-07
objective: o-2
claim: The Strong ETH (SETH) says that as clause width k grows, the best k-SAT algorithms get arbitrarily close to brute-force 2^n.
source: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
quote: "The strong exponential time hypothesis (SETH) is the conjecture that s_\infty=1."
confidence: high
note: s_k is the best exponent for k-SAT in 2^{s_k n}; s_∞=1 means no fixed (2−ε)^n algorithm works for all k.

### c-08
objective: o-2
claim: SETH is stronger than ETH, so if ETH is false then SETH is false too.
source: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
quote: "Equivalently, if s_k>0 for any k>0, then s_3>0 as well, and the exponential time hypothesis would be true."
confidence: high
note: Derived: SETH gives s_k→1, so some s_k>0, which by this sentence gives s_3>0 (ETH). Contrapositive: ETH false ⇒ SETH false. The brief expected SETH-based results to "survive"; that expectation is wrong. See c-09, c-13.

### c-09
objective: o-4
claim: The paper states that its algorithm refutes ETH, SETH, and the related variants Gap-ETH and NSETH.
source: https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/build/main_full_version.tex#L289
quote: "Theorem~\ref{thm:main} refutes ETH, SETH, Gap-ETH, and NSETH."
confidence: high
note: Primary (OpenAI manuscript). High confidence that the paper says this, not that it is correct. It also says it refutes #ETH (counting version).

### c-10
objective: o-3
claim: Under ETH, many classic NP-hard problems (graph coloring, Hamiltonian cycle, max clique, independent set, vertex cover) have no algorithm much faster than c^n on n-vertex graphs.
source: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
quote: "These problems include graph k-colorability, finding Hamiltonian cycles, maximum cliques, maximum independent sets, and vertex cover on n-vertex graphs."
confidence: high
note: Press coverage (runtimewire, Next Web) says "hundreds" of results depend on ETH; no authoritative count was found, so don't state a number as fact. SIZE PARAMETER (fill-in round 2): for all five the bound counts VERTICES n. For colouring, independent set, vertex cover and Hamiltonian path/cycle, the reductions from 3-SAT are linear (c-30, c-31). Clique fits only when measured in vertices: it is the independent-set reduction on the complement graph (same vertex count), but the complement can have ~n² edges. Our own derivation (model, not in a source): a k-clique needs k(k−1)/2 ≤ m edges and lives among vertices of degree ≥ k−1, which gives a 2^(O(√m)) algorithm in the edge count m, so no 2^(Ω(m)) edge bound exists for clique. The parameterized k-clique bound n^(o(k)) (c-11) is a different statement about clique size k, proved by a different (non-linear) reduction.

### c-11
objective: o-3
claim: ETH implies that finding a clique of k vertices in an n-vertex graph cannot be done in n^{o(k)} time, so the obvious ~n^k search is essentially optimal.
source: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
quote: "the exponential time hypothesis implies that it is not possible to find cliques or independent sets of size k in time n^{o(k)}."
confidence: high
note: Same article: ETH also implies W[1] ≠ FPT (a cornerstone separation of parameterized complexity).

### c-12
objective: o-3
claim: Backurs and Indyk proved edit distance has no strongly subquadratic O(n^{2−δ}) algorithm unless the Orthogonal Vectors Conjecture fails (and hence unless SETH fails), a famous explanation of why diff-like algorithms stay quadratic.
source: https://arxiv.org/abs/1412.0348
quote: "Therefore, in what follows we focus on reducing the Orthogonal Vectors Problem to the Edit Distance problem."
confidence: high
note: Paper title reads "Edit Distance Cannot Be Computed in Strongly Subquadratic Time (unless SETH is false)", because OV is SETH-hard, but the reduction starts at OV (§3.2 "Reducing the Orthogonal Vectors Problem to PATTERN", §3.3 "Reducing PATTERN to EDIT"; Theorem 5: subquadratic EDIT ⇒ OV solvable in d^{O(1)}·N^{2−δ}). So if SETH falls (c-08), the bound loses its SETH basis but still stands on OVC, exactly like LCS and regex (c-13). Corrected in fill-in round after accuracy review round 1; earlier note wrongly implied the bound was lost.

### c-13
objective: o-3
claim: Some SETH-based lower bounds still stand on weaker assumptions, such as the Orthogonal Vectors Conjecture, which the claimed result does not refute.
source: https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/build/main_full_version.tex#L351
quote: "Some of the same lower bounds follow from weaker hypotheses that may still hold. For example, the lower bounds for longest common subsequence and regular-expression matching follow from the Orthogonal Vectors Conjecture (OVC)"
confidence: high
note: Paper also notes the bounds based on unbounded-width CNF-SAT survive, because its algorithm needs fixed k. The paper does not name edit distance, but edit distance survives the same way: Backurs & Indyk's proof goes through Orthogonal Vectors (see c-12).

### c-14
objective: o-4
claim: OpenAI's manuscript claims a deterministic algorithm that exactly counts satisfying assignments of any k-CNF (fixed k) in time (n+m)^{O(1)}·2^{n/(log n)^{1/2+o(1)}}, using only polynomial space.
source: https://github.com/openai/math/blob/main/CONTENTS.md
quote: "For every fixed $`k\ge2`$, a deterministic algorithm counts the satisfying assignments of a $`k`$-CNF with $`n`$ variables and $`m`$ clauses in time $`(n+m)^{O_k(1)}2^{n/(\log n)^{1/2+o(1)}}`$."
confidence: high
note: PRIMARY. Paper's Theorem 1: 2^{O_k(n log log n/√log n)}, improving to 2^{O(n/√log n)} when m ≤ D·n. The exponent shrinks only by a ~√log n factor, which is barely subexponential (see x-02).

### c-15
objective: o-4
claim: The 3-SAT case of this counting algorithm is what refutes ETH, because a count greater than zero means the formula is satisfiable.
source: https://github.com/openai/math/blob/main/history.md
quote: "The paper gives a deterministic algorithm that exactly counts satisfying assignments of fixed-width CNF formulas in subexponential time and polynomial space. The case of 3-SAT refutes the Exponential Time Hypothesis."
confidence: high
note: PRIMARY (OpenAI repo, Oct 26 2026 entry). Paper title: "The Exponential Time Hypothesis is False", dated Oct 25 2026, author "OpenAI".

### c-16
objective: o-4
claim: The result came from an unnamed, unreleased internal OpenAI model that was being evaluated on open research problems.
source: https://github.com/openai/math/blob/main/README.md
quote: "This repository contains mathematical manuscripts and supporting proof artifacts produced by an unnamed internal OpenAI model."
confidence: high
note: PRIMARY. Same README: "these manuscripts are best understood as a form of raw research data, rather than polished academic papers." About 4,000 problems were posed across the evaluation.

### c-17
objective: o-4
claim: OpenAI reports the model found the natural-language disproof on 16 October 2026 and that it was formalized in Lean the next day.
source: https://www.unite.ai/openai-says-its-models-produced-three-proofs-in-math-cs-and-physics/
quote: "the AI produced its natural-language disproof on October 16, 2026, and the result was formalized in Lean on October 17, 2026"
confidence: medium
note: SECONDARY paraphrase of OpenAI's blog post (the quote is the article's wording, not OpenAI's). The Next Web reports the same dates. Tech-insider quotes the post verbatim as: "Surprisingly, our system has recently proved that the ETH is false, a result that was subsequently verified in Lean."

### c-18
objective: o-4
claim: The Lean-checked theorem proves a slightly weaker time bound than the paper's headline, 2^{A·n(log log n)²/√log n} times a polynomial, for a Turing-machine model defined in the challenge file.
source: https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SubexponentialSAT.lean#L132
quote: "(n : ℝ) * (Real.log (Real.log ((n : ℝ) + 16))) ^ 2 / Real.sqrt (Real.log ((n : ℝ) + 16))"
confidence: high
note: PRIMARY; verified by reading the file. The theorem `exact_count_and_sat` (L194) also bounds space polynomially. lean/docs/378.md states the paper's sharper bound is not the formalized one. The bound is still 2^{o(n)}, so it suffices for refuting ETH. Reviewers must check that `PrimitiveMachine` (L92) and the CNF encoding are faithful definitions.

### c-19
objective: o-4
claim: Lean's Comparator tool guarantees the proof establishes exactly the stated challenge theorem, uses only permitted axioms, and is accepted by the Lean kernel.
source: https://github.com/leanprover/comparator
quote: "Prove the same statement as provided in `Challenge`" / "Use no more axioms than listed in `permitted_axioms`" / "Be accepted by the Lean kernel"
confidence: high
note: Permitted axioms here are the standard three: propext, Quot.sound, Classical.choice (SubexponentialSAT.json). The repo instructs readers to run Comparator; we did not run it ourselves.

### c-20
objective: o-4
claim: A Lean check can pass while the formal statement says something weaker than the human-language claim. Readers raised this exact concern about an earlier OpenAI Lean-verified result.
source: https://gizmodo.com/openai-trumpets-3-more-math-and-science-results-along-with-a-new-plan-for-publishing-them-2000830956
quote: "Lean verified a weaker assertion"
confidence: medium
note: SECONDARY; the precedent concerns OpenAI's Navier–Stokes claim, not ETH. Tech-insider makes the general point that a Lean check "verifies the formal statement but doesn't by itself confirm it matches the informal claim". No such problem has been reported for the ETH formalization.

### c-21
objective: o-4
claim: An independent working group led by Russell Impagliazzo (co-inventor of ETH), Ramamohan Paturi (co-inventor of ETH), and Ryan Williams will examine and explain the proof.
source: https://github.com/openai/math/blob/main/history.md
quote: "An independent working group of computer scientists led by Russell Impagliazzo, Ramamohan Paturi, and Ryan Williams will examine and explain the proof. At the group's request, we are making the materials public immediately"
confidence: high
note: PRIMARY. Impagliazzo & Paturi originated ETH (c-04), so its own authors are checking its refutation.

### c-22
objective: o-4
claim: The reviewing group explicitly said their involvement is not an endorsement and that the claim needs careful independent scrutiny.
source: https://thenextweb.com/news/openai-exponential-time-hypothesis-false-kakeya-yang-mills
quote: "Our involvement should not be taken as certification of the claim."
confidence: medium
note: SECONDARY (open letter as quoted by The Next Web; letter not read directly). Also quoted: "If the claim is correct, it will change an important part of theoretical computer science". Per the article, the group signed no NDAs, is unpaid, and asked OpenAI to fund a community conference.

### c-23
objective: o-4
claim: The same OpenAI repository withdrew three earlier manuscripts on 7 October 2026 after a sign error was found, so this collection's past claims have not all held up.
source: https://github.com/openai/math/blob/main/history.md
quote: "In “Algebraicity of Weil classes on split abelian eightfolds” a sign error invalidates a stabilization-trace cancellation argument ... we have withdrawn the following three manuscripts"
confidence: high
note: PRIMARY. Those were unrelated math results. It is a base-rate caution, not evidence about ETH. README: "Some of the unformalized results could have issues."

### c-24
objective: o-4
claim: The paper itself states that a 2^{o(n)} algorithm for SAT does not give subexponential algorithms for all NP problems, because ordinary reductions can blow up the input size.
source: https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/build/main_full_version.tex#L149
quote: "runtime bounds of the form $2^{o(n)}$ do not transfer under general polynomial-time reductions ($2^{n^{o(1)}}$ would be needed for this), so our result does not imply that general NP problems admit subexponential time algorithms."
confidence: high
note: PRIMARY. The paper does derive subexponential counting for independent sets, graph colorings and perfect matchings. Separately, Unite.AI writes in its own voice (not attributed to OpenAI) that turning the advance into practical speedups will take substantial additional research; the only OpenAI wording it quotes is that the refutation "reopens questions about how much faster these tasks could become". Do not attribute the practical-gains remark to OpenAI.

### c-25
objective: o-4
claim: "Subexponential" does not mean "breaks crypto": integer factoring has had a subexponential classical algorithm (the general number field sieve) for decades, yet properly sized RSA remains secure.
source: https://en.wikipedia.org/wiki/General_number_field_sieve
quote: "super-polynomial, but sub-exponential in the size of the input"
confidence: medium
note: The GNFS fact is high confidence. "RSA remains secure at standard key sizes" is standard knowledge not stated in this source. AES and RSA security never rested on ETH; this inference is ours (model) and nobody in the sources discusses it for this result.

### c-26
objective: o-1
claim: NP is the class of yes/no problems where a proposed solution can be checked quickly, meaning in polynomial time; 3-SAT is one, since checking a given true/false setting just means reading each clause.
source: https://en.wikipedia.org/wiki/NP-completeness
quote: "The validity of each solution can be verified quickly (namely, in polynomial time)"
confidence: high
note: "NP" stands for "nondeterministic polynomial time"; the page: "Problems that meet the first three criteria belong to the class NP". Being in NP says nothing about how hard finding a solution is. The 3-SAT instance is our application of the definition (checking is m clause look-ups).

### c-27
objective: o-1
claim: A problem is NP-complete if it is in NP and every problem in NP can be translated (reduced) into it in polynomial time, so a polynomial-time algorithm for it would give one for all of NP.
source: https://en.wikipedia.org/wiki/NP-completeness
quote: "Every problem in NP is reducible to C in polynomial time."
confidence: high
note: Reduction guarantees only POLYNOMIAL size growth, not "about the same size". "Fast for one ⇒ fast for all" holds for polynomial time; it does NOT hold for subexponential time in general (c-24). The plan's "about the same size" wording is true only for the specific linear reductions in c-30/c-31.

### c-28
objective: o-1
claim: SAT was the first problem proved NP-complete: the Cook–Levin theorem, from Stephen Cook (1971) and, independently, Leonid Levin (1973).
source: https://en.wikipedia.org/wiki/NP-completeness
quote: "The Cook–Levin theorem states that the Boolean satisfiability problem is NP-complete"
confidence: high
note: Same page: "The concept of NP-completeness was introduced in 1971". Levin's 1973 date is from https://en.wikipedia.org/wiki/Cook%E2%80%93Levin_theorem ("Leonid Levin's paper, \"Universal search problems\", was published in 1973"); that page notes Levin's work circulated earlier and framed search problems.

### c-29
objective: o-1
claim: 3-SAT, the version with at most three variables per clause, is still NP-complete; Richard Karp's 1972 paper listed it among 21 NP-complete problems.
source: https://en.wikipedia.org/wiki/NP-completeness
quote: "the 3-satisfiability problem, a restriction of the Boolean satisfiability problem, remains NP-complete"
confidence: high
note: Same page: "In 1972, Richard Karp proved that several other problems were also NP-complete". Karp's list entry "Satisfiability with at most 3 literals per clause" (= 3-SAT), together with chromatic number (graph colouring), Hamilton circuit, vertex cover and clique, is confirmed at https://en.wikipedia.org/wiki/Karp%27s_21_NP-complete_problems. All four f-family members are therefore on Karp's original list.

### c-30
objective: o-3
claim: A 3-SAT formula with n variables and m clauses can be rewritten as a graph with O(n+m) vertices that is 3-colourable exactly when the formula is satisfiable: a linear-size translation.
source: https://sites.cs.ucsb.edu/~daniello/papers/surveyETH.pdf
quote: "it is possible to construct a graph G with O(n + m) vertices in polynomial time such that G is 3-colorable if and only if φ is satisfiable."
confidence: high
note: Lokshtanov, Marx & Saurabh, "Lower bounds based on the Exponential Time Hypothesis", Bulletin of the EATCS (2011), Proposition 3.1; text extracted from the PDF (math symbols re-typed). Their Theorem 3.2: "Assuming ETH, there is no 2^o(n) time algorithm for 3-Coloring" (n = vertices). Theorem 3.3 gives the same for Dominating Set, Independent Set, Vertex Cover and Hamiltonian Path, again in vertices.

### c-31
objective: o-3
claim: Via the sparsification lemma, ETH also means 3-SAT has no 2^(o(m)) algorithm measured in clauses m, which is what lets linear-size translations carry ETH over to graph problems.
source: https://sites.cs.ucsb.edu/~daniello/papers/surveyETH.pdf
quote: "Assuming ETH, there is a positive real s_0 such that 3-CNF-Sat with parameter m cannot be solved in time O(2^{s_0 m}). That is, there is no 2^{o(m)} algorithm"
confidence: high
note: Survey Proposition 2.9, credited to Impagliazzo–Paturi–Zane 2001. Chain: graph has O(n+m) vertices; a 2^{o(vertices)} algorithm would give 2^{o(m)} for 3-SAT; contradiction. The survey: "The essential feature of the reductions above is that the number of vertices is linear in the number of clauses".

### c-32
objective: o-3
claim: When a translation blows up the size, ETH still gives a lower bound, but a weaker one: planar Hamiltonian cycle uses O(m²) vertices, so it only gets "no 2^(o(√n))".
source: https://sites.cs.ucsb.edu/~daniello/papers/surveyETH.pdf
quote: "If the reduction introduces some blow up, that is, the number of vertices is more than linear, then we still get lower bounds, but weaker than 2^o(n)."
confidence: high
note: Survey Proposition 3.4 (O(m²) vertices and edges) and the √n consequence that follows it. This is the general rule behind c-24: subexponential transfers only through near-linear translations.

### c-33
objective: o-2
claim: The best known exponential bases for k-SAT climb toward 2 as clause width k grows: about 1.307 for 3-SAT, 1.469 for 4-SAT, 1.569 for 5-SAT and 1.638 for 6-SAT (PPSZ algorithm).
source: https://arxiv.org/abs/1103.2165
quote: "3&0.3862944&1.307032 \\ 4&0.5548182&1.468984 \\ 5&0.6502379&1.569427 \\ 6&0.7118243&1.637874"
confidence: high
note: Hertli, "3-SAT Faster and Simpler – Unique-SAT Bounds for PPSZ Hold in General" (FOCS 2011), table of 2^{S_k} from the arXiv LaTeX source; the paper proves these hold for general k-SAT for all k (its abstract rounds 3-SAT to 1.308 and 4-SAT to 1.469). Later work (Hansen–Kaplan–Zamir–Zwick 2019; Scheder; Jiang–Cai 2026, c-03) improves them only in the 4th–6th decimal. The PPSZ exponent behaves like 1 − π²/(6k) for large k, so the base → 2. CAUTION for f-seth: these are UPPER bounds (what algorithms achieve). SETH is a bet about the true LOWER bound; the climb is consistent with SETH, not evidence for it. Values for k ≥ 7 are not tabulated in this source.
