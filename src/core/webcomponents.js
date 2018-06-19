import React from 'react';
import ReactDOM from 'react-dom';
import ASUNav from './components/ASUNav'
import ASUFooter from './components/ASUFooter'
import ASUBrandHeader from './components/ASUBrandHeader';
import ASUHeader from './components/ASUHeader';
import ASULink from './components/ASULink';
import ASUSearchBox from './components/ASUSearchBox';
import ASULogin from './components/ASULogin';
import { register } from 'web-react-components';
import ReactWebComponent from 'react-web-component';

const initASUHeader = (asu_header, element) => {
    element ? ReactDOM.render(<ASUHeaderContainer headerObj={asu_header} />, element) : false;
};

// call it to register the web component
// this will transform all <your-component>-tags in the markup
// ATTENTION: all custom element tag names MUST contain a dash
// use it anywhere like this:
// <your-component name="Peter" isDisabled onClick="console.log('hello')"></your-component>

register(ASUBrandHeader, 'asu-brand-header', [
        // these attribute values will be json parsed
        'headerObj'
    ]
);

//ReactWebComponent.create(<ASUBrandHeader headerObj='{}' />, 'asu-brand-header');


module.exports = {
    initASUHeader,
    ASUFooter,
    ASUHeader,
    ASUBrandHeader,
    ASULink,
    ASULogin,
    ASUNav,
    ASUSearchBox
};