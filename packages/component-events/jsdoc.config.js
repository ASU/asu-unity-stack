// @ts-check

const coreConfig = require("../../jsdoc.config");

module.exports = {
  ...coreConfig,
  source: {
    ...coreConfig.source,
    include: [
      ...coreConfig.source.include,
      "../components-core/src/core/types",
      "./src/core/types",
      "./src/components",
    ],
  },
};
