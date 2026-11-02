// Scroll opening for the stories grid. Dependency-free.
// Markup: `.hp-stories` with `.hp-stories__grid`. Design doc: WWWCMS-236.
// Opening (above 900px, no reduced motion): writes `--hp-stories-progress` (0 inset .. 1 full width) on the
// grid from the section's scroll position, and `--hp-stories-clip` (hidden while the corners are rounded,
// else visible so the hover shadow of an edge card is not cut off). Without them (no script, reduced
// motion, tablets, phones) the CSS defaults apply: full width, square corners.

const PHONE = "(max-width: 900px)"; // keep equal to $hp-phone-max in src/scss/_variables.scss
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const PROGRESS = "--hp-stories-progress";
const CLIP = "--hp-stories-clip";
const HEADER = "--hp-stories-header-used"; // the page's --hp-stories-header-height, or the Storybook default
const GUTTER = 48; // the inset the grid starts from, in px

const bound = new WeakSet();
const noop = () => {};

// Without matchMedia (embedded webviews) the page counts as a phone: no opening.
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
  const phone = query(win, PHONE, true);
  const reduced = query(win, REDUCED_MOTION, false);
  const canObserve = typeof win.IntersectionObserver === "function";

  let header = 0;
  let frameId = null;
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

  const sync = () => {
    if (!phone.matches && !reduced.matches) startOpening();
    else stopOpening();
  };

  const onResize = () => {
    if (!opening) return;
    readHeader();
    if (win.innerHeight !== observedHeight) observe();
    schedule();
  };

  const unsubscribe = [subscribe(phone, sync), subscribe(reduced, sync)];
  win.addEventListener("resize", onResize);
  sync();

  return () => {
    unsubscribe.forEach(cleanup => cleanup());
    win.removeEventListener("resize", onResize);
    stopOpening();
    bound.delete(section);
  };
};

/**
 * Opens every `.hp-stories` grid under `root` from inset to full width as it scrolls into view (above 900px,
 * no reduced motion). Safe to call again for content added later.
 * @param {Document|Element} [root=document]
 * @returns {function(): void} Removes the listeners and the properties this call added.
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
