module.exports = {
  extends: ["../../.eslintrc.base.js"],
  // TODO
  /**
   * This is neecessary to skip check on these lines
   * app-rfi/src/components/stepper/RfiStepper.js
   *   next = () => t...
   *   prev = () => ...
   */
  parser: "@babel/eslint-parser",
};
