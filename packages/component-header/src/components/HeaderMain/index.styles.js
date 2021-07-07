import styled from "styled-components";

const HeaderMainWrapper = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid #d0d0d0;
  .navbar {
    padding: 0;
    display: flex;
    align-items: flex-start;
  }
  .inner-nav-container {
    width: 100%;
  }
  .navbar-brand {
    .vert {
      display: block;
      height: 72px;
      width: auto;
      margin: 20px 1rem 20px 0;
    }
    .horiz {
      display: none;
    }
  }
  .navbar-toggler {
    display: none;
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    padding: 0;
    .navbar {
      padding: 1.5rem 0 0 0;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      &.partner {
        flex-direction: row-reverse;
      }
    }
    .expand-title {
      width: 100%;
    }
    .navbar-brand {
      padding: 0;
      margin: 0;

      .vert {
        display: none;
      }

      .horiz {
        display: block;
        height: 32px;
        width: auto;
        margin-bottom: 1rem;
        margin-left: 2rem;
      }
    }
    .navbar-toggler {
      display: initial;
      background: transparent;
      color: #191919;
      border: 0;
      border-radius: 50%;
      font-size: 1.25rem;
      margin-right: 2rem;
    }
  }
`;

export { HeaderMainWrapper };
