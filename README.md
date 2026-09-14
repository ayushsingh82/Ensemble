# Ensemble

A small, honest team for Claude Code — free, open-source, curated agents, skills, and commands.

Most agent packs sell you a headcount: 89 agents, 100+ skills, padded to look comprehensive. Ensemble ships a small set across engineering and marketing, each written specifically enough that it actually changes how Claude behaves, and grows only when a new specialist earns its place.

[![License: MIT](https://img.shields.io/badge/License-MIT-informational.svg)](LICENSE)

## What's inside

**21 agents** — `agents/`

| Engineer kit | Marketing kit |
|---|---|
| `tech-lead` — orchestrator, delegates and gates completion | `growth-strategist` — finds the funnel's binding constraint before recommending action |
| `backend-architect` — API/schema design, boring-tech bias | `content-marketer` — one true, specific claim per piece of copy |
| `react-specialist` — React/Next.js UI, matches existing component patterns | `seo-specialist` — optimizes for search intent, fixes crawlability before content |
| `code-reviewer` — real bugs only, concrete failure scenario per finding | `brand-voice` — keeps copy consistent with an established voice, flags unverifiable claims |
| `debugger` — reproduce → isolate → hypothesis → verify → check for recurrence | `competitive-analyst` — factual, sourced competitor comparison |
| `test-automator` — tests that catch regressions, risk-prioritized |  |
| `security-auditor` — OWASP-grounded, severity-ranked, exploit-scenario findings |  |
| `typescript-pro` — type system used to make invalid states unrepresentable |  |
| `postgres-pro` — schema/indexing/query performance, safe migrations on live tables |  |
| `docker-specialist` — multi-stage builds, image size, layer caching |  |
| `python-pro` — idiomatic Python, typing, packaging conventions |  |
| `ci-engineer` — pipeline design, real merge gates, flaky-test triage |  |
| `refactorer` — behavior-preserving structural cleanup |  |
| `performance-profiler` — measures before optimizing |  |
| `accessibility-auditor` — WCAG-grounded, concrete assistive-tech findings |  |
| `architect-reviewer` — reviews a design/tradeoff decision before it's built |  |

**4 skills** — `skills/` (loaded automatically, exactly when relevant)
- `api-scaffold` — matches existing codebase conventions instead of imposing new architecture
- `tdd-workflow` — red/green/refactor, one failing test at a time
- `playwright-e2e` — end-to-end tests matched to existing selector/structure conventions
- `stripe-integration` — payment/webhook flows matched to existing patterns, signature-verified, idempotent

**6 commands** — `commands/` (fired from the prompt)
- `/deploy-checklist` — build/tests/secrets/migrations/security gate before shipping
- `/test-coverage` — highest-risk untested paths in recent changes, ranked
- `/api-scaffold` — one-shot version of the skill for explicit invocation
- `/launch-plan` — claim, channels, assets, sequencing, success metric
- `/campaign-brief` — objective, audience, claim, assets, timeline, success metric
- `/email-sequence` — sequence structure + one-claim-per-email discipline

## Install

No CLI, no account. Copy the files straight into your project's `.claude/` folder:

```bash
git clone https://github.com/ayushsingh82/Ensemble.git
cp Ensemble/agents/*.md      .claude/agents/
cp -r Ensemble/skills/*      .claude/skills/
cp Ensemble/commands/*.md    .claude/commands/
```

## How it works

1. **Copy the files in.** No install, no account — Claude Code picks up anything in `.claude/agents`, `.claude/skills`, `.claude/commands`.
2. **Fill in one `CLAUDE.md`.** Every agent reads it first, so you describe your stack and conventions once instead of every session.
3. **Delegate.** `"Use tech-lead to build auth"` or `/deploy-checklist` before shipping — the right specialist takes it from there.

## Evals

`evals/` is a self-eval harness — one hand-written test case per agent (`evals/cases/<name>.json`), each designed to tempt the exact failure mode listed in that agent's own "what you refuse to do" section. A runner sends the temptation prompt to the agent, then has a separate model grade whether the response committed that violation.

```bash
ANTHROPIC_API_KEY=sk-... node evals/run.mjs
```

**Not yet run against a real API key.** No pass rate is claimed anywhere in this repo until it's actually been executed — see [`evals/README.md`](evals/README.md).

## Why these, specifically

Every prompt in this repo follows the same shape: a stated trigger (when to reach for it, and when *not* to), a concrete process instead of vague advice, and an explicit "what this refuses to do" section so it doesn't quietly drift into someone else's job. `tech-lead` orchestrates the rest and won't mark work done until the agent meant to catch its mistakes — `code-reviewer`, `security-auditor` — actually has.

Agent naming conventions follow the wider Claude Code subagent ecosystem; full attribution in [`CREDITS.md`](CREDITS.md).

## Project structure

```
agentkit/
├── agents/       21 subagent definitions (.claude/agents/*.md)
├── skills/       4 auto-loaded skills (.claude/skills/<name>/SKILL.md)
├── commands/     6 slash commands (.claude/commands/*.md)
├── evals/        self-eval harness — one test case per agent, not yet run
├── web/          Next.js landing page (source of truth for the public listing)
├── plan.md       project plan, shipped/backlog tracking
├── CREDITS.md    attribution
└── LICENSE       MIT
```

## Site

The landing page in `web/` lists every agent, skill, and command with install instructions.

```bash
cd web
npm install
npm run dev   # http://localhost:3000
```

## Not doing

No CLI installer tool, no account system, no payment integration, and no padding the count — a small set of excellent specialists, extended only when a real, recurring gap shows up.

## License

MIT — see [`LICENSE`](LICENSE). Not affiliated with Anthropic.
