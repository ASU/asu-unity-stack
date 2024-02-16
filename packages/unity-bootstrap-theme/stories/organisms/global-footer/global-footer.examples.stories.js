import { createComponent, createStory } from "../../../helpers/wrapper.js";
import React from "react";

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
} from "./global-footer.templates.js";
import { initFooterGA as initFunc } from "./global-footer";
export default {
  title: "Organisms/Global Footer/Examples",
  argTypes: {},
  parameters: {
    footer: {
      disable: true
    },
    initFunc: {
      disable: false,
      code: initFunc
    }
  },
  decorators: []
};

const Template = ({children}) => <div id="html-root">{children}</div>

export const GlobalElementsOnlyExample = Template.bind({});
GlobalElementsOnlyExample.args = {
  children: <GlobalElementsOnly />,
}
export const ZeroColumnsExample = Template.bind({});
ZeroColumnsExample.args = {
  children: <ZeroColumns />,
}
export const OneColumnExample = Template.bind({});
OneColumnExample.args = {
  children: <OneColumn />,
}
export const OneColumnNoLogoOrSocialExample = Template.bind({});
OneColumnNoLogoOrSocialExample.args = {
  children: <OneColumnNoLogoOrSocial />,
}
export const TwoColumnsExample = Template.bind({});
TwoColumnsExample.args = {
  children: <TwoColumns />,
}
export const ThreeColumnsExample = Template.bind({});
ThreeColumnsExample.args = {
  children: <ThreeColumns />,
}
export const FourColumnsExample = Template.bind({});
FourColumnsExample.args = {
  children: <FourColumns />,
}
export const FiveColumnsExample = Template.bind({});
FiveColumnsExample.args = {
  children: <FiveColumns />,
}
export const SixColumnsExample = Template.bind({});
SixColumnsExample.args = {
  children: <SixColumns />,
}
