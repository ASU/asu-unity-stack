import ht, { forwardRef as Xi, Component as Tu, createContext as tl, useRef as Zr, useImperativeHandle as Au, useId as rl, useContext as Xt, createElement as nl, useState as ct, useEffect as _t, useLayoutEffect as Cu, useMemo as al, Fragment as il, createRef as Eu } from "react";
import ol from "react-dom";
function Zi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sl = { exports: {} }, wn = {};
var zo;
function _u() {
  if (zo) return wn;
  zo = 1;
  var e = ht, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, g, f) {
    var k, E = {}, _ = null, $ = null;
    f !== void 0 && (_ = "" + f), g.key !== void 0 && (_ = "" + g.key), g.ref !== void 0 && ($ = g.ref);
    for (k in g) n.call(g, k) && !s.hasOwnProperty(k) && (E[k] = g[k]);
    if (h && h.defaultProps) for (k in g = h.defaultProps, g) E[k] === void 0 && (E[k] = g[k]);
    return { $$typeof: t, type: h, key: _, ref: $, props: E, _owner: a.current };
  }
  return wn.Fragment = r, wn.jsx = p, wn.jsxs = p, wn;
}
sl.exports = _u();
var d = sl.exports;
function Ji(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ll = { exports: {} }, kn = {}, qo;
function Ou() {
  if (qo) return kn;
  qo = 1;
  var e = ht, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, g, f) {
    var k, E = {}, _ = null, $ = null;
    f !== void 0 && (_ = "" + f), g.key !== void 0 && (_ = "" + g.key), g.ref !== void 0 && ($ = g.ref);
    for (k in g) n.call(g, k) && !s.hasOwnProperty(k) && (E[k] = g[k]);
    if (h && h.defaultProps) for (k in g = h.defaultProps, g) E[k] === void 0 && (E[k] = g[k]);
    return { $$typeof: t, type: h, key: _, ref: $, props: E, _owner: a.current };
  }
  return kn.Fragment = r, kn.jsx = p, kn.jsxs = p, kn;
}
ll.exports = Ou();
var q = ll.exports, cl = { exports: {} }, Ka, Bo;
function ju() {
  if (Bo) return Ka;
  Bo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ka = e, Ka;
}
var Qa, Wo;
function Nu() {
  if (Wo) return Qa;
  Wo = 1;
  var e = ju();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Qa = function() {
    function n(p, h, g, f, k, E) {
      if (E !== e) {
        var _ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw _.name = "Invariant Violation", _;
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
  }, Qa;
}
cl.exports = Nu()();
var Ru = cl.exports;
const l = /* @__PURE__ */ Ji(Ru);
function Pu(e) {
  const [t, r] = ct(!1);
  return _t(() => {
    const n = window.matchMedia(e);
    n.matches !== t && r(n.matches);
    const a = () => {
      r(n.matches);
    };
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [t, e]), t;
}
const Ho = (e, t, r) => e ? t : r, Du = (e) => (e || []).join(" "), {
  entries: ul,
  setPrototypeOf: Vo,
  isFrozen: Iu,
  getPrototypeOf: Lu,
  getOwnPropertyDescriptor: Mu
} = Object;
let {
  freeze: Ot,
  seal: Vt,
  create: va
} = Object, {
  apply: Ci,
  construct: Ei
} = typeof Reflect < "u" && Reflect;
Ot || (Ot = function(e) {
  return e;
});
Vt || (Vt = function(e) {
  return e;
});
Ci || (Ci = function(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  return e.apply(t, n);
});
Ei || (Ei = function(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return new e(...r);
});
const ca = jt(Array.prototype.forEach), Fu = jt(Array.prototype.lastIndexOf), Go = jt(Array.prototype.pop), Tn = jt(Array.prototype.push), $u = jt(Array.prototype.splice), Sa = jt(String.prototype.toLowerCase), ei = jt(String.prototype.toString), ti = jt(String.prototype.match), An = jt(String.prototype.replace), Uu = jt(String.prototype.indexOf), zu = jt(String.prototype.trim), zt = jt(Object.prototype.hasOwnProperty), Ct = jt(RegExp.prototype.test), Cn = qu(TypeError);
function jt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Ci(e, t, n);
  };
}
function qu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ei(e, r);
  };
}
function Ie(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Sa;
  Vo && Vo(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (Iu(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function Bu(e) {
  for (let t = 0; t < e.length; t++)
    zt(e, t) || (e[t] = null);
  return e;
}
function mr(e) {
  const t = va(null);
  for (const [r, n] of ul(e))
    zt(e, r) && (Array.isArray(n) ? t[r] = Bu(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = mr(n) : t[r] = n);
  return t;
}
function En(e, t) {
  for (; e !== null; ) {
    const n = Mu(e, t);
    if (n) {
      if (n.get)
        return jt(n.get);
      if (typeof n.value == "function")
        return jt(n.value);
    }
    e = Lu(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Yo = Ot(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ri = Ot(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ni = Ot(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Wu = Ot(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ai = Ot(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Hu = Ot(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Xo = Ot(["#text"]), Zo = Ot(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ii = Ot(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Jo = Ot(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ua = Ot(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Vu = Vt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Gu = Vt(/<%[\w\W]*|[\w\W]*%>/gm), Yu = Vt(/\$\{[\w\W]*/gm), Xu = Vt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Zu = Vt(/^aria-[\-\w]+$/), dl = Vt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ju = Vt(/^(?:\w+script|data):/i), Ku = Vt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), pl = Vt(/^html$/i), Qu = Vt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ko = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Zu,
  ATTR_WHITESPACE: Ku,
  CUSTOM_ELEMENT: Qu,
  DATA_ATTR: Xu,
  DOCTYPE_NAME: pl,
  ERB_EXPR: Gu,
  IS_ALLOWED_URI: dl,
  IS_SCRIPT_OR_DATA: Ju,
  MUSTACHE_EXPR: Vu,
  TMPLIT_EXPR: Yu
});
const _n = {
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
function fl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ed();
  const t = (y) => fl(y);
  if (t.version = "3.3.2", t.removed = [], !e || !e.document || e.document.nodeType !== _n.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: p,
    Node: h,
    Element: g,
    NodeFilter: f,
    NamedNodeMap: k = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: _,
    trustedTypes: $
  } = e, O = g.prototype, C = En(O, "cloneNode"), P = En(O, "remove"), F = En(O, "nextSibling"), U = En(O, "childNodes"), Y = En(O, "parentNode");
  if (typeof p == "function") {
    const y = r.createElement("template");
    y.content && y.content.ownerDocument && (r = y.content.ownerDocument);
  }
  let z, S = "";
  const {
    implementation: ie,
    createNodeIterator: de,
    createDocumentFragment: ve,
    getElementsByTagName: Re
  } = r, {
    importNode: Me
  } = n;
  let se = Qo();
  t.isSupported = typeof ul == "function" && typeof Y == "function" && ie && ie.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: Oe,
    TMPLIT_EXPR: Ee,
    DATA_ATTR: Se,
    ARIA_ATTR: Ke,
    IS_SCRIPT_OR_DATA: je,
    ATTR_WHITESPACE: Ce,
    CUSTOM_ELEMENT: Fe
  } = Ko;
  let {
    IS_ALLOWED_URI: Be
  } = Ko, ce = null;
  const H = Ie({}, [...Yo, ...ri, ...ni, ...ai, ...Xo]);
  let R = null;
  const W = Ie({}, [...Zo, ...ii, ...Jo, ...ua]);
  let B = Object.seal(va(null, {
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
  })), x = null, re = null;
  const j = Object.seal(va(null, {
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
  let le = !0, ee = !0, ne = !1, Z = !0, oe = !1, me = !0, Q = !1, xe = !1, ae = !1, fe = !1, Ve = !1, he = !1, pt = !0, Ye = !1;
  const _e = "user-content-";
  let X = !0, ue = !1, et = {}, $e = null;
  const Ue = Ie({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let cr = null;
  const ur = Ie({}, ["audio", "video", "img", "source", "image", "track"]);
  let Zt = null;
  const Jt = Ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), xt = "http://www.w3.org/1998/Math/MathML", Pt = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml";
  let yt = st, Kt = !1, Qt = null;
  const vt = Ie({}, [xt, Pt, st], ei);
  let At = Ie({}, ["mi", "mo", "mn", "ms", "mtext"]), St = Ie({}, ["annotation-xml"]);
  const ze = Ie({}, ["title", "style", "font", "a", "script"]);
  let mt = null;
  const dr = ["application/xhtml+xml", "text/html"], er = "text/html";
  let ge = null, ft = null;
  const Dt = r.createElement("form"), pr = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, It = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ft && ft === y)) {
      if ((!y || typeof y != "object") && (y = {}), y = mr(y), mt = // eslint-disable-next-line unicorn/prefer-includes
      dr.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? er : y.PARSER_MEDIA_TYPE, ge = mt === "application/xhtml+xml" ? ei : Sa, ce = zt(y, "ALLOWED_TAGS") ? Ie({}, y.ALLOWED_TAGS, ge) : H, R = zt(y, "ALLOWED_ATTR") ? Ie({}, y.ALLOWED_ATTR, ge) : W, Qt = zt(y, "ALLOWED_NAMESPACES") ? Ie({}, y.ALLOWED_NAMESPACES, ei) : vt, Zt = zt(y, "ADD_URI_SAFE_ATTR") ? Ie(mr(Jt), y.ADD_URI_SAFE_ATTR, ge) : Jt, cr = zt(y, "ADD_DATA_URI_TAGS") ? Ie(mr(ur), y.ADD_DATA_URI_TAGS, ge) : ur, $e = zt(y, "FORBID_CONTENTS") ? Ie({}, y.FORBID_CONTENTS, ge) : Ue, x = zt(y, "FORBID_TAGS") ? Ie({}, y.FORBID_TAGS, ge) : mr({}), re = zt(y, "FORBID_ATTR") ? Ie({}, y.FORBID_ATTR, ge) : mr({}), et = zt(y, "USE_PROFILES") ? y.USE_PROFILES : !1, le = y.ALLOW_ARIA_ATTR !== !1, ee = y.ALLOW_DATA_ATTR !== !1, ne = y.ALLOW_UNKNOWN_PROTOCOLS || !1, Z = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, oe = y.SAFE_FOR_TEMPLATES || !1, me = y.SAFE_FOR_XML !== !1, Q = y.WHOLE_DOCUMENT || !1, fe = y.RETURN_DOM || !1, Ve = y.RETURN_DOM_FRAGMENT || !1, he = y.RETURN_TRUSTED_TYPE || !1, ae = y.FORCE_BODY || !1, pt = y.SANITIZE_DOM !== !1, Ye = y.SANITIZE_NAMED_PROPS || !1, X = y.KEEP_CONTENT !== !1, ue = y.IN_PLACE || !1, Be = y.ALLOWED_URI_REGEXP || dl, yt = y.NAMESPACE || st, At = y.MATHML_TEXT_INTEGRATION_POINTS || At, St = y.HTML_INTEGRATION_POINTS || St, B = y.CUSTOM_ELEMENT_HANDLING || {}, y.CUSTOM_ELEMENT_HANDLING && pr(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (B.tagNameCheck = y.CUSTOM_ELEMENT_HANDLING.tagNameCheck), y.CUSTOM_ELEMENT_HANDLING && pr(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (B.attributeNameCheck = y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (B.allowCustomizedBuiltInElements = y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), oe && (ee = !1), Ve && (fe = !0), et && (ce = Ie({}, Xo), R = va(null), et.html === !0 && (Ie(ce, Yo), Ie(R, Zo)), et.svg === !0 && (Ie(ce, ri), Ie(R, ii), Ie(R, ua)), et.svgFilters === !0 && (Ie(ce, ni), Ie(R, ii), Ie(R, ua)), et.mathMl === !0 && (Ie(ce, ai), Ie(R, Jo), Ie(R, ua))), zt(y, "ADD_TAGS") || (j.tagCheck = null), zt(y, "ADD_ATTR") || (j.attributeCheck = null), y.ADD_TAGS && (typeof y.ADD_TAGS == "function" ? j.tagCheck = y.ADD_TAGS : (ce === H && (ce = mr(ce)), Ie(ce, y.ADD_TAGS, ge))), y.ADD_ATTR && (typeof y.ADD_ATTR == "function" ? j.attributeCheck = y.ADD_ATTR : (R === W && (R = mr(R)), Ie(R, y.ADD_ATTR, ge))), y.ADD_URI_SAFE_ATTR && Ie(Zt, y.ADD_URI_SAFE_ATTR, ge), y.FORBID_CONTENTS && ($e === Ue && ($e = mr($e)), Ie($e, y.FORBID_CONTENTS, ge)), y.ADD_FORBID_CONTENTS && ($e === Ue && ($e = mr($e)), Ie($e, y.ADD_FORBID_CONTENTS, ge)), X && (ce["#text"] = !0), Q && Ie(ce, ["html", "head", "body"]), ce.table && (Ie(ce, ["tbody"]), delete x.tbody), y.TRUSTED_TYPES_POLICY) {
        if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        z = y.TRUSTED_TYPES_POLICY, S = z.createHTML("");
      } else
        z === void 0 && (z = td($, a)), z !== null && typeof S == "string" && (S = z.createHTML(""));
      Ot && Ot(y), ft = y;
    }
  }, tr = Ie({}, [...ri, ...ni, ...Wu]), fr = Ie({}, [...ai, ...Hu]), jr = function(y) {
    let v = Y(y);
    (!v || !v.tagName) && (v = {
      namespaceURI: yt,
      tagName: "template"
    });
    const N = Sa(y.tagName), J = Sa(v.tagName);
    return Qt[y.namespaceURI] ? y.namespaceURI === Pt ? v.namespaceURI === st ? N === "svg" : v.namespaceURI === xt ? N === "svg" && (J === "annotation-xml" || At[J]) : !!tr[N] : y.namespaceURI === xt ? v.namespaceURI === st ? N === "math" : v.namespaceURI === Pt ? N === "math" && St[J] : !!fr[N] : y.namespaceURI === st ? v.namespaceURI === Pt && !St[J] || v.namespaceURI === xt && !At[J] ? !1 : !fr[N] && (ze[N] || !tr[N]) : !!(mt === "application/xhtml+xml" && Qt[y.namespaceURI]) : !1;
  }, lt = function(y) {
    Tn(t.removed, {
      element: y
    });
    try {
      Y(y).removeChild(y);
    } catch {
      P(y);
    }
  }, gt = function(y, v) {
    try {
      Tn(t.removed, {
        attribute: v.getAttributeNode(y),
        from: v
      });
    } catch {
      Tn(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(y), y === "is")
      if (fe || Ve)
        try {
          lt(v);
        } catch {
        }
      else
        try {
          v.setAttribute(y, "");
        } catch {
        }
  }, vr = function(y) {
    let v = null, N = null;
    if (ae)
      y = "<remove></remove>" + y;
    else {
      const Te = ti(y, /^[\r\n\t ]+/);
      N = Te && Te[0];
    }
    mt === "application/xhtml+xml" && yt === st && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const J = z ? z.createHTML(y) : y;
    if (yt === st)
      try {
        v = new _().parseFromString(J, mt);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = ie.createDocument(yt, "template", null);
      try {
        v.documentElement.innerHTML = Kt ? S : J;
      } catch {
      }
    }
    const we = v.body || v.documentElement;
    return y && N && we.insertBefore(r.createTextNode(N), we.childNodes[0] || null), yt === st ? Re.call(v, Q ? "html" : "body")[0] : Q ? v.documentElement : we;
  }, Bt = function(y) {
    return de.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Wt = function(y) {
    return y instanceof E && (typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || !(y.attributes instanceof k) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function");
  }, Ht = function(y) {
    return typeof h == "function" && y instanceof h;
  };
  function nt(y, v, N) {
    ca(y, (J) => {
      J.call(t, v, N, ft);
    });
  }
  const Sr = function(y) {
    let v = null;
    if (nt(se.beforeSanitizeElements, y, null), Wt(y))
      return lt(y), !0;
    const N = ge(y.nodeName);
    if (nt(se.uponSanitizeElement, y, {
      tagName: N,
      allowedTags: ce
    }), me && y.hasChildNodes() && !Ht(y.firstElementChild) && Ct(/<[/\w!]/g, y.innerHTML) && Ct(/<[/\w!]/g, y.textContent) || y.nodeType === _n.progressingInstruction || me && y.nodeType === _n.comment && Ct(/<[/\w]/g, y.data))
      return lt(y), !0;
    if (!(j.tagCheck instanceof Function && j.tagCheck(N)) && (!ce[N] || x[N])) {
      if (!x[N] && wr(N) && (B.tagNameCheck instanceof RegExp && Ct(B.tagNameCheck, N) || B.tagNameCheck instanceof Function && B.tagNameCheck(N)))
        return !1;
      if (X && !$e[N]) {
        const J = Y(y) || y.parentNode, we = U(y) || y.childNodes;
        if (we && J) {
          const Te = we.length;
          for (let Ae = Te - 1; Ae >= 0; --Ae) {
            const qe = C(we[Ae], !0);
            qe.__removalCount = (y.__removalCount || 0) + 1, J.insertBefore(qe, F(y));
          }
        }
      }
      return lt(y), !0;
    }
    return y instanceof g && !jr(y) || (N === "noscript" || N === "noembed" || N === "noframes") && Ct(/<\/no(script|embed|frames)/i, y.innerHTML) ? (lt(y), !0) : (oe && y.nodeType === _n.text && (v = y.textContent, ca([pe, Oe, Ee], (J) => {
      v = An(v, J, " ");
    }), y.textContent !== v && (Tn(t.removed, {
      element: y.cloneNode()
    }), y.textContent = v)), nt(se.afterSanitizeElements, y, null), !1);
  }, Lt = function(y, v, N) {
    if (re[v] || pt && (v === "id" || v === "name") && (N in r || N in Dt))
      return !1;
    if (!(ee && !re[v] && Ct(Se, v)) && !(le && Ct(Ke, v)) && !(j.attributeCheck instanceof Function && j.attributeCheck(v, y))) {
      if (!R[v] || re[v]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(wr(y) && (B.tagNameCheck instanceof RegExp && Ct(B.tagNameCheck, y) || B.tagNameCheck instanceof Function && B.tagNameCheck(y)) && (B.attributeNameCheck instanceof RegExp && Ct(B.attributeNameCheck, v) || B.attributeNameCheck instanceof Function && B.attributeNameCheck(v, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && B.allowCustomizedBuiltInElements && (B.tagNameCheck instanceof RegExp && Ct(B.tagNameCheck, N) || B.tagNameCheck instanceof Function && B.tagNameCheck(N)))
        ) return !1;
      } else if (!Zt[v] && !Ct(Be, An(N, Ce, "")) && !((v === "src" || v === "xlink:href" || v === "href") && y !== "script" && Uu(N, "data:") === 0 && cr[y]) && !(ne && !Ct(je, An(N, Ce, ""))) && N)
        return !1;
    }
    return !0;
  }, wr = function(y) {
    return y !== "annotation-xml" && ti(y, Fe);
  }, rr = function(y) {
    nt(se.beforeSanitizeAttributes, y, null);
    const {
      attributes: v
    } = y;
    if (!v || Wt(y))
      return;
    const N = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: R,
      forceKeepAttr: void 0
    };
    let J = v.length;
    for (; J--; ) {
      const we = v[J], {
        name: Te,
        namespaceURI: Ae,
        value: qe
      } = we, Qe = ge(Te), wt = qe;
      let tt = Te === "value" ? wt : zu(wt);
      if (N.attrName = Qe, N.attrValue = tt, N.keepAttr = !0, N.forceKeepAttr = void 0, nt(se.uponSanitizeAttribute, y, N), tt = N.attrValue, Ye && (Qe === "id" || Qe === "name") && (gt(Te, y), tt = _e + tt), me && Ct(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, tt)) {
        gt(Te, y);
        continue;
      }
      if (Qe === "attributename" && ti(tt, "href")) {
        gt(Te, y);
        continue;
      }
      if (N.forceKeepAttr)
        continue;
      if (!N.keepAttr) {
        gt(Te, y);
        continue;
      }
      if (!Z && Ct(/\/>/i, tt)) {
        gt(Te, y);
        continue;
      }
      oe && ca([pe, Oe, Ee], (Mt) => {
        tt = An(tt, Mt, " ");
      });
      const Ge = ge(y.nodeName);
      if (!Lt(Ge, Qe, tt)) {
        gt(Te, y);
        continue;
      }
      if (z && typeof $ == "object" && typeof $.getAttributeType == "function" && !Ae)
        switch ($.getAttributeType(Ge, Qe)) {
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
          Ae ? y.setAttributeNS(Ae, Te, tt) : y.setAttribute(Te, tt), Wt(y) ? lt(y) : Go(t.removed);
        } catch {
          gt(Te, y);
        }
    }
    nt(se.afterSanitizeAttributes, y, null);
  }, hr = function y(v) {
    let N = null;
    const J = Bt(v);
    for (nt(se.beforeSanitizeShadowDOM, v, null); N = J.nextNode(); )
      nt(se.uponSanitizeShadowNode, N, null), Sr(N), rr(N), N.content instanceof s && y(N.content);
    nt(se.afterSanitizeShadowDOM, v, null);
  };
  return t.sanitize = function(y) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, J = null, we = null, Te = null;
    if (Kt = !y, Kt && (y = "<!-->"), typeof y != "string" && !Ht(y))
      if (typeof y.toString == "function") {
        if (y = y.toString(), typeof y != "string")
          throw Cn("dirty is not a string, aborting");
      } else
        throw Cn("toString is not a function");
    if (!t.isSupported)
      return y;
    if (xe || It(v), t.removed = [], typeof y == "string" && (ue = !1), ue) {
      if (y.nodeName) {
        const Qe = ge(y.nodeName);
        if (!ce[Qe] || x[Qe])
          throw Cn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (y instanceof h)
      N = vr("<!---->"), J = N.ownerDocument.importNode(y, !0), J.nodeType === _n.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? N = J : N.appendChild(J);
    else {
      if (!fe && !oe && !Q && // eslint-disable-next-line unicorn/prefer-includes
      y.indexOf("<") === -1)
        return z && he ? z.createHTML(y) : y;
      if (N = vr(y), !N)
        return fe ? null : he ? S : "";
    }
    N && ae && lt(N.firstChild);
    const Ae = Bt(ue ? y : N);
    for (; we = Ae.nextNode(); )
      Sr(we), rr(we), we.content instanceof s && hr(we.content);
    if (ue)
      return y;
    if (fe) {
      if (Ve)
        for (Te = ve.call(N.ownerDocument); N.firstChild; )
          Te.appendChild(N.firstChild);
      else
        Te = N;
      return (R.shadowroot || R.shadowrootmode) && (Te = Me.call(n, Te, !0)), Te;
    }
    let qe = Q ? N.outerHTML : N.innerHTML;
    return Q && ce["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && Ct(pl, N.ownerDocument.doctype.name) && (qe = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + qe), oe && ca([pe, Oe, Ee], (Qe) => {
      qe = An(qe, Qe, " ");
    }), z && he ? z.createHTML(qe) : qe;
  }, t.setConfig = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    It(y), xe = !0;
  }, t.clearConfig = function() {
    ft = null, xe = !1;
  }, t.isValidAttribute = function(y, v, N) {
    ft || It({});
    const J = ge(y), we = ge(v);
    return Lt(J, we, N);
  }, t.addHook = function(y, v) {
    typeof v == "function" && Tn(se[y], v);
  }, t.removeHook = function(y, v) {
    if (v !== void 0) {
      const N = Fu(se[y], v);
      return N === -1 ? void 0 : $u(se[y], N, 1)[0];
    }
    return Go(se[y]);
  }, t.removeHooks = function(y) {
    se[y] = [];
  }, t.removeAllHooks = function() {
    se = Qo();
  }, t;
}
var es = fl();
let da = null;
function rd() {
  return da || (typeof window < "u" ? da = es(window) : da = es), da;
}
function nd(e) {
  const t = e ? document.querySelector(e) : document;
  return t ? t.querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  ) : null;
}
const Vr = (e) => ({ __html: rd().sanitize(e) }), ts = (e, t, r) => {
  let n = e;
  const a = [];
  for (; n < t; )
    n > 0 && n <= r && a.push(n), n += 1;
  return a;
};
let oi = !1;
const ad = (e, t) => {
  oi || (oi = !0, setTimeout(() => {
    e(), oi = !1;
  }, t));
};
let rs;
const id = (e, t) => {
  window.clearTimeout(rs), rs = window.setTimeout(e, t);
};
function od(e) {
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
const hl = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: s = "",
  region: p = "",
  component: h = ""
}) => {
  const { dataLayer: g } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: p.toLowerCase(),
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: h.toLowerCase()
  };
  g && g.push(f);
}, zn = ({ children: e }) => /* @__PURE__ */ q.jsx(q.Fragment, { children: e });
zn.propTypes = {
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
        var h = arguments[p];
        h && (s = a(s, n(h)));
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
      for (var h in s)
        t.call(s, h) && s[h] && (p = a(p, h));
      return p;
    }
    function a(s, p) {
      return p ? s ? s + " " + p : s + p : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(ml);
var sd = ml.exports;
const ot = /* @__PURE__ */ Ji(sd);
({
  ...zn.propTypes
});
const gl = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ q.jsx("div", { className: t, ...r, children: /* @__PURE__ */ q.jsx("div", { className: "row", children: e }) });
gl.propTypes = {
  children: zn.propTypes.children
};
({
  ...gl.propTypes
});
zn.propTypes.children, l.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
zn.propTypes.children;
const ld = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), si = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), bl = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.arrayOf(l.string),
    header: l.string,
    body: l.string
  })
}), Ki = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var Br = {}, ns;
function cd() {
  if (ns) return Br;
  ns = 1;
  var e = ht;
  function t(i) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, b = 1; b < arguments.length; b++) u += "&args[]=" + encodeURIComponent(arguments[b]);
    return "Minified React error #" + i + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, s = {};
  function p(i) {
    return r.call(s, i) ? !0 : r.call(a, i) ? !1 : n.test(i) ? s[i] = !0 : (a[i] = !0, !1);
  }
  function h(i, u, b, T, M, D, V) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = T, this.attributeNamespace = M, this.mustUseProperty = b, this.propertyName = i, this.type = u, this.sanitizeURL = D, this.removeEmptyString = V;
  }
  var g = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    g[i] = new h(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var u = i[0];
    g[u] = new h(u, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    g[i] = new h(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    g[i] = new h(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    g[i] = new h(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    g[i] = new h(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    g[i] = new h(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    g[i] = new h(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    g[i] = new h(i, 5, !1, i.toLowerCase(), null, !1, !1);
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
    g[u] = new h(u, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var u = i.replace(f, k);
    g[u] = new h(u, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var u = i.replace(f, k);
    g[u] = new h(u, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    g[i] = new h(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), g.xlinkHref = new h("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    g[i] = new h(i, 1, !1, i.toLowerCase(), null, !0, !0);
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
  Object.keys(E).forEach(function(i) {
    _.forEach(function(u) {
      u = u + i.charAt(0).toUpperCase() + i.substring(1), E[u] = E[i];
    });
  });
  var $ = /["'&<>]/;
  function O(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var u = $.exec(i);
    if (u) {
      var b = "", T, M = 0;
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
        M !== T && (b += i.substring(M, T)), M = T + 1, b += u;
      }
      i = M !== T ? b + i.substring(M, T) : b;
    }
    return i;
  }
  var C = /([A-Z])/g, P = /^ms-/, F = Array.isArray;
  function U(i, u) {
    return { insertionMode: i, selectedValue: u };
  }
  function Y(i, u, b) {
    switch (u) {
      case "select":
        return U(1, b.value != null ? b.value : b.defaultValue);
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
    return 4 <= i.insertionMode || i.insertionMode === 0 ? U(1, null) : i;
  }
  var z = /* @__PURE__ */ new Map();
  function S(i, u, b) {
    if (typeof b != "object") throw Error(t(62));
    u = !0;
    for (var T in b) if (r.call(b, T)) {
      var M = b[T];
      if (M != null && typeof M != "boolean" && M !== "") {
        if (T.indexOf("--") === 0) {
          var D = O(T);
          M = O(("" + M).trim());
        } else {
          D = T;
          var V = z.get(D);
          V !== void 0 || (V = O(D.replace(C, "-$1").toLowerCase().replace(P, "-ms-")), z.set(D, V)), D = V, M = typeof M == "number" ? M === 0 || r.call(E, T) ? "" + M : M + "px" : O(("" + M).trim());
        }
        u ? (u = !1, i.push(' style="', D, ":", M)) : i.push(";", D, ":", M);
      }
    }
    u || i.push('"');
  }
  function ie(i, u, b, T) {
    switch (b) {
      case "style":
        S(i, u, T);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N") {
      if (u = g.hasOwnProperty(b) ? g[b] : null, u !== null) {
        switch (typeof T) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (b = u.attributeName, u.type) {
          case 3:
            T && i.push(" ", b, '=""');
            break;
          case 4:
            T === !0 ? i.push(" ", b, '=""') : T !== !1 && i.push(" ", b, '="', O(T), '"');
            break;
          case 5:
            isNaN(T) || i.push(" ", b, '="', O(T), '"');
            break;
          case 6:
            !isNaN(T) && 1 <= T && i.push(" ", b, '="', O(T), '"');
            break;
          default:
            u.sanitizeURL && (T = "" + T), i.push(" ", b, '="', O(T), '"');
        }
      } else if (p(b)) {
        switch (typeof T) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = b.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        i.push(" ", b, '="', O(T), '"');
      }
    }
  }
  function de(i, u, b) {
    if (u != null) {
      if (b != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && i.push("" + u);
    }
  }
  function ve(i) {
    var u = "";
    return e.Children.forEach(i, function(b) {
      b != null && (u += b);
    }), u;
  }
  function Re(i, u, b, T) {
    i.push(pe(b));
    var M = b = null, D;
    for (D in u) if (r.call(u, D)) {
      var V = u[D];
      if (V != null) switch (D) {
        case "children":
          b = V;
          break;
        case "dangerouslySetInnerHTML":
          M = V;
          break;
        default:
          ie(i, T, D, V);
      }
    }
    return i.push(">"), de(i, M, b), typeof b == "string" ? (i.push(O(b)), null) : b;
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
  function Oe(i, u, b, T, M) {
    switch (u) {
      case "select":
        i.push(pe("select"));
        var D = null, V = null;
        for (Ne in b) if (r.call(b, Ne)) {
          var te = b[Ne];
          if (te != null) switch (Ne) {
            case "children":
              D = te;
              break;
            case "dangerouslySetInnerHTML":
              V = te;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ie(i, T, Ne, te);
          }
        }
        return i.push(">"), de(i, V, D), D;
      case "option":
        V = M.selectedValue, i.push(pe("option"));
        var be = te = null, ke = null, Ne = null;
        for (D in b) if (r.call(b, D)) {
          var it = b[D];
          if (it != null) switch (D) {
            case "children":
              te = it;
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
              ie(i, T, D, it);
          }
        }
        if (V != null) if (b = be !== null ? "" + be : ve(te), F(V)) {
          for (T = 0; T < V.length; T++)
            if ("" + V[T] === b) {
              i.push(' selected=""');
              break;
            }
        } else "" + V === b && i.push(' selected=""');
        else ke && i.push(' selected=""');
        return i.push(">"), de(i, Ne, te), te;
      case "textarea":
        i.push(pe("textarea")), Ne = V = D = null;
        for (te in b) if (r.call(b, te) && (be = b[te], be != null)) switch (te) {
          case "children":
            Ne = be;
            break;
          case "value":
            D = be;
            break;
          case "defaultValue":
            V = be;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ie(
              i,
              T,
              te,
              be
            );
        }
        if (D === null && V !== null && (D = V), i.push(">"), Ne != null) {
          if (D != null) throw Error(t(92));
          if (F(Ne) && 1 < Ne.length) throw Error(t(93));
          D = "" + Ne;
        }
        return typeof D == "string" && D[0] === `
` && i.push(`
`), D !== null && i.push(O("" + D)), null;
      case "input":
        i.push(pe("input")), be = Ne = te = D = null;
        for (V in b) if (r.call(b, V) && (ke = b[V], ke != null)) switch (V) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            be = ke;
            break;
          case "defaultValue":
            te = ke;
            break;
          case "checked":
            Ne = ke;
            break;
          case "value":
            D = ke;
            break;
          default:
            ie(i, T, V, ke);
        }
        return Ne !== null ? ie(i, T, "checked", Ne) : be !== null && ie(i, T, "checked", be), D !== null ? ie(i, T, "value", D) : te !== null && ie(i, T, "value", te), i.push("/>"), null;
      case "menuitem":
        i.push(pe("menuitem"));
        for (var nr in b) if (r.call(b, nr) && (D = b[nr], D != null)) switch (nr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ie(i, T, nr, D);
        }
        return i.push(">"), null;
      case "title":
        i.push(pe("title")), D = null;
        for (it in b) if (r.call(b, it) && (V = b[it], V != null)) switch (it) {
          case "children":
            D = V;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ie(i, T, it, V);
        }
        return i.push(">"), D;
      case "listing":
      case "pre":
        i.push(pe(u)), V = D = null;
        for (be in b) if (r.call(b, be) && (te = b[be], te != null)) switch (be) {
          case "children":
            D = te;
            break;
          case "dangerouslySetInnerHTML":
            V = te;
            break;
          default:
            ie(i, T, be, te);
        }
        if (i.push(">"), V != null) {
          if (D != null) throw Error(t(60));
          if (typeof V != "object" || !("__html" in V)) throw Error(t(61));
          b = V.__html, b != null && (typeof b == "string" && 0 < b.length && b[0] === `
` ? i.push(`
`, b) : i.push("" + b));
        }
        return typeof D == "string" && D[0] === `
` && i.push(`
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
        i.push(pe(u));
        for (var ar in b) if (r.call(b, ar) && (D = b[ar], D != null)) switch (ar) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ie(i, T, ar, D);
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
          b,
          u,
          T
        );
      case "html":
        return M.insertionMode === 0 && i.push("<!DOCTYPE html>"), Re(i, b, u, T);
      default:
        if (u.indexOf("-") === -1 && typeof b.is != "string") return Re(i, b, u, T);
        i.push(pe(u)), V = D = null;
        for (ke in b) if (r.call(b, ke) && (te = b[ke], te != null)) switch (ke) {
          case "children":
            D = te;
            break;
          case "dangerouslySetInnerHTML":
            V = te;
            break;
          case "style":
            S(i, T, te);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            p(ke) && typeof te != "function" && typeof te != "symbol" && i.push(" ", ke, '="', O(te), '"');
        }
        return i.push(">"), de(i, V, D), D;
    }
  }
  function Ee(i, u, b) {
    if (i.push('<!--$?--><template id="'), b === null) throw Error(t(395));
    return i.push(b), i.push('"></template>');
  }
  function Se(i, u, b, T) {
    switch (b.insertionMode) {
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
  function Ke(i, u) {
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
  function Ce(i) {
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
  function Be(i, u, b, T) {
    return b.generateStaticMarkup ? (i.push(O(u)), !1) : (u === "" ? i = T : (T && i.push("<!-- -->"), i.push(O(u)), i = !0), i);
  }
  var ce = Object.assign, H = Symbol.for("react.element"), R = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), j = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), me = Symbol.for("react.scope"), Q = Symbol.for("react.debug_trace_mode"), xe = Symbol.for("react.legacy_hidden"), ae = Symbol.for("react.default_value"), fe = Symbol.iterator;
  function Ve(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case W:
        return "Fragment";
      case R:
        return "Portal";
      case x:
        return "Profiler";
      case B:
        return "StrictMode";
      case ee:
        return "Suspense";
      case ne:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case j:
        return (i.displayName || "Context") + ".Consumer";
      case re:
        return (i._context.displayName || "Context") + ".Provider";
      case le:
        var u = i.render;
        return i = i.displayName, i || (i = u.displayName || u.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case Z:
        return u = i.displayName || null, u !== null ? u : Ve(i.type) || "Memo";
      case oe:
        u = i._payload, i = i._init;
        try {
          return Ve(i(u));
        } catch {
        }
    }
    return null;
  }
  var he = {};
  function pt(i, u) {
    if (i = i.contextTypes, !i) return he;
    var b = {}, T;
    for (T in i) b[T] = u[T];
    return b;
  }
  var Ye = null;
  function _e(i, u) {
    if (i !== u) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var b = u.parent;
      if (i === null) {
        if (b !== null) throw Error(t(401));
      } else {
        if (b === null) throw Error(t(401));
        _e(i, b);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function X(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && X(i);
  }
  function ue(i) {
    var u = i.parent;
    u !== null && ue(u), i.context._currentValue2 = i.value;
  }
  function et(i, u) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === u.depth ? _e(i, u) : et(i, u);
  }
  function $e(i, u) {
    var b = u.parent;
    if (b === null) throw Error(t(402));
    i.depth === b.depth ? _e(i, b) : $e(i, b), u.context._currentValue2 = u.value;
  }
  function Ue(i) {
    var u = Ye;
    u !== i && (u === null ? ue(i) : i === null ? X(u) : u.depth === i.depth ? _e(u, i) : u.depth > i.depth ? et(u, i) : $e(u, i), Ye = i);
  }
  var cr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, u) {
    i = i._reactInternals, i.queue !== null && i.queue.push(u);
  }, enqueueReplaceState: function(i, u) {
    i = i._reactInternals, i.replace = !0, i.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function ur(i, u, b, T) {
    var M = i.state !== void 0 ? i.state : null;
    i.updater = cr, i.props = b, i.state = M;
    var D = { queue: [], replace: !1 };
    i._reactInternals = D;
    var V = u.contextType;
    if (i.context = typeof V == "object" && V !== null ? V._currentValue2 : T, V = u.getDerivedStateFromProps, typeof V == "function" && (V = V(b, M), M = V == null ? M : ce({}, M, V), i.state = M), typeof u.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && cr.enqueueReplaceState(i, i.state, null), D.queue !== null && 0 < D.queue.length) if (u = D.queue, V = D.replace, D.queue = null, D.replace = !1, V && u.length === 1) i.state = u[0];
    else {
      for (D = V ? u[0] : i.state, M = !0, V = V ? 1 : 0; V < u.length; V++) {
        var te = u[V];
        te = typeof te == "function" ? te.call(i, D, b, T) : te, te != null && (M ? (M = !1, D = ce({}, D, te)) : ce(D, te));
      }
      i.state = D;
    }
    else D.queue = null;
  }
  var Zt = { id: 1, overflow: "" };
  function Jt(i, u, b) {
    var T = i.id;
    i = i.overflow;
    var M = 32 - xt(T) - 1;
    T &= ~(1 << M), b += 1;
    var D = 32 - xt(u) + M;
    if (30 < D) {
      var V = M - M % 5;
      return D = (T & (1 << V) - 1).toString(32), T >>= V, M -= V, { id: 1 << 32 - xt(u) + M | b << M | T, overflow: D + i };
    }
    return { id: 1 << D | b << M | T, overflow: i };
  }
  var xt = Math.clz32 ? Math.clz32 : yt, Pt = Math.log, st = Math.LN2;
  function yt(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Pt(i) / st | 0) | 0;
  }
  function Kt(i, u) {
    return i === u && (i !== 0 || 1 / i === 1 / u) || i !== i && u !== u;
  }
  var Qt = typeof Object.is == "function" ? Object.is : Kt, vt = null, At = null, St = null, ze = null, mt = !1, dr = !1, er = 0, ge = null, ft = 0;
  function Dt() {
    if (vt === null) throw Error(t(321));
    return vt;
  }
  function pr() {
    if (0 < ft) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function It() {
    return ze === null ? St === null ? (mt = !1, St = ze = pr()) : (mt = !0, ze = St) : ze.next === null ? (mt = !1, ze = ze.next = pr()) : (mt = !0, ze = ze.next), ze;
  }
  function tr() {
    At = vt = null, dr = !1, St = null, ft = 0, ze = ge = null;
  }
  function fr(i, u) {
    return typeof u == "function" ? u(i) : u;
  }
  function jr(i, u, b) {
    if (vt = Dt(), ze = It(), mt) {
      var T = ze.queue;
      if (u = T.dispatch, ge !== null && (b = ge.get(T), b !== void 0)) {
        ge.delete(T), T = ze.memoizedState;
        do
          T = i(T, b.action), b = b.next;
        while (b !== null);
        return ze.memoizedState = T, [T, u];
      }
      return [ze.memoizedState, u];
    }
    return i = i === fr ? typeof u == "function" ? u() : u : b !== void 0 ? b(u) : u, ze.memoizedState = i, i = ze.queue = { last: null, dispatch: null }, i = i.dispatch = gt.bind(null, vt, i), [ze.memoizedState, i];
  }
  function lt(i, u) {
    if (vt = Dt(), ze = It(), u = u === void 0 ? null : u, ze !== null) {
      var b = ze.memoizedState;
      if (b !== null && u !== null) {
        var T = b[1];
        e: if (T === null) T = !1;
        else {
          for (var M = 0; M < T.length && M < u.length; M++) if (!Qt(u[M], T[M])) {
            T = !1;
            break e;
          }
          T = !0;
        }
        if (T) return b[0];
      }
    }
    return i = i(), ze.memoizedState = [i, u], i;
  }
  function gt(i, u, b) {
    if (25 <= ft) throw Error(t(301));
    if (i === vt) if (dr = !0, i = { action: b, next: null }, ge === null && (ge = /* @__PURE__ */ new Map()), b = ge.get(u), b === void 0) ge.set(u, i);
    else {
      for (u = b; u.next !== null; ) u = u.next;
      u.next = i;
    }
  }
  function vr() {
    throw Error(t(394));
  }
  function Bt() {
  }
  var Wt = { readContext: function(i) {
    return i._currentValue2;
  }, useContext: function(i) {
    return Dt(), i._currentValue2;
  }, useMemo: lt, useReducer: jr, useRef: function(i) {
    vt = Dt(), ze = It();
    var u = ze.memoizedState;
    return u === null ? (i = { current: i }, ze.memoizedState = i) : u;
  }, useState: function(i) {
    return jr(fr, i);
  }, useInsertionEffect: Bt, useLayoutEffect: function() {
  }, useCallback: function(i, u) {
    return lt(function() {
      return i;
    }, u);
  }, useImperativeHandle: Bt, useEffect: Bt, useDebugValue: Bt, useDeferredValue: function(i) {
    return Dt(), i;
  }, useTransition: function() {
    return Dt(), [
      !1,
      vr
    ];
  }, useId: function() {
    var i = At.treeContext, u = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - xt(i) - 1)).toString(32) + u;
    var b = Ht;
    if (b === null) throw Error(t(404));
    return u = er++, i = ":" + b.idPrefix + "R" + i, 0 < u && (i += "H" + u.toString(32)), i + ":";
  }, useMutableSource: function(i, u) {
    return Dt(), u(i._source);
  }, useSyncExternalStore: function(i, u, b) {
    if (b === void 0) throw Error(t(407));
    return b();
  } }, Ht = null, nt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Sr(i) {
    return console.error(i), null;
  }
  function Lt() {
  }
  function wr(i, u, b, T, M, D, V, te, be) {
    var ke = [], Ne = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: T, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ne, pingedTasks: ke, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: M === void 0 ? Sr : M, onAllReady: Lt, onShellReady: V === void 0 ? Lt : V, onShellError: Lt, onFatalError: Lt }, b = hr(u, 0, null, b, !1, !1), b.parentFlushed = !0, i = rr(u, i, null, b, Ne, he, null, Zt), ke.push(i), u;
  }
  function rr(i, u, b, T, M, D, V, te) {
    i.allPendingTasks++, b === null ? i.pendingRootTasks++ : b.pendingTasks++;
    var be = { node: u, ping: function() {
      var ke = i.pingedTasks;
      ke.push(be), ke.length === 1 && Mr(i);
    }, blockedBoundary: b, blockedSegment: T, abortSet: M, legacyContext: D, context: V, treeContext: te };
    return M.add(be), be;
  }
  function hr(i, u, b, T, M, D) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: T, boundary: b, lastPushedText: M, textEmbedded: D };
  }
  function y(i, u) {
    if (i = i.onError(u), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function v(i, u) {
    var b = i.onShellError;
    b(u), b = i.onFatalError, b(u), i.destination !== null ? (i.status = 2, i.destination.destroy(u)) : (i.status = 1, i.fatalError = u);
  }
  function N(i, u, b, T, M) {
    for (vt = {}, At = u, er = 0, i = b(T, M); dr; ) dr = !1, er = 0, ft += 1, ze = null, i = b(T, M);
    return tr(), i;
  }
  function J(i, u, b, T) {
    var M = b.render(), D = T.childContextTypes;
    if (D != null) {
      var V = u.legacyContext;
      if (typeof b.getChildContext != "function") T = V;
      else {
        b = b.getChildContext();
        for (var te in b) if (!(te in D)) throw Error(t(108, Ve(T) || "Unknown", te));
        T = ce({}, V, b);
      }
      u.legacyContext = T, Ae(i, u, M), u.legacyContext = V;
    } else Ae(i, u, M);
  }
  function we(i, u) {
    if (i && i.defaultProps) {
      u = ce({}, u), i = i.defaultProps;
      for (var b in i) u[b] === void 0 && (u[b] = i[b]);
      return u;
    }
    return u;
  }
  function Te(i, u, b, T, M) {
    if (typeof b == "function") if (b.prototype && b.prototype.isReactComponent) {
      M = pt(b, u.legacyContext);
      var D = b.contextType;
      D = new b(T, typeof D == "object" && D !== null ? D._currentValue2 : M), ur(D, b, T, M), J(i, u, D, b);
    } else {
      D = pt(b, u.legacyContext), M = N(i, u, b, T, D);
      var V = er !== 0;
      if (typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0) ur(M, b, T, D), J(i, u, M, b);
      else if (V) {
        T = u.treeContext, u.treeContext = Jt(T, 1, 0);
        try {
          Ae(i, u, M);
        } finally {
          u.treeContext = T;
        }
      } else Ae(i, u, M);
    }
    else if (typeof b == "string") {
      switch (M = u.blockedSegment, D = Oe(M.chunks, b, T, i.responseState, M.formatContext), M.lastPushedText = !1, V = M.formatContext, M.formatContext = Y(V, b, T), Qe(i, u, D), M.formatContext = V, b) {
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
          M.chunks.push("</", b, ">");
      }
      M.lastPushedText = !1;
    } else {
      switch (b) {
        case xe:
        case Q:
        case B:
        case x:
        case W:
          Ae(i, u, T.children);
          return;
        case ne:
          Ae(i, u, T.children);
          return;
        case me:
          throw Error(t(343));
        case ee:
          e: {
            b = u.blockedBoundary, M = u.blockedSegment, D = T.fallback, T = T.children, V = /* @__PURE__ */ new Set();
            var te = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: V, errorDigest: null }, be = hr(i, M.chunks.length, te, M.formatContext, !1, !1);
            M.children.push(be), M.lastPushedText = !1;
            var ke = hr(i, 0, null, M.formatContext, !1, !1);
            ke.parentFlushed = !0, u.blockedBoundary = te, u.blockedSegment = ke;
            try {
              if (Qe(
                i,
                u,
                T
              ), i.responseState.generateStaticMarkup || ke.lastPushedText && ke.textEmbedded && ke.chunks.push("<!-- -->"), ke.status = 1, Ge(te, ke), te.pendingTasks === 0) break e;
            } catch (Ne) {
              ke.status = 4, te.forceClientRender = !0, te.errorDigest = y(i, Ne);
            } finally {
              u.blockedBoundary = b, u.blockedSegment = M;
            }
            u = rr(i, D, b, be, V, u.legacyContext, u.context, u.treeContext), i.pingedTasks.push(u);
          }
          return;
      }
      if (typeof b == "object" && b !== null) switch (b.$$typeof) {
        case le:
          if (T = N(i, u, b.render, T, M), er !== 0) {
            b = u.treeContext, u.treeContext = Jt(b, 1, 0);
            try {
              Ae(i, u, T);
            } finally {
              u.treeContext = b;
            }
          } else Ae(i, u, T);
          return;
        case Z:
          b = b.type, T = we(b, T), Te(i, u, b, T, M);
          return;
        case re:
          if (M = T.children, b = b._context, T = T.value, D = b._currentValue2, b._currentValue2 = T, V = Ye, Ye = T = { parent: V, depth: V === null ? 0 : V.depth + 1, context: b, parentValue: D, value: T }, u.context = T, Ae(i, u, M), i = Ye, i === null) throw Error(t(403));
          T = i.parentValue, i.context._currentValue2 = T === ae ? i.context._defaultValue : T, i = Ye = i.parent, u.context = i;
          return;
        case j:
          T = T.children, T = T(b._currentValue2), Ae(i, u, T);
          return;
        case oe:
          M = b._init, b = M(b._payload), T = we(b, T), Te(
            i,
            u,
            b,
            T,
            void 0
          );
          return;
      }
      throw Error(t(130, b == null ? b : typeof b, ""));
    }
  }
  function Ae(i, u, b) {
    if (u.node = b, typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case H:
          Te(i, u, b.type, b.props, b.ref);
          return;
        case R:
          throw Error(t(257));
        case oe:
          var T = b._init;
          b = T(b._payload), Ae(i, u, b);
          return;
      }
      if (F(b)) {
        qe(i, u, b);
        return;
      }
      if (b === null || typeof b != "object" ? T = null : (T = fe && b[fe] || b["@@iterator"], T = typeof T == "function" ? T : null), T && (T = T.call(b))) {
        if (b = T.next(), !b.done) {
          var M = [];
          do
            M.push(b.value), b = T.next();
          while (!b.done);
          qe(i, u, M);
        }
        return;
      }
      throw i = Object.prototype.toString.call(b), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : i));
    }
    typeof b == "string" ? (T = u.blockedSegment, T.lastPushedText = Be(u.blockedSegment.chunks, b, i.responseState, T.lastPushedText)) : typeof b == "number" && (T = u.blockedSegment, T.lastPushedText = Be(u.blockedSegment.chunks, "" + b, i.responseState, T.lastPushedText));
  }
  function qe(i, u, b) {
    for (var T = b.length, M = 0; M < T; M++) {
      var D = u.treeContext;
      u.treeContext = Jt(D, T, M);
      try {
        Qe(i, u, b[M]);
      } finally {
        u.treeContext = D;
      }
    }
  }
  function Qe(i, u, b) {
    var T = u.blockedSegment.formatContext, M = u.legacyContext, D = u.context;
    try {
      return Ae(i, u, b);
    } catch (be) {
      if (tr(), typeof be == "object" && be !== null && typeof be.then == "function") {
        b = be;
        var V = u.blockedSegment, te = hr(i, V.chunks.length, null, V.formatContext, V.lastPushedText, !0);
        V.children.push(te), V.lastPushedText = !1, i = rr(i, u.node, u.blockedBoundary, te, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, b.then(i, i), u.blockedSegment.formatContext = T, u.legacyContext = M, u.context = D, Ue(D);
      } else throw u.blockedSegment.formatContext = T, u.legacyContext = M, u.context = D, Ue(D), be;
    }
  }
  function wt(i) {
    var u = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Mt(this, u, i);
  }
  function tt(i, u, b) {
    var T = i.blockedBoundary;
    i.blockedSegment.status = 3, T === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (T.pendingTasks--, T.forceClientRender || (T.forceClientRender = !0, i = b === void 0 ? Error(t(432)) : b, T.errorDigest = u.onError(i), T.parentFlushed && u.clientRenderedBoundaries.push(T)), T.fallbackAbortableTasks.forEach(function(M) {
      return tt(M, u, b);
    }), T.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (T = u.onAllReady, T()));
  }
  function Ge(i, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var b = u.children[0];
      b.id = u.id, b.parentFlushed = !0, b.status === 1 && Ge(i, b);
    } else i.completedSegments.push(u);
  }
  function Mt(i, u, b) {
    if (u === null) {
      if (b.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = b;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Lt, u = i.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (b.parentFlushed && b.status === 1 && Ge(u, b), u.parentFlushed && i.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(wt, i), u.fallbackAbortableTasks.clear()) : b.parentFlushed && b.status === 1 && (Ge(u, b), u.completedSegments.length === 1 && u.parentFlushed && i.partialBoundaries.push(u)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Mr(i) {
    if (i.status !== 2) {
      var u = Ye, b = nt.current;
      nt.current = Wt;
      var T = Ht;
      Ht = i.responseState;
      try {
        var M = i.pingedTasks, D;
        for (D = 0; D < M.length; D++) {
          var V = M[D], te = i, be = V.blockedSegment;
          if (be.status === 0) {
            Ue(V.context);
            try {
              Ae(te, V, V.node), te.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), V.abortSet.delete(V), be.status = 1, Mt(te, V.blockedBoundary, be);
            } catch (Ft) {
              if (tr(), typeof Ft == "object" && Ft !== null && typeof Ft.then == "function") {
                var ke = V.ping;
                Ft.then(ke, ke);
              } else {
                V.abortSet.delete(V), be.status = 4;
                var Ne = V.blockedBoundary, it = Ft, nr = y(te, it);
                if (Ne === null ? v(te, it) : (Ne.pendingTasks--, Ne.forceClientRender || (Ne.forceClientRender = !0, Ne.errorDigest = nr, Ne.parentFlushed && te.clientRenderedBoundaries.push(Ne))), te.allPendingTasks--, te.allPendingTasks === 0) {
                  var ar = te.onAllReady;
                  ar();
                }
              }
            } finally {
            }
          }
        }
        M.splice(0, D), i.destination !== null && en(i, i.destination);
      } catch (Ft) {
        y(i, Ft), v(i, Ft);
      } finally {
        Ht = T, nt.current = b, b === Wt && Ue(u);
      }
    }
  }
  function Fr(i, u, b) {
    switch (b.parentFlushed = !0, b.status) {
      case 0:
        var T = b.id = i.nextSegmentId++;
        return b.lastPushedText = !1, b.textEmbedded = !1, i = i.responseState, u.push('<template id="'), u.push(i.placeholderPrefix), i = T.toString(16), u.push(i), u.push('"></template>');
      case 1:
        b.status = 2;
        var M = !0;
        T = b.chunks;
        var D = 0;
        b = b.children;
        for (var V = 0; V < b.length; V++) {
          for (M = b[V]; D < M.index; D++) u.push(T[D]);
          M = $r(i, u, M);
        }
        for (; D < T.length - 1; D++) u.push(T[D]);
        return D < T.length && (M = u.push(T[D])), M;
      default:
        throw Error(t(390));
    }
  }
  function $r(i, u, b) {
    var T = b.boundary;
    if (T === null) return Fr(i, u, b);
    if (T.parentFlushed = !0, T.forceClientRender) return i.responseState.generateStaticMarkup || (T = T.errorDigest, u.push("<!--$!-->"), u.push("<template"), T && (u.push(' data-dgst="'), T = O(T), u.push(T), u.push('"')), u.push("></template>")), Fr(i, u, b), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
    if (0 < T.pendingTasks) {
      T.rootSegmentID = i.nextSegmentId++, 0 < T.completedSegments.length && i.partialBoundaries.push(T);
      var M = i.responseState, D = M.nextSuspenseID++;
      return M = M.boundaryPrefix + D.toString(16), T = T.id = M, Ee(u, i.responseState, T), Fr(i, u, b), u.push("<!--/$-->");
    }
    if (T.byteSize > i.progressiveChunkSize) return T.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(T), Ee(u, i.responseState, T.id), Fr(i, u, b), u.push("<!--/$-->");
    if (i.responseState.generateStaticMarkup || u.push("<!--$-->"), b = T.completedSegments, b.length !== 1) throw Error(t(391));
    return $r(i, u, b[0]), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
  }
  function fn(i, u, b) {
    return Se(u, i.responseState, b.formatContext, b.id), $r(i, u, b), Ke(u, b.formatContext);
  }
  function hn(i, u, b) {
    for (var T = b.completedSegments, M = 0; M < T.length; M++) mn(i, u, b, T[M]);
    if (T.length = 0, i = i.responseState, T = b.id, b = b.rootSegmentID, u.push(i.startInlineScript), i.sentCompleteBoundaryFunction ? u.push('$RC("') : (i.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), T === null) throw Error(t(395));
    return b = b.toString(16), u.push(T), u.push('","'), u.push(i.segmentPrefix), u.push(b), u.push('")<\/script>');
  }
  function mn(i, u, b, T) {
    if (T.status === 2) return !0;
    var M = T.id;
    if (M === -1) {
      if ((T.id = b.rootSegmentID) === -1) throw Error(t(392));
      return fn(i, u, T);
    }
    return fn(i, u, T), i = i.responseState, u.push(i.startInlineScript), i.sentCompleteSegmentFunction ? u.push('$RS("') : (i.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(i.segmentPrefix), M = M.toString(16), u.push(M), u.push('","'), u.push(i.placeholderPrefix), u.push(M), u.push('")<\/script>');
  }
  function en(i, u) {
    try {
      var b = i.completedRootSegment;
      if (b !== null && i.pendingRootTasks === 0) {
        $r(i, u, b), i.completedRootSegment = null;
        var T = i.responseState.bootstrapChunks;
        for (b = 0; b < T.length - 1; b++) u.push(T[b]);
        b < T.length && u.push(T[b]);
      }
      var M = i.clientRenderedBoundaries, D;
      for (D = 0; D < M.length; D++) {
        var V = M[D];
        T = u;
        var te = i.responseState, be = V.id, ke = V.errorDigest, Ne = V.errorMessage, it = V.errorComponentStack;
        if (T.push(te.startInlineScript), te.sentClientRenderFunction ? T.push('$RX("') : (te.sentClientRenderFunction = !0, T.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), be === null) throw Error(t(395));
        if (T.push(be), T.push('"'), ke || Ne || it) {
          T.push(",");
          var nr = Ce(ke || "");
          T.push(nr);
        }
        if (Ne || it) {
          T.push(",");
          var ar = Ce(Ne || "");
          T.push(ar);
        }
        if (it) {
          T.push(",");
          var Ft = Ce(it);
          T.push(Ft);
        }
        if (!T.push(")<\/script>")) {
          i.destination = null, D++, M.splice(0, D);
          return;
        }
      }
      M.splice(0, D);
      var Ur = i.completedBoundaries;
      for (D = 0; D < Ur.length; D++) if (!hn(i, u, Ur[D])) {
        i.destination = null, D++, Ur.splice(0, D);
        return;
      }
      Ur.splice(0, D);
      var kr = i.partialBoundaries;
      for (D = 0; D < kr.length; D++) {
        var bn = kr[D];
        e: {
          M = i, V = u;
          var zr = bn.completedSegments;
          for (te = 0; te < zr.length; te++) if (!mn(M, V, bn, zr[te])) {
            te++, zr.splice(0, te);
            var Zn = !1;
            break e;
          }
          zr.splice(0, te), Zn = !0;
        }
        if (!Zn) {
          i.destination = null, D++, kr.splice(0, D);
          return;
        }
      }
      kr.splice(0, D);
      var Nr = i.completedBoundaries;
      for (D = 0; D < Nr.length; D++) if (!hn(i, u, Nr[D])) {
        i.destination = null, D++, Nr.splice(0, D);
        return;
      }
      Nr.splice(0, D);
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function Yn(i, u) {
    try {
      var b = i.abortableTasks;
      b.forEach(function(T) {
        return tt(T, i, u);
      }), b.clear(), i.destination !== null && en(i, i.destination);
    } catch (T) {
      y(i, T), v(i, T);
    }
  }
  function Xn() {
  }
  function gn(i, u, b, T) {
    var M = !1, D = null, V = "", te = { push: function(ke) {
      return ke !== null && (V += ke), !0;
    }, destroy: function(ke) {
      M = !0, D = ke;
    } }, be = !1;
    if (i = wr(i, Fe(b, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Xn, void 0, function() {
      be = !0;
    }), Mr(i), Yn(i, T), i.status === 1) i.status = 2, te.destroy(i.fatalError);
    else if (i.status !== 2 && i.destination === null) {
      i.destination = te;
      try {
        en(i, te);
      } catch (ke) {
        y(i, ke), v(i, ke);
      }
    }
    if (M) throw D;
    if (!be) throw Error(t(426));
    return V;
  }
  return Br.renderToNodeStream = function() {
    throw Error(t(207));
  }, Br.renderToStaticMarkup = function(i, u) {
    return gn(i, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Br.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Br.renderToString = function(i, u) {
    return gn(i, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Br.version = "18.3.1", Br;
}
var pa = {}, as;
function ud() {
  if (as) return pa;
  as = 1;
  var e = ht;
  function t(o) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, m = 1; m < arguments.length; m++) c += "&args[]=" + encodeURIComponent(arguments[m]);
    return "Minified React error #" + o + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function a(o, c) {
    if (c.length !== 0) if (512 < c.length) 0 < n && (o.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), o.enqueue(c);
    else {
      var m = r.length - n;
      m < c.length && (m === 0 ? o.enqueue(r) : (r.set(c.subarray(0, m), n), o.enqueue(r), c = c.subarray(m)), r = new Uint8Array(512), n = 0), r.set(c, n), n += c.length;
    }
  }
  function s(o, c) {
    return a(o, c), !0;
  }
  function p(o) {
    r && 0 < n && (o.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var h = new TextEncoder();
  function g(o) {
    return h.encode(o);
  }
  function f(o) {
    return h.encode(o);
  }
  function k(o, c) {
    typeof o.error == "function" ? o.error(c) : o.close();
  }
  var E = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, O = {};
  function C(o) {
    return E.call(O, o) ? !0 : E.call($, o) ? !1 : _.test(o) ? O[o] = !0 : ($[o] = !0, !1);
  }
  function P(o, c, m, w, L, I, G) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = w, this.attributeNamespace = L, this.mustUseProperty = m, this.propertyName = o, this.type = c, this.sanitizeURL = I, this.removeEmptyString = G;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    F[o] = new P(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var c = o[0];
    F[c] = new P(c, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    F[o] = new P(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    F[o] = new P(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    F[o] = new P(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    F[o] = new P(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    F[o] = new P(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    F[o] = new P(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    F[o] = new P(o, 5, !1, o.toLowerCase(), null, !1, !1);
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
    F[c] = new P(c, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var c = o.replace(U, Y);
    F[c] = new P(c, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var c = o.replace(U, Y);
    F[c] = new P(c, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    F[o] = new P(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    F[o] = new P(o, 1, !1, o.toLowerCase(), null, !0, !0);
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
  Object.keys(z).forEach(function(o) {
    S.forEach(function(c) {
      c = c + o.charAt(0).toUpperCase() + o.substring(1), z[c] = z[o];
    });
  });
  var ie = /["'&<>]/;
  function de(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var c = ie.exec(o);
    if (c) {
      var m = "", w, L = 0;
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
        L !== w && (m += o.substring(L, w)), L = w + 1, m += c;
      }
      o = L !== w ? m + o.substring(L, w) : m;
    }
    return o;
  }
  var ve = /([A-Z])/g, Re = /^ms-/, Me = Array.isArray, se = f("<script>"), pe = f("<\/script>"), Oe = f('<script src="'), Ee = f('<script type="module" src="'), Se = f('" async=""><\/script>'), Ke = /(<\/|<)(s)(cript)/gi;
  function je(o, c, m, w) {
    return "" + c + (m === "s" ? "\\u0073" : "\\u0053") + w;
  }
  function Ce(o, c, m, w, L) {
    o = o === void 0 ? "" : o, c = c === void 0 ? se : f('<script nonce="' + de(c) + '">');
    var I = [];
    if (m !== void 0 && I.push(c, g(("" + m).replace(Ke, je)), pe), w !== void 0) for (m = 0; m < w.length; m++) I.push(Oe, g(de(w[m])), Se);
    if (L !== void 0) for (w = 0; w < L.length; w++) I.push(Ee, g(de(L[w])), Se);
    return { bootstrapChunks: I, startInlineScript: c, placeholderPrefix: f(o + "P:"), segmentPrefix: f(o + "S:"), boundaryPrefix: o + "B:", idPrefix: o, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Fe(o, c) {
    return { insertionMode: o, selectedValue: c };
  }
  function Be(o) {
    return Fe(o === "http://www.w3.org/2000/svg" ? 2 : o === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function ce(o, c, m) {
    switch (c) {
      case "select":
        return Fe(1, m.value != null ? m.value : m.defaultValue);
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
  var H = f("<!-- -->");
  function R(o, c, m, w) {
    return c === "" ? w : (w && o.push(H), o.push(g(de(c))), !0);
  }
  var W = /* @__PURE__ */ new Map(), B = f(' style="'), x = f(":"), re = f(";");
  function j(o, c, m) {
    if (typeof m != "object") throw Error(t(62));
    c = !0;
    for (var w in m) if (E.call(m, w)) {
      var L = m[w];
      if (L != null && typeof L != "boolean" && L !== "") {
        if (w.indexOf("--") === 0) {
          var I = g(de(w));
          L = g(de(("" + L).trim()));
        } else {
          I = w;
          var G = W.get(I);
          G !== void 0 || (G = f(de(I.replace(ve, "-$1").toLowerCase().replace(Re, "-ms-"))), W.set(I, G)), I = G, L = typeof L == "number" ? L === 0 || E.call(z, w) ? g("" + L) : g(L + "px") : g(de(("" + L).trim()));
        }
        c ? (c = !1, o.push(B, I, x, L)) : o.push(re, I, x, L);
      }
    }
    c || o.push(ne);
  }
  var le = f(" "), ee = f('="'), ne = f('"'), Z = f('=""');
  function oe(o, c, m, w) {
    switch (m) {
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
    if (!(2 < m.length) || m[0] !== "o" && m[0] !== "O" || m[1] !== "n" && m[1] !== "N") {
      if (c = F.hasOwnProperty(m) ? F[m] : null, c !== null) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (m = g(c.attributeName), c.type) {
          case 3:
            w && o.push(le, m, Z);
            break;
          case 4:
            w === !0 ? o.push(le, m, Z) : w !== !1 && o.push(le, m, ee, g(de(w)), ne);
            break;
          case 5:
            isNaN(w) || o.push(le, m, ee, g(de(w)), ne);
            break;
          case 6:
            !isNaN(w) && 1 <= w && o.push(le, m, ee, g(de(w)), ne);
            break;
          default:
            c.sanitizeURL && (w = "" + w), o.push(le, m, ee, g(de(w)), ne);
        }
      } else if (C(m)) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = m.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        o.push(le, g(m), ee, g(de(w)), ne);
      }
    }
  }
  var me = f(">"), Q = f("/>");
  function xe(o, c, m) {
    if (c != null) {
      if (m != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && o.push(g("" + c));
    }
  }
  function ae(o) {
    var c = "";
    return e.Children.forEach(o, function(m) {
      m != null && (c += m);
    }), c;
  }
  var fe = f(' selected=""');
  function Ve(o, c, m, w) {
    o.push(_e(m));
    var L = m = null, I;
    for (I in c) if (E.call(c, I)) {
      var G = c[I];
      if (G != null) switch (I) {
        case "children":
          m = G;
          break;
        case "dangerouslySetInnerHTML":
          L = G;
          break;
        default:
          oe(o, w, I, G);
      }
    }
    return o.push(me), xe(o, L, m), typeof m == "string" ? (o.push(g(de(m))), null) : m;
  }
  var he = f(`
`), pt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ye = /* @__PURE__ */ new Map();
  function _e(o) {
    var c = Ye.get(o);
    if (c === void 0) {
      if (!pt.test(o)) throw Error(t(65, o));
      c = f("<" + o), Ye.set(o, c);
    }
    return c;
  }
  var X = f("<!DOCTYPE html>");
  function ue(o, c, m, w, L) {
    switch (c) {
      case "select":
        o.push(_e("select"));
        var I = null, G = null;
        for (Pe in m) if (E.call(m, Pe)) {
          var K = m[Pe];
          if (K != null) switch (Pe) {
            case "children":
              I = K;
              break;
            case "dangerouslySetInnerHTML":
              G = K;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              oe(o, w, Pe, K);
          }
        }
        return o.push(me), xe(o, G, I), I;
      case "option":
        G = L.selectedValue, o.push(_e("option"));
        var ye = K = null, De = null, Pe = null;
        for (I in m) if (E.call(m, I)) {
          var at = m[I];
          if (at != null) switch (I) {
            case "children":
              K = at;
              break;
            case "selected":
              De = at;
              break;
            case "dangerouslySetInnerHTML":
              Pe = at;
              break;
            case "value":
              ye = at;
            default:
              oe(o, w, I, at);
          }
        }
        if (G != null) if (m = ye !== null ? "" + ye : ae(K), Me(G)) {
          for (w = 0; w < G.length; w++)
            if ("" + G[w] === m) {
              o.push(fe);
              break;
            }
        } else "" + G === m && o.push(fe);
        else De && o.push(fe);
        return o.push(me), xe(o, Pe, K), K;
      case "textarea":
        o.push(_e("textarea")), Pe = G = I = null;
        for (K in m) if (E.call(m, K) && (ye = m[K], ye != null)) switch (K) {
          case "children":
            Pe = ye;
            break;
          case "value":
            I = ye;
            break;
          case "defaultValue":
            G = ye;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            oe(o, w, K, ye);
        }
        if (I === null && G !== null && (I = G), o.push(me), Pe != null) {
          if (I != null) throw Error(t(92));
          if (Me(Pe) && 1 < Pe.length) throw Error(t(93));
          I = "" + Pe;
        }
        return typeof I == "string" && I[0] === `
` && o.push(he), I !== null && o.push(g(de("" + I))), null;
      case "input":
        o.push(_e("input")), ye = Pe = K = I = null;
        for (G in m) if (E.call(m, G) && (De = m[G], De != null)) switch (G) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ye = De;
            break;
          case "defaultValue":
            K = De;
            break;
          case "checked":
            Pe = De;
            break;
          case "value":
            I = De;
            break;
          default:
            oe(o, w, G, De);
        }
        return Pe !== null ? oe(
          o,
          w,
          "checked",
          Pe
        ) : ye !== null && oe(o, w, "checked", ye), I !== null ? oe(o, w, "value", I) : K !== null && oe(o, w, "value", K), o.push(Q), null;
      case "menuitem":
        o.push(_e("menuitem"));
        for (var Ut in m) if (E.call(m, Ut) && (I = m[Ut], I != null)) switch (Ut) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            oe(o, w, Ut, I);
        }
        return o.push(me), null;
      case "title":
        o.push(_e("title")), I = null;
        for (at in m) if (E.call(m, at) && (G = m[at], G != null)) switch (at) {
          case "children":
            I = G;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            oe(o, w, at, G);
        }
        return o.push(me), I;
      case "listing":
      case "pre":
        o.push(_e(c)), G = I = null;
        for (ye in m) if (E.call(m, ye) && (K = m[ye], K != null)) switch (ye) {
          case "children":
            I = K;
            break;
          case "dangerouslySetInnerHTML":
            G = K;
            break;
          default:
            oe(o, w, ye, K);
        }
        if (o.push(me), G != null) {
          if (I != null) throw Error(t(60));
          if (typeof G != "object" || !("__html" in G)) throw Error(t(61));
          m = G.__html, m != null && (typeof m == "string" && 0 < m.length && m[0] === `
` ? o.push(he, g(m)) : o.push(g("" + m)));
        }
        return typeof I == "string" && I[0] === `
` && o.push(he), I;
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
        for (var ir in m) if (E.call(m, ir) && (I = m[ir], I != null)) switch (ir) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            oe(o, w, ir, I);
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
        return Ve(o, m, c, w);
      case "html":
        return L.insertionMode === 0 && o.push(X), Ve(o, m, c, w);
      default:
        if (c.indexOf("-") === -1 && typeof m.is != "string") return Ve(o, m, c, w);
        o.push(_e(c)), G = I = null;
        for (De in m) if (E.call(m, De) && (K = m[De], K != null)) switch (De) {
          case "children":
            I = K;
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
            C(De) && typeof K != "function" && typeof K != "symbol" && o.push(le, g(De), ee, g(de(K)), ne);
        }
        return o.push(me), xe(o, G, I), I;
    }
  }
  var et = f("</"), $e = f(">"), Ue = f('<template id="'), cr = f('"></template>'), ur = f("<!--$-->"), Zt = f('<!--$?--><template id="'), Jt = f('"></template>'), xt = f("<!--$!-->"), Pt = f("<!--/$-->"), st = f("<template"), yt = f('"'), Kt = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var Qt = f("></template>");
  function vt(o, c, m) {
    if (a(o, Zt), m === null) throw Error(t(395));
    return a(o, m), s(o, Jt);
  }
  var At = f('<div hidden id="'), St = f('">'), ze = f("</div>"), mt = f('<svg aria-hidden="true" style="display:none" id="'), dr = f('">'), er = f("</svg>"), ge = f('<math aria-hidden="true" style="display:none" id="'), ft = f('">'), Dt = f("</math>"), pr = f('<table hidden id="'), It = f('">'), tr = f("</table>"), fr = f('<table hidden><tbody id="'), jr = f('">'), lt = f("</tbody></table>"), gt = f('<table hidden><tr id="'), vr = f('">'), Bt = f("</tr></table>"), Wt = f('<table hidden><colgroup id="'), Ht = f('">'), nt = f("</colgroup></table>");
  function Sr(o, c, m, w) {
    switch (m.insertionMode) {
      case 0:
      case 1:
        return a(o, At), a(o, c.segmentPrefix), a(o, g(w.toString(16))), s(o, St);
      case 2:
        return a(o, mt), a(o, c.segmentPrefix), a(o, g(w.toString(16))), s(o, dr);
      case 3:
        return a(o, ge), a(o, c.segmentPrefix), a(o, g(w.toString(16))), s(o, ft);
      case 4:
        return a(o, pr), a(o, c.segmentPrefix), a(o, g(w.toString(16))), s(o, It);
      case 5:
        return a(o, fr), a(o, c.segmentPrefix), a(o, g(w.toString(16))), s(o, jr);
      case 6:
        return a(o, gt), a(o, c.segmentPrefix), a(o, g(w.toString(16))), s(o, vr);
      case 7:
        return a(
          o,
          Wt
        ), a(o, c.segmentPrefix), a(o, g(w.toString(16))), s(o, Ht);
      default:
        throw Error(t(397));
    }
  }
  function Lt(o, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(o, ze);
      case 2:
        return s(o, er);
      case 3:
        return s(o, Dt);
      case 4:
        return s(o, tr);
      case 5:
        return s(o, lt);
      case 6:
        return s(o, Bt);
      case 7:
        return s(o, nt);
      default:
        throw Error(t(397));
    }
  }
  var wr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), rr = f('$RS("'), hr = f('","'), y = f('")<\/script>'), v = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), N = f('$RC("'), J = f('","'), we = f('")<\/script>'), Te = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ae = f('$RX("'), qe = f('"'), Qe = f(")<\/script>"), wt = f(","), tt = /[<\u2028\u2029]/g;
  function Ge(o) {
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
  var Mt = Object.assign, Mr = Symbol.for("react.element"), Fr = Symbol.for("react.portal"), $r = Symbol.for("react.fragment"), fn = Symbol.for("react.strict_mode"), hn = Symbol.for("react.profiler"), mn = Symbol.for("react.provider"), en = Symbol.for("react.context"), Yn = Symbol.for("react.forward_ref"), Xn = Symbol.for("react.suspense"), gn = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), b = Symbol.for("react.scope"), T = Symbol.for("react.debug_trace_mode"), M = Symbol.for("react.legacy_hidden"), D = Symbol.for("react.default_value"), V = Symbol.iterator;
  function te(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case $r:
        return "Fragment";
      case Fr:
        return "Portal";
      case hn:
        return "Profiler";
      case fn:
        return "StrictMode";
      case Xn:
        return "Suspense";
      case gn:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case en:
        return (o.displayName || "Context") + ".Consumer";
      case mn:
        return (o._context.displayName || "Context") + ".Provider";
      case Yn:
        var c = o.render;
        return o = o.displayName, o || (o = c.displayName || c.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case i:
        return c = o.displayName || null, c !== null ? c : te(o.type) || "Memo";
      case u:
        c = o._payload, o = o._init;
        try {
          return te(o(c));
        } catch {
        }
    }
    return null;
  }
  var be = {};
  function ke(o, c) {
    if (o = o.contextTypes, !o) return be;
    var m = {}, w;
    for (w in o) m[w] = c[w];
    return m;
  }
  var Ne = null;
  function it(o, c) {
    if (o !== c) {
      o.context._currentValue = o.parentValue, o = o.parent;
      var m = c.parent;
      if (o === null) {
        if (m !== null) throw Error(t(401));
      } else {
        if (m === null) throw Error(t(401));
        it(o, m);
      }
      c.context._currentValue = c.value;
    }
  }
  function nr(o) {
    o.context._currentValue = o.parentValue, o = o.parent, o !== null && nr(o);
  }
  function ar(o) {
    var c = o.parent;
    c !== null && ar(c), o.context._currentValue = o.value;
  }
  function Ft(o, c) {
    if (o.context._currentValue = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === c.depth ? it(o, c) : Ft(o, c);
  }
  function Ur(o, c) {
    var m = c.parent;
    if (m === null) throw Error(t(402));
    o.depth === m.depth ? it(o, m) : Ur(o, m), c.context._currentValue = c.value;
  }
  function kr(o) {
    var c = Ne;
    c !== o && (c === null ? ar(o) : o === null ? nr(c) : c.depth === o.depth ? it(c, o) : c.depth > o.depth ? Ft(c, o) : Ur(c, o), Ne = o);
  }
  var bn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, c) {
    o = o._reactInternals, o.queue !== null && o.queue.push(c);
  }, enqueueReplaceState: function(o, c) {
    o = o._reactInternals, o.replace = !0, o.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function zr(o, c, m, w) {
    var L = o.state !== void 0 ? o.state : null;
    o.updater = bn, o.props = m, o.state = L;
    var I = { queue: [], replace: !1 };
    o._reactInternals = I;
    var G = c.contextType;
    if (o.context = typeof G == "object" && G !== null ? G._currentValue : w, G = c.getDerivedStateFromProps, typeof G == "function" && (G = G(m, L), L = G == null ? L : Mt({}, L, G), o.state = L), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (c = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), c !== o.state && bn.enqueueReplaceState(o, o.state, null), I.queue !== null && 0 < I.queue.length) if (c = I.queue, G = I.replace, I.queue = null, I.replace = !1, G && c.length === 1) o.state = c[0];
    else {
      for (I = G ? c[0] : o.state, L = !0, G = G ? 1 : 0; G < c.length; G++) {
        var K = c[G];
        K = typeof K == "function" ? K.call(o, I, m, w) : K, K != null && (L ? (L = !1, I = Mt({}, I, K)) : Mt(I, K));
      }
      o.state = I;
    }
    else I.queue = null;
  }
  var Zn = { id: 1, overflow: "" };
  function Nr(o, c, m) {
    var w = o.id;
    o = o.overflow;
    var L = 32 - Jn(w) - 1;
    w &= ~(1 << L), m += 1;
    var I = 32 - Jn(c) + L;
    if (30 < I) {
      var G = L - L % 5;
      return I = (w & (1 << G) - 1).toString(32), w >>= G, L -= G, { id: 1 << 32 - Jn(c) + L | m << L | w, overflow: I + o };
    }
    return { id: 1 << I | m << L | w, overflow: o };
  }
  var Jn = Math.clz32 ? Math.clz32 : gu, hu = Math.log, mu = Math.LN2;
  function gu(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (hu(o) / mu | 0) | 0;
  }
  function bu(o, c) {
    return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
  }
  var yu = typeof Object.is == "function" ? Object.is : bu, Tr = null, Ba = null, Kn = null, rt = null, yn = !1, Qn = !1, xn = 0, Rr = null, ea = 0;
  function qr() {
    if (Tr === null) throw Error(t(321));
    return Tr;
  }
  function To() {
    if (0 < ea) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Wa() {
    return rt === null ? Kn === null ? (yn = !1, Kn = rt = To()) : (yn = !0, rt = Kn) : rt.next === null ? (yn = !1, rt = rt.next = To()) : (yn = !0, rt = rt.next), rt;
  }
  function Ha() {
    Ba = Tr = null, Qn = !1, Kn = null, ea = 0, rt = Rr = null;
  }
  function Ao(o, c) {
    return typeof c == "function" ? c(o) : c;
  }
  function Co(o, c, m) {
    if (Tr = qr(), rt = Wa(), yn) {
      var w = rt.queue;
      if (c = w.dispatch, Rr !== null && (m = Rr.get(w), m !== void 0)) {
        Rr.delete(w), w = rt.memoizedState;
        do
          w = o(w, m.action), m = m.next;
        while (m !== null);
        return rt.memoizedState = w, [w, c];
      }
      return [rt.memoizedState, c];
    }
    return o = o === Ao ? typeof c == "function" ? c() : c : m !== void 0 ? m(c) : c, rt.memoizedState = o, o = rt.queue = { last: null, dispatch: null }, o = o.dispatch = xu.bind(null, Tr, o), [rt.memoizedState, o];
  }
  function Eo(o, c) {
    if (Tr = qr(), rt = Wa(), c = c === void 0 ? null : c, rt !== null) {
      var m = rt.memoizedState;
      if (m !== null && c !== null) {
        var w = m[1];
        e: if (w === null) w = !1;
        else {
          for (var L = 0; L < w.length && L < c.length; L++) if (!yu(c[L], w[L])) {
            w = !1;
            break e;
          }
          w = !0;
        }
        if (w) return m[0];
      }
    }
    return o = o(), rt.memoizedState = [o, c], o;
  }
  function xu(o, c, m) {
    if (25 <= ea) throw Error(t(301));
    if (o === Tr) if (Qn = !0, o = { action: m, next: null }, Rr === null && (Rr = /* @__PURE__ */ new Map()), m = Rr.get(c), m === void 0) Rr.set(c, o);
    else {
      for (c = m; c.next !== null; ) c = c.next;
      c.next = o;
    }
  }
  function vu() {
    throw Error(t(394));
  }
  function ta() {
  }
  var _o = { readContext: function(o) {
    return o._currentValue;
  }, useContext: function(o) {
    return qr(), o._currentValue;
  }, useMemo: Eo, useReducer: Co, useRef: function(o) {
    Tr = qr(), rt = Wa();
    var c = rt.memoizedState;
    return c === null ? (o = { current: o }, rt.memoizedState = o) : c;
  }, useState: function(o) {
    return Co(Ao, o);
  }, useInsertionEffect: ta, useLayoutEffect: function() {
  }, useCallback: function(o, c) {
    return Eo(function() {
      return o;
    }, c);
  }, useImperativeHandle: ta, useEffect: ta, useDebugValue: ta, useDeferredValue: function(o) {
    return qr(), o;
  }, useTransition: function() {
    return qr(), [!1, vu];
  }, useId: function() {
    var o = Ba.treeContext, c = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Jn(o) - 1)).toString(32) + c;
    var m = ra;
    if (m === null) throw Error(t(404));
    return c = xn++, o = ":" + m.idPrefix + "R" + o, 0 < c && (o += "H" + c.toString(32)), o + ":";
  }, useMutableSource: function(o, c) {
    return qr(), c(o._source);
  }, useSyncExternalStore: function(o, c, m) {
    if (m === void 0) throw Error(t(407));
    return m();
  } }, ra = null, Va = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Su(o) {
    return console.error(o), null;
  }
  function vn() {
  }
  function wu(o, c, m, w, L, I, G, K, ye) {
    var De = [], Pe = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: w === void 0 ? 12800 : w, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Pe, pingedTasks: De, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? Su : L, onAllReady: I === void 0 ? vn : I, onShellReady: G === void 0 ? vn : G, onShellError: K === void 0 ? vn : K, onFatalError: ye === void 0 ? vn : ye }, m = na(c, 0, null, m, !1, !1), m.parentFlushed = !0, o = Ga(c, o, null, m, Pe, be, null, Zn), De.push(o), c;
  }
  function Ga(o, c, m, w, L, I, G, K) {
    o.allPendingTasks++, m === null ? o.pendingRootTasks++ : m.pendingTasks++;
    var ye = { node: c, ping: function() {
      var De = o.pingedTasks;
      De.push(ye), De.length === 1 && Io(o);
    }, blockedBoundary: m, blockedSegment: w, abortSet: L, legacyContext: I, context: G, treeContext: K };
    return L.add(ye), ye;
  }
  function na(o, c, m, w, L, I) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: w, boundary: m, lastPushedText: L, textEmbedded: I };
  }
  function Sn(o, c) {
    if (o = o.onError(c), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function aa(o, c) {
    var m = o.onShellError;
    m(c), m = o.onFatalError, m(c), o.destination !== null ? (o.status = 2, k(o.destination, c)) : (o.status = 1, o.fatalError = c);
  }
  function Oo(o, c, m, w, L) {
    for (Tr = {}, Ba = c, xn = 0, o = m(w, L); Qn; ) Qn = !1, xn = 0, ea += 1, rt = null, o = m(w, L);
    return Ha(), o;
  }
  function jo(o, c, m, w) {
    var L = m.render(), I = w.childContextTypes;
    if (I != null) {
      var G = c.legacyContext;
      if (typeof m.getChildContext != "function") w = G;
      else {
        m = m.getChildContext();
        for (var K in m) if (!(K in I)) throw Error(t(108, te(w) || "Unknown", K));
        w = Mt({}, G, m);
      }
      c.legacyContext = w, $t(o, c, L), c.legacyContext = G;
    } else $t(o, c, L);
  }
  function No(o, c) {
    if (o && o.defaultProps) {
      c = Mt({}, c), o = o.defaultProps;
      for (var m in o) c[m] === void 0 && (c[m] = o[m]);
      return c;
    }
    return c;
  }
  function Ya(o, c, m, w, L) {
    if (typeof m == "function") if (m.prototype && m.prototype.isReactComponent) {
      L = ke(m, c.legacyContext);
      var I = m.contextType;
      I = new m(w, typeof I == "object" && I !== null ? I._currentValue : L), zr(I, m, w, L), jo(o, c, I, m);
    } else {
      I = ke(m, c.legacyContext), L = Oo(o, c, m, w, I);
      var G = xn !== 0;
      if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0) zr(L, m, w, I), jo(o, c, L, m);
      else if (G) {
        w = c.treeContext, c.treeContext = Nr(w, 1, 0);
        try {
          $t(o, c, L);
        } finally {
          c.treeContext = w;
        }
      } else $t(o, c, L);
    }
    else if (typeof m == "string") {
      switch (L = c.blockedSegment, I = ue(L.chunks, m, w, o.responseState, L.formatContext), L.lastPushedText = !1, G = L.formatContext, L.formatContext = ce(G, m, w), Xa(o, c, I), L.formatContext = G, m) {
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
          L.chunks.push(et, g(m), $e);
      }
      L.lastPushedText = !1;
    } else {
      switch (m) {
        case M:
        case T:
        case fn:
        case hn:
        case $r:
          $t(o, c, w.children);
          return;
        case gn:
          $t(o, c, w.children);
          return;
        case b:
          throw Error(t(343));
        case Xn:
          e: {
            m = c.blockedBoundary, L = c.blockedSegment, I = w.fallback, w = w.children, G = /* @__PURE__ */ new Set();
            var K = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: G, errorDigest: null }, ye = na(o, L.chunks.length, K, L.formatContext, !1, !1);
            L.children.push(ye), L.lastPushedText = !1;
            var De = na(o, 0, null, L.formatContext, !1, !1);
            De.parentFlushed = !0, c.blockedBoundary = K, c.blockedSegment = De;
            try {
              if (Xa(
                o,
                c,
                w
              ), De.lastPushedText && De.textEmbedded && De.chunks.push(H), De.status = 1, ia(K, De), K.pendingTasks === 0) break e;
            } catch (Pe) {
              De.status = 4, K.forceClientRender = !0, K.errorDigest = Sn(o, Pe);
            } finally {
              c.blockedBoundary = m, c.blockedSegment = L;
            }
            c = Ga(o, I, m, ye, G, c.legacyContext, c.context, c.treeContext), o.pingedTasks.push(c);
          }
          return;
      }
      if (typeof m == "object" && m !== null) switch (m.$$typeof) {
        case Yn:
          if (w = Oo(o, c, m.render, w, L), xn !== 0) {
            m = c.treeContext, c.treeContext = Nr(m, 1, 0);
            try {
              $t(o, c, w);
            } finally {
              c.treeContext = m;
            }
          } else $t(o, c, w);
          return;
        case i:
          m = m.type, w = No(m, w), Ya(o, c, m, w, L);
          return;
        case mn:
          if (L = w.children, m = m._context, w = w.value, I = m._currentValue, m._currentValue = w, G = Ne, Ne = w = { parent: G, depth: G === null ? 0 : G.depth + 1, context: m, parentValue: I, value: w }, c.context = w, $t(o, c, L), o = Ne, o === null) throw Error(t(403));
          w = o.parentValue, o.context._currentValue = w === D ? o.context._defaultValue : w, o = Ne = o.parent, c.context = o;
          return;
        case en:
          w = w.children, w = w(m._currentValue), $t(o, c, w);
          return;
        case u:
          L = m._init, m = L(m._payload), w = No(m, w), Ya(o, c, m, w, void 0);
          return;
      }
      throw Error(t(
        130,
        m == null ? m : typeof m,
        ""
      ));
    }
  }
  function $t(o, c, m) {
    if (c.node = m, typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Mr:
          Ya(o, c, m.type, m.props, m.ref);
          return;
        case Fr:
          throw Error(t(257));
        case u:
          var w = m._init;
          m = w(m._payload), $t(o, c, m);
          return;
      }
      if (Me(m)) {
        Ro(o, c, m);
        return;
      }
      if (m === null || typeof m != "object" ? w = null : (w = V && m[V] || m["@@iterator"], w = typeof w == "function" ? w : null), w && (w = w.call(m))) {
        if (m = w.next(), !m.done) {
          var L = [];
          do
            L.push(m.value), m = w.next();
          while (!m.done);
          Ro(o, c, L);
        }
        return;
      }
      throw o = Object.prototype.toString.call(m), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : o));
    }
    typeof m == "string" ? (w = c.blockedSegment, w.lastPushedText = R(c.blockedSegment.chunks, m, o.responseState, w.lastPushedText)) : typeof m == "number" && (w = c.blockedSegment, w.lastPushedText = R(c.blockedSegment.chunks, "" + m, o.responseState, w.lastPushedText));
  }
  function Ro(o, c, m) {
    for (var w = m.length, L = 0; L < w; L++) {
      var I = c.treeContext;
      c.treeContext = Nr(I, w, L);
      try {
        Xa(o, c, m[L]);
      } finally {
        c.treeContext = I;
      }
    }
  }
  function Xa(o, c, m) {
    var w = c.blockedSegment.formatContext, L = c.legacyContext, I = c.context;
    try {
      return $t(o, c, m);
    } catch (ye) {
      if (Ha(), typeof ye == "object" && ye !== null && typeof ye.then == "function") {
        m = ye;
        var G = c.blockedSegment, K = na(o, G.chunks.length, null, G.formatContext, G.lastPushedText, !0);
        G.children.push(K), G.lastPushedText = !1, o = Ga(o, c.node, c.blockedBoundary, K, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, m.then(o, o), c.blockedSegment.formatContext = w, c.legacyContext = L, c.context = I, kr(I);
      } else throw c.blockedSegment.formatContext = w, c.legacyContext = L, c.context = I, kr(I), ye;
    }
  }
  function ku(o) {
    var c = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, Do(this, c, o);
  }
  function Po(o, c, m) {
    var w = o.blockedBoundary;
    o.blockedSegment.status = 3, w === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (w.pendingTasks--, w.forceClientRender || (w.forceClientRender = !0, o = m === void 0 ? Error(t(432)) : m, w.errorDigest = c.onError(o), w.parentFlushed && c.clientRenderedBoundaries.push(w)), w.fallbackAbortableTasks.forEach(function(L) {
      return Po(L, c, m);
    }), w.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (w = c.onAllReady, w()));
  }
  function ia(o, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var m = c.children[0];
      m.id = c.id, m.parentFlushed = !0, m.status === 1 && ia(o, m);
    } else o.completedSegments.push(c);
  }
  function Do(o, c, m) {
    if (c === null) {
      if (m.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = m;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = vn, c = o.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (m.parentFlushed && m.status === 1 && ia(c, m), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(ku, o), c.fallbackAbortableTasks.clear()) : m.parentFlushed && m.status === 1 && (ia(c, m), c.completedSegments.length === 1 && c.parentFlushed && o.partialBoundaries.push(c)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function Io(o) {
    if (o.status !== 2) {
      var c = Ne, m = Va.current;
      Va.current = _o;
      var w = ra;
      ra = o.responseState;
      try {
        var L = o.pingedTasks, I;
        for (I = 0; I < L.length; I++) {
          var G = L[I], K = o, ye = G.blockedSegment;
          if (ye.status === 0) {
            kr(G.context);
            try {
              $t(K, G, G.node), ye.lastPushedText && ye.textEmbedded && ye.chunks.push(H), G.abortSet.delete(G), ye.status = 1, Do(K, G.blockedBoundary, ye);
            } catch (or) {
              if (Ha(), typeof or == "object" && or !== null && typeof or.then == "function") {
                var De = G.ping;
                or.then(De, De);
              } else {
                G.abortSet.delete(G), ye.status = 4;
                var Pe = G.blockedBoundary, at = or, Ut = Sn(K, at);
                if (Pe === null ? aa(K, at) : (Pe.pendingTasks--, Pe.forceClientRender || (Pe.forceClientRender = !0, Pe.errorDigest = Ut, Pe.parentFlushed && K.clientRenderedBoundaries.push(Pe))), K.allPendingTasks--, K.allPendingTasks === 0) {
                  var ir = K.onAllReady;
                  ir();
                }
              }
            } finally {
            }
          }
        }
        L.splice(0, I), o.destination !== null && Za(o, o.destination);
      } catch (or) {
        Sn(o, or), aa(o, or);
      } finally {
        ra = w, Va.current = m, m === _o && kr(c);
      }
    }
  }
  function oa(o, c, m) {
    switch (m.parentFlushed = !0, m.status) {
      case 0:
        var w = m.id = o.nextSegmentId++;
        return m.lastPushedText = !1, m.textEmbedded = !1, o = o.responseState, a(c, Ue), a(c, o.placeholderPrefix), o = g(w.toString(16)), a(c, o), s(c, cr);
      case 1:
        m.status = 2;
        var L = !0;
        w = m.chunks;
        var I = 0;
        m = m.children;
        for (var G = 0; G < m.length; G++) {
          for (L = m[G]; I < L.index; I++) a(c, w[I]);
          L = sa(o, c, L);
        }
        for (; I < w.length - 1; I++) a(c, w[I]);
        return I < w.length && (L = s(c, w[I])), L;
      default:
        throw Error(t(390));
    }
  }
  function sa(o, c, m) {
    var w = m.boundary;
    if (w === null) return oa(o, c, m);
    if (w.parentFlushed = !0, w.forceClientRender) w = w.errorDigest, s(c, xt), a(c, st), w && (a(c, Kt), a(c, g(de(w))), a(c, yt)), s(c, Qt), oa(o, c, m);
    else if (0 < w.pendingTasks) {
      w.rootSegmentID = o.nextSegmentId++, 0 < w.completedSegments.length && o.partialBoundaries.push(w);
      var L = o.responseState, I = L.nextSuspenseID++;
      L = f(L.boundaryPrefix + I.toString(16)), w = w.id = L, vt(c, o.responseState, w), oa(o, c, m);
    } else if (w.byteSize > o.progressiveChunkSize) w.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(w), vt(c, o.responseState, w.id), oa(o, c, m);
    else {
      if (s(c, ur), m = w.completedSegments, m.length !== 1) throw Error(t(391));
      sa(o, c, m[0]);
    }
    return s(c, Pt);
  }
  function Lo(o, c, m) {
    return Sr(c, o.responseState, m.formatContext, m.id), sa(o, c, m), Lt(c, m.formatContext);
  }
  function Mo(o, c, m) {
    for (var w = m.completedSegments, L = 0; L < w.length; L++) Fo(o, c, m, w[L]);
    if (w.length = 0, o = o.responseState, w = m.id, m = m.rootSegmentID, a(c, o.startInlineScript), o.sentCompleteBoundaryFunction ? a(c, N) : (o.sentCompleteBoundaryFunction = !0, a(c, v)), w === null) throw Error(t(395));
    return m = g(m.toString(16)), a(c, w), a(c, J), a(c, o.segmentPrefix), a(c, m), s(c, we);
  }
  function Fo(o, c, m, w) {
    if (w.status === 2) return !0;
    var L = w.id;
    if (L === -1) {
      if ((w.id = m.rootSegmentID) === -1) throw Error(t(392));
      return Lo(o, c, w);
    }
    return Lo(o, c, w), o = o.responseState, a(c, o.startInlineScript), o.sentCompleteSegmentFunction ? a(c, rr) : (o.sentCompleteSegmentFunction = !0, a(c, wr)), a(c, o.segmentPrefix), L = g(L.toString(16)), a(c, L), a(c, hr), a(c, o.placeholderPrefix), a(c, L), s(c, y);
  }
  function Za(o, c) {
    r = new Uint8Array(512), n = 0;
    try {
      var m = o.completedRootSegment;
      if (m !== null && o.pendingRootTasks === 0) {
        sa(o, c, m), o.completedRootSegment = null;
        var w = o.responseState.bootstrapChunks;
        for (m = 0; m < w.length - 1; m++) a(c, w[m]);
        m < w.length && s(c, w[m]);
      }
      var L = o.clientRenderedBoundaries, I;
      for (I = 0; I < L.length; I++) {
        var G = L[I];
        w = c;
        var K = o.responseState, ye = G.id, De = G.errorDigest, Pe = G.errorMessage, at = G.errorComponentStack;
        if (a(w, K.startInlineScript), K.sentClientRenderFunction ? a(w, Ae) : (K.sentClientRenderFunction = !0, a(
          w,
          Te
        )), ye === null) throw Error(t(395));
        a(w, ye), a(w, qe), (De || Pe || at) && (a(w, wt), a(w, g(Ge(De || "")))), (Pe || at) && (a(w, wt), a(w, g(Ge(Pe || "")))), at && (a(w, wt), a(w, g(Ge(at)))), s(w, Qe);
      }
      L.splice(0, I);
      var Ut = o.completedBoundaries;
      for (I = 0; I < Ut.length; I++) Mo(o, c, Ut[I]);
      Ut.splice(0, I), p(c), r = new Uint8Array(512), n = 0;
      var ir = o.partialBoundaries;
      for (I = 0; I < ir.length; I++) {
        var or = ir[I];
        e: {
          L = o, G = c;
          var la = or.completedSegments;
          for (K = 0; K < la.length; K++) if (!Fo(
            L,
            G,
            or,
            la[K]
          )) {
            K++, la.splice(0, K);
            var Uo = !1;
            break e;
          }
          la.splice(0, K), Uo = !0;
        }
        if (!Uo) {
          o.destination = null, I++, ir.splice(0, I);
          return;
        }
      }
      ir.splice(0, I);
      var Ja = o.completedBoundaries;
      for (I = 0; I < Ja.length; I++) Mo(o, c, Ja[I]);
      Ja.splice(0, I);
    } finally {
      p(c), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && c.close();
    }
  }
  function $o(o, c) {
    try {
      var m = o.abortableTasks;
      m.forEach(function(w) {
        return Po(w, o, c);
      }), m.clear(), o.destination !== null && Za(o, o.destination);
    } catch (w) {
      Sn(o, w), aa(o, w);
    }
  }
  return pa.renderToReadableStream = function(o, c) {
    return new Promise(function(m, w) {
      var L, I, G = new Promise(function(Pe, at) {
        I = Pe, L = at;
      }), K = wu(o, Ce(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), Be(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, I, function() {
        var Pe = new ReadableStream({ type: "bytes", pull: function(at) {
          if (K.status === 1) K.status = 2, k(at, K.fatalError);
          else if (K.status !== 2 && K.destination === null) {
            K.destination = at;
            try {
              Za(K, at);
            } catch (Ut) {
              Sn(K, Ut), aa(K, Ut);
            }
          }
        }, cancel: function() {
          $o(K);
        } }, { highWaterMark: 0 });
        Pe.allReady = G, m(Pe);
      }, function(Pe) {
        G.catch(function() {
        }), w(Pe);
      }, L);
      if (c && c.signal) {
        var ye = c.signal, De = function() {
          $o(K, ye.reason), ye.removeEventListener("abort", De);
        };
        ye.addEventListener("abort", De);
      }
      Io(K);
    });
  }, pa.version = "18.3.1", pa;
}
var un, yl;
un = cd(), yl = ud();
un.version;
un.renderToString;
un.renderToStaticMarkup;
un.renderToNodeStream;
un.renderToStaticNodeStream;
yl.renderToReadableStream;
const dd = "staticMarkup";
function Qi() {
  const e = rl().indexOf(dd) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const Lr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Qi(), { onClick: a, ...s } = r.props;
  if (n)
    return ht.cloneElement(r, {
      ...s,
      onClick: (g) => (e && e.event && e.action && hl(e), a ? a(g) : !0)
    });
  let p = "";
  ["input", "header", "header-input"].includes(t) && (p = `-${t}`);
  const h = {
    [`data-ga${p}`]: e.text,
    [`data-ga${p}-name`]: e.name,
    [`data-ga${p}-event`]: e.event,
    [`data-ga${p}-action`]: e.action,
    [`data-ga${p}-type`]: e.type,
    [`data-ga${p}-region`]: e.region,
    [`data-ga${p}-section`]: e.section,
    [`data-ga${p}-component`]: e.component
  };
  return ht.cloneElement(r, {
    ...s,
    onClick: a,
    ...h
  });
}, xl = Xi(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: n,
    onClick: a,
    gaData: s
  }, p) => {
    var h, g, f, k, E, _;
    const $ = e === n, O = $ ? "open" : "close";
    return /* @__PURE__ */ q.jsxs(
      "div",
      {
        ref: p,
        className: ot("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (h = r.content) == null ? void 0 : h.icon
        }),
        children: [
          /* @__PURE__ */ q.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ q.jsx("h4", { children: /* @__PURE__ */ q.jsx(
            Lr,
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
                  onClick: (C) => a(C, e),
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
                  dangerouslySetInnerHTML: Vr(
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
xl.propTypes = {
  id: l.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: bl,
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
}, eo = ({ cards: e, openedCard: t }) => {
  const [r, n] = ct(t), a = `accordion-${rl()}`, s = Zr(
    /** @type { HTMLDivElement[]} */
    []
  ), p = (h, g) => {
    if (h.preventDefault(), r !== g) {
      const f = s.current[r - 1], k = f == null ? void 0 : f.lastElementChild;
      od(k), n(g);
    } else
      n(null);
  };
  return /* @__PURE__ */ q.jsx("div", { className: "accordion", id: a, children: e == null ? void 0 : e.map(
    (h, g) => h.content.body && h.content.header && /* @__PURE__ */ q.jsx(
      xl,
      {
        ref: (f) => {
          s.current[g] = f;
        },
        id: g + 1,
        parentId: a,
        item: h,
        openCard: r,
        onClick: p,
        gaData: pd
      },
      g + 1
    )
  ) });
};
eo.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: l.arrayOf(bl).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: l.number
};
const is = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, _r = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  block: a,
  color: s = "gray",
  disabled: p,
  element: h = "button",
  href: g,
  icon: f,
  innerRef: k,
  onClick: E,
  size: _ = "default",
  variant: $,
  classes: O,
  target: C = "_self",
  ...P
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
    let S = h;
    return g && h === "button" && (S = "a"), /* @__PURE__ */ q.jsx(
      Lr,
      {
        gaData: {
          ...is,
          section: t,
          ...r,
          text: e
        },
        children: /* @__PURE__ */ q.jsxs(
          S,
          {
            type: S === "button" && E ? "button" : void 0,
            ...P,
            className: ot(O) || z,
            href: g,
            ref: k,
            onClick: E,
            "aria-label": n,
            target: S === "a" ? C : null,
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
    "btn-block": a,
    disabled: p
  });
  let U = h;
  return g && h === "button" && (U = "a"), /* @__PURE__ */ q.jsx(
    Lr,
    {
      gaData: {
        ...is,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ q.jsxs(
        U,
        {
          type: U === "button" && E ? "button" : void 0,
          ...P,
          className: ot(O) || F,
          href: g,
          ref: k,
          onClick: E,
          "aria-label": n,
          target: U === "a" ? C : null,
          children: [
            f && /* @__PURE__ */ q.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
_r.propTypes = {
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
  gaData: Ki,
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
var vl = { exports: {} }, Xe = {}, os;
function fd() {
  if (os) return Xe;
  os = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), $ = Symbol.for("react.client.reference");
  function O(C) {
    if (typeof C == "object" && C !== null) {
      var P = C.$$typeof;
      switch (P) {
        case e:
          switch (C = C.type, C) {
            case r:
            case a:
            case n:
            case g:
            case f:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case p:
                case h:
                case E:
                case k:
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
  return Xe.ContextConsumer = s, Xe.ContextProvider = p, Xe.Element = e, Xe.ForwardRef = h, Xe.Fragment = r, Xe.Lazy = E, Xe.Memo = k, Xe.Portal = t, Xe.Profiler = a, Xe.StrictMode = n, Xe.Suspense = g, Xe.SuspenseList = f, Xe.isContextConsumer = function(C) {
    return O(C) === s;
  }, Xe.isContextProvider = function(C) {
    return O(C) === p;
  }, Xe.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === e;
  }, Xe.isForwardRef = function(C) {
    return O(C) === h;
  }, Xe.isFragment = function(C) {
    return O(C) === r;
  }, Xe.isLazy = function(C) {
    return O(C) === E;
  }, Xe.isMemo = function(C) {
    return O(C) === k;
  }, Xe.isPortal = function(C) {
    return O(C) === t;
  }, Xe.isProfiler = function(C) {
    return O(C) === a;
  }, Xe.isStrictMode = function(C) {
    return O(C) === n;
  }, Xe.isSuspense = function(C) {
    return O(C) === g;
  }, Xe.isSuspenseList = function(C) {
    return O(C) === f;
  }, Xe.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === r || C === a || C === n || C === g || C === f || C === _ || typeof C == "object" && C !== null && (C.$$typeof === E || C.$$typeof === k || C.$$typeof === p || C.$$typeof === s || C.$$typeof === h || C.$$typeof === $ || C.getModuleId !== void 0);
  }, Xe.typeOf = O, Xe;
}
vl.exports = fd();
var Sl = vl.exports;
function hd(e) {
  function t(H, R, W, B, x) {
    for (var re = 0, j = 0, le = 0, ee = 0, ne, Z, oe = 0, me = 0, Q, xe = Q = ne = 0, ae = 0, fe = 0, Ve = 0, he = 0, pt = W.length, Ye = pt - 1, _e, X = "", ue = "", et = "", $e = "", Ue; ae < pt; ) {
      if (Z = W.charCodeAt(ae), ae === Ye && j + ee + le + re !== 0 && (j !== 0 && (Z = j === 47 ? 10 : 47), ee = le = re = 0, pt++, Ye++), j + ee + le + re === 0) {
        if (ae === Ye && (0 < fe && (X = X.replace(_, "")), 0 < X.trim().length)) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              X += W.charAt(ae);
          }
          Z = 59;
        }
        switch (Z) {
          case 123:
            for (X = X.trim(), ne = X.charCodeAt(0), Q = 1, he = ++ae; ae < pt; ) {
              switch (Z = W.charCodeAt(ae)) {
                case 123:
                  Q++;
                  break;
                case 125:
                  Q--;
                  break;
                case 47:
                  switch (Z = W.charCodeAt(ae + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (xe = ae + 1; xe < Ye; ++xe)
                          switch (W.charCodeAt(xe)) {
                            case 47:
                              if (Z === 42 && W.charCodeAt(xe - 1) === 42 && ae + 2 !== xe) {
                                ae = xe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Z === 47) {
                                ae = xe + 1;
                                break e;
                              }
                          }
                        ae = xe;
                      }
                  }
                  break;
                case 91:
                  Z++;
                case 40:
                  Z++;
                case 34:
                case 39:
                  for (; ae++ < Ye && W.charCodeAt(ae) !== Z; )
                    ;
              }
              if (Q === 0) break;
              ae++;
            }
            switch (Q = W.substring(he, ae), ne === 0 && (ne = (X = X.replace(E, "").trim()).charCodeAt(0)), ne) {
              case 64:
                switch (0 < fe && (X = X.replace(_, "")), Z = X.charCodeAt(1), Z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = R;
                    break;
                  default:
                    fe = Ke;
                }
                if (Q = t(R, fe, Q, Z, x + 1), he = Q.length, 0 < Ce && (fe = r(Ke, X, Ve), Ue = h(3, Q, fe, R, Oe, pe, he, Z, x, B), X = fe.join(""), Ue !== void 0 && (he = (Q = Ue.trim()).length) === 0 && (Z = 0, Q = "")), 0 < he) switch (Z) {
                  case 115:
                    X = X.replace(ie, p);
                  case 100:
                  case 109:
                  case 45:
                    Q = X + "{" + Q + "}";
                    break;
                  case 107:
                    X = X.replace(U, "$1 $2"), Q = X + "{" + Q + "}", Q = Se === 1 || Se === 2 && s("@" + Q, 3) ? "@-webkit-" + Q + "@" + Q : "@" + Q;
                    break;
                  default:
                    Q = X + Q, B === 112 && (Q = (ue += Q, ""));
                }
                else Q = "";
                break;
              default:
                Q = t(R, r(R, X, Ve), Q, B, x + 1);
            }
            et += Q, Q = Ve = fe = xe = ne = 0, X = "", Z = W.charCodeAt(++ae);
            break;
          case 125:
          case 59:
            if (X = (0 < fe ? X.replace(_, "") : X).trim(), 1 < (he = X.length)) switch (xe === 0 && (ne = X.charCodeAt(0), ne === 45 || 96 < ne && 123 > ne) && (he = (X = X.replace(" ", ":")).length), 0 < Ce && (Ue = h(1, X, R, H, Oe, pe, ue.length, B, x, B)) !== void 0 && (he = (X = Ue.trim()).length) === 0 && (X = "\0\0"), ne = X.charCodeAt(0), Z = X.charCodeAt(1), ne) {
              case 0:
                break;
              case 64:
                if (Z === 105 || Z === 99) {
                  $e += X + W.charAt(ae);
                  break;
                }
              default:
                X.charCodeAt(he - 1) !== 58 && (ue += a(X, ne, Z, X.charCodeAt(2)));
            }
            Ve = fe = xe = ne = 0, X = "", Z = W.charCodeAt(++ae);
        }
      }
      switch (Z) {
        case 13:
        case 10:
          j === 47 ? j = 0 : 1 + ne === 0 && B !== 107 && 0 < X.length && (fe = 1, X += "\0"), 0 < Ce * Be && h(0, X, R, H, Oe, pe, ue.length, B, x, B), pe = 1, Oe++;
          break;
        case 59:
        case 125:
          if (j + ee + le + re === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, _e = W.charAt(ae), Z) {
            case 9:
            case 32:
              if (ee + re + j === 0) switch (oe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  _e = "";
                  break;
                default:
                  Z !== 32 && (_e = " ");
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
              ee + j + re === 0 && (fe = Ve = 1, _e = "\f" + _e);
              break;
            case 108:
              if (ee + j + re + Ee === 0 && 0 < xe) switch (ae - xe) {
                case 2:
                  oe === 112 && W.charCodeAt(ae - 3) === 58 && (Ee = oe);
                case 8:
                  me === 111 && (Ee = me);
              }
              break;
            case 58:
              ee + j + re === 0 && (xe = ae);
              break;
            case 44:
              j + le + ee + re === 0 && (fe = 1, _e += "\r");
              break;
            case 34:
            case 39:
              j === 0 && (ee = ee === Z ? 0 : ee === 0 ? Z : ee);
              break;
            case 91:
              ee + j + le === 0 && re++;
              break;
            case 93:
              ee + j + le === 0 && re--;
              break;
            case 41:
              ee + j + re === 0 && le--;
              break;
            case 40:
              if (ee + j + re === 0) {
                if (ne === 0) switch (2 * oe + 3 * me) {
                  case 533:
                    break;
                  default:
                    ne = 1;
                }
                le++;
              }
              break;
            case 64:
              j + le + ee + re + xe + Q === 0 && (Q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + re + le)) switch (j) {
                case 0:
                  switch (2 * Z + 3 * W.charCodeAt(ae + 1)) {
                    case 235:
                      j = 47;
                      break;
                    case 220:
                      he = ae, j = 42;
                  }
                  break;
                case 42:
                  Z === 47 && oe === 42 && he + 2 !== ae && (W.charCodeAt(he + 2) === 33 && (ue += W.substring(he, ae + 1)), _e = "", j = 0);
              }
          }
          j === 0 && (X += _e);
      }
      me = oe, oe = Z, ae++;
    }
    if (he = ue.length, 0 < he) {
      if (fe = R, 0 < Ce && (Ue = h(2, ue, fe, H, Oe, pe, he, B, x, B), Ue !== void 0 && (ue = Ue).length === 0)) return $e + ue + et;
      if (ue = fe.join(",") + "{" + ue + "}", Se * Ee !== 0) {
        switch (Se !== 2 || s(ue, 2) || (Ee = 0), Ee) {
          case 111:
            ue = ue.replace(z, ":-moz-$1") + ue;
            break;
          case 112:
            ue = ue.replace(Y, "::-webkit-input-$1") + ue.replace(Y, "::-moz-$1") + ue.replace(Y, ":-ms-input-$1") + ue;
        }
        Ee = 0;
      }
    }
    return $e + ue + et;
  }
  function r(H, R, W) {
    var B = R.trim().split(P);
    R = B;
    var x = B.length, re = H.length;
    switch (re) {
      case 0:
      case 1:
        var j = 0;
        for (H = re === 0 ? "" : H[0] + " "; j < x; ++j)
          R[j] = n(H, R[j], W).trim();
        break;
      default:
        var le = j = 0;
        for (R = []; j < x; ++j)
          for (var ee = 0; ee < re; ++ee)
            R[le++] = n(H[ee] + " ", B[j], W).trim();
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
  function a(H, R, W, B) {
    var x = H + ";", re = 2 * R + 3 * W + 4 * B;
    if (re === 944) {
      H = x.indexOf(":", 9) + 1;
      var j = x.substring(H, x.length - 1).trim();
      return j = x.substring(0, H).trim() + j + ";", Se === 1 || Se === 2 && s(j, 1) ? "-webkit-" + j + j : j;
    }
    if (Se === 0 || Se === 2 && !s(x, 1)) return x;
    switch (re) {
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
        return O.test(x) ? x.replace($, ":-webkit-") + x.replace($, ":-moz-") + x : x;
      case 1e3:
        switch (j = x.substring(13).trim(), R = j.indexOf("-") + 1, j.charCodeAt(0) + j.charCodeAt(R)) {
          case 226:
            j = x.replace(S, "tb");
            break;
          case 232:
            j = x.replace(S, "tb-rl");
            break;
          case 220:
            j = x.replace(S, "lr");
            break;
          default:
            return x;
        }
        return "-webkit-" + x + "-ms-" + j + x;
      case 1017:
        if (x.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (R = (x = H).length - 10, j = (x.charCodeAt(R) === 33 ? x.substring(0, R) : x).substring(H.indexOf(":", 7) + 1).trim(), re = j.charCodeAt(0) + (j.charCodeAt(7) | 0)) {
          case 203:
            if (111 > j.charCodeAt(8)) break;
          case 115:
            x = x.replace(j, "-webkit-" + j) + ";" + x;
            break;
          case 207:
          case 102:
            x = x.replace(j, "-webkit-" + (102 < re ? "inline-" : "") + "box") + ";" + x.replace(j, "-webkit-" + j) + ";" + x.replace(j, "-ms-" + j + "box") + ";" + x;
        }
        return x + ";";
      case 938:
        if (x.charCodeAt(5) === 45) switch (x.charCodeAt(6)) {
          case 105:
            return j = x.replace("-items", ""), "-webkit-" + x + "-webkit-box-" + j + "-ms-flex-" + j + x;
          case 115:
            return "-webkit-" + x + "-ms-flex-item-" + x.replace(ve, "") + x;
          default:
            return "-webkit-" + x + "-ms-flex-line-pack" + x.replace("align-content", "").replace(ve, "") + x;
        }
        break;
      case 973:
      case 989:
        if (x.charCodeAt(3) !== 45 || x.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Me.test(H) === !0) return (j = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(H.replace("stretch", "fill-available"), R, W, B).replace(":fill-available", ":stretch") : x.replace(j, "-webkit-" + j) + x.replace(j, "-moz-" + j.replace("fill-", "")) + x;
        break;
      case 962:
        if (x = "-webkit-" + x + (x.charCodeAt(5) === 102 ? "-ms-" + x : "") + x, W + B === 211 && x.charCodeAt(13) === 105 && 0 < x.indexOf("transform", 10)) return x.substring(0, x.indexOf(";", 27) + 1).replace(C, "$1-webkit-$2") + x;
    }
    return x;
  }
  function s(H, R) {
    var W = H.indexOf(R === 1 ? ":" : "{"), B = H.substring(0, R !== 3 ? W : 10);
    return W = H.substring(W + 1, H.length - 1), Fe(R !== 2 ? B : B.replace(Re, "$1"), W, R);
  }
  function p(H, R) {
    var W = a(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return W !== R + ";" ? W.replace(de, " or ($1)").substring(4) : "(" + R + ")";
  }
  function h(H, R, W, B, x, re, j, le, ee, ne) {
    for (var Z = 0, oe = R, me; Z < Ce; ++Z)
      switch (me = je[Z].call(k, H, oe, W, B, x, re, j, le, ee, ne)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          oe = me;
      }
    if (oe !== R) return oe;
  }
  function g(H) {
    switch (H) {
      case void 0:
      case null:
        Ce = je.length = 0;
        break;
      default:
        if (typeof H == "function") je[Ce++] = H;
        else if (typeof H == "object") for (var R = 0, W = H.length; R < W; ++R)
          g(H[R]);
        else Be = !!H | 0;
    }
    return g;
  }
  function f(H) {
    return H = H.prefix, H !== void 0 && (Fe = null, H ? typeof H != "function" ? Se = 1 : (Se = 2, Fe = H) : Se = 0), f;
  }
  function k(H, R) {
    var W = H;
    if (33 > W.charCodeAt(0) && (W = W.trim()), ce = W, W = [ce], 0 < Ce) {
      var B = h(-1, R, W, W, Oe, pe, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && (R = B);
    }
    var x = t(Ke, W, R, 0, 0);
    return 0 < Ce && (B = h(-2, x, W, W, Oe, pe, x.length, 0, 0, 0), B !== void 0 && (x = B)), ce = "", Ee = 0, pe = Oe = 1, x;
  }
  var E = /^\0+/g, _ = /[\0\r\f]/g, $ = /: */g, O = /zoo|gra/, C = /([,: ])(transform)/g, P = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, z = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, ie = /\(\s*(.*)\s*\)/g, de = /([\s\S]*?);/g, ve = /-self|flex-/g, Re = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Me = /stretch|:\s*\w+\-(?:conte|avail)/, se = /([^-])(image-set\()/, pe = 1, Oe = 1, Ee = 0, Se = 1, Ke = [], je = [], Ce = 0, Fe = null, Be = 0, ce = "";
  return k.use = g, k.set = f, e !== void 0 && f(e), k;
}
var md = {
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
var bd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ss = /* @__PURE__ */ gd(
  function(e) {
    return bd.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), wl = { exports: {} }, We = {}, ls;
function yd() {
  if (ls) return We;
  ls = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, h = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, k = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, _ = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function Y(S) {
    if (typeof S == "object" && S !== null) {
      var ie = S.$$typeof;
      switch (ie) {
        case t:
          switch (S = S.type, S) {
            case g:
            case f:
            case n:
            case s:
            case a:
            case E:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case h:
                case k:
                case O:
                case $:
                case p:
                  return S;
                default:
                  return ie;
              }
          }
        case r:
          return ie;
      }
    }
  }
  function z(S) {
    return Y(S) === f;
  }
  return We.AsyncMode = g, We.ConcurrentMode = f, We.ContextConsumer = h, We.ContextProvider = p, We.Element = t, We.ForwardRef = k, We.Fragment = n, We.Lazy = O, We.Memo = $, We.Portal = r, We.Profiler = s, We.StrictMode = a, We.Suspense = E, We.isAsyncMode = function(S) {
    return z(S) || Y(S) === g;
  }, We.isConcurrentMode = z, We.isContextConsumer = function(S) {
    return Y(S) === h;
  }, We.isContextProvider = function(S) {
    return Y(S) === p;
  }, We.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, We.isForwardRef = function(S) {
    return Y(S) === k;
  }, We.isFragment = function(S) {
    return Y(S) === n;
  }, We.isLazy = function(S) {
    return Y(S) === O;
  }, We.isMemo = function(S) {
    return Y(S) === $;
  }, We.isPortal = function(S) {
    return Y(S) === r;
  }, We.isProfiler = function(S) {
    return Y(S) === s;
  }, We.isStrictMode = function(S) {
    return Y(S) === a;
  }, We.isSuspense = function(S) {
    return Y(S) === E;
  }, We.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === f || S === s || S === a || S === E || S === _ || typeof S == "object" && S !== null && (S.$$typeof === O || S.$$typeof === $ || S.$$typeof === p || S.$$typeof === h || S.$$typeof === k || S.$$typeof === P || S.$$typeof === F || S.$$typeof === U || S.$$typeof === C);
  }, We.typeOf = Y, We;
}
wl.exports = yd();
var xd = wl.exports, to = xd, vd = {
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
}, Sd = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, wd = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, kl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ro = {};
ro[to.ForwardRef] = wd;
ro[to.Memo] = kl;
function cs(e) {
  return to.isMemo(e) ? kl : ro[e.$$typeof] || vd;
}
var kd = Object.defineProperty, Td = Object.getOwnPropertyNames, us = Object.getOwnPropertySymbols, Ad = Object.getOwnPropertyDescriptor, Cd = Object.getPrototypeOf, ds = Object.prototype;
function Tl(e, t, r) {
  if (typeof t != "string") {
    if (ds) {
      var n = Cd(t);
      n && n !== ds && Tl(e, n, r);
    }
    var a = Td(t);
    us && (a = a.concat(us(t)));
    for (var s = cs(e), p = cs(t), h = 0; h < a.length; ++h) {
      var g = a[h];
      if (!Sd[g] && !(r && r[g]) && !(p && p[g]) && !(s && s[g])) {
        var f = Ad(t, g);
        try {
          kd(e, g, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ed = Tl;
const _d = /* @__PURE__ */ Ji(Ed);
var kt = { env: { NODE_ENV: "production" } };
function Ar() {
  return (Ar = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ps = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, _i = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Sl.typeOf(e);
}, Oa = Object.freeze([]), Pr = Object.freeze({});
function $n(e) {
  return typeof e == "function";
}
function fs(e) {
  return e.displayName || e.name || "Component";
}
function no(e) {
  return e && typeof e.styledComponentId == "string";
}
var on = typeof kt < "u" && kt.env !== void 0 && (kt.env.REACT_APP_SC_ATTR || kt.env.SC_ATTR) || "data-styled", ao = typeof window < "u" && "HTMLElement" in window, Od = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof kt < "u" && kt.env !== void 0 && (kt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && kt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? kt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && kt.env.REACT_APP_SC_DISABLE_SPEEDY : kt.env.SC_DISABLE_SPEEDY !== void 0 && kt.env.SC_DISABLE_SPEEDY !== "" ? kt.env.SC_DISABLE_SPEEDY !== "false" && kt.env.SC_DISABLE_SPEEDY : kt.env.NODE_ENV !== "production"));
function qn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var jd = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, p = s; r >= p; ) (p <<= 1) < 0 && qn(16, "" + r);
      this.groupSizes = new Uint32Array(p), this.groupSizes.set(a), this.length = p;
      for (var h = s; h < p; h++) this.groupSizes[h] = 0;
    }
    for (var g = this.indexOfGroup(r + 1), f = 0, k = n.length; f < k; f++) this.tag.insertRule(g, n[f]) && (this.groupSizes[r]++, g++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var p = a; p < s; p++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), p = s + a, h = s; h < p; h++) n += this.tag.getRule(h) + `/*!sc*/
`;
    return n;
  }, e;
}(), wa = /* @__PURE__ */ new Map(), ja = /* @__PURE__ */ new Map(), Ln = 1, fa = function(e) {
  if (wa.has(e)) return wa.get(e);
  for (; ja.has(Ln); ) Ln++;
  var t = Ln++;
  return wa.set(e, t), ja.set(t, e), t;
}, Nd = function(e) {
  return ja.get(e);
}, Rd = function(e, t) {
  t >= Ln && (Ln = t + 1), wa.set(e, t), ja.set(t, e);
}, Pd = "style[" + on + '][data-styled-version="5.3.11"]', Dd = new RegExp("^" + on + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Id = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, p = a.length; s < p; s++) (n = a[s]) && e.registerName(t, n);
}, Ld = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var p = r[a].trim();
    if (p) {
      var h = p.match(Dd);
      if (h) {
        var g = 0 | parseInt(h[1], 10), f = h[2];
        g !== 0 && (Rd(f, g), Id(e, f, h[3]), e.getTag().insertRules(g, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, Md = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Al = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(h) {
    for (var g = h.childNodes, f = g.length; f >= 0; f--) {
      var k = g[f];
      if (k && k.nodeType === 1 && k.hasAttribute(on)) return k;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(on, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = Md();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, Fd = function() {
  function e(r) {
    var n = this.element = Al(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, p = 0, h = s.length; p < h; p++) {
        var g = s[p];
        if (g.ownerNode === a) return g;
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
}(), $d = function() {
  function e(r) {
    var n = this.element = Al(r);
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
}(), hs = ao, zd = { isServer: !ao, useCSSOMInjection: !Od }, Cl = function() {
  function e(r, n, a) {
    r === void 0 && (r = Pr), n === void 0 && (n = {}), this.options = Ar({}, zd, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && ao && hs && (hs = !1, function(s) {
      for (var p = document.querySelectorAll(Pd), h = 0, g = p.length; h < g; h++) {
        var f = p[h];
        f && f.getAttribute(on) !== "active" && (Ld(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return fa(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Ar({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = a ? new Ud(p) : s ? new Fd(p) : new $d(p), new jd(r)));
    var r, n, a, s, p;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (fa(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(fa(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(fa(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", p = 0; p < a; p++) {
        var h = Nd(p);
        if (h !== void 0) {
          var g = r.names.get(h), f = n.getGroup(p);
          if (g && f && g.size) {
            var k = on + ".g" + p + '[id="' + h + '"]', E = "";
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
}(), qd = /(a)(d)/gi, ms = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Oi(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = ms(t % 52) + r;
  return (ms(t % 52) + r).replace(qd, "$1-$2");
}
var rn = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, El = function(e) {
  return rn(5381, e);
};
function Bd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if ($n(r) && !no(r)) return !1;
  }
  return !0;
}
var Wd = El("5.3.11"), Hd = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Bd(t), this.componentId = r, this.baseHash = rn(Wd, r), this.baseStyle = n, Cl.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = sn(this.rules, t, r, n).join(""), h = Oi(rn(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(a, h)) {
        var g = n(p, "." + h, void 0, a);
        r.insertRules(a, h, g);
      }
      s.push(h), this.staticRulesId = h;
    }
    else {
      for (var f = this.rules.length, k = rn(this.baseHash, n.hash), E = "", _ = 0; _ < f; _++) {
        var $ = this.rules[_];
        if (typeof $ == "string") E += $;
        else if ($) {
          var O = sn($, t, r, n), C = Array.isArray(O) ? O.join("") : O;
          k = rn(k, C + _), E += C;
        }
      }
      if (E) {
        var P = Oi(k >>> 0);
        if (!r.hasNameForId(a, P)) {
          var F = n(E, "." + P, void 0, a);
          r.insertRules(a, P, F);
        }
        s.push(P);
      }
    }
    return s.join(" ");
  }, e;
}(), Vd = /^\s*\/\/.*$/gm, Gd = [":", "[", ".", "#"];
function Yd(e) {
  var t, r, n, a, s = Pr, p = s.options, h = p === void 0 ? Pr : p, g = s.plugins, f = g === void 0 ? Oa : g, k = new hd(h), E = [], _ = /* @__PURE__ */ function(C) {
    function P(F) {
      if (F) try {
        C(F + "}");
      } catch {
      }
    }
    return function(F, U, Y, z, S, ie, de, ve, Re, Me) {
      switch (F) {
        case 1:
          if (Re === 0 && U.charCodeAt(0) === 64) return C(U + ";"), "";
          break;
        case 2:
          if (ve === 0) return U + "/*|*/";
          break;
        case 3:
          switch (ve) {
            case 102:
            case 112:
              return C(Y[0] + U), "";
            default:
              return U + (Me === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(P);
      }
    };
  }(function(C) {
    E.push(C);
  }), $ = function(C, P, F) {
    return P === 0 && Gd.indexOf(F[r.length]) !== -1 || F.match(a) ? C : "." + t;
  };
  function O(C, P, F, U) {
    U === void 0 && (U = "&");
    var Y = C.replace(Vd, ""), z = P && F ? F + " " + P + " { " + Y + " }" : Y;
    return t = U, r = P, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), k(F || !P ? "" : P, z);
  }
  return k.use([].concat(f, [function(C, P, F) {
    C === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, $));
  }, _, function(C) {
    if (C === -2) {
      var P = E;
      return E = [], P;
    }
  }])), O.hash = f.length ? f.reduce(function(C, P) {
    return P.name || qn(15), rn(C, P.name);
  }, 5381).toString() : "", O;
}
var _l = ht.createContext();
_l.Consumer;
var Ol = ht.createContext(), Xd = (Ol.Consumer, new Cl()), ji = Yd();
function Zd() {
  return Xt(_l) || Xd;
}
function Jd() {
  return Xt(Ol) || ji;
}
var Kd = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = ji);
      var p = n.name + s.hash;
      a.hasNameForId(n.id, p) || a.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return qn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ji), this.name + t.hash;
  }, e;
}(), Qd = /([A-Z])/, ep = /([A-Z])/g, tp = /^ms-/, rp = function(e) {
  return "-" + e.toLowerCase();
};
function gs(e) {
  return Qd.test(e) ? e.replace(ep, rp).replace(tp, "-ms-") : e;
}
var bs = function(e) {
  return e == null || e === !1 || e === "";
};
function sn(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], p = 0, h = e.length; p < h; p += 1) (a = sn(e[p], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (bs(e)) return "";
  if (no(e)) return "." + e.styledComponentId;
  if ($n(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var g = e(t);
    return sn(g, t, r, n);
  }
  var f;
  return e instanceof Kd ? r ? (e.inject(r, n), e.getName(n)) : e : _i(e) ? function k(E, _) {
    var $, O, C = [];
    for (var P in E) E.hasOwnProperty(P) && !bs(E[P]) && (Array.isArray(E[P]) && E[P].isCss || $n(E[P]) ? C.push(gs(P) + ":", E[P], ";") : _i(E[P]) ? C.push.apply(C, k(E[P], P)) : C.push(gs(P) + ": " + ($ = P, (O = E[P]) == null || typeof O == "boolean" || O === "" ? "" : typeof O != "number" || O === 0 || $ in md || $.startsWith("--") ? String(O).trim() : O + "px") + ";"));
    return _ ? [_ + " {"].concat(C, ["}"]) : C;
  }(e) : e.toString();
}
var ys = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function np(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return $n(e) || _i(e) ? ys(sn(ps(Oa, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ys(sn(ps(e, r)));
}
var ap = function(e, t, r) {
  return r === void 0 && (r = Pr), e.theme !== r.theme && e.theme || t || r.theme;
}, ip = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, op = /(^-|-$)/g;
function li(e) {
  return e.replace(ip, "-").replace(op, "");
}
var sp = function(e) {
  return Oi(El(e) >>> 0);
};
function ha(e) {
  return typeof e == "string" && kt.env.NODE_ENV === "production";
}
var Ni = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, lp = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function cp(e, t, r) {
  var n = e[r];
  Ni(t) && Ni(n) ? jl(n, t) : e[r] = t;
}
function jl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var p = s[a];
    if (Ni(p)) for (var h in p) lp(h) && cp(e, p[h], h);
  }
  return e;
}
var Nl = ht.createContext();
Nl.Consumer;
var ci = {};
function Rl(e, t, r) {
  var n = no(e), a = !ha(e), s = t.attrs, p = s === void 0 ? Oa : s, h = t.componentId, g = h === void 0 ? function(U, Y) {
    var z = typeof U != "string" ? "sc" : li(U);
    ci[z] = (ci[z] || 0) + 1;
    var S = z + "-" + sp("5.3.11" + z + ci[z]);
    return Y ? Y + "-" + S : S;
  }(t.displayName, t.parentComponentId) : h, f = t.displayName, k = f === void 0 ? function(U) {
    return ha(U) ? "styled." + U : "Styled(" + fs(U) + ")";
  }(e) : f, E = t.displayName && t.componentId ? li(t.displayName) + "-" + t.componentId : t.componentId || g, _ = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, $ = t.shouldForwardProp;
  n && e.shouldForwardProp && ($ = t.shouldForwardProp ? function(U, Y, z) {
    return e.shouldForwardProp(U, Y, z) && t.shouldForwardProp(U, Y, z);
  } : e.shouldForwardProp);
  var O, C = new Hd(r, E, n ? e.componentStyle : void 0), P = C.isStatic && p.length === 0, F = function(U, Y) {
    return function(z, S, ie, de) {
      var ve = z.attrs, Re = z.componentStyle, Me = z.defaultProps, se = z.foldedComponentIds, pe = z.shouldForwardProp, Oe = z.styledComponentId, Ee = z.target, Se = function(B, x, re) {
        B === void 0 && (B = Pr);
        var j = Ar({}, x, { theme: B }), le = {};
        return re.forEach(function(ee) {
          var ne, Z, oe, me = ee;
          for (ne in $n(me) && (me = me(j)), me) j[ne] = le[ne] = ne === "className" ? (Z = le[ne], oe = me[ne], Z && oe ? Z + " " + oe : Z || oe) : me[ne];
        }), [j, le];
      }(ap(S, Xt(Nl), Me) || Pr, S, ve), Ke = Se[0], je = Se[1], Ce = function(B, x, re, j) {
        var le = Zd(), ee = Jd(), ne = x ? B.generateAndInjectStyles(Pr, le, ee) : B.generateAndInjectStyles(re, le, ee);
        return ne;
      }(Re, de, Ke), Fe = ie, Be = je.$as || S.$as || je.as || S.as || Ee, ce = ha(Be), H = je !== S ? Ar({}, S, {}, je) : S, R = {};
      for (var W in H) W[0] !== "$" && W !== "as" && (W === "forwardedAs" ? R.as = H[W] : (pe ? pe(W, ss, Be) : !ce || ss(W)) && (R[W] = H[W]));
      return S.style && je.style !== S.style && (R.style = Ar({}, S.style, {}, je.style)), R.className = Array.prototype.concat(se, Oe, Ce !== Oe ? Ce : null, S.className, je.className).filter(Boolean).join(" "), R.ref = Fe, nl(Be, R);
    }(O, U, Y, P);
  };
  return F.displayName = k, (O = ht.forwardRef(F)).attrs = _, O.componentStyle = C, O.displayName = k, O.shouldForwardProp = $, O.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Oa, O.styledComponentId = E, O.target = n ? e.target : e, O.withComponent = function(U) {
    var Y = t.componentId, z = function(ie, de) {
      if (ie == null) return {};
      var ve, Re, Me = {}, se = Object.keys(ie);
      for (Re = 0; Re < se.length; Re++) ve = se[Re], de.indexOf(ve) >= 0 || (Me[ve] = ie[ve]);
      return Me;
    }(t, ["componentId"]), S = Y && Y + "-" + (ha(U) ? U : li(fs(U)));
    return Rl(U, Ar({}, z, { attrs: _, componentId: S }), r);
  }, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? jl({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(O, "toString", { value: function() {
    return "." + O.styledComponentId;
  } }), a && _d(O, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), O;
}
var lr = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Pr), !Sl.isValidElementType(n)) return qn(1, String(n));
    var s = function() {
      return r(n, a, np.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, Ar({}, a, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, Ar({}, a, { attrs: Array.prototype.concat(a.attrs, p).filter(Boolean) }));
    }, s;
  }(Rl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  lr[e] = lr(e);
});
const up = lr.div`
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
`, ka = "On This Page", dp = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: ka
}, Pl = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: r = !1
}) => {
  const { isReact: n, isBootstrap: a } = Qi(), s = Zr(null), p = Pu("(max-width: 991px)"), [h, g] = ct({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), f = p ? 110 : 142, k = () => {
    var F;
    const U = {}, Y = window.scrollY, z = (F = document.getElementById(t)) == null ? void 0 : F.getBoundingClientRect().top, S = 103;
    z >= 0 && (U.sticky = !1, U.activeContainer = ""), Y > s.current.getBoundingClientRect().top && (U.sticky = !0);
    const ie = h.hasHeader ? f + S : S;
    e == null || e.forEach(({ targetIdName: de }) => {
      const ve = document.getElementById(de), Re = (ve == null ? void 0 : ve.getBoundingClientRect().top) - ie, Me = (ve == null ? void 0 : ve.getBoundingClientRect().bottom) - ie;
      Re < 0 && Me > 0 && (U.activeContainer = de);
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
    if (F === null) return h.containerClass;
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
  _t(() => {
    const F = document.getElementById(t) || null, U = {
      hasHeader: _(),
      hasAltMenuSpacing: $(),
      containerClass: O(F)
    };
    g((Y) => ({
      ...Y,
      ...U
    }));
  }, []), _t(() => (window == null || window.addEventListener("scroll", E), () => window.removeEventListener("scroll", E)), [h.hasHeader]);
  const C = (F) => {
    var U, Y;
    const z = window.scrollY - (h.hasHeader ? f + 100 : 100), S = p ? 410 : 90;
    let ie = ((U = document.getElementById(F)) == null ? void 0 : U.getBoundingClientRect().top) + z;
    s.current.classList.contains("sticky") || (ie -= S), r && ((Y = nd(`#${F}`)) == null || Y.focus()), window.scrollTo({ top: ie, behavior: "smooth" });
  }, P = () => {
    g((F) => ({
      ...F,
      showMenu: !F.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ q.jsx(
    up,
    {
      requiresAltMenuSpacing: h.hasAltMenuSpacing,
      ref: s,
      id: "uds-anchor-menu",
      className: ot(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: h.sticky,
          "with-header": h.hasHeader
        }
      ),
      style: h.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ q.jsxs("div", { className: `${h.containerClass} uds-anchor-menu-wrapper`, children: [
        p ? /* @__PURE__ */ q.jsx(
          Lr,
          {
            gaData: {
              ...dp,
              action: h.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ q.jsx(
              "button",
              {
                className: ot("mobile-menu-toggler", {
                  "show-menu": h.showMenu
                }),
                type: "button",
                onClick: P,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseAnchorMenu",
                "aria-controls": "collapseAnchorMenu",
                children: /* @__PURE__ */ q.jsxs("h4", { children: [
                  ka,
                  ":",
                  /* @__PURE__ */ q.jsx("i", { className: "fas fa-chevron-down" })
                ] })
              }
            )
          }
        ) : /* @__PURE__ */ q.jsxs("h4", { children: [
          ka,
          ":"
        ] }),
        /* @__PURE__ */ q.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: ot("card", "card-body", "collapse", {
              show: h.showMenu
            }),
            children: /* @__PURE__ */ q.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": ka,
                children: e == null ? void 0 : e.map((F) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ q.jsx(
                    _r,
                    {
                      "data-testid": `anchor-item-${F.targetIdName}`,
                      classes: ot("nav-link", {
                        active: h.activeContainer === F.targetIdName
                      }).split(" "),
                      ariaLabel: F.text,
                      label: F.text,
                      icon: F.icon,
                      onClick: n && (() => C(F.targetIdName)),
                      href: a && `#${F.targetIdName}`
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
Pl.propTypes = {
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
function Ma(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var pp = /* @__PURE__ */ function() {
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
}(), Gr = function() {
  return Gr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Gr.apply(this, arguments);
}, fp = function(e, t, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(p) {
      p(s);
    });
  }
  return new (r || (r = Promise))(function(s, p) {
    function h(k) {
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
      k.done ? s(k.value) : a(k.value).then(h, g);
    }
    f((n = n.apply(e, [])).next());
  });
}, hp = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, a, s, p;
  return p = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
    return this;
  }), p;
  function h(f) {
    return function(k) {
      return g([f, k]);
    };
  }
  function g(f) {
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
}, Dl = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, mp = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, gp = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, bp = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function yp(e, t, r) {
  var n = t.height, a = t.width, s = Dl(t, ["height", "width"]), p = Gr({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), h = window.open(e, "", Object.keys(p).map(function(f) {
    return "".concat(f, "=").concat(p[f]);
  }).join(", "));
  if (r)
    var g = window.setInterval(function() {
      try {
        (h === null || h.closed) && (window.clearInterval(g), r(h));
      } catch (f) {
        console.error(f);
      }
    }, 1e3);
  return h;
}
var xp = (
  /** @class */
  function(e) {
    pp(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, s = a.onShareWindowClose, p = a.windowHeight, h = p === void 0 ? 400 : p, g = a.windowPosition, f = g === void 0 ? "windowCenter" : g, k = a.windowWidth, E = k === void 0 ? 550 : k, _ = Gr({ height: h, width: E }, f === "windowCenter" ? gp(E, h) : bp(E, h));
        yp(n, _, s);
      }, r.handleClick = function(n) {
        return fp(r, void 0, void 0, function() {
          var a, s, p, h, g, f, k, E, _, $;
          return hp(this, function(O) {
            switch (O.label) {
              case 0:
                return a = this.props, s = a.beforeOnClick, p = a.disabled, h = a.networkLink, g = a.onClick, f = a.url, k = a.openShareDialogOnClick, E = a.opts, _ = h(f, E), p ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? ($ = s(), mp($) ? [4, $] : [3, 2]) : [3, 2]);
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
      var n = r.children, a = r.className, s = r.disabled, p = r.disabledStyle, h = r.forwardedRef;
      r.networkLink;
      var g = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var f = r.resetButtonStyle, k = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var E = Dl(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), _ = ot("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, a), $ = Gr(Gr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, k), s && p);
      return ht.createElement("button", Gr({}, E, { "aria-label": E["aria-label"] || g, className: _, onClick: this.handleClick, ref: h, style: $ }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(Tu)
), Na = function() {
  return Na = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Na.apply(this, arguments);
};
function Fa(e, t, r, n) {
  function a(s, p) {
    var h = r(s), g = Na({}, s), f = Object.keys(h);
    return f.forEach(function(k) {
      delete g[k];
    }), ht.createElement(xp, Na({}, n, g, { forwardedRef: p, networkName: e, networkLink: t, opts: r(s) }));
  }
  return a.displayName = "ShareButton-".concat(e), Xi(a);
}
function vp(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + Ma({ subject: r, body: n ? n + a + e : e });
}
Fa("email", vp, function(e) {
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
var Sp = /* @__PURE__ */ function() {
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
}(), wp = (
  /** @class */
  function(e) {
    Sp(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function Mn(e, t) {
  if (!e)
    throw new wp(t);
}
function kp(e, t) {
  var r = t.quote, n = t.hashtag;
  return Mn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Ma({
    u: e,
    quote: r,
    hashtag: n
  });
}
Fa("facebook", kp, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Tp(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return Mn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Ma({ url: e, mini: "true", title: r, summary: n, source: a });
}
Fa("linkedin", Tp, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Ap(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, s = a === void 0 ? [] : a, p = t.related, h = p === void 0 ? [] : p;
  return Mn(e, "twitter.url"), Mn(Array.isArray(s), "twitter.hashtags is not an array"), Mn(Array.isArray(h), "twitter.related is not an array"), "https://twitter.com/share" + Ma({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: h.length > 0 ? h.join(",") : void 0
  });
}
Fa("twitter", Ap, function(e) {
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
function Ri(e) {
  "@babel/helpers - typeof";
  return Ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ri(e);
}
var Cp = (typeof window > "u" ? "undefined" : Ri(window)) === "object" && window.Element || function() {
};
function Ep(e, t, r) {
  if (!(e[t] instanceof Cp))
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
lr.div`
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
lr.div`
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
}, Il = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  color: a = "gray",
  disabled: s,
  element: p = "button",
  innerRef: h,
  href: g,
  onClick: f,
  ...k
}) => {
  const E = ot("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: s
  });
  let _ = p;
  return g && p === "button" && (_ = "a"), /* @__PURE__ */ q.jsx(
    Lr,
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
          ref: h,
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
  gaData: Ki,
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
const Ll = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: s,
  fetchPriority: p = "auto",
  width: h,
  height: g,
  cardLink: f,
  title: k,
  caption: E,
  captionTitle: _,
  border: $,
  dropShadow: O
}) => {
  const C = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: p,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Du(r) },
    ...s && { "data-testid": s },
    ...h && { width: h },
    ...g && { height: g }
  }, P = ot("uds-img", {
    borderless: !$,
    "uds-img-drop-shadow": O
  }), F = (Y) => {
    const z = Y ? `${C.className} ${Y}` : C.className;
    return f ? /* @__PURE__ */ q.jsxs("a", { href: f, children: [
      /* @__PURE__ */ q.jsx("img", { ...C, className: z }),
      /* @__PURE__ */ q.jsx("span", { className: "visually-hidden", children: k })
    ] }) : /* @__PURE__ */ q.jsx("img", { ...C, className: z });
  }, U = () => /* @__PURE__ */ q.jsx("div", { className: P, children: /* @__PURE__ */ q.jsxs("figure", { className: "figure uds-figure", children: [
    F(),
    E && /* @__PURE__ */ q.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      _ && /* @__PURE__ */ q.jsx("h3", { children: _ }),
      /* @__PURE__ */ q.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Vr(E)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ q.jsx(q.Fragment, { children: E ? U() : F(P) });
};
Ll.propTypes = {
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
const Op = lr.div`
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
}, bt = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n,
  imageAltText: a,
  title: s,
  icon: p,
  body: h,
  eventFormat: g = "stack",
  eventLocation: f,
  eventTime: k,
  buttons: E,
  linkLabel: _,
  linkUrl: $,
  tags: O,
  showBorders: C = !0,
  cardLink: P
}) => /* @__PURE__ */ q.jsx(
  Ml,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: s,
    icon: p,
    body: h,
    eventFormat: g,
    eventLocation: f,
    eventTime: k,
    buttons: E,
    linkLabel: _,
    linkUrl: $,
    tags: O,
    showBorders: C,
    cardLink: P
  }
);
bt.propTypes = {
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
const Ml = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n = "",
  imageAltText: a = "",
  title: s,
  icon: p = void 0,
  body: h = "",
  eventFormat: g = "stack",
  eventLocation: f = "",
  eventTime: k = "",
  buttons: E = void 0,
  linkLabel: _ = void 0,
  linkUrl: $ = void 0,
  tags: O = void 0,
  showBorders: C = !0,
  cardLink: P
}) => {
  const F = ot("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !C
  });
  return /* @__PURE__ */ q.jsx(q.Fragment, { children: /* @__PURE__ */ q.jsxs(Op, { className: F, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ q.jsx(
      Ll,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: P,
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
      Pi,
      {
        type: e,
        body: h,
        eventFormat: g,
        eventLocation: f,
        eventTime: k,
        title: s,
        buttons: E,
        linkLabel: _,
        linkUrl: $,
        tags: O,
        cardLink: P
      }
    ) }) : /* @__PURE__ */ q.jsx(
      Pi,
      {
        type: e,
        body: h,
        eventFormat: g,
        eventLocation: f,
        eventTime: k,
        title: s,
        buttons: E,
        linkLabel: _,
        linkUrl: $,
        tags: O,
        cardLink: P
      }
    )
  ] }) });
};
Ml.propTypes = {
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
  linkLabel: h = void 0,
  linkUrl: g = void 0,
  tags: f = void 0,
  cardLink: k
}) => /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
  !!s && /* @__PURE__ */ q.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ q.jsx("h3", { className: "card-title", children: k ? /* @__PURE__ */ q.jsx("a", { href: k, children: s }) : s }) }),
  !!t && /* @__PURE__ */ q.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ q.jsx("div", { dangerouslySetInnerHTML: Vr(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ q.jsx(
    Fl,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  p && /* @__PURE__ */ q.jsx("div", { className: "card-buttons", children: p.map((E) => /* @__PURE__ */ q.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ q.jsx(
        _r,
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
  g && h && /* @__PURE__ */ q.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ q.jsx(
    Lr,
    {
      gaData: {
        ...Rp,
        section: s,
        text: h
      },
      children: /* @__PURE__ */ q.jsx("a", { href: Np(g), children: h })
    }
  ) }),
  f && /* @__PURE__ */ q.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((E) => (
    // @ts-ignore
    /* @__PURE__ */ q.jsx(
      Il,
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
const Fl = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ q.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ q.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ q.jsx("div", { children: /* @__PURE__ */ q.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ q.jsx("div", { dangerouslySetInnerHTML: Vr(r) })
  ] }),
  t && /* @__PURE__ */ q.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ q.jsx("div", { children: /* @__PURE__ */ q.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ q.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Vr(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
  r && /* @__PURE__ */ q.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ q.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ q.jsx("div", { children: /* @__PURE__ */ q.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ q.jsx("div", { dangerouslySetInnerHTML: Vr(r) })
  ] }) }),
  t && /* @__PURE__ */ q.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ q.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ q.jsx("div", { children: /* @__PURE__ */ q.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ q.jsx("span", { children: /* @__PURE__ */ q.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Vr(t)
      }
    ) })
  ] }) })
] });
Fl.propTypes = {
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
lr.div`
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
lr.section``;
tl(null);
l.element, l.element, l.number, l.func, l.func, l.string;
const Pp = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), Dp = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
});
l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
});
const Ip = l.shape({
  url: l.string,
  filters: l.string
});
l.shape({
  header: Pp,
  ctaButton: Dp,
  dataSource: Ip,
  maxItems: l.number
});
lr.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`;
l.element;
const Lp = lr.img`
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
  }, h = {
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
              [h[t.color]]: t.color,
              [p[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        r && /* @__PURE__ */ q.jsx("h1", { style: { maxWidth: r.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ q.jsx(
          "span",
          {
            className: ot({
              [h[r.color]]: r.color,
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
              [h[a]]: a
            }),
            children: n.map((g, f) => /* @__PURE__ */ q.jsx("p", { children: g.text }, `content-${f}`))
          }
        )
      ]
    }
  );
}
const Bn = (e) => {
  const t = e.type || "heading-hero";
  return {
    "heading-hero": () => Fp(e),
    "story-hero": () => Mp(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
Bn.propTypes = {
  type: l.oneOf(["heading-hero", "story-hero"]),
  image: ld,
  title: si,
  subTitle: si,
  contents: l.arrayOf(si),
  contentsColor: l.string
};
const sr = ({
  dataId: e,
  isClickeable: t = !1,
  disabled: r = !1,
  pageLinkIcon: n = !1,
  selectedPage: a = !1,
  onClick: s = () => {
  },
  ellipses: p,
  ariaLabel: h,
  children: g,
  ariaDisabled: f
}) => /* @__PURE__ */ q.jsx(
  "li",
  {
    className: ot("page-item", {
      disabled: r,
      active: a,
      elipses: p
    }),
    children: t ? /* @__PURE__ */ q.jsxs(
      "button",
      {
        type: "button",
        "aria-label": h,
        className: ot("page-link", {
          "page-link-icon": n
        }),
        onClick: s,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": a ? "page" : null,
        "aria-disabled": f,
        children: [
          g,
          a && /* @__PURE__ */ q.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ q.jsx("span", { className: "page-link", "data-testid": "page-link", children: g })
  }
);
sr.propTypes = {
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
}, $l = ({
  type: e,
  background: t,
  currentPage: r = 1,
  totalPages: n = 10,
  onChange: a
}) => {
  const [s, p] = ct(null);
  _t(() => {
    p(r);
  }, [r]);
  const h = (k) => {
    hl({ ...$p, text: `page ${k}` });
  }, g = (k, E) => {
    const _ = {
      first: 1,
      prev: s === 1 ? 1 : s - 1,
      next: s === n ? n : s + 1,
      last: n
    }[E] ?? E;
    p(_), h(_), a == null || a(k, _);
  }, f = () => {
    if (n < 5)
      return /* @__PURE__ */ q.jsx(q.Fragment, { children: Array.from({ length: n }, (P, F) => {
        const U = F + 1;
        return /* @__PURE__ */ q.jsx(
          sr,
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
    const k = 2, E = Ho(
      s === n - 1,
      1,
      s === n ? 2 : 1
    ), _ = Ho(
      s === 1,
      2,
      1
    ), $ = ts(
      s - E,
      s,
      n
    ), O = ts(
      s,
      s + 1 + _,
      n
    ), C = [...$, ...O];
    return /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
      C[0] !== 1 && /* @__PURE__ */ q.jsx(
        sr,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: s === 1,
          onClick: (P) => g(P, "first"),
          children: "1"
        }
      ),
      s > n - k && /* @__PURE__ */ q.jsx(
        sr,
        {
          isClickeable: !0,
          ariaLabel: `Page 2 of ${n}`,
          selectedPage: s === 2,
          onClick: (P) => g(P, 2),
          children: "2"
        }
      ),
      C[0] > 2 && /* @__PURE__ */ q.jsx(sr, { ellipses: !0, children: "..." }),
      C.map((P) => /* @__PURE__ */ q.jsx(
        sr,
        {
          ariaLabel: `Page ${P} of ${n}`,
          isClickeable: !0,
          selectedPage: s === P,
          onClick: (F) => g(F, P),
          children: P
        },
        P
      )),
      C[C.length - 1] < n - 1 && /* @__PURE__ */ q.jsx(sr, { ellipses: !0, children: "..." }),
      s < k + 1 && /* @__PURE__ */ q.jsx(
        sr,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n - 1} of ${n}`,
          selectedPage: s === n - 1,
          onClick: (P) => g(P, n - 1),
          children: n - 1
        }
      ),
      C[C.length - 1] !== n && /* @__PURE__ */ q.jsx(
        sr,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n} of ${n}`,
          selectedPage: s === n,
          onClick: (P) => g(P, "last"),
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
          sr,
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
          sr,
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
$l.propTypes = {
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
lr.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const Up = Xi(function(e, t) {
  const {
    id: r,
    selected: n,
    title: a,
    selectTab: s,
    leftKeyPressed: p,
    rightKeyPressed: h,
    icon: g,
    gaData: f
  } = e, { isReact: k, isBootstrap: E } = Qi(), _ = Zr(null);
  Au(t, () => ({
    focus() {
      _.current.focus();
    },
    scrollIntoView() {
      var O, C, P, F, U, Y, z;
      const S = ((O = _.current) == null ? void 0 : O.offsetWidth) / 2 + _.current.offsetLeft, ie = ((P = (C = _.current) == null ? void 0 : C.offsetParent) == null ? void 0 : P.scrollLeft) + ((U = (F = _.current) == null ? void 0 : F.offsetParent) == null ? void 0 : U.offsetWidth) / 2;
      (z = (Y = _.current) == null ? void 0 : Y.offsetParent) == null || z.scrollBy({
        left: S - ie
      });
    }
  }), []);
  const $ = (O) => {
    O.keyCode === 37 ? (O.preventDefault(), p()) : O.keyCode === 39 && (O.preventDefault(), h());
  };
  return /* @__PURE__ */ q.jsx(Lr, { gaData: { ...f, text: a }, children: /* @__PURE__ */ q.jsxs(
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
      onClick: k && ((O) => s(O, r, a)),
      onKeyDown: k && $,
      tabIndex: n ? "" : "-1",
      children: [
        a,
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
  className: a,
  controls: s = !0
}) => {
  const p = Zr(null);
  return /* @__PURE__ */ q.jsxs(
    "div",
    {
      className: ot(`uds-video-container ${a}`, {
        "uds-video-with-caption": r
      }),
      children: [
        /* @__PURE__ */ q.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ q.jsx(Lr, { gaData: { ...zp, section: n }, children: /* @__PURE__ */ q.jsxs(
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
), io = (e) => {
  const {
    type: t = "video",
    url: r = "",
    vttUrl: n,
    title: a = "",
    caption: s,
    className: p,
    controls: h = !0
  } = e;
  return t === "youtube" ? Bp({ url: r, title: a, caption: s, className: p }) : qp({
    url: r,
    vttUrl: n,
    title: a,
    caption: s,
    className: p,
    controls: h
  });
};
io.propTypes = {
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
  var xs = Object.defineProperty({}, "passive", {
    get: function() {
      Wp = !0;
    }
  });
  window.addEventListener("testPassive", null, xs), window.removeEventListener("testPassive", null, xs);
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
    buttons: bt.propTypes.buttons,
    linkLabel: l.string,
    linkUrl: l.string,
    tags: bt.propTypes.tags
  })
).isRequired, bt.propTypes.type, bt.propTypes.eventFormat, bt.propTypes.horizontal, l.string, l.string, l.bool;
l.number.isRequired, l.arrayOf(l.object).isRequired, l.string, l.string, l.bool;
const Ra = {
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
l.string, Ra.imageItems, Ra.hasContent;
Ra.imageItems.isRequired, Ra.hasContent, l.string, l.string, l.bool;
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
var vs = ol;
vs.createRoot, vs.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const Ul = () => {
  const [e, t] = ct(null), [r, n] = ct(!1), [a, s] = ct(null), [p, h] = ct("");
  return _t(() => {
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
  }, [p]), [{ data: e, loading: r, error: a }, h];
}, ln = (e) => (e || []).join(" ");
const {
  entries: zl,
  setPrototypeOf: Ss,
  isFrozen: Hp,
  getPrototypeOf: Vp,
  getOwnPropertyDescriptor: Gp
} = Object;
let {
  freeze: Nt,
  seal: Gt,
  create: Ta
} = Object, {
  apply: Di,
  construct: Ii
} = typeof Reflect < "u" && Reflect;
Nt || (Nt = function(t) {
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
Ii || (Ii = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const ma = Rt(Array.prototype.forEach), Yp = Rt(Array.prototype.lastIndexOf), ws = Rt(Array.prototype.pop), On = Rt(Array.prototype.push), Xp = Rt(Array.prototype.splice), Aa = Rt(String.prototype.toLowerCase), ui = Rt(String.prototype.toString), di = Rt(String.prototype.match), jn = Rt(String.prototype.replace), Zp = Rt(String.prototype.indexOf), Jp = Rt(String.prototype.trim), qt = Rt(Object.prototype.hasOwnProperty), Et = Rt(RegExp.prototype.test), Nn = Kp(TypeError);
function Rt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Di(e, t, n);
  };
}
function Kp(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ii(e, r);
  };
}
function Le(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Aa;
  Ss && Ss(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (Hp(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function Qp(e) {
  for (let t = 0; t < e.length; t++)
    qt(e, t) || (e[t] = null);
  return e;
}
function gr(e) {
  const t = Ta(null);
  for (const [r, n] of zl(e))
    qt(e, r) && (Array.isArray(n) ? t[r] = Qp(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = gr(n) : t[r] = n);
  return t;
}
function Rn(e, t) {
  for (; e !== null; ) {
    const n = Gp(e, t);
    if (n) {
      if (n.get)
        return Rt(n.get);
      if (typeof n.value == "function")
        return Rt(n.value);
    }
    e = Vp(e);
  }
  function r() {
    return null;
  }
  return r;
}
const ks = Nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), pi = Nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), fi = Nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ef = Nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), hi = Nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), tf = Nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ts = Nt(["#text"]), As = Nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), mi = Nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Cs = Nt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ga = Nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), rf = Gt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), nf = Gt(/<%[\w\W]*|[\w\W]*%>/gm), af = Gt(/\$\{[\w\W]*/gm), of = Gt(/^data-[\-\w.\u00B7-\uFFFF]+$/), sf = Gt(/^aria-[\-\w]+$/), ql = Gt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), lf = Gt(/^(?:\w+script|data):/i), cf = Gt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Bl = Gt(/^html$/i), uf = Gt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Es = /* @__PURE__ */ Object.freeze({
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
const Pn = {
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
}, _s = function() {
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
  const t = (y) => Wl(y);
  if (t.version = "3.3.2", t.removed = [], !e || !e.document || e.document.nodeType !== Pn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: p,
    Node: h,
    Element: g,
    NodeFilter: f,
    NamedNodeMap: k = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: _,
    trustedTypes: $
  } = e, O = g.prototype, C = Rn(O, "cloneNode"), P = Rn(O, "remove"), F = Rn(O, "nextSibling"), U = Rn(O, "childNodes"), Y = Rn(O, "parentNode");
  if (typeof p == "function") {
    const y = r.createElement("template");
    y.content && y.content.ownerDocument && (r = y.content.ownerDocument);
  }
  let z, S = "";
  const {
    implementation: ie,
    createNodeIterator: de,
    createDocumentFragment: ve,
    getElementsByTagName: Re
  } = r, {
    importNode: Me
  } = n;
  let se = _s();
  t.isSupported = typeof zl == "function" && typeof Y == "function" && ie && ie.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: Oe,
    TMPLIT_EXPR: Ee,
    DATA_ATTR: Se,
    ARIA_ATTR: Ke,
    IS_SCRIPT_OR_DATA: je,
    ATTR_WHITESPACE: Ce,
    CUSTOM_ELEMENT: Fe
  } = Es;
  let {
    IS_ALLOWED_URI: Be
  } = Es, ce = null;
  const H = Le({}, [...ks, ...pi, ...fi, ...hi, ...Ts]);
  let R = null;
  const W = Le({}, [...As, ...mi, ...Cs, ...ga]);
  let B = Object.seal(Ta(null, {
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
  })), x = null, re = null;
  const j = Object.seal(Ta(null, {
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
  let le = !0, ee = !0, ne = !1, Z = !0, oe = !1, me = !0, Q = !1, xe = !1, ae = !1, fe = !1, Ve = !1, he = !1, pt = !0, Ye = !1;
  const _e = "user-content-";
  let X = !0, ue = !1, et = {}, $e = null;
  const Ue = Le({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let cr = null;
  const ur = Le({}, ["audio", "video", "img", "source", "image", "track"]);
  let Zt = null;
  const Jt = Le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), xt = "http://www.w3.org/1998/Math/MathML", Pt = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml";
  let yt = st, Kt = !1, Qt = null;
  const vt = Le({}, [xt, Pt, st], ui);
  let At = Le({}, ["mi", "mo", "mn", "ms", "mtext"]), St = Le({}, ["annotation-xml"]);
  const ze = Le({}, ["title", "style", "font", "a", "script"]);
  let mt = null;
  const dr = ["application/xhtml+xml", "text/html"], er = "text/html";
  let ge = null, ft = null;
  const Dt = r.createElement("form"), pr = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, It = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ft && ft === v)) {
      if ((!v || typeof v != "object") && (v = {}), v = gr(v), mt = // eslint-disable-next-line unicorn/prefer-includes
      dr.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? er : v.PARSER_MEDIA_TYPE, ge = mt === "application/xhtml+xml" ? ui : Aa, ce = qt(v, "ALLOWED_TAGS") ? Le({}, v.ALLOWED_TAGS, ge) : H, R = qt(v, "ALLOWED_ATTR") ? Le({}, v.ALLOWED_ATTR, ge) : W, Qt = qt(v, "ALLOWED_NAMESPACES") ? Le({}, v.ALLOWED_NAMESPACES, ui) : vt, Zt = qt(v, "ADD_URI_SAFE_ATTR") ? Le(gr(Jt), v.ADD_URI_SAFE_ATTR, ge) : Jt, cr = qt(v, "ADD_DATA_URI_TAGS") ? Le(gr(ur), v.ADD_DATA_URI_TAGS, ge) : ur, $e = qt(v, "FORBID_CONTENTS") ? Le({}, v.FORBID_CONTENTS, ge) : Ue, x = qt(v, "FORBID_TAGS") ? Le({}, v.FORBID_TAGS, ge) : gr({}), re = qt(v, "FORBID_ATTR") ? Le({}, v.FORBID_ATTR, ge) : gr({}), et = qt(v, "USE_PROFILES") ? v.USE_PROFILES : !1, le = v.ALLOW_ARIA_ATTR !== !1, ee = v.ALLOW_DATA_ATTR !== !1, ne = v.ALLOW_UNKNOWN_PROTOCOLS || !1, Z = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, oe = v.SAFE_FOR_TEMPLATES || !1, me = v.SAFE_FOR_XML !== !1, Q = v.WHOLE_DOCUMENT || !1, fe = v.RETURN_DOM || !1, Ve = v.RETURN_DOM_FRAGMENT || !1, he = v.RETURN_TRUSTED_TYPE || !1, ae = v.FORCE_BODY || !1, pt = v.SANITIZE_DOM !== !1, Ye = v.SANITIZE_NAMED_PROPS || !1, X = v.KEEP_CONTENT !== !1, ue = v.IN_PLACE || !1, Be = v.ALLOWED_URI_REGEXP || ql, yt = v.NAMESPACE || st, At = v.MATHML_TEXT_INTEGRATION_POINTS || At, St = v.HTML_INTEGRATION_POINTS || St, B = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && pr(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (B.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && pr(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (B.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (B.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), oe && (ee = !1), Ve && (fe = !0), et && (ce = Le({}, Ts), R = Ta(null), et.html === !0 && (Le(ce, ks), Le(R, As)), et.svg === !0 && (Le(ce, pi), Le(R, mi), Le(R, ga)), et.svgFilters === !0 && (Le(ce, fi), Le(R, mi), Le(R, ga)), et.mathMl === !0 && (Le(ce, hi), Le(R, Cs), Le(R, ga))), qt(v, "ADD_TAGS") || (j.tagCheck = null), qt(v, "ADD_ATTR") || (j.attributeCheck = null), v.ADD_TAGS && (typeof v.ADD_TAGS == "function" ? j.tagCheck = v.ADD_TAGS : (ce === H && (ce = gr(ce)), Le(ce, v.ADD_TAGS, ge))), v.ADD_ATTR && (typeof v.ADD_ATTR == "function" ? j.attributeCheck = v.ADD_ATTR : (R === W && (R = gr(R)), Le(R, v.ADD_ATTR, ge))), v.ADD_URI_SAFE_ATTR && Le(Zt, v.ADD_URI_SAFE_ATTR, ge), v.FORBID_CONTENTS && ($e === Ue && ($e = gr($e)), Le($e, v.FORBID_CONTENTS, ge)), v.ADD_FORBID_CONTENTS && ($e === Ue && ($e = gr($e)), Le($e, v.ADD_FORBID_CONTENTS, ge)), X && (ce["#text"] = !0), Q && Le(ce, ["html", "head", "body"]), ce.table && (Le(ce, ["tbody"]), delete x.tbody), v.TRUSTED_TYPES_POLICY) {
        if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Nn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Nn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        z = v.TRUSTED_TYPES_POLICY, S = z.createHTML("");
      } else
        z === void 0 && (z = pf($, a)), z !== null && typeof S == "string" && (S = z.createHTML(""));
      Nt && Nt(v), ft = v;
    }
  }, tr = Le({}, [...pi, ...fi, ...ef]), fr = Le({}, [...hi, ...tf]), jr = function(v) {
    let N = Y(v);
    (!N || !N.tagName) && (N = {
      namespaceURI: yt,
      tagName: "template"
    });
    const J = Aa(v.tagName), we = Aa(N.tagName);
    return Qt[v.namespaceURI] ? v.namespaceURI === Pt ? N.namespaceURI === st ? J === "svg" : N.namespaceURI === xt ? J === "svg" && (we === "annotation-xml" || At[we]) : !!tr[J] : v.namespaceURI === xt ? N.namespaceURI === st ? J === "math" : N.namespaceURI === Pt ? J === "math" && St[we] : !!fr[J] : v.namespaceURI === st ? N.namespaceURI === Pt && !St[we] || N.namespaceURI === xt && !At[we] ? !1 : !fr[J] && (ze[J] || !tr[J]) : !!(mt === "application/xhtml+xml" && Qt[v.namespaceURI]) : !1;
  }, lt = function(v) {
    On(t.removed, {
      element: v
    });
    try {
      Y(v).removeChild(v);
    } catch {
      P(v);
    }
  }, gt = function(v, N) {
    try {
      On(t.removed, {
        attribute: N.getAttributeNode(v),
        from: N
      });
    } catch {
      On(t.removed, {
        attribute: null,
        from: N
      });
    }
    if (N.removeAttribute(v), v === "is")
      if (fe || Ve)
        try {
          lt(N);
        } catch {
        }
      else
        try {
          N.setAttribute(v, "");
        } catch {
        }
  }, vr = function(v) {
    let N = null, J = null;
    if (ae)
      v = "<remove></remove>" + v;
    else {
      const Ae = di(v, /^[\r\n\t ]+/);
      J = Ae && Ae[0];
    }
    mt === "application/xhtml+xml" && yt === st && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const we = z ? z.createHTML(v) : v;
    if (yt === st)
      try {
        N = new _().parseFromString(we, mt);
      } catch {
      }
    if (!N || !N.documentElement) {
      N = ie.createDocument(yt, "template", null);
      try {
        N.documentElement.innerHTML = Kt ? S : we;
      } catch {
      }
    }
    const Te = N.body || N.documentElement;
    return v && J && Te.insertBefore(r.createTextNode(J), Te.childNodes[0] || null), yt === st ? Re.call(N, Q ? "html" : "body")[0] : Q ? N.documentElement : Te;
  }, Bt = function(v) {
    return de.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Wt = function(v) {
    return v instanceof E && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof k) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
  }, Ht = function(v) {
    return typeof h == "function" && v instanceof h;
  };
  function nt(y, v, N) {
    ma(y, (J) => {
      J.call(t, v, N, ft);
    });
  }
  const Sr = function(v) {
    let N = null;
    if (nt(se.beforeSanitizeElements, v, null), Wt(v))
      return lt(v), !0;
    const J = ge(v.nodeName);
    if (nt(se.uponSanitizeElement, v, {
      tagName: J,
      allowedTags: ce
    }), me && v.hasChildNodes() && !Ht(v.firstElementChild) && Et(/<[/\w!]/g, v.innerHTML) && Et(/<[/\w!]/g, v.textContent) || v.nodeType === Pn.progressingInstruction || me && v.nodeType === Pn.comment && Et(/<[/\w]/g, v.data))
      return lt(v), !0;
    if (!(j.tagCheck instanceof Function && j.tagCheck(J)) && (!ce[J] || x[J])) {
      if (!x[J] && wr(J) && (B.tagNameCheck instanceof RegExp && Et(B.tagNameCheck, J) || B.tagNameCheck instanceof Function && B.tagNameCheck(J)))
        return !1;
      if (X && !$e[J]) {
        const we = Y(v) || v.parentNode, Te = U(v) || v.childNodes;
        if (Te && we) {
          const Ae = Te.length;
          for (let qe = Ae - 1; qe >= 0; --qe) {
            const Qe = C(Te[qe], !0);
            Qe.__removalCount = (v.__removalCount || 0) + 1, we.insertBefore(Qe, F(v));
          }
        }
      }
      return lt(v), !0;
    }
    return v instanceof g && !jr(v) || (J === "noscript" || J === "noembed" || J === "noframes") && Et(/<\/no(script|embed|frames)/i, v.innerHTML) ? (lt(v), !0) : (oe && v.nodeType === Pn.text && (N = v.textContent, ma([pe, Oe, Ee], (we) => {
      N = jn(N, we, " ");
    }), v.textContent !== N && (On(t.removed, {
      element: v.cloneNode()
    }), v.textContent = N)), nt(se.afterSanitizeElements, v, null), !1);
  }, Lt = function(v, N, J) {
    if (re[N] || pt && (N === "id" || N === "name") && (J in r || J in Dt))
      return !1;
    if (!(ee && !re[N] && Et(Se, N))) {
      if (!(le && Et(Ke, N))) {
        if (!(j.attributeCheck instanceof Function && j.attributeCheck(N, v))) {
          if (!R[N] || re[N]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(wr(v) && (B.tagNameCheck instanceof RegExp && Et(B.tagNameCheck, v) || B.tagNameCheck instanceof Function && B.tagNameCheck(v)) && (B.attributeNameCheck instanceof RegExp && Et(B.attributeNameCheck, N) || B.attributeNameCheck instanceof Function && B.attributeNameCheck(N, v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              N === "is" && B.allowCustomizedBuiltInElements && (B.tagNameCheck instanceof RegExp && Et(B.tagNameCheck, J) || B.tagNameCheck instanceof Function && B.tagNameCheck(J)))
            ) return !1;
          } else if (!Zt[N]) {
            if (!Et(Be, jn(J, Ce, ""))) {
              if (!((N === "src" || N === "xlink:href" || N === "href") && v !== "script" && Zp(J, "data:") === 0 && cr[v])) {
                if (!(ne && !Et(je, jn(J, Ce, "")))) {
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
  }, wr = function(v) {
    return v !== "annotation-xml" && di(v, Fe);
  }, rr = function(v) {
    nt(se.beforeSanitizeAttributes, v, null);
    const {
      attributes: N
    } = v;
    if (!N || Wt(v))
      return;
    const J = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: R,
      forceKeepAttr: void 0
    };
    let we = N.length;
    for (; we--; ) {
      const Te = N[we], {
        name: Ae,
        namespaceURI: qe,
        value: Qe
      } = Te, wt = ge(Ae), tt = Qe;
      let Ge = Ae === "value" ? tt : Jp(tt);
      if (J.attrName = wt, J.attrValue = Ge, J.keepAttr = !0, J.forceKeepAttr = void 0, nt(se.uponSanitizeAttribute, v, J), Ge = J.attrValue, Ye && (wt === "id" || wt === "name") && (gt(Ae, v), Ge = _e + Ge), me && Et(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ge)) {
        gt(Ae, v);
        continue;
      }
      if (wt === "attributename" && di(Ge, "href")) {
        gt(Ae, v);
        continue;
      }
      if (J.forceKeepAttr)
        continue;
      if (!J.keepAttr) {
        gt(Ae, v);
        continue;
      }
      if (!Z && Et(/\/>/i, Ge)) {
        gt(Ae, v);
        continue;
      }
      oe && ma([pe, Oe, Ee], (Mr) => {
        Ge = jn(Ge, Mr, " ");
      });
      const Mt = ge(v.nodeName);
      if (!Lt(Mt, wt, Ge)) {
        gt(Ae, v);
        continue;
      }
      if (z && typeof $ == "object" && typeof $.getAttributeType == "function" && !qe)
        switch ($.getAttributeType(Mt, wt)) {
          case "TrustedHTML": {
            Ge = z.createHTML(Ge);
            break;
          }
          case "TrustedScriptURL": {
            Ge = z.createScriptURL(Ge);
            break;
          }
        }
      if (Ge !== tt)
        try {
          qe ? v.setAttributeNS(qe, Ae, Ge) : v.setAttribute(Ae, Ge), Wt(v) ? lt(v) : ws(t.removed);
        } catch {
          gt(Ae, v);
        }
    }
    nt(se.afterSanitizeAttributes, v, null);
  }, hr = function y(v) {
    let N = null;
    const J = Bt(v);
    for (nt(se.beforeSanitizeShadowDOM, v, null); N = J.nextNode(); )
      nt(se.uponSanitizeShadowNode, N, null), Sr(N), rr(N), N.content instanceof s && y(N.content);
    nt(se.afterSanitizeShadowDOM, v, null);
  };
  return t.sanitize = function(y) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, J = null, we = null, Te = null;
    if (Kt = !y, Kt && (y = "<!-->"), typeof y != "string" && !Ht(y))
      if (typeof y.toString == "function") {
        if (y = y.toString(), typeof y != "string")
          throw Nn("dirty is not a string, aborting");
      } else
        throw Nn("toString is not a function");
    if (!t.isSupported)
      return y;
    if (xe || It(v), t.removed = [], typeof y == "string" && (ue = !1), ue) {
      if (y.nodeName) {
        const Qe = ge(y.nodeName);
        if (!ce[Qe] || x[Qe])
          throw Nn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (y instanceof h)
      N = vr("<!---->"), J = N.ownerDocument.importNode(y, !0), J.nodeType === Pn.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? N = J : N.appendChild(J);
    else {
      if (!fe && !oe && !Q && // eslint-disable-next-line unicorn/prefer-includes
      y.indexOf("<") === -1)
        return z && he ? z.createHTML(y) : y;
      if (N = vr(y), !N)
        return fe ? null : he ? S : "";
    }
    N && ae && lt(N.firstChild);
    const Ae = Bt(ue ? y : N);
    for (; we = Ae.nextNode(); )
      Sr(we), rr(we), we.content instanceof s && hr(we.content);
    if (ue)
      return y;
    if (fe) {
      if (Ve)
        for (Te = ve.call(N.ownerDocument); N.firstChild; )
          Te.appendChild(N.firstChild);
      else
        Te = N;
      return (R.shadowroot || R.shadowrootmode) && (Te = Me.call(n, Te, !0)), Te;
    }
    let qe = Q ? N.outerHTML : N.innerHTML;
    return Q && ce["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && Et(Bl, N.ownerDocument.doctype.name) && (qe = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + qe), oe && ma([pe, Oe, Ee], (Qe) => {
      qe = jn(qe, Qe, " ");
    }), z && he ? z.createHTML(qe) : qe;
  }, t.setConfig = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    It(y), xe = !0;
  }, t.clearConfig = function() {
    ft = null, xe = !1;
  }, t.isValidAttribute = function(y, v, N) {
    ft || It({});
    const J = ge(y), we = ge(v);
    return Lt(J, we, N);
  }, t.addHook = function(y, v) {
    typeof v == "function" && On(se[y], v);
  }, t.removeHook = function(y, v) {
    if (v !== void 0) {
      const N = Yp(se[y], v);
      return N === -1 ? void 0 : Xp(se[y], N, 1)[0];
    }
    return ws(se[y]);
  }, t.removeHooks = function(y) {
    se[y] = [];
  }, t.removeAllHooks = function() {
    se = _s();
  }, t;
}
var Os = Wl();
let ba = null;
function ff() {
  return ba || (typeof window < "u" ? ba = Os(window) : ba = Os), ba;
}
const Yt = (e) => ({ __html: ff().sanitize(e) });
function* Qr(e = "id-", t = 0) {
  let r = t;
  for (; ; )
    r += 1, yield e + r;
}
function hf() {
  const e = (
    // @ts-ignore
    (document.currentScript && document.currentScript.src || "").match(
      /(.*\/)/
    )
  );
  return e && e.length > 0 ? e[0].substr(0, e[0].length - 1) : "/";
}
var Hl = { exports: {} }, gi, js;
function mf() {
  if (js) return gi;
  js = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return gi = e, gi;
}
var bi, Ns;
function gf() {
  if (Ns) return bi;
  Ns = 1;
  var e = mf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, bi = function() {
    function n(p, h, g, f, k, E) {
      if (E !== e) {
        var _ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw _.name = "Invariant Violation", _;
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
  }, bi;
}
Hl.exports = gf()();
var Ca = Hl.exports;
const A = /* @__PURE__ */ Zi(Ca);
A.shape({
  event: A.string,
  action: A.string,
  name: A.string,
  region: A.string,
  section: A.string,
  component: A.string,
  type: A.string,
  text: A.string
});
const Wn = ({ children: e }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: e });
Wn.propTypes = {
  children: A.oneOfType([
    A.arrayOf(A.node),
    A.node,
    A.string
  ])
};
var Vl = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", p = 0; p < arguments.length; p++) {
        var h = arguments[p];
        h && (s = a(s, n(h)));
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
      for (var h in s)
        t.call(s, h) && s[h] && (p = a(p, h));
      return p;
    }
    function a(s, p) {
      return p ? s ? s + " " + p : s + p : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Vl);
var bf = Vl.exports;
const yf = /* @__PURE__ */ Zi(bf);
({
  ...Wn.propTypes
});
const Gl = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ d.jsx("div", { className: t, ...r, children: /* @__PURE__ */ d.jsx("div", { className: "row", children: e }) });
Gl.propTypes = {
  children: Wn.propTypes.children
};
({
  ...Gl.propTypes
});
Wn.propTypes.children, A.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Wn.propTypes.children;
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
var Xl = { exports: {} }, Ze = {};
var Rs;
function xf() {
  if (Rs) return Ze;
  Rs = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), $ = Symbol.for("react.client.reference");
  function O(C) {
    if (typeof C == "object" && C !== null) {
      var P = C.$$typeof;
      switch (P) {
        case e:
          switch (C = C.type, C) {
            case r:
            case a:
            case n:
            case g:
            case f:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case p:
                case h:
                case E:
                case k:
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
  return Ze.ContextConsumer = s, Ze.ContextProvider = p, Ze.Element = e, Ze.ForwardRef = h, Ze.Fragment = r, Ze.Lazy = E, Ze.Memo = k, Ze.Portal = t, Ze.Profiler = a, Ze.StrictMode = n, Ze.Suspense = g, Ze.SuspenseList = f, Ze.isContextConsumer = function(C) {
    return O(C) === s;
  }, Ze.isContextProvider = function(C) {
    return O(C) === p;
  }, Ze.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === e;
  }, Ze.isForwardRef = function(C) {
    return O(C) === h;
  }, Ze.isFragment = function(C) {
    return O(C) === r;
  }, Ze.isLazy = function(C) {
    return O(C) === E;
  }, Ze.isMemo = function(C) {
    return O(C) === k;
  }, Ze.isPortal = function(C) {
    return O(C) === t;
  }, Ze.isProfiler = function(C) {
    return O(C) === a;
  }, Ze.isStrictMode = function(C) {
    return O(C) === n;
  }, Ze.isSuspense = function(C) {
    return O(C) === g;
  }, Ze.isSuspenseList = function(C) {
    return O(C) === f;
  }, Ze.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === r || C === a || C === n || C === g || C === f || C === _ || typeof C == "object" && C !== null && (C.$$typeof === E || C.$$typeof === k || C.$$typeof === p || C.$$typeof === s || C.$$typeof === h || C.$$typeof === $ || C.getModuleId !== void 0);
  }, Ze.typeOf = O, Ze;
}
Xl.exports = xf();
var Zl = Xl.exports;
function vf(e) {
  function t(H, R, W, B, x) {
    for (var re = 0, j = 0, le = 0, ee = 0, ne, Z, oe = 0, me = 0, Q, xe = Q = ne = 0, ae = 0, fe = 0, Ve = 0, he = 0, pt = W.length, Ye = pt - 1, _e, X = "", ue = "", et = "", $e = "", Ue; ae < pt; ) {
      if (Z = W.charCodeAt(ae), ae === Ye && j + ee + le + re !== 0 && (j !== 0 && (Z = j === 47 ? 10 : 47), ee = le = re = 0, pt++, Ye++), j + ee + le + re === 0) {
        if (ae === Ye && (0 < fe && (X = X.replace(_, "")), 0 < X.trim().length)) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              X += W.charAt(ae);
          }
          Z = 59;
        }
        switch (Z) {
          case 123:
            for (X = X.trim(), ne = X.charCodeAt(0), Q = 1, he = ++ae; ae < pt; ) {
              switch (Z = W.charCodeAt(ae)) {
                case 123:
                  Q++;
                  break;
                case 125:
                  Q--;
                  break;
                case 47:
                  switch (Z = W.charCodeAt(ae + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (xe = ae + 1; xe < Ye; ++xe)
                          switch (W.charCodeAt(xe)) {
                            case 47:
                              if (Z === 42 && W.charCodeAt(xe - 1) === 42 && ae + 2 !== xe) {
                                ae = xe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Z === 47) {
                                ae = xe + 1;
                                break e;
                              }
                          }
                        ae = xe;
                      }
                  }
                  break;
                case 91:
                  Z++;
                case 40:
                  Z++;
                case 34:
                case 39:
                  for (; ae++ < Ye && W.charCodeAt(ae) !== Z; )
                    ;
              }
              if (Q === 0) break;
              ae++;
            }
            switch (Q = W.substring(he, ae), ne === 0 && (ne = (X = X.replace(E, "").trim()).charCodeAt(0)), ne) {
              case 64:
                switch (0 < fe && (X = X.replace(_, "")), Z = X.charCodeAt(1), Z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = R;
                    break;
                  default:
                    fe = Ke;
                }
                if (Q = t(R, fe, Q, Z, x + 1), he = Q.length, 0 < Ce && (fe = r(Ke, X, Ve), Ue = h(3, Q, fe, R, Oe, pe, he, Z, x, B), X = fe.join(""), Ue !== void 0 && (he = (Q = Ue.trim()).length) === 0 && (Z = 0, Q = "")), 0 < he) switch (Z) {
                  case 115:
                    X = X.replace(ie, p);
                  case 100:
                  case 109:
                  case 45:
                    Q = X + "{" + Q + "}";
                    break;
                  case 107:
                    X = X.replace(U, "$1 $2"), Q = X + "{" + Q + "}", Q = Se === 1 || Se === 2 && s("@" + Q, 3) ? "@-webkit-" + Q + "@" + Q : "@" + Q;
                    break;
                  default:
                    Q = X + Q, B === 112 && (Q = (ue += Q, ""));
                }
                else Q = "";
                break;
              default:
                Q = t(R, r(R, X, Ve), Q, B, x + 1);
            }
            et += Q, Q = Ve = fe = xe = ne = 0, X = "", Z = W.charCodeAt(++ae);
            break;
          case 125:
          case 59:
            if (X = (0 < fe ? X.replace(_, "") : X).trim(), 1 < (he = X.length)) switch (xe === 0 && (ne = X.charCodeAt(0), ne === 45 || 96 < ne && 123 > ne) && (he = (X = X.replace(" ", ":")).length), 0 < Ce && (Ue = h(1, X, R, H, Oe, pe, ue.length, B, x, B)) !== void 0 && (he = (X = Ue.trim()).length) === 0 && (X = "\0\0"), ne = X.charCodeAt(0), Z = X.charCodeAt(1), ne) {
              case 0:
                break;
              case 64:
                if (Z === 105 || Z === 99) {
                  $e += X + W.charAt(ae);
                  break;
                }
              default:
                X.charCodeAt(he - 1) !== 58 && (ue += a(X, ne, Z, X.charCodeAt(2)));
            }
            Ve = fe = xe = ne = 0, X = "", Z = W.charCodeAt(++ae);
        }
      }
      switch (Z) {
        case 13:
        case 10:
          j === 47 ? j = 0 : 1 + ne === 0 && B !== 107 && 0 < X.length && (fe = 1, X += "\0"), 0 < Ce * Be && h(0, X, R, H, Oe, pe, ue.length, B, x, B), pe = 1, Oe++;
          break;
        case 59:
        case 125:
          if (j + ee + le + re === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, _e = W.charAt(ae), Z) {
            case 9:
            case 32:
              if (ee + re + j === 0) switch (oe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  _e = "";
                  break;
                default:
                  Z !== 32 && (_e = " ");
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
              ee + j + re === 0 && (fe = Ve = 1, _e = "\f" + _e);
              break;
            case 108:
              if (ee + j + re + Ee === 0 && 0 < xe) switch (ae - xe) {
                case 2:
                  oe === 112 && W.charCodeAt(ae - 3) === 58 && (Ee = oe);
                case 8:
                  me === 111 && (Ee = me);
              }
              break;
            case 58:
              ee + j + re === 0 && (xe = ae);
              break;
            case 44:
              j + le + ee + re === 0 && (fe = 1, _e += "\r");
              break;
            case 34:
            case 39:
              j === 0 && (ee = ee === Z ? 0 : ee === 0 ? Z : ee);
              break;
            case 91:
              ee + j + le === 0 && re++;
              break;
            case 93:
              ee + j + le === 0 && re--;
              break;
            case 41:
              ee + j + re === 0 && le--;
              break;
            case 40:
              if (ee + j + re === 0) {
                if (ne === 0) switch (2 * oe + 3 * me) {
                  case 533:
                    break;
                  default:
                    ne = 1;
                }
                le++;
              }
              break;
            case 64:
              j + le + ee + re + xe + Q === 0 && (Q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + re + le)) switch (j) {
                case 0:
                  switch (2 * Z + 3 * W.charCodeAt(ae + 1)) {
                    case 235:
                      j = 47;
                      break;
                    case 220:
                      he = ae, j = 42;
                  }
                  break;
                case 42:
                  Z === 47 && oe === 42 && he + 2 !== ae && (W.charCodeAt(he + 2) === 33 && (ue += W.substring(he, ae + 1)), _e = "", j = 0);
              }
          }
          j === 0 && (X += _e);
      }
      me = oe, oe = Z, ae++;
    }
    if (he = ue.length, 0 < he) {
      if (fe = R, 0 < Ce && (Ue = h(2, ue, fe, H, Oe, pe, he, B, x, B), Ue !== void 0 && (ue = Ue).length === 0)) return $e + ue + et;
      if (ue = fe.join(",") + "{" + ue + "}", Se * Ee !== 0) {
        switch (Se !== 2 || s(ue, 2) || (Ee = 0), Ee) {
          case 111:
            ue = ue.replace(z, ":-moz-$1") + ue;
            break;
          case 112:
            ue = ue.replace(Y, "::-webkit-input-$1") + ue.replace(Y, "::-moz-$1") + ue.replace(Y, ":-ms-input-$1") + ue;
        }
        Ee = 0;
      }
    }
    return $e + ue + et;
  }
  function r(H, R, W) {
    var B = R.trim().split(P);
    R = B;
    var x = B.length, re = H.length;
    switch (re) {
      case 0:
      case 1:
        var j = 0;
        for (H = re === 0 ? "" : H[0] + " "; j < x; ++j)
          R[j] = n(H, R[j], W).trim();
        break;
      default:
        var le = j = 0;
        for (R = []; j < x; ++j)
          for (var ee = 0; ee < re; ++ee)
            R[le++] = n(H[ee] + " ", B[j], W).trim();
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
  function a(H, R, W, B) {
    var x = H + ";", re = 2 * R + 3 * W + 4 * B;
    if (re === 944) {
      H = x.indexOf(":", 9) + 1;
      var j = x.substring(H, x.length - 1).trim();
      return j = x.substring(0, H).trim() + j + ";", Se === 1 || Se === 2 && s(j, 1) ? "-webkit-" + j + j : j;
    }
    if (Se === 0 || Se === 2 && !s(x, 1)) return x;
    switch (re) {
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
        return O.test(x) ? x.replace($, ":-webkit-") + x.replace($, ":-moz-") + x : x;
      case 1e3:
        switch (j = x.substring(13).trim(), R = j.indexOf("-") + 1, j.charCodeAt(0) + j.charCodeAt(R)) {
          case 226:
            j = x.replace(S, "tb");
            break;
          case 232:
            j = x.replace(S, "tb-rl");
            break;
          case 220:
            j = x.replace(S, "lr");
            break;
          default:
            return x;
        }
        return "-webkit-" + x + "-ms-" + j + x;
      case 1017:
        if (x.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (R = (x = H).length - 10, j = (x.charCodeAt(R) === 33 ? x.substring(0, R) : x).substring(H.indexOf(":", 7) + 1).trim(), re = j.charCodeAt(0) + (j.charCodeAt(7) | 0)) {
          case 203:
            if (111 > j.charCodeAt(8)) break;
          case 115:
            x = x.replace(j, "-webkit-" + j) + ";" + x;
            break;
          case 207:
          case 102:
            x = x.replace(j, "-webkit-" + (102 < re ? "inline-" : "") + "box") + ";" + x.replace(j, "-webkit-" + j) + ";" + x.replace(j, "-ms-" + j + "box") + ";" + x;
        }
        return x + ";";
      case 938:
        if (x.charCodeAt(5) === 45) switch (x.charCodeAt(6)) {
          case 105:
            return j = x.replace("-items", ""), "-webkit-" + x + "-webkit-box-" + j + "-ms-flex-" + j + x;
          case 115:
            return "-webkit-" + x + "-ms-flex-item-" + x.replace(ve, "") + x;
          default:
            return "-webkit-" + x + "-ms-flex-line-pack" + x.replace("align-content", "").replace(ve, "") + x;
        }
        break;
      case 973:
      case 989:
        if (x.charCodeAt(3) !== 45 || x.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Me.test(H) === !0) return (j = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(H.replace("stretch", "fill-available"), R, W, B).replace(":fill-available", ":stretch") : x.replace(j, "-webkit-" + j) + x.replace(j, "-moz-" + j.replace("fill-", "")) + x;
        break;
      case 962:
        if (x = "-webkit-" + x + (x.charCodeAt(5) === 102 ? "-ms-" + x : "") + x, W + B === 211 && x.charCodeAt(13) === 105 && 0 < x.indexOf("transform", 10)) return x.substring(0, x.indexOf(";", 27) + 1).replace(C, "$1-webkit-$2") + x;
    }
    return x;
  }
  function s(H, R) {
    var W = H.indexOf(R === 1 ? ":" : "{"), B = H.substring(0, R !== 3 ? W : 10);
    return W = H.substring(W + 1, H.length - 1), Fe(R !== 2 ? B : B.replace(Re, "$1"), W, R);
  }
  function p(H, R) {
    var W = a(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return W !== R + ";" ? W.replace(de, " or ($1)").substring(4) : "(" + R + ")";
  }
  function h(H, R, W, B, x, re, j, le, ee, ne) {
    for (var Z = 0, oe = R, me; Z < Ce; ++Z)
      switch (me = je[Z].call(k, H, oe, W, B, x, re, j, le, ee, ne)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          oe = me;
      }
    if (oe !== R) return oe;
  }
  function g(H) {
    switch (H) {
      case void 0:
      case null:
        Ce = je.length = 0;
        break;
      default:
        if (typeof H == "function") je[Ce++] = H;
        else if (typeof H == "object") for (var R = 0, W = H.length; R < W; ++R)
          g(H[R]);
        else Be = !!H | 0;
    }
    return g;
  }
  function f(H) {
    return H = H.prefix, H !== void 0 && (Fe = null, H ? typeof H != "function" ? Se = 1 : (Se = 2, Fe = H) : Se = 0), f;
  }
  function k(H, R) {
    var W = H;
    if (33 > W.charCodeAt(0) && (W = W.trim()), ce = W, W = [ce], 0 < Ce) {
      var B = h(-1, R, W, W, Oe, pe, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && (R = B);
    }
    var x = t(Ke, W, R, 0, 0);
    return 0 < Ce && (B = h(-2, x, W, W, Oe, pe, x.length, 0, 0, 0), B !== void 0 && (x = B)), ce = "", Ee = 0, pe = Oe = 1, x;
  }
  var E = /^\0+/g, _ = /[\0\r\f]/g, $ = /: */g, O = /zoo|gra/, C = /([,: ])(transform)/g, P = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, z = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, ie = /\(\s*(.*)\s*\)/g, de = /([\s\S]*?);/g, ve = /-self|flex-/g, Re = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Me = /stretch|:\s*\w+\-(?:conte|avail)/, se = /([^-])(image-set\()/, pe = 1, Oe = 1, Ee = 0, Se = 1, Ke = [], je = [], Ce = 0, Fe = null, Be = 0, ce = "";
  return k.use = g, k.set = f, e !== void 0 && f(e), k;
}
var Sf = {
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
function wf(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var kf = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ps = /* @__PURE__ */ wf(
  function(e) {
    return kf.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Jl = { exports: {} }, He = {};
var Ds;
function Tf() {
  if (Ds) return He;
  Ds = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, h = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, k = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, _ = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function Y(S) {
    if (typeof S == "object" && S !== null) {
      var ie = S.$$typeof;
      switch (ie) {
        case t:
          switch (S = S.type, S) {
            case g:
            case f:
            case n:
            case s:
            case a:
            case E:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case h:
                case k:
                case O:
                case $:
                case p:
                  return S;
                default:
                  return ie;
              }
          }
        case r:
          return ie;
      }
    }
  }
  function z(S) {
    return Y(S) === f;
  }
  return He.AsyncMode = g, He.ConcurrentMode = f, He.ContextConsumer = h, He.ContextProvider = p, He.Element = t, He.ForwardRef = k, He.Fragment = n, He.Lazy = O, He.Memo = $, He.Portal = r, He.Profiler = s, He.StrictMode = a, He.Suspense = E, He.isAsyncMode = function(S) {
    return z(S) || Y(S) === g;
  }, He.isConcurrentMode = z, He.isContextConsumer = function(S) {
    return Y(S) === h;
  }, He.isContextProvider = function(S) {
    return Y(S) === p;
  }, He.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, He.isForwardRef = function(S) {
    return Y(S) === k;
  }, He.isFragment = function(S) {
    return Y(S) === n;
  }, He.isLazy = function(S) {
    return Y(S) === O;
  }, He.isMemo = function(S) {
    return Y(S) === $;
  }, He.isPortal = function(S) {
    return Y(S) === r;
  }, He.isProfiler = function(S) {
    return Y(S) === s;
  }, He.isStrictMode = function(S) {
    return Y(S) === a;
  }, He.isSuspense = function(S) {
    return Y(S) === E;
  }, He.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === f || S === s || S === a || S === E || S === _ || typeof S == "object" && S !== null && (S.$$typeof === O || S.$$typeof === $ || S.$$typeof === p || S.$$typeof === h || S.$$typeof === k || S.$$typeof === P || S.$$typeof === F || S.$$typeof === U || S.$$typeof === C);
  }, He.typeOf = Y, He;
}
Jl.exports = Tf();
var Af = Jl.exports, oo = Af, Cf = {
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
}, so = {};
so[oo.ForwardRef] = _f;
so[oo.Memo] = Kl;
function Is(e) {
  return oo.isMemo(e) ? Kl : so[e.$$typeof] || Cf;
}
var Of = Object.defineProperty, jf = Object.getOwnPropertyNames, Ls = Object.getOwnPropertySymbols, Nf = Object.getOwnPropertyDescriptor, Rf = Object.getPrototypeOf, Ms = Object.prototype;
function Ql(e, t, r) {
  if (typeof t != "string") {
    if (Ms) {
      var n = Rf(t);
      n && n !== Ms && Ql(e, n, r);
    }
    var a = jf(t);
    Ls && (a = a.concat(Ls(t)));
    for (var s = Is(e), p = Is(t), h = 0; h < a.length; ++h) {
      var g = a[h];
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
var Pf = Ql;
const Df = /* @__PURE__ */ Zi(Pf);
var Tt = { env: { NODE_ENV: "production" } };
function xr() {
  return (xr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Fs = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Li = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Zl.typeOf(e);
}, Pa = Object.freeze([]), Dr = Object.freeze({});
function Un(e) {
  return typeof e == "function";
}
function $s(e) {
  return e.displayName || e.name || "Component";
}
function lo(e) {
  return e && typeof e.styledComponentId == "string";
}
var cn = typeof Tt < "u" && Tt.env !== void 0 && (Tt.env.REACT_APP_SC_ATTR || Tt.env.SC_ATTR) || "data-styled", co = typeof window < "u" && "HTMLElement" in window, If = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Tt < "u" && Tt.env !== void 0 && (Tt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Tt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Tt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Tt.env.REACT_APP_SC_DISABLE_SPEEDY : Tt.env.SC_DISABLE_SPEEDY !== void 0 && Tt.env.SC_DISABLE_SPEEDY !== "" ? Tt.env.SC_DISABLE_SPEEDY !== "false" && Tt.env.SC_DISABLE_SPEEDY : Tt.env.NODE_ENV !== "production")), Lf = {};
function Hn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Mf = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, p = s; r >= p; ) (p <<= 1) < 0 && Hn(16, "" + r);
      this.groupSizes = new Uint32Array(p), this.groupSizes.set(a), this.length = p;
      for (var h = s; h < p; h++) this.groupSizes[h] = 0;
    }
    for (var g = this.indexOfGroup(r + 1), f = 0, k = n.length; f < k; f++) this.tag.insertRule(g, n[f]) && (this.groupSizes[r]++, g++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var p = a; p < s; p++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), p = s + a, h = s; h < p; h++) n += this.tag.getRule(h) + `/*!sc*/
`;
    return n;
  }, e;
}(), Ea = /* @__PURE__ */ new Map(), Da = /* @__PURE__ */ new Map(), Fn = 1, ya = function(e) {
  if (Ea.has(e)) return Ea.get(e);
  for (; Da.has(Fn); ) Fn++;
  var t = Fn++;
  return Ea.set(e, t), Da.set(t, e), t;
}, Ff = function(e) {
  return Da.get(e);
}, $f = function(e, t) {
  t >= Fn && (Fn = t + 1), Ea.set(e, t), Da.set(t, e);
}, Uf = "style[" + cn + '][data-styled-version="5.3.11"]', zf = new RegExp("^" + cn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), qf = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, p = a.length; s < p; s++) (n = a[s]) && e.registerName(t, n);
}, Bf = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var p = r[a].trim();
    if (p) {
      var h = p.match(zf);
      if (h) {
        var g = 0 | parseInt(h[1], 10), f = h[2];
        g !== 0 && ($f(f, g), qf(e, f, h[3]), e.getTag().insertRules(g, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, Wf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ec = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(h) {
    for (var g = h.childNodes, f = g.length; f >= 0; f--) {
      var k = g[f];
      if (k && k.nodeType === 1 && k.hasAttribute(cn)) return k;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(cn, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = Wf();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, Hf = function() {
  function e(r) {
    var n = this.element = ec(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, p = 0, h = s.length; p < h; p++) {
        var g = s[p];
        if (g.ownerNode === a) return g;
      }
      Hn(17);
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
      var a = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(a, s || null), this.length++, !0;
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
}(), Us = co, Yf = { isServer: !co, useCSSOMInjection: !If }, Ia = function() {
  function e(r, n, a) {
    r === void 0 && (r = Dr), n === void 0 && (n = {}), this.options = xr({}, Yf, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && co && Us && (Us = !1, function(s) {
      for (var p = document.querySelectorAll(Uf), h = 0, g = p.length; h < g; h++) {
        var f = p[h];
        f && f.getAttribute(cn) !== "active" && (Bf(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ya(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(xr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = a ? new Gf(p) : s ? new Hf(p) : new Vf(p), new Mf(r)));
    var r, n, a, s, p;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (ya(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(ya(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(ya(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", p = 0; p < a; p++) {
        var h = Ff(p);
        if (h !== void 0) {
          var g = r.names.get(h), f = n.getGroup(p);
          if (g && f && g.size) {
            var k = cn + ".g" + p + '[id="' + h + '"]', E = "";
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
}(), Xf = /(a)(d)/gi, zs = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Mi(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = zs(t % 52) + r;
  return (zs(t % 52) + r).replace(Xf, "$1-$2");
}
var nn = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, tc = function(e) {
  return nn(5381, e);
};
function rc(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Un(r) && !lo(r)) return !1;
  }
  return !0;
}
var Zf = tc("5.3.11"), Jf = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && rc(t), this.componentId = r, this.baseHash = nn(Zf, r), this.baseStyle = n, Ia.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = Jr(this.rules, t, r, n).join(""), h = Mi(nn(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(a, h)) {
        var g = n(p, "." + h, void 0, a);
        r.insertRules(a, h, g);
      }
      s.push(h), this.staticRulesId = h;
    }
    else {
      for (var f = this.rules.length, k = nn(this.baseHash, n.hash), E = "", _ = 0; _ < f; _++) {
        var $ = this.rules[_];
        if (typeof $ == "string") E += $;
        else if ($) {
          var O = Jr($, t, r, n), C = Array.isArray(O) ? O.join("") : O;
          k = nn(k, C + _), E += C;
        }
      }
      if (E) {
        var P = Mi(k >>> 0);
        if (!r.hasNameForId(a, P)) {
          var F = n(E, "." + P, void 0, a);
          r.insertRules(a, P, F);
        }
        s.push(P);
      }
    }
    return s.join(" ");
  }, e;
}(), Kf = /^\s*\/\/.*$/gm, Qf = [":", "[", ".", "#"];
function eh(e) {
  var t, r, n, a, s = Dr, p = s.options, h = p === void 0 ? Dr : p, g = s.plugins, f = g === void 0 ? Pa : g, k = new vf(h), E = [], _ = /* @__PURE__ */ function(C) {
    function P(F) {
      if (F) try {
        C(F + "}");
      } catch {
      }
    }
    return function(F, U, Y, z, S, ie, de, ve, Re, Me) {
      switch (F) {
        case 1:
          if (Re === 0 && U.charCodeAt(0) === 64) return C(U + ";"), "";
          break;
        case 2:
          if (ve === 0) return U + "/*|*/";
          break;
        case 3:
          switch (ve) {
            case 102:
            case 112:
              return C(Y[0] + U), "";
            default:
              return U + (Me === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(P);
      }
    };
  }(function(C) {
    E.push(C);
  }), $ = function(C, P, F) {
    return P === 0 && Qf.indexOf(F[r.length]) !== -1 || F.match(a) ? C : "." + t;
  };
  function O(C, P, F, U) {
    U === void 0 && (U = "&");
    var Y = C.replace(Kf, ""), z = P && F ? F + " " + P + " { " + Y + " }" : Y;
    return t = U, r = P, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), k(F || !P ? "" : P, z);
  }
  return k.use([].concat(f, [function(C, P, F) {
    C === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, $));
  }, _, function(C) {
    if (C === -2) {
      var P = E;
      return E = [], P;
    }
  }])), O.hash = f.length ? f.reduce(function(C, P) {
    return P.name || Hn(15), nn(C, P.name);
  }, 5381).toString() : "", O;
}
var nc = ht.createContext();
nc.Consumer;
var ac = ht.createContext(), th = (ac.Consumer, new Ia()), Fi = eh();
function ic() {
  return Xt(nc) || th;
}
function oc() {
  return Xt(ac) || Fi;
}
var rh = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = Fi);
      var p = n.name + s.hash;
      a.hasNameForId(n.id, p) || a.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return Hn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Fi), this.name + t.hash;
  }, e;
}(), nh = /([A-Z])/, ah = /([A-Z])/g, ih = /^ms-/, oh = function(e) {
  return "-" + e.toLowerCase();
};
function qs(e) {
  return nh.test(e) ? e.replace(ah, oh).replace(ih, "-ms-") : e;
}
var Bs = function(e) {
  return e == null || e === !1 || e === "";
};
function Jr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], p = 0, h = e.length; p < h; p += 1) (a = Jr(e[p], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (Bs(e)) return "";
  if (lo(e)) return "." + e.styledComponentId;
  if (Un(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var g = e(t);
    return Jr(g, t, r, n);
  }
  var f;
  return e instanceof rh ? r ? (e.inject(r, n), e.getName(n)) : e : Li(e) ? function k(E, _) {
    var $, O, C = [];
    for (var P in E) E.hasOwnProperty(P) && !Bs(E[P]) && (Array.isArray(E[P]) && E[P].isCss || Un(E[P]) ? C.push(qs(P) + ":", E[P], ";") : Li(E[P]) ? C.push.apply(C, k(E[P], P)) : C.push(qs(P) + ": " + ($ = P, (O = E[P]) == null || typeof O == "boolean" || O === "" ? "" : typeof O != "number" || O === 0 || $ in Sf || $.startsWith("--") ? String(O).trim() : O + "px") + ";"));
    return _ ? [_ + " {"].concat(C, ["}"]) : C;
  }(e) : e.toString();
}
var Ws = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function uo(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Un(e) || Li(e) ? Ws(Jr(Fs(Pa, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ws(Jr(Fs(e, r)));
}
var sc = function(e, t, r) {
  return r === void 0 && (r = Dr), e.theme !== r.theme && e.theme || t || r.theme;
}, sh = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, lh = /(^-|-$)/g;
function yi(e) {
  return e.replace(sh, "-").replace(lh, "");
}
var lc = function(e) {
  return Mi(tc(e) >>> 0);
};
function xa(e) {
  return typeof e == "string" && Tt.env.NODE_ENV === "production";
}
var $i = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ch = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function uh(e, t, r) {
  var n = e[r];
  $i(t) && $i(n) ? cc(n, t) : e[r] = t;
}
function cc(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var p = s[a];
    if ($i(p)) for (var h in p) ch(h) && uh(e, p[h], h);
  }
  return e;
}
var po = ht.createContext();
po.Consumer;
var xi = {};
function uc(e, t, r) {
  var n = lo(e), a = !xa(e), s = t.attrs, p = s === void 0 ? Pa : s, h = t.componentId, g = h === void 0 ? function(U, Y) {
    var z = typeof U != "string" ? "sc" : yi(U);
    xi[z] = (xi[z] || 0) + 1;
    var S = z + "-" + lc("5.3.11" + z + xi[z]);
    return Y ? Y + "-" + S : S;
  }(t.displayName, t.parentComponentId) : h, f = t.displayName, k = f === void 0 ? function(U) {
    return xa(U) ? "styled." + U : "Styled(" + $s(U) + ")";
  }(e) : f, E = t.displayName && t.componentId ? yi(t.displayName) + "-" + t.componentId : t.componentId || g, _ = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, $ = t.shouldForwardProp;
  n && e.shouldForwardProp && ($ = t.shouldForwardProp ? function(U, Y, z) {
    return e.shouldForwardProp(U, Y, z) && t.shouldForwardProp(U, Y, z);
  } : e.shouldForwardProp);
  var O, C = new Jf(r, E, n ? e.componentStyle : void 0), P = C.isStatic && p.length === 0, F = function(U, Y) {
    return function(z, S, ie, de) {
      var ve = z.attrs, Re = z.componentStyle, Me = z.defaultProps, se = z.foldedComponentIds, pe = z.shouldForwardProp, Oe = z.styledComponentId, Ee = z.target, Se = function(B, x, re) {
        B === void 0 && (B = Dr);
        var j = xr({}, x, { theme: B }), le = {};
        return re.forEach(function(ee) {
          var ne, Z, oe, me = ee;
          for (ne in Un(me) && (me = me(j)), me) j[ne] = le[ne] = ne === "className" ? (Z = le[ne], oe = me[ne], Z && oe ? Z + " " + oe : Z || oe) : me[ne];
        }), [j, le];
      }(sc(S, Xt(po), Me) || Dr, S, ve), Ke = Se[0], je = Se[1], Ce = function(B, x, re, j) {
        var le = ic(), ee = oc(), ne = x ? B.generateAndInjectStyles(Dr, le, ee) : B.generateAndInjectStyles(re, le, ee);
        return ne;
      }(Re, de, Ke), Fe = ie, Be = je.$as || S.$as || je.as || S.as || Ee, ce = xa(Be), H = je !== S ? xr({}, S, {}, je) : S, R = {};
      for (var W in H) W[0] !== "$" && W !== "as" && (W === "forwardedAs" ? R.as = H[W] : (pe ? pe(W, Ps, Be) : !ce || Ps(W)) && (R[W] = H[W]));
      return S.style && je.style !== S.style && (R.style = xr({}, S.style, {}, je.style)), R.className = Array.prototype.concat(se, Oe, Ce !== Oe ? Ce : null, S.className, je.className).filter(Boolean).join(" "), R.ref = Fe, nl(Be, R);
    }(O, U, Y, P);
  };
  return F.displayName = k, (O = ht.forwardRef(F)).attrs = _, O.componentStyle = C, O.displayName = k, O.shouldForwardProp = $, O.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Pa, O.styledComponentId = E, O.target = n ? e.target : e, O.withComponent = function(U) {
    var Y = t.componentId, z = function(ie, de) {
      if (ie == null) return {};
      var ve, Re, Me = {}, se = Object.keys(ie);
      for (Re = 0; Re < se.length; Re++) ve = se[Re], de.indexOf(ve) >= 0 || (Me[ve] = ie[ve]);
      return Me;
    }(t, ["componentId"]), S = Y && Y + "-" + (xa(U) ? U : yi($s(U)));
    return uc(U, xr({}, z, { attrs: _, componentId: S }), r);
  }, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? cc({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(O, "toString", { value: function() {
    return "." + O.styledComponentId;
  } }), a && Df(O, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), O;
}
var Je = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Dr), !Zl.isValidElementType(n)) return Hn(1, String(n));
    var s = function() {
      return r(n, a, uo.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, xr({}, a, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, xr({}, a, { attrs: Array.prototype.concat(a.attrs, p).filter(Boolean) }));
    }, s;
  }(uc, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Je[e] = Je(e);
});
var dh = function() {
  function e(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = rc(r), Ia.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function(r, n, a, s) {
    var p = s(Jr(this.rules, n, a, s).join(""), ""), h = this.componentId + r;
    a.insertRules(h, h, p);
  }, t.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, t.renderStyles = function(r, n, a, s) {
    r > 2 && Ia.registerId(this.componentId + r), this.removeStyles(r, a), this.createStyles(r, n, a, s);
  }, e;
}();
function $a(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  var a = uo.apply(void 0, [e].concat(r)), s = "sc-global-" + lc(JSON.stringify(a)), p = new dh(a, s);
  function h(f) {
    var k = ic(), E = oc(), _ = Xt(po), $ = Zr(k.allocateGSInstance(s)).current;
    return k.server && g($, f, k, _, E), Cu(function() {
      if (!k.server) return g($, f, k, _, E), function() {
        return p.removeStyles($, k);
      };
    }, [$, f, k, _, E]), null;
  }
  function g(f, k, E, _, $) {
    if (p.isStatic) p.renderStyles(f, Lf, E, $);
    else {
      var O = xr({}, k, { theme: sc(k, _, h.defaultProps) });
      p.renderStyles(f, O, E, $);
    }
  }
  return ht.memo(h);
}
const Vn = ({ href: e = null }) => (
  // @ts-ignore
  /* @__PURE__ */ d.jsx(_r, { label: "Apply now", ariaLabel: "Apply now", href: e, color: "gold" })
);
Vn.propTypes = {
  href: A.string
};
A.string;
function fo({ message: e, type: t }) {
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
fo.propTypes = {
  type: A.oneOf(["error", "info"]).isRequired,
  message: A.string.isRequired
};
function dc({ message: e }) {
  return /* @__PURE__ */ d.jsx(fo, { message: e, type: "error" });
}
function ph({ message: e }) {
  return /* @__PURE__ */ d.jsx(fo, { message: e, type: "info" });
}
const fh = Je.div`
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
  return /* @__PURE__ */ d.jsxs(fh, { "data-testid": "loader", className: "container ball-loader mt-4", children: [
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball1" }),
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball2" }),
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball3" })
  ] });
}
A.shape({
  color: A.oneOf(["gold", "maroon", "gray", "dark"]),
  content: A.shape({
    icon: A.string,
    header: A.string,
    body: A.string
  })
});
const fc = A.shape({
  ariaLabel: A.string,
  color: A.oneOf(["gold", "maroon", "gray", "dark"]),
  icon: A.string,
  href: A.string,
  label: A.string,
  onClick: A.func,
  size: A.oneOf(["default", "small", "xsmall"])
}), ho = {
  url: A.string,
  altText: A.string,
  cssClass: A.arrayOf(A.string)
}, hc = {
  text: A.string,
  cssClass: A.arrayOf(A.string)
}, mo = {
  type: A.oneOf(["video", "youtube"]),
  url: A.string,
  altText: A.string,
  vttUrl: A.string,
  title: A.string
}, hh = {
  url: A.string,
  text: A.string,
  isActive: A.bool
}, Cr = A.shape({
  ...ho
}), La = A.shape({
  ...hc
}), mh = A.shape({
  ...mo
}), Xr = A.shape({
  ...hh
}), mc = A.shape({
  id: A.string,
  sourceType: A.oneOf(["api", "shared-data-source", "static-json"]),
  // default `api`
  sharedDataSourceId: A.string,
  // only if `dataSourceType == "shared-data-source"``
  data: A.arrayOf(A.object),
  // only if `dataSourceType == "static-json"``
  apiUrl: A.string
  // only if `dataSourceType == "api"``
}), Ui = A.shape({
  text: A.string,
  url: A.string
}), Wr = A.shape({
  icon: A.arrayOf(A.string),
  title: A.string,
  content: A.string,
  buttonLink: fc
}), zi = A.arrayOf(
  A.shape({
    title: A.string,
    url: A.string
  })
), gc = A.shape({
  career: Xr,
  growth: A.oneOfType([A.number, A.string]),
  medianSalary: A.string,
  brightOutlook: A.bool,
  greenOccupation: A.bool
}), gh = {
  hideCollegeSchool: A.bool,
  defaultView: A.oneOf(["list-view", "grid-view"]),
  cardDefaultImage: Cr
}, bh = A.shape({
  ...gh
}), go = {
  atAGlance: A.bool,
  applicationRequirements: A.bool,
  changeMajorRequirements: A.bool,
  nextSteps: A.bool,
  affordingCollege: A.bool,
  flexibleDegreeOptions: A.bool,
  careerOutlook: A.bool,
  exampleCareers: A.bool,
  customizeYourCollegeExperience: A.bool,
  globalOpportunity: A.bool,
  attendOnline: A.bool,
  whyChooseAsu: A.bool,
  programContactInfo: A.bool,
  externalAnchors: A.arrayOf(
    A.shape({
      targetIdName: A.string,
      text: A.string
    })
  )
}, tn = A.shape({
  image: Cr,
  title: A.string,
  text: A.string,
  button: fc
}), Hs = A.shape({
  faculty: tn,
  programs: tn,
  research: tn,
  inclusion: tn,
  mentors: tn,
  honors: tn
}), bc = {
  hide: A.bool,
  sectionIntroText: A.string,
  cards: Hs,
  defaultCards: Hs
};
A.shape({
  ...go
});
const vi = A.shape({
  id: A.oneOfType([A.string, A.number]),
  value: A.string
}), yc = A.shape({
  locations: A.arrayOf(vi),
  asuLocals: A.arrayOf(vi),
  acceleratedConcurrent: vi
});
var dt = {}, br, yr;
function qi() {
  throw new Error("setTimeout has not been defined");
}
function Bi() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? br = setTimeout : br = qi;
  } catch {
    br = qi;
  }
  try {
    typeof clearTimeout == "function" ? yr = clearTimeout : yr = Bi;
  } catch {
    yr = Bi;
  }
})();
function xc(e) {
  if (br === setTimeout)
    return setTimeout(e, 0);
  if ((br === qi || !br) && setTimeout)
    return br = setTimeout, setTimeout(e, 0);
  try {
    return br(e, 0);
  } catch {
    try {
      return br.call(null, e, 0);
    } catch {
      return br.call(this, e, 0);
    }
  }
}
function yh(e) {
  if (yr === clearTimeout)
    return clearTimeout(e);
  if ((yr === Bi || !yr) && clearTimeout)
    return yr = clearTimeout, clearTimeout(e);
  try {
    return yr(e);
  } catch {
    try {
      return yr.call(null, e);
    } catch {
      return yr.call(this, e);
    }
  }
}
var Er = [], an = !1, Yr, _a = -1;
function xh() {
  !an || !Yr || (an = !1, Yr.length ? Er = Yr.concat(Er) : _a = -1, Er.length && vc());
}
function vc() {
  if (!an) {
    var e = xc(xh);
    an = !0;
    for (var t = Er.length; t; ) {
      for (Yr = Er, Er = []; ++_a < t; )
        Yr && Yr[_a].run();
      _a = -1, t = Er.length;
    }
    Yr = null, an = !1, yh(e);
  }
}
dt.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  Er.push(new Sc(e, t)), Er.length === 1 && !an && xc(vc);
};
function Sc(e, t) {
  this.fun = e, this.array = t;
}
Sc.prototype.run = function() {
  this.fun.apply(null, this.array);
};
dt.title = "browser";
dt.browser = !0;
dt.env = {};
dt.argv = [];
dt.version = "";
dt.versions = {};
function Or() {
}
dt.on = Or;
dt.addListener = Or;
dt.once = Or;
dt.off = Or;
dt.removeListener = Or;
dt.removeAllListeners = Or;
dt.emit = Or;
dt.prependListener = Or;
dt.prependOnceListener = Or;
dt.listeners = function(e) {
  return [];
};
dt.binding = function(e) {
  throw new Error("process.binding is not supported");
};
dt.cwd = function() {
  return "/";
};
dt.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
dt.umask = function() {
  return 0;
};
const vh = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, wc = Object.values(vh), Vs = {
  offeredBy: { icon: "university", title: "Offered by" },
  locations: { icon: "map-marker-alt", title: "Location" },
  firstRequirementMathCourse: {
    icon: "pencil-alt",
    title: "First Required math Course"
  },
  mathIntensity: { icon: "calculator", title: "Math intensity" },
  timeCommitment: { icon: "calendar-alt", title: "Time commitment" },
  stemOptText: { icon: "star", title: "STEM-OPT extension eligible" }
}, kc = "grid-view", Wi = "list-view", Tc = "degree-list-programs", Ac = "Sorry, Something went wrong.", Sh = "STEM-OPT for international students on F-1 visas", wh = `This degree is not found.
  This may be a temporary issue. Please try again in 5 minutes.
  If the issue persists, the degree may no longer be available.`, kh = hf(), Th = (e) => {
  const t = e || kh, r = `${t}/assets/img/detail-page`, n = `${t}/assets/img/listing-page`, a = {
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
}, Ah = (e) => {
  if (typeof e == "string") return "Degrees";
  const { program: t, cert: r } = e;
  return t === "undergrad" && r === "true" ? "Undergraduate Minors and Certificates" : t === "undergrad" ? "Undergraduate Degrees" : t === "graduate" && r === "true" ? "Graduate Certificates" : t === "graduate" ? "Graduate Degrees" : "Degrees";
}, bo = [
  { id: 0, value: "DTPHX", text: "Downtown Phoenix campus" },
  { id: 1, value: "POLY", text: "Polytechnic campus" },
  { id: 2, value: "TEMPE", text: "Tempe campus" },
  { id: 3, value: "WEST", text: "West Valley campus" },
  { id: 4, value: "ONLNE", text: "ASU Online" }
], Ch = bo[4], Cc = [
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
], yo = [
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
], Eh = yo[0], Hi = (e) => (e == null ? void 0 : e.value) && (e == null ? void 0 : e.value) !== "all", _h = (e) => {
  var t;
  return ((t = [
    ...bo,
    ...Cc,
    ...yo
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
}, Oh = {
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
}, Gs = (e, t) => {
  const r = ["TUCSN", "AWC"], n = e.toUpperCase(), a = r.includes(n) ? `${n}-${t}` : n;
  return Oh[a];
};
function Ec({ anchorMenu: e }) {
  var n, a;
  const t = (n = e == null ? void 0 : e.externalAnchors) == null ? void 0 : n.map((s) => {
    const { targetIdName: p, text: h } = s;
    return {
      targetIdName: p.startsWith("#") ? p.substring(1) : p,
      text: h,
      icon: null
    };
  }), r = Object.keys(ut).filter((s) => e[s]).map((s) => ut[s]).concat(t || []);
  return /* @__PURE__ */ d.jsx(
    Pl,
    {
      items: r,
      firstElementId: (a = r[0]) == null ? void 0 : a.targetIdName,
      focusFirstFocusableElement: !1
    }
  );
}
Ec.propTypes = {
  anchorMenu: A.shape(go)
};
function jh(e, t) {
  const r = Math.floor(e / t), n = e % t;
  return r + (n > 0 ? 1 : 0);
}
const Nh = "https://degrees.apps.asu.edu", Rh = "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan/", Ph = {
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
}, Dh = {
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
}, Ys = (e) => e.map((t) => ({
  title: t.acadPlanDescription,
  url: t.academicOfficeUrl
})).sort((t, r) => t.title.localeCompare(r.title)), Ih = (e) => e == null ? void 0 : e.map((t) => ({
  career: {
    text: t.alternateTitle,
    url: `${Nh}/career-details/${t.onetCode}`
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
    const { program: h } = r;
    r.cert === "true" && h === "all" ? r.degreeType = "GR,UGCM" : h === "all" ? r.degreeType = "GR,UG" : r.cert === "true" && h === "undergrad" ? r.degreeType = "UGCM" : h === "graduate" ? r.degreeType = "GR" : r.degreeType = "UG", delete r.program;
  }
  r.acadPlan && (r.endpoint += `/${r.acadPlan}`, delete r.acadPlan);
  const { endpoint: n, ...a } = r, s = (h, g) => !g || h === void 0 ? "" : Array.isArray(g) ? `${h}=${g}` : g.split(",").map((f) => `${h}=${f.trim()}`).join("&"), p = Object.keys(a).reduce(
    (h, g) => `${h}&${s(
      g,
      r[g]
    )}`,
    ""
  );
  return `${n}?${p}`;
}
function Ua(e, t = "h2") {
  return (
    /** @type {keyof JSX.IntrinsicElements} */
    wc.includes(e.component) ? e.component : t
  );
}
function Vi(e) {
  return typeof e != "string" ? console.error("Invalid string", e) : e == null ? void 0 : e.replace(
    /\w\S*/g,
    (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
  );
}
function Lh(e) {
  return /<\/?[a-z][\s\S]*>/i.test(e);
}
const Oc = "AsuDevTools", Mh = {
  isDebug: !1
};
function Fh() {
  const e = JSON.parse(localStorage.getItem(Oc));
  return e == null ? void 0 : e.isDebug;
}
window.__AsuDevTools = {
  enableDebug(e) {
    const t = JSON.stringify({
      ...Mh,
      isDebug: e
    });
    localStorage.setItem(Oc, t);
  }
};
async function Si(e) {
  return e != null && e.length ? (await Promise.all(
    e.map(async (r) => {
      try {
        return await (await Promise.race([
          fetch(
            `${Rh}${r}?include=academicOfficeUrl&include=acadPlanDescription`
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
function $h(e, t) {
  Promise.all(e).then((r) => {
    const n = r[0], a = r[1];
    t({ accelerateData: n, concurrentData: a });
  }).catch(() => {
    t({ accelerateData: [], concurrentData: [] });
  });
}
function Gn({ contents: e = [] }) {
  const t = Qr("paragrap-");
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.map(
    (r) => Lh(r.text) ? /* @__PURE__ */ d.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Yt(r.text)
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
Gn.propTypes = {
  contents: A.arrayOf(La)
};
const Uh = $a`
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
`, zh = Je.div`
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
`, qh = Je.img`
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
function dn({
  title: e,
  image: t,
  contentDirection: r = "left",
  contents: n = [],
  contentChildren: a = null,
  headingTag: s = "H3"
}) {
  const p = Zr(), h = Zr(), g = Ua(s);
  function f() {
    const E = p.current.offsetHeight;
    h.current.style.height = `${E * 1.2}px`;
  }
  return _t(() => {
    f();
    let k;
    const E = () => {
      clearTimeout(k), k = setTimeout(() => f(), 150);
    };
    return window.addEventListener("resize", E), () => window.removeEventListener("resize", E);
  }, [h, p]), /* @__PURE__ */ d.jsxs("div", { className: `uds-image-overlap content-${r}`, children: [
    /* @__PURE__ */ d.jsx(Uh, {}),
    /* @__PURE__ */ d.jsx(
      qh,
      {
        ref: h,
        className: "img-fluid",
        src: t == null ? void 0 : t.url,
        alt: t == null ? void 0 : t.altText,
        onError: (k) => {
          k.currentTarget.style.display = "none";
        }
      }
    ),
    /* @__PURE__ */ d.jsxs(zh, { ref: p, className: "content-wrapper", children: [
      /* @__PURE__ */ d.jsx(g, { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: e }) }),
      /* @__PURE__ */ d.jsx(Gn, { contents: n }),
      a
    ] })
  ] });
}
dn.propTypes = {
  headingTag: A.string,
  title: A.string,
  contentDirection: A.oneOf(["left", "right"]),
  contents: A.arrayOf(
    A.shape({
      text: A.string
    })
  ),
  image: Cr,
  contentChildren: A.element
};
const jc = $a`
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
`, Nc = Je.main`
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
function Bh({
  baseIconClassName1: e,
  baseIconAriaLabel1: t,
  baseIconStyle1: r,
  baseIconAriaLabel2: n,
  baseIconClassName2: a,
  baseIconStyle2: s,
  ariaLabel: p,
  ariaControls: h,
  dataId: g,
  onClick: f = () => null
}) {
  const [k, E] = ct(!1), _ = (C, P, F, U) => /* @__PURE__ */ d.jsx(
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
      onKeyDown: (C) => C.key === "Enter" && $(),
      onClick: $,
      "aria-label": p,
      "aria-expanded": k,
      "aria-controls": h,
      children: [
        _(
          e,
          k ? "" : "none",
          t,
          r
        ),
        _(
          a,
          k ? "none" : "",
          n,
          s
        )
      ]
    }
  );
  return al(() => O, [k]);
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
const wi = (e) => /* @__PURE__ */ d.jsx("span", {}), Wh = ({
  onClick: e = () => null,
  ariaLabel: t,
  ariaControls: r,
  dataId: n
}) => Bh({
  dataId: n,
  baseIconClassName1: "fas fa-chevron-up",
  baseIconClassName2: "fas fa-chevron-down",
  onClick: e,
  ariaLabel: t,
  ariaControls: r
}), pn = tl(null), xo = ({ listPageProps: e, detailPageProps: t, children: r }) => {
  const { detailPageDefault: n, listingPageDefault: a } = al(
    () => Th((e || t).appPathFolder),
    []
  ), s = {
    detailPageDefault: n,
    listingPageDefault: a
  }, p = {
    listPageProps: e,
    detailPageProps: t
  };
  return /* @__PURE__ */ d.jsx(
    pn.Provider,
    {
      value: {
        state: p,
        defaultState: s
      },
      children: r
    }
  );
};
xo.propTypes = {
  children: A.oneOfType([
    A.arrayOf(A.element),
    A.element
  ]),
  listPageProps: A.shape({}),
  detailPageProps: A.shape({})
};
const Hh = ({
  dataSource: e,
  tableView: t = [],
  programs: r,
  stateFilters: n
}) => {
  const { collegeAcadOrg: a, departmentCode: s } = e;
  _t(() => {
    if (!r || !Fh()) return;
    const p = "background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;", h = "font-size:30px;", g = "font-size:24px;", f = "font-size: 18px; margin-left: 0.5rem;";
    console.group("<< ASU Degree Page >>"), console.log("%c🏫 Listing Page Programs 📚", p + h), console.log(
      `%cTotal programs found: ${r.length}`,
      p + f
    ), console.log("%cPrograms found", p + f), console.log(r), console.log(
      `%cTotal programs loaded: ${t.length}`,
      p + f
    ), console.log("%cPrograms loaded", p + f), console.log(t), console.log("%cPage Filters", p + g), console.log(
      `%c- collegeAcadOrg:${a}`,
      p + f
    ), console.log(
      `%c- departmentCode:${s}`,
      p + f
    ), console.log("%cSearch Filters", p + g), console.log(n), console.groupEnd();
  });
}, Xs = (e) => e.degreeType === "UG", Rc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, Pc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, Vh = (e) => Object.keys(e).length > 0 ? Pc(e) || Rc(e) : !0, Dn = (e) => {
  const { owners: t } = e;
  return t ? t.reduce(
    (n, a) => n.percentOwned > a.percentOwned ? n : a
  ) : null;
};
function Kr(e = {}) {
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
    isUndergradProgram: () => Xs(e),
    isPhdOrMasters: () => e.degreeDescriptionShort !== "CERT",
    // Only called in functions that already checked if its a grad program
    isGradProgram: () => e.degreeType === "GR",
    // GR is present for grad degrees and grad certificates
    isMinorOrCertificate: () => e.degreeType === "UGCM" || e.degreeType === "GR" && e.acadPlanTypeDescription === "Certificate",
    /** @returns {"undergrad" |  "graduate"} */
    getProgramType: () => Xs(e) ? "undergrad" : "graduate",
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
      return (t = Dn(e)) == null ? void 0 : t.collegeDescription;
    },
    getCollegeUrl: () => {
      var t;
      return ((t = Dn(e)) == null ? void 0 : t.collegeUrl) || "";
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
      return (t = Dn(e)) == null ? void 0 : t.departmentDescription;
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
      return (t = Dn(e)) == null ? void 0 : t.collegeAcadOrg;
    },
    /** @return {Array} */
    getCollegeAcadOrgJoint: () => {
      const { owners: t } = e;
      return t ? t.map((n) => n.collegeAcadOrg) : [];
    },
    /** @return {string} */
    getDepartmentCode: () => {
      var t;
      return (t = Dn(e)) == null ? void 0 : t.departmentAcadOrg;
    },
    /** @return {Object.<string, string>} */
    getGraduateApplyDates: () => e.applicationDeadlines,
    hasGraduateApplyDates: () => Rc(e),
    /** @return {Object.<string, string>} */
    getPlanDeadlines: () => e.applicationDeadlines,
    hasPlanDeadlines: () => Pc(e),
    isValidActiveProgram: () => Vh(e),
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
      }, a = (k, E) => k.filter((_) => _.acadSubPlanCode !== E), s = (k, E) => k.some((_) => _.acadSubPlanCode === E), p = (k, E) => E.some(
        (_) => _.acadSubPlanCode === k.acadSubPlanCode
      ), h = t.filter(
        (k) => k.timePeriod && n(k.timePeriod)
      ), g = r.some(
        (k) => k.defaultFlag || s(t, k.acadSubPlanCode)
      ), f = [];
      for (const k of r)
        k.timePeriod && n(k.timePeriod) && !p(k, f) && (f.push(k), t = a(t, k.acadSubPlanCode));
      if (!g) {
        for (const k of r)
          !p(k, f) && s(h, k.acadSubPlanCode) && f.push(k);
        return f;
      }
      for (let k = r.length - 1; k >= 0 && t.length !== 0; k -= 1) {
        const E = r[k];
        if (p(E, f)) continue;
        const _ = E.defaultFlag, $ = s(
          t,
          E.acadSubPlanCode
        );
        (_ || $) && (t = a(t, E.acadSubPlanCode), f.push(E));
      }
      return f;
    },
    getSubPln: () => e.subplans
  };
}
function Gh(e) {
  const t = e.getProgramType(), r = [], n = (h) => ({
    text: h,
    url: ""
  }), a = (h) => ({
    text: "Online",
    url: h
  }), s = e.getCampusList().map((h) => h.campusCode);
  s.length > 0 && r.push(
    ...s.map(
      (h) => h === "ONLNE" && a(e.getCurriculumUrl()) || Gs(h, t) || n(h)
    )
  );
  const p = e.getCampusWue();
  return p && r.push(
    Gs(p, t) || n(p)
  ), r;
}
const Yh = (e, t) => {
  const r = { ...e };
  return r.globalOpportunity && !t.getGlobalExp() && (r.globalOpportunity = !1), r.careerOutlook && !t.getAsuCareerOpportunity() && (r.careerOutlook = !1), r.attendOnline && !t.getCurriculumUrl() && (r.attendOnline = !1), r;
}, Xh = (e) => {
  var a;
  const t = Object.values(e).filter(
    (s) => s === !0
  );
  return ((a = e == null ? void 0 : e.externalAnchors) == null ? void 0 : a.length) > 0 || t.length > 0;
};
function Zh(e) {
  return "";
}
function Jh(e) {
  return "";
}
function Kh() {
  return "";
}
function za(e, t) {
  let r = t || "";
  return r = r.replaceAll("{INSTITUTION_CODE}", e.getInstitution()).replaceAll("{ACAD_PLAN_CODE}", e.getAcadPlan()), r;
}
function Dc(e, t) {
  return `${za(e, t)}#${ut.flexibleDegreeOptions.acceleratedId}`;
}
function Zs({
  programs: e = [],
  filters: {
    collegeAcadOrg: t,
    departmentCode: r,
    acceleratedConcurrent: n,
    locations: a = [],
    keyword: s,
    blacklistAcadPlans: p,
    program: h,
    showCerts: g
  }
}) {
  const f = (z) => !t || z.getCollegeAcadOrgJoint().includes(t), k = (z) => !r || z.getDepartmentCode().includes(r), E = (z) => {
    var S;
    return !a.length || ((S = z.getCampusList()) == null ? void 0 : S.some((ie) => a.some((de) => de.value === ie.campusCode)));
  }, _ = (z = {}) => {
    var S;
    return !Hi(n) || ((S = z[n.value]) == null ? void 0 : S.length) > 0;
  }, $ = (z, S) => !!(!S || new RegExp(S, "i").test(z.getMajorDesc())), O = (z, S) => !!(!S || new RegExp(S, "i").test(z.getFullDescription())), C = (z) => !(p != null && p.includes(z.getAcadPlan())), P = (z) => h === "undergrad" ? !0 : g === "true" ? z.isMinorOrCertificate() : z.isPhdOrMasters(), F = (z) => {
    const S = Kr(z);
    return f(S) && k(S) && E(S) && _(z) && C(S) && P(S);
  }, U = [], Y = [];
  return e.filter((z) => {
    const S = Kr(z), ie = $(S, s), de = O(
      S,
      s
    );
    return (ie || de) && F(z) ? (ie ? U.push(z) : Y.push(z), !0) : !1;
  }), U.concat(Y);
}
const Qh = (e) => e.sort(
  (r, n) => r.acadPlanMarketingDescription.localeCompare(
    n.acadPlanMarketingDescription
  )
), Ir = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: s = "",
  region: p = "",
  component: h = ""
}) => {
  const { dataLayer: g } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: p.toLowerCase(),
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: h.toLowerCase()
  };
  g && g.push(f);
};
function vo({ breadcrumbs: e, section: t }) {
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
            onClick: () => Ir({
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
        onClick: () => Ir({
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
vo.propTypes = {
  breadcrumbs: A.arrayOf(Xr),
  section: A.string
};
const em = () => /* @__PURE__ */ d.jsx("div", { className: "container", "data-testid": "browse-title", children: /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Browse degrees" }) }) }), ki = ({
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
] }), tm = Je.div`
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
`, rm = Je.button`
  font-weight: 400;
  text-decoration: underline;
`, nm = {
  event: "select",
  action: "click",
  name: "onclick"
}, am = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link"
}, In = {
  isActive: !1,
  locations: [],
  asuLocals: [],
  acceleratedConcurrent: { value: "all", text: "" },
  keyword: null,
  blacklistAcadPlans: []
}, Ti = (e) => ({
  id: e.id,
  value: e.value,
  text: e.text
}), im = (e) => e.map((t) => t.text).join(", "), Js = (e, t) => {
  Ir({ ...nm, type: e, text: t });
}, Ks = (e) => {
  Ir({ ...am, text: e });
}, Ic = ({ value: e, onChange: t, onApply: r, onClean: n }) => {
  const a = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (g, { target: { selectedOptions: f } }) => {
      let k = [], E = [];
      const _ = Array.from(f, Ti), { locations: $, asuLocals: O } = e;
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
      }), Js({
        locations: "location or online",
        asuLocals: "as local"
      }[g], im(_));
    }
  ), s = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (g, { target: { selectedOptions: f } }) => {
      t({ ...e, [g]: Ti(f[0]) }), Js(
        "accelerated/concurrent",
        Ti(f[0]).text
      );
    }
  ), p = () => {
    r == null || r({
      ...e,
      isActive: !0
    });
  }, h = () => {
    t(In), n == null || n();
  };
  return /* @__PURE__ */ d.jsxs(tm, { className: "container", "data-testid": "filters", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Filter your results" }),
    /* @__PURE__ */ d.jsxs("form", { className: "mt-3 uds-form row", children: [
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        ki,
        {
          multiple: !0,
          id: "locations",
          label: "Campuses or online",
          selected: e.locations.map((g) => g.value),
          options: bo,
          onChange: a
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        ki,
        {
          multiple: !0,
          id: "asuLocals",
          label: "ASU location, ASU Local",
          selected: e.asuLocals.map((g) => g.value),
          options: Cc,
          onChange: a
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        ki,
        {
          id: "acceleratedConcurrent",
          label: "Accelerated, Concurrent",
          selected: e.acceleratedConcurrent.value,
          options: yo,
          onChange: s
        }
      ) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "hint-container", children: /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("small", { children: "*CTRL + Click to select multiple" }) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "filter-action-buttons", children: [
      /* @__PURE__ */ d.jsx(
        _r,
        {
          "data-testid": "btn-apply-filter",
          color: "maroon",
          label: "Apply filters",
          ariaLabel: "Apply filters",
          size: "default",
          onClick: () => {
            p(), Ks("apply filters");
          }
        }
      ),
      /* @__PURE__ */ d.jsx(
        rm,
        {
          "data-testid": "btn-clear-filters",
          className: "btn btn-link",
          onClick: () => {
            h(), Ks("clean filters");
          },
          children: "Clear filters"
        }
      )
    ] })
  ] });
};
Ic.propTypes = {
  value: yc,
  onChange: A.func,
  onApply: A.func,
  onClean: A.func
};
function Lc({
  value: { isActive: e, locations: t, asuLocals: r, acceleratedConcurrent: n } = {},
  onRemove: a
}) {
  const s = Qr("filter-"), p = (t == null ? void 0 : t.length) + (r == null ? void 0 : r.length) + (Hi(n) ? 1 : 0), h = (g, f) => {
    const { text: k } = f;
    return /* @__PURE__ */ d.jsxs(
      "span",
      {
        tabIndex: -1,
        role: "button",
        "aria-label": `Remove filter ${k}`,
        "data-filter-id": g,
        onKeyDown: () => a(g, f),
        onClick: () => a(g, f),
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
      t.map((g) => h("locations", g)),
      r.map((g) => h("asuLocals", g)),
      (Hi(n) ? [n] : []).map((g) => h("acceleratedConcurrent", g))
    ] }) })
  ] });
}
Lc.propTypes = {
  value: yc,
  onRemove: A.func
};
const om = Je.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`, sm = Je.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;
function lm({
  applyNowUrl: e,
  title: t,
  contents: r,
  photoGrid: n
}) {
  const a = Ua(t);
  return /* @__PURE__ */ d.jsx(
    "section",
    {
      className: "container",
      "data-type": "text-photo-grid",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ d.jsx(a, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${ln(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ d.jsx(Gn, { contents: r }),
          /* @__PURE__ */ d.jsx(Vn, { href: e })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-7 d-none d-sm-none d-md-block", children: /* @__PURE__ */ d.jsx(om, { className: "row", children: n.images.map((s, p) => /* @__PURE__ */ d.jsx(
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
function cm({
  applyNowUrl: e,
  title: t,
  contents: r,
  image: n,
  video: a
}) {
  const s = Ua(t);
  return /* @__PURE__ */ d.jsx(
    sm,
    {
      className: "container",
      "data-type": "text-media",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ d.jsxs("div", { className: "row gy-3", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ d.jsx(s, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${ln(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ d.jsx(Gn, { contents: r }),
          /* @__PURE__ */ d.jsx(Vn, { href: e })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7 mt-2 mt-sm-0", children: [
          a && /* @__PURE__ */ d.jsx(
            io,
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
function um({
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
        dn,
        {
          title: t.text,
          contents: r,
          image: n,
          contentDirection: "right",
          contentChildren: /* @__PURE__ */ d.jsx("div", { className: "mt-2", children: /* @__PURE__ */ d.jsx(Vn, { href: e }) })
        }
      ) }) })
    }
  );
}
const dm = ({ applyNowUrl: e, title: t, contents: r }) => {
  const n = Ua(t);
  return /* @__PURE__ */ d.jsx("section", { className: "container", "data-type": "text", "data-testid": "intro-content", children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-5", children: /* @__PURE__ */ d.jsx(n, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${ln(t.cssClass)}`, children: t.text }) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7", children: [
      /* @__PURE__ */ d.jsx(Gn, { contents: r }),
      /* @__PURE__ */ d.jsx(Vn, { href: e })
    ] })
  ] }) });
}, So = ({
  applyNowUrl: e,
  type: t,
  title: r,
  contents: n,
  image: a,
  video: s,
  photoGrid: p
}) => ({
  text: () => dm({ applyNowUrl: e, title: r, contents: n }),
  "text-media": () => cm({
    applyNowUrl: e,
    title: r,
    contents: n,
    image: a,
    video: s
  }),
  "text-image-overlay": () => um({ applyNowUrl: e, title: r, contents: n, image: a }),
  "text-photo-grid": () => lm({
    applyNowUrl: e,
    title: r,
    contents: n,
    photoGrid: p
  }),
  undefined: () => (console.error(
    `the type '${t}' is not supported by the 'IntroContent' component.`
  ), null)
})[t]();
So.propTypes = {
  applyNowUrl: A.string,
  type: A.oneOf([
    "text",
    "text-media",
    "text-image-overlay",
    "text-photo-grid"
  ]).isRequired,
  video: A.shape({ ...mo }),
  image: A.shape({ ...ho }),
  header: La,
  title: A.shape({
    ...hc,
    component: A.oneOf(wc)
  }),
  contents: A.arrayOf(La),
  photoGrid: A.shape({
    images: A.arrayOf(Cr)
  })
};
const qa = {
  programs: A.arrayOf(A.object),
  totalRows: A.number,
  loading: A.bool,
  actionUrls: A.shape({
    applyNowUrl: A.string,
    majorInfoUrl: A.string,
    majorInfoOnlineUrl: A.string
  }),
  degreesPerPage: A.number
}, pm = Je.div`
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
  var p, h, g, f, k;
  const { state: r } = Xt(pn), n = (h = (p = r == null ? void 0 : r.listPageProps) == null ? void 0 : p.programList) == null ? void 0 : h.settings, a = ((k = (f = (g = r == null ? void 0 : r.listPageProps) == null ? void 0 : g.programList) == null ? void 0 : f.dataSource) == null ? void 0 : k.program) === "graduate", s = e.map((E) => {
    const _ = Kr(E), $ = () => {
      var U;
      const P = _.isOnline() ? _.getOnlineMajorMapURL() : _.getGeneralDegreeMajorMap();
      let F;
      try {
        F = `<a href=${(U = new URL(P)) == null ? void 0 : U.toString()}>${_.getRequiredCoursesLabel()} Map</a>`;
      } catch {
        return "";
      }
      return F;
    }, O = () => `<div>
        ${_.hasConcurrentDegrees() ? "<div className='cell-container'>concurrent</div>" : ""}
        ${_.hasAccelerateDegrees() ? `<div className="cell-container">
                <a href=${Dc(
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
            <a href=${za(_, t.majorInfoUrl)}>
              ${_.getMajorDesc()}
            </a>
        </li>
        <li>
          <strong>Degree:</strong>
          <br />${_.getDegree()}
        </li>
        ${a ? "" : `<li>
              <strong>Required Courses:</strong>
              <br />${$()}
            </li>`}
        <li>
          <strong>Campus or location:</strong>
          <br />${_.getCampusList().map((C) => Vi(C.campusCode)).join(", ")}
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
  return /* @__PURE__ */ d.jsx(pm, { "data-testid": "accordion-view", children: /* @__PURE__ */ d.jsx(eo, { cards: s }) });
};
Mc.propTypes = {
  ...qa
};
const fm = Je.section`
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
  const { defaultState: n, state: a } = Xt(pn), s = (E = (k = (f = (g = a == null ? void 0 : a.listPageProps) == null ? void 0 : g.programList) == null ? void 0 : f.settings) == null ? void 0 : k.cardDefaultImage) == null ? void 0 : E.url, p = n.detailPageDefault.hero.image.url, h = s || p;
  return /* @__PURE__ */ d.jsx(
    fm,
    {
      id: Tc,
      className: "container row",
      "data-loading": t,
      "data-testid": "grid-view",
      children: e.map((_) => {
        const $ = Kr(_);
        return /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-4 col-lg-3 mb-2", children: /* @__PURE__ */ d.jsx(
          bt,
          {
            type: "degree",
            horizontal: !1,
            clickable: !1,
            image: h,
            imageAltText: "An example image",
            title: $.getMajorDesc(),
            linkLabel: "View Program Details",
            linkUrl: za($, r.majorInfoUrl),
            buttons: [
              {
                color: "maroon",
                size: "small",
                label: "Reqeuest Info",
                href: Kh()
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
  ...qa
};
const hm = [
  {
    dataKey: "Major",
    label: "Major",
    className: "major",
    sortable: !0,
    contentTemplate: ({ resolver: e, rowIndex: t, actionUrls: r, onClick: n }) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
      /* @__PURE__ */ d.jsx("a", { href: za(e, r == null ? void 0 : r.majorInfoUrl), children: e.getMajorDesc() }),
      /* @__PURE__ */ d.jsx(
        Wh,
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
        wi,
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
      const t = Qr("campus-");
      return /* @__PURE__ */ d.jsx("div", { children: e.getCampusList().map((r, n, a) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
        /* @__PURE__ */ d.jsx("span", { children: `${Vi(
          _h(r.campusCode)
        )}${n < a.length - 1 ? ", " : ""}` }, r.campusCode),
        /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx(
          wi,
          {
            popover: {
              title: Vi(r.campusCode),
              body: () => fetch(Zh(r.campusCode)),
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
        /* @__PURE__ */ d.jsx("a", { href: Dc(e, t.majorInfoUrl), children: "4+1 years" }),
        /* @__PURE__ */ d.jsx(
          wi,
          {
            popover: {
              title: "4+1 years",
              body: () => fetch(Jh(e.getAcadPlan())),
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
], mm = uo`
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
`, gm = Je.table`
  ${mm}
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
`, bm = ({ resolver: e, id: t }) => {
  const r = Eu(), n = (a) => {
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
}, ym = ({ resolver: e }) => /* @__PURE__ */ d.jsxs("div", { children: [
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
        dangerouslySetInnerHTML: Yt(
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
] }), xm = Qr("row-"), $c = ({ programs: e, totalRows: t, loading: r, actionUrls: n }) => {
  var k, E;
  const a = ht.useRef(null), s = ht.useRef(null), { state: p } = Xt(pn), h = (E = (k = p == null ? void 0 : p.listPageProps) == null ? void 0 : k.programList) == null ? void 0 : E.settings;
  let g = hm;
  p.listPageProps.programList.dataSource.program === "graduate" && (g = g.filter((_) => _.dataKey !== "RequiredCourses")), h != null && h.hideCollegeSchool && (g = g.filter((_) => _.dataKey !== "CollegeSchool"));
  const f = (_, $) => {
    const O = s.current.children;
    Array.prototype.forEach.call(
      O,
      (P, F) => F !== _ && P.setAttribute("data-is-open", "false")
    ), s.current.children[_].setAttribute("data-is-open", String($));
  };
  return /* @__PURE__ */ d.jsx("section", { className: "container mb-4", "data-testid": "list-view", children: /* @__PURE__ */ d.jsxs(
    gm,
    {
      id: Tc,
      ref: a,
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
            const O = xm.next().value, C = $ * 2, P = Kr(_);
            return /* @__PURE__ */ d.jsxs(il, { children: [
              /* @__PURE__ */ d.jsx("tr", { role: "row", children: g.map((F) => {
                var U;
                return /* @__PURE__ */ d.jsx(
                  "td",
                  {
                    className: `${F.className}`,
                    children: (U = F.contentTemplate) == null ? void 0 : U.call(F, {
                      resolver: P,
                      col: F,
                      row: _,
                      rowIndex: C,
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
                  id: `row-info-${C}`,
                  className: "row-info",
                  children: [
                    /* @__PURE__ */ d.jsx("td", { colSpan: 3, children: bm({ resolver: P, id: `${O}-more-text` }) }, `${O}-info`),
                    /* @__PURE__ */ d.jsx("td", { colSpan: 2, children: ym({ resolver: P }) }, `${O}-extra-info`)
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
  ...qa
};
const vm = $a`

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
`, Sm = {
  [kc]: Fc,
  [Wi]: $c
};
function Uc({
  dataViewComponent: e,
  loading: t,
  programs: r,
  actionUrls: n,
  degreesPerPage: a
}) {
  let s;
  a ? typeof a != "number" && (s = parseInt(a, 10)) : s = 8;
  const p = a || s, h = jh(r.length, p), g = Sm[e], [f, k] = ct([]), E = (_, $) => {
    const O = ($ - 1) * p, C = O + p;
    k(r.slice(O, C));
  };
  return _t(() => {
    k(r.slice(0, p));
  }, [r]), /* @__PURE__ */ d.jsxs("section", { "data-testid": "program-list", "data-view-type": e, children: [
    /* @__PURE__ */ d.jsx(vm, {}),
    /* @__PURE__ */ d.jsx("div", { className: "desktop-view", children: /* @__PURE__ */ d.jsx(
      g,
      {
        loading: t,
        programs: f,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: a || s
      }
    ) }),
    /* @__PURE__ */ d.jsx("div", { className: "mobile-view mb-2", children: /* @__PURE__ */ d.jsx(
      Mc,
      {
        loading: t,
        programs: f,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: a || s
      }
    ) }),
    r.length > 0 ? /* @__PURE__ */ d.jsx(
      $l,
      {
        totalNumbers: 7,
        type: "default",
        background: "white",
        totalPages: h,
        onChange: E,
        showFirstButton: !0,
        showLastButton: !0
      }
    ) : /* @__PURE__ */ d.jsx("section", { className: "container no-space", children: /* @__PURE__ */ d.jsx(ph, { message: "No result found for the filters applied" }) })
  ] });
}
Uc.propTypes = {
  dataViewComponent: A.string,
  ...qa,
  degreesPerPage: A.number
};
const wm = Je.div`
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
  const [n, a] = ct(!1);
  let s;
  _t(() => () => clearTimeout(s), []);
  const p = (h) => {
    Ir({
      event: "search",
      action: "type",
      name: "onenter",
      type: "search degree programs",
      text: h
    });
  };
  return /* @__PURE__ */ d.jsx(
    wm,
    {
      className: "container mt-5",
      "data-searching": n,
      "data-testid": "search-bar",
      children: /* @__PURE__ */ d.jsx(
        "form",
        {
          "data-testid": "search-bar-form",
          className: "uds-form p-0 col-md-6 col-sm-12",
          onSubmit: (h) => {
            h.preventDefault(), r(), a(!0), s = setTimeout(() => a(!1), 500), clearTimeout(s);
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
                  onChange: (h) => {
                    t(h.target.value), p(h.target.value);
                  }
                }
              ) }),
              /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-6 mt-2 mt-sm-0", children: /* @__PURE__ */ d.jsx(
                _r,
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
  value: A.string,
  onChange: A.func,
  onSearch: A.func
};
const km = Je(Nc)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`, Tm = $a`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`, Am = Je.div.attrs({ className: "container" })`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`, wo = ({
  appPathFolder: e,
  actionUrls: t,
  hasSearchBar: r = !0,
  hasFilters: n = !0,
  hero: a,
  introContent: s,
  programList: p,
  degreesPerPage: h
}) => {
  var re;
  const [{ data: g, loading: f, error: k }, E] = Ul(), [_, $] = ct(!1), [O, C] = ct([]), [P, F] = ct([]), [U, Y] = ct(""), z = (re = p == null ? void 0 : p.settings) == null ? void 0 : re.defaultView, S = [Wi, kc].includes(z) ? z : Wi, [ie, de] = ct(S), ve = _c(p.dataSource, Ph), { defaultState: Re } = Xt(pn), { listingPageDefault: Me } = Re, {
    collegeAcadOrg: se,
    departmentCode: pe,
    showInactivePrograms: Oe,
    blacklistAcadPlans: Ee,
    program: Se,
    cert: Ke
  } = p.dataSource, [je, Ce] = ct({
    ...In
  }), [Fe, Be] = ct({
    ...In
  });
  Hh({
    dataSource: p.dataSource,
    tableView: O,
    programs: g,
    stateFilters: je
  }), _t(() => {
    typeof window < "u" && Yl({
      packageName: "app-degree-pages",
      component: "ListingPage",
      type: "NA",
      configuration: {
        programList: p,
        degreesPerPage: h
      }
    });
  }, []), _t(() => {
    E(ve);
  }, [ve]), _t(() => {
    let j = Qh(g || []);
    j = Zs({
      programs: j,
      filters: {
        collegeAcadOrg: se,
        departmentCode: pe,
        blacklistAcadPlans: Ee,
        program: Se,
        showCerts: Ke
      }
    }), F(j), C(j);
  }, [g, h]);
  const ce = async (j) => {
    const { acceleratedConcurrent: le, locations: ee, asuLocals: ne, keyword: Z } = j;
    $(!0), E(ve);
    const oe = Zs({
      programs: P,
      filters: {
        collegeAcadOrg: se,
        departmentCode: pe,
        acceleratedConcurrent: le,
        locations: ne.length > 0 ? ee.concat(Ch) : ee,
        keyword: Z,
        blacklistAcadPlans: Ee,
        program: Se
      }
    });
    Ce({ ...j }), Be({ ...j }), C(oe), $(!1);
  }, H = async () => {
    const j = {
      ...Fe,
      keyword: U
    };
    ce(j);
  }, R = (j) => {
    f || _ || ce(j);
  }, W = async (j) => {
    Ce(j);
  }, B = () => {
    Ce(In), Be(In), C(P), Y("");
  }, x = (j, { value: le }) => {
    const ee = j === "acceleratedConcurrent" ? Eh : Fe[j].filter((Z) => Z.value !== le), ne = {
      ...Fe,
      [j]: ee
    };
    ce(ne);
  };
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(jc, {}),
    /* @__PURE__ */ d.jsx(Tm, {}),
    k && /* @__PURE__ */ d.jsx(dc, { message: Ac }),
    a != null && a.hide ? null : /* @__PURE__ */ d.jsx("section", { "data-testid": "hero", children: /* @__PURE__ */ d.jsx(
      Bn,
      {
        image: (a == null ? void 0 : a.image) || Me.hero.image,
        title: {
          text: Ah(p.dataSource),
          highlightColor: "gold",
          ...a == null ? void 0 : a.title,
          maxWidth: "100%"
        },
        contents: a == null ? void 0 : a.contents
      }
    ) }),
    /* @__PURE__ */ d.jsxs(km, { "data-is-loading": f, className: "main-section dg-margin-top", children: [
      (s == null ? void 0 : s.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        vo,
        {
          breadcrumbs: s.breadcrumbs,
          section: a ? a.title.text : ""
        }
      ) }),
      s ? /* @__PURE__ */ d.jsx(
        So,
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
        /* @__PURE__ */ d.jsx(em, {}),
        r ? /* @__PURE__ */ d.jsx(
          zc,
          {
            value: U,
            onChange: Y,
            onSearch: H
          }
        ) : null,
        n ? /* @__PURE__ */ d.jsx(
          Ic,
          {
            value: je,
            onChange: W,
            onApply: R,
            onClean: B
          }
        ) : null,
        /* @__PURE__ */ d.jsx(Am, {})
      ] }) : null,
      /* @__PURE__ */ d.jsx("section", { className: "container", children: /* @__PURE__ */ d.jsx("div", { className: "d-flex justify-content-between filter-switch-container", children: n ? /* @__PURE__ */ d.jsx(
        Lc,
        {
          value: Fe,
          onRemove: x
        }
      ) : null }) }),
      f || _ ? /* @__PURE__ */ d.jsx(pc, {}) : /* @__PURE__ */ d.jsx(
        Uc,
        {
          dataViewComponent: ie,
          loading: f || _,
          programs: O,
          actionUrls: t,
          degreesPerPage: h
        }
      )
    ] })
  ] });
};
wo.propTypes = {
  appPathFolder: A.string,
  actionUrls: A.shape({
    applyNowUrl: A.string
  }),
  hasSearchBar: A.bool,
  hasFilters: A.bool,
  hero: A.shape(Bn.propTypes),
  introContent: A.shape(So.propTypes),
  programList: A.shape({
    dataSource: mc,
    settings: bh
  }),
  degreesPerPage: A.number
};
const qc = (e) => /* @__PURE__ */ d.jsx(xo, { listPageProps: e, children: /* @__PURE__ */ d.jsx(wo, { ...e }) });
qc.propTypes = wo.propTypes;
const Cm = Je.section`
  position: relative;
  padding-top: var(--uds-dp-section-margin);
  padding-bottom: var(--uds-dp-section-margin);
`, Em = Je.div`
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
function _m() {
  return /* @__PURE__ */ d.jsxs(
    Cm,
    {
      className: "container",
      id: ut.affordingCollege.targetIdName,
      "data-testid": "affording-college",
      children: [
        /* @__PURE__ */ d.jsx(Em, {}),
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Affording college" }) }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
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
            bt,
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
            bt,
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
const Bc = Je.ul`
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
`, Om = ({
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
        className: yf("", {
          "mb-0": n.length === 0
        }),
        children: r.map(({ label: a, href: s }) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
          _r,
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
    n.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "mt-2 mb-4", children: /* @__PURE__ */ d.jsx(eo, { cards: n, openedCard: 1 }) })
  ] });
}, jm = (e) => {
  const t = "View Curriculum";
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("p", { children: "View curriculum below for a detailed list of courses and other requirements." }),
    /* @__PURE__ */ d.jsx(Bc, { children: /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
      _r,
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
          Om({
            transferRequirements: t,
            additionalRequirements: n
          })
        ]
      }
    );
  const p = r ? "Program requirements" : "Degree requirements", h = e || a;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: ut.applicationRequirements.targetIdName,
        "data-testid": "application-requirements",
        children: [
          /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: p }) }),
          h ? /* @__PURE__ */ d.jsx(
            "div",
            {
              dangerouslySetInnerHTML: Yt(h)
            }
          ) : jm(s)
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
Wc.propTypes = {
  graduateRequirements: A.string,
  transferRequirements: A.string,
  isMinorOrCertificate: A.bool,
  additionalRequirements: A.string,
  minorRequirements: A.string,
  majorMapURL: A.string
};
const Hr = ({ item: e, type: t }) => {
  const r = Qr("glance-"), n = () => typeof e == "object" ? e.map((a, s) => {
    const p = ["", "#"].includes(a.url) ? null : a.url;
    let h = "";
    return s > 0 && s < e.length - 1 && (h = ", "), s === e.length - 1 && e.length > 1 && (h = " or "), /* @__PURE__ */ d.jsxs(il, { children: [
      h,
      /* @__PURE__ */ d.jsx("a", { href: p, rel: "noreferrer", target: "_blank", children: a.text })
    ] }, r.next().value);
  }) : e;
  return /* @__PURE__ */ d.jsxs("li", { children: [
    /* @__PURE__ */ d.jsx("i", { className: `fas fa-${Vs[t].icon} fa-li` }),
    /* @__PURE__ */ d.jsxs("strong", { children: [
      Vs[t].title,
      ": "
    ] }),
    n()
  ] });
};
Hr.propTypes = {
  item: A.oneOfType([
    A.arrayOf(Ui),
    A.string
  ]),
  type: A.string
};
const Hc = ({
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
        e && /* @__PURE__ */ d.jsx(Hr, { item: [e], type: "offeredBy" }),
        t && /* @__PURE__ */ d.jsx(Hr, { item: t, type: "locations" }),
        r && /* @__PURE__ */ d.jsx(
          Hr,
          {
            item: r,
            type: "firstRequirementMathCourse"
          }
        ),
        n && /* @__PURE__ */ d.jsx(Hr, { item: n, type: "mathIntensity" }),
        a && /* @__PURE__ */ d.jsx(Hr, { item: a, type: "timeCommitment" }),
        s && /* @__PURE__ */ d.jsx(Hr, { item: s, type: "stemOptText" })
      ] })
    ]
  }
);
Hc.propTypes = {
  offeredBy: Ui.isRequired,
  locations: A.arrayOf(Ui).isRequired,
  firstRequirementMathCourse: A.string.isRequired,
  mathIntensity: A.string,
  timeCommitment: A.string,
  stemOptText: A.string
};
const Nm = `
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;
function Vc({ image: e, learnMoreLink: t, contents: r }) {
  const n = `linear-gradient(180deg, #19191900 0%, #191919c9 100%),url('${e.url}')`, a = Qr("attend-online-");
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
        /* @__PURE__ */ d.jsx("div", { className: "card-body", children: r ? r.map((s) => /* @__PURE__ */ d.jsx("p", { children: s }, a.next().value)) : /* @__PURE__ */ d.jsx("p", { children: Nm }) }),
        /* @__PURE__ */ d.jsx("div", { className: "card-button", children: /* @__PURE__ */ d.jsx(
          _r,
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
  learnMoreLink: A.string,
  image: Cr,
  contents: A.arrayOf(
    A.shape({
      text: A.string
    })
  )
};
const Rm = Je.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Gc = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  Rm,
  {
    id: ut.careerOutlook.targetIdName,
    "data-testid": "career-outlook",
    children: /* @__PURE__ */ d.jsx(
      dn,
      {
        headingTag: "H2",
        title: ut.careerOutlook.text,
        contents: e,
        image: t
      }
    )
  }
);
Gc.propTypes = dn.propTypes;
const Pm = Je.div`
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
      id: ut.changeMajorRequirements.targetIdName,
      className: "change-your-major",
      "data-testid": "change-your-major",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Change your major requirements for current students" }) }),
        /* @__PURE__ */ d.jsx(
          Pm,
          {
            dangerouslySetInnerHTML: Yt(e)
          }
        )
      ]
    }
  );
}
Yc.propTypes = {
  content: A.string
};
function Xc({ content: e = "" }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-testid": "custom-text",
      className: "mt-3",
      dangerouslySetInnerHTML: Yt(e)
    }
  );
}
Xc.propTypes = {
  content: A.string
};
const Zc = `
  width: unset !important;
  min-width: unset !important;
`, Jc = Je.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${Zc}
`, Kc = Je.i`
  color: #78be21;
  ${Zc}
`;
function Qc({ data: e }) {
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
        t.brightOutlook && /* @__PURE__ */ d.jsx(Jc, { className: "fas fa-sun ms-1" })
      ] }),
      /* @__PURE__ */ d.jsxs("td", { className: "text-end", children: [
        +t.growth,
        "%"
      ] }),
      /* @__PURE__ */ d.jsx("td", { className: "text-end", children: t.medianSalary || 0 })
    ] }, t.career.url)) })
  ] }) });
}
Qc.propTypes = {
  data: A.arrayOf(gc)
};
function eu({ tableData: e }) {
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
          /* @__PURE__ */ d.jsx(Qc, { data: e }),
          /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("small", { children: "* Data obtained from the Occupational Information Network (O*NET) under sponsorship of the U.S. Department of Labor/Employment and Training Administration (USDOL/ETA)." }) })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "d-flex", children: [
          /* @__PURE__ */ d.jsxs("p", { className: "me-3", children: [
            /* @__PURE__ */ d.jsx(Jc, { className: "fas fa-sun me-1" }),
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
  tableData: A.arrayOf(gc)
};
const Dm = Je.ul`
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
  /* @__PURE__ */ d.jsx(Dm, { className: "mt-3 mb-3", children: r.map((n, a) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: n.url, target: "_blank", rel: "noreferrer", children: n.title }) }, `${n.title}-${a}`)) }),
  /* @__PURE__ */ d.jsx("p", { className: "mb-0", children: "Acceptance to the graduate program requires a separate application. During their junior year, eligible students will be advised by their academic departments to apply." })
] });
Gi.propTypes = {
  id: A.string,
  title: A.string,
  links: zi
};
function tu({ acceleratedLinks: e, concurrentLinks: t }) {
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
tu.propTypes = {
  acceleratedLinks: zi,
  concurrentLinks: zi
};
const Im = Je.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, ru = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  Im,
  {
    id: ut.globalOpportunity.targetIdName,
    "data-testid": "global-opportunity",
    children: /* @__PURE__ */ d.jsx(
      dn,
      {
        headingTag: "H2",
        title: ut.globalOpportunity.text,
        contents: e,
        image: t
      }
    )
  }
);
ru.propTypes = dn.propTypes;
const nu = ({ url: e, altText: t }) => /* @__PURE__ */ d.jsx("div", { className: "uds-img pt-3 pb-3", "data-testid": "intro-image", children: /* @__PURE__ */ d.jsx("img", { src: e, className: "img-fluid", alt: t }) });
nu.propTypes = { ...ho };
const Lm = (e, t) => {
  if (e !== "youtube")
    return t;
  const r = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, n = t.match(r);
  return n && n[7].length === 11 ? `https://www.youtube.com/embed/${n[7]}` : t;
}, Mm = Je.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`, au = ({ type: e, url: t, vttUrl: r, title: n }) => /* @__PURE__ */ d.jsx(Mm, { "data-testid": "intro-video", children: /* @__PURE__ */ d.jsx(
  io,
  {
    type: e,
    url: Lm(e, t),
    vttUrl: r,
    title: n,
    controls: !0
  }
) });
au.propTypes = { ...mo };
function iu({ contents: e = [] }) {
  return /* @__PURE__ */ d.jsx("div", { "data-testid": "market-text", children: e.map((t, r) => /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `mt-3 ${ln(t.cssClass)}`,
      dangerouslySetInnerHTML: Yt(t.text)
    },
    `content-${r + 1}`
  )) });
}
iu.propTypes = {
  contents: A.arrayOf(La)
};
function ou({ cards: e, defaultCards: t }) {
  var r, n, a, s, p, h, g, f, k, E, _, $;
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
            bt,
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
            bt,
            {
              icon: ((p = e == null ? void 0 : e.apply) == null ? void 0 : p.icon) ?? t.apply.icon,
              title: ((h = e == null ? void 0 : e.apply) == null ? void 0 : h.title) ?? t.apply.title,
              body: ((g = e == null ? void 0 : e.apply) == null ? void 0 : g.content) ?? t.apply.content,
              buttons: [
                ((f = e == null ? void 0 : e.apply) == null ? void 0 : f.buttonLink) ?? t.apply.buttonLink
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
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
  cards: A.shape({
    learnMore: Wr,
    apply: Wr,
    visit: Wr
  }),
  defaultCards: A.shape({
    learnMore: Wr,
    apply: Wr,
    visit: Wr
  })
};
function su({ content: e = "" }) {
  return /* @__PURE__ */ d.jsxs("section", { className: "container", "data-testid": "professional-licensure", children: [
    /* @__PURE__ */ d.jsx("h3", { children: "Professional licensure" }),
    /* @__PURE__ */ d.jsx("p", { dangerouslySetInnerHTML: Yt(e) })
  ] });
}
su.propTypes = {
  content: A.node
};
const Ai = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "main content",
  section: "Program contact information"
}, Fm = Je.ul`
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
      id: ut.programContactInfo.targetIdName,
      "data-testid": "program-contact-info",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Program contact information" }) }),
        /* @__PURE__ */ d.jsx("p", { children: "If you have questions related to admission, please fill out the request information form above and an admission specialist will contact you directly. For questions regarding faculty or courses, please use the contact information below." }),
        /* @__PURE__ */ d.jsxs(Fm, { className: "text-maroon", children: [
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
                onClick: () => Ir({ ...Ai, text: e.text }),
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
                onClick: () => Ir({ ...Ai, text: r.text }),
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
                onClick: () => Ir({ ...Ai, text: n }),
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
  department: Xr,
  asuOfficeLoc: A.string,
  email: Xr,
  phone: A.string
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
      /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("strong", { children: Sh }) }),
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
  content: A.string,
  stemOptText: A.string,
  programNotFound: A.bool
};
const $m = "https://changemajor.apps.asu.edu/", Um = "On-campus students", zm = "Online students", qm = "View major map -", Qs = "View major map";
function cu({
  onlineMajorMapURL: e = "",
  majorMapOnCampusURL: t = "",
  subPlnMajorMaps: r = [],
  subPlns: n = []
}) {
  const a = (k) => {
    const E = n.find(
      (_) => _.acadSubPlanCode === k
    );
    return E ? E.description : "";
  }, s = (k, E, _) => {
    k && _.push({
      href: k,
      text: E
    });
  }, p = [], h = [];
  r.forEach((k) => {
    const E = a(k.acadSubPlanCode), _ = `${qm} ${E}`;
    s(k.url, _, p);
  }), t && s(t, Qs, p), e && s(e, Qs, h);
  const g = (k, E) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("h5", { children: k }),
    /* @__PURE__ */ d.jsx("ul", { className: "mb-3", children: E.map((_) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: _.href, children: _.text }) }, _.href)) })
  ] }), f = () => /* @__PURE__ */ d.jsxs("section", { className: "container ps-0", "data-testid": "required-course", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Required courses (major map)" }),
    p.length > 0 && g(Um, p),
    h.length > 0 && g(zm, h),
    /* @__PURE__ */ d.jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ d.jsx("strong", { children: "What if:" }),
      " See how your courses can be applied to another major and find out how to ",
      /* @__PURE__ */ d.jsx("a", { href: $m, children: "change your major" })
    ] })
  ] });
  return !(r != null && r.length) && !e && !t ? /* @__PURE__ */ d.jsx("div", {}) : f();
}
cu.propTypes = {
  onlineMajorMapURL: A.string,
  majorMapOnCampusURL: A.string,
  subPlnMajorMaps: A.arrayOf(
    A.shape({
      campus: A.string,
      acadSubPlanCode: A.string,
      defaultFlag: A.bool,
      url: A.string
    })
  ),
  subPlns: A.arrayOf(
    A.shape({
      acadSubPlanCode: A.string,
      description: A.string
    })
  )
};
const uu = ({ sectionIntroText: e, cards: t, defaultCards: r }) => {
  var n, a, s, p, h, g, f, k, E, _, $, O, C, P, F, U, Y, z, S, ie, de, ve, Re, Me, se, pe, Oe, Ee, Se, Ke, je, Ce, Fe, Be, ce, H, R, W, B, x, re, j;
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
            bt,
            {
              image: ((a = (n = t == null ? void 0 : t.faculty) == null ? void 0 : n.image) == null ? void 0 : a.url) ?? r.faculty.image.url,
              imageAltText: ((p = (s = t == null ? void 0 : t.faculty) == null ? void 0 : s.image) == null ? void 0 : p.altText) ?? r.faculty.image.altText,
              title: ((h = t == null ? void 0 : t.faculty) == null ? void 0 : h.title) ?? r.faculty.title,
              body: ((g = t == null ? void 0 : t.faculty) == null ? void 0 : g.text) ?? r.faculty.text,
              buttons: [((f = t == null ? void 0 : t.faculty) == null ? void 0 : f.button) ?? r.faculty.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
            {
              image: ((E = (k = t == null ? void 0 : t.programs) == null ? void 0 : k.image) == null ? void 0 : E.url) ?? r.programs.image.url,
              imageAltText: (($ = (_ = t == null ? void 0 : t.programs) == null ? void 0 : _.image) == null ? void 0 : $.altText) ?? r.programs.image.altText,
              title: ((O = t == null ? void 0 : t.programs) == null ? void 0 : O.title) ?? r.programs.title,
              body: ((C = t == null ? void 0 : t.programs) == null ? void 0 : C.text) ?? r.programs.text,
              buttons: [((P = t == null ? void 0 : t.programs) == null ? void 0 : P.button) ?? r.programs.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
            {
              image: ((U = (F = t == null ? void 0 : t.research) == null ? void 0 : F.image) == null ? void 0 : U.url) ?? r.research.image.url,
              imageAltText: ((z = (Y = t == null ? void 0 : t.research) == null ? void 0 : Y.image) == null ? void 0 : z.altText) ?? r.research.image.altText,
              title: ((S = t == null ? void 0 : t.research) == null ? void 0 : S.title) ?? r.research.title,
              body: ((ie = t == null ? void 0 : t.research) == null ? void 0 : ie.text) ?? r.research.text,
              buttons: [((de = t == null ? void 0 : t.research) == null ? void 0 : de.button) ?? r.research.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
            {
              image: ((Re = (ve = t == null ? void 0 : t.inclusion) == null ? void 0 : ve.image) == null ? void 0 : Re.url) ?? r.inclusion.image.url,
              imageAltText: ((se = (Me = t == null ? void 0 : t.inclusion) == null ? void 0 : Me.image) == null ? void 0 : se.altText) ?? r.inclusion.image.altText,
              title: ((pe = t == null ? void 0 : t.inclusion) == null ? void 0 : pe.title) ?? r.inclusion.title,
              body: ((Oe = t == null ? void 0 : t.inclusion) == null ? void 0 : Oe.text) ?? r.inclusion.text,
              buttons: [
                ((Ee = t == null ? void 0 : t.inclusion) == null ? void 0 : Ee.button) ?? r.inclusion.button
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
            {
              image: ((Ke = (Se = t == null ? void 0 : t.mentors) == null ? void 0 : Se.image) == null ? void 0 : Ke.url) ?? r.mentors.image.url,
              imageAltText: ((Ce = (je = t == null ? void 0 : t.mentors) == null ? void 0 : je.image) == null ? void 0 : Ce.altText) ?? r.mentors.image.altText,
              title: ((Fe = t == null ? void 0 : t.mentors) == null ? void 0 : Fe.title) ?? r.mentors.title,
              body: ((Be = t == null ? void 0 : t.mentors) == null ? void 0 : Be.text) ?? r.mentors.text,
              buttons: [((ce = t == null ? void 0 : t.mentors) == null ? void 0 : ce.button) ?? r.mentors.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
            {
              image: ((R = (H = t == null ? void 0 : t.honors) == null ? void 0 : H.image) == null ? void 0 : R.url) ?? r.honors.image.url,
              imageAltText: ((B = (W = t == null ? void 0 : t.honors) == null ? void 0 : W.image) == null ? void 0 : B.altText) ?? r.honors.image.altText,
              title: ((x = t == null ? void 0 : t.honors) == null ? void 0 : x.title) ?? r.honors.title,
              body: ((re = t == null ? void 0 : t.honors) == null ? void 0 : re.text) ?? r.honors.text,
              buttons: [((j = t == null ? void 0 : t.honors) == null ? void 0 : j.button) ?? r.honors.button]
            }
          ) })
        ] })
      ]
    }
  );
};
uu.propTypes = bc;
const ko = ({
  appPathFolder: e,
  dataSource: t,
  anchorMenu: r,
  hero: n,
  introContent: a,
  atAGlance: s,
  applicationRequirements: p,
  changeMajorRequirements: h,
  affordingCollege: g,
  flexibleDegreeOptions: f,
  careerOutlook: k,
  exampleCareers: E,
  globalOpportunity: _,
  attendOnline: $,
  programContactInfo: O,
  nextSteps: C,
  whyChooseAsu: P
}) => {
  var Oe, Ee, Se, Ke;
  const [{ data: F, loading: U, error: Y }, z] = Ul(), [S, ie] = ct(Kr({})), [de, ve] = ct({ accelerateData: [], concurrentData: [] }), Re = _c(t, Dh), { defaultState: Me } = Xt(pn), { detailPageDefault: se } = Me;
  _t(() => {
    typeof window < "u" && Yl({
      packageName: "app-degree-pages",
      component: "DetailPage",
      type: "NA",
      configuration: {
        dataSource: t
      }
    });
  }, []), _t(() => {
    z(Re);
  }, [Re]), _t(() => {
    if (F) {
      const je = Kr(F);
      ie(je), je.hasConcurrentOrAccelerateDegrees() && $h(
        [
          je.getAccelerateDegrees(),
          je.getConcurrentDegrees()
        ],
        ve
      );
    }
  }, [F]);
  const pe = r ? Yh(r, S) : null;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(jc, {}),
    Y && /* @__PURE__ */ d.jsx(dc, { message: Ac }),
    !(n != null && n.hide) && /* @__PURE__ */ d.jsx("section", { children: /* @__PURE__ */ d.jsx(
      Bn,
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
    /* @__PURE__ */ d.jsxs(Nc, { as: "div", "data-is-loading": U, className: "main-section", children: [
      !U && pe && Xh(pe) && /* @__PURE__ */ d.jsx(Ec, { anchorMenu: pe }),
      U && /* @__PURE__ */ d.jsx(pc, {}),
      !U && (F != null && F.error ? /* @__PURE__ */ d.jsx("section", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        Yi,
        {
          content: wh,
          programNotFound: !0
        }
      ) }) : /* @__PURE__ */ d.jsxs("section", { className: "container mt-4 mb-0", children: [
        (a == null ? void 0 : a.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "row col-12", children: /* @__PURE__ */ d.jsx(
          vo,
          {
            breadcrumbs: a.breadcrumbs,
            section: n ? n.title.text : S.getMajorDesc()
          }
        ) }),
        /* @__PURE__ */ d.jsxs("div", { className: "row flex-column-reverse flex-sm-row", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-7 col-lg-7", children: [
            /* @__PURE__ */ d.jsxs("section", { className: "intro", children: [
              !S.isValidActiveProgram() && /* @__PURE__ */ d.jsx(Xc, { content: S.getAsuCustomText() }),
              !(a != null && a.hideMarketText) && ((a == null ? void 0 : a.contents) || S.getMarketText()) && /* @__PURE__ */ d.jsx(
                iu,
                {
                  contents: (a == null ? void 0 : a.contents) || [
                    { text: S.getMarketText() }
                  ]
                }
              ),
              !(a != null && a.hideProgramDesc) && /* @__PURE__ */ d.jsx(
                Yi,
                {
                  content: S.getFullDescription(),
                  stemOptText: S.getStemOptText()
                }
              )
            ] }),
            !(s != null && s.hide) && /* @__PURE__ */ d.jsx(
              Hc,
              {
                offeredBy: (s == null ? void 0 : s.offeredBy) || {
                  text: S.getCollegeDesc(),
                  url: S.getCollegeUrl()
                },
                locations: (s == null ? void 0 : s.locations) || Gh(S),
                firstRequirementMathCourse: (s == null ? void 0 : s.firstRequirementMathCourse) || S.getMinMathReq(),
                mathIntensity: (s == null ? void 0 : s.mathIntensity) || S.getMathIntensity(),
                stemOptText: S.hasStemOptText()
              }
            ),
            !(a != null && a.hideRequiredCourses) && !S.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
              cu,
              {
                onlineMajorMapURL: S.getOnlineMajorMapURL(),
                majorMapOnCampusURL: S.getGeneralDegreeMajorMap(),
                subPlnMajorMaps: S.getSubPlnMajorMaps(),
                subPlns: S.getSubPln()
              }
            ),
            !(p != null && p.hide) && /* @__PURE__ */ d.jsx(
              Wc,
              {
                graduateRequirements: S.isGradProgram() ? S.getGraduateRequirements() : null,
                isMinorOrCertificate: S.isMinorOrCertificate(),
                minorRequirements: S.getMinorCourseRequirements(),
                additionalRequirements: S.getAdmissionsRequirementsText(),
                transferRequirements: S.getTransferAdmission(),
                majorMapURL: S.getGeneralDegreeMajorMap()
              }
            ),
            !(h != null && h.hide) && !S.isMinorOrCertificate() && !S.isGradProgram() && /* @__PURE__ */ d.jsx(Yc, { content: S.getChangeMajor() })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-5 col-lg-5", children: [
            (a == null ? void 0 : a.video) && /* @__PURE__ */ d.jsx(
              au,
              {
                type: a.video.type,
                url: a.video.url,
                vttUrl: a.video.vttUrl,
                title: a.video.title
              }
            ),
            !(a != null && a.video) && /* @__PURE__ */ d.jsx(
              nu,
              {
                url: ((Oe = a == null ? void 0 : a.image) == null ? void 0 : Oe.url) || se.introContent.image.url,
                altText: ((Ee = a == null ? void 0 : a.image) == null ? void 0 : Ee.altText) || se.introContent.image.altText
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
          !(C != null && C.hide) && !S.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
            ou,
            {
              cards: C == null ? void 0 : C.cards,
              defaultCards: se.nextSteps.cards
            }
          ),
          !(g != null && g.hide) && /* @__PURE__ */ d.jsx(_m, {}),
          !(f != null && f.hide) && S.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ d.jsx(
            tu,
            {
              acceleratedLinks: Ys(
                de.accelerateData
              ),
              concurrentLinks: Ys(
                de.concurrentData
              )
            }
          ),
          !(k != null && k.hide) && S.getAsuCareerOpportunity() && /* @__PURE__ */ d.jsx(
            Gc,
            {
              image: (k == null ? void 0 : k.image) || se.careerOutlook.image,
              contents: [{ text: S.getAsuCareerOpportunity() }]
            }
          ),
          !(E != null && E.hide) && S.hasCareerData() && /* @__PURE__ */ d.jsx(
            eu,
            {
              tableData: Ih(S.getCareerData())
            }
          ),
          S.getProfessionalLicensureText() && /* @__PURE__ */ d.jsx(
            su,
            {
              content: S.getProfessionalLicensureText()
            }
          ),
          !(_ != null && _.hide) && S.getGlobalExp() && /* @__PURE__ */ d.jsx(
            ru,
            {
              contents: [{ text: S.getGlobalExp() }],
              image: (_ == null ? void 0 : _.image) || se.globalOpportunity.image
            }
          ),
          !(P != null && P.hide) && /* @__PURE__ */ d.jsx(
            uu,
            {
              sectionIntroText: (P == null ? void 0 : P.sectionIntroText) || se.whyChooseAsu.sectionIntroText,
              cards: P == null ? void 0 : P.cards,
              defaultCards: se.whyChooseAsu.cards
            }
          ),
          !($ != null && $.hide) && S.isOnline() && /* @__PURE__ */ d.jsx(
            Vc,
            {
              learnMoreLink: S.getCurriculumUrl(),
              image: ($ == null ? void 0 : $.image) || se.attendOnline.image
            }
          )
        ] }),
        !(O != null && O.hide) && /* @__PURE__ */ d.jsx("div", { className: "row", children: /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-6 col-lg-6 ", children: /* @__PURE__ */ d.jsx(
          lu,
          {
            department: {
              text: S.getDepartmentName(),
              url: ((Se = O == null ? void 0 : O.department) == null ? void 0 : Se.url) || S.getPlanUrl()
            },
            email: {
              text: S.getEmailAddress(),
              url: ((Ke = O == null ? void 0 : O.email) == null ? void 0 : Ke.url) || S.getEmailAddress()
            },
            asuOfficeLoc: S.getAsuOfficeLoc(),
            phone: S.getPhone()
          }
        ) }) })
      ] }))
    ] })
  ] });
};
ko.propTypes = {
  appPathFolder: A.string,
  dataSource: mc,
  anchorMenu: A.shape(go),
  hero: A.shape(Bn.propTypes),
  introContent: A.shape({
    hideMarketText: A.bool,
    hideProgramDesc: A.bool,
    hideRequiredCourses: A.bool,
    breadcrumbs: Ca.arrayOf(Xr),
    contents: Ca.arrayOf(A.object),
    video: mh,
    image: Cr
  }),
  atAGlance: A.shape({
    hide: A.bool,
    offeredBy: Xr,
    locations: Ca.arrayOf(Xr),
    firstRequirementMathCourse: A.string,
    mathIntensity: A.string,
    timeCommitment: A.string
  }),
  applicationRequirements: A.shape({ hide: A.bool }),
  changeMajorRequirements: A.shape({ hide: A.bool }),
  affordingCollege: A.shape({ hide: A.bool }),
  flexibleDegreeOptions: A.shape({ hide: A.bool }),
  careerOutlook: A.shape({
    hide: A.bool,
    image: Cr
  }),
  exampleCareers: A.shape({ hide: A.bool }),
  globalOpportunity: A.shape({
    hide: A.bool,
    image: Cr
  }),
  attendOnline: A.shape({
    hide: A.bool,
    image: Cr
  }),
  programContactInfo: A.shape({
    hide: A.bool,
    department: A.string,
    email: A.string
  }),
  nextSteps: A.shape({
    hide: A.bool,
    cards: A.arrayOf(Wr)
  }),
  whyChooseAsu: A.shape(bc)
};
const du = (e) => /* @__PURE__ */ d.jsx(xo, { detailPageProps: e, children: /* @__PURE__ */ d.jsx(ko, { ...e }) });
du.propTypes = ko.propTypes;
var pu, el = ol;
pu = el.createRoot, el.hydrateRoot;
const fu = (e, t, r) => {
  const n = document.querySelector(r);
  pu(n).render(ht.createElement(e, t));
}, Hm = ({ targetSelector: e, props: t }) => {
  fu(qc, t, e);
}, Vm = ({ targetSelector: e, props: t }) => {
  fu(du, t, e);
};
export {
  du as DetailPage,
  qc as ListingPage,
  Hm as initListingPage,
  Vm as initProgramDetailPage
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
