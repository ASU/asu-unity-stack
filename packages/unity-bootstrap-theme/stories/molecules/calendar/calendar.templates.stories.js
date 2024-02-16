import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default {
  title: "Molecules/Calendar/Templates",
};
import { initCalendar as initFunc } from "./calendar";

export const CalendarComponent = createStory(<div id="calendar"></div>, {
  initFunc,
});
CalendarComponent.args = {
  template: 1,
};
