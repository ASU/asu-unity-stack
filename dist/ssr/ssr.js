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
  !*** ./core/components/ASUBrandHeader.js ***!
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

var _ASUHeaderContainer = __webpack_require__(/*! ./components/ASUBrandHeader */ "./core/components/ASUBrandHeader.js");

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
    return "\n  <!DOCTYLE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n      <style>\n        #main-content {\n            height: 1200px;\n        }\n        </style>\n    </head>\n    <body>\n      <div>" + header + "</div>\n      <div id=\"main-content\"> </div>\n    </body>\n    <script crossorigin src=\"https://unpkg.com/react@16/umd/react.development.js\"></script>\n    <script crossorigin src=\"https://unpkg.com/react-dom@16/umd/react-dom.development.js\"></script>\n    <script src=\"/core/core.development.js\"></script>\n    <script>\n        var ASUHeader = {};\n    \n        ASUHeader.site_menu = {\n            json: [\n                {\n                    title:\"Home\",\n                    path:\"http://www.asu.edu/absolute_path\"\n                },\n                {\n                    title:\"Degree Programs\",\n                    path:\"/absolute_path/page\",\n                    children: [\n                        {\n                            title:\"Admissions\",\n                            path:\"/?url=variable\",\n                            children: [\n                                {\n                                    title:\"Student Life\",\n                                    path:\"/#hash\"\n                                }\n                            ]\n                        },\n                        {\n                            title:\"Ross\",\n                            path:\"https://www.asu.edu/\"\n                        }\n                    ]\n                },\n            ]\n        };\n        \n        console.log(ASUnity, 'ASUNITY');\n    \n        ASUHeader.site_title = {title: \"ASU Custom Site Title\", parent_org: \"ASU Custom Parent Org\", site_url: \"https://asu.edu\", parent_org_url: \"https://uto.asu.edu\"};\n        \n        ReactDOM.hydrate(React.createElement(ASUnity.core.ASUBrandHeader, {headerObj: ASUHeader}), document.getElementById(\"asu-header-container\"));\n    </script>\n    \n    <footer>\n        " + footer + "\n    </footer>\n  </html>\n";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9BU1VIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVUhlYWRlckNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVTGluay5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVU5hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVU2VhcmNoQm94LmpzIiwid2VicGFjazovLy8uL2NvcmUvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3N0eWxlcy9BU1VIZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3Nzci9TU1IuanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIl0sIm5hbWVzIjpbIkFTVUZvb3RlciIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJBU1VIZWFkZXIiLCJzdGF0ZSIsInJlbmRlckNsaWVudCIsInN0eWxlcyIsImFzdV9oZHJfd2hpdGUiLCJ0b2dnbGVBU1UiLCJuYXZ0cmVlIiwicHJvcHMiLCJoZWFkZXJPYmoiLCJzaXRlX3RpdGxlIiwicGFyZW50X29yZ191cmwiLCJwYXJlbnRfb3JnIiwic2l0ZV91cmwiLCJ0aXRsZSIsInNldFN0YXRlIiwiQVNVSGVhZGVyQ29udGFpbmVyIiwiQVNVTGluayIsImhyZWYiLCJ0YXJnZXQiLCJjbGFzc2VzIiwidGV4dCIsIkFTVUxvZ2luIiwiQVNVTmF2IiwibmF2TWVudSIsInJlbmRlck5hdiIsIm5hdiIsIm1hcCIsInJlbmRlckl0ZW0iLCJpdGVtIiwiY2hpbGRyZW4iLCJBU1VTZWFyY2hCb3giLCJkcnVwYWwiLCJpbml0QVNVSGVhZGVyIiwiYXN1X2hlYWRlciIsImVsZW1lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImNvbXBvbmVudExpc3QiLCJoZWFkZXIiLCJ0eXBlIiwiZG9tSWQiLCJBU1VIZWFkZXJPYmoiLCJmb290ZXIiLCJyZW5kZXJBU1VDb21wb25lbnQiLCJyZXEiLCJyZXMiLCJjb21wb25lbnQiLCJBU1VDb21wb25lbnQiLCJodG1sIiwiUmVhY3RET01TZXJ2ZXIiLCJyZW5kZXJUb1N0cmluZyIsImlkIiwiYm9keSIsInJlbmRlclNTUkZ1bGxQYWdlIiwic2VuZCIsInNlbmRBU1VIZWFkZXIiLCJzZW5kQVNVRm9vdGVyIiwiSXRlbSIsIkZ1bGxQYWdlU1NSIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOzs7Ozs7Ozs7Ozs7SUFFTUEs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QTs7O0FBR0EsSUFBTUksT0FBTyxTQUFQQSxJQUFPO0FBQUEsUUFBR04sRUFBSCxRQUFHQSxFQUFIO0FBQUEsUUFBT0MsSUFBUCxRQUFPQSxJQUFQO0FBQUEsNkNBRUtELEVBRkwsU0FFV0MsSUFGWDtBQUFBLENBQWI7O0FBTUEsSUFBTU0sY0FBZSxTQUFmQSxXQUFlO0FBQUEsUUFBR3BCLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFFBQVdJLE1BQVgsU0FBV0EsTUFBWDtBQUFBLFFBQW1CN0IsS0FBbkIsU0FBbUJBLEtBQW5CO0FBQUEsd0VBSU5BLEtBSk0sd0pBWVJ5QixNQVpRLCt3REEwRFhJLE1BMURXO0FBQUEsQ0FBckI7O1FBK0RRZSxJLEdBQUFBLEk7UUFBTUMsVyxHQUFBQSxXOzs7Ozs7Ozs7OztBQ3hFZCxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzc3Ivc3NyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKGdsb2JhbCwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3NyL1NTUi5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQVNVRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaW5ub3ZhdGlvbi1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW5ub3ZhdGlvbi1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5vdmF0aW9uLXRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5vdmF0aW9uLXN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L3JhbmtpbmdzXCI+PHNwYW4+QVNVIGlzICMxIGluIHRoZSBVLlMuIGZvciBJbm5vdmF0aW9uPC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5vdmF0aW9uLWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L3JhbmtpbmdzXCI+PGltZyBzcmM9XCIvL3d3dy1kZXYuYXN1LmVkdS9hc3V0aGVtZXMvNC42L2Fzc2V0cy9iZXN0LWNvbGxlZ2UtMjAxOC5wbmdcIiBhbHQ9XCJCZXN0IENvbGxlZ2VzIFUuUy4gTmV3cyBNb3N0IElubm92YXRpdmUgMjAxOFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9jb3B5cmlnaHQvXCI+Q29weXJpZ2h0IGFuZCBUcmFkZW1hcms8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9hY2Nlc3NpYmlsaXR5L1wiPkFjY2Vzc2liaWxpdHk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9wcml2YWN5L1wiPlByaXZhY3k8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS90b3UvXCI+VGVybXMgb2YgVXNlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvYXN1am9ic1wiPkpvYnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9lbWVyZ2VuY3kvXCI+RW1lcmdlbmN5PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm8tYm9yZGVyXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvY29udGFjdGFzdS9cIj5Db250YWN0IEFTVTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFTVUZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VTZWFyY2hCb3ggZnJvbSBcIi4vQVNVU2VhcmNoQm94XCI7XG5pbXBvcnQgQVNVTmF2IGZyb20gXCIuL0FTVU5hdlwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQVNVSGVhZGVyLmNzcyc7XG5pbXBvcnQgbmF2dHJlZSBmcm9tICcuL0FTVU5hdi5qc29uJztcblxuY2xhc3MgQVNVSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtyZW5kZXJDbGllbnQ6IGZhbHNlfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluLXNlYXJjaFwiIGNsYXNzTmFtZT1cIm1haW4tc2VhcmNoIGNsb3NlZFwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NpYmlsaXR5LWhpZGVcIj48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9hY2Nlc3NpYmlsaXR5L1wiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5SZXBvcnQgYW4gYWNjZXNzaWJpbGl0eSBwcm9ibGVtPC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhc3VfaGRyXCIgY2xhc3NOYW1lPXtzdHlsZXMuYXN1X2hkcl93aGl0ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhc3VfbW9iaWxlX2hkclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8vd3d3LmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIkEgUyBVXCIgc3JjPVwiLy93d3cuYXN1LmVkdS9hc3V0aGVtZXMvNC42L2Fzc2V0cy9mdWxsX2xvZ28ucG5nXCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXN1aGlkZSBmLW5hdmljb25cIiBpZD1cImFzdV9tb2JpbGVfYnV0dG9uXCIgb25DbGljaz17dGhpcy50b2dnbGVBU1UoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6QVNVSGVhZGVyLnRvZ2dsZUFTVSgpO1wiPk1lbnU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZi1zZWFyY2hcIiBpZD1cInNlYXJjaF9uZXdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFTVSgpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZWRcIiBpZD1cImFzdV9tb2JpbGVfbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFTVU5hdiBuYXY9e25hdnRyZWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBU1VTZWFyY2hCb3gvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZW5kZXJDbGllbnQgJiYgdGhpcy5wcm9wcy5oZWFkZXJPYmouc2l0ZV90aXRsZSAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZW5hbWVcIiBpZD1cImFzdV9oZHJfdGl0bGVfZ2VuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXN1X2hkcl9wYXJlbnRfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt0aGlzLnByb3BzLmhlYWRlck9iai5zaXRlX3RpdGxlLnBhcmVudF9vcmdfdXJsfT48c3BhbiBjbGFzc05hbWU9XCJhc3UtcGFyZW50LW9yZ1wiPnt0aGlzLnByb3BzLmhlYWRlck9iai5zaXRlX3RpdGxlLnBhcmVudF9vcmd9PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIkhvbWVcIiByZWw9XCJob21lXCIgaHJlZj17dGhpcy5wcm9wcy5oZWFkZXJPYmouc2l0ZV90aXRsZS5zaXRlX3VybH0+PHNwYW4gY2xhc3NOYW1lPVwiYXN1LXNpdGUtdGl0bGVcIj57dGhpcy5wcm9wcy5oZWFkZXJPYmouc2l0ZV90aXRsZS50aXRsZX08L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlckNsaWVudDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVBU1UoKSB7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFTVUhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VIZWFkZXIgZnJvbSBcIi4vQVNVSGVhZGVyXCI7XG5cbmNsYXNzIEFTVUhlYWRlckNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXIgaWQ9XCJhc3UtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxBU1VIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyT2JqPXt0aGlzLnByb3BzLmhlYWRlck9ian1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQVNVSGVhZGVyQ29udGFpbmVyO1xuIiwiY29uc3QgQVNVTGluayA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YSBocmVmPXtwcm9wcy5ocmVmfSB0aXRsZT17cHJvcHMudGl0bGV9IHRhcmdldD17cHJvcHMudGFyZ2V0fSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXN9PlxuICAgICAgICAgICAge3Byb3BzLnRleHR9XG4gICAgICAgIDwvYT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQVNVTGluazsiLCIvKipcbiAqIENyZWF0ZWQgYnkgY3Rlc3RhbWEgb24gNC8xOC8xOC5cbiAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBBU1VMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gSW4gLyBTaWduIE91dFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9XCJhc3VfbG9naW5fbW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJlbmRcIiBpZD1cImFzdV9oZHJfc3NpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLy93ZWJsb2dpbi5hc3UuZWR1L2NnaS1iaW4vbG9naW5cIiB0YXJnZXQ9XCJfdG9wXCI+U2lnbiBJbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cblxuXG59XG5leHBvcnQgZGVmYXVsdCBBU1VMb2dpbjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQVNVTG9naW4gZnJvbSAnLi9BU1VMb2dpbic7XG5pbXBvcnQgQVNVTGluayBmcm9tICcuL0FTVUxpbmsnXG5cbmNvbnN0IEFTVU5hdiA9IHByb3BzID0+IHtcblxuICAgIGNvbnN0IG5hdk1lbnUgPSByZW5kZXJOYXYocHJvcHMubmF2KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJhc3VfbmF2X3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxBU1VMb2dpbi8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYXN1X25hdl9tZW51XCIgcm9sZT1cIm5hdmlnYXRpb25cIiBhcmlhLWxhYmVsPVwiQVNVXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFzdV91bml2ZXJzYWxfbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIHtuYXZNZW51fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5jb25zdCByZW5kZXJOYXYgPSBuYXYgPT4gKFxuICAgIG5hdi5tYXAoaXRlbSA9PiByZW5kZXJJdGVtKGl0ZW0pKVxuKTtcblxuY29uc3QgcmVuZGVySXRlbSA9IGl0ZW0gPT4ge1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuID8gcmVuZGVyTmF2KGl0ZW0uY2hpbGRyZW4pIDogJyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgPEFTVUxpbmsgey4uLml0ZW19Lz5cbiAgICAgICAgICAgIHtjaGlsZHJlbiAmJlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvbGk+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFTVU5hdjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEFTVVNlYXJjaEJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRydXBhbCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXN1X3NlYXJjaF9tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhpZGRlblwiPlNlYXJjaDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiZ29vZ2xlL2FwcGxpYW5jZS9ibG9jay9mb3JtXCIgbWV0aG9kPVwicG9zdFwiIF9scGNoZWNrZWQ9XCIxXCI+PGxhYmVsIGh0bWxGb3I9XCJtYXN1X3NlYXJjaF9ib3hcIj5TZWFyY2g8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzZWFyY2hfaGVhZGVyXCIgY2xhc3M9XCJhc3Vfc2VhcmNoX2JveFwiIGlkPVwibWFzdV9zZWFyY2hfYm94XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhc3Vfc2VhcmNoX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlYXJjaFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYXN1X3NlYXJjaF9tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGlkZGVuXCI+U2VhcmNoPC9oMj5cbiAgICAgICAgICAgICAgICA8Zm9ybSB0YXJnZXQ9XCJfdG9wXCIgYWN0aW9uPVwiaHR0cHM6Ly9zZWFyY2guYXN1LmVkdS9zZWFyY2hcIiBtZXRob2Q9XCJnZXRcIiBuYW1lPVwiZ3NcIiByb2xlPVwic2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFzdV9zZWFyY2hfYm94XCI+U2VhcmNoPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzaXRlXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiZGVmYXVsdF9jb2xsZWN0aW9uXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNvcnRcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJkYXRlOkQ6TDpkMVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJvdXRwdXRcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJ4bWxfbm9fZHRkXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInByb3h5c3R5bGVzaGVldFwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cImFzdV9mcm9udGVuZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJpZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIlVURi04XCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm9lXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiVVRGLThcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY2xpZW50XCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiYXN1X2Zyb250ZW5kXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYXN1X3NlYXJjaF9idXR0b25cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZWFyY2hcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicVwiIGNsYXNzTmFtZT1cImFzdV9zZWFyY2hfYm94XCIgaWQ9XCJtYXN1X3NlYXJjaF9ib3hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFTVVNlYXJjaEJveDsiLCIvKipcbiAqIENyZWF0ZWQgYnkgY3Rlc3RhbWEgb24gMy8yMS8xOC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQVNVTmF2IGZyb20gJy4vY29tcG9uZW50cy9BU1VOYXYnXG5pbXBvcnQgQVNVRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9BU1VGb290ZXInXG5pbXBvcnQgQVNVSGVhZGVyQ29udGFpbmVyIGZyb20gXCIuL2NvbXBvbmVudHMvQVNVSGVhZGVyQ29udGFpbmVyXCI7XG5pbXBvcnQgQVNVSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvQVNVSGVhZGVyXCI7XG5cbmNvbnN0IGluaXRBU1VIZWFkZXIgPSAoYXN1X2hlYWRlciwgZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQgPyBSZWFjdERPTS5yZW5kZXIoPEFTVUhlYWRlckNvbnRhaW5lciBoZWFkZXJPYmo9e2FzdV9oZWFkZXJ9IC8+LCBlbGVtZW50KSA6IGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW5pdEFTVUhlYWRlcixcbiAgICBBU1VIZWFkZXJDb250YWluZXIsXG4gICAgQVNVSGVhZGVyLFxuICAgIEFTVU5hdixcbiAgICBBU1VGb290ZXJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXN1X3VuaXZlcnNhbF9uYXZfbmV3XCI6IFwiQVNVSGVhZGVyX19hc3VfdW5pdmVyc2FsX25hdl9uZXdfX18zdk5XLVwiLFxuXHRcImFzdV9oZHJfd2hpdGVcIjogXCJBU1VIZWFkZXJfX2FzdV9oZHJfd2hpdGVfX18xVVVQWlwiLFxuXHRcImNsb3NlZFwiOiBcIkFTVUhlYWRlcl9fY2xvc2VkX19fMkUyQS1cIixcblx0XCJhc3VfaGRyXCI6IFwiQVNVSGVhZGVyX19hc3VfaGRyX19fMi1NRi1cIixcblx0XCJhc3VfbG9nb1wiOiBcIkFTVUhlYWRlcl9fYXN1X2xvZ29fX18zcklmWVwiLFxuXHRcImFzdV9tb2JpbGVfaGRyXCI6IFwiQVNVSGVhZGVyX19hc3VfbW9iaWxlX2hkcl9fXzFRWVB3XCIsXG5cdFwiYXN1X21vYmlsZV9idXR0b25cIjogXCJBU1VIZWFkZXJfX2FzdV9tb2JpbGVfYnV0dG9uX19fdmNWQm5cIixcblx0XCJhc3VfcHJpbnRfbG9nb1wiOiBcIkFTVUhlYWRlcl9fYXN1X3ByaW50X2xvZ29fX18zN3FnT1wiLFxuXHRcImFzdV9uYXZfd3JhcHBlclwiOiBcIkFTVUhlYWRlcl9fYXN1X25hdl93cmFwcGVyX19fMkhyTjRcIixcblx0XCJhc3VfbmF2X21lbnVcIjogXCJBU1VIZWFkZXJfX2FzdV9uYXZfbWVudV9fXzNhU0otXCIsXG5cdFwiYXN1X3VuaXZlcnNhbF9uYXZcIjogXCJBU1VIZWFkZXJfX2FzdV91bml2ZXJzYWxfbmF2X19fM3EzeG1cIixcblx0XCJhc3VfaGVhZF9ob3ZlclwiOiBcIkFTVUhlYWRlcl9fYXN1X2hlYWRfaG92ZXJfX18xOWNLS1wiLFxuXHRcInBhcmVudFwiOiBcIkFTVUhlYWRlcl9fcGFyZW50X19fMVFmZm9cIixcblx0XCJib3JkZXJcIjogXCJBU1VIZWFkZXJfX2JvcmRlcl9fXzNnaVlNXCIsXG5cdFwiYXN1X3RvdWNoXCI6IFwiQVNVSGVhZGVyX19hc3VfdG91Y2hfX18xVTFiTVwiLFxuXHRcImFzdV9sb2dpbl9tb2R1bGVcIjogXCJBU1VIZWFkZXJfX2FzdV9sb2dpbl9tb2R1bGVfX18xRHdYMlwiLFxuXHRcImVuZFwiOiBcIkFTVUhlYWRlcl9fZW5kX19fM0g1dFpcIixcblx0XCJhc3Vfc2VhcmNoX21vZHVsZVwiOiBcIkFTVUhlYWRlcl9fYXN1X3NlYXJjaF9tb2R1bGVfX18zcDV2MVwiLFxuXHRcImFzdV9zZWFyY2hfYm94XCI6IFwiQVNVSGVhZGVyX19hc3Vfc2VhcmNoX2JveF9fXzNQRGtsXCIsXG5cdFwibWFzdV9zZWFyY2hfYm94XCI6IFwiQVNVSGVhZGVyX19tYXN1X3NlYXJjaF9ib3hfX18zSFRVX1wiLFxuXHRcImFzdV9zZWFyY2hfYnV0dG9uXCI6IFwiQVNVSGVhZGVyX19hc3Vfc2VhcmNoX2J1dHRvbl9fXzNqVDJtXCIsXG5cdFwibXlhc3VfYmFyXCI6IFwiQVNVSGVhZGVyX19teWFzdV9iYXJfX19iZU1jaFwiLFxuXHRcIm15YXN1X3RleHRcIjogXCJBU1VIZWFkZXJfX215YXN1X3RleHRfX18zbTdPWVwiLFxuXHRcIm15YXN1X2Fycm93XCI6IFwiQVNVSGVhZGVyX19teWFzdV9hcnJvd19fXzJzeU5RXCIsXG5cdFwiYXN1X2Zvb3RlclwiOiBcIkFTVUhlYWRlcl9fYXN1X2Zvb3Rlcl9fXzJOTE1OXCIsXG5cdFwiYXN1X2Zvb3Rlcl9jb250YWN0X2luZm9cIjogXCJBU1VIZWFkZXJfX2FzdV9mb290ZXJfY29udGFjdF9pbmZvX19fM3dmRGpcIixcblx0XCJhc3Vfc2VhcmNoXCI6IFwiQVNVSGVhZGVyX19hc3Vfc2VhcmNoX19fM21XVmZcIixcblx0XCJuYXZtZW51XCI6IFwiQVNVSGVhZGVyX19uYXZtZW51X19fRkJwQzNcIixcblx0XCJtYWluLXNlYXJjaFwiOiBcIkFTVUhlYWRlcl9fbWFpbi1zZWFyY2hfX18zT0VKSFwiLFxuXHRcImhpZGRlblwiOiBcIkFTVUhlYWRlcl9faGlkZGVuX19fMzRMRTdcIixcblx0XCJpY25cIjogXCJBU1VIZWFkZXJfX2ljbl9fXzFna3pLXCIsXG5cdFwiaWNuMlwiOiBcIkFTVUhlYWRlcl9faWNuMl9fX3ltaGpKXCIsXG5cdFwiYmxhY2tPdXRcIjogXCJBU1VIZWFkZXJfX2JsYWNrT3V0X19fM0dzZXdcIixcblx0XCJpbm5vdmF0aW9uLWJhclwiOiBcIkFTVUhlYWRlcl9faW5ub3ZhdGlvbi1iYXJfX18yaHJjcVwiLFxuXHRcImlubm92YXRpb24taGlkZGVuXCI6IFwiQVNVSGVhZGVyX19pbm5vdmF0aW9uLWhpZGRlbl9fXzE4aWh5XCIsXG5cdFwiaW5ub3ZhdGlvbi1zdGF0dXNcIjogXCJBU1VIZWFkZXJfX2lubm92YXRpb24tc3RhdHVzX19feDZaYVRcIixcblx0XCJpbm5vdmF0aW9uLXRvcFwiOiBcIkFTVUhlYWRlcl9faW5ub3ZhdGlvbi10b3BfX18yb3ZrQVwiLFxuXHRcImFzdV9oZHJfcGFyZW50X3RpdGxlXCI6IFwiQVNVSGVhZGVyX19hc3VfaGRyX3BhcmVudF90aXRsZV9fXzFld1B3XCIsXG5cdFwiYXN1LXBhcmVudC1vcmdcIjogXCJBU1VIZWFkZXJfX2FzdS1wYXJlbnQtb3JnX19fMnJHSllcIixcblx0XCJhc3Utc2l0ZS10aXRsZVwiOiBcIkFTVUhlYWRlcl9fYXN1LXNpdGUtdGl0bGVfX18zWEJPRlwiLFxuXHRcImhlYWRlcl9fc2l0ZW5hbWVcIjogXCJBU1VIZWFkZXJfX2hlYWRlcl9fc2l0ZW5hbWVfX18xSHRzQVwiLFxuXHRcInNyLW9ubHlcIjogXCJBU1VIZWFkZXJfX3NyLW9ubHlfX18zMXNQMFwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQge0FTVUhlYWRlckNvbnRhaW5lciwgQVNVRm9vdGVyfSBmcm9tICcuLi9jb3JlL2NvcmUuanMnO1xuaW1wb3J0IHtJdGVtLCBGdWxsUGFnZVNTUn0gZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlJztcblxuY29uc3QgY29tcG9uZW50TGlzdCA9IHtcbiAgICBoZWFkZXI6IHtcbiAgICAgICAgdHlwZTogQVNVSGVhZGVyQ29udGFpbmVyLFxuICAgICAgICBkb21JZDogJ2FzdS1oZWFkZXItY29udGFpbmVyJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGhlYWRlck9iajogQVNVSGVhZGVyT2JqXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgICB0eXBlOiBBU1VGb290ZXIsXG4gICAgICAgIGRvbUlkOiAnYXN1LWZvb3Rlci1jb250YWluZXInLFxuICAgICAgICBwcm9wczoge31cbiAgICB9XG59O1xuXG5cblxuY29uc3QgQVNVSGVhZGVyT2JqID0ge307XG5cbmNvbnN0IHJlbmRlckFTVUNvbXBvbmVudCA9ICAocmVxLCByZXMsIGNvbXBvbmVudCkgPT4ge1xuXG4gICAgY29uc3QgQVNVQ29tcG9uZW50ID0gY29tcG9uZW50LnR5cGU7XG5cbiAgICAvLyBSZW5kZXJzIGNvbXBvbmVudCB0byBzdHJpbmdcbiAgICBjb25zdCBodG1sID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoPEFTVUNvbXBvbmVudCB7Li4uY29tcG9uZW50LnByb3BzfSAvPik7XG5cbiAgICByZXR1cm4gSXRlbSh7XG4gICAgICAgIGlkOiBjb21wb25lbnQuZG9tSWQsXG4gICAgICAgIGJvZHk6IGh0bWxcbiAgICB9KTtcbn1cblxuY29uc3QgcmVuZGVyU1NSRnVsbFBhZ2UgPSAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSByZW5kZXJBU1VDb21wb25lbnQocmVxLCByZXMsIGNvbXBvbmVudExpc3QuaGVhZGVyKTtcbiAgICBjb25zdCBmb290ZXIgPSByZW5kZXJBU1VDb21wb25lbnQocmVxLCByZXMsIGNvbXBvbmVudExpc3QuZm9vdGVyKTtcblxuICAgIHJlcy5zZW5kKEZ1bGxQYWdlU1NSKHtcbiAgICAgICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgICAgIGZvb3RlcjogZm9vdGVyLFxuICAgICAgICB0aXRsZTogJ1Rlc3QgUGFnZSdcbiAgICB9KSk7XG59XG5cbmNvbnN0IHNlbmRBU1VIZWFkZXIgPSAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBodG1sID0gcmVuZGVyQVNVQ29tcG9uZW50KHJlcSwgcmVzLCBjb21wb25lbnRMaXN0LmhlYWRlcik7XG4gICAgcmVzLnNlbmQoaHRtbCk7XG59O1xuXG5jb25zdCBzZW5kQVNVRm9vdGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgaHRtbCA9IHJlbmRlckFTVUNvbXBvbmVudChyZXEsIHJlcywgY29tcG9uZW50TGlzdC5mb290ZXIpO1xuICAgIHJlcy5zZW5kKGh0bWwpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcmVuZGVyQVNVQ29tcG9uZW50LFxuICAgIHNlbmRBU1VIZWFkZXIsXG4gICAgc2VuZEFTVUZvb3RlcixcbiAgICByZW5kZXJTU1JGdWxsUGFnZVxufTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgY3Rlc3RhbWEgb24gNC8yNS8xOC5cbiAqL1xuY29uc3QgSXRlbSA9ICh7IGlkLCBib2R5IH0pID0+IChgXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBpZD0ke2lkfT4ke2JvZHl9PC9kaXY+XG4gICAgPC9kaXY+ICBcbmApO1xuXG5jb25zdCBGdWxsUGFnZVNTUiA9ICAoeyBoZWFkZXIsIGZvb3RlciwgdGl0bGUgfSkgPT4gKGBcbiAgPCFET0NUWUxFIGh0bWw+XG4gIDxodG1sPlxuICAgIDxoZWFkPlxuICAgICAgPHRpdGxlPiR7dGl0bGV9PC90aXRsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgI21haW4tY29udGVudCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMDBweDtcbiAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvaGVhZD5cbiAgICA8Ym9keT5cbiAgICAgIDxkaXY+JHtoZWFkZXJ9PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCI+IDwvZGl2PlxuICAgIDwvYm9keT5cbiAgICA8c2NyaXB0IGNyb3Nzb3JpZ2luIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE2L3VtZC9yZWFjdC5kZXZlbG9wbWVudC5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgY3Jvc3NvcmlnaW4gc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtZG9tQDE2L3VtZC9yZWFjdC1kb20uZGV2ZWxvcG1lbnQuanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9jb3JlL2NvcmUuZGV2ZWxvcG1lbnQuanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0PlxuICAgICAgICB2YXIgQVNVSGVhZGVyID0ge307XG4gICAgXG4gICAgICAgIEFTVUhlYWRlci5zaXRlX21lbnUgPSB7XG4gICAgICAgICAgICBqc29uOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIkhvbWVcIixcbiAgICAgICAgICAgICAgICAgICAgcGF0aDpcImh0dHA6Ly93d3cuYXN1LmVkdS9hYnNvbHV0ZV9wYXRoXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJEZWdyZWUgUHJvZ3JhbXNcIixcbiAgICAgICAgICAgICAgICAgICAgcGF0aDpcIi9hYnNvbHV0ZV9wYXRoL3BhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIkFkbWlzc2lvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOlwiLz91cmw9dmFyaWFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIlN0dWRlbnQgTGlmZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDpcIi8jaGFzaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiUm9zc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6XCJodHRwczovL3d3dy5hc3UuZWR1L1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coQVNVbml0eSwgJ0FTVU5JVFknKTtcbiAgICBcbiAgICAgICAgQVNVSGVhZGVyLnNpdGVfdGl0bGUgPSB7dGl0bGU6IFwiQVNVIEN1c3RvbSBTaXRlIFRpdGxlXCIsIHBhcmVudF9vcmc6IFwiQVNVIEN1c3RvbSBQYXJlbnQgT3JnXCIsIHNpdGVfdXJsOiBcImh0dHBzOi8vYXN1LmVkdVwiLCBwYXJlbnRfb3JnX3VybDogXCJodHRwczovL3V0by5hc3UuZWR1XCJ9O1xuICAgICAgICBcbiAgICAgICAgUmVhY3RET00uaHlkcmF0ZShSZWFjdC5jcmVhdGVFbGVtZW50KEFTVW5pdHkuY29yZS5BU1VIZWFkZXJDb250YWluZXIsIHtoZWFkZXJPYmo6IEFTVUhlYWRlcn0pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzdS1oZWFkZXItY29udGFpbmVyXCIpKTtcbiAgICA8L3NjcmlwdD5cbiAgICBcbiAgICA8Zm9vdGVyPlxuICAgICAgICAke2Zvb3Rlcn1cbiAgICA8L2Zvb3Rlcj5cbiAgPC9odG1sPlxuYCk7XG5cbmV4cG9ydCB7SXRlbSwgRnVsbFBhZ2VTU1J9OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==