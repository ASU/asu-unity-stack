jQuery(function () {
  function toggleOverlay(overlay) {
    overlay.fadeToggle('fast');
  }

  function toggleVideo(video) {
    if (video.paused) video.play();
    else video.pause();
  }

  $('video').on('click', function (e) {
    toggleVideo($(this).get(0));
    toggleOverlay($(this).siblings('.uds-video-overlay'));
  });

  $('video').on('ended', function (e) {
    toggleOverlay($(this).siblings('.uds-video-overlay'));
  });

  $('.uds-video-btn-play').on('click', function (e) {
    e.stopPropagation(); // Prevent overlay click action from also triggering
    toggleOverlay($(this).parent('.uds-video-overlay'));
    toggleVideo($(this).parent('.uds-video-overlay').siblings('video').get(0));
  });

  $('.uds-video-overlay').on('click', function (e) {
    toggleOverlay($(this));
    toggleVideo($(this).siblings('video').get(0));
  });
});
