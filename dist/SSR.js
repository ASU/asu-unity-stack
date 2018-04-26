module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
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


var _fs = __webpack_require__(/*! fs */ "fs");

var _fs2 = _interopRequireDefault(_fs);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _core = __webpack_require__(/*! ./core.js */ "./core.js");

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

/***/ "./components/ASUFooter.js":
/*!*********************************!*\
  !*** ./components/ASUFooter.js ***!
  \*********************************/
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

/***/ "./components/ASULogin.js":
/*!********************************!*\
  !*** ./components/ASULogin.js ***!
  \********************************/
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

/***/ "./components/ASUNav.js":
/*!******************************!*\
  !*** ./components/ASUNav.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASULogin = __webpack_require__(/*! ./ASULogin */ "./components/ASULogin.js");

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

/***/ "./components/ASUSearchBox.js":
/*!************************************!*\
  !*** ./components/ASUSearchBox.js ***!
  \************************************/
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

/***/ "./components/container/ASUHeaderContainer.js":
/*!****************************************************!*\
  !*** ./components/container/ASUHeaderContainer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASUHeader = __webpack_require__(/*! ../presentational/ASUHeader */ "./components/presentational/ASUHeader.js");

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

/***/ "./components/presentational/ASUHeader.js":
/*!************************************************!*\
  !*** ./components/presentational/ASUHeader.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ASUSearchBox = __webpack_require__(/*! ../ASUSearchBox */ "./components/ASUSearchBox.js");

var _ASUSearchBox2 = _interopRequireDefault(_ASUSearchBox);

var _ASUNav = __webpack_require__(/*! ../ASUNav */ "./components/ASUNav.js");

var _ASUNav2 = _interopRequireDefault(_ASUNav);

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
                    { id: "asu_hdr", className: "asu_hdr_white" },
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

/***/ "./core.js":
/*!*****************!*\
  !*** ./core.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _ASUNav = __webpack_require__(/*! ./components/ASUNav */ "./components/ASUNav.js");

var _ASUNav2 = _interopRequireDefault(_ASUNav);

var _ASUFooter = __webpack_require__(/*! ./components/ASUFooter */ "./components/ASUFooter.js");

var _ASUFooter2 = _interopRequireDefault(_ASUFooter);

var _ASUHeaderContainer = __webpack_require__(/*! ./components/container/ASUHeaderContainer */ "./components/container/ASUHeaderContainer.js");

var _ASUHeaderContainer2 = _interopRequireDefault(_ASUHeaderContainer);

__webpack_require__(/*! ./styles/css/asu_header.css */ "./styles/css/asu_header.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initASUHeader = function initASUHeader(asu_header, element) {
    element ? ReactDOM.render(React.createElement(_ASUHeaderContainer2.default, { headerObj: asu_header }), element) : false;
}; /**
    * Created by ctestama on 3/21/18.
    */


module.exports = {
    initASUHeader: initASUHeader,
    ASUHeaderContainer: _ASUHeaderContainer2.default,
    ASUNav: _ASUNav2.default,
    ASUFooter: _ASUFooter2.default
};

/***/ }),

/***/ "./styles/css/asu_header.css":
/*!***********************************!*\
  !*** ./styles/css/asu_header.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"asu_universal_nav_new": "styles-css-asu_header---asu_universal_nav_new---s3kIE",
	"asu_hdr": "styles-css-asu_header---asu_hdr---1KNwI",
	"asu_logo": "styles-css-asu_header---asu_logo---25tkU",
	"asu_mobile_hdr": "styles-css-asu_header---asu_mobile_hdr---1NG8M",
	"asu_mobile_button": "styles-css-asu_header---asu_mobile_button---XjY24",
	"asu_print_logo": "styles-css-asu_header---asu_print_logo---3bpkg",
	"asu_nav_wrapper": "styles-css-asu_header---asu_nav_wrapper---37WoB",
	"asu_nav_menu": "styles-css-asu_header---asu_nav_menu---loFem",
	"asu_universal_nav": "styles-css-asu_header---asu_universal_nav---1c1LJ",
	"asu_head_hover": "styles-css-asu_header---asu_head_hover---3ZESJ",
	"parent": "styles-css-asu_header---parent---2xd4W",
	"border": "styles-css-asu_header---border---2gZWb",
	"asu_touch": "styles-css-asu_header---asu_touch---3fZPp",
	"asu_login_module": "styles-css-asu_header---asu_login_module---1C_NQ",
	"end": "styles-css-asu_header---end---1Qadx",
	"asu_search_module": "styles-css-asu_header---asu_search_module---2CfU-",
	"asu_search_box": "styles-css-asu_header---asu_search_box---H8dEd",
	"masu_search_box": "styles-css-asu_header---masu_search_box---2qc8I",
	"asu_search_button": "styles-css-asu_header---asu_search_button---36zNG",
	"asu_footer_contact_info": "styles-css-asu_header---asu_footer_contact_info---1zrJe",
	"footer_img_wrap": "styles-css-asu_header---footer_img_wrap---3Z3JX",
	"footer_innovate": "styles-css-asu_header---footer_innovate---3FxaB",
	"asu_footer": "styles-css-asu_header---asu_footer---1WBzz",
	"footer_right": "styles-css-asu_header---footer_right---2lITZ",
	"myasu_bar": "styles-css-asu_header---myasu_bar---2lnVn",
	"myasu_text": "styles-css-asu_header---myasu_text---g1rDO",
	"myasu_arrow": "styles-css-asu_header---myasu_arrow---z2fcw",
	"asu_search": "styles-css-asu_header---asu_search---2Deyt",
	"navmenu": "styles-css-asu_header---navmenu---1x79r",
	"main-search": "styles-css-asu_header---main-search---2_AAO",
	"closed": "styles-css-asu_header---closed---3ePw5",
	"hidden": "styles-css-asu_header---hidden---2BlKC",
	"icn": "styles-css-asu_header---icn---3Ed4K",
	"icn2": "styles-css-asu_header---icn2---1Trh4",
	"blackOut": "styles-css-asu_header---blackOut---3jA2b",
	"innovation-bar": "styles-css-asu_header---innovation-bar---16hXQ",
	"innovation-hidden": "styles-css-asu_header---innovation-hidden---3FkIO",
	"innovation-status": "styles-css-asu_header---innovation-status---ElQuq",
	"innovation-footer": "styles-css-asu_header---innovation-footer---3d0LR",
	"innovation-top": "styles-css-asu_header---innovation-top---1A0vC",
	"footer-menu": "styles-css-asu_header---footer-menu---1kt3a",
	"default": "styles-css-asu_header---default---1eHUc",
	"asu_hdr_parent_title": "styles-css-asu_header---asu_hdr_parent_title---2k9js",
	"asu-parent-org": "styles-css-asu_header---asu-parent-org---3kk9c",
	"asu-site-title": "styles-css-asu_header---asu-site-title---2ee0c",
	"header__sitename": "styles-css-asu_header---header__sitename---4H9_D",
	"sr-only": "styles-css-asu_header---sr-only---38V0e"
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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vU1NSLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQVNVRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQVNVTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BU1VOYXYuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BU1VTZWFyY2hCb3guanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250YWluZXIvQVNVSGVhZGVyQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvQVNVSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2Nzcy9hc3VfaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJBU1VIZWFkZXJPYmoiLCJyZW5kZXJBU1VDb21wb25lbnQiLCJyZXEiLCJyZXMiLCJjb21wb25lbnQiLCJBU1VDb21wb25lbnQiLCJ0eXBlIiwiaHRtbCIsInJlbmRlclRvU3RyaW5nIiwicHJvcHMiLCJzZW5kIiwiaWQiLCJkb21JZCIsImJvZHkiLCJyZW5kZXJBU1VIZWFkZXIiLCJoZWFkZXJPYmoiLCJyZW5kZXJBU1VGb290ZXIiLCJ0ZW1wbGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJBU1VGb290ZXIiLCJBU1VMb2dpbiIsIkFTVU5hdiIsIkFTVVNlYXJjaEJveCIsImRydXBhbCIsIkFTVUhlYWRlckNvbnRhaW5lciIsIkFTVUhlYWRlciIsInN0YXRlIiwicmVuZGVyQ2xpZW50IiwidG9nZ2xlQVNVIiwic2l0ZV90aXRsZSIsInBhcmVudF9vcmdfdXJsIiwicGFyZW50X29yZyIsInNpdGVfdXJsIiwidGl0bGUiLCJzZXRTdGF0ZSIsImluaXRBU1VIZWFkZXIiLCJhc3VfaGVhZGVyIiwiZWxlbWVudCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGVBQWUsRUFBckI7O0FBRUEsSUFBTUMscUJBQXNCLFNBQXRCQSxrQkFBc0IsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLFNBQVgsRUFBeUI7O0FBRWpELFFBQU1DLGVBQWVELFVBQVVFLElBQS9COztBQUVBO0FBQ0EsUUFBTUMsT0FBTyxpQkFBZUMsY0FBZixDQUE4Qiw4QkFBQyxZQUFELEVBQWtCSixVQUFVSyxLQUE1QixDQUE5QixDQUFiOztBQUVBTixRQUFJTyxJQUFKLENBQVMsd0JBQVM7QUFDZEMsWUFBSVAsVUFBVVEsS0FEQTtBQUVkQyxjQUFNTjtBQUZRLEtBQVQsQ0FBVDtBQUlILENBWEQ7O0FBYUEsSUFBTU8sa0JBQWtCLFNBQWxCQSxlQUFrQixD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QUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTs7O2tCQUdlO0FBQUEsUUFBR1QsRUFBSCxRQUFHQSxFQUFIO0FBQUEsUUFBT0UsSUFBUCxRQUFPQSxJQUFQO0FBQUEsNkNBRUdGLEVBRkgsU0FFU0UsSUFGVDtBQUFBLEM7Ozs7Ozs7Ozs7O0FDSGYsK0I7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoiU1NSLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyB3YXNtIG1vZHVsZXNcbiBcdHZhciBpbnN0YWxsZWRXYXNtTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gb2JqZWN0IHdpdGggYWxsIGNvbXBpbGVkIFdlYkFzc2VtYmx5Lk1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18udyA9IHt9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1NTUi5qc1wiKTtcbiIsImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHtBU1VIZWFkZXJDb250YWluZXIsIEFTVUZvb3Rlcn0gZnJvbSAnLi9jb3JlLmpzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy90ZW1wbGF0ZSc7XG5cbmNvbnN0IEFTVUhlYWRlck9iaiA9IHt9O1xuXG5jb25zdCByZW5kZXJBU1VDb21wb25lbnQgPSAgKHJlcSwgcmVzLCBjb21wb25lbnQpID0+IHtcblxuICAgIGNvbnN0IEFTVUNvbXBvbmVudCA9IGNvbXBvbmVudC50eXBlO1xuXG4gICAgLy8gUmVuZGVycyBjb21wb25lbnQgdG8gc3RyaW5nXG4gICAgY29uc3QgaHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKDxBU1VDb21wb25lbnQgey4uLmNvbXBvbmVudC5wcm9wc30gLz4pO1xuXG4gICAgcmVzLnNlbmQodGVtcGxhdGUoe1xuICAgICAgICBpZDogY29tcG9uZW50LmRvbUlkLFxuICAgICAgICBib2R5OiBodG1sXG4gICAgfSkpO1xufVxuXG5jb25zdCByZW5kZXJBU1VIZWFkZXIgPSAocmVxLCByZXMpID0+IHtcbiAgICByZW5kZXJBU1VDb21wb25lbnQocmVxLCByZXMsIHt0eXBlOiBBU1VIZWFkZXJDb250YWluZXIsIGRvbUlkOiAnYXN1LWhlYWRlci1jb250YWluZXInLCBwcm9wczoge2hlYWRlck9iajogQVNVSGVhZGVyT2JqfX0pO1xufTtcblxuY29uc3QgcmVuZGVyQVNVRm9vdGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVuZGVyQVNVQ29tcG9uZW50KHJlcSwgcmVzLCB7dHlwZTogQVNVRm9vdGVyLCBkb21JZDogJ2FzdS1mb290ZXItY29udGFpbmVyJywgcHJvcHM6IHt9LCB0ZW1wbGF0ZTogJy4vc3JjL2NvcmUvdGVtcGxhdGVzL2Zvb3Rlci5odG1sJ30pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcmVuZGVyQVNVQ29tcG9uZW50LFxuICAgIHJlbmRlckFTVUhlYWRlcixcbiAgICByZW5kZXJBU1VGb290ZXJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBBU1VGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJpbm5vdmF0aW9uLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbm5vdmF0aW9uLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubm92YXRpb24tdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubm92YXRpb24tc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvcmFua2luZ3NcIj48c3Bhbj5BU1UgaXMgIzEgaW4gdGhlIFUuUy4gZm9yIElubm92YXRpb248L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubm92YXRpb24taGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvcmFua2luZ3NcIj48aW1nIHNyYz1cIi8vd3d3LWRldi5hc3UuZWR1L2FzdXRoZW1lcy80LjYvYXNzZXRzL2Jlc3QtY29sbGVnZS0yMDE4LnBuZ1wiIGFsdD1cIkJlc3QgQ29sbGVnZXMgVS5TLiBOZXdzIE1vc3QgSW5ub3ZhdGl2ZSAyMDE4XCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L2NvcHlyaWdodC9cIj5Db3B5cmlnaHQgYW5kIFRyYWRlbWFyazwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L2FjY2Vzc2liaWxpdHkvXCI+QWNjZXNzaWJpbGl0eTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L3ByaXZhY3kvXCI+UHJpdmFjeTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L3RvdS9cIj5UZXJtcyBvZiBVc2U8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9hc3Vqb2JzXCI+Sm9iczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5hc3UuZWR1L2VtZXJnZW5jeS9cIj5FbWVyZ2VuY3k8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuby1ib3JkZXJcIj48YSBocmVmPVwiaHR0cHM6Ly93d3cuYXN1LmVkdS9jb250YWN0YXN1L1wiPkNvbnRhY3QgQVNVPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQVNVRm9vdGVyO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGN0ZXN0YW1hIG9uIDQvMTgvMTguXG4gKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQVNVTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIEluIC8gU2lnbiBPdXRcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHVsIGlkPVwiYXN1X2xvZ2luX21vZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZW5kXCIgaWQ9XCJhc3VfaGRyX3NzaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8vd2VibG9naW4uYXN1LmVkdS9jZ2ktYmluL2xvZ2luXCIgdGFyZ2V0PVwiX3RvcFwiPlNpZ24gSW48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG5cblxufVxuZXhwb3J0IGRlZmF1bHQgQVNVTG9naW47IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFTVUxvZ2luIGZyb20gJy4vQVNVTG9naW4nO1xuXG5jbGFzcyBBU1VOYXYgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9uYXZfd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxBU1VMb2dpbi8+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9uYXZfbWVudVwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cIkFTVVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBNZW51XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhc3VfdW5pdmVyc2FsX25hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYXJlbnRcIj48YSBocmVmPVwiLy93d3cuYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCI+QVNVIEhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJmaXJzdFwiIGhyZWY9XCIvL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPW5ld3NldmVudHNcIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJOZXdzIGFuZCBFdmVudHNcIj5OZXdzL0V2ZW50czwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPWFjYWRlbWljc1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkFjYWRlbWljc1wiPkFjYWRlbWljczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPXJlc2VhcmNoXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiUmVzZWFyY2hcIj5SZXNlYXJjaDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPWF0aGxldGljc1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkF0aGxldGljc1wiPkF0aGxldGljczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPWFsdW1uaVwiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkFsdW1uaVwiPkFsdW1uaTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPWdpdmluZ1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkdpdmluZ1wiPkdpdmluZzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1Lz9mZWF0dXJlPXByZXNpZGVudFwiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIlByZXNpZGVudFwiPlByZXNpZGVudDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1L2Fib3V0XCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiQWJvdXQgQVNVXCI+QWJvdXQgQVNVPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vbXkuYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCI+TXkgQVNVPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhcmVudFwiPjxhIGhyZWY9XCIvL3d3dy5hc3UuZWR1L2NvbGxlZ2VzL1wiIHRhcmdldD1cIl90b3BcIj5Db2xsZWdlcyBhbmQgU2Nob29sczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImZpcnN0XCIgaHJlZj1cIi8vYXJ0c2FuZHNjaWVuY2VzLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiQXJ0cyBhbmQgU2NpZW5jZXMgd2Vic2l0ZVwiPkFydHMgYW5kIFNjaWVuY2VzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vd3BjYXJleS5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIlcuIFAuIENhcmV5IFNjaG9vbCBvZiBCdXNpbmVzcyBXZWIgYW5kIE1vcnJpc29uIFNjaG9vbCBvZiBBZ3JpYnVzaW5lc3Mgd2Vic2l0ZVwiPkJ1c2luZXNzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vaGVyYmVyZ2VyaW5zdGl0dXRlLmFzdS5lZHVcIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJIZXJiZXJnZXIgSW5zdGl0dXRlIGZvciBEZXNpZ24gYW5kIHRoZSBBcnRzIHdlYnNpdGVcIj5EZXNpZ24gYW5kIHRoZSBBcnRzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vZWR1Y2F0aW9uLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiTWFyeSBMb3UgRnVsdG9uIFRlYWNoZXJzIENvbGxlZ2Ugd2Vic2l0ZVwiPkVkdWNhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL2VuZ2luZWVyaW5nLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiRW5naW5lZXJpbmcgd2Vic2l0ZVwiPkVuZ2luZWVyaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vc2Zpcy5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkZ1dHVyZSBvZiBJbm5vdmF0aW9uIGluIFNvY2lldHkgd2Vic2l0ZVwiPkZ1dHVyZSBvZiBJbm5vdmF0aW9uIGluIFNvY2lldHk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9ncmFkdWF0ZS5hc3UuZWR1XCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiR3JhZHVhdGUgQ29sbGVnZSB3ZWJzaXRlXCI+R3JhZHVhdGU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9jaHMuYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJIZWFsdGggU29sdXRpb25zIHdlYnNpdGVcIj5IZWFsdGggU29sdXRpb25zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vaG9ub3JzLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiQmFycmV0dCwgVGhlIEhvbm9ycyBDb2xsZWdlIHdlYnNpdGVcIj5Ib25vcnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9jcm9ua2l0ZS5hc3UuZWR1XCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiV2FsdGVyIENyb25raXRlIFNjaG9vbCBvZiBKb3VybmFsaXNtIGFuZCBNYXNzIENvbW11bmljYXRpb24gd2Vic2l0ZVwiPkpvdXJuYWxpc208L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy93d3cubGF3LmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiU2FuZHJhIERheSBPJyBDb25ub3IgQ29sbGVnZSBvZiBMYXcgd2Vic2l0ZVwiPkxhdzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL251cnNpbmdhbmRoZWFsdGguYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCIgdGl0bGU9XCJDb2xsZWdlIG9mIE51cnNpbmcgYW5kIEhlYWx0aCBJbm5vdmF0aW9uIHdlYnNpdGVcIj5OdXJzaW5nIGFuZCBIZWFsdGggSW5ub3ZhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL2NvcHAuYXN1LmVkdVwiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIkNvbGxlZ2Ugb2YgUHVibGljIFByb2dyYW1zIHdlYnNpdGVcIj5QdWJsaWMgU2VydmljZSBhbmQgQ29tbXVuaXR5IFNvbHV0aW9uczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL3NjaG9vbG9mc3VzdGFpbmFiaWxpdHkuYXN1LmVkdVwiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIlNjaG9vbCBvZiBTdXN0YWluYWJpbGl0eSB3ZWJzaXRlXCI+U3VzdGFpbmFiaWxpdHk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy91Yy5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIlVuaXZlcnNpdHkgQ29sbGVnZSB3ZWJzaXRlXCI+VW5pdmVyc2l0eSBDb2xsZWdlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgdGFyZ2V0PVwiX3RvcFwiIGhyZWY9XCJodHRwOi8vd3d3LnRodW5kZXJiaXJkLmVkdS9cIiB0aXRsZT1cIlRodW5kZXJiaXJkIFNjaG9vbCBvZiBHbG9iYWwgTWFuYWdlbWVudCB3ZWJzaXRlXCI+VGh1bmRlcmJpcmQgU2Nob29sIG9mIEdsb2JhbCBNYW5hZ2VtZW50PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFyZW50XCI+PGEgaHJlZj1cIi8vd3d3LmFzdS5lZHUvbWFwL1wiIHRhcmdldD1cIl90b3BcIj5NYXAgYW5kIExvY2F0aW9uczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImJvcmRlciBmaXJzdFwiIGhyZWY9XCIvL3d3dy5hc3UuZWR1L21hcC9cIiB0YXJnZXQ9XCJfdG9wXCI+TWFwPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vY2FtcHVzLmFzdS5lZHUvdGVtcGUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiVGVtcGUgY2FtcHVzXCI+VGVtcGU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9jYW1wdXMuYXN1LmVkdS93ZXN0L1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIldlc3QgY2FtcHVzXCI+V2VzdDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvL2NhbXB1cy5hc3UuZWR1L3BvbHl0ZWNobmljL1wiIHRhcmdldD1cIl90b3BcIiB0aXRsZT1cIlBvbHl0ZWNobmljIGNhbXB1c1wiPlBvbHl0ZWNobmljPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vY2FtcHVzLmFzdS5lZHUvZG93bnRvd24vXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiRG93bnRvd24gUGhvZW5peCBjYW1wdXNcIj5Eb3dudG93biBQaG9lbml4PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vYXN1b25saW5lLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiT25saW5lIGFuZCBFeHRlbmRlZCBjYW1wdXNcIj5PbmxpbmUgYW5kIEV4dGVuZGVkPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vaGF2YXN1LmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiPkxha2UgSGF2YXN1PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiYm9yZGVyXCIgdGFyZ2V0PVwiX3RvcFwiIGhyZWY9XCJodHRwOi8vd3d3LnRodW5kZXJiaXJkLmVkdS9hYm91dC10aHVuZGVyYmlyZC9sb2NhdGlvbnMvcGhvZW5peC1hcml6b25hXCI+VGh1bmRlcmJpcmQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9za3lzb25nLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiPlNreXNvbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9hc3VyZXNlYXJjaHBhcmsuY29tL1wiIHRhcmdldD1cIl90b3BcIj5SZXNlYXJjaCBQYXJrPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8vd2FzaGluZ3RvbmNlbnRlci5hc3UuZWR1L1wiIHRhcmdldD1cIl90b3BcIj5XYXNoaW5ndG9uIEQuQy48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy93cGNhcmV5LmFzdS5lZHUvbWJhL2NoaW5hLXByb2dyYW0vZW5nbGlzaC9cIiB0YXJnZXQ9XCJfdG9wXCI+Q2hpbmE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLy9pc2VhcmNoLmFzdS5lZHUvXCIgdGFyZ2V0PVwiX3RvcFwiIHRpdGxlPVwiRGlyZWN0b3J5LCBJbmRleCBhbmQgb3RoZXIgaW5mb1wiPkRpcmVjdG9yeTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBU1VOYXY7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBBU1VTZWFyY2hCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kcnVwYWwpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9zZWFyY2hfbW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoaWRkZW5cIj5TZWFyY2g8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImdvb2dsZS9hcHBsaWFuY2UvYmxvY2svZm9ybVwiIG1ldGhvZD1cInBvc3RcIiBfbHBjaGVja2VkPVwiMVwiPjxsYWJlbCBodG1sRm9yPVwibWFzdV9zZWFyY2hfYm94XCI+U2VhcmNoPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2VhcmNoX2hlYWRlclwiIGNsYXNzPVwiYXN1X3NlYXJjaF9ib3hcIiBpZD1cIm1hc3Vfc2VhcmNoX2JveFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYXN1X3NlYXJjaF9idXR0b25cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZWFyY2hcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9zZWFyY2hfbW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhpZGRlblwiPlNlYXJjaDwvaDI+XG4gICAgICAgICAgICAgICAgPGZvcm0gdGFyZ2V0PVwiX3RvcFwiIGFjdGlvbj1cImh0dHBzOi8vc2VhcmNoLmFzdS5lZHUvc2VhcmNoXCIgbWV0aG9kPVwiZ2V0XCIgbmFtZT1cImdzXCIgcm9sZT1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1hc3Vfc2VhcmNoX2JveFwiPlNlYXJjaDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2l0ZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cImRlZmF1bHRfY29sbGVjdGlvblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzb3J0XCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiZGF0ZTpEOkw6ZDFcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwib3V0cHV0XCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwieG1sX25vX2R0ZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwcm94eXN0eWxlc2hlZXRcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJhc3VfZnJvbnRlbmRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaWVcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJVVEYtOFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJvZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIlVURi04XCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImNsaWVudFwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cImFzdV9mcm9udGVuZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFzdV9zZWFyY2hfYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInFcIiBjbGFzc05hbWU9XCJhc3Vfc2VhcmNoX2JveFwiIGlkPVwibWFzdV9zZWFyY2hfYm94XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBU1VTZWFyY2hCb3g7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFTVUhlYWRlciBmcm9tIFwiLi4vcHJlc2VudGF0aW9uYWwvQVNVSGVhZGVyXCI7XG5cbmNsYXNzIEFTVUhlYWRlckNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXIgaWQ9XCJhc3UtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxBU1VIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyT2JqPXt0aGlzLnByb3BzLmhlYWRlck9ian1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBBU1VIZWFkZXJDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQVNVU2VhcmNoQm94IGZyb20gXCIuLi9BU1VTZWFyY2hCb3hcIjtcbmltcG9ydCBBU1VOYXYgZnJvbSBcIi4uL0FTVU5hdlwiO1xuXG5jbGFzcyBBU1VIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge3JlbmRlckNsaWVudDogZmFsc2V9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1zZWFyY2hcIiBjbGFzc05hbWU9XCJtYWluLXNlYXJjaCBjbG9zZWRcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjZXNzaWJpbGl0eS1oaWRlXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFzdS5lZHUvYWNjZXNzaWJpbGl0eS9cIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UmVwb3J0IGFuIGFjY2Vzc2liaWxpdHkgcHJvYmxlbTwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXN1X2hkclwiIGNsYXNzTmFtZT1cImFzdV9oZHJfd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFzdV9tb2JpbGVfaGRyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXN1X2xvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLy93d3cuYXN1LmVkdS9cIiB0YXJnZXQ9XCJfdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiQSBTIFVcIiBzcmM9XCIvL3d3dy5hc3UuZWR1L2FzdXRoZW1lcy80LjYvYXNzZXRzL2Z1bGxfbG9nby5wbmdcIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3VoaWRlIGYtbmF2aWNvblwiIGlkPVwiYXN1X21vYmlsZV9idXR0b25cIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFTVSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDpBU1VIZWFkZXIudG9nZ2xlQVNVKCk7XCI+TWVudTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmLXNlYXJjaFwiIGlkPVwic2VhcmNoX25ld1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQVNVKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlZFwiIGlkPVwiYXN1X21vYmlsZV9tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QVNVTmF2Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBU1VTZWFyY2hCb3gvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZW5kZXJDbGllbnQgJiYgdGhpcy5wcm9wcy5oZWFkZXJPYmouc2l0ZV90aXRsZSAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZW5hbWVcIiBpZD1cImFzdV9oZHJfdGl0bGVfZ2VuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXN1X2hkcl9wYXJlbnRfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt0aGlzLnByb3BzLmhlYWRlck9iai5zaXRlX3RpdGxlLnBhcmVudF9vcmdfdXJsfT48c3BhbiBjbGFzc05hbWU9XCJhc3UtcGFyZW50LW9yZ1wiPnt0aGlzLnByb3BzLmhlYWRlck9iai5zaXRlX3RpdGxlLnBhcmVudF9vcmd9PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIkhvbWVcIiByZWw9XCJob21lXCIgaHJlZj17dGhpcy5wcm9wcy5oZWFkZXJPYmouc2l0ZV90aXRsZS5zaXRlX3VybH0+PHNwYW4gY2xhc3NOYW1lPVwiYXN1LXNpdGUtdGl0bGVcIj57dGhpcy5wcm9wcy5oZWFkZXJPYmouc2l0ZV90aXRsZS50aXRsZX08L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlckNsaWVudDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVBU1UoKSB7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFTVUhlYWRlcjtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBjdGVzdGFtYSBvbiAzLzIxLzE4LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBU1VOYXYgZnJvbSAnLi9jb21wb25lbnRzL0FTVU5hdidcbmltcG9ydCBBU1VGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0FTVUZvb3RlcidcbmltcG9ydCBBU1VIZWFkZXJDb250YWluZXIgZnJvbSBcIi4vY29tcG9uZW50cy9jb250YWluZXIvQVNVSGVhZGVyQ29udGFpbmVyXCI7XG5pbXBvcnQgJy4vc3R5bGVzL2Nzcy9hc3VfaGVhZGVyLmNzcyc7XG5cbmNvbnN0IGluaXRBU1VIZWFkZXIgPSAoYXN1X2hlYWRlciwgZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQgPyBSZWFjdERPTS5yZW5kZXIoPEFTVUhlYWRlckNvbnRhaW5lciBoZWFkZXJPYmo9e2FzdV9oZWFkZXJ9IC8+LCBlbGVtZW50KSA6IGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW5pdEFTVUhlYWRlcixcbiAgICBBU1VIZWFkZXJDb250YWluZXIsXG4gICAgQVNVTmF2LFxuICAgIEFTVUZvb3RlclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhc3VfdW5pdmVyc2FsX25hdl9uZXdcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1hc3VfdW5pdmVyc2FsX25hdl9uZXctLS1zM2tJRVwiLFxuXHRcImFzdV9oZHJcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1hc3VfaGRyLS0tMUtOd0lcIixcblx0XCJhc3VfbG9nb1wiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWFzdV9sb2dvLS0tMjV0a1VcIixcblx0XCJhc3VfbW9iaWxlX2hkclwiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWFzdV9tb2JpbGVfaGRyLS0tMU5HOE1cIixcblx0XCJhc3VfbW9iaWxlX2J1dHRvblwiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWFzdV9tb2JpbGVfYnV0dG9uLS0tWGpZMjRcIixcblx0XCJhc3VfcHJpbnRfbG9nb1wiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWFzdV9wcmludF9sb2dvLS0tM2Jwa2dcIixcblx0XCJhc3VfbmF2X3dyYXBwZXJcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1hc3VfbmF2X3dyYXBwZXItLS0zN1dvQlwiLFxuXHRcImFzdV9uYXZfbWVudVwiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWFzdV9uYXZfbWVudS0tLWxvRmVtXCIsXG5cdFwiYXN1X3VuaXZlcnNhbF9uYXZcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1hc3VfdW5pdmVyc2FsX25hdi0tLTFjMUxKXCIsXG5cdFwiYXN1X2hlYWRfaG92ZXJcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1hc3VfaGVhZF9ob3Zlci0tLTNaRVNKXCIsXG5cdFwicGFyZW50XCI6IFwic3R5bGVzLWNzcy1hc3VfaGVhZGVyLS0tcGFyZW50LS0tMnhkNFdcIixcblx0XCJib3JkZXJcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1ib3JkZXItLS0yZ1pXYlwiLFxuXHRcImFzdV90b3VjaFwiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWFzdV90b3VjaC0tLTNmWlBwXCIsXG5cdFwiYXN1X2xvZ2luX21vZHVsZVwiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWFzdV9sb2dpbl9tb2R1bGUtLS0xQ19OUVwiLFxuXHRcImVuZFwiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWVuZC0tLTFRYWR4XCIsXG5cdFwiYXN1X3NlYXJjaF9tb2R1bGVcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1hc3Vfc2VhcmNoX21vZHVsZS0tLTJDZlUtXCIsXG5cdFwiYXN1X3NlYXJjaF9ib3hcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1hc3Vfc2VhcmNoX2JveC0tLUg4ZEVkXCIsXG5cdFwibWFzdV9zZWFyY2hfYm94XCI6IFwic3R5bGVzLWNzcy1hc3VfaGVhZGVyLS0tbWFzdV9zZWFyY2hfYm94LS0tMnFjOElcIixcblx0XCJhc3Vfc2VhcmNoX2J1dHRvblwiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWFzdV9zZWFyY2hfYnV0dG9uLS0tMzZ6TkdcIixcblx0XCJhc3VfZm9vdGVyX2NvbnRhY3RfaW5mb1wiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWFzdV9mb290ZXJfY29udGFjdF9pbmZvLS0tMXpySmVcIixcblx0XCJmb290ZXJfaW1nX3dyYXBcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1mb290ZXJfaW1nX3dyYXAtLS0zWjNKWFwiLFxuXHRcImZvb3Rlcl9pbm5vdmF0ZVwiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWZvb3Rlcl9pbm5vdmF0ZS0tLTNGeGFCXCIsXG5cdFwiYXN1X2Zvb3RlclwiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWFzdV9mb290ZXItLS0xV0J6elwiLFxuXHRcImZvb3Rlcl9yaWdodFwiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWZvb3Rlcl9yaWdodC0tLTJsSVRaXCIsXG5cdFwibXlhc3VfYmFyXCI6IFwic3R5bGVzLWNzcy1hc3VfaGVhZGVyLS0tbXlhc3VfYmFyLS0tMmxuVm5cIixcblx0XCJteWFzdV90ZXh0XCI6IFwic3R5bGVzLWNzcy1hc3VfaGVhZGVyLS0tbXlhc3VfdGV4dC0tLWcxckRPXCIsXG5cdFwibXlhc3VfYXJyb3dcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1teWFzdV9hcnJvdy0tLXoyZmN3XCIsXG5cdFwiYXN1X3NlYXJjaFwiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWFzdV9zZWFyY2gtLS0yRGV5dFwiLFxuXHRcIm5hdm1lbnVcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1uYXZtZW51LS0tMXg3OXJcIixcblx0XCJtYWluLXNlYXJjaFwiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLW1haW4tc2VhcmNoLS0tMl9BQU9cIixcblx0XCJjbG9zZWRcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1jbG9zZWQtLS0zZVB3NVwiLFxuXHRcImhpZGRlblwiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWhpZGRlbi0tLTJCbEtDXCIsXG5cdFwiaWNuXCI6IFwic3R5bGVzLWNzcy1hc3VfaGVhZGVyLS0taWNuLS0tM0VkNEtcIixcblx0XCJpY24yXCI6IFwic3R5bGVzLWNzcy1hc3VfaGVhZGVyLS0taWNuMi0tLTFUcmg0XCIsXG5cdFwiYmxhY2tPdXRcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1ibGFja091dC0tLTNqQTJiXCIsXG5cdFwiaW5ub3ZhdGlvbi1iYXJcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1pbm5vdmF0aW9uLWJhci0tLTE2aFhRXCIsXG5cdFwiaW5ub3ZhdGlvbi1oaWRkZW5cIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1pbm5vdmF0aW9uLWhpZGRlbi0tLTNGa0lPXCIsXG5cdFwiaW5ub3ZhdGlvbi1zdGF0dXNcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1pbm5vdmF0aW9uLXN0YXR1cy0tLUVsUXVxXCIsXG5cdFwiaW5ub3ZhdGlvbi1mb290ZXJcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1pbm5vdmF0aW9uLWZvb3Rlci0tLTNkMExSXCIsXG5cdFwiaW5ub3ZhdGlvbi10b3BcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1pbm5vdmF0aW9uLXRvcC0tLTFBMHZDXCIsXG5cdFwiZm9vdGVyLW1lbnVcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1mb290ZXItbWVudS0tLTFrdDNhXCIsXG5cdFwiZGVmYXVsdFwiOiBcInN0eWxlcy1jc3MtYXN1X2hlYWRlci0tLWRlZmF1bHQtLS0xZUhVY1wiLFxuXHRcImFzdV9oZHJfcGFyZW50X3RpdGxlXCI6IFwic3R5bGVzLWNzcy1hc3VfaGVhZGVyLS0tYXN1X2hkcl9wYXJlbnRfdGl0bGUtLS0yazlqc1wiLFxuXHRcImFzdS1wYXJlbnQtb3JnXCI6IFwic3R5bGVzLWNzcy1hc3VfaGVhZGVyLS0tYXN1LXBhcmVudC1vcmctLS0za2s5Y1wiLFxuXHRcImFzdS1zaXRlLXRpdGxlXCI6IFwic3R5bGVzLWNzcy1hc3VfaGVhZGVyLS0tYXN1LXNpdGUtdGl0bGUtLS0yZWUwY1wiLFxuXHRcImhlYWRlcl9fc2l0ZW5hbWVcIjogXCJzdHlsZXMtY3NzLWFzdV9oZWFkZXItLS1oZWFkZXJfX3NpdGVuYW1lLS0tNEg5X0RcIixcblx0XCJzci1vbmx5XCI6IFwic3R5bGVzLWNzcy1hc3VfaGVhZGVyLS0tc3Itb25seS0tLTM4VjBlXCJcbn07IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGN0ZXN0YW1hIG9uIDQvMjUvMTguXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICh7IGlkLCBib2R5IH0pID0+IChgXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBpZD0ke2lkfT4ke2JvZHl9PC9kaXY+XG4gICAgPC9kaXY+ICBcbmApOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==