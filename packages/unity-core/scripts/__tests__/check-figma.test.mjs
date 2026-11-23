import { describe, it, expect } from 'vitest';
import { checkFigma } from '../check-figma.mjs';
import { fixture, meta } from './helpers.mjs';

const snapshot = {
  'Light or Dark Mode': {
    modes: ['Light Mode', 'Dark Mode'],
    rows: [{ g: 'Text colors', n: 'Primary text', v: [{ val: '#191919' }, { val: '#FFFFFF' }] }],
  },
  Breakpoints: {
    modes: ['Desktop', 'Mobile'],
    rows: [{ g: 'Section spacing', n: 'Section spacing | Standard', v: [{ val: '96' }, { val: '48' }] }],
  },
};

const tokens = {
  color: {
    $description: 'c',
    ...meta({ status: 'stable', tier: 'semantic' }),
    text: {
      primary: {
        ...meta({ figmaVar: 'Light or Dark Mode/Text colors/Primary text' }),
        light: { $value: '#191919', $type: 'color' },
        dark: { $value: '#FAFAFA', $type: 'color' },
      },
    },
  },
  spacing: {
    $description: 's',
    ...meta({ status: 'stable', tier: 'semantic' }),
    section: {
      standard: {
        ...meta({ figmaVar: 'Breakpoints/Section spacing/Section spacing | Standard' }),
        desktop: { $value: '96px', $type: 'dimension' },
        tablet: { $value: '72px', $type: 'dimension' },
        mobile: { $value: '48px', $type: 'dimension' },
      },
    },
  },
};

describe('checkFigma', () => {
  const { rows, mismatches } = checkFigma(fixture({ 't.json': tokens }, snapshot));
  const row = (id) => rows.find((r) => r[1] === id);

  it('compares each leaf against its own mode', () => {
    expect(row('color.text.primary.light')).toEqual([
      'OK', 'color.text.primary.light', 'Light or Dark Mode/Text colors/Primary text', 'Light Mode', '#191919', '#191919',
    ]);
    expect(row('color.text.primary.dark').slice(0, 1).concat(row('color.text.primary.dark').slice(3))).toEqual([
      'MISMATCH', 'Dark Mode', '#FFFFFF', '#FAFAFA',
    ]);
    expect(row('spacing.section.standard.mobile')[0]).toBe('OK');
    expect(row('spacing.section.standard.mobile')[3]).toBe('Mobile');
  });

  it('tablet leaf is not compared', () => {
    expect(row('spacing.section.standard.tablet')[0]).toBe('NO-FIGMA-MODE');
    expect(mismatches).toBe(1);
  });
});
