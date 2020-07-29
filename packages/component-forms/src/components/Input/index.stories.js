/** @jsx h */

import { h } from "preact";
import { Input, PanelInput } from ".";

export default {
  component: Input,
  title: "Input",
};

export const base = () => <Input type="checkbox" />;

export const panelInput = () => (
  <PanelInput
    {...{
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud`,
      type: "checkbox",
      label: "ASU Mobile App (push notifications)",
      icon: "mobile",
    }}
  />
);
