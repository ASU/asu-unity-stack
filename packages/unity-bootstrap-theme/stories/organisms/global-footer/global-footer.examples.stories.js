import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default createComponent("Global Footer", "Organisms", "Examples", {footer: null, template: null});

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
} from "./global-footer.templates.stories.js";
import { initFooterGA as initFunc } from "./global-footer";

const options = {
  initFunc,
  omitTemplate: true
}
export const GlobalElementsOnlyExample = createStory(GlobalElementsOnly, options);
export const ZeroColumnsExample = createStory(ZeroColumns, options);
export const OneColumnExample = createStory(OneColumn, options);
export const OneColumnNoLogoOrSocialExample = createStory(OneColumnNoLogoOrSocial, options);
export const TwoColumnsExample = createStory(TwoColumns, options);
export const ThreeColumnsExample = createStory(ThreeColumns, options);
export const FourColumnsExample = createStory(FourColumns, options);
export const FiveColumnsExample = createStory(FiveColumns, options);
export const SixColumnsExample = createStory(SixColumns, options);
