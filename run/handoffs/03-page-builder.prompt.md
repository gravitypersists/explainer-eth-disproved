# Handoff 03 → page-builder (build-v1)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/page-builder.md`. This file is your task.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

Build the scrollytelling explainer in `/Users/m/workspace/eth/explainers/eth-disproved/site/` from the approved plan. Use the mockup for content and flow only. Its wording is a draft, so don't match it; only its check prompts, options and answers are final. The user asked for "flashy" and presentational, so make it visually striking within the kit tokens (dark hero, large display numerals and sticky scroll canvases are fine), and keep accuracy and clarity first.

Your scope:
- shell, tokens, ToC and all prose;
- simple figures and the low-complexity widgets (w-switchboard, w-race);
- the foundation diagram;
- mounts plus `site/widgets/manifest.json` for the high-complexity widgets w-wall and w-ladder. Separate widget builders build those two after you report done, so don't build them yourself.

The designer flagged two things:
- The w-ladder bar lengths at n=1000 make the claimed rung and 1.307^n almost equal. Make sure the manifest/mount contract for w-ladder carries the plan's spec through to its builder.
- s-07 is the densest segment, so watch its reading time.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`, `/Users/m/workspace/eth/explainers/eth-disproved/run/decisions.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md` (approved), `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/cut-list.md`, `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/mockup.html` (approved content and flow)
- `/Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md` (claim IDs), `examples.md`, `misconceptions.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/human-plan-1/comments.md` (the user's plan comment)
- `/Users/m/workspace/eth/.claude/skills/didactician/kit/` (optional helpers to copy into `site/assets/`) and `/Users/m/workspace/eth/.claude/skills/didactician/references/` as your role file directs

## Outputs (write only these)

- `/Users/m/workspace/eth/explainers/eth-disproved/site/`: everything except `site/widgets/<id>/` contents (you may create `site/widgets/manifest.json`)
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

- d-01: "~10–12 min (Recommended)" → about 12 minutes of reading time. Don't trim prose to fit; report the built time.
- d-02: "Claimed, pending review (Recommended)" → always "OpenAI's claim" or "the claimed algorithm", never "the proof that ETH is false". Show the verification status. Attribute secondary-sourced dates and quotes "as reported".
- d-04: "Approve + apply in build" → plan approved. Apply user comment #1 ("let's just say \"For novices in complexity theory\"") so the audience/byline line reads "For novices in complexity theory".

## Findings to address (revision rounds only)

- none

## Done when

- [ ] All 9 segments, the checks and the low-complexity widgets are built per the plan; the mounts and manifest for w-wall and w-ladder are in place
- [ ] `node /Users/m/workspace/eth/.claude/skills/didactician/scripts/verify.mjs --out /Users/m/workspace/eth/explainers/eth-disproved --phase page` passes (pending widgets allowed)
- [ ] Your report states the estimated reading time and page weight

## Not your job

- Building w-wall or w-ladder internals (`site/widgets/<id>/`)
- Editing the plan, the research, the brief or decisions
- Deployment
