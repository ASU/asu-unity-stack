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
          'Homepage campus locator ("One university, many places"). From 1024px a looping video (shared play/pause control) starts inset by the 48px gutter and opens to full width as it scrolls into view; a frosted panel holds the heading, two buttons and the seven locations in two groups. Choosing a location (click or keyboard, never hover) crossfades its photo over the video (0.6s), draws a gold leader line (0.4s) to a description box (fades in 0.3s after 0.2s) with a link; Esc, the close button, a second click or an outside click returns to the video, and scrolling never changes the selection. Below 1024px the same content is a carousel: group tabs, a video card plus one card per location, and a name index. The section draws the Learn network wallpaper behind it. Without script the intro and the eight cards stack with all text visible. `initPlaces` and `initVideoControls` wire it. Sample photos, poster and clip are the prototype media; `href`s are placeholders.',
      },
    },
  },
};

const viewport = width => ({
  viewport: { value: `hp${width}`, isRotated: false },
});

const WHITE = "rgb(255, 255, 255)";
const GOLD = "rgb(255, 198, 39)";

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
    tabs: list(".hp-places__tab"),
    track: find(".hp-places__track"),
    cards: list(".hp-places__card"),
    index: list(".hp-places__iname"),
    mob: find(".hp-places__mob"),
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
  await expect(p.cards).toHaveLength(LOCATIONS.length + 1);
  p.cards.forEach((card, index) => {
    expect(card.getAttribute("role")).toBe("group");
    expect(card.getAttribute("aria-roledescription")).toBe("slide");
    expect(card.getAttribute("aria-label")).toMatch(
      new RegExp(`^${index + 1} of ${LOCATIONS.length + 1}: `)
    );
  });
  // data layer: every link and button carries the full attribute set (asucms datalayer.md)
  const clickable = Array.from(
    p.section.querySelectorAll("a[href], button:not(.mbtn)")
  );
  await expect(clickable.length).toBeGreaterThan(30);
  clickable.forEach(element => {
    expect(element.getAttribute("data-ga-name")).toBe("onclick");
    expect(["link", "select"]).toContain(element.getAttribute("data-ga-event"));
    expect(element.getAttribute("data-ga-action")).toBe("click");
    expect(element.getAttribute("data-ga-type")).toBe("internal link");
    expect(element.getAttribute("data-ga-region")).toBe("main content");
    expect(element.getAttribute("data-ga-section")).toBe(
      SECTION_HEADING.toLowerCase()
    );
    expect(element.getAttribute("data-ga-component")).toBe(GA_COMPONENT);
    expect(element.getAttribute("data-ga-text")).toBeTruthy();
    expect(element.hasAttribute("data-ga")).toBe(false);
  });
};

// --- server markup ---

export const NoScript = {
  name: "No script (server markup)",
  globals: viewport(1440),
  render: () => <Harness manual html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    await expectContract(p);
    await expect(p.section.classList.contains("is-enhanced")).toBe(false);
    // the stacked baseline: intro, then the seven location cards; nothing that needs script
    await expect(style(p.media).display).toBe("none");
    await expect(style(p.mbtn).display).toBe("none");
    await expect(
      style(p.panel.querySelector(".hp-places__group")).display
    ).toBe("none");
    await expect(style(p.cards[0]).display).toBe("none");
    await expect(style(p.cards[1]).display).toBe("flex");
    await expect(box(p.cards[2]).top).toBeGreaterThan(box(p.cards[1]).top);
    await expect(style(p.mob.querySelector(".hp-places__tabs")).display).toBe(
      "none"
    );
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
    await expect(style(p.mob).display).toBe("none");
    // the frosted panel: 347 wide, overhanging the media by 24px, starting 24px below its top
    const m = box(p.media);
    const panel = box(p.panel);
    await near(panel.width, 347, 1);
    await near(panel.left, m.left + 24, 1);
    await near(panel.top, m.top + 24, 1);
    // names are toggle buttons, nothing selected
    p.names.forEach(name => {
      expect(name.getAttribute("aria-pressed")).toBe("false");
      expect(box(name).height).toBeGreaterThanOrEqual(44);
    });
    await expect(p.stills.every(still => style(still).opacity === "0")).toBe(
      true
    );
    await expect(p.mbtn.hidden).toBe(false);
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
    await expect(style(p.mob).display).toBe("none");
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

// --- phone / tablet carousel ---

const carouselPlay =
  width =>
  async ({ canvasElement }) => {
    await resizeViewport(width, 852);
    const p = parts(canvasElement);
    await expectContract(p);
    await expect(style(p.media).display).toBe("none");
    await expect(style(p.mbtn).display).toBe("none");
    await expect(p.tabs).toHaveLength(2);
    await expect(p.tabs[0].getAttribute("aria-pressed")).toBe("true");
    // eight slides in a snap scroller; a card is the padded track minus 32px, so the next one peeks in
    await expect(style(p.track).scrollSnapType).toContain("x");
    const side = width >= 768 ? 48 : 16;
    const cardWidth = box(p.cards[1]).width;
    await near(
      cardWidth,
      width >= 600
        ? Math.min(480, width - 2 * side - 32)
        : width - 2 * side - 32,
      1
    );
    // only the active group's names show in the index
    const visible = p.index.filter(button => !button.hidden);
    await expect(visible.map(button => button.textContent)).toEqual(
      LOCATIONS.filter(place => place.group === 0).map(place => place.name)
    );
    visible.forEach(button =>
      expect(box(button).height).toBeGreaterThanOrEqual(44)
    );
  };

export const Phone393 = {
  name: "Phone 393",
  globals: viewport(393),
  render: () => <Harness html={placesHtml()} />,
  play: carouselPlay(393),
};

export const Tablet768 = {
  name: "Tablet 768",
  globals: viewport(768),
  render: () => <Harness html={placesHtml()} />,
  play: carouselPlay(768),
};

export const Tablet1023 = {
  name: "Tablet 1023",
  globals: viewport(1023),
  render: () => <Harness html={placesHtml()} />,
  play: carouselPlay(1023),
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

export const CarouselBehaviour = {
  name: "Carousel: tabs, index, slides",
  tags: ["!dev"],
  globals: viewport(393),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(393, 852);
    const p = parts(canvasElement);
    const pressed = list => list.map(b => b.getAttribute("aria-pressed"));
    // the video card is slide 1 and holds nothing; any other slide holds the video
    await expect(
      p.cards[0].querySelector("video").hasAttribute("data-hold")
    ).toBe(false);
    p.tabs[1].click();
    await expect(pressed(p.tabs)).toEqual(["false", "true"]);
    await waitFor(() =>
      expect(p.index.filter(b => !b.hidden).map(b => b.textContent)).toEqual(
        LOCATIONS.filter(place => place.group === 1).map(place => place.name)
      )
    );
    await expect(
      p.cards[0].querySelector("video").hasAttribute("data-hold")
    ).toBe(true);
    const london = p.index.find(b => b.textContent === "London");
    london.click();
    await expect(london.getAttribute("aria-pressed")).toBe("true");
    // a second press returns to the video card
    london.click();
    await expect(london.getAttribute("aria-pressed")).toBe("false");
    await expect(
      p.cards[0].querySelector("video").hasAttribute("data-hold")
    ).toBe(false);
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
    await expect(WHITE).toBe("rgb(255, 255, 255)");
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
