// @ts-check
/**
 * Javascript for fixed table functionality.
 * Fixed table should display scroll buttons when hovering over scrollable
 * portion of table, and hide them when hovering over fixed column or when
 * mouse exits table.
 *
 * The scroll buttons must be outside the table container, within the table wrapper,
 * due to the absolute positioning requirements. Because the table scrolls,
 * if they were to be absolutely positioned in the same container as the table,
 * they would scroll with it.
 */
window.addEventListener('DOMContentLoaded', function () {
  initializeFixedTable();
});

function initializeFixedTable() {
  setPreButtonPosition();
  setButtonLiListeners();
  window.addEventListener('resize', function () {
    debounce(setPreButtonPosition, 100)();
  });
}

function setPreButtonPosition() {
  const wrapperSelector = '.uds-table-fixed-wrapper';
  const tableSelector = '.uds-table.uds-table-fixed table';
  const prevScrollSelector = '.scroll-control.previous';

  const wrappers = document.querySelectorAll(wrapperSelector);
  wrappers.forEach((wrapper, index) => {
    /** @type {HTMLTableElement} */
    const table = wrapper.querySelector(tableSelector);
    table.setAttribute('id', 'uds-table-' + index);
    /** @type {HTMLTableCellElement} */
    const firstCol = table.querySelector('tbody tr > *');
    /** @type {HTMLElement} */
    const prevButton = wrapper.querySelector(prevScrollSelector);
    prevButton.style.left = firstCol.offsetWidth + 'px';
  });
}

function setButtonLiListeners() {
  const containerSelector = '.uds-table-fixed';
  const wrapperSelector = '.uds-table-fixed-wrapper';
  const prevScrollSelector = '.scroll-control.previous';
  const nextScrollSelector = '.scroll-control.next';

  const wrappers = document.querySelectorAll(wrapperSelector);
  wrappers.forEach((wrapper, index) => {
    const container = wrapper.querySelector(containerSelector);
    const prevButton = wrapper.querySelector(prevScrollSelector);
    const nextButton = wrapper.querySelector(nextScrollSelector);

    ['click', 'focus'].forEach((eventName) => {
      prevButton.addEventListener(eventName, function () {
        /* Scroll can't go beyond it's bounds, it won't go lower than 0 */
        container.scrollLeft -= 100;
      });

      nextButton.addEventListener(eventName, function () {
        container.scrollLeft += 100;
      });
    });
  });
}

function debounce(func, timeout) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
