// @ts-check

import styled, { createGlobalStyle } from "styled-components";

const ThemeStyle = createGlobalStyle`
  :root {
    --uds-dp-section-margin: 96px;
  }

  @media (max-width: 768px) {
    :root {
      --uds-dp-section-margin: 48px;
    }
  }

  .element-focus:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #191919 !important;
  }

  div[class^=uds-hero] h1 {
    margin-left: 0.15em;

    span {
      margin-left: 0;
    }
  }

  h1 span.highlight-gold,
  h2 span.highlight-gold{
    margin-left: 0.15em;
  }

`;

const Main = styled.main`
  &.dg-margin-top {
    margin-top: var(--uds-dp-section-margin);
  }

  &.main-section > section:not(.no-space),
  & > section section:not(.no-space) {
    margin-bottom: var(--uds-dp-section-margin);

    & > * {
      margin-top: 0;
      padding-top: 0;
    }

    & h2 {
      line-height: 1;
    }
  }
`;

export { Main, ThemeStyle };
