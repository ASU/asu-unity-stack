/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import {
  useState
} from "preact/compat";
import PropTypes from "prop-types";
import {Modal} from "./";

const TestModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div class="App">
      <h1>Parent container</h1>
      <h3>This is just a demo container</h3>
      <button onClick={() => setIsModalVisible(true)}>open modal</button>
      {isModalVisible && (
        <Modal onModalClose={() => setIsModalVisible(false)}>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>
            <Modal.Footer.CloseBtn>Close</Modal.Footer.CloseBtn>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default TestModal;
