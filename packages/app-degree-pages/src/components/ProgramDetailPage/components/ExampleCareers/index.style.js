// @ts-check
import styled from "styled-components";

const widthSetUp = `
  min-width: max-content !important;
  max-width: max-content !important;
  width: max-content !important;
`;

const SunIcon = styled.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${widthSetUp}
`;
const LeafIcon = styled.i`
  color: #78be21;
  ${widthSetUp}
`;

export { SunIcon, LeafIcon };
