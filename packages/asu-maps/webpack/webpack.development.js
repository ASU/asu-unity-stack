const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const postCSSLoader = {
  loader: "postcss-loader",
  options: {
    config: {
      path: path.join(__dirname, "./postcss.config.js")
    }
  }
};

// Dev client bundle config
module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "[name].development.js",
    libraryTarget: "umd",
    library: "",
    umdNamedDefine: true
  },
  module: {
    rules: [
      // load custom modular styles (not react-checkbox-tree)
      {
        test: /\.css$/,
        exclude: [/react-checkbox-tree/],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]___[hash:base64:5]"
              },
              importLoaders: 1
            }
          },
          postCSSLoader
        ]
      },
      // load contributed styles as globals (needed for fontawesome integration)
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: false
            }
          }
        ]
      }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
});
