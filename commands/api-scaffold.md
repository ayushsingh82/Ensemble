---
description: Generate a new API endpoint matching existing conventions, as a one-shot command outside the api-scaffold skill's auto-trigger
---

Generate a new endpoint that matches the existing API's conventions — this is the `api-scaffold` skill run explicitly, for when you want it invoked directly rather than waiting for auto-trigger.

1. **Find an existing endpoint of a similar shape** (same resource type — list/create/update/delete — or the closest analog) and read it fully: routing style, validation approach, error response shape, auth middleware, data-access pattern.
2. **Match every one of those conventions** in the new endpoint — router/framework style, validation library, error format, response envelope, auth/permission middleware, data-access pattern. Don't introduce a different approach for this one endpoint even if the existing one has rough edges; note any real problem separately instead of silently "fixing" it here.
3. **Cover the same edge cases the sibling endpoint covers** — not-found, invalid input, unauthorized — with the same response shapes it already uses.
4. If this is the first endpoint of its kind in the project, state the convention being established explicitly, since every later endpoint will follow it — pick the simplest option that fits the stack already declared in the project rather than adding a new dependency.

Report the new endpoint's path and method, and which existing endpoint it was matched against.
