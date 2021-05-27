import React from "react";
import ReactDOM from "react-dom";

import { ButtonTag } from "../components/ButtonTag";

const RenderReact = (component, props, target) => {
  ReactDOM.render(React.createElement(component, props), target);
};

export const initButtonTag = ({ targetSelector, props }) =>
  RenderReact(ButtonTag, props, document.querySelector(targetSelector));
