import styled from "styled-components";

const breakpoint = "1260px";

const Wrapper = styled.div`
  background-color: #e8e8e8;
  height: 24px;
  @media (max-width: ${breakpoint}) {
    display: none;
  }
`;

export { Wrapper };
