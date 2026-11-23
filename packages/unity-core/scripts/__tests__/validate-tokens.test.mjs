import { describe, it, expect } from 'vitest';
import { validateTokens } from '../validate-tokens.mjs';
import { fixture, meta } from './helpers.mjs';

const base = {
  color: {
    $description: 'colors',
    ...meta({ status: 'stable' }),
    'gray-1': { $value: '#191919', $type: 'color', ...meta({ tier: 'primitive' }) },
    'gray-7': { $value: '#FAFAFA', $type: 'color', ...meta({ tier: 'primitive' }) },
    text: {
      ...meta({ tier: 'semantic' }),
      primary: {
        light: { $value: '{color.gray-1}', $type: 'color' },
        dark: { $value: '{color.gray-7}', $type: 'color' },
      },
    },
  },
};
const clone = (o) => JSON.parse(JSON.stringify(o));
const snapshot = {
  'Light or Dark Mode': {
    modes: ['Light Mode', 'Dark Mode'],
    rows: [{ g: 'Text colors', n: 'Primary text', v: [{ val: '#191919' }, { val: '#FFFFFF' }] }],
  },
};

describe('validateTokens', () => {
  it('valid fixture passes', () => {
    expect(validateTokens(fixture({ 'colors.json': base })).errors).toEqual([]);
  });

  it('component token must reference a semantic token', () => {
    const t = clone(base);
    t.color.button = { x: { background: { $value: '{color.gray-1}', $type: 'color', ...meta({ tier: 'component' }) } } };
    const { errors } = validateTokens(fixture({ 'colors.json': t }));
    expect(errors.join('\n')).toContain('component token color.button.x.background must reference a semantic token');
  });

  it('component token may reference a primitive with primitiveRef', () => {
    const t = clone(base);
    t.color.button = {
      x: { background: { $value: '{color.gray-1}', $type: 'color', ...meta({ tier: 'component', primitiveRef: true }) } },
    };
    expect(validateTokens(fixture({ 'colors.json': t })).errors).toEqual([]);
  });

  it('component token referencing a semantic leaf passes', () => {
    const t = clone(base);
    t.color.button = { x: { text: { $value: '{color.text.primary.light}', $type: 'color', ...meta({ tier: 'component' }) } } };
    expect(validateTokens(fixture({ 'colors.json': t })).errors).toEqual([]);
  });

  it('primitive must not reference', () => {
    const t = clone(base);
    t.color['gray-9'] = { $value: '{color.gray-1}', $type: 'color', ...meta({ tier: 'primitive' }) };
    expect(validateTokens(fixture({ 'colors.json': t })).errors.join('\n')).toContain('primitive');
  });

  it('token without tier fails', () => {
    const t = clone(base);
    t.color.loose = { $value: '#000000', $type: 'color' };
    expect(validateTokens(fixture({ 'colors.json': t })).errors.join('\n')).toContain('no com.asu.uds.tier');
  });

  it('figmaVar on a mode group is inherited', () => {
    const t = clone(base);
    t.color.text.primary.$extensions = { 'com.asu.uds': { figmaVar: 'Light or Dark Mode/Text colors/Primary text' } };
    expect(validateTokens(fixture({ 'colors.json': t }, snapshot)).errors).toEqual([]);
  });

  it('figmaVar on a non-mode group fails', () => {
    const t = clone(base);
    t.color.text.$extensions['com.asu.uds'].figmaVar = 'Light or Dark Mode/Text colors/Primary text';
    expect(validateTokens(fixture({ 'colors.json': t }, snapshot)).errors.join('\n')).toContain(
      'figmaVar is only allowed on a token or a mode group',
    );
  });

  it('unresolved reference fails', () => {
    const t = clone(base);
    t.color.text.primary.light.$value = '{color.nope}';
    expect(validateTokens(fixture({ 'colors.json': t })).errors.join('\n')).toContain('does not resolve');
  });
});
