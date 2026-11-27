# Competitors

Researched 2026-11-27. Everything here is one of: **[verified]** (read from the GitHub API, a repo file, or an official doc on that date), **[sourced]** (a named third-party page, linked), or **[unverified]** (stated, but I couldn't confirm it). Star counts move daily, so re-pull before quoting any of them.

## Read this first

1. **"Curated, small" is not a moat.** `obra/superpowers` has 15 skills and 328k stars, and `anthropics/skills` has 20 skills and 201k stars. Small is table stakes in 2026; being small *and invisible* is where we are.
2. **Evals are not unique, and ours have never run.** `wshobson/agents` ships a static scorer plus an experimental eval program, and `obra/superpowers` has trigger tests. Our 46 eval cases exist but `evals/results.json` doesn't, so today we can claim nothing from them.
3. **Our hand-off graph is the one thing I could not find elsewhere**: generated from the agents, checked in CI, no orphans. VoltAgent has hand-off *prose* in each agent, unchecked.
4. **Three big competitors weren't on the list**: `obra/superpowers` (328k★), `affaan-m/ECC` (312k★), and `msitarzewski/agency-agents` (171k★, with 37 marketing personas, so it overlaps our marketing kit). Any launch plan has to be written against them, not against `wshobson`.

## 1. Matrix: us vs. them

GitHub numbers: `gh api` on 2026-11-27 **[verified]**. "Files" are `.md` files under `agents/`, `SKILL.md`, and `commands/` by path, so they include nested, duplicated, and translated copies. Treat them as upper bounds, not catalog sizes.

| | Stars / forks | Contribs | Size (files) | Install | Plugin marketplace | CI | Evals / tests | Releases |
|---|---|---|---|---|---|---|---|---|
| **Ensemble (us)** | 0 / 0 (remote last pushed 2026-09-14; today's work is unpushed) | 1 | 46 agents · 9 skills · 11 commands | copy files, or `/plugin install ensemble --marketplace ayushsingh82/Ensemble` (**untested until pushed**) | manifest validates; not live | local workflow, not pushed | 46 behavioural cases, **never run** | none |
| wshobson/agents | 42,984 / 4,554 | 99 | ~199 agents · 185 skills · 103 commands · 144 `plugin.json` | `/plugin marketplace add` then per-plugin install | **Yes**, granular (one plugin per domain) | 8 workflows | static scorer + experimental LLM/Monte-Carlo layers; a trace-based program "in progress" | none (tracks `main`) |
| VoltAgent/awesome-claude-code-subagents | 26,806 / 3,048 | 46 | ~166 agents in 10 category plugins | marketplace add, or copy | **Yes** (10 plugins) | 2 (one enforces plugin version bumps) | none found | none |
| VoltAgent/awesome-codex-subagents | 6,535 / 713 | 9 | 176 `.toml` agents (Codex) | copy | no | none | none found | none |
| anthropics/skills | 201,387 / 23,572 | 17 | 20 skills (+3 agent files) | `/plugin marketplace add anthropics/skills` | **Yes** | none | none verified | none |
| anthropics/claude-plugins-official | 48,449 / 5,082 | 49 | ~48 agents · 62 skills · 33 commands across 57 plugins | `/plugin install x@claude-plugins-official` | **Yes (the official one)** | 8 | some | none |
| davila7/claude-code-templates | 34,243 / 4,138 | 210 | ~424 agent files · 928 skills · 348 command files | `npx` CLI + registry site | 2 `marketplace.json` | 27 workflows | 425 path matches for "eval" **[unverified: not opened]** | 22 (v1.29.7, 2026-10-09) |
| SuperClaude_Framework | 23,949 / 1,986 | 49 | 42 agents · 9 skills · 61 commands | installer + plugin dir **[install method not read]** | no marketplace file | 7 | none found | 14 (v4.3.1, 2026-11-27) |
| ruvnet/ruflo (claude-flow) | 82,547 / 9,720 | 106 | hundreds of files incl. mirrors (98 under `agents/`) · 403 skills · 79 commands | **[not read]** | 1 `marketplace.json` | 39 workflows | 57 path matches **[unverified]** | 30 (v3.80.11, 2026-11-27) |
| **obra/superpowers** *(not on your list)* | 328,152 / 29,152 | 44 | 15 skills, no agents | `/plugin install superpowers@claude-plugins-official` | **Yes** (own + official listing) | none | `tests/` (claude-code, opencode, explicit-skill-requests) | 7.0.2 (2026-11-03) |
| **affaan-m/ECC** *(not on your list)* | 311,708 / 45,784 | 547 | ~72 top-level agents · 1,089 skills · ~99 commands | **[not read]** | 4 `marketplace.json` | 16 | 532 path matches **[unverified]** | v2.2.3 (2026-10-01) |
| **msitarzewski/agency-agents** *(not on your list)* | 170,594 / 27,746 | 112 | 295 persona files in ~17 divisions (37 marketing, 9 sales, 66 engineering) | copy into `.claude/agents` | no | 7 | none | none |
| PatrickJS/awesome-cursorrules | 41,201 / 3,562 | 87 | ~300 files of rules | copy | n/a (Cursor) | 2 | none | none (last push 2026-05-30) |
| github/spec-kit *(adjacent)* | 152,157 / 13,674 | 358 | 36 commands | **[not read]** | no | 30 | 434 test paths | v1.4.5 (2026-11-25) |

Sources for the table: GitHub API, 2026-11-27, plus each repo's file tree. Other directories: `hesreallyhim/awesome-claude-code` (58,925★) is a link list, not a component set.

## 2. Quality: three prompts each, against ours

Method: the closest debugger / security / reviewer-type file by path in each repo, read in full or in structure. "Refusal phrases" is a crude grep (`never | do not | don't | must not | avoid | iron law`), so it counts mentions, not quality. **This is a sample of three per repo, not a rating of the repo.** All files read via the GitHub contents API on 2026-11-27.

| Repo | Files read (lines / words) | What I saw |
|---|---|---|
| **Ours** | `debugger` 28/391 · `security-auditor` 36/461 · `code-reviewer` 39/410 | Trigger + "Not for" in the description; numbered process; explicit refuse-to-do; named hand-offs. |
| wshobson | `debugger` 33/117 · `security-auditor` 41/272 · `code-reviewer` 171/1,100 | The 33-line debugger is a generic 5-step list; 0 refusal phrases in all three. Their `code-reviewer` is a 106-bullet checklist. Depth is uneven across files. |
| VoltAgent | `debugger`, `security-auditor`, `code-reviewer`: **286 lines each**, ~900 words, 176 bullets each | One skeleton reused: "When invoked → checklist → techniques → communication protocol → integration with other agents". Opens with "Query context manager for…" Their hand-offs are eight prose lines like "Collaborate with error-detective". 0 refusal phrases. |
| SuperClaude | `root-cause-analyst` 48/360 · `security-engineer` 50/376 · `self-review` 33/202 | Concise; role + focus areas + boundaries. 1 refusal phrase each. Closest to our size. |
| ruflo | `core/reviewer` 308/1,012 · `core/coder` 254/914 · `tdd-london-swarm` skill 248/781 | Long swarm-oriented prompts; 1-3 refusal phrases. |
| davila7 | `debugger` 156/1,064 · `code-reviewer` 175/1,358 · `graphql-security-specialist` **868/3,438** | Community-contributed, so size and quality vary by 5x within the sample. |
| ECC | `code-reviewer` 323/2,016 · `security-reviewer` 117/780 · `tdd-guide` 100/573 | Each starts with the same 6-bullet "Prompt Defense Baseline" (injection hardening) boilerplate. Strongest guardrail effort among the agent collections. |
| agency-agents | `code-reviewer` 76/460 · `security-ai-generated-code-auditor` 207/2,702 · `baidu-seo-specialist` 226/1,737 | Persona style: emoji, "Your Identity & Memory", "Personality". The security one has real substance (18 refusal-phrase hits). |
| anthropics (official) | `feature-dev/code-reviewer` 46/425 · `agent-sdk-verifier-py` 140/729 | Short and task-shaped. 0 refusal phrases. |
| superpowers (skills) | `systematic-debugging` 283/1,454 · `verification-before-completion` 120/580 · `test-driven-development` 330/1,475 | The strongest discipline I read: "The Iron Law: NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST… No exceptions". They are long, but each makes a hard refusal. |

**What this says honestly.** Specificity and refusals are *not* absent from the ecosystem: superpowers and ECC have them. What is rare among *agent* collections is the combination of (a) a trigger with an explicit "Not for → use X", (b) a refuse-to-do section, and (c) hand-offs that are validated. Whether a 30-line agent beats a 300-line one **has not been demonstrated by anyone**, including us. The evidence that "less context is better" is secondhand (see §4).

Context-cost snapshot, from the old local clones in `agent-special/` (Sept 2026, so stale; descriptions only, `chars/4`):

| | Agents | Avg description | Total description | ≈ tokens if all installed | Avg agent file |
|---|---|---|---|---|---|
| Ensemble | 46 | 239 chars | 10,980 | ~2,750 | 30 lines |
| VoltAgent | 161 | 211 chars | 34,041 | ~8,500 | 234 lines |
| wshobson | 202 | 273 chars | 55,217 | ~13,800 | 144 lines |

Our per-agent description is *not* shorter; we win only on how many there are. Note wshobson's marketplace doesn't load anything until you install a plugin ([sourced](https://rywalker.com/research/wshobson-agents), [unverified against the docs](https://code.claude.com/docs/en/plugin-marketplaces)), so the "install everything" comparison is the worst case, not the default.

## 3. Engineering maturity

- **CI:** wshobson 8 workflows, ruflo 39, davila7 27, ECC 16, spec-kit 30, VoltAgent 2 (including a plugin-version-bump gate). We have one workflow, **not yet pushed**.
- **Versioning:** davila7, SuperClaude, ruflo, superpowers, ECC and spec-kit cut GitHub releases. wshobson, VoltAgent, anthropics/skills, agency-agents don't (wshobson: "no versioned GitHub releases", [source](https://rywalker.com/research/wshobson-agents)).
- **Docs site:** davila7 has a registry site and ~190 files under `docs/`; ruflo 437; SuperClaude 145; wshobson 13; VoltAgent none. We have a landing site (`web/`), not deployed.
- **Evals:** see the matrix. wshobson's own README says its LLM-judge and Monte-Carlo layers "are experimental, not validated against human labels", and the repo-level evals program is "in progress" ([plugin-eval README](https://github.com/wshobson/agents/blob/main/plugins/plugin-eval/README.md)). So the field is open, but not empty.

## 4. What users complain about

All of this is practitioner writing, not surveys. Weight it accordingly.

| Complaint | Evidence | Strength |
|---|---|---|
| **Bloat / catalogs, not starting points** | "a catalog, not a starting point" ([Ry Walker on wshobson](https://rywalker.com/research/wshobson-agents)); a dev who built 100 subagents kept 12 ([dev.to, Suraj Khaitan](https://dev.to/suraj_khaitan_f893c243958/i-built-100-claude-code-subagents-these-are-the-12-that-actually-earn-their-context-10nn); his own un-published rubric) | Anecdotal |
| **Agents never trigger** | Anthropic's docs say delegation is driven by the `description` ([docs](https://code.claude.com/docs/en/subagents)); community write-ups blame vague descriptions ([dev.to](https://dev.to/gentic_news/claude-code-subagents-not-being-used-fix-your-description-field-first-3fbn)) | Mechanism confirmed by docs; prevalence unmeasured |
| **Token cost** | "117 installed skills inject about 7,300 tokens per turn" and a cited audit of 100 repos (62% lint leakage, 42% bloat, 35% skill leakage) ([Max Quimby](https://dev.to/max_quimby/the-skill-hoarding-tax-23po)); the author's data is itself secondhand and the post is promotional **[unverified]** | Weak but directionally consistent |
| **Personas ≈ theatre** | HN thread "How to use Claude Code subagents to parallelize development": "more theatre than utility", subagents lacking CLAUDE.md context, "40+ subagents" on one refactor, and several asking for benchmarks ([HN mirror](https://hn.svelte.dev/item/45181577), per subagent summary, not read in full) | Anecdotal, but it's the clearest demand signal for evidence |
| **No evidence agents help** | Same HN thread; "I can't prove this made my agents 'better.' There's no benchmark." ([Helder Berto](https://dev.to/helderberto/what-your-claude-code-agents-dont-need-to-be-told-4ed5)) | Anecdotal |
| **Maintainer risk** | One maintainer behind wshobson, ~a dozen open issues on a 36k-star repo ([Ry Walker](https://rywalker.com/research/wshobson-agents)); a list maintainer abandoning an agents list for lack of time (via search, link not opened) | Anecdotal |

I found no Reddit threads directly attacking a specific repo; searches returned blog posts and mirrors.

## 5. Our real edge, verified

Your guess was **curated + evals + hand-off graph**. Result after checking:

| Claim | Holds? | Why |
|---|---|---|
| Curated / small | **No, not alone** | superpowers (15 skills, 328k★) and anthropics/skills (20) own "small". Our version is "small *across two disciplines*", which is narrower. |
| Evals | **Not yet** | Cases exist, results don't. wshobson and superpowers already ship checks. This becomes an edge only if we publish *real run results with transcripts, failures included*, which no one has for behavioural refusals. |
| Hand-off graph | **Yes, narrowly** | VoltAgent has unvalidated prose lists. Ours is generated from the agents, CI-checked for unknown targets and orphans (145 edges, 46 agents, 0 orphans), and drawn on the site. |
| Trigger + "Not for" + refuse-to-do enforced in CI | **Yes** | I found no evidence of another agent collection that fails a build when these are missing (I read VoltAgent's workflow names and wshobson's workflow list, not every repo's CI, so treat this as "not found", not "does not exist"). This is the actual answer to the "never triggers / collides" complaint. |
| Engineering + marketing together | **Partly** | agency-agents has 37 marketing personas but in an identity-and-personality style; wshobson/VoltAgent are engineering-first. Ours is smaller and constrained, not broader. |

**Edge in one sentence:** *the only agent set whose triggers, refusals and hand-offs are machine-checked, with a behavioural eval you can read.* The last clause is a promise until `evals/run.mjs` has run.

## 6. Ten gaps (and how I checked them)

"Absent" below means: no path match for the keyword under agents/skills/commands/category folders in the 8 cloned trees (wshobson, VoltAgent, ECC, agency-agents, superpowers, davila7, SuperClaude, anthropics-official) by `grep` on 2026-11-27. **That is a file-name search; a repo can cover the topic under a different name.** Demand evidence is only what's cited; where there is none I say so.

| # | Item | Status | Absence check | Demand evidence |
|---|---|---|---|---|
| 1 | `sales-enablement` (battlecards, objection handling) | shipped | 0 hits in all 8 | Indirect: agency-agents has a 9-file `sales/` division |
| 2 | `/pr-description` | shipped | 0 in 6; davila7 has 2 | none found |
| 3 | Flaky-test triage (`ci-engineer`) | shipped | 0 in 7; davila7 2 | none found |
| 4 | `pricing-strategist` | shipped | agency-agents 1, davila7 3, others 0 | none found |
| 5 | `/which-agent` selector | shipped | not found by path | VoltAgent has a README "Quick Selection Guide" (from plan notes, **unverified today**) |
| 6 | **`/agent-doctor`**: audit installed agents/skills for description collisions, never-fires, and token cost | **to build** | adjacent tools exist (ECC `context-budget`, superpowers `diagnosing-superpowers`); none verified to check description collisions | The trigger and bloat complaints in §4 |
| 7 | **`eval-case-writer`** skill: turn an agent's refuse section into a runnable temptation case | **to build** | ECC has `agent-eval` (9 paths), davila7 3 | Nisi/WorkOS figures in Quimby's post (secondhand); HN "no benchmarks" |
| 8 | **`prompt-injection-reviewer`** for agents that read untrusted content | **to build** | davila7 1 path; ECC bakes boilerplate into every agent rather than offering a reviewer | ECC's choice to ship the baseline in every agent suggests demand **[inference]** |
| 9 | **`/plugin-release-check`**: `claude plugin validate --strict` + version-bump gate + hand-off check in one command | **to build** | VoltAgent has only a CI workflow for the bump | Docs: unbumped `version` means users receive no updates ([plugin docs](https://code.claude.com/docs/en/plugin-marketplaces)) |
| 10 | **`/agent-prune`**: from session transcripts, list installed agents/skills never invoked | **to build** | not found | "Skills never auto-activated" and "12 of 100 earn their context" (§4), unsourced numbers |

Honest caveat: five of ten are things we already built and I can only show they're *rare*, not *demanded*. The five "to build" items are the ones with a documented pain behind them.

## 7. Packaging as a Claude Code plugin marketplace

Read from the current docs ([plugin-marketplaces](https://code.claude.com/docs/en/plugin-marketplaces), [plugins reference](https://code.claude.com/docs/en/plugins-reference), [publish](https://code.claude.com/docs/en/plugins/publish)), via a fetch subagent that flagged a few pages it could not fully read. Where a statement is from that summary only, it is marked.

**What we have today.** `.claude-plugin/plugin.json` + `marketplace.json` at the repo root, one plugin, `source: "./"`. `claude plugin validate .` passes. This is the same shape as superpowers' own marketplace file (`"source": "./"`) **[verified]**.

**Install lines** (docs, per the fetch):
- In a session: `/plugin install ensemble --marketplace ayushsingh82/Ensemble` needs Claude Code ≥ **2.1.275**.
- Shell: `claude plugin install ensemble --marketplace ayushsingh82/Ensemble` needs ≥ **2.1.292**.
- Two-step fallback: `/plugin marketplace add ayushsingh82/Ensemble` then `/plugin install ensemble@ensemble`.

**Changes I'd make, in order:**
1. **Push first.** The remote still holds the September commit; none of today's work, including the manifests, is on GitHub, and the README's validate badge points at `ayushsingh82/agentkit` while the remote is `ayushsingh82/Ensemble` **[verified from git remote and README]**. Fix that.
2. **Split into plugins** so a user isn't forced to take 46 agents: `ensemble-core` (tech-lead, code-reviewer, debugger, test-automator, security-auditor, `/which-agent`), `ensemble-engineering`, `ensemble-marketing`, using relative sources under `plugins/`. This answers the bloat complaint directly. Risk: hand-offs point across plugins. The spec lists a `dependencies` field for plugins, but I did not verify how it resolves, so test that marketing → core installs both before relying on it.
3. **Version in one place.** Set `version` in `plugin.json` only (docs: a version in both places can trigger a validate mismatch). Bump it every release, because with an explicit `version` users get *nothing* until it changes. Add a CI bump gate like VoltAgent's.
4. **Keep the repo clean for the plugin cache.** Root-level `source: "./"` ships whatever is committed (including `web/`). Moving the site and tools out of the plugin directory keeps installs small. `claude plugin validate` also rejects stray `.DS_Store` files (it flagged some on disk; none are tracked).
5. **CI:** `claude plugin validate . --strict` plus `node tools/check-agents.mjs` and `node tools/build-handoffs.mjs --check`.
6. **Distribution beyond your own repo:** Anthropic's community marketplace takes submissions via the Console form at `platform.claude.com/plugins/submit` (individuals) or the claude.ai directory portal for Team/Enterprise orgs ([submit docs](https://claude.com/docs/plugins/submit.md), per search result). `claude-plugins-official` takes none through the portal. **The two summaries I got disagreed on the portal URL and plan requirement, so confirm on the live page before submitting.** Reserved marketplace names (e.g. `claude-plugins-official`) can't be used.
7. **Team pre-install:** `claude plugin install … --scope project` writes `.claude/settings.json`, so a team can commit it.

## Sources

GitHub REST API (`gh api`), 2026-11-27, for all counts and trees. Repos and files named inline.
- Anthropic plugin docs: https://code.claude.com/docs/en/plugin-marketplaces · https://code.claude.com/docs/en/plugins-reference · https://code.claude.com/docs/en/plugins/publish · https://claude.com/docs/plugins/submit.md · subagents: https://code.claude.com/docs/en/subagents
- wshobson profile (June 2026): https://rywalker.com/research/wshobson-agents · plugin-eval: https://github.com/wshobson/agents/blob/main/plugins/plugin-eval/README.md
- Complaints: https://dev.to/max_quimby/the-skill-hoarding-tax-23po · https://dev.to/suraj_khaitan_f893c243958/i-built-100-claude-code-subagents-these-are-the-12-that-actually-earn-their-context-10nn · https://dev.to/helderberto/what-your-claude-code-agents-dont-need-to-be-told-4ed5 · https://hn.svelte.dev/item/45181577 · https://dev.to/gentic_news/claude-code-subagents-not-being-used-fix-your-description-field-first-3fbn
- Local clones (stale, Sept 2026): `agent-special/{voltagent-claude-subagents,wshobson-agents}`.
