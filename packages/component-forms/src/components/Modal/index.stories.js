/** @jsx h */

import { h, Fragment } from "preact";
import { Modal } from ".";
import { TestModal, TestModalIframe } from "./TestModal";

export default {
  component: Modal,
  title: "Modal",
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
  return <TestModal />;
};

export const iframeExample = () => {
  return <TestModalIframe />;
};
