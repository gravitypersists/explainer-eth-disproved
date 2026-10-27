# Cut list

All 25 claims in facts.md are used by some segment. The items below are researched material deliberately left out of a 12-minute piece for a novice HN reader.

| What | Why it's out | Cost to add back |
|---|---|---|
| A count of papers that depend on ETH ("hundreds") | Press figure only; no authoritative count (c-10 note). The page says "many". | Needs a sourced count first (new research); then one sentence in s-05. |
| Sparsification lemma (why ETH for 3-SAT carries to every k-SAT) | A technical bridge that adds a 4th interacting element to s-04 without changing what the reader can explain. | A collapsed "for the curious" note in s-04; one paragraph. |
| W[1] ≠ FPT and parameterized complexity (c-11 note) | Needs a whole new vocabulary; k-Clique n^{o(k)} already carries the idea in plain terms. | A paragraph plus a definition box in s-05. |
| Gap-ETH and NSETH, beyond naming them | Named once in the s-06 scaffold (c-09); explaining them would be two more hypotheses for no new learning payoff. | A collapsed note in s-06, two short paragraphs. |
| Algorithm history in detail (Schöning (4/3)^n, Hertli 1.308^n, Liu's deterministic 1.328^n) | One "best known ≈ 1.307^n" figure is enough for the wall; the lineage is detail. | A small timeline figure in s-03. |
| Planar-graph 2^{o(√n)} bounds | Dropped in research (source unreadable); not in facts.md. | New research, then one line on the foundation diagram. |
| How the algorithm works (algebraic: polynomial interpolation, split-and-list) (parking lot) | Beyond a novice's reach in the time; the piece is about what the claim means, not how it's proved. | A new segment (~2 min) with a schematic figure; likely needs widening the audience. |
| Corollaries: subexponential counting of independent sets, colourings and perfect matchings; #ETH and Curticapean's bound (parking lot, c-24 note) | Secondary to the headline; would crowd s-07. | One extra theorem block on the s-07 foundation diagram. |
| New circuit lower bound for E^NP (parking lot) | A separate result requiring circuit-complexity background. | A collapsed paragraph in s-06. |
| Williams 2016 refuted the Merlin–Arthur version of SETH (parking lot) | Interesting precedent but needs explaining MA; risks confusing "SETH was already refuted". | One careful sentence in s-07 with a definition. |
| Camerani 2021 "The #ETH is False" preprint (parking lot) | Reception unchecked; mentioning an unvetted prior claim without context could mislead. | Research its reception first, then one sentence in s-08. |
| Credit/process debate (no NDAs, conference funding, "shepherds" criticism) (parking lot) | Out of scope per brief (AI commentary beyond what bears on reading the claim). | A paragraph in s-08. |
| Kakeya / local smoothing and QCD / Yang–Mills results (parking lot) | Out of scope per brief beyond a passing mention; s-01 may mention "alongside two other results" in one clause. | — |
| Repo-wide stats (721 manuscripts, ~42% Lean-formalised, ~3 hours of compute per result) (parking lot) | Context about OpenAI's programme, not about ETH. | One sentence in s-01 or s-08. |
| Comparator sandbox vulnerability (parking lot) | Only relevant to a deep trust-base discussion; would overstate a minor point. | One sentence in the s-08 scaffold. |
| A live SAT-solver race widget | The new algorithm's advantage is invisible at any size a browser can run (x-03); it would mislead. | Not recommended. |

## If it runs long

Ranked: cut the first item first. Each line says what the reader loses.

1. **w-race growth chart in s-06** (keep k-05 and its feedback). Loses the visual of the crossover. The feedback text still states the numbers and the "constants set to 1, illustrative" caveat, so m-03 stays covered.
2. **The s-06 timeline strip.** Loses the dates (which are secondary anyway). No objective is affected.
3. **The w-wall final step (1.307^n bar) folded into s-04's ladder.** Loses one visual reinforcement that the best known algorithms are still exponential. The ladder still shows the 1.307^n rung.
4. **Myth card 3 in s-07 ("problems now easy").** Its idea is already in k-04 and k-06 feedback. Loses an explicit confrontation of m-05.
5. **k-04 (think-then-reveal in s-05).** Loses the Constructive moment for conditional theorems. k-06 and k-08(d) still check o-3.
6. **s-09 reduced to the recap only (drop k-08).** Loses the interleaved retrieval across objectives; every objective still has at least one earlier check.
7. **The SETH layer of s-05 and k-06.** Not recommended: the reader loses o-4's "does it touch SETH?" answer and m-06 goes unconfronted. This is the last resort before rescoping.
