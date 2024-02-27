import "@asu/unity-bootstrap-theme/src/scss/unity-bootstrap-theme.bundle.scss";

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters
};

export default preview;
