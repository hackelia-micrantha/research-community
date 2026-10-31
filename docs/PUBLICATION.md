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
