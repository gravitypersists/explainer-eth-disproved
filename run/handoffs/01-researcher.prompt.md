# Handoff 01 → researcher (initial-research)

## Your role

Read and follow `/Users/m/workspace/eth/.claude/skills/didactician/agents/researcher.md`. This file is your task.

## Original request (verbatim)

> let's build a lesson on ETH in light of openAI's finding here: https://openai.com/index/building-scientific-understanding-with-academic-communities/ - let's aim for an audience of Hacker News readers (somewhat technical, but mostly layman). I am not familiar with ETH and would like to understand what it is, what it means, what it's significance is, and finally what it means that OpenAI proved it false. Make it look flashy, leaning more on presentational style than exploratory (so probably more scrollytelling type storytelling).

## Root spec

- Brief: `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`
- Skill base directory: `/Users/m/workspace/eth/.claude/skills/didactician`

## Task

Answer research questions q-1 … q-7 in the brief (all objectives o-1 … o-4) at depth "standard". "ETH" is the Exponential Time Hypothesis. OpenAI's post was published 2026-10-26 (today); openai.com returns 403 to WebFetch, so find the primary claim through mirrors, coverage that quotes it, or any linked manuscript/Lean repository, and flag clearly what is quoted primary text vs secondary paraphrase. Pin down precisely what is claimed (exact theorem, running time) — headlines may overstate. Record misconceptions the audience is likely to hold. Seed coverage found by the orchestrator (unverified, secondary): fourweekmba.com/ai-openai-says-its-ai-refuted-the-exponential-time-hypothesis/, gizmodo.com/openai-trumpets-3-more-math-and-science-results-along-with-a-new-plan-for-publishing-them-2000830956, runtimewire.com/article/openai-ai-eth-disproof-external-review, tech-insider.org/openai-three-science-discoveries-eth-kakeya-qcd-2026/.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/brief.md`: brief, objectives and research questions
- `/Users/m/workspace/eth/explainers/eth-disproved/run/decisions.md`: user decisions
- `/Users/m/workspace/eth/.claude/skills/didactician/templates/research-formats.md`: required output formats

## Outputs (write only these)

- `/Users/m/workspace/eth/explainers/eth-disproved/run/research/`: facts.md and the other files research-formats.md specifies
- Your report goes in your final message, in the format of `/Users/m/workspace/eth/.claude/skills/didactician/templates/report.md`.

## Invariants that apply to you (verbatim; only the user can relax them)

- I8: Each agent writes only in its namespace.
- I3: Third-party media is cleared (by licence for the intended use, or by the user) and visibly attributed. (If you propose any media assets, record licence and clearance status.)

## User decisions that apply (quoted from run/decisions.md)

- d-02: "Claimed, pending review (Recommended)" → research must establish the verification status precisely: what has been checked (Lean), by whom, what is pending, and the caveats OpenAI itself states.
- d-03: "Standard" → research depth standard.

## Findings to address (revision rounds only)

- none

## Done when

- [ ] Every research question q-1 … q-7 answered or explicitly marked unanswerable with what was tried
- [ ] Every claim in facts.md has a source; primary vs secondary marked for the OpenAI claim
- [ ] `python3 /Users/m/workspace/eth/.claude/skills/didactician/scripts/check_research.py /Users/m/workspace/eth/explainers/eth-disproved/run` passes

## Not your job

- Writing lesson prose, the learning plan, or any site code
- Editing brief.md or decisions.md
