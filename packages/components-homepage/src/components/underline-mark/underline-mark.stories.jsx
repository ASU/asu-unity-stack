import React from "react";
import { expect, waitFor } from "storybook/test";

export default {
  title: "Foundations/Underline mark",
  parameters: {
    docs: {
      description: {
        component:
          'Decorative hand-drawn underline. Wrap the phrase in `.scrib-host` and add a child `<img class="scrib scrib--<variant>" alt="" aria-hidden="true">`. Offsets are custom properties: `--scrib-left`, `--scrib-width`, `--scrib-bottom`, `--scrib-opacity`.',
      },
    },
  },
};

// Winning prototype v2.71 values (todo 4.1); `em` offsets scale with the heading font size.
// Exception: reimg is -.1em per brand's QA of the Reimagine section (the prototype had -.5em).
const VARIANTS = {
  "future": {
    art: "scribble-future.svg",
    left: "-.04em",
    width: "104%",
    bottom: "-.2em",
    opacity: "1",
  },
  "myours": {
    art: "scribble-myours.svg",
    left: "2%",
    width: "100%",
    bottom: "-.24em",
    opacity: "1",
  },
  "success": {
    art: "scribble-success.svg",
    left: "2%",
    width: "98%",
    bottom: "-.42em",
    opacity: "1",
  },
  "learn": {
    art: "scribble-learn.svg",
    left: "-4%",
    width: "110%",
    bottom: "-.16em",
    opacity: "1",
  },
  "reimg": {
    art: "scribble-reimg.svg",
    left: "-3%",
    width: "106%",
    bottom: "-.1em",
    opacity: "1",
  },
  "charter-phone": {
    art: "scribble-stories.svg",
    left: "0",
    width: "100%",
    bottom: "-.45em",
    opacity: "1",
  },
};

// Phones only: the prototype hides the charter mark above 900px (`.scrib.m`, lines 629 and 646).
const PHONE_MAX = 900;

const Mark = ({ variant, phrase }) => (
  <span className="scrib-host">
    {phrase}
    <img
      className={`scrib scrib--${variant}`}
      src={`img/${VARIANTS[variant].art}`}
      alt=""
      aria-hidden="true"
    />
  </span>
);

const FutureHeading = () => (
  <h2 className="fs-1 fw-bold lh-1">
    Your future <Mark variant="future" phrase="starts here" />
  </h2>
);
const MyoursHeading = () => (
  <h2 className="fs-1 fw-bold lh-1">
    Make it <Mark variant="myours" phrase="yours" />
  </h2>
);
const SuccessHeading = () => (
  <h2 className="fs-1 fw-bold lh-1">
    <Mark variant="success" phrase="Your success" /> is how we measure ours
  </h2>
);
const LearnHeading = () => (
  <h2 className="fs-1 fw-bold lh-1">
    Learn from the best.
    <br />
    <Mark variant="learn" phrase="Become" /> your best.
  </h2>
);
const ReimgHeading = () => (
  <h2 className="fs-1 fw-bold lh-1">
    A top U.S. university reimagining education for{" "}
    <Mark variant="reimg" phrase="everyone" />
  </h2>
);
const CharterHeading = () => (
  <p className="fs-4">
    ASU is a comprehensive public research university, measured not by whom it
    excludes, but by whom it includes and{" "}
    <Mark variant="charter-phone" phrase="how they succeed" />; advancing
    research and discovery of public value.
  </p>
);

const FIXTURES = {
  "future": FutureHeading,
  "myours": MyoursHeading,
  "success": SuccessHeading,
  "learn": LearnHeading,
  "reimg": ReimgHeading,
  "charter-phone": CharterHeading,
};

const Page = ({ variants }) => (
  <div className="bg-white p-4 pb-5">
    {variants.map(v => {
      const Fixture = FIXTURES[v];
      return <Fixture key={v} />;
    })}
  </div>
);

const normalize = value => value.trim().replace(/^(-?)0\./, "$1.");

const waitForArt = async img => {
  await waitFor(() =>
    expect(img.complete && img.naturalWidth).toBeGreaterThan(0)
  );
};

// Asserts the contract for one rendered mark; the host's text must equal the phrase text.
const assertMark = async (canvasElement, variant) => {
  const expected = VARIANTS[variant];
  const img = canvasElement.querySelector(`.scrib--${variant}`);
  await expect(img).not.toBeNull();
  const host = img.closest(".scrib-host");
  const hostStyle = getComputedStyle(host);
  const style = getComputedStyle(img);

  // decorative
  await expect(img.getAttribute("aria-hidden")).toBe("true");
  await expect(img.getAttribute("alt")).toBe("");
  await expect(img.hasAttribute("tabindex")).toBe(false);

  // host creates the stacking context that keeps z-index:-1 above the section background
  await expect(hostStyle.position).toBe("relative");
  await expect(hostStyle.display).toBe("inline-block");
  await expect(hostStyle.zIndex).toBe("0");

  // base rule (prototype 84-85)
  await expect(style.position).toBe("absolute");
  await expect(style.zIndex).toBe("-1");
  await expect(style.pointerEvents).toBe("none");
  await expect(style.transformOrigin.startsWith("0px")).toBe(true);

  // custom properties carry the offsets
  await expect(normalize(style.getPropertyValue("--scrib-left"))).toBe(
    normalize(expected.left)
  );
  await expect(normalize(style.getPropertyValue("--scrib-width"))).toBe(
    normalize(expected.width)
  );
  await expect(normalize(style.getPropertyValue("--scrib-bottom"))).toBe(
    normalize(expected.bottom)
  );
  await expect(style.opacity).toBe(expected.opacity);

  // ...and resolve to the used geometry
  const fontSize = parseFloat(style.fontSize);
  const hostWidth = parseFloat(hostStyle.width);
  const toPx = (value, base) =>
    value.endsWith("%")
      ? (parseFloat(value) / 100) * hostWidth
      : parseFloat(value) * base;
  // Used width is clamped to the host (prototype v2.71 `img{max-width:100%}`): min(authored, 100%).
  const usedWidth = parseFloat(style.width);
  await expect(usedWidth).toBeLessThanOrEqual(hostWidth + 0.5);
  await expect(usedWidth).toBeCloseTo(
    Math.min(toPx(expected.width, fontSize), hostWidth),
    0
  );
  await expect(parseFloat(style.left)).toBeCloseTo(
    toPx(expected.left, fontSize),
    0
  );
  await expect(parseFloat(style.bottom)).toBeCloseTo(
    toPx(expected.bottom, fontSize),
    0
  );

  // the mark takes no pointer events and never becomes the hit target
  const box = img.getBoundingClientRect();
  const hit = document.elementFromPoint(
    box.left + box.width / 2,
    box.top + box.height / 2
  );
  await expect(hit).not.toBe(img);

  await waitForArt(img);
  await expect(img.getAttribute("src")).toBe(`img/${expected.art}`);
  return { img, host };
};

const PHRASE = {
  future: "starts here",
  myours: "yours",
  success: "Your success",
  learn: "Become",
  reimg: "everyone",
};

// The mark adds no text: the host's text is the phrase and the heading's accessible name is unchanged.
const HEADING_NAME = {
  future: /^Your future starts here$/,
  myours: /^Make it yours$/,
  success: /^Your success is how we measure ours$/,
  learn: /^Learn from the best\.\s*Become your best\.$/,
  reimg: /^A top U\.S\. university reimagining education for everyone$/,
};

const variantStory = variant => ({
  render: () => <Page variants={[variant]} />,
  play: async ({ canvasElement, canvas }) => {
    const { host } = await assertMark(canvasElement, variant);
    if (variant === "charter-phone") return;
    await expect(host.textContent).toBe(PHRASE[variant]);
    await expect(
      canvas.getByRole("heading", { name: HEADING_NAME[variant] })
    ).toBeInTheDocument();
  },
});

export const Future = variantStory("future");
export const Myours = variantStory("myours");
export const Success = variantStory("success");
export const Learn = variantStory("learn");
export const Reimg = variantStory("reimg");

// Charter: phones only. Visible at <= 900px, display:none above (the charter ticket owns the layout).
export const CharterPhone = {
  globals: { viewport: { value: "hp393", isRotated: false } },
  render: () => <Page variants={["charter-phone"]} />,
  play: async ({ canvasElement }) => {
    await expect(window.innerWidth).toBeLessThanOrEqual(PHONE_MAX);
    await assertMark(canvasElement, "charter-phone");
    const img = canvasElement.querySelector(".scrib--charter-phone");
    await expect(getComputedStyle(img).display).toBe("block");
  },
};

const allVariants = ["future", "myours", "success", "learn", "reimg"];

const viewportStory = (name, width) => ({
  name,
  globals: { viewport: { value: `hp${width}`, isRotated: false } },
  render: () => <Page variants={[...allVariants, "charter-phone"]} />,
  play: async ({ canvasElement }) => {
    await expect(window.innerWidth).toBe(width);
    for (const variant of allVariants) {
      await assertMark(canvasElement, variant);
    }
    // charter-phone: shown on phones only, hidden (and out of layout) above 900px
    const charter = canvasElement.querySelector(".scrib--charter-phone");
    await expect(getComputedStyle(charter).display).toBe(
      width <= PHONE_MAX ? "block" : "none"
    );
    // a mark that is shown never overflows the viewport sideways
    await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(
      width
    );
  },
});

export const Viewport393 = viewportStory("All variants, 393", 393);
export const Viewport768 = viewportStory("All variants, 768", 768);
export const Viewport1280 = viewportStory("All variants, 1280", 1280);
export const Viewport1920 = viewportStory("All variants, 1920", 1920);
