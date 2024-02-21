import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";
import { initCalendar as initFunc } from "./calendar";

export default {
  title: "Molecules/Calendar/Templates",
  decorators: [ defaultDecorator ],
  parameters: {
    initFunc: {
      code: initFunc,
      disable: false,
    },
  },
};

export const CalendarComponent = () => <div id="calendar"></div>;

