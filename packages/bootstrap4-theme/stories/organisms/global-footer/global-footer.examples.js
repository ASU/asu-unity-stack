import React from 'react';
import { createComponent, createStory, layoutNames } from '../../../helpers/wrapper.js';
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
import { initFooterGA as initFunc } from './global-footer';

const specialFooterWrapper = (footer) => {
  const story = createStory(
    <div style={{height: '100vh'}}>
      <span>Note: The footer stories are in a special wrapper with 100vh</span>
      { footer }
    </div>,
    { initFunc, supportedTemplates: [layoutNames.FULL_WIDTH] }
  );
  story.args = {
    template: layoutNames.FULL_WIDTH,
  }
  return story;
}

export const GlobalElementsOnlyExample = specialFooterWrapper(GlobalElementsOnly);
export const ZeroColumnsExample = specialFooterWrapper(ZeroColumns);
export const OneColumnExample = specialFooterWrapper(OneColumn);
export const OneColumnNoLogoOrSocialExample = specialFooterWrapper(OneColumnNoLogoOrSocial);
export const TwoColumnsExample = specialFooterWrapper(TwoColumns);
export const ThreeColumnsExample = specialFooterWrapper(ThreeColumns);
export const FourColumnsExample = specialFooterWrapper(FourColumns);
export const FiveColumnsExample = specialFooterWrapper(FiveColumns);
export const SixColumnsExample = specialFooterWrapper(SixColumns);
