/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";

const Card = props => {
  return (
    <div class={css`
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
    `}>
      {props.children}
    </div>
  );
};

const CardHeader = props => {
  return (
    <div class={css`
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
    `}>
      {props.children}
    </div>
  );
};

const CardBody = props => {
  return (
    <div class={css`
      padding: 0 32px 24px 32px;
      -webkit-box-flex: 100;
      -ms-flex-positive: 100;
      flex-grow: 100;
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      min-height: 1px;
      padding: 1.25rem;
    `}>
      {props.children}
    </div>
  );
}

const FoldableCard = props => {
  return (
    <div class={css`
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
      border-color: #d0d0d0;
      border-left: 0.5rem solid #ffc627;
      height: auto;
    `}>
      {props.children}
    </div>
  );
};


export { Card, CardHeader, CardBody, FoldableCard };
