const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
        config: {
            path: path.join(__dirname, './postcss.config.js')
        }
    }
};

module.exports = [];

// Dev client bundle config
module.exports.push(merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: "[name].development.js",
        libraryTarget: 'umd',
        library: '',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                          modules: {
                            localIdentName: '[local]___[hash:base64:5]'
                          },
                          importLoaders: 1
                      }
                    },
                    postCSSLoader
                ]
            }
        ]
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
}));


