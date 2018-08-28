const path = require('path');


module.exports = {
    plugins: {
        'postcss-import': {
            root: path.join(__dirname, '../'),
            path: [path.join(__dirname, '../src')]
        },
        'postcss-preset-env': {
            stage: 2,
            features: {
                'nesting-rules': true
            }
        }
    }
}