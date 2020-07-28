/** @jsx h */

import { h, Fragment} from "preact";
import { useState } from "preact/compat";
import { withA11y } from "@storybook/addon-a11y";
import Modal from ".";
import TestModal from "./TestModal";

export default {
  component: Modal,
  title: "Modal",
  decorators: [withA11y],
};

export const base = () => {
  return (
      <Modal>
        <div>
          <h2>Test content</h2>
          <p>Some extra content</p>
        </div>
      </Modal>
  );
};

export const customContainer = () => {
  return (
    <Fragment>
      <div id="modal-container" />
      <Modal containerId={"modal-container"}>
        <div>
          <h2>Test content</h2>
          <p>Some extra content</p>
        </div>
      </Modal>
    </Fragment>
  );
};

export const insideApp = () => {

  return (
    <TestModal />
  );
};

