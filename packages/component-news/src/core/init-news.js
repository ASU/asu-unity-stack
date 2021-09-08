// @ts-check
import React from "react";
import ReactDOM from "react-dom";

import { CardGridNews, CardListlNews, CardCarouselNews } from "../components";

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
const initCardGridNewsComponent = ({ targetSelector, props }) => {
  RenderReact(CardGridNews, props, document.querySelector(targetSelector));
};

/**
 * @param {ComponentProps} props
 */
const initCardListNewsComponent = ({ targetSelector, props }) => {
  RenderReact(CardListlNews, props, document.querySelector(targetSelector));
};

/**
 * @param {ComponentProps} props
 */
const initCardCarouselNewsComponent = ({ targetSelector, props }) => {
  RenderReact(CardCarouselNews, props, document.querySelector(targetSelector));
};

export {
  initCardGridNewsComponent,
  initCardListNewsComponent,
  initCardCarouselNewsComponent,
};
