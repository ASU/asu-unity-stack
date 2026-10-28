// rankings-cards.js — progressive-enhancement nav for .hp-rankings sections.
// Package: @asu/components-homepage  ·  Jira: WWWCMS-233
// Design doc: .pipeline/design-doc.md §5
//
// Deterministic edge-state model (fixes review-report P1-2 and P1-3):
//
//   • Nav state is derived from `track.scrollLeft` and the maximum scroll
//     offset — never from a per-entry IntersectionObserver toggle. This
//     avoids the race where the IO batch at init contains both the first
//     and later cards, and a per-entry call enables Prev at scrollLeft=0.
//   • A `scroll` + `scrollend` listener on the track synchronizes nav state
//     after every scroll (user swipe, button click, native snap settle).
//   • A ResizeObserver on the track synchronizes overflow + nav state
//     immediately after a size change — no waiting for a future IO
//     threshold crossing, so a resize-from-no-overflow-to-overflow correctly
//     reflects the new state.
//   • Teardown snapshots each individual class/attribute **before** mutation
//     and restores only values this invocation changed. Server-supplied
//     disabled triplets on prev survive teardown unchanged.
//   • A `pendingScroll` guard coalesces rapid nav clicks. While a scroll
//     animation is in flight (set on click, cleared on `scrollend` or a
//     timeout fallback for browsers without `scrollend`), additional nav
//     clicks are ignored. Documented in the JSDoc.

const SELECTOR = ".hp-rankings";
const TRACK_SEL = ".hp-rankings__track";
const PREV_SEL = ".hp-rankings__nav-btn--prev";
const NEXT_SEL = ".hp-rankings__nav-btn--next";
const CARD_SEL = ".hp-rankings__card";
const NO_OVERFLOW_CLASS = "hp-rankings--no-overflow";
const DISABLED_CLASS = "is-disabled";
const REDUCED = "(prefers-reduced-motion: reduce)";
const SCROLLEND_FALLBACK_MS = 300; // fallback timeout for browsers w/o scrollend

/** Module-level guard: sections already bound by some live initRankingsCards call. */
const bound = new WeakSet();

/** No-op teardown returned when nothing is bound. */
const ignore = () => {};

/**
 * Returns `"smooth"` or `"auto"` based on the live reduced-motion preference.
 * @param {MediaQueryList|null} mq
 */
const motionBehavior = mq => (mq && mq.matches ? "auto" : "smooth");

// ─── Per-attribute mutation tracking ─────────────────────────────────────────
// Each init records every class/attribute it changes on a button, keyed by
// the mutation (`class:is-disabled`, `attr:aria-disabled`, `attr:tabindex`).
// The recorded value is the **prior** value (the thing to restore on teardown).
// Only values this init actually changed get restored — server-owned initial
// state is preserved verbatim.

const ATTR_KEYS = ["aria-disabled", "tabindex"];
const CLASS_KEYS = [DISABLED_CLASS];

/**
 * Returns the current triplet state of a nav button:
 *   { class: boolean, "aria-disabled": string|null, tabindex: string|null }
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
 * Applies the disabled triplet to a button, recording the prior value of each
 * individual mutation into `mutationLog` so teardown can restore it.
 *
 * `mutationLog` is a Map keyed by `btn → Map<key, priorValue>`. A key is only
 * written the **first** time this init touches that attribute/class on that
 * button, so the earliest prior value is preserved.
 *
 * @param {Element} btn
 * @param {boolean} disabled
 * @param {Map<Element, Map<string, unknown>>} mutationLog
 */
const applyDisabled = (btn, disabled, mutationLog) => {
  let log = mutationLog.get(btn);
  if (!log) {
    log = new Map();
    mutationLog.set(btn, log);
  }

  const current = snapshotBtn(btn);
  // Record prior values for each key we're about to touch — but only once.
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

  // Apply the state.
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
 * Restores a button to the state recorded in `log`. Only values this init
 * changed (as witnessed by presence in `log`) are restored. Server-owned
 * triplets are preserved.
 *
 * @param {Element} btn
 * @param {Map<string, unknown>} log
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
 * (a Map keyed by element → Map<className, boolean>) so teardown can
 * restore. Only the first mutation records the prior state.
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
 * Behavior:
 *   • One nav click = one card step (`cardWidth + columnGap`).
 *   • Rapid clicks during an active smooth scroll are **ignored** (coalesced)
 *     until the scroll settles (via `scrollend` or a 300ms timeout fallback).
 *   • The `.hp-rankings--no-overflow` class is set on the section when
 *     `track.scrollWidth <= track.clientWidth + 1`. Both nav buttons are
 *     disabled in that state so AT users don't trigger a no-op.
 *   • Prev/Next disabled triplets (`.is-disabled` + `aria-disabled="true"`
 *     + `tabindex="-1"`) are driven by `track.scrollLeft` relative to its
 *     maximum, synchronized on every `scroll`, `scrollend`, and resize event.
 *
 * Safe to call repeatedly (idempotent via a module-level WeakSet of sections).
 * Returns a teardown that:
 *   • disconnects every observer and listener this call created, and
 *   • restores each button class/attribute to the exact prior value this
 *     init changed — server-owned initial state (e.g. the first-render
 *     prev-disabled triplet) is preserved verbatim.
 *
 * @param {Document|Element} [root=document]
 * @returns {function(): void} teardown
 */
export function initRankingsCards(root = document) {
  const doc = root.ownerDocument || root;
  const win = doc.defaultView || window;

  // Collect all .hp-rankings sections under root (including root itself if it matches).
  const found = Array.from(root.querySelectorAll(SELECTOR));
  if (typeof root.matches === "function" && root.matches(SELECTOR)) {
    found.unshift(root);
  }

  // Preflight: filter to sections with the full DOM shape. Only bind sections
  // that pass every preflight check — no partial bindings (§5.4 no-op branch).
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
    // Observer-unavailable browsers: §5.4 — leave section alone. Server markup
    // keeps prev disabled and native snap handles scrolling.
    if (!canObserve) return;

    bound.add(section);
    entries.set(section, {
      track,
      prev,
      next,
      firstCard,
      mutationLog: new Map(), // Map<btn, Map<key, priorValue>>
      classLog: new Map(), // Map<section-or-el, Map<className, priorValue>>
      cleanups: [], // listener removal callbacks
    });
  });

  if (!entries.size) return ignore;

  const reducedMQ =
    typeof win.matchMedia === "function" ? win.matchMedia(REDUCED) : null;

  entries.forEach((state, section) => {
    const { track, prev, next, mutationLog, classLog } = state;

    // Live card-step calculation — re-reads layout each click.
    const getCardStep = () => {
      const card = track.querySelector(CARD_SEL);
      if (!card) return 0;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card.offsetWidth + gap;
    };

    // ── Nav-state sync (scroll-position-driven) ───────────────────────────
    //
    // Uses a dynamic tolerance of half a card-step for atStart/atEnd. The
    // first-render markup can carry a small scrollLeft wobble (observed up to
    // ~32px) caused by scroll-snap-type combined with the initial layout
    // pass; using an absolute 1px threshold would incorrectly report the
    // leading edge as "not at start" at mount time. Half a card step is the
    // smallest tolerance that stays correct when the user has advanced by one
    // card (scrollLeft ≈ cardStep).
    const edgeTolerance = () => {
      const card = track.querySelector(CARD_SEL);
      if (!card) return 1;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return Math.max(1, (card.offsetWidth + gap) / 2);
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

    // ── Rapid-click coalescing ───────────────────────────────────────────
    let pendingScroll = false;
    let pendingTimer = null;
    const beginPending = () => {
      pendingScroll = true;
      if (pendingTimer) win.clearTimeout(pendingTimer);
      // Fallback for browsers without 'scrollend' — clear after a timeout.
      pendingTimer = win.setTimeout(() => {
        pendingScroll = false;
        pendingTimer = null;
        syncNavState();
      }, SCROLLEND_FALLBACK_MS);
    };
    const endPending = () => {
      pendingScroll = false;
      if (pendingTimer) {
        win.clearTimeout(pendingTimer);
        pendingTimer = null;
      }
    };

    // ── Click handlers ───────────────────────────────────────────────────
    const onPrevClick = event => {
      if (prev.getAttribute("aria-disabled") === "true") {
        event.preventDefault();
        return; // defence-in-depth
      }
      if (pendingScroll) {
        // Coalesce rapid clicks during an active scroll (design choice,
        // documented in JSDoc). Drops subsequent clicks until scroll settles.
        return;
      }
      beginPending();
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
      if (pendingScroll) return;
      beginPending();
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
      if (pendingTimer) win.clearTimeout(pendingTimer);
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
    // `scrollend` is widely supported in evergreen browsers; falls back to
    // the setTimeout above where unsupported.
    track.addEventListener("scrollend", onScrollEnd);
    state.cleanups.push(() => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("scrollend", onScrollEnd);
    });

    // ── ResizeObserver on track ──────────────────────────────────────────
    const ro = new win.ResizeObserver(() => {
      // Overflow may have changed; recompute edge state immediately — do not
      // wait for a future scroll/IO event (fixes the review's resize-from-
      // no-overflow bug).
      syncNavState();
    });
    ro.observe(track);
    state.cleanups.push(() => ro.disconnect());

    // ── Reduced-motion live-update ───────────────────────────────────────
    if (reducedMQ && typeof reducedMQ.addEventListener === "function") {
      // motionBehavior() reads the live MQ at click time; nothing else to
      // do on change. We still register the listener for symmetric teardown
      // (mirrors reimagine pattern).
      const onMotionChange = () => {};
      reducedMQ.addEventListener("change", onMotionChange);
      state.cleanups.push(() =>
        reducedMQ.removeEventListener("change", onMotionChange)
      );
    }

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

      // Restore any class mutations on tracked elements (section + any others).
      state.classLog.forEach((log, el) => {
        restoreClass(el, log);
      });
      state.classLog.clear();

      // Restore button mutations: only the specific class/attr values this
      // init changed. Server-owned initial state is left alone.
      state.mutationLog.forEach((log, btn) => {
        restoreBtn(btn, log);
      });
      state.mutationLog.clear();

      bound.delete(section);
    });
    entries.clear();
  };
}
