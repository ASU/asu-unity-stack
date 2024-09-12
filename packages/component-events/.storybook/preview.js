import "@asu/unity-bootstrap-theme/src/scss/unity-bootstrap-theme.bundle.scss";
const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  percy: {
    include: [
      "Cards Grid: Default\$",
      "Cards List: Default\$",
    ],
  },
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters
};

export default preview;
