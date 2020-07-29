/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import Tokens from "../../theme";

const ModalWindow = props => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export {
  ModalWindow,
};
