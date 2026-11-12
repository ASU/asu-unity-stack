// Behaviour for the homepage "Make it yours" section (APG Accordion, one panel always open). Dependency-free.
// Markup: `.hp-myours` (see make-it-yours-markup.js). Design doc: WWWCMS-237.
// Without this script the CSS shows every panel open and only the first photo (the no-JS baseline).

const DESKTOP = "(min-width: 769px)"; // keep equal to $hp-myours-bp in _make-it-yours.scss
const TABS_MIN = "--hp-myours-tabs-min";
const CAPTION_MIN = "--hp-myours-caption-min";

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

const bind = (section, doc, win) => {
  const desk = query(win, DESKTOP, false);
  const cleanups = [];
  const listen = (target, type, handler, options) => {
    target.addEventListener(type, handler, options);
    cleanups.push(() => target.removeEventListener(type, handler, options));
  };
  const all = selector => Array.from(section.querySelectorAll(selector));

  const items = all(".hp-myours__item");
  const triggers = items.map(item => item.querySelector(".hp-myours__trigger"));
  const panels = items.map(item => item.querySelector(".hp-myours__panel"));
  const inners = items.map(item =>
    item.querySelector(".hp-myours__panel-inner")
  );
  const figures = all(".hp-myours__photo");
  const images = figures.map(figure => figure.querySelector(".hp-myours__img"));
  const tabs = section.querySelector(".hp-myours__tabs");
  const captions = figures.map(figure =>
    figure.querySelector(".hp-myours__caption")
  );
  const promoted = new Set();
  let open = 0;
  let pending = -1;
  let disposed = false;

  // One state, one place: every attribute and class the contract lists (design doc section 9).
  const render = () => {
    items.forEach((item, i) => {
      const on = i === open;
      item.classList.toggle("is-open", on);
      triggers[i].setAttribute("aria-expanded", on ? "true" : "false");
      if (on) triggers[i].setAttribute("aria-disabled", "true");
      else triggers[i].removeAttribute("aria-disabled");
      panels[i].toggleAttribute("inert", !on);
      if (figures[i]) figures[i].classList.toggle("is-active", on);
    });
  };

  // <picture> has one alt: the markup carries the mobile alt; the desktop alt is swapped in from >= 769.
  const syncAlt = () => {
    images.forEach(img => {
      if (!img) return;
      if (!img.hasAttribute("data-alt-mobile")) {
        img.setAttribute("data-alt-mobile", img.getAttribute("alt") || "");
      }
      const desktopAlt = img.getAttribute("data-alt-desktop");
      img.setAttribute(
        "alt",
        desk.matches && desktopAlt
          ? desktopAlt
          : img.getAttribute("data-alt-mobile")
      );
    });
  };

  // Natural height of every caption, including the ones of photos that are not displayed.
  const tallestCaption = () => {
    section.style.removeProperty(CAPTION_MIN);
    let tallest = 0;
    figures.forEach((figure, i) => {
      if (!captions[i]) return;
      const hidden = !figure.classList.contains("is-active");
      if (hidden) figure.style.display = "block";
      tallest = Math.max(tallest, captions[i].offsetHeight);
      if (hidden) figure.style.removeProperty("display");
    });
    return tallest;
  };
  // Stacked only: the list reserves the tallest open state and the caption its tallest wrap, so the section
  // never changes height between tabs.
  const measure = () => {
    if (desk.matches) {
      if (tabs) tabs.style.removeProperty(TABS_MIN);
      section.style.removeProperty(CAPTION_MIN);
      return;
    }
    const caption = `${Math.ceil(tallestCaption())}px`;
    section.style.setProperty(CAPTION_MIN, caption);
    if (!tabs) return;
    const headings = triggers.reduce(
      (sum, trigger) => sum + trigger.parentElement.offsetHeight,
      0
    );
    const tallest = Math.max(0, ...inners.map(inner => inner.scrollHeight));
    const value = `${Math.ceil(headings + tallest)}px`;
    if (tabs.style.getPropertyValue(TABS_MIN) !== value) {
      tabs.style.setProperty(TABS_MIN, value);
    }
  };
  // A hint only: the photo of the tab the visitor is about to open starts loading.
  const promote = i => {
    const img = images[i];
    if (img && img.getAttribute("loading") !== "eager") {
      img.setAttribute("loading", "eager");
      promoted.add(img);
    }
  };

  const flush = () => {
    if (pending < 0 || disposed) return;
    const next = pending;
    pending = -1;
    if (next !== open) {
      open = next;
      render();
    }
  };

  // Capture phase: the open header is a no-op that no data-layer listener may see. A closed header records the
  // request; the state is committed after the document-level readers have run (window bubble, or a 0ms timer).
  listen(
    section,
    "click",
    event => {
      const trigger = event.target.closest
        ? event.target.closest(".hp-myours__trigger")
        : null;
      const i = trigger ? triggers.indexOf(trigger) : -1;
      if (i < 0) return;
      if (i === open) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      pending = i;
      win.setTimeout(flush, 0);
    },
    true
  );
  listen(win, "click", flush);

  // APG Accordion: arrows, Home and End move focus between the headers and never open a panel.
  listen(section, "keydown", event => {
    const i = triggers.indexOf(event.target);
    if (i < 0 || event.ctrlKey || event.altKey || event.metaKey) return;
    const last = triggers.length - 1;
    let next;
    switch (event.key) {
      case "ArrowDown":
        next = i === last ? 0 : i + 1;
        break;
      case "ArrowUp":
        next = i === 0 ? last : i - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = last;
        break;
      default:
        return;
    }
    event.preventDefault();
    triggers[next].focus();
  });

  triggers.forEach((trigger, i) => {
    listen(trigger, "pointerenter", () => promote(i));
    listen(trigger, "focus", () => promote(i));
  });

  // Boot: state first, transitions off until two frames later so panels 2-5 do not animate closed.
  section.classList.add("is-enhanced", "is-booting");
  render();
  syncAlt();
  measure();
  win.requestAnimationFrame(() =>
    win.requestAnimationFrame(() => {
      if (!disposed) section.classList.remove("is-booting");
    })
  );

  cleanups.push(
    subscribe(desk, () => {
      syncAlt();
      measure();
    })
  );
  if (typeof win.ResizeObserver === "function") {
    // measure() changes the observed section's height, so it runs in the next frame, not inside the callback
    // (otherwise Chromium reports "ResizeObserver loop completed with undelivered notifications"). One pending frame.
    // syncAlt() runs there too: a width change may cross 769px before the media query `change` event arrives.
    let lastWidth = -1;
    let frame = 0;
    const observer = new win.ResizeObserver(entries => {
      const width = Math.round(entries[0].contentRect.width);
      if (width === lastWidth || frame) return;
      lastWidth = width;
      frame = win.requestAnimationFrame(() => {
        frame = 0;
        if (disposed) return;
        syncAlt();
        measure();
      });
    });
    observer.observe(section);
    cleanups.push(() => {
      observer.disconnect();
      if (frame) win.cancelAnimationFrame(frame);
      frame = 0;
    });
  } else {
    listen(win, "resize", measure);
  }
  if (doc.fonts && doc.fonts.ready) {
    doc.fonts.ready.then(() => {
      if (!disposed) measure();
    });
  }

  return () => {
    disposed = true;
    cleanups.forEach(cleanup => cleanup());
    cleanups.length = 0;
    // Back to the server markup: every panel open (CSS), first photo, mobile alt, lazy images.
    section.classList.remove("is-enhanced", "is-booting");
    items.forEach((item, i) => {
      item.classList.remove("is-open");
      triggers[i].removeAttribute("aria-expanded");
      triggers[i].removeAttribute("aria-disabled");
      panels[i].removeAttribute("inert");
      if (figures[i]) figures[i].classList.toggle("is-active", i === 0);
    });
    images.forEach(img => {
      if (!img || !img.hasAttribute("data-alt-mobile")) return;
      img.setAttribute("alt", img.getAttribute("data-alt-mobile"));
      img.removeAttribute("data-alt-mobile");
    });
    promoted.forEach(img => img.setAttribute("loading", "lazy"));
    promoted.clear();
    if (tabs) tabs.style.removeProperty(TABS_MIN);
    section.style.removeProperty(CAPTION_MIN);
    bound.delete(section);
  };
};

/**
 * Wires every `.hp-myours` section under `root`. Safe to call again for content added later.
 * @param {Document|Element} [root=document]
 * @returns {function(): void} Removes the listeners and the state this call added.
 */
export function initMakeItYours(root = document) {
  const doc = root.ownerDocument || root;
  const win = doc.defaultView || window;
  const cleanups = [];
  root.querySelectorAll(".hp-myours").forEach(section => {
    if (bound.has(section) || !section.querySelector(".hp-myours__item"))
      return;
    bound.add(section);
    cleanups.push(bind(section, doc, win));
  });
  return () => {
    cleanups.forEach(cleanup => cleanup());
    cleanups.length = 0;
  };
}
