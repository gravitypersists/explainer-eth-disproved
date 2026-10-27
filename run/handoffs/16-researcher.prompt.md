# Handoff 16 → researcher (facts-fill-np-family)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/researcher.md`. This file is your task. This is a fill-in round on your earlier research.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

The revised learning plan (v2) needs facts that facts.md does not yet state. Add them as new claim IDs (c-26 onward), each with sources and confidence, in the existing format. Keep existing IDs stable. A secondary verification check is also requested.

1. **F-1:** NP = problems where a proposed solution can be checked quickly (polynomial time). NP-complete = in NP, and every NP problem translates (reduces) into it in polynomial time. SAT is NP-complete (Cook 1971 / Levin 1973), and 3-SAT is NP-complete (Karp 1972). Cite a solid reference (e.g. a textbook, the original papers, or a reputable survey).
2. **F-2:** graph colouring (3-colouring), Hamiltonian cycle, vertex cover and clique (independent set) are NP-complete, and there are reductions between them and 3-SAT whose size grows only linearly in the number of variables/clauses. That is why ETH transfers to them as 2^{o(n)} lower bounds (via the sparsification lemma, Impagliazzo–Paturi–Zane 2001). State precisely which size parameter (vertices, edges, clauses) each bound refers to, and flag anything that is NOT linear (e.g. clique's ETH bound is usually stated as n^{o(k)} or 2^{o(n)} in vertices; check). If a problem in this list doesn't fit the "about the same size" phrasing, say so plainly.
3. **Check the derivation in the plan:** the plan explains ETH as "a fixed multiplier per extra switch that never fades" (2^{s·n} = (2^s)^n, per c-04) and subexponential as "the average per-switch multiplier fades toward ×1" (f(n)^{1/n} → 1 for f = 2^{o(n)}). Is this a correct reading? Give a one-line verdict and a safer wording if needed. Record it as a note on c-04 or as a new claim.
4. **SETH multipliers:** the plan's SETH figure shows per-k bases for k-SAT approaching ×2 as the rule width k grows. If published best-known bases for 3-SAT (1.307, already c-?) and for 4-SAT/5-SAT (e.g. from PPSZ) are readily citable, add them. If not, say so; the figure will be marked schematic.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md`, `examples.md`, `misconceptions.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md` (see `## Revision 2 changes`, R-01, R-02, R-08, R-10, for how the facts will be used)

## Outputs (write only these)

- Files in `/Users/m/workspace/eth/explainers/eth-disproved/run/research/` (facts.md mainly)
- Your report goes in your final message, in the format of `/Users/m/workspace/eth/.claude/skills/didactician/templates/report.md`.

## Invariants that apply to you (verbatim; only the user can relax them)

- I8: Each agent writes only in its namespace.

## User decisions that apply (quoted from run/decisions.md)

- d-02: "Claimed, pending review (Recommended)" → unchanged; this fill-in concerns background facts only.
- d-03: "Standard" → research depth; keep the fill-in bounded to the four items above.

## Findings to address (revision rounds only)

- none (designer concern F-1/F-2 in handoffs/15-instructional-designer.report.md)

## Done when

- [ ] New claims for F-1 and F-2 exist in facts.md with sources
- [ ] Items 3 and 4 have a recorded verdict
- [ ] `python3 /Users/m/workspace/eth/.claude/skills/didactician/scripts/check_research.py /Users/m/workspace/eth/explainers/eth-disproved/run` passes

## Not your job

- Editing the plan, the site, or decisions
- Research beyond the four items above
