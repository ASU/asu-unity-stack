/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

export const Radios = () => (
  <form className="uds-form">
    <fieldset>
      <legend>A Group of Radios</legend>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked
          data-ga-input="radio button"
          data-ga-input-name="onclick"
          data-ga-input-event="select"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="Default radio"
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          Default radio
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
          data-ga-input="radio button"
          data-ga-input-name="onclick"
          data-ga-input-event="select"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="Second default radio"
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          Second default radio
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios3"
          value="option3"
          data-ga-input="radio button"
          data-ga-input-name="onclick"
          data-ga-input-event="select"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="Third default radio"
        />
        <label className="form-check-label" htmlFor="exampleRadios3">
          Third default radio
        </label>
      </div>
      <div className="form-check disabled">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios4"
          value="option4"
          disabled
          data-ga-input="radio button"
          data-ga-input-name="onclick"
          data-ga-input-event="select"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="Disabled radio"
        />
        <label className="form-check-label" htmlFor="exampleRadios4">
          Disabled radio
        </label>
      </div>
    </fieldset>

    <fieldset>
      <legend>A Group of Invalid Radios</legend>
      <small id="myInvalidRadiosMsg" className="invalid-feedback is-invalid">
        <span title="Alert" className="fa fa-icon fa-exclamation-triangle"></span>
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
        <span title="Alert" className="fa fa-icon fa-check-circle"></span>Success
        message
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
