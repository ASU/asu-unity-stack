import { h } from "preact";
import classNames from "classnames";

import { Card } from ".";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export default {
  title: "UDS/Card",
  component: Card,
};

const Template = args => (
  <div className={UdsStyles["container"]}>
    <div
      className={classNames(
        UdsStyles["row"],
        UdsStyles["row-spaced"],
        UdsStyles["pt-2"],
        UdsStyles["pb-2"]
      )}
    >
      <Card {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "default",
  width: "25%",
  horizontal: false,
  hover: false,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  icon: "",
  title: "Default title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  eventDisplay: "Inline",
  startTime: "Wednesday, November 21st, 2021 11:30 a.m",
  stopTime: "12:30 p.m.",
  location: "Downtown Phoenix campus",
  buttons: ["Google label", "Microsoft label"],
  tags: ["tag one", "tag two", "tag three", "tag four"],
};
