const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const PROJECT_DIR = path.resolve(__dirname, "../");

const common = {
  context: path.join(PROJECT_DIR, "src"),
  entry: {
    degreePages: "./index.js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env", "@babel/preset-react"],
            },
          },
        ],
      },
      // Process CSS Modules on files matching '*.module.css'
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      // Process regular global CSS styles
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],

        exclude: /\.module\.css$/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@asu-design-system/components-core":
        "@asu-design-system/components-core/dist/libCore.es.js",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(PROJECT_DIR, "src/assets"), to: "assets" },
        // this is use only for storybook examples
        {
          from: path.join(PROJECT_DIR, "examples/assets"),
          to: "examples/assets",
        },
      ],
    }),
  ],
};

module.exports = common;
