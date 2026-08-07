---
description: Run a pre-deploy checklist against the current changes before shipping
---

Before this is deployed, verify each of the following against the actual current diff (not from memory):

1. **Build passes** — run the project's build command and confirm it exits clean.
2. **Tests pass** — run the existing test suite; don't skip failing tests to get a clean run.
3. **No secrets in the diff** — check for API keys, tokens, or credentials in changed files, including in `.env` files that might have been accidentally staged.
4. **Migrations are backward compatible** if the diff touches the database schema — a migration that breaks the currently-deployed version during rollout is a deploy-time outage waiting to happen.
5. **Security-sensitive changes have been audited** — if the diff touches auth, payments, or user input handling, confirm `security-auditor` has reviewed it; don't skip this because time is short.
6. **Rollback plan exists** — state in one sentence how to revert this specific change if it breaks something in production.

Report each item as pass/fail with the specific evidence (command output, file checked), not just a checkmark. Stop and flag anything that fails rather than proceeding past it.
