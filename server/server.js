import express from 'express';
import path from 'path';

const render = require('../dist/SSR');
const app = express();


// Serve built files with static files middleware
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Serve requests with our renderHeader function
app.get('/header', render.renderASUHeader);

app.get('/footer', render.renderASUFooter);

app.get('/:name/:file', function (req, res, next) {

    var options = {
        root: __dirname + '/../dist/' + req.params.name + '/',
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