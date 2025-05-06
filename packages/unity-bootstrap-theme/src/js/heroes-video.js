import { EventHandler } from "./bootstrap-helper";

function initHeroesVideo() {
  // common selectors
  const DOM_ELEMENT_VIDEO = "video";
  const DOM_ELEMENT_BTN_PLAY = "#playHeroVid";
  const DOM_ELEMENT_BTN_PAUSE = "#pauseHeroVid";
  const EVENT_CLICK = "click";
  const STYLE_DISPLAY_BLOCK = "block";
  const STYLE_DISPLAY_NONE = "none";

  // get elements to interact with
  const $videoPlayer = document.querySelector(DOM_ELEMENT_VIDEO);
  const $videoBtnPlay = document.querySelector(DOM_ELEMENT_BTN_PLAY);
  const $videoBtnPause = document.querySelector(DOM_ELEMENT_BTN_PAUSE);

  function toggleVideo(video) {
    if (video.paused) video.play();
    else video.pause();
  }

  // toggle btn video play/pause
  function toggleBtn($btnPlay, $btnPause) {
    // get computed styles for play btn
    const btnPlayStyles = getComputedStyle($btnPlay);
    if (btnPlayStyles.display === STYLE_DISPLAY_NONE) {
      $btnPause.style.display = STYLE_DISPLAY_NONE;
      $btnPlay.style.display = STYLE_DISPLAY_BLOCK;
      $btnPlay.focus();
    } else {
      $btnPlay.style.display = STYLE_DISPLAY_NONE;
      $btnPause.style.display = STYLE_DISPLAY_BLOCK;
      $btnPause.focus();
    }
  }

  function handleBtnPauseEvent(e) {
    e.stopPropagation(); // Prevent overlay click action from also triggering
    toggleBtn($videoBtnPlay, $videoBtnPause);
    toggleVideo($videoPlayer);
  }

  function handleBtnPlayEvent(e) {
    e.stopPropagation(); // Prevent overlay click action from also triggering
    toggleBtn($videoBtnPlay, $videoBtnPause);
    toggleVideo($videoPlayer);
  }

  // set event listeners
  $videoBtnPause?.addEventListener(EVENT_CLICK, handleBtnPauseEvent);
  $videoBtnPlay?.addEventListener(EVENT_CLICK, handleBtnPlayEvent);

};

EventHandler.on(window, 'load.uds.heroes-video', initHeroesVideo);

export { initHeroesVideo };
