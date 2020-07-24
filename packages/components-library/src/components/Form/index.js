/** @jsx h */
/* eslint-disable react/prop-types */
import { h} from "preact";
import { useState, useEffect } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";

const Form = ({
  title,
  ...props
}) => {

  return (
    <S.Form>
      <h3>{title}</h3>
    </S.Form>
  );
};

Form.propTypes = {
  title: PropTypes.string
};

Form.defaultProps = {
};

export default Form;
