import { htmlRootDecorator } from "../../../../../shared/components/Layout.js";
import { initFooterGA as initFunc } from "./global-footer";
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
    },
    controls: { disable: true }
  },
  decorators: [htmlRootDecorator]
};
export const GlobalElementsOnlyExample = GlobalElementsOnly.bind({});
export const ZeroColumnsExample = ZeroColumns.bind({});
export const OneColumnExample = OneColumn.bind({});
export const OneColumnNoLogoOrSocialExample = OneColumnNoLogoOrSocial.bind({});
export const TwoColumnsExample = TwoColumns.bind({});
export const ThreeColumnsExample = ThreeColumns.bind({});
export const FourColumnsExample = FourColumns.bind({});
export const FiveColumnsExample = FiveColumns.bind({});
export const SixColumnsExample = SixColumns.bind({});
