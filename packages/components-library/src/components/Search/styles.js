/* eslint-disable react/prop-types */

import { cx, css } from "@emotion/css";

import { focusStyle, breakpointForMin } from "../../theme";

/** Search */
const searchStyles = breakpoint => css`
  .asu-search-form {
    a,
    button,
    input {
      ${focusStyle}
    }

    > form {
      display: flex;
      flex-flow: row wrap;
      align-items: center;

      label {
        position: relative;
        right: 55px;
        margin-left: -112px;
        font-weight: 400;
        transition: all 0.5s;
        color: #747474;
        display: none;
      }

      > button {
        background: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>')
          no-repeat 5px 50%;
        background-size: 12px;
      }
    }

    > a {
      display: inline-block;
      font-size: 0.75rem;
      color: #484848;
    }

    @media (max-width: ${breakpoint}) {
      width: 100%;
      display: flex;
      order: -1;

      > form {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 1rem 2rem;

        > input {
          padding: 0.5rem 2rem;
          display: flex;
          width: 100%;
          border: 0;
          background-color: #ffffff;
        }

        > button {
          font-size: 1rem;
          opacity: 0.75;
        }
      }

      > a {
        display: none;
      }

      button {
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    button {
      font-size: 0.75rem;
      border: none;
      background: transparent;
      cursor: pointer;
      margin-right: -30px;
      z-index: 20;
      width: 1.5rem;
      height: 1.5rem;
      padding: 0;
    }

    @media (min-width: ${breakpointForMin(breakpoint)}) {
      > form {
        justify-content: flex-end;
      }

      input {
        background-size: 16px;
        width: 32px;
        cursor: pointer;
        font-size: 0.75rem;
        line-height: 0.75rem;
        border: 0;
        border-radius: 0;
        padding: 0.25rem;
        transition: all 0.5s;
        background: transparent;
      }

      .show-search-input {
        > input {
          display: inline-flex;
          width: 200px;
          color: #747474;
          background-color: #fff;
          cursor: auto;
          margin: 0.5rem 0;
          padding-left: 32px;
          visibility: visible;
          height: calc(1.5em + 0.75rem + 2px);

          :valid + label {
            display: none;
          }
        }

        label {
          display: block;
          margin-bottom: 0;
          font-size: inherit;
        }
      }
    }
  }
`;

const UniversalSearch = props => {
  // TODO: handle custom search
  return (
    <div class={cx("asu-search-form", props.class)} {...props}>
      {props.children}
    </div>
  );
};

export { UniversalSearch, searchStyles };
