module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./setupTests.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.css$": "jest-transform-css",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-file",
  },
  moduleNameMapper: {
    "^@asu/unity-react-core$": "<rootDir>/../unity-react-core/src/index.js",
  },
};
