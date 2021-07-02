import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  &.navbar-container-mobile {
    display: none;
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
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
