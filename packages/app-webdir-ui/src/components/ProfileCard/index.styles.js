// @ts-check
import styled from "styled-components";

const ProfileCard = styled.div`
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

export { ProfileCard };
