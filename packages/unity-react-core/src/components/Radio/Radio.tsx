/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";

interface RadioOption extends React.AriaAttributes {
  /**
   * Radio button label
   */
  label: string;
  /**
   * Input value. Will use the label if not specified.
   */
  value?: string;
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
}

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
  const [defaultSelectedState, defaultSetSelected] = useState(selected);

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

  const invalidMessageID = `${id}InvalidRadiosMsg`;
  const validMessageID = `${id}ValidRadiosMsg`;

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
        <small id={invalidMessageID} className="invalid-feedback is-invalid">
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          {invalidMessage}
        </small>
      )}
      {validMessage && !invalidMessage && (
        <small id={validMessageID} className="valid-feedback is-valid">
          <span title="Success" className="fa fa-icon fa-check-circle"></span>
          {validMessage}
        </small>
      )}

      {options.map((val, index) => {
        const { value, ...ariaProps } = val;

        const idValue = `${id}_option_${index + 1}`;

        // Removes unwanted values from the ariaProps object
        // ts-ignore was used because some of the type values are not set as optional in the CheckboxOption type definition but
        // those values should not appear in the ariaProps object and setting required values to optional is not recommended.
        // Using ...rest instead failed to include the needed aria props and included extra values that aren't needed
        //@ts-ignore
        delete ariaProps["label"];
        delete ariaProps["disabled"];
        delete ariaProps["gaEvent"];
        //@ts-ignore
        delete ariaProps["value"];

        if (!ariaProps["aria-describedby"]) {
          if (invalidMessage) {
            ariaProps["aria-describedby"] = invalidMessageID;
          }
          if (validMessage && !invalidMessage) {
            ariaProps["aria-describedby"] = validMessageID;
          }
        }

        // Note: label and val.label are different values
        // same with disabled and val.disabled
        // one is for the entire group and the
        // other is for individual radio button options
        return (
          <div className="form-radio" key={idValue}>
            <label htmlFor={idValue}>
              <GaEventWrapper gaData={defaultGaEvent} prefix="input">
                <input
                  type="radio"
                  name={id}
                  id={idValue}
                  value={value ?? val.label}
                  onChange={e => handleOnChange(e, idValue)}
                  checked={getSelectedState() === idValue}
                  disabled={disabled ?? val.disabled ?? false}
                  {...ariaProps}
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
