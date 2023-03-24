import { googleAnalytics } from '../../../src/js/googleAnalytics';

export const initTabs = function () {
  'use strict';
  jQuery(function () {
    $(document).on('click', function (e) {
      setButtonsCompatibility(e);
    });

    document.querySelectorAll('.uds-tabbed-panels').forEach((item) => {
      const nav = item.querySelector('.nav-tabs');
      nav.addEventListener('scroll', (event) => {
        const scrollPos = event.target.scrollLeft;
        const prevButton = item.querySelector('.scroll-control-prev');
        const nextButton = item.querySelector('.scroll-control-next');
        const atFarRight = nav.offsetWidth + scrollPos + 3 >= nav.scrollWidth;
        prevButton.style.display = scrollPos === 0 ? 'none' : 'block';
        nextButton.style.display = atFarRight ? 'none' : 'block';
      });
    });

    $('.scroll-control-next').on('click', function (e) {
      if (window.innerWidth > 992) {
        slideNav(this, e, -1);
      }
    });

    $('.scroll-control-prev').on('click', function (e) {
      if (window.innerWidth > 992) {
        slideNav(this, e, 1);
      }
    });

    $('.uds-tabbed-panels .scroll-control-prev').hide();

    if ($('#nav-tab')[0].scrollWidth <= $('.uds-tabbed-panels').width()) {
      $('.uds-tabbed-panels .scroll-control-next').hide();
    }
  });

  const setButtonsCompatibility = (e) => {
    const targets = ['a', 'button'];
    if (targets.includes(e.target.localName)) {
      e.target.focus();
    }
  };

  const setControlVisibility = (clicked, scrollOffset) => {
    const parentContainer = $(clicked).closest('.uds-tabbed-panels');
    const parentNav = $(clicked).siblings('.nav-tabs');
    const scrollPosition = parentNav.data('scroll-position') * 1;
    const tabPosition = parentNav[0].scrollWidth - scrollOffset;

    if (scrollPosition == 0) {
      parentContainer.find('.scroll-control-prev').hide();
    } else {
      parentContainer.find('.scroll-control-prev').show();
    }
    if (tabPosition <= parentContainer.width()) {
      parentContainer.find('.scroll-control-next').hide();
    } else {
      parentContainer.find('.scroll-control-next').show();
    }
  };

  const slideNav = (clicked, e, direction) => {
    e.preventDefault();
    const parentNav = $(clicked).siblings('.nav-tabs');
    let scrollPosition = parentNav.data('scroll-position') * 1;
    const navItems = parentNav.find('.nav-item').toArray();
    let scrollOffset = parentNav.css('left').replace('px', '') * 1;
    var adjustNavItem = 0;

    if (direction == 1 && scrollPosition > 0) {
      scrollPosition -= 1;
    }
    if (scrollPosition < navItems.length - 1 && direction == -1) {
      scrollPosition += 1;
    }
    parentNav.data('scroll-position', scrollPosition);

    scrollOffset = 0;
    for (var i = 0; i < scrollPosition; i++) {
      scrollOffset += $(navItems[i]).outerWidth();
    }

    parentNav.scrollLeft(scrollOffset);

    setControlVisibility(clicked, scrollOffset);
  };

  // Init goolge analytics
  googleAnalytics();
};
