// @ts-check
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 187px;
  @media (max-width: 1024px) {
    max-height: 300px;
  }
  @media (max-width: 767px) {
    max-height: 100%;
  }
`;

export { List };
