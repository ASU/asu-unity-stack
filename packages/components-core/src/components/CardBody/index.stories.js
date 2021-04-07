import { h } from "preact";
import classNames from "classnames";

import { CardBody } from ".";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export default {
  title: "UDS/CardBody",
  component: CardBody,
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
      <div
        className={classNames(
          UdsStyles["col"],
          UdsStyles["col-12"],
          UdsStyles["col-md-6"],
          UdsStyles["col-lg-4"]
        )}
      >
        <CardBody {...args} />
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  content:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
};
