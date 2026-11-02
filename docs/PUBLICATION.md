<!-- SPDX-License-Identifier: CC-BY-4.0 -->

# Public contribution and publication boundary

`research-community` is a curated public view, not an automatic mirror. Publication requires an intentional PR or authorized manual promotion.

## Before publishing

- Cite a primary source with version and review date.
- Attribute reported numbers and label unreplicated experiments.
- Remove private project notes, secrets, internal identifiers, customer or personal details, unpublished attack chains and nonpublic locations.
- Check copyright and licenses for quotations, figures, code and datasets; prefer links over bundled source PDFs.
- Independently review the candidate diff, including metadata, generated text and dependency additions.
- Preserve the original record identity and link to the public version; never rewrite the private reading queue to claim publication.

Do not automate a job that opens a private repository to a public checkout, copies all files, or grants public CI credentials to private sources. CI tests format and links only; it never approves publication or creates deployment authority.

## Licensing and attribution gate

The public repository uses [CC BY 4.0](../LICENSES/CC-BY-4.0.txt) for authored prose, research reviews, records and templates, and [Apache 2.0](../LICENSE) for scripts, the JSON Schema and package configuration. The authoritative [file-level scope and attribution instructions](LICENSING.md) apply to all exported content. Source attribution for the *paper* is separate from attribution to the *review author*. Confirm that the owner has the right to publish original text under its assigned license; public visibility or possession of a private note does not itself establish licensing rights.

A source link, figure, diagram, dataset, code excerpt or paper PDF from a third party retains its original rights. Do not relicense or copy a third-party work without separate permission and notice. Every promotion still needs source-version grounding, independent diff review and explicit publication authority.

## Intellectual-property and competitive-intelligence disclosure gate

**Default deny:** A research record's presence in a private tracker, or a public issue/PR, does not authorize republication or aggregation. The publisher must establish affirmative, item-specific publication authority before adding it to this public repository. A draft PR in a public repository is already a disclosure.

Public candidates are limited to primary-source citations and factual summaries of **already-public, completed work** whose disclosure has been approved. Verify that linked implementations are actually public and merged; neither a proposed integration nor an open PR is evidence of completion. Avoid publishing a combined map of cross-project capabilities unless that map itself has been approved for release.

Hold privately by default: research priorities and sequencing; planned integrations; unpublished experiments and results; implementation details not already released; internal architecture and dependency graphs; exploitability assessments, unresolved vulnerabilities and security-control gaps; proprietary know-how; customer or partner details; patentable concepts pending counsel review. Sanitize URLs, branch names, commit messages, issue links, comments, filenames and generated metadata as well as prose. Publicly accessible information can still become sensitive when aggregated.

**Required pre-publication decision:** Record an explicit human approval for the exact candidate diff, identifying the reviewer, the approved commit or content digest, the scope of release, and any exclusions. Require a second independent reviewer for IP-sensitive or security-sensitive disclosures. An automated validator may flag risky terms and links but must never grant publication authority. When uncertain, retain the record privately and publish only a citation to the original paper.

**If exposure is discovered:** Stop publication and preserve evidence of what was exposed. Removing text in a later commit does not retract public Git history, forks, caches or copies. Escalate for security/IP review, assess whether credentials or vulnerabilities require separate incident response, and seek legal advice before making patent-related disclosure decisions.
