import { googleAnalytics } from '../../../src/js/googleAnalytics';

export const initVideo = () => {
  // commons selectors
  const HeroVid = $('#media-video').get(0);
  const playHeroVid = $('#playHeroVid');
  const pauseHeroVid = $('#pauseHeroVid');

  function toggleVideo(video) {
    if (video.paused) video.play();
    else video.pause();
  }

  pauseHeroVid.on('click', function (e) {
    e.stopPropagation(); // Prevent overlay click action from also triggering

    pauseHeroVid.hide();
    playHeroVid.show().focus();

    toggleVideo(HeroVid);
  });

  playHeroVid.on('click', function (e) {
    e.stopPropagation(); // Prevent overlay click action from also triggering

    playHeroVid.hide();
    pauseHeroVid.show().focus();

    toggleVideo(HeroVid);
  });

  // Init google analytics
  googleAnalytics();
};
