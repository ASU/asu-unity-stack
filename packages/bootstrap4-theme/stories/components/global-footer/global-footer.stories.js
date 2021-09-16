import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Global Footer');

import {
  GlobalElementsOnly,
  ZeroColumns,
  OneColumn,
  OneColumnNoLogoOrSocial,
  TwoColumns,
  ThreeColumns,
  FourColumns,
  FiveColumns,
  SixColumns,
} from './global-footer.components.js';
import { initGA } from './global-footer';

export const GlobalElementsOnlyExample = createStory(
  GlobalElementsOnly,
  initGA
);
export const ZeroColumnsExample = createStory(ZeroColumns, initGA);
export const OneColumnExample = createStory(OneColumn, initGA);
export const OneColumnNoLogoOrSocialExample = createStory(
  OneColumnNoLogoOrSocial,
  initGA
);
export const TwoColumnsExample = createStory(TwoColumns, initGA);
export const ThreeColumnsExample = createStory(ThreeColumns, initGA);
export const FourColumnsExample = createStory(FourColumns, initGA);
export const FiveColumnsExample = createStory(FiveColumns, initGA);
export const SixColumnsExample = createStory(SixColumns, initGA);
