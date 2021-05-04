window.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('uds-anchor-menu');
  const anchors = navbar.getElementsByClassName('nav-link');
  const anchorTargets = new Map();
  const navbarInitialPos = navbar.getBoundingClientRect().top;

  // Cache the anchor target elements by mapping them
  // as a key / pair so we don't have to
  // parse the dom on every scroll event
  anchors.forEach((anchor) => {
    const targetId = anchor.getAttribute('href').replace('#', '');
    const target = document.getElementById(targetId);
    anchorTargets.set(anchor, target);
  });

  window.onscroll = function () {
    const positionFromTop =
      (document.body.scrollTop || document.documentElement.scrollTop) +
      navbar.offsetHeight;

    if (positionFromTop > navbarInitialPos) {
      navbar.classList.add('uds-anchor-menu-shrink');
    } else {
      navbar.classList.remove('uds-anchor-menu-shrink');
    }

    for (let [key, value] of anchorTargets) {
      const offsets = getOffset(value);

      if (
        positionFromTop > offsets.y &&
        positionFromTop < offsets.y + value.clientHeight
      ) {
        key.classList.add('active');
      } else {
        key.classList.remove('active');
      }
    }
  };

  // Set click event of anchors
  for (let [key, value] of anchorTargets) {
    key.addEventListener('click', function (e) {
      const active = document.querySelector('.nav-link.active');
      if (active) active.classList.remove('active');

      e.target.classList.add('active');
    });
  }
});

function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { y: parseInt(_y), x: parseInt(_x) };
}
