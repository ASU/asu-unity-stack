import { CheckboxProps } from "./Checkbox";

export const defaultGaEvent = {
  text: "checkbox",
  name: "onclick",
  event: "select",
  action: "click",
  region: "main content",
  section: "Default checkbox",
};

export const checkboxDefault: CheckboxProps = {
  id: "exampleCheckbox",
  options: [
    {
      label: "I like checkboxes",
      value: "option1",
      gaEvent: { ...defaultGaEvent, ...{ section: "I like checkboxes" } },
    },
  ],
};

export const checkboxMultiLine: CheckboxProps = {
  id: "multiLineCheckbox",
  options: [
    {
      label:
        "Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content",
      value: "option1",
      gaEvent: {
        ...defaultGaEvent,
        ...{
          section:
            "Multi-line content Multi-line content Multi-line content...",
        },
      },
    },
  ],
};

export const checkboxValid: CheckboxProps = {
  id: "successCheckedCheckbox",
  options: [
    {
      label: "I accept",
      value: "option1",
      gaEvent: { ...defaultGaEvent, ...{ section: "I accept" } },
      checked: true,
      validMessage: "Success message",
    },
  ],
};

export const checkboxInvalid: CheckboxProps = {
  id: "invalidCheckbox",
  options: [
    {
      label: "I also accept",
      value: "option1",
      gaEvent: { ...defaultGaEvent, ...{ section: "I also accept" } },
      invalidMessage: "Form error message",
    },
  ],
};

export const checkboxGroup: CheckboxProps = {
  id: "groupOfCheckboxes",
  label: "A Group of Checkboxes",
  options: [
    {
      label: "1",
      value: "option1",
      gaEvent: { ...defaultGaEvent, ...{ section: "1" } },
    },
    {
      label: "2",
      value: "option2",
      gaEvent: { ...defaultGaEvent, ...{ section: "2" } },
      checked: true,
    },
    {
      label: "3 (disabled)",
      value: "option3",
      gaEvent: { ...defaultGaEvent, ...{ section: "3" } },
      disabled: true,
    },
  ],
};

export const checkboxValidGroup: CheckboxProps = {
  id: "groupOfValidCheckboxes",
  label: "A Group of Valid Checkboxes",
  validMessage: "Success message",
  options: [
    {
      label: "1",
      value: "option1",
      gaEvent: { ...defaultGaEvent, ...{ section: "1" } },
    },
    {
      label: "2",
      value: "option2",
      gaEvent: { ...defaultGaEvent, ...{ section: "2" } },
      checked: true,
    },
    {
      label: "3 (disabled)",
      value: "option3",
      gaEvent: { ...defaultGaEvent, ...{ section: "3" } },
      disabled: true,
    },
  ],
};

export const checkboxInvalidGroup: CheckboxProps = {
  id: "groupOfInvalidCheckboxes",
  label: "A Group of Invalid Checkboxes",
  invalidMessage: "Form error message",
  options: [
    {
      label: "1",
      value: "option1",
      gaEvent: { ...defaultGaEvent, ...{ section: "1" } },
    },
    {
      label: "2",
      value: "option2",
      gaEvent: { ...defaultGaEvent, ...{ section: "2" } },
      checked: true,
    },
    {
      label: "3 (disabled)",
      value: "option3",
      gaEvent: { ...defaultGaEvent, ...{ section: "3" } },
      disabled: true,
    },
  ],
};

// for testing and/or displaying all examples on a single page using
// MultiCheckboxTest from "./Checkbox" instead of Checkboxes for the type and component
// with args set to {checkboxesList: checkboxAllExamples}
export const checkboxAllExamples: Array<CheckboxProps> = [
  checkboxDefault,
  checkboxMultiLine,
  checkboxValid,
  checkboxInvalid,
  checkboxGroup,
  checkboxValidGroup,
  checkboxInvalidGroup,
];
