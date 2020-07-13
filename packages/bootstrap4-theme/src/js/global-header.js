jQuery(document).ready(function ($) {
  'use strict';

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('#asu-header').addClass('scrolled');
    } else {
      $('#asu-header').removeClass('scrolled');
    }
  });

  function resizeMobileDropdown () {
    // Target: 100vh minus (difference of height of #header-main and the height of #menubar)
    var headerHeight = $('#header-main').height();
    console.log('Steve: ' + headerHeight);

    $('#menubar').css({
      maxHeight: 'calc(100vh - ' + headerHeight + 'px)'
    });
  }
  resizeMobileDropdown();
  $(window).resize(resizeMobileDropdown);
});
