// Homepage faculty fan carousel ("Learn from the best"). Dependency-free.
// Markup (faculty-carousel-helpers.jsx `facultyCarouselHtml`): `section.hp-faculty` with `.hp-faculty__card` per
// person (a still, an optional `video[data-src]` and `.mbtn` control, a hidden pick button), `.hp-faculty__caption` and
// `.hp-faculty__panel` per person, two hidden arrow buttons and a `role="status"` region.
// The front card is `data-pos="0"`, the next person sits right (1), the one after left (2), the rest wait behind (>= 3,
// inert). Rotation never moves nodes; keyboard focus stays on what was pressed, or moves to the new front card's
// button when the focused element became inert. `initVideoControls` (video-control.js) owns playback: only the front
// video is free to play (the others carry `data-hold`), and the order of the two init calls does not matter.

const bound = new WeakSet();

// Only an absolute-or-relative http(s) URL is attached; anything else (javascript:, data:, empty) is not.
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

const all = (root, selector) => Array.from(root.querySelectorAll(selector));

const bind = (section, doc, win) => {
  const cardEls = all(section, ".hp-faculty__card");
  const n = cardEls.length;
  if (!n) return null;

  const panels = all(section, ".hp-faculty__panel");
  const captions = all(section, ".hp-faculty__caption");
  const prev = section.querySelector(".hp-faculty__arrow--prev");
  const next = section.querySelector(".hp-faculty__arrow--next");
  const status = section.querySelector(".hp-faculty__status");
  const cleanups = [];
  const timers = new Set();

  const text = (caption, selector) => {
    const element = caption ? caption.querySelector(selector) : null;
    return element ? element.textContent : "";
  };

  const cards = cardEls.map((el, i) => {
    const video = el.querySelector("video");
    const still = el.querySelector(".hp-faculty__still");
    const control = video
      ? Array.from(el.querySelectorAll(".mbtn[data-for]")).find(
          button => button.getAttribute("data-for") === video.id
        ) || null
      : null;
    return {
      el,
      video,
      still,
      control,
      pick: el.querySelector(".hp-faculty__pick"),
      name: text(captions[i], ".hp-faculty__name"),
      title: text(captions[i], ".hp-faculty__title"),
      alt: still ? still.getAttribute("alt") : "",
      attached: false,
    };
  });

  let index = 0;
  const pos = i => (i - index + n) % n;

  // ---- video sources and controls ----

  const failControl = card => {
    if (!card.control) return;
    const focused = doc.activeElement === card.control;
    card.control.hidden = true;
    if (focused && card.pick && !card.pick.hidden) card.pick.focus();
  };

  cards.forEach(card => {
    const { video, control } = card;
    if (!video) return;
    const source = safeSource(video.dataset.src, doc);
    if (source) {
      video.setAttribute("src", source);
      card.attached = true;
      if (control) control.hidden = false;
    }
    const onError = () => {
      if (!video.hasAttribute("src")) return;
      video.classList.remove("is-ready");
      failControl(card);
    };
    const onPlaying = () => {
      if (pos(cards.indexOf(card)) === 0) video.classList.add("is-ready");
    };
    // The shared control restarts a loop synchronously inside its own `ended` handler, so a video that is still
    // paused one macrotask later is spent, paused by the visitor, held or in a hidden tab: show the still again.
    const onEnded = () => {
      const timer = win.setTimeout(() => {
        timers.delete(timer);
        if (video.paused) video.classList.remove("is-ready");
      }, 0);
      timers.add(timer);
    };
    video.addEventListener("error", onError);
    video.addEventListener("playing", onPlaying);
    video.addEventListener("ended", onEnded);
    cleanups.push(() => {
      video.removeEventListener("error", onError);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("ended", onEnded);
    });
  });

  // ---- state -> DOM ----

  const setInert = (element, on) => {
    if (on) {
      element.setAttribute("inert", "");
      element.setAttribute("aria-hidden", "true");
    } else {
      element.removeAttribute("inert");
      element.removeAttribute("aria-hidden");
    }
  };

  const render = () => {
    cards.forEach((card, i) => {
      const p = pos(i);
      const front = p === 0;
      card.el.setAttribute("data-pos", String(p));
      setInert(card.el, p >= 3);
      if (card.still) card.still.setAttribute("alt", front ? card.alt : "");
      if (card.pick) {
        card.pick.hidden = false;
        card.pick.setAttribute(
          "aria-label",
          `${front ? "Showing" : "Show"} ${card.name}`
        );
        if (front) {
          card.pick.setAttribute("aria-current", "true");
          card.pick.setAttribute("aria-disabled", "true");
        } else {
          card.pick.removeAttribute("aria-current");
          card.pick.removeAttribute("aria-disabled");
        }
      }
      if (card.video) {
        const held = card.video.hasAttribute("data-hold");
        if (front && held) card.video.removeAttribute("data-hold");
        if (!front && !held) card.video.setAttribute("data-hold", "");
        if (!front) card.video.classList.remove("is-ready");
      }
      // The control fades out with the card (CSS), but it leaves the tab order at once.
      if (card.control) {
        if (front) card.control.removeAttribute("tabindex");
        else card.control.setAttribute("tabindex", "-1");
      }
    });
    panels.forEach((panel, i) => {
      panel.classList.toggle("is-active", i === index);
      setInert(panel, i !== index);
    });
    captions.forEach((caption, i) => {
      caption.classList.toggle("is-active", i === index);
      if (i === index) caption.removeAttribute("aria-hidden");
      else caption.setAttribute("aria-hidden", "true");
    });
  };

  // Keyboard focus never ends up in something that just became inert or invisible (a control that left the front, a
  // panel link, a card that went behind the stack): it moves to the new front card's pick button.
  const go = target => {
    const nextIndex = ((target % n) + n) % n;
    if (nextIndex === index) return;
    const active = doc.activeElement;
    const hadFocus = active && active !== doc.body && section.contains(active);
    index = nextIndex;
    render();
    if (hadFocus) {
      const leftFront = cards.some(
        (card, i) => card.control === active && pos(i) !== 0
      );
      const front = cards[index].pick;
      if ((leftFront || active.closest("[inert]")) && front) front.focus();
    }
    if (status) {
      const card = cards[index];
      status.textContent = `${card.name}, ${card.title}. ${index + 1} of ${n}`;
    }
  };

  const listen = (element, type, handler) => {
    if (!element) return;
    element.addEventListener(type, handler);
    cleanups.push(() => element.removeEventListener(type, handler));
  };

  listen(next, "click", () => go(index + 1));
  listen(prev, "click", () => go(index - 1));
  cards.forEach((card, i) => {
    listen(card.pick, "click", () => {
      if (pos(i) === 1 || pos(i) === 2) go(i);
    });
  });

  render();
  const showArrows = n > 1;
  if (prev) prev.hidden = !showArrows;
  if (next) next.hidden = !showArrows;
  section.classList.add("is-enhanced");
  // Transitions start only after the first styled frame, so the fan does not animate into place on enhancement.
  const raf = win.requestAnimationFrame
    ? win.requestAnimationFrame.bind(win)
    : callback => win.setTimeout(callback, 16);
  const caf = win.requestAnimationFrame
    ? win.cancelAnimationFrame.bind(win)
    : win.clearTimeout.bind(win);
  let second = 0;
  const first = raf(() => {
    second = raf(() => section.classList.add("is-animated"));
  });
  cleanups.push(() => {
    caf(first);
    caf(second);
  });

  return () => {
    cleanups.forEach(cleanup => cleanup());
    timers.forEach(timer => win.clearTimeout(timer));
    timers.clear();
    section.classList.remove("is-enhanced", "is-animated");
    cards.forEach((card, i) => {
      card.el.removeAttribute("data-pos");
      setInert(card.el, false);
      if (card.still) card.still.setAttribute("alt", card.alt);
      if (card.pick) {
        card.pick.hidden = true;
        card.pick.removeAttribute("aria-current");
        card.pick.removeAttribute("aria-disabled");
        card.pick.setAttribute("aria-label", `Show ${card.name}`);
      }
      if (card.video) {
        // the authored hold: every card except the first
        if (i === 0) card.video.removeAttribute("data-hold");
        else card.video.setAttribute("data-hold", "");
        card.video.classList.remove("is-ready");
        if (card.attached) {
          card.video.pause();
          card.video.removeAttribute("src");
          card.video.load();
          card.attached = false;
        }
        if (card.control) card.control.hidden = true;
      }
      if (card.control) card.control.removeAttribute("tabindex");
    });
    panels.forEach(panel => {
      panel.classList.remove("is-active");
      setInert(panel, false);
    });
    captions.forEach(caption => {
      caption.classList.remove("is-active");
      caption.removeAttribute("aria-hidden");
    });
    if (prev) prev.hidden = true;
    if (next) next.hidden = true;
    if (status) status.textContent = "";
    bound.delete(section);
  };
};

/**
 * Turns every `.hp-faculty` section under `root` (or `root` itself) into the fan carousel: attaches the video
 * sources, shows the pick buttons, arrows and pause controls, and keeps the panels, captions, `data-pos` and the
 * video holds in step with the front card. Safe to call again for content added later.
 * @param {Document|Element} [root=document]
 * @returns {function(): void} Restores the server markup (including the authored video holds).
 */
export function initFacultyCarousel(root = document) {
  const doc = root.ownerDocument || root;
  const win = doc.defaultView || window;
  const sections = all(root, ".hp-faculty");
  if (root.matches && root.matches(".hp-faculty")) sections.unshift(root);
  const cleanups = [];
  sections.forEach(section => {
    if (bound.has(section)) return;
    const stop = bind(section, doc, win);
    if (!stop) return;
    bound.add(section);
    cleanups.push(stop);
  });
  return () => {
    cleanups.forEach(cleanup => cleanup());
    cleanups.length = 0;
  };
}
