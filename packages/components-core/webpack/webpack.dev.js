const { merge } = require("webpack-merge");

const DashboardPlugin = require("webpack-dashboard/plugin");

const common = require("./webpack.common.js");
const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "../");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(PROJECT_DIR, "dist"),
    compress: true,
  },
  plugins: [new DashboardPlugin()],
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].dev.js",
  },
});
