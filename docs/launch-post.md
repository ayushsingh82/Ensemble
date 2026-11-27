# Ensemble: 46 Claude Code agents, none of them generic

Most agent packs sell you a number. 89 agents. 200 agents. 100+ skills. I went looking for ones worth delegating to and kept finding the same thing: long prompts that open with "You are a senior engineer with 15 years of experience" and then describe a job title.

A job title doesn't change what Claude does. A specific refusal does.

So I wrote Ensemble: 46 agents, 9 skills and 11 commands for Claude Code, open source, MIT. They average 29 lines each.

## What makes them different

Every agent has the same three things, and a script checks for them on every push:

1. **A trigger and a "not for".** The `description` says when to use the agent and when not to, and points at the agent that fits instead. This is what lets Claude pick the right one on its own.
2. **A numbered process that puts evidence before action.** `debugger` reproduces before it touches code. `data-engineer` states the grain of a table before writing a transform. `smart-contract-auditor` maps who can move the funds before it reads a function.
3. **A "What you refuse to do" section.** This is the part that matters. `code-reviewer` won't report a bug it can't give a failing input for. `content-marketer` won't invent a performance number. `release-manager` won't ship a breaking change as a patch. `incident-responder` won't run a destructive command mid-outage without stating the blast radius.

The refusals aren't decoration. Each agent has a matching eval case in `evals/cases/`: a prompt written to tempt exactly the violation its refuse-to-do section forbids.

## They hand off to each other

Real work crosses specialties. Each agent names who it passes work to and when: `code-reviewer` to `security-auditor` when a diff touches auth, `debugger` to `test-automator` once a root cause is fixed, `pricing-strategist` to `competitive-analyst` for sourced competitor prices. `tech-lead` is the orchestrator that splits a request and won't call it done until each piece has cleared its gate.

## Install

In Claude Code 2.1.275 or later:

```
/plugin install ensemble --marketplace ayushsingh82/Ensemble
```

Or copy `agents/`, `skills/` and `commands/` into your project's `.claude/` folder.

## What I can and can't tell you

- I can tell you the counts, the line lengths, and that CI enforces the authoring spec. Those are facts you can check in the repo.
- I **can't** yet tell you how often these agents hold their refusals under pressure. The eval harness exists and runs against the Anthropic API with a separate judge model, but I haven't published results until they're real. When they are, they'll be in the README with the raw transcripts next to them, including the failures.
- I'm not claiming users or adoption. This is a v0.2.

## Contributing

A new agent has to fill a recurring gap, not raise the count. The spec is in `CONTRIBUTING.md`, and `node tools/check-agents.mjs` tells you if yours meets it. If you've seen Claude repeatedly make the same mistake in some domain, that mistake is your refuse-to-do section.

Repo: https://github.com/ayushsingh82/Ensemble
