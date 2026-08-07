# Ensemble — Plan

Free, open-source, curated agents/skills/commands kit for Claude Code.
Positioning against AgentsKit: small, honest, quality-first curated set — not padded to hit a headcount. "A group that plays together" — specialists that hand off to each other cleanly, gated by an orchestrator.

## Shipped (v1)

**Agents** (`agentkit/agents/`)
- `tech-lead` — orchestrator, delegates and gates completion
- `backend-architect` — API/schema design, boring-tech bias
- `react-specialist` — React/Next.js UI, matches existing component patterns
- `code-reviewer` — real bugs only, concrete failure scenario per finding
- `debugger` — reproduce → isolate → hypothesis → verify → check for recurrence
- `test-automator` — tests that catch regressions, risk-prioritized, not coverage-padding
- `security-auditor` — OWASP-grounded, severity-ranked, exploit-scenario findings
- `growth-strategist` — finds the funnel's binding constraint before recommending action
- `content-marketer` — one true, specific claim per piece of copy

**Skills** (`agentkit/skills/`)
- `api-scaffold` — matches existing codebase conventions instead of imposing new architecture

**Commands** (`agentkit/commands/`)
- `/deploy-checklist` — build/tests/secrets/migrations/security gate before shipping
- `/test-coverage` — highest-risk untested paths in recent changes, ranked
- `/launch-plan` — claim, channels, assets, sequencing, success metric

**Site** (`agentkit/web/`) — Next.js landing page: hero, "curated not collected," two-kit split, full agent/skill/command listing, install instructions. Dark theme (`#1F1F1F` bg / white text / `#ABA8A7` paragraph / `#E1663F` accent), Inter + JetBrains Mono.

## Curated backlog — candidates for v2+

Each one only gets built when it earns its place with a real, specific system prompt — not added just to move a counter. Roughly ordered by how often the gap actually shows up.

**Engineer kit**
- `typescript-pro` — type-level correctness, avoiding `any`-as-escape-hatch, generic design
- `python-pro` — idiomatic Python, typing, packaging conventions
- `postgres-pro` — schema/index/query tuning, migration safety on a live table
- `docker-specialist` — multi-stage builds, image size, layer caching
- `ci-engineer` — pipeline design, what to gate on, flaky-test triage
- `refactorer` — behavior-preserving structural cleanup, distinct from `code-reviewer`'s bug-hunting
- `performance-profiler` — measures before optimizing, flags premature optimization
- `accessibility-auditor` — WCAG-grounded, concrete assistive-tech failure scenarios (pairs with `react-specialist` the way `security-auditor` pairs with `backend-architect`)
- `db-migrator` — zero-downtime migration sequencing on a live schema

**Marketing kit**
- `seo-specialist` — technical + content SEO, grounded in actual search intent, not keyword stuffing
- `brand-voice` — keeps copy consistent with an established voice, legally clean claims
- `competitive-analyst` — factual competitor comparison, no unverifiable claims about competitors

**Skills**
- `stripe-integration` — matches existing payment/webhook patterns
- `tdd-workflow` — red/green/refactor loop as a loaded skill, not a one-off agent
- `playwright-e2e` — end-to-end test authoring matched to existing test structure

**Commands**
- `/api-scaffold` variant as a command for one-shot use outside the skill's auto-trigger
- `/campaign-brief` — marketing equivalent of a technical scoping doc
- `/email-sequence` — sequence structure + one-claim-per-email discipline

## Site structure (`web/`)
- `/` — hero, problem (solo-builder tax), curated pitch, two-kit split, agents/skills/commands sections, install
- Static content only for v1 — no backend, no auth, no payment

## Tech
- Next.js (App Router, TypeScript, Tailwind) — scaffolded via `create-next-app`
- Fonts: Inter (sans), JetBrains Mono (code)
- Deploy target: Vercel (free tier) once ready

## Pricing
- Free for now, no paywall, no account system.
- Pricing may come later once the kit has grown enough to justify it — keep the core small set free even then. Don't build pricing infra prematurely; structure the site so a pricing section can be added without a rewrite (kit split into engineer/marketing already supports a future per-kit price).

## Not doing (v1)
- No CLI installer tool, no account system, no payment integration
- No padding the agent count — ship a small set of excellent ones, add more only when each one earns it

## Next steps
- [x] Scaffold Next.js app in `web/`
- [x] Write first 9 agents + 1 skill + 3 commands
- [x] Build landing page content, navbar, dark theme, real fonts
- [x] Confirm dev server boots and production build passes
- [x] Push to GitHub (ayushsingh82/Ensemble)
- [ ] Pick 1-2 items from the v2 backlog above and write them next
- [ ] Add a CREDITS/LICENSE (MIT) file
- [ ] (Later) deploy to Vercel, pick a domain
