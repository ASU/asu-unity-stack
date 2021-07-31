import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Calendar');
import { initCalendar } from './calendar';


const CalendarComponentMarkup = (
  <div id="calendar"></div>
)

export const Calendar = createStory(CalendarComponentMarkup, initCalendar)
