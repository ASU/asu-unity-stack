import styled from "styled-components";

const SearchWrapper = styled.form`
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    width: 100%;
    padding: 1rem 2rem;
    label {
      position: relative;
      background-size: 0.875rem;
      svg {
        position: absolute;
        top: 0;
        left: 0.5rem;
      }
      input {
        width: 100%;
        background-color: #ffffff;
        border: 0;
        border-radius: 0;
        padding: 0.5rem 0.5rem 0.5rem 2rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
      }
    }
  }
`;

export { SearchWrapper };
