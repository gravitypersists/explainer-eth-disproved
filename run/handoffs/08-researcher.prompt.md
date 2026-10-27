# Handoff 08 → researcher (facts-fix-x03-c13)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/researcher.md`. This file is your task. This is a fill-in round on your earlier research.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

Accuracy review round 1 found two errors in facts.md/examples.md. Correct them at the source, citing evidence, and keep the existing claim IDs stable (edit in place; add new claim IDs only if needed).

1. **x-03 general-bound crossover.** It says ≈10^83. Solving n·log10(2)·ln ln n/√ln n = n·log10(1.307), with constants set to 1 and natural logs as in x-03, gives ln n ≈ 181, so n ≈ 10^79. Recompute it, state which log convention you used, and note how sensitive the figure is to that convention (with base-2 logs it is ≈10^168).
2. **c-13 / edit distance.** Backurs & Indyk (arXiv 1412.0348, §3.2–3.3) reduce from Orthogonal Vectors (OV → PATTERN → EDIT). So the quadratic edit-distance lower bound also holds under the OV Conjecture and survives SETH falling, as LCS and regex do. Verify this, update c-13's note (or add a claim), and fix misconception m-06 if it implies otherwise.
3. **c-24 note.** "Practical gains need substantial further work" is Unite.AI's own statement, not something OpenAI said. Correct the attribution.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md`, `examples.md`, `misconceptions.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/accuracy.md` (the findings that triggered this round)

## Outputs (write only these)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/research/` (edits in place)
- Your report goes in your final message, in the format of `/Users/m/workspace/eth/.claude/skills/didactician/templates/report.md`.

## Invariants that apply to you (verbatim; only the user can relax them)

- I8: Each agent writes only in its namespace.

## User decisions that apply (quoted from run/decisions.md)

- d-02: "Claimed, pending review (Recommended)" → attribution must be precise: primary vs secondary, and who said what.

## Findings to address (revision rounds only)

- See items 1–3 above (accuracy review round 1).

## Done when

- [ ] x-03, c-13 (or a new claim) and c-24 are corrected, each with a source
- [ ] `python3 /Users/m/workspace/eth/.claude/skills/didactician/scripts/check_research.py /Users/m/workspace/eth/explainers/eth-disproved/run` passes

## Not your job

- Editing the site, the plan or the reviews
