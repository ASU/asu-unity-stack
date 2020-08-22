/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import Tokens from "../../theme";
import {
  showReset,
  mobileBreak,
  containerSize,
  srOnly,
} from "../../styles/common";

/** Search */
const searchStyles = css`
  .asu-search-form {
    > form {
      display: flex;
      flex-flow: row wrap;
      align-items: center;

      label {
        position: relative;
        margin-left: -95px;
        font-weight: 400;
        transition: all 0.5s;
        color: #747474;
        display: none;
      }
    }

    > a {
      display: inline-block;
      font-size: 0.75rem;
      color: #484848;
    }

    @media (max-width: ${mobileBreak}) {
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

      > svg {
        display: none;
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

    @media (min-width: ${mobileBreak}) {
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
        background-color: transparent;
      }

      svg {
        margin-left: -32px;
        cursor: pointer;
        z-index: 10;
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

          :valid + svg + label {
            display: none;
          }
        }

        > svg {
          order: -1;
          margin-right: -24px;
        }

        label {
          display: block;

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
