/**
 * Created by ctestama on 3/21/18.
 */
const path = require("path");
const packageInfo = require("../package.json");

module.exports = {
  entry: {
    [packageInfo.name]: "./index.js",
  },
  context: path.join(__dirname, "..", "src"),
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              rootMode: "upward",
            },
          },
          "eslint-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
