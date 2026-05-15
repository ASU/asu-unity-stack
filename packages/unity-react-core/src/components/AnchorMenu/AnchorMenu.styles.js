import styled from "styled-components";

const AnchorMenuWrapper = styled.div`
  &.sticky {
    position: fixed;
    top: var(--uds-anchor-menu-top, 0px);
    left: 0;
    width: 100%;

    @media (max-width: 991.98px) {
      max-height: 100vh;
      max-height: calc(100dvh - var(--uds-anchor-menu-top, 0px));
      overflow-y: auto;
    }
  }
  .mobile-menu-toggler {
    background-color: transparent;
    border: none;
    cursor: default;
    h4, h2 {
      align-items: center;
    }
    i {
      transition: all 0.3s;
    }
  }
  .show-menu i {
    transform: rotate(-180deg);
  }
  .nav-link {
    border: none;
    background-color: #ffffff;
    i {
      width: 2rem !important;
      text-align: center !important;
    }
  }
`;

export { AnchorMenuWrapper };
