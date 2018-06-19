/***
 * Configuration for outputtting a bundle of react components wrapped
 * as web components.
 * @type {merge}
 **/
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const nodeExternals = require('webpack-node-externals');
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
module.exports = merge(common, {
    mode: 'development',
    entry: {
        webcomponents: ['./core/webcomponents.js']
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: "[name]/[name].development.js",
        libraryTarget: 'umd',
        library: [""],
        publicPath: ""
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "react-web-component-style-loader" },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
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
});

