import express from 'express';
import path from 'path';
import render from '../dist/ssr/ssr'

const app = express();

// Render an example of an SSR page we header and footer
app.get('/ssr', render.renderSSRFullPage);

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

// Start server
app.listen(3000);