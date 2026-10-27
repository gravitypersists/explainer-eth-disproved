# Learning plan: The Exponential Time Hypothesis, and OpenAI's claim that it is false

## Shape

Scrollytelling, presented in nine short chapters. The topic is a story with a fixed order: a puzzle, the wall it hits, the bet that the wall is permanent, what was built on the bet, the claim that breaks it, the fallout, and how far to trust it. Each chapter needs one strong visual that the reader watches change (the doubling wall, the growth-rate ladder, the foundation diagram), and sticky canvases with scroll-advanced steps suit that. They also match the user's request for something flashy and presentational. Interaction stays light and deliberate: one toggle widget for the toy puzzle, plus predict-then-reveal cards at the key ideas and at each known misconception. That keeps the piece Constructive, so it doesn't become something the reader just watches. I rejected a full-page explorable (for example, a SAT-solver sandbox where the reader races algorithms). The reader would spend the 12 minutes learning the tool instead of the argument, the user explicitly asked for presentation over exploration, and the actual speedup of the new algorithm can't be shown at any n a browser can run (x-03).

Three visuals recur, so the reader learns each once and reuses it. The **growth-rate ladder** (introduced in s-04) gains its new rung in s-06. The **foundation diagram** (s-05) cracks in s-07. The 3-switch toy formula (s-02) is the "3-SAT" every later chapter refers to.

toc: yes — nine chapters and about 12 minutes; the rail and its progress line help a reader who returns to the "what follows" or "is it true" sections, which HN readers will want to jump to.
tokens: default kit tokens. The builder may use a dark hero and large display numerals for the "flashy" brief, but only through the kit tokens.
mobile: sticky canvases are capped at 55vh with their scroll steps below. The ladder and foundation diagrams switch to vertical layouts under ~520px. Check cards and the switchboard stack to one column. Nothing depends on hover.

Framing rule (d-02) for the whole piece: the result is always "OpenAI's claim" or "the claimed algorithm", never "the proof that ETH is false". Headings follow suit. Dates and the "practical gains need further work" line are secondary sources (c-17, c-24 note) and are attributed as reported by press. The piece never states a count of papers that depend on ETH. It says "many".

## Objectives

- o-1: Explain what 3-SAT is with a concrete example, and why brute force takes ~2^n time as variables grow. — checks: k-01, k-02
- o-2: State ETH in plain words and distinguish it from P≠NP. — checks: k-03, k-08
- o-3: Explain why ETH matters (conditional lower bounds rest on it) and give one or two examples of what it underwrites. — checks: k-04, k-06, k-08
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
ux: The reader reads and scrolls. At 360px the title card is full width above the text, and the hero flair (bits flipping behind the title) stays under 1.5s and is decorative only.
figure: Hero: the paper's real title, "The Exponential Time Hypothesis is False", set as a document card (author line "OpenAI", dated 25 Oct 2026), with a stamp-style label "CLAIM · UNDER REVIEW" across the corner. Behind it is a decorative field of 0/1 bits that flicker once on load (data-anim="flair", ≤1.5s). Below the card, a three-item meta strip: "Found by: an unnamed internal OpenAI model" (c-16) · "Checked by: the Lean proof assistant" (c-18) · "Being reviewed by: Impagliazzo, Paturi (ETH's inventors) and Williams" (c-21).
widget: none
checks: none

### s-02 — The puzzle: three switches, four rules
intent: Give the reader a 3-SAT instance they can solve by hand, so "3-SAT" and "satisfying assignment" are concrete before they are named.
objectives: o-1
claims: c-01, c-02
readiness: novice · interactivity: low (switch settings, which rules are lit) · max-elements: 3
mode: concrete example → reader manipulation → predict-then-reveal → name the thing · blueprint: none
layout:
  contiguity: inline — each rule lamp shows its own clause text, and each lamp lights or dims directly from the switches; no legend
  pacing: step-revealed; the brute-force sweep is locked until k-01 is committed
  redundancy: no prose restating which rules are lit; the lamps show it
  scaffold: collapsed "How to read NOT and OR" for readers unsure of the notation
ux: The reader flips three switches and watches four rule lamps light up. Then they predict how many of the 8 settings work (k-01), then press "Try all 8", which sweeps a truth table row by row. At 360px the switches sit in a row above the lamps, stacked 2×2; the table follows below at full width; all targets are ≥44px.
figure: none beyond the widget
widget: w-switchboard (complexity: low) — three toggles, four live clause lamps, a commit-gated brute-force sweep over the 8 rows
checks: k-01

### s-03 — The doubling wall
intent: Make 2^n visceral and show that even the best known algorithms (~1.307^n) only lower the base of the exponent; they don't escape it.
objectives: o-1
claims: c-02, c-03
readiness: novice · interactivity: low (n, rows to check, time it would take) · max-elements: 3
mode: scroll-driven worked example with real numbers · blueprint: B1
layout:
  contiguity: sticky — the counter canvas stays fixed while 5 steps scroll past; each step's number and its "how long" translation are printed on the canvas
  pacing: step-revealed by scroll; step 3 (n=110) appears only after k-02 is committed
  redundancy: step text adds the interpretation ("tens of thousands of years"); it does not repeat the digits shown on the canvas
  scaffold: none
ux: The reader scrolls and the canvas advances through n = 3, 20, 100, 110, 1000. Between the n=100 and n=110 steps the reader commits k-02. At 360px the canvas is sticky at the top (≤55vh) with the steps scrolling under it.
figure: none beyond the widget
widget: w-wall (complexity: high) — sticky scrollytelling canvas: a giant counter for 2^n plus a "time to check" translation, with a final step adding a second bar for 1.307^n
checks: k-02

### s-04 — The bet: "you can't get under the wall"
intent: State ETH as an unproven assumption, and place it against P≠NP on a growth-rate ladder so the reader sees ETH is the stronger, more specific claim.
objectives: o-2
claims: c-04, c-05, c-06, c-03
readiness: novice · interactivity: high (polynomial, subexponential and exponential rungs; which hypothesis forbids which zone) · max-elements: 3
mode: concrete (ladder of familiar functions) → rule (ETH statement) → apply (k-03) · blueprint: B1
layout:
  contiguity: sticky — the ladder stays in view while the steps shade the zone P≠NP forbids, then the zone ETH forbids; each zone is labelled on the ladder itself
  pacing: step-revealed by scroll (4 steps); k-03 sits after the final step
  redundancy: the prose states ETH once in words; the ladder shows the zones; no third restatement
  scaffold: collapsed "The formal statement" with "some s>0 such that every algorithm needs 2^(s·n)" and "no 2^{o(n)} algorithm" for readers who want it
ux: The reader scrolls through four ladder states, then answers k-03. At 360px the ladder is vertical (fast at the bottom, slow at the top), sticky at ≤55vh, with rung labels at a 13px minimum.
figure: none beyond the widget
widget: w-ladder (complexity: high) — growth-rate ladder in state "eth" (the new rung is hidden)
checks: k-03

### s-05 — What was built on the bet
intent: Show that ETH is load-bearing: many "no algorithm faster than X, unless ETH fails" theorems use it, and SETH is a stronger cousin underneath famous results like edit distance.
objectives: o-3
claims: c-10, c-11, c-07, c-12, c-08
readiness: novice · interactivity: high (a conditional theorem's form, ETH vs SETH strength, one example each) · max-elements: 3
mode: worked example of one conditional theorem → generalise → explain (k-04) · blueprint: none
layout:
  contiguity: inline — each theorem block on the foundation diagram carries its own one-line statement, and the arrow to its supporting hypothesis is labelled "unless … fails"
  pacing: continuous, with the figure building in two steps (ETH layer, then the SETH layer above it)
  redundancy: captions add only the "stronger than" relation; the prose doesn't re-list the theorems on the diagram
  scaffold: collapsed "Why is SETH stronger?" (SETH says the best k-SAT algorithms approach 2^n as k grows; that implies ETH)
ux: The reader reads one fully worked conditional theorem (graph colouring), sees the diagram fill in, and answers k-04 (think-then-reveal). At 360px the diagram is vertical: hypotheses at the bottom, theorem blocks stacked above.
figure: f-foundation (state A, "before"): two foundation blocks at the bottom. "ETH" is the base; "SETH (stronger)" sits on top of it with a small label "SETH ⇒ ETH". Above them, theorem blocks connected by labelled arrows: on ETH, "Graph colouring, Hamiltonian cycle, vertex cover: no 2^{o(n)} algorithm" (c-10) and "k-Clique: no n^{o(k)} algorithm, so brute-force search is essentially optimal" (c-11); on SETH, "Edit distance (the core of diff): no O(n^{2−δ}) algorithm" (c-12). A faint "… and many more" block. No count is given. Two steps: the ETH layer, then the SETH layer. Built by the page builder as static SVG with a vertical variant; the same figure reappears in s-07 in state B.
widget: none
checks: k-04

### s-06 — The claim
intent: State precisely what OpenAI claims (the running time, counting, fixed k) and show where it lands on the ladder: just under the exponential rung, nowhere near polynomial.
objectives: o-4
claims: c-14, c-15, c-16, c-17, c-09, c-03
readiness: novice · interactivity: high (the new bound's shape, its position vs 1.307^n, the meaning of "subexponential") · max-elements: 3
mode: precise statement → place on known structure (ladder) → predict-then-reveal (k-05) → growth chart · blueprint: B1
layout:
  contiguity: sticky — the ladder (state "claim") stays in view while the new rung slides in and is labelled with the claimed bound; the growth chart labels each line at its end
  pacing: step-revealed; w-race appears only after k-05 is committed
  redundancy: the formula appears once, set in display maths with its symbols introduced first; the chart caption carries the "constants set to 1, illustrative" condition, not the prose
  scaffold: collapsed "What the paper actually proves" — counts the solutions of any fixed-width k-CNF, deterministic, polynomial space; also refutes SETH, Gap-ETH and NSETH (c-09, c-14)
ux: The reader scrolls the ladder state change, commits k-05, then toggles the growth chart between "sparse formulas" and "general bound". At 360px the ladder is vertical and sticky; the chart is full width, about 320px tall, with the toggle below it.
figure: Timeline strip (small, static): "16 Oct — model finds the disproof · 17 Oct — formalised in Lean (dates as reported by press) · 25 Oct — manuscript · 26 Oct — published, review group announced" (c-17, c-15, c-21). Labelled "as reported" for the first two dates.
widget: w-ladder (complexity: high) — same widget in state "claim"; w-race (complexity: low) — log-scale growth chart of 2^n, 1.307^n and the claimed bound, gated on k-05
checks: k-05

### s-07 — If it holds: what falls, what stands
intent: Work through the consequences one at a time: ETH-based theorems become unproven (not false), SETH falls too, some bounds survive via OVC, P vs NP stays open, and crypto is not broken.
objectives: o-3, o-4
claims: c-08, c-09, c-12, c-13, c-06, c-24, c-25, c-10
readiness: novice · interactivity: high (conditional theorem status, ETH→SETH implication, surviving weaker assumptions) · max-elements: 3
mode: predict-then-reveal (k-06) at the SETH misconception → misconception confrontation ×3 → contrasting cases (falls vs stands) · blueprint: B4
layout:
  contiguity: inline — the foundation diagram (state B) marks each theorem block with its status ("unproven again", "still stands via OVC") on the block itself
  pacing: gated on k-06 — the diagram switches to state B only after the commit; then three short myth cards in sequence
  redundancy: each myth card states the misconception once, then the counter; no recap paragraph repeats the cards
  scaffold: none
ux: The reader commits k-06, watches the foundation diagram crack, then reads three myth/reality cards (P=NP, crypto, "those problems are now easy"). At 360px the diagram is vertical, and the cards stack full width.
figure: f-foundation (state B, "if the claim holds"): the ETH and SETH blocks show cracks and the label "refuted (claimed)". Theorem blocks keep their statements but get a status chip: "unproven again — not disproved" for the ETH and SETH theorems. A new block appears on a third base, "Orthogonal Vectors Conjecture (not refuted)", carrying "Longest common subsequence, regex matching: lower bounds still stand" (c-13). Edit distance gets "basis lost" (c-12, c-08), with no claim that it survives. Myth cards (three, a grid not a carousel, so they can be compared): (1) "So P = NP?" → No: 2^{n/√log n} is still far above polynomial, and the paper itself says the result doesn't make all NP problems subexponential (c-06, c-24). (2) "So crypto is broken?" → No: factoring has had a subexponential algorithm (GNFS) for decades, and properly sized RSA is still secure. "Subexponential" can still mean astronomically slow (c-25, x-06). (3) "So Hamiltonian cycle etc. are now fast?" → No: losing the proof of hardness is not the same as finding a fast algorithm (c-10, m-05).
widget: none
checks: k-06

### s-08 — Is it true? What "verified" does and doesn't mean
intent: Equip the reader to read the verification status correctly: what Lean guarantees, what it can't, who is reviewing, and what to watch for.
objectives: o-4
claims: c-18, c-19, c-20, c-21, c-22, c-23
readiness: novice · interactivity: low (what Lean checks; what humans must check; who) · max-elements: 3
mode: contrasting cases (the machine's job vs the humans' job) → explain (k-07) → watch-list · blueprint: B4
layout:
  contiguity: adjacent — a two-column "Lean checks / humans must still check" table, with each row's evidence beside it
  pacing: continuous; k-07 sits between the table and the watch-list
  redundancy: the table is the explanation; the prose adds only the reviewers' own words (c-22) and the base-rate note (c-23)
  scaffold: collapsed "The exact formal bound" — Lean proves 2^{A·n(log log n)²/√log n}, slightly weaker than the paper's headline, still enough to refute ETH (c-18)
ux: The reader reads the two-column table, commits k-07 (think-then-reveal), then reads a short "what to watch for" list. At 360px the two columns become two stacked panels with matching row labels.
figure: Two-column table "Lean's checker guarantees" vs "Humans still have to confirm". Left: the proof proves exactly the stated theorem; it uses only the three standard axioms; the Lean kernel accepts it (c-19). Right: the theorem's definitions (a Turing-machine model, how a formula is encoded) mean what the paper says (c-18, c-20); the paper's sharper bound, which isn't the one formalised (c-18); the informal paper's other claims (c-23 README note). Below it, a review-status card: "Working group: Russell Impagliazzo, Ramamohan Paturi (ETH's inventors), Ryan Williams. In their words: 'Our involvement should not be taken as certification of the claim.'" (c-21, c-22, quote as reported by The Next Web). Watch-list: the working group's write-up; whether the Lean definitions are judged faithful; independent re-implementations; whether the sharper bound holds. Base-rate line: the same repository withdrew three unrelated manuscripts on 7 Oct after a sign error (c-23).
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
ux: The reader marks each of five statements "follows" or "doesn't follow" and gets feedback in place. Then they read the recap and the further-reading links (OpenAI's repo, the Wikipedia ETH article). At 360px each statement is a full-width card with two 44px buttons.
figure: none
widget: none
checks: k-08

## Widgets

### w-switchboard
segment: s-02
complexity: low
blueprint: none
model: Variables x, y, z ∈ {T, F}. Clauses (x-01, c-01): C1 = (x OR y OR z), C2 = (NOT x OR y), C3 = (NOT y OR z), C4 = (NOT z OR NOT x). A clause is lit when true. The formula is satisfied when all four are lit. The satisfying settings are exactly (F,F,T) and (F,T,T) (x-01, verified by enumeration). Brute force: 2^3 = 8 rows (c-02).
reader_does: Flips the x, y and z toggles freely (goal-free: "find a setting that lights all four"). Commits k-01. Then presses "Try all 8", which animates a sweep that fills an 8-row truth table one row at a time (about 250ms per row), marking each row ✓ or ✗ with the failing rule's number.
shows: Three large toggle switches labelled x, y, z with T/F state text. Four lamp cards, each showing its clause text (e.g. "NOT y OR z") and lit/unlit by colour plus an "on"/"off" word (not colour alone). A status line: "3 of 4 rules satisfied" / "All 4 satisfied — this setting works". After the sweep: the table with rows (F,F,T) and (F,T,T) highlighted, a counter "2 of 8 settings work", and a note "One more switch would double the table to 16 rows." The sweep is data-anim="once" with a replay control (I4). Default state: x=T, y=F, z=F, which lights C1, C3 and C4 with C2 (NOT x OR y) off: "3 of 4 rules satisfied", close but not a solution.
size: desktop: prose-width column (~680px), ~420px tall including the table; mobile: full width, switches in a row, lamps 2×2, table below, ~640px tall
acceptance: ac-02, ac-03

### w-wall
segment: s-03
complexity: high
blueprint: B1
model: Steps by n (c-02, x-02): n=3 → 8 rows; n=20 → 1,048,576 rows ("a laptop: well under a second"); n=100 → ≈1.27×10^30 rows ("a billion computers each checking a billion rows per second: tens of thousands of years"); n=110 → ×1024 more (gated on k-02); n=1000 → ≈10^301 ("more than the ~10^80 atoms in the observable universe"). Final step: a second readout for the best known algorithm, 1.307^n (c-03), at n=1000 ≈ 10^116, labelled "best known before the claim (randomised, PPSZ family)". Numbers above 10^15 are shown as powers of ten. Numbers below that are shown in full with thousands separators.
reader_does: Scrolls. The steps advance the canvas. At the n=100→110 boundary the step is locked until k-02 is committed (the check card sits in the step column).
shows: A giant tabular-numeral counter of 2^n, with n labelled on the canvas ("n = 100 switches"). Under it, a one-line translation of the time. A log-scale "height" bar (one tick per factor of 10) grows between steps (≈600ms ease-in-out). In the last step a second, shorter bar labelled "1.307^n — best known" appears beside it, with the caption "Smaller base, same exponential shape." Only the changing number and bar are at full ink; the previous step's values are dimmed.
size: desktop: sticky canvas 50% width × ~70vh beside the scrolling steps (≥900px); mobile: sticky canvas full width ≤55vh, steps scroll below
acceptance: ac-04, ac-05

### w-ladder
segment: s-04, s-06
complexity: high
blueprint: B1
model: An ordered ladder of growth rates for 3-SAT, from fast to slow (x-04): n^3 ("polynomial — what P = NP would need") · 2^√n ("subexponential") · [2^{n/√log n}: hidden in state "eth"] · 1.307^n ("best known, c-03") · 2^n ("brute force"). Zones: P≠NP forbids everything at or below the polynomial rung (c-05). ETH forbids everything below "c^n for some c>1", i.e. all subexponential rungs (c-04). The claim (c-14) places an algorithm at 2^{n/(log n)^{1/2+o(1)}}, inside ETH's forbidden zone and well above polynomial (c-06). Two mount states: data-state="eth" (s-04) and data-state="claim" (s-06).
reader_does: Scrolls through steps. eth state: (1) rungs appear, bottom to top; (2) the "P≠NP says: not down here" zone shades the polynomial rung; (3) the "ETH says: not anywhere down here" zone shades everything below the exponential rungs; (4) the label "ETH is the stronger bet: it forbids more." claim state: (1) the ladder as left in s-04; (2) a new rung slides in just below 1.307^n, labelled "OpenAI's claimed algorithm: 2^{n/√log n} (roughly)", with a flag in ETH's forbidden zone; (3) the polynomial rung stays far below, labelled "Still nowhere near this, so P vs NP is untouched."
shows: Rungs are horizontal bars whose length encodes the log of the step count at n=1000 (so the gaps are honest), each with its formula and plain name labelled on the bar. Forbidden zones are shaded bands with the hypothesis name printed in the band. The current step's change is at full ink and the rest at .35 opacity.
size: desktop: sticky canvas ~55% width × ~70vh, steps beside it; mobile: vertical ladder, sticky ≤55vh, labels ≥13px, steps below
acceptance: ac-06, ac-07, ac-10

### w-race
segment: s-06
complexity: low
blueprint: none
model: log10(step count) against n on a log-scale x-axis from n=10 to n=10^6, for three functions with all hidden constants set to 1 (x-03): 2^n; 1.307^n (c-03); the claimed bound. Toggle "sparse formulas" uses 2^{n/√ln n}, which crosses below 1.307^n at about n≈1,000. Toggle "general bound" adds the log log n factor, and the crossover moves to roughly n≈10^83, off the chart (shown as an arrow at the right edge: "crossover ≈ n = 10^83 →"). Reference points (x-03): n=100: 10^30 / 10^11.6 / 10^14; n=1000: 10^301 / 10^116 / 10^114.5.
reader_does: Revealed after k-05. Toggles sparse/general. Hovering or tapping is not required: crossover and endpoint values are printed on the chart.
shows: Three lines, directly labelled at their right ends. A marked crossover point labelled "crossover ≈ n = 1,000 (constants set to 1)". A persistent banner inside the chart area: "Illustrative: real constants are unknown and could be large." A horizontal reference line at 10^18 labelled "≈ a billion machines × a billion checks/s for a second" is optional, and the builder may drop it if it crowds the chart.
size: desktop: wide (≤960px) × 360px; mobile: full width × 320px, toggle below
acceptance: ac-08, ac-09

## Comprehension items

### k-01
segment: s-02
objective: o-1
type: predict
prompt: There are 2 × 2 × 2 = 8 ways to set the three switches. How many of them light all four rules?
options: None of them / Exactly 2 / About half (4) / All 8
feedback: Exactly 2: (x,y,z) = (F,F,T) and (F,T,T). The only way to be sure was to check every setting, which is what the sweep does. That's brute force. With 3 switches it's 8 rows; every extra switch doubles the table.

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
feedback: ETH only. 2^√n grows more slowly than any c^n, so it lands in ETH's forbidden zone. But it still grows faster than any polynomial, so it doesn't reach the P = NP rung. That's why a broken ETH, by itself, says nothing about P vs NP (c-06). It's the trap headlines fall into.

### k-04
segment: s-05
objective: o-3
type: explain
prompt: A paper proves "graph colouring has no 2^{o(n)} algorithm, unless ETH fails." In your own words: what did it actually prove, and what would make the statement stop telling us anything about hardness?
model_answer: It proved a link, not hardness itself: any much-faster colouring algorithm could be turned into a much-faster 3-SAT algorithm. Colouring is "hard" only as long as ETH is true. If ETH fails, the statement is still true, but it no longer shows that colouring is hard.
feedback: (think-then-reveal; the model answer is the feedback)

### k-05
segment: s-06
objective: o-4
type: predict
prompt: The claimed algorithm is subexponential, and the old best was exponential. When do you expect it to beat the old best (1.307^n) on real formulas?
options: Immediately: SAT solvers get much faster / Somewhere around a few hundred variables / Only at enormous sizes, if ever in practice, and nobody knows the real constants
feedback: Only at enormous sizes. Even with every hidden constant generously set to 1, the new bound only edges past 1.307^n at around a thousand variables for sparse formulas, and around n ≈ 10^83 for the general bound. By then both numbers are astronomically large. The exponent shrinks by only about a √(log n) factor. Real SAT solvers also don't run worst-case algorithms; they exploit structure in real instances. The win is about the shape of the curve, not the speed. (Press reports OpenAI itself saying practical gains would need substantial further work.)

### k-06
segment: s-07
objective: o-3
type: predict
prompt: The famous result that edit distance (the core of diff) can't be done much faster than quadratic time assumes SETH, not ETH. If OpenAI's claim holds, what happens to that result?
options: Untouched: only ETH was refuted / It loses its basis: SETH falls too / Edit distance now has a fast algorithm
feedback: It loses its basis. SETH is the stronger assumption, and SETH implies ETH, so if ETH is false, SETH is false too. The paper says it refutes SETH directly (c-08, c-09). But "loses its basis" isn't "edit distance is now fast": no faster algorithm comes with it. The quadratic bound is simply unproven again. Some related bounds (longest common subsequence, regex matching) can still lean on a weaker assumption, OVC, which this claim doesn't touch (c-13).

### k-07
segment: s-08
objective: o-4
type: explain
prompt: Lean's checker accepted the proof. Name one way the result could still turn out to be wrong, or weaker than advertised.
model_answer: Lean only confirms that the formal theorem follows. Humans still have to confirm that the formal definitions (the machine model, how a formula is encoded, what "time" counts) mean what the paper says. A faithful-looking but subtly off definition could make the checked theorem say less than the headline. (Separately, the checked bound is already slightly weaker than the paper's headline bound, though still enough to refute ETH.)
feedback: (think-then-reveal; the model answer is the feedback, ending with: "That's why ETH's own inventors are reviewing it, and why they say their involvement isn't a certification.")

### k-08
segment: s-09
objective: o-2, o-3, o-4
type: retrieve
prompt: Suppose the claim survives review. For each statement, does it follow?
options: (a) P = NP — doesn't follow: the bound is far above polynomial. (b) 3-SAT can be solved in 2^{o(n)} time — follows: that's the claim. (c) RSA encryption is broken — doesn't follow: RSA never rested on ETH, and "subexponential" can still be astronomically slow. (d) Theorems proved "unless ETH fails" become unproven, not false — follows. (e) SETH is false too — follows: SETH implies ETH.
feedback: Per statement, in place; each answer names the segment where the idea was shown ("see The bet", "see What falls").

## Acceptance criteria

- ac-01 (s-01): The first screen shows the paper's real title together with a visible "claim, under review" marker and the names of the reviewers. No heading anywhere on the page states ETH's refutation as established fact.
- ac-02 (w-switchboard): Flipping any switch updates the four lamps and the status line immediately. Lamp state is shown by colour and by a word. The default state has at least one lamp off.
- ac-03 (w-switchboard, k-01): The "Try all 8" sweep cannot run until k-01 is committed. The sweep ends showing exactly the rows (F,F,T) and (F,T,T) as working and "2 of 8", and it has a replay control.
- ac-04 (w-wall): Each scroll step shows n and the number of rows on the canvas itself, plus a plain-language time translation. The n=100 step says "tens of thousands of years" (not a precise year count).
- ac-05 (w-wall, k-02): The n=110 step does not reveal until k-02 is committed. The final step shows 1.307^n beside 2^n, labelled as the best known algorithm before the claim, and both are visibly still exponential.
- ac-06 (w-ladder, s-04): The P≠NP zone and the ETH zone are shaded and labelled on the ladder itself, and the ETH zone visibly covers more rungs than the P≠NP zone.
- ac-07 (w-ladder, s-06): In the "claim" state the new rung appears inside ETH's forbidden zone and well above the polynomial rung, with a label saying P vs NP is untouched.
- ac-08 (w-race, k-05): The growth chart is hidden until k-05 is committed. The chart area itself carries the label "constants set to 1, illustrative". The crossover (~1,000 sparse; ~10^83 general) is printed on the chart, not in a tooltip.
- ac-09 (s-06): The claimed running time is shown once in display maths, with its symbols introduced before it. The claim is described as counting solutions of fixed-width k-CNF, deterministically and in polynomial space.
- ac-10 (s-04, k-03): ETH is stated in plain words and called an unproven assumption. k-03's feedback explains why 2^√n breaks ETH but not P≠NP.
- ac-11 (s-05): At least one conditional theorem is shown in full "unless ETH fails" form. No specific count of dependent papers appears anywhere on the page.
- ac-12 (s-07, k-06): The foundation diagram switches to its "if the claim holds" state only after k-06 is committed. In that state ETH and SETH both read "refuted (claimed)", the theorem blocks read "unproven again — not disproved", and the OVC-based block reads "still stands".
- ac-13 (s-07): The three myth cards (P=NP, crypto, "problems now easy") are visible side by side or stacked, not in a carousel. Each gives the reason, citing GNFS for crypto.
- ac-14 (s-08): The page separates what Lean guarantees from what humans must still check, and quotes the review group's "should not be taken as certification" line attributed as reported. It mentions the earlier withdrawal of unrelated manuscripts as base-rate context only.
- ac-15 (s-09, k-08): Each of the five statements gets its own commit and in-place feedback, and the page ends with a recap and next-reading links, not on the quiz.
- ac-16 (all): Secondary-sourced details (the 16/17 Oct dates, "practical gains need further work") are attributed as reported by press, not stated as OpenAI's words.
