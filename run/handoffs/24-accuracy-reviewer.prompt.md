# Handoff 24 → accuracy-reviewer (review-3-accuracy-focused)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/accuracy-reviewer.md`. This file is your task.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

A **focused closure check (round 3)**, authorized by the user (d-12): "One focused accuracy check (Recommended)". Check only:
1. **A-10** and **A-11** from `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-2/findings.md`. Mark each `closed`, `still-open` or `dispute-upheld`, with evidence from the current site.
2. The sentences changed to fix them, listed in `/Users/m/workspace/eth/explainers/eth-disproved/run/handoffs/round-3-dispositions.md`: the s-02 NP definition and family paragraph, the f-family arrows/label/aria-label, the s-05 one-way sentence, the s-07 colouring block/chip/note and exception paragraph (including "a SAT formula with short rules and only a few switches per dot"), k-08(d) and its feedback, and the s-09 recap. Check them against facts.md (c-24 note / Corollary 1.4, c-26, c-27, c-30, c-31, c-10 note).

You may raise new findings only at `blocking` severity, and only on these changed sentences. Don't re-review the rest of the page.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`, `/Users/m/workspace/eth/explainers/eth-disproved/run/decisions.md`
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-2/findings.md` and `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-2/accuracy.md`: A-10, A-11
- `/Users/m/workspace/eth/explainers/eth-disproved/run/handoffs/round-3-dispositions.md`: the builder's dispositions for A-10/A-11
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/human-site-1/findings.md` and `comments.md`: H-01…H-09 (user findings; check, don't close)
- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md` (plan v2; `## Revision 2 changes` lists what changed)
- `/Users/m/workspace/eth/explainers/eth-disproved/site/` (serve it statically or use `/Users/m/workspace/eth/.claude/skills/didactician/scripts/probe.mjs`)
- `/Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/page-round-14/` and `/Users/m/workspace/eth/explainers/eth-disproved/run/gate/page-round-14.json` (the gate's output)
- `/Users/m/workspace/eth/.claude/skills/didactician/templates/review.md` (output format)
- `/Users/m/workspace/eth/explainers/eth-disproved/run/research/facts.md`, `examples.md`, `misconceptions.md`

## Outputs (write only these)


- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-3/accuracy.md`, plus any probe screenshots in `/Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/probe/`
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
- d-12: "One focused accuracy check (Recommended)" → this dispatch; scope as above.

## Findings to address (revision rounds only)

- A-10 (blocking), A-11 (blocking) in `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-2/findings.md`

## Done when

- [ ] A-10 and A-11 each have a status with evidence
- [ ] Every changed sentence listed above was checked against facts.md; any new finding is blocking only
- [ ] Your review file follows `/Users/m/workspace/eth/.claude/skills/didactician/templates/review.md`

## Not your job

- Fixing the site; editing research or the plan
- Pedagogy/UX judgments (another reviewer)
- Closing H- findings
