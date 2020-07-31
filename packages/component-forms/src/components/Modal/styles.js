/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import Tokens from "../../theme";
import {Button} from "@asu-design-system/components-library";

const ModalWindow = props => {
  return (
    <div
      class={css`
        z-index: 2000;
        position: absolute;
        top: 0;
        left: 0;
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:rgba(0, 0, 0, 0.7);
      `}
      role="dialog"
      aria-modal="true"
    >
      <div
        class={css`
          width: auto;
          height: 90%;
          border: 1px solid #d8dce3;
          border-radius: 3px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
          background-color: #fdfdfe;
          opacity: 1;
        `}
        ref={props.domRef}
      >
        {props.children}
      </div>
    </div>
  );
};

const ModalHeader = props => {
  return (
    <div
      class={css`
        padding: 9px 10px;
        padding-left: 20px;
        height: 38px;
        font-size: 15px;
        position: relative;
      `}
    >
      {props.children}
      <button
        class={css`
          padding: 0;
          margin: 0;
          background: transparent;
          border: 0;
          position: absolute;
          right: 10px;
          font-weight: bold;
          cursor: pointer;
        `}
        title="close modal"
        onClick={props.onModalClose}
      >
        ✕
      </button>
    </div>
  );
};

const ModalBody = props => {
  return (
    <div
      class={css`
        flex-grow: 1;
        border-top: solid 1px #d8dce3;
        padding: 14px 29px 14px 19px;
      `}
    >
      {props.children}
    </div>
  );
};

const ModalFooter = props => {
  return (
    <div
      class={css`
        border-top: solid 1px #d8dce3;
        padding: 10px 20px;
        display: flex;
        justify-content: flex-end;
      `}
    >
      {props.children}
    </div>
  );
};

const ModalCloseBtn = ({ children, ...props }) => {
  return (
    <Button
      class={css`
        cursor: pointer;
      `}
      {...props}
    >
      {children}
    </Button>
  );
};

export { ModalWindow, ModalHeader, ModalBody, ModalFooter, ModalCloseBtn };
