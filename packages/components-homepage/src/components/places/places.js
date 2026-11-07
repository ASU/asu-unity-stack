// Behaviour for the homepage places section (campus locator). Dependency-free. Design doc: WWWCMS-241.
// Markup: `.hp-places` (see places-helpers.jsx `placesHtml`). `initVideoControls` (video-control.js) owns playback;
// this script attaches the video source, sets `data-hold` while a still covers the video (desktop), and runs:
// the desktop list (>= 1024: select a location, photo over the video, leader and box), the accordion (< 1024,
// Figma 375: one location open at a time), the scroll opening of the media (>= 1024) and the wallpaper alignment.
// Without this script the CSS shows every location open (name, text, link, photo) on Gray 1.

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
  let disposed = false;

  section.classList.add("is-enhanced");
  cleanups.push(() => section.classList.remove("is-enhanced"));

  // ---------- video source: loaded when the media comes within one window height of the viewport ----------

  let near = typeof win.IntersectionObserver !== "function"; // without the API the clip loads at once
  let wanted = false;
  let failed = false; // the source did not load: the control stays hidden until a new source is attached

  const load = () => {
    const source = safeSource(video.dataset.src, doc);
    if (!source) return;
    // preload before src: `loadeddata` (which resumes autoplay) never fires under preload="none"
    video.setAttribute("preload", reduced.matches ? "none" : "auto");
    if (video.getAttribute("src") !== source) {
      failed = false;
      video.setAttribute("src", source);
    }
    if (deskButton) deskButton.hidden = failed;
  };

  const attach = on => {
    if (!video) return;
    wanted = on;
    if (on && near) {
      load();
      return;
    }
    if (!on) {
      failed = false;
      if (video.hasAttribute("src")) {
        video.pause();
        video.removeAttribute("src");
        video.load();
      }
      if (deskButton) deskButton.hidden = true;
    }
  };

  // One-shot: the first time the media is within one window height of the viewport the clip is requested.
  let loader = null;
  let loaderHeight = 0;
  const watchMedia = () => {
    if (loader) loader.disconnect();
    loaderHeight = win.innerHeight;
    loader = new win.IntersectionObserver(
      records => {
        const last = records[records.length - 1];
        if (!last || !last.isIntersecting) return;
        near = true;
        loader.disconnect();
        loader = null;
        if (wanted) load();
      },
      { rootMargin: `${loaderHeight}px 0px` }
    );
    loader.observe(media);
  };
  if (video && media && !near) watchMedia();
  cleanups.push(() => {
    if (loader) loader.disconnect();
  });

  const hold = on => {
    if (video) video.toggleAttribute("data-hold", on);
  };

  // A source that fails to load leaves the control hidden (the poster stays); a focused control hands focus on.
  if (video && deskButton) {
    listen(video, "error", () => {
      if (!video.hasAttribute("src")) return;
      failed = true;
      if (doc.activeElement === deskButton) {
        const target = section.querySelector(".hp-places__cta");
        if (target) target.focus();
      }
      deskButton.hidden = true;
    });
  }

  // ---------- desktop list (>= 1024) ----------

  let sel = -1;
  let hideTimer = 0;
  let showFrame = 0;
  let scrollOrigin = 0; // the page's scroll position when the box opened

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

  // The data layer event follows the widget: a toggle on desktop, an open/close disclosure below 1024
  // (asucms datalayer.md); the attributes are read at click time.
  const track = (button, event, action) => {
    button.setAttribute("data-ga-event", event);
    button.setAttribute("data-ga-action", action);
  };

  const renderDesk = () => {
    items.forEach((item, i) => {
      const on = i === sel;
      names[i].removeAttribute("aria-expanded");
      names[i].setAttribute("aria-pressed", on ? "true" : "false");
      track(names[i], "select", "click");
      item.classList.remove("is-open");
      item.classList.toggle("is-selected", on);
    });
    // Only the selected still is exposed to assistive technology; the rest stay alt="".
    stills.forEach((still, i) => {
      still.classList.toggle("is-on", i === sel);
      still.setAttribute("alt", i === sel ? still.dataset.alt || "" : "");
    });
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
        if (desk.matches && sel !== i) details[i].hidden = true;
      },
      reduced.matches ? 0 : HIDE_DELAY
    );
  };

  const select = i => {
    if (sel >= 0 && sel !== i) hide(sel);
    // A still replaces the video and the control goes (CSS): a focused control hands focus to the name.
    if (deskButton && doc.activeElement === deskButton) {
      names[i].focus({ preventScroll: true });
    }
    sel = i;
    scrollOrigin = win.scrollY;
    promote(stills[i]);
    hold(true);
    renderDesk();
    show(i);
  };

  // `keepHold`: the pause button's own click clears the hold (video-control.js), so it plays on that click.
  const deselect = ({
    focusName = false,
    keepHold = false,
    preventScroll = false,
  } = {}) => {
    if (sel < 0) return;
    const previous = sel;
    if (focusName) names[previous].focus({ preventScroll });
    sel = -1;
    if (!keepHold) hold(false);
    renderDesk();
    hide(previous);
  };

  // Brand QA: a user scroll of more than SCROLL_CLOSE px from where the box opened returns to the video. Focus inside
  // the box goes back to the name without moving the page. The listener is passive and ignores everything else.
  const SCROLL_CLOSE = 48;
  let focusScrollUntil = 0;
  // A scroll caused by moving focus inside the section (Tab to a link below the fold) is not the visitor leaving the
  // box: the position it ends at becomes the new origin.
  listen(section, "focusin", () => {
    focusScrollUntil = win.performance.now() + 150;
  });
  listen(
    win,
    "scroll",
    () => {
      if (sel < 0 || !desk.matches) return;
      const now = win.performance.now();
      if (now < focusScrollUntil) {
        // still scrolling to the focused element (smooth scrolling sends one event per frame)
        focusScrollUntil = now + 100;
        scrollOrigin = win.scrollY;
        return;
      }
      if (Math.abs(win.scrollY - scrollOrigin) <= SCROLL_CLOSE) return;
      deselect({
        focusName: details[sel].contains(doc.activeElement),
        preventScroll: true,
      });
    },
    { passive: true }
  );

  // ---------- accordion (< 1024, Figma 375): one location open at a time ----------

  let open = -1; // brand: every location starts collapsed

  const renderAccordion = () => {
    items.forEach((item, i) => {
      const on = i === open;
      names[i].removeAttribute("aria-pressed");
      names[i].setAttribute("aria-expanded", on ? "true" : "false");
      track(names[i], "collapse", on ? "close" : "open");
      item.classList.remove("is-selected", "is-shown");
      item.classList.toggle("is-open", on);
      item.style.removeProperty("--hp-places-box-shift");
      details[i].hidden = !on;
      closes[i].hidden = true;
    });
  };

  names.forEach((button, i) => {
    listen(button, "click", () => {
      if (!desk.matches) {
        open = open === i ? -1 : i;
        renderAccordion();
      } else if (sel === i) {
        deselect();
      } else {
        select(i);
      }
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
    // The order of this listener and video-control.js does not matter: the hold is left for the control to clear.
    listen(deskButton, "click", () => deselect({ keepHold: true }));
  }

  // ---------- breakpoint: the desktop list or the accordion ----------

  const syncPattern = () => {
    const isDesk = desk.matches;
    attach(true); // the video shows at every width (Figma: a strip above the accordion below 1024)
    win.clearTimeout(hideTimer);
    win.cancelAnimationFrame(showFrame);
    if (isDesk) {
      sel = -1;
      open = -1; // the accordion starts collapsed again after a visit to desktop
      hold(false);
      items.forEach(item => item.classList.remove("is-shown"));
      details.forEach(detail => {
        detail.hidden = true;
      });
      closes.forEach(button => {
        button.hidden = true;
      });
      renderDesk();
    } else {
      if (sel >= 0) {
        sel = -1;
        hold(false);
      }
      stills.forEach(still => {
        still.classList.remove("is-on");
        still.setAttribute("alt", "");
      });
      section.classList.remove("has-still");
      renderAccordion();
    }
    // A control that disappeared while focused hands focus to its location's name, else the first button.
    const active = doc.activeElement;
    if (
      active &&
      active !== doc.body &&
      section.contains(active) &&
      active.getClientRects().length === 0
    ) {
      const owner = active.closest(".hp-places__item");
      const target =
        (owner && owner.querySelector(".hp-places__name")) ||
        section.querySelector(".hp-places__cta");
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
    if (!media) return;
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
    if (loader && win.innerHeight !== loaderHeight) watchMedia();
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
      // Only what depends on motion: the user's selection and open location stay.
      attach(true);
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

  syncPattern();
  syncOpening();
  measureWall();

  return () => {
    disposed = true;
    win.clearTimeout(hideTimer);
    win.cancelAnimationFrame(showFrame);
    if (frameId !== null) win.cancelAnimationFrame(frameId);
    setScrollListener(false);
    if (observer) observer.disconnect();
    cleanups.forEach(cleanup => cleanup());
    cleanups.length = 0;
    // Back to the server markup: every location open, nothing attached, nothing script-only visible.
    // The source goes before the hold clears: the control's hold observer must not play a source-less video.
    attach(false);
    hold(false);
    clearOpening();
    items.forEach((item, i) => {
      item.classList.remove("is-selected", "is-shown", "is-open");
      item.style.removeProperty("--hp-places-box-shift");
      details[i].hidden = false;
      closes[i].hidden = true;
      names[i].removeAttribute("aria-pressed");
      names[i].removeAttribute("aria-expanded");
      track(names[i], "select", "click");
    });
    stills.forEach(still => {
      still.classList.remove("is-on");
      still.setAttribute("alt", "");
      if (still.dataset.src) still.removeAttribute("src");
    });
    if (video) video.setAttribute("preload", "none");
    section.classList.remove("has-still");
    section.style.removeProperty("--hp-places-wall-bottom");
    section.style.removeProperty("--hp-places-wall-y");
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
