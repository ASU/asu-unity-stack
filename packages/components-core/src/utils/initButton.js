import React from "react";
import ReactDOM from "react-dom";

import { Button } from "../components/Button";

const RenderReact = (component, props, target) => {
  ReactDOM.render(React.createElement(component, props), target);
};

export const initButton = ({ targetSelector, props }) =>
  RenderReact(Button, props, document.querySelector(targetSelector));
