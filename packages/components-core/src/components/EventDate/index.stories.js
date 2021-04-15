import classNames from "classnames";
import React from "react";

import { EventDate } from ".";
import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export default {
  title: "UDS/EventDate",
  component: EventDate,
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
          <div className={UdsStyles["card-header"]} />
          <div className={UdsStyles["card-event-details"]}>
            <EventDate {...args} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  startTime: "Wednesday, November 21st, 2021 11:30 a.m",
  stopTime: "12:30 p.m.",
};
