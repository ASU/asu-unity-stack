import mt, { Component as mu, createContext as Hs, forwardRef as Vs, useRef as nn, useImperativeHandle as hu, useId as gu, useContext as qt, createElement as Gs, useState as ut, useEffect as At, useLayoutEffect as bu, useMemo as Ys, Fragment as Xs, createRef as yu } from "react";
import Ks from "react-dom";
function qo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qs = { exports: {} }, wn = {};
var Ni;
function xu() {
  if (Ni) return wn;
  Ni = 1;
  var e = mt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, b, f) {
    var A, E = {}, R = null, U = null;
    f !== void 0 && (R = "" + f), b.key !== void 0 && (R = "" + b.key), b.ref !== void 0 && (U = b.ref);
    for (A in b) n.call(b, A) && !s.hasOwnProperty(A) && (E[A] = b[A]);
    if (m && m.defaultProps) for (A in b = m.defaultProps, b) E[A] === void 0 && (E[A] = b[A]);
    return { $$typeof: t, type: m, key: R, ref: U, props: E, _owner: o.current };
  }
  return wn.Fragment = r, wn.jsx = p, wn.jsxs = p, wn;
}
Qs.exports = xu();
var d = Qs.exports;
function Bo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zs = { exports: {} }, Sn = {}, Pi;
function vu() {
  if (Pi) return Sn;
  Pi = 1;
  var e = mt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, b, f) {
    var A, E = {}, R = null, U = null;
    f !== void 0 && (R = "" + f), b.key !== void 0 && (R = "" + b.key), b.ref !== void 0 && (U = b.ref);
    for (A in b) n.call(b, A) && !s.hasOwnProperty(A) && (E[A] = b[A]);
    if (m && m.defaultProps) for (A in b = m.defaultProps, b) E[A] === void 0 && (E[A] = b[A]);
    return { $$typeof: t, type: m, key: R, ref: U, props: E, _owner: o.current };
  }
  return Sn.Fragment = r, Sn.jsx = p, Sn.jsxs = p, Sn;
}
Zs.exports = vu();
var W = Zs.exports, Js = { exports: {} }, Va, Di;
function wu() {
  if (Di) return Va;
  Di = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Va = e, Va;
}
var Ga, Ii;
function Su() {
  if (Ii) return Ga;
  Ii = 1;
  var e = wu();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ga = function() {
    function n(p, m, b, f, A, E) {
      if (E !== e) {
        var R = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw R.name = "Invariant Violation", R;
      }
    }
    n.isRequired = n;
    function o() {
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
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Ga;
}
Js.exports = Su()();
var ku = Js.exports;
const l = /* @__PURE__ */ Bo(ku), Tu = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), Ya = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), el = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.arrayOf(l.string),
    header: l.string,
    body: l.string
  })
}), Wo = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var tl = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", p = 0; p < arguments.length; p++) {
        var m = arguments[p];
        m && (s = o(s, n(m)));
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
        t.call(s, m) && s[m] && (p = o(p, m));
      return p;
    }
    function o(s, p) {
      return p ? s ? s + " " + p : s + p : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(tl);
var Cu = tl.exports;
const ct = /* @__PURE__ */ Bo(Cu);
function Au(e) {
  const [t, r] = ut(!1);
  return At(() => {
    const n = window.matchMedia(e);
    n.matches !== t && r(n.matches);
    const o = () => {
      r(n.matches);
    };
    return n.addEventListener("change", o), () => n.removeEventListener("change", o);
  }, [t, e]), t;
}
const Li = (e, t, r) => e ? t : r, Eu = (e) => (e || []).join(" "), {
  entries: rl,
  setPrototypeOf: Mi,
  isFrozen: _u,
  getPrototypeOf: Ru,
  getOwnPropertyDescriptor: ju
} = Object;
let {
  freeze: Et,
  seal: $t,
  create: nl
} = Object, {
  apply: xo,
  construct: vo
} = typeof Reflect < "u" && Reflect;
Et || (Et = function(e) {
  return e;
});
$t || ($t = function(e) {
  return e;
});
xo || (xo = function(e, t, r) {
  return e.apply(t, r);
});
vo || (vo = function(e, t) {
  return new e(...t);
});
const sa = _t(Array.prototype.forEach), Ou = _t(Array.prototype.lastIndexOf), Fi = _t(Array.prototype.pop), kn = _t(Array.prototype.push), Nu = _t(Array.prototype.splice), ga = _t(String.prototype.toLowerCase), Xa = _t(String.prototype.toString), $i = _t(String.prototype.match), Tn = _t(String.prototype.replace), Pu = _t(String.prototype.indexOf), Du = _t(String.prototype.trim), tr = _t(Object.prototype.hasOwnProperty), Tt = _t(RegExp.prototype.test), Cn = Iu(TypeError);
function _t(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    return xo(e, t, n);
  };
}
function Iu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return vo(e, r);
  };
}
function Me(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ga;
  Mi && Mi(e, null);
  let n = t.length;
  for (; n--; ) {
    let o = t[n];
    if (typeof o == "string") {
      const s = r(o);
      s !== o && (_u(t) || (t[n] = s), o = s);
    }
    e[o] = !0;
  }
  return e;
}
function Lu(e) {
  for (let t = 0; t < e.length; t++)
    tr(e, t) || (e[t] = null);
  return e;
}
function Ur(e) {
  const t = nl(null);
  for (const [r, n] of rl(e))
    tr(e, r) && (Array.isArray(n) ? t[r] = Lu(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = Ur(n) : t[r] = n);
  return t;
}
function An(e, t) {
  for (; e !== null; ) {
    const n = ju(e, t);
    if (n) {
      if (n.get)
        return _t(n.get);
      if (typeof n.value == "function")
        return _t(n.value);
    }
    e = Ru(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Ui = Et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ka = Et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Qa = Et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Mu = Et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Za = Et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Fu = Et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), zi = Et(["#text"]), qi = Et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ja = Et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Bi = Et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), la = Et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), $u = $t(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Uu = $t(/<%[\w\W]*|[\w\W]*%>/gm), zu = $t(/\$\{[\w\W]*/gm), qu = $t(/^data-[\-\w.\u00B7-\uFFFF]+$/), Bu = $t(/^aria-[\-\w]+$/), al = $t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Wu = $t(/^(?:\w+script|data):/i), Hu = $t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ol = $t(/^html$/i), Vu = $t(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Wi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Bu,
  ATTR_WHITESPACE: Hu,
  CUSTOM_ELEMENT: Vu,
  DATA_ATTR: qu,
  DOCTYPE_NAME: ol,
  ERB_EXPR: Uu,
  IS_ALLOWED_URI: al,
  IS_SCRIPT_OR_DATA: Wu,
  MUSTACHE_EXPR: $u,
  TMPLIT_EXPR: zu
});
const En = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Gu = function() {
  return typeof window > "u" ? null : window;
}, Yu = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  t && t.hasAttribute(n) && (r = t.getAttribute(n));
  const o = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(o, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, Hi = function() {
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
function il() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gu();
  const t = (x) => il(x);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== En.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, o = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: p,
    Node: m,
    Element: b,
    NodeFilter: f,
    NamedNodeMap: A = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: R,
    trustedTypes: U
  } = e, _ = b.prototype, T = An(_, "cloneNode"), P = An(_, "remove"), F = An(_, "nextSibling"), q = An(_, "childNodes"), Y = An(_, "parentNode");
  if (typeof p == "function") {
    const x = r.createElement("template");
    x.content && x.content.ownerDocument && (r = x.content.ownerDocument);
  }
  let z, S = "";
  const {
    implementation: oe,
    createNodeIterator: de,
    createDocumentFragment: xe,
    getElementsByTagName: Ne
  } = r, {
    importNode: Le
  } = n;
  let se = Hi();
  t.isSupported = typeof rl == "function" && typeof Y == "function" && oe && oe.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: _e,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: ve,
    ARIA_ATTR: Xe,
    IS_SCRIPT_OR_DATA: Re,
    ATTR_WHITESPACE: Ce,
    CUSTOM_ELEMENT: $e
  } = Wi;
  let {
    IS_ALLOWED_URI: ze
  } = Wi, le = null;
  const H = Me({}, [...Ui, ...Ka, ...Qa, ...Za, ...zi]);
  let N = null;
  const B = Me({}, [...qi, ...Ja, ...Bi, ...la]);
  let $ = Object.seal(nl(null, {
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
  })), y = null, te = null, j = !0, ie = !0, ee = !1, re = !0, X = !1, ce = !0, fe = !1, ae = !1, be = !1, ne = !1, me = !1, He = !1, ye = !0, ft = !1;
  const Qe = "user-content-";
  let we = !0, K = !1, ue = {}, Ze = null;
  const gt = Me({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qe = null;
  const ar = Me({}, ["audio", "video", "img", "source", "image", "track"]);
  let Mt = null;
  const pr = Me({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", yt = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml";
  let bt = it, Bt = !1, Wt = null;
  const Pr = Me({}, [wt, yt, it], Xa);
  let lt = Me({}, ["mi", "mo", "mn", "ms", "mtext"]), St = Me({}, ["annotation-xml"]);
  const or = Me({}, ["title", "style", "font", "a", "script"]);
  let De = null;
  const Ht = ["application/xhtml+xml", "text/html"], ir = "text/html";
  let Te = null, nt = null;
  const sr = r.createElement("form"), kt = function(x) {
    return x instanceof RegExp || x instanceof Function;
  }, Ft = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(nt && nt === x)) {
      if ((!x || typeof x != "object") && (x = {}), x = Ur(x), De = // eslint-disable-next-line unicorn/prefer-includes
      Ht.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? ir : x.PARSER_MEDIA_TYPE, Te = De === "application/xhtml+xml" ? Xa : ga, le = tr(x, "ALLOWED_TAGS") ? Me({}, x.ALLOWED_TAGS, Te) : H, N = tr(x, "ALLOWED_ATTR") ? Me({}, x.ALLOWED_ATTR, Te) : B, Wt = tr(x, "ALLOWED_NAMESPACES") ? Me({}, x.ALLOWED_NAMESPACES, Xa) : Pr, Mt = tr(x, "ADD_URI_SAFE_ATTR") ? Me(Ur(pr), x.ADD_URI_SAFE_ATTR, Te) : pr, qe = tr(x, "ADD_DATA_URI_TAGS") ? Me(Ur(ar), x.ADD_DATA_URI_TAGS, Te) : ar, Ze = tr(x, "FORBID_CONTENTS") ? Me({}, x.FORBID_CONTENTS, Te) : gt, y = tr(x, "FORBID_TAGS") ? Me({}, x.FORBID_TAGS, Te) : {}, te = tr(x, "FORBID_ATTR") ? Me({}, x.FORBID_ATTR, Te) : {}, ue = tr(x, "USE_PROFILES") ? x.USE_PROFILES : !1, j = x.ALLOW_ARIA_ATTR !== !1, ie = x.ALLOW_DATA_ATTR !== !1, ee = x.ALLOW_UNKNOWN_PROTOCOLS || !1, re = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, X = x.SAFE_FOR_TEMPLATES || !1, ce = x.SAFE_FOR_XML !== !1, fe = x.WHOLE_DOCUMENT || !1, ne = x.RETURN_DOM || !1, me = x.RETURN_DOM_FRAGMENT || !1, He = x.RETURN_TRUSTED_TYPE || !1, be = x.FORCE_BODY || !1, ye = x.SANITIZE_DOM !== !1, ft = x.SANITIZE_NAMED_PROPS || !1, we = x.KEEP_CONTENT !== !1, K = x.IN_PLACE || !1, ze = x.ALLOWED_URI_REGEXP || al, bt = x.NAMESPACE || it, lt = x.MATHML_TEXT_INTEGRATION_POINTS || lt, St = x.HTML_INTEGRATION_POINTS || St, $ = x.CUSTOM_ELEMENT_HANDLING || {}, x.CUSTOM_ELEMENT_HANDLING && kt(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && ($.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && kt(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && ($.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && ($.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), X && (ie = !1), me && (ne = !0), ue && (le = Me({}, zi), N = [], ue.html === !0 && (Me(le, Ui), Me(N, qi)), ue.svg === !0 && (Me(le, Ka), Me(N, Ja), Me(N, la)), ue.svgFilters === !0 && (Me(le, Qa), Me(N, Ja), Me(N, la)), ue.mathMl === !0 && (Me(le, Za), Me(N, Bi), Me(N, la))), x.ADD_TAGS && (le === H && (le = Ur(le)), Me(le, x.ADD_TAGS, Te)), x.ADD_ATTR && (N === B && (N = Ur(N)), Me(N, x.ADD_ATTR, Te)), x.ADD_URI_SAFE_ATTR && Me(Mt, x.ADD_URI_SAFE_ATTR, Te), x.FORBID_CONTENTS && (Ze === gt && (Ze = Ur(Ze)), Me(Ze, x.FORBID_CONTENTS, Te)), we && (le["#text"] = !0), fe && Me(le, ["html", "head", "body"]), le.table && (Me(le, ["tbody"]), delete y.tbody), x.TRUSTED_TYPES_POLICY) {
        if (typeof x.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof x.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        z = x.TRUSTED_TYPES_POLICY, S = z.createHTML("");
      } else
        z === void 0 && (z = Yu(U, o)), z !== null && typeof S == "string" && (S = z.createHTML(""));
      Et && Et(x), nt = x;
    }
  }, Vt = Me({}, [...Ka, ...Qa, ...Mu]), Gt = Me({}, [...Za, ...Fu]), Ar = function(x) {
    let w = Y(x);
    (!w || !w.tagName) && (w = {
      namespaceURI: bt,
      tagName: "template"
    });
    const O = ga(x.tagName), Q = ga(w.tagName);
    return Wt[x.namespaceURI] ? x.namespaceURI === yt ? w.namespaceURI === it ? O === "svg" : w.namespaceURI === wt ? O === "svg" && (Q === "annotation-xml" || lt[Q]) : !!Vt[O] : x.namespaceURI === wt ? w.namespaceURI === it ? O === "math" : w.namespaceURI === yt ? O === "math" && St[Q] : !!Gt[O] : x.namespaceURI === it ? w.namespaceURI === yt && !St[Q] || w.namespaceURI === wt && !lt[Q] ? !1 : !Gt[O] && (or[O] || !Vt[O]) : !!(De === "application/xhtml+xml" && Wt[x.namespaceURI]) : !1;
  }, st = function(x) {
    kn(t.removed, {
      element: x
    });
    try {
      Y(x).removeChild(x);
    } catch {
      P(x);
    }
  }, Ot = function(x, w) {
    try {
      kn(t.removed, {
        attribute: w.getAttributeNode(x),
        from: w
      });
    } catch {
      kn(t.removed, {
        attribute: null,
        from: w
      });
    }
    if (w.removeAttribute(x), x === "is")
      if (ne || me)
        try {
          st(w);
        } catch {
        }
      else
        try {
          w.setAttribute(x, "");
        } catch {
        }
  }, fr = function(x) {
    let w = null, O = null;
    if (be)
      x = "<remove></remove>" + x;
    else {
      const je = $i(x, /^[\r\n\t ]+/);
      O = je && je[0];
    }
    De === "application/xhtml+xml" && bt === it && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
    const Q = z ? z.createHTML(x) : x;
    if (bt === it)
      try {
        w = new R().parseFromString(Q, De);
      } catch {
      }
    if (!w || !w.documentElement) {
      w = oe.createDocument(bt, "template", null);
      try {
        w.documentElement.innerHTML = Bt ? S : Q;
      } catch {
      }
    }
    const Se = w.body || w.documentElement;
    return x && O && Se.insertBefore(r.createTextNode(O), Se.childNodes[0] || null), bt === it ? Ne.call(w, fe ? "html" : "body")[0] : fe ? w.documentElement : Se;
  }, mr = function(x) {
    return de.call(
      x.ownerDocument || x,
      x,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Nt = function(x) {
    return x instanceof E && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof A) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
  }, lr = function(x) {
    return typeof m == "function" && x instanceof m;
  };
  function Je(x, w, O) {
    sa(x, (Q) => {
      Q.call(t, w, O, nt);
    });
  }
  const Yt = function(x) {
    let w = null;
    if (Je(se.beforeSanitizeElements, x, null), Nt(x))
      return st(x), !0;
    const O = Te(x.nodeName);
    if (Je(se.uponSanitizeElement, x, {
      tagName: O,
      allowedTags: le
    }), x.hasChildNodes() && !lr(x.firstElementChild) && Tt(/<[/\w]/g, x.innerHTML) && Tt(/<[/\w]/g, x.textContent) || x.nodeType === En.progressingInstruction || ce && x.nodeType === En.comment && Tt(/<[/\w]/g, x.data))
      return st(x), !0;
    if (!le[O] || y[O]) {
      if (!y[O] && Pt(O) && ($.tagNameCheck instanceof RegExp && Tt($.tagNameCheck, O) || $.tagNameCheck instanceof Function && $.tagNameCheck(O)))
        return !1;
      if (we && !Ze[O]) {
        const Q = Y(x) || x.parentNode, Se = q(x) || x.childNodes;
        if (Se && Q) {
          const je = Se.length;
          for (let Ue = je - 1; Ue >= 0; --Ue) {
            const Ee = T(Se[Ue], !0);
            Ee.__removalCount = (x.__removalCount || 0) + 1, Q.insertBefore(Ee, F(x));
          }
        }
      }
      return st(x), !0;
    }
    return x instanceof b && !Ar(x) || (O === "noscript" || O === "noembed" || O === "noframes") && Tt(/<\/no(script|embed|frames)/i, x.innerHTML) ? (st(x), !0) : (X && x.nodeType === En.text && (w = x.textContent, sa([pe, _e, Ae], (Q) => {
      w = Tn(w, Q, " ");
    }), x.textContent !== w && (kn(t.removed, {
      element: x.cloneNode()
    }), x.textContent = w)), Je(se.afterSanitizeElements, x, null), !1);
  }, hr = function(x, w, O) {
    if (ye && (w === "id" || w === "name") && (O in r || O in sr))
      return !1;
    if (!(ie && !te[w] && Tt(ve, w)) && !(j && Tt(Xe, w))) {
      if (!N[w] || te[w]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Pt(x) && ($.tagNameCheck instanceof RegExp && Tt($.tagNameCheck, x) || $.tagNameCheck instanceof Function && $.tagNameCheck(x)) && ($.attributeNameCheck instanceof RegExp && Tt($.attributeNameCheck, w) || $.attributeNameCheck instanceof Function && $.attributeNameCheck(w)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          w === "is" && $.allowCustomizedBuiltInElements && ($.tagNameCheck instanceof RegExp && Tt($.tagNameCheck, O) || $.tagNameCheck instanceof Function && $.tagNameCheck(O)))
        ) return !1;
      } else if (!Mt[w] && !Tt(ze, Tn(O, Ce, "")) && !((w === "src" || w === "xlink:href" || w === "href") && x !== "script" && Pu(O, "data:") === 0 && qe[x]) && !(ee && !Tt(Re, Tn(O, Ce, ""))) && O)
        return !1;
    }
    return !0;
  }, Pt = function(x) {
    return x !== "annotation-xml" && $i(x, $e);
  }, gr = function(x) {
    Je(se.beforeSanitizeAttributes, x, null);
    const {
      attributes: w
    } = x;
    if (!w || Nt(x))
      return;
    const O = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let Q = w.length;
    for (; Q--; ) {
      const Se = w[Q], {
        name: je,
        namespaceURI: Ue,
        value: Ee
      } = Se, et = Te(je);
      let Ke = je === "value" ? Ee : Du(Ee);
      if (O.attrName = et, O.attrValue = Ke, O.keepAttr = !0, O.forceKeepAttr = void 0, Je(se.uponSanitizeAttribute, x, O), Ke = O.attrValue, ft && (et === "id" || et === "name") && (Ot(je, x), Ke = Qe + Ke), ce && Tt(/((--!?|])>)|<\/(style|title)/i, Ke)) {
        Ot(je, x);
        continue;
      }
      if (O.forceKeepAttr || (Ot(je, x), !O.keepAttr))
        continue;
      if (!re && Tt(/\/>/i, Ke)) {
        Ot(je, x);
        continue;
      }
      X && sa([pe, _e, Ae], (yr) => {
        Ke = Tn(Ke, yr, " ");
      });
      const at = Te(x.nodeName);
      if (hr(at, et, Ke)) {
        if (z && typeof U == "object" && typeof U.getAttributeType == "function" && !Ue)
          switch (U.getAttributeType(at, et)) {
            case "TrustedHTML": {
              Ke = z.createHTML(Ke);
              break;
            }
            case "TrustedScriptURL": {
              Ke = z.createScriptURL(Ke);
              break;
            }
          }
        try {
          Ue ? x.setAttributeNS(Ue, je, Ke) : x.setAttribute(je, Ke), Nt(x) ? st(x) : Fi(t.removed);
        } catch {
        }
      }
    }
    Je(se.afterSanitizeAttributes, x, null);
  }, br = function x(w) {
    let O = null;
    const Q = mr(w);
    for (Je(se.beforeSanitizeShadowDOM, w, null); O = Q.nextNode(); )
      Je(se.uponSanitizeShadowNode, O, null), Yt(O), gr(O), O.content instanceof s && x(O.content);
    Je(se.afterSanitizeShadowDOM, w, null);
  };
  return t.sanitize = function(x) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, O = null, Q = null, Se = null, je = null;
    if (Bt = !x, Bt && (x = "<!-->"), typeof x != "string" && !lr(x))
      if (typeof x.toString == "function") {
        if (x = x.toString(), typeof x != "string")
          throw Cn("dirty is not a string, aborting");
      } else
        throw Cn("toString is not a function");
    if (!t.isSupported)
      return x;
    if (ae || Ft(w), t.removed = [], typeof x == "string" && (K = !1), K) {
      if (x.nodeName) {
        const et = Te(x.nodeName);
        if (!le[et] || y[et])
          throw Cn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (x instanceof m)
      O = fr("<!---->"), Q = O.ownerDocument.importNode(x, !0), Q.nodeType === En.element && Q.nodeName === "BODY" || Q.nodeName === "HTML" ? O = Q : O.appendChild(Q);
    else {
      if (!ne && !X && !fe && // eslint-disable-next-line unicorn/prefer-includes
      x.indexOf("<") === -1)
        return z && He ? z.createHTML(x) : x;
      if (O = fr(x), !O)
        return ne ? null : He ? S : "";
    }
    O && be && st(O.firstChild);
    const Ue = mr(K ? x : O);
    for (; Se = Ue.nextNode(); )
      Yt(Se), gr(Se), Se.content instanceof s && br(Se.content);
    if (K)
      return x;
    if (ne) {
      if (me)
        for (je = xe.call(O.ownerDocument); O.firstChild; )
          je.appendChild(O.firstChild);
      else
        je = O;
      return (N.shadowroot || N.shadowrootmode) && (je = Le.call(n, je, !0)), je;
    }
    let Ee = fe ? O.outerHTML : O.innerHTML;
    return fe && le["!doctype"] && O.ownerDocument && O.ownerDocument.doctype && O.ownerDocument.doctype.name && Tt(ol, O.ownerDocument.doctype.name) && (Ee = "<!DOCTYPE " + O.ownerDocument.doctype.name + `>
` + Ee), X && sa([pe, _e, Ae], (et) => {
      Ee = Tn(Ee, et, " ");
    }), z && He ? z.createHTML(Ee) : Ee;
  }, t.setConfig = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ft(x), ae = !0;
  }, t.clearConfig = function() {
    nt = null, ae = !1;
  }, t.isValidAttribute = function(x, w, O) {
    nt || Ft({});
    const Q = Te(x), Se = Te(w);
    return hr(Q, Se, O);
  }, t.addHook = function(x, w) {
    typeof w == "function" && kn(se[x], w);
  }, t.removeHook = function(x, w) {
    if (w !== void 0) {
      const O = Ou(se[x], w);
      return O === -1 ? void 0 : Nu(se[x], O, 1)[0];
    }
    return Fi(se[x]);
  }, t.removeHooks = function(x) {
    se[x] = [];
  }, t.removeAllHooks = function() {
    se = Hi();
  }, t;
}
var Xu = il();
function Ku(e) {
  return (e ? document.querySelector(e) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
const Wr = (e) => ({ __html: Xu.sanitize(e) }), Vi = (e, t, r) => {
  let n = e;
  const o = [];
  for (; n < t; )
    n > 0 && n <= r && o.push(n), n += 1;
  return o;
};
let eo = !1;
const Qu = (e, t) => {
  eo || (eo = !0, setTimeout(() => {
    e(), eo = !1;
  }, t));
};
let Gi;
const Zu = (e, t) => {
  window.clearTimeout(Gi), Gi = window.setTimeout(e, t);
};
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
const sl = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: o = "",
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
    section: o.toLowerCase(),
    text: s.toLowerCase(),
    component: m.toLowerCase()
  };
  b && b.push(f);
};
var $r = {}, Yi;
function Ju() {
  if (Yi) return $r;
  Yi = 1;
  var e = mt;
  function t(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, g = 1; g < arguments.length; g++) u += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, o = {}, s = {};
  function p(a) {
    return r.call(s, a) ? !0 : r.call(o, a) ? !1 : n.test(a) ? s[a] = !0 : (o[a] = !0, !1);
  }
  function m(a, u, g, k, M, D, V) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = k, this.attributeNamespace = M, this.mustUseProperty = g, this.propertyName = a, this.type = u, this.sanitizeURL = D, this.removeEmptyString = V;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    b[a] = new m(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    b[u] = new m(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    b[a] = new m(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    b[a] = new m(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    b[a] = new m(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    b[a] = new m(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    b[a] = new m(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    b[a] = new m(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    b[a] = new m(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var f = /[\-:]([a-z])/g;
  function A(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      f,
      A
    );
    b[u] = new m(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(f, A);
    b[u] = new m(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(f, A);
    b[u] = new m(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    b[a] = new m(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    b[a] = new m(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var E = {
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
  }, R = ["Webkit", "ms", "Moz", "O"];
  Object.keys(E).forEach(function(a) {
    R.forEach(function(u) {
      u = u + a.charAt(0).toUpperCase() + a.substring(1), E[u] = E[a];
    });
  });
  var U = /["'&<>]/;
  function _(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var u = U.exec(a);
    if (u) {
      var g = "", k, M = 0;
      for (k = u.index; k < a.length; k++) {
        switch (a.charCodeAt(k)) {
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
        M !== k && (g += a.substring(M, k)), M = k + 1, g += u;
      }
      a = M !== k ? g + a.substring(M, k) : g;
    }
    return a;
  }
  var T = /([A-Z])/g, P = /^ms-/, F = Array.isArray;
  function q(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function Y(a, u, g) {
    switch (u) {
      case "select":
        return q(1, g.value != null ? g.value : g.defaultValue);
      case "svg":
        return q(2, null);
      case "math":
        return q(3, null);
      case "foreignObject":
        return q(1, null);
      case "table":
        return q(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return q(5, null);
      case "colgroup":
        return q(7, null);
      case "tr":
        return q(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? q(1, null) : a;
  }
  var z = /* @__PURE__ */ new Map();
  function S(a, u, g) {
    if (typeof g != "object") throw Error(t(62));
    u = !0;
    for (var k in g) if (r.call(g, k)) {
      var M = g[k];
      if (M != null && typeof M != "boolean" && M !== "") {
        if (k.indexOf("--") === 0) {
          var D = _(k);
          M = _(("" + M).trim());
        } else {
          D = k;
          var V = z.get(D);
          V !== void 0 || (V = _(D.replace(T, "-$1").toLowerCase().replace(P, "-ms-")), z.set(D, V)), D = V, M = typeof M == "number" ? M === 0 || r.call(E, k) ? "" + M : M + "px" : _(("" + M).trim());
        }
        u ? (u = !1, a.push(' style="', D, ":", M)) : a.push(";", D, ":", M);
      }
    }
    u || a.push('"');
  }
  function oe(a, u, g, k) {
    switch (g) {
      case "style":
        S(a, u, k);
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
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (g = u.attributeName, u.type) {
          case 3:
            k && a.push(" ", g, '=""');
            break;
          case 4:
            k === !0 ? a.push(" ", g, '=""') : k !== !1 && a.push(" ", g, '="', _(k), '"');
            break;
          case 5:
            isNaN(k) || a.push(" ", g, '="', _(k), '"');
            break;
          case 6:
            !isNaN(k) && 1 <= k && a.push(" ", g, '="', _(k), '"');
            break;
          default:
            u.sanitizeURL && (k = "" + k), a.push(" ", g, '="', _(k), '"');
        }
      } else if (p(g)) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = g.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        a.push(" ", g, '="', _(k), '"');
      }
    }
  }
  function de(a, u, g) {
    if (u != null) {
      if (g != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && a.push("" + u);
    }
  }
  function xe(a) {
    var u = "";
    return e.Children.forEach(a, function(g) {
      g != null && (u += g);
    }), u;
  }
  function Ne(a, u, g, k) {
    a.push(pe(g));
    var M = g = null, D;
    for (D in u) if (r.call(u, D)) {
      var V = u[D];
      if (V != null) switch (D) {
        case "children":
          g = V;
          break;
        case "dangerouslySetInnerHTML":
          M = V;
          break;
        default:
          oe(a, k, D, V);
      }
    }
    return a.push(">"), de(a, M, g), typeof g == "string" ? (a.push(_(g)), null) : g;
  }
  var Le = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, se = /* @__PURE__ */ new Map();
  function pe(a) {
    var u = se.get(a);
    if (u === void 0) {
      if (!Le.test(a)) throw Error(t(65, a));
      u = "<" + a, se.set(a, u);
    }
    return u;
  }
  function _e(a, u, g, k, M) {
    switch (u) {
      case "select":
        a.push(pe("select"));
        var D = null, V = null;
        for (Oe in g) if (r.call(g, Oe)) {
          var J = g[Oe];
          if (J != null) switch (Oe) {
            case "children":
              D = J;
              break;
            case "dangerouslySetInnerHTML":
              V = J;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              oe(a, k, Oe, J);
          }
        }
        return a.push(">"), de(a, V, D), D;
      case "option":
        V = M.selectedValue, a.push(pe("option"));
        var he = J = null, ke = null, Oe = null;
        for (D in g) if (r.call(g, D)) {
          var ot = g[D];
          if (ot != null) switch (D) {
            case "children":
              J = ot;
              break;
            case "selected":
              ke = ot;
              break;
            case "dangerouslySetInnerHTML":
              Oe = ot;
              break;
            case "value":
              he = ot;
            default:
              oe(a, k, D, ot);
          }
        }
        if (V != null) if (g = he !== null ? "" + he : xe(J), F(V)) {
          for (k = 0; k < V.length; k++)
            if ("" + V[k] === g) {
              a.push(' selected=""');
              break;
            }
        } else "" + V === g && a.push(' selected=""');
        else ke && a.push(' selected=""');
        return a.push(">"), de(a, Oe, J), J;
      case "textarea":
        a.push(pe("textarea")), Oe = V = D = null;
        for (J in g) if (r.call(g, J) && (he = g[J], he != null)) switch (J) {
          case "children":
            Oe = he;
            break;
          case "value":
            D = he;
            break;
          case "defaultValue":
            V = he;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            oe(
              a,
              k,
              J,
              he
            );
        }
        if (D === null && V !== null && (D = V), a.push(">"), Oe != null) {
          if (D != null) throw Error(t(92));
          if (F(Oe) && 1 < Oe.length) throw Error(t(93));
          D = "" + Oe;
        }
        return typeof D == "string" && D[0] === `
` && a.push(`
`), D !== null && a.push(_("" + D)), null;
      case "input":
        a.push(pe("input")), he = Oe = J = D = null;
        for (V in g) if (r.call(g, V) && (ke = g[V], ke != null)) switch (V) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            he = ke;
            break;
          case "defaultValue":
            J = ke;
            break;
          case "checked":
            Oe = ke;
            break;
          case "value":
            D = ke;
            break;
          default:
            oe(a, k, V, ke);
        }
        return Oe !== null ? oe(a, k, "checked", Oe) : he !== null && oe(a, k, "checked", he), D !== null ? oe(a, k, "value", D) : J !== null && oe(a, k, "value", J), a.push("/>"), null;
      case "menuitem":
        a.push(pe("menuitem"));
        for (var Kt in g) if (r.call(g, Kt) && (D = g[Kt], D != null)) switch (Kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            oe(a, k, Kt, D);
        }
        return a.push(">"), null;
      case "title":
        a.push(pe("title")), D = null;
        for (ot in g) if (r.call(g, ot) && (V = g[ot], V != null)) switch (ot) {
          case "children":
            D = V;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            oe(a, k, ot, V);
        }
        return a.push(">"), D;
      case "listing":
      case "pre":
        a.push(pe(u)), V = D = null;
        for (he in g) if (r.call(g, he) && (J = g[he], J != null)) switch (he) {
          case "children":
            D = J;
            break;
          case "dangerouslySetInnerHTML":
            V = J;
            break;
          default:
            oe(a, k, he, J);
        }
        if (a.push(">"), V != null) {
          if (D != null) throw Error(t(60));
          if (typeof V != "object" || !("__html" in V)) throw Error(t(61));
          g = V.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? a.push(`
`, g) : a.push("" + g));
        }
        return typeof D == "string" && D[0] === `
` && a.push(`
`), D;
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
        a.push(pe(u));
        for (var Qt in g) if (r.call(g, Qt) && (D = g[Qt], D != null)) switch (Qt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            oe(a, k, Qt, D);
        }
        return a.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ne(
          a,
          g,
          u,
          k
        );
      case "html":
        return M.insertionMode === 0 && a.push("<!DOCTYPE html>"), Ne(a, g, u, k);
      default:
        if (u.indexOf("-") === -1 && typeof g.is != "string") return Ne(a, g, u, k);
        a.push(pe(u)), V = D = null;
        for (ke in g) if (r.call(g, ke) && (J = g[ke], J != null)) switch (ke) {
          case "children":
            D = J;
            break;
          case "dangerouslySetInnerHTML":
            V = J;
            break;
          case "style":
            S(a, k, J);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            p(ke) && typeof J != "function" && typeof J != "symbol" && a.push(" ", ke, '="', _(J), '"');
        }
        return a.push(">"), de(a, V, D), D;
    }
  }
  function Ae(a, u, g) {
    if (a.push('<!--$?--><template id="'), g === null) throw Error(t(395));
    return a.push(g), a.push('"></template>');
  }
  function ve(a, u, g, k) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return a.push('<div hidden id="'), a.push(u.segmentPrefix), u = k.toString(16), a.push(u), a.push('">');
      case 2:
        return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(u.segmentPrefix), u = k.toString(16), a.push(u), a.push('">');
      case 3:
        return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(u.segmentPrefix), u = k.toString(16), a.push(u), a.push('">');
      case 4:
        return a.push('<table hidden id="'), a.push(u.segmentPrefix), u = k.toString(16), a.push(u), a.push('">');
      case 5:
        return a.push('<table hidden><tbody id="'), a.push(u.segmentPrefix), u = k.toString(16), a.push(u), a.push('">');
      case 6:
        return a.push('<table hidden><tr id="'), a.push(u.segmentPrefix), u = k.toString(16), a.push(u), a.push('">');
      case 7:
        return a.push('<table hidden><colgroup id="'), a.push(u.segmentPrefix), u = k.toString(16), a.push(u), a.push('">');
      default:
        throw Error(t(397));
    }
  }
  function Xe(a, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return a.push("</div>");
      case 2:
        return a.push("</svg>");
      case 3:
        return a.push("</math>");
      case 4:
        return a.push("</table>");
      case 5:
        return a.push("</tbody></table>");
      case 6:
        return a.push("</tr></table>");
      case 7:
        return a.push("</colgroup></table>");
      default:
        throw Error(t(397));
    }
  }
  var Re = /[<\u2028\u2029]/g;
  function Ce(a) {
    return JSON.stringify(a).replace(Re, function(u) {
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
  function $e(a, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: a };
  }
  function ze(a, u, g, k) {
    return g.generateStaticMarkup ? (a.push(_(u)), !1) : (u === "" ? a = k : (k && a.push("<!-- -->"), a.push(_(u)), a = !0), a);
  }
  var le = Object.assign, H = Symbol.for("react.element"), N = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), j = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), fe = Symbol.for("react.scope"), ae = Symbol.for("react.debug_trace_mode"), be = Symbol.for("react.legacy_hidden"), ne = Symbol.for("react.default_value"), me = Symbol.iterator;
  function He(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case B:
        return "Fragment";
      case N:
        return "Portal";
      case y:
        return "Profiler";
      case $:
        return "StrictMode";
      case ee:
        return "Suspense";
      case re:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case j:
        return (a.displayName || "Context") + ".Consumer";
      case te:
        return (a._context.displayName || "Context") + ".Provider";
      case ie:
        var u = a.render;
        return a = a.displayName, a || (a = u.displayName || u.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case X:
        return u = a.displayName || null, u !== null ? u : He(a.type) || "Memo";
      case ce:
        u = a._payload, a = a._init;
        try {
          return He(a(u));
        } catch {
        }
    }
    return null;
  }
  var ye = {};
  function ft(a, u) {
    if (a = a.contextTypes, !a) return ye;
    var g = {}, k;
    for (k in a) g[k] = u[k];
    return g;
  }
  var Qe = null;
  function we(a, u) {
    if (a !== u) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var g = u.parent;
      if (a === null) {
        if (g !== null) throw Error(t(401));
      } else {
        if (g === null) throw Error(t(401));
        we(a, g);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function K(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && K(a);
  }
  function ue(a) {
    var u = a.parent;
    u !== null && ue(u), a.context._currentValue2 = a.value;
  }
  function Ze(a, u) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === u.depth ? we(a, u) : Ze(a, u);
  }
  function gt(a, u) {
    var g = u.parent;
    if (g === null) throw Error(t(402));
    a.depth === g.depth ? we(a, g) : gt(a, g), u.context._currentValue2 = u.value;
  }
  function qe(a) {
    var u = Qe;
    u !== a && (u === null ? ue(a) : a === null ? K(u) : u.depth === a.depth ? we(u, a) : u.depth > a.depth ? Ze(u, a) : gt(u, a), Qe = a);
  }
  var ar = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function Mt(a, u, g, k) {
    var M = a.state !== void 0 ? a.state : null;
    a.updater = ar, a.props = g, a.state = M;
    var D = { queue: [], replace: !1 };
    a._reactInternals = D;
    var V = u.contextType;
    if (a.context = typeof V == "object" && V !== null ? V._currentValue2 : k, V = u.getDerivedStateFromProps, typeof V == "function" && (V = V(g, M), M = V == null ? M : le({}, M, V), a.state = M), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && ar.enqueueReplaceState(a, a.state, null), D.queue !== null && 0 < D.queue.length) if (u = D.queue, V = D.replace, D.queue = null, D.replace = !1, V && u.length === 1) a.state = u[0];
    else {
      for (D = V ? u[0] : a.state, M = !0, V = V ? 1 : 0; V < u.length; V++) {
        var J = u[V];
        J = typeof J == "function" ? J.call(a, D, g, k) : J, J != null && (M ? (M = !1, D = le({}, D, J)) : le(D, J));
      }
      a.state = D;
    }
    else D.queue = null;
  }
  var pr = { id: 1, overflow: "" };
  function wt(a, u, g) {
    var k = a.id;
    a = a.overflow;
    var M = 32 - yt(k) - 1;
    k &= ~(1 << M), g += 1;
    var D = 32 - yt(u) + M;
    if (30 < D) {
      var V = M - M % 5;
      return D = (k & (1 << V) - 1).toString(32), k >>= V, M -= V, { id: 1 << 32 - yt(u) + M | g << M | k, overflow: D + a };
    }
    return { id: 1 << D | g << M | k, overflow: a };
  }
  var yt = Math.clz32 ? Math.clz32 : Bt, it = Math.log, bt = Math.LN2;
  function Bt(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (it(a) / bt | 0) | 0;
  }
  function Wt(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var Pr = typeof Object.is == "function" ? Object.is : Wt, lt = null, St = null, or = null, De = null, Ht = !1, ir = !1, Te = 0, nt = null, sr = 0;
  function kt() {
    if (lt === null) throw Error(t(321));
    return lt;
  }
  function Ft() {
    if (0 < sr) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Vt() {
    return De === null ? or === null ? (Ht = !1, or = De = Ft()) : (Ht = !0, De = or) : De.next === null ? (Ht = !1, De = De.next = Ft()) : (Ht = !0, De = De.next), De;
  }
  function Gt() {
    St = lt = null, ir = !1, or = null, sr = 0, De = nt = null;
  }
  function Ar(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function st(a, u, g) {
    if (lt = kt(), De = Vt(), Ht) {
      var k = De.queue;
      if (u = k.dispatch, nt !== null && (g = nt.get(k), g !== void 0)) {
        nt.delete(k), k = De.memoizedState;
        do
          k = a(k, g.action), g = g.next;
        while (g !== null);
        return De.memoizedState = k, [k, u];
      }
      return [De.memoizedState, u];
    }
    return a = a === Ar ? typeof u == "function" ? u() : u : g !== void 0 ? g(u) : u, De.memoizedState = a, a = De.queue = { last: null, dispatch: null }, a = a.dispatch = fr.bind(null, lt, a), [De.memoizedState, a];
  }
  function Ot(a, u) {
    if (lt = kt(), De = Vt(), u = u === void 0 ? null : u, De !== null) {
      var g = De.memoizedState;
      if (g !== null && u !== null) {
        var k = g[1];
        e: if (k === null) k = !1;
        else {
          for (var M = 0; M < k.length && M < u.length; M++) if (!Pr(u[M], k[M])) {
            k = !1;
            break e;
          }
          k = !0;
        }
        if (k) return g[0];
      }
    }
    return a = a(), De.memoizedState = [a, u], a;
  }
  function fr(a, u, g) {
    if (25 <= sr) throw Error(t(301));
    if (a === lt) if (ir = !0, a = { action: g, next: null }, nt === null && (nt = /* @__PURE__ */ new Map()), g = nt.get(u), g === void 0) nt.set(u, a);
    else {
      for (u = g; u.next !== null; ) u = u.next;
      u.next = a;
    }
  }
  function mr() {
    throw Error(t(394));
  }
  function Nt() {
  }
  var lr = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    return kt(), a._currentValue2;
  }, useMemo: Ot, useReducer: st, useRef: function(a) {
    lt = kt(), De = Vt();
    var u = De.memoizedState;
    return u === null ? (a = { current: a }, De.memoizedState = a) : u;
  }, useState: function(a) {
    return st(Ar, a);
  }, useInsertionEffect: Nt, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return Ot(function() {
      return a;
    }, u);
  }, useImperativeHandle: Nt, useEffect: Nt, useDebugValue: Nt, useDeferredValue: function(a) {
    return kt(), a;
  }, useTransition: function() {
    return kt(), [
      !1,
      mr
    ];
  }, useId: function() {
    var a = St.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - yt(a) - 1)).toString(32) + u;
    var g = Je;
    if (g === null) throw Error(t(404));
    return u = Te++, a = ":" + g.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return kt(), u(a._source);
  }, useSyncExternalStore: function(a, u, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, Je = null, Yt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function hr(a) {
    return console.error(a), null;
  }
  function Pt() {
  }
  function gr(a, u, g, k, M, D, V, J, he) {
    var ke = [], Oe = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: k, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Oe, pingedTasks: ke, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: M === void 0 ? hr : M, onAllReady: Pt, onShellReady: V === void 0 ? Pt : V, onShellError: Pt, onFatalError: Pt }, g = x(u, 0, null, g, !1, !1), g.parentFlushed = !0, a = br(u, a, null, g, Oe, ye, null, pr), ke.push(a), u;
  }
  function br(a, u, g, k, M, D, V, J) {
    a.allPendingTasks++, g === null ? a.pendingRootTasks++ : g.pendingTasks++;
    var he = { node: u, ping: function() {
      var ke = a.pingedTasks;
      ke.push(he), ke.length === 1 && Hn(a);
    }, blockedBoundary: g, blockedSegment: k, abortSet: M, legacyContext: D, context: V, treeContext: J };
    return M.add(he), he;
  }
  function x(a, u, g, k, M, D) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: k, boundary: g, lastPushedText: M, textEmbedded: D };
  }
  function w(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function O(a, u) {
    var g = a.onShellError;
    g(u), g = a.onFatalError, g(u), a.destination !== null ? (a.status = 2, a.destination.destroy(u)) : (a.status = 1, a.fatalError = u);
  }
  function Q(a, u, g, k, M) {
    for (lt = {}, St = u, Te = 0, a = g(k, M); ir; ) ir = !1, Te = 0, sr += 1, De = null, a = g(k, M);
    return Gt(), a;
  }
  function Se(a, u, g, k) {
    var M = g.render(), D = k.childContextTypes;
    if (D != null) {
      var V = u.legacyContext;
      if (typeof g.getChildContext != "function") k = V;
      else {
        g = g.getChildContext();
        for (var J in g) if (!(J in D)) throw Error(t(108, He(k) || "Unknown", J));
        k = le({}, V, g);
      }
      u.legacyContext = k, Ee(a, u, M), u.legacyContext = V;
    } else Ee(a, u, M);
  }
  function je(a, u) {
    if (a && a.defaultProps) {
      u = le({}, u), a = a.defaultProps;
      for (var g in a) u[g] === void 0 && (u[g] = a[g]);
      return u;
    }
    return u;
  }
  function Ue(a, u, g, k, M) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      M = ft(g, u.legacyContext);
      var D = g.contextType;
      D = new g(k, typeof D == "object" && D !== null ? D._currentValue2 : M), Mt(D, g, k, M), Se(a, u, D, g);
    } else {
      D = ft(g, u.legacyContext), M = Q(a, u, g, k, D);
      var V = Te !== 0;
      if (typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0) Mt(M, g, k, D), Se(a, u, M, g);
      else if (V) {
        k = u.treeContext, u.treeContext = wt(k, 1, 0);
        try {
          Ee(a, u, M);
        } finally {
          u.treeContext = k;
        }
      } else Ee(a, u, M);
    }
    else if (typeof g == "string") {
      switch (M = u.blockedSegment, D = _e(M.chunks, g, k, a.responseState, M.formatContext), M.lastPushedText = !1, V = M.formatContext, M.formatContext = Y(V, g, k), Ke(a, u, D), M.formatContext = V, g) {
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
          M.chunks.push("</", g, ">");
      }
      M.lastPushedText = !1;
    } else {
      switch (g) {
        case be:
        case ae:
        case $:
        case y:
        case B:
          Ee(a, u, k.children);
          return;
        case re:
          Ee(a, u, k.children);
          return;
        case fe:
          throw Error(t(343));
        case ee:
          e: {
            g = u.blockedBoundary, M = u.blockedSegment, D = k.fallback, k = k.children, V = /* @__PURE__ */ new Set();
            var J = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: V, errorDigest: null }, he = x(a, M.chunks.length, J, M.formatContext, !1, !1);
            M.children.push(he), M.lastPushedText = !1;
            var ke = x(a, 0, null, M.formatContext, !1, !1);
            ke.parentFlushed = !0, u.blockedBoundary = J, u.blockedSegment = ke;
            try {
              if (Ke(
                a,
                u,
                k
              ), a.responseState.generateStaticMarkup || ke.lastPushedText && ke.textEmbedded && ke.chunks.push("<!-- -->"), ke.status = 1, Xt(J, ke), J.pendingTasks === 0) break e;
            } catch (Oe) {
              ke.status = 4, J.forceClientRender = !0, J.errorDigest = w(a, Oe);
            } finally {
              u.blockedBoundary = g, u.blockedSegment = M;
            }
            u = br(a, D, g, he, V, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case ie:
          if (k = Q(a, u, g.render, k, M), Te !== 0) {
            g = u.treeContext, u.treeContext = wt(g, 1, 0);
            try {
              Ee(a, u, k);
            } finally {
              u.treeContext = g;
            }
          } else Ee(a, u, k);
          return;
        case X:
          g = g.type, k = je(g, k), Ue(a, u, g, k, M);
          return;
        case te:
          if (M = k.children, g = g._context, k = k.value, D = g._currentValue2, g._currentValue2 = k, V = Qe, Qe = k = { parent: V, depth: V === null ? 0 : V.depth + 1, context: g, parentValue: D, value: k }, u.context = k, Ee(a, u, M), a = Qe, a === null) throw Error(t(403));
          k = a.parentValue, a.context._currentValue2 = k === ne ? a.context._defaultValue : k, a = Qe = a.parent, u.context = a;
          return;
        case j:
          k = k.children, k = k(g._currentValue2), Ee(a, u, k);
          return;
        case ce:
          M = g._init, g = M(g._payload), k = je(g, k), Ue(
            a,
            u,
            g,
            k,
            void 0
          );
          return;
      }
      throw Error(t(130, g == null ? g : typeof g, ""));
    }
  }
  function Ee(a, u, g) {
    if (u.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case H:
          Ue(a, u, g.type, g.props, g.ref);
          return;
        case N:
          throw Error(t(257));
        case ce:
          var k = g._init;
          g = k(g._payload), Ee(a, u, g);
          return;
      }
      if (F(g)) {
        et(a, u, g);
        return;
      }
      if (g === null || typeof g != "object" ? k = null : (k = me && g[me] || g["@@iterator"], k = typeof k == "function" ? k : null), k && (k = k.call(g))) {
        if (g = k.next(), !g.done) {
          var M = [];
          do
            M.push(g.value), g = k.next();
          while (!g.done);
          et(a, u, M);
        }
        return;
      }
      throw a = Object.prototype.toString.call(g), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : a));
    }
    typeof g == "string" ? (k = u.blockedSegment, k.lastPushedText = ze(u.blockedSegment.chunks, g, a.responseState, k.lastPushedText)) : typeof g == "number" && (k = u.blockedSegment, k.lastPushedText = ze(u.blockedSegment.chunks, "" + g, a.responseState, k.lastPushedText));
  }
  function et(a, u, g) {
    for (var k = g.length, M = 0; M < k; M++) {
      var D = u.treeContext;
      u.treeContext = wt(D, k, M);
      try {
        Ke(a, u, g[M]);
      } finally {
        u.treeContext = D;
      }
    }
  }
  function Ke(a, u, g) {
    var k = u.blockedSegment.formatContext, M = u.legacyContext, D = u.context;
    try {
      return Ee(a, u, g);
    } catch (he) {
      if (Gt(), typeof he == "object" && he !== null && typeof he.then == "function") {
        g = he;
        var V = u.blockedSegment, J = x(a, V.chunks.length, null, V.formatContext, V.lastPushedText, !0);
        V.children.push(J), V.lastPushedText = !1, a = br(a, u.node, u.blockedBoundary, J, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, g.then(a, a), u.blockedSegment.formatContext = k, u.legacyContext = M, u.context = D, qe(D);
      } else throw u.blockedSegment.formatContext = k, u.legacyContext = M, u.context = D, qe(D), he;
    }
  }
  function at(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, Er(this, u, a);
  }
  function yr(a, u, g) {
    var k = a.blockedBoundary;
    a.blockedSegment.status = 3, k === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (k.pendingTasks--, k.forceClientRender || (k.forceClientRender = !0, a = g === void 0 ? Error(t(432)) : g, k.errorDigest = u.onError(a), k.parentFlushed && u.clientRenderedBoundaries.push(k)), k.fallbackAbortableTasks.forEach(function(M) {
      return yr(M, u, g);
    }), k.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (k = u.onAllReady, k()));
  }
  function Xt(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var g = u.children[0];
      g.id = u.id, g.parentFlushed = !0, g.status === 1 && Xt(a, g);
    } else a.completedSegments.push(u);
  }
  function Er(a, u, g) {
    if (u === null) {
      if (g.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = g;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = Pt, u = a.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && Xt(u, g), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(at, a), u.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (Xt(u, g), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function Hn(a) {
    if (a.status !== 2) {
      var u = Qe, g = Yt.current;
      Yt.current = lr;
      var k = Je;
      Je = a.responseState;
      try {
        var M = a.pingedTasks, D;
        for (D = 0; D < M.length; D++) {
          var V = M[D], J = a, he = V.blockedSegment;
          if (he.status === 0) {
            qe(V.context);
            try {
              Ee(J, V, V.node), J.responseState.generateStaticMarkup || he.lastPushedText && he.textEmbedded && he.chunks.push("<!-- -->"), V.abortSet.delete(V), he.status = 1, Er(J, V.blockedBoundary, he);
            } catch (Dt) {
              if (Gt(), typeof Dt == "object" && Dt !== null && typeof Dt.then == "function") {
                var ke = V.ping;
                Dt.then(ke, ke);
              } else {
                V.abortSet.delete(V), he.status = 4;
                var Oe = V.blockedBoundary, ot = Dt, Kt = w(J, ot);
                if (Oe === null ? O(J, ot) : (Oe.pendingTasks--, Oe.forceClientRender || (Oe.forceClientRender = !0, Oe.errorDigest = Kt, Oe.parentFlushed && J.clientRenderedBoundaries.push(Oe))), J.allPendingTasks--, J.allPendingTasks === 0) {
                  var Qt = J.onAllReady;
                  Qt();
                }
              }
            } finally {
            }
          }
        }
        M.splice(0, D), a.destination !== null && Zr(a, a.destination);
      } catch (Dt) {
        w(a, Dt), O(a, Dt);
      } finally {
        Je = k, Yt.current = g, g === lr && qe(u);
      }
    }
  }
  function Dr(a, u, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var k = g.id = a.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, a = a.responseState, u.push('<template id="'), u.push(a.placeholderPrefix), a = k.toString(16), u.push(a), u.push('"></template>');
      case 1:
        g.status = 2;
        var M = !0;
        k = g.chunks;
        var D = 0;
        g = g.children;
        for (var V = 0; V < g.length; V++) {
          for (M = g[V]; D < M.index; D++) u.push(k[D]);
          M = Ir(a, u, M);
        }
        for (; D < k.length - 1; D++) u.push(k[D]);
        return D < k.length && (M = u.push(k[D])), M;
      default:
        throw Error(t(390));
    }
  }
  function Ir(a, u, g) {
    var k = g.boundary;
    if (k === null) return Dr(a, u, g);
    if (k.parentFlushed = !0, k.forceClientRender) return a.responseState.generateStaticMarkup || (k = k.errorDigest, u.push("<!--$!-->"), u.push("<template"), k && (u.push(' data-dgst="'), k = _(k), u.push(k), u.push('"')), u.push("></template>")), Dr(a, u, g), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
    if (0 < k.pendingTasks) {
      k.rootSegmentID = a.nextSegmentId++, 0 < k.completedSegments.length && a.partialBoundaries.push(k);
      var M = a.responseState, D = M.nextSuspenseID++;
      return M = M.boundaryPrefix + D.toString(16), k = k.id = M, Ae(u, a.responseState, k), Dr(a, u, g), u.push("<!--/$-->");
    }
    if (k.byteSize > a.progressiveChunkSize) return k.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(k), Ae(u, a.responseState, k.id), Dr(a, u, g), u.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || u.push("<!--$-->"), g = k.completedSegments, g.length !== 1) throw Error(t(391));
    return Ir(a, u, g[0]), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
  }
  function pn(a, u, g) {
    return ve(u, a.responseState, g.formatContext, g.id), Ir(a, u, g), Xe(u, g.formatContext);
  }
  function fn(a, u, g) {
    for (var k = g.completedSegments, M = 0; M < k.length; M++) mn(a, u, g, k[M]);
    if (k.length = 0, a = a.responseState, k = g.id, g = g.rootSegmentID, u.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? u.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), k === null) throw Error(t(395));
    return g = g.toString(16), u.push(k), u.push('","'), u.push(a.segmentPrefix), u.push(g), u.push('")<\/script>');
  }
  function mn(a, u, g, k) {
    if (k.status === 2) return !0;
    var M = k.id;
    if (M === -1) {
      if ((k.id = g.rootSegmentID) === -1) throw Error(t(392));
      return pn(a, u, k);
    }
    return pn(a, u, k), a = a.responseState, u.push(a.startInlineScript), a.sentCompleteSegmentFunction ? u.push('$RS("') : (a.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(a.segmentPrefix), M = M.toString(16), u.push(M), u.push('","'), u.push(a.placeholderPrefix), u.push(M), u.push('")<\/script>');
  }
  function Zr(a, u) {
    try {
      var g = a.completedRootSegment;
      if (g !== null && a.pendingRootTasks === 0) {
        Ir(a, u, g), a.completedRootSegment = null;
        var k = a.responseState.bootstrapChunks;
        for (g = 0; g < k.length - 1; g++) u.push(k[g]);
        g < k.length && u.push(k[g]);
      }
      var M = a.clientRenderedBoundaries, D;
      for (D = 0; D < M.length; D++) {
        var V = M[D];
        k = u;
        var J = a.responseState, he = V.id, ke = V.errorDigest, Oe = V.errorMessage, ot = V.errorComponentStack;
        if (k.push(J.startInlineScript), J.sentClientRenderFunction ? k.push('$RX("') : (J.sentClientRenderFunction = !0, k.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), he === null) throw Error(t(395));
        if (k.push(he), k.push('"'), ke || Oe || ot) {
          k.push(",");
          var Kt = Ce(ke || "");
          k.push(Kt);
        }
        if (Oe || ot) {
          k.push(",");
          var Qt = Ce(Oe || "");
          k.push(Qt);
        }
        if (ot) {
          k.push(",");
          var Dt = Ce(ot);
          k.push(Dt);
        }
        if (!k.push(")<\/script>")) {
          a.destination = null, D++, M.splice(0, D);
          return;
        }
      }
      M.splice(0, D);
      var Lr = a.completedBoundaries;
      for (D = 0; D < Lr.length; D++) if (!fn(a, u, Lr[D])) {
        a.destination = null, D++, Lr.splice(0, D);
        return;
      }
      Lr.splice(0, D);
      var xr = a.partialBoundaries;
      for (D = 0; D < xr.length; D++) {
        var gn = xr[D];
        e: {
          M = a, V = u;
          var Mr = gn.completedSegments;
          for (J = 0; J < Mr.length; J++) if (!mn(M, V, gn, Mr[J])) {
            J++, Mr.splice(0, J);
            var Yn = !1;
            break e;
          }
          Mr.splice(0, J), Yn = !0;
        }
        if (!Yn) {
          a.destination = null, D++, xr.splice(0, D);
          return;
        }
      }
      xr.splice(0, D);
      var _r = a.completedBoundaries;
      for (D = 0; D < _r.length; D++) if (!fn(a, u, _r[D])) {
        a.destination = null, D++, _r.splice(0, D);
        return;
      }
      _r.splice(0, D);
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function Vn(a, u) {
    try {
      var g = a.abortableTasks;
      g.forEach(function(k) {
        return yr(k, a, u);
      }), g.clear(), a.destination !== null && Zr(a, a.destination);
    } catch (k) {
      w(a, k), O(a, k);
    }
  }
  function Gn() {
  }
  function hn(a, u, g, k) {
    var M = !1, D = null, V = "", J = { push: function(ke) {
      return ke !== null && (V += ke), !0;
    }, destroy: function(ke) {
      M = !0, D = ke;
    } }, he = !1;
    if (a = gr(a, $e(g, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Gn, void 0, function() {
      he = !0;
    }), Hn(a), Vn(a, k), a.status === 1) a.status = 2, J.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = J;
      try {
        Zr(a, J);
      } catch (ke) {
        w(a, ke), O(a, ke);
      }
    }
    if (M) throw D;
    if (!he) throw Error(t(426));
    return V;
  }
  return $r.renderToNodeStream = function() {
    throw Error(t(207));
  }, $r.renderToStaticMarkup = function(a, u) {
    return hn(a, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, $r.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, $r.renderToString = function(a, u) {
    return hn(a, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, $r.version = "18.3.1", $r;
}
var ca = {}, Xi;
function ed() {
  if (Xi) return ca;
  Xi = 1;
  var e = mt;
  function t(i) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, h = 1; h < arguments.length; h++) c += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + i + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function o(i, c) {
    if (c.length !== 0) if (512 < c.length) 0 < n && (i.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), i.enqueue(c);
    else {
      var h = r.length - n;
      h < c.length && (h === 0 ? i.enqueue(r) : (r.set(c.subarray(0, h), n), i.enqueue(r), c = c.subarray(h)), r = new Uint8Array(512), n = 0), r.set(c, n), n += c.length;
    }
  }
  function s(i, c) {
    return o(i, c), !0;
  }
  function p(i) {
    r && 0 < n && (i.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var m = new TextEncoder();
  function b(i) {
    return m.encode(i);
  }
  function f(i) {
    return m.encode(i);
  }
  function A(i, c) {
    typeof i.error == "function" ? i.error(c) : i.close();
  }
  var E = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, U = {}, _ = {};
  function T(i) {
    return E.call(_, i) ? !0 : E.call(U, i) ? !1 : R.test(i) ? _[i] = !0 : (U[i] = !0, !1);
  }
  function P(i, c, h, v, L, I, G) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = v, this.attributeNamespace = L, this.mustUseProperty = h, this.propertyName = i, this.type = c, this.sanitizeURL = I, this.removeEmptyString = G;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    F[i] = new P(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var c = i[0];
    F[c] = new P(c, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    F[i] = new P(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    F[i] = new P(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    F[i] = new P(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    F[i] = new P(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    F[i] = new P(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    F[i] = new P(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    F[i] = new P(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var q = /[\-:]([a-z])/g;
  function Y(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var c = i.replace(
      q,
      Y
    );
    F[c] = new P(c, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var c = i.replace(q, Y);
    F[c] = new P(c, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var c = i.replace(q, Y);
    F[c] = new P(c, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    F[i] = new P(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    F[i] = new P(i, 1, !1, i.toLowerCase(), null, !0, !0);
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
  }, S = ["Webkit", "ms", "Moz", "O"];
  Object.keys(z).forEach(function(i) {
    S.forEach(function(c) {
      c = c + i.charAt(0).toUpperCase() + i.substring(1), z[c] = z[i];
    });
  });
  var oe = /["'&<>]/;
  function de(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var c = oe.exec(i);
    if (c) {
      var h = "", v, L = 0;
      for (v = c.index; v < i.length; v++) {
        switch (i.charCodeAt(v)) {
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
        L !== v && (h += i.substring(L, v)), L = v + 1, h += c;
      }
      i = L !== v ? h + i.substring(L, v) : h;
    }
    return i;
  }
  var xe = /([A-Z])/g, Ne = /^ms-/, Le = Array.isArray, se = f("<script>"), pe = f("<\/script>"), _e = f('<script src="'), Ae = f('<script type="module" src="'), ve = f('" async=""><\/script>'), Xe = /(<\/|<)(s)(cript)/gi;
  function Re(i, c, h, v) {
    return "" + c + (h === "s" ? "\\u0073" : "\\u0053") + v;
  }
  function Ce(i, c, h, v, L) {
    i = i === void 0 ? "" : i, c = c === void 0 ? se : f('<script nonce="' + de(c) + '">');
    var I = [];
    if (h !== void 0 && I.push(c, b(("" + h).replace(Xe, Re)), pe), v !== void 0) for (h = 0; h < v.length; h++) I.push(_e, b(de(v[h])), ve);
    if (L !== void 0) for (v = 0; v < L.length; v++) I.push(Ae, b(de(L[v])), ve);
    return { bootstrapChunks: I, startInlineScript: c, placeholderPrefix: f(i + "P:"), segmentPrefix: f(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function $e(i, c) {
    return { insertionMode: i, selectedValue: c };
  }
  function ze(i) {
    return $e(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function le(i, c, h) {
    switch (c) {
      case "select":
        return $e(1, h.value != null ? h.value : h.defaultValue);
      case "svg":
        return $e(2, null);
      case "math":
        return $e(3, null);
      case "foreignObject":
        return $e(1, null);
      case "table":
        return $e(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return $e(5, null);
      case "colgroup":
        return $e(7, null);
      case "tr":
        return $e(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? $e(1, null) : i;
  }
  var H = f("<!-- -->");
  function N(i, c, h, v) {
    return c === "" ? v : (v && i.push(H), i.push(b(de(c))), !0);
  }
  var B = /* @__PURE__ */ new Map(), $ = f(' style="'), y = f(":"), te = f(";");
  function j(i, c, h) {
    if (typeof h != "object") throw Error(t(62));
    c = !0;
    for (var v in h) if (E.call(h, v)) {
      var L = h[v];
      if (L != null && typeof L != "boolean" && L !== "") {
        if (v.indexOf("--") === 0) {
          var I = b(de(v));
          L = b(de(("" + L).trim()));
        } else {
          I = v;
          var G = B.get(I);
          G !== void 0 || (G = f(de(I.replace(xe, "-$1").toLowerCase().replace(Ne, "-ms-"))), B.set(I, G)), I = G, L = typeof L == "number" ? L === 0 || E.call(z, v) ? b("" + L) : b(L + "px") : b(de(("" + L).trim()));
        }
        c ? (c = !1, i.push($, I, y, L)) : i.push(te, I, y, L);
      }
    }
    c || i.push(re);
  }
  var ie = f(" "), ee = f('="'), re = f('"'), X = f('=""');
  function ce(i, c, h, v) {
    switch (h) {
      case "style":
        j(i, c, v);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < h.length) || h[0] !== "o" && h[0] !== "O" || h[1] !== "n" && h[1] !== "N") {
      if (c = F.hasOwnProperty(h) ? F[h] : null, c !== null) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (h = b(c.attributeName), c.type) {
          case 3:
            v && i.push(ie, h, X);
            break;
          case 4:
            v === !0 ? i.push(ie, h, X) : v !== !1 && i.push(ie, h, ee, b(de(v)), re);
            break;
          case 5:
            isNaN(v) || i.push(ie, h, ee, b(de(v)), re);
            break;
          case 6:
            !isNaN(v) && 1 <= v && i.push(ie, h, ee, b(de(v)), re);
            break;
          default:
            c.sanitizeURL && (v = "" + v), i.push(ie, h, ee, b(de(v)), re);
        }
      } else if (T(h)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = h.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        i.push(ie, b(h), ee, b(de(v)), re);
      }
    }
  }
  var fe = f(">"), ae = f("/>");
  function be(i, c, h) {
    if (c != null) {
      if (h != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && i.push(b("" + c));
    }
  }
  function ne(i) {
    var c = "";
    return e.Children.forEach(i, function(h) {
      h != null && (c += h);
    }), c;
  }
  var me = f(' selected=""');
  function He(i, c, h, v) {
    i.push(we(h));
    var L = h = null, I;
    for (I in c) if (E.call(c, I)) {
      var G = c[I];
      if (G != null) switch (I) {
        case "children":
          h = G;
          break;
        case "dangerouslySetInnerHTML":
          L = G;
          break;
        default:
          ce(i, v, I, G);
      }
    }
    return i.push(fe), be(i, L, h), typeof h == "string" ? (i.push(b(de(h))), null) : h;
  }
  var ye = f(`
`), ft = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Qe = /* @__PURE__ */ new Map();
  function we(i) {
    var c = Qe.get(i);
    if (c === void 0) {
      if (!ft.test(i)) throw Error(t(65, i));
      c = f("<" + i), Qe.set(i, c);
    }
    return c;
  }
  var K = f("<!DOCTYPE html>");
  function ue(i, c, h, v, L) {
    switch (c) {
      case "select":
        i.push(we("select"));
        var I = null, G = null;
        for (Pe in h) if (E.call(h, Pe)) {
          var Z = h[Pe];
          if (Z != null) switch (Pe) {
            case "children":
              I = Z;
              break;
            case "dangerouslySetInnerHTML":
              G = Z;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ce(i, v, Pe, Z);
          }
        }
        return i.push(fe), be(i, G, I), I;
      case "option":
        G = L.selectedValue, i.push(we("option"));
        var ge = Z = null, Ie = null, Pe = null;
        for (I in h) if (E.call(h, I)) {
          var rt = h[I];
          if (rt != null) switch (I) {
            case "children":
              Z = rt;
              break;
            case "selected":
              Ie = rt;
              break;
            case "dangerouslySetInnerHTML":
              Pe = rt;
              break;
            case "value":
              ge = rt;
            default:
              ce(i, v, I, rt);
          }
        }
        if (G != null) if (h = ge !== null ? "" + ge : ne(Z), Le(G)) {
          for (v = 0; v < G.length; v++)
            if ("" + G[v] === h) {
              i.push(me);
              break;
            }
        } else "" + G === h && i.push(me);
        else Ie && i.push(me);
        return i.push(fe), be(i, Pe, Z), Z;
      case "textarea":
        i.push(we("textarea")), Pe = G = I = null;
        for (Z in h) if (E.call(h, Z) && (ge = h[Z], ge != null)) switch (Z) {
          case "children":
            Pe = ge;
            break;
          case "value":
            I = ge;
            break;
          case "defaultValue":
            G = ge;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ce(i, v, Z, ge);
        }
        if (I === null && G !== null && (I = G), i.push(fe), Pe != null) {
          if (I != null) throw Error(t(92));
          if (Le(Pe) && 1 < Pe.length) throw Error(t(93));
          I = "" + Pe;
        }
        return typeof I == "string" && I[0] === `
` && i.push(ye), I !== null && i.push(b(de("" + I))), null;
      case "input":
        i.push(we("input")), ge = Pe = Z = I = null;
        for (G in h) if (E.call(h, G) && (Ie = h[G], Ie != null)) switch (G) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ge = Ie;
            break;
          case "defaultValue":
            Z = Ie;
            break;
          case "checked":
            Pe = Ie;
            break;
          case "value":
            I = Ie;
            break;
          default:
            ce(i, v, G, Ie);
        }
        return Pe !== null ? ce(
          i,
          v,
          "checked",
          Pe
        ) : ge !== null && ce(i, v, "checked", ge), I !== null ? ce(i, v, "value", I) : Z !== null && ce(i, v, "value", Z), i.push(ae), null;
      case "menuitem":
        i.push(we("menuitem"));
        for (var Lt in h) if (E.call(h, Lt) && (I = h[Lt], I != null)) switch (Lt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ce(i, v, Lt, I);
        }
        return i.push(fe), null;
      case "title":
        i.push(we("title")), I = null;
        for (rt in h) if (E.call(h, rt) && (G = h[rt], G != null)) switch (rt) {
          case "children":
            I = G;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ce(i, v, rt, G);
        }
        return i.push(fe), I;
      case "listing":
      case "pre":
        i.push(we(c)), G = I = null;
        for (ge in h) if (E.call(h, ge) && (Z = h[ge], Z != null)) switch (ge) {
          case "children":
            I = Z;
            break;
          case "dangerouslySetInnerHTML":
            G = Z;
            break;
          default:
            ce(i, v, ge, Z);
        }
        if (i.push(fe), G != null) {
          if (I != null) throw Error(t(60));
          if (typeof G != "object" || !("__html" in G)) throw Error(t(61));
          h = G.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? i.push(ye, b(h)) : i.push(b("" + h)));
        }
        return typeof I == "string" && I[0] === `
` && i.push(ye), I;
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
        i.push(we(c));
        for (var Zt in h) if (E.call(h, Zt) && (I = h[Zt], I != null)) switch (Zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            ce(i, v, Zt, I);
        }
        return i.push(ae), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return He(i, h, c, v);
      case "html":
        return L.insertionMode === 0 && i.push(K), He(i, h, c, v);
      default:
        if (c.indexOf("-") === -1 && typeof h.is != "string") return He(i, h, c, v);
        i.push(we(c)), G = I = null;
        for (Ie in h) if (E.call(h, Ie) && (Z = h[Ie], Z != null)) switch (Ie) {
          case "children":
            I = Z;
            break;
          case "dangerouslySetInnerHTML":
            G = Z;
            break;
          case "style":
            j(i, v, Z);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            T(Ie) && typeof Z != "function" && typeof Z != "symbol" && i.push(ie, b(Ie), ee, b(de(Z)), re);
        }
        return i.push(fe), be(i, G, I), I;
    }
  }
  var Ze = f("</"), gt = f(">"), qe = f('<template id="'), ar = f('"></template>'), Mt = f("<!--$-->"), pr = f('<!--$?--><template id="'), wt = f('"></template>'), yt = f("<!--$!-->"), it = f("<!--/$-->"), bt = f("<template"), Bt = f('"'), Wt = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var Pr = f("></template>");
  function lt(i, c, h) {
    if (o(i, pr), h === null) throw Error(t(395));
    return o(i, h), s(i, wt);
  }
  var St = f('<div hidden id="'), or = f('">'), De = f("</div>"), Ht = f('<svg aria-hidden="true" style="display:none" id="'), ir = f('">'), Te = f("</svg>"), nt = f('<math aria-hidden="true" style="display:none" id="'), sr = f('">'), kt = f("</math>"), Ft = f('<table hidden id="'), Vt = f('">'), Gt = f("</table>"), Ar = f('<table hidden><tbody id="'), st = f('">'), Ot = f("</tbody></table>"), fr = f('<table hidden><tr id="'), mr = f('">'), Nt = f("</tr></table>"), lr = f('<table hidden><colgroup id="'), Je = f('">'), Yt = f("</colgroup></table>");
  function hr(i, c, h, v) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return o(i, St), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, or);
      case 2:
        return o(i, Ht), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, ir);
      case 3:
        return o(i, nt), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, sr);
      case 4:
        return o(i, Ft), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, Vt);
      case 5:
        return o(i, Ar), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, st);
      case 6:
        return o(i, fr), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, mr);
      case 7:
        return o(
          i,
          lr
        ), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, Je);
      default:
        throw Error(t(397));
    }
  }
  function Pt(i, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(i, De);
      case 2:
        return s(i, Te);
      case 3:
        return s(i, kt);
      case 4:
        return s(i, Gt);
      case 5:
        return s(i, Ot);
      case 6:
        return s(i, Nt);
      case 7:
        return s(i, Yt);
      default:
        throw Error(t(397));
    }
  }
  var gr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), br = f('$RS("'), x = f('","'), w = f('")<\/script>'), O = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Q = f('$RC("'), Se = f('","'), je = f('")<\/script>'), Ue = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ee = f('$RX("'), et = f('"'), Ke = f(")<\/script>"), at = f(","), yr = /[<\u2028\u2029]/g;
  function Xt(i) {
    return JSON.stringify(i).replace(yr, function(c) {
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
  var Er = Object.assign, Hn = Symbol.for("react.element"), Dr = Symbol.for("react.portal"), Ir = Symbol.for("react.fragment"), pn = Symbol.for("react.strict_mode"), fn = Symbol.for("react.profiler"), mn = Symbol.for("react.provider"), Zr = Symbol.for("react.context"), Vn = Symbol.for("react.forward_ref"), Gn = Symbol.for("react.suspense"), hn = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), k = Symbol.for("react.debug_trace_mode"), M = Symbol.for("react.legacy_hidden"), D = Symbol.for("react.default_value"), V = Symbol.iterator;
  function J(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case Ir:
        return "Fragment";
      case Dr:
        return "Portal";
      case fn:
        return "Profiler";
      case pn:
        return "StrictMode";
      case Gn:
        return "Suspense";
      case hn:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case Zr:
        return (i.displayName || "Context") + ".Consumer";
      case mn:
        return (i._context.displayName || "Context") + ".Provider";
      case Vn:
        var c = i.render;
        return i = i.displayName, i || (i = c.displayName || c.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case a:
        return c = i.displayName || null, c !== null ? c : J(i.type) || "Memo";
      case u:
        c = i._payload, i = i._init;
        try {
          return J(i(c));
        } catch {
        }
    }
    return null;
  }
  var he = {};
  function ke(i, c) {
    if (i = i.contextTypes, !i) return he;
    var h = {}, v;
    for (v in i) h[v] = c[v];
    return h;
  }
  var Oe = null;
  function ot(i, c) {
    if (i !== c) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var h = c.parent;
      if (i === null) {
        if (h !== null) throw Error(t(401));
      } else {
        if (h === null) throw Error(t(401));
        ot(i, h);
      }
      c.context._currentValue = c.value;
    }
  }
  function Kt(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && Kt(i);
  }
  function Qt(i) {
    var c = i.parent;
    c !== null && Qt(c), i.context._currentValue = i.value;
  }
  function Dt(i, c) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === c.depth ? ot(i, c) : Dt(i, c);
  }
  function Lr(i, c) {
    var h = c.parent;
    if (h === null) throw Error(t(402));
    i.depth === h.depth ? ot(i, h) : Lr(i, h), c.context._currentValue = c.value;
  }
  function xr(i) {
    var c = Oe;
    c !== i && (c === null ? Qt(i) : i === null ? Kt(c) : c.depth === i.depth ? ot(c, i) : c.depth > i.depth ? Dt(c, i) : Lr(c, i), Oe = i);
  }
  var gn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, c) {
    i = i._reactInternals, i.queue !== null && i.queue.push(c);
  }, enqueueReplaceState: function(i, c) {
    i = i._reactInternals, i.replace = !0, i.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Mr(i, c, h, v) {
    var L = i.state !== void 0 ? i.state : null;
    i.updater = gn, i.props = h, i.state = L;
    var I = { queue: [], replace: !1 };
    i._reactInternals = I;
    var G = c.contextType;
    if (i.context = typeof G == "object" && G !== null ? G._currentValue : v, G = c.getDerivedStateFromProps, typeof G == "function" && (G = G(h, L), L = G == null ? L : Er({}, L, G), i.state = L), typeof c.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && gn.enqueueReplaceState(i, i.state, null), I.queue !== null && 0 < I.queue.length) if (c = I.queue, G = I.replace, I.queue = null, I.replace = !1, G && c.length === 1) i.state = c[0];
    else {
      for (I = G ? c[0] : i.state, L = !0, G = G ? 1 : 0; G < c.length; G++) {
        var Z = c[G];
        Z = typeof Z == "function" ? Z.call(i, I, h, v) : Z, Z != null && (L ? (L = !1, I = Er({}, I, Z)) : Er(I, Z));
      }
      i.state = I;
    }
    else I.queue = null;
  }
  var Yn = { id: 1, overflow: "" };
  function _r(i, c, h) {
    var v = i.id;
    i = i.overflow;
    var L = 32 - Xn(v) - 1;
    v &= ~(1 << L), h += 1;
    var I = 32 - Xn(c) + L;
    if (30 < I) {
      var G = L - L % 5;
      return I = (v & (1 << G) - 1).toString(32), v >>= G, L -= G, { id: 1 << 32 - Xn(c) + L | h << L | v, overflow: I + i };
    }
    return { id: 1 << I | h << L | v, overflow: i };
  }
  var Xn = Math.clz32 ? Math.clz32 : iu, au = Math.log, ou = Math.LN2;
  function iu(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (au(i) / ou | 0) | 0;
  }
  function su(i, c) {
    return i === c && (i !== 0 || 1 / i === 1 / c) || i !== i && c !== c;
  }
  var lu = typeof Object.is == "function" ? Object.is : su, vr = null, Ma = null, Kn = null, tt = null, bn = !1, Qn = !1, yn = 0, Rr = null, Zn = 0;
  function Fr() {
    if (vr === null) throw Error(t(321));
    return vr;
  }
  function hi() {
    if (0 < Zn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Fa() {
    return tt === null ? Kn === null ? (bn = !1, Kn = tt = hi()) : (bn = !0, tt = Kn) : tt.next === null ? (bn = !1, tt = tt.next = hi()) : (bn = !0, tt = tt.next), tt;
  }
  function $a() {
    Ma = vr = null, Qn = !1, Kn = null, Zn = 0, tt = Rr = null;
  }
  function gi(i, c) {
    return typeof c == "function" ? c(i) : c;
  }
  function bi(i, c, h) {
    if (vr = Fr(), tt = Fa(), bn) {
      var v = tt.queue;
      if (c = v.dispatch, Rr !== null && (h = Rr.get(v), h !== void 0)) {
        Rr.delete(v), v = tt.memoizedState;
        do
          v = i(v, h.action), h = h.next;
        while (h !== null);
        return tt.memoizedState = v, [v, c];
      }
      return [tt.memoizedState, c];
    }
    return i = i === gi ? typeof c == "function" ? c() : c : h !== void 0 ? h(c) : c, tt.memoizedState = i, i = tt.queue = { last: null, dispatch: null }, i = i.dispatch = cu.bind(null, vr, i), [tt.memoizedState, i];
  }
  function yi(i, c) {
    if (vr = Fr(), tt = Fa(), c = c === void 0 ? null : c, tt !== null) {
      var h = tt.memoizedState;
      if (h !== null && c !== null) {
        var v = h[1];
        e: if (v === null) v = !1;
        else {
          for (var L = 0; L < v.length && L < c.length; L++) if (!lu(c[L], v[L])) {
            v = !1;
            break e;
          }
          v = !0;
        }
        if (v) return h[0];
      }
    }
    return i = i(), tt.memoizedState = [i, c], i;
  }
  function cu(i, c, h) {
    if (25 <= Zn) throw Error(t(301));
    if (i === vr) if (Qn = !0, i = { action: h, next: null }, Rr === null && (Rr = /* @__PURE__ */ new Map()), h = Rr.get(c), h === void 0) Rr.set(c, i);
    else {
      for (c = h; c.next !== null; ) c = c.next;
      c.next = i;
    }
  }
  function uu() {
    throw Error(t(394));
  }
  function Jn() {
  }
  var xi = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return Fr(), i._currentValue;
  }, useMemo: yi, useReducer: bi, useRef: function(i) {
    vr = Fr(), tt = Fa();
    var c = tt.memoizedState;
    return c === null ? (i = { current: i }, tt.memoizedState = i) : c;
  }, useState: function(i) {
    return bi(gi, i);
  }, useInsertionEffect: Jn, useLayoutEffect: function() {
  }, useCallback: function(i, c) {
    return yi(function() {
      return i;
    }, c);
  }, useImperativeHandle: Jn, useEffect: Jn, useDebugValue: Jn, useDeferredValue: function(i) {
    return Fr(), i;
  }, useTransition: function() {
    return Fr(), [!1, uu];
  }, useId: function() {
    var i = Ma.treeContext, c = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - Xn(i) - 1)).toString(32) + c;
    var h = ea;
    if (h === null) throw Error(t(404));
    return c = yn++, i = ":" + h.idPrefix + "R" + i, 0 < c && (i += "H" + c.toString(32)), i + ":";
  }, useMutableSource: function(i, c) {
    return Fr(), c(i._source);
  }, useSyncExternalStore: function(i, c, h) {
    if (h === void 0) throw Error(t(407));
    return h();
  } }, ea = null, Ua = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function du(i) {
    return console.error(i), null;
  }
  function xn() {
  }
  function pu(i, c, h, v, L, I, G, Z, ge) {
    var Ie = [], Pe = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: v === void 0 ? 12800 : v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Pe, pingedTasks: Ie, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? du : L, onAllReady: I === void 0 ? xn : I, onShellReady: G === void 0 ? xn : G, onShellError: Z === void 0 ? xn : Z, onFatalError: ge === void 0 ? xn : ge }, h = ta(c, 0, null, h, !1, !1), h.parentFlushed = !0, i = za(c, i, null, h, Pe, he, null, Yn), Ie.push(i), c;
  }
  function za(i, c, h, v, L, I, G, Z) {
    i.allPendingTasks++, h === null ? i.pendingRootTasks++ : h.pendingTasks++;
    var ge = { node: c, ping: function() {
      var Ie = i.pingedTasks;
      Ie.push(ge), Ie.length === 1 && Ai(i);
    }, blockedBoundary: h, blockedSegment: v, abortSet: L, legacyContext: I, context: G, treeContext: Z };
    return L.add(ge), ge;
  }
  function ta(i, c, h, v, L, I) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: h, lastPushedText: L, textEmbedded: I };
  }
  function vn(i, c) {
    if (i = i.onError(c), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function ra(i, c) {
    var h = i.onShellError;
    h(c), h = i.onFatalError, h(c), i.destination !== null ? (i.status = 2, A(i.destination, c)) : (i.status = 1, i.fatalError = c);
  }
  function vi(i, c, h, v, L) {
    for (vr = {}, Ma = c, yn = 0, i = h(v, L); Qn; ) Qn = !1, yn = 0, Zn += 1, tt = null, i = h(v, L);
    return $a(), i;
  }
  function wi(i, c, h, v) {
    var L = h.render(), I = v.childContextTypes;
    if (I != null) {
      var G = c.legacyContext;
      if (typeof h.getChildContext != "function") v = G;
      else {
        h = h.getChildContext();
        for (var Z in h) if (!(Z in I)) throw Error(t(108, J(v) || "Unknown", Z));
        v = Er({}, G, h);
      }
      c.legacyContext = v, It(i, c, L), c.legacyContext = G;
    } else It(i, c, L);
  }
  function Si(i, c) {
    if (i && i.defaultProps) {
      c = Er({}, c), i = i.defaultProps;
      for (var h in i) c[h] === void 0 && (c[h] = i[h]);
      return c;
    }
    return c;
  }
  function qa(i, c, h, v, L) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      L = ke(h, c.legacyContext);
      var I = h.contextType;
      I = new h(v, typeof I == "object" && I !== null ? I._currentValue : L), Mr(I, h, v, L), wi(i, c, I, h);
    } else {
      I = ke(h, c.legacyContext), L = vi(i, c, h, v, I);
      var G = yn !== 0;
      if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0) Mr(L, h, v, I), wi(i, c, L, h);
      else if (G) {
        v = c.treeContext, c.treeContext = _r(v, 1, 0);
        try {
          It(i, c, L);
        } finally {
          c.treeContext = v;
        }
      } else It(i, c, L);
    }
    else if (typeof h == "string") {
      switch (L = c.blockedSegment, I = ue(L.chunks, h, v, i.responseState, L.formatContext), L.lastPushedText = !1, G = L.formatContext, L.formatContext = le(G, h, v), Ba(i, c, I), L.formatContext = G, h) {
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
          L.chunks.push(Ze, b(h), gt);
      }
      L.lastPushedText = !1;
    } else {
      switch (h) {
        case M:
        case k:
        case pn:
        case fn:
        case Ir:
          It(i, c, v.children);
          return;
        case hn:
          It(i, c, v.children);
          return;
        case g:
          throw Error(t(343));
        case Gn:
          e: {
            h = c.blockedBoundary, L = c.blockedSegment, I = v.fallback, v = v.children, G = /* @__PURE__ */ new Set();
            var Z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: G, errorDigest: null }, ge = ta(i, L.chunks.length, Z, L.formatContext, !1, !1);
            L.children.push(ge), L.lastPushedText = !1;
            var Ie = ta(i, 0, null, L.formatContext, !1, !1);
            Ie.parentFlushed = !0, c.blockedBoundary = Z, c.blockedSegment = Ie;
            try {
              if (Ba(
                i,
                c,
                v
              ), Ie.lastPushedText && Ie.textEmbedded && Ie.chunks.push(H), Ie.status = 1, na(Z, Ie), Z.pendingTasks === 0) break e;
            } catch (Pe) {
              Ie.status = 4, Z.forceClientRender = !0, Z.errorDigest = vn(i, Pe);
            } finally {
              c.blockedBoundary = h, c.blockedSegment = L;
            }
            c = za(i, I, h, ge, G, c.legacyContext, c.context, c.treeContext), i.pingedTasks.push(c);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case Vn:
          if (v = vi(i, c, h.render, v, L), yn !== 0) {
            h = c.treeContext, c.treeContext = _r(h, 1, 0);
            try {
              It(i, c, v);
            } finally {
              c.treeContext = h;
            }
          } else It(i, c, v);
          return;
        case a:
          h = h.type, v = Si(h, v), qa(i, c, h, v, L);
          return;
        case mn:
          if (L = v.children, h = h._context, v = v.value, I = h._currentValue, h._currentValue = v, G = Oe, Oe = v = { parent: G, depth: G === null ? 0 : G.depth + 1, context: h, parentValue: I, value: v }, c.context = v, It(i, c, L), i = Oe, i === null) throw Error(t(403));
          v = i.parentValue, i.context._currentValue = v === D ? i.context._defaultValue : v, i = Oe = i.parent, c.context = i;
          return;
        case Zr:
          v = v.children, v = v(h._currentValue), It(i, c, v);
          return;
        case u:
          L = h._init, h = L(h._payload), v = Si(h, v), qa(i, c, h, v, void 0);
          return;
      }
      throw Error(t(
        130,
        h == null ? h : typeof h,
        ""
      ));
    }
  }
  function It(i, c, h) {
    if (c.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Hn:
          qa(i, c, h.type, h.props, h.ref);
          return;
        case Dr:
          throw Error(t(257));
        case u:
          var v = h._init;
          h = v(h._payload), It(i, c, h);
          return;
      }
      if (Le(h)) {
        ki(i, c, h);
        return;
      }
      if (h === null || typeof h != "object" ? v = null : (v = V && h[V] || h["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(h))) {
        if (h = v.next(), !h.done) {
          var L = [];
          do
            L.push(h.value), h = v.next();
          while (!h.done);
          ki(i, c, L);
        }
        return;
      }
      throw i = Object.prototype.toString.call(h), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : i));
    }
    typeof h == "string" ? (v = c.blockedSegment, v.lastPushedText = N(c.blockedSegment.chunks, h, i.responseState, v.lastPushedText)) : typeof h == "number" && (v = c.blockedSegment, v.lastPushedText = N(c.blockedSegment.chunks, "" + h, i.responseState, v.lastPushedText));
  }
  function ki(i, c, h) {
    for (var v = h.length, L = 0; L < v; L++) {
      var I = c.treeContext;
      c.treeContext = _r(I, v, L);
      try {
        Ba(i, c, h[L]);
      } finally {
        c.treeContext = I;
      }
    }
  }
  function Ba(i, c, h) {
    var v = c.blockedSegment.formatContext, L = c.legacyContext, I = c.context;
    try {
      return It(i, c, h);
    } catch (ge) {
      if ($a(), typeof ge == "object" && ge !== null && typeof ge.then == "function") {
        h = ge;
        var G = c.blockedSegment, Z = ta(i, G.chunks.length, null, G.formatContext, G.lastPushedText, !0);
        G.children.push(Z), G.lastPushedText = !1, i = za(i, c.node, c.blockedBoundary, Z, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, h.then(i, i), c.blockedSegment.formatContext = v, c.legacyContext = L, c.context = I, xr(I);
      } else throw c.blockedSegment.formatContext = v, c.legacyContext = L, c.context = I, xr(I), ge;
    }
  }
  function fu(i) {
    var c = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Ci(this, c, i);
  }
  function Ti(i, c, h) {
    var v = i.blockedBoundary;
    i.blockedSegment.status = 3, v === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, i = h === void 0 ? Error(t(432)) : h, v.errorDigest = c.onError(i), v.parentFlushed && c.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(L) {
      return Ti(L, c, h);
    }), v.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (v = c.onAllReady, v()));
  }
  function na(i, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var h = c.children[0];
      h.id = c.id, h.parentFlushed = !0, h.status === 1 && na(i, h);
    } else i.completedSegments.push(c);
  }
  function Ci(i, c, h) {
    if (c === null) {
      if (h.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = h;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = xn, c = i.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && na(c, h), c.parentFlushed && i.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(fu, i), c.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (na(c, h), c.completedSegments.length === 1 && c.parentFlushed && i.partialBoundaries.push(c)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Ai(i) {
    if (i.status !== 2) {
      var c = Oe, h = Ua.current;
      Ua.current = xi;
      var v = ea;
      ea = i.responseState;
      try {
        var L = i.pingedTasks, I;
        for (I = 0; I < L.length; I++) {
          var G = L[I], Z = i, ge = G.blockedSegment;
          if (ge.status === 0) {
            xr(G.context);
            try {
              It(Z, G, G.node), ge.lastPushedText && ge.textEmbedded && ge.chunks.push(H), G.abortSet.delete(G), ge.status = 1, Ci(Z, G.blockedBoundary, ge);
            } catch (Jt) {
              if ($a(), typeof Jt == "object" && Jt !== null && typeof Jt.then == "function") {
                var Ie = G.ping;
                Jt.then(Ie, Ie);
              } else {
                G.abortSet.delete(G), ge.status = 4;
                var Pe = G.blockedBoundary, rt = Jt, Lt = vn(Z, rt);
                if (Pe === null ? ra(Z, rt) : (Pe.pendingTasks--, Pe.forceClientRender || (Pe.forceClientRender = !0, Pe.errorDigest = Lt, Pe.parentFlushed && Z.clientRenderedBoundaries.push(Pe))), Z.allPendingTasks--, Z.allPendingTasks === 0) {
                  var Zt = Z.onAllReady;
                  Zt();
                }
              }
            } finally {
            }
          }
        }
        L.splice(0, I), i.destination !== null && Wa(i, i.destination);
      } catch (Jt) {
        vn(i, Jt), ra(i, Jt);
      } finally {
        ea = v, Ua.current = h, h === xi && xr(c);
      }
    }
  }
  function aa(i, c, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var v = h.id = i.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, i = i.responseState, o(c, qe), o(c, i.placeholderPrefix), i = b(v.toString(16)), o(c, i), s(c, ar);
      case 1:
        h.status = 2;
        var L = !0;
        v = h.chunks;
        var I = 0;
        h = h.children;
        for (var G = 0; G < h.length; G++) {
          for (L = h[G]; I < L.index; I++) o(c, v[I]);
          L = oa(i, c, L);
        }
        for (; I < v.length - 1; I++) o(c, v[I]);
        return I < v.length && (L = s(c, v[I])), L;
      default:
        throw Error(t(390));
    }
  }
  function oa(i, c, h) {
    var v = h.boundary;
    if (v === null) return aa(i, c, h);
    if (v.parentFlushed = !0, v.forceClientRender) v = v.errorDigest, s(c, yt), o(c, bt), v && (o(c, Wt), o(c, b(de(v))), o(c, Bt)), s(c, Pr), aa(i, c, h);
    else if (0 < v.pendingTasks) {
      v.rootSegmentID = i.nextSegmentId++, 0 < v.completedSegments.length && i.partialBoundaries.push(v);
      var L = i.responseState, I = L.nextSuspenseID++;
      L = f(L.boundaryPrefix + I.toString(16)), v = v.id = L, lt(c, i.responseState, v), aa(i, c, h);
    } else if (v.byteSize > i.progressiveChunkSize) v.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(v), lt(c, i.responseState, v.id), aa(i, c, h);
    else {
      if (s(c, Mt), h = v.completedSegments, h.length !== 1) throw Error(t(391));
      oa(i, c, h[0]);
    }
    return s(c, it);
  }
  function Ei(i, c, h) {
    return hr(c, i.responseState, h.formatContext, h.id), oa(i, c, h), Pt(c, h.formatContext);
  }
  function _i(i, c, h) {
    for (var v = h.completedSegments, L = 0; L < v.length; L++) Ri(i, c, h, v[L]);
    if (v.length = 0, i = i.responseState, v = h.id, h = h.rootSegmentID, o(c, i.startInlineScript), i.sentCompleteBoundaryFunction ? o(c, Q) : (i.sentCompleteBoundaryFunction = !0, o(c, O)), v === null) throw Error(t(395));
    return h = b(h.toString(16)), o(c, v), o(c, Se), o(c, i.segmentPrefix), o(c, h), s(c, je);
  }
  function Ri(i, c, h, v) {
    if (v.status === 2) return !0;
    var L = v.id;
    if (L === -1) {
      if ((v.id = h.rootSegmentID) === -1) throw Error(t(392));
      return Ei(i, c, v);
    }
    return Ei(i, c, v), i = i.responseState, o(c, i.startInlineScript), i.sentCompleteSegmentFunction ? o(c, br) : (i.sentCompleteSegmentFunction = !0, o(c, gr)), o(c, i.segmentPrefix), L = b(L.toString(16)), o(c, L), o(c, x), o(c, i.placeholderPrefix), o(c, L), s(c, w);
  }
  function Wa(i, c) {
    r = new Uint8Array(512), n = 0;
    try {
      var h = i.completedRootSegment;
      if (h !== null && i.pendingRootTasks === 0) {
        oa(i, c, h), i.completedRootSegment = null;
        var v = i.responseState.bootstrapChunks;
        for (h = 0; h < v.length - 1; h++) o(c, v[h]);
        h < v.length && s(c, v[h]);
      }
      var L = i.clientRenderedBoundaries, I;
      for (I = 0; I < L.length; I++) {
        var G = L[I];
        v = c;
        var Z = i.responseState, ge = G.id, Ie = G.errorDigest, Pe = G.errorMessage, rt = G.errorComponentStack;
        if (o(v, Z.startInlineScript), Z.sentClientRenderFunction ? o(v, Ee) : (Z.sentClientRenderFunction = !0, o(
          v,
          Ue
        )), ge === null) throw Error(t(395));
        o(v, ge), o(v, et), (Ie || Pe || rt) && (o(v, at), o(v, b(Xt(Ie || "")))), (Pe || rt) && (o(v, at), o(v, b(Xt(Pe || "")))), rt && (o(v, at), o(v, b(Xt(rt)))), s(v, Ke);
      }
      L.splice(0, I);
      var Lt = i.completedBoundaries;
      for (I = 0; I < Lt.length; I++) _i(i, c, Lt[I]);
      Lt.splice(0, I), p(c), r = new Uint8Array(512), n = 0;
      var Zt = i.partialBoundaries;
      for (I = 0; I < Zt.length; I++) {
        var Jt = Zt[I];
        e: {
          L = i, G = c;
          var ia = Jt.completedSegments;
          for (Z = 0; Z < ia.length; Z++) if (!Ri(
            L,
            G,
            Jt,
            ia[Z]
          )) {
            Z++, ia.splice(0, Z);
            var Oi = !1;
            break e;
          }
          ia.splice(0, Z), Oi = !0;
        }
        if (!Oi) {
          i.destination = null, I++, Zt.splice(0, I);
          return;
        }
      }
      Zt.splice(0, I);
      var Ha = i.completedBoundaries;
      for (I = 0; I < Ha.length; I++) _i(i, c, Ha[I]);
      Ha.splice(0, I);
    } finally {
      p(c), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && c.close();
    }
  }
  function ji(i, c) {
    try {
      var h = i.abortableTasks;
      h.forEach(function(v) {
        return Ti(v, i, c);
      }), h.clear(), i.destination !== null && Wa(i, i.destination);
    } catch (v) {
      vn(i, v), ra(i, v);
    }
  }
  return ca.renderToReadableStream = function(i, c) {
    return new Promise(function(h, v) {
      var L, I, G = new Promise(function(Pe, rt) {
        I = Pe, L = rt;
      }), Z = pu(i, Ce(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), ze(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, I, function() {
        var Pe = new ReadableStream({ type: "bytes", pull: function(rt) {
          if (Z.status === 1) Z.status = 2, A(rt, Z.fatalError);
          else if (Z.status !== 2 && Z.destination === null) {
            Z.destination = rt;
            try {
              Wa(Z, rt);
            } catch (Lt) {
              vn(Z, Lt), ra(Z, Lt);
            }
          }
        }, cancel: function() {
          ji(Z);
        } }, { highWaterMark: 0 });
        Pe.allReady = G, h(Pe);
      }, function(Pe) {
        G.catch(function() {
        }), v(Pe);
      }, L);
      if (c && c.signal) {
        var ge = c.signal, Ie = function() {
          ji(Z, ge.reason), ge.removeEventListener("abort", Ie);
        };
        ge.addEventListener("abort", Ie);
      }
      Ai(Z);
    });
  }, ca.version = "18.3.1", ca;
}
var cn, ll;
cn = Ju(), ll = ed();
cn.version;
cn.renderToString;
cn.renderToStaticMarkup;
cn.renderToNodeStream;
cn.renderToStaticNodeStream;
ll.renderToReadableStream;
const td = "staticMarkup";
function Ho() {
  const e = gu().indexOf(td) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const Kr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Ho(), { onClick: o, ...s } = r.props;
  if (n)
    return mt.cloneElement(r, {
      ...s,
      onClick: (b) => (sl(e), o ? o(b) : !0)
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
  return mt.cloneElement(r, {
    ...s,
    onClick: o,
    ...m
  });
}, cl = ({ id: e, item: t, openCard: r, onClick: n, gaData: o }) => {
  var s, p, m, b, f, A;
  const E = e === r, R = E ? "open" : "close";
  return /* @__PURE__ */ W.jsxs(
    "div",
    {
      className: ct("accordion-item", "mt-3", {
        [`accordion-item-${t.color}`]: t.color,
        "accordion-header-icon": (s = t.content) == null ? void 0 : s.icon
      }),
      children: [
        /* @__PURE__ */ W.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ W.jsx("h4", { children: /* @__PURE__ */ W.jsx(
          Kr,
          {
            gaData: { ...o, action: R, text: t.content.header },
            children: /* @__PURE__ */ W.jsxs(
              "a",
              {
                "data-testid": "accordion-opener",
                className: ct({ collapsed: !E }),
                "data-bs-toggle": "collapse",
                href: `#card-body-${e}`,
                role: "button",
                "aria-expanded": E,
                "aria-controls": `card-body-${e}`,
                onClick: (U) => n(U, e),
                children: [
                  (p = t.content) != null && p.icon ? /* @__PURE__ */ W.jsxs("span", { className: "accordion-icon", children: [
                    /* @__PURE__ */ W.jsx(
                      "i",
                      {
                        className: `${(m = t.content.icon) == null ? void 0 : m[0]} fa-${(b = t.content.icon) == null ? void 0 : b[1]} me-2`
                      }
                    ),
                    t.content.header
                  ] }) : (f = t.content) == null ? void 0 : f.header,
                  /* @__PURE__ */ W.jsx("i", { className: "fas fa-chevron-up" })
                ]
              }
            )
          }
        ) }) }),
        ((A = t.content) == null ? void 0 : A.body) && /* @__PURE__ */ W.jsx(
          "div",
          {
            id: `card-body-${e}`,
            className: ct("collapse", { show: E }),
            children: /* @__PURE__ */ W.jsx(
              "div",
              {
                className: "accordion-body",
                dangerouslySetInnerHTML: Wr(t.content.body)
              }
            )
          }
        )
      ]
    }
  );
};
cl.propTypes = {
  id: l.number,
  item: el,
  openCard: l.number,
  onClick: l.func,
  // eslint-disable-next-line react/forbid-prop-types
  gaData: l.object
};
const rd = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, Vo = ({ cards: e, openedCard: t }) => {
  const [r, n] = ut(t), o = (s, p) => {
    s.preventDefault(), n(r !== p ? p : null);
  };
  return /* @__PURE__ */ W.jsx("div", { className: "accordion", children: e == null ? void 0 : e.map(
    (s, p) => s.content.body && s.content.header && /* @__PURE__ */ W.jsx(
      cl,
      {
        id: p + 1,
        item: s,
        openCard: r,
        onClick: o,
        gaData: rd
      },
      p + 1
    )
  ) });
};
Vo.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: l.arrayOf(el).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: l.number
};
const nd = {
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
  block: o,
  color: s = "gray",
  disabled: p,
  element: m = "button",
  href: b,
  icon: f,
  innerRef: A,
  onClick: E,
  size: R = "default",
  classes: U,
  target: _ = "_self",
  ...T
}) => {
  const P = ct("btn", {
    [`btn-${s}`]: !0,
    "btn-md": R === "small",
    "btn-sm": R === "xsmall",
    "btn-block": o,
    disabled: p
  });
  let F = m;
  return b && m === "button" && (F = "a"), /* @__PURE__ */ W.jsx(
    Kr,
    {
      gaData: {
        ...nd,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ W.jsxs(
        F,
        {
          type: F === "button" && E ? "button" : void 0,
          ...T,
          className: ct(U) || P,
          href: b,
          ref: A,
          onClick: E,
          "aria-label": n,
          target: F === "a" ? _ : null,
          children: [
            f && /* @__PURE__ */ W.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
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
  gaData: Wo,
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
    Button size
  */
  size: l.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: l.arrayOf(l.string),
  /**
   Link target type
   */
  target: l.oneOf(["_blank", "_self", "_top", "_parent"])
};
var ul = { exports: {} }, Ve = {}, Ki;
function ad() {
  if (Ki) return Ve;
  Ki = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), U = Symbol.for("react.client.reference");
  function _(T) {
    if (typeof T == "object" && T !== null) {
      var P = T.$$typeof;
      switch (P) {
        case e:
          switch (T = T.type, T) {
            case r:
            case o:
            case n:
            case b:
            case f:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case p:
                case m:
                case E:
                case A:
                  return T;
                case s:
                  return T;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return Ve.ContextConsumer = s, Ve.ContextProvider = p, Ve.Element = e, Ve.ForwardRef = m, Ve.Fragment = r, Ve.Lazy = E, Ve.Memo = A, Ve.Portal = t, Ve.Profiler = o, Ve.StrictMode = n, Ve.Suspense = b, Ve.SuspenseList = f, Ve.isContextConsumer = function(T) {
    return _(T) === s;
  }, Ve.isContextProvider = function(T) {
    return _(T) === p;
  }, Ve.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === e;
  }, Ve.isForwardRef = function(T) {
    return _(T) === m;
  }, Ve.isFragment = function(T) {
    return _(T) === r;
  }, Ve.isLazy = function(T) {
    return _(T) === E;
  }, Ve.isMemo = function(T) {
    return _(T) === A;
  }, Ve.isPortal = function(T) {
    return _(T) === t;
  }, Ve.isProfiler = function(T) {
    return _(T) === o;
  }, Ve.isStrictMode = function(T) {
    return _(T) === n;
  }, Ve.isSuspense = function(T) {
    return _(T) === b;
  }, Ve.isSuspenseList = function(T) {
    return _(T) === f;
  }, Ve.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === r || T === o || T === n || T === b || T === f || T === R || typeof T == "object" && T !== null && (T.$$typeof === E || T.$$typeof === A || T.$$typeof === p || T.$$typeof === s || T.$$typeof === m || T.$$typeof === U || T.getModuleId !== void 0);
  }, Ve.typeOf = _, Ve;
}
ul.exports = ad();
var dl = ul.exports;
function od(e) {
  function t(H, N, B, $, y) {
    for (var te = 0, j = 0, ie = 0, ee = 0, re, X, ce = 0, fe = 0, ae, be = ae = re = 0, ne = 0, me = 0, He = 0, ye = 0, ft = B.length, Qe = ft - 1, we, K = "", ue = "", Ze = "", gt = "", qe; ne < ft; ) {
      if (X = B.charCodeAt(ne), ne === Qe && j + ee + ie + te !== 0 && (j !== 0 && (X = j === 47 ? 10 : 47), ee = ie = te = 0, ft++, Qe++), j + ee + ie + te === 0) {
        if (ne === Qe && (0 < me && (K = K.replace(R, "")), 0 < K.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              K += B.charAt(ne);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (K = K.trim(), re = K.charCodeAt(0), ae = 1, ye = ++ne; ne < ft; ) {
              switch (X = B.charCodeAt(ne)) {
                case 123:
                  ae++;
                  break;
                case 125:
                  ae--;
                  break;
                case 47:
                  switch (X = B.charCodeAt(ne + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (be = ne + 1; be < Qe; ++be)
                          switch (B.charCodeAt(be)) {
                            case 47:
                              if (X === 42 && B.charCodeAt(be - 1) === 42 && ne + 2 !== be) {
                                ne = be + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                ne = be + 1;
                                break e;
                              }
                          }
                        ne = be;
                      }
                  }
                  break;
                case 91:
                  X++;
                case 40:
                  X++;
                case 34:
                case 39:
                  for (; ne++ < Qe && B.charCodeAt(ne) !== X; )
                    ;
              }
              if (ae === 0) break;
              ne++;
            }
            switch (ae = B.substring(ye, ne), re === 0 && (re = (K = K.replace(E, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < me && (K = K.replace(R, "")), X = K.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    me = N;
                    break;
                  default:
                    me = Xe;
                }
                if (ae = t(N, me, ae, X, y + 1), ye = ae.length, 0 < Ce && (me = r(Xe, K, He), qe = m(3, ae, me, N, _e, pe, ye, X, y, $), K = me.join(""), qe !== void 0 && (ye = (ae = qe.trim()).length) === 0 && (X = 0, ae = "")), 0 < ye) switch (X) {
                  case 115:
                    K = K.replace(oe, p);
                  case 100:
                  case 109:
                  case 45:
                    ae = K + "{" + ae + "}";
                    break;
                  case 107:
                    K = K.replace(q, "$1 $2"), ae = K + "{" + ae + "}", ae = ve === 1 || ve === 2 && s("@" + ae, 3) ? "@-webkit-" + ae + "@" + ae : "@" + ae;
                    break;
                  default:
                    ae = K + ae, $ === 112 && (ae = (ue += ae, ""));
                }
                else ae = "";
                break;
              default:
                ae = t(N, r(N, K, He), ae, $, y + 1);
            }
            Ze += ae, ae = He = me = be = re = 0, K = "", X = B.charCodeAt(++ne);
            break;
          case 125:
          case 59:
            if (K = (0 < me ? K.replace(R, "") : K).trim(), 1 < (ye = K.length)) switch (be === 0 && (re = K.charCodeAt(0), re === 45 || 96 < re && 123 > re) && (ye = (K = K.replace(" ", ":")).length), 0 < Ce && (qe = m(1, K, N, H, _e, pe, ue.length, $, y, $)) !== void 0 && (ye = (K = qe.trim()).length) === 0 && (K = "\0\0"), re = K.charCodeAt(0), X = K.charCodeAt(1), re) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  gt += K + B.charAt(ne);
                  break;
                }
              default:
                K.charCodeAt(ye - 1) !== 58 && (ue += o(K, re, X, K.charCodeAt(2)));
            }
            He = me = be = re = 0, K = "", X = B.charCodeAt(++ne);
        }
      }
      switch (X) {
        case 13:
        case 10:
          j === 47 ? j = 0 : 1 + re === 0 && $ !== 107 && 0 < K.length && (me = 1, K += "\0"), 0 < Ce * ze && m(0, K, N, H, _e, pe, ue.length, $, y, $), pe = 1, _e++;
          break;
        case 59:
        case 125:
          if (j + ee + ie + te === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, we = B.charAt(ne), X) {
            case 9:
            case 32:
              if (ee + te + j === 0) switch (ce) {
                case 44:
                case 58:
                case 9:
                case 32:
                  we = "";
                  break;
                default:
                  X !== 32 && (we = " ");
              }
              break;
            case 0:
              we = "\\0";
              break;
            case 12:
              we = "\\f";
              break;
            case 11:
              we = "\\v";
              break;
            case 38:
              ee + j + te === 0 && (me = He = 1, we = "\f" + we);
              break;
            case 108:
              if (ee + j + te + Ae === 0 && 0 < be) switch (ne - be) {
                case 2:
                  ce === 112 && B.charCodeAt(ne - 3) === 58 && (Ae = ce);
                case 8:
                  fe === 111 && (Ae = fe);
              }
              break;
            case 58:
              ee + j + te === 0 && (be = ne);
              break;
            case 44:
              j + ie + ee + te === 0 && (me = 1, we += "\r");
              break;
            case 34:
            case 39:
              j === 0 && (ee = ee === X ? 0 : ee === 0 ? X : ee);
              break;
            case 91:
              ee + j + ie === 0 && te++;
              break;
            case 93:
              ee + j + ie === 0 && te--;
              break;
            case 41:
              ee + j + te === 0 && ie--;
              break;
            case 40:
              if (ee + j + te === 0) {
                if (re === 0) switch (2 * ce + 3 * fe) {
                  case 533:
                    break;
                  default:
                    re = 1;
                }
                ie++;
              }
              break;
            case 64:
              j + ie + ee + te + be + ae === 0 && (ae = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + te + ie)) switch (j) {
                case 0:
                  switch (2 * X + 3 * B.charCodeAt(ne + 1)) {
                    case 235:
                      j = 47;
                      break;
                    case 220:
                      ye = ne, j = 42;
                  }
                  break;
                case 42:
                  X === 47 && ce === 42 && ye + 2 !== ne && (B.charCodeAt(ye + 2) === 33 && (ue += B.substring(ye, ne + 1)), we = "", j = 0);
              }
          }
          j === 0 && (K += we);
      }
      fe = ce, ce = X, ne++;
    }
    if (ye = ue.length, 0 < ye) {
      if (me = N, 0 < Ce && (qe = m(2, ue, me, H, _e, pe, ye, $, y, $), qe !== void 0 && (ue = qe).length === 0)) return gt + ue + Ze;
      if (ue = me.join(",") + "{" + ue + "}", ve * Ae !== 0) {
        switch (ve !== 2 || s(ue, 2) || (Ae = 0), Ae) {
          case 111:
            ue = ue.replace(z, ":-moz-$1") + ue;
            break;
          case 112:
            ue = ue.replace(Y, "::-webkit-input-$1") + ue.replace(Y, "::-moz-$1") + ue.replace(Y, ":-ms-input-$1") + ue;
        }
        Ae = 0;
      }
    }
    return gt + ue + Ze;
  }
  function r(H, N, B) {
    var $ = N.trim().split(P);
    N = $;
    var y = $.length, te = H.length;
    switch (te) {
      case 0:
      case 1:
        var j = 0;
        for (H = te === 0 ? "" : H[0] + " "; j < y; ++j)
          N[j] = n(H, N[j], B).trim();
        break;
      default:
        var ie = j = 0;
        for (N = []; j < y; ++j)
          for (var ee = 0; ee < te; ++ee)
            N[ie++] = n(H[ee] + " ", $[j], B).trim();
    }
    return N;
  }
  function n(H, N, B) {
    var $ = N.charCodeAt(0);
    switch (33 > $ && ($ = (N = N.trim()).charCodeAt(0)), $) {
      case 38:
        return N.replace(F, "$1" + H.trim());
      case 58:
        return H.trim() + N.replace(F, "$1" + H.trim());
      default:
        if (0 < 1 * B && 0 < N.indexOf("\f")) return N.replace(F, (H.charCodeAt(0) === 58 ? "" : "$1") + H.trim());
    }
    return H + N;
  }
  function o(H, N, B, $) {
    var y = H + ";", te = 2 * N + 3 * B + 4 * $;
    if (te === 944) {
      H = y.indexOf(":", 9) + 1;
      var j = y.substring(H, y.length - 1).trim();
      return j = y.substring(0, H).trim() + j + ";", ve === 1 || ve === 2 && s(j, 1) ? "-webkit-" + j + j : j;
    }
    if (ve === 0 || ve === 2 && !s(y, 1)) return y;
    switch (te) {
      case 1015:
        return y.charCodeAt(10) === 97 ? "-webkit-" + y + y : y;
      case 951:
        return y.charCodeAt(3) === 116 ? "-webkit-" + y + y : y;
      case 963:
        return y.charCodeAt(5) === 110 ? "-webkit-" + y + y : y;
      case 1009:
        if (y.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + y + y;
      case 978:
        return "-webkit-" + y + "-moz-" + y + y;
      case 1019:
      case 983:
        return "-webkit-" + y + "-moz-" + y + "-ms-" + y + y;
      case 883:
        if (y.charCodeAt(8) === 45) return "-webkit-" + y + y;
        if (0 < y.indexOf("image-set(", 11)) return y.replace(se, "$1-webkit-$2") + y;
        break;
      case 932:
        if (y.charCodeAt(4) === 45) switch (y.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + y.replace("-grow", "") + "-webkit-" + y + "-ms-" + y.replace("grow", "positive") + y;
          case 115:
            return "-webkit-" + y + "-ms-" + y.replace("shrink", "negative") + y;
          case 98:
            return "-webkit-" + y + "-ms-" + y.replace("basis", "preferred-size") + y;
        }
        return "-webkit-" + y + "-ms-" + y + y;
      case 964:
        return "-webkit-" + y + "-ms-flex-" + y + y;
      case 1023:
        if (y.charCodeAt(8) !== 99) break;
        return j = y.substring(y.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + j + "-webkit-" + y + "-ms-flex-pack" + j + y;
      case 1005:
        return _.test(y) ? y.replace(U, ":-webkit-") + y.replace(U, ":-moz-") + y : y;
      case 1e3:
        switch (j = y.substring(13).trim(), N = j.indexOf("-") + 1, j.charCodeAt(0) + j.charCodeAt(N)) {
          case 226:
            j = y.replace(S, "tb");
            break;
          case 232:
            j = y.replace(S, "tb-rl");
            break;
          case 220:
            j = y.replace(S, "lr");
            break;
          default:
            return y;
        }
        return "-webkit-" + y + "-ms-" + j + y;
      case 1017:
        if (y.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (N = (y = H).length - 10, j = (y.charCodeAt(N) === 33 ? y.substring(0, N) : y).substring(H.indexOf(":", 7) + 1).trim(), te = j.charCodeAt(0) + (j.charCodeAt(7) | 0)) {
          case 203:
            if (111 > j.charCodeAt(8)) break;
          case 115:
            y = y.replace(j, "-webkit-" + j) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(j, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + y.replace(j, "-webkit-" + j) + ";" + y.replace(j, "-ms-" + j + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return j = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + j + "-ms-flex-" + j + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(xe, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(xe, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Le.test(H) === !0) return (j = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(H.replace("stretch", "fill-available"), N, B, $).replace(":fill-available", ":stretch") : y.replace(j, "-webkit-" + j) + y.replace(j, "-moz-" + j.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, B + $ === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(T, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(H, N) {
    var B = H.indexOf(N === 1 ? ":" : "{"), $ = H.substring(0, N !== 3 ? B : 10);
    return B = H.substring(B + 1, H.length - 1), $e(N !== 2 ? $ : $.replace(Ne, "$1"), B, N);
  }
  function p(H, N) {
    var B = o(N, N.charCodeAt(0), N.charCodeAt(1), N.charCodeAt(2));
    return B !== N + ";" ? B.replace(de, " or ($1)").substring(4) : "(" + N + ")";
  }
  function m(H, N, B, $, y, te, j, ie, ee, re) {
    for (var X = 0, ce = N, fe; X < Ce; ++X)
      switch (fe = Re[X].call(A, H, ce, B, $, y, te, j, ie, ee, re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = fe;
      }
    if (ce !== N) return ce;
  }
  function b(H) {
    switch (H) {
      case void 0:
      case null:
        Ce = Re.length = 0;
        break;
      default:
        if (typeof H == "function") Re[Ce++] = H;
        else if (typeof H == "object") for (var N = 0, B = H.length; N < B; ++N)
          b(H[N]);
        else ze = !!H | 0;
    }
    return b;
  }
  function f(H) {
    return H = H.prefix, H !== void 0 && ($e = null, H ? typeof H != "function" ? ve = 1 : (ve = 2, $e = H) : ve = 0), f;
  }
  function A(H, N) {
    var B = H;
    if (33 > B.charCodeAt(0) && (B = B.trim()), le = B, B = [le], 0 < Ce) {
      var $ = m(-1, N, B, B, _e, pe, 0, 0, 0, 0);
      $ !== void 0 && typeof $ == "string" && (N = $);
    }
    var y = t(Xe, B, N, 0, 0);
    return 0 < Ce && ($ = m(-2, y, B, B, _e, pe, y.length, 0, 0, 0), $ !== void 0 && (y = $)), le = "", Ae = 0, pe = _e = 1, y;
  }
  var E = /^\0+/g, R = /[\0\r\f]/g, U = /: */g, _ = /zoo|gra/, T = /([,: ])(transform)/g, P = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, q = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, z = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, oe = /\(\s*(.*)\s*\)/g, de = /([\s\S]*?);/g, xe = /-self|flex-/g, Ne = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Le = /stretch|:\s*\w+\-(?:conte|avail)/, se = /([^-])(image-set\()/, pe = 1, _e = 1, Ae = 0, ve = 1, Xe = [], Re = [], Ce = 0, $e = null, ze = 0, le = "";
  return A.use = b, A.set = f, e !== void 0 && f(e), A;
}
var id = {
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
function sd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ld = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Qi = /* @__PURE__ */ sd(
  function(e) {
    return ld.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), pl = { exports: {} }, Be = {}, Zi;
function cd() {
  if (Zi) return Be;
  Zi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, A = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, U = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, q = e ? Symbol.for("react.scope") : 60119;
  function Y(S) {
    if (typeof S == "object" && S !== null) {
      var oe = S.$$typeof;
      switch (oe) {
        case t:
          switch (S = S.type, S) {
            case b:
            case f:
            case n:
            case s:
            case o:
            case E:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case m:
                case A:
                case _:
                case U:
                case p:
                  return S;
                default:
                  return oe;
              }
          }
        case r:
          return oe;
      }
    }
  }
  function z(S) {
    return Y(S) === f;
  }
  return Be.AsyncMode = b, Be.ConcurrentMode = f, Be.ContextConsumer = m, Be.ContextProvider = p, Be.Element = t, Be.ForwardRef = A, Be.Fragment = n, Be.Lazy = _, Be.Memo = U, Be.Portal = r, Be.Profiler = s, Be.StrictMode = o, Be.Suspense = E, Be.isAsyncMode = function(S) {
    return z(S) || Y(S) === b;
  }, Be.isConcurrentMode = z, Be.isContextConsumer = function(S) {
    return Y(S) === m;
  }, Be.isContextProvider = function(S) {
    return Y(S) === p;
  }, Be.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Be.isForwardRef = function(S) {
    return Y(S) === A;
  }, Be.isFragment = function(S) {
    return Y(S) === n;
  }, Be.isLazy = function(S) {
    return Y(S) === _;
  }, Be.isMemo = function(S) {
    return Y(S) === U;
  }, Be.isPortal = function(S) {
    return Y(S) === r;
  }, Be.isProfiler = function(S) {
    return Y(S) === s;
  }, Be.isStrictMode = function(S) {
    return Y(S) === o;
  }, Be.isSuspense = function(S) {
    return Y(S) === E;
  }, Be.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === f || S === s || S === o || S === E || S === R || typeof S == "object" && S !== null && (S.$$typeof === _ || S.$$typeof === U || S.$$typeof === p || S.$$typeof === m || S.$$typeof === A || S.$$typeof === P || S.$$typeof === F || S.$$typeof === q || S.$$typeof === T);
  }, Be.typeOf = Y, Be;
}
pl.exports = cd();
var ud = pl.exports, Go = ud, dd = {
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
}, pd = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, fd = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, fl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Yo = {};
Yo[Go.ForwardRef] = fd;
Yo[Go.Memo] = fl;
function Ji(e) {
  return Go.isMemo(e) ? fl : Yo[e.$$typeof] || dd;
}
var md = Object.defineProperty, hd = Object.getOwnPropertyNames, es = Object.getOwnPropertySymbols, gd = Object.getOwnPropertyDescriptor, bd = Object.getPrototypeOf, ts = Object.prototype;
function ml(e, t, r) {
  if (typeof t != "string") {
    if (ts) {
      var n = bd(t);
      n && n !== ts && ml(e, n, r);
    }
    var o = hd(t);
    es && (o = o.concat(es(t)));
    for (var s = Ji(e), p = Ji(t), m = 0; m < o.length; ++m) {
      var b = o[m];
      if (!pd[b] && !(r && r[b]) && !(p && p[b]) && !(s && s[b])) {
        var f = gd(t, b);
        try {
          md(e, b, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var yd = ml;
const xd = /* @__PURE__ */ Bo(yd);
var xt = { env: { NODE_ENV: "production" } };
function wr() {
  return (wr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var rs = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, wo = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !dl.typeOf(e);
}, ka = Object.freeze([]), jr = Object.freeze({});
function Fn(e) {
  return typeof e == "function";
}
function ns(e) {
  return e.displayName || e.name || "Component";
}
function Xo(e) {
  return e && typeof e.styledComponentId == "string";
}
var an = typeof xt < "u" && xt.env !== void 0 && (xt.env.REACT_APP_SC_ATTR || xt.env.SC_ATTR) || "data-styled", Ko = typeof window < "u" && "HTMLElement" in window, vd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof xt < "u" && xt.env !== void 0 && (xt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && xt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? xt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && xt.env.REACT_APP_SC_DISABLE_SPEEDY : xt.env.SC_DISABLE_SPEEDY !== void 0 && xt.env.SC_DISABLE_SPEEDY !== "" ? xt.env.SC_DISABLE_SPEEDY !== "false" && xt.env.SC_DISABLE_SPEEDY : xt.env.NODE_ENV !== "production"));
function Un(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var wd = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++) n += this.groupSizes[o];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, p = s; r >= p; ) (p <<= 1) < 0 && Un(16, "" + r);
      this.groupSizes = new Uint32Array(p), this.groupSizes.set(o), this.length = p;
      for (var m = s; m < p; m++) this.groupSizes[m] = 0;
    }
    for (var b = this.indexOfGroup(r + 1), f = 0, A = n.length; f < A; f++) this.tag.insertRule(b, n[f]) && (this.groupSizes[r]++, b++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), s = o + n;
      this.groupSizes[r] = 0;
      for (var p = o; p < s; p++) this.tag.deleteRule(o);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var o = this.groupSizes[r], s = this.indexOfGroup(r), p = s + o, m = s; m < p; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), ba = /* @__PURE__ */ new Map(), Ta = /* @__PURE__ */ new Map(), In = 1, ua = function(e) {
  if (ba.has(e)) return ba.get(e);
  for (; Ta.has(In); ) In++;
  var t = In++;
  return ba.set(e, t), Ta.set(t, e), t;
}, Sd = function(e) {
  return Ta.get(e);
}, kd = function(e, t) {
  t >= In && (In = t + 1), ba.set(e, t), Ta.set(t, e);
}, Td = "style[" + an + '][data-styled-version="5.3.11"]', Cd = new RegExp("^" + an + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ad = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, p = o.length; s < p; s++) (n = o[s]) && e.registerName(t, n);
}, Ed = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = r.length; o < s; o++) {
    var p = r[o].trim();
    if (p) {
      var m = p.match(Cd);
      if (m) {
        var b = 0 | parseInt(m[1], 10), f = m[2];
        b !== 0 && (kd(f, b), Ad(e, f, m[3]), e.getTag().insertRules(b, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, _d = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, hl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(m) {
    for (var b = m.childNodes, f = b.length; f >= 0; f--) {
      var A = b[f];
      if (A && A.nodeType === 1 && A.hasAttribute(an)) return A;
    }
  }(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(an, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = _d();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, Rd = function() {
  function e(r) {
    var n = this.element = hl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, p = 0, m = s.length; p < m; p++) {
        var b = s[p];
        if (b.ownerNode === o) return b;
      }
      Un(17);
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
}(), jd = function() {
  function e(r) {
    var n = this.element = hl(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Od = function() {
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
}(), as = Ko, Nd = { isServer: !Ko, useCSSOMInjection: !vd }, gl = function() {
  function e(r, n, o) {
    r === void 0 && (r = jr), n === void 0 && (n = {}), this.options = wr({}, Nd, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && Ko && as && (as = !1, function(s) {
      for (var p = document.querySelectorAll(Td), m = 0, b = p.length; m < b; m++) {
        var f = p[m];
        f && f.getAttribute(an) !== "active" && (Ed(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ua(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(wr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = o ? new Od(p) : s ? new Rd(p) : new jd(p), new wd(r)));
    var r, n, o, s, p;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (ua(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(ua(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(ua(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, s = "", p = 0; p < o; p++) {
        var m = Sd(p);
        if (m !== void 0) {
          var b = r.names.get(m), f = n.getGroup(p);
          if (b && f && b.size) {
            var A = an + ".g" + p + '[id="' + m + '"]', E = "";
            b !== void 0 && b.forEach(function(R) {
              R.length > 0 && (E += R + ",");
            }), s += "" + f + A + '{content:"' + E + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Pd = /(a)(d)/gi, os = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function So(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = os(t % 52) + r;
  return (os(t % 52) + r).replace(Pd, "$1-$2");
}
var en = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, bl = function(e) {
  return en(5381, e);
};
function Dd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Fn(r) && !Xo(r)) return !1;
  }
  return !0;
}
var Id = bl("5.3.11"), Ld = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Dd(t), this.componentId = r, this.baseHash = en(Id, r), this.baseStyle = n, gl.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = on(this.rules, t, r, n).join(""), m = So(en(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(o, m)) {
        var b = n(p, "." + m, void 0, o);
        r.insertRules(o, m, b);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, A = en(this.baseHash, n.hash), E = "", R = 0; R < f; R++) {
        var U = this.rules[R];
        if (typeof U == "string") E += U;
        else if (U) {
          var _ = on(U, t, r, n), T = Array.isArray(_) ? _.join("") : _;
          A = en(A, T + R), E += T;
        }
      }
      if (E) {
        var P = So(A >>> 0);
        if (!r.hasNameForId(o, P)) {
          var F = n(E, "." + P, void 0, o);
          r.insertRules(o, P, F);
        }
        s.push(P);
      }
    }
    return s.join(" ");
  }, e;
}(), Md = /^\s*\/\/.*$/gm, Fd = [":", "[", ".", "#"];
function $d(e) {
  var t, r, n, o, s = jr, p = s.options, m = p === void 0 ? jr : p, b = s.plugins, f = b === void 0 ? ka : b, A = new od(m), E = [], R = /* @__PURE__ */ function(T) {
    function P(F) {
      if (F) try {
        T(F + "}");
      } catch {
      }
    }
    return function(F, q, Y, z, S, oe, de, xe, Ne, Le) {
      switch (F) {
        case 1:
          if (Ne === 0 && q.charCodeAt(0) === 64) return T(q + ";"), "";
          break;
        case 2:
          if (xe === 0) return q + "/*|*/";
          break;
        case 3:
          switch (xe) {
            case 102:
            case 112:
              return T(Y[0] + q), "";
            default:
              return q + (Le === 0 ? "/*|*/" : "");
          }
        case -2:
          q.split("/*|*/}").forEach(P);
      }
    };
  }(function(T) {
    E.push(T);
  }), U = function(T, P, F) {
    return P === 0 && Fd.indexOf(F[r.length]) !== -1 || F.match(o) ? T : "." + t;
  };
  function _(T, P, F, q) {
    q === void 0 && (q = "&");
    var Y = T.replace(Md, ""), z = P && F ? F + " " + P + " { " + Y + " }" : Y;
    return t = q, r = P, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), A(F || !P ? "" : P, z);
  }
  return A.use([].concat(f, [function(T, P, F) {
    T === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, U));
  }, R, function(T) {
    if (T === -2) {
      var P = E;
      return E = [], P;
    }
  }])), _.hash = f.length ? f.reduce(function(T, P) {
    return P.name || Un(15), en(T, P.name);
  }, 5381).toString() : "", _;
}
var yl = mt.createContext();
yl.Consumer;
var xl = mt.createContext(), Ud = (xl.Consumer, new gl()), ko = $d();
function zd() {
  return qt(yl) || Ud;
}
function qd() {
  return qt(xl) || ko;
}
var Bd = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = ko);
      var p = n.name + s.hash;
      o.hasNameForId(n.id, p) || o.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return Un(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ko), this.name + t.hash;
  }, e;
}(), Wd = /([A-Z])/, Hd = /([A-Z])/g, Vd = /^ms-/, Gd = function(e) {
  return "-" + e.toLowerCase();
};
function is(e) {
  return Wd.test(e) ? e.replace(Hd, Gd).replace(Vd, "-ms-") : e;
}
var ss = function(e) {
  return e == null || e === !1 || e === "";
};
function on(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], p = 0, m = e.length; p < m; p += 1) (o = on(e[p], t, r, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (ss(e)) return "";
  if (Xo(e)) return "." + e.styledComponentId;
  if (Fn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return on(b, t, r, n);
  }
  var f;
  return e instanceof Bd ? r ? (e.inject(r, n), e.getName(n)) : e : wo(e) ? function A(E, R) {
    var U, _, T = [];
    for (var P in E) E.hasOwnProperty(P) && !ss(E[P]) && (Array.isArray(E[P]) && E[P].isCss || Fn(E[P]) ? T.push(is(P) + ":", E[P], ";") : wo(E[P]) ? T.push.apply(T, A(E[P], P)) : T.push(is(P) + ": " + (U = P, (_ = E[P]) == null || typeof _ == "boolean" || _ === "" ? "" : typeof _ != "number" || _ === 0 || U in id || U.startsWith("--") ? String(_).trim() : _ + "px") + ";"));
    return R ? [R + " {"].concat(T, ["}"]) : T;
  }(e) : e.toString();
}
var ls = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Yd(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Fn(e) || wo(e) ? ls(on(rs(ka, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ls(on(rs(e, r)));
}
var Xd = function(e, t, r) {
  return r === void 0 && (r = jr), e.theme !== r.theme && e.theme || t || r.theme;
}, Kd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Qd = /(^-|-$)/g;
function to(e) {
  return e.replace(Kd, "-").replace(Qd, "");
}
var Zd = function(e) {
  return So(bl(e) >>> 0);
};
function da(e) {
  return typeof e == "string" && xt.env.NODE_ENV === "production";
}
var To = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Jd = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ep(e, t, r) {
  var n = e[r];
  To(t) && To(n) ? vl(n, t) : e[r] = t;
}
function vl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var o = 0, s = r; o < s.length; o++) {
    var p = s[o];
    if (To(p)) for (var m in p) Jd(m) && ep(e, p[m], m);
  }
  return e;
}
var wl = mt.createContext();
wl.Consumer;
var ro = {};
function Sl(e, t, r) {
  var n = Xo(e), o = !da(e), s = t.attrs, p = s === void 0 ? ka : s, m = t.componentId, b = m === void 0 ? function(q, Y) {
    var z = typeof q != "string" ? "sc" : to(q);
    ro[z] = (ro[z] || 0) + 1;
    var S = z + "-" + Zd("5.3.11" + z + ro[z]);
    return Y ? Y + "-" + S : S;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, A = f === void 0 ? function(q) {
    return da(q) ? "styled." + q : "Styled(" + ns(q) + ")";
  }(e) : f, E = t.displayName && t.componentId ? to(t.displayName) + "-" + t.componentId : t.componentId || b, R = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, U = t.shouldForwardProp;
  n && e.shouldForwardProp && (U = t.shouldForwardProp ? function(q, Y, z) {
    return e.shouldForwardProp(q, Y, z) && t.shouldForwardProp(q, Y, z);
  } : e.shouldForwardProp);
  var _, T = new Ld(r, E, n ? e.componentStyle : void 0), P = T.isStatic && p.length === 0, F = function(q, Y) {
    return function(z, S, oe, de) {
      var xe = z.attrs, Ne = z.componentStyle, Le = z.defaultProps, se = z.foldedComponentIds, pe = z.shouldForwardProp, _e = z.styledComponentId, Ae = z.target, ve = function($, y, te) {
        $ === void 0 && ($ = jr);
        var j = wr({}, y, { theme: $ }), ie = {};
        return te.forEach(function(ee) {
          var re, X, ce, fe = ee;
          for (re in Fn(fe) && (fe = fe(j)), fe) j[re] = ie[re] = re === "className" ? (X = ie[re], ce = fe[re], X && ce ? X + " " + ce : X || ce) : fe[re];
        }), [j, ie];
      }(Xd(S, qt(wl), Le) || jr, S, xe), Xe = ve[0], Re = ve[1], Ce = function($, y, te, j) {
        var ie = zd(), ee = qd(), re = y ? $.generateAndInjectStyles(jr, ie, ee) : $.generateAndInjectStyles(te, ie, ee);
        return re;
      }(Ne, de, Xe), $e = oe, ze = Re.$as || S.$as || Re.as || S.as || Ae, le = da(ze), H = Re !== S ? wr({}, S, {}, Re) : S, N = {};
      for (var B in H) B[0] !== "$" && B !== "as" && (B === "forwardedAs" ? N.as = H[B] : (pe ? pe(B, Qi, ze) : !le || Qi(B)) && (N[B] = H[B]));
      return S.style && Re.style !== S.style && (N.style = wr({}, S.style, {}, Re.style)), N.className = Array.prototype.concat(se, _e, Ce !== _e ? Ce : null, S.className, Re.className).filter(Boolean).join(" "), N.ref = $e, Gs(ze, N);
    }(_, q, Y, P);
  };
  return F.displayName = A, (_ = mt.forwardRef(F)).attrs = R, _.componentStyle = T, _.displayName = A, _.shouldForwardProp = U, _.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ka, _.styledComponentId = E, _.target = n ? e.target : e, _.withComponent = function(q) {
    var Y = t.componentId, z = function(oe, de) {
      if (oe == null) return {};
      var xe, Ne, Le = {}, se = Object.keys(oe);
      for (Ne = 0; Ne < se.length; Ne++) xe = se[Ne], de.indexOf(xe) >= 0 || (Le[xe] = oe[xe]);
      return Le;
    }(t, ["componentId"]), S = Y && Y + "-" + (da(q) ? q : to(ns(q)));
    return Sl(q, wr({}, z, { attrs: R, componentId: S }), r);
  }, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(q) {
    this._foldedDefaultProps = n ? vl({}, e.defaultProps, q) : q;
  } }), Object.defineProperty(_, "toString", { value: function() {
    return "." + _.styledComponentId;
  } }), o && xd(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), _;
}
var nr = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = jr), !dl.isValidElementType(n)) return Un(1, String(n));
    var s = function() {
      return r(n, o, Yd.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, wr({}, o, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, wr({}, o, { attrs: Array.prototype.concat(o.attrs, p).filter(Boolean) }));
    }, s;
  }(Sl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  nr[e] = nr(e);
});
const tp = nr.div`
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
    h4 {
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
`, ya = "On This Page", rp = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: ya
}, kl = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: r = !1
}) => {
  const { isReact: n, isBootstrap: o } = Ho(), s = nn(null), p = Au("(max-width: 991px)"), [m, b] = ut({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), f = p ? 110 : 142, A = () => {
    var F;
    const q = {}, Y = window.scrollY, z = (F = document.getElementById(t)) == null ? void 0 : F.getBoundingClientRect().top, S = 103;
    z >= 0 && (q.sticky = !1, q.activeContainer = ""), Y > s.current.getBoundingClientRect().top && (q.sticky = !0);
    const oe = m.hasHeader ? f + S : S;
    e == null || e.forEach(({ targetIdName: de }) => {
      const xe = document.getElementById(de), Ne = (xe == null ? void 0 : xe.getBoundingClientRect().top) - oe, Le = (xe == null ? void 0 : xe.getBoundingClientRect().bottom) - oe;
      Ne < 0 && Le > 0 && (q.activeContainer = de);
    }), b((de) => ({
      ...de,
      ...q
    }));
  }, E = () => {
    Qu(A, 150), Zu(A, 150);
  }, R = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), U = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function _(F = null) {
    if (F === null) return m.containerClass;
    const q = Object.values(F.classList).filter(
      (Y) => [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid"
      ].includes(Y)
    );
    return q.length > 0 ? q.join(" ") : _(F.parentElement);
  }
  At(() => {
    const F = document.getElementById(t) || null, q = {
      hasHeader: R(),
      hasAltMenuSpacing: U(),
      containerClass: _(F)
    };
    b((Y) => ({
      ...Y,
      ...q
    }));
  }, []), At(() => (window == null || window.addEventListener("scroll", E), () => window.removeEventListener("scroll", E)), [m.hasHeader]);
  const T = (F) => {
    var q, Y;
    const z = window.scrollY - (m.hasHeader ? f + 100 : 100), S = p ? 410 : 90;
    let oe = ((q = document.getElementById(F)) == null ? void 0 : q.getBoundingClientRect().top) + z;
    s.current.classList.contains("sticky") || (oe -= S), r && ((Y = Ku(`#${F}`)) == null || Y.focus()), window.scrollTo({ top: oe, behavior: "smooth" });
  }, P = () => {
    b((F) => ({
      ...F,
      showMenu: !F.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ W.jsx(
    tp,
    {
      requiresAltMenuSpacing: m.hasAltMenuSpacing,
      ref: s,
      id: "uds-anchor-menu",
      className: ct(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: m.sticky,
          "with-header": m.hasHeader
        }
      ),
      style: m.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ W.jsxs("div", { className: `${m.containerClass} uds-anchor-menu-wrapper`, children: [
        p ? /* @__PURE__ */ W.jsx(
          Kr,
          {
            gaData: {
              ...rp,
              action: m.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ W.jsx(
              "button",
              {
                className: ct("mobile-menu-toggler", {
                  "show-menu": m.showMenu
                }),
                type: "button",
                onClick: P,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseAnchorMenu",
                "aria-controls": "collapseAnchorMenu",
                children: /* @__PURE__ */ W.jsxs("h4", { children: [
                  ya,
                  ":",
                  /* @__PURE__ */ W.jsx("i", { className: "fas fa-chevron-down" })
                ] })
              }
            )
          }
        ) : /* @__PURE__ */ W.jsxs("h4", { children: [
          ya,
          ":"
        ] }),
        /* @__PURE__ */ W.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: ct("card", "card-body", "collapse", {
              show: m.showMenu
            }),
            children: /* @__PURE__ */ W.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": ya,
                children: e == null ? void 0 : e.map((F) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ W.jsx(
                    Tr,
                    {
                      "data-testid": `anchor-item-${F.targetIdName}`,
                      classes: ct("nav-link", {
                        active: m.activeContainer === F.targetIdName
                      }).split(" "),
                      ariaLabel: F.text,
                      label: F.text,
                      icon: F.icon,
                      onClick: n && (() => T(F.targetIdName)),
                      href: o && `#${F.targetIdName}`
                    },
                    F.targetIdName
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
kl.propTypes = {
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
function Oa(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], o = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(o)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var np = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
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
}(), Hr = function() {
  return Hr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Hr.apply(this, arguments);
}, ap = function(e, t, r, n) {
  function o(s) {
    return s instanceof r ? s : new r(function(p) {
      p(s);
    });
  }
  return new (r || (r = Promise))(function(s, p) {
    function m(A) {
      try {
        f(n.next(A));
      } catch (E) {
        p(E);
      }
    }
    function b(A) {
      try {
        f(n.throw(A));
      } catch (E) {
        p(E);
      }
    }
    function f(A) {
      A.done ? s(A.value) : o(A.value).then(m, b);
    }
    f((n = n.apply(e, [])).next());
  });
}, op = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, o, s, p;
  return p = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
    return this;
  }), p;
  function m(f) {
    return function(A) {
      return b([f, A]);
    };
  }
  function b(f) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (n = 1, o && (s = f[0] & 2 ? o.return : f[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, f[1])).done) return s;
      switch (o = 0, s && (f = [f[0] & 2, s.value]), f[0]) {
        case 0:
        case 1:
          s = f;
          break;
        case 4:
          return r.label++, { value: f[1], done: !1 };
        case 5:
          r.label++, o = f[1], f = [0];
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
    } catch (A) {
      f = [6, A], o = 0;
    } finally {
      n = s = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, Tl = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}, ip = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, sp = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, lp = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function cp(e, t, r) {
  var n = t.height, o = t.width, s = Tl(t, ["height", "width"]), p = Hr({ height: n, width: o, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), m = window.open(e, "", Object.keys(p).map(function(f) {
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
var up = (
  /** @class */
  function(e) {
    np(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var o = r.props, s = o.onShareWindowClose, p = o.windowHeight, m = p === void 0 ? 400 : p, b = o.windowPosition, f = b === void 0 ? "windowCenter" : b, A = o.windowWidth, E = A === void 0 ? 550 : A, R = Hr({ height: m, width: E }, f === "windowCenter" ? sp(E, m) : lp(E, m));
        cp(n, R, s);
      }, r.handleClick = function(n) {
        return ap(r, void 0, void 0, function() {
          var o, s, p, m, b, f, A, E, R, U;
          return op(this, function(_) {
            switch (_.label) {
              case 0:
                return o = this.props, s = o.beforeOnClick, p = o.disabled, m = o.networkLink, b = o.onClick, f = o.url, A = o.openShareDialogOnClick, E = o.opts, R = m(f, E), p ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? (U = s(), ip(U) ? [4, U] : [3, 2]) : [3, 2]);
              case 1:
                _.sent(), _.label = 2;
              case 2:
                return A && this.openShareDialog(R), b && b(n, R), [
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
      var n = r.children, o = r.className, s = r.disabled, p = r.disabledStyle, m = r.forwardedRef;
      r.networkLink;
      var b = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var f = r.resetButtonStyle, A = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var E = Tl(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), R = ct("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, o), U = Hr(Hr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, A), s && p);
      return mt.createElement("button", Hr({}, E, { "aria-label": E["aria-label"] || b, className: R, onClick: this.handleClick, ref: m, style: U }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(mu)
), Ca = function() {
  return Ca = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Ca.apply(this, arguments);
};
function Na(e, t, r, n) {
  function o(s, p) {
    var m = r(s), b = Ca({}, s), f = Object.keys(m);
    return f.forEach(function(A) {
      delete b[A];
    }), mt.createElement(up, Ca({}, n, b, { forwardedRef: p, networkName: e, networkLink: t, opts: r(s) }));
  }
  return o.displayName = "ShareButton-".concat(e), Vs(o);
}
function dp(e, t) {
  var r = t.subject, n = t.body, o = t.separator;
  return "mailto:" + Oa({ subject: r, body: n ? n + o + e : e });
}
Na("email", dp, function(e) {
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
var pp = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
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
}(), fp = (
  /** @class */
  function(e) {
    pp(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function Ln(e, t) {
  if (!e)
    throw new fp(t);
}
function mp(e, t) {
  var r = t.quote, n = t.hashtag;
  return Ln(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Oa({
    u: e,
    quote: r,
    hashtag: n
  });
}
Na("facebook", mp, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function hp(e, t) {
  var r = t.title, n = t.summary, o = t.source;
  return Ln(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Oa({ url: e, mini: "true", title: r, summary: n, source: o });
}
Na("linkedin", hp, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function gp(e, t) {
  var r = t.title, n = t.via, o = t.hashtags, s = o === void 0 ? [] : o, p = t.related, m = p === void 0 ? [] : p;
  return Ln(e, "twitter.url"), Ln(Array.isArray(s), "twitter.hashtags is not an array"), Ln(Array.isArray(m), "twitter.related is not an array"), "https://twitter.com/share" + Oa({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: m.length > 0 ? m.join(",") : void 0
  });
}
Na("twitter", gp, function(e) {
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
function Co(e) {
  "@babel/helpers - typeof";
  return Co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Co(e);
}
var bp = (typeof window > "u" ? "undefined" : Co(window)) === "object" && window.Element || function() {
};
function yp(e, t, r) {
  if (!(e[t] instanceof bp))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, yp, l.shape({
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
nr.div`
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
    box-shadow: -0.15em 0 0 #ffc627, 0.15em 0 0 #ffc627;
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
nr.div`
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
const xp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Cl = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  color: o = "gray",
  disabled: s,
  element: p = "button",
  innerRef: m,
  href: b,
  onClick: f,
  ...A
}) => {
  const E = ct("btn", "btn-tag", {
    "btn-tag-alt-white": o === "white",
    "btn-tag-alt-gray": o === "gray",
    "btn-tag-alt-dark": o === "dark",
    disabled: s
  });
  let R = p;
  return b && p === "button" && (R = "a"), /* @__PURE__ */ W.jsx(
    Kr,
    {
      gaData: {
        ...xp,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ W.jsx(
        R,
        {
          type: R === "button" && f ? "button" : void 0,
          ...A,
          className: E,
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
Cl.propTypes = {
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
  gaData: Wo,
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
const Al = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: o = "async",
  dataTestId: s,
  fetchPriority: p = "auto",
  width: m,
  height: b,
  cardLink: f,
  title: A,
  caption: E,
  captionTitle: R,
  border: U,
  dropShadow: _
}) => {
  const T = {
    src: e,
    alt: t,
    loading: n,
    decoding: o,
    fetchpriority: p,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Eu(r) },
    ...s && { "data-testid": s },
    ...m && { width: m },
    ...b && { height: b }
  }, P = ct("uds-img", {
    borderless: !U,
    "uds-img-drop-shadow": _
  }), F = (Y) => {
    const z = Y ? `${T.className} ${Y}` : T.className;
    return f ? /* @__PURE__ */ W.jsxs("a", { href: f, children: [
      /* @__PURE__ */ W.jsx("img", { ...T, className: z }),
      /* @__PURE__ */ W.jsx("span", { className: "visually-hidden", children: A })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ W.jsx("img", { ...T, className: z })
    );
  }, q = () => /* @__PURE__ */ W.jsx("div", { className: P, children: /* @__PURE__ */ W.jsxs("figure", { className: "figure uds-figure", children: [
    F(),
    E && /* @__PURE__ */ W.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      R && /* @__PURE__ */ W.jsx("h3", { children: R }),
      /* @__PURE__ */ W.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Wr(E)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ W.jsx(W.Fragment, { children: E ? q() : F(P) });
};
Al.propTypes = {
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
const vp = nr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, wp = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Sp = (e) => !e.startsWith("https://") && !e.startsWith("http://") && wp(e) ? `mailto:${e}` : e, kp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ht = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n,
  imageAltText: o,
  title: s,
  icon: p,
  body: m,
  eventFormat: b = "stack",
  eventLocation: f,
  eventTime: A,
  buttons: E,
  linkLabel: R,
  linkUrl: U,
  tags: _,
  showBorders: T = !0,
  cardLink: P
}) => /* @__PURE__ */ W.jsx(
  El,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: o,
    title: s,
    icon: p,
    body: m,
    eventFormat: b,
    eventLocation: f,
    eventTime: A,
    buttons: E,
    linkLabel: R,
    linkUrl: U,
    tags: _,
    showBorders: T,
    cardLink: P
  }
);
ht.propTypes = {
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
const El = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n = "",
  imageAltText: o = "",
  title: s,
  icon: p = void 0,
  body: m = "",
  eventFormat: b = "stack",
  eventLocation: f = "",
  eventTime: A = "",
  buttons: E = void 0,
  linkLabel: R = void 0,
  linkUrl: U = void 0,
  tags: _ = void 0,
  showBorders: T = !0,
  cardLink: P
}) => {
  const F = ct("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !T
  });
  return /* @__PURE__ */ W.jsx(W.Fragment, { children: /* @__PURE__ */ W.jsxs(vp, { className: F, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ W.jsx(
      Al,
      {
        src: n,
        alt: o,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: P,
        title: s
      }
    ),
    !n && p && /* @__PURE__ */ W.jsx(
      "i",
      {
        className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ W.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ W.jsx(
      Ao,
      {
        type: e,
        body: m,
        eventFormat: b,
        eventLocation: f,
        eventTime: A,
        title: s,
        buttons: E,
        linkLabel: R,
        linkUrl: U,
        tags: _,
        cardLink: P
      }
    ) }) : /* @__PURE__ */ W.jsx(
      Ao,
      {
        type: e,
        body: m,
        eventFormat: b,
        eventLocation: f,
        eventTime: A,
        title: s,
        buttons: E,
        linkLabel: R,
        linkUrl: U,
        tags: _,
        cardLink: P
      }
    )
  ] }) });
};
El.propTypes = {
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
const Ao = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: n = "",
  eventTime: o = "",
  title: s,
  buttons: p = void 0,
  linkLabel: m = void 0,
  linkUrl: b = void 0,
  tags: f = void 0,
  cardLink: A
}) => /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
  !!s && /* @__PURE__ */ W.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ W.jsx("h3", { className: "card-title", children: A ? /* @__PURE__ */ W.jsx("a", { href: A, children: s }) : s }) }),
  !!t && /* @__PURE__ */ W.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ W.jsx("div", { dangerouslySetInnerHTML: Wr(t) }) }),
  e === "event" && (o || n) && /* @__PURE__ */ W.jsx(
    _l,
    {
      eventFormat: r,
      eventTime: o,
      eventLocation: n
    }
  ),
  p && /* @__PURE__ */ W.jsx("div", { className: "card-buttons", children: p.map((E) => /* @__PURE__ */ W.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ W.jsx(
        Tr,
        {
          ariaLabel: E.ariaLabel,
          color: E.color,
          icon: E.icon,
          href: E.href,
          label: E.label,
          onClick: E.onClick,
          size: E.size,
          target: E.target,
          cardTitle: s
        }
      )
    },
    `${E.label}-${E.href}`
  )) }),
  b && m && /* @__PURE__ */ W.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ W.jsx(
    Kr,
    {
      gaData: {
        ...kp,
        section: s,
        text: m
      },
      children: /* @__PURE__ */ W.jsx("a", { href: Sp(b), children: m })
    }
  ) }),
  f && /* @__PURE__ */ W.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((E) => (
    // @ts-ignore
    /* @__PURE__ */ W.jsx(
      Cl,
      {
        ariaLabel: E.ariaLabel,
        color: E.color,
        href: E.href,
        label: E.label,
        onClick: E.onClick,
        cardTitle: s
      },
      `${E.label}-${E.href}`
    )
  )) })
] });
Ao.propTypes = {
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
const _l = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ W.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ W.jsx("div", { dangerouslySetInnerHTML: Wr(r) })
  ] }),
  t && /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ W.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Wr(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
  r && /* @__PURE__ */ W.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ W.jsx("div", { dangerouslySetInnerHTML: Wr(r) })
  ] }) }),
  t && /* @__PURE__ */ W.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ W.jsx("span", { children: /* @__PURE__ */ W.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Wr(t)
      }
    ) })
  ] }) })
] });
_l.propTypes = {
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string
};
nr.div`
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
nr.section``;
Hs(null);
l.element, l.element, l.number, l.func, l.func, l.string;
const Tp = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), Cp = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
});
l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
});
const Ap = l.shape({
  url: l.string,
  filters: l.string
});
l.shape({
  header: Tp,
  ctaButton: Cp,
  dataSource: Ap,
  maxItems: l.number
});
nr.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`;
l.element;
const Ep = nr.img`
  width: 100%;
`;
function _p({ image: e, title: t, contents: r }) {
  return console.log({ image: e, title: t, contents: r }), /* @__PURE__ */ W.jsx("div", { children: "TODO: to be implemented" });
}
function Rp({
  image: e,
  subTitle: t,
  title: r,
  contents: n,
  contentsColor: o
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
  return /* @__PURE__ */ W.jsxs(
    "div",
    {
      className: ct("uds-hero", {
        [s[e == null ? void 0 : e.size]]: e == null ? void 0 : e.size
      }),
      children: [
        /* @__PURE__ */ W.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ W.jsx(
          Ep,
          {
            className: "hero",
            src: e == null ? void 0 : e.url,
            alt: e == null ? void 0 : e.altText,
            "data-testid": "hero-image"
          }
        ),
        t && /* @__PURE__ */ W.jsx("div", { role: "doc-subtitle", "data-testid": "hero-subtitle", children: /* @__PURE__ */ W.jsx(
          "span",
          {
            className: ct({
              [m[t.color]]: t.color,
              [p[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        r && /* @__PURE__ */ W.jsx("h1", { style: { maxWidth: r.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ W.jsx(
          "span",
          {
            className: ct({
              [m[r.color]]: r.color,
              [p[r.highlightColor]]: r.highlightColor
            }),
            children: r.text
          }
        ) }),
        n && /* @__PURE__ */ W.jsx(
          "div",
          {
            "data-testid": "hero-content",
            className: ct("content", {
              [m[o]]: o
            }),
            children: n.map((b, f) => (
              // eslint-disable-next-line react/no-array-index-key
              /* @__PURE__ */ W.jsx("p", { children: b.text }, `content-${f}`)
            ))
          }
        )
      ]
    }
  );
}
const zn = (e) => {
  const t = e.type || "heading-hero";
  return {
    "heading-hero": () => Rp(e),
    "story-hero": () => _p(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
zn.propTypes = {
  type: l.oneOf(["heading-hero", "story-hero"]),
  image: Tu,
  title: Ya,
  subTitle: Ya,
  contents: l.arrayOf(Ya),
  contentsColor: l.string
};
const er = ({
  dataId: e,
  isClickeable: t = !1,
  disabled: r = !1,
  pageLinkIcon: n = !1,
  selectedPage: o = !1,
  onClick: s = () => {
  },
  ellipses: p,
  ariaLabel: m,
  children: b,
  ariaDisabled: f
}) => /* @__PURE__ */ W.jsx(
  "li",
  {
    className: ct("page-item", {
      disabled: r,
      active: o,
      elipses: p
    }),
    children: t ? /* @__PURE__ */ W.jsxs(
      "button",
      {
        type: "button",
        "aria-label": m,
        className: ct("page-link", {
          "page-link-icon": n
        }),
        onClick: s,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": o ? "page" : null,
        "aria-disabled": f,
        children: [
          b,
          o && /* @__PURE__ */ W.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ W.jsx("span", { className: "page-link", "data-testid": "page-link", children: b })
  }
);
er.propTypes = {
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
const jp = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, Rl = ({
  type: e,
  background: t,
  currentPage: r = 1,
  totalPages: n = 10,
  onChange: o
}) => {
  const [s, p] = ut(null);
  At(() => {
    p(r);
  }, [r]);
  const m = (A) => {
    sl({ ...jp, text: `page ${A}` });
  }, b = (A, E) => {
    const R = {
      first: 1,
      prev: s === 1 ? 1 : s - 1,
      next: s === n ? n : s + 1,
      last: n
    }[E] ?? E;
    p(R), m(R), o == null || o(A, R);
  }, f = () => {
    if (n < 5)
      return /* @__PURE__ */ W.jsx(W.Fragment, { children: Array.from({ length: n }, (P, F) => {
        const q = F + 1;
        return /* @__PURE__ */ W.jsx(
          er,
          {
            ariaLabel: `Page ${q} of ${n}`,
            isClickeable: !0,
            selectedPage: s === q,
            onClick: (Y) => b(Y, q),
            children: q
          },
          q
        );
      }) });
    const A = 2, E = Li(
      s === n - 1,
      1,
      s === n ? 2 : 1
    ), R = Li(
      s === 1,
      2,
      1
    ), U = Vi(
      s - E,
      s,
      n
    ), _ = Vi(
      s,
      s + 1 + R,
      n
    ), T = [...U, ..._];
    return /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
      T[0] !== 1 && /* @__PURE__ */ W.jsx(
        er,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: s === 1,
          onClick: (P) => b(P, "first"),
          children: "1"
        }
      ),
      s > n - A && /* @__PURE__ */ W.jsx(
        er,
        {
          isClickeable: !0,
          ariaLabel: `Page 2 of ${n}`,
          selectedPage: s === 2,
          onClick: (P) => b(P, 2),
          children: "2"
        }
      ),
      T[0] > 2 && /* @__PURE__ */ W.jsx(er, { ellipses: !0, children: "..." }),
      T.map((P) => /* @__PURE__ */ W.jsx(
        er,
        {
          ariaLabel: `Page ${P} of ${n}`,
          isClickeable: !0,
          selectedPage: s === P,
          onClick: (F) => b(F, P),
          children: P
        },
        P
      )),
      T[T.length - 1] < n - 1 && /* @__PURE__ */ W.jsx(er, { ellipses: !0, children: "..." }),
      s < A + 1 && /* @__PURE__ */ W.jsx(
        er,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n - 1} of ${n}`,
          selectedPage: s === n - 1,
          onClick: (P) => b(P, n - 1),
          children: n - 1
        }
      ),
      T[T.length - 1] !== n && /* @__PURE__ */ W.jsx(
        er,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n} of ${n}`,
          selectedPage: s === n,
          onClick: (P) => b(P, "last"),
          children: n
        }
      )
    ] });
  };
  return /* @__PURE__ */ W.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ W.jsxs(
    "ul",
    {
      className: ct(
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
        /* @__PURE__ */ W.jsx(
          er,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: s === 1,
            pageLinkIcon: !0,
            onClick: (A) => b(A, "prev"),
            ariaDisabled: s === 1,
            ariaLabel: "Previous Page"
          }
        ),
        f(),
        /* @__PURE__ */ W.jsx(
          er,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: s === n,
            disabled: s === n,
            pageLinkIcon: !0,
            onClick: (A) => b(A, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
Rl.propTypes = {
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
l.oneOf(["small", "large"]), l.string.isRequired, l.string.isRequired, l.string;
l.oneOf(["small", "large"]).isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string, l.string;
nr.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const Op = Vs(function(e, t) {
  const {
    id: r,
    selected: n,
    title: o,
    selectTab: s,
    leftKeyPressed: p,
    rightKeyPressed: m,
    icon: b,
    gaData: f
  } = e, { isReact: A, isBootstrap: E } = Ho(), R = nn(null);
  hu(
    t,
    () => ({
      focus() {
        R.current.focus();
      },
      scrollIntoView() {
        var _, T, P, F, q, Y, z;
        const S = ((_ = R.current) == null ? void 0 : _.offsetWidth) / 2 + R.current.offsetLeft, oe = ((P = (T = R.current) == null ? void 0 : T.offsetParent) == null ? void 0 : P.scrollLeft) + ((q = (F = R.current) == null ? void 0 : F.offsetParent) == null ? void 0 : q.offsetWidth) / 2;
        (z = (Y = R.current) == null ? void 0 : Y.offsetParent) == null || z.scrollBy({
          left: S - oe
        });
      }
    }),
    []
  );
  const U = (_) => {
    _.keyCode === 37 ? (_.preventDefault(), p()) : _.keyCode === 39 && (_.preventDefault(), m());
  };
  return /* @__PURE__ */ W.jsx(Kr, { gaData: { ...f, text: o }, children: /* @__PURE__ */ W.jsxs(
    "a",
    {
      ref: R,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      "data-bs-toggle": E && "tab",
      onClick: A && ((_) => s(_, r, o)),
      onKeyDown: A && U,
      tabIndex: n ? "" : "-1",
      children: [
        o,
        " ",
        b && /* @__PURE__ */ W.jsx("i", { className: `${b == null ? void 0 : b[0]} fa-${b == null ? void 0 : b[1]} me-1` })
      ]
    }
  ) });
});
Op.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
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
const Np = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  text: "play button"
}, Pp = ({
  url: e = "",
  vttUrl: t,
  caption: r,
  title: n = "",
  className: o,
  controls: s = !0
}) => {
  const p = nn(null);
  return /* @__PURE__ */ W.jsxs(
    "div",
    {
      className: ct(`uds-video-container ${o}`, {
        "uds-video-with-caption": r
      }),
      children: [
        /* @__PURE__ */ W.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ W.jsx(Kr, { gaData: { ...Np, section: n }, children: /* @__PURE__ */ W.jsxs(
          "video",
          {
            ref: p,
            title: n,
            playsInline: !0,
            controls: s || !0,
            children: [
              /* @__PURE__ */ W.jsx("source", { src: e }),
              /* @__PURE__ */ W.jsx(
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
        r && /* @__PURE__ */ W.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ W.jsx("figcaption", { children: r }) })
      ]
    }
  );
}, Dp = ({ title: e = "", caption: t, url: r = "", className: n }) => /* @__PURE__ */ W.jsxs(
  "div",
  {
    className: ct(`uds-video-container ${n}`, {
      "uds-video-with-caption": t
    }),
    children: [
      /* @__PURE__ */ W.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ W.jsx("iframe", { title: e, src: r }) }),
      t && /* @__PURE__ */ W.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ W.jsx("figcaption", { children: t }) })
    ]
  }
), Qo = (e) => {
  const {
    type: t = "video",
    url: r = "",
    vttUrl: n,
    title: o = "",
    caption: s,
    className: p,
    controls: m = !0
  } = e;
  return t === "youtube" ? Dp({ url: r, title: o, caption: s, className: p }) : Pp({
    url: r,
    vttUrl: n,
    title: o,
    caption: s,
    className: p,
    controls: m
  });
};
Qo.propTypes = {
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
var Ip = !1;
try {
  var cs = Object.defineProperty({}, "passive", {
    get: function() {
      Ip = !0;
    }
  });
  window.addEventListener("testPassive", null, cs), window.removeEventListener("testPassive", null, cs);
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
    buttons: ht.propTypes.buttons,
    linkLabel: l.string,
    linkUrl: l.string,
    tags: ht.propTypes.tags
  })
).isRequired, ht.propTypes.type, ht.propTypes.eventFormat, ht.propTypes.horizontal, l.string, l.string, l.bool;
l.number.isRequired, l.arrayOf(l.object).isRequired, l.string, l.string, l.bool;
const Aa = {
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
l.string, Aa.imageItems, Aa.hasContent;
Aa.imageItems.isRequired, Aa.hasContent, l.string, l.string, l.bool;
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
var us = Ks;
us.createRoot, us.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
var jl = { exports: {} }, no, ds;
function Lp() {
  if (ds) return no;
  ds = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return no = e, no;
}
var ao, ps;
function Mp() {
  if (ps) return ao;
  ps = 1;
  var e = Lp();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ao = function() {
    function n(p, m, b, f, A, E) {
      if (E !== e) {
        var R = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw R.name = "Invariant Violation", R;
      }
    }
    n.isRequired = n;
    function o() {
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
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, ao;
}
jl.exports = Mp()();
var xa = jl.exports;
const C = /* @__PURE__ */ qo(xa);
var Ol = { exports: {} }, Ge = {};
var fs;
function Fp() {
  if (fs) return Ge;
  fs = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), U = Symbol.for("react.client.reference");
  function _(T) {
    if (typeof T == "object" && T !== null) {
      var P = T.$$typeof;
      switch (P) {
        case e:
          switch (T = T.type, T) {
            case r:
            case o:
            case n:
            case b:
            case f:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case p:
                case m:
                case E:
                case A:
                  return T;
                case s:
                  return T;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return Ge.ContextConsumer = s, Ge.ContextProvider = p, Ge.Element = e, Ge.ForwardRef = m, Ge.Fragment = r, Ge.Lazy = E, Ge.Memo = A, Ge.Portal = t, Ge.Profiler = o, Ge.StrictMode = n, Ge.Suspense = b, Ge.SuspenseList = f, Ge.isContextConsumer = function(T) {
    return _(T) === s;
  }, Ge.isContextProvider = function(T) {
    return _(T) === p;
  }, Ge.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === e;
  }, Ge.isForwardRef = function(T) {
    return _(T) === m;
  }, Ge.isFragment = function(T) {
    return _(T) === r;
  }, Ge.isLazy = function(T) {
    return _(T) === E;
  }, Ge.isMemo = function(T) {
    return _(T) === A;
  }, Ge.isPortal = function(T) {
    return _(T) === t;
  }, Ge.isProfiler = function(T) {
    return _(T) === o;
  }, Ge.isStrictMode = function(T) {
    return _(T) === n;
  }, Ge.isSuspense = function(T) {
    return _(T) === b;
  }, Ge.isSuspenseList = function(T) {
    return _(T) === f;
  }, Ge.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === r || T === o || T === n || T === b || T === f || T === R || typeof T == "object" && T !== null && (T.$$typeof === E || T.$$typeof === A || T.$$typeof === p || T.$$typeof === s || T.$$typeof === m || T.$$typeof === U || T.getModuleId !== void 0);
  }, Ge.typeOf = _, Ge;
}
Ol.exports = Fp();
var Nl = Ol.exports;
function $p(e) {
  function t(H, N, B, $, y) {
    for (var te = 0, j = 0, ie = 0, ee = 0, re, X, ce = 0, fe = 0, ae, be = ae = re = 0, ne = 0, me = 0, He = 0, ye = 0, ft = B.length, Qe = ft - 1, we, K = "", ue = "", Ze = "", gt = "", qe; ne < ft; ) {
      if (X = B.charCodeAt(ne), ne === Qe && j + ee + ie + te !== 0 && (j !== 0 && (X = j === 47 ? 10 : 47), ee = ie = te = 0, ft++, Qe++), j + ee + ie + te === 0) {
        if (ne === Qe && (0 < me && (K = K.replace(R, "")), 0 < K.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              K += B.charAt(ne);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (K = K.trim(), re = K.charCodeAt(0), ae = 1, ye = ++ne; ne < ft; ) {
              switch (X = B.charCodeAt(ne)) {
                case 123:
                  ae++;
                  break;
                case 125:
                  ae--;
                  break;
                case 47:
                  switch (X = B.charCodeAt(ne + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (be = ne + 1; be < Qe; ++be)
                          switch (B.charCodeAt(be)) {
                            case 47:
                              if (X === 42 && B.charCodeAt(be - 1) === 42 && ne + 2 !== be) {
                                ne = be + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                ne = be + 1;
                                break e;
                              }
                          }
                        ne = be;
                      }
                  }
                  break;
                case 91:
                  X++;
                case 40:
                  X++;
                case 34:
                case 39:
                  for (; ne++ < Qe && B.charCodeAt(ne) !== X; )
                    ;
              }
              if (ae === 0) break;
              ne++;
            }
            switch (ae = B.substring(ye, ne), re === 0 && (re = (K = K.replace(E, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < me && (K = K.replace(R, "")), X = K.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    me = N;
                    break;
                  default:
                    me = Xe;
                }
                if (ae = t(N, me, ae, X, y + 1), ye = ae.length, 0 < Ce && (me = r(Xe, K, He), qe = m(3, ae, me, N, _e, pe, ye, X, y, $), K = me.join(""), qe !== void 0 && (ye = (ae = qe.trim()).length) === 0 && (X = 0, ae = "")), 0 < ye) switch (X) {
                  case 115:
                    K = K.replace(oe, p);
                  case 100:
                  case 109:
                  case 45:
                    ae = K + "{" + ae + "}";
                    break;
                  case 107:
                    K = K.replace(q, "$1 $2"), ae = K + "{" + ae + "}", ae = ve === 1 || ve === 2 && s("@" + ae, 3) ? "@-webkit-" + ae + "@" + ae : "@" + ae;
                    break;
                  default:
                    ae = K + ae, $ === 112 && (ae = (ue += ae, ""));
                }
                else ae = "";
                break;
              default:
                ae = t(N, r(N, K, He), ae, $, y + 1);
            }
            Ze += ae, ae = He = me = be = re = 0, K = "", X = B.charCodeAt(++ne);
            break;
          case 125:
          case 59:
            if (K = (0 < me ? K.replace(R, "") : K).trim(), 1 < (ye = K.length)) switch (be === 0 && (re = K.charCodeAt(0), re === 45 || 96 < re && 123 > re) && (ye = (K = K.replace(" ", ":")).length), 0 < Ce && (qe = m(1, K, N, H, _e, pe, ue.length, $, y, $)) !== void 0 && (ye = (K = qe.trim()).length) === 0 && (K = "\0\0"), re = K.charCodeAt(0), X = K.charCodeAt(1), re) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  gt += K + B.charAt(ne);
                  break;
                }
              default:
                K.charCodeAt(ye - 1) !== 58 && (ue += o(K, re, X, K.charCodeAt(2)));
            }
            He = me = be = re = 0, K = "", X = B.charCodeAt(++ne);
        }
      }
      switch (X) {
        case 13:
        case 10:
          j === 47 ? j = 0 : 1 + re === 0 && $ !== 107 && 0 < K.length && (me = 1, K += "\0"), 0 < Ce * ze && m(0, K, N, H, _e, pe, ue.length, $, y, $), pe = 1, _e++;
          break;
        case 59:
        case 125:
          if (j + ee + ie + te === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, we = B.charAt(ne), X) {
            case 9:
            case 32:
              if (ee + te + j === 0) switch (ce) {
                case 44:
                case 58:
                case 9:
                case 32:
                  we = "";
                  break;
                default:
                  X !== 32 && (we = " ");
              }
              break;
            case 0:
              we = "\\0";
              break;
            case 12:
              we = "\\f";
              break;
            case 11:
              we = "\\v";
              break;
            case 38:
              ee + j + te === 0 && (me = He = 1, we = "\f" + we);
              break;
            case 108:
              if (ee + j + te + Ae === 0 && 0 < be) switch (ne - be) {
                case 2:
                  ce === 112 && B.charCodeAt(ne - 3) === 58 && (Ae = ce);
                case 8:
                  fe === 111 && (Ae = fe);
              }
              break;
            case 58:
              ee + j + te === 0 && (be = ne);
              break;
            case 44:
              j + ie + ee + te === 0 && (me = 1, we += "\r");
              break;
            case 34:
            case 39:
              j === 0 && (ee = ee === X ? 0 : ee === 0 ? X : ee);
              break;
            case 91:
              ee + j + ie === 0 && te++;
              break;
            case 93:
              ee + j + ie === 0 && te--;
              break;
            case 41:
              ee + j + te === 0 && ie--;
              break;
            case 40:
              if (ee + j + te === 0) {
                if (re === 0) switch (2 * ce + 3 * fe) {
                  case 533:
                    break;
                  default:
                    re = 1;
                }
                ie++;
              }
              break;
            case 64:
              j + ie + ee + te + be + ae === 0 && (ae = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + te + ie)) switch (j) {
                case 0:
                  switch (2 * X + 3 * B.charCodeAt(ne + 1)) {
                    case 235:
                      j = 47;
                      break;
                    case 220:
                      ye = ne, j = 42;
                  }
                  break;
                case 42:
                  X === 47 && ce === 42 && ye + 2 !== ne && (B.charCodeAt(ye + 2) === 33 && (ue += B.substring(ye, ne + 1)), we = "", j = 0);
              }
          }
          j === 0 && (K += we);
      }
      fe = ce, ce = X, ne++;
    }
    if (ye = ue.length, 0 < ye) {
      if (me = N, 0 < Ce && (qe = m(2, ue, me, H, _e, pe, ye, $, y, $), qe !== void 0 && (ue = qe).length === 0)) return gt + ue + Ze;
      if (ue = me.join(",") + "{" + ue + "}", ve * Ae !== 0) {
        switch (ve !== 2 || s(ue, 2) || (Ae = 0), Ae) {
          case 111:
            ue = ue.replace(z, ":-moz-$1") + ue;
            break;
          case 112:
            ue = ue.replace(Y, "::-webkit-input-$1") + ue.replace(Y, "::-moz-$1") + ue.replace(Y, ":-ms-input-$1") + ue;
        }
        Ae = 0;
      }
    }
    return gt + ue + Ze;
  }
  function r(H, N, B) {
    var $ = N.trim().split(P);
    N = $;
    var y = $.length, te = H.length;
    switch (te) {
      case 0:
      case 1:
        var j = 0;
        for (H = te === 0 ? "" : H[0] + " "; j < y; ++j)
          N[j] = n(H, N[j], B).trim();
        break;
      default:
        var ie = j = 0;
        for (N = []; j < y; ++j)
          for (var ee = 0; ee < te; ++ee)
            N[ie++] = n(H[ee] + " ", $[j], B).trim();
    }
    return N;
  }
  function n(H, N, B) {
    var $ = N.charCodeAt(0);
    switch (33 > $ && ($ = (N = N.trim()).charCodeAt(0)), $) {
      case 38:
        return N.replace(F, "$1" + H.trim());
      case 58:
        return H.trim() + N.replace(F, "$1" + H.trim());
      default:
        if (0 < 1 * B && 0 < N.indexOf("\f")) return N.replace(F, (H.charCodeAt(0) === 58 ? "" : "$1") + H.trim());
    }
    return H + N;
  }
  function o(H, N, B, $) {
    var y = H + ";", te = 2 * N + 3 * B + 4 * $;
    if (te === 944) {
      H = y.indexOf(":", 9) + 1;
      var j = y.substring(H, y.length - 1).trim();
      return j = y.substring(0, H).trim() + j + ";", ve === 1 || ve === 2 && s(j, 1) ? "-webkit-" + j + j : j;
    }
    if (ve === 0 || ve === 2 && !s(y, 1)) return y;
    switch (te) {
      case 1015:
        return y.charCodeAt(10) === 97 ? "-webkit-" + y + y : y;
      case 951:
        return y.charCodeAt(3) === 116 ? "-webkit-" + y + y : y;
      case 963:
        return y.charCodeAt(5) === 110 ? "-webkit-" + y + y : y;
      case 1009:
        if (y.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + y + y;
      case 978:
        return "-webkit-" + y + "-moz-" + y + y;
      case 1019:
      case 983:
        return "-webkit-" + y + "-moz-" + y + "-ms-" + y + y;
      case 883:
        if (y.charCodeAt(8) === 45) return "-webkit-" + y + y;
        if (0 < y.indexOf("image-set(", 11)) return y.replace(se, "$1-webkit-$2") + y;
        break;
      case 932:
        if (y.charCodeAt(4) === 45) switch (y.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + y.replace("-grow", "") + "-webkit-" + y + "-ms-" + y.replace("grow", "positive") + y;
          case 115:
            return "-webkit-" + y + "-ms-" + y.replace("shrink", "negative") + y;
          case 98:
            return "-webkit-" + y + "-ms-" + y.replace("basis", "preferred-size") + y;
        }
        return "-webkit-" + y + "-ms-" + y + y;
      case 964:
        return "-webkit-" + y + "-ms-flex-" + y + y;
      case 1023:
        if (y.charCodeAt(8) !== 99) break;
        return j = y.substring(y.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + j + "-webkit-" + y + "-ms-flex-pack" + j + y;
      case 1005:
        return _.test(y) ? y.replace(U, ":-webkit-") + y.replace(U, ":-moz-") + y : y;
      case 1e3:
        switch (j = y.substring(13).trim(), N = j.indexOf("-") + 1, j.charCodeAt(0) + j.charCodeAt(N)) {
          case 226:
            j = y.replace(S, "tb");
            break;
          case 232:
            j = y.replace(S, "tb-rl");
            break;
          case 220:
            j = y.replace(S, "lr");
            break;
          default:
            return y;
        }
        return "-webkit-" + y + "-ms-" + j + y;
      case 1017:
        if (y.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (N = (y = H).length - 10, j = (y.charCodeAt(N) === 33 ? y.substring(0, N) : y).substring(H.indexOf(":", 7) + 1).trim(), te = j.charCodeAt(0) + (j.charCodeAt(7) | 0)) {
          case 203:
            if (111 > j.charCodeAt(8)) break;
          case 115:
            y = y.replace(j, "-webkit-" + j) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(j, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + y.replace(j, "-webkit-" + j) + ";" + y.replace(j, "-ms-" + j + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return j = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + j + "-ms-flex-" + j + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(xe, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(xe, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Le.test(H) === !0) return (j = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(H.replace("stretch", "fill-available"), N, B, $).replace(":fill-available", ":stretch") : y.replace(j, "-webkit-" + j) + y.replace(j, "-moz-" + j.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, B + $ === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(T, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(H, N) {
    var B = H.indexOf(N === 1 ? ":" : "{"), $ = H.substring(0, N !== 3 ? B : 10);
    return B = H.substring(B + 1, H.length - 1), $e(N !== 2 ? $ : $.replace(Ne, "$1"), B, N);
  }
  function p(H, N) {
    var B = o(N, N.charCodeAt(0), N.charCodeAt(1), N.charCodeAt(2));
    return B !== N + ";" ? B.replace(de, " or ($1)").substring(4) : "(" + N + ")";
  }
  function m(H, N, B, $, y, te, j, ie, ee, re) {
    for (var X = 0, ce = N, fe; X < Ce; ++X)
      switch (fe = Re[X].call(A, H, ce, B, $, y, te, j, ie, ee, re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = fe;
      }
    if (ce !== N) return ce;
  }
  function b(H) {
    switch (H) {
      case void 0:
      case null:
        Ce = Re.length = 0;
        break;
      default:
        if (typeof H == "function") Re[Ce++] = H;
        else if (typeof H == "object") for (var N = 0, B = H.length; N < B; ++N)
          b(H[N]);
        else ze = !!H | 0;
    }
    return b;
  }
  function f(H) {
    return H = H.prefix, H !== void 0 && ($e = null, H ? typeof H != "function" ? ve = 1 : (ve = 2, $e = H) : ve = 0), f;
  }
  function A(H, N) {
    var B = H;
    if (33 > B.charCodeAt(0) && (B = B.trim()), le = B, B = [le], 0 < Ce) {
      var $ = m(-1, N, B, B, _e, pe, 0, 0, 0, 0);
      $ !== void 0 && typeof $ == "string" && (N = $);
    }
    var y = t(Xe, B, N, 0, 0);
    return 0 < Ce && ($ = m(-2, y, B, B, _e, pe, y.length, 0, 0, 0), $ !== void 0 && (y = $)), le = "", Ae = 0, pe = _e = 1, y;
  }
  var E = /^\0+/g, R = /[\0\r\f]/g, U = /: */g, _ = /zoo|gra/, T = /([,: ])(transform)/g, P = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, q = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, z = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, oe = /\(\s*(.*)\s*\)/g, de = /([\s\S]*?);/g, xe = /-self|flex-/g, Ne = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Le = /stretch|:\s*\w+\-(?:conte|avail)/, se = /([^-])(image-set\()/, pe = 1, _e = 1, Ae = 0, ve = 1, Xe = [], Re = [], Ce = 0, $e = null, ze = 0, le = "";
  return A.use = b, A.set = f, e !== void 0 && f(e), A;
}
var Up = {
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
function zp(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var qp = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ms = /* @__PURE__ */ zp(
  function(e) {
    return qp.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Pl = { exports: {} }, We = {};
var hs;
function Bp() {
  if (hs) return We;
  hs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, A = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, U = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, q = e ? Symbol.for("react.scope") : 60119;
  function Y(S) {
    if (typeof S == "object" && S !== null) {
      var oe = S.$$typeof;
      switch (oe) {
        case t:
          switch (S = S.type, S) {
            case b:
            case f:
            case n:
            case s:
            case o:
            case E:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case m:
                case A:
                case _:
                case U:
                case p:
                  return S;
                default:
                  return oe;
              }
          }
        case r:
          return oe;
      }
    }
  }
  function z(S) {
    return Y(S) === f;
  }
  return We.AsyncMode = b, We.ConcurrentMode = f, We.ContextConsumer = m, We.ContextProvider = p, We.Element = t, We.ForwardRef = A, We.Fragment = n, We.Lazy = _, We.Memo = U, We.Portal = r, We.Profiler = s, We.StrictMode = o, We.Suspense = E, We.isAsyncMode = function(S) {
    return z(S) || Y(S) === b;
  }, We.isConcurrentMode = z, We.isContextConsumer = function(S) {
    return Y(S) === m;
  }, We.isContextProvider = function(S) {
    return Y(S) === p;
  }, We.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, We.isForwardRef = function(S) {
    return Y(S) === A;
  }, We.isFragment = function(S) {
    return Y(S) === n;
  }, We.isLazy = function(S) {
    return Y(S) === _;
  }, We.isMemo = function(S) {
    return Y(S) === U;
  }, We.isPortal = function(S) {
    return Y(S) === r;
  }, We.isProfiler = function(S) {
    return Y(S) === s;
  }, We.isStrictMode = function(S) {
    return Y(S) === o;
  }, We.isSuspense = function(S) {
    return Y(S) === E;
  }, We.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === f || S === s || S === o || S === E || S === R || typeof S == "object" && S !== null && (S.$$typeof === _ || S.$$typeof === U || S.$$typeof === p || S.$$typeof === m || S.$$typeof === A || S.$$typeof === P || S.$$typeof === F || S.$$typeof === q || S.$$typeof === T);
  }, We.typeOf = Y, We;
}
Pl.exports = Bp();
var Wp = Pl.exports, Zo = Wp, Hp = {
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
}, Vp = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Gp = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Dl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Jo = {};
Jo[Zo.ForwardRef] = Gp;
Jo[Zo.Memo] = Dl;
function gs(e) {
  return Zo.isMemo(e) ? Dl : Jo[e.$$typeof] || Hp;
}
var Yp = Object.defineProperty, Xp = Object.getOwnPropertyNames, bs = Object.getOwnPropertySymbols, Kp = Object.getOwnPropertyDescriptor, Qp = Object.getPrototypeOf, ys = Object.prototype;
function Il(e, t, r) {
  if (typeof t != "string") {
    if (ys) {
      var n = Qp(t);
      n && n !== ys && Il(e, n, r);
    }
    var o = Xp(t);
    bs && (o = o.concat(bs(t)));
    for (var s = gs(e), p = gs(t), m = 0; m < o.length; ++m) {
      var b = o[m];
      if (!Vp[b] && !(r && r[b]) && !(p && p[b]) && !(s && s[b])) {
        var f = Kp(t, b);
        try {
          Yp(e, b, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var Zp = Il;
const Jp = /* @__PURE__ */ qo(Zp);
var vt = { env: { NODE_ENV: "production" } };
function dr() {
  return (dr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var xs = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Eo = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Nl.typeOf(e);
}, Ea = Object.freeze([]), Or = Object.freeze({});
function $n(e) {
  return typeof e == "function";
}
function vs(e) {
  return e.displayName || e.name || "Component";
}
function ei(e) {
  return e && typeof e.styledComponentId == "string";
}
var sn = typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_ATTR || vt.env.SC_ATTR) || "data-styled", ti = typeof window < "u" && "HTMLElement" in window, ef = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && vt.env.REACT_APP_SC_DISABLE_SPEEDY : vt.env.SC_DISABLE_SPEEDY !== void 0 && vt.env.SC_DISABLE_SPEEDY !== "" ? vt.env.SC_DISABLE_SPEEDY !== "false" && vt.env.SC_DISABLE_SPEEDY : vt.env.NODE_ENV !== "production")), tf = {};
function qn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var rf = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++) n += this.groupSizes[o];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, p = s; r >= p; ) (p <<= 1) < 0 && qn(16, "" + r);
      this.groupSizes = new Uint32Array(p), this.groupSizes.set(o), this.length = p;
      for (var m = s; m < p; m++) this.groupSizes[m] = 0;
    }
    for (var b = this.indexOfGroup(r + 1), f = 0, A = n.length; f < A; f++) this.tag.insertRule(b, n[f]) && (this.groupSizes[r]++, b++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), s = o + n;
      this.groupSizes[r] = 0;
      for (var p = o; p < s; p++) this.tag.deleteRule(o);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var o = this.groupSizes[r], s = this.indexOfGroup(r), p = s + o, m = s; m < p; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), va = /* @__PURE__ */ new Map(), _a = /* @__PURE__ */ new Map(), Mn = 1, pa = function(e) {
  if (va.has(e)) return va.get(e);
  for (; _a.has(Mn); ) Mn++;
  var t = Mn++;
  return va.set(e, t), _a.set(t, e), t;
}, nf = function(e) {
  return _a.get(e);
}, af = function(e, t) {
  t >= Mn && (Mn = t + 1), va.set(e, t), _a.set(t, e);
}, of = "style[" + sn + '][data-styled-version="5.3.11"]', sf = new RegExp("^" + sn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), lf = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, p = o.length; s < p; s++) (n = o[s]) && e.registerName(t, n);
}, cf = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = r.length; o < s; o++) {
    var p = r[o].trim();
    if (p) {
      var m = p.match(sf);
      if (m) {
        var b = 0 | parseInt(m[1], 10), f = m[2];
        b !== 0 && (af(f, b), lf(e, f, m[3]), e.getTag().insertRules(b, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, uf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ll = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(m) {
    for (var b = m.childNodes, f = b.length; f >= 0; f--) {
      var A = b[f];
      if (A && A.nodeType === 1 && A.hasAttribute(sn)) return A;
    }
  }(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(sn, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = uf();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, df = function() {
  function e(r) {
    var n = this.element = Ll(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, p = 0, m = s.length; p < m; p++) {
        var b = s[p];
        if (b.ownerNode === o) return b;
      }
      qn(17);
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
}(), pf = function() {
  function e(r) {
    var n = this.element = Ll(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), ff = function() {
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
}(), ws = ti, mf = { isServer: !ti, useCSSOMInjection: !ef }, Ra = function() {
  function e(r, n, o) {
    r === void 0 && (r = Or), n === void 0 && (n = {}), this.options = dr({}, mf, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && ti && ws && (ws = !1, function(s) {
      for (var p = document.querySelectorAll(of), m = 0, b = p.length; m < b; m++) {
        var f = p[m];
        f && f.getAttribute(sn) !== "active" && (cf(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return pa(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(dr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = o ? new ff(p) : s ? new df(p) : new pf(p), new rf(r)));
    var r, n, o, s, p;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (pa(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(pa(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(pa(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, s = "", p = 0; p < o; p++) {
        var m = nf(p);
        if (m !== void 0) {
          var b = r.names.get(m), f = n.getGroup(p);
          if (b && f && b.size) {
            var A = sn + ".g" + p + '[id="' + m + '"]', E = "";
            b !== void 0 && b.forEach(function(R) {
              R.length > 0 && (E += R + ",");
            }), s += "" + f + A + '{content:"' + E + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), hf = /(a)(d)/gi, Ss = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function _o(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Ss(t % 52) + r;
  return (Ss(t % 52) + r).replace(hf, "$1-$2");
}
var tn = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Ml = function(e) {
  return tn(5381, e);
};
function Fl(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if ($n(r) && !ei(r)) return !1;
  }
  return !0;
}
var gf = Ml("5.3.11"), bf = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Fl(t), this.componentId = r, this.baseHash = tn(gf, r), this.baseStyle = n, Ra.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = Yr(this.rules, t, r, n).join(""), m = _o(tn(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(o, m)) {
        var b = n(p, "." + m, void 0, o);
        r.insertRules(o, m, b);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, A = tn(this.baseHash, n.hash), E = "", R = 0; R < f; R++) {
        var U = this.rules[R];
        if (typeof U == "string") E += U;
        else if (U) {
          var _ = Yr(U, t, r, n), T = Array.isArray(_) ? _.join("") : _;
          A = tn(A, T + R), E += T;
        }
      }
      if (E) {
        var P = _o(A >>> 0);
        if (!r.hasNameForId(o, P)) {
          var F = n(E, "." + P, void 0, o);
          r.insertRules(o, P, F);
        }
        s.push(P);
      }
    }
    return s.join(" ");
  }, e;
}(), yf = /^\s*\/\/.*$/gm, xf = [":", "[", ".", "#"];
function vf(e) {
  var t, r, n, o, s = Or, p = s.options, m = p === void 0 ? Or : p, b = s.plugins, f = b === void 0 ? Ea : b, A = new $p(m), E = [], R = /* @__PURE__ */ function(T) {
    function P(F) {
      if (F) try {
        T(F + "}");
      } catch {
      }
    }
    return function(F, q, Y, z, S, oe, de, xe, Ne, Le) {
      switch (F) {
        case 1:
          if (Ne === 0 && q.charCodeAt(0) === 64) return T(q + ";"), "";
          break;
        case 2:
          if (xe === 0) return q + "/*|*/";
          break;
        case 3:
          switch (xe) {
            case 102:
            case 112:
              return T(Y[0] + q), "";
            default:
              return q + (Le === 0 ? "/*|*/" : "");
          }
        case -2:
          q.split("/*|*/}").forEach(P);
      }
    };
  }(function(T) {
    E.push(T);
  }), U = function(T, P, F) {
    return P === 0 && xf.indexOf(F[r.length]) !== -1 || F.match(o) ? T : "." + t;
  };
  function _(T, P, F, q) {
    q === void 0 && (q = "&");
    var Y = T.replace(yf, ""), z = P && F ? F + " " + P + " { " + Y + " }" : Y;
    return t = q, r = P, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), A(F || !P ? "" : P, z);
  }
  return A.use([].concat(f, [function(T, P, F) {
    T === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, U));
  }, R, function(T) {
    if (T === -2) {
      var P = E;
      return E = [], P;
    }
  }])), _.hash = f.length ? f.reduce(function(T, P) {
    return P.name || qn(15), tn(T, P.name);
  }, 5381).toString() : "", _;
}
var $l = mt.createContext();
$l.Consumer;
var Ul = mt.createContext(), wf = (Ul.Consumer, new Ra()), Ro = vf();
function zl() {
  return qt($l) || wf;
}
function ql() {
  return qt(Ul) || Ro;
}
var Sf = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Ro);
      var p = n.name + s.hash;
      o.hasNameForId(n.id, p) || o.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return qn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ro), this.name + t.hash;
  }, e;
}(), kf = /([A-Z])/, Tf = /([A-Z])/g, Cf = /^ms-/, Af = function(e) {
  return "-" + e.toLowerCase();
};
function ks(e) {
  return kf.test(e) ? e.replace(Tf, Af).replace(Cf, "-ms-") : e;
}
var Ts = function(e) {
  return e == null || e === !1 || e === "";
};
function Yr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], p = 0, m = e.length; p < m; p += 1) (o = Yr(e[p], t, r, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (Ts(e)) return "";
  if (ei(e)) return "." + e.styledComponentId;
  if ($n(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return Yr(b, t, r, n);
  }
  var f;
  return e instanceof Sf ? r ? (e.inject(r, n), e.getName(n)) : e : Eo(e) ? function A(E, R) {
    var U, _, T = [];
    for (var P in E) E.hasOwnProperty(P) && !Ts(E[P]) && (Array.isArray(E[P]) && E[P].isCss || $n(E[P]) ? T.push(ks(P) + ":", E[P], ";") : Eo(E[P]) ? T.push.apply(T, A(E[P], P)) : T.push(ks(P) + ": " + (U = P, (_ = E[P]) == null || typeof _ == "boolean" || _ === "" ? "" : typeof _ != "number" || _ === 0 || U in Up || U.startsWith("--") ? String(_).trim() : _ + "px") + ";"));
    return R ? [R + " {"].concat(T, ["}"]) : T;
  }(e) : e.toString();
}
var Cs = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function ri(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return $n(e) || Eo(e) ? Cs(Yr(xs(Ea, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Cs(Yr(xs(e, r)));
}
var Bl = function(e, t, r) {
  return r === void 0 && (r = Or), e.theme !== r.theme && e.theme || t || r.theme;
}, Ef = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, _f = /(^-|-$)/g;
function oo(e) {
  return e.replace(Ef, "-").replace(_f, "");
}
var Wl = function(e) {
  return _o(Ml(e) >>> 0);
};
function fa(e) {
  return typeof e == "string" && vt.env.NODE_ENV === "production";
}
var jo = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Rf = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function jf(e, t, r) {
  var n = e[r];
  jo(t) && jo(n) ? Hl(n, t) : e[r] = t;
}
function Hl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var o = 0, s = r; o < s.length; o++) {
    var p = s[o];
    if (jo(p)) for (var m in p) Rf(m) && jf(e, p[m], m);
  }
  return e;
}
var ni = mt.createContext();
ni.Consumer;
var io = {};
function Vl(e, t, r) {
  var n = ei(e), o = !fa(e), s = t.attrs, p = s === void 0 ? Ea : s, m = t.componentId, b = m === void 0 ? function(q, Y) {
    var z = typeof q != "string" ? "sc" : oo(q);
    io[z] = (io[z] || 0) + 1;
    var S = z + "-" + Wl("5.3.11" + z + io[z]);
    return Y ? Y + "-" + S : S;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, A = f === void 0 ? function(q) {
    return fa(q) ? "styled." + q : "Styled(" + vs(q) + ")";
  }(e) : f, E = t.displayName && t.componentId ? oo(t.displayName) + "-" + t.componentId : t.componentId || b, R = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, U = t.shouldForwardProp;
  n && e.shouldForwardProp && (U = t.shouldForwardProp ? function(q, Y, z) {
    return e.shouldForwardProp(q, Y, z) && t.shouldForwardProp(q, Y, z);
  } : e.shouldForwardProp);
  var _, T = new bf(r, E, n ? e.componentStyle : void 0), P = T.isStatic && p.length === 0, F = function(q, Y) {
    return function(z, S, oe, de) {
      var xe = z.attrs, Ne = z.componentStyle, Le = z.defaultProps, se = z.foldedComponentIds, pe = z.shouldForwardProp, _e = z.styledComponentId, Ae = z.target, ve = function($, y, te) {
        $ === void 0 && ($ = Or);
        var j = dr({}, y, { theme: $ }), ie = {};
        return te.forEach(function(ee) {
          var re, X, ce, fe = ee;
          for (re in $n(fe) && (fe = fe(j)), fe) j[re] = ie[re] = re === "className" ? (X = ie[re], ce = fe[re], X && ce ? X + " " + ce : X || ce) : fe[re];
        }), [j, ie];
      }(Bl(S, qt(ni), Le) || Or, S, xe), Xe = ve[0], Re = ve[1], Ce = function($, y, te, j) {
        var ie = zl(), ee = ql(), re = y ? $.generateAndInjectStyles(Or, ie, ee) : $.generateAndInjectStyles(te, ie, ee);
        return re;
      }(Ne, de, Xe), $e = oe, ze = Re.$as || S.$as || Re.as || S.as || Ae, le = fa(ze), H = Re !== S ? dr({}, S, {}, Re) : S, N = {};
      for (var B in H) B[0] !== "$" && B !== "as" && (B === "forwardedAs" ? N.as = H[B] : (pe ? pe(B, ms, ze) : !le || ms(B)) && (N[B] = H[B]));
      return S.style && Re.style !== S.style && (N.style = dr({}, S.style, {}, Re.style)), N.className = Array.prototype.concat(se, _e, Ce !== _e ? Ce : null, S.className, Re.className).filter(Boolean).join(" "), N.ref = $e, Gs(ze, N);
    }(_, q, Y, P);
  };
  return F.displayName = A, (_ = mt.forwardRef(F)).attrs = R, _.componentStyle = T, _.displayName = A, _.shouldForwardProp = U, _.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ea, _.styledComponentId = E, _.target = n ? e.target : e, _.withComponent = function(q) {
    var Y = t.componentId, z = function(oe, de) {
      if (oe == null) return {};
      var xe, Ne, Le = {}, se = Object.keys(oe);
      for (Ne = 0; Ne < se.length; Ne++) xe = se[Ne], de.indexOf(xe) >= 0 || (Le[xe] = oe[xe]);
      return Le;
    }(t, ["componentId"]), S = Y && Y + "-" + (fa(q) ? q : oo(vs(q)));
    return Vl(q, dr({}, z, { attrs: R, componentId: S }), r);
  }, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(q) {
    this._foldedDefaultProps = n ? Hl({}, e.defaultProps, q) : q;
  } }), Object.defineProperty(_, "toString", { value: function() {
    return "." + _.styledComponentId;
  } }), o && Jp(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), _;
}
var Ye = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = Or), !Nl.isValidElementType(n)) return qn(1, String(n));
    var s = function() {
      return r(n, o, ri.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, dr({}, o, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, dr({}, o, { attrs: Array.prototype.concat(o.attrs, p).filter(Boolean) }));
    }, s;
  }(Vl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ye[e] = Ye(e);
});
var Of = function() {
  function e(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = Fl(r), Ra.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function(r, n, o, s) {
    var p = s(Yr(this.rules, n, o, s).join(""), ""), m = this.componentId + r;
    o.insertRules(m, m, p);
  }, t.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, t.renderStyles = function(r, n, o, s) {
    r > 2 && Ra.registerId(this.componentId + r), this.removeStyles(r, o), this.createStyles(r, n, o, s);
  }, e;
}();
function Pa(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  var o = ri.apply(void 0, [e].concat(r)), s = "sc-global-" + Wl(JSON.stringify(o)), p = new Of(o, s);
  function m(f) {
    var A = zl(), E = ql(), R = qt(ni), U = nn(A.allocateGSInstance(s)).current;
    return A.server && b(U, f, A, R, E), bu(function() {
      if (!A.server) return b(U, f, A, R, E), function() {
        return p.removeStyles(U, A);
      };
    }, [U, f, A, R, E]), null;
  }
  function b(f, A, E, R, U) {
    if (p.isStatic) p.renderStyles(f, tf, E, U);
    else {
      var _ = dr({}, A, { theme: Bl(A, R, m.defaultProps) });
      p.renderStyles(f, _, E, U);
    }
  }
  return mt.memo(m);
}
const Gl = () => {
  const [e, t] = ut(), [r, n] = ut(!1), [o, s] = ut(!1), [p, m] = ut("");
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
  }, [p]), [{ data: e, loading: r, error: o }, m];
}, ln = (e) => (e || []).join(" ");
const {
  entries: Yl,
  setPrototypeOf: As,
  isFrozen: Nf,
  getPrototypeOf: Pf,
  getOwnPropertyDescriptor: Df
} = Object;
let {
  freeze: Rt,
  seal: Ut,
  create: Xl
} = Object, {
  apply: Oo,
  construct: No
} = typeof Reflect < "u" && Reflect;
Rt || (Rt = function(t) {
  return t;
});
Ut || (Ut = function(t) {
  return t;
});
Oo || (Oo = function(t, r, n) {
  return t.apply(r, n);
});
No || (No = function(t, r) {
  return new t(...r);
});
const ma = jt(Array.prototype.forEach), If = jt(Array.prototype.lastIndexOf), Es = jt(Array.prototype.pop), _n = jt(Array.prototype.push), Lf = jt(Array.prototype.splice), wa = jt(String.prototype.toLowerCase), so = jt(String.prototype.toString), _s = jt(String.prototype.match), Rn = jt(String.prototype.replace), Mf = jt(String.prototype.indexOf), Ff = jt(String.prototype.trim), rr = jt(Object.prototype.hasOwnProperty), Ct = jt(RegExp.prototype.test), jn = $f(TypeError);
function jt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    return Oo(e, t, n);
  };
}
function $f(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return No(e, r);
  };
}
function Fe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wa;
  As && As(e, null);
  let n = t.length;
  for (; n--; ) {
    let o = t[n];
    if (typeof o == "string") {
      const s = r(o);
      s !== o && (Nf(t) || (t[n] = s), o = s);
    }
    e[o] = !0;
  }
  return e;
}
function Uf(e) {
  for (let t = 0; t < e.length; t++)
    rr(e, t) || (e[t] = null);
  return e;
}
function zr(e) {
  const t = Xl(null);
  for (const [r, n] of Yl(e))
    rr(e, r) && (Array.isArray(n) ? t[r] = Uf(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = zr(n) : t[r] = n);
  return t;
}
function On(e, t) {
  for (; e !== null; ) {
    const n = Df(e, t);
    if (n) {
      if (n.get)
        return jt(n.get);
      if (typeof n.value == "function")
        return jt(n.value);
    }
    e = Pf(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Rs = Rt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), lo = Rt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), co = Rt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), zf = Rt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), uo = Rt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), qf = Rt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), js = Rt(["#text"]), Os = Rt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), po = Rt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ns = Rt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ha = Rt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Bf = Ut(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Wf = Ut(/<%[\w\W]*|[\w\W]*%>/gm), Hf = Ut(/\$\{[\w\W]*/gm), Vf = Ut(/^data-[\-\w.\u00B7-\uFFFF]+$/), Gf = Ut(/^aria-[\-\w]+$/), Kl = Ut(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Yf = Ut(/^(?:\w+script|data):/i), Xf = Ut(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ql = Ut(/^html$/i), Kf = Ut(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ps = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Gf,
  ATTR_WHITESPACE: Xf,
  CUSTOM_ELEMENT: Kf,
  DATA_ATTR: Vf,
  DOCTYPE_NAME: Ql,
  ERB_EXPR: Wf,
  IS_ALLOWED_URI: Kl,
  IS_SCRIPT_OR_DATA: Yf,
  MUSTACHE_EXPR: Bf,
  TMPLIT_EXPR: Hf
});
const Nn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Qf = function() {
  return typeof window > "u" ? null : window;
}, Zf = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const o = "data-tt-policy-suffix";
  r && r.hasAttribute(o) && (n = r.getAttribute(o));
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
}, Ds = function() {
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
function Zl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Qf();
  const t = (x) => Zl(x);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== Nn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, o = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: p,
    Node: m,
    Element: b,
    NodeFilter: f,
    NamedNodeMap: A = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: R,
    trustedTypes: U
  } = e, _ = b.prototype, T = On(_, "cloneNode"), P = On(_, "remove"), F = On(_, "nextSibling"), q = On(_, "childNodes"), Y = On(_, "parentNode");
  if (typeof p == "function") {
    const x = r.createElement("template");
    x.content && x.content.ownerDocument && (r = x.content.ownerDocument);
  }
  let z, S = "";
  const {
    implementation: oe,
    createNodeIterator: de,
    createDocumentFragment: xe,
    getElementsByTagName: Ne
  } = r, {
    importNode: Le
  } = n;
  let se = Ds();
  t.isSupported = typeof Yl == "function" && typeof Y == "function" && oe && oe.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: _e,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: ve,
    ARIA_ATTR: Xe,
    IS_SCRIPT_OR_DATA: Re,
    ATTR_WHITESPACE: Ce,
    CUSTOM_ELEMENT: $e
  } = Ps;
  let {
    IS_ALLOWED_URI: ze
  } = Ps, le = null;
  const H = Fe({}, [...Rs, ...lo, ...co, ...uo, ...js]);
  let N = null;
  const B = Fe({}, [...Os, ...po, ...Ns, ...ha]);
  let $ = Object.seal(Xl(null, {
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
  })), y = null, te = null, j = !0, ie = !0, ee = !1, re = !0, X = !1, ce = !0, fe = !1, ae = !1, be = !1, ne = !1, me = !1, He = !1, ye = !0, ft = !1;
  const Qe = "user-content-";
  let we = !0, K = !1, ue = {}, Ze = null;
  const gt = Fe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qe = null;
  const ar = Fe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Mt = null;
  const pr = Fe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", yt = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml";
  let bt = it, Bt = !1, Wt = null;
  const Pr = Fe({}, [wt, yt, it], so);
  let lt = Fe({}, ["mi", "mo", "mn", "ms", "mtext"]), St = Fe({}, ["annotation-xml"]);
  const or = Fe({}, ["title", "style", "font", "a", "script"]);
  let De = null;
  const Ht = ["application/xhtml+xml", "text/html"], ir = "text/html";
  let Te = null, nt = null;
  const sr = r.createElement("form"), kt = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Ft = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(nt && nt === w)) {
      if ((!w || typeof w != "object") && (w = {}), w = zr(w), De = // eslint-disable-next-line unicorn/prefer-includes
      Ht.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? ir : w.PARSER_MEDIA_TYPE, Te = De === "application/xhtml+xml" ? so : wa, le = rr(w, "ALLOWED_TAGS") ? Fe({}, w.ALLOWED_TAGS, Te) : H, N = rr(w, "ALLOWED_ATTR") ? Fe({}, w.ALLOWED_ATTR, Te) : B, Wt = rr(w, "ALLOWED_NAMESPACES") ? Fe({}, w.ALLOWED_NAMESPACES, so) : Pr, Mt = rr(w, "ADD_URI_SAFE_ATTR") ? Fe(zr(pr), w.ADD_URI_SAFE_ATTR, Te) : pr, qe = rr(w, "ADD_DATA_URI_TAGS") ? Fe(zr(ar), w.ADD_DATA_URI_TAGS, Te) : ar, Ze = rr(w, "FORBID_CONTENTS") ? Fe({}, w.FORBID_CONTENTS, Te) : gt, y = rr(w, "FORBID_TAGS") ? Fe({}, w.FORBID_TAGS, Te) : {}, te = rr(w, "FORBID_ATTR") ? Fe({}, w.FORBID_ATTR, Te) : {}, ue = rr(w, "USE_PROFILES") ? w.USE_PROFILES : !1, j = w.ALLOW_ARIA_ATTR !== !1, ie = w.ALLOW_DATA_ATTR !== !1, ee = w.ALLOW_UNKNOWN_PROTOCOLS || !1, re = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, X = w.SAFE_FOR_TEMPLATES || !1, ce = w.SAFE_FOR_XML !== !1, fe = w.WHOLE_DOCUMENT || !1, ne = w.RETURN_DOM || !1, me = w.RETURN_DOM_FRAGMENT || !1, He = w.RETURN_TRUSTED_TYPE || !1, be = w.FORCE_BODY || !1, ye = w.SANITIZE_DOM !== !1, ft = w.SANITIZE_NAMED_PROPS || !1, we = w.KEEP_CONTENT !== !1, K = w.IN_PLACE || !1, ze = w.ALLOWED_URI_REGEXP || Kl, bt = w.NAMESPACE || it, lt = w.MATHML_TEXT_INTEGRATION_POINTS || lt, St = w.HTML_INTEGRATION_POINTS || St, $ = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && kt(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && ($.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && kt(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && ($.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && ($.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), X && (ie = !1), me && (ne = !0), ue && (le = Fe({}, js), N = [], ue.html === !0 && (Fe(le, Rs), Fe(N, Os)), ue.svg === !0 && (Fe(le, lo), Fe(N, po), Fe(N, ha)), ue.svgFilters === !0 && (Fe(le, co), Fe(N, po), Fe(N, ha)), ue.mathMl === !0 && (Fe(le, uo), Fe(N, Ns), Fe(N, ha))), w.ADD_TAGS && (le === H && (le = zr(le)), Fe(le, w.ADD_TAGS, Te)), w.ADD_ATTR && (N === B && (N = zr(N)), Fe(N, w.ADD_ATTR, Te)), w.ADD_URI_SAFE_ATTR && Fe(Mt, w.ADD_URI_SAFE_ATTR, Te), w.FORBID_CONTENTS && (Ze === gt && (Ze = zr(Ze)), Fe(Ze, w.FORBID_CONTENTS, Te)), we && (le["#text"] = !0), fe && Fe(le, ["html", "head", "body"]), le.table && (Fe(le, ["tbody"]), delete y.tbody), w.TRUSTED_TYPES_POLICY) {
        if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw jn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw jn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        z = w.TRUSTED_TYPES_POLICY, S = z.createHTML("");
      } else
        z === void 0 && (z = Zf(U, o)), z !== null && typeof S == "string" && (S = z.createHTML(""));
      Rt && Rt(w), nt = w;
    }
  }, Vt = Fe({}, [...lo, ...co, ...zf]), Gt = Fe({}, [...uo, ...qf]), Ar = function(w) {
    let O = Y(w);
    (!O || !O.tagName) && (O = {
      namespaceURI: bt,
      tagName: "template"
    });
    const Q = wa(w.tagName), Se = wa(O.tagName);
    return Wt[w.namespaceURI] ? w.namespaceURI === yt ? O.namespaceURI === it ? Q === "svg" : O.namespaceURI === wt ? Q === "svg" && (Se === "annotation-xml" || lt[Se]) : !!Vt[Q] : w.namespaceURI === wt ? O.namespaceURI === it ? Q === "math" : O.namespaceURI === yt ? Q === "math" && St[Se] : !!Gt[Q] : w.namespaceURI === it ? O.namespaceURI === yt && !St[Se] || O.namespaceURI === wt && !lt[Se] ? !1 : !Gt[Q] && (or[Q] || !Vt[Q]) : !!(De === "application/xhtml+xml" && Wt[w.namespaceURI]) : !1;
  }, st = function(w) {
    _n(t.removed, {
      element: w
    });
    try {
      Y(w).removeChild(w);
    } catch {
      P(w);
    }
  }, Ot = function(w, O) {
    try {
      _n(t.removed, {
        attribute: O.getAttributeNode(w),
        from: O
      });
    } catch {
      _n(t.removed, {
        attribute: null,
        from: O
      });
    }
    if (O.removeAttribute(w), w === "is")
      if (ne || me)
        try {
          st(O);
        } catch {
        }
      else
        try {
          O.setAttribute(w, "");
        } catch {
        }
  }, fr = function(w) {
    let O = null, Q = null;
    if (be)
      w = "<remove></remove>" + w;
    else {
      const Ue = _s(w, /^[\r\n\t ]+/);
      Q = Ue && Ue[0];
    }
    De === "application/xhtml+xml" && bt === it && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const Se = z ? z.createHTML(w) : w;
    if (bt === it)
      try {
        O = new R().parseFromString(Se, De);
      } catch {
      }
    if (!O || !O.documentElement) {
      O = oe.createDocument(bt, "template", null);
      try {
        O.documentElement.innerHTML = Bt ? S : Se;
      } catch {
      }
    }
    const je = O.body || O.documentElement;
    return w && Q && je.insertBefore(r.createTextNode(Q), je.childNodes[0] || null), bt === it ? Ne.call(O, fe ? "html" : "body")[0] : fe ? O.documentElement : je;
  }, mr = function(w) {
    return de.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Nt = function(w) {
    return w instanceof E && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof A) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, lr = function(w) {
    return typeof m == "function" && w instanceof m;
  };
  function Je(x, w, O) {
    ma(x, (Q) => {
      Q.call(t, w, O, nt);
    });
  }
  const Yt = function(w) {
    let O = null;
    if (Je(se.beforeSanitizeElements, w, null), Nt(w))
      return st(w), !0;
    const Q = Te(w.nodeName);
    if (Je(se.uponSanitizeElement, w, {
      tagName: Q,
      allowedTags: le
    }), w.hasChildNodes() && !lr(w.firstElementChild) && Ct(/<[/\w]/g, w.innerHTML) && Ct(/<[/\w]/g, w.textContent) || w.nodeType === Nn.progressingInstruction || ce && w.nodeType === Nn.comment && Ct(/<[/\w]/g, w.data))
      return st(w), !0;
    if (!le[Q] || y[Q]) {
      if (!y[Q] && Pt(Q) && ($.tagNameCheck instanceof RegExp && Ct($.tagNameCheck, Q) || $.tagNameCheck instanceof Function && $.tagNameCheck(Q)))
        return !1;
      if (we && !Ze[Q]) {
        const Se = Y(w) || w.parentNode, je = q(w) || w.childNodes;
        if (je && Se) {
          const Ue = je.length;
          for (let Ee = Ue - 1; Ee >= 0; --Ee) {
            const et = T(je[Ee], !0);
            et.__removalCount = (w.__removalCount || 0) + 1, Se.insertBefore(et, F(w));
          }
        }
      }
      return st(w), !0;
    }
    return w instanceof b && !Ar(w) || (Q === "noscript" || Q === "noembed" || Q === "noframes") && Ct(/<\/no(script|embed|frames)/i, w.innerHTML) ? (st(w), !0) : (X && w.nodeType === Nn.text && (O = w.textContent, ma([pe, _e, Ae], (Se) => {
      O = Rn(O, Se, " ");
    }), w.textContent !== O && (_n(t.removed, {
      element: w.cloneNode()
    }), w.textContent = O)), Je(se.afterSanitizeElements, w, null), !1);
  }, hr = function(w, O, Q) {
    if (ye && (O === "id" || O === "name") && (Q in r || Q in sr))
      return !1;
    if (!(ie && !te[O] && Ct(ve, O))) {
      if (!(j && Ct(Xe, O))) {
        if (!N[O] || te[O]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Pt(w) && ($.tagNameCheck instanceof RegExp && Ct($.tagNameCheck, w) || $.tagNameCheck instanceof Function && $.tagNameCheck(w)) && ($.attributeNameCheck instanceof RegExp && Ct($.attributeNameCheck, O) || $.attributeNameCheck instanceof Function && $.attributeNameCheck(O)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            O === "is" && $.allowCustomizedBuiltInElements && ($.tagNameCheck instanceof RegExp && Ct($.tagNameCheck, Q) || $.tagNameCheck instanceof Function && $.tagNameCheck(Q)))
          ) return !1;
        } else if (!Mt[O]) {
          if (!Ct(ze, Rn(Q, Ce, ""))) {
            if (!((O === "src" || O === "xlink:href" || O === "href") && w !== "script" && Mf(Q, "data:") === 0 && qe[w])) {
              if (!(ee && !Ct(Re, Rn(Q, Ce, "")))) {
                if (Q)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Pt = function(w) {
    return w !== "annotation-xml" && _s(w, $e);
  }, gr = function(w) {
    Je(se.beforeSanitizeAttributes, w, null);
    const {
      attributes: O
    } = w;
    if (!O || Nt(w))
      return;
    const Q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let Se = O.length;
    for (; Se--; ) {
      const je = O[Se], {
        name: Ue,
        namespaceURI: Ee,
        value: et
      } = je, Ke = Te(Ue);
      let at = Ue === "value" ? et : Ff(et);
      if (Q.attrName = Ke, Q.attrValue = at, Q.keepAttr = !0, Q.forceKeepAttr = void 0, Je(se.uponSanitizeAttribute, w, Q), at = Q.attrValue, ft && (Ke === "id" || Ke === "name") && (Ot(Ue, w), at = Qe + at), ce && Ct(/((--!?|])>)|<\/(style|title)/i, at)) {
        Ot(Ue, w);
        continue;
      }
      if (Q.forceKeepAttr || (Ot(Ue, w), !Q.keepAttr))
        continue;
      if (!re && Ct(/\/>/i, at)) {
        Ot(Ue, w);
        continue;
      }
      X && ma([pe, _e, Ae], (Xt) => {
        at = Rn(at, Xt, " ");
      });
      const yr = Te(w.nodeName);
      if (hr(yr, Ke, at)) {
        if (z && typeof U == "object" && typeof U.getAttributeType == "function" && !Ee)
          switch (U.getAttributeType(yr, Ke)) {
            case "TrustedHTML": {
              at = z.createHTML(at);
              break;
            }
            case "TrustedScriptURL": {
              at = z.createScriptURL(at);
              break;
            }
          }
        try {
          Ee ? w.setAttributeNS(Ee, Ue, at) : w.setAttribute(Ue, at), Nt(w) ? st(w) : Es(t.removed);
        } catch {
        }
      }
    }
    Je(se.afterSanitizeAttributes, w, null);
  }, br = function x(w) {
    let O = null;
    const Q = mr(w);
    for (Je(se.beforeSanitizeShadowDOM, w, null); O = Q.nextNode(); )
      Je(se.uponSanitizeShadowNode, O, null), Yt(O), gr(O), O.content instanceof s && x(O.content);
    Je(se.afterSanitizeShadowDOM, w, null);
  };
  return t.sanitize = function(x) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, O = null, Q = null, Se = null, je = null;
    if (Bt = !x, Bt && (x = "<!-->"), typeof x != "string" && !lr(x))
      if (typeof x.toString == "function") {
        if (x = x.toString(), typeof x != "string")
          throw jn("dirty is not a string, aborting");
      } else
        throw jn("toString is not a function");
    if (!t.isSupported)
      return x;
    if (ae || Ft(w), t.removed = [], typeof x == "string" && (K = !1), K) {
      if (x.nodeName) {
        const et = Te(x.nodeName);
        if (!le[et] || y[et])
          throw jn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (x instanceof m)
      O = fr("<!---->"), Q = O.ownerDocument.importNode(x, !0), Q.nodeType === Nn.element && Q.nodeName === "BODY" || Q.nodeName === "HTML" ? O = Q : O.appendChild(Q);
    else {
      if (!ne && !X && !fe && // eslint-disable-next-line unicorn/prefer-includes
      x.indexOf("<") === -1)
        return z && He ? z.createHTML(x) : x;
      if (O = fr(x), !O)
        return ne ? null : He ? S : "";
    }
    O && be && st(O.firstChild);
    const Ue = mr(K ? x : O);
    for (; Se = Ue.nextNode(); )
      Yt(Se), gr(Se), Se.content instanceof s && br(Se.content);
    if (K)
      return x;
    if (ne) {
      if (me)
        for (je = xe.call(O.ownerDocument); O.firstChild; )
          je.appendChild(O.firstChild);
      else
        je = O;
      return (N.shadowroot || N.shadowrootmode) && (je = Le.call(n, je, !0)), je;
    }
    let Ee = fe ? O.outerHTML : O.innerHTML;
    return fe && le["!doctype"] && O.ownerDocument && O.ownerDocument.doctype && O.ownerDocument.doctype.name && Ct(Ql, O.ownerDocument.doctype.name) && (Ee = "<!DOCTYPE " + O.ownerDocument.doctype.name + `>
` + Ee), X && ma([pe, _e, Ae], (et) => {
      Ee = Rn(Ee, et, " ");
    }), z && He ? z.createHTML(Ee) : Ee;
  }, t.setConfig = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ft(x), ae = !0;
  }, t.clearConfig = function() {
    nt = null, ae = !1;
  }, t.isValidAttribute = function(x, w, O) {
    nt || Ft({});
    const Q = Te(x), Se = Te(w);
    return hr(Q, Se, O);
  }, t.addHook = function(x, w) {
    typeof w == "function" && _n(se[x], w);
  }, t.removeHook = function(x, w) {
    if (w !== void 0) {
      const O = If(se[x], w);
      return O === -1 ? void 0 : Lf(se[x], O, 1)[0];
    }
    return Es(se[x]);
  }, t.removeHooks = function(x) {
    se[x] = [];
  }, t.removeAllHooks = function() {
    se = Ds();
  }, t;
}
var Jf = Zl();
const zt = (e) => ({ __html: Jf.sanitize(e) });
function* Qr(e = "id-", t = 0) {
  let r = t;
  for (; ; )
    r += 1, yield e + r;
}
function em() {
  const e = (
    // @ts-ignore
    (document.currentScript && document.currentScript.src || "").match(/(.*\/)/)
  );
  return e && e.length > 0 ? e[0].substr(0, e[0].length - 1) : "/";
}
C.shape({
  event: C.string,
  action: C.string,
  name: C.string,
  region: C.string,
  section: C.string,
  component: C.string,
  type: C.string,
  text: C.string
});
function Jl({
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
const Bn = ({ href: e = null }) => (
  // @ts-ignore
  /* @__PURE__ */ d.jsx(Tr, { label: "Apply now", ariaLabel: "Apply now", href: e, color: "gold" })
);
Bn.propTypes = {
  href: C.string
};
C.string;
function ai({ message: e, type: t }) {
  const [r, n] = ut(""), s = {
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
ai.propTypes = {
  type: C.oneOf(["error", "info"]).isRequired,
  message: C.string.isRequired
};
function ec({ message: e }) {
  return /* @__PURE__ */ d.jsx(ai, { message: e, type: "error" });
}
function tm({ message: e }) {
  return /* @__PURE__ */ d.jsx(ai, { message: e, type: "info" });
}
const rm = Ye.div`
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
function tc() {
  return /* @__PURE__ */ d.jsxs(rm, { "data-testid": "loader", className: "container ball-loader mt-4", children: [
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball1" }),
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball2" }),
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball3" })
  ] });
}
C.shape({
  color: C.oneOf(["gold", "maroon", "gray", "dark"]),
  content: C.shape({
    icon: C.string,
    header: C.string,
    body: C.string
  })
});
const rc = C.shape({
  ariaLabel: C.string,
  color: C.oneOf(["gold", "maroon", "gray", "dark"]),
  icon: C.string,
  href: C.string,
  label: C.string,
  onClick: C.func,
  size: C.oneOf(["default", "small", "xsmall"])
}), oi = {
  url: C.string,
  altText: C.string,
  cssClass: C.arrayOf(C.string)
}, nc = {
  text: C.string,
  cssClass: C.arrayOf(C.string)
}, ii = {
  type: C.oneOf(["video", "youtube"]),
  url: C.string,
  altText: C.string,
  vttUrl: C.string,
  title: C.string
}, nm = {
  url: C.string,
  text: C.string,
  isActive: C.bool
}, Sr = C.shape({
  ...oi
}), ja = C.shape({
  ...nc
}), am = C.shape({
  ...ii
}), Gr = C.shape({
  ...nm
}), ac = C.shape({
  id: C.string,
  sourceType: C.oneOf(["api", "shared-data-source", "static-json"]),
  // default `api`
  sharedDataSourceId: C.string,
  // only if `dataSourceType == "shared-data-source"``
  // eslint-disable-next-line react/forbid-prop-types
  data: C.arrayOf(C.object),
  // only if `dataSourceType == "static-json"``
  apiUrl: C.string
  // only if `dataSourceType == "api"``
}), Po = C.shape({
  text: C.string,
  url: C.string
}), qr = C.shape({
  icon: C.arrayOf(C.string),
  title: C.string,
  content: C.string,
  buttonLink: rc
}), Do = C.arrayOf(
  C.shape({
    title: C.string,
    url: C.string
  })
), oc = C.shape({
  career: Gr,
  growth: C.oneOfType([C.number, C.string]),
  medianSalary: C.string,
  brightOutlook: C.bool,
  greenOccupation: C.bool
}), om = {
  hideCollegeSchool: C.bool,
  defaultView: C.oneOf(["list-view", "grid-view"]),
  cardDefaultImage: Sr
}, im = C.shape({
  ...om
}), si = {
  atAGlance: C.bool,
  applicationRequirements: C.bool,
  changeMajorRequirements: C.bool,
  nextSteps: C.bool,
  affordingCollege: C.bool,
  flexibleDegreeOptions: C.bool,
  careerOutlook: C.bool,
  exampleCareers: C.bool,
  customizeYourCollegeExperience: C.bool,
  globalOpportunity: C.bool,
  attendOnline: C.bool,
  whyChooseAsu: C.bool,
  programContactInfo: C.bool,
  externalAnchors: C.arrayOf(
    C.shape({
      targetIdName: C.string,
      text: C.string
    })
  )
}, Jr = C.shape({
  image: Sr,
  title: C.string,
  text: C.string,
  button: rc
}), Is = C.shape({
  faculty: Jr,
  programs: Jr,
  research: Jr,
  inclusion: Jr,
  mentors: Jr,
  honors: Jr
}), ic = {
  hide: C.bool,
  sectionIntroText: C.string,
  cards: Is,
  defaultCards: Is
};
C.shape({
  ...si
});
const fo = C.shape({
  id: C.oneOfType([C.string, C.number]),
  value: C.string
}), sc = C.shape({
  locations: C.arrayOf(fo),
  asuLocals: C.arrayOf(fo),
  acceleratedConcurrent: fo
});
var pt = {}, cr, ur;
function Io() {
  throw new Error("setTimeout has not been defined");
}
function Lo() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? cr = setTimeout : cr = Io;
  } catch {
    cr = Io;
  }
  try {
    typeof clearTimeout == "function" ? ur = clearTimeout : ur = Lo;
  } catch {
    ur = Lo;
  }
})();
function lc(e) {
  if (cr === setTimeout)
    return setTimeout(e, 0);
  if ((cr === Io || !cr) && setTimeout)
    return cr = setTimeout, setTimeout(e, 0);
  try {
    return cr(e, 0);
  } catch {
    try {
      return cr.call(null, e, 0);
    } catch {
      return cr.call(this, e, 0);
    }
  }
}
function sm(e) {
  if (ur === clearTimeout)
    return clearTimeout(e);
  if ((ur === Lo || !ur) && clearTimeout)
    return ur = clearTimeout, clearTimeout(e);
  try {
    return ur(e);
  } catch {
    try {
      return ur.call(null, e);
    } catch {
      return ur.call(this, e);
    }
  }
}
var kr = [], rn = !1, Vr, Sa = -1;
function lm() {
  !rn || !Vr || (rn = !1, Vr.length ? kr = Vr.concat(kr) : Sa = -1, kr.length && cc());
}
function cc() {
  if (!rn) {
    var e = lc(lm);
    rn = !0;
    for (var t = kr.length; t; ) {
      for (Vr = kr, kr = []; ++Sa < t; )
        Vr && Vr[Sa].run();
      Sa = -1, t = kr.length;
    }
    Vr = null, rn = !1, sm(e);
  }
}
pt.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  kr.push(new uc(e, t)), kr.length === 1 && !rn && lc(cc);
};
function uc(e, t) {
  this.fun = e, this.array = t;
}
uc.prototype.run = function() {
  this.fun.apply(null, this.array);
};
pt.title = "browser";
pt.browser = !0;
pt.env = {};
pt.argv = [];
pt.version = "";
pt.versions = {};
function Cr() {
}
pt.on = Cr;
pt.addListener = Cr;
pt.once = Cr;
pt.off = Cr;
pt.removeListener = Cr;
pt.removeAllListeners = Cr;
pt.emit = Cr;
pt.prependListener = Cr;
pt.prependOnceListener = Cr;
pt.listeners = function(e) {
  return [];
};
pt.binding = function(e) {
  throw new Error("process.binding is not supported");
};
pt.cwd = function() {
  return "/";
};
pt.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
pt.umask = function() {
  return 0;
};
const cm = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, dc = Object.values(cm), Ls = {
  offeredBy: { icon: "university", title: "Offered by" },
  locations: { icon: "map-marker-alt", title: "Location" },
  firstRequirementMathCourse: {
    icon: "pencil-alt",
    title: "First Required math Course"
  },
  mathIntensity: { icon: "calculator", title: "Math intensity" },
  timeCommitment: { icon: "calendar-alt", title: "Time commitment" },
  stemOptText: { icon: "star", title: "STEM-OPT extension eligible" }
}, pc = "grid-view", Mo = "list-view", fc = "degree-list-programs", mc = "Sorry, Something went wrong.", um = "STEM-OPT for international students on F-1 visas", dm = `This degree is not found.
  This may be a temporary issue. Please try again in 5 minutes.
  If the issue persists, the degree may no longer be available.`, pm = em(), fm = (e) => {
  const t = e || pm, r = `${t}/assets/img/detail-page`, n = `${t}/assets/img/listing-page`, o = {
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
    detailPageDefault: o,
    listingPageDefault: s
  };
}, mm = (e) => {
  if (typeof e == "string") return "Degrees";
  const { program: t, cert: r } = e;
  return t === "undergrad" && r === "true" ? "Undergraduate Minors and Certificates" : t === "undergrad" ? "Undergraduate Degrees" : t === "graduate" && r === "true" ? "Graduate Certificates" : t === "graduate" ? "Graduate Degrees" : "Degrees";
}, li = [
  { id: 0, value: "DTPHX", text: "Downtown Phoenix campus" },
  { id: 1, value: "POLY", text: "Polytechnic campus" },
  { id: 2, value: "TEMPE", text: "Tempe campus" },
  { id: 3, value: "WEST", text: "West Valley campus" },
  { id: 4, value: "ONLNE", text: "ASU Online" }
], hm = li[4], hc = [
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
], ci = [
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
], gm = ci[0], Fo = (e) => (e == null ? void 0 : e.value) && (e == null ? void 0 : e.value) !== "all", bm = (e) => {
  var t;
  return ((t = [
    ...li,
    ...hc,
    ...ci
  ].find(({ value: r }) => r === e)) == null ? void 0 : t.text) || e;
}, dt = {
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
}, ym = {
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
}, Ms = (e, t) => {
  const r = ["TUCSN", "AWC"], n = e.toUpperCase(), o = r.includes(n) ? `${n}-${t}` : n;
  return ym[o];
};
function gc({ anchorMenu: e }) {
  var n, o;
  const t = (n = e == null ? void 0 : e.externalAnchors) == null ? void 0 : n.map((s) => {
    const { targetIdName: p, text: m } = s;
    return {
      targetIdName: p.startsWith("#") ? p.substring(1) : p,
      text: m,
      icon: null
    };
  }), r = Object.keys(dt).filter((s) => e[s]).map((s) => dt[s]).concat(t || []);
  return /* @__PURE__ */ d.jsx(
    kl,
    {
      items: r,
      firstElementId: (o = r[0]) == null ? void 0 : o.targetIdName,
      focusFirstFocusableElement: !1
    }
  );
}
gc.propTypes = {
  anchorMenu: C.shape(si)
};
function xm(e, t) {
  const r = Math.floor(e / t), n = e % t;
  return r + (n > 0 ? 1 : 0);
}
const vm = "https://degrees.apps.asu.edu", wm = "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan/", Sm = {
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
}, km = {
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
}, Fs = (e) => e.map((t) => ({
  title: t.acadPlanDescription,
  url: t.academicOfficeUrl
})).sort((t, r) => t.title.localeCompare(r.title)), Tm = (e) => e == null ? void 0 : e.map((t) => ({
  career: {
    text: t.alternateTitle,
    url: `${vm}/career-details/${t.onetCode}`
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
    const { program: b } = r;
    r.cert === "true" && b === "undergrad" ? r.degreeType = "UGCM" : b === "graduate" ? r.degreeType = "GR" : r.degreeType = "UG", delete r.program;
  }
  r.acadPlan && (r.endpoint += `/${r.acadPlan}`, delete r.acadPlan);
  const { endpoint: n, include: o, ...s } = r, p = o.split(",").map((b) => `include=${b.trim()}`).join("&"), m = Object.keys(s).reduce(
    (b, f) => `${b}&${f}=${r[f]}`,
    ""
  );
  return `${n}?${m}&${p}`;
}
function Da(e, t = "h2") {
  return (
    /** @type {keyof JSX.IntrinsicElements} */
    dc.includes(e.component) ? e.component : t
  );
}
function $o(e) {
  return typeof e != "string" ? console.error("Invalid string", e) : e == null ? void 0 : e.replace(
    /\w\S*/g,
    (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
  );
}
function Cm(e) {
  return /<\/?[a-z][\s\S]*>/i.test(e);
}
const yc = "AsuDevTools", Am = {
  isDebug: !1
};
function Em() {
  const e = JSON.parse(localStorage.getItem(yc));
  return e == null ? void 0 : e.isDebug;
}
window.__AsuDevTools = {
  enableDebug(e) {
    const t = JSON.stringify({
      ...Am,
      isDebug: e
    });
    localStorage.setItem(yc, t);
  }
};
async function mo(e) {
  return e != null && e.length ? (await Promise.all(
    e.map(async (r) => {
      try {
        return await (await Promise.race([
          fetch(
            `${wm}${r}?include=academicOfficeUrl&include=acadPlanDescription`
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
function _m(e, t) {
  Promise.all(e).then((r) => {
    const n = r[0], o = r[1];
    t({ accelerateData: n, concurrentData: o });
  }).catch(() => {
    t({ accelerateData: [], concurrentData: [] });
  });
}
function Wn({ contents: e = [] }) {
  const t = Qr("paragrap-");
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.map(
    (r) => Cm(r.text) ? /* @__PURE__ */ d.jsx(
      "div",
      {
        dangerouslySetInnerHTML: zt(r.text)
      },
      t.next().value
    ) : /* @__PURE__ */ d.jsx(
      "p",
      {
        className: `${ln(r.cssClass)}`,
        children: r.text
      },
      t.next().value
    )
  ) });
}
Wn.propTypes = {
  contents: C.arrayOf(ja)
};
const Rm = Pa`
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
`, jm = Ye.div`
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
`, Om = Ye.img`
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
function un({
  title: e,
  image: t,
  contentDirection: r = "left",
  contents: n = [],
  contentChildren: o = null,
  headingTag: s = "H3"
}) {
  const p = nn(), m = nn(), b = Da(s);
  function f() {
    const E = p.current.offsetHeight;
    m.current.style.height = `${E * 1.2}px`;
  }
  return At(() => {
    f();
    let A;
    const E = () => {
      clearTimeout(A), A = setTimeout(() => f(), 150);
    };
    return window.addEventListener("resize", E), () => window.removeEventListener("resize", E);
  }, [m, p]), /* @__PURE__ */ d.jsxs("div", { className: `uds-image-overlap content-${r}`, children: [
    /* @__PURE__ */ d.jsx(Rm, {}),
    /* @__PURE__ */ d.jsx(
      Om,
      {
        ref: m,
        className: "img-fluid",
        src: t == null ? void 0 : t.url,
        alt: t == null ? void 0 : t.altText,
        onError: (A) => {
          A.currentTarget.style.display = "none";
        }
      }
    ),
    /* @__PURE__ */ d.jsxs(jm, { ref: p, className: "content-wrapper", children: [
      /* @__PURE__ */ d.jsx(b, { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: e }) }),
      /* @__PURE__ */ d.jsx(Wn, { contents: n }),
      o
    ] })
  ] });
}
un.propTypes = {
  headingTag: C.string,
  title: C.string,
  contentDirection: C.oneOf(["left", "right"]),
  contents: C.arrayOf(
    C.shape({
      text: C.string
    })
  ),
  image: Sr,
  contentChildren: C.element
};
const xc = Pa`
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
`, vc = Ye.main`
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
function Nm({
  baseIconClassName1: e,
  baseIconAriaLabel1: t,
  baseIconStyle1: r,
  baseIconAriaLabel2: n,
  baseIconClassName2: o,
  baseIconStyle2: s,
  ariaLabel: p,
  ariaControls: m,
  dataId: b,
  onClick: f = () => null
}) {
  const [A, E] = ut(!1), R = (T, P, F, q) => /* @__PURE__ */ d.jsx(
    "span",
    {
      style: {
        cursor: "pointer",
        display: P
      },
      children: /* @__PURE__ */ d.jsx(
        "i",
        {
          className: `${T}`,
          "aria-label": F,
          title: F,
          style: q
        }
      )
    }
  ), U = () => {
    E(!A), f(!A);
  }, _ = /* @__PURE__ */ d.jsxs(
    "span",
    {
      "data-testid": b,
      role: "button",
      className: "element-focus",
      tabIndex: 0,
      onKeyDown: (T) => T.key === "Enter" && U(),
      onClick: U,
      "aria-label": p,
      "aria-expanded": A,
      "aria-controls": m,
      children: [
        R(
          e,
          A ? "" : "none",
          t,
          r
        ),
        R(
          o,
          A ? "none" : "",
          n,
          s
        )
      ]
    }
  );
  return Ys(() => _, [A]);
}
Ye.div`
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
const ho = (e) => /* @__PURE__ */ d.jsx("span", {}), Pm = ({
  onClick: e = () => null,
  ariaLabel: t,
  ariaControls: r,
  dataId: n
}) => Nm({
  dataId: n,
  baseIconClassName1: "fas fa-chevron-up",
  baseIconClassName2: "fas fa-chevron-down",
  onClick: e,
  ariaLabel: t,
  ariaControls: r
}), dn = Hs(null), ui = ({ listPageProps: e, detailPageProps: t, children: r }) => {
  const { detailPageDefault: n, listingPageDefault: o } = Ys(
    () => fm((e || t).appPathFolder),
    []
  ), s = {
    detailPageDefault: n,
    listingPageDefault: o
  }, p = {
    listPageProps: e,
    detailPageProps: t
  };
  return /* @__PURE__ */ d.jsx(
    dn.Provider,
    {
      value: {
        state: p,
        defaultState: s
      },
      children: r
    }
  );
};
ui.propTypes = {
  children: C.oneOfType([
    C.arrayOf(C.element),
    C.element
  ]),
  listPageProps: C.shape({}),
  detailPageProps: C.shape({})
};
const Dm = ({
  dataSource: e,
  tableView: t = [],
  programs: r,
  stateFilters: n
}) => {
  const { collegeAcadOrg: o, departmentCode: s } = e;
  At(() => {
    if (!r || !Em()) return;
    const p = "background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;", m = "font-size:30px;", b = "font-size:24px;", f = "font-size: 18px; margin-left: 0.5rem;";
    console.group("<< ASU Degree Page >>"), console.log("%c🏫 Listing Page Programs 📚", p + m), console.log(
      `%cTotal programs found: ${r.length}`,
      p + f
    ), console.log("%cPrograms found", p + f), console.log(r), console.log(
      `%cTotal programs loaded: ${t.length}`,
      p + f
    ), console.log("%cPrograms loaded", p + f), console.log(t), console.log("%cPage Filters", p + b), console.log(
      `%c- collegeAcadOrg:${o}`,
      p + f
    ), console.log(
      `%c- departmentCode:${s}`,
      p + f
    ), console.log("%cSearch Filters", p + b), console.log(n), console.groupEnd();
  });
}, $s = (e) => e.degreeType === "UG", wc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, Sc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, Im = (e) => Object.keys(e).length > 0 ? Sc(e) || wc(e) : !0, Pn = (e) => {
  const { owners: t } = e;
  return t ? t.reduce(
    (n, o) => n.percentOwned > o.percentOwned ? n : o
  ) : null;
};
function Xr(e = {}) {
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
    isUndergradProgram: () => $s(e),
    isPhdOrMasters: () => e.degreeDescriptionShort !== "CERT",
    // Only called in functions that already checked if its a grad program
    isGradProgram: () => e.degreeType === "GR",
    // GR is present for grad degrees and grad certificates
    isMinorOrCertificate: () => e.degreeType === "UGCM" || e.degreeType === "GR" && e.acadPlanTypeDescription === "Certificate",
    /** @returns {"undergrad" |  "graduate"} */
    getProgramType: () => $s(e) ? "undergrad" : "graduate",
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
        const o = t.join(", or<br />");
        r = o ? `<p>${o}</p>` : "";
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
        (o) => o.defaultFlag === !0
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
    getAccelerateDegrees: async () => e.acceleratedAcadPlanCodes ? mo(e.acceleratedAcadPlanCodes) : [],
    getConcurrentDegrees: async () => e.concurrentAcadPlanCodes ? mo(e.concurrentAcadPlanCodes) : [],
    getCollegeDesc: () => {
      var t;
      return (t = Pn(e)) == null ? void 0 : t.collegeDescription;
    },
    getCollegeUrl: () => {
      var t;
      return ((t = Pn(e)) == null ? void 0 : t.collegeUrl) || "";
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
      } catch (o) {
        return console.error("Error parsing HTML: ", o.message), "";
      }
      return n;
    },
    /** @return {string} */
    getDepartmentName: () => {
      var t;
      return (t = Pn(e)) == null ? void 0 : t.departmentDescription;
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
      const { subject: r, catalogNumber: n, description: o } = t;
      return `${r} ${n} - ${o}`;
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
    getConcurrentDegreeMajorMaps: () => mo(e.concurrentAcadPlanCodes),
    getChangeMajor: () => e.changeMajorRequirementsText,
    getAsuCareerOpportunity: () => e.careerOpportunities,
    getGlobalExp: () => {
      var t;
      return (t = e.globalExperienceText) == null ? void 0 : t.trim();
    },
    /** @return {string} */
    getCollegeAcadOrg: () => {
      var t;
      return (t = Pn(e)) == null ? void 0 : t.collegeAcadOrg;
    },
    /** @return {Array} */
    getCollegeAcadOrgJoint: () => {
      const { owners: t } = e;
      return t ? t.map((n) => n.collegeAcadOrg) : [];
    },
    /** @return {string} */
    getDepartmentCode: () => {
      var t;
      return (t = Pn(e)) == null ? void 0 : t.departmentAcadOrg;
    },
    /** @return {Object.<string, string>} */
    getGraduateApplyDates: () => e.applicationDeadlines,
    hasGraduateApplyDates: () => wc(e),
    /** @return {Object.<string, string>} */
    getPlanDeadlines: () => e.applicationDeadlines,
    hasPlanDeadlines: () => Sc(e),
    isValidActiveProgram: () => Im(e),
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
        (p) => p.campusesOffered
      );
      const r = [...e.majorMapSubplans], n = (p, m) => p.filter(
        (b) => b.acadSubPlanCode !== m
      ), o = (p, m) => p.some(
        (b) => b.acadSubPlanCode !== m
      ), s = [];
      for (let p = r.length - 1; p >= 0 && t.length !== 0; p -= 1) {
        const m = r[p];
        (m.defaultFlag || o(
          t,
          m.acadSubPlanCode
        )) && (t = n(
          t,
          m.acadSubPlanCode
        ), s.push(m));
      }
      return s;
    },
    getSubPln: () => e.subplans
  };
}
function Lm(e) {
  const t = e.getProgramType(), r = [], n = (m) => ({
    text: m,
    url: ""
  }), o = (m) => ({
    text: "Online",
    url: m
  }), s = e.getCampusList().map((m) => m.campusCode);
  s.length > 0 && r.push(
    ...s.map(
      (m) => m === "ONLNE" && o(e.getCurriculumUrl()) || Ms(m, t) || n(m)
    )
  );
  const p = e.getCampusWue();
  return p && r.push(
    Ms(p, t) || n(p)
  ), r;
}
const Mm = (e, t) => {
  const r = { ...e };
  return r.globalOpportunity && !t.getGlobalExp() && (r.globalOpportunity = !1), r.careerOutlook && !t.getAsuCareerOpportunity() && (r.careerOutlook = !1), r.attendOnline && !t.getCurriculumUrl() && (r.attendOnline = !1), r;
}, Fm = (e) => {
  var o;
  const t = Object.values(e).filter(
    (s) => s === !0
  );
  return ((o = e == null ? void 0 : e.externalAnchors) == null ? void 0 : o.length) > 0 || t.length > 0;
};
function $m(e) {
  return "";
}
function Um(e) {
  return "";
}
function zm() {
  return "";
}
function Ia(e, t) {
  let r = t || "";
  return r = r.replaceAll("{INSTITUTION_CODE}", e.getInstitution()).replaceAll("{ACAD_PLAN_CODE}", e.getAcadPlan()), r;
}
function kc(e, t) {
  return `${Ia(e, t)}#${dt.flexibleDegreeOptions.acceleratedId}`;
}
function Us({
  programs: e = [],
  filters: {
    collegeAcadOrg: t,
    departmentCode: r,
    acceleratedConcurrent: n,
    locations: o = [],
    keyword: s,
    blacklistAcadPlans: p,
    program: m,
    showCerts: b
  }
}) {
  const f = (z) => !t || z.getCollegeAcadOrgJoint().includes(t), A = (z) => !r || z.getDepartmentCode().includes(r), E = (z) => {
    var S;
    return !o.length || ((S = z.getCampusList()) == null ? void 0 : S.some((oe) => o.some((de) => de.value === oe.campusCode)));
  }, R = (z = {}) => {
    var S;
    return !Fo(n) || ((S = z[n.value]) == null ? void 0 : S.length) > 0;
  }, U = (z, S) => !!(!S || new RegExp(S, "i").test(z.getMajorDesc())), _ = (z, S) => !!(!S || new RegExp(S, "i").test(z.getFullDescription())), T = (z) => !(p != null && p.includes(z.getAcadPlan())), P = (z) => m === "undergrad" ? !0 : b === "true" && m === "graduate" ? z.isMinorOrCertificate() : z.isPhdOrMasters(), F = (z) => {
    const S = Xr(z);
    return f(S) && A(S) && E(S) && R(z) && T(S) && P(S);
  }, q = [], Y = [];
  return e.filter((z) => {
    const S = Xr(z), oe = U(S, s), de = _(
      S,
      s
    );
    return (oe || de) && F(z) ? (oe ? q.push(z) : Y.push(z), !0) : !1;
  }), q.concat(Y);
}
const qm = (e) => e.sort(
  (r, n) => r.acadPlanMarketingDescription.localeCompare(
    n.acadPlanMarketingDescription
  )
), Nr = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: o = "",
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
    section: o.toLowerCase(),
    text: s.toLowerCase(),
    component: m.toLowerCase()
  };
  b && b.push(f);
};
function di({ breadcrumbs: e, section: t }) {
  const r = Qr("breadcrumb-");
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
di.propTypes = {
  breadcrumbs: C.arrayOf(Gr),
  section: C.string
};
const Bm = () => /* @__PURE__ */ d.jsx("div", { className: "container", "data-testid": "browse-title", children: /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Browse degrees" }) }) }), go = ({
  id: e,
  label: t,
  selected: r,
  multiple: n,
  options: o,
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
      children: o == null ? void 0 : o.map((p) => /* @__PURE__ */ d.jsx(
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
] }), Wm = Ye.div`
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
`, Hm = Ye.button`
  font-weight: 400;
  text-decoration: underline;
`, Vm = {
  event: "select",
  action: "click",
  name: "onclick"
}, Gm = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link"
}, Dn = {
  isActive: !1,
  locations: [],
  asuLocals: [],
  acceleratedConcurrent: { value: "all", text: "" },
  keyword: null,
  blacklistAcadPlans: []
}, bo = (e) => ({
  id: e.id,
  value: e.value,
  text: e.text
}), Ym = (e) => e.map((t) => t.text).join(", "), zs = (e, t) => {
  Nr({ ...Vm, type: e, text: t });
}, qs = (e) => {
  Nr({ ...Gm, text: e });
}, Tc = ({ value: e, onChange: t, onApply: r, onClean: n }) => {
  const o = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (b, { target: { selectedOptions: f } }) => {
      let A = [], E = [];
      const R = Array.from(f, bo), { locations: U, asuLocals: _ } = e;
      ({
        locationsRender: () => {
          A = R, E = _;
        },
        asuLocalsRender: () => {
          E = R, A = U;
        }
      })[`${b}Render`](), t({
        ...e,
        locations: A,
        asuLocals: E
      }), zs({
        locations: "location or online",
        asuLocals: "as local"
      }[b], Ym(R));
    }
  ), s = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (b, { target: { selectedOptions: f } }) => {
      t({ ...e, [b]: bo(f[0]) }), zs(
        "accelerated/concurrent",
        bo(f[0]).text
      );
    }
  ), p = () => {
    r == null || r({
      ...e,
      isActive: !0
    });
  }, m = () => {
    t(Dn), n == null || n();
  };
  return /* @__PURE__ */ d.jsxs(Wm, { className: "container", "data-testid": "filters", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Filter your results" }),
    /* @__PURE__ */ d.jsxs("form", { className: "mt-3 uds-form row", children: [
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        go,
        {
          multiple: !0,
          id: "locations",
          label: "Campuses or online",
          selected: e.locations.map((b) => b.value),
          options: li,
          onChange: o
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        go,
        {
          multiple: !0,
          id: "asuLocals",
          label: "ASU location, ASU Local",
          selected: e.asuLocals.map((b) => b.value),
          options: hc,
          onChange: o
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        go,
        {
          id: "acceleratedConcurrent",
          label: "Accelerated, Concurrent",
          selected: e.acceleratedConcurrent.value,
          options: ci,
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
            p(), qs("apply filters");
          }
        }
      ),
      /* @__PURE__ */ d.jsx(
        Hm,
        {
          "data-testid": "btn-clear-filters",
          className: "btn btn-link",
          onClick: () => {
            m(), qs("clean filters");
          },
          children: "Clear filters"
        }
      )
    ] })
  ] });
};
Tc.propTypes = {
  value: sc,
  onChange: C.func,
  onApply: C.func,
  onClean: C.func
};
function Cc({
  value: { isActive: e, locations: t, asuLocals: r, acceleratedConcurrent: n } = {},
  onRemove: o
}) {
  const s = Qr("filter-"), p = (t == null ? void 0 : t.length) + (r == null ? void 0 : r.length) + (Fo(n) ? 1 : 0), m = (b, f) => {
    const { text: A } = f;
    return /* @__PURE__ */ d.jsxs(
      "span",
      {
        tabIndex: -1,
        role: "button",
        "aria-label": `Remove filter ${A}`,
        "data-filter-id": b,
        onKeyDown: () => o(b, f),
        onClick: () => o(b, f),
        className: "btn btn-tag btn-tag-alt-white d-inline-flex align-items-center me-2",
        children: [
          /* @__PURE__ */ d.jsx("span", { className: "pe-1", children: A }),
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
      (Fo(n) ? [n] : []).map((b) => m("acceleratedConcurrent", b))
    ] }) })
  ] });
}
Cc.propTypes = {
  value: sc,
  onRemove: C.func
};
const Xm = Ye.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`, Km = Ye.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;
function Qm({
  applyNowUrl: e,
  title: t,
  contents: r,
  photoGrid: n
}) {
  const o = Da(t);
  return /* @__PURE__ */ d.jsx(
    "section",
    {
      className: "container",
      "data-type": "text-photo-grid",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ d.jsx(o, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${ln(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ d.jsx(Wn, { contents: r }),
          /* @__PURE__ */ d.jsx(Bn, { href: e })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-7 d-none d-sm-none d-md-block", children: /* @__PURE__ */ d.jsx(Xm, { className: "row", children: n.images.map((s, p) => /* @__PURE__ */ d.jsx(
          "div",
          {
            className: "photo-item col-sm-12 col-md-6 col-lg-6",
            children: /* @__PURE__ */ d.jsx(
              "img",
              {
                className: `mg-fluid ${ln(s.cssClass)}`,
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
function Zm({
  applyNowUrl: e,
  title: t,
  contents: r,
  image: n,
  video: o
}) {
  const s = Da(t);
  return /* @__PURE__ */ d.jsx(
    Km,
    {
      className: "container",
      "data-type": "text-media",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ d.jsxs("div", { className: "row gy-3", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ d.jsx(s, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${ln(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ d.jsx(Wn, { contents: r }),
          /* @__PURE__ */ d.jsx(Bn, { href: e })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7 mt-2 mt-sm-0", children: [
          o && /* @__PURE__ */ d.jsx(
            Qo,
            {
              type: o.type,
              url: o.url,
              vttUrl: o.vttUrl,
              title: o.title,
              className: "mt-0"
            }
          ),
          n && /* @__PURE__ */ d.jsx("div", { className: "uds-img", children: /* @__PURE__ */ d.jsx("img", { src: n.url, className: "img-fluid", alt: n.altText }) })
        ] })
      ] })
    }
  );
}
function Jm({
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
        un,
        {
          title: t.text,
          contents: r,
          image: n,
          contentDirection: "right",
          contentChildren: /* @__PURE__ */ d.jsx("div", { className: "mt-2", children: /* @__PURE__ */ d.jsx(Bn, { href: e }) })
        }
      ) }) })
    }
  );
}
const eh = ({ applyNowUrl: e, title: t, contents: r }) => {
  const n = Da(t);
  return /* @__PURE__ */ d.jsx("section", { className: "container", "data-type": "text", "data-testid": "intro-content", children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-5", children: /* @__PURE__ */ d.jsx(n, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${ln(t.cssClass)}`, children: t.text }) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7", children: [
      /* @__PURE__ */ d.jsx(Wn, { contents: r }),
      /* @__PURE__ */ d.jsx(Bn, { href: e })
    ] })
  ] }) });
}, pi = ({
  applyNowUrl: e,
  type: t,
  title: r,
  contents: n,
  image: o,
  video: s,
  photoGrid: p
}) => ({
  text: () => eh({ applyNowUrl: e, title: r, contents: n }),
  "text-media": () => Zm({
    applyNowUrl: e,
    title: r,
    contents: n,
    image: o,
    video: s
  }),
  "text-image-overlay": () => Jm({ applyNowUrl: e, title: r, contents: n, image: o }),
  "text-photo-grid": () => Qm({
    applyNowUrl: e,
    title: r,
    contents: n,
    photoGrid: p
  }),
  undefined: () => (console.error(
    `the type '${t}' is not supported by the 'IntroContent' component.`
  ), null)
})[t]();
pi.propTypes = {
  applyNowUrl: C.string,
  type: C.oneOf([
    "text",
    "text-media",
    "text-image-overlay",
    "text-photo-grid"
  ]).isRequired,
  video: C.shape({ ...ii }),
  image: C.shape({ ...oi }),
  header: ja,
  title: C.shape({
    ...nc,
    component: C.oneOf(dc)
  }),
  contents: C.arrayOf(ja),
  photoGrid: C.shape({
    images: C.arrayOf(Sr)
  })
};
const La = {
  programs: C.arrayOf(C.object),
  totalRows: C.number,
  loading: C.bool,
  actionUrls: C.shape({
    applyNowUrl: C.string,
    majorInfoUrl: C.string,
    majorInfoOnlineUrl: C.string
  }),
  degreesPerPage: C.number
}, th = Ye.div`
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
`, Ac = ({ programs: e, actionUrls: t }) => {
  var p, m, b, f, A;
  const { state: r } = qt(dn), n = (m = (p = r == null ? void 0 : r.listPageProps) == null ? void 0 : p.programList) == null ? void 0 : m.settings, o = ((A = (f = (b = r == null ? void 0 : r.listPageProps) == null ? void 0 : b.programList) == null ? void 0 : f.dataSource) == null ? void 0 : A.program) === "graduate", s = e.map((E) => {
    const R = Xr(E), U = () => {
      var q;
      const P = R.isOnline() ? R.getOnlineMajorMapURL() : R.getGeneralDegreeMajorMap();
      let F;
      try {
        F = `<a href=${(q = new URL(P)) == null ? void 0 : q.toString()}>${R.getRequiredCoursesLabel()} Map</a>`;
      } catch {
        return "";
      }
      return F;
    }, _ = () => `<div>
        ${R.hasConcurrentDegrees() ? "<div className='cell-container'>concurrent</div>" : ""}
        ${R.hasAccelerateDegrees() ? `<div className="cell-container">
                <a href=${kc(
      R,
      t.majorInfoUrl
    )}>
                  4+1 years
                </a>
              </div>` : ""}
    </div>`;
    return {
      content: {
        header: R.getMajorDesc(),
        body: `<ul>
        <li>
          <strong>Major:</strong>
          <br />
            <a href=${Ia(R, t.majorInfoUrl)}>
              ${R.getMajorDesc()}
            </a>
        </li>
        <li>
          <strong>Degree:</strong>
          <br />${R.getDegree()}
        </li>
        ${o ? "" : `<li>
              <strong>Required Courses:</strong>
              <br />${U()}
            </li>`}
        <li>
          <strong>Campus or location:</strong>
          <br />${R.getCampusList().map((T) => $o(T.campusCode)).join(", ")}
        </li>
        <li>
          <strong>Accelerated/Concurrent:</strong>
          <br />${_() || "-"}
        </li>
        ${n != null && n.hideCollegeSchool ? "" : ` <li>
                  <strong>College/School:</strong>
                  <br />
                  <a href=${R.getCollegeUrl()}>
                    ${R.getCollegeDesc()}
                  </a>
                </li>`}
      </ul>`
      }
    };
  });
  return /* @__PURE__ */ d.jsx(th, { "data-testid": "accordion-view", children: /* @__PURE__ */ d.jsx(Vo, { cards: s }) });
};
Ac.propTypes = {
  ...La
};
const rh = Ye.section`
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
function Ec({ programs: e, loading: t, actionUrls: r }) {
  var b, f, A, E;
  const { defaultState: n, state: o } = qt(dn), s = (E = (A = (f = (b = o == null ? void 0 : o.listPageProps) == null ? void 0 : b.programList) == null ? void 0 : f.settings) == null ? void 0 : A.cardDefaultImage) == null ? void 0 : E.url, p = n.detailPageDefault.hero.image.url, m = s || p;
  return /* @__PURE__ */ d.jsx(
    rh,
    {
      id: fc,
      className: "container row",
      "data-loading": t,
      "data-testid": "grid-view",
      children: e.map((R) => {
        const U = Xr(R);
        return /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-4 col-lg-3 mb-2", children: /* @__PURE__ */ d.jsx(
          ht,
          {
            type: "degree",
            horizontal: !1,
            clickable: !1,
            image: m,
            imageAltText: "An example image",
            title: U.getMajorDesc(),
            linkLabel: "View Program Details",
            linkUrl: Ia(U, r.majorInfoUrl),
            buttons: [
              {
                color: "maroon",
                size: "small",
                label: "Reqeuest Info",
                href: zm()
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
Ec.propTypes = {
  ...La
};
const nh = [
  {
    dataKey: "Major",
    label: "Major",
    className: "major",
    sortable: !0,
    contentTemplate: ({ resolver: e, rowIndex: t, actionUrls: r, onClick: n }) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
      /* @__PURE__ */ d.jsx("a", { href: Ia(e, r == null ? void 0 : r.majorInfoUrl), children: e.getMajorDesc() }),
      /* @__PURE__ */ d.jsx(
        Pm,
        {
          dataId: "show-row-detail",
          ariaLabel: `${e.getMajorDesc()} arrow`,
          ariaControls: `row-info-${t}`,
          onClick: (o) => n(t, o)
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
        ho,
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
      var o;
      const r = e.isOnline() ? e.getOnlineMajorMapURL() : e.getGeneralDegreeMajorMap();
      let n;
      try {
        const s = (o = new URL(r)) == null ? void 0 : o.toString();
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
      const t = Qr("campus-");
      return /* @__PURE__ */ d.jsx("div", { children: e.getCampusList().map((r, n, o) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
        /* @__PURE__ */ d.jsx("span", { children: `${$o(
          bm(r.campusCode)
        )}${n < o.length - 1 ? ", " : ""}` }, r.campusCode),
        /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx(
          ho,
          {
            popover: {
              title: $o(r.campusCode),
              body: () => fetch($m(r.campusCode)),
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
          ho,
          {
            popover: {
              title: "4+1 years",
              body: () => fetch(Um(e.getAcadPlan())),
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
], ah = ri`
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
`, oh = Ye.table`
  ${ah}
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
        box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #191919 !important;
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
`, ih = ({ resolver: e, id: t }) => {
  const r = yu(), n = (o) => {
    o.key === "Enter" && (r == null || r.current.click());
  };
  return /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("header", { children: /* @__PURE__ */ d.jsx("strong", { children: "Program Description:" }) }),
    /* @__PURE__ */ d.jsx("input", { className: "togle-more-text", type: "checkbox", id: `#${t}` }),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        className: "desc-long",
        id: t,
        dangerouslySetInnerHTML: zt(
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
}, sh = ({ resolver: e }) => /* @__PURE__ */ d.jsxs("div", { children: [
  /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "Additional Program Fee: " }),
    e.hasAsuProgramFee() ? "Yes" : "No"
  ] }),
  /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "Second Language Requirement: " }),
    e.hasAsuLangReqFlag() ? "Yes" : "No"
  ] }),
  e.hasMathReqFlag() && /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "First Required Math Course:" }),
    /* @__PURE__ */ d.jsx("span", { children: e.getMinMathReq() }),
    e.getOtherMathReqCourse() && /* @__PURE__ */ d.jsx(
      "span",
      {
        dangerouslySetInnerHTML: zt(
          e.getOtherMathReqCourse()
        )
      }
    )
  ] }) }),
  e.getMathIntensity() && /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "Math Intensity:" }),
    e.getMathIntensity()
  ] }),
  e.hasStemOptText() && /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "STEM OPT:" }),
    e.hasStemOptText()
  ] })
] }), lh = Qr("row-"), _c = ({ programs: e, totalRows: t, loading: r, actionUrls: n }) => {
  var A, E;
  const o = mt.useRef(null), s = mt.useRef(null), { state: p } = qt(dn), m = (E = (A = p == null ? void 0 : p.listPageProps) == null ? void 0 : A.programList) == null ? void 0 : E.settings;
  let b = nh;
  p.listPageProps.programList.dataSource.program === "graduate" && (b = b.filter((R) => R.dataKey !== "RequiredCourses")), m != null && m.hideCollegeSchool && (b = b.filter((R) => R.dataKey !== "CollegeSchool"));
  const f = (R, U) => {
    const _ = s.current.children;
    Array.prototype.forEach.call(
      _,
      (P, F) => F !== R && P.setAttribute("data-is-open", "false")
    ), s.current.children[R].setAttribute("data-is-open", String(U));
  };
  return /* @__PURE__ */ d.jsx("section", { className: "container mb-4", "data-testid": "list-view", children: /* @__PURE__ */ d.jsxs(
    oh,
    {
      id: fc,
      ref: o,
      "data-loading": r,
      title: `${t} program found`,
      children: [
        /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsx("tr", { role: "row", children: b.map((R) => {
          var U;
          return /* @__PURE__ */ d.jsx(
            "th",
            {
              tabIndex: 0,
              className: `${R.className}`,
              scope: "col",
              "aria-label": R.ariaLabel,
              children: ((U = R.headerTemplate) == null ? void 0 : U.call(R)) || /* @__PURE__ */ d.jsx("span", { children: R.label })
            },
            R.dataKey
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
          e.map((R, U) => {
            const _ = lh.next().value, T = U * 2, P = Xr(R);
            return /* @__PURE__ */ d.jsxs(Xs, { children: [
              /* @__PURE__ */ d.jsx("tr", { role: "row", children: b.map((F) => {
                var q;
                return /* @__PURE__ */ d.jsx(
                  "td",
                  {
                    className: `${F.className}`,
                    children: (q = F.contentTemplate) == null ? void 0 : q.call(F, {
                      resolver: P,
                      col: F,
                      row: R,
                      rowIndex: T,
                      onClick: f,
                      actionUrls: n
                    })
                  },
                  `${_}-${F.dataKey}`
                );
              }) }, _),
              /* @__PURE__ */ d.jsxs(
                "tr",
                {
                  id: `row-info-${T}`,
                  className: "row-info",
                  children: [
                    /* @__PURE__ */ d.jsx("td", { colSpan: 3, children: ih({ resolver: P, id: `${_}-more-text` }) }, `${_}-info`),
                    /* @__PURE__ */ d.jsx("td", { colSpan: 2, children: sh({ resolver: P }) }, `${_}-extra-info`)
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
const ch = Pa`

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
`, uh = {
  [pc]: Ec,
  [Mo]: _c
};
function Rc({
  dataViewComponent: e,
  loading: t,
  programs: r,
  actionUrls: n,
  degreesPerPage: o
}) {
  let s;
  o ? typeof o != "number" && (s = parseInt(o, 10)) : s = 8;
  const p = o || s, m = xm(r.length, p), b = uh[e], [f, A] = ut([]), E = (R, U) => {
    const _ = (U - 1) * p, T = _ + p;
    A(r.slice(_, T));
  };
  return At(() => {
    A(r.slice(0, p));
  }, [r]), /* @__PURE__ */ d.jsxs("section", { "data-testid": "program-list", "data-view-type": e, children: [
    /* @__PURE__ */ d.jsx(ch, {}),
    /* @__PURE__ */ d.jsx("div", { className: "desktop-view", children: /* @__PURE__ */ d.jsx(
      b,
      {
        loading: t,
        programs: f,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: o || s
      }
    ) }),
    /* @__PURE__ */ d.jsx("div", { className: "mobile-view mb-2", children: /* @__PURE__ */ d.jsx(
      Ac,
      {
        loading: t,
        programs: f,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: o || s
      }
    ) }),
    r.length > 0 ? /* @__PURE__ */ d.jsx(
      Rl,
      {
        totalNumbers: 7,
        type: "default",
        background: "white",
        totalPages: m,
        onChange: E,
        showFirstButton: !0,
        showLastButton: !0
      }
    ) : /* @__PURE__ */ d.jsx("section", { className: "container no-space", children: /* @__PURE__ */ d.jsx(tm, { message: "No result found for the filters applied" }) })
  ] });
}
Rc.propTypes = {
  dataViewComponent: C.string,
  ...La,
  degreesPerPage: C.number
};
const dh = Ye.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
  }
`, jc = ({ value: e, onChange: t, onSearch: r }) => {
  const [n, o] = ut(!1);
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
    dh,
    {
      className: "container mt-5",
      "data-searching": n,
      "data-testid": "search-bar",
      children: /* @__PURE__ */ d.jsx(
        "form",
        {
          "data-testid": "search-bar-form",
          className: "uds-form p-0 col-md-6 col-sm-12",
          onSubmit: (m) => {
            m.preventDefault(), r(), o(!0), s = setTimeout(() => o(!1), 500), clearTimeout(s);
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
      )
    }
  );
};
jc.propTypes = {
  value: C.string,
  onChange: C.func,
  onSearch: C.func
};
const ph = Ye(vc)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`, fh = Pa`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`, mh = Ye.div.attrs({ className: "container" })`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`, fi = ({
  appPathFolder: e,
  actionUrls: t,
  hasSearchBar: r = !0,
  hasFilters: n = !0,
  hero: o,
  introContent: s,
  programList: p,
  degreesPerPage: m
}) => {
  var te;
  const [{ data: b, loading: f, error: A }, E] = Gl(), [R, U] = ut(!1), [_, T] = ut([]), [P, F] = ut([]), [q, Y] = ut(""), z = (te = p.settings) == null ? void 0 : te.defaultView, S = [Mo, pc].includes(z) ? z : Mo, [oe, de] = ut(S), xe = bc(p.dataSource, Sm), { defaultState: Ne } = qt(dn), { listingPageDefault: Le } = Ne, {
    collegeAcadOrg: se,
    departmentCode: pe,
    showInactivePrograms: _e,
    blacklistAcadPlans: Ae,
    program: ve,
    cert: Xe
  } = p.dataSource, [Re, Ce] = ut({
    ...Dn
  }), [$e, ze] = ut({
    ...Dn
  });
  Dm({
    dataSource: p.dataSource,
    tableView: _,
    programs: b,
    stateFilters: Re
  }), At(() => {
    typeof window < "u" && Jl({
      packageName: "app-degree-pages",
      component: "ListingPage",
      type: "NA",
      configuration: {
        programList: p,
        degreesPerPage: m
      }
    });
  }, []), At(() => {
    E(xe);
  }, [xe]), At(() => {
    let j = qm(b || []);
    j = Us({
      programs: j,
      filters: {
        collegeAcadOrg: se,
        departmentCode: pe,
        blacklistAcadPlans: Ae,
        program: ve,
        showCerts: Xe
      }
    }), F(j), T(j);
  }, [b, m]);
  const le = async (j) => {
    const { acceleratedConcurrent: ie, locations: ee, asuLocals: re, keyword: X } = j;
    U(!0), E(xe);
    const ce = Us({
      programs: P,
      filters: {
        collegeAcadOrg: se,
        departmentCode: pe,
        acceleratedConcurrent: ie,
        locations: re.length > 0 ? ee.concat(hm) : ee,
        keyword: X,
        blacklistAcadPlans: Ae,
        program: ve
      }
    });
    Ce({ ...j }), ze({ ...j }), T(ce), U(!1);
  }, H = async () => {
    const j = {
      ...$e,
      keyword: q
    };
    le(j);
  }, N = (j) => {
    f || R || le(j);
  }, B = async (j) => {
    Ce(j);
  }, $ = () => {
    Ce(Dn), ze(Dn), T(P), Y("");
  }, y = (j, { value: ie }) => {
    const ee = j === "acceleratedConcurrent" ? gm : $e[j].filter((X) => X.value !== ie), re = {
      ...$e,
      [j]: ee
    };
    le(re);
  };
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(xc, {}),
    /* @__PURE__ */ d.jsx(fh, {}),
    A && /* @__PURE__ */ d.jsx(ec, { message: mc }),
    o != null && o.hide ? null : /* @__PURE__ */ d.jsx("section", { "data-testid": "hero", children: /* @__PURE__ */ d.jsx(
      zn,
      {
        image: (o == null ? void 0 : o.image) || Le.hero.image,
        title: {
          text: mm(p.dataSource),
          highlightColor: "gold",
          ...o == null ? void 0 : o.title,
          maxWidth: "100%"
        },
        contents: o == null ? void 0 : o.contents
      }
    ) }),
    /* @__PURE__ */ d.jsxs(ph, { "data-is-loading": f, className: "main-section dg-margin-top", children: [
      (s == null ? void 0 : s.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        di,
        {
          breadcrumbs: s.breadcrumbs,
          section: o ? o.title.text : ""
        }
      ) }),
      s ? /* @__PURE__ */ d.jsx(
        pi,
        {
          applyNowUrl: (t == null ? void 0 : t.applyNowUrl) || Le.actionUrls.applyNowUrl,
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
        /* @__PURE__ */ d.jsx(Bm, {}),
        r ? /* @__PURE__ */ d.jsx(
          jc,
          {
            value: q,
            onChange: Y,
            onSearch: H
          }
        ) : null,
        n ? /* @__PURE__ */ d.jsx(
          Tc,
          {
            value: Re,
            onChange: B,
            onApply: N,
            onClean: $
          }
        ) : null,
        /* @__PURE__ */ d.jsx(mh, {})
      ] }) : null,
      /* @__PURE__ */ d.jsx("section", { className: "container", children: /* @__PURE__ */ d.jsx("div", { className: "d-flex justify-content-between filter-switch-container", children: n ? /* @__PURE__ */ d.jsx(
        Cc,
        {
          value: $e,
          onRemove: y
        }
      ) : null }) }),
      f || R ? /* @__PURE__ */ d.jsx(tc, {}) : /* @__PURE__ */ d.jsx(
        Rc,
        {
          dataViewComponent: oe,
          loading: f || R,
          programs: _,
          actionUrls: t,
          degreesPerPage: m
        }
      )
    ] })
  ] });
};
fi.propTypes = {
  appPathFolder: C.string,
  actionUrls: C.shape({
    applyNowUrl: C.string
  }),
  hasSearchBar: C.bool,
  hasFilters: C.bool,
  hero: C.shape(zn.propTypes),
  introContent: C.shape(pi.propTypes),
  programList: C.shape({
    dataSource: ac,
    settings: im
  }),
  degreesPerPage: C.number
};
const Oc = (e) => /* @__PURE__ */ d.jsx(ui, { listPageProps: e, children: /* @__PURE__ */ d.jsx(fi, { ...e }) });
Oc.propTypes = fi.propTypes;
const hh = Ye.section`
  position: relative;
  padding-top: var(--uds-dp-section-margin);
  padding-bottom: var(--uds-dp-section-margin);
`, gh = Ye.div`
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
function bh() {
  return /* @__PURE__ */ d.jsxs(
    hh,
    {
      className: "container",
      id: dt.affordingCollege.targetIdName,
      "data-testid": "affording-college",
      children: [
        /* @__PURE__ */ d.jsx(gh, {}),
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Affording college" }) }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
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
            ht,
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
            ht,
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
var Nc = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", p = 0; p < arguments.length; p++) {
        var m = arguments[p];
        m && (s = o(s, n(m)));
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
        t.call(s, m) && s[m] && (p = o(p, m));
      return p;
    }
    function o(s, p) {
      return p ? s ? s + " " + p : s + p : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Nc);
var yh = Nc.exports;
const xh = /* @__PURE__ */ qo(yh), Pc = Ye.ul`
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
`, vh = ({
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
      Pc,
      {
        className: xh("", {
          "mb-0": n.length === 0
        }),
        children: r.map(({ label: o, href: s }) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
          Tr,
          {
            ariaLabel: o,
            color: "maroon",
            href: s,
            label: o,
            size: "small"
          }
        ) }, o))
      }
    ),
    n.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "mt-2 mb-4", children: /* @__PURE__ */ d.jsx(Vo, { cards: n, openedCard: 1 }) })
  ] });
}, wh = (e) => {
  const t = "View Curriculum";
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("p", { children: "View curriculum below for a detailed list of courses and other requirements." }),
    /* @__PURE__ */ d.jsx(Pc, { children: /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
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
function Dc({
  graduateRequirements: e,
  transferRequirements: t,
  isMinorOrCertificate: r,
  additionalRequirements: n,
  minorRequirements: o,
  majorMapURL: s
}) {
  if (!e && !r)
    return /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: dt.applicationRequirements.targetIdName,
        "data-testid": "application-requirements",
        children: [
          /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Admission requirements" }) }),
          vh({
            transferRequirements: t,
            additionalRequirements: n
          })
        ]
      }
    );
  const p = r ? "Program requirements" : "Degree requirements", m = e || o;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: dt.applicationRequirements.targetIdName,
        "data-testid": "application-requirements",
        children: [
          /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: p }) }),
          m ? /* @__PURE__ */ d.jsx(
            "div",
            {
              dangerouslySetInnerHTML: zt(m)
            }
          ) : wh(s)
        ]
      }
    ),
    /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: dt.degreeRequirements.targetIdName,
        "data-testid": "degree-requirements",
        children: [
          /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Admission requirements" }) }),
          /* @__PURE__ */ d.jsx(
            "div",
            {
              dangerouslySetInnerHTML: zt(
                n
              )
            }
          )
        ]
      }
    )
  ] });
}
Dc.propTypes = {
  graduateRequirements: C.string,
  transferRequirements: C.string,
  isMinorOrCertificate: C.bool,
  additionalRequirements: C.string,
  minorRequirements: C.string,
  majorMapURL: C.string
};
const Br = ({ item: e, type: t }) => {
  const r = Qr("glance-"), n = () => typeof e == "object" ? e.map((o, s) => {
    const p = ["", "#"].includes(o.url) ? null : o.url;
    let m = "";
    return s > 0 && s < e.length - 1 && (m = ", "), s === e.length - 1 && e.length > 1 && (m = " or "), /* @__PURE__ */ d.jsxs(Xs, { children: [
      m,
      /* @__PURE__ */ d.jsx("a", { href: p, rel: "noreferrer", target: "_blank", children: o.text })
    ] }, r.next().value);
  }) : e;
  return /* @__PURE__ */ d.jsxs("li", { children: [
    /* @__PURE__ */ d.jsx("i", { className: `fas fa-${Ls[t].icon} fa-li` }),
    /* @__PURE__ */ d.jsxs("strong", { children: [
      Ls[t].title,
      ": "
    ] }),
    n()
  ] });
};
Br.propTypes = {
  item: C.oneOfType([
    C.arrayOf(Po),
    C.string
  ]),
  type: C.string
};
const Ic = ({
  offeredBy: e,
  locations: t,
  firstRequirementMathCourse: r,
  mathIntensity: n,
  timeCommitment: o,
  stemOptText: s
}) => /* @__PURE__ */ d.jsxs(
  "section",
  {
    id: dt.atAGlance.targetIdName,
    "data-testid": "at-aglance",
    children: [
      /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "At a glance: program details" }) }),
      /* @__PURE__ */ d.jsxs("ul", { className: "uds-list fa-ul maroon pt-2 pb-0 pe-0", children: [
        e && /* @__PURE__ */ d.jsx(Br, { item: [e], type: "offeredBy" }),
        t && /* @__PURE__ */ d.jsx(Br, { item: t, type: "locations" }),
        r && /* @__PURE__ */ d.jsx(
          Br,
          {
            item: r,
            type: "firstRequirementMathCourse"
          }
        ),
        n && /* @__PURE__ */ d.jsx(Br, { item: n, type: "mathIntensity" }),
        o && /* @__PURE__ */ d.jsx(Br, { item: o, type: "timeCommitment" }),
        s && /* @__PURE__ */ d.jsx(Br, { item: s, type: "stemOptText" })
      ] })
    ]
  }
);
Ic.propTypes = {
  offeredBy: Po.isRequired,
  locations: C.arrayOf(Po).isRequired,
  firstRequirementMathCourse: C.string.isRequired,
  mathIntensity: C.string,
  timeCommitment: C.string,
  stemOptText: C.string
};
const Sh = `
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;
function Lc({ image: e, learnMoreLink: t, contents: r }) {
  const n = `linear-gradient(180deg, #19191900 0%, #191919c9 100%),url('${e.url}')`, o = Qr("attend-online-");
  return /* @__PURE__ */ d.jsx(
    "section",
    {
      id: dt.attendOnline.targetIdName,
      className: "uds-card-and-image",
      style: {
        backgroundImage: n
      },
      "data-testid": "attend-online",
      children: /* @__PURE__ */ d.jsx("div", { className: "uds-card-and-image-container", children: /* @__PURE__ */ d.jsxs("div", { className: "card card-centered", children: [
        /* @__PURE__ */ d.jsx("i", { className: "fas fa-wifi fa-2x card-icon-top" }),
        /* @__PURE__ */ d.jsx("div", { className: "card-header", children: /* @__PURE__ */ d.jsx("h3", { className: "card-title", children: "Attend online" }) }),
        /* @__PURE__ */ d.jsx("div", { className: "card-body", children: r ? r.map((s) => /* @__PURE__ */ d.jsx("p", { children: s }, o.next().value)) : /* @__PURE__ */ d.jsx("p", { children: Sh }) }),
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
Lc.propTypes = {
  learnMoreLink: C.string,
  image: Sr,
  contents: C.arrayOf(
    C.shape({
      text: C.string
    })
  )
};
const kh = Ye.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Mc = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  kh,
  {
    id: dt.careerOutlook.targetIdName,
    "data-testid": "career-outlook",
    children: /* @__PURE__ */ d.jsx(
      un,
      {
        headingTag: "H2",
        title: dt.careerOutlook.text,
        contents: e,
        image: t
      }
    )
  }
);
Mc.propTypes = un.propTypes;
const Th = Ye.div`
  & p:last-of-type {
    margin-bottom: 0;
  }

  & a {
    word-break: break-word;
  }
`;
function Fc({ content: e }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: dt.changeMajorRequirements.targetIdName,
      className: "change-your-major",
      "data-testid": "change-your-major",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Change your major requirements for current students" }) }),
        /* @__PURE__ */ d.jsx(
          Th,
          {
            dangerouslySetInnerHTML: zt(e)
          }
        )
      ]
    }
  );
}
Fc.propTypes = {
  content: C.string
};
function $c({ content: e = "" }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-testid": "custom-text",
      className: "mt-3",
      dangerouslySetInnerHTML: zt(e)
    }
  );
}
$c.propTypes = {
  content: C.string
};
const Uc = `
  width: unset !important;
  min-width: unset !important;
`, zc = Ye.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${Uc}
`, qc = Ye.i`
  color: #78be21;
  ${Uc}
`;
function Bc({ data: e }) {
  return /* @__PURE__ */ d.jsx("div", { className: "uds-table mb-1", children: /* @__PURE__ */ d.jsxs("table", { children: [
    /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsxs("tr", { children: [
      /* @__PURE__ */ d.jsx("th", { scope: "col", children: "Career" }),
      /* @__PURE__ */ d.jsx("th", { scope: "col", className: "text-end", children: "Growth*" }),
      /* @__PURE__ */ d.jsx("th", { scope: "col", className: "text-end", children: "Median Salary*" })
    ] }) }),
    /* @__PURE__ */ d.jsx("tbody", { children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ d.jsxs("tr", { children: [
      /* @__PURE__ */ d.jsxs("th", { scope: "row", style: { fontWeight: "normal" }, children: [
        /* @__PURE__ */ d.jsx("a", { href: t.career.url, target: "_blank", rel: "noreferrer", children: t.career.text }),
        t.greenOccupation && /* @__PURE__ */ d.jsx(qc, { className: "fas fa-leaf ms-1" }),
        t.brightOutlook && /* @__PURE__ */ d.jsx(zc, { className: "fas fa-sun ms-1" })
      ] }),
      /* @__PURE__ */ d.jsxs("td", { className: "text-end", children: [
        +t.growth,
        "%"
      ] }),
      /* @__PURE__ */ d.jsx("td", { className: "text-end", children: t.medianSalary || 0 })
    ] }, t.career.url)) })
  ] }) });
}
Bc.propTypes = {
  data: C.arrayOf(oc)
};
function Wc({ tableData: e }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: dt.exampleCareers.targetIdName,
      className: "container",
      "data-testid": "example-careers",
      children: [
        /* @__PURE__ */ d.jsx("h3", { children: "Example careers" }),
        /* @__PURE__ */ d.jsx("p", { children: "Example job titles and salaries listed below are not necessarily entry level, and students should take into consideration how years of experience and geographical location may affect pay scales. Some jobs also may require advanced degrees, certifications or state-specific licensure." }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-4 mb-4", children: [
          /* @__PURE__ */ d.jsx(Bc, { data: e }),
          /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("small", { children: "* Data obtained from the Occupational Information Network (O*NET) under sponsorship of the U.S. Department of Labor/Employment and Training Administration (USDOL/ETA)." }) })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "d-flex", children: [
          /* @__PURE__ */ d.jsxs("p", { className: "me-3", children: [
            /* @__PURE__ */ d.jsx(zc, { className: "fas fa-sun me-1" }),
            "Bright outlook"
          ] }),
          /* @__PURE__ */ d.jsxs("p", { children: [
            /* @__PURE__ */ d.jsx(qc, { className: "fas fa-leaf me-1" }),
            "Green occupation"
          ] })
        ] })
      ]
    }
  );
}
Wc.propTypes = {
  tableData: C.arrayOf(oc)
};
const Ch = Ye.ul`
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
`, Uo = ({ id: e, title: t, links: r }) => /* @__PURE__ */ d.jsxs("div", { id: e, className: "mt-4", children: [
  /* @__PURE__ */ d.jsx("h3", { children: t }),
  /* @__PURE__ */ d.jsx("p", { children: "This program allows students to obtain both a bachelor's and master's degree in as little as five years. It is offered as an accelerated bachelor's and master's degree with:" }),
  /* @__PURE__ */ d.jsx(Ch, { className: "mt-3 mb-3", children: r.map((n, o) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: n.url, target: "_blank", rel: "noreferrer", children: n.title }) }, `${n.title}-${o}`)
  )) }),
  /* @__PURE__ */ d.jsx("p", { className: "mb-0", children: "Acceptance to the graduate program requires a separate application. During their junior year, eligible students will be advised by their academic departments to apply." })
] });
Uo.propTypes = {
  id: C.string,
  title: C.string,
  links: Do
};
function Hc({ acceleratedLinks: e, concurrentLinks: t }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: dt.flexibleDegreeOptions.targetIdName,
      className: "container",
      "data-testid": "flexible-degree-options",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Flexible degree options" }) }),
        !!e.length && /* @__PURE__ */ d.jsx(
          Uo,
          {
            id: dt.flexibleDegreeOptions.acceleratedId,
            title: "Accelerated program options",
            links: e
          }
        ),
        !!t.length && /* @__PURE__ */ d.jsx(
          Uo,
          {
            id: dt.flexibleDegreeOptions.concurrentId,
            title: "Concurrent degree program",
            links: t
          }
        )
      ]
    }
  );
}
Hc.propTypes = {
  acceleratedLinks: Do,
  concurrentLinks: Do
};
const Ah = Ye.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Vc = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  Ah,
  {
    id: dt.globalOpportunity.targetIdName,
    "data-testid": "global-opportunity",
    children: /* @__PURE__ */ d.jsx(
      un,
      {
        headingTag: "H2",
        title: dt.globalOpportunity.text,
        contents: e,
        image: t
      }
    )
  }
);
Vc.propTypes = un.propTypes;
const Gc = ({ url: e, altText: t }) => /* @__PURE__ */ d.jsx("div", { className: "uds-img pt-3 pb-3", "data-testid": "intro-image", children: /* @__PURE__ */ d.jsx("img", { src: e, className: "img-fluid", alt: t }) });
Gc.propTypes = { ...oi };
const Eh = (e, t) => {
  if (e !== "youtube")
    return t;
  const r = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, n = t.match(r);
  return n && n[7].length === 11 ? `https://www.youtube.com/embed/${n[7]}` : t;
}, _h = Ye.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`, Yc = ({ type: e, url: t, vttUrl: r, title: n }) => /* @__PURE__ */ d.jsx(_h, { "data-testid": "intro-video", children: /* @__PURE__ */ d.jsx(
  Qo,
  {
    type: e,
    url: Eh(e, t),
    vttUrl: r,
    title: n,
    controls: !0
  }
) });
Yc.propTypes = { ...ii };
function Xc({ contents: e = [] }) {
  return /* @__PURE__ */ d.jsx("div", { "data-testid": "market-text", children: e.map((t, r) => /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `mt-3 ${ln(t.cssClass)}`,
      dangerouslySetInnerHTML: zt(t.text)
    },
    `content-${r + 1}`
  )) });
}
Xc.propTypes = {
  contents: C.arrayOf(ja)
};
function Kc({ cards: e, defaultCards: t }) {
  var r, n, o, s, p, m, b, f, A, E, R, U;
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      className: "container",
      id: dt.nextSteps.targetIdName,
      "data-testid": "next-steps",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: "Next steps to attend ASU" }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              icon: ((r = e == null ? void 0 : e.learnMore) == null ? void 0 : r.icon) ?? t.learnMore.icon,
              title: ((n = e == null ? void 0 : e.learnMore) == null ? void 0 : n.title) ?? t.learnMore.title,
              body: ((o = e == null ? void 0 : e.learnMore) == null ? void 0 : o.content) ?? t.learnMore.content,
              buttons: [
                ((s = e == null ? void 0 : e.learnMore) == null ? void 0 : s.buttonLink) ?? t.learnMore.buttonLink
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
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
            ht,
            {
              icon: ((A = e == null ? void 0 : e.visit) == null ? void 0 : A.icon) ?? t.visit.icon,
              title: ((E = e == null ? void 0 : e.visit) == null ? void 0 : E.title) ?? t.visit.title,
              body: ((R = e == null ? void 0 : e.visit) == null ? void 0 : R.content) ?? t.visit.content,
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
  cards: C.shape({
    learnMore: qr,
    apply: qr,
    visit: qr
  }),
  defaultCards: C.shape({
    learnMore: qr,
    apply: qr,
    visit: qr
  })
};
function Qc({ content: e = "" }) {
  return /* @__PURE__ */ d.jsxs("section", { className: "container", "data-testid": "professional-licensure", children: [
    /* @__PURE__ */ d.jsx("h3", { children: "Professional licensure" }),
    /* @__PURE__ */ d.jsx("p", { dangerouslySetInnerHTML: zt(e) })
  ] });
}
Qc.propTypes = {
  content: C.node
};
const yo = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "main content",
  section: "Program contact information"
}, Rh = Ye.ul`
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
function Zc({ department: e, asuOfficeLoc: t, email: r, phone: n }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: dt.programContactInfo.targetIdName,
      "data-testid": "program-contact-info",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Program contact information" }) }),
        /* @__PURE__ */ d.jsx("p", { children: "If you have questions related to admission, please fill out the request information form above and an admission specialist will contact you directly. For questions regarding faculty or courses, please use the contact information below." }),
        /* @__PURE__ */ d.jsxs(Rh, { className: "text-maroon", children: [
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
                onClick: () => Nr({ ...yo, text: e.text }),
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
                onClick: () => Nr({ ...yo, text: r.text }),
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
                onClick: () => Nr({ ...yo, text: n }),
                children: n
              }
            )
          ] })
        ] })
      ]
    }
  );
}
Zc.propTypes = {
  department: Gr,
  asuOfficeLoc: C.string,
  email: Gr,
  phone: C.string
};
function zo({ content: e, stemOptText: t, programNotFound: r }) {
  return /* @__PURE__ */ d.jsxs("div", { "data-testid": "program-description", children: [
    /* @__PURE__ */ d.jsx("h2", { children: r ? "Program not found" : "Program description" }),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        "data-testid": "program-description-body",
        dangerouslySetInnerHTML: zt(e)
      }
    ),
    t && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("strong", { children: um }) }),
      /* @__PURE__ */ d.jsx(
        "div",
        {
          "data-testid": "stem-opt-text",
          dangerouslySetInnerHTML: zt(t)
        }
      )
    ] })
  ] });
}
zo.propTypes = {
  content: C.string,
  stemOptText: C.string,
  programNotFound: C.bool
};
const jh = "https://changemajor.apps.asu.edu/", Oh = "On-campus students", Nh = "Online students", Ph = "View major map -", Bs = "View major map";
function Jc({
  onlineMajorMapURL: e = "",
  majorMapOnCampusURL: t = "",
  subPlnMajorMaps: r = [],
  subPlns: n = []
}) {
  const o = (A) => {
    const E = n.find(
      (R) => R.acadSubPlanCode === A
    );
    return E ? E.description : "";
  }, s = (A, E, R) => {
    A && R.push({
      href: A,
      text: E
    });
  }, p = [], m = [];
  r.forEach((A) => {
    const E = o(A.acadSubPlanCode), R = `${Ph} ${E}`;
    s(A.url, R, p);
  }), t && s(t, Bs, p), e && s(e, Bs, m);
  const b = (A, E) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("h5", { children: A }),
    /* @__PURE__ */ d.jsx("ul", { className: "mb-3", children: E.map((R) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: R.href, children: R.text }) }, R.href)) })
  ] }), f = () => /* @__PURE__ */ d.jsxs("section", { className: "container ps-0", "data-testid": "required-course", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Required courses (major map)" }),
    p.length > 0 && b(Oh, p),
    m.length > 0 && b(Nh, m),
    /* @__PURE__ */ d.jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ d.jsx("strong", { children: "What if:" }),
      " See how your courses can be applied to another major and find out how to ",
      /* @__PURE__ */ d.jsx("a", { href: jh, children: "change your major" })
    ] })
  ] });
  return !(r != null && r.length) && !e && !t ? /* @__PURE__ */ d.jsx("div", {}) : f();
}
Jc.propTypes = {
  onlineMajorMapURL: C.string,
  majorMapOnCampusURL: C.string,
  subPlnMajorMaps: C.arrayOf(
    C.shape({
      campus: C.string,
      acadSubPlanCode: C.string,
      defaultFlag: C.bool,
      url: C.string
    })
  ),
  subPlns: C.arrayOf(
    C.shape({
      acadSubPlanCode: C.string,
      description: C.string
    })
  )
};
const eu = ({ sectionIntroText: e, cards: t, defaultCards: r }) => {
  var n, o, s, p, m, b, f, A, E, R, U, _, T, P, F, q, Y, z, S, oe, de, xe, Ne, Le, se, pe, _e, Ae, ve, Xe, Re, Ce, $e, ze, le, H, N, B, $, y, te, j;
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: dt.whyChooseAsu.targetIdName,
      className: "container",
      "data-testid": "why-choose-asu",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: "Why choose ASU" }),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            dangerouslySetInnerHTML: zt(e)
          }
        ),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((o = (n = t == null ? void 0 : t.faculty) == null ? void 0 : n.image) == null ? void 0 : o.url) ?? r.faculty.image.url,
              imageAltText: ((p = (s = t == null ? void 0 : t.faculty) == null ? void 0 : s.image) == null ? void 0 : p.altText) ?? r.faculty.image.altText,
              title: ((m = t == null ? void 0 : t.faculty) == null ? void 0 : m.title) ?? r.faculty.title,
              body: ((b = t == null ? void 0 : t.faculty) == null ? void 0 : b.text) ?? r.faculty.text,
              buttons: [((f = t == null ? void 0 : t.faculty) == null ? void 0 : f.button) ?? r.faculty.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((E = (A = t == null ? void 0 : t.programs) == null ? void 0 : A.image) == null ? void 0 : E.url) ?? r.programs.image.url,
              imageAltText: ((U = (R = t == null ? void 0 : t.programs) == null ? void 0 : R.image) == null ? void 0 : U.altText) ?? r.programs.image.altText,
              title: ((_ = t == null ? void 0 : t.programs) == null ? void 0 : _.title) ?? r.programs.title,
              body: ((T = t == null ? void 0 : t.programs) == null ? void 0 : T.text) ?? r.programs.text,
              buttons: [((P = t == null ? void 0 : t.programs) == null ? void 0 : P.button) ?? r.programs.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((q = (F = t == null ? void 0 : t.research) == null ? void 0 : F.image) == null ? void 0 : q.url) ?? r.research.image.url,
              imageAltText: ((z = (Y = t == null ? void 0 : t.research) == null ? void 0 : Y.image) == null ? void 0 : z.altText) ?? r.research.image.altText,
              title: ((S = t == null ? void 0 : t.research) == null ? void 0 : S.title) ?? r.research.title,
              body: ((oe = t == null ? void 0 : t.research) == null ? void 0 : oe.text) ?? r.research.text,
              buttons: [((de = t == null ? void 0 : t.research) == null ? void 0 : de.button) ?? r.research.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((Ne = (xe = t == null ? void 0 : t.inclusion) == null ? void 0 : xe.image) == null ? void 0 : Ne.url) ?? r.inclusion.image.url,
              imageAltText: ((se = (Le = t == null ? void 0 : t.inclusion) == null ? void 0 : Le.image) == null ? void 0 : se.altText) ?? r.inclusion.image.altText,
              title: ((pe = t == null ? void 0 : t.inclusion) == null ? void 0 : pe.title) ?? r.inclusion.title,
              body: ((_e = t == null ? void 0 : t.inclusion) == null ? void 0 : _e.text) ?? r.inclusion.text,
              buttons: [
                ((Ae = t == null ? void 0 : t.inclusion) == null ? void 0 : Ae.button) ?? r.inclusion.button
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((Xe = (ve = t == null ? void 0 : t.mentors) == null ? void 0 : ve.image) == null ? void 0 : Xe.url) ?? r.mentors.image.url,
              imageAltText: ((Ce = (Re = t == null ? void 0 : t.mentors) == null ? void 0 : Re.image) == null ? void 0 : Ce.altText) ?? r.mentors.image.altText,
              title: (($e = t == null ? void 0 : t.mentors) == null ? void 0 : $e.title) ?? r.mentors.title,
              body: ((ze = t == null ? void 0 : t.mentors) == null ? void 0 : ze.text) ?? r.mentors.text,
              buttons: [((le = t == null ? void 0 : t.mentors) == null ? void 0 : le.button) ?? r.mentors.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((N = (H = t == null ? void 0 : t.honors) == null ? void 0 : H.image) == null ? void 0 : N.url) ?? r.honors.image.url,
              imageAltText: (($ = (B = t == null ? void 0 : t.honors) == null ? void 0 : B.image) == null ? void 0 : $.altText) ?? r.honors.image.altText,
              title: ((y = t == null ? void 0 : t.honors) == null ? void 0 : y.title) ?? r.honors.title,
              body: ((te = t == null ? void 0 : t.honors) == null ? void 0 : te.text) ?? r.honors.text,
              buttons: [((j = t == null ? void 0 : t.honors) == null ? void 0 : j.button) ?? r.honors.button]
            }
          ) })
        ] })
      ]
    }
  );
};
eu.propTypes = ic;
const mi = ({
  appPathFolder: e,
  dataSource: t,
  anchorMenu: r,
  hero: n,
  introContent: o,
  atAGlance: s,
  applicationRequirements: p,
  changeMajorRequirements: m,
  affordingCollege: b,
  flexibleDegreeOptions: f,
  careerOutlook: A,
  exampleCareers: E,
  globalOpportunity: R,
  attendOnline: U,
  programContactInfo: _,
  nextSteps: T,
  whyChooseAsu: P
}) => {
  var _e, Ae, ve, Xe;
  const [{ data: F, loading: q, error: Y }, z] = Gl(), [S, oe] = ut(Xr({})), [de, xe] = ut({ accelerateData: [], concurrentData: [] }), Ne = bc(t, km), { defaultState: Le } = qt(dn), { detailPageDefault: se } = Le;
  At(() => {
    typeof window < "u" && Jl({
      packageName: "app-degree-pages",
      component: "DetailPage",
      type: "NA",
      configuration: {
        dataSource: t
      }
    });
  }, []), At(() => {
    z(Ne);
  }, [Ne]), At(() => {
    if (F) {
      const Re = Xr(F);
      oe(Re), Re.hasConcurrentOrAccelerateDegrees() && _m(
        [
          Re.getAccelerateDegrees(),
          Re.getConcurrentDegrees()
        ],
        xe
      );
    }
  }, [F]);
  const pe = Mm(r, S);
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(xc, {}),
    Y && /* @__PURE__ */ d.jsx(ec, { message: mc }),
    !(n != null && n.hide) && /* @__PURE__ */ d.jsx("section", { children: /* @__PURE__ */ d.jsx(
      zn,
      {
        image: (n == null ? void 0 : n.image) || se.hero.image,
        title: {
          ...se.hero.title,
          text: S.getMajorDesc(),
          ...n == null ? void 0 : n.title
        },
        contents: n == null ? void 0 : n.contents
      }
    ) }),
    !q && Fm(pe) && /* @__PURE__ */ d.jsx(gc, { anchorMenu: pe }),
    /* @__PURE__ */ d.jsxs(vc, { as: "div", "data-is-loading": q, className: "main-section", children: [
      q && /* @__PURE__ */ d.jsx(tc, {}),
      !q && (F != null && F.error ? /* @__PURE__ */ d.jsx("section", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        zo,
        {
          content: dm,
          programNotFound: !0
        }
      ) }) : /* @__PURE__ */ d.jsxs("section", { className: "container mt-4 mb-0", children: [
        (o == null ? void 0 : o.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "row col-12", children: /* @__PURE__ */ d.jsx(
          di,
          {
            breadcrumbs: o.breadcrumbs,
            section: n ? n.title.text : S.getMajorDesc()
          }
        ) }),
        /* @__PURE__ */ d.jsxs("div", { className: "row flex-column-reverse flex-sm-row", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-7 col-lg-7", children: [
            /* @__PURE__ */ d.jsxs("section", { className: "intro", children: [
              !S.isValidActiveProgram() && /* @__PURE__ */ d.jsx($c, { content: S.getAsuCustomText() }),
              !(o != null && o.hideMarketText) && ((o == null ? void 0 : o.contents) || S.getMarketText()) && /* @__PURE__ */ d.jsx(
                Xc,
                {
                  contents: (o == null ? void 0 : o.contents) || [
                    { text: S.getMarketText() }
                  ]
                }
              ),
              !(o != null && o.hideProgramDesc) && /* @__PURE__ */ d.jsx(
                zo,
                {
                  content: S.getFullDescription(),
                  stemOptText: S.getStemOptText()
                }
              )
            ] }),
            !(s != null && s.hide) && /* @__PURE__ */ d.jsx(
              Ic,
              {
                offeredBy: (s == null ? void 0 : s.offeredBy) || {
                  text: S.getCollegeDesc(),
                  url: S.getCollegeUrl()
                },
                locations: (s == null ? void 0 : s.locations) || Lm(S),
                firstRequirementMathCourse: (s == null ? void 0 : s.firstRequirementMathCourse) || S.getMinMathReq(),
                mathIntensity: (s == null ? void 0 : s.mathIntensity) || S.getMathIntensity(),
                stemOptText: S.hasStemOptText()
              }
            ),
            !(o != null && o.hideRequiredCourses) && !S.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
              Jc,
              {
                onlineMajorMapURL: S.getOnlineMajorMapURL(),
                majorMapOnCampusURL: S.getGeneralDegreeMajorMap(),
                subPlnMajorMaps: S.getSubPlnMajorMaps(),
                subPlns: S.getSubPln()
              }
            ),
            !(p != null && p.hide) && /* @__PURE__ */ d.jsx(
              Dc,
              {
                graduateRequirements: S.isGradProgram() ? S.getGraduateRequirements() : null,
                isMinorOrCertificate: S.isMinorOrCertificate(),
                minorRequirements: S.getMinorCourseRequirements(),
                additionalRequirements: S.getAdmissionsRequirementsText(),
                transferRequirements: S.getTransferAdmission(),
                majorMapURL: S.getGeneralDegreeMajorMap()
              }
            ),
            !(m != null && m.hide) && !S.isMinorOrCertificate() && !S.isGradProgram() && /* @__PURE__ */ d.jsx(Fc, { content: S.getChangeMajor() })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-5 col-lg-5", children: [
            (o == null ? void 0 : o.video) && /* @__PURE__ */ d.jsx(
              Yc,
              {
                type: o.video.type,
                url: o.video.url,
                vttUrl: o.video.vttUrl,
                title: o.video.title
              }
            ),
            !(o != null && o.video) && /* @__PURE__ */ d.jsx(
              Gc,
              {
                url: ((_e = o == null ? void 0 : o.image) == null ? void 0 : _e.url) || se.introContent.image.url,
                altText: ((Ae = o == null ? void 0 : o.image) == null ? void 0 : Ae.altText) || se.introContent.image.altText
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
          !(T != null && T.hide) && !S.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
            Kc,
            {
              cards: T == null ? void 0 : T.cards,
              defaultCards: se.nextSteps.cards
            }
          ),
          !(b != null && b.hide) && /* @__PURE__ */ d.jsx(bh, {}),
          !(f != null && f.hide) && S.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ d.jsx(
            Hc,
            {
              acceleratedLinks: Fs(
                de.accelerateData
              ),
              concurrentLinks: Fs(
                de.concurrentData
              )
            }
          ),
          !(A != null && A.hide) && S.getAsuCareerOpportunity() && /* @__PURE__ */ d.jsx(
            Mc,
            {
              image: (A == null ? void 0 : A.image) || se.careerOutlook.image,
              contents: [{ text: S.getAsuCareerOpportunity() }]
            }
          ),
          !(E != null && E.hide) && S.hasCareerData() && /* @__PURE__ */ d.jsx(
            Wc,
            {
              tableData: Tm(S.getCareerData())
            }
          ),
          S.getProfessionalLicensureText() && /* @__PURE__ */ d.jsx(
            Qc,
            {
              content: S.getProfessionalLicensureText()
            }
          ),
          !(R != null && R.hide) && S.getGlobalExp() && /* @__PURE__ */ d.jsx(
            Vc,
            {
              contents: [{ text: S.getGlobalExp() }],
              image: (R == null ? void 0 : R.image) || se.globalOpportunity.image
            }
          ),
          !(P != null && P.hide) && /* @__PURE__ */ d.jsx(
            eu,
            {
              sectionIntroText: (P == null ? void 0 : P.sectionIntroText) || se.whyChooseAsu.sectionIntroText,
              cards: P == null ? void 0 : P.cards,
              defaultCards: se.whyChooseAsu.cards
            }
          ),
          !(U != null && U.hide) && S.isOnline() && /* @__PURE__ */ d.jsx(
            Lc,
            {
              learnMoreLink: S.getCurriculumUrl(),
              image: (U == null ? void 0 : U.image) || se.attendOnline.image
            }
          )
        ] }),
        !(_ != null && _.hide) && /* @__PURE__ */ d.jsx("div", { className: "row", children: /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-6 col-lg-6 ", children: /* @__PURE__ */ d.jsx(
          Zc,
          {
            department: {
              text: S.getDepartmentName(),
              url: ((ve = _ == null ? void 0 : _.department) == null ? void 0 : ve.url) || S.getPlanUrl()
            },
            email: {
              text: S.getEmailAddress(),
              url: ((Xe = _ == null ? void 0 : _.email) == null ? void 0 : Xe.url) || S.getEmailAddress()
            },
            asuOfficeLoc: S.getAsuOfficeLoc(),
            phone: S.getPhone()
          }
        ) }) })
      ] }))
    ] })
  ] });
};
mi.propTypes = {
  appPathFolder: C.string,
  dataSource: ac,
  anchorMenu: C.shape(si),
  hero: C.shape(zn.propTypes),
  introContent: C.shape({
    hideMarketText: C.bool,
    hideProgramDesc: C.bool,
    hideRequiredCourses: C.bool,
    breadcrumbs: xa.arrayOf(Gr),
    // eslint-disable-next-line react/forbid-prop-types
    contents: xa.arrayOf(C.object),
    video: am,
    image: Sr
  }),
  atAGlance: C.shape({
    hide: C.bool,
    offeredBy: Gr,
    locations: xa.arrayOf(Gr),
    firstRequirementMathCourse: C.string,
    mathIntensity: C.string,
    timeCommitment: C.string
  }),
  applicationRequirements: C.shape({ hide: C.bool }),
  changeMajorRequirements: C.shape({ hide: C.bool }),
  affordingCollege: C.shape({ hide: C.bool }),
  flexibleDegreeOptions: C.shape({ hide: C.bool }),
  careerOutlook: C.shape({
    hide: C.bool,
    image: Sr
  }),
  exampleCareers: C.shape({ hide: C.bool }),
  globalOpportunity: C.shape({
    hide: C.bool,
    image: Sr
  }),
  attendOnline: C.shape({
    hide: C.bool,
    image: Sr
  }),
  programContactInfo: C.shape({
    hide: C.bool,
    department: C.string,
    email: C.string
  }),
  nextSteps: C.shape({
    hide: C.bool,
    cards: C.arrayOf(qr)
  }),
  whyChooseAsu: C.shape(ic)
};
const tu = (e) => /* @__PURE__ */ d.jsx(ui, { detailPageProps: e, children: /* @__PURE__ */ d.jsx(mi, { ...e }) });
tu.propTypes = mi.propTypes;
var ru, Ws = Ks;
ru = Ws.createRoot, Ws.hydrateRoot;
const nu = (e, t, r) => {
  const n = document.querySelector(r);
  ru(n).render(mt.createElement(e, t));
}, Lh = ({ targetSelector: e, props: t }) => {
  nu(Oc, t, e);
}, Mh = ({ targetSelector: e, props: t }) => {
  nu(tu, t, e);
};
export {
  tu as DetailPage,
  Oc as ListingPage,
  Lh as initListingPage,
  Mh as initProgramDetailPage
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
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
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
