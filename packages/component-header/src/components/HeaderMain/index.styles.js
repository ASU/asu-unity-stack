import styled from "styled-components";

const breakpoint = "1260px";

const Wrapper = styled.div`
  background-color: #ffffff;
  .navbar {
    padding: 0;
    align-items: flex-start;
  }

  .navbar-brand {
    .vert {
      display: block;
      height: 72px;
      width: auto;
      margin: 20px 1rem 20px 0; // Magic numbers for vertical centering.
    }

    .horiz {
      display: none;
    }
  }

  .partner {
    margin: 0;
  }

  .partners-logos {
    margin: 0.5rem 0;
    a {
      &:not(:last-child) {
        margin-right: 1.5rem;
        padding-right: 1.5rem;
      }
      img {
        height: 52px;
        width: auto;
        &.vert {
          display: initial;
        }
        &.horiz {
          display: none;
        }
      }
    }
  }

  .navbar-container.partner &.no-links {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;

    .title {
      width: 100%;
      margin: 0;
    }

    .navbar-collapse {
      justify-content: flex-end !important;
    }
  }

  .title {
    line-height: 1;
    margin: 1rem 0 0.5rem 0;
    font-weight: 700;
    padding: 0;

    .unit-name {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      display: block;
    }

    .subdomain-name {
      font-size: 1.5rem;
      margin-bottom: 0;

      a {
        color: #191919;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    }

    &.subdomain-name {
      font-size: 2rem;
      margin: 1.5rem 0 1rem 0;
      font-weight: 700;

      a {
        color: #191919;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }

  .navbar-site-buttons {
    padding: 0;
    border: 0;

    .btn {
      margin-bottom: 0;
    }

    .btn + .btn {
      margin-left: 1rem;
    }
  }

  #menubar {
    overflow: initial;
  }

  .navbar-nav {
    line-height: 1.5rem;

    > .nav-link {
      border: 0;
      font-size: 1rem;
      color: #191919;
      padding: 0.5rem 0.75rem;
      /* Magic number */
      margin-right: 0.5rem;
      white-space: nowrap;

      &:after {
        @include gold-underline-desktop;
        bottom: -8px;
        left: -8px;
      }

      &.nav-link-home:after {
        bottom: -7px;
        /* Home needs to be tweaked to not overlap border */
      }

      &:hover:after {
        @include gold-underline-expand-desktop;
        width: calc(100% + 16px);
      }

      &.active:after {
        @include gold-underline-expand-desktop;
        width: calc(100% + 16px);
      }
    }

    > .nav-link-home {
      padding-bottom: 7px;
      /* Magic number */

      svg.fa-home {
        display: inline-block;
        font-size: 16px;
      }
    }

    .nav-item .nav-link {
      padding: 0.5rem 0.75rem 0 0.75rem;
      /* Magic number */
    }
  }

  .dropdown {
    position: relative;
    padding: 0;
    border: 0;
    margin-right: 0.5rem;

    &:after {
      @include gold-underline-desktop;
    }

    &:hover:after {
      @include gold-underline-expand-desktop;
    }

    &.active:after {
      @include gold-underline-expand-desktop;
    }

    &.dropdown.show:after {
      @include gold-underline-expand-desktop;
    }

    &.dropdown.megamenu.show:after {
      @include gold-underline-expand-desktop;
    }

    svg.fa-chevron-down {
      float: none;
      display: inline-block;
      font-size: 0.75rem;
      margin-left: 0.5rem;
    }
  }

  .dropdown-menu {
    margin: -1px 0 0 0;
    border: 1px solid #d0d0d0;
    border-top: 1px solid #ffffff;
    padding: 2rem;

    div[class^="col-"] {
      margin-bottom: 0;
    }

    &.dropdown-columns.show {
      display: flex;
    }
  }

  .dropdown-col {
    width: 16rem;
    padding: 0 1.5rem 0 0;
    border-right: 1px solid #bfbfbf;
    margin-right: 1.5rem;

    &:last-of-type {
      margin-right: 0;
      padding-right: 0;
      border-right: 0;
    }

    h3 {
      margin-top: 40px;
    }
  }

  .dropdown-item {
    padding: 0.5rem 0;
    white-space: normal;

    &:visited {
      color: #191919;
    }

    &:hover {
      color: #8c1d40;
      text-decoration: underline;
    }

    & + .dropdown-item {
      border-top: 0;
    }
  }

  .megamenu {
    position: static;

    .dropdown-menu {
      background-color: #ffffff;
      border-bottom: 1px solid #bfbfbf;
      width: 100vw;
      margin-left: calc(-50vw + 50%);
      margin-top: 0;
      padding: 0;
    }

    .row {
      width: 100%;
      padding: 2rem 0;
    }

    .row.with-buttons {
      padding: 1rem 0;

      &:before {
        content: "";
        height: 1px;
        width: 100vw;
        margin-left: calc(-50vw + 50%);
        margin-right: calc(-50vw + 50%);
        background-color: #bfbfbf;
        position: relative;
        top: -1rem;
      }

      div[class^="col-"] {
        padding-bottom: 0;
      }
    }

    div[class^="col-"] {
      border-right: 1px solid #bfbfbf;
      padding: 0 1.5rem 2.5rem 1.5rem;
      position: relative;

      &:last-of-type {
        border-right: 0;
      }

      h3 {
        margin-top: 0;
      }

      .dropdown-item {
        white-space: normal;

        & + .dropdown-item {
          border-top: 0;
        }
      }

      .dropdown-item + .btn {
        position: absolute;
        bottom: 0;
        margin: 0;
      }

      .btn + .btn {
        margin-left: 1.5rem;
      }
    }
  }

  .navbar-mobile-footer {
    display: none;
  }

  @media (max-width: ${breakpoint}) {
    padding: 0;

    .navbar {
      padding: 1.5rem 0 0 0;
      align-items: flex-start;
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

    .partner {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
    }

    .partners-logos {
      margin: 0.5rem 0 0.5rem 1rem;
      a {
        display: inline-block;
        &:not(:last-child) {
          border-right: 1px solid #d0d0d0;
          margin-right: 1rem;
          padding-right: 1rem;
        }
        img {
          height: 32px;
          width: auto;
          &.vert {
            display: none;
          }
          &.horiz {
            height: 24px;
            width: auto;
            display: initial;
          }
        }
      }
    }

    .navbar-toggler {
      color: #191919;
      border: 0;
      margin-right: 0.5rem;
      min-height: 48px;
      min-width: 74px;

      &:focus {
        outline: 0;
      }

      .fa-circle.fa-stack-2x {
        color: #e8e8e8;
        height: 2rem;
        width: 2rem;
      }

      &.collapsed {
        .fa-stack {
          display: none;
        }

        .fa-bars {
          display: inline-block;
        }
      }

      &:not(.collapsed) {
        .fa-stack {
          display: inline-block;
        }

        .fa-bars {
          display: none;
        }
      }
    }

    .navbar-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }

    .title {
      line-height: 1;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: -0.035em;
      padding: 0 2rem 1.5rem 2rem;

      > a {
        color: #191919;
        text-decoration: none;
      }

      > a:visited {
        color: #191919;
      }

      > a:hover {
        text-decoration: underline;
      }

      .unit-name {
        display: none;
      }
    }

    .navbar-nav {
      .nav-link {
        padding: 1rem 2rem 0.5rem 2rem;
        border-top: 1px solid #d0d0d0;
        color: #191919;
        white-space: nowrap;

        svg.fa-home {
          display: none;
        }

        &:visited {
          color: #191919;
        }

        &:after {
          @include gold-underline-mobile;
          position: relative;
          top: 0.5rem;
        }

        &.active:after {
          width: 100%; // Magic number.
          margin-left: 0;
        }
      }
    }

    .navbar-site-buttons {
      padding: 1rem 2rem;
      border-top: 1px solid #d0d0d0;
      flex-flow: initial;

      .btn {
        margin-bottom: 0.5rem;
      }

      .btn:last-of-type {
        margin-left: 0.5rem;
      }
    }

    #menubar {
      overflow-y: scroll;
      overflow-x: hidden;

      &.collapsing {
        height: unset !important;
      }

      &.collapsing .navbar-mobile-footer.pinned,
      &.show .navbar-mobile-footer.pinned {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;
      }
    }

    .navbar-mobile-footer {
      background-color: #e8e8e8;

      .navbar-mobile-search {
        padding: 1rem 2rem;
        width: 100%;
        border-top: 1px solid #d0d0d0;

        input {
          width: 100%;
          background: url($image-assets-path + "/font-awesome-svg/search-gray-6.svg")
            no-repeat 10px 50%;
          background-size: 16px;
          background-color: #ffffff;
          border: 0;
          border-radius: 0;
          padding-left: 32px;
        }
      }

      .nav-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: row;
        justify-items: start;
        width: 100%;

        .nav-link {
          color: #191919;
          margin-right: 0;
          text-align: center;
          width: 100%;
          font-size: 0.875rem;
          padding: 1rem 1.5rem;
          border-top: 1px solid #d0d0d0;
          white-space: nowrap;

          &:nth-child(even) {
            border-left: 1px solid #d0d0d0;
          }
        }

        .login-status {
          display: block;
          width: 100%;

          > a {
            border: 0;
            padding: 0;
            margin: 0;
            color: #191919;
            text-decoration: none;
          }

          > a.name {
            font-weight: 700;
          }

          > a.signout:before {
            content: "(";
            margin-left: 4px;
          }

          > a.signout:after {
            content: ") ";
          }
        }
      }

      &.shadow:before {
        @include transition;
        content: "";
        height: 3.5rem;
        width: 100%;
        background: transparent
          linear-gradient(0deg, #19191914 0%, #19191900 100%) 0% 0% no-repeat
          padding-box;
        position: absolute;
        top: -3.5rem;
      }
    }

    .dropdown {
      border-top: 1px solid #d0d0d0;

      &:not(:last-child) {
        border-bottom: 0;
      }

      .nav-link {
        border-top: 0;
      }

      svg.fa-chevron-down {
        float: right;
        font-size: 1.25rem;
        @include transition;
      }

      &.show svg.fa-chevron-down {
        transform: rotate(180deg);
      }

      &:after {
        @include gold-underline-mobile;
      }

      &.active:after {
        @include gold-underline-expand-mobile;
      }

      &.show:after {
        @include gold-underline-expand-mobile;
      }

      &.megamenu.show:after {
        @include gold-underline-expand-mobile;
      }
    }

    .dropdown-menu {
      margin: 0;
      padding: 1rem;
      border: 0; // Overrides BS Option;
      border-top: 1px solid #d0d0d0;

      .btn {
        margin: 0.5rem 0;
      }

      div[class^="col-"] {
        margin-bottom: 3rem;
        padding: 0 2rem;
      }

      div[class^="col-"]:last-child {
        margin-bottom: 0;
      }
    }

    .dropdown-col {
      padding: 0 2rem;
      margin-bottom: 3rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .dropdown-item {
      padding: 1rem 0.5rem;
      white-space: normal;

      &:visited {
        color: #191919;
      }

      & + .dropdown-item {
        border-top: 1px solid #bfbfbf;
      }
    }
  }
`;

export { Wrapper };
