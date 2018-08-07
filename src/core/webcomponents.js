import React from 'react';
import ReactDOM from 'react-dom';
import ASUNav from './components/ASUNav'
import ASUFooter from './components/ASUFooter'
import ASUBrandHeader from './components/ASUBrandHeader';
import ASUHeader from './components/ASUHeader';
import ASULink from './components/ASULink';
import ASUSearchBox from './components/ASUSearchBox';
import ASULogin from './components/ASULogin';
import AsuButton from './components/atoms/buttons/AsuButton';
import { convert } from 'web-react-components';
import HAXBehaviors from '../../../hax-body-behaviors/hax-body-behaviors.html';

const components = {
    ASUFooter: ASUFooter,
    ASUHeader: ASUHeader,
    ASUBrandHeader: ASUBrandHeader,
    ASULink: ASULink,
    ASULogin: ASULogin,
    ASUNav: ASUNav,
    ASUSearchBox: ASUSearchBox,
    AsuButton: AsuButton,
};

const initASUHeader = (asu_header, element) => {
    element ? ReactDOM.render(<ASUHeaderContainer headerObj={asu_header} />, element) : false;
};

class ASUnityComponent extends React.Component {

    render() {
        const Comp = this.props.name;

        console.log(this.props, 'THE PROPS PASSED');

        return (
            React.createElement(components[this.props.name], this.props.props, this.children)
        );
    }
}

// Set shadow DOM to false so that React CSS works
const ASUnityWebComponent = convert(ASUnityComponent, ['name', 'props'], {}, {useShadowDom: false});

/ASUnityWebComponent.prototype.behaviors = [HAXBehaviors.propertyBehaviors];

ASUnityWebComponent.prototype.connectedCallback = () => {

    // Establish hax properties if they exist
    let props = {
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
    };
    console.log(ASUnityWebComponent, 'the web component');

    //this.setHaxProperties(props);
};

console.log(ASUnityWebComponent.prototype, 'THE PROTOTYPE');

// register it here
customElements.define('asu-unity-component', ASUnityWebComponent);

module.exports = components;

/*{
    initASUHeader,
    ASUFooter,
    ASUHeader,
    ASUBrandHeader,
    ASULink,
    ASULogin,
    ASUNav,
    ASUSearchBox
};*/
