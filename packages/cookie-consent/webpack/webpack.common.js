const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const PROJECT_DIR = path.resolve(__dirname, "../");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "cookie-consent.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
  plugins: [
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/dist/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * See `Options and Defaults` for information
     */
    new CleanWebpackPlugin(),
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: "styles",
  //         test: /\.css$/,
  //         chunks: "all",
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
};
