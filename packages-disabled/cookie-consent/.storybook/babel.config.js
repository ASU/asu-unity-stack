module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic", // defaults to classic (classic == createElement calls)
        importSource: "preact", // NOT preact/jsx-runtime
      },
    ],
  ],
};
