// @ts-check
import styled from "styled-components";

const Section = styled.div`
  .hint-container {
    margin-top: -1.25rem;
    margin-bottom: 2rem;
  }

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
