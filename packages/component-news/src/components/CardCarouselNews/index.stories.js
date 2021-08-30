// @ts-check
import React from "react";

import { CardCarouselNews } from "./index";

export default {
  title: "UDS/CarouselCardNews",
  component: CardCarouselNews,
};

const Template = args => <CardCarouselNews {...args} />;

export const Default = Template.bind({});
Default.args = {};
