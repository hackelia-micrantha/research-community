<!-- SPDX-License-Identifier: CC-BY-4.0 -->

# Agent Memory Is a Surface for Endogenous Authorization Laundering

**Source:** Cerruti, Okamoto and Erol, [arXiv:2609.01836v2](https://arxiv.org/html/2609.01836v2), revised 2026-10-24; NeurIPS 2026 PALM workshop. **Assessed:** 2026-10-30. **Evidence:** author-reported benchmark; not independently reproduced. **Disposition:** document and evaluate. **Confidence:** medium for transfer beyond the evaluated agent/memory setup.

## Executive assessment

EAL-Bench separates an agent's false authorization *memory* from a later executor action. The work demonstrates that ordinary memory maintenance can synthesize or retain permission without an external attacker. Its important design lesson is to compare the requested action against an independently derived, current authority state; memory cannot itself create grants.

## Paper-level takeaways

1. **Persistent memory can incorrectly widen authority.** Typed and free-text writers may absorb non-authoritative restatements or fail to persist a narrowing/revocation. The benchmark uses evolving histories with paired authorized and unauthorized requests. **Confidence: high within the experiment.**
2. **Incremental updates are a notable failure condition.** In the reported three-domain aggregate, typed incremental memory produced 27.7% unauthorized actions versus 0.8% for typed one-shot; this is not a general production probability. **Confidence: high for the reported comparison.**
3. **The wrong memory, not only executor behavior, matters.** When false authority appeared, unauthorized execution occurred in 99.0% of tested trials; replacing memory with oracle-exact state reduced that to 1 of 390. **Confidence: high for matched benchmark intervention.**
4. **Typed data is inspectable but not automatically faithful.** Schema validation can validate shape while keeping wrong authority in state. **Confidence: high for reported conditions.**
5. **Mitigations trade safety, utility and cost.** Periodic rebuilding reduced benchmark unauthorized actions, but its benefit depends on timing and consumes up to three times baseline writer input tokens; source filtering and instruction variants have distinct failure modes. **Confidence: medium for generalization.**

## Evidence and limitations

The revised study evaluates seven memory writers and two calibrated executors in procurement, cybersecurity and finance with paired cases and deterministic authorization ground truth. Histories are synthetic and reviewed; models and provider versions are fixed. Statistical treatment includes three seeds and bootstrap intervals preserving correlated replays. Evaluated tools are simplified domain proxies, not independently observed production effects. The [authors' benchmark repository](https://github.com/tommasocerruti/eal-bench) was **not** executed for this review.

**Version caveat:** v2 is dated October 24, 2026 and reports revised figures. Do not mix metrics across source revisions.

## Engineering implications

- Represent current grants, scope, expiry and revocation in a separately verifiable authority source.
- Read/revalidate authority at effect time; treat prior text, search results and memory summaries as context only.
- Test paired allow and deny actions after grant -> narrow/revoke -> stale memory; assert both decision and observed side-effect absence on deny.
- Distinguish correct permission evaluation, exact effect matching and successful execution evidence.

This is supporting evidence for design review, **not** independent proof of any Micrantha implementation or a directive to create a new policy engine.

## What could falsify transfer?

A production system that never reads persistent memory for authority decisions, instead evaluating a fresh authoritative grant per effect, may not exhibit this exact failure. Test exact grants against stale-memory fixtures and verify the actual downstream effect independently.
