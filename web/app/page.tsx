const AGENTS = [
  {
    name: "tech-lead",
    kind: "agent",
    blurb:
      "Orchestrator. Breaks a feature into subtasks, delegates to the right specialist, and gates completion on the others actually finishing.",
  },
  {
    name: "code-reviewer",
    kind: "agent",
    blurb:
      "Real correctness bugs only. Every finding ships with a concrete failure scenario, not a style nit.",
  },
  {
    name: "debugger",
    kind: "agent",
    blurb:
      "Reproduce, isolate, hypothesis, verify, then check the same class of bug isn't hiding elsewhere.",
  },
  {
    name: "backend-architect",
    kind: "agent",
    blurb:
      "API and schema design with a bias toward boring, proven patterns over premature abstraction.",
  },
  {
    name: "security-auditor",
    kind: "agent",
    blurb:
      "OWASP-grounded pre-ship audit. Findings ranked by severity, each with a concrete exploit scenario.",
  },
  {
    name: "api-scaffold",
    kind: "skill",
    blurb:
      "Generates a new endpoint that matches your existing codebase's conventions instead of imposing new architecture.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="max-w-3xl mx-auto px-6 pt-10 flex items-center justify-between">
        <span className="text-sm tracking-wide text-muted">ensemble</span>
        <a
          href="https://github.com"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          GitHub ↗
        </a>
      </header>

      <main className="max-w-3xl mx-auto px-6">
        <section className="pt-20 pb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
            A small, honest team for Claude Code.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted max-w-xl">
            Free and open-source specialist agents and skills for Claude Code.
            No padded headcount, no paywall — just a handful of agents worth
            actually delegating to, each with a real system prompt instead of
            filler.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#agents"
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
            >
              See what&apos;s inside
            </a>
            <a
              href="#install"
              className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-foreground border border-white/15 hover:border-white/30 transition-colors"
            >
              Install
            </a>
          </div>
        </section>

        <section className="py-16 border-t border-white/10">
          <h2 className="text-2xl font-semibold">
            Curated, not collected.
          </h2>
          <p className="mt-4 text-muted leading-7 max-w-xl">
            Most agent packs sell you a number — 89 agents, 100+ skills.
            Ensemble ships six things, each written specifically enough that
            it changes how Claude behaves, and grows only when a new
            specialist earns its place.
          </p>
        </section>

        <section id="agents" className="py-16 border-t border-white/10">
          <h2 className="text-2xl font-semibold mb-8">What&apos;s inside</h2>
          <ul className="grid sm:grid-cols-2 gap-5">
            {AGENTS.map((item) => (
              <li
                key={item.name}
                className="rounded-lg border border-white/10 p-5"
              >
                <div className="flex items-center justify-between">
                  <code className="text-sm font-mono text-foreground">
                    {item.name}
                  </code>
                  <span className="text-xs uppercase tracking-wide text-muted">
                    {item.kind}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {item.blurb}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="install" className="py-16 border-t border-white/10">
          <h2 className="text-2xl font-semibold mb-6">Install</h2>
          <p className="text-muted leading-7 max-w-xl mb-6">
            No CLI, no account. Copy the agent and skill files straight into
            your project.
          </p>
          <pre className="rounded-lg border border-white/10 bg-black/30 p-5 text-sm font-mono overflow-x-auto text-foreground">
            <code>{`git clone https://github.com/your-org/ensemble.git
cp ensemble/agents/*.md   .claude/agents/
cp -r ensemble/skills/*   .claude/skills/`}</code>
          </pre>
        </section>

        <footer className="py-16 border-t border-white/10 text-sm text-muted">
          MIT licensed. Not affiliated with Anthropic.
        </footer>
      </main>
    </div>
  );
}
