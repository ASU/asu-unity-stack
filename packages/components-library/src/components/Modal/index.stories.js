/** @jsx h */

import { h, Fragment} from "preact";
import { withA11y } from "@storybook/addon-a11y";
import Modal from ".";

export default {
  component: Modal,
  title: "Modal",
  decorators: [withA11y],
};



export const base = () => {
  return (
    <Fragment>
      <div id="modal-container" />
      <Modal container={"modal-container"}>
        <div>
          <h2>Test content</h2>
          <p>Some extra content</p>
        </div>
      </Modal>
    </Fragment>

  );
};
