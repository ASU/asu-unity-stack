jQuery(document).ready(function ($) {
  'use strict';

  // Add a class of .scrolled as the window moves beyond the top of the screen.
  // Retrigger the dropdown max-height calculation when this occurs.
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('#asu-header').addClass('scrolled');
    } else {
      $('#asu-header').removeClass('scrolled');
    }
  });

  // Adjusts the height of the top container once the search bar receives and loses the focus.
  $('#header-top input[type="search"]').focusin(function () {
    $('#header-top').css({ height: 48 });
    $('#wrapper-header-top').css({ height: 48 });
  });

  $('#header-top input[type="search"]').focusout(function () {
    $('#header-top').css({ height: '' });
    $('#wrapper-header-top').css({ height: '' });
  });

  // Scrolled top header upon dropdown menu initiation.
  $('#menubar').on('show.bs.collapse', function () {
    $('#asu-header').addClass('scrolled');
  });

  /*  Calculate height of the mobile header.
   *
   *  topPadding = 16px. Scrolled class added upon dropdown initiation.
   *  navbarBrand = 48px. Height of ASU Logo in mobile view, including padding. Static value.
   *  navbarTitle = Either 16px (one line) or 32px (two lines) + 16px bottom padding
   */
  function mobileHeaderHeight () {
    var topPadding = 16;
    var navbarBrand = $('.navbar-brand').height();
    var navbarTitle = $('nav.navbar .title').height() + 16;
    return topPadding + navbarBrand + navbarTitle;
  }

  function pinBottomMenu () {
    var viewport = $(window).height();
    var menuTall = $('#menubar.show').height();
    var headerTall = mobileHeaderHeight();
    var pinnedTall = $('.navbar-mobile-footer').height();
    var maxTall = viewport - headerTall - pinnedTall;

    // Does the height of the dropdown require the form to be pinned to the bottom of the window?
    console.log(
      'VP: ' +
        viewport +
        '   Menu: ' +
        menuTall +
        '   Header: ' +
        headerTall +
        '   Pin: ' +
        pinnedTall +
        '   Max: ' +
        maxTall
    );

    if (viewport >= menuTall + headerTall) {
      console.log('True. No pin needed');
      $('#menubar').css({ maxHeight: '' });
      $('.navbar-mobile-footer').removeClass('pinned');
      $('.navbar-mobile-footer').removeClass('shadow');
      restoreTopValue();
    } else {
      console.log('False. Pin it.');
      $('#menubar').css({ maxHeight: maxTall });
      $('.navbar-mobile-footer').addClass('pinned');
      $('.navbar-mobile-footer').addClass('shadow');
      recordTopValue();
    }
  }

  function resetCalcValues () {
    $('#menubar').css({ maxHeight: '' });
    $('.navbar-mobile-footer').removeClass('pinned');
    $('.navbar-mobile-footer').removeClass('shadow');
  }

  var topValue = $(document).scrollTop();

  function recordTopValue() {
    topValue = $(document).scrollTop();
    console.log('Record TopValue: ' + topValue);
    $('body').addClass('dropdown-pinned');
  }

  function restoreTopValue() {
    console.log('Restore TopValue: ' + topValue);
    $('body').removeClass('dropdown-pinned');
    topValue = $(document).scrollTop(topValue);
  }

  // Does the initial menu expansion require the bottom menu to be pinned?
  $('#menubar').on('shown.bs.collapse', function () {
    pinBottomMenu();
  });

  // Once the menu contracts, kill off the max height for the menubar.
  $('#menubar').on('hidden.bs.collapse', function () {
    resetCalcValues();
    restoreTopValue();
  });

  // Does an internal menu dropdown expansion require the bottom menu to be pinned?
  // Only trigger the recalculation if the bottom menu is NOT already pinned.
  $('#menubar .dropdown').on('shown.bs.dropdown', function () {
    console.log('Expanded dropdown');
    if ($('.navbar-mobile-footer').hasClass('pinned') == false) {
      resetCalcValues();
      pinBottomMenu();
    } else {
      console.log('Calc skipped.');
    }
  });

  // Does any internal menu dropdown contraction require the bottom menu to be pinned?
  $('#menubar .dropdown').on('hidden.bs.dropdown', function () {
    console.log('Collapse dropdown');
    resetCalcValues();
    pinBottomMenu();
  });

  // Has the menubar scroll reached the bottom of the container? Remove the shadow if so.
  $('#menubar').on('scroll', function () {
    console.log('Menubar scroll');
    console.log('Offset: ' + $('#menubar.show').prop('offsetHeight'));
    console.log('ScrollTop: ' + $('#menubar.show').prop('scrollTop'));
    console.log('ScrollHeight: ' + $('#menubar.show').prop('scrollHeight'));
    if (
      $('#menubar.show').prop('offsetHeight') +
        $('#menubar.show').prop('scrollTop') ===
      $('#menubar.show').prop('scrollHeight')
    ) {
      // the menu is at the end of its scroll
      $('.navbar-mobile-footer').removeClass('shadow');
    } else {
      $('.navbar-mobile-footer').addClass('shadow');
    }
  });

  // Figure stuff out again if the window resizes.
  $(window).resize(function () {
    console.log('Window resized');

    // Only calculate new values if the menubar is open.
    if ($('.navbar-toggler').hasClass('collapsed')) {
      // The hamburger menu is closed.
    } else {
      console.log('Dealing with window resize. Scolltop: ' + topValue);
      topValue = $(document).scrollTop();
      $('body').removeClass('dropdown-pinned');
      resetCalcValues();
      pinBottomMenu();
    }
  });
});
