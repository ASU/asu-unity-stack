import React from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import {
  emulateReducedMotion,
  emulateTouchInput,
  Harness,
  MAKE_IT_YOURS,
  makeItYoursHtml,
  realKeyboard,
  realPointer,
  resizeViewport,
  walkRules,
} from "./make-it-yours-helpers.jsx";
export default {
  title: "Homepage/Make it yours",
  parameters: {
    docs: {
      description: {
        component:
          'Homepage "Make it yours" section (WWWCMS-237): five photo tabs (degree, format, community, experience, cost). Stacked through 768px (white head, inset photo, dark band with the tab list) and side by side from 769px (full-bleed photo, content column on the right, 865px tall). WAI-ARIA APG Accordion: one panel is always open. Without script every panel is open and only the first photo shows. `initMakeItYours` wires it.',
      },
    },
  },
};
const viewport = width => ({
  viewport: { value: `hp${width}`, isRotated: false },
});
// Whitespace between tags is ignored, and both sides go through the parser so `<path/>` equals `<path></path>`.
const normalize = html => {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.innerHTML.replace(/>\s+</g, "><").trim();
};
const find = (canvasElement, selector) => canvasElement.querySelector(selector);
const list = (canvasElement, selector) =>
  Array.from(canvasElement.querySelectorAll(selector));
const near = (actual, expected, tolerance = 1) =>
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(tolerance);
const box = element => element.getBoundingClientRect();
export const Default = {
  globals: { viewport: viewport(1280) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    const triggers = list(canvasElement, ".hp-myours__trigger");
    const panels = list(canvasElement, ".hp-myours__panel");
    await expect(triggers).toHaveLength(5);
    await expect(panels).toHaveLength(5);
    triggers.forEach((trigger, i) => {
      const panel = canvasElement.ownerDocument.getElementById(
        trigger.getAttribute("aria-controls")
      );
      expect(panel).toBe(panels[i]);
      expect(panel.getAttribute("role")).toBe("region");
      expect(panel.getAttribute("aria-labelledby")).toBe(trigger.id);
    });
    await expect(list(canvasElement, "figure")).toHaveLength(5);
    await expect(list(canvasElement, "figure.is-active")).toHaveLength(1);
    await expect(list(canvasElement, "h3")).toHaveLength(5);
    await expect(
      within(canvasElement).getByRole("heading", {
        level: 2,
        name: "Make it yours",
      })
    ).toBeTruthy();
    // Boot state: tab 1 open, the rest closed and inert; transitions come back two frames later.
    const section = find(canvasElement, ".hp-myours");
    await expect(section).toHaveClass("is-enhanced");
    await waitFor(() => expect(section).not.toHaveClass("is-booting"));
    triggers.forEach((trigger, i) => {
      expect(trigger.getAttribute("aria-expanded")).toBe(
        i === 0 ? "true" : "false"
      );
      expect(trigger.hasAttribute("aria-disabled")).toBe(i === 0);
      if (i === 0) expect(trigger.getAttribute("aria-disabled")).toBe("true");
      expect(panels[i].hasAttribute("inert")).toBe(i !== 0);
    });
    await expect(list(canvasElement, ".hp-myours__item.is-open")).toHaveLength(
      1
    );
    await expect(find(canvasElement, ".hp-myours__item")).toHaveClass(
      "is-open"
    );
    await expect(find(canvasElement, ".hp-myours__photo")).toHaveClass(
      "is-active"
    );
    // Desktop section is exactly 865px once enhanced.
    near(box(find(canvasElement, ".hp-myours__stage")).height, 865, 0.5);
  },
};
export const HtmlParity = {
  name: "HTML parity",
  globals: { viewport: viewport(1280) },
  render: () => <Harness manual html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await expect(normalize(canvasElement.firstElementChild.innerHTML)).toBe(
      normalize(makeItYoursHtml())
    );
    await expect(
      canvasElement.querySelector(
        "[aria-expanded], [aria-disabled], [inert], .is-open, .is-enhanced, .is-booting"
      )
    ).toBeNull();
    await expect(find(canvasElement, "figure")).toHaveClass("is-active");
  },
};
export const FiveTabsRequired = {
  name: "Five tabs required",
  globals: { viewport: viewport(1280) },
  render: () => <Harness manual html="" />,
  play: async () => {
    const data = MAKE_IT_YOURS;
    const build = count =>
      makeItYoursHtml({
        data: {
          ...data,
          tabs: Array.from({ length: count }, (_, i) => data.tabs[i % 5]),
        },
      });
    await expect(() => build(4)).toThrow(/exactly five tabs/);
    await expect(() => build(6)).toThrow(/exactly five tabs/);
    await expect(build(5)).toContain("hp-myours__stage");
  },
};
export const InjectionEscaping = {
  name: "Injection escaping",
  globals: { viewport: viewport(1280) },
  render: () => {
    const [first, ...rest] = MAKE_IT_YOURS.tabs;
    const hostile = {
      ...first,
      title: "<img src=x onerror=alert(1)>",
      cta: { label: "Go", url: "javascript:alert(1)" },
      desktop: {
        ...first.desktop,
        alt: 'Quote " and <b>tag</b> & amp',
        caption: "<script>alert(2)</script>",
        focus: "50%; background:red",
      },
    };
    return (
      <Harness
        manual
        html={makeItYoursHtml({
          data: { ...MAKE_IT_YOURS, tabs: [hostile, ...rest] },
        })}
      />
    );
  },
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector("img[src='x']")).toBeNull();
    await expect(canvasElement.querySelector("script")).toBeNull();
    await expect(canvasElement.querySelector("b")).toBeNull();
    await expect(find(canvasElement, ".hp-myours__trigger").textContent).toBe(
      "<img src=x onerror=alert(1)>"
    );
    const firstItem = find(canvasElement, ".hp-myours__item");
    await expect(firstItem.querySelector(".hp-myours__cta")).toBeNull();
    await expect(
      find(canvasElement, ".hp-myours__img").getAttribute("data-alt-desktop")
    ).toBe('Quote " and <b>tag</b> & amp');
    await expect(
      find(canvasElement, ".hp-myours__photo").style.getPropertyValue(
        "--hp-myours-focus"
      )
    ).toBe("50% 50%");
    await expect(
      list(canvasElement, ".hp-myours__cta[href^='javascript']")
    ).toHaveLength(0);
  },
};

// ---- shared geometry helpers ----
const style = (element, pseudo) => getComputedStyle(element, pseudo);
const px = value => parseFloat(value);
// The vitest iframe may not honour the viewport global at every width, so each layout story sets its own.
const atWidth = async (width, height = 900) => {
  await resizeViewport(width, height);
  await expect(window.innerWidth).toBe(width);
};
const noHorizontalOverflow = () =>
  expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(
    window.innerWidth
  );
const parts = canvasElement => ({
  stage: find(canvasElement, ".hp-myours__stage"),
  heading: find(canvasElement, ".hp-myours__heading"),
  lead: find(canvasElement, ".hp-myours__lead"),
  host: find(canvasElement, ".scrib-host"),
  scrib: find(canvasElement, ".hp-myours__scrib"),
  picture: find(canvasElement, ".hp-myours__photo.is-active picture"),
  img: find(canvasElement, ".hp-myours__photo.is-active .hp-myours__img"),
  caption: find(canvasElement, ".hp-myours__photo.is-active figcaption"),
  triggers: list(canvasElement, ".hp-myours__trigger"),
  ctas: list(canvasElement, ".hp-myours__cta"),
});
const MOBILE_ALT_1 =
  "Laughing graduate in a maroon cap and gown with a gold stole, sitting outdoors and raising a hand in the ASU pitchfork sign.";

// ---- stacked layout (<= 768) ----
export const Phone393 = {
  name: "Phone 393",
  globals: { viewport: viewport(393) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(393, 852);
    const p = parts(canvasElement);
    await expect(style(p.stage).display).toBe("block");
    await expect(style(p.picture).aspectRatio.replace(/\s/g, "")).toBe(
      "900/650"
    );
    near(box(p.picture).width, 393 - 64, 1);
    // The dark band starts 24px above the photo's bottom edge.
    near(box(p.caption).top, box(p.picture).bottom - 24, 1);
    // "Make it / yours": two lines, so the heading is about two font sizes tall.
    const fontSize = px(style(p.heading).fontSize);
    near(box(p.heading).height, fontSize * 2, 2);
    // Stacked swash sits under "yours" only.
    expect(box(p.scrib).left).toBeGreaterThanOrEqual(box(p.host).left - 1);
    // "yours" wraps below the lead-in "it", so the swash cannot reach it.
    expect(box(p.host).top).toBeGreaterThan(box(p.lead).top + fontSize / 2);
    // The base swash is shifted 2% right of the host; allow 5% of its width.
    expect(box(p.scrib).right).toBeLessThanOrEqual(
      box(p.host).right + box(p.host).width * 0.05
    );
    // The list reserves the tallest open state.
    const tabsMin = find(
      canvasElement,
      ".hp-myours__tabs"
    ).style.getPropertyValue("--hp-myours-tabs-min");
    expect(tabsMin).toMatch(/^\d+px$/);
    expect(px(tabsMin)).toBeGreaterThanOrEqual(
      p.triggers.length * 44 +
        Math.max(
          ...list(canvasElement, ".hp-myours__panel-inner").map(
            inner => inner.scrollHeight
          )
        )
    );
    p.triggers.forEach(trigger =>
      expect(box(trigger).height).toBeGreaterThanOrEqual(44)
    );
    p.ctas.forEach(cta => {
      // The ::after pseudo-element extends the 24px line to a 44px hit area.
      expect(px(style(cta, "::after").height)).toBeGreaterThanOrEqual(44);
    });
    noHorizontalOverflow();
  },
};
export const Tablet768 = {
  name: "Tablet 768",
  globals: { viewport: viewport(768) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(768, 1024);
    const p = parts(canvasElement);
    await expect(window.matchMedia("(min-width: 769px)").matches).toBe(false);
    await expect(style(p.stage).display).toBe("block");
    await waitFor(() =>
      expect(p.img.currentSrc).toMatch(/design-your-degree-mobile\.webp$/)
    );
    await expect(p.img.getAttribute("alt")).toBe(MOBILE_ALT_1);
    // One line at 768 (line-height 1).
    near(box(p.heading).height, px(style(p.heading).fontSize), 4);
    noHorizontalOverflow();
  },
};
export const NoScriptPhone393 = {
  name: "No script, phone 393",
  globals: { viewport: viewport(393) },
  render: () => <Harness manual html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(393, 852);
    const p = parts(canvasElement);
    await expect(find(canvasElement, ".hp-myours")).not.toHaveClass(
      "is-enhanced"
    );
    list(canvasElement, ".hp-myours__panel-inner").forEach(inner =>
      expect(box(inner).height).toBeGreaterThan(0)
    );
    list(canvasElement, ".hp-myours__panel").forEach(panel =>
      expect(style(panel).visibility).toBe("visible")
    );
    const shown = list(canvasElement, ".hp-myours__photo").filter(
      figure => style(figure).display !== "none"
    );
    await expect(shown).toHaveLength(1);
    await expect(shown[0]).toHaveClass("is-active");
    p.triggers.forEach(trigger =>
      expect(trigger.hasAttribute("aria-expanded")).toBe(false)
    );
    noHorizontalOverflow();
  },
};

// ---- side by side (>= 769) ----
const desktopParts = canvasElement => ({
  ...parts(canvasElement),
  head: find(canvasElement, ".hp-myours__head"),
  tabs: find(canvasElement, ".hp-myours__tabs"),
  photos: find(canvasElement, ".hp-myours__photos"),
});
const FRAME = 1920;
// Geometry shared by every desktop width (design doc 12.1): 865px stage, photo fills it, chip 48px in from the
// bottom and from the left edge of the 1920px frame, heading 88px.
const expectDesktopStage = (canvasElement, width) => {
  const p = desktopParts(canvasElement);
  expect(style(p.stage).display).toBe("grid");
  near(box(p.stage).height, 865, 1);
  near(box(p.stage).width, width, 1);
  near(box(p.photos).width, width, 1);
  near(box(p.img).width, width, 1);
  near(box(p.img).height, 865, 1);
  expect(style(p.img).objectFit).toBe("cover");
  near(px(style(p.heading).fontSize), 88, 0);
  near(box(p.stage).bottom - box(p.caption).bottom, 48, 1);
  near(box(p.caption).left, Math.max(48, (width - FRAME) / 2 + 48), 1);
  noHorizontalOverflow();
  return p;
};
const desktopStory = (name, width, column) => ({
  name,
  globals: { viewport: viewport(width) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(width, 1000);
    const p = expectDesktopStage(canvasElement, width);
    if (column) {
      expect(box(p.tabs).left).toBeGreaterThanOrEqual(column[0]);
      expect(box(p.tabs).left).toBeLessThanOrEqual(column[1]);
      near(box(p.tabs).width, 548, 1);
    }
    // The content column sits right of centre, over the photo.
    expect(box(p.tabs).left).toBeGreaterThan(width / 2 - 1);
  },
});
export const Boundary769 = {
  name: "Boundary 769",
  globals: { viewport: viewport(769) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(769, 900);
    await expect(window.matchMedia("(min-width: 769px)").matches).toBe(true);
    const p = desktopParts(canvasElement);
    await expect(style(p.stage).display).toBe("grid");
    near(box(p.stage).height, 865, 1);
    await waitFor(() =>
      expect(p.img.currentSrc).toMatch(/design-your-degree(-\d+)?\.webp$/)
    );
    await expect(p.img.currentSrc).not.toMatch(/-mobile\.webp$/);
    // From 769 the photo carries the desktop alt; one pixel narrower it is the mobile alt again.
    await waitFor(() =>
      expect(p.img.getAttribute("alt")).toBe(MAKE_IT_YOURS.tabs[0].desktop.alt)
    );
    noHorizontalOverflow();
    await atWidth(768, 1024);
    await waitFor(() => expect(p.img.getAttribute("alt")).toBe(MOBILE_ALT_1));
    await waitFor(() =>
      expect(p.img.currentSrc).toMatch(/design-your-degree-mobile\.webp$/)
    );
    await atWidth(769, 900);
    await waitFor(() =>
      expect(p.img.getAttribute("alt")).toBe(MAKE_IT_YOURS.tabs[0].desktop.alt)
    );
  },
};
const desktop1280 = desktopStory("Desktop 1280", 1280, [640, 690]);
export const Desktop1280 = {
  ...desktop1280,
  play: async context => {
    await desktop1280.play(context);
    const { canvasElement } = context;
    // Every tab, open in turn, fits under the 865px stage (24px to spare) and nothing overflows it.
    await emulateReducedMotion(true);
    try {
      const stage = find(canvasElement, ".hp-myours__stage");
      for (let i = 0; i < 5; i += 1) {
        if (trig(canvasElement, i).getAttribute("aria-expanded") !== "true") {
          await userEvent.click(trig(canvasElement, i));
        }
        await expectOpenTab(canvasElement, i);
        const item = list(canvasElement, ".hp-myours__item")[i];
        const cta = item.querySelector(".hp-myours__cta");
        await waitFor(() =>
          expect(box(cta).bottom).toBeLessThanOrEqual(box(stage).bottom - 24)
        );
        expect(box(item).bottom).toBeLessThanOrEqual(box(stage).bottom - 24);
        expect(stage.scrollHeight).toBeLessThanOrEqual(stage.clientHeight);
        near(box(stage).height, 865, 1);
      }
    } finally {
      await emulateReducedMotion(false);
    }
  },
};
export const Large1920 = desktopStory("Large 1920", 1920, [1250, 1340]);
export const Wide2500 = desktopStory("Wide 2500", 2500);
export const Ultra3934 = desktopStory("Ultra-wide 3934", 3934);
export const NoScript = {
  name: "No script",
  globals: { viewport: viewport(1280) },
  render: () => <Harness manual html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(1280, 900);
    const p = desktopParts(canvasElement);
    await expect(find(canvasElement, ".hp-myours")).not.toHaveClass(
      "is-enhanced"
    );
    // Every panel is open and the stage grows past 865px if it has to.
    list(canvasElement, ".hp-myours__panel-inner").forEach(inner =>
      expect(box(inner).height).toBeGreaterThan(0)
    );
    expect(box(p.stage).height).toBeGreaterThanOrEqual(865 - 1);
    const shown = list(canvasElement, ".hp-myours__photo").filter(
      figure => style(figure).display !== "none"
    );
    await expect(shown).toHaveLength(1);
    await expect(shown[0]).toHaveClass("is-active");
    p.triggers.forEach(trigger =>
      expect(trigger.hasAttribute("aria-expanded")).toBe(false)
    );
  },
};

// ---- CTA and heading states ----
const WHITE = "rgb(255, 255, 255)";
// Counts the class, attribute and pseudo-class parts of one selector (enough to compare two :visited rules).
const classWeight = selector => (selector.match(/[.[]|:(?!:)/g) || []).length;
export const CtaLinkStates = {
  name: "CTA link states",
  globals: { viewport: viewport(1280) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(1280, 900);
    const cta = find(canvasElement, ".hp-myours__cta");
    await expect(style(cta).color).toBe(WHITE);
    await expect(style(cta).borderBottomColor).toBe(WHITE);
    await expect(style(cta).borderBottomWidth).toBe("1px");
    await expect(style(find(cta, ".hp-myours__cta-icon") ?? cta).color).toBe(
      WHITE
    );
    // Focus
    cta.focus();
    await expect(style(cta).color).toBe(WHITE);
    cta.blur();
    // Hover: still white, the underline goes away.
    if (realPointer.available) {
      await realPointer.hover(cta);
      await waitFor(() =>
        expect(style(cta).borderBottomColor).toBe("rgba(0, 0, 0, 0)")
      );
      await expect(style(cta).color).toBe(WHITE);
      await realPointer.unhover(cta);
    }
    // :visited and :active cannot be forced in a test; the rules must exist, be white and outrank the theme's.
    const states = { visited: [], active: [], other: [] };
    walkRules((rule, conditions) => {
      // Forced colors deliberately switches to system colors.
      if (conditions.some(c => /forced-colors/.test(c))) return;
      rule.selectorText.split(",").forEach(raw => {
        const selector = raw.trim();
        const white =
          rule.style.color === "rgb(255, 255, 255)" ||
          rule.style.color === "var(--bs-white)" ||
          /^#fff(fff)?$/i.test(rule.style.color) ||
          rule.style.color === "white";
        if (/hp-myours__cta/.test(selector) && /:visited$/.test(selector)) {
          states.visited.push({ selector, white });
        } else if (
          /hp-myours__cta/.test(selector) &&
          /:active$/.test(selector)
        ) {
          states.active.push({ selector, white });
        } else if (/(^|[\s>+~])a:visited$/.test(selector) && rule.style.color) {
          states.other.push({ selector, weight: classWeight(selector) });
        }
      });
    });
    await expect(states.visited.length).toBeGreaterThan(0);
    states.visited.forEach(rule => expect(rule.white).toBe(true));
    await expect(states.active.length).toBeGreaterThan(0);
    states.active.forEach(rule => expect(rule.white).toBe(true));
    const ours = Math.max(...states.visited.map(r => classWeight(r.selector)));
    states.other.forEach(rule => expect(ours).toBeGreaterThan(rule.weight));
  },
};
export const HeadingUnderline = {
  name: "Heading underline",
  globals: { viewport: viewport(393) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    // Stacked: the swash sits under "yours" only (base underline-mark values).
    await atWidth(393, 852);
    let p = parts(canvasElement);
    near(box(p.scrib).left - box(p.host).left, box(p.host).width * 0.02, 2);
    near(box(p.scrib).width, box(p.host).width, 2);
    // Desktop: it runs from 1.03em left of "yours", 3.02em wide, under "it yours".
    await atWidth(1280, 900);
    p = parts(canvasElement);
    const em = px(style(p.host).fontSize);
    near(box(p.host).left - box(p.scrib).left, 1.03 * em, 2);
    near(box(p.scrib).width, 3.02 * em, 2);
    expect(box(p.scrib).left).toBeLessThan(box(p.lead).right);
  },
};

// ---- behaviour: click, tap, switch (T10) ----
const trig = (canvasElement, i) =>
  list(canvasElement, ".hp-myours__trigger")[i];
// Matrix row 1: exactly tab `index` is open, in every attribute the contract lists.
const expectOpenTab = async (canvasElement, index) => {
  await waitFor(() =>
    expect(trig(canvasElement, index)).toHaveAttribute("aria-expanded", "true")
  );
  list(canvasElement, ".hp-myours__item").forEach((item, i) => {
    const on = i === index;
    const trigger = trig(canvasElement, i);
    expect(item.classList.contains("is-open")).toBe(on);
    expect(trigger.getAttribute("aria-expanded")).toBe(on ? "true" : "false");
    expect(trigger.getAttribute("aria-disabled")).toBe(on ? "true" : null);
    expect(
      list(canvasElement, ".hp-myours__panel")[i].hasAttribute("inert")
    ).toBe(!on);
    expect(
      list(canvasElement, ".hp-myours__photo")[i].classList.contains(
        "is-active"
      )
    ).toBe(on);
  });
  await expect(list(canvasElement, ".hp-myours__panel[inert]")).toHaveLength(4);
};
// Stands in for the site data layer: a document-level click reader. `states` records what it could see.
const clickSpy = () => {
  const states = [];
  const handler = event => {
    const trigger = event.target.closest?.(".hp-myours__trigger");
    if (trigger) {
      states.push({ trigger, expanded: trigger.getAttribute("aria-expanded") });
    }
  };
  document.addEventListener("click", handler);
  return { states, stop: () => document.removeEventListener("click", handler) };
};
export const ClickSwitch = {
  name: "Click switch",
  globals: { viewport: viewport(1280) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(1280, 900);
    const spy = clickSpy();
    try {
      const second = trig(canvasElement, 1);
      await userEvent.click(second);
      await expectOpenTab(canvasElement, 1);
      await expect(
        find(canvasElement, ".hp-myours__photo.is-active").dataset.tab
      ).toBe("learn-your-way");
      await expect(document.activeElement).toBe(second);
      // The data layer sees the click once, and sees the closed state it is about to leave (deferred commit).
      await expect(spy.states).toHaveLength(1);
      await expect(spy.states[0].trigger).toBe(second);
      await expect(spy.states[0].expanded).toBe("false");
      // The GA contract is static in the markup.
      await expect(second.dataset.gaEvent).toBe("select");
      await expect(second.dataset.gaAction).toBe("open");
      await expect(second.dataset.gaText).toBe("learn your way");
      // And back, by Enter on the first header (matrix row 6).
      trig(canvasElement, 0).focus();
      await userEvent.keyboard("{Enter}");
      await expectOpenTab(canvasElement, 0);
      await expect(document.activeElement).toBe(trig(canvasElement, 0));
      await expect(spy.states).toHaveLength(2);
      // Space on a closed header opens it too.
      trig(canvasElement, 3).focus();
      await userEvent.keyboard(" ");
      await expectOpenTab(canvasElement, 3);
      await expect(spy.states).toHaveLength(3);
    } finally {
      spy.stop();
    }
  },
};
export const TouchTap = {
  name: "Touch tap",
  globals: { viewport: viewport(393) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(393, 852);
    await emulateTouchInput(true);
    try {
      await expect(window.matchMedia("(hover: none)").matches).toBe(true);
      const third = trig(canvasElement, 2);
      await expect(style(third).touchAction).toBe("manipulation");
      await userEvent.click(third);
      await expectOpenTab(canvasElement, 2);
      await expect(document.activeElement).toBe(third);
    } finally {
      await emulateTouchInput(false);
    }
  },
};
export const DisabledOpenHeader = {
  name: "Disabled open header",
  globals: { viewport: viewport(1280) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(1280, 900);
    const spy = clickSpy();
    try {
      const open = trig(canvasElement, 0);
      await userEvent.click(open);
      open.focus();
      await userEvent.keyboard("{Enter}");
      await userEvent.keyboard(" ");
      // Let any deferred commit run.
      await new Promise(resolve => setTimeout(resolve, 50));
      await expectOpenTab(canvasElement, 0);
      await expect(spy.states).toHaveLength(0);
      await expect(document.activeElement).toBe(open);
      // A real open does reach the reader exactly once.
      await userEvent.click(trig(canvasElement, 4));
      await expectOpenTab(canvasElement, 4);
      await expect(spy.states).toHaveLength(1);
    } finally {
      spy.stop();
    }
  },
};

// ---- behaviour: keyboard (T11) ----
const expectFocus = async (canvasElement, index) =>
  expect(document.activeElement).toBe(trig(canvasElement, index));
export const KeyboardArrows = {
  name: "Keyboard arrows",
  globals: { viewport: viewport(1280) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(1280, 900);
    await expect(realPointer.available).toBe(true);
    trig(canvasElement, 0).focus();
    // ArrowDown walks 2, 3, 4, 5 and wraps to 1; nothing opens.
    for (const next of [1, 2, 3, 4, 0]) {
      await realKeyboard.press("{ArrowDown}");
      await expectFocus(canvasElement, next);
    }
    // ArrowUp from the first header wraps to the last, then walks back.
    await realKeyboard.press("{ArrowUp}");
    await expectFocus(canvasElement, 4);
    await realKeyboard.press("{ArrowUp}");
    await expectFocus(canvasElement, 3);
    await realKeyboard.press("{Home}");
    await expectFocus(canvasElement, 0);
    await realKeyboard.press("{End}");
    await expectFocus(canvasElement, 4);
    // Left, Right and Escape have no handler; modifiers are ignored.
    for (const key of ["{ArrowLeft}", "{ArrowRight}", "{Escape}"]) {
      await realKeyboard.press(key);
      await expectFocus(canvasElement, 4);
    }
    await realKeyboard.press("{Control>}{ArrowUp}{/Control}");
    await expectFocus(canvasElement, 4);
    await realKeyboard.press("{Alt>}{Home}{/Alt}");
    await expectFocus(canvasElement, 4);
    // Focus moved over every header and the state never changed.
    await expectOpenTab(canvasElement, 0);
    // Only Enter (or Space) opens.
    await realKeyboard.press("{Enter}");
    await expectOpenTab(canvasElement, 4);
    await expectFocus(canvasElement, 4);
  },
};
export const TabOrder = {
  name: "Tab order",
  globals: { viewport: viewport(1280) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(1280, 900);
    await expect(realPointer.available).toBe(true);
    const ctas = list(canvasElement, ".hp-myours__cta");
    const triggers = list(canvasElement, ".hp-myours__trigger");
    const tabTo = async expected => {
      await realKeyboard.press("{Tab}");
      await expect(document.activeElement).toBe(expected);
    };
    // Forward: the open panel's CTA sits between its trigger and the next trigger; closed CTAs are skipped.
    triggers[0].focus();
    for (const next of [
      ctas[0],
      triggers[1],
      triggers[2],
      triggers[3],
      triggers[4],
    ]) {
      await tabTo(next);
    }
    // Shift+Tab is the exact reverse.
    for (const next of [
      triggers[3],
      triggers[2],
      triggers[1],
      ctas[0],
      triggers[0],
    ]) {
      await realKeyboard.press("{Shift>}{Tab}{/Shift}");
      await expect(document.activeElement).toBe(next);
    }
    // After opening tab 3 the CTA moves with it.
    await userEvent.click(triggers[2]);
    await expectOpenTab(canvasElement, 2);
    await tabTo(ctas[2]);
    await tabTo(triggers[3]);
    await realKeyboard.press("{Shift>}{Tab}{/Shift}");
    await expect(document.activeElement).toBe(ctas[2]);
    await realKeyboard.press("{Shift>}{Tab}{/Shift}");
    await expect(document.activeElement).toBe(triggers[2]);
    await realKeyboard.press("{Shift>}{Tab}{/Shift}");
    await expect(document.activeElement).toBe(triggers[1]);
  },
};

// ---- behaviour: per-crop alt and caption, lazy and promote (T12) ----
const activeImg = canvasElement =>
  find(canvasElement, ".hp-myours__photo.is-active .hp-myours__img");
const visibleCaption = canvasElement =>
  find(
    canvasElement,
    ".hp-myours__photo.is-active figcaption"
  ).innerText.trim();
export const AltAndCaptionPerCrop = {
  name: "Alt and caption per crop",
  globals: { viewport: viewport(1280) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    const tabsToCheck = [0, 2, 4];
    const check = async crop => {
      for (const i of tabsToCheck) {
        if (trig(canvasElement, i).getAttribute("aria-expanded") !== "true") {
          await userEvent.click(trig(canvasElement, i));
          await expectOpenTab(canvasElement, i);
        }
        const tab = MAKE_IT_YOURS.tabs[i];
        await waitFor(() =>
          expect(activeImg(canvasElement).getAttribute("alt")).toBe(
            tab[crop].alt
          )
        );
        await expect(visibleCaption(canvasElement)).toBe(tab[crop].caption);
      }
    };
    await atWidth(1280, 900);
    await check("desktop");
    await atWidth(768, 1024);
    await check("mobile");
    await atWidth(769, 900);
    await check("desktop");
    // The two alts really are different texts (the content file gives each crop its own).
    tabsToCheck.forEach(i => {
      const { desktop, mobile } = MAKE_IT_YOURS.tabs[i];
      expect(desktop.alt).not.toBe(mobile.alt);
    });
    // Captions: tabs 3 and 5 name different people per crop.
    expect(MAKE_IT_YOURS.tabs[2].desktop.caption).not.toBe(
      MAKE_IT_YOURS.tabs[2].mobile.caption
    );
    expect(MAKE_IT_YOURS.tabs[4].desktop.caption).not.toBe(
      MAKE_IT_YOURS.tabs[4].mobile.caption
    );
  },
};
export const LazyAndPromote = {
  name: "Lazy and promote",
  globals: { viewport: viewport(1280) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(1280, 900);
    await expect(realPointer.available).toBe(true);
    const images = list(canvasElement, ".hp-myours__img");
    images.forEach(img => expect(img.getAttribute("loading")).toBe("lazy"));
    await realPointer.hover(trig(canvasElement, 3));
    await waitFor(() =>
      expect(images[3].getAttribute("loading")).toBe("eager")
    );
    // Only the photo of the tab under the pointer is promoted, and hovering opens nothing.
    [0, 1, 2, 4].forEach(i =>
      expect(images[i].getAttribute("loading")).toBe("lazy")
    );
    await expectOpenTab(canvasElement, 0);
    await realPointer.unhover(trig(canvasElement, 3));
    // Keyboard focus is a promote too.
    trig(canvasElement, 4).focus();
    await waitFor(() =>
      expect(images[4].getAttribute("loading")).toBe("eager")
    );
    await expect(images[1].getAttribute("loading")).toBe("lazy");
  },
};

// ---- behaviour: height reserve and resize (T13) ----
const tabsMinOf = canvasElement =>
  find(canvasElement, ".hp-myours__tabs").style.getPropertyValue(
    "--hp-myours-tabs-min"
  );
// With every tab open in turn, the list is exactly as tall as the reserve (and never taller).
const listHeights = async canvasElement => {
  const heights = [];
  for (let i = 0; i < 5; i += 1) {
    if (trig(canvasElement, i).getAttribute("aria-expanded") !== "true") {
      await userEvent.click(trig(canvasElement, i));
    }
    await expectOpenTab(canvasElement, i);
    heights.push(box(find(canvasElement, ".hp-myours__list")).height);
  }
  return heights;
};
export const ReserveHeightStacked = {
  name: "Reserve height, stacked",
  globals: { viewport: viewport(393) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(393, 852);
    await emulateReducedMotion(true);
    try {
      const reserve393 = px(tabsMinOf(canvasElement));
      await expect(reserve393).toBeGreaterThan(5 * 44);
      const heights = await listHeights(canvasElement);
      heights.forEach(height => near(height, reserve393, 1));
      // Photo and tab list keep their height whichever tab is open (the caption line may wrap differently).
      const photo = box(
        find(canvasElement, ".hp-myours__photo.is-active picture")
      ).height;
      for (const i of [3, 1, 4, 0]) {
        await userEvent.click(trig(canvasElement, i));
        await expectOpenTab(canvasElement, i);
        near(
          box(find(canvasElement, ".hp-myours__list")).height,
          reserve393,
          1
        );
        near(
          box(find(canvasElement, ".hp-myours__photo.is-active picture"))
            .height,
          photo,
          1
        );
      }
      // Narrower: more wrapping, a taller reserve, still the same for every tab.
      await atWidth(320, 700);
      await waitFor(() =>
        expect(px(tabsMinOf(canvasElement))).toBeGreaterThan(reserve393)
      );
      const reserve320 = px(tabsMinOf(canvasElement));
      const narrow = await listHeights(canvasElement);
      narrow.forEach(height => near(height, reserve320, 1));
      noHorizontalOverflow();
      // And back: the reserve follows the width.
      await atWidth(393, 852);
      await waitFor(() => near(px(tabsMinOf(canvasElement)), reserve393, 1));
    } finally {
      await emulateReducedMotion(false);
    }
  },
};
export const ResizeAcrossBreakpoint = {
  name: "Resize across breakpoint",
  globals: { viewport: viewport(1280) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(1280, 900);
    await userEvent.click(trig(canvasElement, 2));
    await expectOpenTab(canvasElement, 2);
    const tab = MAKE_IT_YOURS.tabs[2];
    // Desktop: desktop alt, no reserve.
    await waitFor(() =>
      expect(activeImg(canvasElement).getAttribute("alt")).toBe(tab.desktop.alt)
    );
    await expect(tabsMinOf(canvasElement)).toBe("");
    // 768: stacked. Alt flips, the reserve appears, the open tab is unchanged.
    await atWidth(768, 1024);
    await waitFor(() =>
      expect(activeImg(canvasElement).getAttribute("alt")).toBe(tab.mobile.alt)
    );
    await waitFor(() => expect(tabsMinOf(canvasElement)).toMatch(/^\d+px$/));
    await expectOpenTab(canvasElement, 2);
    // 769: side by side again.
    await atWidth(769, 900);
    await waitFor(() =>
      expect(activeImg(canvasElement).getAttribute("alt")).toBe(tab.desktop.alt)
    );
    await waitFor(() => expect(tabsMinOf(canvasElement)).toBe(""));
    await expectOpenTab(canvasElement, 2);
    near(box(find(canvasElement, ".hp-myours__stage")).height, 865, 1);
    // And once more down to a phone width.
    await atWidth(393, 852);
    await waitFor(() =>
      expect(activeImg(canvasElement).getAttribute("alt")).toBe(tab.mobile.alt)
    );
    await expectOpenTab(canvasElement, 2);
  },
};
