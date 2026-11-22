import { describe, it, expect, beforeAll } from 'vitest';
import { fixture, buildCss, meta, ROOT_BLOCK, LIGHT_BLOCK, DARK_BLOCK, TABLET_BLOCK, MOBILE_BLOCK } from './helpers.mjs';

const tokens = {
  color: {
    $description: 'c',
    ...meta({ status: 'stable' }),
    maroon: { $value: '#8C1D40', $type: 'color', ...meta({ tier: 'primitive' }) },
    gold: { $value: '#FFC627', $type: 'color', ...meta({ tier: 'primitive' }) },
    background: {
      ...meta({ tier: 'semantic' }),
      accent: {
        light: { $value: '{color.maroon}', $type: 'color' },
        dark: { $value: '{color.gold}', $type: 'color' },
      },
    },
    button: {
      primary: { background: { $value: '{color.background.accent.light}', $type: 'color', ...meta({ tier: 'component' }) } },
    },
  },
  font: {
    $description: 'f',
    ...meta({ status: 'stable', tier: 'semantic' }),
    size: { h1: { desktop: { $value: '64px', $type: 'dimension' }, mobile: { $value: '36px', $type: 'dimension' } } },
  },
  spacing: {
    $description: 's',
    ...meta({ status: 'stable', tier: 'semantic' }),
    section: {
      standard: {
        desktop: { $value: '96px', $type: 'dimension' },
        tablet: { $value: '72px', $type: 'dimension' },
        mobile: { $value: '48px', $type: 'dimension' },
      },
    },
    paragraph: {
      'element-text': {
        desktop: { $value: '32px', $type: 'dimension' },
        tablet: { $value: '24px', $type: 'dimension' },
        mobile: { $value: '24px', $type: 'dimension' },
      },
    },
  },
};

describe('pipeline (tokens.css)', () => {
  let css;
  beforeAll(async () => {
    css = await buildCss(fixture({ 't.json': tokens }));
  });

  it('moded semantic emits light and dark', () => {
    expect(LIGHT_BLOCK(css)).toContain('--uds-color-background-accent: var(--uds-color-maroon);');
    expect(DARK_BLOCK(css)).toContain('--uds-color-background-accent: var(--uds-color-gold);');
  });

  it('component alias re-resolves in .uds-surface-dark', () => {
    const decl = '--uds-color-button-primary-background: var(--uds-color-background-accent);';
    expect(LIGHT_BLOCK(css)).toContain(decl);
    expect(DARK_BLOCK(css)).toContain(decl);
    expect(ROOT_BLOCK(css)).not.toContain('--uds-color-button-primary-background');
  });

  it('desktop/mobile emits media override only when different', () => {
    expect(ROOT_BLOCK(css)).toContain('--uds-font-size-h1: 64px;');
    expect(MOBILE_BLOCK(css)).toContain('--uds-font-size-h1: 36px;');
    expect(TABLET_BLOCK(css)).not.toContain('--uds-font-size-h1');
  });

  it('tablet emits before mobile', () => {
    expect(TABLET_BLOCK(css)).toContain('--uds-spacing-section-standard: 72px;');
    expect(MOBILE_BLOCK(css)).toContain('--uds-spacing-section-standard: 48px;');
    expect(css.indexOf('@media (max-width: 991.98px)')).toBeLessThan(css.indexOf('@media (max-width: 575.98px)'));
  });

  it('mobile equal to tablet is not repeated', () => {
    expect(TABLET_BLOCK(css)).toContain('--uds-spacing-paragraph-element-text: 24px;');
    expect(MOBILE_BLOCK(css)).not.toContain('--uds-spacing-paragraph-element-text');
  });

  it('production section classes switch the tokens (WS2 content needs no migration)', () => {
    expect(css).toMatch(/\n\.uds-surface-dark,\n\.gray-7-bg,\n\.gray-dark-bg,\n\.bg-dark \{/);
    expect(css).toMatch(/\n:root,\n\.uds-surface-light,\n\.white-bg,\n\.gray-1-bg,\n\.gray-2-bg,\n\.bg-white,\n\.bg-gray-1,\n\.bg-gray-2 \{/);
    expect(css).not.toMatch(/\.bg-gray-7\b|\.uds-bg-dark/);
  });
});
