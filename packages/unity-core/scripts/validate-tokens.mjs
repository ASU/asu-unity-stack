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
 *   - Every token must have an effective com.asu.uds.tier
 *     (primitive | semantic | component), own or inherited:
 *       primitive  holds a literal value (no reference);
 *       semantic   holds a literal or references a primitive;
 *       component  is a pure reference to a semantic token. It may reference
 *                  a primitive only when it sets primitiveRef: true (used
 *                  where no semantic token exists, e.g. 12px button padding).
 *   - figmaVar may sit on a token or on a mode group (a group whose children
 *     are exactly {light, dark}, {desktop, mobile} or {desktop, tablet,
 *     mobile}); leaves inherit it. It must be "Collection/Group/Name" and
 *     resolve against the vendored Figma snapshot.
 *   - Pure references ({a.b.c}) must resolve to an existing token.
 *   - Legacy (non-$) value/type/description keys are forbidden.
 *
 * CLI: exits 1 with a report when any rule is violated.
 * API: validateTokens(tokensDir) returns the list of error messages.
 */

import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

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
const ALLOWED_TIERS = new Set(['primitive', 'semantic', 'component']);
const MODE_GROUPS = [['dark', 'light'], ['desktop', 'mobile'], ['desktop', 'mobile', 'tablet']];

const uds = (node) => node?.$extensions?.['com.asu.uds'] ?? {};
const childKeys = (node) => Object.keys(node).filter((k) => !k.startsWith('$'));
const isPureRef = (value) => typeof value === 'string' && /^\{[^}]+\}$/.test(value.trim());

/** True when every child of the group is a token and the keys form a mode set. */
export function isModeGroup(node) {
  if (typeof node !== 'object' || node === null || '$value' in node) return false;
  const keys = childKeys(node).sort();
  if (!keys.every((k) => node[k] && typeof node[k] === 'object' && '$value' in node[k])) return false;
  return MODE_GROUPS.some((set) => set.length === keys.length && set.every((k, i) => k === keys[i]));
}

/** Reads every token file in a directory and returns Map<id, {token, file, tier, status, figmaVar, primitiveRef}>. */
export function loadTokens(tokensDir, errors = []) {
  const tokens = new Map();

  function walk(node, path, inherited, file) {
    if (typeof node !== 'object' || node === null) return;
    const own = uds(node);
    const id = path.join('.') || '(root)';
    const ctx = {
      status: own.status ?? inherited.status,
      tier: own.tier ?? inherited.tier,
      hasDescription: Boolean(node.$description) || inherited.hasDescription,
      figmaVar: inherited.figmaVar,
    };
    if (own.status && !ALLOWED_STATUS.has(own.status)) {
      errors.push(`${file} → ${id}: invalid status "${own.status}"`);
    }
    if (own.tier && !ALLOWED_TIERS.has(own.tier)) {
      errors.push(`${file} → ${id}: invalid tier "${own.tier}"`);
    }

    if ('$value' in node) {
      tokens.set(path.join('.'), {
        token: node,
        file,
        status: ctx.status,
        tier: ctx.tier,
        hasDescription: ctx.hasDescription,
        figmaVar: own.figmaVar ?? ctx.figmaVar,
        primitiveRef: own.primitiveRef === true,
      });
      return;
    }

    if (own.figmaVar) {
      if (isModeGroup(node)) ctx.figmaVar = own.figmaVar;
      else errors.push(`${file} → ${id}: figmaVar is only allowed on a token or a mode group`);
    }
    for (const key of childKeys(node)) walk(node[key], [...path, key], ctx, file);
  }

  for (const entry of readdirSync(tokensDir)) {
    if (!entry.endsWith('.json') || entry === 'tokens.schema.json') continue;
    let data;
    try {
      data = JSON.parse(readFileSync(join(tokensDir, entry), 'utf8'));
    } catch (e) {
      errors.push(`${entry}: invalid JSON — ${e.message}`);
      continue;
    }
    walk(data, [], { status: undefined, tier: undefined, hasDescription: false, figmaVar: undefined }, entry);
  }
  return tokens;
}

/** Builds the set of "Collection/Group/Name" keys in a Figma snapshot. */
export function figmaKeys(snapshot) {
  const keys = new Set();
  for (const [collection, data] of Object.entries(snapshot)) {
    if (collection.startsWith('_')) continue;
    for (const row of data.rows ?? []) {
      keys.add(row.g ? `${collection}/${row.g}/${row.n}` : `${collection}/${row.n}`);
    }
  }
  return keys;
}

export function validateTokens(tokensDir) {
  const errors = [];
  const tokens = loadTokens(tokensDir, errors);

  for (const [id, entry] of tokens) {
    const { token, file, tier } = entry;
    for (const legacy of ['value', 'type', 'description']) {
      if (legacy in token) errors.push(`${file} → ${id}: legacy "${legacy}" key found — use $${legacy}`);
    }
    if (!token.$type || !ALLOWED_TYPES.has(token.$type)) {
      errors.push(`${file} → ${id}: missing or invalid $type "${token.$type}"`);
    }
    if (!entry.hasDescription) errors.push(`${file} → ${id}: no $description on token or any ancestor group`);
    if (!entry.status) errors.push(`${file} → ${id}: no com.asu.uds.status on token or any ancestor group`);
    if (entry.figmaVar && entry.figmaVar.split('/').length < 2) {
      errors.push(`${file} → ${id}: figmaVar "${entry.figmaVar}" must be "Collection/Group/Name"`);
    }
    if (!tier) {
      errors.push(`${file} → ${id}: no com.asu.uds.tier on token or any ancestor group`);
      continue;
    }

    // Reference resolution and tier rules.
    const value = token.$value;
    const ref = isPureRef(value) ? value.trim().slice(1, -1) : null;
    if (ref && !tokens.has(ref)) {
      errors.push(`${file} → ${id}: reference {${ref}} does not resolve`);
      continue;
    }
    const targetTier = ref ? tokens.get(ref).tier : null;
    if (tier === 'primitive' && typeof value === 'string' && value.includes('{')) {
      errors.push(`${file} → ${id}: a primitive token must hold a literal value, not a reference`);
    }
    if (tier === 'semantic' && ref && targetTier !== 'primitive') {
      errors.push(`${file} → ${id}: semantic token may only reference a primitive (got ${targetTier} {${ref}})`);
    }
    if (tier === 'component') {
      const allowed = entry.primitiveRef ? ['semantic', 'primitive'] : ['semantic'];
      if (!ref || !allowed.includes(targetTier)) {
        errors.push(
          `${file} → ${id}: component token ${id} must reference a semantic token` +
            (entry.primitiveRef ? ' or a primitive' : ' (set primitiveRef: true to reference a primitive)'),
        );
      }
    }
    if (entry.primitiveRef && tier !== 'component') {
      errors.push(`${file} → ${id}: primitiveRef is only allowed on component tokens`);
    }
  }

  // figmaVar resolution against the vendored snapshot.
  let snapshot;
  try {
    snapshot = JSON.parse(readFileSync(join(tokensDir, 'figma', 'figma-variables.json'), 'utf8'));
  } catch {
    errors.push('tokens/figma/figma-variables.json: snapshot missing or invalid');
  }
  if (snapshot) {
    const keys = figmaKeys(snapshot);
    for (const [id, { figmaVar, file }] of tokens) {
      if (figmaVar && !keys.has(figmaVar)) {
        errors.push(`${file} → ${id}: figmaVar "${figmaVar}" not found in the Figma snapshot`);
      }
    }
  }

  return { errors, count: tokens.size };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'tokens');
  const { errors, count } = validateTokens(dir);
  if (errors.length) {
    console.error(`✗ Token validation failed (${errors.length} problem${errors.length > 1 ? 's' : ''}):\n`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`✓ ${count} tokens validated (types, descriptions, status, tiers, references, figmaVar).`);
}
