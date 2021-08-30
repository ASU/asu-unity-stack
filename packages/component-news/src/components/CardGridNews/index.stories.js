// @ts-check
import React from "react";

import { CardGridNews } from "./index";

export default {
  title: "UDS/GridCardNews",
  component: CardGridNews,
};

const Template = args => <CardGridNews {...args} />;

export const Default = Template.bind({});
Default.args = {};
