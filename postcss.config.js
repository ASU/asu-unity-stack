module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
          'nesting-rules': true
      }
    },
    'postcss-csso': {
      usage: {
        blacklist: {
            tags: ["a", "body", "div", "ul", "li", "h1", "h2", "h3", "h4", "span"]
        }
      }
    }
  }
}
