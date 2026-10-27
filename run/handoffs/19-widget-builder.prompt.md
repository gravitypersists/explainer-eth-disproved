# Handoff 19 → widget-builder (rebuild-v2-w-ladder)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/widget-builder.md`. This file is your task.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

Rebuild w-ladder to plan v2: R-05 (in-figure title around "where could the best *possible* 3-SAT algorithm sit?"), R-06 (an ordinal ranking with a labelled vertical axis "↑ work grows faster as you add switches" and the note "order as n gets large"; no bar lengths or digit counts; each rung shows its formula, a plain name, a "we have this" / "nobody has found this" tag and the per-switch multiplier in words; P≠NP and ETH become brackets on the right edge; a drawn, labelled "ETH's line"; no "down here" text; the 2^√n note is removed), and R-14 (the claim rung placed by order, between 1.307ⁿ and 2^√n, below ETH's line). Follow the plan's `### w-ladder` spec for states, step counts and `data-step` values. Keep the round-1 mobile fixes (P-01 top-anchored, P-02 landscape 740×360 fits, P-03 no collisions at 360×640).

Three builders work in parallel on this revision: you (page), w-wall and w-ladder. The contract between them is the plan's widget specs: step counts, `data-step` values and the `didactician:step` event. The page owns the step cards and the scroll controller. Widgets own their canvas. If you change a step count or mount, it must match the plan's spec exactly; if the spec is ambiguous, follow it literally and record a concern rather than inventing a new contract.

Research corrections that override the plan text where they differ (from the fill-in round, handoff 16):
- R-02(b): the plan's "any instance of one can be rewritten as an instance of another of about the same size" is wrong as a general statement (c-27 note). Write instead: "they can all be rewritten as one another, and for these four the rewrite stays about the same size". Polynomial "fast for one, fast for all" is fine in general. The subexponential transfer holds only through these linear translations (c-30, c-31).
- Clique: "about the same size" holds only counting vertices (c-10 note). Don't imply an edge-count bound.
- ETH per-switch wording, safer form (c-04 note): "every algorithm pays, on average, at least some fixed multiplier per extra switch — maybe tiny, ×1.001, but it never fades to ×1" (it's an average, worst-case bound). "Fades toward ×1" for subexponential is correct.
- f-seth can use real best-known bases from c-33: 3-SAT ×1.307, 4-SAT ×1.469, 5-SAT ×1.569, 6-SAT ×1.638. Label them "best algorithms so far", not as evidence for SETH; SETH is a bet that the true floor climbs to ×2. Beyond k = 6 is schematic.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md`: plan v2. **Start with `## Revision 2 changes` (R-01…R-15)**; it's your work list. The widget specs are under `## Widgets`.
- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/mockup.html`: v2 mockup (s-02…s-06 tagged "changed in v2"). It's approved content and flow, and its wording is a draft. Only its check prompts, options and answers are final.
- `/Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md` (claim IDs, incl. new c-26…c-33 and notes on c-04, c-10), `examples.md`, `misconceptions.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/human-site-1/comments.md` (the user's words) and `/Users/m/workspace/eth/explainers/eth-disproved/run/review/human-site-1/findings.md` (H-01…H-09)
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/findings.md`: earlier reviewer findings, all already fixed in the site. Don't regress them.
- `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`, `/Users/m/workspace/eth/explainers/eth-disproved/run/decisions.md`
- `/Users/m/workspace/eth/.claude/skills/didactician/kit/` and `/Users/m/workspace/eth/.claude/skills/didactician/references/` as your role file directs
- Your previous version: `/Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-ladder/` (and its report `/Users/m/workspace/eth/explainers/eth-disproved/run/handoffs/13-widget-builder.report.md`)

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

## Findings to address (revision rounds only)

- H-03, H-04 (in-figure half), H-05 (ladder half: length encoding removed), H-06, H-07 (blocking): R-05, R-06, R-14. Note: the user suggested labelling "2^1000 = 302 digits" on the ladder (H-05). The plan moves that to the wall and drops length here. Implement the plan, and say plainly in your report how a reader of the ladder now learns what each rung means.

Answer each ID with a disposition: `fixed`, `disputed` (with evidence) or `blocked`. H- findings are closed only by the user; your disposition is what they'll check.

## Done when

- [ ] R-05, R-06 and R-14 are implemented per the plan's w-ladder spec
- [ ] No text overlaps or spills out of the mount in any state at 360×640, 740×360, 390×844 or 1280×800, light and dark (your previous Playwright overlap check is a good model)
- [ ] `node /Users/m/workspace/eth/.claude/skills/didactician/scripts/verify.mjs --out /Users/m/workspace/eth/explainers/eth-disproved --widget w-ladder` passes

## Not your job

- Page prose and step cards
- Other widgets; global CSS
- Editing the plan or research
- Deployment
