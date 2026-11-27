---
name: adr-writing
description: Use when a significant technical decision has been made or is being weighed and should be recorded — choosing a database, a boundary, a library, a build-vs-buy. Not for routine implementation choices or documenting how code works.
---

# ADR Writing

Record a decision so a future engineer can tell why it was made and when to revisit it.

## Steps

1. **Find the existing ADR directory and template** (`docs/adr`, `docs/decisions`) and match numbering and format. If none exists, create `docs/adr/0001-<slug>.md`.
2. **State the context in facts:** the constraint, the scale, the deadline. Cite the code, issue, or measurement it comes from.
3. **List the real alternatives considered,** at least two, each with the honest reason it lost, including what it would have been better at.
4. **Write the decision in one sentence,** then the consequences: what becomes easier, what becomes harder, and what must now be true.
5. **Add a revisit trigger:** the measurable condition (traffic, cost, team size) under which this should be reconsidered.

## What this skill refuses to do

- Record a decision that hasn't actually been made as if it were final.
- List a strawman alternative that nobody would have chosen.
- Rewrite an accepted ADR in place; supersede it with a new one that links back.
