// SPDX-License-Identifier: Apache-2.0
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const schema = JSON.parse(fs.readFileSync(path.join(root, 'schema/review.schema.json'), 'utf8'));
if (schema.$schema !== 'https://json-schema.org/draft/2020-12/schema') throw new Error('Unexpected schema dialect');
const required = schema.required;
const enumFields = ['source_type', 'evidence_quality', 'reproduction', 'disposition'];
const records = fs.readdirSync(path.join(root, 'records')).filter(p => p.endsWith('.json'));
if (records.length === 0) throw new Error('Expected at least one review record');
for (const file of ['LICENSE', 'LICENSES/CC-BY-4.0.txt', 'docs/LICENSING.md']) {
  if (!fs.existsSync(path.join(root, file))) throw new Error(`Missing licensing file: ${file}`);
}
const seen = new Set();
for (const filename of records) {
  const record = JSON.parse(fs.readFileSync(path.join(root, 'records', filename), 'utf8'));
  for (const field of required) if (!(field in record)) throw new Error(`${filename}: missing ${field}`);
  if (record.license !== 'CC-BY-4.0') throw new Error(`${filename}: wrong content license`);
  for (const field of enumFields) if (!schema.properties[field].enum.includes(record[field]))
    throw new Error(`${filename}: invalid ${field}`);
  if (!/^[a-z0-9][a-z0-9.:-]+$/.test(record.id)) throw new Error(`${filename}: invalid ID`);
  if (seen.has(record.id)) throw new Error(`${filename}: duplicate stable ID`);
  seen.add(record.id);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(record.reviewed_on) || !/^\d{4}-\d{2}-\d{2}$/.test(record.source.date)) throw new Error(`${filename}: invalid date`);
  if (!/^https:\/\//.test(record.source.url)) throw new Error(`${filename}: source must be HTTPS`);
  if (record.takeaways.length < 3 || record.takeaways.length > 7) throw new Error(`${filename}: 3-7 takeaways required`);
  for (const takeaway of record.takeaways) {
    if (!['high','medium','low'].includes(takeaway.confidence) || !takeaway.claim || !takeaway.caveat)
      throw new Error(`${filename}: incomplete takeaway`);
  }
}
const proseFiles = ['README.md', 'CONTRIBUTING.md', ...['docs', 'reviews', 'templates'].flatMap(d => fs.readdirSync(path.join(root, d)).filter(f => f.endsWith('.md')).map(f => `${d}/${f}`))];
for(const f of proseFiles) {
  if (!fs.readFileSync(path.join(root, f), 'utf8').startsWith('<!-- SPDX-License-Identifier: CC-BY-4.0 -->')) throw new Error(`Missing prose SPDX identifier: ${f}`);
}
console.log(`Validated ${records.length} research record(s), ${proseFiles.length} prose SPDX identifiers and required license files. JSON Schema is normative; this built-in check is intentionally partial.`);

const indexDirectory = path.join(root, 'indexes');
if (fs.existsSync(indexDirectory)) {
  for (const filename of fs.readdirSync(indexDirectory)) {
    if (!/^\d{4}-\d{2}-\d{2}\.json$/.test(filename)) throw new Error('Invalid research index filename');
    const edition = JSON.parse(fs.readFileSync(path.join(indexDirectory, filename), 'utf8'));
    const { coverage, ranking, featured } = edition;
    const fail = (reason) => { throw new Error(filename + ': ' + reason); };
    if (edition.as_of + '.json' !== filename || edition.license !== 'CC-BY-4.0' || !edition.attribution) fail('edition identity or attribution');
    if (coverage.marked_reviewed + coverage.triaged !== coverage.tracked ||
        coverage.reviewed_with_complete_scores + coverage.reviewed_without_complete_scores !== coverage.marked_reviewed ||
        Math.round(1000 * coverage.marked_reviewed / coverage.tracked) / 10 !== coverage.review_status_completion_pct) fail('coverage arithmetic');
    if (featured.length !== ranking.selection_size || featured.length < ranking.target_selection_size ||
        featured[ranking.target_selection_size - 1].score !== ranking.cutoff_score ||
        featured.at(-1).score !== ranking.cutoff_score || featured.length > ranking.screened_candidates) fail('selection cutoff');
    const identities = new Set();
    for (const [i, entry] of featured.entries()) {
      const c = entry.components;
      if (Object.keys(c).length !== 5 || Object.values(c).some(v => typeof v !== 'number' || v < 1 || v > 5 || !Number.isInteger(v * 2)) ||
          entry.score !== c.momentum + 3*c.novelty + 6*c.evidence + 5*c.practical + 5*c.long_term ||
          (i > 0 && featured[i-1].score < entry.score) ||
          entry.rank !== featured.findIndex(x => x.score === entry.score) + 1) fail('score or rank');
      const identity = entry.id.startsWith('arxiv:') ? 'https://arxiv.org/abs/' + entry.id.slice(6) :
        'https://www.usenix.org/conference/usenixsecurity26/presentation/' + entry.id.split(':')[1];
      if (identities.has(entry.id) || entry.source_url !== identity ||
          !/^(?:arxiv:\d+\.\d+v\d+|usenix-security26:[a-z-]+)$/.test(entry.id)) fail('source identity');
      identities.add(entry.id);
      if (entry.review_url && !/^https:\/\/github\.com\/hackelia-micrantha\/research-community\/blob\/(?:main|[0-9a-f]{40})\/reviews\/[a-z0-9.-]+\.md$/.test(entry.review_url)) fail('review link');
      if (!entry.review_basis || !entry.limitation || !entry.evidence || !entry.takeaway || !entry.rationale || entry.reproduction !== 'not-run') fail('incomplete evidence');
      if (entry.review_basis.includes('abstract') && c.evidence > 3.5) fail('abstract-only evidence cap');
    }
    console.log('Validated ' + featured.length + ' editorial index entries in ' + filename + '.');
  }
}
