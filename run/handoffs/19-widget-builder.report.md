status: done_with_concerns

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-ladder/index.js: rewritten to plan v2. It is an ordinal ladder now, with no bars and no digit counts. It picks one of three layouts by measured fit: wide, narrow (the axis label runs up the axis, rotated) and compact (one line per rung, for landscape phones).
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/w-ladder/index.css: rewritten. Every rule is scoped to `[data-widget="w-ladder"]` and uses tokens only.
- /Users/m/workspace/eth/explainers/eth-disproved/run/gate/w-ladder-round-5.json: verify result, PASS.
- The round-1 version is backed up at /private/tmp/claude-501/-Users-m-workspace-eth/456ff478-f5ce-41e1-9832-377ffc71af12/scratchpad/ladder-v1/

summary: The ladder now encodes one thing only: vertical order, meaning how fast the work grows as n gets large. Rungs sit at a fixed spacing.
- **Title and axis.** The figure is titled "Where could the best *possible* 3-SAT algorithm sit?". A drawn arrow runs up the left edge, labelled "work grows faster as you add switches", with the note "order as n gets large". The note shows in both states.
- **Rungs.** Each rung shows its formula, a plain name, a tag and its multiplier per extra switch:
  - 2ⁿ, brute force, "we have this", ×2 per extra switch
  - 1.307ⁿ, best known before the claim (PPSZ), "we have this", ×1.307 per extra switch
  - 2^√n, subexponential example, "nobody has found this", the multiplier fades toward ×1
  - n³, polynomial: what P = NP would need, "nobody has found this", doubling the switches: ×8 work
- **Bets.** They are 3px bracket rails with end caps on the right edge: violet for P≠NP, blue for ETH. Each label sits above the rails with a dotted leader down to its rail. ETH's line is a full-width dashed rule labelled at its left end ("ETH's line: above it, a fixed multiplier per switch; below it, the multiplier fades", shortened on narrow widths). Nothing is shaded and no text says "down here".
- **Steps (three per mount, matching the plan).**
  - eth 1: the four candidates appear top to bottom (a short fade-in, under 1s).
  - eth 2: the P≠NP bracket appears; n³ is dimmed and marked "ruled out by P ≠ NP".
  - eth 3: ETH's line and the shorter ETH bracket appear; 2^√n gets "ruled out by ETH (not by P ≠ NP)". The footer reads "ETH's bracket is shorter: it's the bolder bet."
  - claim 1: the ladder as left at the end of s-04.
  - claim 2 (R-14): 2^√n and n³ slide down and the claim rung slides into the slot below ETH's line, above 2^√n. It reads "OpenAI's claimed algorithm (roughly)", tagged "claimed", "the multiplier fades toward ×1, slowly", with the flag "below ETH's line: if this holds, ETH's bet is lost". The P≠NP bracket stretches to cover the claim.
  - claim 3: n³ is highlighted with "still far below: P vs NP untouched".
- **Layout.** In every state, what changed in this step is at full ink and the rest is at .35 opacity. Content is anchored to the top (P-01). Both mounts reserve the claim slot, so the two ladders have the same geometry at a given size. The `aria-live` sentence describes each step.
- **Model check.** The order 2ⁿ > 1.307ⁿ > [ETH's line] > 2^(n/√log n) > 2^√n > n³ is correct as n grows. The multiplier wording matches the c-04 note: ETH's multiplier is fixed and above ×1, subexponential ones fade toward ×1, the claim's fades slowly (c-14), and n³ gives ×8 per doubling (c-05, c-06).

How a reader now learns what each rung means (H-05): the meaning is printed on the rung itself. They get its name, whether anyone has achieved it (the tag), and its cost in the one currency the wall taught: the multiplier per extra switch. Position means only "grows faster than everything below it", and the axis label says so. Magnitude ("302 digits") is left to the wall, as the plan says.

How I checked it: a Playwright script (/private/tmp/claude-501/-Users-m-workspace-eth/456ff478-f5ce-41e1-9832-377ffc71af12/scratchpad/lad2.mjs) runs 360×640, 740×360, 390×844 and 1280×800 in light and dark, plus 1024×768, 768×1024 and 1280×700 in light. It sets data-step and fires `didactician:step` for every step of both mounts and screenshots each one. It checks every visible text box for overlap and for spilling out of the mount. Result: 0 issues in all 72 states, no horizontal overflow, smallest text 11.2px (formula superscripts; labels and tags are 13px). I looked at contact sheets (shots2/s360.png, s390d.png, s740.png, sheetB.png in the scratchpad). `verify.mjs --widget w-ladder` gives PASS, and probe.mjs at 360 reads the claim mount's title. Acceptance:
- ac-06: title, axis label, per-switch multipliers, tags, both brackets with the ETH one visibly shorter, ETH's line drawn and labelled; no bars, digits, 2^√n note or "down here". Checked in the eth-3 screenshots at every size.
- ac-07: the claim rung sits below ETH's line and above 2^√n with its fading multiplier, n³ reads "P vs NP untouched", and the axis note is visible. Checked in the claim-2 and claim-3 screenshots.
- ac-10 (widget part): the 2^√n note reads "ruled out by ETH (not by P ≠ NP)" in eth 3.

concerns:
- **Narrower wording on small screens.** Labels drop to shorter wordings when the full one doesn't fit:
  - At 360 px: "P ≠ NP bets: up here", "ETH bets: up here", "ruled out by ETH only", "ETH's bet is lost", "×8 per doubling".
  - In compact mode the claim flag is "ETH's bet is lost".
  - Desktop (1280×800, a 483px mount) shows the full wordings except "ETH's line: above, … below, it fades".
  - The meaning still comes through on the figure: the claim rung sits visibly below the drawn line, and the P≠NP bracket still covers 2^√n.
- **Landscape spacing.** At 740×360 (a 198px mount) the compact layout drops the tag chips, as the spec allows. Rungs there are about 23px apart, below the ≥40px the spec sets for portrait. The spec's landscape clause doesn't give a spacing.
- **Short desktop windows.** On desktop windows under about 760px tall (for example 1280×700), the widget uses the narrow two-line layout with 13px type, because the three-line desktop rungs no longer fit.
- **Step-card wording (page builder).** Step cards shouldn't re-read the rung labels. If they quote the bracket labels, use "P ≠ NP bets: the best algorithm is somewhere up here" and "ETH bets: up here, a fixed multiplier per switch".
- **Step contract.** The widget assumes 3 steps per mount; any extra `data-step` is treated as step 3. The current index.html already has 3 eth steps.
- No libraries are loaded (vanilla JS/CSS); nothing to add to the manifest's `cdn`.

relaxed:
- none

dispositions:
- H-03: fixed (widget half). The figure is titled with the question "Where could the best possible 3-SAT algorithm sit?". Each rung is tagged "we have this", "nobody has found this" or "claimed", which answers "is this four algorithms' running times?". The rest is the page builder's prose (R-05).
- H-04: fixed (in-figure half). No lengths are left to compare, so "the gaps" has nothing to refer to. Order is the only encoding, and the axis names it.
- H-05: fixed (ladder half: length encoding removed). There are no bars or digit counts. Each rung states its per-switch multiplier in words. The "2^1000 = 302 digits" magnitude belongs to the wall, as the plan says.
- H-06: fixed. The vertical axis is drawn and labelled "work grows faster as you add switches (order as n gets large)". "Not anywhere down here" is gone. The bets are labelled brackets, and the ETH boundary is a drawn, labelled "ETH's line".
- H-07: fixed. The 2^√n vs n³ note is deleted, in the widget and in the live text.
- P-01 / P-02 / P-03 (round 1): not regressed. Content is anchored to the top. 740×360 fits in compact mode. 360×640 has no collisions in any state, light or dark.
