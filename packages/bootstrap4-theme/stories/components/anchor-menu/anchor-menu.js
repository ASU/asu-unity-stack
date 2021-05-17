window.addEventListener('DOMContentLoaded', function () {
  initializeAnchorMenu();
});

function initializeAnchorMenu() {
  const navbar = document.getElementById('uds-anchor-menu');
  const anchors = navbar.getElementsByClassName('nav-link');
  const anchorTargets = new Map();
  const globalHeader = document.getElementById('asu-header');

  // Cache the anchor target elements by mapping them as a key/pair so don't have to
  // parse the dom on every scroll event
  for (anchor of anchors) {
    const targetId = anchor.getAttribute('href').replace('#', '');
    const target = document.getElementById(targetId);
    anchorTargets.set(anchor, target);
  }

  window.onscroll = function () {
    // Assume global header will be present
    const top = globalHeader.offsetHeight;

    // If the top of the navbar is at or below the window top, apply style to shrink navbar
    // Actual top height must be compensated, assuming global header is present
    if (navbar.getBoundingClientRect().top <= top) {
      navbar.classList.add('uds-anchor-menu-shrink');
    } else {
      navbar.classList.remove('uds-anchor-menu-shrink');
    }

    for (let [anchor, target] of anchorTargets) {
      const offsets = navbar.offsetHeight + globalHeader.offsetHeight;

      // If top of screen (compensated for global header height + navbar height) is positioned between the start and end
      // of content, apply the active style to the anchor targeting that content.
      if (
        target.getBoundingClientRect().top < offsets &&
        target.getBoundingClientRect().top + target.offsetHeight > offsets
      ) {
        anchor.classList.add('active');
      } else {
        anchor.classList.remove('active');
      }
    }
  };

  // Set click event of anchors
  for (let [anchor, anchorTarget] of anchorTargets) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      window.scrollTo(0, anchorTarget.getBoundingClientRect().top);

      // Remove active class from other anchor in navbar, and add it to the clicked anchor
      const active = navbar.querySelector('.nav-link.active');

      if (active) active.classList.remove('active');

      e.target.classList.add('active');
    });
  }
}
