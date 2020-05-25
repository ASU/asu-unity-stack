const path = require("path");
const packageInfo = require("./package.json");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: {
    "asu-unity-web-components": "./index.js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            // options: {
            //   rootMode: "upward",
            // },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      // Must be below test-utils
    },
  },
};
