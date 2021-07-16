import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Calendar');
import './calendar';


const CalendarComponent = (
  <div id="calendar"></div>
)
export const Calendar = createStory(CalendarComponent)
