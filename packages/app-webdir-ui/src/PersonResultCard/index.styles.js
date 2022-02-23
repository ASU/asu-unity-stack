// @ts-check
import styled from "styled-components";

const PersonResultCardLayout = styled.div`
  display: grid;
  padding: 16px;
  grid-template-columns: 200px 1fr 200px;
  grid-column-gap: 16px;

  &.fill {
    background-color: #f9f9f9;
    border-top: 2px solid #c1c1c1;
    border-bottom: 2px solid #c1c1c1;
  }

  .profile-img-container {
    width: 200px;
    height: 200px;
    margin: 16px 0;
    .profile-img-placeholder {
      width: 100%;
      height: 100%;
      background-size: 100%;
      background-size: cover;
    }
    .profile-img {
      width: 200px;
      height: 200px;
    }
  }
  .info-section {
    .person-title {
      font-weight: bold;
    }
  }
  .contact-section {

  }
`;

export { PersonResultCardLayout };
