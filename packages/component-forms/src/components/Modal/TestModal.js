/** @jsx h */
/* eslint-disable react/prop-types */
import { h, createRef } from "preact";
import { useState } from "preact/compat";
import PropTypes from "prop-types";
import { Modal } from "./";

const TestModal = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div class="App">
      <h1>Parent container</h1>
      <h3>This is just a demo container</h3>
      <button onClick={() => setIsModalVisible(true)}>open modal</button>
      {isModalVisible && (
        <Modal onModalClose={() => setIsModalVisible(false)}>
          <Modal.Header />
          <Modal.Body>
            <a href="https://asu.edu">ASU</a>
            <a href="https://uto.edu">UTO</a>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Footer.CloseBtn>Close</Modal.Footer.CloseBtn>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

const TestModalIframe = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div class="App">
      <h1>Parent container</h1>
      <h3>This is just a demo container</h3>
      <button onClick={() => setIsModalVisible(true)}>open modal</button>
      {isModalVisible && (
        <Modal onModalClose={() => setIsModalVisible(false)}>
          <Modal.Header />
          <Modal.Body>
            <div class="schedule-modal">
              <iframe
                src="https://dailycheck.m.asu.edu/daily-health-check"
                width="500"
                height="auto"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Footer.CloseBtn>Close</Modal.Footer.CloseBtn>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};


export {TestModal, TestModalIframe};
