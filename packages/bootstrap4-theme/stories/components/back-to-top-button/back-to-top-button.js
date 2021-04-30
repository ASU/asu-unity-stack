jQuery(function () {
  $(window).on('scroll', function () {
    // If scroll is beyond 150% vh
    if ($(this).scrollTop() > $(this).innerHeight() * 1.5)
      $('#uds-back-to-top').css('display', 'inline-flex');
    else $('#uds-back-to-top').hide();
  });

  $('#uds-back-to-top').on('click', function () {
    $(window).scrollTop(0);
  });
});
