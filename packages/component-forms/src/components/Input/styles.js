/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css } from "emotion";
import Tokens from "../../theme";
import {
  Heading,
  Icon,
  FoldableCard,
} from "@asu-design-system/components-library";

const Checkbox = ({ label, name, children, ...props }) => {
  return (
    <div
      class={css`
        display: flex;
        align-items: center;
        width: auto;
        height: 100%;
      `}
    >
      <span
        class={css`
          display: flex;
          flex-direction: row;
          padding-left: 2rem;
          input,
          button,
          select,
          optgroup,
          textarea {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
          }

          label {
            :not(:focus):not(:active) {
              clip: rect(0 0 0 0);
              clip-path: inset(100%);
              height: 1px;
              overflow: hidden;
              position: absolute;
              white-space: nowrap;
              width: 1px;
            }
          }
        `}
      >
        {children}
        <label htmlFor={name} class="switch" {...props}>
          {label}
        </label>
      </span>
    </div>
  );
};

const Input = ({ children, ...props }) => {
  return (
    <div
      class={css`
        display: flex;
        align-items: center;
        width: auto;
        height: 100%;
      `}
    >
      {children}
    </div>
  );
};

const InputError = props => {
  return (
    <div
      class={css`
        display: flex;
        flex-direction: row;
        padding: 1rem;
        font-weight: bold;

        svg {
          color: ${Tokens.ColorAlertsError};
          margin-right: 1rem;
        }
      `}
    >
      {<Icon type="exclamation-triangle" />}
      {props.children}
    </div>
  );
};

const PanelInputInfo = ({ children, icon, ...props }) => {
  const fieldIcon = icon ? <Icon type={icon} /> : "";

  return (
    <Heading
      type="h4"
      class={css`
        display: flex;
        flex-direction: row;
        align-items: center;
      `}
    >
      {fieldIcon}
      <div
        class={css`
          padding: 0.5rem 1.5rem;
          color: #191919;
          text-decoration: none;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
        `}
      >
        {children}
      </div>
    </Heading>
  );
};

const PanelInputCard = ({ icon, title, id, children }) => {
  return (
    <FoldableCard
      id={id}
      class={css`
        border: 0;
        flex-grow: 1;
      `}
      head={<PanelInputInfo {...{ icon }}>{title}</PanelInputInfo>}
    >
      {children}
    </FoldableCard>
  );
};

const PanelInputWrapper = props => {
  return (
    <div
      class={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        justify-content: space-between;

        > div:last-child {
          align-self: flex-start;
          margin-top: 2rem;
        }

        .title-only {
          padding: 32px 32px 16px 32px;
          flex-grow: 1;
          padding-bottom: 0;
          padding: 0.75rem 1.25rem;
          margin-bottom: 0;
          background-color: rgba(255, 255, 255, 0.03);
          display: flex;
          flex-direction: row;
          align-items: baseline;
          justify-content: space-between;
          cursor: pointer;
          border: 0;
        }
      `}
    >
      {props.children}
    </div>
  );
};

const Toggle = ({ label, name, children, ...props }) => {
  return (
    <div
      class={css`
        display: flex;
        align-items: center;
        width: auto;
        height: 100%;
      `}
    >
      <span
        class={css`
          display: flex;
          flex-direction: row;
          padding-left: 3rem;
          input,
          button,
          select,
          optgroup,
          textarea {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
          }

          input {
            margin-left: 2rem;
          }

          button.checked {
            background: ${Tokens.ColorBaseGold};
          }

          button {
            border: 0;
            cursor: pointer;
            text-indent: -9999px;
            width: 46px;
            height: 25px;
            display: block;
            border-radius: 21px;
            position: relative;
            background: ${Tokens.ColorBaseGray4};
            font-weight: bold;
            font-size: 0.85em;
          }

          button.checked:after {
            left: calc(100% - 3px);
            transform: translateX(-100%);
          }

          button:after {
            content: "";
            position: absolute;
            top: 2px;
            left: 3px;
            width: 21px;
            height: 21px;
            background: #fff;
            border-radius: 21px;
            transition: 0.3s;
          }

          span {
            :not(:focus):not(:active) {
              clip: rect(0 0 0 0);
              clip-path: inset(100%);
              height: 1px;
              overflow: hidden;
              position: absolute;
              white-space: nowrap;
              width: 1px;
            }
          }
        `}
      >
        <label {...props}>{children}</label>
      </span>
    </div>
  );
};

export {
  Checkbox,
  PanelInputInfo,
  Input,
  PanelInputCard,
  PanelInputWrapper,
  InputError,
  Toggle,
};
