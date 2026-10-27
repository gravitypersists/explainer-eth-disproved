status: done_with_concerns

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md: a 9-segment scrollytelling plan with 4 widgets, 8 checks and 16 acceptance criteria
- /Users/m/workspace/eth/explainers/eth-disproved/run/plan/cut-list.md: 16 items that are out, each with a reason and the cost to add it back, plus a ranked 7-step `## If it runs long`
- /Users/m/workspace/eth/explainers/eth-disproved/run/plan/mockup.html: the wireframe, with real headings, draft lines, final check prompts and answers, figure descriptions, the cut tables and an assets panel (no third-party assets)
- /Users/m/workspace/eth/explainers/eth-disproved/run/gate/check_plan.txt: `check_plan.py` result, PASS with 0 warnings

summary: The piece is scrollytelling, as the user asked, and the story runs in this order: the 3-switch puzzle, the doubling wall, ETH as a bet, what was built on that bet, the claim, the fallout, and the verification status. I rejected a full-page explorable because no browser-sized n can show the new algorithm's speedup (x-03). Three visuals come back later in the piece: the growth-rate ladder (s-04, then s-06), the foundation diagram (s-05, then s-07) and the toy formula. Predict-then-reveal cards sit at each misconception: k-02 on exponential growth, k-03 (m-01), k-05 (m-03), k-06 (m-06), k-07 (m-04). The k-08 sort in s-09 goes back over all four objectives. Per d-02 the result is framed throughout as "OpenAI's claim". SETH is planned as also falling, with partial survival via OVC, following facts.md rather than the brief's q-4. The page gives no count of dependent papers, and every crossover number is labelled "constants set to 1, illustrative". All 25 claims are used.

concerns:
- Scope is tight for 12 minutes: 9 segments and 2 high-complexity widgets (w-wall and w-ladder, which mounts in two states). If the built page runs long, `cut-list.md` ranks the cuts, starting with the w-race chart.
- s-07 carries both o-3 and o-4 and three myth cards. That is the densest stretch, so watch its reading time.
- The 16/17 Oct dates and "practical gains need further work" come from press only. The plan requires them to be attributed "as reported" (ac-16). The review group's quote (c-22) is also second-hand.
- c-25's inference that crypto never rested on ETH is the model's own, at medium confidence. The plan states it lightly and leans on the GNFS analogy.
- The ladder's bar lengths are specified as "log of the step count at n=1000". At that n the claimed rung (10^114.5) and 1.307^n (10^116) are nearly the same length, so the rung order may look odd. The builder may need to order the rungs by asymptotic growth and keep honest lengths only as a secondary cue.

relaxed:
- none

dispositions:
- none
