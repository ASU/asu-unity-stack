// @ts-check
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding-top: 96px !important;
  padding-bottom: 96px !important;
`;

const Background = styled.div`
  background-image: url("https://unity.web.asu.edu/@asu-design-system/bootstrap4-theme/static/media/TopoPatternWhite.529b0b3d.png");
  background-position: center;
  background-size: contain;
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  z-index: -1;
`;

export { Section, Background };
