module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./setupTests.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    // "^@asu-design-system/components-core/^.+\\.(js|jsx)$": "babel-jest",
    // "@asu-design-system/components-core$": "babel-jest",
    "^.+\\.css$": "jest-transform-css",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-file",
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "@asu-design-system/components-core": "<rootDir>/mocks/components-core-mocks.js",
  },
};
