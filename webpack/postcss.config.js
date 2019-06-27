const path = require('path');


module.exports = {
    plugins: {
        'tailwindcss': require('tailwindcss'),
        'postcss-preset-env': {
            stage: 1,
            features: {
                'nesting-rules': true
            }
        }
    }
}