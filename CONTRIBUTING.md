# Contributing research

Contribute source-linked reviews, falsifiable experimental plans, and corrections. This is an evidence repository, not a list of paper endorsements.

## Submission

1. Search existing reviews by stable source ID, DOI and title; update a review instead of duplicating it.
2. Use `templates/review.md` and optionally `schema/review.schema.json` for machine-readable metadata.
3. Read the primary source and pin the version/date. Distinguish paper-reported results from independently reproduced results.
4. Include methods, baselines, limitations, competing explanations, negative/control cases and a clear non-overclaiming conclusion.
5. Disclose model/agent assistance and whether reproduction or independent verification occurred.
6. Submit a PR with source links and validation evidence. Correct inaccuracies in place with an explicit revision note.

## Review and moderation

Editors may request sources, remove unsupported claims, redact sensitive material, or reject copied text/code. Do not post secrets, private issue links, internal infrastructure details, customer data, personal data, exploits needing coordinated disclosure, or copyrighted paper PDFs. Treat paper code, external scripts and data as untrusted. Never require contributors to execute untrusted research code.

Before accepting external contributions or granting downstream reuse permissions, maintainers must choose and publish a repository license. The current absence of a license is intentional, not an invitation to reuse repository content.

For reportable security defects, follow the organization's [security policy](https://github.com/hackelia-micrantha/.github/blob/main/.github/SECURITY.md) rather than opening an exploit-heavy public issue.
