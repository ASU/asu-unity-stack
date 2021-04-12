const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

const PROJECT_DIR = path.resolve(__dirname, "../");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].dev.js",
    libraryTarget: "umd",
    library: "AsuCookieConsent",
    umdNamedDefine: true,
  },
});
