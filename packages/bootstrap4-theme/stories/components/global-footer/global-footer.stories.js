import React from 'react';
export default { title: 'Components/Global Footer'};

import { GlobalElementsOnly, ZeroColumns, OneColumn, OneColumnNoLogoOrSocial, TwoColumns, ThreeColumns, FourColumns, FiveColumns, SixColumns, } from './global-footer.components.js'


const GlobalElementsOnlyTemplate = () => (
  <GlobalElementsOnly />
);
export const GlobalElementsOnlyHeader =  GlobalElementsOnlyTemplate.bind({});


const ZeroColumnsTemplate = () => (
  <ZeroColumns />
);
export const ZeroColumnsHeader =  ZeroColumnsTemplate.bind({});


const OneColumnTemplate = () => (
  <OneColumn />
);
export const OneColumnHeader =  OneColumnTemplate.bind({});


const OneColumnNoLogoOrSocialTemplate = () => (
  <OneColumnNoLogoOrSocial />
);
export const OneColumnNoLogoOrSocialHeader =  OneColumnNoLogoOrSocialTemplate.bind({});


const TwoColumnsTemplate = () => (
  <TwoColumns />
);
export const TwoColumnsHeader =  TwoColumnsTemplate.bind({});


const ThreeColumnsTemplate = () => (
  <ThreeColumns />
);
export const ThreeColumnsHeader =  ThreeColumnsTemplate.bind({});


const FourColumnsTemplate = () => (
  <FourColumns />
);
export const FourColumnsHeader =  FourColumnsTemplate.bind({});


const FiveColumnsTemplate = () => (
  <FiveColumns />
);
export const FiveColumnsHeader =  FiveColumnsTemplate.bind({});


const SixColumnsTemplate = () => (
  <SixColumns />
);
export const SixColumnsHeader =  SixColumnsTemplate.bind({});


