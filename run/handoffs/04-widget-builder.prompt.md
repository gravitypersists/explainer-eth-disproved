# Handoff 04 → widget-builder (w-wall-v1)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/widget-builder.md`. This file is your task. Your widget id is `w-wall`.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

Build widget `w-wall` in `/Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-wall/`. Use the plan's widget spec (`### w-wall` in learning-plan.md) and the mount/step/gate contract in `site/widgets/manifest.json` (its "contract" block and the `w-wall` entry). The page shell, prose and mounts already exist; integrate through the contract only. The user wants it flashy and presentational, and accuracy comes first.
Another widget builder is building w-ladder at the same time; don't touch it.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md` (approved; the `### w-wall` section and the segments it mounts in)
- `/Users/m/workspace/eth/explainers/eth-disproved/site/widgets/manifest.json` (the contract), `/Users/m/workspace/eth/explainers/eth-disproved/site/index.html`, `/Users/m/workspace/eth/explainers/eth-disproved/site/assets/` (read only)
- `/Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md`, `examples.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/decisions.md`
- `/Users/m/workspace/eth/.claude/skills/didactician/references/widgets.md`, `graphics.md` and others as your role file directs

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

- d-02: "Claimed, pending review (Recommended)" → label the new algorithm "claimed", never "proven".
- d-04: "Approve + apply in build" → the plan is approved as-is.

## Findings to address (revision rounds only)

- none

## Done when

- [ ] `node /Users/m/workspace/eth/.claude/skills/didactician/scripts/verify.mjs --out /Users/m/workspace/eth/explainers/eth-disproved --widget w-wall` passes
- [ ] The widget meets the plan's acceptance criteria for w-wall at 360px and 1280px, in light and dark mode

## Not your job

- Page prose, global CSS, other widgets, `site/index.html`, `site/assets/`, the manifest
- Editing the plan or research
