// @ts-check
import styled from "styled-components";

const Section = styled.section`
  position: relative;
`;

const Background = styled.div`
  background-image: url("https://unity.web.asu.edu/@asu-design-system/bootstrap4-theme/static/media/TopoPatternWhite.529b0b3d.png");
  background-position: center;
  background-size: contain;
  position: absolute;
  top: 0;
  left: -48px;
  width: calc(100% + 72px);
  height: 100%;
  z-index: -1;
`;

export { Section, Background };
