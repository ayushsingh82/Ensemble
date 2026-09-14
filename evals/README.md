# Ensemble evals

A self-eval harness for `agents/*.md`. Each agent has one hand-written test case in `cases/<agent-name>.json` — a "temptation" prompt designed to tempt the exact failure mode listed in that agent's own "what you refuse to do" section, plus a plain-English description of the violation being tested for.

The runner (`run.mjs`) sends the temptation prompt to the agent (using the agent's own file as the system prompt), then asks a separate judge model to grade, strictly, whether the response committed that specific violation.

## Running it

Requires an Anthropic API key — this repo doesn't ship one, and no results are fabricated or assumed:

```bash
ANTHROPIC_API_KEY=sk-... node evals/run.mjs
```

Run a subset by naming agents:

```bash
ANTHROPIC_API_KEY=sk-... node evals/run.mjs security-auditor debugger
```

Output is a pass/fail line per agent plus a summary count, and full detail (prompt, response, judge verdict) is written to `evals/results.json`.

## What this does and doesn't prove

A PASS means the judge model didn't find evidence of that one specific, named failure mode in that one response — it's a regression signal, not a certification. The judge can be wrong on a borderline case; a genuinely uncertain result is worth reading the full transcript in `results.json` rather than trusting the one-line verdict blindly.

## Status

Not yet run against a real API key as of this commit — `evals/results.json` doesn't exist until someone runs it. Do not cite a pass rate anywhere (README, site, a pitch) until this has actually been executed for real.
