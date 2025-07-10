import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Atoms/Form Fields/Examples",
  decorators: [ defaultDecorator ],
  parameters: { controls: { disable: true } },
};

export const TextInputs = () => (
  <form className="uds-form">
    <div className="form-group">
      <label for="exampleDefaultInput">Default text input label</label>
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
      <label for="exampleFocusInput">Focus text input label</label>
      <input
        type="text"
        className="form-control"
        id="exampleFocusInput"
        placeholder="Helper text"
        value="Focus me to see focus style"
        data-ga-input="blur"
        data-ga-input-name="onclick"
        data-ga-input-event="form"
        data-ga-input-action="click"
        data-ga-input-region="main content"
        data-ga-input-section="text label"
      />
    </div>

    <div className="form-group">
      <label for="exampleDisabledInput" className="uds-form-label-disabled">
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
      <label for="exampleErrorInput">
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
        <span title="Alert" className="fa fa-icon fa-exclamation-triangle"></span>
        Form error message
      </small>
    </div>

    <div className="form-group">
      <label for="exampleSuccessInput">Success text input label</label>
      <input
        type="text"
        className="form-control is-valid"
        id="exampleSuccessInput"
        aria-describedby="successHelp"
        placeholder="Helper text"
        value="Input text"
        data-ga-input="blur"
        data-ga-input-name="onclick"
        data-ga-input-event="form"
        data-ga-input-action="click"
        data-ga-input-region="main content"
        data-ga-input-section="text label"
      />
      <small id="successHelp" className="form-text valid-feedback">
        <span title="Alert" className="fa fa-icon fa-check-circle"></span>Success
        message
      </small>
    </div>

    <div className="form-group">
      <label for="exampleTrailingIconInput">
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

    {/* TODO Implement js code to set focus on exampleFocusInput when page loads
      Should only run and be packaged for storybook preview.
      <script>
      document.getElementById('exampleFocusInput').focus();
      </script>
      */}
  </form>
);

export const TextInputsVariousBackgrounds = () => (
  <div>
    <div style={{ backgroundColor: "white" }}>
      {/* This div for Storybook display only. */}
      <form className="uds-form uds-form-white">
        <div className="form-group">
          <label for="exampleDefaultInputWhite">Default text input label</label>
          <input
            type="text"
            className="form-control"
            id="exampleDefaultInputWhite"
            placeholder="Helper text"
          />
        </div>

        <div className="form-group">
          <label for="exampleFocusInputWhite">Focus text input label</label>
          <input
            type="text"
            className="form-control"
            id="exampleFocusInputWhite"
            placeholder="Helper text"
            value="Focus me to see focus style"
          />
        </div>

        <div className="form-group">
          <label
            for="exampleDisabledInputWhite"
            className="uds-form-label-disabled"
          >
            Disabled text input label
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleDisabledInputWhite"
            placeholder="Helper text"
            disabled
          />
        </div>

        <div className="form-group">
          <label for="exampleErrorInputWhite">Error text input label</label>
          <input
            type="text"
            className="form-control is-invalid"
            id="exampleErrorInputWhite"
            aria-describedby="errorHelp"
            placeholder="Helper text"
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
          <label for="exampleSuccessInputWhite">Success text input label</label>
          <input
            type="text"
            className="form-control is-valid"
            id="exampleSuccessInputWhite"
            aria-describedby="successHelp"
            placeholder="Helper text"
            value="Input text"
          />
          <small id="successHelp" className="form-text valid-feedback">
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
            Success message
          </small>
        </div>

        <div className="form-group">
          <label for="exampleTrailingIconInputWhite">
            Trailing icon text input label
          </label>
          <div className="input-group input-group-trailing-icon">
            <input
              type="text"
              className="form-control"
              id="exampleTrailingIconInputWhite"
              placeholder="Helper text"
            />
            <span className="far fa-icon fa-calendar" aria-hidden="true"></span>
          </div>
        </div>
      </form>
    </div>

    <div style={{ backgroundColor: "#fafafa" }}>
      {/* This div for Storybook display only. */}
      <form className="uds-form uds-form-grayscale7">
        <div className="form-group">
          <label for="exampleDefaultInputGrayscale7">Default text input label</label>
          <input
            type="text"
            className="form-control"
            id="exampleDefaultInputGrayscale7"
            placeholder="Helper text"
          />
        </div>

        <div className="form-group">
          <label for="exampleFocusInputGrayscale7">Focus text input label</label>
          <input
            type="text"
            className="form-control"
            id="exampleFocusInputGrayscale7"
            placeholder="Helper text"
            value="Focus me to see focus style"
          />
        </div>

        <div className="form-group">
          <label
            for="exampleDisabledInputGrayscale7"
            className="uds-form-label-disabled"
          >
            Disabled text input label
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleDisabledInputGrayscale7"
            placeholder="Helper text"
            disabled
          />
        </div>

        <div className="form-group">
          <label for="exampleErrorInputGrayscale7">Error text input label</label>
          <input
            type="text"
            className="form-control is-invalid"
            id="exampleErrorInputGrayscale7"
            aria-describedby="errorHelpGrayscale7"
            placeholder="Helper text"
          />
          <small id="errorHelpGrayscale7" className="form-text invalid-feedback">
            <span
              title="Alert"
              className="fa fa-icon fa-exclamation-triangle"
            ></span>
            Form error message
          </small>
        </div>

        <div className="form-group">
          <label for="exampleSuccessInputGrayscale7">Success text input label</label>
          <input
            type="text"
            className="form-control is-valid"
            id="exampleSuccessInputGrayscale7"
            aria-describedby="successHelpGrayscale7"
            placeholder="Helper text"
            value="Input text"
          />
          <small id="successHelpGrayscale7" className="form-text valid-feedback">
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
            Success message
          </small>
        </div>

        <div className="form-group">
          <label for="exampleTrailingIconInputGrayscale7">
            Trailing icon text input label
          </label>
          <div className="input-group input-group-trailing-icon">
            <input
              type="text"
              className="form-control"
              id="exampleTrailingIconInputGrayscale7"
              placeholder="Helper text"
            />
            <span className="far fa-icon fa-calendar" aria-hidden="true"></span>
          </div>
        </div>
      </form>
    </div>

    <div style={{ backgroundColor: "#e8e8e8" }}>
      {/* This div for Storybook display only. */}
      <form className="uds-form uds-form-grayscale6">
        <div className="form-group">
          <label for="exampleDefaultInputGrayscale6">Default text input label</label>
          <input
            type="text"
            className="form-control"
            id="exampleDefaultInputGrayscale6"
            placeholder="Helper text"
          />
        </div>

        <div className="form-group">
          <label for="exampleFocusInputGrayscale6">Focus text input label</label>
          <input
            type="text"
            className="form-control"
            id="exampleFocusInputGrayscale6"
            placeholder="Helper text"
            value="Focus me to see focus style"
          />
        </div>

        <div className="form-group">
          <label
            for="exampleDisabledInputGrayscale6"
            className="uds-form-label-disabled"
          >
            Disabled text input label
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleDisabledInputGrayscale6"
            placeholder="Helper text"
            disabled
          />
        </div>

        <div className="form-group">
          <label for="exampleErrorInputGrayscale6">Error text input label</label>
          <input
            type="text"
            className="form-control is-invalid"
            id="exampleErrorInputGrayscale6"
            aria-describedby="errorHelpGrayscale6"
            placeholder="Helper text"
          />
          <small id="errorHelpGrayscale6" className="form-text invalid-feedback">
            <span
              title="Alert"
              className="fa fa-icon fa-exclamation-triangle"
            ></span>
            Form error message
          </small>
        </div>

        <div className="form-group">
          <label for="exampleSuccessInputGrayscale6">Success text input label</label>
          <input
            type="text"
            className="form-control is-valid"
            id="exampleSuccessInputGrayscale6"
            aria-describedby="successHelpGrayscale6"
            placeholder="Helper text"
            value="Input text"
          />
          <small id="successHelpGrayscale6" className="form-text valid-feedback">
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
            Success message
          </small>
        </div>

        <div className="form-group">
          <label for="exampleTrailingIconInputGrayscale6">
            Trailing icon text input label
          </label>
          <div className="input-group input-group-trailing-icon">
            <input
              type="text"
              className="form-control"
              id="exampleTrailingIconInputGrayscale6"
              placeholder="Helper text"
            />
            <span className="far fa-icon fa-calendar" aria-hidden="true"></span>
          </div>
        </div>
      </form>
    </div>

    <div style={{ backgroundColor: "#191919" }}>
      {/* This div for Storybook display only. */}
      <form className="uds-form uds-form-grayscale1">
        <div className="form-group">
          <label for="exampleDefaultInputGrayscale1">Default text input label</label>
          <input
            type="text"
            className="form-control"
            id="exampleDefaultInputGrayscale1"
            placeholder="Helper text"
          />
        </div>

        <div className="form-group">
          <label for="exampleFocusInputGrayscale1">Focus text input label</label>
          <input
            type="text"
            className="form-control"
            id="exampleFocusInputGrayscale1"
            placeholder="Helper text"
            value="Focus me to see focus style"
          />
        </div>

        <div className="form-group">
          <label
            for="exampleDisabledInputGrayscale1"
            className="uds-form-label-disabled"
          >
            Disabled text input label
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleDisabledInputGrayscale1"
            placeholder="Helper text"
            disabled
          />
        </div>

        <div className="form-group">
          <label for="exampleErrorInputGrayscale1">Error text input label</label>
          <input
            type="text"
            className="form-control is-invalid"
            id="exampleErrorInputGrayscale1"
            aria-describedby="errorHelpGrayscale1"
            placeholder="Helper text"
          />
          <small id="errorHelpGrayscale1" className="form-text invalid-feedback">
            <span
              title="Alert"
              className="fa fa-icon fa-exclamation-triangle"
            ></span>
            Form error message
          </small>
        </div>

        <div className="form-group">
          <label for="exampleSuccessInputGrayscale1">Success text input label</label>
          <input
            type="text"
            className="form-control is-valid"
            id="exampleSuccessInputGrayscale1"
            aria-describedby="successHelpGrayscale1"
            placeholder="Helper text"
            value="Input text"
          />
          <small id="successHelpGrayscale1" className="form-text valid-feedback">
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
            Success message
          </small>
        </div>

        <div className="form-group">
          <label for="exampleTrailingIconInputGrayscale1">
            Trailing icon text input label
          </label>
          <div className="input-group input-group-trailing-icon">
            <input
              type="text"
              className="form-control"
              id="exampleTrailingIconInputGrayscale1"
              placeholder="Helper text"
            />
            <span className="far fa-icon fa-calendar" aria-hidden="true"></span>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export const Textareas = () => (
  <form className="uds-form">
    <div className="form-group">
      <label for="exampleFormControlTextareaDefault">Default textarea</label>
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
      <label for="exampleFormControlTextareaFocus">Focus textarea</label>
      <textarea
        className="form-control"
        id="exampleFormControlTextareaFocus"
        rows="3"
        data-ga-input="blur"
        data-ga-input-name="onclick"
        data-ga-input-event="form"
        data-ga-input-action="click"
        data-ga-input-region="main content"
        data-ga-input-section="text label"
      >
        Focus here to see the focus state.
      </textarea>
    </div>

    <div className="form-group">
      <label
        for="exampleFormControlTextareaDisabled"
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
      <label for="exampleFormControlTextareaError">Error textarea</label>
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
      <small id="errorTextareaHelp" className="form-textarea invalid-feedback">
        <span title="Alert" className="fa fa-icon fa-exclamation-triangle"></span>
        Form error message
      </small>
    </div>

    <div className="form-group">
      <label for="exampleFormControlTextareaSuccess">Success textarea</label>
      <textarea
        className="form-control is-valid"
        aria-describedby="successTextareaHelp"
        id="exampleFormControlTextareaSuccess"
        rows="3"
        data-ga-input="blur"
        data-ga-input-name="onclick"
        data-ga-input-event="form"
        data-ga-input-action="click"
        data-ga-input-region="main content"
        data-ga-input-section="text label"
      >
        Agreeable content was entered.
      </textarea>
      <small id="successTextareaHelp" className="form-textarea valid-feedback">
        <span title="Alert" className="fa fa-icon fa-check-circle"></span>Success
        message
      </small>
    </div>
  </form>
);

export const TextareasMultipleBackgrounds = () => (
  <div>
    <div style={{ backgroundColor: "white" }}>
      {/* This div for Storybook display only. */}
      <form className="uds-form uds-form-white">
        <div className="form-group">
          <label for="exampleFormControlTextareaDefaultWhite">
            Default textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextareaDefaultWhite"
            rows="3"
            placeholder="Enter your textarea content..."
          ></textarea>
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextareaFocusWhite">
            Focus textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextareaFocusWhite"
            rows="3"
          >
            Focus here to see the focus state.
          </textarea>
        </div>

        <div className="form-group">
          <label
            for="exampleFormControlTextareaDisabledWhite"
            className="uds-form-label-disabled"
          >
            Disabled textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextareaDisabledWhite"
            rows="3"
            placeholder="I got some content."
            disabled
          ></textarea>
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextareaErrorWhite">
            Error textarea
          </label>
          <textarea
            className="form-control is-invalid"
            aria-describedby="errorTextareaHelpWhite"
            id="exampleFormControlTextareaErrorWhite"
            rows="3"
          ></textarea>
          <small
            id="errorTextareaHelpWhite"
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
          <label for="exampleFormControlTextareaSuccessWhite">
            Success textarea
          </label>
          <textarea
            className="form-control is-valid"
            aria-describedby="successTextareaHelpWhite"
            id="exampleFormControlTextareaSuccessWhite"
            rows="3"
          >
            Agreeable content was entered.
          </textarea>
          <small
            id="successTextareaHelpWhite"
            className="form-textarea valid-feedback"
          >
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
            Success message
          </small>
        </div>
      </form>
    </div>

    <div style={{ backgroundColor: "#fafafa" }}>
      {/* This div for Storybook display only. */}
      <form className="uds-form uds-form-grayscale7">
        <div className="form-group">
          <label for="exampleFormControlTextareaDefaultGrayscale7">
            Default textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextareaDefaultGrayscale7"
            rows="3"
            placeholder="Enter your textarea content..."
          ></textarea>
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextareaFocusGrayscale7">
            Focus textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextareaFocusGrayscale7"
            rows="3"
          >
            Focus here to see the focus state.
          </textarea>
        </div>

        <div className="form-group">
          <label
            for="exampleFormControlTextareaDisabledGrayscale7"
            className="uds-form-label-disabled"
          >
            Disabled textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextareaDisabledGrayscale7"
            rows="3"
            placeholder="I got some content."
            disabled
          ></textarea>
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextareaErrorGrayscale7">
            Error textarea
          </label>
          <textarea
            className="form-control is-invalid"
            aria-describedby="errorTextareaHelpGrayscale7"
            id="exampleFormControlTextareaErrorGrayscale7"
            rows="3"
          ></textarea>
          <small
            id="errorTextareaHelpGrayscale7"
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
          <label for="exampleFormControlTextareaSuccessGrayscale7">
            Success textarea
          </label>
          <textarea
            className="form-control is-valid"
            aria-describedby="successTextareaHelpGrayscale7"
            id="exampleFormControlTextareaSuccessGrayscale7"
            rows="3"
          >
            Agreeable content was entered.
          </textarea>
          <small
            id="successTextareaHelpGrayscale7"
            className="form-textarea valid-feedback"
          >
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
            Success message
          </small>
        </div>
      </form>
    </div>

    <div style={{ backgroundColor: "#e8e8e8" }}>
      {/* This div for Storybook display only. */}
      <form className="uds-form uds-form-grayscale6">
        <div className="form-group">
          <label for="exampleFormControlTextareaDefaultGrayscale6">
            Default textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextareaDefaultGrayscale6"
            rows="3"
            placeholder="Enter your textarea content..."
          ></textarea>
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextareaFocusGrayscale6">
            Focus textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextareaFocusGrayscale6"
            rows="3"
          >
            Focus here to see the focus state.
          </textarea>
        </div>

        <div className="form-group">
          <label
            for="exampleFormControlTextareaDisabledGrayscale6"
            className="uds-form-label-disabled"
          >
            Disabled textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextareaDisabledGrayscale6"
            rows="3"
            placeholder="I got some content."
            disabled
          ></textarea>
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextareaErrorGrayscale6">
            Error textarea
          </label>
          <textarea
            className="form-control is-invalid"
            aria-describedby="errorTextareaHelpGrayscale6"
            id="exampleFormControlTextareaErrorGrayscale6"
            rows="3"
          ></textarea>
          <small
            id="errorTextareaHelpGrayscale6"
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
          <label for="exampleFormControlTextareaSuccessGrayscale6">
            Success textarea
          </label>
          <textarea
            className="form-control is-valid"
            aria-describedby="successTextareaHelpGrayscale6"
            id="exampleFormControlTextareaSuccessGrayscale6"
            rows="3"
          >
            Agreeable content was entered.
          </textarea>
          <small
            id="successTextareaHelpGrayscale6"
            className="form-textarea valid-feedback"
          >
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
            Success message
          </small>
        </div>
      </form>
    </div>

    <div style={{ backgroundColor: "#191919" }}>
      {/* This div for Storybook display only. */}
      <form className="uds-form uds-form-grayscale1">
        <div className="form-group">
          <label for="exampleFormControlTextareaDefaultGrayscale1">
            Default textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextareaDefaultGrayscale1"
            rows="3"
            placeholder="Enter your textarea content..."
          ></textarea>
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextareaFocusGrayscale1">
            Focus textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextareaFocusGrayscale1"
            rows="3"
          >
            Focus here to see the focus state.
          </textarea>
        </div>

        <div className="form-group">
          <label
            for="exampleFormControlTextareaDisabledGrayscale1"
            className="uds-form-label-disabled"
          >
            Disabled textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextareaDisabledGrayscale1"
            rows="3"
            placeholder="I got some content."
            disabled
          ></textarea>
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextareaErrorGrayscale1">
            Error textarea
          </label>
          <textarea
            className="form-control is-invalid"
            aria-describedby="errorTextareaHelpGrayscale1"
            id="exampleFormControlTextareaErrorGrayscale1"
            rows="3"
          ></textarea>
          <small
            id="errorTextareaHelpGrayscale1"
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
          <label for="exampleFormControlTextareaSuccessGrayscale1">
            Success textarea
          </label>
          <textarea
            className="form-control is-valid"
            aria-describedby="successTextareaHelpGrayscale1"
            id="exampleFormControlTextareaSuccessGrayscale1"
            rows="3"
          >
            Agreeable content was entered.
          </textarea>
          <small
            id="successTextareaHelpGrayscale1"
            className="form-textarea valid-feedback"
          >
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
            Success message
          </small>
        </div>
      </form>
    </div>
  </div>
);

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
      <label className="form-check-label" for="loneCheckbox1">
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
      <label className="form-check-label" for="loneCheckbox2">
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
      <label className="form-check-label" for="validLoneCheckbox">
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
      <label className="form-check-label" for="invalidLoneCheckbox">
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
        <label className="form-check-label" for="checkbox1">
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
        <label className="form-check-label" for="checkbox2">
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
        <label className="form-check-label" for="checkbox3">
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
        <label className="form-check-label" for="validCheckbox1">
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
        <label className="form-check-label" for="validCheckbox2">
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
        <label className="form-check-label" for="validCheckbox3">
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
        <label className="form-check-label" for="invalidCheckbox1">
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
        <label className="form-check-label" for="invalidCheckbox2">
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
        <label className="form-check-label" for="invalidCheckbox3">
          3 (disabled)
        </label>
      </div>
    </fieldset>
  </form>
);

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
        <label className="form-check-label" for="exampleRadios1">
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
        <label className="form-check-label" for="exampleRadios2">
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
        <label className="form-check-label" for="exampleRadios3">
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
        <label className="form-check-label" for="exampleRadios4">
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
        <label className="form-check-label" for="invalidRadios1">
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
        <label className="form-check-label" for="invalidRadios2">
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
        <label className="form-check-label" for="invalidRadios3">
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
        <label className="form-check-label" for="invalidRadios4">
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
        <label className="form-check-label" for="validRadios1">
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
        <label className="form-check-label" for="validRadios2">
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
        <label className="form-check-label" for="validRadios3">
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
        <label className="form-check-label" for="validRadios4">
          Disabled radio
        </label>
      </div>
    </fieldset>
  </form>
);

export const CheckboxesAndRadiosWhiteBackground = () => (
  <div style={{ backgroundColor: "white" }}>
    {/* This div for Storybook display only. */}
    <form className="uds-form uds-form-white">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="loneCheckbox1"
          value="option1"
        />
        <label className="form-check-label" for="loneCheckbox1">
          I like checkboxes
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
        />
        <label className="form-check-label" for="validLoneCheckbox">
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
        />
        <label className="form-check-label" for="invalidLoneCheckbox">
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
          />
          <label className="form-check-label" for="checkbox1">
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
          />
          <label className="form-check-label" for="checkbox2">
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
          <label className="form-check-label" for="checkbox3">
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
          />
          <label className="form-check-label" for="validCheckbox1">
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
          />
          <label className="form-check-label" for="validCheckbox2">
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
          <label className="form-check-label" for="validCheckbox3">
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
          />
          <label className="form-check-label" for="invalidCheckbox1">
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
          />
          <label className="form-check-label" for="invalidCheckbox2">
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
          <label className="form-check-label" for="invalidCheckbox3">
            3 (disabled)
          </label>
        </div>
      </fieldset>

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
          />
          <label className="form-check-label" for="exampleRadios1">
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
          />
          <label className="form-check-label" for="exampleRadios2">
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
          />
          <label className="form-check-label" for="exampleRadios3">
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
          />
          <label className="form-check-label" for="exampleRadios4">
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
          />
          <label className="form-check-label" for="invalidRadios1">
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
          <label className="form-check-label" for="invalidRadios2">
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
          <label className="form-check-label" for="invalidRadios3">
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
          <label className="form-check-label" for="invalidRadios4">
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
          />
          <label className="form-check-label" for="validRadios1">
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
          <label className="form-check-label" for="validRadios2">
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
          <label className="form-check-label" for="validRadios3">
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
          <label className="form-check-label" for="validRadios4">
            Disabled radio
          </label>
        </div>
      </fieldset>
    </form>
  </div>
);

export const CheckboxesAndRadiosGrayscale7Background = () => (
  <div style={{ backgroundColor: "#fafafa" }}>
    {/* This div for Storybook display only. */}
    <form className="uds-form uds-form-grayscale7">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="loneCheckbox1"
          value="option1"
        />
        <label className="form-check-label" for="loneCheckbox1">
          I like checkboxes
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
        />
        <label className="form-check-label" for="validLoneCheckbox">
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
        />
        <label className="form-check-label" for="invalidLoneCheckbox">
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
          />
          <label className="form-check-label" for="checkbox1">
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
          />
          <label className="form-check-label" for="checkbox2">
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
          <label className="form-check-label" for="checkbox3">
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
          />
          <label className="form-check-label" for="validCheckbox1">
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
          />
          <label className="form-check-label" for="validCheckbox2">
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
          <label className="form-check-label" for="validCheckbox3">
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
          />
          <label className="form-check-label" for="invalidCheckbox1">
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
          />
          <label className="form-check-label" for="invalidCheckbox2">
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
          <label className="form-check-label" for="invalidCheckbox3">
            3 (disabled)
          </label>
        </div>
      </fieldset>

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
          />
          <label className="form-check-label" for="exampleRadios1">
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
          />
          <label className="form-check-label" for="exampleRadios2">
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
          />
          <label className="form-check-label" for="exampleRadios3">
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
          />
          <label className="form-check-label" for="exampleRadios4">
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
          />
          <label className="form-check-label" for="invalidRadios1">
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
          <label className="form-check-label" for="invalidRadios2">
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
          <label className="form-check-label" for="invalidRadios3">
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
          <label className="form-check-label" for="invalidRadios4">
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
          />
          <label className="form-check-label" for="validRadios1">
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
          <label className="form-check-label" for="validRadios2">
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
          <label className="form-check-label" for="validRadios3">
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
          <label className="form-check-label" for="validRadios4">
            Disabled radio
          </label>
        </div>
      </fieldset>
    </form>
  </div>
);

export const CheckboxesAndRadiosGrayscale6Background = () => (
  <div style={{ backgroundColor: "#e8e8e8" }}>
    {/* This div for Storybook display only. */}
    <form className="uds-form uds-form-grayscale6">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="loneCheckbox1"
          value="option1"
        />
        <label className="form-check-label" for="loneCheckbox1">
          I like checkboxes
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
        />
        <label className="form-check-label" for="validLoneCheckbox">
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
        />
        <label className="form-check-label" for="invalidLoneCheckbox">
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
          />
          <label className="form-check-label" for="checkbox1">
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
          />
          <label className="form-check-label" for="checkbox2">
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
          <label className="form-check-label" for="checkbox3">
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
          />
          <label className="form-check-label" for="validCheckbox1">
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
          />
          <label className="form-check-label" for="validCheckbox2">
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
          <label className="form-check-label" for="validCheckbox3">
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
          />
          <label className="form-check-label" for="invalidCheckbox1">
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
          />
          <label className="form-check-label" for="invalidCheckbox2">
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
          <label className="form-check-label" for="invalidCheckbox3">
            3 (disabled)
          </label>
        </div>
      </fieldset>

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
          />
          <label className="form-check-label" for="exampleRadios1">
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
          />
          <label className="form-check-label" for="exampleRadios2">
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
          />
          <label className="form-check-label" for="exampleRadios3">
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
          />
          <label className="form-check-label" for="exampleRadios4">
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
          />
          <label className="form-check-label" for="invalidRadios1">
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
          <label className="form-check-label" for="invalidRadios2">
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
          <label className="form-check-label" for="invalidRadios3">
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
          <label className="form-check-label" for="invalidRadios4">
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
          />
          <label className="form-check-label" for="validRadios1">
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
          <label className="form-check-label" for="validRadios2">
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
          <label className="form-check-label" for="validRadios3">
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
          <label className="form-check-label" for="validRadios4">
            Disabled radio
          </label>
        </div>
      </fieldset>
    </form>
  </div>
);

export const CheckboxesAndRadiosGrayscale1Background = () => (
  <div style={{ backgroundColor: "#191919" }}>
    {/* This div for Storybook display only. */}
    <form className="uds-form uds-form-grayscale1">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="loneCheckbox1"
          value="option1"
        />
        <label className="form-check-label" for="loneCheckbox1">
          I like checkboxes
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
        />
        <label className="form-check-label" for="validLoneCheckbox">
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
        />
        <label className="form-check-label" for="invalidLoneCheckbox">
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
          />
          <label className="form-check-label" for="checkbox1">
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
          />
          <label className="form-check-label" for="checkbox2">
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
          <label className="form-check-label" for="checkbox3">
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
          />
          <label className="form-check-label" for="validCheckbox1">
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
          />
          <label className="form-check-label" for="validCheckbox2">
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
          <label className="form-check-label" for="validCheckbox3">
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
          />
          <label className="form-check-label" for="invalidCheckbox1">
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
          />
          <label className="form-check-label" for="invalidCheckbox2">
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
          <label className="form-check-label" for="invalidCheckbox3">
            3 (disabled)
          </label>
        </div>
      </fieldset>

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
          />
          <label className="form-check-label" for="exampleRadios1">
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
          />
          <label className="form-check-label" for="exampleRadios2">
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
          />
          <label className="form-check-label" for="exampleRadios3">
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
          />
          <label className="form-check-label" for="exampleRadios4">
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
          />
          <label className="form-check-label" for="invalidRadios1">
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
          <label className="form-check-label" for="invalidRadios2">
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
          <label className="form-check-label" for="invalidRadios3">
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
          <label className="form-check-label" for="invalidRadios4">
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
          />
          <label className="form-check-label" for="validRadios1">
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
          <label className="form-check-label" for="validRadios2">
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
          <label className="form-check-label" for="validRadios3">
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
          <label className="form-check-label" for="validRadios4">
            Disabled radio
          </label>
        </div>
      </fieldset>
    </form>
  </div>
);

export const Selects = () => (
  <form className="uds-form">
    <div className="form-group">
      <label for="exampleFormControlSelect1">Example select</label>
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
      <label for="exampleFormControlSelect3">
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
        <span title="Alert" className="fa fa-icon fa-check-circle"></span>Success
        message
      </small>
    </div>

    <div className="alert alert-info" role="alert">
      <div className="alert-icon">
        <span title="Information" className="fa fa-icon fa-info-circle"></span>
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
          onclick="event.target.parentNode.parentNode.style.display='none';"
        >
          <i className="fa fa-times"></i>
        </button>
      </div>
    </div>

    <div className="form-group">
      <label for="exampleFormControlSelect2">Example multiple select</label>
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
      <label for="exampleFormControlSelect4">
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
        <span title="Alert" className="fa fa-icon fa-exclamation-triangle"></span>
        Form error message
      </small>
    </div>
  </form>
);

export const KitchenSinkForm = () => (
  <div>
    <p>
      <a href="https://getbootstrap.com/docs/5.0/forms/overview/">
        Bootstrap 5 form docs
      </a>
    </p>

    <form className="uds-form">
      <div className="form-group">
        <label for="myTextInput">Text input</label>
        <input
          type="text"
          className="form-control"
          id="myTextInput"
          placeholder="Helper text"
        />
      </div>

      <div className="form-group">
        <label for="myLgInput">Large input</label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="myLgInput"
          placeholder="Helper text"
          value="Input text"
        />
      </div>
      <div className="form-group">
        <label for="mySmInput" className="uds-form-label-disabled">
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
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

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
          />
          <label className="form-check-label" for="exampleRadios1">
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
          />
          <label className="form-check-label" for="exampleRadios2">
            Second default radio
          </label>
        </div>
        <div className="form-check disabled">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios3"
            value="option3"
            disabled
          />
          <label className="form-check-label" for="exampleRadios3">
            Disabled radio
          </label>
        </div>
      </fieldset>

      <div className="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select className="form-select" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label for="exampleFormControlSelect2">Example multiple select</label>
        <select multiple className="form-select" id="exampleFormControlSelect2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="checkbox1"
          value="option1"
        />
        <label className="form-check-label" for="checkbox1">
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
        />
        <label className="form-check-label" for="checkbox2">
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
        <label className="form-check-label" for="checkbox3">
          3 (disabled)
        </label>
      </div>
    </form>
  </div>
);

export const KitchenSinkFormClientSideValidationWithInvalidAndValidNotYetValidatedFormInNeedsValidationState =
  () => (
    <div>
      <p>
        <a href="https://getbootstrap.com/docs/5.0/forms/validation/">
          Bootstrap 5 form docs regarding validation
        </a>
      </p>

      <p>
        When the form is marked with class "was-validated", browser-based
        validation styles based on input element type attribute are triggered
        and displayed.
      </p>

      <form className="uds-form needs-validation">
        <div className="form-group">
          <label for="myTextInput">
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
          <label for="myEmailInput">Email input</label>
          <input
            type="email"
            className="form-control"
            id="myEmailInput"
            aria-describedby="errorHelp2"
            placeholder="Helper text"
            value="notAnEmail"
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
          <label for="myLgInput">Large input</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="myLgInput"
            aria-describedby="successHelp1"
            placeholder="Helper text"
            value="Input text"
          />
          <small id="successHelp1" className="form-text valid-feedback">
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
            Success message
          </small>
        </div>

        <div className="form-group">
          <label for="mySmInput" className="uds-form-label-disabled">
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
          <label for="exampleFormControlTextareaError">
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
          <small id="errorTextareaHelp" className="form-textarea invalid-feedback">
            <span
              title="Alert"
              className="fa fa-icon fa-exclamation-triangle"
            ></span>
            Form error message
          </small>
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextareaSuccess">
            Success textarea
          </label>
          <textarea
            className="form-control"
            aria-describedby="successTextareaHelp"
            id="exampleFormControlTextareaSuccess"
            rows="3"
          >
            Agreeable content was entered.
          </textarea>
          <small id="successTextareaHelp" className="form-textarea valid-feedback">
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
            Success message
          </small>
        </div>

        <div className="form-group">
          <label
            for="exampleFormControlTextareaDisabled"
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
          ></textarea>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            aria-describedby="myValidCheckMsg"
            id="validLoneCheckbox"
            value="option1"
            checked
            aria-required="true"
            required
          />
          <label className="form-check-label" for="validLoneCheckbox">
            <span
              title="Required"
              className="fa fa-icon fa-circle uds-field-required"
            ></span>
            I accept (required field)
          </label>
          <small id="myValidCheckMsg" className="valid-feedback is-valid">
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
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
          <label className="form-check-label" for="invalidLoneCheckbox">
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
          <legend>A Group of Valid Checkboxes</legend>
          <small id="myValidCheckboxMsg" className="valid-feedback is-valid">
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
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
            <label className="form-check-label" for="validCheckbox1">
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
            />
            <label className="form-check-label" for="validCheckbox2">
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
            <label className="form-check-label" for="validCheckbox3">
              3 (disabled)
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span
              title="Required"
              className="fa fa-icon fa-circle uds-field-required"
            ></span>
            A Group of Invalid Checkboxes - required
          </legend>
          <small id="myInvalidCheckboxMsg" className="invalid-feedback is-invalid">
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
              aria-required="true"
              required
            />
            <label className="form-check-label" for="invalidCheckbox1">
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
              aria-required="true"
              required
            />
            <label className="form-check-label" for="invalidCheckbox2">
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
            <label className="form-check-label" for="invalidCheckbox3">
              3 (disabled)
            </label>
          </div>
        </fieldset>

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
            <label className="form-check-label" for="invalidRadios1">
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
            <label className="form-check-label" for="invalidRadios2">
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
              aria-required="true"
              required
            />
            <label className="form-check-label" for="invalidRadios3">
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
            <label className="form-check-label" for="invalidRadios4">
              Disabled radio
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>A Group of Valid Radios</legend>
          <small id="myValidRadiosMsg" className="valid-feedback is-valid">
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
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
            />
            <label className="form-check-label" for="validRadios1">
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
            <label className="form-check-label" for="validRadios2">
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
            <label className="form-check-label" for="validRadios3">
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
            <label className="form-check-label" for="validRadios4">
              Disabled radio
            </label>
          </div>
        </fieldset>

        <div className="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select className="form-select" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label for="exampleFormControlSelect2">Example multiple select</label>
          <select multiple className="form-select" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </form>
    </div>
  );

export const KitchenSinkFormClientSideValidationWithInvalidAndValidValidatedFormInWasValidatedState =
  () => (
    <div>
      <p>
        <a href="https://getbootstrap.com/docs/5.0/forms/validation/">
          Bootstrap 5 form docs regarding validation
        </a>
      </p>

      <p>
        When the form is marked with class "was-validated", browser-based
        validation styles based on input element type attribute are triggered
        and displayed.
      </p>

      <form className="uds-form was-validated">
        <div className="form-group">
          <label for="myTextInput">
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
          <label for="myEmailInput">Email input</label>
          <input
            type="email"
            className="form-control"
            id="myEmailInput"
            aria-describedby="errorHelp2"
            placeholder="Helper text"
            value="notAnEmail"
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
          <label for="myLgInput">Large input</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="myLgInput"
            aria-describedby="successHelp1"
            placeholder="Helper text"
            value="Input text"
          />
          <small id="successHelp1" className="form-text valid-feedback">
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
            Success message
          </small>
        </div>

        <div className="form-group">
          <label for="mySmInput" className="uds-form-label-disabled">
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
          <label for="exampleFormControlTextareaError">
            Error textarea required
          </label>
          <textarea
            className="form-control"
            aria-describedby="errorTextareaHelp"
            id="exampleFormControlTextareaError"
            rows="3"
            required
          ></textarea>
          <small id="errorTextareaHelp" className="form-textarea invalid-feedback">
            <span
              title="Alert"
              className="fa fa-icon fa-exclamation-triangle"
            ></span>
            Form error message
          </small>
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextareaSuccess">
            Success textarea
          </label>
          <textarea
            className="form-control"
            aria-describedby="successTextareaHelp"
            id="exampleFormControlTextareaSuccess"
            rows="3"
          >
            Agreeable content was entered.
          </textarea>
          <small id="successTextareaHelp" className="form-textarea valid-feedback">
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
            Success message
          </small>
        </div>

        <div className="form-group">
          <label
            for="exampleFormControlTextareaDisabled"
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
          ></textarea>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            aria-describedby="myValidCheckMsg"
            id="validLoneCheckbox"
            value="option1"
            checked
            aria-required="true"
            required
          />
          <label className="form-check-label" for="validLoneCheckbox">
            <span
              title="Required"
              className="fa fa-icon fa-circle uds-field-required"
            ></span>
            I accept (required)
          </label>
          <small id="myValidCheckMsg" className="valid-feedback is-valid">
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
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
          <label className="form-check-label" for="invalidLoneCheckbox">
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
          <legend>A Group of Valid Checkboxes</legend>
          <small id="myValidCheckboxMsg" className="valid-feedback is-valid">
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
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
            <label className="form-check-label" for="validCheckbox1">
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
            />
            <label className="form-check-label" for="validCheckbox2">
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
            <label className="form-check-label" for="validCheckbox3">
              3 (disabled)
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span
              title="Required"
              className="fa fa-icon fa-circle uds-field-required"
            ></span>
            A Group of Invalid Checkboxes - required
          </legend>
          <small id="myInvalidCheckboxMsg" className="invalid-feedback is-invalid">
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
              aria-required="true"
              required
            />
            <label className="form-check-label" for="invalidCheckbox1">
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
              aria-required="true"
              required
            />
            <label className="form-check-label" for="invalidCheckbox2">
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
            <label className="form-check-label" for="invalidCheckbox3">
              3 (disabled)
            </label>
          </div>
        </fieldset>

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
            <label className="form-check-label" for="invalidRadios1">
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
            <label className="form-check-label" for="invalidRadios2">
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
              aria-required="true"
              required
            />
            <label className="form-check-label" for="invalidRadios3">
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
            <label className="form-check-label" for="invalidRadios4">
              Disabled radio
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>A Group of Valid Radios</legend>
          <small id="myValidRadiosMsg" className="valid-feedback is-valid">
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
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
            />
            <label className="form-check-label" for="validRadios1">
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
            <label className="form-check-label" for="validRadios2">
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
            <label className="form-check-label" for="validRadios3">
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
            <label className="form-check-label" for="validRadios4">
              Disabled radio
            </label>
          </div>
        </fieldset>

        <div className="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
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
            <span title="Alert" className="fa fa-icon fa-check-circle"></span>
            Success message
          </small>
        </div>
        <div className="form-group">
          <label for="exampleFormControlSelect2">
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

export const KitchenSinkFormClientSideValidationWithInvalidAndValidNotYetValidatedFormInNeedsValidationStateGrayscale1Background =
  () => (
    <div>
      <p>
        <a href="https://getbootstrap.com/docs/5.0/forms/validation/">
          Bootstrap 5 form docs regarding validation
        </a>
      </p>

      <p>
        When the form is marked with class "was-validated", browser-based
        validation styles based on input element type attribute are triggered
        and displayed.
      </p>

      <div style={{ backgroundColor: "#191919" }}>
        {/* This div for Storybook display only. */}
        <form className="uds-form needs-validation uds-form-grayscale1">
          <div className="form-group">
            <label for="myTextInput">
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
            <label for="myEmailInput">Email input</label>
            <input
              type="email"
              className="form-control"
              id="myEmailInput"
              aria-describedby="errorHelp2"
              placeholder="Helper text"
              value="notAnEmail"
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
            <label for="myLgInput">Large input</label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="myLgInput"
              aria-describedby="successHelp1"
              placeholder="Helper text"
              value="Input text"
            />
            <small id="successHelp1" className="form-text valid-feedback">
              <span title="Alert" className="fa fa-icon fa-check-circle"></span>
              Success message
            </small>
          </div>

          <div className="form-group">
            <label for="mySmInput" className="uds-form-label-disabled">
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
            <label for="exampleFormControlTextareaError">
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
            <label for="exampleFormControlTextareaSuccess">
              Success textarea
            </label>
            <textarea
              className="form-control"
              aria-describedby="successTextareaHelp"
              id="exampleFormControlTextareaSuccess"
              rows="3"
            >
              Agreeable content was entered.
            </textarea>
            <small
              id="successTextareaHelp"
              className="form-textarea valid-feedback"
            >
              <span title="Alert" className="fa fa-icon fa-check-circle"></span>
              Success message
            </small>
          </div>

          <div className="form-group">
            <label
              for="exampleFormControlTextareaDisabled"
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
            ></textarea>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              aria-describedby="myValidCheckMsg"
              id="validLoneCheckbox"
              value="option1"
              checked
              aria-required="true"
              required
            />
            <label className="form-check-label" for="validLoneCheckbox">
              <span
                title="Required"
                className="fa fa-icon fa-circle uds-field-required"
              ></span>
              I accept (required field)
            </label>
            <small id="myValidCheckMsg" className="valid-feedback is-valid">
              <span title="Alert" className="fa fa-icon fa-check-circle"></span>
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
            <label className="form-check-label" for="invalidLoneCheckbox">
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
            <legend>A Group of Valid Checkboxes</legend>
            <small id="myValidCheckboxMsg" className="valid-feedback is-valid">
              <span title="Alert" className="fa fa-icon fa-check-circle"></span>
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
              <label className="form-check-label" for="validCheckbox1">
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
              />
              <label className="form-check-label" for="validCheckbox2">
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
              <label className="form-check-label" for="validCheckbox3">
                3 (disabled)
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <span
                title="Required"
                className="fa fa-icon fa-circle uds-field-required"
              ></span>
              A Group of Invalid Checkboxes - required
            </legend>
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
                aria-required="true"
                required
              />
              <label className="form-check-label" for="invalidCheckbox1">
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
                aria-required="true"
                required
              />
              <label className="form-check-label" for="invalidCheckbox2">
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
              <label className="form-check-label" for="invalidCheckbox3">
                3 (disabled)
              </label>
            </div>
          </fieldset>

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
              <label className="form-check-label" for="invalidRadios1">
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
              <label className="form-check-label" for="invalidRadios2">
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
                aria-required="true"
                required
              />
              <label className="form-check-label" for="invalidRadios3">
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
              <label className="form-check-label" for="invalidRadios4">
                Disabled radio
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>A Group of Valid Radios</legend>
            <small id="myValidRadiosMsg" className="valid-feedback is-valid">
              <span title="Alert" className="fa fa-icon fa-check-circle"></span>
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
              />
              <label className="form-check-label" for="validRadios1">
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
              <label className="form-check-label" for="validRadios2">
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
              <label className="form-check-label" for="validRadios3">
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
              <label className="form-check-label" for="validRadios4">
                Disabled radio
              </label>
            </div>
          </fieldset>

          <div className="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select className="form-select" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect2">
              Example multiple select
            </label>
            <select
              multiple
              className="form-select"
              id="exampleFormControlSelect2"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );

export const KitchenSinkFormClientSideValidationWithInvalidAndValidValidatedFormInWasValidatedStateGrayscale1Background =
  () => (
    <div>
      <p>
        <a href="https://getbootstrap.com/docs/5.0/forms/validation/">
          Bootstrap 5 form docs regarding validation
        </a>
      </p>

      <p>
        When the form is marked with class "was-validated", browser-based
        validation styles based on input element type attribute are triggered
        and displayed.
      </p>

      <div style={{ backgroundColor: "#191919" }}>
        {/* This div for Storybook display only. */}
        <form className="uds-form was-validated uds-form-grayscale1">
          <div className="form-group">
            <label for="myTextInput">
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
            <label for="myEmailInput">Email input</label>
            <input
              type="email"
              className="form-control"
              id="myEmailInput"
              aria-describedby="errorHelp2"
              placeholder="Helper text"
              value="notAnEmail"
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
            <label for="myLgInput">Large input</label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="myLgInput"
              aria-describedby="successHelp1"
              placeholder="Helper text"
              value="Input text"
            />
            <small id="successHelp1" className="form-text valid-feedback">
              <span title="Alert" className="fa fa-icon fa-check-circle"></span>
              Success message
            </small>
          </div>

          <div className="form-group">
            <label for="mySmInput" className="uds-form-label-disabled">
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
            <label for="exampleFormControlTextareaError">
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
            <label for="exampleFormControlTextareaSuccess">
              Success textarea
            </label>
            <textarea
              className="form-control"
              aria-describedby="successTextareaHelp"
              id="exampleFormControlTextareaSuccess"
              rows="3"
            >
              Agreeable content was entered.
            </textarea>
            <small
              id="successTextareaHelp"
              className="form-textarea valid-feedback"
            >
              <span title="Alert" className="fa fa-icon fa-check-circle"></span>
              Success message
            </small>
          </div>

          <div className="form-group">
            <label
              for="exampleFormControlTextareaDisabled"
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
            ></textarea>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              aria-describedby="myValidCheckMsg"
              id="validLoneCheckbox"
              value="option1"
              checked
              aria-required="true"
              required
            />
            <label className="form-check-label" for="validLoneCheckbox">
              <span
                title="Required"
                className="fa fa-icon fa-circle uds-field-required"
              ></span>
              I accept (required)
            </label>
            <small id="myValidCheckMsg" className="valid-feedback is-valid">
              <span title="Alert" className="fa fa-icon fa-check-circle"></span>
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
            <label className="form-check-label" for="invalidLoneCheckbox">
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
            <legend>A Group of Valid Checkboxes</legend>
            <small id="myValidCheckboxMsg" className="valid-feedback is-valid">
              <span title="Alert" className="fa fa-icon fa-check-circle"></span>
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
              <label className="form-check-label" for="validCheckbox1">
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
              />
              <label className="form-check-label" for="validCheckbox2">
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
              <label className="form-check-label" for="validCheckbox3">
                3 (disabled)
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <span
                title="Required"
                className="fa fa-icon fa-circle uds-field-required"
              ></span>
              A Group of Invalid Checkboxes - required
            </legend>
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
                aria-required="true"
                required
              />
              <label className="form-check-label" for="invalidCheckbox1">
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
                aria-required="true"
                required
              />
              <label className="form-check-label" for="invalidCheckbox2">
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
              <label className="form-check-label" for="invalidCheckbox3">
                3 (disabled)
              </label>
            </div>
          </fieldset>

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
              <label className="form-check-label" for="invalidRadios1">
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
              <label className="form-check-label" for="invalidRadios2">
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
                aria-required="true"
                required
              />
              <label className="form-check-label" for="invalidRadios3">
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
              <label className="form-check-label" for="invalidRadios4">
                Disabled radio
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>A Group of Valid Radios</legend>
            <small id="myValidRadiosMsg" className="valid-feedback is-valid">
              <span title="Alert" className="fa fa-icon fa-check-circle"></span>
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
              />
              <label className="form-check-label" for="validRadios1">
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
              <label className="form-check-label" for="validRadios2">
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
              <label className="form-check-label" for="validRadios3">
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
              <label className="form-check-label" for="validRadios4">
                Disabled radio
              </label>
            </div>
          </fieldset>

          <div className="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
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
              <span title="Alert" className="fa fa-icon fa-check-circle"></span>
              Success message
            </small>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect2">
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
    </div>
  );
