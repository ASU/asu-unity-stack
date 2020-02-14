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

// Dev client bundle config
module.exports = merge(common, {
    mode: 'development',
    entry: {
      'asu-rs-carousel': './index.js'
    },
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
                          importLoaders: 1,
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

// Dev SSR bundle config
/*
module.exports.push(merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './ssr/ssr.js',
    output: {
        path: path.join(__dirname, '..', 'dist', 'ssr'),
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
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            exportOnlyLocals: true
                        }
                    },
                    postCSSLoader
                ]
            }
        ]
    },
    externals: [nodeExternals()],

}));*/
