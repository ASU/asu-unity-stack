import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ASUBrandHeader, ASUFooter} from '../core/core.js';
import {Item, FullPageSSR, FullPageSSRProd, ComponentPage} from './templates/template';
import ASUBrandHeaderExampleConfig from '../../examples/ASUBrandHeaderExampleConfig';

const componentList = {
    header: {
        type: ASUBrandHeader,
        domId: 'asu-header-container',
        props: {
            headerObj: ASUBrandHeaderExampleConfig
        }
    },
    footer: {
        type: ASUFooter,
        domId: 'asu-footer-container',
        props: {}
    }
};

/***
 * Render a single ASU Unity component server side
 * @param req
 * @param res
 * @param component
 * @returns {*}
 */
const renderASUComponent =  (req, res, component) => {

    const ASUComponent = component.type;

    // Renders component to string
    const html = ReactDOMServer.renderToString(<ASUComponent {...component.props} />);

    return Item({
        id: component.domId,
        body: html
    });
}

/**
 * Serves page with web components bundle.
 * @param req
 * @param res
 * @param prod
 */
const renderComponentPage = (req, res, prod) => {
    const config = JSON.stringify(ASUBrandHeaderExampleConfig);
    prod = prod ? true: false;


    res.send(ComponentPage({
        title: 'Test Page',
        props: config
    }));
};

const renderSSRFullPage = (req, res, prod) => {
    const header = renderASUComponent(req, res, componentList.header);
    const footer = renderASUComponent(req, res, componentList.footer);
    const config = JSON.stringify(ASUBrandHeaderExampleConfig);
    prod = prod ? true: false;

    if (prod) {
        res.send(FullPageSSRProd({
            header: header,
            footer: footer,
            title: 'Test Page',
            props: config
        }));
    } else {
        res.send(FullPageSSR({
            header: header,
            footer: footer,
            title: 'Test Page',
            props: config
        }));
    }
};

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
    renderSSRFullPage,
    renderComponentPage
};