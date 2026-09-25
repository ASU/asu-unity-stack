import { Radios, RadioProps } from "./Radio";

export const defaultGaEvent = {
  text: "radio button",
  name: "onclick",
  event: "select",
  action: "click",
  region: "main content",
  section: "Default radio",
};

export const radiosDefault: RadioProps = {
  selected: "exampleRadios_option_1",
  label: "A Group of Radios",
  id: "exampleRadios",
  options: [
    { label: "Default radio", gaEvent: defaultGaEvent },
    { label: "Second default radio", gaEvent: defaultGaEvent },
    { label: "Third default radio", gaEvent: defaultGaEvent },
    {
      label: "Fourth default radio",
      gaEvent: defaultGaEvent,
    },
  ],
};

export const radiosInvalid: RadioProps = {
  selected: "invalidRadios_option_1",
  label: "A Group of Invalid Radios",
  id: "invalidRadios",
  invalidMessage: "Form error message",
  options: [
    { label: "Default radio", gaEvent: defaultGaEvent },
    { label: "Second default radio", gaEvent: defaultGaEvent },
    { label: "Third default radio", gaEvent: defaultGaEvent },
    {
      label: "Disabled radio",
      gaEvent: defaultGaEvent,
      disabled: true,
    },
  ],
};

export const radiosValid: RadioProps = {
  selected: "validRadios_option_1",
  label: "A Group of Valid Radios",
  id: "validRadios",
  validMessage: "Success message",
  options: [
    { label: "Default radio", gaEvent: defaultGaEvent },
    { label: "Second default radio", gaEvent: defaultGaEvent },
    { label: "Third default radio", gaEvent: defaultGaEvent },
    {
      label: "Disabled radio",
      gaEvent: defaultGaEvent,
      disabled: true,
    },
  ],
};

// for testing and/or displaying all examples on a single page using
// MultiRadioTest from "./Radio" instead of Radios for the type and component
// with args set to {radiosList: radioAllExamples}
export const radioAllExamples: Array<RadioProps> = [
  radiosDefault,
  radiosInvalid,
  radiosValid
];
