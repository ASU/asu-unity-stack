
function initVideo() {
  // constants
  const DOM_ELEMENT_VIDEO = "video";
  const DOM_ELEMENT_VIDEO_BTN = ".uds-video-btn-play";
  const DOM_ELEMENT_VIDEO_OVERLAY = ".uds-video-overlay";
  const EVENT_CLICK = "click";
  const EVENT_ENDED = "ended";
  const STYLE_DISPLAY_FLEX = "flex";
  const STYLE_DISPLAY_NONE = "none";

  // get elements to interact with
  const $videoPlayer = document.querySelector(DOM_ELEMENT_VIDEO);
  const $videoOverlay = document.querySelector(DOM_ELEMENT_VIDEO_OVERLAY);
  const $videoBtnPlay = document.querySelector(DOM_ELEMENT_VIDEO_BTN);

  // toggle video play/pause and overlay
  function toggleOverlay(overlay) {
    if (overlay.style.display === STYLE_DISPLAY_NONE) {
      overlay.style.display = STYLE_DISPLAY_FLEX;
    } else {
      overlay.style.display = STYLE_DISPLAY_NONE;
    }
  }

  function toggleVideo(video) {
    if (video.paused) video.play();
    else video.pause();
  }

  function handleVideoPlayerClick(e) {
    toggleVideo(this);
    toggleOverlay(this.nextElementSibling);
  }

  function handleBtnPlayClick(e) {
    e.stopPropagation();
    const parentOverlay = this.parentNode;
    toggleOverlay(parentOverlay);
    toggleVideo($videoPlayer);
  }

  function handleOverlayClick(e) {
    toggleOverlay(this);
    toggleVideo($videoPlayer);
  }

  function handleVideoEnded(e) {
    toggleOverlay($videoOverlay);
  }

  // add event listeners
  $videoPlayer?.addEventListener(EVENT_CLICK, handleVideoPlayerClick);
  $videoBtnPlay?.addEventListener(EVENT_CLICK, handleBtnPlayClick);
  $videoOverlay?.addEventListener(EVENT_CLICK, handleOverlayClick);
  $videoPlayer?.addEventListener(EVENT_ENDED, handleVideoEnded);

};

export { initVideo };
