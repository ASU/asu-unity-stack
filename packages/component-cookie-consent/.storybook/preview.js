const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters
};

export default preview;
