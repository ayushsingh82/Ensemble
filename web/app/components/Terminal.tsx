"use client";

import { useEffect, useState } from "react";

const LINES = [
  { text: "$ cp Ensemble/agents/*.md .claude/agents/", dim: false },
  { text: "✓ tech-lead           ready", dim: true },
  { text: "✓ backend-architect   ready", dim: true },
  { text: "✓ code-reviewer       ready", dim: true },
  { text: "✓ security-auditor    ready", dim: true },
  { text: "$ use tech-lead to build auth", dim: false },
  { text: "→ delegating to backend-architect, react-specialist", dim: true },
  { text: "→ gated by code-reviewer, security-auditor", dim: true },
];

const LINE_DELAY_MS = 450;
const RESTART_DELAY_MS = 2200;

export default function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setVisibleCount(LINES.length);
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    const step = (count: number) => {
      if (count > LINES.length) {
        timeout = setTimeout(() => step(0), RESTART_DELAY_MS);
        return;
      }
      setVisibleCount(count);
      timeout = setTimeout(() => step(count + 1), LINE_DELAY_MS);
    };

    step(0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="rounded-none border border-border bg-black/40 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 text-[11px] text-muted font-mono">
          your-project
        </span>
      </div>
      <div className="px-5 py-5 font-mono text-[12.5px] leading-6 min-h-[13.5rem]">
        {LINES.slice(0, visibleCount).map((line, i) => (
          <div
            key={i}
            className={line.dim ? "text-muted" : "text-foreground"}
          >
            {line.text}
          </div>
        ))}
        <span className="inline-block h-[1em] w-[6px] bg-accent align-middle animate-pulse" />
      </div>
    </div>
  );
}
