import React from "react";
import ReactDOM from "react-dom";

import { Article } from "../components/Article";

const RenderReact = (component, props, target) => {
  ReactDOM.render(React.createElement(component, props), target);
};

export const initArticle = ({ targetSelector, props }) =>
  RenderReact(Article, props, document.querySelector(targetSelector));
