const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const devWebpack = require("./webpack.development.js");
const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss-loader',
    config: {
        path: path.join(__dirname, './postcss.config.js')
    }
  }
};

module.exports = devWebpack;

module.exports.push(
  merge(common, {
    mode: "production",
    entry: {
      "asu-rs-carousel": "./index.js"
    },
    output: {
      path: path.resolve(__dirname, "..", "dist"),
      filename: "[name].production.js",
      libraryTarget: "umd",
      library: "",
      umdNamedDefine: true,
      globalObject: "typeof self !== 'undefined' ? self : this"
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].production.css"
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                      localIdentName: '[local]___[hash:base64:5]'
                    },
                    importLoaders: 1
                }
            },
            postCSSLoader
          ]
        }
      ]
    },
    optimization: {
      usedExports: true,
    },
    externals: {
      react: "React",
      "react-dom": "ReactDOM"
    }
  })
);
