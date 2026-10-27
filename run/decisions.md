# Decisions

### d-01 · 2026-10-26T00:00:00Z · intake
question: Reading time budget?
answer: "~10–12 min (Recommended)"
decision: other
applies_to: brief field time_budget_minutes
notes: set to 12

### d-02 · 2026-10-26T00:00:00Z · intake
question: The claim is hours old and not peer-reviewed. How should the piece frame it?
answer: "Claimed, pending review (Recommended)"
decision: other
applies_to: plan
notes: Present as OpenAI's claim with verification status (Lean check, expert review underway); explain what follows if it holds and what to watch for. Accuracy over drama.

### d-03 · 2026-10-26T00:00:00Z · intake
question: Research depth?
answer: "Standard"
decision: other
applies_to: brief field research_depth

### d-04 · 2026-10-26T22:00:00Z · checkpoint
question: Plan round 1 (1 open comment: #1 audience line). Approve / revise / keep reviewing / rescope?
answer: "Approve + apply in build"
decision: approved
applies_to: plan
notes: comments in review/human-plan-1/comments.md. Comment #1 ("let's just say \"For novices in complexity theory\"") is applied by the page builder: the audience/byline line reads "For novices in complexity theory".

### d-05 · 2026-10-26T23:44:26-04:00 · human-review site-1
question: Site review round 1 has 9 comments. Are you finished with this round? (finished / keep reviewing / skip)
answer: "Done with this review, but some comments. I'm getting a little lost around chapter 4 and I think it's leading into chapter 5. I added some comments about the widget in chapter 4 which might help you diagnose why I'm not understanding this. In chapter 5 we introduce SETH and it seems to be a bit nonchalant but this becomes a pretty important detail later in the piece. \"What rests on eth and seth\" is an animation and I don't think it's earned it's right as one. \"Take graph colouring: can you colour the dots of a network...\" seems to come out of the blue out of nowhere, maybe we need to establish that there's a whole class of problems and then say that one example is the graph colouring problem. 3-SAT is also a bit confusing, as an acronym, it's adding a bit of cognitive load, it might be worth adding just a bit more of an intuitive grasp of what 3-SAT means and why it's important. We just learn about this class of problem, and I can sense that it has to do with uncovering the space of possible outcomes but we might need to ground it intuitively a bit stronger. "
decision: approved
applies_to: human-review site-1
notes: comments in review/human-site-1/comments.md (9). The chat notes above are additional user feedback on s-04/s-05 (SETH emphasis, foundation animation not earned, graph colouring framing, 3-SAT intuition); routed to instructional-designer as a plan revision.

### d-06 · 2026-10-26T23:44:26-04:00 · budget
question: Run is at ~77/75 agent-min, 14/19 dispatches. Extend caps for fixes + closure review?
answer: "Let's try and handle this review, I want to do another human review after. You can determine the proper dispatches for this. "
decision: other
applies_to: caps
notes: User delegated sizing. Extended +90 agent-min, +12 dispatches (designer revision, page + 2 widget builders, gate retries, 2 closure reviewers, second human review fixes).

### d-07 · 2026-10-26T23:47:18-04:00 · plan
question: (unprompted, during plan revision 2) scope handling for additions
answer: "don't cut or tighten, let me cut in the human review, just keep tracking the read time."
decision: other
applies_to: plan, build
notes: Supersedes the "pay for additions with cuts" instruction in handoff 15. Additions go in; no cuts or tightening. Keep the cut-list and its "If it runs long" order as options, and report the estimated reading time.

### d-08 · 2026-10-27T00:05:54-04:00 · research
question: The new background facts push the facts file to 33 claims, past the 25-claim limit for Standard research depth. How should I handle it?
answer: "Allow 33 claims (Recommended)"
decision: relaxed
applies_to: research claim cap (d-03 standard: 25)
notes: Claim cap raised to 33 for this run. check_research.py has no override flag, so its claims-count error is accepted under this decision. All other checks must still pass.

### d-09 · 2026-10-27T01:09:02-04:00 · human-review site-2
question: Your round-2 session ended with 1 comment ("Let's start"). Are you finished with this round?
answer: "Finished with this review"
decision: approved
applies_to: human-review site-2
notes: comments in review/human-site-2/comments.md (1)

### d-10 · 2026-10-27T01:09:02-04:00 · human-review site-1
question: Which of your round-1 comments (H-01 to H-09) can I close?
answer: "Close all nine"
decision: approved
applies_to: H-01, H-02, H-03, H-04, H-05, H-06, H-07, H-08, H-09

### d-11 · 2026-10-27T01:10:31-04:00 · deliver
question: Which cuts should I apply?
answer: "None"
decision: other
applies_to: cut-list
notes: Ship at ~17 min reading time; no cuts.

### d-12 · 2026-10-27T01:19:34-04:00 · review
question: Both allowed review rounds are used. A-10 and A-11 are accuracy fixes that no reviewer has checked. How should I close them?
answer: "One focused accuracy check (Recommended)"
decision: other
applies_to: caps (loop review), A-10, A-11
notes: Extend review loop to 3 for one focused accuracy closure check.

### d-13 · 2026-10-27T01:19:34-04:00 · human-review site-2
question: Can I close your "Let's start" comment (H-10)?
answer: "Close H-10"
decision: approved
applies_to: H-10

### d-14 · 2026-10-27T01:25:09-04:00 · deliver
question: (user request after delivery)
answer: "Add a note written by claude opus 5.5 with the didactician skill (link to it's github) - git init and set remote to git@github.com:gravitypersists/explainer-eth-disproved.git - add simple readme and github pages deploy (already configured)"
decision: other
applies_to: site (credit note), repository, deployment
notes: Skill source per skills-lock.json: https://github.com/gravitypersists/didactician
