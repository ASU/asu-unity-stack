import { h } from "preact";

import { UdsCloseButton } from ".";

export default {
  title: "UDS/UdsCloseButton",
  component: UdsCloseButton,
  argTypes: {
    color: {
      type: "select",
      options: ["white", "gray", "black"],
    },
  },
};

const Template = args => (
  <div class="container-fluid">
    <div class="col col-sm-12 p-3">
      <UdsCloseButton {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  close: true,
  color: "gray",
};
