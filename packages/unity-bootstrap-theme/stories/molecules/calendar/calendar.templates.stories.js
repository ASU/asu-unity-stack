import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default createComponent("Calendar", "Molecules", "Templates");
import { initCalendar as initFunc } from "./calendar";

export const CalendarComponent = createStory(<div id="calendar"></div>, {
  initFunc,
});
CalendarComponent.parameters = {
  uds: {
    template: {
      include: [1,3]
    }
  }
};
