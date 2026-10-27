status: done_with_concerns

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/site/index.html — page rebuilt to plan v2. KaTeX is pre-rendered from a TeX-shorthand source kept in my scratchpad: /private/tmp/claude-501/-Users-m-workspace-eth/456ff478-f5ce-41e1-9832-377ffc71af12/scratchpad/b17/src.html. It is rendered with b17/katex/render.cjs.
- /Users/m/workspace/eth/explainers/eth-disproved/site/assets/page.js — f-foundation-a is now static. f-foundation-b swaps instantly on k-06 and has a Before / If the claim holds toggle. New f-family arrow drawing.
- /Users/m/workspace/eth/explainers/eth-disproved/site/assets/page.css — new disclosure pattern, f-family, f-seth, foundation toggle, ToC re-skin. The build-in and crack-drawing animations are removed.
- /Users/m/workspace/eth/explainers/eth-disproved/site/assets/toc.js — re-skinned ToC: numbered chapters, current-chapter state, progress track, mobile summary.
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/manifest.json — v2 steps: w-wall has 6 (steps 4–6 gated on k-02); w-ladder has 3 for "eth" and 3 for "claim". Added a contract note.
- /Users/m/workspace/eth/explainers/eth-disproved/run/gate/page-round-11.json — gate PASS.

summary: I implemented every R-item that page-builder owns. `verify.mjs --phase page` passes, with no warnings left. Measured reading time is about 17.1 min (plan estimate about 15.5, previous build about 13.4). The gate counts text only, and that includes the text the parallel widget builders currently draw. Page weight is 276 KB over 20 requests. I set the byline and the rail to "about 17 minutes" and did not cut anything (d-07). I checked the screenshots at 360 and 1280, in light and dark, for f-family, f-seth, both foundation states, the disclosures, the desktop rail and the mobile Contents. k-09, the wall gating (6 steps) and the toggle were checked with probe.

New factual sentences and their facts:
- s-02 naming paragraph: c-01, c-02.
- Family (NP, NP-complete, rewriting, "canonical", polynomial "fast for all"): c-26, c-27, c-29, c-01 note. "About the same size" for these four comes from c-30, c-31 and the c-10 note, worded per the R-02(b) correction. The caption says size counts dots, so it implies no bound on edges.
- Wall step times: x-02, c-03.
- ETH per-switch statement (the safer average, hardest-case wording) and the formal (2^s)^n line: c-04 note.
- P≠NP and ETH relation: c-05, c-06.
- s-05 link paragraph: c-10, c-11, c-30.
- SETH: c-07, c-08, c-12.
- f-seth dots: c-33, labelled "best algorithms so far, not evidence for SETH; beyond 6 is schematic".
- s-06 per-switch line: c-14.

concerns:
- In f-seth, ETH's bracket runs from just above ×1 to ×1.307, not to ×2 as the plan drew it. The best possible 3-SAT multiplier can't exceed the best known one (c-03, c-33). The figure says so.
- I left out the plan's "SETH claims more, so it's the riskier bet. If ETH falls, SETH falls with it" line under f-seth. Shown there, it gives away k-09's answer, which sits just below the figure. That sentence is now in k-09's feedback. I did not gate f-foundation on k-09; for ac-18 I read "committed before" as k-09 coming before it on the page.
- The wall's step 6 key is "best-known" and the ladder's eth keys are candidates / pnp-bet / eth-bet. The plan names no keys. Both widgets key on data-step, so this is informational only.
- The family prose says "a colouring problem can be turned into a 3-SAT formula". That direction rests on c-27 and c-29 (every NP problem reduces to 3-SAT), not on an explicit source. I wrote "fast" as "grows like a fixed power of n", so it doesn't clash with c-24 in s-07.
- The SETH prose says "climbs toward ×2, getting as close to it as you like" instead of "all the way to ×2", to match c-07 (s_∞ = 1).

relaxed:
- none

dispositions:
- H-01: fixed (step-card half) — every time translation is now in the wall's step cards: step 1 "instant", step 2 "well under a second", step 3 "tens of thousands of years", step 4 "tens of millions of years", step 5 the atoms comparison, step 6 the ×1.307 point. The canvas half belongs to the w-wall builder.
- H-03: fixed — "Four running times for 3-SAT" is gone. The s-04 intro now asks where the best *possible* 3-SAT algorithm could sit, and introduces the figure as "four possible answers… two are algorithms we have, and two are speeds nobody has found".
- H-04: fixed (prose half) — "The gaps are to scale" is deleted. Step 1 now explains the vertical order ("Higher… means the work grows faster as you add switches").
- H-08: fixed — the ToC uses the UI sans at 14px, numbered tabular chapters and full titles that wrap, with no └ and no ellipsis. The current chapter has a 3px accent bar, a tinted pill, weight 600 and an accent number. Visited chapters use the secondary ink and upcoming ones the muted ink. Progress is a 4px accent track with "Chapter N of 9 · ~17 min". The mobile summary reads "Contents · Chapter N of 9: <short title>" and updates on scroll.
- H-09: fixed — all five disclosures are now bordered, tinted boxes with a rotating chevron, a "More ·" kicker, a show/hide hint, an accent border on hover and focus, and a 44px minimum height. The timeline moved from s-06 to s-08 as "How the claim surfaced", directly above the review card, with its content and the "as reported" marks unchanged.
- R-01, R-02, R-05, R-07, R-08, R-09, R-10, R-11, R-12, R-13, R-15: fixed as described above. Also changed:
  - k-01 feedback gains the lopsidedness line.
  - k-03 feedback now says "below ETH's line".
  - k-08 (e) now links to "A bolder bet: SETH".
  - The recap now states both bets as multipliers per extra switch.
  - All round-1 fixes are kept: A-01 OVC wording and chip, P-05 neutral chips, P-06 cracks behind the text (now static).
