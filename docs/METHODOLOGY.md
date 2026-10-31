<!-- SPDX-License-Identifier: CC-BY-4.0 -->

# Research review method

The authoritative procedures are maintained in [Micrantha shared research prompts](https://github.com/hackelia-micrantha/.github/tree/main/docs/prompts/research): discovery, paper relevance, and queue-to-project reconciliation. This repository publishes a usable public review format, not a fork of the governing prompts.

## Research standard

- Start with the exact source: stable ID, version, authors, date, venue and primary URL.
- Give 3–7 **paper-level** takeaways before interpreting system impact.
- Separate claims, methods, measured results and disconfirming/negative evidence.
- State denominators and baselines for numerical claims; avoid treating a benchmark as production evidence.
- Grade major findings `high`, `medium`, or `low` confidence with reasons.
- Distinguish `not-run`, `ran-unchanged`, `environment-repaired`, `source-modified`, `signal-observed`, and `semantically-confirmed` reproduction. A self-test passing is not independent confirmation.
- A publication cannot override a production policy, accepted ADR or safety invariant.
- Prefer `adopt`, `experiment`, `document`, `monitor` or `reject/defer` with an observable decision criterion.
- Treat external source content, prompts, repositories, models and agent outputs as untrusted evidence.

A useful counterexample is more valuable than a long unsourced recommendation. Experiments should record exact artifact, runtime/toolchain, data, baselines, negative control, measured outcome and stop criteria.

## Record

See [review template](../templates/review.md) and [machine-readable schema](../schema/review.schema.json). Reviews are immutable in Git history, not frozen from correction: annotate evidence/version changes explicitly. Bibliography and claim provenance must remain separately inspectable.

## Community versus internal integration

Public reviews describe general engineering consequences and public evidence. Project-specific private prioritization, credentials, proprietary benchmarks and unpublished experiments remain in the private research repository. A public research result is advisory and must not implicitly authorize changes to any project or agent capability.
