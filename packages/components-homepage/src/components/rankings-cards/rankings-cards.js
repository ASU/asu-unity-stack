// rankings-cards.js — progressive-enhancement nav for .hp-rankings sections.
// Package: @asu/components-homepage  ·  Jira: WWWCMS-233
// Design doc: .pipeline/design-doc.md §5 + v4 amendment
//
// v4 changes (design-doc §v4.7.3, §v4.7.4, §v4.3.1b):
//
//   • beginPending() reverted to dropped-click guard (v4 §v4.7.3):
//     rapid clicks during an in-flight smooth scroll are IGNORED. The old
//     accumulation / pendingTarget logic is removed entirely.
//
//   • edgeTolerance() reverted to half a card step (v4 §v4.7.4):
//     half a card step is the smallest tolerance that stays correct when
//     the user has advanced by exactly one card (scrollLeft ≈ cardStep
//     reads as "not at start, not at end" for any dataset of ≥3 cards).
//
//   • IntersectionObserver + rAF loop for scroll-driven glass-strip opacity
//     (v4 §v4.3.1b):
//     A 21-threshold IO observes every .hp-rankings__card and writes
//     --hp-strip-opacity to each card's inline style. A rAF loop smooths
//     between IO ticks while the user is actively scrolling (window scroll
//     event, disabled under reduced-motion). Teardown clears all.
//
// Existing behavior (unchanged from v3.1):
//
//   • Nav state is derived from `track.scrollLeft` and the maximum scroll
//     offset — never from IntersectionObserver (that IO is the opacity IO,
//     a distinct concern).
//   • A `scroll` + `scrollend` listener on the track synchronizes nav state
//     after every scroll.
//   • A ResizeObserver on the track synchronizes overflow + nav state
//     immediately after a size change.
//   • Teardown snapshots each individual class/attribute BEFORE mutation
//     and restores only values this invocation changed. Server-supplied
//     disabled triplets on prev survive teardown unchanged.
//   • Safe to call repeatedly (idempotent via module-level WeakSet).

const SELECTOR = ".hp-rankings";
const TRACK_SEL = ".hp-rankings__track";
const PREV_SEL = ".hp-rankings__nav-btn--prev";
const NEXT_SEL = ".hp-rankings__nav-btn--next";
const CARD_SEL = ".hp-rankings__card";
const NO_OVERFLOW_CLASS = "hp-rankings--no-overflow";
const DISABLED_CLASS = "is-disabled";
const REDUCED = "(prefers-reduced-motion: reduce)";

// Opacity easing constants (v4 §v4.3.1b locked values).
const BASE_OPACITY = 0.55;
const PEAK_OPACITY = 0.85;
// IO threshold list: 21 values 0, 0.05, 0.10 … 1.00.
const IO_THRESHOLDS = Array.from({ length: 21 }, (_, i) => i * 0.05);
// Scroll idle window (ms) — rAF loop pauses after this many ms with no scroll.
const SCROLL_IDLE_MS = 150;

/** Module-level guard: sections already bound by some live initRankingsCards call. */
const bound = new WeakSet();

/** No-op teardown returned when nothing is bound. */
const ignore = () => {};

/**
 * Returns `"smooth"` or `"auto"` based on the live reduced-motion preference.
 * @param {MediaQueryList|null} mq
 */
const motionBehavior = mq => (mq && mq.matches ? "auto" : "smooth");

// ─── Scroll-opacity pure computation (v4 §v4.3.1b) ───────────────────────────

/**
 * Computes the glass-strip opacity for a card given its viewport geometry.
 *
 * Let d = |card_center_x - viewport_center_x|
 * Let D = (viewport_width + card_width) / 2  (distance where card edge sits at viewport edge)
 * t = clamp(d / D, 0, 1)
 * alpha = baseOpacity + (peakOpacity - baseOpacity) * (1 - t)²
 *
 * @param {DOMRect} rect   - card.getBoundingClientRect()
 * @param {number}  vw     - viewport width (win.innerWidth)
 * @returns {number}       - opacity value [0.55, 0.85]
 */
export const computeAlpha = (rect, vw) => {
  const cardCenterX = rect.left + rect.width / 2;
  const viewportCenterX = vw / 2;
  const d = Math.abs(cardCenterX - viewportCenterX);
  const D = (vw + rect.width) / 2;
  const t = D > 0 ? Math.min(Math.max(d / D, 0), 1) : 0;
  return BASE_OPACITY + (PEAK_OPACITY - BASE_OPACITY) * (1 - t) * (1 - t);
};

// ─── Per-attribute mutation tracking ─────────────────────────────────────────

const ATTR_KEYS = ["aria-disabled", "tabindex"];
const CLASS_KEYS = [DISABLED_CLASS];

/**
 * @param {Element} btn
 */
const snapshotBtn = btn => {
  const snap = { class: btn.classList.contains(DISABLED_CLASS) };
  ATTR_KEYS.forEach(name => {
    snap[name] = btn.getAttribute(name);
  });
  return snap;
};

/**
 * Applies the disabled triplet to a button, recording the prior value in
 * `mutationLog` so teardown can restore it. Only the first mutation records
 * the prior state per key.
 */
const applyDisabled = (btn, disabled, mutationLog) => {
  let log = mutationLog.get(btn);
  if (!log) {
    log = new Map();
    mutationLog.set(btn, log);
  }

  const current = snapshotBtn(btn);
  CLASS_KEYS.forEach(cls => {
    const key = `class:${cls}`;
    const want = disabled;
    const have = cls === DISABLED_CLASS ? current.class : false;
    if (want !== have && !log.has(key)) {
      log.set(key, have);
    }
  });
  ATTR_KEYS.forEach(name => {
    const key = `attr:${name}`;
    const want = disabled ? (name === "aria-disabled" ? "true" : "-1") : null;
    const have = current[name];
    if (want !== have && !log.has(key)) {
      log.set(key, have);
    }
  });

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
 * Restores a button to the state recorded in `log`.
 */
const restoreBtn = (btn, log) => {
  log.forEach((prior, key) => {
    if (key.startsWith("class:")) {
      const cls = key.slice("class:".length);
      if (prior) btn.classList.add(cls);
      else btn.classList.remove(cls);
    } else if (key.startsWith("attr:")) {
      const name = key.slice("attr:".length);
      if (prior == null) btn.removeAttribute(name);
      else btn.setAttribute(name, prior);
    }
  });
};

/**
 * Toggles a class on an element, recording the prior state in `classLog`
 * so teardown can restore. Only the first mutation records the prior state.
 */
const applyClass = (el, className, on, classLog) => {
  let log = classLog.get(el);
  if (!log) {
    log = new Map();
    classLog.set(el, log);
  }
  const had = el.classList.contains(className);
  if (had !== on && !log.has(className)) {
    log.set(className, had);
  }
  if (on) el.classList.add(className);
  else el.classList.remove(className);
};

const restoreClass = (el, log) => {
  log.forEach((prior, className) => {
    if (prior) el.classList.add(className);
    else el.classList.remove(className);
  });
};

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Wires each `.hp-rankings` under `root` for progressive-enhancement nav.
 *
 * **Nav behavior:**
 *   • One nav click = one card step (`cardWidth + columnGap`).
 *   • Rapid clicks during an in-flight smooth scroll are **ignored** (dropped).
 *     A `pendingScroll` flag is set on `scrollBy` and cleared on `scrollend`
 *     (or after `SCROLL_IDLE_MS` for browsers without `scrollend`). While
 *     pending, additional nav clicks are dropped — no accumulation, no queue.
 *   • The `.hp-rankings--no-overflow` class is set on the section when
 *     `track.scrollWidth <= track.clientWidth + 1`. Both nav buttons are
 *     disabled in that state so AT users don't trigger a no-op.
 *   • Prev/Next disabled triplets (`.is-disabled` + `aria-disabled="true"`
 *     + `tabindex="-1"`) are driven by `track.scrollLeft` relative to its
 *     maximum, synchronized on every `scroll`, `scrollend`, and resize event.
 *
 * **Scroll-opacity behavior (v4 §v4.3.1b):**
 *   • One IntersectionObserver per section (21 thresholds) observes every
 *     `.hp-rankings__card` and writes `--hp-strip-opacity` to each card's
 *     inline style on every threshold crossing.
 *   • One rAF loop per section (runs only while actively scrolling and only
 *     when `prefers-reduced-motion: no-preference`) smooths between IO ticks.
 *   • Under `prefers-reduced-motion: reduce`, the rAF loop never starts; the
 *     IO still writes the custom property on threshold crossings (a property
 *     write is not an animation — it is a state value).
 *   • Teardown clears `--hp-strip-opacity` from every card's inline style,
 *     disconnects the IO, cancels the rAF, and removes the window scroll
 *     listener.
 *
 * **Idempotent** — safe to call repeatedly; already-bound sections are
 * skipped via a module-level WeakSet. Returns a teardown that:
 *   • disconnects every observer and listener this call created,
 *   • restores each button class/attribute to the exact prior value this
 *     init changed — server-owned initial state (e.g. the first-render
 *     prev-disabled triplet) is preserved verbatim,
 *   • clears the section from the WeakSet so re-init can re-bind.
 *
 * @param {Document|Element} [root=document]
 * @returns {function(): void} teardown
 */
export function initRankingsCards(root = document) {
  const doc = root.ownerDocument || root;
  const win = doc.defaultView || window;

  const found = Array.from(root.querySelectorAll(SELECTOR));
  if (typeof root.matches === "function" && root.matches(SELECTOR)) {
    found.unshift(root);
  }

  const canObserve =
    typeof win.ResizeObserver === "function" &&
    typeof win.matchMedia === "function";

  const entries = new Map();
  found.forEach(section => {
    if (bound.has(section)) return;
    const track = section.querySelector(TRACK_SEL);
    const prev = section.querySelector(PREV_SEL);
    const next = section.querySelector(NEXT_SEL);
    if (!track || !prev || !next) return;
    const firstCard = track.querySelector(CARD_SEL);
    if (!firstCard) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const cardStep = firstCard.offsetWidth + gap;
    if (cardStep <= 0) return;
    if (!canObserve) return;

    bound.add(section);
    entries.set(section, {
      track,
      prev,
      next,
      firstCard,
      mutationLog: new Map(),
      classLog: new Map(),
      cleanups: [],
    });
  });

  if (!entries.size) return ignore;

  const reducedMQ =
    typeof win.matchMedia === "function" ? win.matchMedia(REDUCED) : null;

  entries.forEach((state, section) => {
    const { track, prev, next, mutationLog, classLog } = state;

    const getCardStep = () => {
      const card = track.querySelector(CARD_SEL);
      if (!card) return 0;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card.offsetWidth + gap;
    };

    // ── Nav-state sync (scroll-position-driven) ───────────────────────────
    //
    // edgeTolerance(): half a card step (v4 §v4.7.4 REVERT).
    // Half a card step is the smallest tolerance that stays correct when the
    // user has advanced by exactly one card (scrollLeft ≈ cardStep reads as
    // "not at start, not at end" for any dataset of ≥3 cards).
    const edgeTolerance = () => {
      const step = getCardStep();
      return step > 0 ? step / 2 : 1; // fall back to 1px if step unknown.
    };

    const syncNavState = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const overflows = maxScroll > 1;
      if (!overflows) {
        applyClass(section, NO_OVERFLOW_CLASS, true, classLog);
        applyDisabled(prev, true, mutationLog);
        applyDisabled(next, true, mutationLog);
        return;
      }
      applyClass(section, NO_OVERFLOW_CLASS, false, classLog);
      const tol = edgeTolerance();
      const atStart = track.scrollLeft < tol;
      const atEnd = track.scrollLeft > maxScroll - tol;
      applyDisabled(prev, atStart, mutationLog);
      applyDisabled(next, atEnd, mutationLog);
    };

    // ── Dropped-click guard (v4 §v4.7.3 REVERT) ─────────────────────────
    //
    // Rapid clicks during an in-flight smooth scroll are DROPPED — no
    // accumulation, no pendingTarget. The first click issues scrollBy and
    // locks pendingScroll. The guard clears on scrollend or idle timeout.
    let pendingScroll = false;
    let pendingIdleTimer = null;

    const beginPending = delta => {
      if (pendingScroll) return; // DROP the click — do not queue.
      pendingScroll = true;
      track.scrollBy({ left: delta, behavior: motionBehavior(reducedMQ) });
      if (pendingIdleTimer) win.clearTimeout(pendingIdleTimer);
      pendingIdleTimer = win.setTimeout(() => {
        pendingIdleTimer = null;
        pendingScroll = false;
        syncNavState();
      }, SCROLL_IDLE_MS);
    };

    const endPending = () => {
      pendingScroll = false;
      if (pendingIdleTimer) {
        win.clearTimeout(pendingIdleTimer);
        pendingIdleTimer = null;
      }
    };

    // ── Click handlers ───────────────────────────────────────────────────
    const onPrevClick = event => {
      syncNavState(); // reconcile before any guard check (§5.2 preflight)
      if (prev.getAttribute("aria-disabled") === "true") {
        event.preventDefault();
        return;
      }
      beginPending(-getCardStep());
    };
    const onNextClick = event => {
      syncNavState(); // reconcile before any guard check (§5.2 preflight)
      if (next.getAttribute("aria-disabled") === "true") {
        event.preventDefault();
        return;
      }
      beginPending(getCardStep());
    };
    prev.addEventListener("click", onPrevClick);
    next.addEventListener("click", onNextClick);
    state.cleanups.push(() => {
      prev.removeEventListener("click", onPrevClick);
      next.removeEventListener("click", onNextClick);
      if (pendingIdleTimer) win.clearTimeout(pendingIdleTimer);
    });

    // ── Scroll listeners (passive — read-only) ───────────────────────────
    const onScroll = () => {
      syncNavState();
    };
    const onScrollEnd = () => {
      endPending();
      syncNavState();
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("scrollend", onScrollEnd);
    state.cleanups.push(() => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("scrollend", onScrollEnd);
    });

    // ── ResizeObserver on track ──────────────────────────────────────────
    const ro = new win.ResizeObserver(() => {
      syncNavState();
    });
    ro.observe(track);
    state.cleanups.push(() => ro.disconnect());

    // ── Reduced-motion live-update ───────────────────────────────────────
    if (reducedMQ && typeof reducedMQ.addEventListener === "function") {
      const onMotionChange = () => {};
      reducedMQ.addEventListener("change", onMotionChange);
      state.cleanups.push(() =>
        reducedMQ.removeEventListener("change", onMotionChange)
      );
    }

    // ── Scroll-opacity: IntersectionObserver + rAF loop (v4 §v4.3.1b) ───
    //
    // R4 (review-fix cycle 1): guard the entire opacity enhancement with an
    // IntersectionObserver feature check. If IO is absent, skip IO+rAF
    // entirely and leave the CSS fallback (0.70) in place. No partial binding.
    //
    // R3 (review-fix cycle 1): snapshot each card's prior --hp-strip-opacity
    // value BEFORE first write and restore it (or remove it) on teardown.
    //
    // R2a (review-fix cycle 1): route the track's horizontal scroll through
    // the same rAF/idle lifecycle as window scroll, so opacity updates during
    // carousel dragging as well as page scroll.

    if (typeof win.IntersectionObserver !== "undefined") {
      // Map from card → prior inline value of --hp-strip-opacity (null = not set).
      const priorOpacity = new Map();

      const writeOpacity = (card, alpha) => {
        // Snapshot prior value on first write only.
        if (!priorOpacity.has(card)) {
          priorOpacity.set(
            card,
            card.style.getPropertyValue("--hp-strip-opacity") || null
          );
        }
        card.style.setProperty("--hp-strip-opacity", alpha.toFixed(2));
      };

      const opacityIO = new win.IntersectionObserver(
        ioEntries => {
          ioEntries.forEach(entry => {
            const card = entry.target;
            const alpha = computeAlpha(
              card.getBoundingClientRect(),
              win.innerWidth
            );
            writeOpacity(card, alpha);
          });
        },
        { threshold: IO_THRESHOLDS }
      );

      track.querySelectorAll(CARD_SEL).forEach(card => opacityIO.observe(card));
      state.cleanups.push(() => {
        opacityIO.disconnect();
        // R3: restore each card's prior inline --hp-strip-opacity value.
        priorOpacity.forEach((prior, card) => {
          if (prior === null || prior === "") {
            card.style.removeProperty("--hp-strip-opacity");
          } else {
            card.style.setProperty("--hp-strip-opacity", prior);
          }
        });
        priorOpacity.clear();
      });

      // rAF loop — smooths between IO ticks while actively scrolling.
      let isScrolling = false;
      let scrollIdleTimer = null;
      let rafHandle = null;

      const tick = () => {
        if (!isScrolling || (reducedMQ && reducedMQ.matches)) {
          rafHandle = null;
          return;
        }
        track.querySelectorAll(CARD_SEL).forEach(card => {
          const rect = card.getBoundingClientRect();
          // Skip cards entirely off-screen (no visible change needed).
          if (rect.right < 0 || rect.left > win.innerWidth) return;
          const alpha = computeAlpha(rect, win.innerWidth);
          writeOpacity(card, alpha);
        });
        rafHandle = win.requestAnimationFrame(tick);
      };

      // Shared scroll handler: triggers the rAF loop regardless of whether
      // the scroll came from window (page scroll) or track (horizontal drag).
      const onScroll = () => {
        if (reducedMQ && reducedMQ.matches) return; // reduced motion: no rAF loop
        isScrolling = true;
        if (!rafHandle) rafHandle = win.requestAnimationFrame(tick);
        if (scrollIdleTimer) win.clearTimeout(scrollIdleTimer);
        scrollIdleTimer = win.setTimeout(() => {
          isScrolling = false;
          scrollIdleTimer = null;
        }, SCROLL_IDLE_MS);
      };

      // R2a: listen to BOTH window scroll (page scroll) and track scroll
      // (horizontal carousel drag), both passive.
      win.addEventListener("scroll", onScroll, { passive: true });
      track.addEventListener("scroll", onScroll, { passive: true });

      state.cleanups.push(() => {
        win.removeEventListener("scroll", onScroll);
        track.removeEventListener("scroll", onScroll);
        if (rafHandle) {
          win.cancelAnimationFrame(rafHandle);
          rafHandle = null;
        }
        if (scrollIdleTimer) {
          win.clearTimeout(scrollIdleTimer);
          scrollIdleTimer = null;
        }
      });
    } // end IntersectionObserver feature guard

    // Initial state after wiring is in place.
    syncNavState();
  });

  // ── Teardown ──────────────────────────────────────────────────────────────
  let destroyed = false;
  return () => {
    if (destroyed) return;
    destroyed = true;

    entries.forEach((state, section) => {
      state.cleanups.forEach(fn => fn());
      state.cleanups.length = 0;

      state.classLog.forEach((log, el) => {
        restoreClass(el, log);
      });
      state.classLog.clear();

      state.mutationLog.forEach((log, btn) => {
        restoreBtn(btn, log);
      });
      state.mutationLog.clear();

      bound.delete(section);
    });
    entries.clear();
  };
}
