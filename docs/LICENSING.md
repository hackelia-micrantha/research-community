<!-- SPDX-License-Identifier: CC-BY-4.0 -->

# Licensing and contributor attribution

This public repository uses **two licenses**, selected by file purpose. The root `LICENSE` is the full Apache License 2.0 text for software; it **does not** override the CC BY 4.0 license for original research writing.

| Scope | SPDX identifier | License |
| --- | --- | --- |
| `README.md`, `CONTRIBUTING.md`, `docs/**/*.md`, `reviews/**/*.md`, `templates/**/*.md` | `CC-BY-4.0` | [CC BY 4.0 legal code](../LICENSES/CC-BY-4.0.txt) |
| `records/**/*.json` (authored review metadata, findings and text) | `CC-BY-4.0` | [CC BY 4.0 legal code](../LICENSES/CC-BY-4.0.txt) |
| `scripts/**`, `schema/**`, `package.json`, `.gitignore` and any future software/build configuration unless explicitly marked otherwise | `Apache-2.0` | [Apache License 2.0](../LICENSE) |
| Third-party papers, preprints, figures, images, code, datasets, linked artifacts, trade names and external quotations | *Not licensed by this repository* | Their own rights, licenses or applicable exceptions |

The legal texts were sourced from the [SPDX license-list data](https://github.com/spdx/license-list-data/tree/main/text) for [Apache-2.0](https://spdx.org/licenses/Apache-2.0.html) and [CC-BY-4.0](https://spdx.org/licenses/CC-BY-4.0.html). They are reproduced unmodified. Original copyright remains with each relevant rights-holder. A contributor's Git commit/PR history and any explicit review byline constitute the authorship record; a paper's author list is **not** a byline for Micrantha's review.

## Attribution for reused research material

For a copied or adapted review or template, provide the original review title and named author (when identified; otherwise credit `Micrantha Research Community contributors` with a link to the source file/history), a link to the original material, the [CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0/), and an indication of whether changes were made. Do not imply endorsement. Preserve original citations and any attribution notices.

An example attribution for a modified review:

> Based on “<review title>” by <review contributor, or Micrantha Research Community contributors>, licensed CC BY 4.0. Source: <permalink>. Modified from the original.

For software, retain the Apache 2.0 license and applicable copyright/NOTICE information where required. The Apache patent grant applies only to contributions covered by that software license; it does not turn linked third-party artifacts into Apache-licensed software.

## New contributions and migrations

- PR contributors retain copyright but submit each original contribution under the license assigned above, with the right to do so.
- Credit reviewers for their authored synthesis separately from primary-source authors.
- If any part of a proposed file has a different or incompatible license, isolate it with an explicit exception and documented permission **before merging**.
- Do not import private work or publish an external contributor's content merely because it is visible to the maintainer. Establish the publication rights first.
- For future research files, prefer the applicable `SPDX-License-Identifier` comment where the format permits. JSON records expose a `license` field.
- Bibliographic titles, DOIs, URLs and other factual identifiers may not be copyrightable; the review-record license covers only rights that actually subsist. There is **no CC0 dedication** in this repository.

The private [research repository](https://github.com/hackelia-micrantha/research) is not licensed or mirrored by this public repository. There is no automatic publication or rights grant across that boundary.
