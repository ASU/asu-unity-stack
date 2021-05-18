/* eslint-disable quote-props */
// @ts-check
import React from "react";
import ReactDOM from "react-dom";

import { DegreePage } from "../../components";

/**
 * @typedef {Object} DegreeProps
 * @property {string} targetSelector - The CSS selector (#id or .class)
 * which identify the <div> element where the header should be rendered.
 * @property {object} props - Properties to initialize the component with.
 */

/**
 * @param {DegreeProps} props
 */
const initDegreePage = ({ targetSelector, props }) => {
  const target = document.querySelector(targetSelector);

  ReactDOM.render(React.createElement(DegreePage, props), target);
};

export { initDegreePage };
