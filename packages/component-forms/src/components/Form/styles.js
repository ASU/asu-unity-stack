/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import { cx, css } from "emotion";
import Tokens from "../../theme";
import { Panel, H4, Icon } from "@asu-design-system/components-library";
import { InputError } from "../Input/styles";

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

const FormStatus = ({ children, setStatus, ...props }) => {
  return (
    <div
      class={css`
        background-color: #d6f0fa;
        border-color: #00a3e0;
        color: #191919;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        padding: 0.75rem 1.25rem;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: 0.25rem;

      `}
      role="alert"
    >
      <div
        class={css`
          flex: 0 0 4rem;

          svg {
            overflow: visible;
            width: 1em;
            display: inline-block;
            font-size: inherit;
            height: 1em;
            overflow: visible;
            vertical-align: -0.125em;
            font-size: 2rem;
          }
        `}
      >
        <Icon type="info-circle" />
      </div>
      <div
        class={css`
          flex: 10;
          padding: 0.5rem 0rem;
        `}
      >
        {children}
      </div>
      <div
        class={css`
          flex: 1;
        `}
      >
        <button
          type="button"
          class={css`
            background: #e8e8e8;
            color: #191919;
            cursor: pointer;
            padding: 0.25rem 0.25rem;
            width: 2rem;
            height: 2rem;
            border: solid 1px #d0d0d0;
            float: right;
            font-size: 1.5rem;
            line-height: 1;
            text-shadow: 0 1px 0 #ffffff;
            opacity: 0.5;
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            user-select: none;
            border-radius: 400rem;
            transition: 0.03s ease-in-out;
            overflow: visible;
          `}
          aria-label="Close"
          onClick={e => {
            setStatus("");
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};

export { FormPanel, FormHeader, FormWrapper, InputError, FormStatus };
