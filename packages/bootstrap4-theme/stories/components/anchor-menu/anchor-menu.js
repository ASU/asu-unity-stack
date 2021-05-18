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
    let scrollTop = window.scrollY;
    // document.body.scrollTop || document.documentElement.scrollTop;

    if (navbar.getBoundingClientRect().top <= globalHeader.offsetHeight) {
      navbar.classList.add('uds-anchor-menu-sticky');
      navbar.style.top = globalHeader.offsetHeight + 'px'; // Can't set this in stylesheet because global header height isn't static
    }
    if (scrollTop <= navbarInitialPosition) {
      navbar.classList.remove('uds-anchor-menu-sticky');
      navbar.style.top = null;
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
      e.preventDefault(); // prevent default goto action, need to line up under header and navbar

      window.scrollTo(0, anchorTarget.offsetTop);

      let timer = previousScrollPosition === 0 ? 500 : 0;
      setTimeout(() => {
        navbar.style.top = globalHeader.offsetHeight + 'px';
      }, timer);

      // Remove active class from other anchor in navbar, and add it to the clicked anchor
      const active = navbar.querySelector('.nav-link.active');

      if (active) active.classList.remove('active');

      e.target.classList.add('active');
    });
  }
}
