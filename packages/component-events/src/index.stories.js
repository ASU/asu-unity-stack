import React from "react";

import { Events } from "./events";

export default {
  title: "UDS/D8 Events",
  component: Events,
};

const Template = args => <Events {...args} />;

export const Default = Template.bind({});
Default.args = {};
