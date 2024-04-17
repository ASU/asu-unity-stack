import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Atoms/Buttons/Templates",
  decorators: [ defaultDecorator ],
  args: {
    color: "btn-gold",
    size: "Large",
    disabled: false,
  },
  argTypes: {
    color: {
      name: "Color",
      options: ["btn-gold", "btn-maroon", "btn-gray", "btn-dark"],
      control: {
        type: "radio",
      },
    },
    size: {
      name: "Size",
      options: ["Small", "Medium", "Large"],
      mapping: {
        "Small": "btn-sm",
        "Medium": "btn-md",
        "Large": null,
      },
      control: {
        type: "radio",
      },
    },
    disabled: {
      name: "Disabled",
      control: { type: "boolean" },
    },
  },
}

export const BasicButton = (
  args => {
    return (
      <button
        className={`btn ${args.color} ${args.size}`}
        disabled={args.disabled}
        type="submit"
        data-ga="Button button"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
      >
        Button button
      </button>
    );
  }
);

export const ButtonAsLink = (
  args => {
    return (
      <a
        href="#"
        className={`btn ${args.color} ${args.size} ${
          args.disabled ? "disabled" : ""
        }`}
        role="button"
        data-ga="Button button"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
      >
        Button button
      </a>
    );
  }
);

export const ButtonWithIcon = (
  args => {
    return (
      <a
        href="#"
        className={`btn ${args.color} ${args.size} ${
          args.disabled ? "disabled" : ""
        }`}
        role="button"
        data-ga="Gold button"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
      >
        <span className="fas fa-rocket"></span>&nbsp;&nbsp;Gold button
      </a>
    );
  }
);

export const ButtonTag = () => (
  <a
    href="#"
    className=""
    data-ga="This is a default link"
    data-ga-name="onclick"
    data-ga-event="link"
    data-ga-action="click"
    data-ga-type="internal link"
    data-ga-region="main content"
  >
    This is a default link
  </a>
);
ButtonTag.argTypes ={
  color: { table: { disable: true}},
  size: { table: { disable: true}},
  disabled: { table: { disable: true}},
}
ButtonTag.parameters = { controls: { disable: true } };
