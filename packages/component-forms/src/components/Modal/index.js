/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import {
  createPortal,
  useEffect,
  createContext,
  useContext,
  createRef,
} from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";

const modalContext = createContext();
/**
 *
 * @param {*} param0
 */
const Modal = ({ children, containerId, onModalClose, ...props }) => {
  const custom = document.getElementById(containerId);
  const domNode = custom || document.body;
  const modalRef = createRef();

  const handleTabKey = e => {
    const focusable = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];

    // If any element in-between the first and last focusable elements is active,
    // allow focus to transition normally
    let found = false;

    for (let i = 1; i < focusable.length - 1; i++) {
      if (document.activeElement === focusable[i]) {
        found = true;
      }
    }

    if (found) {
      return false;
    }

    // If no element in modal (or the last element) has focus, focus the first
    // element
    if (!e.shiftKey && document.activeElement !== firstElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    // Backwards tab, like above but focus on last element
    if (e.shiftKey && document.activeElement !== lastElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  const keyListenersMap = new Map([
    [27, onModalClose],
    [9, handleTabKey],
  ]);

  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  }, []);

  return createPortal(
    <S.ModalWindow domRef={modalRef} class={props.class ? props.class : ""}>
      <modalContext.Provider value={{ onModalClose }}>
        {children}
      </modalContext.Provider>
    </S.ModalWindow>,
    domNode
  );
};

Modal.Header = function ModalHeader(props) {
  const { onModalClose } = useContext(modalContext);

  return <S.ModalHeader {...{ onModalClose }}>{props.children}</S.ModalHeader>;
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
    <S.ModalCloseBtn {...props} title="close modal" onClick={onModalClose} />
  );
};

Modal.propTypes = {
  containerId: PropTypes.string,
  onModalClose: PropTypes.func.isRequired,
  class: PropTypes.string,
};

Modal.defaultProps = {};

export { Modal };
