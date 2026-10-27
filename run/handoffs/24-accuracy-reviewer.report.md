status: done

artifacts:
- /Users/m/workspace/eth/explainers/eth-disproved/run/review/round-3/accuracy.md — the round-3 focused accuracy closure review
- /Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/probe/a3-1280-fam.png, a3-360-fam.png — the f-family figure at 1280 and 360 (one-way arrows and label)
- /Users/m/workspace/eth/explainers/eth-disproved/run/screenshots/probe/a3-1280-fndb.png, a3-360-fndb.png — f-foundation-b state B, captured after answering k-06

summary: A-10 and A-11 are both closed. I drove the page with probe.mjs and took my own screenshots at 1280 and 360. I checked every changed sentence listed in the handoff against facts.md (c-10 note, c-24 note, c-26, c-27, c-30, c-31). I also re-fetched the primary manuscript (main_full_version.tex) and read it.
- **A-10:** the colouring "claimed disproved" wording and the s-07 exception sentence match Corollary 1.4 and its proof. The proof uses q variables per vertex and a width-q CNF for fixed q, and the page fixes q = 3. The manuscript claims no algorithm for Hamiltonian cycle, vertex cover or k-Clique.
- **A-11:** the s-02 size claim, the arrows, the label and the aria-label are now one-way from 3-SAT, as c-30 and c-31 support.

There are no new findings. The review file has one non-finding note: the s-02 hedge and the s-07 colouring exception are consistent with each other.

concerns:
- none

relaxed:
- none

dispositions:
- A-10: closed — state B splits colouring into its own block marked "claimed disproved", the other blocks stay "unproven again", and the s-07 paragraph, k-08(d) feedback and s-09 recap name the colouring exception. Verified against manuscript Corollary 1.4.
- A-11: closed — the size claim is now one-way ("from 3-SAT"), with single-headed outward arrows, a matching label and aria-label, and a one-way s-05 sentence. Verified against c-30 and c-31.
