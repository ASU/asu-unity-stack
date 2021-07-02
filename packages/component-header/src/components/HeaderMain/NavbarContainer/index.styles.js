import styled from "styled-components";

const breakpoint = "1260px";

const Wrapper = styled.div`
  &.navbar-container-mobile {
    display: none;
  }
  @media (max-width: ${breakpoint}) {
    flex-direction: column;
    width: 100%;
    &.navbar-container-desktop {
      display: none;
    }
    &.navbar-container-mobile {
      display: flex;
    }
  } ;
`;

export { Wrapper };
