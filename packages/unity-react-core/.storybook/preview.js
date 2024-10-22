import "@asu/unity-bootstrap-theme/src/scss/unity-bootstrap-theme.bundle.scss";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      {
        name: "Gray 2",
        value: "#e8e8e8",
      },
      {
        name: "Gray 3",
        value: "#d0d0d0",
      },
    ],
  },
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters
};

export default preview;
