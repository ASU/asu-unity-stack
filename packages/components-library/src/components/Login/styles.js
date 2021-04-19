

import { cx, css } from "@emotion/css";

import { breakpointForMin } from "../../theme";

const loginStyles = breakpoint => css`
  .login-status {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;

    > a, span {
      padding: 0;
      margin: 0;
      color: #484848;
      text-decoration: none;
      position: relative;
    }
    .name {
      font-weight: 700;
    }

    .signout {
      margin-left: 6px;
      &:before {
        content: "(";
      }

      &:after {
        content: ") ";
      }
    }

    @media (min-width: ${breakpointForMin(breakpoint)}) {
      margin-left: .5rem;
    }
  }
`;

const Login = props => {
  return <div class={cx(props.class, "login-status")}>{props.children}</div>;
};

export { Login, loginStyles };
