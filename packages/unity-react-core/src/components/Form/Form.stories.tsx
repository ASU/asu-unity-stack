import type { Meta, StoryObj } from "@storybook/react";
import { Form, formBackground } from "./Form";
import { Select, OptionProps } from "../Select/Select"
import { TextInput } from "../TextInput/TextInput";
import { Textarea } from "../Textarea/Textarea";

const formTemplate = args => <Form {...args} />;

const options: OptionProps[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const defaultArgs = {
  children: <>
    <label style={{ fontWeight: 'normal' }}>
      <span
        title="Required"
        className="fa fa-icon fa-circle uds-field-required"
      />
      Indicates required field
    </label>
    <br/>
    <TextInput label="First name" required={true} />
    <TextInput label="Last name" required={true} />
    <Select id="text" label="Options" required={true} options={options} />
    <Textarea label="Feedback" />
  </>,
  className: "uds-form",
  background: formBackground[0]
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

type Story = StoryObj<typeof Form>;

export const Basic: Story = {};

export const Overview = {
  render: formTemplate.bind({}),
  name: "Form",
};

