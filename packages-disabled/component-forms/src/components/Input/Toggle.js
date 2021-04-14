/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import * as S from "./styles";
import PropTypes from "prop-types";

const Toggle = ({
  field,
  name,
  placeholder,
  label,
  setFieldValue,
  ...props
}) => {
  return (
    <S.Toggle
      {...{
        label,
        name,
      }}
    >
      <button
        role="switch"
        aria-checked={field.value}
        class={field.value ? "checked" : ""}
        type="button"
        name={name}
        onClick={e => {
          setFieldValue(name, !field.value);
        }}
        {...(placeholder ? { placeholder } : {})}
        {...props}
        {...field}
      >
        <span>{label}</span>
      </button>
    </S.Toggle>
  );
};

Toggle.propTypes = {
  field: PropTypes.object.isRequired, // the field object passed from Formik
  setFieldValue: PropTypes.func.isRequired, // setFieldValue from Formik
  name: PropTypes.string.isRequired, // the name of the field, also used as value key by Formik and the ID of the field
  label: PropTypes.string.isRequired, // the label text for the field, required for accessiblity
};

Toggle.defaultProps = {};

export { Toggle };
