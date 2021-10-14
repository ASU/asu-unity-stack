import styled from "styled-components";

const AnchorMenuWrapper = styled.div`
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .mobile-menu-toggler {
    background-color: transparent;
    border: none;
    cursor: default;
    h4 {
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
    margin-right: 0.3rem;
  }
`;

export { AnchorMenuWrapper };