const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const nodeExternals = require('webpack-node-externals');
const devWebpack = require("./webpack.development.js");

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
      config: {
          path: path.join(__dirname, './postcss.config.js')
      }
  }
};

module.exports = devWebpack;

module.exports.push(
  merge(common, {
    mode: "production",
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
        }
      ]
    },
    externals: {
      react: "React",
      "react-dom": "ReactDOM"
    }
  })
);


// Dev SSR bundle config
module.exports.push(merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './ssr/ssr.js',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'asu-brand.ssr.js',
        libraryTarget: 'umd'
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                              localIdentName: "[local]___[hash:base64:5]"
                            },
                            onlyLocals: true
                        }
                    },
                    postCSSLoader
                ]
            }
        ]
    },
    externals: [nodeExternals()],

}));
