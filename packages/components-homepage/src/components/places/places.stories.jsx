import React from "react";
import { expect, waitFor } from "storybook/test";

import {
  Harness,
  GA_COMPONENT,
  GROUPS,
  LOCATIONS,
  SECTION_HEADING,
  emulateReducedMotion,
  glassContrast,
  openingProgress,
  placesHtml,
  resizeViewport,
} from "./places-helpers.jsx";
import * as entry from "../../js/index.js";

export default {
  title: "Homepage/Places",
  // Every story leaves the page where it found it: scrolled to the top, no motion emulation.
  beforeEach: () => async () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    await emulateReducedMotion(false);
  },
  parameters: {
    docs: {
      description: {
        component:
          'Homepage campus locator ("One university, many places"). From 1024px a looping video (shared play/pause control) starts inset by the 48px gutter and opens to full width as it scrolls into view; a frosted panel holds the heading, two buttons and the seven locations in two groups. Choosing a location (click or keyboard, never hover) crossfades its photo over the video (0.6s), draws a gold leader line (0.4s) to a description box (fades in 0.3s after 0.2s) with a link; Esc, the close button, a second click or an outside click returns to the video, and scrolling never changes the selection. Below 1024px (Figma 375, brand: Figma is the source of truth, no carousel) the same list is an accordion on Gray 1: each name has a chevron and a rule, one location is open at a time with its text, link and photo (all start collapsed); a 375:219 video strip with the pause button at its bottom right sits above the list. The section draws the Learn network wallpaper behind it (desktop). Without script every location is open and stacked. `initPlaces` and `initVideoControls` wire it. Sample photos, poster and clip are the prototype media; `href`s are placeholders.',
      },
    },
  },
};

const viewport = width => ({
  viewport: { value: `hp${width}`, isRotated: false },
});

const WHITE = "rgb(255, 255, 255)";
const GOLD = "rgb(255, 198, 39)";
const GRAY_1 = "rgb(25, 25, 25)";

const near = (actual, expected, tolerance = 1) =>
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(tolerance);

const box = element => element.getBoundingClientRect();
const style = (element, pseudo) => getComputedStyle(element, pseudo);

const parts = canvasElement => {
  const section = canvasElement.querySelector("section.hp-places");
  const find = selector => section.querySelector(selector);
  const list = selector => Array.from(section.querySelectorAll(selector));
  return {
    section,
    frame: find(".hp-places__frame"),
    panel: find(".hp-places__panel"),
    heading: find(".hp-places__heading"),
    media: find(".hp-places__media"),
    video: find(".hp-places__video"),
    mbtn: find(".hp-places__mbtn"),
    stills: list(".hp-places__still"),
    items: list(".hp-places__item"),
    names: list(".hp-places__name"),
    details: list(".hp-places__detail"),
    boxes: list(".hp-places__box"),
    closes: list(".hp-places__close"),
    photos: list(".hp-places__photo"),
    chevrons: list(".hp-places__chevron"),
    wall: find(".hp-places__wall"),
  };
};

const progressOf = media =>
  parseFloat(media.style.getPropertyValue("--hp-places-progress"));

// Contract that holds with or without script and at every width.
const expectContract = async p => {
  await expect(p.section.getAttribute("aria-labelledby")).toBe(p.heading.id);
  await expect(p.section.querySelectorAll("h2")).toHaveLength(1);
  await expect(p.heading.textContent).toBe(SECTION_HEADING);
  await expect(p.names).toHaveLength(LOCATIONS.length);
  await expect(p.photos).toHaveLength(LOCATIONS.length);
  // data layer: every link and button carries the full attribute set (asucms datalayer.md)
  const clickable = Array.from(p.section.querySelectorAll("a[href], button"));
  await expect(clickable.length).toBeGreaterThan(20);
  clickable.forEach(element => {
    const video = element.classList.contains("mbtn");
    expect(element.getAttribute("data-ga-name")).toBe("onclick");
    expect(["link", "select", "collapse"]).toContain(
      element.getAttribute("data-ga-event")
    );
    expect(["click", "open", "close"]).toContain(
      element.getAttribute("data-ga-action")
    );
    expect(element.getAttribute("data-ga-type")).toBe("internal link");
    expect(element.getAttribute("data-ga-region")).toBe("main content");
    expect(element.getAttribute("data-ga-section")).toBe(
      SECTION_HEADING.toLowerCase()
    );
    expect(element.getAttribute("data-ga-component")).toBe(
      video ? "homepage video control" : GA_COMPONENT
    );
    if (video) {
      expect(["play button", "pause button"]).toContain(
        element.getAttribute("data-ga-text")
      );
    }
    expect(element.getAttribute("data-ga-text")).toBeTruthy();
    expect(element.hasAttribute("data-ga")).toBe(false);
  });
};

// --- server markup ---

export const NoScript = {
  name: "No script (server markup)",
  globals: viewport(393),
  render: () => <Harness manual html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(393, 852);
    const p = parts(canvasElement);
    await expectContract(p);
    await expect(p.section.classList.contains("is-enhanced")).toBe(false);
    // the stacked baseline on Gray 1: the intro, then every location open; nothing that needs script
    await expect(style(p.section).backgroundColor).toBe(GRAY_1);
    await expect(style(p.media).display).toBe("none");
    await expect(style(p.mbtn).display).toBe("none");
    await expect(p.details.every(detail => !detail.hidden)).toBe(true);
    await expect(p.names.some(n => n.hasAttribute("aria-expanded"))).toBe(
      false
    );
    await expect(
      p.photos.every(photo => style(photo).display === "block")
    ).toBe(true);
    await expect(box(p.items[1]).top).toBeGreaterThan(box(p.items[0]).top);
    // the names do nothing without script: no chevron, and each one points at its detail
    await expect(
      p.chevrons.every(chevron => style(chevron).display === "none")
    ).toBe(true);
    p.names.forEach((name, i) => {
      expect(document.getElementById(name.getAttribute("aria-controls"))).toBe(
        p.details[i]
      );
    });
    // the same at the desktop width: script-only layout is not applied
    await resizeViewport(1440, 900);
    await expect(style(p.media).display).toBe("none");
    await expect(style(p.section).backgroundColor).toBe(GRAY_1);
  },
};

// --- desktop ---

export const Default = {
  globals: viewport(1440),
  render: () => <Harness before="60vh" after="60vh" html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    await expectContract(p);
    await expect(p.section.classList.contains("is-enhanced")).toBe(true);
    // the frosted panel: 347 wide, overhanging the media by 24px, starting 24px below its top
    const m = box(p.media);
    const panel = box(p.panel);
    await near(panel.width, 347, 1);
    await near(panel.left, m.left + 24, 1);
    await near(panel.top, m.top + 24, 1);
    // names are toggle buttons, nothing selected; the accordion parts are not shown
    p.names.forEach(name => {
      expect(name.getAttribute("aria-pressed")).toBe("false");
      expect(name.hasAttribute("aria-expanded")).toBe(false);
      expect(box(name).height).toBeGreaterThanOrEqual(44);
    });
    await expect(p.details.every(detail => detail.hidden)).toBe(true);
    await expect(
      p.chevrons.every(chevron => style(chevron).display === "none")
    ).toBe(true);
    await expect(p.photos.every(photo => style(photo).display === "none")).toBe(
      true
    );
    await expect(p.stills.every(still => style(still).opacity === "0")).toBe(
      true
    );
    // the control is revealed once a source is attached (a clip that fails to load, as in this runner, hides it)
    await waitFor(() =>
      expect(p.video.getAttribute("src")).toContain("locations.mp4")
    );
    // the wallpaper layer is decorative and behind the section
    await expect(p.wall.getAttribute("aria-hidden")).toBe("true");
    await expect(style(p.wall).pointerEvents).toBe("none");
    await expect(style(p.wall).backgroundImage).toContain("learn-bg");
  },
};

export const Selected = {
  name: "Location selected",
  globals: viewport(1440),
  render: () => <Harness before="40vh" after="40vh" html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    p.names[0].click();
    await waitFor(() =>
      expect(p.items[0].classList.contains("is-shown")).toBe(true)
    );
    await expect(p.names[0].getAttribute("aria-pressed")).toBe("true");
    await expect(p.stills[0].getAttribute("src")).toContain("place-tempe");
    await waitFor(() => expect(style(p.stills[0]).opacity).toBe("1"));
    await waitFor(() => expect(style(p.video).opacity).toBe("0"));
    await expect(p.video.hasAttribute("data-hold")).toBe(true);
    await expect(style(p.names[0]).borderBottomColor).toBe(GOLD);
    // the box meets the leader: its top is the name's bottom minus the 4px rule, its left the panel's right edge
    await waitFor(() => expect(style(p.boxes[0]).opacity).toBe("1"));
    const name = box(p.names[0]);
    const b = box(p.boxes[0]);
    await near(b.top, name.bottom - 4, 1);
    await near(b.left, box(p.panel).right, 1);
    await near(b.width, 347, 1);
    const leader = style(p.details[0], "::before");
    await expect(leader.backgroundColor).toBe(GOLD);
  },
};

export const ScrollOpening = {
  name: "Scroll opening",
  globals: viewport(1440),
  render: () => (
    <Harness before="120vh" after="120vh" html={placesHtml()} header="147px" />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The section sits between blank spacers so the real motion can be scrolled: the video is inset 48px with 4px corners when it enters at the bottom of the window and reaches full width as it rises under the header. It reverses on scroll up; the list does not move and scrolling never changes a selection.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    await waitFor(() => expect(progressOf(p.media)).toBe(0));
    await expect(p.media.classList.contains("is-opening")).toBe(true);
    await expect(style(p.media).clipPath).toContain("inset");
  },
};

export const Desktop1024 = {
  name: "Desktop 1024",
  tags: ["!dev"],
  globals: viewport(1024),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1024, 768);
    const p = parts(canvasElement);
    await expect(style(p.media).display).toBe("block");
    await expect(box(p.panel).width).toBe(347);
    await expect(box(p.frame).width).toBe(1024);
  },
};

export const Large1920 = {
  name: "Large 1920",
  globals: viewport(1920),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1920, 1080);
    const p = parts(canvasElement);
    await expect(box(p.frame).width).toBe(1920);
    await near(box(p.panel).left, box(p.media).left + 24, 1);
  },
};

export const Above1920 = {
  name: "Above 1920 (capped)",
  globals: viewport(2560),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(2560, 1440);
    const p = parts(canvasElement);
    await expect(box(p.frame).width).toBe(1920);
    await near(box(p.frame).left, 320, 1);
    // the wallpaper still spans the viewport
    await near(box(p.wall).width, 2560, 1);
  },
};

// --- below 1024: the Figma 375 accordion ---

const accordionPlay =
  width =>
  async ({ canvasElement }) => {
    await resizeViewport(width, 852);
    const p = parts(canvasElement);
    await expectContract(p);
    await expect(p.section.classList.contains("is-enhanced")).toBe(true);
    await expect(style(p.section).backgroundColor).toBe(GRAY_1);
    // Figma mobile (Background 13472:63645): a full-width 375:219 video strip directly above the list
    await expect(style(p.media).display).toBe("block");
    await waitFor(() =>
      expect(p.video.getAttribute("src")).toContain("locations.mp4")
    );
    const strip = box(p.media);
    await near(strip.width, width, 1);
    await near(strip.height, (strip.width * 219) / 375, 1);
    await expect(strip.bottom).toBeLessThanOrEqual(box(p.panel).top + 1);
    await expect(p.stills.every(still => style(still).display === "none")).toBe(
      true
    );
    await expect(style(p.wall).display).toBe("none");
    // names are disclosure buttons; every location starts collapsed (brand decision 2026-11-05)
    p.names.forEach(name => {
      expect(name.getAttribute("aria-expanded")).toBe("false");
      expect(name.hasAttribute("aria-pressed")).toBe(false);
      expect(box(name).height).toBeGreaterThanOrEqual(44);
    });
    await expect(p.details.every(detail => detail.hidden)).toBe(true);
    await expect(
      p.names.every(
        name => style(name).borderBottomColor === WHITE && box(name).width < 600
      )
    ).toBe(true);
    await expect(p.chevrons.every(c => style(c).transform === "none")).toBe(
      true
    );
    // open one: gold rule across the panel, chevron up
    p.names[0].click();
    await expect(p.names[0].getAttribute("aria-expanded")).toBe("true");
    await expect(p.details[0].hidden).toBe(false);
    const side = width >= 768 ? 48 : 16 + 8;
    const panelContent = width - 2 * side;
    await near(box(p.names[0]).width, panelContent, 1);
    await expect(style(p.names[0]).borderBottomColor).toBe(GOLD);
    await expect(box(p.names[1]).width).toBeLessThan(panelContent);
    await expect(style(p.chevrons[0]).transform).not.toBe("none");
    // the open photo keeps the Figma 327:219 ratio, at most 480 wide
    const photo = box(p.photos[0]);
    await near(photo.width, Math.min(480, panelContent), 1);
    await near(photo.height, (photo.width * 219) / 327, 1);
    // no horizontal overflow
    await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(
      width
    );
  };

export const Phone393 = {
  name: "Phone 393",
  globals: viewport(393),
  render: () => <Harness html={placesHtml()} />,
  play: accordionPlay(393),
};

export const Phone375 = {
  name: "Phone 375 (Figma frame)",
  tags: ["!dev"],
  globals: viewport(393),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(375, 812);
    const p = parts(canvasElement);
    // Figma 13824:1800: collapsed rows 60px apart; an open row spans the 327px content, its photo 327x219
    await near(box(p.names[2]).top - box(p.names[1]).top, 60, 2);
    p.names[0].click();
    await near(box(p.names[0]).width, 327, 1);
    await near(box(p.photos[0]).width, 327, 1);
    await near(box(p.photos[0]).height, 219, 1);
    await near(style(p.heading).fontSize.replace("px", ""), 32, 0);
  },
};

export const Tablet768 = {
  name: "Tablet 768",
  globals: viewport(768),
  render: () => <Harness html={placesHtml()} />,
  play: accordionPlay(768),
};

export const Tablet1023 = {
  name: "Tablet 1023",
  globals: viewport(1023),
  render: () => <Harness html={placesHtml()} />,
  play: accordionPlay(1023),
};

export const AccordionBehaviour = {
  name: "Accordion: one open at a time",
  tags: ["!dev"],
  globals: viewport(393),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(393, 852);
    const p = parts(canvasElement);
    const expanded = () => p.names.map(n => n.getAttribute("aria-expanded"));
    // one open at a time: opening a second closes the first
    p.names[0].click();
    p.names[1].click();
    await expect(expanded()).toEqual(
      LOCATIONS.map((_, i) => (i === 1 ? "true" : "false"))
    );
    await expect(p.details[0].hidden).toBe(true);
    await expect(p.details[1].hidden).toBe(false);
    // the data layer follows the widget: open / close below 1024
    await expect(p.names[1].getAttribute("data-ga-event")).toBe("collapse");
    await expect(p.names[1].getAttribute("data-ga-action")).toBe("close");
    await expect(p.names[0].getAttribute("data-ga-action")).toBe("open");
    // keyboard: a focused name toggles with Enter or Space (native button) and keeps focus
    p.names[2].focus();
    p.names[2].click();
    await expect(document.activeElement).toBe(p.names[2]);
    await expect(p.names[2].getAttribute("aria-expanded")).toBe("true");
    p.names[1].click();
    // a second press collapses it
    p.names[1].click();
    await expect(expanded().every(state => state === "false")).toBe(true);
    await expect(p.details.every(detail => detail.hidden)).toBe(true);
    // the last location in the second group opens too
    const last = LOCATIONS.length - 1;
    p.names[last].click();
    await expect(p.names[last].getAttribute("aria-expanded")).toBe("true");
    await expect(style(p.names[last]).borderBottomColor).toBe(GOLD);
  },
};

export const BreakpointCrossing = {
  name: "Breakpoint crossing 1023/1024",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    p.names[2].click();
    await waitFor(() => expect(p.video.hasAttribute("data-hold")).toBe(true));
    await resizeViewport(1023, 800);
    // the accordion: no selection or hold carried over, the video still attached, everything collapsed
    await waitFor(() =>
      expect(box(p.media).bottom).toBeLessThanOrEqual(box(p.panel).top + 1)
    );
    await waitFor(() =>
      expect(p.video.getAttribute("src")).toContain("locations.mp4")
    );
    await waitFor(() => expect(p.video.hasAttribute("data-hold")).toBe(false));
    await expect(
      p.names.every(n => n.getAttribute("aria-expanded") === "false")
    ).toBe(true);
    await expect(p.names[2].hasAttribute("aria-pressed")).toBe(false);
    await expect(p.section.classList.contains("has-still")).toBe(false);
    p.names[3].click();
    await expect(p.names[3].getAttribute("aria-expanded")).toBe("true");
    await resizeViewport(1024, 800);
    // back on desktop: nothing selected, details hidden, aria-pressed again
    await waitFor(() =>
      expect(p.names[0].getAttribute("aria-pressed")).toBe("false")
    );
    await expect(
      p.names.every(n => n.getAttribute("aria-pressed") === "false")
    ).toBe(true);
    await expect(p.names.some(n => n.hasAttribute("aria-expanded"))).toBe(
      false
    );
    await expect(p.details.every(detail => detail.hidden)).toBe(true);
    // and back to the accordion: it starts collapsed again (the earlier open location is not remembered)
    await resizeViewport(1023, 800);
    await waitFor(() =>
      expect(
        p.names.every(n => n.getAttribute("aria-expanded") === "false")
      ).toBe(true)
    );
  },
};

// --- behaviour (tests only) ---

export const SelectionAndReturn = {
  name: "Selection: four ways back to the video",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness before="40vh" after="150vh" html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const selected = () =>
      p.names.map(name => name.getAttribute("aria-pressed"));
    // second click
    p.names[2].click();
    await expect(selected()[2]).toBe("true");
    p.names[2].click();
    await expect(selected().every(state => state === "false")).toBe(true);
    await expect(p.video.hasAttribute("data-hold")).toBe(false);
    // switching
    p.names[1].click();
    p.names[3].click();
    await expect(selected()).toEqual([
      "false",
      "false",
      "false",
      "true",
      "false",
      "false",
      "false",
    ]);
    // scrolling never changes the selection
    window.scrollTo({ top: 600, behavior: "instant" });
    await new Promise(resolve => requestAnimationFrame(resolve));
    await expect(selected()[3]).toBe("true");
    // Esc, with focus on the name, returns focus to the name
    p.names[3].focus();
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await expect(selected().every(state => state === "false")).toBe(true);
    await expect(document.activeElement).toBe(p.names[3]);
    // the close button
    p.names[4].click();
    await waitFor(() => expect(p.closes[4].hidden).toBe(false));
    p.closes[4].click();
    await expect(selected().every(state => state === "false")).toBe(true);
    await expect(document.activeElement).toBe(p.names[4]);
    // an outside click (on the media)
    p.names[0].click();
    p.media.click();
    await expect(selected().every(state => state === "false")).toBe(true);
  },
};

export const HoldGate = {
  name: "Video hold (shared control)",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    p.names[0].click();
    await expect(p.video.hasAttribute("data-hold")).toBe(true);
    // the pause button clears the hold itself (video-control.js) and the places listener goes back to the video
    p.mbtn.click();
    await waitFor(() => expect(p.video.hasAttribute("data-hold")).toBe(false));
    await expect(p.names[0].getAttribute("aria-pressed")).toBe("false");
    await expect(p.video.getAttribute("data-in-view")).toBe("0.2");
  },
};

export const LowerNameBox = {
  name: "Box of the lowest name stays in the stage",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness before="20vh" after="40vh" html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const last = LOCATIONS.length - 1;
    p.names[last].click();
    await waitFor(() =>
      expect(p.items[last].classList.contains("is-shown")).toBe(true)
    );
    await expect(box(p.boxes[last]).bottom).toBeLessThanOrEqual(
      box(p.media).bottom + 1
    );
    // the leader stays on the name's rule
    await near(box(p.details[last]).bottom, box(p.names[last]).bottom, 1);
  },
};

export const ContrastBudget = {
  name: "Contrast budget (glass)",
  tags: ["!dev"],
  render: () => <div />,
  play: async () => {
    // White text over the .75 glass on the brightest possible backdrop needs 4.5:1 (7.7:1 here); gold 3:1 as large bold.
    await expect(glassContrast([255, 255, 255], 0.75, 255)).toBeGreaterThan(
      4.5
    );
    await expect(glassContrast([255, 198, 39], 0.75, 255)).toBeGreaterThan(4.5);
    // the Figma .5 would fail for white
    await expect(glassContrast([255, 255, 255], 0.5, 255)).toBeLessThan(4.5);
    await expect(openingProgress(450, 900, 147)).toBeLessThan(1);
  },
};

export const EntryPoint = {
  name: "Entry point exports",
  tags: ["!dev"],
  render: () => <div />,
  play: async () => {
    await expect(typeof entry.initPlaces).toBe("function");
    await expect(GROUPS).toHaveLength(2);
  },
};

export const InitContract = {
  name: "Init contract (teardown restores the server markup)",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness manual html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const stop = entry.initPlaces(canvasElement);
    await expect(p.section.classList.contains("is-enhanced")).toBe(true);
    // a second call binds nothing twice
    entry.initPlaces(canvasElement)();
    await expect(p.section.classList.contains("is-enhanced")).toBe(true);
    p.names[1].click();
    await waitFor(() =>
      expect(p.items[1].classList.contains("is-shown")).toBe(true)
    );
    stop();
    // back to the server markup: every location open, no state, nothing attached
    await expect(p.section.classList.contains("is-enhanced")).toBe(false);
    await expect(p.section.classList.contains("has-still")).toBe(false);
    await expect(
      p.items.some(item =>
        ["is-selected", "is-shown", "is-open"].some(name =>
          item.classList.contains(name)
        )
      )
    ).toBe(false);
    await expect(p.details.every(detail => !detail.hidden)).toBe(true);
    await expect(p.closes.every(button => button.hidden)).toBe(true);
    await expect(
      p.names.some(
        n => n.hasAttribute("aria-pressed") || n.hasAttribute("aria-expanded")
      )
    ).toBe(false);
    await expect(p.video.hasAttribute("data-hold")).toBe(false);
    await expect(p.video.hasAttribute("src")).toBe(false);
    await expect(p.media.style.getPropertyValue("--hp-places-progress")).toBe(
      ""
    );
    // it can be started again and starts clean
    const again = entry.initPlaces(canvasElement);
    await expect(
      p.items.some(item => item.classList.contains("is-selected"))
    ).toBe(false);
    p.names[2].click();
    await expect(p.names[2].getAttribute("aria-pressed")).toBe("true");
    again();
  },
};

export const LazyClip = {
  name: "Clip loads when the media is near",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness before="300vh" after="40vh" html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    // far below the window: no clip is requested yet, the control waits
    await new Promise(resolve => setTimeout(resolve, 300));
    await expect(p.video.hasAttribute("src")).toBe(false);
    await expect(p.mbtn.hidden).toBe(true);
    // within one window height: the clip is attached
    window.scrollTo({
      top: p.media.getBoundingClientRect().top - 300 + window.scrollY,
      behavior: "instant",
    });
    await waitFor(() =>
      expect(p.video.getAttribute("src")).toContain("locations.mp4")
    );
    // and it stays attached when the media leaves again
    window.scrollTo({ top: 0, behavior: "instant" });
    await new Promise(resolve => setTimeout(resolve, 200));
    await expect(p.video.hasAttribute("src")).toBe(true);
  },
};
