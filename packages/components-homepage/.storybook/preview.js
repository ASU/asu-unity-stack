import "@asu/unity-bootstrap-theme/src/scss/unity-bootstrap-theme.bundle.scss";
import "../src/scss/components-homepage.scss";
import "../src/js/index.js";

// The shared .storybook-config/viewports.js holds UDS breakpoints, not these.
const homepageViewports = {
  hp393: {
    name: "Phone 393",
    styles: { width: "393px", height: "852px" },
    type: "mobile",
  },
  hp768: {
    name: "Tablet 768",
    styles: { width: "768px", height: "1024px" },
    type: "tablet",
  },
  hp1024: {
    name: "Desktop 1024",
    styles: { width: "1024px", height: "768px" },
    type: "desktop",
  },
  hp1280: {
    name: "Desktop 1280",
    styles: { width: "1280px", height: "800px" },
    type: "desktop",
  },
  hp1440: {
    name: "Desktop 1440",
    styles: { width: "1440px", height: "900px" },
    type: "desktop",
  },
  hp1920: {
    name: "Wide 1920",
    styles: { width: "1920px", height: "1080px" },
    type: "desktop",
  },
  // Above 1920px the topo band appears (Backgrounds).
  hp2560: {
    name: "Ultra-wide 2560",
    styles: { width: "2560px", height: "1440px" },
    type: "desktop",
  },
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    layout: "fullscreen",
    viewport: { options: homepageViewports },
    a11y: { test: "off" },
    html: {
      prettier: {
        tabWidth: 4,
        htmlWhitespaceSensitivity: "ignore",
      },
      removeComments: /^\s*\s*$/,
    },
  },
};

export default preview;
