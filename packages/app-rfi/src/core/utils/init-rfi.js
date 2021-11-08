// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";

import { AsuRfi } from "../../components/AsuRfi";

/**
 * @typedef {Object} ComponentProps
 * @property {string} targetSelector - The CSS selector (#id or .class)
 * which identifies the <div> element where the RFI will be rendered.
 * @property {object} props - Properties with which to initialize the RFI.
 */

/**
 * @param {ComponentProps} props
 */
const RenderReact = (component, props, target) => {
  ReactDOM.render(React.createElement(component, props), target);
};

/**
 * @param {ComponentProps} props
 */
export const initRfi = ({ targetSelector, props }) =>
  RenderReact(AsuRfi, props, document.querySelector(targetSelector));
