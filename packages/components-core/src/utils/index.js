import React from "react";
import ReactDOM from "react-dom";

import { Article } from "../components/Article";
import { Button } from "../components/Button";
import { ButtonIconOnly } from "../components/ButtonIconOnly";
import { ButtonTag } from "../components/ButtonTag";
import { Card } from "../components/Card";
import { Testimonial } from "../components/Testimonial";

const RenderReact = (component, props, target) => {
  ReactDOM.render(React.createElement(component, props), target);
};

export const initArticle = ({ targetSelector, props }) =>
  RenderReact(Article, props, document.querySelector(targetSelector));

export const initButton = ({ targetSelector, props }) =>
  RenderReact(Button, props, document.querySelector(targetSelector));

export const initButtonIconOnly = ({ targetSelector, props }) =>
  RenderReact(ButtonIconOnly, props, document.querySelector(targetSelector));

export const initButtonTag = ({ targetSelector, props }) =>
  RenderReact(ButtonTag, props, document.querySelector(targetSelector));

export const initCard = ({ targetSelector, props }) =>
  RenderReact(Card, props, document.querySelector(targetSelector));

export const initTestimonial = ({ targetSelector, props }) =>
  RenderReact(Testimonial, props, document.querySelector(targetSelector));
