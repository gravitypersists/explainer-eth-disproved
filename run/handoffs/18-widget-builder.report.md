status: done_with_concerns

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-wall/index.js — rebuilt to plan v2. It has 6 steps on a linear scale. Every number is computed with BigInt at runtime.
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-wall/index.css — scoped and tokens-only. It has narrow, wide and short (landscape) layouts.
- /Users/m/workspace/eth/explainers/eth-disproved/run/gate/w-wall-round-5.json — verify PASS at 360/768/1280, legibility check clean.
- /Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/probe/ww360-v2-s3/s4/s5.png and ww1280-v2-s3/s4/s5.png — real-page probe through the k-02 gate.
- /private/tmp/claude-501/-Users-m-workspace-eth/456ff478-f5ce-41e1-9832-377ffc71af12/scratchpad/ww/{360x640,740x360,1280x800}-s1…s6.png, -s2-mid.png, -back3.png — all 6 steps at the 3 required viewports, from my driver script at drive.mjs in the same folder.

summary: The canvas now shows only n, the row count "2ⁿ = <full number with separators> rows" and the bar or digit block. There is no time text (R-03).

Steps 1–4 use a linear scale. The current bar is the full plot height. The previous bar drops from full height to its true height H·2^(prev−n) over 700ms ease-out. Any bar under 1px becomes a 1px ink hairline inside a dashed outline. A dashed leader runs down to it from a callout at the top of the column, which reads "n = 20 · 1,048,576 rows · too small to see at this scale".

Steps 5–6 write the numbers out with one shared type size and line width:
- 2¹⁰⁰⁰ is 302 digits.
- ⌊1307¹⁰⁰⁰/1000¹⁰⁰⁰⌋ is 117 digits.
- 10⁸⁰ is 81 digits.

Those three counts are read from the computed strings, not typed in, and I checked them separately in node. Each block has a right-side bracket. A ruler above the blocks, "N digits per line", links block width to digit count (H-05). The type is fitted to the canvas for step 6's content, so it does not change between steps 5 and 6. No log scale anywhere (R-04).

How I checked each acceptance criterion:
- ac-04 at all three sizes (driver output plus screenshots): the canvas has no time text, the current bar is full height (224, 141 and 386px), and the previous bar is 1px with the outline and callout. The aria-live sentence names both bars.
- ac-05, gate: with the gate closed, asking for step 4 shows step 3 (driver). On the real page, probe.mjs clicked the k-02 answer, scrolled the card into view, and data-step read 4 and then 5.
- ac-05, digits: digit lengths read back as 302, 117 and 81. The step-6 blocks share font size and width (17px desktop, 11.5px at 360, 13px landscape).
- No horizontal overflow at any size, no element outside the mount, and no console errors.

concerns:
- The page's current index.html still has only 5 wall steps (the page builder is working in parallel). I tested step 6 by setting data-step and dispatching `didactician:step` directly. The widget expects data-step 1–6, with 4–6 gated on k-02 through `data-gate-k-02="open"` plus `didactician:gate`, as in plan v2.
- The 81-digit atoms block appears at step 5 already, because the step-5 card text cites the 81-digit number. The spec lists it under step 6, and step 6 still shows it.
- On short canvases (360×640 steps 5–6, and 740×360) the "N digits per line" ruler is dropped to fit, and the digits go down to 11.5px. That is inside the plan's 11–12px range, but below the ≥12px I aimed for elsewhere. The block labels and the 302 bracket still carry the counts. Where a block is too short for the vertical "117 digits" or "81 digits" bracket text, that text is hidden and the label above the block gives the count.
- On narrow and short screens the labels use the plan's shorter forms: "1.307¹⁰⁰⁰ (best known) = a 117-digit number" and "≈ atoms in the universe (10⁸⁰): 81 digits". The full wording is used from 440px up.
- What I saw at 740×360: bar mode puts the head on the left and the plot on the right, with a 141px plot. Digit mode puts labels in a 150px column and the caption top-right. Everything fits in 198px.
- Libraries: none.

relaxed:
- ≥12px digit text (round-1 target) — 11.5px at 360×640 and the ruler dropped on short canvases — all 302+117+81 digits plus labels have to fit a 352px canvas. This is within the plan's stated 11–12px.

dispositions:
- H-01 (canvas half): fixed — w-wall/index.js has no time text. The canvas shows only n, the row count and the bar or digit block. The time text belongs in the page builder's step cards.
- H-02: fixed — the log axis and ticks are gone. Steps 1–4 are true-scale linear bars, each crushing the previous one to a labelled hairline. Steps 5–6 write the numbers out in full (302, 117 and 81 digits).
- H-05: fixed — on the step-5 canvas the label reads "2¹⁰⁰⁰ = a **302-digit** number of rows". A bracket labelled "302 digits" spans the block, and a "N digits per line" ruler above it ties width to digit count. On short canvases the ruler is dropped (see relaxed). Step 6 sets 117 and 81 in the same type and line width, so block size is digit count.
