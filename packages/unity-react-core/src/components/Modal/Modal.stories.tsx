import React from "react";
import { Modal } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  args: {
    open: false,
    trigger: "Open Modal",
    modalHeaderText: "Content test",
    modalBodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididuntåç ut labore et dolore magna aliqua eiusmod tempo.",
    modalButtons: [{label: "Button 1", href: "#"}, {label: "Button 2", href: "#"}],
  },
};

const modalTemplate = args => <Modal {...args} />;

export const Overview = {
  render: modalTemplate.bind({}),
  name: "Modal",
};
