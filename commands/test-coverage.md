---
description: Find the highest-risk untested code paths in recent changes and report them
---

Identify the code paths most likely to break silently that currently have no test coverage, scoped to recent changes (not the whole codebase from scratch).

1. Get the diff of what's changed recently (`git diff` against the base branch, or the files touched in this session).
2. For each changed function with conditional logic (branches, loops, error handling), check whether an existing test exercises each branch — not just whether the function is called by some test.
3. Rank the gaps by risk: unhandled error paths and boundary conditions (empty/null/first/last) first; straightforward pass-through code last.
4. Report the ranked list with file:line and the specific untested branch — not a blanket "add more tests" recommendation.

Do not write the tests as part of this command unless asked — this is a report, not an implementation. Hand off to `test-automator` for the actual test-writing.
