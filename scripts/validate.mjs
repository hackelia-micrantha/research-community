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
const seen = new Set();
for (const filename of records) {
  const record = JSON.parse(fs.readFileSync(path.join(root, 'records', filename), 'utf8'));
  for (const field of required) if (!(field in record)) throw new Error(`${filename}: missing ${field}`);
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
console.log(`Validated ${records.length} research record(s) for required metadata and enums. JSON Schema is normative; this built-in check is intentionally partial.`);
