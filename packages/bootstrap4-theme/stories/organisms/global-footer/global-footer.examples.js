import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Global Footer', 'Organisms', 'Examples');

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
} from './global-footer.templates.js';
import { initFooterGA } from './global-footer';

export const GlobalElementsOnlyExample = createStory(GlobalElementsOnly, {
  initFunc,
});
export const ZeroColumnsExample = createStory(ZeroColumns, { initFunc });
export const OneColumnExample = createStory(OneColumn, { initFunc });
export const OneColumnNoLogoOrSocialExample = createStory(
  OneColumnNoLogoOrSocial,
  { initFunc }
);
export const TwoColumnsExample = createStory(TwoColumns, { initFunc });
export const ThreeColumnsExample = createStory(ThreeColumns, { initFunc });
export const FourColumnsExample = createStory(FourColumns, { initFunc });
export const FiveColumnsExample = createStory(FiveColumns, { initFunc });
export const SixColumnsExample = createStory(SixColumns, { initFunc });
