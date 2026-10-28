import React from "react";
import { expect, userEvent, waitFor } from "storybook/test";

import { initVideoControls } from "./video-control.js";
import * as entry from "../../js/index.js";
import {
  addControl,
  environment,
  forceHover,
  frameHtml,
  getStub,
  Harness,
  realPointer,
  stubPlayback,
} from "./video-control-helpers.jsx";

export default {
  title: "Foundations/Video control",
  beforeEach: () => {
    environment.install();
    return () => environment.restore();
  },
  parameters: {
    docs: {
      description: {
        component:
          'Shared play/pause control for homepage videos. Markup: `<button type="button" class="mbtn [mbtn--hero]" data-for="<video id>" data-state="paused" data-label-play="..." data-label-pause="..." aria-label="...">` plus two `aria-hidden` inline SVG icons (`.mbtn__icon--play`, `.mbtn__icon--pause`; Font Awesome Free 6.4.2 solid play and pause, CC BY 4.0). Server markup is always `paused` with the Play label. The video is `muted playsinline` (no `loop`, no `autoplay`, `preload="none"`), has a `poster` and an `aria-describedby` description; `data-auto` lets the controller autoplay it, `data-plays` sets the play budget (default 3). Call `initVideoControls(root)` once the markup is in the page. These stories swap `play()`/`pause()` on each video instance for a silent fake and fake `IntersectionObserver`, `matchMedia` and `document.hidden`, so no media is needed.',
      },
    },
  },
};

const NATIVE_PLAY = HTMLMediaElement.prototype.play;
const PLAY = "Play the career video";
const PAUSE = "Pause the career video";

const find = async (canvasElement, id) => {
  const video = canvasElement.querySelector(`#${id}`);
  await waitFor(() => expect(getStub(video)).toBeDefined());
  return {
    video,
    button: canvasElement.querySelector(`.mbtn[data-for="${id}"]`),
    stub: getStub(video),
  };
};

const display = (button, which) =>
  getComputedStyle(button.querySelector(`.mbtn__icon--${which}`)).display;

const expectPaused = async (button, label = PLAY) => {
  await expect(button.dataset.state).toBe("paused");
  await expect(button.getAttribute("aria-label")).toBe(label);
  await expect(display(button, "play")).toBe("block");
  await expect(display(button, "pause")).toBe("none");
};

const expectPlaying = async (button, label = PAUSE) => {
  await expect(button.dataset.state).toBe("playing");
  await expect(button.getAttribute("aria-label")).toBe(label);
  await expect(display(button, "play")).toBe("none");
  await expect(display(button, "pause")).toBe("block");
};

// Contract: size, colors, ring, icon size, rest opacity, hit area.
const expectAppearance = async (button, { hero = false } = {}) => {
  const size = hero ? 48 : 32;
  const style = getComputedStyle(button);
  await expect(style.width).toBe(`${size}px`);
  await expect(style.height).toBe(`${size}px`);
  await expect(style.borderRadius).toBe("50%");
  // $asu-gray-6 fill, $asu-gray-5 ring (1.333px; Chrome snaps it to whole device pixels), $asu-gray-1 icon
  await expect(style.backgroundColor).toBe("rgb(232, 232, 232)");
  await expect(style.borderTopColor).toBe("rgb(208, 208, 208)");
  await expect(parseFloat(style.borderTopWidth)).toBeGreaterThanOrEqual(1);
  await expect(parseFloat(style.borderTopWidth)).toBeLessThanOrEqual(1.34);
  const icon = getComputedStyle(button.querySelector(".mbtn__icon--play"));
  await expect(icon.color).toBe("rgb(25, 25, 25)");
  // Font Awesome glyph: height = the prototype font-size, width follows the 384x512 viewBox
  const glyph = button
    .querySelector(".mbtn__icon--play")
    .getBoundingClientRect();
  await expect(icon.height).toBe(`${hero ? 16 : 12}px`);
  await expect(glyph.height).toBeCloseTo(hero ? 16 : 12, 2);
  await expect(glyph.width).toBeCloseTo(hero ? 12 : 9, 2);
  await expect(style.cursor).toBe("pointer");
  await expect(style.opacity).toBe("0.5");
};

// An invisible 48x48 hit area centered on the control, through ::after.
const expectHitArea = async button => {
  const after = getComputedStyle(button, "::after");
  await expect(parseFloat(after.width)).toBeGreaterThanOrEqual(48);
  await expect(parseFloat(after.height)).toBeGreaterThanOrEqual(48);
  const box = button.getBoundingClientRect();
  const x = box.left + box.width / 2;
  const y = box.top + box.height / 2;
  const hits = (dx, dy) =>
    button.contains(document.elementFromPoint(x + dx, y + dy));
  for (const [dx, dy] of [
    [23, 0],
    [-23, 0],
    [0, 23],
    [0, -23],
  ]) {
    await expect(hits(dx, dy)).toBe(true);
  }
  for (const [dx, dy] of [
    [27, 0],
    [-27, 0],
    [0, 27],
    [0, -27],
  ]) {
    await expect(hits(dx, dy)).toBe(false);
  }
};

// Markup contract for one control and its video.
const expectContract = async (canvasElement, id, { hero = false } = {}) => {
  const video = canvasElement.querySelector(`#${id}`);
  const button = canvasElement.querySelector(`.mbtn[data-for="${id}"]`);
  await expect(button.tagName).toBe("BUTTON");
  await expect(button.getAttribute("type")).toBe("button");
  await expect(button.classList.contains("mbtn--hero")).toBe(hero);
  await expect(button.dataset.state).toBe("paused");
  await expect(button.getAttribute("aria-label")).toBe(
    button.dataset.labelPlay
  );
  await expect(button.dataset.labelPause).toBeTruthy();
  const icons = button.querySelectorAll("svg");
  await expect(icons.length).toBe(2);
  for (const icon of icons) {
    await expect(icon.getAttribute("aria-hidden")).toBe("true");
    await expect(icon.getAttribute("focusable")).toBe("false");
  }
  // Font Awesome Free 6.4.2 solid play / pause viewBoxes
  await expect(
    button.querySelector(".mbtn__icon--play").getAttribute("viewBox")
  ).toBe("0 0 384 512");
  await expect(
    button.querySelector(".mbtn__icon--pause").getAttribute("viewBox")
  ).toBe("0 0 320 512");

  await expect(video.muted).toBe(true);
  await expect(video.hasAttribute("muted")).toBe(true);
  await expect(video.hasAttribute("playsinline")).toBe(true);
  await expect(video.hasAttribute("loop")).toBe(false);
  await expect(video.hasAttribute("autoplay")).toBe(false);
  await expect(video.getAttribute("preload")).toBe(hero ? "metadata" : "none");
  await expect(video.getAttribute("poster")).toBeTruthy();
  await expect(video.querySelector("source")).toBeNull();
  await expect(
    document.getElementById(video.getAttribute("aria-describedby")).textContent
  ).toBeTruthy();
};

// --- visual states ---

export const Rest = {
  render: () => <Harness html={frameHtml({ id: "v-rest" })} />,
  play: async ({ canvasElement }) => {
    const { button } = await find(canvasElement, "v-rest");
    await expectContract(canvasElement, "v-rest");
    await expectAppearance(button);
    await expectPaused(button);
    await expectHitArea(button);

    // the rest opacity is the --mbtn-rest-opacity custom property
    button.style.setProperty("--mbtn-rest-opacity", "80%");
    await waitFor(() => expect(getComputedStyle(button).opacity).toBe("0.8"));
    button.style.removeProperty("--mbtn-rest-opacity");
    await waitFor(() => expect(getComputedStyle(button).opacity).toBe("0.5"));

    // transitions (users without a reduced-motion preference)
    const style = getComputedStyle(button);
    await expect(style.transitionProperty).toBe("opacity, transform");
    await expect(style.transitionDuration).toBe("0.2s, 0.22s");
    await expect(style.transitionTimingFunction).toBe(
      "ease, cubic-bezier(0.34, 1.4, 0.44, 1)"
    );
  },
};

export const Hover = {
  render: () => <Harness hover html={frameHtml({ id: "v-hover" })} />,
  play: async ({ canvasElement }) => {
    const { button } = await find(canvasElement, "v-hover");

    // the story shows the hover state persistently (the package's own :hover rules, no pointer needed)
    await waitFor(() => expect(getComputedStyle(button).opacity).toBe("1"));
    await waitFor(() =>
      expect(getComputedStyle(button).transform).toBe(
        "matrix(1.07, 0, 0, 1.07, 0, 0)"
      )
    );
    await expect(getComputedStyle(button).backgroundColor).toBe(
      "rgb(232, 232, 232)"
    );

    // real :hover needs the vitest browser pointer; the state above is the same CSS rule
    if (!realPointer.available) return;
    forceHover(button, false);
    await waitFor(() => expect(getComputedStyle(button).opacity).toBe("0.5"));
    await expect(getComputedStyle(button).transform).toBe("none");
    await realPointer.hover(button);
    await waitFor(() => expect(getComputedStyle(button).opacity).toBe("1"));
    await waitFor(() =>
      expect(getComputedStyle(button).transform).toBe(
        "matrix(1.07, 0, 0, 1.07, 0, 0)"
      )
    );
    // moving away returns to the rest state
    await realPointer.unhover(button);
    await waitFor(() => expect(getComputedStyle(button).opacity).toBe("0.5"));
    await waitFor(() =>
      expect(getComputedStyle(button).transform).toBe("none")
    );
    // end on the hover state
    forceHover(button);
    await waitFor(() => expect(getComputedStyle(button).opacity).toBe("1"));
  },
};

export const FocusVisible = {
  render: () => <Harness html={frameHtml({ id: "v-focus" })} />,
  play: async ({ canvasElement }) => {
    const { button } = await find(canvasElement, "v-focus");
    await userEvent.tab();
    await expect(document.activeElement).toBe(button);
    await expect(button.matches(":focus-visible")).toBe(true);
    await waitFor(() => expect(getComputedStyle(button).opacity).toBe("1"));

    // two-tone ring (white + #00BAFF by default) built from custom properties,
    // plus a transparent outline so forced-colors mode still shows a focus indicator
    const style = getComputedStyle(button);
    await expect(style.boxShadow).toBe(
      "rgb(255, 255, 255) 0px 0px 0px 2px, rgb(0, 186, 255) 0px 0px 0px 4px"
    );
    await expect(style.outlineStyle).toBe("solid");
    await expect(style.outlineWidth).toBe("2px");
    await expect(style.outlineColor).toBe("rgba(0, 0, 0, 0)");
    await expect(style.getPropertyValue("--hp-focus-inner").trim()).toMatch(
      /^0 0 0 2px #(fff|ffffff)$/i
    );
    await expect(style.getPropertyValue("--hp-focus-outer").trim()).toMatch(
      /^0 0 0 4px #00baff$/i
    );

    // the ring really comes from the custom properties
    button.style.setProperty("--hp-focus-outer", "0 0 0 4px rgb(255, 0, 0)");
    await expect(getComputedStyle(button).boxShadow).toBe(
      "rgb(255, 255, 255) 0px 0px 0px 2px, rgb(255, 0, 0) 0px 0px 0px 4px"
    );
    button.style.removeProperty("--hp-focus-outer");

    // the theme's global `button:focus` rule drops z-index to 1; the control keeps its own
    await expect(style.zIndex).toBe("4");
  },
};

export const Playing = {
  render: () => <Harness html={frameHtml({ id: "v-playing" })} />,
  play: async ({ canvasElement }) => {
    const { button, stub } = await find(canvasElement, "v-playing");
    await expectPaused(button);
    let plays = 0;
    let pauses = 0;

    // pointer (real mouse in vitest): no focus ring after a click, z-index kept
    if (realPointer.available) {
      await realPointer.click(button);
      await expectPlaying(button);
      await expect(button.matches(":focus-visible")).toBe(false);
      await expect(getComputedStyle(button).boxShadow).toBe("none");
      await expect(getComputedStyle(button).zIndex).toBe("4");
      await realPointer.click(button);
      await expectPaused(button);
      button.blur();
      plays += 1;
      pauses += 1;
    }
    await expect(stub.calls.play).toBe(plays);
    await expect(stub.calls.pause).toBe(pauses);

    // keyboard: the native button; focus stays on the control
    await userEvent.tab();
    await expect(document.activeElement).toBe(button);
    await userEvent.keyboard("{Enter}");
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(plays + 1);
    await expect(document.activeElement).toBe(button);
    await userEvent.keyboard(" ");
    await expectPaused(button);
    await expect(stub.calls.pause).toBe(pauses + 1);
    await expect(document.activeElement).toBe(button);

    // end on the playing state
    await userEvent.click(button);
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(plays + 2);
  },
};

export const PausedByVisitor = {
  render: () => <Harness html={frameHtml({ id: "v-visitor", auto: true })} />,
  play: async ({ canvasElement }) => {
    const { video, button, stub } = await find(canvasElement, "v-visitor");

    // in view: the autoplay video starts; the visitor pauses it
    environment.emit(video, 1);
    await expectPlaying(button);
    await userEvent.click(button);
    await expectPaused(button);
    await expect(stub.calls.play).toBe(1);

    // a manual pause sticks through scrolling and tab changes
    environment.emit(video, 0);
    environment.emit(video, 0.8);
    environment.hide();
    environment.show();
    await expectPaused(button);
    await expect(stub.calls.play).toBe(1);

    // pressing play ends the sticky pause: scrolling away and back resumes as usual
    await userEvent.click(button);
    await expectPlaying(button);
    environment.emit(video, 0);
    await expectPaused(button);
    environment.emit(video, 0.8);
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(3);

    // end on the paused-by-visitor state
    await userEvent.click(button);
    await expectPaused(button);
    environment.emit(video, 0);
    environment.emit(video, 0.8);
    await expectPaused(button);
  },
};

export const StoppedAfterThreePlays = {
  render: () => <Harness html={frameHtml({ id: "v-budget" })} />,
  play: async ({ canvasElement }) => {
    const { video, button, stub } = await find(canvasElement, "v-budget");

    // three plays in all: the first, then two repeats counted on `ended`
    await userEvent.click(button);
    await expect(stub.calls.play).toBe(1);
    stub.finish();
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(2);
    await expect(video.currentTime).toBe(0);
    stub.finish();
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(3);
    stub.finish();

    // then it stops on its first frame with the play control showing
    await expectPaused(button);
    await expect(video.paused).toBe(true);
    await expect(video.currentTime).toBe(0);
    await expect(stub.calls.play).toBe(3);

    // pressing play on a stopped video plays it once more, then it stops again (no loop)
    await userEvent.click(button);
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(4);
    stub.finish();
    await expectPaused(button);
    await expect(video.currentTime).toBe(0);
    await expect(stub.calls.play).toBe(4);
  },
};

export const Hero = {
  render: () => (
    <Harness
      html={frameHtml({
        id: "heroVideo",
        auto: true,
        hero: true,
        preload: "metadata",
        labelPlay: "Play the hero video",
        labelPause: "Pause the hero video",
        maxWidth: 960,
      })}
    />
  ),
  play: async ({ canvasElement }) => {
    const { video, button, stub } = await find(canvasElement, "heroVideo");
    await expectContract(canvasElement, "heroVideo", { hero: true });
    await expectAppearance(button, { hero: true });
    await expectPaused(button, "Play the hero video");
    await expectHitArea(button);

    // the controller never special-cases the id: the hero autoplays because of data-auto
    environment.emit(video, 0.6);
    await expectPlaying(button, "Pause the hero video");
    await expect(stub.calls.play).toBe(1);
  },
};

// The transform transition is gated behind `prefers-reduced-motion: no-preference` (CSSOM check:
// a page cannot emulate the media feature).
const mbtnTransitions = () => {
  const plain = [];
  const gated = [];
  const visit = (rules, inGate) => {
    Array.from(rules).forEach(rule => {
      if (rule instanceof CSSStyleRule) {
        if (rule.selectorText === ".mbtn" && rule.style.transitionProperty) {
          (inGate ? gated : plain).push(rule.style.transitionProperty);
        }
      } else if (rule.cssRules) {
        visit(
          rule.cssRules,
          inGate ||
            (rule.media &&
              /prefers-reduced-motion:\s*no-preference/.test(
                rule.media.mediaText
              ))
        );
      }
    });
  };
  Array.from(document.styleSheets).forEach(sheet => {
    try {
      visit(sheet.cssRules, false);
    } catch {
      // cross-origin sheet: not ours
    }
  });
  return { plain, gated };
};

export const ReducedMotion = {
  beforeEach: () => {
    environment.setReducedMotion(true);
  },
  render: () => <Harness html={frameHtml({ id: "v-reduced", auto: true })} />,
  play: async ({ canvasElement }) => {
    const { video, button, stub } = await find(canvasElement, "v-reduced");

    // CSS: opacity always transitions, the transform transition only without a reduced-motion preference
    const { plain, gated } = mbtnTransitions();
    await expect(plain.length).toBeGreaterThan(0);
    for (const property of plain) {
      await expect(property).toContain("opacity");
      await expect(property).not.toContain("transform");
    }
    await expect(gated.some(p => p.includes("transform"))).toBe(true);

    // reduce: nothing autoplays, the visitor can still press play
    environment.emit(video, 1);
    await expectPaused(button);
    await expect(stub.calls.play).toBe(0);

    // the preference is read live: turning it off lets the in-view video autoplay
    environment.setReducedMotion(false);
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(1);

    // a `change` event to reduce stops automatic playback
    environment.setReducedMotion(true);
    await expectPaused(button);

    // a tab return does not restart automatic playback once the preference is reduce
    environment.setReducedMotion(false);
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(2);
    environment.hide();
    await expectPaused(button);
    environment.setReducedMotion(true);
    environment.show();
    await expectPaused(button);
    await expect(stub.calls.play).toBe(2);

    // a visitor-started video is the visitor's call: a change does not stop it
    await userEvent.click(button);
    await expectPlaying(button);
    environment.setReducedMotion(false);
    environment.setReducedMotion(true);
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(3);

    // end on the stopped-by-preference state
    await userEvent.click(button);
    await expectPaused(button);
  },
};

// --- behavior ---

export const LabelsFromDataAttributes = {
  render: () => (
    <Harness
      html={frameHtml({
        id: "v-labels",
        labelPlay: "Reproducir el video de la carrera",
        labelPause: "Pausar el video &lt;b&gt;de la carrera&lt;/b&gt;",
      })}
    />
  ),
  play: async ({ canvasElement }) => {
    const { button } = await find(canvasElement, "v-labels");
    await expectPaused(button, "Reproducir el video de la carrera");

    // the label is the literal data attribute, never parsed as HTML
    await userEvent.click(button);
    await expectPlaying(button, "Pausar el video <b>de la carrera</b>");
    await expect(button.querySelector("b")).toBeNull();
    await expect(button.children.length).toBe(2);

    // labels are read from the data attributes each time, not hardcoded or parsed from aria-label
    button.setAttribute("data-label-play", "Seguir");
    await userEvent.click(button);
    await expectPaused(button, "Seguir");
  },
};

export const OutOfView = {
  render: () => (
    <Harness
      html={
        frameHtml({ id: "v-view", auto: true }) +
        frameHtml({ id: "v-view-short", auto: true, plays: 1 })
      }
    />
  ),
  play: async ({ canvasElement }) => {
    const { video, button, stub } = await find(canvasElement, "v-view");
    await expect(environment.observerOptions()).toContainEqual({
      threshold: [0, 0.45],
    });

    // under 45% in view: not enough to autoplay
    environment.emit(video, 0.3);
    await expectPaused(button);
    await expect(stub.calls.play).toBe(0);
    environment.emit(video, 0.45);
    await expectPlaying(button);

    // fully out of view: paused where it is
    video.currentTime = 4;
    environment.emit(video, 0);
    await expectPaused(button);
    await expect(video.currentTime).toBe(4);

    // back in view: resumes from there only from 45%
    environment.emit(video, 0.3);
    await expectPaused(button);
    environment.emit(video, 0.6);
    await expectPlaying(button);
    await expect(video.currentTime).toBe(4);
    await expect(stub.calls.play).toBe(2);

    // a spent video never resumes on its own
    const short = await find(canvasElement, "v-view-short");
    environment.emit(short.video, 1);
    await expectPlaying(short.button);
    short.stub.finish();
    await expectPaused(short.button);
    environment.emit(short.video, 0);
    environment.emit(short.video, 1);
    await expectPaused(short.button);
    await expect(short.stub.calls.play).toBe(1);
  },
};

export const HiddenTab = {
  render: () => (
    <Harness
      html={
        frameHtml({ id: "v-tab-a", auto: true }) +
        frameHtml({ id: "v-tab-c", auto: true }) +
        '<div style="height: 3000px"></div>' +
        frameHtml({ id: "v-tab-b", auto: true })
      }
    />
  ),
  play: async ({ canvasElement }) => {
    const a = await find(canvasElement, "v-tab-a");
    const b = await find(canvasElement, "v-tab-b");
    const c = await find(canvasElement, "v-tab-c");

    environment.emit(a.video, 1);
    environment.emit(b.video, 1);
    await expectPlaying(a.button);
    await expectPlaying(b.button);

    // a hidden tab pauses every playing video
    environment.hide();
    await expectPaused(a.button);
    await expectPaused(b.button);

    // no automatic play while hidden: the video is marked so the tab return resumes it
    environment.emit(c.video, 0.8);
    await expectPaused(c.button);
    await expect(c.stub.calls.play).toBe(0);

    // back on the tab: those with a part on screen resume, the one far below does not
    environment.show();
    await expectPlaying(a.button);
    await expectPlaying(c.button);
    await expectPaused(b.button);
    await expect(b.stub.calls.play).toBe(1);

    // it resumes once scrolled into view
    environment.emit(b.video, 0.8);
    await expectPlaying(b.button);
    await expect(b.stub.calls.play).toBe(2);
  },
};

// The prototype's rule (open question 6): only data-auto videos resume on scroll-back;
// any video a hidden tab paused resumes on tab return.
export const NonAutoVideo = {
  render: () => <Harness html={frameHtml({ id: "heroVideo" })} />,
  play: async ({ canvasElement }) => {
    const { video, button, stub } = await find(canvasElement, "heroVideo");

    // no data-auto: it never autoplays, whatever its id
    environment.emit(video, 1);
    await expectPaused(button);
    await expect(stub.calls.play).toBe(0);

    await userEvent.click(button);
    await expectPlaying(button);

    // out of view pauses it, and it does not come back on its own
    environment.emit(video, 0);
    await expectPaused(button);
    environment.emit(video, 1);
    await expectPaused(button);
    await expect(stub.calls.play).toBe(1);

    // a hidden tab pauses it and the tab return resumes it
    await userEvent.click(button);
    await expectPlaying(button);
    environment.hide();
    await expectPaused(button);
    environment.show();
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(3);
  },
};

export const CustomPlayBudget = {
  render: () => <Harness html={frameHtml({ id: "v-two", plays: 2 })} />,
  play: async ({ canvasElement }) => {
    const { video, button, stub } = await find(canvasElement, "v-two");
    await userEvent.click(button);
    stub.finish();
    await expectPlaying(button);
    stub.finish();
    await expectPaused(button);
    await expect(video.currentTime).toBe(0);
    await expect(stub.calls.play).toBe(2);
  },
};

// The first autoplay attempt fails (here: the browser rejects play(), as it does for a video that has no
// source yet, e.g. the hero's before its source is attached); `loadeddata` retries it under the same
// conditions. The hero's own "Late attach autoplays" story covers the real attach.
export const SourceAttachedLater = {
  render: () => (
    <Harness
      html={
        frameHtml({ id: "v-late", auto: true }) +
        frameHtml({ id: "v-late-paused", auto: true }) +
        frameHtml({ id: "v-late-away", auto: true }) +
        frameHtml({ id: "v-late-reduced", auto: true }) +
        frameHtml({ id: "v-late-spent", auto: true, plays: 1 })
      }
    />
  ),
  play: async ({ canvasElement }) => {
    const late = await find(canvasElement, "v-late");
    late.stub.rejectNextPlay();
    environment.emit(late.video, 0.8);
    await expectPaused(late.button);
    await expect(late.stub.calls.play).toBe(1);
    late.video.dispatchEvent(new Event("loadeddata"));
    await expectPlaying(late.button);
    await expect(late.stub.calls.play).toBe(2);

    // a loadeddata on a video that is already playing starts nothing more
    late.video.dispatchEvent(new Event("loadeddata"));
    await expect(late.stub.calls.play).toBe(2);

    // the visitor paused it: loadeddata does not override that
    const kept = await find(canvasElement, "v-late-paused");
    environment.emit(kept.video, 0.8);
    await expectPlaying(kept.button);
    await userEvent.click(kept.button);
    await expectPaused(kept.button);
    kept.video.dispatchEvent(new Event("loadeddata"));
    await expectPaused(kept.button);
    await expect(kept.stub.calls.play).toBe(1);

    // out of view: nothing starts
    const away = await find(canvasElement, "v-late-away");
    environment.emit(away.video, 0);
    away.video.dispatchEvent(new Event("loadeddata"));
    await expectPaused(away.button);
    await expect(away.stub.calls.play).toBe(0);

    // under 45% in view: not enough
    environment.emit(away.video, 0.3);
    away.video.dispatchEvent(new Event("loadeddata"));
    await expectPaused(away.button);
    await expect(away.stub.calls.play).toBe(0);

    // reduced motion: nothing autoplays
    const reduced = await find(canvasElement, "v-late-reduced");
    environment.emit(reduced.video, 1);
    await expectPlaying(reduced.button);
    await userEvent.click(reduced.button);
    await expectPaused(reduced.button);
    environment.setReducedMotion(true);
    const callsBefore = reduced.stub.calls.play;
    reduced.video.dispatchEvent(new Event("loadeddata"));
    await expectPaused(reduced.button);
    await expect(reduced.stub.calls.play).toBe(callsBefore);
    environment.setReducedMotion(false);

    // a spent video stays on its first frame
    const spent = await find(canvasElement, "v-late-spent");
    environment.emit(spent.video, 1);
    await expectPlaying(spent.button);
    spent.stub.finish();
    await expectPaused(spent.button);
    spent.video.dispatchEvent(new Event("loadeddata"));
    await expectPaused(spent.button);
    await expect(spent.stub.calls.play).toBe(1);
  },
};

let warnings = [];

export const NoPoster = {
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
    <Harness
      html={
        frameHtml({ id: "v-noposter", auto: true, poster: false }) +
        frameHtml({ id: "v-withposter", auto: true })
      }
    />
  ),
  play: async ({ canvasElement }) => {
    const none = await find(canvasElement, "v-noposter");
    const some = await find(canvasElement, "v-withposter");
    await expect(none.video.hasAttribute("poster")).toBe(false);

    // one warning, for the video without a poster; the other video is fine
    await expect(warnings.length).toBe(1);
    await expect(String(warnings[0][0])).toContain("v-noposter");

    // no autoplay without a poster, but the button works
    environment.emit(none.video, 1);
    await expectPaused(none.button);
    await expect(none.stub.calls.play).toBe(0);
    environment.emit(some.video, 1);
    await expectPlaying(some.button);
    await userEvent.click(none.button);
    await expectPlaying(none.button);

    // calling init again does not warn again
    const destroy = initVideoControls(canvasElement);
    destroy();
    await expect(warnings.length).toBe(1);
  },
};

export const HiddenControl = {
  render: () => (
    <Harness
      html={
        frameHtml({ id: "v-shown" }) +
        frameHtml({ id: "v-not-applicable", hidden: true })
      }
    />
  ),
  play: async ({ canvasElement, canvas }) => {
    const { button } = await find(canvasElement, "v-not-applicable");
    await expect(button.hasAttribute("hidden")).toBe(true);
    await expect(getComputedStyle(button).display).toBe("none");

    // not focusable and not in the accessibility tree
    button.focus();
    await expect(document.activeElement).not.toBe(button);
    await userEvent.tab();
    await expect(document.activeElement).not.toBe(button);
    await expect(canvas.getAllByRole("button").length).toBe(1);
  },
};

export const IdempotentInit = {
  render: () => <Harness html={frameHtml({ id: "v-again" })} />,
  play: async ({ canvasElement }) => {
    const { video, button, stub } = await find(canvasElement, "v-again");
    const root = canvasElement.firstElementChild;

    // the entry point re-exports the controller, which leaves HTMLMediaElement.prototype.play alone
    await expect(entry.initVideoControls === initVideoControls).toBe(true);
    await expect(HTMLMediaElement.prototype.play === NATIVE_PLAY).toBe(true);

    // calling it again binds nothing twice: one press, one play; three plays in all, then stop
    const again = [initVideoControls(root), initVideoControls(document)];
    await userEvent.click(button);
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(1);
    stub.finish();
    stub.finish();
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(3);
    stub.finish();
    await expectPaused(button);
    await expect(video.currentTime).toBe(0);
    await expect(stub.calls.play).toBe(3);

    // content added later is picked up by another call
    const late = document.createElement("div");
    late.innerHTML = frameHtml({ id: "v-late" });
    root.appendChild(late);
    const lateVideo = late.querySelector("video");
    const restoreLate = stubPlayback(lateVideo);
    again.push(initVideoControls(root));
    await userEvent.click(late.querySelector(".mbtn"));
    await expectPlaying(late.querySelector(".mbtn"));
    await expect(getStub(lateVideo).calls.play).toBe(1);
    await expect(stub.calls.play).toBe(3);

    again.forEach(destroy => destroy());
    restoreLate();
  },
};

// A queued `ended` event must not restart media that was paused out of view or by the visitor.
export const EndedAfterPause = {
  render: () => <Harness html={frameHtml({ id: "v-ended", auto: true })} />,
  play: async ({ canvasElement }) => {
    const { video, button, stub } = await find(canvasElement, "v-ended");

    // paused because it left the view, then the `ended` event arrives: counted, not repeated
    environment.emit(video, 1);
    await expectPlaying(button);
    environment.emit(video, 0);
    await expectPaused(button);
    video.dispatchEvent(new Event("ended"));
    await expectPaused(button);
    await expect(stub.calls.play).toBe(1);
    await expect(video.currentTime).toBe(0);

    // back in view: a later observer event restarts it
    environment.emit(video, 0.8);
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(2);

    // paused by the visitor, then `ended` arrives: the sticky pause holds
    await userEvent.click(button);
    await expectPaused(button);
    video.dispatchEvent(new Event("ended"));
    await expectPaused(button);
    await expect(stub.calls.play).toBe(2);
    environment.emit(video, 0);
    environment.emit(video, 0.8);
    await expectPaused(button);

    // pressing play ends the sticky pause
    await userEvent.click(button);
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(3);
  },
};

// A control added later for a video that is already wired can be bound and disposed on its own.
export const ReinitSecondControl = {
  render: () => <Harness manual html={frameHtml({ id: "v-second" })} />,
  play: async ({ canvasElement }) => {
    const { button, stub } = await find(canvasElement, "v-second");
    const root = canvasElement.firstElementChild;
    const first = initVideoControls(root);
    const second = addControl(button.parentElement, {
      id: "v-second",
      hero: true,
    });
    const late = initVideoControls(root); // binds only the new control

    // both controls follow the one video
    await userEvent.click(second);
    await expectPlaying(second);
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(1);
    await userEvent.click(second);
    await expectPaused(second);
    await expectPaused(button);

    // disposing the call that bound the new control removes just that control
    late();
    await userEvent.click(second);
    await expect(stub.calls.play).toBe(1);
    await userEvent.click(button);
    await expectPlaying(button);
    await expect(second.dataset.state).toBe("paused");
    await userEvent.click(button);
    await expectPaused(button);
    await expect(stub.calls.play).toBe(2);

    // another call can bind it again, and it shows the video's state
    const again = initVideoControls(root);
    await userEvent.click(second);
    await expectPlaying(second);
    await expectPlaying(button);
    await expect(stub.calls.play).toBe(3);

    // disposing the first call keeps the later control working
    first();
    await userEvent.click(second);
    await expectPaused(second);
    await expect(stub.calls.pause).toBe(3);
    await userEvent.click(button);
    await expect(stub.calls.play).toBe(3);

    // with every call disposed nothing stays bound; a fresh call binds both again
    again();
    await userEvent.click(second);
    await expect(stub.calls.play).toBe(3);
    const fresh = initVideoControls(root);
    await userEvent.click(button);
    await expectPlaying(button);
    await expectPlaying(second);
    await expect(stub.calls.play).toBe(4);
    fresh();
  },
};

// Boundary cases: a refused play(), `ended` while the tab is hidden, a spent video on tab return.
export const PlaybackBoundaries = {
  render: () => (
    <Harness
      html={
        frameHtml({ id: "v-refused" }) +
        frameHtml({ id: "v-ended-hidden", auto: true }) +
        frameHtml({ id: "v-spent", auto: true, plays: 1 })
      }
    />
  ),
  play: async ({ canvasElement }) => {
    const refused = await find(canvasElement, "v-refused");
    const endedHidden = await find(canvasElement, "v-ended-hidden");
    const spent = await find(canvasElement, "v-spent");

    // a rejected play() is swallowed: no unhandled rejection, the control stays on Play, press again works
    const unhandled = [];
    const onUnhandled = event => unhandled.push(event);
    window.addEventListener("unhandledrejection", onUnhandled);
    refused.stub.rejectNextPlay();
    await userEvent.click(refused.button);
    await new Promise(resolve => {
      setTimeout(resolve, 50);
    });
    window.removeEventListener("unhandledrejection", onUnhandled);
    await expect(unhandled.length).toBe(0);
    await expect(refused.stub.calls.play).toBe(1);
    await expectPaused(refused.button);
    await userEvent.click(refused.button);
    await expectPlaying(refused.button);
    await expect(refused.stub.calls.play).toBe(2);

    environment.emit(endedHidden.video, 1);
    environment.emit(spent.video, 1);
    await expectPlaying(endedHidden.button);
    await expectPlaying(spent.button);
    environment.hide();
    await expectPaused(endedHidden.button);
    await expectPaused(spent.button);

    // `ended` while hidden: counted, no play until the tab returns, then it resumes (budget left)
    endedHidden.video.dispatchEvent(new Event("ended"));
    await expectPaused(endedHidden.button);
    await expect(endedHidden.stub.calls.play).toBe(1);
    // ...and a spent video stays on its first frame
    spent.video.dispatchEvent(new Event("ended"));
    await expectPaused(spent.button);

    environment.show();
    await expectPlaying(endedHidden.button);
    await expect(endedHidden.stub.calls.play).toBe(2);
    await expectPaused(spent.button);
    await expect(spent.stub.calls.play).toBe(1);
  },
};
