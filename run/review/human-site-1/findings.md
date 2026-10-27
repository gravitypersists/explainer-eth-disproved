# Findings: human review site-1

_Ingested 2026-10-26T23:44:26-04:00 from comments.json on d-05. H- findings are closed only by the user._

### A-01 · blocking · open
criterion: o-3 / o-4
location: s-07 check feedback (index.html L400: "The quadratic bound is simply unproven again. Some related bounds (longest common subsequence, regex matching) can still lean on ... OVC"); s-07 foundation diagram, edit-distance block chip "basis lost · unproven again — not disproved" (L410) vs LCS block "still stands"
verdict: contradicted
evidence: Backurs & Indyk (arXiv 1412.0348) prove the edit-distance bound by reduction from Orthogonal Vectors. The paper's outline reads "3.2 Reducing the Orthogonal Vectors Problem to PATTERN" and "3.3 Reducing PATTERN to EDIT". So "no O(n^{2−δ}) edit distance unless OVC fails" holds just as it does for LCS and regex, the examples the OpenAI paper names (c-13). Note c-13 only says edit distance "was not named" as surviving. It does not say it fails. As written, the page tells readers that edit distance has lost its lower bound while LCS keeps one. That contrast is false, and the diagram makes it visual.
expected_fix: Treat edit distance like LCS/regex. In the s-07 feedback, replace "The quadratic bound is simply unproven again..." with something like "Its stated basis, SETH, is gone, but Backurs and Indyk's proof actually goes through the Orthogonal Vectors Conjecture (OVC), a weaker assumption this claim doesn't touch, so the quadratic bound still stands on OVC. The same holds for longest common subsequence and regex matching." In the after-diagram, change the edit-distance chip to "SETH basis lost · still stands on OVC" and draw it resting on OVC. The quiz's correct option ("It loses its basis: SETH falls too") can stay, because SETH does fall. Optionally use a different SETH-only example. Add a facts.md claim citing arXiv 1412.0348 §3.2–3.3.

### A-02 · should · open
criterion: o-4
location: s-06 race check feedback ("around n≈10^83 for the general bound"); w-race general-mode label "crossover ≈ n = 10⁸³ →" and live text (assets/page.js L406–408); source x-03
verdict: contradicted
evidence: The race chart's own general formula, digits = n·log10(2)·ln ln n/√ln n, is set equal to n·log10(1.307). Solving gives ln ln n/√ln n = ln1.307/ln2 = 0.3863, so ln n ≈ 181.2 and n ≈ 10^78.7. It is not 10^83. (With base-2 logs the result is ≈10^168. The figure depends heavily on conventions either way.) The sparse crossover (≈815) checks out.
expected_fix: Change the figure to "around 10^79" (or "beyond 10^75") in the feedback, the chart label and the live text, and correct x-03.

### A-03 · should · open
criterion: d-02 (attribute secondary-sourced details) / o-4
location: s-06 race check feedback, "(Press reports OpenAI itself saying practical gains would need substantial further work.)"
verdict: unsupported
evidence: The Unite.AI article (fetched) quotes OpenAI only as saying the refutation "reopens questions about how much faster these tasks could become". The remark that turning the advance into real speedups "will take substantial additional research" is the article's own statement and is not attributed to OpenAI. The Next Web says nothing about practical gains. c-24's note already hedges it as a "paraphrase".
expected_fix: Change to "(Press coverage, e.g. Unite.AI, says turning this into practical speedups would take substantial further research.)" or remove it.

### A-04 · should · open
criterion: o-4
location: w-ladder state "claim", step 2 (s-06 step text "just below 1.307ⁿ at this scale"; widget live text "115 vs 117 digits at n = 1,000")
verdict: misleading-simplification
evidence: The claim rung is computed as 2^{n/√ln n} with every constant set to 1 and the sparse-formula form (w-ladder/index.js RUNGS.claim). At n = 1,000 the general bound from the same paper, 2^{n·lnln n/√ln n}, gives ≈221 digits, which sits well above 1.307ⁿ's 117. With base-2 logs the sparse form gives ≈96 digits. The rung's position relative to 1.307ⁿ is therefore a choice of constants, and nothing at that point in the page says so. The caveat only appears two checks later. A reader can come away thinking the claimed algorithm already beats PPSZ at n = 1,000. The asymptotic ordering on the ladder is correct.
expected_fix: Add a short caveat to the claim rung or the step-2 text, e.g. "(sparse-formula bound, all hidden constants set to 1; the real constants are unknown)". Or drop "at this scale" and say only that the rung sits inside ETH's zone, with an exact bar position that is illustrative.

### A-05 · should · open
criterion: o-3
location: s-09 sort item d, "Theorems proved “unless ETH fails” become unproven, not false." (index.html L535), keyed "Follows"
verdict: misleading-simplification
evidence: The page says elsewhere that such theorems "stay true when ETH fails. It just stops telling us anything about hardness" (s-07 caption), and that the blocks "keep their statements" (s-07 prose). The theorem, a conditional, stays proven. What becomes unproven is the hardness of the problem. Item d says the theorems themselves become unproven, which contradicts the page's own key distinction (m-05) in the end-of-piece synthesis check.
expected_fix: Reword item d to "The hardness results proved “unless ETH fails” become unproven, not false." or "Problems shown hard ‘unless ETH fails’ are no longer known to be hard, but aren't known to be easy either." Keep the key as "Follows".

### A-06 · nit · open
criterion: o-4
location: s-06 race check, distractor "Somewhere around a few hundred variables" vs feedback "only edges past 1.307ⁿ at around a thousand variables for sparse formulas"
verdict: misleading-simplification
evidence: The page's own computation puts the sparse crossover at n ≈ 815 (page.js L397 comment "≈ 815"). That is arguably "a few hundred", so the wrong option is close to the page's own illustrative number. The correct answer is right for a different reason (real constants unknown, real formulas).
expected_fix: Say "around 800 variables" in the feedback and make the distractor clearly different, e.g. "Within a few dozen variables". Or reword the distractor to "Around a few hundred variables, so SAT solvers speed up soon".

### A-07 · nit · open
criterion: o-1
location: s-05 prose and foundation diagram, "edit distance ... that sits at the core of diff"
verdict: ok-but-uncited
evidence: Unix diff tools compute a shortest insert/delete edit script, which is equivalent to longest common subsequence (Myers' algorithm). Backurs–Indyk concern Levenshtein edit distance, which also allows substitutions. "Core of diff" is a loose but common gloss, and it's not in facts.md. It's harmless once the edit-distance/OVC finding above is fixed, since LCS and edit distance then have the same status.
expected_fix: Optionally soften to "a close relative of what diff computes", or leave it.

### A-08 · nit · open
criterion: o-4
location: s-08, "That's why ETH's own inventors are reviewing it, and why they say their involvement isn't a certification."
verdict: unsupported
evidence: No source gives a reason why Impagliazzo, Paturi and Williams are reviewing. c-21 says only that they "will examine and explain the proof". The causal "That's why" is the page's own inference.
expected_fix: Change to "ETH's own inventors are among those reviewing it, and they say their involvement isn't a certification."

### A-09 · nit · open
criterion: o-2
location: s-07 "Three tempting conclusions" → "So P = NP?": "The paper itself notes that its result doesn't make general NP problems subexponential"
verdict: misleading-simplification
evidence: c-24 quotes the paper: "our result does not imply that general NP problems admit subexponential time algorithms." "Doesn't make" can be read as saying they aren't subexponential. The paper only says its result doesn't imply that they are.
expected_fix: Change to "...notes that its result doesn't imply subexponential algorithms for general NP problems...".

### H-01 · blocking · open
criterion: human review (site-1, comment #1)
location: block on "TIME Instant. You could check every row by hand." (selector `#wall > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)`)
evidence: The user wrote: "Let's move time over into the right (the scrolled panels) for all the relevant steps, it's adding too much visual noise here in the visualization."
expected_fix: What the user asks for in their comment. If the intent is unclear, ask the user; don't guess.

### H-02 · blocking · open
criterion: human review (site-1, comment #2)
location: text "Log scale: one tick = ×10"
evidence: The user wrote: "This visualization would hit harder if we actually showed the logarithmic growth. It doesn't look as daunting when it's a log scale growing."
expected_fix: What the user asks for in their comment. If the intent is unclear, ask the user; don't guess.

### H-03 · blocking · open
criterion: human review (site-1, comment #3)
location: text "Four running times for 3-SAT."
evidence: The user wrote: "This language confused me, is this four running times for algorithms? Is it four different algorithm's running times?"
expected_fix: What the user asks for in their comment. If the intent is unclear, ask the user; don't guess.

### H-04 · blocking · open
criterion: human review (site-1, comment #4)
location: text "The gaps are to scale"
evidence: The user wrote: "what gaps?"
expected_fix: What the user asks for in their comment. If the intent is unclear, ask the user; don't guess.

### H-05 · blocking · open
criterion: human review (site-1, comment #5)
location: text "each bar's length is the number of digits in the step count when n = 1,000."
evidence: The user wrote: "this is way to hard to understand in the widget. Maybe we need to draw into the widget "2 ^ 1000 = 302 digits" and associate it clearly with the width of the bar"
expected_fix: What the user asks for in their comment. If the intent is unclear, ask the user; don't guess.

### H-06 · blocking · open
criterion: human review (site-1, comment #6)
location: shape on "The Exponential Time Hypothesis, and OpenAI's claim that it is false CONTENTS └A paper with a blunt title └The puzzle: three switches, four rules └The doubling …" (selector `body > div:nth-of-type(1)`; shot review/human-site-1/shots/c1hv0lyr1g6ovmgim7gv0.png)
evidence: The user wrote: "this is very confusing to me, because the "not anywhere down here" is kind of suggesting the vertical axis is important here, and I don't fully understand this, but I don't think it is."
expected_fix: What the user asks for in their comment. If the intent is unclear, ask the user; don't guess.

### H-07 · blocking · open
criterion: human review (site-1, comment #7)
location: text "close to n³ at n = 1,000; pulls away fast: at n = 10⁶, 302 vs 19 digits"
evidence: The user wrote: "not sure this is relevant, and it's adding distracting noise."
expected_fix: What the user asks for in their comment. If the intent is unclear, ask the user; don't guess.

### H-08 · blocking · open
criterion: human review (site-1, comment #8)
location: text "└A paper with a blunt title"
evidence: The user wrote: "the style for the TOC is a bit strange, I'm not sure it matches the style of the page. Let's re-skin it and ensure that we can easily tell which chapter we're currently on."
expected_fix: What the user asks for in their comment. If the intent is unclear, ask the user; don't guess.

### H-09 · blocking · open
criterion: human review (site-1, comment #9)
location: shape on "The Exponential Time Hypothesis, and OpenAI's claim that it is false CONTENTS └A paper with a blunt title └The puzzle: three switches, four rules └The doubling …" (selector `body > div:nth-of-type(1)`; shot review/human-site-1/shots/ctwbp4b1o8umhe171u5la.png)
evidence: The user wrote: "The "what the paper actually proves" looks too much like a label for the diagram below. Let's make sure progressive disclosures have an affordance to indicate they can be clicked and look different than subheaders. I think we should also consider this timeline might not fit in here?"
expected_fix: What the user asks for in their comment. If the intent is unclear, ask the user; don't guess.

### P-01 · should · open
criterion: mobile UX (controls/steps and their effect visible together); supports ac-05, ac-06, ac-07 on phones
location: s-03 w-wall, s-04 and s-06 w-ladder, at <900px (components.css `.d-step` margin 0 0 60vh; page.js activation line `innerHeight * 0.6`)
evidence: When a step activates, its top sits about 3px below the 55vh canvas, so the whole canvas is visible (run/screenshots/probe/a360-act-lad-2-0.58.png). As the reader keeps scrolling to read the step, the opaque card slides up over the bottom third of the canvas, and the step stays active the whole way up. That bottom third holds the very thing each step is about. Ladder step 2 ("Nothing on the bottom rung") hides the n³ rung and P≠NP band (w390-08-ladder-eth-2.png, a360-act-lad-2-0.4.png). Wall step 5 hides the 1.307^n bar (w390-07-wall-5.png). Claim step 3 cuts off the "P vs NP is untouched" label (w390-13-ladder-claim-3.png).
expected_fix: On narrow screens, keep the active step below the canvas while it is read. One way: move the activation line to just under the canvas bottom (about 55vh + 16px) and cut the inter-step margin to about 35vh, so the next step takes over before the current card reaches the canvas. Another: give `.d-scrolly-steps .d-step` a scroll-margin and spacer so the step reads in the lower 45vh. As a minimum, put each step's changing element in the top half of the mobile canvas (e.g. flip the mobile ladder so the bottom rung renders near the top, or shorten the readout above the wall bars).

### P-02 · should · open
criterion: mobile UX (re-layout, don't shrink; landscape phone check)
location: s-04/s-06 w-ladder at 740×360 (landscape phone)
evidence: In landscape the ladder compresses into overlapping text. "2ⁿ brute force" overprints "1.307ⁿ best known", the "P ≠ NP says: not down here" label overprints "n³ polynomial" and "10 digits · 1 billion", and the bars are not visible (run/screenshots/probe/land-act-lad-2-0.58.png, land-act-lad-3-0.58.png). The ladder is unreadable at this size.
expected_fix: Give the ladder a minimum rung pitch (about 36px per rung). When 55vh can't fit five rungs, switch to a compact layout: labels on one line beside the bars, and the "digits" text dropped or moved into the bar. Alternatively, raise the mount's max-height for short viewports and let the step column scroll under it.

### P-03 · should · open
criterion: ac-07 / mobile legibility
location: s-06 w-ladder state "claim", step 3, at 360×640
evidence: At the smallest supported phone the claim-state ladder runs out of height. The "2^√n subexponential · 10 digits · 3.3 billion" line sits under the P≠NP band's dashed border. The green "n³ is still nowhere near the claim, so P vs NP is untouched" label collides with "10 digits · 1 billion" (run/screenshots/probe/a360-act-claim-3.png). That label carries ac-07's "P vs NP is untouched" message. At 390×844 it fits.
expected_fix: Lay out rungs at a fixed pitch with the zone labels in reserved rows, so nothing overlaps. Alternatively, put the "still nowhere near" label beside the claimed rung, where there's free width, rather than inside the P≠NP band.

### P-04 · should · open
criterion: misconception handling (o-2: ETH is stronger than P≠NP); figure/prose consistency
location: s-04 w-ladder (all states), rungs "2^√n" and "n³"
evidence: Both bars are drawn the same length: "10 digits · 3.3 billion" and "10 digits · 1 billion" (w390-08-ladder-eth-1.png, d1280-08-ladder-eth-3 in sheet). The step text beside it says: "Even 2^√n, which towers over any polynomial, is ruled out." The reader is told the subexponential rung towers over the polynomial one while looking at two identical bars. That weakens the point that ETH's zone is genuinely larger than P≠NP's.
expected_fix: Pick one. (a) Add a short label on the 2^√n rung: "close at n = 1,000; pulls away fast: at n = 10⁶, 301 vs 18 digits". (b) Encode the bars at a larger n, where the gap shows, keeping the honest-scale caption. (c) Soften the prose to "which eventually outgrows any polynomial".

### P-05 · should · open
criterion: misconception handling (m-05: "unproven, not false"); visual consistency (colour meaning)
location: s-07 f-foundation-b, theorem-block chips
evidence: The chips "UNPROVEN AGAIN — NOT DISPROVED" and "BASIS LOST · …" use the same red outline and red text as the "REFUTED (CLAIMED)" badges on ETH and SETH (fb390-fb.png, d1280-17-foundation-b-after.png). Colour tells the reader the theorems are broken too, which is the misconception that myth card 3 and k-08(d) argue against.
expected_fix: Give "unproven again — not disproved" a neutral or amber treatment, such as the muted ink or a dashed grey border, distinct from the red "refuted" colour. Red stays reserved for the claimed-refuted hypotheses, and green for "still stands".

### P-06 · nit · open
criterion: visual consistency and polish
location: s-07 f-foundation-b, ETH and SETH blocks (all widths)
evidence: The decorative crack strokes are drawn over the block text: "SETH ⇒ ETH" and "the Exponential Time Hypothesis" are struck through by the zigzags (fb390-fb.png, d360-17-foundation-b-after.png).
expected_fix: Draw the cracks behind the text (z-order), or confine them to the block's padding and edges.

### P-07 · nit · open
criterion: engagement where intended (prediction quality)
location: s-06 k-05 options
evidence: The correct option, "Only at enormous sizes, if ever in practice, and nobody knows the real constants", is twice the length of the others and is the only hedged one. A test-wise reader can pick it without predicting.
expected_fix: Make the options parallel in length and tone, e.g. "Immediately: SAT solvers get faster" / "Around a few hundred variables" / "Only at astronomically large sizes". Keep the constants caveat in the feedback.

### P-08 · nit · open
criterion: mobile UX (tap targets ≥ 44px)
location: `.d-more summary` (5 disclosures: "How to read NOT and OR", "The formal statement", "Why is SETH stronger?", "What the paper actually proves", "The exact formal bound"); `.d-replay` buttons
evidence: The probe at 390 measured the summaries at 340×32 and the Replay buttons at 93×32 and 86×40.
expected_fix: Set `min-height: var(--tap)` on `.d-more summary` and `.d-replay` under `(pointer: coarse)`, matching `.d-toc-mobile summary`.

### P-09 · nit · open
criterion: mobile UX (diagram text legibility)
location: w-wall log axis tick exponents (10⁰…10³⁰⁰); w-race axis ticks and end labels
evidence: Computed effective sizes at 390 are 7.9px for the wall tick superscripts, 8.6px for the bar-end exponents, and 11px for the race chart tick and end-value labels.
expected_fix: Raise the wall tick labels to ≥11px, with superscripts ≥9px or written as "1e100". Raise the race chart labels to 12–13px on mobile.

### P-10 · nit · open
criterion: framing rule (d-02) / consistency
location: s-06 timeline strip, first item
evidence: "16 Oct — Model produces the disproof (as reported)". Everywhere else the page says "claimed".
expected_fix: Change it to "Model produces the claimed disproof (as reported)".
