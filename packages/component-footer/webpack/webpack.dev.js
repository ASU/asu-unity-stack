const path = require("path");

const common = require("./webpack.common");

// development bundle config
const config = {
  ...common,
  mode: "development",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].development.js",
  },
};

module.exports = config;
