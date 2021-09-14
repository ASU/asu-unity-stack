import styled from "styled-components";

const GridViewWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  column-gap: 24px;
  row-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  li {
    a {
      height: 100%;
    }
    .card-img-top {
      border-radius: 0 !important;
    }
    .card-event-icons {
      &:nth-child(1) {
        width: 58%;
      }
      &:nth-child(2) {
        width: 42%;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    .card-content-wrapper {
      padding-top: 0 !important;
    }
  }
`;

export { GridViewWrapper };
