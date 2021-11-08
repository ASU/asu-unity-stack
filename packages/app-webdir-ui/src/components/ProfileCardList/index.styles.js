// @ts-check
import styled from "styled-components";

const ProfileCardList = styled.div`
  display: flex;
  flex-direction: column;

  .uds-person-profile {
    padding-bottom: 26px;
    padding-top: 40px;
    border-bottom: 1px solid #C5C5C5;
  }

  .uds-person-profile:first-child {
    padding-top: 0;
  }

  .uds-person-profile:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export { ProfileCardList };
