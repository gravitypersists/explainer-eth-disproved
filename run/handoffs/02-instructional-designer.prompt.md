# Handoff 02 → instructional-designer (plan-v1)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/instructional-designer.md`. This file is your task.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

Produce the learning plan, cut list and wireframe mockup for a ~12-minute scrollytelling explainer covering objectives o-1 … o-4. The user asked for a flashy, presentational (scrollytelling) piece more than an exploratory one. Weigh that as a strong preference while choosing the modality, and state your reasoning.

Notes from research to account for:
- The brief's q-4 assumed SETH-based results would survive. The research found this wrong: the paper says SETH falls too, with partial survival through OVC (see facts c-08, c-09 and misconception m-06). Plan from facts.md, not from the brief's assumption.
- "Hundreds of papers" is a press figure only. Do not plan a specific count as fact.
- Crossover numbers in examples x-03 are illustrative, with constants set to 1. Wherever they appear, the plan must label them that way.
- The blog post's own wording was not read. The dates and the "practical gains" line are secondary, medium confidence.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/decisions.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md`, `examples.md`, `misconceptions.md`, `parking-lot.md`
- `/Users/m/workspace/eth/.claude/skills/didactician/templates/learning-plan.md`, `/Users/m/workspace/eth/.claude/skills/didactician/templates/mockup.html`
- `/Users/m/workspace/eth/.claude/skills/didactician/references/` as your role file directs

## Outputs (write only these)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md`, `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/cut-list.md`, `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/mockup.html`
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

- d-01: "~10–12 min (Recommended)" → scope the plan to about 12 minutes; size it in ideas.
- d-02: "Claimed, pending review (Recommended)" → present the result as OpenAI's claim, with the Lean check and the pending expert review. Explain both what follows if it holds and what to watch for. Accuracy over drama.
- d-03: "Standard" → research is complete at that depth.

## Findings to address (revision rounds only)

- none

## Done when

- [ ] learning-plan.md, cut-list.md (with "## If it runs long" cut order) and mockup.html exist
- [ ] Every factual claim in the plan references a claim ID in facts.md
- [ ] `python3 /Users/m/workspace/eth/.claude/skills/didactician/scripts/check_plan.py /Users/m/workspace/eth/explainers/eth-disproved/run` passes with no errors

## Not your job

- Building the site, final prose, or site code
- Doing new research, or editing brief.md or decisions.md
