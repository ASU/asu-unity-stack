import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Form, formBackground } from "../Form/Form";
import { MultiCheckboxTest, Checkboxes, CheckboxProps } from "./Checkbox";

const defaultGaEvent = {
  text: "checkbox",
  name: "onclick",
  event: "select",
  action: "click",
  region: "main content",
  section: "Default checkbox",
};

const checkboxDefault: CheckboxProps = {
  id: "exampleCheckbox",
  options: [
    {
      label: "I like checkboxes",
      value: "option1",
      gaEvent: { ...defaultGaEvent, ...{ section: "I like checkboxes" } },
    },
  ],
};

const checkboxMultiLine: CheckboxProps = {
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

const checkboxValid: CheckboxProps = {
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

const checkboxInvalid: CheckboxProps = {
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

const checkboxGroup: CheckboxProps = {
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

const checkboxValidGroup: CheckboxProps = {
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

const checkboxInvalidGroup: CheckboxProps = {
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

// for displaying all examples on a single page using
// MultiCheckboxTest instead of Checkboxes for the type and component
// with args set to {checkboxesList: checkboxAllExamples}
const checkboxAllExamples: Array<CheckboxProps> = [
  checkboxDefault,
  checkboxMultiLine,
  checkboxValid,
  checkboxInvalid,
  checkboxGroup,
  checkboxValidGroup,
  checkboxInvalidGroup,
];

const meta: Meta<typeof Checkboxes> = {
  title: "Components/Form/Checkboxes",
  component: Checkboxes,
  parameters: {
    docs: {
      description: {
        component: "Checkbox input button(s) for forms.",
      },
    },
  },
  argTypes: {
    // @ts-expect-error
    background: {
      name: "Form Background",
      control: {
        type: "checkbox",
      },
      options: formBackground,
    },
  },
  args: {},
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

type Story = StoryObj<typeof Checkboxes>;

export const Default: Story = {
  name: "Default",
  args: checkboxDefault,
};

export const MultiLine: Story = {
  name: "Multi-line",
  args: checkboxMultiLine,
};

export const Valid: Story = {
  name: "Valid",
  args: checkboxValid,
};

export const Invalid: Story = {
  name: "Invalid",
  args: checkboxInvalid,
};

export const Group: Story = {
  name: "Group",
  args: checkboxGroup,
};

export const GroupValid: Story = {
  name: "Group Valid",
  args: checkboxValidGroup,
};

export const GroupInvalid: Story = {
  name: "Group Invalid",
  args: checkboxInvalidGroup,
};
