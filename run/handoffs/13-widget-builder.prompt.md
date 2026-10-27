# Handoff 13 → widget-builder (w-ladder-fix-1, respawn of 10)

> Respawn note: handoff 10 was dispatched but the agent never ran (session ended; no files changed). This is the same task, unchanged.

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/widget-builder.md`. This file is your task.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

You own widget `w-ladder`. Fix round-1 findings P-02 (landscape 740×360 collapse), P-03 (overlap at 360×640 in claim step 3), the widget half of P-04 (label on the 2^√n rung, e.g. 'close at n = 1,000; pulls away fast: at n = 10⁶, 301 vs 18 digits'; recompute the numbers yourself), and the widget-live-text half of A-04 (caveat that the claimed rung's position uses the sparse bound with constants set to 1, illustrative). Also on P-01: the page builder is changing the mobile step activation, but where it's cheap, put each step's changing element in the top part of the mobile canvas. The page builder is softening the s-04 prose and the w-wall builder is working in parallel; edit only your folder.

Answer each finding ID with a disposition in your report: `fixed`, `disputed` (with evidence) or `blocked`. Full finding text, including evidence and expected fixes, is in `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/findings.md`.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/findings.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md`, `examples.md`, `misconceptions.md`. These were corrected after the build: c-12/c-13 (edit distance rests on OVC), c-24 (attribution), x-03 (crossover ≈10^79).
- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md`, `/Users/m/workspace/eth/explainers/eth-disproved/site/widgets/manifest.json`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/pedagogy-ux.md` and `accuracy.md` for context

## Outputs (write only these)

- `/Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-ladder/`
- Your report goes in your final message, in the format of `/Users/m/workspace/eth/.claude/skills/didactician/templates/report.md`.

## Invariants that apply to you (verbatim; only the user can relax them)

- I1: No horizontal overflow at 360px, unless the user confirmed a mobile waiver.
- I2: Static only: no runtime data calls (fetch/XHR/WebSocket/beacon) to undeclared origins, and no backend. CDN loads are fine.
- I3: Third-party media is cleared (by licence for the intended use, or by the user) and visibly attributed.
- I4: Finite animations longer than flair have a replay control.
- I6: Carousels don't change height (reflow) between pages.
- I7: SVG markers resolve and aren't clipped.
- I8: Each agent writes only in its namespace.

## User decisions that apply (quoted from run/decisions.md)

- d-02: "Claimed, pending review (Recommended)" → always "claimed"; attribute secondary details "as reported".
- d-04: "Approve + apply in build" → plan approved; byline "For novices in complexity theory" stays.

## Findings to address (revision rounds only)

See Task. Full text is in findings.md.

## Done when

- [ ] Every listed finding ID has a disposition
- [ ] `node /Users/m/workspace/eth/.claude/skills/didactician/scripts/verify.mjs --out /Users/m/workspace/eth/explainers/eth-disproved --widget w-ladder` passes
- [ ] Checked at 360×640, 740×360, 390×844 and 1280×800, light and dark

## Not your job

- page prose, global CSS, other widgets
