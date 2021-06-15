// @ts-check

import styled from "styled-components";

const SectionCard = styled.section`
  .card-link {
    order: 1;
  }

  .card-button {
    order: 2;
    & * {
      font-size: 70%;
    }
  }
`;

export { SectionCard };
