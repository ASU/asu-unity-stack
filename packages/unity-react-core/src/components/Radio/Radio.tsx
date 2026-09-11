/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";

export const Radios = props => {
  const [radioOption, setRadioOption] = useState("exampleRadios_option1");

  const radioButtonGroupData = props.options;

  const handleOnChange = (e: any, optionValue: string) => {
    setRadioOption(optionValue);
  };

  const radioButtonGroup = (
    <fieldset
      style={
        radioButtonGroupData.invalidMessage || radioButtonGroupData.validMessage
          ? {}
          : { marginBottom: "3rem" }
      }
    >
      <legend
        style={
          radioButtonGroupData.invalidMessage ||
          radioButtonGroupData.validMessage
            ? {}
            : { marginBottom: "-1rem" }
        }
      >
        {radioButtonGroupData.groupLabel}
      </legend>
      {radioButtonGroupData.invalidMessage && (
        <small
          id={`${radioButtonGroupData.name}InvalidRadiosMsg`}
          className="invalid-feedback is-invalid"
        >
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          {radioButtonGroupData.invalidMessage}
        </small>
      )}
      {radioButtonGroupData.validMessage &&
        !radioButtonGroupData.invalidMessage && (
          <small
            id={`${radioButtonGroupData.name}ValidRadiosMsg`}
            className="valid-feedback is-valid"
          >
            <span title="Success" className="fa fa-icon fa-check-circle"></span>
            {radioButtonGroupData.validMessage}
          </small>
        )}

      {radioButtonGroupData.options.map((val, index) => {
        const { label, disabled } = val;
        return (
          <div
            className="form-radio"
            key={`${radioButtonGroupData.groupLabel}${index}`}
          >
            <label htmlFor={`${radioButtonGroupData.name}_label_${index + 1}`}>
              <input
                type="radio"
                name={radioButtonGroupData.name}
                id={`${radioButtonGroupData.name}_option_${index + 1}`}
                value={`option${index + 1}`}
                onChange={e =>
                  handleOnChange(
                    e,
                    `${radioButtonGroupData.name}_option${index + 1}`
                  )
                }
                checked={
                  radioOption ===
                  `${radioButtonGroupData.name}_option${index + 1}`
                }
                disabled={disabled ?? false}
                data-ga-input="radio button"
                data-ga-input-name="onclick"
                data-ga-input-event="select"
                data-ga-input-action="click"
                data-ga-input-region="main content"
                data-ga-input-section="Default radio"
              />
              <span>{label}</span>
            </label>
          </div>
        );
      })}
    </fieldset>
  );

  // return radioButtonGroup

  return (
    <form className="uds-form">
      {radioButtonGroup}
      <fieldset>
        <legend>A Group of Invalid Radios</legend>
        <small id="myInvalidRadiosMsg" className="invalid-feedback is-invalid">
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          Form error message
        </small>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="invalidRadios"
            aria-describedby="myInvalidRadiosMsg"
            id="invalidRadios1"
            value="option1"
            checked
            data-ga-input="radio button"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="Default radio"
          />
          <label className="form-check-label" htmlFor="invalidRadios1">
            Default radio
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="invalidRadios"
            aria-describedby="myInvalidRadiosMsg"
            id="invalidRadios2"
            value="option2"
            data-ga-input="radio button"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="Second default radio"
          />
          <label className="form-check-label" htmlFor="invalidRadios2">
            Second default radio
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="invalidRadios"
            aria-describedby="myInvalidRadiosMsg"
            id="invalidRadios3"
            value="option3"
            data-ga-input="radio button"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="Third default radio"
          />
          <label className="form-check-label" htmlFor="invalidRadios3">
            Third default radio
          </label>
        </div>
        <div className="form-check disabled">
          <input
            className="form-check-input"
            type="radio"
            name="invalidRadios"
            aria-describedby="myInvalidRadiosMsg"
            id="invalidRadios4"
            value="option4"
            disabled
            data-ga-input="radio button"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="Disabled radio"
          />
          <label className="form-check-label" htmlFor="invalidRadios4">
            Disabled radio
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>A Group of Valid Radios</legend>
        <small id="myValidRadiosMsg" className="valid-feedback is-valid">
          <span title="Success" className="fa fa-icon fa-check-circle"></span>
          Success message
        </small>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="validRadios"
            aria-describedby="myValidRadiosMsg"
            id="validRadios1"
            value="option1"
            checked
            data-ga-input="radio button"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="Default radio"
          />
          <label className="form-check-label" htmlFor="validRadios1">
            Default radio
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="validRadios"
            aria-describedby="myValidRadiosMsg"
            id="validRadios2"
            value="option2"
            data-ga-input="radio button"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="Second default radio"
          />
          <label className="form-check-label" htmlFor="validRadios2">
            Second default radio
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="validRadios"
            aria-describedby="myValidRadiosMsg"
            id="validRadios3"
            value="option3"
            data-ga-input="radio button"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="Third default radio"
          />
          <label className="form-check-label" htmlFor="validRadios3">
            Third default radio
          </label>
        </div>
        <div className="form-check disabled">
          <input
            className="form-check-input"
            type="radio"
            name="validRadios"
            aria-describedby="myValidRadiosMsg"
            id="validRadios4"
            value="option4"
            disabled
            data-ga-input="radio button"
            data-ga-input-name="onclick"
            data-ga-input-event="select"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="Disabled radio"
          />
          <label className="form-check-label" htmlFor="validRadios4">
            Disabled radio
          </label>
        </div>
      </fieldset>
    </form>
  );
};
