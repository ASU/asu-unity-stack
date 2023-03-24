import { googleAnalytics } from "../../../src/js/googleAnalytics";

export const initVideo = () => {
  // get elements to interact with
  const videoPlayer = document.querySelector("video");
  const videoOverlay = document.querySelector(".uds-video-overlay");
  const videoBtnPlay = document.querySelector(".uds-video-btn-play");

  // toggle video play/pause and overlay
  function toggleOverlay(overlay) {
    if (overlay.style.display === "none") {
      overlay.style.display = "flex";
    } else {
      overlay.style.display = "none";
    }
  }

  function toggleVideo(video) {
    if (video.paused) video.play();
    else video.pause();
  }

  // event listeners for Pause video
  videoPlayer.addEventListener("click", function (e) {
    toggleVideo(this);
    toggleOverlay(this.nextElementSibling);
  });

  // event listener for Play video
  videoBtnPlay.addEventListener("click", function (e) {
    e.stopPropagation();
    const parentOverlay = this.parentNode;
    toggleOverlay(parentOverlay);
    toggleVideo(videoPlayer);
  });

  // event listener for Play video
  videoOverlay.addEventListener("click", function (e) {
    toggleOverlay(this);
    toggleVideo(videoPlayer);
  });

  videoPlayer.addEventListener("ended", function (e) {
    toggleOverlay(videoOverlay);
  });

  // Init google analytics
  googleAnalytics();
};
