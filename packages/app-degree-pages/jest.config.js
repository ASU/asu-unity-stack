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
    "@asu-design-system/components-core",
    "/node_modules/(?!@asu-design-system/*)(.*)",
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/src/**/*.stories.js",
    "!<rootDir>/src/core/components/icons/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/core/hooks/use-logger.js",
    "!<rootDir>/src/core/models/*.js",
    "!<rootDir>/src/core/services/legacy-degree-http-service.js",
    "!<rootDir>/src/core/utils/init-page-degree.js",
    "!<rootDir>/src/core/utils/dev-tools-utils.js",
  ],
};
