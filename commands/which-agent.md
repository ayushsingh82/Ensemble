---
description: Pick the right Ensemble agent for a task and explain why, in one short answer
---

Given the task described (or the current conversation if none is given), pick the best agent from `agents/` and say why.

1. Read the `description` line of the candidate agents; match on the trigger and the "Not for" clause, not on the name alone.
2. Name one primary agent and, only if truly needed, one follow-up agent for the hand-off (see each agent's Hand-offs section).
3. Give a one-line reason and the exact phrase to invoke it, such as `Use debugger to find why checkout 500s`.
4. If the task spans several specialties, recommend `tech-lead` instead of listing a team.

If nothing fits, say so and suggest doing it directly. Do not recommend an agent just to use one.
