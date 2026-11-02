<!-- SPDX-License-Identifier: CC-BY-4.0 -->

# Applied research: publication-gated evidence index

This page is a **candidate evidence index**, not an approved public export of the private research tracker. Its entries are limited to independently verified changes in already-public repositories. Inclusion in a draft PR does not constitute final IP/security publication approval; see [publication policy](PUBLICATION.md).

## Evidence semantics

- **Merged fixture**: the owning repository's pull request has a verified merge timestamp and exact commit. This does not prove production deployment or independent reproduction of a paper.
- **Merged documentation**: an adopted research-related contract or explanation, not a runtime implementation.
- **Related prior engineering**: relevant mechanism without evidence that a particular paper caused the change.
- **Not publicly indexed**: planned, open, internal, security-sensitive, or otherwise unapproved work remains in the private tracker.

## Publicly verifiable historical applications — pending publication approval

| Public research reference | Public implementation evidence | Evidence ceiling |
| --- | --- | --- |
| [Agent memory authorization laundering (2609.01836)](https://arxiv.org/abs/2609.01836) | [Governance Lab #65](https://github.com/ryjen/anthesis-governance-lab/pull/65), [merge 84a46e05](https://github.com/ryjen/anthesis-governance-lab/commit/84a46e05d9f5c256f38ac05b0284d72a18cc7731) | Merged conformance fixture |
| [Plugin4Shell](https://www.air.security/blog-posts/plugin4shell) | [Governance Lab #67](https://github.com/ryjen/anthesis-governance-lab/pull/67), [merge c4bb6d63](https://github.com/ryjen/anthesis-governance-lab/commit/c4bb6d631d80253c5b3a0f0fad1bd2ae57675955) | Merged conformance fixture |
| [WhatWorkedBench (2609.27490)](https://arxiv.org/abs/2609.27490) | [Governance Lab #69](https://github.com/ryjen/anthesis-governance-lab/pull/69), [merge 914d56c4](https://github.com/ryjen/anthesis-governance-lab/commit/914d56c40c7f49f9786bc8c055274124a7f8eee3); [Anthesis #264](https://github.com/hackelia-micrantha/anthesis/pull/264), [merge e29c0274](https://github.com/hackelia-micrantha/anthesis/commit/e29c027473bd2ba987172b7b09aef2a070c5688a) | Merged fixture and documentation contract |
| [LLM agent trace tampering (2609.30266)](https://arxiv.org/abs/2609.30266) | [Governance Lab #64](https://github.com/ryjen/anthesis-governance-lab/pull/64), [merge 389a7b23](https://github.com/ryjen/anthesis-governance-lab/commit/389a7b23eaca7611507fd6eaf7d022c031dacac8) | Merged conformance fixture |
| [Memory poisoning / write governance (2606.04329)](https://arxiv.org/abs/2606.04329) | [Governance Lab #73](https://github.com/ryjen/anthesis-governance-lab/pull/73), [merge 3d16e6fb](https://github.com/ryjen/anthesis-governance-lab/commit/3d16e6fb043bfd861900c8480bc501750ccce2c0) | Merged conformance fixture |
| [Compositional memory poisoning (2607.14651)](https://arxiv.org/abs/2607.14651) | [Governance Lab #75](https://github.com/ryjen/anthesis-governance-lab/pull/75), [merge 68d484c7](https://github.com/ryjen/anthesis-governance-lab/commit/68d484c700293b24c9609b7cda09151100f595e9) | Merged conformance fixture |
| [MCP prompt-injection research (2603.21642)](https://arxiv.org/abs/2603.21642) | [Governance Lab #114](https://github.com/ryjen/anthesis-governance-lab/pull/114), [merge cd8eda38](https://github.com/ryjen/anthesis-governance-lab/commit/cd8eda381a6e87238dabede79c0096e039bc6e20) | Merged conformance fixture |
| Proof-of-execution / replay evidence | [Governance Lab #91](https://github.com/ryjen/anthesis-governance-lab/pull/91), [merge 9719d4ac](https://github.com/ryjen/anthesis-governance-lab/commit/9719d4aca076d98e9d4848f8354e7c7e2d5cc20d) | Merged conformance fixture; source-paper attribution requires separate confirmation |
| Control-task negative evidence | [Governance Lab #109](https://github.com/ryjen/anthesis-governance-lab/pull/109), [merge 13523133](https://github.com/ryjen/anthesis-governance-lab/commit/13523133b8dc14a08f19c6690a47cfc55a861fd0) | Merged conformance fixture; source-paper attribution requires separate confirmation |

## Reconciliation and publication boundary

The private canonical tracker contains 174 populated Project Integrations records (151 with source URLs), reviewed 2026-11-01. **That count is an inventory metric, not a claim of 174 implemented papers.** Multiple records may concern one source, and many represent reviews, plans, issue mappings, or monitoring.

This public projection intentionally excludes open PRs, prospective research, internal issue mappings, private notes, and cross-project roadmap details. Historical evidence above was independently checked against public GitHub merge metadata; it has **not** yet received the explicit human IP/security release approval required by [PUBLICATION.md](PUBLICATION.md). Do not merge or publish further until that gate is satisfied.

Research is not an execution authority: evidence of a merged test is not proof that a production system enforces its invariant.
