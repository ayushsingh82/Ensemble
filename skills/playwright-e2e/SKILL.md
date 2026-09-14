---
name: playwright-e2e
description: Use when writing an end-to-end test for a user-facing flow with Playwright. Matches the project's existing test structure and selectors instead of imposing a new pattern. Not for unit or integration tests (use tdd-workflow) or for setting up Playwright in a project for the first time without an existing convention to follow.
---

# Playwright E2E

Write end-to-end tests that exercise a real user flow the way a user actually would, matched to how the existing suite is structured.

## Steps

1. **Read an existing spec file first** — directory layout, how the project sets up/tears down state (fixtures, `beforeEach`, seeded test data), and how it authenticates a test user, before writing a new one from scratch.
2. **Select elements the way the existing suite does.** If the project already uses `data-testid`, role-based (`getByRole`), or text-based selectors consistently, follow that convention rather than introducing a different selector strategy for this one test. Prefer user-facing selectors (role, label, text) over brittle CSS/XPath when there's no existing convention to match.
3. **Assert on user-visible outcomes**, not implementation details — the confirmation text appeared, the item is in the list, the redirect happened — not that a specific internal function was called or a specific class name is present.
4. **Wait on state, not time.** Use Playwright's built-in auto-waiting and explicit `expect(...).toBeVisible()`/`toHaveText()` assertions instead of `page.waitForTimeout()`, which makes tests slow and still flaky.
5. **Keep the test independent.** It should set up its own data and not depend on state left behind by another test or a specific run order — check how the existing suite achieves isolation (fresh DB per run, API-created fixtures, unique generated data) and follow the same approach.
6. **Cover the real failure path too**, not just the happy path, when the flow has an obvious one (invalid input rejected, unauthorized access blocked) — matched to how thoroughly sibling tests in the suite already do this.

## What this skill refuses to do

- Introduce `page.waitForTimeout()` as a fix for a flaky test when the actual fix is waiting on the right condition.
- Write a test that depends on another test having already run, or on data left over from a previous run.
- Assert against internal implementation details a user could never observe.
