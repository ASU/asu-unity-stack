import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    flex-direction: column;
    width: 100%;
  } ;
`;

export { Wrapper };
