import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default createComponent("Global Footer", "Organisms", "Examples");

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
GlobalElementsOnlyExample.args =
  ZeroColumnsExample.args =
  OneColumnExample.args =
  OneColumnNoLogoOrSocialExample.args =
  TwoColumnsExample.args =
  ThreeColumnsExample.args =
  FourColumnsExample.args =
  FiveColumnsExample.args =
  SixColumnsExample.args =
    {
      template: 0,
    };
