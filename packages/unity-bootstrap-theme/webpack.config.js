const autoprefixer = require("autoprefixer");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

const env = process.env.NODE_ENV || "development";
const mode = env === "production" ? "production" : "development";

const paths = {
  js: path.resolve(__dirname, "src/js"),
  distJS: path.resolve(__dirname, "dist/js"),
  imgsrc: path.resolve(__dirname, "src/img"),
  img: path.resolve(__dirname, "dist/img"),
  sass: path.resolve(__dirname, "src/scss"),
  css: path.resolve(__dirname, "dist/css"),
  node: path.resolve(__dirname, "node_modules"),
};

const devtool = "source-map";

const jsConfig = {
  name: "JS",
  mode,
  devtool,
  entry: {
    "global-header": [path.resolve(paths.js, "global-header.js")],
    "googleAnalytics": path.resolve(paths.js, "googleAnalytics.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].js",
    library: "bootstrapASU",
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "this",
    pathinfo: true,
  },
  externalsPresets: { node: true },
  externals: [nodeExternals(), "commonjs sharp"],
  plugins: [
    new ESLintPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: paths.imgsrc, to: paths.img },
        {
          from: path.resolve(
            paths.node,
            "bootstrap",
            "dist",
            "js",
            "bootstrap.bundle.min.js"
          ),
          to: paths.distJS,
        },
      ],
    }),
  ].filter(Boolean),
  optimization: {
    minimize: env === "production",
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: true,
        },
      }),
    ],
  },
};

const cssConfig = {
  name: "CSS and Images",
  mode,
  devtool,
  entry: {
    "unity-bootstrap-theme": path.resolve(paths.sass, "unity-bootstrap-theme.scss"),
    "global-header": path.resolve(paths.sass, "extends", "_global-header.scss"),
    "global-footer": path.resolve(paths.sass, "extends", "_globalfooter.scss"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[name][ext][query]",
  },
  plugins: [
    new StylelintPlugin({
      configFile: "./.stylerules.js",
      files: "./src/**/*.{scss,css}",
    }),
    new MiniCssExtractPlugin({
      filename: path.join("..", "dist", "css", "[name].css"),
      // chunkFilename: '[id].css'
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ].filter(Boolean),
  },
};
module.exports = [
  // jsConfig,
  cssConfig,
];
