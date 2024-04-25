import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Atoms/Tooltips/Templates",
  decorators: [ defaultDecorator ],
  args: {color: "Gray",},
  argTypes: {
    color: {
      name: "Color",
      options: ["White", "Base Gray", "Gray", "Dark"],
      mapping: {
        "White": "white",
        "Base Gray": "base-gray",
        "Gray": "gray",
        "Dark": "dark",
      },
      control: {
        type: "radio",
      },
    },
  },
};

export const Tooltips = ({color}) => {
  return (
    <div className={`uds-tooltip-bg-${color}`}>
      <div className="uds-tooltip-container">
        <button
          tabIndex="0"
          className={`uds-tooltip uds-tooltip-${
            color === "base-gray" ? "gray-1" : color
          }`}
          aria-describedby="tooltip-desc-1"
        >
          <span className="fa-stack">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-info fa-stack-1x"></i>
          </span>
          <span className="uds-tooltip-visually-hidden">Notifications</span>
        </button>
        <div role="tooltip" className="uds-tooltip-description" id="tooltip-desc-1">
          <span className="uds-tooltip-heading">Lorem ipsum dolor sit amet</span>
          Other content
        </div>
      </div>
    </div>
  );
};
