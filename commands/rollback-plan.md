---
description: Write the rollback plan for the change about to ship, before it ships
---

Produce a rollback plan for the pending change, grounded in its diff.

1. Read the diff and list what is not simply reverted by a code revert: migrations, data writes, config, external side effects (emails, payments, webhooks).
2. **Fast path** — the exact command or flag flip to undo the code change, and how long it takes.
3. **Data path** — for each irreversible effect, what is lost or left inconsistent and how to repair it.
4. **Trigger** — the specific metric and threshold that means "roll back now", and who decides.
5. **Point of no return** — the step after which rollback is no longer possible, if any.

Output a short checklist. If part of the change cannot be rolled back, say so plainly instead of writing a plan that pretends it can. Do not run any rollback commands.
