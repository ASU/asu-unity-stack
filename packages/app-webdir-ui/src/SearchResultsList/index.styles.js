// @ts-check
import styled from "styled-components";

const SearchResultsList = styled.div`
  .summary {
    -webkit-mask-image: -webkit-gradient(
      linear,
      left 60%,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0.2))
    );
  }
  .uds-person-profile:not(:first-child) {
    padding-top: 32px;
  }
  .large {
    .uds-person-profile,
    .uds-results-card {
      padding-top: 48px;
      border-top: 1px solid #d0d0d0;

      :first-child {
        border: none;
      }
    }
  }
  .results-title {
    margin-bottom: 64px;
    font-size: 40px;
    font-weight: bold;
  }
  .results-title-small {
    margin-bottom: 32px;
    font-size: 26px;
    font-weight: bold;
  }
  .summary-button {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
  .micro-options {
    margin-top: 48px;
    display: flex;
    justify-content: space-between;

    &.push-right {
      justify-content: flex-end;
    }
  }
`;

export { SearchResultsList };
