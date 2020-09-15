/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import { mobileBreak, containerSize } from "../../theme";

const loginStyles = css`
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
    }
    .name {
      font-weight: 700;
    }

    .signout:before {
      content: "(";
      margin-left: 4px;
    }

    .signout:after {
      content: ") ";
    }


    @media (min-width: ${mobileBreak}) {
      margin-left: .5rem;
    }
  }
`;

const Login = props => {
  return <div class={cx(props.class, "login-status")}>{props.children}</div>;
};

export { Login, loginStyles };
