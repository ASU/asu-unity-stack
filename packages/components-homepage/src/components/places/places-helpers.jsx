import React, { useEffect, useRef } from "react";

import { controlHtml } from "../video-control/video-control-helpers.jsx";
import { initVideoControls } from "../video-control/video-control.js";
import { initPlaces } from "./places.js";

export {
  emulateReducedMotion,
  realKeyboard,
  realPointer,
  resizeViewport,
} from "../reimagine/reimagine-helpers.jsx";

// Icons: Font Awesome Free 6.4.2 solid arrow-right and xmark (CC BY 4.0, https://fontawesome.com/license/free).
const ARROW_PATH =
  "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";
const XMARK_PATH =
  "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";

const arrow = cls =>
  `<svg class="${cls}" viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="${ARROW_PATH}"/></svg>`;
const xmark = `<svg class="hp-places__close-icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="${XMARK_PATH}"/></svg>`;

// Sample media: the prototype's intended images (WebP) and clip, served by Storybook at /places-media
// (staticDirs in .storybook/main.js). Sample content, not part of dist/.
const MEDIA = "places-media";
export const VIDEO_SRC = `${MEDIA}/locations.mp4`;
export const POSTER_SRC = `${MEDIA}/locations-poster.webp`;

export const SECTION_HEADING = "One university, many places";
export const GA_COMPONENT = "homepage places";

export const GROUPS = [
  { label: "Phoenix metro area campuses", tab: "Metro Phoenix" },
  { label: "U.S. and International", tab: "U.S. and international" },
];

// Prototype v2.71 copy (HTML 2635-2690). `group` indexes GROUPS. TODO: destinations and photo alt text from
// the content team (WWWCMS-241 open question A11); each href is a unique fragment that matches no element.
export const LOCATIONS = [
  {
    name: "Tempe",
    group: 0,
    photo: `${MEDIA}/place-tempe.webp`,
    text: "The flagship campus — a walkable, tree-lined home to more than 55,000 Sun Devils.",
    link: "See Tempe campus",
  },
  {
    name: "Downtown Phoenix",
    group: 0,
    photo: `${MEDIA}/place-downtown.webp`,
    text: "Health, journalism, law and public service in the heart of the city.",
    link: "See Downtown Phoenix campus",
  },
  {
    name: "West Valley",
    group: 0,
    photo: `${MEDIA}/place-westvalley.webp`,
    text: "An Oxford-inspired oasis serving the dynamic workforce needs of a rapidly growing economy.",
    link: "See West Valley campus",
  },
  {
    name: "Polytechnic",
    group: 0,
    photo: `${MEDIA}/place-polytechnic.webp`,
    text: "Hands-on engineering, technology and aviation on a former Air Force base in Mesa.",
    link: "See Polytechnic campus",
  },
  {
    name: "Los Angeles",
    group: 1,
    photo: `${MEDIA}/place-losangeles.webp`,
    text: "Film, media and game design taught in the center of the industry.",
    link: "See ASU Los Angeles",
  },
  {
    name: "Washington, D.C.",
    group: 1,
    photo: `${MEDIA}/place-washington.webp`,
    text: "Policy, journalism and global affairs steps from Capitol Hill.",
    link: "See ASU Washington, D.C.",
  },
  {
    name: "London",
    group: 1,
    photo: `${MEDIA}/place-london.webp`,
    text: "ASU’s first international campus, opening in the heart of the U.K.",
    link: "See ASU London",
  },
];

export const DEK =
  "Four distinctive campuses throughout metropolitan Phoenix, as well as locations around the state, country and world.";
export const VIDEO_DESCRIPTION =
  "Silent video: scenes from ASU’s campuses and locations."; // placeholder: the content team writes it against the final cut

const slug = name =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const locationHref = index => `#place-${slug(LOCATIONS[index].name)}`;

const escape = value =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// Data layer (asucms docs/datalayer.md): the `data-ga-text` family only, never `data-ga`. `event` is `link` for
// anchors and `select` for widget buttons; type is `external link` when the URL is on another host.
// TODO: confirm the event names with the data team (WWWCMS-227 open item).
const isExternal = href => {
  if (!/^https?:\/\//i.test(href)) return false;
  try {
    const host =
      typeof location === "undefined" ? "www.asu.edu" : location.host;
    return new URL(href).host !== host;
  } catch {
    return true;
  }
};

export const gaAttributes = (
  text,
  { event = "link", href = "", component = GA_COMPONENT } = {}
) =>
  `data-ga-name="onclick" data-ga-event="${event}" data-ga-action="click" data-ga-type="${isExternal(href) ? "external link" : "internal link"}" data-ga-region="main content" data-ga-section="${escape(SECTION_HEADING.toLowerCase())}" data-ga-component="${component}" data-ga-text="${escape(text.toLowerCase())}"`;

// The shared pause/play control, with the data layer set the asucms video control carries (its text names what
// a click does; video-control.js keeps it current).
const videoControl = (id, extraClass) =>
  controlHtml({
    id,
    hidden: true,
    labelPlay: "Play the locations video",
    labelPause: "Pause the locations video",
  })
    .replace('class="mbtn"', `class="mbtn ${extraClass}"`)
    .replace(
      "<button ",
      `<button ${gaAttributes("play button", { component: "homepage video control" })} `
    );

const cta = (kind, label, href) =>
  `<a class="hp-places__cta hp-places__cta--${kind}" href="${escape(href)}" ${gaAttributes(label, { href })}>${label}${arrow("hp-places__cta-icon")}</a>`;

const seeAll = (cls, href) =>
  `<a class="${cls}" href="${escape(href)}" ${gaAttributes("See all ASU locations", { href })}>See all ASU locations${arrow("hp-places__arrow")}</a>`;

// Markup contract (design doc section 5): the Stage B parity source. `id` prefixes every id so several copies can
// share a page; `follow` is the optional selector of the section above whose wallpaper this one continues.
export const placesHtml = ({
  id = "hp-places",
  follow = "",
  dek = true,
  findHref = "#places-fit",
  visitHref = "#places-visit",
  allHref = "#places-all",
} = {}) => {
  const heading = `${id}-heading`;
  const videoId = `${id}-video`;
  const mobVideoId = `${id}-video-mobile`;
  const groupsHtml = GROUPS.map((group, g) => {
    const items = LOCATIONS.map((place, index) => ({ place, index }))
      .filter(({ place }) => place.group === g)
      .map(
        ({ place, index }) =>
          `<li class="hp-places__item" role="listitem"><button type="button" class="hp-places__name" ${gaAttributes(place.name, { event: "select" })}>${place.name}</button><div class="hp-places__detail" hidden><div class="hp-places__box"><p class="hp-places__caption">${escape(place.text)}</p><a class="hp-places__link" href="${locationHref(index)}" ${gaAttributes(place.link)}>${place.link}${arrow("hp-places__arrow")}</a><button type="button" class="hp-places__close" aria-label="Close ${escape(place.name)} details" hidden ${gaAttributes(`close ${place.name}`, { event: "select" })}>${xmark}</button></div></div></li>`
      )
      .join("");
    return `<div class="hp-places__group"><h3 class="hp-places__group-label">${group.label}</h3><ul class="hp-places__names" role="list">${items}</ul></div>`;
  }).join("");

  const stills = LOCATIONS.map(
    place =>
      `<img class="hp-places__still" data-src="${place.photo}" alt="" decoding="async">`
  ).join("");

  const cards = [
    `<div class="hp-places__card hp-places__card--video" data-label="all locations"><div class="hp-places__vbox"><video id="${mobVideoId}" class="hp-places__video-m" muted playsinline preload="none" data-auto data-in-view="0.2" data-src="${VIDEO_SRC}" poster="${POSTER_SRC}" aria-describedby="${mobVideoId}-desc"></video><p id="${mobVideoId}-desc" class="visually-hidden">${escape(VIDEO_DESCRIPTION)}</p>${videoControl(mobVideoId, "hp-places__mbtn-m")}</div></div>`,
    ...LOCATIONS.map(
      (place, index) =>
        `<div class="hp-places__card" data-label="${escape(place.name)}"><div class="hp-places__photo"><img src="${place.photo}" alt="" loading="lazy" decoding="async"></div><div class="hp-places__cell"><p class="hp-places__cname">${place.name}</p><p class="hp-places__ctext">${escape(place.text)}</p><a class="hp-places__link" href="${locationHref(index)}" ${gaAttributes(place.link)}>${place.link}${arrow("hp-places__arrow")}</a></div></div>`
    ),
  ].join("");

  const tabs = GROUPS.map((group, g) => {
    const first = LOCATIONS.findIndex(place => place.group === g) + 1;
    return `<button type="button" class="hp-places__tab" data-slide="${first}" ${gaAttributes(group.tab, { event: "select" })}>${group.tab}</button>`;
  }).join("");
  const index = LOCATIONS.map(
    place =>
      `<button type="button" class="hp-places__iname" data-group="${place.group}" ${gaAttributes(place.name, { event: "select" })}>${place.name}</button>`
  ).join("");

  return `<section class="hp-places" aria-labelledby="${heading}"${follow ? ` data-wallpaper-follow="${escape(follow)}"` : ""}><div class="hp-places__wall" aria-hidden="true"></div><div class="hp-places__frame"><div class="hp-places__panel"><div class="hp-places__intro"><p class="hp-places__eyebrow">Locations</p><h2 id="${heading}" class="hp-places__heading">${SECTION_HEADING}</h2>${dek ? `<p class="hp-places__dek">${DEK}</p>` : ""}<div class="hp-places__ctas">${cta("primary", "Find your fit", findHref)}${cta("secondary", "Visit ASU", visitHref)}</div></div>${groupsHtml}${seeAll("hp-places__see-all", allHref)}</div><div class="hp-places__media"><video id="${videoId}" class="hp-places__video" muted playsinline preload="none" data-auto data-in-view="0.2" data-src="${VIDEO_SRC}" poster="${POSTER_SRC}" aria-describedby="${videoId}-desc"></video><p id="${videoId}-desc" class="visually-hidden">${escape(VIDEO_DESCRIPTION)}</p>${stills}</div>${videoControl(videoId, "hp-places__mbtn")}<div class="hp-places__mob"><div class="hp-places__tabs" role="group" aria-label="Location groups" hidden>${tabs}</div><div class="hp-places__track" data-label="Campuses and locations">${cards}</div><div class="hp-places__mobpanel"><div class="hp-places__index" role="group" aria-label="Locations" hidden>${index}</div><div class="hp-places__actions">${cta("secondary", "Visit ASU", visitHref).replace("hp-places__cta--secondary", "hp-places__cta--secondary hp-places__cta--dark")}${seeAll("hp-places__see-all-m", allHref)}</div></div></div></div></section>`;
};

// Renders the markup and runs `initPlaces` and `initVideoControls` (unless `manual`, the server-markup state).
// `before`/`after` are blank spacers (CSS height) so a story can put the section away from the top of the page.
export const Harness = ({
  html,
  manual = false,
  before = 0,
  after = 0,
  header = null,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    if (manual) return undefined;
    const stopPlaces = initPlaces(ref.current);
    const stopVideo = initVideoControls(ref.current);
    return () => {
      stopVideo();
      stopPlaces();
    };
  }, [html, manual]);
  return (
    <>
      {before ? <div style={{ height: before }} aria-hidden="true" /> : null}
      <div
        ref={ref}
        style={header ? { "--hp-places-header-height": header } : undefined}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {after ? <div style={{ height: after }} aria-hidden="true" /> : null}
    </>
  );
};

// Opening progress for a media top edge `top`, in a window `vh` tall under a header `header` tall (design doc D7).
export const openingProgress = (top, vh, header) => {
  const start = vh * 0.9;
  const end = header + 48;
  return Math.min(1, Math.max(0, (start - top) / (start - end)));
};

// ---- Contrast budget (design doc section 7): pure arithmetic over the glass ----

const channel = value => {
  const s = value / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};

const luminance = (r, g, b) =>
  0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);

// Contrast of a text color over Gray 1 glass of `alpha` laid on a backdrop of gray level `backdrop` (0-255).
export const glassContrast = (text, alpha, backdrop) => {
  const base = 25; // Gray 1
  const level = alpha * base + (1 - alpha) * backdrop;
  const a = luminance(...text);
  const b = luminance(level, level, level);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
};
