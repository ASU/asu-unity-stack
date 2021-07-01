import styled from "styled-components";

const breakpointXl = "1260px";

const Header = styled.header`
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  .container-xl {
    height: 100%;
    max-width: 1224px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
  @media (max-width: ${breakpointXl}) {
    .container-xl {
      max-width: 100%;
    }
  }
`;

export { Header };
