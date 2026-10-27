# Handoff 23 → widget-builder (final-fixes-w-ladder)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/widget-builder.md`. This file is your task.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

One small framing fix in w-ladder's "claim" state (d-02: claimed, pending review): the claim-rung flag/chip currently reads "ETH's bet is lost" (and its compact or narrow variants). Hedge it at every width, e.g. "if this holds, ETH's bet is lost" or "if it holds: ETH's bet lost" where space is tight, and in the aria-live sentence too. Keep everything else as it is. Re-run your overlap check for the claim state at 360×640, 740×360, 390×844 and 1280×800.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md`: plan v2. **Start with `## Revision 2 changes` (R-01…R-15)**; it's your work list. The widget specs are under `## Widgets`.
- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/mockup.html`: v2 mockup (s-02…s-06 tagged "changed in v2"). It's approved content and flow, and its wording is a draft. Only its check prompts, options and answers are final.
- `/Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md` (claim IDs, incl. new c-26…c-33 and notes on c-04, c-10), `examples.md`, `misconceptions.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/human-site-1/comments.md` (the user's words) and `/Users/m/workspace/eth/explainers/eth-disproved/run/review/human-site-1/findings.md` (H-01…H-09)
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/findings.md`: earlier reviewer findings, all already fixed in the site. Don't regress them.
- `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`, `/Users/m/workspace/eth/explainers/eth-disproved/run/decisions.md`
- `/Users/m/workspace/eth/.claude/skills/didactician/kit/` and `/Users/m/workspace/eth/.claude/skills/didactician/references/` as your role file directs
- Your previous version: `/Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-ladder/` (and its report `/Users/m/workspace/eth/explainers/eth-disproved/run/handoffs/13-widget-builder.report.md`)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-2/findings.md` (A-10, A-11, full evidence and expected fixes) and `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-2/pedagogy-ux.md`, `accuracy.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/human-site-2/comments.md` (the user's round-2 comment)

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

- d-02: "Claimed, pending review (Recommended)" → always "OpenAI's claim" / "the claimed algorithm", never "the proof that ETH is false"; secondary-sourced dates and quotes "as reported".
- d-04: "Approve + apply in build" → the audience line stays "For novices in complexity theory".
- d-05: the user's site-1 review (9 comments + chat notes, quoted in the plan's `## Revision 2 changes` and in `run/review/human-site-1/comments.md`) → the basis for plan v2. Quote the user's words, don't reinterpret them.
- d-07: "don't cut or tighten, let me cut in the human review, just keep tracking the read time." → build everything in plan v2. Don't cut or trim prose to hit a time. Report the reading time.
- d-08: "Allow 33 claims (Recommended)" → facts c-26…c-33 are valid citations.
- d-09/d-10: the user finished site review round 2 and closed H-01…H-09.
- d-11: "None" (cuts) → ship at ~17 min, no cuts.

## Findings to address (revision rounds only)

- (reviewer note, non-blocking) round-2/pedagogy-ux.md: claim chip "ETH's bet is lost" lacks the plan's "if this holds" hedge (d-02)

Answer each ID with a disposition: `fixed`, `disputed` (with evidence) or `blocked`.

## Done when

- [ ] The hedge appears at every width and in the live text
- [ ] No overlaps in the claim state at the four sizes
- [ ] `node /Users/m/workspace/eth/.claude/skills/didactician/scripts/verify.mjs --out /Users/m/workspace/eth/explainers/eth-disproved --widget w-ladder` passes

## Not your job

- Page prose; other widgets; global CSS
- Any other change to the ladder
- Editing plan or research
