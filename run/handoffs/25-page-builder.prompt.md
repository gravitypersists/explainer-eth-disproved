# Handoff 25 → page-builder (credit-note)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/page-builder.md`. This file is your task.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

The page is finished and approved. Add one small credit note, as the user requested after delivery (d-14, verbatim: "Add a note written by claude opus 5.5 with the didactician skill (link to it's github)").

- Wording: something like "Written by Claude Opus 5.5 with the didactician skill." with "didactician" (or "the didactician skill") linking to https://github.com/gravitypersists/didactician. Open it in the same tab or a new tab with rel="noopener".
- Placement: a quiet note in the page footer (or end matter after s-09). Match the existing footer/byline styles and tokens. It must not compete with the content, and must be legible in light and dark.
- Change nothing else.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/site/` (the current page)
- `/Users/m/workspace/eth/explainers/eth-disproved/run/decisions.md` (d-14)

## Outputs (write only these)

- `/Users/m/workspace/eth/explainers/eth-disproved/site/`: everything except `site/widgets/<id>/` contents (you may edit `site/widgets/manifest.json`)
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

- d-14: quoted above → the credit note.
- d-11: "None" (cuts) → change nothing else.

## Findings to address (revision rounds only)

- none

## Done when

- [ ] The note and link are present, legible at 360 and 1280 in light and dark
- [ ] `node /Users/m/workspace/eth/.claude/skills/didactician/scripts/verify.mjs --out /Users/m/workspace/eth/explainers/eth-disproved --phase page` passes

## Not your job

- Any other change to the page
- Widgets; repository, README or deployment files
