status: done

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md — c-12 rewritten (edit distance rests on OVC), c-13 note fixed, c-24 note re-attributed, q-4/q-7 unchanged in IDs
- /Users/m/workspace/eth/explainers/eth-disproved/run/research/examples.md — x-03 crossover is now ≈10^79 with its log convention stated; x-05 corrected for edit distance
- /Users/m/workspace/eth/explainers/eth-disproved/run/research/misconceptions.md — m-06 reworded and given a "basis swapped to OVC" note

summary: I made all three fixes in place and kept every claim ID. I recomputed the x-03 crossover by solving ln ln n/√ln n = log2(1.307) = 0.3863. That gives ln n ≈ 181.2, so n ≈ 10^78.7, about 10^79, using natural logs with all constants set to 1. With base-2 logs the same calculation gives log2 n ≈ 558, so n ≈ 10^168. The note records this, and the sparse crossover stays at about 815. I checked Backurs–Indyk against the arXiv HTML and the PDF outline. Section 1 says "Therefore, in what follows we focus on reducing the Orthogonal Vectors Problem to the Edit Distance problem". The section headings are 3.2 "Reducing the Orthogonal Vectors Problem to PATTERN" and 3.3 "Reducing PATTERN to EDIT". Theorem 5 states that a subquadratic EDIT algorithm gives a faster OV algorithm. So the edit-distance bound survives on OVC, the same way LCS and regex do. A separate c-26 would have exceeded the 25-claim cap, so I folded this into c-12 instead, since it cites the same paper. check_research.py passes with 25/25 claims.

concerns:
- The OpenAI paper says only that OVC "may still hold". Nobody has independently analysed whether the new algorithm bears on OVC. c-12 says this.
- The pages still contain errors that come from the old facts: the "unproven again" chip and feedback on edit distance in s-07, and 10^83 in s-06 and page.js. Fixing them is the builder's job, not mine. x-05's note suggests using an ETH-only result such as Hamiltonian cycle as the "lost" example if the page wants a contrast.

relaxed:
- none

dispositions:
- x-03 crossover (should): fixed — examples.md x-03 now says ≈10^79 (natural logs, ln n ≈ 181) and notes the base-2 figure of ≈10^168. The note states the convention.
- c-13 / edit distance (blocking): fixed — c-12 claim, quote and note now say the bound goes through OV (arXiv 1412.0348 §1, §3.2–3.3, Thm 5). c-13's note points to c-12. m-06 is reworded and annotated, and x-05 is corrected.
- c-24 attribution (should): fixed — c-24's note now says the "substantial additional research" remark is Unite.AI's own statement. The only OpenAI wording that article quotes is "reopens questions about how much faster these tasks could become".
