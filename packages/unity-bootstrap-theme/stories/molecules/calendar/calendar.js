export const initCalendar = function () {
  const pushGAEvent = (event) => {
    const { dataLayer } = window;
    console.log(event);
    if (dataLayer) dataLayer.push(event);
  };

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const desktopDaysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const mobileDaysOfWeek = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
  const gridsize = 42;

  const state = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };

  const datesForGrid = (year, month) => {
    const today = new Date();
    const dates = [];
    const firstDay = new Date(year, month).getDay();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    const totalDaysInPrevMonth = new Date(year, month, 0).getDate();

    // Days from prev month to show in the grid
    for (let i = 1; i <= firstDay; i++) {
      const prevMonthDate = totalDaysInPrevMonth - firstDay + i;
      const key = new Date(
        state.year,
        state.month - 1,
        prevMonthDate
      ).toLocaleString();
      dates.push({ key: key, date: prevMonthDate, monthClass: 'prev' });
    }

    // Days of the current month to show in the grid
    for (let i = 1; i <= totalDaysInMonth; i++) {
      const key = new Date(state.year, state.month, i).toLocaleString();
      if (
        i === today.getDate() &&
        state.month === today.getMonth() &&
        state.year === today.getFullYear()
      ) {
        dates.push({
          key: key,
          date: i,
          monthClass: 'current',
          todayClass: 'today',
        });
      } else {
        dates.push({ key: key, date: i, monthClass: 'current' });
      }
    }

    // If there is space left over in the grid, then show the dates for the next month
    if (dates.length < gridsize) {
      const count = gridsize - dates.length;
      for (let i = 1; i <= count; i++) {
        const key = new Date(state.year, state.month + 1, i).toLocaleString();
        dates.push({ key: key, date: i, monthClass: 'next' });
      }
    }

    return dates;
  };

  const render = () => {
    const calendarContainer = document.getElementById('calendar');
    calendarContainer.innerHTML = `
      <h2><span className="highlight-black">${months[state.month]} ${
      state.year
    }</span></h2>
      <div className="calendar-grid">
        <div className="heading desktop">
          ${desktopDaysOfWeek.map((day) => `<p>${day}</p>`).join('')}
        </div>
        <div className="heading mobile">
          ${mobileDaysOfWeek.map((day) => `<p>${day}</p>`).join('')}
        </div>
        <div className="body">
          ${datesForGrid(state.year, state.month)
            .map(
              (date) =>
                `<h3 id="${date.key}" className="calendar-item ${
                  date.monthClass
                }" ${
                  date.todayClass
                    ? `aria-label="${date.todayClass[0].toUpperCase()}${date.todayClass.slice(
                        1
                      )}"`
                    : ''
                }>
                  <span className="${date.todayClass ? date.todayClass : ''}">${
                  date.date
                }</span>
                </h3>`
            )
            .join('')}
        </div>
      </div>
      <div className="calendar-nav">
        <button
          id="prev-month"
          aria-label="Previous month"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="carousel"
          data-ga-region="main content"
          data-ga-section="calendar"
          data-ga="left chevron"
        >
          <span className="fas fa-angle-left"></span>
        </button>
        <button
          id="next-month"
          aria-label="Next month"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="carousel"
          data-ga-region="main content"
          data-ga-section="calendar"
          data-ga="right chevron"
        >
          <span className="fas fa-angle-right"></span>
        </button>
      </div>
  `;
  };

  const showCalendar = (monthIndicator) => {
    var date = new Date(state.year, state.month + monthIndicator);
    state.year = date.getFullYear();
    state.month = date.getMonth();
    render();
  };

  document.addEventListener('click', (ev) => {
    if (ev.target.id === 'prev-month') {
      showCalendar(-1);
    }
    if (ev.target.id === 'next-month') {
      showCalendar(1);
    }

    const name = ev.target.getAttribute('data-ga-name');
    const event = ev.target.getAttribute('data-ga-event');
    const action = ev.target.getAttribute('data-ga-action');
    const type = ev.target.getAttribute('data-ga-type');
    const section = ev.target.getAttribute('data-ga-section');
    const region = ev.target.getAttribute('data-ga-region');
    const text = ev.target.getAttribute('data-ga');
    const component = ev.target.getAttribute('data-ga-component');

    pushGAEvent({
      name: name ? name.toLowerCase() : '',
      event: event ? event.toLowerCase() : '',
      action: action ? action.toLowerCase() : '',
      type: type ? type.toLowerCase() : '',
      section: section ? section.toLowerCase() : '',
      region: region ? region.toLowerCase() : '',
      text: text ? text.toLowerCase() : '',
      component: component ? component.toLowerCase() : '',
    });
  });

  showCalendar(0);
};
