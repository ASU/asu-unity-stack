import { dirname } from "path";
import { fileURLToPath } from "url";

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(value)));
}

// Resolve FA package root: dirname of package.json = the FA install directory.
// Used to serve FA 5.15.4 locally at /fontawesome so preview-head.html can link
// /fontawesome/css/all.min.css without fetching from a third-party CDN.
const fontAwesomeDir = getAbsolutePath(
  "@fortawesome/fontawesome-free/package.json"
);

export default {
  stories: [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    fileURLToPath(import.meta.resolve("../../../.storybook-config/index.js")),
    fileURLToPath(
      import.meta
        .resolve("../../../.storybook-config/dataLayerListener/index.js")
    ),
    getAbsolutePath("@whitespace/storybook-addon-html"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest"),
  ],
  // Serve the art at /img so stories use the production-relative `img/<file>` paths.
  // Serve the installed FA 5.15.4 package tree at /fontawesome so preview-head.html
  // can load /fontawesome/css/all.min.css as a same-origin request (no CDN).
  staticDirs: [
    { from: "../src/img", to: "/img" },
    { from: fontAwesomeDir, to: "/fontawesome" },
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
  },
  // The shared preset injects a CDN <script>; this package forbids third-party scripts.
  previewHead: head =>
    head.replace(
      /<script\b[^>]*\bsrc=["']https?:\/\/[^>]*>\s*<\/script>/gi,
      ""
    ),
  docs: {
    autodocs: true,
  },
};
