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
import { initFooterGA } from './global-footer';

export const GlobalElementsOnlyExample = createStory(
  GlobalElementsOnly,
  initFooterGA
);
export const ZeroColumnsExample = createStory(ZeroColumns, initFooterGA);
export const OneColumnExample = createStory(OneColumn, initFooterGA);
export const OneColumnNoLogoOrSocialExample = createStory(
  OneColumnNoLogoOrSocial,
  initFooterGA
);
export const TwoColumnsExample = createStory(TwoColumns, initFooterGA);
export const ThreeColumnsExample = createStory(ThreeColumns, initFooterGA);
export const FourColumnsExample = createStory(FourColumns, initFooterGA);
export const FiveColumnsExample = createStory(FiveColumns, initFooterGA);
export const SixColumnsExample = createStory(SixColumns, initFooterGA);
