import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Calendar');
import { initCalendar } from './calendar';

export const CalendarComponent = createStory(
  <div id="calendar"></div>,
  initCalendar
);
