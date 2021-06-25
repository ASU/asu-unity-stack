// @ts-check
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: flex-end;
  .form-group {
    width: 340px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .form-group {
      width: 280px;
    }
  }

  form {
    margin-bottom: 1rem;
  }
`;

export { Section };
