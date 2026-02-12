import styled from "styled-components";
import { ASU_WHITE, ASU_GRAY5, ASU_GRAY1, ASU_GRAY4 } from "../../colors";

const HeaderMainWrapper = styled.div`
  background-color: ${ASU_WHITE};
  border-bottom: 1px solid ${ASU_GRAY5};
  padding: 0 12px;
  .navbar {
    padding: 0;
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
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
  .expand-title {
    width: 100%;
  }
  @media (min-width: ${({ breakpoint }) => breakpoint}) {
    .no-navigation {
      margin-top: 16px;
      display: flex;
      align-items: center;
      .title {
        width: 100%;
      }
    }
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    padding: 0;
    .navbar {
      padding: 1.5rem 0 0 0;
      flex-wrap: wrap;
      justify-content: space-between;
      &.partner {
        flex-direction: row-reverse;
        flex-wrap: nowrap;
      }
    }
    .partner .content-container {
      min-height: calc(100vh - 240px);
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
      color: ${ASU_GRAY1};
      border: 0;
      border-radius: 0;
      font-size: 1.25rem;
      margin-right: 2rem;
      cursor: pointer;
      min-width: 44px;
      min-height: 44px;

      .menu-search-icon {
        display: none;
      }

      &.collapsed {
        .menu-search-icon {
          width: 24px;
          height: auto;
          display: unset;
        }
        .menu-close-icon {
          display: none;
        }
      }
      .no-navigation + nav .buttons-container {
        border-top: 1px solid ${ASU_GRAY4};
      }
    }
  }
`;

export { HeaderMainWrapper };
