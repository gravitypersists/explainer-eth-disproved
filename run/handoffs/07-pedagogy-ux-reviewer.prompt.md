# Handoff 07 → pedagogy-ux-reviewer (review-1-pux)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/pedagogy-ux-reviewer.md`. This file is your task.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

Review round 1, pedagogy and UX. Judge the page against the brief, the approved plan and its acceptance criteria. Cover the scroll experience at 360px and 1280px, in light and dark mode: sticky canvases, step triggers, how the check cards and feedback interact with the sticky visuals on mobile, legibility, accessibility and reading time. Also judge whether the page meets the user's "flashy, presentational" ask.
also_accuracy: false

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`, `/Users/m/workspace/eth/explainers/eth-disproved/run/decisions.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md`, `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/cut-list.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/site/` (serve it statically or use `/Users/m/workspace/eth/.claude/skills/didactician/scripts/probe.mjs`)
- `/Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/page-round-5/` and `/Users/m/workspace/eth/explainers/eth-disproved/run/gate/page-round-5.json`
- `/Users/m/workspace/eth/.claude/skills/didactician/templates/review.md` (output format), and `/Users/m/workspace/eth/.claude/skills/didactician/references/` as your role file directs

## Outputs (write only these)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/pedagogy-ux.md`, plus any probe screenshots in `/Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/probe/`
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

- d-01: "~10–12 min (Recommended)" → target about 12 minutes of reading.
- d-02: "Claimed, pending review (Recommended)" → the result must be presented as OpenAI's claim, never as established. The verification status (Lean check, pending expert review) must be shown, and secondary-sourced details must be attributed "as reported".
- d-04: "Approve + apply in build" → the plan is approved; the byline must read "For novices in complexity theory".

## Findings to address (revision rounds only)

- none

## Done when

- [ ] Every acceptance criterion in the plan has been judged; findings are written in the review.md format with severities
- [ ] pedagogy-ux.md exists and `findings.py ingest` can parse it

## Not your job

- Fixing anything; verifying facts (another reviewer has accuracy)
