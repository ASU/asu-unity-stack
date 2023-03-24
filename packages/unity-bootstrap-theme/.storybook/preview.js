import "../src/scss/unity-bootstrap-theme.scss";
import "../../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
