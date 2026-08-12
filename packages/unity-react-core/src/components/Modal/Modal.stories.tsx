import React from "react";
import { Modal } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  args: {
    open: false,
    children: (
      <>
        <h1>Content test</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod incididuntåç ut labore et dolore magna aliqua eiusmod tempo.
        </p>
        <button type="button" className="btn btn-primary">
          button
        </button>
      </>
    ),
  },
};

const modalTemplate = args => <Modal {...args} />;

export const Overview = {
  render: modalTemplate.bind({}),
  name: "Modal",
};
