#!/usr/bin/env node
/**
 * Validates the DTCG token source files in tokens/*.json against the
 * UDS token contract (see tokens/tokens.schema.json and tokens/README.md):
 *
 *   - Every token ($value) must declare $type from the allowed set.
 *   - Every token must have a $description, own or inherited from an
 *     ancestor group.
 *   - Every token must have an effective com.asu.uds.status
 *     (stable | experimental | deprecated), own or inherited.
 *   - figmaVar, when present, must be "Collection/Group/Name" (>= 2 segments)
 *     and resolve against the vendored Figma snapshot.
 *   - Pure references ({a.b.c}) must resolve to an existing token.
 *   - Legacy (non-$) value/type/description keys are forbidden.
 *
 * Exits 1 with a report when any rule is violated.
 */

import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const TOKENS_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'tokens');
const ALLOWED_TYPES = new Set([
  'color',
  'dimension',
  'number',
  'fontFamily',
  'fontWeight',
  'duration',
  'cubicBezier',
  'shadow',
]);
const ALLOWED_STATUS = new Set(['stable', 'experimental', 'deprecated']);

const errors = [];
const tokens = new Map(); // path -> { token, file }

const uds = (node) => node?.$extensions?.['com.asu.uds'] ?? {};

function walk(node, path, inherited, file) {
  if (typeof node !== 'object' || node === null) return;

  const own = uds(node);
  const ctx = {
    status: own.status ?? inherited.status,
    hasDescription: Boolean(node.$description) || inherited.hasDescription,
  };
  if (own.status && !ALLOWED_STATUS.has(own.status)) {
    errors.push(`${file} → ${path.join('.') || '(root)'}: invalid status "${own.status}"`);
  }

  if ('$value' in node) {
    const id = path.join('.');
    tokens.set(id, { token: node, file });

    for (const legacy of ['value', 'type', 'description']) {
      if (legacy in node) {
        errors.push(`${file} → ${id}: legacy "${legacy}" key found — use $${legacy}`);
      }
    }
    if (!node.$type || !ALLOWED_TYPES.has(node.$type)) {
      errors.push(`${file} → ${id}: missing or invalid $type "${node.$type}"`);
    }
    if (!ctx.hasDescription) {
      errors.push(`${file} → ${id}: no $description on token or any ancestor group`);
    }
    if (!ctx.status) {
      errors.push(`${file} → ${id}: no com.asu.uds.status on token or any ancestor group`);
    }
    if (own.figmaVar && own.figmaVar.split('/').length < 2) {
      errors.push(`${file} → ${id}: figmaVar "${own.figmaVar}" must be "Collection/Group/Name"`);
    }
    return;
  }

  for (const [key, child] of Object.entries(node)) {
    if (key.startsWith('$')) continue;
    walk(child, [...path, key], ctx, file);
  }
}

for (const entry of readdirSync(TOKENS_DIR)) {
  if (!entry.endsWith('.json') || entry === 'tokens.schema.json') continue;
  const file = entry;
  let data;
  try {
    data = JSON.parse(readFileSync(join(TOKENS_DIR, entry), 'utf8'));
  } catch (e) {
    errors.push(`${file}: invalid JSON — ${e.message}`);
    continue;
  }
  walk(data, [], { status: undefined, hasDescription: false }, file);
}

// Reference resolution.
for (const [id, { token, file }] of tokens) {
  const value = token.$value;
  if (typeof value === 'string' && /^\{[^}]+\}$/.test(value.trim())) {
    const target = value.trim().slice(1, -1);
    if (!tokens.has(target)) {
      errors.push(`${file} → ${id}: reference {${target}} does not resolve`);
    }
  }
}

// figmaVar resolution against the vendored snapshot.
let snapshot;
try {
  snapshot = JSON.parse(readFileSync(join(TOKENS_DIR, 'figma', 'figma-variables.json'), 'utf8'));
} catch {
  errors.push('tokens/figma/figma-variables.json: snapshot missing or invalid');
}
if (snapshot) {
  const figmaKeys = new Set();
  for (const [collection, data] of Object.entries(snapshot)) {
    if (collection.startsWith('_')) continue;
    for (const row of data.rows ?? []) {
      figmaKeys.add(row.g ? `${collection}/${row.g}/${row.n}` : `${collection}/${row.n}`);
    }
  }
  for (const [id, { token, file }] of tokens) {
    const { figmaVar } = uds(token);
    if (figmaVar && !figmaKeys.has(figmaVar)) {
      errors.push(`${file} → ${id}: figmaVar "${figmaVar}" not found in the Figma snapshot`);
    }
  }
}

if (errors.length) {
  console.error(`✗ Token validation failed (${errors.length} problem${errors.length > 1 ? 's' : ''}):\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`✓ ${tokens.size} tokens validated (types, descriptions, status, references, figmaVar).`);
