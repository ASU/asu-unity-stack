import { cx, css } from "@emotion/css";

const sharedStyle = `
  font-weight: 700;
  text-align: left;
  opacity: 1;
  margin: 1rem 0;
  line-height: calc(100% + 0.12em);
`;

const H4 = ({ children, ...props }) => {
  return (
    <h4
      {...props}
      class={cx(
        css`
          ${sharedStyle}
          font-size: 1.25rem;
          letter-spacing: -0.025em;
        `,
        props.class
      )}
    >
      {children}
    </h4>
  );
};

const H3 = ({ children, ...props }) => {
  return (
    <h3
      {...props}
      class={cx(
        css`
          ${sharedStyle}
          font-size: 1.5rem;
          letter-spacing: -0.035em;
        `,
        props.class
      )}
    >
      {children}
    </h3>
  );
};

export { H4, H3 };
