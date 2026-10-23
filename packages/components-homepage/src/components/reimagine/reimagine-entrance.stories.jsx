import React, { useEffect, useRef } from "react";
import { expect, waitFor } from "storybook/test";

import * as entry from "../../js/index.js";
import { initReimagine } from "./reimagine.js";
import { reimagineHtml, walkRules } from "./reimagine-helpers.jsx";

// Own title: `Homepage/Reimagine` is already a component, so nesting under it would make it both a leaf
// and a group. Deleting this file removes every entrance story and test helper.
export default {
  title: "Homepage/Reimagine entrance",
  parameters: {
    docs: {
      description: {
        component:
          'Opt-in scroll entrance ("settle") of the reimagine section. Add `data-entrance` to `section.hp-reimagine` and call `initReimagine(root)` once the markup is in the page. When the section is below the fold at init, the `.hp-reimagine__inner` block is armed (`hp-reimagine--enter`: `translateY(24px)`) and eases to rest once (`hp-reimagine--settled`, `.6s cubic-bezier(.22, 1, .36, 1)`) when it crosses 6% above the viewport bottom. `transform` only: no opacity, no layout change. Only at >= 901px and without `prefers-reduced-motion: reduce`. Server markup is the final, fully visible section; without the script, below 901px, under reduced motion or without `IntersectionObserver` nothing moves. The stories replace `IntersectionObserver` with a recording subclass and `matchMedia` with a stub where a story needs to flip a media query.',
      },
    },
  },
};

const THRESHOLD_MARGIN = "0px 0px -6% 0px";

// ---- Test doubles (page globals only; restored per story) ----

// Real IntersectionObserver that also records its options and calls.
const installObserverSpy = () => {
  const Real = window.IntersectionObserver;
  const instances = [];
  class SpyObserver extends Real {
    constructor(callback, options) {
      super(callback, options);
      this.spyOptions = options;
      this.spyCalls = { observe: [], unobserve: [], disconnect: 0 };
      instances.push(this);
    }

    observe(target) {
      this.spyCalls.observe.push(target);
      super.observe(target);
    }

    unobserve(target) {
      this.spyCalls.unobserve.push(target);
      super.unobserve(target);
    }

    disconnect() {
      this.spyCalls.disconnect += 1;
      super.disconnect();
    }
  }
  window.IntersectionObserver = SpyObserver;
  return {
    instances,
    restore() {
      window.IntersectionObserver = Real;
    },
  };
};

// Fake MediaQueryList for the two queries the controller reads; others fall through to the browser.
class FakeQuery extends EventTarget {
  constructor(media, matches) {
    super();
    this.media = media;
    this.matches = matches;
    this.registered = new Set();
  }

  addEventListener(type, listener, options) {
    this.registered.add(listener);
    super.addEventListener(type, listener, options);
  }

  removeEventListener(type, listener, options) {
    this.registered.delete(listener);
    super.removeEventListener(type, listener, options);
  }
}

const installMatchMedia = ({ reduced = false, narrow = false } = {}) => {
  const Real = window.matchMedia;
  const queries = {
    reduced: new FakeQuery("(prefers-reduced-motion: reduce)", reduced),
    narrow: new FakeQuery("(max-width: 900px)", narrow),
  };
  window.matchMedia = text => {
    if (/prefers-reduced-motion:\s*reduce/.test(text)) return queries.reduced;
    if (/max-width:\s*900px/.test(text)) return queries.narrow;
    return Real.call(window, text);
  };
  return {
    // Changes one query and fires its `change` event.
    fire(name, matches) {
      queries[name].matches = matches;
      queries[name].dispatchEvent(new Event("change"));
    },
    listeners: name => queries[name].registered.size,
    restore() {
      window.matchMedia = Real;
    },
  };
};

const environment = {
  spy: null,
  media: null,
  destroy: null,
  install({ media } = {}) {
    this.spy = installObserverSpy();
    this.media = media ? installMatchMedia(media) : null;
  },
  restore() {
    if (this.spy) this.spy.restore();
    if (this.media) this.media.restore();
    this.spy = null;
    this.media = null;
    this.destroy = null;
  },
};

const setup = options => ({
  beforeEach: () => {
    environment.install(options);
    return () => environment.restore();
  },
});

// The theme sets `scroll-behavior: smooth`; instant scrolling keeps the stories deterministic.
const scrollToTop = () =>
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });

const frames = (count = 2) =>
  new Promise(resolve => {
    const step = left =>
      requestAnimationFrame(() => (left <= 1 ? resolve() : step(left - 1)));
    step(count);
  });

// Story-only spacers (`lead`/`tail`, 150vh each) put the section below or above the fold. The effect
// resets the scroll, then wires the controller on the rendered root unless `manual`.
const Harness = ({ headingId, manual = false, lead = true, tail = false }) => {
  const ref = useRef(null);
  useEffect(() => {
    scrollToTop();
    if (!manual) environment.destroy = initReimagine(ref.current);
    ref.current.setAttribute("data-harness-ready", "");
    return () => {
      if (!manual && environment.destroy) environment.destroy();
    };
  }, [manual]);
  const spacer = <div aria-hidden="true" style={{ height: "150vh" }} />;
  return (
    <>
      {lead && spacer}
      <div
        ref={ref}
        data-harness=""
        dangerouslySetInnerHTML={{
          __html: reimagineHtml({ headingId, entrance: true }),
        }}
      />
      {tail && spacer}
    </>
  );
};

const viewport = width => ({
  viewport: { value: `hp${width}`, isRotated: false },
});

const find = async canvasElement => {
  await waitFor(() =>
    expect(canvasElement.querySelector("[data-harness-ready]")).not.toBeNull()
  );
  const root = canvasElement.querySelector("[data-harness]");
  const section = root.querySelector("section.hp-reimagine");
  return {
    root,
    section,
    inner: section.querySelector(".hp-reimagine__inner"),
  };
};

const classes = section => ({
  enter: section.classList.contains("hp-reimagine--enter"),
  settled: section.classList.contains("hp-reimagine--settled"),
});

const bringIntoView = inner =>
  inner.scrollIntoView({ block: "center", behavior: "instant" });

const SETTLE_WAIT = { timeout: 3000 };
const DISPLACED = "matrix(1, 0, 0, 1, 0, 24)";

// --- stories ---

const ANIMATION_ID = "hp-reimagine-heading-entrance-animation";

export const EntranceAnimation = {
  ...setup(),
  globals: viewport(1440),
  render: () => <Harness headingId={ANIMATION_ID} />,
  play: async ({ canvasElement }) => {
    const { section, inner } = await find(canvasElement);
    await expect(window.innerWidth).toBe(1440);
    const { spy } = environment;

    // armed: below the fold at init, displaced by 24px without a transition
    await expect(section.hasAttribute("data-entrance")).toBe(true);
    await expect(classes(section)).toEqual({ enter: true, settled: false });
    await expect(getComputedStyle(inner).transform).toBe(DISPLACED);
    await expect(getComputedStyle(inner).transitionDuration).toBe("0s");

    // armed content is visible and laid out (the prototype moves it with transform only)
    for (const element of [section, inner]) {
      const style = getComputedStyle(element);
      await expect(style.opacity).toBe("1");
      await expect(style.visibility).toBe("visible");
      await expect(style.display).not.toBe("none");
    }
    await expect(
      section.querySelector("h2").textContent.length
    ).toBeGreaterThan(0);
    await expect(inner.offsetHeight).toBeGreaterThan(0);
    const metrics = {
      inner: [inner.offsetTop, inner.offsetHeight],
      section: [section.offsetTop, section.offsetHeight],
    };

    // one observer, created with the prototype's options
    await expect(spy.instances).toHaveLength(1);
    await expect(spy.instances[0].spyOptions).toEqual({
      rootMargin: THRESHOLD_MARGIN,
    });
    await expect(spy.instances[0].spyCalls.observe).toEqual([inner]);

    // crossing the line settles it once
    bringIntoView(inner);
    await waitFor(
      () =>
        expect(section.classList.contains("hp-reimagine--settled")).toBe(true),
      SETTLE_WAIT
    );
    const style = getComputedStyle(inner);
    await expect(style.transitionProperty).toBe("transform");
    await expect(style.transitionDuration).toBe("0.6s");
    await expect(style.transitionTimingFunction).toBe(
      "cubic-bezier(0.22, 1, 0.36, 1)"
    );
    await expect(style.transitionDelay).toBe("0s");
    await waitFor(
      () => expect(getComputedStyle(inner).transform).toBe("none"),
      SETTLE_WAIT
    );
    await expect([inner.offsetTop, inner.offsetHeight]).toEqual(metrics.inner);
    await expect([section.offsetTop, section.offsetHeight]).toEqual(
      metrics.section
    );
    await expect(spy.instances[0].spyCalls.unobserve).toEqual([inner]);

    // once only: leaving and re-entering never plays it again
    let runs = 0;
    inner.addEventListener("transitionrun", () => {
      runs += 1;
    });
    for (let pass = 0; pass < 2; pass += 1) {
      scrollToTop();
      await frames();
      bringIntoView(inner);
      await frames();
    }
    await expect(runs).toBe(0);
    await expect(classes(section)).toEqual({ enter: true, settled: true });
    await expect(getComputedStyle(inner).transform).toBe("none");
    await expect(spy.instances).toHaveLength(1);
    await expect(spy.instances[0].spyCalls.observe).toHaveLength(1);
  },
};

const IN_VIEW_ID = "hp-reimagine-heading-entrance-in-view";

export const EntranceInView = {
  ...setup(),
  globals: viewport(1440),
  render: () => <Harness lead={false} tail headingId={IN_VIEW_ID} />,
  play: async ({ canvasElement }) => {
    const { section, inner } = await find(canvasElement);
    const { spy } = environment;

    // already on screen at init: left alone (prototype P:3542)
    await expect(classes(section)).toEqual({ enter: false, settled: false });
    await expect(getComputedStyle(inner).transform).toBe("none");
    await expect(spy.instances).toHaveLength(0);

    let runs = 0;
    inner.addEventListener("transitionrun", () => {
      runs += 1;
    });
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "instant",
    });
    await frames();
    bringIntoView(inner);
    await frames(3);
    await expect(classes(section)).toEqual({ enter: false, settled: false });
    await expect(runs).toBe(0);
    await expect(spy.instances).toHaveLength(0);
  },
};

const NO_SCRIPT_ID = "hp-reimagine-heading-entrance-no-script";

export const EntranceNoScript = {
  ...setup(),
  globals: viewport(1440),
  render: () => <Harness manual headingId={NO_SCRIPT_ID} />,
  play: async ({ canvasElement }) => {
    const { section, inner } = await find(canvasElement);

    // server markup: opted in, but final, visible and laid out
    await expect(section.hasAttribute("data-entrance")).toBe(true);
    await expect(classes(section)).toEqual({ enter: false, settled: false });
    for (const element of [section, inner]) {
      for (const attribute of ["style", "hidden", "aria-hidden"]) {
        await expect(element.hasAttribute(attribute)).toBe(false);
      }
    }
    const style = getComputedStyle(inner);
    await expect(style.opacity).toBe("1");
    await expect(style.visibility).toBe("visible");
    await expect(style.transform).toBe("none");
    await expect(style.transitionDuration).toBe("0s");

    // the 1440 layout holds while the section is below the fold
    await expect(inner.getBoundingClientRect().top).toBeGreaterThan(
      window.innerHeight
    );
    const content = section.querySelector(".hp-reimagine__content");
    const list = section.querySelector(".hp-reimagine__list");
    await expect(content.getBoundingClientRect().left).toBeCloseTo(150.4, 0);
    await expect(list.getBoundingClientRect().left).toBeCloseTo(809.6, 0);

    // nothing else ever adds a class
    bringIntoView(inner);
    await frames();
    await expect(classes(section)).toEqual({ enter: false, settled: false });

    // the default markup carries no entrance hooks
    await expect(reimagineHtml()).not.toContain("data-entrance");
    await expect(reimagineHtml()).not.toContain("hp-reimagine--");
  },
};

const REDUCED_ID = "hp-reimagine-heading-entrance-reduced-motion";

export const EntranceReducedMotion = {
  ...setup({ media: { reduced: true } }),
  globals: viewport(1440),
  render: () => <Harness headingId={REDUCED_ID} />,
  play: async ({ canvasElement }) => {
    const { section, inner } = await find(canvasElement);
    const { spy, media } = environment;

    // reduced motion at init: plain markup, no observer
    await expect(classes(section)).toEqual({ enter: false, settled: false });
    await expect(getComputedStyle(inner).transform).toBe("none");
    await expect(spy.instances).toHaveLength(0);

    // the preference is live: turning it off arms the section
    media.fire("reduced", false);
    await expect(classes(section)).toEqual({ enter: true, settled: false });
    await expect(spy.instances).toHaveLength(1);
    await expect(getComputedStyle(inner).transform).toBe(DISPLACED);

    // ...turning it back on while armed returns the plain markup
    media.fire("reduced", true);
    await expect(classes(section)).toEqual({ enter: false, settled: false });
    await expect(getComputedStyle(inner).transform).toBe("none");
    await expect(spy.instances[0].spyCalls.unobserve).toEqual([inner]);
    await expect(spy.instances[0].spyCalls.disconnect).toBe(1);

    // ...and off again re-arms (a new observer), then it settles as usual
    media.fire("reduced", false);
    await expect(classes(section)).toEqual({ enter: true, settled: false });
    await expect(spy.instances).toHaveLength(2);
    bringIntoView(inner);
    await waitFor(
      () =>
        expect(section.classList.contains("hp-reimagine--settled")).toBe(true),
      SETTLE_WAIT
    );

    // after it settled the preference changes nothing and nothing throws
    media.fire("reduced", true);
    await expect(classes(section)).toEqual({ enter: true, settled: true });

    // the `change` listeners are registered while bound and gone after destroy
    await expect(media.listeners("reduced")).toBe(1);
    await expect(media.listeners("narrow")).toBe(1);
    environment.destroy();
    await expect(media.listeners("reduced")).toBe(0);
    await expect(media.listeners("narrow")).toBe(0);
  },
};

const BELOW_ID = "hp-reimagine-heading-entrance-below-901";

export const EntranceBelow901 = {
  ...setup({ media: { narrow: true } }),
  globals: viewport(393),
  render: () => <Harness headingId={BELOW_ID} />,
  play: async ({ canvasElement }) => {
    const { section, inner } = await find(canvasElement);
    const { spy, media } = environment;
    await expect(window.innerWidth).toBe(393);

    // narrow at init: plain markup, no observer
    await expect(classes(section)).toEqual({ enter: false, settled: false });
    await expect(spy.instances).toHaveLength(0);

    // the CSS gate matches the JS gate: the classes alone move nothing below 901px
    section.classList.add("hp-reimagine--enter", "hp-reimagine--settled");
    await expect(getComputedStyle(inner).transform).toBe("none");
    await expect(getComputedStyle(inner).transitionDuration).toBe("0s");
    section.classList.remove("hp-reimagine--enter", "hp-reimagine--settled");

    // the controller arms only once the narrow query stops matching
    media.fire("narrow", false);
    await expect(classes(section)).toEqual({ enter: true, settled: false });
    await expect(spy.instances).toHaveLength(1);
    // still no movement: this browser window really is 393px wide
    await expect(getComputedStyle(inner).transform).toBe("none");
  },
};

const IDEMPOTENT_ID = "hp-reimagine-heading-entrance-idempotent-init";

const parseSection = html => {
  const parsed = new DOMParser().parseFromString(html, "text/html");
  return document.importNode(parsed.body.firstElementChild, true);
};

export const EntranceIdempotentInit = {
  ...setup({ media: {} }),
  globals: viewport(1440),
  render: () => <Harness manual headingId={IDEMPOTENT_ID} />,
  play: async ({ canvasElement }) => {
    const { root, section } = await find(canvasElement);
    const { spy, media } = environment;
    await expect(entry.initReimagine === initReimagine).toBe(true);

    const original = section.outerHTML;
    const first = initReimagine(root);
    const second = initReimagine(document);
    const third = initReimagine(root);
    await expect(classes(section)).toEqual({ enter: true, settled: false });
    await expect(spy.instances).toHaveLength(1);
    await expect(spy.instances[0].spyCalls.observe).toHaveLength(1);

    // later calls bound nothing: their disposers change nothing
    second();
    third();
    await expect(classes(section).enter).toBe(true);
    await expect(spy.instances[0].spyCalls.disconnect).toBe(0);
    await expect(media.listeners("reduced")).toBe(1);

    // the first disposer removes everything the call added
    first();
    await expect(classes(section)).toEqual({ enter: false, settled: false });
    await expect(spy.instances[0].spyCalls.disconnect).toBe(1);
    await expect(media.listeners("reduced")).toBe(0);
    await expect(media.listeners("narrow")).toBe(0);
    await expect(section.outerHTML).toBe(original);
    first(); // safe twice

    // re-init after destroy binds again
    const fourth = initReimagine(root);
    await expect(classes(section)).toEqual({ enter: true, settled: false });
    await expect(spy.instances).toHaveLength(2);

    // a section appended later is bound by its own call, the first is untouched
    const extra = parseSection(
      reimagineHtml({ headingId: `${IDEMPOTENT_ID}-extra`, entrance: true })
    );
    root.appendChild(extra);
    const fifth = initReimagine(root);
    await expect(classes(extra)).toEqual({ enter: true, settled: false });
    await expect(classes(section)).toEqual({ enter: true, settled: false });
    await expect(spy.instances).toHaveLength(3);
    fifth();
    await expect(classes(extra)).toEqual({ enter: false, settled: false });
    await expect(classes(section).enter).toBe(true);
    fourth();
    await expect(classes(section).enter).toBe(false);
  },
};

const GATE_ID = "hp-reimagine-heading-entrance-css-gate";

export const EntranceCssGate = {
  ...setup(),
  globals: viewport(1440),
  render: () => <Harness manual headingId={GATE_ID} />,
  play: async ({ canvasElement }) => {
    await find(canvasElement);
    const found = [];
    walkRules((rule, conditions) => {
      if (/hp-reimagine--(enter|settled)/.test(rule.selectorText)) {
        found.push({ rule, conditions });
      }
    });
    await expect(found.length).toBeGreaterThan(0);
    for (const { rule, conditions } of found) {
      // only inside the same gate as the JS: >= 901px and no reduced-motion preference
      await expect(
        conditions.some(
          c =>
            c.includes("min-width: 901px") &&
            c.includes("prefers-reduced-motion: no-preference")
        )
      ).toBe(true);
      // no hidden state, no layout change: transform and transition only
      for (const property of Array.from(rule.style)) {
        await expect(/^(transform|transition)/.test(property)).toBe(true);
      }
    }
  },
};
