// @ts-check
import styled from "styled-components";

const SearchPage = styled.div`
  margin-top: 72px;

  h1 {
    margin-left: 12px;
  }

  form {
    margin-top: 50px;
    max-width: 50%;
    margin-bottom: 70px;

    .form-group {
      display: flex;

      input {
        margin-right: 16px;
        margin-bottom: 0;
      }
    }
  }
  @media (max-width: 768px) {
    form {
      margin-bottom: 24px;
      max-width: 100%;

      .form-group {
        flex-direction: column;

        input {
          margin-right: 0;
          margin-bottom: 24px;
        }
      }
    }
  }
`;

export { SearchPage };
