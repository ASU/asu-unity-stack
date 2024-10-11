/* eslint-disable quote-props */
// @ts-check
import React from "react";
import { createRoot } from "react-dom/client";

import { ListingPage, DetailPage } from "../../components";

/**
 * @typedef {Object} ComponentProps
 * @property {string} targetSelector - The CSS selector (#id or .class)
 * which identify the <div> element where the header should be rendered.
 * @property {Object} props - Properties to initialize the component with.
 */

/**
 * @param {ComponentProps} props
 */
const RenderReact = (component, props, targetSelector) => {
  const target = document.querySelector(targetSelector);
  const root = createRoot(target);
  root.render(React.createElement(component, props));
};

/**
 * @param {ComponentProps} props
 */
const initListingPage = ({ targetSelector, props }) => {
  RenderReact(ListingPage, props, targetSelector);
};

/**
 * @param {ComponentProps} props
 */
const initProgramDetailPage = ({ targetSelector, props }) => {
  RenderReact(DetailPage, props, targetSelector);
};

export { initListingPage, initProgramDetailPage };
