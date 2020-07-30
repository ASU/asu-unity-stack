/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import { IconChevronDown } from "../Icons/styles";

const Card = props => {
  return (
    <div
      class={css`
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #ffffff;
        background-clip: border-box;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 0;
      `}
    >
      {props.children}
    </div>
  );
};

const CardHeader = props => {
  return (
    <div
      class={css`
        padding: 32px 32px 16px 32px;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        padding-bottom: 0;
        border-bottom: 0;
        padding: 0.75rem 1.25rem;
        margin-bottom: 0;
        background-color: rgba(255, 255, 255, 0.03);
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);

        h4 a {
          padding: 0.5rem 1.5rem;
          color: #191919;
          text-decoration: none;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};

const CardBody = props => {
  const show = props.hasOwnProperty("show") ? props.show : true;

  return (
    <div
      class={cx(
        css`
          padding: 0 32px 24px 32px;
          flex-grow: 100;
          flex: 1 1 auto;
          min-height: 1px;
          padding: 1.25rem;
          ${!show &&
          css`
            display: none;
          `}
        `,
        props.class
      )}
    >
      {props.children}
    </div>
  );
};

const FoldableCard = props => {
  return (
    <div
      class={cx(
        css`
          position: relative;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          flex-direction: column;
          min-width: 0;
          word-wrap: break-word;
          background-color: #ffffff;
          background-clip: border-box;
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 0;
          border-color: #d0d0d0;
          border-left: 0.5rem solid #ffc627;
          height: auto;
        `,
        props.class
      )}
    >
      {props.children}
    </div>
  );
};

const FoldableCardBody = props => {
  const show = props.hasOwnProperty("show") ? props.show : true;

  return (
    <CardBody
      show={show}
      class={cx(
        css`
          ${show &&
          css`
            border-top: 1px solid #d0d0d0;
          `}
        `,
        props.class
      )}
    >
      {props.children}
    </CardBody>
  );
};

const FoldableCardHeader = props => {
  const show = props.hasOwnProperty("show") ? props.show : true;

  return (
    <div
      class={css`
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

        h4 {
          display: flex;
          flex-direction: row;
          align-items: baseline;

          a {
            padding: 0.5rem 1.5rem;
            color: #191919;
            text-decoration: none;
            display: flex;
            flex-direction: row
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
          }
        }

        .fa-chevron-down {
          transition-duration: 0.4s;
          font-size: 1.25rem;
        }

        ${
          show &&
          css`
            .fa-chevron-down {
              transform: rotate(-180deg);
            }
          `
        }

      `}
      {...props}
    >
      {props.children}
      <IconChevronDown />
    </div>
  );
};

export {
  Card,
  CardHeader,
  CardBody,
  FoldableCard,
  FoldableCardHeader,
  FoldableCardBody,
};
