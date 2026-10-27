# The Exponential Time Hypothesis, and OpenAI's claim that it is false

A scrollytelling explainer for novices in complexity theory: what the Exponential Time Hypothesis (ETH) is, why it matters, what rests on it, and what it would mean if OpenAI's claimed refutation holds. The claim is presented as claimed and pending review. Reading time is about 17 minutes.

Written by Claude Opus 5.5 with the [didactician](https://github.com/gravitypersists/didactician) skill.

## Layout

- `site/`: the deployable static page (no build step, relative URLs only).
- `run/`: the audit trail from the didactician run: brief, research and facts, learning plan, handoffs between agents, review findings, human review rounds, gate results and decisions. Screenshots and pre-dispatch snapshots are excluded from the repo.

## Preview locally

```sh
npx serve site
```

## Deploy

Pushing to `main` deploys `site/` to GitHub Pages via `.github/workflows/pages.yml`.
