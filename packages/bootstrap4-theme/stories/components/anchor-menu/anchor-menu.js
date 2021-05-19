jQuery(function () {
  initializeAnchorMenu();
});

function initializeAnchorMenu() {
  const globalHeader = document.getElementById('asu-header');
  const navbar = document.getElementById('uds-anchor-menu');
  const anchors = navbar.getElementsByClassName('nav-link');
  const navbarInitialPosition = navbar.offsetTop;
  const anchorTargets = new Map();
  let previousScrollPosition = window.scrollY;

  // Cache the anchor target elements by mapping them as a key/pair so don't have to
  // parse the dom on every scroll event
  for (anchor of anchors) {
    const targetId = anchor.getAttribute('href').replace('#', '');
    const target = document.getElementById(targetId);
    anchorTargets.set(anchor, target);
  }

  window.onscroll = function () {
    const navbarY = navbar.getBoundingClientRect().top;
    const headerHeight = globalHeader.offsetHeight;

    // If scrolling DOWN
    if (
      window.scrollY > previousScrollPosition &&
      !navbar.classList.contains('uds-anchor-menu-sticky')
    ) {
      if (navbarY > 0 && navbarY < headerHeight) {
        globalHeader.style.top = -(headerHeight - navbarY) + 'px';
      } else if (navbarY <= 0) {
        globalHeader.style.top = -globalHeader.offsetHeight + 'px';
        navbar.classList.add('uds-anchor-menu-sticky');
      }
    }

    // If scrolling UP
    if (
      window.scrollY < previousScrollPosition &&
      window.scrollY < navbarInitialPosition
    ) {
      navbar.classList.remove('uds-anchor-menu-sticky');
      if (globalHeader.getBoundingClientRect().top < 0) {
        const offset = globalHeader.getBoundingClientRect().top + navbarY;
        globalHeader.style.top = (offset < 0 ? offset : 0) + 'px';
      }
    }

    for (let [anchor, target] of anchorTargets) {
      const offsets = navbar.offsetHeight;

      if (
        target.getBoundingClientRect().top < offsets &&
        target.getBoundingClientRect().top + target.offsetHeight > offsets
      ) {
        anchor.classList.add('active');
      } else {
        anchor.classList.remove('active');
      }
    }

    previousScrollPosition = window.scrollY;
  };

  // Set click event of anchors
  for (let [anchor, anchorTarget] of anchorTargets) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Compensate for height of navbar so content appears below it
      let scrollBy =
        anchorTarget.getBoundingClientRect().top - navbar.offsetHeight;

      // If window hasn't been scrolled, compensate for header shrinking.
      const approximateHeaderSize = 65;
      if (window.scrollY === 0) scrollBy += approximateHeaderSize;

      // If navbar hasn't been stickied yet, that means global header is still in view, so compensate for header height
      if (!navbar.classList.contains('uds-anchor-menu-sticky')) {
        if (window.scrollY > 0) scrollBy += 24;
        scrollBy -= globalHeader.offsetHeight;
      }

      window.scrollBy({
        top: scrollBy,
        behavior: 'smooth',
      });

      // Remove active class from other anchor in navbar, and add it to the clicked anchor
      const active = navbar.querySelector('.nav-link.active');

      if (active) active.classList.remove('active');

      e.target.classList.add('active');
    });
  }
}
