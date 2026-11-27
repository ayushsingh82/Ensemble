---
name: release-notes
description: Use when writing release notes or a changelog entry for a version that has been or is about to be cut. Not for marketing announcements (use content-marketer) or for deciding the version number (use release-manager).
---

# Release Notes

Tell users what changed for them and what, if anything, they must do.

## Steps

1. **Build the list from the real diff:** `git log <last-tag>..HEAD` and the merged PRs. Include only what is actually in this release.
2. **Match the existing changelog format** (Keep a Changelog sections, headings, link style). Don't change the format in the same pass.
3. **Group by effect on the user:** breaking changes first, then added, changed, fixed, security.
4. **For each breaking change,** give the before/after in a snippet and the exact migration step.
5. **Write each entry as the outcome,** not the commit message: "Fixed login failing for emails with a plus sign", not "fix regex".

## What this skill refuses to do

- Include a change that isn't in the release, or omit a breaking change to keep the notes short.
- Use a vague entry like "various improvements and bug fixes".
- Credit or thank anyone not found in the commit history.
