import React from "react";

import { CardsGridEvents } from ".";

export default {
  title: "UDS/D8 Events/Cards Grid",
  component: CardsGridEvents,
};

const Template = args => <CardsGridEvents {...args} />;

export const Default = Template.bind({});
Default.args = {};
