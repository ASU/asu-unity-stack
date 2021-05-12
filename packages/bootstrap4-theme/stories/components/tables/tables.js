window.addEventListener('DOMContentLoaded', function () {
  // let currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

  const tables = document.getElementsByClassName('uds-fixed-table');

  tables.forEach((table) => {
    // let horizontalScrollPosition = table.scrollLeft;
    const previous = table.getElementsByClassName('scroll-control previous')[0];
    // const next = table.getElementsByClassName('scroll-control next')[0];

    toggleNextButton(table); // Determine if next button should be displayed on load

    table.onscroll = function () {
      if (table.scrollLeft === 0) {
        previous.classList.remove('show');
      } else {
        previous.classList.add('show');
      }

      toggleNextButton(table);
    };
  });

  function toggleNextButton(table) {
    const next = table.getElementsByClassName('scroll-control next')[0];
    if (table.scrollLeft < getComputedStyle(table).width) {
      next.classList.remove('show');
    } else {
      next.classList.add('show');
    }
  }
});
