// Scroll opening and phone swipe controls for the stories grid. Dependency-free.
// Markup: `.hp-stories` with `.hp-stories__grid`, `.hp-stories__cards` (the list) and `.hp-stories__controls`
// (`hidden` in the server markup). Design doc: WWWCMS-236.
// Opening (above 900px, no reduced motion): writes `--hp-stories-progress` (0 inset .. 1 full width) on the
// grid from the section's scroll position. Without the property (no script, reduced motion, tablets,
// phones) the CSS default is 1: full width and square corners.
// Swipe controls (600px and under): shown only when the row overflows; Previous/Next are `aria-disabled`
// (not `disabled`) at the ends so focus is never lost.

const PHONE = "(max-width: 900px)"; // keep equal to $hp-phone-max in src/scss/_variables.scss
const COMPACT = "(max-width: 600px)"; // keep equal to $hp-stories-compact-max in _stories-grid.scss
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const PROGRESS = "--hp-stories-progress";
const CLIP = "--hp-stories-clip"; // hidden while the corners are rounded, else visible (the hover shadow)
const HEADER = "--hp-stories-header-used"; // the page's --hp-stories-header-height, or the Storybook default
const GUTTER = 48; // the inset the grid starts from, in px
const END_TOLERANCE = 2; // fractional scroll positions under zoom

const bound = new WeakSet();
const noop = () => {};

// Without matchMedia (embedded webviews) the page counts as a phone: no opening, no controls.
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

const bind = (section, win) => {
  const grid = section.querySelector(".hp-stories__grid");
  const row = section.querySelector(".hp-stories__cards");
  const controls = section.querySelector(".hp-stories__controls");
  const prev = section.querySelector(".hp-stories__prev");
  const next = section.querySelector(".hp-stories__next");
  const phone = query(win, PHONE, true);
  const compact = query(win, COMPACT, false);
  const reduced = query(win, REDUCED_MOTION, false);
  const canObserve = typeof win.IntersectionObserver === "function";

  let disposed = false;
  let header = 0;
  let frameId = null;
  let paintFrame = null;
  let settleFrame = null;
  let observer = null;
  let observedHeight = 0;
  let listening = false;
  let opening = false;
  let clip = null;

  const readHeader = () => {
    const value = parseFloat(
      win.getComputedStyle(section).getPropertyValue(HEADER)
    );
    header = Number.isFinite(value) ? value : 0;
  };

  // 0 when the section's top is at 90% of the window height, 1 when it reaches the header plus the 48px
  // gutter. A window too short for that interval (start <= end) is simply fully open.
  const progress = () => {
    const start = win.innerHeight * 0.9;
    const end = header + GUTTER;
    if (start <= end) return 1;
    return clamp((start - section.getBoundingClientRect().top) / (start - end));
  };

  const apply = value => {
    grid.style.setProperty(PROGRESS, value.toFixed(4));
    const next = value < 1 ? "hidden" : "visible";
    if (next !== clip) {
      clip = next;
      grid.style.setProperty(CLIP, next);
    }
  };

  const clear = () => {
    clip = null;
    grid.style.removeProperty(PROGRESS);
    grid.style.removeProperty(CLIP);
  };

  const write = () => {
    frameId = null;
    if (!opening) return;
    apply(progress());
  };

  const schedule = () => {
    if (opening && frameId === null) frameId = win.requestAnimationFrame(write);
  };

  const listen = on => {
    if (on === listening) return;
    listening = on;
    const method = on ? "addEventListener" : "removeEventListener";
    win[method]("scroll", schedule, { passive: true });
  };

  // Near the window the scroll listener runs; far from it the final 0 or 1 is written once.
  const onIntersect = entries => {
    if (!opening) return;
    const entry = entries[entries.length - 1];
    if (entry && entry.isIntersecting) {
      listen(true);
    } else {
      listen(false);
      write();
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

  const startOpening = () => {
    if (opening) return;
    if (!canObserve) {
      clear(); // no way to know when it is near: stay static
      return;
    }
    opening = true;
    readHeader();
    apply(progress()); // no flash of the wrong state
    observe();
  };

  const stopOpening = () => {
    opening = false;
    listen(false);
    if (frameId !== null) {
      win.cancelAnimationFrame(frameId);
      frameId = null;
    }
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    clear();
  };

  // ---- swipe controls ----

  const step = () => {
    const items = row.children;
    if (items.length > 1) return items[1].offsetLeft - items[0].offsetLeft;
    return items.length ? items[0].offsetWidth : 0;
  };

  const setDisabled = (button, disabled) =>
    button.setAttribute("aria-disabled", disabled ? "true" : "false");

  const paint = () => {
    if (!controls || controls.hidden) return;
    setDisabled(prev, row.scrollLeft <= END_TOLERANCE);
    setDisabled(
      next,
      row.scrollLeft >= row.scrollWidth - row.clientWidth - END_TOLERANCE
    );
  };

  const syncControls = () => {
    if (!controls) return;
    const hide = !(
      compact.matches && row.scrollWidth > row.clientWidth + END_TOLERANCE
    );
    // A control that disappears while it has focus hands focus to the first card.
    if (
      hide &&
      !controls.hidden &&
      controls.contains(section.ownerDocument.activeElement)
    ) {
      const card = row.querySelector(".hp-stories__card");
      if (card) card.focus({ preventScroll: true });
    }
    controls.hidden = hide;
    paint();
  };

  const scrollBy = direction => {
    const button = direction < 0 ? prev : next;
    if (button.getAttribute("aria-disabled") === "true") return;
    row.scrollBy({
      left: direction * step(),
      behavior: reduced.matches ? "auto" : "smooth",
    });
  };
  const onPrev = () => scrollBy(-1);
  const onNext = () => scrollBy(1);
  const onRowScroll = () => {
    if (paintFrame !== null) return;
    paintFrame = win.requestAnimationFrame(() => {
      paintFrame = null;
      paint();
    });
  };

  const sync = () => {
    if (!phone.matches && !reduced.matches) startOpening();
    else stopOpening();
    syncControls();
  };

  // One resize handler for both features.
  const onResize = () => {
    if (opening) {
      readHeader();
      if (win.innerHeight !== observedHeight) observe();
      schedule();
    }
    syncControls();
  };

  const unsubscribe = [
    subscribe(phone, sync),
    subscribe(compact, sync),
    subscribe(reduced, sync),
  ];
  win.addEventListener("resize", onResize);
  if (controls) {
    prev.addEventListener("click", onPrev);
    next.addEventListener("click", onNext);
    row.addEventListener("scroll", onRowScroll, { passive: true });
  }
  sync();
  // The first paint may not have laid the row out yet; check again once it has.
  if (typeof win.requestAnimationFrame === "function") {
    settleFrame = win.requestAnimationFrame(() => {
      settleFrame = null;
      if (!disposed) syncControls();
    });
  }

  return () => {
    disposed = true;
    unsubscribe.forEach(cleanup => cleanup());
    win.removeEventListener("resize", onResize);
    stopOpening();
    if (controls) {
      prev.removeEventListener("click", onPrev);
      next.removeEventListener("click", onNext);
      row.removeEventListener("scroll", onRowScroll);
      controls.hidden = true;
    }
    [paintFrame, settleFrame].forEach(id => {
      if (id !== null) win.cancelAnimationFrame(id);
    });
    bound.delete(section);
  };
};

/**
 * Opens every `.hp-stories` grid under `root` from inset to full width as it scrolls into view (above 900px,
 * no reduced motion) and runs the phone swipe controls (600px and under). Safe to call again for content
 * added later.
 * @param {Document|Element} [root=document]
 * @returns {function(): void} Removes the listeners and the property this call added.
 */
export function initStories(root = document) {
  const doc = root.ownerDocument || root;
  const win = doc.defaultView || window;
  const cleanups = [];
  root.querySelectorAll(".hp-stories").forEach(section => {
    if (bound.has(section) || !section.querySelector(".hp-stories__grid")) {
      return;
    }
    bound.add(section);
    cleanups.push(bind(section, win));
  });
  return () => {
    cleanups.forEach(cleanup => cleanup());
    cleanups.length = 0;
  };
}
