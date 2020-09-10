import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Form Fields', module)
  .addParameters({
    happo: false,
  })

  .add('Text Inputs', () => `
<form>

  <div class="form-group">
    <label for="exampleDefaultInput">Default text input label</label>
    <input type="text" class="form-control" id="exampleDefaultInput" placeholder="Helper text">
  </div>

  <div class="form-group">
    <label for="exampleFocusInput">Focus text input label</label>
    <input type="text" class="form-control" id="exampleFocusInput" placeholder="Helper text" value="Focus me to see focus style">
  </div>

  <div class="form-group">
    <label for="exampleDisabledInput">Disabled text input label</label>
    <input type="text" class="form-control" id="exampleDisabledInput" placeholder="Helper text" disabled>
  </div>

  <div class="form-group">
    <label for="exampleErrorInput">Error text input label</label>
    <input type="text" class="form-control is-invalid" id="exampleErrorInput" aria-describedby="errorHelp" placeholder="Helper text">
    <small id="errorHelp" class="form-text invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleSuccessInput">Success text input label</label>
    <input type="text" class="form-control is-valid" id="exampleSuccessInput" aria-describedby="successHelp" placeholder="Helper text" value="Input text">
    <small id="successHelp" class="form-text valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

  <div class="form-group">
    <label for="exampleTrailingIconInput">Trailing icon text input label</label>
    <div class="input-group input-group-trailing-icon">
      <input type="text" class="form-control" id="exampleTrailingIconInput" placeholder="Helper text">
      <span class="fa fa-icon fa-calendar" aria-hidden="true"></span>
    </div>
  </div>

</form>

<!-- TODO Implement js code to set focus on exampleFocusInput when page loads
Should only run and be packaged for storybook preview.
<script>
  document.getElementById('exampleFocusInput').focus();
</script>
-->
  `)

  .add('Text inputs, various backgrounds', () => `
<div style="padding:2rem;background-color:white;"><!-- This div for Storybook display only. -->
<form class="uds-form-white">
  <div class="form-group">
    <label for="exampleDefaultInputWhite">Default text input label</label>
    <input type="text" class="form-control" id="exampleDefaultInputWhite" placeholder="Helper text">
  </div>

  <div class="form-group">
    <label for="exampleFocusInputWhite">Focus text input label</label>
    <input type="text" class="form-control" id="exampleFocusInputWhite" placeholder="Helper text" value="Focus me to see focus style">
  </div>

  <div class="form-group">
    <label for="exampleDisabledInputWhite">Disabled text input label</label>
    <input type="text" class="form-control" id="exampleDisabledInputWhite" placeholder="Helper text" disabled>
  </div>

  <div class="form-group">
    <label for="exampleErrorInputWhite">Error text input label</label>
    <input type="text" class="form-control is-invalid" id="exampleErrorInputWhite" aria-describedby="errorHelp" placeholder="Helper text">
    <small id="errorHelp" class="form-text invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleSuccessInputWhite">Success text input label</label>
    <input type="text" class="form-control is-valid" id="exampleSuccessInputWhite" aria-describedby="successHelp" placeholder="Helper text" value="Input text">
    <small id="successHelp" class="form-text valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

  <div class="form-group">
    <label for="exampleTrailingIconInputWhite">Trailing icon text input label</label>
    <div class="input-group input-group-trailing-icon">
      <input type="text" class="form-control" id="exampleTrailingIconInputWhite" placeholder="Helper text">
      <span class="fa fa-icon fa-calendar" aria-hidden="true"></span>
    </div>
  </div>
</form>
</div>

<div style="padding:2rem;background-color:#fafafa;"><!-- This div for Storybook display only. -->
<form class="uds-form-gray1">
  <div class="form-group">
    <label for="exampleDefaultInputGray1">Default text input label</label>
    <input type="text" class="form-control" id="exampleDefaultInputGray1" placeholder="Helper text">
  </div>

  <div class="form-group">
    <label for="exampleFocusInputGray1">Focus text input label</label>
    <input type="text" class="form-control" id="exampleFocusInputGray1" placeholder="Helper text" value="Focus me to see focus style">
  </div>

  <div class="form-group">
    <label for="exampleDisabledInputGray1">Disabled text input label</label>
    <input type="text" class="form-control" id="exampleDisabledInputGray1" placeholder="Helper text" disabled>
  </div>

  <div class="form-group">
    <label for="exampleErrorInputGray1">Error text input label</label>
    <input type="text" class="form-control is-invalid" id="exampleErrorInputGray1" aria-describedby="errorHelpGray1" placeholder="Helper text">
    <small id="errorHelpGray1" class="form-text invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleSuccessInputGray1">Success text input label</label>
    <input type="text" class="form-control is-valid" id="exampleSuccessInputGray1" aria-describedby="successHelpGray1" placeholder="Helper text" value="Input text">
    <small id="successHelpGray1" class="form-text valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

  <div class="form-group">
    <label for="exampleTrailingIconInputGray1">Trailing icon text input label</label>
    <div class="input-group input-group-trailing-icon">
      <input type="text" class="form-control" id="exampleTrailingIconInputGray1" placeholder="Helper text">
      <span class="fa fa-icon fa-calendar" aria-hidden="true"></span>
    </div>
  </div>
</form>
</div>

<div style="padding:2rem;background-color:#e8e8e8;"><!-- This div for Storybook display only. -->
<form class="uds-form-gray2">
  <div class="form-group">
    <label for="exampleDefaultInputGray2">Default text input label</label>
    <input type="text" class="form-control" id="exampleDefaultInputGray2" placeholder="Helper text">
  </div>

  <div class="form-group">
    <label for="exampleFocusInputGray2">Focus text input label</label>
    <input type="text" class="form-control" id="exampleFocusInputGray2" placeholder="Helper text" value="Focus me to see focus style">
  </div>

  <div class="form-group">
    <label for="exampleDisabledInputGray2">Disabled text input label</label>
    <input type="text" class="form-control" id="exampleDisabledInputGray2" placeholder="Helper text" disabled>
  </div>

  <div class="form-group">
    <label for="exampleErrorInputGray2">Error text input label</label>
    <input type="text" class="form-control is-invalid" id="exampleErrorInputGray2" aria-describedby="errorHelpGray2" placeholder="Helper text">
    <small id="errorHelpGray2" class="form-text invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleSuccessInputGray2">Success text input label</label>
    <input type="text" class="form-control is-valid" id="exampleSuccessInputGray2" aria-describedby="successHelpGray2" placeholder="Helper text" value="Input text">
    <small id="successHelpGray2" class="form-text valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

  <div class="form-group">
    <label for="exampleTrailingIconInputGray2">Trailing icon text input label</label>
    <div class="input-group input-group-trailing-icon">
      <input type="text" class="form-control" id="exampleTrailingIconInputGray2" placeholder="Helper text">
      <span class="fa fa-icon fa-calendar" aria-hidden="true"></span>
    </div>
  </div>
</form>
</div>

<div style="padding:2rem;background-color:#191919;"><!-- This div for Storybook display only. -->
<form class="uds-form-gray7">
  <div class="form-group">
    <label for="exampleDefaultInputGray7">Default text input label</label>
    <input type="text" class="form-control" id="exampleDefaultInputGray7" placeholder="Helper text">
  </div>

  <div class="form-group">
    <label for="exampleFocusInputGray7">Focus text input label</label>
    <input type="text" class="form-control" id="exampleFocusInputGray7" placeholder="Helper text" value="Focus me to see focus style">
  </div>

  <div class="form-group">
    <label for="exampleDisabledInputGray7">Disabled text input label</label>
    <input type="text" class="form-control" id="exampleDisabledInputGray7" placeholder="Helper text" disabled>
  </div>

  <div class="form-group">
    <label for="exampleErrorInputGray7">Error text input label</label>
    <input type="text" class="form-control is-invalid" id="exampleErrorInputGray7" aria-describedby="errorHelpGray7" placeholder="Helper text">
    <small id="errorHelpGray7" class="form-text invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleSuccessInputGray7">Success text input label</label>
    <input type="text" class="form-control is-valid" id="exampleSuccessInputGray7" aria-describedby="successHelpGray7" placeholder="Helper text" value="Input text">
    <small id="successHelpGray7" class="form-text valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

  <div class="form-group">
    <label for="exampleTrailingIconInputGray7">Trailing icon text input label</label>
    <div class="input-group input-group-trailing-icon">
      <input type="text" class="form-control" id="exampleTrailingIconInputGray7" placeholder="Helper text">
      <span class="fa fa-icon fa-calendar" aria-hidden="true"></span>
    </div>
  </div>
</form>
</div>
  `)

  .add('Textareas', () => `
<form>

  <div class="form-group">
    <label for="exampleFormControlTextareaDefault">Default textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaDefault" rows="3" placeholder="Enter your textarea content..."></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaFocus">Focus textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaFocus" rows="3">Focus here to see the focus state.</textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaDisabled">Disabled textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaDisabled" rows="3" placeholder="I got some content." disabled></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaError">Error textarea</label>
    <textarea class="form-control is-invalid" aria-describedby="errorTextareaHelp" id="exampleFormControlTextareaError" rows="3"></textarea>
    <small id="errorTextareaHelp" class="form-textarea invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaSuccess">Success textarea</label>
    <textarea class="form-control is-valid" aria-describedby="successTextareaHelp" id="exampleFormControlTextareaSuccess" rows="3">Agreeable content was entered.</textarea>
    <small id="successTextareaHelp" class="form-textarea valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

</form>
  `)

  .add('Textareas, multiple backgrounds', () => `

<div style="padding:2rem;background-color:white;"><!-- This div for Storybook display only. -->
<form class="uds-form-white">

  <div class="form-group">
    <label for="exampleFormControlTextareaDefaultWhite">Default textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaDefaultWhite" rows="3" placeholder="Enter your textarea content..."></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaFocusWhite">Focus textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaFocusWhite" rows="3">Focus here to see the focus state.</textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaDisabledWhite">Disabled textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaDisabledWhite" rows="3" placeholder="I got some content." disabled></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaErrorWhite">Error textarea</label>
    <textarea class="form-control is-invalid" aria-describedby="errorTextareaHelpWhite" id="exampleFormControlTextareaErrorWhite" rows="3"></textarea>
    <small id="errorTextareaHelpWhite" class="form-textarea invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaSuccessWhite">Success textarea</label>
    <textarea class="form-control is-valid" aria-describedby="successTextareaHelpWhite" id="exampleFormControlTextareaSuccessWhite" rows="3">Agreeable content was entered.</textarea>
    <small id="successTextareaHelpWhite" class="form-textarea valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

</form>
</div>

<div style="padding:2rem;background-color:#fafafa;"><!-- This div for Storybook display only. -->
<form class="uds-form-gray1">

  <div class="form-group">
    <label for="exampleFormControlTextareaDefaultGray1">Default textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaDefaultGray1" rows="3" placeholder="Enter your textarea content..."></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaFocusGray1">Focus textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaFocusGray1" rows="3">Focus here to see the focus state.</textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaDisabledGray1">Disabled textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaDisabledGray1" rows="3" placeholder="I got some content." disabled></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaErrorGray1">Error textarea</label>
    <textarea class="form-control is-invalid" aria-describedby="errorTextareaHelpGray1" id="exampleFormControlTextareaErrorGray1" rows="3"></textarea>
    <small id="errorTextareaHelpGray1" class="form-textarea invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaSuccessGray1">Success textarea</label>
    <textarea class="form-control is-valid" aria-describedby="successTextareaHelpGray1" id="exampleFormControlTextareaSuccessGray1" rows="3">Agreeable content was entered.</textarea>
    <small id="successTextareaHelpGray1" class="form-textarea valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

</form>
</div>

<div style="padding:2rem;background-color:#e8e8e8;"><!-- This div for Storybook display only. -->
<form class="uds-form-gray2">

  <div class="form-group">
    <label for="exampleFormControlTextareaDefaultGray2">Default textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaDefaultGray2" rows="3" placeholder="Enter your textarea content..."></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaFocusGray2">Focus textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaFocusGray2" rows="3">Focus here to see the focus state.</textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaDisabledGray2">Disabled textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaDisabledGray2" rows="3" placeholder="I got some content." disabled></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaErrorGray2">Error textarea</label>
    <textarea class="form-control is-invalid" aria-describedby="errorTextareaHelpGray2" id="exampleFormControlTextareaErrorGray2" rows="3"></textarea>
    <small id="errorTextareaHelpGray2" class="form-textarea invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaSuccessGray2">Success textarea</label>
    <textarea class="form-control is-valid" aria-describedby="successTextareaHelpGray2" id="exampleFormControlTextareaSuccessGray2" rows="3">Agreeable content was entered.</textarea>
    <small id="successTextareaHelpGray2" class="form-textarea valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

</form>
</div>

<div style="padding:2rem;background-color:#191919;"><!-- This div for Storybook display only. -->
<form class="uds-form-gray7">

  <div class="form-group">
    <label for="exampleFormControlTextareaDefaultGray7">Default textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaDefaultGray7" rows="3" placeholder="Enter your textarea content..."></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaFocusGray7">Focus textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaFocusGray7" rows="3">Focus here to see the focus state.</textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaDisabledGray7">Disabled textarea</label>
    <textarea class="form-control" id="exampleFormControlTextareaDisabledGray7" rows="3" placeholder="I got some content." disabled></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaErrorGray7">Error textarea</label>
    <textarea class="form-control is-invalid" aria-describedby="errorTextareaHelpGray7" id="exampleFormControlTextareaErrorGray7" rows="3"></textarea>
    <small id="errorTextareaHelpGray7" class="form-textarea invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextareaSuccessGray7">Success textarea</label>
    <textarea class="form-control is-valid" aria-describedby="successTextareaHelpGray7" id="exampleFormControlTextareaSuccessGray7" rows="3">Agreeable content was entered.</textarea>
    <small id="successTextareaHelpGray7" class="form-textarea valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

</form>
</div>

  `)

.add('Checkboxes', () => `
<form>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="loneCheckbox1" value="option1">
    <label class="form-check-label" for="loneCheckbox1">I like checkboxes</label>
  </div>

  <fieldset>
    <legend>A Group of Checkboxes</legend>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="checkbox1" value="option1">
      <label class="form-check-label" for="checkbox1">1</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="checkbox2" value="option2" checked>
      <label class="form-check-label" for="checkbox2">2</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="checkbox3" value="option3" disabled>
      <label class="form-check-label" for="checkbox3">3 (disabled)</label>
    </div>
  </fieldset>
</form>
`)

.add('Radios', () => `
<form>
  <fieldset>
    <legend>A Group of Radios</legend>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
      <label class="form-check-label" for="exampleRadios1">
        Default radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
      <label class="form-check-label" for="exampleRadios2">
        Second default radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
      <label class="form-check-label" for="exampleRadios3">
        Third default radio
      </label>
    </div>
    <div class="form-check disabled">
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" disabled>
      <label class="form-check-label" for="exampleRadios4">
        Disabled radio
      </label>
    </div>
  </fieldset>
</form>
`)

.add('Checkboxes and Radios, multiple backgrounds', () => `

<div style="padding:2rem;background-color:white;"><!-- This div for Storybook display only. -->
<form class="uds-form-white">

  <fieldset>
    <legend>A Group of Checkboxes</legend>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="whiteCheckbox1" value="option1">
      <label class="form-check-label" for="whiteCheckbox1">1</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="whiteCheckbox2" value="option2" checked>
      <label class="form-check-label" for="whiteCheckbox2">2</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="whiteCheckbox3" value="option3" disabled>
      <label class="form-check-label" for="whiteCheckbox3">3 (disabled)</label>
    </div>
  </fieldset>
  <fieldset>
    <legend>A Group of Radios</legend>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="whiteExampleRadios" id="whiteExampleRadios1" value="option1" checked>
      <label class="form-check-label" for="whiteExampleRadios1">
        Default radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="whiteExampleRadios" id="whiteExampleRadios2" value="option2">
      <label class="form-check-label" for="whiteExampleRadios2">
        Second default radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="whiteExampleRadios" id="whiteExampleRadios3" value="option3">
      <label class="form-check-label" for="whiteExampleRadios3">
        Third default radio
      </label>
    </div>
    <div class="form-check disabled">
      <input class="form-check-input" type="radio" name="whiteExampleRadios" id="whiteExampleRadios4" value="option4" disabled>
      <label class="form-check-label" for="whiteExampleRadios4">
        Disabled radio
      </label>
    </div>
  </fieldset>
</form>
</div>

<div style="padding:2rem;background-color:#fafafa;"><!-- This div for Storybook display only. -->
<form class="uds-form-gray1">

  <fieldset>
    <legend>A Group of Checkboxes</legend>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gray1Checkbox1" value="option1">
      <label class="form-check-label" for="gray1Checkbox1">1</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gray1Checkbox2" value="option2" checked>
      <label class="form-check-label" for="gray1Checkbox2">2</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gray1Checkbox3" value="option3" disabled>
      <label class="form-check-label" for="gray1Checkbox3">3 (disabled)</label>
    </div>
  </fieldset>
  <fieldset>
    <legend>A Group of Radios</legend>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="gray1ExampleRadios" id="gray1ExampleRadios1" value="option1" checked>
      <label class="form-check-label" for="gray1ExampleRadios1">
        Default radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="gray1ExampleRadios" id="gray1ExampleRadios2" value="option2">
      <label class="form-check-label" for="gray1ExampleRadios2">
        Second default radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="gray1ExampleRadios" id="gray1ExampleRadios3" value="option3">
      <label class="form-check-label" for="gray1ExampleRadios3">
        Third default radio
      </label>
    </div>
    <div class="form-check disabled">
      <input class="form-check-input" type="radio" name="gray1ExampleRadios" id="gray1ExampleRadios4" value="option4" disabled>
      <label class="form-check-label" for="gray1ExampleRadios4">
        Disabled radio
      </label>
    </div>
  </fieldset>
</form>
</div>

<div style="padding:2rem;background-color:#e8e8e8;"><!-- This div for Storybook display only. -->
<form class="uds-form-gray2">

  <fieldset>
    <legend>A Group of Checkboxes</legend>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gray2Checkbox1" value="option1">
      <label class="form-check-label" for="gray2Checkbox1">1</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gray2Checkbox2" value="option2" checked>
      <label class="form-check-label" for="gray2Checkbox2">2</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gray2Checkbox3" value="option3" disabled>
      <label class="form-check-label" for="gray2Checkbox3">3 (disabled)</label>
    </div>
  </fieldset>
  <fieldset>
    <legend>A Group of Radios</legend>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="gray2ExampleRadios" id="gray2ExampleRadios1" value="option1" checked>
      <label class="form-check-label" for="gray2ExampleRadios1">
        Default radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="gray2ExampleRadios" id="gray2ExampleRadios2" value="option2">
      <label class="form-check-label" for="gray2ExampleRadios2">
        Second default radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="gray2ExampleRadios" id="gray2ExampleRadios3" value="option3">
      <label class="form-check-label" for="gray2ExampleRadios3">
        Third default radio
      </label>
    </div>
    <div class="form-check disabled">
      <input class="form-check-input" type="radio" name="gray2ExampleRadios" id="gray2ExampleRadios4" value="option4" disabled>
      <label class="form-check-label" for="gray2ExampleRadios4">
        Disabled radio
      </label>
    </div>
  </fieldset>
</form>
</div>

<div style="padding:2rem;background-color:#191919;"><!-- This div for Storybook display only. -->
<form class="uds-form-gray7">

  <fieldset>
    <legend>A Group of Checkboxes</legend>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gray7Checkbox1" value="option1">
      <label class="form-check-label" for="gray7Checkbox1">1</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gray7Checkbox2" value="option2" checked>
      <label class="form-check-label" for="gray7Checkbox2">2</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gray7Checkbox3" value="option3" disabled>
      <label class="form-check-label" for="gray7Checkbox3">3 (disabled)</label>
    </div>
  </fieldset>
  <fieldset>
    <legend>A Group of Radios</legend>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="gray7ExampleRadios" id="gray7ExampleRadios1" value="option1" checked>
      <label class="form-check-label" for="gray7ExampleRadios1">
        Default radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="gray7ExampleRadios" id="gray7ExampleRadios2" value="option2">
      <label class="form-check-label" for="gray7ExampleRadios2">
        Second default radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="gray7ExampleRadios" id="gray7ExampleRadios3" value="option3">
      <label class="form-check-label" for="gray7ExampleRadios3">
        Third default radio
      </label>
    </div>
    <div class="form-check disabled">
      <input class="form-check-input" type="radio" name="gray7ExampleRadios" id="gray7ExampleRadios4" value="option4" disabled>
      <label class="form-check-label" for="gray7ExampleRadios4">
        Disabled radio
      </label>
    </div>
  </fieldset>
</form>

</div>
`)

.add('Kitchen Sink Form', () => `
<p><a href="https://getbootstrap.com/docs/4.0/components/forms/">Bootstrap 4 form docs</a></p>

<form>

  <div class="form-group">
    <label for="myTextInput">Text input</label>
    <input type="text" class="form-control" id="myTextInput" placeholder="Helper text">
  </div>

  <div class="form-group">
    <label for="myLgInput">Large input</label>
    <input type="text" class="form-control form-control-lg" id="myLgInput" placeholder="Helper text" value="Input text">
  </div>
  <div class="form-group">
    <label for="mySmInput">Small input</label>
    <input type="text" class="form-control form-control-sm" id="mySmInput" placeholder="Helper text" disabled>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="form-check">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
    <label class="form-check-label" for="exampleRadios1">
      Default radio
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
    <label class="form-check-label" for="exampleRadios2">
      Second default radio
    </label>
  </div>
  <div class="form-check disabled">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
    <label class="form-check-label" for="exampleRadios3">
      Disabled radio
    </label>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>

  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="checkbox1" value="option1">
    <label class="form-check-label" for="checkbox1">1</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="checkbox2" value="option2" checked>
    <label class="form-check-label" for="checkbox2">2</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="checkbox3" value="option3" disabled>
    <label class="form-check-label" for="checkbox3">3 (disabled)</label>
  </div>

</form>
  `)

; // close

