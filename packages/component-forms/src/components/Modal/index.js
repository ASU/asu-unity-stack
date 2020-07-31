/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import {
  createPortal,
  useEffect,
  createContext,
  useContext,
  createRef
} from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";

const modalContext = createContext();
/**
 *
 * @param {*} param0
 */
const Modal = ({ children, containerId, onModalClose }) => {
  const custom = document.getElementById(containerId);
  const domNode = custom || document.body;
  const modalRef = createRef();

  const handleTabKey = e => {
    const focusableModalElements = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement !== firstElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement !== lastElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  const keyListenersMap = new Map([[27, onModalClose], [9, handleTabKey]]);

  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  }, []);

  return createPortal(
    <S.ModalWindow domRef={modalRef} >
      <modalContext.Provider value={{ onModalClose }}>
        {children}
      </modalContext.Provider>
    </S.ModalWindow>,
    domNode
  );
};

Modal.Header = function ModalHeader(props) {
  const { onModalClose } = useContext(modalContext);

  return (
    <S.ModalHeader {...{onModalClose}}>
      {props.children}
    </S.ModalHeader>
  );
};

Modal.Body = function ModalBody(props) {
  return <S.ModalBody>{props.children}</S.ModalBody>;
};

Modal.Footer = function ModalFooter(props) {
  return <S.ModalFooter>{props.children}</S.ModalFooter>;
};

Modal.Footer.CloseBtn = function CloseBtn(props) {
  const { onModalClose } = useContext(modalContext);
  return (
    <S.ModalCloseBtn
      {...props}
      title="close modal"
      onClick={onModalClose}
    />
  );
};

Modal.propTypes = {
  containerId: PropTypes.string,
  onModalClose: PropTypes.func.isRequired
};

Modal.defaultProps = {};

export {Modal};
