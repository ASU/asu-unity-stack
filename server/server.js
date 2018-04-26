import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack/webpack.dev.js';

const render = require('../dist/SSR');
const app = express();

const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: '/dist/',
}));

// Serve built files with static files middleware
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Serve requests with our renderHeader function
app.get('/header', render.renderASUHeader);

app.get('/footer', render.renderASUFooter);

app.get('/:name/:type/:file', function (req, res, next) {

    var options = {
        root: __dirname + '/..' +'/dist/' + req.params.name + '/' + req.params.type + '/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = req.params.file;
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });

});

// Start server
app.listen(3000);