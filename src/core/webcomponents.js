/*global customElements*/

import React from 'react';
import ASUNav from './components/molecules/nav/ASUNav'
import ASUFooter from './components/organisms/footers/ASUFooter'
import ASUBrandHeader from './components/organisms/headers/ASUBrandHeader';
import ASUHeader from './components/organisms/headers/ASUHeader';
import ASULink from './components/atoms/links/ASULink';
import ASUGlobalSearch from './components/molecules/search/ASUGlobalSearch';
import ASULogin from './components/molecules/auth/ASULogin';
import { convert } from 'web-react-components';
import HAXBehaviors from '../../../hax-body-behaviors/hax-body-behaviors.html';
import PropTypes from 'prop-types';

const components = {
    ASUFooter: ASUFooter,
    ASUHeader: ASUHeader,
    ASUBrandHeader: ASUBrandHeader,
    ASULink: ASULink,
    ASULogin: ASULogin,
    ASUNav: ASUNav,
    ASUSearchBox: ASUGlobalSearch
};

class ASUnityComponent extends React.Component {
    render() {
        return (
            React.createElement(components[this.props.name], this.props.properties, this.children)
        );
    }
}

ASUnityComponent.propTypes = {
    name: PropTypes.string.isRequired,
    properties: PropTypes.object
};

// Set shadow DOM to false so that React CSS works
const ASUnityWebComponent = convert(ASUnityComponent, ['name', 'properties'], {}, {useShadowDom: false});

ASUnityWebComponent.prototype.behaviors = [HAXBehaviors.propertyBehaviors];

ASUnityWebComponent.prototype.connectedCallback = () => {

    // Establish hax properties if they exist
    /*let props = {
        'canScale': true,
        'canPosition': true,
        'canEditSource': false,
        'gizmo': {
            'title': 'Wikipedia article',
            'description': 'This can display a wikipedia article in context in a variety of formats.',
            'icon': 'book',
            'color': 'green',
            'groups': ['Content', 'Creative Commons'],
            'handles': [
                {
                    'type': 'content',
                    'title': 'search'
                },
            ],
            'meta': {
                'author': 'LRNWebComponents'
            }
        },
        'settings': {
            'quick':[
                {
                    'property': 'search',
                    'title': 'Search term',
                    'description': 'Word to search wikipedia for.',
                    'inputMethod': 'textfield',
                    'icon': 'editor:title',
                    'required': true,
                },
                {
                    'property': 'showTitle',
                    'title': 'Show title',
                    'description': 'Whether or not to render the title of the article.',
                    'inputMethod': 'boolean',
                    'icon': 'editor:title',
                }
            ],
            'configure':[
                {
                    'property': 'search',
                    'title': 'Search term',
                    'description': 'Word to search wikipedia for.',
                    'inputMethod': 'textfield',
                    'icon': 'editor:title',
                    'required': true,
                }
            ]
        },
        'saveOptions': {
            'wipeSlot': true,
        },
    };*/

    //this.setHaxProperties(props);
};


// register it here

customElements.define('asu-unity-component', ASUnityWebComponent);

export {
    ASUFooter,
    ASUHeader,
    ASUBrandHeader,
    ASULink,
    ASULogin,
    ASUNav,
    ASUGlobalSearch
};