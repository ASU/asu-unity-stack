/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";

type RadioOption = {
  /**
   * Radio button label
   */
  label: string;
  gaEvent?: {
    // type: string;
    // ga: string;
    text: string;
    name: string;
    event: string;
    action: string;
    region: string;
    section: string;
  };
  /**
   * Disables a specific radio button
   */
  disabled?: boolean;
};

export interface RadioProps {
  /**
   * Radio button selected state value or default value.
   * `${id}_option_${index + 1}`
   */
  selected?: string;
  /**
   * React useState custom setter
   */
  setSelected?: React.Dispatch<React.SetStateAction<string>> | undefined;
  /**
   * Message for valid input
   */
  validMessage?: string;
  /**
   * Message for invalid input or errors
   */
  invalidMessage?: string;
  /**
   * Used for name and id values
   */
  id: string;
  /**
   * The primary group label
   */
  label: string;
  /**
   * Disables all radio buttons
   */
  disabled?: boolean;
  /**
   * Radio button options array
   */
  options: Array<RadioOption>;
}

export const propDefaults: RadioProps = {
  id: "Radios",
  label: "",
  selected: "",
  setSelected: undefined,
  // required: false, // Does this component need a required boolean option?
  disabled: false,
  validMessage: undefined,
  invalidMessage: undefined,
  options: [],
};

export const Radios: React.FC<RadioProps> = ({
  id,
  label,
  validMessage,
  invalidMessage,
  options = [],
  selected,
  setSelected,
  disabled,
} = propDefaults) => {
  const [defaultSelectedState, defaultSetSelected] = React.useState(selected);

  const handleSetSelected = (e: string) => {
    if (setSelected) {
      setSelected(e); // custom setter prop
    } else {
      defaultSetSelected(e); // default set open function
    }
  };

  const getSelectedState = () => {
    if (setSelected) {
      return selected; // custom state value
    } else {
      return defaultSelectedState; // default state value
    }
  };

  const handleOnChange = (e: any, optionValue: string) => {
    handleSetSelected(optionValue);
  };

  const defaultGaEvent = {
    text: "radio button",
    name: "onclick",
    event: "select",
    action: "click",
    region: "main content",
    section: "Default radio",
  };

  const radioButtonGroup = (
    <fieldset
      style={invalidMessage || validMessage ? {} : { marginBottom: "3rem" }}
    >
      <legend
        style={invalidMessage || validMessage ? {} : { marginBottom: "-1rem" }}
      >
        {label}
      </legend>
      {invalidMessage && (
        <small
          id={`${id}InvalidRadiosMsg`}
          className="invalid-feedback is-invalid"
        >
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          {invalidMessage}
        </small>
      )}
      {validMessage && !invalidMessage && (
        <small id={`${id}ValidRadiosMsg`} className="valid-feedback is-valid">
          <span title="Success" className="fa fa-icon fa-check-circle"></span>
          {validMessage}
        </small>
      )}

      {options.map((val, index) => {
        // Note: label and val.label are different values
        // same with disabled and val.disabled
        // one is for the entire group and the
        // other is for individual radio button options
        return (
          <div className="form-radio" key={`${label}${index}`}>
            <label htmlFor={`${id}_label_${index + 1}`}>
              <GaEventWrapper gaData={defaultGaEvent} prefix="input">
                <input
                  type="radio"
                  name={id}
                  id={`${id}_option_${index + 1}`}
                  value={`option_${index + 1}`}
                  onChange={e => handleOnChange(e, `${id}_option_${index + 1}`)}
                  checked={getSelectedState() === `${id}_option_${index + 1}`}
                  disabled={disabled ?? val.disabled ?? false}
                />
              </GaEventWrapper>
              <span>{val.label}</span>
            </label>
          </div>
        );
      })}
    </fieldset>
  );

  return radioButtonGroup;
};
