# Examples

### x-01
objective: o-1
example: Three switches x, y, z and four rules: (x OR y OR z) AND (NOT x OR y) AND (NOT y OR z) AND (NOT z OR NOT x). Checking all 2^3 = 8 settings, exactly two work: (x,y,z) = (F,F,T) and (F,T,T). So it is satisfiable, and its count #F = 2.
why: The reader can solve it by hand, and it shows both questions the new paper answers: "is there one?" (SAT) and "how many?" (#SAT, which the algorithm computes). Brute force here is 8 rows, but the table doubles with every new variable.
source: model
note: Verified by brute-force enumeration (script run during research).

### x-02
objective: o-1
example: Brute force on n variables means 2^n rows. At n=100 that is about 10^30 (a billion machines checking a billion rows per second would need about 30,000 years). At n=1000 it is about 10^301, more than the ~10^80 atoms in the observable universe.
why: Makes "exponential" visceral. Adding just 10 variables multiplies the work by 1024.
source: model
note: log10(2^100)=30.1; log10(2^1000)=301. The 40,000-year figure is 10^30 / (10^18 per second) ≈ 10^12 s ≈ 32,000 years; say "tens of thousands of years".

### x-03
objective: o-4
example: Growth rates as powers of ten (all hidden constants set to 1, which flatters the new algorithm). n=100: 2^n≈10^30, PPSZ 1.307^n≈10^11.6, new bound 2^(n/√ln n)≈10^14. n=1000: 10^301 vs 10^116 vs 10^114.5. n=10^6: 10^301030 vs 10^116276 vs 10^80989.
why: Shows the claim is about asymptotic shape, not speed. Even in the best (sparse-formula) form, the new bound only overtakes PPSZ at around n≈1,000 with constants of 1. With the general bound's extra log log n factor, the crossover moves to roughly n≈10^79 (natural logs; solving ln ln n/√ln n = log2(1.307) gives ln n≈181). The figure is very sensitive to conventions: with base-2 logs it is ≈10^168. Real constants (O_k(1) in the exponent) are unknown and could be large. Practical SAT solving is unaffected for now.
source: model
note: Computed from the formulas in c-03 and c-14 with constants set to 1 and natural logs (ln) throughout, general bound taken as 2^(n·ln ln n/√ln n). Sparse crossover ≈ n=815. Illustrative only; the paper gives no concrete constants, and the log base alone moves the general crossover from ~10^79 to ~10^168.

### x-04
objective: o-2
example: A ladder of growth rates for 3-SAT: polynomial n^3 (what P=NP would need) … 2^(√n) … the claimed 2^(n/√log n) … the old belief c^n with c≈1.3 … brute force 2^n. ETH said the true answer sits at "c^n for some c>1". The claim moves it just below that rung, still far above polynomial.
why: Separates three claims readers merge: "not polynomial" (P≠NP), "genuinely exponential" (ETH), and "brute force is best as k grows" (SETH). It also shows why ETH failing leaves P vs NP open.
source: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
note: Wikipedia supplies the P≠NP vs ETH relation and the 2^{n^c} example; the ladder arrangement is ours.

### x-05
objective: o-3
example: ETH as a foundation stone: results of the form "Hamiltonian cycle / graph coloring / vertex cover has no 2^{o(n)} algorithm (unless ETH fails)" and "k-Clique needs n^{Ω(k)} (unless ETH fails)". Under SETH: "edit distance has no O(n^{2−δ}) algorithm (unless SETH fails)". If the foundation goes, these theorems are not false. The ETH-based hardness results become unproven again; the edit-distance bound loses its SETH basis but still rests on the weaker Orthogonal Vectors Conjecture.
why: The key subtlety. A refuted hypothesis does not make these problems easy. It removes the explanation for why nobody has found faster algorithms. The building analogy breaks down because the "upper floors" (the problems) don't collapse; only the proof that they're as high as they look does.
source: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
note: Edit-distance item from Backurs–Indyk (c-12), whose reduction starts from Orthogonal Vectors, so it survives via OVC (c-12, c-13). Good contrast case if the page wants one bound that is lost versus one that survives: use an ETH-only result (e.g. Hamiltonian cycle) as the "lost" example, not edit distance.

### x-06
objective: o-4
example: Factoring a 2048-bit RSA modulus with the general number field sieve is already "subexponential", yet it remains far out of reach. "Subexponential" can still mean astronomically slow.
why: An analogy grounded in crypto that HN readers know. It shows that an asymptotic class is not a practical break. It breaks down because factoring and SAT are different problems; the point is only about what "subexponential" buys.
source: https://en.wikipedia.org/wiki/General_number_field_sieve
