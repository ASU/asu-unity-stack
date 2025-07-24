import mt, { Component as yu, createContext as Gs, forwardRef as Ys, useRef as nn, useImperativeHandle as xu, useId as vu, useContext as qt, createElement as Xs, useState as ut, useEffect as At, useLayoutEffect as wu, useMemo as Js, Fragment as Qs, createRef as Su } from "react";
import Zs from "react-dom";
function Wo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ks = { exports: {} }, wn = {};
var Li;
function ku() {
  if (Li) return wn;
  Li = 1;
  var e = mt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(f, b, m) {
    var A, E = {}, O = null, U = null;
    m !== void 0 && (O = "" + m), b.key !== void 0 && (O = "" + b.key), b.ref !== void 0 && (U = b.ref);
    for (A in b) n.call(b, A) && !s.hasOwnProperty(A) && (E[A] = b[A]);
    if (f && f.defaultProps) for (A in b = f.defaultProps, b) E[A] === void 0 && (E[A] = b[A]);
    return { $$typeof: t, type: f, key: O, ref: U, props: E, _owner: o.current };
  }
  return wn.Fragment = r, wn.jsx = p, wn.jsxs = p, wn;
}
Ks.exports = ku();
var d = Ks.exports;
function Ho(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var el = { exports: {} }, Sn = {}, Ii;
function Tu() {
  if (Ii) return Sn;
  Ii = 1;
  var e = mt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(f, b, m) {
    var A, E = {}, O = null, U = null;
    m !== void 0 && (O = "" + m), b.key !== void 0 && (O = "" + b.key), b.ref !== void 0 && (U = b.ref);
    for (A in b) n.call(b, A) && !s.hasOwnProperty(A) && (E[A] = b[A]);
    if (f && f.defaultProps) for (A in b = f.defaultProps, b) E[A] === void 0 && (E[A] = b[A]);
    return { $$typeof: t, type: f, key: O, ref: U, props: E, _owner: o.current };
  }
  return Sn.Fragment = r, Sn.jsx = p, Sn.jsxs = p, Sn;
}
el.exports = Tu();
var B = el.exports, tl = { exports: {} }, Ya, Di;
function Cu() {
  if (Di) return Ya;
  Di = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ya = e, Ya;
}
var Xa, Mi;
function Au() {
  if (Mi) return Xa;
  Mi = 1;
  var e = Cu();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Xa = function() {
    function n(p, f, b, m, A, E) {
      if (E !== e) {
        var O = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw O.name = "Invariant Violation", O;
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
  }, Xa;
}
tl.exports = Au()();
var Eu = tl.exports;
const l = /* @__PURE__ */ Ho(Eu), _u = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), Ja = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), rl = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.arrayOf(l.string),
    header: l.string,
    body: l.string
  })
}), Vo = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
function Ou(e) {
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
const Fi = (e, t, r) => e ? t : r, ju = (e) => (e || []).join(" "), {
  entries: nl,
  setPrototypeOf: $i,
  isFrozen: Nu,
  getPrototypeOf: Ru,
  getOwnPropertyDescriptor: Pu
} = Object;
let {
  freeze: Et,
  seal: $t,
  create: al
} = Object, {
  apply: wo,
  construct: So
} = typeof Reflect < "u" && Reflect;
Et || (Et = function(e) {
  return e;
});
$t || ($t = function(e) {
  return e;
});
wo || (wo = function(e, t, r) {
  return e.apply(t, r);
});
So || (So = function(e, t) {
  return new e(...t);
});
const ca = _t(Array.prototype.forEach), Lu = _t(Array.prototype.lastIndexOf), Ui = _t(Array.prototype.pop), kn = _t(Array.prototype.push), Iu = _t(Array.prototype.splice), ya = _t(String.prototype.toLowerCase), Qa = _t(String.prototype.toString), zi = _t(String.prototype.match), Tn = _t(String.prototype.replace), Du = _t(String.prototype.indexOf), Mu = _t(String.prototype.trim), tr = _t(Object.prototype.hasOwnProperty), Tt = _t(RegExp.prototype.test), Cn = Fu(TypeError);
function _t(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    return wo(e, t, n);
  };
}
function Fu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return So(e, r);
  };
}
function Me(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ya;
  $i && $i(e, null);
  let n = t.length;
  for (; n--; ) {
    let o = t[n];
    if (typeof o == "string") {
      const s = r(o);
      s !== o && (Nu(t) || (t[n] = s), o = s);
    }
    e[o] = !0;
  }
  return e;
}
function $u(e) {
  for (let t = 0; t < e.length; t++)
    tr(e, t) || (e[t] = null);
  return e;
}
function Ur(e) {
  const t = al(null);
  for (const [r, n] of nl(e))
    tr(e, r) && (Array.isArray(n) ? t[r] = $u(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = Ur(n) : t[r] = n);
  return t;
}
function An(e, t) {
  for (; e !== null; ) {
    const n = Pu(e, t);
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
const qi = Et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Za = Et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ka = Et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Uu = Et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), eo = Et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), zu = Et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Bi = Et(["#text"]), Wi = Et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), to = Et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Hi = Et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ua = Et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), qu = $t(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Bu = $t(/<%[\w\W]*|[\w\W]*%>/gm), Wu = $t(/\$\{[\w\W]*/gm), Hu = $t(/^data-[\-\w.\u00B7-\uFFFF]+$/), Vu = $t(/^aria-[\-\w]+$/), ol = $t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Gu = $t(/^(?:\w+script|data):/i), Yu = $t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), il = $t(/^html$/i), Xu = $t(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Vi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Vu,
  ATTR_WHITESPACE: Yu,
  CUSTOM_ELEMENT: Xu,
  DATA_ATTR: Hu,
  DOCTYPE_NAME: il,
  ERB_EXPR: Bu,
  IS_ALLOWED_URI: ol,
  IS_SCRIPT_OR_DATA: Gu,
  MUSTACHE_EXPR: qu,
  TMPLIT_EXPR: Wu
});
const En = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Ju = function() {
  return typeof window > "u" ? null : window;
}, Qu = function(e, t) {
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
}, Gi = function() {
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
function sl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ju();
  const t = (x) => sl(x);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== En.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, o = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: p,
    Node: f,
    Element: b,
    NodeFilter: m,
    NamedNodeMap: A = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: O,
    trustedTypes: U
  } = e, _ = b.prototype, C = An(_, "cloneNode"), P = An(_, "remove"), F = An(_, "nextSibling"), q = An(_, "childNodes"), Y = An(_, "parentNode");
  if (typeof p == "function") {
    const x = r.createElement("template");
    x.content && x.content.ownerDocument && (r = x.content.ownerDocument);
  }
  let z, S = "";
  const {
    implementation: oe,
    createNodeIterator: de,
    createDocumentFragment: xe,
    getElementsByTagName: Re
  } = r, {
    importNode: De
  } = n;
  let se = Gi();
  t.isSupported = typeof nl == "function" && typeof Y == "function" && oe && oe.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: _e,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: ve,
    ARIA_ATTR: Xe,
    IS_SCRIPT_OR_DATA: Oe,
    ATTR_WHITESPACE: Ce,
    CUSTOM_ELEMENT: $e
  } = Vi;
  let {
    IS_ALLOWED_URI: ze
  } = Vi, le = null;
  const H = Me({}, [...qi, ...Za, ...Ka, ...eo, ...Bi]);
  let R = null;
  const W = Me({}, [...Wi, ...to, ...Hi, ...ua]);
  let $ = Object.seal(al(null, {
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
  let we = !0, J = !1, ue = {}, Ze = null;
  const gt = Me({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qe = null;
  const ar = Me({}, ["audio", "video", "img", "source", "image", "track"]);
  let Mt = null;
  const pr = Me({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", yt = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml";
  let bt = it, Bt = !1, Wt = null;
  const Pr = Me({}, [wt, yt, it], Qa);
  let lt = Me({}, ["mi", "mo", "mn", "ms", "mtext"]), St = Me({}, ["annotation-xml"]);
  const or = Me({}, ["title", "style", "font", "a", "script"]);
  let Le = null;
  const Ht = ["application/xhtml+xml", "text/html"], ir = "text/html";
  let Te = null, nt = null;
  const sr = r.createElement("form"), kt = function(x) {
    return x instanceof RegExp || x instanceof Function;
  }, Ft = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(nt && nt === x)) {
      if ((!x || typeof x != "object") && (x = {}), x = Ur(x), Le = // eslint-disable-next-line unicorn/prefer-includes
      Ht.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? ir : x.PARSER_MEDIA_TYPE, Te = Le === "application/xhtml+xml" ? Qa : ya, le = tr(x, "ALLOWED_TAGS") ? Me({}, x.ALLOWED_TAGS, Te) : H, R = tr(x, "ALLOWED_ATTR") ? Me({}, x.ALLOWED_ATTR, Te) : W, Wt = tr(x, "ALLOWED_NAMESPACES") ? Me({}, x.ALLOWED_NAMESPACES, Qa) : Pr, Mt = tr(x, "ADD_URI_SAFE_ATTR") ? Me(Ur(pr), x.ADD_URI_SAFE_ATTR, Te) : pr, qe = tr(x, "ADD_DATA_URI_TAGS") ? Me(Ur(ar), x.ADD_DATA_URI_TAGS, Te) : ar, Ze = tr(x, "FORBID_CONTENTS") ? Me({}, x.FORBID_CONTENTS, Te) : gt, y = tr(x, "FORBID_TAGS") ? Me({}, x.FORBID_TAGS, Te) : {}, te = tr(x, "FORBID_ATTR") ? Me({}, x.FORBID_ATTR, Te) : {}, ue = tr(x, "USE_PROFILES") ? x.USE_PROFILES : !1, j = x.ALLOW_ARIA_ATTR !== !1, ie = x.ALLOW_DATA_ATTR !== !1, ee = x.ALLOW_UNKNOWN_PROTOCOLS || !1, re = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, X = x.SAFE_FOR_TEMPLATES || !1, ce = x.SAFE_FOR_XML !== !1, fe = x.WHOLE_DOCUMENT || !1, ne = x.RETURN_DOM || !1, me = x.RETURN_DOM_FRAGMENT || !1, He = x.RETURN_TRUSTED_TYPE || !1, be = x.FORCE_BODY || !1, ye = x.SANITIZE_DOM !== !1, ft = x.SANITIZE_NAMED_PROPS || !1, we = x.KEEP_CONTENT !== !1, J = x.IN_PLACE || !1, ze = x.ALLOWED_URI_REGEXP || ol, bt = x.NAMESPACE || it, lt = x.MATHML_TEXT_INTEGRATION_POINTS || lt, St = x.HTML_INTEGRATION_POINTS || St, $ = x.CUSTOM_ELEMENT_HANDLING || {}, x.CUSTOM_ELEMENT_HANDLING && kt(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && ($.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && kt(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && ($.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && ($.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), X && (ie = !1), me && (ne = !0), ue && (le = Me({}, Bi), R = [], ue.html === !0 && (Me(le, qi), Me(R, Wi)), ue.svg === !0 && (Me(le, Za), Me(R, to), Me(R, ua)), ue.svgFilters === !0 && (Me(le, Ka), Me(R, to), Me(R, ua)), ue.mathMl === !0 && (Me(le, eo), Me(R, Hi), Me(R, ua))), x.ADD_TAGS && (le === H && (le = Ur(le)), Me(le, x.ADD_TAGS, Te)), x.ADD_ATTR && (R === W && (R = Ur(R)), Me(R, x.ADD_ATTR, Te)), x.ADD_URI_SAFE_ATTR && Me(Mt, x.ADD_URI_SAFE_ATTR, Te), x.FORBID_CONTENTS && (Ze === gt && (Ze = Ur(Ze)), Me(Ze, x.FORBID_CONTENTS, Te)), we && (le["#text"] = !0), fe && Me(le, ["html", "head", "body"]), le.table && (Me(le, ["tbody"]), delete y.tbody), x.TRUSTED_TYPES_POLICY) {
        if (typeof x.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof x.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        z = x.TRUSTED_TYPES_POLICY, S = z.createHTML("");
      } else
        z === void 0 && (z = Qu(U, o)), z !== null && typeof S == "string" && (S = z.createHTML(""));
      Et && Et(x), nt = x;
    }
  }, Vt = Me({}, [...Za, ...Ka, ...Uu]), Gt = Me({}, [...eo, ...zu]), Ar = function(x) {
    let w = Y(x);
    (!w || !w.tagName) && (w = {
      namespaceURI: bt,
      tagName: "template"
    });
    const N = ya(x.tagName), Q = ya(w.tagName);
    return Wt[x.namespaceURI] ? x.namespaceURI === yt ? w.namespaceURI === it ? N === "svg" : w.namespaceURI === wt ? N === "svg" && (Q === "annotation-xml" || lt[Q]) : !!Vt[N] : x.namespaceURI === wt ? w.namespaceURI === it ? N === "math" : w.namespaceURI === yt ? N === "math" && St[Q] : !!Gt[N] : x.namespaceURI === it ? w.namespaceURI === yt && !St[Q] || w.namespaceURI === wt && !lt[Q] ? !1 : !Gt[N] && (or[N] || !Vt[N]) : !!(Le === "application/xhtml+xml" && Wt[x.namespaceURI]) : !1;
  }, st = function(x) {
    kn(t.removed, {
      element: x
    });
    try {
      Y(x).removeChild(x);
    } catch {
      P(x);
    }
  }, Nt = function(x, w) {
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
    let w = null, N = null;
    if (be)
      x = "<remove></remove>" + x;
    else {
      const je = zi(x, /^[\r\n\t ]+/);
      N = je && je[0];
    }
    Le === "application/xhtml+xml" && bt === it && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
    const Q = z ? z.createHTML(x) : x;
    if (bt === it)
      try {
        w = new O().parseFromString(Q, Le);
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
    return x && N && Se.insertBefore(r.createTextNode(N), Se.childNodes[0] || null), bt === it ? Re.call(w, fe ? "html" : "body")[0] : fe ? w.documentElement : Se;
  }, mr = function(x) {
    return de.call(
      x.ownerDocument || x,
      x,
      // eslint-disable-next-line no-bitwise
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null
    );
  }, Rt = function(x) {
    return x instanceof E && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof A) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
  }, lr = function(x) {
    return typeof f == "function" && x instanceof f;
  };
  function Ke(x, w, N) {
    ca(x, (Q) => {
      Q.call(t, w, N, nt);
    });
  }
  const Yt = function(x) {
    let w = null;
    if (Ke(se.beforeSanitizeElements, x, null), Rt(x))
      return st(x), !0;
    const N = Te(x.nodeName);
    if (Ke(se.uponSanitizeElement, x, {
      tagName: N,
      allowedTags: le
    }), x.hasChildNodes() && !lr(x.firstElementChild) && Tt(/<[/\w]/g, x.innerHTML) && Tt(/<[/\w]/g, x.textContent) || x.nodeType === En.progressingInstruction || ce && x.nodeType === En.comment && Tt(/<[/\w]/g, x.data))
      return st(x), !0;
    if (!le[N] || y[N]) {
      if (!y[N] && Pt(N) && ($.tagNameCheck instanceof RegExp && Tt($.tagNameCheck, N) || $.tagNameCheck instanceof Function && $.tagNameCheck(N)))
        return !1;
      if (we && !Ze[N]) {
        const Q = Y(x) || x.parentNode, Se = q(x) || x.childNodes;
        if (Se && Q) {
          const je = Se.length;
          for (let Ue = je - 1; Ue >= 0; --Ue) {
            const Ee = C(Se[Ue], !0);
            Ee.__removalCount = (x.__removalCount || 0) + 1, Q.insertBefore(Ee, F(x));
          }
        }
      }
      return st(x), !0;
    }
    return x instanceof b && !Ar(x) || (N === "noscript" || N === "noembed" || N === "noframes") && Tt(/<\/no(script|embed|frames)/i, x.innerHTML) ? (st(x), !0) : (X && x.nodeType === En.text && (w = x.textContent, ca([pe, _e, Ae], (Q) => {
      w = Tn(w, Q, " ");
    }), x.textContent !== w && (kn(t.removed, {
      element: x.cloneNode()
    }), x.textContent = w)), Ke(se.afterSanitizeElements, x, null), !1);
  }, hr = function(x, w, N) {
    if (ye && (w === "id" || w === "name") && (N in r || N in sr))
      return !1;
    if (!(ie && !te[w] && Tt(ve, w)) && !(j && Tt(Xe, w))) {
      if (!R[w] || te[w]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Pt(x) && ($.tagNameCheck instanceof RegExp && Tt($.tagNameCheck, x) || $.tagNameCheck instanceof Function && $.tagNameCheck(x)) && ($.attributeNameCheck instanceof RegExp && Tt($.attributeNameCheck, w) || $.attributeNameCheck instanceof Function && $.attributeNameCheck(w)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          w === "is" && $.allowCustomizedBuiltInElements && ($.tagNameCheck instanceof RegExp && Tt($.tagNameCheck, N) || $.tagNameCheck instanceof Function && $.tagNameCheck(N)))
        ) return !1;
      } else if (!Mt[w] && !Tt(ze, Tn(N, Ce, "")) && !((w === "src" || w === "xlink:href" || w === "href") && x !== "script" && Du(N, "data:") === 0 && qe[x]) && !(ee && !Tt(Oe, Tn(N, Ce, ""))) && N)
        return !1;
    }
    return !0;
  }, Pt = function(x) {
    return x !== "annotation-xml" && zi(x, $e);
  }, gr = function(x) {
    Ke(se.beforeSanitizeAttributes, x, null);
    const {
      attributes: w
    } = x;
    if (!w || Rt(x))
      return;
    const N = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: R,
      forceKeepAttr: void 0
    };
    let Q = w.length;
    for (; Q--; ) {
      const Se = w[Q], {
        name: je,
        namespaceURI: Ue,
        value: Ee
      } = Se, et = Te(je);
      let Je = je === "value" ? Ee : Mu(Ee);
      if (N.attrName = et, N.attrValue = Je, N.keepAttr = !0, N.forceKeepAttr = void 0, Ke(se.uponSanitizeAttribute, x, N), Je = N.attrValue, ft && (et === "id" || et === "name") && (Nt(je, x), Je = Qe + Je), ce && Tt(/((--!?|])>)|<\/(style|title)/i, Je)) {
        Nt(je, x);
        continue;
      }
      if (N.forceKeepAttr || (Nt(je, x), !N.keepAttr))
        continue;
      if (!re && Tt(/\/>/i, Je)) {
        Nt(je, x);
        continue;
      }
      X && ca([pe, _e, Ae], (yr) => {
        Je = Tn(Je, yr, " ");
      });
      const at = Te(x.nodeName);
      if (hr(at, et, Je)) {
        if (z && typeof U == "object" && typeof U.getAttributeType == "function" && !Ue)
          switch (U.getAttributeType(at, et)) {
            case "TrustedHTML": {
              Je = z.createHTML(Je);
              break;
            }
            case "TrustedScriptURL": {
              Je = z.createScriptURL(Je);
              break;
            }
          }
        try {
          Ue ? x.setAttributeNS(Ue, je, Je) : x.setAttribute(je, Je), Rt(x) ? st(x) : Ui(t.removed);
        } catch {
        }
      }
    }
    Ke(se.afterSanitizeAttributes, x, null);
  }, br = function x(w) {
    let N = null;
    const Q = mr(w);
    for (Ke(se.beforeSanitizeShadowDOM, w, null); N = Q.nextNode(); )
      Ke(se.uponSanitizeShadowNode, N, null), Yt(N), gr(N), N.content instanceof s && x(N.content);
    Ke(se.afterSanitizeShadowDOM, w, null);
  };
  return t.sanitize = function(x) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, Q = null, Se = null, je = null;
    if (Bt = !x, Bt && (x = "<!-->"), typeof x != "string" && !lr(x))
      if (typeof x.toString == "function") {
        if (x = x.toString(), typeof x != "string")
          throw Cn("dirty is not a string, aborting");
      } else
        throw Cn("toString is not a function");
    if (!t.isSupported)
      return x;
    if (ae || Ft(w), t.removed = [], typeof x == "string" && (J = !1), J) {
      if (x.nodeName) {
        const et = Te(x.nodeName);
        if (!le[et] || y[et])
          throw Cn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (x instanceof f)
      N = fr("<!---->"), Q = N.ownerDocument.importNode(x, !0), Q.nodeType === En.element && Q.nodeName === "BODY" || Q.nodeName === "HTML" ? N = Q : N.appendChild(Q);
    else {
      if (!ne && !X && !fe && // eslint-disable-next-line unicorn/prefer-includes
      x.indexOf("<") === -1)
        return z && He ? z.createHTML(x) : x;
      if (N = fr(x), !N)
        return ne ? null : He ? S : "";
    }
    N && be && st(N.firstChild);
    const Ue = mr(J ? x : N);
    for (; Se = Ue.nextNode(); )
      Yt(Se), gr(Se), Se.content instanceof s && br(Se.content);
    if (J)
      return x;
    if (ne) {
      if (me)
        for (je = xe.call(N.ownerDocument); N.firstChild; )
          je.appendChild(N.firstChild);
      else
        je = N;
      return (R.shadowroot || R.shadowrootmode) && (je = De.call(n, je, !0)), je;
    }
    let Ee = fe ? N.outerHTML : N.innerHTML;
    return fe && le["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && Tt(il, N.ownerDocument.doctype.name) && (Ee = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + Ee), X && ca([pe, _e, Ae], (et) => {
      Ee = Tn(Ee, et, " ");
    }), z && He ? z.createHTML(Ee) : Ee;
  }, t.setConfig = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ft(x), ae = !0;
  }, t.clearConfig = function() {
    nt = null, ae = !1;
  }, t.isValidAttribute = function(x, w, N) {
    nt || Ft({});
    const Q = Te(x), Se = Te(w);
    return hr(Q, Se, N);
  }, t.addHook = function(x, w) {
    typeof w == "function" && kn(se[x], w);
  }, t.removeHook = function(x, w) {
    if (w !== void 0) {
      const N = Lu(se[x], w);
      return N === -1 ? void 0 : Iu(se[x], N, 1)[0];
    }
    return Ui(se[x]);
  }, t.removeHooks = function(x) {
    se[x] = [];
  }, t.removeAllHooks = function() {
    se = Gi();
  }, t;
}
var Zu = sl();
function Ku(e) {
  return (e ? document.querySelector(e) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
const Wr = (e) => ({ __html: Zu.sanitize(e) }), Yi = (e, t, r) => {
  let n = e;
  const o = [];
  for (; n < t; )
    n > 0 && n <= r && o.push(n), n += 1;
  return o;
};
let ro = !1;
const ed = (e, t) => {
  ro || (ro = !0, setTimeout(() => {
    e(), ro = !1;
  }, t));
};
let Xi;
const td = (e, t) => {
  window.clearTimeout(Xi), Xi = window.setTimeout(e, t);
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
const ll = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: o = "",
  text: s = "",
  region: p = "",
  component: f = ""
}) => {
  const { dataLayer: b } = window, m = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: p.toLowerCase(),
    section: o.toLowerCase(),
    text: s.toLowerCase(),
    component: f.toLowerCase()
  };
  b && b.push(m);
}, Un = ({ children: e }) => /* @__PURE__ */ B.jsx(B.Fragment, { children: e });
Un.propTypes = {
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node,
    l.string
  ])
};
var cl = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", p = 0; p < arguments.length; p++) {
        var f = arguments[p];
        f && (s = o(s, n(f)));
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
      for (var f in s)
        t.call(s, f) && s[f] && (p = o(p, f));
      return p;
    }
    function o(s, p) {
      return p ? s ? s + " " + p : s + p : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(cl);
var rd = cl.exports;
const ct = /* @__PURE__ */ Ho(rd);
({
  ...Un.propTypes
});
const ul = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ B.jsx("div", { className: t, ...r, children: /* @__PURE__ */ B.jsx("div", { className: "row", children: e }) });
ul.propTypes = {
  children: Un.propTypes.children
};
({
  ...ul.propTypes
});
Un.propTypes.children, l.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Un.propTypes.children;
var $r = {}, Ji;
function nd() {
  if (Ji) return $r;
  Ji = 1;
  var e = mt;
  function t(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, g = 1; g < arguments.length; g++) u += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, o = {}, s = {};
  function p(a) {
    return r.call(s, a) ? !0 : r.call(o, a) ? !1 : n.test(a) ? s[a] = !0 : (o[a] = !0, !1);
  }
  function f(a, u, g, k, M, L, V) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = k, this.attributeNamespace = M, this.mustUseProperty = g, this.propertyName = a, this.type = u, this.sanitizeURL = L, this.removeEmptyString = V;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    b[a] = new f(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    b[u] = new f(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    b[a] = new f(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    b[a] = new f(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    b[a] = new f(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    b[a] = new f(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    b[a] = new f(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    b[a] = new f(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    b[a] = new f(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var m = /[\-:]([a-z])/g;
  function A(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      m,
      A
    );
    b[u] = new f(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(m, A);
    b[u] = new f(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(m, A);
    b[u] = new f(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    b[a] = new f(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new f("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    b[a] = new f(a, 1, !1, a.toLowerCase(), null, !0, !0);
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
  }, O = ["Webkit", "ms", "Moz", "O"];
  Object.keys(E).forEach(function(a) {
    O.forEach(function(u) {
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
  var C = /([A-Z])/g, P = /^ms-/, F = Array.isArray;
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
          var L = _(k);
          M = _(("" + M).trim());
        } else {
          L = k;
          var V = z.get(L);
          V !== void 0 || (V = _(L.replace(C, "-$1").toLowerCase().replace(P, "-ms-")), z.set(L, V)), L = V, M = typeof M == "number" ? M === 0 || r.call(E, k) ? "" + M : M + "px" : _(("" + M).trim());
        }
        u ? (u = !1, a.push(' style="', L, ":", M)) : a.push(";", L, ":", M);
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
  function Re(a, u, g, k) {
    a.push(pe(g));
    var M = g = null, L;
    for (L in u) if (r.call(u, L)) {
      var V = u[L];
      if (V != null) switch (L) {
        case "children":
          g = V;
          break;
        case "dangerouslySetInnerHTML":
          M = V;
          break;
        default:
          oe(a, k, L, V);
      }
    }
    return a.push(">"), de(a, M, g), typeof g == "string" ? (a.push(_(g)), null) : g;
  }
  var De = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, se = /* @__PURE__ */ new Map();
  function pe(a) {
    var u = se.get(a);
    if (u === void 0) {
      if (!De.test(a)) throw Error(t(65, a));
      u = "<" + a, se.set(a, u);
    }
    return u;
  }
  function _e(a, u, g, k, M) {
    switch (u) {
      case "select":
        a.push(pe("select"));
        var L = null, V = null;
        for (Ne in g) if (r.call(g, Ne)) {
          var K = g[Ne];
          if (K != null) switch (Ne) {
            case "children":
              L = K;
              break;
            case "dangerouslySetInnerHTML":
              V = K;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              oe(a, k, Ne, K);
          }
        }
        return a.push(">"), de(a, V, L), L;
      case "option":
        V = M.selectedValue, a.push(pe("option"));
        var he = K = null, ke = null, Ne = null;
        for (L in g) if (r.call(g, L)) {
          var ot = g[L];
          if (ot != null) switch (L) {
            case "children":
              K = ot;
              break;
            case "selected":
              ke = ot;
              break;
            case "dangerouslySetInnerHTML":
              Ne = ot;
              break;
            case "value":
              he = ot;
            default:
              oe(a, k, L, ot);
          }
        }
        if (V != null) if (g = he !== null ? "" + he : xe(K), F(V)) {
          for (k = 0; k < V.length; k++)
            if ("" + V[k] === g) {
              a.push(' selected=""');
              break;
            }
        } else "" + V === g && a.push(' selected=""');
        else ke && a.push(' selected=""');
        return a.push(">"), de(a, Ne, K), K;
      case "textarea":
        a.push(pe("textarea")), Ne = V = L = null;
        for (K in g) if (r.call(g, K) && (he = g[K], he != null)) switch (K) {
          case "children":
            Ne = he;
            break;
          case "value":
            L = he;
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
              K,
              he
            );
        }
        if (L === null && V !== null && (L = V), a.push(">"), Ne != null) {
          if (L != null) throw Error(t(92));
          if (F(Ne) && 1 < Ne.length) throw Error(t(93));
          L = "" + Ne;
        }
        return typeof L == "string" && L[0] === `
` && a.push(`
`), L !== null && a.push(_("" + L)), null;
      case "input":
        a.push(pe("input")), he = Ne = K = L = null;
        for (V in g) if (r.call(g, V) && (ke = g[V], ke != null)) switch (V) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            he = ke;
            break;
          case "defaultValue":
            K = ke;
            break;
          case "checked":
            Ne = ke;
            break;
          case "value":
            L = ke;
            break;
          default:
            oe(a, k, V, ke);
        }
        return Ne !== null ? oe(a, k, "checked", Ne) : he !== null && oe(a, k, "checked", he), L !== null ? oe(a, k, "value", L) : K !== null && oe(a, k, "value", K), a.push("/>"), null;
      case "menuitem":
        a.push(pe("menuitem"));
        for (var Jt in g) if (r.call(g, Jt) && (L = g[Jt], L != null)) switch (Jt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            oe(a, k, Jt, L);
        }
        return a.push(">"), null;
      case "title":
        a.push(pe("title")), L = null;
        for (ot in g) if (r.call(g, ot) && (V = g[ot], V != null)) switch (ot) {
          case "children":
            L = V;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            oe(a, k, ot, V);
        }
        return a.push(">"), L;
      case "listing":
      case "pre":
        a.push(pe(u)), V = L = null;
        for (he in g) if (r.call(g, he) && (K = g[he], K != null)) switch (he) {
          case "children":
            L = K;
            break;
          case "dangerouslySetInnerHTML":
            V = K;
            break;
          default:
            oe(a, k, he, K);
        }
        if (a.push(">"), V != null) {
          if (L != null) throw Error(t(60));
          if (typeof V != "object" || !("__html" in V)) throw Error(t(61));
          g = V.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? a.push(`
`, g) : a.push("" + g));
        }
        return typeof L == "string" && L[0] === `
` && a.push(`
`), L;
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
        for (var Qt in g) if (r.call(g, Qt) && (L = g[Qt], L != null)) switch (Qt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            oe(a, k, Qt, L);
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
        return Re(
          a,
          g,
          u,
          k
        );
      case "html":
        return M.insertionMode === 0 && a.push("<!DOCTYPE html>"), Re(a, g, u, k);
      default:
        if (u.indexOf("-") === -1 && typeof g.is != "string") return Re(a, g, u, k);
        a.push(pe(u)), V = L = null;
        for (ke in g) if (r.call(g, ke) && (K = g[ke], K != null)) switch (ke) {
          case "children":
            L = K;
            break;
          case "dangerouslySetInnerHTML":
            V = K;
            break;
          case "style":
            S(a, k, K);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            p(ke) && typeof K != "function" && typeof K != "symbol" && a.push(" ", ke, '="', _(K), '"');
        }
        return a.push(">"), de(a, V, L), L;
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
  var Oe = /[<\u2028\u2029]/g;
  function Ce(a) {
    return JSON.stringify(a).replace(Oe, function(u) {
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
  var le = Object.assign, H = Symbol.for("react.element"), R = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), j = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), fe = Symbol.for("react.scope"), ae = Symbol.for("react.debug_trace_mode"), be = Symbol.for("react.legacy_hidden"), ne = Symbol.for("react.default_value"), me = Symbol.iterator;
  function He(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case W:
        return "Fragment";
      case R:
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
  function J(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && J(a);
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
    u !== a && (u === null ? ue(a) : a === null ? J(u) : u.depth === a.depth ? we(u, a) : u.depth > a.depth ? Ze(u, a) : gt(u, a), Qe = a);
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
    var L = { queue: [], replace: !1 };
    a._reactInternals = L;
    var V = u.contextType;
    if (a.context = typeof V == "object" && V !== null ? V._currentValue2 : k, V = u.getDerivedStateFromProps, typeof V == "function" && (V = V(g, M), M = V == null ? M : le({}, M, V), a.state = M), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && ar.enqueueReplaceState(a, a.state, null), L.queue !== null && 0 < L.queue.length) if (u = L.queue, V = L.replace, L.queue = null, L.replace = !1, V && u.length === 1) a.state = u[0];
    else {
      for (L = V ? u[0] : a.state, M = !0, V = V ? 1 : 0; V < u.length; V++) {
        var K = u[V];
        K = typeof K == "function" ? K.call(a, L, g, k) : K, K != null && (M ? (M = !1, L = le({}, L, K)) : le(L, K));
      }
      a.state = L;
    }
    else L.queue = null;
  }
  var pr = { id: 1, overflow: "" };
  function wt(a, u, g) {
    var k = a.id;
    a = a.overflow;
    var M = 32 - yt(k) - 1;
    k &= ~(1 << M), g += 1;
    var L = 32 - yt(u) + M;
    if (30 < L) {
      var V = M - M % 5;
      return L = (k & (1 << V) - 1).toString(32), k >>= V, M -= V, { id: 1 << 32 - yt(u) + M | g << M | k, overflow: L + a };
    }
    return { id: 1 << L | g << M | k, overflow: a };
  }
  var yt = Math.clz32 ? Math.clz32 : Bt, it = Math.log, bt = Math.LN2;
  function Bt(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (it(a) / bt | 0) | 0;
  }
  function Wt(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var Pr = typeof Object.is == "function" ? Object.is : Wt, lt = null, St = null, or = null, Le = null, Ht = !1, ir = !1, Te = 0, nt = null, sr = 0;
  function kt() {
    if (lt === null) throw Error(t(321));
    return lt;
  }
  function Ft() {
    if (0 < sr) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Vt() {
    return Le === null ? or === null ? (Ht = !1, or = Le = Ft()) : (Ht = !0, Le = or) : Le.next === null ? (Ht = !1, Le = Le.next = Ft()) : (Ht = !0, Le = Le.next), Le;
  }
  function Gt() {
    St = lt = null, ir = !1, or = null, sr = 0, Le = nt = null;
  }
  function Ar(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function st(a, u, g) {
    if (lt = kt(), Le = Vt(), Ht) {
      var k = Le.queue;
      if (u = k.dispatch, nt !== null && (g = nt.get(k), g !== void 0)) {
        nt.delete(k), k = Le.memoizedState;
        do
          k = a(k, g.action), g = g.next;
        while (g !== null);
        return Le.memoizedState = k, [k, u];
      }
      return [Le.memoizedState, u];
    }
    return a = a === Ar ? typeof u == "function" ? u() : u : g !== void 0 ? g(u) : u, Le.memoizedState = a, a = Le.queue = { last: null, dispatch: null }, a = a.dispatch = fr.bind(null, lt, a), [Le.memoizedState, a];
  }
  function Nt(a, u) {
    if (lt = kt(), Le = Vt(), u = u === void 0 ? null : u, Le !== null) {
      var g = Le.memoizedState;
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
    return a = a(), Le.memoizedState = [a, u], a;
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
  function Rt() {
  }
  var lr = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    return kt(), a._currentValue2;
  }, useMemo: Nt, useReducer: st, useRef: function(a) {
    lt = kt(), Le = Vt();
    var u = Le.memoizedState;
    return u === null ? (a = { current: a }, Le.memoizedState = a) : u;
  }, useState: function(a) {
    return st(Ar, a);
  }, useInsertionEffect: Rt, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return Nt(function() {
      return a;
    }, u);
  }, useImperativeHandle: Rt, useEffect: Rt, useDebugValue: Rt, useDeferredValue: function(a) {
    return kt(), a;
  }, useTransition: function() {
    return kt(), [
      !1,
      mr
    ];
  }, useId: function() {
    var a = St.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - yt(a) - 1)).toString(32) + u;
    var g = Ke;
    if (g === null) throw Error(t(404));
    return u = Te++, a = ":" + g.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return kt(), u(a._source);
  }, useSyncExternalStore: function(a, u, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, Ke = null, Yt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function hr(a) {
    return console.error(a), null;
  }
  function Pt() {
  }
  function gr(a, u, g, k, M, L, V, K, he) {
    var ke = [], Ne = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: k, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ne, pingedTasks: ke, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: M === void 0 ? hr : M, onAllReady: Pt, onShellReady: V === void 0 ? Pt : V, onShellError: Pt, onFatalError: Pt }, g = x(u, 0, null, g, !1, !1), g.parentFlushed = !0, a = br(u, a, null, g, Ne, ye, null, pr), ke.push(a), u;
  }
  function br(a, u, g, k, M, L, V, K) {
    a.allPendingTasks++, g === null ? a.pendingRootTasks++ : g.pendingTasks++;
    var he = { node: u, ping: function() {
      var ke = a.pingedTasks;
      ke.push(he), ke.length === 1 && Gn(a);
    }, blockedBoundary: g, blockedSegment: k, abortSet: M, legacyContext: L, context: V, treeContext: K };
    return M.add(he), he;
  }
  function x(a, u, g, k, M, L) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: k, boundary: g, lastPushedText: M, textEmbedded: L };
  }
  function w(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function N(a, u) {
    var g = a.onShellError;
    g(u), g = a.onFatalError, g(u), a.destination !== null ? (a.status = 2, a.destination.destroy(u)) : (a.status = 1, a.fatalError = u);
  }
  function Q(a, u, g, k, M) {
    for (lt = {}, St = u, Te = 0, a = g(k, M); ir; ) ir = !1, Te = 0, sr += 1, Le = null, a = g(k, M);
    return Gt(), a;
  }
  function Se(a, u, g, k) {
    var M = g.render(), L = k.childContextTypes;
    if (L != null) {
      var V = u.legacyContext;
      if (typeof g.getChildContext != "function") k = V;
      else {
        g = g.getChildContext();
        for (var K in g) if (!(K in L)) throw Error(t(108, He(k) || "Unknown", K));
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
      var L = g.contextType;
      L = new g(k, typeof L == "object" && L !== null ? L._currentValue2 : M), Mt(L, g, k, M), Se(a, u, L, g);
    } else {
      L = ft(g, u.legacyContext), M = Q(a, u, g, k, L);
      var V = Te !== 0;
      if (typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0) Mt(M, g, k, L), Se(a, u, M, g);
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
      switch (M = u.blockedSegment, L = _e(M.chunks, g, k, a.responseState, M.formatContext), M.lastPushedText = !1, V = M.formatContext, M.formatContext = Y(V, g, k), Je(a, u, L), M.formatContext = V, g) {
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
        case W:
          Ee(a, u, k.children);
          return;
        case re:
          Ee(a, u, k.children);
          return;
        case fe:
          throw Error(t(343));
        case ee:
          e: {
            g = u.blockedBoundary, M = u.blockedSegment, L = k.fallback, k = k.children, V = /* @__PURE__ */ new Set();
            var K = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: V, errorDigest: null }, he = x(a, M.chunks.length, K, M.formatContext, !1, !1);
            M.children.push(he), M.lastPushedText = !1;
            var ke = x(a, 0, null, M.formatContext, !1, !1);
            ke.parentFlushed = !0, u.blockedBoundary = K, u.blockedSegment = ke;
            try {
              if (Je(
                a,
                u,
                k
              ), a.responseState.generateStaticMarkup || ke.lastPushedText && ke.textEmbedded && ke.chunks.push("<!-- -->"), ke.status = 1, Xt(K, ke), K.pendingTasks === 0) break e;
            } catch (Ne) {
              ke.status = 4, K.forceClientRender = !0, K.errorDigest = w(a, Ne);
            } finally {
              u.blockedBoundary = g, u.blockedSegment = M;
            }
            u = br(a, L, g, he, V, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
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
          if (M = k.children, g = g._context, k = k.value, L = g._currentValue2, g._currentValue2 = k, V = Qe, Qe = k = { parent: V, depth: V === null ? 0 : V.depth + 1, context: g, parentValue: L, value: k }, u.context = k, Ee(a, u, M), a = Qe, a === null) throw Error(t(403));
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
        case R:
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
      var L = u.treeContext;
      u.treeContext = wt(L, k, M);
      try {
        Je(a, u, g[M]);
      } finally {
        u.treeContext = L;
      }
    }
  }
  function Je(a, u, g) {
    var k = u.blockedSegment.formatContext, M = u.legacyContext, L = u.context;
    try {
      return Ee(a, u, g);
    } catch (he) {
      if (Gt(), typeof he == "object" && he !== null && typeof he.then == "function") {
        g = he;
        var V = u.blockedSegment, K = x(a, V.chunks.length, null, V.formatContext, V.lastPushedText, !0);
        V.children.push(K), V.lastPushedText = !1, a = br(a, u.node, u.blockedBoundary, K, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, g.then(a, a), u.blockedSegment.formatContext = k, u.legacyContext = M, u.context = L, qe(L);
      } else throw u.blockedSegment.formatContext = k, u.legacyContext = M, u.context = L, qe(L), he;
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
  function Gn(a) {
    if (a.status !== 2) {
      var u = Qe, g = Yt.current;
      Yt.current = lr;
      var k = Ke;
      Ke = a.responseState;
      try {
        var M = a.pingedTasks, L;
        for (L = 0; L < M.length; L++) {
          var V = M[L], K = a, he = V.blockedSegment;
          if (he.status === 0) {
            qe(V.context);
            try {
              Ee(K, V, V.node), K.responseState.generateStaticMarkup || he.lastPushedText && he.textEmbedded && he.chunks.push("<!-- -->"), V.abortSet.delete(V), he.status = 1, Er(K, V.blockedBoundary, he);
            } catch (Lt) {
              if (Gt(), typeof Lt == "object" && Lt !== null && typeof Lt.then == "function") {
                var ke = V.ping;
                Lt.then(ke, ke);
              } else {
                V.abortSet.delete(V), he.status = 4;
                var Ne = V.blockedBoundary, ot = Lt, Jt = w(K, ot);
                if (Ne === null ? N(K, ot) : (Ne.pendingTasks--, Ne.forceClientRender || (Ne.forceClientRender = !0, Ne.errorDigest = Jt, Ne.parentFlushed && K.clientRenderedBoundaries.push(Ne))), K.allPendingTasks--, K.allPendingTasks === 0) {
                  var Qt = K.onAllReady;
                  Qt();
                }
              }
            } finally {
            }
          }
        }
        M.splice(0, L), a.destination !== null && Zr(a, a.destination);
      } catch (Lt) {
        w(a, Lt), N(a, Lt);
      } finally {
        Ke = k, Yt.current = g, g === lr && qe(u);
      }
    }
  }
  function Lr(a, u, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var k = g.id = a.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, a = a.responseState, u.push('<template id="'), u.push(a.placeholderPrefix), a = k.toString(16), u.push(a), u.push('"></template>');
      case 1:
        g.status = 2;
        var M = !0;
        k = g.chunks;
        var L = 0;
        g = g.children;
        for (var V = 0; V < g.length; V++) {
          for (M = g[V]; L < M.index; L++) u.push(k[L]);
          M = Ir(a, u, M);
        }
        for (; L < k.length - 1; L++) u.push(k[L]);
        return L < k.length && (M = u.push(k[L])), M;
      default:
        throw Error(t(390));
    }
  }
  function Ir(a, u, g) {
    var k = g.boundary;
    if (k === null) return Lr(a, u, g);
    if (k.parentFlushed = !0, k.forceClientRender) return a.responseState.generateStaticMarkup || (k = k.errorDigest, u.push("<!--$!-->"), u.push("<template"), k && (u.push(' data-dgst="'), k = _(k), u.push(k), u.push('"')), u.push("></template>")), Lr(a, u, g), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
    if (0 < k.pendingTasks) {
      k.rootSegmentID = a.nextSegmentId++, 0 < k.completedSegments.length && a.partialBoundaries.push(k);
      var M = a.responseState, L = M.nextSuspenseID++;
      return M = M.boundaryPrefix + L.toString(16), k = k.id = M, Ae(u, a.responseState, k), Lr(a, u, g), u.push("<!--/$-->");
    }
    if (k.byteSize > a.progressiveChunkSize) return k.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(k), Ae(u, a.responseState, k.id), Lr(a, u, g), u.push("<!--/$-->");
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
      var M = a.clientRenderedBoundaries, L;
      for (L = 0; L < M.length; L++) {
        var V = M[L];
        k = u;
        var K = a.responseState, he = V.id, ke = V.errorDigest, Ne = V.errorMessage, ot = V.errorComponentStack;
        if (k.push(K.startInlineScript), K.sentClientRenderFunction ? k.push('$RX("') : (K.sentClientRenderFunction = !0, k.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), he === null) throw Error(t(395));
        if (k.push(he), k.push('"'), ke || Ne || ot) {
          k.push(",");
          var Jt = Ce(ke || "");
          k.push(Jt);
        }
        if (Ne || ot) {
          k.push(",");
          var Qt = Ce(Ne || "");
          k.push(Qt);
        }
        if (ot) {
          k.push(",");
          var Lt = Ce(ot);
          k.push(Lt);
        }
        if (!k.push(")<\/script>")) {
          a.destination = null, L++, M.splice(0, L);
          return;
        }
      }
      M.splice(0, L);
      var Dr = a.completedBoundaries;
      for (L = 0; L < Dr.length; L++) if (!fn(a, u, Dr[L])) {
        a.destination = null, L++, Dr.splice(0, L);
        return;
      }
      Dr.splice(0, L);
      var xr = a.partialBoundaries;
      for (L = 0; L < xr.length; L++) {
        var gn = xr[L];
        e: {
          M = a, V = u;
          var Mr = gn.completedSegments;
          for (K = 0; K < Mr.length; K++) if (!mn(M, V, gn, Mr[K])) {
            K++, Mr.splice(0, K);
            var Jn = !1;
            break e;
          }
          Mr.splice(0, K), Jn = !0;
        }
        if (!Jn) {
          a.destination = null, L++, xr.splice(0, L);
          return;
        }
      }
      xr.splice(0, L);
      var _r = a.completedBoundaries;
      for (L = 0; L < _r.length; L++) if (!fn(a, u, _r[L])) {
        a.destination = null, L++, _r.splice(0, L);
        return;
      }
      _r.splice(0, L);
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function Yn(a, u) {
    try {
      var g = a.abortableTasks;
      g.forEach(function(k) {
        return yr(k, a, u);
      }), g.clear(), a.destination !== null && Zr(a, a.destination);
    } catch (k) {
      w(a, k), N(a, k);
    }
  }
  function Xn() {
  }
  function hn(a, u, g, k) {
    var M = !1, L = null, V = "", K = { push: function(ke) {
      return ke !== null && (V += ke), !0;
    }, destroy: function(ke) {
      M = !0, L = ke;
    } }, he = !1;
    if (a = gr(a, $e(g, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Xn, void 0, function() {
      he = !0;
    }), Gn(a), Yn(a, k), a.status === 1) a.status = 2, K.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = K;
      try {
        Zr(a, K);
      } catch (ke) {
        w(a, ke), N(a, ke);
      }
    }
    if (M) throw L;
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
var da = {}, Qi;
function ad() {
  if (Qi) return da;
  Qi = 1;
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
  var f = new TextEncoder();
  function b(i) {
    return f.encode(i);
  }
  function m(i) {
    return f.encode(i);
  }
  function A(i, c) {
    typeof i.error == "function" ? i.error(c) : i.close();
  }
  var E = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, U = {}, _ = {};
  function C(i) {
    return E.call(_, i) ? !0 : E.call(U, i) ? !1 : O.test(i) ? _[i] = !0 : (U[i] = !0, !1);
  }
  function P(i, c, h, v, D, I, G) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = v, this.attributeNamespace = D, this.mustUseProperty = h, this.propertyName = i, this.type = c, this.sanitizeURL = I, this.removeEmptyString = G;
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
      var h = "", v, D = 0;
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
        D !== v && (h += i.substring(D, v)), D = v + 1, h += c;
      }
      i = D !== v ? h + i.substring(D, v) : h;
    }
    return i;
  }
  var xe = /([A-Z])/g, Re = /^ms-/, De = Array.isArray, se = m("<script>"), pe = m("<\/script>"), _e = m('<script src="'), Ae = m('<script type="module" src="'), ve = m('" async=""><\/script>'), Xe = /(<\/|<)(s)(cript)/gi;
  function Oe(i, c, h, v) {
    return "" + c + (h === "s" ? "\\u0073" : "\\u0053") + v;
  }
  function Ce(i, c, h, v, D) {
    i = i === void 0 ? "" : i, c = c === void 0 ? se : m('<script nonce="' + de(c) + '">');
    var I = [];
    if (h !== void 0 && I.push(c, b(("" + h).replace(Xe, Oe)), pe), v !== void 0) for (h = 0; h < v.length; h++) I.push(_e, b(de(v[h])), ve);
    if (D !== void 0) for (v = 0; v < D.length; v++) I.push(Ae, b(de(D[v])), ve);
    return { bootstrapChunks: I, startInlineScript: c, placeholderPrefix: m(i + "P:"), segmentPrefix: m(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
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
  var H = m("<!-- -->");
  function R(i, c, h, v) {
    return c === "" ? v : (v && i.push(H), i.push(b(de(c))), !0);
  }
  var W = /* @__PURE__ */ new Map(), $ = m(' style="'), y = m(":"), te = m(";");
  function j(i, c, h) {
    if (typeof h != "object") throw Error(t(62));
    c = !0;
    for (var v in h) if (E.call(h, v)) {
      var D = h[v];
      if (D != null && typeof D != "boolean" && D !== "") {
        if (v.indexOf("--") === 0) {
          var I = b(de(v));
          D = b(de(("" + D).trim()));
        } else {
          I = v;
          var G = W.get(I);
          G !== void 0 || (G = m(de(I.replace(xe, "-$1").toLowerCase().replace(Re, "-ms-"))), W.set(I, G)), I = G, D = typeof D == "number" ? D === 0 || E.call(z, v) ? b("" + D) : b(D + "px") : b(de(("" + D).trim()));
        }
        c ? (c = !1, i.push($, I, y, D)) : i.push(te, I, y, D);
      }
    }
    c || i.push(re);
  }
  var ie = m(" "), ee = m('="'), re = m('"'), X = m('=""');
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
      } else if (C(h)) {
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
  var fe = m(">"), ae = m("/>");
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
  var me = m(' selected=""');
  function He(i, c, h, v) {
    i.push(we(h));
    var D = h = null, I;
    for (I in c) if (E.call(c, I)) {
      var G = c[I];
      if (G != null) switch (I) {
        case "children":
          h = G;
          break;
        case "dangerouslySetInnerHTML":
          D = G;
          break;
        default:
          ce(i, v, I, G);
      }
    }
    return i.push(fe), be(i, D, h), typeof h == "string" ? (i.push(b(de(h))), null) : h;
  }
  var ye = m(`
`), ft = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Qe = /* @__PURE__ */ new Map();
  function we(i) {
    var c = Qe.get(i);
    if (c === void 0) {
      if (!ft.test(i)) throw Error(t(65, i));
      c = m("<" + i), Qe.set(i, c);
    }
    return c;
  }
  var J = m("<!DOCTYPE html>");
  function ue(i, c, h, v, D) {
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
        G = D.selectedValue, i.push(we("option"));
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
        if (G != null) if (h = ge !== null ? "" + ge : ne(Z), De(G)) {
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
          if (De(Pe) && 1 < Pe.length) throw Error(t(93));
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
        for (var Dt in h) if (E.call(h, Dt) && (I = h[Dt], I != null)) switch (Dt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ce(i, v, Dt, I);
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
        return D.insertionMode === 0 && i.push(J), He(i, h, c, v);
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
            C(Ie) && typeof Z != "function" && typeof Z != "symbol" && i.push(ie, b(Ie), ee, b(de(Z)), re);
        }
        return i.push(fe), be(i, G, I), I;
    }
  }
  var Ze = m("</"), gt = m(">"), qe = m('<template id="'), ar = m('"></template>'), Mt = m("<!--$-->"), pr = m('<!--$?--><template id="'), wt = m('"></template>'), yt = m("<!--$!-->"), it = m("<!--/$-->"), bt = m("<template"), Bt = m('"'), Wt = m(' data-dgst="');
  m(' data-msg="'), m(' data-stck="');
  var Pr = m("></template>");
  function lt(i, c, h) {
    if (o(i, pr), h === null) throw Error(t(395));
    return o(i, h), s(i, wt);
  }
  var St = m('<div hidden id="'), or = m('">'), Le = m("</div>"), Ht = m('<svg aria-hidden="true" style="display:none" id="'), ir = m('">'), Te = m("</svg>"), nt = m('<math aria-hidden="true" style="display:none" id="'), sr = m('">'), kt = m("</math>"), Ft = m('<table hidden id="'), Vt = m('">'), Gt = m("</table>"), Ar = m('<table hidden><tbody id="'), st = m('">'), Nt = m("</tbody></table>"), fr = m('<table hidden><tr id="'), mr = m('">'), Rt = m("</tr></table>"), lr = m('<table hidden><colgroup id="'), Ke = m('">'), Yt = m("</colgroup></table>");
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
        ), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, Ke);
      default:
        throw Error(t(397));
    }
  }
  function Pt(i, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(i, Le);
      case 2:
        return s(i, Te);
      case 3:
        return s(i, kt);
      case 4:
        return s(i, Gt);
      case 5:
        return s(i, Nt);
      case 6:
        return s(i, Rt);
      case 7:
        return s(i, Yt);
      default:
        throw Error(t(397));
    }
  }
  var gr = m('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), br = m('$RS("'), x = m('","'), w = m('")<\/script>'), N = m('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Q = m('$RC("'), Se = m('","'), je = m('")<\/script>'), Ue = m('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ee = m('$RX("'), et = m('"'), Je = m(")<\/script>"), at = m(","), yr = /[<\u2028\u2029]/g;
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
  var Er = Object.assign, Gn = Symbol.for("react.element"), Lr = Symbol.for("react.portal"), Ir = Symbol.for("react.fragment"), pn = Symbol.for("react.strict_mode"), fn = Symbol.for("react.profiler"), mn = Symbol.for("react.provider"), Zr = Symbol.for("react.context"), Yn = Symbol.for("react.forward_ref"), Xn = Symbol.for("react.suspense"), hn = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), k = Symbol.for("react.debug_trace_mode"), M = Symbol.for("react.legacy_hidden"), L = Symbol.for("react.default_value"), V = Symbol.iterator;
  function K(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case Ir:
        return "Fragment";
      case Lr:
        return "Portal";
      case fn:
        return "Profiler";
      case pn:
        return "StrictMode";
      case Xn:
        return "Suspense";
      case hn:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case Zr:
        return (i.displayName || "Context") + ".Consumer";
      case mn:
        return (i._context.displayName || "Context") + ".Provider";
      case Yn:
        var c = i.render;
        return i = i.displayName, i || (i = c.displayName || c.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case a:
        return c = i.displayName || null, c !== null ? c : K(i.type) || "Memo";
      case u:
        c = i._payload, i = i._init;
        try {
          return K(i(c));
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
  var Ne = null;
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
  function Jt(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && Jt(i);
  }
  function Qt(i) {
    var c = i.parent;
    c !== null && Qt(c), i.context._currentValue = i.value;
  }
  function Lt(i, c) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === c.depth ? ot(i, c) : Lt(i, c);
  }
  function Dr(i, c) {
    var h = c.parent;
    if (h === null) throw Error(t(402));
    i.depth === h.depth ? ot(i, h) : Dr(i, h), c.context._currentValue = c.value;
  }
  function xr(i) {
    var c = Ne;
    c !== i && (c === null ? Qt(i) : i === null ? Jt(c) : c.depth === i.depth ? ot(c, i) : c.depth > i.depth ? Lt(c, i) : Dr(c, i), Ne = i);
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
    var D = i.state !== void 0 ? i.state : null;
    i.updater = gn, i.props = h, i.state = D;
    var I = { queue: [], replace: !1 };
    i._reactInternals = I;
    var G = c.contextType;
    if (i.context = typeof G == "object" && G !== null ? G._currentValue : v, G = c.getDerivedStateFromProps, typeof G == "function" && (G = G(h, D), D = G == null ? D : Er({}, D, G), i.state = D), typeof c.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && gn.enqueueReplaceState(i, i.state, null), I.queue !== null && 0 < I.queue.length) if (c = I.queue, G = I.replace, I.queue = null, I.replace = !1, G && c.length === 1) i.state = c[0];
    else {
      for (I = G ? c[0] : i.state, D = !0, G = G ? 1 : 0; G < c.length; G++) {
        var Z = c[G];
        Z = typeof Z == "function" ? Z.call(i, I, h, v) : Z, Z != null && (D ? (D = !1, I = Er({}, I, Z)) : Er(I, Z));
      }
      i.state = I;
    }
    else I.queue = null;
  }
  var Jn = { id: 1, overflow: "" };
  function _r(i, c, h) {
    var v = i.id;
    i = i.overflow;
    var D = 32 - Qn(v) - 1;
    v &= ~(1 << D), h += 1;
    var I = 32 - Qn(c) + D;
    if (30 < I) {
      var G = D - D % 5;
      return I = (v & (1 << G) - 1).toString(32), v >>= G, D -= G, { id: 1 << 32 - Qn(c) + D | h << D | v, overflow: I + i };
    }
    return { id: 1 << I | h << D | v, overflow: i };
  }
  var Qn = Math.clz32 ? Math.clz32 : uu, lu = Math.log, cu = Math.LN2;
  function uu(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (lu(i) / cu | 0) | 0;
  }
  function du(i, c) {
    return i === c && (i !== 0 || 1 / i === 1 / c) || i !== i && c !== c;
  }
  var pu = typeof Object.is == "function" ? Object.is : du, vr = null, $a = null, Zn = null, tt = null, bn = !1, Kn = !1, yn = 0, Or = null, ea = 0;
  function Fr() {
    if (vr === null) throw Error(t(321));
    return vr;
  }
  function bi() {
    if (0 < ea) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ua() {
    return tt === null ? Zn === null ? (bn = !1, Zn = tt = bi()) : (bn = !0, tt = Zn) : tt.next === null ? (bn = !1, tt = tt.next = bi()) : (bn = !0, tt = tt.next), tt;
  }
  function za() {
    $a = vr = null, Kn = !1, Zn = null, ea = 0, tt = Or = null;
  }
  function yi(i, c) {
    return typeof c == "function" ? c(i) : c;
  }
  function xi(i, c, h) {
    if (vr = Fr(), tt = Ua(), bn) {
      var v = tt.queue;
      if (c = v.dispatch, Or !== null && (h = Or.get(v), h !== void 0)) {
        Or.delete(v), v = tt.memoizedState;
        do
          v = i(v, h.action), h = h.next;
        while (h !== null);
        return tt.memoizedState = v, [v, c];
      }
      return [tt.memoizedState, c];
    }
    return i = i === yi ? typeof c == "function" ? c() : c : h !== void 0 ? h(c) : c, tt.memoizedState = i, i = tt.queue = { last: null, dispatch: null }, i = i.dispatch = fu.bind(null, vr, i), [tt.memoizedState, i];
  }
  function vi(i, c) {
    if (vr = Fr(), tt = Ua(), c = c === void 0 ? null : c, tt !== null) {
      var h = tt.memoizedState;
      if (h !== null && c !== null) {
        var v = h[1];
        e: if (v === null) v = !1;
        else {
          for (var D = 0; D < v.length && D < c.length; D++) if (!pu(c[D], v[D])) {
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
  function fu(i, c, h) {
    if (25 <= ea) throw Error(t(301));
    if (i === vr) if (Kn = !0, i = { action: h, next: null }, Or === null && (Or = /* @__PURE__ */ new Map()), h = Or.get(c), h === void 0) Or.set(c, i);
    else {
      for (c = h; c.next !== null; ) c = c.next;
      c.next = i;
    }
  }
  function mu() {
    throw Error(t(394));
  }
  function ta() {
  }
  var wi = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return Fr(), i._currentValue;
  }, useMemo: vi, useReducer: xi, useRef: function(i) {
    vr = Fr(), tt = Ua();
    var c = tt.memoizedState;
    return c === null ? (i = { current: i }, tt.memoizedState = i) : c;
  }, useState: function(i) {
    return xi(yi, i);
  }, useInsertionEffect: ta, useLayoutEffect: function() {
  }, useCallback: function(i, c) {
    return vi(function() {
      return i;
    }, c);
  }, useImperativeHandle: ta, useEffect: ta, useDebugValue: ta, useDeferredValue: function(i) {
    return Fr(), i;
  }, useTransition: function() {
    return Fr(), [!1, mu];
  }, useId: function() {
    var i = $a.treeContext, c = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - Qn(i) - 1)).toString(32) + c;
    var h = ra;
    if (h === null) throw Error(t(404));
    return c = yn++, i = ":" + h.idPrefix + "R" + i, 0 < c && (i += "H" + c.toString(32)), i + ":";
  }, useMutableSource: function(i, c) {
    return Fr(), c(i._source);
  }, useSyncExternalStore: function(i, c, h) {
    if (h === void 0) throw Error(t(407));
    return h();
  } }, ra = null, qa = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function hu(i) {
    return console.error(i), null;
  }
  function xn() {
  }
  function gu(i, c, h, v, D, I, G, Z, ge) {
    var Ie = [], Pe = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: v === void 0 ? 12800 : v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Pe, pingedTasks: Ie, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: D === void 0 ? hu : D, onAllReady: I === void 0 ? xn : I, onShellReady: G === void 0 ? xn : G, onShellError: Z === void 0 ? xn : Z, onFatalError: ge === void 0 ? xn : ge }, h = na(c, 0, null, h, !1, !1), h.parentFlushed = !0, i = Ba(c, i, null, h, Pe, he, null, Jn), Ie.push(i), c;
  }
  function Ba(i, c, h, v, D, I, G, Z) {
    i.allPendingTasks++, h === null ? i.pendingRootTasks++ : h.pendingTasks++;
    var ge = { node: c, ping: function() {
      var Ie = i.pingedTasks;
      Ie.push(ge), Ie.length === 1 && _i(i);
    }, blockedBoundary: h, blockedSegment: v, abortSet: D, legacyContext: I, context: G, treeContext: Z };
    return D.add(ge), ge;
  }
  function na(i, c, h, v, D, I) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: h, lastPushedText: D, textEmbedded: I };
  }
  function vn(i, c) {
    if (i = i.onError(c), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function aa(i, c) {
    var h = i.onShellError;
    h(c), h = i.onFatalError, h(c), i.destination !== null ? (i.status = 2, A(i.destination, c)) : (i.status = 1, i.fatalError = c);
  }
  function Si(i, c, h, v, D) {
    for (vr = {}, $a = c, yn = 0, i = h(v, D); Kn; ) Kn = !1, yn = 0, ea += 1, tt = null, i = h(v, D);
    return za(), i;
  }
  function ki(i, c, h, v) {
    var D = h.render(), I = v.childContextTypes;
    if (I != null) {
      var G = c.legacyContext;
      if (typeof h.getChildContext != "function") v = G;
      else {
        h = h.getChildContext();
        for (var Z in h) if (!(Z in I)) throw Error(t(108, K(v) || "Unknown", Z));
        v = Er({}, G, h);
      }
      c.legacyContext = v, It(i, c, D), c.legacyContext = G;
    } else It(i, c, D);
  }
  function Ti(i, c) {
    if (i && i.defaultProps) {
      c = Er({}, c), i = i.defaultProps;
      for (var h in i) c[h] === void 0 && (c[h] = i[h]);
      return c;
    }
    return c;
  }
  function Wa(i, c, h, v, D) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      D = ke(h, c.legacyContext);
      var I = h.contextType;
      I = new h(v, typeof I == "object" && I !== null ? I._currentValue : D), Mr(I, h, v, D), ki(i, c, I, h);
    } else {
      I = ke(h, c.legacyContext), D = Si(i, c, h, v, I);
      var G = yn !== 0;
      if (typeof D == "object" && D !== null && typeof D.render == "function" && D.$$typeof === void 0) Mr(D, h, v, I), ki(i, c, D, h);
      else if (G) {
        v = c.treeContext, c.treeContext = _r(v, 1, 0);
        try {
          It(i, c, D);
        } finally {
          c.treeContext = v;
        }
      } else It(i, c, D);
    }
    else if (typeof h == "string") {
      switch (D = c.blockedSegment, I = ue(D.chunks, h, v, i.responseState, D.formatContext), D.lastPushedText = !1, G = D.formatContext, D.formatContext = le(G, h, v), Ha(i, c, I), D.formatContext = G, h) {
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
          D.chunks.push(Ze, b(h), gt);
      }
      D.lastPushedText = !1;
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
        case Xn:
          e: {
            h = c.blockedBoundary, D = c.blockedSegment, I = v.fallback, v = v.children, G = /* @__PURE__ */ new Set();
            var Z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: G, errorDigest: null }, ge = na(i, D.chunks.length, Z, D.formatContext, !1, !1);
            D.children.push(ge), D.lastPushedText = !1;
            var Ie = na(i, 0, null, D.formatContext, !1, !1);
            Ie.parentFlushed = !0, c.blockedBoundary = Z, c.blockedSegment = Ie;
            try {
              if (Ha(
                i,
                c,
                v
              ), Ie.lastPushedText && Ie.textEmbedded && Ie.chunks.push(H), Ie.status = 1, oa(Z, Ie), Z.pendingTasks === 0) break e;
            } catch (Pe) {
              Ie.status = 4, Z.forceClientRender = !0, Z.errorDigest = vn(i, Pe);
            } finally {
              c.blockedBoundary = h, c.blockedSegment = D;
            }
            c = Ba(i, I, h, ge, G, c.legacyContext, c.context, c.treeContext), i.pingedTasks.push(c);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case Yn:
          if (v = Si(i, c, h.render, v, D), yn !== 0) {
            h = c.treeContext, c.treeContext = _r(h, 1, 0);
            try {
              It(i, c, v);
            } finally {
              c.treeContext = h;
            }
          } else It(i, c, v);
          return;
        case a:
          h = h.type, v = Ti(h, v), Wa(i, c, h, v, D);
          return;
        case mn:
          if (D = v.children, h = h._context, v = v.value, I = h._currentValue, h._currentValue = v, G = Ne, Ne = v = { parent: G, depth: G === null ? 0 : G.depth + 1, context: h, parentValue: I, value: v }, c.context = v, It(i, c, D), i = Ne, i === null) throw Error(t(403));
          v = i.parentValue, i.context._currentValue = v === L ? i.context._defaultValue : v, i = Ne = i.parent, c.context = i;
          return;
        case Zr:
          v = v.children, v = v(h._currentValue), It(i, c, v);
          return;
        case u:
          D = h._init, h = D(h._payload), v = Ti(h, v), Wa(i, c, h, v, void 0);
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
        case Gn:
          Wa(i, c, h.type, h.props, h.ref);
          return;
        case Lr:
          throw Error(t(257));
        case u:
          var v = h._init;
          h = v(h._payload), It(i, c, h);
          return;
      }
      if (De(h)) {
        Ci(i, c, h);
        return;
      }
      if (h === null || typeof h != "object" ? v = null : (v = V && h[V] || h["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(h))) {
        if (h = v.next(), !h.done) {
          var D = [];
          do
            D.push(h.value), h = v.next();
          while (!h.done);
          Ci(i, c, D);
        }
        return;
      }
      throw i = Object.prototype.toString.call(h), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : i));
    }
    typeof h == "string" ? (v = c.blockedSegment, v.lastPushedText = R(c.blockedSegment.chunks, h, i.responseState, v.lastPushedText)) : typeof h == "number" && (v = c.blockedSegment, v.lastPushedText = R(c.blockedSegment.chunks, "" + h, i.responseState, v.lastPushedText));
  }
  function Ci(i, c, h) {
    for (var v = h.length, D = 0; D < v; D++) {
      var I = c.treeContext;
      c.treeContext = _r(I, v, D);
      try {
        Ha(i, c, h[D]);
      } finally {
        c.treeContext = I;
      }
    }
  }
  function Ha(i, c, h) {
    var v = c.blockedSegment.formatContext, D = c.legacyContext, I = c.context;
    try {
      return It(i, c, h);
    } catch (ge) {
      if (za(), typeof ge == "object" && ge !== null && typeof ge.then == "function") {
        h = ge;
        var G = c.blockedSegment, Z = na(i, G.chunks.length, null, G.formatContext, G.lastPushedText, !0);
        G.children.push(Z), G.lastPushedText = !1, i = Ba(i, c.node, c.blockedBoundary, Z, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, h.then(i, i), c.blockedSegment.formatContext = v, c.legacyContext = D, c.context = I, xr(I);
      } else throw c.blockedSegment.formatContext = v, c.legacyContext = D, c.context = I, xr(I), ge;
    }
  }
  function bu(i) {
    var c = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Ei(this, c, i);
  }
  function Ai(i, c, h) {
    var v = i.blockedBoundary;
    i.blockedSegment.status = 3, v === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, i = h === void 0 ? Error(t(432)) : h, v.errorDigest = c.onError(i), v.parentFlushed && c.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(D) {
      return Ai(D, c, h);
    }), v.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (v = c.onAllReady, v()));
  }
  function oa(i, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var h = c.children[0];
      h.id = c.id, h.parentFlushed = !0, h.status === 1 && oa(i, h);
    } else i.completedSegments.push(c);
  }
  function Ei(i, c, h) {
    if (c === null) {
      if (h.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = h;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = xn, c = i.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && oa(c, h), c.parentFlushed && i.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(bu, i), c.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (oa(c, h), c.completedSegments.length === 1 && c.parentFlushed && i.partialBoundaries.push(c)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function _i(i) {
    if (i.status !== 2) {
      var c = Ne, h = qa.current;
      qa.current = wi;
      var v = ra;
      ra = i.responseState;
      try {
        var D = i.pingedTasks, I;
        for (I = 0; I < D.length; I++) {
          var G = D[I], Z = i, ge = G.blockedSegment;
          if (ge.status === 0) {
            xr(G.context);
            try {
              It(Z, G, G.node), ge.lastPushedText && ge.textEmbedded && ge.chunks.push(H), G.abortSet.delete(G), ge.status = 1, Ei(Z, G.blockedBoundary, ge);
            } catch (Kt) {
              if (za(), typeof Kt == "object" && Kt !== null && typeof Kt.then == "function") {
                var Ie = G.ping;
                Kt.then(Ie, Ie);
              } else {
                G.abortSet.delete(G), ge.status = 4;
                var Pe = G.blockedBoundary, rt = Kt, Dt = vn(Z, rt);
                if (Pe === null ? aa(Z, rt) : (Pe.pendingTasks--, Pe.forceClientRender || (Pe.forceClientRender = !0, Pe.errorDigest = Dt, Pe.parentFlushed && Z.clientRenderedBoundaries.push(Pe))), Z.allPendingTasks--, Z.allPendingTasks === 0) {
                  var Zt = Z.onAllReady;
                  Zt();
                }
              }
            } finally {
            }
          }
        }
        D.splice(0, I), i.destination !== null && Va(i, i.destination);
      } catch (Kt) {
        vn(i, Kt), aa(i, Kt);
      } finally {
        ra = v, qa.current = h, h === wi && xr(c);
      }
    }
  }
  function ia(i, c, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var v = h.id = i.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, i = i.responseState, o(c, qe), o(c, i.placeholderPrefix), i = b(v.toString(16)), o(c, i), s(c, ar);
      case 1:
        h.status = 2;
        var D = !0;
        v = h.chunks;
        var I = 0;
        h = h.children;
        for (var G = 0; G < h.length; G++) {
          for (D = h[G]; I < D.index; I++) o(c, v[I]);
          D = sa(i, c, D);
        }
        for (; I < v.length - 1; I++) o(c, v[I]);
        return I < v.length && (D = s(c, v[I])), D;
      default:
        throw Error(t(390));
    }
  }
  function sa(i, c, h) {
    var v = h.boundary;
    if (v === null) return ia(i, c, h);
    if (v.parentFlushed = !0, v.forceClientRender) v = v.errorDigest, s(c, yt), o(c, bt), v && (o(c, Wt), o(c, b(de(v))), o(c, Bt)), s(c, Pr), ia(i, c, h);
    else if (0 < v.pendingTasks) {
      v.rootSegmentID = i.nextSegmentId++, 0 < v.completedSegments.length && i.partialBoundaries.push(v);
      var D = i.responseState, I = D.nextSuspenseID++;
      D = m(D.boundaryPrefix + I.toString(16)), v = v.id = D, lt(c, i.responseState, v), ia(i, c, h);
    } else if (v.byteSize > i.progressiveChunkSize) v.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(v), lt(c, i.responseState, v.id), ia(i, c, h);
    else {
      if (s(c, Mt), h = v.completedSegments, h.length !== 1) throw Error(t(391));
      sa(i, c, h[0]);
    }
    return s(c, it);
  }
  function Oi(i, c, h) {
    return hr(c, i.responseState, h.formatContext, h.id), sa(i, c, h), Pt(c, h.formatContext);
  }
  function ji(i, c, h) {
    for (var v = h.completedSegments, D = 0; D < v.length; D++) Ni(i, c, h, v[D]);
    if (v.length = 0, i = i.responseState, v = h.id, h = h.rootSegmentID, o(c, i.startInlineScript), i.sentCompleteBoundaryFunction ? o(c, Q) : (i.sentCompleteBoundaryFunction = !0, o(c, N)), v === null) throw Error(t(395));
    return h = b(h.toString(16)), o(c, v), o(c, Se), o(c, i.segmentPrefix), o(c, h), s(c, je);
  }
  function Ni(i, c, h, v) {
    if (v.status === 2) return !0;
    var D = v.id;
    if (D === -1) {
      if ((v.id = h.rootSegmentID) === -1) throw Error(t(392));
      return Oi(i, c, v);
    }
    return Oi(i, c, v), i = i.responseState, o(c, i.startInlineScript), i.sentCompleteSegmentFunction ? o(c, br) : (i.sentCompleteSegmentFunction = !0, o(c, gr)), o(c, i.segmentPrefix), D = b(D.toString(16)), o(c, D), o(c, x), o(c, i.placeholderPrefix), o(c, D), s(c, w);
  }
  function Va(i, c) {
    r = new Uint8Array(512), n = 0;
    try {
      var h = i.completedRootSegment;
      if (h !== null && i.pendingRootTasks === 0) {
        sa(i, c, h), i.completedRootSegment = null;
        var v = i.responseState.bootstrapChunks;
        for (h = 0; h < v.length - 1; h++) o(c, v[h]);
        h < v.length && s(c, v[h]);
      }
      var D = i.clientRenderedBoundaries, I;
      for (I = 0; I < D.length; I++) {
        var G = D[I];
        v = c;
        var Z = i.responseState, ge = G.id, Ie = G.errorDigest, Pe = G.errorMessage, rt = G.errorComponentStack;
        if (o(v, Z.startInlineScript), Z.sentClientRenderFunction ? o(v, Ee) : (Z.sentClientRenderFunction = !0, o(
          v,
          Ue
        )), ge === null) throw Error(t(395));
        o(v, ge), o(v, et), (Ie || Pe || rt) && (o(v, at), o(v, b(Xt(Ie || "")))), (Pe || rt) && (o(v, at), o(v, b(Xt(Pe || "")))), rt && (o(v, at), o(v, b(Xt(rt)))), s(v, Je);
      }
      D.splice(0, I);
      var Dt = i.completedBoundaries;
      for (I = 0; I < Dt.length; I++) ji(i, c, Dt[I]);
      Dt.splice(0, I), p(c), r = new Uint8Array(512), n = 0;
      var Zt = i.partialBoundaries;
      for (I = 0; I < Zt.length; I++) {
        var Kt = Zt[I];
        e: {
          D = i, G = c;
          var la = Kt.completedSegments;
          for (Z = 0; Z < la.length; Z++) if (!Ni(
            D,
            G,
            Kt,
            la[Z]
          )) {
            Z++, la.splice(0, Z);
            var Pi = !1;
            break e;
          }
          la.splice(0, Z), Pi = !0;
        }
        if (!Pi) {
          i.destination = null, I++, Zt.splice(0, I);
          return;
        }
      }
      Zt.splice(0, I);
      var Ga = i.completedBoundaries;
      for (I = 0; I < Ga.length; I++) ji(i, c, Ga[I]);
      Ga.splice(0, I);
    } finally {
      p(c), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && c.close();
    }
  }
  function Ri(i, c) {
    try {
      var h = i.abortableTasks;
      h.forEach(function(v) {
        return Ai(v, i, c);
      }), h.clear(), i.destination !== null && Va(i, i.destination);
    } catch (v) {
      vn(i, v), aa(i, v);
    }
  }
  return da.renderToReadableStream = function(i, c) {
    return new Promise(function(h, v) {
      var D, I, G = new Promise(function(Pe, rt) {
        I = Pe, D = rt;
      }), Z = gu(i, Ce(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), ze(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, I, function() {
        var Pe = new ReadableStream({ type: "bytes", pull: function(rt) {
          if (Z.status === 1) Z.status = 2, A(rt, Z.fatalError);
          else if (Z.status !== 2 && Z.destination === null) {
            Z.destination = rt;
            try {
              Va(Z, rt);
            } catch (Dt) {
              vn(Z, Dt), aa(Z, Dt);
            }
          }
        }, cancel: function() {
          Ri(Z);
        } }, { highWaterMark: 0 });
        Pe.allReady = G, h(Pe);
      }, function(Pe) {
        G.catch(function() {
        }), v(Pe);
      }, D);
      if (c && c.signal) {
        var ge = c.signal, Ie = function() {
          Ri(Z, ge.reason), ge.removeEventListener("abort", Ie);
        };
        ge.addEventListener("abort", Ie);
      }
      _i(Z);
    });
  }, da.version = "18.3.1", da;
}
var cn, dl;
cn = nd(), dl = ad();
cn.version;
cn.renderToString;
cn.renderToStaticMarkup;
cn.renderToNodeStream;
cn.renderToStaticNodeStream;
dl.renderToReadableStream;
const od = "staticMarkup";
function Go() {
  const e = vu().indexOf(od) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const Jr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Go(), { onClick: o, ...s } = r.props;
  if (n)
    return mt.cloneElement(r, {
      ...s,
      onClick: (b) => (ll(e), o ? o(b) : !0)
    });
  let p = "";
  ["input", "header", "header-input"].includes(t) && (p = `-${t}`);
  const f = {
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
    ...f
  });
}, pl = ({ id: e, item: t, openCard: r, onClick: n, gaData: o }) => {
  var s, p, f, b, m, A;
  const E = e === r, O = E ? "open" : "close";
  return /* @__PURE__ */ B.jsxs(
    "div",
    {
      className: ct("accordion-item", "mt-3", {
        [`accordion-item-${t.color}`]: t.color,
        "accordion-header-icon": (s = t.content) == null ? void 0 : s.icon
      }),
      children: [
        /* @__PURE__ */ B.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ B.jsx("h4", { children: /* @__PURE__ */ B.jsx(
          Jr,
          {
            gaData: { ...o, action: O, text: t.content.header },
            children: /* @__PURE__ */ B.jsxs(
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
                  (p = t.content) != null && p.icon ? /* @__PURE__ */ B.jsxs("span", { className: "accordion-icon", children: [
                    /* @__PURE__ */ B.jsx(
                      "i",
                      {
                        className: `${(f = t.content.icon) == null ? void 0 : f[0]} fa-${(b = t.content.icon) == null ? void 0 : b[1]} me-2`
                      }
                    ),
                    t.content.header
                  ] }) : (m = t.content) == null ? void 0 : m.header,
                  /* @__PURE__ */ B.jsx("i", { className: "fas fa-chevron-up" })
                ]
              }
            )
          }
        ) }) }),
        ((A = t.content) == null ? void 0 : A.body) && /* @__PURE__ */ B.jsx(
          "div",
          {
            id: `card-body-${e}`,
            className: ct("collapse", { show: E }),
            children: /* @__PURE__ */ B.jsx(
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
pl.propTypes = {
  id: l.number,
  item: rl,
  openCard: l.number,
  onClick: l.func,
  gaData: l.object
};
const id = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, Yo = ({ cards: e, openedCard: t }) => {
  const [r, n] = ut(t), o = (s, p) => {
    s.preventDefault(), n(r !== p ? p : null);
  };
  return /* @__PURE__ */ B.jsx("div", { className: "accordion", children: e == null ? void 0 : e.map(
    (s, p) => s.content.body && s.content.header && /* @__PURE__ */ B.jsx(
      pl,
      {
        id: p + 1,
        item: s,
        openCard: r,
        onClick: o,
        gaData: id
      },
      p + 1
    )
  ) });
};
Yo.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: l.arrayOf(rl).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: l.number
};
const sd = {
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
  element: f = "button",
  href: b,
  icon: m,
  innerRef: A,
  onClick: E,
  size: O = "default",
  classes: U,
  target: _ = "_self",
  ...C
}) => {
  const P = ct("btn", {
    [`btn-${s}`]: !0,
    "btn-md": O === "small",
    "btn-sm": O === "xsmall",
    "btn-block": o,
    disabled: p
  });
  let F = f;
  return b && f === "button" && (F = "a"), /* @__PURE__ */ B.jsx(
    Jr,
    {
      gaData: {
        ...sd,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ B.jsxs(
        F,
        {
          type: F === "button" && E ? "button" : void 0,
          ...C,
          className: ct(U) || P,
          href: b,
          ref: A,
          onClick: E,
          "aria-label": n,
          target: F === "a" ? _ : null,
          children: [
            m && /* @__PURE__ */ B.jsx("i", { className: `${m == null ? void 0 : m[0]} fa-${m == null ? void 0 : m[1]} me-1` }),
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
  gaData: Vo,
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
var fl = { exports: {} }, Ve = {}, Zi;
function ld() {
  if (Zi) return Ve;
  Zi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), U = Symbol.for("react.client.reference");
  function _(C) {
    if (typeof C == "object" && C !== null) {
      var P = C.$$typeof;
      switch (P) {
        case e:
          switch (C = C.type, C) {
            case r:
            case o:
            case n:
            case b:
            case m:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case p:
                case f:
                case E:
                case A:
                  return C;
                case s:
                  return C;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return Ve.ContextConsumer = s, Ve.ContextProvider = p, Ve.Element = e, Ve.ForwardRef = f, Ve.Fragment = r, Ve.Lazy = E, Ve.Memo = A, Ve.Portal = t, Ve.Profiler = o, Ve.StrictMode = n, Ve.Suspense = b, Ve.SuspenseList = m, Ve.isContextConsumer = function(C) {
    return _(C) === s;
  }, Ve.isContextProvider = function(C) {
    return _(C) === p;
  }, Ve.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === e;
  }, Ve.isForwardRef = function(C) {
    return _(C) === f;
  }, Ve.isFragment = function(C) {
    return _(C) === r;
  }, Ve.isLazy = function(C) {
    return _(C) === E;
  }, Ve.isMemo = function(C) {
    return _(C) === A;
  }, Ve.isPortal = function(C) {
    return _(C) === t;
  }, Ve.isProfiler = function(C) {
    return _(C) === o;
  }, Ve.isStrictMode = function(C) {
    return _(C) === n;
  }, Ve.isSuspense = function(C) {
    return _(C) === b;
  }, Ve.isSuspenseList = function(C) {
    return _(C) === m;
  }, Ve.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === r || C === o || C === n || C === b || C === m || C === O || typeof C == "object" && C !== null && (C.$$typeof === E || C.$$typeof === A || C.$$typeof === p || C.$$typeof === s || C.$$typeof === f || C.$$typeof === U || C.getModuleId !== void 0);
  }, Ve.typeOf = _, Ve;
}
fl.exports = ld();
var ml = fl.exports;
function cd(e) {
  function t(H, R, W, $, y) {
    for (var te = 0, j = 0, ie = 0, ee = 0, re, X, ce = 0, fe = 0, ae, be = ae = re = 0, ne = 0, me = 0, He = 0, ye = 0, ft = W.length, Qe = ft - 1, we, J = "", ue = "", Ze = "", gt = "", qe; ne < ft; ) {
      if (X = W.charCodeAt(ne), ne === Qe && j + ee + ie + te !== 0 && (j !== 0 && (X = j === 47 ? 10 : 47), ee = ie = te = 0, ft++, Qe++), j + ee + ie + te === 0) {
        if (ne === Qe && (0 < me && (J = J.replace(O, "")), 0 < J.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += W.charAt(ne);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (J = J.trim(), re = J.charCodeAt(0), ae = 1, ye = ++ne; ne < ft; ) {
              switch (X = W.charCodeAt(ne)) {
                case 123:
                  ae++;
                  break;
                case 125:
                  ae--;
                  break;
                case 47:
                  switch (X = W.charCodeAt(ne + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (be = ne + 1; be < Qe; ++be)
                          switch (W.charCodeAt(be)) {
                            case 47:
                              if (X === 42 && W.charCodeAt(be - 1) === 42 && ne + 2 !== be) {
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
                  for (; ne++ < Qe && W.charCodeAt(ne) !== X; )
                    ;
              }
              if (ae === 0) break;
              ne++;
            }
            switch (ae = W.substring(ye, ne), re === 0 && (re = (J = J.replace(E, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < me && (J = J.replace(O, "")), X = J.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    me = R;
                    break;
                  default:
                    me = Xe;
                }
                if (ae = t(R, me, ae, X, y + 1), ye = ae.length, 0 < Ce && (me = r(Xe, J, He), qe = f(3, ae, me, R, _e, pe, ye, X, y, $), J = me.join(""), qe !== void 0 && (ye = (ae = qe.trim()).length) === 0 && (X = 0, ae = "")), 0 < ye) switch (X) {
                  case 115:
                    J = J.replace(oe, p);
                  case 100:
                  case 109:
                  case 45:
                    ae = J + "{" + ae + "}";
                    break;
                  case 107:
                    J = J.replace(q, "$1 $2"), ae = J + "{" + ae + "}", ae = ve === 1 || ve === 2 && s("@" + ae, 3) ? "@-webkit-" + ae + "@" + ae : "@" + ae;
                    break;
                  default:
                    ae = J + ae, $ === 112 && (ae = (ue += ae, ""));
                }
                else ae = "";
                break;
              default:
                ae = t(R, r(R, J, He), ae, $, y + 1);
            }
            Ze += ae, ae = He = me = be = re = 0, J = "", X = W.charCodeAt(++ne);
            break;
          case 125:
          case 59:
            if (J = (0 < me ? J.replace(O, "") : J).trim(), 1 < (ye = J.length)) switch (be === 0 && (re = J.charCodeAt(0), re === 45 || 96 < re && 123 > re) && (ye = (J = J.replace(" ", ":")).length), 0 < Ce && (qe = f(1, J, R, H, _e, pe, ue.length, $, y, $)) !== void 0 && (ye = (J = qe.trim()).length) === 0 && (J = "\0\0"), re = J.charCodeAt(0), X = J.charCodeAt(1), re) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  gt += J + W.charAt(ne);
                  break;
                }
              default:
                J.charCodeAt(ye - 1) !== 58 && (ue += o(J, re, X, J.charCodeAt(2)));
            }
            He = me = be = re = 0, J = "", X = W.charCodeAt(++ne);
        }
      }
      switch (X) {
        case 13:
        case 10:
          j === 47 ? j = 0 : 1 + re === 0 && $ !== 107 && 0 < J.length && (me = 1, J += "\0"), 0 < Ce * ze && f(0, J, R, H, _e, pe, ue.length, $, y, $), pe = 1, _e++;
          break;
        case 59:
        case 125:
          if (j + ee + ie + te === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, we = W.charAt(ne), X) {
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
                  ce === 112 && W.charCodeAt(ne - 3) === 58 && (Ae = ce);
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
                  switch (2 * X + 3 * W.charCodeAt(ne + 1)) {
                    case 235:
                      j = 47;
                      break;
                    case 220:
                      ye = ne, j = 42;
                  }
                  break;
                case 42:
                  X === 47 && ce === 42 && ye + 2 !== ne && (W.charCodeAt(ye + 2) === 33 && (ue += W.substring(ye, ne + 1)), we = "", j = 0);
              }
          }
          j === 0 && (J += we);
      }
      fe = ce, ce = X, ne++;
    }
    if (ye = ue.length, 0 < ye) {
      if (me = R, 0 < Ce && (qe = f(2, ue, me, H, _e, pe, ye, $, y, $), qe !== void 0 && (ue = qe).length === 0)) return gt + ue + Ze;
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
  function r(H, R, W) {
    var $ = R.trim().split(P);
    R = $;
    var y = $.length, te = H.length;
    switch (te) {
      case 0:
      case 1:
        var j = 0;
        for (H = te === 0 ? "" : H[0] + " "; j < y; ++j)
          R[j] = n(H, R[j], W).trim();
        break;
      default:
        var ie = j = 0;
        for (R = []; j < y; ++j)
          for (var ee = 0; ee < te; ++ee)
            R[ie++] = n(H[ee] + " ", $[j], W).trim();
    }
    return R;
  }
  function n(H, R, W) {
    var $ = R.charCodeAt(0);
    switch (33 > $ && ($ = (R = R.trim()).charCodeAt(0)), $) {
      case 38:
        return R.replace(F, "$1" + H.trim());
      case 58:
        return H.trim() + R.replace(F, "$1" + H.trim());
      default:
        if (0 < 1 * W && 0 < R.indexOf("\f")) return R.replace(F, (H.charCodeAt(0) === 58 ? "" : "$1") + H.trim());
    }
    return H + R;
  }
  function o(H, R, W, $) {
    var y = H + ";", te = 2 * R + 3 * W + 4 * $;
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
        switch (j = y.substring(13).trim(), R = j.indexOf("-") + 1, j.charCodeAt(0) + j.charCodeAt(R)) {
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
        switch (R = (y = H).length - 10, j = (y.charCodeAt(R) === 33 ? y.substring(0, R) : y).substring(H.indexOf(":", 7) + 1).trim(), te = j.charCodeAt(0) + (j.charCodeAt(7) | 0)) {
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
        if (De.test(H) === !0) return (j = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(H.replace("stretch", "fill-available"), R, W, $).replace(":fill-available", ":stretch") : y.replace(j, "-webkit-" + j) + y.replace(j, "-moz-" + j.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, W + $ === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(C, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(H, R) {
    var W = H.indexOf(R === 1 ? ":" : "{"), $ = H.substring(0, R !== 3 ? W : 10);
    return W = H.substring(W + 1, H.length - 1), $e(R !== 2 ? $ : $.replace(Re, "$1"), W, R);
  }
  function p(H, R) {
    var W = o(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return W !== R + ";" ? W.replace(de, " or ($1)").substring(4) : "(" + R + ")";
  }
  function f(H, R, W, $, y, te, j, ie, ee, re) {
    for (var X = 0, ce = R, fe; X < Ce; ++X)
      switch (fe = Oe[X].call(A, H, ce, W, $, y, te, j, ie, ee, re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = fe;
      }
    if (ce !== R) return ce;
  }
  function b(H) {
    switch (H) {
      case void 0:
      case null:
        Ce = Oe.length = 0;
        break;
      default:
        if (typeof H == "function") Oe[Ce++] = H;
        else if (typeof H == "object") for (var R = 0, W = H.length; R < W; ++R)
          b(H[R]);
        else ze = !!H | 0;
    }
    return b;
  }
  function m(H) {
    return H = H.prefix, H !== void 0 && ($e = null, H ? typeof H != "function" ? ve = 1 : (ve = 2, $e = H) : ve = 0), m;
  }
  function A(H, R) {
    var W = H;
    if (33 > W.charCodeAt(0) && (W = W.trim()), le = W, W = [le], 0 < Ce) {
      var $ = f(-1, R, W, W, _e, pe, 0, 0, 0, 0);
      $ !== void 0 && typeof $ == "string" && (R = $);
    }
    var y = t(Xe, W, R, 0, 0);
    return 0 < Ce && ($ = f(-2, y, W, W, _e, pe, y.length, 0, 0, 0), $ !== void 0 && (y = $)), le = "", Ae = 0, pe = _e = 1, y;
  }
  var E = /^\0+/g, O = /[\0\r\f]/g, U = /: */g, _ = /zoo|gra/, C = /([,: ])(transform)/g, P = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, q = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, z = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, oe = /\(\s*(.*)\s*\)/g, de = /([\s\S]*?);/g, xe = /-self|flex-/g, Re = /[^]*?(:[rp][el]a[\w-]+)[^]*/, De = /stretch|:\s*\w+\-(?:conte|avail)/, se = /([^-])(image-set\()/, pe = 1, _e = 1, Ae = 0, ve = 1, Xe = [], Oe = [], Ce = 0, $e = null, ze = 0, le = "";
  return A.use = b, A.set = m, e !== void 0 && m(e), A;
}
var ud = {
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
function dd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var pd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ki = /* @__PURE__ */ dd(
  function(e) {
    return pd.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), hl = { exports: {} }, Be = {}, es;
function fd() {
  if (es) return Be;
  es = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, A = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, U = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, q = e ? Symbol.for("react.scope") : 60119;
  function Y(S) {
    if (typeof S == "object" && S !== null) {
      var oe = S.$$typeof;
      switch (oe) {
        case t:
          switch (S = S.type, S) {
            case b:
            case m:
            case n:
            case s:
            case o:
            case E:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case f:
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
    return Y(S) === m;
  }
  return Be.AsyncMode = b, Be.ConcurrentMode = m, Be.ContextConsumer = f, Be.ContextProvider = p, Be.Element = t, Be.ForwardRef = A, Be.Fragment = n, Be.Lazy = _, Be.Memo = U, Be.Portal = r, Be.Profiler = s, Be.StrictMode = o, Be.Suspense = E, Be.isAsyncMode = function(S) {
    return z(S) || Y(S) === b;
  }, Be.isConcurrentMode = z, Be.isContextConsumer = function(S) {
    return Y(S) === f;
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
    return typeof S == "string" || typeof S == "function" || S === n || S === m || S === s || S === o || S === E || S === O || typeof S == "object" && S !== null && (S.$$typeof === _ || S.$$typeof === U || S.$$typeof === p || S.$$typeof === f || S.$$typeof === A || S.$$typeof === P || S.$$typeof === F || S.$$typeof === q || S.$$typeof === C);
  }, Be.typeOf = Y, Be;
}
hl.exports = fd();
var md = hl.exports, Xo = md, hd = {
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
}, gd = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, bd = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, gl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Jo = {};
Jo[Xo.ForwardRef] = bd;
Jo[Xo.Memo] = gl;
function ts(e) {
  return Xo.isMemo(e) ? gl : Jo[e.$$typeof] || hd;
}
var yd = Object.defineProperty, xd = Object.getOwnPropertyNames, rs = Object.getOwnPropertySymbols, vd = Object.getOwnPropertyDescriptor, wd = Object.getPrototypeOf, ns = Object.prototype;
function bl(e, t, r) {
  if (typeof t != "string") {
    if (ns) {
      var n = wd(t);
      n && n !== ns && bl(e, n, r);
    }
    var o = xd(t);
    rs && (o = o.concat(rs(t)));
    for (var s = ts(e), p = ts(t), f = 0; f < o.length; ++f) {
      var b = o[f];
      if (!gd[b] && !(r && r[b]) && !(p && p[b]) && !(s && s[b])) {
        var m = vd(t, b);
        try {
          yd(e, b, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var Sd = bl;
const kd = /* @__PURE__ */ Ho(Sd);
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
var as = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, ko = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !ml.typeOf(e);
}, Ca = Object.freeze([]), jr = Object.freeze({});
function Fn(e) {
  return typeof e == "function";
}
function os(e) {
  return e.displayName || e.name || "Component";
}
function Qo(e) {
  return e && typeof e.styledComponentId == "string";
}
var an = typeof xt < "u" && xt.env !== void 0 && (xt.env.REACT_APP_SC_ATTR || xt.env.SC_ATTR) || "data-styled", Zo = typeof window < "u" && "HTMLElement" in window, Td = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof xt < "u" && xt.env !== void 0 && (xt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && xt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? xt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && xt.env.REACT_APP_SC_DISABLE_SPEEDY : xt.env.SC_DISABLE_SPEEDY !== void 0 && xt.env.SC_DISABLE_SPEEDY !== "" ? xt.env.SC_DISABLE_SPEEDY !== "false" && xt.env.SC_DISABLE_SPEEDY : xt.env.NODE_ENV !== "production"));
function zn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Cd = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++) n += this.groupSizes[o];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, p = s; r >= p; ) (p <<= 1) < 0 && zn(16, "" + r);
      this.groupSizes = new Uint32Array(p), this.groupSizes.set(o), this.length = p;
      for (var f = s; f < p; f++) this.groupSizes[f] = 0;
    }
    for (var b = this.indexOfGroup(r + 1), m = 0, A = n.length; m < A; m++) this.tag.insertRule(b, n[m]) && (this.groupSizes[r]++, b++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), s = o + n;
      this.groupSizes[r] = 0;
      for (var p = o; p < s; p++) this.tag.deleteRule(o);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var o = this.groupSizes[r], s = this.indexOfGroup(r), p = s + o, f = s; f < p; f++) n += this.tag.getRule(f) + `/*!sc*/
`;
    return n;
  }, e;
}(), xa = /* @__PURE__ */ new Map(), Aa = /* @__PURE__ */ new Map(), In = 1, pa = function(e) {
  if (xa.has(e)) return xa.get(e);
  for (; Aa.has(In); ) In++;
  var t = In++;
  return xa.set(e, t), Aa.set(t, e), t;
}, Ad = function(e) {
  return Aa.get(e);
}, Ed = function(e, t) {
  t >= In && (In = t + 1), xa.set(e, t), Aa.set(t, e);
}, _d = "style[" + an + '][data-styled-version="5.3.11"]', Od = new RegExp("^" + an + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), jd = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, p = o.length; s < p; s++) (n = o[s]) && e.registerName(t, n);
}, Nd = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = r.length; o < s; o++) {
    var p = r[o].trim();
    if (p) {
      var f = p.match(Od);
      if (f) {
        var b = 0 | parseInt(f[1], 10), m = f[2];
        b !== 0 && (Ed(m, b), jd(e, m, f[3]), e.getTag().insertRules(b, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, Rd = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, yl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(f) {
    for (var b = f.childNodes, m = b.length; m >= 0; m--) {
      var A = b[m];
      if (A && A.nodeType === 1 && A.hasAttribute(an)) return A;
    }
  }(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(an, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = Rd();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, Pd = function() {
  function e(r) {
    var n = this.element = yl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, p = 0, f = s.length; p < f; p++) {
        var b = s[p];
        if (b.ownerNode === o) return b;
      }
      zn(17);
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
}(), Ld = function() {
  function e(r) {
    var n = this.element = yl(r);
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
}(), Id = function() {
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
}(), is = Zo, Dd = { isServer: !Zo, useCSSOMInjection: !Td }, xl = function() {
  function e(r, n, o) {
    r === void 0 && (r = jr), n === void 0 && (n = {}), this.options = wr({}, Dd, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && Zo && is && (is = !1, function(s) {
      for (var p = document.querySelectorAll(_d), f = 0, b = p.length; f < b; f++) {
        var m = p[f];
        m && m.getAttribute(an) !== "active" && (Nd(s, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(r) {
    return pa(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(wr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = o ? new Id(p) : s ? new Pd(p) : new Ld(p), new Cd(r)));
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
        var f = Ad(p);
        if (f !== void 0) {
          var b = r.names.get(f), m = n.getGroup(p);
          if (b && m && b.size) {
            var A = an + ".g" + p + '[id="' + f + '"]', E = "";
            b !== void 0 && b.forEach(function(O) {
              O.length > 0 && (E += O + ",");
            }), s += "" + m + A + '{content:"' + E + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Md = /(a)(d)/gi, ss = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function To(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = ss(t % 52) + r;
  return (ss(t % 52) + r).replace(Md, "$1-$2");
}
var en = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, vl = function(e) {
  return en(5381, e);
};
function Fd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Fn(r) && !Qo(r)) return !1;
  }
  return !0;
}
var $d = vl("5.3.11"), Ud = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Fd(t), this.componentId = r, this.baseHash = en($d, r), this.baseStyle = n, xl.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = on(this.rules, t, r, n).join(""), f = To(en(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(o, f)) {
        var b = n(p, "." + f, void 0, o);
        r.insertRules(o, f, b);
      }
      s.push(f), this.staticRulesId = f;
    }
    else {
      for (var m = this.rules.length, A = en(this.baseHash, n.hash), E = "", O = 0; O < m; O++) {
        var U = this.rules[O];
        if (typeof U == "string") E += U;
        else if (U) {
          var _ = on(U, t, r, n), C = Array.isArray(_) ? _.join("") : _;
          A = en(A, C + O), E += C;
        }
      }
      if (E) {
        var P = To(A >>> 0);
        if (!r.hasNameForId(o, P)) {
          var F = n(E, "." + P, void 0, o);
          r.insertRules(o, P, F);
        }
        s.push(P);
      }
    }
    return s.join(" ");
  }, e;
}(), zd = /^\s*\/\/.*$/gm, qd = [":", "[", ".", "#"];
function Bd(e) {
  var t, r, n, o, s = jr, p = s.options, f = p === void 0 ? jr : p, b = s.plugins, m = b === void 0 ? Ca : b, A = new cd(f), E = [], O = /* @__PURE__ */ function(C) {
    function P(F) {
      if (F) try {
        C(F + "}");
      } catch {
      }
    }
    return function(F, q, Y, z, S, oe, de, xe, Re, De) {
      switch (F) {
        case 1:
          if (Re === 0 && q.charCodeAt(0) === 64) return C(q + ";"), "";
          break;
        case 2:
          if (xe === 0) return q + "/*|*/";
          break;
        case 3:
          switch (xe) {
            case 102:
            case 112:
              return C(Y[0] + q), "";
            default:
              return q + (De === 0 ? "/*|*/" : "");
          }
        case -2:
          q.split("/*|*/}").forEach(P);
      }
    };
  }(function(C) {
    E.push(C);
  }), U = function(C, P, F) {
    return P === 0 && qd.indexOf(F[r.length]) !== -1 || F.match(o) ? C : "." + t;
  };
  function _(C, P, F, q) {
    q === void 0 && (q = "&");
    var Y = C.replace(zd, ""), z = P && F ? F + " " + P + " { " + Y + " }" : Y;
    return t = q, r = P, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), A(F || !P ? "" : P, z);
  }
  return A.use([].concat(m, [function(C, P, F) {
    C === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, U));
  }, O, function(C) {
    if (C === -2) {
      var P = E;
      return E = [], P;
    }
  }])), _.hash = m.length ? m.reduce(function(C, P) {
    return P.name || zn(15), en(C, P.name);
  }, 5381).toString() : "", _;
}
var wl = mt.createContext();
wl.Consumer;
var Sl = mt.createContext(), Wd = (Sl.Consumer, new xl()), Co = Bd();
function Hd() {
  return qt(wl) || Wd;
}
function Vd() {
  return qt(Sl) || Co;
}
var Gd = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Co);
      var p = n.name + s.hash;
      o.hasNameForId(n.id, p) || o.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return zn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Co), this.name + t.hash;
  }, e;
}(), Yd = /([A-Z])/, Xd = /([A-Z])/g, Jd = /^ms-/, Qd = function(e) {
  return "-" + e.toLowerCase();
};
function ls(e) {
  return Yd.test(e) ? e.replace(Xd, Qd).replace(Jd, "-ms-") : e;
}
var cs = function(e) {
  return e == null || e === !1 || e === "";
};
function on(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], p = 0, f = e.length; p < f; p += 1) (o = on(e[p], t, r, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (cs(e)) return "";
  if (Qo(e)) return "." + e.styledComponentId;
  if (Fn(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return on(b, t, r, n);
  }
  var m;
  return e instanceof Gd ? r ? (e.inject(r, n), e.getName(n)) : e : ko(e) ? function A(E, O) {
    var U, _, C = [];
    for (var P in E) E.hasOwnProperty(P) && !cs(E[P]) && (Array.isArray(E[P]) && E[P].isCss || Fn(E[P]) ? C.push(ls(P) + ":", E[P], ";") : ko(E[P]) ? C.push.apply(C, A(E[P], P)) : C.push(ls(P) + ": " + (U = P, (_ = E[P]) == null || typeof _ == "boolean" || _ === "" ? "" : typeof _ != "number" || _ === 0 || U in ud || U.startsWith("--") ? String(_).trim() : _ + "px") + ";"));
    return O ? [O + " {"].concat(C, ["}"]) : C;
  }(e) : e.toString();
}
var us = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Zd(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Fn(e) || ko(e) ? us(on(as(Ca, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : us(on(as(e, r)));
}
var Kd = function(e, t, r) {
  return r === void 0 && (r = jr), e.theme !== r.theme && e.theme || t || r.theme;
}, ep = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, tp = /(^-|-$)/g;
function no(e) {
  return e.replace(ep, "-").replace(tp, "");
}
var rp = function(e) {
  return To(vl(e) >>> 0);
};
function fa(e) {
  return typeof e == "string" && xt.env.NODE_ENV === "production";
}
var Ao = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, np = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ap(e, t, r) {
  var n = e[r];
  Ao(t) && Ao(n) ? kl(n, t) : e[r] = t;
}
function kl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var o = 0, s = r; o < s.length; o++) {
    var p = s[o];
    if (Ao(p)) for (var f in p) np(f) && ap(e, p[f], f);
  }
  return e;
}
var Tl = mt.createContext();
Tl.Consumer;
var ao = {};
function Cl(e, t, r) {
  var n = Qo(e), o = !fa(e), s = t.attrs, p = s === void 0 ? Ca : s, f = t.componentId, b = f === void 0 ? function(q, Y) {
    var z = typeof q != "string" ? "sc" : no(q);
    ao[z] = (ao[z] || 0) + 1;
    var S = z + "-" + rp("5.3.11" + z + ao[z]);
    return Y ? Y + "-" + S : S;
  }(t.displayName, t.parentComponentId) : f, m = t.displayName, A = m === void 0 ? function(q) {
    return fa(q) ? "styled." + q : "Styled(" + os(q) + ")";
  }(e) : m, E = t.displayName && t.componentId ? no(t.displayName) + "-" + t.componentId : t.componentId || b, O = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, U = t.shouldForwardProp;
  n && e.shouldForwardProp && (U = t.shouldForwardProp ? function(q, Y, z) {
    return e.shouldForwardProp(q, Y, z) && t.shouldForwardProp(q, Y, z);
  } : e.shouldForwardProp);
  var _, C = new Ud(r, E, n ? e.componentStyle : void 0), P = C.isStatic && p.length === 0, F = function(q, Y) {
    return function(z, S, oe, de) {
      var xe = z.attrs, Re = z.componentStyle, De = z.defaultProps, se = z.foldedComponentIds, pe = z.shouldForwardProp, _e = z.styledComponentId, Ae = z.target, ve = function($, y, te) {
        $ === void 0 && ($ = jr);
        var j = wr({}, y, { theme: $ }), ie = {};
        return te.forEach(function(ee) {
          var re, X, ce, fe = ee;
          for (re in Fn(fe) && (fe = fe(j)), fe) j[re] = ie[re] = re === "className" ? (X = ie[re], ce = fe[re], X && ce ? X + " " + ce : X || ce) : fe[re];
        }), [j, ie];
      }(Kd(S, qt(Tl), De) || jr, S, xe), Xe = ve[0], Oe = ve[1], Ce = function($, y, te, j) {
        var ie = Hd(), ee = Vd(), re = y ? $.generateAndInjectStyles(jr, ie, ee) : $.generateAndInjectStyles(te, ie, ee);
        return re;
      }(Re, de, Xe), $e = oe, ze = Oe.$as || S.$as || Oe.as || S.as || Ae, le = fa(ze), H = Oe !== S ? wr({}, S, {}, Oe) : S, R = {};
      for (var W in H) W[0] !== "$" && W !== "as" && (W === "forwardedAs" ? R.as = H[W] : (pe ? pe(W, Ki, ze) : !le || Ki(W)) && (R[W] = H[W]));
      return S.style && Oe.style !== S.style && (R.style = wr({}, S.style, {}, Oe.style)), R.className = Array.prototype.concat(se, _e, Ce !== _e ? Ce : null, S.className, Oe.className).filter(Boolean).join(" "), R.ref = $e, Xs(ze, R);
    }(_, q, Y, P);
  };
  return F.displayName = A, (_ = mt.forwardRef(F)).attrs = O, _.componentStyle = C, _.displayName = A, _.shouldForwardProp = U, _.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ca, _.styledComponentId = E, _.target = n ? e.target : e, _.withComponent = function(q) {
    var Y = t.componentId, z = function(oe, de) {
      if (oe == null) return {};
      var xe, Re, De = {}, se = Object.keys(oe);
      for (Re = 0; Re < se.length; Re++) xe = se[Re], de.indexOf(xe) >= 0 || (De[xe] = oe[xe]);
      return De;
    }(t, ["componentId"]), S = Y && Y + "-" + (fa(q) ? q : no(os(q)));
    return Cl(q, wr({}, z, { attrs: O, componentId: S }), r);
  }, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(q) {
    this._foldedDefaultProps = n ? kl({}, e.defaultProps, q) : q;
  } }), Object.defineProperty(_, "toString", { value: function() {
    return "." + _.styledComponentId;
  } }), o && kd(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), _;
}
var nr = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = jr), !ml.isValidElementType(n)) return zn(1, String(n));
    var s = function() {
      return r(n, o, Zd.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, wr({}, o, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, wr({}, o, { attrs: Array.prototype.concat(o.attrs, p).filter(Boolean) }));
    }, s;
  }(Cl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  nr[e] = nr(e);
});
const op = nr.div`
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
`, va = "On This Page", ip = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: va
}, Al = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: r = !1
}) => {
  const { isReact: n, isBootstrap: o } = Go(), s = nn(null), p = Ou("(max-width: 991px)"), [f, b] = ut({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), m = p ? 110 : 142, A = () => {
    var F;
    const q = {}, Y = window.scrollY, z = (F = document.getElementById(t)) == null ? void 0 : F.getBoundingClientRect().top, S = 103;
    z >= 0 && (q.sticky = !1, q.activeContainer = ""), Y > s.current.getBoundingClientRect().top && (q.sticky = !0);
    const oe = f.hasHeader ? m + S : S;
    e == null || e.forEach(({ targetIdName: de }) => {
      const xe = document.getElementById(de), Re = (xe == null ? void 0 : xe.getBoundingClientRect().top) - oe, De = (xe == null ? void 0 : xe.getBoundingClientRect().bottom) - oe;
      Re < 0 && De > 0 && (q.activeContainer = de);
    }), b((de) => ({
      ...de,
      ...q
    }));
  }, E = () => {
    ed(A, 150), td(A, 150);
  }, O = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), U = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function _(F = null) {
    if (F === null) return f.containerClass;
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
      hasHeader: O(),
      hasAltMenuSpacing: U(),
      containerClass: _(F)
    };
    b((Y) => ({
      ...Y,
      ...q
    }));
  }, []), At(() => (window == null || window.addEventListener("scroll", E), () => window.removeEventListener("scroll", E)), [f.hasHeader]);
  const C = (F) => {
    var q, Y;
    const z = window.scrollY - (f.hasHeader ? m + 100 : 100), S = p ? 410 : 90;
    let oe = ((q = document.getElementById(F)) == null ? void 0 : q.getBoundingClientRect().top) + z;
    s.current.classList.contains("sticky") || (oe -= S), r && ((Y = Ku(`#${F}`)) == null || Y.focus()), window.scrollTo({ top: oe, behavior: "smooth" });
  }, P = () => {
    b((F) => ({
      ...F,
      showMenu: !F.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ B.jsx(
    op,
    {
      requiresAltMenuSpacing: f.hasAltMenuSpacing,
      ref: s,
      id: "uds-anchor-menu",
      className: ct(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: f.sticky,
          "with-header": f.hasHeader
        }
      ),
      style: f.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ B.jsxs("div", { className: `${f.containerClass} uds-anchor-menu-wrapper`, children: [
        p ? /* @__PURE__ */ B.jsx(
          Jr,
          {
            gaData: {
              ...ip,
              action: f.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ B.jsx(
              "button",
              {
                className: ct("mobile-menu-toggler", {
                  "show-menu": f.showMenu
                }),
                type: "button",
                onClick: P,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseAnchorMenu",
                "aria-controls": "collapseAnchorMenu",
                children: /* @__PURE__ */ B.jsxs("h4", { children: [
                  va,
                  ":",
                  /* @__PURE__ */ B.jsx("i", { className: "fas fa-chevron-down" })
                ] })
              }
            )
          }
        ) : /* @__PURE__ */ B.jsxs("h4", { children: [
          va,
          ":"
        ] }),
        /* @__PURE__ */ B.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: ct("card", "card-body", "collapse", {
              show: f.showMenu
            }),
            children: /* @__PURE__ */ B.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": va,
                children: e == null ? void 0 : e.map((F) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ B.jsx(
                    Tr,
                    {
                      "data-testid": `anchor-item-${F.targetIdName}`,
                      classes: ct("nav-link", {
                        active: f.activeContainer === F.targetIdName
                      }).split(" "),
                      ariaLabel: F.text,
                      label: F.text,
                      icon: F.icon,
                      onClick: n && (() => C(F.targetIdName)),
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
Al.propTypes = {
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
function Pa(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], o = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(o)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var sp = /* @__PURE__ */ function() {
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
}, lp = function(e, t, r, n) {
  function o(s) {
    return s instanceof r ? s : new r(function(p) {
      p(s);
    });
  }
  return new (r || (r = Promise))(function(s, p) {
    function f(A) {
      try {
        m(n.next(A));
      } catch (E) {
        p(E);
      }
    }
    function b(A) {
      try {
        m(n.throw(A));
      } catch (E) {
        p(E);
      }
    }
    function m(A) {
      A.done ? s(A.value) : o(A.value).then(f, b);
    }
    m((n = n.apply(e, [])).next());
  });
}, cp = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, o, s, p;
  return p = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
    return this;
  }), p;
  function f(m) {
    return function(A) {
      return b([m, A]);
    };
  }
  function b(m) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (n = 1, o && (s = m[0] & 2 ? o.return : m[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, m[1])).done) return s;
      switch (o = 0, s && (m = [m[0] & 2, s.value]), m[0]) {
        case 0:
        case 1:
          s = m;
          break;
        case 4:
          return r.label++, { value: m[1], done: !1 };
        case 5:
          r.label++, o = m[1], m = [0];
          continue;
        case 7:
          m = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (m[0] === 6 || m[0] === 2)) {
            r = 0;
            continue;
          }
          if (m[0] === 3 && (!s || m[1] > s[0] && m[1] < s[3])) {
            r.label = m[1];
            break;
          }
          if (m[0] === 6 && r.label < s[1]) {
            r.label = s[1], s = m;
            break;
          }
          if (s && r.label < s[2]) {
            r.label = s[2], r.ops.push(m);
            break;
          }
          s[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      m = t.call(e, r);
    } catch (A) {
      m = [6, A], o = 0;
    } finally {
      n = s = 0;
    }
    if (m[0] & 5) throw m[1];
    return { value: m[0] ? m[1] : void 0, done: !0 };
  }
}, El = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}, up = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, dp = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, pp = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function fp(e, t, r) {
  var n = t.height, o = t.width, s = El(t, ["height", "width"]), p = Hr({ height: n, width: o, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), f = window.open(e, "", Object.keys(p).map(function(m) {
    return "".concat(m, "=").concat(p[m]);
  }).join(", "));
  if (r)
    var b = window.setInterval(function() {
      try {
        (f === null || f.closed) && (window.clearInterval(b), r(f));
      } catch (m) {
        console.error(m);
      }
    }, 1e3);
  return f;
}
var mp = (
  /** @class */
  function(e) {
    sp(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var o = r.props, s = o.onShareWindowClose, p = o.windowHeight, f = p === void 0 ? 400 : p, b = o.windowPosition, m = b === void 0 ? "windowCenter" : b, A = o.windowWidth, E = A === void 0 ? 550 : A, O = Hr({ height: f, width: E }, m === "windowCenter" ? dp(E, f) : pp(E, f));
        fp(n, O, s);
      }, r.handleClick = function(n) {
        return lp(r, void 0, void 0, function() {
          var o, s, p, f, b, m, A, E, O, U;
          return cp(this, function(_) {
            switch (_.label) {
              case 0:
                return o = this.props, s = o.beforeOnClick, p = o.disabled, f = o.networkLink, b = o.onClick, m = o.url, A = o.openShareDialogOnClick, E = o.opts, O = f(m, E), p ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? (U = s(), up(U) ? [4, U] : [3, 2]) : [3, 2]);
              case 1:
                _.sent(), _.label = 2;
              case 2:
                return A && this.openShareDialog(O), b && b(n, O), [
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
      var n = r.children, o = r.className, s = r.disabled, p = r.disabledStyle, f = r.forwardedRef;
      r.networkLink;
      var b = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var m = r.resetButtonStyle, A = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var E = El(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), O = ct("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, o), U = Hr(Hr(m ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, A), s && p);
      return mt.createElement("button", Hr({}, E, { "aria-label": E["aria-label"] || b, className: O, onClick: this.handleClick, ref: f, style: U }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(yu)
), Ea = function() {
  return Ea = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Ea.apply(this, arguments);
};
function La(e, t, r, n) {
  function o(s, p) {
    var f = r(s), b = Ea({}, s), m = Object.keys(f);
    return m.forEach(function(A) {
      delete b[A];
    }), mt.createElement(mp, Ea({}, n, b, { forwardedRef: p, networkName: e, networkLink: t, opts: r(s) }));
  }
  return o.displayName = "ShareButton-".concat(e), Ys(o);
}
function hp(e, t) {
  var r = t.subject, n = t.body, o = t.separator;
  return "mailto:" + Pa({ subject: r, body: n ? n + o + e : e });
}
La("email", hp, function(e) {
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
var gp = /* @__PURE__ */ function() {
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
}(), bp = (
  /** @class */
  function(e) {
    gp(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function Dn(e, t) {
  if (!e)
    throw new bp(t);
}
function yp(e, t) {
  var r = t.quote, n = t.hashtag;
  return Dn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Pa({
    u: e,
    quote: r,
    hashtag: n
  });
}
La("facebook", yp, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function xp(e, t) {
  var r = t.title, n = t.summary, o = t.source;
  return Dn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Pa({ url: e, mini: "true", title: r, summary: n, source: o });
}
La("linkedin", xp, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function vp(e, t) {
  var r = t.title, n = t.via, o = t.hashtags, s = o === void 0 ? [] : o, p = t.related, f = p === void 0 ? [] : p;
  return Dn(e, "twitter.url"), Dn(Array.isArray(s), "twitter.hashtags is not an array"), Dn(Array.isArray(f), "twitter.related is not an array"), "https://twitter.com/share" + Pa({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: f.length > 0 ? f.join(",") : void 0
  });
}
La("twitter", vp, function(e) {
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
function Eo(e) {
  "@babel/helpers - typeof";
  return Eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Eo(e);
}
var wp = (typeof window > "u" ? "undefined" : Eo(window)) === "object" && window.Element || function() {
};
function Sp(e, t, r) {
  if (!(e[t] instanceof wp))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, Sp, l.shape({
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
const kp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, _l = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  color: o = "gray",
  disabled: s,
  element: p = "button",
  innerRef: f,
  href: b,
  onClick: m,
  ...A
}) => {
  const E = ct("btn", "btn-tag", {
    "btn-tag-alt-white": o === "white",
    "btn-tag-alt-gray": o === "gray",
    "btn-tag-alt-dark": o === "dark",
    disabled: s
  });
  let O = p;
  return b && p === "button" && (O = "a"), /* @__PURE__ */ B.jsx(
    Jr,
    {
      gaData: {
        ...kp,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ B.jsx(
        O,
        {
          type: O === "button" && m ? "button" : void 0,
          ...A,
          className: E,
          href: b,
          ref: f,
          onClick: m,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
_l.propTypes = {
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
  gaData: Vo,
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
const Ol = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: o = "async",
  dataTestId: s,
  fetchPriority: p = "auto",
  width: f,
  height: b,
  cardLink: m,
  title: A,
  caption: E,
  captionTitle: O,
  border: U,
  dropShadow: _
}) => {
  const C = {
    src: e,
    alt: t,
    loading: n,
    decoding: o,
    fetchpriority: p,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: ju(r) },
    ...s && { "data-testid": s },
    ...f && { width: f },
    ...b && { height: b }
  }, P = ct("uds-img", {
    borderless: !U,
    "uds-img-drop-shadow": _
  }), F = (Y) => {
    const z = Y ? `${C.className} ${Y}` : C.className;
    return m ? /* @__PURE__ */ B.jsxs("a", { href: m, children: [
      /* @__PURE__ */ B.jsx("img", { ...C, className: z }),
      /* @__PURE__ */ B.jsx("span", { className: "visually-hidden", children: A })
    ] }) : /* @__PURE__ */ B.jsx("img", { ...C, className: z });
  }, q = () => /* @__PURE__ */ B.jsx("div", { className: P, children: /* @__PURE__ */ B.jsxs("figure", { className: "figure uds-figure", children: [
    F(),
    E && /* @__PURE__ */ B.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      O && /* @__PURE__ */ B.jsx("h3", { children: O }),
      /* @__PURE__ */ B.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Wr(E)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ B.jsx(B.Fragment, { children: E ? q() : F(P) });
};
Ol.propTypes = {
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
const Tp = nr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Cp = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Ap = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Cp(e) ? `mailto:${e}` : e, Ep = {
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
  body: f,
  eventFormat: b = "stack",
  eventLocation: m,
  eventTime: A,
  buttons: E,
  linkLabel: O,
  linkUrl: U,
  tags: _,
  showBorders: C = !0,
  cardLink: P
}) => /* @__PURE__ */ B.jsx(
  jl,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: o,
    title: s,
    icon: p,
    body: f,
    eventFormat: b,
    eventLocation: m,
    eventTime: A,
    buttons: E,
    linkLabel: O,
    linkUrl: U,
    tags: _,
    showBorders: C,
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
const jl = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n = "",
  imageAltText: o = "",
  title: s,
  icon: p = void 0,
  body: f = "",
  eventFormat: b = "stack",
  eventLocation: m = "",
  eventTime: A = "",
  buttons: E = void 0,
  linkLabel: O = void 0,
  linkUrl: U = void 0,
  tags: _ = void 0,
  showBorders: C = !0,
  cardLink: P
}) => {
  const F = ct("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !C
  });
  return /* @__PURE__ */ B.jsx(B.Fragment, { children: /* @__PURE__ */ B.jsxs(Tp, { className: F, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ B.jsx(
      Ol,
      {
        src: n,
        alt: o,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: P,
        title: s
      }
    ),
    !n && p && /* @__PURE__ */ B.jsx(
      "i",
      {
        className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ B.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ B.jsx(
      _o,
      {
        type: e,
        body: f,
        eventFormat: b,
        eventLocation: m,
        eventTime: A,
        title: s,
        buttons: E,
        linkLabel: O,
        linkUrl: U,
        tags: _,
        cardLink: P
      }
    ) }) : /* @__PURE__ */ B.jsx(
      _o,
      {
        type: e,
        body: f,
        eventFormat: b,
        eventLocation: m,
        eventTime: A,
        title: s,
        buttons: E,
        linkLabel: O,
        linkUrl: U,
        tags: _,
        cardLink: P
      }
    )
  ] }) });
};
jl.propTypes = {
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
const _o = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: n = "",
  eventTime: o = "",
  title: s,
  buttons: p = void 0,
  linkLabel: f = void 0,
  linkUrl: b = void 0,
  tags: m = void 0,
  cardLink: A
}) => /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
  !!s && /* @__PURE__ */ B.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ B.jsx("h3", { className: "card-title", children: A ? /* @__PURE__ */ B.jsx("a", { href: A, children: s }) : s }) }),
  !!t && /* @__PURE__ */ B.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Wr(t) }) }),
  e === "event" && (o || n) && /* @__PURE__ */ B.jsx(
    Nl,
    {
      eventFormat: r,
      eventTime: o,
      eventLocation: n
    }
  ),
  p && /* @__PURE__ */ B.jsx("div", { className: "card-buttons", children: p.map((E) => /* @__PURE__ */ B.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ B.jsx(
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
  b && f && /* @__PURE__ */ B.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ B.jsx(
    Jr,
    {
      gaData: {
        ...Ep,
        section: s,
        text: f
      },
      children: /* @__PURE__ */ B.jsx("a", { href: Ap(b), children: f })
    }
  ) }),
  m && /* @__PURE__ */ B.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: m.map((E) => (
    // @ts-ignore
    /* @__PURE__ */ B.jsx(
      _l,
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
_o.propTypes = {
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
const Nl = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ B.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Wr(r) })
  ] }),
  t && /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ B.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Wr(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
  r && /* @__PURE__ */ B.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Wr(r) })
  ] }) }),
  t && /* @__PURE__ */ B.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ B.jsx("span", { children: /* @__PURE__ */ B.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Wr(t)
      }
    ) })
  ] }) })
] });
Nl.propTypes = {
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
Gs(null);
l.element, l.element, l.number, l.func, l.func, l.string;
const _p = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), Op = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
});
l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
});
const jp = l.shape({
  url: l.string,
  filters: l.string
});
l.shape({
  header: _p,
  ctaButton: Op,
  dataSource: jp,
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
const Np = nr.img`
  width: 100%;
`;
function Rp({ image: e, title: t, contents: r }) {
  return console.log({ image: e, title: t, contents: r }), /* @__PURE__ */ B.jsx("div", { children: "TODO: to be implemented" });
}
function Pp({
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
  }, f = {
    black: "text-dark",
    white: "text-white",
    undefined: ""
  };
  return /* @__PURE__ */ B.jsxs(
    "div",
    {
      className: ct("uds-hero", {
        [s[e == null ? void 0 : e.size]]: e == null ? void 0 : e.size
      }),
      children: [
        /* @__PURE__ */ B.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ B.jsx(
          Np,
          {
            className: "hero",
            src: e == null ? void 0 : e.url,
            alt: e == null ? void 0 : e.altText,
            "data-testid": "hero-image"
          }
        ),
        t && /* @__PURE__ */ B.jsx("div", { role: "doc-subtitle", "data-testid": "hero-subtitle", children: /* @__PURE__ */ B.jsx(
          "span",
          {
            className: ct({
              [f[t.color]]: t.color,
              [p[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        r && /* @__PURE__ */ B.jsx("h1", { style: { maxWidth: r.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ B.jsx(
          "span",
          {
            className: ct({
              [f[r.color]]: r.color,
              [p[r.highlightColor]]: r.highlightColor
            }),
            children: r.text
          }
        ) }),
        n && /* @__PURE__ */ B.jsx(
          "div",
          {
            "data-testid": "hero-content",
            className: ct("content", {
              [f[o]]: o
            }),
            children: n.map((b, m) => /* @__PURE__ */ B.jsx("p", { children: b.text }, `content-${m}`))
          }
        )
      ]
    }
  );
}
const qn = (e) => {
  const t = e.type || "heading-hero";
  return {
    "heading-hero": () => Pp(e),
    "story-hero": () => Rp(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
qn.propTypes = {
  type: l.oneOf(["heading-hero", "story-hero"]),
  image: _u,
  title: Ja,
  subTitle: Ja,
  contents: l.arrayOf(Ja),
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
  ariaLabel: f,
  children: b,
  ariaDisabled: m
}) => /* @__PURE__ */ B.jsx(
  "li",
  {
    className: ct("page-item", {
      disabled: r,
      active: o,
      elipses: p
    }),
    children: t ? /* @__PURE__ */ B.jsxs(
      "button",
      {
        type: "button",
        "aria-label": f,
        className: ct("page-link", {
          "page-link-icon": n
        }),
        onClick: s,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": o ? "page" : null,
        "aria-disabled": m,
        children: [
          b,
          o && /* @__PURE__ */ B.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ B.jsx("span", { className: "page-link", "data-testid": "page-link", children: b })
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
const Lp = {
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
  const f = (A) => {
    ll({ ...Lp, text: `page ${A}` });
  }, b = (A, E) => {
    const O = {
      first: 1,
      prev: s === 1 ? 1 : s - 1,
      next: s === n ? n : s + 1,
      last: n
    }[E] ?? E;
    p(O), f(O), o == null || o(A, O);
  }, m = () => {
    if (n < 5)
      return /* @__PURE__ */ B.jsx(B.Fragment, { children: Array.from({ length: n }, (P, F) => {
        const q = F + 1;
        return /* @__PURE__ */ B.jsx(
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
    const A = 2, E = Fi(
      s === n - 1,
      1,
      s === n ? 2 : 1
    ), O = Fi(
      s === 1,
      2,
      1
    ), U = Yi(
      s - E,
      s,
      n
    ), _ = Yi(
      s,
      s + 1 + O,
      n
    ), C = [...U, ..._];
    return /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      C[0] !== 1 && /* @__PURE__ */ B.jsx(
        er,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: s === 1,
          onClick: (P) => b(P, "first"),
          children: "1"
        }
      ),
      s > n - A && /* @__PURE__ */ B.jsx(
        er,
        {
          isClickeable: !0,
          ariaLabel: `Page 2 of ${n}`,
          selectedPage: s === 2,
          onClick: (P) => b(P, 2),
          children: "2"
        }
      ),
      C[0] > 2 && /* @__PURE__ */ B.jsx(er, { ellipses: !0, children: "..." }),
      C.map((P) => /* @__PURE__ */ B.jsx(
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
      C[C.length - 1] < n - 1 && /* @__PURE__ */ B.jsx(er, { ellipses: !0, children: "..." }),
      s < A + 1 && /* @__PURE__ */ B.jsx(
        er,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n - 1} of ${n}`,
          selectedPage: s === n - 1,
          onClick: (P) => b(P, n - 1),
          children: n - 1
        }
      ),
      C[C.length - 1] !== n && /* @__PURE__ */ B.jsx(
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
  return /* @__PURE__ */ B.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ B.jsxs(
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
        /* @__PURE__ */ B.jsx(
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
        m(),
        /* @__PURE__ */ B.jsx(
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
const Ip = Ys(function(e, t) {
  const {
    id: r,
    selected: n,
    title: o,
    selectTab: s,
    leftKeyPressed: p,
    rightKeyPressed: f,
    icon: b,
    gaData: m
  } = e, { isReact: A, isBootstrap: E } = Go(), O = nn(null);
  xu(t, () => ({
    focus() {
      O.current.focus();
    },
    scrollIntoView() {
      var _, C, P, F, q, Y, z;
      const S = ((_ = O.current) == null ? void 0 : _.offsetWidth) / 2 + O.current.offsetLeft, oe = ((P = (C = O.current) == null ? void 0 : C.offsetParent) == null ? void 0 : P.scrollLeft) + ((q = (F = O.current) == null ? void 0 : F.offsetParent) == null ? void 0 : q.offsetWidth) / 2;
      (z = (Y = O.current) == null ? void 0 : Y.offsetParent) == null || z.scrollBy({
        left: S - oe
      });
    }
  }), []);
  const U = (_) => {
    _.keyCode === 37 ? (_.preventDefault(), p()) : _.keyCode === 39 && (_.preventDefault(), f());
  };
  return /* @__PURE__ */ B.jsx(Jr, { gaData: { ...m, text: o }, children: /* @__PURE__ */ B.jsxs(
    "a",
    {
      ref: O,
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
        b && /* @__PURE__ */ B.jsx("i", { className: `${b == null ? void 0 : b[0]} fa-${b == null ? void 0 : b[1]} me-1` })
      ]
    }
  ) });
});
Ip.propTypes = {
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
const Dp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  text: "play button"
}, Mp = ({
  url: e = "",
  vttUrl: t,
  caption: r,
  title: n = "",
  className: o,
  controls: s = !0
}) => {
  const p = nn(null);
  return /* @__PURE__ */ B.jsxs(
    "div",
    {
      className: ct(`uds-video-container ${o}`, {
        "uds-video-with-caption": r
      }),
      children: [
        /* @__PURE__ */ B.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ B.jsx(Jr, { gaData: { ...Dp, section: n }, children: /* @__PURE__ */ B.jsxs(
          "video",
          {
            ref: p,
            title: n,
            playsInline: !0,
            controls: s || !0,
            children: [
              /* @__PURE__ */ B.jsx("source", { src: e }),
              /* @__PURE__ */ B.jsx(
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
        r && /* @__PURE__ */ B.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ B.jsx("figcaption", { children: r }) })
      ]
    }
  );
}, Fp = ({ title: e = "", caption: t, url: r = "", className: n }) => /* @__PURE__ */ B.jsxs(
  "div",
  {
    className: ct(`uds-video-container ${n}`, {
      "uds-video-with-caption": t
    }),
    children: [
      /* @__PURE__ */ B.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ B.jsx("iframe", { title: e, src: r }) }),
      t && /* @__PURE__ */ B.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ B.jsx("figcaption", { children: t }) })
    ]
  }
), Ko = (e) => {
  const {
    type: t = "video",
    url: r = "",
    vttUrl: n,
    title: o = "",
    caption: s,
    className: p,
    controls: f = !0
  } = e;
  return t === "youtube" ? Fp({ url: r, title: o, caption: s, className: p }) : Mp({
    url: r,
    vttUrl: n,
    title: o,
    caption: s,
    className: p,
    controls: f
  });
};
Ko.propTypes = {
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
var $p = !1;
try {
  var ds = Object.defineProperty({}, "passive", {
    get: function() {
      $p = !0;
    }
  });
  window.addEventListener("testPassive", null, ds), window.removeEventListener("testPassive", null, ds);
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
const _a = {
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
l.string, _a.imageItems, _a.hasContent;
_a.imageItems.isRequired, _a.hasContent, l.string, l.string, l.bool;
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
var ps = Zs;
ps.createRoot, ps.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const Pl = () => {
  const [e, t] = ut(null), [r, n] = ut(!1), [o, s] = ut(null), [p, f] = ut("");
  return At(() => {
    if (!p) return;
    (() => {
      s(null), n(!0);
      try {
        fetch(p).then((m) => m.json()).then((m) => {
          t(m), n(!1);
        }).catch((m) => {
          s(m), n(!1);
        });
      } catch (m) {
        s(m);
      }
    })();
  }, [p]), [{ data: e, loading: r, error: o }, f];
}, sn = (e) => (e || []).join(" ");
const {
  entries: Ll,
  setPrototypeOf: fs,
  isFrozen: Up,
  getPrototypeOf: zp,
  getOwnPropertyDescriptor: qp
} = Object;
let {
  freeze: Ot,
  seal: Ut,
  create: Il
} = Object, {
  apply: Oo,
  construct: jo
} = typeof Reflect < "u" && Reflect;
Ot || (Ot = function(t) {
  return t;
});
Ut || (Ut = function(t) {
  return t;
});
Oo || (Oo = function(t, r, n) {
  return t.apply(r, n);
});
jo || (jo = function(t, r) {
  return new t(...r);
});
const ma = jt(Array.prototype.forEach), Bp = jt(Array.prototype.lastIndexOf), ms = jt(Array.prototype.pop), _n = jt(Array.prototype.push), Wp = jt(Array.prototype.splice), wa = jt(String.prototype.toLowerCase), oo = jt(String.prototype.toString), hs = jt(String.prototype.match), On = jt(String.prototype.replace), Hp = jt(String.prototype.indexOf), Vp = jt(String.prototype.trim), rr = jt(Object.prototype.hasOwnProperty), Ct = jt(RegExp.prototype.test), jn = Gp(TypeError);
function jt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    return Oo(e, t, n);
  };
}
function Gp(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return jo(e, r);
  };
}
function Fe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wa;
  fs && fs(e, null);
  let n = t.length;
  for (; n--; ) {
    let o = t[n];
    if (typeof o == "string") {
      const s = r(o);
      s !== o && (Up(t) || (t[n] = s), o = s);
    }
    e[o] = !0;
  }
  return e;
}
function Yp(e) {
  for (let t = 0; t < e.length; t++)
    rr(e, t) || (e[t] = null);
  return e;
}
function zr(e) {
  const t = Il(null);
  for (const [r, n] of Ll(e))
    rr(e, r) && (Array.isArray(n) ? t[r] = Yp(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = zr(n) : t[r] = n);
  return t;
}
function Nn(e, t) {
  for (; e !== null; ) {
    const n = qp(e, t);
    if (n) {
      if (n.get)
        return jt(n.get);
      if (typeof n.value == "function")
        return jt(n.value);
    }
    e = zp(e);
  }
  function r() {
    return null;
  }
  return r;
}
const gs = Ot(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), io = Ot(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), so = Ot(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Xp = Ot(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), lo = Ot(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Jp = Ot(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), bs = Ot(["#text"]), ys = Ot(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), co = Ot(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), xs = Ot(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ha = Ot(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Qp = Ut(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Zp = Ut(/<%[\w\W]*|[\w\W]*%>/gm), Kp = Ut(/\$\{[\w\W]*/gm), ef = Ut(/^data-[\-\w.\u00B7-\uFFFF]+$/), tf = Ut(/^aria-[\-\w]+$/), Dl = Ut(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), rf = Ut(/^(?:\w+script|data):/i), nf = Ut(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ml = Ut(/^html$/i), af = Ut(/^[a-z][.\w]*(-[.\w]+)+$/i);
var vs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: tf,
  ATTR_WHITESPACE: nf,
  CUSTOM_ELEMENT: af,
  DATA_ATTR: ef,
  DOCTYPE_NAME: Ml,
  ERB_EXPR: Zp,
  IS_ALLOWED_URI: Dl,
  IS_SCRIPT_OR_DATA: rf,
  MUSTACHE_EXPR: Qp,
  TMPLIT_EXPR: Kp
});
const Rn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, of = function() {
  return typeof window > "u" ? null : window;
}, sf = function(t, r) {
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
}, ws = function() {
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
function Fl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : of();
  const t = (x) => Fl(x);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== Rn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, o = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: p,
    Node: f,
    Element: b,
    NodeFilter: m,
    NamedNodeMap: A = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: O,
    trustedTypes: U
  } = e, _ = b.prototype, C = Nn(_, "cloneNode"), P = Nn(_, "remove"), F = Nn(_, "nextSibling"), q = Nn(_, "childNodes"), Y = Nn(_, "parentNode");
  if (typeof p == "function") {
    const x = r.createElement("template");
    x.content && x.content.ownerDocument && (r = x.content.ownerDocument);
  }
  let z, S = "";
  const {
    implementation: oe,
    createNodeIterator: de,
    createDocumentFragment: xe,
    getElementsByTagName: Re
  } = r, {
    importNode: De
  } = n;
  let se = ws();
  t.isSupported = typeof Ll == "function" && typeof Y == "function" && oe && oe.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: _e,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: ve,
    ARIA_ATTR: Xe,
    IS_SCRIPT_OR_DATA: Oe,
    ATTR_WHITESPACE: Ce,
    CUSTOM_ELEMENT: $e
  } = vs;
  let {
    IS_ALLOWED_URI: ze
  } = vs, le = null;
  const H = Fe({}, [...gs, ...io, ...so, ...lo, ...bs]);
  let R = null;
  const W = Fe({}, [...ys, ...co, ...xs, ...ha]);
  let $ = Object.seal(Il(null, {
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
  let we = !0, J = !1, ue = {}, Ze = null;
  const gt = Fe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qe = null;
  const ar = Fe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Mt = null;
  const pr = Fe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", yt = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml";
  let bt = it, Bt = !1, Wt = null;
  const Pr = Fe({}, [wt, yt, it], oo);
  let lt = Fe({}, ["mi", "mo", "mn", "ms", "mtext"]), St = Fe({}, ["annotation-xml"]);
  const or = Fe({}, ["title", "style", "font", "a", "script"]);
  let Le = null;
  const Ht = ["application/xhtml+xml", "text/html"], ir = "text/html";
  let Te = null, nt = null;
  const sr = r.createElement("form"), kt = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Ft = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(nt && nt === w)) {
      if ((!w || typeof w != "object") && (w = {}), w = zr(w), Le = // eslint-disable-next-line unicorn/prefer-includes
      Ht.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? ir : w.PARSER_MEDIA_TYPE, Te = Le === "application/xhtml+xml" ? oo : wa, le = rr(w, "ALLOWED_TAGS") ? Fe({}, w.ALLOWED_TAGS, Te) : H, R = rr(w, "ALLOWED_ATTR") ? Fe({}, w.ALLOWED_ATTR, Te) : W, Wt = rr(w, "ALLOWED_NAMESPACES") ? Fe({}, w.ALLOWED_NAMESPACES, oo) : Pr, Mt = rr(w, "ADD_URI_SAFE_ATTR") ? Fe(zr(pr), w.ADD_URI_SAFE_ATTR, Te) : pr, qe = rr(w, "ADD_DATA_URI_TAGS") ? Fe(zr(ar), w.ADD_DATA_URI_TAGS, Te) : ar, Ze = rr(w, "FORBID_CONTENTS") ? Fe({}, w.FORBID_CONTENTS, Te) : gt, y = rr(w, "FORBID_TAGS") ? Fe({}, w.FORBID_TAGS, Te) : {}, te = rr(w, "FORBID_ATTR") ? Fe({}, w.FORBID_ATTR, Te) : {}, ue = rr(w, "USE_PROFILES") ? w.USE_PROFILES : !1, j = w.ALLOW_ARIA_ATTR !== !1, ie = w.ALLOW_DATA_ATTR !== !1, ee = w.ALLOW_UNKNOWN_PROTOCOLS || !1, re = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, X = w.SAFE_FOR_TEMPLATES || !1, ce = w.SAFE_FOR_XML !== !1, fe = w.WHOLE_DOCUMENT || !1, ne = w.RETURN_DOM || !1, me = w.RETURN_DOM_FRAGMENT || !1, He = w.RETURN_TRUSTED_TYPE || !1, be = w.FORCE_BODY || !1, ye = w.SANITIZE_DOM !== !1, ft = w.SANITIZE_NAMED_PROPS || !1, we = w.KEEP_CONTENT !== !1, J = w.IN_PLACE || !1, ze = w.ALLOWED_URI_REGEXP || Dl, bt = w.NAMESPACE || it, lt = w.MATHML_TEXT_INTEGRATION_POINTS || lt, St = w.HTML_INTEGRATION_POINTS || St, $ = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && kt(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && ($.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && kt(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && ($.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && ($.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), X && (ie = !1), me && (ne = !0), ue && (le = Fe({}, bs), R = [], ue.html === !0 && (Fe(le, gs), Fe(R, ys)), ue.svg === !0 && (Fe(le, io), Fe(R, co), Fe(R, ha)), ue.svgFilters === !0 && (Fe(le, so), Fe(R, co), Fe(R, ha)), ue.mathMl === !0 && (Fe(le, lo), Fe(R, xs), Fe(R, ha))), w.ADD_TAGS && (le === H && (le = zr(le)), Fe(le, w.ADD_TAGS, Te)), w.ADD_ATTR && (R === W && (R = zr(R)), Fe(R, w.ADD_ATTR, Te)), w.ADD_URI_SAFE_ATTR && Fe(Mt, w.ADD_URI_SAFE_ATTR, Te), w.FORBID_CONTENTS && (Ze === gt && (Ze = zr(Ze)), Fe(Ze, w.FORBID_CONTENTS, Te)), we && (le["#text"] = !0), fe && Fe(le, ["html", "head", "body"]), le.table && (Fe(le, ["tbody"]), delete y.tbody), w.TRUSTED_TYPES_POLICY) {
        if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw jn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw jn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        z = w.TRUSTED_TYPES_POLICY, S = z.createHTML("");
      } else
        z === void 0 && (z = sf(U, o)), z !== null && typeof S == "string" && (S = z.createHTML(""));
      Ot && Ot(w), nt = w;
    }
  }, Vt = Fe({}, [...io, ...so, ...Xp]), Gt = Fe({}, [...lo, ...Jp]), Ar = function(w) {
    let N = Y(w);
    (!N || !N.tagName) && (N = {
      namespaceURI: bt,
      tagName: "template"
    });
    const Q = wa(w.tagName), Se = wa(N.tagName);
    return Wt[w.namespaceURI] ? w.namespaceURI === yt ? N.namespaceURI === it ? Q === "svg" : N.namespaceURI === wt ? Q === "svg" && (Se === "annotation-xml" || lt[Se]) : !!Vt[Q] : w.namespaceURI === wt ? N.namespaceURI === it ? Q === "math" : N.namespaceURI === yt ? Q === "math" && St[Se] : !!Gt[Q] : w.namespaceURI === it ? N.namespaceURI === yt && !St[Se] || N.namespaceURI === wt && !lt[Se] ? !1 : !Gt[Q] && (or[Q] || !Vt[Q]) : !!(Le === "application/xhtml+xml" && Wt[w.namespaceURI]) : !1;
  }, st = function(w) {
    _n(t.removed, {
      element: w
    });
    try {
      Y(w).removeChild(w);
    } catch {
      P(w);
    }
  }, Nt = function(w, N) {
    try {
      _n(t.removed, {
        attribute: N.getAttributeNode(w),
        from: N
      });
    } catch {
      _n(t.removed, {
        attribute: null,
        from: N
      });
    }
    if (N.removeAttribute(w), w === "is")
      if (ne || me)
        try {
          st(N);
        } catch {
        }
      else
        try {
          N.setAttribute(w, "");
        } catch {
        }
  }, fr = function(w) {
    let N = null, Q = null;
    if (be)
      w = "<remove></remove>" + w;
    else {
      const Ue = hs(w, /^[\r\n\t ]+/);
      Q = Ue && Ue[0];
    }
    Le === "application/xhtml+xml" && bt === it && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const Se = z ? z.createHTML(w) : w;
    if (bt === it)
      try {
        N = new O().parseFromString(Se, Le);
      } catch {
      }
    if (!N || !N.documentElement) {
      N = oe.createDocument(bt, "template", null);
      try {
        N.documentElement.innerHTML = Bt ? S : Se;
      } catch {
      }
    }
    const je = N.body || N.documentElement;
    return w && Q && je.insertBefore(r.createTextNode(Q), je.childNodes[0] || null), bt === it ? Re.call(N, fe ? "html" : "body")[0] : fe ? N.documentElement : je;
  }, mr = function(w) {
    return de.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null
    );
  }, Rt = function(w) {
    return w instanceof E && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof A) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, lr = function(w) {
    return typeof f == "function" && w instanceof f;
  };
  function Ke(x, w, N) {
    ma(x, (Q) => {
      Q.call(t, w, N, nt);
    });
  }
  const Yt = function(w) {
    let N = null;
    if (Ke(se.beforeSanitizeElements, w, null), Rt(w))
      return st(w), !0;
    const Q = Te(w.nodeName);
    if (Ke(se.uponSanitizeElement, w, {
      tagName: Q,
      allowedTags: le
    }), w.hasChildNodes() && !lr(w.firstElementChild) && Ct(/<[/\w]/g, w.innerHTML) && Ct(/<[/\w]/g, w.textContent) || w.nodeType === Rn.progressingInstruction || ce && w.nodeType === Rn.comment && Ct(/<[/\w]/g, w.data))
      return st(w), !0;
    if (!le[Q] || y[Q]) {
      if (!y[Q] && Pt(Q) && ($.tagNameCheck instanceof RegExp && Ct($.tagNameCheck, Q) || $.tagNameCheck instanceof Function && $.tagNameCheck(Q)))
        return !1;
      if (we && !Ze[Q]) {
        const Se = Y(w) || w.parentNode, je = q(w) || w.childNodes;
        if (je && Se) {
          const Ue = je.length;
          for (let Ee = Ue - 1; Ee >= 0; --Ee) {
            const et = C(je[Ee], !0);
            et.__removalCount = (w.__removalCount || 0) + 1, Se.insertBefore(et, F(w));
          }
        }
      }
      return st(w), !0;
    }
    return w instanceof b && !Ar(w) || (Q === "noscript" || Q === "noembed" || Q === "noframes") && Ct(/<\/no(script|embed|frames)/i, w.innerHTML) ? (st(w), !0) : (X && w.nodeType === Rn.text && (N = w.textContent, ma([pe, _e, Ae], (Se) => {
      N = On(N, Se, " ");
    }), w.textContent !== N && (_n(t.removed, {
      element: w.cloneNode()
    }), w.textContent = N)), Ke(se.afterSanitizeElements, w, null), !1);
  }, hr = function(w, N, Q) {
    if (ye && (N === "id" || N === "name") && (Q in r || Q in sr))
      return !1;
    if (!(ie && !te[N] && Ct(ve, N))) {
      if (!(j && Ct(Xe, N))) {
        if (!R[N] || te[N]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Pt(w) && ($.tagNameCheck instanceof RegExp && Ct($.tagNameCheck, w) || $.tagNameCheck instanceof Function && $.tagNameCheck(w)) && ($.attributeNameCheck instanceof RegExp && Ct($.attributeNameCheck, N) || $.attributeNameCheck instanceof Function && $.attributeNameCheck(N)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            N === "is" && $.allowCustomizedBuiltInElements && ($.tagNameCheck instanceof RegExp && Ct($.tagNameCheck, Q) || $.tagNameCheck instanceof Function && $.tagNameCheck(Q)))
          ) return !1;
        } else if (!Mt[N]) {
          if (!Ct(ze, On(Q, Ce, ""))) {
            if (!((N === "src" || N === "xlink:href" || N === "href") && w !== "script" && Hp(Q, "data:") === 0 && qe[w])) {
              if (!(ee && !Ct(Oe, On(Q, Ce, "")))) {
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
    return w !== "annotation-xml" && hs(w, $e);
  }, gr = function(w) {
    Ke(se.beforeSanitizeAttributes, w, null);
    const {
      attributes: N
    } = w;
    if (!N || Rt(w))
      return;
    const Q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: R,
      forceKeepAttr: void 0
    };
    let Se = N.length;
    for (; Se--; ) {
      const je = N[Se], {
        name: Ue,
        namespaceURI: Ee,
        value: et
      } = je, Je = Te(Ue);
      let at = Ue === "value" ? et : Vp(et);
      if (Q.attrName = Je, Q.attrValue = at, Q.keepAttr = !0, Q.forceKeepAttr = void 0, Ke(se.uponSanitizeAttribute, w, Q), at = Q.attrValue, ft && (Je === "id" || Je === "name") && (Nt(Ue, w), at = Qe + at), ce && Ct(/((--!?|])>)|<\/(style|title)/i, at)) {
        Nt(Ue, w);
        continue;
      }
      if (Q.forceKeepAttr || (Nt(Ue, w), !Q.keepAttr))
        continue;
      if (!re && Ct(/\/>/i, at)) {
        Nt(Ue, w);
        continue;
      }
      X && ma([pe, _e, Ae], (Xt) => {
        at = On(at, Xt, " ");
      });
      const yr = Te(w.nodeName);
      if (hr(yr, Je, at)) {
        if (z && typeof U == "object" && typeof U.getAttributeType == "function" && !Ee)
          switch (U.getAttributeType(yr, Je)) {
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
          Ee ? w.setAttributeNS(Ee, Ue, at) : w.setAttribute(Ue, at), Rt(w) ? st(w) : ms(t.removed);
        } catch {
        }
      }
    }
    Ke(se.afterSanitizeAttributes, w, null);
  }, br = function x(w) {
    let N = null;
    const Q = mr(w);
    for (Ke(se.beforeSanitizeShadowDOM, w, null); N = Q.nextNode(); )
      Ke(se.uponSanitizeShadowNode, N, null), Yt(N), gr(N), N.content instanceof s && x(N.content);
    Ke(se.afterSanitizeShadowDOM, w, null);
  };
  return t.sanitize = function(x) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, Q = null, Se = null, je = null;
    if (Bt = !x, Bt && (x = "<!-->"), typeof x != "string" && !lr(x))
      if (typeof x.toString == "function") {
        if (x = x.toString(), typeof x != "string")
          throw jn("dirty is not a string, aborting");
      } else
        throw jn("toString is not a function");
    if (!t.isSupported)
      return x;
    if (ae || Ft(w), t.removed = [], typeof x == "string" && (J = !1), J) {
      if (x.nodeName) {
        const et = Te(x.nodeName);
        if (!le[et] || y[et])
          throw jn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (x instanceof f)
      N = fr("<!---->"), Q = N.ownerDocument.importNode(x, !0), Q.nodeType === Rn.element && Q.nodeName === "BODY" || Q.nodeName === "HTML" ? N = Q : N.appendChild(Q);
    else {
      if (!ne && !X && !fe && // eslint-disable-next-line unicorn/prefer-includes
      x.indexOf("<") === -1)
        return z && He ? z.createHTML(x) : x;
      if (N = fr(x), !N)
        return ne ? null : He ? S : "";
    }
    N && be && st(N.firstChild);
    const Ue = mr(J ? x : N);
    for (; Se = Ue.nextNode(); )
      Yt(Se), gr(Se), Se.content instanceof s && br(Se.content);
    if (J)
      return x;
    if (ne) {
      if (me)
        for (je = xe.call(N.ownerDocument); N.firstChild; )
          je.appendChild(N.firstChild);
      else
        je = N;
      return (R.shadowroot || R.shadowrootmode) && (je = De.call(n, je, !0)), je;
    }
    let Ee = fe ? N.outerHTML : N.innerHTML;
    return fe && le["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && Ct(Ml, N.ownerDocument.doctype.name) && (Ee = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + Ee), X && ma([pe, _e, Ae], (et) => {
      Ee = On(Ee, et, " ");
    }), z && He ? z.createHTML(Ee) : Ee;
  }, t.setConfig = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ft(x), ae = !0;
  }, t.clearConfig = function() {
    nt = null, ae = !1;
  }, t.isValidAttribute = function(x, w, N) {
    nt || Ft({});
    const Q = Te(x), Se = Te(w);
    return hr(Q, Se, N);
  }, t.addHook = function(x, w) {
    typeof w == "function" && _n(se[x], w);
  }, t.removeHook = function(x, w) {
    if (w !== void 0) {
      const N = Bp(se[x], w);
      return N === -1 ? void 0 : Wp(se[x], N, 1)[0];
    }
    return ms(se[x]);
  }, t.removeHooks = function(x) {
    se[x] = [];
  }, t.removeAllHooks = function() {
    se = ws();
  }, t;
}
var lf = Fl();
const zt = (e) => ({ __html: lf.sanitize(e) });
function* Qr(e = "id-", t = 0) {
  let r = t;
  for (; ; )
    r += 1, yield e + r;
}
function cf() {
  const e = (
    // @ts-ignore
    (document.currentScript && document.currentScript.src || "").match(
      /(.*\/)/
    )
  );
  return e && e.length > 0 ? e[0].substr(0, e[0].length - 1) : "/";
}
var $l = { exports: {} }, uo, Ss;
function uf() {
  if (Ss) return uo;
  Ss = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return uo = e, uo;
}
var po, ks;
function df() {
  if (ks) return po;
  ks = 1;
  var e = uf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, po = function() {
    function n(p, f, b, m, A, E) {
      if (E !== e) {
        var O = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw O.name = "Invariant Violation", O;
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
  }, po;
}
$l.exports = df()();
var Sa = $l.exports;
const T = /* @__PURE__ */ Wo(Sa);
T.shape({
  event: T.string,
  action: T.string,
  name: T.string,
  region: T.string,
  section: T.string,
  component: T.string,
  type: T.string,
  text: T.string
});
const Bn = ({ children: e }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: e });
Bn.propTypes = {
  children: T.oneOfType([
    T.arrayOf(T.node),
    T.node,
    T.string
  ])
};
var Ul = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", p = 0; p < arguments.length; p++) {
        var f = arguments[p];
        f && (s = o(s, n(f)));
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
      for (var f in s)
        t.call(s, f) && s[f] && (p = o(p, f));
      return p;
    }
    function o(s, p) {
      return p ? s ? s + " " + p : s + p : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Ul);
var pf = Ul.exports;
const ff = /* @__PURE__ */ Wo(pf);
({
  ...Bn.propTypes
});
const zl = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ d.jsx("div", { className: t, ...r, children: /* @__PURE__ */ d.jsx("div", { className: "row", children: e }) });
zl.propTypes = {
  children: Bn.propTypes.children
};
({
  ...zl.propTypes
});
Bn.propTypes.children, T.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Bn.propTypes.children;
function ql({
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
var Bl = { exports: {} }, Ge = {};
var Ts;
function mf() {
  if (Ts) return Ge;
  Ts = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), U = Symbol.for("react.client.reference");
  function _(C) {
    if (typeof C == "object" && C !== null) {
      var P = C.$$typeof;
      switch (P) {
        case e:
          switch (C = C.type, C) {
            case r:
            case o:
            case n:
            case b:
            case m:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case p:
                case f:
                case E:
                case A:
                  return C;
                case s:
                  return C;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return Ge.ContextConsumer = s, Ge.ContextProvider = p, Ge.Element = e, Ge.ForwardRef = f, Ge.Fragment = r, Ge.Lazy = E, Ge.Memo = A, Ge.Portal = t, Ge.Profiler = o, Ge.StrictMode = n, Ge.Suspense = b, Ge.SuspenseList = m, Ge.isContextConsumer = function(C) {
    return _(C) === s;
  }, Ge.isContextProvider = function(C) {
    return _(C) === p;
  }, Ge.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === e;
  }, Ge.isForwardRef = function(C) {
    return _(C) === f;
  }, Ge.isFragment = function(C) {
    return _(C) === r;
  }, Ge.isLazy = function(C) {
    return _(C) === E;
  }, Ge.isMemo = function(C) {
    return _(C) === A;
  }, Ge.isPortal = function(C) {
    return _(C) === t;
  }, Ge.isProfiler = function(C) {
    return _(C) === o;
  }, Ge.isStrictMode = function(C) {
    return _(C) === n;
  }, Ge.isSuspense = function(C) {
    return _(C) === b;
  }, Ge.isSuspenseList = function(C) {
    return _(C) === m;
  }, Ge.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === r || C === o || C === n || C === b || C === m || C === O || typeof C == "object" && C !== null && (C.$$typeof === E || C.$$typeof === A || C.$$typeof === p || C.$$typeof === s || C.$$typeof === f || C.$$typeof === U || C.getModuleId !== void 0);
  }, Ge.typeOf = _, Ge;
}
Bl.exports = mf();
var Wl = Bl.exports;
function hf(e) {
  function t(H, R, W, $, y) {
    for (var te = 0, j = 0, ie = 0, ee = 0, re, X, ce = 0, fe = 0, ae, be = ae = re = 0, ne = 0, me = 0, He = 0, ye = 0, ft = W.length, Qe = ft - 1, we, J = "", ue = "", Ze = "", gt = "", qe; ne < ft; ) {
      if (X = W.charCodeAt(ne), ne === Qe && j + ee + ie + te !== 0 && (j !== 0 && (X = j === 47 ? 10 : 47), ee = ie = te = 0, ft++, Qe++), j + ee + ie + te === 0) {
        if (ne === Qe && (0 < me && (J = J.replace(O, "")), 0 < J.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += W.charAt(ne);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (J = J.trim(), re = J.charCodeAt(0), ae = 1, ye = ++ne; ne < ft; ) {
              switch (X = W.charCodeAt(ne)) {
                case 123:
                  ae++;
                  break;
                case 125:
                  ae--;
                  break;
                case 47:
                  switch (X = W.charCodeAt(ne + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (be = ne + 1; be < Qe; ++be)
                          switch (W.charCodeAt(be)) {
                            case 47:
                              if (X === 42 && W.charCodeAt(be - 1) === 42 && ne + 2 !== be) {
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
                  for (; ne++ < Qe && W.charCodeAt(ne) !== X; )
                    ;
              }
              if (ae === 0) break;
              ne++;
            }
            switch (ae = W.substring(ye, ne), re === 0 && (re = (J = J.replace(E, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < me && (J = J.replace(O, "")), X = J.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    me = R;
                    break;
                  default:
                    me = Xe;
                }
                if (ae = t(R, me, ae, X, y + 1), ye = ae.length, 0 < Ce && (me = r(Xe, J, He), qe = f(3, ae, me, R, _e, pe, ye, X, y, $), J = me.join(""), qe !== void 0 && (ye = (ae = qe.trim()).length) === 0 && (X = 0, ae = "")), 0 < ye) switch (X) {
                  case 115:
                    J = J.replace(oe, p);
                  case 100:
                  case 109:
                  case 45:
                    ae = J + "{" + ae + "}";
                    break;
                  case 107:
                    J = J.replace(q, "$1 $2"), ae = J + "{" + ae + "}", ae = ve === 1 || ve === 2 && s("@" + ae, 3) ? "@-webkit-" + ae + "@" + ae : "@" + ae;
                    break;
                  default:
                    ae = J + ae, $ === 112 && (ae = (ue += ae, ""));
                }
                else ae = "";
                break;
              default:
                ae = t(R, r(R, J, He), ae, $, y + 1);
            }
            Ze += ae, ae = He = me = be = re = 0, J = "", X = W.charCodeAt(++ne);
            break;
          case 125:
          case 59:
            if (J = (0 < me ? J.replace(O, "") : J).trim(), 1 < (ye = J.length)) switch (be === 0 && (re = J.charCodeAt(0), re === 45 || 96 < re && 123 > re) && (ye = (J = J.replace(" ", ":")).length), 0 < Ce && (qe = f(1, J, R, H, _e, pe, ue.length, $, y, $)) !== void 0 && (ye = (J = qe.trim()).length) === 0 && (J = "\0\0"), re = J.charCodeAt(0), X = J.charCodeAt(1), re) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  gt += J + W.charAt(ne);
                  break;
                }
              default:
                J.charCodeAt(ye - 1) !== 58 && (ue += o(J, re, X, J.charCodeAt(2)));
            }
            He = me = be = re = 0, J = "", X = W.charCodeAt(++ne);
        }
      }
      switch (X) {
        case 13:
        case 10:
          j === 47 ? j = 0 : 1 + re === 0 && $ !== 107 && 0 < J.length && (me = 1, J += "\0"), 0 < Ce * ze && f(0, J, R, H, _e, pe, ue.length, $, y, $), pe = 1, _e++;
          break;
        case 59:
        case 125:
          if (j + ee + ie + te === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, we = W.charAt(ne), X) {
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
                  ce === 112 && W.charCodeAt(ne - 3) === 58 && (Ae = ce);
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
                  switch (2 * X + 3 * W.charCodeAt(ne + 1)) {
                    case 235:
                      j = 47;
                      break;
                    case 220:
                      ye = ne, j = 42;
                  }
                  break;
                case 42:
                  X === 47 && ce === 42 && ye + 2 !== ne && (W.charCodeAt(ye + 2) === 33 && (ue += W.substring(ye, ne + 1)), we = "", j = 0);
              }
          }
          j === 0 && (J += we);
      }
      fe = ce, ce = X, ne++;
    }
    if (ye = ue.length, 0 < ye) {
      if (me = R, 0 < Ce && (qe = f(2, ue, me, H, _e, pe, ye, $, y, $), qe !== void 0 && (ue = qe).length === 0)) return gt + ue + Ze;
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
  function r(H, R, W) {
    var $ = R.trim().split(P);
    R = $;
    var y = $.length, te = H.length;
    switch (te) {
      case 0:
      case 1:
        var j = 0;
        for (H = te === 0 ? "" : H[0] + " "; j < y; ++j)
          R[j] = n(H, R[j], W).trim();
        break;
      default:
        var ie = j = 0;
        for (R = []; j < y; ++j)
          for (var ee = 0; ee < te; ++ee)
            R[ie++] = n(H[ee] + " ", $[j], W).trim();
    }
    return R;
  }
  function n(H, R, W) {
    var $ = R.charCodeAt(0);
    switch (33 > $ && ($ = (R = R.trim()).charCodeAt(0)), $) {
      case 38:
        return R.replace(F, "$1" + H.trim());
      case 58:
        return H.trim() + R.replace(F, "$1" + H.trim());
      default:
        if (0 < 1 * W && 0 < R.indexOf("\f")) return R.replace(F, (H.charCodeAt(0) === 58 ? "" : "$1") + H.trim());
    }
    return H + R;
  }
  function o(H, R, W, $) {
    var y = H + ";", te = 2 * R + 3 * W + 4 * $;
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
        switch (j = y.substring(13).trim(), R = j.indexOf("-") + 1, j.charCodeAt(0) + j.charCodeAt(R)) {
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
        switch (R = (y = H).length - 10, j = (y.charCodeAt(R) === 33 ? y.substring(0, R) : y).substring(H.indexOf(":", 7) + 1).trim(), te = j.charCodeAt(0) + (j.charCodeAt(7) | 0)) {
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
        if (De.test(H) === !0) return (j = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(H.replace("stretch", "fill-available"), R, W, $).replace(":fill-available", ":stretch") : y.replace(j, "-webkit-" + j) + y.replace(j, "-moz-" + j.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, W + $ === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(C, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(H, R) {
    var W = H.indexOf(R === 1 ? ":" : "{"), $ = H.substring(0, R !== 3 ? W : 10);
    return W = H.substring(W + 1, H.length - 1), $e(R !== 2 ? $ : $.replace(Re, "$1"), W, R);
  }
  function p(H, R) {
    var W = o(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return W !== R + ";" ? W.replace(de, " or ($1)").substring(4) : "(" + R + ")";
  }
  function f(H, R, W, $, y, te, j, ie, ee, re) {
    for (var X = 0, ce = R, fe; X < Ce; ++X)
      switch (fe = Oe[X].call(A, H, ce, W, $, y, te, j, ie, ee, re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = fe;
      }
    if (ce !== R) return ce;
  }
  function b(H) {
    switch (H) {
      case void 0:
      case null:
        Ce = Oe.length = 0;
        break;
      default:
        if (typeof H == "function") Oe[Ce++] = H;
        else if (typeof H == "object") for (var R = 0, W = H.length; R < W; ++R)
          b(H[R]);
        else ze = !!H | 0;
    }
    return b;
  }
  function m(H) {
    return H = H.prefix, H !== void 0 && ($e = null, H ? typeof H != "function" ? ve = 1 : (ve = 2, $e = H) : ve = 0), m;
  }
  function A(H, R) {
    var W = H;
    if (33 > W.charCodeAt(0) && (W = W.trim()), le = W, W = [le], 0 < Ce) {
      var $ = f(-1, R, W, W, _e, pe, 0, 0, 0, 0);
      $ !== void 0 && typeof $ == "string" && (R = $);
    }
    var y = t(Xe, W, R, 0, 0);
    return 0 < Ce && ($ = f(-2, y, W, W, _e, pe, y.length, 0, 0, 0), $ !== void 0 && (y = $)), le = "", Ae = 0, pe = _e = 1, y;
  }
  var E = /^\0+/g, O = /[\0\r\f]/g, U = /: */g, _ = /zoo|gra/, C = /([,: ])(transform)/g, P = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, q = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, z = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, oe = /\(\s*(.*)\s*\)/g, de = /([\s\S]*?);/g, xe = /-self|flex-/g, Re = /[^]*?(:[rp][el]a[\w-]+)[^]*/, De = /stretch|:\s*\w+\-(?:conte|avail)/, se = /([^-])(image-set\()/, pe = 1, _e = 1, Ae = 0, ve = 1, Xe = [], Oe = [], Ce = 0, $e = null, ze = 0, le = "";
  return A.use = b, A.set = m, e !== void 0 && m(e), A;
}
var gf = {
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
function bf(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var yf = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Cs = /* @__PURE__ */ bf(
  function(e) {
    return yf.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Hl = { exports: {} }, We = {};
var As;
function xf() {
  if (As) return We;
  As = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, A = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, U = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, q = e ? Symbol.for("react.scope") : 60119;
  function Y(S) {
    if (typeof S == "object" && S !== null) {
      var oe = S.$$typeof;
      switch (oe) {
        case t:
          switch (S = S.type, S) {
            case b:
            case m:
            case n:
            case s:
            case o:
            case E:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case f:
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
    return Y(S) === m;
  }
  return We.AsyncMode = b, We.ConcurrentMode = m, We.ContextConsumer = f, We.ContextProvider = p, We.Element = t, We.ForwardRef = A, We.Fragment = n, We.Lazy = _, We.Memo = U, We.Portal = r, We.Profiler = s, We.StrictMode = o, We.Suspense = E, We.isAsyncMode = function(S) {
    return z(S) || Y(S) === b;
  }, We.isConcurrentMode = z, We.isContextConsumer = function(S) {
    return Y(S) === f;
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
    return typeof S == "string" || typeof S == "function" || S === n || S === m || S === s || S === o || S === E || S === O || typeof S == "object" && S !== null && (S.$$typeof === _ || S.$$typeof === U || S.$$typeof === p || S.$$typeof === f || S.$$typeof === A || S.$$typeof === P || S.$$typeof === F || S.$$typeof === q || S.$$typeof === C);
  }, We.typeOf = Y, We;
}
Hl.exports = xf();
var vf = Hl.exports, ei = vf, wf = {
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
}, Sf = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, kf = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Vl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ti = {};
ti[ei.ForwardRef] = kf;
ti[ei.Memo] = Vl;
function Es(e) {
  return ei.isMemo(e) ? Vl : ti[e.$$typeof] || wf;
}
var Tf = Object.defineProperty, Cf = Object.getOwnPropertyNames, _s = Object.getOwnPropertySymbols, Af = Object.getOwnPropertyDescriptor, Ef = Object.getPrototypeOf, Os = Object.prototype;
function Gl(e, t, r) {
  if (typeof t != "string") {
    if (Os) {
      var n = Ef(t);
      n && n !== Os && Gl(e, n, r);
    }
    var o = Cf(t);
    _s && (o = o.concat(_s(t)));
    for (var s = Es(e), p = Es(t), f = 0; f < o.length; ++f) {
      var b = o[f];
      if (!Sf[b] && !(r && r[b]) && !(p && p[b]) && !(s && s[b])) {
        var m = Af(t, b);
        try {
          Tf(e, b, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var _f = Gl;
const Of = /* @__PURE__ */ Wo(_f);
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
var js = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, No = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Wl.typeOf(e);
}, Oa = Object.freeze([]), Nr = Object.freeze({});
function $n(e) {
  return typeof e == "function";
}
function Ns(e) {
  return e.displayName || e.name || "Component";
}
function ri(e) {
  return e && typeof e.styledComponentId == "string";
}
var ln = typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_ATTR || vt.env.SC_ATTR) || "data-styled", ni = typeof window < "u" && "HTMLElement" in window, jf = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && vt.env.REACT_APP_SC_DISABLE_SPEEDY : vt.env.SC_DISABLE_SPEEDY !== void 0 && vt.env.SC_DISABLE_SPEEDY !== "" ? vt.env.SC_DISABLE_SPEEDY !== "false" && vt.env.SC_DISABLE_SPEEDY : vt.env.NODE_ENV !== "production")), Nf = {};
function Wn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Rf = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++) n += this.groupSizes[o];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, p = s; r >= p; ) (p <<= 1) < 0 && Wn(16, "" + r);
      this.groupSizes = new Uint32Array(p), this.groupSizes.set(o), this.length = p;
      for (var f = s; f < p; f++) this.groupSizes[f] = 0;
    }
    for (var b = this.indexOfGroup(r + 1), m = 0, A = n.length; m < A; m++) this.tag.insertRule(b, n[m]) && (this.groupSizes[r]++, b++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), s = o + n;
      this.groupSizes[r] = 0;
      for (var p = o; p < s; p++) this.tag.deleteRule(o);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var o = this.groupSizes[r], s = this.indexOfGroup(r), p = s + o, f = s; f < p; f++) n += this.tag.getRule(f) + `/*!sc*/
`;
    return n;
  }, e;
}(), ka = /* @__PURE__ */ new Map(), ja = /* @__PURE__ */ new Map(), Mn = 1, ga = function(e) {
  if (ka.has(e)) return ka.get(e);
  for (; ja.has(Mn); ) Mn++;
  var t = Mn++;
  return ka.set(e, t), ja.set(t, e), t;
}, Pf = function(e) {
  return ja.get(e);
}, Lf = function(e, t) {
  t >= Mn && (Mn = t + 1), ka.set(e, t), ja.set(t, e);
}, If = "style[" + ln + '][data-styled-version="5.3.11"]', Df = new RegExp("^" + ln + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Mf = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, p = o.length; s < p; s++) (n = o[s]) && e.registerName(t, n);
}, Ff = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = r.length; o < s; o++) {
    var p = r[o].trim();
    if (p) {
      var f = p.match(Df);
      if (f) {
        var b = 0 | parseInt(f[1], 10), m = f[2];
        b !== 0 && (Lf(m, b), Mf(e, m, f[3]), e.getTag().insertRules(b, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, $f = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Yl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(f) {
    for (var b = f.childNodes, m = b.length; m >= 0; m--) {
      var A = b[m];
      if (A && A.nodeType === 1 && A.hasAttribute(ln)) return A;
    }
  }(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(ln, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = $f();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, Uf = function() {
  function e(r) {
    var n = this.element = Yl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, p = 0, f = s.length; p < f; p++) {
        var b = s[p];
        if (b.ownerNode === o) return b;
      }
      Wn(17);
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
}(), zf = function() {
  function e(r) {
    var n = this.element = Yl(r);
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
}(), qf = function() {
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
}(), Rs = ni, Bf = { isServer: !ni, useCSSOMInjection: !jf }, Na = function() {
  function e(r, n, o) {
    r === void 0 && (r = Nr), n === void 0 && (n = {}), this.options = dr({}, Bf, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && ni && Rs && (Rs = !1, function(s) {
      for (var p = document.querySelectorAll(If), f = 0, b = p.length; f < b; f++) {
        var m = p[f];
        m && m.getAttribute(ln) !== "active" && (Ff(s, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ga(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(dr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = o ? new qf(p) : s ? new Uf(p) : new zf(p), new Rf(r)));
    var r, n, o, s, p;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (ga(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(ga(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(ga(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, s = "", p = 0; p < o; p++) {
        var f = Pf(p);
        if (f !== void 0) {
          var b = r.names.get(f), m = n.getGroup(p);
          if (b && m && b.size) {
            var A = ln + ".g" + p + '[id="' + f + '"]', E = "";
            b !== void 0 && b.forEach(function(O) {
              O.length > 0 && (E += O + ",");
            }), s += "" + m + A + '{content:"' + E + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Wf = /(a)(d)/gi, Ps = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ro(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Ps(t % 52) + r;
  return (Ps(t % 52) + r).replace(Wf, "$1-$2");
}
var tn = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Xl = function(e) {
  return tn(5381, e);
};
function Jl(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if ($n(r) && !ri(r)) return !1;
  }
  return !0;
}
var Hf = Xl("5.3.11"), Vf = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Jl(t), this.componentId = r, this.baseHash = tn(Hf, r), this.baseStyle = n, Na.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = Yr(this.rules, t, r, n).join(""), f = Ro(tn(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(o, f)) {
        var b = n(p, "." + f, void 0, o);
        r.insertRules(o, f, b);
      }
      s.push(f), this.staticRulesId = f;
    }
    else {
      for (var m = this.rules.length, A = tn(this.baseHash, n.hash), E = "", O = 0; O < m; O++) {
        var U = this.rules[O];
        if (typeof U == "string") E += U;
        else if (U) {
          var _ = Yr(U, t, r, n), C = Array.isArray(_) ? _.join("") : _;
          A = tn(A, C + O), E += C;
        }
      }
      if (E) {
        var P = Ro(A >>> 0);
        if (!r.hasNameForId(o, P)) {
          var F = n(E, "." + P, void 0, o);
          r.insertRules(o, P, F);
        }
        s.push(P);
      }
    }
    return s.join(" ");
  }, e;
}(), Gf = /^\s*\/\/.*$/gm, Yf = [":", "[", ".", "#"];
function Xf(e) {
  var t, r, n, o, s = Nr, p = s.options, f = p === void 0 ? Nr : p, b = s.plugins, m = b === void 0 ? Oa : b, A = new hf(f), E = [], O = /* @__PURE__ */ function(C) {
    function P(F) {
      if (F) try {
        C(F + "}");
      } catch {
      }
    }
    return function(F, q, Y, z, S, oe, de, xe, Re, De) {
      switch (F) {
        case 1:
          if (Re === 0 && q.charCodeAt(0) === 64) return C(q + ";"), "";
          break;
        case 2:
          if (xe === 0) return q + "/*|*/";
          break;
        case 3:
          switch (xe) {
            case 102:
            case 112:
              return C(Y[0] + q), "";
            default:
              return q + (De === 0 ? "/*|*/" : "");
          }
        case -2:
          q.split("/*|*/}").forEach(P);
      }
    };
  }(function(C) {
    E.push(C);
  }), U = function(C, P, F) {
    return P === 0 && Yf.indexOf(F[r.length]) !== -1 || F.match(o) ? C : "." + t;
  };
  function _(C, P, F, q) {
    q === void 0 && (q = "&");
    var Y = C.replace(Gf, ""), z = P && F ? F + " " + P + " { " + Y + " }" : Y;
    return t = q, r = P, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), A(F || !P ? "" : P, z);
  }
  return A.use([].concat(m, [function(C, P, F) {
    C === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, U));
  }, O, function(C) {
    if (C === -2) {
      var P = E;
      return E = [], P;
    }
  }])), _.hash = m.length ? m.reduce(function(C, P) {
    return P.name || Wn(15), tn(C, P.name);
  }, 5381).toString() : "", _;
}
var Ql = mt.createContext();
Ql.Consumer;
var Zl = mt.createContext(), Jf = (Zl.Consumer, new Na()), Po = Xf();
function Kl() {
  return qt(Ql) || Jf;
}
function ec() {
  return qt(Zl) || Po;
}
var Qf = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Po);
      var p = n.name + s.hash;
      o.hasNameForId(n.id, p) || o.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return Wn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Po), this.name + t.hash;
  }, e;
}(), Zf = /([A-Z])/, Kf = /([A-Z])/g, em = /^ms-/, tm = function(e) {
  return "-" + e.toLowerCase();
};
function Ls(e) {
  return Zf.test(e) ? e.replace(Kf, tm).replace(em, "-ms-") : e;
}
var Is = function(e) {
  return e == null || e === !1 || e === "";
};
function Yr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], p = 0, f = e.length; p < f; p += 1) (o = Yr(e[p], t, r, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (Is(e)) return "";
  if (ri(e)) return "." + e.styledComponentId;
  if ($n(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return Yr(b, t, r, n);
  }
  var m;
  return e instanceof Qf ? r ? (e.inject(r, n), e.getName(n)) : e : No(e) ? function A(E, O) {
    var U, _, C = [];
    for (var P in E) E.hasOwnProperty(P) && !Is(E[P]) && (Array.isArray(E[P]) && E[P].isCss || $n(E[P]) ? C.push(Ls(P) + ":", E[P], ";") : No(E[P]) ? C.push.apply(C, A(E[P], P)) : C.push(Ls(P) + ": " + (U = P, (_ = E[P]) == null || typeof _ == "boolean" || _ === "" ? "" : typeof _ != "number" || _ === 0 || U in gf || U.startsWith("--") ? String(_).trim() : _ + "px") + ";"));
    return O ? [O + " {"].concat(C, ["}"]) : C;
  }(e) : e.toString();
}
var Ds = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function ai(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return $n(e) || No(e) ? Ds(Yr(js(Oa, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ds(Yr(js(e, r)));
}
var tc = function(e, t, r) {
  return r === void 0 && (r = Nr), e.theme !== r.theme && e.theme || t || r.theme;
}, rm = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, nm = /(^-|-$)/g;
function fo(e) {
  return e.replace(rm, "-").replace(nm, "");
}
var rc = function(e) {
  return Ro(Xl(e) >>> 0);
};
function ba(e) {
  return typeof e == "string" && vt.env.NODE_ENV === "production";
}
var Lo = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, am = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function om(e, t, r) {
  var n = e[r];
  Lo(t) && Lo(n) ? nc(n, t) : e[r] = t;
}
function nc(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var o = 0, s = r; o < s.length; o++) {
    var p = s[o];
    if (Lo(p)) for (var f in p) am(f) && om(e, p[f], f);
  }
  return e;
}
var oi = mt.createContext();
oi.Consumer;
var mo = {};
function ac(e, t, r) {
  var n = ri(e), o = !ba(e), s = t.attrs, p = s === void 0 ? Oa : s, f = t.componentId, b = f === void 0 ? function(q, Y) {
    var z = typeof q != "string" ? "sc" : fo(q);
    mo[z] = (mo[z] || 0) + 1;
    var S = z + "-" + rc("5.3.11" + z + mo[z]);
    return Y ? Y + "-" + S : S;
  }(t.displayName, t.parentComponentId) : f, m = t.displayName, A = m === void 0 ? function(q) {
    return ba(q) ? "styled." + q : "Styled(" + Ns(q) + ")";
  }(e) : m, E = t.displayName && t.componentId ? fo(t.displayName) + "-" + t.componentId : t.componentId || b, O = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, U = t.shouldForwardProp;
  n && e.shouldForwardProp && (U = t.shouldForwardProp ? function(q, Y, z) {
    return e.shouldForwardProp(q, Y, z) && t.shouldForwardProp(q, Y, z);
  } : e.shouldForwardProp);
  var _, C = new Vf(r, E, n ? e.componentStyle : void 0), P = C.isStatic && p.length === 0, F = function(q, Y) {
    return function(z, S, oe, de) {
      var xe = z.attrs, Re = z.componentStyle, De = z.defaultProps, se = z.foldedComponentIds, pe = z.shouldForwardProp, _e = z.styledComponentId, Ae = z.target, ve = function($, y, te) {
        $ === void 0 && ($ = Nr);
        var j = dr({}, y, { theme: $ }), ie = {};
        return te.forEach(function(ee) {
          var re, X, ce, fe = ee;
          for (re in $n(fe) && (fe = fe(j)), fe) j[re] = ie[re] = re === "className" ? (X = ie[re], ce = fe[re], X && ce ? X + " " + ce : X || ce) : fe[re];
        }), [j, ie];
      }(tc(S, qt(oi), De) || Nr, S, xe), Xe = ve[0], Oe = ve[1], Ce = function($, y, te, j) {
        var ie = Kl(), ee = ec(), re = y ? $.generateAndInjectStyles(Nr, ie, ee) : $.generateAndInjectStyles(te, ie, ee);
        return re;
      }(Re, de, Xe), $e = oe, ze = Oe.$as || S.$as || Oe.as || S.as || Ae, le = ba(ze), H = Oe !== S ? dr({}, S, {}, Oe) : S, R = {};
      for (var W in H) W[0] !== "$" && W !== "as" && (W === "forwardedAs" ? R.as = H[W] : (pe ? pe(W, Cs, ze) : !le || Cs(W)) && (R[W] = H[W]));
      return S.style && Oe.style !== S.style && (R.style = dr({}, S.style, {}, Oe.style)), R.className = Array.prototype.concat(se, _e, Ce !== _e ? Ce : null, S.className, Oe.className).filter(Boolean).join(" "), R.ref = $e, Xs(ze, R);
    }(_, q, Y, P);
  };
  return F.displayName = A, (_ = mt.forwardRef(F)).attrs = O, _.componentStyle = C, _.displayName = A, _.shouldForwardProp = U, _.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Oa, _.styledComponentId = E, _.target = n ? e.target : e, _.withComponent = function(q) {
    var Y = t.componentId, z = function(oe, de) {
      if (oe == null) return {};
      var xe, Re, De = {}, se = Object.keys(oe);
      for (Re = 0; Re < se.length; Re++) xe = se[Re], de.indexOf(xe) >= 0 || (De[xe] = oe[xe]);
      return De;
    }(t, ["componentId"]), S = Y && Y + "-" + (ba(q) ? q : fo(Ns(q)));
    return ac(q, dr({}, z, { attrs: O, componentId: S }), r);
  }, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(q) {
    this._foldedDefaultProps = n ? nc({}, e.defaultProps, q) : q;
  } }), Object.defineProperty(_, "toString", { value: function() {
    return "." + _.styledComponentId;
  } }), o && Of(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), _;
}
var Ye = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = Nr), !Wl.isValidElementType(n)) return Wn(1, String(n));
    var s = function() {
      return r(n, o, ai.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, dr({}, o, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, dr({}, o, { attrs: Array.prototype.concat(o.attrs, p).filter(Boolean) }));
    }, s;
  }(ac, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ye[e] = Ye(e);
});
var im = function() {
  function e(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = Jl(r), Na.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function(r, n, o, s) {
    var p = s(Yr(this.rules, n, o, s).join(""), ""), f = this.componentId + r;
    o.insertRules(f, f, p);
  }, t.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, t.renderStyles = function(r, n, o, s) {
    r > 2 && Na.registerId(this.componentId + r), this.removeStyles(r, o), this.createStyles(r, n, o, s);
  }, e;
}();
function Ia(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  var o = ai.apply(void 0, [e].concat(r)), s = "sc-global-" + rc(JSON.stringify(o)), p = new im(o, s);
  function f(m) {
    var A = Kl(), E = ec(), O = qt(oi), U = nn(A.allocateGSInstance(s)).current;
    return A.server && b(U, m, A, O, E), wu(function() {
      if (!A.server) return b(U, m, A, O, E), function() {
        return p.removeStyles(U, A);
      };
    }, [U, m, A, O, E]), null;
  }
  function b(m, A, E, O, U) {
    if (p.isStatic) p.renderStyles(m, Nf, E, U);
    else {
      var _ = dr({}, A, { theme: tc(A, O, f.defaultProps) });
      p.renderStyles(m, _, E, U);
    }
  }
  return mt.memo(f);
}
const Hn = ({ href: e = null }) => (
  // @ts-ignore
  /* @__PURE__ */ d.jsx(Tr, { label: "Apply now", ariaLabel: "Apply now", href: e, color: "gold" })
);
Hn.propTypes = {
  href: T.string
};
T.string;
function ii({ message: e, type: t }) {
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
ii.propTypes = {
  type: T.oneOf(["error", "info"]).isRequired,
  message: T.string.isRequired
};
function oc({ message: e }) {
  return /* @__PURE__ */ d.jsx(ii, { message: e, type: "error" });
}
function sm({ message: e }) {
  return /* @__PURE__ */ d.jsx(ii, { message: e, type: "info" });
}
const lm = Ye.div`
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
function ic() {
  return /* @__PURE__ */ d.jsxs(lm, { "data-testid": "loader", className: "container ball-loader mt-4", children: [
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball1" }),
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball2" }),
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball3" })
  ] });
}
T.shape({
  color: T.oneOf(["gold", "maroon", "gray", "dark"]),
  content: T.shape({
    icon: T.string,
    header: T.string,
    body: T.string
  })
});
const sc = T.shape({
  ariaLabel: T.string,
  color: T.oneOf(["gold", "maroon", "gray", "dark"]),
  icon: T.string,
  href: T.string,
  label: T.string,
  onClick: T.func,
  size: T.oneOf(["default", "small", "xsmall"])
}), si = {
  url: T.string,
  altText: T.string,
  cssClass: T.arrayOf(T.string)
}, lc = {
  text: T.string,
  cssClass: T.arrayOf(T.string)
}, li = {
  type: T.oneOf(["video", "youtube"]),
  url: T.string,
  altText: T.string,
  vttUrl: T.string,
  title: T.string
}, cm = {
  url: T.string,
  text: T.string,
  isActive: T.bool
}, Sr = T.shape({
  ...si
}), Ra = T.shape({
  ...lc
}), um = T.shape({
  ...li
}), Gr = T.shape({
  ...cm
}), cc = T.shape({
  id: T.string,
  sourceType: T.oneOf(["api", "shared-data-source", "static-json"]),
  // default `api`
  sharedDataSourceId: T.string,
  // only if `dataSourceType == "shared-data-source"``
  data: T.arrayOf(T.object),
  // only if `dataSourceType == "static-json"``
  apiUrl: T.string
  // only if `dataSourceType == "api"``
}), Io = T.shape({
  text: T.string,
  url: T.string
}), qr = T.shape({
  icon: T.arrayOf(T.string),
  title: T.string,
  content: T.string,
  buttonLink: sc
}), Do = T.arrayOf(
  T.shape({
    title: T.string,
    url: T.string
  })
), uc = T.shape({
  career: Gr,
  growth: T.oneOfType([T.number, T.string]),
  medianSalary: T.string,
  brightOutlook: T.bool,
  greenOccupation: T.bool
}), dm = {
  hideCollegeSchool: T.bool,
  defaultView: T.oneOf(["list-view", "grid-view"]),
  cardDefaultImage: Sr
}, pm = T.shape({
  ...dm
}), ci = {
  atAGlance: T.bool,
  applicationRequirements: T.bool,
  changeMajorRequirements: T.bool,
  nextSteps: T.bool,
  affordingCollege: T.bool,
  flexibleDegreeOptions: T.bool,
  careerOutlook: T.bool,
  exampleCareers: T.bool,
  customizeYourCollegeExperience: T.bool,
  globalOpportunity: T.bool,
  attendOnline: T.bool,
  whyChooseAsu: T.bool,
  programContactInfo: T.bool,
  externalAnchors: T.arrayOf(
    T.shape({
      targetIdName: T.string,
      text: T.string
    })
  )
}, Kr = T.shape({
  image: Sr,
  title: T.string,
  text: T.string,
  button: sc
}), Ms = T.shape({
  faculty: Kr,
  programs: Kr,
  research: Kr,
  inclusion: Kr,
  mentors: Kr,
  honors: Kr
}), dc = {
  hide: T.bool,
  sectionIntroText: T.string,
  cards: Ms,
  defaultCards: Ms
};
T.shape({
  ...ci
});
const ho = T.shape({
  id: T.oneOfType([T.string, T.number]),
  value: T.string
}), pc = T.shape({
  locations: T.arrayOf(ho),
  asuLocals: T.arrayOf(ho),
  acceleratedConcurrent: ho
});
var pt = {}, cr, ur;
function Mo() {
  throw new Error("setTimeout has not been defined");
}
function Fo() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? cr = setTimeout : cr = Mo;
  } catch {
    cr = Mo;
  }
  try {
    typeof clearTimeout == "function" ? ur = clearTimeout : ur = Fo;
  } catch {
    ur = Fo;
  }
})();
function fc(e) {
  if (cr === setTimeout)
    return setTimeout(e, 0);
  if ((cr === Mo || !cr) && setTimeout)
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
function fm(e) {
  if (ur === clearTimeout)
    return clearTimeout(e);
  if ((ur === Fo || !ur) && clearTimeout)
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
var kr = [], rn = !1, Vr, Ta = -1;
function mm() {
  !rn || !Vr || (rn = !1, Vr.length ? kr = Vr.concat(kr) : Ta = -1, kr.length && mc());
}
function mc() {
  if (!rn) {
    var e = fc(mm);
    rn = !0;
    for (var t = kr.length; t; ) {
      for (Vr = kr, kr = []; ++Ta < t; )
        Vr && Vr[Ta].run();
      Ta = -1, t = kr.length;
    }
    Vr = null, rn = !1, fm(e);
  }
}
pt.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  kr.push(new hc(e, t)), kr.length === 1 && !rn && fc(mc);
};
function hc(e, t) {
  this.fun = e, this.array = t;
}
hc.prototype.run = function() {
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
const hm = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, gc = Object.values(hm), Fs = {
  offeredBy: { icon: "university", title: "Offered by" },
  locations: { icon: "map-marker-alt", title: "Location" },
  firstRequirementMathCourse: {
    icon: "pencil-alt",
    title: "First Required math Course"
  },
  mathIntensity: { icon: "calculator", title: "Math intensity" },
  timeCommitment: { icon: "calendar-alt", title: "Time commitment" },
  stemOptText: { icon: "star", title: "STEM-OPT extension eligible" }
}, bc = "grid-view", $o = "list-view", yc = "degree-list-programs", xc = "Sorry, Something went wrong.", gm = "STEM-OPT for international students on F-1 visas", bm = `This degree is not found.
  This may be a temporary issue. Please try again in 5 minutes.
  If the issue persists, the degree may no longer be available.`, ym = cf(), xm = (e) => {
  const t = e || ym, r = `${t}/assets/img/detail-page`, n = `${t}/assets/img/listing-page`, o = {
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
}, vm = (e) => {
  if (typeof e == "string") return "Degrees";
  const { program: t, cert: r } = e;
  return t === "undergrad" && r === "true" ? "Undergraduate Minors and Certificates" : t === "undergrad" ? "Undergraduate Degrees" : t === "graduate" && r === "true" ? "Graduate Certificates" : t === "graduate" ? "Graduate Degrees" : "Degrees";
}, ui = [
  { id: 0, value: "DTPHX", text: "Downtown Phoenix campus" },
  { id: 1, value: "POLY", text: "Polytechnic campus" },
  { id: 2, value: "TEMPE", text: "Tempe campus" },
  { id: 3, value: "WEST", text: "West Valley campus" },
  { id: 4, value: "ONLNE", text: "ASU Online" }
], wm = ui[4], vc = [
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
], di = [
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
], Sm = di[0], Uo = (e) => (e == null ? void 0 : e.value) && (e == null ? void 0 : e.value) !== "all", km = (e) => {
  var t;
  return ((t = [
    ...ui,
    ...vc,
    ...di
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
}, Tm = {
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
}, $s = (e, t) => {
  const r = ["TUCSN", "AWC"], n = e.toUpperCase(), o = r.includes(n) ? `${n}-${t}` : n;
  return Tm[o];
};
function wc({ anchorMenu: e }) {
  var n, o;
  const t = (n = e == null ? void 0 : e.externalAnchors) == null ? void 0 : n.map((s) => {
    const { targetIdName: p, text: f } = s;
    return {
      targetIdName: p.startsWith("#") ? p.substring(1) : p,
      text: f,
      icon: null
    };
  }), r = Object.keys(dt).filter((s) => e[s]).map((s) => dt[s]).concat(t || []);
  return /* @__PURE__ */ d.jsx(
    Al,
    {
      items: r,
      firstElementId: (o = r[0]) == null ? void 0 : o.targetIdName,
      focusFirstFocusableElement: !1
    }
  );
}
wc.propTypes = {
  anchorMenu: T.shape(ci)
};
function Cm(e, t) {
  const r = Math.floor(e / t), n = e % t;
  return r + (n > 0 ? 1 : 0);
}
const Am = "https://degrees.apps.asu.edu", Em = "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan/", _m = {
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
}, Om = {
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
}, Us = (e) => e.map((t) => ({
  title: t.acadPlanDescription,
  url: t.academicOfficeUrl
})).sort((t, r) => t.title.localeCompare(r.title)), jm = (e) => e == null ? void 0 : e.map((t) => ({
  career: {
    text: t.alternateTitle,
    url: `${Am}/career-details/${t.onetCode}`
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
function Sc(e, t) {
  const r = { ...t, ...e };
  if (r.collegeAcadOrg && (r.collegeOrg = r.collegeAcadOrg, delete r.collegeAcadOrg), r.program) {
    const { program: f } = r;
    r.cert === "true" && f === "all" ? r.degreeType = "GR,UGCM" : f === "all" ? r.degreeType = "GR,UG" : r.cert === "true" && f === "undergrad" ? r.degreeType = "UGCM" : f === "graduate" ? r.degreeType = "GR" : r.degreeType = "UG", delete r.program;
  }
  r.acadPlan && (r.endpoint += `/${r.acadPlan}`, delete r.acadPlan);
  const { endpoint: n, ...o } = r, s = (f, b) => Array.isArray(b) ? `${f}=${b}` : b.split(",").map((m) => `${f}=${m.trim()}`).join("&"), p = Object.keys(o).reduce(
    (f, b) => `${f}&${s(
      b,
      r[b]
    )}`,
    ""
  );
  return `${n}?${p}`;
}
function Da(e, t = "h2") {
  return (
    /** @type {keyof JSX.IntrinsicElements} */
    gc.includes(e.component) ? e.component : t
  );
}
function zo(e) {
  return typeof e != "string" ? console.error("Invalid string", e) : e == null ? void 0 : e.replace(
    /\w\S*/g,
    (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
  );
}
function Nm(e) {
  return /<\/?[a-z][\s\S]*>/i.test(e);
}
const kc = "AsuDevTools", Rm = {
  isDebug: !1
};
function Pm() {
  const e = JSON.parse(localStorage.getItem(kc));
  return e == null ? void 0 : e.isDebug;
}
window.__AsuDevTools = {
  enableDebug(e) {
    const t = JSON.stringify({
      ...Rm,
      isDebug: e
    });
    localStorage.setItem(kc, t);
  }
};
async function go(e) {
  return e != null && e.length ? (await Promise.all(
    e.map(async (r) => {
      try {
        return await (await Promise.race([
          fetch(
            `${Em}${r}?include=academicOfficeUrl&include=acadPlanDescription`
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
function Lm(e, t) {
  Promise.all(e).then((r) => {
    const n = r[0], o = r[1];
    t({ accelerateData: n, concurrentData: o });
  }).catch(() => {
    t({ accelerateData: [], concurrentData: [] });
  });
}
function Vn({ contents: e = [] }) {
  const t = Qr("paragrap-");
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.map(
    (r) => Nm(r.text) ? /* @__PURE__ */ d.jsx(
      "div",
      {
        dangerouslySetInnerHTML: zt(r.text)
      },
      t.next().value
    ) : /* @__PURE__ */ d.jsx(
      "p",
      {
        className: `${sn(r.cssClass)}`,
        children: r.text
      },
      t.next().value
    )
  ) });
}
Vn.propTypes = {
  contents: T.arrayOf(Ra)
};
const Im = Ia`
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
`, Dm = Ye.div`
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
`, Mm = Ye.img`
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
  const p = nn(), f = nn(), b = Da(s);
  function m() {
    const E = p.current.offsetHeight;
    f.current.style.height = `${E * 1.2}px`;
  }
  return At(() => {
    m();
    let A;
    const E = () => {
      clearTimeout(A), A = setTimeout(() => m(), 150);
    };
    return window.addEventListener("resize", E), () => window.removeEventListener("resize", E);
  }, [f, p]), /* @__PURE__ */ d.jsxs("div", { className: `uds-image-overlap content-${r}`, children: [
    /* @__PURE__ */ d.jsx(Im, {}),
    /* @__PURE__ */ d.jsx(
      Mm,
      {
        ref: f,
        className: "img-fluid",
        src: t == null ? void 0 : t.url,
        alt: t == null ? void 0 : t.altText,
        onError: (A) => {
          A.currentTarget.style.display = "none";
        }
      }
    ),
    /* @__PURE__ */ d.jsxs(Dm, { ref: p, className: "content-wrapper", children: [
      /* @__PURE__ */ d.jsx(b, { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: e }) }),
      /* @__PURE__ */ d.jsx(Vn, { contents: n }),
      o
    ] })
  ] });
}
un.propTypes = {
  headingTag: T.string,
  title: T.string,
  contentDirection: T.oneOf(["left", "right"]),
  contents: T.arrayOf(
    T.shape({
      text: T.string
    })
  ),
  image: Sr,
  contentChildren: T.element
};
const Tc = Ia`
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
`, Cc = Ye.main`
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
function Fm({
  baseIconClassName1: e,
  baseIconAriaLabel1: t,
  baseIconStyle1: r,
  baseIconAriaLabel2: n,
  baseIconClassName2: o,
  baseIconStyle2: s,
  ariaLabel: p,
  ariaControls: f,
  dataId: b,
  onClick: m = () => null
}) {
  const [A, E] = ut(!1), O = (C, P, F, q) => /* @__PURE__ */ d.jsx(
    "span",
    {
      style: {
        cursor: "pointer",
        display: P
      },
      children: /* @__PURE__ */ d.jsx(
        "i",
        {
          className: `${C}`,
          "aria-label": F,
          title: F,
          style: q
        }
      )
    }
  ), U = () => {
    E(!A), m(!A);
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
      "aria-expanded": A,
      "aria-controls": f,
      children: [
        O(
          e,
          A ? "" : "none",
          t,
          r
        ),
        O(
          o,
          A ? "none" : "",
          n,
          s
        )
      ]
    }
  );
  return Js(() => _, [A]);
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
const bo = (e) => /* @__PURE__ */ d.jsx("span", {}), $m = ({
  onClick: e = () => null,
  ariaLabel: t,
  ariaControls: r,
  dataId: n
}) => Fm({
  dataId: n,
  baseIconClassName1: "fas fa-chevron-up",
  baseIconClassName2: "fas fa-chevron-down",
  onClick: e,
  ariaLabel: t,
  ariaControls: r
}), dn = Gs(null), pi = ({ listPageProps: e, detailPageProps: t, children: r }) => {
  const { detailPageDefault: n, listingPageDefault: o } = Js(
    () => xm((e || t).appPathFolder),
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
pi.propTypes = {
  children: T.oneOfType([
    T.arrayOf(T.element),
    T.element
  ]),
  listPageProps: T.shape({}),
  detailPageProps: T.shape({})
};
const Um = ({
  dataSource: e,
  tableView: t = [],
  programs: r,
  stateFilters: n
}) => {
  const { collegeAcadOrg: o, departmentCode: s } = e;
  At(() => {
    if (!r || !Pm()) return;
    const p = "background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;", f = "font-size:30px;", b = "font-size:24px;", m = "font-size: 18px; margin-left: 0.5rem;";
    console.group("<< ASU Degree Page >>"), console.log("%c🏫 Listing Page Programs 📚", p + f), console.log(
      `%cTotal programs found: ${r.length}`,
      p + m
    ), console.log("%cPrograms found", p + m), console.log(r), console.log(
      `%cTotal programs loaded: ${t.length}`,
      p + m
    ), console.log("%cPrograms loaded", p + m), console.log(t), console.log("%cPage Filters", p + b), console.log(
      `%c- collegeAcadOrg:${o}`,
      p + m
    ), console.log(
      `%c- departmentCode:${s}`,
      p + m
    ), console.log("%cSearch Filters", p + b), console.log(n), console.groupEnd();
  });
}, zs = (e) => e.degreeType === "UG", Ac = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, Ec = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, zm = (e) => Object.keys(e).length > 0 ? Ec(e) || Ac(e) : !0, Pn = (e) => {
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
    isUndergradProgram: () => zs(e),
    isPhdOrMasters: () => e.degreeDescriptionShort !== "CERT",
    // Only called in functions that already checked if its a grad program
    isGradProgram: () => e.degreeType === "GR",
    // GR is present for grad degrees and grad certificates
    isMinorOrCertificate: () => e.degreeType === "UGCM" || e.degreeType === "GR" && e.acadPlanTypeDescription === "Certificate",
    /** @returns {"undergrad" |  "graduate"} */
    getProgramType: () => zs(e) ? "undergrad" : "graduate",
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
    getAccelerateDegrees: async () => e.acceleratedAcadPlanCodes ? go(e.acceleratedAcadPlanCodes) : [],
    getConcurrentDegrees: async () => e.concurrentAcadPlanCodes ? go(e.concurrentAcadPlanCodes) : [],
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
    getConcurrentDegreeMajorMaps: () => go(e.concurrentAcadPlanCodes),
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
    hasGraduateApplyDates: () => Ac(e),
    /** @return {Object.<string, string>} */
    getPlanDeadlines: () => e.applicationDeadlines,
    hasPlanDeadlines: () => Ec(e),
    isValidActiveProgram: () => zm(e),
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
      const r = [...e.majorMapSubplans], n = (p, f) => p.filter(
        (b) => b.acadSubPlanCode !== f
      ), o = (p, f) => p.some(
        (b) => b.acadSubPlanCode !== f
      ), s = [];
      for (let p = r.length - 1; p >= 0 && t.length !== 0; p -= 1) {
        const f = r[p];
        (f.defaultFlag || o(
          t,
          f.acadSubPlanCode
        )) && (t = n(
          t,
          f.acadSubPlanCode
        ), s.push(f));
      }
      return s;
    },
    getSubPln: () => e.subplans
  };
}
function qm(e) {
  const t = e.getProgramType(), r = [], n = (f) => ({
    text: f,
    url: ""
  }), o = (f) => ({
    text: "Online",
    url: f
  }), s = e.getCampusList().map((f) => f.campusCode);
  s.length > 0 && r.push(
    ...s.map(
      (f) => f === "ONLNE" && o(e.getCurriculumUrl()) || $s(f, t) || n(f)
    )
  );
  const p = e.getCampusWue();
  return p && r.push(
    $s(p, t) || n(p)
  ), r;
}
const Bm = (e, t) => {
  const r = { ...e };
  return r.globalOpportunity && !t.getGlobalExp() && (r.globalOpportunity = !1), r.careerOutlook && !t.getAsuCareerOpportunity() && (r.careerOutlook = !1), r.attendOnline && !t.getCurriculumUrl() && (r.attendOnline = !1), r;
}, Wm = (e) => {
  var o;
  const t = Object.values(e).filter(
    (s) => s === !0
  );
  return ((o = e == null ? void 0 : e.externalAnchors) == null ? void 0 : o.length) > 0 || t.length > 0;
};
function Hm(e) {
  return "";
}
function Vm(e) {
  return "";
}
function Gm() {
  return "";
}
function Ma(e, t) {
  let r = t || "";
  return r = r.replaceAll("{INSTITUTION_CODE}", e.getInstitution()).replaceAll("{ACAD_PLAN_CODE}", e.getAcadPlan()), r;
}
function _c(e, t) {
  return `${Ma(e, t)}#${dt.flexibleDegreeOptions.acceleratedId}`;
}
function qs({
  programs: e = [],
  filters: {
    collegeAcadOrg: t,
    departmentCode: r,
    acceleratedConcurrent: n,
    locations: o = [],
    keyword: s,
    blacklistAcadPlans: p,
    program: f,
    showCerts: b
  }
}) {
  const m = (z) => !t || z.getCollegeAcadOrgJoint().includes(t), A = (z) => !r || z.getDepartmentCode().includes(r), E = (z) => {
    var S;
    return !o.length || ((S = z.getCampusList()) == null ? void 0 : S.some((oe) => o.some((de) => de.value === oe.campusCode)));
  }, O = (z = {}) => {
    var S;
    return !Uo(n) || ((S = z[n.value]) == null ? void 0 : S.length) > 0;
  }, U = (z, S) => !!(!S || new RegExp(S, "i").test(z.getMajorDesc())), _ = (z, S) => !!(!S || new RegExp(S, "i").test(z.getFullDescription())), C = (z) => !(p != null && p.includes(z.getAcadPlan())), P = (z) => f === "undergrad" ? !0 : b === "true" ? z.isMinorOrCertificate() : z.isPhdOrMasters(), F = (z) => {
    const S = Xr(z);
    return m(S) && A(S) && E(S) && O(z) && C(S) && P(S);
  }, q = [], Y = [];
  return e.filter((z) => {
    const S = Xr(z), oe = U(S, s), de = _(
      S,
      s
    );
    return (oe || de) && F(z) ? (oe ? q.push(z) : Y.push(z), !0) : !1;
  }), q.concat(Y);
}
const Ym = (e) => e.sort(
  (r, n) => r.acadPlanMarketingDescription.localeCompare(
    n.acadPlanMarketingDescription
  )
), Rr = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: o = "",
  text: s = "",
  region: p = "",
  component: f = ""
}) => {
  const { dataLayer: b } = window, m = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: p.toLowerCase(),
    section: o.toLowerCase(),
    text: s.toLowerCase(),
    component: f.toLowerCase()
  };
  b && b.push(m);
};
function fi({ breadcrumbs: e, section: t }) {
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
            onClick: () => Rr({
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
        onClick: () => Rr({
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
fi.propTypes = {
  breadcrumbs: T.arrayOf(Gr),
  section: T.string
};
const Xm = () => /* @__PURE__ */ d.jsx("div", { className: "container", "data-testid": "browse-title", children: /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Browse degrees" }) }) }), yo = ({
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
] }), Jm = Ye.div`
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
`, Qm = Ye.button`
  font-weight: 400;
  text-decoration: underline;
`, Zm = {
  event: "select",
  action: "click",
  name: "onclick"
}, Km = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link"
}, Ln = {
  isActive: !1,
  locations: [],
  asuLocals: [],
  acceleratedConcurrent: { value: "all", text: "" },
  keyword: null,
  blacklistAcadPlans: []
}, xo = (e) => ({
  id: e.id,
  value: e.value,
  text: e.text
}), eh = (e) => e.map((t) => t.text).join(", "), Bs = (e, t) => {
  Rr({ ...Zm, type: e, text: t });
}, Ws = (e) => {
  Rr({ ...Km, text: e });
}, Oc = ({ value: e, onChange: t, onApply: r, onClean: n }) => {
  const o = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (b, { target: { selectedOptions: m } }) => {
      let A = [], E = [];
      const O = Array.from(m, xo), { locations: U, asuLocals: _ } = e;
      ({
        locationsRender: () => {
          A = O, E = _;
        },
        asuLocalsRender: () => {
          E = O, A = U;
        }
      })[`${b}Render`](), t({
        ...e,
        locations: A,
        asuLocals: E
      }), Bs({
        locations: "location or online",
        asuLocals: "as local"
      }[b], eh(O));
    }
  ), s = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (b, { target: { selectedOptions: m } }) => {
      t({ ...e, [b]: xo(m[0]) }), Bs(
        "accelerated/concurrent",
        xo(m[0]).text
      );
    }
  ), p = () => {
    r == null || r({
      ...e,
      isActive: !0
    });
  }, f = () => {
    t(Ln), n == null || n();
  };
  return /* @__PURE__ */ d.jsxs(Jm, { className: "container", "data-testid": "filters", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Filter your results" }),
    /* @__PURE__ */ d.jsxs("form", { className: "mt-3 uds-form row", children: [
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        yo,
        {
          multiple: !0,
          id: "locations",
          label: "Campuses or online",
          selected: e.locations.map((b) => b.value),
          options: ui,
          onChange: o
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        yo,
        {
          multiple: !0,
          id: "asuLocals",
          label: "ASU location, ASU Local",
          selected: e.asuLocals.map((b) => b.value),
          options: vc,
          onChange: o
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        yo,
        {
          id: "acceleratedConcurrent",
          label: "Accelerated, Concurrent",
          selected: e.acceleratedConcurrent.value,
          options: di,
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
            p(), Ws("apply filters");
          }
        }
      ),
      /* @__PURE__ */ d.jsx(
        Qm,
        {
          "data-testid": "btn-clear-filters",
          className: "btn btn-link",
          onClick: () => {
            f(), Ws("clean filters");
          },
          children: "Clear filters"
        }
      )
    ] })
  ] });
};
Oc.propTypes = {
  value: pc,
  onChange: T.func,
  onApply: T.func,
  onClean: T.func
};
function jc({
  value: { isActive: e, locations: t, asuLocals: r, acceleratedConcurrent: n } = {},
  onRemove: o
}) {
  const s = Qr("filter-"), p = (t == null ? void 0 : t.length) + (r == null ? void 0 : r.length) + (Uo(n) ? 1 : 0), f = (b, m) => {
    const { text: A } = m;
    return /* @__PURE__ */ d.jsxs(
      "span",
      {
        tabIndex: -1,
        role: "button",
        "aria-label": `Remove filter ${A}`,
        "data-filter-id": b,
        onKeyDown: () => o(b, m),
        onClick: () => o(b, m),
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
      t.map((b) => f("locations", b)),
      r.map((b) => f("asuLocals", b)),
      (Uo(n) ? [n] : []).map((b) => f("acceleratedConcurrent", b))
    ] }) })
  ] });
}
jc.propTypes = {
  value: pc,
  onRemove: T.func
};
const th = Ye.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`, rh = Ye.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;
function nh({
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
          /* @__PURE__ */ d.jsx(o, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${sn(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ d.jsx(Vn, { contents: r }),
          /* @__PURE__ */ d.jsx(Hn, { href: e })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-7 d-none d-sm-none d-md-block", children: /* @__PURE__ */ d.jsx(th, { className: "row", children: n.images.map((s, p) => /* @__PURE__ */ d.jsx(
          "div",
          {
            className: "photo-item col-sm-12 col-md-6 col-lg-6",
            children: /* @__PURE__ */ d.jsx(
              "img",
              {
                className: `mg-fluid ${sn(s.cssClass)}`,
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
function ah({
  applyNowUrl: e,
  title: t,
  contents: r,
  image: n,
  video: o
}) {
  const s = Da(t);
  return /* @__PURE__ */ d.jsx(
    rh,
    {
      className: "container",
      "data-type": "text-media",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ d.jsxs("div", { className: "row gy-3", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ d.jsx(s, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${sn(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ d.jsx(Vn, { contents: r }),
          /* @__PURE__ */ d.jsx(Hn, { href: e })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7 mt-2 mt-sm-0", children: [
          o && /* @__PURE__ */ d.jsx(
            Ko,
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
function oh({
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
          contentChildren: /* @__PURE__ */ d.jsx("div", { className: "mt-2", children: /* @__PURE__ */ d.jsx(Hn, { href: e }) })
        }
      ) }) })
    }
  );
}
const ih = ({ applyNowUrl: e, title: t, contents: r }) => {
  const n = Da(t);
  return /* @__PURE__ */ d.jsx("section", { className: "container", "data-type": "text", "data-testid": "intro-content", children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-5", children: /* @__PURE__ */ d.jsx(n, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${sn(t.cssClass)}`, children: t.text }) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7", children: [
      /* @__PURE__ */ d.jsx(Vn, { contents: r }),
      /* @__PURE__ */ d.jsx(Hn, { href: e })
    ] })
  ] }) });
}, mi = ({
  applyNowUrl: e,
  type: t,
  title: r,
  contents: n,
  image: o,
  video: s,
  photoGrid: p
}) => ({
  text: () => ih({ applyNowUrl: e, title: r, contents: n }),
  "text-media": () => ah({
    applyNowUrl: e,
    title: r,
    contents: n,
    image: o,
    video: s
  }),
  "text-image-overlay": () => oh({ applyNowUrl: e, title: r, contents: n, image: o }),
  "text-photo-grid": () => nh({
    applyNowUrl: e,
    title: r,
    contents: n,
    photoGrid: p
  }),
  undefined: () => (console.error(
    `the type '${t}' is not supported by the 'IntroContent' component.`
  ), null)
})[t]();
mi.propTypes = {
  applyNowUrl: T.string,
  type: T.oneOf([
    "text",
    "text-media",
    "text-image-overlay",
    "text-photo-grid"
  ]).isRequired,
  video: T.shape({ ...li }),
  image: T.shape({ ...si }),
  header: Ra,
  title: T.shape({
    ...lc,
    component: T.oneOf(gc)
  }),
  contents: T.arrayOf(Ra),
  photoGrid: T.shape({
    images: T.arrayOf(Sr)
  })
};
const Fa = {
  programs: T.arrayOf(T.object),
  totalRows: T.number,
  loading: T.bool,
  actionUrls: T.shape({
    applyNowUrl: T.string,
    majorInfoUrl: T.string,
    majorInfoOnlineUrl: T.string
  }),
  degreesPerPage: T.number
}, sh = Ye.div`
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
`, Nc = ({ programs: e, actionUrls: t }) => {
  var p, f, b, m, A;
  const { state: r } = qt(dn), n = (f = (p = r == null ? void 0 : r.listPageProps) == null ? void 0 : p.programList) == null ? void 0 : f.settings, o = ((A = (m = (b = r == null ? void 0 : r.listPageProps) == null ? void 0 : b.programList) == null ? void 0 : m.dataSource) == null ? void 0 : A.program) === "graduate", s = e.map((E) => {
    const O = Xr(E), U = () => {
      var q;
      const P = O.isOnline() ? O.getOnlineMajorMapURL() : O.getGeneralDegreeMajorMap();
      let F;
      try {
        F = `<a href=${(q = new URL(P)) == null ? void 0 : q.toString()}>${O.getRequiredCoursesLabel()} Map</a>`;
      } catch {
        return "";
      }
      return F;
    }, _ = () => `<div>
        ${O.hasConcurrentDegrees() ? "<div className='cell-container'>concurrent</div>" : ""}
        ${O.hasAccelerateDegrees() ? `<div className="cell-container">
                <a href=${_c(
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
            <a href=${Ma(O, t.majorInfoUrl)}>
              ${O.getMajorDesc()}
            </a>
        </li>
        <li>
          <strong>Degree:</strong>
          <br />${O.getDegree()}
        </li>
        ${o ? "" : `<li>
              <strong>Required Courses:</strong>
              <br />${U()}
            </li>`}
        <li>
          <strong>Campus or location:</strong>
          <br />${O.getCampusList().map((C) => zo(C.campusCode)).join(", ")}
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
  return /* @__PURE__ */ d.jsx(sh, { "data-testid": "accordion-view", children: /* @__PURE__ */ d.jsx(Yo, { cards: s }) });
};
Nc.propTypes = {
  ...Fa
};
const lh = Ye.section`
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
function Rc({ programs: e, loading: t, actionUrls: r }) {
  var b, m, A, E;
  const { defaultState: n, state: o } = qt(dn), s = (E = (A = (m = (b = o == null ? void 0 : o.listPageProps) == null ? void 0 : b.programList) == null ? void 0 : m.settings) == null ? void 0 : A.cardDefaultImage) == null ? void 0 : E.url, p = n.detailPageDefault.hero.image.url, f = s || p;
  return /* @__PURE__ */ d.jsx(
    lh,
    {
      id: yc,
      className: "container row",
      "data-loading": t,
      "data-testid": "grid-view",
      children: e.map((O) => {
        const U = Xr(O);
        return /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-4 col-lg-3 mb-2", children: /* @__PURE__ */ d.jsx(
          ht,
          {
            type: "degree",
            horizontal: !1,
            clickable: !1,
            image: f,
            imageAltText: "An example image",
            title: U.getMajorDesc(),
            linkLabel: "View Program Details",
            linkUrl: Ma(U, r.majorInfoUrl),
            buttons: [
              {
                color: "maroon",
                size: "small",
                label: "Reqeuest Info",
                href: Gm()
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
Rc.propTypes = {
  ...Fa
};
const ch = [
  {
    dataKey: "Major",
    label: "Major",
    className: "major",
    sortable: !0,
    contentTemplate: ({ resolver: e, rowIndex: t, actionUrls: r, onClick: n }) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
      /* @__PURE__ */ d.jsx("a", { href: Ma(e, r == null ? void 0 : r.majorInfoUrl), children: e.getMajorDesc() }),
      /* @__PURE__ */ d.jsx(
        $m,
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
        bo,
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
        /* @__PURE__ */ d.jsx("span", { children: `${zo(
          km(r.campusCode)
        )}${n < o.length - 1 ? ", " : ""}` }, r.campusCode),
        /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx(
          bo,
          {
            popover: {
              title: zo(r.campusCode),
              body: () => fetch(Hm(r.campusCode)),
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
        /* @__PURE__ */ d.jsx("a", { href: _c(e, t.majorInfoUrl), children: "4+1 years" }),
        /* @__PURE__ */ d.jsx(
          bo,
          {
            popover: {
              title: "4+1 years",
              body: () => fetch(Vm(e.getAcadPlan())),
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
], uh = ai`
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
`, dh = Ye.table`
  ${uh}
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
`, ph = ({ resolver: e, id: t }) => {
  const r = Su(), n = (o) => {
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
}, fh = ({ resolver: e }) => /* @__PURE__ */ d.jsxs("div", { children: [
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
] }), mh = Qr("row-"), Pc = ({ programs: e, totalRows: t, loading: r, actionUrls: n }) => {
  var A, E;
  const o = mt.useRef(null), s = mt.useRef(null), { state: p } = qt(dn), f = (E = (A = p == null ? void 0 : p.listPageProps) == null ? void 0 : A.programList) == null ? void 0 : E.settings;
  let b = ch;
  p.listPageProps.programList.dataSource.program === "graduate" && (b = b.filter((O) => O.dataKey !== "RequiredCourses")), f != null && f.hideCollegeSchool && (b = b.filter((O) => O.dataKey !== "CollegeSchool"));
  const m = (O, U) => {
    const _ = s.current.children;
    Array.prototype.forEach.call(
      _,
      (P, F) => F !== O && P.setAttribute("data-is-open", "false")
    ), s.current.children[O].setAttribute("data-is-open", String(U));
  };
  return /* @__PURE__ */ d.jsx("section", { className: "container mb-4", "data-testid": "list-view", children: /* @__PURE__ */ d.jsxs(
    dh,
    {
      id: yc,
      ref: o,
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
            const _ = mh.next().value, C = U * 2, P = Xr(O);
            return /* @__PURE__ */ d.jsxs(Qs, { children: [
              /* @__PURE__ */ d.jsx("tr", { role: "row", children: b.map((F) => {
                var q;
                return /* @__PURE__ */ d.jsx(
                  "td",
                  {
                    className: `${F.className}`,
                    children: (q = F.contentTemplate) == null ? void 0 : q.call(F, {
                      resolver: P,
                      col: F,
                      row: O,
                      rowIndex: C,
                      onClick: m,
                      actionUrls: n
                    })
                  },
                  `${_}-${F.dataKey}`
                );
              }) }, _),
              /* @__PURE__ */ d.jsxs(
                "tr",
                {
                  id: `row-info-${C}`,
                  className: "row-info",
                  children: [
                    /* @__PURE__ */ d.jsx("td", { colSpan: 3, children: ph({ resolver: P, id: `${_}-more-text` }) }, `${_}-info`),
                    /* @__PURE__ */ d.jsx("td", { colSpan: 2, children: fh({ resolver: P }) }, `${_}-extra-info`)
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
Pc.propTypes = {
  ...Fa
};
const hh = Ia`

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
`, gh = {
  [bc]: Rc,
  [$o]: Pc
};
function Lc({
  dataViewComponent: e,
  loading: t,
  programs: r,
  actionUrls: n,
  degreesPerPage: o
}) {
  let s;
  o ? typeof o != "number" && (s = parseInt(o, 10)) : s = 8;
  const p = o || s, f = Cm(r.length, p), b = gh[e], [m, A] = ut([]), E = (O, U) => {
    const _ = (U - 1) * p, C = _ + p;
    A(r.slice(_, C));
  };
  return At(() => {
    A(r.slice(0, p));
  }, [r]), /* @__PURE__ */ d.jsxs("section", { "data-testid": "program-list", "data-view-type": e, children: [
    /* @__PURE__ */ d.jsx(hh, {}),
    /* @__PURE__ */ d.jsx("div", { className: "desktop-view", children: /* @__PURE__ */ d.jsx(
      b,
      {
        loading: t,
        programs: m,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: o || s
      }
    ) }),
    /* @__PURE__ */ d.jsx("div", { className: "mobile-view mb-2", children: /* @__PURE__ */ d.jsx(
      Nc,
      {
        loading: t,
        programs: m,
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
        totalPages: f,
        onChange: E,
        showFirstButton: !0,
        showLastButton: !0
      }
    ) : /* @__PURE__ */ d.jsx("section", { className: "container no-space", children: /* @__PURE__ */ d.jsx(sm, { message: "No result found for the filters applied" }) })
  ] });
}
Lc.propTypes = {
  dataViewComponent: T.string,
  ...Fa,
  degreesPerPage: T.number
};
const bh = Ye.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow:
      0px 0px 0px 2px #ffffff,
      0px 0px 0px 4px #191919 !important;
  }
`, Ic = ({ value: e, onChange: t, onSearch: r }) => {
  const [n, o] = ut(!1);
  let s;
  At(() => () => clearTimeout(s), []);
  const p = (f) => {
    Rr({
      event: "search",
      action: "type",
      name: "onenter",
      type: "search degree programs",
      text: f
    });
  };
  return /* @__PURE__ */ d.jsx(
    bh,
    {
      className: "container mt-5",
      "data-searching": n,
      "data-testid": "search-bar",
      children: /* @__PURE__ */ d.jsx(
        "form",
        {
          "data-testid": "search-bar-form",
          className: "uds-form p-0 col-md-6 col-sm-12",
          onSubmit: (f) => {
            f.preventDefault(), r(), o(!0), s = setTimeout(() => o(!1), 500), clearTimeout(s);
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
                  onChange: (f) => {
                    t(f.target.value), p(f.target.value);
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
Ic.propTypes = {
  value: T.string,
  onChange: T.func,
  onSearch: T.func
};
const yh = Ye(Cc)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`, xh = Ia`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`, vh = Ye.div.attrs({ className: "container" })`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`, hi = ({
  appPathFolder: e,
  actionUrls: t,
  hasSearchBar: r = !0,
  hasFilters: n = !0,
  hero: o,
  introContent: s,
  programList: p,
  degreesPerPage: f
}) => {
  var te;
  const [{ data: b, loading: m, error: A }, E] = Pl(), [O, U] = ut(!1), [_, C] = ut([]), [P, F] = ut([]), [q, Y] = ut(""), z = (te = p == null ? void 0 : p.settings) == null ? void 0 : te.defaultView, S = [$o, bc].includes(z) ? z : $o, [oe, de] = ut(S), xe = Sc(p.dataSource, _m), { defaultState: Re } = qt(dn), { listingPageDefault: De } = Re, {
    collegeAcadOrg: se,
    departmentCode: pe,
    showInactivePrograms: _e,
    blacklistAcadPlans: Ae,
    program: ve,
    cert: Xe
  } = p.dataSource, [Oe, Ce] = ut({
    ...Ln
  }), [$e, ze] = ut({
    ...Ln
  });
  Um({
    dataSource: p.dataSource,
    tableView: _,
    programs: b,
    stateFilters: Oe
  }), At(() => {
    typeof window < "u" && ql({
      packageName: "app-degree-pages",
      component: "ListingPage",
      type: "NA",
      configuration: {
        programList: p,
        degreesPerPage: f
      }
    });
  }, []), At(() => {
    E(xe);
  }, [xe]), At(() => {
    let j = Ym(b || []);
    j = qs({
      programs: j,
      filters: {
        collegeAcadOrg: se,
        departmentCode: pe,
        blacklistAcadPlans: Ae,
        program: ve,
        showCerts: Xe
      }
    }), F(j), C(j);
  }, [b, f]);
  const le = async (j) => {
    const { acceleratedConcurrent: ie, locations: ee, asuLocals: re, keyword: X } = j;
    U(!0), E(xe);
    const ce = qs({
      programs: P,
      filters: {
        collegeAcadOrg: se,
        departmentCode: pe,
        acceleratedConcurrent: ie,
        locations: re.length > 0 ? ee.concat(wm) : ee,
        keyword: X,
        blacklistAcadPlans: Ae,
        program: ve
      }
    });
    Ce({ ...j }), ze({ ...j }), C(ce), U(!1);
  }, H = async () => {
    const j = {
      ...$e,
      keyword: q
    };
    le(j);
  }, R = (j) => {
    m || O || le(j);
  }, W = async (j) => {
    Ce(j);
  }, $ = () => {
    Ce(Ln), ze(Ln), C(P), Y("");
  }, y = (j, { value: ie }) => {
    const ee = j === "acceleratedConcurrent" ? Sm : $e[j].filter((X) => X.value !== ie), re = {
      ...$e,
      [j]: ee
    };
    le(re);
  };
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(Tc, {}),
    /* @__PURE__ */ d.jsx(xh, {}),
    A && /* @__PURE__ */ d.jsx(oc, { message: xc }),
    o != null && o.hide ? null : /* @__PURE__ */ d.jsx("section", { "data-testid": "hero", children: /* @__PURE__ */ d.jsx(
      qn,
      {
        image: (o == null ? void 0 : o.image) || De.hero.image,
        title: {
          text: vm(p.dataSource),
          highlightColor: "gold",
          ...o == null ? void 0 : o.title,
          maxWidth: "100%"
        },
        contents: o == null ? void 0 : o.contents
      }
    ) }),
    /* @__PURE__ */ d.jsxs(yh, { "data-is-loading": m, className: "main-section dg-margin-top", children: [
      (s == null ? void 0 : s.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        fi,
        {
          breadcrumbs: s.breadcrumbs,
          section: o ? o.title.text : ""
        }
      ) }),
      s ? /* @__PURE__ */ d.jsx(
        mi,
        {
          applyNowUrl: (t == null ? void 0 : t.applyNowUrl) || De.actionUrls.applyNowUrl,
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
        /* @__PURE__ */ d.jsx(Xm, {}),
        r ? /* @__PURE__ */ d.jsx(
          Ic,
          {
            value: q,
            onChange: Y,
            onSearch: H
          }
        ) : null,
        n ? /* @__PURE__ */ d.jsx(
          Oc,
          {
            value: Oe,
            onChange: W,
            onApply: R,
            onClean: $
          }
        ) : null,
        /* @__PURE__ */ d.jsx(vh, {})
      ] }) : null,
      /* @__PURE__ */ d.jsx("section", { className: "container", children: /* @__PURE__ */ d.jsx("div", { className: "d-flex justify-content-between filter-switch-container", children: n ? /* @__PURE__ */ d.jsx(
        jc,
        {
          value: $e,
          onRemove: y
        }
      ) : null }) }),
      m || O ? /* @__PURE__ */ d.jsx(ic, {}) : /* @__PURE__ */ d.jsx(
        Lc,
        {
          dataViewComponent: oe,
          loading: m || O,
          programs: _,
          actionUrls: t,
          degreesPerPage: f
        }
      )
    ] })
  ] });
};
hi.propTypes = {
  appPathFolder: T.string,
  actionUrls: T.shape({
    applyNowUrl: T.string
  }),
  hasSearchBar: T.bool,
  hasFilters: T.bool,
  hero: T.shape(qn.propTypes),
  introContent: T.shape(mi.propTypes),
  programList: T.shape({
    dataSource: cc,
    settings: pm
  }),
  degreesPerPage: T.number
};
const Dc = (e) => /* @__PURE__ */ d.jsx(pi, { listPageProps: e, children: /* @__PURE__ */ d.jsx(hi, { ...e }) });
Dc.propTypes = hi.propTypes;
const wh = Ye.section`
  position: relative;
  padding-top: var(--uds-dp-section-margin);
  padding-bottom: var(--uds-dp-section-margin);
`, Sh = Ye.div`
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
function kh() {
  return /* @__PURE__ */ d.jsxs(
    wh,
    {
      className: "container",
      id: dt.affordingCollege.targetIdName,
      "data-testid": "affording-college",
      children: [
        /* @__PURE__ */ d.jsx(Sh, {}),
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
const Mc = Ye.ul`
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
`, Th = ({
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
      Mc,
      {
        className: ff("", {
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
    n.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "mt-2 mb-4", children: /* @__PURE__ */ d.jsx(Yo, { cards: n, openedCard: 1 }) })
  ] });
}, Ch = (e) => {
  const t = "View Curriculum";
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("p", { children: "View curriculum below for a detailed list of courses and other requirements." }),
    /* @__PURE__ */ d.jsx(Mc, { children: /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
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
function Fc({
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
          Th({
            transferRequirements: t,
            additionalRequirements: n
          })
        ]
      }
    );
  const p = r ? "Program requirements" : "Degree requirements", f = e || o;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: dt.applicationRequirements.targetIdName,
        "data-testid": "application-requirements",
        children: [
          /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: p }) }),
          f ? /* @__PURE__ */ d.jsx(
            "div",
            {
              dangerouslySetInnerHTML: zt(f)
            }
          ) : Ch(s)
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
Fc.propTypes = {
  graduateRequirements: T.string,
  transferRequirements: T.string,
  isMinorOrCertificate: T.bool,
  additionalRequirements: T.string,
  minorRequirements: T.string,
  majorMapURL: T.string
};
const Br = ({ item: e, type: t }) => {
  const r = Qr("glance-"), n = () => typeof e == "object" ? e.map((o, s) => {
    const p = ["", "#"].includes(o.url) ? null : o.url;
    let f = "";
    return s > 0 && s < e.length - 1 && (f = ", "), s === e.length - 1 && e.length > 1 && (f = " or "), /* @__PURE__ */ d.jsxs(Qs, { children: [
      f,
      /* @__PURE__ */ d.jsx("a", { href: p, rel: "noreferrer", target: "_blank", children: o.text })
    ] }, r.next().value);
  }) : e;
  return /* @__PURE__ */ d.jsxs("li", { children: [
    /* @__PURE__ */ d.jsx("i", { className: `fas fa-${Fs[t].icon} fa-li` }),
    /* @__PURE__ */ d.jsxs("strong", { children: [
      Fs[t].title,
      ": "
    ] }),
    n()
  ] });
};
Br.propTypes = {
  item: T.oneOfType([
    T.arrayOf(Io),
    T.string
  ]),
  type: T.string
};
const $c = ({
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
$c.propTypes = {
  offeredBy: Io.isRequired,
  locations: T.arrayOf(Io).isRequired,
  firstRequirementMathCourse: T.string.isRequired,
  mathIntensity: T.string,
  timeCommitment: T.string,
  stemOptText: T.string
};
const Ah = `
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;
function Uc({ image: e, learnMoreLink: t, contents: r }) {
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
        /* @__PURE__ */ d.jsx("div", { className: "card-body", children: r ? r.map((s) => /* @__PURE__ */ d.jsx("p", { children: s }, o.next().value)) : /* @__PURE__ */ d.jsx("p", { children: Ah }) }),
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
Uc.propTypes = {
  learnMoreLink: T.string,
  image: Sr,
  contents: T.arrayOf(
    T.shape({
      text: T.string
    })
  )
};
const Eh = Ye.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, zc = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  Eh,
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
zc.propTypes = un.propTypes;
const _h = Ye.div`
  & p:last-of-type {
    margin-bottom: 0;
  }

  & a {
    word-break: break-word;
  }
`;
function qc({ content: e }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: dt.changeMajorRequirements.targetIdName,
      className: "change-your-major",
      "data-testid": "change-your-major",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Change your major requirements for current students" }) }),
        /* @__PURE__ */ d.jsx(
          _h,
          {
            dangerouslySetInnerHTML: zt(e)
          }
        )
      ]
    }
  );
}
qc.propTypes = {
  content: T.string
};
function Bc({ content: e = "" }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-testid": "custom-text",
      className: "mt-3",
      dangerouslySetInnerHTML: zt(e)
    }
  );
}
Bc.propTypes = {
  content: T.string
};
const Wc = `
  width: unset !important;
  min-width: unset !important;
`, Hc = Ye.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${Wc}
`, Vc = Ye.i`
  color: #78be21;
  ${Wc}
`;
function Gc({ data: e }) {
  return /* @__PURE__ */ d.jsx("div", { className: "uds-table mb-1", children: /* @__PURE__ */ d.jsxs("table", { children: [
    /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsxs("tr", { children: [
      /* @__PURE__ */ d.jsx("th", { scope: "col", children: "Career" }),
      /* @__PURE__ */ d.jsx("th", { scope: "col", className: "text-end", children: "Growth*" }),
      /* @__PURE__ */ d.jsx("th", { scope: "col", className: "text-end", children: "Median Salary*" })
    ] }) }),
    /* @__PURE__ */ d.jsx("tbody", { children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ d.jsxs("tr", { children: [
      /* @__PURE__ */ d.jsxs("th", { scope: "row", style: { fontWeight: "normal" }, children: [
        /* @__PURE__ */ d.jsx("a", { href: t.career.url, target: "_blank", rel: "noreferrer", children: t.career.text }),
        t.greenOccupation && /* @__PURE__ */ d.jsx(Vc, { className: "fas fa-leaf ms-1" }),
        t.brightOutlook && /* @__PURE__ */ d.jsx(Hc, { className: "fas fa-sun ms-1" })
      ] }),
      /* @__PURE__ */ d.jsxs("td", { className: "text-end", children: [
        +t.growth,
        "%"
      ] }),
      /* @__PURE__ */ d.jsx("td", { className: "text-end", children: t.medianSalary || 0 })
    ] }, t.career.url)) })
  ] }) });
}
Gc.propTypes = {
  data: T.arrayOf(uc)
};
function Yc({ tableData: e }) {
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
          /* @__PURE__ */ d.jsx(Gc, { data: e }),
          /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("small", { children: "* Data obtained from the Occupational Information Network (O*NET) under sponsorship of the U.S. Department of Labor/Employment and Training Administration (USDOL/ETA)." }) })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "d-flex", children: [
          /* @__PURE__ */ d.jsxs("p", { className: "me-3", children: [
            /* @__PURE__ */ d.jsx(Hc, { className: "fas fa-sun me-1" }),
            "Bright outlook"
          ] }),
          /* @__PURE__ */ d.jsxs("p", { children: [
            /* @__PURE__ */ d.jsx(Vc, { className: "fas fa-leaf me-1" }),
            "Green occupation"
          ] })
        ] })
      ]
    }
  );
}
Yc.propTypes = {
  tableData: T.arrayOf(uc)
};
const Oh = Ye.ul`
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
`, qo = ({ id: e, title: t, links: r }) => /* @__PURE__ */ d.jsxs("div", { id: e, className: "mt-4", children: [
  /* @__PURE__ */ d.jsx("h3", { children: t }),
  /* @__PURE__ */ d.jsx("p", { children: "This program allows students to obtain both a bachelor's and master's degree in as little as five years. It is offered as an accelerated bachelor's and master's degree with:" }),
  /* @__PURE__ */ d.jsx(Oh, { className: "mt-3 mb-3", children: r.map((n, o) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: n.url, target: "_blank", rel: "noreferrer", children: n.title }) }, `${n.title}-${o}`)) }),
  /* @__PURE__ */ d.jsx("p", { className: "mb-0", children: "Acceptance to the graduate program requires a separate application. During their junior year, eligible students will be advised by their academic departments to apply." })
] });
qo.propTypes = {
  id: T.string,
  title: T.string,
  links: Do
};
function Xc({ acceleratedLinks: e, concurrentLinks: t }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: dt.flexibleDegreeOptions.targetIdName,
      className: "container",
      "data-testid": "flexible-degree-options",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Flexible degree options" }) }),
        !!e.length && /* @__PURE__ */ d.jsx(
          qo,
          {
            id: dt.flexibleDegreeOptions.acceleratedId,
            title: "Accelerated program options",
            links: e
          }
        ),
        !!t.length && /* @__PURE__ */ d.jsx(
          qo,
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
Xc.propTypes = {
  acceleratedLinks: Do,
  concurrentLinks: Do
};
const jh = Ye.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Jc = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  jh,
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
Jc.propTypes = un.propTypes;
const Qc = ({ url: e, altText: t }) => /* @__PURE__ */ d.jsx("div", { className: "uds-img pt-3 pb-3", "data-testid": "intro-image", children: /* @__PURE__ */ d.jsx("img", { src: e, className: "img-fluid", alt: t }) });
Qc.propTypes = { ...si };
const Nh = (e, t) => {
  if (e !== "youtube")
    return t;
  const r = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, n = t.match(r);
  return n && n[7].length === 11 ? `https://www.youtube.com/embed/${n[7]}` : t;
}, Rh = Ye.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`, Zc = ({ type: e, url: t, vttUrl: r, title: n }) => /* @__PURE__ */ d.jsx(Rh, { "data-testid": "intro-video", children: /* @__PURE__ */ d.jsx(
  Ko,
  {
    type: e,
    url: Nh(e, t),
    vttUrl: r,
    title: n,
    controls: !0
  }
) });
Zc.propTypes = { ...li };
function Kc({ contents: e = [] }) {
  return /* @__PURE__ */ d.jsx("div", { "data-testid": "market-text", children: e.map((t, r) => /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `mt-3 ${sn(t.cssClass)}`,
      dangerouslySetInnerHTML: zt(t.text)
    },
    `content-${r + 1}`
  )) });
}
Kc.propTypes = {
  contents: T.arrayOf(Ra)
};
function eu({ cards: e, defaultCards: t }) {
  var r, n, o, s, p, f, b, m, A, E, O, U;
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
              title: ((f = e == null ? void 0 : e.apply) == null ? void 0 : f.title) ?? t.apply.title,
              body: ((b = e == null ? void 0 : e.apply) == null ? void 0 : b.content) ?? t.apply.content,
              buttons: [
                ((m = e == null ? void 0 : e.apply) == null ? void 0 : m.buttonLink) ?? t.apply.buttonLink
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              icon: ((A = e == null ? void 0 : e.visit) == null ? void 0 : A.icon) ?? t.visit.icon,
              title: ((E = e == null ? void 0 : e.visit) == null ? void 0 : E.title) ?? t.visit.title,
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
eu.propTypes = {
  cards: T.shape({
    learnMore: qr,
    apply: qr,
    visit: qr
  }),
  defaultCards: T.shape({
    learnMore: qr,
    apply: qr,
    visit: qr
  })
};
function tu({ content: e = "" }) {
  return /* @__PURE__ */ d.jsxs("section", { className: "container", "data-testid": "professional-licensure", children: [
    /* @__PURE__ */ d.jsx("h3", { children: "Professional licensure" }),
    /* @__PURE__ */ d.jsx("p", { dangerouslySetInnerHTML: zt(e) })
  ] });
}
tu.propTypes = {
  content: T.node
};
const vo = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "main content",
  section: "Program contact information"
}, Ph = Ye.ul`
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
function ru({ department: e, asuOfficeLoc: t, email: r, phone: n }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: dt.programContactInfo.targetIdName,
      "data-testid": "program-contact-info",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Program contact information" }) }),
        /* @__PURE__ */ d.jsx("p", { children: "If you have questions related to admission, please fill out the request information form above and an admission specialist will contact you directly. For questions regarding faculty or courses, please use the contact information below." }),
        /* @__PURE__ */ d.jsxs(Ph, { className: "text-maroon", children: [
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
                onClick: () => Rr({ ...vo, text: e.text }),
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
                onClick: () => Rr({ ...vo, text: r.text }),
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
                onClick: () => Rr({ ...vo, text: n }),
                children: n
              }
            )
          ] })
        ] })
      ]
    }
  );
}
ru.propTypes = {
  department: Gr,
  asuOfficeLoc: T.string,
  email: Gr,
  phone: T.string
};
function Bo({ content: e, stemOptText: t, programNotFound: r }) {
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
      /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("strong", { children: gm }) }),
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
Bo.propTypes = {
  content: T.string,
  stemOptText: T.string,
  programNotFound: T.bool
};
const Lh = "https://changemajor.apps.asu.edu/", Ih = "On-campus students", Dh = "Online students", Mh = "View major map -", Hs = "View major map";
function nu({
  onlineMajorMapURL: e = "",
  majorMapOnCampusURL: t = "",
  subPlnMajorMaps: r = [],
  subPlns: n = []
}) {
  const o = (A) => {
    const E = n.find(
      (O) => O.acadSubPlanCode === A
    );
    return E ? E.description : "";
  }, s = (A, E, O) => {
    A && O.push({
      href: A,
      text: E
    });
  }, p = [], f = [];
  r.forEach((A) => {
    const E = o(A.acadSubPlanCode), O = `${Mh} ${E}`;
    s(A.url, O, p);
  }), t && s(t, Hs, p), e && s(e, Hs, f);
  const b = (A, E) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("h5", { children: A }),
    /* @__PURE__ */ d.jsx("ul", { className: "mb-3", children: E.map((O) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: O.href, children: O.text }) }, O.href)) })
  ] }), m = () => /* @__PURE__ */ d.jsxs("section", { className: "container ps-0", "data-testid": "required-course", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Required courses (major map)" }),
    p.length > 0 && b(Ih, p),
    f.length > 0 && b(Dh, f),
    /* @__PURE__ */ d.jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ d.jsx("strong", { children: "What if:" }),
      " See how your courses can be applied to another major and find out how to ",
      /* @__PURE__ */ d.jsx("a", { href: Lh, children: "change your major" })
    ] })
  ] });
  return !(r != null && r.length) && !e && !t ? /* @__PURE__ */ d.jsx("div", {}) : m();
}
nu.propTypes = {
  onlineMajorMapURL: T.string,
  majorMapOnCampusURL: T.string,
  subPlnMajorMaps: T.arrayOf(
    T.shape({
      campus: T.string,
      acadSubPlanCode: T.string,
      defaultFlag: T.bool,
      url: T.string
    })
  ),
  subPlns: T.arrayOf(
    T.shape({
      acadSubPlanCode: T.string,
      description: T.string
    })
  )
};
const au = ({ sectionIntroText: e, cards: t, defaultCards: r }) => {
  var n, o, s, p, f, b, m, A, E, O, U, _, C, P, F, q, Y, z, S, oe, de, xe, Re, De, se, pe, _e, Ae, ve, Xe, Oe, Ce, $e, ze, le, H, R, W, $, y, te, j;
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
              title: ((f = t == null ? void 0 : t.faculty) == null ? void 0 : f.title) ?? r.faculty.title,
              body: ((b = t == null ? void 0 : t.faculty) == null ? void 0 : b.text) ?? r.faculty.text,
              buttons: [((m = t == null ? void 0 : t.faculty) == null ? void 0 : m.button) ?? r.faculty.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((E = (A = t == null ? void 0 : t.programs) == null ? void 0 : A.image) == null ? void 0 : E.url) ?? r.programs.image.url,
              imageAltText: ((U = (O = t == null ? void 0 : t.programs) == null ? void 0 : O.image) == null ? void 0 : U.altText) ?? r.programs.image.altText,
              title: ((_ = t == null ? void 0 : t.programs) == null ? void 0 : _.title) ?? r.programs.title,
              body: ((C = t == null ? void 0 : t.programs) == null ? void 0 : C.text) ?? r.programs.text,
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
              image: ((Re = (xe = t == null ? void 0 : t.inclusion) == null ? void 0 : xe.image) == null ? void 0 : Re.url) ?? r.inclusion.image.url,
              imageAltText: ((se = (De = t == null ? void 0 : t.inclusion) == null ? void 0 : De.image) == null ? void 0 : se.altText) ?? r.inclusion.image.altText,
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
              imageAltText: ((Ce = (Oe = t == null ? void 0 : t.mentors) == null ? void 0 : Oe.image) == null ? void 0 : Ce.altText) ?? r.mentors.image.altText,
              title: (($e = t == null ? void 0 : t.mentors) == null ? void 0 : $e.title) ?? r.mentors.title,
              body: ((ze = t == null ? void 0 : t.mentors) == null ? void 0 : ze.text) ?? r.mentors.text,
              buttons: [((le = t == null ? void 0 : t.mentors) == null ? void 0 : le.button) ?? r.mentors.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((R = (H = t == null ? void 0 : t.honors) == null ? void 0 : H.image) == null ? void 0 : R.url) ?? r.honors.image.url,
              imageAltText: (($ = (W = t == null ? void 0 : t.honors) == null ? void 0 : W.image) == null ? void 0 : $.altText) ?? r.honors.image.altText,
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
au.propTypes = dc;
const gi = ({
  appPathFolder: e,
  dataSource: t,
  anchorMenu: r,
  hero: n,
  introContent: o,
  atAGlance: s,
  applicationRequirements: p,
  changeMajorRequirements: f,
  affordingCollege: b,
  flexibleDegreeOptions: m,
  careerOutlook: A,
  exampleCareers: E,
  globalOpportunity: O,
  attendOnline: U,
  programContactInfo: _,
  nextSteps: C,
  whyChooseAsu: P
}) => {
  var _e, Ae, ve, Xe;
  const [{ data: F, loading: q, error: Y }, z] = Pl(), [S, oe] = ut(Xr({})), [de, xe] = ut({ accelerateData: [], concurrentData: [] }), Re = Sc(t, Om), { defaultState: De } = qt(dn), { detailPageDefault: se } = De;
  At(() => {
    typeof window < "u" && ql({
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
    if (F) {
      const Oe = Xr(F);
      oe(Oe), Oe.hasConcurrentOrAccelerateDegrees() && Lm(
        [
          Oe.getAccelerateDegrees(),
          Oe.getConcurrentDegrees()
        ],
        xe
      );
    }
  }, [F]);
  const pe = Bm(r, S);
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(Tc, {}),
    Y && /* @__PURE__ */ d.jsx(oc, { message: xc }),
    !(n != null && n.hide) && /* @__PURE__ */ d.jsx("section", { children: /* @__PURE__ */ d.jsx(
      qn,
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
    !q && Wm(pe) && /* @__PURE__ */ d.jsx(wc, { anchorMenu: pe }),
    /* @__PURE__ */ d.jsxs(Cc, { as: "div", "data-is-loading": q, className: "main-section", children: [
      q && /* @__PURE__ */ d.jsx(ic, {}),
      !q && (F != null && F.error ? /* @__PURE__ */ d.jsx("section", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        Bo,
        {
          content: bm,
          programNotFound: !0
        }
      ) }) : /* @__PURE__ */ d.jsxs("section", { className: "container mt-4 mb-0", children: [
        (o == null ? void 0 : o.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "row col-12", children: /* @__PURE__ */ d.jsx(
          fi,
          {
            breadcrumbs: o.breadcrumbs,
            section: n ? n.title.text : S.getMajorDesc()
          }
        ) }),
        /* @__PURE__ */ d.jsxs("div", { className: "row flex-column-reverse flex-sm-row", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-7 col-lg-7", children: [
            /* @__PURE__ */ d.jsxs("section", { className: "intro", children: [
              !S.isValidActiveProgram() && /* @__PURE__ */ d.jsx(Bc, { content: S.getAsuCustomText() }),
              !(o != null && o.hideMarketText) && ((o == null ? void 0 : o.contents) || S.getMarketText()) && /* @__PURE__ */ d.jsx(
                Kc,
                {
                  contents: (o == null ? void 0 : o.contents) || [
                    { text: S.getMarketText() }
                  ]
                }
              ),
              !(o != null && o.hideProgramDesc) && /* @__PURE__ */ d.jsx(
                Bo,
                {
                  content: S.getFullDescription(),
                  stemOptText: S.getStemOptText()
                }
              )
            ] }),
            !(s != null && s.hide) && /* @__PURE__ */ d.jsx(
              $c,
              {
                offeredBy: (s == null ? void 0 : s.offeredBy) || {
                  text: S.getCollegeDesc(),
                  url: S.getCollegeUrl()
                },
                locations: (s == null ? void 0 : s.locations) || qm(S),
                firstRequirementMathCourse: (s == null ? void 0 : s.firstRequirementMathCourse) || S.getMinMathReq(),
                mathIntensity: (s == null ? void 0 : s.mathIntensity) || S.getMathIntensity(),
                stemOptText: S.hasStemOptText()
              }
            ),
            !(o != null && o.hideRequiredCourses) && !S.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
              nu,
              {
                onlineMajorMapURL: S.getOnlineMajorMapURL(),
                majorMapOnCampusURL: S.getGeneralDegreeMajorMap(),
                subPlnMajorMaps: S.getSubPlnMajorMaps(),
                subPlns: S.getSubPln()
              }
            ),
            !(p != null && p.hide) && /* @__PURE__ */ d.jsx(
              Fc,
              {
                graduateRequirements: S.isGradProgram() ? S.getGraduateRequirements() : null,
                isMinorOrCertificate: S.isMinorOrCertificate(),
                minorRequirements: S.getMinorCourseRequirements(),
                additionalRequirements: S.getAdmissionsRequirementsText(),
                transferRequirements: S.getTransferAdmission(),
                majorMapURL: S.getGeneralDegreeMajorMap()
              }
            ),
            !(f != null && f.hide) && !S.isMinorOrCertificate() && !S.isGradProgram() && /* @__PURE__ */ d.jsx(qc, { content: S.getChangeMajor() })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-5 col-lg-5", children: [
            (o == null ? void 0 : o.video) && /* @__PURE__ */ d.jsx(
              Zc,
              {
                type: o.video.type,
                url: o.video.url,
                vttUrl: o.video.vttUrl,
                title: o.video.title
              }
            ),
            !(o != null && o.video) && /* @__PURE__ */ d.jsx(
              Qc,
              {
                url: ((_e = o == null ? void 0 : o.image) == null ? void 0 : _e.url) || se.introContent.image.url,
                altText: ((Ae = o == null ? void 0 : o.image) == null ? void 0 : Ae.altText) || se.introContent.image.altText
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
          !(C != null && C.hide) && !S.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
            eu,
            {
              cards: C == null ? void 0 : C.cards,
              defaultCards: se.nextSteps.cards
            }
          ),
          !(b != null && b.hide) && /* @__PURE__ */ d.jsx(kh, {}),
          !(m != null && m.hide) && S.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ d.jsx(
            Xc,
            {
              acceleratedLinks: Us(
                de.accelerateData
              ),
              concurrentLinks: Us(
                de.concurrentData
              )
            }
          ),
          !(A != null && A.hide) && S.getAsuCareerOpportunity() && /* @__PURE__ */ d.jsx(
            zc,
            {
              image: (A == null ? void 0 : A.image) || se.careerOutlook.image,
              contents: [{ text: S.getAsuCareerOpportunity() }]
            }
          ),
          !(E != null && E.hide) && S.hasCareerData() && /* @__PURE__ */ d.jsx(
            Yc,
            {
              tableData: jm(S.getCareerData())
            }
          ),
          S.getProfessionalLicensureText() && /* @__PURE__ */ d.jsx(
            tu,
            {
              content: S.getProfessionalLicensureText()
            }
          ),
          !(O != null && O.hide) && S.getGlobalExp() && /* @__PURE__ */ d.jsx(
            Jc,
            {
              contents: [{ text: S.getGlobalExp() }],
              image: (O == null ? void 0 : O.image) || se.globalOpportunity.image
            }
          ),
          !(P != null && P.hide) && /* @__PURE__ */ d.jsx(
            au,
            {
              sectionIntroText: (P == null ? void 0 : P.sectionIntroText) || se.whyChooseAsu.sectionIntroText,
              cards: P == null ? void 0 : P.cards,
              defaultCards: se.whyChooseAsu.cards
            }
          ),
          !(U != null && U.hide) && S.isOnline() && /* @__PURE__ */ d.jsx(
            Uc,
            {
              learnMoreLink: S.getCurriculumUrl(),
              image: (U == null ? void 0 : U.image) || se.attendOnline.image
            }
          )
        ] }),
        !(_ != null && _.hide) && /* @__PURE__ */ d.jsx("div", { className: "row", children: /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-6 col-lg-6 ", children: /* @__PURE__ */ d.jsx(
          ru,
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
gi.propTypes = {
  appPathFolder: T.string,
  dataSource: cc,
  anchorMenu: T.shape(ci),
  hero: T.shape(qn.propTypes),
  introContent: T.shape({
    hideMarketText: T.bool,
    hideProgramDesc: T.bool,
    hideRequiredCourses: T.bool,
    breadcrumbs: Sa.arrayOf(Gr),
    contents: Sa.arrayOf(T.object),
    video: um,
    image: Sr
  }),
  atAGlance: T.shape({
    hide: T.bool,
    offeredBy: Gr,
    locations: Sa.arrayOf(Gr),
    firstRequirementMathCourse: T.string,
    mathIntensity: T.string,
    timeCommitment: T.string
  }),
  applicationRequirements: T.shape({ hide: T.bool }),
  changeMajorRequirements: T.shape({ hide: T.bool }),
  affordingCollege: T.shape({ hide: T.bool }),
  flexibleDegreeOptions: T.shape({ hide: T.bool }),
  careerOutlook: T.shape({
    hide: T.bool,
    image: Sr
  }),
  exampleCareers: T.shape({ hide: T.bool }),
  globalOpportunity: T.shape({
    hide: T.bool,
    image: Sr
  }),
  attendOnline: T.shape({
    hide: T.bool,
    image: Sr
  }),
  programContactInfo: T.shape({
    hide: T.bool,
    department: T.string,
    email: T.string
  }),
  nextSteps: T.shape({
    hide: T.bool,
    cards: T.arrayOf(qr)
  }),
  whyChooseAsu: T.shape(dc)
};
const ou = (e) => /* @__PURE__ */ d.jsx(pi, { detailPageProps: e, children: /* @__PURE__ */ d.jsx(gi, { ...e }) });
ou.propTypes = gi.propTypes;
var iu, Vs = Zs;
iu = Vs.createRoot, Vs.hydrateRoot;
const su = (e, t, r) => {
  const n = document.querySelector(r);
  iu(n).render(mt.createElement(e, t));
}, Uh = ({ targetSelector: e, props: t }) => {
  su(Dc, t, e);
}, zh = ({ targetSelector: e, props: t }) => {
  su(ou, t, e);
};
export {
  ou as DetailPage,
  Dc as ListingPage,
  Uh as initListingPage,
  zh as initProgramDetailPage
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
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
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
