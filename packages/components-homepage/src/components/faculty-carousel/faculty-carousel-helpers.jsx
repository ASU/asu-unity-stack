import React, { useEffect, useRef } from "react";

import {
  controlHtml,
  realPointer,
  stubPlayback,
} from "../video-control/video-control-helpers.jsx";
import { initVideoControls } from "../video-control/video-control.js";
import { initFacultyCarousel } from "./faculty-carousel.js";
import { stubSource } from "../hero/hero-helpers.jsx";

export { emulateForcedColors } from "../rankings-cards/rankings-cards-helpers.jsx";
export {
  emulateReducedMotion,
  realKeyboard,
  realPointer,
  resizeViewport,
} from "../reimagine/reimagine-helpers.jsx";
export {
  environment,
  getStub,
  stubPlayback,
} from "../video-control/video-control-helpers.jsx";
export { getSource, stubSource } from "../hero/hero-helpers.jsx";

// A real Tab key press (vitest browser only; a no-op elsewhere, check `realTab.available`).
export const realTab = async (shift = false) => {
  if (!realPointer.available) return;
  const { userEvent } = await import("vitest/browser");
  await userEvent.tab({ shift });
};
realTab.available = realPointer.available;

// Icons: Font Awesome Free 6.4.2 solid chevron-left, chevron-right and arrow-right (CC BY 4.0,
// https://fontawesome.com/license/free).
const CHEVRON_LEFT =
  "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z";
const CHEVRON_RIGHT =
  "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z";
const ARROW_RIGHT =
  "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";

const icon = (cls, path, viewBox) =>
  `<svg class="${cls}" viewBox="${viewBox}" aria-hidden="true" focusable="false"><path fill="currentColor" d="${path}"/></svg>`;

// Sample media: the prototype's stills (WebP) and clips, served by Storybook at /faculty-media (staticDirs in
// .storybook/main.js). Sample content, not part of dist/. None of the clips has an audio stream.
const MEDIA = "faculty-media";

export const SECTION_HEADING = "Learn from the best. Become your best.";
export const SUB =
  "The people who will teach, mentor and guide you are among the most accomplished in their fields. They’re here to help you go further in yours.";
export const GA_SECTION = "learn from the best";
export const GA_COMPONENT = "homepage faculty carousel";
export const UTILITY_LABEL = "Meet more of your faculty";
// TODO: the content doc gives https://www.asu.edu/academics/faculty-excellence; placeholders until the destinations
// are confirmed (WWWCMS-240). A bare "#" scrolls to the top, so each is a unique fragment that matches no element.
export const UTILITY_HREF = "#faculty-all";

// Content doc "Learn from the best" cards 1-6 (prototype v2.71 order). `video` is absent on Jackson (a still only).
// `url` is the doc's "Read more" destination, kept for the editor fields; the markup uses a placeholder fragment.
export const PEOPLE = [
  {
    name: "Laurie Leshin",
    title: "University Professor for Space Futures",
    role: "Planetary scientist",
    headline: "Former director, NASA’s Jet Propulsion Laboratory",
    bio: "Once a young Tempe girl enamored with space who went on to become a world-class space scientist, Laurie Leshin is back home at Arizona State University. At JPL, she oversaw the successful development and launch of major NASA missions in earth science, planetary exploration and astrophysics.",
    url: "https://news.asu.edu/20260113-university-news-former-head-jpl-laurie-leshin-joins-asu",
    alt: "Laurie Leshin smiling and making the ASU pitchfork sign, in a black-and-white jacket, with the NASA logo behind her.",
    description:
      "Laura Leshin giving an interview and talking with a colleague.",
    video: `${MEDIA}/faculty-leshin.mp4`,
    still: `${MEDIA}/faculty-leshin.webp`,
  },
  {
    name: "Hao Yan",
    title: "Regents Professor, School of Molecular Sciences",
    role: "Molecular designer and engineer",
    headline: "Winner of the Feynman Prize in Nanotechnology",
    bio: "Hao Yan is one of the world’s leading pioneers of DNA nanotechnology — the science of folding DNA into microscopic machines and materials that could reshape medicine, energy and computing. At ASU’s Biodesign Institute, he leads a team turning nature’s design rules into tools built molecule by molecule, and still teaches undergraduates and mentors young scientists in his lab.",
    url: "https://news.asu.edu/b/20260520-asus-hao-yan-joins-european-academy-sciences-and-arts",
    alt: "Hao Yan in a white ASU Biodesign Institute lab coat, safety glasses and blue gloves, next to a colorful model in a lab.",
    description:
      "Hao Yan teaching students using a DNA model at the ASU Biodesign Institute lab.",
    video: `${MEDIA}/faculty-yan.mp4`,
    still: `${MEDIA}/faculty-yan.webp`,
  },
  {
    name: "Natalie Diaz",
    title:
      "Maxine and Jonathan Marshall Chair in Modern and Contemporary Poetry",
    role: "Poet and language advocate",
    headline: "Pulitzer Prize winner and MacArthur Fellow",
    bio: "Natalie Diaz writes poetry that draws on her Mojave and Latina heritage to confront the histories shaping Indigenous life in America — work that earned the 2021 Pulitzer Prize. A member of the Gila River Indian Community, she teaches at ASU while working to revitalize endangered Indigenous languages and widen the reach of Native voices.",
    url: "https://news.asu.edu/20240918-arts-humanities-and-education-asu-professor-natalie-diaz-receives-freedom-scholar-award",
    alt: "Natalie Diaz in a dark button-up shirt, looking off to the side in bright sunlight with mountains and sky behind her.",
    description:
      "Natalie Diaz giving an interview and speaking in front of ASU colleagues.",
    video: `${MEDIA}/faculty-diaz.mp4`,
    still: `${MEDIA}/faculty-diaz.webp`,
  },
  {
    name: "Sethuraman “Panch” Panchanathan",
    title: "University Professor of Technology and Innovation",
    role: "Science and technology leader",
    headline: "Former director, National Science Foundation",
    bio: "Panch is an internationally respected leader in science, technology and higher education whose work is guided by a simple conviction: Innovation must serve humanity and the public good while strengthening the nation’s long-term competitiveness. His career reflects sustained engagement in shaping the future of research, technology and opportunity.",
    url: "https://panch.asu.edu/",
    alt: "Sethuraman “Panch” Panchanathan smiling in glasses, a navy suit and striped tie, against an ASU gold background.",
    description:
      "Sethuraman “Panch” Panchanathan providing an upbeat and enthusiastic interview.",
    video: `${MEDIA}/faculty-panch.mp4`,
    still: `${MEDIA}/faculty-panch.webp`,
  },
  {
    name: "Maria Rosario Jackson",
    title: "University Professor of Creativity and Social Impact",
    role: "Arts and social-impact leader",
    headline: "Former chair, National Endowment for the Arts",
    bio: "Maria Rosario Jackson was the first African American and first Mexican American woman to lead the National Endowment for the Arts, where she put the arts to work in public health, disaster resilience and community healing. Now an ASU professor based in Los Angeles, she directs the Studio for Creativity, Place and Equitable Communities — building communities where everyone can thrive.",
    url: "https://news.asu.edu/20260113-arts-humanities-and-education-former-head-nea-returns-asu-drive-social-impact-communities",
    alt: "Maria Rosario Jackson smiling, with curly hair and gold earrings, in a dark jacket against a warm gold backdrop.",
    still: `${MEDIA}/faculty-jackson.webp`,
  },
  {
    name: "Michael M. Crow",
    title: "President and Professor",
    role: "Higher education visionary",
    headline: "Architect of the New American University",
    bio: "For more than two decades, Michael Crow has reimagined what a public university can be — pursuing the highest levels of academic excellence while opening ASU’s doors wider than ever. Every spring, he still teaches the course he created, “Science, Technology and Public Affairs,” bringing students into the question behind his life’s work: how to design the future.",
    url: "https://president.asu.edu/the-president",
    quote: "It was clear that his students were his utmost priority.",
    cite: "Michael W., MD, ’11, Barrett, The Honors College",
    alt: "Michael M. Crow, in a dark suit and maroon-and-gold striped tie in front of a red brick wall.",
    description:
      "Michael M. Crow discussing ideas with students, leading a student lecture and speaking to the graduating class at ASU Commencement.",
    video: `${MEDIA}/faculty-crow.mp4`,
    still: `${MEDIA}/faculty-crow.webp`,
  },
];

const slug = name =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const readMoreHref = person => `#faculty-${slug(person.name)}`;

const escape = value =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// Data layer (asucms docs/datalayer.md): the `data-ga-text` family only, never `data-ga`. `event` is `link` for
// anchors and `select` for widget buttons. TODO: confirm the event names with the data team (WWWCMS-227 open item).
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
  `data-ga-name="onclick" data-ga-event="${event}" data-ga-action="click" data-ga-type="${isExternal(href) ? "external link" : "internal link"}" data-ga-region="main content" data-ga-section="${GA_SECTION}" data-ga-component="${component}" data-ga-text="${escape(text.toLowerCase())}"`;

const videoControl = (id, name) =>
  controlHtml({
    id,
    hidden: true,
    labelPlay: `Play the ${name} video`,
    labelPause: `Pause the ${name} video`,
  })
    .replace('class="mbtn"', 'class="mbtn hp-faculty__control"')
    .replace(
      "<button ",
      `<button ${gaAttributes("play button", { component: "homepage video control" })} `
    );

const card = (person, index, id) => {
  const n = index + 1;
  const videoId = `${id}-video-${n}`;
  const descId = `${id}-desc-${n}`;
  const media = person.video
    ? `<video id="${videoId}" class="hp-faculty__video" muted playsinline preload="metadata" poster="${escape(person.still)}" data-auto data-in-view="0.98" data-plays="3" data-src="${escape(person.video)}"${index === 0 ? "" : " data-hold"} aria-hidden="true"></video>${videoControl(videoId, person.name)}`
    : "";
  return `<div class="hp-faculty__card" data-index="${index}"><img class="hp-faculty__still" src="${escape(person.still)}" alt="${escape(person.alt)}" width="470" height="544" decoding="async"><button type="button" class="hp-faculty__pick" aria-label="Show ${escape(person.name)}" aria-describedby="${descId}" hidden ${gaAttributes(`show ${person.name}`, { event: "select" })}></button>${media}<p id="${descId}" class="visually-hidden">${escape(person.description || person.alt)}</p></div>`;
};

const caption = (person, index) =>
  `<div class="hp-faculty__caption" data-index="${index}"><span class="hp-faculty__name">${escape(person.name)}</span><span class="hp-faculty__title">${escape(person.title)}</span></div>`;

const panel = (person, index, id) =>
  `<article class="hp-faculty__panel" data-index="${index}" aria-labelledby="${id}-headline-${index + 1}"><p class="hp-faculty__person">${escape(person.name)}</p><p class="hp-faculty__role">${escape(person.role)}</p><h3 id="${id}-headline-${index + 1}" class="hp-faculty__headline">${escape(person.headline)}</h3><p class="hp-faculty__bio">${escape(person.bio)} <a class="hp-faculty__more" href="${escape(readMoreHref(person))}" aria-label="Read more about ${escape(person.name)}" ${gaAttributes("Read more", { href: readMoreHref(person) })}>Read more</a></p>${person.quote ? `<blockquote class="hp-faculty__quote"><p class="hp-faculty__quote-text">“${escape(person.quote)}”</p><cite class="hp-faculty__cite">— ${escape(person.cite)}</cite></blockquote>` : ""}</article>`;

// Markup contract (design doc section 3): the Stage B parity source. `id` prefixes every id so several copies can
// share a page; it is also the root id that the Places section's `data-wallpaper-follow` selector can target.
export const facultyCarouselHtml = ({
  id = "hp-faculty",
  people = PEOPLE,
  utilityHref = UTILITY_HREF,
} = {}) =>
  `<section class="hp-faculty" id="${id}" aria-labelledby="${id}-heading"><div class="hp-faculty__wall" aria-hidden="true"></div><div class="hp-faculty__inner"><div class="hp-faculty__intro"><h2 id="${id}-heading" class="hp-faculty__heading">Learn from the best.<br><span class="scrib-host">Become<img class="scrib scrib--learn" src="img/scribble-learn.svg" alt="" aria-hidden="true"></span> your best.</h2><p class="hp-faculty__sub">${SUB}</p></div><div class="hp-faculty__grid"><div class="hp-faculty__stage-col"><div class="hp-faculty__stage" role="group" aria-roledescription="carousel" aria-label="Faculty">${people.map((person, i) => card(person, i, id)).join("")}</div><div class="hp-faculty__captions">${people.map(caption).join("")}</div></div><div class="hp-faculty__text-col"><div class="hp-faculty__panels">${people.map((person, i) => panel(person, i, id)).join("")}</div><div class="hp-faculty__controls"><div class="hp-faculty__arrows"><button type="button" class="hp-faculty__arrow hp-faculty__arrow--prev" aria-label="Previous faculty member" hidden ${gaAttributes("previous faculty member", { event: "select" })}>${icon("hp-faculty__arrow-icon", CHEVRON_LEFT, "0 0 320 512")}</button><button type="button" class="hp-faculty__arrow hp-faculty__arrow--next" aria-label="Next faculty member" hidden ${gaAttributes("next faculty member", { event: "select" })}>${icon("hp-faculty__arrow-icon", CHEVRON_RIGHT, "0 0 320 512")}</button></div><a class="hp-faculty__all" href="${escape(utilityHref)}" ${gaAttributes(UTILITY_LABEL, { href: utilityHref })}>${UTILITY_LABEL}${icon("hp-faculty__all-icon", ARROW_RIGHT, "0 0 448 512")}</a></div></div></div><p class="visually-hidden hp-faculty__status" role="status" aria-atomic="true"></p></div></section>`;

// ---- Test support ----

// Renders the markup and runs the two inits in the requested order (`controlsFirst`) or not at all (`manual`, the
// server-markup state). The test runner fakes playback and the source on every video; the Storybook UI plays the
// real clips, as on the page.
export const Harness = ({ html, manual = false, controlsFirst = false }) => {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    const videos = Array.from(root.querySelectorAll("video"));
    const restores = videos.flatMap(video => {
      if (!realPointer.available) return [];
      const restore = [stubPlayback(video), stubSource(video)];
      // like a browser: a video without a source rejects play() (NotSupportedError)
      const play = video.play;
      video.play = () =>
        video.hasAttribute("src")
          ? play.call(video)
          : Promise.reject(new DOMException("no source", "NotSupportedError"));
      return restore;
    });
    const destroy = [];
    if (!manual) {
      if (controlsFirst) destroy.push(initVideoControls(root));
      destroy.push(initFacultyCarousel(root));
      if (!controlsFirst) destroy.push(initVideoControls(root));
    }
    return () => {
      destroy.forEach(cleanup => cleanup());
      restores.forEach(restore => restore());
    };
  }, [html, manual, controlsFirst]);
  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
};

// The real thing, no fakes: real playback, real sources and the real IntersectionObserver. Blank space above and
// below lets a reviewer scroll the fan in and out of view.
export const LiveHarness = ({ html }) => {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    const destroy = [initFacultyCarousel(root), initVideoControls(root)];
    return () => destroy.forEach(cleanup => cleanup());
  }, [html]);
  return (
    <>
      <div style={{ height: "40vh" }} aria-hidden="true" />
      <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
      <div style={{ height: "100vh" }} aria-hidden="true" />
    </>
  );
};
