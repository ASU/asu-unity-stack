import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Form Fields', module)
  .addParameters({
    happo: false,
  })

  .add('Text Input', () => `
<form>

  <div class="form-group">
    <label for="exampleDefaultInput">Default text label</label>
    <input type="text" class="form-control" id="exampleDefaultInput" placeholder="Helper text">
  </div>

  <div class="form-group">
    <label for="exampleFocusInput">Focus text label</label>
    <input type="text" class="form-control" id="exampleFocusInput" placeholder="Helper text" value="Input text">
  </div>

  <div class="form-group">
    <label for="exampleDisabledInput">Disabled text label</label>
    <input type="text" class="form-control" id="exampleDisabledInput" placeholder="Helper text" disabled>
  </div>

  <div class="form-group">
    <label for="exampleErrorInput">Error text label</label>
    <input type="text" class="form-control is-invalid" id="exampleErrorInput" aria-describedby="errorHelp" placeholder="Helper text">
    <small id="errorHelp" class="form-text invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleSuccessInput">Success text label</label>
    <input type="text" class="form-control is-valid" id="exampleSuccessInput" aria-describedby="successHelp" placeholder="Helper text" value="Input text">
    <small id="successHelp" class="form-text valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

  <div class="form-group">
    <label for="exampleTrailingIconInput">Trailing icon text label</label>
    <div class="input-group input-group-trailing-icon">
      <input type="text" class="form-control" id="exampleTrailingIconInput" aria-describedby="trailingIconHelp" placeholder="Helper text">
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

  .add('Text input, various backgrounds', () => `
<form class="uds-form-white">
  <div class="form-group">
    <label for="exampleDefaultInput">Default text label</label>
    <input type="text" class="form-control" id="exampleDefaultInput" placeholder="Helper text">
  </div>

  <div class="form-group">
    <label for="exampleFocusInput">Focus text label</label>
    <input type="text" class="form-control" id="exampleFocusInput" placeholder="Helper text" value="Input text">
  </div>

  <div class="form-group">
    <label for="exampleDisabledInput">Disabled text label</label>
    <input type="text" class="form-control" id="exampleDisabledInput" placeholder="Helper text" disabled>
  </div>

  <div class="form-group">
    <label for="exampleErrorInput">Error text label</label>
    <input type="text" class="form-control is-invalid" id="exampleErrorInput" aria-describedby="errorHelp" placeholder="Helper text">
    <small id="errorHelp" class="form-text invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleSuccessInput">Success text label</label>
    <input type="text" class="form-control is-valid" id="exampleSuccessInput" aria-describedby="successHelp" placeholder="Helper text" value="Input text">
    <small id="successHelp" class="form-text valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

  <div class="form-group">
    <label for="exampleTrailingIconInput">Trailing icon text label</label>
    <div class="input-group input-group-trailing-icon">
      <input type="text" class="form-control" id="exampleTrailingIconInput" aria-describedby="trailingIconHelp" placeholder="Helper text">
      <span class="fa fa-icon fa-calendar" aria-hidden="true"></span>
    </div>
  </div>
</form>

<form class="uds-form-gray1">
  <div class="form-group">
    <label for="exampleDefaultInput">Default text label</label>
    <input type="text" class="form-control" id="exampleDefaultInput" placeholder="Helper text">
  </div>

  <div class="form-group">
    <label for="exampleFocusInput">Focus text label</label>
    <input type="text" class="form-control" id="exampleFocusInput" placeholder="Helper text" value="Input text">
  </div>

  <div class="form-group">
    <label for="exampleDisabledInput">Disabled text label</label>
    <input type="text" class="form-control" id="exampleDisabledInput" placeholder="Helper text" disabled>
  </div>

  <div class="form-group">
    <label for="exampleErrorInput">Error text label</label>
    <input type="text" class="form-control is-invalid" id="exampleErrorInput" aria-describedby="errorHelp" placeholder="Helper text">
    <small id="errorHelp" class="form-text invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleSuccessInput">Success text label</label>
    <input type="text" class="form-control is-valid" id="exampleSuccessInput" aria-describedby="successHelp" placeholder="Helper text" value="Input text">
    <small id="successHelp" class="form-text valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

  <div class="form-group">
    <label for="exampleTrailingIconInput">Trailing icon text label</label>
    <div class="input-group input-group-trailing-icon">
      <input type="text" class="form-control" id="exampleTrailingIconInput" aria-describedby="trailingIconHelp" placeholder="Helper text">
      <span class="fa fa-icon fa-calendar" aria-hidden="true"></span>
    </div>
  </div>
</form>

<form class="uds-form-gray2">
  <div class="form-group">
    <label for="exampleDefaultInput">Default text label</label>
    <input type="text" class="form-control" id="exampleDefaultInput" placeholder="Helper text">
  </div>

  <div class="form-group">
    <label for="exampleFocusInput">Focus text label</label>
    <input type="text" class="form-control" id="exampleFocusInput" placeholder="Helper text" value="Input text">
  </div>

  <div class="form-group">
    <label for="exampleDisabledInput">Disabled text label</label>
    <input type="text" class="form-control" id="exampleDisabledInput" placeholder="Helper text" disabled>
  </div>

  <div class="form-group">
    <label for="exampleErrorInput">Error text label</label>
    <input type="text" class="form-control is-invalid" id="exampleErrorInput" aria-describedby="errorHelp" placeholder="Helper text">
    <small id="errorHelp" class="form-text invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleSuccessInput">Success text label</label>
    <input type="text" class="form-control is-valid" id="exampleSuccessInput" aria-describedby="successHelp" placeholder="Helper text" value="Input text">
    <small id="successHelp" class="form-text valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

  <div class="form-group">
    <label for="exampleTrailingIconInput">Trailing icon text label</label>
    <div class="input-group input-group-trailing-icon">
      <input type="text" class="form-control" id="exampleTrailingIconInput" aria-describedby="trailingIconHelp" placeholder="Helper text">
      <span class="fa fa-icon fa-calendar" aria-hidden="true"></span>
    </div>
  </div>
</form>

<form class="uds-form-gray7">
  <div class="form-group">
    <label for="exampleDefaultInput">Default text label</label>
    <input type="text" class="form-control" id="exampleDefaultInput" placeholder="Helper text">
  </div>

  <div class="form-group">
    <label for="exampleFocusInput">Focus text label</label>
    <input type="text" class="form-control" id="exampleFocusInput" placeholder="Helper text" value="Input text">
  </div>

  <div class="form-group">
    <label for="exampleDisabledInput">Disabled text label</label>
    <input type="text" class="form-control" id="exampleDisabledInput" placeholder="Helper text" disabled>
  </div>

  <div class="form-group">
    <label for="exampleErrorInput">Error text label</label>
    <input type="text" class="form-control is-invalid" id="exampleErrorInput" aria-describedby="errorHelp" placeholder="Helper text">
    <small id="errorHelp" class="form-text invalid-feedback"><span title="Alert" class="fa fa-icon fa-exclamation-triangle"></span>Form error message</small>
  </div>

  <div class="form-group">
    <label for="exampleSuccessInput">Success text label</label>
    <input type="text" class="form-control is-valid" id="exampleSuccessInput" aria-describedby="successHelp" placeholder="Helper text" value="Input text">
    <small id="successHelp" class="form-text valid-feedback"><span title="Alert" class="fa fa-icon fa-check-circle"></span>Success message</small>
  </div>

  <div class="form-group">
    <label for="exampleTrailingIconInput">Trailing icon text label</label>
    <div class="input-group input-group-trailing-icon">
      <input type="text" class="form-control" id="exampleTrailingIconInput" aria-describedby="trailingIconHelp" placeholder="Helper text">
      <span class="fa fa-icon fa-calendar" aria-hidden="true"></span>
    </div>
  </div>
</form>

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
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
    <label class="form-check-label" for="inlineCheckbox1">1</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" checked>
    <label class="form-check-label" for="inlineCheckbox2">2</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
    <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
  </div>

</form>
  `)

; // clos)

