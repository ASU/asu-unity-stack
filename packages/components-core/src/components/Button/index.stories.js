import { h } from "preact";

import { Button } from ".";

export default {
  title: "UDS/Button",
  component: Button,
};

const Template = args => (
  <div class="container-fluid">
    <div class="col col-sm-12 p-3">
      <Button {...args} />
    </div>
  </div>
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: "Default Button",
};

export const SmallGoldButton = Template.bind({});
SmallGoldButton.args = {
  type: "button",
  label: "Small Gold Button",
  btnSize: "small",
  btnColor: "gold",
};

export const IconLabelButton = Template.bind({});
IconLabelButton.args = {
  type: "button",
  label: "Icon Button",
  labelIcon: "rocket",
};

export const TagButton = Template.bind({});
TagButton.args = {
  type: "button",
  label: "Tag Button",
  btnSize: "tag",
  tagColor: "gray",
};
