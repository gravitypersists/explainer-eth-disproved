status: done_with_concerns

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/site/index.html — the page: dark hero with a paper card, a "CLAIM · UNDER REVIEW" stamp and the reviewers' names; all 9 chapters, k-01 to k-08, ToC rail and mobile Contents. Maths is pre-rendered KaTeX, and each formula's source TeX is kept in a `data-tex` attribute.
- /Users/m/workspace/eth/explainers/eth-disproved/site/assets/page.css — page styles, using kit tokens only. The hero re-declares the kit's dark token values locally.
- /Users/m/workspace/eth/explainers/eth-disproved/site/assets/page.js — check commit/reveal, gates, scrolly step controller, w-switchboard with the gated sweep, w-race, the foundation diagram (s-05 build, s-07 crack) and the hero flair.
- /Users/m/workspace/eth/explainers/eth-disproved/site/assets/{tokens.css,components.css,toc.js,replay.js,arrow.js,widget.js} — kit files, copied unchanged.
- /Users/m/workspace/eth/explainers/eth-disproved/site/assets/vendor/katex/ — KaTeX 0.16.11 CSS plus the woff2 fonts, served locally.
- /Users/m/workspace/eth/explainers/eth-disproved/site/widgets/manifest.json — entries for all four widgets, plus a "contract" block for the two widget builders:
  - mount sizes;
  - the `data-step` attribute and `didactician:step` event, and the `data-gate-<id>` attribute and `didactician:gate` event;
  - the note that w-ladder has two mounts, so init both;
  - colour roles;
  - per-step specs, and the plan's model, shows and acceptance criteria quoted in full.

summary: I built all 9 segments from the plan with fresh prose. Check prompts, options and answers are verbatim. I built w-switchboard (the sweep is locked until k-01), w-race (hidden until k-05, sparse/general toggle, crossover and "constants set to 1" banner printed on the chart) and f-foundation. f-foundation is HTML blocks with kit arrows drawn over them and a vertical layout under 600px. In s-05 it builds the ETH layer, then the SETH layer, with a replay control. In s-07 it switches to state B only after k-06 is committed. The w-wall and w-ladder mounts are empty and reserved inside the kit's sticky scrolly. Their steps 4–5 in s-03 stay hidden until k-02. The hero is reordered on mobile so the reviewers' names are on the first screen (ac-01), and the byline reads "For novices in complexity theory" (d-04). The gate passes with `--phase page`: everything is PASS apart from the pending widgets. Measured reading time is about 11.7 min, and about 12.5 min once gated text and feedback are revealed. Page weight is 171–256 KB (it varies with font caching), 20 requests. I checked the screenshots at 360 and 1280 in light and dark mode, and clicked through the checks with probe.mjs.

concerns:
- **The k-05 "≈ 10^83" crossover doesn't match my recomputation.** Using x-03's formulas with natural logs, the general-bound crossover comes out at about n ≈ 10^79; I couldn't reproduce 10^83 with any log base. I kept the plan's 10^83 because the k-05 feedback is final text, and it's also the chart label. The accuracy reviewer should settle which figure is right. The sparse crossover computes to n ≈ 815; it is labelled "≈ 1,000", per the plan and x-03.
- **Myth card 3 now avoids colouring.** The c-24 note says the paper derives subexponential *counting* of graph colourings. So the card doesn't say "no new algorithm for colouring" (the mockup's draft did). Its question is "So Hamiltonian cycle and the rest are fast now?", and the s-07 prose makes no claim about colouring.
- **One framing sentence in s-05 isn't in facts.md.** It says researchers usually can't prove outright that a problem has no fast algorithm, and that doing so for 3-SAT would settle P vs NP. This follows logically from P vs NP being open, but no claim states it. The line "RSA and AES never rested on ETH" is the plan's own inference (c-25 note).
- **s-01 mentions "two other claimed results, in mathematics and physics".** The cut list allows this. facts.md doesn't carry it as a claim; it rests on the press headlines.
- **The designer's flag on w-ladder bar lengths is in the manifest.** The claim rung and 1.307^n come out at ≈114.5 vs ≈116.3 digits, and n^3 vs 2^√n at 9 vs 9.5 digits. The manifest recommends printing digit counts on the bars and keeping the two tiny bottom bars visible.
- **Editing the maths later needs care.** Plain-text edits to index.html are safe. A new or changed formula needs re-rendering: the render script is at /private/tmp/claude-501/-Users-m-workspace-eth/43f22efd-b780-40b3-af05-47ce6b26c027/scratchpad/katex/render.cjs. It is idempotent and reads `data-tex`, but it lives in the scratchpad, which is temporary.
- **Fonts come from Google Fonts.** The page loads Inter, JetBrains Mono and Source Serif 4 as a stylesheet from the CDN, so they're not a runtime data call. This is recorded under `page_cdn` in the manifest.
- **The gate's reading time undercounts.** It counts only visible text, so it misses gated steps, feedback and the race chart.

relaxed:
- none

dispositions:
- none (first build)
