/* eslint-disable react/prop-types */

import { cx, css } from "@emotion/css";

const Panel = props => {
  return (
    <div
      class={cx(
        props.class,
        css`
          padding: 2rem;
          margin-bottom: 2rem;
          border-radius: 0.3rem;
          border: 1px solid #dee2e6;
        `
      )}
    >
      {props.children}
    </div>
  );
};

export { Panel };
