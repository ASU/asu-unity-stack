import React from "react";
import ReactDOM from "react-dom";

import { Card } from "../components/Card";

const RenderReact = (component, props, target) => {
  ReactDOM.render(React.createElement(component, props), target);
};

export const initCard = ({ targetSelector, props }) =>
  RenderReact(Card, props, document.querySelector(targetSelector));
