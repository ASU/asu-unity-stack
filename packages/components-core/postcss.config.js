// const cssModules = require("postcss-modules");

module.exports = {
  plugins: [
    // require("stylelint")({}),
    //
    // A combined lint and build task where the plugin is used via the
    // PostCSS JS API, but within postcss-import (using the its plugins option)
    // so that the source files are linted before any transformations.
    require("postcss-import")({
      plugins: [
        require("stylelint")({
          /* your options */
        }),
      ],
    }),
    require("postcss-reporter")({ clearReportedMessages: true }),
  ],
};
