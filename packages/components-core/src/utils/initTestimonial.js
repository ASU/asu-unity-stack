import React from "react";
import ReactDOM from "react-dom";

import { Testimonial } from "../components/Testimonial";

const RenderReact = (component, props, target) => {
  ReactDOM.render(React.createElement(component, props), target);
};

export const initTestimonial = ({ targetSelector, props }) =>
  RenderReact(Testimonial, props, document.querySelector(targetSelector));
