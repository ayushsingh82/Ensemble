# Contributing

Ensemble is deliberately small. A new agent has to fill a real, recurring gap — not raise a headcount. Every rule below is enforced by `node tools/check-agents.mjs`, which CI runs on every push.

## Agent spec

File: `agents/<name>.md`, where `<name>` equals the frontmatter `name`.

```markdown
---
name: example-pro
description: Use when <trigger>. Not for <when-not-to-use>.
tools: Read, Grep, Glob, Bash
model: sonnet
---
```

Required:

1. **Description** starts with `Use when/before/after/for/to` and states when *not* to use it.
2. **`## Process`** — numbered steps, evidence before action.
3. **`## What you refuse to do`** — the specific failure mode this agent exists to prevent.
4. **At most 45 lines.** Concision is the product; padding is rejected.
5. **`model`** is `sonnet` unless the agent makes judgment calls that are expensive to get wrong (`opus`: tech-lead, security-auditor, architect-reviewer, backend-architect, growth-strategist, smart-contract-auditor, pricing-strategist).
6. Cross-references to other agents must name real agents (checked).

## Skills and commands

- Skills: `skills/<name>/SKILL.md`, frontmatter `name` equals directory, description starts with a Use-when trigger.
- Commands: `commands/<name>.md` with a one-line `description`.

## Honesty rule

No invented traction, testimonials, or benchmark numbers. Every claim is a checkable fact or explicitly labelled illustrative. Eval pass rates are published only after `evals/run.mjs` has actually run.

## Before opening a PR

```bash
node tools/check-agents.mjs
```
