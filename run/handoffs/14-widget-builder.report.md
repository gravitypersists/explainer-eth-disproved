status: done

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-wall/index.css — tick labels 11→12px; SVG exponents (.ww-sup) .72em→10px; narrow layout now puts the chart on top in a fixed 140px row (room for both bars), with the readout below it and "Step N of 5" pinned to the top-right of the readout
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-wall/index.js — wide axis gutter 44→52px so 12px "10³⁰⁰" labels aren't clipped; compact-mode fit test now measures the text area's own height
- /Users/m/workspace/eth/explainers/eth-disproved/run/gate/w-wall-round-3.json — verify PASS
- /Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/probe/ww360-s5.png, ww390-s5w.png, ww1280-s5w.png, ww360-s1.png — step 5 and step 1 checks

summary: For P-09, the SVG is drawn 1:1 (viewBox = rendered width), so CSS px are the rendered px. Tick labels are now 12px. Tick and bar-end exponents were 7.9px and 8.6px and are now 10px. I kept the superscript form instead of switching to "1e100". For P-01, the cheap widget-side fix was to swap the narrow grid so the chart comes first. At 360 and 390, the step-5 2ⁿ and 1.307ⁿ bars, with their ≈10³⁰¹ and ≈10¹¹⁶ labels, now sit in the top ~140px of the canvas. When the step card rises, it covers the time and best-known text lines, not the bars. Verification: verify.mjs --widget w-wall passes at 360/768/1280, and the legibility check has no warnings. I probed 360, 390 and 1280: answered k-02, scrolled to the n=1000 step, data-step="5", and the aria-live sentence reads correctly (1.07×10^301; 1.307^n ≈ 10^116). Wide layout is unchanged apart from the gutter.

concerns:
- On narrow screens at steps 1–4, the count and time readout now sit below the chart, roughly 150–300px into the canvas. They are still above the bottom third at 360×640 and 390×844, but the page builder's activation change (P-01) should keep the step card off them. The 1.307ⁿ text block in the readout is the part a rising card covers first. On the chart, the bar and its label repeat the same information.
- I did not check landscape 740×360 for w-wall. If the chart row is fixed at 140px, the readout may go to compact mode there.

relaxed:
- none

dispositions:
- P-09 (wall half): fixed — .ww-axlab 12px, .ww-sup 10px (was .72em ≈ 7.9/8.6px), wide axis gutter widened to fit. Verify's legibility check is clean at 360/768/1280.
- P-01 (wall, cheap part): fixed — the narrow layout puts the chart above the readout, so the step-5 1.307ⁿ bar is in the upper part of the mobile canvas (ww360-s5.png, ww390-s5w.png). Step activation itself is still the page builder's job.
