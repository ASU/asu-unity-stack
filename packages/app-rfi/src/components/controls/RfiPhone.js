// @ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Field } from "formik";
import PropTypes from "prop-types";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { RfiLabel, RfiError } from "./controls-helpers";

// Component

const RfiPhone = ({ label, name, id, requiredIcon, helperText }) => {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors, setFieldValue }, meta }) => {
        const isError = meta.touched && meta.error;
        return (
          <div className="form-group">
            <RfiLabel
              label={label}
              name={name}
              id={id}
              requiredIcon={requiredIcon}
            />
            <PhoneInput
              id={id}
              {...field}
              className="form-control"
              placeholder={helperText}
              country="us"
              preferredCountries={["us"]}
              onChange={(phone, country, e, formattedValue) => {
                // Set value so Formik gets it.
                setFieldValue(name, phone);
                // Set Country and CountryOfCitizenship based off phone
                // countryCode.
                // TODO Not ideal that we have implementation details down
                // in this field component, due to the possibility of reuse
                // being compromised; however, if the fields targetted don't
                // exist, no errors are thrown. Better way to do this?
                // @ts-ignore
                const phoneCountryCode = country.countryCode.toUpperCase();
                setFieldValue("Country", phoneCountryCode);
                setFieldValue("CitizenshipCountry", phoneCountryCode);
              }}
            />
            <RfiError isError={isError} metaError={meta.error} />
          </div>
        );
      }}
    </Field>
  );
};

// Note on requiredIcon. Yup required status is not readily available so we
// duplicate the setting in our props got displaying the required icon until
// Formik has a better way to do it.

RfiPhone.defaultProps = {
  // TODO better defaults?
  id: undefined,
  requiredIcon: undefined,
  helperText: undefined,
};

RfiPhone.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  requiredIcon: PropTypes.bool,
  helperText: PropTypes.string,
};

export { RfiPhone };
