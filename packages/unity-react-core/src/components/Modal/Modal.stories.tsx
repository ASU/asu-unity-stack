import React from "react";
import { Modal } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  globals: {
    framework: "react",
  },
  tags: ["!bootstrap"],
};

const modalTemplate = args => <Modal {...args} />;

export const Overview = {
  render: modalTemplate.bind({}),
  name: "Modal",
};
