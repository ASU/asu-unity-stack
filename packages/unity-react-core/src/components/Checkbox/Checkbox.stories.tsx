import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Form, formBackground } from "../Form/Form";
import { Checkboxes, CheckboxProps } from "./Checkbox";

const defaultGaEvent = {
  text: "checkbox button",
  name: "onclick",
  event: "select",
  action: "click",
  region: "main content",
  section: "Default checkbox",
};

const checkboxExample1: CheckboxProps = {
  // label: "A Group of Checkboxes",
  id: "exampleCheckbox",
  options: [{ label: "I like checkboxes", gaEvent: defaultGaEvent }],
};

const checkboxsDefault: CheckboxProps = {
  // label: "A Group of Checkboxes",
  id: "exampleCheckbox",
  // validMessage: "Group Success message",
  options: [
    { label: "I like checkboxes", gaEvent: defaultGaEvent },
    {
      label:
        "Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content",
      gaEvent: defaultGaEvent,
    },
    {
      label: "I accept",
      gaEvent: defaultGaEvent,
      checked: true,
      validMessage: "Success message",
    },
  ],
};

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
  args: checkboxsDefault,
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
  args: {},
};
