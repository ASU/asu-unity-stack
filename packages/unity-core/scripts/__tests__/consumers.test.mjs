import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { ROOT, TOKENS, buildCss } from './helpers.mjs';

function files(dir, exts) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return files(p, exts);
    return exts.some((e) => name.endsWith(e)) ? [p] : [];
  });
}

describe('consumers', () => {
  let declared;
  beforeAll(async () => {
    const css = await buildCss(TOKENS);
    declared = new Set(css.match(/--uds-[a-z0-9-]+(?=:)/g));
  });

  it('every consumed --uds-* var is defined', () => {
    const sources = [
      ...files(join(ROOT, 'src'), ['.ts', '.css']).filter((p) => !p.endsWith(join('global', 'tokens.css'))),
      ...files(join(ROOT, 'examples'), ['.html']),
      ...files(join(ROOT, '.storybook'), ['.ts']),
    ];
    const missing = [];
    for (const file of sources) {
      const text = readFileSync(file, 'utf8');
      for (const [, name] of text.matchAll(/var\(\s*(--uds-[a-z0-9-]+)/g)) {
        if (!declared.has(name)) missing.push(`${relative(ROOT, file)}: ${name}`);
      }
    }
    expect(missing).toEqual([]);
  });

  it('dead prototype files are gone', () => {
    for (const f of ['tailwind.config.ts', 'src/core/tokens.ts', 'src/components/button/uds-button.tokens.css']) {
      expect(existsSync(join(ROOT, f))).toBe(false);
    }
  });
});
