// @ts-check
import React from "react";

import { GridCardNews } from "./index";

export default {
  title: "UDS/GridCardNews",
  component: GridCardNews,
};

const Template = args => <GridCardNews {...args} />;

export const Default = Template.bind({});
Default.args = {};
