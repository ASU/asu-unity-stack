import styled from "styled-components";
import { ASU_GRAY2 } from "../../../colors";

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  > a {
    padding: 0;
    margin: 0;
    color: ${ASU_GRAY2};
    text-decoration: none;
  }
  > span.name {
    font-weight: 700;
  }
  > a.signout:before {
    content: "(";
    margin-left: 4px;
  }
  > a.signout:after {
    content: ") ";
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    width: 100%;
  }
`;

export { LoginWrapper };
