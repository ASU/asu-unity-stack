// @ts-check
import React from "react";
import ReactDOM from "react-dom";

import { MyComponent } from "../components/index";

/**
 * @typedef {Object} ComponentProps
 * @property {string} targetSelector - The CSS selector (#id or .class)
 * which identify the <div> element where the footer should be either hydrated or rendered.
 * @property {object} props - Properties to initialize the footer with.
 * Should only be set to true if the footer has been completely rendered server-side.
 */

const RenderReact = (component, props, target) => {
  ReactDOM.render(React.createElement(component, props), target);
};

/**
 * @param {ComponentProps} props
 */
const initMyComponent = ({ targetSelector, props }) => {
  RenderReact(MyComponent, props, document.querySelector(targetSelector));
};

export { initMyComponent };
