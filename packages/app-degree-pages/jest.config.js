module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./setupTests.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.css$": "jest-transform-css",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-file",
  },
  transformIgnorePatterns: ["/node_modules/"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "/node_modules/",
    "@asu-design-system/components-core",
    "/node_modules/(?!@asu-design-system/*)(.*)",
  ],
  // coveragePathIgnorePatterns: ["<rootdir>/node_modules"],
};
//
