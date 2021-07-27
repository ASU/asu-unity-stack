import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Calendar');
import { initCalendar } from './calendar';


const CalendarComponentMarkup = (
  <div id="calendar"></div>
)



class CalendarComponent extends React.Component {

  componentDidMount() {
    initCalendar();
  }

  render() {
    return CalendarComponentMarkup;
  }
}

const ExampleStory = (
  <div>
    <CalendarComponent />
  </div>
)

export const Calendar = createStory(ExampleStory)
