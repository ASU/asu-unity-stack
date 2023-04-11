import "../src/scss/unity-bootstrap-theme.scss";
import "../../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss";

// Import all the Bootstrap bundle
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
