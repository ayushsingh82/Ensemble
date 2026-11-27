# Growth plan

Written 2026-11-27, from the research in [COMPETITORS.md](COMPETITORS.md). Same labels: **[verified]**, **[sourced]** (linked), **[unverified]**. Nothing here is a forecast. Targets are goals you set, not predictions.

**Hard rule, from `plan.md`:** no fabricated traction, testimonials, or benchmark numbers. A due-diligence conversation that catches one ends the conversation.

## 1. Where we actually are

- Stars: **0**. Forks: 0. Contributors: 1 **[verified, `gh api`]**.
- The remote (`ayushsingh82/Ensemble`) still holds the September commit. Everything built since is local and uncommitted: 46 agents, the plugin manifests, CI, the hand-off graph **[verified, `git status`]**.
- The README's validate badge points at `ayushsingh82/agentkit`, but the remote is `Ensemble` **[verified]**, so the badge will be broken on day one.
- Evals: 46 cases, **zero runs**. No pass rate exists.
- The site is not deployed. The install line `/plugin install ensemble --marketplace ayushsingh82/Ensemble` has never been tested against a pushed repo.
- The README's opening claim ("89 agents, 100+ skills") is unsourced. Replace it with a dated, linked number, or delete it.

You can't launch from here. The next section is the gate.

## 2. How the big ones actually got traction

Only what I could source. Star counts differ between secondary sources and shift daily.

| Repo | What the sources say | Strength |
|---|---|---|
| **obra/superpowers** | Author's launch post (Oct 2025) went to Hacker News; one HN mirror shows 435 points / 231 comments. It landed as Claude Code's plugin system launched, was recommended by Simon Willison, and was later listed in Anthropic's official marketplace ([blog.fsck.com](https://blog.fsck.com/2025/10/09/superpowers.md), [HN archive](https://blog.fsck.com/mentions/mentions/2025-10-11-hn-superpowers/archive.html), [Ry Walker's write-up](https://rywalker.com/research/superpowers-skills-framework)) | HN and launch timing: sourced by the author's own mirror. "1,589 stars in one day": one blog, unverified |
| **affaan-m/ECC** | Won an Anthropic × Forum Ventures hackathon; then an X thread ("Shorthand Guide to Everything Claude Code") reportedly reached ~900k views before the config was open-sourced ([DEV post](https://dev.to/hiroki-ii-ai/how-a-claude-code-plugin-racked-up-200k-github-stars-what-ecc-teaches-us-about-ai-coding-in-2026-25f8), [36kr](https://eu.36kr.com/en/p/3823966768943239)) | Secondary blogs; view counts unverified |
| **agency-agents** | README says it grew out of a Reddit thread; one post cites an r/LocalLLaMA thread with 580 upvotes ([DEV](https://dev.to/maxdelcore/an-open-source-repo-just-hit-82000-github-stars-in-a-single-day-and-its-a-complete-ai-agency-1921)). The "82,000 stars in a day" figure appears in one post and is **unverified** | Weak |
| **VoltAgent subagents** | I found **no** Show HN, newsletter or X campaign. What I found: its own DEV.to post, a third-party DEV.to "top 10" post, one-command marketplace install, and listings on claudemarketplaces.com and claudepluginhub.com ([DEV](https://dev.to/voltagent/100-claude-code-subagent-collection-1eb0)) | Moderate for the channels; the cause of growth is **unknown** |
| **wshobson/agents** | No traction story found. Its profile notes a 2026 pivot to multi-tool support and Smithery distribution ([Ry Walker](https://rywalker.com/research/wshobson-agents)) | Cause unknown |

**Pattern, stated carefully:** the two biggest stories (superpowers, ECC) each combined a **single credible person with a public narrative** (a launch post / a hackathon win) and a **platform tailwind** (plugins just launched / a hackathon audience), not a catalog. Nobody I could find grew on "more agents". That fits "small and specific", but note it's also what you'd expect if both were simply early. I can't separate the two.

## 3. Gates: do these before any public post

1. **Push the work** and fix the badge URL. Then check that the repo name, plugin name, README and site agree (`ensemble` vs `agentkit` vs `Ensemble`).
2. **Run the evals for real** (`ANTHROPIC_API_KEY=… node evals/run.mjs`, roughly 92 API calls; `claude-opus-5-5`, `claude-sonnet-5-5`, `claude-haiku-5-5` as judge). Publish the table including failures, with `evals/results.json`. Fix failing agents, then re-run and **show both runs**. This is the only thing that turns "refuse-to-do" from an assertion into evidence.
   - Caveat to print next to the numbers: the judge is a different, smaller model and can be wrong on borderline cases (as `evals/README.md` already says). Sample-read at least a handful of verdicts yourself and say you did.
3. **Test the install on a clean machine/profile**: add the marketplace, install, confirm `/agents` lists the agents, run `tech-lead`. Don't ship an install line you haven't run.
4. **Split the plugin** (core / engineering / marketing) per COMPETITORS.md §7 and test cross-plugin hand-offs, or document that you chose not to.
5. **Deploy the site** and turn on analytics, so every number you later quote is real.
6. **One 60-second demo** of the thing only you have: ask for a task, watch an agent refuse the bad version, watch it hand off to the next agent. Record it from a real session, unedited.
7. **Replace unsourced claims** in the README and site (the "89 agents" line, "no padded headcount") with dated, linked facts.

If gate 2 is skipped, don't use "evals" in any headline.

## 4. The one claim

Candidate, to be confirmed by the eval results:

> **46 Claude Code agents that say what they won't do, hand off to each other, and fail the build if they don't.**

Proof points that are already true and checkable **[verified]**: average agent is 30 lines; every description has a trigger and a "Not for → use X"; every agent has a refuse-to-do section; 145 validated hand-offs, no orphans; CI enforces all of it.

What I would **not** say: "better than" any named repo; "fewer tokens" per agent (our descriptions are not shorter, only fewer); any adoption or star claim; "tested" without the run results.

Honest positioning against the giants: don't fight superpowers (a process methodology) or ECC (an agent harness). Ensemble is the **role-specialist layer** that sits beside them. Say that.

## 5. Channels, in order

Effort is yours; sequencing is mine. "Precedent" means a competitor was observed using it; it is not a promise of results.

| Order | Channel | Why / precedent | What to post | Check first |
|---|---|---|---|---|
| 1 | **Anthropic community marketplace** | The official path to being installable from `claude-plugins-community`; docs describe a Console form at `platform.claude.com/plugins/submit` ([docs](https://claude.com/docs/plugins/submit.md)). Review time unknown | The plugin folder, validated with `--strict` | **The two doc summaries I got disagreed on the portal and plan requirement. Read the live page.** `claude-plugins-official` takes no submissions |
| 2 | **Third-party directories** (claudemarketplaces.com, claudepluginhub.com, claudedirectory.org, vibehackers.io) | VoltAgent is listed on the first two **[verified in search results]** | Marketplace repo link | I haven't read their submission rules; some appear to sell ad slots (claudemarketplaces.com shows an advertiser banner). Free listing only |
| 3 | **hesreallyhim/awesome-claude-code** (58.9k★) | Largest curated link list for Claude Code **[verified: stars]** | A PR adding one line | Read its CONTRIBUTING; I did not |
| 4 | **Show HN** | Superpowers precedent (above). HN audiences in the subagent thread asked for evidence: "no benchmarks" ([HN mirror](https://hn.svelte.dev/item/45181577)) | Lead with the eval table and one failure you found and fixed. Title states the thing plainly: no superlatives | HN's Show HN rules (must be something people can try). Post once, answer every comment, don't ask for upvotes |
| 5 | **X thread, from your own account** | ECC precedent (thread first, repo second) | The refusal demo video, then the hand-off graph screenshot, then the install line, then the eval table | Don't tag-spam Anthropic staff |
| 6 | **r/ClaudeAI** (and maybe r/LocalLLaMA, agency-agents precedent) | Where the audience complaining about bloat lives | A *finding*, not an ad, e.g. "I wrote evals for agent refusals; here's what failed" | Subreddit self-promotion rules **[not read]** |
| 7 | **Your own post** (`docs/launch-post.md`, exists) on dev.to / your blog | VoltAgent used dev.to. This is the page everything else links to | Edit the "what I can't tell you" section once eval results exist | None |

Newsletters: I found no evidence that any competitor was featured in one, so I'm not listing any. If you want to pitch one, pick based on who covers Claude Code tooling and check their submission page.

## 6. Timeline (relative to day 0 = first public post)

| When | Do |
|---|---|
| **−10 to −3** | Gates §3. Submit to the Anthropic community marketplace and directories (they're slow and don't depend on a spike). |
| **−2 to −1** | Dry-run the install on a clean profile. Pre-write answers to the three questions you'll get: "why not wshobson?", "does 30 lines beat 300?", "who judges the evals?" |
| **0** | Show HN + X thread + r/ClaudeAI the same day, staggered over hours. Be at your keyboard. |
| **+1 to +7** | Reply to every comment. Turn the top three objections into issues. Ship fixes publicly, quickly, even tiny ones. |
| **+7 to +30** | Publish round-two eval results (after fixing failures). Add the `/agent-doctor` and `eval-case-writer` items from COMPETITORS.md §6. A follow-up post with new data does more than a re-launch. |

I'm not suggesting weekdays or hours. I didn't find evidence on timing in my research.

## 7. What "worked" means, set before launch

Stars are a vanity metric and the easiest to inflate. Use signals that need a real person to act:

| Signal | How to measure | Notes |
|---|---|---|
| Installs | **No reliable public count.** Proxy: the repo's *Traffic → Clones/Views* page (14-day window, owner-only), and Vercel Analytics for the site | Don't quote clones as installs |
| Outside engagement | Issues and PRs from accounts you don't know; forks; the number of *distinct* people who report an agent misbehaving | The most useful signal for an agent set |
| Eval-driven fixes | Number of agent changes traced to a failing case or an outside bug report | Shows the evals loop is real |
| Retention proxy | Return visitors in Vercel Analytics at +14 / +30 days | |

Pick thresholds yourself before day 0 and write them here. For scale: superpowers and ECC are at 300k+; reaching three-figure stars from cold would already be a genuine result **[my judgement, not a benchmark]**.

## 8. Things not to do

- Don't buy stars, run star-for-star swaps, or ask friends for blind upvotes. They're detectable and they end the "real traction only" story.
- Don't publish a pass rate you haven't produced, or round one up. If 9 of 46 fail, say 9 of 46 fail.
- Don't cite another repo's count without a date and a link. These move.
- Don't quote the "117 skills = 7,300 tokens/turn" or similar figures from third-party posts as fact; they're secondhand.
- Don't claim adoption by anyone not named in a public issue, PR, or post.

## 9. Risks

- **Distribution beats quality.** The leaders grew on a founder narrative plus timing. A better-specified agent set doesn't automatically win; this plan improves the odds, not the outcome.
- **The evals may embarrass us.** That's the point, but plan for it: failures you fix in public are a better story than a perfect score nobody can reproduce.
- **"Honest and small" is itself a claim** and will be tested. Every number on the site needs a source.
- **Single maintainer.** wshobson is criticised for it ([Ry Walker](https://rywalker.com/research/wshobson-agents)). Keep CONTRIBUTING and the CI checks as the answer: a new agent either passes the spec or it doesn't.
