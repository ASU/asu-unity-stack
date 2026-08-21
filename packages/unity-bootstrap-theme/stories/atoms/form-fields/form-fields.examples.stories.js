import React from "react";
import { defaultDecorator } from "@asu/shared";

const backgroundOptions = {
  "Default (none)": "",
  "White": "uds-form-white",
  "Faint (gray 1)": "uds-form-faint-bg",
  "Light (gray 2)": "uds-form-light-bg",
  "Dark (gray 7)": "uds-form-dark-bg",
};

const backgroundColors = {
  "": undefined,
  "uds-form-white": "white",
  "uds-form-faint-bg": "#fafafa",
  "uds-form-light-bg": "#e8e8e8",
  "uds-form-dark-bg": "#191919",
};

export default {
  title: "Atoms/Form Fields/Examples",
  decorators: [defaultDecorator],
  parameters: {
    docs: {
      description: {
        component:
          "Please take note that gray color classes have been updated according to brand guidelines. The following classes have been deprecated and should no longer be used: .uds-form.uds-form-gray1, .uds-form.uds-form-gray2, .uds-form.uds-form-gray7. Please use the updated classes instead: .uds-form.uds-form-faint-bg, .uds-form.uds-form-light-bg, .uds-form.uds-form-dark-bg.",
      },
    },
  },
  args: {
    background: "",
  },
  argTypes: {
    background: {
      name: "Background",
      options: Object.keys(backgroundOptions),
      mapping: backgroundOptions,
      control: { type: "select" },
    },
  },
};

export const TextInputs = args => (
  <div style={{ backgroundColor: backgroundColors[args.background] }}>
    <form className={`uds-form ${args.background}`}>
      <div className="form-group">
        <label htmlFor="exampleDefaultInput">Default text input label</label>
        <input
          type="text"
          className="form-control"
          id="exampleDefaultInput"
          placeholder="Helper text"
          data-ga-input="blur"
          data-ga-input-name="onclick"
          data-ga-input-event="form"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="text label"
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFocusInput">Focus text input label</label>
        <input
          type="text"
          className="form-control"
          id="exampleFocusInput"
          placeholder="Helper text"
          defaultValue="Focus me to see focus style"
          data-ga-input="blur"
          data-ga-input-name="onclick"
          data-ga-input-event="form"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="text label"
        />
      </div>

      <div className="form-group">
        <label
          htmlFor="exampleDisabledInput"
          className="uds-form-label-disabled"
        >
          Disabled text input label
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleDisabledInput"
          placeholder="Helper text"
          disabled
          data-ga-input="blur"
          data-ga-input-name="onclick"
          data-ga-input-event="form"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="text label"
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleErrorInput">
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          ></span>
          Error text input label on a required field
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          id="exampleErrorInput"
          aria-describedby="errorHelp"
          placeholder="Helper text"
          aria-required="true"
          required
          data-ga-input="blur"
          data-ga-input-name="onclick"
          data-ga-input-event="form"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="text label"
        />
        <small id="errorHelp" className="form-text invalid-feedback">
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          Form error message
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="exampleSuccessInput">Success text input label</label>
        <input
          type="text"
          className="form-control is-valid"
          id="exampleSuccessInput"
          aria-describedby="successHelp"
          placeholder="Helper text"
          defaultValue="Input text"
          data-ga-input="blur"
          data-ga-input-name="onclick"
          data-ga-input-event="form"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="text label"
        />
        <small id="successHelp" className="form-text valid-feedback">
          <span title="Success" className="fa fa-icon fa-check-circle"></span>
          Success message
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="exampleTrailingIconInput">
          Trailing icon text input label
        </label>
        <div className="input-group input-group-trailing-icon">
          <input
            type="text"
            className="form-control"
            id="exampleTrailingIconInput"
            placeholder="Helper text"
            data-ga-input="blur"
            data-ga-input-name="onclick"
            data-ga-input-event="form"
            data-ga-input-action="click"
            data-ga-input-region="main content"
            data-ga-input-section="text label"
          />
          <span className="far fa-icon fa-calendar" aria-hidden="true"></span>
        </div>
      </div>
    </form>
  </div>
);

export const Textareas = args => (
  <div style={{ backgroundColor: backgroundColors[args.background] }}>
    <form className={`uds-form ${args.background}`}>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextareaDefault">
          Default textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextareaDefault"
          rows="3"
          placeholder="Enter your textarea content..."
          data-ga-input="blur"
          data-ga-input-name="onclick"
          data-ga-input-event="form"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="text label"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextareaFocus">Focus textarea</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextareaFocus"
          rows="3"
          defaultValue="Focus here to see the focus state."
          data-ga-input="blur"
          data-ga-input-name="onclick"
          data-ga-input-event="form"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="text label"
        ></textarea>
      </div>

      <div className="form-group">
        <label
          htmlFor="exampleFormControlTextareaDisabled"
          className="uds-form-label-disabled"
        >
          Disabled textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextareaDisabled"
          rows="3"
          placeholder="I got some content."
          disabled
          data-ga-input="blur"
          data-ga-input-name="onclick"
          data-ga-input-event="form"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="text label"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextareaError">Error textarea</label>
        <textarea
          className="form-control is-invalid"
          aria-describedby="errorTextareaHelp"
          id="exampleFormControlTextareaError"
          rows="3"
          data-ga-input="blur"
          data-ga-input-name="onclick"
          data-ga-input-event="form"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="text label"
        ></textarea>
        <small
          id="errorTextareaHelp"
          className="form-textarea invalid-feedback"
        >
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          Form error message
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextareaSuccess">
          Success textarea
        </label>
        <textarea
          className="form-control is-valid"
          aria-describedby="successTextareaHelp"
          id="exampleFormControlTextareaSuccess"
          rows="3"
          defaultValue="Agreeable content was entered."
          data-ga-input="blur"
          data-ga-input-name="onclick"
          data-ga-input-event="form"
          data-ga-input-action="click"
          data-ga-input-region="main content"
          data-ga-input-section="text label"
        ></textarea>
        <small
          id="successTextareaHelp"
          className="form-textarea valid-feedback"
        >
          <span title="Success" className="fa fa-icon fa-check-circle"></span>
          Success message
        </small>
      </div>
    </form>
  </div>
);

export const Checkboxes = args => (
  <div style={{ backgroundColor: backgroundColors[args.background] }}>
    <form className={`uds-form ${args.background}`}>
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
          data-ga-input-section="Multi-line content..."
        />
        <label className="form-check-label" htmlFor="loneCheckbox2">
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
          defaultChecked
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
            defaultChecked
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
            defaultChecked
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
            defaultChecked
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
          />
          <label className="form-check-label" htmlFor="invalidCheckbox3">
            3 (disabled)
          </label>
        </div>
      </fieldset>
    </form>
  </div>
);

export const Radios = args => (
  <div style={{ backgroundColor: backgroundColors[args.background] }}>
    <form className={`uds-form ${args.background}`}>
      <fieldset>
        <legend>A Group of Radios</legend>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            defaultChecked
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
            defaultChecked
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
            defaultChecked
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
          />
          <label className="form-check-label" htmlFor="validRadios4">
            Disabled radio
          </label>
        </div>
      </fieldset>
    </form>
  </div>
);

export const Selects = args => (
  <div style={{ backgroundColor: backgroundColors[args.background] }}>
    <form className={`uds-form ${args.background}`}>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Example select</label>
        <select
          className="form-select"
          id="exampleFormControlSelect1"
          data-ga-input="select"
          data-ga-input-name="onclick"
          data-ga-input-event="select"
          data-ga-input-action="click"
          data-ga-input-region="main content"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlSelect3">
          Example select with server-side validation
        </label>
        <select
          className="form-select is-valid"
          id="exampleFormControlSelect3"
          aria-describedby="myValidSelectMsg"
          data-ga-input="select"
          data-ga-input-name="onclick"
          data-ga-input-event="select"
          data-ga-input-action="click"
          data-ga-input-region="main content"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <small id="myValidSelectMsg" className="valid-feedback is-valid">
          <span title="Success" className="fa fa-icon fa-check-circle"></span>
          Success message
        </small>
      </div>

      <div className="alert alert-info" role="alert">
        <div className="alert-icon">
          <span
            title="Information"
            className="fa fa-icon fa-info-circle"
          ></span>
        </div>
        <div className="alert-content">
          Wherever possible, use checkboxes instead of multi-selects because of
          the difficulty they present to people using assistive technologies and
          keyboard only. For a deep dive into the issues with multi-selects as
          well as recommendations, see{" "}
          <a href="https://www.24a11y.com/2019/select-your-poison/">
            https://www.24a11y.com/2019/select-your-poison/
          </a>
          .
        </div>
        <div className="alert-close">
          <button
            type="button"
            className="btn btn-circle btn-circle-alt-white close"
            aria-label="Close"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">
          Example multiple select
        </label>
        <select
          multiple
          className="form-select"
          id="exampleFormControlSelect2"
          data-ga-input="select"
          data-ga-input-name="onclick"
          data-ga-input-event="select"
          data-ga-input-action="click"
          data-ga-input-region="main content"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlSelect4">
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          ></span>
          Example multiple select - required with server-side invalidation
        </label>
        <select
          multiple
          className="form-select is-invalid"
          id="exampleFormControlSelect4"
          aria-describedby="myInvalidSelectMsg"
          aria-required="true"
          required
          data-ga-input="select"
          data-ga-input-name="onclick"
          data-ga-input-event="select"
          data-ga-input-action="click"
          data-ga-input-region="main content"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <small id="myInvalidSelectMsg" className="invalid-feedback is-invalid">
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          Form error message
        </small>
      </div>
    </form>
  </div>
);

export const KitchenSinkForm = args => {
  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.add("was-validated");
  };

  return (
    <div style={{ backgroundColor: backgroundColors[args.background] }}>
      <p>
        <a href="https://getbootstrap.com/docs/5.0/forms/overview/">
          Bootstrap 5 form docs
        </a>
      </p>
      <p>
        Click <strong>Submit</strong> to trigger native browser validation. The
        form adds the <code>was-validated</code> class on submit, which
        activates Bootstrap&apos;s <code>:valid</code> / <code>:invalid</code>{" "}
        pseudo-class styling on all fields.
      </p>

      <form
        className={`uds-form needs-validation ${args.background}`}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="ksTextInput">
            <span
              title="Required"
              className="fa fa-icon fa-circle uds-field-required"
            ></span>
            Text input (required)
          </label>
          <input
            type="text"
            className="form-control"
            id="ksTextInput"
            placeholder="Enter some text"
            aria-describedby="ksTextInputFeedback"
            aria-required="true"
            required
          />
          <small
            id="ksTextInputFeedback"
            className="form-text invalid-feedback"
          >
            <span
              title="Alert"
              className="fa fa-icon fa-exclamation-triangle"
            ></span>
            This field is required.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="ksEmailInput">
            <span
              title="Required"
              className="fa fa-icon fa-circle uds-field-required"
            ></span>
            Email input (required)
          </label>
          <input
            type="email"
            className="form-control"
            id="ksEmailInput"
            placeholder="name@example.com"
            aria-describedby="ksEmailFeedback"
            aria-required="true"
            required
          />
          <small id="ksEmailFeedback" className="form-text invalid-feedback">
            <span
              title="Alert"
              className="fa fa-icon fa-exclamation-triangle"
            ></span>
            Please enter a valid email address.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="ksLgInput">Large input (optional)</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="ksLgInput"
            placeholder="Optional large input"
            aria-describedby="ksLgInputFeedback"
          />
          <small id="ksLgInputFeedback" className="form-text valid-feedback">
            <span title="Success" className="fa fa-icon fa-check-circle"></span>
            Looks good!
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="ksSmInput" className="uds-form-label-disabled">
            Small input (disabled)
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="ksSmInput"
            placeholder="Disabled field"
            disabled
          />
        </div>

        <div className="form-group">
          <label htmlFor="ksTextarea">
            <span
              title="Required"
              className="fa fa-icon fa-circle uds-field-required"
            ></span>
            Textarea (required)
          </label>
          <textarea
            className="form-control"
            id="ksTextarea"
            rows="3"
            placeholder="Tell us more..."
            aria-describedby="ksTextareaFeedback"
            aria-required="true"
            required
          ></textarea>
          <small
            id="ksTextareaFeedback"
            className="form-textarea invalid-feedback"
          >
            <span
              title="Alert"
              className="fa fa-icon fa-exclamation-triangle"
            ></span>
            Please provide a response.
          </small>
        </div>

        <fieldset>
          <legend>
            <span
              title="Required"
              className="fa fa-icon fa-circle uds-field-required"
            ></span>
            Radio group (required)
          </legend>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ksRadios"
              id="ksRadio1"
              value="option1"
              aria-required="true"
              required
            />
            <label className="form-check-label" htmlFor="ksRadio1">
              Option 1
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ksRadios"
              id="ksRadio2"
              value="option2"
              aria-required="true"
              required
            />
            <label className="form-check-label" htmlFor="ksRadio2">
              Option 2
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ksRadios"
              id="ksRadio3"
              value="option3"
              aria-required="true"
              required
            />
            <label className="form-check-label" htmlFor="ksRadio3">
              Option 3
            </label>
            <small className="invalid-feedback">
              <span
                title="Alert"
                className="fa fa-icon fa-exclamation-triangle"
              ></span>
              Please select an option.
            </small>
          </div>
        </fieldset>

        <div className="form-group">
          <label htmlFor="ksSelect">
            <span
              title="Required"
              className="fa fa-icon fa-circle uds-field-required"
            ></span>
            Select (required)
          </label>
          <select
            className="form-select"
            id="ksSelect"
            aria-describedby="ksSelectFeedback"
            aria-required="true"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Choose an option...
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <small id="ksSelectFeedback" className="form-text invalid-feedback">
            <span
              title="Alert"
              className="fa fa-icon fa-exclamation-triangle"
            ></span>
            Please select a value.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="ksMultiSelect">Multiple select (optional)</label>
          <select
            multiple
            className="form-select"
            id="ksMultiSelect"
            aria-describedby="ksMultiSelectFeedback"
          >
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
          </select>
          <small
            id="ksMultiSelectFeedback"
            className="form-text valid-feedback"
          >
            <span title="Success" className="fa fa-icon fa-check-circle"></span>
            Looks good!
          </small>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="ksCheckbox1"
            value="terms"
            aria-describedby="ksCheckboxFeedback"
            aria-required="true"
            required
          />
          <label className="form-check-label" htmlFor="ksCheckbox1">
            <span
              title="Required"
              className="fa fa-icon fa-circle uds-field-required"
            ></span>
            I agree to the terms and conditions (required)
          </label>
          <small id="ksCheckboxFeedback" className="invalid-feedback">
            <span
              title="Alert"
              className="fa fa-icon fa-exclamation-triangle"
            ></span>
            You must agree before submitting.
          </small>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="ksCheckbox2"
            value="newsletter"
          />
          <label className="form-check-label" htmlFor="ksCheckbox2">
            Subscribe to newsletter (optional)
          </label>
        </div>

        <div className="mt-3">
          <button type="submit" className="btn btn-maroon">
            Submit
          </button>
          <button type="reset" className="btn btn-gray ms-2">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
KitchenSinkForm.storyName = "Kitchen Sink Form (Working Validation)";

export const ClientSideValidationNeedsValidation = args => (
  <div style={{ backgroundColor: backgroundColors[args.background] }}>
    <p>
      <a href="https://getbootstrap.com/docs/5.0/forms/validation/">
        Bootstrap 5 form docs regarding validation
      </a>
    </p>

    <p>
      When the form is marked with class &quot;was-validated&quot;,
      browser-based validation styles based on input element type attribute are
      triggered and displayed. This story shows the form <strong>before</strong>{" "}
      validation (needs-validation class).
    </p>

    <form className={`uds-form needs-validation ${args.background}`}>
      <div className="form-group">
        <label htmlFor="myTextInput">
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          ></span>
          Text input required field
        </label>
        <input
          type="text"
          className="form-control"
          id="myTextInput"
          aria-describedby="errorHelp1"
          placeholder="Helper text"
          aria-required="true"
          required
        />
        <small id="errorHelp1" className="form-text invalid-feedback">
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          Form error message
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="myEmailInput">Email input</label>
        <input
          type="email"
          className="form-control"
          id="myEmailInput"
          aria-describedby="errorHelp2"
          placeholder="Helper text"
          defaultValue="notAnEmail"
        />
        <small id="errorHelp2" className="form-text invalid-feedback">
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          Form error message
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="myLgInput">Large input</label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="myLgInput"
          aria-describedby="successHelp1"
          placeholder="Helper text"
          defaultValue="Input text"
        />
        <small id="successHelp1" className="form-text valid-feedback">
          <span title="Success" className="fa fa-icon fa-check-circle"></span>
          Success message
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="mySmInput" className="uds-form-label-disabled">
          Small input
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="mySmInput"
          placeholder="Helper text"
          disabled
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextareaError">
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          ></span>
          Error textarea required field
        </label>
        <textarea
          className="form-control"
          aria-describedby="errorTextareaHelp"
          id="exampleFormControlTextareaError"
          rows="3"
          required
        ></textarea>
        <small
          id="errorTextareaHelp"
          className="form-textarea invalid-feedback"
        >
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          Form error message
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextareaSuccess">
          Success textarea
        </label>
        <textarea
          className="form-control"
          aria-describedby="successTextareaHelp"
          id="exampleFormControlTextareaSuccess"
          rows="3"
          defaultValue="Agreeable content was entered."
        ></textarea>
        <small
          id="successTextareaHelp"
          className="form-textarea valid-feedback"
        >
          <span title="Success" className="fa fa-icon fa-check-circle"></span>
          Success message
        </small>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          aria-describedby="myValidCheckMsg"
          id="validLoneCheckbox"
          value="option1"
          defaultChecked
          aria-required="true"
          required
        />
        <label className="form-check-label" htmlFor="validLoneCheckbox">
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          ></span>
          I accept (required field)
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
          aria-required="true"
          required
        />
        <label className="form-check-label" htmlFor="invalidLoneCheckbox">
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          ></span>
          I also accept (required field)
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
        <legend>
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          ></span>
          A Group of Invalid Radios - required
        </legend>
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
            aria-required="true"
            required
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
            aria-required="true"
            required
          />
          <label className="form-check-label" htmlFor="invalidRadios2">
            Second default radio
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
          />
          <label className="form-check-label" htmlFor="invalidRadios4">
            Disabled radio
          </label>
        </div>
      </fieldset>

      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Example select</label>
        <select className="form-select" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          ></span>
          Example multiple select - required
        </label>
        <select
          multiple
          className="form-select"
          id="exampleFormControlSelect2"
          aria-describedby="myInvalidSelectMsg"
          aria-required="true"
          required
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <small id="myInvalidSelectMsg" className="invalid-feedback is-invalid">
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          Form error message
        </small>
      </div>
    </form>
  </div>
);
ClientSideValidationNeedsValidation.storyName =
  "Client-Side Validation (needs-validation)";

export const ClientSideValidationWasValidated = args => (
  <div style={{ backgroundColor: backgroundColors[args.background] }}>
    <p>
      <a href="https://getbootstrap.com/docs/5.0/forms/validation/">
        Bootstrap 5 form docs regarding validation
      </a>
    </p>

    <p>
      When the form is marked with class &quot;was-validated&quot;,
      browser-based validation styles based on input element type attribute are
      triggered and displayed. This story shows the form <strong>after</strong>{" "}
      validation (was-validated class).
    </p>

    <form className={`uds-form was-validated ${args.background}`}>
      <div className="form-group">
        <label htmlFor="myTextInput">
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          ></span>
          Text input required field
        </label>
        <input
          type="text"
          className="form-control"
          id="myTextInput"
          aria-describedby="errorHelp1"
          placeholder="Helper text"
          aria-required="true"
          required
        />
        <small id="errorHelp1" className="form-text invalid-feedback">
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          Form error message
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="myEmailInput">Email input</label>
        <input
          type="email"
          className="form-control"
          id="myEmailInput"
          aria-describedby="errorHelp2"
          placeholder="Helper text"
          defaultValue="notAnEmail"
        />
        <small id="errorHelp2" className="form-text invalid-feedback">
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          Form error message
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="myLgInput">Large input</label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="myLgInput"
          aria-describedby="successHelp1"
          placeholder="Helper text"
          defaultValue="Input text"
        />
        <small id="successHelp1" className="form-text valid-feedback">
          <span title="Success" className="fa fa-icon fa-check-circle"></span>
          Success message
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="mySmInput" className="uds-form-label-disabled">
          Small input
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="mySmInput"
          placeholder="Helper text"
          disabled
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextareaError">
          Error textarea required
        </label>
        <textarea
          className="form-control"
          aria-describedby="errorTextareaHelp"
          id="exampleFormControlTextareaError"
          rows="3"
          required
        ></textarea>
        <small
          id="errorTextareaHelp"
          className="form-textarea invalid-feedback"
        >
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          Form error message
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextareaSuccess">
          Success textarea
        </label>
        <textarea
          className="form-control"
          aria-describedby="successTextareaHelp"
          id="exampleFormControlTextareaSuccess"
          rows="3"
          defaultValue="Agreeable content was entered."
        ></textarea>
        <small
          id="successTextareaHelp"
          className="form-textarea valid-feedback"
        >
          <span title="Success" className="fa fa-icon fa-check-circle"></span>
          Success message
        </small>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          aria-describedby="myValidCheckMsg"
          id="validLoneCheckbox"
          value="option1"
          defaultChecked
          aria-required="true"
          required
        />
        <label className="form-check-label" htmlFor="validLoneCheckbox">
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          ></span>
          I accept (required)
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
          aria-required="true"
          required
        />
        <label className="form-check-label" htmlFor="invalidLoneCheckbox">
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          ></span>
          I also accept (required)
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
        <legend>
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          ></span>
          A Group of Invalid Radios - required
        </legend>
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
            aria-required="true"
            required
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
            aria-required="true"
            required
          />
          <label className="form-check-label" htmlFor="invalidRadios2">
            Second default radio
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
            defaultChecked
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
          />
          <label className="form-check-label" htmlFor="validRadios2">
            Second default radio
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
          />
          <label className="form-check-label" htmlFor="validRadios4">
            Disabled radio
          </label>
        </div>
      </fieldset>

      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Example select</label>
        <select
          className="form-select"
          id="exampleFormControlSelect1"
          aria-describedby="myValidSelectMsg"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <small id="myValidSelectMsg" className="valid-feedback is-valid">
          <span title="Success" className="fa fa-icon fa-check-circle"></span>
          Success message
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          ></span>
          Example multiple select - required
        </label>
        <select
          multiple
          className="form-select"
          id="exampleFormControlSelect2"
          aria-describedby="myInvalidSelectMsg"
          aria-required="true"
          required
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <small id="myInvalidSelectMsg" className="invalid-feedback is-invalid">
          <span
            title="Alert"
            className="fa fa-icon fa-exclamation-triangle"
          ></span>
          Form error message
        </small>
      </div>
    </form>
  </div>
);
ClientSideValidationWasValidated.storyName =
  "Client-Side Validation (was-validated)";
