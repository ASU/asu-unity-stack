#!/usr/bin/env node
/**
 * Fails the build when a path declared in package.json (main, module, types,
 * customElements, exports) does not exist. Runs at the end of `yarn build`, so
 * a consumer can never install a package whose exports point to missing files.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));

const paths = [];
const collect = (value) => {
  if (typeof value === 'string') paths.push(value);
  else if (value && typeof value === 'object') Object.values(value).forEach(collect);
};
['main', 'module', 'types', 'customElements', 'exports'].forEach((k) => collect(pkg[k]));

const missing = [...new Set(paths)].filter((p) => !existsSync(join(root, p)));
if (missing.length) {
  console.error(`✗ package.json points to ${missing.length} missing file(s):`);
  for (const p of missing) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(`✓ ${new Set(paths).size} package.json entry points exist.`);
