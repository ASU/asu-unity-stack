const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = [];

// Dev client bundle config
module.exports.push(merge(common, {
    mode: 'development',
    context: path.join(__dirname, '..', 'src'),
    entry: {
        core: './core/core.js'
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: "[name]/[name].js",
        libraryTarget: 'umd',
        library: ["ASUnity", "[name]"],
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]'} },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.join(__dirname, './postcss.config.js')
                            }
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
}));

// Dev SSR bundle config
module.exports.push(merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    context: path.join(__dirname, '..', 'src'),
    entry: './SSR.js',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'SSR.js',
        libraryTarget: 'umd'
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'css-loader/locals?module&localIdentName=[name]__[local]___[hash:base64:5]',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.join(__dirname, './postcss.config.js')
                            }
                        }
                    }
                ]
            }
        ]
    },
    externals: [nodeExternals()],
}));