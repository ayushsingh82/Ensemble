---
name: stripe-integration
description: Use when adding or modifying a Stripe payment/billing flow — checkout, subscriptions, webhooks — in an existing project. Matches the project's existing payment/webhook patterns instead of introducing a new integration style. Not for choosing which Stripe API to use from scratch with no existing pattern (check Stripe's own current docs for that).
---

# Stripe Integration

Wire up or extend a Stripe flow so it matches how the rest of the project already talks to Stripe, and never trusts client-reported payment state.

## Steps

1. **Find the existing integration pattern first** — how the project currently creates a Checkout Session/PaymentIntent, where the Stripe secret key is read from (env var, secrets manager), and how webhooks are currently verified and handled, before adding a new call site.
2. **Never trust the client for payment success.** A redirect back from Checkout or a client-side "payment succeeded" callback is a UX signal, not proof of payment — the source of truth is a verified webhook event (`checkout.session.completed`, `invoice.paid`, etc.) or a server-side status fetch, and only that should trigger fulfillment (granting access, marking an order paid).
3. **Verify every webhook's signature** using the endpoint secret before processing its payload (`stripe.webhooks.constructEvent` or equivalent) — an unverified webhook endpoint is an open door for anyone to fake a "payment succeeded" event.
4. **Make webhook handling idempotent.** Stripe retries webhook delivery, so the same event ID can arrive more than once — check whether the event's effect (order marked paid, credits granted) has already been applied before applying it again.
5. **Match the existing money-handling convention** — Stripe amounts are integers in the currency's smallest unit (cents, not dollars); check how the project already converts and stores this, and don't introduce a different unit or a float for currency amounts.
6. **Use existing customer/subscription IDs rather than re-deriving state.** If the project already stores a `stripe_customer_id`, reuse it instead of searching Stripe by email or creating a duplicate customer.

## What this skill refuses to do

- Grant access, fulfill an order, or mark something paid based on a client-side signal alone, without a verified server-side event.
- Process a webhook payload without verifying its signature first.
- Handle currency amounts as floats, or in a different unit than the rest of the project already uses.
