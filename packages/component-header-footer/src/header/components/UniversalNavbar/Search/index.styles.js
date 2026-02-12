import styled from "styled-components";
import {
  ASU_GRAY1,
  ASU_WHITE,
  BOOTSTRAP_TEXT_MUTED,
  ASU_GRAY5,
  ASU_MAROON,
} from "../../../colors";

const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .search-button {
    transition: cubic-bezier(0.19, 1, 0.19, 1);
    font-size: 0.75rem;
    line-height: 1;
    color: ${ASU_GRAY1};
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    span {
      margin-right: 0.25rem;
    }
  }
  input[name="q"] {
    width: 200px;
    background-color: ${ASU_WHITE};
    border: 0;
    border-radius: 0;
    padding: 0.5rem 0.5rem;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1;
    color: ${BOOTSTRAP_TEXT_MUTED};
    border: 1px solid ${ASU_GRAY5};
    outline: ${ASU_GRAY1};
    margin-left: 1.5rem;
    display: unset;
    vertical-align: middle;

    &::placeholder {
      font-size: 0.75rem;
      line-height: 1;
    }
    &:focus,
    &:focus-visible {
      border: 1px solid ${ASU_GRAY1};
    }
  }
  .submit-button {
    margin-left: 0.5rem;
  }
  .close-search {
    background-color: ${ASU_WHITE};
    border: 1px solid ${ASU_GRAY5};
    border-radius: 100%;
    padding: 0.45rem 0.75rem;
    margin-left: 0.5rem;
  }
  &.open-search {
    margin-left: -1rem;
    .search-button {
      transform: translate(1.9rem);
      pointer-events: none;
    }
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    width: 100%;
    padding: 1rem 1rem;
    label {
      position: relative;
      font-size: 0.875rem;
      margin-bottom: 0;
      width: 100%;
      svg.search-icon {
        position: absolute;
        top: 50%;
        left: 1rem;
        transform: translate(0, -50%);
      }
      input[name="q"] {
        width: 100%;
        margin: 0;
        padding: 0.5rem 3rem 0.5rem 2.25rem;
        font-size: 1rem;
        line-height: 1.5;

        &::placeholder {
          font-size: 1rem;
          line-height: 1.5;
        }

        &::-webkit-search-cancel-button,
        &::-webkit-search-decoration,
        &::-webkit-search-results-button,
        &::-webkit-search-results-decoration {
          display: none;
        }
      }
      .submit-search {
        position: absolute;
        top: 50%;
        right: 0.5rem;
        transform: translate(0, -50%);
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: ${ASU_MAROON};
        color: ${ASU_WHITE};
        font-size: 0.75rem;
      }
    }
  }
`;

export { SearchWrapper };
