// @ts-check

/**
 *
 * @param {function} callback
 * @param {number} time
 * throttle calls a function at intervals of a specified amount of time while the user is carrying out an event.
 */

let throttleTimer = false;
const throttle = (callback, time) => {
  if (throttleTimer) return;
  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

/**
 *
 * @param {function} callback
 * @param {number} time
 * debounce calls a function when a user hasn’t carried out an event in a specific amount of time
 */
let debounceTimer;
const debounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

export { throttle, debounce };
