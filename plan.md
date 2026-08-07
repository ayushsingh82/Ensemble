# Ensemble — Plan

Free, open-source, curated agents/skills/commands kit for Claude Code.
Positioning against AgentsKit: small, honest, quality-first curated set — not padded to hit a headcount. "A group that plays together" — specialists that hand off to each other cleanly, gated by an orchestrator.

## What ships first
1. **Landing page** (this Next.js app) — explains what Ensemble is, lists the curated agents/skills, links to the GitHub repo. No paywall, no checkout — just docs + install instructions.
2. **The actual kit** (`agentkit/agents/`, `agentkit/skills/`) — 5 agents + 1 skill, hand-written, each with a real, specific system prompt:
   - `tech-lead` — orchestrator, delegates and gates completion
   - `code-reviewer` — real bugs only, concrete failure scenario per finding
   - `debugger` — reproduce → isolate → hypothesis → verify → check for recurrence
   - `backend-architect` — API/schema design, boring-tech bias
   - `security-auditor` — OWASP-grounded, severity-ranked, exploit-scenario findings
   - `api-scaffold` (skill) — matches existing codebase conventions instead of imposing new architecture
3. **Install path** — `git clone` / copy `.md` files into `.claude/agents/` and `.claude/skills/`. No CLI needed for v1 (AgentsKit's CLI is not the differentiator here; content quality is).

## Site structure (`web/`)
- `/` — hero, problem (solo-builder tax), what's inside, install instructions, agent/skill list
- Static content only for v1 — no backend, no auth, no payment

## Tech
- Next.js (App Router, TypeScript, Tailwind) — scaffolded via `create-next-app`
- Deploy target: Vercel (free tier) once ready

## Not doing (v1)
- No paid tiers, no CLI installer tool, no account system
- No padding the agent count — ship 5-6 excellent ones, add more only when each one earns it

## Next steps
- [ ] Scaffold Next.js app in `web/`
- [ ] Write the 5 agent `.md` files + 1 skill (content already drafted in chat, pending write)
- [ ] Build landing page content from this plan
- [ ] Confirm dev server boots
- [ ] (Later) deploy, pick domain
