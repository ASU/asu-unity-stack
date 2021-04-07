import { h } from "preact";
import classNames from "classnames";

import { CardInfo } from ".";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export default {
  title: "UDS/CardInfo",
  component: CardInfo,
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
          <CardInfo {...args} />
        </div>
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  dateTime: "Wednesday, November 21st, 2021 11:30 a.m. - 12:30 p.m.",
  locationDisplay: "Downtown Phoenix Campus",
};
