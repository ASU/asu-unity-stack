import styled from "styled-components";
import { ASU_WHITE, ASU_GRAY5, ASU_GRAY1, ASU_GRAY4 } from "../../colors";
import { CLASS_NAMES } from "../../core/constants/classNames";

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
  .navbar.${CLASS_NAMES.MOBILE_MENU_OPEN} {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "logo . toggler"
      "title title title"
      "search search search"
      "nav nav nav";

    height: calc(100dvh - ${({ headerTop }) => headerTop}px);
    overflow: hidden;
    .navbar-brand {
      grid-area: logo;
      grid-column: 1;
      grid-row: 1;
    }
    .navbar-toggler {
      grid-area: toggler;
      grid-column: 3;
      grid-row: 1;
    }
    .${CLASS_NAMES.EXPAND_TITLE} {
      grid-area: title;
    }
    & > * {
      grid-column: 1 / -1;
    }
    & > form {
      grid-area: search;
    }
    & > nav {
      grid-area: nav;
      display: grid;
      grid-template-rows: 1fr auto;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
  .navbar-brand {
    .${CLASS_NAMES.LOGO_VERT} {
      display: block;
      height: 72px;
      width: auto;
      margin: 20px 1rem 20px 0;
    }
    .${CLASS_NAMES.LOGO_HORIZ} {
      display: none;
    }
  }
  .navbar-toggler {
    display: none;
  }
  .${CLASS_NAMES.EXPAND_TITLE} {
    width: 100%;
  }
  @media (min-width: ${({ breakpoint }) => breakpoint}) {
    .${CLASS_NAMES.NO_NAVIGATION} {
      margin-top: 16px;
      display: flex;
      align-items: center;
      .${CLASS_NAMES.TITLE} {
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
      &.${CLASS_NAMES.PARTNER} {
        flex-direction: row-reverse;
      }
    }
    .${CLASS_NAMES.PARTNER} .${CLASS_NAMES.CONTENT_CONTAINER} {
      min-height: calc(100vh - 240px);
    }
    .navbar-brand {
      padding: 0;
      margin: 0;

      .${CLASS_NAMES.LOGO_VERT} {
        display: none;
      }

      .${CLASS_NAMES.LOGO_HORIZ} {
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
      padding: 0.25rem 0.45rem;

      .${CLASS_NAMES.MENU_SEARCH_ICON} {
        display: none;
      }

      &.collapsed {
        .${CLASS_NAMES.MENU_SEARCH_ICON} {
          width: 24px;
          height: auto;
          display: unset;
        }
        .${CLASS_NAMES.MENU_CLOSE_ICON} {
          display: none;
        }
      }
      .${CLASS_NAMES.NO_NAVIGATION} + nav .${CLASS_NAMES.BUTTONS_CONTAINER} {
        border-top: 1px solid ${ASU_GRAY4};
      }
    }
  }
  // alternate layout for mobile landscape orientation move search to top row
  @media screen and (orientation: landscape) and (max-width: ${({
      breakpoint,
    }) => breakpoint}) {
    .navbar.${CLASS_NAMES.MOBILE_MENU_OPEN} {
      grid-template-areas:
        "logo search toggler"
        "title title title"
        "nav nav nav";
    }
  }
`;

export { HeaderMainWrapper };
