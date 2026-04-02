import ft, { forwardRef as Vi, Component as pu, createContext as ll, useRef as Wr, useImperativeHandle as fu, useId as cl, useContext as Vt, createElement as ul, useState as ct, useEffect as At, useLayoutEffect as mu, useMemo as dl, Fragment as pl, createRef as hu } from "react";
import fl from "react-dom";
function Ki(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ga = { exports: {} }, hn = {};
var Lo;
function gu() {
  if (Lo) return hn;
  Lo = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, b, f) {
    var k, A = {}, O = null, U = null;
    f !== void 0 && (O = "" + f), b.key !== void 0 && (O = "" + b.key), b.ref !== void 0 && (U = b.ref);
    for (k in b) n.call(b, k) && !s.hasOwnProperty(k) && (A[k] = b[k]);
    if (m && m.defaultProps) for (k in b = m.defaultProps, b) A[k] === void 0 && (A[k] = b[k]);
    return { $$typeof: t, type: m, key: O, ref: U, props: A, _owner: a.current };
  }
  return hn.Fragment = r, hn.jsx = p, hn.jsxs = p, hn;
}
var Mo;
function bu() {
  return Mo || (Mo = 1, Ga.exports = gu()), Ga.exports;
}
var d = bu();
function Xi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fo = { exports: {} }, gn = {}, $o;
function yu() {
  if ($o) return gn;
  $o = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, b, f) {
    var k, A = {}, O = null, U = null;
    f !== void 0 && (O = "" + f), b.key !== void 0 && (O = "" + b.key), b.ref !== void 0 && (U = b.ref);
    for (k in b) n.call(b, k) && !s.hasOwnProperty(k) && (A[k] = b[k]);
    if (m && m.defaultProps) for (k in b = m.defaultProps, b) A[k] === void 0 && (A[k] = b[k]);
    return { $$typeof: t, type: m, key: O, ref: U, props: A, _owner: a.current };
  }
  return gn.Fragment = r, gn.jsx = p, gn.jsxs = p, gn;
}
var Uo;
function xu() {
  return Uo || (Uo = 1, Fo.exports = yu()), Fo.exports;
}
var H = xu(), zo = { exports: {} }, Ya, Ho;
function vu() {
  if (Ho) return Ya;
  Ho = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ya = e, Ya;
}
var Va, qo;
function wu() {
  if (qo) return Va;
  qo = 1;
  var e = /* @__PURE__ */ vu();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Va = function() {
    function n(p, m, b, f, k, A) {
      if (A !== e) {
        var O = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw O.name = "Invariant Violation", O;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Va;
}
var Bo;
function Su() {
  return Bo || (Bo = 1, zo.exports = /* @__PURE__ */ wu()()), zo.exports;
}
var ku = /* @__PURE__ */ Su();
const l = /* @__PURE__ */ Xi(ku);
function Tu(e) {
  const [t, r] = ct(!1);
  return At(() => {
    const n = window.matchMedia(e);
    n.matches !== t && r(n.matches);
    const a = () => {
      r(n.matches);
    };
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [t, e]), t;
}
const Wo = (e, t, r) => e ? t : r, Cu = (e) => (e || []).join(" "), {
  entries: ml,
  setPrototypeOf: Go,
  isFrozen: Eu,
  getPrototypeOf: Au,
  getOwnPropertyDescriptor: _u
} = Object;
let {
  freeze: _t,
  seal: Wt,
  create: ha
} = Object, {
  apply: Ai,
  construct: _i
} = typeof Reflect < "u" && Reflect;
_t || (_t = function(e) {
  return e;
});
Wt || (Wt = function(e) {
  return e;
});
Ai || (Ai = function(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  return e.apply(t, n);
});
_i || (_i = function(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return new e(...r);
});
const ra = Ot(Array.prototype.forEach), Ou = Ot(Array.prototype.lastIndexOf), Yo = Ot(Array.prototype.pop), bn = Ot(Array.prototype.push), ju = Ot(Array.prototype.splice), ga = Ot(String.prototype.toLowerCase), Ka = Ot(String.prototype.toString), Xa = Ot(String.prototype.match), yn = Ot(String.prototype.replace), Nu = Ot(String.prototype.indexOf), Ru = Ot(String.prototype.trim), Ut = Ot(Object.prototype.hasOwnProperty), Ct = Ot(RegExp.prototype.test), xn = Iu(TypeError);
function Ot(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Ai(e, t, n);
  };
}
function Iu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return _i(e, r);
  };
}
function De(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ga;
  Go && Go(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (Eu(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function Pu(e) {
  for (let t = 0; t < e.length; t++)
    Ut(e, t) || (e[t] = null);
  return e;
}
function mr(e) {
  const t = ha(null);
  for (const [r, n] of ml(e))
    Ut(e, r) && (Array.isArray(n) ? t[r] = Pu(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = mr(n) : t[r] = n);
  return t;
}
function vn(e, t) {
  for (; e !== null; ) {
    const n = _u(e, t);
    if (n) {
      if (n.get)
        return Ot(n.get);
      if (typeof n.value == "function")
        return Ot(n.value);
    }
    e = Au(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Vo = _t(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ja = _t(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Za = _t(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Du = _t(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Qa = _t(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Lu = _t(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ko = _t(["#text"]), Xo = _t(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ei = _t(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Jo = _t(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), na = _t(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Mu = Wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Fu = Wt(/<%[\w\W]*|[\w\W]*%>/gm), $u = Wt(/\$\{[\w\W]*/gm), Uu = Wt(/^data-[\-\w.\u00B7-\uFFFF]+$/), zu = Wt(/^aria-[\-\w]+$/), hl = Wt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Hu = Wt(/^(?:\w+script|data):/i), qu = Wt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), gl = Wt(/^html$/i), Bu = Wt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Zo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: zu,
  ATTR_WHITESPACE: qu,
  CUSTOM_ELEMENT: Bu,
  DATA_ATTR: Uu,
  DOCTYPE_NAME: gl,
  ERB_EXPR: Fu,
  IS_ALLOWED_URI: hl,
  IS_SCRIPT_OR_DATA: Hu,
  MUSTACHE_EXPR: Mu,
  TMPLIT_EXPR: $u
});
const wn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Wu = function() {
  return typeof window > "u" ? null : window;
}, Gu = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  t && t.hasAttribute(n) && (r = t.getAttribute(n));
  const a = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(a, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, Qo = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function bl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wu();
  const t = (y) => bl(y);
  if (t.version = "3.3.2", t.removed = [], !e || !e.document || e.document.nodeType !== wn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: p,
    Node: m,
    Element: b,
    NodeFilter: f,
    NamedNodeMap: k = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: A,
    DOMParser: O,
    trustedTypes: U
  } = e, _ = b.prototype, C = vn(_, "cloneNode"), N = vn(_, "remove"), L = vn(_, "nextSibling"), $ = vn(_, "childNodes"), G = vn(_, "parentNode");
  if (typeof p == "function") {
    const y = r.createElement("template");
    y.content && y.content.ownerDocument && (r = y.content.ownerDocument);
  }
  let z, w = "";
  const {
    implementation: ee,
    createNodeIterator: ue,
    createDocumentFragment: xe,
    getElementsByTagName: Re
  } = r, {
    importNode: Me
  } = n;
  let se = Qo();
  t.isSupported = typeof ml == "function" && typeof G == "function" && ee && ee.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: Oe,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: we,
    ARIA_ATTR: Ze,
    IS_SCRIPT_OR_DATA: je,
    ATTR_WHITESPACE: Ee,
    CUSTOM_ELEMENT: Fe
  } = Zo;
  let {
    IS_ALLOWED_URI: qe
  } = Zo, ce = null;
  const W = De({}, [...Vo, ...Ja, ...Za, ...Qa, ...Ko]);
  let I = null;
  const B = De({}, [...Xo, ...ei, ...Jo, ...na]);
  let q = Object.seal(ha(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), x = null, ne = null;
  const j = Object.seal(ha(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let le = !0, te = !0, ae = !1, X = !0, oe = !1, he = !0, Q = !1, ve = !1, ie = !1, fe = !1, Ge = !1, me = !1, dt = !0, Ve = !1;
  const _e = "user-content-";
  let K = !0, de = !1, et = {}, $e = null;
  const Ue = De({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let lr = null;
  const cr = De({}, ["audio", "video", "img", "source", "image", "track"]);
  let Kt = null;
  const Xt = De({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), yt = "http://www.w3.org/1998/Math/MathML", Rt = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml";
  let bt = st, Jt = !1, Zt = null;
  const xt = De({}, [yt, Rt, st], Ka);
  let Tt = De({}, ["mi", "mo", "mn", "ms", "mtext"]), vt = De({}, ["annotation-xml"]);
  const ze = De({}, ["title", "style", "font", "a", "script"]);
  let mt = null;
  const ur = ["application/xhtml+xml", "text/html"], Qt = "text/html";
  let ge = null, pt = null;
  const It = r.createElement("form"), dr = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Pt = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(pt && pt === y)) {
      if ((!y || typeof y != "object") && (y = {}), y = mr(y), mt = // eslint-disable-next-line unicorn/prefer-includes
      ur.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Qt : y.PARSER_MEDIA_TYPE, ge = mt === "application/xhtml+xml" ? Ka : ga, ce = Ut(y, "ALLOWED_TAGS") ? De({}, y.ALLOWED_TAGS, ge) : W, I = Ut(y, "ALLOWED_ATTR") ? De({}, y.ALLOWED_ATTR, ge) : B, Zt = Ut(y, "ALLOWED_NAMESPACES") ? De({}, y.ALLOWED_NAMESPACES, Ka) : xt, Kt = Ut(y, "ADD_URI_SAFE_ATTR") ? De(mr(Xt), y.ADD_URI_SAFE_ATTR, ge) : Xt, lr = Ut(y, "ADD_DATA_URI_TAGS") ? De(mr(cr), y.ADD_DATA_URI_TAGS, ge) : cr, $e = Ut(y, "FORBID_CONTENTS") ? De({}, y.FORBID_CONTENTS, ge) : Ue, x = Ut(y, "FORBID_TAGS") ? De({}, y.FORBID_TAGS, ge) : mr({}), ne = Ut(y, "FORBID_ATTR") ? De({}, y.FORBID_ATTR, ge) : mr({}), et = Ut(y, "USE_PROFILES") ? y.USE_PROFILES : !1, le = y.ALLOW_ARIA_ATTR !== !1, te = y.ALLOW_DATA_ATTR !== !1, ae = y.ALLOW_UNKNOWN_PROTOCOLS || !1, X = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, oe = y.SAFE_FOR_TEMPLATES || !1, he = y.SAFE_FOR_XML !== !1, Q = y.WHOLE_DOCUMENT || !1, fe = y.RETURN_DOM || !1, Ge = y.RETURN_DOM_FRAGMENT || !1, me = y.RETURN_TRUSTED_TYPE || !1, ie = y.FORCE_BODY || !1, dt = y.SANITIZE_DOM !== !1, Ve = y.SANITIZE_NAMED_PROPS || !1, K = y.KEEP_CONTENT !== !1, de = y.IN_PLACE || !1, qe = y.ALLOWED_URI_REGEXP || hl, bt = y.NAMESPACE || st, Tt = y.MATHML_TEXT_INTEGRATION_POINTS || Tt, vt = y.HTML_INTEGRATION_POINTS || vt, q = y.CUSTOM_ELEMENT_HANDLING || {}, y.CUSTOM_ELEMENT_HANDLING && dr(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (q.tagNameCheck = y.CUSTOM_ELEMENT_HANDLING.tagNameCheck), y.CUSTOM_ELEMENT_HANDLING && dr(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (q.attributeNameCheck = y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), oe && (te = !1), Ge && (fe = !0), et && (ce = De({}, Ko), I = ha(null), et.html === !0 && (De(ce, Vo), De(I, Xo)), et.svg === !0 && (De(ce, Ja), De(I, ei), De(I, na)), et.svgFilters === !0 && (De(ce, Za), De(I, ei), De(I, na)), et.mathMl === !0 && (De(ce, Qa), De(I, Jo), De(I, na))), Ut(y, "ADD_TAGS") || (j.tagCheck = null), Ut(y, "ADD_ATTR") || (j.attributeCheck = null), y.ADD_TAGS && (typeof y.ADD_TAGS == "function" ? j.tagCheck = y.ADD_TAGS : (ce === W && (ce = mr(ce)), De(ce, y.ADD_TAGS, ge))), y.ADD_ATTR && (typeof y.ADD_ATTR == "function" ? j.attributeCheck = y.ADD_ATTR : (I === B && (I = mr(I)), De(I, y.ADD_ATTR, ge))), y.ADD_URI_SAFE_ATTR && De(Kt, y.ADD_URI_SAFE_ATTR, ge), y.FORBID_CONTENTS && ($e === Ue && ($e = mr($e)), De($e, y.FORBID_CONTENTS, ge)), y.ADD_FORBID_CONTENTS && ($e === Ue && ($e = mr($e)), De($e, y.ADD_FORBID_CONTENTS, ge)), K && (ce["#text"] = !0), Q && De(ce, ["html", "head", "body"]), ce.table && (De(ce, ["tbody"]), delete x.tbody), y.TRUSTED_TYPES_POLICY) {
        if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw xn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw xn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        z = y.TRUSTED_TYPES_POLICY, w = z.createHTML("");
      } else
        z === void 0 && (z = Gu(U, a)), z !== null && typeof w == "string" && (w = z.createHTML(""));
      _t && _t(y), pt = y;
    }
  }, er = De({}, [...Ja, ...Za, ...Du]), pr = De({}, [...Qa, ...Lu]), Cr = function(y) {
    let v = G(y);
    (!v || !v.tagName) && (v = {
      namespaceURI: bt,
      tagName: "template"
    });
    const R = ga(y.tagName), J = ga(v.tagName);
    return Zt[y.namespaceURI] ? y.namespaceURI === Rt ? v.namespaceURI === st ? R === "svg" : v.namespaceURI === yt ? R === "svg" && (J === "annotation-xml" || Tt[J]) : !!er[R] : y.namespaceURI === yt ? v.namespaceURI === st ? R === "math" : v.namespaceURI === Rt ? R === "math" && vt[J] : !!pr[R] : y.namespaceURI === st ? v.namespaceURI === Rt && !vt[J] || v.namespaceURI === yt && !Tt[J] ? !1 : !pr[R] && (ze[R] || !er[R]) : !!(mt === "application/xhtml+xml" && Zt[y.namespaceURI]) : !1;
  }, lt = function(y) {
    bn(t.removed, {
      element: y
    });
    try {
      G(y).removeChild(y);
    } catch {
      N(y);
    }
  }, ht = function(y, v) {
    try {
      bn(t.removed, {
        attribute: v.getAttributeNode(y),
        from: v
      });
    } catch {
      bn(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(y), y === "is")
      if (fe || Ge)
        try {
          lt(v);
        } catch {
        }
      else
        try {
          v.setAttribute(y, "");
        } catch {
        }
  }, br = function(y) {
    let v = null, R = null;
    if (ie)
      y = "<remove></remove>" + y;
    else {
      const Te = Xa(y, /^[\r\n\t ]+/);
      R = Te && Te[0];
    }
    mt === "application/xhtml+xml" && bt === st && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const J = z ? z.createHTML(y) : y;
    if (bt === st)
      try {
        v = new O().parseFromString(J, mt);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = ee.createDocument(bt, "template", null);
      try {
        v.documentElement.innerHTML = Jt ? w : J;
      } catch {
      }
    }
    const Se = v.body || v.documentElement;
    return y && R && Se.insertBefore(r.createTextNode(R), Se.childNodes[0] || null), bt === st ? Re.call(v, Q ? "html" : "body")[0] : Q ? v.documentElement : Se;
  }, Ht = function(y) {
    return ue.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, qt = function(y) {
    return y instanceof A && (typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || !(y.attributes instanceof k) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function");
  }, Bt = function(y) {
    return typeof m == "function" && y instanceof m;
  };
  function nt(y, v, R) {
    ra(y, (J) => {
      J.call(t, v, R, pt);
    });
  }
  const yr = function(y) {
    let v = null;
    if (nt(se.beforeSanitizeElements, y, null), qt(y))
      return lt(y), !0;
    const R = ge(y.nodeName);
    if (nt(se.uponSanitizeElement, y, {
      tagName: R,
      allowedTags: ce
    }), he && y.hasChildNodes() && !Bt(y.firstElementChild) && Ct(/<[/\w!]/g, y.innerHTML) && Ct(/<[/\w!]/g, y.textContent) || y.nodeType === wn.progressingInstruction || he && y.nodeType === wn.comment && Ct(/<[/\w]/g, y.data))
      return lt(y), !0;
    if (!(j.tagCheck instanceof Function && j.tagCheck(R)) && (!ce[R] || x[R])) {
      if (!x[R] && xr(R) && (q.tagNameCheck instanceof RegExp && Ct(q.tagNameCheck, R) || q.tagNameCheck instanceof Function && q.tagNameCheck(R)))
        return !1;
      if (K && !$e[R]) {
        const J = G(y) || y.parentNode, Se = $(y) || y.childNodes;
        if (Se && J) {
          const Te = Se.length;
          for (let Ce = Te - 1; Ce >= 0; --Ce) {
            const He = C(Se[Ce], !0);
            He.__removalCount = (y.__removalCount || 0) + 1, J.insertBefore(He, L(y));
          }
        }
      }
      return lt(y), !0;
    }
    return y instanceof b && !Cr(y) || (R === "noscript" || R === "noembed" || R === "noframes") && Ct(/<\/no(script|embed|frames)/i, y.innerHTML) ? (lt(y), !0) : (oe && y.nodeType === wn.text && (v = y.textContent, ra([pe, Oe, Ae], (J) => {
      v = yn(v, J, " ");
    }), y.textContent !== v && (bn(t.removed, {
      element: y.cloneNode()
    }), y.textContent = v)), nt(se.afterSanitizeElements, y, null), !1);
  }, Dt = function(y, v, R) {
    if (ne[v] || dt && (v === "id" || v === "name") && (R in r || R in It))
      return !1;
    if (!(te && !ne[v] && Ct(we, v)) && !(le && Ct(Ze, v)) && !(j.attributeCheck instanceof Function && j.attributeCheck(v, y))) {
      if (!I[v] || ne[v]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(xr(y) && (q.tagNameCheck instanceof RegExp && Ct(q.tagNameCheck, y) || q.tagNameCheck instanceof Function && q.tagNameCheck(y)) && (q.attributeNameCheck instanceof RegExp && Ct(q.attributeNameCheck, v) || q.attributeNameCheck instanceof Function && q.attributeNameCheck(v, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && q.allowCustomizedBuiltInElements && (q.tagNameCheck instanceof RegExp && Ct(q.tagNameCheck, R) || q.tagNameCheck instanceof Function && q.tagNameCheck(R)))
        ) return !1;
      } else if (!Kt[v] && !Ct(qe, yn(R, Ee, "")) && !((v === "src" || v === "xlink:href" || v === "href") && y !== "script" && Nu(R, "data:") === 0 && lr[y]) && !(ae && !Ct(je, yn(R, Ee, ""))) && R)
        return !1;
    }
    return !0;
  }, xr = function(y) {
    return y !== "annotation-xml" && Xa(y, Fe);
  }, tr = function(y) {
    nt(se.beforeSanitizeAttributes, y, null);
    const {
      attributes: v
    } = y;
    if (!v || qt(y))
      return;
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: I,
      forceKeepAttr: void 0
    };
    let J = v.length;
    for (; J--; ) {
      const Se = v[J], {
        name: Te,
        namespaceURI: Ce,
        value: He
      } = Se, Qe = ge(Te), wt = He;
      let tt = Te === "value" ? wt : Ru(wt);
      if (R.attrName = Qe, R.attrValue = tt, R.keepAttr = !0, R.forceKeepAttr = void 0, nt(se.uponSanitizeAttribute, y, R), tt = R.attrValue, Ve && (Qe === "id" || Qe === "name") && (ht(Te, y), tt = _e + tt), he && Ct(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, tt)) {
        ht(Te, y);
        continue;
      }
      if (Qe === "attributename" && Xa(tt, "href")) {
        ht(Te, y);
        continue;
      }
      if (R.forceKeepAttr)
        continue;
      if (!R.keepAttr) {
        ht(Te, y);
        continue;
      }
      if (!X && Ct(/\/>/i, tt)) {
        ht(Te, y);
        continue;
      }
      oe && ra([pe, Oe, Ae], (Lt) => {
        tt = yn(tt, Lt, " ");
      });
      const Ye = ge(y.nodeName);
      if (!Dt(Ye, Qe, tt)) {
        ht(Te, y);
        continue;
      }
      if (z && typeof U == "object" && typeof U.getAttributeType == "function" && !Ce)
        switch (U.getAttributeType(Ye, Qe)) {
          case "TrustedHTML": {
            tt = z.createHTML(tt);
            break;
          }
          case "TrustedScriptURL": {
            tt = z.createScriptURL(tt);
            break;
          }
        }
      if (tt !== wt)
        try {
          Ce ? y.setAttributeNS(Ce, Te, tt) : y.setAttribute(Te, tt), qt(y) ? lt(y) : Yo(t.removed);
        } catch {
          ht(Te, y);
        }
    }
    nt(se.afterSanitizeAttributes, y, null);
  }, fr = function y(v) {
    let R = null;
    const J = Ht(v);
    for (nt(se.beforeSanitizeShadowDOM, v, null); R = J.nextNode(); )
      nt(se.uponSanitizeShadowNode, R, null), yr(R), tr(R), R.content instanceof s && y(R.content);
    nt(se.afterSanitizeShadowDOM, v, null);
  };
  return t.sanitize = function(y) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, J = null, Se = null, Te = null;
    if (Jt = !y, Jt && (y = "<!-->"), typeof y != "string" && !Bt(y))
      if (typeof y.toString == "function") {
        if (y = y.toString(), typeof y != "string")
          throw xn("dirty is not a string, aborting");
      } else
        throw xn("toString is not a function");
    if (!t.isSupported)
      return y;
    if (ve || Pt(v), t.removed = [], typeof y == "string" && (de = !1), de) {
      if (y.nodeName) {
        const Qe = ge(y.nodeName);
        if (!ce[Qe] || x[Qe])
          throw xn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (y instanceof m)
      R = br("<!---->"), J = R.ownerDocument.importNode(y, !0), J.nodeType === wn.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? R = J : R.appendChild(J);
    else {
      if (!fe && !oe && !Q && // eslint-disable-next-line unicorn/prefer-includes
      y.indexOf("<") === -1)
        return z && me ? z.createHTML(y) : y;
      if (R = br(y), !R)
        return fe ? null : me ? w : "";
    }
    R && ie && lt(R.firstChild);
    const Ce = Ht(de ? y : R);
    for (; Se = Ce.nextNode(); )
      yr(Se), tr(Se), Se.content instanceof s && fr(Se.content);
    if (de)
      return y;
    if (fe) {
      if (Ge)
        for (Te = xe.call(R.ownerDocument); R.firstChild; )
          Te.appendChild(R.firstChild);
      else
        Te = R;
      return (I.shadowroot || I.shadowrootmode) && (Te = Me.call(n, Te, !0)), Te;
    }
    let He = Q ? R.outerHTML : R.innerHTML;
    return Q && ce["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && Ct(gl, R.ownerDocument.doctype.name) && (He = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + He), oe && ra([pe, Oe, Ae], (Qe) => {
      He = yn(He, Qe, " ");
    }), z && me ? z.createHTML(He) : He;
  }, t.setConfig = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pt(y), ve = !0;
  }, t.clearConfig = function() {
    pt = null, ve = !1;
  }, t.isValidAttribute = function(y, v, R) {
    pt || Pt({});
    const J = ge(y), Se = ge(v);
    return Dt(J, Se, R);
  }, t.addHook = function(y, v) {
    typeof v == "function" && bn(se[y], v);
  }, t.removeHook = function(y, v) {
    if (v !== void 0) {
      const R = Ou(se[y], v);
      return R === -1 ? void 0 : ju(se[y], R, 1)[0];
    }
    return Yo(se[y]);
  }, t.removeHooks = function(y) {
    se[y] = [];
  }, t.removeAllHooks = function() {
    se = Qo();
  }, t;
}
var es = bl();
let aa = null;
function Yu() {
  return aa || (typeof window < "u" ? aa = es(window) : aa = es), aa;
}
function Vu(e) {
  const t = e ? document.querySelector(e) : document;
  return t ? t.querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  ) : null;
}
const Hr = (e) => ({ __html: Yu().sanitize(e) }), ts = (e, t, r) => {
  let n = e;
  const a = [];
  for (; n < t; )
    n > 0 && n <= r && a.push(n), n += 1;
  return a;
};
let ti = !1;
const Ku = (e, t) => {
  ti || (ti = !0, setTimeout(() => {
    e(), ti = !1;
  }, t));
};
let rs;
const Xu = (e, t) => {
  window.clearTimeout(rs), rs = window.setTimeout(e, t);
};
function Ju(e) {
  if (e && typeof e.getBoundingClientRect == "function") {
    const { bottom: t, top: r } = e.getBoundingClientRect(), { offsetTop: n } = e;
    if (r < 0 && t > 0) {
      const a = e.style;
      e.style = `${a};transition: height 0s !important; overflow:hidden; height:${t}px!important;max-height:${t}px!important`, window.scrollTo({ behavior: "instant", top: n }), setTimeout(() => {
        e.style = a, window.scrollTo({
          behavior: "smooth",
          top: e.offsetTop - t / 2
        });
      }, 50);
    }
  }
}
l.shape({
  event: l.string,
  action: l.string,
  name: l.string,
  region: l.string,
  section: l.string,
  component: l.string,
  type: l.string,
  text: l.string
});
const yl = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: s = "",
  region: p = "",
  component: m = ""
}) => {
  const { dataLayer: b } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: p.toLowerCase(),
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: m.toLowerCase()
  };
  b && b.push(f);
}, Pn = ({ children: e }) => /* @__PURE__ */ H.jsx(H.Fragment, { children: e });
Pn.propTypes = {
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node,
    l.string
  ])
};
var ns = { exports: {} }, as;
function Zu() {
  return as || (as = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var s = "", p = 0; p < arguments.length; p++) {
          var m = arguments[p];
          m && (s = a(s, n(m)));
        }
        return s;
      }
      function n(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return r.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var p = "";
        for (var m in s)
          t.call(s, m) && s[m] && (p = a(p, m));
        return p;
      }
      function a(s, p) {
        return p ? s ? s + " " + p : s + p : s;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(ns)), ns.exports;
}
var Qu = Zu();
const ot = /* @__PURE__ */ Xi(Qu);
({
  ...Pn.propTypes
});
const xl = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ H.jsx("div", { className: t, ...r, children: /* @__PURE__ */ H.jsx("div", { className: "row", children: e }) });
xl.propTypes = {
  children: Pn.propTypes.children
};
({
  ...xl.propTypes
});
Pn.propTypes.children, l.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Pn.propTypes.children;
const ed = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), ri = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), vl = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.arrayOf(l.string),
    header: l.string,
    body: l.string
  })
}), Ji = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var _r = {}, $r = {}, is;
function td() {
  if (is) return $r;
  is = 1;
  var e = ft;
  function t(i) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, g = 1; g < arguments.length; g++) u += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + i + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, s = {};
  function p(i) {
    return r.call(s, i) ? !0 : r.call(a, i) ? !1 : n.test(i) ? s[i] = !0 : (a[i] = !0, !1);
  }
  function m(i, u, g, T, F, P, Y) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = T, this.attributeNamespace = F, this.mustUseProperty = g, this.propertyName = i, this.type = u, this.sanitizeURL = P, this.removeEmptyString = Y;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    b[i] = new m(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var u = i[0];
    b[u] = new m(u, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    b[i] = new m(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    b[i] = new m(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    b[i] = new m(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    b[i] = new m(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    b[i] = new m(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    b[i] = new m(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    b[i] = new m(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var f = /[\-:]([a-z])/g;
  function k(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var u = i.replace(
      f,
      k
    );
    b[u] = new m(u, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var u = i.replace(f, k);
    b[u] = new m(u, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var u = i.replace(f, k);
    b[u] = new m(u, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    b[i] = new m(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    b[i] = new m(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var A = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, O = ["Webkit", "ms", "Moz", "O"];
  Object.keys(A).forEach(function(i) {
    O.forEach(function(u) {
      u = u + i.charAt(0).toUpperCase() + i.substring(1), A[u] = A[i];
    });
  });
  var U = /["'&<>]/;
  function _(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var u = U.exec(i);
    if (u) {
      var g = "", T, F = 0;
      for (T = u.index; T < i.length; T++) {
        switch (i.charCodeAt(T)) {
          case 34:
            u = "&quot;";
            break;
          case 38:
            u = "&amp;";
            break;
          case 39:
            u = "&#x27;";
            break;
          case 60:
            u = "&lt;";
            break;
          case 62:
            u = "&gt;";
            break;
          default:
            continue;
        }
        F !== T && (g += i.substring(F, T)), F = T + 1, g += u;
      }
      i = F !== T ? g + i.substring(F, T) : g;
    }
    return i;
  }
  var C = /([A-Z])/g, N = /^ms-/, L = Array.isArray;
  function $(i, u) {
    return { insertionMode: i, selectedValue: u };
  }
  function G(i, u, g) {
    switch (u) {
      case "select":
        return $(1, g.value != null ? g.value : g.defaultValue);
      case "svg":
        return $(2, null);
      case "math":
        return $(3, null);
      case "foreignObject":
        return $(1, null);
      case "table":
        return $(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return $(5, null);
      case "colgroup":
        return $(7, null);
      case "tr":
        return $(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? $(1, null) : i;
  }
  var z = /* @__PURE__ */ new Map();
  function w(i, u, g) {
    if (typeof g != "object") throw Error(t(62));
    u = !0;
    for (var T in g) if (r.call(g, T)) {
      var F = g[T];
      if (F != null && typeof F != "boolean" && F !== "") {
        if (T.indexOf("--") === 0) {
          var P = _(T);
          F = _(("" + F).trim());
        } else {
          P = T;
          var Y = z.get(P);
          Y !== void 0 || (Y = _(P.replace(C, "-$1").toLowerCase().replace(N, "-ms-")), z.set(P, Y)), P = Y, F = typeof F == "number" ? F === 0 || r.call(A, T) ? "" + F : F + "px" : _(("" + F).trim());
        }
        u ? (u = !1, i.push(' style="', P, ":", F)) : i.push(";", P, ":", F);
      }
    }
    u || i.push('"');
  }
  function ee(i, u, g, T) {
    switch (g) {
      case "style":
        w(i, u, T);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (u = b.hasOwnProperty(g) ? b[g] : null, u !== null) {
        switch (typeof T) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (g = u.attributeName, u.type) {
          case 3:
            T && i.push(" ", g, '=""');
            break;
          case 4:
            T === !0 ? i.push(" ", g, '=""') : T !== !1 && i.push(" ", g, '="', _(T), '"');
            break;
          case 5:
            isNaN(T) || i.push(" ", g, '="', _(T), '"');
            break;
          case 6:
            !isNaN(T) && 1 <= T && i.push(" ", g, '="', _(T), '"');
            break;
          default:
            u.sanitizeURL && (T = "" + T), i.push(" ", g, '="', _(T), '"');
        }
      } else if (p(g)) {
        switch (typeof T) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = g.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        i.push(" ", g, '="', _(T), '"');
      }
    }
  }
  function ue(i, u, g) {
    if (u != null) {
      if (g != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && i.push("" + u);
    }
  }
  function xe(i) {
    var u = "";
    return e.Children.forEach(i, function(g) {
      g != null && (u += g);
    }), u;
  }
  function Re(i, u, g, T) {
    i.push(pe(g));
    var F = g = null, P;
    for (P in u) if (r.call(u, P)) {
      var Y = u[P];
      if (Y != null) switch (P) {
        case "children":
          g = Y;
          break;
        case "dangerouslySetInnerHTML":
          F = Y;
          break;
        default:
          ee(i, T, P, Y);
      }
    }
    return i.push(">"), ue(i, F, g), typeof g == "string" ? (i.push(_(g)), null) : g;
  }
  var Me = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, se = /* @__PURE__ */ new Map();
  function pe(i) {
    var u = se.get(i);
    if (u === void 0) {
      if (!Me.test(i)) throw Error(t(65, i));
      u = "<" + i, se.set(i, u);
    }
    return u;
  }
  function Oe(i, u, g, T, F) {
    switch (u) {
      case "select":
        i.push(pe("select"));
        var P = null, Y = null;
        for (Ne in g) if (r.call(g, Ne)) {
          var re = g[Ne];
          if (re != null) switch (Ne) {
            case "children":
              P = re;
              break;
            case "dangerouslySetInnerHTML":
              Y = re;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ee(i, T, Ne, re);
          }
        }
        return i.push(">"), ue(i, Y, P), P;
      case "option":
        Y = F.selectedValue, i.push(pe("option"));
        var be = re = null, ke = null, Ne = null;
        for (P in g) if (r.call(g, P)) {
          var it = g[P];
          if (it != null) switch (P) {
            case "children":
              re = it;
              break;
            case "selected":
              ke = it;
              break;
            case "dangerouslySetInnerHTML":
              Ne = it;
              break;
            case "value":
              be = it;
            default:
              ee(i, T, P, it);
          }
        }
        if (Y != null) if (g = be !== null ? "" + be : xe(re), L(Y)) {
          for (T = 0; T < Y.length; T++)
            if ("" + Y[T] === g) {
              i.push(' selected=""');
              break;
            }
        } else "" + Y === g && i.push(' selected=""');
        else ke && i.push(' selected=""');
        return i.push(">"), ue(i, Ne, re), re;
      case "textarea":
        i.push(pe("textarea")), Ne = Y = P = null;
        for (re in g) if (r.call(g, re) && (be = g[re], be != null)) switch (re) {
          case "children":
            Ne = be;
            break;
          case "value":
            P = be;
            break;
          case "defaultValue":
            Y = be;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ee(
              i,
              T,
              re,
              be
            );
        }
        if (P === null && Y !== null && (P = Y), i.push(">"), Ne != null) {
          if (P != null) throw Error(t(92));
          if (L(Ne) && 1 < Ne.length) throw Error(t(93));
          P = "" + Ne;
        }
        return typeof P == "string" && P[0] === `
` && i.push(`
`), P !== null && i.push(_("" + P)), null;
      case "input":
        i.push(pe("input")), be = Ne = re = P = null;
        for (Y in g) if (r.call(g, Y) && (ke = g[Y], ke != null)) switch (Y) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            be = ke;
            break;
          case "defaultValue":
            re = ke;
            break;
          case "checked":
            Ne = ke;
            break;
          case "value":
            P = ke;
            break;
          default:
            ee(i, T, Y, ke);
        }
        return Ne !== null ? ee(i, T, "checked", Ne) : be !== null && ee(i, T, "checked", be), P !== null ? ee(i, T, "value", P) : re !== null && ee(i, T, "value", re), i.push("/>"), null;
      case "menuitem":
        i.push(pe("menuitem"));
        for (var rr in g) if (r.call(g, rr) && (P = g[rr], P != null)) switch (rr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ee(i, T, rr, P);
        }
        return i.push(">"), null;
      case "title":
        i.push(pe("title")), P = null;
        for (it in g) if (r.call(g, it) && (Y = g[it], Y != null)) switch (it) {
          case "children":
            P = Y;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ee(i, T, it, Y);
        }
        return i.push(">"), P;
      case "listing":
      case "pre":
        i.push(pe(u)), Y = P = null;
        for (be in g) if (r.call(g, be) && (re = g[be], re != null)) switch (be) {
          case "children":
            P = re;
            break;
          case "dangerouslySetInnerHTML":
            Y = re;
            break;
          default:
            ee(i, T, be, re);
        }
        if (i.push(">"), Y != null) {
          if (P != null) throw Error(t(60));
          if (typeof Y != "object" || !("__html" in Y)) throw Error(t(61));
          g = Y.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? i.push(`
`, g) : i.push("" + g));
        }
        return typeof P == "string" && P[0] === `
` && i.push(`
`), P;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        i.push(pe(u));
        for (var nr in g) if (r.call(g, nr) && (P = g[nr], P != null)) switch (nr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ee(i, T, nr, P);
        }
        return i.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Re(
          i,
          g,
          u,
          T
        );
      case "html":
        return F.insertionMode === 0 && i.push("<!DOCTYPE html>"), Re(i, g, u, T);
      default:
        if (u.indexOf("-") === -1 && typeof g.is != "string") return Re(i, g, u, T);
        i.push(pe(u)), Y = P = null;
        for (ke in g) if (r.call(g, ke) && (re = g[ke], re != null)) switch (ke) {
          case "children":
            P = re;
            break;
          case "dangerouslySetInnerHTML":
            Y = re;
            break;
          case "style":
            w(i, T, re);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            p(ke) && typeof re != "function" && typeof re != "symbol" && i.push(" ", ke, '="', _(re), '"');
        }
        return i.push(">"), ue(i, Y, P), P;
    }
  }
  function Ae(i, u, g) {
    if (i.push('<!--$?--><template id="'), g === null) throw Error(t(395));
    return i.push(g), i.push('"></template>');
  }
  function we(i, u, g, T) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return i.push('<div hidden id="'), i.push(u.segmentPrefix), u = T.toString(16), i.push(u), i.push('">');
      case 2:
        return i.push('<svg aria-hidden="true" style="display:none" id="'), i.push(u.segmentPrefix), u = T.toString(16), i.push(u), i.push('">');
      case 3:
        return i.push('<math aria-hidden="true" style="display:none" id="'), i.push(u.segmentPrefix), u = T.toString(16), i.push(u), i.push('">');
      case 4:
        return i.push('<table hidden id="'), i.push(u.segmentPrefix), u = T.toString(16), i.push(u), i.push('">');
      case 5:
        return i.push('<table hidden><tbody id="'), i.push(u.segmentPrefix), u = T.toString(16), i.push(u), i.push('">');
      case 6:
        return i.push('<table hidden><tr id="'), i.push(u.segmentPrefix), u = T.toString(16), i.push(u), i.push('">');
      case 7:
        return i.push('<table hidden><colgroup id="'), i.push(u.segmentPrefix), u = T.toString(16), i.push(u), i.push('">');
      default:
        throw Error(t(397));
    }
  }
  function Ze(i, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return i.push("</div>");
      case 2:
        return i.push("</svg>");
      case 3:
        return i.push("</math>");
      case 4:
        return i.push("</table>");
      case 5:
        return i.push("</tbody></table>");
      case 6:
        return i.push("</tr></table>");
      case 7:
        return i.push("</colgroup></table>");
      default:
        throw Error(t(397));
    }
  }
  var je = /[<\u2028\u2029]/g;
  function Ee(i) {
    return JSON.stringify(i).replace(je, function(u) {
      switch (u) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function Fe(i, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: i };
  }
  function qe(i, u, g, T) {
    return g.generateStaticMarkup ? (i.push(_(u)), !1) : (u === "" ? i = T : (T && i.push("<!-- -->"), i.push(_(u)), i = !0), i);
  }
  var ce = Object.assign, W = Symbol.for("react.element"), I = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), j = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), he = Symbol.for("react.scope"), Q = Symbol.for("react.debug_trace_mode"), ve = Symbol.for("react.legacy_hidden"), ie = Symbol.for("react.default_value"), fe = Symbol.iterator;
  function Ge(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case B:
        return "Fragment";
      case I:
        return "Portal";
      case x:
        return "Profiler";
      case q:
        return "StrictMode";
      case te:
        return "Suspense";
      case ae:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case j:
        return (i.displayName || "Context") + ".Consumer";
      case ne:
        return (i._context.displayName || "Context") + ".Provider";
      case le:
        var u = i.render;
        return i = i.displayName, i || (i = u.displayName || u.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case X:
        return u = i.displayName || null, u !== null ? u : Ge(i.type) || "Memo";
      case oe:
        u = i._payload, i = i._init;
        try {
          return Ge(i(u));
        } catch {
        }
    }
    return null;
  }
  var me = {};
  function dt(i, u) {
    if (i = i.contextTypes, !i) return me;
    var g = {}, T;
    for (T in i) g[T] = u[T];
    return g;
  }
  var Ve = null;
  function _e(i, u) {
    if (i !== u) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var g = u.parent;
      if (i === null) {
        if (g !== null) throw Error(t(401));
      } else {
        if (g === null) throw Error(t(401));
        _e(i, g);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function K(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && K(i);
  }
  function de(i) {
    var u = i.parent;
    u !== null && de(u), i.context._currentValue2 = i.value;
  }
  function et(i, u) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === u.depth ? _e(i, u) : et(i, u);
  }
  function $e(i, u) {
    var g = u.parent;
    if (g === null) throw Error(t(402));
    i.depth === g.depth ? _e(i, g) : $e(i, g), u.context._currentValue2 = u.value;
  }
  function Ue(i) {
    var u = Ve;
    u !== i && (u === null ? de(i) : i === null ? K(u) : u.depth === i.depth ? _e(u, i) : u.depth > i.depth ? et(u, i) : $e(u, i), Ve = i);
  }
  var lr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, u) {
    i = i._reactInternals, i.queue !== null && i.queue.push(u);
  }, enqueueReplaceState: function(i, u) {
    i = i._reactInternals, i.replace = !0, i.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function cr(i, u, g, T) {
    var F = i.state !== void 0 ? i.state : null;
    i.updater = lr, i.props = g, i.state = F;
    var P = { queue: [], replace: !1 };
    i._reactInternals = P;
    var Y = u.contextType;
    if (i.context = typeof Y == "object" && Y !== null ? Y._currentValue2 : T, Y = u.getDerivedStateFromProps, typeof Y == "function" && (Y = Y(g, F), F = Y == null ? F : ce({}, F, Y), i.state = F), typeof u.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && lr.enqueueReplaceState(i, i.state, null), P.queue !== null && 0 < P.queue.length) if (u = P.queue, Y = P.replace, P.queue = null, P.replace = !1, Y && u.length === 1) i.state = u[0];
    else {
      for (P = Y ? u[0] : i.state, F = !0, Y = Y ? 1 : 0; Y < u.length; Y++) {
        var re = u[Y];
        re = typeof re == "function" ? re.call(i, P, g, T) : re, re != null && (F ? (F = !1, P = ce({}, P, re)) : ce(P, re));
      }
      i.state = P;
    }
    else P.queue = null;
  }
  var Kt = { id: 1, overflow: "" };
  function Xt(i, u, g) {
    var T = i.id;
    i = i.overflow;
    var F = 32 - yt(T) - 1;
    T &= ~(1 << F), g += 1;
    var P = 32 - yt(u) + F;
    if (30 < P) {
      var Y = F - F % 5;
      return P = (T & (1 << Y) - 1).toString(32), T >>= Y, F -= Y, { id: 1 << 32 - yt(u) + F | g << F | T, overflow: P + i };
    }
    return { id: 1 << P | g << F | T, overflow: i };
  }
  var yt = Math.clz32 ? Math.clz32 : bt, Rt = Math.log, st = Math.LN2;
  function bt(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Rt(i) / st | 0) | 0;
  }
  function Jt(i, u) {
    return i === u && (i !== 0 || 1 / i === 1 / u) || i !== i && u !== u;
  }
  var Zt = typeof Object.is == "function" ? Object.is : Jt, xt = null, Tt = null, vt = null, ze = null, mt = !1, ur = !1, Qt = 0, ge = null, pt = 0;
  function It() {
    if (xt === null) throw Error(t(321));
    return xt;
  }
  function dr() {
    if (0 < pt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Pt() {
    return ze === null ? vt === null ? (mt = !1, vt = ze = dr()) : (mt = !0, ze = vt) : ze.next === null ? (mt = !1, ze = ze.next = dr()) : (mt = !0, ze = ze.next), ze;
  }
  function er() {
    Tt = xt = null, ur = !1, vt = null, pt = 0, ze = ge = null;
  }
  function pr(i, u) {
    return typeof u == "function" ? u(i) : u;
  }
  function Cr(i, u, g) {
    if (xt = It(), ze = Pt(), mt) {
      var T = ze.queue;
      if (u = T.dispatch, ge !== null && (g = ge.get(T), g !== void 0)) {
        ge.delete(T), T = ze.memoizedState;
        do
          T = i(T, g.action), g = g.next;
        while (g !== null);
        return ze.memoizedState = T, [T, u];
      }
      return [ze.memoizedState, u];
    }
    return i = i === pr ? typeof u == "function" ? u() : u : g !== void 0 ? g(u) : u, ze.memoizedState = i, i = ze.queue = { last: null, dispatch: null }, i = i.dispatch = ht.bind(null, xt, i), [ze.memoizedState, i];
  }
  function lt(i, u) {
    if (xt = It(), ze = Pt(), u = u === void 0 ? null : u, ze !== null) {
      var g = ze.memoizedState;
      if (g !== null && u !== null) {
        var T = g[1];
        e: if (T === null) T = !1;
        else {
          for (var F = 0; F < T.length && F < u.length; F++) if (!Zt(u[F], T[F])) {
            T = !1;
            break e;
          }
          T = !0;
        }
        if (T) return g[0];
      }
    }
    return i = i(), ze.memoizedState = [i, u], i;
  }
  function ht(i, u, g) {
    if (25 <= pt) throw Error(t(301));
    if (i === xt) if (ur = !0, i = { action: g, next: null }, ge === null && (ge = /* @__PURE__ */ new Map()), g = ge.get(u), g === void 0) ge.set(u, i);
    else {
      for (u = g; u.next !== null; ) u = u.next;
      u.next = i;
    }
  }
  function br() {
    throw Error(t(394));
  }
  function Ht() {
  }
  var qt = { readContext: function(i) {
    return i._currentValue2;
  }, useContext: function(i) {
    return It(), i._currentValue2;
  }, useMemo: lt, useReducer: Cr, useRef: function(i) {
    xt = It(), ze = Pt();
    var u = ze.memoizedState;
    return u === null ? (i = { current: i }, ze.memoizedState = i) : u;
  }, useState: function(i) {
    return Cr(pr, i);
  }, useInsertionEffect: Ht, useLayoutEffect: function() {
  }, useCallback: function(i, u) {
    return lt(function() {
      return i;
    }, u);
  }, useImperativeHandle: Ht, useEffect: Ht, useDebugValue: Ht, useDeferredValue: function(i) {
    return It(), i;
  }, useTransition: function() {
    return It(), [
      !1,
      br
    ];
  }, useId: function() {
    var i = Tt.treeContext, u = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - yt(i) - 1)).toString(32) + u;
    var g = Bt;
    if (g === null) throw Error(t(404));
    return u = Qt++, i = ":" + g.idPrefix + "R" + i, 0 < u && (i += "H" + u.toString(32)), i + ":";
  }, useMutableSource: function(i, u) {
    return It(), u(i._source);
  }, useSyncExternalStore: function(i, u, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, Bt = null, nt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function yr(i) {
    return console.error(i), null;
  }
  function Dt() {
  }
  function xr(i, u, g, T, F, P, Y, re, be) {
    var ke = [], Ne = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: T, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ne, pingedTasks: ke, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: F === void 0 ? yr : F, onAllReady: Dt, onShellReady: Y === void 0 ? Dt : Y, onShellError: Dt, onFatalError: Dt }, g = fr(u, 0, null, g, !1, !1), g.parentFlushed = !0, i = tr(u, i, null, g, Ne, me, null, Kt), ke.push(i), u;
  }
  function tr(i, u, g, T, F, P, Y, re) {
    i.allPendingTasks++, g === null ? i.pendingRootTasks++ : g.pendingTasks++;
    var be = { node: u, ping: function() {
      var ke = i.pingedTasks;
      ke.push(be), ke.length === 1 && Ir(i);
    }, blockedBoundary: g, blockedSegment: T, abortSet: F, legacyContext: P, context: Y, treeContext: re };
    return F.add(be), be;
  }
  function fr(i, u, g, T, F, P) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: T, boundary: g, lastPushedText: F, textEmbedded: P };
  }
  function y(i, u) {
    if (i = i.onError(u), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function v(i, u) {
    var g = i.onShellError;
    g(u), g = i.onFatalError, g(u), i.destination !== null ? (i.status = 2, i.destination.destroy(u)) : (i.status = 1, i.fatalError = u);
  }
  function R(i, u, g, T, F) {
    for (xt = {}, Tt = u, Qt = 0, i = g(T, F); ur; ) ur = !1, Qt = 0, pt += 1, ze = null, i = g(T, F);
    return er(), i;
  }
  function J(i, u, g, T) {
    var F = g.render(), P = T.childContextTypes;
    if (P != null) {
      var Y = u.legacyContext;
      if (typeof g.getChildContext != "function") T = Y;
      else {
        g = g.getChildContext();
        for (var re in g) if (!(re in P)) throw Error(t(108, Ge(T) || "Unknown", re));
        T = ce({}, Y, g);
      }
      u.legacyContext = T, Ce(i, u, F), u.legacyContext = Y;
    } else Ce(i, u, F);
  }
  function Se(i, u) {
    if (i && i.defaultProps) {
      u = ce({}, u), i = i.defaultProps;
      for (var g in i) u[g] === void 0 && (u[g] = i[g]);
      return u;
    }
    return u;
  }
  function Te(i, u, g, T, F) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      F = dt(g, u.legacyContext);
      var P = g.contextType;
      P = new g(T, typeof P == "object" && P !== null ? P._currentValue2 : F), cr(P, g, T, F), J(i, u, P, g);
    } else {
      P = dt(g, u.legacyContext), F = R(i, u, g, T, P);
      var Y = Qt !== 0;
      if (typeof F == "object" && F !== null && typeof F.render == "function" && F.$$typeof === void 0) cr(F, g, T, P), J(i, u, F, g);
      else if (Y) {
        T = u.treeContext, u.treeContext = Xt(T, 1, 0);
        try {
          Ce(i, u, F);
        } finally {
          u.treeContext = T;
        }
      } else Ce(i, u, F);
    }
    else if (typeof g == "string") {
      switch (F = u.blockedSegment, P = Oe(F.chunks, g, T, i.responseState, F.formatContext), F.lastPushedText = !1, Y = F.formatContext, F.formatContext = G(Y, g, T), Qe(i, u, P), F.formatContext = Y, g) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          F.chunks.push("</", g, ">");
      }
      F.lastPushedText = !1;
    } else {
      switch (g) {
        case ve:
        case Q:
        case q:
        case x:
        case B:
          Ce(i, u, T.children);
          return;
        case ae:
          Ce(i, u, T.children);
          return;
        case he:
          throw Error(t(343));
        case te:
          e: {
            g = u.blockedBoundary, F = u.blockedSegment, P = T.fallback, T = T.children, Y = /* @__PURE__ */ new Set();
            var re = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Y, errorDigest: null }, be = fr(i, F.chunks.length, re, F.formatContext, !1, !1);
            F.children.push(be), F.lastPushedText = !1;
            var ke = fr(i, 0, null, F.formatContext, !1, !1);
            ke.parentFlushed = !0, u.blockedBoundary = re, u.blockedSegment = ke;
            try {
              if (Qe(
                i,
                u,
                T
              ), i.responseState.generateStaticMarkup || ke.lastPushedText && ke.textEmbedded && ke.chunks.push("<!-- -->"), ke.status = 1, Ye(re, ke), re.pendingTasks === 0) break e;
            } catch (Ne) {
              ke.status = 4, re.forceClientRender = !0, re.errorDigest = y(i, Ne);
            } finally {
              u.blockedBoundary = g, u.blockedSegment = F;
            }
            u = tr(i, P, g, be, Y, u.legacyContext, u.context, u.treeContext), i.pingedTasks.push(u);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case le:
          if (T = R(i, u, g.render, T, F), Qt !== 0) {
            g = u.treeContext, u.treeContext = Xt(g, 1, 0);
            try {
              Ce(i, u, T);
            } finally {
              u.treeContext = g;
            }
          } else Ce(i, u, T);
          return;
        case X:
          g = g.type, T = Se(g, T), Te(i, u, g, T, F);
          return;
        case ne:
          if (F = T.children, g = g._context, T = T.value, P = g._currentValue2, g._currentValue2 = T, Y = Ve, Ve = T = { parent: Y, depth: Y === null ? 0 : Y.depth + 1, context: g, parentValue: P, value: T }, u.context = T, Ce(i, u, F), i = Ve, i === null) throw Error(t(403));
          T = i.parentValue, i.context._currentValue2 = T === ie ? i.context._defaultValue : T, i = Ve = i.parent, u.context = i;
          return;
        case j:
          T = T.children, T = T(g._currentValue2), Ce(i, u, T);
          return;
        case oe:
          F = g._init, g = F(g._payload), T = Se(g, T), Te(
            i,
            u,
            g,
            T,
            void 0
          );
          return;
      }
      throw Error(t(130, g == null ? g : typeof g, ""));
    }
  }
  function Ce(i, u, g) {
    if (u.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case W:
          Te(i, u, g.type, g.props, g.ref);
          return;
        case I:
          throw Error(t(257));
        case oe:
          var T = g._init;
          g = T(g._payload), Ce(i, u, g);
          return;
      }
      if (L(g)) {
        He(i, u, g);
        return;
      }
      if (g === null || typeof g != "object" ? T = null : (T = fe && g[fe] || g["@@iterator"], T = typeof T == "function" ? T : null), T && (T = T.call(g))) {
        if (g = T.next(), !g.done) {
          var F = [];
          do
            F.push(g.value), g = T.next();
          while (!g.done);
          He(i, u, F);
        }
        return;
      }
      throw i = Object.prototype.toString.call(g), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : i));
    }
    typeof g == "string" ? (T = u.blockedSegment, T.lastPushedText = qe(u.blockedSegment.chunks, g, i.responseState, T.lastPushedText)) : typeof g == "number" && (T = u.blockedSegment, T.lastPushedText = qe(u.blockedSegment.chunks, "" + g, i.responseState, T.lastPushedText));
  }
  function He(i, u, g) {
    for (var T = g.length, F = 0; F < T; F++) {
      var P = u.treeContext;
      u.treeContext = Xt(P, T, F);
      try {
        Qe(i, u, g[F]);
      } finally {
        u.treeContext = P;
      }
    }
  }
  function Qe(i, u, g) {
    var T = u.blockedSegment.formatContext, F = u.legacyContext, P = u.context;
    try {
      return Ce(i, u, g);
    } catch (be) {
      if (er(), typeof be == "object" && be !== null && typeof be.then == "function") {
        g = be;
        var Y = u.blockedSegment, re = fr(i, Y.chunks.length, null, Y.formatContext, Y.lastPushedText, !0);
        Y.children.push(re), Y.lastPushedText = !1, i = tr(i, u.node, u.blockedBoundary, re, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, g.then(i, i), u.blockedSegment.formatContext = T, u.legacyContext = F, u.context = P, Ue(P);
      } else throw u.blockedSegment.formatContext = T, u.legacyContext = F, u.context = P, Ue(P), be;
    }
  }
  function wt(i) {
    var u = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Lt(this, u, i);
  }
  function tt(i, u, g) {
    var T = i.blockedBoundary;
    i.blockedSegment.status = 3, T === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (T.pendingTasks--, T.forceClientRender || (T.forceClientRender = !0, i = g === void 0 ? Error(t(432)) : g, T.errorDigest = u.onError(i), T.parentFlushed && u.clientRenderedBoundaries.push(T)), T.fallbackAbortableTasks.forEach(function(F) {
      return tt(F, u, g);
    }), T.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (T = u.onAllReady, T()));
  }
  function Ye(i, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var g = u.children[0];
      g.id = u.id, g.parentFlushed = !0, g.status === 1 && Ye(i, g);
    } else i.completedSegments.push(u);
  }
  function Lt(i, u, g) {
    if (u === null) {
      if (g.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = g;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Dt, u = i.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && Ye(u, g), u.parentFlushed && i.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(wt, i), u.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (Ye(u, g), u.completedSegments.length === 1 && u.parentFlushed && i.partialBoundaries.push(u)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Ir(i) {
    if (i.status !== 2) {
      var u = Ve, g = nt.current;
      nt.current = qt;
      var T = Bt;
      Bt = i.responseState;
      try {
        var F = i.pingedTasks, P;
        for (P = 0; P < F.length; P++) {
          var Y = F[P], re = i, be = Y.blockedSegment;
          if (be.status === 0) {
            Ue(Y.context);
            try {
              Ce(re, Y, Y.node), re.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), Y.abortSet.delete(Y), be.status = 1, Lt(re, Y.blockedBoundary, be);
            } catch (Mt) {
              if (er(), typeof Mt == "object" && Mt !== null && typeof Mt.then == "function") {
                var ke = Y.ping;
                Mt.then(ke, ke);
              } else {
                Y.abortSet.delete(Y), be.status = 4;
                var Ne = Y.blockedBoundary, it = Mt, rr = y(re, it);
                if (Ne === null ? v(re, it) : (Ne.pendingTasks--, Ne.forceClientRender || (Ne.forceClientRender = !0, Ne.errorDigest = rr, Ne.parentFlushed && re.clientRenderedBoundaries.push(Ne))), re.allPendingTasks--, re.allPendingTasks === 0) {
                  var nr = re.onAllReady;
                  nr();
                }
              }
            } finally {
            }
          }
        }
        F.splice(0, P), i.destination !== null && Kr(i, i.destination);
      } catch (Mt) {
        y(i, Mt), v(i, Mt);
      } finally {
        Bt = T, nt.current = g, g === qt && Ue(u);
      }
    }
  }
  function Pr(i, u, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var T = g.id = i.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, i = i.responseState, u.push('<template id="'), u.push(i.placeholderPrefix), i = T.toString(16), u.push(i), u.push('"></template>');
      case 1:
        g.status = 2;
        var F = !0;
        T = g.chunks;
        var P = 0;
        g = g.children;
        for (var Y = 0; Y < g.length; Y++) {
          for (F = g[Y]; P < F.index; P++) u.push(T[P]);
          F = Dr(i, u, F);
        }
        for (; P < T.length - 1; P++) u.push(T[P]);
        return P < T.length && (F = u.push(T[P])), F;
      default:
        throw Error(t(390));
    }
  }
  function Dr(i, u, g) {
    var T = g.boundary;
    if (T === null) return Pr(i, u, g);
    if (T.parentFlushed = !0, T.forceClientRender) return i.responseState.generateStaticMarkup || (T = T.errorDigest, u.push("<!--$!-->"), u.push("<template"), T && (u.push(' data-dgst="'), T = _(T), u.push(T), u.push('"')), u.push("></template>")), Pr(i, u, g), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
    if (0 < T.pendingTasks) {
      T.rootSegmentID = i.nextSegmentId++, 0 < T.completedSegments.length && i.partialBoundaries.push(T);
      var F = i.responseState, P = F.nextSuspenseID++;
      return F = F.boundaryPrefix + P.toString(16), T = T.id = F, Ae(u, i.responseState, T), Pr(i, u, g), u.push("<!--/$-->");
    }
    if (T.byteSize > i.progressiveChunkSize) return T.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(T), Ae(u, i.responseState, T.id), Pr(i, u, g), u.push("<!--/$-->");
    if (i.responseState.generateStaticMarkup || u.push("<!--$-->"), g = T.completedSegments, g.length !== 1) throw Error(t(391));
    return Dr(i, u, g[0]), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
  }
  function on(i, u, g) {
    return we(u, i.responseState, g.formatContext, g.id), Dr(i, u, g), Ze(u, g.formatContext);
  }
  function sn(i, u, g) {
    for (var T = g.completedSegments, F = 0; F < T.length; F++) ln(i, u, g, T[F]);
    if (T.length = 0, i = i.responseState, T = g.id, g = g.rootSegmentID, u.push(i.startInlineScript), i.sentCompleteBoundaryFunction ? u.push('$RC("') : (i.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), T === null) throw Error(t(395));
    return g = g.toString(16), u.push(T), u.push('","'), u.push(i.segmentPrefix), u.push(g), u.push('")<\/script>');
  }
  function ln(i, u, g, T) {
    if (T.status === 2) return !0;
    var F = T.id;
    if (F === -1) {
      if ((T.id = g.rootSegmentID) === -1) throw Error(t(392));
      return on(i, u, T);
    }
    return on(i, u, T), i = i.responseState, u.push(i.startInlineScript), i.sentCompleteSegmentFunction ? u.push('$RS("') : (i.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(i.segmentPrefix), F = F.toString(16), u.push(F), u.push('","'), u.push(i.placeholderPrefix), u.push(F), u.push('")<\/script>');
  }
  function Kr(i, u) {
    try {
      var g = i.completedRootSegment;
      if (g !== null && i.pendingRootTasks === 0) {
        Dr(i, u, g), i.completedRootSegment = null;
        var T = i.responseState.bootstrapChunks;
        for (g = 0; g < T.length - 1; g++) u.push(T[g]);
        g < T.length && u.push(T[g]);
      }
      var F = i.clientRenderedBoundaries, P;
      for (P = 0; P < F.length; P++) {
        var Y = F[P];
        T = u;
        var re = i.responseState, be = Y.id, ke = Y.errorDigest, Ne = Y.errorMessage, it = Y.errorComponentStack;
        if (T.push(re.startInlineScript), re.sentClientRenderFunction ? T.push('$RX("') : (re.sentClientRenderFunction = !0, T.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), be === null) throw Error(t(395));
        if (T.push(be), T.push('"'), ke || Ne || it) {
          T.push(",");
          var rr = Ee(ke || "");
          T.push(rr);
        }
        if (Ne || it) {
          T.push(",");
          var nr = Ee(Ne || "");
          T.push(nr);
        }
        if (it) {
          T.push(",");
          var Mt = Ee(it);
          T.push(Mt);
        }
        if (!T.push(")<\/script>")) {
          i.destination = null, P++, F.splice(0, P);
          return;
        }
      }
      F.splice(0, P);
      var Lr = i.completedBoundaries;
      for (P = 0; P < Lr.length; P++) if (!sn(i, u, Lr[P])) {
        i.destination = null, P++, Lr.splice(0, P);
        return;
      }
      Lr.splice(0, P);
      var vr = i.partialBoundaries;
      for (P = 0; P < vr.length; P++) {
        var un = vr[P];
        e: {
          F = i, Y = u;
          var Mr = un.completedSegments;
          for (re = 0; re < Mr.length; re++) if (!ln(F, Y, un, Mr[re])) {
            re++, Mr.splice(0, re);
            var qn = !1;
            break e;
          }
          Mr.splice(0, re), qn = !0;
        }
        if (!qn) {
          i.destination = null, P++, vr.splice(0, P);
          return;
        }
      }
      vr.splice(0, P);
      var Er = i.completedBoundaries;
      for (P = 0; P < Er.length; P++) if (!sn(i, u, Er[P])) {
        i.destination = null, P++, Er.splice(0, P);
        return;
      }
      Er.splice(0, P);
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function zn(i, u) {
    try {
      var g = i.abortableTasks;
      g.forEach(function(T) {
        return tt(T, i, u);
      }), g.clear(), i.destination !== null && Kr(i, i.destination);
    } catch (T) {
      y(i, T), v(i, T);
    }
  }
  function Hn() {
  }
  function cn(i, u, g, T) {
    var F = !1, P = null, Y = "", re = { push: function(ke) {
      return ke !== null && (Y += ke), !0;
    }, destroy: function(ke) {
      F = !0, P = ke;
    } }, be = !1;
    if (i = xr(i, Fe(g, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Hn, void 0, function() {
      be = !0;
    }), Ir(i), zn(i, T), i.status === 1) i.status = 2, re.destroy(i.fatalError);
    else if (i.status !== 2 && i.destination === null) {
      i.destination = re;
      try {
        Kr(i, re);
      } catch (ke) {
        y(i, ke), v(i, ke);
      }
    }
    if (F) throw P;
    if (!be) throw Error(t(426));
    return Y;
  }
  return $r.renderToNodeStream = function() {
    throw Error(t(207));
  }, $r.renderToStaticMarkup = function(i, u) {
    return cn(i, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, $r.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, $r.renderToString = function(i, u) {
    return cn(i, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, $r.version = "18.3.1", $r;
}
var ia = {}, os;
function rd() {
  if (os) return ia;
  os = 1;
  var e = ft;
  function t(o) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, h = 1; h < arguments.length; h++) c += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + o + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function a(o, c) {
    if (c.length !== 0) if (512 < c.length) 0 < n && (o.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), o.enqueue(c);
    else {
      var h = r.length - n;
      h < c.length && (h === 0 ? o.enqueue(r) : (r.set(c.subarray(0, h), n), o.enqueue(r), c = c.subarray(h)), r = new Uint8Array(512), n = 0), r.set(c, n), n += c.length;
    }
  }
  function s(o, c) {
    return a(o, c), !0;
  }
  function p(o) {
    r && 0 < n && (o.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var m = new TextEncoder();
  function b(o) {
    return m.encode(o);
  }
  function f(o) {
    return m.encode(o);
  }
  function k(o, c) {
    typeof o.error == "function" ? o.error(c) : o.close();
  }
  var A = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, U = {}, _ = {};
  function C(o) {
    return A.call(_, o) ? !0 : A.call(U, o) ? !1 : O.test(o) ? _[o] = !0 : (U[o] = !0, !1);
  }
  function N(o, c, h, S, M, D, V) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = S, this.attributeNamespace = M, this.mustUseProperty = h, this.propertyName = o, this.type = c, this.sanitizeURL = D, this.removeEmptyString = V;
  }
  var L = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    L[o] = new N(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var c = o[0];
    L[c] = new N(c, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    L[o] = new N(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    L[o] = new N(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    L[o] = new N(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    L[o] = new N(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    L[o] = new N(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    L[o] = new N(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    L[o] = new N(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var $ = /[\-:]([a-z])/g;
  function G(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var c = o.replace(
      $,
      G
    );
    L[c] = new N(c, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var c = o.replace($, G);
    L[c] = new N(c, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var c = o.replace($, G);
    L[c] = new N(c, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    L[o] = new N(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), L.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    L[o] = new N(o, 1, !1, o.toLowerCase(), null, !0, !0);
  });
  var z = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, w = ["Webkit", "ms", "Moz", "O"];
  Object.keys(z).forEach(function(o) {
    w.forEach(function(c) {
      c = c + o.charAt(0).toUpperCase() + o.substring(1), z[c] = z[o];
    });
  });
  var ee = /["'&<>]/;
  function ue(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var c = ee.exec(o);
    if (c) {
      var h = "", S, M = 0;
      for (S = c.index; S < o.length; S++) {
        switch (o.charCodeAt(S)) {
          case 34:
            c = "&quot;";
            break;
          case 38:
            c = "&amp;";
            break;
          case 39:
            c = "&#x27;";
            break;
          case 60:
            c = "&lt;";
            break;
          case 62:
            c = "&gt;";
            break;
          default:
            continue;
        }
        M !== S && (h += o.substring(M, S)), M = S + 1, h += c;
      }
      o = M !== S ? h + o.substring(M, S) : h;
    }
    return o;
  }
  var xe = /([A-Z])/g, Re = /^ms-/, Me = Array.isArray, se = f("<script>"), pe = f("<\/script>"), Oe = f('<script src="'), Ae = f('<script type="module" src="'), we = f('" async=""><\/script>'), Ze = /(<\/|<)(s)(cript)/gi;
  function je(o, c, h, S) {
    return "" + c + (h === "s" ? "\\u0073" : "\\u0053") + S;
  }
  function Ee(o, c, h, S, M) {
    o = o === void 0 ? "" : o, c = c === void 0 ? se : f('<script nonce="' + ue(c) + '">');
    var D = [];
    if (h !== void 0 && D.push(c, b(("" + h).replace(Ze, je)), pe), S !== void 0) for (h = 0; h < S.length; h++) D.push(Oe, b(ue(S[h])), we);
    if (M !== void 0) for (S = 0; S < M.length; S++) D.push(Ae, b(ue(M[S])), we);
    return { bootstrapChunks: D, startInlineScript: c, placeholderPrefix: f(o + "P:"), segmentPrefix: f(o + "S:"), boundaryPrefix: o + "B:", idPrefix: o, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Fe(o, c) {
    return { insertionMode: o, selectedValue: c };
  }
  function qe(o) {
    return Fe(o === "http://www.w3.org/2000/svg" ? 2 : o === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function ce(o, c, h) {
    switch (c) {
      case "select":
        return Fe(1, h.value != null ? h.value : h.defaultValue);
      case "svg":
        return Fe(2, null);
      case "math":
        return Fe(3, null);
      case "foreignObject":
        return Fe(1, null);
      case "table":
        return Fe(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Fe(5, null);
      case "colgroup":
        return Fe(7, null);
      case "tr":
        return Fe(6, null);
    }
    return 4 <= o.insertionMode || o.insertionMode === 0 ? Fe(1, null) : o;
  }
  var W = f("<!-- -->");
  function I(o, c, h, S) {
    return c === "" ? S : (S && o.push(W), o.push(b(ue(c))), !0);
  }
  var B = /* @__PURE__ */ new Map(), q = f(' style="'), x = f(":"), ne = f(";");
  function j(o, c, h) {
    if (typeof h != "object") throw Error(t(62));
    c = !0;
    for (var S in h) if (A.call(h, S)) {
      var M = h[S];
      if (M != null && typeof M != "boolean" && M !== "") {
        if (S.indexOf("--") === 0) {
          var D = b(ue(S));
          M = b(ue(("" + M).trim()));
        } else {
          D = S;
          var V = B.get(D);
          V !== void 0 || (V = f(ue(D.replace(xe, "-$1").toLowerCase().replace(Re, "-ms-"))), B.set(D, V)), D = V, M = typeof M == "number" ? M === 0 || A.call(z, S) ? b("" + M) : b(M + "px") : b(ue(("" + M).trim()));
        }
        c ? (c = !1, o.push(q, D, x, M)) : o.push(ne, D, x, M);
      }
    }
    c || o.push(ae);
  }
  var le = f(" "), te = f('="'), ae = f('"'), X = f('=""');
  function oe(o, c, h, S) {
    switch (h) {
      case "style":
        j(o, c, S);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < h.length) || h[0] !== "o" && h[0] !== "O" || h[1] !== "n" && h[1] !== "N") {
      if (c = L.hasOwnProperty(h) ? L[h] : null, c !== null) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (h = b(c.attributeName), c.type) {
          case 3:
            S && o.push(le, h, X);
            break;
          case 4:
            S === !0 ? o.push(le, h, X) : S !== !1 && o.push(le, h, te, b(ue(S)), ae);
            break;
          case 5:
            isNaN(S) || o.push(le, h, te, b(ue(S)), ae);
            break;
          case 6:
            !isNaN(S) && 1 <= S && o.push(le, h, te, b(ue(S)), ae);
            break;
          default:
            c.sanitizeURL && (S = "" + S), o.push(le, h, te, b(ue(S)), ae);
        }
      } else if (C(h)) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = h.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        o.push(le, b(h), te, b(ue(S)), ae);
      }
    }
  }
  var he = f(">"), Q = f("/>");
  function ve(o, c, h) {
    if (c != null) {
      if (h != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && o.push(b("" + c));
    }
  }
  function ie(o) {
    var c = "";
    return e.Children.forEach(o, function(h) {
      h != null && (c += h);
    }), c;
  }
  var fe = f(' selected=""');
  function Ge(o, c, h, S) {
    o.push(_e(h));
    var M = h = null, D;
    for (D in c) if (A.call(c, D)) {
      var V = c[D];
      if (V != null) switch (D) {
        case "children":
          h = V;
          break;
        case "dangerouslySetInnerHTML":
          M = V;
          break;
        default:
          oe(o, S, D, V);
      }
    }
    return o.push(he), ve(o, M, h), typeof h == "string" ? (o.push(b(ue(h))), null) : h;
  }
  var me = f(`
`), dt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ve = /* @__PURE__ */ new Map();
  function _e(o) {
    var c = Ve.get(o);
    if (c === void 0) {
      if (!dt.test(o)) throw Error(t(65, o));
      c = f("<" + o), Ve.set(o, c);
    }
    return c;
  }
  var K = f("<!DOCTYPE html>");
  function de(o, c, h, S, M) {
    switch (c) {
      case "select":
        o.push(_e("select"));
        var D = null, V = null;
        for (Ie in h) if (A.call(h, Ie)) {
          var Z = h[Ie];
          if (Z != null) switch (Ie) {
            case "children":
              D = Z;
              break;
            case "dangerouslySetInnerHTML":
              V = Z;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              oe(o, S, Ie, Z);
          }
        }
        return o.push(he), ve(o, V, D), D;
      case "option":
        V = M.selectedValue, o.push(_e("option"));
        var ye = Z = null, Pe = null, Ie = null;
        for (D in h) if (A.call(h, D)) {
          var at = h[D];
          if (at != null) switch (D) {
            case "children":
              Z = at;
              break;
            case "selected":
              Pe = at;
              break;
            case "dangerouslySetInnerHTML":
              Ie = at;
              break;
            case "value":
              ye = at;
            default:
              oe(o, S, D, at);
          }
        }
        if (V != null) if (h = ye !== null ? "" + ye : ie(Z), Me(V)) {
          for (S = 0; S < V.length; S++)
            if ("" + V[S] === h) {
              o.push(fe);
              break;
            }
        } else "" + V === h && o.push(fe);
        else Pe && o.push(fe);
        return o.push(he), ve(o, Ie, Z), Z;
      case "textarea":
        o.push(_e("textarea")), Ie = V = D = null;
        for (Z in h) if (A.call(h, Z) && (ye = h[Z], ye != null)) switch (Z) {
          case "children":
            Ie = ye;
            break;
          case "value":
            D = ye;
            break;
          case "defaultValue":
            V = ye;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            oe(o, S, Z, ye);
        }
        if (D === null && V !== null && (D = V), o.push(he), Ie != null) {
          if (D != null) throw Error(t(92));
          if (Me(Ie) && 1 < Ie.length) throw Error(t(93));
          D = "" + Ie;
        }
        return typeof D == "string" && D[0] === `
` && o.push(me), D !== null && o.push(b(ue("" + D))), null;
      case "input":
        o.push(_e("input")), ye = Ie = Z = D = null;
        for (V in h) if (A.call(h, V) && (Pe = h[V], Pe != null)) switch (V) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ye = Pe;
            break;
          case "defaultValue":
            Z = Pe;
            break;
          case "checked":
            Ie = Pe;
            break;
          case "value":
            D = Pe;
            break;
          default:
            oe(o, S, V, Pe);
        }
        return Ie !== null ? oe(
          o,
          S,
          "checked",
          Ie
        ) : ye !== null && oe(o, S, "checked", ye), D !== null ? oe(o, S, "value", D) : Z !== null && oe(o, S, "value", Z), o.push(Q), null;
      case "menuitem":
        o.push(_e("menuitem"));
        for (var $t in h) if (A.call(h, $t) && (D = h[$t], D != null)) switch ($t) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            oe(o, S, $t, D);
        }
        return o.push(he), null;
      case "title":
        o.push(_e("title")), D = null;
        for (at in h) if (A.call(h, at) && (V = h[at], V != null)) switch (at) {
          case "children":
            D = V;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            oe(o, S, at, V);
        }
        return o.push(he), D;
      case "listing":
      case "pre":
        o.push(_e(c)), V = D = null;
        for (ye in h) if (A.call(h, ye) && (Z = h[ye], Z != null)) switch (ye) {
          case "children":
            D = Z;
            break;
          case "dangerouslySetInnerHTML":
            V = Z;
            break;
          default:
            oe(o, S, ye, Z);
        }
        if (o.push(he), V != null) {
          if (D != null) throw Error(t(60));
          if (typeof V != "object" || !("__html" in V)) throw Error(t(61));
          h = V.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? o.push(me, b(h)) : o.push(b("" + h)));
        }
        return typeof D == "string" && D[0] === `
` && o.push(me), D;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        o.push(_e(c));
        for (var ar in h) if (A.call(h, ar) && (D = h[ar], D != null)) switch (ar) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            oe(o, S, ar, D);
        }
        return o.push(Q), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ge(o, h, c, S);
      case "html":
        return M.insertionMode === 0 && o.push(K), Ge(o, h, c, S);
      default:
        if (c.indexOf("-") === -1 && typeof h.is != "string") return Ge(o, h, c, S);
        o.push(_e(c)), V = D = null;
        for (Pe in h) if (A.call(h, Pe) && (Z = h[Pe], Z != null)) switch (Pe) {
          case "children":
            D = Z;
            break;
          case "dangerouslySetInnerHTML":
            V = Z;
            break;
          case "style":
            j(o, S, Z);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            C(Pe) && typeof Z != "function" && typeof Z != "symbol" && o.push(le, b(Pe), te, b(ue(Z)), ae);
        }
        return o.push(he), ve(o, V, D), D;
    }
  }
  var et = f("</"), $e = f(">"), Ue = f('<template id="'), lr = f('"></template>'), cr = f("<!--$-->"), Kt = f('<!--$?--><template id="'), Xt = f('"></template>'), yt = f("<!--$!-->"), Rt = f("<!--/$-->"), st = f("<template"), bt = f('"'), Jt = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var Zt = f("></template>");
  function xt(o, c, h) {
    if (a(o, Kt), h === null) throw Error(t(395));
    return a(o, h), s(o, Xt);
  }
  var Tt = f('<div hidden id="'), vt = f('">'), ze = f("</div>"), mt = f('<svg aria-hidden="true" style="display:none" id="'), ur = f('">'), Qt = f("</svg>"), ge = f('<math aria-hidden="true" style="display:none" id="'), pt = f('">'), It = f("</math>"), dr = f('<table hidden id="'), Pt = f('">'), er = f("</table>"), pr = f('<table hidden><tbody id="'), Cr = f('">'), lt = f("</tbody></table>"), ht = f('<table hidden><tr id="'), br = f('">'), Ht = f("</tr></table>"), qt = f('<table hidden><colgroup id="'), Bt = f('">'), nt = f("</colgroup></table>");
  function yr(o, c, h, S) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return a(o, Tt), a(o, c.segmentPrefix), a(o, b(S.toString(16))), s(o, vt);
      case 2:
        return a(o, mt), a(o, c.segmentPrefix), a(o, b(S.toString(16))), s(o, ur);
      case 3:
        return a(o, ge), a(o, c.segmentPrefix), a(o, b(S.toString(16))), s(o, pt);
      case 4:
        return a(o, dr), a(o, c.segmentPrefix), a(o, b(S.toString(16))), s(o, Pt);
      case 5:
        return a(o, pr), a(o, c.segmentPrefix), a(o, b(S.toString(16))), s(o, Cr);
      case 6:
        return a(o, ht), a(o, c.segmentPrefix), a(o, b(S.toString(16))), s(o, br);
      case 7:
        return a(
          o,
          qt
        ), a(o, c.segmentPrefix), a(o, b(S.toString(16))), s(o, Bt);
      default:
        throw Error(t(397));
    }
  }
  function Dt(o, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(o, ze);
      case 2:
        return s(o, Qt);
      case 3:
        return s(o, It);
      case 4:
        return s(o, er);
      case 5:
        return s(o, lt);
      case 6:
        return s(o, Ht);
      case 7:
        return s(o, nt);
      default:
        throw Error(t(397));
    }
  }
  var xr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), tr = f('$RS("'), fr = f('","'), y = f('")<\/script>'), v = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), R = f('$RC("'), J = f('","'), Se = f('")<\/script>'), Te = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ce = f('$RX("'), He = f('"'), Qe = f(")<\/script>"), wt = f(","), tt = /[<\u2028\u2029]/g;
  function Ye(o) {
    return JSON.stringify(o).replace(tt, function(c) {
      switch (c) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var Lt = Object.assign, Ir = Symbol.for("react.element"), Pr = Symbol.for("react.portal"), Dr = Symbol.for("react.fragment"), on = Symbol.for("react.strict_mode"), sn = Symbol.for("react.profiler"), ln = Symbol.for("react.provider"), Kr = Symbol.for("react.context"), zn = Symbol.for("react.forward_ref"), Hn = Symbol.for("react.suspense"), cn = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), T = Symbol.for("react.debug_trace_mode"), F = Symbol.for("react.legacy_hidden"), P = Symbol.for("react.default_value"), Y = Symbol.iterator;
  function re(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case Dr:
        return "Fragment";
      case Pr:
        return "Portal";
      case sn:
        return "Profiler";
      case on:
        return "StrictMode";
      case Hn:
        return "Suspense";
      case cn:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case Kr:
        return (o.displayName || "Context") + ".Consumer";
      case ln:
        return (o._context.displayName || "Context") + ".Provider";
      case zn:
        var c = o.render;
        return o = o.displayName, o || (o = c.displayName || c.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case i:
        return c = o.displayName || null, c !== null ? c : re(o.type) || "Memo";
      case u:
        c = o._payload, o = o._init;
        try {
          return re(o(c));
        } catch {
        }
    }
    return null;
  }
  var be = {};
  function ke(o, c) {
    if (o = o.contextTypes, !o) return be;
    var h = {}, S;
    for (S in o) h[S] = c[S];
    return h;
  }
  var Ne = null;
  function it(o, c) {
    if (o !== c) {
      o.context._currentValue = o.parentValue, o = o.parent;
      var h = c.parent;
      if (o === null) {
        if (h !== null) throw Error(t(401));
      } else {
        if (h === null) throw Error(t(401));
        it(o, h);
      }
      c.context._currentValue = c.value;
    }
  }
  function rr(o) {
    o.context._currentValue = o.parentValue, o = o.parent, o !== null && rr(o);
  }
  function nr(o) {
    var c = o.parent;
    c !== null && nr(c), o.context._currentValue = o.value;
  }
  function Mt(o, c) {
    if (o.context._currentValue = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === c.depth ? it(o, c) : Mt(o, c);
  }
  function Lr(o, c) {
    var h = c.parent;
    if (h === null) throw Error(t(402));
    o.depth === h.depth ? it(o, h) : Lr(o, h), c.context._currentValue = c.value;
  }
  function vr(o) {
    var c = Ne;
    c !== o && (c === null ? nr(o) : o === null ? rr(c) : c.depth === o.depth ? it(c, o) : c.depth > o.depth ? Mt(c, o) : Lr(c, o), Ne = o);
  }
  var un = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, c) {
    o = o._reactInternals, o.queue !== null && o.queue.push(c);
  }, enqueueReplaceState: function(o, c) {
    o = o._reactInternals, o.replace = !0, o.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Mr(o, c, h, S) {
    var M = o.state !== void 0 ? o.state : null;
    o.updater = un, o.props = h, o.state = M;
    var D = { queue: [], replace: !1 };
    o._reactInternals = D;
    var V = c.contextType;
    if (o.context = typeof V == "object" && V !== null ? V._currentValue : S, V = c.getDerivedStateFromProps, typeof V == "function" && (V = V(h, M), M = V == null ? M : Lt({}, M, V), o.state = M), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (c = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), c !== o.state && un.enqueueReplaceState(o, o.state, null), D.queue !== null && 0 < D.queue.length) if (c = D.queue, V = D.replace, D.queue = null, D.replace = !1, V && c.length === 1) o.state = c[0];
    else {
      for (D = V ? c[0] : o.state, M = !0, V = V ? 1 : 0; V < c.length; V++) {
        var Z = c[V];
        Z = typeof Z == "function" ? Z.call(o, D, h, S) : Z, Z != null && (M ? (M = !1, D = Lt({}, D, Z)) : Lt(D, Z));
      }
      o.state = D;
    }
    else D.queue = null;
  }
  var qn = { id: 1, overflow: "" };
  function Er(o, c, h) {
    var S = o.id;
    o = o.overflow;
    var M = 32 - Bn(S) - 1;
    S &= ~(1 << M), h += 1;
    var D = 32 - Bn(c) + M;
    if (30 < D) {
      var V = M - M % 5;
      return D = (S & (1 << V) - 1).toString(32), S >>= V, M -= V, { id: 1 << 32 - Bn(c) + M | h << M | S, overflow: D + o };
    }
    return { id: 1 << D | h << M | S, overflow: o };
  }
  var Bn = Math.clz32 ? Math.clz32 : au, ru = Math.log, nu = Math.LN2;
  function au(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (ru(o) / nu | 0) | 0;
  }
  function iu(o, c) {
    return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
  }
  var ou = typeof Object.is == "function" ? Object.is : iu, wr = null, Ma = null, Wn = null, rt = null, dn = !1, Gn = !1, pn = 0, Ar = null, Yn = 0;
  function Fr() {
    if (wr === null) throw Error(t(321));
    return wr;
  }
  function xo() {
    if (0 < Yn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Fa() {
    return rt === null ? Wn === null ? (dn = !1, Wn = rt = xo()) : (dn = !0, rt = Wn) : rt.next === null ? (dn = !1, rt = rt.next = xo()) : (dn = !0, rt = rt.next), rt;
  }
  function $a() {
    Ma = wr = null, Gn = !1, Wn = null, Yn = 0, rt = Ar = null;
  }
  function vo(o, c) {
    return typeof c == "function" ? c(o) : c;
  }
  function wo(o, c, h) {
    if (wr = Fr(), rt = Fa(), dn) {
      var S = rt.queue;
      if (c = S.dispatch, Ar !== null && (h = Ar.get(S), h !== void 0)) {
        Ar.delete(S), S = rt.memoizedState;
        do
          S = o(S, h.action), h = h.next;
        while (h !== null);
        return rt.memoizedState = S, [S, c];
      }
      return [rt.memoizedState, c];
    }
    return o = o === vo ? typeof c == "function" ? c() : c : h !== void 0 ? h(c) : c, rt.memoizedState = o, o = rt.queue = { last: null, dispatch: null }, o = o.dispatch = su.bind(null, wr, o), [rt.memoizedState, o];
  }
  function So(o, c) {
    if (wr = Fr(), rt = Fa(), c = c === void 0 ? null : c, rt !== null) {
      var h = rt.memoizedState;
      if (h !== null && c !== null) {
        var S = h[1];
        e: if (S === null) S = !1;
        else {
          for (var M = 0; M < S.length && M < c.length; M++) if (!ou(c[M], S[M])) {
            S = !1;
            break e;
          }
          S = !0;
        }
        if (S) return h[0];
      }
    }
    return o = o(), rt.memoizedState = [o, c], o;
  }
  function su(o, c, h) {
    if (25 <= Yn) throw Error(t(301));
    if (o === wr) if (Gn = !0, o = { action: h, next: null }, Ar === null && (Ar = /* @__PURE__ */ new Map()), h = Ar.get(c), h === void 0) Ar.set(c, o);
    else {
      for (c = h; c.next !== null; ) c = c.next;
      c.next = o;
    }
  }
  function lu() {
    throw Error(t(394));
  }
  function Vn() {
  }
  var ko = { readContext: function(o) {
    return o._currentValue;
  }, useContext: function(o) {
    return Fr(), o._currentValue;
  }, useMemo: So, useReducer: wo, useRef: function(o) {
    wr = Fr(), rt = Fa();
    var c = rt.memoizedState;
    return c === null ? (o = { current: o }, rt.memoizedState = o) : c;
  }, useState: function(o) {
    return wo(vo, o);
  }, useInsertionEffect: Vn, useLayoutEffect: function() {
  }, useCallback: function(o, c) {
    return So(function() {
      return o;
    }, c);
  }, useImperativeHandle: Vn, useEffect: Vn, useDebugValue: Vn, useDeferredValue: function(o) {
    return Fr(), o;
  }, useTransition: function() {
    return Fr(), [!1, lu];
  }, useId: function() {
    var o = Ma.treeContext, c = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Bn(o) - 1)).toString(32) + c;
    var h = Kn;
    if (h === null) throw Error(t(404));
    return c = pn++, o = ":" + h.idPrefix + "R" + o, 0 < c && (o += "H" + c.toString(32)), o + ":";
  }, useMutableSource: function(o, c) {
    return Fr(), c(o._source);
  }, useSyncExternalStore: function(o, c, h) {
    if (h === void 0) throw Error(t(407));
    return h();
  } }, Kn = null, Ua = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function cu(o) {
    return console.error(o), null;
  }
  function fn() {
  }
  function uu(o, c, h, S, M, D, V, Z, ye) {
    var Pe = [], Ie = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: S === void 0 ? 12800 : S, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ie, pingedTasks: Pe, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: M === void 0 ? cu : M, onAllReady: D === void 0 ? fn : D, onShellReady: V === void 0 ? fn : V, onShellError: Z === void 0 ? fn : Z, onFatalError: ye === void 0 ? fn : ye }, h = Xn(c, 0, null, h, !1, !1), h.parentFlushed = !0, o = za(c, o, null, h, Ie, be, null, qn), Pe.push(o), c;
  }
  function za(o, c, h, S, M, D, V, Z) {
    o.allPendingTasks++, h === null ? o.pendingRootTasks++ : h.pendingTasks++;
    var ye = { node: c, ping: function() {
      var Pe = o.pingedTasks;
      Pe.push(ye), Pe.length === 1 && jo(o);
    }, blockedBoundary: h, blockedSegment: S, abortSet: M, legacyContext: D, context: V, treeContext: Z };
    return M.add(ye), ye;
  }
  function Xn(o, c, h, S, M, D) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: S, boundary: h, lastPushedText: M, textEmbedded: D };
  }
  function mn(o, c) {
    if (o = o.onError(c), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function Jn(o, c) {
    var h = o.onShellError;
    h(c), h = o.onFatalError, h(c), o.destination !== null ? (o.status = 2, k(o.destination, c)) : (o.status = 1, o.fatalError = c);
  }
  function To(o, c, h, S, M) {
    for (wr = {}, Ma = c, pn = 0, o = h(S, M); Gn; ) Gn = !1, pn = 0, Yn += 1, rt = null, o = h(S, M);
    return $a(), o;
  }
  function Co(o, c, h, S) {
    var M = h.render(), D = S.childContextTypes;
    if (D != null) {
      var V = c.legacyContext;
      if (typeof h.getChildContext != "function") S = V;
      else {
        h = h.getChildContext();
        for (var Z in h) if (!(Z in D)) throw Error(t(108, re(S) || "Unknown", Z));
        S = Lt({}, V, h);
      }
      c.legacyContext = S, Ft(o, c, M), c.legacyContext = V;
    } else Ft(o, c, M);
  }
  function Eo(o, c) {
    if (o && o.defaultProps) {
      c = Lt({}, c), o = o.defaultProps;
      for (var h in o) c[h] === void 0 && (c[h] = o[h]);
      return c;
    }
    return c;
  }
  function Ha(o, c, h, S, M) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      M = ke(h, c.legacyContext);
      var D = h.contextType;
      D = new h(S, typeof D == "object" && D !== null ? D._currentValue : M), Mr(D, h, S, M), Co(o, c, D, h);
    } else {
      D = ke(h, c.legacyContext), M = To(o, c, h, S, D);
      var V = pn !== 0;
      if (typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0) Mr(M, h, S, D), Co(o, c, M, h);
      else if (V) {
        S = c.treeContext, c.treeContext = Er(S, 1, 0);
        try {
          Ft(o, c, M);
        } finally {
          c.treeContext = S;
        }
      } else Ft(o, c, M);
    }
    else if (typeof h == "string") {
      switch (M = c.blockedSegment, D = de(M.chunks, h, S, o.responseState, M.formatContext), M.lastPushedText = !1, V = M.formatContext, M.formatContext = ce(V, h, S), qa(o, c, D), M.formatContext = V, h) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          M.chunks.push(et, b(h), $e);
      }
      M.lastPushedText = !1;
    } else {
      switch (h) {
        case F:
        case T:
        case on:
        case sn:
        case Dr:
          Ft(o, c, S.children);
          return;
        case cn:
          Ft(o, c, S.children);
          return;
        case g:
          throw Error(t(343));
        case Hn:
          e: {
            h = c.blockedBoundary, M = c.blockedSegment, D = S.fallback, S = S.children, V = /* @__PURE__ */ new Set();
            var Z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: V, errorDigest: null }, ye = Xn(o, M.chunks.length, Z, M.formatContext, !1, !1);
            M.children.push(ye), M.lastPushedText = !1;
            var Pe = Xn(o, 0, null, M.formatContext, !1, !1);
            Pe.parentFlushed = !0, c.blockedBoundary = Z, c.blockedSegment = Pe;
            try {
              if (qa(
                o,
                c,
                S
              ), Pe.lastPushedText && Pe.textEmbedded && Pe.chunks.push(W), Pe.status = 1, Zn(Z, Pe), Z.pendingTasks === 0) break e;
            } catch (Ie) {
              Pe.status = 4, Z.forceClientRender = !0, Z.errorDigest = mn(o, Ie);
            } finally {
              c.blockedBoundary = h, c.blockedSegment = M;
            }
            c = za(o, D, h, ye, V, c.legacyContext, c.context, c.treeContext), o.pingedTasks.push(c);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case zn:
          if (S = To(o, c, h.render, S, M), pn !== 0) {
            h = c.treeContext, c.treeContext = Er(h, 1, 0);
            try {
              Ft(o, c, S);
            } finally {
              c.treeContext = h;
            }
          } else Ft(o, c, S);
          return;
        case i:
          h = h.type, S = Eo(h, S), Ha(o, c, h, S, M);
          return;
        case ln:
          if (M = S.children, h = h._context, S = S.value, D = h._currentValue, h._currentValue = S, V = Ne, Ne = S = { parent: V, depth: V === null ? 0 : V.depth + 1, context: h, parentValue: D, value: S }, c.context = S, Ft(o, c, M), o = Ne, o === null) throw Error(t(403));
          S = o.parentValue, o.context._currentValue = S === P ? o.context._defaultValue : S, o = Ne = o.parent, c.context = o;
          return;
        case Kr:
          S = S.children, S = S(h._currentValue), Ft(o, c, S);
          return;
        case u:
          M = h._init, h = M(h._payload), S = Eo(h, S), Ha(o, c, h, S, void 0);
          return;
      }
      throw Error(t(
        130,
        h == null ? h : typeof h,
        ""
      ));
    }
  }
  function Ft(o, c, h) {
    if (c.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ir:
          Ha(o, c, h.type, h.props, h.ref);
          return;
        case Pr:
          throw Error(t(257));
        case u:
          var S = h._init;
          h = S(h._payload), Ft(o, c, h);
          return;
      }
      if (Me(h)) {
        Ao(o, c, h);
        return;
      }
      if (h === null || typeof h != "object" ? S = null : (S = Y && h[Y] || h["@@iterator"], S = typeof S == "function" ? S : null), S && (S = S.call(h))) {
        if (h = S.next(), !h.done) {
          var M = [];
          do
            M.push(h.value), h = S.next();
          while (!h.done);
          Ao(o, c, M);
        }
        return;
      }
      throw o = Object.prototype.toString.call(h), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : o));
    }
    typeof h == "string" ? (S = c.blockedSegment, S.lastPushedText = I(c.blockedSegment.chunks, h, o.responseState, S.lastPushedText)) : typeof h == "number" && (S = c.blockedSegment, S.lastPushedText = I(c.blockedSegment.chunks, "" + h, o.responseState, S.lastPushedText));
  }
  function Ao(o, c, h) {
    for (var S = h.length, M = 0; M < S; M++) {
      var D = c.treeContext;
      c.treeContext = Er(D, S, M);
      try {
        qa(o, c, h[M]);
      } finally {
        c.treeContext = D;
      }
    }
  }
  function qa(o, c, h) {
    var S = c.blockedSegment.formatContext, M = c.legacyContext, D = c.context;
    try {
      return Ft(o, c, h);
    } catch (ye) {
      if ($a(), typeof ye == "object" && ye !== null && typeof ye.then == "function") {
        h = ye;
        var V = c.blockedSegment, Z = Xn(o, V.chunks.length, null, V.formatContext, V.lastPushedText, !0);
        V.children.push(Z), V.lastPushedText = !1, o = za(o, c.node, c.blockedBoundary, Z, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, h.then(o, o), c.blockedSegment.formatContext = S, c.legacyContext = M, c.context = D, vr(D);
      } else throw c.blockedSegment.formatContext = S, c.legacyContext = M, c.context = D, vr(D), ye;
    }
  }
  function du(o) {
    var c = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, Oo(this, c, o);
  }
  function _o(o, c, h) {
    var S = o.blockedBoundary;
    o.blockedSegment.status = 3, S === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (S.pendingTasks--, S.forceClientRender || (S.forceClientRender = !0, o = h === void 0 ? Error(t(432)) : h, S.errorDigest = c.onError(o), S.parentFlushed && c.clientRenderedBoundaries.push(S)), S.fallbackAbortableTasks.forEach(function(M) {
      return _o(M, c, h);
    }), S.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (S = c.onAllReady, S()));
  }
  function Zn(o, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var h = c.children[0];
      h.id = c.id, h.parentFlushed = !0, h.status === 1 && Zn(o, h);
    } else o.completedSegments.push(c);
  }
  function Oo(o, c, h) {
    if (c === null) {
      if (h.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = h;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = fn, c = o.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && Zn(c, h), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(du, o), c.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (Zn(c, h), c.completedSegments.length === 1 && c.parentFlushed && o.partialBoundaries.push(c)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function jo(o) {
    if (o.status !== 2) {
      var c = Ne, h = Ua.current;
      Ua.current = ko;
      var S = Kn;
      Kn = o.responseState;
      try {
        var M = o.pingedTasks, D;
        for (D = 0; D < M.length; D++) {
          var V = M[D], Z = o, ye = V.blockedSegment;
          if (ye.status === 0) {
            vr(V.context);
            try {
              Ft(Z, V, V.node), ye.lastPushedText && ye.textEmbedded && ye.chunks.push(W), V.abortSet.delete(V), ye.status = 1, Oo(Z, V.blockedBoundary, ye);
            } catch (ir) {
              if ($a(), typeof ir == "object" && ir !== null && typeof ir.then == "function") {
                var Pe = V.ping;
                ir.then(Pe, Pe);
              } else {
                V.abortSet.delete(V), ye.status = 4;
                var Ie = V.blockedBoundary, at = ir, $t = mn(Z, at);
                if (Ie === null ? Jn(Z, at) : (Ie.pendingTasks--, Ie.forceClientRender || (Ie.forceClientRender = !0, Ie.errorDigest = $t, Ie.parentFlushed && Z.clientRenderedBoundaries.push(Ie))), Z.allPendingTasks--, Z.allPendingTasks === 0) {
                  var ar = Z.onAllReady;
                  ar();
                }
              }
            } finally {
            }
          }
        }
        M.splice(0, D), o.destination !== null && Ba(o, o.destination);
      } catch (ir) {
        mn(o, ir), Jn(o, ir);
      } finally {
        Kn = S, Ua.current = h, h === ko && vr(c);
      }
    }
  }
  function Qn(o, c, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var S = h.id = o.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, o = o.responseState, a(c, Ue), a(c, o.placeholderPrefix), o = b(S.toString(16)), a(c, o), s(c, lr);
      case 1:
        h.status = 2;
        var M = !0;
        S = h.chunks;
        var D = 0;
        h = h.children;
        for (var V = 0; V < h.length; V++) {
          for (M = h[V]; D < M.index; D++) a(c, S[D]);
          M = ea(o, c, M);
        }
        for (; D < S.length - 1; D++) a(c, S[D]);
        return D < S.length && (M = s(c, S[D])), M;
      default:
        throw Error(t(390));
    }
  }
  function ea(o, c, h) {
    var S = h.boundary;
    if (S === null) return Qn(o, c, h);
    if (S.parentFlushed = !0, S.forceClientRender) S = S.errorDigest, s(c, yt), a(c, st), S && (a(c, Jt), a(c, b(ue(S))), a(c, bt)), s(c, Zt), Qn(o, c, h);
    else if (0 < S.pendingTasks) {
      S.rootSegmentID = o.nextSegmentId++, 0 < S.completedSegments.length && o.partialBoundaries.push(S);
      var M = o.responseState, D = M.nextSuspenseID++;
      M = f(M.boundaryPrefix + D.toString(16)), S = S.id = M, xt(c, o.responseState, S), Qn(o, c, h);
    } else if (S.byteSize > o.progressiveChunkSize) S.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(S), xt(c, o.responseState, S.id), Qn(o, c, h);
    else {
      if (s(c, cr), h = S.completedSegments, h.length !== 1) throw Error(t(391));
      ea(o, c, h[0]);
    }
    return s(c, Rt);
  }
  function No(o, c, h) {
    return yr(c, o.responseState, h.formatContext, h.id), ea(o, c, h), Dt(c, h.formatContext);
  }
  function Ro(o, c, h) {
    for (var S = h.completedSegments, M = 0; M < S.length; M++) Io(o, c, h, S[M]);
    if (S.length = 0, o = o.responseState, S = h.id, h = h.rootSegmentID, a(c, o.startInlineScript), o.sentCompleteBoundaryFunction ? a(c, R) : (o.sentCompleteBoundaryFunction = !0, a(c, v)), S === null) throw Error(t(395));
    return h = b(h.toString(16)), a(c, S), a(c, J), a(c, o.segmentPrefix), a(c, h), s(c, Se);
  }
  function Io(o, c, h, S) {
    if (S.status === 2) return !0;
    var M = S.id;
    if (M === -1) {
      if ((S.id = h.rootSegmentID) === -1) throw Error(t(392));
      return No(o, c, S);
    }
    return No(o, c, S), o = o.responseState, a(c, o.startInlineScript), o.sentCompleteSegmentFunction ? a(c, tr) : (o.sentCompleteSegmentFunction = !0, a(c, xr)), a(c, o.segmentPrefix), M = b(M.toString(16)), a(c, M), a(c, fr), a(c, o.placeholderPrefix), a(c, M), s(c, y);
  }
  function Ba(o, c) {
    r = new Uint8Array(512), n = 0;
    try {
      var h = o.completedRootSegment;
      if (h !== null && o.pendingRootTasks === 0) {
        ea(o, c, h), o.completedRootSegment = null;
        var S = o.responseState.bootstrapChunks;
        for (h = 0; h < S.length - 1; h++) a(c, S[h]);
        h < S.length && s(c, S[h]);
      }
      var M = o.clientRenderedBoundaries, D;
      for (D = 0; D < M.length; D++) {
        var V = M[D];
        S = c;
        var Z = o.responseState, ye = V.id, Pe = V.errorDigest, Ie = V.errorMessage, at = V.errorComponentStack;
        if (a(S, Z.startInlineScript), Z.sentClientRenderFunction ? a(S, Ce) : (Z.sentClientRenderFunction = !0, a(
          S,
          Te
        )), ye === null) throw Error(t(395));
        a(S, ye), a(S, He), (Pe || Ie || at) && (a(S, wt), a(S, b(Ye(Pe || "")))), (Ie || at) && (a(S, wt), a(S, b(Ye(Ie || "")))), at && (a(S, wt), a(S, b(Ye(at)))), s(S, Qe);
      }
      M.splice(0, D);
      var $t = o.completedBoundaries;
      for (D = 0; D < $t.length; D++) Ro(o, c, $t[D]);
      $t.splice(0, D), p(c), r = new Uint8Array(512), n = 0;
      var ar = o.partialBoundaries;
      for (D = 0; D < ar.length; D++) {
        var ir = ar[D];
        e: {
          M = o, V = c;
          var ta = ir.completedSegments;
          for (Z = 0; Z < ta.length; Z++) if (!Io(
            M,
            V,
            ir,
            ta[Z]
          )) {
            Z++, ta.splice(0, Z);
            var Do = !1;
            break e;
          }
          ta.splice(0, Z), Do = !0;
        }
        if (!Do) {
          o.destination = null, D++, ar.splice(0, D);
          return;
        }
      }
      ar.splice(0, D);
      var Wa = o.completedBoundaries;
      for (D = 0; D < Wa.length; D++) Ro(o, c, Wa[D]);
      Wa.splice(0, D);
    } finally {
      p(c), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && c.close();
    }
  }
  function Po(o, c) {
    try {
      var h = o.abortableTasks;
      h.forEach(function(S) {
        return _o(S, o, c);
      }), h.clear(), o.destination !== null && Ba(o, o.destination);
    } catch (S) {
      mn(o, S), Jn(o, S);
    }
  }
  return ia.renderToReadableStream = function(o, c) {
    return new Promise(function(h, S) {
      var M, D, V = new Promise(function(Ie, at) {
        D = Ie, M = at;
      }), Z = uu(o, Ee(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), qe(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, D, function() {
        var Ie = new ReadableStream({ type: "bytes", pull: function(at) {
          if (Z.status === 1) Z.status = 2, k(at, Z.fatalError);
          else if (Z.status !== 2 && Z.destination === null) {
            Z.destination = at;
            try {
              Ba(Z, at);
            } catch ($t) {
              mn(Z, $t), Jn(Z, $t);
            }
          }
        }, cancel: function() {
          Po(Z);
        } }, { highWaterMark: 0 });
        Ie.allReady = V, h(Ie);
      }, function(Ie) {
        V.catch(function() {
        }), S(Ie);
      }, M);
      if (c && c.signal) {
        var ye = c.signal, Pe = function() {
          Po(Z, ye.reason), ye.removeEventListener("abort", Pe);
        };
        ye.addEventListener("abort", Pe);
      }
      jo(Z);
    });
  }, ia.version = "18.3.1", ia;
}
var ss;
function nd() {
  if (ss) return _r;
  ss = 1;
  var e, t;
  return e = td(), t = rd(), _r.version = e.version, _r.renderToString = e.renderToString, _r.renderToStaticMarkup = e.renderToStaticMarkup, _r.renderToNodeStream = e.renderToNodeStream, _r.renderToStaticNodeStream = e.renderToStaticNodeStream, _r.renderToReadableStream = t.renderToReadableStream, _r;
}
nd();
const ad = "staticMarkup";
function Zi() {
  const e = cl().indexOf(ad) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const Rr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Zi(), { onClick: a, ...s } = r.props;
  if (n)
    return ft.cloneElement(r, {
      ...s,
      onClick: (b) => (e && e.event && e.action && yl(e), a ? a(b) : !0)
    });
  let p = "";
  ["input", "header", "header-input"].includes(t) && (p = `-${t}`);
  const m = {
    [`data-ga${p}`]: e.text,
    [`data-ga${p}-name`]: e.name,
    [`data-ga${p}-event`]: e.event,
    [`data-ga${p}-action`]: e.action,
    [`data-ga${p}-type`]: e.type,
    [`data-ga${p}-region`]: e.region,
    [`data-ga${p}-section`]: e.section,
    [`data-ga${p}-component`]: e.component
  };
  return ft.cloneElement(r, {
    ...s,
    onClick: a,
    ...m
  });
}, wl = Vi(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: n,
    onClick: a,
    gaData: s
  }, p) => {
    var m, b, f, k, A, O;
    const U = e === n, _ = U ? "open" : "close";
    return /* @__PURE__ */ H.jsxs(
      "div",
      {
        ref: p,
        className: ot("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (m = r.content) == null ? void 0 : m.icon
        }),
        children: [
          /* @__PURE__ */ H.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ H.jsx("h4", { children: /* @__PURE__ */ H.jsx(
            Rr,
            {
              gaData: {
                ...s,
                action: _,
                text: r.content.header
              },
              children: /* @__PURE__ */ H.jsxs(
                "button",
                {
                  "data-testid": "accordion-opener",
                  className: ot({ collapsed: !U }),
                  "data-bs-toggle": "collapse",
                  href: `#card-body-${e}`,
                  type: "button",
                  "aria-expanded": U,
                  "aria-controls": `card-body-${e}`,
                  onClick: (C) => a(C, e),
                  children: [
                    (b = r.content) != null && b.icon ? /* @__PURE__ */ H.jsxs("span", { className: "accordion-icon", children: [
                      /* @__PURE__ */ H.jsx(
                        "i",
                        {
                          className: `${(f = r.content.icon) == null ? void 0 : f[0]} fa-${(k = r.content.icon) == null ? void 0 : k[1]} me-2`
                        }
                      ),
                      r.content.header
                    ] }) : (A = r.content) == null ? void 0 : A.header,
                    /* @__PURE__ */ H.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              )
            }
          ) }) }),
          ((O = r.content) == null ? void 0 : O.body) && /* @__PURE__ */ H.jsx(
            "div",
            {
              "data-bs-parent": `#${t}`,
              id: `card-body-${e}`,
              className: ot("collapse", { show: U }),
              children: /* @__PURE__ */ H.jsx(
                "div",
                {
                  className: "accordion-body",
                  dangerouslySetInnerHTML: Hr(
                    r.content.body
                  )
                }
              )
            }
          )
        ]
      }
    );
  }
);
wl.propTypes = {
  id: l.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: vl,
  parentId: l.string,
  openCard: l.number,
  onClick: l.func,
  gaData: l.object
};
const id = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, Qi = ({ cards: e, openedCard: t }) => {
  const [r, n] = ct(t), a = `accordion-${cl()}`, s = Wr(
    /** @type { HTMLDivElement[]} */
    []
  ), p = (m, b) => {
    if (m.preventDefault(), r !== b) {
      const f = s.current[r - 1], k = f == null ? void 0 : f.lastElementChild;
      Ju(k), n(b);
    } else
      n(null);
  };
  return /* @__PURE__ */ H.jsx("div", { className: "accordion", id: a, children: e == null ? void 0 : e.map(
    (m, b) => m.content.body && m.content.header && /* @__PURE__ */ H.jsx(
      wl,
      {
        ref: (f) => {
          s.current[b] = f;
        },
        id: b + 1,
        parentId: a,
        item: m,
        openCard: r,
        onClick: p,
        gaData: id
      },
      b + 1
    )
  ) });
};
Qi.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: l.arrayOf(vl).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: l.number
};
const ls = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Tr = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  block: a,
  color: s = "gray",
  disabled: p,
  element: m = "button",
  href: b,
  icon: f,
  innerRef: k,
  onClick: A,
  size: O = "default",
  variant: U,
  classes: _,
  target: C = "_self",
  ...N
}) => {
  if (U) {
    const G = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, z = ot("btn", G[U], {
      [`btn-${G[U]}-${s}`]: !0,
      "btn-medium": O === "medium",
      "btn-small": O === "small",
      "btn-large": O === "large" || O === "default",
      disabled: p
    });
    let w = m;
    return b && m === "button" && (w = "a"), /* @__PURE__ */ H.jsx(
      Rr,
      {
        gaData: {
          ...ls,
          section: t,
          ...r,
          text: e
        },
        children: /* @__PURE__ */ H.jsxs(
          w,
          {
            type: w === "button" && A ? "button" : void 0,
            ...N,
            className: ot(_) || z,
            href: b,
            ref: k,
            onClick: A,
            "aria-label": n,
            target: w === "a" ? C : null,
            disabled: p,
            children: [
              f && /* @__PURE__ */ H.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
              e
            ]
          }
        )
      }
    );
  }
  const L = ot("btn", {
    [`btn-${s}`]: !0,
    "btn-md": O === "small",
    "btn-sm": O === "xsmall",
    "btn-block": a,
    disabled: p
  });
  let $ = m;
  return b && m === "button" && ($ = "a"), /* @__PURE__ */ H.jsx(
    Rr,
    {
      gaData: {
        ...ls,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ H.jsxs(
        $,
        {
          type: $ === "button" && A ? "button" : void 0,
          ...N,
          className: ot(_) || L,
          href: b,
          ref: k,
          onClick: A,
          "aria-label": n,
          target: $ === "a" ? C : null,
          children: [
            f && /* @__PURE__ */ H.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Tr.propTypes = {
  /**
   * Button label
   */
  label: l.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: l.string,
  /**
   * Google Analytics event data
   */
  gaData: Ji,
  /**
    ARIA label for accessibility
  */
  ariaLabel: l.string,
  /**
    Render button as a block-button?
  */
  block: l.bool,
  /**
    Button background color
  */
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: l.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: l.oneOfType([
    l.func,
    l.string,
    l.shape({ $$typeof: l.symbol, render: l.func }),
    l.arrayOf(
      l.oneOfType([
        l.func,
        l.string,
        l.shape({ $$typeof: l.symbol, render: l.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: l.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: l.arrayOf(l.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: l.oneOfType([
    l.object,
    l.func,
    l.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: l.func,
  /**
    Button size. Legacy sizes (default, small, xsmall) or new sizes (large, medium, small) when used with variant prop.
  */
  size: l.oneOf(["default", "small", "xsmall", "large", "medium"]),
  /**
    Button style variant (borderless, outline, filled). When provided, uses new UDS button styles.
  */
  variant: l.oneOf(["borderless", "outline", "filled"]),
  /**
    Classes to add to button
  */
  classes: l.arrayOf(l.string),
  /**
   Link target type
   */
  target: l.oneOf(["_blank", "_self", "_top", "_parent"])
};
var cs = { exports: {} }, Ke = {}, us;
function od() {
  if (us) return Ke;
  us = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), U = Symbol.for("react.client.reference");
  function _(C) {
    if (typeof C == "object" && C !== null) {
      var N = C.$$typeof;
      switch (N) {
        case e:
          switch (C = C.type, C) {
            case r:
            case a:
            case n:
            case b:
            case f:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case p:
                case m:
                case A:
                case k:
                  return C;
                case s:
                  return C;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  return Ke.ContextConsumer = s, Ke.ContextProvider = p, Ke.Element = e, Ke.ForwardRef = m, Ke.Fragment = r, Ke.Lazy = A, Ke.Memo = k, Ke.Portal = t, Ke.Profiler = a, Ke.StrictMode = n, Ke.Suspense = b, Ke.SuspenseList = f, Ke.isContextConsumer = function(C) {
    return _(C) === s;
  }, Ke.isContextProvider = function(C) {
    return _(C) === p;
  }, Ke.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === e;
  }, Ke.isForwardRef = function(C) {
    return _(C) === m;
  }, Ke.isFragment = function(C) {
    return _(C) === r;
  }, Ke.isLazy = function(C) {
    return _(C) === A;
  }, Ke.isMemo = function(C) {
    return _(C) === k;
  }, Ke.isPortal = function(C) {
    return _(C) === t;
  }, Ke.isProfiler = function(C) {
    return _(C) === a;
  }, Ke.isStrictMode = function(C) {
    return _(C) === n;
  }, Ke.isSuspense = function(C) {
    return _(C) === b;
  }, Ke.isSuspenseList = function(C) {
    return _(C) === f;
  }, Ke.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === r || C === a || C === n || C === b || C === f || C === O || typeof C == "object" && C !== null && (C.$$typeof === A || C.$$typeof === k || C.$$typeof === p || C.$$typeof === s || C.$$typeof === m || C.$$typeof === U || C.getModuleId !== void 0);
  }, Ke.typeOf = _, Ke;
}
var ds;
function sd() {
  return ds || (ds = 1, cs.exports = /* @__PURE__ */ od()), cs.exports;
}
var Sl = /* @__PURE__ */ sd();
function ld(e) {
  function t(W, I, B, q, x) {
    for (var ne = 0, j = 0, le = 0, te = 0, ae, X, oe = 0, he = 0, Q, ve = Q = ae = 0, ie = 0, fe = 0, Ge = 0, me = 0, dt = B.length, Ve = dt - 1, _e, K = "", de = "", et = "", $e = "", Ue; ie < dt; ) {
      if (X = B.charCodeAt(ie), ie === Ve && j + te + le + ne !== 0 && (j !== 0 && (X = j === 47 ? 10 : 47), te = le = ne = 0, dt++, Ve++), j + te + le + ne === 0) {
        if (ie === Ve && (0 < fe && (K = K.replace(O, "")), 0 < K.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              K += B.charAt(ie);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (K = K.trim(), ae = K.charCodeAt(0), Q = 1, me = ++ie; ie < dt; ) {
              switch (X = B.charCodeAt(ie)) {
                case 123:
                  Q++;
                  break;
                case 125:
                  Q--;
                  break;
                case 47:
                  switch (X = B.charCodeAt(ie + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ve = ie + 1; ve < Ve; ++ve)
                          switch (B.charCodeAt(ve)) {
                            case 47:
                              if (X === 42 && B.charCodeAt(ve - 1) === 42 && ie + 2 !== ve) {
                                ie = ve + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                ie = ve + 1;
                                break e;
                              }
                          }
                        ie = ve;
                      }
                  }
                  break;
                case 91:
                  X++;
                case 40:
                  X++;
                case 34:
                case 39:
                  for (; ie++ < Ve && B.charCodeAt(ie) !== X; )
                    ;
              }
              if (Q === 0) break;
              ie++;
            }
            switch (Q = B.substring(me, ie), ae === 0 && (ae = (K = K.replace(A, "").trim()).charCodeAt(0)), ae) {
              case 64:
                switch (0 < fe && (K = K.replace(O, "")), X = K.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = I;
                    break;
                  default:
                    fe = Ze;
                }
                if (Q = t(I, fe, Q, X, x + 1), me = Q.length, 0 < Ee && (fe = r(Ze, K, Ge), Ue = m(3, Q, fe, I, Oe, pe, me, X, x, q), K = fe.join(""), Ue !== void 0 && (me = (Q = Ue.trim()).length) === 0 && (X = 0, Q = "")), 0 < me) switch (X) {
                  case 115:
                    K = K.replace(ee, p);
                  case 100:
                  case 109:
                  case 45:
                    Q = K + "{" + Q + "}";
                    break;
                  case 107:
                    K = K.replace($, "$1 $2"), Q = K + "{" + Q + "}", Q = we === 1 || we === 2 && s("@" + Q, 3) ? "@-webkit-" + Q + "@" + Q : "@" + Q;
                    break;
                  default:
                    Q = K + Q, q === 112 && (Q = (de += Q, ""));
                }
                else Q = "";
                break;
              default:
                Q = t(I, r(I, K, Ge), Q, q, x + 1);
            }
            et += Q, Q = Ge = fe = ve = ae = 0, K = "", X = B.charCodeAt(++ie);
            break;
          case 125:
          case 59:
            if (K = (0 < fe ? K.replace(O, "") : K).trim(), 1 < (me = K.length)) switch (ve === 0 && (ae = K.charCodeAt(0), ae === 45 || 96 < ae && 123 > ae) && (me = (K = K.replace(" ", ":")).length), 0 < Ee && (Ue = m(1, K, I, W, Oe, pe, de.length, q, x, q)) !== void 0 && (me = (K = Ue.trim()).length) === 0 && (K = "\0\0"), ae = K.charCodeAt(0), X = K.charCodeAt(1), ae) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  $e += K + B.charAt(ie);
                  break;
                }
              default:
                K.charCodeAt(me - 1) !== 58 && (de += a(K, ae, X, K.charCodeAt(2)));
            }
            Ge = fe = ve = ae = 0, K = "", X = B.charCodeAt(++ie);
        }
      }
      switch (X) {
        case 13:
        case 10:
          j === 47 ? j = 0 : 1 + ae === 0 && q !== 107 && 0 < K.length && (fe = 1, K += "\0"), 0 < Ee * qe && m(0, K, I, W, Oe, pe, de.length, q, x, q), pe = 1, Oe++;
          break;
        case 59:
        case 125:
          if (j + te + le + ne === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, _e = B.charAt(ie), X) {
            case 9:
            case 32:
              if (te + ne + j === 0) switch (oe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  _e = "";
                  break;
                default:
                  X !== 32 && (_e = " ");
              }
              break;
            case 0:
              _e = "\\0";
              break;
            case 12:
              _e = "\\f";
              break;
            case 11:
              _e = "\\v";
              break;
            case 38:
              te + j + ne === 0 && (fe = Ge = 1, _e = "\f" + _e);
              break;
            case 108:
              if (te + j + ne + Ae === 0 && 0 < ve) switch (ie - ve) {
                case 2:
                  oe === 112 && B.charCodeAt(ie - 3) === 58 && (Ae = oe);
                case 8:
                  he === 111 && (Ae = he);
              }
              break;
            case 58:
              te + j + ne === 0 && (ve = ie);
              break;
            case 44:
              j + le + te + ne === 0 && (fe = 1, _e += "\r");
              break;
            case 34:
            case 39:
              j === 0 && (te = te === X ? 0 : te === 0 ? X : te);
              break;
            case 91:
              te + j + le === 0 && ne++;
              break;
            case 93:
              te + j + le === 0 && ne--;
              break;
            case 41:
              te + j + ne === 0 && le--;
              break;
            case 40:
              if (te + j + ne === 0) {
                if (ae === 0) switch (2 * oe + 3 * he) {
                  case 533:
                    break;
                  default:
                    ae = 1;
                }
                le++;
              }
              break;
            case 64:
              j + le + te + ne + ve + Q === 0 && (Q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + ne + le)) switch (j) {
                case 0:
                  switch (2 * X + 3 * B.charCodeAt(ie + 1)) {
                    case 235:
                      j = 47;
                      break;
                    case 220:
                      me = ie, j = 42;
                  }
                  break;
                case 42:
                  X === 47 && oe === 42 && me + 2 !== ie && (B.charCodeAt(me + 2) === 33 && (de += B.substring(me, ie + 1)), _e = "", j = 0);
              }
          }
          j === 0 && (K += _e);
      }
      he = oe, oe = X, ie++;
    }
    if (me = de.length, 0 < me) {
      if (fe = I, 0 < Ee && (Ue = m(2, de, fe, W, Oe, pe, me, q, x, q), Ue !== void 0 && (de = Ue).length === 0)) return $e + de + et;
      if (de = fe.join(",") + "{" + de + "}", we * Ae !== 0) {
        switch (we !== 2 || s(de, 2) || (Ae = 0), Ae) {
          case 111:
            de = de.replace(z, ":-moz-$1") + de;
            break;
          case 112:
            de = de.replace(G, "::-webkit-input-$1") + de.replace(G, "::-moz-$1") + de.replace(G, ":-ms-input-$1") + de;
        }
        Ae = 0;
      }
    }
    return $e + de + et;
  }
  function r(W, I, B) {
    var q = I.trim().split(N);
    I = q;
    var x = q.length, ne = W.length;
    switch (ne) {
      case 0:
      case 1:
        var j = 0;
        for (W = ne === 0 ? "" : W[0] + " "; j < x; ++j)
          I[j] = n(W, I[j], B).trim();
        break;
      default:
        var le = j = 0;
        for (I = []; j < x; ++j)
          for (var te = 0; te < ne; ++te)
            I[le++] = n(W[te] + " ", q[j], B).trim();
    }
    return I;
  }
  function n(W, I, B) {
    var q = I.charCodeAt(0);
    switch (33 > q && (q = (I = I.trim()).charCodeAt(0)), q) {
      case 38:
        return I.replace(L, "$1" + W.trim());
      case 58:
        return W.trim() + I.replace(L, "$1" + W.trim());
      default:
        if (0 < 1 * B && 0 < I.indexOf("\f")) return I.replace(L, (W.charCodeAt(0) === 58 ? "" : "$1") + W.trim());
    }
    return W + I;
  }
  function a(W, I, B, q) {
    var x = W + ";", ne = 2 * I + 3 * B + 4 * q;
    if (ne === 944) {
      W = x.indexOf(":", 9) + 1;
      var j = x.substring(W, x.length - 1).trim();
      return j = x.substring(0, W).trim() + j + ";", we === 1 || we === 2 && s(j, 1) ? "-webkit-" + j + j : j;
    }
    if (we === 0 || we === 2 && !s(x, 1)) return x;
    switch (ne) {
      case 1015:
        return x.charCodeAt(10) === 97 ? "-webkit-" + x + x : x;
      case 951:
        return x.charCodeAt(3) === 116 ? "-webkit-" + x + x : x;
      case 963:
        return x.charCodeAt(5) === 110 ? "-webkit-" + x + x : x;
      case 1009:
        if (x.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + x + x;
      case 978:
        return "-webkit-" + x + "-moz-" + x + x;
      case 1019:
      case 983:
        return "-webkit-" + x + "-moz-" + x + "-ms-" + x + x;
      case 883:
        if (x.charCodeAt(8) === 45) return "-webkit-" + x + x;
        if (0 < x.indexOf("image-set(", 11)) return x.replace(se, "$1-webkit-$2") + x;
        break;
      case 932:
        if (x.charCodeAt(4) === 45) switch (x.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + x.replace("-grow", "") + "-webkit-" + x + "-ms-" + x.replace("grow", "positive") + x;
          case 115:
            return "-webkit-" + x + "-ms-" + x.replace("shrink", "negative") + x;
          case 98:
            return "-webkit-" + x + "-ms-" + x.replace("basis", "preferred-size") + x;
        }
        return "-webkit-" + x + "-ms-" + x + x;
      case 964:
        return "-webkit-" + x + "-ms-flex-" + x + x;
      case 1023:
        if (x.charCodeAt(8) !== 99) break;
        return j = x.substring(x.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + j + "-webkit-" + x + "-ms-flex-pack" + j + x;
      case 1005:
        return _.test(x) ? x.replace(U, ":-webkit-") + x.replace(U, ":-moz-") + x : x;
      case 1e3:
        switch (j = x.substring(13).trim(), I = j.indexOf("-") + 1, j.charCodeAt(0) + j.charCodeAt(I)) {
          case 226:
            j = x.replace(w, "tb");
            break;
          case 232:
            j = x.replace(w, "tb-rl");
            break;
          case 220:
            j = x.replace(w, "lr");
            break;
          default:
            return x;
        }
        return "-webkit-" + x + "-ms-" + j + x;
      case 1017:
        if (x.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (I = (x = W).length - 10, j = (x.charCodeAt(I) === 33 ? x.substring(0, I) : x).substring(W.indexOf(":", 7) + 1).trim(), ne = j.charCodeAt(0) + (j.charCodeAt(7) | 0)) {
          case 203:
            if (111 > j.charCodeAt(8)) break;
          case 115:
            x = x.replace(j, "-webkit-" + j) + ";" + x;
            break;
          case 207:
          case 102:
            x = x.replace(j, "-webkit-" + (102 < ne ? "inline-" : "") + "box") + ";" + x.replace(j, "-webkit-" + j) + ";" + x.replace(j, "-ms-" + j + "box") + ";" + x;
        }
        return x + ";";
      case 938:
        if (x.charCodeAt(5) === 45) switch (x.charCodeAt(6)) {
          case 105:
            return j = x.replace("-items", ""), "-webkit-" + x + "-webkit-box-" + j + "-ms-flex-" + j + x;
          case 115:
            return "-webkit-" + x + "-ms-flex-item-" + x.replace(xe, "") + x;
          default:
            return "-webkit-" + x + "-ms-flex-line-pack" + x.replace("align-content", "").replace(xe, "") + x;
        }
        break;
      case 973:
      case 989:
        if (x.charCodeAt(3) !== 45 || x.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Me.test(W) === !0) return (j = W.substring(W.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(W.replace("stretch", "fill-available"), I, B, q).replace(":fill-available", ":stretch") : x.replace(j, "-webkit-" + j) + x.replace(j, "-moz-" + j.replace("fill-", "")) + x;
        break;
      case 962:
        if (x = "-webkit-" + x + (x.charCodeAt(5) === 102 ? "-ms-" + x : "") + x, B + q === 211 && x.charCodeAt(13) === 105 && 0 < x.indexOf("transform", 10)) return x.substring(0, x.indexOf(";", 27) + 1).replace(C, "$1-webkit-$2") + x;
    }
    return x;
  }
  function s(W, I) {
    var B = W.indexOf(I === 1 ? ":" : "{"), q = W.substring(0, I !== 3 ? B : 10);
    return B = W.substring(B + 1, W.length - 1), Fe(I !== 2 ? q : q.replace(Re, "$1"), B, I);
  }
  function p(W, I) {
    var B = a(I, I.charCodeAt(0), I.charCodeAt(1), I.charCodeAt(2));
    return B !== I + ";" ? B.replace(ue, " or ($1)").substring(4) : "(" + I + ")";
  }
  function m(W, I, B, q, x, ne, j, le, te, ae) {
    for (var X = 0, oe = I, he; X < Ee; ++X)
      switch (he = je[X].call(k, W, oe, B, q, x, ne, j, le, te, ae)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          oe = he;
      }
    if (oe !== I) return oe;
  }
  function b(W) {
    switch (W) {
      case void 0:
      case null:
        Ee = je.length = 0;
        break;
      default:
        if (typeof W == "function") je[Ee++] = W;
        else if (typeof W == "object") for (var I = 0, B = W.length; I < B; ++I)
          b(W[I]);
        else qe = !!W | 0;
    }
    return b;
  }
  function f(W) {
    return W = W.prefix, W !== void 0 && (Fe = null, W ? typeof W != "function" ? we = 1 : (we = 2, Fe = W) : we = 0), f;
  }
  function k(W, I) {
    var B = W;
    if (33 > B.charCodeAt(0) && (B = B.trim()), ce = B, B = [ce], 0 < Ee) {
      var q = m(-1, I, B, B, Oe, pe, 0, 0, 0, 0);
      q !== void 0 && typeof q == "string" && (I = q);
    }
    var x = t(Ze, B, I, 0, 0);
    return 0 < Ee && (q = m(-2, x, B, B, Oe, pe, x.length, 0, 0, 0), q !== void 0 && (x = q)), ce = "", Ae = 0, pe = Oe = 1, x;
  }
  var A = /^\0+/g, O = /[\0\r\f]/g, U = /: */g, _ = /zoo|gra/, C = /([,: ])(transform)/g, N = /,\r+?/g, L = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, z = /:(read-only)/g, w = /[svh]\w+-[tblr]{2}/, ee = /\(\s*(.*)\s*\)/g, ue = /([\s\S]*?);/g, xe = /-self|flex-/g, Re = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Me = /stretch|:\s*\w+\-(?:conte|avail)/, se = /([^-])(image-set\()/, pe = 1, Oe = 1, Ae = 0, we = 1, Ze = [], je = [], Ee = 0, Fe = null, qe = 0, ce = "";
  return k.use = b, k.set = f, e !== void 0 && f(e), k;
}
var cd = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function ud(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var dd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ps = /* @__PURE__ */ ud(
  function(e) {
    return dd.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), fs = { exports: {} }, Be = {}, ms;
function pd() {
  if (ms) return Be;
  ms = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, k = e ? Symbol.for("react.forward_ref") : 60112, A = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, U = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function G(w) {
    if (typeof w == "object" && w !== null) {
      var ee = w.$$typeof;
      switch (ee) {
        case t:
          switch (w = w.type, w) {
            case b:
            case f:
            case n:
            case s:
            case a:
            case A:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case m:
                case k:
                case _:
                case U:
                case p:
                  return w;
                default:
                  return ee;
              }
          }
        case r:
          return ee;
      }
    }
  }
  function z(w) {
    return G(w) === f;
  }
  return Be.AsyncMode = b, Be.ConcurrentMode = f, Be.ContextConsumer = m, Be.ContextProvider = p, Be.Element = t, Be.ForwardRef = k, Be.Fragment = n, Be.Lazy = _, Be.Memo = U, Be.Portal = r, Be.Profiler = s, Be.StrictMode = a, Be.Suspense = A, Be.isAsyncMode = function(w) {
    return z(w) || G(w) === b;
  }, Be.isConcurrentMode = z, Be.isContextConsumer = function(w) {
    return G(w) === m;
  }, Be.isContextProvider = function(w) {
    return G(w) === p;
  }, Be.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Be.isForwardRef = function(w) {
    return G(w) === k;
  }, Be.isFragment = function(w) {
    return G(w) === n;
  }, Be.isLazy = function(w) {
    return G(w) === _;
  }, Be.isMemo = function(w) {
    return G(w) === U;
  }, Be.isPortal = function(w) {
    return G(w) === r;
  }, Be.isProfiler = function(w) {
    return G(w) === s;
  }, Be.isStrictMode = function(w) {
    return G(w) === a;
  }, Be.isSuspense = function(w) {
    return G(w) === A;
  }, Be.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === f || w === s || w === a || w === A || w === O || typeof w == "object" && w !== null && (w.$$typeof === _ || w.$$typeof === U || w.$$typeof === p || w.$$typeof === m || w.$$typeof === k || w.$$typeof === N || w.$$typeof === L || w.$$typeof === $ || w.$$typeof === C);
  }, Be.typeOf = G, Be;
}
var hs;
function fd() {
  return hs || (hs = 1, fs.exports = pd()), fs.exports;
}
var ni, gs;
function md() {
  if (gs) return ni;
  gs = 1;
  var e = fd(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, a = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[e.ForwardRef] = n, s[e.Memo] = a;
  function p(_) {
    return e.isMemo(_) ? a : s[_.$$typeof] || t;
  }
  var m = Object.defineProperty, b = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, k = Object.getOwnPropertyDescriptor, A = Object.getPrototypeOf, O = Object.prototype;
  function U(_, C, N) {
    if (typeof C != "string") {
      if (O) {
        var L = A(C);
        L && L !== O && U(_, L, N);
      }
      var $ = b(C);
      f && ($ = $.concat(f(C)));
      for (var G = p(_), z = p(C), w = 0; w < $.length; ++w) {
        var ee = $[w];
        if (!r[ee] && !(N && N[ee]) && !(z && z[ee]) && !(G && G[ee])) {
          var ue = k(C, ee);
          try {
            m(_, ee, ue);
          } catch {
          }
        }
      }
    }
    return _;
  }
  return ni = U, ni;
}
var hd = md();
const gd = /* @__PURE__ */ Xi(hd);
var St = { env: { NODE_ENV: "production" } };
function Sr() {
  return (Sr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var bs = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Oi = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Sl.typeOf(e);
}, ka = Object.freeze([]), Or = Object.freeze({});
function Rn(e) {
  return typeof e == "function";
}
function ys(e) {
  return e.displayName || e.name || "Component";
}
function eo(e) {
  return e && typeof e.styledComponentId == "string";
}
var Qr = typeof St < "u" && St.env !== void 0 && (St.env.REACT_APP_SC_ATTR || St.env.SC_ATTR) || "data-styled", to = typeof window < "u" && "HTMLElement" in window, bd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof St < "u" && St.env !== void 0 && (St.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && St.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? St.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && St.env.REACT_APP_SC_DISABLE_SPEEDY : St.env.SC_DISABLE_SPEEDY !== void 0 && St.env.SC_DISABLE_SPEEDY !== "" ? St.env.SC_DISABLE_SPEEDY !== "false" && St.env.SC_DISABLE_SPEEDY : St.env.NODE_ENV !== "production"));
function Dn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var yd = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, p = s; r >= p; ) (p <<= 1) < 0 && Dn(16, "" + r);
      this.groupSizes = new Uint32Array(p), this.groupSizes.set(a), this.length = p;
      for (var m = s; m < p; m++) this.groupSizes[m] = 0;
    }
    for (var b = this.indexOfGroup(r + 1), f = 0, k = n.length; f < k; f++) this.tag.insertRule(b, n[f]) && (this.groupSizes[r]++, b++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var p = a; p < s; p++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), p = s + a, m = s; m < p; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), ba = /* @__PURE__ */ new Map(), Ta = /* @__PURE__ */ new Map(), On = 1, oa = function(e) {
  if (ba.has(e)) return ba.get(e);
  for (; Ta.has(On); ) On++;
  var t = On++;
  return ba.set(e, t), Ta.set(t, e), t;
}, xd = function(e) {
  return Ta.get(e);
}, vd = function(e, t) {
  t >= On && (On = t + 1), ba.set(e, t), Ta.set(t, e);
}, wd = "style[" + Qr + '][data-styled-version="5.3.11"]', Sd = new RegExp("^" + Qr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), kd = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, p = a.length; s < p; s++) (n = a[s]) && e.registerName(t, n);
}, Td = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var p = r[a].trim();
    if (p) {
      var m = p.match(Sd);
      if (m) {
        var b = 0 | parseInt(m[1], 10), f = m[2];
        b !== 0 && (vd(f, b), kd(e, f, m[3]), e.getTag().insertRules(b, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, Cd = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, kl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(m) {
    for (var b = m.childNodes, f = b.length; f >= 0; f--) {
      var k = b[f];
      if (k && k.nodeType === 1 && k.hasAttribute(Qr)) return k;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Qr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = Cd();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, Ed = function() {
  function e(r) {
    var n = this.element = kl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, p = 0, m = s.length; p < m; p++) {
        var b = s[p];
        if (b.ownerNode === a) return b;
      }
      Dn(17);
    }(n), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Ad = function() {
  function e(r) {
    var n = this.element = kl(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(a, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), _d = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), xs = to, Od = { isServer: !to, useCSSOMInjection: !bd }, Tl = function() {
  function e(r, n, a) {
    r === void 0 && (r = Or), n === void 0 && (n = {}), this.options = Sr({}, Od, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && to && xs && (xs = !1, function(s) {
      for (var p = document.querySelectorAll(wd), m = 0, b = p.length; m < b; m++) {
        var f = p[m];
        f && f.getAttribute(Qr) !== "active" && (Td(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return oa(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Sr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = a ? new _d(p) : s ? new Ed(p) : new Ad(p), new yd(r)));
    var r, n, a, s, p;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (oa(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(oa(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(oa(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", p = 0; p < a; p++) {
        var m = xd(p);
        if (m !== void 0) {
          var b = r.names.get(m), f = n.getGroup(p);
          if (b && f && b.size) {
            var k = Qr + ".g" + p + '[id="' + m + '"]', A = "";
            b !== void 0 && b.forEach(function(O) {
              O.length > 0 && (A += O + ",");
            }), s += "" + f + k + '{content:"' + A + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), jd = /(a)(d)/gi, vs = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ji(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = vs(t % 52) + r;
  return (vs(t % 52) + r).replace(jd, "$1-$2");
}
var Jr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Cl = function(e) {
  return Jr(5381, e);
};
function Nd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Rn(r) && !eo(r)) return !1;
  }
  return !0;
}
var Rd = Cl("5.3.11"), Id = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Nd(t), this.componentId = r, this.baseHash = Jr(Rd, r), this.baseStyle = n, Tl.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = en(this.rules, t, r, n).join(""), m = ji(Jr(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(a, m)) {
        var b = n(p, "." + m, void 0, a);
        r.insertRules(a, m, b);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, k = Jr(this.baseHash, n.hash), A = "", O = 0; O < f; O++) {
        var U = this.rules[O];
        if (typeof U == "string") A += U;
        else if (U) {
          var _ = en(U, t, r, n), C = Array.isArray(_) ? _.join("") : _;
          k = Jr(k, C + O), A += C;
        }
      }
      if (A) {
        var N = ji(k >>> 0);
        if (!r.hasNameForId(a, N)) {
          var L = n(A, "." + N, void 0, a);
          r.insertRules(a, N, L);
        }
        s.push(N);
      }
    }
    return s.join(" ");
  }, e;
}(), Pd = /^\s*\/\/.*$/gm, Dd = [":", "[", ".", "#"];
function Ld(e) {
  var t, r, n, a, s = Or, p = s.options, m = p === void 0 ? Or : p, b = s.plugins, f = b === void 0 ? ka : b, k = new ld(m), A = [], O = /* @__PURE__ */ function(C) {
    function N(L) {
      if (L) try {
        C(L + "}");
      } catch {
      }
    }
    return function(L, $, G, z, w, ee, ue, xe, Re, Me) {
      switch (L) {
        case 1:
          if (Re === 0 && $.charCodeAt(0) === 64) return C($ + ";"), "";
          break;
        case 2:
          if (xe === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (xe) {
            case 102:
            case 112:
              return C(G[0] + $), "";
            default:
              return $ + (Me === 0 ? "/*|*/" : "");
          }
        case -2:
          $.split("/*|*/}").forEach(N);
      }
    };
  }(function(C) {
    A.push(C);
  }), U = function(C, N, L) {
    return N === 0 && Dd.indexOf(L[r.length]) !== -1 || L.match(a) ? C : "." + t;
  };
  function _(C, N, L, $) {
    $ === void 0 && ($ = "&");
    var G = C.replace(Pd, ""), z = N && L ? L + " " + N + " { " + G + " }" : G;
    return t = $, r = N, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), k(L || !N ? "" : N, z);
  }
  return k.use([].concat(f, [function(C, N, L) {
    C === 2 && L.length && L[0].lastIndexOf(r) > 0 && (L[0] = L[0].replace(n, U));
  }, O, function(C) {
    if (C === -2) {
      var N = A;
      return A = [], N;
    }
  }])), _.hash = f.length ? f.reduce(function(C, N) {
    return N.name || Dn(15), Jr(C, N.name);
  }, 5381).toString() : "", _;
}
var El = ft.createContext();
El.Consumer;
var Al = ft.createContext(), Md = (Al.Consumer, new Tl()), Ni = Ld();
function Fd() {
  return Vt(El) || Md;
}
function $d() {
  return Vt(Al) || Ni;
}
var Ud = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = Ni);
      var p = n.name + s.hash;
      a.hasNameForId(n.id, p) || a.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return Dn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ni), this.name + t.hash;
  }, e;
}(), zd = /([A-Z])/, Hd = /([A-Z])/g, qd = /^ms-/, Bd = function(e) {
  return "-" + e.toLowerCase();
};
function ws(e) {
  return zd.test(e) ? e.replace(Hd, Bd).replace(qd, "-ms-") : e;
}
var Ss = function(e) {
  return e == null || e === !1 || e === "";
};
function en(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], p = 0, m = e.length; p < m; p += 1) (a = en(e[p], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (Ss(e)) return "";
  if (eo(e)) return "." + e.styledComponentId;
  if (Rn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return en(b, t, r, n);
  }
  var f;
  return e instanceof Ud ? r ? (e.inject(r, n), e.getName(n)) : e : Oi(e) ? function k(A, O) {
    var U, _, C = [];
    for (var N in A) A.hasOwnProperty(N) && !Ss(A[N]) && (Array.isArray(A[N]) && A[N].isCss || Rn(A[N]) ? C.push(ws(N) + ":", A[N], ";") : Oi(A[N]) ? C.push.apply(C, k(A[N], N)) : C.push(ws(N) + ": " + (U = N, (_ = A[N]) == null || typeof _ == "boolean" || _ === "" ? "" : typeof _ != "number" || _ === 0 || U in cd || U.startsWith("--") ? String(_).trim() : _ + "px") + ";"));
    return O ? [O + " {"].concat(C, ["}"]) : C;
  }(e) : e.toString();
}
var ks = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Wd(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Rn(e) || Oi(e) ? ks(en(bs(ka, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ks(en(bs(e, r)));
}
var Gd = function(e, t, r) {
  return r === void 0 && (r = Or), e.theme !== r.theme && e.theme || t || r.theme;
}, Yd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vd = /(^-|-$)/g;
function ai(e) {
  return e.replace(Yd, "-").replace(Vd, "");
}
var Kd = function(e) {
  return ji(Cl(e) >>> 0);
};
function sa(e) {
  return typeof e == "string" && St.env.NODE_ENV === "production";
}
var Ri = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Xd = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Jd(e, t, r) {
  var n = e[r];
  Ri(t) && Ri(n) ? _l(n, t) : e[r] = t;
}
function _l(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var p = s[a];
    if (Ri(p)) for (var m in p) Xd(m) && Jd(e, p[m], m);
  }
  return e;
}
var Ol = ft.createContext();
Ol.Consumer;
var ii = {};
function jl(e, t, r) {
  var n = eo(e), a = !sa(e), s = t.attrs, p = s === void 0 ? ka : s, m = t.componentId, b = m === void 0 ? function($, G) {
    var z = typeof $ != "string" ? "sc" : ai($);
    ii[z] = (ii[z] || 0) + 1;
    var w = z + "-" + Kd("5.3.11" + z + ii[z]);
    return G ? G + "-" + w : w;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, k = f === void 0 ? function($) {
    return sa($) ? "styled." + $ : "Styled(" + ys($) + ")";
  }(e) : f, A = t.displayName && t.componentId ? ai(t.displayName) + "-" + t.componentId : t.componentId || b, O = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, U = t.shouldForwardProp;
  n && e.shouldForwardProp && (U = t.shouldForwardProp ? function($, G, z) {
    return e.shouldForwardProp($, G, z) && t.shouldForwardProp($, G, z);
  } : e.shouldForwardProp);
  var _, C = new Id(r, A, n ? e.componentStyle : void 0), N = C.isStatic && p.length === 0, L = function($, G) {
    return function(z, w, ee, ue) {
      var xe = z.attrs, Re = z.componentStyle, Me = z.defaultProps, se = z.foldedComponentIds, pe = z.shouldForwardProp, Oe = z.styledComponentId, Ae = z.target, we = function(q, x, ne) {
        q === void 0 && (q = Or);
        var j = Sr({}, x, { theme: q }), le = {};
        return ne.forEach(function(te) {
          var ae, X, oe, he = te;
          for (ae in Rn(he) && (he = he(j)), he) j[ae] = le[ae] = ae === "className" ? (X = le[ae], oe = he[ae], X && oe ? X + " " + oe : X || oe) : he[ae];
        }), [j, le];
      }(Gd(w, Vt(Ol), Me) || Or, w, xe), Ze = we[0], je = we[1], Ee = function(q, x, ne, j) {
        var le = Fd(), te = $d(), ae = x ? q.generateAndInjectStyles(Or, le, te) : q.generateAndInjectStyles(ne, le, te);
        return ae;
      }(Re, ue, Ze), Fe = ee, qe = je.$as || w.$as || je.as || w.as || Ae, ce = sa(qe), W = je !== w ? Sr({}, w, {}, je) : w, I = {};
      for (var B in W) B[0] !== "$" && B !== "as" && (B === "forwardedAs" ? I.as = W[B] : (pe ? pe(B, ps, qe) : !ce || ps(B)) && (I[B] = W[B]));
      return w.style && je.style !== w.style && (I.style = Sr({}, w.style, {}, je.style)), I.className = Array.prototype.concat(se, Oe, Ee !== Oe ? Ee : null, w.className, je.className).filter(Boolean).join(" "), I.ref = Fe, ul(qe, I);
    }(_, $, G, N);
  };
  return L.displayName = k, (_ = ft.forwardRef(L)).attrs = O, _.componentStyle = C, _.displayName = k, _.shouldForwardProp = U, _.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ka, _.styledComponentId = A, _.target = n ? e.target : e, _.withComponent = function($) {
    var G = t.componentId, z = function(ee, ue) {
      if (ee == null) return {};
      var xe, Re, Me = {}, se = Object.keys(ee);
      for (Re = 0; Re < se.length; Re++) xe = se[Re], ue.indexOf(xe) >= 0 || (Me[xe] = ee[xe]);
      return Me;
    }(t, ["componentId"]), w = G && G + "-" + (sa($) ? $ : ai(ys($)));
    return jl($, Sr({}, z, { attrs: O, componentId: w }), r);
  }, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = n ? _l({}, e.defaultProps, $) : $;
  } }), Object.defineProperty(_, "toString", { value: function() {
    return "." + _.styledComponentId;
  } }), a && gd(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), _;
}
var sr = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Or), !Sl.isValidElementType(n)) return Dn(1, String(n));
    var s = function() {
      return r(n, a, Wd.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, Sr({}, a, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, Sr({}, a, { attrs: Array.prototype.concat(a.attrs, p).filter(Boolean) }));
    }, s;
  }(jl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  sr[e] = sr(e);
});
const Zd = sr.div`
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    &.with-header {
      top: ${({ requiresAltMenuSpacing: e }) => e ? "112px" : "142px"};
      @media (max-width: 992px) {
        top: 110px;
      }
    }
  }
  .mobile-menu-toggler {
    background-color: transparent;
    border: none;
    cursor: default;
    h4,
    h2 {
      align-items: center;
    }
    i {
      transition: all 0.3s;
    }
  }
  .show-menu i {
    transform: rotate(-180deg);
  }
  .nav-link {
    border: none;
    background-color: #ffffff;
    i {
      width: 2rem !important;
      text-align: center !important;
    }
  }
`, ya = "On This Page", Qd = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: ya
}, Nl = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: r = !1
}) => {
  const { isReact: n, isBootstrap: a } = Zi(), s = Wr(null), p = Tu("(max-width: 991px)"), [m, b] = ct({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), f = p ? 110 : 142, k = () => {
    var L;
    const $ = {}, G = window.scrollY, z = (L = document.getElementById(t)) == null ? void 0 : L.getBoundingClientRect().top, w = 103;
    z >= 0 && ($.sticky = !1, $.activeContainer = ""), G > s.current.getBoundingClientRect().top && ($.sticky = !0);
    const ee = m.hasHeader ? f + w : w;
    e == null || e.forEach(({ targetIdName: ue }) => {
      const xe = document.getElementById(ue), Re = (xe == null ? void 0 : xe.getBoundingClientRect().top) - ee, Me = (xe == null ? void 0 : xe.getBoundingClientRect().bottom) - ee;
      Re < 0 && Me > 0 && ($.activeContainer = ue);
    }), b((ue) => ({
      ...ue,
      ...$
    }));
  }, A = () => {
    Ku(k, 150), Xu(k, 150);
  }, O = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), U = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function _(L = null) {
    if (L === null) return m.containerClass;
    const $ = Object.values(L.classList).filter(
      (G) => [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid"
      ].includes(G)
    );
    return $.length > 0 ? $.join(" ") : _(L.parentElement);
  }
  At(() => {
    const L = document.getElementById(t) || null, $ = {
      hasHeader: O(),
      hasAltMenuSpacing: U(),
      containerClass: _(L)
    };
    b((G) => ({
      ...G,
      ...$
    }));
  }, []), At(() => (window == null || window.addEventListener("scroll", A), () => window.removeEventListener("scroll", A)), [m.hasHeader]);
  const C = (L) => {
    var $, G;
    const z = window.scrollY - (m.hasHeader ? f + 100 : 100), w = p ? 410 : 90;
    let ee = (($ = document.getElementById(L)) == null ? void 0 : $.getBoundingClientRect().top) + z;
    s.current.classList.contains("sticky") || (ee -= w), r && ((G = Vu(`#${L}`)) == null || G.focus()), window.scrollTo({ top: ee, behavior: "smooth" });
  }, N = () => {
    b((L) => ({
      ...L,
      showMenu: !L.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ H.jsx(
    Zd,
    {
      requiresAltMenuSpacing: m.hasAltMenuSpacing,
      ref: s,
      id: "uds-anchor-menu",
      className: ot(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: m.sticky,
          "with-header": m.hasHeader
        }
      ),
      style: m.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ H.jsxs("div", { className: `${m.containerClass} uds-anchor-menu-wrapper`, children: [
        p ? /* @__PURE__ */ H.jsx(
          Rr,
          {
            gaData: {
              ...Qd,
              action: m.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ H.jsx(
              "button",
              {
                className: ot("mobile-menu-toggler", {
                  "show-menu": m.showMenu
                }),
                type: "button",
                onClick: N,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseAnchorMenu",
                "aria-controls": "collapseAnchorMenu",
                children: /* @__PURE__ */ H.jsxs("h2", { children: [
                  ya,
                  ":",
                  /* @__PURE__ */ H.jsx("i", { className: "fas fa-chevron-down" })
                ] })
              }
            )
          }
        ) : /* @__PURE__ */ H.jsxs("h2", { children: [
          ya,
          ":"
        ] }),
        /* @__PURE__ */ H.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: ot("card", "card-body", "collapse", {
              show: m.showMenu
            }),
            children: /* @__PURE__ */ H.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": ya,
                children: e == null ? void 0 : e.map((L) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ H.jsx(
                    Tr,
                    {
                      "data-testid": `anchor-item-${L.targetIdName}`,
                      classes: ot("nav-link", {
                        active: m.activeContainer === L.targetIdName
                      }).split(" "),
                      ariaLabel: L.text,
                      label: L.text,
                      icon: L.icon,
                      onClick: n && (() => C(L.targetIdName)),
                      href: a && `#${L.targetIdName}`
                    },
                    L.targetIdName
                  )
                ))
              }
            )
          }
        )
      ] })
    }
  );
};
Nl.propTypes = {
  /**
   * Anchor menu items
   */
  items: l.arrayOf(
    l.shape({
      text: l.string.isRequired,
      targetIdName: l.string.isRequired,
      icon: l.arrayOf(l.string)
    })
  ).isRequired,
  /**
   * First next sibling element of the anchor menu
   */
  firstElementId: l.string.isRequired,
  /**
   * If true it focus the first focusable element into the section
   * If false it focus the next menu item into the nav bar
   */
  focusFirstFocusableElement: l.bool
};
function Na(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var ep = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (n[s] = a[s]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), qr = function() {
  return qr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, qr.apply(this, arguments);
}, tp = function(e, t, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(p) {
      p(s);
    });
  }
  return new (r || (r = Promise))(function(s, p) {
    function m(k) {
      try {
        f(n.next(k));
      } catch (A) {
        p(A);
      }
    }
    function b(k) {
      try {
        f(n.throw(k));
      } catch (A) {
        p(A);
      }
    }
    function f(k) {
      k.done ? s(k.value) : a(k.value).then(m, b);
    }
    f((n = n.apply(e, [])).next());
  });
}, rp = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, a, s, p;
  return p = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
    return this;
  }), p;
  function m(f) {
    return function(k) {
      return b([f, k]);
    };
  }
  function b(f) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (n = 1, a && (s = f[0] & 2 ? a.return : f[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, f[1])).done) return s;
      switch (a = 0, s && (f = [f[0] & 2, s.value]), f[0]) {
        case 0:
        case 1:
          s = f;
          break;
        case 4:
          return r.label++, { value: f[1], done: !1 };
        case 5:
          r.label++, a = f[1], f = [0];
          continue;
        case 7:
          f = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (f[0] === 6 || f[0] === 2)) {
            r = 0;
            continue;
          }
          if (f[0] === 3 && (!s || f[1] > s[0] && f[1] < s[3])) {
            r.label = f[1];
            break;
          }
          if (f[0] === 6 && r.label < s[1]) {
            r.label = s[1], s = f;
            break;
          }
          if (s && r.label < s[2]) {
            r.label = s[2], r.ops.push(f);
            break;
          }
          s[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      f = t.call(e, r);
    } catch (k) {
      f = [6, k], a = 0;
    } finally {
      n = s = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, Rl = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, np = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, ap = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, ip = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function op(e, t, r) {
  var n = t.height, a = t.width, s = Rl(t, ["height", "width"]), p = qr({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), m = window.open(e, "", Object.keys(p).map(function(f) {
    return "".concat(f, "=").concat(p[f]);
  }).join(", "));
  if (r)
    var b = window.setInterval(function() {
      try {
        (m === null || m.closed) && (window.clearInterval(b), r(m));
      } catch (f) {
        console.error(f);
      }
    }, 1e3);
  return m;
}
var sp = (
  /** @class */
  function(e) {
    ep(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, s = a.onShareWindowClose, p = a.windowHeight, m = p === void 0 ? 400 : p, b = a.windowPosition, f = b === void 0 ? "windowCenter" : b, k = a.windowWidth, A = k === void 0 ? 550 : k, O = qr({ height: m, width: A }, f === "windowCenter" ? ap(A, m) : ip(A, m));
        op(n, O, s);
      }, r.handleClick = function(n) {
        return tp(r, void 0, void 0, function() {
          var a, s, p, m, b, f, k, A, O, U;
          return rp(this, function(_) {
            switch (_.label) {
              case 0:
                return a = this.props, s = a.beforeOnClick, p = a.disabled, m = a.networkLink, b = a.onClick, f = a.url, k = a.openShareDialogOnClick, A = a.opts, O = m(f, A), p ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? (U = s(), np(U) ? [4, U] : [3, 2]) : [3, 2]);
              case 1:
                _.sent(), _.label = 2;
              case 2:
                return k && this.openShareDialog(O), b && b(n, O), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, r;
    }
    return t.prototype.render = function() {
      var r = this.props;
      r.beforeOnClick;
      var n = r.children, a = r.className, s = r.disabled, p = r.disabledStyle, m = r.forwardedRef;
      r.networkLink;
      var b = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var f = r.resetButtonStyle, k = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var A = Rl(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), O = ot("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, a), U = qr(qr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, k), s && p);
      return ft.createElement("button", qr({}, A, { "aria-label": A["aria-label"] || b, className: O, onClick: this.handleClick, ref: m, style: U }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(pu)
), Ca = function() {
  return Ca = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Ca.apply(this, arguments);
};
function Ra(e, t, r, n) {
  function a(s, p) {
    var m = r(s), b = Ca({}, s), f = Object.keys(m);
    return f.forEach(function(k) {
      delete b[k];
    }), ft.createElement(sp, Ca({}, n, b, { forwardedRef: p, networkName: e, networkLink: t, opts: r(s) }));
  }
  return a.displayName = "ShareButton-".concat(e), Vi(a);
}
function lp(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + Na({ subject: r, body: n ? n + a + e : e });
}
Ra("email", lp, function(e) {
  return {
    subject: e.subject,
    body: e.body,
    separator: e.separator || " "
  };
}, {
  openShareDialogOnClick: !1,
  onClick: function(e, t) {
    window.location.href = t;
  }
});
var cp = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (n[s] = a[s]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), up = (
  /** @class */
  function(e) {
    cp(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function jn(e, t) {
  if (!e)
    throw new up(t);
}
function dp(e, t) {
  var r = t.quote, n = t.hashtag;
  return jn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Na({
    u: e,
    quote: r,
    hashtag: n
  });
}
Ra("facebook", dp, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function pp(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return jn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Na({ url: e, mini: "true", title: r, summary: n, source: a });
}
Ra("linkedin", pp, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function fp(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, s = a === void 0 ? [] : a, p = t.related, m = p === void 0 ? [] : p;
  return jn(e, "twitter.url"), jn(Array.isArray(s), "twitter.hashtags is not an array"), jn(Array.isArray(m), "twitter.related is not an array"), "https://twitter.com/share" + Na({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: m.length > 0 ? m.join(",") : void 0
  });
}
Ra("twitter", fp, function(e) {
  return {
    hashtags: e.hashtags,
    title: e.title,
    via: e.via,
    related: e.related
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Ii(e) {
  "@babel/helpers - typeof";
  return Ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ii(e);
}
var mp = (typeof window > "u" ? "undefined" : Ii(window)) === "object" && window.Element || function() {
};
function hp(e, t, r) {
  if (!(e[t] instanceof mp))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, hp, l.shape({
  current: l.any
})]);
l.oneOfType([l.func, l.string, l.shape({
  $$typeof: l.symbol,
  render: l.func
}), l.arrayOf(l.oneOfType([l.func, l.string, l.shape({
  $$typeof: l.symbol,
  render: l.func
})]))]);
l.string, l.node, l.string, l.object, l.string;
l.bool, l.string, l.object;
sr.div`
  &.news-container h2 {
    font-size: 48px;
  }

  &.event-container h2 {
    font-size: 40px;
  }

  &.news-container img,
  &.event-container img {
    width: 100%;
    max-width: fit-content;
  }

  &.wrapper-container h4 {
    margin-top: 0;
  }

  &.wrapper-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10%;
  }

  &.event-container.wrapper-container {
    max-width: 1500px;
  }

  &.news-container {
    background: #fff;
  }

  ol.breadcrumb {
    padding: 0;
    margin: 0;
  }

  ol.breadcrumb > li {
    margin-bottom: 0;
  }

  .article-social-media {
    margin-bottom: 24px;
  }

  .react-share__ShareButton {
    margin-right: 12px;
  }

  i.news-date {
    display: inline-block;
    margin-bottom: 24px;
  }

  .highlight-gold {
    box-shadow:
      -0.15em 0 0 #ffc627,
      0.15em 0 0 #ffc627;
    background: #ffc627;
  }

  .author {
    display: inline-block;
    margin-top: 30px;
    margin-left: -7px;
    padding: 0 6px;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .icon-bg {
    display: inline-block;
    position: relative;
    padding: 1px 3.5px;
    background-color: maroon;
    margin-right: 4px;
    border-radius: 4px;
    color: white;
    font-size: 0.65rem;
  }

  .uds-button {
    margin-top: 17px;
    padding: 0;
  }

  .author-title {
    max-width: 250px;
    margin-top: 10px;
    margin-bottom: 11px;
    font-size: 16px;
  }

  .author-contact {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  ol.breadcrumb a {
    text-decoration: none;
  }

  i.fa-calendar,
  i.fa-map-marker-alt {
    font-size: 1.17rem;
    margin-right: 8px;
  }

  .event-author {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .event-author-title {
    margin-top: 4px;
  }

  .event-author-info {
    margin-top: 24px;
  }
`;
sr.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`;
l.oneOf(["event", "news"]), l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string, l.string.isRequired, l.string, l.string, l.arrayOf(
  l.shape({
    title: l.string,
    url: l.string,
    active: l.bool
  })
), l.string, l.string, l.string, l.string, l.string, l.string;
l.oneOf(["white", "gray", "black"]), l.arrayOf(l.string), l.oneOfType([
  l.object,
  l.func,
  l.string
]), l.func, l.string, l.oneOf(["large", "small"]), l.string;
const gp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Il = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  color: a = "gray",
  disabled: s,
  element: p = "button",
  innerRef: m,
  href: b,
  onClick: f,
  ...k
}) => {
  const A = ot("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: s
  });
  let O = p;
  return b && p === "button" && (O = "a"), /* @__PURE__ */ H.jsx(
    Rr,
    {
      gaData: {
        ...gp,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ H.jsx(
        O,
        {
          type: O === "button" && f ? "button" : void 0,
          ...k,
          className: A,
          href: b,
          ref: m,
          onClick: f,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
Il.propTypes = {
  /**
    Button tag label
  */
  label: l.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: l.string,
  /**
   * Google Analytics event data
   */
  gaData: Ji,
  /**
    ARIA label for accessibility
  */
  ariaLabel: l.string,
  /**
    Button background color
  */
  color: l.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: l.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: l.oneOfType([
    l.func,
    l.string,
    l.shape({ $$typeof: l.symbol, render: l.func }),
    l.arrayOf(
      l.oneOfType([
        l.func,
        l.string,
        l.shape({ $$typeof: l.symbol, render: l.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: l.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: l.oneOfType([
    l.object,
    l.func,
    l.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: l.func
};
const Pl = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: s,
  fetchPriority: p = "auto",
  width: m,
  height: b,
  cardLink: f,
  title: k,
  caption: A,
  captionTitle: O,
  border: U,
  dropShadow: _
}) => {
  const C = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: p,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Cu(r) },
    ...s && { "data-testid": s },
    ...m && { width: m },
    ...b && { height: b }
  }, N = ot("uds-img", {
    borderless: !U,
    "uds-img-drop-shadow": _
  }), L = (G) => {
    const z = G ? `${C.className} ${G}` : C.className;
    return f ? /* @__PURE__ */ H.jsxs("a", { href: f, children: [
      /* @__PURE__ */ H.jsx("img", { ...C, className: z }),
      /* @__PURE__ */ H.jsx("span", { className: "visually-hidden", children: k })
    ] }) : /* @__PURE__ */ H.jsx("img", { ...C, className: z });
  }, $ = () => /* @__PURE__ */ H.jsx("div", { className: N, children: /* @__PURE__ */ H.jsxs("figure", { className: "figure uds-figure", children: [
    L(),
    A && /* @__PURE__ */ H.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      O && /* @__PURE__ */ H.jsx("h3", { children: O }),
      /* @__PURE__ */ H.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Hr(A)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ H.jsx(H.Fragment, { children: A ? $() : L(N) });
};
Pl.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: l.string.isRequired,
  /**
   * Image alt text
   */
  alt: l.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: l.arrayOf(l.string),
  /**
   * Image loading mode
   */
  loading: l.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: l.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: l.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: l.string,
  /**
   * Height of the image
   */
  height: l.string,
  dataTestId: l.string,
  cardLink: l.string,
  title: l.string,
  caption: l.string,
  captionTitle: l.string,
  border: l.bool,
  dropShadow: l.bool
};
const bp = sr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, yp = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), xp = (e) => !e.startsWith("https://") && !e.startsWith("http://") && yp(e) ? `mailto:${e}` : e, vp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, gt = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n,
  imageAltText: a,
  title: s,
  icon: p,
  body: m,
  eventFormat: b = "stack",
  eventLocation: f,
  eventTime: k,
  buttons: A,
  linkLabel: O,
  linkUrl: U,
  tags: _,
  showBorders: C = !0,
  cardLink: N
}) => /* @__PURE__ */ H.jsx(
  Dl,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: s,
    icon: p,
    body: m,
    eventFormat: b,
    eventLocation: f,
    eventTime: k,
    buttons: A,
    linkLabel: O,
    linkUrl: U,
    tags: _,
    showBorders: C,
    cardLink: N
  }
);
gt.propTypes = {
  /**
   * Type of card
   */
  type: l.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: l.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: l.bool,
  /**
   * Card title
   */
  title: l.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: l.arrayOf(l.string),
  /**
   * Card body content
   */
  body: l.string,
  /**
   * Event info format
   */
  eventFormat: l.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: l.string,
  /**
   * Event start time
   */
  eventTime: l.string,
  /**
   * Card header image
   */
  image: l.string,
  /**
   * Card header image alt text
   */
  imageAltText: l.string,
  /**
   * Buttons
   */
  buttons: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: l.arrayOf(l.string),
      href: l.string,
      label: l.string,
      onClick: l.func,
      size: l.oneOf(["default", "small", "xsmall"]),
      target: l.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: l.string,
  linkUrl: l.string,
  /**
   * Tags
   */
  tags: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["white", "gray", "dark"]),
      href: l.string,
      label: l.string,
      onClick: l.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: l.bool,
  /**
   * Card link
   */
  cardLink: l.string
};
const Dl = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n = "",
  imageAltText: a = "",
  title: s,
  icon: p = void 0,
  body: m = "",
  eventFormat: b = "stack",
  eventLocation: f = "",
  eventTime: k = "",
  buttons: A = void 0,
  linkLabel: O = void 0,
  linkUrl: U = void 0,
  tags: _ = void 0,
  showBorders: C = !0,
  cardLink: N
}) => {
  const L = ot("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !C
  });
  return /* @__PURE__ */ H.jsx(H.Fragment, { children: /* @__PURE__ */ H.jsxs(bp, { className: L, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ H.jsx(
      Pl,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: N,
        title: s
      }
    ),
    !n && p && /* @__PURE__ */ H.jsx(
      "i",
      {
        className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ H.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ H.jsx(
      Pi,
      {
        type: e,
        body: m,
        eventFormat: b,
        eventLocation: f,
        eventTime: k,
        title: s,
        buttons: A,
        linkLabel: O,
        linkUrl: U,
        tags: _,
        cardLink: N
      }
    ) }) : /* @__PURE__ */ H.jsx(
      Pi,
      {
        type: e,
        body: m,
        eventFormat: b,
        eventLocation: f,
        eventTime: k,
        title: s,
        buttons: A,
        linkLabel: O,
        linkUrl: U,
        tags: _,
        cardLink: N
      }
    )
  ] }) });
};
Dl.propTypes = {
  type: l.oneOf(["default", "degree", "event", "news", "story"]),
  width: l.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: l.bool,
  title: l.string.isRequired,
  icon: l.arrayOf(l.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: l.string,
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string,
  image: l.string,
  imageAltText: l.string,
  buttons: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: l.arrayOf(l.string),
      href: l.string,
      label: l.string,
      onClick: l.func,
      size: l.oneOf(["default", "small", "xsmall"]),
      target: l.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: l.string,
  linkUrl: l.string,
  tags: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["white", "gray", "dark"]),
      href: l.string,
      label: l.string,
      onClick: l.func
    })
  ),
  showBorders: l.bool,
  cardLink: l.string
};
const Pi = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: n = "",
  eventTime: a = "",
  title: s,
  buttons: p = void 0,
  linkLabel: m = void 0,
  linkUrl: b = void 0,
  tags: f = void 0,
  cardLink: k
}) => /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
  !!s && /* @__PURE__ */ H.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ H.jsx("h3", { className: "card-title", children: k ? /* @__PURE__ */ H.jsx("a", { href: k, children: s }) : s }) }),
  !!t && /* @__PURE__ */ H.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: Hr(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ H.jsx(
    Ll,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  p && /* @__PURE__ */ H.jsx("div", { className: "card-buttons", children: p.map((A) => /* @__PURE__ */ H.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ H.jsx(
        Tr,
        {
          ariaLabel: A.ariaLabel,
          color: A.color,
          icon: A.icon,
          href: A.href,
          label: A.label,
          onClick: A.onClick,
          size: A.size,
          target: A.target,
          cardTitle: s
        }
      )
    },
    `${A.label}-${A.href}`
  )) }),
  b && m && /* @__PURE__ */ H.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ H.jsx(
    Rr,
    {
      gaData: {
        ...vp,
        section: s,
        text: m
      },
      children: /* @__PURE__ */ H.jsx("a", { href: xp(b), children: m })
    }
  ) }),
  f && /* @__PURE__ */ H.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((A) => (
    // @ts-ignore
    /* @__PURE__ */ H.jsx(
      Il,
      {
        ariaLabel: A.ariaLabel,
        color: A.color,
        href: A.href,
        label: A.label,
        onClick: A.onClick,
        cardTitle: s
      },
      `${A.label}-${A.href}`
    )
  )) })
] });
Pi.propTypes = {
  type: l.oneOf(["default", "degree", "event", "news", "story"]),
  body: l.string,
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string,
  title: l.string.isRequired,
  buttons: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: l.arrayOf(l.string),
      href: l.string,
      label: l.string,
      onClick: l.func,
      size: l.oneOf(["default", "small", "xsmall"]),
      target: l.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: l.string,
  linkUrl: l.string,
  tags: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["white", "gray", "dark"]),
      href: l.string,
      label: l.string,
      onClick: l.func
    })
  ),
  cardLink: l.string
};
const Ll = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ H.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: Hr(r) })
  ] }),
  t && /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ H.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Hr(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
  r && /* @__PURE__ */ H.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: Hr(r) })
  ] }) }),
  t && /* @__PURE__ */ H.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ H.jsx("span", { children: /* @__PURE__ */ H.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Hr(t)
      }
    ) })
  ] }) })
] });
Ll.propTypes = {
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string
};
l.oneOf(["small", "large"]), l.string.isRequired, l.string.isRequired, l.string;
l.oneOf(["small", "large"]).isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string, l.string;
l.arrayOf(l.object).isRequired, l.oneOf(["card", "ranking", "image"]), l.oneOf([1, 2, 3, 4, "1", "2", "3", "4"]);
l.string.isRequired, l.oneOfType([
  l.string,
  l.arrayOf(l.string)
]), l.node.isRequired, l.string, l.string, l.shape({
  label: l.string.isRequired,
  href: l.string.isRequired,
  color: l.string
});
sr.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 3px;
    border: 3px solid #1b1b1b;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #1b1b1b transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
sr.section``;
ll(null);
l.element, l.element, l.number, l.func, l.func, l.string;
const wp = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), Sp = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
});
l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
});
const kp = l.shape({
  url: l.string,
  filters: l.string
});
l.shape({
  header: wp,
  ctaButton: Sp,
  dataSource: kp,
  maxItems: l.number
});
sr.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`;
l.element;
const Tp = sr.img`
  width: 100%;
`;
function Cp({ image: e, title: t, contents: r }) {
  return console.log({ image: e, title: t, contents: r }), /* @__PURE__ */ H.jsx("div", { children: "TODO: to be implemented" });
}
function Ep({
  image: e,
  subTitle: t,
  title: r,
  contents: n,
  contentsColor: a
}) {
  const s = {
    small: "uds-hero-sm",
    medium: "uds-hero-md",
    large: "uds-hero-lg",
    undefined: ""
  }, p = {
    gold: "highlight-gold",
    black: "highlight-black",
    white: "highlight-white",
    none: "text-white",
    undefined: ""
  }, m = {
    black: "text-dark",
    white: "text-white",
    undefined: ""
  };
  return /* @__PURE__ */ H.jsxs(
    "div",
    {
      className: ot("uds-hero", {
        [s[e == null ? void 0 : e.size]]: e == null ? void 0 : e.size
      }),
      children: [
        /* @__PURE__ */ H.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ H.jsx(
          Tp,
          {
            className: "hero",
            src: e == null ? void 0 : e.url,
            alt: e == null ? void 0 : e.altText,
            "data-testid": "hero-image"
          }
        ),
        t && /* @__PURE__ */ H.jsx("div", { role: "doc-subtitle", "data-testid": "hero-subtitle", children: /* @__PURE__ */ H.jsx(
          "span",
          {
            className: ot({
              [m[t.color]]: t.color,
              [p[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        r && /* @__PURE__ */ H.jsx("h1", { style: { maxWidth: r.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ H.jsx(
          "span",
          {
            className: ot({
              [m[r.color]]: r.color,
              [p[r.highlightColor]]: r.highlightColor
            }),
            children: r.text
          }
        ) }),
        n && /* @__PURE__ */ H.jsx(
          "div",
          {
            "data-testid": "hero-content",
            className: ot("content", {
              [m[a]]: a
            }),
            children: n.map((b, f) => /* @__PURE__ */ H.jsx("p", { children: b.text }, `content-${f}`))
          }
        )
      ]
    }
  );
}
const Ln = (e) => {
  const t = e.type || "heading-hero";
  return {
    "heading-hero": () => Ep(e),
    "story-hero": () => Cp(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
Ln.propTypes = {
  type: l.oneOf(["heading-hero", "story-hero"]),
  image: ed,
  title: ri,
  subTitle: ri,
  contents: l.arrayOf(ri),
  contentsColor: l.string
};
const or = ({
  dataId: e,
  isClickeable: t = !1,
  disabled: r = !1,
  pageLinkIcon: n = !1,
  selectedPage: a = !1,
  onClick: s = () => {
  },
  ellipses: p,
  ariaLabel: m,
  children: b,
  ariaDisabled: f
}) => /* @__PURE__ */ H.jsx(
  "li",
  {
    className: ot("page-item", {
      disabled: r,
      active: a,
      elipses: p
    }),
    children: t ? /* @__PURE__ */ H.jsxs(
      "button",
      {
        type: "button",
        "aria-label": m,
        className: ot("page-link", {
          "page-link-icon": n
        }),
        onClick: s,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": a ? "page" : null,
        "aria-disabled": f,
        children: [
          b,
          a && /* @__PURE__ */ H.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ H.jsx("span", { className: "page-link", "data-testid": "page-link", children: b })
  }
);
or.propTypes = {
  isClickeable: l.bool,
  disabled: l.bool,
  pageLinkIcon: l.bool,
  selectedPage: l.bool,
  dataId: l.string,
  onClick: l.func,
  children: l.node,
  ellipses: l.bool,
  ariaLabel: l.string,
  ariaDisabled: l.bool
};
const Ap = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, Ml = ({
  type: e,
  background: t,
  currentPage: r = 1,
  totalPages: n = 10,
  onChange: a
}) => {
  const [s, p] = ct(null);
  At(() => {
    p(r);
  }, [r]);
  const m = (k) => {
    yl({ ...Ap, text: `page ${k}` });
  }, b = (k, A) => {
    const O = {
      first: 1,
      prev: s === 1 ? 1 : s - 1,
      next: s === n ? n : s + 1,
      last: n
    }[A] ?? A;
    p(O), m(O), a == null || a(k, O);
  }, f = () => {
    if (n < 5)
      return /* @__PURE__ */ H.jsx(H.Fragment, { children: Array.from({ length: n }, (N, L) => {
        const $ = L + 1;
        return /* @__PURE__ */ H.jsx(
          or,
          {
            ariaLabel: `Page ${$} of ${n}`,
            isClickeable: !0,
            selectedPage: s === $,
            onClick: (G) => b(G, $),
            children: $
          },
          $
        );
      }) });
    const k = 2, A = Wo(
      s === n - 1,
      1,
      s === n ? 2 : 1
    ), O = Wo(
      s === 1,
      2,
      1
    ), U = ts(
      s - A,
      s,
      n
    ), _ = ts(
      s,
      s + 1 + O,
      n
    ), C = [...U, ..._];
    return /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
      C[0] !== 1 && /* @__PURE__ */ H.jsx(
        or,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: s === 1,
          onClick: (N) => b(N, "first"),
          children: "1"
        }
      ),
      s > n - k && /* @__PURE__ */ H.jsx(
        or,
        {
          isClickeable: !0,
          ariaLabel: `Page 2 of ${n}`,
          selectedPage: s === 2,
          onClick: (N) => b(N, 2),
          children: "2"
        }
      ),
      C[0] > 2 && /* @__PURE__ */ H.jsx(or, { ellipses: !0, children: "..." }),
      C.map((N) => /* @__PURE__ */ H.jsx(
        or,
        {
          ariaLabel: `Page ${N} of ${n}`,
          isClickeable: !0,
          selectedPage: s === N,
          onClick: (L) => b(L, N),
          children: N
        },
        N
      )),
      C[C.length - 1] < n - 1 && /* @__PURE__ */ H.jsx(or, { ellipses: !0, children: "..." }),
      s < k + 1 && /* @__PURE__ */ H.jsx(
        or,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n - 1} of ${n}`,
          selectedPage: s === n - 1,
          onClick: (N) => b(N, n - 1),
          children: n - 1
        }
      ),
      C[C.length - 1] !== n && /* @__PURE__ */ H.jsx(
        or,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n} of ${n}`,
          selectedPage: s === n,
          onClick: (N) => b(N, "last"),
          children: n
        }
      )
    ] });
  };
  return /* @__PURE__ */ H.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ H.jsxs(
    "ul",
    {
      className: ot(
        "pagination",
        "justify-content-center",
        "pt-2",
        "pb-2",
        {
          border: e === "bordered",
          "uds-bg-gray1": t === "gray1",
          "uds-bg-gray": t === "gray2",
          "uds-bg-dark": t === "gray7"
        }
      ),
      children: [
        /* @__PURE__ */ H.jsx(
          or,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: s === 1,
            pageLinkIcon: !0,
            onClick: (k) => b(k, "prev"),
            ariaDisabled: s === 1,
            ariaLabel: "Previous Page"
          }
        ),
        f(),
        /* @__PURE__ */ H.jsx(
          or,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: s === n,
            disabled: s === n,
            pageLinkIcon: !0,
            onClick: (k) => b(k, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
Ml.propTypes = {
  /**
   * Type of pagination
   */
  type: l.oneOf(["default", "bordered"]).isRequired,
  /**
   * Background of pagination
   */
  background: l.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired,
  /**
   * Current page
   */
  currentPage: l.number,
  /**
   * Total number of pages
   */
  totalPages: l.number,
  /**
   * Callback fired when the page is changed
   */
  onChange: l.func.isRequired
};
sr.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const _p = Vi(function(e, t) {
  const {
    id: r,
    selected: n,
    title: a,
    selectTab: s,
    leftKeyPressed: p,
    rightKeyPressed: m,
    icon: b,
    gaData: f
  } = e, { isReact: k, isBootstrap: A } = Zi(), O = Wr(null);
  fu(t, () => ({
    focus() {
      O.current.focus();
    },
    scrollIntoView() {
      var _, C, N, L, $, G, z;
      const w = ((_ = O.current) == null ? void 0 : _.offsetWidth) / 2 + O.current.offsetLeft, ee = ((N = (C = O.current) == null ? void 0 : C.offsetParent) == null ? void 0 : N.scrollLeft) + (($ = (L = O.current) == null ? void 0 : L.offsetParent) == null ? void 0 : $.offsetWidth) / 2;
      (z = (G = O.current) == null ? void 0 : G.offsetParent) == null || z.scrollBy({
        left: w - ee
      });
    }
  }), []);
  const U = (_) => {
    _.keyCode === 37 ? (_.preventDefault(), p()) : _.keyCode === 39 && (_.preventDefault(), m());
  };
  return /* @__PURE__ */ H.jsx(Rr, { gaData: { ...f, text: a }, children: /* @__PURE__ */ H.jsxs(
    "a",
    {
      ref: O,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      "data-bs-toggle": A && "tab",
      onClick: k && ((_) => s(_, r, a)),
      onKeyDown: k && U,
      tabIndex: n ? "" : "-1",
      children: [
        a,
        " ",
        b && /* @__PURE__ */ H.jsx("i", { className: `${b == null ? void 0 : b[0]} fa-${b == null ? void 0 : b[1]} me-1` })
      ]
    }
  ) });
});
_p.propTypes = {
  gaData: l.object,
  id: l.string.isRequired,
  selected: l.bool.isRequired,
  title: l.string.isRequired,
  selectTab: l.func.isRequired,
  leftKeyPressed: l.func.isRequired,
  rightKeyPressed: l.func.isRequired,
  icon: l.arrayOf(l.string)
};
l.string.isRequired, l.string, l.bool, l.oneOfType([l.array, l.element]);
l.string, l.arrayOf(l.element).isRequired, l.string, l.func;
l.shape({
  title: l.string,
  content: l.string,
  cite: l.shape({
    name: l.string,
    description: l.string
  })
}).isRequired, l.string, l.string, l.shape({
  containerCssClass: l.arrayOf(l.string),
  titleCssClass: l.arrayOf(l.string),
  contentCssClass: l.arrayOf(l.string)
});
const Op = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  text: "play button"
}, jp = ({
  url: e = "",
  vttUrl: t,
  caption: r,
  title: n = "",
  className: a,
  controls: s = !0
}) => {
  const p = Wr(null);
  return /* @__PURE__ */ H.jsxs(
    "div",
    {
      className: ot(`uds-video-container ${a}`, {
        "uds-video-with-caption": r
      }),
      children: [
        /* @__PURE__ */ H.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ H.jsx(Rr, { gaData: { ...Op, section: n }, children: /* @__PURE__ */ H.jsxs(
          "video",
          {
            ref: p,
            title: n,
            playsInline: !0,
            controls: s || !0,
            children: [
              /* @__PURE__ */ H.jsx("source", { src: e }),
              /* @__PURE__ */ H.jsx(
                "track",
                {
                  src: t,
                  kind: "captions",
                  srcLang: "en",
                  label: "english_captions"
                }
              )
            ]
          }
        ) }) }),
        r && /* @__PURE__ */ H.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ H.jsx("figcaption", { children: r }) })
      ]
    }
  );
}, Np = ({ title: e = "", caption: t, url: r = "", className: n }) => /* @__PURE__ */ H.jsxs(
  "div",
  {
    className: ot(`uds-video-container ${n}`, {
      "uds-video-with-caption": t
    }),
    children: [
      /* @__PURE__ */ H.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ H.jsx("iframe", { title: e, src: r }) }),
      t && /* @__PURE__ */ H.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ H.jsx("figcaption", { children: t }) })
    ]
  }
), ro = (e) => {
  const {
    type: t = "video",
    url: r = "",
    vttUrl: n,
    title: a = "",
    caption: s,
    className: p,
    controls: m = !0
  } = e;
  return t === "youtube" ? Np({ url: r, title: a, caption: s, className: p }) : jp({
    url: r,
    vttUrl: n,
    title: a,
    caption: s,
    className: p,
    controls: m
  });
};
ro.propTypes = {
  type: l.oneOf(["video", "youtube"]),
  url: l.string,
  vttUrl: l.string,
  title: l.string,
  className: l.string,
  caption: l.string,
  controls: l.bool
};
l.oneOfType([
  l.element,
  l.arrayOf(l.element)
]).isRequired;
l.number.isRequired;
l.arrayOf(l.string).isRequired, l.func;
l.func;
l.func;
l.arrayOf(l.element);
l.element, l.func;
l.arrayOf(l.object);
var Rp = !1;
try {
  var Ts = Object.defineProperty({}, "passive", {
    get: function() {
      Rp = !0;
    }
  });
  window.addEventListener("testPassive", null, Ts), window.removeEventListener("testPassive", null, Ts);
} catch {
}
l.number, l.string, l.string, l.arrayOf(l.object).isRequired, l.string, l.func, l.string, l.string, l.func, l.bool, l.bool, l.bool, l.bool, l.bool, l.bool, l.bool, l.bool;
l.string.isRequired, l.arrayOf(
  l.shape({
    title: l.string.isRequired,
    content: l.string,
    eventLocation: l.string,
    eventTime: l.string,
    image: l.string,
    imageAltText: l.string,
    buttons: gt.propTypes.buttons,
    linkLabel: l.string,
    linkUrl: l.string,
    tags: gt.propTypes.tags
  })
).isRequired, gt.propTypes.type, gt.propTypes.eventFormat, gt.propTypes.horizontal, l.string, l.string, l.bool;
l.number.isRequired, l.arrayOf(l.object).isRequired, l.string, l.string, l.bool;
const Ea = {
  imageItems: l.arrayOf(
    l.shape({
      id: l.number,
      imageSource: l.string,
      thumbnailSource: l.string,
      imageAltText: l.string,
      content: l.oneOfType([l.string, l.element])
    })
  ),
  hasContent: l.bool
};
l.string, Ea.imageItems, Ea.hasContent;
Ea.imageItems.isRequired, Ea.hasContent, l.string, l.string, l.bool;
l.arrayOf(
  l.shape({
    title: l.string,
    content: l.string,
    cite: l.shape({
      name: l.string,
      description: l.string
    })
  })
).isRequired, l.shape({
  containerCssClass: l.arrayOf(l.string),
  titleCssClass: l.arrayOf(l.string),
  contentCssClass: l.arrayOf(l.string)
}), l.string, l.string, l.bool, l.bool, l.bool;
var la = {}, Cs;
function Ip() {
  if (Cs) return la;
  Cs = 1;
  var e = fl;
  return la.createRoot = e.createRoot, la.hydrateRoot = e.hydrateRoot, la;
}
Ip();
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery figcaption h2{font-size:1.5rem;line-height:1.75rem;letter-spacing:-.0525rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const Fl = () => {
  const [e, t] = ct(null), [r, n] = ct(!1), [a, s] = ct(null), [p, m] = ct("");
  return At(() => {
    if (!p) return;
    (() => {
      s(null), n(!0);
      try {
        fetch(p).then((f) => f.json()).then((f) => {
          t(f), n(!1);
        }).catch((f) => {
          s(f), n(!1);
        });
      } catch (f) {
        s(f);
      }
    })();
  }, [p]), [{ data: e, loading: r, error: a }, m];
}, tn = (e) => (e || []).join(" ");
const {
  entries: $l,
  setPrototypeOf: Es,
  isFrozen: Pp,
  getPrototypeOf: Dp,
  getOwnPropertyDescriptor: Lp
} = Object;
let {
  freeze: jt,
  seal: Gt,
  create: xa
} = Object, {
  apply: Di,
  construct: Li
} = typeof Reflect < "u" && Reflect;
jt || (jt = function(t) {
  return t;
});
Gt || (Gt = function(t) {
  return t;
});
Di || (Di = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    a[s - 2] = arguments[s];
  return t.apply(r, a);
});
Li || (Li = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const ca = Nt(Array.prototype.forEach), Mp = Nt(Array.prototype.lastIndexOf), As = Nt(Array.prototype.pop), Sn = Nt(Array.prototype.push), Fp = Nt(Array.prototype.splice), va = Nt(String.prototype.toLowerCase), oi = Nt(String.prototype.toString), si = Nt(String.prototype.match), kn = Nt(String.prototype.replace), $p = Nt(String.prototype.indexOf), Up = Nt(String.prototype.trim), zt = Nt(Object.prototype.hasOwnProperty), Et = Nt(RegExp.prototype.test), Tn = zp(TypeError);
function Nt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Di(e, t, n);
  };
}
function zp(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Li(e, r);
  };
}
function Le(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : va;
  Es && Es(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (Pp(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function Hp(e) {
  for (let t = 0; t < e.length; t++)
    zt(e, t) || (e[t] = null);
  return e;
}
function hr(e) {
  const t = xa(null);
  for (const [r, n] of $l(e))
    zt(e, r) && (Array.isArray(n) ? t[r] = Hp(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = hr(n) : t[r] = n);
  return t;
}
function Cn(e, t) {
  for (; e !== null; ) {
    const n = Lp(e, t);
    if (n) {
      if (n.get)
        return Nt(n.get);
      if (typeof n.value == "function")
        return Nt(n.value);
    }
    e = Dp(e);
  }
  function r() {
    return null;
  }
  return r;
}
const _s = jt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), li = jt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ci = jt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), qp = jt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ui = jt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Bp = jt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Os = jt(["#text"]), js = jt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), di = jt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ns = jt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ua = jt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Wp = Gt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Gp = Gt(/<%[\w\W]*|[\w\W]*%>/gm), Yp = Gt(/\$\{[\w\W]*/gm), Vp = Gt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Kp = Gt(/^aria-[\-\w]+$/), Ul = Gt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Xp = Gt(/^(?:\w+script|data):/i), Jp = Gt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), zl = Gt(/^html$/i), Zp = Gt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Rs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Kp,
  ATTR_WHITESPACE: Jp,
  CUSTOM_ELEMENT: Zp,
  DATA_ATTR: Vp,
  DOCTYPE_NAME: zl,
  ERB_EXPR: Gp,
  IS_ALLOWED_URI: Ul,
  IS_SCRIPT_OR_DATA: Xp,
  MUSTACHE_EXPR: Wp,
  TMPLIT_EXPR: Yp
});
const En = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Qp = function() {
  return typeof window > "u" ? null : window;
}, ef = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (n = r.getAttribute(a));
  const s = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(s, {
      createHTML(p) {
        return p;
      },
      createScriptURL(p) {
        return p;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, Is = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Hl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Qp();
  const t = (y) => Hl(y);
  if (t.version = "3.3.2", t.removed = [], !e || !e.document || e.document.nodeType !== En.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: p,
    Node: m,
    Element: b,
    NodeFilter: f,
    NamedNodeMap: k = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: A,
    DOMParser: O,
    trustedTypes: U
  } = e, _ = b.prototype, C = Cn(_, "cloneNode"), N = Cn(_, "remove"), L = Cn(_, "nextSibling"), $ = Cn(_, "childNodes"), G = Cn(_, "parentNode");
  if (typeof p == "function") {
    const y = r.createElement("template");
    y.content && y.content.ownerDocument && (r = y.content.ownerDocument);
  }
  let z, w = "";
  const {
    implementation: ee,
    createNodeIterator: ue,
    createDocumentFragment: xe,
    getElementsByTagName: Re
  } = r, {
    importNode: Me
  } = n;
  let se = Is();
  t.isSupported = typeof $l == "function" && typeof G == "function" && ee && ee.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: Oe,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: we,
    ARIA_ATTR: Ze,
    IS_SCRIPT_OR_DATA: je,
    ATTR_WHITESPACE: Ee,
    CUSTOM_ELEMENT: Fe
  } = Rs;
  let {
    IS_ALLOWED_URI: qe
  } = Rs, ce = null;
  const W = Le({}, [..._s, ...li, ...ci, ...ui, ...Os]);
  let I = null;
  const B = Le({}, [...js, ...di, ...Ns, ...ua]);
  let q = Object.seal(xa(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), x = null, ne = null;
  const j = Object.seal(xa(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let le = !0, te = !0, ae = !1, X = !0, oe = !1, he = !0, Q = !1, ve = !1, ie = !1, fe = !1, Ge = !1, me = !1, dt = !0, Ve = !1;
  const _e = "user-content-";
  let K = !0, de = !1, et = {}, $e = null;
  const Ue = Le({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let lr = null;
  const cr = Le({}, ["audio", "video", "img", "source", "image", "track"]);
  let Kt = null;
  const Xt = Le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), yt = "http://www.w3.org/1998/Math/MathML", Rt = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml";
  let bt = st, Jt = !1, Zt = null;
  const xt = Le({}, [yt, Rt, st], oi);
  let Tt = Le({}, ["mi", "mo", "mn", "ms", "mtext"]), vt = Le({}, ["annotation-xml"]);
  const ze = Le({}, ["title", "style", "font", "a", "script"]);
  let mt = null;
  const ur = ["application/xhtml+xml", "text/html"], Qt = "text/html";
  let ge = null, pt = null;
  const It = r.createElement("form"), dr = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, Pt = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(pt && pt === v)) {
      if ((!v || typeof v != "object") && (v = {}), v = hr(v), mt = // eslint-disable-next-line unicorn/prefer-includes
      ur.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? Qt : v.PARSER_MEDIA_TYPE, ge = mt === "application/xhtml+xml" ? oi : va, ce = zt(v, "ALLOWED_TAGS") ? Le({}, v.ALLOWED_TAGS, ge) : W, I = zt(v, "ALLOWED_ATTR") ? Le({}, v.ALLOWED_ATTR, ge) : B, Zt = zt(v, "ALLOWED_NAMESPACES") ? Le({}, v.ALLOWED_NAMESPACES, oi) : xt, Kt = zt(v, "ADD_URI_SAFE_ATTR") ? Le(hr(Xt), v.ADD_URI_SAFE_ATTR, ge) : Xt, lr = zt(v, "ADD_DATA_URI_TAGS") ? Le(hr(cr), v.ADD_DATA_URI_TAGS, ge) : cr, $e = zt(v, "FORBID_CONTENTS") ? Le({}, v.FORBID_CONTENTS, ge) : Ue, x = zt(v, "FORBID_TAGS") ? Le({}, v.FORBID_TAGS, ge) : hr({}), ne = zt(v, "FORBID_ATTR") ? Le({}, v.FORBID_ATTR, ge) : hr({}), et = zt(v, "USE_PROFILES") ? v.USE_PROFILES : !1, le = v.ALLOW_ARIA_ATTR !== !1, te = v.ALLOW_DATA_ATTR !== !1, ae = v.ALLOW_UNKNOWN_PROTOCOLS || !1, X = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, oe = v.SAFE_FOR_TEMPLATES || !1, he = v.SAFE_FOR_XML !== !1, Q = v.WHOLE_DOCUMENT || !1, fe = v.RETURN_DOM || !1, Ge = v.RETURN_DOM_FRAGMENT || !1, me = v.RETURN_TRUSTED_TYPE || !1, ie = v.FORCE_BODY || !1, dt = v.SANITIZE_DOM !== !1, Ve = v.SANITIZE_NAMED_PROPS || !1, K = v.KEEP_CONTENT !== !1, de = v.IN_PLACE || !1, qe = v.ALLOWED_URI_REGEXP || Ul, bt = v.NAMESPACE || st, Tt = v.MATHML_TEXT_INTEGRATION_POINTS || Tt, vt = v.HTML_INTEGRATION_POINTS || vt, q = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && dr(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (q.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && dr(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (q.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), oe && (te = !1), Ge && (fe = !0), et && (ce = Le({}, Os), I = xa(null), et.html === !0 && (Le(ce, _s), Le(I, js)), et.svg === !0 && (Le(ce, li), Le(I, di), Le(I, ua)), et.svgFilters === !0 && (Le(ce, ci), Le(I, di), Le(I, ua)), et.mathMl === !0 && (Le(ce, ui), Le(I, Ns), Le(I, ua))), zt(v, "ADD_TAGS") || (j.tagCheck = null), zt(v, "ADD_ATTR") || (j.attributeCheck = null), v.ADD_TAGS && (typeof v.ADD_TAGS == "function" ? j.tagCheck = v.ADD_TAGS : (ce === W && (ce = hr(ce)), Le(ce, v.ADD_TAGS, ge))), v.ADD_ATTR && (typeof v.ADD_ATTR == "function" ? j.attributeCheck = v.ADD_ATTR : (I === B && (I = hr(I)), Le(I, v.ADD_ATTR, ge))), v.ADD_URI_SAFE_ATTR && Le(Kt, v.ADD_URI_SAFE_ATTR, ge), v.FORBID_CONTENTS && ($e === Ue && ($e = hr($e)), Le($e, v.FORBID_CONTENTS, ge)), v.ADD_FORBID_CONTENTS && ($e === Ue && ($e = hr($e)), Le($e, v.ADD_FORBID_CONTENTS, ge)), K && (ce["#text"] = !0), Q && Le(ce, ["html", "head", "body"]), ce.table && (Le(ce, ["tbody"]), delete x.tbody), v.TRUSTED_TYPES_POLICY) {
        if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Tn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Tn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        z = v.TRUSTED_TYPES_POLICY, w = z.createHTML("");
      } else
        z === void 0 && (z = ef(U, a)), z !== null && typeof w == "string" && (w = z.createHTML(""));
      jt && jt(v), pt = v;
    }
  }, er = Le({}, [...li, ...ci, ...qp]), pr = Le({}, [...ui, ...Bp]), Cr = function(v) {
    let R = G(v);
    (!R || !R.tagName) && (R = {
      namespaceURI: bt,
      tagName: "template"
    });
    const J = va(v.tagName), Se = va(R.tagName);
    return Zt[v.namespaceURI] ? v.namespaceURI === Rt ? R.namespaceURI === st ? J === "svg" : R.namespaceURI === yt ? J === "svg" && (Se === "annotation-xml" || Tt[Se]) : !!er[J] : v.namespaceURI === yt ? R.namespaceURI === st ? J === "math" : R.namespaceURI === Rt ? J === "math" && vt[Se] : !!pr[J] : v.namespaceURI === st ? R.namespaceURI === Rt && !vt[Se] || R.namespaceURI === yt && !Tt[Se] ? !1 : !pr[J] && (ze[J] || !er[J]) : !!(mt === "application/xhtml+xml" && Zt[v.namespaceURI]) : !1;
  }, lt = function(v) {
    Sn(t.removed, {
      element: v
    });
    try {
      G(v).removeChild(v);
    } catch {
      N(v);
    }
  }, ht = function(v, R) {
    try {
      Sn(t.removed, {
        attribute: R.getAttributeNode(v),
        from: R
      });
    } catch {
      Sn(t.removed, {
        attribute: null,
        from: R
      });
    }
    if (R.removeAttribute(v), v === "is")
      if (fe || Ge)
        try {
          lt(R);
        } catch {
        }
      else
        try {
          R.setAttribute(v, "");
        } catch {
        }
  }, br = function(v) {
    let R = null, J = null;
    if (ie)
      v = "<remove></remove>" + v;
    else {
      const Ce = si(v, /^[\r\n\t ]+/);
      J = Ce && Ce[0];
    }
    mt === "application/xhtml+xml" && bt === st && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const Se = z ? z.createHTML(v) : v;
    if (bt === st)
      try {
        R = new O().parseFromString(Se, mt);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = ee.createDocument(bt, "template", null);
      try {
        R.documentElement.innerHTML = Jt ? w : Se;
      } catch {
      }
    }
    const Te = R.body || R.documentElement;
    return v && J && Te.insertBefore(r.createTextNode(J), Te.childNodes[0] || null), bt === st ? Re.call(R, Q ? "html" : "body")[0] : Q ? R.documentElement : Te;
  }, Ht = function(v) {
    return ue.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, qt = function(v) {
    return v instanceof A && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof k) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
  }, Bt = function(v) {
    return typeof m == "function" && v instanceof m;
  };
  function nt(y, v, R) {
    ca(y, (J) => {
      J.call(t, v, R, pt);
    });
  }
  const yr = function(v) {
    let R = null;
    if (nt(se.beforeSanitizeElements, v, null), qt(v))
      return lt(v), !0;
    const J = ge(v.nodeName);
    if (nt(se.uponSanitizeElement, v, {
      tagName: J,
      allowedTags: ce
    }), he && v.hasChildNodes() && !Bt(v.firstElementChild) && Et(/<[/\w!]/g, v.innerHTML) && Et(/<[/\w!]/g, v.textContent) || v.nodeType === En.progressingInstruction || he && v.nodeType === En.comment && Et(/<[/\w]/g, v.data))
      return lt(v), !0;
    if (!(j.tagCheck instanceof Function && j.tagCheck(J)) && (!ce[J] || x[J])) {
      if (!x[J] && xr(J) && (q.tagNameCheck instanceof RegExp && Et(q.tagNameCheck, J) || q.tagNameCheck instanceof Function && q.tagNameCheck(J)))
        return !1;
      if (K && !$e[J]) {
        const Se = G(v) || v.parentNode, Te = $(v) || v.childNodes;
        if (Te && Se) {
          const Ce = Te.length;
          for (let He = Ce - 1; He >= 0; --He) {
            const Qe = C(Te[He], !0);
            Qe.__removalCount = (v.__removalCount || 0) + 1, Se.insertBefore(Qe, L(v));
          }
        }
      }
      return lt(v), !0;
    }
    return v instanceof b && !Cr(v) || (J === "noscript" || J === "noembed" || J === "noframes") && Et(/<\/no(script|embed|frames)/i, v.innerHTML) ? (lt(v), !0) : (oe && v.nodeType === En.text && (R = v.textContent, ca([pe, Oe, Ae], (Se) => {
      R = kn(R, Se, " ");
    }), v.textContent !== R && (Sn(t.removed, {
      element: v.cloneNode()
    }), v.textContent = R)), nt(se.afterSanitizeElements, v, null), !1);
  }, Dt = function(v, R, J) {
    if (ne[R] || dt && (R === "id" || R === "name") && (J in r || J in It))
      return !1;
    if (!(te && !ne[R] && Et(we, R))) {
      if (!(le && Et(Ze, R))) {
        if (!(j.attributeCheck instanceof Function && j.attributeCheck(R, v))) {
          if (!I[R] || ne[R]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(xr(v) && (q.tagNameCheck instanceof RegExp && Et(q.tagNameCheck, v) || q.tagNameCheck instanceof Function && q.tagNameCheck(v)) && (q.attributeNameCheck instanceof RegExp && Et(q.attributeNameCheck, R) || q.attributeNameCheck instanceof Function && q.attributeNameCheck(R, v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              R === "is" && q.allowCustomizedBuiltInElements && (q.tagNameCheck instanceof RegExp && Et(q.tagNameCheck, J) || q.tagNameCheck instanceof Function && q.tagNameCheck(J)))
            ) return !1;
          } else if (!Kt[R]) {
            if (!Et(qe, kn(J, Ee, ""))) {
              if (!((R === "src" || R === "xlink:href" || R === "href") && v !== "script" && $p(J, "data:") === 0 && lr[v])) {
                if (!(ae && !Et(je, kn(J, Ee, "")))) {
                  if (J)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, xr = function(v) {
    return v !== "annotation-xml" && si(v, Fe);
  }, tr = function(v) {
    nt(se.beforeSanitizeAttributes, v, null);
    const {
      attributes: R
    } = v;
    if (!R || qt(v))
      return;
    const J = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: I,
      forceKeepAttr: void 0
    };
    let Se = R.length;
    for (; Se--; ) {
      const Te = R[Se], {
        name: Ce,
        namespaceURI: He,
        value: Qe
      } = Te, wt = ge(Ce), tt = Qe;
      let Ye = Ce === "value" ? tt : Up(tt);
      if (J.attrName = wt, J.attrValue = Ye, J.keepAttr = !0, J.forceKeepAttr = void 0, nt(se.uponSanitizeAttribute, v, J), Ye = J.attrValue, Ve && (wt === "id" || wt === "name") && (ht(Ce, v), Ye = _e + Ye), he && Et(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ye)) {
        ht(Ce, v);
        continue;
      }
      if (wt === "attributename" && si(Ye, "href")) {
        ht(Ce, v);
        continue;
      }
      if (J.forceKeepAttr)
        continue;
      if (!J.keepAttr) {
        ht(Ce, v);
        continue;
      }
      if (!X && Et(/\/>/i, Ye)) {
        ht(Ce, v);
        continue;
      }
      oe && ca([pe, Oe, Ae], (Ir) => {
        Ye = kn(Ye, Ir, " ");
      });
      const Lt = ge(v.nodeName);
      if (!Dt(Lt, wt, Ye)) {
        ht(Ce, v);
        continue;
      }
      if (z && typeof U == "object" && typeof U.getAttributeType == "function" && !He)
        switch (U.getAttributeType(Lt, wt)) {
          case "TrustedHTML": {
            Ye = z.createHTML(Ye);
            break;
          }
          case "TrustedScriptURL": {
            Ye = z.createScriptURL(Ye);
            break;
          }
        }
      if (Ye !== tt)
        try {
          He ? v.setAttributeNS(He, Ce, Ye) : v.setAttribute(Ce, Ye), qt(v) ? lt(v) : As(t.removed);
        } catch {
          ht(Ce, v);
        }
    }
    nt(se.afterSanitizeAttributes, v, null);
  }, fr = function y(v) {
    let R = null;
    const J = Ht(v);
    for (nt(se.beforeSanitizeShadowDOM, v, null); R = J.nextNode(); )
      nt(se.uponSanitizeShadowNode, R, null), yr(R), tr(R), R.content instanceof s && y(R.content);
    nt(se.afterSanitizeShadowDOM, v, null);
  };
  return t.sanitize = function(y) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, J = null, Se = null, Te = null;
    if (Jt = !y, Jt && (y = "<!-->"), typeof y != "string" && !Bt(y))
      if (typeof y.toString == "function") {
        if (y = y.toString(), typeof y != "string")
          throw Tn("dirty is not a string, aborting");
      } else
        throw Tn("toString is not a function");
    if (!t.isSupported)
      return y;
    if (ve || Pt(v), t.removed = [], typeof y == "string" && (de = !1), de) {
      if (y.nodeName) {
        const Qe = ge(y.nodeName);
        if (!ce[Qe] || x[Qe])
          throw Tn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (y instanceof m)
      R = br("<!---->"), J = R.ownerDocument.importNode(y, !0), J.nodeType === En.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? R = J : R.appendChild(J);
    else {
      if (!fe && !oe && !Q && // eslint-disable-next-line unicorn/prefer-includes
      y.indexOf("<") === -1)
        return z && me ? z.createHTML(y) : y;
      if (R = br(y), !R)
        return fe ? null : me ? w : "";
    }
    R && ie && lt(R.firstChild);
    const Ce = Ht(de ? y : R);
    for (; Se = Ce.nextNode(); )
      yr(Se), tr(Se), Se.content instanceof s && fr(Se.content);
    if (de)
      return y;
    if (fe) {
      if (Ge)
        for (Te = xe.call(R.ownerDocument); R.firstChild; )
          Te.appendChild(R.firstChild);
      else
        Te = R;
      return (I.shadowroot || I.shadowrootmode) && (Te = Me.call(n, Te, !0)), Te;
    }
    let He = Q ? R.outerHTML : R.innerHTML;
    return Q && ce["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && Et(zl, R.ownerDocument.doctype.name) && (He = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + He), oe && ca([pe, Oe, Ae], (Qe) => {
      He = kn(He, Qe, " ");
    }), z && me ? z.createHTML(He) : He;
  }, t.setConfig = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pt(y), ve = !0;
  }, t.clearConfig = function() {
    pt = null, ve = !1;
  }, t.isValidAttribute = function(y, v, R) {
    pt || Pt({});
    const J = ge(y), Se = ge(v);
    return Dt(J, Se, R);
  }, t.addHook = function(y, v) {
    typeof v == "function" && Sn(se[y], v);
  }, t.removeHook = function(y, v) {
    if (v !== void 0) {
      const R = Mp(se[y], v);
      return R === -1 ? void 0 : Fp(se[y], R, 1)[0];
    }
    return As(se[y]);
  }, t.removeHooks = function(y) {
    se[y] = [];
  }, t.removeAllHooks = function() {
    se = Is();
  }, t;
}
var Ps = Hl();
let da = null;
function tf() {
  return da || (typeof window < "u" ? da = Ps(window) : da = Ps), da;
}
const Yt = (e) => ({ __html: tf().sanitize(e) });
function* Vr(e = "id-", t = 0) {
  let r = t;
  for (; ; )
    r += 1, yield e + r;
}
function rf() {
  const e = (
    // @ts-ignore
    (document.currentScript && document.currentScript.src || "").match(
      /(.*\/)/
    )
  );
  return e && e.length > 0 ? e[0].substr(0, e[0].length - 1) : "/";
}
var pi = { exports: {} }, fi, Ds;
function nf() {
  if (Ds) return fi;
  Ds = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return fi = e, fi;
}
var mi, Ls;
function af() {
  if (Ls) return mi;
  Ls = 1;
  var e = /* @__PURE__ */ nf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, mi = function() {
    function n(p, m, b, f, k, A) {
      if (A !== e) {
        var O = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw O.name = "Invariant Violation", O;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, mi;
}
var Ms;
function of() {
  return Ms || (Ms = 1, pi.exports = /* @__PURE__ */ af()()), pi.exports;
}
var wa = /* @__PURE__ */ of();
const E = /* @__PURE__ */ Ki(wa);
E.shape({
  event: E.string,
  action: E.string,
  name: E.string,
  region: E.string,
  section: E.string,
  component: E.string,
  type: E.string,
  text: E.string
});
const Mn = ({ children: e }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: e });
Mn.propTypes = {
  children: E.oneOfType([
    E.arrayOf(E.node),
    E.node,
    E.string
  ])
};
var hi = { exports: {} };
var Fs;
function sf() {
  return Fs || (Fs = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var s = "", p = 0; p < arguments.length; p++) {
          var m = arguments[p];
          m && (s = a(s, n(m)));
        }
        return s;
      }
      function n(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return r.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var p = "";
        for (var m in s)
          t.call(s, m) && s[m] && (p = a(p, m));
        return p;
      }
      function a(s, p) {
        return p ? s ? s + " " + p : s + p : s;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(hi)), hi.exports;
}
var lf = sf();
const cf = /* @__PURE__ */ Ki(lf);
({
  ...Mn.propTypes
});
const ql = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ d.jsx("div", { className: t, ...r, children: /* @__PURE__ */ d.jsx("div", { className: "row", children: e }) });
ql.propTypes = {
  children: Mn.propTypes.children
};
({
  ...ql.propTypes
});
Mn.propTypes.children, E.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Mn.propTypes.children;
function Bl({
  packageName: e = "",
  component: t = "",
  type: r = "",
  configuration: n = {}
}) {
  if (!e || !t) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[e] = {
    component: t,
    type: r,
    configuration: n
  };
}
var gi = { exports: {} }, Xe = {};
var $s;
function uf() {
  if ($s) return Xe;
  $s = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), U = Symbol.for("react.client.reference");
  function _(C) {
    if (typeof C == "object" && C !== null) {
      var N = C.$$typeof;
      switch (N) {
        case e:
          switch (C = C.type, C) {
            case r:
            case a:
            case n:
            case b:
            case f:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case p:
                case m:
                case A:
                case k:
                  return C;
                case s:
                  return C;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  return Xe.ContextConsumer = s, Xe.ContextProvider = p, Xe.Element = e, Xe.ForwardRef = m, Xe.Fragment = r, Xe.Lazy = A, Xe.Memo = k, Xe.Portal = t, Xe.Profiler = a, Xe.StrictMode = n, Xe.Suspense = b, Xe.SuspenseList = f, Xe.isContextConsumer = function(C) {
    return _(C) === s;
  }, Xe.isContextProvider = function(C) {
    return _(C) === p;
  }, Xe.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === e;
  }, Xe.isForwardRef = function(C) {
    return _(C) === m;
  }, Xe.isFragment = function(C) {
    return _(C) === r;
  }, Xe.isLazy = function(C) {
    return _(C) === A;
  }, Xe.isMemo = function(C) {
    return _(C) === k;
  }, Xe.isPortal = function(C) {
    return _(C) === t;
  }, Xe.isProfiler = function(C) {
    return _(C) === a;
  }, Xe.isStrictMode = function(C) {
    return _(C) === n;
  }, Xe.isSuspense = function(C) {
    return _(C) === b;
  }, Xe.isSuspenseList = function(C) {
    return _(C) === f;
  }, Xe.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === r || C === a || C === n || C === b || C === f || C === O || typeof C == "object" && C !== null && (C.$$typeof === A || C.$$typeof === k || C.$$typeof === p || C.$$typeof === s || C.$$typeof === m || C.$$typeof === U || C.getModuleId !== void 0);
  }, Xe.typeOf = _, Xe;
}
var Us;
function df() {
  return Us || (Us = 1, gi.exports = /* @__PURE__ */ uf()), gi.exports;
}
var Wl = /* @__PURE__ */ df();
function pf(e) {
  function t(W, I, B, q, x) {
    for (var ne = 0, j = 0, le = 0, te = 0, ae, X, oe = 0, he = 0, Q, ve = Q = ae = 0, ie = 0, fe = 0, Ge = 0, me = 0, dt = B.length, Ve = dt - 1, _e, K = "", de = "", et = "", $e = "", Ue; ie < dt; ) {
      if (X = B.charCodeAt(ie), ie === Ve && j + te + le + ne !== 0 && (j !== 0 && (X = j === 47 ? 10 : 47), te = le = ne = 0, dt++, Ve++), j + te + le + ne === 0) {
        if (ie === Ve && (0 < fe && (K = K.replace(O, "")), 0 < K.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              K += B.charAt(ie);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (K = K.trim(), ae = K.charCodeAt(0), Q = 1, me = ++ie; ie < dt; ) {
              switch (X = B.charCodeAt(ie)) {
                case 123:
                  Q++;
                  break;
                case 125:
                  Q--;
                  break;
                case 47:
                  switch (X = B.charCodeAt(ie + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ve = ie + 1; ve < Ve; ++ve)
                          switch (B.charCodeAt(ve)) {
                            case 47:
                              if (X === 42 && B.charCodeAt(ve - 1) === 42 && ie + 2 !== ve) {
                                ie = ve + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                ie = ve + 1;
                                break e;
                              }
                          }
                        ie = ve;
                      }
                  }
                  break;
                case 91:
                  X++;
                case 40:
                  X++;
                case 34:
                case 39:
                  for (; ie++ < Ve && B.charCodeAt(ie) !== X; )
                    ;
              }
              if (Q === 0) break;
              ie++;
            }
            switch (Q = B.substring(me, ie), ae === 0 && (ae = (K = K.replace(A, "").trim()).charCodeAt(0)), ae) {
              case 64:
                switch (0 < fe && (K = K.replace(O, "")), X = K.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = I;
                    break;
                  default:
                    fe = Ze;
                }
                if (Q = t(I, fe, Q, X, x + 1), me = Q.length, 0 < Ee && (fe = r(Ze, K, Ge), Ue = m(3, Q, fe, I, Oe, pe, me, X, x, q), K = fe.join(""), Ue !== void 0 && (me = (Q = Ue.trim()).length) === 0 && (X = 0, Q = "")), 0 < me) switch (X) {
                  case 115:
                    K = K.replace(ee, p);
                  case 100:
                  case 109:
                  case 45:
                    Q = K + "{" + Q + "}";
                    break;
                  case 107:
                    K = K.replace($, "$1 $2"), Q = K + "{" + Q + "}", Q = we === 1 || we === 2 && s("@" + Q, 3) ? "@-webkit-" + Q + "@" + Q : "@" + Q;
                    break;
                  default:
                    Q = K + Q, q === 112 && (Q = (de += Q, ""));
                }
                else Q = "";
                break;
              default:
                Q = t(I, r(I, K, Ge), Q, q, x + 1);
            }
            et += Q, Q = Ge = fe = ve = ae = 0, K = "", X = B.charCodeAt(++ie);
            break;
          case 125:
          case 59:
            if (K = (0 < fe ? K.replace(O, "") : K).trim(), 1 < (me = K.length)) switch (ve === 0 && (ae = K.charCodeAt(0), ae === 45 || 96 < ae && 123 > ae) && (me = (K = K.replace(" ", ":")).length), 0 < Ee && (Ue = m(1, K, I, W, Oe, pe, de.length, q, x, q)) !== void 0 && (me = (K = Ue.trim()).length) === 0 && (K = "\0\0"), ae = K.charCodeAt(0), X = K.charCodeAt(1), ae) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  $e += K + B.charAt(ie);
                  break;
                }
              default:
                K.charCodeAt(me - 1) !== 58 && (de += a(K, ae, X, K.charCodeAt(2)));
            }
            Ge = fe = ve = ae = 0, K = "", X = B.charCodeAt(++ie);
        }
      }
      switch (X) {
        case 13:
        case 10:
          j === 47 ? j = 0 : 1 + ae === 0 && q !== 107 && 0 < K.length && (fe = 1, K += "\0"), 0 < Ee * qe && m(0, K, I, W, Oe, pe, de.length, q, x, q), pe = 1, Oe++;
          break;
        case 59:
        case 125:
          if (j + te + le + ne === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, _e = B.charAt(ie), X) {
            case 9:
            case 32:
              if (te + ne + j === 0) switch (oe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  _e = "";
                  break;
                default:
                  X !== 32 && (_e = " ");
              }
              break;
            case 0:
              _e = "\\0";
              break;
            case 12:
              _e = "\\f";
              break;
            case 11:
              _e = "\\v";
              break;
            case 38:
              te + j + ne === 0 && (fe = Ge = 1, _e = "\f" + _e);
              break;
            case 108:
              if (te + j + ne + Ae === 0 && 0 < ve) switch (ie - ve) {
                case 2:
                  oe === 112 && B.charCodeAt(ie - 3) === 58 && (Ae = oe);
                case 8:
                  he === 111 && (Ae = he);
              }
              break;
            case 58:
              te + j + ne === 0 && (ve = ie);
              break;
            case 44:
              j + le + te + ne === 0 && (fe = 1, _e += "\r");
              break;
            case 34:
            case 39:
              j === 0 && (te = te === X ? 0 : te === 0 ? X : te);
              break;
            case 91:
              te + j + le === 0 && ne++;
              break;
            case 93:
              te + j + le === 0 && ne--;
              break;
            case 41:
              te + j + ne === 0 && le--;
              break;
            case 40:
              if (te + j + ne === 0) {
                if (ae === 0) switch (2 * oe + 3 * he) {
                  case 533:
                    break;
                  default:
                    ae = 1;
                }
                le++;
              }
              break;
            case 64:
              j + le + te + ne + ve + Q === 0 && (Q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + ne + le)) switch (j) {
                case 0:
                  switch (2 * X + 3 * B.charCodeAt(ie + 1)) {
                    case 235:
                      j = 47;
                      break;
                    case 220:
                      me = ie, j = 42;
                  }
                  break;
                case 42:
                  X === 47 && oe === 42 && me + 2 !== ie && (B.charCodeAt(me + 2) === 33 && (de += B.substring(me, ie + 1)), _e = "", j = 0);
              }
          }
          j === 0 && (K += _e);
      }
      he = oe, oe = X, ie++;
    }
    if (me = de.length, 0 < me) {
      if (fe = I, 0 < Ee && (Ue = m(2, de, fe, W, Oe, pe, me, q, x, q), Ue !== void 0 && (de = Ue).length === 0)) return $e + de + et;
      if (de = fe.join(",") + "{" + de + "}", we * Ae !== 0) {
        switch (we !== 2 || s(de, 2) || (Ae = 0), Ae) {
          case 111:
            de = de.replace(z, ":-moz-$1") + de;
            break;
          case 112:
            de = de.replace(G, "::-webkit-input-$1") + de.replace(G, "::-moz-$1") + de.replace(G, ":-ms-input-$1") + de;
        }
        Ae = 0;
      }
    }
    return $e + de + et;
  }
  function r(W, I, B) {
    var q = I.trim().split(N);
    I = q;
    var x = q.length, ne = W.length;
    switch (ne) {
      case 0:
      case 1:
        var j = 0;
        for (W = ne === 0 ? "" : W[0] + " "; j < x; ++j)
          I[j] = n(W, I[j], B).trim();
        break;
      default:
        var le = j = 0;
        for (I = []; j < x; ++j)
          for (var te = 0; te < ne; ++te)
            I[le++] = n(W[te] + " ", q[j], B).trim();
    }
    return I;
  }
  function n(W, I, B) {
    var q = I.charCodeAt(0);
    switch (33 > q && (q = (I = I.trim()).charCodeAt(0)), q) {
      case 38:
        return I.replace(L, "$1" + W.trim());
      case 58:
        return W.trim() + I.replace(L, "$1" + W.trim());
      default:
        if (0 < 1 * B && 0 < I.indexOf("\f")) return I.replace(L, (W.charCodeAt(0) === 58 ? "" : "$1") + W.trim());
    }
    return W + I;
  }
  function a(W, I, B, q) {
    var x = W + ";", ne = 2 * I + 3 * B + 4 * q;
    if (ne === 944) {
      W = x.indexOf(":", 9) + 1;
      var j = x.substring(W, x.length - 1).trim();
      return j = x.substring(0, W).trim() + j + ";", we === 1 || we === 2 && s(j, 1) ? "-webkit-" + j + j : j;
    }
    if (we === 0 || we === 2 && !s(x, 1)) return x;
    switch (ne) {
      case 1015:
        return x.charCodeAt(10) === 97 ? "-webkit-" + x + x : x;
      case 951:
        return x.charCodeAt(3) === 116 ? "-webkit-" + x + x : x;
      case 963:
        return x.charCodeAt(5) === 110 ? "-webkit-" + x + x : x;
      case 1009:
        if (x.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + x + x;
      case 978:
        return "-webkit-" + x + "-moz-" + x + x;
      case 1019:
      case 983:
        return "-webkit-" + x + "-moz-" + x + "-ms-" + x + x;
      case 883:
        if (x.charCodeAt(8) === 45) return "-webkit-" + x + x;
        if (0 < x.indexOf("image-set(", 11)) return x.replace(se, "$1-webkit-$2") + x;
        break;
      case 932:
        if (x.charCodeAt(4) === 45) switch (x.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + x.replace("-grow", "") + "-webkit-" + x + "-ms-" + x.replace("grow", "positive") + x;
          case 115:
            return "-webkit-" + x + "-ms-" + x.replace("shrink", "negative") + x;
          case 98:
            return "-webkit-" + x + "-ms-" + x.replace("basis", "preferred-size") + x;
        }
        return "-webkit-" + x + "-ms-" + x + x;
      case 964:
        return "-webkit-" + x + "-ms-flex-" + x + x;
      case 1023:
        if (x.charCodeAt(8) !== 99) break;
        return j = x.substring(x.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + j + "-webkit-" + x + "-ms-flex-pack" + j + x;
      case 1005:
        return _.test(x) ? x.replace(U, ":-webkit-") + x.replace(U, ":-moz-") + x : x;
      case 1e3:
        switch (j = x.substring(13).trim(), I = j.indexOf("-") + 1, j.charCodeAt(0) + j.charCodeAt(I)) {
          case 226:
            j = x.replace(w, "tb");
            break;
          case 232:
            j = x.replace(w, "tb-rl");
            break;
          case 220:
            j = x.replace(w, "lr");
            break;
          default:
            return x;
        }
        return "-webkit-" + x + "-ms-" + j + x;
      case 1017:
        if (x.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (I = (x = W).length - 10, j = (x.charCodeAt(I) === 33 ? x.substring(0, I) : x).substring(W.indexOf(":", 7) + 1).trim(), ne = j.charCodeAt(0) + (j.charCodeAt(7) | 0)) {
          case 203:
            if (111 > j.charCodeAt(8)) break;
          case 115:
            x = x.replace(j, "-webkit-" + j) + ";" + x;
            break;
          case 207:
          case 102:
            x = x.replace(j, "-webkit-" + (102 < ne ? "inline-" : "") + "box") + ";" + x.replace(j, "-webkit-" + j) + ";" + x.replace(j, "-ms-" + j + "box") + ";" + x;
        }
        return x + ";";
      case 938:
        if (x.charCodeAt(5) === 45) switch (x.charCodeAt(6)) {
          case 105:
            return j = x.replace("-items", ""), "-webkit-" + x + "-webkit-box-" + j + "-ms-flex-" + j + x;
          case 115:
            return "-webkit-" + x + "-ms-flex-item-" + x.replace(xe, "") + x;
          default:
            return "-webkit-" + x + "-ms-flex-line-pack" + x.replace("align-content", "").replace(xe, "") + x;
        }
        break;
      case 973:
      case 989:
        if (x.charCodeAt(3) !== 45 || x.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Me.test(W) === !0) return (j = W.substring(W.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(W.replace("stretch", "fill-available"), I, B, q).replace(":fill-available", ":stretch") : x.replace(j, "-webkit-" + j) + x.replace(j, "-moz-" + j.replace("fill-", "")) + x;
        break;
      case 962:
        if (x = "-webkit-" + x + (x.charCodeAt(5) === 102 ? "-ms-" + x : "") + x, B + q === 211 && x.charCodeAt(13) === 105 && 0 < x.indexOf("transform", 10)) return x.substring(0, x.indexOf(";", 27) + 1).replace(C, "$1-webkit-$2") + x;
    }
    return x;
  }
  function s(W, I) {
    var B = W.indexOf(I === 1 ? ":" : "{"), q = W.substring(0, I !== 3 ? B : 10);
    return B = W.substring(B + 1, W.length - 1), Fe(I !== 2 ? q : q.replace(Re, "$1"), B, I);
  }
  function p(W, I) {
    var B = a(I, I.charCodeAt(0), I.charCodeAt(1), I.charCodeAt(2));
    return B !== I + ";" ? B.replace(ue, " or ($1)").substring(4) : "(" + I + ")";
  }
  function m(W, I, B, q, x, ne, j, le, te, ae) {
    for (var X = 0, oe = I, he; X < Ee; ++X)
      switch (he = je[X].call(k, W, oe, B, q, x, ne, j, le, te, ae)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          oe = he;
      }
    if (oe !== I) return oe;
  }
  function b(W) {
    switch (W) {
      case void 0:
      case null:
        Ee = je.length = 0;
        break;
      default:
        if (typeof W == "function") je[Ee++] = W;
        else if (typeof W == "object") for (var I = 0, B = W.length; I < B; ++I)
          b(W[I]);
        else qe = !!W | 0;
    }
    return b;
  }
  function f(W) {
    return W = W.prefix, W !== void 0 && (Fe = null, W ? typeof W != "function" ? we = 1 : (we = 2, Fe = W) : we = 0), f;
  }
  function k(W, I) {
    var B = W;
    if (33 > B.charCodeAt(0) && (B = B.trim()), ce = B, B = [ce], 0 < Ee) {
      var q = m(-1, I, B, B, Oe, pe, 0, 0, 0, 0);
      q !== void 0 && typeof q == "string" && (I = q);
    }
    var x = t(Ze, B, I, 0, 0);
    return 0 < Ee && (q = m(-2, x, B, B, Oe, pe, x.length, 0, 0, 0), q !== void 0 && (x = q)), ce = "", Ae = 0, pe = Oe = 1, x;
  }
  var A = /^\0+/g, O = /[\0\r\f]/g, U = /: */g, _ = /zoo|gra/, C = /([,: ])(transform)/g, N = /,\r+?/g, L = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, z = /:(read-only)/g, w = /[svh]\w+-[tblr]{2}/, ee = /\(\s*(.*)\s*\)/g, ue = /([\s\S]*?);/g, xe = /-self|flex-/g, Re = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Me = /stretch|:\s*\w+\-(?:conte|avail)/, se = /([^-])(image-set\()/, pe = 1, Oe = 1, Ae = 0, we = 1, Ze = [], je = [], Ee = 0, Fe = null, qe = 0, ce = "";
  return k.use = b, k.set = f, e !== void 0 && f(e), k;
}
var ff = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function mf(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var hf = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, zs = /* @__PURE__ */ mf(
  function(e) {
    return hf.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), bi = { exports: {} }, We = {};
var Hs;
function gf() {
  if (Hs) return We;
  Hs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, k = e ? Symbol.for("react.forward_ref") : 60112, A = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, U = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function G(w) {
    if (typeof w == "object" && w !== null) {
      var ee = w.$$typeof;
      switch (ee) {
        case t:
          switch (w = w.type, w) {
            case b:
            case f:
            case n:
            case s:
            case a:
            case A:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case m:
                case k:
                case _:
                case U:
                case p:
                  return w;
                default:
                  return ee;
              }
          }
        case r:
          return ee;
      }
    }
  }
  function z(w) {
    return G(w) === f;
  }
  return We.AsyncMode = b, We.ConcurrentMode = f, We.ContextConsumer = m, We.ContextProvider = p, We.Element = t, We.ForwardRef = k, We.Fragment = n, We.Lazy = _, We.Memo = U, We.Portal = r, We.Profiler = s, We.StrictMode = a, We.Suspense = A, We.isAsyncMode = function(w) {
    return z(w) || G(w) === b;
  }, We.isConcurrentMode = z, We.isContextConsumer = function(w) {
    return G(w) === m;
  }, We.isContextProvider = function(w) {
    return G(w) === p;
  }, We.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, We.isForwardRef = function(w) {
    return G(w) === k;
  }, We.isFragment = function(w) {
    return G(w) === n;
  }, We.isLazy = function(w) {
    return G(w) === _;
  }, We.isMemo = function(w) {
    return G(w) === U;
  }, We.isPortal = function(w) {
    return G(w) === r;
  }, We.isProfiler = function(w) {
    return G(w) === s;
  }, We.isStrictMode = function(w) {
    return G(w) === a;
  }, We.isSuspense = function(w) {
    return G(w) === A;
  }, We.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === f || w === s || w === a || w === A || w === O || typeof w == "object" && w !== null && (w.$$typeof === _ || w.$$typeof === U || w.$$typeof === p || w.$$typeof === m || w.$$typeof === k || w.$$typeof === N || w.$$typeof === L || w.$$typeof === $ || w.$$typeof === C);
  }, We.typeOf = G, We;
}
var qs;
function bf() {
  return qs || (qs = 1, bi.exports = gf()), bi.exports;
}
var yi, Bs;
function yf() {
  if (Bs) return yi;
  Bs = 1;
  var e = bf(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, a = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[e.ForwardRef] = n, s[e.Memo] = a;
  function p(_) {
    return e.isMemo(_) ? a : s[_.$$typeof] || t;
  }
  var m = Object.defineProperty, b = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, k = Object.getOwnPropertyDescriptor, A = Object.getPrototypeOf, O = Object.prototype;
  function U(_, C, N) {
    if (typeof C != "string") {
      if (O) {
        var L = A(C);
        L && L !== O && U(_, L, N);
      }
      var $ = b(C);
      f && ($ = $.concat(f(C)));
      for (var G = p(_), z = p(C), w = 0; w < $.length; ++w) {
        var ee = $[w];
        if (!r[ee] && !(N && N[ee]) && !(z && z[ee]) && !(G && G[ee])) {
          var ue = k(C, ee);
          try {
            m(_, ee, ue);
          } catch {
          }
        }
      }
    }
    return _;
  }
  return yi = U, yi;
}
var xf = yf();
const vf = /* @__PURE__ */ Ki(xf);
var kt = { env: { NODE_ENV: "production" } };
function gr() {
  return (gr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Ws = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Mi = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Wl.typeOf(e);
}, Aa = Object.freeze([]), jr = Object.freeze({});
function In(e) {
  return typeof e == "function";
}
function Gs(e) {
  return e.displayName || e.name || "Component";
}
function no(e) {
  return e && typeof e.styledComponentId == "string";
}
var rn = typeof kt < "u" && kt.env !== void 0 && (kt.env.REACT_APP_SC_ATTR || kt.env.SC_ATTR) || "data-styled", ao = typeof window < "u" && "HTMLElement" in window, wf = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof kt < "u" && kt.env !== void 0 && (kt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && kt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? kt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && kt.env.REACT_APP_SC_DISABLE_SPEEDY : kt.env.SC_DISABLE_SPEEDY !== void 0 && kt.env.SC_DISABLE_SPEEDY !== "" ? kt.env.SC_DISABLE_SPEEDY !== "false" && kt.env.SC_DISABLE_SPEEDY : kt.env.NODE_ENV !== "production")), Sf = {};
function Fn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var kf = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, p = s; r >= p; ) (p <<= 1) < 0 && Fn(16, "" + r);
      this.groupSizes = new Uint32Array(p), this.groupSizes.set(a), this.length = p;
      for (var m = s; m < p; m++) this.groupSizes[m] = 0;
    }
    for (var b = this.indexOfGroup(r + 1), f = 0, k = n.length; f < k; f++) this.tag.insertRule(b, n[f]) && (this.groupSizes[r]++, b++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var p = a; p < s; p++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), p = s + a, m = s; m < p; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), Sa = /* @__PURE__ */ new Map(), _a = /* @__PURE__ */ new Map(), Nn = 1, pa = function(e) {
  if (Sa.has(e)) return Sa.get(e);
  for (; _a.has(Nn); ) Nn++;
  var t = Nn++;
  return Sa.set(e, t), _a.set(t, e), t;
}, Tf = function(e) {
  return _a.get(e);
}, Cf = function(e, t) {
  t >= Nn && (Nn = t + 1), Sa.set(e, t), _a.set(t, e);
}, Ef = "style[" + rn + '][data-styled-version="5.3.11"]', Af = new RegExp("^" + rn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), _f = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, p = a.length; s < p; s++) (n = a[s]) && e.registerName(t, n);
}, Of = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var p = r[a].trim();
    if (p) {
      var m = p.match(Af);
      if (m) {
        var b = 0 | parseInt(m[1], 10), f = m[2];
        b !== 0 && (Cf(f, b), _f(e, f, m[3]), e.getTag().insertRules(b, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, jf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Gl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(m) {
    for (var b = m.childNodes, f = b.length; f >= 0; f--) {
      var k = b[f];
      if (k && k.nodeType === 1 && k.hasAttribute(rn)) return k;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(rn, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = jf();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, Nf = function() {
  function e(r) {
    var n = this.element = Gl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, p = 0, m = s.length; p < m; p++) {
        var b = s[p];
        if (b.ownerNode === a) return b;
      }
      Fn(17);
    }(n), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Rf = function() {
  function e(r) {
    var n = this.element = Gl(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(a, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), If = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Ys = ao, Pf = { isServer: !ao, useCSSOMInjection: !wf }, Oa = function() {
  function e(r, n, a) {
    r === void 0 && (r = jr), n === void 0 && (n = {}), this.options = gr({}, Pf, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && ao && Ys && (Ys = !1, function(s) {
      for (var p = document.querySelectorAll(Ef), m = 0, b = p.length; m < b; m++) {
        var f = p[m];
        f && f.getAttribute(rn) !== "active" && (Of(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return pa(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(gr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = a ? new If(p) : s ? new Nf(p) : new Rf(p), new kf(r)));
    var r, n, a, s, p;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (pa(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(pa(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(pa(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", p = 0; p < a; p++) {
        var m = Tf(p);
        if (m !== void 0) {
          var b = r.names.get(m), f = n.getGroup(p);
          if (b && f && b.size) {
            var k = rn + ".g" + p + '[id="' + m + '"]', A = "";
            b !== void 0 && b.forEach(function(O) {
              O.length > 0 && (A += O + ",");
            }), s += "" + f + k + '{content:"' + A + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Df = /(a)(d)/gi, Vs = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Fi(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Vs(t % 52) + r;
  return (Vs(t % 52) + r).replace(Df, "$1-$2");
}
var Zr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Yl = function(e) {
  return Zr(5381, e);
};
function Vl(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (In(r) && !no(r)) return !1;
  }
  return !0;
}
var Lf = Yl("5.3.11"), Mf = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Vl(t), this.componentId = r, this.baseHash = Zr(Lf, r), this.baseStyle = n, Oa.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = Gr(this.rules, t, r, n).join(""), m = Fi(Zr(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(a, m)) {
        var b = n(p, "." + m, void 0, a);
        r.insertRules(a, m, b);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, k = Zr(this.baseHash, n.hash), A = "", O = 0; O < f; O++) {
        var U = this.rules[O];
        if (typeof U == "string") A += U;
        else if (U) {
          var _ = Gr(U, t, r, n), C = Array.isArray(_) ? _.join("") : _;
          k = Zr(k, C + O), A += C;
        }
      }
      if (A) {
        var N = Fi(k >>> 0);
        if (!r.hasNameForId(a, N)) {
          var L = n(A, "." + N, void 0, a);
          r.insertRules(a, N, L);
        }
        s.push(N);
      }
    }
    return s.join(" ");
  }, e;
}(), Ff = /^\s*\/\/.*$/gm, $f = [":", "[", ".", "#"];
function Uf(e) {
  var t, r, n, a, s = jr, p = s.options, m = p === void 0 ? jr : p, b = s.plugins, f = b === void 0 ? Aa : b, k = new pf(m), A = [], O = /* @__PURE__ */ function(C) {
    function N(L) {
      if (L) try {
        C(L + "}");
      } catch {
      }
    }
    return function(L, $, G, z, w, ee, ue, xe, Re, Me) {
      switch (L) {
        case 1:
          if (Re === 0 && $.charCodeAt(0) === 64) return C($ + ";"), "";
          break;
        case 2:
          if (xe === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (xe) {
            case 102:
            case 112:
              return C(G[0] + $), "";
            default:
              return $ + (Me === 0 ? "/*|*/" : "");
          }
        case -2:
          $.split("/*|*/}").forEach(N);
      }
    };
  }(function(C) {
    A.push(C);
  }), U = function(C, N, L) {
    return N === 0 && $f.indexOf(L[r.length]) !== -1 || L.match(a) ? C : "." + t;
  };
  function _(C, N, L, $) {
    $ === void 0 && ($ = "&");
    var G = C.replace(Ff, ""), z = N && L ? L + " " + N + " { " + G + " }" : G;
    return t = $, r = N, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), k(L || !N ? "" : N, z);
  }
  return k.use([].concat(f, [function(C, N, L) {
    C === 2 && L.length && L[0].lastIndexOf(r) > 0 && (L[0] = L[0].replace(n, U));
  }, O, function(C) {
    if (C === -2) {
      var N = A;
      return A = [], N;
    }
  }])), _.hash = f.length ? f.reduce(function(C, N) {
    return N.name || Fn(15), Zr(C, N.name);
  }, 5381).toString() : "", _;
}
var Kl = ft.createContext();
Kl.Consumer;
var Xl = ft.createContext(), zf = (Xl.Consumer, new Oa()), $i = Uf();
function Jl() {
  return Vt(Kl) || zf;
}
function Zl() {
  return Vt(Xl) || $i;
}
var Hf = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = $i);
      var p = n.name + s.hash;
      a.hasNameForId(n.id, p) || a.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return Fn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = $i), this.name + t.hash;
  }, e;
}(), qf = /([A-Z])/, Bf = /([A-Z])/g, Wf = /^ms-/, Gf = function(e) {
  return "-" + e.toLowerCase();
};
function Ks(e) {
  return qf.test(e) ? e.replace(Bf, Gf).replace(Wf, "-ms-") : e;
}
var Xs = function(e) {
  return e == null || e === !1 || e === "";
};
function Gr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], p = 0, m = e.length; p < m; p += 1) (a = Gr(e[p], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (Xs(e)) return "";
  if (no(e)) return "." + e.styledComponentId;
  if (In(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return Gr(b, t, r, n);
  }
  var f;
  return e instanceof Hf ? r ? (e.inject(r, n), e.getName(n)) : e : Mi(e) ? function k(A, O) {
    var U, _, C = [];
    for (var N in A) A.hasOwnProperty(N) && !Xs(A[N]) && (Array.isArray(A[N]) && A[N].isCss || In(A[N]) ? C.push(Ks(N) + ":", A[N], ";") : Mi(A[N]) ? C.push.apply(C, k(A[N], N)) : C.push(Ks(N) + ": " + (U = N, (_ = A[N]) == null || typeof _ == "boolean" || _ === "" ? "" : typeof _ != "number" || _ === 0 || U in ff || U.startsWith("--") ? String(_).trim() : _ + "px") + ";"));
    return O ? [O + " {"].concat(C, ["}"]) : C;
  }(e) : e.toString();
}
var Js = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function io(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return In(e) || Mi(e) ? Js(Gr(Ws(Aa, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Js(Gr(Ws(e, r)));
}
var Ql = function(e, t, r) {
  return r === void 0 && (r = jr), e.theme !== r.theme && e.theme || t || r.theme;
}, Yf = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vf = /(^-|-$)/g;
function xi(e) {
  return e.replace(Yf, "-").replace(Vf, "");
}
var ec = function(e) {
  return Fi(Yl(e) >>> 0);
};
function fa(e) {
  return typeof e == "string" && kt.env.NODE_ENV === "production";
}
var Ui = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Kf = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Xf(e, t, r) {
  var n = e[r];
  Ui(t) && Ui(n) ? tc(n, t) : e[r] = t;
}
function tc(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var p = s[a];
    if (Ui(p)) for (var m in p) Kf(m) && Xf(e, p[m], m);
  }
  return e;
}
var oo = ft.createContext();
oo.Consumer;
var vi = {};
function rc(e, t, r) {
  var n = no(e), a = !fa(e), s = t.attrs, p = s === void 0 ? Aa : s, m = t.componentId, b = m === void 0 ? function($, G) {
    var z = typeof $ != "string" ? "sc" : xi($);
    vi[z] = (vi[z] || 0) + 1;
    var w = z + "-" + ec("5.3.11" + z + vi[z]);
    return G ? G + "-" + w : w;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, k = f === void 0 ? function($) {
    return fa($) ? "styled." + $ : "Styled(" + Gs($) + ")";
  }(e) : f, A = t.displayName && t.componentId ? xi(t.displayName) + "-" + t.componentId : t.componentId || b, O = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, U = t.shouldForwardProp;
  n && e.shouldForwardProp && (U = t.shouldForwardProp ? function($, G, z) {
    return e.shouldForwardProp($, G, z) && t.shouldForwardProp($, G, z);
  } : e.shouldForwardProp);
  var _, C = new Mf(r, A, n ? e.componentStyle : void 0), N = C.isStatic && p.length === 0, L = function($, G) {
    return function(z, w, ee, ue) {
      var xe = z.attrs, Re = z.componentStyle, Me = z.defaultProps, se = z.foldedComponentIds, pe = z.shouldForwardProp, Oe = z.styledComponentId, Ae = z.target, we = function(q, x, ne) {
        q === void 0 && (q = jr);
        var j = gr({}, x, { theme: q }), le = {};
        return ne.forEach(function(te) {
          var ae, X, oe, he = te;
          for (ae in In(he) && (he = he(j)), he) j[ae] = le[ae] = ae === "className" ? (X = le[ae], oe = he[ae], X && oe ? X + " " + oe : X || oe) : he[ae];
        }), [j, le];
      }(Ql(w, Vt(oo), Me) || jr, w, xe), Ze = we[0], je = we[1], Ee = function(q, x, ne, j) {
        var le = Jl(), te = Zl(), ae = x ? q.generateAndInjectStyles(jr, le, te) : q.generateAndInjectStyles(ne, le, te);
        return ae;
      }(Re, ue, Ze), Fe = ee, qe = je.$as || w.$as || je.as || w.as || Ae, ce = fa(qe), W = je !== w ? gr({}, w, {}, je) : w, I = {};
      for (var B in W) B[0] !== "$" && B !== "as" && (B === "forwardedAs" ? I.as = W[B] : (pe ? pe(B, zs, qe) : !ce || zs(B)) && (I[B] = W[B]));
      return w.style && je.style !== w.style && (I.style = gr({}, w.style, {}, je.style)), I.className = Array.prototype.concat(se, Oe, Ee !== Oe ? Ee : null, w.className, je.className).filter(Boolean).join(" "), I.ref = Fe, ul(qe, I);
    }(_, $, G, N);
  };
  return L.displayName = k, (_ = ft.forwardRef(L)).attrs = O, _.componentStyle = C, _.displayName = k, _.shouldForwardProp = U, _.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Aa, _.styledComponentId = A, _.target = n ? e.target : e, _.withComponent = function($) {
    var G = t.componentId, z = function(ee, ue) {
      if (ee == null) return {};
      var xe, Re, Me = {}, se = Object.keys(ee);
      for (Re = 0; Re < se.length; Re++) xe = se[Re], ue.indexOf(xe) >= 0 || (Me[xe] = ee[xe]);
      return Me;
    }(t, ["componentId"]), w = G && G + "-" + (fa($) ? $ : xi(Gs($)));
    return rc($, gr({}, z, { attrs: O, componentId: w }), r);
  }, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = n ? tc({}, e.defaultProps, $) : $;
  } }), Object.defineProperty(_, "toString", { value: function() {
    return "." + _.styledComponentId;
  } }), a && vf(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), _;
}
var Je = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = jr), !Wl.isValidElementType(n)) return Fn(1, String(n));
    var s = function() {
      return r(n, a, io.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, gr({}, a, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, gr({}, a, { attrs: Array.prototype.concat(a.attrs, p).filter(Boolean) }));
    }, s;
  }(rc, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Je[e] = Je(e);
});
var Jf = function() {
  function e(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = Vl(r), Oa.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function(r, n, a, s) {
    var p = s(Gr(this.rules, n, a, s).join(""), ""), m = this.componentId + r;
    a.insertRules(m, m, p);
  }, t.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, t.renderStyles = function(r, n, a, s) {
    r > 2 && Oa.registerId(this.componentId + r), this.removeStyles(r, a), this.createStyles(r, n, a, s);
  }, e;
}();
function Ia(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  var a = io.apply(void 0, [e].concat(r)), s = "sc-global-" + ec(JSON.stringify(a)), p = new Jf(a, s);
  function m(f) {
    var k = Jl(), A = Zl(), O = Vt(oo), U = Wr(k.allocateGSInstance(s)).current;
    return k.server && b(U, f, k, O, A), mu(function() {
      if (!k.server) return b(U, f, k, O, A), function() {
        return p.removeStyles(U, k);
      };
    }, [U, f, k, O, A]), null;
  }
  function b(f, k, A, O, U) {
    if (p.isStatic) p.renderStyles(f, Sf, A, U);
    else {
      var _ = gr({}, k, { theme: Ql(k, O, m.defaultProps) });
      p.renderStyles(f, _, A, U);
    }
  }
  return ft.memo(m);
}
const $n = ({ href: e = null }) => (
  // @ts-ignore
  /* @__PURE__ */ d.jsx(Tr, { label: "Apply now", ariaLabel: "Apply now", href: e, color: "gold" })
);
$n.propTypes = {
  href: E.string
};
E.string;
function so({ message: e, type: t }) {
  const [r, n] = ct(""), s = {
    error: {
      className: "alert-danger",
      icon: "fa-exclamation-triangle",
      ariaLabel: "Error"
    },
    info: {
      className: "alert-info",
      icon: "fa-info-circle",
      ariaLabel: "Information"
    }
  }[t];
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-testid": "message-alert",
      className: `alert ${s.className}`,
      role: "alert",
      style: {
        display: r,
        position: "sticky",
        top: 0,
        zIndex: 100
      },
      children: [
        /* @__PURE__ */ d.jsx("div", { className: "alert-icon", children: /* @__PURE__ */ d.jsx(
          "span",
          {
            "aria-label": s.ariaLabel,
            className: `fa fa-icon ${s.icon}`
          }
        ) }),
        /* @__PURE__ */ d.jsx("div", { className: "alert-content", children: e }),
        /* @__PURE__ */ d.jsx("div", { className: "alert-close", children: /* @__PURE__ */ d.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-circle btn-circle-alt-black close",
            "aria-label": "Close",
            onClick: () => n("none"),
            children: /* @__PURE__ */ d.jsx("i", { className: "fas fa-times" })
          }
        ) })
      ]
    }
  );
}
so.propTypes = {
  type: E.oneOf(["error", "info"]).isRequired,
  message: E.string.isRequired
};
function nc({ message: e }) {
  return /* @__PURE__ */ d.jsx(so, { message: e, type: "error" });
}
function Zf({ message: e }) {
  return /* @__PURE__ */ d.jsx(so, { message: e, type: "info" });
}
const Qf = Je.div`
  --width: 100px;
  --color: red;

  width: calc(var(--width) + 0px);
  height: calc((var(--width) / 3) - 10px);
  // position: absolute;
  // top: 50%;
  // left: 50%;
  transform: translateX(-50%) translateY(-50%);

  .ball-loader-ball {
    will-change: transform;

    height: calc((var(--width) / 3) - 10px);
    width: calc((var(--width) / 3) - 10px);

    border-radius: 50%;
    background-color: lightBlue;
    position: absolute;
    -webkit-animation: grow 1s ease-in-out infinite alternate;
    animation: grow 1s ease-in-out infinite alternate;

    &.ball1 {
      left: 0;
      transform-origin: 100% 50%;
    }
    &.ball2 {
      left: 50%;
      transform: translateX(-50%) scale(1);
      animation-delay: 0.33s;
    }
    &.ball3 {
      right: 0;
      animation-delay: 0.66s;
    }
  }

  @keyframes grow {
    to {
      transform: translateX(-50%) scale(0);
    }
  }
`;
function ac() {
  return /* @__PURE__ */ d.jsxs(Qf, { "data-testid": "loader", className: "container ball-loader mt-4", children: [
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball1" }),
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball2" }),
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball3" })
  ] });
}
E.shape({
  color: E.oneOf(["gold", "maroon", "gray", "dark"]),
  content: E.shape({
    icon: E.string,
    header: E.string,
    body: E.string
  })
});
const ic = E.shape({
  ariaLabel: E.string,
  color: E.oneOf(["gold", "maroon", "gray", "dark"]),
  icon: E.string,
  href: E.string,
  label: E.string,
  onClick: E.func,
  size: E.oneOf(["default", "small", "xsmall"])
}), lo = {
  url: E.string,
  altText: E.string,
  cssClass: E.arrayOf(E.string)
}, oc = {
  text: E.string,
  cssClass: E.arrayOf(E.string)
}, co = {
  type: E.oneOf(["video", "youtube"]),
  url: E.string,
  altText: E.string,
  vttUrl: E.string,
  title: E.string
}, em = {
  url: E.string,
  text: E.string,
  isActive: E.bool
}, kr = E.shape({
  ...lo
}), ja = E.shape({
  ...oc
}), tm = E.shape({
  ...co
}), Br = E.shape({
  ...em
}), sc = E.shape({
  id: E.string,
  sourceType: E.oneOf(["api", "shared-data-source", "static-json"]),
  // default `api`
  sharedDataSourceId: E.string,
  // only if `dataSourceType == "shared-data-source"``
  data: E.arrayOf(E.object),
  // only if `dataSourceType == "static-json"``
  apiUrl: E.string
  // only if `dataSourceType == "api"``
}), zi = E.shape({
  text: E.string,
  url: E.string
}), Ur = E.shape({
  icon: E.arrayOf(E.string),
  title: E.string,
  content: E.string,
  buttonLink: ic
}), Hi = E.arrayOf(
  E.shape({
    title: E.string,
    url: E.string
  })
), lc = E.shape({
  career: Br,
  growth: E.oneOfType([E.number, E.string]),
  medianSalary: E.string,
  brightOutlook: E.bool,
  greenOccupation: E.bool
}), rm = {
  hideCollegeSchool: E.bool,
  defaultView: E.oneOf(["list-view", "grid-view"]),
  cardDefaultImage: kr
}, nm = E.shape({
  ...rm
}), uo = {
  atAGlance: E.bool,
  applicationRequirements: E.bool,
  changeMajorRequirements: E.bool,
  nextSteps: E.bool,
  affordingCollege: E.bool,
  flexibleDegreeOptions: E.bool,
  careerOutlook: E.bool,
  exampleCareers: E.bool,
  customizeYourCollegeExperience: E.bool,
  globalOpportunity: E.bool,
  attendOnline: E.bool,
  whyChooseAsu: E.bool,
  programContactInfo: E.bool,
  externalAnchors: E.arrayOf(
    E.shape({
      targetIdName: E.string,
      text: E.string
    })
  )
}, Xr = E.shape({
  image: kr,
  title: E.string,
  text: E.string,
  button: ic
}), Zs = E.shape({
  faculty: Xr,
  programs: Xr,
  research: Xr,
  inclusion: Xr,
  mentors: Xr,
  honors: Xr
}), cc = {
  hide: E.bool,
  sectionIntroText: E.string,
  cards: Zs,
  defaultCards: Zs
};
E.shape({
  ...uo
});
const wi = E.shape({
  id: E.oneOfType([E.string, E.number]),
  value: E.string
}), uc = E.shape({
  locations: E.arrayOf(wi),
  asuLocals: E.arrayOf(wi),
  acceleratedConcurrent: wi
}), am = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, dc = Object.values(am), Qs = {
  offeredBy: { icon: "university", title: "Offered by" },
  locations: { icon: "map-marker-alt", title: "Location" },
  firstRequirementMathCourse: {
    icon: "pencil-alt",
    title: "First Required math Course"
  },
  mathIntensity: { icon: "calculator", title: "Math intensity" },
  timeCommitment: { icon: "calendar-alt", title: "Time commitment" },
  stemOptText: { icon: "star", title: "STEM-OPT extension eligible" }
}, pc = "grid-view", qi = "list-view", fc = "degree-list-programs", mc = "Sorry, Something went wrong.", im = "STEM-OPT for international students on F-1 visas", om = `This degree is not found.
  This may be a temporary issue. Please try again in 5 minutes.
  If the issue persists, the degree may no longer be available.`, sm = rf(), lm = (e) => {
  const t = e || sm, r = `${t}/assets/img/detail-page`, n = `${t}/assets/img/listing-page`, a = {
    dataSource: void 0,
    introContent: {
      image: {
        url: `${r}/intro.jpg`,
        altText: "Detail Page Degree"
      }
    },
    hero: {
      image: {
        url: `${r}/hero.jpg`,
        altText: "Detail Page Degree",
        size: "medium"
      },
      title: {
        text: "Detail Page Degree",
        color: "black",
        highlightColor: "gold",
        maxWidth: "100%"
      }
    },
    nextSteps: {
      cards: {
        learnMore: {
          icon: ["fas", "info-circle"],
          title: "Learn more about our programs",
          content: "Tell us what type of student you are and we'll get you the information you need.",
          buttonLink: {
            label: "Request information",
            ariaLabel: "Request information",
            color: "maroon",
            href: "https://admission.asu.edu/contact/request-info"
          }
        },
        apply: {
          icon: ["fas", "file-alt"],
          title: "Apply to program",
          content: "Arizona State University invites first-year, transfer, international, graduate and online students to apply for admission using our online application.",
          buttonLink: {
            label: "Apply now",
            ariaLabel: "Apply now",
            color: "maroon",
            href: "https://admission.asu.edu/apply"
          }
        },
        visit: {
          icon: ["fas", "map-marker-alt"],
          title: "Visit our campus",
          content: "An Experience ASU visit includes a presentation on admissions, scholarships and financial aid, student housing, getting involved on campus and much more.You will also go on a student-led walking tour of campus.",
          buttonLink: {
            label: "Schedule a visit",
            ariaLabel: "Schedule a visit",
            color: "maroon",
            href: "https://visit.asu.edu/"
          }
        }
      }
    },
    whyChooseAsu: {
      sectionIntroText: "ASU offers students excellent academics and unique opportunities to customize your college experience and give you an edge, including undergraduate research, internships, access to state-of-the-art facilities, and opportunities to work with world-class faculty and scientists.",
      cards: {
        faculty: {
          image: {
            url: `${r}/customize-faculty-600.jpg`,
            altText: "World-class faculty"
          },
          title: "World-class faculty",
          text: "The ASU faculty is at the forefront nationally in advancing research and discovery. Our faculty members inspire new ways of thinking, innovating and solving problems socially, culturally and economically in our region and in the international community.",
          button: {
            label: "Faculty excellence",
            color: "maroon",
            href: "https://www.asu.edu/academics/faculty-excellence"
          }
        },
        programs: {
          image: {
            url: `${r}/customize-programs-600.jpg`,
            altText: "Highly ranked programs"
          },
          title: "Highly ranked programs",
          text: "A leading service ranking the excellence and innovation of the nation’s top universities, U.S. News & World Report rates many ASU programs among the top 25 in the country, including more than thirty programs ranked in the nation's top 10.",
          button: {
            label: "ASU rankings",
            color: "maroon",
            href: "https://www.asu.edu/rankings"
          }
        },
        research: {
          image: {
            url: `${r}/customize-research-600.jpg`,
            altText: "Research opportunities"
          },
          title: "Research opportunities",
          text: "Students have the opportunity to work with mentors who are experts in their fields and establish professional connections that may last a lifetime. Engage in meaningful research and gain experience that may make you more competitive in the job market.",
          button: {
            label: "Research opportunities",
            color: "maroon",
            href: "https://provost.asu.edu/uresearch"
          }
        },
        inclusion: {
          image: {
            url: `${r}/customize-inclusion-600.jpg`,
            altText: "An inclusive environment"
          },
          title: "An inclusive environment",
          text: "ASU defines our success not by whom we exclude, but by whom we include and how our students succeed. Our educational programs are designed to broaden access to a quality education and support our students’ success.",
          button: {
            label: "ASU Charter",
            color: "maroon",
            href: "https://www.asu.edu/about/charter-mission"
          }
        },
        mentors: {
          image: {
            url: `${r}/customize-mentor-600.jpg`,
            altText: "Career Services"
          },
          title: "Career Services",
          text: "All students have access to ASU’s full-service career resources center. Get help writing your cover letter and building your resume, learn job interview skills, land an internship, and connect with hundreds of employers who are actively recruiting ASU graduates.",
          button: {
            label: "ASU Career Services",
            color: "maroon",
            href: "https://career.eoss.asu.edu/"
          }
        },
        honors: {
          image: {
            url: `${r}/customize-honors-600.jpg`,
            altText: "Global education"
          },
          title: "Global education",
          text: "ASU offers more than 300 Global Education programs in over 65 different countries. Whether you are interested in studying abroad, internships, research or service learning, there's a program for you!",
          button: {
            label: "Explore",
            color: "maroon",
            href: "https://goglobal.asu.edu"
          }
        }
      }
    },
    globalOpportunity: {
      image: {
        url: `${r}/global-opportunity.jpg`,
        altText: "Global opportunity"
      }
    },
    careerOutlook: {
      image: {
        url: `${r}/career-outlook.jpg`,
        altText: "Career Outlook"
      }
    },
    attendOnline: {
      image: {
        url: `${r}/attend-online.jpg`,
        altText: "Attend online"
      }
    }
  }, s = {
    actionUrls: {
      applyNowUrl: "https://admission.asu.edu/apply"
    },
    hero: {
      image: {
        url: `${n}/hero.jpg`,
        altText: "Listing Page Degree",
        size: "medium"
      }
    },
    programList: void 0
  };
  return {
    detailPageDefault: a,
    listingPageDefault: s
  };
}, cm = (e) => {
  if (typeof e == "string") return "Degrees";
  const { program: t, cert: r } = e;
  return t === "undergrad" && r === "true" ? "Undergraduate Minors and Certificates" : t === "undergrad" ? "Undergraduate Degrees" : t === "graduate" && r === "true" ? "Graduate Certificates" : t === "graduate" ? "Graduate Degrees" : "Degrees";
}, po = [
  { id: 0, value: "DTPHX", text: "Downtown Phoenix campus" },
  { id: 1, value: "POLY", text: "Polytechnic campus" },
  { id: 2, value: "TEMPE", text: "Tempe campus" },
  { id: 3, value: "WEST", text: "West Valley campus" },
  { id: 4, value: "ONLNE", text: "ASU Online" }
], um = po[4], hc = [
  { id: 0, value: "COCHS", text: "ASU at Cochise" },
  { id: 1, value: "LOSAN", text: "ASU at Los Angeles" },
  { id: 2, value: "NEAZ", text: "ASU at Northeastern Arizona" },
  { id: 3, value: "PIMA", text: "ASU at Pima" },
  { id: 4, value: "CAC", text: "ASU at Pinal" },
  { id: 5, value: "EAC", text: "ASU at TheGilaValley" },
  { id: 6, value: "TUCSN", text: "ASU at Tucson" },
  { id: 7, value: "YAVAP", text: "ASU at Yavapai" },
  { id: 8, value: "AWC", text: "ASU at Yuma" },
  { id: 9, value: "MESACITYCR", text: "ASU at Mesa City Center" },
  { id: 10, value: "CALHC", text: "Colleges at Lake Havasu City" }
], fo = [
  {
    id: 0,
    value: "all",
    text: "All"
  },
  {
    id: 1,
    value: "acceleratedAcadPlanCodes",
    text: "Accelerated"
  },
  {
    id: 2,
    value: "concurrentAcadPlanCodes",
    text: "Concurrent"
  }
], dm = fo[0], Bi = (e) => (e == null ? void 0 : e.value) && (e == null ? void 0 : e.value) !== "all", pm = (e) => {
  var t;
  return ((t = [
    ...po,
    ...hc,
    ...fo
  ].find(({ value: r }) => r === e)) == null ? void 0 : t.text) || e;
}, ut = {
  atAGlance: {
    targetIdName: "at-a-glange",
    text: "At a glance"
  },
  applicationRequirements: {
    targetIdName: "application-requirements",
    text: "App. Requirements"
  },
  degreeRequirements: {
    targetIdName: "degree-requirements",
    text: "Degree Requirements"
  },
  changeMajorRequirements: {
    targetIdName: "change-major-requirements",
    text: "Change Major Requirement"
  },
  nextSteps: {
    targetIdName: "next-steps",
    text: "Next Steps"
  },
  affordingCollege: {
    targetIdName: "affording-college",
    text: "Affording College"
  },
  flexibleDegreeOptions: {
    targetIdName: "flexible-degree-options",
    text: "Flexible Degree Options",
    acceleratedId: "flexible-accelerated-options",
    concurrentId: "flexible-concurrent-options"
  },
  careerOutlook: {
    targetIdName: "career-outlook",
    text: "Career outlook"
  },
  exampleCareers: {
    targetIdName: "example-careers",
    text: "Example Careers"
  },
  // TODO: To be implemented
  // customizeYourCollegeExperience?: CustomizeYourCollegeExperienceProps
  globalOpportunity: {
    targetIdName: "global-opportunity",
    text: "Global opportunities"
  },
  attendOnline: {
    targetIdName: "attend-online",
    text: "Attend Online"
  },
  whyChooseAsu: {
    targetIdName: "why-choose-asu",
    text: "Why Choose ASU"
  },
  programContactInfo: {
    targetIdName: "program-contact-info",
    text: "Program Contact Information"
  }
}, fm = {
  TEMPE: {
    text: "Tempe campus",
    url: "https://campus.asu.edu/tempe"
  },
  POLY: {
    text: "Polytechnic campus",
    url: "https://campus.asu.edu/polytechnic"
  },
  WEST: {
    text: "West Valley campus",
    url: "https://campus.asu.edu/west"
  },
  DTPHX: {
    text: "Downtown Phoenix campus",
    url: "https://campus.asu.edu/downtown-phoenix"
  },
  EAC: {
    text: "ASU at The Gila Valley",
    url: "https://admission.asu.edu/transfer/thegilavalley"
  },
  CAC: {
    text: "ASU at Pinal",
    url: "https://admission.asu.edu/transfer/pinal"
  },
  ONLNE: {
    text: "Online",
    url: "https://asuonline.asu.edu"
  },
  CALHC: {
    text: "ASU at Lake Havasu",
    url: "https://havasu.asu.edu"
  },
  COCHS: {
    text: "ASU at Cochise",
    url: "https://admission.asu.edu/transfer/asu-cochise"
  },
  WASHD: {
    text: "ASU at Washington D.C.>",
    url: "https://washingtondc.asu.edu"
  },
  YAVAP: {
    text: "ASU at Yavapai",
    url: "https://admission.asu.edu/transfer/asuyavapai"
  },
  PIMA: {
    text: "ASU at Pima",
    url: "https://admission.asu.edu/transfer/pima"
  },
  NEAZ: {
    text: "ASU at Northeastern Arizona",
    url: "https://admission.asu.edu/transfer/asu-northeastern-arizona"
  },
  LOSAN: {
    text: "ASU at Los Angeles",
    url: "https://california.asu.edu"
  },
  "TUCSN-undergrad": {
    text: "ASU at Tucson",
    url: "https://transfer.asu.edu/tucson"
  },
  "TUCSN-graduate": {
    text: "ASU at Tucson",
    url: "https://admission.asu.edu/contact/graduate"
  },
  MXCTY: {
    text: "ASU at Mexico City",
    url: "https://admission.asu.edu/contact/graduate"
  },
  "AWC-undergrad": {
    text: "ASU at Yuma",
    url: "https://admission.asu.edu/transfer/asu-yuma"
  },
  "AWC-graduate": {
    text: "ASU at Yuma",
    url: "https://admission.asu.edu/contact/graduate"
  }
}, el = (e, t) => {
  const r = ["TUCSN", "AWC"], n = e.toUpperCase(), a = r.includes(n) ? `${n}-${t}` : n;
  return fm[a];
};
function gc({ anchorMenu: e }) {
  var n, a;
  const t = (n = e == null ? void 0 : e.externalAnchors) == null ? void 0 : n.map((s) => {
    const { targetIdName: p, text: m } = s;
    return {
      targetIdName: p.startsWith("#") ? p.substring(1) : p,
      text: m,
      icon: null
    };
  }), r = Object.keys(ut).filter((s) => e[s]).map((s) => ut[s]).concat(t || []);
  return /* @__PURE__ */ d.jsx(
    Nl,
    {
      items: r,
      firstElementId: (a = r[0]) == null ? void 0 : a.targetIdName,
      focusFirstFocusableElement: !1
    }
  );
}
gc.propTypes = {
  anchorMenu: E.shape(uo)
};
function mm(e, t) {
  const r = Math.floor(e / t), n = e % t;
  return r + (n > 0 ? 1 : 0);
}
const hm = "https://degrees.apps.asu.edu", gm = "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan/", bm = {
  endpoint: "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plans",
  filter: "activeInDegreeSearch",
  include: `applicationDeadlines,owners,acadPlanMarketingDescription,
    acadPlanCode,degreeDescriptionShort,acadPlanDescription,
    degreeDescriptionText,majorMapSubplans,majorMapOnline,majorMapGeneral,
    acceleratedAcadPlanCodes,concurrentAcadPlanCodes,academicOfficeUrl,
    academicOfficeLocation,marketingText,fullDescription,customText,
    mathIntensityCode,mathIntensityDescription,firstMathCourseRequired,
    mathRequired,emailAddr,campusesOffered,changeMajorRequirementsText,
    additionalFee,firstMathCourseRequiredSupplementalText,degreeType`,
  degreeType: "UG"
}, ym = {
  acadPlan: null,
  endpoint: "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan",
  include: `applicationDeadlines,owners,acadPlanMarketingDescription,
  acadPlanCode,degreeDescriptionShort,acadPlanDescription,
  degreeDescriptionText,majorMapSubplans,majorMapOnline,majorMapGeneral,
  acceleratedAcadPlanCodes,concurrentAcadPlanCodes,academicOfficeUrl,
  academicOfficeLocation,marketingText,fullDescription,customText,
  mathIntensityCode,mathIntensityDescription,firstMathCourseRequired,
  mathRequired,emailAddr,campusesOffered,changeMajorRequirementsText,
  careerData,careerOpportunities,globalExperienceText,
  firstMathCourseRequiredSupplementalText,stemOptText,
  admissionsRequirementsText,transferAdmissionRequirementsText,
  asuOnlineAcadPlanUrl,degreeType,degreeRequirements,
  graduateDegreeAdditionalRequirements,minorCourseRequirements,subplans,
  professionalLicensureAdditionalText,professionalLicensureStandardText`
}, tl = (e) => e.map((t) => ({
  title: t.acadPlanDescription,
  url: t.academicOfficeUrl
})).sort((t, r) => t.title.localeCompare(r.title)), xm = (e) => e == null ? void 0 : e.map((t) => ({
  career: {
    text: t.alternateTitle,
    url: `${hm}/career-details/${t.onetCode}`
  },
  growth: t.growth,
  medianSalary: t.salary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }),
  brightOutlook: !!t.brightOutlook,
  greenOccupation: !!t.green
}));
function bc(e, t) {
  const r = { ...t, ...e };
  if (r.collegeAcadOrg && (r.collegeOrg = r.collegeAcadOrg, delete r.collegeAcadOrg), r.program) {
    const { program: m } = r;
    r.cert === "true" && m === "all" ? r.degreeType = "GR,UGCM" : m === "all" ? r.degreeType = "GR,UG" : r.cert === "true" && m === "undergrad" ? r.degreeType = "UGCM" : m === "graduate" ? r.degreeType = "GR" : r.degreeType = "UG", delete r.program;
  }
  r.acadPlan && (r.endpoint += `/${r.acadPlan}`, delete r.acadPlan);
  const { endpoint: n, ...a } = r, s = (m, b) => !b || m === void 0 ? "" : Array.isArray(b) ? `${m}=${b}` : b.split(",").map((f) => `${m}=${f.trim()}`).join("&"), p = Object.keys(a).reduce(
    (m, b) => `${m}&${s(
      b,
      r[b]
    )}`,
    ""
  );
  return `${n}?${p}`;
}
function Pa(e, t = "h2") {
  return (
    /** @type {keyof JSX.IntrinsicElements} */
    dc.includes(e.component) ? e.component : t
  );
}
function Wi(e) {
  return typeof e != "string" ? console.error("Invalid string", e) : e == null ? void 0 : e.replace(
    /\w\S*/g,
    (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
  );
}
function vm(e) {
  return /<\/?[a-z][\s\S]*>/i.test(e);
}
const yc = "AsuDevTools", wm = {
  isDebug: !1
};
function Sm() {
  const e = JSON.parse(localStorage.getItem(yc));
  return e == null ? void 0 : e.isDebug;
}
window.__AsuDevTools = {
  enableDebug(e) {
    const t = JSON.stringify({
      ...wm,
      isDebug: e
    });
    localStorage.setItem(yc, t);
  }
};
async function Si(e) {
  return e != null && e.length ? (await Promise.all(
    e.map(async (r) => {
      try {
        return await (await Promise.race([
          fetch(
            `${gm}${r}?include=academicOfficeUrl&include=acadPlanDescription`
          ),
          // Timeout after 5 seconds
          new Promise(
            (s, p) => setTimeout(() => p(new Error("timeout")), 1e4)
          )
        ])).json();
      } catch (n) {
        return console.error(
          `Error fetching academic plan for code ${r}:`,
          n
        ), null;
      }
    })
  )).filter((r) => r !== null) : [];
}
function km(e, t) {
  Promise.all(e).then((r) => {
    const n = r[0], a = r[1];
    t({ accelerateData: n, concurrentData: a });
  }).catch(() => {
    t({ accelerateData: [], concurrentData: [] });
  });
}
function Un({ contents: e = [] }) {
  const t = Vr("paragrap-");
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.map(
    (r) => vm(r.text) ? /* @__PURE__ */ d.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Yt(r.text)
      },
      t.next().value
    ) : /* @__PURE__ */ d.jsx(
      "p",
      {
        className: `${tn(r.cssClass)}`,
        children: r.text
      },
      t.next().value
    )
  ) });
}
Un.propTypes = {
  contents: E.arrayOf(ja)
};
const Tm = Ia`
  .uds-image-overlap {
    padding-top: 0;
    width: auto;
    align-items: center;

    &:after{
      height: 100%;
    }
    @media (max-width: 768px) {
      padding-top: 1.5rem !important;
    }
  }
`, Cm = Je.div`
  .uds-image-overlap.content-right &.content-wrapper,
  .uds-image-overlap.content-left &.content-wrapper {
    height: fit-content;
  }

  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 992px) {
    .uds-image-overlap.content-left &.content-wrapper {
      padding-left: 0;
    }

    .uds-image-overlap.content-right &.content-wrapper {
      padding: 2.5rem;

      h2 {
        margin-top: 0;
      }
    }
  }
`, Em = Je.img`
  .uds-image-overlap & {
    width: 100%;
    height: 100%;
    grid-row: 2/5;
    object-fit: cover;
  }

  .uds-image-overlap.content-right & {
    grid-row: 1 / span 3;
  }
`;
function nn({
  title: e,
  image: t,
  contentDirection: r = "left",
  contents: n = [],
  contentChildren: a = null,
  headingTag: s = "H3"
}) {
  const p = Wr(), m = Wr(), b = Pa(s);
  function f() {
    const A = p.current.offsetHeight;
    m.current.style.height = `${A * 1.2}px`;
  }
  return At(() => {
    f();
    let k;
    const A = () => {
      clearTimeout(k), k = setTimeout(() => f(), 150);
    };
    return window.addEventListener("resize", A), () => window.removeEventListener("resize", A);
  }, [m, p]), /* @__PURE__ */ d.jsxs("div", { className: `uds-image-overlap content-${r}`, children: [
    /* @__PURE__ */ d.jsx(Tm, {}),
    /* @__PURE__ */ d.jsx(
      Em,
      {
        ref: m,
        className: "img-fluid",
        src: t == null ? void 0 : t.url,
        alt: t == null ? void 0 : t.altText,
        onError: (k) => {
          k.currentTarget.style.display = "none";
        }
      }
    ),
    /* @__PURE__ */ d.jsxs(Cm, { ref: p, className: "content-wrapper", children: [
      /* @__PURE__ */ d.jsx(b, { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: e }) }),
      /* @__PURE__ */ d.jsx(Un, { contents: n }),
      a
    ] })
  ] });
}
nn.propTypes = {
  headingTag: E.string,
  title: E.string,
  contentDirection: E.oneOf(["left", "right"]),
  contents: E.arrayOf(
    E.shape({
      text: E.string
    })
  ),
  image: kr,
  contentChildren: E.element
};
const xc = Ia`
  :root {
    --uds-dp-section-margin: 96px;
  }

  @media (max-width: 768px) {
    :root {
      --uds-dp-section-margin: 48px;
    }
  }

  .element-focus:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #191919 !important;
  }

  div[class^=uds-hero] h1 {
    margin-left: 0.15em;

    span {
      margin-left: 0;
    }
  }

  h1 span.highlight-gold,
  h2 span.highlight-gold{
    margin-left: 0.15em;
  }

  .card > .card-buttons {
    padding-bottom: 8px !important;
  }
`, vc = Je.main`
  &.dg-margin-top {
    margin-top: var(--uds-dp-section-margin);
  }

  &.main-section > section:not(.no-space),
  & > section section:not(.no-space) {
    margin-bottom: var(--uds-dp-section-margin);

    & > * {
      margin-top: 0;
      padding-top: 0;
    }

    & h2 {
      line-height: 1;
    }
  }
`;
function Am({
  baseIconClassName1: e,
  baseIconAriaLabel1: t,
  baseIconStyle1: r,
  baseIconAriaLabel2: n,
  baseIconClassName2: a,
  baseIconStyle2: s,
  ariaLabel: p,
  ariaControls: m,
  dataId: b,
  onClick: f = () => null
}) {
  const [k, A] = ct(!1), O = (C, N, L, $) => /* @__PURE__ */ d.jsx(
    "span",
    {
      style: {
        cursor: "pointer",
        display: N
      },
      children: /* @__PURE__ */ d.jsx(
        "i",
        {
          className: `${C}`,
          "aria-label": L,
          title: L,
          style: $
        }
      )
    }
  ), U = () => {
    A(!k), f(!k);
  }, _ = /* @__PURE__ */ d.jsxs(
    "span",
    {
      "data-testid": b,
      role: "button",
      className: "element-focus",
      tabIndex: 0,
      onKeyDown: (C) => C.key === "Enter" && U(),
      onClick: U,
      "aria-label": p,
      "aria-expanded": k,
      "aria-controls": m,
      children: [
        O(
          e,
          k ? "" : "none",
          t,
          r
        ),
        O(
          a,
          k ? "none" : "",
          n,
          s
        )
      ]
    }
  );
  return dl(() => _, [k]);
}
Je.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1070;
  display: block;
  max-width: 276px;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  display: none;

  &[data-width-auto="true"] {
    max-width: none;
  }

  &[data-show="true"] {
    display: block;
  }

  & .popover-header {
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    font-size: 1rem;
    background-color: #f0f0f0;
    border-bottom: 1px solid #d8d8d8;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
  }

  & .popover-body {
    padding: 1rem 1rem;
    color: #212529;
  }

  #arrow,
  #arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
  }

  #arrow {
    visibility: hidden;
  }

  #arrow::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
  }

  &[data-popper-placement^="top"] > #arrow {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > #arrow {
    top: -4px;
  }

  &[data-popper-placement^="left"] > #arrow {
    right: -4px;
  }

  &[data-popper-placement^="right"] > #arrow {
    left: -4px;
  }
`;
const ki = (e) => /* @__PURE__ */ d.jsx("span", {}), _m = ({
  onClick: e = () => null,
  ariaLabel: t,
  ariaControls: r,
  dataId: n
}) => Am({
  dataId: n,
  baseIconClassName1: "fas fa-chevron-up",
  baseIconClassName2: "fas fa-chevron-down",
  onClick: e,
  ariaLabel: t,
  ariaControls: r
}), an = ll(null), mo = ({ listPageProps: e, detailPageProps: t, children: r }) => {
  const { detailPageDefault: n, listingPageDefault: a } = dl(
    () => lm((e || t).appPathFolder),
    []
  ), s = {
    detailPageDefault: n,
    listingPageDefault: a
  }, p = {
    listPageProps: e,
    detailPageProps: t
  };
  return /* @__PURE__ */ d.jsx(
    an.Provider,
    {
      value: {
        state: p,
        defaultState: s
      },
      children: r
    }
  );
};
mo.propTypes = {
  children: E.oneOfType([
    E.arrayOf(E.element),
    E.element
  ]),
  listPageProps: E.shape({}),
  detailPageProps: E.shape({})
};
const Om = ({
  dataSource: e,
  tableView: t = [],
  programs: r,
  stateFilters: n
}) => {
  const { collegeAcadOrg: a, departmentCode: s } = e;
  At(() => {
    if (!r || !Sm()) return;
    const p = "background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;", m = "font-size:30px;", b = "font-size:24px;", f = "font-size: 18px; margin-left: 0.5rem;";
    console.group("<< ASU Degree Page >>"), console.log("%c🏫 Listing Page Programs 📚", p + m), console.log(
      `%cTotal programs found: ${r.length}`,
      p + f
    ), console.log("%cPrograms found", p + f), console.log(r), console.log(
      `%cTotal programs loaded: ${t.length}`,
      p + f
    ), console.log("%cPrograms loaded", p + f), console.log(t), console.log("%cPage Filters", p + b), console.log(
      `%c- collegeAcadOrg:${a}`,
      p + f
    ), console.log(
      `%c- departmentCode:${s}`,
      p + f
    ), console.log("%cSearch Filters", p + b), console.log(n), console.groupEnd();
  });
}, rl = (e) => e.degreeType === "UG", wc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, Sc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, jm = (e) => Object.keys(e).length > 0 ? Sc(e) || wc(e) : !0, An = (e) => {
  const { owners: t } = e;
  return t ? t.reduce(
    (n, a) => n.percentOwned > a.percentOwned ? n : a
  ) : null;
};
function Yr(e = {}) {
  return {
    getMajorDesc: () => e.acadPlanMarketingDescription,
    getInstitution: () => "ASU00",
    getAcadPlan: () => e.acadPlanCode,
    /** @returns {string} */
    getDegree: () => {
      let t = e.degreeDescriptionShort || e.acadPlanTypeDescription;
      return t === "CERT" && (t = "Certificate"), t;
    },
    /** @returns {string} */
    getGeneralDegreeMajorMap: () => {
      const { majorMapGeneral: t } = e, r = t == null ? void 0 : t.find(
        (n) => n.defaultFlag === !0
      );
      return (r == null ? void 0 : r.url) || "";
    },
    isUndergradProgram: () => rl(e),
    isPhdOrMasters: () => e.degreeDescriptionShort !== "CERT",
    // Only called in functions that already checked if its a grad program
    isGradProgram: () => e.degreeType === "GR",
    // GR is present for grad degrees and grad certificates
    isMinorOrCertificate: () => e.degreeType === "UGCM" || e.degreeType === "GR" && e.acadPlanTypeDescription === "Certificate",
    /** @returns {"undergrad" |  "graduate"} */
    getProgramType: () => rl(e) ? "undergrad" : "graduate",
    getDegreeDesc: () => e.degreeDescriptionLong,
    getDegreeDescLong: () => e.degreeDescriptionText,
    getFullDescription: () => e.fullDescription,
    getCurriculumUrl: () => {
      var t;
      return (t = e.asuOnlineAcadPlanUrl) == null ? void 0 : t.trim();
    },
    getAdmissionsRequirementsText: () => e.admissionsRequirementsText,
    getMinorCourseRequirements: () => e.minorCourseRequirements,
    getTransferAdmission: () => e.transferAdmissionRequirementsText,
    getGraduateRequirements: () => {
      const t = e.graduateDegreeAdditionalRequirements;
      let r = "";
      if ((t == null ? void 0 : t.length) > 0) {
        const a = t.join(", or<br />");
        r = a ? `<p>${a}</p>` : "";
      } else
        r = e.degreeMajorMap || "";
      const n = e.degreeRequirements || "";
      return `${r}${n}`;
    },
    isOnline: () => e.asuOnlineAcadPlanUrl,
    // Returns null if online url is not available
    // See getGeneralDegreeMajorMap for more info
    getOnlineMajorMapURL: () => {
      var n;
      const t = e.majorMapOnline, r = t == null ? void 0 : t.find(
        (a) => a.defaultFlag === !0
      );
      return r ? (r == null ? void 0 : r.url) || "" : (n = t == null ? void 0 : t[t.length - 1]) == null ? void 0 : n.url;
    },
    hasCareerData: () => {
      var t;
      return (t = e.careerData) == null ? void 0 : t.length;
    },
    getCareerData: () => e.careerData || [],
    /** @return {Object[]} */
    getCampusList: () => e.campusesOffered || [],
    hasConcurrentOrAccelerateDegrees: () => {
      var t, r;
      return ((t = e.acceleratedAcadPlanCodes) == null ? void 0 : t.length) || ((r = e.concurrentAcadPlanCodes) == null ? void 0 : r.length);
    },
    hasAccelerateDegrees: () => {
      var t;
      return (t = e.acceleratedAcadPlanCodes) == null ? void 0 : t.length;
    },
    hasConcurrentDegrees: () => {
      var t;
      return (t = e.concurrentAcadPlanCodes) == null ? void 0 : t.length;
    },
    getAccelerateDegrees: async () => e.acceleratedAcadPlanCodes ? Si(e.acceleratedAcadPlanCodes) : [],
    getConcurrentDegrees: async () => e.concurrentAcadPlanCodes ? Si(e.concurrentAcadPlanCodes) : [],
    getCollegeDesc: () => {
      var t;
      return (t = An(e)) == null ? void 0 : t.collegeDescription;
    },
    getCollegeUrl: () => {
      var t;
      return ((t = An(e)) == null ? void 0 : t.collegeUrl) || "";
    },
    /** @return {string} */
    getEmailAddress: () => e.emailAddr,
    /** @return {string} */
    getPhone: () => {
      var t;
      return (t = e.phoneNumber) == null ? void 0 : t.replace("/", "-");
    },
    /** @return {string} */
    getProfessionalLicensureText() {
      const t = e.professionalLicensureStandardText || "", r = e.professionalLicensureAdditionalText || "", n = `${t}${r}`;
      try {
        if (new DOMParser().parseFromString(n, "text/html").querySelector("parsererror"))
          return "";
      } catch (a) {
        return console.error("Error parsing HTML: ", a.message), "";
      }
      return n;
    },
    /** @return {string} */
    getDepartmentName: () => {
      var t;
      return (t = An(e)) == null ? void 0 : t.departmentDescription;
    },
    /** @return {string} */
    getPlanUrl: () => e.academicOfficeUrl,
    // AsuProgramFee
    hasAsuProgramFee: () => e.additionalFee,
    // AsuLangReqFlag
    getAsuLangReqFlag: () => e.languageRequired,
    hasAsuLangReqFlag: () => e.languageRequired,
    // asuMathReqFlag
    hasMathReqFlag: () => e.mathRequired,
    getOtherMathReqCourse: () => e.firstMathCourseRequiredSupplementalText,
    getMathIntensity: () => e.mathIntensityDescription,
    /** @return {string} */
    getMinMathReq: () => {
      const t = e.firstMathCourseRequired;
      if (!t) return "";
      const { subject: r, catalogNumber: n, description: a } = t;
      return `${r} ${n} - ${a}`;
    },
    /** @return {string} */
    getMarketText: () => {
      var t;
      return (t = e.marketingText) == null ? void 0 : t.trim();
    },
    /** @return {string} */
    getAsuOfficeLoc: () => e.academicOfficeLocation || "",
    /** @return {string} */
    getCampusWue: () => {
      var r;
      const t = e.campusesOffered;
      return t ? (r = t == null ? void 0 : t.find((n) => n.wue === !0)) == null ? void 0 : r.campusCode : null;
    },
    getConcurrentDegreeMajorMaps: () => Si(e.concurrentAcadPlanCodes),
    getChangeMajor: () => e.changeMajorRequirementsText,
    getAsuCareerOpportunity: () => e.careerOpportunities,
    getGlobalExp: () => {
      var t;
      return (t = e.globalExperienceText) == null ? void 0 : t.trim();
    },
    /** @return {string} */
    getCollegeAcadOrg: () => {
      var t;
      return (t = An(e)) == null ? void 0 : t.collegeAcadOrg;
    },
    /** @return {Array} */
    getCollegeAcadOrgJoint: () => {
      const { owners: t } = e;
      return t ? t.map((n) => n.collegeAcadOrg) : [];
    },
    /** @return {string} */
    getDepartmentCode: () => {
      var t;
      return (t = An(e)) == null ? void 0 : t.departmentAcadOrg;
    },
    /** @return {Object.<string, string>} */
    getGraduateApplyDates: () => e.applicationDeadlines,
    hasGraduateApplyDates: () => wc(e),
    /** @return {Object.<string, string>} */
    getPlanDeadlines: () => e.applicationDeadlines,
    hasPlanDeadlines: () => Sc(e),
    isValidActiveProgram: () => jm(e),
    /** @return {boolean} */
    getAsuDegSrchFlg: () => e.activeInDegreeSearch,
    getAsuCustomText: () => e.customText,
    getRequiredCoursesLabel: () => e.acadPlanTypeDescription === "Minor" ? "Minor" : e.acadPlanTypeDescription === "Certificate" ? "Certificate" : "Major",
    getStemOptText: () => e.stemOptText,
    hasStemOptText: () => {
      const t = e.stemOptText;
      return t && t !== "" ? "Yes" : "No";
    },
    getSubPlnMajorMaps: () => {
      if (!e.subplans || !e.majorMapSubplans) return [];
      let t = [...e.subplans].filter(
        (k) => k.campusesOffered
      );
      const r = [...e.majorMapSubplans], n = (k) => {
        if (!k || k.length !== 4) return !1;
        const A = (/* @__PURE__ */ new Date()).getFullYear();
        return parseInt(`20${k.substring(0, 2)}`, 10) >= A;
      }, a = (k, A) => k.filter((O) => O.acadSubPlanCode !== A), s = (k, A) => k.some((O) => O.acadSubPlanCode === A), p = (k, A) => A.some(
        (O) => O.acadSubPlanCode === k.acadSubPlanCode
      ), m = t.filter(
        (k) => k.timePeriod && n(k.timePeriod)
      ), b = r.some(
        (k) => k.defaultFlag || s(t, k.acadSubPlanCode)
      ), f = [];
      for (const k of r)
        k.timePeriod && n(k.timePeriod) && !p(k, f) && (f.push(k), t = a(t, k.acadSubPlanCode));
      if (!b) {
        for (const k of r)
          !p(k, f) && s(m, k.acadSubPlanCode) && f.push(k);
        return f;
      }
      for (let k = r.length - 1; k >= 0 && t.length !== 0; k -= 1) {
        const A = r[k];
        if (p(A, f)) continue;
        const O = A.defaultFlag, U = s(
          t,
          A.acadSubPlanCode
        );
        (O || U) && (t = a(t, A.acadSubPlanCode), f.push(A));
      }
      return f;
    },
    getSubPln: () => e.subplans
  };
}
function Nm(e) {
  const t = e.getProgramType(), r = [], n = (m) => ({
    text: m,
    url: ""
  }), a = (m) => ({
    text: "Online",
    url: m
  }), s = e.getCampusList().map((m) => m.campusCode);
  s.length > 0 && r.push(
    ...s.map(
      (m) => m === "ONLNE" && a(e.getCurriculumUrl()) || el(m, t) || n(m)
    )
  );
  const p = e.getCampusWue();
  return p && r.push(
    el(p, t) || n(p)
  ), r;
}
const Rm = (e, t) => {
  const r = { ...e };
  return r.globalOpportunity && !t.getGlobalExp() && (r.globalOpportunity = !1), r.careerOutlook && !t.getAsuCareerOpportunity() && (r.careerOutlook = !1), r.attendOnline && !t.getCurriculumUrl() && (r.attendOnline = !1), r;
}, Im = (e) => {
  var a;
  const t = Object.values(e).filter(
    (s) => s === !0
  );
  return ((a = e == null ? void 0 : e.externalAnchors) == null ? void 0 : a.length) > 0 || t.length > 0;
};
function Pm(e) {
  return "";
}
function Dm(e) {
  return "";
}
function Lm() {
  return "";
}
function Da(e, t) {
  let r = t || "";
  return r = r.replaceAll("{INSTITUTION_CODE}", e.getInstitution()).replaceAll("{ACAD_PLAN_CODE}", e.getAcadPlan()), r;
}
function kc(e, t) {
  return `${Da(e, t)}#${ut.flexibleDegreeOptions.acceleratedId}`;
}
function nl({
  programs: e = [],
  filters: {
    collegeAcadOrg: t,
    departmentCode: r,
    acceleratedConcurrent: n,
    locations: a = [],
    keyword: s,
    blacklistAcadPlans: p,
    program: m,
    showCerts: b
  }
}) {
  const f = (z) => !t || z.getCollegeAcadOrgJoint().includes(t), k = (z) => !r || z.getDepartmentCode().includes(r), A = (z) => {
    var w;
    return !a.length || ((w = z.getCampusList()) == null ? void 0 : w.some((ee) => a.some((ue) => ue.value === ee.campusCode)));
  }, O = (z = {}) => {
    var w;
    return !Bi(n) || ((w = z[n.value]) == null ? void 0 : w.length) > 0;
  }, U = (z, w) => !!(!w || new RegExp(w, "i").test(z.getMajorDesc())), _ = (z, w) => !!(!w || new RegExp(w, "i").test(z.getFullDescription())), C = (z) => !(p != null && p.includes(z.getAcadPlan())), N = (z) => m === "undergrad" ? !0 : b === "true" ? z.isMinorOrCertificate() : z.isPhdOrMasters(), L = (z) => {
    const w = Yr(z);
    return f(w) && k(w) && A(w) && O(z) && C(w) && N(w);
  }, $ = [], G = [];
  return e.filter((z) => {
    const w = Yr(z), ee = U(w, s), ue = _(
      w,
      s
    );
    return (ee || ue) && L(z) ? (ee ? $.push(z) : G.push(z), !0) : !1;
  }), $.concat(G);
}
const Mm = (e) => e.sort(
  (r, n) => r.acadPlanMarketingDescription.localeCompare(
    n.acadPlanMarketingDescription
  )
), Nr = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: s = "",
  region: p = "",
  component: m = ""
}) => {
  const { dataLayer: b } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: p.toLowerCase(),
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: m.toLowerCase()
  };
  b && b.push(f);
};
function ho({ breadcrumbs: e, section: t }) {
  const r = Vr("breadcrumb-");
  return e && /* @__PURE__ */ d.jsx("nav", { "aria-label": "breadcrumbs", "data-testid": "breadcrumbs", children: /* @__PURE__ */ d.jsx("ol", { className: "breadcrumb bg-white", children: e.map(
    (n) => n != null && n.isActive ? /* @__PURE__ */ d.jsx(
      "li",
      {
        className: "breadcrumb-item active",
        "aria-current": "page",
        children: /* @__PURE__ */ d.jsx(
          "a",
          {
            href: n == null ? void 0 : n.url,
            onClick: () => Nr({
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: t,
              text: n.text
            }),
            children: n.text
          }
        )
      },
      r.next().value
    ) : /* @__PURE__ */ d.jsx("li", { className: "breadcrumb-item", children: /* @__PURE__ */ d.jsx(
      "a",
      {
        href: n == null ? void 0 : n.url,
        onClick: () => Nr({
          event: "link",
          action: "click",
          name: "onclick",
          type: "internal link",
          region: "main content",
          section: t,
          text: n.text
        }),
        children: n.text
      }
    ) }, r.next().value)
  ) }) });
}
ho.propTypes = {
  breadcrumbs: E.arrayOf(Br),
  section: E.string
};
const Fm = () => /* @__PURE__ */ d.jsx("div", { className: "container", "data-testid": "browse-title", children: /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Browse degrees" }) }) }), Ti = ({
  id: e,
  label: t,
  selected: r,
  multiple: n,
  options: a,
  onChange: s
}) => /* @__PURE__ */ d.jsxs("div", { className: "form-group", children: [
  /* @__PURE__ */ d.jsx("label", { htmlFor: e, children: t }),
  /* @__PURE__ */ d.jsx(
    "select",
    {
      className: "form-select",
      id: e,
      "data-testid": e,
      multiple: n,
      onChange: (p) => s(e, p),
      value: r,
      children: a == null ? void 0 : a.map((p) => /* @__PURE__ */ d.jsx(
        "option",
        {
          id: `${p.value}-${p.id}`,
          value: p.value,
          children: p.text
        },
        p.id
      ))
    }
  )
] }), $m = Je.div`
  .hint-container {
    margin-top: -1.25rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .hint-container {
      display: none;
    }
    .filter-action-buttons {
      & {
        * {
          margin: 0;
        }
        .btn-link {
          padding: 1rem;
        }
      }
    }
  }
`, Um = Je.button`
  font-weight: 400;
  text-decoration: underline;
`, zm = {
  event: "select",
  action: "click",
  name: "onclick"
}, Hm = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link"
}, _n = {
  isActive: !1,
  locations: [],
  asuLocals: [],
  acceleratedConcurrent: { value: "all", text: "" },
  keyword: null,
  blacklistAcadPlans: []
}, Ci = (e) => ({
  id: e.id,
  value: e.value,
  text: e.text
}), qm = (e) => e.map((t) => t.text).join(", "), al = (e, t) => {
  Nr({ ...zm, type: e, text: t });
}, il = (e) => {
  Nr({ ...Hm, text: e });
}, Tc = ({ value: e, onChange: t, onApply: r, onClean: n }) => {
  const a = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (b, { target: { selectedOptions: f } }) => {
      let k = [], A = [];
      const O = Array.from(f, Ci), { locations: U, asuLocals: _ } = e;
      ({
        locationsRender: () => {
          k = O, A = _;
        },
        asuLocalsRender: () => {
          A = O, k = U;
        }
      })[`${b}Render`](), t({
        ...e,
        locations: k,
        asuLocals: A
      }), al({
        locations: "location or online",
        asuLocals: "as local"
      }[b], qm(O));
    }
  ), s = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (b, { target: { selectedOptions: f } }) => {
      t({ ...e, [b]: Ci(f[0]) }), al(
        "accelerated/concurrent",
        Ci(f[0]).text
      );
    }
  ), p = () => {
    r == null || r({
      ...e,
      isActive: !0
    });
  }, m = () => {
    t(_n), n == null || n();
  };
  return /* @__PURE__ */ d.jsxs($m, { className: "container", "data-testid": "filters", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Filter your results" }),
    /* @__PURE__ */ d.jsxs("form", { className: "mt-3 uds-form row", children: [
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        Ti,
        {
          multiple: !0,
          id: "locations",
          label: "Campuses or online",
          selected: e.locations.map((b) => b.value),
          options: po,
          onChange: a
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        Ti,
        {
          multiple: !0,
          id: "asuLocals",
          label: "ASU location, ASU Local",
          selected: e.asuLocals.map((b) => b.value),
          options: hc,
          onChange: a
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        Ti,
        {
          id: "acceleratedConcurrent",
          label: "Accelerated, Concurrent",
          selected: e.acceleratedConcurrent.value,
          options: fo,
          onChange: s
        }
      ) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "hint-container", children: /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("small", { children: "*CTRL + Click to select multiple" }) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "filter-action-buttons", children: [
      /* @__PURE__ */ d.jsx(
        Tr,
        {
          "data-testid": "btn-apply-filter",
          color: "maroon",
          label: "Apply filters",
          ariaLabel: "Apply filters",
          size: "default",
          onClick: () => {
            p(), il("apply filters");
          }
        }
      ),
      /* @__PURE__ */ d.jsx(
        Um,
        {
          "data-testid": "btn-clear-filters",
          className: "btn btn-link",
          onClick: () => {
            m(), il("clean filters");
          },
          children: "Clear filters"
        }
      )
    ] })
  ] });
};
Tc.propTypes = {
  value: uc,
  onChange: E.func,
  onApply: E.func,
  onClean: E.func
};
function Cc({
  value: { isActive: e, locations: t, asuLocals: r, acceleratedConcurrent: n } = {},
  onRemove: a
}) {
  const s = Vr("filter-"), p = (t == null ? void 0 : t.length) + (r == null ? void 0 : r.length) + (Bi(n) ? 1 : 0), m = (b, f) => {
    const { text: k } = f;
    return /* @__PURE__ */ d.jsxs(
      "span",
      {
        tabIndex: -1,
        role: "button",
        "aria-label": `Remove filter ${k}`,
        "data-filter-id": b,
        onKeyDown: () => a(b, f),
        onClick: () => a(b, f),
        className: "btn btn-tag btn-tag-alt-white d-inline-flex align-items-center me-2",
        children: [
          /* @__PURE__ */ d.jsx("span", { className: "pe-1", children: k }),
          /* @__PURE__ */ d.jsx("i", { className: "fas fa-times" })
        ]
      },
      s.next().value
    );
  };
  return /* @__PURE__ */ d.jsxs("div", { "data-testid": "filters-summary", children: [
    /* @__PURE__ */ d.jsx("header", { children: /* @__PURE__ */ d.jsx("strong", { children: "Applied filters" }) }),
    /* @__PURE__ */ d.jsx("div", { "data-testid": "summary-filter-tags", children: !e || p === 0 ? /* @__PURE__ */ d.jsx("span", { children: "No filters applied" }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      t.map((b) => m("locations", b)),
      r.map((b) => m("asuLocals", b)),
      (Bi(n) ? [n] : []).map((b) => m("acceleratedConcurrent", b))
    ] }) })
  ] });
}
Cc.propTypes = {
  value: uc,
  onRemove: E.func
};
const Bm = Je.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`, Wm = Je.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;
function Gm({
  applyNowUrl: e,
  title: t,
  contents: r,
  photoGrid: n
}) {
  const a = Pa(t);
  return /* @__PURE__ */ d.jsx(
    "section",
    {
      className: "container",
      "data-type": "text-photo-grid",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ d.jsx(a, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${tn(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ d.jsx(Un, { contents: r }),
          /* @__PURE__ */ d.jsx($n, { href: e })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-7 d-none d-sm-none d-md-block", children: /* @__PURE__ */ d.jsx(Bm, { className: "row", children: n.images.map((s, p) => /* @__PURE__ */ d.jsx(
          "div",
          {
            className: "photo-item col-sm-12 col-md-6 col-lg-6",
            children: /* @__PURE__ */ d.jsx(
              "img",
              {
                className: `mg-fluid ${tn(s.cssClass)}`,
                src: s.url,
                alt: s.altText,
                style: { maxWidth: "100%" }
              }
            )
          },
          `img-${p + 1}`
        )) }) })
      ] })
    }
  );
}
function Ym({
  applyNowUrl: e,
  title: t,
  contents: r,
  image: n,
  video: a
}) {
  const s = Pa(t);
  return /* @__PURE__ */ d.jsx(
    Wm,
    {
      className: "container",
      "data-type": "text-media",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ d.jsxs("div", { className: "row gy-3", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ d.jsx(s, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${tn(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ d.jsx(Un, { contents: r }),
          /* @__PURE__ */ d.jsx($n, { href: e })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7 mt-2 mt-sm-0", children: [
          a && /* @__PURE__ */ d.jsx(
            ro,
            {
              type: a.type,
              url: a.url,
              vttUrl: a.vttUrl,
              title: a.title,
              className: "mt-0"
            }
          ),
          n && /* @__PURE__ */ d.jsx("div", { className: "uds-img", children: /* @__PURE__ */ d.jsx("img", { src: n.url, className: "img-fluid", alt: n.altText }) })
        ] })
      ] })
    }
  );
}
function Vm({
  applyNowUrl: e,
  title: t,
  contents: r,
  image: n
}) {
  return /* @__PURE__ */ d.jsx(
    "section",
    {
      className: "container",
      "data-type": "text-image-overlay",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ d.jsx("div", { className: "row", children: /* @__PURE__ */ d.jsx("div", { className: "col-md-12", children: /* @__PURE__ */ d.jsx(
        nn,
        {
          title: t.text,
          contents: r,
          image: n,
          contentDirection: "right",
          contentChildren: /* @__PURE__ */ d.jsx("div", { className: "mt-2", children: /* @__PURE__ */ d.jsx($n, { href: e }) })
        }
      ) }) })
    }
  );
}
const Km = ({ applyNowUrl: e, title: t, contents: r }) => {
  const n = Pa(t);
  return /* @__PURE__ */ d.jsx("section", { className: "container", "data-type": "text", "data-testid": "intro-content", children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-5", children: /* @__PURE__ */ d.jsx(n, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${tn(t.cssClass)}`, children: t.text }) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7", children: [
      /* @__PURE__ */ d.jsx(Un, { contents: r }),
      /* @__PURE__ */ d.jsx($n, { href: e })
    ] })
  ] }) });
}, go = ({
  applyNowUrl: e,
  type: t,
  title: r,
  contents: n,
  image: a,
  video: s,
  photoGrid: p
}) => ({
  text: () => Km({ applyNowUrl: e, title: r, contents: n }),
  "text-media": () => Ym({
    applyNowUrl: e,
    title: r,
    contents: n,
    image: a,
    video: s
  }),
  "text-image-overlay": () => Vm({ applyNowUrl: e, title: r, contents: n, image: a }),
  "text-photo-grid": () => Gm({
    applyNowUrl: e,
    title: r,
    contents: n,
    photoGrid: p
  }),
  undefined: () => (console.error(
    `the type '${t}' is not supported by the 'IntroContent' component.`
  ), null)
})[t]();
go.propTypes = {
  applyNowUrl: E.string,
  type: E.oneOf([
    "text",
    "text-media",
    "text-image-overlay",
    "text-photo-grid"
  ]).isRequired,
  video: E.shape({ ...co }),
  image: E.shape({ ...lo }),
  header: ja,
  title: E.shape({
    ...oc,
    component: E.oneOf(dc)
  }),
  contents: E.arrayOf(ja),
  photoGrid: E.shape({
    images: E.arrayOf(kr)
  })
};
const La = {
  programs: E.arrayOf(E.object),
  totalRows: E.number,
  loading: E.bool,
  actionUrls: E.shape({
    applyNowUrl: E.string,
    majorInfoUrl: E.string,
    majorInfoOnlineUrl: E.string
  }),
  degreesPerPage: E.number
}, Xm = Je.div`
  & {
    ul {
      margin-top: 1.5rem;
      margin-bottom: 0;
      list-style: none;
      padding: 0;

      li:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
  .accordion .card.card-foldable {
    border-bottom: 1px solid #d0d0d0;
  }
`, Ec = ({ programs: e, actionUrls: t }) => {
  var p, m, b, f, k;
  const { state: r } = Vt(an), n = (m = (p = r == null ? void 0 : r.listPageProps) == null ? void 0 : p.programList) == null ? void 0 : m.settings, a = ((k = (f = (b = r == null ? void 0 : r.listPageProps) == null ? void 0 : b.programList) == null ? void 0 : f.dataSource) == null ? void 0 : k.program) === "graduate", s = e.map((A) => {
    const O = Yr(A), U = () => {
      var $;
      const N = O.isOnline() ? O.getOnlineMajorMapURL() : O.getGeneralDegreeMajorMap();
      let L;
      try {
        L = `<a href=${($ = new URL(N)) == null ? void 0 : $.toString()}>${O.getRequiredCoursesLabel()} Map</a>`;
      } catch {
        return "";
      }
      return L;
    }, _ = () => `<div>
        ${O.hasConcurrentDegrees() ? "<div className='cell-container'>concurrent</div>" : ""}
        ${O.hasAccelerateDegrees() ? `<div className="cell-container">
                <a href=${kc(
      O,
      t.majorInfoUrl
    )}>
                  4+1 years
                </a>
              </div>` : ""}
    </div>`;
    return {
      content: {
        header: O.getMajorDesc(),
        body: `<ul>
        <li>
          <strong>Major:</strong>
          <br />
            <a href=${Da(O, t.majorInfoUrl)}>
              ${O.getMajorDesc()}
            </a>
        </li>
        <li>
          <strong>Degree:</strong>
          <br />${O.getDegree()}
        </li>
        ${a ? "" : `<li>
              <strong>Required Courses:</strong>
              <br />${U()}
            </li>`}
        <li>
          <strong>Campus or location:</strong>
          <br />${O.getCampusList().map((C) => Wi(C.campusCode)).join(", ")}
        </li>
        <li>
          <strong>Accelerated/Concurrent:</strong>
          <br />${_() || "-"}
        </li>
        ${n != null && n.hideCollegeSchool ? "" : ` <li>
                  <strong>College/School:</strong>
                  <br />
                  <a href=${O.getCollegeUrl()}>
                    ${O.getCollegeDesc()}
                  </a>
                </li>`}
      </ul>`
      }
    };
  });
  return /* @__PURE__ */ d.jsx(Xm, { "data-testid": "accordion-view", children: /* @__PURE__ */ d.jsx(Qi, { cards: s }) });
};
Ec.propTypes = {
  ...La
};
const Jm = Je.section`
  margin: auto;

  .card-buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    order: 3;
    margin: 0 1rem 1rem;

    .card-button {
      column-gap: 0;
      padding: 0;
      width: fit-content;
    }
    .card-button .btn {
      margin: 0;
    }
  }
`;
function Ac({ programs: e, loading: t, actionUrls: r }) {
  var b, f, k, A;
  const { defaultState: n, state: a } = Vt(an), s = (A = (k = (f = (b = a == null ? void 0 : a.listPageProps) == null ? void 0 : b.programList) == null ? void 0 : f.settings) == null ? void 0 : k.cardDefaultImage) == null ? void 0 : A.url, p = n.detailPageDefault.hero.image.url, m = s || p;
  return /* @__PURE__ */ d.jsx(
    Jm,
    {
      id: fc,
      className: "container row",
      "data-loading": t,
      "data-testid": "grid-view",
      children: e.map((O) => {
        const U = Yr(O);
        return /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-4 col-lg-3 mb-2", children: /* @__PURE__ */ d.jsx(
          gt,
          {
            type: "degree",
            horizontal: !1,
            clickable: !1,
            image: m,
            imageAltText: "An example image",
            title: U.getMajorDesc(),
            linkLabel: "View Program Details",
            linkUrl: Da(U, r.majorInfoUrl),
            buttons: [
              {
                color: "maroon",
                size: "small",
                label: "Reqeuest Info",
                href: Lm()
              },
              {
                color: "gold",
                size: "small",
                label: "Apply",
                href: r.applyNowUrl
              }
            ]
          }
        ) });
      })
    }
  );
}
Ac.propTypes = {
  ...La
};
const Zm = [
  {
    dataKey: "Major",
    label: "Major",
    className: "major",
    sortable: !0,
    contentTemplate: ({ resolver: e, rowIndex: t, actionUrls: r, onClick: n }) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
      /* @__PURE__ */ d.jsx("a", { href: Da(e, r == null ? void 0 : r.majorInfoUrl), children: e.getMajorDesc() }),
      /* @__PURE__ */ d.jsx(
        _m,
        {
          dataId: "show-row-detail",
          ariaLabel: `${e.getMajorDesc()} arrow`,
          ariaControls: `row-info-${t}`,
          onClick: (a) => n(t, a)
        }
      )
    ] })
  },
  {
    dataKey: "Degree",
    label: "Degree",
    className: "degree",
    contentTemplate: ({ resolver: e }) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
      /* @__PURE__ */ d.jsx("span", { children: e.getDegree() }),
      /* @__PURE__ */ d.jsx(
        ki,
        {
          popover: {
            title: e.getDegreeDesc(),
            body: e.getDegreeDescLong(),
            withAuto: !1
          }
        }
      )
    ] })
  },
  {
    dataKey: "RequiredCourses",
    label: "Required Courses",
    className: "required-course",
    contentTemplate: ({ resolver: e }) => {
      var a;
      const r = e.isOnline() ? e.getOnlineMajorMapURL() : e.getGeneralDegreeMajorMap();
      let n;
      try {
        const s = (a = new URL(r)) == null ? void 0 : a.toString();
        n = /* @__PURE__ */ d.jsxs("a", { href: s, children: [
          e.getRequiredCoursesLabel(),
          " Map"
        ] });
      } catch {
        return "";
      }
      return n;
    }
  },
  {
    dataKey: "Location",
    label: "Campus or location",
    className: "campus-location",
    sortable: !0,
    contentTemplate: ({ resolver: e }) => {
      const t = Vr("campus-");
      return /* @__PURE__ */ d.jsx("div", { children: e.getCampusList().map((r, n, a) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
        /* @__PURE__ */ d.jsx("span", { children: `${Wi(
          pm(r.campusCode)
        )}${n < a.length - 1 ? ", " : ""}` }, r.campusCode),
        /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx(
          ki,
          {
            popover: {
              title: Wi(r.campusCode),
              body: () => fetch(Pm(r.campusCode)),
              withAuto: !0
            }
          }
        ) })
      ] }, t.next().value)) });
    }
  },
  // TODO: THIS COMPONENT IS CURRENTLY DEFERRED
  {
    dataKey: "AcceleratedConcurrent",
    label: "Accelerated/ Concurrent",
    className: "accelerated-concurrent",
    sortable: !0,
    contentTemplate: ({ resolver: e, actionUrls: t }) => /* @__PURE__ */ d.jsxs("div", { children: [
      e.getConcurrentDegrees().then((r) => r).length > 0 && /* @__PURE__ */ d.jsx("div", { className: "cell-container", children: "concurrent" }),
      e.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
        /* @__PURE__ */ d.jsx("a", { href: kc(e, t.majorInfoUrl), children: "4+1 years" }),
        /* @__PURE__ */ d.jsx(
          ki,
          {
            popover: {
              title: "4+1 years",
              body: () => fetch(Dm(e.getAcadPlan())),
              withAuto: !1
            }
          }
        )
      ] })
    ] })
  },
  {
    dataKey: "CollegeSchool",
    label: "College/School",
    className: "college",
    sortable: !0,
    contentTemplate: ({ resolver: e }) => /* @__PURE__ */ d.jsx("a", { href: e.getCollegeUrl(), children: e.getCollegeDesc() })
  }
  // TODO: THIS COMPONENT IS CURRENTLY DEFERRED
  // {
  //   dataKey: "compare-fav",
  //   label: "Compare and favorite",
  //   className: "compare-fav",
  //   // todo: refactor this solution
  //   headerTemplate: () => (
  //     <div>
  //       <InfoButtonIcon
  //         onMouseOver={null}
  //         onClick={() => alert("Compare and favorite: info....")}
  //       />
  //     </div>
  //   ),
  //   contentTemplate: ({ row, rowIndex }) => (
  //     <form className="uds-form cell-container">
  //       <div className="form-check m-0">
  //         <input
  //           className="form-check-input"
  //           type="checkbox"
  //           id={`fav-button-${rowIndex}`}
  //           value="option1"
  //         />
  //         <label
  //           className="form-check-label"
  //           htmlFor={`fav-button-${rowIndex}`}
  //         >
  //           &nbsp;
  //         </label>
  //       </div>
  //       <FavButton onClick={() => saveFav(row["AcadPlan"])} />
  //     </form>
  //   ),
  // },
  // TODO: THIS COMPONENT IS CURRENTLY DEFERRED
  // {
  //   dataKey: "compare-apply-info",
  //   label: "",
  //   hasInfo: true,
  //   ariaLabel: "Apply Now or Request Info",
  //   className: "apply-info",
  //   contentTemplate: ({ resolver }) => (
  //     <div className="row flex-column  align-items-end p-1">
  //       <ApplyNow
  //         onClick={() =>
  //           // todo: refactor this solution
  //           alert("APPLY NOW: TODO...")
  //         }
  //       />
  //       <RequestInfo
  //         href={requestInfoLink(
  //           resolver.getAcadPlan(),
  //           resolver.getMajorDesc(),
  //           resolver.getEmailAddress()
  //         )}
  //       />
  //     </div>
  //   ),
  // },
], Qm = io`
  @keyframes loading {
    40% {
      background-position: 100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  &[data-loading="true"] {
    td {
      position: relative;

      .bar {
        background-color: #e7e7e7;
        height: 14px;
        border-radius: 7px;
        width: 80%;
      }

      &:after {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 0;
        content: "";
        display: block;
        width: 100%;
        height: 24px;
        background-image: linear-gradient(
          100deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.5) 60%,
          rgba(255, 255, 255, 0) 80%
        );
        background-size: 200px 24px;
        background-position: -100px 0;
        background-repeat: no-repeat;
        animation: loading 1s infinite;
      }
    }
  }
`, eh = Je.table`
  ${Qm}
  --table-border-color: #e5e5e5;

  background-color: #fafafa;
  border: 1px solid var(--table-border-color);
  border-collapse: collapse;
  padding: 5px;

  width: 100%;
  margin: 0 auto;
  clear: both;
  border-spacing: 0;

  a {
    text-decoration: none;
  }

  thead {
    background: #d0d0d0;
    th {
      outline: none;
      :focus {
        box-shadow:
          0px 0px 0px 2px #fff,
          0px 0px 0px 4px #191919 !important;
      }
    }
  }

  th,
  td {
    padding: 8px 12px;
    // display: inline-block;
  }

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;

    td {
      vertical-align: top;
    }

    .major {
      width: 250px;
      a {
        font-weight: 700;
      }
    }

    .degree {
      width: 75px;
    }

    .required-course {
      width: 100px;
    }

    .campus-location {
      width: 90px;
      & > div {
        width: fit-content;
      }
    }

    .accelerated-concurrent {
      width: 120px;
    }

    .college {
      width: 210px;
    }

    .compare-fav {
      // width: 180px;
    }

    .apply-info {
      width: 168px;
      & .btn {
        width: fit-content;
        :first-child {
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  tbody {
    tr {
      border: 1px solid var(--table-border-color);
      border-top: 0;

      &:not(.row-info):hover {
        background-color: #e8e8e8;
      }

      .info-apply .cell-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.5rem;
      }

      td .cell-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 0.5rem;
      }
    }

    tr.row-info {
      td > div {
        position: relative;
      }

      input.togle-more-text {
        opacity: 0;
        position: absolute;
        pointer-events: none;

        &:checked + .desc-long {
          max-height: fit-content;
          overflow: auto;
        }

        &:not(:checked) + .desc-long::after {
          content: " ";
          height: 1rem;
          background: rgba(250, 250, 250, 0.9);
          box-shadow: -1px -2px 20px 15px #fafafa;
          width: 100%;
          position: absolute;
          bottom: 0;
        }

        &:checked + .desc-long + .label-more-less {
          .label-more {
            display: none;
          }
          .label-less {
            display: inline;
          }
        }

        &:not(:checked) + .desc-long + .label-more-less {
          .label-more {
            display: inline;
          }
          .label-less {
            display: none;
          }
        }
      }

      .desc-long {
        max-height: 200px;
        overflow: hidden;
        transform: max-width 0.6;
        p:last-child {
          margin-bottom: 0;
        }
      }

      label.label-more-less {
        cursor: pointer;
        line-height: normal;
        color: #8c1d40;
        text-align: right;
        border: 0;
        margin: 0;
        font-weight: 400;
        display: inline;
        position: absolute;
        bottom: 0.2rem;
        right: -2.5rem;
      }
    }

    tr.row-info {
      td:first-child {
        flex-basis: 55%;
      }

      td:last-child {
      }
    }

    tr:not([data-is-open="true"]) + tr.row-info {
      overflow: hidden;
      height: 0;
    }

    tr[data-is-open="true"] + tr.row-info {
      height: auto;
    }
  }
`, th = ({ resolver: e, id: t }) => {
  const r = hu(), n = (a) => {
    a.key === "Enter" && (r == null || r.current.click());
  };
  return /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("header", { children: /* @__PURE__ */ d.jsx("strong", { children: "Program Description:" }) }),
    /* @__PURE__ */ d.jsx("input", { className: "togle-more-text", type: "checkbox", id: `#${t}` }),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        className: "desc-long",
        id: t,
        dangerouslySetInnerHTML: Yt(
          e.getFullDescription()
        )
      }
    ),
    /* @__PURE__ */ d.jsxs(
      "label",
      {
        ref: r,
        className: "label-more-less element-focus",
        htmlFor: `#${t}`,
        role: "button",
        tabIndex: 0,
        onKeyDown: n,
        children: [
          /* @__PURE__ */ d.jsx("span", { "data-testid": "more-text", className: "label-more", children: "[...more]" }),
          /* @__PURE__ */ d.jsx("span", { "data-testid": "less-text", className: "label-less", children: "[...less]" })
        ]
      }
    )
  ] });
}, rh = ({ resolver: e }) => /* @__PURE__ */ d.jsxs("div", { children: [
  /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "Additional Program Fee: " }),
    e.hasAsuProgramFee() ? "Yes" : "No"
  ] }),
  /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "Second Language Requirement: " }),
    e.hasAsuLangReqFlag() ? "Yes" : "No"
  ] }),
  e.hasMathReqFlag() && /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "First Required Math Course: " }),
    /* @__PURE__ */ d.jsx("span", { children: e.getMinMathReq() }),
    e.getOtherMathReqCourse() && /* @__PURE__ */ d.jsx(
      "span",
      {
        dangerouslySetInnerHTML: Yt(
          e.getOtherMathReqCourse()
        )
      }
    )
  ] }) }),
  e.getMathIntensity() && /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "Math Intensity: " }),
    e.getMathIntensity()
  ] }),
  e.hasStemOptText() && /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "STEM OPT: " }),
    e.hasStemOptText()
  ] })
] }), nh = Vr("row-"), _c = ({ programs: e, totalRows: t, loading: r, actionUrls: n }) => {
  var k, A;
  const a = ft.useRef(null), s = ft.useRef(null), { state: p } = Vt(an), m = (A = (k = p == null ? void 0 : p.listPageProps) == null ? void 0 : k.programList) == null ? void 0 : A.settings;
  let b = Zm;
  p.listPageProps.programList.dataSource.program === "graduate" && (b = b.filter((O) => O.dataKey !== "RequiredCourses")), m != null && m.hideCollegeSchool && (b = b.filter((O) => O.dataKey !== "CollegeSchool"));
  const f = (O, U) => {
    const _ = s.current.children;
    Array.prototype.forEach.call(
      _,
      (N, L) => L !== O && N.setAttribute("data-is-open", "false")
    ), s.current.children[O].setAttribute("data-is-open", String(U));
  };
  return /* @__PURE__ */ d.jsx("section", { className: "container mb-4", "data-testid": "list-view", children: /* @__PURE__ */ d.jsxs(
    eh,
    {
      id: fc,
      ref: a,
      "data-loading": r,
      title: `${t} program found`,
      children: [
        /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsx("tr", { role: "row", children: b.map((O) => {
          var U;
          return /* @__PURE__ */ d.jsx(
            "th",
            {
              tabIndex: 0,
              className: `${O.className}`,
              scope: "col",
              "aria-label": O.ariaLabel,
              children: ((U = O.headerTemplate) == null ? void 0 : U.call(O)) || /* @__PURE__ */ d.jsx("span", { children: O.label })
            },
            O.dataKey
          );
        }) }) }),
        /* @__PURE__ */ d.jsxs("tbody", { ref: s, "data-testid": "program-rows", children: [
          e.length === 0 ? /* @__PURE__ */ d.jsx("tr", { role: "presentation", children: /* @__PURE__ */ d.jsx(
            "td",
            {
              colSpan: b.length,
              "aria-label": "No result found for the filters applied",
              children: " "
            }
          ) }) : null,
          // programs
          e.map((O, U) => {
            const _ = nh.next().value, C = U * 2, N = Yr(O);
            return /* @__PURE__ */ d.jsxs(pl, { children: [
              /* @__PURE__ */ d.jsx("tr", { role: "row", children: b.map((L) => {
                var $;
                return /* @__PURE__ */ d.jsx(
                  "td",
                  {
                    className: `${L.className}`,
                    children: ($ = L.contentTemplate) == null ? void 0 : $.call(L, {
                      resolver: N,
                      col: L,
                      row: O,
                      rowIndex: C,
                      onClick: f,
                      actionUrls: n
                    })
                  },
                  `${_}-${L.dataKey}`
                );
              }) }, _),
              /* @__PURE__ */ d.jsxs(
                "tr",
                {
                  id: `row-info-${C}`,
                  className: "row-info",
                  children: [
                    /* @__PURE__ */ d.jsx("td", { colSpan: 3, children: th({ resolver: N, id: `${_}-more-text` }) }, `${_}-info`),
                    /* @__PURE__ */ d.jsx("td", { colSpan: 2, children: rh({ resolver: N }) }, `${_}-extra-info`)
                  ]
                },
                `${_}-row-info`
              )
            ] }, _);
          })
        ] })
      ]
    }
  ) });
};
_c.propTypes = {
  ...La
};
const ah = Ia`

  .mobile-view {
    display: none;
  }
  [data-view-type="list-view"] {
    @media (max-width: 768px) {
      .desktop-view {
        display: none;
      }
      .mobile-view {
        display: block;
        .card-foldable .card-header h4 a {
          color: #8c1d40;
        }
      }
    }
  }
`, ih = {
  [pc]: Ac,
  [qi]: _c
};
function Oc({
  dataViewComponent: e,
  loading: t,
  programs: r,
  actionUrls: n,
  degreesPerPage: a
}) {
  let s;
  a ? typeof a != "number" && (s = parseInt(a, 10)) : s = 8;
  const p = a || s, m = mm(r.length, p), b = ih[e], [f, k] = ct([]), A = (O, U) => {
    const _ = (U - 1) * p, C = _ + p;
    k(r.slice(_, C));
  };
  return At(() => {
    k(r.slice(0, p));
  }, [r]), /* @__PURE__ */ d.jsxs("section", { "data-testid": "program-list", "data-view-type": e, children: [
    /* @__PURE__ */ d.jsx(ah, {}),
    /* @__PURE__ */ d.jsx("div", { className: "desktop-view", children: /* @__PURE__ */ d.jsx(
      b,
      {
        loading: t,
        programs: f,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: a || s
      }
    ) }),
    /* @__PURE__ */ d.jsx("div", { className: "mobile-view mb-2", children: /* @__PURE__ */ d.jsx(
      Ec,
      {
        loading: t,
        programs: f,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: a || s
      }
    ) }),
    r.length > 0 ? /* @__PURE__ */ d.jsx(
      Ml,
      {
        totalNumbers: 7,
        type: "default",
        background: "white",
        totalPages: m,
        onChange: A,
        showFirstButton: !0,
        showLastButton: !0
      }
    ) : /* @__PURE__ */ d.jsx("section", { className: "container no-space", children: /* @__PURE__ */ d.jsx(Zf, { message: "No result found for the filters applied" }) })
  ] });
}
Oc.propTypes = {
  dataViewComponent: E.string,
  ...La,
  degreesPerPage: E.number
};
const oh = Je.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow:
      0px 0px 0px 2px #ffffff,
      0px 0px 0px 4px #191919 !important;
  }
`, jc = ({ value: e, onChange: t, onSearch: r }) => {
  const [n, a] = ct(!1);
  let s;
  At(() => () => clearTimeout(s), []);
  const p = (m) => {
    Nr({
      event: "search",
      action: "type",
      name: "onenter",
      type: "search degree programs",
      text: m
    });
  };
  return /* @__PURE__ */ d.jsx(
    oh,
    {
      className: "container mt-5",
      "data-searching": n,
      "data-testid": "search-bar",
      children: /* @__PURE__ */ d.jsx("search", { children: /* @__PURE__ */ d.jsx(
        "form",
        {
          "data-testid": "search-bar-form",
          className: "uds-form p-0 col-md-6 col-sm-12",
          onSubmit: (m) => {
            m.preventDefault(), r(), a(!0), s = setTimeout(() => a(!1), 500), clearTimeout(s);
          },
          children: /* @__PURE__ */ d.jsxs("div", { className: "form-group mb-0 me-2", children: [
            /* @__PURE__ */ d.jsx("label", { htmlFor: "search-field", children: "Search" }),
            /* @__PURE__ */ d.jsxs("div", { className: "d-flex row align-items-baseline g-3", children: [
              /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-6 align-self-end", children: /* @__PURE__ */ d.jsx(
                "input",
                {
                  "data-testid": "search-field",
                  id: "search-field",
                  value: e,
                  type: "text",
                  className: "form-control",
                  placeholder: "Search degree programs",
                  onChange: (m) => {
                    t(m.target.value), p(m.target.value);
                  }
                }
              ) }),
              /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-6 mt-2 mt-sm-0", children: /* @__PURE__ */ d.jsx(
                Tr,
                {
                  "data-testid": "search-button",
                  color: "maroon",
                  label: "Search now",
                  ariaLabel: "Search now",
                  size: "default",
                  onClick: r
                }
              ) })
            ] })
          ] })
        }
      ) })
    }
  );
};
jc.propTypes = {
  value: E.string,
  onChange: E.func,
  onSearch: E.func
};
const sh = Je(vc)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`, lh = Ia`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`, ch = Je.div.attrs({ className: "container" })`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`, bo = ({
  appPathFolder: e,
  actionUrls: t,
  hasSearchBar: r = !0,
  hasFilters: n = !0,
  hero: a,
  introContent: s,
  programList: p,
  degreesPerPage: m
}) => {
  var ne;
  const [{ data: b, loading: f, error: k }, A] = Fl(), [O, U] = ct(!1), [_, C] = ct([]), [N, L] = ct([]), [$, G] = ct(""), z = (ne = p == null ? void 0 : p.settings) == null ? void 0 : ne.defaultView, w = [qi, pc].includes(z) ? z : qi, [ee, ue] = ct(w), xe = bc(p.dataSource, bm), { defaultState: Re } = Vt(an), { listingPageDefault: Me } = Re, {
    collegeAcadOrg: se,
    departmentCode: pe,
    showInactivePrograms: Oe,
    blacklistAcadPlans: Ae,
    program: we,
    cert: Ze
  } = p.dataSource, [je, Ee] = ct({
    ..._n
  }), [Fe, qe] = ct({
    ..._n
  });
  Om({
    dataSource: p.dataSource,
    tableView: _,
    programs: b,
    stateFilters: je
  }), At(() => {
    typeof window < "u" && Bl({
      packageName: "app-degree-pages",
      component: "ListingPage",
      type: "NA",
      configuration: {
        programList: p,
        degreesPerPage: m
      }
    });
  }, []), At(() => {
    A(xe);
  }, [xe]), At(() => {
    let j = Mm(b || []);
    j = nl({
      programs: j,
      filters: {
        collegeAcadOrg: se,
        departmentCode: pe,
        blacklistAcadPlans: Ae,
        program: we,
        showCerts: Ze
      }
    }), L(j), C(j);
  }, [b, m]);
  const ce = async (j) => {
    const { acceleratedConcurrent: le, locations: te, asuLocals: ae, keyword: X } = j;
    U(!0), A(xe);
    const oe = nl({
      programs: N,
      filters: {
        collegeAcadOrg: se,
        departmentCode: pe,
        acceleratedConcurrent: le,
        locations: ae.length > 0 ? te.concat(um) : te,
        keyword: X,
        blacklistAcadPlans: Ae,
        program: we
      }
    });
    Ee({ ...j }), qe({ ...j }), C(oe), U(!1);
  }, W = async () => {
    const j = {
      ...Fe,
      keyword: $
    };
    ce(j);
  }, I = (j) => {
    f || O || ce(j);
  }, B = async (j) => {
    Ee(j);
  }, q = () => {
    Ee(_n), qe(_n), C(N), G("");
  }, x = (j, { value: le }) => {
    const te = j === "acceleratedConcurrent" ? dm : Fe[j].filter((X) => X.value !== le), ae = {
      ...Fe,
      [j]: te
    };
    ce(ae);
  };
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(xc, {}),
    /* @__PURE__ */ d.jsx(lh, {}),
    k && /* @__PURE__ */ d.jsx(nc, { message: mc }),
    a != null && a.hide ? null : /* @__PURE__ */ d.jsx("section", { "data-testid": "hero", children: /* @__PURE__ */ d.jsx(
      Ln,
      {
        image: (a == null ? void 0 : a.image) || Me.hero.image,
        title: {
          text: cm(p.dataSource),
          highlightColor: "gold",
          ...a == null ? void 0 : a.title,
          maxWidth: "100%"
        },
        contents: a == null ? void 0 : a.contents
      }
    ) }),
    /* @__PURE__ */ d.jsxs(sh, { "data-is-loading": f, className: "main-section dg-margin-top", children: [
      (s == null ? void 0 : s.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        ho,
        {
          breadcrumbs: s.breadcrumbs,
          section: a ? a.title.text : ""
        }
      ) }),
      s ? /* @__PURE__ */ d.jsx(
        go,
        {
          applyNowUrl: (t == null ? void 0 : t.applyNowUrl) || Me.actionUrls.applyNowUrl,
          type: s.type,
          header: s.header,
          title: s.title,
          contents: s.contents,
          image: s.image,
          video: s.video,
          photoGrid: s.photoGrid
        }
      ) : null,
      r || n ? /* @__PURE__ */ d.jsxs("section", { className: "no-space", children: [
        /* @__PURE__ */ d.jsx(Fm, {}),
        r ? /* @__PURE__ */ d.jsx(
          jc,
          {
            value: $,
            onChange: G,
            onSearch: W
          }
        ) : null,
        n ? /* @__PURE__ */ d.jsx(
          Tc,
          {
            value: je,
            onChange: B,
            onApply: I,
            onClean: q
          }
        ) : null,
        /* @__PURE__ */ d.jsx(ch, {})
      ] }) : null,
      /* @__PURE__ */ d.jsx("section", { className: "container", children: /* @__PURE__ */ d.jsx("div", { className: "d-flex justify-content-between filter-switch-container", children: n ? /* @__PURE__ */ d.jsx(
        Cc,
        {
          value: Fe,
          onRemove: x
        }
      ) : null }) }),
      f || O ? /* @__PURE__ */ d.jsx(ac, {}) : /* @__PURE__ */ d.jsx(
        Oc,
        {
          dataViewComponent: ee,
          loading: f || O,
          programs: _,
          actionUrls: t,
          degreesPerPage: m
        }
      )
    ] })
  ] });
};
bo.propTypes = {
  appPathFolder: E.string,
  actionUrls: E.shape({
    applyNowUrl: E.string
  }),
  hasSearchBar: E.bool,
  hasFilters: E.bool,
  hero: E.shape(Ln.propTypes),
  introContent: E.shape(go.propTypes),
  programList: E.shape({
    dataSource: sc,
    settings: nm
  }),
  degreesPerPage: E.number
};
const Nc = (e) => /* @__PURE__ */ d.jsx(mo, { listPageProps: e, children: /* @__PURE__ */ d.jsx(bo, { ...e }) });
Nc.propTypes = bo.propTypes;
const uh = Je.section`
  position: relative;
  padding-top: var(--uds-dp-section-margin);
  padding-bottom: var(--uds-dp-section-margin);
`, dh = Je.div`
  background-image: url("https://asu.github.io/asu-unity-stack/@asu/unity-bootstrap-theme/static/media/TopoPatternWhite.529b0b3d.png");
  background-position: center;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 1920px;
  height: 100%;
  z-index: -1;
`;
function ph() {
  return /* @__PURE__ */ d.jsxs(
    uh,
    {
      className: "container",
      id: ut.affordingCollege.targetIdName,
      "data-testid": "affording-college",
      children: [
        /* @__PURE__ */ d.jsx(dh, {}),
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Affording college" }) }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            gt,
            {
              icon: ["fas", "calculator"],
              title: "Tuition estimator",
              body: "The tuition estimator shows the tuition and fee breakdown for your particular major, campus and residency status without financial aid.",
              buttons: [
                {
                  label: "Estimate tuition and fees",
                  ariaLabel: "Estimate tuition and fees",
                  color: "maroon",
                  href: "https://tuition.asu.edu/cost-calculator/tuition"
                }
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            gt,
            {
              icon: ["fas", "award"],
              title: "Scholarships",
              body: "Scholarships are a type of aid that does not need to be paid back. Some you apply for and some are automatic.",
              buttons: [
                {
                  label: "Learn about scholarships",
                  ariaLabel: "Learn about scholarships",
                  color: "maroon",
                  href: "https://scholarships.asu.edu/"
                }
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            gt,
            {
              icon: ["fas", "hand-holding-usd"],
              title: "Financial aid",
              body: "There are many financial aid options available for students. In fact, more than 80 percent of all ASU students receive some form of financial assistance every year.",
              buttons: [
                {
                  label: "Explore financial aid",
                  ariaLabel: "Explore financial aid",
                  color: "maroon",
                  href: "https://tuition.asu.edu/financial-aid"
                }
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
const Rc = Je.ul`
  display: inline-flex;
  list-style: none;
  padding: 0;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    .btn {
      width: max-content;
      margin-left: 0;
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
`, fh = ({
  transferRequirements: e = "",
  additionalRequirements: t = ""
}) => {
  const r = [
    {
      label: "Freshman",
      href: "https://admission.asu.edu/freshman/apply"
    },
    { label: "Transfer", href: "https://admission.asu.edu/transfer/apply" },
    {
      label: "International",
      href: "https://admission.asu.edu/international/undergrad-apply"
    },
    {
      label: "Readmission",
      href: "https://admission.asu.edu/undergrad/readmission"
    }
  ], n = [];
  return t != null && t.trim() && n.push({
    content: {
      header: "Additional Requirements",
      body: t
    }
  }), e != null && e.trim() && n.push({
    content: {
      header: "Transfer Admission Requirements",
      body: e
    }
  }), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("p", { children: "All students are required to meet general university admission requirements" }),
    /* @__PURE__ */ d.jsx(
      Rc,
      {
        className: cf("", {
          "mb-0": n.length === 0
        }),
        children: r.map(({ label: a, href: s }) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
          Tr,
          {
            ariaLabel: a,
            color: "maroon",
            href: s,
            label: a,
            size: "small"
          }
        ) }, a))
      }
    ),
    n.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "mt-2 mb-4", children: /* @__PURE__ */ d.jsx(Qi, { cards: n, openedCard: 1 }) })
  ] });
}, mh = (e) => {
  const t = "View Curriculum";
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("p", { children: "View curriculum below for a detailed list of courses and other requirements." }),
    /* @__PURE__ */ d.jsx(Rc, { children: /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
      Tr,
      {
        ariaLabel: t,
        color: "maroon",
        href: e,
        label: t,
        size: "small"
      }
    ) }) })
  ] });
};
function Ic({
  graduateRequirements: e,
  transferRequirements: t,
  isMinorOrCertificate: r,
  additionalRequirements: n,
  minorRequirements: a,
  majorMapURL: s
}) {
  if (!e && !r)
    return /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: ut.applicationRequirements.targetIdName,
        "data-testid": "application-requirements",
        children: [
          /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Admission requirements" }) }),
          fh({
            transferRequirements: t,
            additionalRequirements: n
          })
        ]
      }
    );
  const p = r ? "Program requirements" : "Degree requirements", m = e || a;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: ut.applicationRequirements.targetIdName,
        "data-testid": "application-requirements",
        children: [
          /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: p }) }),
          m ? /* @__PURE__ */ d.jsx(
            "div",
            {
              dangerouslySetInnerHTML: Yt(m)
            }
          ) : mh(s)
        ]
      }
    ),
    /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: ut.degreeRequirements.targetIdName,
        "data-testid": "degree-requirements",
        children: [
          /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Admission requirements" }) }),
          /* @__PURE__ */ d.jsx(
            "div",
            {
              dangerouslySetInnerHTML: Yt(
                n
              )
            }
          )
        ]
      }
    )
  ] });
}
Ic.propTypes = {
  graduateRequirements: E.string,
  transferRequirements: E.string,
  isMinorOrCertificate: E.bool,
  additionalRequirements: E.string,
  minorRequirements: E.string,
  majorMapURL: E.string
};
const zr = ({ item: e, type: t }) => {
  const r = Vr("glance-"), n = () => typeof e == "object" ? e.map((a, s) => {
    const p = ["", "#"].includes(a.url) ? null : a.url;
    let m = "";
    return s > 0 && s < e.length - 1 && (m = ", "), s === e.length - 1 && e.length > 1 && (m = " or "), /* @__PURE__ */ d.jsxs(pl, { children: [
      m,
      /* @__PURE__ */ d.jsx("a", { href: p, rel: "noreferrer", target: "_blank", children: a.text })
    ] }, r.next().value);
  }) : e;
  return /* @__PURE__ */ d.jsxs("li", { children: [
    /* @__PURE__ */ d.jsx("i", { className: `fas fa-${Qs[t].icon} fa-li` }),
    /* @__PURE__ */ d.jsxs("strong", { children: [
      Qs[t].title,
      ": "
    ] }),
    n()
  ] });
};
zr.propTypes = {
  item: E.oneOfType([
    E.arrayOf(zi),
    E.string
  ]),
  type: E.string
};
const Pc = ({
  offeredBy: e,
  locations: t,
  firstRequirementMathCourse: r,
  mathIntensity: n,
  timeCommitment: a,
  stemOptText: s
}) => /* @__PURE__ */ d.jsxs(
  "section",
  {
    id: ut.atAGlance.targetIdName,
    "data-testid": "at-aglance",
    children: [
      /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "At a glance: program details" }) }),
      /* @__PURE__ */ d.jsxs("ul", { className: "uds-list fa-ul maroon pt-2 pb-0 pe-0", children: [
        e && /* @__PURE__ */ d.jsx(zr, { item: [e], type: "offeredBy" }),
        t && /* @__PURE__ */ d.jsx(zr, { item: t, type: "locations" }),
        r && /* @__PURE__ */ d.jsx(
          zr,
          {
            item: r,
            type: "firstRequirementMathCourse"
          }
        ),
        n && /* @__PURE__ */ d.jsx(zr, { item: n, type: "mathIntensity" }),
        a && /* @__PURE__ */ d.jsx(zr, { item: a, type: "timeCommitment" }),
        s && /* @__PURE__ */ d.jsx(zr, { item: s, type: "stemOptText" })
      ] })
    ]
  }
);
Pc.propTypes = {
  offeredBy: zi.isRequired,
  locations: E.arrayOf(zi).isRequired,
  firstRequirementMathCourse: E.string.isRequired,
  mathIntensity: E.string,
  timeCommitment: E.string,
  stemOptText: E.string
};
const hh = `
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;
function Dc({ image: e, learnMoreLink: t, contents: r }) {
  const n = `linear-gradient(180deg, #19191900 0%, #191919c9 100%),url('${e.url}')`, a = Vr("attend-online-");
  return /* @__PURE__ */ d.jsx(
    "section",
    {
      id: ut.attendOnline.targetIdName,
      className: "uds-card-and-image",
      style: {
        backgroundImage: n
      },
      "data-testid": "attend-online",
      children: /* @__PURE__ */ d.jsx("div", { className: "uds-card-and-image-container", children: /* @__PURE__ */ d.jsxs("div", { className: "card card-centered", children: [
        /* @__PURE__ */ d.jsx("i", { className: "fas fa-wifi fa-2x card-icon-top" }),
        /* @__PURE__ */ d.jsx("div", { className: "card-header", children: /* @__PURE__ */ d.jsx("h3", { className: "card-title", children: "Attend online" }) }),
        /* @__PURE__ */ d.jsx("div", { className: "card-body", children: r ? r.map((s) => /* @__PURE__ */ d.jsx("p", { children: s }, a.next().value)) : /* @__PURE__ */ d.jsx("p", { children: hh }) }),
        /* @__PURE__ */ d.jsx("div", { className: "card-button", children: /* @__PURE__ */ d.jsx(
          Tr,
          {
            label: "Learn about online options",
            ariaLabel: "Learn about online options",
            href: t,
            color: "maroon",
            size: "small"
          }
        ) })
      ] }) })
    }
  );
}
Dc.propTypes = {
  learnMoreLink: E.string,
  image: kr,
  contents: E.arrayOf(
    E.shape({
      text: E.string
    })
  )
};
const gh = Je.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Lc = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  gh,
  {
    id: ut.careerOutlook.targetIdName,
    "data-testid": "career-outlook",
    children: /* @__PURE__ */ d.jsx(
      nn,
      {
        headingTag: "H2",
        title: ut.careerOutlook.text,
        contents: e,
        image: t
      }
    )
  }
);
Lc.propTypes = nn.propTypes;
const bh = Je.div`
  & p:last-of-type {
    margin-bottom: 0;
  }

  & a {
    word-break: break-word;
  }
`;
function Mc({ content: e }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: ut.changeMajorRequirements.targetIdName,
      className: "change-your-major",
      "data-testid": "change-your-major",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Change your major requirements for current students" }) }),
        /* @__PURE__ */ d.jsx(
          bh,
          {
            dangerouslySetInnerHTML: Yt(e)
          }
        )
      ]
    }
  );
}
Mc.propTypes = {
  content: E.string
};
function Fc({ content: e = "" }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-testid": "custom-text",
      className: "mt-3",
      dangerouslySetInnerHTML: Yt(e)
    }
  );
}
Fc.propTypes = {
  content: E.string
};
const $c = `
  width: unset !important;
  min-width: unset !important;
`, Uc = Je.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${$c}
`, zc = Je.i`
  color: #78be21;
  ${$c}
`;
function Hc({ data: e }) {
  return /* @__PURE__ */ d.jsx("div", { className: "uds-table mb-1", children: /* @__PURE__ */ d.jsxs("table", { children: [
    /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsxs("tr", { children: [
      /* @__PURE__ */ d.jsx("th", { scope: "col", children: "Career" }),
      /* @__PURE__ */ d.jsx("th", { scope: "col", className: "text-end", children: "Growth*" }),
      /* @__PURE__ */ d.jsx("th", { scope: "col", className: "text-end", children: "Median Salary*" })
    ] }) }),
    /* @__PURE__ */ d.jsx("tbody", { children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ d.jsxs("tr", { children: [
      /* @__PURE__ */ d.jsxs("th", { scope: "row", style: { fontWeight: "normal" }, children: [
        /* @__PURE__ */ d.jsx("a", { href: t.career.url, target: "_blank", rel: "noreferrer", children: t.career.text }),
        t.greenOccupation && /* @__PURE__ */ d.jsx(zc, { className: "fas fa-leaf ms-1" }),
        t.brightOutlook && /* @__PURE__ */ d.jsx(Uc, { className: "fas fa-sun ms-1" })
      ] }),
      /* @__PURE__ */ d.jsxs("td", { className: "text-end", children: [
        +t.growth,
        "%"
      ] }),
      /* @__PURE__ */ d.jsx("td", { className: "text-end", children: t.medianSalary || 0 })
    ] }, t.career.url)) })
  ] }) });
}
Hc.propTypes = {
  data: E.arrayOf(lc)
};
function qc({ tableData: e }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: ut.exampleCareers.targetIdName,
      className: "container",
      "data-testid": "example-careers",
      children: [
        /* @__PURE__ */ d.jsx("h3", { children: "Example careers" }),
        /* @__PURE__ */ d.jsx("p", { children: "Example job titles and salaries listed below are not necessarily entry level, and students should take into consideration how years of experience and geographical location may affect pay scales. Some jobs also may require advanced degrees, certifications or state-specific licensure." }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-4 mb-4", children: [
          /* @__PURE__ */ d.jsx(Hc, { data: e }),
          /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("small", { children: "* Data obtained from the Occupational Information Network (O*NET) under sponsorship of the U.S. Department of Labor/Employment and Training Administration (USDOL/ETA)." }) })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "d-flex", children: [
          /* @__PURE__ */ d.jsxs("p", { className: "me-3", children: [
            /* @__PURE__ */ d.jsx(Uc, { className: "fas fa-sun me-1" }),
            "Bright outlook"
          ] }),
          /* @__PURE__ */ d.jsxs("p", { children: [
            /* @__PURE__ */ d.jsx(zc, { className: "fas fa-leaf me-1" }),
            "Green occupation"
          ] })
        ] })
      ]
    }
  );
}
qc.propTypes = {
  tableData: E.arrayOf(lc)
};
const yh = Je.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 320px;
  li:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media (max-width: 767px) {
    max-height: 100%;
  }
`, Gi = ({ id: e, title: t, links: r }) => /* @__PURE__ */ d.jsxs("div", { id: e, className: "mt-4", children: [
  /* @__PURE__ */ d.jsx("h3", { children: t }),
  /* @__PURE__ */ d.jsx("p", { children: "This program allows students to obtain both a bachelor's and master's degree in as little as five years. It is offered as an accelerated bachelor's and master's degree with:" }),
  /* @__PURE__ */ d.jsx(yh, { className: "mt-3 mb-3", children: r.map((n, a) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: n.url, target: "_blank", rel: "noreferrer", children: n.title }) }, `${n.title}-${a}`)) }),
  /* @__PURE__ */ d.jsx("p", { className: "mb-0", children: "Acceptance to the graduate program requires a separate application. During their junior year, eligible students will be advised by their academic departments to apply." })
] });
Gi.propTypes = {
  id: E.string,
  title: E.string,
  links: Hi
};
function Bc({ acceleratedLinks: e, concurrentLinks: t }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: ut.flexibleDegreeOptions.targetIdName,
      className: "container",
      "data-testid": "flexible-degree-options",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Flexible degree options" }) }),
        !!e.length && /* @__PURE__ */ d.jsx(
          Gi,
          {
            id: ut.flexibleDegreeOptions.acceleratedId,
            title: "Accelerated program options",
            links: e
          }
        ),
        !!t.length && /* @__PURE__ */ d.jsx(
          Gi,
          {
            id: ut.flexibleDegreeOptions.concurrentId,
            title: "Concurrent degree program",
            links: t
          }
        )
      ]
    }
  );
}
Bc.propTypes = {
  acceleratedLinks: Hi,
  concurrentLinks: Hi
};
const xh = Je.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Wc = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  xh,
  {
    id: ut.globalOpportunity.targetIdName,
    "data-testid": "global-opportunity",
    children: /* @__PURE__ */ d.jsx(
      nn,
      {
        headingTag: "H2",
        title: ut.globalOpportunity.text,
        contents: e,
        image: t
      }
    )
  }
);
Wc.propTypes = nn.propTypes;
const Gc = ({ url: e, altText: t }) => /* @__PURE__ */ d.jsx("div", { className: "uds-img pt-3 pb-3", "data-testid": "intro-image", children: /* @__PURE__ */ d.jsx("img", { src: e, className: "img-fluid", alt: t }) });
Gc.propTypes = { ...lo };
const vh = (e, t) => {
  if (e !== "youtube")
    return t;
  const r = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, n = t.match(r);
  return n && n[7].length === 11 ? `https://www.youtube.com/embed/${n[7]}` : t;
}, wh = Je.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`, Yc = ({ type: e, url: t, vttUrl: r, title: n }) => /* @__PURE__ */ d.jsx(wh, { "data-testid": "intro-video", children: /* @__PURE__ */ d.jsx(
  ro,
  {
    type: e,
    url: vh(e, t),
    vttUrl: r,
    title: n,
    controls: !0
  }
) });
Yc.propTypes = { ...co };
function Vc({ contents: e = [] }) {
  return /* @__PURE__ */ d.jsx("div", { "data-testid": "market-text", children: e.map((t, r) => /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `mt-3 ${tn(t.cssClass)}`,
      dangerouslySetInnerHTML: Yt(t.text)
    },
    `content-${r + 1}`
  )) });
}
Vc.propTypes = {
  contents: E.arrayOf(ja)
};
function Kc({ cards: e, defaultCards: t }) {
  var r, n, a, s, p, m, b, f, k, A, O, U;
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      className: "container",
      id: ut.nextSteps.targetIdName,
      "data-testid": "next-steps",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: "Next steps to attend ASU" }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            gt,
            {
              icon: ((r = e == null ? void 0 : e.learnMore) == null ? void 0 : r.icon) ?? t.learnMore.icon,
              title: ((n = e == null ? void 0 : e.learnMore) == null ? void 0 : n.title) ?? t.learnMore.title,
              body: ((a = e == null ? void 0 : e.learnMore) == null ? void 0 : a.content) ?? t.learnMore.content,
              buttons: [
                ((s = e == null ? void 0 : e.learnMore) == null ? void 0 : s.buttonLink) ?? t.learnMore.buttonLink
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            gt,
            {
              icon: ((p = e == null ? void 0 : e.apply) == null ? void 0 : p.icon) ?? t.apply.icon,
              title: ((m = e == null ? void 0 : e.apply) == null ? void 0 : m.title) ?? t.apply.title,
              body: ((b = e == null ? void 0 : e.apply) == null ? void 0 : b.content) ?? t.apply.content,
              buttons: [
                ((f = e == null ? void 0 : e.apply) == null ? void 0 : f.buttonLink) ?? t.apply.buttonLink
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            gt,
            {
              icon: ((k = e == null ? void 0 : e.visit) == null ? void 0 : k.icon) ?? t.visit.icon,
              title: ((A = e == null ? void 0 : e.visit) == null ? void 0 : A.title) ?? t.visit.title,
              body: ((O = e == null ? void 0 : e.visit) == null ? void 0 : O.content) ?? t.visit.content,
              buttons: [
                ((U = e == null ? void 0 : e.visit) == null ? void 0 : U.buttonLink) ?? t.visit.buttonLink
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
Kc.propTypes = {
  cards: E.shape({
    learnMore: Ur,
    apply: Ur,
    visit: Ur
  }),
  defaultCards: E.shape({
    learnMore: Ur,
    apply: Ur,
    visit: Ur
  })
};
function Xc({ content: e = "" }) {
  return /* @__PURE__ */ d.jsxs("section", { className: "container", "data-testid": "professional-licensure", children: [
    /* @__PURE__ */ d.jsx("h3", { children: "Professional licensure" }),
    /* @__PURE__ */ d.jsx("p", { dangerouslySetInnerHTML: Yt(e) })
  ] });
}
Xc.propTypes = {
  content: E.node
};
const Ei = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "main content",
  section: "Program contact information"
}, Sh = Je.ul`
  list-style: none;
  margin-left: 0rem;
  padding-left: 0rem;

  & li {
    display: flex;
    align-items: center;
    :not(:first-child) {
      display: flex;
      padding-bottom: 0.5rem;
    }

    :first-child div {
      display: flex;
    }

    :nth-of-type(2) {
      padding-bottom: 2rem;
    }

    > div {
      display: flex;
      align-items: center;
    }

    .c-icon,
    i {
      font-size: 1rem;
      margin-right: 0.5rem;
    }

    .office-loc {
      margin-left: 1.5rem;
    }
  }
`;
function Jc({ department: e, asuOfficeLoc: t, email: r, phone: n }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: ut.programContactInfo.targetIdName,
      "data-testid": "program-contact-info",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Program contact information" }) }),
        /* @__PURE__ */ d.jsx("p", { children: "If you have questions related to admission, please fill out the request information form above and an admission specialist will contact you directly. For questions regarding faculty or courses, please use the contact information below." }),
        /* @__PURE__ */ d.jsxs(Sh, { className: "text-maroon", children: [
          /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsxs("div", { children: [
            /* @__PURE__ */ d.jsx(
              "i",
              {
                className: "c-icon fas icon-small fa-map-marker-alt",
                title: "Department  Address"
              }
            ),
            /* @__PURE__ */ d.jsx(
              "a",
              {
                href: e.url,
                onClick: () => Nr({ ...Ei, text: e.text }),
                children: e.text
              }
            )
          ] }) }),
          /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("div", { className: "c-icon text-dark office-loc", children: t }) }),
          /* @__PURE__ */ d.jsxs("li", { children: [
            /* @__PURE__ */ d.jsx("i", { className: "c-icon fas icon-small fa-envelope", title: "Email" }),
            /* @__PURE__ */ d.jsx(
              "a",
              {
                href: `mailto:${r.url || r.text}`,
                onClick: () => Nr({ ...Ei, text: r.text }),
                children: r.text
              }
            )
          ] }),
          /* @__PURE__ */ d.jsxs("li", { children: [
            /* @__PURE__ */ d.jsx("i", { className: "c-icon fas icon-small fa-phone", title: "Phone" }),
            /* @__PURE__ */ d.jsx(
              "a",
              {
                href: `tel:${n}`,
                onClick: () => Nr({ ...Ei, text: n }),
                children: n
              }
            )
          ] })
        ] })
      ]
    }
  );
}
Jc.propTypes = {
  department: Br,
  asuOfficeLoc: E.string,
  email: Br,
  phone: E.string
};
function Yi({ content: e, stemOptText: t, programNotFound: r }) {
  return /* @__PURE__ */ d.jsxs("div", { "data-testid": "program-description", children: [
    /* @__PURE__ */ d.jsx("h2", { children: r ? "Program not found" : "Program description" }),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        "data-testid": "program-description-body",
        dangerouslySetInnerHTML: Yt(e)
      }
    ),
    t && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("strong", { children: im }) }),
      /* @__PURE__ */ d.jsx(
        "div",
        {
          "data-testid": "stem-opt-text",
          dangerouslySetInnerHTML: Yt(t)
        }
      )
    ] })
  ] });
}
Yi.propTypes = {
  content: E.string,
  stemOptText: E.string,
  programNotFound: E.bool
};
const kh = "https://changemajor.apps.asu.edu/", Th = "On-campus students", Ch = "Online students", Eh = "View major map -", ol = "View major map";
function Zc({
  onlineMajorMapURL: e = "",
  majorMapOnCampusURL: t = "",
  subPlnMajorMaps: r = [],
  subPlns: n = []
}) {
  const a = (k) => {
    const A = n.find(
      (O) => O.acadSubPlanCode === k
    );
    return A ? A.description : "";
  }, s = (k, A, O) => {
    k && O.push({
      href: k,
      text: A
    });
  }, p = [], m = [];
  r.forEach((k) => {
    const A = a(k.acadSubPlanCode), O = `${Eh} ${A}`;
    s(k.url, O, p);
  }), t && s(t, ol, p), e && s(e, ol, m);
  const b = (k, A) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("h5", { children: k }),
    /* @__PURE__ */ d.jsx("ul", { className: "mb-3", children: A.map((O) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: O.href, children: O.text }) }, O.href)) })
  ] }), f = () => /* @__PURE__ */ d.jsxs("section", { className: "container ps-0", "data-testid": "required-course", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Required courses (major map)" }),
    p.length > 0 && b(Th, p),
    m.length > 0 && b(Ch, m),
    /* @__PURE__ */ d.jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ d.jsx("strong", { children: "What if:" }),
      " See how your courses can be applied to another major and find out how to ",
      /* @__PURE__ */ d.jsx("a", { href: kh, children: "change your major" })
    ] })
  ] });
  return !(r != null && r.length) && !e && !t ? /* @__PURE__ */ d.jsx("div", {}) : f();
}
Zc.propTypes = {
  onlineMajorMapURL: E.string,
  majorMapOnCampusURL: E.string,
  subPlnMajorMaps: E.arrayOf(
    E.shape({
      campus: E.string,
      acadSubPlanCode: E.string,
      defaultFlag: E.bool,
      url: E.string
    })
  ),
  subPlns: E.arrayOf(
    E.shape({
      acadSubPlanCode: E.string,
      description: E.string
    })
  )
};
const Qc = ({ sectionIntroText: e, cards: t, defaultCards: r }) => {
  var n, a, s, p, m, b, f, k, A, O, U, _, C, N, L, $, G, z, w, ee, ue, xe, Re, Me, se, pe, Oe, Ae, we, Ze, je, Ee, Fe, qe, ce, W, I, B, q, x, ne, j;
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: ut.whyChooseAsu.targetIdName,
      className: "container",
      "data-testid": "why-choose-asu",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: "Why choose ASU" }),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            dangerouslySetInnerHTML: Yt(e)
          }
        ),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            gt,
            {
              image: ((a = (n = t == null ? void 0 : t.faculty) == null ? void 0 : n.image) == null ? void 0 : a.url) ?? r.faculty.image.url,
              imageAltText: ((p = (s = t == null ? void 0 : t.faculty) == null ? void 0 : s.image) == null ? void 0 : p.altText) ?? r.faculty.image.altText,
              title: ((m = t == null ? void 0 : t.faculty) == null ? void 0 : m.title) ?? r.faculty.title,
              body: ((b = t == null ? void 0 : t.faculty) == null ? void 0 : b.text) ?? r.faculty.text,
              buttons: [((f = t == null ? void 0 : t.faculty) == null ? void 0 : f.button) ?? r.faculty.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            gt,
            {
              image: ((A = (k = t == null ? void 0 : t.programs) == null ? void 0 : k.image) == null ? void 0 : A.url) ?? r.programs.image.url,
              imageAltText: ((U = (O = t == null ? void 0 : t.programs) == null ? void 0 : O.image) == null ? void 0 : U.altText) ?? r.programs.image.altText,
              title: ((_ = t == null ? void 0 : t.programs) == null ? void 0 : _.title) ?? r.programs.title,
              body: ((C = t == null ? void 0 : t.programs) == null ? void 0 : C.text) ?? r.programs.text,
              buttons: [((N = t == null ? void 0 : t.programs) == null ? void 0 : N.button) ?? r.programs.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            gt,
            {
              image: (($ = (L = t == null ? void 0 : t.research) == null ? void 0 : L.image) == null ? void 0 : $.url) ?? r.research.image.url,
              imageAltText: ((z = (G = t == null ? void 0 : t.research) == null ? void 0 : G.image) == null ? void 0 : z.altText) ?? r.research.image.altText,
              title: ((w = t == null ? void 0 : t.research) == null ? void 0 : w.title) ?? r.research.title,
              body: ((ee = t == null ? void 0 : t.research) == null ? void 0 : ee.text) ?? r.research.text,
              buttons: [((ue = t == null ? void 0 : t.research) == null ? void 0 : ue.button) ?? r.research.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            gt,
            {
              image: ((Re = (xe = t == null ? void 0 : t.inclusion) == null ? void 0 : xe.image) == null ? void 0 : Re.url) ?? r.inclusion.image.url,
              imageAltText: ((se = (Me = t == null ? void 0 : t.inclusion) == null ? void 0 : Me.image) == null ? void 0 : se.altText) ?? r.inclusion.image.altText,
              title: ((pe = t == null ? void 0 : t.inclusion) == null ? void 0 : pe.title) ?? r.inclusion.title,
              body: ((Oe = t == null ? void 0 : t.inclusion) == null ? void 0 : Oe.text) ?? r.inclusion.text,
              buttons: [
                ((Ae = t == null ? void 0 : t.inclusion) == null ? void 0 : Ae.button) ?? r.inclusion.button
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            gt,
            {
              image: ((Ze = (we = t == null ? void 0 : t.mentors) == null ? void 0 : we.image) == null ? void 0 : Ze.url) ?? r.mentors.image.url,
              imageAltText: ((Ee = (je = t == null ? void 0 : t.mentors) == null ? void 0 : je.image) == null ? void 0 : Ee.altText) ?? r.mentors.image.altText,
              title: ((Fe = t == null ? void 0 : t.mentors) == null ? void 0 : Fe.title) ?? r.mentors.title,
              body: ((qe = t == null ? void 0 : t.mentors) == null ? void 0 : qe.text) ?? r.mentors.text,
              buttons: [((ce = t == null ? void 0 : t.mentors) == null ? void 0 : ce.button) ?? r.mentors.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            gt,
            {
              image: ((I = (W = t == null ? void 0 : t.honors) == null ? void 0 : W.image) == null ? void 0 : I.url) ?? r.honors.image.url,
              imageAltText: ((q = (B = t == null ? void 0 : t.honors) == null ? void 0 : B.image) == null ? void 0 : q.altText) ?? r.honors.image.altText,
              title: ((x = t == null ? void 0 : t.honors) == null ? void 0 : x.title) ?? r.honors.title,
              body: ((ne = t == null ? void 0 : t.honors) == null ? void 0 : ne.text) ?? r.honors.text,
              buttons: [((j = t == null ? void 0 : t.honors) == null ? void 0 : j.button) ?? r.honors.button]
            }
          ) })
        ] })
      ]
    }
  );
};
Qc.propTypes = cc;
const yo = ({
  appPathFolder: e,
  dataSource: t,
  anchorMenu: r,
  hero: n,
  introContent: a,
  atAGlance: s,
  applicationRequirements: p,
  changeMajorRequirements: m,
  affordingCollege: b,
  flexibleDegreeOptions: f,
  careerOutlook: k,
  exampleCareers: A,
  globalOpportunity: O,
  attendOnline: U,
  programContactInfo: _,
  nextSteps: C,
  whyChooseAsu: N
}) => {
  var Oe, Ae, we, Ze;
  const [{ data: L, loading: $, error: G }, z] = Fl(), [w, ee] = ct(Yr({})), [ue, xe] = ct({ accelerateData: [], concurrentData: [] }), Re = bc(t, ym), { defaultState: Me } = Vt(an), { detailPageDefault: se } = Me;
  At(() => {
    typeof window < "u" && Bl({
      packageName: "app-degree-pages",
      component: "DetailPage",
      type: "NA",
      configuration: {
        dataSource: t
      }
    });
  }, []), At(() => {
    z(Re);
  }, [Re]), At(() => {
    if (L) {
      const je = Yr(L);
      ee(je), je.hasConcurrentOrAccelerateDegrees() && km(
        [
          je.getAccelerateDegrees(),
          je.getConcurrentDegrees()
        ],
        xe
      );
    }
  }, [L]);
  const pe = r ? Rm(r, w) : null;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(xc, {}),
    G && /* @__PURE__ */ d.jsx(nc, { message: mc }),
    !(n != null && n.hide) && /* @__PURE__ */ d.jsx("section", { children: /* @__PURE__ */ d.jsx(
      Ln,
      {
        image: (n == null ? void 0 : n.image) || se.hero.image,
        title: {
          ...se.hero.title,
          text: w.getMajorDesc(),
          ...n == null ? void 0 : n.title
        },
        contents: n == null ? void 0 : n.contents
      }
    ) }),
    /* @__PURE__ */ d.jsxs(vc, { as: "div", "data-is-loading": $, className: "main-section", children: [
      !$ && pe && Im(pe) && /* @__PURE__ */ d.jsx(gc, { anchorMenu: pe }),
      $ && /* @__PURE__ */ d.jsx(ac, {}),
      !$ && (L != null && L.error ? /* @__PURE__ */ d.jsx("section", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        Yi,
        {
          content: om,
          programNotFound: !0
        }
      ) }) : /* @__PURE__ */ d.jsxs("section", { className: "container mt-4 mb-0", children: [
        (a == null ? void 0 : a.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "row col-12", children: /* @__PURE__ */ d.jsx(
          ho,
          {
            breadcrumbs: a.breadcrumbs,
            section: n ? n.title.text : w.getMajorDesc()
          }
        ) }),
        /* @__PURE__ */ d.jsxs("div", { className: "row flex-column-reverse flex-sm-row", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-7 col-lg-7", children: [
            /* @__PURE__ */ d.jsxs("section", { className: "intro", children: [
              !w.isValidActiveProgram() && /* @__PURE__ */ d.jsx(Fc, { content: w.getAsuCustomText() }),
              !(a != null && a.hideMarketText) && ((a == null ? void 0 : a.contents) || w.getMarketText()) && /* @__PURE__ */ d.jsx(
                Vc,
                {
                  contents: (a == null ? void 0 : a.contents) || [
                    { text: w.getMarketText() }
                  ]
                }
              ),
              !(a != null && a.hideProgramDesc) && /* @__PURE__ */ d.jsx(
                Yi,
                {
                  content: w.getFullDescription(),
                  stemOptText: w.getStemOptText()
                }
              )
            ] }),
            !(s != null && s.hide) && /* @__PURE__ */ d.jsx(
              Pc,
              {
                offeredBy: (s == null ? void 0 : s.offeredBy) || {
                  text: w.getCollegeDesc(),
                  url: w.getCollegeUrl()
                },
                locations: (s == null ? void 0 : s.locations) || Nm(w),
                firstRequirementMathCourse: (s == null ? void 0 : s.firstRequirementMathCourse) || w.getMinMathReq(),
                mathIntensity: (s == null ? void 0 : s.mathIntensity) || w.getMathIntensity(),
                stemOptText: w.hasStemOptText()
              }
            ),
            !(a != null && a.hideRequiredCourses) && !w.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
              Zc,
              {
                onlineMajorMapURL: w.getOnlineMajorMapURL(),
                majorMapOnCampusURL: w.getGeneralDegreeMajorMap(),
                subPlnMajorMaps: w.getSubPlnMajorMaps(),
                subPlns: w.getSubPln()
              }
            ),
            !(p != null && p.hide) && /* @__PURE__ */ d.jsx(
              Ic,
              {
                graduateRequirements: w.isGradProgram() ? w.getGraduateRequirements() : null,
                isMinorOrCertificate: w.isMinorOrCertificate(),
                minorRequirements: w.getMinorCourseRequirements(),
                additionalRequirements: w.getAdmissionsRequirementsText(),
                transferRequirements: w.getTransferAdmission(),
                majorMapURL: w.getGeneralDegreeMajorMap()
              }
            ),
            !(m != null && m.hide) && !w.isMinorOrCertificate() && !w.isGradProgram() && /* @__PURE__ */ d.jsx(Mc, { content: w.getChangeMajor() })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-5 col-lg-5", children: [
            (a == null ? void 0 : a.video) && /* @__PURE__ */ d.jsx(
              Yc,
              {
                type: a.video.type,
                url: a.video.url,
                vttUrl: a.video.vttUrl,
                title: a.video.title
              }
            ),
            !(a != null && a.video) && /* @__PURE__ */ d.jsx(
              Gc,
              {
                url: ((Oe = a == null ? void 0 : a.image) == null ? void 0 : Oe.url) || se.introContent.image.url,
                altText: ((Ae = a == null ? void 0 : a.image) == null ? void 0 : Ae.altText) || se.introContent.image.altText
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
          !(C != null && C.hide) && !w.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
            Kc,
            {
              cards: C == null ? void 0 : C.cards,
              defaultCards: se.nextSteps.cards
            }
          ),
          !(b != null && b.hide) && /* @__PURE__ */ d.jsx(ph, {}),
          !(f != null && f.hide) && w.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ d.jsx(
            Bc,
            {
              acceleratedLinks: tl(
                ue.accelerateData
              ),
              concurrentLinks: tl(
                ue.concurrentData
              )
            }
          ),
          !(k != null && k.hide) && w.getAsuCareerOpportunity() && /* @__PURE__ */ d.jsx(
            Lc,
            {
              image: (k == null ? void 0 : k.image) || se.careerOutlook.image,
              contents: [{ text: w.getAsuCareerOpportunity() }]
            }
          ),
          !(A != null && A.hide) && w.hasCareerData() && /* @__PURE__ */ d.jsx(
            qc,
            {
              tableData: xm(w.getCareerData())
            }
          ),
          w.getProfessionalLicensureText() && /* @__PURE__ */ d.jsx(
            Xc,
            {
              content: w.getProfessionalLicensureText()
            }
          ),
          !(O != null && O.hide) && w.getGlobalExp() && /* @__PURE__ */ d.jsx(
            Wc,
            {
              contents: [{ text: w.getGlobalExp() }],
              image: (O == null ? void 0 : O.image) || se.globalOpportunity.image
            }
          ),
          !(N != null && N.hide) && /* @__PURE__ */ d.jsx(
            Qc,
            {
              sectionIntroText: (N == null ? void 0 : N.sectionIntroText) || se.whyChooseAsu.sectionIntroText,
              cards: N == null ? void 0 : N.cards,
              defaultCards: se.whyChooseAsu.cards
            }
          ),
          !(U != null && U.hide) && w.isOnline() && /* @__PURE__ */ d.jsx(
            Dc,
            {
              learnMoreLink: w.getCurriculumUrl(),
              image: (U == null ? void 0 : U.image) || se.attendOnline.image
            }
          )
        ] }),
        !(_ != null && _.hide) && /* @__PURE__ */ d.jsx("div", { className: "row", children: /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-6 col-lg-6 ", children: /* @__PURE__ */ d.jsx(
          Jc,
          {
            department: {
              text: w.getDepartmentName(),
              url: ((we = _ == null ? void 0 : _.department) == null ? void 0 : we.url) || w.getPlanUrl()
            },
            email: {
              text: w.getEmailAddress(),
              url: ((Ze = _ == null ? void 0 : _.email) == null ? void 0 : Ze.url) || w.getEmailAddress()
            },
            asuOfficeLoc: w.getAsuOfficeLoc(),
            phone: w.getPhone()
          }
        ) }) })
      ] }))
    ] })
  ] });
};
yo.propTypes = {
  appPathFolder: E.string,
  dataSource: sc,
  anchorMenu: E.shape(uo),
  hero: E.shape(Ln.propTypes),
  introContent: E.shape({
    hideMarketText: E.bool,
    hideProgramDesc: E.bool,
    hideRequiredCourses: E.bool,
    breadcrumbs: wa.arrayOf(Br),
    contents: wa.arrayOf(E.object),
    video: tm,
    image: kr
  }),
  atAGlance: E.shape({
    hide: E.bool,
    offeredBy: Br,
    locations: wa.arrayOf(Br),
    firstRequirementMathCourse: E.string,
    mathIntensity: E.string,
    timeCommitment: E.string
  }),
  applicationRequirements: E.shape({ hide: E.bool }),
  changeMajorRequirements: E.shape({ hide: E.bool }),
  affordingCollege: E.shape({ hide: E.bool }),
  flexibleDegreeOptions: E.shape({ hide: E.bool }),
  careerOutlook: E.shape({
    hide: E.bool,
    image: kr
  }),
  exampleCareers: E.shape({ hide: E.bool }),
  globalOpportunity: E.shape({
    hide: E.bool,
    image: kr
  }),
  attendOnline: E.shape({
    hide: E.bool,
    image: kr
  }),
  programContactInfo: E.shape({
    hide: E.bool,
    department: E.string,
    email: E.string
  }),
  nextSteps: E.shape({
    hide: E.bool,
    cards: E.arrayOf(Ur)
  }),
  whyChooseAsu: E.shape(cc)
};
const eu = (e) => /* @__PURE__ */ d.jsx(mo, { detailPageProps: e, children: /* @__PURE__ */ d.jsx(yo, { ...e }) });
eu.propTypes = yo.propTypes;
var ma = {}, sl;
function Ah() {
  if (sl) return ma;
  sl = 1;
  var e = fl;
  return ma.createRoot = e.createRoot, ma.hydrateRoot = e.hydrateRoot, ma;
}
var _h = Ah();
const tu = (e, t, r) => {
  const n = document.querySelector(r);
  _h.createRoot(n).render(ft.createElement(e, t));
}, Nh = ({ targetSelector: e, props: t }) => {
  tu(Nc, t, e);
}, Rh = ({ targetSelector: e, props: t }) => {
  tu(eu, t, e);
};
export {
  eu as DetailPage,
  Nc as ListingPage,
  Nh as initListingPage,
  Rh as initProgramDetailPage
};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*! @license DOMPurify 3.3.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.2/LICENSE */
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*!
 * Glide.js v3.6.2
 * (c) 2013-2024 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */
