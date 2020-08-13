/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import Tokens from "../../theme";

const H4 = ({ children, ...props }) => {
  return (
    <h4
      {...props}
      class={cx(
        css`
          font-size: 1.25rem;
          letter-spacing: -0.025em;
          font-weight: 700;
          text-align: left;
          opacity: 1;
          margin: 1rem 0;
          line-height: calc(100% + 0.12em);
        `,
        props.class
      )}
    >
      {children}
    </h4>
  );
};

export { H4 };
