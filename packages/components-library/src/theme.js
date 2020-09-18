import { css } from "emotion";
import {
  BreakpointLg,
  BreakpointXl,
  ComponentButtonHoverStateTransform,
  ComponentButtonActiveStateTransform,
  ComponentButtonDisabledOpacity,
  ComponentButtonSmallFontSize,
  ComponentButtonSmallHeight,
  ComponentButtonSmallMinWidth,
  ComponentButtonPaddingYSmall,
  ComponentButtonPaddingXSmall,
  ComponentButtonLargeFontSize,
  ComponentButtonLargeHeight,
  ComponentButtonLargeMinWidth,
  ComponentButtonGoldColor,
  ComponentButtonGoldBackgroundColor,
  ComponentButtonDarkColor,
  ComponentButtonDarkBackgroundColor,
  ComponentButtonLightColor,
  ComponentButtonLightBackgroundColor,
  ComponentButtonMediumFontSize,
  ComponentButtonMediumHeight,
  ComponentButtonMediumMinWidth,
  ComponentButtonPaddingYMedium,
  ComponentButtonPaddingXMedium,
  ComponentButtonMaroonColor,
  ComponentButtonMaroonBackgroundColor
} from "@asu-design-system/design-tokens/build/es6/tokens";

const hiddenStyle = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const showReset = position => {
  const pos = position || "relative";

  return css`
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    border: none;
    clip: auto;
    position: ${pos};
  `;
};

const srOnly = css`
  :not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

const mobileBreak = "1260px";

const containerSize = "1224px";

// in px for consistent measurment for mobile nav
const primaryNavTopPadding = "24px";

export {
  hiddenStyle,
  showReset,
  mobileBreak,
  containerSize,
  srOnly,
  primaryNavTopPadding,
  BreakpointLg,
  BreakpointXl,
  ComponentButtonHoverStateTransform,
  ComponentButtonActiveStateTransform,
  ComponentButtonDisabledOpacity,
  ComponentButtonSmallFontSize,
  ComponentButtonSmallHeight,
  ComponentButtonSmallMinWidth,
  ComponentButtonPaddingYSmall,
  ComponentButtonPaddingXSmall,
  ComponentButtonLargeFontSize,
  ComponentButtonLargeHeight,
  ComponentButtonLargeMinWidth,
  ComponentButtonGoldColor,
  ComponentButtonGoldBackgroundColor,
  ComponentButtonDarkColor,
  ComponentButtonDarkBackgroundColor,
  ComponentButtonLightColor,
  ComponentButtonLightBackgroundColor,
  ComponentButtonMediumFontSize,
  ComponentButtonMediumHeight,
  ComponentButtonMediumMinWidth,
  ComponentButtonPaddingYMedium,
  ComponentButtonPaddingXMedium,
  ComponentButtonMaroonColor,
  ComponentButtonMaroonBackgroundColor
};
