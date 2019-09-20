module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
          'nesting-rules': true
      }
    }
  }
}
