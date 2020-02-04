/*eslint-env node*/
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {AsuBrandHeader} from '../index.js';
import {Item, FullPageSSR, FullPageSSRProd, ComponentPage} from './templates/template';

const componentList = {
    header: {
        type: AsuBrandHeader,
        domId: 'asu-header-container',
        props: {
        }
    },/*
    footer: {
        type: ASUFooter,
        domId: 'asu-footer-container',
        props: {}
    }*/
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
 */
const renderComponentPage = (req, res) => {
    //const config = JSON.stringify(ASUBrandHeaderExampleConfig);

    res.send(ComponentPage({
        title: 'Test Page',
        props: {}
    }));
};

const renderSSRFullPage = (req, res, prod) => {
    const header = renderASUComponent(req, res, componentList.header);
    //const config = JSON.stringify(ASUBrandHeaderExampleConfig);
    prod = prod ? true: false;

    if (prod) {
        res.send(FullPageSSRProd({
            header: header,
            //
            title: 'Test Page',
            props: {}
        }));
    } else {
        res.send(FullPageSSR({
            header: header,
            //footer: footer,
            title: 'Test Page',
            props: {}
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

const renderedHeader = ReactDOMServer.renderToString(<AsuBrandHeader />);

export {
    renderASUComponent,
    sendASUHeader,
    sendASUFooter,
    renderSSRFullPage,
    renderComponentPage,
    renderedHeader
};
