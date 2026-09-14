# Ensemble — Plan

Free, open-source, curated agents/skills/commands kit for Claude Code.
Positioning against AgentsKit: small, honest, quality-first curated set — not padded to hit a headcount. "A group that plays together" — specialists that hand off to each other cleanly, gated by an orchestrator.

## Shipped (v1 + v2 + v3 — full backlog cleared)

**Agents** (`agentkit/agents/`) — 21
- `tech-lead` — orchestrator, delegates and gates completion
- `backend-architect` — API/schema design, boring-tech bias
- `react-specialist` — React/Next.js UI, matches existing component patterns
- `code-reviewer` — real bugs only, concrete failure scenario per finding
- `debugger` — reproduce → isolate → hypothesis → verify → check for recurrence
- `test-automator` — tests that catch regressions, risk-prioritized, not coverage-padding
- `security-auditor` — OWASP-grounded, severity-ranked, exploit-scenario findings
- `typescript-pro` — type system used to make invalid states unrepresentable
- `postgres-pro` — schema/indexing/query performance, safe migrations on live tables
- `docker-specialist` — multi-stage builds, image size, layer caching, no secrets in layers
- `python-pro` — idiomatic Python, typing, packaging conventions, no bare excepts
- `ci-engineer` — pipeline design, real merge gates, flaky-test triage by evidence
- `refactorer` — behavior-preserving structural cleanup, distinct from bug-hunting
- `performance-profiler` — measures before optimizing, flags premature optimization
- `accessibility-auditor` — WCAG-grounded, concrete assistive-tech failure scenarios
- `architect-reviewer` — reviews a design/tradeoff decision before it's built
- `growth-strategist` — finds the funnel's binding constraint before recommending action
- `content-marketer` — one true, specific claim per piece of copy
- `seo-specialist` — optimizes for search intent, fixes crawlability before content
- `brand-voice` — keeps copy consistent with an established voice, flags unverifiable claims
- `competitive-analyst` — factual, sourced competitor comparison, no unverifiable claims

**Skills** (`agentkit/skills/`) — 4
- `api-scaffold` — matches existing codebase conventions instead of imposing new architecture
- `tdd-workflow` — red/green/refactor, one failing test at a time
- `playwright-e2e` — end-to-end tests matched to existing selector/structure conventions
- `stripe-integration` — payment/webhook flows matched to existing patterns, signature-verified, idempotent

**Commands** (`agentkit/commands/`) — 6
- `/deploy-checklist` — build/tests/secrets/migrations/security gate before shipping
- `/test-coverage` — highest-risk untested paths in recent changes, ranked
- `/api-scaffold` — one-shot version of the skill for explicit invocation
- `/launch-plan` — claim, channels, assets, sequencing, success metric
- `/campaign-brief` — objective, audience, claim, assets, timeline, success metric
- `/email-sequence` — sequence structure + one-claim-per-email discipline

Naming validated against [wshobson/agents](https://github.com/wshobson/agents) and
[VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)
(see `CREDITS.md`) — our names match ecosystem convention, our prompts are original and more specific than the padded-count competitors.

**Site** (`agentkit/web/`) — Next.js landing page: hero, "curated not collected," two-kit split, full agent/skill/command listing, install instructions. Dark theme (`#1F1F1F` bg / white text / `#ABA8A7` paragraph / `#E1663F` accent), Inter + JetBrains Mono.

## Curated backlog — candidates for v4+

The v2/v3 backlog (6 engineer agents, 1 marketing agent, 1 skill, 2 commands) is fully shipped as of this pass. Nothing is queued right now — the next entries only get added when a real, recurring gap shows up, not to hit a headcount. Candidates to consider if/when they come up: `graphql-specialist`, `mobile-specialist` (React Native/Flutter), `data-engineer` (ETL/pipeline correctness), `technical-writer` (docs that match an existing style guide), `sales-enablement` (marketing-adjacent, positioning for a sales conversation rather than a page).

## Site structure (`web/`)
- `/` — hero, problem (solo-builder tax), curated pitch, two-kit split, agents/skills/commands sections, install
- Static content only — no backend, no auth, no payment

## Tech
- Next.js (App Router, TypeScript, Tailwind) — scaffolded via `create-next-app`
- Fonts: Inter (sans), JetBrains Mono (code)
- Deploy target: Vercel (free tier) once ready

## Pricing
- Free for now, no paywall, no account system.
- Pricing may come later once the kit has grown enough to justify it — keep the core small set free even then. Don't build pricing infra prematurely; structure the site so a pricing section can be added without a rewrite (kit split into engineer/marketing already supports a future per-kit price).

## Not doing
- No CLI installer tool, no account system, no payment integration
- No padding the agent count — ship a small set of excellent ones, add more only when each one earns it

## Next steps
- [x] Scaffold Next.js app in `web/`
- [x] Write first 9 agents + 1 skill + 3 commands
- [x] Build landing page content, navbar, dark theme, real fonts
- [x] Confirm dev server boots and production build passes
- [x] Push to GitHub (ayushsingh82/Ensemble)
- [x] Add a CREDITS/LICENSE (MIT) file
- [x] Ship v2: `docker-specialist`, `brand-voice` agents; `playwright-e2e` skill; `/campaign-brief` command
- [x] Ship v3: clear the rest of the backlog — `python-pro`, `ci-engineer`, `refactorer`, `performance-profiler`, `accessibility-auditor`, `architect-reviewer`, `competitive-analyst` agents; `stripe-integration` skill; `/api-scaffold`, `/email-sequence` commands
- [ ] Deploy to Vercel, pick a domain — needs account login/domain choice, not something to do unattended
