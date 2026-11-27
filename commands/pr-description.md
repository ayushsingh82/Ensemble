---
description: Write a PR description from the actual diff — what changed, why, how it was verified
---

Write a pull request description from the real changes, not from memory.

1. Run `git diff <base>...HEAD` and `git log <base>..HEAD` and read what changed.
2. **What changed** — two or three bullets on behavior, not a file list.
3. **Why** — the problem this solves, linking the issue or context if one exists in the history.
4. **How it was verified** — only tests and checks that were actually run, with results. If none were run, say "not verified".
5. **Risk and rollout** — migrations, config, flags, or breaking changes; "none" if none.

Keep it under 20 lines. Do not claim tests pass unless you ran them, and do not describe changes that aren't in the diff.
