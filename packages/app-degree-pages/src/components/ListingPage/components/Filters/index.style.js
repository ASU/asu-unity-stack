// @ts-check
import styled from "styled-components";

const Section = styled.section`
  border-bottom: 1px solid #d0d0d0;

  @media (max-width: 768px) {
    .filter-action-buttons {
      & {
        * {
          margin: 0;
        }
        .btn-link {
          padding: 1rem;
        }
      }
    }
  }
`;

const ButtonLink = styled.button`
  font-weight: 400;
  text-decoration: underline;
`;

export { Section, ButtonLink };
