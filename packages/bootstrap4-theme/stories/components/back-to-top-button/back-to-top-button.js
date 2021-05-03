document.addEventListener('DOMContentLoaded', function () {
  window.onscroll = function () {
    // Safari || Chrome, Firefox, IE, Opera
    const positionFromTop =
      document.body.scrollTop || document.documentElement.scrollTop;

    // window.innerHeight * 1.5 = 150% viewport height
    if (positionFromTop > window.innerHeight * 1.5)
      document.getElementById('uds-back-to-top').className =
        'uds-back-to-top-button uds-back-to-top-button-show';
    else
      document.getElementById('uds-back-to-top').className =
        'uds-back-to-top-button';
  };

  document
    .getElementById('uds-back-to-top')
    .addEventListener('click', function () {
      scrollToTop();
    });
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
