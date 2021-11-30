// @ts-check

/**
 * @param {string | Date} date
 * @param {number} days
 * @returns {Date}
 */
const addDays = (date, days) => {
  const dateWithDays = new Date(date);
  dateWithDays.setDate(dateWithDays.getDate() + days);
  return dateWithDays;
};

export { addDays };
