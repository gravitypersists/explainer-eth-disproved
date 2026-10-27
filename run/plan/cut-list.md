# Cut list

Plan v2 (revision 2). Per d-07, nothing was cut or tightened to pay for the v2 additions, so this file lists options only, and the user chooses cuts at the next human review. The plan's estimated reading time is **~15.5 min**, up from ~13.4 min measured on the built v1 page (brief budget: 12 min).

All 25 claims in facts.md are used by some segment. The items below are researched material deliberately left out.

| What | Why it's out | Cost to add back |
|---|---|---|
| A count of papers that depend on ETH ("hundreds") | Press figure only; no authoritative count (c-10 note). The page says "many". | Needs a sourced count first (new research); then one sentence in s-05. |
| Sparsification lemma (why ETH for 3-SAT carries to every k-SAT) | A technical bridge that adds a 4th interacting element to s-04 without changing what the reader can explain. | A collapsed "for the curious" note in s-04; one paragraph. |
| W[1] ≠ FPT and parameterized complexity (c-11 note) | Needs a whole new vocabulary; k-Clique n^{o(k)} already carries the idea in plain terms. | A paragraph plus a definition box in s-05. |
| Gap-ETH and NSETH, beyond naming them | Named once in the s-06 disclosure (c-09); explaining them would add two more hypotheses for no new learning payoff. | A collapsed note in s-06, two short paragraphs. |
| Algorithm history in detail (Schöning (4/3)^n, Hertli 1.308^n, Liu's deterministic 1.328^n) | One "best known ≈ 1.307^n" figure is enough for the wall. | A small timeline figure in s-03. |
| Best known multipliers for 4-SAT, 5-SAT… on f-seth | Not in facts.md; f-seth is marked schematic instead. | Research per-k bounds, then replace the schematic markers with real ticks. |
| Planar-graph 2^{o(√n)} bounds | Dropped in research (source unreadable); not in facts.md. | New research, then one line on the foundation diagram. |
| How the algorithm works (algebraic: polynomial interpolation, split-and-list) (parking lot) | Beyond a novice's reach in the time; the piece is about what the claim means, not how it's proved. | A new segment (~2 min) with a schematic figure; likely needs widening the audience. |
| Corollaries: subexponential counting of independent sets, colourings and perfect matchings; #ETH and Curticapean's bound (parking lot, c-24 note) | Secondary to the headline; would crowd s-07. | One extra theorem block on the s-07 foundation diagram. |
| New circuit lower bound for E^NP (parking lot) | A separate result requiring circuit-complexity background. | A collapsed paragraph in s-06. |
| Williams 2016 refuted the Merlin–Arthur version of SETH (parking lot) | Needs MA explained; risks "SETH was already refuted" confusion, which matters more now that SETH has its own beat. | One careful sentence in s-07 with a definition. |
| Camerani 2021 "The #ETH is False" preprint (parking lot) | Reception unchecked; mentioning an unvetted prior claim could mislead. | Research its reception first, then one sentence in s-08. |
| Credit/process debate (no NDAs, conference funding, "shepherds" criticism) (parking lot) | Out of scope per brief. | A paragraph in s-08. |
| Kakeya / local smoothing and QCD / Yang–Mills results (parking lot) | Out of scope per brief beyond the one-clause mention in s-01. | — |
| Repo-wide stats (721 manuscripts, ~42% Lean-formalised, ~3 hours of compute per result) (parking lot) | Context about OpenAI's programme, not about ETH. | One sentence in s-01 or s-08. |
| Comparator sandbox vulnerability (parking lot) | Only relevant to a deep trust-base discussion. | One sentence in the s-08 disclosure. |
| Real-world uses of SAT (chip verification, scheduling, package managers) to motivate "why 3-SAT matters" | Not in facts.md; v2 grounds importance in the NP-complete family instead (needs F-1/F-2). | Researcher fill-in, then one sentence in s-02's family subsection. |
| A live SAT-solver race widget | The new algorithm's advantage is invisible at any size a browser can run (x-03); it would mislead. | Not recommended. |
| Removed in v2 at the user's request (not budget cuts): the 2^√n-vs-n³ note on the ladder (H-07); the ladder's digit-length bars (H-05/H-06, magnitude moved to the wall); the wall's log scale (H-02) | User decisions in site-1 review. | Not recommended: they caused the s-04 confusion. |

## If it runs long

These are options, ranked so the first item is the cheapest to lose. Everything listed is in plan v2 now. Approximate savings are in reading minutes. Each line says what the reader loses.

1. **w-race growth chart in s-06** (keep k-05 and its feedback). Saves ~0.6 min. Loses the visual of the crossover; the feedback still states the numbers and the "constants set to 1, illustrative" caveat, so m-03 stays covered. It also removes the page's last log-scale chart.
2. **The "How the claim surfaced" timeline in s-08** (moved there from s-06 in v2). Saves ~0.2 min. Loses the dates, which are secondary sources anyway. No objective is affected.
3. **k-Clique block on f-foundation and its n^{o(k)} notation.** Saves ~0.2 min. Loses a second, differently shaped ETH consequence; colouring/Hamiltonian/vertex cover still carry o-3.
4. **The wall's step 6 (1.307^1000 written out).** Saves ~0.3 min. Loses the at-a-glance 302 vs 117 digits comparison; the ladder still ranks 1.307ⁿ above ETH's line with "×1.307 per switch".
5. **Myth card 3 in s-07 ("problems now easy").** Saves ~0.3 min. Its idea is already in k-04 and k-06 feedback. Loses an explicit confrontation of m-05.
6. **k-04 (think-then-reveal in s-05).** Saves ~0.4 min. Loses the Constructive moment for conditional theorems. k-09, k-06 and k-08(d) still check o-3.
7. **f-family's figure, keeping its prose paragraph.** Saves ~0.3 min. Loses the visual of "quick to check / translate into each other"; the user flagged the missing class framing, so the paragraph should stay.
8. **s-09 reduced to the recap only (drop k-08).** Saves ~1 min. Loses the interleaved retrieval across objectives; every objective still has at least one earlier check.
9. **The SETH beat (f-seth, k-09) and k-06.** Not recommended: the user specifically asked for SETH's weight, and dropping it loses o-4's "does it touch SETH?" answer and leaves m-06 unconfronted. Last resort before rescoping.

Taking items 1–5 brings the page to about 13.9 min; taking 1–8 brings it to about 12.2 min.
