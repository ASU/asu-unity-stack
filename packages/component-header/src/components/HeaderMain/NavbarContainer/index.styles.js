import styled from "styled-components";

const Wrapper = styled.nav`
  white-space: nowrap;
  > .content-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-list {
    display: flex;
    margin: 0;
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    width: 100%;
    > .content-container {
      flex-direction: column;
      justify-content: flex-start;
      overflow-y: auto;
      min-height: calc(100vh - 270px);
      max-height: calc(100vh - 270px);
      > *:last-child {
        margin-bottom: 40px;
      }
    }
    .nav-list {
      flex-direction: column;
      width: 100%;
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
