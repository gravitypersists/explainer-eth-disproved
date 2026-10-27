# Brief: The Exponential Time Hypothesis, and OpenAI's claim to have broken it

## Original request

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Audience

audience: Hacker News readers: programmers and tech-curious people, comfortable with "exponential vs polynomial" and Big-O loosely, not complexity theorists
readiness: novice
readiness_notes: Can be assumed to know what an algorithm is, roughly what O(n^2) vs 2^n means, and to have heard "P vs NP". New: SAT/3-SAT as a concrete problem, what a "hypothesis" means in complexity theory (an unproven assumption used as a foundation), ETH's precise statement, SETH, fine-grained/conditional lower bounds, and why disproving an assumption matters.

## Scope

time_budget_minutes: 12
context: standalone
prerequisites: none assumed beyond audience
out_of_scope: formal proofs; full survey of fine-grained complexity; the other two results in OpenAI's post (local smoothing/Kakeya, QCD/Yang-Mills) beyond a passing mention; AI-hype or AI-safety commentary beyond what bears on how to read the claim.

## Settings

research_depth: standard
intended_use: unknown
design_tokens: default
mobile: supported
language: en
deployment: none

## Objectives

- o-1: After reading, the reader can explain what 3-SAT is with a concrete example, and why brute force takes ~2^n time as variables grow.
- o-2: After reading, the reader can state ETH in plain words (3-SAT can't be solved in 2^{o(n)} time — i.e. no algorithm escapes exponential growth entirely), and distinguish it from P≠NP (ETH is stronger, a claim about *how* hard, not just "not polynomial").
- o-3: After reading, the reader can explain why ETH matters: it is an unproven assumption that hundreds of conditional lower bounds ("no algorithm faster than X unless ETH fails") rest on, and give one or two examples of what it underwrites.
- o-4: After reading, the reader can explain what OpenAI actually claims (the precise statement, e.g. what running time it gives for 3-SAT), its verification status (Lean check, pending expert review by Impagliazzo, Paturi, Williams et al.), and what would and would not follow if it holds — including whether it implies P=NP, whether it touches SETH, and practical consequences (or lack thereof) for crypto and everyday computing.

## Research questions

- q-1 (o-1): What is the cleanest small 3-SAT example for a layperson, and what is the best known exponential-time algorithm for 3-SAT before this claim (e.g. PPSZ-family bounds ~1.307^n)? How does that compare to 2^n in a vivid way?
- q-2 (o-2): What is the precise statement of ETH (Impagliazzo–Paturi 1999/2001), including the sparsification lemma's role, and what is SETH? What do laypeople typically confuse it with (P vs NP, "NP-hard means impossible")?
- q-3 (o-2): Does ETH being false imply P=NP? (Expected: no — subexponential ≠ polynomial.) Get an authoritative phrasing.
- q-4 (o-3): Which concrete, well-known lower bounds depend on ETH (e.g. no 2^{o(n)} algorithms for many NP-hard problems, parameterized complexity W-hierarchy bounds, planar problems 2^{o(√n)}, k-Clique n^{o(k)}), and roughly how many papers rely on it? Which famous results rely on SETH instead (edit distance, orthogonal vectors) and so would survive?
- q-5 (o-4): Exactly what does OpenAI's 26 Oct 2026 post claim about ETH: the theorem statement, the algorithm's running time, the model/system involved, the Lean formalization, who is reviewing, and caveats OpenAI states? Find primary text (the openai.com post may 403 to fetchers; try mirrors, coverage, linked arXiv/GitHub/manuscript).
- q-6 (o-4): What are expert or community reactions so far (Hacker News, complexity bloggers like Aaronson, Fortnow, Lipton/Regan, Williams), and what are the standard ways such a claim could fail even with a Lean proof (mis-formalized statement, axioms, etc.)?
- q-7 (o-4): If ETH is false, what are the practical consequences: cryptography (does it break RSA/AES? expected: not directly), SAT solvers in practice, and which conditional results would need to be redone?
