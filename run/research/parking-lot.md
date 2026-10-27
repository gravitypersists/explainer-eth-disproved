# Parking lot

- The paper also claims a superlinear circuit lower bound (c·n√log n gates) for a language in E^NP, a rare new circuit lower bound (https://github.com/openai/math/blob/main/CONTENTS.md)
- Corollaries: subexponential exact counting of independent sets, graph colorings and perfect matchings; refutes #ETH, and with it Curticapean's #ETH-based perfect-matching lower bound (paper §1)
- The technique is algebraic (polynomial interpolation, Taylor coefficients, Hermite interpolation, split-and-list in the style of Williams 2005) rather than a smarter search (paper §2)
- Ryan Williams refuted the Merlin–Arthur version of SETH in 2016, so a weaker SETH variant had already fallen (paper related work)
- Prior claimed refutation: Camerani's 2021 arXiv preprint "The #ETH is False" (arXiv 2102.02624) also claimed a 2^{o(n)} #k-SAT algorithm; its reception was not checked (https://ar5iv.labs.arxiv.org/html/2102.02624)
- Credit and process debate: reviewers signed no NDAs, asked OpenAI to fund a conference; "shepherds" model criticised for information asymmetry (Gizmodo, The Next Web)
- Same-day OpenAI release also claims local smoothing / Kakeya results and a QCD/Yang–Mills physics result (https://github.com/openai/math/blob/main/history.md)
- Repo-wide stats: 721 manuscripts, ~42% of top-line results Lean-formalized, ~3 hours ChatGPT Pro compute per result on average (openai/math README)
- Comparator's sandbox (landrun) has a known vulnerability noted in its README; only relevant if discussing the trust base of Lean checks (https://github.com/leanprover/comparator)
