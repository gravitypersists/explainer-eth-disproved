status: done_with_concerns

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/run/plan/learning-plan.md — plan v2. `## Revision 2 changes` at the top has the diagnosis, the reading-time estimate and change list R-01…R-15 with owners. Segments, widgets, checks and ACs updated (new k-09; new ac-17…ac-20).
- /Users/m/workspace/eth/explainers/eth-disproved/run/plan/cut-list.md — options only (d-07), with "## If it runs long" ranked with time savings for each item.
- /Users/m/workspace/eth/explainers/eth-disproved/run/plan/mockup.html — s-02…s-06 rewritten and tagged "changed in v2". s-07, s-08 and s-09 brought in line with the built fixes plus the timeline move. Cut tables updated.
- v1 copies for diffing: /private/tmp/claude-501/-Users-m-workspace-eth/456ff478-f5ce-41e1-9832-377ffc71af12/scratchpad/v1/

summary: Diagnosis: the ladder mixed two encodings and explained neither. Vertical position was an asymptotic rank, but bar length showed digit counts at n=1000, where n³ and 2^√n look identical. It also never said the rungs were candidate answers to one question: how fast could the best possible 3-SAT algorithm be? The fix runs one currency through s-03 to s-06: the multiplier per extra switch. ETH becomes "a fixed multiplier per switch that never fades", subexponential "the multiplier fades toward ×1", and SETH "for wide rules it's pushed to ×2". The ladder becomes an ordinal ranking with a labelled axis, bets drawn as brackets and an "ETH's line". The wall goes linear and finishes with the numbers written out: 302 vs 117 digits. Further changes: plain-words naming before "3-SAT", a family figure ahead of graph colouring, a SETH beat with its own figure and check k-09, a static foundation figure, a disclosure pattern for the whole page, the timeline moved to s-08, and the ToC re-skinned. **Estimated reading time ~15.5 min, up from ~13.4 built (+~2.1).** Nothing was cut (d-07). check_plan: PASS, no warnings.

concerns:
- Researcher fill-in needed. F-1: NP means a proposed solution can be checked quickly; NP-complete means every NP problem translates into it; SAT/3-SAT is NP-complete (Cook–Levin/Karp). F-2: graph colouring, Hamiltonian cycle, vertex cover and clique are NP-complete and inter-reducible at about the same size, i.e. linear-size reductions to and from 3-SAT. The c-10 problems already rest on this, but facts.md doesn't state it. The s-02 family prose (R-02, f-family) and s-05's "rewritten at about the same size" depend on F-1/F-2. c-01's note covers only "canonical NP-complete". No IDs invented.
- The per-switch reading of ETH and subexponential is derived, not quoted. c-04 gives 2^{s·n} = (2^s)^n. "Subexponential ⇔ the average per-switch multiplier f(n)^{1/n} → 1" is my derivation. The accuracy reviewer should check the wording "fades toward ×1" (it's an average, not a step-by-step ratio).
- f-seth's k-markers (3, 5, wider) are schematic, since facts.md has no per-k bases. The figure must say "schematic", and only ×1.307 is real.
- w-wall step 6 needs ⌊1.307^1000⌋ computed exactly with BigInt (1307^1000 / 1000^1000). I verified 302 and 117 digits.
- w-race is still log-log. That's deliberate: it's the only honest way to fit the crossover. The user disliked log for the wall, so they may object here too. It's cut option #1.
- The ladder's claim rung is now placed by asymptotic order, so A-04's magnitude-at-n=1000 issue no longer arises, and k-05 and w-race keep the constants caveat.

relaxed:
- d-01 (~12 min) — the plan now estimates ~15.5 min — superseded by d-07, under which the user cuts at the next review. Cut order with savings is in cut-list.md: items 1–5 bring it to ~13.9 min, items 1–8 to ~12.2 min.

dispositions:
- H-01: fixed — R-03. The w-wall canvas has no time text; all time translations are in the step cards (w-wall shows, ac-04).
- H-02: fixed — R-04. The wall is fully linear: each step's bar collapses the previous one to a labelled hairline, and steps 5–6 write out 2^1000 (302 digits) against 1.307^1000 (117) and atoms (81) at the same type width. That keeps 1.307ⁿ readable with no log axis.
- H-03: fixed — R-05. The intro now asks "Where could the best *possible* 3-SAT algorithm sit?" and presents "four candidate answers, two we have, two nobody has found". "Four running times" is deleted.
- H-04: fixed — R-05/R-06. "The gaps are to scale" is deleted, and nothing in the ladder encodes gaps.
- H-05: fixed with a change of placement — R-04/R-06. The user's "2^1000 = 302 digits" drawn into the figure with width tied to it is implemented in the wall, where magnitude is the point. The ladder drops length encoding: at n=1000 it made n³ and 2^√n look identical, which is the root of H-07.
- H-06: fixed — R-06. The vertical axis is now labelled ("↑ work grows faster as you add switches", "order as n gets large"). Shaded bands are replaced by bracket rails and a drawn, labelled "ETH's line". "Down here" text is removed.
- H-07: fixed — R-06. The 2^√n note is removed, along with the digit encoding that made it necessary.
- H-08: fixed — R-13/ac-20. Rules: UI sans, numbered full titles, no └ or ellipsis, current chapter shown with an accent bar, pill, bold and accent number, a thin progress track, and a mobile summary naming the current chapter.
- H-09: fixed — R-11/ac-19, a page-wide disclosure pattern: bordered tinted box, rotating chevron, "More ·" kicker, show/hide hint, 44px. R-12 moves the timeline to s-08 as "How the claim surfaced".
- Chat 1 (3-SAT grounding): fixed — R-01. Plain-words "satisfiability… at least one of these must hold" comes first. The label is unpacked once (SAT = satisfiability, 3 = three per rule). k-01 feedback adds "easy to check, hard to find".
- Chat 2 (class before example): fixed — R-02/R-10. The s-02 subsection "One puzzle stands for a whole family" adds f-family, and s-05 calls back to it. Depends on F-1/F-2.
- Chat 3 (ladder): fixed — R-05/R-06/R-07/R-14. Kept as a ladder but made ordinal, with axis and zones specified.
- Chat 4 (SETH weight): fixed — R-08/R-15. Own subhead "A bolder bet: SETH", f-seth, k-09, and an explicit pointer to chapter 7.
- Chat 5 (foundation animation): fixed — R-09. Static in s-05 with no Replay. In s-07 an instant swap after k-06, plus a Before/After toggle. A-01's OVC content is unchanged.
- Chat 6 (wall linear): fixed — R-03/R-04.
- Chat 7 (disclosures and timeline): fixed — R-11/R-12.
- Chat 8 (ToC): fixed — R-13.
- A-01…A-09, P-01…P-10: kept. The plan text now matches the built fixes: OVC for edit distance, 10^79/~800, A-05/A-08/A-09 wording, P-05 neutral chips, P-06 cracks behind the text. P-01–P-03 mobile constraints are restated for the new ladder.
