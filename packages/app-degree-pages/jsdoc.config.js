// @ts-check

const coreConfig = require("../../jsdoc.config");

module.exports = {
  ...coreConfig,
  opts: {
    ...coreConfig.opts,
    recurse: false,
  },
  source: {
    ...coreConfig.source,
    include: [
      ...coreConfig.source.include,
      "../components-core/src/core/types",
      "./src/core/types",
      "./src/components/ListingPage",
      "./src/components/DetailPage",
    ],
    exclude: [
      "./src/core/types/grid-column-types.js",
      "./src/core/types/shared-local-types.js",
    ],
  },
};
