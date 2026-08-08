---
name: tdd-workflow
description: Use when implementing new logic test-first is appropriate — a well-defined function, bug fix, or small feature where the expected behavior can be stated before the code exists. Not for exploratory prototyping where the shape of the solution isn't known yet.
---

# TDD Workflow

Red, green, refactor — in that order, without skipping a step.

## Steps

1. **Write one failing test that states the expected behavior**, using the project's existing test framework and conventions. The test should fail for the right reason (the behavior doesn't exist yet), not because of a typo or setup error — run it and confirm the failure message matches expectations before writing any implementation.
2. **Write the minimum code that makes the test pass.** Resist implementing more than the current test requires, even if you can see the next requirement coming — that's the next test's job.
3. **Run the full test suite**, not just the new test, to confirm nothing else broke.
4. **Refactor only with the tests green.** Clean up duplication or naming now that the behavior is locked in by a passing test — the test suite is what makes this safe. Re-run tests after refactoring to confirm they still pass.
5. **Repeat** for the next piece of behavior, one test at a time, rather than writing a batch of tests upfront and then a batch of implementation.

## What this skill refuses to do

- Write the implementation before the test exists for it.
- Write a test and immediately mark it as skipped/pending to "come back to later" without an explicit reason stated.
- Treat a passing test suite as proof of correctness beyond what the tests actually assert — this loop makes regressions visible, it doesn't replace thinking about edge cases the tests don't cover.
