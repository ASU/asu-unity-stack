import React from "react";
import ReactDOM from "react-dom";

import { InsetBox } from "../components/InsetBox";

const RenderReact = (component, props, target) => {
  ReactDOM.render(React.createElement(component, props), target);
};

export const initInsetBox = ({ targetSelector, props }) =>
  RenderReact(InsetBox, props, document.querySelector(targetSelector));
