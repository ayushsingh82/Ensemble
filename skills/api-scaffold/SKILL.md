---
name: api-scaffold
description: Use when adding a new API endpoint to an existing project. Reads the project's current routing, validation, auth, and error-handling conventions first, then generates a new endpoint that matches them — instead of introducing a new pattern.
---

# API Scaffold

Generate a new endpoint that looks like it was written by whoever wrote the rest of the API, not like it was dropped in from a template.

## Steps

1. **Find an existing endpoint of a similar shape first.** Before writing anything, locate at least one comparable existing route (same resource type — list/create/update/delete — or the closest analog) and read it fully: routing style, validation approach, error response shape, auth middleware, and how it talks to the data layer.
2. **Match, don't improve.** Use the same router/framework conventions, the same validation library, the same error format, and the same response envelope already in use. If the existing pattern has a real problem, note it separately — don't silently "fix" it by introducing a different pattern in the new endpoint alone.
3. **Reuse existing auth/permission middleware** rather than writing a new check inline, unless no comparable middleware exists yet.
4. **Match the existing data-access pattern** (ORM query builder, raw SQL, repository class — whatever the codebase already uses) rather than introducing a new one for this endpoint.
5. **Cover the same edge cases the existing sibling endpoint covers** — not-found, invalid input, unauthorized — using the same response shapes it uses for those cases.

## When there is no existing pattern to match

If this is the first endpoint in the project (or the first of its kind), pick the simplest option that fits the stack already declared in the project (framework, ORM, validation library already in `package.json`/equivalent) rather than introducing a new dependency. State the convention you're establishing explicitly, since every later endpoint will follow it.

## What this skill refuses to do

- Introduce a new validation library, ORM, or response format when the project already has one, even if the existing one has rough edges.
- Generate an endpoint with no reference point when a comparable one exists in the codebase — always look first.
