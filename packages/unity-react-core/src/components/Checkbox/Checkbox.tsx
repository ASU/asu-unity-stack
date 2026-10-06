/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";

interface CheckboxOption extends React.AriaAttributes {
  /**
   * Checkbox button checked state value or default value.
   */
  checked?: boolean;
  /**
   * React useState custom setter
   */
  setChecked?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  /**
   * Checkbox button label
   */
  label: string;
  /**
   * Input value. Will use the label if not specified.
   */
  value?: string;
  /**
   * Message for valid input
   */
  validMessage?: string;
  /**
   * Message for invalid input or errors
   */
  invalidMessage?: string;
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
   * Disables a specific checkbox button
   */
  disabled?: boolean;
}

export interface CheckboxProps {
  /**
   * Group Message for valid input
   */
  validMessage?: string;
  /**
   * Group Message for invalid input or errors
   */
  invalidMessage?: string;
  /**
   * Used for name and id values
   * Checkbox inputs use the format `${id}_option_${index + 1}`
   */
  id: string;
  /**
   * Optional group label
   */
  label?: string;
  /**
   * Disables all checkbox buttons
   */
  disabled?: boolean;
  /**
   * Checkbox button options array
   */
  options: Array<CheckboxOption>;
}

export const propDefaults: CheckboxProps = {
  id: "Checkboxes",
  label: "",
  // required: false, // Does this component need a required boolean option?
  disabled: false,
  validMessage: undefined,
  invalidMessage: undefined,
  options: [],
};

export const Checkboxes: React.FC<CheckboxProps> = ({
  id,
  label,
  validMessage,
  invalidMessage,
  options = [],
  disabled,
} = propDefaults) => {
  const defaultGaEvent = {
    text: "checkbox button",
    name: "onclick",
    event: "select",
    action: "click",
    region: "main content",
    section: "Default checkbox",
  };

  const invalidMessageID = `${id}InvalidCheckMsg`;
  const validMessageID = `${id}ValidCheckMsg`;

  const checkboxButtonGroup = (
    <fieldset
      style={
        invalidMessage || validMessage
          ? { marginBottom: "3rem", marginTop: label ? 0 : "-1rem" }
          : {
              marginBottom: options.length === 1 ? "2rem" : "3rem",
              marginTop: label ? 0 : "-1rem",
            }
      }
    >
      {label && (
        <legend
          style={
            invalidMessage || validMessage ? {} : { marginBottom: "-1rem" }
          }
        >
          {label}
        </legend>
      )}
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
        const { checked, setChecked, gaEvent, value, ...ariaProps } = val;

        const [defaultCheckedState, defaultSetChecked] = useState(
          checked ?? false
        );

        const handleSetChecked = (e: boolean) => {
          if (setChecked) {
            setChecked(e); // custom setter prop
          } else {
            defaultSetChecked(e); // default set open function
          }
        };

        const getCheckedState = () => {
          if (setChecked) {
            return checked; // custom state value
          } else {
            return defaultCheckedState; // default state value
          }
        };

        const handleOnChange = (e: any, optionValue: boolean) => {
          handleSetChecked(optionValue);
        };

        const idValue = `${id}_option_${index + 1}`;

        // Removes unwanted values from the ariaProps object
        // ts-ignore was used because some of the type values are not set as optional in the CheckboxOption type definition but
        // those values should not appear in the ariaProps object and setting required values to optional is not recommended.
        // Using ...rest instead failed to include the needed aria props and included extra values that aren't needed
        delete ariaProps["validMessage"];
        delete ariaProps["invalidMessage"];
        //@ts-ignore
        delete ariaProps["label"];
        delete ariaProps["disabled"];
        //@ts-ignore
        delete ariaProps["checked"];
        //@ts-ignore
        delete ariaProps["setChecked"];
        //@ts-ignore
        delete ariaProps["gaEvent"];
        //@ts-ignore
        delete ariaProps["value"];

        if (!ariaProps["aria-describedby"]) {
          if (invalidMessage || val.invalidMessage) {
            ariaProps["aria-describedby"] = invalidMessageID;
          }
          if (
            validMessage ||
            (val.validMessage && !invalidMessage && !val.invalidMessage)
          ) {
            ariaProps["aria-describedby"] = validMessageID;
          }
        }

        // Note: label and val.label are different values
        // same with disabled and val.disabled
        // same with invalidMessage and val.invalidMessage
        // same with validMessage and val.validMessage
        // one is for the entire group and the
        // other is for individual checkbox button options
        return (
          <div className="form-checkbox" key={idValue}>
            <label htmlFor={idValue}>
              <GaEventWrapper gaData={gaEvent ?? defaultGaEvent} prefix="input">
                <input
                  tabIndex={0}
                  type="checkbox"
                  name={id}
                  id={idValue}
                  value={value ?? val.label}
                  onChange={e => handleOnChange(e, !getCheckedState())}
                  checked={getCheckedState()}
                  disabled={disabled ?? val.disabled ?? false}
                  {...ariaProps}
                />
              </GaEventWrapper>
              <span>{val.label}</span>
            </label>
            {val.invalidMessage && (
              <small
                id={`${id}InvalidCheckMsg`}
                className="invalid-feedback is-invalid"
              >
                <span
                  title="Alert"
                  className="fa fa-icon fa-exclamation-triangle"
                ></span>
                {val.invalidMessage}
              </small>
            )}
            {val.validMessage && !val.invalidMessage && (
              <small
                id={`${id}ValidCheckMsg`}
                className="valid-feedback is-valid"
              >
                <span
                  title="Success"
                  className="fa fa-icon fa-check-circle"
                ></span>
                {val.validMessage}
              </small>
            )}
          </div>
        );
      })}
    </fieldset>
  );

  return checkboxButtonGroup;
};

// CheckArray and MultiCheckboxTest can be used to test displaying multiple checkbox examples on one page
type CheckArray = {
  checkboxesList: Array<CheckboxProps>;
};

export const MultiCheckboxTest: React.FC<CheckArray> = props => {
  const checkboxButtonGroup = props.checkboxesList.map(
    (val: CheckboxProps, index: number) => {
      return <Checkboxes {...val} key={`checkboxButtonGroup${index}`} />;
    }
  );

  return checkboxButtonGroup;
};
