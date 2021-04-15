import classNames from "classnames";
import React from "react";

import { EventLocation } from ".";
import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export default {
  title: "UDS/EventLocation",
  component: EventLocation,
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
            <div>
              <EventLocation {...args} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Vault Gallery, Downtown Phoenix campus Library",
  address1: "411 N Central Ave",
  address2: "PO Box 910298",
  city: "Phoenix",
  state: "AZ",
  zip: "85004",
  link: "https://google.com",
};
