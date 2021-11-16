// @ts-check
/**
 * Adds minutes to given date
 * @param {string | Date} date
 * @param {number} minutes
 * @returns {Date}
 */
const addMinutesToDate = (date, minutes) => {
  const dateWithMinutes = new Date(date);
  dateWithMinutes.setMinutes(dateWithMinutes.getMinutes() + minutes);
  return dateWithMinutes;
};

/**
 * Check whether this is the first page load of the site.
 * @param {string} root - The full URL of the site root, used to check against document.referrer
 */
const checkFirstLoad = root => {
  const now = new Date();
  const { localStorage } = window;
  const siteRoot = root || window.location.hostname;
  // Check if title_loaded is set
  const titleLoaded = localStorage.getItem("title_loaded");
  const titleLoadedExpired = now.getTime() > parseInt(titleLoaded, 10);

  if (
    !document.referrer.includes(siteRoot) &&
    (!titleLoaded || titleLoadedExpired)
  ) {
    // Set 10 minutes to now date and set it as expiration time
    const expirationTime = addMinutesToDate(now, 10).getTime();
    localStorage.setItem("title_loaded", expirationTime.toString());
    return true;
  }

  return false;
};

export { checkFirstLoad };
