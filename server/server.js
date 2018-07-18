import express from 'express';
import path from 'path';
import render from '../dist/ssr/ssr.bundled.js';
const app = express();


/***
 * SSR rendering server
 */
// Render an example of an SSR page with header and footer
app.get('/ssr', function (req, res) {
    render.renderSSRFullPage(req, res, false);
});

app.get('/ssrprod', function (req, res) {
    render.renderSSRFullPage(req, res, true);
});

// Server side rendering of ASU Header
app.get('/header', render.sendASUHeader);

// Server side rendering of ASU Footer
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
            //console.log('Sent:', fileName);
        }
    });
});



// Serves an example of a Unity component wrapped as a custom HTML element (web component)
app.get('/components', function (req, res) {
    render.renderComponentPage(req, res, true);
});


/*****
 * COSMOS
 */
// Serve the static cosmos playground if it has been exported.
app.get('/', function(req, res) {
    // todo: add not found message

    res.sendFile(path.join(__dirname, '..', 'cosmos-export', 'index.html'));
});


// Serve files for Cosmos playground
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
            //console.log('Sent cosmos file:', fileName);
        }
    });
});


// Start server
app.listen(3000);