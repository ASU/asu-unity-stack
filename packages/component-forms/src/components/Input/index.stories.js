/** @jsx h */

import { h } from "preact";
import { Input, PanelInput } from ".";

export default {
  component: Input,
  title: "Input",
};

const fieldProps = {
  field: {
    value: false,
  },
  setFieldValue: () => {
    console.log("set the value");
  },
  name: "test_field",
  label: "ASU Mobile App (push notifications) use enter or space to edit",
};

export const checkbox = () => <Input type="checkbox" {...fieldProps} />;

export const toggle = () => <Input type="toggle" {...fieldProps} />;

export const panelCheckboxInput = () => (
  <PanelInput
    {...{
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud`,
      type: "checkbox",
      field: {
        value: false,
      },
      setFieldValue: () => {
        console.log("set the value");
      },
      label: "ASU Mobile App (push notifications) use enter or space to edit",
      title: "ASU Mobile App (push notifications)",
      icon: "mobile",
    }}
  >
    <Input type="checkbox" {...fieldProps} />
  </PanelInput>
);

export const panelToggleInput = () => (
  <PanelInput
    {...{
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud`,
      type: "toggle",
      field: {
        value: false,
      },
      setFieldValue: () => {
        console.log("set the value");
      },
      label: "ASU Mobile App (push notifications) use enter or space to edit",
      title: "ASU Mobile App (push notifications)",
      icon: "mobile",
    }}
  >
    <Input
    type="toggle"
    {...fieldProps} />
  </PanelInput>
);
