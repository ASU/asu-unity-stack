// @ts-check
import styled from "styled-components";

const AllTabLayout = styled.div`
  display: flex;
  flex-direction: column;
  .all-message {
    margin-bottom: 88px;

    @media (max-width: 768px) {
      margin-bottom: 12px;
    }
  }
  .all-content {
    display: grid;
    grid-template-columns: 700px 1fr;
    grid-column-gap: 126px;
    @media screen and (max-width: 1280px) {
    grid-template-columns: 500px 1fr;
  }
  @media screen and (max-width: 1012px) {
    grid-template-columns: 1fr;
  }

    .all-content-column {
      display: flex;
      flex-direction: column;

      .all-content-item {
        margin-bottom: 72px;
      }
      .top-results {
        .uds-results-card {
          margin-bottom: 32px;
        }
      }
    }
  }
  @media (max-width: 1268px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 100%;
    grid-template-rows: repeat(6, auto);
    grid-row-gap: 48px;
    grid-column-gap: 0px;
    grid-template-areas:
      "header"
      "top"
      "subdomain"
      "all"
      "faculty"
      "students"
      "links";
  }
`;

const LocalTabLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const FacultyTabLayout = styled.div`
  display: grid;
  grid-template-columns: 792px auto;
  grid-template-areas: "results sort";
  .faculty-sort {
    grid-area: sort;
  }
  .faculty-results {
    grid-area: results;
  }
  @media (max-width: 1268px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(1, auto);
    grid-row-gap: 40px;
    grid-template-areas:
      "sort"
      "results";
  }
`;

const StudentsTabLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export { AllTabLayout, FacultyTabLayout, StudentsTabLayout, LocalTabLayout };
