/* eslint-disable react/jsx-props-no-spreading */
import cx from "classnames";
import React, { ComponentProps, useId } from "react";

import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";

export const textAreaDisplaySizes = ["sm", "md", "lg"] as const;
export const textAreaInputValidationFeedback = ["", "valid", "invalid"] as const;

export interface TextareaProps extends ComponentProps<"textarea"> {
  id?: string;
  label: string;
  /**
   * The size of the input field Defaults to "md"
   */
  displaySize?: (typeof textAreaDisplaySizes)[number];
  feedback?: (typeof textAreaInputValidationFeedback)[number];
  validMessage?: string;
  invalidMessage?: string;
  rows?: number;
}

const defaultGaEvent = {
  text: "blur",
  name: "onclick",
  event: "form",
  action: "click",
  region: "main content",
  section: "text label",
};

export const textAreaPropDefaults: TextareaProps = {
  id: undefined,
  label: "",
  placeholder: undefined,
  displaySize: "md",
  required: false,
  disabled: false,
  feedback: "",
  validMessage: "Success",
  invalidMessage: "Error",
};

export const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  displaySize,
  validMessage,
  invalidMessage,
  feedback,
  ...rest
} = textAreaPropDefaults) => {
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
        <textarea
          className={cx("form-control", {
            "is-valid": valid,
            "is-invalid": invalid,
            "form-control-sm": displaySize === "sm",
            "form-control-lg": displaySize === "lg",
          })}
          name={idValue}
          id={idValue}
          {...rest}
        />
      </GaEventWrapper>
      {valid && (
        <small id={successId} className="valid-feedback">
          <span
            title="Success"
            className="fa fa-icon fa-check-circle">
          </span>
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
