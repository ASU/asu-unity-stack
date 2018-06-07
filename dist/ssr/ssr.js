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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ssr/SSR.js");
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
    "parent_org": "ASU Custom Parent Org",
    "site_url": "https://asu.edu",
    "parent_org_url": "https://uto.asu.edu"
  },
  "login": {
    "loginUrl": "https://weblogin.asu.edu/cgi-bin/login",
    "logoutUrl": "/cas/logout",
    "loggedIn": false
  }
};

exports.default = ASUBrandHeaderExampleConfig;

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

var _ASUButton = __webpack_require__(/*! ./ASUButton */ "./core/components/ASUButton.jsx");

var _ASUButton2 = _interopRequireDefault(_ASUButton);

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
            var header = this.props.headerObj;

            return _react2.default.createElement(
                _ASUHeader2.default,
                { logo: header.logo, className: _ASU2.default.asuHeader },
                _react2.default.createElement(
                    _ASUNav2.default,
                    { nav: _ASUNavDefaultTree2.default },
                    _react2.default.createElement(_ASULogin2.default, header.login),
                    _react2.default.createElement(_ASUSearchBox2.default, null)
                ),
                this.state.renderClient && header.siteTitle && _react2.default.createElement(_ASUSiteName2.default, { siteTitle: header.siteTitle })
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

exports.default = ASUBrandHeader;

/***/ }),

/***/ "./core/components/ASUButton.jsx":
/*!***************************************!*\
  !*** ./core/components/ASUButton.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASU = __webpack_require__(/*! ../styles/ASU.css */ "./core/styles/ASU.css");

var _ASU2 = _interopRequireDefault(_ASU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASUButton = function ASUButton(props) {

    return _react2.default.createElement(
        "button",
        props,
        props.children
    );
};

exports.default = ASUButton;

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

var _ASU = __webpack_require__(/*! ../styles/ASU.css */ "./core/styles/ASU.css");

var _ASU2 = _interopRequireDefault(_ASU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASUImage = function ASUImage(props) {

    return _react2.default.createElement("img", { alt: props.alt, src: props.src });
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
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: _ASU2.default.asuLogin },
                _react2.default.createElement(
                    "span",
                    { className: _ASU2.default.srOnly },
                    "Sign In / Sign Out"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    !this.state.loggedIn ? _react2.default.createElement(
                        "a",
                        { className: _ASU2.default.asuLoginLink, href: this.props.loginUrl, target: "_top" },
                        "Sign In"
                    ) : _react2.default.createElement(
                        "a",
                        { className: _ASU2.default.asuLoginLink, href: this.props.logoutUrl, target: "_top" },
                        "Sign Out"
                    )
                )
            );
        }
    }]);

    return ASULogin;
}(_react.Component);

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

var _ASU = __webpack_require__(/*! ../styles/ASU.css */ "./core/styles/ASU.css");

var _ASU2 = _interopRequireDefault(_ASU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASUNav = function ASUNav(props) {

    var navMenu = renderNav(props.nav);
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
                { className: _ASU2.default.asuSiteNameLink, href: props.siteTitle.parent_org_url },
                _react2.default.createElement(
                    "span",
                    { className: _ASU2.default.asuSiteNameParentOrg },
                    props.siteTitle.parent_org
                )
            ),
            _react2.default.createElement(
                _ASULink2.default,
                { className: _ASU2.default.asuSiteNameLink, title: "Home", rel: "home", href: props.siteTitle.site_url },
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

/***/ "./ssr/SSR.js":
/*!********************!*\
  !*** ./ssr/SSR.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _core = __webpack_require__(/*! ../core/core.js */ "./core/core.js");

var _template = __webpack_require__(/*! ../templates/template */ "./templates/template.js");

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

var renderASUComponent = function renderASUComponent(req, res, component) {

    var ASUComponent = component.type;

    // Renders component to string
    var html = _server2.default.renderToString(_react2.default.createElement(ASUComponent, component.props));

    return (0, _template.Item)({
        id: component.domId,
        body: html
    });
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
    renderSSRFullPage: renderSSRFullPage
};

/***/ }),

/***/ "./templates/template.js":
/*!*******************************!*\
  !*** ./templates/template.js ***!
  \*******************************/
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

var FullPageSSR = function FullPageSSR(_ref2) {
    var header = _ref2.header,
        footer = _ref2.footer,
        title = _ref2.title,
        props = _ref2.props;
    return "\n  <!DOCTYLE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n      <style>\n        #main-content {\n            height: 1200px;\n        }\n        </style>\n    </head>\n    <body>\n      <div>" + header + "</div>\n      <div id=\"main-content\"> </div>\n    </body>\n    <script crossorigin src=\"https://unpkg.com/react@16/umd/react.development.js\"></script>\n    <script crossorigin src=\"https://unpkg.com/react-dom@16/umd/react-dom.development.js\"></script>\n    <script src=\"/core/core.development.js\"></script>\n    <script>\n        var ASUHeader = " + props + ";\n        ReactDOM.hydrate(React.createElement(ASUnity.core.ASUBrandHeader, {headerObj: ASUHeader}), document.getElementById(\"asu-header-container\"));\n    </script>\n    \n    <footer>\n        " + footer + "\n    </footer>\n  </html>\n";
};

var FullPageSSRProd = function FullPageSSRProd(_ref3) {
    var header = _ref3.header,
        footer = _ref3.footer,
        title = _ref3.title,
        props = _ref3.props;
    return "\n  <!DOCTYLE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n      <style>\n        #main-content {\n            height: 1200px;\n        }\n        </style>\n    </head>\n    <body>\n      <div>" + header + "</div>\n      <div id=\"main-content\"> </div>\n    </body>\n    <script crossorigin src=\"https://unpkg.com/react@16/umd/react.production.min.js\"></script>\n    <script crossorigin src=\"https://unpkg.com/react-dom@16/umd/react-dom.production.min.js\"></script>\n    <script src=\"/core/core.production.js\"></script>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"/core/core.production.css\">\n    <script>\n        var ASUHeader = " + props + ";\n        ReactDOM.hydrate(React.createElement(ASUnity.core.ASUBrandHeader, {headerObj: ASUHeader}), document.getElementById(\"asu-header-container\"));\n    </script>\n    \n    <footer>\n        " + footer + "\n    </footer>\n  </html>\n";
};

exports.Item = Item;
exports.FullPageSSR = FullPageSSR;
exports.FullPageSSRProd = FullPageSSRProd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi4vZXhhbXBsZXMvQVNVQnJhbmRIZWFkZXJFeGFtcGxlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9BU1VCcmFuZEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVUZvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVUhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVUltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVTGluay5qc3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVUxvZ2luLmpzeCIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVTG9nby5qc3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVU5hdi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVU5hdkRlZmF1bHRUcmVlLmpzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9BU1VOYXZJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVU2VhcmNoQm94LmpzeCIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVU2l0ZU5hbWUuanN4Iiwid2VicGFjazovLy8uL2NvcmUvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3N0eWxlcy9BU1UuY3NzIiwid2VicGFjazovLy8uL3Nzci9TU1IuanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIl0sIm5hbWVzIjpbIkFTVUJyYW5kSGVhZGVyRXhhbXBsZUNvbmZpZyIsIkFTVUJyYW5kSGVhZGVyIiwic3RhdGUiLCJyZW5kZXJDbGllbnQiLCJoZWFkZXIiLCJwcm9wcyIsImhlYWRlck9iaiIsImxvZ28iLCJzdHlsZXMiLCJhc3VIZWFkZXIiLCJuYXZ0cmVlIiwibG9naW4iLCJzaXRlVGl0bGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsIkFTVUJ1dHRvbiIsImNoaWxkcmVuIiwiQVNVRm9vdGVyIiwibW9kdWxlIiwiZXhwb3J0cyIsIkFTVUhlYWRlciIsImNsYXNzTmFtZSIsInNyT25seSIsImFzdUhlYWRlckdyaWQiLCJBU1VJbWFnZSIsImFsdCIsInNyYyIsIkFTVUxpbmsiLCJBU1VMb2dpbiIsImxvZ2dlZEluIiwiYXN1TG9naW4iLCJhc3VMb2dpbkxpbmsiLCJsb2dpblVybCIsImxvZ291dFVybCIsIkFTVUxvZ28iLCJhc3VMb2dvIiwiaHJlZiIsInRhcmdldCIsIkFTVU5hdiIsIm5hdk1lbnUiLCJyZW5kZXJOYXYiLCJuYXYiLCJpIiwibGVuZ3RoIiwiY2hpbGQiLCJ0eXBlIiwicHVzaCIsImFzdU5hdldyYXBwZXIiLCJhc3VOYXYiLCJuYXZMaXN0IiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3VidHJlZSIsIkFTVW5hdkRlZmF1bHRUcmVlIiwiQVNVTmF2SXRlbSIsImNsYXNzZXMiLCJhc3VOYXZJdGVtIiwidGV4dCIsIkFTVVNlYXJjaEJveCIsImRydXBhbCIsImFzdVNlYXJjaCIsImFzdVNlYXJjaEJveCIsImFzdVNlYXJjaEJ1dHRvbiIsIkFTVVNpdGVOYW1lIiwiYXN1U2l0ZU5hbWUiLCJhc3VTaXRlTmFtZUxpbmsiLCJwYXJlbnRfb3JnX3VybCIsImFzdVNpdGVOYW1lUGFyZW50T3JnIiwicGFyZW50X29yZyIsInNpdGVfdXJsIiwiYXN1U2l0ZU5hbWVUaXRsZSIsInRpdGxlIiwiaW5pdEFTVUhlYWRlciIsImFzdV9oZWFkZXIiLCJlbGVtZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJjb21wb25lbnRMaXN0IiwiZG9tSWQiLCJmb290ZXIiLCJyZW5kZXJBU1VDb21wb25lbnQiLCJyZXEiLCJyZXMiLCJjb21wb25lbnQiLCJBU1VDb21wb25lbnQiLCJodG1sIiwiUmVhY3RET01TZXJ2ZXIiLCJyZW5kZXJUb1N0cmluZyIsImlkIiwiYm9keSIsInJlbmRlclNTUkZ1bGxQYWdlIiwicHJvZCIsImNvbmZpZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZW5kIiwic2VuZEFTVUhlYWRlciIsInNlbmRBU1VGb290ZXIiLCJJdGVtIiwiRnVsbFBhZ2VTU1IiLCJGdWxsUGFnZVNTUlByb2QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBLElBQU1BLDhCQUE4QjtBQUNsQyxjQUFZLENBQ1Y7QUFDRSxhQUFRLE1BRFY7QUFFRSxZQUFPO0FBRlQsR0FEVSxFQUtWO0FBQ0UsYUFBUSxpQkFEVjtBQUVFLFlBQU8scUJBRlQ7QUFHRSxnQkFBWSxDQUNWO0FBQ0UsZUFB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QSxDQUFiOztBQU1BLElBQU1VLGNBQWUsU0FBZkEsV0FBZTtBQUFBLFFBQUdoRyxNQUFILFNBQUdBLE1BQUg7QUFBQSxRQUFXNEUsTUFBWCxTQUFXQSxNQUFYO0FBQUEsUUFBbUJSLEtBQW5CLFNBQW1CQSxLQUFuQjtBQUFBLFFBQTBCbkUsS0FBMUIsU0FBMEJBLEtBQTFCO0FBQUEsd0VBSU5tRSxLQUpNLHdKQVlScEUsTUFaUSwwV0FtQktDLEtBbkJMLDhNQXdCWDJFLE1BeEJXO0FBQUEsQ0FBckI7O0FBNkJBLElBQU1xQixrQkFBbUIsU0FBbkJBLGVBQW1CO0FBQUEsUUFBR2pHLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFFBQVc0RSxNQUFYLFNBQVdBLE1BQVg7QUFBQSxRQUFtQlIsS0FBbkIsU0FBbUJBLEtBQW5CO0FBQUEsUUFBMEJuRSxLQUExQixTQUEwQkEsS0FBMUI7QUFBQSx3RUFJVm1FLEtBSlUsd0pBWVpwRSxNQVpZLG1jQW9CQ0MsS0FwQkQsOE1BeUJmMkUsTUF6QmU7QUFBQSxDQUF6Qjs7UUE4QlFtQixJLEdBQUFBLEk7UUFBTUMsVyxHQUFBQSxXO1FBQWFDLGUsR0FBQUEsZTs7Ozs7Ozs7Ozs7QUNwRTNCLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InNzci9zc3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoZ2xvYmFsLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zc3IvU1NSLmpzXCIpO1xuIiwiY29uc3QgQVNVQnJhbmRIZWFkZXJFeGFtcGxlQ29uZmlnID0ge1xuICBcInNpdGVNZW51XCI6IFtcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJIb21lXCIsXG4gICAgICBcInBhdGhcIjpcImh0dHA6Ly93d3cuYXN1LmVkdS9hYnNvbHV0ZV9wYXRoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIkRlZ3JlZSBQcm9ncmFtc1wiLFxuICAgICAgXCJwYXRoXCI6XCIvYWJzb2x1dGVfcGF0aC9wYWdlXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjpcIkFkbWlzc2lvbnNcIixcbiAgICAgICAgICBcInBhdGhcIjpcIi8/dXJsPXZhcmlhYmxlXCIsXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGl0bGVcIjpcIlN0dWRlbnQgTGlmZVwiLFxuICAgICAgICAgICAgICBcInBhdGhcIjpcIi8jaGFzaFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0aXRsZVwiOlwiUm9zc1wiLFxuICAgICAgICAgIFwicGF0aFwiOlwiaHR0cHM6Ly93d3cuYXN1LmVkdS9cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdLFxuICBcImxvZ29cIjoge1xuICAgIFwic3JjXCI6IFwiaHR0cHM6Ly93d3cuYXN1LmVkdS9hc3V0aGVtZXMvNC42L2Fzc2V0cy9mdWxsX2xvZ28ucG5nXCIsXG4gICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cuYXN1LmVkdS9cIixcbiAgICBcImFsdFwiOiBcIkFTVVwiXG4gIH0sXG4gIFwic2l0ZVRpdGxlXCI6IHtcbiAgICBcInRpdGxlXCI6IFwiQVNVIEN1c3RvbSBTaXRlIFRpdGxlXCIsXG4gICAgXCJwYXJlbnRfb3JnXCI6IFwiQVNVIEN1c3RvbSBQYXJlbnQgT3JnXCIsXG4gICAgXCJzaXRlX3VybFwiOiBcImh0dHBzOi8vYXN1LmVkdVwiLFxuICAgIFwicGFyZW50X29yZ191cmxcIjogXCJodHRwczovL3V0by5hc3UuZWR1XCJcbiAgfSxcbiAgXCJsb2dpblwiOiB7XG4gICAgXCJsb2dpblVybFwiOiBcImh0dHBzOi8vd2VibG9naW4uYXN1LmVkdS9jZ2ktYmluL2xvZ2luXCIsXG4gICAgXCJsb2dvdXRVcmxcIjogXCIvY2FzL2xvZ291dFwiLFxuICAgIFwibG9nZ2VkSW5cIjogZmFsc2VcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQVNVQnJhbmRIZWFkZXJFeGFtcGxlQ29uZmlnOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VCdXR0b24gZnJvbSAnLi9BU1VCdXR0b24nO1xuaW1wb3J0IEFTVUhlYWRlciBmcm9tICcuL0FTVUhlYWRlcic7XG5pbXBvcnQgQVNVU2VhcmNoQm94IGZyb20gXCIuL0FTVVNlYXJjaEJveFwiO1xuaW1wb3J0IEFTVU5hdiBmcm9tIFwiLi9BU1VOYXZcIjtcbmltcG9ydCBBU1VTaXRlTmFtZSBmcm9tIFwiLi9BU1VTaXRlTmFtZVwiO1xuaW1wb3J0IEFTVUxvZ2luIGZyb20gXCIuL0FTVUxvZ2luXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9BU1UuY3NzJztcbmltcG9ydCBuYXZ0cmVlIGZyb20gJy4vQVNVTmF2RGVmYXVsdFRyZWUnO1xuXG5jbGFzcyBBU1VCcmFuZEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtyZW5kZXJDbGllbnQ6IGZhbHNlfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMucHJvcHMuaGVhZGVyT2JqO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QVNVSGVhZGVyIGxvZ289e2hlYWRlci5sb2dvfSBjbGFzc05hbWU9e3N0eWxlcy5hc3VIZWFkZXJ9PlxuICAgICAgICAgICAgICAgIDxBU1VOYXYgbmF2PXtuYXZ0cmVlfT5cbiAgICAgICAgICAgICAgICAgICAgPEFTVUxvZ2luIHsuLi5oZWFkZXIubG9naW59Lz5cbiAgICAgICAgICAgICAgICAgICAgPEFTVVNlYXJjaEJveC8+XG4gICAgICAgICAgICAgICAgPC9BU1VOYXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlbmRlckNsaWVudCAmJiBoZWFkZXIuc2l0ZVRpdGxlICYmXG4gICAgICAgICAgICAgICAgICAgIDxBU1VTaXRlTmFtZSBzaXRlVGl0bGU9e2hlYWRlci5zaXRlVGl0bGV9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0FTVUhlYWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlckNsaWVudDogdHJ1ZSB9KTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBU1VCcmFuZEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9BU1UuY3NzXCJcblxuY29uc3QgQVNVQnV0dG9uID0gcHJvcHMgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiB7Li4ucHJvcHN9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQVNVQnV0dG9uOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQVNVRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaW5ub3ZhdGlvbi1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW5ub3ZhdGlvbi1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5vdmF0aW9uLXRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5vdmF0aW9uLXN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L3JhbmtpbmdzXCI+PHNwYW4+QVNVIGlzICMxIGluIHRoZSBVLlMuIGZvciBJbm5vdmF0aW9uPC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5vdmF0aW9uLWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L3JhbmtpbmdzXCI+PGltZyBzcmM9XCIvL3d3dy1kZXYuYXN1LmVkdS9hc3V0aGVtZXMvNC42L2Fzc2V0cy9iZXN0LWNvbGxlZ2UtMjAxOC5wbmdcIiBhbHQ9XCJCZXN0IENvbGxlZ2VzIFUuUy4gTmV3cyBNb3N0IElubm92YXRpdmUgMjAxOFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9jb3B5cmlnaHQvXCI+Q29weXJpZ2h0IGFuZCBUcmFkZW1hcms8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9hY2Nlc3NpYmlsaXR5L1wiPkFjY2Vzc2liaWxpdHk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9wcml2YWN5L1wiPlByaXZhY3k8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS90b3UvXCI+VGVybXMgb2YgVXNlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvYXN1am9ic1wiPkpvYnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9lbWVyZ2VuY3kvXCI+RW1lcmdlbmN5PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm8tYm9yZGVyXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvY29udGFjdGFzdS9cIj5Db250YWN0IEFTVTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFTVUZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VMb2dvIGZyb20gXCIuL0FTVUxvZ29cIjtcbmltcG9ydCBBU1VMaW5rIGZyb20gXCIuL0FTVUxpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FTVS5jc3MnO1xuXG5jbGFzcyBBU1VIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGhlYWRlciB7Li4uKHRoaXMucHJvcHMuY2xhc3NOYW1lID8ge2NsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWV9IDoge30pfT5cbiAgICAgICAgICAgICAgICA8QVNVTGluayBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9hY2Nlc3NpYmlsaXR5L1wiIGNsYXNzTmFtZT17c3R5bGVzLnNyT25seX0+UmVwb3J0IGFuIGFjY2Vzc2liaWxpdHkgcHJvYmxlbTwvQVNVTGluaz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFzdUhlYWRlckdyaWR9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2dvID8gPEFTVUxvZ28gey4uLnRoaXMucHJvcHMubG9nb30gLz4gOiAnJ31cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFTVUhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9BU1UuY3NzXCJcblxuY29uc3QgQVNVSW1hZ2UgPSBwcm9wcyA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aW1nIGFsdD17cHJvcHMuYWx0fSBzcmM9e3Byb3BzLnNyY30gLz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQVNVSW1hZ2U7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFTVUxpbmsgPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgey4uLnByb3BzfT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9hPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBU1VMaW5rOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FTVS5jc3MnO1xuXG5jbGFzcyBBU1VMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9nZ2VkSW46ICghIXByb3BzLmxvZ2dlZEluKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFzdUxvZ2lufT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3JPbmx5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gSW4gLyBTaWduIE91dFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnN0YXRlLmxvZ2dlZEluID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmFzdUxvZ2luTGlua30gaHJlZj17dGhpcy5wcm9wcy5sb2dpblVybH0gdGFyZ2V0PVwiX3RvcFwiPlNpZ24gSW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmFzdUxvZ2luTGlua30gaHJlZj17dGhpcy5wcm9wcy5sb2dvdXRVcmx9IHRhcmdldD1cIl90b3BcIj5TaWduIE91dDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQVNVTG9naW47IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFTVUltYWdlIGZyb20gXCIuL0FTVUltYWdlXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9BU1UuY3NzXCJcblxuY29uc3QgQVNVTG9nbyA9IHByb3BzID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXN1TG9nb30+XG4gICAgICAgICAgICA8YSBocmVmPXtwcm9wcy5ocmVmfSB0YXJnZXQ9e3Byb3BzLnRhcmdldH0+XG4gICAgICAgICAgICAgICAgPEFTVUltYWdlIGFsdD17cHJvcHMuYWx0fSBzcmM9e3Byb3BzLnNyY30gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFTVUxvZ287IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFTVU5hdkl0ZW0gZnJvbSAnLi9BU1VOYXZJdGVtJztcbmltcG9ydCBBU1VMb2dpbiBmcm9tICcuL0FTVUxvZ2luJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FTVS5jc3MnO1xuXG5jb25zdCBBU1VOYXYgPSBwcm9wcyA9PiB7XG5cbiAgICBjb25zdCBuYXZNZW51ID0gcmVuZGVyTmF2KHByb3BzLm5hdik7XG4gICAgbGV0IGxvZ2luID0gbnVsbDtcbiAgICBsZXQgY2hpbGRyZW4gPSBbXTtcblxuICAgIC8vIGV4dHJhY3QgdGhlIGxvZ2luIGlmIHBhc3NlZCBhcyBhIGNoaWxkLiBUaGUgbG9naW4gbGluayB3aWxsXG4gICAgLy8gYmUgcmVuZGVyZWQgaW5saW5lIHdpdGggdGhlIG5hdm1lbnUgcGVyIHRoZSBicmFuZCBzdGFuZGFyZHNcbiAgICBpZiAocHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBwcm9wcy5jaGlsZHJlbltpXTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IEFTVUxvZ2luKSB7XG4gICAgICAgICAgICAgICAgbG9naW4gPSBjaGlsZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFzdU5hdldyYXBwZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hc3VOYXZ9IHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cIkFTVVwiPlxuICAgICAgICAgICAgICAgIHtuYXZNZW51fVxuICAgICAgICAgICAgICAgIHtsb2dpbiAhPT0gbnVsbCA/IGxvZ2luIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtjaGlsZHJlbi5sZW5ndGggPiAwID8gY2hpbGRyZW4gOiAnJ31cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmNvbnN0IHJlbmRlck5hdiA9IG5hdiA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlzdH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmF2Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBU1VOYXZJdGVtIHsuLi5pdGVtfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0uc3VidHJlZSA/IHJlbmRlck5hdihpdGVtLnN1YnRyZWUpOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BU1VOYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFTVU5hdjsiLCJjb25zdCBBU1VuYXZEZWZhdWx0VHJlZSA9IFtcbiAge1xuICAgIFwidGl0bGVcIjpcIlwiLFxuICAgIFwidGV4dFwiOlwiQVNVIEhvbWVcIixcbiAgICBcImhyZWZcIjpcImh0dHBzOi8vd3d3LmFzdS5lZHUvXCIsXG4gICAgXCJjbGFzc2VzXCI6IFwicGFyZW50XCIsXG4gICAgXCJzdWJ0cmVlXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjbGFzc2VzXCI6IFwiZmlyc3RcIixcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cuYXN1LmVkdS8/ZmVhdHVyZT1uZXdzZXZlbnRzXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiTmV3cyBhbmQgRXZlbnRzXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIk5ld3MvRXZlbnRzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LmFzdS5lZHUvP2ZlYXR1cmU9YWNhZGVtaWNzXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiQWNhZGVtaWNzXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkFjYWRlbWljc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPXJlc2VhcmNoXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiUmVzZWFyY2hcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiUmVzZWFyY2hcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cuYXN1LmVkdS8/ZmVhdHVyZT1hdGhsZXRpY3NcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJBdGhsZXRpY3NcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiQXRobGV0aWNzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LmFzdS5lZHUvP2ZlYXR1cmU9YWx1bW5pXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiQWx1bW5pXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkFsdW1uaVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPWdpdmluZ1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdpdmluZ1wiLFxuICAgICAgICBcInRleHRcIjogXCJHaXZpbmdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cuYXN1LmVkdS8/ZmVhdHVyZT1wcmVzaWRlbnRcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJQcmVzaWRlbnRcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiUHJlc2lkZW50XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LmFzdS5lZHUvYWJvdXRcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJBYm91dCBBU1VcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiQWJvdXQgQVNVXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiXCIsXG4gICAgXCJ0ZXh0XCI6IFwiTXkgQVNVXCIsXG4gICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9teS5hc3UuZWR1L1wiLFxuICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiXG4gIH0sXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiXCIsXG4gICAgXCJjbGFzc2VzXCI6IFwicGFyZW50XCIsXG4gICAgXCJ0ZXh0XCI6IFwiTWFwIGFuZCBMb2NhdGlvbnNcIixcbiAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5hc3UuZWR1L21hcC9cIixcbiAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICBcInN1YnRyZWVcIjogW1xuICAgICAge1xuICAgICAgICBcImNsYXNzZXNcIjogXCJmaXJzdFwiLFxuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2FydHNhbmRzY2llbmNlcy5hc3UuZWR1L1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFydHMgYW5kIFNjaWVuY2VzIHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiQXJ0cyBhbmQgU2NpZW5jZXNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93cGNhcmV5LmFzdS5lZHUvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiVy4gUC4gQ2FyZXkgU2Nob29sIG9mIEJ1c2luZXNzIFdlYiBhbmQgTW9ycmlzb24gU2Nob29sIG9mIEFncmlidXNpbmVzcyB3ZWJzaXRlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkJ1c2luZXNzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vaGVyYmVyZ2VyaW5zdGl0dXRlLmFzdS5lZHVcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJIZXJiZXJnZXIgSW5zdGl0dXRlIGZvciBEZXNpZ24gYW5kIHRoZSBBcnRzIHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRGVzaWduIGFuZCB0aGUgQXJ0c1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2VkdWNhdGlvbi5hc3UuZWR1L1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1hcnkgTG91IEZ1bHRvbiBUZWFjaGVycyBDb2xsZWdlIHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRWR1Y2F0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZW5naW5lZXJpbmcuYXN1LmVkdS9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJFbmdpbmVlcmluZyB3ZWJzaXRlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkVuZ2luZWVyaW5nXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vc2Zpcy5hc3UuZWR1L1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZ1dHVyZSBvZiBJbm5vdmF0aW9uIGluIFNvY2lldHkgd2Vic2l0ZVwiLFxuICAgICAgICBcInRleHRcIjogXCJGdXR1cmUgb2YgSW5ub3ZhdGlvbiBpbiBTb2NpZXR5XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ3JhZHVhdGUuYXN1LmVkdVwiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdyYWR1YXRlIENvbGxlZ2Ugd2Vic2l0ZVwiLFxuICAgICAgICBcInRleHRcIjogXCJHcmFkdWF0ZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2Nocy5hc3UuZWR1L1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhlYWx0aCBTb2x1dGlvbnMgd2Vic2l0ZVwiLFxuICAgICAgICBcInRleHRcIjogXCJIZWFsdGggU29sdXRpb25zXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vaG9ub3JzLmFzdS5lZHUvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiQmFycmV0dCwgVGhlIEhvbm9ycyBDb2xsZWdlIHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiSG9ub3JzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vY3JvbmtpdGUuYXN1LmVkdVwiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldhbHRlciBDcm9ua2l0ZSBTY2hvb2wgb2YgSm91cm5hbGlzbSBhbmQgTWFzcyBDb21tdW5pY2F0aW9uIHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiSm91cm5hbGlzbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5sYXcuYXN1LmVkdS9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJTYW5kcmEgRGF5IE8nIENvbm5vciBDb2xsZWdlIG9mIExhdyB3ZWJzaXRlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkxhd1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL251cnNpbmdhbmRoZWFsdGguYXN1LmVkdS9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJDb2xsZWdlIG9mIE51cnNpbmcgYW5kIEhlYWx0aCBJbm5vdmF0aW9uIHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiTnVyc2luZyBhbmQgSGVhbHRoIElubm92YXRpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJocmVmXCI6IFwiLy9jb3BwLmFzdS5lZHVcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJDb2xsZWdlIG9mIFB1YmxpYyBQcm9ncmFtcyB3ZWJzaXRlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIlB1YmxpYyBTZXJ2aWNlIGFuZCBDb21tdW5pdHkgU29sdXRpb25zXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vc2Nob29sb2ZzdXN0YWluYWJpbGl0eS5hc3UuZWR1XCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiU2Nob29sIG9mIFN1c3RhaW5hYmlsaXR5IHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiU3VzdGFpbmFiaWxpdHlcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJocmVmXCI6IFwiLy91Yy5hc3UuZWR1L1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVuaXZlcnNpdHkgQ29sbGVnZSB3ZWJzaXRlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIlVuaXZlcnNpdHkgQ29sbGVnZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy50aHVuZGVyYmlyZC5lZHUvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiVGh1bmRlcmJpcmQgU2Nob29sIG9mIEdsb2JhbCBNYW5hZ2VtZW50IHdlYnNpdGVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiVGh1bmRlcmJpcmQgU2Nob29sIG9mIEdsb2JhbCBNYW5hZ2VtZW50XCJcbiAgICAgIH1cbiAgICBdXG5cbiAgfSxcbiAge1xuICAgIFwidGl0bGVcIjogXCJcIixcbiAgICBcImNsYXNzZXNcIjogXCJwYXJlbnRcIixcbiAgICBcInRleHRcIjogXCJNYXAgYW5kIExvY2F0aW9uc1wiLFxuICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LmFzdS5lZHUvbWFwL1wiLFxuICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgIFwic3VidHJlZVwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY2xhc3Nlc1wiOiBcImJvcmRlciBmaXJzdFwiLFxuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5hc3UuZWR1L21hcC9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiTWFwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vY2FtcHVzLmFzdS5lZHUvdGVtcGUvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiVGVtcGUgY2FtcHVzXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIlRlbXBlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vY2FtcHVzLmFzdS5lZHUvd2VzdC9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJXZXN0IGNhbXB1c1wiLFxuICAgICAgICBcInRleHRcIjogXCJXZXN0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vY2FtcHVzLmFzdS5lZHUvcG9seXRlY2huaWMvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiUG9seXRlY2huaWMgY2FtcHVzXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIlBvbHl0ZWNobmljXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vY2FtcHVzLmFzdS5lZHUvZG93bnRvd24vXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiRG93bnRvd24gUGhvZW5peCBjYW1wdXNcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRG93bnRvd24gUGhvZW5peFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2FzdW9ubGluZS5hc3UuZWR1L1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9ubGluZSBhbmQgRXh0ZW5kZWQgY2FtcHVzXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIk9ubGluZSBhbmQgRXh0ZW5kZWRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9oYXZhc3UuYXN1LmVkdS9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiTGFrZSBIYXZhc3VcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cudGh1bmRlcmJpcmQuZWR1L2Fib3V0LXRodW5kZXJiaXJkL2xvY2F0aW9ucy9waG9lbml4LWFyaXpvbmFcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwiY2xhc3Nlc1wiOiBcImJvcmRlclwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIlRodW5kZXJiaXJkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vc2t5c29uZy5hc3UuZWR1L1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl90b3BcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLFxuICAgICAgICBcInRleHRcIjogXCJTa3lzb25nXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vYXN1cmVzZWFyY2hwYXJrLmNvbS9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiUmVzZWFyY2ggUGFya1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3dhc2hpbmd0b25jZW50ZXIuYXN1LmVkdS9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfdG9wXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiV2FzaGluZ3RvbiBELkMuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3BjYXJleS5hc3UuZWR1L21iYS9jaGluYS1wcm9ncmFtL2VuZ2xpc2gvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkNoaW5hXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiRGlyZWN0b3J5LCBJbmRleCBhbmQgb3RoZXIgaW5mb1wiLFxuICAgIFwidGV4dFwiOiBcIkRpcmVjdG9yeVwiLFxuICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vaXNlYXJjaC5hc3UuZWR1L1wiLFxuICAgIFwidGFyZ2V0XCI6IFwiX3RvcFwiXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IEFTVW5hdkRlZmF1bHRUcmVlOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VMaW5rIGZyb20gJy4vQVNVTGluayc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9BU1UuY3NzJztcblxuY29uc3QgQVNVTmF2SXRlbSA9IHByb3BzID0+IHtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBzdHlsZXMuYXN1TmF2SXRlbSArIChwcm9wcy5jbGFzc2VzID8gJyAnICsgIHByb3BzLmNsYXNzZXMgOiAnJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICAgIDxBU1VMaW5rIGhyZWY9e3Byb3BzLmhyZWZ9IHRhcmdldD17cHJvcHMudGFyZ2V0fT57cHJvcHMudGV4dH08L0FTVUxpbms+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvbGk+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFTVU5hdkl0ZW07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQVNVLmNzcydcblxuY2xhc3MgQVNVU2VhcmNoQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRydXBhbCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFzdVNlYXJjaH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zck9ubHl9PlNlYXJjaDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiZ29vZ2xlL2FwcGxpYW5jZS9ibG9jay9mb3JtXCIgbWV0aG9kPVwicG9zdFwiIF9scGNoZWNrZWQ9XCIxXCI+PGxhYmVsIGh0bWxGb3I9XCJtYXN1X3NlYXJjaF9ib3hcIj5TZWFyY2g8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzZWFyY2hfaGVhZGVyXCIgY2xhc3NOYW1lPXtzdHlsZXMuYXN1U2VhcmNoQm94fSBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmFzdVNlYXJjaEJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXN1U2VhcmNofT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3JPbmx5fT5TZWFyY2g8L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtIHRhcmdldD1cIl90b3BcIiBhY3Rpb249XCJodHRwczovL3NlYXJjaC5hc3UuZWR1L3NlYXJjaFwiIG1ldGhvZD1cImdldFwiIG5hbWU9XCJnc1wiIHJvbGU9XCJzZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLnNyT25seX0gaHRtbEZvcj1cIm1hc3Vfc2VhcmNoX2JveFwiPlNlYXJjaDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2l0ZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cImRlZmF1bHRfY29sbGVjdGlvblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzb3J0XCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiZGF0ZTpEOkw6ZDFcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwib3V0cHV0XCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwieG1sX25vX2R0ZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwcm94eXN0eWxlc2hlZXRcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJhc3VfZnJvbnRlbmRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaWVcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJVVEYtOFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJvZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIlVURi04XCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImNsaWVudFwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cImFzdV9mcm9udGVuZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmFzdVNlYXJjaEJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInFcIiBjbGFzc05hbWU9e3N0eWxlcy5hc3VTZWFyY2hCb3h9IGlkPVwibWFzdV9zZWFyY2hfYm94XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBU1VTZWFyY2hCb3g7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFTVUxpbmsgZnJvbSBcIi4vQVNVTGlua1wiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQVNVLmNzc1wiXG5cbmNvbnN0IEFTVVNpdGVOYW1lID0gcHJvcHMgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hc3VTaXRlTmFtZX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxBU1VMaW5rIGNsYXNzTmFtZT17c3R5bGVzLmFzdVNpdGVOYW1lTGlua30gaHJlZj17cHJvcHMuc2l0ZVRpdGxlLnBhcmVudF9vcmdfdXJsfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXN1U2l0ZU5hbWVQYXJlbnRPcmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNpdGVUaXRsZS5wYXJlbnRfb3JnfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9BU1VMaW5rPlxuICAgICAgICAgICAgICAgIDxBU1VMaW5rIGNsYXNzTmFtZT17c3R5bGVzLmFzdVNpdGVOYW1lTGlua30gdGl0bGU9XCJIb21lXCIgcmVsPVwiaG9tZVwiIGhyZWY9e3Byb3BzLnNpdGVUaXRsZS5zaXRlX3VybH0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFzdVNpdGVOYW1lVGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNpdGVUaXRsZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvQVNVTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQVNVU2l0ZU5hbWU7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGN0ZXN0YW1hIG9uIDMvMjEvMTguXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgUmVhY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VOYXYgZnJvbSAnLi9jb21wb25lbnRzL0FTVU5hdidcbmltcG9ydCBBU1VGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0FTVUZvb3RlcidcbmltcG9ydCBBU1VCcmFuZEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvQVNVQnJhbmRIZWFkZXInO1xuaW1wb3J0IEFTVUhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvQVNVSGVhZGVyJztcbmltcG9ydCBBU1VMaW5rIGZyb20gJy4vY29tcG9uZW50cy9BU1VMaW5rJztcbmltcG9ydCBBU1VTZWFyY2hCb3ggZnJvbSAnLi9jb21wb25lbnRzL0FTVVNlYXJjaEJveCc7XG5pbXBvcnQgQVNVTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0FTVUxvZ2luJztcblxuY29uc3QgaW5pdEFTVUhlYWRlciA9IChhc3VfaGVhZGVyLCBlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudCA/IFJlYWN0RE9NLnJlbmRlcig8QVNVSGVhZGVyQ29udGFpbmVyIGhlYWRlck9iaj17YXN1X2hlYWRlcn0gLz4sIGVsZW1lbnQpIDogZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0QVNVSGVhZGVyLFxuICAgIEFTVUZvb3RlcixcbiAgICBBU1VIZWFkZXIsXG4gICAgQVNVQnJhbmRIZWFkZXIsXG4gICAgQVNVTGluayxcbiAgICBBU1VMb2dpbixcbiAgICBBU1VOYXYsXG4gICAgQVNVU2VhcmNoQm94XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFzdVNpdGVOYW1lXCI6IFwiQVNVX19hc3VTaXRlTmFtZV9fXzNnbmNUXCIsXG5cdFwiYXN1U2l0ZU5hbWVMaW5rXCI6IFwiQVNVX19hc3VTaXRlTmFtZUxpbmtfX19GMklOdVwiLFxuXHRcImFzdVNpdGVOYW1lUGFyZW50T3JnXCI6IFwiQVNVX19hc3VTaXRlTmFtZVBhcmVudE9yZ19fXzFiRVg0XCIsXG5cdFwiYXN1U2l0ZU5hbWVUaXRsZVwiOiBcIkFTVV9fYXN1U2l0ZU5hbWVUaXRsZV9fXzNUVnN4XCIsXG5cdFwiYXN1X21vYmlsZV9idXR0b25cIjogXCJBU1VfX2FzdV9tb2JpbGVfYnV0dG9uX19fM0JwMUFcIixcblx0XCJhc3VfcHJpbnRfbG9nb1wiOiBcIkFTVV9fYXN1X3ByaW50X2xvZ29fX185bU51alwiLFxuXHRcImFzdU5hdldyYXBwZXJcIjogXCJBU1VfX2FzdU5hdldyYXBwZXJfX19EbmY4R1wiLFxuXHRcImFzdU5hdlwiOiBcIkFTVV9fYXN1TmF2X19fVWhxSkNcIixcblx0XCJuYXZMaXN0XCI6IFwiQVNVX19uYXZMaXN0X19fM1FDdjBcIixcblx0XCJhc3VOYXZJdGVtXCI6IFwiQVNVX19hc3VOYXZJdGVtX19fM1V6bmRcIixcblx0XCJhc3VfaGVhZF9ob3ZlclwiOiBcIkFTVV9fYXN1X2hlYWRfaG92ZXJfX19SSGJzS1wiLFxuXHRcInBhcmVudFwiOiBcIkFTVV9fcGFyZW50X19fM2t5QjFcIixcblx0XCJib3JkZXJcIjogXCJBU1VfX2JvcmRlcl9fXzJoakZwXCIsXG5cdFwiYXN1X3RvdWNoXCI6IFwiQVNVX19hc3VfdG91Y2hfX18zZWhyR1wiLFxuXHRcImFzdUxvZ29cIjogXCJBU1VfX2FzdUxvZ29fX19abmQ4N1wiLFxuXHRcIm1haW5fc2VhcmNoXCI6IFwiQVNVX19tYWluX3NlYXJjaF9fXzNfQi1iXCIsXG5cdFwiYXN1SGVhZGVyXCI6IFwiQVNVX19hc3VIZWFkZXJfX18xZDhvM1wiLFxuXHRcImFzdUhlYWRlckdyaWRcIjogXCJBU1VfX2FzdUhlYWRlckdyaWRfX19haEY0bFwiLFxuXHRcImNsb3NlZFwiOiBcIkFTVV9fY2xvc2VkX19fMk9xMGZcIixcblx0XCJhc3VfbW9iaWxlX2hkclwiOiBcIkFTVV9fYXN1X21vYmlsZV9oZHJfX18zbnFVNlwiLFxuXHRcImFzdUxvZ2luXCI6IFwiQVNVX19hc3VMb2dpbl9fXzFoanJuXCIsXG5cdFwiZW5kXCI6IFwiQVNVX19lbmRfX18zNV9GNFwiLFxuXHRcImFzdUxvZ2luTGlua1wiOiBcIkFTVV9fYXN1TG9naW5MaW5rX19fMkdPVGJcIixcblx0XCJzck9ubHlcIjogXCJBU1VfX3NyT25seV9fX0syLVFDXCIsXG5cdFwiYXN1U2VhcmNoXCI6IFwiQVNVX19hc3VTZWFyY2hfX18yNElWZFwiLFxuXHRcImFzdVNlYXJjaEJveFwiOiBcIkFTVV9fYXN1U2VhcmNoQm94X19fMWprWEhcIixcblx0XCJhc3VTZWFyY2hCdXR0b25cIjogXCJBU1VfX2FzdVNlYXJjaEJ1dHRvbl9fXzFVMmdpXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTVNlcnZlciBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7QVNVQnJhbmRIZWFkZXIsIEFTVUZvb3Rlcn0gZnJvbSAnLi4vY29yZS9jb3JlLmpzJztcbmltcG9ydCB7SXRlbSwgRnVsbFBhZ2VTU1IsIEZ1bGxQYWdlU1NSUHJvZH0gZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlJztcbmltcG9ydCBBU1VCcmFuZEhlYWRlckV4YW1wbGVDb25maWcgZnJvbSAnLi4vLi4vZXhhbXBsZXMvQVNVQnJhbmRIZWFkZXJFeGFtcGxlQ29uZmlnJztcblxuY29uc3QgY29tcG9uZW50TGlzdCA9IHtcbiAgICBoZWFkZXI6IHtcbiAgICAgICAgdHlwZTogQVNVQnJhbmRIZWFkZXIsXG4gICAgICAgIGRvbUlkOiAnYXN1LWhlYWRlci1jb250YWluZXInLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaGVhZGVyT2JqOiBBU1VCcmFuZEhlYWRlckV4YW1wbGVDb25maWdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICAgIHR5cGU6IEFTVUZvb3RlcixcbiAgICAgICAgZG9tSWQ6ICdhc3UtZm9vdGVyLWNvbnRhaW5lcicsXG4gICAgICAgIHByb3BzOiB7fVxuICAgIH1cbn07XG5cbmNvbnN0IHJlbmRlckFTVUNvbXBvbmVudCA9ICAocmVxLCByZXMsIGNvbXBvbmVudCkgPT4ge1xuXG4gICAgY29uc3QgQVNVQ29tcG9uZW50ID0gY29tcG9uZW50LnR5cGU7XG5cbiAgICAvLyBSZW5kZXJzIGNvbXBvbmVudCB0byBzdHJpbmdcbiAgICBjb25zdCBodG1sID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoPEFTVUNvbXBvbmVudCB7Li4uY29tcG9uZW50LnByb3BzfSAvPik7XG5cbiAgICByZXR1cm4gSXRlbSh7XG4gICAgICAgIGlkOiBjb21wb25lbnQuZG9tSWQsXG4gICAgICAgIGJvZHk6IGh0bWxcbiAgICB9KTtcbn1cblxuY29uc3QgcmVuZGVyU1NSRnVsbFBhZ2UgPSAocmVxLCByZXMsIHByb2QpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSByZW5kZXJBU1VDb21wb25lbnQocmVxLCByZXMsIGNvbXBvbmVudExpc3QuaGVhZGVyKTtcbiAgICBjb25zdCBmb290ZXIgPSByZW5kZXJBU1VDb21wb25lbnQocmVxLCByZXMsIGNvbXBvbmVudExpc3QuZm9vdGVyKTtcbiAgICBjb25zdCBjb25maWcgPSBKU09OLnN0cmluZ2lmeShBU1VCcmFuZEhlYWRlckV4YW1wbGVDb25maWcpO1xuICAgIHByb2QgPSBwcm9kID8gdHJ1ZTogZmFsc2U7XG5cbiAgICBpZiAocHJvZCkge1xuICAgICAgICByZXMuc2VuZChGdWxsUGFnZVNTUlByb2Qoe1xuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgICAgICAgICBmb290ZXI6IGZvb3RlcixcbiAgICAgICAgICAgIHRpdGxlOiAnVGVzdCBQYWdlJyxcbiAgICAgICAgICAgIHByb3BzOiBjb25maWdcbiAgICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zZW5kKEZ1bGxQYWdlU1NSKHtcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyLFxuICAgICAgICAgICAgZm9vdGVyOiBmb290ZXIsXG4gICAgICAgICAgICB0aXRsZTogJ1Rlc3QgUGFnZScsXG4gICAgICAgICAgICBwcm9wczogY29uZmlnXG4gICAgICAgIH0pKTtcbiAgICB9XG59O1xuXG5jb25zdCBzZW5kQVNVSGVhZGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgaHRtbCA9IHJlbmRlckFTVUNvbXBvbmVudChyZXEsIHJlcywgY29tcG9uZW50TGlzdC5oZWFkZXIpO1xuICAgIHJlcy5zZW5kKGh0bWwpO1xufTtcblxuY29uc3Qgc2VuZEFTVUZvb3RlciA9IChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGh0bWwgPSByZW5kZXJBU1VDb21wb25lbnQocmVxLCByZXMsIGNvbXBvbmVudExpc3QuZm9vdGVyKTtcbiAgICByZXMuc2VuZChodG1sKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHJlbmRlckFTVUNvbXBvbmVudCxcbiAgICBzZW5kQVNVSGVhZGVyLFxuICAgIHNlbmRBU1VGb290ZXIsXG4gICAgcmVuZGVyU1NSRnVsbFBhZ2Vcbn07IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGN0ZXN0YW1hIG9uIDQvMjUvMTguXG4gKi9cbmNvbnN0IEl0ZW0gPSAoeyBpZCwgYm9keSB9KSA9PiAoYFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgaWQ9JHtpZH0+JHtib2R5fTwvZGl2PlxuICAgIDwvZGl2PiAgXG5gKTtcblxuY29uc3QgRnVsbFBhZ2VTU1IgPSAgKHsgaGVhZGVyLCBmb290ZXIsIHRpdGxlLCBwcm9wc30pID0+IChgXG4gIDwhRE9DVFlMRSBodG1sPlxuICA8aHRtbD5cbiAgICA8aGVhZD5cbiAgICAgIDx0aXRsZT4ke3RpdGxlfTwvdGl0bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgICNtYWluLWNvbnRlbnQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWQ+XG4gICAgPGJvZHk+XG4gICAgICA8ZGl2PiR7aGVhZGVyfTwvZGl2PlxuICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiPiA8L2Rpdj5cbiAgICA8L2JvZHk+XG4gICAgPHNjcmlwdCBjcm9zc29yaWdpbiBzcmM9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdEAxNi91bWQvcmVhY3QuZGV2ZWxvcG1lbnQuanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IGNyb3Nzb3JpZ2luIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxNi91bWQvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvY29yZS9jb3JlLmRldmVsb3BtZW50LmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdD5cbiAgICAgICAgdmFyIEFTVUhlYWRlciA9ICR7cHJvcHN9O1xuICAgICAgICBSZWFjdERPTS5oeWRyYXRlKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQVNVbml0eS5jb3JlLkFTVUJyYW5kSGVhZGVyLCB7aGVhZGVyT2JqOiBBU1VIZWFkZXJ9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc3UtaGVhZGVyLWNvbnRhaW5lclwiKSk7XG4gICAgPC9zY3JpcHQ+XG4gICAgXG4gICAgPGZvb3Rlcj5cbiAgICAgICAgJHtmb290ZXJ9XG4gICAgPC9mb290ZXI+XG4gIDwvaHRtbD5cbmApO1xuXG5jb25zdCBGdWxsUGFnZVNTUlByb2QgPSAgKHsgaGVhZGVyLCBmb290ZXIsIHRpdGxlLCBwcm9wc30pID0+IChgXG4gIDwhRE9DVFlMRSBodG1sPlxuICA8aHRtbD5cbiAgICA8aGVhZD5cbiAgICAgIDx0aXRsZT4ke3RpdGxlfTwvdGl0bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgICNtYWluLWNvbnRlbnQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWQ+XG4gICAgPGJvZHk+XG4gICAgICA8ZGl2PiR7aGVhZGVyfTwvZGl2PlxuICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiPiA8L2Rpdj5cbiAgICA8L2JvZHk+XG4gICAgPHNjcmlwdCBjcm9zc29yaWdpbiBzcmM9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdEAxNi91bWQvcmVhY3QucHJvZHVjdGlvbi5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IGNyb3Nzb3JpZ2luIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxNi91bWQvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvY29yZS9jb3JlLnByb2R1Y3Rpb24uanNcIj48L3NjcmlwdD5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9jb3JlL2NvcmUucHJvZHVjdGlvbi5jc3NcIj5cbiAgICA8c2NyaXB0PlxuICAgICAgICB2YXIgQVNVSGVhZGVyID0gJHtwcm9wc307XG4gICAgICAgIFJlYWN0RE9NLmh5ZHJhdGUoUmVhY3QuY3JlYXRlRWxlbWVudChBU1VuaXR5LmNvcmUuQVNVQnJhbmRIZWFkZXIsIHtoZWFkZXJPYmo6IEFTVUhlYWRlcn0pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzdS1oZWFkZXItY29udGFpbmVyXCIpKTtcbiAgICA8L3NjcmlwdD5cbiAgICBcbiAgICA8Zm9vdGVyPlxuICAgICAgICAke2Zvb3Rlcn1cbiAgICA8L2Zvb3Rlcj5cbiAgPC9odG1sPlxuYCk7XG5cbmV4cG9ydCB7SXRlbSwgRnVsbFBhZ2VTU1IsIEZ1bGxQYWdlU1NSUHJvZH07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9