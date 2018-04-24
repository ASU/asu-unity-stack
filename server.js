import express from 'express';
import fs from 'fs';
import path from 'path';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from 'react-dom/server';
import {ASUHeaderContainer, ASUFooter} from './src/core/core.js';


function renderASUComponent(req, res, component) {

    const ASUComponent = component.type;

    // Renders component to string
    const html = ReactDOMServer.renderToString(<ASUComponent {...component.props} />);

    // Load template, insert component, and send
    fs.readFile(component.template, 'utf8', function (err, data) {
        if (err) throw err;

        const re = new RegExp("<div id=\"" + component.domId + "\"><\/div>");

        // Inserts the rendered React HTML into our main div
        const document = data.replace(re, `<div id="${component.domId}">${html}</div>`);

        // Sends the response back to the client
        res.send(document);
    });
}

const app = express();

// Serve built files with static files middleware
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Serve requests with our renderHeader function
app.get('/header', function (req, res) {
    const ASUHeaderObj = {};
    renderASUComponent(req, res, {type: ASUHeaderContainer, domId: 'asu-header-container', props: {headerObj: ASUHeaderObj}, template: './src/core/templates/header.html'});
});

app.get('/footer', function (req, res) {
    renderASUComponent(req, res, {type: ASUFooter, domId: 'asu-footer-container', props: {}, template: './src/core/templates/footer.html'});
});

app.get('/js/:name', function (req, res, next) {

    var options = {
        root: __dirname + '/dist/js/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = req.params.name;
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