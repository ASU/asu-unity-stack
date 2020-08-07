/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import Tokens from "../../theme";
import { Button } from "@asu-design-system/components-library";

const ModalWindow = props => {
  return (
    <div
      class={cx(
        css`
          z-index: 2000;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.7);
          overflow: scroll;
        `,
        props.class
      )}
      role="dialog"
      aria-modal="true"
    >
      <div
        class={css`
          width: auto;
          height: auto;
          border: 1px solid #d8dce3;
          border-radius: 3px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
          background-color: #fdfdfe;
          opacity: 1;


          iframe {
            max-width: 100%;
            min-height: 300px;
          }
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
        display: flex;
        border-radius: 1000px;
        padding: 0.25rem 3rem;
        background-color: rgb(217, 217, 217);
        width: 18rem;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        color: rgba(0, 0, 0, 0.87);
        font-size: 0.875rem;
        min-width: 64px;
        box-sizing: border-box;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        line-height: 1.75;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        margin: 0 auto;
      `}
      {...props}
    >
      {children}
    </Button>
  );
};

export { ModalWindow, ModalHeader, ModalBody, ModalFooter, ModalCloseBtn };
