status: done

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/run/review/round-1/pedagogy-ux.md — round-1 pedagogy & UX review. It has scores, judges all 16 acceptance criteria with evidence, and has 10 findings: 0 blocking, 5 should, 5 nit. `findings.py ingest` parsed it cleanly in a scratch copy, giving P-01 to P-10. I did not run it in the real run directory.
- /Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/probe/ — screenshots from my probe runs, all with these filename prefixes: w390-*, d1280-*, d360-*, a360-act-*, land-act-*, wall5-*, k5-*, ch6-*, fb390-*, p360b-*.

summary: I used my own Playwright drivers, built on the skill's pw.mjs, at 390×844 light, 1280×800 dark, 360×740 dark, 360×640 and 740×360 landscape, plus reduced motion and keyboard checks. I answered every check, picking the tempting wrong answer, stepped through every scroll step, and used every toggle. All 16 acceptance criteria are met. The gates hold until each check is answered, the feedback explains the misconception, and the page meets the "flashy, presentational" ask. The issues are mostly on phones:
1. **Step cards cover the canvas (P-01).** On phones the step text slides over the bottom of the sticky figure while the reader reads it. That hides the P≠NP rung on the ladder and the 1.307^n bar on the wall. Both are fully visible only at the moment the step activates.
2. **The ladder breaks on small screens (P-02, P-03).** Its labels overlap at 360×640 and collapse completely in landscape at 740×360.
3. **Bars contradict the prose (P-04).** On the ladder, the 2^√n and n³ bars are both "10 digits" at n=1000, while the step text says 2^√n "towers over any polynomial".

concerns:
- P-01 is rated should, not blocking, because the whole figure is visible at the moment each step activates. The orchestrator may want to raise it, since it affects the core o-2 visual on phones.
- Gate reading time is 13 min against the 12-min budget. I noted it for information only.

relaxed:
- none
