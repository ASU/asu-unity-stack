import styled from "styled-components";
import { ASU_GRAY1 } from "../../../colors";
import { CLASS_NAMES } from "../../../core/constants/classNames";

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  > a {
    padding: 0;
    margin: 0;
    color: ${ASU_GRAY1};
    text-decoration: none;
    line-height: 1;
    vertical-align: middle;
  }
  > span.${CLASS_NAMES.USER_NAME} {
    font-weight: 700;
    line-height: 1;
  }
  > a.${CLASS_NAMES.SIGNOUT}:before {
    content: "(";
    margin-left: 4px;
  }
  > a.${CLASS_NAMES.SIGNOUT}:after {
    content: ") ";
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    width: 100%;
    margin-right: 0;
    justify-content: center;
  }
`;

export { LoginWrapper };
