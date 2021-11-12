// @ts-check
/**
 * Javascript for fixed table functionality. Fixed table should display scroll buttons when hovering over scrollable portion of table,
 * and hide them when hovering over fixed column or when mouse exits table.
 *
 * The scroll buttons must be outside the table container, within the table wrapper, due to the absolute positioning requirements.
 * Because the table scrolls, if they were to be absolutely positioned in the same container as the table, they would scroll with it.
 */
window.addEventListener('DOMContentLoaded', function () {
  initializeFixedTable();
});

function initializeFixedTable() {
  setTablePrevScroller();
  setTableScroller();
  window.addEventListener('resize', function () {
    debounce(setTablePrevScroller, 100)();
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

function setTablePrevScroller() {
  const wrapperSelector = '.uds-table-fixed-wrapper';
  const tabelSelector = '.uds-table.uds-table-fixed table';
  const prevScrollSelector = '.scroll-control.previous';

  const wrappers = document.querySelectorAll(wrapperSelector);
  wrappers.forEach((wrapper, index) => {
    /** @type {HTMLTableElement} */
    const table = wrapper.querySelector(tabelSelector);
    table.setAttribute('id', 'uds-table-' + index);
    /** @type {HTMLTableCellElement} */
    const firstCol = table.querySelector('tbody tr > *');
    /** @type {HTMLElement} */
    const prevScroll = wrapper.querySelector(prevScrollSelector);
    prevScroll.style.left = firstCol.offsetWidth + 'px';
  });
}

function setTableScroller() {
  const wrapper = document.querySelector('.uds-table-fixed-wrapper');
  const container = wrapper.querySelector('.uds-table-fixed');
  const previous = wrapper.querySelector('.scroll-control.previous');
  const next = wrapper.querySelector('.scroll-control.next');

  // If the user leaves the scrollable area, hide the scroll
  wrapper.addEventListener('mouseleave', function () {
    previous.classList.remove('show');
    next.classList.remove('show');
  });

  ['click', 'focus'].forEach((event) => {
    previous.addEventListener(event, function () {
      /* Scroll can't go beyond it's bounds, so don't need to do checks here
      (once it hits zero, it won't go lower) */
      container.scrollLeft -= 100;
    });

    next.addEventListener(event, function () {
      container.scrollLeft += 100;
    });
  });
}
