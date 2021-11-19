const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const PROJECT_DIR = path.resolve(__dirname, "../");

const common = {
  context: path.join(PROJECT_DIR, "src"),
  entry: {
    Footer: "./index.js",
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
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
};

module.exports = common;
