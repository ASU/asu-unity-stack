import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Molecules/Content Sections/Inset Box/Templates",
  decorators: [ defaultDecorator ],
  argTypes: {
    background: {
      name: "Background",
      options: ["White", "Gray 1", "Gray 2", "Gray 7"],
      mapping: {
        "White": "white-bg",
        "Gray 1": "gray-1-bg",
        "Gray 2": "gray-2-bg",
        "Gray 7": "gray-7-bg",
      },
      control: {
        type: "radio",
      },
    },
  },
  args: {
    background: "White",
  },
};

export const Default = ({ background }) => (
  <div className={`uds-inset-box-container ${background}`}>
    <div className="uds-inset-box-content">
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
      </p>
      <div className="uds-inset-box-buttons">
        <a href="#" className="btn btn-dark">
          Button link here
        </a>
        <a href="#" className="btn btn-dark">
          Button link here
        </a>
      </div>
      <a href="#" className="">
        Regular text link here
      </a>
    </div>
  </div>
);
