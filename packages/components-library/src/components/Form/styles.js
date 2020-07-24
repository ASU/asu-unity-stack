/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import Tokens from "../../theme";

const Form = props => {
  return (
    <form>
      {props.children}
    </form>
  );
};

export {
  Form,
};
