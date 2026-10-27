# Learning plan: The Exponential Time Hypothesis, and OpenAI's claim that it is false

## Revision 2 changes

Plan v2, written in response to the site-1 human review (d-05: chat notes plus comments #1–#9, now H-01…H-09) and the scope amendment d-07 ("don't cut or tighten, let me cut in the human review, just keep tracking the read time"). Nothing was cut or tightened to pay for the additions. Every fix from round 1 (A-01…A-09, P-01…P-10) stays in place. In particular, edit distance still stands on OVC in s-07 (c-12, c-13), the claim stays "claimed, pending review", and press-only details stay marked "as reported".

**Estimated reading time:** about 15.5 minutes, up roughly 2 minutes from the built page's ~13.4. The additions are: 3-SAT named in plain words and placed in its family (+~0.9 min), a deliberate SETH beat with its own figure and a quick check (+~0.8 min), one more wall step with the time text moved into the step cards (+~0.2 min), and the rewritten ladder intro and labels (+~0.1 min net, since the 2^√n note goes). The timeline moves and is not cut. Per d-07, the user picks any cuts at the next human review, from `cut-list.md` → "If it runs long".

### Diagnosis: why the reader got lost at chapters 4–5

1. **The ladder encoded two things and explained neither.** The vertical order was an asymptotic ranking ("grows faster as n grows"). Bar length was a snapshot of magnitude at n = 1,000. The forbidden zones are defined by the ranking, but the only explained encoding was the snapshot, and at n = 1,000 the snapshot shows n³ and 2^√n as identical 10-digit bars (that's where the H-07 note came from). The reader correctly sensed that "down here" pointed at an axis nobody had labelled (H-06). "Four running times for 3-SAT" never said what question the four rows answered (H-03), and "the gaps" referred to bar-length differences the reader hadn't been told to look at (H-04, H-05).
2. **There was no frame for "which algorithm?"** Two rungs are real algorithms, and two are hypothetical speeds nobody has achieved. The page never said that ETH and P≠NP are *bets about where the best possible 3-SAT algorithm sits*. Without that, "forbids" has no subject.
3. **The class came after its example.** Graph colouring arrived as "Take graph colouring…" with no family to belong to. The reader had never been told that 3-SAT stands for a large family of problems that translate into each other. That is the whole reason a fact about 3-SAT's speed says anything about colouring.
4. **SETH was a parenthesis.** It appeared in two sentences and one disclosure, yet s-07's main check (k-06) and its myth both turn on SETH. Nothing in s-05 gave the reader a picture of what SETH adds beyond ETH, so s-07 asked them to reason about something they had only skimmed.
5. **The foundation figure animated a static fact.** It built itself in on scroll, with a replay button, but nothing *changes* in s-05. Motion implied a process the reader couldn't find.

The fix runs through one intuition the reader already owns from the wall: **the multiplier for each extra switch** (×2 for brute force). ETH, subexponential and SETH can all be stated in that one currency:
- ETH: "every algorithm pays at least some fixed multiplier per switch, maybe ×1.001, but fixed" (c-04: 2^{s·n} = (2^s)^n).
- Subexponential: "the multiplier per switch fades toward ×1 as n grows".
- SETH: "for wide rules, that fixed multiplier is pushed all the way up to ×2" (c-07).

### Change list

| # | Source | Change | Owner |
|---|---|---|---|
| R-01 | chat 1 (3-SAT grounding), d-05 "3-SAT … acronym" | s-02: name the puzzle in plain words first ("the satisfiability puzzle: find a setting of yes/no switches that satisfies every rule, where each rule says *at least one of these (up to three) must hold*"). Then introduce the label once: "Computer scientists call this **3-SAT**: SAT for *satisfiability*, 3 for *at most three switches per rule*." After that, "3-SAT" is used freely. k-01's feedback gains one line: checking a setting took a glance; finding one took trying them. That's "easy to check, hard to find", the property that defines the family (R-02). | page-builder |
| R-02 | chat 2 (class before example), d-05 "Take graph colouring … out of the blue" | s-02 gains a closing subsection, "One puzzle stands for a whole family", with a static figure **f-family**. It says three things, in reader terms: (a) many famous problems share 3-SAT's shape: an answer is quick to *check* but seems to need a search to *find* (computer scientists call the family NP); (b) the hardest of them, called NP-complete, translate into each other: any instance of one can be rewritten as an instance of another of about the same size; (c) so 3-SAT can stand for the family: a fast way to solve it would give fast ways to solve the others, and the reverse. The four members shown are graph colouring, Hamiltonian cycle (a route visiting every city once), vertex cover and clique (c-10). Graph colouring is introduced here, with a 5-dot picture, so s-05 can say "graph colouring, from chapter 2's family". **Facts needed:** see concerns F-1, F-2. | page-builder |
| R-03 | H-01 | w-wall: the canvas shows only n and the row count (plus the bar or digit block). Every "time" translation ("instant, by hand", "a laptop: well under a second", "tens of thousands of years on a billion computers", "×1,024: tens of millions of years", "more than the atoms in the universe") moves into that step's scrolling card. | widget-builder w-wall (canvas); page-builder (step-card text) |
| R-04 | H-02, chat 6 | w-wall goes linear (spec under ### w-wall). Steps 1–4 use **one linear bar per step, drawn at the true scale of the current step**: each new bar fills the canvas height, and the previous step's bar is redrawn at its real relative size beside it, collapsing to a hairline or to nothing, with the label "n = 20: 1,048,576 rows, too small to see at this scale". Steps 5–6 switch to the **number written out in full**, because no bar can hold it. Step 5: 2^1000 printed digit by digit (302 digits, monospace, wrapping into a dense block), labelled "2¹⁰⁰⁰ = a 302-digit number of rows". Step 6: 1.307^1000's integer part printed the same way under it (117 digits), labelled "1.307¹⁰⁰⁰ (best known) = a 117-digit number". A thin reference block of 81 digits is labelled "≈ atoms in the observable universe (10⁸⁰)". Width of the written-out number *is* its digit count, so the 1.307ⁿ comparison reads at a glance without any log axis. No log scale anywhere in w-wall. This also carries out H-05's suggestion ("2^1000 = 302 digits" drawn in, tied to width) in the figure where magnitude is the point. | widget-builder w-wall |
| R-05 | H-03, H-04, chat 3 | s-04 intro rewritten around one question: "Nobody knows the fastest *possible* algorithm for 3-SAT. Where could it sit?" The figure is introduced as "four possible answers, two we have and two nobody has found, sorted by how quickly the work grows as you add switches". The phrases "four running times" and "the gaps are to scale" are deleted. | page-builder (prose); widget-builder w-ladder (in-figure title) |
| R-06 | H-05, H-06, H-07, chat 3 | w-ladder redesigned (spec under ### w-ladder). **Bar lengths and digit counts are removed.** The ladder becomes an ordinal ranking with a labelled vertical axis: "↑ work grows faster as you add switches". The axis note reads "order as n gets large". Each rung shows its formula, a plain name, a "we have this" / "nobody has found this" tag, and the **per-switch multiplier** in words (×2, ×1.307, "fades toward ×1", "doubling the switches: ×8"). The P≠NP and ETH zones become **brackets on the right edge marking where each bet says the best 3-SAT algorithm must be** ("P ≠ NP bets: somewhere up here"; "ETH bets: up here, a fixed multiplier per switch"). A horizontal **"ETH's line"** separates exponential from subexponential. Vertical position now means one stated thing, so "down here" becomes "below ETH's line" with the line drawn. The 2^√n note (H-07) is deleted. Magnitude ("302 digits") lives in the wall (R-04), not the ladder. | widget-builder w-ladder |
| R-07 | chat 3, H-06 | s-04 states ETH in the per-switch currency: "ETH bets that every algorithm, however clever, pays at least some fixed multiplier for each extra switch. It might be tiny, ×1.001, but it never fades away." The formal statement stays collapsed. k-03 is unchanged, and its feedback now says "below ETH's line". | page-builder |
| R-08 | chat 4 (SETH's weight), d-05 "nonchalant" | s-05 gets a deliberate second beat, "A bolder bet: SETH", with its own subhead, static figure **f-seth** and quick check **k-09**. Content: ETH says the per-switch multiplier for 3-SAT stays above ×1. SETH says something much stronger: as rules get wider (4, 5, 10 switches per rule), the best possible multiplier climbs all the way to ×2, so for wide rules, brute force is essentially the best you can do (c-07). It's riskier: SETH claims more, so anything that breaks ETH breaks SETH too (c-08). Why the reader should keep it in mind, stated explicitly: "Hold on to SETH. The most famous result built on it, about edit distance, comes back in chapter 7." The edit-distance result is introduced as SETH's showcase (c-12) and worded as it was built (A-01/A-07 wording kept). The disclosure is renamed "Why does SETH imply ETH?" and keeps its text. | page-builder |
| R-09 | chat 5 ("What rests on ETH and SETH" animation not earned) | f-foundation becomes **static** in s-05: no build-in, no Replay control, no data-anim. It closes s-05 as a summary of both beats (it no longer introduces them). In s-07 the state change stays gated on k-06, but it's an **instant swap** to state B (≤200ms crossfade, flair only), followed by a two-option toggle "Before · If the claim holds" (default: If the claim holds) so the reader can compare. No auto-animation and no crack-drawing animation. State B content is unchanged from the built page: the edit distance chip reads "SETH basis lost · still stands on OVC", edit distance rests on OVC, the "unproven again — not disproved" chips use the neutral style (P-05), and the cracks sit behind the text (P-06). | page-builder |
| R-10 | chat 2, d-05 graph colouring | s-05 opens "Remember the family from chapter 2…", then graph colouring as the worked conditional. Its "the proof is a translation" sentence now points back to f-family's "translate into each other". | page-builder |
| R-11 | H-09 (disclosure affordance), page-wide | All `<details class="d-more">` disclosures get a single new pattern that looks clickable and is distinct from subheads (spec in ac-19): a full-width bordered box with a tinted fill and an 8px radius; a leading chevron ▸ that rotates to ▾ when open; a label in UI sans at body size, weight 500, prefixed with a small muted "More ·" kicker (e.g. "More · What the paper actually proves"); a trailing muted hint "show" / "hide"; hover and focus raise the border to the accent colour; min-height 44px (P-08). There's no left rule, and no heading font or heading size. Subheads (h3) never have a border, fill or chevron. This applies to all five disclosures. | page-builder |
| R-12 | H-09 (timeline placement) | The timeline strip leaves s-06 (it interrupted the statement → ladder flow and read as the disclosure's content). It **moves to s-08** as a compact provenance row titled "How the claim surfaced", placed directly above the review-status card, where dates bear on "how sure can we be". The content and "as reported" marks are unchanged (c-17, c-15, c-21; P-10 wording). It is not cut, per d-07. It's listed as an option in the cut order. | page-builder |
| R-13 | H-08 | ToC re-skin (visual rules only). Typeface: the page's UI sans at 14px, not mono. No `└` glyphs. Each entry is a chapter number in tabular numerals (muted) followed by the full title, which **wraps to two lines and is never truncated**. Current chapter: full ink, weight 600, a 3px accent bar on the left edge spanning the entry, a tinted background pill, and its number in the accent colour. Visited chapters use the secondary ink. Upcoming chapters use the muted ink. The progress indicator becomes a thin 4px accent track (no ASCII blocks) with "Chapter 4 of 9 · ~15 min" under it in UI sans. On mobile, the collapsed Contents summary reads "Contents · Chapter 4 of 9: The bet" and updates with scroll. The rail's title uses the page's display font at the rail's size. | page-builder |
| R-14 | A-04 (kept), R-06 | In w-ladder's "claim" state, the claim rung sits *by order*, between 1.307ⁿ and 2^√n and below ETH's line. Its label reads "OpenAI's claimed algorithm, roughly 2^(n/√log n): the multiplier fades toward ×1, slowly". The axis note "order as n gets large" covers A-04's concern, since the rung no longer claims a magnitude at n = 1,000. k-05 and w-race still carry the "constants unknown" caveat. | widget-builder w-ladder |
| R-15 | chat 4, R-08 | k-09 added (s-05, compare): "Which is the riskier bet?" It primes k-06. o-3's checks gain k-09. | page-builder |

Owners at a glance: **widget-builder w-wall**: R-03 (canvas), R-04. **widget-builder w-ladder**: R-05 (in-figure title), R-06, R-14. **page-builder**: everything else (prose for s-02…s-06, f-family, f-seth, static f-foundation, disclosures, timeline move, ToC, k-09).

## Shape

Scrollytelling, presented in nine chapters. The topic is a story with a fixed order: a puzzle and its family, the wall it hits, the bet that the wall is permanent, what was built on the bet (and on a bolder second bet), the claim that breaks it, the fallout, and how far to trust it. Each chapter needs one strong visual. Sticky canvases with scroll-advanced steps suit that, and they match the user's request for something flashy and presentational. Interaction stays light and deliberate: one toggle widget for the toy puzzle, plus predict-then-reveal cards at the key ideas and at each known misconception. That keeps the piece Constructive, so it doesn't become something the reader just watches. I rejected a full-page explorable (for example, a SAT-solver sandbox where the reader races algorithms). The reader would spend the time learning the tool instead of the argument, the user explicitly asked for presentation over exploration, and the actual speedup of the new algorithm can't be shown at any n a browser can run (x-03).

One currency runs through chapters 3–6: **the multiplier for each extra switch**. The wall makes ×2 visceral, the ladder ranks candidate speeds by it, ETH and SETH are both stated in it, and the claim is "a multiplier that fades". Three visuals recur, so the reader learns each once. The **ladder** (s-04) gains its claim rung in s-06. The **foundation diagram** (s-05, static) changes state in s-07. The 3-switch puzzle (s-02) is the "3-SAT" every later chapter refers to. Motion is reserved for things that change: the wall's growth and the ladder's steps. Static facts (the family, SETH's scale, the foundation) are static figures.

toc: yes — nine chapters and about 15 minutes; the rail, re-skinned per R-13, shows the current chapter clearly and helps a reader who returns to "what follows" or "is it true", which HN readers will want to jump to.
tokens: default kit tokens. The builder may use a dark hero and large display numerals for the "flashy" brief, but only through the kit tokens.
mobile: sticky canvases are capped at 55vh with their scroll steps below; the active step stays below the canvas while read (P-01 fix kept). The ladder uses a fixed rung pitch (≥40px) with labels on one or two lines, so it never overprints (P-02/P-03). f-family, f-seth and f-foundation have vertical variants under ~520px. Check cards and the switchboard stack to one column. Nothing depends on hover.

Framing rule (d-02) for the whole piece: the result is always "OpenAI's claim" or "the claimed algorithm", never "the proof that ETH is false". Headings follow suit. Dates and the "practical speedups need further research" line are secondary sources (c-17, c-24 note) and are attributed as reported by press. The piece never states a count of papers that depend on ETH. It says "many".

Estimated reading time: ~15.5 min (built v1 page measured ~13.4 min; brief budget 12 min, relaxed by d-07 until the user cuts at the next review).

## Objectives

- o-1: Explain what 3-SAT is with a concrete example, and why brute force takes ~2^n time as variables grow. — checks: k-01, k-02
- o-2: State ETH in plain words and distinguish it from P≠NP. — checks: k-03, k-08
- o-3: Explain why ETH matters (conditional lower bounds rest on it, and on the bolder SETH) and give one or two examples of what it underwrites. — checks: k-04, k-09, k-06, k-08
- o-4: Explain what OpenAI claims, its verification status, and what would and would not follow if it holds (P vs NP, SETH, crypto, practical computing). — checks: k-05, k-06, k-07, k-08

## Segments

### s-01 — A paper with a blunt title
intent: Hook the reader with the claim and its unusual circumstances, framed from the first line as a claim under review, and promise the four questions the page answers.
objectives: o-4
claims: c-15, c-16, c-18, c-21, c-22
readiness: novice · interactivity: low (a title, who made it, who is checking it) · max-elements: 2
mode: concrete hook (a real artifact) → roadmap · blueprint: none
layout:
  contiguity: adjacent — the paper-title card sits beside or above the standfirst on every breakpoint
  pacing: continuous
  redundancy: the roadmap lists the four questions once; it does not preview the answers
  scaffold: none
ux: The reader reads and scrolls. At 360px the title card is full width above the text, and the hero flair (bits flipping behind the title) stays under 1.5s and is decorative only. Unchanged from v1.
figure: Hero: unchanged from the built page (document card, "CLAIM · UNDER REVIEW" stamp, three-item meta strip: found by / checked by / being reviewed by).
widget: none
checks: none

### s-02 — The puzzle: three switches, four rules
intent: Give the reader a satisfiability puzzle they can solve by hand, name it in plain words before the "3-SAT" label, and show that it stands for a whole family of problems that are easy to check and hard to find, so later chapters can say "graph colouring" without it coming out of nowhere.
objectives: o-1, o-3
claims: c-01, c-02, c-10
readiness: novice · interactivity: low (switch settings, which rules are lit; then: family members, "check vs find", "translate into each other") · max-elements: 3
mode: concrete example → reader manipulation → predict-then-reveal → name it (plain words, then the label once) → generalise to the family · blueprint: none
layout:
  contiguity: inline — each rule lamp shows its own clause text; in f-family, each problem card carries its own one-line "check: … / find: …" text and the translation arrows are labelled on the arrows
  pacing: step-revealed; the brute-force sweep is locked until k-01 is committed; the family subsection follows the naming paragraph
  redundancy: no prose restating which rules are lit; the family prose states the three ideas once and the figure shows them, without re-listing the cards in prose
  scaffold: collapsed "How to read NOT and OR" for readers unsure of the notation (new disclosure style, R-11)
ux: The reader flips three switches, predicts (k-01), runs the 8-row sweep, then reads the naming paragraph and the family subsection with its static figure. At 360px the switchboard is as in v1, and f-family stacks the four cards 2×2 around a central "3-SAT" card, with the arrows becoming a single labelled bracket.
figure: f-family (static SVG, page builder). A central card, "3-SAT · the switches puzzle", with a tiny 3-switch glyph. Four cards around it, each with a small pictogram and two lines: **Graph colouring** (a 5-dot network with 3 colours: "check: look at each link · find: try colourings"); **Hamiltonian cycle** (dots with a looping route: "a route through every city exactly once"); **Vertex cover** ("pick a few dots that touch every link"); **Clique** ("find k dots all linked to each other"). Two-headed arrows between each card and the centre, labelled once on the figure: "rewrite one as the other, about the same size". A header band across the top: "Quick to check · seems to need a search to find". The caption names the family once: "Computer scientists call this family NP; the members that all translate into each other are NP-complete." No counts and no claims about practical uses.
widget: w-switchboard (complexity: low) — three toggles, four live clause lamps, a commit-gated brute-force sweep over the 8 rows (unchanged)
checks: k-01

Draft wording for the naming paragraph (page builder writes the final): "What you just solved is a *satisfiability* puzzle: a set of yes/no switches and a list of rules, each saying *at least one of these must hold*, and the question of whether some setting satisfies every rule at once. When each rule mentions at most three switches, computer scientists call it **3-SAT**: SAT for satisfiability, 3 for three per rule. The only sure-fire method we have met is the table: try every setting. With n switches that's 2ⁿ settings (c-02)."

Draft wording for the family subsection, "One puzzle stands for a whole family": "Notice something about what you just did. *Checking* a setting took a glance: go down the rules. *Finding* one meant trying settings. Many famous problems share that shape: quick to check, apparently a search to find. Colour a map so no two neighbours match. Plan a route that visits every city once. And the hardest of them can be rewritten as one another: any graph-colouring problem can be turned into a 3-SAT formula of about the same size, and back again. That's why 3-SAT matters far beyond switches. Its own paper calls it 'the canonical NP-complete problem' (c-01): a fast way to solve it would hand you fast ways to solve the whole family." (Needs F-1, F-2 for the NP / NP-complete / translation statements.)

### s-03 — The doubling wall
intent: Make 2^n look as daunting as it is on a linear scale, and show that even the best known algorithm (~1.307^n) only shortens the number; it doesn't escape the wall.
objectives: o-1
claims: c-02, c-03
readiness: novice · interactivity: low (n, rows to check, how big that is) · max-elements: 3
mode: scroll-driven worked example with real numbers · blueprint: B1
layout:
  contiguity: sticky — the canvas shows n, the row count and the bar or digit block; each step card beside it carries that step's time translation (R-03); the canvas holds no time text
  pacing: step-revealed by scroll (6 steps); step 4 (n=110) appears only after k-02 is committed
  redundancy: step cards give the interpretation (time, atoms); they do not repeat the row count printed on the canvas
  scaffold: none
ux: The reader scrolls and the canvas advances through n = 3, 20, 100, 110 and 1000, then the 1.307ⁿ comparison. Each step makes the previous one look like nothing. At 360px the canvas is sticky at the top (≤55vh) with the step cards scrolling under it; the digit blocks use 11–12px monospace and wrap to the canvas width.
figure: none beyond the widget
widget: w-wall (complexity: high) — sticky linear-scale canvas; bars that re-scale each step so the old step collapses to a hairline, then the number written out in full (302 vs 117 digits)
checks: k-02

Step cards (draft wording; the time text now lives here): (1) n = 3: "8 rows. Instant: you just checked them by hand." (2) n = 20: "Seventeen more doublings. About a million rows: a laptop does it in well under a second. And look what happened to your 8 rows." (3) n = 100: "Now the bar for 20 switches has vanished. Checking these rows with a billion computers, each doing a billion rows a second, takes tens of thousands of years." [k-02] (4) n = 110: "Ten more switches, 1,024 times the work: tens of millions of years on the same machines." (5) n = 1000: "No bar can hold this, so here is the number written out: 302 digits. There are only about 10⁸⁰ atoms in the observable universe, an 81-digit number." (6) "Cleverer algorithms exist. The best known before OpenAI's claim, from the PPSZ family of randomised algorithms, takes about 1.307ⁿ steps. At n = 1000 that's a 117-digit number: far shorter, still far beyond the atoms. A smaller multiplier per switch, ×1.307 instead of ×2, but still a fixed multiplier. A lower wall, not a way around it." The last sentence sets up s-04's currency.

### s-04 — The bet: "you can't get under the wall"
intent: Frame the question "where could the best possible 3-SAT algorithm sit?", rank four candidate answers by how fast their work grows, and show ETH and P≠NP as bets about that position, with ETH the stronger, narrower bet.
objectives: o-2
claims: c-04, c-05, c-06, c-03
readiness: novice · interactivity: high (the ranked candidates, per-switch multiplier, two bets) · max-elements: 3
mode: question → concrete ranked candidates (each with its per-switch multiplier) → rule (ETH in per-switch words) → apply (k-03) · blueprint: B1
layout:
  contiguity: sticky — the ladder stays in view; the axis label, every rung's per-switch multiplier and both bet brackets are printed on the figure itself; no legend
  pacing: step-revealed by scroll (3 steps); k-03 sits after the final step
  redundancy: the prose states ETH once in per-switch words; the ladder shows where the line falls; the step cards don't re-read the rung labels
  scaffold: collapsed "The formal statement" (some s>0 such that every algorithm needs 2^(s·n); no 2^{o(n)} algorithm), new disclosure style
ux: The reader reads the framing question, then scrolls three ladder states, then answers k-03. At 360px the ladder is vertical with a fixed rung pitch (≥40px), brackets drawn as a thin rail on the right edge with labels above the top rung of each bracket, sticky at ≤55vh, labels ≥13px.
figure: none beyond the widget
widget: w-ladder (complexity: high) — ranked candidate speeds for the best possible 3-SAT algorithm, state "eth"
checks: k-03

Draft prose (before the ladder): "Clever algorithms have lowered the multiplier per switch, from ×2 to about ×1.307, but every one found so far still pays *some* fixed multiplier for each extra switch. Is that a law, or have we just not been clever enough? Nobody knows the fastest *possible* algorithm for 3-SAT. Here are four candidate answers, sorted by how quickly the work grows as you add switches. Two are algorithms we have. Two are speeds nobody has achieved." Then the ETH statement (R-07): "In 1999, Russell Impagliazzo and Ramamohan Paturi made a precise bet, the **Exponential Time Hypothesis (ETH)**: every algorithm for 3-SAT, however clever, pays at least some fixed multiplier for each extra switch. It might be tiny, ×1.001, but it never fades away. Nobody has proved it. It's an assumption, a foundation stone researchers chose to build on." Then the P≠NP contrast through the steps.

### s-05 — What was built on the bet
intent: Show that ETH is load-bearing, using a member of the family the reader already met; then introduce SETH deliberately as a bolder second bet, say exactly what it adds and why it matters later, and close with a static summary of both foundations.
objectives: o-3
claims: c-10, c-11, c-07, c-08, c-12
readiness: novice · interactivity: high (a conditional theorem's form; ETH vs SETH in per-switch terms; one example on each) · max-elements: 3
mode: worked example of one conditional theorem (callback to f-family) → explain (k-04) → second bet in the same currency (f-seth) → compare (k-09) → static summary (f-foundation) · blueprint: none
layout:
  contiguity: inline — f-seth prints each bet's claim on the scale next to its bracket; on f-foundation each theorem block carries its own statement and its arrow is labelled "unless … fails"
  pacing: continuous, in two beats under two subheads ("A link, not a proof" / "A bolder bet: SETH"); f-foundation is static (R-09), with no build-in and no Replay
  redundancy: f-foundation summarises; the prose doesn't re-list its blocks; the SETH beat states SETH once in words, and f-seth shows it
  scaffold: collapsed "Why does SETH imply ETH?" (new disclosure style)
ux: The reader reads the colouring example (with a back-reference to chapter 2's family), answers k-04 (think-then-reveal), reads the SETH beat with f-seth, answers k-09, and sees the static foundation summary. At 360px f-seth becomes a vertical scale and f-foundation is vertical (bases at the bottom).
figure: f-seth (static SVG, page builder): a horizontal scale titled "Multiplier per extra switch, for the best possible algorithm", running from ×1 (left, "no growth at all") to ×2 (right, "brute force"). A tick at ×1.307 labelled "best known for 3-SAT today" (c-03). Two brackets above the scale. **ETH** (for 3-SAT): a bracket from "just above ×1" to ×2, labelled "somewhere above ×1, a fixed amount". **SETH** (for wider rules): an arrow sliding right toward ×2 across three faint markers labelled "3 per rule · 5 per rule · wider…", ending at ×2 with the label "as rules get wider, the best multiplier is pushed up to ×2: brute force is about the best possible". A clear "schematic" note on the figure: only ×1.307 is a real value; the k-markers are positions for illustration (c-07 gives no per-k values). Underneath: "SETH claims more, so it's the riskier bet. If ETH falls, SETH falls with it" (c-08). f-foundation (state A, static): two foundation blocks at the bottom, "ETH" as the base and "SETH (bolder) · SETH ⇒ ETH" on top of it. Theorem blocks above them, connected by labelled arrows: on ETH, "Graph colouring, Hamiltonian cycle, vertex cover: no 2^{o(n)} algorithm" (c-10) and "k-Clique: no n^{o(k)} algorithm, so brute-force search is essentially optimal" (c-11); on SETH, "Edit distance (a close relative of what diff computes): no O(n^{2−δ}) algorithm" (c-12). A faint "… and many more" block. No count. Title: "What rests on ETH and SETH". No Replay. The same figure reappears in s-07 in state B.
widget: none
checks: k-04, k-09

Draft prose, beat 1 "A link, not a proof": "Researchers usually can't prove outright that a problem has no fast algorithm. (If they could do it for 3-SAT, P vs NP would be settled.) What they can prove is a link. Remember chapter 2's family, and graph colouring in it? Because colouring and 3-SAT can be rewritten as one another at about the same size, a result reads: *Graph colouring has no 2^{o(n)} algorithm on n-vertex graphs, unless ETH fails.* …" Beat 2 "A bolder bet: SETH": "ETH only says 3-SAT's multiplier never fades to ×1. There is a much bolder bet, the **Strong Exponential Time Hypothesis (SETH)**: let the rules get wider, 4, 5, 10 switches each, and the best possible multiplier climbs all the way to ×2. For wide rules, brute force is essentially unbeatable. Bolder bets buy stronger results. The most famous: Backurs and Indyk proved that edit distance, the measure of how different two strings are and a close relative of what diff computes, can't be computed much faster than quadratic time, unless SETH fails (c-12). Hold on to SETH and edit distance; they come back in chapter 7." (Give no year or author for SETH: facts.md has neither.)

### s-06 — The claim
intent: State precisely what OpenAI claims (the running time, counting, fixed k) and show where it lands on the ladder: below ETH's line, nowhere near polynomial.
objectives: o-4
claims: c-14, c-15, c-16, c-09, c-03
readiness: novice · interactivity: high (the new bound's shape, its rank vs 1.307^n, the meaning of "subexponential") · max-elements: 3
mode: precise statement → place on known structure (ladder) → predict-then-reveal (k-05) → growth chart · blueprint: B1
layout:
  contiguity: sticky — the ladder (state "claim") stays in view while the new rung slides in below ETH's line and is labelled; the growth chart labels each line at its end
  pacing: step-revealed; w-race appears only after k-05 is committed
  redundancy: the formula appears once, set in display maths with its symbols introduced first; the chart caption carries the "constants set to 1, illustrative" condition, not the prose
  scaffold: collapsed "What the paper actually proves", in the new disclosure style (R-11) so it can't be read as a label for what follows; no timeline after it (R-12)
ux: The reader reads the statement (with the disclosure visibly a clickable box), scrolls the ladder's three claim steps, commits k-05, then toggles the growth chart between "sparse formulas" and "general bound". At 360px the ladder is vertical and sticky; the chart is full width, about 320px tall, with the toggle below it.
figure: none (the timeline strip moved to s-08, R-12)
widget: w-ladder (complexity: high) — same widget in state "claim"; w-race (complexity: low) — log-scale growth chart of 2^n, 1.307^n and the claimed bound, gated on k-05 (unchanged from the built page, including the A-02 ≈10^79 and A-06 ≈800 fixes)
checks: k-05

Prose change: the per-switch reading joins the statement. "In per-switch terms, the claimed algorithm's multiplier fades toward ×1 as n grows, very slowly, but it does fade. That is exactly what ETH bet could never happen."

### s-07 — If it holds: what falls, what stands
intent: Work through the consequences one at a time: ETH-based hardness results become unproven (not false), SETH falls too, some bounds (edit distance among them) survive via OVC, P vs NP stays open, and crypto is not broken.
objectives: o-3, o-4
claims: c-08, c-09, c-12, c-13, c-06, c-24, c-25, c-10
readiness: novice · interactivity: high (conditional theorem status, ETH→SETH implication, surviving weaker assumptions) · max-elements: 3
mode: predict-then-reveal (k-06) at the SETH misconception → misconception confrontation ×3 → contrasting cases (falls vs stands) · blueprint: B4
layout:
  contiguity: inline — the foundation diagram (state B) marks each theorem block with its status on the block itself
  pacing: gated on k-06; the diagram swaps instantly to state B after the commit (R-09), then a "Before · If the claim holds" toggle; then three myth cards
  redundancy: each myth card states the misconception once, then the counter; no recap paragraph repeats the cards
  scaffold: none
ux: The reader commits k-06 (now primed by s-05's SETH beat and k-09), sees the diagram switch to state B, can toggle back to "Before" to compare, then reads three myth/reality cards. At 360px the diagram is vertical, the toggle is a full-width two-segment control (44px), and the cards stack.
figure: f-foundation (state B, static, unchanged content from the built page): ETH and SETH read "refuted (claimed)", with cracks drawn behind the text. Theorem blocks keep their statements and carry the neutral chip "unproven again — not disproved". The edit distance block reads "SETH basis lost · still stands on OVC" and is drawn resting on the third base, "Orthogonal Vectors Conjecture (not refuted)", which also carries "Longest common subsequence, regex matching: lower bounds still stand" (c-12, c-13). Myth cards as built (A-09 wording kept).
widget: none
checks: k-06

### s-08 — Is it true? What "verified" does and doesn't mean
intent: Equip the reader to read the verification status correctly: what Lean guarantees, what it can't, how the claim surfaced, who is reviewing, and what to watch for.
objectives: o-4
claims: c-17, c-18, c-19, c-20, c-21, c-22, c-23, c-15
readiness: novice · interactivity: low (what Lean checks; what humans must check; who; when) · max-elements: 3
mode: contrasting cases (the machine's job vs the humans' job) → provenance → explain (k-07) → watch-list · blueprint: B4
layout:
  contiguity: adjacent — a two-column "Lean checks / humans must still check" table, with each row's evidence beside it; the timeline row sits directly above the review-status card it leads into
  pacing: continuous; k-07 sits between the review card and the watch-list
  redundancy: the table is the explanation; the prose adds only the reviewers' own words (c-22) and the base-rate note (c-23)
  scaffold: collapsed "The exact formal bound" (new disclosure style)
ux: The reader reads the table, then the "How the claim surfaced" timeline row and the review-status card, commits k-07 (think-then-reveal), then reads the watch-list. At 360px the table becomes two stacked panels, and the timeline becomes a vertical 4-item list.
figure: Two-column table as built. New position for the **timeline** (moved from s-06, R-12): a compact row titled "How the claim surfaced": "16 Oct — model produces the claimed disproof (as reported) · 17 Oct — formalised in Lean (as reported) · 25 Oct — date on the manuscript · 26 Oct — made public; review group announced", with the source note that the first two dates come from press accounts (c-17, c-15, c-21). Then the review-status card and quote as built (c-21, c-22).
widget: none
checks: k-07

### s-09 — The whole story in five statements
intent: Close with interleaved retrieval across all four objectives, then a four-line recap.
objectives: o-2, o-3, o-4
claims: c-06, c-14, c-25, c-08, c-10
readiness: novice · interactivity: low (one statement at a time) · max-elements: 1
mode: interleaved retrieval (sorting) → recap · blueprint: none
layout:
  contiguity: inline — each statement's feedback appears in place under that statement
  pacing: each statement is committed independently; the recap is always visible (not gated)
  redundancy: the recap is four lines and does not re-explain
  scaffold: none
ux: Unchanged from the built page (A-05 wording kept). One recap line changes to the per-switch currency: "ETH bet that every 3-SAT algorithm pays a fixed multiplier per extra switch; SETH bet that for wide rules that multiplier is ×2."
figure: none
widget: none
checks: k-08

## Widgets

### w-switchboard
segment: s-02
complexity: low
blueprint: none
model: Unchanged from v1. Variables x, y, z ∈ {T, F}. Clauses (x-01, c-01): C1 = (x OR y OR z), C2 = (NOT x OR y), C3 = (NOT y OR z), C4 = (NOT z OR NOT x). Satisfying settings are exactly (F,F,T) and (F,T,T). Brute force: 2^3 = 8 rows (c-02).
reader_does: Flips the toggles freely, commits k-01, then presses "Try all 8" for the sweep (about 250ms per row), with a replay control.
shows: As built. The default state is x=T, y=F, z=F, giving "3 of 4 rules satisfied".
size: desktop: prose-width column (~680px), ~420px tall including the table; mobile: full width, switches in a row, lamps 2×2, table below, ~640px tall
acceptance: ac-02, ac-03

### w-wall
segment: s-03
complexity: high
blueprint: B1
model: Six steps (c-02, c-03, x-02). Rows R(n) = 2^n: n=3 → 8; n=20 → 1,048,576; n=100 → 1,267,650,600,228,229,401,496,703,205,376 (≈1.27×10^30); n=110 → R(100)×1,024 (gated on k-02); n=1000 → 2^1000, an exact 302-digit integer (compute with BigInt). Step 6 adds ⌊1.307^1000⌋, a 117-digit integer (compute exactly as 1307^1000 / 1000^1000 with BigInt, then floor; c-03, x-03), plus a reference "10^80 atoms" (x-02), shown as "1" followed by 80 zeros (81 digits). **Linear scale throughout; no log axis anywhere.** Steps 1–4 (bar mode): the canvas's full bar height H always equals the current step's R(n). The previous step's bar is drawn beside it at height H·R(prev)/R(n): n=20 shows the n=3 bar at 8/1,048,576·H (sub-pixel); n=100 shows the n=20 bar at ~10^-24·H; n=110 shows the n=100 bar at H/1,024 (~0.4px at 400px). Any bar under 1px is drawn as a 1px hairline with a dashed outline marking where it would be, and labelled "n = 20 · 1,048,576 rows · too small to see at this scale". Steps 5–6 (digit mode): the bar can't hold the number, so the canvas shows the number itself.
reader_does: Scrolls. The steps advance the canvas. At the n=100→110 boundary the step is locked until k-02 is committed (the check card sits in the step column).
shows: Always on canvas: "n = 100 switches" and the row count (in full with thousands separators up to n = 110, since the full-length number is itself part of the effect; the n=100 and n=110 counts may wrap). No time text on the canvas (H-01): times are in the step cards. Bar mode: the transition is the effect. The new bar rises to full height (≈700ms ease-out) while the old bar visibly *shrinks* to its true relative size (same duration), so each step crushes the last. A step label on each bar ("n = 100"). Digit mode, step 5: the 302 digits of 2^1000 typeset in monospace at a size that fills the canvas width in a dense block, under a label "2¹⁰⁰⁰ = a 302-digit number of rows", with the bracket "302 digits" spanning the block. Step 6: below it, the 117 digits of ⌊1.307^1000⌋ in the same type size and line width, labelled "1.307¹⁰⁰⁰ (best known before the claim) = a 117-digit number", and a thin 81-digit "10⁸⁰ ≈ atoms in the observable universe" line for reference. Because the type and line width are shared, block area is proportional to digit count, and the reader compares 302 vs 117 vs 81 at a glance. Caption on canvas: "Smaller multiplier per switch, still a fixed one." The current step's elements are at full ink; earlier ones are dimmed. Steps 5–6 are a state change, not a finite animation; the bar transitions are ≤700ms flair, so there's no replay control (I4 n/a).
size: desktop: sticky canvas 50% width × ~70vh beside the scrolling steps (≥900px); the digit block at 302 digits fits ~40 chars × 8 lines at ~15px mono; mobile: sticky canvas full width ≤55vh, digit block at 11–12px mono (~30 chars/line, ~10 lines for 302 digits), no horizontal overflow (I1), steps scroll below
acceptance: ac-04, ac-05

### w-ladder
segment: s-04, s-06
complexity: high
blueprint: B1
model: An **ordinal** ranking of candidate growth rates for the best possible 3-SAT algorithm, ordered by asymptotic growth (x-04). The order is the only geometry: rungs sit at a fixed pitch, and no length encodes magnitude. Top to bottom: 2^n ("brute force", tag "we have this", per switch "×2"; c-02) · 1.307^n ("best known before the claim (PPSZ)", tag "we have this", per switch "×1.307"; c-03) · **ETH's line** · [claim rung, hidden in state "eth": "OpenAI's claimed algorithm, roughly 2^(n/√log n)", tag "claimed", per switch "fades toward ×1, slowly"; c-14] · 2^√n ("subexponential example", tag "nobody has found this", per switch "fades toward ×1"; c-06) · n³ ("polynomial: what P = NP would need", tag "nobody has found this", "doubling the switches: ×8 work"; c-05). Bets (c-04, c-05): P≠NP says the best algorithm is somewhere above the polynomial rung; ETH says it is at or above ETH's line (a fixed multiplier per switch, c^n for some c>1). Two mount states: data-state="eth" (s-04) and data-state="claim" (s-06).
reader_does: Scrolls through steps. eth state: (1) "Four candidates" — rungs appear top to bottom with the axis; (2) "P ≠ NP's bet" — a bracket on the right edge spans every rung above n³, labelled "P ≠ NP bets: the best algorithm is somewhere up here"; n³ is dimmed with "ruled out by P ≠ NP"; (3) "ETH's bet" — ETH's line is drawn between 1.307ⁿ and 2^√n, labelled "ETH's line: above it, a fixed multiplier per switch; below it, the multiplier fades". A second, visibly shorter bracket spans only the rungs above the line, labelled "ETH bets: up here". 2^√n is dimmed with "ruled out by ETH (not by P ≠ NP)". A footer: "ETH's bracket is shorter: it's the bolder bet." claim state: (1) the ladder as left in s-04; (2) the claim rung slides in below ETH's line, with a flag "below ETH's line: if this holds, ETH's bet is lost"; (3) n³ is highlighted with "still far below: P vs NP untouched".
shows: Left edge: a vertical axis arrow labelled "↑ work grows faster as you add switches" with the small note "order as n gets large". Each rung is one row: formula (display size), plain name, tag chip, and the per-switch phrase in muted text, with no bars or digit counts (H-05, H-07). Brackets are a 3px rail with an end cap at each end, drawn to the right of the rungs, with the label above the rail's top. ETH's line spans the full width as a dashed rule in the ETH colour, labelled at its left end. Nothing is shaded as a band, and no text says "down here". The current step's change is at full ink and the rest at .35 opacity. A title in the figure: "Where could the best possible 3-SAT algorithm sit?"
size: desktop: sticky canvas ~55% width × ~70vh, steps beside it, rung pitch ~72px; mobile: vertical, sticky ≤55vh, fixed rung pitch ≥40px with the per-switch phrase on a second line, brackets as a right-edge rail, labels ≥13px, no overprinting at 360×640 or 740×360 (the landscape layout drops the tag chips before shrinking type)
acceptance: ac-06, ac-07, ac-10

### w-race
segment: s-06
complexity: low
blueprint: none
model: Unchanged from the built page (log10 of the step count against n on a log-scale x-axis, n=10 to 10^6, constants set to 1; sparse crossover ≈ 800; general crossover ≈ 10^79, shown as an edge arrow; x-03, A-02, A-06).
reader_does: Revealed after k-05. Toggles sparse/general. No hover needed.
shows: As built: three lines directly labelled at their ends, the marked crossover, and the in-chart banner "Illustrative: real constants are unknown and could be large." The caption states that both axes are logarithmic. This is the one log chart left on the page; it's the only honest way to fit these curves.
size: desktop: wide (≤960px) × 360px; mobile: full width × 320px, toggle below
acceptance: ac-08, ac-09

## Comprehension items

### k-01
segment: s-02
objective: o-1
type: predict
prompt: There are 2 × 2 × 2 = 8 ways to set the three switches. How many of them light all four rules?
options: None of them / Exactly 2 / About half (4) / All 8
feedback: Exactly 2: (x,y,z) = (F,F,T) and (F,T,T). The only way to be sure was to check every setting, which is what the sweep does. That's brute force. Notice the lopsidedness: checking one setting is a glance, but finding a good one meant trying them. With 3 switches it's 8 rows; every extra switch doubles the table.

### k-02
segment: s-03
objective: o-1
type: predict
prompt: Brute force on 100 switches already needs about 10^30 checks. Add 10 more switches. How much more work is that?
options: About 10% more / About 10× more / About 1,000× more
feedback: About 1,000× (2^10 = 1,024). The tempting answer is 10%, because 110 is only 10% bigger than 100. But each switch doubles the table, so 10 switches double it ten times. That is what "exponential" means in practice: adding a little input multiplies the work.

### k-03
segment: s-04
objective: o-2
type: apply
prompt: Suppose someone proved that 3-SAT can be solved in about 2^√n steps. Which assumption would be broken?
options: P ≠ NP (so P = NP) / ETH only / Both / Neither
feedback: ETH only. With 2^√n the multiplier per switch fades toward ×1, so it sits below ETH's line, exactly where ETH bet nothing could be. But it still grows faster than any polynomial, so it stays above the n³ rung, and P ≠ NP is untouched. That's why a broken ETH, by itself, says nothing about P vs NP (c-06). It's the trap headlines fall into.

### k-04
segment: s-05
objective: o-3
type: explain
prompt: A paper proves "graph colouring has no 2^{o(n)} algorithm, unless ETH fails." In your own words: what did it actually prove, and what would make the statement stop telling us anything about hardness?
model_answer: It proved a link, not hardness itself: any much-faster colouring algorithm could be turned into a much-faster 3-SAT algorithm. Colouring is "hard" only as long as ETH is true. If ETH fails, the statement is still true, but it no longer shows that colouring is hard.
feedback: (think-then-reveal; the model answer is the feedback)

### k-09
segment: s-05
objective: o-3
type: compare
prompt: ETH and SETH are both unproven bets. Which one is riskier, that is, easier to turn out wrong?
options: ETH: it's the original / SETH: it claims more / Equally risky: they're about the same problem
feedback: SETH. It claims more: not just "some fixed multiplier per switch" but "for wide rules, ×2, brute force". A bigger claim has more ways to fail. And anything that breaks ETH breaks SETH too, since SETH implies ETH (c-08). The payoff for the risk is stronger results, like the edit-distance bound. Keep this in mind for chapter 7.

### k-05
segment: s-06
objective: o-4
type: predict
prompt: The claimed algorithm is subexponential, and the old best was exponential. When do you expect it to beat the old best (1.307^n) on real formulas?
options: Immediately: SAT solvers get faster / Within a few dozen variables / Only at enormous sizes, if ever
feedback: As built (A-02, A-03, A-06, P-07 fixes kept): only at enormous sizes. With every hidden constant set to 1, the bound only edges past 1.307^n at around 800 variables for sparse formulas, and around n ≈ 10^79 for the general bound; nobody knows the real constants. The exponent shrinks by only about a √(log n) factor. Real SAT solvers exploit structure, not worst-case bounds. (Press coverage, e.g. Unite.AI, says turning this into practical speedups would take substantial further research.)

### k-06
segment: s-07
objective: o-3
type: predict
prompt: The famous result that edit distance (a close relative of what diff computes) can't be done much faster than quadratic time assumes SETH, not ETH. If OpenAI's claim holds, what happens to that result?
options: Untouched: only ETH was refuted / It loses its basis: SETH falls too / Edit distance now has a fast algorithm
feedback: As built (A-01 fix kept): it loses its SETH basis, because SETH implies ETH and the paper says it refutes SETH directly. Yet the quadratic bound still stands: Backurs and Indyk's proof starts from the Orthogonal Vectors Conjecture (OVC), which this claim doesn't touch. The same holds for longest common subsequence and regex matching. And losing a basis never meant "now fast".

### k-07
segment: s-08
objective: o-4
type: explain
prompt: Lean's checker accepted the proof. Name one way the result could still turn out to be wrong, or weaker than advertised.
model_answer: Lean only confirms that the formal theorem follows. Humans still have to confirm that the formal definitions (the machine model, how a formula is encoded, what "time" counts) mean what the paper says. A faithful-looking but subtly off definition could make the checked theorem say less than the headline. (Separately, the checked bound is already slightly weaker than the paper's headline bound, though still enough to refute ETH.)
feedback: (think-then-reveal; the model answer is the feedback, ending with A-08's wording: "ETH's own inventors are among those reviewing it, and they say their involvement isn't a certification.")

### k-08
segment: s-09
objective: o-2, o-3, o-4
type: retrieve
prompt: Suppose the claim survives review. For each statement, does it follow?
options: (a) P = NP — doesn't follow. (b) 3-SAT can be solved in 2^{o(n)} time — follows. (c) RSA encryption is broken — doesn't follow. (d) The hardness results proved "unless ETH fails" become unproven, not false — follows (A-05 wording). (e) SETH is false too — follows: SETH implies ETH.
feedback: Per statement, in place; each answer names the chapter where the idea was shown. (e) now points to "A bolder bet: SETH" in chapter 5 as well as chapter 7.

## Acceptance criteria

- ac-01 (s-01): The first screen shows the paper's real title together with a visible "claim, under review" marker and the names of the reviewers. No heading anywhere on the page states ETH's refutation as established fact.
- ac-02 (w-switchboard): Flipping any switch updates the four lamps and the status line immediately. Lamp state is shown by colour and by a word. The default state has at least one lamp off.
- ac-03 (w-switchboard, k-01): The "Try all 8" sweep cannot run until k-01 is committed. The sweep ends showing exactly the rows (F,F,T) and (F,T,T) as working and "2 of 8", and it has a replay control.
- ac-04 (w-wall, H-01, H-02): The canvas shows n and the row count but no time text; each step card carries its own time translation (n=100: "tens of thousands of years"). There is no log axis in w-wall. In steps 2–4 the previous step's bar is drawn at its true relative height (sub-pixel bars as a labelled hairline/outline "too small to see at this scale"), so each step visibly dwarfs the last.
- ac-05 (w-wall, k-02): The n=110 step does not reveal until k-02 is committed. Step 5 shows all 302 digits of 2^1000 labelled "302 digits". Step 6 shows the 117 digits of ⌊1.307^1000⌋ in the same type and line width, labelled as the best known algorithm before the claim, plus the 81-digit atoms reference, so the lengths are directly comparable.
- ac-06 (w-ladder, s-04, H-03…H-07): The figure is titled with the question "Where could the best possible 3-SAT algorithm sit?", has a labelled vertical axis ("work grows faster as you add switches"), and carries no bar lengths, digit counts or 2^√n-vs-n³ note. Each rung shows its per-switch multiplier and a "we have this" / "nobody has found this" tag. P≠NP's and ETH's bets are brackets with labels, and ETH's bracket is visibly shorter. ETH's line is drawn and labelled. No text reads "down here".
- ac-07 (w-ladder, s-06): In the "claim" state the new rung appears below ETH's line and above 2^√n, labelled with its fading per-switch multiplier, and n³ carries "P vs NP untouched". The axis note "order as n gets large" is visible in this state.
- ac-08 (w-race, k-05): The growth chart is hidden until k-05 is committed. The chart area itself carries the label "constants set to 1, illustrative". The crossover (~800 sparse; ~10^79 general) is printed on the chart, not in a tooltip.
- ac-09 (s-06): The claimed running time is shown once in display maths, with its symbols introduced before it. The claim is described as counting solutions of fixed-width k-CNF, deterministically and in polynomial space. No timeline appears in s-06.
- ac-10 (s-04, k-03): ETH is stated in plain words, in the per-switch form ("a fixed multiplier for each extra switch that never fades"), and called an unproven assumption. k-03's feedback explains why 2^√n breaks ETH but not P≠NP.
- ac-11 (s-05): At least one conditional theorem is shown in full "unless ETH fails" form, and it refers back to the family from s-02. f-foundation is static: no build-in animation and no Replay control in s-05. No specific count of dependent papers appears anywhere on the page.
- ac-12 (s-07, k-06): The foundation diagram switches to its "if the claim holds" state only after k-06 is committed, as an instant swap with no drawn-in animation, and a "Before · If the claim holds" toggle lets the reader compare. In that state ETH and SETH read "refuted (claimed)", the ETH theorem blocks read "unproven again — not disproved" (neutral styling), edit distance reads "SETH basis lost · still stands on OVC" and rests on OVC, and the LCS/regex block reads "still stands".
- ac-13 (s-07): The three myth cards (P=NP, crypto, "problems now easy") are visible side by side or stacked, not in a carousel. Each gives the reason, citing GNFS for crypto.
- ac-14 (s-08): The page separates what Lean guarantees from what humans must still check, and quotes the review group's "should not be taken as certification" line attributed as reported. The "How the claim surfaced" timeline sits in s-08 with its first two dates marked "as reported". The page mentions the earlier withdrawal of unrelated manuscripts as base-rate context only.
- ac-15 (s-09, k-08): Each of the five statements gets its own commit and in-place feedback, and the page ends with a recap and next-reading links, not on the quiz.
- ac-16 (all): Secondary-sourced details (the 16/17 Oct dates, "practical speedups need further research") are attributed as reported by press, not stated as OpenAI's words.
- ac-17 (s-02, R-01, R-02): The puzzle is described in plain words ("satisfiability", "at least one of these must hold") before the label "3-SAT" appears, and the label is unpacked once (SAT = satisfiability, 3 = at most three per rule). Before s-05, the reader meets the family figure, which says "quick to check, seems to need a search to find" and "rewrite one as another, about the same size", with graph colouring shown as a member.
- ac-18 (s-05, R-08): SETH has its own subhead and figure. The figure shows ETH as "above ×1" and SETH as "pushed to ×2 as rules get wider" on one per-switch scale, marked schematic. The prose says explicitly that SETH comes back in chapter 7. k-09 is committed before f-foundation.
- ac-19 (all disclosures, H-09): Every disclosure renders as a bordered, tinted box with a chevron that rotates on open, a "More ·" kicker, a "show"/"hide" hint, a hover/focus accent border and min-height 44px. It shares no font, size or rule with h3 subheads. A first-time reader can tell it is clickable without hovering.
- ac-20 (ToC, H-08): The ToC uses the page's UI sans (not mono), no `└` glyphs, numbered chapters with full titles wrapping (no ellipsis). The current chapter is unmistakable (accent bar, tinted pill, bold, accent number). The mobile Contents summary names the current chapter.
