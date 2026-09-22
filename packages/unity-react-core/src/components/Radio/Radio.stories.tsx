import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Form, formBackground } from "../Form/Form";
import { Radios, RadioProps } from "./Radio";

const defaultGaEvent = {
  text: "radio button",
  name: "onclick",
  event: "select",
  action: "click",
  region: "main content",
  section: "Default radio",
};

const radiosDefault: RadioProps = {
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

const radiosInvalid: RadioProps = {
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

const radiosValid: RadioProps = {
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

const meta: Meta<typeof Radios> = {
  title: "Components/Form/Radios",
  component: Radios,
  parameters: {
    docs: {
      description: {
        component: "A text input field for forms.",
      },
    },
  },
  argTypes: {
    // @ts-expect-error
    background: {
      name: "Form Background",
      control: {
        type: "radio",
      },
      options: formBackground,
    },
  },
  args: radiosDefault,
  decorators: [
    // @ts-expect-error
    (Story, { args: { background, ...rest } }) => (
      <Form background={background}>
        <Story {...rest} />
      </Form>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Radios>;

export const Default: Story = {
  name: "Default",
  args: {},
};

export const Disabled: Story = {
  name: "Disabled",
  args: { label: "A Group of Disabled Radios", disabled: true },
};

export const Invalid: Story = {
  name: "Invalid",
  args: radiosInvalid,
};

export const Valid: Story = {
  name: "Valid",
  args: radiosValid,
};
