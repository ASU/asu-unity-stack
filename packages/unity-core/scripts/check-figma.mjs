#!/usr/bin/env node
/**
 * Compares token values against the vendored Figma variables snapshot
 * (tokens/figma/figma-variables.json, extracted from the Brand team's
 * "UDS Design Kit (web only)" file — see UDS-2275).
 *
 * Every token carrying $extensions["com.asu.uds"].figmaVar (own, or inherited
 * from its mode group) is resolved and compared against the Figma value of
 * its own mode, inferred from the leaf key:
 *   light → Light Mode, dark → Dark Mode, desktop → Desktop, mobile → Mobile,
 *   tablet → no Figma mode (reported as NO-FIGMA-MODE, not a mismatch),
 *   anything else → the collection's first mode.
 *
 * Report-only by default — documented mismatches are expected until Brand
 * updates Figma (see tokens/README.md § Pending Brand). Pass --strict to
 * exit 1 on any mismatch.
 *
 * CLI:  node scripts/check-figma.mjs [--strict]
 * API:  checkFigma(tokensDir) → { rows, mismatches, total }
 */

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { loadTokens } from './validate-tokens.mjs';

const MODE_BY_LEAF = { light: 'Light Mode', dark: 'Dark Mode', desktop: 'Desktop', mobile: 'Mobile' };

const normalize = (raw) => {
  let v = String(raw).trim().toLowerCase();
  if (/^[0-9a-f]{6}$/.test(v)) v = `#${v}`; // bare hex from Figma
  if (/^#[0-9a-f]{3,8}$/.test(v)) return v;
  const px = v.match(/^(-?[\d.]+)px$/);
  if (px) return px[1];
  return v;
};

export function checkFigma(tokensDir) {
  const tokens = loadTokens(tokensDir);
  const resolve = (value, depth = 0) => {
    if (depth > 10) return value;
    if (typeof value === 'string' && /^\{[^}]+\}$/.test(value.trim())) {
      const target = tokens.get(value.trim().slice(1, -1));
      return target ? resolve(target.token.$value, depth + 1) : value;
    }
    return value;
  };

  const snapshot = JSON.parse(readFileSync(join(tokensDir, 'figma', 'figma-variables.json'), 'utf8'));
  const figma = new Map(); // key -> { modes, values }
  for (const [collection, data] of Object.entries(snapshot)) {
    if (collection.startsWith('_')) continue;
    for (const row of data.rows ?? []) {
      const key = row.g ? `${collection}/${row.g}/${row.n}` : `${collection}/${row.n}`;
      figma.set(key, {
        modes: data.modes ?? [],
        values: (row.v ?? []).map((m) => m.val ?? m.txt ?? ''),
      });
    }
  }

  const rows = [];
  let mismatches = 0;
  for (const [id, { token, figmaVar }] of tokens) {
    if (!figmaVar) continue;
    const tokenValue = String(resolve(token.$value));
    const leaf = id.split('.').pop();
    if (leaf === 'tablet') {
      rows.push(['NO-FIGMA-MODE', id, figmaVar, 'Tablet', '-', tokenValue]);
      continue;
    }
    const entry = figma.get(figmaVar);
    if (!entry) {
      rows.push(['NOT FOUND', id, figmaVar, '-', '-', tokenValue]);
      mismatches += 1;
      continue;
    }
    const wanted = MODE_BY_LEAF[leaf];
    let index = wanted ? entry.modes.indexOf(wanted) : 0;
    if (index < 0) index = 0;
    const mode = entry.modes[index] ?? '-';
    const figmaValue = entry.values[index] ?? '';
    const ok = normalize(figmaValue) === normalize(tokenValue);
    if (!ok) mismatches += 1;
    rows.push([ok ? 'OK' : 'MISMATCH', id, figmaVar, mode, String(figmaValue), tokenValue]);
  }
  rows.sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]));
  return { rows, mismatches, total: tokens.size };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'tokens');
  const { rows, mismatches, total } = checkFigma(dir);
  const widths = [13, 40, 52, 10, 10, 10];
  const fmt = (cols) => cols.map((c, i) => String(c).padEnd(widths[i])).join('  ');
  console.log(fmt(['STATUS', 'TOKEN', 'FIGMA VARIABLE', 'MODE', 'FIGMA', 'TOKEN VALUE']));
  for (const row of rows) console.log(fmt(row));
  const compared = rows.filter((r) => r[0] !== 'NO-FIGMA-MODE').length;
  console.log(
    `\n${compared} token values compared with Figma: ${compared - mismatches} in sync, ${mismatches} out of sync. ` +
      `${rows.length - compared} tablet values have no Figma mode. ` +
      `${total - rows.length} tokens have no figmaVar.`,
  );
  if (process.argv.includes('--strict') && mismatches) process.exit(1);
}
