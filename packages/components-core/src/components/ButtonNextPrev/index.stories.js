import React from "react";

import { ButtonNextPrev } from ".";

export default {
  title: "UDS/ButtonNextPrev",
  component: ButtonNextPrev,
};

const Template = args => (
  <div class="container-fluid">
    <div class="col col-sm-12 p-3">
      <ButtonNextPrev {...args} />
    </div>
  </div>
);

export const Next = Template.bind({});
Next.args = {
  color: "white",
  direction: "next",
};

export const Previous = Template.bind({});
Previous.args = {
  color: "white",
  direction: "prev",
};
