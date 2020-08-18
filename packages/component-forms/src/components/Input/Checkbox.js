/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import * as S from "./styles";
import PropTypes from "prop-types";

const Checkbox = ({ field, name, placeholder, label, setFieldValue, ...props }) => {

  return (
    <S.Checkbox
      {...{
        label,
        name,
        onKeyDown: e => {
          if (e.which == 13) {
            setFieldValue(name, !field.value);
          }
        },
      }}
    >
      <input
        type="checkbox"
        id={name}
        name={name}
        {...(placeholder ? { placeholder } : {})}
        {...props}
        {...field}
      />
    </S.Checkbox>
  );
};

Checkbox.propTypes = {
  field: PropTypes.object.isRequired, // the field object passed from Formik
  setFieldValue: PropTypes.func.isRequired, // setFieldValue from Formik
  name: PropTypes.string.isRequired, // the name of the field, also used as value key by Formik and the ID of the field
  label: PropTypes.string.isRequired, // the label text for the field, required for accessiblity
};

Checkbox.defaultProps = {};

export { Checkbox };
