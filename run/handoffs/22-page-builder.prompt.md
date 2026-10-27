# Handoff 22 → page-builder (final-fixes-page)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/page-builder.md`. This file is your task.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

Final fix round on the current page (plan v2, already built and reviewed). Make only these targeted changes, with no restructuring and no cuts (d-11):
1. **A-10 (blocking):** in s-07 f-foundation-b, split graph colouring out of the "unproven again — not disproved" block. Per the manuscript's Corollary 1.4 (facts.md c-24 note), colouring is *claimed disproved*: the manuscript also claims a 2^o(v) algorithm for counting q-colourings. Give it its own block or chip, marked claimed, in the claim colour. Keep Hamiltonian cycle, vertex cover and k-Clique under "unproven again — not disproved". Add the one-sentence exception to the s-07 paragraph and say *why* (colouring can be rewritten into a SAT formula with about one switch per dot, the reverse direction). Update the aria label/labelB, the Before/After toggle states and the s-09 recap if it mentions colouring. Make k-08(d) "Most hardness results…" or leave it, whichever is accurate per the finding.
2. **A-11 (blocking):** in s-02 "One puzzle stands for a whole family", keep the two-way rewrite claim (polynomial size) but make the *same-size* claim one-way, from 3-SAT outward: fix the paragraph, the f-family arrow label(s)/arrowheads and its aria-label as the finding suggests. This should set up A-10's exception in s-07 (colouring is the one problem whose reverse rewrite the manuscript uses).
3. **H-10 (blocking, user):** s-02 opener "Start with something you can solve in your head" → "Let's start with something you can solve in your head".
4. Cheap reviewer notes (non-blocking, apply them):
   - s-02's NP definition: don't imply every NP problem is hard. NP also contains easy problems (c-26 note). E.g. "problems where a proposed answer is quick to check; for the hardest of them, finding one seems to need a search".
   - ac-19: show the "More ·" kicker on disclosures under 600px too (currently hidden by CSS).

Report the new reading time.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md`: plan v2. **Start with `## Revision 2 changes` (R-01…R-15)**; it's your work list. The widget specs are under `## Widgets`.
- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/mockup.html`: v2 mockup (s-02…s-06 tagged "changed in v2"). It's approved content and flow, and its wording is a draft. Only its check prompts, options and answers are final.
- `/Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md` (claim IDs, incl. new c-26…c-33 and notes on c-04, c-10), `examples.md`, `misconceptions.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/human-site-1/comments.md` (the user's words) and `/Users/m/workspace/eth/explainers/eth-disproved/run/review/human-site-1/findings.md` (H-01…H-09)
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/findings.md`: earlier reviewer findings, all already fixed in the site. Don't regress them.
- `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`, `/Users/m/workspace/eth/explainers/eth-disproved/run/decisions.md`
- `/Users/m/workspace/eth/.claude/skills/didactician/kit/` and `/Users/m/workspace/eth/.claude/skills/didactician/references/` as your role file directs

- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-2/findings.md` (A-10, A-11, full evidence and expected fixes) and `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-2/pedagogy-ux.md`, `accuracy.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/human-site-2/comments.md` (the user's round-2 comment)

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

- d-02: "Claimed, pending review (Recommended)" → always "OpenAI's claim" / "the claimed algorithm", never "the proof that ETH is false"; secondary-sourced dates and quotes "as reported".
- d-04: "Approve + apply in build" → the audience line stays "For novices in complexity theory".
- d-05: the user's site-1 review (9 comments + chat notes, quoted in the plan's `## Revision 2 changes` and in `run/review/human-site-1/comments.md`) → the basis for plan v2. Quote the user's words, don't reinterpret them.
- d-07: "don't cut or tighten, let me cut in the human review, just keep tracking the read time." → build everything in plan v2. Don't cut or trim prose to hit a time. Report the reading time.
- d-08: "Allow 33 claims (Recommended)" → facts c-26…c-33 are valid citations.
- d-09/d-10: the user finished site review round 2 and closed H-01…H-09.
- d-11: "None" (cuts) → ship at ~17 min, no cuts.

## Findings to address (revision rounds only)

- A-10 (blocking), A-11 (blocking): see round-2/findings.md
- H-10 (blocking): the user wrote "\"Let's start\"" on "Start with something you can solve in your head" (human-site-2/comments.md #1)

Answer each ID with a disposition: `fixed`, `disputed` (with evidence) or `blocked`.

## Done when

- [ ] A-10, A-11 and H-10 fixed, each disposition citing the changed text
- [ ] Both notes in item 4 applied
- [ ] `node /Users/m/workspace/eth/.claude/skills/didactician/scripts/verify.mjs --out /Users/m/workspace/eth/explainers/eth-disproved --phase page` passes
- [ ] The report states the reading time

## Not your job

- w-ladder or w-wall internals (the ladder's claim chip is handled by its own builder in parallel)
- Cutting or restructuring content
- Editing plan, research or decisions
- Deployment
