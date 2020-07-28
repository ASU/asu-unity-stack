/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { createPortal, useEffect } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";

const Modal = ({ children, container, ...props }) => {
  const el = document.createElement("div");

  useEffect(() => {
    document.getElementById(container).appendChild(el);
  }, []);

  const inner = <S.ModalWindow>{children}</S.ModalWindow>;
  return createPortal(inner, el);
};

Modal.propTypes = {
  container: PropTypes.string.isRequired,
};

Modal.defaultProps = {};

export default Modal;
