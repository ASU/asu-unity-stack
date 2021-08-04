import React from 'react';
export default { title: 'Components/Global Footer'};

import { GlobalElementsOnly, ZeroColumns, OneColumn, OneColumnNoLogoOrSocial, TwoColumns, ThreeColumns, FourColumns, FiveColumns, SixColumns, } from './global-footer.components.js'


const GlobalElementsOnlyTemplate = ({...args}) => (
  <div>
    { GlobalElementsOnly }
  </div>
);
export const GlobalElementsOnlyHeader =  GlobalElementsOnlyTemplate.bind({});


const ZeroColumnsTemplate = ({...args}) => (
  <div>
    { ZeroColumns }
  </div>
);
export const ZeroColumnsHeader =  ZeroColumnsTemplate.bind({});


const OneColumnTemplate = ({...args}) => (
  <div>
    { OneColumn }
  </div>
);
export const OneColumnHeader =  OneColumnTemplate.bind({});


const OneColumnNoLogoOrSocialTemplate = ({...args}) => (
  <div>
    { OneColumnNoLogoOrSocial }
  </div>
);
export const OneColumnNoLogoOrSocialHeader =  OneColumnNoLogoOrSocialTemplate.bind({});


const TwoColumnsTemplate = ({...args}) => (
  <div>
    { TwoColumns }
  </div>
);
export const TwoColumnsHeader =  TwoColumnsTemplate.bind({});


const ThreeColumnsTemplate = ({...args}) => (
  <div>
    { ThreeColumns }
  </div>
);
export const ThreeColumnsHeader =  ThreeColumnsTemplate.bind({});


const FourColumnsTemplate = ({...args}) => (
  <div>
    { FourColumns }
  </div>
);
export const FourColumnsHeader =  FourColumnsTemplate.bind({});


const FiveColumnsTemplate = ({...args}) => (
  <div>
    { FiveColumns }
  </div>
);
export const FiveColumnsHeader =  FiveColumnsTemplate.bind({});


const SixColumnsTemplate = ({...args}) => (
  <div>
    { SixColumns }
  </div>
);
export const SixColumnsHeader =  SixColumnsTemplate.bind({});


