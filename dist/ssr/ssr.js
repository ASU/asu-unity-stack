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

var _ASUNav3 = __webpack_require__(/*! ./ASUNav.json */ "./core/components/ASUNav.json");

var _ASUNav4 = _interopRequireDefault(_ASUNav3);

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
                        _react2.default.createElement(_ASUNav2.default, { nav: _ASUNav4.default }),
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

/***/ "./core/components/ASULink.js":
/*!************************************!*\
  !*** ./core/components/ASULink.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ASULink = function ASULink(props) {
    return React.createElement(
        "a",
        { href: props.href, title: props.title, target: props.target, className: props.classes },
        props.text
    );
};

exports.default = ASULink;

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASULogin = __webpack_require__(/*! ./ASULogin */ "./core/components/ASULogin.js");

var _ASULogin2 = _interopRequireDefault(_ASULogin);

var _ASULink = __webpack_require__(/*! ./ASULink */ "./core/components/ASULink.js");

var _ASULink2 = _interopRequireDefault(_ASULink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASUNav = function ASUNav(props) {

    var navMenu = renderNav(props.nav);

    return _react2.default.createElement(
        'div',
        { id: 'asu_nav_wrapper' },
        _react2.default.createElement(_ASULogin2.default, null),
        _react2.default.createElement(
            'div',
            { id: 'asu_nav_menu', role: 'navigation', 'aria-label': 'ASU' },
            _react2.default.createElement(
                'div',
                { id: 'asu_universal_nav' },
                navMenu
            )
        )
    );
};

var renderNav = function renderNav(nav) {
    return nav.map(function (item) {
        return renderItem(item);
    });
};

var renderItem = function renderItem(item) {

    var children = item.children ? renderNav(item.children) : '';

    return _react2.default.createElement(
        'li',
        { key: item.href },
        _react2.default.createElement(_ASULink2.default, item),
        children && _react2.default.createElement(
            'ul',
            null,
            children
        )
    );
};

exports.default = ASUNav;

/***/ }),

/***/ "./core/components/ASUNav.json":
/*!*************************************!*\
  !*** ./core/components/ASUNav.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = [{"title":"","text":"ASU Home","href":"https://www.asu.edu/","classes":"parent","children":[{"classes":"first","href":"https://www.asu.edu/?feature=newsevents","target":"_top","title":"News and Events","text":"News/Events"},{"href":"https://www.asu.edu/?feature=academics","target":"_top","title":"Academics","text":"Academics"},{"href":"https://www.asu.edu/?feature=research","target":"_top","title":"Research","text":"Research"},{"href":"https://www.asu.edu/?feature=athletics","target":"_top","title":"Athletics","text":"Athletics"},{"href":"https://www.asu.edu/?feature=alumni","target":"_top","title":"Alumni","text":"Alumni"},{"href":"https://www.asu.edu/?feature=giving","target":"_top","title":"Giving","text":"Giving"},{"href":"https://www.asu.edu/?feature=president","target":"_top","title":"President","text":"President"},{"href":"https://www.asu.edu/about","target":"_top","title":"About ASU","text":"About ASU"}]},{"title":"","text":"My ASU","href":"https://my.asu.edu/","target":"_top"},{"title":"","classes":"parent","text":"Map and Locations","href":"https://www.asu.edu/map/","target":"_top","children":[{"classes":"first","href":"https://artsandsciences.asu.edu/","target":"_top","title":"Arts and Sciences website","text":"Arts and Sciences"},{"href":"https://wpcarey.asu.edu/","target":"_top","title":"W. P. Carey School of Business Web and Morrison School of Agribusiness website","text":"Business"},{"href":"https://herbergerinstitute.asu.edu","target":"_top","title":"Herberger Institute for Design and the Arts website","text":"Design and the Arts"},{"href":"https://education.asu.edu/","target":"_top","title":"Mary Lou Fulton Teachers College website","text":"Education"},{"href":"https://engineering.asu.edu/","target":"_top","title":"Engineering website","text":"Engineering"},{"href":"https://sfis.asu.edu/","target":"_top","title":"Future of Innovation in Society website","text":"Future of Innovation in Society"},{"href":"https://graduate.asu.edu","target":"_top","title":"Graduate College website","text":"Graduate"},{"href":"https://chs.asu.edu/","target":"_top","title":"Health Solutions website","text":"Health Solutions"},{"href":"https://honors.asu.edu/","target":"_top","title":"Barrett, The Honors College website","text":"Honors"},{"href":"https://cronkite.asu.edu","target":"_top","title":"Walter Cronkite School of Journalism and Mass Communication website","text":"Journalism"},{"href":"https://www.law.asu.edu/","target":"_top","title":"Sandra Day O' Connor College of Law website","text":"Law"},{"href":"https://nursingandhealth.asu.edu/","target":"_top","title":"College of Nursing and Health Innovation website","text":"Nursing and Health Innovation"},{"href":"//copp.asu.edu","target":"_top","title":"College of Public Programs website","text":"Public Service and Community Solutions"},{"href":"https://schoolofsustainability.asu.edu","target":"_top","title":"School of Sustainability website","text":"Sustainability"},{"href":"//uc.asu.edu/","target":"_top","title":"University College website","text":"University College"},{"href":"https://www.thunderbird.edu/","target":"_top","title":"Thunderbird School of Global Management website","text":"Thunderbird School of Global Management"}]},{"title":"","classes":"parent","text":"Map and Locations","href":"https://www.asu.edu/map/","target":"_top","children":[{"classes":"border first","href":"https://www.asu.edu/map/","target":"_top","title":"","text":"Map"},{"href":"https://campus.asu.edu/tempe/","target":"_top","title":"Tempe campus","text":"Tempe"},{"href":"https://campus.asu.edu/west/","target":"_top","title":"West campus","text":"West"},{"href":"https://campus.asu.edu/polytechnic/","target":"_top","title":"Polytechnic campus","text":"Polytechnic"},{"href":"https://campus.asu.edu/downtown/","target":"_top","title":"Downtown Phoenix campus","text":"Downtown Phoenix"},{"href":"https://asuonline.asu.edu/","target":"_top","title":"Online and Extended campus","text":"Online and Extended"},{"href":"https://havasu.asu.edu/","target":"_top","title":"","text":"Lake Havasu"},{"href":"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona","target":"_top","classes":"border","title":"","text":"Thunderbird"},{"href":"https://skysong.asu.edu/","target":"_top","title":"","text":"Skysong"},{"href":"https://asuresearchpark.com/","target":"_top","title":"","text":"Research Park"},{"href":"https://washingtoncenter.asu.edu/","target":"_top","title":"","text":"Washington D.C."},{"href":"https://wpcarey.asu.edu/mba/china-program/english/","target":"_top","title":"","text":"China"}]},{"title":"Directory, Index and other info","text":"Directory","href":"https://isearch.asu.edu/","target":"_top"}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9BU1VIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVUhlYWRlckNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVTGluay5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVU5hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVU2VhcmNoQm94LmpzIiwid2VicGFjazovLy8uL2NvcmUvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3N0eWxlcy9BU1VIZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3Nzci9TU1IuanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIl0sIm5hbWVzIjpbIkFTVUZvb3RlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJBU1VIZWFkZXIiLCJzdGF0ZSIsInJlbmRlckNsaWVudCIsImFzdV9oZHJfd2hpdGUiLCJ0b2dnbGVBU1UiLCJwcm9wcyIsImhlYWRlck9iaiIsInNpdGVfdGl0bGUiLCJwYXJlbnRfb3JnX3VybCIsInBhcmVudF9vcmciLCJzaXRlX3VybCIsInRpdGxlIiwic2V0U3RhdGUiLCJBU1VIZWFkZXJDb250YWluZXIiLCJBU1VMaW5rIiwiaHJlZiIsInRhcmdldCIsImNsYXNzZXMiLCJ0ZXh0IiwiQVNVTG9naW4iLCJBU1VOYXYiLCJuYXZNZW51IiwicmVuZGVyTmF2IiwibmF2IiwibWFwIiwicmVuZGVySXRlbSIsIml0ZW0iLCJjaGlsZHJlbiIsIkFTVVNlYXJjaEJveCIsImRydXBhbCIsImluaXRBU1VIZWFkZXIiLCJhc3VfaGVhZGVyIiwiZWxlbWVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiY29tcG9uZW50TGlzdCIsImhlYWRlciIsInR5cGUiLCJkb21JZCIsIkFTVUhlYWRlck9iaiIsImZvb3RlciIsInJlbmRlckFTVUNvbXBvbmVudCIsInJlcSIsInJlcyIsImNvbXBvbmVudCIsIkFTVUNvbXBvbmVudCIsImh0bWwiLCJyZW5kZXJUb1N0cmluZyIsImlkIiwiYm9keSIsInJlbmRlclNTUkZ1bGxQYWdlIiwic2VuZCIsInNlbmRBU1VIZWFkZXIiLCJzZW5kQVNVRm9vdGVyIiwiSXRlbSIsIkZ1bGxQYWdlU1NSIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUNGLHlCQUFjO0FBQUE7O0FBQUE7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QUFBQSxRQUFXSSxNQUFYLFNBQVdBLE1BQVg7QUFBQSxRQUFtQjdCLEtBQW5CLFNBQW1CQSxLQUFuQjtBQUFBLHdFQUlOQSxLQUpNLHdKQVlSeUIsTUFaUSwrd0RBMERYSSxNQTFEVztBQUFBLENBQXJCOztRQStEUWMsSSxHQUFBQSxJO1FBQU1DLFcsR0FBQUEsVzs7Ozs7Ozs7Ozs7QUN4RWQsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic3NyL3Nzci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShnbG9iYWwsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgd2FzbSBtb2R1bGVzXG4gXHR2YXIgaW5zdGFsbGVkV2FzbU1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9iamVjdCB3aXRoIGFsbCBjb21waWxlZCBXZWJBc3NlbWJseS5Nb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLncgPSB7fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zc3IvU1NSLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBBU1VGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJpbm5vdmF0aW9uLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbm5vdmF0aW9uLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubm92YXRpb24tdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubm92YXRpb24tc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvcmFua2luZ3NcIj48c3Bhbj5BU1UgaXMgIzEgaW4gdGhlIFUuUy4gZm9yIElubm92YXRpb248L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubm92YXRpb24taGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvcmFua2luZ3NcIj48aW1nIHNyYz1cIi8vd3d3LWRldi5hc3UuZWR1L2FzdXRoZW1lcy80LjYvYXNzZXRzL2Jlc3QtY29sbGVnZS0yMDE4LnBuZ1wiIGFsdD1cIkJlc3QgQ29sbGVnZXMgVS5TLiBOZXdzIE1vc3QgSW5ub3ZhdGl2ZSAyMDE4XCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L2NvcHlyaWdodC9cIj5Db3B5cmlnaHQgYW5kIFRyYWRlbWFyazwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L2FjY2Vzc2liaWxpdHkvXCI+QWNjZXNzaWJpbGl0eTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L3ByaXZhY3kvXCI+UHJpdmFjeTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L3RvdS9cIj5UZXJtcyBvZiBVc2U8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9hc3Vqb2JzXCI+Sm9iczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L2VtZXJnZW5jeS9cIj5FbWVyZ2VuY3k8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuby1ib3JkZXJcIj48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9jb250YWN0YXN1L1wiPkNvbnRhY3QgQVNVPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQVNVRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFTVVNlYXJjaEJveCBmcm9tIFwiLi9BU1VTZWFyY2hCb3hcIjtcbmltcG9ydCBBU1VOYXYgZnJvbSBcIi4vQVNVTmF2XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9BU1VIZWFkZXIuY3NzJztcbmltcG9ydCBuYXZ0cmVlIGZyb20gJy4vQVNVTmF2Lmpzb24nO1xuXG5jbGFzcyBBU1VIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge3JlbmRlckNsaWVudDogZmFsc2V9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tc2VhcmNoXCIgY2xhc3NOYW1lPVwibWFpbi1zZWFyY2ggY2xvc2VkXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY2Vzc2liaWxpdHktaGlkZVwiPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L2FjY2Vzc2liaWxpdHkvXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlJlcG9ydCBhbiBhY2Nlc3NpYmlsaXR5IHByb2JsZW08L2E+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9oZHJcIiBjbGFzc05hbWU9e3N0eWxlcy5hc3VfaGRyX3doaXRlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9tb2JpbGVfaGRyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXN1X2xvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLy93d3cuYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiQSBTIFVcIiBzcmM9XCIvL3d3dy5hc3UuZWR1L2FzdXRoZW1lcy80LjYvYXNzZXRzL2Z1bGxfbG9nby5wbmdcIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3VoaWRlIGYtbmF2aWNvblwiIGlkPVwiYXN1X21vYmlsZV9idXR0b25cIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFTVSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDpBU1VIZWFkZXIudG9nZ2xlQVNVKCk7XCI+TWVudTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmLXNlYXJjaFwiIGlkPVwic2VhcmNoX25ld1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQVNVKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlZFwiIGlkPVwiYXN1X21vYmlsZV9tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QVNVTmF2IG5hdj17bmF2dHJlZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFTVVNlYXJjaEJveC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlbmRlckNsaWVudCAmJiB0aGlzLnByb3BzLmhlYWRlck9iai5zaXRlX3RpdGxlICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19zaXRlbmFtZVwiIGlkPVwiYXN1X2hkcl90aXRsZV9nZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhc3VfaGRyX3BhcmVudF90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3RoaXMucHJvcHMuaGVhZGVyT2JqLnNpdGVfdGl0bGUucGFyZW50X29yZ191cmx9PjxzcGFuIGNsYXNzTmFtZT1cImFzdS1wYXJlbnQtb3JnXCI+e3RoaXMucHJvcHMuaGVhZGVyT2JqLnNpdGVfdGl0bGUucGFyZW50X29yZ308L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiSG9tZVwiIHJlbD1cImhvbWVcIiBocmVmPXt0aGlzLnByb3BzLmhlYWRlck9iai5zaXRlX3RpdGxlLnNpdGVfdXJsfT48c3BhbiBjbGFzc05hbWU9XCJhc3Utc2l0ZS10aXRsZVwiPnt0aGlzLnByb3BzLmhlYWRlck9iai5zaXRlX3RpdGxlLnRpdGxlfTwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyQ2xpZW50OiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZUFTVSgpIHtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQVNVSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFTVUhlYWRlciBmcm9tIFwiLi9BU1VIZWFkZXJcIjtcblxuY2xhc3MgQVNVSGVhZGVyQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGhlYWRlciBpZD1cImFzdS1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEFTVUhlYWRlclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJPYmo9e3RoaXMucHJvcHMuaGVhZGVyT2JqfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBU1VIZWFkZXJDb250YWluZXI7XG4iLCJjb25zdCBBU1VMaW5rID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGhyZWY9e3Byb3BzLmhyZWZ9IHRpdGxlPXtwcm9wcy50aXRsZX0gdGFyZ2V0PXtwcm9wcy50YXJnZXR9IGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlc30+XG4gICAgICAgICAgICB7cHJvcHMudGV4dH1cbiAgICAgICAgPC9hPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBU1VMaW5rOyIsIi8qKlxuICogQ3JlYXRlZCBieSBjdGVzdGFtYSBvbiA0LzE4LzE4LlxuICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEFTVUxvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBJbiAvIFNpZ24gT3V0XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDx1bCBpZD1cImFzdV9sb2dpbl9tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImVuZFwiIGlkPVwiYXN1X2hkcl9zc2lcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvL3dlYmxvZ2luLmFzdS5lZHUvY2dpLWJpbi9sb2dpblwiIHRhcmdldD1cIl90b3BcIj5TaWduIEluPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFTVUxvZ2luOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VMb2dpbiBmcm9tICcuL0FTVUxvZ2luJztcbmltcG9ydCBBU1VMaW5rIGZyb20gJy4vQVNVTGluaydcblxuY29uc3QgQVNVTmF2ID0gcHJvcHMgPT4ge1xuXG4gICAgY29uc3QgbmF2TWVudSA9IHJlbmRlck5hdihwcm9wcy5uYXYpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cImFzdV9uYXZfd3JhcHBlclwiPlxuICAgICAgICAgICAgPEFTVUxvZ2luLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhc3VfbmF2X21lbnVcIiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJBU1VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXN1X3VuaXZlcnNhbF9uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAge25hdk1lbnV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmNvbnN0IHJlbmRlck5hdiA9IG5hdiA9PiAoXG4gICAgbmF2Lm1hcChpdGVtID0+IHJlbmRlckl0ZW0oaXRlbSkpXG4pO1xuXG5jb25zdCByZW5kZXJJdGVtID0gaXRlbSA9PiB7XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW4gPyByZW5kZXJOYXYoaXRlbS5jaGlsZHJlbikgOiAnJztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBrZXk9e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICA8QVNVTGluayB7Li4uaXRlbX0vPlxuICAgICAgICAgICAge2NoaWxkcmVuICYmXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9saT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQVNVTmF2OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQVNVU2VhcmNoQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZHJ1cGFsKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhc3Vfc2VhcmNoX21vZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGlkZGVuXCI+U2VhcmNoPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJnb29nbGUvYXBwbGlhbmNlL2Jsb2NrL2Zvcm1cIiBtZXRob2Q9XCJwb3N0XCIgX2xwY2hlY2tlZD1cIjFcIj48bGFiZWwgaHRtbEZvcj1cIm1hc3Vfc2VhcmNoX2JveFwiPlNlYXJjaDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaF9oZWFkZXJcIiBjbGFzcz1cImFzdV9zZWFyY2hfYm94XCIgaWQ9XCJtYXN1X3NlYXJjaF9ib3hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFzdV9zZWFyY2hfYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhc3Vfc2VhcmNoX21vZHVsZVwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoaWRkZW5cIj5TZWFyY2g8L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtIHRhcmdldD1cIl90b3BcIiBhY3Rpb249XCJodHRwczovL3NlYXJjaC5hc3UuZWR1L3NlYXJjaFwiIG1ldGhvZD1cImdldFwiIG5hbWU9XCJnc1wiIHJvbGU9XCJzZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYXN1X3NlYXJjaF9ib3hcIj5TZWFyY2g8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNpdGVcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJkZWZhdWx0X2NvbGxlY3Rpb25cIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic29ydFwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cImRhdGU6RDpMOmQxXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm91dHB1dFwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cInhtbF9ub19kdGRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicHJveHlzdHlsZXNoZWV0XCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiYXN1X2Zyb250ZW5kXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImllXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiVVRGLThcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwib2VcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJVVEYtOFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJjbGllbnRcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJhc3VfZnJvbnRlbmRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhc3Vfc2VhcmNoX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlYXJjaFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJxXCIgY2xhc3NOYW1lPVwiYXN1X3NlYXJjaF9ib3hcIiBpZD1cIm1hc3Vfc2VhcmNoX2JveFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQVNVU2VhcmNoQm94OyIsIi8qKlxuICogQ3JlYXRlZCBieSBjdGVzdGFtYSBvbiAzLzIxLzE4LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VOYXYgZnJvbSAnLi9jb21wb25lbnRzL0FTVU5hdidcbmltcG9ydCBBU1VGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0FTVUZvb3RlcidcbmltcG9ydCBBU1VIZWFkZXJDb250YWluZXIgZnJvbSBcIi4vY29tcG9uZW50cy9BU1VIZWFkZXJDb250YWluZXJcIjtcbmltcG9ydCBBU1VIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9BU1VIZWFkZXJcIjtcblxuY29uc3QgaW5pdEFTVUhlYWRlciA9IChhc3VfaGVhZGVyLCBlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudCA/IFJlYWN0RE9NLnJlbmRlcig8QVNVSGVhZGVyQ29udGFpbmVyIGhlYWRlck9iaj17YXN1X2hlYWRlcn0gLz4sIGVsZW1lbnQpIDogZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0QVNVSGVhZGVyLFxuICAgIEFTVUhlYWRlckNvbnRhaW5lcixcbiAgICBBU1VIZWFkZXIsXG4gICAgQVNVTmF2LFxuICAgIEFTVUZvb3RlclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhc3VfdW5pdmVyc2FsX25hdl9uZXdcIjogXCJBU1VIZWFkZXJfX2FzdV91bml2ZXJzYWxfbmF2X25ld19fXzN2TlctXCIsXG5cdFwiYXN1X2hkcl93aGl0ZVwiOiBcIkFTVUhlYWRlcl9fYXN1X2hkcl93aGl0ZV9fXzFVVVBaXCIsXG5cdFwiY2xvc2VkXCI6IFwiQVNVSGVhZGVyX19jbG9zZWRfX18yRTJBLVwiLFxuXHRcImFzdV9oZHJcIjogXCJBU1VIZWFkZXJfX2FzdV9oZHJfX18yLU1GLVwiLFxuXHRcImFzdV9sb2dvXCI6IFwiQVNVSGVhZGVyX19hc3VfbG9nb19fXzNySWZZXCIsXG5cdFwiYXN1X21vYmlsZV9oZHJcIjogXCJBU1VIZWFkZXJfX2FzdV9tb2JpbGVfaGRyX19fMVFZUHdcIixcblx0XCJhc3VfbW9iaWxlX2J1dHRvblwiOiBcIkFTVUhlYWRlcl9fYXN1X21vYmlsZV9idXR0b25fX192Y1ZCblwiLFxuXHRcImFzdV9wcmludF9sb2dvXCI6IFwiQVNVSGVhZGVyX19hc3VfcHJpbnRfbG9nb19fXzM3cWdPXCIsXG5cdFwiYXN1X25hdl93cmFwcGVyXCI6IFwiQVNVSGVhZGVyX19hc3VfbmF2X3dyYXBwZXJfX18ySHJONFwiLFxuXHRcImFzdV9uYXZfbWVudVwiOiBcIkFTVUhlYWRlcl9fYXN1X25hdl9tZW51X19fM2FTSi1cIixcblx0XCJhc3VfdW5pdmVyc2FsX25hdlwiOiBcIkFTVUhlYWRlcl9fYXN1X3VuaXZlcnNhbF9uYXZfX18zcTN4bVwiLFxuXHRcImFzdV9oZWFkX2hvdmVyXCI6IFwiQVNVSGVhZGVyX19hc3VfaGVhZF9ob3Zlcl9fXzE5Y0tLXCIsXG5cdFwicGFyZW50XCI6IFwiQVNVSGVhZGVyX19wYXJlbnRfX18xUWZmb1wiLFxuXHRcImJvcmRlclwiOiBcIkFTVUhlYWRlcl9fYm9yZGVyX19fM2dpWU1cIixcblx0XCJhc3VfdG91Y2hcIjogXCJBU1VIZWFkZXJfX2FzdV90b3VjaF9fXzFVMWJNXCIsXG5cdFwiYXN1X2xvZ2luX21vZHVsZVwiOiBcIkFTVUhlYWRlcl9fYXN1X2xvZ2luX21vZHVsZV9fXzFEd1gyXCIsXG5cdFwiZW5kXCI6IFwiQVNVSGVhZGVyX19lbmRfX18zSDV0WlwiLFxuXHRcImFzdV9zZWFyY2hfbW9kdWxlXCI6IFwiQVNVSGVhZGVyX19hc3Vfc2VhcmNoX21vZHVsZV9fXzNwNXYxXCIsXG5cdFwiYXN1X3NlYXJjaF9ib3hcIjogXCJBU1VIZWFkZXJfX2FzdV9zZWFyY2hfYm94X19fM1BEa2xcIixcblx0XCJtYXN1X3NlYXJjaF9ib3hcIjogXCJBU1VIZWFkZXJfX21hc3Vfc2VhcmNoX2JveF9fXzNIVFVfXCIsXG5cdFwiYXN1X3NlYXJjaF9idXR0b25cIjogXCJBU1VIZWFkZXJfX2FzdV9zZWFyY2hfYnV0dG9uX19fM2pUMm1cIixcblx0XCJteWFzdV9iYXJcIjogXCJBU1VIZWFkZXJfX215YXN1X2Jhcl9fX2JlTWNoXCIsXG5cdFwibXlhc3VfdGV4dFwiOiBcIkFTVUhlYWRlcl9fbXlhc3VfdGV4dF9fXzNtN09ZXCIsXG5cdFwibXlhc3VfYXJyb3dcIjogXCJBU1VIZWFkZXJfX215YXN1X2Fycm93X19fMnN5TlFcIixcblx0XCJhc3VfZm9vdGVyXCI6IFwiQVNVSGVhZGVyX19hc3VfZm9vdGVyX19fMk5MTU5cIixcblx0XCJhc3VfZm9vdGVyX2NvbnRhY3RfaW5mb1wiOiBcIkFTVUhlYWRlcl9fYXN1X2Zvb3Rlcl9jb250YWN0X2luZm9fX18zd2ZEalwiLFxuXHRcImFzdV9zZWFyY2hcIjogXCJBU1VIZWFkZXJfX2FzdV9zZWFyY2hfX18zbVdWZlwiLFxuXHRcIm5hdm1lbnVcIjogXCJBU1VIZWFkZXJfX25hdm1lbnVfX19GQnBDM1wiLFxuXHRcIm1haW4tc2VhcmNoXCI6IFwiQVNVSGVhZGVyX19tYWluLXNlYXJjaF9fXzNPRUpIXCIsXG5cdFwiaGlkZGVuXCI6IFwiQVNVSGVhZGVyX19oaWRkZW5fX18zNExFN1wiLFxuXHRcImljblwiOiBcIkFTVUhlYWRlcl9faWNuX19fMWdrektcIixcblx0XCJpY24yXCI6IFwiQVNVSGVhZGVyX19pY24yX19feW1oakpcIixcblx0XCJibGFja091dFwiOiBcIkFTVUhlYWRlcl9fYmxhY2tPdXRfX18zR3Nld1wiLFxuXHRcImlubm92YXRpb24tYmFyXCI6IFwiQVNVSGVhZGVyX19pbm5vdmF0aW9uLWJhcl9fXzJocmNxXCIsXG5cdFwiaW5ub3ZhdGlvbi1oaWRkZW5cIjogXCJBU1VIZWFkZXJfX2lubm92YXRpb24taGlkZGVuX19fMThpaHlcIixcblx0XCJpbm5vdmF0aW9uLXN0YXR1c1wiOiBcIkFTVUhlYWRlcl9faW5ub3ZhdGlvbi1zdGF0dXNfX194NlphVFwiLFxuXHRcImlubm92YXRpb24tdG9wXCI6IFwiQVNVSGVhZGVyX19pbm5vdmF0aW9uLXRvcF9fXzJvdmtBXCIsXG5cdFwiYXN1X2hkcl9wYXJlbnRfdGl0bGVcIjogXCJBU1VIZWFkZXJfX2FzdV9oZHJfcGFyZW50X3RpdGxlX19fMWV3UHdcIixcblx0XCJhc3UtcGFyZW50LW9yZ1wiOiBcIkFTVUhlYWRlcl9fYXN1LXBhcmVudC1vcmdfX18yckdKWVwiLFxuXHRcImFzdS1zaXRlLXRpdGxlXCI6IFwiQVNVSGVhZGVyX19hc3Utc2l0ZS10aXRsZV9fXzNYQk9GXCIsXG5cdFwiaGVhZGVyX19zaXRlbmFtZVwiOiBcIkFTVUhlYWRlcl9faGVhZGVyX19zaXRlbmFtZV9fXzFIdHNBXCIsXG5cdFwic3Itb25seVwiOiBcIkFTVUhlYWRlcl9fc3Itb25seV9fXzMxc1AwXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTVNlcnZlciBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7QVNVSGVhZGVyQ29udGFpbmVyLCBBU1VGb290ZXJ9IGZyb20gJy4uL2NvcmUvY29yZS5qcyc7XG5pbXBvcnQge0l0ZW0sIEZ1bGxQYWdlU1NSfSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGUnO1xuXG5jb25zdCBjb21wb25lbnRMaXN0ID0ge1xuICAgIGhlYWRlcjoge1xuICAgICAgICB0eXBlOiBBU1VIZWFkZXJDb250YWluZXIsXG4gICAgICAgIGRvbUlkOiAnYXN1LWhlYWRlci1jb250YWluZXInLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaGVhZGVyT2JqOiBBU1VIZWFkZXJPYmpcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICAgIHR5cGU6IEFTVUZvb3RlcixcbiAgICAgICAgZG9tSWQ6ICdhc3UtZm9vdGVyLWNvbnRhaW5lcicsXG4gICAgICAgIHByb3BzOiB7fVxuICAgIH1cbn07XG5cblxuXG5jb25zdCBBU1VIZWFkZXJPYmogPSB7fTtcblxuY29uc3QgcmVuZGVyQVNVQ29tcG9uZW50ID0gIChyZXEsIHJlcywgY29tcG9uZW50KSA9PiB7XG5cbiAgICBjb25zdCBBU1VDb21wb25lbnQgPSBjb21wb25lbnQudHlwZTtcblxuICAgIC8vIFJlbmRlcnMgY29tcG9uZW50IHRvIHN0cmluZ1xuICAgIGNvbnN0IGh0bWwgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyg8QVNVQ29tcG9uZW50IHsuLi5jb21wb25lbnQucHJvcHN9IC8+KTtcblxuICAgIHJldHVybiBJdGVtKHtcbiAgICAgICAgaWQ6IGNvbXBvbmVudC5kb21JZCxcbiAgICAgICAgYm9keTogaHRtbFxuICAgIH0pO1xufVxuXG5jb25zdCByZW5kZXJTU1JGdWxsUGFnZSA9IChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IHJlbmRlckFTVUNvbXBvbmVudChyZXEsIHJlcywgY29tcG9uZW50TGlzdC5oZWFkZXIpO1xuICAgIGNvbnN0IGZvb3RlciA9IHJlbmRlckFTVUNvbXBvbmVudChyZXEsIHJlcywgY29tcG9uZW50TGlzdC5mb290ZXIpO1xuXG4gICAgcmVzLnNlbmQoRnVsbFBhZ2VTU1Ioe1xuICAgICAgICBoZWFkZXI6IGhlYWRlcixcbiAgICAgICAgZm9vdGVyOiBmb290ZXIsXG4gICAgICAgIHRpdGxlOiAnVGVzdCBQYWdlJ1xuICAgIH0pKTtcbn1cblxuY29uc3Qgc2VuZEFTVUhlYWRlciA9IChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGh0bWwgPSByZW5kZXJBU1VDb21wb25lbnQocmVxLCByZXMsIGNvbXBvbmVudExpc3QuaGVhZGVyKTtcbiAgICByZXMuc2VuZChodG1sKTtcbn07XG5cbmNvbnN0IHNlbmRBU1VGb290ZXIgPSAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBodG1sID0gcmVuZGVyQVNVQ29tcG9uZW50KHJlcSwgcmVzLCBjb21wb25lbnRMaXN0LmZvb3Rlcik7XG4gICAgcmVzLnNlbmQoaHRtbCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICByZW5kZXJBU1VDb21wb25lbnQsXG4gICAgc2VuZEFTVUhlYWRlcixcbiAgICBzZW5kQVNVRm9vdGVyLFxuICAgIHJlbmRlclNTUkZ1bGxQYWdlXG59OyIsIi8qKlxuICogQ3JlYXRlZCBieSBjdGVzdGFtYSBvbiA0LzI1LzE4LlxuICovXG5jb25zdCBJdGVtID0gKHsgaWQsIGJvZHkgfSkgPT4gKGBcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGlkPSR7aWR9PiR7Ym9keX08L2Rpdj5cbiAgICA8L2Rpdj4gIFxuYCk7XG5cbmNvbnN0IEZ1bGxQYWdlU1NSID0gICh7IGhlYWRlciwgZm9vdGVyLCB0aXRsZSB9KSA9PiAoYFxuICA8IURPQ1RZTEUgaHRtbD5cbiAgPGh0bWw+XG4gICAgPGhlYWQ+XG4gICAgICA8dGl0bGU+JHt0aXRsZX08L3RpdGxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAjbWFpbi1jb250ZW50IHtcbiAgICAgICAgICAgIGhlaWdodDogMTIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9oZWFkPlxuICAgIDxib2R5PlxuICAgICAgPGRpdj4ke2hlYWRlcn08L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRlbnRcIj4gPC9kaXY+XG4gICAgPC9ib2R5PlxuICAgIDxzY3JpcHQgY3Jvc3NvcmlnaW4gc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3RAMTYvdW1kL3JlYWN0LmRldmVsb3BtZW50LmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBjcm9zc29yaWdpbiBzcmM9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdC1kb21AMTYvdW1kL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL2NvcmUvY29yZS5kZXZlbG9wbWVudC5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQ+XG4gICAgICAgIHZhciBBU1VIZWFkZXIgPSB7fTtcbiAgICBcbiAgICAgICAgQVNVSGVhZGVyLnNpdGVfbWVudSA9IHtcbiAgICAgICAgICAgIGpzb246IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiSG9tZVwiLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOlwiaHR0cDovL3d3dy5hc3UuZWR1L2Fic29sdXRlX3BhdGhcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIkRlZ3JlZSBQcm9ncmFtc1wiLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOlwiL2Fic29sdXRlX3BhdGgvcGFnZVwiLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiQWRtaXNzaW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6XCIvP3VybD12YXJpYWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiU3R1ZGVudCBMaWZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOlwiLyNoYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJSb3NzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDpcImh0dHBzOi8vd3d3LmFzdS5lZHUvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhBU1VuaXR5LCAnQVNVTklUWScpO1xuICAgIFxuICAgICAgICBBU1VIZWFkZXIuc2l0ZV90aXRsZSA9IHt0aXRsZTogXCJBU1UgQ3VzdG9tIFNpdGUgVGl0bGVcIiwgcGFyZW50X29yZzogXCJBU1UgQ3VzdG9tIFBhcmVudCBPcmdcIiwgc2l0ZV91cmw6IFwiaHR0cHM6Ly9hc3UuZWR1XCIsIHBhcmVudF9vcmdfdXJsOiBcImh0dHBzOi8vdXRvLmFzdS5lZHVcIn07XG4gICAgICAgIFxuICAgICAgICBSZWFjdERPTS5oeWRyYXRlKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQVNVbml0eS5jb3JlLkFTVUhlYWRlckNvbnRhaW5lciwge2hlYWRlck9iajogQVNVSGVhZGVyfSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXN1LWhlYWRlci1jb250YWluZXJcIikpO1xuICAgIDwvc2NyaXB0PlxuICAgIFxuICAgIDxmb290ZXI+XG4gICAgICAgICR7Zm9vdGVyfVxuICAgIDwvZm9vdGVyPlxuICA8L2h0bWw+XG5gKTtcblxuZXhwb3J0IHtJdGVtLCBGdWxsUGFnZVNTUn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9