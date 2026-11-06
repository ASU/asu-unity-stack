// Attaches the hero video's source only above 900px. Dependency-free.
// Markup: `<video data-src="..." poster="..." preload="none">` (no `src`) inside `.hp-hero`, and a
// `.mbtn[data-for="<video id>"]` control that stays `hidden` until a source is attached.
// Rules: phones and tablets (900px and under) never load a video (the poster shows); under reduced
// motion the source is attached with `preload="none"`; the control is re-hidden on detach and on error,
// and keyboard focus moves to the visible link when the control it was on goes away.
// `initVideoControls` (video-control.js) owns playback; the order of the two init calls does not matter.

const PHONE = "(max-width: 900px)"; // keep equal to $hp-phone-max in src/scss/_variables.scss
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

const bound = new WeakSet();
const noop = () => {};

// Without matchMedia (embedded webviews) the page counts as a phone: no video, the poster shows.
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

const bind = (video, doc, win) => {
  const hero = video.closest(".hp-hero");
  const controls = Array.from(
    (hero || doc).querySelectorAll(".mbtn[data-for]")
  ).filter(button => button.getAttribute("data-for") === video.id);
  const links = Array.from(
    (hero || doc).querySelectorAll(".hp-hero__arrow, .hp-hero__cta")
  );
  const phone = query(win, PHONE, true);
  const reduced = query(win, REDUCED_MOTION, false);
  let failed = false; // the source did not load: the control stays hidden until the next attach

  // A control that disappears while it has focus hands focus to the link that is showing.
  const hideControls = () =>
    controls.forEach(button => {
      const focused = doc.activeElement === button;
      button.hidden = true;
      if (!focused) return;
      const target = links.find(link => link.getClientRects().length > 0);
      if (target) target.focus();
    });

  const showControls = show => {
    if (!show) {
      hideControls();
      return;
    }
    controls.forEach(button => {
      button.hidden = false;
    });
  };

  const detach = () => {
    failed = false;
    showControls(false);
    if (!video.hasAttribute("src")) return;
    video.pause();
    video.removeAttribute("src");
    video.load();
  };

  const sync = () => {
    const source = phone.matches ? null : safeSource(video.dataset.src, doc);
    if (!source) {
      detach();
      return;
    }
    // preload before src: `loadeddata` (which resumes autoplay) never fires under preload="none"
    video.setAttribute("preload", reduced.matches ? "none" : "auto");
    if (video.getAttribute("src") !== source) {
      failed = false;
      video.setAttribute("src", source);
    }
    showControls(!failed);
  };

  const onError = () => {
    if (!video.hasAttribute("src")) return;
    failed = true;
    showControls(false);
  };

  const unsubscribe = [subscribe(phone, sync), subscribe(reduced, sync)];
  video.addEventListener("error", onError);
  // A new `data-src` (the page swapped the clip) is attached, or detached when it is empty or unsafe.
  const observer =
    typeof win.MutationObserver === "function"
      ? new win.MutationObserver(sync)
      : null;
  if (observer) observer.observe(video, { attributeFilter: ["data-src"] });
  sync();

  return () => {
    unsubscribe.forEach(cleanup => cleanup());
    video.removeEventListener("error", onError);
    if (observer) observer.disconnect();
    bound.delete(video);
  };
};

/**
 * Attaches (above 900px) or detaches the source of every `.hp-hero video[data-src]` under `root`, and
 * shows or hides its control. Safe to call again for content added later.
 * @param {Document|Element} [root=document]
 * @returns {function(): void} Removes the listeners this call added.
 */
export function initHero(root = document) {
  const doc = root.ownerDocument || root;
  const win = doc.defaultView || window;
  const cleanups = [];
  root.querySelectorAll("video[data-src]").forEach(video => {
    if (!video.closest(".hp-hero") || bound.has(video)) return;
    bound.add(video);
    cleanups.push(bind(video, doc, win));
  });
  return () => {
    cleanups.forEach(cleanup => cleanup());
    cleanups.length = 0;
  };
}
