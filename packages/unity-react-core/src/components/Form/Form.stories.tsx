import { Meta } from "@storybook/react";
import React from "react";

import { Form } from "./Form";

const formTemplate = args => <Form {...args} />;

const defaultArgs = {
  children: "Form content",
};
const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  args: defaultArgs,
  parameters: {
    docs: {
      description: {
        component: `Form component is used to wrap form elements.
        `,
      },
    },
  },
};

export default meta;

export const Overview = {
  render: formTemplate.bind({}),
  name: "Form",
  args: {
    background: "uds-form-gray1",
  },
};
