#!/usr/bin/env node
/**
 * Compares token values against the vendored Figma variables snapshot
 * (tokens/figma/figma-variables.json, extracted from the Brand team's
 * "UDS Design Kit (web only)" file — see UDS-2275).
 *
 * Every token carrying $extensions["com.asu.uds"].figmaVar is resolved and
 * compared against the snapshot value (first mode: Desktop / Light Mode / ASU).
 *
 * Report-only by default — mismatches are expected until the Brand team
 * confirms the final values (UDS-2268). Pass --strict to exit 1 on any
 * mismatch once values are locked.
 *
 * Usage:  node scripts/check-figma.mjs [--strict]
 */

import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const TOKENS_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'tokens');
const STRICT = process.argv.includes('--strict');

// ---- Load tokens --------------------------------------------------------
const tokens = new Map(); // path -> { value, figmaVar }

function walk(node, path) {
  if (typeof node !== 'object' || node === null) return;
  if ('$value' in node) {
    tokens.set(path.join('.'), {
      value: node.$value,
      figmaVar: node.$extensions?.['com.asu.uds']?.figmaVar,
    });
    return;
  }
  for (const [key, child] of Object.entries(node)) {
    if (key.startsWith('$')) continue;
    walk(child, [...path, key]);
  }
}

for (const entry of readdirSync(TOKENS_DIR)) {
  if (!entry.endsWith('.json') || entry === 'tokens.schema.json') continue;
  walk(JSON.parse(readFileSync(join(TOKENS_DIR, entry), 'utf8')), []);
}

// Resolve {a.b.c} references.
const resolve = (value, depth = 0) => {
  if (depth > 10) return value;
  if (typeof value === 'string' && /^\{[^}]+\}$/.test(value.trim())) {
    const target = tokens.get(value.trim().slice(1, -1));
    return target ? resolve(target.value, depth + 1) : value;
  }
  return value;
};

// ---- Load Figma snapshot ------------------------------------------------
const snapshot = JSON.parse(
  readFileSync(join(TOKENS_DIR, 'figma', 'figma-variables.json'), 'utf8'),
);
const figma = new Map(); // "Collection/Group/Name" -> first-mode value
for (const [collection, data] of Object.entries(snapshot)) {
  if (collection.startsWith('_')) continue;
  for (const row of data.rows ?? []) {
    const key = row.g ? `${collection}/${row.g}/${row.n}` : `${collection}/${row.n}`;
    const first = row.v?.[0] ?? {};
    figma.set(key, first.val ?? first.txt ?? '');
  }
}

// ---- Compare ------------------------------------------------------------
const normalize = (raw) => {
  let v = String(raw).trim().toLowerCase();
  if (/^[0-9a-f]{6}$/.test(v)) v = `#${v}`; // bare hex from Figma
  if (/^#[0-9a-f]{3,8}$/.test(v)) return v;
  const px = v.match(/^(-?[\d.]+)px$/);
  if (px) return px[1];
  return v;
};

const rows = [];
let mismatches = 0;
for (const [id, { value, figmaVar }] of tokens) {
  if (!figmaVar) continue;
  if (!figma.has(figmaVar)) {
    rows.push(['NOT FOUND', id, figmaVar, '-', String(resolve(value))]);
    mismatches += 1;
    continue;
  }
  const figmaValue = figma.get(figmaVar);
  const ok = normalize(figmaValue) === normalize(resolve(value));
  if (!ok) mismatches += 1;
  rows.push([ok ? 'OK' : 'MISMATCH', id, figmaVar, String(figmaValue), String(resolve(value))]);
}

const widths = [9, 30, 38, 12, 12];
const fmt = (cols) => cols.map((c, i) => String(c).padEnd(widths[i])).join('  ');
console.log(fmt(['STATUS', 'TOKEN', 'FIGMA VARIABLE', 'FIGMA', 'TOKEN VALUE']));
for (const row of rows.sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]))) {
  console.log(fmt(row));
}
const linked = rows.length;
const unlinked = tokens.size - linked;
console.log(
  `\n${linked} tokens linked to Figma: ${linked - mismatches} in sync, ${mismatches} out of sync. ` +
    `${unlinked} tokens have no figmaVar (no Figma counterpart or pending Brand mapping).`,
);
if (STRICT && mismatches) process.exit(1);
