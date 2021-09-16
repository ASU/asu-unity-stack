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

export const GlobalElementsOnlyExample = createStory(GlobalElementsOnly);
export const ZeroColumnsExample = createStory(ZeroColumns);
export const OneColumnExample = createStory(OneColumn);
export const OneColumnNoLogoOrSocialExample = createStory(OneColumnNoLogoOrSocial);
export const TwoColumnsExample = createStory(TwoColumns);
export const ThreeColumnsExample = createStory(ThreeColumns);
export const FourColumnsExample = createStory(FourColumns);
export const FiveColumnsExample = createStory(FiveColumns);
export const SixColumnsExample = createStory(SixColumns);
