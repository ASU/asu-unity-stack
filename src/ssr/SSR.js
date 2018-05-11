import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ASUHeaderContainer, ASUFooter} from '../core/core.js';
import {Item, FullPageSSR} from '../templates/template';

const componentList = {
    header: {
        type: ASUHeaderContainer,
        domId: 'asu-header-container',
        props: {
            headerObj: ASUHeaderObj
        }
    },
    footer: {
        type: ASUFooter,
        domId: 'asu-footer-container',
        props: {}
    }
};



const ASUHeaderObj = {};

const renderASUComponent =  (req, res, component) => {

    const ASUComponent = component.type;

    // Renders component to string
    const html = ReactDOMServer.renderToString(<ASUComponent {...component.props} />);

    return Item({
        id: component.domId,
        body: html
    });
}

const renderSSRFullPage = (req, res) => {
    const header = renderASUComponent(req, res, componentList.header);
    const footer = renderASUComponent(req, res, componentList.footer);

    res.send(FullPageSSR({
        header: header,
        footer: footer,
        title: 'Test Page'
    }));
}

const sendASUHeader = (req, res) => {
    const html = renderASUComponent(req, res, componentList.header);
    res.send(html);
};

const sendASUFooter = (req, res) => {
    const html = renderASUComponent(req, res, componentList.footer);
    res.send(html);
};

module.exports = {
    renderASUComponent,
    sendASUHeader,
    sendASUFooter,
    renderSSRFullPage
};