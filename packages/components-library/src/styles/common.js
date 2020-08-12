import { css, cx } from "emotion";
import Tokens from "../theme";

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

const mobileBreak = "1260px";

const containerSize = "1224px";

export { hiddenStyle, showReset, mobileBreak, containerSize };
