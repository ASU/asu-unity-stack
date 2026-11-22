import { mkdtempSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import StyleDictionary from 'style-dictionary';
import config, { LIGHT_SURFACES, DARK_SURFACES } from '../../style-dictionary.config.js';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const TOKENS = join(ROOT, 'tokens');

const EMPTY_SNAPSHOT = { _meta: {}, };

/** Writes token files (and an optional Figma snapshot) into a fresh temp dir. */
export function fixture(files, snapshot = EMPTY_SNAPSHOT) {
  const dir = mkdtempSync(join(tmpdir(), 'uds-tokens-'));
  for (const [name, data] of Object.entries(files)) {
    writeFileSync(join(dir, name), JSON.stringify(data, null, 2));
  }
  mkdirSync(join(dir, 'figma'));
  writeFileSync(join(dir, 'figma', 'figma-variables.json'), JSON.stringify(snapshot));
  return dir;
}

/** Builds a tokens dir with the real Style Dictionary config; returns tokens.css. */
export async function buildCss(tokensDir) {
  const out = mkdtempSync(join(tmpdir(), 'uds-css-'));
  const sd = new StyleDictionary({
    ...config,
    source: [join(tokensDir, '*.json').replace(/\\/g, '/')],
    log: { verbosity: 'silent', warnings: 'disabled' },
    platforms: { css: { ...config.platforms.css, buildPath: `${out}/` } },
  });
  await sd.buildPlatform('css');
  return readFileSync(join(out, 'tokens.css'), 'utf8');
}

/** Returns the body of the first block whose header matches exactly. */
export function block(css, header) {
  const start = css.indexOf(`${header} {`);
  if (start < 0) return '';
  let depth = 0;
  for (let i = css.indexOf('{', start); i < css.length; i += 1) {
    if (css[i] === '{') depth += 1;
    if (css[i] === '}') {
      depth -= 1;
      if (depth === 0) return css.slice(start, i + 1);
    }
  }
  return '';
}

export const ROOT_BLOCK = (css) => {
  // The plain base block is the first ":root {" that is not part of ":root,\n.uds-surface-light".
  const m = css.match(/\n:root \{[\s\S]*?\n\}/);
  return m ? m[0] : '';
};
export const LIGHT_BLOCK = (css) => block(css, LIGHT_SURFACES.join(',\n'));
export const DARK_BLOCK = (css) => block(css, DARK_SURFACES.join(',\n'));
export const TABLET_BLOCK = (css) => block(css, '@media (max-width: 991.98px)');
export const MOBILE_BLOCK = (css) => block(css, '@media (max-width: 575.98px)');

export const meta = (o) => ({ $extensions: { 'com.asu.uds': o } });
