/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";

type CheckboxOption = {
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
};

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
  // selected: "",
  // setSelected: undefined,
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
  // selected,
  // setSelected,
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

  const checkboxButtonGroup = (
    <fieldset
      style={
        invalidMessage || validMessage
          ? { marginTop: label ? 0 : "-1rem" }
          : { marginBottom: "3rem", marginTop: label ? 0 : "-1rem" }
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
        <small
          id={`${id}InvalidCheckMsg`}
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
        <small id={`${id}ValidCheckMsg`} className="valid-feedback is-valid">
          <span title="Success" className="fa fa-icon fa-check-circle"></span>
          {validMessage}
        </small>
      )}

      {options.map((val, index) => {
        const { checked, setChecked } = val;

        const [defaultCheckedState, defaultSetChecked] =
          React.useState(checked);

        const handleSetChecked = (e: boolean) => {
          console.log("setChecked:", e);
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

        // Note: label and val.label are different values
        // same with disabled and val.disabled
        // same with invalidMessage and val.invalidMessage
        // same with validMessage and val.validMessage
        // one is for the entire group and the
        // other is for individual checkbox button options
        return (
          <div className="form-checkbox" key={`${label}${index}`}>
            <label htmlFor={`${id}_label_${index + 1}`}>
              <GaEventWrapper gaData={defaultGaEvent} prefix="input">
                <input
                  type="checkbox"
                  name={id}
                  id={`${id}_option_${index + 1}`}
                  value={`option_${index + 1}`}
                  onChange={e => handleOnChange(e, !getCheckedState())}
                  checked={getCheckedState()}
                  disabled={disabled ?? val.disabled ?? false}
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

// Legacy checkbox form (Used for format reference.)
// TODO: Delete this when the new checkbox component is completed
export const CheckboxesLegacy = () => {
  return (
    // <form className="uds-form">
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="loneCheckbox1"
          value="option1"
          data-ga-input="checkbox"
          data-ga-input-name="onclick"
          data-ga-input-event="select"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="I like checkboxes"
        />
        <label className="form-check-label" htmlFor="loneCheckbox1">
          I like checkboxes
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="loneCheckbox2"
          value="option1"
          data-ga-input="checkbox"
          data-ga-input-name="onclick"
          data-ga-input-event="select"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="Multi-line content Multi-line content Multi-line content..."
        />
        <label className="form-check-label" htmlFor="loneCheckbox2">
          Multi-line content Multi-line content Multi-line content Multi-line
          content Multi-line content Multi-line content Multi-line content
          Multi-line content Multi-line content Multi-line content Multi-line
          content Multi-line content Multi-line content Multi-line content
          Multi-line content Multi-line content Multi-line content Multi-line
          content Multi-line content Multi-line content Multi-line content
          Multi-line content Multi-line content Multi-line content Multi-line
          content Multi-line content Multi-line content Multi-line content
          Multi-line content Multi-line content Multi-line content Multi-line
          content Multi-line content Multi-line content Multi-line content
          Multi-line content Multi-line content Multi-line content Multi-line
          content Multi-line content Multi-line content Multi-line content
          Multi-line content Multi-line content
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          aria-describedby="myValidCheckMsg"
          id="validLoneCheckbox"
          value="option1"
          checked
          data-ga-input="checkbox"
          data-ga-input-name="onclick"
          data-ga-input-event="select"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="I accept"
        />
        <label className="form-check-label" htmlFor="validLoneCheckbox">
          I accept
        </label>
        <small id="myValidCheckMsg" className="valid-feedback is-valid">
          <span title="Success" className="fa fa-icon fa-check-circle"></span>
          Success message
        </small>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          aria-describedby="myInvalidCheckMsg"
          id="invalidLoneCheckbox"
          value="option1"
          data-ga-input="checkbox"
          data-ga-input-name="onclick"
          data-ga-input-event="select"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="I also accept"
        />
        <label className="form-check-label" htmlFor="invalidLoneCheckbox">
          I also accept
        </label>
        <small id="myInvalidCheckMsg" className="invalid-feedback is-invalid">
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          Form error message
        </small>
      </div>

      <fieldset>
        <legend>A Group of Checkboxes</legend>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkbox1"
            value="option1"
            data-ga-input="checkbox"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="1"
          />
          <label className="form-check-label" htmlFor="checkbox1">
            1
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkbox2"
            value="option2"
            checked
            data-ga-input="checkbox"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="2"
          />
          <label className="form-check-label" htmlFor="checkbox2">
            2
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkbox3"
            value="option3"
            disabled
            data-ga-input="checkbox"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="3"
          />
          <label className="form-check-label" htmlFor="checkbox3">
            3 (disabled)
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>A Group of Valid Checkboxes</legend>
        <small id="myValidCheckboxMsg" className="valid-feedback is-valid">
          <span title="Success" className="fa fa-icon fa-check-circle"></span>
          Success message
        </small>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            aria-describedby="myValidCheckboxMsg"
            id="validCheckbox1"
            value="option1"
            data-ga-input="checkbox"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="1"
          />
          <label className="form-check-label" htmlFor="validCheckbox1">
            1
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            aria-describedby="myValidCheckboxMsg"
            id="validCheckbox2"
            value="option2"
            checked
            data-ga-input="checkbox"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="2"
          />
          <label className="form-check-label" htmlFor="validCheckbox2">
            2
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            aria-describedby="myValidCheckboxMsg"
            id="validCheckbox3"
            value="option3"
            disabled
            data-ga-input="checkbox"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="3"
          />
          <label className="form-check-label" htmlFor="validCheckbox3">
            3 (disabled)
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>A Group of Invalid Checkboxes</legend>
        <small
          id="myInvalidCheckboxMsg"
          className="invalid-feedback is-invalid"
        >
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          Form error message
        </small>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            aria-describedby="myInvalidCheckboxMsg"
            id="invalidCheckbox1"
            value="option1"
            data-ga-input="checkbox"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="1"
          />
          <label className="form-check-label" htmlFor="invalidCheckbox1">
            1
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            aria-describedby="myInvalidCheckboxMsg"
            id="invalidCheckbox2"
            value="option2"
            checked
            data-ga-input="checkbox"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="2"
          />
          <label className="form-check-label" htmlFor="invalidCheckbox2">
            2
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            aria-describedby="myInvalidCheckboxMsg"
            id="invalidCheckbox3"
            value="option3"
            disabled
            data-ga-input="checkbox"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="3"
          />
          <label className="form-check-label" htmlFor="invalidCheckbox3">
            3 (disabled)
          </label>
        </div>
      </fieldset>
    </>
    // </form>
  );
};
