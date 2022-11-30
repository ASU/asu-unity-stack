// @ts-check
import styled from "styled-components";

const SortLayout = styled.div`
  .sort-form {
    margin: 0;
    max-width: 75%;

    label {
      margin-right: 16px;
      margin-bottom: 0;
      line-height: 36px;
      text-align: center;
      white-space: nowrap;
    }
  }
`;

const SearchMessageLayout = styled.div`
  .search-message-emphasis {
    font-weight: bold;
  }
`;
export { SortLayout, SearchMessageLayout };
