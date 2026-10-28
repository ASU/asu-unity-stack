import React from "react";
import { expect, userEvent, waitFor } from "storybook/test";

import { initHero } from "./hero.js";
import { initVideoControls } from "../video-control/video-control.js";
import {
  environment,
  getStub,
} from "../video-control/video-control-helpers.jsx";
import {
  HERO_HREF,
  HERO_LINK_LABEL,
  Harness,
  VIDEO_SRC,
  emulateReducedMotion,
  forceHover,
  getSource,
  heroHtml,
  maxVideoGray,
  realKeyboard,
  realPointer,
  resizeViewport,
  scrimAlpha,
  walkRules,
} from "./hero-helpers.jsx";
import * as entry from "../../js/index.js";

export default {
  title: "Homepage/Hero",
  beforeEach: () => {
    environment.install();
    return () => environment.restore();
  },
  parameters: {
    docs: {
      description: {
        component:
          "Homepage hero: a full-width muted video banner with the page's only `h1`, a circled-arrow link inside it (only the arrow links; its \"Find out more\" label widens on hover and keyboard focus), one paragraph and the foundations' pause/play control. Phones and tablets (900px and under) get no video: Gray 1 or the poster, and a gold \"Find out more\" button under the copy. The video has no `src`, `autoplay` or `loop` in the markup: `initHero` attaches `data-src` above 900px only (and detaches it when the viewport shrinks), `initVideoControls` plays it (three plays, paused out of view and in a hidden tab, a visitor's pause sticks, no autoplay under reduced motion or without a poster). The control is `hidden` until a source is attached. Height: window minus header minus a 96px peek, between 560 and 1080px (`--hp-hero-header-height` is set by the page; Storybook has no header, so the defaults are the prototype's 147px / 69px). An empty `.hp-hero__assistant` mount and a narrower copy column at 1180px and under leave room for the separate AI assistant ring. `href`, poster and `data-src` are placeholders: `#hero-find-out-more`, an inline SVG poster and an example URL (no media is committed or requested; these stories fake `src`, `play()` and `IntersectionObserver`). Each rendered copy needs a unique video id.",
      },
    },
  },
};

const viewport = width => ({
  viewport: { value: `hp${width}`, isRotated: false },
});

const RING =
  "rgb(255, 255, 255) 0px 0px 0px 2px, rgb(0, 186, 255) 0px 0px 0px 4px";
const GOLD = "rgb(255, 198, 39)";
const GRAY_1 = "rgb(25, 25, 25)";
const TRANSPARENT = "rgba(0, 0, 0, 0)";
const PLAY = "Play the hero video";
const PAUSE = "Pause the hero video";

const near = (actual, expected, tolerance = 1) =>
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(tolerance);

const parts = (canvasElement, id) => {
  const section = canvasElement.querySelector("section.hp-hero");
  const find = selector => section.querySelector(selector);
  return {
    section,
    media: find(".hp-hero__media"),
    video: find(`#${id}`),
    description: find(`#${id}-desc`),
    scrim: find(".hp-hero__scrim"),
    control: find(".hp-hero__control"),
    copy: find(".hp-hero__copy"),
    heading: find(".hp-hero__heading"),
    arrow: find(".hp-hero__arrow"),
    pill: find(".hp-hero__arrow-pill"),
    label: find(".hp-hero__arrow-label"),
    text: find(".hp-hero__text"),
    cta: find(".hp-hero__cta"),
    assistant: find(".hp-hero__assistant"),
  };
};

// Waits for the fakes, then returns the parts with the playback and source records.
const find = async (canvasElement, id) => {
  const p = parts(canvasElement, id);
  await waitFor(() => expect(getStub(p.video)).toBeDefined());
  return { ...p, stub: getStub(p.video), source: getSource(p.video) };
};

const display = element => getComputedStyle(element).display;
const box = element => element.getBoundingClientRect();

const expectPaused = async (control, label = PLAY) => {
  await expect(control.dataset.state).toBe("paused");
  await expect(control.getAttribute("aria-label")).toBe(label);
};
const expectPlaying = async (control, label = PAUSE) => {
  await expect(control.dataset.state).toBe("playing");
  await expect(control.getAttribute("aria-label")).toBe(label);
};

// Everything the markup contract fixes, with or without script.
const expectContract = async p => {
  await expect(p.section.getAttribute("aria-label")).toBe("Featured story");
  await expect(p.section.querySelectorAll("h1")).toHaveLength(1);
  await expect(p.heading.tagName).toBe("H1");
  await expect(p.heading.textContent).toContain(
    "ASU again ranks No. 1 in the US for global impact"
  );
  await expect(p.heading.contains(p.arrow)).toBe(true);
  await expect(p.arrow.tagName).toBe("A");
  await expect(p.arrow.getAttribute("href")).toBe(HERO_HREF);
  await expect(p.arrow.getAttribute("aria-label")).toBe(HERO_LINK_LABEL);
  await expect(p.label.textContent).toBe("Find out more");
  await expect(p.arrow.querySelector("svg").getAttribute("aria-hidden")).toBe(
    "true"
  );
  await expect(p.cta.tagName).toBe("A");
  await expect(p.cta.getAttribute("href")).toBe(HERO_HREF);
  await expect(p.cta.getAttribute("aria-label")).toBe(HERO_LINK_LABEL);
  await expect(p.cta.textContent).toBe("Find out more");
  for (const name of ["btn", "btn-gold", "btn-large"]) {
    await expect(p.cta.classList.contains(name)).toBe(true);
  }
  // video: muted, no autoplay/loop/src, poster, description
  await expect(p.video.tagName).toBe("VIDEO");
  await expect(p.video.hasAttribute("muted")).toBe(true);
  await expect(p.video.hasAttribute("playsinline")).toBe(true);
  await expect(p.video.hasAttribute("autoplay")).toBe(false);
  await expect(p.video.hasAttribute("loop")).toBe(false);
  await expect(p.video.hasAttribute("data-auto")).toBe(true);
  await expect(p.video.getAttribute("data-src")).toBe(VIDEO_SRC);
  await expect(p.video.getAttribute("poster")).toBeTruthy();
  await expect(p.video.getAttribute("aria-describedby")).toBe(p.description.id);
  await expect(p.description.textContent).toBeTruthy();
  await expect(p.description.classList.contains("visually-hidden")).toBe(true);
  // really hidden from sight but still in the accessibility tree (1px clip, not display: none)
  const hidden = getComputedStyle(p.description);
  await expect(hidden.position).toBe("absolute");
  await expect(hidden.width).toBe("1px");
  await expect(hidden.height).toBe("1px");
  await expect(hidden.display).not.toBe("none");
  // control: the foundations' markup, labelled, paused
  await expect(p.control.tagName).toBe("BUTTON");
  await expect(p.control.getAttribute("type")).toBe("button");
  await expect(p.control.classList.contains("mbtn--hero")).toBe(true);
  await expect(p.control.getAttribute("data-for")).toBe(p.video.id);
  await expect(p.control.dataset.labelPlay).toBe(PLAY);
  await expect(p.control.dataset.labelPause).toBe(PAUSE);
  // assistant mount: empty
  await expect(p.assistant.children).toHaveLength(0);
  await expect(p.assistant.textContent).toBe("");
  await expect(p.assistant.hasAttribute("role")).toBe(false);
};

// The hero's own layout (design doc section 3: D7, D8, D9): height, the 48px copy offset, the control.
const expectLayout = async (p, { height, gutter = 48, inset = 0 }) => {
  const s = box(p.section);
  await near(s.height, height, 1);
  await near(s.bottom - box(p.text).bottom, 48, 1);
  await near(box(p.copy).left - s.left, inset, 1);
  await near(box(p.text).left - s.left, inset + gutter, 1);
  const c = box(p.control);
  await near(c.width, 48);
  await near(c.height, 48);
  await near(s.right - c.right, inset + gutter, 1);
  await near(s.bottom - c.bottom, 48, 1);
  // the control sits above the full-width copy
  await expect(
    p.control.contains(
      document.elementFromPoint(c.left + c.width / 2, c.top + c.height / 2)
    )
  ).toBe(true);
};

// --- server markup ---

export const NoScript = {
  name: "No script (server markup)",
  globals: viewport(1440),
  render: () => <Harness manual html={heroHtml({ id: "hero-noscript" })} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement, "hero-noscript");
    await expectContract(p);
    // the markup is the contract: nothing rewrote it
    const template = document.createElement("template");
    template.innerHTML = heroHtml({ id: "hero-noscript" });
    await expect(p.section.outerHTML).toBe(
      template.content.firstElementChild.outerHTML
    );
    // no source, and a control that would do nothing stays hidden
    await expect(p.video.hasAttribute("src")).toBe(false);
    await expect(p.control.hidden).toBe(true);
    await expect(display(p.control)).toBe("none");
    await expect(p.control.dataset.state).toBe("paused");
    await expect(p.control.getAttribute("aria-label")).toBe(PLAY);
    await expect(getComputedStyle(p.media).backgroundColor).toBe(GRAY_1);
  },
};

// --- initialised states ---

export const Default = {
  globals: viewport(1440),
  render: () => <Harness html={heroHtml({ id: "hero-default" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-default");
    await expectContract(p);

    // the source is attached from data-src above 900px, preloaded, and the control appears
    await expect(p.source.sets).toEqual([VIDEO_SRC]);
    await expect(p.video.getAttribute("preload")).toBe("auto");
    await expect(p.video.hasAttribute("src")).toBe(true);
    await expect(p.control.hidden).toBe(false);
    await expect(display(p.control)).toBe("grid");
    await expectPaused(p.control);

    // 1440 x 900: window - 147 header - 96 peek = 657, copy 48px from the bottom, control on the edge
    await expectLayout(p, { height: 657 });

    // headline: 72/66.96, -3%, white; paragraph 16/24 white, 509px column
    const h1 = getComputedStyle(p.heading);
    await expect(h1.fontSize).toBe("72px");
    await expect(h1.lineHeight).toBe("66.96px");
    await expect(h1.letterSpacing).toBe("-2.16px");
    await expect(h1.fontWeight).toBe("700");
    // brand: headings balance their lines, body copy avoids orphans (prototype text-wrap rules)
    await expect(h1.getPropertyValue("text-wrap-style")).toBe("balance");
    await expect(
      getComputedStyle(p.text).getPropertyValue("text-wrap-style")
    ).toBe("pretty");
    await expect(h1.color).toBe("rgb(255, 255, 255)");
    await near(box(p.heading).width, 792, 1);
    const text = getComputedStyle(p.text);
    await expect(text.fontSize).toBe("16px");
    await expect(text.lineHeight).toBe("24px");
    await expect(text.color).toBe("rgb(255, 255, 255)");
    await near(box(p.text).width, 509, 1);
    await near(box(p.text).top - box(p.heading).bottom, 16, 1);

    // layers: media, scrim, copy, control, in that order
    const z = element => parseInt(getComputedStyle(element).zIndex, 10) || 0;
    await expect(z(p.scrim)).toBeGreaterThan(z(p.media));
    await expect(z(p.copy)).toBeGreaterThan(z(p.scrim));
    await expect(z(p.control)).toBeGreaterThan(z(p.copy));
    await expect(getComputedStyle(p.scrim).pointerEvents).toBe("none");
    const v = getComputedStyle(p.video);
    await expect(v.objectFit).toBe("cover");
    await expect(getComputedStyle(p.media).backgroundColor).toBe(GRAY_1);

    // the phone button and the nav order: the pause control comes first, then the arrow
    await expect(display(p.cta)).toBe("none");
    await expect(display(p.arrow)).toBe("inline-block");
    await expect(
      p.control.compareDocumentPosition(p.arrow) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  },
};

const REST_ARROW_ID = "hero-arrow";

const expectArrowRest = async p => {
  const a = getComputedStyle(p.pill);
  await expect(a.backgroundColor).toBe(TRANSPARENT);
  await expect(a.color).toBe(GOLD);
  await expect(a.borderTopWidth).toBe("2px");
  await expect(a.borderTopStyle).toBe("solid");
  await expect(a.borderTopColor).toBe(GOLD);
  await expect(a.boxSizing).toBe("border-box");
  // the link keeps its 32px box; the pill is out of flow and starts at the same size
  await near(box(p.arrow).width, 32, 0.5);
  await near(box(p.arrow).height, 32, 0.5);
  await near(box(p.pill).width, 32, 1);
  await near(box(p.pill).height, 32, 0.5);
  await expect(getComputedStyle(p.pill).position).toBe("absolute");
  await expect(a.fontSize).toBe("16px");
  await expect(getComputedStyle(p.arrow).marginLeft).toBe("16px");
  const l = getComputedStyle(p.label);
  await expect(l.maxWidth).toBe("0px");
  await expect(l.opacity).toBe("0");
  await expect(l.overflow).toBe("hidden");
};

const expectArrowActive = async p => {
  await waitFor(() => expect(getComputedStyle(p.label).maxWidth).toBe("150px"));
  await waitFor(() => expect(getComputedStyle(p.label).opacity).toBe("1"));
  await waitFor(() =>
    expect(getComputedStyle(p.pill).backgroundColor).toBe(GOLD)
  );
  const a = getComputedStyle(p.pill);
  // the link's own box never changes: only the pill grows
  await near(box(p.arrow).width, 32, 0.5);
  await expect(box(p.pill).width).toBeGreaterThan(100);
  await expect(a.color).toBe(GRAY_1);
  await expect(a.paddingLeft).toBe("14px");
  await expect(getComputedStyle(p.label).marginRight).toBe("8px");
  await expect(a.textDecorationLine).toBe("none");
};

const settle = async p => {
  await Promise.all(
    p.arrow
      .getAnimations({ subtree: true })
      .map(animation => animation.finished)
  );
};

export const Hover = {
  globals: viewport(1440),
  render: () => <Harness html={heroHtml({ id: REST_ARROW_ID })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, REST_ARROW_ID);
    await expectArrowRest(p);
    // the 48px hit area around the 32px circle
    const before = getComputedStyle(p.arrow, "::before");
    await near(parseFloat(before.width), 48, 0.5);
    await near(parseFloat(before.height), 48, 0.5);

    // the story pins the hover state with the package's own :hover rules (no pointer needed)
    forceHover(p.arrow);
    await expectArrowActive(p);
    forceHover(p.arrow, false);
    await settle(p);
    await expectArrowRest(p);

    if (!realPointer.available) return;

    // a real pointer
    await realPointer.hover(p.arrow);
    await expectArrowActive(p);
    // the label widens in 0.35s (opacity .25s, padding .3s) for visitors without a motion preference
    const label = getComputedStyle(p.label);
    await expect(label.transitionProperty).toBe(
      "max-width, opacity, margin-right"
    );
    await expect(label.transitionDuration).toBe("0.35s, 0.25s, 0.35s");
    await expect(getComputedStyle(p.pill).transitionProperty).toBe("padding");
    await expect(getComputedStyle(p.pill).transitionDuration).toBe("0.3s");
    await realPointer.unhover(p.arrow);
    await settle(p);
    await expectArrowRest(p);

    // the widening never reflows the headline: its height is the same at rest and while hovered
    for (const width of [901, 1024, 1180, 1440]) {
      await resizeViewport(width, 900);
      await expect(window.innerWidth).toBe(width);
      await settle(p);
      const rest = box(p.heading).height;
      forceHover(p.arrow);
      await settle(p);
      await near(box(p.heading).height, rest, 0.5);
      forceHover(p.arrow, false);
      await settle(p);
    }
  },
};

export const FocusVisible = {
  globals: viewport(1440),
  render: () => <Harness html={heroHtml({ id: "hero-focus" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-focus");
    const activations = [];
    const onClick = event => {
      activations.push(event.target.closest("a, button"));
      event.preventDefault();
    };
    document.addEventListener("click", onClick, true);
    try {
      await realKeyboard.press("{Escape}");
      // 1: the pause control, 2: the circled arrow; the phone button is not rendered
      await userEvent.tab();
      await expect(document.activeElement).toBe(p.control);
      await waitFor(() =>
        expect(getComputedStyle(p.control).opacity).toBe("1")
      );
      await expect(getComputedStyle(p.control).boxShadow).toBe(RING);

      await userEvent.tab();
      await expect(document.activeElement).toBe(p.arrow);
      await expect(p.arrow.matches(":focus-visible")).toBe(true);
      await expectArrowActive(p);
      // the ring sits on the pill (it grows), not on the 32px link box
      await expect(getComputedStyle(p.arrow).boxShadow).toBe("none");
      const style = getComputedStyle(p.pill);
      await expect(style.boxShadow).toBe(RING);
      await expect(style.outlineStyle).toBe("solid");
      await expect(style.outlineWidth).toBe("2px");
      await expect(style.outlineColor).toBe(TRANSPARENT);

      // Enter is the native activation (navigation is cancelled by the test)
      await userEvent.keyboard("{Enter}");
      await expect(activations).toEqual([p.arrow]);

      // the next Tab leaves the section (the phone button is display: none)
      await userEvent.tab();
      await expect(p.section.contains(document.activeElement)).toBe(false);

      // brand QA precedent: focus by mouse shows no ring (the arrow also stays at rest after leaving)
      if (realPointer.available) {
        await realPointer.click(p.arrow);
        await expect(document.activeElement).toBe(p.arrow);
        await expect(p.arrow.matches(":focus-visible")).toBe(false);
        await expect(getComputedStyle(p.arrow).boxShadow).toBe("none");
        await expect(getComputedStyle(p.pill).boxShadow).toBe("none");
        await realPointer.unhover(p.arrow);
        p.arrow.blur();
        await realKeyboard.press("{Escape}");
      }
    } finally {
      document.removeEventListener("click", onClick, true);
    }
  },
};

// --- phones and tablets: no video ---

const expectNoVideo = async (p, { width, gutter, h1, lineHeight }) => {
  await expect(window.innerWidth).toBe(width);
  // nothing was attached or loaded: the poster paints over Gray 1
  await expect(p.source.sets).toEqual([]);
  await expect(p.source.loads).toBe(0);
  await expect(p.video.hasAttribute("src")).toBe(false);
  await expect(p.video.getAttribute("poster")).toBeTruthy();
  await expect(display(p.video)).toBe("block");
  await near(box(p.video).width, box(p.section).width, 1);
  await near(box(p.video).height, box(p.section).height, 1);
  await expect(getComputedStyle(p.media).backgroundColor).toBe(GRAY_1);
  // no control, no circled arrow; the gold button under the copy
  await expect(p.control.hidden).toBe(true);
  await expect(display(p.control)).toBe("none");
  await expect(display(p.arrow)).toBe("none");
  await expect(display(p.cta)).toBe("inline-block");
  await near(box(p.cta).height, 44, 1);
  await near(box(p.cta).left - box(p.section).left, gutter, 1);
  await expect(getComputedStyle(p.cta).backgroundColor).toBe(GOLD);
  await expect(box(p.cta).top).toBeGreaterThan(box(p.text).bottom);
  await near(box(p.cta).top - box(p.text).bottom, 24, 1);
  // the hero fills the screen under the header (69px compact header default)
  await near(box(p.section).height, window.innerHeight - 69, 1);
  const style = getComputedStyle(p.heading);
  await expect(style.fontSize).toBe(h1);
  await expect(style.lineHeight).toBe(lineHeight);
  // the copy sits at the bottom of the screen
  await near(box(p.section).bottom - box(p.cta).bottom, 32, 1);
  // the gutter
  await near(box(p.heading).left - box(p.section).left, gutter, 1);
};

export const Phone393 = {
  name: "Phone 393",
  globals: viewport(393),
  render: () => <Harness html={heroHtml({ id: "hero-phone" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-phone");
    await expectContract(p);
    await expectNoVideo(p, {
      width: 393,
      gutter: 24,
      h1: "36px",
      lineHeight: "40px",
    });
    await expect(getComputedStyle(p.text).marginTop).toBe("12px");
    await expect(getComputedStyle(p.text).fontSize).toBe("16px");
    // nothing sticks out sideways
    await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(393);
    // 320px wide: the no-wrap "global impact" still fits inside the gutters
    if (!realPointer.available) return;
    await resizeViewport(320, 568);
    await expect(window.innerWidth).toBe(320);
    await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(320);
    await expect(box(p.heading).right).toBeLessThanOrEqual(320 - 24 + 1);
    await expect(
      box(p.heading.querySelector(".text-nowrap")).right
    ).toBeLessThanOrEqual(320 - 24 + 1);
  },
};

export const Tablet768 = {
  name: "Tablet 768",
  globals: viewport(768),
  render: () => <Harness html={heroHtml({ id: "hero-tablet" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-tablet");
    await expectNoVideo(p, {
      width: 768,
      gutter: 48,
      h1: "49.92px",
      lineHeight: "52.416px",
    });
    await expect(getComputedStyle(p.text).marginTop).toBe("16px");
  },
};

// --- desktop sizes ---

export const Desktop1280 = {
  name: "Desktop 1280",
  globals: viewport(1280),
  render: () => <Harness html={heroHtml({ id: "hero-1280" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-1280");
    // 800 - 147 - 96 = 557, under the 560px minimum
    await expectLayout(p, { height: 560 });
    await expect(getComputedStyle(p.heading).fontSize).toBe("72px");
    await expect(p.control.hidden).toBe(false);
  },
};

export const Large1920 = {
  name: "Large 1920",
  globals: viewport(1920),
  render: () => <Harness html={heroHtml({ id: "hero-1920" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-1920");
    // 1080 - 147 - 96 = 837
    await expectLayout(p, { height: 837 });
    await expect(getComputedStyle(p.heading).fontSize).toBe("72px");
    await near(box(p.heading).width, 792, 1);
  },
};

export const UltraWide2560 = {
  name: "Ultra-wide 2560",
  globals: viewport(2560),
  render: () => <Harness html={heroHtml({ id: "hero-2560" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-2560");
    // 1440 - 147 - 96 = 1197, capped at 1080; the copy and control anchor to the centered 1920 stage
    const stageEdge = (box(p.section).width - 1920) / 2;
    await expectLayout(p, { height: 1080, inset: stageEdge });
    await near(box(p.copy).width, 1920, 1);
    // the media stays full-bleed
    await near(box(p.video).width, box(p.section).width, 1);
  },
};

export const HeightRule = {
  name: "Height rule",
  globals: viewport(1440),
  render: () => <Harness html={heroHtml({ id: "hero-height" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-height");
    await near(box(p.section).height, 657, 1);
    // the page supplies the real header height
    p.section.style.setProperty("--hp-hero-header-height", "100px");
    await near(box(p.section).height, 704, 1);
    p.section.style.removeProperty("--hp-hero-header-height");
    // the minimum, and the maximum
    await expect(getComputedStyle(p.section).minHeight).toBe("657px");
    if (!realPointer.available) return;
    for (const [height, expected] of [
      [600, 560],
      [900, 657],
      [1200, 957],
      [1400, 1080],
    ]) {
      await resizeViewport(1440, height);
      await expect(window.innerHeight).toBe(height);
      await near(box(p.section).height, expected, 1);
    }
    // under 1080px wide the header default is the compact 69px: 768 - 69 - 96 = 603
    await resizeViewport(1024, 768);
    await near(box(p.section).height, 603, 1);
  },
};

// --- playback (the foundations' control drives the video; the hero attaches the source) ---

const STOPPED_ID_A = "hero-play-a";
const STOPPED_ID_B = "hero-play-b";

const runPlayBudget = async (canvasElement, id) => {
  const p = await find(canvasElement, id);
  await expect(p.source.sets).toEqual([VIDEO_SRC]);
  await expectPaused(p.control);
  await expect(p.stub.calls.play).toBe(0);

  // in view: autoplays
  environment.emit(p.video, 0.6);
  await expectPlaying(p.control);
  await expect(p.stub.calls.play).toBe(1);

  // three plays, then it stops on its first frame
  p.stub.finish();
  await expectPlaying(p.control);
  p.stub.finish();
  await expectPlaying(p.control);
  p.stub.finish();
  await expectPaused(p.control);
  await expect(p.video.currentTime).toBe(0);
  await expect(p.stub.calls.play).toBe(3);

  // pressing play plays once more, then it stops again
  await userEvent.click(p.control);
  await expectPlaying(p.control);
  p.stub.finish();
  await expectPaused(p.control);
  await expect(p.stub.calls.play).toBe(4);
  return p;
};

export const PlayBudget = {
  name: "Play budget",
  globals: viewport(1440),
  render: () => <Harness html={heroHtml({ id: STOPPED_ID_A })} />,
  play: async ({ canvasElement }) => {
    const p = await runPlayBudget(canvasElement, STOPPED_ID_A);
    await expect(p.video.currentTime).toBe(0);
  },
};

// The two inits can run in either order (Drupal behaviours have no guaranteed order).
export const PlayBudgetControlsFirst = {
  name: "Play budget (controls first)",
  globals: viewport(1440),
  render: () => <Harness controlsFirst html={heroHtml({ id: STOPPED_ID_B })} />,
  play: async ({ canvasElement }) => {
    await runPlayBudget(canvasElement, STOPPED_ID_B);
  },
};

export const OutOfViewAndVisitor = {
  name: "Out of view, hidden tab, visitor pause",
  globals: viewport(1440),
  render: () => <Harness html={heroHtml({ id: "hero-view" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-view");
    environment.emit(p.video, 1);
    await expectPlaying(p.control);

    // out of view: paused where it is; back in view: resumes
    environment.emit(p.video, 0);
    await expectPaused(p.control);
    environment.emit(p.video, 1);
    await expectPlaying(p.control);

    // a hidden tab pauses it, the tab return resumes it
    environment.hide();
    await expectPaused(p.control);
    environment.show();
    await expectPlaying(p.control);

    // the visitor's pause sticks through scrolling away and back
    await userEvent.click(p.control);
    await expectPaused(p.control);
    environment.emit(p.video, 0);
    environment.emit(p.video, 1);
    await expectPaused(p.control);
    const calls = p.stub.calls.play;
    environment.hide();
    environment.show();
    await expectPaused(p.control);
    await expect(p.stub.calls.play).toBe(calls);

    // the control toggles its name and pressing play plays
    await userEvent.click(p.control);
    await expectPlaying(p.control);
  },
};

// A source attached after the observer reported (a later breakpoint crossing, either init order):
// `loadeddata` starts the autoplay that the missing source prevented.
export const SourceAttachedLater = {
  name: "Source attached later",
  globals: viewport(1440),
  render: () => <Harness html={heroHtml({ id: "hero-late" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-late");
    p.stub.rejectNextPlay();
    environment.emit(p.video, 1);
    await expectPaused(p.control);
    p.video.dispatchEvent(new Event("loadeddata"));
    await expectPlaying(p.control);
  },
};

// --- reduced motion ---

export const ReducedMotion = {
  name: "Reduced motion",
  globals: viewport(1440),
  beforeEach: () => {
    environment.setReducedMotion(true);
  },
  render: () => <Harness html={heroHtml({ id: "hero-reduced" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-reduced");
    // the source is attached (Play works) but not preloaded, and nothing autoplays
    await expect(p.source.sets).toEqual([VIDEO_SRC]);
    await expect(p.video.getAttribute("preload")).toBe("none");
    await expect(p.control.hidden).toBe(false);
    environment.emit(p.video, 1);
    await expectPaused(p.control);
    await expect(p.stub.calls.play).toBe(0);
    await userEvent.click(p.control);
    await expectPlaying(p.control);

    // the arrow label widens without a transition (CSSOM: transitions only inside no-preference)
    const plain = [];
    const gated = [];
    walkRules((rule, conditions) => {
      if (!/\.hp-hero__arrow/.test(rule.selectorText)) return;
      if (!rule.style.transitionProperty) return;
      (conditions.some(c => /prefers-reduced-motion:\s*no-preference/.test(c))
        ? gated
        : plain
      ).push(rule.selectorText);
    });
    await expect(plain).toEqual([]);
    await expect(gated.length).toBeGreaterThan(0);
    if (!realPointer.available) return;
    await emulateReducedMotion(true);
    try {
      await expect(getComputedStyle(p.label).transitionDuration).toBe("0s");
      await expect(getComputedStyle(p.pill).transitionDuration).toBe("0s");
      forceHover(p.arrow);
      await expect(getComputedStyle(p.label).maxWidth).toBe("150px");
      forceHover(p.arrow, false);
    } finally {
      await emulateReducedMotion(false);
    }
  },
};

export const PreferenceChange = {
  name: "Reduced motion preference changes",
  globals: viewport(1440),
  render: () => <Harness html={heroHtml({ id: "hero-pref" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-pref");
    await expect(p.video.getAttribute("preload")).toBe("auto");
    environment.emit(p.video, 1);
    await expectPlaying(p.control);

    // turning reduce on re-syncs preload and stops what the page started
    environment.setReducedMotion(true);
    await expect(p.video.getAttribute("preload")).toBe("none");
    await expectPaused(p.control);
    await expect(p.video.hasAttribute("src")).toBe(true);

    // turning it off restores preload; the in-view video autoplays again
    environment.setReducedMotion(false);
    await expect(p.video.getAttribute("preload")).toBe("auto");
    await expectPlaying(p.control);
    await expect(p.source.sets).toEqual([VIDEO_SRC]);
  },
};

let warnings = [];

export const NoPoster = {
  name: "No poster",
  globals: viewport(1440),
  beforeEach: () => {
    warnings = [];
    // eslint-disable-next-line no-console
    const original = console.warn;
    // eslint-disable-next-line no-console
    console.warn = (...args) => {
      if (String(args[0]).includes("[video-controls]")) warnings.push(args);
      else original(...args);
    };
    return () => {
      // eslint-disable-next-line no-console
      console.warn = original;
    };
  },
  render: () => (
    <Harness html={heroHtml({ id: "hero-noposter", poster: false })} />
  ),
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-noposter");
    await expect(p.video.hasAttribute("poster")).toBe(false);
    await expect(warnings.length).toBe(1);
    await expect(String(warnings[0][0])).toContain("hero-noposter");
    // Gray 1 surface, no autoplay, the control still works
    await expect(getComputedStyle(p.media).backgroundColor).toBe(GRAY_1);
    environment.emit(p.video, 1);
    await expectPaused(p.control);
    await expect(p.stub.calls.play).toBe(0);
    await userEvent.click(p.control);
    await expectPlaying(p.control);
  },
};

// --- breakpoint behaviour ---

export const BreakpointCrossing = {
  name: "Breakpoint crossing",
  globals: viewport(1024),
  render: () => <Harness html={heroHtml({ id: "hero-cross" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-cross");
    await expect(p.source.sets).toEqual([VIDEO_SRC]);
    await expect(p.control.hidden).toBe(false);

    // one query for the switch: JS reads max-width 900px, the stylesheet has no min-width 901px rule,
    // so no width (900.5px under zoom) falls between a phone and a desktop layout
    let phoneRules = 0;
    const gaps = [];
    walkRules((rule, conditions) => {
      if (!/\.hp-hero/.test(rule.selectorText)) return;
      if (conditions.some(c => /min-width:\s*901px/.test(c)))
        gaps.push(rule.selectorText);
      if (conditions.some(c => /max-width:\s*900px/.test(c))) phoneRules += 1;
    });
    await expect(gaps).toEqual([]);
    await expect(phoneRules).toBeGreaterThan(0);

    if (!realPointer.available) return;

    // a visitor pause survives the round trip
    environment.emit(p.video, 1);
    await expectPlaying(p.control);
    await userEvent.click(p.control);
    await expectPaused(p.control);
    const calls = p.stub.calls.play;

    // 900: the source is removed, the control hidden, no reload
    await resizeViewport(900, 768);
    await expect(window.innerWidth).toBe(900);
    await waitFor(() => expect(p.video.hasAttribute("src")).toBe(false));
    await expect(p.source.removes).toBe(1);
    await expect(p.source.loads).toBe(1);
    await expect(p.control.hidden).toBe(true);
    await expect(display(p.control)).toBe("none");
    await expect(display(p.arrow)).toBe("none");
    await expect(display(p.cta)).toBe("inline-block");

    // 901: attached again, the control back
    await resizeViewport(901, 768);
    await expect(window.innerWidth).toBe(901);
    await waitFor(() => expect(p.video.hasAttribute("src")).toBe(true));
    await expect(p.source.sets).toEqual([VIDEO_SRC, VIDEO_SRC]);
    await expect(p.control.hidden).toBe(false);
    await expect(display(p.cta)).toBe("none");
    // the late source does not override the visitor's pause
    p.video.dispatchEvent(new Event("loadeddata"));
    await expectPaused(p.control);
    await expect(p.stub.calls.play).toBe(calls);

    // a source that fails to load re-hides the control; the next attach shows it again
    p.video.dispatchEvent(new Event("error"));
    await expect(p.control.hidden).toBe(true);
    await resizeViewport(900, 768);
    await waitFor(() => expect(p.video.hasAttribute("src")).toBe(false));
    await resizeViewport(1024, 768);
    await waitFor(() => expect(p.control.hidden).toBe(false));

    // keyboard focus on the control moves to the visible link when the control goes away
    p.control.focus();
    await expect(document.activeElement).toBe(p.control);
    await resizeViewport(900, 768);
    await waitFor(() => expect(document.activeElement).toBe(p.cta));
  },
};

// A video that was in view while it had no source (phone width) autoplays once the source is attached
// and loaded; the stub rejects play() without a source, like a browser.
export const LateAttachAutoplay = {
  name: "Late attach autoplays",
  globals: viewport(768),
  render: () => <Harness html={heroHtml({ id: "hero-late-attach" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-late-attach");
    await expect(p.video.hasAttribute("src")).toBe(false);
    environment.emit(p.video, 1);
    await expectPaused(p.control);
    if (!realPointer.available) return;
    await resizeViewport(1024, 768);
    await waitFor(() => expect(p.video.hasAttribute("src")).toBe(true));
    await expectPaused(p.control);
    // the browser fires loadeddata once the new source has its first frame
    p.video.dispatchEvent(new Event("loadeddata"));
    await expectPlaying(p.control);
    await expect(p.stub.calls.play).toBe(1);
  },
};

// The page swaps the clip: a new data-src is attached, an empty or unsafe one detaches.
export const SourceChange = {
  name: "Source change",
  globals: viewport(1440),
  render: () => <Harness html={heroHtml({ id: "hero-change" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-change");
    const next = "https://media.example.com/next.mp4";
    await expect(p.source.sets).toEqual([VIDEO_SRC]);
    p.video.setAttribute("data-src", next);
    await waitFor(() => expect(p.source.sets).toEqual([VIDEO_SRC, next]));
    await expect(p.control.hidden).toBe(false);

    p.video.setAttribute("data-src", "");
    await waitFor(() => expect(p.video.hasAttribute("src")).toBe(false));
    await expect(p.control.hidden).toBe(true);

    p.video.setAttribute("data-src", "javascript:alert(1)");
    await new Promise(resolve => {
      setTimeout(resolve, 50);
    });
    await expect(p.video.hasAttribute("src")).toBe(false);
    await expect(p.control.hidden).toBe(true);

    p.video.setAttribute("data-src", VIDEO_SRC);
    await waitFor(() => expect(p.video.hasAttribute("src")).toBe(true));
    await expect(p.control.hidden).toBe(false);
  },
};

// --- script contract ---

export const InitContract = {
  name: "Init contract",
  globals: viewport(1440),
  render: () => (
    <Harness
      manual
      html={
        heroHtml({ id: "hero-init-ok" }) +
        heroHtml({ id: "hero-init-empty", dataSrc: " " }) +
        heroHtml({ id: "hero-init-js", dataSrc: "javascript:alert(1)" }) +
        heroHtml({
          id: "hero-init-data",
          dataSrc: "data:video/mp4;base64,AAAA",
        }) +
        heroHtml({ id: "hero-init-rel", dataSrc: "/media/hero.mp4" })
      }
    />
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() =>
      expect(
        getSource(canvasElement.querySelector("#hero-init-ok"))
      ).toBeDefined()
    );
    const videos = ["ok", "empty", "js", "data", "rel"].map(name =>
      canvasElement.querySelector(`#hero-init-${name}`)
    );
    // init twice: idempotent
    const destroy = initHero(canvasElement);
    const again = initHero(canvasElement);
    try {
      const sets = videos.map(video => getSource(video).sets);
      // only an http(s) URL is attached; empty, javascript: and data: are skipped; a relative URL resolves
      await expect(sets[0]).toEqual([VIDEO_SRC]);
      await expect(sets[1]).toEqual([]);
      await expect(sets[2]).toEqual([]);
      await expect(sets[3]).toEqual([]);
      await expect(sets[4]).toEqual([
        `${window.location.origin}/media/hero.mp4`,
      ]);
      // controls stay hidden where nothing was attached
      const controls = Array.from(
        canvasElement.querySelectorAll(".hp-hero__control")
      );
      await expect(controls.map(control => control.hidden)).toEqual([
        false,
        true,
        true,
        true,
        false,
      ]);
      // the entry point exports it next to the other inits
      await expect(entry.initHero === initHero).toBe(true);
      await expect(entry.initVideoControls === initVideoControls).toBe(true);
    } finally {
      destroy();
      again();
    }
  },
};

// --- stylesheet and a11y contracts ---

export const StylesheetContract = {
  name: "Stylesheet contract",
  globals: viewport(1440),
  render: () => <Harness html={heroHtml({ id: "hero-css" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-css");
    // forced colors: the scrim goes and the copy sits on system colors
    let forcedCopy = null;
    let forcedScrim = null;
    walkRules((rule, conditions) => {
      if (!conditions.some(c => /forced-colors:\s*active/.test(c))) return;
      if (rule.selectorText === ".hp-hero__copy") forcedCopy = rule;
      if (rule.selectorText === ".hp-hero__scrim") forcedScrim = rule;
    });
    await expect(forcedCopy).not.toBeNull();
    await expect(forcedCopy.style.backgroundColor).toBe("canvas");
    await expect(forcedCopy.style.color).toBe("canvastext");
    await expect(forcedScrim.style.display).toBe("none");

    // the ring is set once (custom properties) and applied on keyboard focus only
    const ring = [];
    walkRules(rule => {
      if (!/\.hp-hero/.test(rule.selectorText)) return;
      if (
        rule.style.boxShadow &&
        rule.style.boxShadow !== "none" &&
        !rule.selectorText.includes(":not(:focus-visible)")
      )
        ring.push(rule.selectorText);
    });
    await expect(ring.every(s => s.includes(":focus-visible"))).toBe(true);
    await expect(ring.length).toBeGreaterThan(0);
    await expect(
      getComputedStyle(p.section)
        .getPropertyValue("--hp-hero-ring-inner")
        .trim()
    ).not.toBe("");

    // scrim stops (prototype P:749)
    await expect(getComputedStyle(p.scrim).backgroundImage).toBe(
      "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.55) 100%)"
    );
  },
};

// The scrim must keep white text AA over the brightest video the design tolerates (design doc section 8).
// This is arithmetic over the real stops and the measured line positions; real frames of the hosted
// clip are measured by brand (B6) before WWWCMS-232 is accepted.
export const ContrastBudget = {
  name: "Contrast budget",
  globals: viewport(1280),
  render: () => <Harness html={heroHtml({ id: "hero-contrast" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-contrast");
    const stops = getComputedStyle(p.scrim)
      .backgroundImage.match(/rgba\(0, 0, 0, ([\d.]+)\)/g)
      .map(stop => parseFloat(stop.match(/([\d.]+)\)$/)[1]));
    await expect(stops).toEqual([0.1, 0.05, 0.55]);

    const s = box(p.section);
    const at = y => scrimAlpha((y - s.top) / s.height, stops);
    const allowed = (y, ratio) => maxVideoGray(at(y), ratio) / 255;
    // 1280 x 800: the hero is 560px tall, the weakest case
    const headingTop = allowed(box(p.heading).top, 3);
    const textTop = allowed(box(p.text).top, 4.5);
    await expect(headingTop).toBeGreaterThanOrEqual(0.6);
    await expect(textTop).toBeGreaterThanOrEqual(0.73);
    await expect(allowed(box(p.heading).bottom, 3)).toBeGreaterThanOrEqual(
      0.88
    );
    await expect(allowed(box(p.text).bottom, 4.5)).toBeGreaterThanOrEqual(0.88);
    // the gold arrow border (3:1 non-text, composite gray <= 115)
    const arrowRatio = 115 / 255 / (1 - at(box(p.arrow).top));
    await expect(arrowRatio).toBeGreaterThanOrEqual(0.6);
  },
};

export const AssistantAllowance = {
  name: "AI assistant allowance",
  globals: viewport(1024),
  render: () => <Harness html={heroHtml({ id: "hero-assistant" })} />,
  play: async ({ canvasElement }) => {
    const p = await find(canvasElement, "hero-assistant");
    // an empty mount: zero size, no role, no pointer events over the copy
    const a = box(p.assistant);
    await expect(a.width).toBe(0);
    await expect(a.height).toBe(0);
    await expect(getComputedStyle(p.assistant).pointerEvents).toBe("none");
    // 1180px and under: the headline is 9.2em and the paragraph 460px so a ring cannot cover them
    const fontSize = parseFloat(getComputedStyle(p.heading).fontSize);
    await near(box(p.heading).width, fontSize * 9.2, 1);
    await near(box(p.text).width, 460, 1);
    await near(fontSize, 57.6, 0.1);
    await near(box(p.section).height, 603, 1);
  },
};
