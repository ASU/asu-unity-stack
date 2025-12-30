/* eslint react/jsx-props-no-spreading: "off", no-alert: "off" */
import React from "react";

import { UDSButton } from "./UDSButton";

export default {
  title: "Components/UDSButton",
  component: UDSButton,
  parameters: {
    docs: {
      description: {
        component: `The UDSButton component provides three button variants in one unified component:
- **Borderless**: Text-only button that fills with color on hover
- **Outline**: Button with border and transparent background that fills on hover
- **Filled**: Solid background button

All styles come from the Unity Bootstrap Theme SCSS.`,
      },
    },
  },
  args: {
    label: "UDS Button",
    color: "gold",
    size: "large",
    variant: "filled",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["borderless", "outline", "filled"],
      description: "Button style variant",
    },
    color: {
      control: "select",
      options: ["gold", "maroon", "gray", "dark"],
      description: "Button color",
    },
    size: {
      control: "select",
      options: ["large", "medium", "small"],
      description: "Button size",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
    label: {
      control: "text",
      description: "Button text",
    },
  },
};

const handleClick = () => {
  alert("Button clicked!");
};

export const Default = args => (
      <UDSButton {...args} onClick={handleClick} />
);

export const AsLink = args => (
      <UDSButton {...args} href="/#example" />
);
AsLink.args = {
  label: "Button Link",
};

export const AllVariants = () => (
  <div className="container-fluid">
    <div className="col col-sm-12 p-3">
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <UDSButton label="Borderless" variant="borderless" color="gold" onClick={handleClick} />
        <UDSButton label="Outline" variant="outline" color="gold" onClick={handleClick} />
        <UDSButton label="Filled" variant="filled" color="gold" onClick={handleClick} />
      </div>
    </div>
  </div>
);
AllVariants.parameters = {
  controls: { disable: true },
};
