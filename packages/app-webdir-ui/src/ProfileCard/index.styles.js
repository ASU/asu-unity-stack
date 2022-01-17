// @ts-check
import styled from "styled-components";

const ProfileCardTemplate = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  .profile-img {
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    background-size: 180px;
    border-radius: 100%;
  }
  &.fill {
    background-color: #fafafa;
    border: 1px solid #d0d0d0;
    padding: 32px;
  }
  &.large {
    grid-template-columns: 240px 1fr;
    .profile-img {
      background-size: 240px;
      margin-bottom: 32px;
    }
    .person-name {
      font-size: 48px;
      margin-bottom: 24px;
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
    grid-template-columns: 180px 1fr;
    background-color: #fafafa;
    border: 1px solid #e8e8e8;
    padding: 36px;
  }
  &.micro {
    grid-template-columns: 74px 1fr;
    .profile-img {
      height: 74px;
      width: 74px;
    }
    .person-profession {
      margin: 0;
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
  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

export { ProfileCardTemplate };
