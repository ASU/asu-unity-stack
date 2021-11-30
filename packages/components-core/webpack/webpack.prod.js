const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "../");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].min.js",
    library: {
      name: "AsuWebCore",
      type: "umd",
      umdNamedDefine: true,
      // export: "default",
    },
  },
});
