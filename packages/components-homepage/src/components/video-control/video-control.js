// Controller for the homepage video controls (`.mbtn`). Dependency-free.
// Rules: three plays then stop on the first frame; pause out of view or in a hidden tab;
// only `data-auto` videos resume on scroll-back (prototype v2.71 rule, open question 6);
// a visitor's pause sticks; nothing autoplays under reduced motion or without a poster.

const DEFAULT_PLAYS = 3;
const IN_VIEW_RATIO = 0.45;
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

const entries = new WeakMap(); // video -> state (shared by every call, so re-init binds nothing twice)
const boundButtons = new WeakSet();

const ignore = () => {};

const play = video => {
  const result = video.play();
  if (result && typeof result.catch === "function") result.catch(ignore);
};

// Any part of the video is on screen (the prototype's tab-return rule).
const onScreen = (video, win) => {
  const box = video.getBoundingClientRect();
  return box.width > 0 && box.bottom > 0 && box.top < win.innerHeight;
};

const setState = (button, playing) => {
  button.setAttribute("data-state", playing ? "playing" : "paused");
  const label = button.getAttribute(
    playing ? "data-label-pause" : "data-label-play"
  );
  if (label) button.setAttribute("aria-label", label);
};

const render = (entry, playing) => {
  entry.buttons.forEach(button => setState(button, playing));
};

// Per-video state, listeners and observer. Lives while at least one call has a control bound to it.
const createEntry = (video, doc, win) => {
  const plays = parseInt(video.getAttribute("data-plays"), 10);
  const entry = {
    video,
    buttons: [],
    refs: 0,
    max: plays > 0 ? plays : DEFAULT_PLAYS,
    plays: 0,
    auto: video.hasAttribute("data-auto"),
    hasPoster: Boolean(video.getAttribute("poster")),
    inView: null, // null until the observer reports; false means fully out of view
    ratio: 0,
    userPaused: false, // the visitor paused it; it stays paused until they press play
    autoStarted: false, // the controller (not the visitor) started the current playback
    tabPaused: false, // a hidden tab paused it (or kept it from starting)
  };
  const cleanups = [];
  const listen = (target, type, handler) => {
    target.addEventListener(type, handler);
    cleanups.push(() => target.removeEventListener(type, handler));
  };

  const mediaQuery =
    typeof win.matchMedia === "function"
      ? win.matchMedia(REDUCED_MOTION)
      : null;
  const reduced = () => Boolean(mediaQuery && mediaQuery.matches);

  // Autoplay for `data-auto` videos only; never while hidden, reduced, spent, paused by the visitor.
  const tryAutoplay = () => {
    if (
      !entry.auto ||
      !entry.hasPoster ||
      entry.userPaused ||
      entry.plays >= entry.max ||
      !video.paused ||
      reduced()
    ) {
      return;
    }
    if (doc.hidden) {
      entry.tabPaused = true; // the tab return resumes it
      return;
    }
    entry.autoStarted = true;
    play(video);
  };

  if (!entry.hasPoster) {
    // eslint-disable-next-line no-console
    console.warn(
      `[video-controls] <video id="${video.id}"> has no poster; it will not autoplay.`
    );
  }

  listen(video, "play", () => render(entry, true));
  listen(video, "pause", () => render(entry, false));
  listen(video, "ended", () => {
    render(entry, false);
    entry.plays += 1;
    try {
      video.currentTime = 0;
    } catch {
      // not seekable yet
    }
    if (entry.plays >= entry.max) return; // spent: stays on its first frame
    // A queued `ended` must not override a pause that came first; scrolling back resumes `data-auto` media.
    if (entry.userPaused || entry.inView === false) return;
    if (doc.hidden) {
      entry.tabPaused = true;
      return;
    }
    play(video);
  });

  if (typeof win.IntersectionObserver === "function") {
    const observer = new win.IntersectionObserver(
      records => {
        records.forEach(record => {
          if (record.target !== video) return;
          entry.inView = record.isIntersecting;
          entry.ratio = record.intersectionRatio;
          if (!record.isIntersecting) {
            if (!video.paused) video.pause();
            return;
          }
          if (record.intersectionRatio >= IN_VIEW_RATIO) tryAutoplay();
        });
      },
      { threshold: [0, IN_VIEW_RATIO] }
    );
    observer.observe(video);
    cleanups.push(() => observer.disconnect());
  }

  listen(doc, "visibilitychange", () => {
    if (doc.hidden) {
      if (video.paused) return;
      entry.tabPaused = true;
      video.pause();
      return;
    }
    if (!entry.tabPaused) return;
    entry.tabPaused = false;
    if (
      video.isConnected &&
      video.paused &&
      !entry.userPaused &&
      entry.plays < entry.max &&
      !(reduced() && entry.autoStarted) &&
      onScreen(video, win)
    ) {
      play(video);
    }
  });

  if (mediaQuery && typeof mediaQuery.addEventListener === "function") {
    listen(mediaQuery, "change", () => {
      if (reduced()) {
        // Stops what the page started; a visitor's own play is theirs to stop.
        if (entry.autoStarted && !video.paused) video.pause();
      } else if (entry.inView && entry.ratio >= IN_VIEW_RATIO) {
        tryAutoplay();
      }
    });
  }

  entry.dispose = () => {
    cleanups.forEach(cleanup => cleanup());
    entries.delete(video);
  };
  return entry;
};

/**
 * Wires every `.mbtn[data-for]` under `root` to its video. Safe to call again for content added later.
 * @param {Document|Element} [root=document]
 * @returns {function(): void} Removes the controls this call bound; a video's listeners and observer
 * go when the last call that bound one of its controls is disposed.
 */
export function initVideoControls(root = document) {
  const doc = root.ownerDocument || root;
  const win = doc.defaultView || window;
  const owned = new Set(); // entries this call holds a reference on
  const cleanups = [];

  const bindButton = (entry, button) => {
    const { video } = entry;
    entry.buttons.push(button);
    setState(button, !video.paused);
    const onClick = () => {
      entry.autoStarted = false;
      if (video.paused) {
        entry.userPaused = false;
        entry.tabPaused = false;
        // A spent video plays once more, then stops again.
        if (entry.plays >= entry.max) entry.plays = entry.max - 1;
        play(video);
      } else {
        entry.userPaused = true;
        video.pause();
      }
    };
    button.addEventListener("click", onClick);
    boundButtons.add(button);
    cleanups.push(() => {
      button.removeEventListener("click", onClick);
      boundButtons.delete(button);
      entry.buttons.splice(entry.buttons.indexOf(button), 1);
    });
  };

  root.querySelectorAll(".mbtn[data-for]").forEach(button => {
    if (boundButtons.has(button)) return;
    const video = doc.getElementById(button.getAttribute("data-for"));
    if (!video || video.tagName !== "VIDEO") return;
    let entry = entries.get(video);
    if (!entry) {
      entry = createEntry(video, doc, win);
      entries.set(video, entry);
    }
    if (!owned.has(entry)) {
      owned.add(entry);
      entry.refs += 1;
    }
    bindButton(entry, button);
  });

  if (!cleanups.length) return ignore;

  return () => {
    cleanups.forEach(cleanup => cleanup());
    cleanups.length = 0;
    owned.forEach(entry => {
      entry.refs -= 1;
      if (entry.refs === 0) entry.dispose();
    });
    owned.clear();
  };
}
