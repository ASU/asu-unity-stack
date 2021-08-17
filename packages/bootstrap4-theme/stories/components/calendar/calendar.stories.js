import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Calendar');
import { initCalendar } from './calendar';

export const CalendarComponent = createStory(
  <div id="calendar" class="m-4"></div>,
  initCalendar
);

export const AlignedCalendarComponent = createStory(
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="asu-header-align">
          {/* Component start */}
          <div id="calendar"></div>
          {/* Component end */}
        </div>
      </div>
    </div>
  </div>,
  initCalendar
);
