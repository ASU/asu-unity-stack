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
/******/ 	return __webpack_require__(__webpack_require__.s = "./SSR.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./SSR.js":
/*!****************!*\
  !*** ./SSR.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _core = __webpack_require__(/*! ./core/core.js */ "./core/core.js");

var _template = __webpack_require__(/*! ./templates/template */ "./templates/template.js");

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASUHeaderObj = {};

var renderASUComponent = function renderASUComponent(req, res, component) {

    var ASUComponent = component.type;

    // Renders component to string
    var html = _server2.default.renderToString(_react2.default.createElement(ASUComponent, component.props));

    res.send((0, _template2.default)({
        id: component.domId,
        body: html
    }));
};

var renderASUHeader = function renderASUHeader(req, res) {
    renderASUComponent(req, res, { type: _core.ASUHeaderContainer, domId: 'asu-header-container', props: { headerObj: ASUHeaderObj } });
};

var renderASUFooter = function renderASUFooter(req, res) {
    renderASUComponent(req, res, { type: _core.ASUFooter, domId: 'asu-footer-container', props: {}, template: './src/core/templates/footer.html' });
};

module.exports = {
    renderASUComponent: renderASUComponent,
    renderASUHeader: renderASUHeader,
    renderASUFooter: renderASUFooter
};

/***/ }),

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

/***/ "./core/components/container/ASUHeaderContainer.js":
/*!*********************************************************!*\
  !*** ./core/components/container/ASUHeaderContainer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASUHeader = __webpack_require__(/*! ../presentational/ASUHeader */ "./core/components/presentational/ASUHeader.js");

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

/***/ "./core/components/presentational/ASUHeader.js":
/*!*****************************************************!*\
  !*** ./core/components/presentational/ASUHeader.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASUSearchBox = __webpack_require__(/*! ../ASUSearchBox */ "./core/components/ASUSearchBox.js");

var _ASUSearchBox2 = _interopRequireDefault(_ASUSearchBox);

var _ASUNav = __webpack_require__(/*! ../ASUNav */ "./core/components/ASUNav.js");

var _ASUNav2 = _interopRequireDefault(_ASUNav);

var _ASUHeader = __webpack_require__(/*! ../../styles/css/ASUHeader.css */ "./core/styles/css/ASUHeader.css");

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

var _ASUHeaderContainer = __webpack_require__(/*! ./components/container/ASUHeaderContainer */ "./core/components/container/ASUHeaderContainer.js");

var _ASUHeaderContainer2 = _interopRequireDefault(_ASUHeaderContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by ctestama on 3/21/18.
 */
var initASUHeader = function initASUHeader(asu_header, element) {
    element ? ReactDOM.render(React.createElement(_ASUHeaderContainer2.default, { headerObj: asu_header }), element) : false;
};

module.exports = {
    initASUHeader: initASUHeader,
    ASUHeaderContainer: _ASUHeaderContainer2.default,
    ASUNav: _ASUNav2.default,
    ASUFooter: _ASUFooter2.default
};

/***/ }),

/***/ "./core/styles/css/ASUHeader.css":
/*!***************************************!*\
  !*** ./core/styles/css/ASUHeader.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"asu_universal_nav_new": "ASUHeader__asu_universal_nav_new___S63Pu",
	"asu_hdr_white": "ASUHeader__asu_hdr_white___Lp_FL",
	"asu_hdr": "ASUHeader__asu_hdr___1h1SQ",
	"asu_logo": "ASUHeader__asu_logo___qbipf",
	"asu_mobile_hdr": "ASUHeader__asu_mobile_hdr___3ETzg",
	"asu_mobile_button": "ASUHeader__asu_mobile_button___2-SL4",
	"asu_print_logo": "ASUHeader__asu_print_logo___1qAlr",
	"asu_nav_wrapper": "ASUHeader__asu_nav_wrapper___2NhdN",
	"asu_nav_menu": "ASUHeader__asu_nav_menu___2wu2O",
	"asu_universal_nav": "ASUHeader__asu_universal_nav___7BtBD",
	"asu_head_hover": "ASUHeader__asu_head_hover___sR2G6",
	"parent": "ASUHeader__parent___24ObY",
	"border": "ASUHeader__border___1XeML",
	"asu_touch": "ASUHeader__asu_touch___1Ly5F",
	"asu_login_module": "ASUHeader__asu_login_module___2z8cb",
	"end": "ASUHeader__end___2PnCB",
	"asu_search_module": "ASUHeader__asu_search_module___2Cdir",
	"asu_search_box": "ASUHeader__asu_search_box___2d6sk",
	"masu_search_box": "ASUHeader__masu_search_box___Fzl-O",
	"asu_search_button": "ASUHeader__asu_search_button___2IorX",
	"asu_footer_contact_info": "ASUHeader__asu_footer_contact_info___3RJrB",
	"footer_img_wrap": "ASUHeader__footer_img_wrap___2ATzA",
	"footer_innovate": "ASUHeader__footer_innovate___1mmDm",
	"asu_footer": "ASUHeader__asu_footer___268Bu",
	"footer_right": "ASUHeader__footer_right___18YNe",
	"myasu_bar": "ASUHeader__myasu_bar___3g_VG",
	"myasu_text": "ASUHeader__myasu_text___14lo9",
	"myasu_arrow": "ASUHeader__myasu_arrow___1WR1E",
	"asu_search": "ASUHeader__asu_search___2HLOQ",
	"navmenu": "ASUHeader__navmenu___1xN3Q",
	"main-search": "ASUHeader__main-search___2d3Fy",
	"closed": "ASUHeader__closed___3L18E",
	"hidden": "ASUHeader__hidden___2uQwp",
	"icn": "ASUHeader__icn___3MPSs",
	"icn2": "ASUHeader__icn2___1NYoO",
	"blackOut": "ASUHeader__blackOut___1kbNh",
	"innovation-bar": "ASUHeader__innovation-bar___34Kc0",
	"innovation-hidden": "ASUHeader__innovation-hidden___nUf-g",
	"innovation-status": "ASUHeader__innovation-status___1lqHI",
	"innovation-footer": "ASUHeader__innovation-footer___3PCOB",
	"innovation-top": "ASUHeader__innovation-top___3qEsf",
	"footer-menu": "ASUHeader__footer-menu___3JqXX",
	"default": "ASUHeader__default___2_YQS",
	"asu_hdr_parent_title": "ASUHeader__asu_hdr_parent_title___2bxxv",
	"asu-parent-org": "ASUHeader__asu-parent-org___2pPUq",
	"asu-site-title": "ASUHeader__asu-site-title___1uJgh",
	"header__sitename": "ASUHeader__header__sitename___3s9J-",
	"sr-only": "ASUHeader__sr-only___3xtnJ"
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
exports.default = function (_ref) {
    var id = _ref.id,
        body = _ref.body;
    return "\n    <div>\n        <div id=" + id + ">" + body + "</div>\n    </div>  \n";
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9TU1IuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVUZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL0FTVU5hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvQVNVU2VhcmNoQm94LmpzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9jb250YWluZXIvQVNVSGVhZGVyQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9BU1VIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb3JlLmpzIiwid2VicGFjazovLy8uL2NvcmUvc3R5bGVzL2Nzcy9BU1VIZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJBU1VIZWFkZXJPYmoiLCJyZW5kZXJBU1VDb21wb25lbnQiLCJyZXEiLCJyZXMiLCJjb21wb25lbnQiLCJBU1VDb21wb25lbnQiLCJ0eXBlIiwiaHRtbCIsInJlbmRlclRvU3RyaW5nIiwicHJvcHMiLCJzZW5kIiwiaWQiLCJkb21JZCIsImJvZHkiLCJyZW5kZXJBU1VIZWFkZXIiLCJoZWFkZXJPYmoiLCJyZW5kZXJBU1VGb290ZXIiLCJ0ZW1wbGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJBU1VGb290ZXIiLCJBU1VMb2dpbiIsIkFTVU5hdiIsIkFTVVNlYXJjaEJveCIsImRydXBhbCIsIkFTVUhlYWRlckNvbnRhaW5lciIsIkFTVUhlYWRlciIsInN0YXRlIiwicmVuZGVyQ2xpZW50IiwiYXN1X2hkcl93aGl0ZSIsInRvZ2dsZUFTVSIsInNpdGVfdGl0bGUiLCJwYXJlbnRfb3JnX3VybCIsInBhcmVudF9vcmciLCJzaXRlX3VybCIsInRpdGxlIiwic2V0U3RhdGUiLCJpbml0QVNVSGVhZGVyIiwiYXN1X2hlYWRlciIsImVsZW1lbnQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxFQUFyQjs7QUFFQSxJQUFNQyxxQkFBc0IsU0FBdEJBLGtCQUFzQixDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsU0FBWCxFQUF5Qjs7QUFFakQsUUFBTUMsZUFBZUQsVUFBVUUsSUFBL0I7O0FBRUE7QUFDQSxRQUFNQyxPQUFPLGlCQUFlQyxjQUFmLENBQThCLDhCQUFDLFlBQUQsRUFBa0JKLFVBQVVLLEtBQTVCLENBQTlCLENB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTs7O2tCQUdlO0FBQUEsUUFBR1QsRUFBSCxRQUFHQSxFQUFIO0FBQUEsUUFBT0UsSUFBUCxRQUFPQSxJQUFQO0FBQUEsNkNBRUdGLEVBRkgsU0FFU0UsSUFGVDtBQUFBLEM7Ozs7Ozs7Ozs7O0FDSGYsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoiU1NSLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKGdsb2JhbCwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyB3YXNtIG1vZHVsZXNcbiBcdHZhciBpbnN0YWxsZWRXYXNtTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb2JqZWN0IHdpdGggYWxsIGNvbXBpbGVkIFdlYkFzc2VtYmx5Lk1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18udyA9IHt9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1NTUi5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQge0FTVUhlYWRlckNvbnRhaW5lciwgQVNVRm9vdGVyfSBmcm9tICcuL2NvcmUvY29yZS5qcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvdGVtcGxhdGUnO1xuXG5jb25zdCBBU1VIZWFkZXJPYmogPSB7fTtcblxuY29uc3QgcmVuZGVyQVNVQ29tcG9uZW50ID0gIChyZXEsIHJlcywgY29tcG9uZW50KSA9PiB7XG5cbiAgICBjb25zdCBBU1VDb21wb25lbnQgPSBjb21wb25lbnQudHlwZTtcblxuICAgIC8vIFJlbmRlcnMgY29tcG9uZW50IHRvIHN0cmluZ1xuICAgIGNvbnN0IGh0bWwgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyg8QVNVQ29tcG9uZW50IHsuLi5jb21wb25lbnQucHJvcHN9IC8+KTtcblxuICAgIHJlcy5zZW5kKHRlbXBsYXRlKHtcbiAgICAgICAgaWQ6IGNvbXBvbmVudC5kb21JZCxcbiAgICAgICAgYm9keTogaHRtbFxuICAgIH0pKTtcbn1cblxuY29uc3QgcmVuZGVyQVNVSGVhZGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVuZGVyQVNVQ29tcG9uZW50KHJlcSwgcmVzLCB7dHlwZTogQVNVSGVhZGVyQ29udGFpbmVyLCBkb21JZDogJ2FzdS1oZWFkZXItY29udGFpbmVyJywgcHJvcHM6IHtoZWFkZXJPYmo6IEFTVUhlYWRlck9ian19KTtcbn07XG5cbmNvbnN0IHJlbmRlckFTVUZvb3RlciA9IChyZXEsIHJlcykgPT4ge1xuICAgIHJlbmRlckFTVUNvbXBvbmVudChyZXEsIHJlcywge3R5cGU6IEFTVUZvb3RlciwgZG9tSWQ6ICdhc3UtZm9vdGVyLWNvbnRhaW5lcicsIHByb3BzOiB7fSwgdGVtcGxhdGU6ICcuL3NyYy9jb3JlL3RlbXBsYXRlcy9mb290ZXIuaHRtbCd9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHJlbmRlckFTVUNvbXBvbmVudCxcbiAgICByZW5kZXJBU1VIZWFkZXIsXG4gICAgcmVuZGVyQVNVRm9vdGVyXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQVNVRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaW5ub3ZhdGlvbi1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW5ub3ZhdGlvbi1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5vdmF0aW9uLXRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5vdmF0aW9uLXN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L3JhbmtpbmdzXCI+PHNwYW4+QVNVIGlzICMxIGluIHRoZSBVLlMuIGZvciBJbm5vdmF0aW9uPC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5vdmF0aW9uLWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L3JhbmtpbmdzXCI+PGltZyBzcmM9XCIvL3d3dy1kZXYuYXN1LmVkdS9hc3V0aGVtZXMvNC42L2Fzc2V0cy9iZXN0LWNvbGxlZ2UtMjAxOC5wbmdcIiBhbHQ9XCJCZXN0IENvbGxlZ2VzIFUuUy4gTmV3cyBNb3N0IElubm92YXRpdmUgMjAxOFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9jb3B5cmlnaHQvXCI+Q29weXJpZ2h0IGFuZCBUcmFkZW1hcms8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9hY2Nlc3NpYmlsaXR5L1wiPkFjY2Vzc2liaWxpdHk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9wcml2YWN5L1wiPlByaXZhY3k8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS90b3UvXCI+VGVybXMgb2YgVXNlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvYXN1am9ic1wiPkpvYnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9lbWVyZ2VuY3kvXCI+RW1lcmdlbmN5PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm8tYm9yZGVyXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvY29udGFjdGFzdS9cIj5Db250YWN0IEFTVTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFTVUZvb3RlcjtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBjdGVzdGFtYSBvbiA0LzE4LzE4LlxuICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEFTVUxvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBJbiAvIFNpZ24gT3V0XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDx1bCBpZD1cImFzdV9sb2dpbl9tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImVuZFwiIGlkPVwiYXN1X2hkcl9zc2lcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvL3dlYmxvZ2luLmFzdS5lZHUvY2dpLWJpbi9sb2dpblwiIHRhcmdldD1cIl90b3BcIj5TaWduIEluPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFTVUxvZ2luOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VMb2dpbiBmcm9tICcuL0FTVUxvZ2luJztcblxuY2xhc3MgQVNVTmF2IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhc3VfbmF2X3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8QVNVTG9naW4vPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhc3VfbmF2X21lbnVcIiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJBU1VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTWVudVxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXN1X3VuaXZlcnNhbF9uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFyZW50XCI+PGEgaHJlZj1cIi8vd3d3LmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiPkFTVSBIb21lPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZmlyc3RcIiBocmVmPVwiLy93d3cuYXN1LmVkdS8/ZmVhdHVyZT1uZXdzZXZlbnRzXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiTmV3cyBhbmQgRXZlbnRzXCI+TmV3cy9FdmVudHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy93d3cuYXN1LmVkdS8/ZmVhdHVyZT1hY2FkZW1pY3NcIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJBY2FkZW1pY3NcIj5BY2FkZW1pY3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy93d3cuYXN1LmVkdS8/ZmVhdHVyZT1yZXNlYXJjaFwiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIlJlc2VhcmNoXCI+UmVzZWFyY2g8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy93d3cuYXN1LmVkdS8/ZmVhdHVyZT1hdGhsZXRpY3NcIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJBdGhsZXRpY3NcIj5BdGhsZXRpY3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy93d3cuYXN1LmVkdS8/ZmVhdHVyZT1hbHVtbmlcIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJBbHVtbmlcIj5BbHVtbmk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy93d3cuYXN1LmVkdS8/ZmVhdHVyZT1naXZpbmdcIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJHaXZpbmdcIj5HaXZpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy93d3cuYXN1LmVkdS8/ZmVhdHVyZT1wcmVzaWRlbnRcIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJQcmVzaWRlbnRcIj5QcmVzaWRlbnQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy93d3cuYXN1LmVkdS9hYm91dFwiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkFib3V0IEFTVVwiPkFib3V0IEFTVTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL215LmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiPk15IEFTVTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYXJlbnRcIj48YSBocmVmPVwiLy93d3cuYXN1LmVkdS9jb2xsZWdlcy9cIiB0YXJnZXQ9XCJfdG9wXCI+Q29sbGVnZXMgYW5kIFNjaG9vbHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJmaXJzdFwiIGhyZWY9XCIvL2FydHNhbmRzY2llbmNlcy5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkFydHMgYW5kIFNjaWVuY2VzIHdlYnNpdGVcIj5BcnRzIGFuZCBTY2llbmNlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3dwY2FyZXkuYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJXLiBQLiBDYXJleSBTY2hvb2wgb2YgQnVzaW5lc3MgV2ViIGFuZCBNb3JyaXNvbiBTY2hvb2wgb2YgQWdyaWJ1c2luZXNzIHdlYnNpdGVcIj5CdXNpbmVzczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL2hlcmJlcmdlcmluc3RpdHV0ZS5hc3UuZWR1XCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiSGVyYmVyZ2VyIEluc3RpdHV0ZSBmb3IgRGVzaWduIGFuZCB0aGUgQXJ0cyB3ZWJzaXRlXCI+RGVzaWduIGFuZCB0aGUgQXJ0czwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL2VkdWNhdGlvbi5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIk1hcnkgTG91IEZ1bHRvbiBUZWFjaGVycyBDb2xsZWdlIHdlYnNpdGVcIj5FZHVjYXRpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9lbmdpbmVlcmluZy5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkVuZ2luZWVyaW5nIHdlYnNpdGVcIj5FbmdpbmVlcmluZzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3NmaXMuYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJGdXR1cmUgb2YgSW5ub3ZhdGlvbiBpbiBTb2NpZXR5IHdlYnNpdGVcIj5GdXR1cmUgb2YgSW5ub3ZhdGlvbiBpbiBTb2NpZXR5PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vZ3JhZHVhdGUuYXN1LmVkdVwiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkdyYWR1YXRlIENvbGxlZ2Ugd2Vic2l0ZVwiPkdyYWR1YXRlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vY2hzLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiSGVhbHRoIFNvbHV0aW9ucyB3ZWJzaXRlXCI+SGVhbHRoIFNvbHV0aW9uczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL2hvbm9ycy5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkJhcnJldHQsIFRoZSBIb25vcnMgQ29sbGVnZSB3ZWJzaXRlXCI+SG9ub3JzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vY3JvbmtpdGUuYXN1LmVkdVwiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIldhbHRlciBDcm9ua2l0ZSBTY2hvb2wgb2YgSm91cm5hbGlzbSBhbmQgTWFzcyBDb21tdW5pY2F0aW9uIHdlYnNpdGVcIj5Kb3VybmFsaXNtPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vd3d3Lmxhdy5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIlNhbmRyYSBEYXkgTycgQ29ubm9yIENvbGxlZ2Ugb2YgTGF3IHdlYnNpdGVcIj5MYXc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9udXJzaW5nYW5kaGVhbHRoLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiQ29sbGVnZSBvZiBOdXJzaW5nIGFuZCBIZWFsdGggSW5ub3ZhdGlvbiB3ZWJzaXRlXCI+TnVyc2luZyBhbmQgSGVhbHRoIElubm92YXRpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9jb3BwLmFzdS5lZHVcIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJDb2xsZWdlIG9mIFB1YmxpYyBQcm9ncmFtcyB3ZWJzaXRlXCI+UHVibGljIFNlcnZpY2UgYW5kIENvbW11bml0eSBTb2x1dGlvbnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9zY2hvb2xvZnN1c3RhaW5hYmlsaXR5LmFzdS5lZHVcIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJTY2hvb2wgb2YgU3VzdGFpbmFiaWxpdHkgd2Vic2l0ZVwiPlN1c3RhaW5hYmlsaXR5PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vdWMuYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJVbml2ZXJzaXR5IENvbGxlZ2Ugd2Vic2l0ZVwiPlVuaXZlcnNpdHkgQ29sbGVnZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIHRhcmdldD1cIl90b3BcIiBocmVmPVwiaHR0cDovL3d3dy50aHVuZGVyYmlyZC5lZHUvXCIgdGl0bGU9XCJUaHVuZGVyYmlyZCBTY2hvb2wgb2YgR2xvYmFsIE1hbmFnZW1lbnQgd2Vic2l0ZVwiPlRodW5kZXJiaXJkIFNjaG9vbCBvZiBHbG9iYWwgTWFuYWdlbWVudDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhcmVudFwiPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1L21hcC9cIiB0YXJnZXQ9XCJfdG9wXCI+TWFwIGFuZCBMb2NhdGlvbnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJib3JkZXIgZmlyc3RcIiBocmVmPVwiLy93d3cuYXN1LmVkdS9tYXAvXCIgdGFyZ2V0PVwiX3RvcFwiPk1hcDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL2NhbXB1cy5hc3UuZWR1L3RlbXBlL1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIlRlbXBlIGNhbXB1c1wiPlRlbXBlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vY2FtcHVzLmFzdS5lZHUvd2VzdC9cIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJXZXN0IGNhbXB1c1wiPldlc3Q8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9jYW1wdXMuYXN1LmVkdS9wb2x5dGVjaG5pYy9cIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJQb2x5dGVjaG5pYyBjYW1wdXNcIj5Qb2x5dGVjaG5pYzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL2NhbXB1cy5hc3UuZWR1L2Rvd250b3duL1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkRvd250b3duIFBob2VuaXggY2FtcHVzXCI+RG93bnRvd24gUGhvZW5peDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL2FzdW9ubGluZS5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIk9ubGluZSBhbmQgRXh0ZW5kZWQgY2FtcHVzXCI+T25saW5lIGFuZCBFeHRlbmRlZDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL2hhdmFzdS5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIj5MYWtlIEhhdmFzdTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImJvcmRlclwiIHRhcmdldD1cIl90b3BcIiBocmVmPVwiaHR0cDovL3d3dy50aHVuZGVyYmlyZC5lZHUvYWJvdXQtdGh1bmRlcmJpcmQvbG9jYXRpb25zL3Bob2VuaXgtYXJpem9uYVwiPlRodW5kZXJiaXJkPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vc2t5c29uZy5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIj5Ta3lzb25nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vYXN1cmVzZWFyY2hwYXJrLmNvbS9cIiB0YXJnZXQ9XCJfdG9wXCI+UmVzZWFyY2ggUGFyazwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3dhc2hpbmd0b25jZW50ZXIuYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCI+V2FzaGluZ3RvbiBELkMuPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vd3BjYXJleS5hc3UuZWR1L21iYS9jaGluYS1wcm9ncmFtL2VuZ2xpc2gvXCIgdGFyZ2V0PVwiX3RvcFwiPkNoaW5hPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vaXNlYXJjaC5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkRpcmVjdG9yeSwgSW5kZXggYW5kIG90aGVyIGluZm9cIj5EaXJlY3Rvcnk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQVNVTmF2OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQVNVU2VhcmNoQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZHJ1cGFsKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhc3Vfc2VhcmNoX21vZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGlkZGVuXCI+U2VhcmNoPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJnb29nbGUvYXBwbGlhbmNlL2Jsb2NrL2Zvcm1cIiBtZXRob2Q9XCJwb3N0XCIgX2xwY2hlY2tlZD1cIjFcIj48bGFiZWwgaHRtbEZvcj1cIm1hc3Vfc2VhcmNoX2JveFwiPlNlYXJjaDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaF9oZWFkZXJcIiBjbGFzcz1cImFzdV9zZWFyY2hfYm94XCIgaWQ9XCJtYXN1X3NlYXJjaF9ib3hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFzdV9zZWFyY2hfYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhc3Vfc2VhcmNoX21vZHVsZVwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoaWRkZW5cIj5TZWFyY2g8L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtIHRhcmdldD1cIl90b3BcIiBhY3Rpb249XCJodHRwczovL3NlYXJjaC5hc3UuZWR1L3NlYXJjaFwiIG1ldGhvZD1cImdldFwiIG5hbWU9XCJnc1wiIHJvbGU9XCJzZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYXN1X3NlYXJjaF9ib3hcIj5TZWFyY2g8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNpdGVcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJkZWZhdWx0X2NvbGxlY3Rpb25cIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic29ydFwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cImRhdGU6RDpMOmQxXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm91dHB1dFwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cInhtbF9ub19kdGRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicHJveHlzdHlsZXNoZWV0XCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiYXN1X2Zyb250ZW5kXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImllXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiVVRGLThcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwib2VcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJVVEYtOFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJjbGllbnRcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJhc3VfZnJvbnRlbmRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhc3Vfc2VhcmNoX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlYXJjaFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJxXCIgY2xhc3NOYW1lPVwiYXN1X3NlYXJjaF9ib3hcIiBpZD1cIm1hc3Vfc2VhcmNoX2JveFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQVNVU2VhcmNoQm94OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VIZWFkZXIgZnJvbSBcIi4uL3ByZXNlbnRhdGlvbmFsL0FTVUhlYWRlclwiO1xuXG5jbGFzcyBBU1VIZWFkZXJDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aGVhZGVyIGlkPVwiYXN1LWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8QVNVSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlck9iaj17dGhpcy5wcm9wcy5oZWFkZXJPYmp9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICApO1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgQVNVSGVhZGVyQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFTVVNlYXJjaEJveCBmcm9tIFwiLi4vQVNVU2VhcmNoQm94XCI7XG5pbXBvcnQgQVNVTmF2IGZyb20gXCIuLi9BU1VOYXZcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2Nzcy9BU1VIZWFkZXIuY3NzJztcblxuY2xhc3MgQVNVSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtyZW5kZXJDbGllbnQ6IGZhbHNlfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tc2VhcmNoXCIgY2xhc3NOYW1lPVwibWFpbi1zZWFyY2ggY2xvc2VkXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY2Vzc2liaWxpdHktaGlkZVwiPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L2FjY2Vzc2liaWxpdHkvXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlJlcG9ydCBhbiBhY2Nlc3NpYmlsaXR5IHByb2JsZW08L2E+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9oZHJcIiBjbGFzc05hbWU9e3N0eWxlcy5hc3VfaGRyX3doaXRlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9tb2JpbGVfaGRyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXN1X2xvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLy93d3cuYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiQSBTIFVcIiBzcmM9XCIvL3d3dy5hc3UuZWR1L2FzdXRoZW1lcy80LjYvYXNzZXRzL2Z1bGxfbG9nby5wbmdcIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3VoaWRlIGYtbmF2aWNvblwiIGlkPVwiYXN1X21vYmlsZV9idXR0b25cIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFTVSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDpBU1VIZWFkZXIudG9nZ2xlQVNVKCk7XCI+TWVudTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmLXNlYXJjaFwiIGlkPVwic2VhcmNoX25ld1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQVNVKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlZFwiIGlkPVwiYXN1X21vYmlsZV9tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QVNVTmF2Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBU1VTZWFyY2hCb3gvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZW5kZXJDbGllbnQgJiYgdGhpcy5wcm9wcy5oZWFkZXJPYmouc2l0ZV90aXRsZSAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZW5hbWVcIiBpZD1cImFzdV9oZHJfdGl0bGVfZ2VuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXN1X2hkcl9wYXJlbnRfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt0aGlzLnByb3BzLmhlYWRlck9iai5zaXRlX3RpdGxlLnBhcmVudF9vcmdfdXJsfT48c3BhbiBjbGFzc05hbWU9XCJhc3UtcGFyZW50LW9yZ1wiPnt0aGlzLnByb3BzLmhlYWRlck9iai5zaXRlX3RpdGxlLnBhcmVudF9vcmd9PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIkhvbWVcIiByZWw9XCJob21lXCIgaHJlZj17dGhpcy5wcm9wcy5oZWFkZXJPYmouc2l0ZV90aXRsZS5zaXRlX3VybH0+PHNwYW4gY2xhc3NOYW1lPVwiYXN1LXNpdGUtdGl0bGVcIj57dGhpcy5wcm9wcy5oZWFkZXJPYmouc2l0ZV90aXRsZS50aXRsZX08L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlckNsaWVudDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVBU1UoKSB7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFTVUhlYWRlcjtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBjdGVzdGFtYSBvbiAzLzIxLzE4LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VOYXYgZnJvbSAnLi9jb21wb25lbnRzL0FTVU5hdidcbmltcG9ydCBBU1VGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0FTVUZvb3RlcidcbmltcG9ydCBBU1VIZWFkZXJDb250YWluZXIgZnJvbSBcIi4vY29tcG9uZW50cy9jb250YWluZXIvQVNVSGVhZGVyQ29udGFpbmVyXCI7XG5cblxuY29uc3QgaW5pdEFTVUhlYWRlciA9IChhc3VfaGVhZGVyLCBlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudCA/IFJlYWN0RE9NLnJlbmRlcig8QVNVSGVhZGVyQ29udGFpbmVyIGhlYWRlck9iaj17YXN1X2hlYWRlcn0gLz4sIGVsZW1lbnQpIDogZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0QVNVSGVhZGVyLFxuICAgIEFTVUhlYWRlckNvbnRhaW5lcixcbiAgICBBU1VOYXYsXG4gICAgQVNVRm9vdGVyXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFzdV91bml2ZXJzYWxfbmF2X25ld1wiOiBcIkFTVUhlYWRlcl9fYXN1X3VuaXZlcnNhbF9uYXZfbmV3X19fUzYzUHVcIixcblx0XCJhc3VfaGRyX3doaXRlXCI6IFwiQVNVSGVhZGVyX19hc3VfaGRyX3doaXRlX19fTHBfRkxcIixcblx0XCJhc3VfaGRyXCI6IFwiQVNVSGVhZGVyX19hc3VfaGRyX19fMWgxU1FcIixcblx0XCJhc3VfbG9nb1wiOiBcIkFTVUhlYWRlcl9fYXN1X2xvZ29fX19xYmlwZlwiLFxuXHRcImFzdV9tb2JpbGVfaGRyXCI6IFwiQVNVSGVhZGVyX19hc3VfbW9iaWxlX2hkcl9fXzNFVHpnXCIsXG5cdFwiYXN1X21vYmlsZV9idXR0b25cIjogXCJBU1VIZWFkZXJfX2FzdV9tb2JpbGVfYnV0dG9uX19fMi1TTDRcIixcblx0XCJhc3VfcHJpbnRfbG9nb1wiOiBcIkFTVUhlYWRlcl9fYXN1X3ByaW50X2xvZ29fX18xcUFsclwiLFxuXHRcImFzdV9uYXZfd3JhcHBlclwiOiBcIkFTVUhlYWRlcl9fYXN1X25hdl93cmFwcGVyX19fMk5oZE5cIixcblx0XCJhc3VfbmF2X21lbnVcIjogXCJBU1VIZWFkZXJfX2FzdV9uYXZfbWVudV9fXzJ3dTJPXCIsXG5cdFwiYXN1X3VuaXZlcnNhbF9uYXZcIjogXCJBU1VIZWFkZXJfX2FzdV91bml2ZXJzYWxfbmF2X19fN0J0QkRcIixcblx0XCJhc3VfaGVhZF9ob3ZlclwiOiBcIkFTVUhlYWRlcl9fYXN1X2hlYWRfaG92ZXJfX19zUjJHNlwiLFxuXHRcInBhcmVudFwiOiBcIkFTVUhlYWRlcl9fcGFyZW50X19fMjRPYllcIixcblx0XCJib3JkZXJcIjogXCJBU1VIZWFkZXJfX2JvcmRlcl9fXzFYZU1MXCIsXG5cdFwiYXN1X3RvdWNoXCI6IFwiQVNVSGVhZGVyX19hc3VfdG91Y2hfX18xTHk1RlwiLFxuXHRcImFzdV9sb2dpbl9tb2R1bGVcIjogXCJBU1VIZWFkZXJfX2FzdV9sb2dpbl9tb2R1bGVfX18yejhjYlwiLFxuXHRcImVuZFwiOiBcIkFTVUhlYWRlcl9fZW5kX19fMlBuQ0JcIixcblx0XCJhc3Vfc2VhcmNoX21vZHVsZVwiOiBcIkFTVUhlYWRlcl9fYXN1X3NlYXJjaF9tb2R1bGVfX18yQ2RpclwiLFxuXHRcImFzdV9zZWFyY2hfYm94XCI6IFwiQVNVSGVhZGVyX19hc3Vfc2VhcmNoX2JveF9fXzJkNnNrXCIsXG5cdFwibWFzdV9zZWFyY2hfYm94XCI6IFwiQVNVSGVhZGVyX19tYXN1X3NlYXJjaF9ib3hfX19GemwtT1wiLFxuXHRcImFzdV9zZWFyY2hfYnV0dG9uXCI6IFwiQVNVSGVhZGVyX19hc3Vfc2VhcmNoX2J1dHRvbl9fXzJJb3JYXCIsXG5cdFwiYXN1X2Zvb3Rlcl9jb250YWN0X2luZm9cIjogXCJBU1VIZWFkZXJfX2FzdV9mb290ZXJfY29udGFjdF9pbmZvX19fM1JKckJcIixcblx0XCJmb290ZXJfaW1nX3dyYXBcIjogXCJBU1VIZWFkZXJfX2Zvb3Rlcl9pbWdfd3JhcF9fXzJBVHpBXCIsXG5cdFwiZm9vdGVyX2lubm92YXRlXCI6IFwiQVNVSGVhZGVyX19mb290ZXJfaW5ub3ZhdGVfX18xbW1EbVwiLFxuXHRcImFzdV9mb290ZXJcIjogXCJBU1VIZWFkZXJfX2FzdV9mb290ZXJfX18yNjhCdVwiLFxuXHRcImZvb3Rlcl9yaWdodFwiOiBcIkFTVUhlYWRlcl9fZm9vdGVyX3JpZ2h0X19fMThZTmVcIixcblx0XCJteWFzdV9iYXJcIjogXCJBU1VIZWFkZXJfX215YXN1X2Jhcl9fXzNnX1ZHXCIsXG5cdFwibXlhc3VfdGV4dFwiOiBcIkFTVUhlYWRlcl9fbXlhc3VfdGV4dF9fXzE0bG85XCIsXG5cdFwibXlhc3VfYXJyb3dcIjogXCJBU1VIZWFkZXJfX215YXN1X2Fycm93X19fMVdSMUVcIixcblx0XCJhc3Vfc2VhcmNoXCI6IFwiQVNVSGVhZGVyX19hc3Vfc2VhcmNoX19fMkhMT1FcIixcblx0XCJuYXZtZW51XCI6IFwiQVNVSGVhZGVyX19uYXZtZW51X19fMXhOM1FcIixcblx0XCJtYWluLXNlYXJjaFwiOiBcIkFTVUhlYWRlcl9fbWFpbi1zZWFyY2hfX18yZDNGeVwiLFxuXHRcImNsb3NlZFwiOiBcIkFTVUhlYWRlcl9fY2xvc2VkX19fM0wxOEVcIixcblx0XCJoaWRkZW5cIjogXCJBU1VIZWFkZXJfX2hpZGRlbl9fXzJ1UXdwXCIsXG5cdFwiaWNuXCI6IFwiQVNVSGVhZGVyX19pY25fX18zTVBTc1wiLFxuXHRcImljbjJcIjogXCJBU1VIZWFkZXJfX2ljbjJfX18xTllvT1wiLFxuXHRcImJsYWNrT3V0XCI6IFwiQVNVSGVhZGVyX19ibGFja091dF9fXzFrYk5oXCIsXG5cdFwiaW5ub3ZhdGlvbi1iYXJcIjogXCJBU1VIZWFkZXJfX2lubm92YXRpb24tYmFyX19fMzRLYzBcIixcblx0XCJpbm5vdmF0aW9uLWhpZGRlblwiOiBcIkFTVUhlYWRlcl9faW5ub3ZhdGlvbi1oaWRkZW5fX19uVWYtZ1wiLFxuXHRcImlubm92YXRpb24tc3RhdHVzXCI6IFwiQVNVSGVhZGVyX19pbm5vdmF0aW9uLXN0YXR1c19fXzFscUhJXCIsXG5cdFwiaW5ub3ZhdGlvbi1mb290ZXJcIjogXCJBU1VIZWFkZXJfX2lubm92YXRpb24tZm9vdGVyX19fM1BDT0JcIixcblx0XCJpbm5vdmF0aW9uLXRvcFwiOiBcIkFTVUhlYWRlcl9faW5ub3ZhdGlvbi10b3BfX18zcUVzZlwiLFxuXHRcImZvb3Rlci1tZW51XCI6IFwiQVNVSGVhZGVyX19mb290ZXItbWVudV9fXzNKcVhYXCIsXG5cdFwiZGVmYXVsdFwiOiBcIkFTVUhlYWRlcl9fZGVmYXVsdF9fXzJfWVFTXCIsXG5cdFwiYXN1X2hkcl9wYXJlbnRfdGl0bGVcIjogXCJBU1VIZWFkZXJfX2FzdV9oZHJfcGFyZW50X3RpdGxlX19fMmJ4eHZcIixcblx0XCJhc3UtcGFyZW50LW9yZ1wiOiBcIkFTVUhlYWRlcl9fYXN1LXBhcmVudC1vcmdfX18ycFBVcVwiLFxuXHRcImFzdS1zaXRlLXRpdGxlXCI6IFwiQVNVSGVhZGVyX19hc3Utc2l0ZS10aXRsZV9fXzF1SmdoXCIsXG5cdFwiaGVhZGVyX19zaXRlbmFtZVwiOiBcIkFTVUhlYWRlcl9faGVhZGVyX19zaXRlbmFtZV9fXzNzOUotXCIsXG5cdFwic3Itb25seVwiOiBcIkFTVUhlYWRlcl9fc3Itb25seV9fXzN4dG5KXCJcbn07IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGN0ZXN0YW1hIG9uIDQvMjUvMTguXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICh7IGlkLCBib2R5IH0pID0+IChgXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBpZD0ke2lkfT4ke2JvZHl9PC9kaXY+XG4gICAgPC9kaXY+ICBcbmApOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==