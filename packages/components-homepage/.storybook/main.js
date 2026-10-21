import { dirname } from "path";
import { fileURLToPath } from "url";

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(value)));
}

export default {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
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
