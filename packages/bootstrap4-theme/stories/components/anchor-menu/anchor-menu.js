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
    if (navbar.getBoundingClientRect().top <= globalHeader.offsetHeight) {
      navbar.classList.add('uds-anchor-menu-sticky');
      navbar.style.top = globalHeader.offsetHeight + 'px'; // Can't set this in stylesheet because global header height isn't static
    }
    if (window.scrollY <= navbarInitialPosition) {
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

    previousScrollPosition = window.scrollY;
  };

  // Set click event of anchors
  for (let [anchor, anchorTarget] of anchorTargets) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // prevent default goto action, need to line up under header and navbar

      // OffsetTop + 1 is a hack. If you click the first anchor item, offsetTop is exactly the cutoff to make the navbar sticky, which pops it back into the dom and throws
      // off positioning. Adding 1 to the offset top makes sure the navbar remains sticky
      const targetPosition = anchorTarget.offsetTop + 1;
      window.scrollTo(0, targetPosition);

      // If page has not been scrolled, global header will still be full size. Therefore, navigating to target at this point will not compensate for header size change.
      // This will cause anchor menu to sticky to the bottom of where global header *was*, before the size change. The global header size change has an animation
      // duration of .5s, so we need to wait for it to fully shrink before repositioning the anchor menu. Also, since the anchor menu will not have been stickied at this point,
      // the content will now be covered by the anchor menu, so we must scroll back down some to avoid overlapping the content.
      // To "fix" this, we need to
      if (previousScrollPosition === 0) {
        setTimeout(() => {
          navbar.style.top = globalHeader.offsetHeight + 'px';
          setTimeout(() => {
            window.scrollTo(0, targetPosition - navbar.offsetHeight);
          }, 200);
        }, 300);
      }

      if (previousScrollPosition < navbarInitialPosition) {
        setTimeout(() => {
          window.scrollTo(0, targetPosition - navbar.offsetHeight);
        }, 100);
      }

      // Remove active class from other anchor in navbar, and add it to the clicked anchor
      const active = navbar.querySelector('.nav-link.active');

      if (active) active.classList.remove('active');

      e.target.classList.add('active');
    });
  }
}
