import Navbar from "./components/Navbar";
import Terminal from "./components/Terminal";
import Demo from "./components/Demo";
import handoffs from "./handoffs.json";

type Item = { name: string; blurb: string; kit: "engineer" | "marketing" };

const AGENTS: Item[] = [
  {
    name: "tech-lead",
    kit: "engineer",
    blurb:
      "Orchestrator. Breaks a feature into subtasks, delegates to the right specialist, and gates completion on the others actually finishing.",
  },
  {
    name: "backend-architect",
    kit: "engineer",
    blurb:
      "API and schema design with a bias toward boring, proven patterns over premature abstraction.",
  },
  {
    name: "react-specialist",
    kit: "engineer",
    blurb:
      "React/Next.js UI that matches existing component patterns and gets the server/client boundary right.",
  },
  {
    name: "code-reviewer",
    kit: "engineer",
    blurb:
      "Real correctness bugs only. Every finding ships with a concrete failure scenario, not a style nit.",
  },
  {
    name: "debugger",
    kit: "engineer",
    blurb:
      "Reproduce, isolate, hypothesis, verify, then check the same class of bug isn't hiding elsewhere.",
  },
  {
    name: "test-automator",
    kit: "engineer",
    blurb:
      "Tests that catch real regressions, prioritized by risk, not tests written to pad a coverage number.",
  },
  {
    name: "security-auditor",
    kit: "engineer",
    blurb:
      "OWASP-grounded pre-ship audit. Findings ranked by severity, each with a concrete exploit scenario.",
  },
  {
    name: "typescript-pro",
    kit: "engineer",
    blurb:
      "Uses the type system to make invalid states unrepresentable. Treats `any` and `as` as red flags, not defaults.",
  },
  {
    name: "postgres-pro",
    kit: "engineer",
    blurb:
      "Schema, indexing, and query performance. Indexes justified by a real query pattern, migrations safe on a live table.",
  },
  {
    name: "docker-specialist",
    kit: "engineer",
    blurb:
      "Multi-stage builds, layer caching, and image size. Pinned base images, no secrets baked into layers.",
  },
  {
    name: "python-pro",
    kit: "engineer",
    blurb:
      "Idiomatic Python: type hints on public APIs, standard-library-first, no bare except blocks.",
  },
  {
    name: "ci-engineer",
    kit: "engineer",
    blurb:
      "Pipeline design: cheap checks first, real merge gates, flaky tests triaged by evidence not re-runs.",
  },
  {
    name: "refactorer",
    kit: "engineer",
    blurb:
      "Behavior-preserving structural cleanup only — bugs found along the way get flagged, not folded in.",
  },
  {
    name: "performance-profiler",
    kit: "engineer",
    blurb:
      "Measures the actual bottleneck before optimizing, and re-measures with the same method to confirm it moved.",
  },
  {
    name: "accessibility-auditor",
    kit: "engineer",
    blurb:
      "WCAG-grounded pre-ship audit: keyboard operability, screen reader support, contrast, concrete failure scenarios.",
  },
  {
    name: "architect-reviewer",
    kit: "engineer",
    blurb:
      "Reviews a design tradeoff before it's built — what it makes expensive later, and the strongest alternative.",
  },
  {
    name: "growth-strategist",
    kit: "marketing",
    blurb:
      "Finds the actual binding constraint in the funnel before recommending an action.",
  },
  {
    name: "content-marketer",
    kit: "marketing",
    blurb:
      "Writes launch copy that says one true, specific thing well instead of many vague things at once.",
  },
  {
    name: "seo-specialist",
    kit: "marketing",
    blurb:
      "Optimizes for search intent, not keyword density. Fixes crawlability blockers before touching content.",
  },
  {
    name: "brand-voice",
    kit: "marketing",
    blurb:
      "Keeps copy consistent with an established voice and flags unverifiable claims before they ship.",
  },
  {
    name: "competitive-analyst",
    kit: "marketing",
    blurb:
      "Sourced, factual competitor comparison — flags anything unverified instead of presenting it as fact.",
  },
  {
    name: "graphql-specialist",
    kit: "engineer",
    blurb:
      "Schemas clients can't turn into a denial of service: batched resolvers, deliberate nullability, paginated lists, additive evolution.",
  },
  {
    name: "mobile-specialist",
    kit: "engineer",
    blurb:
      "React Native/Flutter screens built for loading, empty, error, and offline, with permissions asked when the feature needs them.",
  },
  {
    name: "data-engineer",
    kit: "engineer",
    blurb:
      "Idempotent pipelines with a stated grain, a backfill plan, and validation that fails loudly on schema drift.",
  },
  {
    name: "technical-writer",
    kit: "engineer",
    blurb:
      "Docs matched to your existing style, with every command and snippet actually run before it ships.",
  },
  {
    name: "devops-engineer",
    kit: "engineer",
    blurb:
      "Infrastructure changes shown as a plan first, separated by environment, with the rollback written before the apply.",
  },
  {
    name: "rust-pro",
    kit: "engineer",
    blurb:
      "Types carry the invariants. Typed errors in libraries, no unwrap on external input, no unsafe without a safety comment.",
  },
  {
    name: "go-pro",
    kit: "engineer",
    blurb:
      "Plain Go: wrapped errors, goroutines with an owner and a cancel path, verified with -race.",
  },
  {
    name: "ml-engineer",
    kit: "engineer",
    blurb:
      "Fixes the evaluation first, hunts leakage, records reproducibility, and checks training/serving parity.",
  },
  {
    name: "kubernetes-specialist",
    kit: "engineer",
    blurb:
      "Manifests with measured limits, distinct readiness and liveness probes, safe rollouts, no latest tags or root containers.",
  },
  {
    name: "incident-responder",
    kit: "engineer",
    blurb:
      "Restore service first with the most reversible mitigation, keep a timeline, then write a blameless postmortem.",
  },
  {
    name: "observability-engineer",
    kit: "engineer",
    blurb:
      "Alerts on user-visible symptoms, low-cardinality metrics, structured logs, and an alert tested on a real failure.",
  },
  {
    name: "node-pro",
    kit: "engineer",
    blurb:
      "Keeps the event loop free, streams large payloads with backpressure, handles every promise, shuts down gracefully.",
  },
  {
    name: "dependency-auditor",
    kit: "engineer",
    blurb:
      "Ranks vulnerabilities by whether the code actually reaches them, and checks maintenance and licenses before adding a package.",
  },
  {
    name: "migration-planner",
    kit: "engineer",
    blurb:
      "Turns a big-bang migration into small steps that each ship, each verify, and each have a stated rollback.",
  },
  {
    name: "data-scientist",
    kit: "engineer",
    blurb:
      "Answers the stated question with sample sizes and uncertainty, and tries to break its own result.",
  },
  {
    name: "prompt-engineer",
    kit: "engineer",
    blurb:
      "Treats prompts like code: a real failing case set, one change at a time, re-run for regressions.",
  },
  {
    name: "smart-contract-auditor",
    kit: "engineer",
    blurb:
      "Reads EVM contracts like a flash-loan attacker. Every finding has a concrete exploit sequence; never declares a contract safe.",
  },
  {
    name: "release-manager",
    kit: "engineer",
    blurb:
      "Version numbers that follow the contract, changelogs derived from the diff, and a rehearsed rollback.",
  },
  {
    name: "product-manager",
    kit: "engineer",
    blurb:
      "Specs with a named problem, a smallest testable version, explicit out-of-scope, and pass/fail acceptance criteria.",
  },
  {
    name: "css-specialist",
    kit: "engineer",
    blurb:
      "Fixes layout at its cause: stacking contexts, the box model, the cascade. No z-index arms races, no !important.",
  },
  {
    name: "sales-enablement",
    kit: "marketing",
    blurb:
      "Battlecards and objection handling for a specific buyer, grounded in the product as it is, limits included.",
  },
  {
    name: "pricing-strategist",
    kit: "marketing",
    blurb:
      "Prices against a value metric, with the floor, the ceiling, and a test that says when to reverse the change.",
  },
  {
    name: "analytics-engineer",
    kit: "marketing",
    blurb:
      "One definition per metric, a tracking plan whose events have all been seen firing, no personal data in properties.",
  },
  {
    name: "conversion-optimizer",
    kit: "marketing",
    blurb:
      "One variable per test, a stopping rule set before launch, and results reported with uncertainty.",
  },
  {
    name: "customer-researcher",
    kit: "marketing",
    blurb:
      "Synthesizes interviews and tickets into counted themes with verbatim quotes and no invented personas.",
  },
];

const SKILLS: Item[] = [
  {
    name: "api-scaffold",
    kit: "engineer",
    blurb:
      "Generates a new endpoint that matches your existing codebase's conventions instead of imposing new architecture.",
  },
  {
    name: "tdd-workflow",
    kit: "engineer",
    blurb:
      "Red, green, refactor. One failing test at a time, minimum code to pass it, refactor only once green.",
  },
  {
    name: "playwright-e2e",
    kit: "engineer",
    blurb:
      "End-to-end tests matched to the project's existing selector and structure conventions, no waitForTimeout.",
  },
  {
    name: "stripe-integration",
    kit: "engineer",
    blurb:
      "Payment/webhook flows matched to existing patterns. Signature-verified webhooks, idempotent, never trusts the client.",
  },
  {
    name: "db-migration",
    kit: "engineer",
    blurb:
      "Expand, migrate, contract: schema changes that are safe on live tables, with batched backfills and stated lock behavior.",
  },
  {
    name: "adr-writing",
    kit: "engineer",
    blurb:
      "Records a technical decision with real alternatives, consequences, and a measurable trigger to revisit it.",
  },
  {
    name: "incident-postmortem",
    kit: "engineer",
    blurb:
      "A postmortem from evidence: timeline, impact in numbers, a missing safeguard as cause, owned follow-ups.",
  },
  {
    name: "release-notes",
    kit: "engineer",
    blurb:
      "Changelog entries built from the real diff, grouped by user effect, with migration steps for breaking changes.",
  },
  {
    name: "openapi-spec",
    kit: "engineer",
    blurb:
      "An OpenAPI spec derived from the running handlers, including the error responses they actually return.",
  },
];

const COMMANDS: Item[] = [
  {
    name: "/deploy-checklist",
    kit: "engineer",
    blurb:
      "Verifies build, tests, secrets, migrations, and security review against the actual diff before shipping.",
  },
  {
    name: "/test-coverage",
    kit: "engineer",
    blurb:
      "Finds the highest-risk untested code paths in recent changes, ranked by risk, not by file count.",
  },
  {
    name: "/api-scaffold",
    kit: "engineer",
    blurb:
      "One-shot version of the api-scaffold skill — generate a matching endpoint on demand.",
  },
  {
    name: "/email-sequence",
    kit: "marketing",
    blurb:
      "Structures a multi-email sequence's order, trigger, and one claim per email before any copy is drafted.",
  },
  {
    name: "/launch-plan",
    kit: "marketing",
    blurb:
      "One claim, prioritized channels, mapped assets, sequencing, and a stated definition of success.",
  },
  {
    name: "/campaign-brief",
    kit: "marketing",
    blurb:
      "Objective, audience, claim, assets, timeline, and success metric — scoped before any copy gets written.",
  },
  {
    name: "/which-agent",
    kit: "engineer",
    blurb:
      "Picks the right agent for a task from their trigger and not-for lines, and says why in one answer.",
  },
  {
    name: "/pr-description",
    kit: "engineer",
    blurb:
      "A PR description from the real diff, listing only the verification that was actually run.",
  },
  {
    name: "/dependency-audit",
    kit: "engineer",
    blurb:
      "Audits dependencies with real tooling, ranked by whether the code reaches the vulnerable path.",
  },
  {
    name: "/rollback-plan",
    kit: "engineer",
    blurb:
      "The rollback plan for the pending change, including what a code revert can't undo.",
  },
  {
    name: "/competitor-teardown",
    kit: "marketing",
    blurb:
      "A sourced one-page teardown of a named competitor, with unverified claims kept out of comparisons.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Copy the files in",
    body: "No install, no account. Copy the agent, skill, and command files into .claude/ and Claude Code picks them up.",
  },
  {
    step: "02",
    title: "Fill in one CLAUDE.md",
    body: "Every agent reads it first, so you describe your stack and conventions once instead of every session.",
  },
  {
    step: "03",
    title: "Delegate",
    body: "\"Use tech-lead to build auth\" or /deploy-checklist before shipping. The right specialist takes it from there.",
  },
];

const PRICING = [
  { name: "Engineer kit", tag: "the software team" },
  { name: "Marketing kit", tag: "the growth team" },
  { name: "Complete bundle", tag: "engineer + marketing" },
];

const engineerCount = (arr: Item[]) =>
  arr.filter((i) => i.kit === "engineer").length;
const marketingCount = (arr: Item[]) =>
  arr.filter((i) => i.kit === "marketing").length;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">
      {children}
    </p>
  );
}

function KitBadge({ kit }: { kit: Item["kit"] }) {
  return (
    <span
      className={`text-[10px] font-medium uppercase tracking-wider rounded-none px-2 py-1 shrink-0 ${
        kit === "engineer"
          ? "bg-white/[.06] text-muted"
          : "bg-accent/15 text-accent"
      }`}
    >
      {kit}
    </span>
  );
}

function Monogram({ item }: { item: Item }) {
  const letter = item.name.replace("/", "").charAt(0).toUpperCase();
  return (
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-none font-mono text-sm font-semibold ${
        item.kit === "engineer"
          ? "bg-white/[.06] text-foreground"
          : "bg-accent/15 text-accent"
      }`}
    >
      {letter}
    </span>
  );
}

function ItemGrid({ items }: { items: Item[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-4">
      {items.map((item) => (
        <li
          key={item.name}
          className="group rounded-none border border-border p-5 transition-colors hover:border-white/25 hover:bg-white/[.02]"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <Monogram item={item} />
              <code className="text-[13px] font-mono text-foreground">
                {item.name}
              </code>
            </div>
            <KitBadge kit={item.kit} />
          </div>
          <p className="mt-3 text-[13.5px] leading-6 text-muted">
            {item.blurb}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-screen bg-background text-foreground font-sans"
    >
      <Navbar />

      <section className="relative">
        <div aria-hidden className="dot-grid absolute inset-0" />
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <Eyebrow>Open-source for Claude Code</Eyebrow>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-[1.1] tracking-tight">
              A small, honest team for Claude Code.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted max-w-md">
              Free and open-source specialist agents, skills, and commands
              for Claude Code, covering both engineering and marketing.
              No padded headcount, no paywall, just a handful of
              specialists worth actually delegating to.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#agents"
                className="inline-flex items-center justify-center rounded-none bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset] hover:opacity-90 transition-opacity"
              >
                See what&apos;s inside
              </a>
              <a
                href="#install"
                className="inline-flex items-center justify-center rounded-none px-5 py-3 text-sm font-medium text-foreground border border-border hover:border-white/30 transition-colors"
              >
                Install
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 max-w-sm gap-6 border-t border-border pt-8">
              <div>
                <dt className="text-3xl font-semibold tabular-nums">
                  {AGENTS.length}
                </dt>
                <dd className="text-sm text-muted mt-1">agents</dd>
              </div>
              <div>
                <dt className="text-3xl font-semibold tabular-nums">
                  {SKILLS.length}
                </dt>
                <dd className="text-sm text-muted mt-1">skills</dd>
              </div>
              <div>
                <dt className="text-3xl font-semibold tabular-nums">
                  {COMMANDS.length}
                </dt>
                <dd className="text-sm text-muted mt-1">commands</dd>
              </div>
            </dl>
          </div>

          <Terminal />
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6">
        <section className="py-16 border-t border-border">
          <Eyebrow>Why fewer</Eyebrow>
          <h2 className="text-2xl font-semibold tracking-tight">
            Curated, not collected.
          </h2>
          <p className="mt-4 text-muted leading-7 max-w-xl">
            Most agent packs sell you a number, like 89 agents and 100+
            skills. Ensemble ships a small set across engineering and
            marketing, each written specifically enough that it changes
            how Claude behaves, and grows only when a new specialist
            earns its place.
          </p>
        </section>

        <section id="demo" className="py-16 border-t border-border">
          <Eyebrow>Proof, not a pitch</Eyebrow>
          <h2 className="text-2xl font-semibold tracking-tight mb-2">
            See the difference.
          </h2>
          <p className="text-sm text-muted mb-8 max-w-xl">
            Same prompt, two responses — a generic assistant next to the
            matching Ensemble agent.
          </p>
          <Demo />
        </section>
      </main>

      <section className="bg-background-alt border-y border-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-2xl font-semibold tracking-tight mb-10">
            One command. No setup.
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((s) => (
              <div key={s.step}>
                <span className="font-mono text-sm text-accent">
                  {s.step}
                </span>
                <h3 className="font-semibold mt-2">{s.title}</h3>
                <p className="text-sm text-muted leading-6 mt-2">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6">
        <section className="py-16 border-b border-border">
          <Eyebrow>Two kits, one repo</Eyebrow>
          <h2 className="text-2xl font-semibold tracking-tight mb-8">
            Engineering and marketing.
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-none border border-border p-6">
              <h3 className="font-semibold">Engineer kit</h3>
              <p className="text-sm text-muted mt-1">the software team</p>
              <p className="mt-4 text-sm text-muted leading-6">
                {engineerCount(AGENTS)} agents, {engineerCount(SKILLS)} skill
                {engineerCount(SKILLS) === 1 ? "" : "s"},{" "}
                {engineerCount(COMMANDS)} commands
              </p>
            </div>
            <div className="rounded-none border border-border p-6">
              <h3 className="font-semibold">Marketing kit</h3>
              <p className="text-sm text-muted mt-1">the growth team</p>
              <p className="mt-4 text-sm text-muted leading-6">
                {marketingCount(AGENTS)} agents, {marketingCount(SKILLS)}{" "}
                skills, {marketingCount(COMMANDS)} command
                {marketingCount(COMMANDS) === 1 ? "" : "s"}
              </p>
            </div>
          </div>
        </section>

        <section id="agents" className="py-16 border-b border-border">
          <Eyebrow>Called by name</Eyebrow>
          <h2 className="text-2xl font-semibold tracking-tight mb-1">
            Agents
          </h2>
          <p className="text-sm text-muted mb-8">
            &quot;Use tech-lead to build auth.&quot;
          </p>
          <ItemGrid items={AGENTS} />
        </section>

        <section id="handoffs" className="py-16 border-b border-border">
          <Eyebrow>Not a pile of prompts</Eyebrow>
          <h2 className="text-2xl font-semibold tracking-tight mb-1">
            Who hands off to whom
          </h2>
          <p className="text-sm text-muted mb-8 max-w-xl">
            Every agent names the specialist it passes work to, and when.
            Generated from the agent files themselves, and CI fails if a
            hand-off points at an agent that doesn&apos;t exist.{" "}
            <code className="font-mono">tech-lead</code> can delegate to all of
            them.
          </p>
          <ul className="divide-y divide-border border border-border">
            {Object.entries(handoffs as Record<string, { to: string; why: string }[]>)
              .filter(([, edges]) => edges.length > 0)
              .map(([agent, edges]) => (
                <li
                  key={agent}
                  className="grid sm:grid-cols-[13rem_1fr] gap-x-6 gap-y-2 p-4"
                >
                  <code className="text-[13px] font-mono text-foreground">
                    {agent}
                  </code>
                  <div className="flex flex-wrap gap-2">
                    {edges.map((e) => (
                      <span
                        key={e.to}
                        title={e.why}
                        className="text-[12px] font-mono text-muted bg-white/[.06] px-2 py-1"
                      >
                        → {e.to}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
          </ul>
        </section>

        <section id="skills" className="py-16 border-b border-border">
          <Eyebrow>Loaded automatically</Eyebrow>
          <h2 className="text-2xl font-semibold tracking-tight mb-1">
            Skills
          </h2>
          <p className="text-sm text-muted mb-8">
            Claude reaches for these on its own, exactly when relevant.
          </p>
          <ItemGrid items={SKILLS} />
        </section>

        <section id="commands" className="py-16 border-b border-border">
          <Eyebrow>Fired from the prompt</Eyebrow>
          <h2 className="text-2xl font-semibold tracking-tight mb-1">
            Commands
          </h2>
          <p className="text-sm text-muted mb-8">
            <code className="font-mono">/deploy-checklist</code> and friends.
          </p>
          <ItemGrid items={COMMANDS} />
        </section>

        <section id="install" className="py-16 border-b border-border">
          <Eyebrow>Two minutes</Eyebrow>
          <h2 className="text-2xl font-semibold tracking-tight mb-6">
            Install
          </h2>
          <p className="text-muted leading-7 max-w-xl mb-4">
            One line in Claude Code (2.1.275 or later):
          </p>
          <pre className="rounded-none border border-border bg-black/30 p-5 text-[13px] font-mono overflow-x-auto text-foreground mb-8">
            <code>{`/plugin install ensemble --marketplace ayushsingh82/Ensemble`}</code>
          </pre>
          <p className="text-muted leading-7 max-w-xl mb-6">
            Or skip the plugin system: no CLI, no account, just copy the
            files straight into your project.
          </p>
          <pre className="rounded-none border border-border bg-black/30 p-5 text-[13px] font-mono overflow-x-auto text-foreground">
            <code>{`git clone https://github.com/ayushsingh82/Ensemble.git
cp Ensemble/agents/*.md      .claude/agents/
cp -r Ensemble/skills/*      .claude/skills/
cp Ensemble/commands/*.md    .claude/commands/`}</code>
          </pre>
        </section>

        <section id="pricing" className="py-16 border-b border-border">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="text-2xl font-semibold tracking-tight mb-8">
            Free while the kit is small.
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {PRICING.map((p) => (
              <div
                key={p.name}
                className="rounded-none border border-border p-6"
              >
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-muted mt-1">{p.tag}</p>
                <p className="mt-6 text-sm font-medium text-accent">
                  Coming soon
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="py-16 text-sm text-muted space-y-1">
          <p>Free while the kit is small. MIT licensed.</p>
          <p>Not affiliated with Anthropic.</p>
        </footer>
      </main>
    </div>
  );
}
