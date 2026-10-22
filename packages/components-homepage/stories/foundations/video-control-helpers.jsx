import React, { useEffect, useRef } from "react";

import { initVideoControls } from "../../src/js/video-controls.js";

// Tiny inline poster (no hotlink, no committed media).
export const POSTER = `data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='9'><rect width='16' height='9' fill='#484848'/></svg>"
)}`;

const ICONS =
  '<svg class="mbtn__icon mbtn__icon--play" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M7 4.5v15l12-7.5z"/></svg>' +
  '<svg class="mbtn__icon mbtn__icon--pause" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="5.5" y="4" width="4.5" height="16" rx="1.5" fill="currentColor"/><rect x="14" y="4" width="4.5" height="16" rx="1.5" fill="currentColor"/></svg>';

// Markup contract: server markup is always paused with the Play label.
export const controlHtml = ({
  id,
  hero = false,
  hidden = false,
  labelPlay = "Play the career video",
  labelPause = "Pause the career video",
}) =>
  `<button type="button" class="mbtn${hero ? " mbtn--hero" : ""}" data-for="${id}" data-state="paused" data-label-play="${labelPlay}" data-label-pause="${labelPause}" aria-label="${labelPlay}"${hidden ? " hidden" : ""}>${ICONS}</button>`;

export const videoHtml = ({
  id,
  auto = false,
  plays,
  poster = true,
  preload = "none",
}) =>
  `<video id="${id}" class="d-block w-100" muted playsinline preload="${preload}"${auto ? " data-auto" : ""}${plays ? ` data-plays="${plays}"` : ""}${poster ? ` poster="${POSTER}"` : ""} aria-describedby="${id}-desc"></video>`;

// A video, its control and a text description (WCAG 1.2.1).
export const frameHtml = ({
  id,
  description = "Students walk across the Tempe campus at sunrise.",
  maxWidth = 480,
  ...rest
}) =>
  `<figure class="m-0 mb-4" style="max-width: ${maxWidth}px"><div class="position-relative">${videoHtml({ id, ...rest })}${controlHtml({ id, ...rest })}</div><figcaption id="${id}-desc" class="small mt-2">${description}</figcaption></figure>`;

// ---- Test doubles (element instance and page globals only; restored per story) ----

const stubs = new WeakMap();

// Replaces play/pause/paused/currentTime on ONE element instance with a silent fake that
// dispatches the real events. Returns a restore function.
export const stubPlayback = (video, { duration = 10 } = {}) => {
  let paused = true;
  let currentTime = 0;
  const calls = { play: 0, pause: 0 };
  let rejectNext = false;
  const fire = type => video.dispatchEvent(new Event(type));
  const define = (name, descriptor) =>
    Object.defineProperty(video, name, { configurable: true, ...descriptor });

  define("paused", { get: () => paused });
  define("duration", { get: () => duration });
  define("currentTime", {
    get: () => currentTime,
    set: value => {
      currentTime = value;
    },
  });
  video.play = () => {
    calls.play += 1;
    if (rejectNext) {
      rejectNext = false;
      // e.g. NotAllowedError: the browser refuses; nothing plays and no event fires
      return Promise.reject(new DOMException("blocked", "NotAllowedError"));
    }
    if (paused) {
      paused = false;
      fire("play");
      fire("playing");
    }
    return Promise.resolve();
  };
  video.pause = () => {
    calls.pause += 1;
    if (!paused) {
      paused = true;
      fire("pause");
    }
  };

  stubs.set(video, {
    calls,
    // The next play() call returns a rejected promise.
    rejectNextPlay() {
      rejectNext = true;
    },
    // Playback reaches its end: browsers fire `pause` and then `ended`.
    finish() {
      if (paused) throw new Error("finish(): the video is not playing");
      currentTime = duration;
      paused = true;
      fire("pause");
      fire("ended");
    },
  });

  return () => {
    ["play", "pause", "paused", "duration", "currentTime"].forEach(name => {
      delete video[name];
    });
    stubs.delete(video);
  };
};

export const getStub = video => stubs.get(video);

class FakeIntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
    this.targets = new Set();
    FakeIntersectionObserver.instances.push(this);
  }

  observe(target) {
    this.targets.add(target);
  }

  unobserve(target) {
    this.targets.delete(target);
  }

  disconnect() {
    this.targets.clear();
  }

  takeRecords() {
    return [];
  }
}
FakeIntersectionObserver.instances = [];

class FakeReducedMotionQuery extends EventTarget {
  constructor(matches) {
    super();
    this.media = "(prefers-reduced-motion: reduce)";
    this.matches = matches;
  }

  addListener(listener) {
    this.addEventListener("change", listener);
  }

  removeListener(listener) {
    this.removeEventListener("change", listener);
  }
}

let current = null;

// Page-level fakes: IntersectionObserver, matchMedia (reduced motion only) and document.hidden.
export const environment = {
  install({ reducedMotion = false } = {}) {
    const saved = {
      IntersectionObserver: window.IntersectionObserver,
      matchMedia: window.matchMedia,
    };
    FakeIntersectionObserver.instances = [];
    const query = new FakeReducedMotionQuery(reducedMotion);
    let hidden = false;

    window.IntersectionObserver = FakeIntersectionObserver;
    window.matchMedia = text =>
      /prefers-reduced-motion:\s*reduce/.test(text)
        ? query
        : saved.matchMedia.call(window, text);
    Object.defineProperty(document, "hidden", {
      configurable: true,
      get: () => hidden,
    });

    current = {
      query,
      setHidden(value) {
        hidden = value;
        document.dispatchEvent(new Event("visibilitychange"));
      },
      restore() {
        window.IntersectionObserver = saved.IntersectionObserver;
        window.matchMedia = saved.matchMedia;
        delete document.hidden;
        current = null;
      },
    };
  },

  restore() {
    if (current) current.restore();
  },

  // Reports `ratio` of `target` in view to every observer watching it.
  emit(target, ratio) {
    FakeIntersectionObserver.instances.forEach(observer => {
      if (!observer.targets.has(target)) return;
      observer.callback(
        [
          {
            target,
            isIntersecting: ratio > 0,
            intersectionRatio: ratio,
          },
        ],
        observer
      );
    });
  },

  observerOptions() {
    return FakeIntersectionObserver.instances.map(instance => instance.options);
  },

  hide() {
    current.setHidden(true);
  },

  show() {
    current.setHidden(false);
  },

  // Changes the reduced-motion preference and fires the media query's `change` event.
  setReducedMotion(value) {
    current.query.matches = value;
    current.query.dispatchEvent(new Event("change"));
  },
};

// Storybook's userEvent cannot set :hover; the vitest browser runner can. Only inside vitest.
export const realPointer = {
  available: import.meta.env.MODE === "test",
  async hover(element) {
    const { userEvent } = await import("vitest/browser");
    await userEvent.hover(element);
  },
  async click(element) {
    const { userEvent } = await import("vitest/browser");
    await userEvent.click(element);
  },
  async unhover(element) {
    const { userEvent } = await import("vitest/browser");
    await userEvent.unhover(element);
  },
};

// Storybook cannot set :hover, so the package's own `.mbtn:hover` rules are copied at runtime to
// `.mbtn[data-story-hover]`; the attribute then shows the real hover styles without a pointer.
const HOVER_ATTRIBUTE = "data-story-hover";
const MIRROR_ID = "story-hover-mirror";

const ensureHoverMirror = () => {
  if (document.getElementById(MIRROR_ID)) return;
  const rules = [];
  const collect = list =>
    Array.from(list).forEach(rule => {
      if (rule instanceof CSSStyleRule) {
        if (/\.mbtn[^,{]*:hover/.test(rule.selectorText)) {
          rules.push(rule.cssText.replace(/:hover/g, `[${HOVER_ATTRIBUTE}]`));
        }
      } else if (rule.cssRules) {
        collect(rule.cssRules);
      }
    });
  Array.from(document.styleSheets).forEach(sheet => {
    try {
      collect(sheet.cssRules);
    } catch {
      // cross-origin sheet: not ours
    }
  });
  if (!rules.length) throw new Error("No .mbtn:hover rule found to mirror.");
  const style = document.createElement("style");
  style.id = MIRROR_ID;
  style.textContent = rules.join("\n");
  document.head.appendChild(style);
};

// Shows (or clears) the hover styles on an element without a pointer.
export const forceHover = (element, on = true) => {
  ensureHoverMirror();
  element.toggleAttribute(HOVER_ATTRIBUTE, on);
};

// Appends another control for an existing video, built with DOM APIs (not innerHTML).
export const addControl = (parent, options) => {
  const parsed = new DOMParser().parseFromString(
    controlHtml(options),
    "text/html"
  );
  const button = document.importNode(parsed.body.firstElementChild, true);
  parent.appendChild(button);
  return button;
};

// Renders static markup, then stubs playback and wires the controller on the rendered root.
// `manual` leaves the wiring to the story; `hover` keeps every control in its hover state.
export const Harness = ({ html, manual = false, hover = false }) => {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    const restores = Array.from(root.querySelectorAll("video"), video =>
      stubPlayback(video)
    );
    const destroy = manual ? () => {} : initVideoControls(root);
    const hovered = hover ? Array.from(root.querySelectorAll(".mbtn")) : [];
    hovered.forEach(button => forceHover(button));
    return () => {
      hovered.forEach(button => forceHover(button, false));
      destroy();
      restores.forEach(restore => restore());
    };
  }, [html, manual, hover]);
  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
};
