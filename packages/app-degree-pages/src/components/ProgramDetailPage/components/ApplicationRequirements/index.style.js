import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    .btn {
      width: max-content;
      margin-left: 0;
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
`;

export { ButtonsContainer };
