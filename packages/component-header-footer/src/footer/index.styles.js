import styled, { css } from "styled-components";

// Convert mixins to styled-components helper functions
const resetList = css`
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

const flexCenter = css`
  display: flex;
  align-items: center;
`;

const StyledFooter = styled.footer`
  // Variables
  --color-divider-darker: #1e1e1e;
  --color-base-white: #ffffff;
  --color-base-grey-2: #e8e8e8;
  --color-base-gold: #ffc627;
  --color-divider-lighter: #393939;
  --color-base-grey-7: #191919;
  --color-base-grey-4: #bfbfbf;

  // Base Styles
  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
      sans-serif;
    line-height: 1.5rem;

    a:focus, button:focus {
      outline: none;
      box-shadow: 0 0 0 2px var(--color-base-white), 0 0 0 4px var(--color-base-grey-7) !important;
    }
  }

  .btn,
  a[class^="button-"] {
    text-decoration: none !important;
    padding: 1rem 2rem;
    white-space: nowrap;
    line-height: 1rem;
    width: max-content !important;
    font-size: 1rem;
    display: inline-block;
    &:active {
      transform: scale(0.95);
    }
  }

  h5,
  .h5 {
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: -0.015rem;
    margin: 1rem 0;
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    ${resetList}
  }

  // Footer Sections
  #wrapper-endorsed-footer,
  #wrapper-footer-columns {
    background: var(--color-divider-darker);

    h5,
    .h5 {
      color: var(--color-base-white);
      font-weight: 700;
    }
  }

  #wrapper-endorsed-footer {
    a {
      color: var(--color-base-grey-2);
    }

    & + #wrapper-footer-columns {
      border-top: 2px solid var(--color-divider-lighter);
    }
  }

  #wrapper-footer-innovation {
    background-color: var(--color-base-gold);
  }

  #wrapper-footer-colophon {
    background-color: var(--color-base-grey-2);
  }

  #wrapper-footer-innovation,
  #wrapper-footer-colophon {
    a {
      margin-right: 1.5rem;
      text-decoration: none;
      color: var(--color-base-grey-7);
    }
  }

  // Endorsed Footer
  #endorsed-logo {
    --endorsed-logo-display: block;
    --endorsed-logo-padding-top: 12px;
    --endorsed-logo-padding-bottom: 12px;
    --endorsed-logo-img-max-height: 100%;
    --endorsed-logo-img-width: 100%;
    padding-top: var(--endorsed-logo-padding-top);
    padding-bottom: var(--endorsed-logo-padding-bottom);
    display: var(--endorsed-logo-display);
    align-items: center;

    img {
      width: var(--endorsed-logo-img-width);
      height: auto;
      max-height: var(--endorsed-logo-img-max-height);
      transform: scale(1.13);
      padding: 0;
      margin: 0;
    }

    @media (min-width: 768px) {
      --endorsed-logo-display: flex;
      --endorsed-logo-padding-top: 20px;
      --endorsed-logo-padding-bottom: 20px;
      --endorsed-logo-img-max-height: 6rem;
      --endorsed-logo-img-width: auto;
    }
  }

  #endorsed-footer {
    #social-media {
      .nav {
        padding-bottom: 1.5rem;

        .nav-link .social-icon {
          &:hover {
            color: var(--color-base-white);
          }
        }

        @media (min-width: 768px) {
          padding: 2.5rem 0;
          justify-content: flex-end;
        }
      }

      .nav-link {
        padding: 0.75rem 1rem 0.5rem 1rem;
        font-size: 2rem;
        color: var(--color-base-grey-4);
        line-height: 1;
        padding-top: 7px;

        &:first-child {
          @media (max-width: 575.98px) {
            padding-left: 0;
          }
        }

        &:last-child {
          @media (min-width: 768px) {
            padding-right: 0;
          }
        }
      }
    }
  }

  // Footer Columns
  #footer-columns {
    #info-column {
      .contact-link {
        margin-bottom: 1.5rem;

        a {
          color: var(--color-base-grey-2);
          line-height: 1.5rem;
          text-decoration: underline;

          &:hover {
            color: var(--color-base-gold);
          }
        }
      }

      .contribute-button {
        margin-bottom: 1.5rem;
      }
    }

    .flex-footer {
      .accordion-item,
      .accordion-header,
      .accordion-body {
        background: var(--color-divider-darker);
        color: var(--color-base-white);
        border: 0;
      }

      .accordion-header {
        border-top: 1px solid var(--color-divider-lighter);
        padding-left: 0;

        h5,
        .h5 {
          margin: 0;
          a,
          .accordion-button {
            ${flexCenter}
            justify-content: space-between;
          }
        }

        a,
        .accordion-button {
          color: var(--color-base-grey-2);
          padding: 1.5rem 0;
          text-decoration: none;
          background: none;
          border: none;
          font: inherit;
          color: inherit;
          cursor: pointer;
          text-align: inherit;
          width: 100%;

          &:hover {
            background: var(--color-divider-darker);
          }

          svg,
          fa-chevron-up {
            margin-left: 1rem;
            transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
            margin-left: 0.5rem;
            font-size: 1rem;

            &.open {
              transform: rotate(180deg);
            }
          }
        }

        @media (min-width: 1260px) {
          border-top: 0;
          padding: 0;
          a,
          .accordion-button {
            padding: 0;
            cursor: default;
          }

          span {
            display: none;
          }
        }
      }

      .accordion-body {
        display: none;
        overflow: hidden;
        padding: 0 0 0 1.5rem;

        &.collapsing {
          display: block;
          max-height: 0px;
        }
        &.show {
          display: block;
          max-height: 1000px;
        }

        .nav-link {
          color: var(--color-base-grey-2);
          padding: 0 0 1rem;
          line-height: 1.5rem;
          text-decoration: none;
          display: block;

          &:hover {
            color: var(--color-base-gold);
            text-decoration: underline;
          }
        }

        @media (min-width: 1260px) {
          padding: 0;
          display: block;
          min-height: fit-content;
          overflow: visible;
        }
      }
    }

    @media (min-width: 1260px) {
      padding-bottom: 3rem;
      padding-top: 3rem;
      h5,
      .h5 {
        margin: 0 0 1.5rem 0;
      }
      .accordion-header:has(.h5, h5) {
        h5,
        .h5 {
          margin: 0 0 1.5rem 0;
        }
      }
    }
  }

  // Footer Innovation
  #footer-innovation {
    .footer-innovation-links {
      justify-content: space-between;
      align-items: center;
      font-weight: 700;

      .img-link {
        order: 2;
        margin-right: 0;
        transform: translate(1.5rem, 0);
        padding-top: 24px;
        padding-bottom: 24px;

        img {
          height: auto;
          width: auto;
          max-width: 320px;
        }
      }

      .nav-link {
        padding: 0;
      }

      @media (max-width: 991.98px) {
        flex-direction: column;
        padding: 0.5rem 0;

        .img-link {
          margin-right: 0;
          transform: none;

          img {
            width: 100%;
            height: auto;
            order: -1;
          }
        }

        .nav {
          display: grid;
          grid-template-rows: 1fr 1fr 1fr;
          grid-auto-flow: column;
          justify-items: start;
          width: 100%;

          .nav-link {
            margin-right: 0;
            padding: 0.5rem 0;

            &:nth-child(n + 4) {
              justify-self: end;
            }
          }
        }
      }
      @media (min-width: 991.98px) {
        .img-link {
          padding-right: 16px;
        }
      }
    }
  }

  // Footer Colophon
  #wrapper-footer-colophon {
    .colophon {
      margin: 1rem 0;
    }

    .nav-link {
      padding: 0;
    }

    @media (max-width: 767.98px) {
      .nav {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-auto-flow: column;
        justify-items: start;
        width: 100%;

        .nav-link {
          margin-right: 0;
          padding: 0.5rem 0;

          &:nth-child(n + 4) {
            justify-self: end;
          }
        }
      }
    }
  }

  // Bootstrap Default Stylings
  .row {
    --bs-gutter-x: 24px;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));

    > * {
      flex-shrink: 0;
      width: 100%;
      max-width: 100%;
      padding-right: calc(var(--bs-gutter-x) * 0.5);
      padding-left: calc(var(--bs-gutter-x) * 0.5);
      margin-top: var(--bs-gutter-y);
    }
  }

  .col {
    flex: 1 0 0%;
  }

  .d-flex {
    display: flex;
  }

  .container {
    --bs-gutter-x: 24px;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 767.98px) {
    .container,
    .container-fluid,
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 768px;
    }
    .col-md {
      flex: 1 0 0%;
    }
  }

  @media (min-width: 992px) {
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 992px;
    }
  }

  @media (min-width: 1260px) {
    .col-xl-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-xl {
      flex: 1 0 0%;
    }
    .accordion-item {
      svg,
      .fa-chevron-up {
        display: none;
      }
    }
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 1224px;
    }
  }
`;

export { StyledFooter };
