/**
 * Javascript for fixed table functionality. Fixed table should display scroll buttons when hovering over scrollable portion of table,
 * and hide them when hovering over fixed column or when mouse exits table.
 *
 * The scroll buttons must be outside the table container, within the table wrapper, due to the absolute positioning requirements.
 * Because the table scrolls, if they were to be absolutely positioned in the same container as the table, they would scroll with it.
 */
window.addEventListener('DOMContentLoaded', function () {
  console.log('>>> table DOMContentLoaded');
  initializeFixedTable();
});

function initializeFixedTable() {
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
      // Scroll can't go beyond it's bounds, so don't need to do checks here (once it hits zero, it won't go lower)
      container.scrollLeft -= 100;
    });

    next.addEventListener(event, function () {
      container.scrollLeft += 100;
    });
  });
}
