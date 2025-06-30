import React from "react";
import { defaultDecorator } from "@asu/shared";

export default {
  title: "Molecules/Content Sections/Inset Box/Templates",
  decorators: [defaultDecorator],
  argTypes: {
    background: {
      name: "Background",
      options: ["White", "Grayscale 7", "Grayscale 6", "Grayscale 1"],
      mapping: {
        "White": "white-bg",
        "Grayscale 7": "grayscale-7-bg",
        "Grayscale 6": "grayscale-6-bg",
        "Grayscale 1": "grayscale-1-bg",
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
