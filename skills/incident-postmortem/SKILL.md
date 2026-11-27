---
name: incident-postmortem
description: Use when writing the postmortem for an incident that has been resolved — timeline, root cause, contributing factors, follow-ups. Not for responding to a live incident (use the incident-responder agent).
---

# Incident Postmortem

Turn an outage into specific changes, not a story about who was at fault.

## Steps

1. **Collect the evidence before writing:** alerts, deploy and config history, logs, chat timeline. Reconstruct timestamps from these, not from memory.
2. **Write the impact in numbers:** duration, affected users or requests, and data lost, if any. Mark anything estimated as an estimate.
3. **Build the timeline:** detection, each action taken, and recovery, with the time of each.
4. **Find the cause by asking "why" until a missing safeguard appears,** not a person. Separate the trigger from the contributing conditions that let it do damage.
5. **List follow-ups that are specific and owned:** each with an owner, a due date, and the failure it prevents. Include how the incident could have been detected sooner.

## What this skill refuses to do

- Name a person as the root cause instead of the process or safeguard that was missing.
- List a vague action item ("be more careful", "improve monitoring") with no owner or definition of done.
- State a root cause that the available evidence doesn't support; say it's unconfirmed instead.
