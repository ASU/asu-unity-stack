// Behaviour for the homepage places section (campus locator). Dependency-free. Design doc: WWWCMS-241.
// Markup: `.hp-places` (see places-helpers.jsx `placesHtml`). `initVideoControls` (video-control.js) owns playback;
// this script attaches the video sources, sets `data-hold` while a still or another slide covers a video,
// and runs: the desktop list (>= 1024: select a location, photo over the video, leader and box), the phone/tablet
// carousel (< 1024: group tabs, cards, name index), the scroll opening of the media (>= 1024) and the wallpaper
// alignment. Without this script the CSS shows the stacked, all-text baseline.

const DESKTOP = "(min-width: 1024px)"; // keep equal to $hp-places-bp in _places.scss
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const PROGRESS = "--hp-places-progress";
const HEADER = "--hp-places-header-used"; // the page's --hp-places-header-height, or the Storybook default
const GUTTER = 48; // the inset the media starts from, in px
const TILE_RATIO = 1189 / 1280; // learn-bg.webp is 1280x1189, drawn 100% wide
const HIDE_DELAY = 220; // ms: the box fade-out before `hidden`

const bound = new WeakSet();
const noop = () => {};

const query = (win, text, fallback) =>
  typeof win.matchMedia === "function"
    ? win.matchMedia(text)
    : { matches: fallback };

const subscribe = (mediaQuery, handler) => {
  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }
  if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(handler); // Safari 13 and earlier
    return () => mediaQuery.removeListener(handler);
  }
  return noop;
};

const clamp = value => Math.min(1, Math.max(0, value));

// Only an http(s) URL is attached; anything else (javascript:, data:, empty) is not.
const safeSource = (raw, doc) => {
  if (!raw || !raw.trim()) return null;
  try {
    const url = new URL(raw.trim(), doc.baseURI);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.href
      : null;
  } catch {
    return null;
  }
};

const bind = (section, doc, win) => {
  const desk = query(win, DESKTOP, false);
  const reduced = query(win, REDUCED_MOTION, false);
  const cleanups = [];
  const listen = (target, type, handler, options) => {
    target.addEventListener(type, handler, options);
    cleanups.push(() => target.removeEventListener(type, handler, options));
  };
  const all = (selector, root = section) =>
    Array.from(root.querySelectorAll(selector));

  const media = section.querySelector(".hp-places__media");
  const video = section.querySelector(".hp-places__video");
  const deskButton = section.querySelector(".hp-places__mbtn");
  const stills = all(".hp-places__still");
  const items = all(".hp-places__item");
  const names = items.map(item => item.querySelector(".hp-places__name"));
  const details = items.map(item => item.querySelector(".hp-places__detail"));
  const closes = items.map(item => item.querySelector(".hp-places__close"));
  const tabs = section.querySelector(".hp-places__tabs");
  const tabButtons = all(".hp-places__tab");
  const track = section.querySelector(".hp-places__track");
  const cards = all(".hp-places__card");
  const index = section.querySelector(".hp-places__index");
  const indexButtons = all(".hp-places__iname");
  const mobVideo = section.querySelector(".hp-places__video-m");
  const mobButton = section.querySelector(".hp-places__mbtn-m");
  const groupOf = indexButtons.map(button => Number(button.dataset.group) || 0);
  let disposed = false;

  section.classList.add("is-enhanced");
  cleanups.push(() => section.classList.remove("is-enhanced"));

  // The carousel roles are added here: the stacked baseline is not a carousel (the video card is hidden).
  if (track) {
    track.setAttribute("role", "region");
    track.setAttribute("aria-roledescription", "carousel");
    track.setAttribute("aria-label", track.dataset.label || "");
  }
  cards.forEach((card, i) => {
    card.setAttribute("role", "group");
    card.setAttribute("aria-roledescription", "slide");
    card.setAttribute(
      "aria-label",
      `${i + 1} of ${cards.length}: ${card.dataset.label || ""}`
    );
  });

  // ---------- video sources: only the visible pattern's video is attached ----------

  const attach = (el, button, on) => {
    if (!el) return;
    const source = on ? safeSource(el.dataset.src, doc) : null;
    if (!source) {
      if (el.hasAttribute("src")) {
        el.pause();
        el.removeAttribute("src");
        el.load();
      }
      if (button) button.hidden = true;
      return;
    }
    // preload before src: `loadeddata` (which resumes autoplay) never fires under preload="none"
    el.setAttribute("preload", reduced.matches ? "none" : "auto");
    if (el.getAttribute("src") !== source) el.setAttribute("src", source);
    if (button) button.hidden = false;
  };

  const hold = (el, on) => {
    if (el) el.toggleAttribute("data-hold", on);
  };

  // A source that fails to load leaves the control hidden (the poster stays) until the next attach.
  [
    [video, deskButton],
    [mobVideo, mobButton],
  ].forEach(([el, button]) => {
    if (!el || !button) return;
    listen(el, "error", () => {
      if (el.hasAttribute("src")) button.hidden = true;
    });
  });

  // ---------- desktop list ----------

  let sel = -1;
  let hideTimer = 0;
  let showFrame = 0;

  const promote = still => {
    if (!still.getAttribute("src") && still.dataset.src) {
      const source = safeSource(still.dataset.src, doc);
      if (source) still.setAttribute("src", source);
    }
  };

  // The box of a lower name (London, long copy) would hang past the media: it moves up by the overflow and
  // the leader stays on the name's rule.
  const fitBox = i => {
    const box = items[i].querySelector(".hp-places__box");
    items[i].style.setProperty("--hp-places-box-shift", "0px");
    if (!media || !desk.matches) return;
    const overflow =
      box.getBoundingClientRect().bottom - media.getBoundingClientRect().bottom;
    if (overflow > 0) {
      items[i].style.setProperty(
        "--hp-places-box-shift",
        `${Math.ceil(overflow)}px`
      );
    }
  };

  const renderDesk = () => {
    items.forEach((item, i) => {
      const on = i === sel;
      names[i].setAttribute("aria-pressed", on ? "true" : "false");
      item.classList.toggle("is-selected", on);
    });
    stills.forEach((still, i) => still.classList.toggle("is-on", i === sel));
    section.classList.toggle("has-still", sel >= 0);
  };

  const show = i => {
    win.clearTimeout(hideTimer);
    win.cancelAnimationFrame(showFrame);
    details.forEach((detail, j) => {
      if (j !== i) {
        items[j].classList.remove("is-shown");
        detail.hidden = true;
      }
    });
    details[i].hidden = false;
    closes[i].hidden = false;
    fitBox(i);
    // Two frames so the fades run from their resting state (display:none cannot transition).
    showFrame = win.requestAnimationFrame(() => {
      showFrame = win.requestAnimationFrame(() => {
        items[i].classList.add("is-shown");
      });
    });
  };

  const hide = i => {
    win.cancelAnimationFrame(showFrame);
    items[i].classList.remove("is-shown");
    win.clearTimeout(hideTimer);
    hideTimer = win.setTimeout(
      () => {
        if (sel !== i) details[i].hidden = true;
      },
      reduced.matches ? 0 : HIDE_DELAY
    );
  };

  const select = i => {
    if (sel >= 0 && sel !== i) hide(sel);
    sel = i;
    promote(stills[i]);
    hold(video, true);
    renderDesk();
    show(i);
  };

  // `keepHold`: the pause button's own click clears the hold (video-control.js), so it plays on that click.
  const deselect = ({ focusName = false, keepHold = false } = {}) => {
    if (sel < 0) return;
    const previous = sel;
    if (focusName) names[previous].focus();
    sel = -1;
    if (!keepHold) hold(video, false);
    renderDesk();
    hide(previous);
  };

  names.forEach((button, i) => {
    listen(button, "click", () => {
      if (sel === i) deselect();
      else select(i);
    });
    listen(button, "pointerenter", () => promote(stills[i]));
    listen(button, "focus", () => promote(stills[i]));
  });
  closes.forEach((button, i) => {
    listen(button, "click", () => {
      if (sel === i) deselect({ focusName: true });
    });
  });
  // Esc anywhere (Safari does not focus a clicked button): focus returns to the name only if it was inside.
  listen(doc, "keydown", event => {
    if (event.key !== "Escape" || event.defaultPrevented || sel < 0) return;
    deselect({ focusName: section.contains(doc.activeElement) });
  });
  // A click outside the box (the media counts as outside) and not on a name returns to the video.
  listen(doc, "click", event => {
    if (sel < 0 || !desk.matches) return;
    const path = event.composedPath ? event.composedPath() : [];
    const inside = path.some(
      node =>
        node === details[sel] || names.includes(node) || node === deskButton
    );
    if (!inside) deselect();
  });
  if (deskButton) {
    // Bubble phase, after video-control.js: a press from a still goes back to the video.
    listen(deskButton, "click", () => deselect({ keepHold: true }));
  }

  // ---------- carousel (< 1024) ----------

  const M = { slide: 0, target: null, timer: 0 };

  const step = () =>
    cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft || 1 : 1;

  // The slide in view. The last cards can be reached only at the end of the scroll (a card is at most 480px
  // wide), so the end of the track counts as the last slide.
  const slideAt = () => {
    const max = track.scrollWidth - track.clientWidth;
    if (max > 1 && track.scrollLeft >= max - 1) return cards.length - 1;
    return Math.max(
      0,
      Math.min(cards.length - 1, Math.round(track.scrollLeft / step()))
    );
  };

  const renderMob = ({ keepHold = false } = {}) => {
    const tab = M.slide > 0 ? groupOf[M.slide - 1] : M.tab || 0;
    M.tab = tab;
    tabButtons.forEach((button, g) =>
      button.setAttribute("aria-pressed", g === tab ? "true" : "false")
    );
    indexButtons.forEach((button, i) => {
      button.hidden = groupOf[i] !== tab;
      button.setAttribute("aria-pressed", M.slide === i + 1 ? "true" : "false");
    });
    // The video card's own button clears the hold when it is pressed (video-control.js).
    if (!keepHold) hold(mobVideo, M.slide !== 0);
  };

  const goTo = (i, { keepHold = false } = {}) => {
    M.target = i;
    win.clearTimeout(M.timer);
    M.timer = win.setTimeout(() => {
      M.target = null;
    }, 900); // fallback if scrollend never fires
    track.scrollTo({
      left: i * step(),
      behavior: reduced.matches ? "auto" : "smooth",
    });
    M.slide = i;
    renderMob({ keepHold });
  };

  if (track) {
    listen(
      track,
      "scroll",
      () => {
        if (desk.matches) return;
        const i = slideAt();
        if (M.target !== null) {
          if (i === M.target) M.target = null;
          return;
        }
        if (i !== M.slide) {
          M.slide = i;
          renderMob();
        }
      },
      { passive: true }
    );
    listen(track, "scrollend", () => {
      M.target = null;
    });
    // Tabbing to a link on an off-screen card brings the card in and keeps the tab and index in step.
    listen(track, "focusin", event => {
      const i = cards.findIndex(card => card.contains(event.target));
      if (i >= 0 && i !== M.slide && M.target === null) {
        M.slide = i;
        renderMob();
      }
    });
  }
  tabButtons.forEach(button =>
    listen(button, "click", () => goTo(Number(button.dataset.slide) || 1))
  );
  indexButtons.forEach((button, i) =>
    listen(button, "click", () => goTo(M.slide === i + 1 ? 0 : i + 1))
  );
  if (mobButton) {
    // The order of this listener and video-control.js does not matter: the hold is left for the control to clear.
    listen(mobButton, "click", () => {
      if (M.slide !== 0) goTo(0, { keepHold: true });
    });
  }

  // ---------- breakpoint: one pattern's video and controls at a time ----------

  const syncPattern = () => {
    const isDesk = desk.matches;
    attach(video, deskButton, isDesk);
    attach(mobVideo, mobButton, !isDesk);
    if (tabs) tabs.hidden = isDesk;
    if (index) index.hidden = isDesk;
    closes.forEach((button, i) => {
      button.hidden = !(isDesk && i === sel);
    });
    if (isDesk) {
      if (mobVideo && !mobVideo.paused) mobVideo.pause();
    } else {
      if (sel >= 0) deselect();
      // The track was display:none on desktop (its scroll position reset): bring it back to the current slide.
      if (track) track.scrollTo({ left: M.slide * step(), behavior: "auto" });
    }
    renderMob();
    // A control that disappeared while focused hands focus to the first button of the section.
    const active = doc.activeElement;
    if (
      active &&
      active !== doc.body &&
      section.contains(active) &&
      active.getClientRects().length === 0
    ) {
      const target = section.querySelector(".hp-places__cta");
      if (target) target.focus();
    }
  };

  // ---------- scroll opening of the media (>= 1024, no reduced motion) ----------

  let header = 0;
  let frameId = null;
  let opening = false;
  let clipped = null;

  const readHeader = () => {
    const value = parseFloat(
      win.getComputedStyle(section).getPropertyValue(HEADER)
    );
    header = Number.isFinite(value) ? value : 0;
  };

  // 0 when the media's top is at 90% of the window height, 1 when it reaches the header plus the 48px gutter.
  // A window too short for that interval (start <= end) is simply fully open.
  const progress = () => {
    const start = win.innerHeight * 0.9;
    const end = header + GUTTER;
    if (start <= end) return 1;
    return clamp((start - media.getBoundingClientRect().top) / (start - end));
  };

  const apply = value => {
    media.style.setProperty(PROGRESS, value.toFixed(4));
    const next = value < 1;
    if (next !== clipped) {
      clipped = next;
      media.classList.toggle("is-opening", next);
    }
  };

  const clearOpening = () => {
    clipped = null;
    media.classList.remove("is-opening");
    media.style.removeProperty(PROGRESS);
  };

  const writeOpening = () => {
    frameId = null;
    if (opening) apply(progress());
  };

  const scheduleOpening = () => {
    if (opening && frameId === null) {
      frameId = win.requestAnimationFrame(writeOpening);
    }
  };

  let observer = null;
  let observedHeight = 0;
  let listening = false;

  const setScrollListener = on => {
    if (on === listening) return;
    listening = on;
    const method = on ? "addEventListener" : "removeEventListener";
    win[method]("scroll", scheduleOpening, { passive: true });
  };

  const onIntersect = records => {
    if (!opening) return;
    const last = records[records.length - 1];
    if (last && last.isIntersecting) {
      setScrollListener(true);
    } else {
      setScrollListener(false);
      writeOpening();
    }
  };

  // The observer's one-viewport margin follows the window height.
  const observe = () => {
    if (observer) observer.disconnect();
    observedHeight = win.innerHeight;
    observer = new win.IntersectionObserver(onIntersect, {
      rootMargin: `${observedHeight}px 0px`,
    });
    observer.observe(section);
  };

  const syncOpening = () => {
    const want = desk.matches && !reduced.matches && Boolean(media);
    if (want && !opening) {
      opening = true;
      readHeader();
      apply(progress());
      // Near the window the scroll listener runs; far from it the final 0 or 1 is written once.
      if (typeof win.IntersectionObserver === "function") observe();
      else setScrollListener(true);
    } else if (!want && opening) {
      opening = false;
      setScrollListener(false);
      if (observer) observer.disconnect();
      observer = null;
      if (frameId !== null) win.cancelAnimationFrame(frameId);
      frameId = null;
      clearOpening();
    }
  };

  // ---------- wallpaper: stops at the media's bottom; optionally continues the tile of the section above ----------

  const follow = section.getAttribute("data-wallpaper-follow");
  const measureWall = () => {
    if (media && desk.matches) {
      const bottom =
        section.getBoundingClientRect().bottom -
        media.getBoundingClientRect().bottom;
      section.style.setProperty(
        "--hp-places-wall-bottom",
        `${Math.max(0, bottom).toFixed(1)}px`
      );
    } else {
      section.style.removeProperty("--hp-places-wall-bottom");
    }
    if (!follow) return;
    let above = null;
    try {
      above = doc.querySelector(follow);
    } catch {
      above = null;
    }
    if (!above) return;
    const tile = above.clientWidth * TILE_RATIO;
    if (tile > 0) {
      section.style.setProperty(
        "--hp-places-wall-y",
        `${(above.offsetHeight % tile).toFixed(2)}px`
      );
    }
  };

  const onResize = () => {
    readHeader();
    if (observer && win.innerHeight !== observedHeight) observe();
    scheduleOpening();
    measureWall();
    if (sel >= 0) fitBox(sel);
  };

  cleanups.push(
    subscribe(desk, () => {
      syncPattern();
      syncOpening();
      measureWall();
    }),
    subscribe(reduced, () => {
      syncPattern();
      syncOpening();
    })
  );
  listen(win, "resize", onResize);
  listen(win, "load", measureWall);
  if (doc.fonts && doc.fonts.ready) {
    doc.fonts.ready.then(() => {
      if (!disposed) measureWall();
    });
  }

  names.forEach(button => button.setAttribute("aria-pressed", "false"));
  renderDesk();
  syncPattern();
  syncOpening();
  measureWall();

  return () => {
    disposed = true;
    win.clearTimeout(hideTimer);
    win.clearTimeout(M.timer);
    win.cancelAnimationFrame(showFrame);
    if (frameId !== null) win.cancelAnimationFrame(frameId);
    setScrollListener(false);
    if (observer) observer.disconnect();
    cleanups.forEach(cleanup => cleanup());
    cleanups.length = 0;
    // Back to the server markup: nothing selected, nothing attached, nothing script-only visible.
    hold(video, false);
    hold(mobVideo, false);
    clearOpening();
    attach(video, deskButton, false);
    attach(mobVideo, mobButton, false);
    if (tabs) tabs.hidden = true;
    if (index) index.hidden = true;
    items.forEach((item, i) => {
      item.classList.remove("is-selected", "is-shown");
      item.style.removeProperty("--hp-places-box-shift");
      details[i].hidden = true;
      closes[i].hidden = true;
      names[i].removeAttribute("aria-pressed");
    });
    stills.forEach(still => still.classList.remove("is-on"));
    section.classList.remove("has-still");
    section.style.removeProperty("--hp-places-wall-bottom");
    section.style.removeProperty("--hp-places-wall-y");
    tabButtons.forEach(button => button.removeAttribute("aria-pressed"));
    indexButtons.forEach(button => {
      button.hidden = false;
      button.removeAttribute("aria-pressed");
    });
    [track, ...cards].forEach(element => {
      if (!element) return;
      element.removeAttribute("role");
      element.removeAttribute("aria-roledescription");
      element.removeAttribute("aria-label");
    });
    bound.delete(section);
  };
};

/**
 * Wires every `.hp-places` section under `root`. Safe to call again for content added later.
 * @param {Document|Element} [root=document]
 * @returns {function(): void} Removes the listeners and the state this call added.
 */
export function initPlaces(root = document) {
  const doc = root.ownerDocument || root;
  const win = doc.defaultView || window;
  const cleanups = [];
  root.querySelectorAll(".hp-places").forEach(section => {
    if (bound.has(section) || !section.querySelector(".hp-places__frame")) {
      return;
    }
    bound.add(section);
    cleanups.push(bind(section, doc, win));
  });
  return () => {
    cleanups.forEach(cleanup => cleanup());
    cleanups.length = 0;
  };
}
