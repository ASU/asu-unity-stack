import styled from "styled-components";

const breakpointXl = "1260px";

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  .container-xl {
    max-width: 1224px;
  }
  @media (max-width: ${breakpointXl}) {
    .container-xl {
      max-width: 100%;
      width: 100%;
      margin-right: auto;
      margin-left: auto;
    }
  }
`;

export { Header };
