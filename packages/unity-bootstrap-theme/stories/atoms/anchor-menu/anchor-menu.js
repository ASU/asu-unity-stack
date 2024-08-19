const bootstrap = require('bootstrap');

function initializeAnchorMenu () {
  const HEADER_IDS = ['asu-header', 'asuHeader'];

  const globalHeaderId = HEADER_IDS.find((id) => document.getElementById(id));
  const globalHeader = document.getElementById(globalHeaderId);
  const navbar = document.getElementById('uds-anchor-menu');
  const navbarOriginalParent = navbar.parentNode;
  const navbarOriginalNextSibling = navbar.nextSibling;
  const anchors = navbar.getElementsByClassName('nav-link');
  const anchorTargets = new Map();
  let previousScrollPosition = window.scrollY;
  let isNavbarAttached = false;  // Flag to track if navbar is attached to header
  const body = document.body;

  // These values are for optionally present Drupal admin toolbars. They
  // are not present in Storybook and not required in implementations.
  let toolbarBar = document.getElementById('toolbar-bar');
  let toolbarItemAdministrationTray = document.getElementById('toolbar-item-administration-tray');

  let toolbarBarHeight = toolbarBar ? toolbarBar.offsetHeight : 0;
  let toolbarItemAdministrationTrayHeight = toolbarItemAdministrationTray ? toolbarItemAdministrationTray.offsetHeight : 0;

  let combinedToolbarHeightOffset = toolbarBarHeight + toolbarItemAdministrationTrayHeight;
  const navbarInitialTop = navbar.getBoundingClientRect().top + window.scrollY - combinedToolbarHeightOffset;

  // Cache the anchor target elements
  for (let anchor of anchors) {
    const targetId = anchor.getAttribute('href').replace('#', '');
    const target = document.getElementById(targetId);
    anchorTargets.set(anchor, target);
  }

  /*
    Bootstrap needs to be loaded as a variable in order for this to work.
    An alternative is to remove this and add the data-bs-spy="scroll" data-bs-target="#uds-anchor-menu nav" attributes to the body tag
    See https://getbootstrap.com/docs/5.3/components/scrollspy/ for more info
  */
  const scrollSpy = new bootstrap.ScrollSpy(body, {
    target: '#uds-anchor-menu nav',
    rootMargin: '20%'
  });

  const shouldAttachNavbarOnLoad = window.scrollY > navbarInitialTop;
  if (shouldAttachNavbarOnLoad) {
    globalHeader.appendChild(navbar);
    isNavbarAttached = true;
    navbar.classList.add("uds-anchor-menu-attached");
  }

  window.addEventListener("scroll", function () {
    const navbarY = navbar.getBoundingClientRect().top;
    const headerHeight = globalHeader.classList.contains("scrolled") ?  globalHeader.offsetHeight - 32 : globalHeader.offsetHeight; // 32 is the set height of the gray toolbar above the global header.

    // If scrolling DOWN and navbar touches the globalHeader
    if (
      window.scrollY > previousScrollPosition &&
      navbarY > 0 && navbarY < headerHeight
      ) {
        if (!isNavbarAttached) {
          // Attach navbar to globalHeader
          globalHeader.appendChild(navbar);
          isNavbarAttached = true;
          navbar.classList.add('uds-anchor-menu-attached');
        }
        previousScrollPosition = window.scrollY;
      }

    // If scrolling UP and past the initial navbar position
    if (
      window.scrollY < previousScrollPosition &&
      window.scrollY <= navbarInitialTop && isNavbarAttached
    ) {
      // Detach navbar and return to original position
      navbarOriginalParent.insertBefore(navbar, navbarOriginalNextSibling);
      isNavbarAttached = false;
      navbar.classList.remove('uds-anchor-menu-attached');
    }

    previousScrollPosition = window.scrollY;
  }, { passive: true });

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
};

export { initializeAnchorMenu };
