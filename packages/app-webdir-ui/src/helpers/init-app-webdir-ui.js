/* eslint-disable quote-props */
// @ts-check
import React from "react";
import { createRoot } from "react-dom/client";

import { iSearchApp } from "../SearchPage/withRouter";
import { WebDirectoryComponent } from "../WebDirectoryComponent/withRouter";

/**
 * @typedef {Object} ComponentProps
 * @property {string} targetSelector - The CSS selector (#id or .class)
 * which identify the <div> element where the header should be rendered.
 * @property {Object} props - Properties to initialize the component with.
 */

/**
 * @param {ComponentProps} props
 */
const RenderReactSearch = (component, props, targetSelector) => {
  const target = document.querySelector(targetSelector);
  const root = createRoot(target);
  root.render(React.createElement(component, props));
};

/**
 * @param {ComponentProps} props
 */
const RenderReactWebDirectory = (component, props, targetSelector) => {
  const target = document.querySelector(targetSelector);
  const root = createRoot(target);
  root.render(React.createElement(component, props));
};

/**
 * @param {ComponentProps} props
 */
const initSearchPage = ({ targetSelector, props = {} }) => {
  RenderReactSearch(iSearchApp, props, targetSelector);
};

/**
 * @param {ComponentProps} props
 */
const initWebDirectory = ({ targetSelector, props = {} }) => {
  RenderReactWebDirectory(WebDirectoryComponent, props, targetSelector);
};

export { initSearchPage, initWebDirectory, iSearchApp, WebDirectoryComponent };
