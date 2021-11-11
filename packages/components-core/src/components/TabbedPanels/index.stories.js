import React from "react";

import { TabbedPanels } from ".";

import { panels } from "./test-content";

export default {
  title: "UDS/TabbedPanels",
  component: TabbedPanels,
};

const Template = () => {
  return (
    <div className="row no-gutters">
      <div className="col uds-full-width">
        <TabbedPanels panels={panels} bgColor="bg-gray-1" />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
