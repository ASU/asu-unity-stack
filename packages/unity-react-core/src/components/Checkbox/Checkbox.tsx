/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

export const Checkboxes = () => (
  <form className="uds-form">
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
        <span title="Alert" className="fa fa-icon fa-check-circle"></span>Success
        message
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
        <span title="Alert" className="fa fa-icon fa-exclamation-triangle"></span>
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
        <span title="Alert" className="fa fa-icon fa-check-circle"></span>Success
        message
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
      <small id="myInvalidCheckboxMsg" className="invalid-feedback is-invalid">
        <span title="Alert" className="fa fa-icon fa-exclamation-triangle"></span>
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
  </form>
);
