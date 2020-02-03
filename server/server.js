const express = require('express');
const path = require('path')

const brandRender = require('../packages/asu-brand/dist/asu-brand.ssr');

console.log(brandRender, 'BRANDRENDER');

// todo: import ssr bundled components
//import {renderComponentpage, renderSSRFullPage, sendASUHeader, sendASUFooter} from '../dist/ssr/ssr.bundled.js';
const app = express();

/*****
 * Kitchen sink page
 * Serve HTML page which tests bundled packages
 */
// Serve the static cosmos playground if it has been exported.
app.get('/', function(req, res) {
    // todo: add not found message
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Server side rendering of ASU Header
app.get('/header', brandRender.sendASUHeader);

// Server side rendering of ASU Footer
//app.get('/footer', sendASUFooter);


// Serve files for Cosmos playground
app.get('/:file', function (req, res, next) {

    const options = {
        root: __dirname,
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
