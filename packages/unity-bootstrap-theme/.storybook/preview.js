import "../src/scss/unity-bootstrap-theme.bundle.scss";
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
  html: {
    prettier: {
      tabWidth: 4,
      htmlWhitespaceSensitivity: "ignore",
    },
    root: ".row", // can be customized to wrap an element
    removeComments: /^\s*\s*$/,
    transform: (code) => {
      return code.replace(/<svg.*<\/svg>/g, "");
    }
  },
};
