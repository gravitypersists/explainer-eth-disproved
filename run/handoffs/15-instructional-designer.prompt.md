# Handoff 15 → instructional-designer (plan-v2-human-site-1)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/instructional-designer.md`. This file is your task.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

Revise the learning plan, cut list and mockup in response to the user's review of the **built page** (site round 1). The page has been built and reviewed. All earlier reviewer findings (A-01…A-09, P-01…P-10) are already fixed in the site, so keep those fixes. In particular, edit distance still stands on OVC (facts c-12/c-13), and the claim is framed as "claimed, pending review" with secondary details marked "as reported".

The user got lost around chapter 4 (s-04, "The bet"), and it carried into chapter 5 (s-05, "What was built on the bet"). Diagnose why from their comments, then re-plan those segments, plus whatever upstream setup they need. Their own words, from decisions d-05 (verbatim):

> "I'm getting a little lost around chapter 4 and I think it's leading into chapter 5. I added some comments about the widget in chapter 4 which might help you diagnose why I'm not understanding this. In chapter 5 we introduce SETH and it seems to be a bit nonchalant but this becomes a pretty important detail later in the piece. "What rests on eth and seth" is an animation and I don't think it's earned it's right as one. "Take graph colouring: can you colour the dots of a network..." seems to come out of the blue out of nowhere, maybe we need to establish that there's a whole class of problems and then say that one example is the graph colouring problem. 3-SAT is also a bit confusing, as an acronym, it's adding a bit of cognitive load, it might be worth adding just a bit more of an intuitive grasp of what 3-SAT means and why it's important. We just learn about this class of problem, and I can sense that it has to do with uncovering the space of possible outcomes but we might need to ground it intuitively a bit stronger."

You also have their 9 in-page comments, now findings H-01…H-09 (see Findings below). Each H- finding is a user decision. Plan a concrete response to every one. If you think one is wrong, say why in your report; don't silently drop it.

Specifically, the plan must decide:
1. **3-SAT grounding** (s-02/s-03 or wherever it's first named): an intuitive picture of what 3-SAT is (switches = true/false choices; each rule = "at least one of these three must hold"; find a setting satisfying every rule), why it's the representative problem (many NP problems translate into it), and less acronym load (e.g. name it in plain words first and introduce the "3-SAT" label once).
2. **The class before the example**: establish that there's a whole family of problems (NP / NP-complete, in reader terms: easy to check, apparently hard to find, all translatable into each other) *before* graph colouring appears as one member.
3. **The s-04 ladder** (H-03…H-07): the user didn't understand what the four bars are, what "the gaps" are, or that bar length = number of digits; and the zone label "not anywhere down here" made vertical position look meaningful when it isn't. Redesign the ladder's encoding and its intro text so a novice reads it unaided. The user suggested labelling bars directly in the drawing (e.g. "2^1000 = 302 digits", tied to the bar width) and dropping the 2^√n note. Consider whether the ladder is the right figure at all. If you keep it, specify what each axis and zone means.
4. **SETH's weight** (s-05): SETH needs a proper, deliberate introduction (what it adds beyond ETH, and why it matters later), not an aside, because s-07 depends on it.
5. **The "What rests on ETH and SETH" foundation figure**: the user says the animation hasn't earned its place. Decide whether it becomes a static figure (keeping its before/after states, e.g. two static diagrams or a toggle with no auto-animation), or something else that earns motion. Keep A-01's edit distance → OVC content correct.
6. **The wall (s-03)**: H-01 (move the per-step "time" text out of the visual and into the scrolling step cards) and H-02 (the user wants the growth to *look* daunting; they find the log scale undersells it). Specify a linear-scale treatment (e.g. a linear view that shows the explosion, with log only as an optional or secondary step if needed to show 1.307ⁿ against 2ⁿ), and say how the 1.307ⁿ comparison stays readable.
7. **Disclosures and timeline (H-09, s-06)**: the expandable "What the paper actually proves" reads like a heading or a label for the timeline. Specify an affordance that makes progressive disclosures look clickable and distinct from subheads (a page-wide pattern). The user also questions whether the timeline belongs there: decide whether to move it (e.g. into s-08 "Is it true?" or s-01), shrink it, or cut it.
8. **ToC (H-08)**: re-skin it to match the page's style, and highlight the current chapter clearly. Specify the visual rules only. This is builder work, but put it in the change list so it's one source.

Scope: the brief is ~12 minutes, and the built page reads ~13.4 minutes. Additions (3-SAT grounding, class framing, SETH) must be paid for with cuts or tightening elsewhere. Update `cut-list.md` and its "## If it runs long" order. Size in ideas, not word counts.

Add a section `## Revision 2 changes` at the top of `learning-plan.md`. It maps each H-ID and each numbered chat point above to a concrete change, and names the owner (page-builder / widget-builder w-ladder / widget-builder w-wall). Builders will work from that list. Update the mockup only for the segments and widgets that change, so the user can see the new flow in s-02…s-06.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/human-site-1/comments.md`: the user's 9 comments, verbatim, with screenshots in `shots/`. #6 points at the w-ladder "ETH forbids more" step (s-04). #9 points at the "What the paper actually proves" disclosure and the timeline in s-06.
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/human-site-1/build/`: frozen copy of the page the user reviewed (open `index.html`).
- `/Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/findings.md`: earlier reviewer findings, all fixed. Don't undo the fixes.
- `/Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md`, `cut-list.md`, `mockup.html`: the current plan (v1, approved in d-04).
- `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`, `/Users/m/workspace/eth/explainers/eth-disproved/run/decisions.md`
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

- d-01: "~10–12 min (Recommended)" → keep to about 12 minutes; pay for additions with cuts.
- d-02: "Claimed, pending review (Recommended)" → keep the claim framed as OpenAI's claim pending verification.
- d-04: "Approve + apply in build" → v1 plan approved; the audience line reads "For novices in complexity theory". The novice framing is why the user's confusion at s-04/s-05 matters.
- d-05: verbatim above, plus the 9 comments → the basis for this revision.
- d-06: "Let's try and handle this review, I want to do another human review after." → the user will review the rebuilt page. You don't need to wait for a plan sign-off. Make the change list complete enough to build from.

## Findings to address (revision rounds only)

The user's own words for each are in `comments.md` (same numbers). Full records are in `/Users/m/workspace/eth/explainers/eth-disproved/run/review/human-site-1/findings.md`.
- H-01 (blocking, #1): wall: move "time" text out of the visualization into the scrolling step cards for all relevant steps.
- H-02 (blocking, #2): wall: show the real (linear) growth; the log scale undersells it.
- H-03 (blocking, #3): ladder intro "Four running times for 3-SAT." is confusing (four algorithms? one algorithm?).
- H-04 (blocking, #4): "The gaps are to scale": what gaps?
- H-05 (blocking, #5): "bar length = digits at n = 1,000" is too hard; label it in the drawing (e.g. "2^1000 = 302 digits").
- H-06 (blocking, #6): "not anywhere down here" implies the vertical axis matters; the user thinks it doesn't.
- H-07 (blocking, #7): the 2^√n note is irrelevant noise.
- H-08 (blocking, #8): ToC style doesn't match the page; show the current chapter.
- H-09 (blocking, #9): disclosure "What the paper actually proves" looks like a label; disclosures need a clickable affordance distinct from subheads; reconsider the timeline's placement.

## Done when

- [ ] `learning-plan.md` has `## Revision 2 changes` mapping every H-ID and chat points 1–8 to a concrete change and an owner
- [ ] Every factual claim in the plan references a claim ID in facts.md. If a needed fact (e.g. 3-SAT's NP-completeness and reductions to it) isn't in facts.md, list it under concerns as needing a researcher fill-in rather than inventing an ID
- [ ] `cut-list.md` is updated, with a "## If it runs long" cut order, and the plan sizes to ~12 minutes
- [ ] `mockup.html` reflects the changed segments s-02…s-06 and the changed widgets
- [ ] `python3 /Users/m/workspace/eth/.claude/skills/didactician/scripts/check_plan.py /Users/m/workspace/eth/explainers/eth-disproved/run` passes with no errors

## Not your job

- Building or editing the site, final prose, or site code
- Doing new research, or editing brief.md, decisions.md or research files
- Closing H- findings (only the user does)

## Amendment (sent mid-task, d-07)

The user said: "don't cut or tighten, let me cut in the human review, just keep tracking the read time." This replaces the scope paragraph above. Don't cut or tighten anything to pay for the additions. Keep `cut-list.md` and its "## If it runs long" order up to date as **options** for the user. Give the plan's estimated reading time, and its change from the built page's ~13.4 min, in the plan and in your report. The done item "the plan sizes to ~12 minutes" is replaced by "the plan states its estimated reading time".
