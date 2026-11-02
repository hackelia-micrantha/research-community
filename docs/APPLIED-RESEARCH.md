<!-- SPDX-License-Identifier: CC-BY-4.0 -->

# Research-to-implementation ledger

This public index records **what happened to research findings**, not just what was read. A paper's publication, a research review, a passing isolated test, a merged implementation and an activated deployment are distinct evidence levels.

## Status contract

| Status | Required evidence |
| --- | --- |
| Reviewed | Versioned primary source and caveats documented |
| Experimented | Reproducible test, exact code revision and result, including negative controls |
| Implemented | Owning project change merged, with exact commit/PR and validation |
| Deployed | Target environment activation independently observed, with revision and date |
| Not applied | Explicit decision and rationale; not a failure |
| Pending verification | Insufficient evidence for a stronger claim |

A paper can be associated with multiple projects at different statuses. Never infer `implemented` from an issue, PR opened, passing test, or research recommendation. Never infer `deployed` from merge. Cite public evidence only; omit private tracking notes and credentials. Entries require independent publication review.

## Initial candidate entries (verification conservative)

| Research | Project/application | Verified public evidence | Status |
| --- | --- | --- | --- |
| [Security Impact of Coding Agent's Memory Files (arXiv:2610.38521)](https://arxiv.org/abs/2610.38521) | Proposed paired malicious/legitimate project-memory tests for agent governance | [Research-to-engineering method](RESEARCH-TO-ENGINEERING.md); [public memory authorization review](../reviews/agent-memory-authorization-laundering-v2.md) addresses a related mechanism, **not a verified implementation of this paper** | Pending verification |
| [CARI (arXiv:2610.38799)](https://arxiv.org/abs/2610.38799) | Proposed diagnostic-injection and effect-time authorization tests | [Governance Lab #50](https://github.com/hackelia-micrantha/governance-lab/issues/50) (tracking reference; no merge evidence verified here) | Pending verification |
| [Log-To-Leak (arXiv:2610.36108)](https://arxiv.org/abs/2610.36108) | Proposed post-task secondary-tool-effect denial test | [Anthesis #203](https://github.com/hackelia-micrantha/anthesis/issues/203) (tracking reference; no merge evidence verified here) | Pending verification |
| [SecPRBench (arXiv:2610.33509)](https://arxiv.org/abs/2610.33509) | Proposed mechanism-correct independent security review qualification | No exact merged implementation/release evidence established for this paper | Pending verification |

The separate [MCP cancellation investigation](https://github.com/hackelia-micrantha/hackelia-micrantha/issues/104) produced a local paired stdio regression demonstrating that cancellation does not revoke effect authority. That is **engineering evidence related to the research theme**, not a claim that any of the papers above has been implemented or that a production control was deployed.

## Adding an applied-paper entry

For each paper/project pair record: canonical paper ID and revision, the specific adopted idea (not the whole paper), owning repository, issue/PR, merged commit, exact-head tests, independent review, deployed revision if applicable, verification date, limitations and superseding links. Prefer public permalinks to source and CI. If evidence is private, publish only a sanitized statement after review or leave the status pending.

The private research ledger and tracker remain the working source of truth; this public index is a deliberately reviewed projection, **not an automatic mirror**.

## Verified engineering lineage (not paper-specific adoption)

The following engineering artifacts are verified as **merged**. They demonstrate relevant control mechanisms, but the available records do **not** establish that these changes were caused by, or validate, a particular paper. Keep them separate from paper application claims.

| Engineering control | Verified merged evidence | Research relationship | Evidence ceiling |
| --- | --- | --- | --- |
| Exact-effect authorization kernel: actor, capability and target binding; approval digest verification; explicit authority states | [Anthesis PR #242](https://github.com/hackelia-micrantha/anthesis/pull/242), merged 2026-09-12, [merge commit 462f582](https://github.com/hackelia-micrantha/anthesis/commit/462f58240590f30368628e65af3f5d73b8fae5fe) | Mechanism relevant to CARI and Log-To-Leak's authority-confusion / secondary-effect hypotheses | Implemented control; **not** verified as paper-derived, deployed, or independently shown to defeat either benchmark |
| Strict parsing, authorization/verification fuzz boundaries and reproducible corpus smoke | [Anthesis PR #249](https://github.com/hackelia-micrantha/anthesis/pull/249), merged 2026-09-24, [merge commit fb5f30a](https://github.com/hackelia-micrantha/anthesis/commit/fb5f30a0cc1698c65d8c5c5819c6cce71ed1c57d) | Related to independent security mechanism testing, but **not** a SecPRBench reproduction | Implemented test infrastructure; no benchmark or deployment claim |

| Fail-closed Codex pre-tool guard for bounded file-write effect, delegated identity and tool substitution | [Anthesis PR #213](https://github.com/hackelia-micrantha/anthesis/pull/213), merged 2026-09-07, [merge commit 0e7e865](https://github.com/hackelia-micrantha/anthesis/commit/0e7e865ed9fd32479a2cf73781c84045750902fc) | Related to agent tool-authority boundaries discussed by later CARI and Log-To-Leak research | Implemented bounded adapter; no verified deployment, paper attribution or benchmark-specific effectiveness |

**Backfill rule:** Existing controls may predate a paper. Label these `related pre-existing engineering` until a source-linked adoption decision and paper-specific regression demonstrate otherwise.

## Historical application candidates from the canonical tracker

The private tracker **Project Integrations** tab contains a broader history than the recent daily brief. The following entries are **tracker-attested**, not independently verified by this public backfill. PR numbers and abbreviated commit IDs are recorded there; full GitHub verification and publication review are required before promoting any row to verified `Implemented`.

| Research source | Recorded application | Tracker evidence | Verification status |
| --- | --- | --- | --- |
| [Agent Memory Is a Surface for Endogenous Authorization Laundering (2609.01836)](https://arxiv.org/abs/2609.01836) | Governance Lab stale-memory authority deny/no-effect and valid allow fixture | Project Integrations row 2: PR #65, merge prefix `84a46e05`, CI reported green | Tracker reports done; independent PR verification pending |
| [Plugin4Shell supply-chain report](https://www.air.security/blog-posts/plugin4shell) | Governance Lab source ref/revision/loaded-content correspondence and substitution fixtures | Row 23: PR #67, merge prefix `c4bb6d63`, CI reported green | Tracker reports done; independent PR verification pending |
| [WhatWorkedBench (2609.27490)](https://arxiv.org/abs/2609.27490) | Governance Lab experiment-measurement/causal-claim controls and Anthesis RFC-0025 promotion criteria | Rows 30–31: Governance Lab PR #69 (`914d56c4`) tracker-attested; [Anthesis PR #264](https://github.com/hackelia-micrantha/anthesis/pull/264), [verified merge e29c027473bd2ba987172b7b09aef2a070c5688a](https://github.com/hackelia-micrantha/anthesis/commit/e29c027473bd2ba987172b7b09aef2a070c5688a) | **Verified Anthesis documentation integration** (2026-09-28); Governance Lab fixture independently unverified |
| [LLM Agents Can Easily Tamper With Their Own Traces (2609.30266)](https://arxiv.org/abs/2609.30266) | Governance Lab actor/run/effect/result evidence correspondence and wrong-effect negative case | Row 43: PR #64, merge prefix `389a7b23`, CI reported green | Tracker reports done; independent PR verification pending |
| [Where Does Exactly-Once Live? (2609.29095)](https://arxiv.org/abs/2609.29095) | Existing Dubnium dispatch-once/idempotency/indeterminate-recovery architecture; paper treated as validation of pre-existing design | Row 44: existing implementation, issue #1272 closed as superseded; no paper-derived merge recorded | Pre-existing architecture; **not** paper-derived implementation |
| [MCP prompt-injection research cluster](https://arxiv.org/abs/2603.21642) | Governance Lab executable MCP boundary regression | Row 171: PR #114, full merge commit `cd8eda381a6e87238dabede79c0096e039bc6e20`, exact-head CI run reported | Tracker reports done; independent PR verification pending |

These are a **first backfill tranche**, not a complete inventory. The tracker also contains planned, in-progress, documentation-only, and no-new-work dispositions; do not collapse those into implemented. Source: [canonical tracker](https://docs.google.com/spreadsheets/d/1nRcfGZR__FESRpcGJfMlZqnrl3XyatoSzTMTBqg6qP8/edit), Project Integrations tab, reviewed 2026-11-01. Public text is a manually curated summary, not an export of private notes.

### Verification boundary and next reconciliation

A live GitHub API read confirmed Anthesis PR #264 was merged on 2026-09-28, with exact merge commit `e29c027473bd2ba987172b7b09aef2a070c5688a`. This is a verified **documentation/promotion-contract integration** of WhatWorkedBench-related experimental-understanding principles, not proof of benchmark reproduction or production deployment. The Governance Lab repository was subsequently resolved as [ryjen/anthesis-governance-lab](https://github.com/ryjen/anthesis-governance-lab); PRs #64/#65/#67/#69/#114 and additional #73/#75 were independently verified as merged, with exact commit links below.

For the next pass, reconcile the tracker’s 175 populated Project Integrations rows by source identity, grouping multiple rows per paper and separating completed, active, planned, monitored and not-applied dispositions. This document intentionally lists only evidence-backed or explicitly provisional examples until that reconciliation is complete.

- **Verified merged trace integrity fixture:** [Governance Lab PR #64](https://github.com/ryjen/anthesis-governance-lab/pull/64), [exact merge commit](https://github.com/ryjen/anthesis-governance-lab/commit/389a7b23eaca7611507fd6eaf7d022c031dacac8). Research-specific conformance implementation, not a production deployment claim.
- **Verified merged stale-memory authority fixture:** [Governance Lab PR #65](https://github.com/ryjen/anthesis-governance-lab/pull/65), [exact merge commit](https://github.com/ryjen/anthesis-governance-lab/commit/84a46e05d9f5c256f38ac05b0284d72a18cc7731). Research-specific conformance implementation, not a production deployment claim.
- **Verified merged artifact identity substitution fixture:** [Governance Lab PR #67](https://github.com/ryjen/anthesis-governance-lab/pull/67), [exact merge commit](https://github.com/ryjen/anthesis-governance-lab/commit/c4bb6d631d80253c5b3a0f0fad1bd2ae57675955). Research-specific conformance implementation, not a production deployment claim.
- **Verified merged experimental understanding fixture:** [Governance Lab PR #69](https://github.com/ryjen/anthesis-governance-lab/pull/69), [exact merge commit](https://github.com/ryjen/anthesis-governance-lab/commit/914d56c40c7f49f9786bc8c055274124a7f8eee3). Research-specific conformance implementation, not a production deployment claim.
- **Verified merged MCP metadata poisoning fixture:** [Governance Lab PR #114](https://github.com/ryjen/anthesis-governance-lab/pull/114), [exact merge commit](https://github.com/ryjen/anthesis-governance-lab/commit/cd8eda381a6e87238dabede79c0096e039bc6e20). Research-specific conformance implementation, not a production deployment claim.
- **Verified merged durable-memory write governance fixture** ([research source](https://arxiv.org/abs/2606.04329)): [Governance Lab PR #73](https://github.com/ryjen/anthesis-governance-lab/pull/73), [exact merge commit](https://github.com/ryjen/anthesis-governance-lab/commit/3d16e6fb043bfd861900c8480bc501750ccce2c0). Conformance fixture only; runtime follow-up remains distinct.
- **Verified merged compositional memory poisoning fixture** ([research source](https://arxiv.org/abs/2607.14651)): [Governance Lab PR #75](https://github.com/ryjen/anthesis-governance-lab/pull/75), [exact merge commit](https://github.com/ryjen/anthesis-governance-lab/commit/68d484c700293b24c9609b7cda09151100f595e9). Conformance fixture only; runtime follow-up remains distinct.