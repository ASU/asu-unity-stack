
const path = require('path');

module.exports = {
    plugins: {
        'postcss-cssnext': {},
        'postcss-import': {
            root: path.join(__dirname, '../'),
            path: [path.join(__dirname, '../src')]
        },
        'postcss-nesting': {},
    }
}