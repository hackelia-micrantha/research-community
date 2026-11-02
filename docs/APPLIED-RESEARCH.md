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
