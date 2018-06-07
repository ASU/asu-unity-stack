import express from 'express';
import path from 'path';
import render from '../dist/ssr/ssr'

const app = express();

// Render an example of an SSR page with header and footer
app.get('/ssr', function (req, res) {
    render.renderSSRFullPage(req, res, false);
});

app.get('/ssrprod', function (req, res) {
    render.renderSSRFullPage(req, res, true);
});

// Renders ASU Header
app.get('/header', render.sendASUHeader);

// Renders ASU Footer
app.get('/footer', render.sendASUFooter);

// Serve bundles
app.get('/:name/:file', function (req, res, next) {

    const options = {
        root: __dirname + '/../dist/' + req.params.name + '/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    const fileName = req.params.file;
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

// Serve bundles
app.get('/:file', function (req, res, next) {

    const options = {
        root: __dirname + '/../cosmos-export/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    const fileName = req.params.file;
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent cosmos file:', fileName);
        }
    });
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'cosmos-export', 'index.html'));
});

// Start server
app.listen(3000);