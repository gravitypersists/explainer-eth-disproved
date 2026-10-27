status: done

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-ladder/index.js — I changed one line (line 40, `ANN.flag.v`). Nothing else was touched.

summary: The claim-rung flag now carries the hedge at every width. The full wording was already "below ETH's line: if this holds, ETH's bet is lost". I replaced the two shorter fallbacks with "if this holds, ETH's bet is lost" and "if it holds: ETH's bet lost". The aria-live sentence for claim step 2 already says "If the claim holds, ETH's bet is lost", so I left it alone; claim step 3's sentence doesn't mention the bet. Which wording appears at each size: at 1280×800 the full one. At 360×640, 390×844 and 740×360 the narrow and compact layouts pick "if it holds: ETH's bet lost". The middle wording is only a fallback for in-between widths.

How I checked it:
- I re-ran the overlap script (`/private/tmp/claude-501/-Users-m-workspace-eth/456ff478-f5ce-41e1-9832-377ffc71af12/scratchpad/lad3.mjs`, which is lad2.mjs plus a dump of the visible chip text). It ran at 360×640, 740×360, 390×844 and 1280×800, in light and dark, over every step of both the eth and claim mounts.
  - Result: no overlaps, no text spilling out of the mount and no horizontal overflow in any state. The smallest text is 11.25px.
  - The hedged chip text is visible in claim steps 2 and 3 at all four sizes.
- I looked at the screenshots for 360×640 light claim-2 and 740×360 dark claim-3. Screenshots are in `/private/tmp/claude-501/-Users-m-workspace-eth/456ff478-f5ce-41e1-9832-377ffc71af12/scratchpad/shots3/`.
- `verify.mjs --widget w-ladder` passes; the gate result is in `/Users/m/workspace/eth/explainers/eth-disproved/run/gate/w-ladder-round-6.json`. It reports a reading time of about 17.4 min.

concerns:
- none

relaxed:
- none

dispositions:
- round-2 pedagogy-ux note (claim chip lacks the "if this holds" hedge, d-02): fixed. Every wording of `ANN.flag` in `w-ladder/index.js` now includes the hedge, and the live text already had it. I checked that the chip shows the hedged text at 360×640, 740×360, 390×844 and 1280×800, with no overlaps.
