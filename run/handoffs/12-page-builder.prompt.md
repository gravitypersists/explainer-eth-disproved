# Handoff 12 → page-builder (fix-round-1, respawn of 09)

> Respawn note: handoff 09 was dispatched but the agent never ran (session ended; no files changed). This is the same task, unchanged.

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/page-builder.md`. This file is your task.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

Fix round-1 findings that live in page prose, page CSS/JS, w-race, w-switchboard and the foundation diagram:
- A-01 (blocking): edit distance survives on OVC. Fix the s-07 feedback and the after-diagram chip and edges. If the diagram needs a 'lost' example, use an ETH-only one such as Hamiltonian cycle (see the x-05 note), supported by facts.md.
- should: A-02 (10^83 → ≈10^79 in the feedback, chart label and live text), A-03, A-05, P-01 (mobile step activation so cards don't cover the sticky canvas; the page owns the scroll controller), P-05.
- the prose half of P-04: soften the s-04 prose to 'eventually outgrows any polynomial'. The ladder builder adds a matching label on the rung.
- the step-text half of A-04: add the 'constants set to 1, sparse bound, illustrative' caveat to the s-06 step text. The ladder builder handles the widget live text.
- cheap nits: A-06, A-07, A-08, A-09, P-06, P-07, P-08, the w-race half of P-09, P-10.
Two widget builders are fixing w-ladder and w-wall in parallel; don't edit their folders.

Answer each finding ID with a disposition in your report: `fixed`, `disputed` (with evidence) or `blocked`. Full finding text, including evidence and expected fixes, is in `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/findings.md`.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/findings.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md`, `examples.md`, `misconceptions.md`. These were corrected after the build: c-12/c-13 (edit distance rests on OVC), c-24 (attribution), x-03 (crossover ≈10^79).
- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md`, `/Users/m/workspace/eth/explainers/eth-disproved/site/widgets/manifest.json`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/pedagogy-ux.md` and `accuracy.md` for context

## Outputs (write only these)

- `/Users/m/workspace/eth/explainers/eth-disproved/site/` except `site/widgets/w-wall/` and `site/widgets/w-ladder/`
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
- [ ] `node /Users/m/workspace/eth/.claude/skills/didactician/scripts/verify.mjs --out /Users/m/workspace/eth/explainers/eth-disproved --phase page` passes

## Not your job

- w-ladder and w-wall internals; editing the plan, research or reviews
