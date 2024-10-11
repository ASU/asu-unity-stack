// @ts-check

const coreConfig = require("../../jsdoc.config");

module.exports = {
  ...coreConfig,
  source: {
    ...coreConfig.source,
    include: [
      ...coreConfig.source.include,
      "./src/header/core/models",
      "./src/footer/core/models",
      "./src/header/components",
      "./src/footer/components",
    ],
  },
};
