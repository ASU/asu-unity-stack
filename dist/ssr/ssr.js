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
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ssr/SSR.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/components/ASUFooter.js":
/*!**************************************!*\
  !*** ./core/components/ASUFooter.js ***!
  \**************************************/
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

/***/ "./core/components/ASUHeader.js":
/*!**************************************!*\
  !*** ./core/components/ASUHeader.js ***!
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

var _ASUSearchBox = __webpack_require__(/*! ./ASUSearchBox */ "./core/components/ASUSearchBox.js");

var _ASUSearchBox2 = _interopRequireDefault(_ASUSearchBox);

var _ASUNav = __webpack_require__(/*! ./ASUNav */ "./core/components/ASUNav.js");

var _ASUNav2 = _interopRequireDefault(_ASUNav);

var _ASUHeader = __webpack_require__(/*! ../styles/ASUHeader.css */ "./core/styles/ASUHeader.css");

var _ASUHeader2 = _interopRequireDefault(_ASUHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ASUHeader = function (_Component) {
    _inherits(ASUHeader, _Component);

    function ASUHeader() {
        _classCallCheck(this, ASUHeader);

        var _this = _possibleConstructorReturn(this, (ASUHeader.__proto__ || Object.getPrototypeOf(ASUHeader)).call(this));

        _this.state = { renderClient: false };
        return _this;
    }

    _createClass(ASUHeader, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("div", { id: "main-search", className: "main-search closed" }),
                _react2.default.createElement(
                    "div",
                    { className: "accessibility-hide" },
                    _react2.default.createElement(
                        "a",
                        { href: "https://www.asu.edu/accessibility/", className: "sr-only" },
                        "Report an accessibility problem"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { id: "asu_hdr", className: _ASUHeader2.default.asu_hdr_white },
                    _react2.default.createElement(
                        "div",
                        { id: "asu_mobile_hdr" },
                        _react2.default.createElement(
                            "div",
                            { id: "asu_logo" },
                            _react2.default.createElement(
                                "a",
                                { href: "//www.asu.edu/", target: "_top" },
                                _react2.default.createElement("img", { alt: "A S U", src: "//www.asu.edu/asuthemes/4.6/assets/full_logo.png" })
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "asuhide f-navicon", id: "asu_mobile_button", onClick: this.toggleASU() },
                            _react2.default.createElement(
                                "a",
                                { href: "javascript:ASUHeader.toggleASU();" },
                                "Menu"
                            )
                        ),
                        _react2.default.createElement("div", { className: "f-search", id: "search_new", onClick: this.toggleASU() })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "closed", id: "asu_mobile_menu" },
                        _react2.default.createElement(_ASUNav2.default, null),
                        _react2.default.createElement(_ASUSearchBox2.default, null)
                    )
                ),
                this.state.renderClient && this.props.headerObj.site_title && _react2.default.createElement(
                    "div",
                    { className: "header__sitename", id: "asu_hdr_title_gen" },
                    _react2.default.createElement(
                        "div",
                        { id: "asu_hdr_parent_title" },
                        _react2.default.createElement(
                            "a",
                            { href: this.props.headerObj.site_title.parent_org_url },
                            _react2.default.createElement(
                                "span",
                                { className: "asu-parent-org" },
                                this.props.headerObj.site_title.parent_org
                            )
                        ),
                        _react2.default.createElement(
                            "a",
                            { title: "Home", rel: "home", href: this.props.headerObj.site_title.site_url },
                            _react2.default.createElement(
                                "span",
                                { className: "asu-site-title" },
                                this.props.headerObj.site_title.title
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setState({ renderClient: true });
        }
    }, {
        key: "toggleASU",
        value: function toggleASU() {}
    }]);

    return ASUHeader;
}(_react.Component);

exports.default = ASUHeader;

/***/ }),

/***/ "./core/components/ASUHeaderContainer.js":
/*!***********************************************!*\
  !*** ./core/components/ASUHeaderContainer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASUHeader = __webpack_require__(/*! ./ASUHeader */ "./core/components/ASUHeader.js");

var _ASUHeader2 = _interopRequireDefault(_ASUHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ASUHeaderContainer = function (_Component) {
    _inherits(ASUHeaderContainer, _Component);

    function ASUHeaderContainer() {
        _classCallCheck(this, ASUHeaderContainer);

        return _possibleConstructorReturn(this, (ASUHeaderContainer.__proto__ || Object.getPrototypeOf(ASUHeaderContainer)).call(this));
    }

    _createClass(ASUHeaderContainer, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "header",
                { id: "asu-header-container" },
                _react2.default.createElement(_ASUHeader2.default, {
                    headerObj: this.props.headerObj
                })
            );
        }
    }]);

    return ASUHeaderContainer;
}(_react.Component);

exports.default = ASUHeaderContainer;

/***/ }),

/***/ "./core/components/ASULogin.js":
/*!*************************************!*\
  !*** ./core/components/ASULogin.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ctestama on 4/18/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ASULogin = function (_Component) {
    _inherits(ASULogin, _Component);

    function ASULogin() {
        _classCallCheck(this, ASULogin);

        return _possibleConstructorReturn(this, (ASULogin.__proto__ || Object.getPrototypeOf(ASULogin)).call(this));
    }

    _createClass(ASULogin, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "span",
                    { className: "hidden" },
                    "Sign In / Sign Out"
                ),
                _react2.default.createElement(
                    "ul",
                    { id: "asu_login_module" },
                    _react2.default.createElement(
                        "li",
                        { className: "end", id: "asu_hdr_ssi" },
                        _react2.default.createElement(
                            "a",
                            { href: "//weblogin.asu.edu/cgi-bin/login", target: "_top" },
                            "Sign In"
                        )
                    )
                )
            );
        }
    }]);

    return ASULogin;
}(_react.Component);

exports.default = ASULogin;

/***/ }),

/***/ "./core/components/ASUNav.js":
/*!***********************************!*\
  !*** ./core/components/ASUNav.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASULogin = __webpack_require__(/*! ./ASULogin */ "./core/components/ASULogin.js");

var _ASULogin2 = _interopRequireDefault(_ASULogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ASUNav = function (_Component) {
    _inherits(ASUNav, _Component);

    function ASUNav() {
        _classCallCheck(this, ASUNav);

        return _possibleConstructorReturn(this, (ASUNav.__proto__ || Object.getPrototypeOf(ASUNav)).call(this));
    }

    _createClass(ASUNav, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { id: "asu_nav_wrapper" },
                _react2.default.createElement(_ASULogin2.default, null),
                _react2.default.createElement(
                    "div",
                    { id: "asu_nav_menu", role: "navigation", "aria-label": "ASU" },
                    _react2.default.createElement(
                        "h2",
                        { className: "hidden" },
                        "Menu"
                    ),
                    _react2.default.createElement(
                        "div",
                        { id: "asu_universal_nav" },
                        _react2.default.createElement(
                            "ul",
                            null,
                            _react2.default.createElement(
                                "li",
                                { className: "parent" },
                                _react2.default.createElement(
                                    "a",
                                    { href: "//www.asu.edu/", target: "_top" },
                                    "ASU Home"
                                ),
                                _react2.default.createElement(
                                    "ul",
                                    null,
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { className: "first", href: "//www.asu.edu/?feature=newsevents", target: "_top", title: "News and Events" },
                                            "News/Events"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//www.asu.edu/?feature=academics", target: "_top", title: "Academics" },
                                            "Academics"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//www.asu.edu/?feature=research", target: "_top", title: "Research" },
                                            "Research"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//www.asu.edu/?feature=athletics", target: "_top", title: "Athletics" },
                                            "Athletics"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//www.asu.edu/?feature=alumni", target: "_top", title: "Alumni" },
                                            "Alumni"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//www.asu.edu/?feature=giving", target: "_top", title: "Giving" },
                                            "Giving"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//www.asu.edu/?feature=president", target: "_top", title: "President" },
                                            "President"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//www.asu.edu/about", target: "_top", title: "About ASU" },
                                            "About ASU"
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "//my.asu.edu/", target: "_top" },
                                    "My ASU"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                { className: "parent" },
                                _react2.default.createElement(
                                    "a",
                                    { href: "//www.asu.edu/colleges/", target: "_top" },
                                    "Colleges and Schools"
                                ),
                                _react2.default.createElement(
                                    "ul",
                                    null,
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { className: "first", href: "//artsandsciences.asu.edu/", target: "_top", title: "Arts and Sciences website" },
                                            "Arts and Sciences"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//wpcarey.asu.edu/", target: "_top", title: "W. P. Carey School of Business Web and Morrison School of Agribusiness website" },
                                            "Business"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//herbergerinstitute.asu.edu", target: "_top", title: "Herberger Institute for Design and the Arts website" },
                                            "Design and the Arts"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//education.asu.edu/", target: "_top", title: "Mary Lou Fulton Teachers College website" },
                                            "Education"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//engineering.asu.edu/", target: "_top", title: "Engineering website" },
                                            "Engineering"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//sfis.asu.edu/", target: "_top", title: "Future of Innovation in Society website" },
                                            "Future of Innovation in Society"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//graduate.asu.edu", target: "_top", title: "Graduate College website" },
                                            "Graduate"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//chs.asu.edu/", target: "_top", title: "Health Solutions website" },
                                            "Health Solutions"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//honors.asu.edu/", target: "_top", title: "Barrett, The Honors College website" },
                                            "Honors"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//cronkite.asu.edu", target: "_top", title: "Walter Cronkite School of Journalism and Mass Communication website" },
                                            "Journalism"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//www.law.asu.edu/", target: "_top", title: "Sandra Day O' Connor College of Law website" },
                                            "Law"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//nursingandhealth.asu.edu/", target: "_top", title: "College of Nursing and Health Innovation website" },
                                            "Nursing and Health Innovation"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//copp.asu.edu", target: "_top", title: "College of Public Programs website" },
                                            "Public Service and Community Solutions"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//schoolofsustainability.asu.edu", target: "_top", title: "School of Sustainability website" },
                                            "Sustainability"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//uc.asu.edu/", target: "_top", title: "University College website" },
                                            "University College"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { target: "_top", href: "http://www.thunderbird.edu/", title: "Thunderbird School of Global Management website" },
                                            "Thunderbird School of Global Management"
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                { className: "parent" },
                                _react2.default.createElement(
                                    "a",
                                    { href: "//www.asu.edu/map/", target: "_top" },
                                    "Map and Locations"
                                ),
                                _react2.default.createElement(
                                    "ul",
                                    null,
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { className: "border first", href: "//www.asu.edu/map/", target: "_top" },
                                            "Map"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//campus.asu.edu/tempe/", target: "_top", title: "Tempe campus" },
                                            "Tempe"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//campus.asu.edu/west/", target: "_top", title: "West campus" },
                                            "West"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//campus.asu.edu/polytechnic/", target: "_top", title: "Polytechnic campus" },
                                            "Polytechnic"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//campus.asu.edu/downtown/", target: "_top", title: "Downtown Phoenix campus" },
                                            "Downtown Phoenix"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//asuonline.asu.edu/", target: "_top", title: "Online and Extended campus" },
                                            "Online and Extended"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//havasu.asu.edu/", target: "_top" },
                                            "Lake Havasu"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { className: "border", target: "_top", href: "http://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona" },
                                            "Thunderbird"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//skysong.asu.edu/", target: "_top" },
                                            "Skysong"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//asuresearchpark.com/", target: "_top" },
                                            "Research Park"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//washingtoncenter.asu.edu/", target: "_top" },
                                            "Washington D.C."
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "//wpcarey.asu.edu/mba/china-program/english/", target: "_top" },
                                            "China"
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "//isearch.asu.edu/", target: "_top", title: "Directory, Index and other info" },
                                    "Directory"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ASUNav;
}(_react.Component);

exports.default = ASUNav;

/***/ }),

/***/ "./core/components/ASUSearchBox.js":
/*!*****************************************!*\
  !*** ./core/components/ASUSearchBox.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

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
                    { id: "asu_search_module" },
                    _react2.default.createElement(
                        "h2",
                        { className: "hidden" },
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
                        _react2.default.createElement("input", { name: "search_header", "class": "asu_search_box", id: "masu_search_box", placeholder: "Search", autoComplete: "off", type: "text" }),
                        _react2.default.createElement("input", { className: "asu_search_button", type: "submit", value: "Search" })
                    )
                );
            }

            return _react2.default.createElement(
                "div",
                { id: "asu_search_module" },
                _react2.default.createElement(
                    "h2",
                    { className: "hidden" },
                    "Search"
                ),
                _react2.default.createElement(
                    "form",
                    { target: "_top", action: "https://search.asu.edu/search", method: "get", name: "gs", role: "search" },
                    _react2.default.createElement(
                        "label",
                        { htmlFor: "masu_search_box" },
                        "Search"
                    ),
                    _react2.default.createElement("input", { name: "site", type: "hidden", value: "default_collection" }),
                    _react2.default.createElement("input", { name: "sort", type: "hidden", value: "date:D:L:d1" }),
                    _react2.default.createElement("input", { name: "output", type: "hidden", value: "xml_no_dtd" }),
                    _react2.default.createElement("input", { name: "proxystylesheet", type: "hidden", value: "asu_frontend" }),
                    _react2.default.createElement("input", { name: "ie", type: "hidden", value: "UTF-8" }),
                    _react2.default.createElement("input", { name: "oe", type: "hidden", value: "UTF-8" }),
                    _react2.default.createElement("input", { name: "client", type: "hidden", value: "asu_frontend" }),
                    _react2.default.createElement("input", { className: "asu_search_button", type: "submit", value: "Search" }),
                    _react2.default.createElement("input", { name: "q", className: "asu_search_box", id: "masu_search_box", placeholder: "Search", autoComplete: "off", type: "text" })
                )
            );
        }
    }]);

    return ASUSearchBox;
}(_react.Component);

exports.default = ASUSearchBox;

/***/ }),

/***/ "./core/core.js":
/*!**********************!*\
  !*** ./core/core.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _ASUNav = __webpack_require__(/*! ./components/ASUNav */ "./core/components/ASUNav.js");

var _ASUNav2 = _interopRequireDefault(_ASUNav);

var _ASUFooter = __webpack_require__(/*! ./components/ASUFooter */ "./core/components/ASUFooter.js");

var _ASUFooter2 = _interopRequireDefault(_ASUFooter);

var _ASUHeaderContainer = __webpack_require__(/*! ./components/ASUHeaderContainer */ "./core/components/ASUHeaderContainer.js");

var _ASUHeaderContainer2 = _interopRequireDefault(_ASUHeaderContainer);

var _ASUHeader = __webpack_require__(/*! ./components/ASUHeader */ "./core/components/ASUHeader.js");

var _ASUHeader2 = _interopRequireDefault(_ASUHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initASUHeader = function initASUHeader(asu_header, element) {
    element ? ReactDOM.render(React.createElement(_ASUHeaderContainer2.default, { headerObj: asu_header }), element) : false;
}; /**
    * Created by ctestama on 3/21/18.
    */


module.exports = {
    initASUHeader: initASUHeader,
    ASUHeaderContainer: _ASUHeaderContainer2.default,
    ASUHeader: _ASUHeader2.default,
    ASUNav: _ASUNav2.default,
    ASUFooter: _ASUFooter2.default
};

/***/ }),

/***/ "./core/styles/ASUHeader.css":
/*!***********************************!*\
  !*** ./core/styles/ASUHeader.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"asu_universal_nav_new": "ASUHeader__asu_universal_nav_new___3vNW-",
	"asu_hdr_white": "ASUHeader__asu_hdr_white___1UUPZ",
	"closed": "ASUHeader__closed___2E2A-",
	"asu_hdr": "ASUHeader__asu_hdr___2-MF-",
	"asu_logo": "ASUHeader__asu_logo___3rIfY",
	"asu_mobile_hdr": "ASUHeader__asu_mobile_hdr___1QYPw",
	"asu_mobile_button": "ASUHeader__asu_mobile_button___vcVBn",
	"asu_print_logo": "ASUHeader__asu_print_logo___37qgO",
	"asu_nav_wrapper": "ASUHeader__asu_nav_wrapper___2HrN4",
	"asu_nav_menu": "ASUHeader__asu_nav_menu___3aSJ-",
	"asu_universal_nav": "ASUHeader__asu_universal_nav___3q3xm",
	"asu_head_hover": "ASUHeader__asu_head_hover___19cKK",
	"parent": "ASUHeader__parent___1Qffo",
	"border": "ASUHeader__border___3giYM",
	"asu_touch": "ASUHeader__asu_touch___1U1bM",
	"asu_login_module": "ASUHeader__asu_login_module___1DwX2",
	"end": "ASUHeader__end___3H5tZ",
	"asu_search_module": "ASUHeader__asu_search_module___3p5v1",
	"asu_search_box": "ASUHeader__asu_search_box___3PDkl",
	"masu_search_box": "ASUHeader__masu_search_box___3HTU_",
	"asu_search_button": "ASUHeader__asu_search_button___3jT2m",
	"myasu_bar": "ASUHeader__myasu_bar___beMch",
	"myasu_text": "ASUHeader__myasu_text___3m7OY",
	"myasu_arrow": "ASUHeader__myasu_arrow___2syNQ",
	"asu_footer": "ASUHeader__asu_footer___2NLMN",
	"asu_footer_contact_info": "ASUHeader__asu_footer_contact_info___3wfDj",
	"asu_search": "ASUHeader__asu_search___3mWVf",
	"navmenu": "ASUHeader__navmenu___FBpC3",
	"main-search": "ASUHeader__main-search___3OEJH",
	"hidden": "ASUHeader__hidden___34LE7",
	"icn": "ASUHeader__icn___1gkzK",
	"icn2": "ASUHeader__icn2___ymhjJ",
	"blackOut": "ASUHeader__blackOut___3Gsew",
	"innovation-bar": "ASUHeader__innovation-bar___2hrcq",
	"innovation-hidden": "ASUHeader__innovation-hidden___18ihy",
	"innovation-status": "ASUHeader__innovation-status___x6ZaT",
	"innovation-top": "ASUHeader__innovation-top___2ovkA",
	"asu_hdr_parent_title": "ASUHeader__asu_hdr_parent_title___1ewPw",
	"asu-parent-org": "ASUHeader__asu-parent-org___2rGJY",
	"asu-site-title": "ASUHeader__asu-site-title___3XBOF",
	"header__sitename": "ASUHeader__header__sitename___1HtsA",
	"sr-only": "ASUHeader__sr-only___31sP0"
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentList = {
    header: {
        type: _core.ASUHeaderContainer,
        domId: 'asu-header-container',
        props: {
            headerObj: ASUHeaderObj
        }
    },
    footer: {
        type: _core.ASUFooter,
        domId: 'asu-footer-container',
        props: {}
    }
};

var ASUHeaderObj = {};

var renderASUComponent = function renderASUComponent(req, res, component) {

    var ASUComponent = component.type;

    // Renders component to string
    var html = _server2.default.renderToString(_react2.default.createElement(ASUComponent, component.props));

    return (0, _template.Item)({
        id: component.domId,
        body: html
    });
};

var renderSSRFullPage = function renderSSRFullPage(req, res) {
    var header = renderASUComponent(req, res, componentList.header);
    var footer = renderASUComponent(req, res, componentList.footer);

    res.send((0, _template.FullPageSSR)({
        header: header,
        footer: footer,
        title: 'Test Page'
    }));
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
        title = _ref2.title;
    return "\n  <!DOCTYLE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n      <style>\n        #main-content {\n            height: 1200px;\n        }\n        </style>\n    </head>\n    <body>\n      <div>" + header + "</div>\n      <div id=\"main-content\"> </div>\n    </body>\n    <script crossorigin src=\"https://unpkg.com/react@16/umd/react.development.js\"></script>\n    <script crossorigin src=\"https://unpkg.com/react-dom@16/umd/react-dom.development.js\"></script>\n    <script src=\"/core/core.development.js\"></script>\n    <script>\n        var ASUHeader = {};\n    \n        ASUHeader.site_menu = {\n            json: [\n                {\n                    title:\"Home\",\n                    path:\"http://www.asu.edu/absolute_path\"\n                },\n                {\n                    title:\"Degree Programs\",\n                    path:\"/absolute_path/page\",\n                    children: [\n                        {\n                            title:\"Admissions\",\n                            path:\"/?url=variable\",\n                            children: [\n                                {\n                                    title:\"Student Life\",\n                                    path:\"/#hash\"\n                                }\n                            ]\n                        },\n                        {\n                            title:\"Ross\",\n                            path:\"https://www.asu.edu/\"\n                        }\n                    ]\n                },\n            ]\n        };\n        \n        console.log(ASUnity, 'ASUNITY');\n    \n        ASUHeader.site_title = {title: \"ASU Custom Site Title\", parent_org: \"ASU Custom Parent Org\", site_url: \"https://asu.edu\", parent_org_url: \"https://uto.asu.edu\"};\n        \n        ReactDOM.hydrate(React.createElement(ASUnity.core.ASUHeaderContainer, {headerObj: ASUHeader}), document.getElementById(\"asu-header-container\"));\n    </script>\n    \n    <footer>\n        " + footer + "\n    </footer>\n  </html>\n";
};

exports.Item = Item;
exports.FullPageSSR = FullPageSSR;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9BU1VIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVUhlYWRlckNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVU5hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVU2VhcmNoQm94LmpzIiwid2VicGFjazovLy8uL2NvcmUvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3N0eWxlcy9BU1VIZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3Nzci9TU1IuanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIl0sIm5hbWVzIjpbIkFTVUZvb3RlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJBU1VIZWFkZXIiLCJzdGF0ZSIsInJlbmRlckNsaWVudCIsImFzdV9oZHJfd2hpdGUiLCJ0b2dnbGVBU1UiLCJwcm9wcyIsImhlYWRlck9iaiIsInNpdGVfdGl0bGUiLCJwYXJlbnRfb3JnX3VybCIsInBhcmVudF9vcmciLCJzaXRlX3VybCIsInRpdGxlIiwic2V0U3RhdGUiLCJBU1VIZWFkZXJDb250YWluZXIiLCJBU1VMb2dpbiIsIkFTVU5hdiIsIkFTVVNlYXJjaEJveCIsImRydXBhbCIsImluaXRBU1VIZWFkZXIiLCJhc3VfaGVhZGVyIiwiZWxlbWVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiY29tcG9uZW50TGlzdCIsImhlYWRlciIsInR5cGUiLCJkb21JZCIsIkFTVUhlYWRlck9iaiIsImZvb3RlciIsInJlbmRlckFTVUNvbXBvbmVudCIsInJlcSIsInJlcyIsImNvbXBvbmVudCIsIkFTVUNvbXBvbmVudCIsImh0bWwiLCJyZW5kZXJUb1N0cmluZyIsImlkIiwiYm9keSIsInJlbmRlclNTUkZ1bGxQYWdlIiwic2VuZCIsInNlbmRBU1VIZWFkZXIiLCJzZW5kQVNVRm9vdGVyIiwiSXRlbSIsIkZ1bGxQYWdlU1NSIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUNGLHlCQUFjO0FBQUE7O0FBQUE7QUFFYjs7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxJQUFHLG1CQUFSO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLElBQUcsZ0JBQVI7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLG1CQUFmO0FB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RFhJLE1BMURXO0FBQUEsQ0FBckI7O1FBK0RRYyxJLEdBQUFBLEk7UUFBTUMsVyxHQUFBQSxXOzs7Ozs7Ozs7OztBQ3hFZCxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzc3Ivc3NyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKGdsb2JhbCwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyB3YXNtIG1vZHVsZXNcbiBcdHZhciBpbnN0YWxsZWRXYXNtTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb2JqZWN0IHdpdGggYWxsIGNvbXBpbGVkIFdlYkFzc2VtYmx5Lk1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18udyA9IHt9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Nzci9TU1IuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEFTVUZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImlubm92YXRpb24tZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImlubm92YXRpb24tYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5ub3ZhdGlvbi10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5ub3ZhdGlvbi1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9yYW5raW5nc1wiPjxzcGFuPkFTVSBpcyAjMSBpbiB0aGUgVS5TLiBmb3IgSW5ub3ZhdGlvbjwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5ub3ZhdGlvbi1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9yYW5raW5nc1wiPjxpbWcgc3JjPVwiLy93d3ctZGV2LmFzdS5lZHUvYXN1dGhlbWVzLzQuNi9hc3NldHMvYmVzdC1jb2xsZWdlLTIwMTgucG5nXCIgYWx0PVwiQmVzdCBDb2xsZWdlcyBVLlMuIE5ld3MgTW9zdCBJbm5vdmF0aXZlIDIwMThcIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvY29weXJpZ2h0L1wiPkNvcHlyaWdodCBhbmQgVHJhZGVtYXJrPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvYWNjZXNzaWJpbGl0eS9cIj5BY2Nlc3NpYmlsaXR5PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvcHJpdmFjeS9cIj5Qcml2YWN5PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvdG91L1wiPlRlcm1zIG9mIFVzZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L2FzdWpvYnNcIj5Kb2JzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvZW1lcmdlbmN5L1wiPkVtZXJnZW5jeTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5vLWJvcmRlclwiPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L2NvbnRhY3Rhc3UvXCI+Q29udGFjdCBBU1U8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBU1VGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQVNVU2VhcmNoQm94IGZyb20gXCIuL0FTVVNlYXJjaEJveFwiO1xuaW1wb3J0IEFTVU5hdiBmcm9tIFwiLi9BU1VOYXZcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FTVUhlYWRlci5jc3MnO1xuXG5jbGFzcyBBU1VIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge3JlbmRlckNsaWVudDogZmFsc2V9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tc2VhcmNoXCIgY2xhc3NOYW1lPVwibWFpbi1zZWFyY2ggY2xvc2VkXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY2Vzc2liaWxpdHktaGlkZVwiPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L2FjY2Vzc2liaWxpdHkvXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlJlcG9ydCBhbiBhY2Nlc3NpYmlsaXR5IHByb2JsZW08L2E+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9oZHJcIiBjbGFzc05hbWU9e3N0eWxlcy5hc3VfaGRyX3doaXRlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9tb2JpbGVfaGRyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXN1X2xvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLy93d3cuYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiQSBTIFVcIiBzcmM9XCIvL3d3dy5hc3UuZWR1L2FzdXRoZW1lcy80LjYvYXNzZXRzL2Z1bGxfbG9nby5wbmdcIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3VoaWRlIGYtbmF2aWNvblwiIGlkPVwiYXN1X21vYmlsZV9idXR0b25cIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFTVSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDpBU1VIZWFkZXIudG9nZ2xlQVNVKCk7XCI+TWVudTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmLXNlYXJjaFwiIGlkPVwic2VhcmNoX25ld1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQVNVKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlZFwiIGlkPVwiYXN1X21vYmlsZV9tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QVNVTmF2Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBU1VTZWFyY2hCb3gvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZW5kZXJDbGllbnQgJiYgdGhpcy5wcm9wcy5oZWFkZXJPYmouc2l0ZV90aXRsZSAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZW5hbWVcIiBpZD1cImFzdV9oZHJfdGl0bGVfZ2VuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXN1X2hkcl9wYXJlbnRfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt0aGlzLnByb3BzLmhlYWRlck9iai5zaXRlX3RpdGxlLnBhcmVudF9vcmdfdXJsfT48c3BhbiBjbGFzc05hbWU9XCJhc3UtcGFyZW50LW9yZ1wiPnt0aGlzLnByb3BzLmhlYWRlck9iai5zaXRlX3RpdGxlLnBhcmVudF9vcmd9PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIkhvbWVcIiByZWw9XCJob21lXCIgaHJlZj17dGhpcy5wcm9wcy5oZWFkZXJPYmouc2l0ZV90aXRsZS5zaXRlX3VybH0+PHNwYW4gY2xhc3NOYW1lPVwiYXN1LXNpdGUtdGl0bGVcIj57dGhpcy5wcm9wcy5oZWFkZXJPYmouc2l0ZV90aXRsZS50aXRsZX08L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlckNsaWVudDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVBU1UoKSB7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFTVUhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VIZWFkZXIgZnJvbSBcIi4vQVNVSGVhZGVyXCI7XG5cbmNsYXNzIEFTVUhlYWRlckNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXIgaWQ9XCJhc3UtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxBU1VIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyT2JqPXt0aGlzLnByb3BzLmhlYWRlck9ian1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQVNVSGVhZGVyQ29udGFpbmVyO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGN0ZXN0YW1hIG9uIDQvMTgvMTguXG4gKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQVNVTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIEluIC8gU2lnbiBPdXRcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHVsIGlkPVwiYXN1X2xvZ2luX21vZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZW5kXCIgaWQ9XCJhc3VfaGRyX3NzaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8vd2VibG9naW4uYXN1LmVkdS9jZ2ktYmluL2xvZ2luXCIgdGFyZ2V0PVwiX3RvcFwiPlNpZ24gSW48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG5cblxufVxuZXhwb3J0IGRlZmF1bHQgQVNVTG9naW47IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFTVUxvZ2luIGZyb20gJy4vQVNVTG9naW4nO1xuXG5jbGFzcyBBU1VOYXYgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9uYXZfd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxBU1VMb2dpbi8+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9uYXZfbWVudVwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cIkFTVVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBNZW51XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhc3VfdW5pdmVyc2FsX25hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYXJlbnRcIj48YSBocmVmPVwiLy93d3cuYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCI+QVNVIEhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJmaXJzdFwiIGhyZWY9XCIvL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPW5ld3NldmVudHNcIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJOZXdzIGFuZCBFdmVudHNcIj5OZXdzL0V2ZW50czwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPWFjYWRlbWljc1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkFjYWRlbWljc1wiPkFjYWRlbWljczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPXJlc2VhcmNoXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiUmVzZWFyY2hcIj5SZXNlYXJjaDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPWF0aGxldGljc1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkF0aGxldGljc1wiPkF0aGxldGljczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPWFsdW1uaVwiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkFsdW1uaVwiPkFsdW1uaTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPWdpdmluZ1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkdpdmluZ1wiPkdpdmluZzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPXByZXNpZGVudFwiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIlByZXNpZGVudFwiPlByZXNpZGVudDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1L2Fib3V0XCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiQWJvdXQgQVNVXCI+QWJvdXQgQVNVPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vbXkuYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCI+TXkgQVNVPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhcmVudFwiPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1L2NvbGxlZ2VzL1wiIHRhcmdldD1cIl90b3BcIj5Db2xsZWdlcyBhbmQgU2Nob29sczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImZpcnN0XCIgaHJlZj1cIi8vYXJ0c2FuZHNjaWVuY2VzLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiQXJ0cyBhbmQgU2NpZW5jZXMgd2Vic2l0ZVwiPkFydHMgYW5kIFNjaWVuY2VzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vd3BjYXJleS5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIlcuIFAuIENhcmV5IFNjaG9vbCBvZiBCdXNpbmVzcyBXZWIgYW5kIE1vcnJpc29uIFNjaG9vbCBvZiBBZ3JpYnVzaW5lc3Mgd2Vic2l0ZVwiPkJ1c2luZXNzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vaGVyYmVyZ2VyaW5zdGl0dXRlLmFzdS5lZHVcIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJIZXJiZXJnZXIgSW5zdGl0dXRlIGZvciBEZXNpZ24gYW5kIHRoZSBBcnRzIHdlYnNpdGVcIj5EZXNpZ24gYW5kIHRoZSBBcnRzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vZWR1Y2F0aW9uLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiTWFyeSBMb3UgRnVsdG9uIFRlYWNoZXJzIENvbGxlZ2Ugd2Vic2l0ZVwiPkVkdWNhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL2VuZ2luZWVyaW5nLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiRW5naW5lZXJpbmcgd2Vic2l0ZVwiPkVuZ2luZWVyaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vc2Zpcy5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkZ1dHVyZSBvZiBJbm5vdmF0aW9uIGluIFNvY2lldHkgd2Vic2l0ZVwiPkZ1dHVyZSBvZiBJbm5vdmF0aW9uIGluIFNvY2lldHk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9ncmFkdWF0ZS5hc3UuZWR1XCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiR3JhZHVhdGUgQ29sbGVnZSB3ZWJzaXRlXCI+R3JhZHVhdGU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9jaHMuYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJIZWFsdGggU29sdXRpb25zIHdlYnNpdGVcIj5IZWFsdGggU29sdXRpb25zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vaG9ub3JzLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiQmFycmV0dCwgVGhlIEhvbm9ycyBDb2xsZWdlIHdlYnNpdGVcIj5Ib25vcnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9jcm9ua2l0ZS5hc3UuZWR1XCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiV2FsdGVyIENyb25raXRlIFNjaG9vbCBvZiBKb3VybmFsaXNtIGFuZCBNYXNzIENvbW11bmljYXRpb24gd2Vic2l0ZVwiPkpvdXJuYWxpc208L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy93d3cubGF3LmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiU2FuZHJhIERheSBPJyBDb25ub3IgQ29sbGVnZSBvZiBMYXcgd2Vic2l0ZVwiPkxhdzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL251cnNpbmdhbmRoZWFsdGguYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJDb2xsZWdlIG9mIE51cnNpbmcgYW5kIEhlYWx0aCBJbm5vdmF0aW9uIHdlYnNpdGVcIj5OdXJzaW5nIGFuZCBIZWFsdGggSW5ub3ZhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL2NvcHAuYXN1LmVkdVwiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkNvbGxlZ2Ugb2YgUHVibGljIFByb2dyYW1zIHdlYnNpdGVcIj5QdWJsaWMgU2VydmljZSBhbmQgQ29tbXVuaXR5IFNvbHV0aW9uczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3NjaG9vbG9mc3VzdGFpbmFiaWxpdHkuYXN1LmVkdVwiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIlNjaG9vbCBvZiBTdXN0YWluYWJpbGl0eSB3ZWJzaXRlXCI+U3VzdGFpbmFiaWxpdHk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy91Yy5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIlVuaXZlcnNpdHkgQ29sbGVnZSB3ZWJzaXRlXCI+VW5pdmVyc2l0eSBDb2xsZWdlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgdGFyZ2V0PVwiX3RvcFwiIGhyZWY9XCJodHRwOi8vd3d3LnRodW5kZXJiaXJkLmVkdS9cIiB0aXRsZT1cIlRodW5kZXJiaXJkIFNjaG9vbCBvZiBHbG9iYWwgTWFuYWdlbWVudCB3ZWJzaXRlXCI+VGh1bmRlcmJpcmQgU2Nob29sIG9mIEdsb2JhbCBNYW5hZ2VtZW50PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFyZW50XCI+PGEgaHJlZj1cIi8vd3d3LmFzdS5lZHUvbWFwL1wiIHRhcmdldD1cIl90b3BcIj5NYXAgYW5kIExvY2F0aW9uczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImJvcmRlciBmaXJzdFwiIGhyZWY9XCIvL3d3dy5hc3UuZWR1L21hcC9cIiB0YXJnZXQ9XCJfdG9wXCI+TWFwPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vY2FtcHVzLmFzdS5lZHUvdGVtcGUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiVGVtcGUgY2FtcHVzXCI+VGVtcGU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9jYW1wdXMuYXN1LmVkdS93ZXN0L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIldlc3QgY2FtcHVzXCI+V2VzdDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL2NhbXB1cy5hc3UuZWR1L3BvbHl0ZWNobmljL1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIlBvbHl0ZWNobmljIGNhbXB1c1wiPlBvbHl0ZWNobmljPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vY2FtcHVzLmFzdS5lZHUvZG93bnRvd24vXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiRG93bnRvd24gUGhvZW5peCBjYW1wdXNcIj5Eb3dudG93biBQaG9lbml4PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vYXN1b25saW5lLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiT25saW5lIGFuZCBFeHRlbmRlZCBjYW1wdXNcIj5PbmxpbmUgYW5kIEV4dGVuZGVkPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vaGF2YXN1LmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiPkxha2UgSGF2YXN1PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiYm9yZGVyXCIgdGFyZ2V0PVwiX3RvcFwiIGhyZWY9XCJodHRwOi8vd3d3LnRodW5kZXJiaXJkLmVkdS9hYm91dC10aHVuZGVyYmlyZC9sb2NhdGlvbnMvcGhvZW5peC1hcml6b25hXCI+VGh1bmRlcmJpcmQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9za3lzb25nLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiPlNreXNvbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9hc3VyZXNlYXJjaHBhcmsuY29tL1wiIHRhcmdldD1cIl90b3BcIj5SZXNlYXJjaCBQYXJrPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vd2FzaGluZ3RvbmNlbnRlci5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIj5XYXNoaW5ndG9uIEQuQy48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy93cGNhcmV5LmFzdS5lZHUvbWJhL2NoaW5hLXByb2dyYW0vZW5nbGlzaC9cIiB0YXJnZXQ9XCJfdG9wXCI+Q2hpbmE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9pc2VhcmNoLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiRGlyZWN0b3J5LCBJbmRleCBhbmQgb3RoZXIgaW5mb1wiPkRpcmVjdG9yeTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBU1VOYXY7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBBU1VTZWFyY2hCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kcnVwYWwpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9zZWFyY2hfbW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoaWRkZW5cIj5TZWFyY2g8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImdvb2dsZS9hcHBsaWFuY2UvYmxvY2svZm9ybVwiIG1ldGhvZD1cInBvc3RcIiBfbHBjaGVja2VkPVwiMVwiPjxsYWJlbCBodG1sRm9yPVwibWFzdV9zZWFyY2hfYm94XCI+U2VhcmNoPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2VhcmNoX2hlYWRlclwiIGNsYXNzPVwiYXN1X3NlYXJjaF9ib3hcIiBpZD1cIm1hc3Vfc2VhcmNoX2JveFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYXN1X3NlYXJjaF9idXR0b25cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZWFyY2hcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9zZWFyY2hfbW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhpZGRlblwiPlNlYXJjaDwvaDI+XG4gICAgICAgICAgICAgICAgPGZvcm0gdGFyZ2V0PVwiX3RvcFwiIGFjdGlvbj1cImh0dHBzOi8vc2VhcmNoLmFzdS5lZHUvc2VhcmNoXCIgbWV0aG9kPVwiZ2V0XCIgbmFtZT1cImdzXCIgcm9sZT1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1hc3Vfc2VhcmNoX2JveFwiPlNlYXJjaDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2l0ZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cImRlZmF1bHRfY29sbGVjdGlvblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzb3J0XCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiZGF0ZTpEOkw6ZDFcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwib3V0cHV0XCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwieG1sX25vX2R0ZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwcm94eXN0eWxlc2hlZXRcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJhc3VfZnJvbnRlbmRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaWVcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJVVEYtOFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJvZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIlVURi04XCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImNsaWVudFwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cImFzdV9mcm9udGVuZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFzdV9zZWFyY2hfYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInFcIiBjbGFzc05hbWU9XCJhc3Vfc2VhcmNoX2JveFwiIGlkPVwibWFzdV9zZWFyY2hfYm94XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBU1VTZWFyY2hCb3g7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGN0ZXN0YW1hIG9uIDMvMjEvMTguXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFTVU5hdiBmcm9tICcuL2NvbXBvbmVudHMvQVNVTmF2J1xuaW1wb3J0IEFTVUZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvQVNVRm9vdGVyJ1xuaW1wb3J0IEFTVUhlYWRlckNvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL0FTVUhlYWRlckNvbnRhaW5lclwiO1xuaW1wb3J0IEFTVUhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0FTVUhlYWRlclwiO1xuXG5jb25zdCBpbml0QVNVSGVhZGVyID0gKGFzdV9oZWFkZXIsIGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50ID8gUmVhY3RET00ucmVuZGVyKDxBU1VIZWFkZXJDb250YWluZXIgaGVhZGVyT2JqPXthc3VfaGVhZGVyfSAvPiwgZWxlbWVudCkgOiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGluaXRBU1VIZWFkZXIsXG4gICAgQVNVSGVhZGVyQ29udGFpbmVyLFxuICAgIEFTVUhlYWRlcixcbiAgICBBU1VOYXYsXG4gICAgQVNVRm9vdGVyXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFzdV91bml2ZXJzYWxfbmF2X25ld1wiOiBcIkFTVUhlYWRlcl9fYXN1X3VuaXZlcnNhbF9uYXZfbmV3X19fM3ZOVy1cIixcblx0XCJhc3VfaGRyX3doaXRlXCI6IFwiQVNVSGVhZGVyX19hc3VfaGRyX3doaXRlX19fMVVVUFpcIixcblx0XCJjbG9zZWRcIjogXCJBU1VIZWFkZXJfX2Nsb3NlZF9fXzJFMkEtXCIsXG5cdFwiYXN1X2hkclwiOiBcIkFTVUhlYWRlcl9fYXN1X2hkcl9fXzItTUYtXCIsXG5cdFwiYXN1X2xvZ29cIjogXCJBU1VIZWFkZXJfX2FzdV9sb2dvX19fM3JJZllcIixcblx0XCJhc3VfbW9iaWxlX2hkclwiOiBcIkFTVUhlYWRlcl9fYXN1X21vYmlsZV9oZHJfX18xUVlQd1wiLFxuXHRcImFzdV9tb2JpbGVfYnV0dG9uXCI6IFwiQVNVSGVhZGVyX19hc3VfbW9iaWxlX2J1dHRvbl9fX3ZjVkJuXCIsXG5cdFwiYXN1X3ByaW50X2xvZ29cIjogXCJBU1VIZWFkZXJfX2FzdV9wcmludF9sb2dvX19fMzdxZ09cIixcblx0XCJhc3VfbmF2X3dyYXBwZXJcIjogXCJBU1VIZWFkZXJfX2FzdV9uYXZfd3JhcHBlcl9fXzJIck40XCIsXG5cdFwiYXN1X25hdl9tZW51XCI6IFwiQVNVSGVhZGVyX19hc3VfbmF2X21lbnVfX18zYVNKLVwiLFxuXHRcImFzdV91bml2ZXJzYWxfbmF2XCI6IFwiQVNVSGVhZGVyX19hc3VfdW5pdmVyc2FsX25hdl9fXzNxM3htXCIsXG5cdFwiYXN1X2hlYWRfaG92ZXJcIjogXCJBU1VIZWFkZXJfX2FzdV9oZWFkX2hvdmVyX19fMTljS0tcIixcblx0XCJwYXJlbnRcIjogXCJBU1VIZWFkZXJfX3BhcmVudF9fXzFRZmZvXCIsXG5cdFwiYm9yZGVyXCI6IFwiQVNVSGVhZGVyX19ib3JkZXJfX18zZ2lZTVwiLFxuXHRcImFzdV90b3VjaFwiOiBcIkFTVUhlYWRlcl9fYXN1X3RvdWNoX19fMVUxYk1cIixcblx0XCJhc3VfbG9naW5fbW9kdWxlXCI6IFwiQVNVSGVhZGVyX19hc3VfbG9naW5fbW9kdWxlX19fMUR3WDJcIixcblx0XCJlbmRcIjogXCJBU1VIZWFkZXJfX2VuZF9fXzNINXRaXCIsXG5cdFwiYXN1X3NlYXJjaF9tb2R1bGVcIjogXCJBU1VIZWFkZXJfX2FzdV9zZWFyY2hfbW9kdWxlX19fM3A1djFcIixcblx0XCJhc3Vfc2VhcmNoX2JveFwiOiBcIkFTVUhlYWRlcl9fYXN1X3NlYXJjaF9ib3hfX18zUERrbFwiLFxuXHRcIm1hc3Vfc2VhcmNoX2JveFwiOiBcIkFTVUhlYWRlcl9fbWFzdV9zZWFyY2hfYm94X19fM0hUVV9cIixcblx0XCJhc3Vfc2VhcmNoX2J1dHRvblwiOiBcIkFTVUhlYWRlcl9fYXN1X3NlYXJjaF9idXR0b25fX18zalQybVwiLFxuXHRcIm15YXN1X2JhclwiOiBcIkFTVUhlYWRlcl9fbXlhc3VfYmFyX19fYmVNY2hcIixcblx0XCJteWFzdV90ZXh0XCI6IFwiQVNVSGVhZGVyX19teWFzdV90ZXh0X19fM203T1lcIixcblx0XCJteWFzdV9hcnJvd1wiOiBcIkFTVUhlYWRlcl9fbXlhc3VfYXJyb3dfX18yc3lOUVwiLFxuXHRcImFzdV9mb290ZXJcIjogXCJBU1VIZWFkZXJfX2FzdV9mb290ZXJfX18yTkxNTlwiLFxuXHRcImFzdV9mb290ZXJfY29udGFjdF9pbmZvXCI6IFwiQVNVSGVhZGVyX19hc3VfZm9vdGVyX2NvbnRhY3RfaW5mb19fXzN3ZkRqXCIsXG5cdFwiYXN1X3NlYXJjaFwiOiBcIkFTVUhlYWRlcl9fYXN1X3NlYXJjaF9fXzNtV1ZmXCIsXG5cdFwibmF2bWVudVwiOiBcIkFTVUhlYWRlcl9fbmF2bWVudV9fX0ZCcEMzXCIsXG5cdFwibWFpbi1zZWFyY2hcIjogXCJBU1VIZWFkZXJfX21haW4tc2VhcmNoX19fM09FSkhcIixcblx0XCJoaWRkZW5cIjogXCJBU1VIZWFkZXJfX2hpZGRlbl9fXzM0TEU3XCIsXG5cdFwiaWNuXCI6IFwiQVNVSGVhZGVyX19pY25fX18xZ2t6S1wiLFxuXHRcImljbjJcIjogXCJBU1VIZWFkZXJfX2ljbjJfX195bWhqSlwiLFxuXHRcImJsYWNrT3V0XCI6IFwiQVNVSGVhZGVyX19ibGFja091dF9fXzNHc2V3XCIsXG5cdFwiaW5ub3ZhdGlvbi1iYXJcIjogXCJBU1VIZWFkZXJfX2lubm92YXRpb24tYmFyX19fMmhyY3FcIixcblx0XCJpbm5vdmF0aW9uLWhpZGRlblwiOiBcIkFTVUhlYWRlcl9faW5ub3ZhdGlvbi1oaWRkZW5fX18xOGloeVwiLFxuXHRcImlubm92YXRpb24tc3RhdHVzXCI6IFwiQVNVSGVhZGVyX19pbm5vdmF0aW9uLXN0YXR1c19fX3g2WmFUXCIsXG5cdFwiaW5ub3ZhdGlvbi10b3BcIjogXCJBU1VIZWFkZXJfX2lubm92YXRpb24tdG9wX19fMm92a0FcIixcblx0XCJhc3VfaGRyX3BhcmVudF90aXRsZVwiOiBcIkFTVUhlYWRlcl9fYXN1X2hkcl9wYXJlbnRfdGl0bGVfX18xZXdQd1wiLFxuXHRcImFzdS1wYXJlbnQtb3JnXCI6IFwiQVNVSGVhZGVyX19hc3UtcGFyZW50LW9yZ19fXzJyR0pZXCIsXG5cdFwiYXN1LXNpdGUtdGl0bGVcIjogXCJBU1VIZWFkZXJfX2FzdS1zaXRlLXRpdGxlX19fM1hCT0ZcIixcblx0XCJoZWFkZXJfX3NpdGVuYW1lXCI6IFwiQVNVSGVhZGVyX19oZWFkZXJfX3NpdGVuYW1lX19fMUh0c0FcIixcblx0XCJzci1vbmx5XCI6IFwiQVNVSGVhZGVyX19zci1vbmx5X19fMzFzUDBcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHtBU1VIZWFkZXJDb250YWluZXIsIEFTVUZvb3Rlcn0gZnJvbSAnLi4vY29yZS9jb3JlLmpzJztcbmltcG9ydCB7SXRlbSwgRnVsbFBhZ2VTU1J9IGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZSc7XG5cbmNvbnN0IGNvbXBvbmVudExpc3QgPSB7XG4gICAgaGVhZGVyOiB7XG4gICAgICAgIHR5cGU6IEFTVUhlYWRlckNvbnRhaW5lcixcbiAgICAgICAgZG9tSWQ6ICdhc3UtaGVhZGVyLWNvbnRhaW5lcicsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBoZWFkZXJPYmo6IEFTVUhlYWRlck9ialxuICAgICAgICB9XG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgICAgdHlwZTogQVNVRm9vdGVyLFxuICAgICAgICBkb21JZDogJ2FzdS1mb290ZXItY29udGFpbmVyJyxcbiAgICAgICAgcHJvcHM6IHt9XG4gICAgfVxufTtcblxuXG5cbmNvbnN0IEFTVUhlYWRlck9iaiA9IHt9O1xuXG5jb25zdCByZW5kZXJBU1VDb21wb25lbnQgPSAgKHJlcSwgcmVzLCBjb21wb25lbnQpID0+IHtcblxuICAgIGNvbnN0IEFTVUNvbXBvbmVudCA9IGNvbXBvbmVudC50eXBlO1xuXG4gICAgLy8gUmVuZGVycyBjb21wb25lbnQgdG8gc3RyaW5nXG4gICAgY29uc3QgaHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKDxBU1VDb21wb25lbnQgey4uLmNvbXBvbmVudC5wcm9wc30gLz4pO1xuXG4gICAgcmV0dXJuIEl0ZW0oe1xuICAgICAgICBpZDogY29tcG9uZW50LmRvbUlkLFxuICAgICAgICBib2R5OiBodG1sXG4gICAgfSk7XG59XG5cbmNvbnN0IHJlbmRlclNTUkZ1bGxQYWdlID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gcmVuZGVyQVNVQ29tcG9uZW50KHJlcSwgcmVzLCBjb21wb25lbnRMaXN0LmhlYWRlcik7XG4gICAgY29uc3QgZm9vdGVyID0gcmVuZGVyQVNVQ29tcG9uZW50KHJlcSwgcmVzLCBjb21wb25lbnRMaXN0LmZvb3Rlcik7XG5cbiAgICByZXMuc2VuZChGdWxsUGFnZVNTUih7XG4gICAgICAgIGhlYWRlcjogaGVhZGVyLFxuICAgICAgICBmb290ZXI6IGZvb3RlcixcbiAgICAgICAgdGl0bGU6ICdUZXN0IFBhZ2UnXG4gICAgfSkpO1xufVxuXG5jb25zdCBzZW5kQVNVSGVhZGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgaHRtbCA9IHJlbmRlckFTVUNvbXBvbmVudChyZXEsIHJlcywgY29tcG9uZW50TGlzdC5oZWFkZXIpO1xuICAgIHJlcy5zZW5kKGh0bWwpO1xufTtcblxuY29uc3Qgc2VuZEFTVUZvb3RlciA9IChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGh0bWwgPSByZW5kZXJBU1VDb21wb25lbnQocmVxLCByZXMsIGNvbXBvbmVudExpc3QuZm9vdGVyKTtcbiAgICByZXMuc2VuZChodG1sKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHJlbmRlckFTVUNvbXBvbmVudCxcbiAgICBzZW5kQVNVSGVhZGVyLFxuICAgIHNlbmRBU1VGb290ZXIsXG4gICAgcmVuZGVyU1NSRnVsbFBhZ2Vcbn07IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGN0ZXN0YW1hIG9uIDQvMjUvMTguXG4gKi9cbmNvbnN0IEl0ZW0gPSAoeyBpZCwgYm9keSB9KSA9PiAoYFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgaWQ9JHtpZH0+JHtib2R5fTwvZGl2PlxuICAgIDwvZGl2PiAgXG5gKTtcblxuY29uc3QgRnVsbFBhZ2VTU1IgPSAgKHsgaGVhZGVyLCBmb290ZXIsIHRpdGxlIH0pID0+IChgXG4gIDwhRE9DVFlMRSBodG1sPlxuICA8aHRtbD5cbiAgICA8aGVhZD5cbiAgICAgIDx0aXRsZT4ke3RpdGxlfTwvdGl0bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgICNtYWluLWNvbnRlbnQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWQ+XG4gICAgPGJvZHk+XG4gICAgICA8ZGl2PiR7aGVhZGVyfTwvZGl2PlxuICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiPiA8L2Rpdj5cbiAgICA8L2JvZHk+XG4gICAgPHNjcmlwdCBjcm9zc29yaWdpbiBzcmM9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdEAxNi91bWQvcmVhY3QuZGV2ZWxvcG1lbnQuanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IGNyb3Nzb3JpZ2luIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxNi91bWQvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvY29yZS9jb3JlLmRldmVsb3BtZW50LmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdD5cbiAgICAgICAgdmFyIEFTVUhlYWRlciA9IHt9O1xuICAgIFxuICAgICAgICBBU1VIZWFkZXIuc2l0ZV9tZW51ID0ge1xuICAgICAgICAgICAganNvbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJIb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6XCJodHRwOi8vd3d3LmFzdS5lZHUvYWJzb2x1dGVfcGF0aFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiRGVncmVlIFByb2dyYW1zXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6XCIvYWJzb2x1dGVfcGF0aC9wYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJBZG1pc3Npb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDpcIi8/dXJsPXZhcmlhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJTdHVkZW50IExpZmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6XCIvI2hhc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIlJvc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOlwiaHR0cHM6Ly93d3cuYXN1LmVkdS9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKEFTVW5pdHksICdBU1VOSVRZJyk7XG4gICAgXG4gICAgICAgIEFTVUhlYWRlci5zaXRlX3RpdGxlID0ge3RpdGxlOiBcIkFTVSBDdXN0b20gU2l0ZSBUaXRsZVwiLCBwYXJlbnRfb3JnOiBcIkFTVSBDdXN0b20gUGFyZW50IE9yZ1wiLCBzaXRlX3VybDogXCJodHRwczovL2FzdS5lZHVcIiwgcGFyZW50X29yZ191cmw6IFwiaHR0cHM6Ly91dG8uYXN1LmVkdVwifTtcbiAgICAgICAgXG4gICAgICAgIFJlYWN0RE9NLmh5ZHJhdGUoUmVhY3QuY3JlYXRlRWxlbWVudChBU1VuaXR5LmNvcmUuQVNVSGVhZGVyQ29udGFpbmVyLCB7aGVhZGVyT2JqOiBBU1VIZWFkZXJ9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc3UtaGVhZGVyLWNvbnRhaW5lclwiKSk7XG4gICAgPC9zY3JpcHQ+XG4gICAgXG4gICAgPGZvb3Rlcj5cbiAgICAgICAgJHtmb290ZXJ9XG4gICAgPC9mb290ZXI+XG4gIDwvaHRtbD5cbmApO1xuXG5leHBvcnQge0l0ZW0sIEZ1bGxQYWdlU1NSfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=