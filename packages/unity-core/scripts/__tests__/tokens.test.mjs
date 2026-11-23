import { describe, it, expect, beforeAll } from 'vitest';
import { validateTokens } from '../validate-tokens.mjs';
import { TOKENS, buildCss, ROOT_BLOCK, LIGHT_BLOCK, DARK_BLOCK, TABLET_BLOCK, MOBILE_BLOCK } from './helpers.mjs';

let css;
beforeAll(async () => {
  css = await buildCss(TOKENS);
});

describe('real tokens', () => {
  it('validate with no errors', () => {
    expect(validateTokens(TOKENS).errors).toEqual([]);
  });
});

describe('colors', () => {
  it('semantic and component values', () => {
    expect(LIGHT_BLOCK(css)).toContain('--uds-color-text-secondary: var(--uds-color-gray-2);');
    expect(DARK_BLOCK(css)).toContain('--uds-color-text-primary: var(--uds-color-gray-7);');
    expect(DARK_BLOCK(css)).toContain('--uds-color-text-inverse: var(--uds-color-gray-1);');
    expect(css).toContain('--uds-color-button-secondary-text: var(--uds-color-text-on-highlight);');
    expect(LIGHT_BLOCK(css).toLowerCase()).toContain('--uds-color-text-warning: #bb4700;');
    expect(css).toContain('--uds-color-gold-dark: #D3A524;');
  });

  it('the 4 Figma brand colors ship under functional names (ask 11)', () => {
    expect(LIGHT_BLOCK(css)).toContain('--uds-color-background-accent: var(--uds-color-maroon);');
    expect(DARK_BLOCK(css)).toContain('--uds-color-background-accent: var(--uds-color-gold);');
    expect(ROOT_BLOCK(css)).toContain('--uds-color-background-highlight: var(--uds-color-gold);');
    expect(DARK_BLOCK(css)).toContain('--uds-color-background-contrast: var(--uds-color-gray-7);');
    expect(DARK_BLOCK(css)).toContain('--uds-color-text-on-contrast: var(--uds-color-gray-1);');
  });

  it('primary button switches inside dark sections', () => {
    const decl = '--uds-color-button-primary-background: var(--uds-color-background-accent);';
    expect(LIGHT_BLOCK(css)).toContain(decl);
    expect(DARK_BLOCK(css)).toContain(decl);
  });

  it('removed values are gone', () => {
    for (const gone of ['copper', 'turquoise', 'pink', 'color-brand-', 'color-semantic', '495057', '7F6227', 'gold-visited', 'color-text-tertiary', 'color-background-tertiary']) {
      expect(css).not.toContain(gone);
    }
  });
});

describe('typography', () => {
  it('heading sizes per breakpoint', () => {
    expect(ROOT_BLOCK(css)).toContain('--uds-font-size-h1: 64px;');
    expect(MOBILE_BLOCK(css)).toContain('--uds-font-size-h1: 36px;');
    expect(TABLET_BLOCK(css)).not.toContain('--uds-font-size-h1'); // H1 stays desktop size at 600px
    expect(ROOT_BLOCK(css)).toContain('--uds-line-height-h1: 68px;');
    expect(MOBILE_BLOCK(css)).toContain('--uds-line-height-h2: 36px;');
    expect(css).toContain('--uds-letter-spacing-h2: -1.4px;');
    expect(css).toContain('--uds-font-size-16: 16px;');
    expect(css).not.toContain('--uds-font-size-h1-xl');
    expect(css).not.toContain('--uds-line-height-heading');
  });
});

describe('spacing', () => {
  it('pixel-named scale', () => {
    const scale = ROOT_BLOCK(css).match(/--uds-spacing-\d+:/g) ?? [];
    expect(scale).toHaveLength(20);
    expect(css).toContain('--uds-spacing-16: 16px;');
    expect(css).toContain('--uds-spacing-512: 512px;');
  });

  it('section spacing on three breakpoints', () => {
    expect(ROOT_BLOCK(css)).toContain('--uds-spacing-section-standard: var(--uds-spacing-96);');
    expect(TABLET_BLOCK(css)).toContain('--uds-spacing-section-standard: var(--uds-spacing-72);');
    expect(MOBILE_BLOCK(css)).toContain('--uds-spacing-section-standard: var(--uds-spacing-48);');
    expect(ROOT_BLOCK(css)).toContain('--uds-spacing-section-sm: var(--uds-spacing-64);');
    expect(TABLET_BLOCK(css)).toContain('--uds-spacing-section-sm: var(--uds-spacing-48);');
    expect(MOBILE_BLOCK(css)).toContain('--uds-spacing-section-sm: var(--uds-spacing-32);');
    expect(css).not.toMatch(/section-x?small/);
  });

  it('padding and removed prototype names', () => {
    expect(css).toContain('--uds-spacing-padding-md: var(--uds-spacing-16);');
    expect(css).toContain('--uds-spacing-padding-xs: var(--uds-spacing-4);');
    for (const gone of ['--uds-spacing-md:', '--uds-spacing-section-gap', '--uds-spacing-component-gap']) {
      expect(css).not.toContain(gone);
    }
  });
});

describe('other', () => {
  it('layout, radius, motion, button', () => {
    expect(css).toContain('--uds-breakpoint-xl: 1260px;');
    expect(css).not.toContain('--uds-breakpoint-xxl');
    expect(css).toContain('--uds-radius-pill: 400rem;');
    expect(css).not.toContain('--uds-radius-sm');
    expect(css).not.toMatch(/--uds-(shadow|easing|transition)-/);
    expect(css).toContain('--uds-duration-base: 400ms;');
    expect(css).toContain('--uds-button-padding-default-y: var(--uds-spacing-padding-md);');
    expect(css).toContain('--uds-button-padding-small-x: var(--uds-spacing-12);');
    expect(css).toContain('--uds-button-opacity-disabled: var(--uds-opacity-disabled);');
  });
});
