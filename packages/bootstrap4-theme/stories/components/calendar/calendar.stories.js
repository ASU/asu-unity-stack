import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Calendar');
import { initCalendar } from './calendar';

export const CalendarComponent = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div id="calendar"></div>
      </div>
    </div>
  </div>,
  initCalendar
);
