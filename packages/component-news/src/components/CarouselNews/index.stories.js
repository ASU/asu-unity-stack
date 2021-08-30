// @ts-check
import React from "react";

import { CarouselNews } from "./index";

export default {
  title: "UDS/CarouselNews",
  component: CarouselNews,
};

const Template = args => <CarouselNews {...args} />;

export const Default = Template.bind({});
Default.args = {};
