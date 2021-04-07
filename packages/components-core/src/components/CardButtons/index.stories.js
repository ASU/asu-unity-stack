import { h } from "preact";
import classNames from "classnames";

import { CardButtons } from ".";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export default {
  title: "UDS/CardButtons",
  component: CardButtons,
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
        <div className={UdsStyles["card"]}>
          <div className={UdsStyles["card-header"]}></div>
          <CardButtons {...args} />
        </div>
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  buttons: ["Google label", "Microsoft label"],
};
