(function () {
  document.addEventListener('DOMContentLoaded', function () {
    let hasScrolledToNecessaryDepth = false;
    // Safari || Chrome, Firefox, IE, Opera
    let previousScrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;

    window.onscroll = function () {
      let currentScrollPosition =
        document.body.scrollTop || document.documentElement.scrollTop;

      // If back at top, hide the button
      if (currentScrollPosition === 0) {
        hasScrolledToNecessaryDepth = false;
        document.getElementById('uds-back-to-top').className =
          'uds-back-to-top-button';
      }
      // If scrolling past 150% vh, allow button to be displayed once scrolling back up
      else if (
        !hasScrolledToNecessaryDepth &&
        previousScrollPosition > window.innerHeight * 1.5
      ) {
        hasScrolledToNecessaryDepth = true;
      }
      // If they have scrolled to necessary depth, and are now scrolling back up, show the button
      else if (
        hasScrolledToNecessaryDepth &&
        currentScrollPosition < previousScrollPosition
      ) {
        document.getElementById('uds-back-to-top').className =
          'uds-back-to-top-button uds-back-to-top-button-show';
      }

      previousScrollPosition = currentScrollPosition;
    };

    document
      .getElementById('uds-back-to-top')
      .addEventListener('click', scrollToTop);
  });

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
    // We'll also animate that scroll with requestAnimationFrame:
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      // ScrollTo takes an x and a y coordinate.
      // Increase the '10' value to get a smoother/slower scroll
      window.scrollTo(0, c - c / 10);
    }
  };
})();
