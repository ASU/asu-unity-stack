import React from "react";
import { defaultDecorator } from "@asu/shared";

export default {
  title: "Molecules/Calendar/Templates",
  decorators: [defaultDecorator],
  parameters: {
    initFunc: {
      disable: false,
    },
    controls: { disable: true },
  },
};

export const CalendarComponent = () => <div id="calendar"></div>;
