# Human review: site, round 1

_Submitted 2026-10-26T23:37:00-04:00 · index.html · 9 comment(s). Reviewed on the frozen copy in `build/` (sha256:aa02bf364dc6618b32a556dc055b18dd2a46d5a88344dd8220a649a45468e35f). Each block is the user's own words._

### #1 · open
type: block
on: "TIME Instant. You could check every row by hand."
selector: `#wall > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)`

> Let's move time over into the right (the scrolled panels) for all the relevant steps, it's adding too much visual noise here in the visualization.

### #2 · open
type: highlight
quote: "Log scale: one tick = ×10"
context: …, ×14.5 for 1.307ⁿ.1001010102010302ⁿbrute force8 [Log scale: one tick = ×10] Step 1 of 5. n = 3 switches: 8 rows to check. In…

> This visualization would hit harder if we actually showed the logarithmic growth. It doesn't look as daunting when it's a log scale growing.

### #3 · open
type: highlight
quote: "Four running times for 3-SAT."
context: …s against n^3’s 19. [Four running times for 3-SAT.] The gaps are to scale: each bar's length is the…

> This language confused me, is this four running times for algorithms? Is it four different algorithm's running times?

### #4 · open
type: highlight
quote: "The gaps are to scale"
context: …Four running times for 3-SAT. [The gaps are to scale] : each bar's length is the number of digits in t…

> what gaps?

### #5 · open
type: highlight
quote: "each bar's length is the number of digits in the step count when n = 1,000."
context: …running times for 3-SAT. The gaps are to scale: [each bar's length is the number of digits in the step count when n = 1,000.] P ≠ NP says 3-SAT has no polynomial-t…

> this is way to hard to understand in the widget. Maybe we need to draw into the widget "2 ^ 1000 = 302 digits" and associate it clearly with the width of the bar

### #6 · open
type: shape (rect)
on: "The Exponential Time Hypothesis, and OpenAI's claim that it is false CONTENTS └A paper with a blunt title └The puzzle: three switches, four rules └The doubling …"
selector: `body > div:nth-of-type(1)`
shot: shots/c1hv0lyr1g6ovmgim7gv0.png

> this is very confusing to me, because the "not anywhere down here" is kind of suggesting the vertical axis is important here, and I don't fully understand this, but I don't think it is.

### #7 · open
type: highlight
quote: "close to n³ at n = 1,000; pulls away fast: at n = 10⁶, 302 vs 19 digits"
context: …digits2√n subexponential10 digits · 3.3 billion [close to n³ at n = 1,000; pulls away fast: at n = 10⁶, 302 vs 19 digits] n3 polynomial: what P = NP would need10 digits ·…

> not sure this is relevant, and it's adding distracting noise.

### #8 · open
type: highlight
quote: "└A paper with a blunt title"
context: …sis, and OpenAI's claim that it is falseContents [└A paper with a blunt title] └The puzzle: three switches, four rules└The doub…

> the style for the TOC is a bit strange, I'm not sure it matches the style of the page. Let's re-skin it and ensure that we can easily tell which chapter we're currently on.

### #9 · open
type: shape (rect)
on: "The Exponential Time Hypothesis, and OpenAI's claim that it is false CONTENTS └A paper with a blunt title └The puzzle: three switches, four rules └The doubling …"
selector: `body > div:nth-of-type(1)`
shot: shots/ctwbp4b1o8umhe171u5la.png

> The "what the paper actually proves" looks too much like a label for the diagram below. Let's make sure progressive disclosures have an affordance to indicate they can be clicked and look different than subheaders. I think we should also consider this timeline might not fit in here?
