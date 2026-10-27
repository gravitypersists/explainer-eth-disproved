# Handoff 21 → pedagogy-ux-reviewer (review-2-pux)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/pedagogy-ux-reviewer.md`. This file is your task.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

This is the **closure round (round 2)**. For every round-1 finding in `round-1/findings.md` within your remit, mark it `closed`, `still-open` or `dispute-upheld`, with evidence from the current site. A finding whose content was removed by the plan-v2 rebuild is `closed`, with a note saying so. You may raise **new** findings only at `blocking` severity. Since then, chapters 2–6 were rebuilt to plan v2 (see the plan's `## Revision 2 changes`). Check all changed and new text against facts.md and the plan, for any blocking problem. Don't close H- findings: the user does that. Do report a blocking problem in text written for them.
also_accuracy: false

Your remit: the P- findings, and whether the v2 rebuild works as teaching and UX. Look for blocking problems only. Check whether chapters 2–6 now flow for a novice: 3-SAT named in plain words, the family before graph colouring, the per-switch multiplier thread through the wall, ladder and SETH, the ladder's single encoding, and SETH's weight before chapter 7. Also check the new disclosure pattern and the ToC, and the linear wall and the new ladder at 360×640, 740×360 and 1280×800 in light and dark. Note the page builder's reading of ac-18 (k-09 sits before f-foundation; nothing is gated) and judge whether it's acceptable. Reading time (~17 min) is the user's call (d-07): report it, don't flag it.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`, `/Users/m/workspace/eth/explainers/eth-disproved/run/decisions.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/findings.md`: the round-1 findings (A-NN, P-NN) to close
- `/Users/m/workspace/eth/explainers/eth-disproved/run/handoffs/round-2-dispositions.md`: the builders' dispositions for each finding
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/human-site-1/findings.md` and `comments.md`: H-01…H-09 (user findings; check, don't close)
- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md` (plan v2; `## Revision 2 changes` lists what changed)
- `/Users/m/workspace/eth/explainers/eth-disproved/site/` (serve it statically or use `/Users/m/workspace/eth/.claude/skills/didactician/scripts/probe.mjs`)
- `/Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/page-round-12/` and `/Users/m/workspace/eth/explainers/eth-disproved/run/gate/page-round-12.json` (the gate's output)
- `/Users/m/workspace/eth/.claude/skills/didactician/templates/review.md` (output format)
- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/cut-list.md`, `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/mockup.html`
- `/Users/m/workspace/eth/.claude/skills/didactician/references/` as your role file directs

## Outputs (write only these)


- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-2/pedagogy-ux.md`, plus any probe screenshots in `/Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/probe/`
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

- d-02: "Claimed, pending review (Recommended)" → the claim must be framed as OpenAI's claim pending verification; secondary details "as reported".
- d-05: the user's site-1 review (`run/review/human-site-1/comments.md`) → plan v2 rebuilt chapters 2–6. H- findings are closed only by the user; don't close them.
- d-07: "don't cut or tighten, let me cut in the human review, just keep tracking the read time." → reading time over the brief is not a finding; report it only.
- d-08: "Allow 33 claims (Recommended)" → facts c-26…c-33 are valid sources.

## Findings to address (revision rounds only)

- All P- findings in `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/findings.md` (close or keep open)

## Done when

- [ ] Every P- finding has a status (closed / still-open / dispute-upheld) with evidence
- [ ] The v2 rebuild was walked at the three viewports, and any new finding is blocking only
- [ ] Your review file follows `/Users/m/workspace/eth/.claude/skills/didactician/templates/review.md`

## Not your job

- Fixing the site; editing the plan
- Accuracy checks (another reviewer)
- Closing H- findings
