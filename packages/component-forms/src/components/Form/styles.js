/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import { cx, css } from "emotion";
import Tokens from "../../theme";
import { Panel, H4, Icon } from "@asu-design-system/components-library";

const FormPanel = ({ children, ...props }) => {
  return <Panel>{children}</Panel>;
};

const FormHeader = ({ title, description, imgUrl }) => {
  return (
    <div
      class={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      `}
    >
      <div>
        <H4>{title}</H4>
        <p
          class={css`
            color: #747474;
            max-width: 500px;
            margin-top: 0;
            margin-bottom: 1rem;
          `}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div>
        <img src={imgUrl} class={css``} />
      </div>
    </div>
  );
};

const FormWrapper = ({ children, ...props }) => {
  return (
    <div
      class={css`
        form {
          display: flex;
          flex-direction: column;
        }
      `}
    >
      {children}
    </div>
  );
};

export { FormPanel, FormHeader, FormWrapper };
