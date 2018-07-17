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
module.exports.push(merge(common, {
    mode: 'development',
    entry: {
        core: ['./core/core.js']
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: "[name]/[name].development.js",
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
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    postCSSLoader
                ]
            }
        ]
    }
}));

// Dev SSR bundle config
module.exports.push(merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.join(__dirname, '..', 'server', 'ssr', 'ssr.js'),
    output: {
        path: path.join(__dirname, '..', 'server', 'ssr'),
        filename: 'ssr.bundled.js',
        libraryTarget: 'umd'
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader/locals',
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
    externals: [nodeExternals()],

}));