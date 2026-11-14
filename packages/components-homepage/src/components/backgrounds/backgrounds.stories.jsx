import React from "react";
import { expect, waitFor } from "storybook/test";

export default {
  title: "Foundations/Backgrounds",
  parameters: {
    docs: {
      description: {
        component:
          'Decorative backgrounds. Put them first inside a `.hp-bg-host` (positioned, isolated) and mark them `aria-hidden="true"`. Network art (`.hp-network-1|2|3`) is hidden at 900px and under. Topo art (`topo-white.png`) exists only as `.hp-topo--card` (fit-quiz card) and `.hp-topo--band` (above 1920px).',
      },
    },
  },
};

const PHONE_MAX = 900;
const WIDE_MIN = 1441;

const NETWORKS = {
  1: { art: "network-1.svg", width: 366 },
  2: { art: "network-2.svg", width: 400 },
  3: { art: "network-3.svg", width: 360 },
};

const Network = ({ n }) => (
  <div className={`hp-network hp-network-${n}`} aria-hidden="true" />
);

// A media block with its network pattern tucked behind it and bleeding off the edge.
const NetworkSection = ({ n }) => (
  <div className="bg-white overflow-hidden px-5 py-5">
    <div className={`hp-bg-host my-5 w-50 ${n === 2 ? "ms-auto" : ""}`}>
      <Network n={n} />
      <div className="ratio ratio-16x9 bg-gray-7 rounded">
        <div className="d-flex align-items-center p-5 text-white">
          <p className="mb-0">Video or photo placeholder {n}</p>
        </div>
      </div>
    </div>
  </div>
);

// The fit-quiz card is a narrow column (about 250px at 1280, the card's own width sets the art scale).
const TopoCardFixture = () => (
  <div className="container-fluid bg-white p-4">
    <div className="row">
      <div className="col-12 col-md-4 col-xl-3">
        <div className="hp-bg-host overflow-hidden rounded bg-gray-7 text-white p-4">
          <span className="hp-topo hp-topo--card" aria-hidden="true" />
          <p className="text-uppercase small">Not sure?</p>
          <h3 className="h4">Discover what’s right for me</h3>
          <a className="text-white fw-bold" href="#fit-quiz">
            Take the fit quiz
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Stories: the dark content block sits on the band; the band shows around it above 1920px.
const TopoBandFixture = () => (
  <div className="hp-bg-host overflow-hidden vh-100">
    <span className="hp-topo hp-topo--band" aria-hidden="true" />
    <div className="h-50 w-75 mx-auto bg-gray-7 text-white p-5">
      <p className="mb-0">Stories content sits above the band</p>
    </div>
  </div>
);

const artUrl = value => {
  const match = /url\("?([^")]+)"?\)/.exec(value);
  return match ? match[1] : null;
};

const loadsImage = url =>
  new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(image.naturalWidth > 0);
    image.onerror = () => resolve(false);
    image.src = url;
  });

const assertDecorative = async el => {
  const style = getComputedStyle(el);
  await expect(el.getAttribute("aria-hidden")).toBe("true");
  await expect(el.textContent).toBe("");
  await expect(el.hasAttribute("tabindex")).toBe(false);
  await expect(style.position).toBe("absolute");
  await expect(style.pointerEvents).toBe("none");
  // below content: negative z-index inside the host's stacking context
  await expect(style.zIndex).toBe("-1");
  const host = el.closest(".hp-bg-host");
  await expect(getComputedStyle(host).position).toBe("relative");
  await expect(getComputedStyle(host).isolation).toBe("isolate");
};

const assertNetwork = async (canvasElement, n) => {
  const el = canvasElement.querySelector(`.hp-network-${n}`);
  await expect(el).not.toBeNull();
  await assertDecorative(el);
  const style = getComputedStyle(el);
  const url = artUrl(style.backgroundImage);
  await expect(url).toContain(NETWORKS[n].art);
  await waitFor(async () => expect(await loadsImage(url)).toBe(true));

  if (window.innerWidth <= PHONE_MAX) {
    // art is hidden at 900px and under (prototype 333, 558)
    await expect(style.display).toBe("none");
    return;
  }
  await expect(style.display).toBe("block");
  const width = parseFloat(style.width);
  const edge = n === 2 ? parseFloat(style.right) : parseFloat(style.left);
  if (window.innerWidth < WIDE_MIN) {
    // prototype 305-311: fixed width, bleeding 48px past the media's distance to the window edge
    await expect(width).toBe(NETWORKS[n].width);
    await expect(edge).toBe(-96);
  } else {
    // prototype 2258-2261: grows and docks further out on wide screens
    await expect(width).toBeGreaterThan(NETWORKS[n].width);
    await expect(edge).toBeLessThan(-96);
  }
  // the art keeps its aspect ratio
  await expect(parseFloat(style.height) / width).toBeGreaterThan(1);
};

const assertTopoOnlyInAllowedContexts = async canvasElement => {
  const bad = [...canvasElement.querySelectorAll("*")].filter(el => {
    const allowed =
      el.classList.contains("hp-topo--card") ||
      el.classList.contains("hp-topo--band");
    const ownsTopo = [null, "::before"].some(pseudo =>
      getComputedStyle(el, pseudo).backgroundImage.includes("topo")
    );
    return ownsTopo && !allowed;
  });
  await expect(bad).toHaveLength(0);
  const base = canvasElement.querySelector(
    ".hp-topo:not(.hp-topo--card):not(.hp-topo--band)"
  );
  await expect(base).toBeNull();
};

const networkStory = n => ({
  globals: { viewport: { value: "hp1280", isRotated: false } },
  render: () => <NetworkSection n={n} />,
  play: async ({ canvasElement }) => {
    await expect(window.innerWidth).toBe(1280);
    await assertNetwork(canvasElement, n);
  },
});

export const Network1 = networkStory(1);
export const Network2 = networkStory(2);
export const Network3 = networkStory(3);

export const TopoCard = {
  name: "Topo, fit-quiz card",
  render: () => <TopoCardFixture />,
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector(".hp-topo--card");
    await expect(el).not.toBeNull();
    await assertDecorative(el);
    const style = getComputedStyle(el);
    // prototype 924
    await expect(artUrl(style.backgroundImage)).toContain("topo-white.png");
    await expect(style.backgroundSize).toMatch(/^560%( auto)?$/);
    await expect(style.backgroundPosition).toBe("12% 70%");
    await expect(style.backgroundRepeat).toBe("no-repeat");
    await expect(parseFloat(style.opacity)).toBeCloseTo(0.6, 5);
    // covers the card (inset 0)
    const card = el.closest(".hp-bg-host").getBoundingClientRect();
    const box = el.getBoundingClientRect();
    await expect(box.width).toBeCloseTo(card.width, 0);
    await expect(box.height).toBeCloseTo(card.height, 0);
    await waitFor(async () =>
      expect(await loadsImage(artUrl(style.backgroundImage))).toBe(true)
    );
    await assertTopoOnlyInAllowedContexts(canvasElement);
  },
};

// Above 1920px only; the band is display:none at 1920 and under.
export const TopoBand = {
  name: "Topo, band above 1920",
  globals: { viewport: { value: "hp2560", isRotated: false } },
  render: () => <TopoBandFixture />,
  play: async ({ canvasElement }) => {
    await expect(window.innerWidth).toBeGreaterThan(1920);
    const el = canvasElement.querySelector(".hp-topo--band");
    await expect(el).not.toBeNull();
    await assertDecorative(el);
    const style = getComputedStyle(el);
    await expect(style.display).toBe("block");
    // $asu-gray-1 (#191919)
    await expect(style.backgroundColor).toBe("rgb(25, 25, 25)");
    // prototype 2282: band = 2 * min((100vh - 147px) / 2, 370px)
    await expect(parseFloat(style.height)).toBeCloseTo(
      2 * Math.min((window.innerHeight - 147) / 2, 370),
      0
    );
    // prototype 2283: topo layer at .5, 1280px tiles repeating across
    const layer = getComputedStyle(el, "::before");
    await expect(artUrl(layer.backgroundImage)).toContain("topo-white.png");
    await expect(layer.backgroundSize).toMatch(/^1280px( auto)?$/);
    await expect(layer.backgroundRepeat).toBe("repeat-x");
    await expect(layer.opacity).toBe("0.5");
    await expect(layer.pointerEvents).toBe("none");
    await assertTopoOnlyInAllowedContexts(canvasElement);
  },
};

const ScalingPage = () => (
  <>
    <NetworkSection n={1} />
    <NetworkSection n={2} />
    <NetworkSection n={3} />
    <TopoCardFixture />
    <TopoBandFixture />
  </>
);

const scalingStory = width => ({
  name: `Scaling, ${width}`,
  globals: { viewport: { value: `hp${width}`, isRotated: false } },
  render: () => <ScalingPage />,
  play: async ({ canvasElement }) => {
    await expect(window.innerWidth).toBe(width);
    for (const n of [1, 2, 3]) {
      await assertNetwork(canvasElement, n);
    }
    const band = canvasElement.querySelector(".hp-topo--band");
    // the band exists only above 1920px
    await expect(getComputedStyle(band).display).toBe(
      width > 1920 ? "block" : "none"
    );
    // the topo card is the only topo context that shows at every width
    await expect(
      getComputedStyle(canvasElement.querySelector(".hp-topo--card")).display
    ).toBe("block");
    await assertTopoOnlyInAllowedContexts(canvasElement);
    await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(
      width
    );
  },
});

export const Scaling393 = scalingStory(393);
export const Scaling768 = scalingStory(768);
export const Scaling1280 = scalingStory(1280);
export const Scaling1920 = scalingStory(1920);
