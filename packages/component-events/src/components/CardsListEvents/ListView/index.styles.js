import styled from "styled-components";

const ListViewWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  .card {
    height: 235px;
    .card-img-top {
      width: 235px;
      height: 235px;
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
  @media (max-width: 992px) {
    .card {
      height: 100%;
      .card-content-wrapper {
        padding-top: 0 !important;
      }
      .card-event-icons {
        width: 50%;
      }
      .card-img-top {
        height: auto;
        width: auto;
      }
    }
  }
`;

export { ListViewWrapper };
