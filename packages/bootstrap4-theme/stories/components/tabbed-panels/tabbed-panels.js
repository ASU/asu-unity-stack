(function () {
  jQuery(function () {
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

  function setControlVisibility(clicked, scrollOffset) {
    var parentContainer = $(clicked).closest('.uds-tabbed-panels');
    var parentNav = $(clicked).siblings('.nav-tabs');
    var scrollPosition = parentNav.data('scroll-position') * 1;
    var tabPosition = parentNav[0].scrollWidth - scrollOffset;

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
  }

  function slideNav(clicked, e, direction) {
    e.preventDefault();
    //.trigger('click');
    //var nextTab = $('.nav-tabs > .active').next('a.nav-item');
    var parentNav = $(clicked).siblings('.nav-tabs');
    var scrollPosition = parentNav.data('scroll-position') * 1;
    var navItems = parentNav.find('.nav-item').toArray();
    var scrollOffset = parentNav.css('left').replace('px', '') * 1;
    //console.log(scrollPosition);
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

    /*
    if(scrollPosition == 0 && direction == 1) {
      direction = 0;
    }
    if(scrollPosition > 0 && direction == 1) {
      adjustNavItem = -1;
    }
    if(scrollPosition == navItems.length-1 && direction == -1) {
      direction = 0;
    }
    if(direction == 1) {

    }
    //console.log(navItems);
    parentNav.css("left", scrollOffset+(direction*($(navItems[scrollPosition+adjustNavItem]).outerWidth())));
    console.log(scrollOffset+(direction*($(navItems[scrollPosition+adjustNavItem]).outerWidth())));
    parentNav.data('scroll-position', (scrollPosition)+(direction*-1));
    console.log((scrollPosition)+(direction*-1));

    console.log("--- end ---");
    */
  }
})();
