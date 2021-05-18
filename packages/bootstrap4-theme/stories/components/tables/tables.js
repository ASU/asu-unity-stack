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
  const tableWrappers = document.getElementsByClassName(
    'uds-table-fixed-wrapper'
  );

  tableWrappers.forEach((wrapper) => {
    const container = wrapper.getElementsByClassName('uds-table-fixed')[0];
    const previous = wrapper.getElementsByClassName(
      'scroll-control previous'
    )[0];
    const next = wrapper.getElementsByClassName('scroll-control next')[0];

    // If the user leaves the scrollable area, hide the scroll
    wrapper.addEventListener('mouseleave', function () {
      previous.classList.remove('show');
      next.classList.remove('show');
    });

    // If the user mouses over the scrollable area, show the scroll
    const showScrollWhenHoverTheseElements = container.querySelectorAll(
      'tr > *:nth-child(n + 2)'
    );

    // If the user leaves the scrollable area, hide the scroll
    const hideScrollWhenHoverTheseElements = container.querySelectorAll(
      'tr > *:first-child'
    );
    for (let i = 0; i < showScrollWhenHoverTheseElements.length; i++) {
      showScrollWhenHoverTheseElements[i].addEventListener(
        'mouseenter',
        function () {
          previous.classList.add('show');
          next.classList.add('show');
        }
      );
    }

    // If the user leaves the scrollable area, hide the scroll
    for (let i = 0; i < hideScrollWhenHoverTheseElements.length; i++) {
      hideScrollWhenHoverTheseElements[i].addEventListener(
        'mouseenter',
        function () {
          previous.classList.remove('show');
          next.classList.remove('show');
        }
      );
    }

    previous.addEventListener('click', function () {
      // Scroll can't go beyond it's bounds, so don't need to do checks here (once it hits zero, it won't go lower)
      container.scrollLeft -= 100;
    });

    next.addEventListener('click', function () {
      container.scrollLeft += 100;
    });

    // Originally thought scroll should show all the time, but only when not scrolled all the way to one direction
    // ie. if not scrolled all the way to left, show previous button
    // Will leave this code in case it is relevant later

    // container.onscroll = function () {
    //   if (container.scrollLeft === 0) {
    //     previous.classList.remove('show');
    //   } else {
    //     previous.classList.add('show');
    //     /**
    //      * The first column is sticky and therefore offsets the actual scroll postion.
    //      * To get the actual scroll position, we need to take what the browser thinks is the scrollLeft,
    //      * add the fixed sticky column width (315px) to compensate, and then add the width of the scrollable
    //      * part of the container
    //      * container.offsetWidth - 315 is like saying
    //      * "take the whole container and subtract the width of the sticky column to give me the width of the scrollable portion"
    //      */
    //     const actualScrollLeft =
    //       container.scrollLeft + 315 + (container.offsetWidth - 315);

    //     if (actualScrollLeft === container.scrollWidth) {
    //       next.classList.remove('show');
    //     } else {
    //       next.classList.add('show');
    //     }
    //   }
    // };

    // // Also check on DOM loaded to determine if the next button should be displayed initially
    // const actualScrollLeft =
    //   container.scrollLeft + 315 + (container.offsetWidth - 315);

    // if (actualScrollLeft !== container.scrollWidth) next.classList.add('show');
  });
}
