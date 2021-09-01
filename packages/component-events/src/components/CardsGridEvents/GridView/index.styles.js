import styled from "styled-components";

const GridViewWrapper = styled.ul`
  padding: 0;
  margin: 2rem 0 0 0;
  list-style-type: none;
  display: grid;
  column-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  li {
    a {
      height: 100%;
    }
    .card-event-icons {
      width: 50%;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    .card-content-wrapper {
      padding-top: 0 !important;
    }
  }
`;

export { GridViewWrapper };
