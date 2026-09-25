import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Form, formBackground } from "../Form/Form";
import { Checkboxes, CheckboxProps } from "./Checkbox";
import {
  checkboxDefault,
  checkboxMultiLine,
  checkboxValid,
  checkboxInvalid,
  checkboxGroup,
  checkboxValidGroup,
  checkboxInvalidGroup,
} from "./Checkbox.parameters";

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
