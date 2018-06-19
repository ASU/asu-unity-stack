(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../server/ssr/ssr.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../examples/ASUBrandHeaderExampleConfig.js":
/*!**************************************************!*\
  !*** ../examples/ASUBrandHeaderExampleConfig.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ASUBrandHeaderExampleConfig = {
  "siteMenu": [{
    "title": "Home",
    "path": "http://www.asu.edu/absolute_path"
  }, {
    "title": "Degree Programs",
    "path": "/absolute_path/page",
    "children": [{
      "title": "Admissions",
      "path": "/?url=variable",
      "children": [{
        "title": "Student Life",
        "path": "/#hash"
      }]
    }, {
      "title": "Ross",
      "path": "https://www.asu.edu/"
    }]
  }],
  "logo": {
    "src": "https://www.asu.edu/asuthemes/4.6/assets/full_logo.png",
    "href": "https://www.asu.edu/",
    "alt": "ASU"
  },
  "siteTitle": {
    "title": "ASU Custom Site Title",
    "parentOrg": "ASU Custom Parent Org",
    "siteUrl": "https://asu.edu",
    "parentOrgUrl": "https://uto.asu.edu"
  },
  "login": {
    "loginUrl": "https://weblogin.asu.edu/cgi-bin/login",
    "logoutUrl": "/cas/logout",
    "loggedIn": false
  }
};

exports.default = ASUBrandHeaderExampleConfig;

/***/ }),

/***/ "../server/ssr/ssr.js":
/*!****************************!*\
  !*** ../server/ssr/ssr.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _core = __webpack_require__(/*! ../../src/core/core.js */ "./core/core.js");

var _template = __webpack_require__(/*! ../templates/template */ "../server/templates/template.js");

var _ASUBrandHeaderExampleConfig = __webpack_require__(/*! ../../examples/ASUBrandHeaderExampleConfig */ "../examples/ASUBrandHeaderExampleConfig.js");

var _ASUBrandHeaderExampleConfig2 = _interopRequireDefault(_ASUBrandHeaderExampleConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentList = {
    header: {
        type: _core.ASUBrandHeader,
        domId: 'asu-header-container',
        props: {
            headerObj: _ASUBrandHeaderExampleConfig2.default
        }
    },
    footer: {
        type: _core.ASUFooter,
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
var renderASUComponent = function renderASUComponent(req, res, component) {

    var ASUComponent = component.type;

    // Renders component to string
    var html = _server2.default.renderToString(_react2.default.createElement(ASUComponent, component.props));

    return (0, _template.Item)({
        id: component.domId,
        body: html
    });
};

/**
 * Serves page with web components bundle.
 * @param req
 * @param res
 * @param prod
 */
var renderComponentPage = function renderComponentPage(req, res, prod) {
    var config = JSON.stringify(_ASUBrandHeaderExampleConfig2.default);
    prod = prod ? true : false;

    res.send((0, _template.ComponentPage)({
        title: 'Test Page',
        props: config
    }));
};

var renderSSRFullPage = function renderSSRFullPage(req, res, prod) {
    var header = renderASUComponent(req, res, componentList.header);
    var footer = renderASUComponent(req, res, componentList.footer);
    var config = JSON.stringify(_ASUBrandHeaderExampleConfig2.default);
    prod = prod ? true : false;

    if (prod) {
        res.send((0, _template.FullPageSSRProd)({
            header: header,
            footer: footer,
            title: 'Test Page',
            props: config
        }));
    } else {
        res.send((0, _template.FullPageSSR)({
            header: header,
            footer: footer,
            title: 'Test Page',
            props: config
        }));
    }
};

var sendASUHeader = function sendASUHeader(req, res) {
    var html = renderASUComponent(req, res, componentList.header);
    res.send(html);
};

var sendASUFooter = function sendASUFooter(req, res) {
    var html = renderASUComponent(req, res, componentList.footer);
    res.send(html);
};

module.exports = {
    renderASUComponent: renderASUComponent,
    sendASUHeader: sendASUHeader,
    sendASUFooter: sendASUFooter,
    renderSSRFullPage: renderSSRFullPage,
    renderComponentPage: renderComponentPage
};

/***/ }),

/***/ "../server/templates/template.js":
/*!***************************************!*\
  !*** ../server/templates/template.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by ctestama on 4/25/18.
 */
var Item = function Item(_ref) {
  var id = _ref.id,
      body = _ref.body;
  return "\n    <div>\n        <div id=" + id + ">" + body + "</div>\n    </div>  \n";
};

var ComponentPage = function ComponentPage(_ref2) {
  var title = _ref2.title,
      props = _ref2.props;
  return "\n  <!DOCTYLE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n      <style>\n        #main-content {\n            height: 1200px;\n        }\n      </style>\n        <script src=\"//cdn.polyfill.io/v2/polyfill.min.js?features=default,fetch,es6,Array.prototype.includes\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.1/custom-elements-es5-adapter.js\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.1/webcomponents-sd-ce.js\"></script>\n        <script crossorigin src=\"https://unpkg.com/react@16/umd/react.development.js\"></script>\n        <script crossorigin src=\"https://unpkg.com/react-dom@16/umd/react-dom.development.js\"></script>\n        <script src=\"/webcomponents/webcomponents.development.js\"></script>\n    </head>\n    <body>\n        <asu-brand-header headerObj='" + props + "'></asu-brand-header>\n        <div id=\"main-content\"> </div>\n    </body>\n    <footer>\n    </footer>\n  </html>\n";
};

var FullPageSSR = function FullPageSSR(_ref3) {
  var header = _ref3.header,
      footer = _ref3.footer,
      title = _ref3.title,
      props = _ref3.props;
  return "\n  <!DOCTYLE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n      <style>\n        #main-content {\n            height: 1200px;\n        }\n        </style>\n    </head>\n    <body>\n      <div>" + header + "</div>\n      <div id=\"main-content\"> </div>\n    </body>\n    <script crossorigin src=\"https://unpkg.com/react@16/umd/react.development.js\"></script>\n    <script crossorigin src=\"https://unpkg.com/react-dom@16/umd/react-dom.development.js\"></script>\n    <script src=\"/core/core.development.js\"></script>\n    <script>\n        var ASUHeader = " + props + ";\n        ReactDOM.hydrate(React.createElement(ASUBrandHeader, ASUHeader), document.getElementById(\"asu-header-container\"));\n    </script>\n    \n    <footer>\n        " + footer + "\n    </footer>\n  </html>\n";
};

var FullPageSSRProd = function FullPageSSRProd(_ref4) {
  var header = _ref4.header,
      footer = _ref4.footer,
      title = _ref4.title,
      props = _ref4.props;
  return "\n  <!DOCTYLE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n      <style>\n        #main-content {\n            height: 1200px;\n        }\n      </style>\n    </head>\n    <body>\n      <div>" + header + "</div>\n      <div id=\"main-content\"> </div>\n    </body>\n    <script crossorigin src=\"https://unpkg.com/react@16/umd/react.production.min.js\"></script>\n    <script crossorigin src=\"https://unpkg.com/react-dom@16/umd/react-dom.production.min.js\"></script>\n    <script src=\"/core/core.production.js\"></script>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"/core/core.production.css\">\n    <script>\n        var ASUHeader = " + props + ";\n        ReactDOM.hydrate(React.createElement(ASUBrandHeader, ASUHeader), document.getElementById(\"asu-header-container\"));\n    </script>\n    \n    <footer>\n        " + footer + "\n    </footer>\n  </html>\n";
};

exports.Item = Item;
exports.FullPageSSR = FullPageSSR;
exports.FullPageSSRProd = FullPageSSRProd;
exports.ComponentPage = ComponentPage;

/***/ }),

/***/ "./core/components/ASUBrandHeader.jsx":
/*!********************************************!*\
  !*** ./core/components/ASUBrandHeader.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ASUHeader = __webpack_require__(/*! ./ASUHeader */ "./core/components/ASUHeader.jsx");

var _ASUHeader2 = _interopRequireDefault(_ASUHeader);

var _ASUSearchBox = __webpack_require__(/*! ./ASUSearchBox */ "./core/components/ASUSearchBox.jsx");

var _ASUSearchBox2 = _interopRequireDefault(_ASUSearchBox);

var _ASUNav = __webpack_require__(/*! ./ASUNav */ "./core/components/ASUNav.jsx");

var _ASUNav2 = _interopRequireDefault(_ASUNav);

var _ASUSiteName = __webpack_require__(/*! ./ASUSiteName */ "./core/components/ASUSiteName.jsx");

var _ASUSiteName2 = _interopRequireDefault(_ASUSiteName);

var _ASULogin = __webpack_require__(/*! ./ASULogin */ "./core/components/ASULogin.jsx");

var _ASULogin2 = _interopRequireDefault(_ASULogin);

var _ASU = __webpack_require__(/*! ../styles/ASU.css */ "./core/styles/ASU.css");

var _ASU2 = _interopRequireDefault(_ASU);

var _ASUNavDefaultTree = __webpack_require__(/*! ./ASUNavDefaultTree */ "./core/components/ASUNavDefaultTree.js");

var _ASUNavDefaultTree2 = _interopRequireDefault(_ASUNavDefaultTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ASUBrandHeader = function (_Component) {
    _inherits(ASUBrandHeader, _Component);

    function ASUBrandHeader() {
        _classCallCheck(this, ASUBrandHeader);

        var _this = _possibleConstructorReturn(this, (ASUBrandHeader.__proto__ || Object.getPrototypeOf(ASUBrandHeader)).call(this));

        _this.state = { renderClient: false };
        return _this;
    }

    _createClass(ASUBrandHeader, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                _ASUHeader2.default,
                { logo: this.props.logo, className: _ASU2.default.asuHeader },
                _react2.default.createElement(
                    _ASUNav2.default,
                    { nav: this.props.navTree },
                    _react2.default.createElement(_ASULogin2.default, this.props.login),
                    _react2.default.createElement(_ASUSearchBox2.default, null)
                ),
                this.state.renderClient && this.props.siteTitle && _react2.default.createElement(_ASUSiteName2.default, { siteTitle: this.props.siteTitle })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ renderClient: true });
        }
    }]);

    return ASUBrandHeader;
}(_react.Component);

ASUBrandHeader.propTypes = {
    logo: _propTypes2.default.object,
    login: _propTypes2.default.object,
    navTree: _propTypes2.default.arrayOf(_propTypes2.default.object),
    siteTitle: _propTypes2.default.object
};

// Specifies the default values for props:
ASUBrandHeader.defaultProps = {
    logo: _ASUHeader2.default.defaultProps.logo,
    login: _ASULogin2.default.defaultProps,
    navTree: _ASUNavDefaultTree2.default
};

exports.default = ASUBrandHeader;

/***/ }),

/***/ "./core/components/ASUFooter.jsx":
/*!***************************************!*\
  !*** ./core/components/ASUFooter.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ASUFooter = function (_Component) {
    _inherits(ASUFooter, _Component);

    function ASUFooter() {
        _classCallCheck(this, ASUFooter);

        return _possibleConstructorReturn(this, (ASUFooter.__proto__ || Object.getPrototypeOf(ASUFooter)).call(this));
    }

    _createClass(ASUFooter, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "innovation-footer" },
                _react2.default.createElement(
                    "div",
                    { id: "innovation-bar" },
                    _react2.default.createElement(
                        "div",
                        { className: "innovation-top" },
                        _react2.default.createElement(
                            "div",
                            { className: "innovation-status" },
                            _react2.default.createElement(
                                "a",
                                { href: "https://www.asu.edu/rankings" },
                                _react2.default.createElement(
                                    "span",
                                    null,
                                    "ASU is #1 in the U.S. for Innovation"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "innovation-hidden" },
                            _react2.default.createElement(
                                "a",
                                { href: "https://www.asu.edu/rankings" },
                                _react2.default.createElement("img", { src: "//www-dev.asu.edu/asuthemes/4.6/assets/best-college-2018.png", alt: "Best Colleges U.S. News Most Innovative 2018" })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "footer-menu" },
                    _react2.default.createElement(
                        "ul",
                        { className: "default" },
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "https://www.asu.edu/copyright/" },
                                "Copyright and Trademark"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "https://www.asu.edu/accessibility/" },
                                "Accessibility"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "https://www.asu.edu/privacy/" },
                                "Privacy"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "https://www.asu.edu/tou/" },
                                "Terms of Use"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "https://www.asu.edu/asujobs" },
                                "Jobs"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "https://www.asu.edu/emergency/" },
                                "Emergency"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            { className: "no-border" },
                            _react2.default.createElement(
                                "a",
                                { href: "https://www.asu.edu/contactasu/" },
                                "Contact ASU"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ASUFooter;
}(_react.Component);

module.exports = ASUFooter;

/***/ }),

/***/ "./core/components/ASUHeader.jsx":
/*!***************************************!*\
  !*** ./core/components/ASUHeader.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASULogo = __webpack_require__(/*! ./ASULogo */ "./core/components/ASULogo.jsx");

var _ASULogo2 = _interopRequireDefault(_ASULogo);

var _ASULink = __webpack_require__(/*! ./ASULink */ "./core/components/ASULink.jsx");

var _ASULink2 = _interopRequireDefault(_ASULink);

var _ASU = __webpack_require__(/*! ../styles/ASU.css */ "./core/styles/ASU.css");

var _ASU2 = _interopRequireDefault(_ASU);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ASUHeader = function (_Component) {
    _inherits(ASUHeader, _Component);

    function ASUHeader() {
        _classCallCheck(this, ASUHeader);

        return _possibleConstructorReturn(this, (ASUHeader.__proto__ || Object.getPrototypeOf(ASUHeader)).call(this));
    }

    _createClass(ASUHeader, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "header",
                this.props.className ? { className: this.props.className } : {},
                _react2.default.createElement(
                    _ASULink2.default,
                    { href: "https://www.asu.edu/accessibility/", className: _ASU2.default.srOnly },
                    "Report an accessibility problem"
                ),
                _react2.default.createElement(
                    "div",
                    { className: _ASU2.default.asuHeaderGrid },
                    this.props.logo ? _react2.default.createElement(_ASULogo2.default, this.props.logo) : '',
                    this.props.children
                )
            );
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {}
    }]);

    return ASUHeader;
}(_react.Component);

ASUHeader.propTypes = {
    logo: _propTypes2.default.object
};

// Specifies the default values for props:
ASUHeader.defaultProps = {
    logo: _ASULogo2.default.defaultProps
};

exports.default = ASUHeader;

/***/ }),

/***/ "./core/components/ASUImage.jsx":
/*!**************************************!*\
  !*** ./core/components/ASUImage.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ASU = __webpack_require__(/*! ../styles/ASU.css */ "./core/styles/ASU.css");

var _ASU2 = _interopRequireDefault(_ASU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASUImage = function ASUImage(props) {
    return _react2.default.createElement("img", { alt: props.alt, src: props.src });
};

ASUImage.propTypes = {
    src: _propTypes2.default.string.isRequired,
    alt: _propTypes2.default.string.isRequired
};

exports.default = ASUImage;

/***/ }),

/***/ "./core/components/ASULink.jsx":
/*!*************************************!*\
  !*** ./core/components/ASULink.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASULink = function ASULink(props) {
    return _react2.default.createElement(
        "a",
        props,
        props.children
    );
};

exports.default = ASULink;

/***/ }),

/***/ "./core/components/ASULogin.jsx":
/*!**************************************!*\
  !*** ./core/components/ASULogin.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ASU = __webpack_require__(/*! ../styles/ASU.css */ "./core/styles/ASU.css");

var _ASU2 = _interopRequireDefault(_ASU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ASULogin = function (_Component) {
    _inherits(ASULogin, _Component);

    function ASULogin(props) {
        _classCallCheck(this, ASULogin);

        var _this = _possibleConstructorReturn(this, (ASULogin.__proto__ || Object.getPrototypeOf(ASULogin)).call(this));

        _this.state = {
            loggedIn: !!props.loggedIn
        };
        return _this;
    }

    _createClass(ASULogin, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _ASU2.default.asuLogin },
                _react2.default.createElement(
                    'span',
                    { className: _ASU2.default.srOnly },
                    'Sign In / Sign Out'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    !this.state.loggedIn ? _react2.default.createElement(
                        'a',
                        { className: _ASU2.default.asuLoginLink, href: this.props.loginUrl, target: '_top' },
                        'Sign In'
                    ) : _react2.default.createElement(
                        'a',
                        { className: _ASU2.default.asuLoginLink, href: this.props.logoutUrl, target: '_top' },
                        'Sign Out'
                    )
                )
            );
        }
    }]);

    return ASULogin;
}(_react.Component);

ASULogin.propTypes = {
    loginUrl: _propTypes2.default.string,
    logoutUrl: _propTypes2.default.string,
    loggedIn: _propTypes2.default.bool
};

// Specifies the default values for props:
ASULogin.defaultProps = {
    loginUrl: "https://weblogin.asu.edu/cgi-bin/login",
    logoutUrl: "/cas/logout",
    loggedIn: false
};

exports.default = ASULogin;

/***/ }),

/***/ "./core/components/ASULogo.jsx":
/*!*************************************!*\
  !*** ./core/components/ASULogo.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASUImage = __webpack_require__(/*! ./ASUImage */ "./core/components/ASUImage.jsx");

var _ASUImage2 = _interopRequireDefault(_ASUImage);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ASU = __webpack_require__(/*! ../styles/ASU.css */ "./core/styles/ASU.css");

var _ASU2 = _interopRequireDefault(_ASU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASULogo = function ASULogo(props) {
    return _react2.default.createElement(
        "div",
        { className: _ASU2.default.asuLogo },
        _react2.default.createElement(
            "a",
            { href: props.href, target: props.target },
            _react2.default.createElement(_ASUImage2.default, { alt: props.alt, src: props.src })
        )
    );
};

ASULogo.propTypes = {
    href: _propTypes2.default.string,
    target: _propTypes2.default.string,
    alt: _propTypes2.default.string,
    src: _propTypes2.default.string
};

// Specifies the default values for props:
ASULogo.defaultProps = {
    href: '/',
    target: '_top',
    alt: 'A S U',
    src: "https://www.asu.edu/asuthemes/4.6/assets/full_logo.png"
};

exports.default = ASULogo;

/***/ }),

/***/ "./core/components/ASUNav.jsx":
/*!************************************!*\
  !*** ./core/components/ASUNav.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASUNavItem = __webpack_require__(/*! ./ASUNavItem */ "./core/components/ASUNavItem.jsx");

var _ASUNavItem2 = _interopRequireDefault(_ASUNavItem);

var _ASULogin = __webpack_require__(/*! ./ASULogin */ "./core/components/ASULogin.jsx");

var _ASULogin2 = _interopRequireDefault(_ASULogin);

var _ASUNavDefaultTree = __webpack_require__(/*! ./ASUNavDefaultTree */ "./core/components/ASUNavDefaultTree.js");

var _ASUNavDefaultTree2 = _interopRequireDefault(_ASUNavDefaultTree);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ASU = __webpack_require__(/*! ../styles/ASU.css */ "./core/styles/ASU.css");

var _ASU2 = _interopRequireDefault(_ASU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASUNav = function ASUNav(props) {

    var navMenu = renderNav(props.navTree);
    var login = null;
    var children = [];

    // extract the login if passed as a child. The login link will
    // be rendered inline with the navmenu per the brand standards
    if (props.children) {
        for (var i = 0; i < props.children.length; i++) {
            var child = props.children[i];

            if (child.type === _ASULogin2.default) {
                login = child;
            } else {
                children.push(child);
            }
        }
    }

    return _react2.default.createElement(
        'div',
        { className: _ASU2.default.asuNavWrapper },
        _react2.default.createElement(
            'div',
            { className: _ASU2.default.asuNav, role: 'navigation', 'aria-label': 'ASU' },
            navMenu,
            login !== null ? login : ''
        ),
        children.length > 0 ? children : ''
    );
};

var renderNav = function renderNav(nav) {

    return _react2.default.createElement(
        'ul',
        { className: _ASU2.default.navList },
        nav.map(function (item, index) {
            return _react2.default.createElement(
                _ASUNavItem2.default,
                _extends({}, item, { key: index }),
                item.subtree ? renderNav(item.subtree) : null
            );
        })
    );
};

ASUNav.propTypes = {
    navTree: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

// Specifies the default values for props:
ASUNav.defaultProps = {
    navTree: _ASUNavDefaultTree2.default
};

exports.default = ASUNav;

/***/ }),

/***/ "./core/components/ASUNavDefaultTree.js":
/*!**********************************************!*\
  !*** ./core/components/ASUNavDefaultTree.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ASUnavDefaultTree = [{
  "title": "",
  "text": "ASU Home",
  "href": "https://www.asu.edu/",
  "classes": "parent",
  "subtree": [{
    "classes": "first",
    "href": "https://www.asu.edu/?feature=newsevents",
    "target": "_top",
    "title": "News and Events",
    "text": "News/Events"
  }, {
    "href": "https://www.asu.edu/?feature=academics",
    "target": "_top",
    "title": "Academics",
    "text": "Academics"
  }, {
    "href": "https://www.asu.edu/?feature=research",
    "target": "_top",
    "title": "Research",
    "text": "Research"
  }, {
    "href": "https://www.asu.edu/?feature=athletics",
    "target": "_top",
    "title": "Athletics",
    "text": "Athletics"
  }, {
    "href": "https://www.asu.edu/?feature=alumni",
    "target": "_top",
    "title": "Alumni",
    "text": "Alumni"
  }, {
    "href": "https://www.asu.edu/?feature=giving",
    "target": "_top",
    "title": "Giving",
    "text": "Giving"
  }, {
    "href": "https://www.asu.edu/?feature=president",
    "target": "_top",
    "title": "President",
    "text": "President"
  }, {
    "href": "https://www.asu.edu/about",
    "target": "_top",
    "title": "About ASU",
    "text": "About ASU"
  }]
}, {
  "title": "",
  "text": "My ASU",
  "href": "https://my.asu.edu/",
  "target": "_top"
}, {
  "title": "",
  "classes": "parent",
  "text": "Map and Locations",
  "href": "https://www.asu.edu/map/",
  "target": "_top",
  "subtree": [{
    "classes": "first",
    "href": "https://artsandsciences.asu.edu/",
    "target": "_top",
    "title": "Arts and Sciences website",
    "text": "Arts and Sciences"
  }, {
    "href": "https://wpcarey.asu.edu/",
    "target": "_top",
    "title": "W. P. Carey School of Business Web and Morrison School of Agribusiness website",
    "text": "Business"
  }, {
    "href": "https://herbergerinstitute.asu.edu",
    "target": "_top",
    "title": "Herberger Institute for Design and the Arts website",
    "text": "Design and the Arts"
  }, {
    "href": "https://education.asu.edu/",
    "target": "_top",
    "title": "Mary Lou Fulton Teachers College website",
    "text": "Education"
  }, {
    "href": "https://engineering.asu.edu/",
    "target": "_top",
    "title": "Engineering website",
    "text": "Engineering"
  }, {
    "href": "https://sfis.asu.edu/",
    "target": "_top",
    "title": "Future of Innovation in Society website",
    "text": "Future of Innovation in Society"
  }, {
    "href": "https://graduate.asu.edu",
    "target": "_top",
    "title": "Graduate College website",
    "text": "Graduate"
  }, {
    "href": "https://chs.asu.edu/",
    "target": "_top",
    "title": "Health Solutions website",
    "text": "Health Solutions"
  }, {
    "href": "https://honors.asu.edu/",
    "target": "_top",
    "title": "Barrett, The Honors College website",
    "text": "Honors"
  }, {
    "href": "https://cronkite.asu.edu",
    "target": "_top",
    "title": "Walter Cronkite School of Journalism and Mass Communication website",
    "text": "Journalism"
  }, {
    "href": "https://www.law.asu.edu/",
    "target": "_top",
    "title": "Sandra Day O' Connor College of Law website",
    "text": "Law"
  }, {
    "href": "https://nursingandhealth.asu.edu/",
    "target": "_top",
    "title": "College of Nursing and Health Innovation website",
    "text": "Nursing and Health Innovation"
  }, {
    "href": "//copp.asu.edu",
    "target": "_top",
    "title": "College of Public Programs website",
    "text": "Public Service and Community Solutions"
  }, {
    "href": "https://schoolofsustainability.asu.edu",
    "target": "_top",
    "title": "School of Sustainability website",
    "text": "Sustainability"
  }, {
    "href": "//uc.asu.edu/",
    "target": "_top",
    "title": "University College website",
    "text": "University College"
  }, {
    "href": "https://www.thunderbird.edu/",
    "target": "_top",
    "title": "Thunderbird School of Global Management website",
    "text": "Thunderbird School of Global Management"
  }]

}, {
  "title": "",
  "classes": "parent",
  "text": "Map and Locations",
  "href": "https://www.asu.edu/map/",
  "target": "_top",
  "subtree": [{
    "classes": "border first",
    "href": "https://www.asu.edu/map/",
    "target": "_top",
    "title": "",
    "text": "Map"
  }, {
    "href": "https://campus.asu.edu/tempe/",
    "target": "_top",
    "title": "Tempe campus",
    "text": "Tempe"
  }, {
    "href": "https://campus.asu.edu/west/",
    "target": "_top",
    "title": "West campus",
    "text": "West"
  }, {
    "href": "https://campus.asu.edu/polytechnic/",
    "target": "_top",
    "title": "Polytechnic campus",
    "text": "Polytechnic"
  }, {
    "href": "https://campus.asu.edu/downtown/",
    "target": "_top",
    "title": "Downtown Phoenix campus",
    "text": "Downtown Phoenix"
  }, {
    "href": "https://asuonline.asu.edu/",
    "target": "_top",
    "title": "Online and Extended campus",
    "text": "Online and Extended"
  }, {
    "href": "https://havasu.asu.edu/",
    "target": "_top",
    "title": "",
    "text": "Lake Havasu"
  }, {
    "href": "https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",
    "target": "_top",
    "classes": "border",
    "title": "",
    "text": "Thunderbird"
  }, {
    "href": "https://skysong.asu.edu/",
    "target": "_top",
    "title": "",
    "text": "Skysong"
  }, {
    "href": "https://asuresearchpark.com/",
    "target": "_top",
    "title": "",
    "text": "Research Park"
  }, {
    "href": "https://washingtoncenter.asu.edu/",
    "target": "_top",
    "title": "",
    "text": "Washington D.C."
  }, {
    "href": "https://wpcarey.asu.edu/mba/china-program/english/",
    "target": "_top",
    "title": "",
    "text": "China"
  }]
}, {
  "title": "Directory, Index and other info",
  "text": "Directory",
  "href": "https://isearch.asu.edu/",
  "target": "_top"
}];

exports.default = ASUnavDefaultTree;

/***/ }),

/***/ "./core/components/ASUNavItem.jsx":
/*!****************************************!*\
  !*** ./core/components/ASUNavItem.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASULink = __webpack_require__(/*! ./ASULink */ "./core/components/ASULink.jsx");

var _ASULink2 = _interopRequireDefault(_ASULink);

var _ASU = __webpack_require__(/*! ../styles/ASU.css */ "./core/styles/ASU.css");

var _ASU2 = _interopRequireDefault(_ASU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASUNavItem = function ASUNavItem(props) {

    var classes = _ASU2.default.asuNavItem + (props.classes ? ' ' + props.classes : '');

    return _react2.default.createElement(
        'li',
        { className: classes },
        _react2.default.createElement(
            _ASULink2.default,
            { href: props.href, target: props.target },
            props.text
        ),
        props.children
    );
};

exports.default = ASUNavItem;

/***/ }),

/***/ "./core/components/ASUSearchBox.jsx":
/*!******************************************!*\
  !*** ./core/components/ASUSearchBox.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASU = __webpack_require__(/*! ../styles/ASU.css */ "./core/styles/ASU.css");

var _ASU2 = _interopRequireDefault(_ASU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ASUSearchBox = function (_Component) {
    _inherits(ASUSearchBox, _Component);

    function ASUSearchBox() {
        _classCallCheck(this, ASUSearchBox);

        return _possibleConstructorReturn(this, (ASUSearchBox.__proto__ || Object.getPrototypeOf(ASUSearchBox)).call(this));
    }

    _createClass(ASUSearchBox, [{
        key: "render",
        value: function render() {
            if (this.props.drupal) {
                return _react2.default.createElement(
                    "div",
                    { className: _ASU2.default.asuSearch },
                    _react2.default.createElement(
                        "h2",
                        { className: _ASU2.default.srOnly },
                        "Search"
                    ),
                    _react2.default.createElement(
                        "form",
                        { id: "google/appliance/block/form", method: "post", _lpchecked: "1" },
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "masu_search_box" },
                            "Search"
                        ),
                        _react2.default.createElement("input", { name: "search_header", className: _ASU2.default.asuSearchBox, placeholder: "Search", autoComplete: "off", type: "text" }),
                        _react2.default.createElement("input", { className: _ASU2.default.asuSearchButton, type: "submit", value: "Search" })
                    )
                );
            }

            return _react2.default.createElement(
                "div",
                { className: _ASU2.default.asuSearch },
                _react2.default.createElement(
                    "h2",
                    { className: _ASU2.default.srOnly },
                    "Search"
                ),
                _react2.default.createElement(
                    "form",
                    { target: "_top", action: "https://search.asu.edu/search", method: "get", name: "gs", role: "search" },
                    _react2.default.createElement(
                        "label",
                        { className: _ASU2.default.srOnly, htmlFor: "masu_search_box" },
                        "Search"
                    ),
                    _react2.default.createElement("input", { name: "site", type: "hidden", value: "default_collection" }),
                    _react2.default.createElement("input", { name: "sort", type: "hidden", value: "date:D:L:d1" }),
                    _react2.default.createElement("input", { name: "output", type: "hidden", value: "xml_no_dtd" }),
                    _react2.default.createElement("input", { name: "proxystylesheet", type: "hidden", value: "asu_frontend" }),
                    _react2.default.createElement("input", { name: "ie", type: "hidden", value: "UTF-8" }),
                    _react2.default.createElement("input", { name: "oe", type: "hidden", value: "UTF-8" }),
                    _react2.default.createElement("input", { name: "client", type: "hidden", value: "asu_frontend" }),
                    _react2.default.createElement("input", { className: _ASU2.default.asuSearchButton, type: "submit", value: "Search" }),
                    _react2.default.createElement("input", { name: "q", className: _ASU2.default.asuSearchBox, id: "masu_search_box", placeholder: "Search", autoComplete: "off", type: "text" })
                )
            );
        }
    }]);

    return ASUSearchBox;
}(_react.Component);

exports.default = ASUSearchBox;

/***/ }),

/***/ "./core/components/ASUSiteName.jsx":
/*!*****************************************!*\
  !*** ./core/components/ASUSiteName.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASULink = __webpack_require__(/*! ./ASULink */ "./core/components/ASULink.jsx");

var _ASULink2 = _interopRequireDefault(_ASULink);

var _ASU = __webpack_require__(/*! ../styles/ASU.css */ "./core/styles/ASU.css");

var _ASU2 = _interopRequireDefault(_ASU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASUSiteName = function ASUSiteName(props) {

    return _react2.default.createElement(
        "div",
        { className: _ASU2.default.asuSiteName },
        _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                _ASULink2.default,
                { className: _ASU2.default.asuSiteNameLink, href: props.siteTitle.parentOrgUrl },
                _react2.default.createElement(
                    "span",
                    { className: _ASU2.default.asuSiteNameParentOrg },
                    props.siteTitle.parentOrg
                )
            ),
            _react2.default.createElement(
                _ASULink2.default,
                { className: _ASU2.default.asuSiteNameLink, title: "Home", rel: "home", href: props.siteTitle.siteUrl },
                _react2.default.createElement(
                    "span",
                    { className: _ASU2.default.asuSiteNameTitle },
                    props.siteTitle.title
                )
            )
        )
    );
};

exports.default = ASUSiteName;

/***/ }),

/***/ "./core/core.js":
/*!**********************!*\
  !*** ./core/core.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _ASUNav = __webpack_require__(/*! ./components/ASUNav */ "./core/components/ASUNav.jsx");

var _ASUNav2 = _interopRequireDefault(_ASUNav);

var _ASUFooter = __webpack_require__(/*! ./components/ASUFooter */ "./core/components/ASUFooter.jsx");

var _ASUFooter2 = _interopRequireDefault(_ASUFooter);

var _ASUBrandHeader = __webpack_require__(/*! ./components/ASUBrandHeader */ "./core/components/ASUBrandHeader.jsx");

var _ASUBrandHeader2 = _interopRequireDefault(_ASUBrandHeader);

var _ASUHeader = __webpack_require__(/*! ./components/ASUHeader */ "./core/components/ASUHeader.jsx");

var _ASUHeader2 = _interopRequireDefault(_ASUHeader);

var _ASULink = __webpack_require__(/*! ./components/ASULink */ "./core/components/ASULink.jsx");

var _ASULink2 = _interopRequireDefault(_ASULink);

var _ASUSearchBox = __webpack_require__(/*! ./components/ASUSearchBox */ "./core/components/ASUSearchBox.jsx");

var _ASUSearchBox2 = _interopRequireDefault(_ASUSearchBox);

var _ASULogin = __webpack_require__(/*! ./components/ASULogin */ "./core/components/ASULogin.jsx");

var _ASULogin2 = _interopRequireDefault(_ASULogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by ctestama on 3/21/18.
 */
var initASUHeader = function initASUHeader(asu_header, element) {
    element ? ReactDOM.render(_react.React.createElement(ASUHeaderContainer, { headerObj: asu_header }), element) : false;
};

module.exports = {
    initASUHeader: initASUHeader,
    ASUFooter: _ASUFooter2.default,
    ASUHeader: _ASUHeader2.default,
    ASUBrandHeader: _ASUBrandHeader2.default,
    ASULink: _ASULink2.default,
    ASULogin: _ASULogin2.default,
    ASUNav: _ASUNav2.default,
    ASUSearchBox: _ASUSearchBox2.default
};

/***/ }),

/***/ "./core/styles/ASU.css":
/*!*****************************!*\
  !*** ./core/styles/ASU.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"asuSiteName": "ASU__asuSiteName___3gncT",
	"asuSiteNameLink": "ASU__asuSiteNameLink___F2INu",
	"asuSiteNameParentOrg": "ASU__asuSiteNameParentOrg___1bEX4",
	"asuSiteNameTitle": "ASU__asuSiteNameTitle___3TVsx",
	"asu_mobile_button": "ASU__asu_mobile_button___3Bp1A",
	"asu_print_logo": "ASU__asu_print_logo___9mNuj",
	"asuNavWrapper": "ASU__asuNavWrapper___Dnf8G",
	"asuNav": "ASU__asuNav___UhqJC",
	"navList": "ASU__navList___3QCv0",
	"asuNavItem": "ASU__asuNavItem___3Uznd",
	"asu_head_hover": "ASU__asu_head_hover___RHbsK",
	"parent": "ASU__parent___3kyB1",
	"border": "ASU__border___2hjFp",
	"asu_touch": "ASU__asu_touch___3ehrG",
	"asuLogo": "ASU__asuLogo___Znd87",
	"main_search": "ASU__main_search___3_B-b",
	"asuHeader": "ASU__asuHeader___1d8o3",
	"asuHeaderGrid": "ASU__asuHeaderGrid___ahF4l",
	"closed": "ASU__closed___2Oq0f",
	"asu_mobile_hdr": "ASU__asu_mobile_hdr___3nqU6",
	"asuLogin": "ASU__asuLogin___1hjrn",
	"end": "ASU__end___35_F4",
	"asuLoginLink": "ASU__asuLoginLink___2GOTb",
	"srOnly": "ASU__srOnly___K2-QC",
	"asuSearch": "ASU__asuSearch___24IVd",
	"asuSearchBox": "ASU__asuSearchBox___1jkXH",
	"asuSearchButton": "ASU__asuSearchButton___1U2gi"
};

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi4vZXhhbXBsZXMvQVNVQnJhbmRIZWFkZXJFeGFtcGxlQ29uZmlnLmpzIiwid2VicGFjazovLy8uLi9zZXJ2ZXIvc3NyL3Nzci5qcyIsIndlYnBhY2s6Ly8vLi4vc2VydmVyL3RlbXBsYXRlcy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVQnJhbmRIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9BU1VGb290ZXIuanN4Iiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9BU1VIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9BU1VJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVUxpbmsuanN4Iiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9BU1VMb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVUxvZ28uanN4Iiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9BU1VOYXYuanN4Iiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9BU1VOYXZEZWZhdWx0VHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVTmF2SXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVVNlYXJjaEJveC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVVNpdGVOYW1lLmpzeCIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9zdHlsZXMvQVNVLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiXSwibmFtZXMiOlsiQVNVQnJhbmRIZWFkZXJFeGFtcGxlQ29uZmlnIiwiY29tcG9uZW50TGlzdCIsImhlYWRlciIsInR5cGUiLCJBU1VCcmFuZEhlYWRlciIsImRvbUlkIiwicHJvcHMiLCJoZWFkZXJPYmoiLCJmb290ZXIiLCJBU1VGb290ZXIiLCJyZW5kZXJBU1VDb21wb25lbnQiLCJyZXEiLCJyZXMiLCJjb21wb25lbnQiLCJBU1VDb21wb25lbnQiLCJodG1sIiwiUmVhY3RET01TZXJ2ZXIiLCJyZW5kZXJUb1N0cmluZyIsImlkIiwiYm9keSIsInJlbmRlckNvbXBvbmVudFBhZ2UiLCJwcm9kIiwiY29uZmlnIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbmQiLCJ0aXRsZSIsInJlbmRlclNTUkZ1bGxQYWdlIiwic2VuZEFTVUhlYWRlciIsInNlbmRBU1VGb290ZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiSXRlbSIsIkNvbXBvbmVudFBhZ2UiLCJGdWxsUGFnZVNTUiIsIkZ1bGxQYWdlU1NSUHJvZCIsInN0YXRlIiwicmVuZGVyQ2xpZW50IiwibG9nbyIsInN0eWxlcyIsImFzdUhlYWRlciIsIm5hdlRyZWUiLCJsb2dpbiIsInNpdGVUaXRsZSIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiYXJyYXlPZiIsImRlZmF1bHRQcm9wcyIsIkFTVUhlYWRlciIsIkFTVUxvZ2luIiwiZGVmYXVsdE5hdiIsImNsYXNzTmFtZSIsInNyT25seSIsImFzdUhlYWRlckdyaWQiLCJjaGlsZHJlbiIsIkFTVUxvZ28iLCJBU1VJbWFnZSIsImFsdCIsInNyYyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJBU1VMaW5rIiwibG9nZ2VkSW4iLCJhc3VMb2dpbiIsImFzdUxvZ2luTGluayIsImxvZ2luVXJsIiwibG9nb3V0VXJsIiwiYm9vbCIsImFzdUxvZ28iLCJocmVmIiwidGFyZ2V0IiwiQVNVTmF2IiwibmF2TWVudSIsInJlbmRlck5hdiIsImkiLCJsZW5ndGgiLCJjaGlsZCIsInB1c2giLCJhc3VOYXZXcmFwcGVyIiwiYXN1TmF2IiwibmF2TGlzdCIsIm5hdiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInN1YnRyZWUiLCJBU1VuYXZEZWZhdWx0VHJlZSIsIkFTVU5hdkl0ZW0iLCJjbGFzc2VzIiwiYXN1TmF2SXRlbSIsInRleHQiLCJBU1VTZWFyY2hCb3giLCJkcnVwYWwiLCJhc3VTZWFyY2giLCJhc3VTZWFyY2hCb3giLCJhc3VTZWFyY2hCdXR0b24iLCJBU1VTaXRlTmFtZSIsImFzdVNpdGVOYW1lIiwiYXN1U2l0ZU5hbWVMaW5rIiwicGFyZW50T3JnVXJsIiwiYXN1U2l0ZU5hbWVQYXJlbnRPcmciLCJwYXJlbnRPcmciLCJzaXRlVXJsIiwiYXN1U2l0ZU5hbWVUaXRsZSIsImluaXRBU1VIZWFkZXIiLCJhc3VfaGVhZGVyIiwiZWxlbWVudCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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R0FBaUI7QUFDYjRFLGdDQURhO0FBRWJsRyxrQ0FGYTtBQUdiMEMsa0NBSGE7QUFJYi9DLDRDQUphO0FBS2I0RCw4QkFMYTtBQU1iWixnQ0FOYTtBQU9ic0IsNEJBUGE7QUFRYm9CO0FBUmEsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQzVCQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzc3IuYnVuZGxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShnbG9iYWwsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9zZXJ2ZXIvc3NyL3Nzci5qc1wiKTtcbiIsImNvbnN0IEFTVUJyYW5kSGVhZGVyRXhhbXBsZUNvbmZpZyA9IHtcbiAgXCJzaXRlTWVudVwiOiBbXG4gICAge1xuICAgICAgXCJ0aXRsZVwiOlwiSG9tZVwiLFxuICAgICAgXCJwYXRoXCI6XCJodHRwOi8vd3d3LmFzdS5lZHUvYWJzb2x1dGVfcGF0aFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJEZWdyZWUgUHJvZ3JhbXNcIixcbiAgICAgIFwicGF0aFwiOlwiL2Fic29sdXRlX3BhdGgvcGFnZVwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6XCJBZG1pc3Npb25zXCIsXG4gICAgICAgICAgXCJwYXRoXCI6XCIvP3VybD12YXJpYWJsZVwiLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInRpdGxlXCI6XCJTdHVkZW50IExpZmVcIixcbiAgICAgICAgICAgICAgXCJwYXRoXCI6XCIvI2hhc2hcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjpcIlJvc3NcIixcbiAgICAgICAgICBcInBhdGhcIjpcImh0dHBzOi8vd3d3LmFzdS5lZHUvXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgXCJsb2dvXCI6IHtcbiAgICBcInNyY1wiOiBcImh0dHBzOi8vd3d3LmFzdS5lZHUvYXN1dGhlbWVzLzQuNi9hc3NldHMvZnVsbF9sb2dvLnBuZ1wiLFxuICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LmFzdS5lZHUvXCIsXG4gICAgXCJhbHRcIjogXCJBU1VcIlxuICB9LFxuICBcInNpdGVUaXRsZVwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIkFTVSBDdXN0b20gU2l0ZSBUaXRsZVwiLFxuICAgIFwicGFyZW50T3JnXCI6IFwiQVNVIEN1c3RvbSBQYXJlbnQgT3JnXCIsXG4gICAgXCJzaXRlVXJsXCI6IFwiaHR0cHM6Ly9hc3UuZWR1XCIsXG4gICAgXCJwYXJlbnRPcmdVcmxcIjogXCJodHRwczovL3V0by5hc3UuZWR1XCJcbiAgfSxcbiAgXCJsb2dpblwiOiB7XG4gICAgXCJsb2dpblVybFwiOiBcImh0dHBzOi8vd2VibG9naW4uYXN1LmVkdS9jZ2ktYmluL2xvZ2luXCIsXG4gICAgXCJsb2dvdXRVcmxcIjogXCIvY2FzL2xvZ291dFwiLFxuICAgIFwibG9nZ2VkSW5cIjogZmFsc2VcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQVNVQnJhbmRIZWFkZXJFeGFtcGxlQ29uZmlnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQge0FTVUJyYW5kSGVhZGVyLCBBU1VGb290ZXJ9IGZyb20gJy4uLy4uL3NyYy9jb3JlL2NvcmUuanMnO1xuaW1wb3J0IHtJdGVtLCBGdWxsUGFnZVNTUiwgRnVsbFBhZ2VTU1JQcm9kLCBDb21wb25lbnRQYWdlfSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGUnO1xuaW1wb3J0IEFTVUJyYW5kSGVhZGVyRXhhbXBsZUNvbmZpZyBmcm9tICcuLi8uLi9leGFtcGxlcy9BU1VCcmFuZEhlYWRlckV4YW1wbGVDb25maWcnO1xuXG5jb25zdCBjb21wb25lbnRMaXN0ID0ge1xuICAgIGhlYWRlcjoge1xuICAgICAgICB0eXBlOiBBU1VCcmFuZEhlYWRlcixcbiAgICAgICAgZG9tSWQ6ICdhc3UtaGVhZGVyLWNvbnRhaW5lcicsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBoZWFkZXJPYmo6IEFTVUJyYW5kSGVhZGVyRXhhbXBsZUNvbmZpZ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgICAgdHlwZTogQVNVRm9vdGVyLFxuICAgICAgICBkb21JZDogJ2FzdS1mb290ZXItY29udGFpbmVyJyxcbiAgICAgICAgcHJvcHM6IHt9XG4gICAgfVxufTtcblxuLyoqKlxuICogUmVuZGVyIGEgc2luZ2xlIEFTVSBVbml0eSBjb21wb25lbnQgc2VydmVyIHNpZGVcbiAqIEBwYXJhbSByZXFcbiAqIEBwYXJhbSByZXNcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCByZW5kZXJBU1VDb21wb25lbnQgPSAgKHJlcSwgcmVzLCBjb21wb25lbnQpID0+IHtcblxuICAgIGNvbnN0IEFTVUNvbXBvbmVudCA9IGNvbXBvbmVudC50eXBlO1xuXG4gICAgLy8gUmVuZGVycyBjb21wb25lbnQgdG8gc3RyaW5nXG4gICAgY29uc3QgaHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKDxBU1VDb21wb25lbnQgey4uLmNvbXBvbmVudC5wcm9wc30gLz4pO1xuXG4gICAgcmV0dXJuIEl0ZW0oe1xuICAgICAgICBpZDogY29tcG9uZW50LmRvbUlkLFxuICAgICAgICBib2R5OiBodG1sXG4gICAgfSk7XG59XG5cbi8qKlxuICogU2VydmVzIHBhZ2Ugd2l0aCB3ZWIgY29tcG9uZW50cyBidW5kbGUuXG4gKiBAcGFyYW0gcmVxXG4gKiBAcGFyYW0gcmVzXG4gKiBAcGFyYW0gcHJvZFxuICovXG5jb25zdCByZW5kZXJDb21wb25lbnRQYWdlID0gKHJlcSwgcmVzLCBwcm9kKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gSlNPTi5zdHJpbmdpZnkoQVNVQnJhbmRIZWFkZXJFeGFtcGxlQ29uZmlnKTtcbiAgICBwcm9kID0gcHJvZCA/IHRydWU6IGZhbHNlO1xuXG5cbiAgICByZXMuc2VuZChDb21wb25lbnRQYWdlKHtcbiAgICAgICAgdGl0bGU6ICdUZXN0IFBhZ2UnLFxuICAgICAgICBwcm9wczogY29uZmlnXG4gICAgfSkpO1xufTtcblxuY29uc3QgcmVuZGVyU1NSRnVsbFBhZ2UgPSAocmVxLCByZXMsIHByb2QpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSByZW5kZXJBU1VDb21wb25lbnQocmVxLCByZXMsIGNvbXBvbmVudExpc3QuaGVhZGVyKTtcbiAgICBjb25zdCBmb290ZXIgPSByZW5kZXJBU1VDb21wb25lbnQocmVxLCByZXMsIGNvbXBvbmVudExpc3QuZm9vdGVyKTtcbiAgICBjb25zdCBjb25maWcgPSBKU09OLnN0cmluZ2lmeShBU1VCcmFuZEhlYWRlckV4YW1wbGVDb25maWcpO1xuICAgIHByb2QgPSBwcm9kID8gdHJ1ZTogZmFsc2U7XG5cbiAgICBpZiAocHJvZCkge1xuICAgICAgICByZXMuc2VuZChGdWxsUGFnZVNTUlByb2Qoe1xuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgICAgICAgICBmb290ZXI6IGZvb3RlcixcbiAgICAgICAgICAgIHRpdGxlOiAnVGVzdCBQYWdlJyxcbiAgICAgICAgICAgIHByb3BzOiBjb25maWdcbiAgICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zZW5kKEZ1bGxQYWdlU1NSKHtcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyLFxuICAgICAgICAgICAgZm9vdGVyOiBmb290ZXIsXG4gICAgICAgICAgICB0aXRsZTogJ1Rlc3QgUGFnZScsXG4gICAgICAgICAgICBwcm9wczogY29uZmlnXG4gICAgICAgIH0pKTtcbiAgICB9XG59O1xuXG5jb25zdCBzZW5kQVNVSGVhZGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgaHRtbCA9IHJlbmRlckFTVUNvbXBvbmVudChyZXEsIHJlcywgY29tcG9uZW50TGlzdC5oZWFkZXIpO1xuICAgIHJlcy5zZW5kKGh0bWwpO1xufTtcblxuY29uc3Qgc2VuZEFTVUZvb3RlciA9IChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGh0bWwgPSByZW5kZXJBU1VDb21wb25lbnQocmVxLCByZXMsIGNvbXBvbmVudExpc3QuZm9vdGVyKTtcbiAgICByZXMuc2VuZChodG1sKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHJlbmRlckFTVUNvbXBvbmVudCxcbiAgICBzZW5kQVNVSGVhZGVyLFxuICAgIHNlbmRBU1VGb290ZXIsXG4gICAgcmVuZGVyU1NSRnVsbFBhZ2UsXG4gICAgcmVuZGVyQ29tcG9uZW50UGFnZVxufTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgY3Rlc3RhbWEgb24gNC8yNS8xOC5cbiAqL1xuY29uc3QgSXRlbSA9ICh7IGlkLCBib2R5IH0pID0+IChgXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBpZD0ke2lkfT4ke2JvZHl9PC9kaXY+XG4gICAgPC9kaXY+ICBcbmApO1xuXG5jb25zdCBDb21wb25lbnRQYWdlID0gICh7IHRpdGxlLCBwcm9wc30pID0+IChgXG4gIDwhRE9DVFlMRSBodG1sPlxuICA8aHRtbD5cbiAgICA8aGVhZD5cbiAgICAgIDx0aXRsZT4ke3RpdGxlfTwvdGl0bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgICNtYWluLWNvbnRlbnQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjAwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLy9jZG4ucG9seWZpbGwuaW8vdjIvcG9seWZpbGwubWluLmpzP2ZlYXR1cmVzPWRlZmF1bHQsZmV0Y2gsZXM2LEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3dlYmNvbXBvbmVudHNqcy8xLjAuMS9jdXN0b20tZWxlbWVudHMtZXM1LWFkYXB0ZXIuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy93ZWJjb21wb25lbnRzanMvMS4wLjEvd2ViY29tcG9uZW50cy1zZC1jZS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IGNyb3Nzb3JpZ2luIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE2L3VtZC9yZWFjdC5kZXZlbG9wbWVudC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IGNyb3Nzb3JpZ2luIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxNi91bWQvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL3dlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50cy5kZXZlbG9wbWVudC5qc1wiPjwvc2NyaXB0PlxuICAgIDwvaGVhZD5cbiAgICA8Ym9keT5cbiAgICAgICAgPGFzdS1icmFuZC1oZWFkZXIgaGVhZGVyT2JqPScke3Byb3BzfSc+PC9hc3UtYnJhbmQtaGVhZGVyPlxuICAgICAgICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCI+IDwvZGl2PlxuICAgIDwvYm9keT5cbiAgICA8Zm9vdGVyPlxuICAgIDwvZm9vdGVyPlxuICA8L2h0bWw+XG5gKTtcblxuY29uc3QgRnVsbFBhZ2VTU1IgPSAgKHsgaGVhZGVyLCBmb290ZXIsIHRpdGxlLCBwcm9wc30pID0+IChgXG4gIDwhRE9DVFlMRSBodG1sPlxuICA8aHRtbD5cbiAgICA8aGVhZD5cbiAgICAgIDx0aXRsZT4ke3RpdGxlfTwvdGl0bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgICNtYWluLWNvbnRlbnQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWQ+XG4gICAgPGJvZHk+XG4gICAgICA8ZGl2PiR7aGVhZGVyfTwvZGl2PlxuICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiPiA8L2Rpdj5cbiAgICA8L2JvZHk+XG4gICAgPHNjcmlwdCBjcm9zc29yaWdpbiBzcmM9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdEAxNi91bWQvcmVhY3QuZGV2ZWxvcG1lbnQuanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IGNyb3Nzb3JpZ2luIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxNi91bWQvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvY29yZS9jb3JlLmRldmVsb3BtZW50LmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdD5cbiAgICAgICAgdmFyIEFTVUhlYWRlciA9ICR7cHJvcHN9O1xuICAgICAgICBSZWFjdERPTS5oeWRyYXRlKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQVNVQnJhbmRIZWFkZXIsIEFTVUhlYWRlciksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXN1LWhlYWRlci1jb250YWluZXJcIikpO1xuICAgIDwvc2NyaXB0PlxuICAgIFxuICAgIDxmb290ZXI+XG4gICAgICAgICR7Zm9vdGVyfVxuICAgIDwvZm9vdGVyPlxuICA8L2h0bWw+XG5gKTtcblxuY29uc3QgRnVsbFBhZ2VTU1JQcm9kID0gICh7IGhlYWRlciwgZm9vdGVyLCB0aXRsZSwgcHJvcHN9KSA9PiAoYFxuICA8IURPQ1RZTEUgaHRtbD5cbiAgPGh0bWw+XG4gICAgPGhlYWQ+XG4gICAgICA8dGl0bGU+JHt0aXRsZX08L3RpdGxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAjbWFpbi1jb250ZW50IHtcbiAgICAgICAgICAgIGhlaWdodDogMTIwMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvaGVhZD5cbiAgICA8Ym9keT5cbiAgICAgIDxkaXY+JHtoZWFkZXJ9PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCI+IDwvZGl2PlxuICAgIDwvYm9keT5cbiAgICA8c2NyaXB0IGNyb3Nzb3JpZ2luIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE2L3VtZC9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgY3Jvc3NvcmlnaW4gc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtZG9tQDE2L3VtZC9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9jb3JlL2NvcmUucHJvZHVjdGlvbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL2NvcmUvY29yZS5wcm9kdWN0aW9uLmNzc1wiPlxuICAgIDxzY3JpcHQ+XG4gICAgICAgIHZhciBBU1VIZWFkZXIgPSAke3Byb3BzfTtcbiAgICAgICAgUmVhY3RET00uaHlkcmF0ZShSZWFjdC5jcmVhdGVFbGVtZW50KEFTVUJyYW5kSGVhZGVyLCBBU1VIZWFkZXIpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzdS1oZWFkZXItY29udGFpbmVyXCIpKTtcbiAgICA8L3NjcmlwdD5cbiAgICBcbiAgICA8Zm9vdGVyPlxuICAgICAgICAke2Zvb3Rlcn1cbiAgICA8L2Zvb3Rlcj5cbiAgPC9odG1sPlxuYCk7XG5cbmV4cG9ydCB7SXRlbSwgRnVsbFBhZ2VTU1IsIEZ1bGxQYWdlU1NSUHJvZCwgQ29tcG9uZW50UGFnZX07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBU1VIZWFkZXIgZnJvbSAnLi9BU1VIZWFkZXInO1xuaW1wb3J0IEFTVVNlYXJjaEJveCBmcm9tIFwiLi9BU1VTZWFyY2hCb3hcIjtcbmltcG9ydCBBU1VOYXYgZnJvbSBcIi4vQVNVTmF2XCI7XG5pbXBvcnQgQVNVU2l0ZU5hbWUgZnJvbSBcIi4vQVNVU2l0ZU5hbWVcIjtcbmltcG9ydCBBU1VMb2dpbiBmcm9tIFwiLi9BU1VMb2dpblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQVNVLmNzcyc7XG5pbXBvcnQgZGVmYXVsdE5hdiBmcm9tICcuL0FTVU5hdkRlZmF1bHRUcmVlJztcblxuY2xhc3MgQVNVQnJhbmRIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7cmVuZGVyQ2xpZW50OiBmYWxzZX07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QVNVSGVhZGVyIGxvZ289e3RoaXMucHJvcHMubG9nb30gY2xhc3NOYW1lPXtzdHlsZXMuYXN1SGVhZGVyfT5cbiAgICAgICAgICAgICAgICA8QVNVTmF2IG5hdj17dGhpcy5wcm9wcy5uYXZUcmVlfT5cbiAgICAgICAgICAgICAgICAgICAgPEFTVUxvZ2luIHsuLi50aGlzLnByb3BzLmxvZ2lufS8+XG4gICAgICAgICAgICAgICAgICAgIDxBU1VTZWFyY2hCb3gvPlxuICAgICAgICAgICAgICAgIDwvQVNVTmF2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZW5kZXJDbGllbnQgJiYgdGhpcy5wcm9wcy5zaXRlVGl0bGUgJiZcbiAgICAgICAgICAgICAgICAgICAgPEFTVVNpdGVOYW1lIHNpdGVUaXRsZT17dGhpcy5wcm9wcy5zaXRlVGl0bGV9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0FTVUhlYWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyQ2xpZW50OiB0cnVlIH0pO1xuICAgIH1cbn1cblxuXG5BU1VCcmFuZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gICAgbG9nbzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBsb2dpbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBuYXZUcmVlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBzaXRlVGl0bGU6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbi8vIFNwZWNpZmllcyB0aGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHByb3BzOlxuQVNVQnJhbmRIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGxvZ286IEFTVUhlYWRlci5kZWZhdWx0UHJvcHMubG9nbyxcbiAgICBsb2dpbjogQVNVTG9naW4uZGVmYXVsdFByb3BzLFxuICAgIG5hdlRyZWU6IGRlZmF1bHROYXZcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQVNVQnJhbmRIZWFkZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBBU1VGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJpbm5vdmF0aW9uLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbm5vdmF0aW9uLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubm92YXRpb24tdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubm92YXRpb24tc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvcmFua2luZ3NcIj48c3Bhbj5BU1UgaXMgIzEgaW4gdGhlIFUuUy4gZm9yIElubm92YXRpb248L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubm92YXRpb24taGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvcmFua2luZ3NcIj48aW1nIHNyYz1cIi8vd3d3LWRldi5hc3UuZWR1L2FzdXRoZW1lcy80LjYvYXNzZXRzL2Jlc3QtY29sbGVnZS0yMDE4LnBuZ1wiIGFsdD1cIkJlc3QgQ29sbGVnZXMgVS5TLiBOZXdzIE1vc3QgSW5ub3ZhdGl2ZSAyMDE4XCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L2NvcHlyaWdodC9cIj5Db3B5cmlnaHQgYW5kIFRyYWRlbWFyazwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L2FjY2Vzc2liaWxpdHkvXCI+QWNjZXNzaWJpbGl0eTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L3ByaXZhY3kvXCI+UHJpdmFjeTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L3RvdS9cIj5UZXJtcyBvZiBVc2U8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9hc3Vqb2JzXCI+Sm9iczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L2VtZXJnZW5jeS9cIj5FbWVyZ2VuY3k8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuby1ib3JkZXJcIj48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9jb250YWN0YXN1L1wiPkNvbnRhY3QgQVNVPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQVNVRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFTVUxvZ28gZnJvbSBcIi4vQVNVTG9nb1wiO1xuaW1wb3J0IEFTVUxpbmsgZnJvbSBcIi4vQVNVTGlua1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQVNVLmNzcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBBU1VIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGhlYWRlciB7Li4uKHRoaXMucHJvcHMuY2xhc3NOYW1lID8ge2NsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWV9IDoge30pfT5cbiAgICAgICAgICAgICAgICA8QVNVTGluayBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9hY2Nlc3NpYmlsaXR5L1wiIGNsYXNzTmFtZT17c3R5bGVzLnNyT25seX0+UmVwb3J0IGFuIGFjY2Vzc2liaWxpdHkgcHJvYmxlbTwvQVNVTGluaz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFzdUhlYWRlckdyaWR9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2dvID8gPEFTVUxvZ28gey4uLnRoaXMucHJvcHMubG9nb30gLz4gOiAnJ31cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG59XG5cbkFTVUhlYWRlci5wcm9wVHlwZXMgPSB7XG4gICAgbG9nbzogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuLy8gU3BlY2lmaWVzIHRoZSBkZWZhdWx0IHZhbHVlcyBmb3IgcHJvcHM6XG5BU1VIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGxvZ286IEFTVUxvZ28uZGVmYXVsdFByb3BzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBU1VIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0FTVS5jc3NcIlxuXG5jb25zdCBBU1VJbWFnZSA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aW1nIGFsdD17cHJvcHMuYWx0fSBzcmM9e3Byb3BzLnNyY30gLz5cbiAgICApO1xufTtcblxuQVNVSW1hZ2UucHJvcFR5cGVzID0ge1xuICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFsdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBU1VJbWFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQVNVTGluayA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YSB7Li4ucHJvcHN9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2E+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFTVUxpbms7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FTVS5jc3MnO1xuXG5jbGFzcyBBU1VMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9nZ2VkSW46ICghIXByb3BzLmxvZ2dlZEluKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hc3VMb2dpbn0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3JPbmx5fT5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBJbiAvIFNpZ24gT3V0XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5zdGF0ZS5sb2dnZWRJbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmFzdUxvZ2luTGlua30gaHJlZj17dGhpcy5wcm9wcy5sb2dpblVybH0gdGFyZ2V0PVwiX3RvcFwiPlNpZ24gSW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5hc3VMb2dpbkxpbmt9IGhyZWY9e3RoaXMucHJvcHMubG9nb3V0VXJsfSB0YXJnZXQ9XCJfdG9wXCI+U2lnbiBPdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5BU1VMb2dpbi5wcm9wVHlwZXMgPSB7XG4gICAgbG9naW5Vcmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbG9nb3V0VXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuLy8gU3BlY2lmaWVzIHRoZSBkZWZhdWx0IHZhbHVlcyBmb3IgcHJvcHM6XG5BU1VMb2dpbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbG9naW5Vcmw6IFwiaHR0cHM6Ly93ZWJsb2dpbi5hc3UuZWR1L2NnaS1iaW4vbG9naW5cIixcbiAgICBsb2dvdXRVcmw6IFwiL2Nhcy9sb2dvdXRcIixcbiAgICBsb2dnZWRJbjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFTVUxvZ2luOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VJbWFnZSBmcm9tIFwiLi9BU1VJbWFnZVwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0FTVS5jc3NcIlxuXG5jb25zdCBBU1VMb2dvID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXN1TG9nb30+XG4gICAgICAgICAgICA8YSBocmVmPXtwcm9wcy5ocmVmfSB0YXJnZXQ9e3Byb3BzLnRhcmdldH0+XG4gICAgICAgICAgICAgICAgPEFTVUltYWdlIGFsdD17cHJvcHMuYWx0fSBzcmM9e3Byb3BzLnNyY30gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbkFTVUxvZ28ucHJvcFR5cGVzID0ge1xuICAgIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbi8vIFNwZWNpZmllcyB0aGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHByb3BzOlxuQVNVTG9nby5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaHJlZjogJy8nLFxuICAgIHRhcmdldDogJ190b3AnLFxuICAgIGFsdDogJ0EgUyBVJyxcbiAgICBzcmM6IFwiaHR0cHM6Ly93d3cuYXN1LmVkdS9hc3V0aGVtZXMvNC42L2Fzc2V0cy9mdWxsX2xvZ28ucG5nXCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFTVUxvZ287IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFTVU5hdkl0ZW0gZnJvbSAnLi9BU1VOYXZJdGVtJztcbmltcG9ydCBBU1VMb2dpbiBmcm9tICcuL0FTVUxvZ2luJztcbmltcG9ydCBkZWZhdWx0TmF2IGZyb20gXCIuL0FTVU5hdkRlZmF1bHRUcmVlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQVNVLmNzcyc7XG5cbmNvbnN0IEFTVU5hdiA9IHByb3BzID0+IHtcblxuICAgIGNvbnN0IG5hdk1lbnUgPSByZW5kZXJOYXYocHJvcHMubmF2VHJlZSk7XG4gICAgbGV0IGxvZ2luID0gbnVsbDtcbiAgICBsZXQgY2hpbGRyZW4gPSBbXTtcblxuICAgIC8vIGV4dHJhY3QgdGhlIGxvZ2luIGlmIHBhc3NlZCBhcyBhIGNoaWxkLiBUaGUgbG9naW4gbGluayB3aWxsXG4gICAgLy8gYmUgcmVuZGVyZWQgaW5saW5lIHdpdGggdGhlIG5hdm1lbnUgcGVyIHRoZSBicmFuZCBzdGFuZGFyZHNcbiAgICBpZiAocHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBwcm9wcy5jaGlsZHJlbltpXTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IEFTVUxvZ2luKSB7XG4gICAgICAgICAgICAgICAgbG9naW4gPSBjaGlsZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFzdU5hdldyYXBwZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hc3VOYXZ9IHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cIkFTVVwiPlxuICAgICAgICAgICAgICAgIHtuYXZNZW51fVxuICAgICAgICAgICAgICAgIHtsb2dpbiAhPT0gbnVsbCA/IGxvZ2luIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtjaGlsZHJlbi5sZW5ndGggPiAwID8gY2hpbGRyZW4gOiAnJ31cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmNvbnN0IHJlbmRlck5hdiA9IG5hdiA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlzdH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmF2Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBU1VOYXZJdGVtIHsuLi5pdGVtfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0uc3VidHJlZSA/IHJlbmRlck5hdihpdGVtLnN1YnRyZWUpOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BU1VOYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgKTtcbn07XG5cbkFTVU5hdi5wcm9wVHlwZXMgPSB7XG4gICAgbmF2VHJlZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcbn07XG5cbi8vIFNwZWNpZmllcyB0aGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHByb3BzOlxuQVNVTmF2LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYXZUcmVlOiBkZWZhdWx0TmF2XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFTVU5hdjsiLCJjb25zdCBBU1VuYXZEZWZhdWx0VHJlZSA9IFtcbiAge1xuICAgIFwidGl0bGVcIjpcIlwiLFxuICAgIFwidGV4dFwiOlwiQVNVIEhvbWVcIixcbiAgICBcImhyZWZcIjpcImh0dHBzOi8vd3d3LmFzdS5lZHUvXCIsXG4gICAgXCJjbGFzc2VzXCI6IFwicGFyZW50XCIsXG4gICAgXCJzdWJ0cmVlXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjbGFzc2VzXCI6IFwiZmlyc3RcIixcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cuYXN1LmVkdS8/ZmVhdHVyZT1uZXdzZXZlbnRzXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiTmV3cyBhbmQgRXZlbnRzXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIk5ld3MvRXZlbnRzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LmFzdS5lZHUvP2ZlYXR1cmU9YWNhZGVtaWNzXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiQWNhZGVtaWNzXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkFjYWRlbWljc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPXJlc2VhcmNoXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiUmVzZWFyY2hcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiUmVzZWFyY2hcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cuYXN1LmVkdS8/ZmVhdHVyZT1hdGhsZXRpY3NcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJBdGhsZXRpY3NcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiQXRobGV0aWNzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LmFzdS5lZHUvP2ZlYXR1cmU9YWx1bW5pXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiQWx1bW5pXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkFsdW1uaVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPWdpdmluZ1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdpdmluZ1wiLFxuICAgICAgICBcInRleHRcIjogXCJHaXZpbmdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cuYXN1LmVkdS8/ZmVhdHVyZT1wcmVzaWRlbnRcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJQcmVzaWRlbnRcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiUHJlc2lkZW50XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LmFzdS5lZHUvYWJvdXRcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJBYm91dCBBU1VcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiQWJvdXQgQVNVXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiXCIsXG4gICAgXCJ0ZXh0XCI6IFwiTXkgQVNVXCIsXG4gICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9teS5hc3UuZWR1L1wiLFxuICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiXG4gIH0sXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiXCIsXG4gICAgXCJjbGFzc2VzXCI6IFwicGFyZW50XCIsXG4gICAgXCJ0ZXh0XCI6IFwiTWFwIGFuZCBMb2NhdGlvbnNcIixcbiAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5hc3UuZWR1L21hcC9cIixcbiAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICBcInN1YnRyZWVcIjogW1xuICAgICAge1xuICAgICAgICBcImNsYXNzZXNcIjogXCJmaXJzdFwiLFxuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2FydHNhbmRzY2llbmNlcy5hc3UuZWR1L1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFydHMgYW5kIFNjaWVuY2VzIHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiQXJ0cyBhbmQgU2NpZW5jZXNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93cGNhcmV5LmFzdS5lZHUvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiVy4gUC4gQ2FyZXkgU2Nob29sIG9mIEJ1c2luZXNzIFdlYiBhbmQgTW9ycmlzb24gU2Nob29sIG9mIEFncmlidXNpbmVzcyB3ZWJzaXRlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkJ1c2luZXNzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vaGVyYmVyZ2VyaW5zdGl0dXRlLmFzdS5lZHVcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJIZXJiZXJnZXIgSW5zdGl0dXRlIGZvciBEZXNpZ24gYW5kIHRoZSBBcnRzIHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRGVzaWduIGFuZCB0aGUgQXJ0c1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2VkdWNhdGlvbi5hc3UuZWR1L1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1hcnkgTG91IEZ1bHRvbiBUZWFjaGVycyBDb2xsZWdlIHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRWR1Y2F0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZW5naW5lZXJpbmcuYXN1LmVkdS9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJFbmdpbmVlcmluZyB3ZWJzaXRlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkVuZ2luZWVyaW5nXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vc2Zpcy5hc3UuZWR1L1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZ1dHVyZSBvZiBJbm5vdmF0aW9uIGluIFNvY2lldHkgd2Vic2l0ZVwiLFxuICAgICAgICBcInRleHRcIjogXCJGdXR1cmUgb2YgSW5ub3ZhdGlvbiBpbiBTb2NpZXR5XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ3JhZHVhdGUuYXN1LmVkdVwiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdyYWR1YXRlIENvbGxlZ2Ugd2Vic2l0ZVwiLFxuICAgICAgICBcInRleHRcIjogXCJHcmFkdWF0ZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2Nocy5hc3UuZWR1L1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhlYWx0aCBTb2x1dGlvbnMgd2Vic2l0ZVwiLFxuICAgICAgICBcInRleHRcIjogXCJIZWFsdGggU29sdXRpb25zXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vaG9ub3JzLmFzdS5lZHUvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiQmFycmV0dCwgVGhlIEhvbm9ycyBDb2xsZWdlIHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiSG9ub3JzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vY3JvbmtpdGUuYXN1LmVkdVwiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldhbHRlciBDcm9ua2l0ZSBTY2hvb2wgb2YgSm91cm5hbGlzbSBhbmQgTWFzcyBDb21tdW5pY2F0aW9uIHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiSm91cm5hbGlzbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5sYXcuYXN1LmVkdS9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJTYW5kcmEgRGF5IE8nIENvbm5vciBDb2xsZWdlIG9mIExhdyB3ZWJzaXRlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkxhd1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL251cnNpbmdhbmRoZWFsdGguYXN1LmVkdS9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJDb2xsZWdlIG9mIE51cnNpbmcgYW5kIEhlYWx0aCBJbm5vdmF0aW9uIHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiTnVyc2luZyBhbmQgSGVhbHRoIElubm92YXRpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJocmVmXCI6IFwiLy9jb3BwLmFzdS5lZHVcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJDb2xsZWdlIG9mIFB1YmxpYyBQcm9ncmFtcyB3ZWJzaXRlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIlB1YmxpYyBTZXJ2aWNlIGFuZCBDb21tdW5pdHkgU29sdXRpb25zXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vc2Nob29sb2ZzdXN0YWluYWJpbGl0eS5hc3UuZWR1XCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiU2Nob29sIG9mIFN1c3RhaW5hYmlsaXR5IHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiU3VzdGFpbmFiaWxpdHlcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJocmVmXCI6IFwiLy91Yy5hc3UuZWR1L1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVuaXZlcnNpdHkgQ29sbGVnZSB3ZWJzaXRlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIlVuaXZlcnNpdHkgQ29sbGVnZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy50aHVuZGVyYmlyZC5lZHUvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiVGh1bmRlcmJpcmQgU2Nob29sIG9mIEdsb2JhbCBNYW5hZ2VtZW50IHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiVGh1bmRlcmJpcmQgU2Nob29sIG9mIEdsb2JhbCBNYW5hZ2VtZW50XCJcbiAgICAgIH1cbiAgICBdXG5cbiAgfSxcbiAge1xuICAgIFwidGl0bGVcIjogXCJcIixcbiAgICBcImNsYXNzZXNcIjogXCJwYXJlbnRcIixcbiAgICBcInRleHRcIjogXCJNYXAgYW5kIExvY2F0aW9uc1wiLFxuICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LmFzdS5lZHUvbWFwL1wiLFxuICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgIFwic3VidHJlZVwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY2xhc3Nlc1wiOiBcImJvcmRlciBmaXJzdFwiLFxuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5hc3UuZWR1L21hcC9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiTWFwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vY2FtcHVzLmFzdS5lZHUvdGVtcGUvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiVGVtcGUgY2FtcHVzXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIlRlbXBlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vY2FtcHVzLmFzdS5lZHUvd2VzdC9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJXZXN0IGNhbXB1c1wiLFxuICAgICAgICBcInRleHRcIjogXCJXZXN0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vY2FtcHVzLmFzdS5lZHUvcG9seXRlY2huaWMvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiUG9seXRlY2huaWMgY2FtcHVzXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIlBvbHl0ZWNobmljXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vY2FtcHVzLmFzdS5lZHUvZG93bnRvd24vXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiRG93bnRvd24gUGhvZW5peCBjYW1wdXNcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRG93bnRvd24gUGhvZW5peFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2FzdW9ubGluZS5hc3UuZWR1L1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9ubGluZSBhbmQgRXh0ZW5kZWQgY2FtcHVzXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIk9ubGluZSBhbmQgRXh0ZW5kZWRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9oYXZhc3UuYXN1LmVkdS9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiTGFrZSBIYXZhc3VcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cudGh1bmRlcmJpcmQuZWR1L2Fib3V0LXRodW5kZXJiaXJkL2xvY2F0aW9ucy9waG9lbml4LWFyaXpvbmFcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwiY2xhc3Nlc1wiOiBcImJvcmRlclwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIlRodW5kZXJiaXJkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vc2t5c29uZy5hc3UuZWR1L1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLFxuICAgICAgICBcInRleHRcIjogXCJTa3lzb25nXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vYXN1cmVzZWFyY2hwYXJrLmNvbS9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiUmVzZWFyY2ggUGFya1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3dhc2hpbmd0b25jZW50ZXIuYXN1LmVkdS9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiV2FzaGluZ3RvbiBELkMuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3BjYXJleS5hc3UuZWR1L21iYS9jaGluYS1wcm9ncmFtL2VuZ2xpc2gvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkNoaW5hXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiRGlyZWN0b3J5LCBJbmRleCBhbmQgb3RoZXIgaW5mb1wiLFxuICAgIFwidGV4dFwiOiBcIkRpcmVjdG9yeVwiLFxuICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vaXNlYXJjaC5hc3UuZWR1L1wiLFxuICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IEFTVW5hdkRlZmF1bHRUcmVlOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VMaW5rIGZyb20gJy4vQVNVTGluayc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9BU1UuY3NzJztcblxuY29uc3QgQVNVTmF2SXRlbSA9IHByb3BzID0+IHtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBzdHlsZXMuYXN1TmF2SXRlbSArIChwcm9wcy5jbGFzc2VzID8gJyAnICsgIHByb3BzLmNsYXNzZXMgOiAnJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICAgIDxBU1VMaW5rIGhyZWY9e3Byb3BzLmhyZWZ9IHRhcmdldD17cHJvcHMudGFyZ2V0fT57cHJvcHMudGV4dH08L0FTVUxpbms+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvbGk+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFTVU5hdkl0ZW07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQVNVLmNzcydcblxuY2xhc3MgQVNVU2VhcmNoQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRydXBhbCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFzdVNlYXJjaH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zck9ubHl9PlNlYXJjaDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiZ29vZ2xlL2FwcGxpYW5jZS9ibG9jay9mb3JtXCIgbWV0aG9kPVwicG9zdFwiIF9scGNoZWNrZWQ9XCIxXCI+PGxhYmVsIGh0bWxGb3I9XCJtYXN1X3NlYXJjaF9ib3hcIj5TZWFyY2g8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzZWFyY2hfaGVhZGVyXCIgY2xhc3NOYW1lPXtzdHlsZXMuYXN1U2VhcmNoQm94fSBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmFzdVNlYXJjaEJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXN1U2VhcmNofT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3JPbmx5fT5TZWFyY2g8L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtIHRhcmdldD1cIl90b3BcIiBhY3Rpb249XCJodHRwczovL3NlYXJjaC5hc3UuZWR1L3NlYXJjaFwiIG1ldGhvZD1cImdldFwiIG5hbWU9XCJnc1wiIHJvbGU9XCJzZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLnNyT25seX0gaHRtbEZvcj1cIm1hc3Vfc2VhcmNoX2JveFwiPlNlYXJjaDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2l0ZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cImRlZmF1bHRfY29sbGVjdGlvblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzb3J0XCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiZGF0ZTpEOkw6ZDFcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwib3V0cHV0XCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwieG1sX25vX2R0ZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwcm94eXN0eWxlc2hlZXRcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJhc3VfZnJvbnRlbmRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaWVcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJVVEYtOFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJvZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIlVURi04XCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImNsaWVudFwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cImFzdV9mcm9udGVuZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmFzdVNlYXJjaEJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInFcIiBjbGFzc05hbWU9e3N0eWxlcy5hc3VTZWFyY2hCb3h9IGlkPVwibWFzdV9zZWFyY2hfYm94XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBU1VTZWFyY2hCb3g7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFTVUxpbmsgZnJvbSBcIi4vQVNVTGlua1wiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQVNVLmNzc1wiXG5cbmNvbnN0IEFTVVNpdGVOYW1lID0gcHJvcHMgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hc3VTaXRlTmFtZX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxBU1VMaW5rIGNsYXNzTmFtZT17c3R5bGVzLmFzdVNpdGVOYW1lTGlua30gaHJlZj17cHJvcHMuc2l0ZVRpdGxlLnBhcmVudE9yZ1VybH0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFzdVNpdGVOYW1lUGFyZW50T3JnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaXRlVGl0bGUucGFyZW50T3JnfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9BU1VMaW5rPlxuICAgICAgICAgICAgICAgIDxBU1VMaW5rIGNsYXNzTmFtZT17c3R5bGVzLmFzdVNpdGVOYW1lTGlua30gdGl0bGU9XCJIb21lXCIgcmVsPVwiaG9tZVwiIGhyZWY9e3Byb3BzLnNpdGVUaXRsZS5zaXRlVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXN1U2l0ZU5hbWVUaXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2l0ZVRpdGxlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9BU1VMaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBU1VTaXRlTmFtZTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgY3Rlc3RhbWEgb24gMy8yMS8xOC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBSZWFjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFTVU5hdiBmcm9tICcuL2NvbXBvbmVudHMvQVNVTmF2J1xuaW1wb3J0IEFTVUZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvQVNVRm9vdGVyJ1xuaW1wb3J0IEFTVUJyYW5kSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9BU1VCcmFuZEhlYWRlcic7XG5pbXBvcnQgQVNVSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9BU1VIZWFkZXInO1xuaW1wb3J0IEFTVUxpbmsgZnJvbSAnLi9jb21wb25lbnRzL0FTVUxpbmsnO1xuaW1wb3J0IEFTVVNlYXJjaEJveCBmcm9tICcuL2NvbXBvbmVudHMvQVNVU2VhcmNoQm94JztcbmltcG9ydCBBU1VMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvQVNVTG9naW4nO1xuXG5jb25zdCBpbml0QVNVSGVhZGVyID0gKGFzdV9oZWFkZXIsIGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50ID8gUmVhY3RET00ucmVuZGVyKDxBU1VIZWFkZXJDb250YWluZXIgaGVhZGVyT2JqPXthc3VfaGVhZGVyfSAvPiwgZWxlbWVudCkgOiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGluaXRBU1VIZWFkZXIsXG4gICAgQVNVRm9vdGVyLFxuICAgIEFTVUhlYWRlcixcbiAgICBBU1VCcmFuZEhlYWRlcixcbiAgICBBU1VMaW5rLFxuICAgIEFTVUxvZ2luLFxuICAgIEFTVU5hdixcbiAgICBBU1VTZWFyY2hCb3hcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXN1U2l0ZU5hbWVcIjogXCJBU1VfX2FzdVNpdGVOYW1lX19fM2duY1RcIixcblx0XCJhc3VTaXRlTmFtZUxpbmtcIjogXCJBU1VfX2FzdVNpdGVOYW1lTGlua19fX0YySU51XCIsXG5cdFwiYXN1U2l0ZU5hbWVQYXJlbnRPcmdcIjogXCJBU1VfX2FzdVNpdGVOYW1lUGFyZW50T3JnX19fMWJFWDRcIixcblx0XCJhc3VTaXRlTmFtZVRpdGxlXCI6IFwiQVNVX19hc3VTaXRlTmFtZVRpdGxlX19fM1RWc3hcIixcblx0XCJhc3VfbW9iaWxlX2J1dHRvblwiOiBcIkFTVV9fYXN1X21vYmlsZV9idXR0b25fX18zQnAxQVwiLFxuXHRcImFzdV9wcmludF9sb2dvXCI6IFwiQVNVX19hc3VfcHJpbnRfbG9nb19fXzltTnVqXCIsXG5cdFwiYXN1TmF2V3JhcHBlclwiOiBcIkFTVV9fYXN1TmF2V3JhcHBlcl9fX0RuZjhHXCIsXG5cdFwiYXN1TmF2XCI6IFwiQVNVX19hc3VOYXZfX19VaHFKQ1wiLFxuXHRcIm5hdkxpc3RcIjogXCJBU1VfX25hdkxpc3RfX18zUUN2MFwiLFxuXHRcImFzdU5hdkl0ZW1cIjogXCJBU1VfX2FzdU5hdkl0ZW1fX18zVXpuZFwiLFxuXHRcImFzdV9oZWFkX2hvdmVyXCI6IFwiQVNVX19hc3VfaGVhZF9ob3Zlcl9fX1JIYnNLXCIsXG5cdFwicGFyZW50XCI6IFwiQVNVX19wYXJlbnRfX18za3lCMVwiLFxuXHRcImJvcmRlclwiOiBcIkFTVV9fYm9yZGVyX19fMmhqRnBcIixcblx0XCJhc3VfdG91Y2hcIjogXCJBU1VfX2FzdV90b3VjaF9fXzNlaHJHXCIsXG5cdFwiYXN1TG9nb1wiOiBcIkFTVV9fYXN1TG9nb19fX1puZDg3XCIsXG5cdFwibWFpbl9zZWFyY2hcIjogXCJBU1VfX21haW5fc2VhcmNoX19fM19CLWJcIixcblx0XCJhc3VIZWFkZXJcIjogXCJBU1VfX2FzdUhlYWRlcl9fXzFkOG8zXCIsXG5cdFwiYXN1SGVhZGVyR3JpZFwiOiBcIkFTVV9fYXN1SGVhZGVyR3JpZF9fX2FoRjRsXCIsXG5cdFwiY2xvc2VkXCI6IFwiQVNVX19jbG9zZWRfX18yT3EwZlwiLFxuXHRcImFzdV9tb2JpbGVfaGRyXCI6IFwiQVNVX19hc3VfbW9iaWxlX2hkcl9fXzNucVU2XCIsXG5cdFwiYXN1TG9naW5cIjogXCJBU1VfX2FzdUxvZ2luX19fMWhqcm5cIixcblx0XCJlbmRcIjogXCJBU1VfX2VuZF9fXzM1X0Y0XCIsXG5cdFwiYXN1TG9naW5MaW5rXCI6IFwiQVNVX19hc3VMb2dpbkxpbmtfX18yR09UYlwiLFxuXHRcInNyT25seVwiOiBcIkFTVV9fc3JPbmx5X19fSzItUUNcIixcblx0XCJhc3VTZWFyY2hcIjogXCJBU1VfX2FzdVNlYXJjaF9fXzI0SVZkXCIsXG5cdFwiYXN1U2VhcmNoQm94XCI6IFwiQVNVX19hc3VTZWFyY2hCb3hfX18xamtYSFwiLFxuXHRcImFzdVNlYXJjaEJ1dHRvblwiOiBcIkFTVV9fYXN1U2VhcmNoQnV0dG9uX19fMVUyZ2lcIlxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==