import React from "react";
import ReactDOM from "react-dom";

import { ButtonIconOnly } from "../components/ButtonIconOnly";

const RenderReact = (component, props, target) => {
  ReactDOM.render(React.createElement(component, props), target);
};

export const initButtonIconOnly = ({ targetSelector, props }) =>
  RenderReact(ButtonIconOnly, props, document.querySelector(targetSelector));
