import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ASUHeaderContainer, ASUFooter} from './core/core.js';
import template from './templates/template';

const ASUHeaderObj = {};

const renderASUComponent =  (req, res, component) => {

    const ASUComponent = component.type;

    // Renders component to string
    const html = ReactDOMServer.renderToString(<ASUComponent {...component.props} />);

    res.send(template({
        id: component.domId,
        body: html
    }));
}

const renderASUHeader = (req, res) => {
    renderASUComponent(req, res, {type: ASUHeaderContainer, domId: 'asu-header-container', props: {headerObj: ASUHeaderObj}});
};

const renderASUFooter = (req, res) => {
    renderASUComponent(req, res, {type: ASUFooter, domId: 'asu-footer-container', props: {}, template: './src/core/templates/footer.html'});
};

module.exports = {
    renderASUComponent,
    renderASUHeader,
    renderASUFooter
};