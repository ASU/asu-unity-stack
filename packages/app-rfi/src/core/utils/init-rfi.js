// @ts-nocheck
import React from "react";
import { createRoot } from "react-dom/client";

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
  const root = createRoot(target);
  root.render(React.createElement(component, props));
};

/**
 * @param {ComponentProps} props
 */
export const initRfi = ({ targetSelector, props }) =>
  RenderReact(AsuRfi, props, document.querySelector(targetSelector));
