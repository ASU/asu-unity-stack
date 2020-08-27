import { css } from "emotion";
import * as Tokens from "@asu-design-system/design-tokens/build/es6/tokens";

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

export { hiddenStyle, showReset, mobileBreak, containerSize, srOnly};

export default Tokens;
