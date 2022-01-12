// @ts-check
import styled from "styled-components";

const ProfileCardTemplate = styled.div`
  max-width: 700px;
  &.fill {
    background-color: #fafafa;
    border: 1px solid #d0d0d0;
    padding: 32px;
  }
  &.large {
    img {
      height: 240px;
      width: 240px;
    }
    .person-name {
      font-size: 48px;
      margin: 24px 0;
    }
    .person-profession {
      h4 {
        margin: 0;
        font-size: 16px;
        span:nth-child(2) {
          font-weight: normal;
        }
      }
    }
  }
  &.small {
    background-color: #fafafa;
    border: 1px solid #e8e8e8;
    padding: 36px;
  }
  &.micro {
    img {
      height: 74px;
      width: 74px;
    }
    h3 {
      font-size: 20px;
      margin: 0;
    }
    h4 {
      font-size: 16px;
      margin: 0;
    }
  }
`;

export { ProfileCardTemplate };
