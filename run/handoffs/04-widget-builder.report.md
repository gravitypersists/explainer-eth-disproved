status: done

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-wall/index.js — the B1 step-driven "doubling wall": a counter computed exactly with BigInt, a log-scale bar with one tick per factor of 10, a ghost marker for the previous step, a 1.307ⁿ bar at step 5, an aria-live sentence, and a gate clamp
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-wall/index.css — styles scoped to `[data-widget="w-wall"]`, tokens only
- /Users/m/workspace/eth/explainers/eth-disproved/run/gate/w-wall-round-2.json — verify.mjs result: PASS
- /Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/probe/wall-{360,1280}-start.png — probe screenshots

summary: The widget follows `data-step` and `didactician:step`. Each step is rendered idempotently, so a jump from 1 to 5 shows step 5's full state (tested). Every row count is computed exactly. Results: 8; 1,048,576; ≈1.27×10³⁰; ≈1.30×10³³ (2¹¹⁰ = 1298074214633706907132624082305024); ≈1.07×10³⁰¹. 1.307ⁿ at n = 1000 is shown as ≈10¹¹⁶ (1000·log₁₀1.307 = 116.28). Numbers up to 10¹⁵ appear in full, larger ones as powers of ten.

The bar shows the growth since the previous step at full ink and the earlier part at 0.35, with a dashed "n=…" ghost line. Its axis covers 10⁰–10³⁶ for steps 1–4, so n = 110 visibly adds 3 ticks, then zooms out to 10³³⁰ at step 5 over 650 ms ease-in-out. During the transition the counter steps through whole n only, so every value it flashes is a true 2ⁿ (checked mid-animation: 2⁶² ≈ 4.61×10¹⁸, 2²⁴⁹ ≈ 9.05×10⁷⁴). The time line fades out during the move. Reduced motion jumps straight to the end state.

Layout: when the mount is at least 440px wide, the wall is vertical with the readout beside it. Below 440px (the mobile mount is 328px), the wall lies on its side under the readout. A compact mode keeps everything inside a 350px-tall mount on a 640px-tall phone.

How I checked each criterion (my own Playwright driver plus probe.mjs, at 360 and 1280, light and dark, no console errors):
- ac-04: at every step the canvas text includes "n = X switches", the row count and a time line. Step 3 reads "…a billion rows per second: tens of thousands of years." (probe `text:` output and the driver JSON).
- ac-05:
  - Forcing step 4 (setting `data-step` and firing the event) before k-02 is committed leaves the widget on step 3.
  - After clicking the correct k-02 option and scrolling, step 4 shows "×1,024 (2¹⁰) more than n = 100" and "About a thousand times longer…", with no year figure.
  - Step 5 shows a 1.307ⁿ bar next to the 2ⁿ bar, labelled "best known before the claim (randomised, PPSZ family)" and captioned "Smaller base, same exponential shape."
- verify.mjs --widget w-wall: PASS on all invariants.

concerns:
- On wide layouts the step 5 caption adds one sentence: "Each +10 switches still multiplies the work: ×1,024 for 2ⁿ, ×14.5 for 1.307ⁿ" (1.307¹⁰ = 14.55). It makes "still exponential" concrete. It is hidden on narrow layouts and is easy to drop if reviewers count it as beyond the spec.
- At step 5 there are about 330 ticks, so they merge into a texture (opacity is scaled down). That still honours "one tick per factor of 10"; the caption "Log scale: one tick = ×10" stays.
- Page-level, not mine: on mobile the k-02 feedback card is tall and covers the sticky canvas while step 4 activates. The page builder may want to shorten it or add margin after it.
- On very short phones (compact mode) the "(2ⁿ)" formula line is hidden and the counter reads "… rows" inline.

relaxed:
- none

Libraries: none (vanilla JS + SVG). No CDN loads and no data calls.
