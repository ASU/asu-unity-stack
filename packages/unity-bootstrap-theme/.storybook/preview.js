import "../src/scss/unity-bootstrap-theme.bundle.scss";
import "../../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss";

// Import all the Bootstrap bundle
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

export const parameters = {
  options: {
    storySort: {
      order: [
        'Design',
        [
          'Colors',
          'Typography',
          'Layout',
          'Icons',
          'Backgrounds',
          'Focus States',
        ],
        'Atoms',
        'Molecules',
        'Organisms',
        'Components',
        'Docs',
        [
          'Global Header',
          [
            'Header top',
            'Header main',
            'Navbar options',
            'No navigation',
            'Additional considerations',
            'Mobile Breakpoint'
          ],
          'Content Sections',
          'Hero',
        ],
      ],
    },
  },
  layout: 'fullscreen',
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
    root: "#html-root", // can be customized to wrap an element
    removeComments: /^\s*\s*$/,
    transform: (code) => {
      // remove Fontawesome transforming span into svg
      code = code.replace(/<svg.*?<\/svg>/gi, "");
      code = code.replace(/(<!--\s)(<span.*?class=.*?fa-.*?><\/span>)(\s-->)/gi, "$2");
      code = code.replace(/(<!--\s)(<i.*?class=.*?fa-.*?><\/i>)(\s-->)/gi, "$2");
      return code;
    }
  },
};
