// @ts-check
import styled from "styled-components";

const SearchPageLayout = styled.div`
  max-width: 1200px;
  min-height: 80vh;
  margin: 0 auto;
  margin-top: 72px;

  h1 {
    margin-left: 12px;
  }

  .options-area {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 70px;
    form {
      width: 50%;
      .form-group {
        display: flex;
        margin-bottom: 0;
        input {
          margin-right: 16px;
          margin-bottom: 0;
        }
        .desktop-button {
          display: inline;
        }
        .mobile-button {
          display: none;
        }
      }
    }
    .profile-options {
      display: flex;
      flex-direction: row;
      a:not(:last-child) {
        margin-right: 16px;
      }
    }
  }

  .sort-form {
    margin: 0;
    max-width: 75%;

    label {
      margin-right: 16px;
      margin-bottom: 0;
      line-height: 36px;
      text-align: center;
      white-space: nowrap;
    }
  }
  .all-asu-search {
    display: grid;
    grid-template-columns: 700px 1fr;
    grid-template-rows: repeat(5, auto);
    grid-row-gap: 72px;
    grid-column-gap: 126px;
    grid-template-areas:
      "message message"
      "top faculty"
      "subdomain students"
      "subdomain links"
      "all all";

    .sort {
      grid-area: sort;
    }
    .top-results {
      grid-area: top;
      .uds-results-card {
        margin-bottom: 32px;
      }
    }
    .faculty-and-staff {
      grid-area: faculty;
    }
    .subdomain-results {
      grid-area: subdomain;
    }
    .students {
      grid-area: students;
    }
    .quick-links {
      grid-area: links;
    }
    .all-results {
      grid-area: all;
    }
  }
  .sites-tab {
    display: flex;
    flex-direction: column;
  }
  .faculty-tab {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 792px auto;
    grid-template-areas:
      "message sort"
      "results results";
    .faculty-sort {
      grid-area: sort;
    }
    .faculty-results {
      grid-area: results;
    }
  }
  .students-tab {
    display: flex;
    flex-direction: column;
  }
  .message {
    grid-area: message;
    .results-search-message {
      .search-message-emphasis {
        font-weight: bold;
      }
    }
  }

  @media (max-width: 768px) {
    .faculty-tab {
      grid-template-columns: 100%;
    }
    .options-area {
      flex-direction: column;
      form {
        margin-bottom: 24px;
        max-width: 100%;

        .form-group {
          flex-direction: column;

          input {
            margin-right: 0;
            margin-bottom: 24px;
          }
          .desktop-button {
            display: none;
          }
          .mobile-button {
            display: inline;
          }
        }
      }
      .profile-options {
        display: flex;
        flex-direction: column;
        a:not(:last-child) {
          margin-bottom: 16px;
        }
      }
    }

    .all-asu-search {
      display: grid;
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
  }
`;

export { SearchPageLayout };