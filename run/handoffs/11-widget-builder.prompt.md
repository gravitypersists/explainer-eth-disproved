# Handoff 11 → widget-builder (w-wall-fix-1)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/widget-builder.md`. This file is your task.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

You own widget `w-wall`. Fix the wall half of round-1 finding P-09: raise the log-axis tick labels to at least 11px, with superscripts at least 9px or written as '1e100'. On P-01: the page builder is changing the mobile step activation, but where it's cheap, keep the step-5 1.307ⁿ bar in the upper part of the mobile canvas. Other builders are working in parallel; edit only your folder.

Answer each finding ID with a disposition in your report: `fixed`, `disputed` (with evidence) or `blocked`. Full finding text, including evidence and expected fixes, is in `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/findings.md`.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/findings.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md`, `examples.md`, `misconceptions.md`. These were corrected after the build: c-12/c-13 (edit distance rests on OVC), c-24 (attribution), x-03 (crossover ≈10^79).
- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md`, `/Users/m/workspace/eth/explainers/eth-disproved/site/widgets/manifest.json`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/pedagogy-ux.md` and `accuracy.md` for context

## Outputs (write only these)

- `/Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-wall/`
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

- [ ] P-09 (wall half) has a disposition
- [ ] `node /Users/m/workspace/eth/.claude/skills/didactician/scripts/verify.mjs --out /Users/m/workspace/eth/explainers/eth-disproved --widget w-wall` passes

## Not your job

- page prose, global CSS, other widgets
