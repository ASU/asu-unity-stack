import { css } from "@emotion/css";
import {
  BreakpointSm,
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

/* When using max-width and min-width in media queries use <= and >= logic
 * and that means when they are both used in media queries with the same
 * breakpoint, there's a deadspace. For min-width we provide this function to
 * bump the value by +1. We are working with a string, so it's regex time.
 */
const breakpointForMin = breakpoint => {
  var breakpointMatch = breakpoint.match(/[a-z]+|[^a-z]+/gi);
  // Add 1 and string it back together.
  return (parseInt(breakpointMatch[0]) + 1).toString() + breakpointMatch[1];
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
  breakpointForMin,
  mobileBreak,
  containerSize,
  srOnly,
  primaryNavTopPadding,
  BreakpointSm,
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
