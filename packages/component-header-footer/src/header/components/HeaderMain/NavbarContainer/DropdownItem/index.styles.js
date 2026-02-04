import styled from "styled-components";

const DropdownWrapper = styled.div`
  --gap: 2rem;
  position: fixed;
  background-color: #ffffff;
  border: 1px solid #d0d0d0;
  margin: 0;
  z-index: 1031;
  visibility: hidden;
  white-space: normal;
  &.opened {
    visibility: visible;
  }
  &.mega {
    width: 1200px;
    left: calc((100% - 1200px) / 2);
  }
  &.aligned-right:not(.mega) {
    position: absolute;
    right: 0;
  }
  > .dropdown-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: stretch;

    .dropdown-container-column {
      width: calc(1200px / var(--cols, 1) * var(--span, 1));
      padding: var(--gap);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      row-gap: var(--gap);

      &:not(:last-child) {
        // box-shadow: -1px 0px 0px 0px #d0d0d0 inset;
        border-right: 1px solid #d0d0d0;
      }
    }

    .ul-heading {
      font-size: 1.5rem;
      letter-spacing: -0.035em;
      font-weight: 700;
      text-align: left;
      opacity: 1;
      margin: 0;
      margin-bottom: -1.5rem;
      line-height: calc(100% + 0.12em);
    }
    ul {
      --ul-gap: 1rem;
      &:is(:last-child) {
        flex-grow: 0;
      }
      margin: 0;
      width: calc(1200px / var(--cols, 1) * var(--span, 1) - var(--gap) * 2);
      // max-width: 282px;
      display: flex;
      flex-direction: row;
      column-gap: var(--ul-gap);
      flex-wrap: wrap;
      .nav-link {
        padding: 0;

        flex-basis: calc(
          (100% / var(--span, 1)) - var(--ul-gap) * (var(--span, 1) - 1) /
            var(--span, 1)
        );
        a {
          width: 100%;
          display: inline-block;
          margin: 0.75rem 0;
          position: relative;
          line-height: 1rem;
          color: #191919;
          &:hover {
            color: #8c1d40;
            text-decoration: underline;
          }
        }
        & + .nav-button {
          width: 100%;
          margin-top: auto;
          padding-top: var(--gap);
          & + .nav-button {
            margin-top: 1rem;
          }
        }
      }
    }
  }

  .nav-button {
    flex: 1 1;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-wrap: nowrap;
    width: fit-content;
  }
  .dropdown-button-container {
    border-top: 1px solid #d0d0d0;
    border-bottom: 1px solid #d0d0d0;
    > div {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      padding: 1rem 2rem;
    }
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    position: initial;
    border: none;
    max-height: unset;
    visibility: visible;
    display: none;
    &.opened {
      display: block;
    }
    > .dropdown-container {
      max-width: 100%;
      padding: 1rem 2rem;
      flex-direction: column;
      ul {
        width: 100%;
        max-width: 100%;
        padding: 0 1rem;
        margin-bottom: 1rem;
        &:not(:last-child) {
          padding-right: 1rem;
          margin: 0 0 1rem 0;
          border: none;
        }
        .ul-heading {
          font-size: 1.25rem;
        }
        .nav-button {
          padding-top: 1.5rem;
        }
        .nav-link {
          padding: 0 1rem;
          &:not(:last-child) {
            border-bottom: 1px solid #d0d0d0;
          }
          a {
            padding: 1rem 0;
            margin: 0;
          }
        }
      }
    }
    .dropdown-button-container {
      margin-top: 0;
      > div {
        max-width: 100%;
        padding: 1rem 3rem;
      }
    }
  }
`;

export { DropdownWrapper };
