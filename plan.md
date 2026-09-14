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

## Goal: acquisition / acqui-hire readiness

As of 2026-09-14 the target for the project shifted: the point is no longer just "grow the free kit," it's to make Ensemble look like a real, adopted, working product with systematic engineering judgment behind it — something a company would want to acquire or hire the builder over. Benchmarked against `wshobson/agents` (202 agents / 183 skills / 105 commands, multi-harness plugin marketplace) and VoltAgent's `awesome-claude-code-subagents` + `awesome-codex-subagents` (161 + 175 agents, flat categorized lists) — Ensemble can't and shouldn't try to out-scale any of them; 21 agents at ~24 lines each vs. their 143–233 line averages is the actual thesis.

**Hard rule: no fabricated traction, testimonials, or benchmark numbers.** Every claim shipped to the site/README has to be either a real, checkable fact (line counts, agent counts, a real test result) or explicitly labeled as illustrative. A due-diligence conversation that catches a fabricated number ends the conversation.

Five phases, in build order:

**Phase 1 — Make it real** (not yet started, needs the user)
- [ ] Deploy to Vercel, pick a domain — a company evaluator needs a live link, not "clone and run this." Needs Vercel login.
- [ ] Add honest, minimal analytics (Vercel Analytics or Plausible) so any later traction claim is a real number.

**Phase 2 — Prove it works** (done 2026-09-14)
- [x] Before/after transcript demo on the site — `web/app/components/Demo.tsx`, wired into `page.tsx` as the "Proof, not a pitch" / "See the difference" section. Two examples (code-reviewer catching a real IDOR/broken-access-control bug a generic response misses; content-marketer refusing to invent a performance number). Explicitly labeled "illustrative examples... not live API calls" — honest about what it is.
- [x] Per-agent self-eval harness — `evals/`. One hand-written test case per agent (`evals/cases/<name>.json`, 21 total) tempting the exact violation named in that agent's own "what you refuse to do" section; `evals/run.mjs` runs the agent for real against the Anthropic API and has a separate judge model grade pass/fail; results written to `evals/results.json`. **Not yet executed — no API key available in the build environment.** `evals/README.md` and the root `README.md` both say so explicitly; do not cite a pass rate anywhere until someone actually runs `ANTHROPIC_API_KEY=... node evals/run.mjs` and reads the real output.

**Phase 3 — Show engineering maturity** (not yet started)
- [ ] `CONTRIBUTING.md` with the explicit authoring spec: trigger + when-not-to-use, numbered process, refuse-to-do section, line-count ceiling (~20–35 lines).
- [ ] `tools/check-agents.sh` validation script enforcing that spec (frontmatter valid, no name collisions, refuse-to-do section present, under the line ceiling), wired into a GitHub Action so it runs on every push — a green CI badge on the README is a cheap, strong signal.
- [ ] Real hand-off graph — only 4 of 21 agents currently reference another agent by name. Expand cross-references + `tech-lead`'s delegation map (currently a 4-agent example list, not all 21) and put a "who hands off to whom" table/diagram on the site.
- [ ] Document the model-tier rationale (already true, just not stated): `opus` reserved for `tech-lead`, `security-auditor`, `growth-strategist`, `architect-reviewer`, `backend-architect`; `sonnet` for the other 16 execution-focused agents. wshobson mostly uses `model: inherit`; VoltAgent defaults broadly to `sonnet` — this is a real, checkable design decision worth a line on the site.

**Phase 4 — The pitch itself** (needs the user's voice/outreach; can draft)
- [ ] One-page narrative: problem → insight → evidence (real eval results once run, before/after demo) → honest differentiation vs. named alternatives.
- [ ] Real traction: post where real engineers will actually use it, track stars/installs honestly. Can prep README badges and launch copy (`content-marketer`); outreach itself is on the user.

**Phase 5 — Due-diligence hygiene** (spot-check before any actual conversation with a company)
- [ ] Re-confirm no copied code/text from the three cloned comparison repos and clean commit/authorship history. True as of 2026-09-14 — re-verify closer to the actual conversation, not from memory.

Stretch / lower priority:
- A `/which-agent` decision-aid command or short site table (VoltAgent's "Quick Selection Guide" concept, sized for 21 agents not 161).
- v4+ backlog candidates (`graphql-specialist`, `mobile-specialist`, `data-engineer`, `technical-writer`, `sales-enablement`) — only ship one if a real session needs it, never to pad a number for a pitch.

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
- [x] Phase 2 of acquisition-readiness roadmap (see section above): before/after demo + 21-case eval harness built

See "Goal: acquisition / acqui-hire readiness" above for the active, detailed roadmap (Phases 1, 3, 4, 5 still open).
