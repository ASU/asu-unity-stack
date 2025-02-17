/* eslint-disable react/jsx-props-no-spreading */
import cx from "classnames";
import React, { ComponentProps, useId } from "react";

import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";

export const displaySizes = ["sm", "md", "lg"] as const;
export const inputValidationFeedback = ["", "valid", "invalid"] as const;

export interface OptionProps extends ComponentProps<"option"> {
  value: string;
  label: string;
}

export const Option: React.FC<OptionProps> = ({ value, label, ...rest }) => {
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  );
};

export interface SelectProps extends ComponentProps<"select"> {
  id?: string;
  label: string;
  /**
   * The size of the input field Defaults to "md"
   */
  displaySize?: (typeof displaySizes)[number];
  feedback?: (typeof inputValidationFeedback)[number];
  validMessage?: string;
  invalidMessage?: string;
  options: OptionProps[];
  selected?: string;
}

const defaultGaEvent = {
  text: "blur",
  name: "onclick",
  event: "form",
  action: "click",
  region: "main content",
  section: "text label",
};

export const propDefaults: SelectProps = {
  id: undefined,
  label: undefined,
  displaySize: "md",
  required: false,
  disabled: false,
  feedback: "",
  validMessage: "Success",
  invalidMessage: "Error",
  options: [],
};

export const Select: React.FC<SelectProps> = ({
  id,
  label,
  displaySize,
  validMessage,
  invalidMessage,
  feedback,
  options = [],
  selected,
  ...rest
} = propDefaults) => {
  const idValue = id || useId();
  const successId = `${idValue}SuccessHelp`;
  const errorId = `${idValue}ErrorHelp`;
  const valid = feedback === "valid";
  const invalid = feedback === "invalid";

  return (
    <div className="form-group">
      <label
        className={cx({ "uds-field-required": rest.required })}
        htmlFor={idValue}
      >
        {rest.required && (
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          />
        )}
        {label}
      </label>
      <GaEventWrapper gaData={defaultGaEvent} prefix="input">
        <select
          className={cx("form-select", {
            "is-valid": valid,
            "is-invalid": invalid,
            "form-control-sm": displaySize === "sm",
            "form-control-lg": displaySize === "lg",
          })}
          name={idValue}
          id={idValue}
          defaultValue={selected}
          {...rest}
        >
          {options.length > 0 &&
            options.map(({ value: optionValue, label: optionLabel }) => (
              <Option
                key={optionValue}
                value={optionValue}
                label={optionLabel}
                // selected={optionValue === selected}
              />
            ))}
        </select>
      </GaEventWrapper>
      {valid && (
        <small id={successId} className="valid-feedback">
          <span title="Alert" className="fa fa-icon fa-exclamation-triangle" />
          {validMessage}
        </small>
      )}
      {invalid && (
        <small id={errorId} className="invalid-feedback">
          <span title="Alert" className="fa fa-icon fa-exclamation-triangle" />
          {invalidMessage}
        </small>
      )}
    </div>
  );
};
