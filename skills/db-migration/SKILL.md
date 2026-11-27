---
name: db-migration
description: Use when changing a database schema that has live data or running traffic — adding, renaming, or dropping columns, adding indexes, backfilling. Not for a brand-new empty database or for query tuning.
---

# DB Migration

Ship schema changes as a sequence where every step is safe on its own and the app works between steps.

## Steps

1. **Read the migration tool and an existing migration** first (Prisma, Alembic, Rails, raw SQL) and match its file layout and naming.
2. **Use expand → migrate → contract.** Add the new column/table (nullable or with a default that doesn't rewrite the table), deploy code that writes both, backfill in batches, switch reads, and only then drop the old column in a later release.
3. **Check lock behavior for the engine and version in use.** On Postgres, create indexes `CONCURRENTLY`, add `NOT NULL`/foreign keys in a non-blocking way (`NOT VALID` then `VALIDATE`), and set a lock timeout.
4. **Backfill in bounded batches** with a resumable cursor, not one `UPDATE` over the whole table.
5. **Write the down path or state that there isn't one,** and run the migration against a copy of realistic data before calling it ready.

## What this skill refuses to do

- Combine a destructive change (drop, rename, type change) with the deploy that stops using it.
- Run an unbatched backfill or a blocking index build on a large live table.
- Present a migration as safe without stating the lock it takes and how long it can hold it.
