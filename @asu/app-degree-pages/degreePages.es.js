import mt, { forwardRef as Hi, Component as Tu, createContext as Zs, useRef as Xr, useImperativeHandle as Cu, useId as el, useContext as qt, createElement as tl, useState as ut, useEffect as At, useLayoutEffect as Au, useMemo as rl, Fragment as nl, createRef as Eu } from "react";
import al from "react-dom";
function Vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var il = { exports: {} }, wn = {};
var Mo;
function _u() {
  if (Mo) return wn;
  Mo = 1;
  var e = mt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, g, f) {
    var k, E = {}, _ = null, $ = null;
    f !== void 0 && (_ = "" + f), g.key !== void 0 && (_ = "" + g.key), g.ref !== void 0 && ($ = g.ref);
    for (k in g) n.call(g, k) && !s.hasOwnProperty(k) && (E[k] = g[k]);
    if (m && m.defaultProps) for (k in g = m.defaultProps, g) E[k] === void 0 && (E[k] = g[k]);
    return { $$typeof: t, type: m, key: _, ref: $, props: E, _owner: i.current };
  }
  return wn.Fragment = r, wn.jsx = p, wn.jsxs = p, wn;
}
il.exports = _u();
var d = il.exports;
function Gi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ol = { exports: {} }, Sn = {}, Fo;
function Ou() {
  if (Fo) return Sn;
  Fo = 1;
  var e = mt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, g, f) {
    var k, E = {}, _ = null, $ = null;
    f !== void 0 && (_ = "" + f), g.key !== void 0 && (_ = "" + g.key), g.ref !== void 0 && ($ = g.ref);
    for (k in g) n.call(g, k) && !s.hasOwnProperty(k) && (E[k] = g[k]);
    if (m && m.defaultProps) for (k in g = m.defaultProps, g) E[k] === void 0 && (E[k] = g[k]);
    return { $$typeof: t, type: m, key: _, ref: $, props: E, _owner: i.current };
  }
  return Sn.Fragment = r, Sn.jsx = p, Sn.jsxs = p, Sn;
}
ol.exports = Ou();
var q = ol.exports, sl = { exports: {} }, Ja, $o;
function ju() {
  if ($o) return Ja;
  $o = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ja = e, Ja;
}
var Qa, Uo;
function Nu() {
  if (Uo) return Qa;
  Uo = 1;
  var e = ju();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Qa = function() {
    function n(p, m, g, f, k, E) {
      if (E !== e) {
        var _ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw _.name = "Invariant Violation", _;
      }
    }
    n.isRequired = n;
    function i() {
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
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Qa;
}
sl.exports = Nu()();
var Ru = sl.exports;
const l = /* @__PURE__ */ Gi(Ru);
function Iu(e) {
  const [t, r] = ut(!1);
  return At(() => {
    const n = window.matchMedia(e);
    n.matches !== t && r(n.matches);
    const i = () => {
      r(n.matches);
    };
    return n.addEventListener("change", i), () => n.removeEventListener("change", i);
  }, [t, e]), t;
}
const zo = (e, t, r) => e ? t : r, Pu = (e) => (e || []).join(" "), {
  entries: ll,
  setPrototypeOf: qo,
  isFrozen: Du,
  getPrototypeOf: Lu,
  getOwnPropertyDescriptor: Mu
} = Object;
let {
  freeze: Et,
  seal: $t,
  create: cl
} = Object, {
  apply: Si,
  construct: ki
} = typeof Reflect < "u" && Reflect;
Et || (Et = function(e) {
  return e;
});
$t || ($t = function(e) {
  return e;
});
Si || (Si = function(e, t, r) {
  return e.apply(t, r);
});
ki || (ki = function(e, t) {
  return new e(...t);
});
const ca = _t(Array.prototype.forEach), Fu = _t(Array.prototype.lastIndexOf), Bo = _t(Array.prototype.pop), kn = _t(Array.prototype.push), $u = _t(Array.prototype.splice), va = _t(String.prototype.toLowerCase), Ka = _t(String.prototype.toString), Wo = _t(String.prototype.match), Tn = _t(String.prototype.replace), Uu = _t(String.prototype.indexOf), zu = _t(String.prototype.trim), tr = _t(Object.prototype.hasOwnProperty), Tt = _t(RegExp.prototype.test), Cn = qu(TypeError);
function _t(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Si(e, t, n);
  };
}
function qu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ki(e, r);
  };
}
function Me(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : va;
  qo && qo(e, null);
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (Du(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Bu(e) {
  for (let t = 0; t < e.length; t++)
    tr(e, t) || (e[t] = null);
  return e;
}
function zr(e) {
  const t = cl(null);
  for (const [r, n] of ll(e))
    tr(e, r) && (Array.isArray(n) ? t[r] = Bu(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = zr(n) : t[r] = n);
  return t;
}
function An(e, t) {
  for (; e !== null; ) {
    const n = Mu(e, t);
    if (n) {
      if (n.get)
        return _t(n.get);
      if (typeof n.value == "function")
        return _t(n.value);
    }
    e = Lu(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Ho = Et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Za = Et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ei = Et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Wu = Et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ti = Et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Hu = Et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Vo = Et(["#text"]), Go = Et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ri = Et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Yo = Et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ua = Et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Vu = $t(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Gu = $t(/<%[\w\W]*|[\w\W]*%>/gm), Yu = $t(/\$\{[\w\W]*/gm), Xu = $t(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ju = $t(/^aria-[\-\w]+$/), ul = $t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Qu = $t(/^(?:\w+script|data):/i), Ku = $t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), dl = $t(/^html$/i), Zu = $t(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Xo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Ju,
  ATTR_WHITESPACE: Ku,
  CUSTOM_ELEMENT: Zu,
  DATA_ATTR: Xu,
  DOCTYPE_NAME: dl,
  ERB_EXPR: Gu,
  IS_ALLOWED_URI: ul,
  IS_SCRIPT_OR_DATA: Qu,
  MUSTACHE_EXPR: Vu,
  TMPLIT_EXPR: Yu
});
const En = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, ed = function() {
  return typeof window > "u" ? null : window;
}, td = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  t && t.hasAttribute(n) && (r = t.getAttribute(n));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(i, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, Jo = function() {
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
function pl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ed();
  const t = (x) => pl(x);
  if (t.version = "3.2.5", t.removed = [], !e || !e.document || e.document.nodeType !== En.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, i = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: p,
    Node: m,
    Element: g,
    NodeFilter: f,
    NamedNodeMap: k = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: _,
    trustedTypes: $
  } = e, O = g.prototype, A = An(O, "cloneNode"), I = An(O, "remove"), F = An(O, "nextSibling"), U = An(O, "childNodes"), Y = An(O, "parentNode");
  if (typeof p == "function") {
    const x = r.createElement("template");
    x.content && x.content.ownerDocument && (r = x.content.ownerDocument);
  }
  let z, v = "";
  const {
    implementation: ie,
    createNodeIterator: de,
    createDocumentFragment: xe,
    getElementsByTagName: Re
  } = r, {
    importNode: Le
  } = n;
  let se = Jo();
  t.isSupported = typeof ll == "function" && typeof Y == "function" && ie && ie.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: _e,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: ve,
    ARIA_ATTR: Xe,
    IS_SCRIPT_OR_DATA: Oe,
    ATTR_WHITESPACE: Ce,
    CUSTOM_ELEMENT: $e
  } = Xo;
  let {
    IS_ALLOWED_URI: ze
  } = Xo, le = null;
  const H = Me({}, [...Ho, ...Za, ...ei, ...ti, ...Vo]);
  let R = null;
  const W = Me({}, [...Go, ...ri, ...Yo, ...ua]);
  let B = Object.seal(cl(null, {
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
  })), b = null, te = null, j = !0, oe = !0, ee = !1, re = !0, X = !1, ce = !0, fe = !1, ae = !1, ye = !1, ne = !1, me = !1, He = !1, be = !0, ft = !1;
  const Qe = "user-content-";
  let we = !0, J = !1, ue = {}, Ke = null;
  const gt = Me({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qe = null;
  const ar = Me({}, ["audio", "video", "img", "source", "image", "track"]);
  let Mt = null;
  const pr = Me({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", bt = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml";
  let yt = st, Bt = !1, Wt = null;
  const Pr = Me({}, [wt, bt, st], Ka);
  let ct = Me({}, ["mi", "mo", "mn", "ms", "mtext"]), St = Me({}, ["annotation-xml"]);
  const ir = Me({}, ["title", "style", "font", "a", "script"]);
  let Pe = null;
  const Ht = ["application/xhtml+xml", "text/html"], or = "text/html";
  let Te = null, nt = null;
  const sr = r.createElement("form"), kt = function(x) {
    return x instanceof RegExp || x instanceof Function;
  }, Ft = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(nt && nt === x)) {
      if ((!x || typeof x != "object") && (x = {}), x = zr(x), Pe = // eslint-disable-next-line unicorn/prefer-includes
      Ht.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? or : x.PARSER_MEDIA_TYPE, Te = Pe === "application/xhtml+xml" ? Ka : va, le = tr(x, "ALLOWED_TAGS") ? Me({}, x.ALLOWED_TAGS, Te) : H, R = tr(x, "ALLOWED_ATTR") ? Me({}, x.ALLOWED_ATTR, Te) : W, Wt = tr(x, "ALLOWED_NAMESPACES") ? Me({}, x.ALLOWED_NAMESPACES, Ka) : Pr, Mt = tr(x, "ADD_URI_SAFE_ATTR") ? Me(zr(pr), x.ADD_URI_SAFE_ATTR, Te) : pr, qe = tr(x, "ADD_DATA_URI_TAGS") ? Me(zr(ar), x.ADD_DATA_URI_TAGS, Te) : ar, Ke = tr(x, "FORBID_CONTENTS") ? Me({}, x.FORBID_CONTENTS, Te) : gt, b = tr(x, "FORBID_TAGS") ? Me({}, x.FORBID_TAGS, Te) : {}, te = tr(x, "FORBID_ATTR") ? Me({}, x.FORBID_ATTR, Te) : {}, ue = tr(x, "USE_PROFILES") ? x.USE_PROFILES : !1, j = x.ALLOW_ARIA_ATTR !== !1, oe = x.ALLOW_DATA_ATTR !== !1, ee = x.ALLOW_UNKNOWN_PROTOCOLS || !1, re = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, X = x.SAFE_FOR_TEMPLATES || !1, ce = x.SAFE_FOR_XML !== !1, fe = x.WHOLE_DOCUMENT || !1, ne = x.RETURN_DOM || !1, me = x.RETURN_DOM_FRAGMENT || !1, He = x.RETURN_TRUSTED_TYPE || !1, ye = x.FORCE_BODY || !1, be = x.SANITIZE_DOM !== !1, ft = x.SANITIZE_NAMED_PROPS || !1, we = x.KEEP_CONTENT !== !1, J = x.IN_PLACE || !1, ze = x.ALLOWED_URI_REGEXP || ul, yt = x.NAMESPACE || st, ct = x.MATHML_TEXT_INTEGRATION_POINTS || ct, St = x.HTML_INTEGRATION_POINTS || St, B = x.CUSTOM_ELEMENT_HANDLING || {}, x.CUSTOM_ELEMENT_HANDLING && kt(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (B.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && kt(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (B.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (B.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), X && (oe = !1), me && (ne = !0), ue && (le = Me({}, Vo), R = [], ue.html === !0 && (Me(le, Ho), Me(R, Go)), ue.svg === !0 && (Me(le, Za), Me(R, ri), Me(R, ua)), ue.svgFilters === !0 && (Me(le, ei), Me(R, ri), Me(R, ua)), ue.mathMl === !0 && (Me(le, ti), Me(R, Yo), Me(R, ua))), x.ADD_TAGS && (le === H && (le = zr(le)), Me(le, x.ADD_TAGS, Te)), x.ADD_ATTR && (R === W && (R = zr(R)), Me(R, x.ADD_ATTR, Te)), x.ADD_URI_SAFE_ATTR && Me(Mt, x.ADD_URI_SAFE_ATTR, Te), x.FORBID_CONTENTS && (Ke === gt && (Ke = zr(Ke)), Me(Ke, x.FORBID_CONTENTS, Te)), we && (le["#text"] = !0), fe && Me(le, ["html", "head", "body"]), le.table && (Me(le, ["tbody"]), delete b.tbody), x.TRUSTED_TYPES_POLICY) {
        if (typeof x.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof x.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        z = x.TRUSTED_TYPES_POLICY, v = z.createHTML("");
      } else
        z === void 0 && (z = td($, i)), z !== null && typeof v == "string" && (v = z.createHTML(""));
      Et && Et(x), nt = x;
    }
  }, Vt = Me({}, [...Za, ...ei, ...Wu]), Gt = Me({}, [...ti, ...Hu]), Ar = function(x) {
    let S = Y(x);
    (!S || !S.tagName) && (S = {
      namespaceURI: yt,
      tagName: "template"
    });
    const N = va(x.tagName), Q = va(S.tagName);
    return Wt[x.namespaceURI] ? x.namespaceURI === bt ? S.namespaceURI === st ? N === "svg" : S.namespaceURI === wt ? N === "svg" && (Q === "annotation-xml" || ct[Q]) : !!Vt[N] : x.namespaceURI === wt ? S.namespaceURI === st ? N === "math" : S.namespaceURI === bt ? N === "math" && St[Q] : !!Gt[N] : x.namespaceURI === st ? S.namespaceURI === bt && !St[Q] || S.namespaceURI === wt && !ct[Q] ? !1 : !Gt[N] && (ir[N] || !Vt[N]) : !!(Pe === "application/xhtml+xml" && Wt[x.namespaceURI]) : !1;
  }, lt = function(x) {
    kn(t.removed, {
      element: x
    });
    try {
      Y(x).removeChild(x);
    } catch {
      I(x);
    }
  }, Nt = function(x, S) {
    try {
      kn(t.removed, {
        attribute: S.getAttributeNode(x),
        from: S
      });
    } catch {
      kn(t.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(x), x === "is")
      if (ne || me)
        try {
          lt(S);
        } catch {
        }
      else
        try {
          S.setAttribute(x, "");
        } catch {
        }
  }, fr = function(x) {
    let S = null, N = null;
    if (ye)
      x = "<remove></remove>" + x;
    else {
      const je = Wo(x, /^[\r\n\t ]+/);
      N = je && je[0];
    }
    Pe === "application/xhtml+xml" && yt === st && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
    const Q = z ? z.createHTML(x) : x;
    if (yt === st)
      try {
        S = new _().parseFromString(Q, Pe);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = ie.createDocument(yt, "template", null);
      try {
        S.documentElement.innerHTML = Bt ? v : Q;
      } catch {
      }
    }
    const Se = S.body || S.documentElement;
    return x && N && Se.insertBefore(r.createTextNode(N), Se.childNodes[0] || null), yt === st ? Re.call(S, fe ? "html" : "body")[0] : fe ? S.documentElement : Se;
  }, mr = function(x) {
    return de.call(
      x.ownerDocument || x,
      x,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Rt = function(x) {
    return x instanceof E && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof k) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
  }, lr = function(x) {
    return typeof m == "function" && x instanceof m;
  };
  function Ze(x, S, N) {
    ca(x, (Q) => {
      Q.call(t, S, N, nt);
    });
  }
  const Yt = function(x) {
    let S = null;
    if (Ze(se.beforeSanitizeElements, x, null), Rt(x))
      return lt(x), !0;
    const N = Te(x.nodeName);
    if (Ze(se.uponSanitizeElement, x, {
      tagName: N,
      allowedTags: le
    }), x.hasChildNodes() && !lr(x.firstElementChild) && Tt(/<[/\w!]/g, x.innerHTML) && Tt(/<[/\w!]/g, x.textContent) || x.nodeType === En.progressingInstruction || ce && x.nodeType === En.comment && Tt(/<[/\w]/g, x.data))
      return lt(x), !0;
    if (!le[N] || b[N]) {
      if (!b[N] && It(N) && (B.tagNameCheck instanceof RegExp && Tt(B.tagNameCheck, N) || B.tagNameCheck instanceof Function && B.tagNameCheck(N)))
        return !1;
      if (we && !Ke[N]) {
        const Q = Y(x) || x.parentNode, Se = U(x) || x.childNodes;
        if (Se && Q) {
          const je = Se.length;
          for (let Ue = je - 1; Ue >= 0; --Ue) {
            const Ee = A(Se[Ue], !0);
            Ee.__removalCount = (x.__removalCount || 0) + 1, Q.insertBefore(Ee, F(x));
          }
        }
      }
      return lt(x), !0;
    }
    return x instanceof g && !Ar(x) || (N === "noscript" || N === "noembed" || N === "noframes") && Tt(/<\/no(script|embed|frames)/i, x.innerHTML) ? (lt(x), !0) : (X && x.nodeType === En.text && (S = x.textContent, ca([pe, _e, Ae], (Q) => {
      S = Tn(S, Q, " ");
    }), x.textContent !== S && (kn(t.removed, {
      element: x.cloneNode()
    }), x.textContent = S)), Ze(se.afterSanitizeElements, x, null), !1);
  }, hr = function(x, S, N) {
    if (be && (S === "id" || S === "name") && (N in r || N in sr))
      return !1;
    if (!(oe && !te[S] && Tt(ve, S)) && !(j && Tt(Xe, S))) {
      if (!R[S] || te[S]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(It(x) && (B.tagNameCheck instanceof RegExp && Tt(B.tagNameCheck, x) || B.tagNameCheck instanceof Function && B.tagNameCheck(x)) && (B.attributeNameCheck instanceof RegExp && Tt(B.attributeNameCheck, S) || B.attributeNameCheck instanceof Function && B.attributeNameCheck(S)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          S === "is" && B.allowCustomizedBuiltInElements && (B.tagNameCheck instanceof RegExp && Tt(B.tagNameCheck, N) || B.tagNameCheck instanceof Function && B.tagNameCheck(N)))
        ) return !1;
      } else if (!Mt[S] && !Tt(ze, Tn(N, Ce, "")) && !((S === "src" || S === "xlink:href" || S === "href") && x !== "script" && Uu(N, "data:") === 0 && qe[x]) && !(ee && !Tt(Oe, Tn(N, Ce, ""))) && N)
        return !1;
    }
    return !0;
  }, It = function(x) {
    return x !== "annotation-xml" && Wo(x, $e);
  }, gr = function(x) {
    Ze(se.beforeSanitizeAttributes, x, null);
    const {
      attributes: S
    } = x;
    if (!S || Rt(x))
      return;
    const N = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: R,
      forceKeepAttr: void 0
    };
    let Q = S.length;
    for (; Q--; ) {
      const Se = S[Q], {
        name: je,
        namespaceURI: Ue,
        value: Ee
      } = Se, et = Te(je);
      let Je = je === "value" ? Ee : zu(Ee);
      if (N.attrName = et, N.attrValue = Je, N.keepAttr = !0, N.forceKeepAttr = void 0, Ze(se.uponSanitizeAttribute, x, N), Je = N.attrValue, ft && (et === "id" || et === "name") && (Nt(je, x), Je = Qe + Je), ce && Tt(/((--!?|])>)|<\/(style|title)/i, Je)) {
        Nt(je, x);
        continue;
      }
      if (N.forceKeepAttr || (Nt(je, x), !N.keepAttr))
        continue;
      if (!re && Tt(/\/>/i, Je)) {
        Nt(je, x);
        continue;
      }
      X && ca([pe, _e, Ae], (br) => {
        Je = Tn(Je, br, " ");
      });
      const at = Te(x.nodeName);
      if (hr(at, et, Je)) {
        if (z && typeof $ == "object" && typeof $.getAttributeType == "function" && !Ue)
          switch ($.getAttributeType(at, et)) {
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
          Ue ? x.setAttributeNS(Ue, je, Je) : x.setAttribute(je, Je), Rt(x) ? lt(x) : Bo(t.removed);
        } catch {
        }
      }
    }
    Ze(se.afterSanitizeAttributes, x, null);
  }, yr = function x(S) {
    let N = null;
    const Q = mr(S);
    for (Ze(se.beforeSanitizeShadowDOM, S, null); N = Q.nextNode(); )
      Ze(se.uponSanitizeShadowNode, N, null), Yt(N), gr(N), N.content instanceof s && x(N.content);
    Ze(se.afterSanitizeShadowDOM, S, null);
  };
  return t.sanitize = function(x) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, Q = null, Se = null, je = null;
    if (Bt = !x, Bt && (x = "<!-->"), typeof x != "string" && !lr(x))
      if (typeof x.toString == "function") {
        if (x = x.toString(), typeof x != "string")
          throw Cn("dirty is not a string, aborting");
      } else
        throw Cn("toString is not a function");
    if (!t.isSupported)
      return x;
    if (ae || Ft(S), t.removed = [], typeof x == "string" && (J = !1), J) {
      if (x.nodeName) {
        const et = Te(x.nodeName);
        if (!le[et] || b[et])
          throw Cn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (x instanceof m)
      N = fr("<!---->"), Q = N.ownerDocument.importNode(x, !0), Q.nodeType === En.element && Q.nodeName === "BODY" || Q.nodeName === "HTML" ? N = Q : N.appendChild(Q);
    else {
      if (!ne && !X && !fe && // eslint-disable-next-line unicorn/prefer-includes
      x.indexOf("<") === -1)
        return z && He ? z.createHTML(x) : x;
      if (N = fr(x), !N)
        return ne ? null : He ? v : "";
    }
    N && ye && lt(N.firstChild);
    const Ue = mr(J ? x : N);
    for (; Se = Ue.nextNode(); )
      Yt(Se), gr(Se), Se.content instanceof s && yr(Se.content);
    if (J)
      return x;
    if (ne) {
      if (me)
        for (je = xe.call(N.ownerDocument); N.firstChild; )
          je.appendChild(N.firstChild);
      else
        je = N;
      return (R.shadowroot || R.shadowrootmode) && (je = Le.call(n, je, !0)), je;
    }
    let Ee = fe ? N.outerHTML : N.innerHTML;
    return fe && le["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && Tt(dl, N.ownerDocument.doctype.name) && (Ee = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + Ee), X && ca([pe, _e, Ae], (et) => {
      Ee = Tn(Ee, et, " ");
    }), z && He ? z.createHTML(Ee) : Ee;
  }, t.setConfig = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ft(x), ae = !0;
  }, t.clearConfig = function() {
    nt = null, ae = !1;
  }, t.isValidAttribute = function(x, S, N) {
    nt || Ft({});
    const Q = Te(x), Se = Te(S);
    return hr(Q, Se, N);
  }, t.addHook = function(x, S) {
    typeof S == "function" && kn(se[x], S);
  }, t.removeHook = function(x, S) {
    if (S !== void 0) {
      const N = Fu(se[x], S);
      return N === -1 ? void 0 : $u(se[x], N, 1)[0];
    }
    return Bo(se[x]);
  }, t.removeHooks = function(x) {
    se[x] = [];
  }, t.removeAllHooks = function() {
    se = Jo();
  }, t;
}
var Qo = pl();
let da = null;
function rd() {
  return da || (typeof window < "u" ? da = Qo(window) : da = Qo), da;
}
function nd(e) {
  const t = e ? document.querySelector(e) : document;
  return t ? t.querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  ) : null;
}
const Hr = (e) => ({ __html: rd().sanitize(e) }), Ko = (e, t, r) => {
  let n = e;
  const i = [];
  for (; n < t; )
    n > 0 && n <= r && i.push(n), n += 1;
  return i;
};
let ni = !1;
const ad = (e, t) => {
  ni || (ni = !0, setTimeout(() => {
    e(), ni = !1;
  }, t));
};
let Zo;
const id = (e, t) => {
  window.clearTimeout(Zo), Zo = window.setTimeout(e, t);
};
function od(e) {
  if (e && typeof e.getBoundingClientRect == "function") {
    const { bottom: t, top: r } = e.getBoundingClientRect(), { offsetTop: n } = e;
    if (r < 0 && t > 0) {
      const i = e.style;
      e.style = `${i};transition: height 0s !important; overflow:hidden; height:${t}px!important;max-height:${t}px!important`, window.scrollTo({ behavior: "instant", top: n }), setTimeout(() => {
        e.style = i, window.scrollTo({
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
const fl = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: i = "",
  text: s = "",
  region: p = "",
  component: m = ""
}) => {
  const { dataLayer: g } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: p.toLowerCase(),
    section: i.toLowerCase(),
    text: s.toLowerCase(),
    component: m.toLowerCase()
  };
  g && g.push(f);
}, Un = ({ children: e }) => /* @__PURE__ */ q.jsx(q.Fragment, { children: e });
Un.propTypes = {
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node,
    l.string
  ])
};
var ml = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", p = 0; p < arguments.length; p++) {
        var m = arguments[p];
        m && (s = i(s, n(m)));
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
        t.call(s, m) && s[m] && (p = i(p, m));
      return p;
    }
    function i(s, p) {
      return p ? s ? s + " " + p : s + p : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(ml);
var sd = ml.exports;
const ot = /* @__PURE__ */ Gi(sd);
({
  ...Un.propTypes
});
const hl = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ q.jsx("div", { className: t, ...r, children: /* @__PURE__ */ q.jsx("div", { className: "row", children: e }) });
hl.propTypes = {
  children: Un.propTypes.children
};
({
  ...hl.propTypes
});
Un.propTypes.children, l.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Un.propTypes.children;
const ld = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), ai = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), gl = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.arrayOf(l.string),
    header: l.string,
    body: l.string
  })
}), Yi = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var Ur = {}, es;
function cd() {
  if (es) return Ur;
  es = 1;
  var e = mt;
  function t(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, y = 1; y < arguments.length; y++) u += "&args[]=" + encodeURIComponent(arguments[y]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, i = {}, s = {};
  function p(a) {
    return r.call(s, a) ? !0 : r.call(i, a) ? !1 : n.test(a) ? s[a] = !0 : (i[a] = !0, !1);
  }
  function m(a, u, y, T, M, P, V) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = T, this.attributeNamespace = M, this.mustUseProperty = y, this.propertyName = a, this.type = u, this.sanitizeURL = P, this.removeEmptyString = V;
  }
  var g = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    g[a] = new m(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    g[u] = new m(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    g[a] = new m(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    g[a] = new m(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    g[a] = new m(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    g[a] = new m(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    g[a] = new m(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    g[a] = new m(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    g[a] = new m(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var f = /[\-:]([a-z])/g;
  function k(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      f,
      k
    );
    g[u] = new m(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(f, k);
    g[u] = new m(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(f, k);
    g[u] = new m(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    g[a] = new m(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), g.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    g[a] = new m(a, 1, !1, a.toLowerCase(), null, !0, !0);
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
  }, _ = ["Webkit", "ms", "Moz", "O"];
  Object.keys(E).forEach(function(a) {
    _.forEach(function(u) {
      u = u + a.charAt(0).toUpperCase() + a.substring(1), E[u] = E[a];
    });
  });
  var $ = /["'&<>]/;
  function O(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var u = $.exec(a);
    if (u) {
      var y = "", T, M = 0;
      for (T = u.index; T < a.length; T++) {
        switch (a.charCodeAt(T)) {
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
        M !== T && (y += a.substring(M, T)), M = T + 1, y += u;
      }
      a = M !== T ? y + a.substring(M, T) : y;
    }
    return a;
  }
  var A = /([A-Z])/g, I = /^ms-/, F = Array.isArray;
  function U(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function Y(a, u, y) {
    switch (u) {
      case "select":
        return U(1, y.value != null ? y.value : y.defaultValue);
      case "svg":
        return U(2, null);
      case "math":
        return U(3, null);
      case "foreignObject":
        return U(1, null);
      case "table":
        return U(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return U(5, null);
      case "colgroup":
        return U(7, null);
      case "tr":
        return U(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? U(1, null) : a;
  }
  var z = /* @__PURE__ */ new Map();
  function v(a, u, y) {
    if (typeof y != "object") throw Error(t(62));
    u = !0;
    for (var T in y) if (r.call(y, T)) {
      var M = y[T];
      if (M != null && typeof M != "boolean" && M !== "") {
        if (T.indexOf("--") === 0) {
          var P = O(T);
          M = O(("" + M).trim());
        } else {
          P = T;
          var V = z.get(P);
          V !== void 0 || (V = O(P.replace(A, "-$1").toLowerCase().replace(I, "-ms-")), z.set(P, V)), P = V, M = typeof M == "number" ? M === 0 || r.call(E, T) ? "" + M : M + "px" : O(("" + M).trim());
        }
        u ? (u = !1, a.push(' style="', P, ":", M)) : a.push(";", P, ":", M);
      }
    }
    u || a.push('"');
  }
  function ie(a, u, y, T) {
    switch (y) {
      case "style":
        v(a, u, T);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < y.length) || y[0] !== "o" && y[0] !== "O" || y[1] !== "n" && y[1] !== "N") {
      if (u = g.hasOwnProperty(y) ? g[y] : null, u !== null) {
        switch (typeof T) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (y = u.attributeName, u.type) {
          case 3:
            T && a.push(" ", y, '=""');
            break;
          case 4:
            T === !0 ? a.push(" ", y, '=""') : T !== !1 && a.push(" ", y, '="', O(T), '"');
            break;
          case 5:
            isNaN(T) || a.push(" ", y, '="', O(T), '"');
            break;
          case 6:
            !isNaN(T) && 1 <= T && a.push(" ", y, '="', O(T), '"');
            break;
          default:
            u.sanitizeURL && (T = "" + T), a.push(" ", y, '="', O(T), '"');
        }
      } else if (p(y)) {
        switch (typeof T) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = y.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        a.push(" ", y, '="', O(T), '"');
      }
    }
  }
  function de(a, u, y) {
    if (u != null) {
      if (y != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && a.push("" + u);
    }
  }
  function xe(a) {
    var u = "";
    return e.Children.forEach(a, function(y) {
      y != null && (u += y);
    }), u;
  }
  function Re(a, u, y, T) {
    a.push(pe(y));
    var M = y = null, P;
    for (P in u) if (r.call(u, P)) {
      var V = u[P];
      if (V != null) switch (P) {
        case "children":
          y = V;
          break;
        case "dangerouslySetInnerHTML":
          M = V;
          break;
        default:
          ie(a, T, P, V);
      }
    }
    return a.push(">"), de(a, M, y), typeof y == "string" ? (a.push(O(y)), null) : y;
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
  function _e(a, u, y, T, M) {
    switch (u) {
      case "select":
        a.push(pe("select"));
        var P = null, V = null;
        for (Ne in y) if (r.call(y, Ne)) {
          var Z = y[Ne];
          if (Z != null) switch (Ne) {
            case "children":
              P = Z;
              break;
            case "dangerouslySetInnerHTML":
              V = Z;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ie(a, T, Ne, Z);
          }
        }
        return a.push(">"), de(a, V, P), P;
      case "option":
        V = M.selectedValue, a.push(pe("option"));
        var he = Z = null, ke = null, Ne = null;
        for (P in y) if (r.call(y, P)) {
          var it = y[P];
          if (it != null) switch (P) {
            case "children":
              Z = it;
              break;
            case "selected":
              ke = it;
              break;
            case "dangerouslySetInnerHTML":
              Ne = it;
              break;
            case "value":
              he = it;
            default:
              ie(a, T, P, it);
          }
        }
        if (V != null) if (y = he !== null ? "" + he : xe(Z), F(V)) {
          for (T = 0; T < V.length; T++)
            if ("" + V[T] === y) {
              a.push(' selected=""');
              break;
            }
        } else "" + V === y && a.push(' selected=""');
        else ke && a.push(' selected=""');
        return a.push(">"), de(a, Ne, Z), Z;
      case "textarea":
        a.push(pe("textarea")), Ne = V = P = null;
        for (Z in y) if (r.call(y, Z) && (he = y[Z], he != null)) switch (Z) {
          case "children":
            Ne = he;
            break;
          case "value":
            P = he;
            break;
          case "defaultValue":
            V = he;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ie(
              a,
              T,
              Z,
              he
            );
        }
        if (P === null && V !== null && (P = V), a.push(">"), Ne != null) {
          if (P != null) throw Error(t(92));
          if (F(Ne) && 1 < Ne.length) throw Error(t(93));
          P = "" + Ne;
        }
        return typeof P == "string" && P[0] === `
` && a.push(`
`), P !== null && a.push(O("" + P)), null;
      case "input":
        a.push(pe("input")), he = Ne = Z = P = null;
        for (V in y) if (r.call(y, V) && (ke = y[V], ke != null)) switch (V) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            he = ke;
            break;
          case "defaultValue":
            Z = ke;
            break;
          case "checked":
            Ne = ke;
            break;
          case "value":
            P = ke;
            break;
          default:
            ie(a, T, V, ke);
        }
        return Ne !== null ? ie(a, T, "checked", Ne) : he !== null && ie(a, T, "checked", he), P !== null ? ie(a, T, "value", P) : Z !== null && ie(a, T, "value", Z), a.push("/>"), null;
      case "menuitem":
        a.push(pe("menuitem"));
        for (var Jt in y) if (r.call(y, Jt) && (P = y[Jt], P != null)) switch (Jt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ie(a, T, Jt, P);
        }
        return a.push(">"), null;
      case "title":
        a.push(pe("title")), P = null;
        for (it in y) if (r.call(y, it) && (V = y[it], V != null)) switch (it) {
          case "children":
            P = V;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ie(a, T, it, V);
        }
        return a.push(">"), P;
      case "listing":
      case "pre":
        a.push(pe(u)), V = P = null;
        for (he in y) if (r.call(y, he) && (Z = y[he], Z != null)) switch (he) {
          case "children":
            P = Z;
            break;
          case "dangerouslySetInnerHTML":
            V = Z;
            break;
          default:
            ie(a, T, he, Z);
        }
        if (a.push(">"), V != null) {
          if (P != null) throw Error(t(60));
          if (typeof V != "object" || !("__html" in V)) throw Error(t(61));
          y = V.__html, y != null && (typeof y == "string" && 0 < y.length && y[0] === `
` ? a.push(`
`, y) : a.push("" + y));
        }
        return typeof P == "string" && P[0] === `
` && a.push(`
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
        a.push(pe(u));
        for (var Qt in y) if (r.call(y, Qt) && (P = y[Qt], P != null)) switch (Qt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ie(a, T, Qt, P);
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
          y,
          u,
          T
        );
      case "html":
        return M.insertionMode === 0 && a.push("<!DOCTYPE html>"), Re(a, y, u, T);
      default:
        if (u.indexOf("-") === -1 && typeof y.is != "string") return Re(a, y, u, T);
        a.push(pe(u)), V = P = null;
        for (ke in y) if (r.call(y, ke) && (Z = y[ke], Z != null)) switch (ke) {
          case "children":
            P = Z;
            break;
          case "dangerouslySetInnerHTML":
            V = Z;
            break;
          case "style":
            v(a, T, Z);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            p(ke) && typeof Z != "function" && typeof Z != "symbol" && a.push(" ", ke, '="', O(Z), '"');
        }
        return a.push(">"), de(a, V, P), P;
    }
  }
  function Ae(a, u, y) {
    if (a.push('<!--$?--><template id="'), y === null) throw Error(t(395));
    return a.push(y), a.push('"></template>');
  }
  function ve(a, u, y, T) {
    switch (y.insertionMode) {
      case 0:
      case 1:
        return a.push('<div hidden id="'), a.push(u.segmentPrefix), u = T.toString(16), a.push(u), a.push('">');
      case 2:
        return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(u.segmentPrefix), u = T.toString(16), a.push(u), a.push('">');
      case 3:
        return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(u.segmentPrefix), u = T.toString(16), a.push(u), a.push('">');
      case 4:
        return a.push('<table hidden id="'), a.push(u.segmentPrefix), u = T.toString(16), a.push(u), a.push('">');
      case 5:
        return a.push('<table hidden><tbody id="'), a.push(u.segmentPrefix), u = T.toString(16), a.push(u), a.push('">');
      case 6:
        return a.push('<table hidden><tr id="'), a.push(u.segmentPrefix), u = T.toString(16), a.push(u), a.push('">');
      case 7:
        return a.push('<table hidden><colgroup id="'), a.push(u.segmentPrefix), u = T.toString(16), a.push(u), a.push('">');
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
  function ze(a, u, y, T) {
    return y.generateStaticMarkup ? (a.push(O(u)), !1) : (u === "" ? a = T : (T && a.push("<!-- -->"), a.push(O(u)), a = !0), a);
  }
  var le = Object.assign, H = Symbol.for("react.element"), R = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), j = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), fe = Symbol.for("react.scope"), ae = Symbol.for("react.debug_trace_mode"), ye = Symbol.for("react.legacy_hidden"), ne = Symbol.for("react.default_value"), me = Symbol.iterator;
  function He(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case W:
        return "Fragment";
      case R:
        return "Portal";
      case b:
        return "Profiler";
      case B:
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
      case oe:
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
  var be = {};
  function ft(a, u) {
    if (a = a.contextTypes, !a) return be;
    var y = {}, T;
    for (T in a) y[T] = u[T];
    return y;
  }
  var Qe = null;
  function we(a, u) {
    if (a !== u) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var y = u.parent;
      if (a === null) {
        if (y !== null) throw Error(t(401));
      } else {
        if (y === null) throw Error(t(401));
        we(a, y);
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
  function Ke(a, u) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === u.depth ? we(a, u) : Ke(a, u);
  }
  function gt(a, u) {
    var y = u.parent;
    if (y === null) throw Error(t(402));
    a.depth === y.depth ? we(a, y) : gt(a, y), u.context._currentValue2 = u.value;
  }
  function qe(a) {
    var u = Qe;
    u !== a && (u === null ? ue(a) : a === null ? J(u) : u.depth === a.depth ? we(u, a) : u.depth > a.depth ? Ke(u, a) : gt(u, a), Qe = a);
  }
  var ar = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function Mt(a, u, y, T) {
    var M = a.state !== void 0 ? a.state : null;
    a.updater = ar, a.props = y, a.state = M;
    var P = { queue: [], replace: !1 };
    a._reactInternals = P;
    var V = u.contextType;
    if (a.context = typeof V == "object" && V !== null ? V._currentValue2 : T, V = u.getDerivedStateFromProps, typeof V == "function" && (V = V(y, M), M = V == null ? M : le({}, M, V), a.state = M), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && ar.enqueueReplaceState(a, a.state, null), P.queue !== null && 0 < P.queue.length) if (u = P.queue, V = P.replace, P.queue = null, P.replace = !1, V && u.length === 1) a.state = u[0];
    else {
      for (P = V ? u[0] : a.state, M = !0, V = V ? 1 : 0; V < u.length; V++) {
        var Z = u[V];
        Z = typeof Z == "function" ? Z.call(a, P, y, T) : Z, Z != null && (M ? (M = !1, P = le({}, P, Z)) : le(P, Z));
      }
      a.state = P;
    }
    else P.queue = null;
  }
  var pr = { id: 1, overflow: "" };
  function wt(a, u, y) {
    var T = a.id;
    a = a.overflow;
    var M = 32 - bt(T) - 1;
    T &= ~(1 << M), y += 1;
    var P = 32 - bt(u) + M;
    if (30 < P) {
      var V = M - M % 5;
      return P = (T & (1 << V) - 1).toString(32), T >>= V, M -= V, { id: 1 << 32 - bt(u) + M | y << M | T, overflow: P + a };
    }
    return { id: 1 << P | y << M | T, overflow: a };
  }
  var bt = Math.clz32 ? Math.clz32 : Bt, st = Math.log, yt = Math.LN2;
  function Bt(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (st(a) / yt | 0) | 0;
  }
  function Wt(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var Pr = typeof Object.is == "function" ? Object.is : Wt, ct = null, St = null, ir = null, Pe = null, Ht = !1, or = !1, Te = 0, nt = null, sr = 0;
  function kt() {
    if (ct === null) throw Error(t(321));
    return ct;
  }
  function Ft() {
    if (0 < sr) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Vt() {
    return Pe === null ? ir === null ? (Ht = !1, ir = Pe = Ft()) : (Ht = !0, Pe = ir) : Pe.next === null ? (Ht = !1, Pe = Pe.next = Ft()) : (Ht = !0, Pe = Pe.next), Pe;
  }
  function Gt() {
    St = ct = null, or = !1, ir = null, sr = 0, Pe = nt = null;
  }
  function Ar(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function lt(a, u, y) {
    if (ct = kt(), Pe = Vt(), Ht) {
      var T = Pe.queue;
      if (u = T.dispatch, nt !== null && (y = nt.get(T), y !== void 0)) {
        nt.delete(T), T = Pe.memoizedState;
        do
          T = a(T, y.action), y = y.next;
        while (y !== null);
        return Pe.memoizedState = T, [T, u];
      }
      return [Pe.memoizedState, u];
    }
    return a = a === Ar ? typeof u == "function" ? u() : u : y !== void 0 ? y(u) : u, Pe.memoizedState = a, a = Pe.queue = { last: null, dispatch: null }, a = a.dispatch = fr.bind(null, ct, a), [Pe.memoizedState, a];
  }
  function Nt(a, u) {
    if (ct = kt(), Pe = Vt(), u = u === void 0 ? null : u, Pe !== null) {
      var y = Pe.memoizedState;
      if (y !== null && u !== null) {
        var T = y[1];
        e: if (T === null) T = !1;
        else {
          for (var M = 0; M < T.length && M < u.length; M++) if (!Pr(u[M], T[M])) {
            T = !1;
            break e;
          }
          T = !0;
        }
        if (T) return y[0];
      }
    }
    return a = a(), Pe.memoizedState = [a, u], a;
  }
  function fr(a, u, y) {
    if (25 <= sr) throw Error(t(301));
    if (a === ct) if (or = !0, a = { action: y, next: null }, nt === null && (nt = /* @__PURE__ */ new Map()), y = nt.get(u), y === void 0) nt.set(u, a);
    else {
      for (u = y; u.next !== null; ) u = u.next;
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
  }, useMemo: Nt, useReducer: lt, useRef: function(a) {
    ct = kt(), Pe = Vt();
    var u = Pe.memoizedState;
    return u === null ? (a = { current: a }, Pe.memoizedState = a) : u;
  }, useState: function(a) {
    return lt(Ar, a);
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
    a = a.id, a = (a & ~(1 << 32 - bt(a) - 1)).toString(32) + u;
    var y = Ze;
    if (y === null) throw Error(t(404));
    return u = Te++, a = ":" + y.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return kt(), u(a._source);
  }, useSyncExternalStore: function(a, u, y) {
    if (y === void 0) throw Error(t(407));
    return y();
  } }, Ze = null, Yt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function hr(a) {
    return console.error(a), null;
  }
  function It() {
  }
  function gr(a, u, y, T, M, P, V, Z, he) {
    var ke = [], Ne = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: T, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ne, pingedTasks: ke, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: M === void 0 ? hr : M, onAllReady: It, onShellReady: V === void 0 ? It : V, onShellError: It, onFatalError: It }, y = x(u, 0, null, y, !1, !1), y.parentFlushed = !0, a = yr(u, a, null, y, Ne, be, null, pr), ke.push(a), u;
  }
  function yr(a, u, y, T, M, P, V, Z) {
    a.allPendingTasks++, y === null ? a.pendingRootTasks++ : y.pendingTasks++;
    var he = { node: u, ping: function() {
      var ke = a.pingedTasks;
      ke.push(he), ke.length === 1 && Gn(a);
    }, blockedBoundary: y, blockedSegment: T, abortSet: M, legacyContext: P, context: V, treeContext: Z };
    return M.add(he), he;
  }
  function x(a, u, y, T, M, P) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: T, boundary: y, lastPushedText: M, textEmbedded: P };
  }
  function S(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function N(a, u) {
    var y = a.onShellError;
    y(u), y = a.onFatalError, y(u), a.destination !== null ? (a.status = 2, a.destination.destroy(u)) : (a.status = 1, a.fatalError = u);
  }
  function Q(a, u, y, T, M) {
    for (ct = {}, St = u, Te = 0, a = y(T, M); or; ) or = !1, Te = 0, sr += 1, Pe = null, a = y(T, M);
    return Gt(), a;
  }
  function Se(a, u, y, T) {
    var M = y.render(), P = T.childContextTypes;
    if (P != null) {
      var V = u.legacyContext;
      if (typeof y.getChildContext != "function") T = V;
      else {
        y = y.getChildContext();
        for (var Z in y) if (!(Z in P)) throw Error(t(108, He(T) || "Unknown", Z));
        T = le({}, V, y);
      }
      u.legacyContext = T, Ee(a, u, M), u.legacyContext = V;
    } else Ee(a, u, M);
  }
  function je(a, u) {
    if (a && a.defaultProps) {
      u = le({}, u), a = a.defaultProps;
      for (var y in a) u[y] === void 0 && (u[y] = a[y]);
      return u;
    }
    return u;
  }
  function Ue(a, u, y, T, M) {
    if (typeof y == "function") if (y.prototype && y.prototype.isReactComponent) {
      M = ft(y, u.legacyContext);
      var P = y.contextType;
      P = new y(T, typeof P == "object" && P !== null ? P._currentValue2 : M), Mt(P, y, T, M), Se(a, u, P, y);
    } else {
      P = ft(y, u.legacyContext), M = Q(a, u, y, T, P);
      var V = Te !== 0;
      if (typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0) Mt(M, y, T, P), Se(a, u, M, y);
      else if (V) {
        T = u.treeContext, u.treeContext = wt(T, 1, 0);
        try {
          Ee(a, u, M);
        } finally {
          u.treeContext = T;
        }
      } else Ee(a, u, M);
    }
    else if (typeof y == "string") {
      switch (M = u.blockedSegment, P = _e(M.chunks, y, T, a.responseState, M.formatContext), M.lastPushedText = !1, V = M.formatContext, M.formatContext = Y(V, y, T), Je(a, u, P), M.formatContext = V, y) {
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
          M.chunks.push("</", y, ">");
      }
      M.lastPushedText = !1;
    } else {
      switch (y) {
        case ye:
        case ae:
        case B:
        case b:
        case W:
          Ee(a, u, T.children);
          return;
        case re:
          Ee(a, u, T.children);
          return;
        case fe:
          throw Error(t(343));
        case ee:
          e: {
            y = u.blockedBoundary, M = u.blockedSegment, P = T.fallback, T = T.children, V = /* @__PURE__ */ new Set();
            var Z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: V, errorDigest: null }, he = x(a, M.chunks.length, Z, M.formatContext, !1, !1);
            M.children.push(he), M.lastPushedText = !1;
            var ke = x(a, 0, null, M.formatContext, !1, !1);
            ke.parentFlushed = !0, u.blockedBoundary = Z, u.blockedSegment = ke;
            try {
              if (Je(
                a,
                u,
                T
              ), a.responseState.generateStaticMarkup || ke.lastPushedText && ke.textEmbedded && ke.chunks.push("<!-- -->"), ke.status = 1, Xt(Z, ke), Z.pendingTasks === 0) break e;
            } catch (Ne) {
              ke.status = 4, Z.forceClientRender = !0, Z.errorDigest = S(a, Ne);
            } finally {
              u.blockedBoundary = y, u.blockedSegment = M;
            }
            u = yr(a, P, y, he, V, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof y == "object" && y !== null) switch (y.$$typeof) {
        case oe:
          if (T = Q(a, u, y.render, T, M), Te !== 0) {
            y = u.treeContext, u.treeContext = wt(y, 1, 0);
            try {
              Ee(a, u, T);
            } finally {
              u.treeContext = y;
            }
          } else Ee(a, u, T);
          return;
        case X:
          y = y.type, T = je(y, T), Ue(a, u, y, T, M);
          return;
        case te:
          if (M = T.children, y = y._context, T = T.value, P = y._currentValue2, y._currentValue2 = T, V = Qe, Qe = T = { parent: V, depth: V === null ? 0 : V.depth + 1, context: y, parentValue: P, value: T }, u.context = T, Ee(a, u, M), a = Qe, a === null) throw Error(t(403));
          T = a.parentValue, a.context._currentValue2 = T === ne ? a.context._defaultValue : T, a = Qe = a.parent, u.context = a;
          return;
        case j:
          T = T.children, T = T(y._currentValue2), Ee(a, u, T);
          return;
        case ce:
          M = y._init, y = M(y._payload), T = je(y, T), Ue(
            a,
            u,
            y,
            T,
            void 0
          );
          return;
      }
      throw Error(t(130, y == null ? y : typeof y, ""));
    }
  }
  function Ee(a, u, y) {
    if (u.node = y, typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case H:
          Ue(a, u, y.type, y.props, y.ref);
          return;
        case R:
          throw Error(t(257));
        case ce:
          var T = y._init;
          y = T(y._payload), Ee(a, u, y);
          return;
      }
      if (F(y)) {
        et(a, u, y);
        return;
      }
      if (y === null || typeof y != "object" ? T = null : (T = me && y[me] || y["@@iterator"], T = typeof T == "function" ? T : null), T && (T = T.call(y))) {
        if (y = T.next(), !y.done) {
          var M = [];
          do
            M.push(y.value), y = T.next();
          while (!y.done);
          et(a, u, M);
        }
        return;
      }
      throw a = Object.prototype.toString.call(y), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : a));
    }
    typeof y == "string" ? (T = u.blockedSegment, T.lastPushedText = ze(u.blockedSegment.chunks, y, a.responseState, T.lastPushedText)) : typeof y == "number" && (T = u.blockedSegment, T.lastPushedText = ze(u.blockedSegment.chunks, "" + y, a.responseState, T.lastPushedText));
  }
  function et(a, u, y) {
    for (var T = y.length, M = 0; M < T; M++) {
      var P = u.treeContext;
      u.treeContext = wt(P, T, M);
      try {
        Je(a, u, y[M]);
      } finally {
        u.treeContext = P;
      }
    }
  }
  function Je(a, u, y) {
    var T = u.blockedSegment.formatContext, M = u.legacyContext, P = u.context;
    try {
      return Ee(a, u, y);
    } catch (he) {
      if (Gt(), typeof he == "object" && he !== null && typeof he.then == "function") {
        y = he;
        var V = u.blockedSegment, Z = x(a, V.chunks.length, null, V.formatContext, V.lastPushedText, !0);
        V.children.push(Z), V.lastPushedText = !1, a = yr(a, u.node, u.blockedBoundary, Z, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, y.then(a, a), u.blockedSegment.formatContext = T, u.legacyContext = M, u.context = P, qe(P);
      } else throw u.blockedSegment.formatContext = T, u.legacyContext = M, u.context = P, qe(P), he;
    }
  }
  function at(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, Er(this, u, a);
  }
  function br(a, u, y) {
    var T = a.blockedBoundary;
    a.blockedSegment.status = 3, T === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (T.pendingTasks--, T.forceClientRender || (T.forceClientRender = !0, a = y === void 0 ? Error(t(432)) : y, T.errorDigest = u.onError(a), T.parentFlushed && u.clientRenderedBoundaries.push(T)), T.fallbackAbortableTasks.forEach(function(M) {
      return br(M, u, y);
    }), T.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (T = u.onAllReady, T()));
  }
  function Xt(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var y = u.children[0];
      y.id = u.id, y.parentFlushed = !0, y.status === 1 && Xt(a, y);
    } else a.completedSegments.push(u);
  }
  function Er(a, u, y) {
    if (u === null) {
      if (y.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = y;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = It, u = a.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (y.parentFlushed && y.status === 1 && Xt(u, y), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(at, a), u.fallbackAbortableTasks.clear()) : y.parentFlushed && y.status === 1 && (Xt(u, y), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function Gn(a) {
    if (a.status !== 2) {
      var u = Qe, y = Yt.current;
      Yt.current = lr;
      var T = Ze;
      Ze = a.responseState;
      try {
        var M = a.pingedTasks, P;
        for (P = 0; P < M.length; P++) {
          var V = M[P], Z = a, he = V.blockedSegment;
          if (he.status === 0) {
            qe(V.context);
            try {
              Ee(Z, V, V.node), Z.responseState.generateStaticMarkup || he.lastPushedText && he.textEmbedded && he.chunks.push("<!-- -->"), V.abortSet.delete(V), he.status = 1, Er(Z, V.blockedBoundary, he);
            } catch (Pt) {
              if (Gt(), typeof Pt == "object" && Pt !== null && typeof Pt.then == "function") {
                var ke = V.ping;
                Pt.then(ke, ke);
              } else {
                V.abortSet.delete(V), he.status = 4;
                var Ne = V.blockedBoundary, it = Pt, Jt = S(Z, it);
                if (Ne === null ? N(Z, it) : (Ne.pendingTasks--, Ne.forceClientRender || (Ne.forceClientRender = !0, Ne.errorDigest = Jt, Ne.parentFlushed && Z.clientRenderedBoundaries.push(Ne))), Z.allPendingTasks--, Z.allPendingTasks === 0) {
                  var Qt = Z.onAllReady;
                  Qt();
                }
              }
            } finally {
            }
          }
        }
        M.splice(0, P), a.destination !== null && Zr(a, a.destination);
      } catch (Pt) {
        S(a, Pt), N(a, Pt);
      } finally {
        Ze = T, Yt.current = y, y === lr && qe(u);
      }
    }
  }
  function Dr(a, u, y) {
    switch (y.parentFlushed = !0, y.status) {
      case 0:
        var T = y.id = a.nextSegmentId++;
        return y.lastPushedText = !1, y.textEmbedded = !1, a = a.responseState, u.push('<template id="'), u.push(a.placeholderPrefix), a = T.toString(16), u.push(a), u.push('"></template>');
      case 1:
        y.status = 2;
        var M = !0;
        T = y.chunks;
        var P = 0;
        y = y.children;
        for (var V = 0; V < y.length; V++) {
          for (M = y[V]; P < M.index; P++) u.push(T[P]);
          M = Lr(a, u, M);
        }
        for (; P < T.length - 1; P++) u.push(T[P]);
        return P < T.length && (M = u.push(T[P])), M;
      default:
        throw Error(t(390));
    }
  }
  function Lr(a, u, y) {
    var T = y.boundary;
    if (T === null) return Dr(a, u, y);
    if (T.parentFlushed = !0, T.forceClientRender) return a.responseState.generateStaticMarkup || (T = T.errorDigest, u.push("<!--$!-->"), u.push("<template"), T && (u.push(' data-dgst="'), T = O(T), u.push(T), u.push('"')), u.push("></template>")), Dr(a, u, y), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
    if (0 < T.pendingTasks) {
      T.rootSegmentID = a.nextSegmentId++, 0 < T.completedSegments.length && a.partialBoundaries.push(T);
      var M = a.responseState, P = M.nextSuspenseID++;
      return M = M.boundaryPrefix + P.toString(16), T = T.id = M, Ae(u, a.responseState, T), Dr(a, u, y), u.push("<!--/$-->");
    }
    if (T.byteSize > a.progressiveChunkSize) return T.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(T), Ae(u, a.responseState, T.id), Dr(a, u, y), u.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || u.push("<!--$-->"), y = T.completedSegments, y.length !== 1) throw Error(t(391));
    return Lr(a, u, y[0]), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
  }
  function pn(a, u, y) {
    return ve(u, a.responseState, y.formatContext, y.id), Lr(a, u, y), Xe(u, y.formatContext);
  }
  function fn(a, u, y) {
    for (var T = y.completedSegments, M = 0; M < T.length; M++) mn(a, u, y, T[M]);
    if (T.length = 0, a = a.responseState, T = y.id, y = y.rootSegmentID, u.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? u.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), T === null) throw Error(t(395));
    return y = y.toString(16), u.push(T), u.push('","'), u.push(a.segmentPrefix), u.push(y), u.push('")<\/script>');
  }
  function mn(a, u, y, T) {
    if (T.status === 2) return !0;
    var M = T.id;
    if (M === -1) {
      if ((T.id = y.rootSegmentID) === -1) throw Error(t(392));
      return pn(a, u, T);
    }
    return pn(a, u, T), a = a.responseState, u.push(a.startInlineScript), a.sentCompleteSegmentFunction ? u.push('$RS("') : (a.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(a.segmentPrefix), M = M.toString(16), u.push(M), u.push('","'), u.push(a.placeholderPrefix), u.push(M), u.push('")<\/script>');
  }
  function Zr(a, u) {
    try {
      var y = a.completedRootSegment;
      if (y !== null && a.pendingRootTasks === 0) {
        Lr(a, u, y), a.completedRootSegment = null;
        var T = a.responseState.bootstrapChunks;
        for (y = 0; y < T.length - 1; y++) u.push(T[y]);
        y < T.length && u.push(T[y]);
      }
      var M = a.clientRenderedBoundaries, P;
      for (P = 0; P < M.length; P++) {
        var V = M[P];
        T = u;
        var Z = a.responseState, he = V.id, ke = V.errorDigest, Ne = V.errorMessage, it = V.errorComponentStack;
        if (T.push(Z.startInlineScript), Z.sentClientRenderFunction ? T.push('$RX("') : (Z.sentClientRenderFunction = !0, T.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), he === null) throw Error(t(395));
        if (T.push(he), T.push('"'), ke || Ne || it) {
          T.push(",");
          var Jt = Ce(ke || "");
          T.push(Jt);
        }
        if (Ne || it) {
          T.push(",");
          var Qt = Ce(Ne || "");
          T.push(Qt);
        }
        if (it) {
          T.push(",");
          var Pt = Ce(it);
          T.push(Pt);
        }
        if (!T.push(")<\/script>")) {
          a.destination = null, P++, M.splice(0, P);
          return;
        }
      }
      M.splice(0, P);
      var Mr = a.completedBoundaries;
      for (P = 0; P < Mr.length; P++) if (!fn(a, u, Mr[P])) {
        a.destination = null, P++, Mr.splice(0, P);
        return;
      }
      Mr.splice(0, P);
      var xr = a.partialBoundaries;
      for (P = 0; P < xr.length; P++) {
        var gn = xr[P];
        e: {
          M = a, V = u;
          var Fr = gn.completedSegments;
          for (Z = 0; Z < Fr.length; Z++) if (!mn(M, V, gn, Fr[Z])) {
            Z++, Fr.splice(0, Z);
            var Jn = !1;
            break e;
          }
          Fr.splice(0, Z), Jn = !0;
        }
        if (!Jn) {
          a.destination = null, P++, xr.splice(0, P);
          return;
        }
      }
      xr.splice(0, P);
      var _r = a.completedBoundaries;
      for (P = 0; P < _r.length; P++) if (!fn(a, u, _r[P])) {
        a.destination = null, P++, _r.splice(0, P);
        return;
      }
      _r.splice(0, P);
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function Yn(a, u) {
    try {
      var y = a.abortableTasks;
      y.forEach(function(T) {
        return br(T, a, u);
      }), y.clear(), a.destination !== null && Zr(a, a.destination);
    } catch (T) {
      S(a, T), N(a, T);
    }
  }
  function Xn() {
  }
  function hn(a, u, y, T) {
    var M = !1, P = null, V = "", Z = { push: function(ke) {
      return ke !== null && (V += ke), !0;
    }, destroy: function(ke) {
      M = !0, P = ke;
    } }, he = !1;
    if (a = gr(a, $e(y, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Xn, void 0, function() {
      he = !0;
    }), Gn(a), Yn(a, T), a.status === 1) a.status = 2, Z.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = Z;
      try {
        Zr(a, Z);
      } catch (ke) {
        S(a, ke), N(a, ke);
      }
    }
    if (M) throw P;
    if (!he) throw Error(t(426));
    return V;
  }
  return Ur.renderToNodeStream = function() {
    throw Error(t(207));
  }, Ur.renderToStaticMarkup = function(a, u) {
    return hn(a, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ur.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Ur.renderToString = function(a, u) {
    return hn(a, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ur.version = "18.3.1", Ur;
}
var pa = {}, ts;
function ud() {
  if (ts) return pa;
  ts = 1;
  var e = mt;
  function t(o) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, h = 1; h < arguments.length; h++) c += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + o + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function i(o, c) {
    if (c.length !== 0) if (512 < c.length) 0 < n && (o.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), o.enqueue(c);
    else {
      var h = r.length - n;
      h < c.length && (h === 0 ? o.enqueue(r) : (r.set(c.subarray(0, h), n), o.enqueue(r), c = c.subarray(h)), r = new Uint8Array(512), n = 0), r.set(c, n), n += c.length;
    }
  }
  function s(o, c) {
    return i(o, c), !0;
  }
  function p(o) {
    r && 0 < n && (o.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var m = new TextEncoder();
  function g(o) {
    return m.encode(o);
  }
  function f(o) {
    return m.encode(o);
  }
  function k(o, c) {
    typeof o.error == "function" ? o.error(c) : o.close();
  }
  var E = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, O = {};
  function A(o) {
    return E.call(O, o) ? !0 : E.call($, o) ? !1 : _.test(o) ? O[o] = !0 : ($[o] = !0, !1);
  }
  function I(o, c, h, w, L, D, G) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = w, this.attributeNamespace = L, this.mustUseProperty = h, this.propertyName = o, this.type = c, this.sanitizeURL = D, this.removeEmptyString = G;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    F[o] = new I(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var c = o[0];
    F[c] = new I(c, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    F[o] = new I(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    F[o] = new I(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    F[o] = new I(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    F[o] = new I(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    F[o] = new I(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    F[o] = new I(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    F[o] = new I(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var U = /[\-:]([a-z])/g;
  function Y(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var c = o.replace(
      U,
      Y
    );
    F[c] = new I(c, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var c = o.replace(U, Y);
    F[c] = new I(c, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var c = o.replace(U, Y);
    F[c] = new I(c, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    F[o] = new I(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    F[o] = new I(o, 1, !1, o.toLowerCase(), null, !0, !0);
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
  }, v = ["Webkit", "ms", "Moz", "O"];
  Object.keys(z).forEach(function(o) {
    v.forEach(function(c) {
      c = c + o.charAt(0).toUpperCase() + o.substring(1), z[c] = z[o];
    });
  });
  var ie = /["'&<>]/;
  function de(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var c = ie.exec(o);
    if (c) {
      var h = "", w, L = 0;
      for (w = c.index; w < o.length; w++) {
        switch (o.charCodeAt(w)) {
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
        L !== w && (h += o.substring(L, w)), L = w + 1, h += c;
      }
      o = L !== w ? h + o.substring(L, w) : h;
    }
    return o;
  }
  var xe = /([A-Z])/g, Re = /^ms-/, Le = Array.isArray, se = f("<script>"), pe = f("<\/script>"), _e = f('<script src="'), Ae = f('<script type="module" src="'), ve = f('" async=""><\/script>'), Xe = /(<\/|<)(s)(cript)/gi;
  function Oe(o, c, h, w) {
    return "" + c + (h === "s" ? "\\u0073" : "\\u0053") + w;
  }
  function Ce(o, c, h, w, L) {
    o = o === void 0 ? "" : o, c = c === void 0 ? se : f('<script nonce="' + de(c) + '">');
    var D = [];
    if (h !== void 0 && D.push(c, g(("" + h).replace(Xe, Oe)), pe), w !== void 0) for (h = 0; h < w.length; h++) D.push(_e, g(de(w[h])), ve);
    if (L !== void 0) for (w = 0; w < L.length; w++) D.push(Ae, g(de(L[w])), ve);
    return { bootstrapChunks: D, startInlineScript: c, placeholderPrefix: f(o + "P:"), segmentPrefix: f(o + "S:"), boundaryPrefix: o + "B:", idPrefix: o, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function $e(o, c) {
    return { insertionMode: o, selectedValue: c };
  }
  function ze(o) {
    return $e(o === "http://www.w3.org/2000/svg" ? 2 : o === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function le(o, c, h) {
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
    return 4 <= o.insertionMode || o.insertionMode === 0 ? $e(1, null) : o;
  }
  var H = f("<!-- -->");
  function R(o, c, h, w) {
    return c === "" ? w : (w && o.push(H), o.push(g(de(c))), !0);
  }
  var W = /* @__PURE__ */ new Map(), B = f(' style="'), b = f(":"), te = f(";");
  function j(o, c, h) {
    if (typeof h != "object") throw Error(t(62));
    c = !0;
    for (var w in h) if (E.call(h, w)) {
      var L = h[w];
      if (L != null && typeof L != "boolean" && L !== "") {
        if (w.indexOf("--") === 0) {
          var D = g(de(w));
          L = g(de(("" + L).trim()));
        } else {
          D = w;
          var G = W.get(D);
          G !== void 0 || (G = f(de(D.replace(xe, "-$1").toLowerCase().replace(Re, "-ms-"))), W.set(D, G)), D = G, L = typeof L == "number" ? L === 0 || E.call(z, w) ? g("" + L) : g(L + "px") : g(de(("" + L).trim()));
        }
        c ? (c = !1, o.push(B, D, b, L)) : o.push(te, D, b, L);
      }
    }
    c || o.push(re);
  }
  var oe = f(" "), ee = f('="'), re = f('"'), X = f('=""');
  function ce(o, c, h, w) {
    switch (h) {
      case "style":
        j(o, c, w);
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
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (h = g(c.attributeName), c.type) {
          case 3:
            w && o.push(oe, h, X);
            break;
          case 4:
            w === !0 ? o.push(oe, h, X) : w !== !1 && o.push(oe, h, ee, g(de(w)), re);
            break;
          case 5:
            isNaN(w) || o.push(oe, h, ee, g(de(w)), re);
            break;
          case 6:
            !isNaN(w) && 1 <= w && o.push(oe, h, ee, g(de(w)), re);
            break;
          default:
            c.sanitizeURL && (w = "" + w), o.push(oe, h, ee, g(de(w)), re);
        }
      } else if (A(h)) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = h.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        o.push(oe, g(h), ee, g(de(w)), re);
      }
    }
  }
  var fe = f(">"), ae = f("/>");
  function ye(o, c, h) {
    if (c != null) {
      if (h != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && o.push(g("" + c));
    }
  }
  function ne(o) {
    var c = "";
    return e.Children.forEach(o, function(h) {
      h != null && (c += h);
    }), c;
  }
  var me = f(' selected=""');
  function He(o, c, h, w) {
    o.push(we(h));
    var L = h = null, D;
    for (D in c) if (E.call(c, D)) {
      var G = c[D];
      if (G != null) switch (D) {
        case "children":
          h = G;
          break;
        case "dangerouslySetInnerHTML":
          L = G;
          break;
        default:
          ce(o, w, D, G);
      }
    }
    return o.push(fe), ye(o, L, h), typeof h == "string" ? (o.push(g(de(h))), null) : h;
  }
  var be = f(`
`), ft = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Qe = /* @__PURE__ */ new Map();
  function we(o) {
    var c = Qe.get(o);
    if (c === void 0) {
      if (!ft.test(o)) throw Error(t(65, o));
      c = f("<" + o), Qe.set(o, c);
    }
    return c;
  }
  var J = f("<!DOCTYPE html>");
  function ue(o, c, h, w, L) {
    switch (c) {
      case "select":
        o.push(we("select"));
        var D = null, G = null;
        for (Ie in h) if (E.call(h, Ie)) {
          var K = h[Ie];
          if (K != null) switch (Ie) {
            case "children":
              D = K;
              break;
            case "dangerouslySetInnerHTML":
              G = K;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ce(o, w, Ie, K);
          }
        }
        return o.push(fe), ye(o, G, D), D;
      case "option":
        G = L.selectedValue, o.push(we("option"));
        var ge = K = null, De = null, Ie = null;
        for (D in h) if (E.call(h, D)) {
          var rt = h[D];
          if (rt != null) switch (D) {
            case "children":
              K = rt;
              break;
            case "selected":
              De = rt;
              break;
            case "dangerouslySetInnerHTML":
              Ie = rt;
              break;
            case "value":
              ge = rt;
            default:
              ce(o, w, D, rt);
          }
        }
        if (G != null) if (h = ge !== null ? "" + ge : ne(K), Le(G)) {
          for (w = 0; w < G.length; w++)
            if ("" + G[w] === h) {
              o.push(me);
              break;
            }
        } else "" + G === h && o.push(me);
        else De && o.push(me);
        return o.push(fe), ye(o, Ie, K), K;
      case "textarea":
        o.push(we("textarea")), Ie = G = D = null;
        for (K in h) if (E.call(h, K) && (ge = h[K], ge != null)) switch (K) {
          case "children":
            Ie = ge;
            break;
          case "value":
            D = ge;
            break;
          case "defaultValue":
            G = ge;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ce(o, w, K, ge);
        }
        if (D === null && G !== null && (D = G), o.push(fe), Ie != null) {
          if (D != null) throw Error(t(92));
          if (Le(Ie) && 1 < Ie.length) throw Error(t(93));
          D = "" + Ie;
        }
        return typeof D == "string" && D[0] === `
` && o.push(be), D !== null && o.push(g(de("" + D))), null;
      case "input":
        o.push(we("input")), ge = Ie = K = D = null;
        for (G in h) if (E.call(h, G) && (De = h[G], De != null)) switch (G) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ge = De;
            break;
          case "defaultValue":
            K = De;
            break;
          case "checked":
            Ie = De;
            break;
          case "value":
            D = De;
            break;
          default:
            ce(o, w, G, De);
        }
        return Ie !== null ? ce(
          o,
          w,
          "checked",
          Ie
        ) : ge !== null && ce(o, w, "checked", ge), D !== null ? ce(o, w, "value", D) : K !== null && ce(o, w, "value", K), o.push(ae), null;
      case "menuitem":
        o.push(we("menuitem"));
        for (var Lt in h) if (E.call(h, Lt) && (D = h[Lt], D != null)) switch (Lt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ce(o, w, Lt, D);
        }
        return o.push(fe), null;
      case "title":
        o.push(we("title")), D = null;
        for (rt in h) if (E.call(h, rt) && (G = h[rt], G != null)) switch (rt) {
          case "children":
            D = G;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ce(o, w, rt, G);
        }
        return o.push(fe), D;
      case "listing":
      case "pre":
        o.push(we(c)), G = D = null;
        for (ge in h) if (E.call(h, ge) && (K = h[ge], K != null)) switch (ge) {
          case "children":
            D = K;
            break;
          case "dangerouslySetInnerHTML":
            G = K;
            break;
          default:
            ce(o, w, ge, K);
        }
        if (o.push(fe), G != null) {
          if (D != null) throw Error(t(60));
          if (typeof G != "object" || !("__html" in G)) throw Error(t(61));
          h = G.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? o.push(be, g(h)) : o.push(g("" + h)));
        }
        return typeof D == "string" && D[0] === `
` && o.push(be), D;
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
        o.push(we(c));
        for (var Kt in h) if (E.call(h, Kt) && (D = h[Kt], D != null)) switch (Kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            ce(o, w, Kt, D);
        }
        return o.push(ae), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return He(o, h, c, w);
      case "html":
        return L.insertionMode === 0 && o.push(J), He(o, h, c, w);
      default:
        if (c.indexOf("-") === -1 && typeof h.is != "string") return He(o, h, c, w);
        o.push(we(c)), G = D = null;
        for (De in h) if (E.call(h, De) && (K = h[De], K != null)) switch (De) {
          case "children":
            D = K;
            break;
          case "dangerouslySetInnerHTML":
            G = K;
            break;
          case "style":
            j(o, w, K);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            A(De) && typeof K != "function" && typeof K != "symbol" && o.push(oe, g(De), ee, g(de(K)), re);
        }
        return o.push(fe), ye(o, G, D), D;
    }
  }
  var Ke = f("</"), gt = f(">"), qe = f('<template id="'), ar = f('"></template>'), Mt = f("<!--$-->"), pr = f('<!--$?--><template id="'), wt = f('"></template>'), bt = f("<!--$!-->"), st = f("<!--/$-->"), yt = f("<template"), Bt = f('"'), Wt = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var Pr = f("></template>");
  function ct(o, c, h) {
    if (i(o, pr), h === null) throw Error(t(395));
    return i(o, h), s(o, wt);
  }
  var St = f('<div hidden id="'), ir = f('">'), Pe = f("</div>"), Ht = f('<svg aria-hidden="true" style="display:none" id="'), or = f('">'), Te = f("</svg>"), nt = f('<math aria-hidden="true" style="display:none" id="'), sr = f('">'), kt = f("</math>"), Ft = f('<table hidden id="'), Vt = f('">'), Gt = f("</table>"), Ar = f('<table hidden><tbody id="'), lt = f('">'), Nt = f("</tbody></table>"), fr = f('<table hidden><tr id="'), mr = f('">'), Rt = f("</tr></table>"), lr = f('<table hidden><colgroup id="'), Ze = f('">'), Yt = f("</colgroup></table>");
  function hr(o, c, h, w) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return i(o, St), i(o, c.segmentPrefix), i(o, g(w.toString(16))), s(o, ir);
      case 2:
        return i(o, Ht), i(o, c.segmentPrefix), i(o, g(w.toString(16))), s(o, or);
      case 3:
        return i(o, nt), i(o, c.segmentPrefix), i(o, g(w.toString(16))), s(o, sr);
      case 4:
        return i(o, Ft), i(o, c.segmentPrefix), i(o, g(w.toString(16))), s(o, Vt);
      case 5:
        return i(o, Ar), i(o, c.segmentPrefix), i(o, g(w.toString(16))), s(o, lt);
      case 6:
        return i(o, fr), i(o, c.segmentPrefix), i(o, g(w.toString(16))), s(o, mr);
      case 7:
        return i(
          o,
          lr
        ), i(o, c.segmentPrefix), i(o, g(w.toString(16))), s(o, Ze);
      default:
        throw Error(t(397));
    }
  }
  function It(o, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(o, Pe);
      case 2:
        return s(o, Te);
      case 3:
        return s(o, kt);
      case 4:
        return s(o, Gt);
      case 5:
        return s(o, Nt);
      case 6:
        return s(o, Rt);
      case 7:
        return s(o, Yt);
      default:
        throw Error(t(397));
    }
  }
  var gr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), yr = f('$RS("'), x = f('","'), S = f('")<\/script>'), N = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Q = f('$RC("'), Se = f('","'), je = f('")<\/script>'), Ue = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ee = f('$RX("'), et = f('"'), Je = f(")<\/script>"), at = f(","), br = /[<\u2028\u2029]/g;
  function Xt(o) {
    return JSON.stringify(o).replace(br, function(c) {
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
  var Er = Object.assign, Gn = Symbol.for("react.element"), Dr = Symbol.for("react.portal"), Lr = Symbol.for("react.fragment"), pn = Symbol.for("react.strict_mode"), fn = Symbol.for("react.profiler"), mn = Symbol.for("react.provider"), Zr = Symbol.for("react.context"), Yn = Symbol.for("react.forward_ref"), Xn = Symbol.for("react.suspense"), hn = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), y = Symbol.for("react.scope"), T = Symbol.for("react.debug_trace_mode"), M = Symbol.for("react.legacy_hidden"), P = Symbol.for("react.default_value"), V = Symbol.iterator;
  function Z(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case Lr:
        return "Fragment";
      case Dr:
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
    if (typeof o == "object") switch (o.$$typeof) {
      case Zr:
        return (o.displayName || "Context") + ".Consumer";
      case mn:
        return (o._context.displayName || "Context") + ".Provider";
      case Yn:
        var c = o.render;
        return o = o.displayName, o || (o = c.displayName || c.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case a:
        return c = o.displayName || null, c !== null ? c : Z(o.type) || "Memo";
      case u:
        c = o._payload, o = o._init;
        try {
          return Z(o(c));
        } catch {
        }
    }
    return null;
  }
  var he = {};
  function ke(o, c) {
    if (o = o.contextTypes, !o) return he;
    var h = {}, w;
    for (w in o) h[w] = c[w];
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
  function Jt(o) {
    o.context._currentValue = o.parentValue, o = o.parent, o !== null && Jt(o);
  }
  function Qt(o) {
    var c = o.parent;
    c !== null && Qt(c), o.context._currentValue = o.value;
  }
  function Pt(o, c) {
    if (o.context._currentValue = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === c.depth ? it(o, c) : Pt(o, c);
  }
  function Mr(o, c) {
    var h = c.parent;
    if (h === null) throw Error(t(402));
    o.depth === h.depth ? it(o, h) : Mr(o, h), c.context._currentValue = c.value;
  }
  function xr(o) {
    var c = Ne;
    c !== o && (c === null ? Qt(o) : o === null ? Jt(c) : c.depth === o.depth ? it(c, o) : c.depth > o.depth ? Pt(c, o) : Mr(c, o), Ne = o);
  }
  var gn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, c) {
    o = o._reactInternals, o.queue !== null && o.queue.push(c);
  }, enqueueReplaceState: function(o, c) {
    o = o._reactInternals, o.replace = !0, o.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Fr(o, c, h, w) {
    var L = o.state !== void 0 ? o.state : null;
    o.updater = gn, o.props = h, o.state = L;
    var D = { queue: [], replace: !1 };
    o._reactInternals = D;
    var G = c.contextType;
    if (o.context = typeof G == "object" && G !== null ? G._currentValue : w, G = c.getDerivedStateFromProps, typeof G == "function" && (G = G(h, L), L = G == null ? L : Er({}, L, G), o.state = L), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (c = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), c !== o.state && gn.enqueueReplaceState(o, o.state, null), D.queue !== null && 0 < D.queue.length) if (c = D.queue, G = D.replace, D.queue = null, D.replace = !1, G && c.length === 1) o.state = c[0];
    else {
      for (D = G ? c[0] : o.state, L = !0, G = G ? 1 : 0; G < c.length; G++) {
        var K = c[G];
        K = typeof K == "function" ? K.call(o, D, h, w) : K, K != null && (L ? (L = !1, D = Er({}, D, K)) : Er(D, K));
      }
      o.state = D;
    }
    else D.queue = null;
  }
  var Jn = { id: 1, overflow: "" };
  function _r(o, c, h) {
    var w = o.id;
    o = o.overflow;
    var L = 32 - Qn(w) - 1;
    w &= ~(1 << L), h += 1;
    var D = 32 - Qn(c) + L;
    if (30 < D) {
      var G = L - L % 5;
      return D = (w & (1 << G) - 1).toString(32), w >>= G, L -= G, { id: 1 << 32 - Qn(c) + L | h << L | w, overflow: D + o };
    }
    return { id: 1 << D | h << L | w, overflow: o };
  }
  var Qn = Math.clz32 ? Math.clz32 : gu, mu = Math.log, hu = Math.LN2;
  function gu(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (mu(o) / hu | 0) | 0;
  }
  function yu(o, c) {
    return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
  }
  var bu = typeof Object.is == "function" ? Object.is : yu, vr = null, za = null, Kn = null, tt = null, yn = !1, Zn = !1, bn = 0, Or = null, ea = 0;
  function $r() {
    if (vr === null) throw Error(t(321));
    return vr;
  }
  function vo() {
    if (0 < ea) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function qa() {
    return tt === null ? Kn === null ? (yn = !1, Kn = tt = vo()) : (yn = !0, tt = Kn) : tt.next === null ? (yn = !1, tt = tt.next = vo()) : (yn = !0, tt = tt.next), tt;
  }
  function Ba() {
    za = vr = null, Zn = !1, Kn = null, ea = 0, tt = Or = null;
  }
  function wo(o, c) {
    return typeof c == "function" ? c(o) : c;
  }
  function So(o, c, h) {
    if (vr = $r(), tt = qa(), yn) {
      var w = tt.queue;
      if (c = w.dispatch, Or !== null && (h = Or.get(w), h !== void 0)) {
        Or.delete(w), w = tt.memoizedState;
        do
          w = o(w, h.action), h = h.next;
        while (h !== null);
        return tt.memoizedState = w, [w, c];
      }
      return [tt.memoizedState, c];
    }
    return o = o === wo ? typeof c == "function" ? c() : c : h !== void 0 ? h(c) : c, tt.memoizedState = o, o = tt.queue = { last: null, dispatch: null }, o = o.dispatch = xu.bind(null, vr, o), [tt.memoizedState, o];
  }
  function ko(o, c) {
    if (vr = $r(), tt = qa(), c = c === void 0 ? null : c, tt !== null) {
      var h = tt.memoizedState;
      if (h !== null && c !== null) {
        var w = h[1];
        e: if (w === null) w = !1;
        else {
          for (var L = 0; L < w.length && L < c.length; L++) if (!bu(c[L], w[L])) {
            w = !1;
            break e;
          }
          w = !0;
        }
        if (w) return h[0];
      }
    }
    return o = o(), tt.memoizedState = [o, c], o;
  }
  function xu(o, c, h) {
    if (25 <= ea) throw Error(t(301));
    if (o === vr) if (Zn = !0, o = { action: h, next: null }, Or === null && (Or = /* @__PURE__ */ new Map()), h = Or.get(c), h === void 0) Or.set(c, o);
    else {
      for (c = h; c.next !== null; ) c = c.next;
      c.next = o;
    }
  }
  function vu() {
    throw Error(t(394));
  }
  function ta() {
  }
  var To = { readContext: function(o) {
    return o._currentValue;
  }, useContext: function(o) {
    return $r(), o._currentValue;
  }, useMemo: ko, useReducer: So, useRef: function(o) {
    vr = $r(), tt = qa();
    var c = tt.memoizedState;
    return c === null ? (o = { current: o }, tt.memoizedState = o) : c;
  }, useState: function(o) {
    return So(wo, o);
  }, useInsertionEffect: ta, useLayoutEffect: function() {
  }, useCallback: function(o, c) {
    return ko(function() {
      return o;
    }, c);
  }, useImperativeHandle: ta, useEffect: ta, useDebugValue: ta, useDeferredValue: function(o) {
    return $r(), o;
  }, useTransition: function() {
    return $r(), [!1, vu];
  }, useId: function() {
    var o = za.treeContext, c = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Qn(o) - 1)).toString(32) + c;
    var h = ra;
    if (h === null) throw Error(t(404));
    return c = bn++, o = ":" + h.idPrefix + "R" + o, 0 < c && (o += "H" + c.toString(32)), o + ":";
  }, useMutableSource: function(o, c) {
    return $r(), c(o._source);
  }, useSyncExternalStore: function(o, c, h) {
    if (h === void 0) throw Error(t(407));
    return h();
  } }, ra = null, Wa = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function wu(o) {
    return console.error(o), null;
  }
  function xn() {
  }
  function Su(o, c, h, w, L, D, G, K, ge) {
    var De = [], Ie = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: w === void 0 ? 12800 : w, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ie, pingedTasks: De, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? wu : L, onAllReady: D === void 0 ? xn : D, onShellReady: G === void 0 ? xn : G, onShellError: K === void 0 ? xn : K, onFatalError: ge === void 0 ? xn : ge }, h = na(c, 0, null, h, !1, !1), h.parentFlushed = !0, o = Ha(c, o, null, h, Ie, he, null, Jn), De.push(o), c;
  }
  function Ha(o, c, h, w, L, D, G, K) {
    o.allPendingTasks++, h === null ? o.pendingRootTasks++ : h.pendingTasks++;
    var ge = { node: c, ping: function() {
      var De = o.pingedTasks;
      De.push(ge), De.length === 1 && No(o);
    }, blockedBoundary: h, blockedSegment: w, abortSet: L, legacyContext: D, context: G, treeContext: K };
    return L.add(ge), ge;
  }
  function na(o, c, h, w, L, D) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: w, boundary: h, lastPushedText: L, textEmbedded: D };
  }
  function vn(o, c) {
    if (o = o.onError(c), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function aa(o, c) {
    var h = o.onShellError;
    h(c), h = o.onFatalError, h(c), o.destination !== null ? (o.status = 2, k(o.destination, c)) : (o.status = 1, o.fatalError = c);
  }
  function Co(o, c, h, w, L) {
    for (vr = {}, za = c, bn = 0, o = h(w, L); Zn; ) Zn = !1, bn = 0, ea += 1, tt = null, o = h(w, L);
    return Ba(), o;
  }
  function Ao(o, c, h, w) {
    var L = h.render(), D = w.childContextTypes;
    if (D != null) {
      var G = c.legacyContext;
      if (typeof h.getChildContext != "function") w = G;
      else {
        h = h.getChildContext();
        for (var K in h) if (!(K in D)) throw Error(t(108, Z(w) || "Unknown", K));
        w = Er({}, G, h);
      }
      c.legacyContext = w, Dt(o, c, L), c.legacyContext = G;
    } else Dt(o, c, L);
  }
  function Eo(o, c) {
    if (o && o.defaultProps) {
      c = Er({}, c), o = o.defaultProps;
      for (var h in o) c[h] === void 0 && (c[h] = o[h]);
      return c;
    }
    return c;
  }
  function Va(o, c, h, w, L) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      L = ke(h, c.legacyContext);
      var D = h.contextType;
      D = new h(w, typeof D == "object" && D !== null ? D._currentValue : L), Fr(D, h, w, L), Ao(o, c, D, h);
    } else {
      D = ke(h, c.legacyContext), L = Co(o, c, h, w, D);
      var G = bn !== 0;
      if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0) Fr(L, h, w, D), Ao(o, c, L, h);
      else if (G) {
        w = c.treeContext, c.treeContext = _r(w, 1, 0);
        try {
          Dt(o, c, L);
        } finally {
          c.treeContext = w;
        }
      } else Dt(o, c, L);
    }
    else if (typeof h == "string") {
      switch (L = c.blockedSegment, D = ue(L.chunks, h, w, o.responseState, L.formatContext), L.lastPushedText = !1, G = L.formatContext, L.formatContext = le(G, h, w), Ga(o, c, D), L.formatContext = G, h) {
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
          L.chunks.push(Ke, g(h), gt);
      }
      L.lastPushedText = !1;
    } else {
      switch (h) {
        case M:
        case T:
        case pn:
        case fn:
        case Lr:
          Dt(o, c, w.children);
          return;
        case hn:
          Dt(o, c, w.children);
          return;
        case y:
          throw Error(t(343));
        case Xn:
          e: {
            h = c.blockedBoundary, L = c.blockedSegment, D = w.fallback, w = w.children, G = /* @__PURE__ */ new Set();
            var K = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: G, errorDigest: null }, ge = na(o, L.chunks.length, K, L.formatContext, !1, !1);
            L.children.push(ge), L.lastPushedText = !1;
            var De = na(o, 0, null, L.formatContext, !1, !1);
            De.parentFlushed = !0, c.blockedBoundary = K, c.blockedSegment = De;
            try {
              if (Ga(
                o,
                c,
                w
              ), De.lastPushedText && De.textEmbedded && De.chunks.push(H), De.status = 1, ia(K, De), K.pendingTasks === 0) break e;
            } catch (Ie) {
              De.status = 4, K.forceClientRender = !0, K.errorDigest = vn(o, Ie);
            } finally {
              c.blockedBoundary = h, c.blockedSegment = L;
            }
            c = Ha(o, D, h, ge, G, c.legacyContext, c.context, c.treeContext), o.pingedTasks.push(c);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case Yn:
          if (w = Co(o, c, h.render, w, L), bn !== 0) {
            h = c.treeContext, c.treeContext = _r(h, 1, 0);
            try {
              Dt(o, c, w);
            } finally {
              c.treeContext = h;
            }
          } else Dt(o, c, w);
          return;
        case a:
          h = h.type, w = Eo(h, w), Va(o, c, h, w, L);
          return;
        case mn:
          if (L = w.children, h = h._context, w = w.value, D = h._currentValue, h._currentValue = w, G = Ne, Ne = w = { parent: G, depth: G === null ? 0 : G.depth + 1, context: h, parentValue: D, value: w }, c.context = w, Dt(o, c, L), o = Ne, o === null) throw Error(t(403));
          w = o.parentValue, o.context._currentValue = w === P ? o.context._defaultValue : w, o = Ne = o.parent, c.context = o;
          return;
        case Zr:
          w = w.children, w = w(h._currentValue), Dt(o, c, w);
          return;
        case u:
          L = h._init, h = L(h._payload), w = Eo(h, w), Va(o, c, h, w, void 0);
          return;
      }
      throw Error(t(
        130,
        h == null ? h : typeof h,
        ""
      ));
    }
  }
  function Dt(o, c, h) {
    if (c.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Gn:
          Va(o, c, h.type, h.props, h.ref);
          return;
        case Dr:
          throw Error(t(257));
        case u:
          var w = h._init;
          h = w(h._payload), Dt(o, c, h);
          return;
      }
      if (Le(h)) {
        _o(o, c, h);
        return;
      }
      if (h === null || typeof h != "object" ? w = null : (w = V && h[V] || h["@@iterator"], w = typeof w == "function" ? w : null), w && (w = w.call(h))) {
        if (h = w.next(), !h.done) {
          var L = [];
          do
            L.push(h.value), h = w.next();
          while (!h.done);
          _o(o, c, L);
        }
        return;
      }
      throw o = Object.prototype.toString.call(h), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : o));
    }
    typeof h == "string" ? (w = c.blockedSegment, w.lastPushedText = R(c.blockedSegment.chunks, h, o.responseState, w.lastPushedText)) : typeof h == "number" && (w = c.blockedSegment, w.lastPushedText = R(c.blockedSegment.chunks, "" + h, o.responseState, w.lastPushedText));
  }
  function _o(o, c, h) {
    for (var w = h.length, L = 0; L < w; L++) {
      var D = c.treeContext;
      c.treeContext = _r(D, w, L);
      try {
        Ga(o, c, h[L]);
      } finally {
        c.treeContext = D;
      }
    }
  }
  function Ga(o, c, h) {
    var w = c.blockedSegment.formatContext, L = c.legacyContext, D = c.context;
    try {
      return Dt(o, c, h);
    } catch (ge) {
      if (Ba(), typeof ge == "object" && ge !== null && typeof ge.then == "function") {
        h = ge;
        var G = c.blockedSegment, K = na(o, G.chunks.length, null, G.formatContext, G.lastPushedText, !0);
        G.children.push(K), G.lastPushedText = !1, o = Ha(o, c.node, c.blockedBoundary, K, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, h.then(o, o), c.blockedSegment.formatContext = w, c.legacyContext = L, c.context = D, xr(D);
      } else throw c.blockedSegment.formatContext = w, c.legacyContext = L, c.context = D, xr(D), ge;
    }
  }
  function ku(o) {
    var c = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, jo(this, c, o);
  }
  function Oo(o, c, h) {
    var w = o.blockedBoundary;
    o.blockedSegment.status = 3, w === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (w.pendingTasks--, w.forceClientRender || (w.forceClientRender = !0, o = h === void 0 ? Error(t(432)) : h, w.errorDigest = c.onError(o), w.parentFlushed && c.clientRenderedBoundaries.push(w)), w.fallbackAbortableTasks.forEach(function(L) {
      return Oo(L, c, h);
    }), w.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (w = c.onAllReady, w()));
  }
  function ia(o, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var h = c.children[0];
      h.id = c.id, h.parentFlushed = !0, h.status === 1 && ia(o, h);
    } else o.completedSegments.push(c);
  }
  function jo(o, c, h) {
    if (c === null) {
      if (h.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = h;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = xn, c = o.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && ia(c, h), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(ku, o), c.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (ia(c, h), c.completedSegments.length === 1 && c.parentFlushed && o.partialBoundaries.push(c)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function No(o) {
    if (o.status !== 2) {
      var c = Ne, h = Wa.current;
      Wa.current = To;
      var w = ra;
      ra = o.responseState;
      try {
        var L = o.pingedTasks, D;
        for (D = 0; D < L.length; D++) {
          var G = L[D], K = o, ge = G.blockedSegment;
          if (ge.status === 0) {
            xr(G.context);
            try {
              Dt(K, G, G.node), ge.lastPushedText && ge.textEmbedded && ge.chunks.push(H), G.abortSet.delete(G), ge.status = 1, jo(K, G.blockedBoundary, ge);
            } catch (Zt) {
              if (Ba(), typeof Zt == "object" && Zt !== null && typeof Zt.then == "function") {
                var De = G.ping;
                Zt.then(De, De);
              } else {
                G.abortSet.delete(G), ge.status = 4;
                var Ie = G.blockedBoundary, rt = Zt, Lt = vn(K, rt);
                if (Ie === null ? aa(K, rt) : (Ie.pendingTasks--, Ie.forceClientRender || (Ie.forceClientRender = !0, Ie.errorDigest = Lt, Ie.parentFlushed && K.clientRenderedBoundaries.push(Ie))), K.allPendingTasks--, K.allPendingTasks === 0) {
                  var Kt = K.onAllReady;
                  Kt();
                }
              }
            } finally {
            }
          }
        }
        L.splice(0, D), o.destination !== null && Ya(o, o.destination);
      } catch (Zt) {
        vn(o, Zt), aa(o, Zt);
      } finally {
        ra = w, Wa.current = h, h === To && xr(c);
      }
    }
  }
  function oa(o, c, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var w = h.id = o.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, o = o.responseState, i(c, qe), i(c, o.placeholderPrefix), o = g(w.toString(16)), i(c, o), s(c, ar);
      case 1:
        h.status = 2;
        var L = !0;
        w = h.chunks;
        var D = 0;
        h = h.children;
        for (var G = 0; G < h.length; G++) {
          for (L = h[G]; D < L.index; D++) i(c, w[D]);
          L = sa(o, c, L);
        }
        for (; D < w.length - 1; D++) i(c, w[D]);
        return D < w.length && (L = s(c, w[D])), L;
      default:
        throw Error(t(390));
    }
  }
  function sa(o, c, h) {
    var w = h.boundary;
    if (w === null) return oa(o, c, h);
    if (w.parentFlushed = !0, w.forceClientRender) w = w.errorDigest, s(c, bt), i(c, yt), w && (i(c, Wt), i(c, g(de(w))), i(c, Bt)), s(c, Pr), oa(o, c, h);
    else if (0 < w.pendingTasks) {
      w.rootSegmentID = o.nextSegmentId++, 0 < w.completedSegments.length && o.partialBoundaries.push(w);
      var L = o.responseState, D = L.nextSuspenseID++;
      L = f(L.boundaryPrefix + D.toString(16)), w = w.id = L, ct(c, o.responseState, w), oa(o, c, h);
    } else if (w.byteSize > o.progressiveChunkSize) w.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(w), ct(c, o.responseState, w.id), oa(o, c, h);
    else {
      if (s(c, Mt), h = w.completedSegments, h.length !== 1) throw Error(t(391));
      sa(o, c, h[0]);
    }
    return s(c, st);
  }
  function Ro(o, c, h) {
    return hr(c, o.responseState, h.formatContext, h.id), sa(o, c, h), It(c, h.formatContext);
  }
  function Io(o, c, h) {
    for (var w = h.completedSegments, L = 0; L < w.length; L++) Po(o, c, h, w[L]);
    if (w.length = 0, o = o.responseState, w = h.id, h = h.rootSegmentID, i(c, o.startInlineScript), o.sentCompleteBoundaryFunction ? i(c, Q) : (o.sentCompleteBoundaryFunction = !0, i(c, N)), w === null) throw Error(t(395));
    return h = g(h.toString(16)), i(c, w), i(c, Se), i(c, o.segmentPrefix), i(c, h), s(c, je);
  }
  function Po(o, c, h, w) {
    if (w.status === 2) return !0;
    var L = w.id;
    if (L === -1) {
      if ((w.id = h.rootSegmentID) === -1) throw Error(t(392));
      return Ro(o, c, w);
    }
    return Ro(o, c, w), o = o.responseState, i(c, o.startInlineScript), o.sentCompleteSegmentFunction ? i(c, yr) : (o.sentCompleteSegmentFunction = !0, i(c, gr)), i(c, o.segmentPrefix), L = g(L.toString(16)), i(c, L), i(c, x), i(c, o.placeholderPrefix), i(c, L), s(c, S);
  }
  function Ya(o, c) {
    r = new Uint8Array(512), n = 0;
    try {
      var h = o.completedRootSegment;
      if (h !== null && o.pendingRootTasks === 0) {
        sa(o, c, h), o.completedRootSegment = null;
        var w = o.responseState.bootstrapChunks;
        for (h = 0; h < w.length - 1; h++) i(c, w[h]);
        h < w.length && s(c, w[h]);
      }
      var L = o.clientRenderedBoundaries, D;
      for (D = 0; D < L.length; D++) {
        var G = L[D];
        w = c;
        var K = o.responseState, ge = G.id, De = G.errorDigest, Ie = G.errorMessage, rt = G.errorComponentStack;
        if (i(w, K.startInlineScript), K.sentClientRenderFunction ? i(w, Ee) : (K.sentClientRenderFunction = !0, i(
          w,
          Ue
        )), ge === null) throw Error(t(395));
        i(w, ge), i(w, et), (De || Ie || rt) && (i(w, at), i(w, g(Xt(De || "")))), (Ie || rt) && (i(w, at), i(w, g(Xt(Ie || "")))), rt && (i(w, at), i(w, g(Xt(rt)))), s(w, Je);
      }
      L.splice(0, D);
      var Lt = o.completedBoundaries;
      for (D = 0; D < Lt.length; D++) Io(o, c, Lt[D]);
      Lt.splice(0, D), p(c), r = new Uint8Array(512), n = 0;
      var Kt = o.partialBoundaries;
      for (D = 0; D < Kt.length; D++) {
        var Zt = Kt[D];
        e: {
          L = o, G = c;
          var la = Zt.completedSegments;
          for (K = 0; K < la.length; K++) if (!Po(
            L,
            G,
            Zt,
            la[K]
          )) {
            K++, la.splice(0, K);
            var Lo = !1;
            break e;
          }
          la.splice(0, K), Lo = !0;
        }
        if (!Lo) {
          o.destination = null, D++, Kt.splice(0, D);
          return;
        }
      }
      Kt.splice(0, D);
      var Xa = o.completedBoundaries;
      for (D = 0; D < Xa.length; D++) Io(o, c, Xa[D]);
      Xa.splice(0, D);
    } finally {
      p(c), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && c.close();
    }
  }
  function Do(o, c) {
    try {
      var h = o.abortableTasks;
      h.forEach(function(w) {
        return Oo(w, o, c);
      }), h.clear(), o.destination !== null && Ya(o, o.destination);
    } catch (w) {
      vn(o, w), aa(o, w);
    }
  }
  return pa.renderToReadableStream = function(o, c) {
    return new Promise(function(h, w) {
      var L, D, G = new Promise(function(Ie, rt) {
        D = Ie, L = rt;
      }), K = Su(o, Ce(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), ze(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, D, function() {
        var Ie = new ReadableStream({ type: "bytes", pull: function(rt) {
          if (K.status === 1) K.status = 2, k(rt, K.fatalError);
          else if (K.status !== 2 && K.destination === null) {
            K.destination = rt;
            try {
              Ya(K, rt);
            } catch (Lt) {
              vn(K, Lt), aa(K, Lt);
            }
          }
        }, cancel: function() {
          Do(K);
        } }, { highWaterMark: 0 });
        Ie.allReady = G, h(Ie);
      }, function(Ie) {
        G.catch(function() {
        }), w(Ie);
      }, L);
      if (c && c.signal) {
        var ge = c.signal, De = function() {
          Do(K, ge.reason), ge.removeEventListener("abort", De);
        };
        ge.addEventListener("abort", De);
      }
      No(K);
    });
  }, pa.version = "18.3.1", pa;
}
var cn, yl;
cn = cd(), yl = ud();
cn.version;
cn.renderToString;
cn.renderToStaticMarkup;
cn.renderToNodeStream;
cn.renderToStaticNodeStream;
yl.renderToReadableStream;
const dd = "staticMarkup";
function Xi() {
  const e = el().indexOf(dd) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const Ir = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Xi(), { onClick: i, ...s } = r.props;
  if (n)
    return mt.cloneElement(r, {
      ...s,
      onClick: (g) => (e && e.event && e.action && fl(e), i ? i(g) : !0)
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
    onClick: i,
    ...m
  });
}, bl = Hi(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: n,
    onClick: i,
    gaData: s
  }, p) => {
    var m, g, f, k, E, _;
    const $ = e === n, O = $ ? "open" : "close";
    return /* @__PURE__ */ q.jsxs(
      "div",
      {
        ref: p,
        className: ot("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (m = r.content) == null ? void 0 : m.icon
        }),
        children: [
          /* @__PURE__ */ q.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ q.jsx("h4", { children: /* @__PURE__ */ q.jsx(
            Ir,
            {
              gaData: {
                ...s,
                action: O,
                text: r.content.header
              },
              children: /* @__PURE__ */ q.jsxs(
                "button",
                {
                  "data-testid": "accordion-opener",
                  className: ot({ collapsed: !$ }),
                  "data-bs-toggle": "collapse",
                  href: `#card-body-${e}`,
                  type: "button",
                  "aria-expanded": $,
                  "aria-controls": `card-body-${e}`,
                  onClick: (A) => i(A, e),
                  children: [
                    (g = r.content) != null && g.icon ? /* @__PURE__ */ q.jsxs("span", { className: "accordion-icon", children: [
                      /* @__PURE__ */ q.jsx(
                        "i",
                        {
                          className: `${(f = r.content.icon) == null ? void 0 : f[0]} fa-${(k = r.content.icon) == null ? void 0 : k[1]} me-2`
                        }
                      ),
                      r.content.header
                    ] }) : (E = r.content) == null ? void 0 : E.header,
                    /* @__PURE__ */ q.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              )
            }
          ) }) }),
          ((_ = r.content) == null ? void 0 : _.body) && /* @__PURE__ */ q.jsx(
            "div",
            {
              "data-bs-parent": `#${t}`,
              id: `card-body-${e}`,
              className: ot("collapse", { show: $ }),
              children: /* @__PURE__ */ q.jsx(
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
bl.propTypes = {
  id: l.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: gl,
  parentId: l.string,
  openCard: l.number,
  onClick: l.func,
  gaData: l.object
};
const pd = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, Ji = ({ cards: e, openedCard: t }) => {
  const [r, n] = ut(t), i = `accordion-${el()}`, s = Xr(
    /** @type { HTMLDivElement[]} */
    []
  ), p = (m, g) => {
    if (m.preventDefault(), r !== g) {
      const f = s.current[r - 1], k = f == null ? void 0 : f.lastElementChild;
      od(k), n(g);
    } else
      n(null);
  };
  return /* @__PURE__ */ q.jsx("div", { className: "accordion", id: i, children: e == null ? void 0 : e.map(
    (m, g) => m.content.body && m.content.header && /* @__PURE__ */ q.jsx(
      bl,
      {
        ref: (f) => {
          s.current[g] = f;
        },
        id: g + 1,
        parentId: i,
        item: m,
        openCard: r,
        onClick: p,
        gaData: pd
      },
      g + 1
    )
  ) });
};
Ji.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: l.arrayOf(gl).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: l.number
};
const rs = {
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
  block: i,
  color: s = "gray",
  disabled: p,
  element: m = "button",
  href: g,
  icon: f,
  innerRef: k,
  onClick: E,
  size: _ = "default",
  variant: $,
  classes: O,
  target: A = "_self",
  ...I
}) => {
  if ($) {
    const Y = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, z = ot("btn", Y[$], {
      [`btn-${Y[$]}-${s}`]: !0,
      "btn-medium": _ === "medium",
      "btn-small": _ === "small",
      "btn-large": _ === "large" || _ === "default",
      disabled: p
    });
    let v = m;
    return g && m === "button" && (v = "a"), /* @__PURE__ */ q.jsx(
      Ir,
      {
        gaData: {
          ...rs,
          section: t,
          ...r,
          text: e
        },
        children: /* @__PURE__ */ q.jsxs(
          v,
          {
            type: v === "button" && E ? "button" : void 0,
            ...I,
            className: ot(O) || z,
            href: g,
            ref: k,
            onClick: E,
            "aria-label": n,
            target: v === "a" ? A : null,
            disabled: p,
            children: [
              f && /* @__PURE__ */ q.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
              e
            ]
          }
        )
      }
    );
  }
  const F = ot("btn", {
    [`btn-${s}`]: !0,
    "btn-md": _ === "small",
    "btn-sm": _ === "xsmall",
    "btn-block": i,
    disabled: p
  });
  let U = m;
  return g && m === "button" && (U = "a"), /* @__PURE__ */ q.jsx(
    Ir,
    {
      gaData: {
        ...rs,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ q.jsxs(
        U,
        {
          type: U === "button" && E ? "button" : void 0,
          ...I,
          className: ot(O) || F,
          href: g,
          ref: k,
          onClick: E,
          "aria-label": n,
          target: U === "a" ? A : null,
          children: [
            f && /* @__PURE__ */ q.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
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
  gaData: Yi,
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
var xl = { exports: {} }, Ve = {}, ns;
function fd() {
  if (ns) return Ve;
  ns = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), $ = Symbol.for("react.client.reference");
  function O(A) {
    if (typeof A == "object" && A !== null) {
      var I = A.$$typeof;
      switch (I) {
        case e:
          switch (A = A.type, A) {
            case r:
            case i:
            case n:
            case g:
            case f:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case p:
                case m:
                case E:
                case k:
                  return A;
                case s:
                  return A;
                default:
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  return Ve.ContextConsumer = s, Ve.ContextProvider = p, Ve.Element = e, Ve.ForwardRef = m, Ve.Fragment = r, Ve.Lazy = E, Ve.Memo = k, Ve.Portal = t, Ve.Profiler = i, Ve.StrictMode = n, Ve.Suspense = g, Ve.SuspenseList = f, Ve.isContextConsumer = function(A) {
    return O(A) === s;
  }, Ve.isContextProvider = function(A) {
    return O(A) === p;
  }, Ve.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === e;
  }, Ve.isForwardRef = function(A) {
    return O(A) === m;
  }, Ve.isFragment = function(A) {
    return O(A) === r;
  }, Ve.isLazy = function(A) {
    return O(A) === E;
  }, Ve.isMemo = function(A) {
    return O(A) === k;
  }, Ve.isPortal = function(A) {
    return O(A) === t;
  }, Ve.isProfiler = function(A) {
    return O(A) === i;
  }, Ve.isStrictMode = function(A) {
    return O(A) === n;
  }, Ve.isSuspense = function(A) {
    return O(A) === g;
  }, Ve.isSuspenseList = function(A) {
    return O(A) === f;
  }, Ve.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === r || A === i || A === n || A === g || A === f || A === _ || typeof A == "object" && A !== null && (A.$$typeof === E || A.$$typeof === k || A.$$typeof === p || A.$$typeof === s || A.$$typeof === m || A.$$typeof === $ || A.getModuleId !== void 0);
  }, Ve.typeOf = O, Ve;
}
xl.exports = fd();
var vl = xl.exports;
function md(e) {
  function t(H, R, W, B, b) {
    for (var te = 0, j = 0, oe = 0, ee = 0, re, X, ce = 0, fe = 0, ae, ye = ae = re = 0, ne = 0, me = 0, He = 0, be = 0, ft = W.length, Qe = ft - 1, we, J = "", ue = "", Ke = "", gt = "", qe; ne < ft; ) {
      if (X = W.charCodeAt(ne), ne === Qe && j + ee + oe + te !== 0 && (j !== 0 && (X = j === 47 ? 10 : 47), ee = oe = te = 0, ft++, Qe++), j + ee + oe + te === 0) {
        if (ne === Qe && (0 < me && (J = J.replace(_, "")), 0 < J.trim().length)) {
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
            for (J = J.trim(), re = J.charCodeAt(0), ae = 1, be = ++ne; ne < ft; ) {
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
                        for (ye = ne + 1; ye < Qe; ++ye)
                          switch (W.charCodeAt(ye)) {
                            case 47:
                              if (X === 42 && W.charCodeAt(ye - 1) === 42 && ne + 2 !== ye) {
                                ne = ye + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                ne = ye + 1;
                                break e;
                              }
                          }
                        ne = ye;
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
            switch (ae = W.substring(be, ne), re === 0 && (re = (J = J.replace(E, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < me && (J = J.replace(_, "")), X = J.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    me = R;
                    break;
                  default:
                    me = Xe;
                }
                if (ae = t(R, me, ae, X, b + 1), be = ae.length, 0 < Ce && (me = r(Xe, J, He), qe = m(3, ae, me, R, _e, pe, be, X, b, B), J = me.join(""), qe !== void 0 && (be = (ae = qe.trim()).length) === 0 && (X = 0, ae = "")), 0 < be) switch (X) {
                  case 115:
                    J = J.replace(ie, p);
                  case 100:
                  case 109:
                  case 45:
                    ae = J + "{" + ae + "}";
                    break;
                  case 107:
                    J = J.replace(U, "$1 $2"), ae = J + "{" + ae + "}", ae = ve === 1 || ve === 2 && s("@" + ae, 3) ? "@-webkit-" + ae + "@" + ae : "@" + ae;
                    break;
                  default:
                    ae = J + ae, B === 112 && (ae = (ue += ae, ""));
                }
                else ae = "";
                break;
              default:
                ae = t(R, r(R, J, He), ae, B, b + 1);
            }
            Ke += ae, ae = He = me = ye = re = 0, J = "", X = W.charCodeAt(++ne);
            break;
          case 125:
          case 59:
            if (J = (0 < me ? J.replace(_, "") : J).trim(), 1 < (be = J.length)) switch (ye === 0 && (re = J.charCodeAt(0), re === 45 || 96 < re && 123 > re) && (be = (J = J.replace(" ", ":")).length), 0 < Ce && (qe = m(1, J, R, H, _e, pe, ue.length, B, b, B)) !== void 0 && (be = (J = qe.trim()).length) === 0 && (J = "\0\0"), re = J.charCodeAt(0), X = J.charCodeAt(1), re) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  gt += J + W.charAt(ne);
                  break;
                }
              default:
                J.charCodeAt(be - 1) !== 58 && (ue += i(J, re, X, J.charCodeAt(2)));
            }
            He = me = ye = re = 0, J = "", X = W.charCodeAt(++ne);
        }
      }
      switch (X) {
        case 13:
        case 10:
          j === 47 ? j = 0 : 1 + re === 0 && B !== 107 && 0 < J.length && (me = 1, J += "\0"), 0 < Ce * ze && m(0, J, R, H, _e, pe, ue.length, B, b, B), pe = 1, _e++;
          break;
        case 59:
        case 125:
          if (j + ee + oe + te === 0) {
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
              if (ee + j + te + Ae === 0 && 0 < ye) switch (ne - ye) {
                case 2:
                  ce === 112 && W.charCodeAt(ne - 3) === 58 && (Ae = ce);
                case 8:
                  fe === 111 && (Ae = fe);
              }
              break;
            case 58:
              ee + j + te === 0 && (ye = ne);
              break;
            case 44:
              j + oe + ee + te === 0 && (me = 1, we += "\r");
              break;
            case 34:
            case 39:
              j === 0 && (ee = ee === X ? 0 : ee === 0 ? X : ee);
              break;
            case 91:
              ee + j + oe === 0 && te++;
              break;
            case 93:
              ee + j + oe === 0 && te--;
              break;
            case 41:
              ee + j + te === 0 && oe--;
              break;
            case 40:
              if (ee + j + te === 0) {
                if (re === 0) switch (2 * ce + 3 * fe) {
                  case 533:
                    break;
                  default:
                    re = 1;
                }
                oe++;
              }
              break;
            case 64:
              j + oe + ee + te + ye + ae === 0 && (ae = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + te + oe)) switch (j) {
                case 0:
                  switch (2 * X + 3 * W.charCodeAt(ne + 1)) {
                    case 235:
                      j = 47;
                      break;
                    case 220:
                      be = ne, j = 42;
                  }
                  break;
                case 42:
                  X === 47 && ce === 42 && be + 2 !== ne && (W.charCodeAt(be + 2) === 33 && (ue += W.substring(be, ne + 1)), we = "", j = 0);
              }
          }
          j === 0 && (J += we);
      }
      fe = ce, ce = X, ne++;
    }
    if (be = ue.length, 0 < be) {
      if (me = R, 0 < Ce && (qe = m(2, ue, me, H, _e, pe, be, B, b, B), qe !== void 0 && (ue = qe).length === 0)) return gt + ue + Ke;
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
    return gt + ue + Ke;
  }
  function r(H, R, W) {
    var B = R.trim().split(I);
    R = B;
    var b = B.length, te = H.length;
    switch (te) {
      case 0:
      case 1:
        var j = 0;
        for (H = te === 0 ? "" : H[0] + " "; j < b; ++j)
          R[j] = n(H, R[j], W).trim();
        break;
      default:
        var oe = j = 0;
        for (R = []; j < b; ++j)
          for (var ee = 0; ee < te; ++ee)
            R[oe++] = n(H[ee] + " ", B[j], W).trim();
    }
    return R;
  }
  function n(H, R, W) {
    var B = R.charCodeAt(0);
    switch (33 > B && (B = (R = R.trim()).charCodeAt(0)), B) {
      case 38:
        return R.replace(F, "$1" + H.trim());
      case 58:
        return H.trim() + R.replace(F, "$1" + H.trim());
      default:
        if (0 < 1 * W && 0 < R.indexOf("\f")) return R.replace(F, (H.charCodeAt(0) === 58 ? "" : "$1") + H.trim());
    }
    return H + R;
  }
  function i(H, R, W, B) {
    var b = H + ";", te = 2 * R + 3 * W + 4 * B;
    if (te === 944) {
      H = b.indexOf(":", 9) + 1;
      var j = b.substring(H, b.length - 1).trim();
      return j = b.substring(0, H).trim() + j + ";", ve === 1 || ve === 2 && s(j, 1) ? "-webkit-" + j + j : j;
    }
    if (ve === 0 || ve === 2 && !s(b, 1)) return b;
    switch (te) {
      case 1015:
        return b.charCodeAt(10) === 97 ? "-webkit-" + b + b : b;
      case 951:
        return b.charCodeAt(3) === 116 ? "-webkit-" + b + b : b;
      case 963:
        return b.charCodeAt(5) === 110 ? "-webkit-" + b + b : b;
      case 1009:
        if (b.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + b + b;
      case 978:
        return "-webkit-" + b + "-moz-" + b + b;
      case 1019:
      case 983:
        return "-webkit-" + b + "-moz-" + b + "-ms-" + b + b;
      case 883:
        if (b.charCodeAt(8) === 45) return "-webkit-" + b + b;
        if (0 < b.indexOf("image-set(", 11)) return b.replace(se, "$1-webkit-$2") + b;
        break;
      case 932:
        if (b.charCodeAt(4) === 45) switch (b.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + b.replace("-grow", "") + "-webkit-" + b + "-ms-" + b.replace("grow", "positive") + b;
          case 115:
            return "-webkit-" + b + "-ms-" + b.replace("shrink", "negative") + b;
          case 98:
            return "-webkit-" + b + "-ms-" + b.replace("basis", "preferred-size") + b;
        }
        return "-webkit-" + b + "-ms-" + b + b;
      case 964:
        return "-webkit-" + b + "-ms-flex-" + b + b;
      case 1023:
        if (b.charCodeAt(8) !== 99) break;
        return j = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + j + "-webkit-" + b + "-ms-flex-pack" + j + b;
      case 1005:
        return O.test(b) ? b.replace($, ":-webkit-") + b.replace($, ":-moz-") + b : b;
      case 1e3:
        switch (j = b.substring(13).trim(), R = j.indexOf("-") + 1, j.charCodeAt(0) + j.charCodeAt(R)) {
          case 226:
            j = b.replace(v, "tb");
            break;
          case 232:
            j = b.replace(v, "tb-rl");
            break;
          case 220:
            j = b.replace(v, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + j + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (R = (b = H).length - 10, j = (b.charCodeAt(R) === 33 ? b.substring(0, R) : b).substring(H.indexOf(":", 7) + 1).trim(), te = j.charCodeAt(0) + (j.charCodeAt(7) | 0)) {
          case 203:
            if (111 > j.charCodeAt(8)) break;
          case 115:
            b = b.replace(j, "-webkit-" + j) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(j, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + b.replace(j, "-webkit-" + j) + ";" + b.replace(j, "-ms-" + j + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45) switch (b.charCodeAt(6)) {
          case 105:
            return j = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + j + "-ms-flex-" + j + b;
          case 115:
            return "-webkit-" + b + "-ms-flex-item-" + b.replace(xe, "") + b;
          default:
            return "-webkit-" + b + "-ms-flex-line-pack" + b.replace("align-content", "").replace(xe, "") + b;
        }
        break;
      case 973:
      case 989:
        if (b.charCodeAt(3) !== 45 || b.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Le.test(H) === !0) return (j = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(H.replace("stretch", "fill-available"), R, W, B).replace(":fill-available", ":stretch") : b.replace(j, "-webkit-" + j) + b.replace(j, "-moz-" + j.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, W + B === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10)) return b.substring(0, b.indexOf(";", 27) + 1).replace(A, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(H, R) {
    var W = H.indexOf(R === 1 ? ":" : "{"), B = H.substring(0, R !== 3 ? W : 10);
    return W = H.substring(W + 1, H.length - 1), $e(R !== 2 ? B : B.replace(Re, "$1"), W, R);
  }
  function p(H, R) {
    var W = i(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return W !== R + ";" ? W.replace(de, " or ($1)").substring(4) : "(" + R + ")";
  }
  function m(H, R, W, B, b, te, j, oe, ee, re) {
    for (var X = 0, ce = R, fe; X < Ce; ++X)
      switch (fe = Oe[X].call(k, H, ce, W, B, b, te, j, oe, ee, re)) {
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
  function g(H) {
    switch (H) {
      case void 0:
      case null:
        Ce = Oe.length = 0;
        break;
      default:
        if (typeof H == "function") Oe[Ce++] = H;
        else if (typeof H == "object") for (var R = 0, W = H.length; R < W; ++R)
          g(H[R]);
        else ze = !!H | 0;
    }
    return g;
  }
  function f(H) {
    return H = H.prefix, H !== void 0 && ($e = null, H ? typeof H != "function" ? ve = 1 : (ve = 2, $e = H) : ve = 0), f;
  }
  function k(H, R) {
    var W = H;
    if (33 > W.charCodeAt(0) && (W = W.trim()), le = W, W = [le], 0 < Ce) {
      var B = m(-1, R, W, W, _e, pe, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && (R = B);
    }
    var b = t(Xe, W, R, 0, 0);
    return 0 < Ce && (B = m(-2, b, W, W, _e, pe, b.length, 0, 0, 0), B !== void 0 && (b = B)), le = "", Ae = 0, pe = _e = 1, b;
  }
  var E = /^\0+/g, _ = /[\0\r\f]/g, $ = /: */g, O = /zoo|gra/, A = /([,: ])(transform)/g, I = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, z = /:(read-only)/g, v = /[svh]\w+-[tblr]{2}/, ie = /\(\s*(.*)\s*\)/g, de = /([\s\S]*?);/g, xe = /-self|flex-/g, Re = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Le = /stretch|:\s*\w+\-(?:conte|avail)/, se = /([^-])(image-set\()/, pe = 1, _e = 1, Ae = 0, ve = 1, Xe = [], Oe = [], Ce = 0, $e = null, ze = 0, le = "";
  return k.use = g, k.set = f, e !== void 0 && f(e), k;
}
var hd = {
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
function gd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var yd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, as = /* @__PURE__ */ gd(
  function(e) {
    return yd.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), wl = { exports: {} }, Be = {}, is;
function bd() {
  if (is) return Be;
  is = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, k = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, _ = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function Y(v) {
    if (typeof v == "object" && v !== null) {
      var ie = v.$$typeof;
      switch (ie) {
        case t:
          switch (v = v.type, v) {
            case g:
            case f:
            case n:
            case s:
            case i:
            case E:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case m:
                case k:
                case O:
                case $:
                case p:
                  return v;
                default:
                  return ie;
              }
          }
        case r:
          return ie;
      }
    }
  }
  function z(v) {
    return Y(v) === f;
  }
  return Be.AsyncMode = g, Be.ConcurrentMode = f, Be.ContextConsumer = m, Be.ContextProvider = p, Be.Element = t, Be.ForwardRef = k, Be.Fragment = n, Be.Lazy = O, Be.Memo = $, Be.Portal = r, Be.Profiler = s, Be.StrictMode = i, Be.Suspense = E, Be.isAsyncMode = function(v) {
    return z(v) || Y(v) === g;
  }, Be.isConcurrentMode = z, Be.isContextConsumer = function(v) {
    return Y(v) === m;
  }, Be.isContextProvider = function(v) {
    return Y(v) === p;
  }, Be.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, Be.isForwardRef = function(v) {
    return Y(v) === k;
  }, Be.isFragment = function(v) {
    return Y(v) === n;
  }, Be.isLazy = function(v) {
    return Y(v) === O;
  }, Be.isMemo = function(v) {
    return Y(v) === $;
  }, Be.isPortal = function(v) {
    return Y(v) === r;
  }, Be.isProfiler = function(v) {
    return Y(v) === s;
  }, Be.isStrictMode = function(v) {
    return Y(v) === i;
  }, Be.isSuspense = function(v) {
    return Y(v) === E;
  }, Be.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === f || v === s || v === i || v === E || v === _ || typeof v == "object" && v !== null && (v.$$typeof === O || v.$$typeof === $ || v.$$typeof === p || v.$$typeof === m || v.$$typeof === k || v.$$typeof === I || v.$$typeof === F || v.$$typeof === U || v.$$typeof === A);
  }, Be.typeOf = Y, Be;
}
wl.exports = bd();
var xd = wl.exports, Qi = xd, vd = {
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
}, wd = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Sd = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Sl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ki = {};
Ki[Qi.ForwardRef] = Sd;
Ki[Qi.Memo] = Sl;
function os(e) {
  return Qi.isMemo(e) ? Sl : Ki[e.$$typeof] || vd;
}
var kd = Object.defineProperty, Td = Object.getOwnPropertyNames, ss = Object.getOwnPropertySymbols, Cd = Object.getOwnPropertyDescriptor, Ad = Object.getPrototypeOf, ls = Object.prototype;
function kl(e, t, r) {
  if (typeof t != "string") {
    if (ls) {
      var n = Ad(t);
      n && n !== ls && kl(e, n, r);
    }
    var i = Td(t);
    ss && (i = i.concat(ss(t)));
    for (var s = os(e), p = os(t), m = 0; m < i.length; ++m) {
      var g = i[m];
      if (!wd[g] && !(r && r[g]) && !(p && p[g]) && !(s && s[g])) {
        var f = Cd(t, g);
        try {
          kd(e, g, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ed = kl;
const _d = /* @__PURE__ */ Gi(Ed);
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
var cs = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Ti = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !vl.typeOf(e);
}, Ea = Object.freeze([]), jr = Object.freeze({});
function Fn(e) {
  return typeof e == "function";
}
function us(e) {
  return e.displayName || e.name || "Component";
}
function Zi(e) {
  return e && typeof e.styledComponentId == "string";
}
var an = typeof xt < "u" && xt.env !== void 0 && (xt.env.REACT_APP_SC_ATTR || xt.env.SC_ATTR) || "data-styled", eo = typeof window < "u" && "HTMLElement" in window, Od = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof xt < "u" && xt.env !== void 0 && (xt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && xt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? xt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && xt.env.REACT_APP_SC_DISABLE_SPEEDY : xt.env.SC_DISABLE_SPEEDY !== void 0 && xt.env.SC_DISABLE_SPEEDY !== "" ? xt.env.SC_DISABLE_SPEEDY !== "false" && xt.env.SC_DISABLE_SPEEDY : xt.env.NODE_ENV !== "production"));
function zn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var jd = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, i = 0; i < r; i++) n += this.groupSizes[i];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, s = i.length, p = s; r >= p; ) (p <<= 1) < 0 && zn(16, "" + r);
      this.groupSizes = new Uint32Array(p), this.groupSizes.set(i), this.length = p;
      for (var m = s; m < p; m++) this.groupSizes[m] = 0;
    }
    for (var g = this.indexOfGroup(r + 1), f = 0, k = n.length; f < k; f++) this.tag.insertRule(g, n[f]) && (this.groupSizes[r]++, g++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), s = i + n;
      this.groupSizes[r] = 0;
      for (var p = i; p < s; p++) this.tag.deleteRule(i);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var i = this.groupSizes[r], s = this.indexOfGroup(r), p = s + i, m = s; m < p; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), wa = /* @__PURE__ */ new Map(), _a = /* @__PURE__ */ new Map(), Dn = 1, fa = function(e) {
  if (wa.has(e)) return wa.get(e);
  for (; _a.has(Dn); ) Dn++;
  var t = Dn++;
  return wa.set(e, t), _a.set(t, e), t;
}, Nd = function(e) {
  return _a.get(e);
}, Rd = function(e, t) {
  t >= Dn && (Dn = t + 1), wa.set(e, t), _a.set(t, e);
}, Id = "style[" + an + '][data-styled-version="5.3.11"]', Pd = new RegExp("^" + an + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Dd = function(e, t, r) {
  for (var n, i = r.split(","), s = 0, p = i.length; s < p; s++) (n = i[s]) && e.registerName(t, n);
}, Ld = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, s = r.length; i < s; i++) {
    var p = r[i].trim();
    if (p) {
      var m = p.match(Pd);
      if (m) {
        var g = 0 | parseInt(m[1], 10), f = m[2];
        g !== 0 && (Rd(f, g), Dd(e, f, m[3]), e.getTag().insertRules(g, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, Md = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Tl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(m) {
    for (var g = m.childNodes, f = g.length; f >= 0; f--) {
      var k = g[f];
      if (k && k.nodeType === 1 && k.hasAttribute(an)) return k;
    }
  }(r), s = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(an, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = Md();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, Fd = function() {
  function e(r) {
    var n = this.element = Tl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet) return i.sheet;
      for (var s = document.styleSheets, p = 0, m = s.length; p < m; p++) {
        var g = s[p];
        if (g.ownerNode === i) return g;
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
}(), $d = function() {
  function e(r) {
    var n = this.element = Tl(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var i = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(i, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Ud = function() {
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
}(), ds = eo, zd = { isServer: !eo, useCSSOMInjection: !Od }, Cl = function() {
  function e(r, n, i) {
    r === void 0 && (r = jr), n === void 0 && (n = {}), this.options = wr({}, zd, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && eo && ds && (ds = !1, function(s) {
      for (var p = document.querySelectorAll(Id), m = 0, g = p.length; m < g; m++) {
        var f = p[m];
        f && f.getAttribute(an) !== "active" && (Ld(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return fa(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(wr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = i ? new Ud(p) : s ? new Fd(p) : new $d(p), new jd(r)));
    var r, n, i, s, p;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (fa(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(fa(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(fa(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, s = "", p = 0; p < i; p++) {
        var m = Nd(p);
        if (m !== void 0) {
          var g = r.names.get(m), f = n.getGroup(p);
          if (g && f && g.size) {
            var k = an + ".g" + p + '[id="' + m + '"]', E = "";
            g !== void 0 && g.forEach(function(_) {
              _.length > 0 && (E += _ + ",");
            }), s += "" + f + k + '{content:"' + E + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), qd = /(a)(d)/gi, ps = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ci(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = ps(t % 52) + r;
  return (ps(t % 52) + r).replace(qd, "$1-$2");
}
var tn = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Al = function(e) {
  return tn(5381, e);
};
function Bd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Fn(r) && !Zi(r)) return !1;
  }
  return !0;
}
var Wd = Al("5.3.11"), Hd = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Bd(t), this.componentId = r, this.baseHash = tn(Wd, r), this.baseStyle = n, Cl.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = on(this.rules, t, r, n).join(""), m = Ci(tn(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(i, m)) {
        var g = n(p, "." + m, void 0, i);
        r.insertRules(i, m, g);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, k = tn(this.baseHash, n.hash), E = "", _ = 0; _ < f; _++) {
        var $ = this.rules[_];
        if (typeof $ == "string") E += $;
        else if ($) {
          var O = on($, t, r, n), A = Array.isArray(O) ? O.join("") : O;
          k = tn(k, A + _), E += A;
        }
      }
      if (E) {
        var I = Ci(k >>> 0);
        if (!r.hasNameForId(i, I)) {
          var F = n(E, "." + I, void 0, i);
          r.insertRules(i, I, F);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), Vd = /^\s*\/\/.*$/gm, Gd = [":", "[", ".", "#"];
function Yd(e) {
  var t, r, n, i, s = jr, p = s.options, m = p === void 0 ? jr : p, g = s.plugins, f = g === void 0 ? Ea : g, k = new md(m), E = [], _ = /* @__PURE__ */ function(A) {
    function I(F) {
      if (F) try {
        A(F + "}");
      } catch {
      }
    }
    return function(F, U, Y, z, v, ie, de, xe, Re, Le) {
      switch (F) {
        case 1:
          if (Re === 0 && U.charCodeAt(0) === 64) return A(U + ";"), "";
          break;
        case 2:
          if (xe === 0) return U + "/*|*/";
          break;
        case 3:
          switch (xe) {
            case 102:
            case 112:
              return A(Y[0] + U), "";
            default:
              return U + (Le === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(I);
      }
    };
  }(function(A) {
    E.push(A);
  }), $ = function(A, I, F) {
    return I === 0 && Gd.indexOf(F[r.length]) !== -1 || F.match(i) ? A : "." + t;
  };
  function O(A, I, F, U) {
    U === void 0 && (U = "&");
    var Y = A.replace(Vd, ""), z = I && F ? F + " " + I + " { " + Y + " }" : Y;
    return t = U, r = I, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), k(F || !I ? "" : I, z);
  }
  return k.use([].concat(f, [function(A, I, F) {
    A === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, $));
  }, _, function(A) {
    if (A === -2) {
      var I = E;
      return E = [], I;
    }
  }])), O.hash = f.length ? f.reduce(function(A, I) {
    return I.name || zn(15), tn(A, I.name);
  }, 5381).toString() : "", O;
}
var El = mt.createContext();
El.Consumer;
var _l = mt.createContext(), Xd = (_l.Consumer, new Cl()), Ai = Yd();
function Jd() {
  return qt(El) || Xd;
}
function Qd() {
  return qt(_l) || Ai;
}
var Kd = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, s) {
      s === void 0 && (s = Ai);
      var p = n.name + s.hash;
      i.hasNameForId(n.id, p) || i.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return zn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ai), this.name + t.hash;
  }, e;
}(), Zd = /([A-Z])/, ep = /([A-Z])/g, tp = /^ms-/, rp = function(e) {
  return "-" + e.toLowerCase();
};
function fs(e) {
  return Zd.test(e) ? e.replace(ep, rp).replace(tp, "-ms-") : e;
}
var ms = function(e) {
  return e == null || e === !1 || e === "";
};
function on(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, s = [], p = 0, m = e.length; p < m; p += 1) (i = on(e[p], t, r, n)) !== "" && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    return s;
  }
  if (ms(e)) return "";
  if (Zi(e)) return "." + e.styledComponentId;
  if (Fn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var g = e(t);
    return on(g, t, r, n);
  }
  var f;
  return e instanceof Kd ? r ? (e.inject(r, n), e.getName(n)) : e : Ti(e) ? function k(E, _) {
    var $, O, A = [];
    for (var I in E) E.hasOwnProperty(I) && !ms(E[I]) && (Array.isArray(E[I]) && E[I].isCss || Fn(E[I]) ? A.push(fs(I) + ":", E[I], ";") : Ti(E[I]) ? A.push.apply(A, k(E[I], I)) : A.push(fs(I) + ": " + ($ = I, (O = E[I]) == null || typeof O == "boolean" || O === "" ? "" : typeof O != "number" || O === 0 || $ in hd || $.startsWith("--") ? String(O).trim() : O + "px") + ";"));
    return _ ? [_ + " {"].concat(A, ["}"]) : A;
  }(e) : e.toString();
}
var hs = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function np(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Fn(e) || Ti(e) ? hs(on(cs(Ea, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : hs(on(cs(e, r)));
}
var ap = function(e, t, r) {
  return r === void 0 && (r = jr), e.theme !== r.theme && e.theme || t || r.theme;
}, ip = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, op = /(^-|-$)/g;
function ii(e) {
  return e.replace(ip, "-").replace(op, "");
}
var sp = function(e) {
  return Ci(Al(e) >>> 0);
};
function ma(e) {
  return typeof e == "string" && xt.env.NODE_ENV === "production";
}
var Ei = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, lp = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function cp(e, t, r) {
  var n = e[r];
  Ei(t) && Ei(n) ? Ol(n, t) : e[r] = t;
}
function Ol(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var i = 0, s = r; i < s.length; i++) {
    var p = s[i];
    if (Ei(p)) for (var m in p) lp(m) && cp(e, p[m], m);
  }
  return e;
}
var jl = mt.createContext();
jl.Consumer;
var oi = {};
function Nl(e, t, r) {
  var n = Zi(e), i = !ma(e), s = t.attrs, p = s === void 0 ? Ea : s, m = t.componentId, g = m === void 0 ? function(U, Y) {
    var z = typeof U != "string" ? "sc" : ii(U);
    oi[z] = (oi[z] || 0) + 1;
    var v = z + "-" + sp("5.3.11" + z + oi[z]);
    return Y ? Y + "-" + v : v;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, k = f === void 0 ? function(U) {
    return ma(U) ? "styled." + U : "Styled(" + us(U) + ")";
  }(e) : f, E = t.displayName && t.componentId ? ii(t.displayName) + "-" + t.componentId : t.componentId || g, _ = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, $ = t.shouldForwardProp;
  n && e.shouldForwardProp && ($ = t.shouldForwardProp ? function(U, Y, z) {
    return e.shouldForwardProp(U, Y, z) && t.shouldForwardProp(U, Y, z);
  } : e.shouldForwardProp);
  var O, A = new Hd(r, E, n ? e.componentStyle : void 0), I = A.isStatic && p.length === 0, F = function(U, Y) {
    return function(z, v, ie, de) {
      var xe = z.attrs, Re = z.componentStyle, Le = z.defaultProps, se = z.foldedComponentIds, pe = z.shouldForwardProp, _e = z.styledComponentId, Ae = z.target, ve = function(B, b, te) {
        B === void 0 && (B = jr);
        var j = wr({}, b, { theme: B }), oe = {};
        return te.forEach(function(ee) {
          var re, X, ce, fe = ee;
          for (re in Fn(fe) && (fe = fe(j)), fe) j[re] = oe[re] = re === "className" ? (X = oe[re], ce = fe[re], X && ce ? X + " " + ce : X || ce) : fe[re];
        }), [j, oe];
      }(ap(v, qt(jl), Le) || jr, v, xe), Xe = ve[0], Oe = ve[1], Ce = function(B, b, te, j) {
        var oe = Jd(), ee = Qd(), re = b ? B.generateAndInjectStyles(jr, oe, ee) : B.generateAndInjectStyles(te, oe, ee);
        return re;
      }(Re, de, Xe), $e = ie, ze = Oe.$as || v.$as || Oe.as || v.as || Ae, le = ma(ze), H = Oe !== v ? wr({}, v, {}, Oe) : v, R = {};
      for (var W in H) W[0] !== "$" && W !== "as" && (W === "forwardedAs" ? R.as = H[W] : (pe ? pe(W, as, ze) : !le || as(W)) && (R[W] = H[W]));
      return v.style && Oe.style !== v.style && (R.style = wr({}, v.style, {}, Oe.style)), R.className = Array.prototype.concat(se, _e, Ce !== _e ? Ce : null, v.className, Oe.className).filter(Boolean).join(" "), R.ref = $e, tl(ze, R);
    }(O, U, Y, I);
  };
  return F.displayName = k, (O = mt.forwardRef(F)).attrs = _, O.componentStyle = A, O.displayName = k, O.shouldForwardProp = $, O.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ea, O.styledComponentId = E, O.target = n ? e.target : e, O.withComponent = function(U) {
    var Y = t.componentId, z = function(ie, de) {
      if (ie == null) return {};
      var xe, Re, Le = {}, se = Object.keys(ie);
      for (Re = 0; Re < se.length; Re++) xe = se[Re], de.indexOf(xe) >= 0 || (Le[xe] = ie[xe]);
      return Le;
    }(t, ["componentId"]), v = Y && Y + "-" + (ma(U) ? U : ii(us(U)));
    return Nl(U, wr({}, z, { attrs: _, componentId: v }), r);
  }, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? Ol({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(O, "toString", { value: function() {
    return "." + O.styledComponentId;
  } }), i && _d(O, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), O;
}
var nr = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = jr), !vl.isValidElementType(n)) return zn(1, String(n));
    var s = function() {
      return r(n, i, np.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, wr({}, i, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, wr({}, i, { attrs: Array.prototype.concat(i.attrs, p).filter(Boolean) }));
    }, s;
  }(Nl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  nr[e] = nr(e);
});
const up = nr.div`
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
`, Sa = "On This Page", dp = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: Sa
}, Rl = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: r = !1
}) => {
  const { isReact: n, isBootstrap: i } = Xi(), s = Xr(null), p = Iu("(max-width: 991px)"), [m, g] = ut({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), f = p ? 110 : 142, k = () => {
    var F;
    const U = {}, Y = window.scrollY, z = (F = document.getElementById(t)) == null ? void 0 : F.getBoundingClientRect().top, v = 103;
    z >= 0 && (U.sticky = !1, U.activeContainer = ""), Y > s.current.getBoundingClientRect().top && (U.sticky = !0);
    const ie = m.hasHeader ? f + v : v;
    e == null || e.forEach(({ targetIdName: de }) => {
      const xe = document.getElementById(de), Re = (xe == null ? void 0 : xe.getBoundingClientRect().top) - ie, Le = (xe == null ? void 0 : xe.getBoundingClientRect().bottom) - ie;
      Re < 0 && Le > 0 && (U.activeContainer = de);
    }), g((de) => ({
      ...de,
      ...U
    }));
  }, E = () => {
    ad(k, 150), id(k, 150);
  }, _ = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), $ = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function O(F = null) {
    if (F === null) return m.containerClass;
    const U = Object.values(F.classList).filter(
      (Y) => [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid"
      ].includes(Y)
    );
    return U.length > 0 ? U.join(" ") : O(F.parentElement);
  }
  At(() => {
    const F = document.getElementById(t) || null, U = {
      hasHeader: _(),
      hasAltMenuSpacing: $(),
      containerClass: O(F)
    };
    g((Y) => ({
      ...Y,
      ...U
    }));
  }, []), At(() => (window == null || window.addEventListener("scroll", E), () => window.removeEventListener("scroll", E)), [m.hasHeader]);
  const A = (F) => {
    var U, Y;
    const z = window.scrollY - (m.hasHeader ? f + 100 : 100), v = p ? 410 : 90;
    let ie = ((U = document.getElementById(F)) == null ? void 0 : U.getBoundingClientRect().top) + z;
    s.current.classList.contains("sticky") || (ie -= v), r && ((Y = nd(`#${F}`)) == null || Y.focus()), window.scrollTo({ top: ie, behavior: "smooth" });
  }, I = () => {
    g((F) => ({
      ...F,
      showMenu: !F.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ q.jsx(
    up,
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
      children: /* @__PURE__ */ q.jsxs("div", { className: `${m.containerClass} uds-anchor-menu-wrapper`, children: [
        p ? /* @__PURE__ */ q.jsx(
          Ir,
          {
            gaData: {
              ...dp,
              action: m.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ q.jsx(
              "button",
              {
                className: ot("mobile-menu-toggler", {
                  "show-menu": m.showMenu
                }),
                type: "button",
                onClick: I,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseAnchorMenu",
                "aria-controls": "collapseAnchorMenu",
                children: /* @__PURE__ */ q.jsxs("h4", { children: [
                  Sa,
                  ":",
                  /* @__PURE__ */ q.jsx("i", { className: "fas fa-chevron-down" })
                ] })
              }
            )
          }
        ) : /* @__PURE__ */ q.jsxs("h4", { children: [
          Sa,
          ":"
        ] }),
        /* @__PURE__ */ q.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: ot("card", "card-body", "collapse", {
              show: m.showMenu
            }),
            children: /* @__PURE__ */ q.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": Sa,
                children: e == null ? void 0 : e.map((F) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ q.jsx(
                    Tr,
                    {
                      "data-testid": `anchor-item-${F.targetIdName}`,
                      classes: ot("nav-link", {
                        active: m.activeContainer === F.targetIdName
                      }).split(" "),
                      ariaLabel: F.text,
                      label: F.text,
                      icon: F.icon,
                      onClick: n && (() => A(F.targetIdName)),
                      href: i && `#${F.targetIdName}`
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
Rl.propTypes = {
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
function Da(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], i = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(i)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var pp = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
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
}(), Vr = function() {
  return Vr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Vr.apply(this, arguments);
}, fp = function(e, t, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(p) {
      p(s);
    });
  }
  return new (r || (r = Promise))(function(s, p) {
    function m(k) {
      try {
        f(n.next(k));
      } catch (E) {
        p(E);
      }
    }
    function g(k) {
      try {
        f(n.throw(k));
      } catch (E) {
        p(E);
      }
    }
    function f(k) {
      k.done ? s(k.value) : i(k.value).then(m, g);
    }
    f((n = n.apply(e, [])).next());
  });
}, mp = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, p;
  return p = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
    return this;
  }), p;
  function m(f) {
    return function(k) {
      return g([f, k]);
    };
  }
  function g(f) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (n = 1, i && (s = f[0] & 2 ? i.return : f[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, f[1])).done) return s;
      switch (i = 0, s && (f = [f[0] & 2, s.value]), f[0]) {
        case 0:
        case 1:
          s = f;
          break;
        case 4:
          return r.label++, { value: f[1], done: !1 };
        case 5:
          r.label++, i = f[1], f = [0];
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
      f = [6, k], i = 0;
    } finally {
      n = s = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, Il = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}, hp = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, gp = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, yp = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function bp(e, t, r) {
  var n = t.height, i = t.width, s = Il(t, ["height", "width"]), p = Vr({ height: n, width: i, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), m = window.open(e, "", Object.keys(p).map(function(f) {
    return "".concat(f, "=").concat(p[f]);
  }).join(", "));
  if (r)
    var g = window.setInterval(function() {
      try {
        (m === null || m.closed) && (window.clearInterval(g), r(m));
      } catch (f) {
        console.error(f);
      }
    }, 1e3);
  return m;
}
var xp = (
  /** @class */
  function(e) {
    pp(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var i = r.props, s = i.onShareWindowClose, p = i.windowHeight, m = p === void 0 ? 400 : p, g = i.windowPosition, f = g === void 0 ? "windowCenter" : g, k = i.windowWidth, E = k === void 0 ? 550 : k, _ = Vr({ height: m, width: E }, f === "windowCenter" ? gp(E, m) : yp(E, m));
        bp(n, _, s);
      }, r.handleClick = function(n) {
        return fp(r, void 0, void 0, function() {
          var i, s, p, m, g, f, k, E, _, $;
          return mp(this, function(O) {
            switch (O.label) {
              case 0:
                return i = this.props, s = i.beforeOnClick, p = i.disabled, m = i.networkLink, g = i.onClick, f = i.url, k = i.openShareDialogOnClick, E = i.opts, _ = m(f, E), p ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? ($ = s(), hp($) ? [4, $] : [3, 2]) : [3, 2]);
              case 1:
                O.sent(), O.label = 2;
              case 2:
                return k && this.openShareDialog(_), g && g(n, _), [
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
      var n = r.children, i = r.className, s = r.disabled, p = r.disabledStyle, m = r.forwardedRef;
      r.networkLink;
      var g = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var f = r.resetButtonStyle, k = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var E = Il(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), _ = ot("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, i), $ = Vr(Vr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, k), s && p);
      return mt.createElement("button", Vr({}, E, { "aria-label": E["aria-label"] || g, className: _, onClick: this.handleClick, ref: m, style: $ }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(Tu)
), Oa = function() {
  return Oa = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Oa.apply(this, arguments);
};
function La(e, t, r, n) {
  function i(s, p) {
    var m = r(s), g = Oa({}, s), f = Object.keys(m);
    return f.forEach(function(k) {
      delete g[k];
    }), mt.createElement(xp, Oa({}, n, g, { forwardedRef: p, networkName: e, networkLink: t, opts: r(s) }));
  }
  return i.displayName = "ShareButton-".concat(e), Hi(i);
}
function vp(e, t) {
  var r = t.subject, n = t.body, i = t.separator;
  return "mailto:" + Da({ subject: r, body: n ? n + i + e : e });
}
La("email", vp, function(e) {
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
var wp = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
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
}(), Sp = (
  /** @class */
  function(e) {
    wp(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function Ln(e, t) {
  if (!e)
    throw new Sp(t);
}
function kp(e, t) {
  var r = t.quote, n = t.hashtag;
  return Ln(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Da({
    u: e,
    quote: r,
    hashtag: n
  });
}
La("facebook", kp, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Tp(e, t) {
  var r = t.title, n = t.summary, i = t.source;
  return Ln(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Da({ url: e, mini: "true", title: r, summary: n, source: i });
}
La("linkedin", Tp, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Cp(e, t) {
  var r = t.title, n = t.via, i = t.hashtags, s = i === void 0 ? [] : i, p = t.related, m = p === void 0 ? [] : p;
  return Ln(e, "twitter.url"), Ln(Array.isArray(s), "twitter.hashtags is not an array"), Ln(Array.isArray(m), "twitter.related is not an array"), "https://twitter.com/share" + Da({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: m.length > 0 ? m.join(",") : void 0
  });
}
La("twitter", Cp, function(e) {
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
function _i(e) {
  "@babel/helpers - typeof";
  return _i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _i(e);
}
var Ap = (typeof window > "u" ? "undefined" : _i(window)) === "object" && window.Element || function() {
};
function Ep(e, t, r) {
  if (!(e[t] instanceof Ap))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, Ep, l.shape({
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
const _p = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Pl = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  color: i = "gray",
  disabled: s,
  element: p = "button",
  innerRef: m,
  href: g,
  onClick: f,
  ...k
}) => {
  const E = ot("btn", "btn-tag", {
    "btn-tag-alt-white": i === "white",
    "btn-tag-alt-gray": i === "gray",
    "btn-tag-alt-dark": i === "dark",
    disabled: s
  });
  let _ = p;
  return g && p === "button" && (_ = "a"), /* @__PURE__ */ q.jsx(
    Ir,
    {
      gaData: {
        ..._p,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ q.jsx(
        _,
        {
          type: _ === "button" && f ? "button" : void 0,
          ...k,
          className: E,
          href: g,
          ref: m,
          onClick: f,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
Pl.propTypes = {
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
  gaData: Yi,
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
const Dl = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: i = "async",
  dataTestId: s,
  fetchPriority: p = "auto",
  width: m,
  height: g,
  cardLink: f,
  title: k,
  caption: E,
  captionTitle: _,
  border: $,
  dropShadow: O
}) => {
  const A = {
    src: e,
    alt: t,
    loading: n,
    decoding: i,
    fetchpriority: p,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Pu(r) },
    ...s && { "data-testid": s },
    ...m && { width: m },
    ...g && { height: g }
  }, I = ot("uds-img", {
    borderless: !$,
    "uds-img-drop-shadow": O
  }), F = (Y) => {
    const z = Y ? `${A.className} ${Y}` : A.className;
    return f ? /* @__PURE__ */ q.jsxs("a", { href: f, children: [
      /* @__PURE__ */ q.jsx("img", { ...A, className: z }),
      /* @__PURE__ */ q.jsx("span", { className: "visually-hidden", children: k })
    ] }) : /* @__PURE__ */ q.jsx("img", { ...A, className: z });
  }, U = () => /* @__PURE__ */ q.jsx("div", { className: I, children: /* @__PURE__ */ q.jsxs("figure", { className: "figure uds-figure", children: [
    F(),
    E && /* @__PURE__ */ q.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      _ && /* @__PURE__ */ q.jsx("h3", { children: _ }),
      /* @__PURE__ */ q.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Hr(E)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ q.jsx(q.Fragment, { children: E ? U() : F(I) });
};
Dl.propTypes = {
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
const Op = nr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, jp = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Np = (e) => !e.startsWith("https://") && !e.startsWith("http://") && jp(e) ? `mailto:${e}` : e, Rp = {
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
  imageAltText: i,
  title: s,
  icon: p,
  body: m,
  eventFormat: g = "stack",
  eventLocation: f,
  eventTime: k,
  buttons: E,
  linkLabel: _,
  linkUrl: $,
  tags: O,
  showBorders: A = !0,
  cardLink: I
}) => /* @__PURE__ */ q.jsx(
  Ll,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: i,
    title: s,
    icon: p,
    body: m,
    eventFormat: g,
    eventLocation: f,
    eventTime: k,
    buttons: E,
    linkLabel: _,
    linkUrl: $,
    tags: O,
    showBorders: A,
    cardLink: I
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
const Ll = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n = "",
  imageAltText: i = "",
  title: s,
  icon: p = void 0,
  body: m = "",
  eventFormat: g = "stack",
  eventLocation: f = "",
  eventTime: k = "",
  buttons: E = void 0,
  linkLabel: _ = void 0,
  linkUrl: $ = void 0,
  tags: O = void 0,
  showBorders: A = !0,
  cardLink: I
}) => {
  const F = ot("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !A
  });
  return /* @__PURE__ */ q.jsx(q.Fragment, { children: /* @__PURE__ */ q.jsxs(Op, { className: F, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ q.jsx(
      Dl,
      {
        src: n,
        alt: i,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: I,
        title: s
      }
    ),
    !n && p && /* @__PURE__ */ q.jsx(
      "i",
      {
        className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ q.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ q.jsx(
      Oi,
      {
        type: e,
        body: m,
        eventFormat: g,
        eventLocation: f,
        eventTime: k,
        title: s,
        buttons: E,
        linkLabel: _,
        linkUrl: $,
        tags: O,
        cardLink: I
      }
    ) }) : /* @__PURE__ */ q.jsx(
      Oi,
      {
        type: e,
        body: m,
        eventFormat: g,
        eventLocation: f,
        eventTime: k,
        title: s,
        buttons: E,
        linkLabel: _,
        linkUrl: $,
        tags: O,
        cardLink: I
      }
    )
  ] }) });
};
Ll.propTypes = {
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
const Oi = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: n = "",
  eventTime: i = "",
  title: s,
  buttons: p = void 0,
  linkLabel: m = void 0,
  linkUrl: g = void 0,
  tags: f = void 0,
  cardLink: k
}) => /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
  !!s && /* @__PURE__ */ q.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ q.jsx("h3", { className: "card-title", children: k ? /* @__PURE__ */ q.jsx("a", { href: k, children: s }) : s }) }),
  !!t && /* @__PURE__ */ q.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ q.jsx("div", { dangerouslySetInnerHTML: Hr(t) }) }),
  e === "event" && (i || n) && /* @__PURE__ */ q.jsx(
    Ml,
    {
      eventFormat: r,
      eventTime: i,
      eventLocation: n
    }
  ),
  p && /* @__PURE__ */ q.jsx("div", { className: "card-buttons", children: p.map((E) => /* @__PURE__ */ q.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ q.jsx(
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
  g && m && /* @__PURE__ */ q.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ q.jsx(
    Ir,
    {
      gaData: {
        ...Rp,
        section: s,
        text: m
      },
      children: /* @__PURE__ */ q.jsx("a", { href: Np(g), children: m })
    }
  ) }),
  f && /* @__PURE__ */ q.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((E) => (
    // @ts-ignore
    /* @__PURE__ */ q.jsx(
      Pl,
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
Oi.propTypes = {
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
const Ml = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ q.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ q.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ q.jsx("div", { children: /* @__PURE__ */ q.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ q.jsx("div", { dangerouslySetInnerHTML: Hr(r) })
  ] }),
  t && /* @__PURE__ */ q.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ q.jsx("div", { children: /* @__PURE__ */ q.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ q.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Hr(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
  r && /* @__PURE__ */ q.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ q.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ q.jsx("div", { children: /* @__PURE__ */ q.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ q.jsx("div", { dangerouslySetInnerHTML: Hr(r) })
  ] }) }),
  t && /* @__PURE__ */ q.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ q.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ q.jsx("div", { children: /* @__PURE__ */ q.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ q.jsx("span", { children: /* @__PURE__ */ q.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Hr(t)
      }
    ) })
  ] }) })
] });
Ml.propTypes = {
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
Zs(null);
l.element, l.element, l.number, l.func, l.func, l.string;
const Ip = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), Pp = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
});
l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
});
const Dp = l.shape({
  url: l.string,
  filters: l.string
});
l.shape({
  header: Ip,
  ctaButton: Pp,
  dataSource: Dp,
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
const Lp = nr.img`
  width: 100%;
`;
function Mp({ image: e, title: t, contents: r }) {
  return console.log({ image: e, title: t, contents: r }), /* @__PURE__ */ q.jsx("div", { children: "TODO: to be implemented" });
}
function Fp({
  image: e,
  subTitle: t,
  title: r,
  contents: n,
  contentsColor: i
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
  return /* @__PURE__ */ q.jsxs(
    "div",
    {
      className: ot("uds-hero", {
        [s[e == null ? void 0 : e.size]]: e == null ? void 0 : e.size
      }),
      children: [
        /* @__PURE__ */ q.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ q.jsx(
          Lp,
          {
            className: "hero",
            src: e == null ? void 0 : e.url,
            alt: e == null ? void 0 : e.altText,
            "data-testid": "hero-image"
          }
        ),
        t && /* @__PURE__ */ q.jsx("div", { role: "doc-subtitle", "data-testid": "hero-subtitle", children: /* @__PURE__ */ q.jsx(
          "span",
          {
            className: ot({
              [m[t.color]]: t.color,
              [p[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        r && /* @__PURE__ */ q.jsx("h1", { style: { maxWidth: r.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ q.jsx(
          "span",
          {
            className: ot({
              [m[r.color]]: r.color,
              [p[r.highlightColor]]: r.highlightColor
            }),
            children: r.text
          }
        ) }),
        n && /* @__PURE__ */ q.jsx(
          "div",
          {
            "data-testid": "hero-content",
            className: ot("content", {
              [m[i]]: i
            }),
            children: n.map((g, f) => /* @__PURE__ */ q.jsx("p", { children: g.text }, `content-${f}`))
          }
        )
      ]
    }
  );
}
const qn = (e) => {
  const t = e.type || "heading-hero";
  return {
    "heading-hero": () => Fp(e),
    "story-hero": () => Mp(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
qn.propTypes = {
  type: l.oneOf(["heading-hero", "story-hero"]),
  image: ld,
  title: ai,
  subTitle: ai,
  contents: l.arrayOf(ai),
  contentsColor: l.string
};
const er = ({
  dataId: e,
  isClickeable: t = !1,
  disabled: r = !1,
  pageLinkIcon: n = !1,
  selectedPage: i = !1,
  onClick: s = () => {
  },
  ellipses: p,
  ariaLabel: m,
  children: g,
  ariaDisabled: f
}) => /* @__PURE__ */ q.jsx(
  "li",
  {
    className: ot("page-item", {
      disabled: r,
      active: i,
      elipses: p
    }),
    children: t ? /* @__PURE__ */ q.jsxs(
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
        "aria-current": i ? "page" : null,
        "aria-disabled": f,
        children: [
          g,
          i && /* @__PURE__ */ q.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ q.jsx("span", { className: "page-link", "data-testid": "page-link", children: g })
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
const $p = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, Fl = ({
  type: e,
  background: t,
  currentPage: r = 1,
  totalPages: n = 10,
  onChange: i
}) => {
  const [s, p] = ut(null);
  At(() => {
    p(r);
  }, [r]);
  const m = (k) => {
    fl({ ...$p, text: `page ${k}` });
  }, g = (k, E) => {
    const _ = {
      first: 1,
      prev: s === 1 ? 1 : s - 1,
      next: s === n ? n : s + 1,
      last: n
    }[E] ?? E;
    p(_), m(_), i == null || i(k, _);
  }, f = () => {
    if (n < 5)
      return /* @__PURE__ */ q.jsx(q.Fragment, { children: Array.from({ length: n }, (I, F) => {
        const U = F + 1;
        return /* @__PURE__ */ q.jsx(
          er,
          {
            ariaLabel: `Page ${U} of ${n}`,
            isClickeable: !0,
            selectedPage: s === U,
            onClick: (Y) => g(Y, U),
            children: U
          },
          U
        );
      }) });
    const k = 2, E = zo(
      s === n - 1,
      1,
      s === n ? 2 : 1
    ), _ = zo(
      s === 1,
      2,
      1
    ), $ = Ko(
      s - E,
      s,
      n
    ), O = Ko(
      s,
      s + 1 + _,
      n
    ), A = [...$, ...O];
    return /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
      A[0] !== 1 && /* @__PURE__ */ q.jsx(
        er,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: s === 1,
          onClick: (I) => g(I, "first"),
          children: "1"
        }
      ),
      s > n - k && /* @__PURE__ */ q.jsx(
        er,
        {
          isClickeable: !0,
          ariaLabel: `Page 2 of ${n}`,
          selectedPage: s === 2,
          onClick: (I) => g(I, 2),
          children: "2"
        }
      ),
      A[0] > 2 && /* @__PURE__ */ q.jsx(er, { ellipses: !0, children: "..." }),
      A.map((I) => /* @__PURE__ */ q.jsx(
        er,
        {
          ariaLabel: `Page ${I} of ${n}`,
          isClickeable: !0,
          selectedPage: s === I,
          onClick: (F) => g(F, I),
          children: I
        },
        I
      )),
      A[A.length - 1] < n - 1 && /* @__PURE__ */ q.jsx(er, { ellipses: !0, children: "..." }),
      s < k + 1 && /* @__PURE__ */ q.jsx(
        er,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n - 1} of ${n}`,
          selectedPage: s === n - 1,
          onClick: (I) => g(I, n - 1),
          children: n - 1
        }
      ),
      A[A.length - 1] !== n && /* @__PURE__ */ q.jsx(
        er,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n} of ${n}`,
          selectedPage: s === n,
          onClick: (I) => g(I, "last"),
          children: n
        }
      )
    ] });
  };
  return /* @__PURE__ */ q.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ q.jsxs(
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
        /* @__PURE__ */ q.jsx(
          er,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: s === 1,
            pageLinkIcon: !0,
            onClick: (k) => g(k, "prev"),
            ariaDisabled: s === 1,
            ariaLabel: "Previous Page"
          }
        ),
        f(),
        /* @__PURE__ */ q.jsx(
          er,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: s === n,
            disabled: s === n,
            pageLinkIcon: !0,
            onClick: (k) => g(k, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
Fl.propTypes = {
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
nr.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const Up = Hi(function(e, t) {
  const {
    id: r,
    selected: n,
    title: i,
    selectTab: s,
    leftKeyPressed: p,
    rightKeyPressed: m,
    icon: g,
    gaData: f
  } = e, { isReact: k, isBootstrap: E } = Xi(), _ = Xr(null);
  Cu(t, () => ({
    focus() {
      _.current.focus();
    },
    scrollIntoView() {
      var O, A, I, F, U, Y, z;
      const v = ((O = _.current) == null ? void 0 : O.offsetWidth) / 2 + _.current.offsetLeft, ie = ((I = (A = _.current) == null ? void 0 : A.offsetParent) == null ? void 0 : I.scrollLeft) + ((U = (F = _.current) == null ? void 0 : F.offsetParent) == null ? void 0 : U.offsetWidth) / 2;
      (z = (Y = _.current) == null ? void 0 : Y.offsetParent) == null || z.scrollBy({
        left: v - ie
      });
    }
  }), []);
  const $ = (O) => {
    O.keyCode === 37 ? (O.preventDefault(), p()) : O.keyCode === 39 && (O.preventDefault(), m());
  };
  return /* @__PURE__ */ q.jsx(Ir, { gaData: { ...f, text: i }, children: /* @__PURE__ */ q.jsxs(
    "a",
    {
      ref: _,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      "data-bs-toggle": E && "tab",
      onClick: k && ((O) => s(O, r, i)),
      onKeyDown: k && $,
      tabIndex: n ? "" : "-1",
      children: [
        i,
        " ",
        g && /* @__PURE__ */ q.jsx("i", { className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} me-1` })
      ]
    }
  ) });
});
Up.propTypes = {
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
const zp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  text: "play button"
}, qp = ({
  url: e = "",
  vttUrl: t,
  caption: r,
  title: n = "",
  className: i,
  controls: s = !0
}) => {
  const p = Xr(null);
  return /* @__PURE__ */ q.jsxs(
    "div",
    {
      className: ot(`uds-video-container ${i}`, {
        "uds-video-with-caption": r
      }),
      children: [
        /* @__PURE__ */ q.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ q.jsx(Ir, { gaData: { ...zp, section: n }, children: /* @__PURE__ */ q.jsxs(
          "video",
          {
            ref: p,
            title: n,
            playsInline: !0,
            controls: s || !0,
            children: [
              /* @__PURE__ */ q.jsx("source", { src: e }),
              /* @__PURE__ */ q.jsx(
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
        r && /* @__PURE__ */ q.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ q.jsx("figcaption", { children: r }) })
      ]
    }
  );
}, Bp = ({ title: e = "", caption: t, url: r = "", className: n }) => /* @__PURE__ */ q.jsxs(
  "div",
  {
    className: ot(`uds-video-container ${n}`, {
      "uds-video-with-caption": t
    }),
    children: [
      /* @__PURE__ */ q.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ q.jsx("iframe", { title: e, src: r }) }),
      t && /* @__PURE__ */ q.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ q.jsx("figcaption", { children: t }) })
    ]
  }
), to = (e) => {
  const {
    type: t = "video",
    url: r = "",
    vttUrl: n,
    title: i = "",
    caption: s,
    className: p,
    controls: m = !0
  } = e;
  return t === "youtube" ? Bp({ url: r, title: i, caption: s, className: p }) : qp({
    url: r,
    vttUrl: n,
    title: i,
    caption: s,
    className: p,
    controls: m
  });
};
to.propTypes = {
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
var Wp = !1;
try {
  var gs = Object.defineProperty({}, "passive", {
    get: function() {
      Wp = !0;
    }
  });
  window.addEventListener("testPassive", null, gs), window.removeEventListener("testPassive", null, gs);
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
const ja = {
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
l.string, ja.imageItems, ja.hasContent;
ja.imageItems.isRequired, ja.hasContent, l.string, l.string, l.bool;
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
var ys = al;
ys.createRoot, ys.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const $l = () => {
  const [e, t] = ut(null), [r, n] = ut(!1), [i, s] = ut(null), [p, m] = ut("");
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
  }, [p]), [{ data: e, loading: r, error: i }, m];
}, sn = (e) => (e || []).join(" ");
const {
  entries: Ul,
  setPrototypeOf: bs,
  isFrozen: Hp,
  getPrototypeOf: Vp,
  getOwnPropertyDescriptor: Gp
} = Object;
let {
  freeze: Ot,
  seal: Ut,
  create: zl
} = Object, {
  apply: ji,
  construct: Ni
} = typeof Reflect < "u" && Reflect;
Ot || (Ot = function(t) {
  return t;
});
Ut || (Ut = function(t) {
  return t;
});
ji || (ji = function(t, r, n) {
  return t.apply(r, n);
});
Ni || (Ni = function(t, r) {
  return new t(...r);
});
const ha = jt(Array.prototype.forEach), Yp = jt(Array.prototype.lastIndexOf), xs = jt(Array.prototype.pop), _n = jt(Array.prototype.push), Xp = jt(Array.prototype.splice), ka = jt(String.prototype.toLowerCase), si = jt(String.prototype.toString), vs = jt(String.prototype.match), On = jt(String.prototype.replace), Jp = jt(String.prototype.indexOf), Qp = jt(String.prototype.trim), rr = jt(Object.prototype.hasOwnProperty), Ct = jt(RegExp.prototype.test), jn = Kp(TypeError);
function jt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return ji(e, t, n);
  };
}
function Kp(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ni(e, r);
  };
}
function Fe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ka;
  bs && bs(e, null);
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (Hp(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Zp(e) {
  for (let t = 0; t < e.length; t++)
    rr(e, t) || (e[t] = null);
  return e;
}
function qr(e) {
  const t = zl(null);
  for (const [r, n] of Ul(e))
    rr(e, r) && (Array.isArray(n) ? t[r] = Zp(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = qr(n) : t[r] = n);
  return t;
}
function Nn(e, t) {
  for (; e !== null; ) {
    const n = Gp(e, t);
    if (n) {
      if (n.get)
        return jt(n.get);
      if (typeof n.value == "function")
        return jt(n.value);
    }
    e = Vp(e);
  }
  function r() {
    return null;
  }
  return r;
}
const ws = Ot(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), li = Ot(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ci = Ot(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ef = Ot(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ui = Ot(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), tf = Ot(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ss = Ot(["#text"]), ks = Ot(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), di = Ot(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ts = Ot(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ga = Ot(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), rf = Ut(/\{\{[\w\W]*|[\w\W]*\}\}/gm), nf = Ut(/<%[\w\W]*|[\w\W]*%>/gm), af = Ut(/\$\{[\w\W]*/gm), of = Ut(/^data-[\-\w.\u00B7-\uFFFF]+$/), sf = Ut(/^aria-[\-\w]+$/), ql = Ut(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), lf = Ut(/^(?:\w+script|data):/i), cf = Ut(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Bl = Ut(/^html$/i), uf = Ut(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Cs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: sf,
  ATTR_WHITESPACE: cf,
  CUSTOM_ELEMENT: uf,
  DATA_ATTR: of,
  DOCTYPE_NAME: Bl,
  ERB_EXPR: nf,
  IS_ALLOWED_URI: ql,
  IS_SCRIPT_OR_DATA: lf,
  MUSTACHE_EXPR: rf,
  TMPLIT_EXPR: af
});
const Rn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, df = function() {
  return typeof window > "u" ? null : window;
}, pf = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
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
}, As = function() {
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
function Wl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : df();
  const t = (x) => Wl(x);
  if (t.version = "3.2.5", t.removed = [], !e || !e.document || e.document.nodeType !== Rn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, i = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: p,
    Node: m,
    Element: g,
    NodeFilter: f,
    NamedNodeMap: k = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: _,
    trustedTypes: $
  } = e, O = g.prototype, A = Nn(O, "cloneNode"), I = Nn(O, "remove"), F = Nn(O, "nextSibling"), U = Nn(O, "childNodes"), Y = Nn(O, "parentNode");
  if (typeof p == "function") {
    const x = r.createElement("template");
    x.content && x.content.ownerDocument && (r = x.content.ownerDocument);
  }
  let z, v = "";
  const {
    implementation: ie,
    createNodeIterator: de,
    createDocumentFragment: xe,
    getElementsByTagName: Re
  } = r, {
    importNode: Le
  } = n;
  let se = As();
  t.isSupported = typeof Ul == "function" && typeof Y == "function" && ie && ie.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: _e,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: ve,
    ARIA_ATTR: Xe,
    IS_SCRIPT_OR_DATA: Oe,
    ATTR_WHITESPACE: Ce,
    CUSTOM_ELEMENT: $e
  } = Cs;
  let {
    IS_ALLOWED_URI: ze
  } = Cs, le = null;
  const H = Fe({}, [...ws, ...li, ...ci, ...ui, ...Ss]);
  let R = null;
  const W = Fe({}, [...ks, ...di, ...Ts, ...ga]);
  let B = Object.seal(zl(null, {
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
  })), b = null, te = null, j = !0, oe = !0, ee = !1, re = !0, X = !1, ce = !0, fe = !1, ae = !1, ye = !1, ne = !1, me = !1, He = !1, be = !0, ft = !1;
  const Qe = "user-content-";
  let we = !0, J = !1, ue = {}, Ke = null;
  const gt = Fe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qe = null;
  const ar = Fe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Mt = null;
  const pr = Fe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", bt = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml";
  let yt = st, Bt = !1, Wt = null;
  const Pr = Fe({}, [wt, bt, st], si);
  let ct = Fe({}, ["mi", "mo", "mn", "ms", "mtext"]), St = Fe({}, ["annotation-xml"]);
  const ir = Fe({}, ["title", "style", "font", "a", "script"]);
  let Pe = null;
  const Ht = ["application/xhtml+xml", "text/html"], or = "text/html";
  let Te = null, nt = null;
  const sr = r.createElement("form"), kt = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, Ft = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(nt && nt === S)) {
      if ((!S || typeof S != "object") && (S = {}), S = qr(S), Pe = // eslint-disable-next-line unicorn/prefer-includes
      Ht.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? or : S.PARSER_MEDIA_TYPE, Te = Pe === "application/xhtml+xml" ? si : ka, le = rr(S, "ALLOWED_TAGS") ? Fe({}, S.ALLOWED_TAGS, Te) : H, R = rr(S, "ALLOWED_ATTR") ? Fe({}, S.ALLOWED_ATTR, Te) : W, Wt = rr(S, "ALLOWED_NAMESPACES") ? Fe({}, S.ALLOWED_NAMESPACES, si) : Pr, Mt = rr(S, "ADD_URI_SAFE_ATTR") ? Fe(qr(pr), S.ADD_URI_SAFE_ATTR, Te) : pr, qe = rr(S, "ADD_DATA_URI_TAGS") ? Fe(qr(ar), S.ADD_DATA_URI_TAGS, Te) : ar, Ke = rr(S, "FORBID_CONTENTS") ? Fe({}, S.FORBID_CONTENTS, Te) : gt, b = rr(S, "FORBID_TAGS") ? Fe({}, S.FORBID_TAGS, Te) : {}, te = rr(S, "FORBID_ATTR") ? Fe({}, S.FORBID_ATTR, Te) : {}, ue = rr(S, "USE_PROFILES") ? S.USE_PROFILES : !1, j = S.ALLOW_ARIA_ATTR !== !1, oe = S.ALLOW_DATA_ATTR !== !1, ee = S.ALLOW_UNKNOWN_PROTOCOLS || !1, re = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, X = S.SAFE_FOR_TEMPLATES || !1, ce = S.SAFE_FOR_XML !== !1, fe = S.WHOLE_DOCUMENT || !1, ne = S.RETURN_DOM || !1, me = S.RETURN_DOM_FRAGMENT || !1, He = S.RETURN_TRUSTED_TYPE || !1, ye = S.FORCE_BODY || !1, be = S.SANITIZE_DOM !== !1, ft = S.SANITIZE_NAMED_PROPS || !1, we = S.KEEP_CONTENT !== !1, J = S.IN_PLACE || !1, ze = S.ALLOWED_URI_REGEXP || ql, yt = S.NAMESPACE || st, ct = S.MATHML_TEXT_INTEGRATION_POINTS || ct, St = S.HTML_INTEGRATION_POINTS || St, B = S.CUSTOM_ELEMENT_HANDLING || {}, S.CUSTOM_ELEMENT_HANDLING && kt(S.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (B.tagNameCheck = S.CUSTOM_ELEMENT_HANDLING.tagNameCheck), S.CUSTOM_ELEMENT_HANDLING && kt(S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (B.attributeNameCheck = S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), S.CUSTOM_ELEMENT_HANDLING && typeof S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (B.allowCustomizedBuiltInElements = S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), X && (oe = !1), me && (ne = !0), ue && (le = Fe({}, Ss), R = [], ue.html === !0 && (Fe(le, ws), Fe(R, ks)), ue.svg === !0 && (Fe(le, li), Fe(R, di), Fe(R, ga)), ue.svgFilters === !0 && (Fe(le, ci), Fe(R, di), Fe(R, ga)), ue.mathMl === !0 && (Fe(le, ui), Fe(R, Ts), Fe(R, ga))), S.ADD_TAGS && (le === H && (le = qr(le)), Fe(le, S.ADD_TAGS, Te)), S.ADD_ATTR && (R === W && (R = qr(R)), Fe(R, S.ADD_ATTR, Te)), S.ADD_URI_SAFE_ATTR && Fe(Mt, S.ADD_URI_SAFE_ATTR, Te), S.FORBID_CONTENTS && (Ke === gt && (Ke = qr(Ke)), Fe(Ke, S.FORBID_CONTENTS, Te)), we && (le["#text"] = !0), fe && Fe(le, ["html", "head", "body"]), le.table && (Fe(le, ["tbody"]), delete b.tbody), S.TRUSTED_TYPES_POLICY) {
        if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw jn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw jn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        z = S.TRUSTED_TYPES_POLICY, v = z.createHTML("");
      } else
        z === void 0 && (z = pf($, i)), z !== null && typeof v == "string" && (v = z.createHTML(""));
      Ot && Ot(S), nt = S;
    }
  }, Vt = Fe({}, [...li, ...ci, ...ef]), Gt = Fe({}, [...ui, ...tf]), Ar = function(S) {
    let N = Y(S);
    (!N || !N.tagName) && (N = {
      namespaceURI: yt,
      tagName: "template"
    });
    const Q = ka(S.tagName), Se = ka(N.tagName);
    return Wt[S.namespaceURI] ? S.namespaceURI === bt ? N.namespaceURI === st ? Q === "svg" : N.namespaceURI === wt ? Q === "svg" && (Se === "annotation-xml" || ct[Se]) : !!Vt[Q] : S.namespaceURI === wt ? N.namespaceURI === st ? Q === "math" : N.namespaceURI === bt ? Q === "math" && St[Se] : !!Gt[Q] : S.namespaceURI === st ? N.namespaceURI === bt && !St[Se] || N.namespaceURI === wt && !ct[Se] ? !1 : !Gt[Q] && (ir[Q] || !Vt[Q]) : !!(Pe === "application/xhtml+xml" && Wt[S.namespaceURI]) : !1;
  }, lt = function(S) {
    _n(t.removed, {
      element: S
    });
    try {
      Y(S).removeChild(S);
    } catch {
      I(S);
    }
  }, Nt = function(S, N) {
    try {
      _n(t.removed, {
        attribute: N.getAttributeNode(S),
        from: N
      });
    } catch {
      _n(t.removed, {
        attribute: null,
        from: N
      });
    }
    if (N.removeAttribute(S), S === "is")
      if (ne || me)
        try {
          lt(N);
        } catch {
        }
      else
        try {
          N.setAttribute(S, "");
        } catch {
        }
  }, fr = function(S) {
    let N = null, Q = null;
    if (ye)
      S = "<remove></remove>" + S;
    else {
      const Ue = vs(S, /^[\r\n\t ]+/);
      Q = Ue && Ue[0];
    }
    Pe === "application/xhtml+xml" && yt === st && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const Se = z ? z.createHTML(S) : S;
    if (yt === st)
      try {
        N = new _().parseFromString(Se, Pe);
      } catch {
      }
    if (!N || !N.documentElement) {
      N = ie.createDocument(yt, "template", null);
      try {
        N.documentElement.innerHTML = Bt ? v : Se;
      } catch {
      }
    }
    const je = N.body || N.documentElement;
    return S && Q && je.insertBefore(r.createTextNode(Q), je.childNodes[0] || null), yt === st ? Re.call(N, fe ? "html" : "body")[0] : fe ? N.documentElement : je;
  }, mr = function(S) {
    return de.call(
      S.ownerDocument || S,
      S,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Rt = function(S) {
    return S instanceof E && (typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || !(S.attributes instanceof k) || typeof S.removeAttribute != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function");
  }, lr = function(S) {
    return typeof m == "function" && S instanceof m;
  };
  function Ze(x, S, N) {
    ha(x, (Q) => {
      Q.call(t, S, N, nt);
    });
  }
  const Yt = function(S) {
    let N = null;
    if (Ze(se.beforeSanitizeElements, S, null), Rt(S))
      return lt(S), !0;
    const Q = Te(S.nodeName);
    if (Ze(se.uponSanitizeElement, S, {
      tagName: Q,
      allowedTags: le
    }), S.hasChildNodes() && !lr(S.firstElementChild) && Ct(/<[/\w!]/g, S.innerHTML) && Ct(/<[/\w!]/g, S.textContent) || S.nodeType === Rn.progressingInstruction || ce && S.nodeType === Rn.comment && Ct(/<[/\w]/g, S.data))
      return lt(S), !0;
    if (!le[Q] || b[Q]) {
      if (!b[Q] && It(Q) && (B.tagNameCheck instanceof RegExp && Ct(B.tagNameCheck, Q) || B.tagNameCheck instanceof Function && B.tagNameCheck(Q)))
        return !1;
      if (we && !Ke[Q]) {
        const Se = Y(S) || S.parentNode, je = U(S) || S.childNodes;
        if (je && Se) {
          const Ue = je.length;
          for (let Ee = Ue - 1; Ee >= 0; --Ee) {
            const et = A(je[Ee], !0);
            et.__removalCount = (S.__removalCount || 0) + 1, Se.insertBefore(et, F(S));
          }
        }
      }
      return lt(S), !0;
    }
    return S instanceof g && !Ar(S) || (Q === "noscript" || Q === "noembed" || Q === "noframes") && Ct(/<\/no(script|embed|frames)/i, S.innerHTML) ? (lt(S), !0) : (X && S.nodeType === Rn.text && (N = S.textContent, ha([pe, _e, Ae], (Se) => {
      N = On(N, Se, " ");
    }), S.textContent !== N && (_n(t.removed, {
      element: S.cloneNode()
    }), S.textContent = N)), Ze(se.afterSanitizeElements, S, null), !1);
  }, hr = function(S, N, Q) {
    if (be && (N === "id" || N === "name") && (Q in r || Q in sr))
      return !1;
    if (!(oe && !te[N] && Ct(ve, N))) {
      if (!(j && Ct(Xe, N))) {
        if (!R[N] || te[N]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(It(S) && (B.tagNameCheck instanceof RegExp && Ct(B.tagNameCheck, S) || B.tagNameCheck instanceof Function && B.tagNameCheck(S)) && (B.attributeNameCheck instanceof RegExp && Ct(B.attributeNameCheck, N) || B.attributeNameCheck instanceof Function && B.attributeNameCheck(N)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            N === "is" && B.allowCustomizedBuiltInElements && (B.tagNameCheck instanceof RegExp && Ct(B.tagNameCheck, Q) || B.tagNameCheck instanceof Function && B.tagNameCheck(Q)))
          ) return !1;
        } else if (!Mt[N]) {
          if (!Ct(ze, On(Q, Ce, ""))) {
            if (!((N === "src" || N === "xlink:href" || N === "href") && S !== "script" && Jp(Q, "data:") === 0 && qe[S])) {
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
  }, It = function(S) {
    return S !== "annotation-xml" && vs(S, $e);
  }, gr = function(S) {
    Ze(se.beforeSanitizeAttributes, S, null);
    const {
      attributes: N
    } = S;
    if (!N || Rt(S))
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
      let at = Ue === "value" ? et : Qp(et);
      if (Q.attrName = Je, Q.attrValue = at, Q.keepAttr = !0, Q.forceKeepAttr = void 0, Ze(se.uponSanitizeAttribute, S, Q), at = Q.attrValue, ft && (Je === "id" || Je === "name") && (Nt(Ue, S), at = Qe + at), ce && Ct(/((--!?|])>)|<\/(style|title)/i, at)) {
        Nt(Ue, S);
        continue;
      }
      if (Q.forceKeepAttr || (Nt(Ue, S), !Q.keepAttr))
        continue;
      if (!re && Ct(/\/>/i, at)) {
        Nt(Ue, S);
        continue;
      }
      X && ha([pe, _e, Ae], (Xt) => {
        at = On(at, Xt, " ");
      });
      const br = Te(S.nodeName);
      if (hr(br, Je, at)) {
        if (z && typeof $ == "object" && typeof $.getAttributeType == "function" && !Ee)
          switch ($.getAttributeType(br, Je)) {
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
          Ee ? S.setAttributeNS(Ee, Ue, at) : S.setAttribute(Ue, at), Rt(S) ? lt(S) : xs(t.removed);
        } catch {
        }
      }
    }
    Ze(se.afterSanitizeAttributes, S, null);
  }, yr = function x(S) {
    let N = null;
    const Q = mr(S);
    for (Ze(se.beforeSanitizeShadowDOM, S, null); N = Q.nextNode(); )
      Ze(se.uponSanitizeShadowNode, N, null), Yt(N), gr(N), N.content instanceof s && x(N.content);
    Ze(se.afterSanitizeShadowDOM, S, null);
  };
  return t.sanitize = function(x) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, Q = null, Se = null, je = null;
    if (Bt = !x, Bt && (x = "<!-->"), typeof x != "string" && !lr(x))
      if (typeof x.toString == "function") {
        if (x = x.toString(), typeof x != "string")
          throw jn("dirty is not a string, aborting");
      } else
        throw jn("toString is not a function");
    if (!t.isSupported)
      return x;
    if (ae || Ft(S), t.removed = [], typeof x == "string" && (J = !1), J) {
      if (x.nodeName) {
        const et = Te(x.nodeName);
        if (!le[et] || b[et])
          throw jn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (x instanceof m)
      N = fr("<!---->"), Q = N.ownerDocument.importNode(x, !0), Q.nodeType === Rn.element && Q.nodeName === "BODY" || Q.nodeName === "HTML" ? N = Q : N.appendChild(Q);
    else {
      if (!ne && !X && !fe && // eslint-disable-next-line unicorn/prefer-includes
      x.indexOf("<") === -1)
        return z && He ? z.createHTML(x) : x;
      if (N = fr(x), !N)
        return ne ? null : He ? v : "";
    }
    N && ye && lt(N.firstChild);
    const Ue = mr(J ? x : N);
    for (; Se = Ue.nextNode(); )
      Yt(Se), gr(Se), Se.content instanceof s && yr(Se.content);
    if (J)
      return x;
    if (ne) {
      if (me)
        for (je = xe.call(N.ownerDocument); N.firstChild; )
          je.appendChild(N.firstChild);
      else
        je = N;
      return (R.shadowroot || R.shadowrootmode) && (je = Le.call(n, je, !0)), je;
    }
    let Ee = fe ? N.outerHTML : N.innerHTML;
    return fe && le["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && Ct(Bl, N.ownerDocument.doctype.name) && (Ee = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + Ee), X && ha([pe, _e, Ae], (et) => {
      Ee = On(Ee, et, " ");
    }), z && He ? z.createHTML(Ee) : Ee;
  }, t.setConfig = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ft(x), ae = !0;
  }, t.clearConfig = function() {
    nt = null, ae = !1;
  }, t.isValidAttribute = function(x, S, N) {
    nt || Ft({});
    const Q = Te(x), Se = Te(S);
    return hr(Q, Se, N);
  }, t.addHook = function(x, S) {
    typeof S == "function" && _n(se[x], S);
  }, t.removeHook = function(x, S) {
    if (S !== void 0) {
      const N = Yp(se[x], S);
      return N === -1 ? void 0 : Xp(se[x], N, 1)[0];
    }
    return xs(se[x]);
  }, t.removeHooks = function(x) {
    se[x] = [];
  }, t.removeAllHooks = function() {
    se = As();
  }, t;
}
var Es = Wl();
let ya = null;
function ff() {
  return ya || (typeof window < "u" ? ya = Es(window) : ya = Es), ya;
}
const zt = (e) => ({ __html: ff().sanitize(e) });
function* Kr(e = "id-", t = 0) {
  let r = t;
  for (; ; )
    r += 1, yield e + r;
}
function mf() {
  const e = (
    // @ts-ignore
    (document.currentScript && document.currentScript.src || "").match(
      /(.*\/)/
    )
  );
  return e && e.length > 0 ? e[0].substr(0, e[0].length - 1) : "/";
}
var Hl = { exports: {} }, pi, _s;
function hf() {
  if (_s) return pi;
  _s = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return pi = e, pi;
}
var fi, Os;
function gf() {
  if (Os) return fi;
  Os = 1;
  var e = hf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, fi = function() {
    function n(p, m, g, f, k, E) {
      if (E !== e) {
        var _ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw _.name = "Invariant Violation", _;
      }
    }
    n.isRequired = n;
    function i() {
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
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, fi;
}
Hl.exports = gf()();
var Ta = Hl.exports;
const C = /* @__PURE__ */ Vi(Ta);
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
const Bn = ({ children: e }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: e });
Bn.propTypes = {
  children: C.oneOfType([
    C.arrayOf(C.node),
    C.node,
    C.string
  ])
};
var Vl = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", p = 0; p < arguments.length; p++) {
        var m = arguments[p];
        m && (s = i(s, n(m)));
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
        t.call(s, m) && s[m] && (p = i(p, m));
      return p;
    }
    function i(s, p) {
      return p ? s ? s + " " + p : s + p : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Vl);
var yf = Vl.exports;
const bf = /* @__PURE__ */ Vi(yf);
({
  ...Bn.propTypes
});
const Gl = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ d.jsx("div", { className: t, ...r, children: /* @__PURE__ */ d.jsx("div", { className: "row", children: e }) });
Gl.propTypes = {
  children: Bn.propTypes.children
};
({
  ...Gl.propTypes
});
Bn.propTypes.children, C.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Bn.propTypes.children;
function Yl({
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
var Xl = { exports: {} }, Ge = {};
var js;
function xf() {
  if (js) return Ge;
  js = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), $ = Symbol.for("react.client.reference");
  function O(A) {
    if (typeof A == "object" && A !== null) {
      var I = A.$$typeof;
      switch (I) {
        case e:
          switch (A = A.type, A) {
            case r:
            case i:
            case n:
            case g:
            case f:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case p:
                case m:
                case E:
                case k:
                  return A;
                case s:
                  return A;
                default:
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  return Ge.ContextConsumer = s, Ge.ContextProvider = p, Ge.Element = e, Ge.ForwardRef = m, Ge.Fragment = r, Ge.Lazy = E, Ge.Memo = k, Ge.Portal = t, Ge.Profiler = i, Ge.StrictMode = n, Ge.Suspense = g, Ge.SuspenseList = f, Ge.isContextConsumer = function(A) {
    return O(A) === s;
  }, Ge.isContextProvider = function(A) {
    return O(A) === p;
  }, Ge.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === e;
  }, Ge.isForwardRef = function(A) {
    return O(A) === m;
  }, Ge.isFragment = function(A) {
    return O(A) === r;
  }, Ge.isLazy = function(A) {
    return O(A) === E;
  }, Ge.isMemo = function(A) {
    return O(A) === k;
  }, Ge.isPortal = function(A) {
    return O(A) === t;
  }, Ge.isProfiler = function(A) {
    return O(A) === i;
  }, Ge.isStrictMode = function(A) {
    return O(A) === n;
  }, Ge.isSuspense = function(A) {
    return O(A) === g;
  }, Ge.isSuspenseList = function(A) {
    return O(A) === f;
  }, Ge.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === r || A === i || A === n || A === g || A === f || A === _ || typeof A == "object" && A !== null && (A.$$typeof === E || A.$$typeof === k || A.$$typeof === p || A.$$typeof === s || A.$$typeof === m || A.$$typeof === $ || A.getModuleId !== void 0);
  }, Ge.typeOf = O, Ge;
}
Xl.exports = xf();
var Jl = Xl.exports;
function vf(e) {
  function t(H, R, W, B, b) {
    for (var te = 0, j = 0, oe = 0, ee = 0, re, X, ce = 0, fe = 0, ae, ye = ae = re = 0, ne = 0, me = 0, He = 0, be = 0, ft = W.length, Qe = ft - 1, we, J = "", ue = "", Ke = "", gt = "", qe; ne < ft; ) {
      if (X = W.charCodeAt(ne), ne === Qe && j + ee + oe + te !== 0 && (j !== 0 && (X = j === 47 ? 10 : 47), ee = oe = te = 0, ft++, Qe++), j + ee + oe + te === 0) {
        if (ne === Qe && (0 < me && (J = J.replace(_, "")), 0 < J.trim().length)) {
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
            for (J = J.trim(), re = J.charCodeAt(0), ae = 1, be = ++ne; ne < ft; ) {
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
                        for (ye = ne + 1; ye < Qe; ++ye)
                          switch (W.charCodeAt(ye)) {
                            case 47:
                              if (X === 42 && W.charCodeAt(ye - 1) === 42 && ne + 2 !== ye) {
                                ne = ye + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                ne = ye + 1;
                                break e;
                              }
                          }
                        ne = ye;
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
            switch (ae = W.substring(be, ne), re === 0 && (re = (J = J.replace(E, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < me && (J = J.replace(_, "")), X = J.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    me = R;
                    break;
                  default:
                    me = Xe;
                }
                if (ae = t(R, me, ae, X, b + 1), be = ae.length, 0 < Ce && (me = r(Xe, J, He), qe = m(3, ae, me, R, _e, pe, be, X, b, B), J = me.join(""), qe !== void 0 && (be = (ae = qe.trim()).length) === 0 && (X = 0, ae = "")), 0 < be) switch (X) {
                  case 115:
                    J = J.replace(ie, p);
                  case 100:
                  case 109:
                  case 45:
                    ae = J + "{" + ae + "}";
                    break;
                  case 107:
                    J = J.replace(U, "$1 $2"), ae = J + "{" + ae + "}", ae = ve === 1 || ve === 2 && s("@" + ae, 3) ? "@-webkit-" + ae + "@" + ae : "@" + ae;
                    break;
                  default:
                    ae = J + ae, B === 112 && (ae = (ue += ae, ""));
                }
                else ae = "";
                break;
              default:
                ae = t(R, r(R, J, He), ae, B, b + 1);
            }
            Ke += ae, ae = He = me = ye = re = 0, J = "", X = W.charCodeAt(++ne);
            break;
          case 125:
          case 59:
            if (J = (0 < me ? J.replace(_, "") : J).trim(), 1 < (be = J.length)) switch (ye === 0 && (re = J.charCodeAt(0), re === 45 || 96 < re && 123 > re) && (be = (J = J.replace(" ", ":")).length), 0 < Ce && (qe = m(1, J, R, H, _e, pe, ue.length, B, b, B)) !== void 0 && (be = (J = qe.trim()).length) === 0 && (J = "\0\0"), re = J.charCodeAt(0), X = J.charCodeAt(1), re) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  gt += J + W.charAt(ne);
                  break;
                }
              default:
                J.charCodeAt(be - 1) !== 58 && (ue += i(J, re, X, J.charCodeAt(2)));
            }
            He = me = ye = re = 0, J = "", X = W.charCodeAt(++ne);
        }
      }
      switch (X) {
        case 13:
        case 10:
          j === 47 ? j = 0 : 1 + re === 0 && B !== 107 && 0 < J.length && (me = 1, J += "\0"), 0 < Ce * ze && m(0, J, R, H, _e, pe, ue.length, B, b, B), pe = 1, _e++;
          break;
        case 59:
        case 125:
          if (j + ee + oe + te === 0) {
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
              if (ee + j + te + Ae === 0 && 0 < ye) switch (ne - ye) {
                case 2:
                  ce === 112 && W.charCodeAt(ne - 3) === 58 && (Ae = ce);
                case 8:
                  fe === 111 && (Ae = fe);
              }
              break;
            case 58:
              ee + j + te === 0 && (ye = ne);
              break;
            case 44:
              j + oe + ee + te === 0 && (me = 1, we += "\r");
              break;
            case 34:
            case 39:
              j === 0 && (ee = ee === X ? 0 : ee === 0 ? X : ee);
              break;
            case 91:
              ee + j + oe === 0 && te++;
              break;
            case 93:
              ee + j + oe === 0 && te--;
              break;
            case 41:
              ee + j + te === 0 && oe--;
              break;
            case 40:
              if (ee + j + te === 0) {
                if (re === 0) switch (2 * ce + 3 * fe) {
                  case 533:
                    break;
                  default:
                    re = 1;
                }
                oe++;
              }
              break;
            case 64:
              j + oe + ee + te + ye + ae === 0 && (ae = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + te + oe)) switch (j) {
                case 0:
                  switch (2 * X + 3 * W.charCodeAt(ne + 1)) {
                    case 235:
                      j = 47;
                      break;
                    case 220:
                      be = ne, j = 42;
                  }
                  break;
                case 42:
                  X === 47 && ce === 42 && be + 2 !== ne && (W.charCodeAt(be + 2) === 33 && (ue += W.substring(be, ne + 1)), we = "", j = 0);
              }
          }
          j === 0 && (J += we);
      }
      fe = ce, ce = X, ne++;
    }
    if (be = ue.length, 0 < be) {
      if (me = R, 0 < Ce && (qe = m(2, ue, me, H, _e, pe, be, B, b, B), qe !== void 0 && (ue = qe).length === 0)) return gt + ue + Ke;
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
    return gt + ue + Ke;
  }
  function r(H, R, W) {
    var B = R.trim().split(I);
    R = B;
    var b = B.length, te = H.length;
    switch (te) {
      case 0:
      case 1:
        var j = 0;
        for (H = te === 0 ? "" : H[0] + " "; j < b; ++j)
          R[j] = n(H, R[j], W).trim();
        break;
      default:
        var oe = j = 0;
        for (R = []; j < b; ++j)
          for (var ee = 0; ee < te; ++ee)
            R[oe++] = n(H[ee] + " ", B[j], W).trim();
    }
    return R;
  }
  function n(H, R, W) {
    var B = R.charCodeAt(0);
    switch (33 > B && (B = (R = R.trim()).charCodeAt(0)), B) {
      case 38:
        return R.replace(F, "$1" + H.trim());
      case 58:
        return H.trim() + R.replace(F, "$1" + H.trim());
      default:
        if (0 < 1 * W && 0 < R.indexOf("\f")) return R.replace(F, (H.charCodeAt(0) === 58 ? "" : "$1") + H.trim());
    }
    return H + R;
  }
  function i(H, R, W, B) {
    var b = H + ";", te = 2 * R + 3 * W + 4 * B;
    if (te === 944) {
      H = b.indexOf(":", 9) + 1;
      var j = b.substring(H, b.length - 1).trim();
      return j = b.substring(0, H).trim() + j + ";", ve === 1 || ve === 2 && s(j, 1) ? "-webkit-" + j + j : j;
    }
    if (ve === 0 || ve === 2 && !s(b, 1)) return b;
    switch (te) {
      case 1015:
        return b.charCodeAt(10) === 97 ? "-webkit-" + b + b : b;
      case 951:
        return b.charCodeAt(3) === 116 ? "-webkit-" + b + b : b;
      case 963:
        return b.charCodeAt(5) === 110 ? "-webkit-" + b + b : b;
      case 1009:
        if (b.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + b + b;
      case 978:
        return "-webkit-" + b + "-moz-" + b + b;
      case 1019:
      case 983:
        return "-webkit-" + b + "-moz-" + b + "-ms-" + b + b;
      case 883:
        if (b.charCodeAt(8) === 45) return "-webkit-" + b + b;
        if (0 < b.indexOf("image-set(", 11)) return b.replace(se, "$1-webkit-$2") + b;
        break;
      case 932:
        if (b.charCodeAt(4) === 45) switch (b.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + b.replace("-grow", "") + "-webkit-" + b + "-ms-" + b.replace("grow", "positive") + b;
          case 115:
            return "-webkit-" + b + "-ms-" + b.replace("shrink", "negative") + b;
          case 98:
            return "-webkit-" + b + "-ms-" + b.replace("basis", "preferred-size") + b;
        }
        return "-webkit-" + b + "-ms-" + b + b;
      case 964:
        return "-webkit-" + b + "-ms-flex-" + b + b;
      case 1023:
        if (b.charCodeAt(8) !== 99) break;
        return j = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + j + "-webkit-" + b + "-ms-flex-pack" + j + b;
      case 1005:
        return O.test(b) ? b.replace($, ":-webkit-") + b.replace($, ":-moz-") + b : b;
      case 1e3:
        switch (j = b.substring(13).trim(), R = j.indexOf("-") + 1, j.charCodeAt(0) + j.charCodeAt(R)) {
          case 226:
            j = b.replace(v, "tb");
            break;
          case 232:
            j = b.replace(v, "tb-rl");
            break;
          case 220:
            j = b.replace(v, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + j + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (R = (b = H).length - 10, j = (b.charCodeAt(R) === 33 ? b.substring(0, R) : b).substring(H.indexOf(":", 7) + 1).trim(), te = j.charCodeAt(0) + (j.charCodeAt(7) | 0)) {
          case 203:
            if (111 > j.charCodeAt(8)) break;
          case 115:
            b = b.replace(j, "-webkit-" + j) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(j, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + b.replace(j, "-webkit-" + j) + ";" + b.replace(j, "-ms-" + j + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45) switch (b.charCodeAt(6)) {
          case 105:
            return j = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + j + "-ms-flex-" + j + b;
          case 115:
            return "-webkit-" + b + "-ms-flex-item-" + b.replace(xe, "") + b;
          default:
            return "-webkit-" + b + "-ms-flex-line-pack" + b.replace("align-content", "").replace(xe, "") + b;
        }
        break;
      case 973:
      case 989:
        if (b.charCodeAt(3) !== 45 || b.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Le.test(H) === !0) return (j = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(H.replace("stretch", "fill-available"), R, W, B).replace(":fill-available", ":stretch") : b.replace(j, "-webkit-" + j) + b.replace(j, "-moz-" + j.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, W + B === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10)) return b.substring(0, b.indexOf(";", 27) + 1).replace(A, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(H, R) {
    var W = H.indexOf(R === 1 ? ":" : "{"), B = H.substring(0, R !== 3 ? W : 10);
    return W = H.substring(W + 1, H.length - 1), $e(R !== 2 ? B : B.replace(Re, "$1"), W, R);
  }
  function p(H, R) {
    var W = i(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return W !== R + ";" ? W.replace(de, " or ($1)").substring(4) : "(" + R + ")";
  }
  function m(H, R, W, B, b, te, j, oe, ee, re) {
    for (var X = 0, ce = R, fe; X < Ce; ++X)
      switch (fe = Oe[X].call(k, H, ce, W, B, b, te, j, oe, ee, re)) {
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
  function g(H) {
    switch (H) {
      case void 0:
      case null:
        Ce = Oe.length = 0;
        break;
      default:
        if (typeof H == "function") Oe[Ce++] = H;
        else if (typeof H == "object") for (var R = 0, W = H.length; R < W; ++R)
          g(H[R]);
        else ze = !!H | 0;
    }
    return g;
  }
  function f(H) {
    return H = H.prefix, H !== void 0 && ($e = null, H ? typeof H != "function" ? ve = 1 : (ve = 2, $e = H) : ve = 0), f;
  }
  function k(H, R) {
    var W = H;
    if (33 > W.charCodeAt(0) && (W = W.trim()), le = W, W = [le], 0 < Ce) {
      var B = m(-1, R, W, W, _e, pe, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && (R = B);
    }
    var b = t(Xe, W, R, 0, 0);
    return 0 < Ce && (B = m(-2, b, W, W, _e, pe, b.length, 0, 0, 0), B !== void 0 && (b = B)), le = "", Ae = 0, pe = _e = 1, b;
  }
  var E = /^\0+/g, _ = /[\0\r\f]/g, $ = /: */g, O = /zoo|gra/, A = /([,: ])(transform)/g, I = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, z = /:(read-only)/g, v = /[svh]\w+-[tblr]{2}/, ie = /\(\s*(.*)\s*\)/g, de = /([\s\S]*?);/g, xe = /-self|flex-/g, Re = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Le = /stretch|:\s*\w+\-(?:conte|avail)/, se = /([^-])(image-set\()/, pe = 1, _e = 1, Ae = 0, ve = 1, Xe = [], Oe = [], Ce = 0, $e = null, ze = 0, le = "";
  return k.use = g, k.set = f, e !== void 0 && f(e), k;
}
var wf = {
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
function Sf(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var kf = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ns = /* @__PURE__ */ Sf(
  function(e) {
    return kf.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ql = { exports: {} }, We = {};
var Rs;
function Tf() {
  if (Rs) return We;
  Rs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, k = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, _ = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function Y(v) {
    if (typeof v == "object" && v !== null) {
      var ie = v.$$typeof;
      switch (ie) {
        case t:
          switch (v = v.type, v) {
            case g:
            case f:
            case n:
            case s:
            case i:
            case E:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case m:
                case k:
                case O:
                case $:
                case p:
                  return v;
                default:
                  return ie;
              }
          }
        case r:
          return ie;
      }
    }
  }
  function z(v) {
    return Y(v) === f;
  }
  return We.AsyncMode = g, We.ConcurrentMode = f, We.ContextConsumer = m, We.ContextProvider = p, We.Element = t, We.ForwardRef = k, We.Fragment = n, We.Lazy = O, We.Memo = $, We.Portal = r, We.Profiler = s, We.StrictMode = i, We.Suspense = E, We.isAsyncMode = function(v) {
    return z(v) || Y(v) === g;
  }, We.isConcurrentMode = z, We.isContextConsumer = function(v) {
    return Y(v) === m;
  }, We.isContextProvider = function(v) {
    return Y(v) === p;
  }, We.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, We.isForwardRef = function(v) {
    return Y(v) === k;
  }, We.isFragment = function(v) {
    return Y(v) === n;
  }, We.isLazy = function(v) {
    return Y(v) === O;
  }, We.isMemo = function(v) {
    return Y(v) === $;
  }, We.isPortal = function(v) {
    return Y(v) === r;
  }, We.isProfiler = function(v) {
    return Y(v) === s;
  }, We.isStrictMode = function(v) {
    return Y(v) === i;
  }, We.isSuspense = function(v) {
    return Y(v) === E;
  }, We.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === f || v === s || v === i || v === E || v === _ || typeof v == "object" && v !== null && (v.$$typeof === O || v.$$typeof === $ || v.$$typeof === p || v.$$typeof === m || v.$$typeof === k || v.$$typeof === I || v.$$typeof === F || v.$$typeof === U || v.$$typeof === A);
  }, We.typeOf = Y, We;
}
Ql.exports = Tf();
var Cf = Ql.exports, ro = Cf, Af = {
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
}, Ef = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, _f = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Kl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, no = {};
no[ro.ForwardRef] = _f;
no[ro.Memo] = Kl;
function Is(e) {
  return ro.isMemo(e) ? Kl : no[e.$$typeof] || Af;
}
var Of = Object.defineProperty, jf = Object.getOwnPropertyNames, Ps = Object.getOwnPropertySymbols, Nf = Object.getOwnPropertyDescriptor, Rf = Object.getPrototypeOf, Ds = Object.prototype;
function Zl(e, t, r) {
  if (typeof t != "string") {
    if (Ds) {
      var n = Rf(t);
      n && n !== Ds && Zl(e, n, r);
    }
    var i = jf(t);
    Ps && (i = i.concat(Ps(t)));
    for (var s = Is(e), p = Is(t), m = 0; m < i.length; ++m) {
      var g = i[m];
      if (!Ef[g] && !(r && r[g]) && !(p && p[g]) && !(s && s[g])) {
        var f = Nf(t, g);
        try {
          Of(e, g, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var If = Zl;
const Pf = /* @__PURE__ */ Vi(If);
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
var Ls = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Ri = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Jl.typeOf(e);
}, Na = Object.freeze([]), Nr = Object.freeze({});
function $n(e) {
  return typeof e == "function";
}
function Ms(e) {
  return e.displayName || e.name || "Component";
}
function ao(e) {
  return e && typeof e.styledComponentId == "string";
}
var ln = typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_ATTR || vt.env.SC_ATTR) || "data-styled", io = typeof window < "u" && "HTMLElement" in window, Df = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && vt.env.REACT_APP_SC_DISABLE_SPEEDY : vt.env.SC_DISABLE_SPEEDY !== void 0 && vt.env.SC_DISABLE_SPEEDY !== "" ? vt.env.SC_DISABLE_SPEEDY !== "false" && vt.env.SC_DISABLE_SPEEDY : vt.env.NODE_ENV !== "production")), Lf = {};
function Wn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Mf = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, i = 0; i < r; i++) n += this.groupSizes[i];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, s = i.length, p = s; r >= p; ) (p <<= 1) < 0 && Wn(16, "" + r);
      this.groupSizes = new Uint32Array(p), this.groupSizes.set(i), this.length = p;
      for (var m = s; m < p; m++) this.groupSizes[m] = 0;
    }
    for (var g = this.indexOfGroup(r + 1), f = 0, k = n.length; f < k; f++) this.tag.insertRule(g, n[f]) && (this.groupSizes[r]++, g++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), s = i + n;
      this.groupSizes[r] = 0;
      for (var p = i; p < s; p++) this.tag.deleteRule(i);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var i = this.groupSizes[r], s = this.indexOfGroup(r), p = s + i, m = s; m < p; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), Ca = /* @__PURE__ */ new Map(), Ra = /* @__PURE__ */ new Map(), Mn = 1, ba = function(e) {
  if (Ca.has(e)) return Ca.get(e);
  for (; Ra.has(Mn); ) Mn++;
  var t = Mn++;
  return Ca.set(e, t), Ra.set(t, e), t;
}, Ff = function(e) {
  return Ra.get(e);
}, $f = function(e, t) {
  t >= Mn && (Mn = t + 1), Ca.set(e, t), Ra.set(t, e);
}, Uf = "style[" + ln + '][data-styled-version="5.3.11"]', zf = new RegExp("^" + ln + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), qf = function(e, t, r) {
  for (var n, i = r.split(","), s = 0, p = i.length; s < p; s++) (n = i[s]) && e.registerName(t, n);
}, Bf = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, s = r.length; i < s; i++) {
    var p = r[i].trim();
    if (p) {
      var m = p.match(zf);
      if (m) {
        var g = 0 | parseInt(m[1], 10), f = m[2];
        g !== 0 && ($f(f, g), qf(e, f, m[3]), e.getTag().insertRules(g, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, Wf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ec = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(m) {
    for (var g = m.childNodes, f = g.length; f >= 0; f--) {
      var k = g[f];
      if (k && k.nodeType === 1 && k.hasAttribute(ln)) return k;
    }
  }(r), s = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(ln, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = Wf();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, Hf = function() {
  function e(r) {
    var n = this.element = ec(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet) return i.sheet;
      for (var s = document.styleSheets, p = 0, m = s.length; p < m; p++) {
        var g = s[p];
        if (g.ownerNode === i) return g;
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
}(), Vf = function() {
  function e(r) {
    var n = this.element = ec(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var i = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(i, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Gf = function() {
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
}(), Fs = io, Yf = { isServer: !io, useCSSOMInjection: !Df }, Ia = function() {
  function e(r, n, i) {
    r === void 0 && (r = Nr), n === void 0 && (n = {}), this.options = dr({}, Yf, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && io && Fs && (Fs = !1, function(s) {
      for (var p = document.querySelectorAll(Uf), m = 0, g = p.length; m < g; m++) {
        var f = p[m];
        f && f.getAttribute(ln) !== "active" && (Bf(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ba(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(dr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = i ? new Gf(p) : s ? new Hf(p) : new Vf(p), new Mf(r)));
    var r, n, i, s, p;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (ba(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(ba(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(ba(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, s = "", p = 0; p < i; p++) {
        var m = Ff(p);
        if (m !== void 0) {
          var g = r.names.get(m), f = n.getGroup(p);
          if (g && f && g.size) {
            var k = ln + ".g" + p + '[id="' + m + '"]', E = "";
            g !== void 0 && g.forEach(function(_) {
              _.length > 0 && (E += _ + ",");
            }), s += "" + f + k + '{content:"' + E + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Xf = /(a)(d)/gi, $s = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ii(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = $s(t % 52) + r;
  return ($s(t % 52) + r).replace(Xf, "$1-$2");
}
var rn = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, tc = function(e) {
  return rn(5381, e);
};
function rc(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if ($n(r) && !ao(r)) return !1;
  }
  return !0;
}
var Jf = tc("5.3.11"), Qf = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && rc(t), this.componentId = r, this.baseHash = rn(Jf, r), this.baseStyle = n, Ia.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = Jr(this.rules, t, r, n).join(""), m = Ii(rn(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(i, m)) {
        var g = n(p, "." + m, void 0, i);
        r.insertRules(i, m, g);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, k = rn(this.baseHash, n.hash), E = "", _ = 0; _ < f; _++) {
        var $ = this.rules[_];
        if (typeof $ == "string") E += $;
        else if ($) {
          var O = Jr($, t, r, n), A = Array.isArray(O) ? O.join("") : O;
          k = rn(k, A + _), E += A;
        }
      }
      if (E) {
        var I = Ii(k >>> 0);
        if (!r.hasNameForId(i, I)) {
          var F = n(E, "." + I, void 0, i);
          r.insertRules(i, I, F);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), Kf = /^\s*\/\/.*$/gm, Zf = [":", "[", ".", "#"];
function em(e) {
  var t, r, n, i, s = Nr, p = s.options, m = p === void 0 ? Nr : p, g = s.plugins, f = g === void 0 ? Na : g, k = new vf(m), E = [], _ = /* @__PURE__ */ function(A) {
    function I(F) {
      if (F) try {
        A(F + "}");
      } catch {
      }
    }
    return function(F, U, Y, z, v, ie, de, xe, Re, Le) {
      switch (F) {
        case 1:
          if (Re === 0 && U.charCodeAt(0) === 64) return A(U + ";"), "";
          break;
        case 2:
          if (xe === 0) return U + "/*|*/";
          break;
        case 3:
          switch (xe) {
            case 102:
            case 112:
              return A(Y[0] + U), "";
            default:
              return U + (Le === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(I);
      }
    };
  }(function(A) {
    E.push(A);
  }), $ = function(A, I, F) {
    return I === 0 && Zf.indexOf(F[r.length]) !== -1 || F.match(i) ? A : "." + t;
  };
  function O(A, I, F, U) {
    U === void 0 && (U = "&");
    var Y = A.replace(Kf, ""), z = I && F ? F + " " + I + " { " + Y + " }" : Y;
    return t = U, r = I, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), k(F || !I ? "" : I, z);
  }
  return k.use([].concat(f, [function(A, I, F) {
    A === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, $));
  }, _, function(A) {
    if (A === -2) {
      var I = E;
      return E = [], I;
    }
  }])), O.hash = f.length ? f.reduce(function(A, I) {
    return I.name || Wn(15), rn(A, I.name);
  }, 5381).toString() : "", O;
}
var nc = mt.createContext();
nc.Consumer;
var ac = mt.createContext(), tm = (ac.Consumer, new Ia()), Pi = em();
function ic() {
  return qt(nc) || tm;
}
function oc() {
  return qt(ac) || Pi;
}
var rm = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, s) {
      s === void 0 && (s = Pi);
      var p = n.name + s.hash;
      i.hasNameForId(n.id, p) || i.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return Wn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Pi), this.name + t.hash;
  }, e;
}(), nm = /([A-Z])/, am = /([A-Z])/g, im = /^ms-/, om = function(e) {
  return "-" + e.toLowerCase();
};
function Us(e) {
  return nm.test(e) ? e.replace(am, om).replace(im, "-ms-") : e;
}
var zs = function(e) {
  return e == null || e === !1 || e === "";
};
function Jr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, s = [], p = 0, m = e.length; p < m; p += 1) (i = Jr(e[p], t, r, n)) !== "" && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    return s;
  }
  if (zs(e)) return "";
  if (ao(e)) return "." + e.styledComponentId;
  if ($n(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var g = e(t);
    return Jr(g, t, r, n);
  }
  var f;
  return e instanceof rm ? r ? (e.inject(r, n), e.getName(n)) : e : Ri(e) ? function k(E, _) {
    var $, O, A = [];
    for (var I in E) E.hasOwnProperty(I) && !zs(E[I]) && (Array.isArray(E[I]) && E[I].isCss || $n(E[I]) ? A.push(Us(I) + ":", E[I], ";") : Ri(E[I]) ? A.push.apply(A, k(E[I], I)) : A.push(Us(I) + ": " + ($ = I, (O = E[I]) == null || typeof O == "boolean" || O === "" ? "" : typeof O != "number" || O === 0 || $ in wf || $.startsWith("--") ? String(O).trim() : O + "px") + ";"));
    return _ ? [_ + " {"].concat(A, ["}"]) : A;
  }(e) : e.toString();
}
var qs = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function oo(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return $n(e) || Ri(e) ? qs(Jr(Ls(Na, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : qs(Jr(Ls(e, r)));
}
var sc = function(e, t, r) {
  return r === void 0 && (r = Nr), e.theme !== r.theme && e.theme || t || r.theme;
}, sm = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, lm = /(^-|-$)/g;
function mi(e) {
  return e.replace(sm, "-").replace(lm, "");
}
var lc = function(e) {
  return Ii(tc(e) >>> 0);
};
function xa(e) {
  return typeof e == "string" && vt.env.NODE_ENV === "production";
}
var Di = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, cm = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function um(e, t, r) {
  var n = e[r];
  Di(t) && Di(n) ? cc(n, t) : e[r] = t;
}
function cc(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var i = 0, s = r; i < s.length; i++) {
    var p = s[i];
    if (Di(p)) for (var m in p) cm(m) && um(e, p[m], m);
  }
  return e;
}
var so = mt.createContext();
so.Consumer;
var hi = {};
function uc(e, t, r) {
  var n = ao(e), i = !xa(e), s = t.attrs, p = s === void 0 ? Na : s, m = t.componentId, g = m === void 0 ? function(U, Y) {
    var z = typeof U != "string" ? "sc" : mi(U);
    hi[z] = (hi[z] || 0) + 1;
    var v = z + "-" + lc("5.3.11" + z + hi[z]);
    return Y ? Y + "-" + v : v;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, k = f === void 0 ? function(U) {
    return xa(U) ? "styled." + U : "Styled(" + Ms(U) + ")";
  }(e) : f, E = t.displayName && t.componentId ? mi(t.displayName) + "-" + t.componentId : t.componentId || g, _ = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, $ = t.shouldForwardProp;
  n && e.shouldForwardProp && ($ = t.shouldForwardProp ? function(U, Y, z) {
    return e.shouldForwardProp(U, Y, z) && t.shouldForwardProp(U, Y, z);
  } : e.shouldForwardProp);
  var O, A = new Qf(r, E, n ? e.componentStyle : void 0), I = A.isStatic && p.length === 0, F = function(U, Y) {
    return function(z, v, ie, de) {
      var xe = z.attrs, Re = z.componentStyle, Le = z.defaultProps, se = z.foldedComponentIds, pe = z.shouldForwardProp, _e = z.styledComponentId, Ae = z.target, ve = function(B, b, te) {
        B === void 0 && (B = Nr);
        var j = dr({}, b, { theme: B }), oe = {};
        return te.forEach(function(ee) {
          var re, X, ce, fe = ee;
          for (re in $n(fe) && (fe = fe(j)), fe) j[re] = oe[re] = re === "className" ? (X = oe[re], ce = fe[re], X && ce ? X + " " + ce : X || ce) : fe[re];
        }), [j, oe];
      }(sc(v, qt(so), Le) || Nr, v, xe), Xe = ve[0], Oe = ve[1], Ce = function(B, b, te, j) {
        var oe = ic(), ee = oc(), re = b ? B.generateAndInjectStyles(Nr, oe, ee) : B.generateAndInjectStyles(te, oe, ee);
        return re;
      }(Re, de, Xe), $e = ie, ze = Oe.$as || v.$as || Oe.as || v.as || Ae, le = xa(ze), H = Oe !== v ? dr({}, v, {}, Oe) : v, R = {};
      for (var W in H) W[0] !== "$" && W !== "as" && (W === "forwardedAs" ? R.as = H[W] : (pe ? pe(W, Ns, ze) : !le || Ns(W)) && (R[W] = H[W]));
      return v.style && Oe.style !== v.style && (R.style = dr({}, v.style, {}, Oe.style)), R.className = Array.prototype.concat(se, _e, Ce !== _e ? Ce : null, v.className, Oe.className).filter(Boolean).join(" "), R.ref = $e, tl(ze, R);
    }(O, U, Y, I);
  };
  return F.displayName = k, (O = mt.forwardRef(F)).attrs = _, O.componentStyle = A, O.displayName = k, O.shouldForwardProp = $, O.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Na, O.styledComponentId = E, O.target = n ? e.target : e, O.withComponent = function(U) {
    var Y = t.componentId, z = function(ie, de) {
      if (ie == null) return {};
      var xe, Re, Le = {}, se = Object.keys(ie);
      for (Re = 0; Re < se.length; Re++) xe = se[Re], de.indexOf(xe) >= 0 || (Le[xe] = ie[xe]);
      return Le;
    }(t, ["componentId"]), v = Y && Y + "-" + (xa(U) ? U : mi(Ms(U)));
    return uc(U, dr({}, z, { attrs: _, componentId: v }), r);
  }, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? cc({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(O, "toString", { value: function() {
    return "." + O.styledComponentId;
  } }), i && Pf(O, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), O;
}
var Ye = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = Nr), !Jl.isValidElementType(n)) return Wn(1, String(n));
    var s = function() {
      return r(n, i, oo.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, dr({}, i, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, dr({}, i, { attrs: Array.prototype.concat(i.attrs, p).filter(Boolean) }));
    }, s;
  }(uc, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ye[e] = Ye(e);
});
var dm = function() {
  function e(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = rc(r), Ia.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function(r, n, i, s) {
    var p = s(Jr(this.rules, n, i, s).join(""), ""), m = this.componentId + r;
    i.insertRules(m, m, p);
  }, t.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, t.renderStyles = function(r, n, i, s) {
    r > 2 && Ia.registerId(this.componentId + r), this.removeStyles(r, i), this.createStyles(r, n, i, s);
  }, e;
}();
function Ma(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  var i = oo.apply(void 0, [e].concat(r)), s = "sc-global-" + lc(JSON.stringify(i)), p = new dm(i, s);
  function m(f) {
    var k = ic(), E = oc(), _ = qt(so), $ = Xr(k.allocateGSInstance(s)).current;
    return k.server && g($, f, k, _, E), Au(function() {
      if (!k.server) return g($, f, k, _, E), function() {
        return p.removeStyles($, k);
      };
    }, [$, f, k, _, E]), null;
  }
  function g(f, k, E, _, $) {
    if (p.isStatic) p.renderStyles(f, Lf, E, $);
    else {
      var O = dr({}, k, { theme: sc(k, _, m.defaultProps) });
      p.renderStyles(f, O, E, $);
    }
  }
  return mt.memo(m);
}
const Hn = ({ href: e = null }) => (
  // @ts-ignore
  /* @__PURE__ */ d.jsx(Tr, { label: "Apply now", ariaLabel: "Apply now", href: e, color: "gold" })
);
Hn.propTypes = {
  href: C.string
};
C.string;
function lo({ message: e, type: t }) {
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
lo.propTypes = {
  type: C.oneOf(["error", "info"]).isRequired,
  message: C.string.isRequired
};
function dc({ message: e }) {
  return /* @__PURE__ */ d.jsx(lo, { message: e, type: "error" });
}
function pm({ message: e }) {
  return /* @__PURE__ */ d.jsx(lo, { message: e, type: "info" });
}
const fm = Ye.div`
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
function pc() {
  return /* @__PURE__ */ d.jsxs(fm, { "data-testid": "loader", className: "container ball-loader mt-4", children: [
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
const fc = C.shape({
  ariaLabel: C.string,
  color: C.oneOf(["gold", "maroon", "gray", "dark"]),
  icon: C.string,
  href: C.string,
  label: C.string,
  onClick: C.func,
  size: C.oneOf(["default", "small", "xsmall"])
}), co = {
  url: C.string,
  altText: C.string,
  cssClass: C.arrayOf(C.string)
}, mc = {
  text: C.string,
  cssClass: C.arrayOf(C.string)
}, uo = {
  type: C.oneOf(["video", "youtube"]),
  url: C.string,
  altText: C.string,
  vttUrl: C.string,
  title: C.string
}, mm = {
  url: C.string,
  text: C.string,
  isActive: C.bool
}, Sr = C.shape({
  ...co
}), Pa = C.shape({
  ...mc
}), hm = C.shape({
  ...uo
}), Yr = C.shape({
  ...mm
}), hc = C.shape({
  id: C.string,
  sourceType: C.oneOf(["api", "shared-data-source", "static-json"]),
  // default `api`
  sharedDataSourceId: C.string,
  // only if `dataSourceType == "shared-data-source"``
  data: C.arrayOf(C.object),
  // only if `dataSourceType == "static-json"``
  apiUrl: C.string
  // only if `dataSourceType == "api"``
}), Li = C.shape({
  text: C.string,
  url: C.string
}), Br = C.shape({
  icon: C.arrayOf(C.string),
  title: C.string,
  content: C.string,
  buttonLink: fc
}), Mi = C.arrayOf(
  C.shape({
    title: C.string,
    url: C.string
  })
), gc = C.shape({
  career: Yr,
  growth: C.oneOfType([C.number, C.string]),
  medianSalary: C.string,
  brightOutlook: C.bool,
  greenOccupation: C.bool
}), gm = {
  hideCollegeSchool: C.bool,
  defaultView: C.oneOf(["list-view", "grid-view"]),
  cardDefaultImage: Sr
}, ym = C.shape({
  ...gm
}), po = {
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
}, en = C.shape({
  image: Sr,
  title: C.string,
  text: C.string,
  button: fc
}), Bs = C.shape({
  faculty: en,
  programs: en,
  research: en,
  inclusion: en,
  mentors: en,
  honors: en
}), yc = {
  hide: C.bool,
  sectionIntroText: C.string,
  cards: Bs,
  defaultCards: Bs
};
C.shape({
  ...po
});
const gi = C.shape({
  id: C.oneOfType([C.string, C.number]),
  value: C.string
}), bc = C.shape({
  locations: C.arrayOf(gi),
  asuLocals: C.arrayOf(gi),
  acceleratedConcurrent: gi
});
var pt = {}, cr, ur;
function Fi() {
  throw new Error("setTimeout has not been defined");
}
function $i() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? cr = setTimeout : cr = Fi;
  } catch {
    cr = Fi;
  }
  try {
    typeof clearTimeout == "function" ? ur = clearTimeout : ur = $i;
  } catch {
    ur = $i;
  }
})();
function xc(e) {
  if (cr === setTimeout)
    return setTimeout(e, 0);
  if ((cr === Fi || !cr) && setTimeout)
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
function bm(e) {
  if (ur === clearTimeout)
    return clearTimeout(e);
  if ((ur === $i || !ur) && clearTimeout)
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
var kr = [], nn = !1, Gr, Aa = -1;
function xm() {
  !nn || !Gr || (nn = !1, Gr.length ? kr = Gr.concat(kr) : Aa = -1, kr.length && vc());
}
function vc() {
  if (!nn) {
    var e = xc(xm);
    nn = !0;
    for (var t = kr.length; t; ) {
      for (Gr = kr, kr = []; ++Aa < t; )
        Gr && Gr[Aa].run();
      Aa = -1, t = kr.length;
    }
    Gr = null, nn = !1, bm(e);
  }
}
pt.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  kr.push(new wc(e, t)), kr.length === 1 && !nn && xc(vc);
};
function wc(e, t) {
  this.fun = e, this.array = t;
}
wc.prototype.run = function() {
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
const vm = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, Sc = Object.values(vm), Ws = {
  offeredBy: { icon: "university", title: "Offered by" },
  locations: { icon: "map-marker-alt", title: "Location" },
  firstRequirementMathCourse: {
    icon: "pencil-alt",
    title: "First Required math Course"
  },
  mathIntensity: { icon: "calculator", title: "Math intensity" },
  timeCommitment: { icon: "calendar-alt", title: "Time commitment" },
  stemOptText: { icon: "star", title: "STEM-OPT extension eligible" }
}, kc = "grid-view", Ui = "list-view", Tc = "degree-list-programs", Cc = "Sorry, Something went wrong.", wm = "STEM-OPT for international students on F-1 visas", Sm = `This degree is not found.
  This may be a temporary issue. Please try again in 5 minutes.
  If the issue persists, the degree may no longer be available.`, km = mf(), Tm = (e) => {
  const t = e || km, r = `${t}/assets/img/detail-page`, n = `${t}/assets/img/listing-page`, i = {
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
    detailPageDefault: i,
    listingPageDefault: s
  };
}, Cm = (e) => {
  if (typeof e == "string") return "Degrees";
  const { program: t, cert: r } = e;
  return t === "undergrad" && r === "true" ? "Undergraduate Minors and Certificates" : t === "undergrad" ? "Undergraduate Degrees" : t === "graduate" && r === "true" ? "Graduate Certificates" : t === "graduate" ? "Graduate Degrees" : "Degrees";
}, fo = [
  { id: 0, value: "DTPHX", text: "Downtown Phoenix campus" },
  { id: 1, value: "POLY", text: "Polytechnic campus" },
  { id: 2, value: "TEMPE", text: "Tempe campus" },
  { id: 3, value: "WEST", text: "West Valley campus" },
  { id: 4, value: "ONLNE", text: "ASU Online" }
], Am = fo[4], Ac = [
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
], mo = [
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
], Em = mo[0], zi = (e) => (e == null ? void 0 : e.value) && (e == null ? void 0 : e.value) !== "all", _m = (e) => {
  var t;
  return ((t = [
    ...fo,
    ...Ac,
    ...mo
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
}, Om = {
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
}, Hs = (e, t) => {
  const r = ["TUCSN", "AWC"], n = e.toUpperCase(), i = r.includes(n) ? `${n}-${t}` : n;
  return Om[i];
};
function Ec({ anchorMenu: e }) {
  var n, i;
  const t = (n = e == null ? void 0 : e.externalAnchors) == null ? void 0 : n.map((s) => {
    const { targetIdName: p, text: m } = s;
    return {
      targetIdName: p.startsWith("#") ? p.substring(1) : p,
      text: m,
      icon: null
    };
  }), r = Object.keys(dt).filter((s) => e[s]).map((s) => dt[s]).concat(t || []);
  return /* @__PURE__ */ d.jsx(
    Rl,
    {
      items: r,
      firstElementId: (i = r[0]) == null ? void 0 : i.targetIdName,
      focusFirstFocusableElement: !1
    }
  );
}
Ec.propTypes = {
  anchorMenu: C.shape(po)
};
function jm(e, t) {
  const r = Math.floor(e / t), n = e % t;
  return r + (n > 0 ? 1 : 0);
}
const Nm = "https://degrees.apps.asu.edu", Rm = "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan/", Im = {
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
}, Pm = {
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
}, Vs = (e) => e.map((t) => ({
  title: t.acadPlanDescription,
  url: t.academicOfficeUrl
})).sort((t, r) => t.title.localeCompare(r.title)), Dm = (e) => e == null ? void 0 : e.map((t) => ({
  career: {
    text: t.alternateTitle,
    url: `${Nm}/career-details/${t.onetCode}`
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
function _c(e, t) {
  const r = { ...t, ...e };
  if (r.collegeAcadOrg && (r.collegeOrg = r.collegeAcadOrg, delete r.collegeAcadOrg), r.program) {
    const { program: m } = r;
    r.cert === "true" && m === "all" ? r.degreeType = "GR,UGCM" : m === "all" ? r.degreeType = "GR,UG" : r.cert === "true" && m === "undergrad" ? r.degreeType = "UGCM" : m === "graduate" ? r.degreeType = "GR" : r.degreeType = "UG", delete r.program;
  }
  r.acadPlan && (r.endpoint += `/${r.acadPlan}`, delete r.acadPlan);
  const { endpoint: n, ...i } = r, s = (m, g) => !g || m === void 0 ? "" : Array.isArray(g) ? `${m}=${g}` : g.split(",").map((f) => `${m}=${f.trim()}`).join("&"), p = Object.keys(i).reduce(
    (m, g) => `${m}&${s(
      g,
      r[g]
    )}`,
    ""
  );
  return `${n}?${p}`;
}
function Fa(e, t = "h2") {
  return (
    /** @type {keyof JSX.IntrinsicElements} */
    Sc.includes(e.component) ? e.component : t
  );
}
function qi(e) {
  return typeof e != "string" ? console.error("Invalid string", e) : e == null ? void 0 : e.replace(
    /\w\S*/g,
    (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
  );
}
function Lm(e) {
  return /<\/?[a-z][\s\S]*>/i.test(e);
}
const Oc = "AsuDevTools", Mm = {
  isDebug: !1
};
function Fm() {
  const e = JSON.parse(localStorage.getItem(Oc));
  return e == null ? void 0 : e.isDebug;
}
window.__AsuDevTools = {
  enableDebug(e) {
    const t = JSON.stringify({
      ...Mm,
      isDebug: e
    });
    localStorage.setItem(Oc, t);
  }
};
async function yi(e) {
  return e != null && e.length ? (await Promise.all(
    e.map(async (r) => {
      try {
        return await (await Promise.race([
          fetch(
            `${Rm}${r}?include=academicOfficeUrl&include=acadPlanDescription`
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
function $m(e, t) {
  Promise.all(e).then((r) => {
    const n = r[0], i = r[1];
    t({ accelerateData: n, concurrentData: i });
  }).catch(() => {
    t({ accelerateData: [], concurrentData: [] });
  });
}
function Vn({ contents: e = [] }) {
  const t = Kr("paragrap-");
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.map(
    (r) => Lm(r.text) ? /* @__PURE__ */ d.jsx(
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
  contents: C.arrayOf(Pa)
};
const Um = Ma`
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
`, zm = Ye.div`
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
`, qm = Ye.img`
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
  contentChildren: i = null,
  headingTag: s = "H3"
}) {
  const p = Xr(), m = Xr(), g = Fa(s);
  function f() {
    const E = p.current.offsetHeight;
    m.current.style.height = `${E * 1.2}px`;
  }
  return At(() => {
    f();
    let k;
    const E = () => {
      clearTimeout(k), k = setTimeout(() => f(), 150);
    };
    return window.addEventListener("resize", E), () => window.removeEventListener("resize", E);
  }, [m, p]), /* @__PURE__ */ d.jsxs("div", { className: `uds-image-overlap content-${r}`, children: [
    /* @__PURE__ */ d.jsx(Um, {}),
    /* @__PURE__ */ d.jsx(
      qm,
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
    /* @__PURE__ */ d.jsxs(zm, { ref: p, className: "content-wrapper", children: [
      /* @__PURE__ */ d.jsx(g, { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: e }) }),
      /* @__PURE__ */ d.jsx(Vn, { contents: n }),
      i
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
const jc = Ma`
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
`, Nc = Ye.main`
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
function Bm({
  baseIconClassName1: e,
  baseIconAriaLabel1: t,
  baseIconStyle1: r,
  baseIconAriaLabel2: n,
  baseIconClassName2: i,
  baseIconStyle2: s,
  ariaLabel: p,
  ariaControls: m,
  dataId: g,
  onClick: f = () => null
}) {
  const [k, E] = ut(!1), _ = (A, I, F, U) => /* @__PURE__ */ d.jsx(
    "span",
    {
      style: {
        cursor: "pointer",
        display: I
      },
      children: /* @__PURE__ */ d.jsx(
        "i",
        {
          className: `${A}`,
          "aria-label": F,
          title: F,
          style: U
        }
      )
    }
  ), $ = () => {
    E(!k), f(!k);
  }, O = /* @__PURE__ */ d.jsxs(
    "span",
    {
      "data-testid": g,
      role: "button",
      className: "element-focus",
      tabIndex: 0,
      onKeyDown: (A) => A.key === "Enter" && $(),
      onClick: $,
      "aria-label": p,
      "aria-expanded": k,
      "aria-controls": m,
      children: [
        _(
          e,
          k ? "" : "none",
          t,
          r
        ),
        _(
          i,
          k ? "none" : "",
          n,
          s
        )
      ]
    }
  );
  return rl(() => O, [k]);
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
const bi = (e) => /* @__PURE__ */ d.jsx("span", {}), Wm = ({
  onClick: e = () => null,
  ariaLabel: t,
  ariaControls: r,
  dataId: n
}) => Bm({
  dataId: n,
  baseIconClassName1: "fas fa-chevron-up",
  baseIconClassName2: "fas fa-chevron-down",
  onClick: e,
  ariaLabel: t,
  ariaControls: r
}), dn = Zs(null), ho = ({ listPageProps: e, detailPageProps: t, children: r }) => {
  const { detailPageDefault: n, listingPageDefault: i } = rl(
    () => Tm((e || t).appPathFolder),
    []
  ), s = {
    detailPageDefault: n,
    listingPageDefault: i
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
ho.propTypes = {
  children: C.oneOfType([
    C.arrayOf(C.element),
    C.element
  ]),
  listPageProps: C.shape({}),
  detailPageProps: C.shape({})
};
const Hm = ({
  dataSource: e,
  tableView: t = [],
  programs: r,
  stateFilters: n
}) => {
  const { collegeAcadOrg: i, departmentCode: s } = e;
  At(() => {
    if (!r || !Fm()) return;
    const p = "background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;", m = "font-size:30px;", g = "font-size:24px;", f = "font-size: 18px; margin-left: 0.5rem;";
    console.group("<< ASU Degree Page >>"), console.log("%c🏫 Listing Page Programs 📚", p + m), console.log(
      `%cTotal programs found: ${r.length}`,
      p + f
    ), console.log("%cPrograms found", p + f), console.log(r), console.log(
      `%cTotal programs loaded: ${t.length}`,
      p + f
    ), console.log("%cPrograms loaded", p + f), console.log(t), console.log("%cPage Filters", p + g), console.log(
      `%c- collegeAcadOrg:${i}`,
      p + f
    ), console.log(
      `%c- departmentCode:${s}`,
      p + f
    ), console.log("%cSearch Filters", p + g), console.log(n), console.groupEnd();
  });
}, Gs = (e) => e.degreeType === "UG", Rc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, Ic = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, Vm = (e) => Object.keys(e).length > 0 ? Ic(e) || Rc(e) : !0, In = (e) => {
  const { owners: t } = e;
  return t ? t.reduce(
    (n, i) => n.percentOwned > i.percentOwned ? n : i
  ) : null;
};
function Qr(e = {}) {
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
    isUndergradProgram: () => Gs(e),
    isPhdOrMasters: () => e.degreeDescriptionShort !== "CERT",
    // Only called in functions that already checked if its a grad program
    isGradProgram: () => e.degreeType === "GR",
    // GR is present for grad degrees and grad certificates
    isMinorOrCertificate: () => e.degreeType === "UGCM" || e.degreeType === "GR" && e.acadPlanTypeDescription === "Certificate",
    /** @returns {"undergrad" |  "graduate"} */
    getProgramType: () => Gs(e) ? "undergrad" : "graduate",
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
        const i = t.join(", or<br />");
        r = i ? `<p>${i}</p>` : "";
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
        (i) => i.defaultFlag === !0
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
    getAccelerateDegrees: async () => e.acceleratedAcadPlanCodes ? yi(e.acceleratedAcadPlanCodes) : [],
    getConcurrentDegrees: async () => e.concurrentAcadPlanCodes ? yi(e.concurrentAcadPlanCodes) : [],
    getCollegeDesc: () => {
      var t;
      return (t = In(e)) == null ? void 0 : t.collegeDescription;
    },
    getCollegeUrl: () => {
      var t;
      return ((t = In(e)) == null ? void 0 : t.collegeUrl) || "";
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
      } catch (i) {
        return console.error("Error parsing HTML: ", i.message), "";
      }
      return n;
    },
    /** @return {string} */
    getDepartmentName: () => {
      var t;
      return (t = In(e)) == null ? void 0 : t.departmentDescription;
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
      const { subject: r, catalogNumber: n, description: i } = t;
      return `${r} ${n} - ${i}`;
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
    getConcurrentDegreeMajorMaps: () => yi(e.concurrentAcadPlanCodes),
    getChangeMajor: () => e.changeMajorRequirementsText,
    getAsuCareerOpportunity: () => e.careerOpportunities,
    getGlobalExp: () => {
      var t;
      return (t = e.globalExperienceText) == null ? void 0 : t.trim();
    },
    /** @return {string} */
    getCollegeAcadOrg: () => {
      var t;
      return (t = In(e)) == null ? void 0 : t.collegeAcadOrg;
    },
    /** @return {Array} */
    getCollegeAcadOrgJoint: () => {
      const { owners: t } = e;
      return t ? t.map((n) => n.collegeAcadOrg) : [];
    },
    /** @return {string} */
    getDepartmentCode: () => {
      var t;
      return (t = In(e)) == null ? void 0 : t.departmentAcadOrg;
    },
    /** @return {Object.<string, string>} */
    getGraduateApplyDates: () => e.applicationDeadlines,
    hasGraduateApplyDates: () => Rc(e),
    /** @return {Object.<string, string>} */
    getPlanDeadlines: () => e.applicationDeadlines,
    hasPlanDeadlines: () => Ic(e),
    isValidActiveProgram: () => Vm(e),
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
        const E = (/* @__PURE__ */ new Date()).getFullYear();
        return parseInt(`20${k.substring(0, 2)}`, 10) >= E;
      }, i = (k, E) => k.filter((_) => _.acadSubPlanCode !== E), s = (k, E) => k.some((_) => _.acadSubPlanCode === E), p = (k, E) => E.some(
        (_) => _.acadSubPlanCode === k.acadSubPlanCode
      ), m = t.filter(
        (k) => k.timePeriod && n(k.timePeriod)
      ), g = r.some(
        (k) => k.defaultFlag || s(t, k.acadSubPlanCode)
      ), f = [];
      for (const k of r)
        k.timePeriod && n(k.timePeriod) && !p(k, f) && (f.push(k), t = i(t, k.acadSubPlanCode));
      if (!g) {
        for (const k of r)
          !p(k, f) && s(m, k.acadSubPlanCode) && f.push(k);
        return f;
      }
      for (let k = r.length - 1; k >= 0 && t.length !== 0; k -= 1) {
        const E = r[k];
        if (p(E, f)) continue;
        const _ = E.defaultFlag, $ = s(
          t,
          E.acadSubPlanCode
        );
        (_ || $) && (t = i(t, E.acadSubPlanCode), f.push(E));
      }
      return f;
    },
    getSubPln: () => e.subplans
  };
}
function Gm(e) {
  const t = e.getProgramType(), r = [], n = (m) => ({
    text: m,
    url: ""
  }), i = (m) => ({
    text: "Online",
    url: m
  }), s = e.getCampusList().map((m) => m.campusCode);
  s.length > 0 && r.push(
    ...s.map(
      (m) => m === "ONLNE" && i(e.getCurriculumUrl()) || Hs(m, t) || n(m)
    )
  );
  const p = e.getCampusWue();
  return p && r.push(
    Hs(p, t) || n(p)
  ), r;
}
const Ym = (e, t) => {
  const r = { ...e };
  return r.globalOpportunity && !t.getGlobalExp() && (r.globalOpportunity = !1), r.careerOutlook && !t.getAsuCareerOpportunity() && (r.careerOutlook = !1), r.attendOnline && !t.getCurriculumUrl() && (r.attendOnline = !1), r;
}, Xm = (e) => {
  var i;
  const t = Object.values(e).filter(
    (s) => s === !0
  );
  return ((i = e == null ? void 0 : e.externalAnchors) == null ? void 0 : i.length) > 0 || t.length > 0;
};
function Jm(e) {
  return "";
}
function Qm(e) {
  return "";
}
function Km() {
  return "";
}
function $a(e, t) {
  let r = t || "";
  return r = r.replaceAll("{INSTITUTION_CODE}", e.getInstitution()).replaceAll("{ACAD_PLAN_CODE}", e.getAcadPlan()), r;
}
function Pc(e, t) {
  return `${$a(e, t)}#${dt.flexibleDegreeOptions.acceleratedId}`;
}
function Ys({
  programs: e = [],
  filters: {
    collegeAcadOrg: t,
    departmentCode: r,
    acceleratedConcurrent: n,
    locations: i = [],
    keyword: s,
    blacklistAcadPlans: p,
    program: m,
    showCerts: g
  }
}) {
  const f = (z) => !t || z.getCollegeAcadOrgJoint().includes(t), k = (z) => !r || z.getDepartmentCode().includes(r), E = (z) => {
    var v;
    return !i.length || ((v = z.getCampusList()) == null ? void 0 : v.some((ie) => i.some((de) => de.value === ie.campusCode)));
  }, _ = (z = {}) => {
    var v;
    return !zi(n) || ((v = z[n.value]) == null ? void 0 : v.length) > 0;
  }, $ = (z, v) => !!(!v || new RegExp(v, "i").test(z.getMajorDesc())), O = (z, v) => !!(!v || new RegExp(v, "i").test(z.getFullDescription())), A = (z) => !(p != null && p.includes(z.getAcadPlan())), I = (z) => m === "undergrad" ? !0 : g === "true" ? z.isMinorOrCertificate() : z.isPhdOrMasters(), F = (z) => {
    const v = Qr(z);
    return f(v) && k(v) && E(v) && _(z) && A(v) && I(v);
  }, U = [], Y = [];
  return e.filter((z) => {
    const v = Qr(z), ie = $(v, s), de = O(
      v,
      s
    );
    return (ie || de) && F(z) ? (ie ? U.push(z) : Y.push(z), !0) : !1;
  }), U.concat(Y);
}
const Zm = (e) => e.sort(
  (r, n) => r.acadPlanMarketingDescription.localeCompare(
    n.acadPlanMarketingDescription
  )
), Rr = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: i = "",
  text: s = "",
  region: p = "",
  component: m = ""
}) => {
  const { dataLayer: g } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: p.toLowerCase(),
    section: i.toLowerCase(),
    text: s.toLowerCase(),
    component: m.toLowerCase()
  };
  g && g.push(f);
};
function go({ breadcrumbs: e, section: t }) {
  const r = Kr("breadcrumb-");
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
go.propTypes = {
  breadcrumbs: C.arrayOf(Yr),
  section: C.string
};
const eh = () => /* @__PURE__ */ d.jsx("div", { className: "container", "data-testid": "browse-title", children: /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Browse degrees" }) }) }), xi = ({
  id: e,
  label: t,
  selected: r,
  multiple: n,
  options: i,
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
      children: i == null ? void 0 : i.map((p) => /* @__PURE__ */ d.jsx(
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
] }), th = Ye.div`
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
`, rh = Ye.button`
  font-weight: 400;
  text-decoration: underline;
`, nh = {
  event: "select",
  action: "click",
  name: "onclick"
}, ah = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link"
}, Pn = {
  isActive: !1,
  locations: [],
  asuLocals: [],
  acceleratedConcurrent: { value: "all", text: "" },
  keyword: null,
  blacklistAcadPlans: []
}, vi = (e) => ({
  id: e.id,
  value: e.value,
  text: e.text
}), ih = (e) => e.map((t) => t.text).join(", "), Xs = (e, t) => {
  Rr({ ...nh, type: e, text: t });
}, Js = (e) => {
  Rr({ ...ah, text: e });
}, Dc = ({ value: e, onChange: t, onApply: r, onClean: n }) => {
  const i = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (g, { target: { selectedOptions: f } }) => {
      let k = [], E = [];
      const _ = Array.from(f, vi), { locations: $, asuLocals: O } = e;
      ({
        locationsRender: () => {
          k = _, E = O;
        },
        asuLocalsRender: () => {
          E = _, k = $;
        }
      })[`${g}Render`](), t({
        ...e,
        locations: k,
        asuLocals: E
      }), Xs({
        locations: "location or online",
        asuLocals: "as local"
      }[g], ih(_));
    }
  ), s = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (g, { target: { selectedOptions: f } }) => {
      t({ ...e, [g]: vi(f[0]) }), Xs(
        "accelerated/concurrent",
        vi(f[0]).text
      );
    }
  ), p = () => {
    r == null || r({
      ...e,
      isActive: !0
    });
  }, m = () => {
    t(Pn), n == null || n();
  };
  return /* @__PURE__ */ d.jsxs(th, { className: "container", "data-testid": "filters", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Filter your results" }),
    /* @__PURE__ */ d.jsxs("form", { className: "mt-3 uds-form row", children: [
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        xi,
        {
          multiple: !0,
          id: "locations",
          label: "Campuses or online",
          selected: e.locations.map((g) => g.value),
          options: fo,
          onChange: i
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        xi,
        {
          multiple: !0,
          id: "asuLocals",
          label: "ASU location, ASU Local",
          selected: e.asuLocals.map((g) => g.value),
          options: Ac,
          onChange: i
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        xi,
        {
          id: "acceleratedConcurrent",
          label: "Accelerated, Concurrent",
          selected: e.acceleratedConcurrent.value,
          options: mo,
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
            p(), Js("apply filters");
          }
        }
      ),
      /* @__PURE__ */ d.jsx(
        rh,
        {
          "data-testid": "btn-clear-filters",
          className: "btn btn-link",
          onClick: () => {
            m(), Js("clean filters");
          },
          children: "Clear filters"
        }
      )
    ] })
  ] });
};
Dc.propTypes = {
  value: bc,
  onChange: C.func,
  onApply: C.func,
  onClean: C.func
};
function Lc({
  value: { isActive: e, locations: t, asuLocals: r, acceleratedConcurrent: n } = {},
  onRemove: i
}) {
  const s = Kr("filter-"), p = (t == null ? void 0 : t.length) + (r == null ? void 0 : r.length) + (zi(n) ? 1 : 0), m = (g, f) => {
    const { text: k } = f;
    return /* @__PURE__ */ d.jsxs(
      "span",
      {
        tabIndex: -1,
        role: "button",
        "aria-label": `Remove filter ${k}`,
        "data-filter-id": g,
        onKeyDown: () => i(g, f),
        onClick: () => i(g, f),
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
      t.map((g) => m("locations", g)),
      r.map((g) => m("asuLocals", g)),
      (zi(n) ? [n] : []).map((g) => m("acceleratedConcurrent", g))
    ] }) })
  ] });
}
Lc.propTypes = {
  value: bc,
  onRemove: C.func
};
const oh = Ye.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`, sh = Ye.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;
function lh({
  applyNowUrl: e,
  title: t,
  contents: r,
  photoGrid: n
}) {
  const i = Fa(t);
  return /* @__PURE__ */ d.jsx(
    "section",
    {
      className: "container",
      "data-type": "text-photo-grid",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ d.jsx(i, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${sn(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ d.jsx(Vn, { contents: r }),
          /* @__PURE__ */ d.jsx(Hn, { href: e })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-7 d-none d-sm-none d-md-block", children: /* @__PURE__ */ d.jsx(oh, { className: "row", children: n.images.map((s, p) => /* @__PURE__ */ d.jsx(
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
function ch({
  applyNowUrl: e,
  title: t,
  contents: r,
  image: n,
  video: i
}) {
  const s = Fa(t);
  return /* @__PURE__ */ d.jsx(
    sh,
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
          i && /* @__PURE__ */ d.jsx(
            to,
            {
              type: i.type,
              url: i.url,
              vttUrl: i.vttUrl,
              title: i.title,
              className: "mt-0"
            }
          ),
          n && /* @__PURE__ */ d.jsx("div", { className: "uds-img", children: /* @__PURE__ */ d.jsx("img", { src: n.url, className: "img-fluid", alt: n.altText }) })
        ] })
      ] })
    }
  );
}
function uh({
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
const dh = ({ applyNowUrl: e, title: t, contents: r }) => {
  const n = Fa(t);
  return /* @__PURE__ */ d.jsx("section", { className: "container", "data-type": "text", "data-testid": "intro-content", children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-5", children: /* @__PURE__ */ d.jsx(n, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${sn(t.cssClass)}`, children: t.text }) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7", children: [
      /* @__PURE__ */ d.jsx(Vn, { contents: r }),
      /* @__PURE__ */ d.jsx(Hn, { href: e })
    ] })
  ] }) });
}, yo = ({
  applyNowUrl: e,
  type: t,
  title: r,
  contents: n,
  image: i,
  video: s,
  photoGrid: p
}) => ({
  text: () => dh({ applyNowUrl: e, title: r, contents: n }),
  "text-media": () => ch({
    applyNowUrl: e,
    title: r,
    contents: n,
    image: i,
    video: s
  }),
  "text-image-overlay": () => uh({ applyNowUrl: e, title: r, contents: n, image: i }),
  "text-photo-grid": () => lh({
    applyNowUrl: e,
    title: r,
    contents: n,
    photoGrid: p
  }),
  undefined: () => (console.error(
    `the type '${t}' is not supported by the 'IntroContent' component.`
  ), null)
})[t]();
yo.propTypes = {
  applyNowUrl: C.string,
  type: C.oneOf([
    "text",
    "text-media",
    "text-image-overlay",
    "text-photo-grid"
  ]).isRequired,
  video: C.shape({ ...uo }),
  image: C.shape({ ...co }),
  header: Pa,
  title: C.shape({
    ...mc,
    component: C.oneOf(Sc)
  }),
  contents: C.arrayOf(Pa),
  photoGrid: C.shape({
    images: C.arrayOf(Sr)
  })
};
const Ua = {
  programs: C.arrayOf(C.object),
  totalRows: C.number,
  loading: C.bool,
  actionUrls: C.shape({
    applyNowUrl: C.string,
    majorInfoUrl: C.string,
    majorInfoOnlineUrl: C.string
  }),
  degreesPerPage: C.number
}, ph = Ye.div`
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
`, Mc = ({ programs: e, actionUrls: t }) => {
  var p, m, g, f, k;
  const { state: r } = qt(dn), n = (m = (p = r == null ? void 0 : r.listPageProps) == null ? void 0 : p.programList) == null ? void 0 : m.settings, i = ((k = (f = (g = r == null ? void 0 : r.listPageProps) == null ? void 0 : g.programList) == null ? void 0 : f.dataSource) == null ? void 0 : k.program) === "graduate", s = e.map((E) => {
    const _ = Qr(E), $ = () => {
      var U;
      const I = _.isOnline() ? _.getOnlineMajorMapURL() : _.getGeneralDegreeMajorMap();
      let F;
      try {
        F = `<a href=${(U = new URL(I)) == null ? void 0 : U.toString()}>${_.getRequiredCoursesLabel()} Map</a>`;
      } catch {
        return "";
      }
      return F;
    }, O = () => `<div>
        ${_.hasConcurrentDegrees() ? "<div className='cell-container'>concurrent</div>" : ""}
        ${_.hasAccelerateDegrees() ? `<div className="cell-container">
                <a href=${Pc(
      _,
      t.majorInfoUrl
    )}>
                  4+1 years
                </a>
              </div>` : ""}
    </div>`;
    return {
      content: {
        header: _.getMajorDesc(),
        body: `<ul>
        <li>
          <strong>Major:</strong>
          <br />
            <a href=${$a(_, t.majorInfoUrl)}>
              ${_.getMajorDesc()}
            </a>
        </li>
        <li>
          <strong>Degree:</strong>
          <br />${_.getDegree()}
        </li>
        ${i ? "" : `<li>
              <strong>Required Courses:</strong>
              <br />${$()}
            </li>`}
        <li>
          <strong>Campus or location:</strong>
          <br />${_.getCampusList().map((A) => qi(A.campusCode)).join(", ")}
        </li>
        <li>
          <strong>Accelerated/Concurrent:</strong>
          <br />${O() || "-"}
        </li>
        ${n != null && n.hideCollegeSchool ? "" : ` <li>
                  <strong>College/School:</strong>
                  <br />
                  <a href=${_.getCollegeUrl()}>
                    ${_.getCollegeDesc()}
                  </a>
                </li>`}
      </ul>`
      }
    };
  });
  return /* @__PURE__ */ d.jsx(ph, { "data-testid": "accordion-view", children: /* @__PURE__ */ d.jsx(Ji, { cards: s }) });
};
Mc.propTypes = {
  ...Ua
};
const fh = Ye.section`
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
function Fc({ programs: e, loading: t, actionUrls: r }) {
  var g, f, k, E;
  const { defaultState: n, state: i } = qt(dn), s = (E = (k = (f = (g = i == null ? void 0 : i.listPageProps) == null ? void 0 : g.programList) == null ? void 0 : f.settings) == null ? void 0 : k.cardDefaultImage) == null ? void 0 : E.url, p = n.detailPageDefault.hero.image.url, m = s || p;
  return /* @__PURE__ */ d.jsx(
    fh,
    {
      id: Tc,
      className: "container row",
      "data-loading": t,
      "data-testid": "grid-view",
      children: e.map((_) => {
        const $ = Qr(_);
        return /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-4 col-lg-3 mb-2", children: /* @__PURE__ */ d.jsx(
          ht,
          {
            type: "degree",
            horizontal: !1,
            clickable: !1,
            image: m,
            imageAltText: "An example image",
            title: $.getMajorDesc(),
            linkLabel: "View Program Details",
            linkUrl: $a($, r.majorInfoUrl),
            buttons: [
              {
                color: "maroon",
                size: "small",
                label: "Reqeuest Info",
                href: Km()
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
Fc.propTypes = {
  ...Ua
};
const mh = [
  {
    dataKey: "Major",
    label: "Major",
    className: "major",
    sortable: !0,
    contentTemplate: ({ resolver: e, rowIndex: t, actionUrls: r, onClick: n }) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
      /* @__PURE__ */ d.jsx("a", { href: $a(e, r == null ? void 0 : r.majorInfoUrl), children: e.getMajorDesc() }),
      /* @__PURE__ */ d.jsx(
        Wm,
        {
          dataId: "show-row-detail",
          ariaLabel: `${e.getMajorDesc()} arrow`,
          ariaControls: `row-info-${t}`,
          onClick: (i) => n(t, i)
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
        bi,
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
      var i;
      const r = e.isOnline() ? e.getOnlineMajorMapURL() : e.getGeneralDegreeMajorMap();
      let n;
      try {
        const s = (i = new URL(r)) == null ? void 0 : i.toString();
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
      const t = Kr("campus-");
      return /* @__PURE__ */ d.jsx("div", { children: e.getCampusList().map((r, n, i) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
        /* @__PURE__ */ d.jsx("span", { children: `${qi(
          _m(r.campusCode)
        )}${n < i.length - 1 ? ", " : ""}` }, r.campusCode),
        /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx(
          bi,
          {
            popover: {
              title: qi(r.campusCode),
              body: () => fetch(Jm(r.campusCode)),
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
        /* @__PURE__ */ d.jsx("a", { href: Pc(e, t.majorInfoUrl), children: "4+1 years" }),
        /* @__PURE__ */ d.jsx(
          bi,
          {
            popover: {
              title: "4+1 years",
              body: () => fetch(Qm(e.getAcadPlan())),
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
], hh = oo`
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
`, gh = Ye.table`
  ${hh}
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
`, yh = ({ resolver: e, id: t }) => {
  const r = Eu(), n = (i) => {
    i.key === "Enter" && (r == null || r.current.click());
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
}, bh = ({ resolver: e }) => /* @__PURE__ */ d.jsxs("div", { children: [
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
] }), xh = Kr("row-"), $c = ({ programs: e, totalRows: t, loading: r, actionUrls: n }) => {
  var k, E;
  const i = mt.useRef(null), s = mt.useRef(null), { state: p } = qt(dn), m = (E = (k = p == null ? void 0 : p.listPageProps) == null ? void 0 : k.programList) == null ? void 0 : E.settings;
  let g = mh;
  p.listPageProps.programList.dataSource.program === "graduate" && (g = g.filter((_) => _.dataKey !== "RequiredCourses")), m != null && m.hideCollegeSchool && (g = g.filter((_) => _.dataKey !== "CollegeSchool"));
  const f = (_, $) => {
    const O = s.current.children;
    Array.prototype.forEach.call(
      O,
      (I, F) => F !== _ && I.setAttribute("data-is-open", "false")
    ), s.current.children[_].setAttribute("data-is-open", String($));
  };
  return /* @__PURE__ */ d.jsx("section", { className: "container mb-4", "data-testid": "list-view", children: /* @__PURE__ */ d.jsxs(
    gh,
    {
      id: Tc,
      ref: i,
      "data-loading": r,
      title: `${t} program found`,
      children: [
        /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsx("tr", { role: "row", children: g.map((_) => {
          var $;
          return /* @__PURE__ */ d.jsx(
            "th",
            {
              tabIndex: 0,
              className: `${_.className}`,
              scope: "col",
              "aria-label": _.ariaLabel,
              children: (($ = _.headerTemplate) == null ? void 0 : $.call(_)) || /* @__PURE__ */ d.jsx("span", { children: _.label })
            },
            _.dataKey
          );
        }) }) }),
        /* @__PURE__ */ d.jsxs("tbody", { ref: s, "data-testid": "program-rows", children: [
          e.length === 0 ? /* @__PURE__ */ d.jsx("tr", { role: "presentation", children: /* @__PURE__ */ d.jsx(
            "td",
            {
              colSpan: g.length,
              "aria-label": "No result found for the filters applied",
              children: " "
            }
          ) }) : null,
          // programs
          e.map((_, $) => {
            const O = xh.next().value, A = $ * 2, I = Qr(_);
            return /* @__PURE__ */ d.jsxs(nl, { children: [
              /* @__PURE__ */ d.jsx("tr", { role: "row", children: g.map((F) => {
                var U;
                return /* @__PURE__ */ d.jsx(
                  "td",
                  {
                    className: `${F.className}`,
                    children: (U = F.contentTemplate) == null ? void 0 : U.call(F, {
                      resolver: I,
                      col: F,
                      row: _,
                      rowIndex: A,
                      onClick: f,
                      actionUrls: n
                    })
                  },
                  `${O}-${F.dataKey}`
                );
              }) }, O),
              /* @__PURE__ */ d.jsxs(
                "tr",
                {
                  id: `row-info-${A}`,
                  className: "row-info",
                  children: [
                    /* @__PURE__ */ d.jsx("td", { colSpan: 3, children: yh({ resolver: I, id: `${O}-more-text` }) }, `${O}-info`),
                    /* @__PURE__ */ d.jsx("td", { colSpan: 2, children: bh({ resolver: I }) }, `${O}-extra-info`)
                  ]
                },
                `${O}-row-info`
              )
            ] }, O);
          })
        ] })
      ]
    }
  ) });
};
$c.propTypes = {
  ...Ua
};
const vh = Ma`

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
`, wh = {
  [kc]: Fc,
  [Ui]: $c
};
function Uc({
  dataViewComponent: e,
  loading: t,
  programs: r,
  actionUrls: n,
  degreesPerPage: i
}) {
  let s;
  i ? typeof i != "number" && (s = parseInt(i, 10)) : s = 8;
  const p = i || s, m = jm(r.length, p), g = wh[e], [f, k] = ut([]), E = (_, $) => {
    const O = ($ - 1) * p, A = O + p;
    k(r.slice(O, A));
  };
  return At(() => {
    k(r.slice(0, p));
  }, [r]), /* @__PURE__ */ d.jsxs("section", { "data-testid": "program-list", "data-view-type": e, children: [
    /* @__PURE__ */ d.jsx(vh, {}),
    /* @__PURE__ */ d.jsx("div", { className: "desktop-view", children: /* @__PURE__ */ d.jsx(
      g,
      {
        loading: t,
        programs: f,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: i || s
      }
    ) }),
    /* @__PURE__ */ d.jsx("div", { className: "mobile-view mb-2", children: /* @__PURE__ */ d.jsx(
      Mc,
      {
        loading: t,
        programs: f,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: i || s
      }
    ) }),
    r.length > 0 ? /* @__PURE__ */ d.jsx(
      Fl,
      {
        totalNumbers: 7,
        type: "default",
        background: "white",
        totalPages: m,
        onChange: E,
        showFirstButton: !0,
        showLastButton: !0
      }
    ) : /* @__PURE__ */ d.jsx("section", { className: "container no-space", children: /* @__PURE__ */ d.jsx(pm, { message: "No result found for the filters applied" }) })
  ] });
}
Uc.propTypes = {
  dataViewComponent: C.string,
  ...Ua,
  degreesPerPage: C.number
};
const Sh = Ye.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow:
      0px 0px 0px 2px #ffffff,
      0px 0px 0px 4px #191919 !important;
  }
`, zc = ({ value: e, onChange: t, onSearch: r }) => {
  const [n, i] = ut(!1);
  let s;
  At(() => () => clearTimeout(s), []);
  const p = (m) => {
    Rr({
      event: "search",
      action: "type",
      name: "onenter",
      type: "search degree programs",
      text: m
    });
  };
  return /* @__PURE__ */ d.jsx(
    Sh,
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
            m.preventDefault(), r(), i(!0), s = setTimeout(() => i(!1), 500), clearTimeout(s);
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
zc.propTypes = {
  value: C.string,
  onChange: C.func,
  onSearch: C.func
};
const kh = Ye(Nc)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`, Th = Ma`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`, Ch = Ye.div.attrs({ className: "container" })`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`, bo = ({
  appPathFolder: e,
  actionUrls: t,
  hasSearchBar: r = !0,
  hasFilters: n = !0,
  hero: i,
  introContent: s,
  programList: p,
  degreesPerPage: m
}) => {
  var te;
  const [{ data: g, loading: f, error: k }, E] = $l(), [_, $] = ut(!1), [O, A] = ut([]), [I, F] = ut([]), [U, Y] = ut(""), z = (te = p == null ? void 0 : p.settings) == null ? void 0 : te.defaultView, v = [Ui, kc].includes(z) ? z : Ui, [ie, de] = ut(v), xe = _c(p.dataSource, Im), { defaultState: Re } = qt(dn), { listingPageDefault: Le } = Re, {
    collegeAcadOrg: se,
    departmentCode: pe,
    showInactivePrograms: _e,
    blacklistAcadPlans: Ae,
    program: ve,
    cert: Xe
  } = p.dataSource, [Oe, Ce] = ut({
    ...Pn
  }), [$e, ze] = ut({
    ...Pn
  });
  Hm({
    dataSource: p.dataSource,
    tableView: O,
    programs: g,
    stateFilters: Oe
  }), At(() => {
    typeof window < "u" && Yl({
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
    let j = Zm(g || []);
    j = Ys({
      programs: j,
      filters: {
        collegeAcadOrg: se,
        departmentCode: pe,
        blacklistAcadPlans: Ae,
        program: ve,
        showCerts: Xe
      }
    }), F(j), A(j);
  }, [g, m]);
  const le = async (j) => {
    const { acceleratedConcurrent: oe, locations: ee, asuLocals: re, keyword: X } = j;
    $(!0), E(xe);
    const ce = Ys({
      programs: I,
      filters: {
        collegeAcadOrg: se,
        departmentCode: pe,
        acceleratedConcurrent: oe,
        locations: re.length > 0 ? ee.concat(Am) : ee,
        keyword: X,
        blacklistAcadPlans: Ae,
        program: ve
      }
    });
    Ce({ ...j }), ze({ ...j }), A(ce), $(!1);
  }, H = async () => {
    const j = {
      ...$e,
      keyword: U
    };
    le(j);
  }, R = (j) => {
    f || _ || le(j);
  }, W = async (j) => {
    Ce(j);
  }, B = () => {
    Ce(Pn), ze(Pn), A(I), Y("");
  }, b = (j, { value: oe }) => {
    const ee = j === "acceleratedConcurrent" ? Em : $e[j].filter((X) => X.value !== oe), re = {
      ...$e,
      [j]: ee
    };
    le(re);
  };
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(jc, {}),
    /* @__PURE__ */ d.jsx(Th, {}),
    k && /* @__PURE__ */ d.jsx(dc, { message: Cc }),
    i != null && i.hide ? null : /* @__PURE__ */ d.jsx("section", { "data-testid": "hero", children: /* @__PURE__ */ d.jsx(
      qn,
      {
        image: (i == null ? void 0 : i.image) || Le.hero.image,
        title: {
          text: Cm(p.dataSource),
          highlightColor: "gold",
          ...i == null ? void 0 : i.title,
          maxWidth: "100%"
        },
        contents: i == null ? void 0 : i.contents
      }
    ) }),
    /* @__PURE__ */ d.jsxs(kh, { "data-is-loading": f, className: "main-section dg-margin-top", children: [
      (s == null ? void 0 : s.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        go,
        {
          breadcrumbs: s.breadcrumbs,
          section: i ? i.title.text : ""
        }
      ) }),
      s ? /* @__PURE__ */ d.jsx(
        yo,
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
        /* @__PURE__ */ d.jsx(eh, {}),
        r ? /* @__PURE__ */ d.jsx(
          zc,
          {
            value: U,
            onChange: Y,
            onSearch: H
          }
        ) : null,
        n ? /* @__PURE__ */ d.jsx(
          Dc,
          {
            value: Oe,
            onChange: W,
            onApply: R,
            onClean: B
          }
        ) : null,
        /* @__PURE__ */ d.jsx(Ch, {})
      ] }) : null,
      /* @__PURE__ */ d.jsx("section", { className: "container", children: /* @__PURE__ */ d.jsx("div", { className: "d-flex justify-content-between filter-switch-container", children: n ? /* @__PURE__ */ d.jsx(
        Lc,
        {
          value: $e,
          onRemove: b
        }
      ) : null }) }),
      f || _ ? /* @__PURE__ */ d.jsx(pc, {}) : /* @__PURE__ */ d.jsx(
        Uc,
        {
          dataViewComponent: ie,
          loading: f || _,
          programs: O,
          actionUrls: t,
          degreesPerPage: m
        }
      )
    ] })
  ] });
};
bo.propTypes = {
  appPathFolder: C.string,
  actionUrls: C.shape({
    applyNowUrl: C.string
  }),
  hasSearchBar: C.bool,
  hasFilters: C.bool,
  hero: C.shape(qn.propTypes),
  introContent: C.shape(yo.propTypes),
  programList: C.shape({
    dataSource: hc,
    settings: ym
  }),
  degreesPerPage: C.number
};
const qc = (e) => /* @__PURE__ */ d.jsx(ho, { listPageProps: e, children: /* @__PURE__ */ d.jsx(bo, { ...e }) });
qc.propTypes = bo.propTypes;
const Ah = Ye.section`
  position: relative;
  padding-top: var(--uds-dp-section-margin);
  padding-bottom: var(--uds-dp-section-margin);
`, Eh = Ye.div`
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
function _h() {
  return /* @__PURE__ */ d.jsxs(
    Ah,
    {
      className: "container",
      id: dt.affordingCollege.targetIdName,
      "data-testid": "affording-college",
      children: [
        /* @__PURE__ */ d.jsx(Eh, {}),
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
const Bc = Ye.ul`
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
`, Oh = ({
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
      Bc,
      {
        className: bf("", {
          "mb-0": n.length === 0
        }),
        children: r.map(({ label: i, href: s }) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
          Tr,
          {
            ariaLabel: i,
            color: "maroon",
            href: s,
            label: i,
            size: "small"
          }
        ) }, i))
      }
    ),
    n.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "mt-2 mb-4", children: /* @__PURE__ */ d.jsx(Ji, { cards: n, openedCard: 1 }) })
  ] });
}, jh = (e) => {
  const t = "View Curriculum";
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("p", { children: "View curriculum below for a detailed list of courses and other requirements." }),
    /* @__PURE__ */ d.jsx(Bc, { children: /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
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
function Wc({
  graduateRequirements: e,
  transferRequirements: t,
  isMinorOrCertificate: r,
  additionalRequirements: n,
  minorRequirements: i,
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
          Oh({
            transferRequirements: t,
            additionalRequirements: n
          })
        ]
      }
    );
  const p = r ? "Program requirements" : "Degree requirements", m = e || i;
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
          ) : jh(s)
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
Wc.propTypes = {
  graduateRequirements: C.string,
  transferRequirements: C.string,
  isMinorOrCertificate: C.bool,
  additionalRequirements: C.string,
  minorRequirements: C.string,
  majorMapURL: C.string
};
const Wr = ({ item: e, type: t }) => {
  const r = Kr("glance-"), n = () => typeof e == "object" ? e.map((i, s) => {
    const p = ["", "#"].includes(i.url) ? null : i.url;
    let m = "";
    return s > 0 && s < e.length - 1 && (m = ", "), s === e.length - 1 && e.length > 1 && (m = " or "), /* @__PURE__ */ d.jsxs(nl, { children: [
      m,
      /* @__PURE__ */ d.jsx("a", { href: p, rel: "noreferrer", target: "_blank", children: i.text })
    ] }, r.next().value);
  }) : e;
  return /* @__PURE__ */ d.jsxs("li", { children: [
    /* @__PURE__ */ d.jsx("i", { className: `fas fa-${Ws[t].icon} fa-li` }),
    /* @__PURE__ */ d.jsxs("strong", { children: [
      Ws[t].title,
      ": "
    ] }),
    n()
  ] });
};
Wr.propTypes = {
  item: C.oneOfType([
    C.arrayOf(Li),
    C.string
  ]),
  type: C.string
};
const Hc = ({
  offeredBy: e,
  locations: t,
  firstRequirementMathCourse: r,
  mathIntensity: n,
  timeCommitment: i,
  stemOptText: s
}) => /* @__PURE__ */ d.jsxs(
  "section",
  {
    id: dt.atAGlance.targetIdName,
    "data-testid": "at-aglance",
    children: [
      /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "At a glance: program details" }) }),
      /* @__PURE__ */ d.jsxs("ul", { className: "uds-list fa-ul maroon pt-2 pb-0 pe-0", children: [
        e && /* @__PURE__ */ d.jsx(Wr, { item: [e], type: "offeredBy" }),
        t && /* @__PURE__ */ d.jsx(Wr, { item: t, type: "locations" }),
        r && /* @__PURE__ */ d.jsx(
          Wr,
          {
            item: r,
            type: "firstRequirementMathCourse"
          }
        ),
        n && /* @__PURE__ */ d.jsx(Wr, { item: n, type: "mathIntensity" }),
        i && /* @__PURE__ */ d.jsx(Wr, { item: i, type: "timeCommitment" }),
        s && /* @__PURE__ */ d.jsx(Wr, { item: s, type: "stemOptText" })
      ] })
    ]
  }
);
Hc.propTypes = {
  offeredBy: Li.isRequired,
  locations: C.arrayOf(Li).isRequired,
  firstRequirementMathCourse: C.string.isRequired,
  mathIntensity: C.string,
  timeCommitment: C.string,
  stemOptText: C.string
};
const Nh = `
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;
function Vc({ image: e, learnMoreLink: t, contents: r }) {
  const n = `linear-gradient(180deg, #19191900 0%, #191919c9 100%),url('${e.url}')`, i = Kr("attend-online-");
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
        /* @__PURE__ */ d.jsx("div", { className: "card-body", children: r ? r.map((s) => /* @__PURE__ */ d.jsx("p", { children: s }, i.next().value)) : /* @__PURE__ */ d.jsx("p", { children: Nh }) }),
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
Vc.propTypes = {
  learnMoreLink: C.string,
  image: Sr,
  contents: C.arrayOf(
    C.shape({
      text: C.string
    })
  )
};
const Rh = Ye.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Gc = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  Rh,
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
Gc.propTypes = un.propTypes;
const Ih = Ye.div`
  & p:last-of-type {
    margin-bottom: 0;
  }

  & a {
    word-break: break-word;
  }
`;
function Yc({ content: e }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: dt.changeMajorRequirements.targetIdName,
      className: "change-your-major",
      "data-testid": "change-your-major",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Change your major requirements for current students" }) }),
        /* @__PURE__ */ d.jsx(
          Ih,
          {
            dangerouslySetInnerHTML: zt(e)
          }
        )
      ]
    }
  );
}
Yc.propTypes = {
  content: C.string
};
function Xc({ content: e = "" }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-testid": "custom-text",
      className: "mt-3",
      dangerouslySetInnerHTML: zt(e)
    }
  );
}
Xc.propTypes = {
  content: C.string
};
const Jc = `
  width: unset !important;
  min-width: unset !important;
`, Qc = Ye.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${Jc}
`, Kc = Ye.i`
  color: #78be21;
  ${Jc}
`;
function Zc({ data: e }) {
  return /* @__PURE__ */ d.jsx("div", { className: "uds-table mb-1", children: /* @__PURE__ */ d.jsxs("table", { children: [
    /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsxs("tr", { children: [
      /* @__PURE__ */ d.jsx("th", { scope: "col", children: "Career" }),
      /* @__PURE__ */ d.jsx("th", { scope: "col", className: "text-end", children: "Growth*" }),
      /* @__PURE__ */ d.jsx("th", { scope: "col", className: "text-end", children: "Median Salary*" })
    ] }) }),
    /* @__PURE__ */ d.jsx("tbody", { children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ d.jsxs("tr", { children: [
      /* @__PURE__ */ d.jsxs("th", { scope: "row", style: { fontWeight: "normal" }, children: [
        /* @__PURE__ */ d.jsx("a", { href: t.career.url, target: "_blank", rel: "noreferrer", children: t.career.text }),
        t.greenOccupation && /* @__PURE__ */ d.jsx(Kc, { className: "fas fa-leaf ms-1" }),
        t.brightOutlook && /* @__PURE__ */ d.jsx(Qc, { className: "fas fa-sun ms-1" })
      ] }),
      /* @__PURE__ */ d.jsxs("td", { className: "text-end", children: [
        +t.growth,
        "%"
      ] }),
      /* @__PURE__ */ d.jsx("td", { className: "text-end", children: t.medianSalary || 0 })
    ] }, t.career.url)) })
  ] }) });
}
Zc.propTypes = {
  data: C.arrayOf(gc)
};
function eu({ tableData: e }) {
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
          /* @__PURE__ */ d.jsx(Zc, { data: e }),
          /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("small", { children: "* Data obtained from the Occupational Information Network (O*NET) under sponsorship of the U.S. Department of Labor/Employment and Training Administration (USDOL/ETA)." }) })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "d-flex", children: [
          /* @__PURE__ */ d.jsxs("p", { className: "me-3", children: [
            /* @__PURE__ */ d.jsx(Qc, { className: "fas fa-sun me-1" }),
            "Bright outlook"
          ] }),
          /* @__PURE__ */ d.jsxs("p", { children: [
            /* @__PURE__ */ d.jsx(Kc, { className: "fas fa-leaf me-1" }),
            "Green occupation"
          ] })
        ] })
      ]
    }
  );
}
eu.propTypes = {
  tableData: C.arrayOf(gc)
};
const Ph = Ye.ul`
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
`, Bi = ({ id: e, title: t, links: r }) => /* @__PURE__ */ d.jsxs("div", { id: e, className: "mt-4", children: [
  /* @__PURE__ */ d.jsx("h3", { children: t }),
  /* @__PURE__ */ d.jsx("p", { children: "This program allows students to obtain both a bachelor's and master's degree in as little as five years. It is offered as an accelerated bachelor's and master's degree with:" }),
  /* @__PURE__ */ d.jsx(Ph, { className: "mt-3 mb-3", children: r.map((n, i) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: n.url, target: "_blank", rel: "noreferrer", children: n.title }) }, `${n.title}-${i}`)) }),
  /* @__PURE__ */ d.jsx("p", { className: "mb-0", children: "Acceptance to the graduate program requires a separate application. During their junior year, eligible students will be advised by their academic departments to apply." })
] });
Bi.propTypes = {
  id: C.string,
  title: C.string,
  links: Mi
};
function tu({ acceleratedLinks: e, concurrentLinks: t }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: dt.flexibleDegreeOptions.targetIdName,
      className: "container",
      "data-testid": "flexible-degree-options",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Flexible degree options" }) }),
        !!e.length && /* @__PURE__ */ d.jsx(
          Bi,
          {
            id: dt.flexibleDegreeOptions.acceleratedId,
            title: "Accelerated program options",
            links: e
          }
        ),
        !!t.length && /* @__PURE__ */ d.jsx(
          Bi,
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
tu.propTypes = {
  acceleratedLinks: Mi,
  concurrentLinks: Mi
};
const Dh = Ye.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, ru = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  Dh,
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
ru.propTypes = un.propTypes;
const nu = ({ url: e, altText: t }) => /* @__PURE__ */ d.jsx("div", { className: "uds-img pt-3 pb-3", "data-testid": "intro-image", children: /* @__PURE__ */ d.jsx("img", { src: e, className: "img-fluid", alt: t }) });
nu.propTypes = { ...co };
const Lh = (e, t) => {
  if (e !== "youtube")
    return t;
  const r = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, n = t.match(r);
  return n && n[7].length === 11 ? `https://www.youtube.com/embed/${n[7]}` : t;
}, Mh = Ye.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`, au = ({ type: e, url: t, vttUrl: r, title: n }) => /* @__PURE__ */ d.jsx(Mh, { "data-testid": "intro-video", children: /* @__PURE__ */ d.jsx(
  to,
  {
    type: e,
    url: Lh(e, t),
    vttUrl: r,
    title: n,
    controls: !0
  }
) });
au.propTypes = { ...uo };
function iu({ contents: e = [] }) {
  return /* @__PURE__ */ d.jsx("div", { "data-testid": "market-text", children: e.map((t, r) => /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `mt-3 ${sn(t.cssClass)}`,
      dangerouslySetInnerHTML: zt(t.text)
    },
    `content-${r + 1}`
  )) });
}
iu.propTypes = {
  contents: C.arrayOf(Pa)
};
function ou({ cards: e, defaultCards: t }) {
  var r, n, i, s, p, m, g, f, k, E, _, $;
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
              body: ((i = e == null ? void 0 : e.learnMore) == null ? void 0 : i.content) ?? t.learnMore.content,
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
              body: ((g = e == null ? void 0 : e.apply) == null ? void 0 : g.content) ?? t.apply.content,
              buttons: [
                ((f = e == null ? void 0 : e.apply) == null ? void 0 : f.buttonLink) ?? t.apply.buttonLink
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              icon: ((k = e == null ? void 0 : e.visit) == null ? void 0 : k.icon) ?? t.visit.icon,
              title: ((E = e == null ? void 0 : e.visit) == null ? void 0 : E.title) ?? t.visit.title,
              body: ((_ = e == null ? void 0 : e.visit) == null ? void 0 : _.content) ?? t.visit.content,
              buttons: [
                (($ = e == null ? void 0 : e.visit) == null ? void 0 : $.buttonLink) ?? t.visit.buttonLink
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
ou.propTypes = {
  cards: C.shape({
    learnMore: Br,
    apply: Br,
    visit: Br
  }),
  defaultCards: C.shape({
    learnMore: Br,
    apply: Br,
    visit: Br
  })
};
function su({ content: e = "" }) {
  return /* @__PURE__ */ d.jsxs("section", { className: "container", "data-testid": "professional-licensure", children: [
    /* @__PURE__ */ d.jsx("h3", { children: "Professional licensure" }),
    /* @__PURE__ */ d.jsx("p", { dangerouslySetInnerHTML: zt(e) })
  ] });
}
su.propTypes = {
  content: C.node
};
const wi = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "main content",
  section: "Program contact information"
}, Fh = Ye.ul`
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
function lu({ department: e, asuOfficeLoc: t, email: r, phone: n }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: dt.programContactInfo.targetIdName,
      "data-testid": "program-contact-info",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Program contact information" }) }),
        /* @__PURE__ */ d.jsx("p", { children: "If you have questions related to admission, please fill out the request information form above and an admission specialist will contact you directly. For questions regarding faculty or courses, please use the contact information below." }),
        /* @__PURE__ */ d.jsxs(Fh, { className: "text-maroon", children: [
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
                onClick: () => Rr({ ...wi, text: e.text }),
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
                onClick: () => Rr({ ...wi, text: r.text }),
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
                onClick: () => Rr({ ...wi, text: n }),
                children: n
              }
            )
          ] })
        ] })
      ]
    }
  );
}
lu.propTypes = {
  department: Yr,
  asuOfficeLoc: C.string,
  email: Yr,
  phone: C.string
};
function Wi({ content: e, stemOptText: t, programNotFound: r }) {
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
      /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("strong", { children: wm }) }),
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
Wi.propTypes = {
  content: C.string,
  stemOptText: C.string,
  programNotFound: C.bool
};
const $h = "https://changemajor.apps.asu.edu/", Uh = "On-campus students", zh = "Online students", qh = "View major map -", Qs = "View major map";
function cu({
  onlineMajorMapURL: e = "",
  majorMapOnCampusURL: t = "",
  subPlnMajorMaps: r = [],
  subPlns: n = []
}) {
  const i = (k) => {
    const E = n.find(
      (_) => _.acadSubPlanCode === k
    );
    return E ? E.description : "";
  }, s = (k, E, _) => {
    k && _.push({
      href: k,
      text: E
    });
  }, p = [], m = [];
  r.forEach((k) => {
    const E = i(k.acadSubPlanCode), _ = `${qh} ${E}`;
    s(k.url, _, p);
  }), t && s(t, Qs, p), e && s(e, Qs, m);
  const g = (k, E) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("h5", { children: k }),
    /* @__PURE__ */ d.jsx("ul", { className: "mb-3", children: E.map((_) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: _.href, children: _.text }) }, _.href)) })
  ] }), f = () => /* @__PURE__ */ d.jsxs("section", { className: "container ps-0", "data-testid": "required-course", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Required courses (major map)" }),
    p.length > 0 && g(Uh, p),
    m.length > 0 && g(zh, m),
    /* @__PURE__ */ d.jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ d.jsx("strong", { children: "What if:" }),
      " See how your courses can be applied to another major and find out how to ",
      /* @__PURE__ */ d.jsx("a", { href: $h, children: "change your major" })
    ] })
  ] });
  return !(r != null && r.length) && !e && !t ? /* @__PURE__ */ d.jsx("div", {}) : f();
}
cu.propTypes = {
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
const uu = ({ sectionIntroText: e, cards: t, defaultCards: r }) => {
  var n, i, s, p, m, g, f, k, E, _, $, O, A, I, F, U, Y, z, v, ie, de, xe, Re, Le, se, pe, _e, Ae, ve, Xe, Oe, Ce, $e, ze, le, H, R, W, B, b, te, j;
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
              image: ((i = (n = t == null ? void 0 : t.faculty) == null ? void 0 : n.image) == null ? void 0 : i.url) ?? r.faculty.image.url,
              imageAltText: ((p = (s = t == null ? void 0 : t.faculty) == null ? void 0 : s.image) == null ? void 0 : p.altText) ?? r.faculty.image.altText,
              title: ((m = t == null ? void 0 : t.faculty) == null ? void 0 : m.title) ?? r.faculty.title,
              body: ((g = t == null ? void 0 : t.faculty) == null ? void 0 : g.text) ?? r.faculty.text,
              buttons: [((f = t == null ? void 0 : t.faculty) == null ? void 0 : f.button) ?? r.faculty.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((E = (k = t == null ? void 0 : t.programs) == null ? void 0 : k.image) == null ? void 0 : E.url) ?? r.programs.image.url,
              imageAltText: (($ = (_ = t == null ? void 0 : t.programs) == null ? void 0 : _.image) == null ? void 0 : $.altText) ?? r.programs.image.altText,
              title: ((O = t == null ? void 0 : t.programs) == null ? void 0 : O.title) ?? r.programs.title,
              body: ((A = t == null ? void 0 : t.programs) == null ? void 0 : A.text) ?? r.programs.text,
              buttons: [((I = t == null ? void 0 : t.programs) == null ? void 0 : I.button) ?? r.programs.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((U = (F = t == null ? void 0 : t.research) == null ? void 0 : F.image) == null ? void 0 : U.url) ?? r.research.image.url,
              imageAltText: ((z = (Y = t == null ? void 0 : t.research) == null ? void 0 : Y.image) == null ? void 0 : z.altText) ?? r.research.image.altText,
              title: ((v = t == null ? void 0 : t.research) == null ? void 0 : v.title) ?? r.research.title,
              body: ((ie = t == null ? void 0 : t.research) == null ? void 0 : ie.text) ?? r.research.text,
              buttons: [((de = t == null ? void 0 : t.research) == null ? void 0 : de.button) ?? r.research.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((Re = (xe = t == null ? void 0 : t.inclusion) == null ? void 0 : xe.image) == null ? void 0 : Re.url) ?? r.inclusion.image.url,
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
              imageAltText: ((B = (W = t == null ? void 0 : t.honors) == null ? void 0 : W.image) == null ? void 0 : B.altText) ?? r.honors.image.altText,
              title: ((b = t == null ? void 0 : t.honors) == null ? void 0 : b.title) ?? r.honors.title,
              body: ((te = t == null ? void 0 : t.honors) == null ? void 0 : te.text) ?? r.honors.text,
              buttons: [((j = t == null ? void 0 : t.honors) == null ? void 0 : j.button) ?? r.honors.button]
            }
          ) })
        ] })
      ]
    }
  );
};
uu.propTypes = yc;
const xo = ({
  appPathFolder: e,
  dataSource: t,
  anchorMenu: r,
  hero: n,
  introContent: i,
  atAGlance: s,
  applicationRequirements: p,
  changeMajorRequirements: m,
  affordingCollege: g,
  flexibleDegreeOptions: f,
  careerOutlook: k,
  exampleCareers: E,
  globalOpportunity: _,
  attendOnline: $,
  programContactInfo: O,
  nextSteps: A,
  whyChooseAsu: I
}) => {
  var _e, Ae, ve, Xe;
  const [{ data: F, loading: U, error: Y }, z] = $l(), [v, ie] = ut(Qr({})), [de, xe] = ut({ accelerateData: [], concurrentData: [] }), Re = _c(t, Pm), { defaultState: Le } = qt(dn), { detailPageDefault: se } = Le;
  At(() => {
    typeof window < "u" && Yl({
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
      const Oe = Qr(F);
      ie(Oe), Oe.hasConcurrentOrAccelerateDegrees() && $m(
        [
          Oe.getAccelerateDegrees(),
          Oe.getConcurrentDegrees()
        ],
        xe
      );
    }
  }, [F]);
  const pe = r ? Ym(r, v) : null;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(jc, {}),
    Y && /* @__PURE__ */ d.jsx(dc, { message: Cc }),
    !(n != null && n.hide) && /* @__PURE__ */ d.jsx("section", { children: /* @__PURE__ */ d.jsx(
      qn,
      {
        image: (n == null ? void 0 : n.image) || se.hero.image,
        title: {
          ...se.hero.title,
          text: v.getMajorDesc(),
          ...n == null ? void 0 : n.title
        },
        contents: n == null ? void 0 : n.contents
      }
    ) }),
    /* @__PURE__ */ d.jsxs(Nc, { as: "div", "data-is-loading": U, className: "main-section", children: [
      !U && pe && Xm(pe) && /* @__PURE__ */ d.jsx(Ec, { anchorMenu: pe }),
      U && /* @__PURE__ */ d.jsx(pc, {}),
      !U && (F != null && F.error ? /* @__PURE__ */ d.jsx("section", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        Wi,
        {
          content: Sm,
          programNotFound: !0
        }
      ) }) : /* @__PURE__ */ d.jsxs("section", { className: "container mt-4 mb-0", children: [
        (i == null ? void 0 : i.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "row col-12", children: /* @__PURE__ */ d.jsx(
          go,
          {
            breadcrumbs: i.breadcrumbs,
            section: n ? n.title.text : v.getMajorDesc()
          }
        ) }),
        /* @__PURE__ */ d.jsxs("div", { className: "row flex-column-reverse flex-sm-row", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-7 col-lg-7", children: [
            /* @__PURE__ */ d.jsxs("section", { className: "intro", children: [
              !v.isValidActiveProgram() && /* @__PURE__ */ d.jsx(Xc, { content: v.getAsuCustomText() }),
              !(i != null && i.hideMarketText) && ((i == null ? void 0 : i.contents) || v.getMarketText()) && /* @__PURE__ */ d.jsx(
                iu,
                {
                  contents: (i == null ? void 0 : i.contents) || [
                    { text: v.getMarketText() }
                  ]
                }
              ),
              !(i != null && i.hideProgramDesc) && /* @__PURE__ */ d.jsx(
                Wi,
                {
                  content: v.getFullDescription(),
                  stemOptText: v.getStemOptText()
                }
              )
            ] }),
            !(s != null && s.hide) && /* @__PURE__ */ d.jsx(
              Hc,
              {
                offeredBy: (s == null ? void 0 : s.offeredBy) || {
                  text: v.getCollegeDesc(),
                  url: v.getCollegeUrl()
                },
                locations: (s == null ? void 0 : s.locations) || Gm(v),
                firstRequirementMathCourse: (s == null ? void 0 : s.firstRequirementMathCourse) || v.getMinMathReq(),
                mathIntensity: (s == null ? void 0 : s.mathIntensity) || v.getMathIntensity(),
                stemOptText: v.hasStemOptText()
              }
            ),
            !(i != null && i.hideRequiredCourses) && !v.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
              cu,
              {
                onlineMajorMapURL: v.getOnlineMajorMapURL(),
                majorMapOnCampusURL: v.getGeneralDegreeMajorMap(),
                subPlnMajorMaps: v.getSubPlnMajorMaps(),
                subPlns: v.getSubPln()
              }
            ),
            !(p != null && p.hide) && /* @__PURE__ */ d.jsx(
              Wc,
              {
                graduateRequirements: v.isGradProgram() ? v.getGraduateRequirements() : null,
                isMinorOrCertificate: v.isMinorOrCertificate(),
                minorRequirements: v.getMinorCourseRequirements(),
                additionalRequirements: v.getAdmissionsRequirementsText(),
                transferRequirements: v.getTransferAdmission(),
                majorMapURL: v.getGeneralDegreeMajorMap()
              }
            ),
            !(m != null && m.hide) && !v.isMinorOrCertificate() && !v.isGradProgram() && /* @__PURE__ */ d.jsx(Yc, { content: v.getChangeMajor() })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-5 col-lg-5", children: [
            (i == null ? void 0 : i.video) && /* @__PURE__ */ d.jsx(
              au,
              {
                type: i.video.type,
                url: i.video.url,
                vttUrl: i.video.vttUrl,
                title: i.video.title
              }
            ),
            !(i != null && i.video) && /* @__PURE__ */ d.jsx(
              nu,
              {
                url: ((_e = i == null ? void 0 : i.image) == null ? void 0 : _e.url) || se.introContent.image.url,
                altText: ((Ae = i == null ? void 0 : i.image) == null ? void 0 : Ae.altText) || se.introContent.image.altText
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
          !(A != null && A.hide) && !v.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
            ou,
            {
              cards: A == null ? void 0 : A.cards,
              defaultCards: se.nextSteps.cards
            }
          ),
          !(g != null && g.hide) && /* @__PURE__ */ d.jsx(_h, {}),
          !(f != null && f.hide) && v.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ d.jsx(
            tu,
            {
              acceleratedLinks: Vs(
                de.accelerateData
              ),
              concurrentLinks: Vs(
                de.concurrentData
              )
            }
          ),
          !(k != null && k.hide) && v.getAsuCareerOpportunity() && /* @__PURE__ */ d.jsx(
            Gc,
            {
              image: (k == null ? void 0 : k.image) || se.careerOutlook.image,
              contents: [{ text: v.getAsuCareerOpportunity() }]
            }
          ),
          !(E != null && E.hide) && v.hasCareerData() && /* @__PURE__ */ d.jsx(
            eu,
            {
              tableData: Dm(v.getCareerData())
            }
          ),
          v.getProfessionalLicensureText() && /* @__PURE__ */ d.jsx(
            su,
            {
              content: v.getProfessionalLicensureText()
            }
          ),
          !(_ != null && _.hide) && v.getGlobalExp() && /* @__PURE__ */ d.jsx(
            ru,
            {
              contents: [{ text: v.getGlobalExp() }],
              image: (_ == null ? void 0 : _.image) || se.globalOpportunity.image
            }
          ),
          !(I != null && I.hide) && /* @__PURE__ */ d.jsx(
            uu,
            {
              sectionIntroText: (I == null ? void 0 : I.sectionIntroText) || se.whyChooseAsu.sectionIntroText,
              cards: I == null ? void 0 : I.cards,
              defaultCards: se.whyChooseAsu.cards
            }
          ),
          !($ != null && $.hide) && v.isOnline() && /* @__PURE__ */ d.jsx(
            Vc,
            {
              learnMoreLink: v.getCurriculumUrl(),
              image: ($ == null ? void 0 : $.image) || se.attendOnline.image
            }
          )
        ] }),
        !(O != null && O.hide) && /* @__PURE__ */ d.jsx("div", { className: "row", children: /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-6 col-lg-6 ", children: /* @__PURE__ */ d.jsx(
          lu,
          {
            department: {
              text: v.getDepartmentName(),
              url: ((ve = O == null ? void 0 : O.department) == null ? void 0 : ve.url) || v.getPlanUrl()
            },
            email: {
              text: v.getEmailAddress(),
              url: ((Xe = O == null ? void 0 : O.email) == null ? void 0 : Xe.url) || v.getEmailAddress()
            },
            asuOfficeLoc: v.getAsuOfficeLoc(),
            phone: v.getPhone()
          }
        ) }) })
      ] }))
    ] })
  ] });
};
xo.propTypes = {
  appPathFolder: C.string,
  dataSource: hc,
  anchorMenu: C.shape(po),
  hero: C.shape(qn.propTypes),
  introContent: C.shape({
    hideMarketText: C.bool,
    hideProgramDesc: C.bool,
    hideRequiredCourses: C.bool,
    breadcrumbs: Ta.arrayOf(Yr),
    contents: Ta.arrayOf(C.object),
    video: hm,
    image: Sr
  }),
  atAGlance: C.shape({
    hide: C.bool,
    offeredBy: Yr,
    locations: Ta.arrayOf(Yr),
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
    cards: C.arrayOf(Br)
  }),
  whyChooseAsu: C.shape(yc)
};
const du = (e) => /* @__PURE__ */ d.jsx(ho, { detailPageProps: e, children: /* @__PURE__ */ d.jsx(xo, { ...e }) });
du.propTypes = xo.propTypes;
var pu, Ks = al;
pu = Ks.createRoot, Ks.hydrateRoot;
const fu = (e, t, r) => {
  const n = document.querySelector(r);
  pu(n).render(mt.createElement(e, t));
}, Hh = ({ targetSelector: e, props: t }) => {
  fu(qc, t, e);
}, Vh = ({ targetSelector: e, props: t }) => {
  fu(du, t, e);
};
export {
  du as DetailPage,
  qc as ListingPage,
  Hh as initListingPage,
  Vh as initProgramDetailPage
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
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */
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
