import React from "react";

import { CardsListEvents } from ".";

export default {
  title: "UDS/D8 Events/Cards List",
  component: CardsListEvents,
};

const Template = args => <CardsListEvents {...args} />;

export const Default = Template.bind({});
Default.args = {};
