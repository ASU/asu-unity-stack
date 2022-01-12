// @ts-check
import styled from "styled-components";

const SearchResultsList = styled.div`
  .summary {
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
  }
  .uds-person-profile,
  .uds-results-card {
    margin-top: 32px;
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

const ProfileCardList = styled.div`
  display: flex;
  flex-direction: column;

  .uds-person-profile {
    padding-bottom: 26px;
    padding-top: 40px;
    border-bottom: 1px solid #c5c5c5;
  }

  .uds-person-profile:first-child {
    padding-top: 0;
  }

  .uds-person-profile:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export { SearchResultsList, ProfileCardList };
