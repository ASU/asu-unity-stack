import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  .nav-list {
    display: flex;
    margin: 0;
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    flex-direction: column;
    width: 100%;
    .nav-list {
      flex-direction: column;
      width: 100%;
      overflow-y: auto;
      max-height: calc(100vh - 270px);
    }
    .buttons-container {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      width: 100%;
    }
  }
`;

export { Wrapper };
