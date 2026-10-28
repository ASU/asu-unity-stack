// rankings-cards.js — progressive-enhancement nav for .hp-rankings sections.
// Package: @asu/components-homepage  ·  Jira: WWWCMS-233
// Design doc: .pipeline/design-doc.md §5
//
// Patterns mirror reimagine.js: module-level WeakSet, `added` Set per section,
// idempotent, returns a teardown that removes only what this call added.

const SELECTOR = ".hp-rankings";
const TRACK_SEL = ".hp-rankings__track";
const PREV_SEL = ".hp-rankings__nav-btn--prev";
const NEXT_SEL = ".hp-rankings__nav-btn--next";
const CARD_SEL = ".hp-rankings__card";
const NO_OVERFLOW_CLASS = "hp-rankings--no-overflow";
const DISABLED_CLASS = "is-disabled";
const REDUCED = "(prefers-reduced-motion: reduce)";

/** Module-level guard: sections already bound by some live initRankingsCards call. */
const bound = new WeakSet();

/** No-op teardown returned when nothing is bound. */
const ignore = () => {};

/**
 * Returns `"smooth"` or `"auto"` based on the live reduced-motion preference.
 * @param {MediaQueryList} mq
 */
const motionBehavior = mq => (mq && mq.matches ? "auto" : "smooth");

/**
 * Sets or clears the disabled triplet on a nav button.
 * @param {HTMLElement} btn
 * @param {boolean} disabled
 */
const setDisabled = (btn, disabled) => {
  if (disabled) {
    btn.classList.add(DISABLED_CLASS);
    btn.setAttribute("aria-disabled", "true");
    btn.setAttribute("tabindex", "-1");
  } else {
    btn.classList.remove(DISABLED_CLASS);
    btn.removeAttribute("aria-disabled");
    btn.removeAttribute("tabindex");
  }
};

/**
 * Wires each `.hp-rankings` under `root` for progressive-enhancement nav.
 * Safe to call repeatedly (idempotent via a module-level WeakSet of sections).
 * @param {Document|Element} [root=document]
 * @returns {function(): void} teardown — removes listeners, observers, and
 *   JS-added classes/attributes from every section this call bound.
 */
export function initRankingsCards(root = document) {
  const doc = root.ownerDocument || root;
  const win = doc.defaultView || window;

  // Collect all .hp-rankings sections under root (including root itself if it matches).
  const found = Array.from(root.querySelectorAll(SELECTOR));
  if (typeof root.matches === "function" && root.matches(SELECTOR)) {
    found.unshift(root);
  }

  // Filter to unbound sections; build per-section state map.
  // state: { track, prev, next, cards, added: Set<class|attr-key>, cleanups: [] }
  const entries = new Map();
  found.forEach(section => {
    if (bound.has(section)) return; // already bound — skip
    const track = section.querySelector(TRACK_SEL);
    const prev = section.querySelector(PREV_SEL);
    const next = section.querySelector(NEXT_SEL);
    if (!track || !prev || !next) return; // §5.4 no-op branch: missing DOM
    bound.add(section);
    entries.set(section, {
      track,
      prev,
      next,
      added: new Set(), // tracks JS-added class names and attribute keys per button
      cleanups: [], // listener removal callbacks
    });
  });

  if (!entries.size) return ignore;

  const canObserve =
    typeof win.IntersectionObserver === "function" &&
    typeof win.ResizeObserver === "function";
  const reducedMQ =
    typeof win.matchMedia === "function" ? win.matchMedia(REDUCED) : null;

  entries.forEach((state, section) => {
    const { track, prev, next } = state;

    // ── Compute card step ─────────────────────────────────────────────────
    const firstCard = track.querySelector(CARD_SEL);
    if (!firstCard) return; // §5.4 no-op: no cards

    const getCardStep = () => {
      const card = track.querySelector(CARD_SEL);
      if (!card) return 0;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card.offsetWidth + gap;
    };

    const cardStep = getCardStep();
    if (cardStep <= 0) return; // §5.4 no-op: degenerate layout

    // ── Click listeners ───────────────────────────────────────────────────
    const onPrevClick = event => {
      if (prev.getAttribute("aria-disabled") === "true") {
        event.preventDefault();
        return; // defence-in-depth (§5.7)
      }
      track.scrollBy({
        left: -getCardStep(),
        behavior: motionBehavior(reducedMQ),
      });
    };
    const onNextClick = event => {
      if (next.getAttribute("aria-disabled") === "true") {
        event.preventDefault();
        return;
      }
      track.scrollBy({
        left: getCardStep(),
        behavior: motionBehavior(reducedMQ),
      });
    };
    prev.addEventListener("click", onPrevClick);
    next.addEventListener("click", onNextClick);
    state.cleanups.push(() => {
      prev.removeEventListener("click", onPrevClick);
      next.removeEventListener("click", onNextClick);
    });

    if (!canObserve) return; // §5.4 no-op: observers unavailable

    // ── Overflow detection (ResizeObserver) ───────────────────────────────
    // Toggles .hp-rankings--no-overflow on the section when track doesn't scroll.
    const updateOverflow = () => {
      const overflows = track.scrollWidth > track.clientWidth + 1; // +1 absorbs sub-pixel
      const noOverflowNow = section.classList.contains(NO_OVERFLOW_CLASS);
      if (!overflows && !noOverflowNow) {
        section.classList.add(NO_OVERFLOW_CLASS);
        state.added.add(`section:class:${NO_OVERFLOW_CLASS}`);
        // Defensively disable both buttons when overflow is hidden (AT may still find them)
        setDisabled(prev, true);
        setDisabled(next, true);
        state.added.add("prev:disabled");
        state.added.add("next:disabled");
      } else if (overflows && noOverflowNow) {
        section.classList.remove(NO_OVERFLOW_CLASS);
        state.added.delete(`section:class:${NO_OVERFLOW_CLASS}`);
        // Re-evaluate button states via the IO on next scroll event
      }
    };

    const ro = new win.ResizeObserver(updateOverflow);
    ro.observe(track);
    state.cleanups.push(() => ro.disconnect());

    // Initial overflow check
    updateOverflow();

    // ── IntersectionObserver for button disabled state ─────────────────────
    // Observes each card at threshold 0.95. When a card crosses the threshold:
    //   - If it is the first card, prev is disabled; otherwise prev is enabled.
    //   - If it is the last card, next is disabled; otherwise next is enabled.
    const cards = Array.from(track.querySelectorAll(CARD_SEL));
    if (!cards.length) return;
    const firstCard_ = cards[0];
    const lastCard = cards[cards.length - 1];

    // Track which buttons have their disabled state from this init (to teardown cleanly).
    // Start: prev is always disabled at first render (design-doc §3.4 #5).
    state.added.add("prev:disabled");

    const io = new win.IntersectionObserver(
      ioEntries => {
        ioEntries.forEach(entry => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.95) return;
          if (entry.target === firstCard_) {
            // Leading card fully in view → prev should be disabled
            setDisabled(prev, true);
            state.added.add("prev:disabled");
          } else {
            // Leading card is NOT the one entering view → prev can be enabled
            setDisabled(prev, false);
            state.added.delete("prev:disabled");
          }
          if (entry.target === lastCard) {
            // Trailing card fully in view → next should be disabled
            setDisabled(next, true);
            state.added.add("next:disabled");
          } else {
            // Trailing card is NOT the one entering view → next can be enabled
            setDisabled(next, false);
            state.added.delete("next:disabled");
          }
        });
      },
      { root: track, threshold: 0.95 }
    );

    cards.forEach(card => io.observe(card));
    state.cleanups.push(() => io.disconnect());

    // ── Reduced-motion live-update ─────────────────────────────────────────
    if (reducedMQ && typeof reducedMQ.addEventListener === "function") {
      // motionBehavior() reads the live MQ at click time, so no explicit action
      // needed here — the change listener is a no-op we still register so the
      // teardown can symmetrically remove it (mirrors reimagine pattern).
      const onMotionChange = () => {
        // next scrollBy will pick up the new preference automatically
      };
      reducedMQ.addEventListener("change", onMotionChange);
      state.cleanups.push(() =>
        reducedMQ.removeEventListener("change", onMotionChange)
      );
    }
  });

  // ── Teardown ──────────────────────────────────────────────────────────────
  let destroyed = false;
  return () => {
    if (destroyed) return;
    destroyed = true;

    entries.forEach((state, section) => {
      // Run all listener/observer cleanup callbacks
      state.cleanups.forEach(fn => fn());
      state.cleanups.length = 0;

      // Remove JS-added classes from the section
      if (state.added.has(`section:class:${NO_OVERFLOW_CLASS}`)) {
        section.classList.remove(NO_OVERFLOW_CLASS);
      }

      // Remove JS-added disabled state from buttons — only if this init set them
      if (state.added.has("prev:disabled")) {
        setDisabled(state.prev, false);
      }
      if (state.added.has("next:disabled")) {
        setDisabled(state.next, false);
      }

      state.added.clear();
      bound.delete(section);
    });
    entries.clear();
  };
}
