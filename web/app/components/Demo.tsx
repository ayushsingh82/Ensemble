type Example = {
  agent: string;
  prompt: string;
  genericLabel: string;
  generic: string;
  agentLabel: string;
  agentResponse: string;
};

const EXAMPLES: Example[] = [
  {
    agent: "code-reviewer",
    prompt:
      "Review this before we merge:\n\napp.post('/api/orders/:id/cancel', async (req, res) => {\n  const order = await Order.findById(req.params.id);\n  order.status = 'cancelled';\n  await order.save();\n  res.json({ ok: true });\n});",
    genericLabel: "Generic assistant",
    generic:
      "This looks reasonable overall! A few suggestions: consider adding error handling in case the order isn't found, add some logging for observability, and maybe extract the status update into a named constant. Otherwise looks good to merge.",
    agentLabel: "code-reviewer",
    agentResponse:
      "Broken access control, not a style issue — this is the finding. `order` is looked up by `req.params.id` with no check that `order.userId === req.user.id`. Any authenticated user can cancel any other user's order by ID: `POST /api/orders/1042/cancel` cancels order 1042 regardless of who owns it. Fix: verify ownership before mutating, and guard against `order` being null before calling `.save()`. Everything else here is fine as-is — not flagging style.",
  },
  {
    agent: "content-marketer",
    prompt:
      "Write launch copy for our new caching feature that made things faster. We don't have exact numbers yet, just make it sound exciting.",
    genericLabel: "Generic assistant",
    generic:
      "Introducing our revolutionary new caching engine! Experience blazing-fast performance like never before. Our cutting-edge technology takes your application to the next level, delivering unparalleled speed your users will love.",
    agentLabel: "content-marketer",
    agentResponse:
      "Holding off on copy until there's a real number — \"faster\" with no measurement is exactly the kind of claim that gets walked back later. Get the actual before/after (e.g. \"cut median page load from 800ms to 140ms\") and the whole piece can lead with that one line instead of three unverifiable superlatives.",
  },
];

export default function Demo() {
  return (
    <div className="space-y-8">
      {EXAMPLES.map((ex) => (
        <div key={ex.agent} className="rounded-none border border-border p-5">
          <p className="text-[11px] font-mono uppercase tracking-wider text-muted mb-3">
            Prompt
          </p>
          <pre className="text-[12.5px] font-mono text-foreground/90 whitespace-pre-wrap mb-5 leading-6">
            {ex.prompt}
          </pre>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-none border border-border/70 p-4 bg-white/[.02]">
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted mb-2">
                {ex.genericLabel}
              </p>
              <p className="text-[13px] leading-6 text-muted">{ex.generic}</p>
            </div>
            <div className="rounded-none border border-accent/40 p-4 bg-accent/[.06]">
              <p className="text-[11px] font-mono uppercase tracking-wider text-accent mb-2">
                <code>{ex.agentLabel}</code>
              </p>
              <p className="text-[13px] leading-6 text-foreground">
                {ex.agentResponse}
              </p>
            </div>
          </div>
        </div>
      ))}
      <p className="text-[12px] text-muted leading-6">
        Illustrative examples written to show the actual difference in
        behavior a specific agent prompt produces — not live API calls.
      </p>
    </div>
  );
}
