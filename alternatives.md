# AgentsKit — Notes & Free Alternatives

## Product being evaluated
- **AgentsKit** — https://agentskit.co/
- Paid Claude Code add-on: drops pre-built subagents, skills, and slash commands into a project's `.claude/` folder.
- Unofficial/independent — not affiliated with Anthropic.
- 89 agents / 103 skills / 181 commands, split into **Engineer Kit** ($49) and **Marketing Kit** ($49), or bundled ($89, listed as discounted from $129). One-time payment, lifetime updates, delivered as private-repo GitHub access via Polar checkout.
- Self-described as "curated from MIT/Apache open-source projects, with full attribution in CREDITS."
- Mechanically nothing new: subagents (`.claude/agents/`), skills (`.claude/skills/`), and slash commands (`.claude/commands/`) are all native Claude Code features you can create yourself.

## Free / open-source alternatives

### Agent collections (comparable to the Engineer Kit)
- **wshobson/agents** — https://github.com/wshobson/agents
  Likely upstream source for many AgentsKit agent names (`backend-architect`, `security-auditor`, etc). Multi-harness plugin marketplace (Claude Code, Cursor, Copilot, and more). Install via `git clone` into `~/.claude/agents/`.
- **VoltAgent/awesome-claude-code-subagents** — https://github.com/VoltAgent/awesome-claude-code-subagents
  100+ subagents across 10 categories, actively maintained.
- **davepoon/claude-code-subagents-collection** — https://awesome.ecosyste.ms/projects/github.com/davepoon/claude-code-subagents-collection
  Agents + slash commands together, closest shape to AgentsKit's bundle.
- **0xfurai/claude-code-subagents** — https://github.com/0xfurai/claude-code-subagents
  100+ production-ready subagents, no-frills.

### Curated meta-lists (browse and cherry-pick)
- **hesreallyhim/a-list-of-claude-code-agents** — https://github.com/hesreallyhim/a-list-of-claude-code-agents
  Community-submitted agents.
- **jqueryscript/awesome-claude-code** — https://github.com/jqueryscript/awesome-claude-code
  General curated list of Claude Code tools/integrations/frameworks.

### Installer tooling (comparable to AgentsKit's `npx` CLI)
- **davila7/claude-code-templates** — https://github.com/davila7
  `npx claude-code-templates` CLI that scaffolds agents/commands/settings into a project.

## Takeaway
Skim wshobson/agents and VoltAgent's collection, copy the specific `.md` agent files needed into `.claude/agents/`. Marketing "skills" are mostly prompt templates worth writing directly once brand voice is known — likely not worth paying for the Marketing Kit.
