// Opt-in scroll entrance for the homepage "reimagine" section. Dependency-free.
// Prototype v2.71 "settle" (script P:3537-3544, styles P:1226-1230): once the section's block crosses 6%
// above the viewport bottom it eases 24px up to rest. Rules: only sections with `data-entrance`; only
// content below the fold at init; only at >= 901px and without reduced motion; once, never repeated.
// The server markup is the final section: this script only toggles two classes, the CSS in
// _reimagine.scss (ENTRANCE block) does the moving.

const SELECTOR = ".hp-reimagine[data-entrance]";
const INNER = ".hp-reimagine__inner";
const CLASS_ENTER = "hp-reimagine--enter"; // armed: below the fold, will animate
const CLASS_SETTLED = "hp-reimagine--settled"; // arrived: eases to rest, once
const ROOT_MARGIN = "0px 0px -6% 0px"; // P:3541
const REDUCED = "(prefers-reduced-motion: reduce)";
const NARROW = "(max-width: 900px)"; // keep equal to $hp-phone-max in src/scss/_variables.scss (P:2783)

const NONE = "none";
const ARMED = "armed";
const SETTLED = "settled";
const LEFT_ALONE = "left-alone"; // in view at init: never animates

const bound = new WeakSet(); // sections some call already holds, so re-init binds nothing twice

const ignore = () => {};

/**
 * Wires the scroll entrance of every `.hp-reimagine[data-entrance]` under `root` (or `root` itself).
 * Safe to call again for content added later.
 * @param {Document|Element} [root=document]
 * @returns {function(): void} Removes the classes, observer and listeners this call added.
 */
export function initReimagine(root = document) {
  const doc = root.ownerDocument || root;
  const win = doc.defaultView || window;

  const found = Array.from(root.querySelectorAll(SELECTOR));
  if (typeof root.matches === "function" && root.matches(SELECTOR)) {
    found.unshift(root);
  }
  const entries = new Map(); // section -> { inner, phase, added }
  found.forEach(section => {
    const inner = section.querySelector(INNER);
    if (bound.has(section) || !inner) return;
    bound.add(section);
    entries.set(section, { inner, phase: NONE, added: new Set() });
  });
  if (!entries.size) return ignore;

  const hasMatchMedia = typeof win.matchMedia === "function";
  const reduced = hasMatchMedia ? win.matchMedia(REDUCED) : null;
  const narrow = hasMatchMedia ? win.matchMedia(NARROW) : null;
  const canObserve = typeof win.IntersectionObserver === "function";
  const canAnimate = () =>
    Boolean(reduced && narrow && canObserve) &&
    !reduced.matches &&
    !narrow.matches;

  const addClass = (section, state, name) => {
    section.classList.add(name);
    state.added.add(name);
  };
  const removeClass = (section, state, name) => {
    section.classList.remove(name);
    state.added.delete(name);
  };

  let observer = null;
  const anyArmed = () =>
    Array.from(entries.values()).some(state => state.phase === ARMED);
  // The observer lives only while a section waits; a later arming creates a new one.
  const releaseObserver = () => {
    if (observer && !anyArmed()) {
      observer.disconnect();
      observer = null;
    }
  };

  const onIntersect = (records, source) => {
    records.forEach(record => {
      if (!record.isIntersecting) return;
      entries.forEach((state, section) => {
        if (state.inner !== record.target || state.phase !== ARMED) return;
        addClass(section, state, CLASS_SETTLED);
        source.unobserve(state.inner);
        state.phase = SETTLED;
      });
    });
    releaseObserver();
  };

  // Runs at init and whenever either media query changes.
  const sync = () => {
    const animate = canAnimate();
    entries.forEach((state, section) => {
      if (state.phase === SETTLED || state.phase === LEFT_ALONE) return;
      if (!animate) {
        if (state.phase === ARMED) {
          removeClass(section, state, CLASS_ENTER);
          if (observer) observer.unobserve(state.inner);
          state.phase = NONE;
        }
        return;
      }
      if (state.phase !== NONE) return;
      if (state.inner.getBoundingClientRect().top < win.innerHeight) {
        state.phase = LEFT_ALONE; // P:3542: content already on screen is left alone
        return;
      }
      addClass(section, state, CLASS_ENTER);
      if (!observer) {
        observer = new win.IntersectionObserver(onIntersect, {
          rootMargin: ROOT_MARGIN,
        });
      }
      observer.observe(state.inner);
      state.phase = ARMED;
    });
    releaseObserver();
  };

  const cleanups = [];
  [reduced, narrow].forEach(query => {
    if (!query || typeof query.addEventListener !== "function") return;
    query.addEventListener("change", sync);
    cleanups.push(() => query.removeEventListener("change", sync));
  });
  sync();

  let destroyed = false;
  return () => {
    if (destroyed) return;
    destroyed = true;
    if (observer) observer.disconnect();
    observer = null;
    cleanups.forEach(cleanup => cleanup());
    entries.forEach((state, section) => {
      state.added.forEach(name => section.classList.remove(name));
      bound.delete(section);
    });
    entries.clear();
  };
}
