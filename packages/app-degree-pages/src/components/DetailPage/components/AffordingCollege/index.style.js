// @ts-check
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding-top: var(--uds-dp-section-margin);
  padding-bottom: var(--uds-dp-section-margin);
`;

const Background = styled.div`
  background-image: url("https://asu.github.io/asu-unity-stack/@asu/unity-bootstrap-theme/static/media/TopoPatternWhite.529b0b3d.png");
  background-position: center;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 1920px;
  height: 100%;
  z-index: -1;
`;

export { Section, Background };
