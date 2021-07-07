import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav-list {
    display: flex;
    list-style-type: none;
    padding: 0;
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    flex-direction: column;
    width: 100%;
  }
`;

export { Wrapper };
