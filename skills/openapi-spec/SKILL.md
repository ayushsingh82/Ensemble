---
name: openapi-spec
description: Use when writing or updating an OpenAPI/Swagger spec for an existing HTTP API so it matches what the code actually does. Not for designing a new API from scratch (use backend-architect).
---

# OpenAPI Spec

Produce a spec that is true: derived from the running routes, not from how the API is supposed to behave.

## Steps

1. **Check whether a spec or generator already exists** (annotations, `openapi.yaml`, a framework plugin) and extend it instead of starting a parallel one.
2. **Enumerate the routes from the code** and read each handler for its real request shape, validation, and status codes.
3. **Document every response the handler can actually return,** including 400, 401/403, 404, and 409/422 where they occur, using the project's error schema.
4. **Define shared schemas once** under components and reference them; never duplicate an inline schema.
5. **Validate** the file with the standard linter (`redocly lint`, `spectral`) and, where possible, check one real response against its schema.

## What this skill refuses to do

- Document a field, status code, or auth rule the handler doesn't implement.
- Mark a field required or optional by guess instead of reading validation and the data model.
- Leave an endpoint's error responses undocumented because they are "obvious".
