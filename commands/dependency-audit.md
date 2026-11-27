---
description: Audit dependencies for known vulnerabilities, abandonment, and bloat, ranked by whether the code reaches them
---

Audit the project's dependencies using real tooling and evidence.

1. Detect the ecosystem and run its audit command (`npm audit`, `pip-audit`, `cargo audit`, `govulncheck`) against the lockfile.
2. For each finding, grep the code for the vulnerable API to see if it is actually reachable, and rank reachable-on-a-request-path first.
3. Flag packages with no release in over two years or a very large transitive tree, with the numbers.
4. For each, give the smallest fix: the version to bump to and what could break.

Report a ranked list, not a dump of the raw audit output. Do not upgrade anything as part of this command, and do not call something critical from its advisory score alone. Hand off to `dependency-auditor` for a deeper pass.
