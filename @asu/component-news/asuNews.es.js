import ft, { forwardRef as bi, Component as $l, createContext as Ul, useRef as Hl, useImperativeHandle as Bl, useId as Wl, useContext as wr, createElement as cs, useState as zr, useEffect as Er } from "react";
import us from "react-dom";
function ds(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fs = { exports: {} }, an = {};
var Ji;
function Vl() {
  if (Ji) return an;
  Ji = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, p, f) {
    var _, x = {}, L = null, $ = null;
    f !== void 0 && (L = "" + f), p.key !== void 0 && (L = "" + p.key), p.ref !== void 0 && ($ = p.ref);
    for (_ in p) n.call(p, _) && !s.hasOwnProperty(_) && (x[_] = p[_]);
    if (m && m.defaultProps) for (_ in p = m.defaultProps, p) x[_] === void 0 && (x[_] = p[_]);
    return { $$typeof: t, type: m, key: L, ref: $, props: x, _owner: a.current };
  }
  return an.Fragment = r, an.jsx = d, an.jsxs = d, an;
}
fs.exports = Vl();
var it = fs.exports;
function vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ps = { exports: {} }, on = {}, Ki;
function ql() {
  if (Ki) return on;
  Ki = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, p, f) {
    var _, x = {}, L = null, $ = null;
    f !== void 0 && (L = "" + f), p.key !== void 0 && (L = "" + p.key), p.ref !== void 0 && ($ = p.ref);
    for (_ in p) n.call(p, _) && !s.hasOwnProperty(_) && (x[_] = p[_]);
    if (m && m.defaultProps) for (_ in p = m.defaultProps, p) x[_] === void 0 && (x[_] = p[_]);
    return { $$typeof: t, type: m, key: L, ref: $, props: x, _owner: a.current };
  }
  return on.Fragment = r, on.jsx = d, on.jsxs = d, on;
}
ps.exports = ql();
var F = ps.exports, hs = { exports: {} }, Pa, Qi;
function Gl() {
  if (Qi) return Pa;
  Qi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pa = e, Pa;
}
var Na, eo;
function Yl() {
  if (eo) return Na;
  eo = 1;
  var e = Gl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Na = function() {
    function n(d, m, p, f, _, x) {
      if (x !== e) {
        var L = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw L.name = "Invariant Violation", L;
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
  }, Na;
}
hs.exports = Yl()();
var Xl = hs.exports;
const l = /* @__PURE__ */ vi(Xl), Zl = () => {
  const [e, t] = zr(null), [r, n] = zr(!1), [a, s] = zr(null), [d, m] = zr("");
  return Er(() => {
    d && (() => {
      s(null), n(!0);
      try {
        fetch(d).then((p) => p.json()).then((p) => {
          t(p), n(!1);
        }).catch((p) => {
          s(p), n(!1);
        });
      } catch (p) {
        s(p);
      }
    })();
  }, [d]), [{ data: e, loading: r, error: a }, m];
}, Jl = (e) => (e || []).join(" "), {
  entries: ms,
  setPrototypeOf: to,
  isFrozen: Kl,
  getPrototypeOf: Ql,
  getOwnPropertyDescriptor: ec
} = Object;
let {
  freeze: _t,
  seal: Ut,
  create: ta
} = Object, {
  apply: Ka,
  construct: Qa
} = typeof Reflect < "u" && Reflect;
_t || (_t = function(e) {
  return e;
});
Ut || (Ut = function(e) {
  return e;
});
Ka || (Ka = function(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  return e.apply(t, n);
});
Qa || (Qa = function(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return new e(...r);
});
const Bn = Tt(Array.prototype.forEach), tc = Tt(Array.prototype.lastIndexOf), ro = Tt(Array.prototype.pop), sn = Tt(Array.prototype.push), rc = Tt(Array.prototype.splice), ra = Tt(String.prototype.toLowerCase), Ia = Tt(String.prototype.toString), Da = Tt(String.prototype.match), ln = Tt(String.prototype.replace), nc = Tt(String.prototype.indexOf), ac = Tt(String.prototype.trim), jt = Tt(Object.prototype.hasOwnProperty), kt = Tt(RegExp.prototype.test), cn = ic(TypeError);
function Tt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Ka(e, t, n);
  };
}
function ic(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Qa(e, r);
  };
}
function Ae(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ra;
  to && to(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (Kl(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function oc(e) {
  for (let t = 0; t < e.length; t++)
    jt(e, t) || (e[t] = null);
  return e;
}
function lr(e) {
  const t = ta(null);
  for (const [r, n] of ms(e))
    jt(e, r) && (Array.isArray(n) ? t[r] = oc(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = lr(n) : t[r] = n);
  return t;
}
function un(e, t) {
  for (; e !== null; ) {
    const n = ec(e, t);
    if (n) {
      if (n.get)
        return Tt(n.get);
      if (typeof n.value == "function")
        return Tt(n.value);
    }
    e = Ql(e);
  }
  function r() {
    return null;
  }
  return r;
}
const no = _t(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), La = _t(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ja = _t(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), sc = _t(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Fa = _t(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), lc = _t(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ao = _t(["#text"]), io = _t(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ma = _t(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), oo = _t(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Wn = _t(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), cc = Ut(/\{\{[\w\W]*|[\w\W]*\}\}/gm), uc = Ut(/<%[\w\W]*|[\w\W]*%>/gm), dc = Ut(/\$\{[\w\W]*/gm), fc = Ut(/^data-[\-\w.\u00B7-\uFFFF]+$/), pc = Ut(/^aria-[\-\w]+$/), gs = Ut(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), hc = Ut(/^(?:\w+script|data):/i), mc = Ut(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ys = Ut(/^html$/i), gc = Ut(/^[a-z][.\w]*(-[.\w]+)+$/i);
var so = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: pc,
  ATTR_WHITESPACE: mc,
  CUSTOM_ELEMENT: gc,
  DATA_ATTR: fc,
  DOCTYPE_NAME: ys,
  ERB_EXPR: uc,
  IS_ALLOWED_URI: gs,
  IS_SCRIPT_OR_DATA: hc,
  MUSTACHE_EXPR: cc,
  TMPLIT_EXPR: dc
});
const dn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, yc = function() {
  return typeof window > "u" ? null : window;
}, bc = function(e, t) {
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
}, lo = function() {
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
function bs() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yc();
  const t = (y) => bs(y);
  if (t.version = "3.3.2", t.removed = [], !e || !e.document || e.document.nodeType !== dn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: d,
    Node: m,
    Element: p,
    NodeFilter: f,
    NamedNodeMap: _ = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: x,
    DOMParser: L,
    trustedTypes: $
  } = e, E = p.prototype, k = un(E, "cloneNode"), D = un(E, "remove"), H = un(E, "nextSibling"), W = un(E, "childNodes"), G = un(E, "parentNode");
  if (typeof d == "function") {
    const y = r.createElement("template");
    y.content && y.content.ownerDocument && (r = y.content.ownerDocument);
  }
  let V, T = "";
  const {
    implementation: ce,
    createNodeIterator: _e,
    createDocumentFragment: Ie,
    getElementsByTagName: je
  } = r, {
    importNode: Ge
  } = n;
  let ue = lo();
  t.isSupported = typeof ms == "function" && typeof G == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: me,
    ERB_EXPR: Re,
    TMPLIT_EXPR: Pe,
    DATA_ATTR: Ee,
    ARIA_ATTR: lt,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Oe,
    CUSTOM_ELEMENT: Be
  } = so;
  let {
    IS_ALLOWED_URI: et
  } = so, oe = null;
  const z = Ae({}, [...no, ...La, ...ja, ...Fa, ...ao]);
  let O = null;
  const M = Ae({}, [...io, ...Ma, ...oo, ...Wn]);
  let j = Object.seal(ta(null, {
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
  })), b = null, ee = null;
  const A = Object.seal(ta(null, {
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
  let ae = !0, Q = !0, te = !1, X = !0, ne = !1, de = !0, J = !1, ge = !1, re = !1, se = !1, Ue = !1, le = !1, ot = !0, We = !1;
  const Se = "user-content-";
  let q = !0, ie = !1, Xe = {}, Ne = null;
  const De = Ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let rr = null;
  const nr = Ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bt = null;
  const Wt = Ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ht = "http://www.w3.org/1998/Math/MathML", Ct = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let pt = nt, Vt = !1, qt = null;
  const mt = Ae({}, [ht, Ct, nt], Ia);
  let St = Ae({}, ["mi", "mo", "mn", "ms", "mtext"]), gt = Ae({}, ["annotation-xml"]);
  const Le = Ae({}, ["title", "style", "font", "a", "script"]);
  let ct = null;
  const ar = ["application/xhtml+xml", "text/html"], Gt = "text/html";
  let fe = null, st = null;
  const Ot = r.createElement("form"), ir = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Rt = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(st && st === y)) {
      if ((!y || typeof y != "object") && (y = {}), y = lr(y), ct = // eslint-disable-next-line unicorn/prefer-includes
      ar.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Gt : y.PARSER_MEDIA_TYPE, fe = ct === "application/xhtml+xml" ? Ia : ra, oe = jt(y, "ALLOWED_TAGS") ? Ae({}, y.ALLOWED_TAGS, fe) : z, O = jt(y, "ALLOWED_ATTR") ? Ae({}, y.ALLOWED_ATTR, fe) : M, qt = jt(y, "ALLOWED_NAMESPACES") ? Ae({}, y.ALLOWED_NAMESPACES, Ia) : mt, Bt = jt(y, "ADD_URI_SAFE_ATTR") ? Ae(lr(Wt), y.ADD_URI_SAFE_ATTR, fe) : Wt, rr = jt(y, "ADD_DATA_URI_TAGS") ? Ae(lr(nr), y.ADD_DATA_URI_TAGS, fe) : nr, Ne = jt(y, "FORBID_CONTENTS") ? Ae({}, y.FORBID_CONTENTS, fe) : De, b = jt(y, "FORBID_TAGS") ? Ae({}, y.FORBID_TAGS, fe) : lr({}), ee = jt(y, "FORBID_ATTR") ? Ae({}, y.FORBID_ATTR, fe) : lr({}), Xe = jt(y, "USE_PROFILES") ? y.USE_PROFILES : !1, ae = y.ALLOW_ARIA_ATTR !== !1, Q = y.ALLOW_DATA_ATTR !== !1, te = y.ALLOW_UNKNOWN_PROTOCOLS || !1, X = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = y.SAFE_FOR_TEMPLATES || !1, de = y.SAFE_FOR_XML !== !1, J = y.WHOLE_DOCUMENT || !1, se = y.RETURN_DOM || !1, Ue = y.RETURN_DOM_FRAGMENT || !1, le = y.RETURN_TRUSTED_TYPE || !1, re = y.FORCE_BODY || !1, ot = y.SANITIZE_DOM !== !1, We = y.SANITIZE_NAMED_PROPS || !1, q = y.KEEP_CONTENT !== !1, ie = y.IN_PLACE || !1, et = y.ALLOWED_URI_REGEXP || gs, pt = y.NAMESPACE || nt, St = y.MATHML_TEXT_INTEGRATION_POINTS || St, gt = y.HTML_INTEGRATION_POINTS || gt, j = y.CUSTOM_ELEMENT_HANDLING || {}, y.CUSTOM_ELEMENT_HANDLING && ir(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (j.tagNameCheck = y.CUSTOM_ELEMENT_HANDLING.tagNameCheck), y.CUSTOM_ELEMENT_HANDLING && ir(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (j.attributeNameCheck = y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), Ue && (se = !0), Xe && (oe = Ae({}, ao), O = ta(null), Xe.html === !0 && (Ae(oe, no), Ae(O, io)), Xe.svg === !0 && (Ae(oe, La), Ae(O, Ma), Ae(O, Wn)), Xe.svgFilters === !0 && (Ae(oe, ja), Ae(O, Ma), Ae(O, Wn)), Xe.mathMl === !0 && (Ae(oe, Fa), Ae(O, oo), Ae(O, Wn))), jt(y, "ADD_TAGS") || (A.tagCheck = null), jt(y, "ADD_ATTR") || (A.attributeCheck = null), y.ADD_TAGS && (typeof y.ADD_TAGS == "function" ? A.tagCheck = y.ADD_TAGS : (oe === z && (oe = lr(oe)), Ae(oe, y.ADD_TAGS, fe))), y.ADD_ATTR && (typeof y.ADD_ATTR == "function" ? A.attributeCheck = y.ADD_ATTR : (O === M && (O = lr(O)), Ae(O, y.ADD_ATTR, fe))), y.ADD_URI_SAFE_ATTR && Ae(Bt, y.ADD_URI_SAFE_ATTR, fe), y.FORBID_CONTENTS && (Ne === De && (Ne = lr(Ne)), Ae(Ne, y.FORBID_CONTENTS, fe)), y.ADD_FORBID_CONTENTS && (Ne === De && (Ne = lr(Ne)), Ae(Ne, y.ADD_FORBID_CONTENTS, fe)), q && (oe["#text"] = !0), J && Ae(oe, ["html", "head", "body"]), oe.table && (Ae(oe, ["tbody"]), delete b.tbody), y.TRUSTED_TYPES_POLICY) {
        if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw cn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw cn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        V = y.TRUSTED_TYPES_POLICY, T = V.createHTML("");
      } else
        V === void 0 && (V = bc($, a)), V !== null && typeof T == "string" && (T = V.createHTML(""));
      _t && _t(y), st = y;
    }
  }, Yt = Ae({}, [...La, ...ja, ...sc]), or = Ae({}, [...Fa, ...lc]), Sr = function(y) {
    let v = G(y);
    (!v || !v.tagName) && (v = {
      namespaceURI: pt,
      tagName: "template"
    });
    const C = ra(y.tagName), Y = ra(v.tagName);
    return qt[y.namespaceURI] ? y.namespaceURI === Ct ? v.namespaceURI === nt ? C === "svg" : v.namespaceURI === ht ? C === "svg" && (Y === "annotation-xml" || St[Y]) : !!Yt[C] : y.namespaceURI === ht ? v.namespaceURI === nt ? C === "math" : v.namespaceURI === Ct ? C === "math" && gt[Y] : !!or[C] : y.namespaceURI === nt ? v.namespaceURI === Ct && !gt[Y] || v.namespaceURI === ht && !St[Y] ? !1 : !or[C] && (Le[C] || !Yt[C]) : !!(ct === "application/xhtml+xml" && qt[y.namespaceURI]) : !1;
  }, at = function(y) {
    sn(t.removed, {
      element: y
    });
    try {
      G(y).removeChild(y);
    } catch {
      D(y);
    }
  }, ut = function(y, v) {
    try {
      sn(t.removed, {
        attribute: v.getAttributeNode(y),
        from: v
      });
    } catch {
      sn(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(y), y === "is")
      if (se || Ue)
        try {
          at(v);
        } catch {
        }
      else
        try {
          v.setAttribute(y, "");
        } catch {
        }
  }, dr = function(y) {
    let v = null, C = null;
    if (re)
      y = "<remove></remove>" + y;
    else {
      const ve = Da(y, /^[\r\n\t ]+/);
      C = ve && ve[0];
    }
    ct === "application/xhtml+xml" && pt === nt && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const Y = V ? V.createHTML(y) : y;
    if (pt === nt)
      try {
        v = new L().parseFromString(Y, ct);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = ce.createDocument(pt, "template", null);
      try {
        v.documentElement.innerHTML = Vt ? T : Y;
      } catch {
      }
    }
    const ye = v.body || v.documentElement;
    return y && C && ye.insertBefore(r.createTextNode(C), ye.childNodes[0] || null), pt === nt ? je.call(v, J ? "html" : "body")[0] : J ? v.documentElement : ye;
  }, Mt = function(y) {
    return _e.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, zt = function(y) {
    return y instanceof x && (typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || !(y.attributes instanceof _) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function");
  }, $t = function(y) {
    return typeof m == "function" && y instanceof m;
  };
  function Ke(y, v, C) {
    Bn(y, (Y) => {
      Y.call(t, v, C, st);
    });
  }
  const fr = function(y) {
    let v = null;
    if (Ke(ue.beforeSanitizeElements, y, null), zt(y))
      return at(y), !0;
    const C = fe(y.nodeName);
    if (Ke(ue.uponSanitizeElement, y, {
      tagName: C,
      allowedTags: oe
    }), de && y.hasChildNodes() && !$t(y.firstElementChild) && kt(/<[/\w!]/g, y.innerHTML) && kt(/<[/\w!]/g, y.textContent) || y.nodeType === dn.progressingInstruction || de && y.nodeType === dn.comment && kt(/<[/\w]/g, y.data))
      return at(y), !0;
    if (!(A.tagCheck instanceof Function && A.tagCheck(C)) && (!oe[C] || b[C])) {
      if (!b[C] && pr(C) && (j.tagNameCheck instanceof RegExp && kt(j.tagNameCheck, C) || j.tagNameCheck instanceof Function && j.tagNameCheck(C)))
        return !1;
      if (q && !Ne[C]) {
        const Y = G(y) || y.parentNode, ye = W(y) || y.childNodes;
        if (ye && Y) {
          const ve = ye.length;
          for (let we = ve - 1; we >= 0; --we) {
            const Me = k(ye[we], !0);
            Me.__removalCount = (y.__removalCount || 0) + 1, Y.insertBefore(Me, H(y));
          }
        }
      }
      return at(y), !0;
    }
    return y instanceof p && !Sr(y) || (C === "noscript" || C === "noembed" || C === "noframes") && kt(/<\/no(script|embed|frames)/i, y.innerHTML) ? (at(y), !0) : (ne && y.nodeType === dn.text && (v = y.textContent, Bn([me, Re, Pe], (Y) => {
      v = ln(v, Y, " ");
    }), y.textContent !== v && (sn(t.removed, {
      element: y.cloneNode()
    }), y.textContent = v)), Ke(ue.afterSanitizeElements, y, null), !1);
  }, Pt = function(y, v, C) {
    if (ee[v] || ot && (v === "id" || v === "name") && (C in r || C in Ot))
      return !1;
    if (!(Q && !ee[v] && kt(Ee, v)) && !(ae && kt(lt, v)) && !(A.attributeCheck instanceof Function && A.attributeCheck(v, y))) {
      if (!O[v] || ee[v]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(pr(y) && (j.tagNameCheck instanceof RegExp && kt(j.tagNameCheck, y) || j.tagNameCheck instanceof Function && j.tagNameCheck(y)) && (j.attributeNameCheck instanceof RegExp && kt(j.attributeNameCheck, v) || j.attributeNameCheck instanceof Function && j.attributeNameCheck(v, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && j.allowCustomizedBuiltInElements && (j.tagNameCheck instanceof RegExp && kt(j.tagNameCheck, C) || j.tagNameCheck instanceof Function && j.tagNameCheck(C)))
        ) return !1;
      } else if (!Bt[v] && !kt(et, ln(C, Oe, "")) && !((v === "src" || v === "xlink:href" || v === "href") && y !== "script" && nc(C, "data:") === 0 && rr[y]) && !(te && !kt(Fe, ln(C, Oe, ""))) && C)
        return !1;
    }
    return !0;
  }, pr = function(y) {
    return y !== "annotation-xml" && Da(y, Be);
  }, Xt = function(y) {
    Ke(ue.beforeSanitizeAttributes, y, null);
    const {
      attributes: v
    } = y;
    if (!v || zt(y))
      return;
    const C = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: O,
      forceKeepAttr: void 0
    };
    let Y = v.length;
    for (; Y--; ) {
      const ye = v[Y], {
        name: ve,
        namespaceURI: we,
        value: Me
      } = ye, Ye = fe(ve), yt = Me;
      let Ze = ve === "value" ? yt : ac(yt);
      if (C.attrName = Ye, C.attrValue = Ze, C.keepAttr = !0, C.forceKeepAttr = void 0, Ke(ue.uponSanitizeAttribute, y, C), Ze = C.attrValue, We && (Ye === "id" || Ye === "name") && (ut(ve, y), Ze = Se + Ze), de && kt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ze)) {
        ut(ve, y);
        continue;
      }
      if (Ye === "attributename" && Da(Ze, "href")) {
        ut(ve, y);
        continue;
      }
      if (C.forceKeepAttr)
        continue;
      if (!C.keepAttr) {
        ut(ve, y);
        continue;
      }
      if (!X && kt(/\/>/i, Ze)) {
        ut(ve, y);
        continue;
      }
      ne && Bn([me, Re, Pe], (Nt) => {
        Ze = ln(Ze, Nt, " ");
      });
      const He = fe(y.nodeName);
      if (!Pt(He, Ye, Ze)) {
        ut(ve, y);
        continue;
      }
      if (V && typeof $ == "object" && typeof $.getAttributeType == "function" && !we)
        switch ($.getAttributeType(He, Ye)) {
          case "TrustedHTML": {
            Ze = V.createHTML(Ze);
            break;
          }
          case "TrustedScriptURL": {
            Ze = V.createScriptURL(Ze);
            break;
          }
        }
      if (Ze !== yt)
        try {
          we ? y.setAttributeNS(we, ve, Ze) : y.setAttribute(ve, Ze), zt(y) ? at(y) : ro(t.removed);
        } catch {
          ut(ve, y);
        }
    }
    Ke(ue.afterSanitizeAttributes, y, null);
  }, sr = function y(v) {
    let C = null;
    const Y = Mt(v);
    for (Ke(ue.beforeSanitizeShadowDOM, v, null); C = Y.nextNode(); )
      Ke(ue.uponSanitizeShadowNode, C, null), fr(C), Xt(C), C.content instanceof s && y(C.content);
    Ke(ue.afterSanitizeShadowDOM, v, null);
  };
  return t.sanitize = function(y) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, Y = null, ye = null, ve = null;
    if (Vt = !y, Vt && (y = "<!-->"), typeof y != "string" && !$t(y))
      if (typeof y.toString == "function") {
        if (y = y.toString(), typeof y != "string")
          throw cn("dirty is not a string, aborting");
      } else
        throw cn("toString is not a function");
    if (!t.isSupported)
      return y;
    if (ge || Rt(v), t.removed = [], typeof y == "string" && (ie = !1), ie) {
      if (y.nodeName) {
        const Ye = fe(y.nodeName);
        if (!oe[Ye] || b[Ye])
          throw cn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (y instanceof m)
      C = dr("<!---->"), Y = C.ownerDocument.importNode(y, !0), Y.nodeType === dn.element && Y.nodeName === "BODY" || Y.nodeName === "HTML" ? C = Y : C.appendChild(Y);
    else {
      if (!se && !ne && !J && // eslint-disable-next-line unicorn/prefer-includes
      y.indexOf("<") === -1)
        return V && le ? V.createHTML(y) : y;
      if (C = dr(y), !C)
        return se ? null : le ? T : "";
    }
    C && re && at(C.firstChild);
    const we = Mt(ie ? y : C);
    for (; ye = we.nextNode(); )
      fr(ye), Xt(ye), ye.content instanceof s && sr(ye.content);
    if (ie)
      return y;
    if (se) {
      if (Ue)
        for (ve = Ie.call(C.ownerDocument); C.firstChild; )
          ve.appendChild(C.firstChild);
      else
        ve = C;
      return (O.shadowroot || O.shadowrootmode) && (ve = Ge.call(n, ve, !0)), ve;
    }
    let Me = J ? C.outerHTML : C.innerHTML;
    return J && oe["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && kt(ys, C.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + Me), ne && Bn([me, Re, Pe], (Ye) => {
      Me = ln(Me, Ye, " ");
    }), V && le ? V.createHTML(Me) : Me;
  }, t.setConfig = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Rt(y), ge = !0;
  }, t.clearConfig = function() {
    st = null, ge = !1;
  }, t.isValidAttribute = function(y, v, C) {
    st || Rt({});
    const Y = fe(y), ye = fe(v);
    return Pt(Y, ye, C);
  }, t.addHook = function(y, v) {
    typeof v == "function" && sn(ue[y], v);
  }, t.removeHook = function(y, v) {
    if (v !== void 0) {
      const C = tc(ue[y], v);
      return C === -1 ? void 0 : rc(ue[y], C, 1)[0];
    }
    return ro(ue[y]);
  }, t.removeHooks = function(y) {
    ue[y] = [];
  }, t.removeAllHooks = function() {
    ue = lo();
  }, t;
}
var co = bs();
let Vn = null;
function vc() {
  return Vn || (typeof window < "u" ? Vn = co(window) : Vn = co), Vn;
}
const Lr = (e) => ({ __html: vc().sanitize(e) });
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
const wc = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: s = "",
  region: d = "",
  component: m = ""
}) => {
  const { dataLayer: p } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: d.toLowerCase(),
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: m.toLowerCase()
  };
  p && p.push(f);
}, _n = ({ children: e }) => /* @__PURE__ */ F.jsx(F.Fragment, { children: e });
_n.propTypes = {
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node,
    l.string
  ])
};
var vs = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", d = 0; d < arguments.length; d++) {
        var m = arguments[d];
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
      var d = "";
      for (var m in s)
        t.call(s, m) && s[m] && (d = a(d, m));
      return d;
    }
    function a(s, d) {
      return d ? s ? s + " " + d : s + d : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(vs);
var Sc = vs.exports;
const er = /* @__PURE__ */ vi(Sc);
({
  ..._n.propTypes
});
const ws = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ F.jsx("div", { className: t, ...r, children: /* @__PURE__ */ F.jsx("div", { className: "row", children: e }) });
ws.propTypes = {
  children: _n.propTypes.children
};
({
  ...ws.propTypes
});
_n.propTypes.children, l.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
_n.propTypes.children;
const kc = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), za = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), Ss = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.arrayOf(l.string),
    header: l.string,
    body: l.string
  })
}), wi = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var Dr = {}, uo;
function xc() {
  if (uo) return Dr;
  uo = 1;
  var e = ft;
  function t(i) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, g = 1; g < arguments.length; g++) u += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + i + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, s = {};
  function d(i) {
    return r.call(s, i) ? !0 : r.call(a, i) ? !1 : n.test(i) ? s[i] = !0 : (a[i] = !0, !1);
  }
  function m(i, u, g, S, I, R, U) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = S, this.attributeNamespace = I, this.mustUseProperty = g, this.propertyName = i, this.type = u, this.sanitizeURL = R, this.removeEmptyString = U;
  }
  var p = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    p[i] = new m(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var u = i[0];
    p[u] = new m(u, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    p[i] = new m(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    p[i] = new m(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    p[i] = new m(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    p[i] = new m(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    p[i] = new m(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    p[i] = new m(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    p[i] = new m(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var f = /[\-:]([a-z])/g;
  function _(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var u = i.replace(
      f,
      _
    );
    p[u] = new m(u, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var u = i.replace(f, _);
    p[u] = new m(u, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var u = i.replace(f, _);
    p[u] = new m(u, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    p[i] = new m(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), p.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    p[i] = new m(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var x = {
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
  }, L = ["Webkit", "ms", "Moz", "O"];
  Object.keys(x).forEach(function(i) {
    L.forEach(function(u) {
      u = u + i.charAt(0).toUpperCase() + i.substring(1), x[u] = x[i];
    });
  });
  var $ = /["'&<>]/;
  function E(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var u = $.exec(i);
    if (u) {
      var g = "", S, I = 0;
      for (S = u.index; S < i.length; S++) {
        switch (i.charCodeAt(S)) {
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
        I !== S && (g += i.substring(I, S)), I = S + 1, g += u;
      }
      i = I !== S ? g + i.substring(I, S) : g;
    }
    return i;
  }
  var k = /([A-Z])/g, D = /^ms-/, H = Array.isArray;
  function W(i, u) {
    return { insertionMode: i, selectedValue: u };
  }
  function G(i, u, g) {
    switch (u) {
      case "select":
        return W(1, g.value != null ? g.value : g.defaultValue);
      case "svg":
        return W(2, null);
      case "math":
        return W(3, null);
      case "foreignObject":
        return W(1, null);
      case "table":
        return W(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return W(5, null);
      case "colgroup":
        return W(7, null);
      case "tr":
        return W(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? W(1, null) : i;
  }
  var V = /* @__PURE__ */ new Map();
  function T(i, u, g) {
    if (typeof g != "object") throw Error(t(62));
    u = !0;
    for (var S in g) if (r.call(g, S)) {
      var I = g[S];
      if (I != null && typeof I != "boolean" && I !== "") {
        if (S.indexOf("--") === 0) {
          var R = E(S);
          I = E(("" + I).trim());
        } else {
          R = S;
          var U = V.get(R);
          U !== void 0 || (U = E(R.replace(k, "-$1").toLowerCase().replace(D, "-ms-")), V.set(R, U)), R = U, I = typeof I == "number" ? I === 0 || r.call(x, S) ? "" + I : I + "px" : E(("" + I).trim());
        }
        u ? (u = !1, i.push(' style="', R, ":", I)) : i.push(";", R, ":", I);
      }
    }
    u || i.push('"');
  }
  function ce(i, u, g, S) {
    switch (g) {
      case "style":
        T(i, u, S);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (u = p.hasOwnProperty(g) ? p[g] : null, u !== null) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (g = u.attributeName, u.type) {
          case 3:
            S && i.push(" ", g, '=""');
            break;
          case 4:
            S === !0 ? i.push(" ", g, '=""') : S !== !1 && i.push(" ", g, '="', E(S), '"');
            break;
          case 5:
            isNaN(S) || i.push(" ", g, '="', E(S), '"');
            break;
          case 6:
            !isNaN(S) && 1 <= S && i.push(" ", g, '="', E(S), '"');
            break;
          default:
            u.sanitizeURL && (S = "" + S), i.push(" ", g, '="', E(S), '"');
        }
      } else if (d(g)) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = g.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        i.push(" ", g, '="', E(S), '"');
      }
    }
  }
  function _e(i, u, g) {
    if (u != null) {
      if (g != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && i.push("" + u);
    }
  }
  function Ie(i) {
    var u = "";
    return e.Children.forEach(i, function(g) {
      g != null && (u += g);
    }), u;
  }
  function je(i, u, g, S) {
    i.push(me(g));
    var I = g = null, R;
    for (R in u) if (r.call(u, R)) {
      var U = u[R];
      if (U != null) switch (R) {
        case "children":
          g = U;
          break;
        case "dangerouslySetInnerHTML":
          I = U;
          break;
        default:
          ce(i, S, R, U);
      }
    }
    return i.push(">"), _e(i, I, g), typeof g == "string" ? (i.push(E(g)), null) : g;
  }
  var Ge = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ue = /* @__PURE__ */ new Map();
  function me(i) {
    var u = ue.get(i);
    if (u === void 0) {
      if (!Ge.test(i)) throw Error(t(65, i));
      u = "<" + i, ue.set(i, u);
    }
    return u;
  }
  function Re(i, u, g, S, I) {
    switch (u) {
      case "select":
        i.push(me("select"));
        var R = null, U = null;
        for (ke in g) if (r.call(g, ke)) {
          var K = g[ke];
          if (K != null) switch (ke) {
            case "children":
              R = K;
              break;
            case "dangerouslySetInnerHTML":
              U = K;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ce(i, S, ke, K);
          }
        }
        return i.push(">"), _e(i, U, R), R;
      case "option":
        U = I.selectedValue, i.push(me("option"));
        var pe = K = null, be = null, ke = null;
        for (R in g) if (r.call(g, R)) {
          var tt = g[R];
          if (tt != null) switch (R) {
            case "children":
              K = tt;
              break;
            case "selected":
              be = tt;
              break;
            case "dangerouslySetInnerHTML":
              ke = tt;
              break;
            case "value":
              pe = tt;
            default:
              ce(i, S, R, tt);
          }
        }
        if (U != null) if (g = pe !== null ? "" + pe : Ie(K), H(U)) {
          for (S = 0; S < U.length; S++)
            if ("" + U[S] === g) {
              i.push(' selected=""');
              break;
            }
        } else "" + U === g && i.push(' selected=""');
        else be && i.push(' selected=""');
        return i.push(">"), _e(i, ke, K), K;
      case "textarea":
        i.push(me("textarea")), ke = U = R = null;
        for (K in g) if (r.call(g, K) && (pe = g[K], pe != null)) switch (K) {
          case "children":
            ke = pe;
            break;
          case "value":
            R = pe;
            break;
          case "defaultValue":
            U = pe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ce(
              i,
              S,
              K,
              pe
            );
        }
        if (R === null && U !== null && (R = U), i.push(">"), ke != null) {
          if (R != null) throw Error(t(92));
          if (H(ke) && 1 < ke.length) throw Error(t(93));
          R = "" + ke;
        }
        return typeof R == "string" && R[0] === `
` && i.push(`
`), R !== null && i.push(E("" + R)), null;
      case "input":
        i.push(me("input")), pe = ke = K = R = null;
        for (U in g) if (r.call(g, U) && (be = g[U], be != null)) switch (U) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            pe = be;
            break;
          case "defaultValue":
            K = be;
            break;
          case "checked":
            ke = be;
            break;
          case "value":
            R = be;
            break;
          default:
            ce(i, S, U, be);
        }
        return ke !== null ? ce(i, S, "checked", ke) : pe !== null && ce(i, S, "checked", pe), R !== null ? ce(i, S, "value", R) : K !== null && ce(i, S, "value", K), i.push("/>"), null;
      case "menuitem":
        i.push(me("menuitem"));
        for (var Zt in g) if (r.call(g, Zt) && (R = g[Zt], R != null)) switch (Zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ce(i, S, Zt, R);
        }
        return i.push(">"), null;
      case "title":
        i.push(me("title")), R = null;
        for (tt in g) if (r.call(g, tt) && (U = g[tt], U != null)) switch (tt) {
          case "children":
            R = U;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ce(i, S, tt, U);
        }
        return i.push(">"), R;
      case "listing":
      case "pre":
        i.push(me(u)), U = R = null;
        for (pe in g) if (r.call(g, pe) && (K = g[pe], K != null)) switch (pe) {
          case "children":
            R = K;
            break;
          case "dangerouslySetInnerHTML":
            U = K;
            break;
          default:
            ce(i, S, pe, K);
        }
        if (i.push(">"), U != null) {
          if (R != null) throw Error(t(60));
          if (typeof U != "object" || !("__html" in U)) throw Error(t(61));
          g = U.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? i.push(`
`, g) : i.push("" + g));
        }
        return typeof R == "string" && R[0] === `
` && i.push(`
`), R;
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
        i.push(me(u));
        for (var Jt in g) if (r.call(g, Jt) && (R = g[Jt], R != null)) switch (Jt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ce(i, S, Jt, R);
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
        return je(
          i,
          g,
          u,
          S
        );
      case "html":
        return I.insertionMode === 0 && i.push("<!DOCTYPE html>"), je(i, g, u, S);
      default:
        if (u.indexOf("-") === -1 && typeof g.is != "string") return je(i, g, u, S);
        i.push(me(u)), U = R = null;
        for (be in g) if (r.call(g, be) && (K = g[be], K != null)) switch (be) {
          case "children":
            R = K;
            break;
          case "dangerouslySetInnerHTML":
            U = K;
            break;
          case "style":
            T(i, S, K);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(be) && typeof K != "function" && typeof K != "symbol" && i.push(" ", be, '="', E(K), '"');
        }
        return i.push(">"), _e(i, U, R), R;
    }
  }
  function Pe(i, u, g) {
    if (i.push('<!--$?--><template id="'), g === null) throw Error(t(395));
    return i.push(g), i.push('"></template>');
  }
  function Ee(i, u, g, S) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return i.push('<div hidden id="'), i.push(u.segmentPrefix), u = S.toString(16), i.push(u), i.push('">');
      case 2:
        return i.push('<svg aria-hidden="true" style="display:none" id="'), i.push(u.segmentPrefix), u = S.toString(16), i.push(u), i.push('">');
      case 3:
        return i.push('<math aria-hidden="true" style="display:none" id="'), i.push(u.segmentPrefix), u = S.toString(16), i.push(u), i.push('">');
      case 4:
        return i.push('<table hidden id="'), i.push(u.segmentPrefix), u = S.toString(16), i.push(u), i.push('">');
      case 5:
        return i.push('<table hidden><tbody id="'), i.push(u.segmentPrefix), u = S.toString(16), i.push(u), i.push('">');
      case 6:
        return i.push('<table hidden><tr id="'), i.push(u.segmentPrefix), u = S.toString(16), i.push(u), i.push('">');
      case 7:
        return i.push('<table hidden><colgroup id="'), i.push(u.segmentPrefix), u = S.toString(16), i.push(u), i.push('">');
      default:
        throw Error(t(397));
    }
  }
  function lt(i, u) {
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
  var Fe = /[<\u2028\u2029]/g;
  function Oe(i) {
    return JSON.stringify(i).replace(Fe, function(u) {
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
  function Be(i, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: i };
  }
  function et(i, u, g, S) {
    return g.generateStaticMarkup ? (i.push(E(u)), !1) : (u === "" ? i = S : (S && i.push("<!-- -->"), i.push(E(u)), i = !0), i);
  }
  var oe = Object.assign, z = Symbol.for("react.element"), O = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), A = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), de = Symbol.for("react.scope"), J = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), re = Symbol.for("react.default_value"), se = Symbol.iterator;
  function Ue(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case M:
        return "Fragment";
      case O:
        return "Portal";
      case b:
        return "Profiler";
      case j:
        return "StrictMode";
      case Q:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case A:
        return (i.displayName || "Context") + ".Consumer";
      case ee:
        return (i._context.displayName || "Context") + ".Provider";
      case ae:
        var u = i.render;
        return i = i.displayName, i || (i = u.displayName || u.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case X:
        return u = i.displayName || null, u !== null ? u : Ue(i.type) || "Memo";
      case ne:
        u = i._payload, i = i._init;
        try {
          return Ue(i(u));
        } catch {
        }
    }
    return null;
  }
  var le = {};
  function ot(i, u) {
    if (i = i.contextTypes, !i) return le;
    var g = {}, S;
    for (S in i) g[S] = u[S];
    return g;
  }
  var We = null;
  function Se(i, u) {
    if (i !== u) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var g = u.parent;
      if (i === null) {
        if (g !== null) throw Error(t(401));
      } else {
        if (g === null) throw Error(t(401));
        Se(i, g);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function q(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && q(i);
  }
  function ie(i) {
    var u = i.parent;
    u !== null && ie(u), i.context._currentValue2 = i.value;
  }
  function Xe(i, u) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === u.depth ? Se(i, u) : Xe(i, u);
  }
  function Ne(i, u) {
    var g = u.parent;
    if (g === null) throw Error(t(402));
    i.depth === g.depth ? Se(i, g) : Ne(i, g), u.context._currentValue2 = u.value;
  }
  function De(i) {
    var u = We;
    u !== i && (u === null ? ie(i) : i === null ? q(u) : u.depth === i.depth ? Se(u, i) : u.depth > i.depth ? Xe(u, i) : Ne(u, i), We = i);
  }
  var rr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, u) {
    i = i._reactInternals, i.queue !== null && i.queue.push(u);
  }, enqueueReplaceState: function(i, u) {
    i = i._reactInternals, i.replace = !0, i.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function nr(i, u, g, S) {
    var I = i.state !== void 0 ? i.state : null;
    i.updater = rr, i.props = g, i.state = I;
    var R = { queue: [], replace: !1 };
    i._reactInternals = R;
    var U = u.contextType;
    if (i.context = typeof U == "object" && U !== null ? U._currentValue2 : S, U = u.getDerivedStateFromProps, typeof U == "function" && (U = U(g, I), I = U == null ? I : oe({}, I, U), i.state = I), typeof u.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && rr.enqueueReplaceState(i, i.state, null), R.queue !== null && 0 < R.queue.length) if (u = R.queue, U = R.replace, R.queue = null, R.replace = !1, U && u.length === 1) i.state = u[0];
    else {
      for (R = U ? u[0] : i.state, I = !0, U = U ? 1 : 0; U < u.length; U++) {
        var K = u[U];
        K = typeof K == "function" ? K.call(i, R, g, S) : K, K != null && (I ? (I = !1, R = oe({}, R, K)) : oe(R, K));
      }
      i.state = R;
    }
    else R.queue = null;
  }
  var Bt = { id: 1, overflow: "" };
  function Wt(i, u, g) {
    var S = i.id;
    i = i.overflow;
    var I = 32 - ht(S) - 1;
    S &= ~(1 << I), g += 1;
    var R = 32 - ht(u) + I;
    if (30 < R) {
      var U = I - I % 5;
      return R = (S & (1 << U) - 1).toString(32), S >>= U, I -= U, { id: 1 << 32 - ht(u) + I | g << I | S, overflow: R + i };
    }
    return { id: 1 << R | g << I | S, overflow: i };
  }
  var ht = Math.clz32 ? Math.clz32 : pt, Ct = Math.log, nt = Math.LN2;
  function pt(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Ct(i) / nt | 0) | 0;
  }
  function Vt(i, u) {
    return i === u && (i !== 0 || 1 / i === 1 / u) || i !== i && u !== u;
  }
  var qt = typeof Object.is == "function" ? Object.is : Vt, mt = null, St = null, gt = null, Le = null, ct = !1, ar = !1, Gt = 0, fe = null, st = 0;
  function Ot() {
    if (mt === null) throw Error(t(321));
    return mt;
  }
  function ir() {
    if (0 < st) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Rt() {
    return Le === null ? gt === null ? (ct = !1, gt = Le = ir()) : (ct = !0, Le = gt) : Le.next === null ? (ct = !1, Le = Le.next = ir()) : (ct = !0, Le = Le.next), Le;
  }
  function Yt() {
    St = mt = null, ar = !1, gt = null, st = 0, Le = fe = null;
  }
  function or(i, u) {
    return typeof u == "function" ? u(i) : u;
  }
  function Sr(i, u, g) {
    if (mt = Ot(), Le = Rt(), ct) {
      var S = Le.queue;
      if (u = S.dispatch, fe !== null && (g = fe.get(S), g !== void 0)) {
        fe.delete(S), S = Le.memoizedState;
        do
          S = i(S, g.action), g = g.next;
        while (g !== null);
        return Le.memoizedState = S, [S, u];
      }
      return [Le.memoizedState, u];
    }
    return i = i === or ? typeof u == "function" ? u() : u : g !== void 0 ? g(u) : u, Le.memoizedState = i, i = Le.queue = { last: null, dispatch: null }, i = i.dispatch = ut.bind(null, mt, i), [Le.memoizedState, i];
  }
  function at(i, u) {
    if (mt = Ot(), Le = Rt(), u = u === void 0 ? null : u, Le !== null) {
      var g = Le.memoizedState;
      if (g !== null && u !== null) {
        var S = g[1];
        e: if (S === null) S = !1;
        else {
          for (var I = 0; I < S.length && I < u.length; I++) if (!qt(u[I], S[I])) {
            S = !1;
            break e;
          }
          S = !0;
        }
        if (S) return g[0];
      }
    }
    return i = i(), Le.memoizedState = [i, u], i;
  }
  function ut(i, u, g) {
    if (25 <= st) throw Error(t(301));
    if (i === mt) if (ar = !0, i = { action: g, next: null }, fe === null && (fe = /* @__PURE__ */ new Map()), g = fe.get(u), g === void 0) fe.set(u, i);
    else {
      for (u = g; u.next !== null; ) u = u.next;
      u.next = i;
    }
  }
  function dr() {
    throw Error(t(394));
  }
  function Mt() {
  }
  var zt = { readContext: function(i) {
    return i._currentValue2;
  }, useContext: function(i) {
    return Ot(), i._currentValue2;
  }, useMemo: at, useReducer: Sr, useRef: function(i) {
    mt = Ot(), Le = Rt();
    var u = Le.memoizedState;
    return u === null ? (i = { current: i }, Le.memoizedState = i) : u;
  }, useState: function(i) {
    return Sr(or, i);
  }, useInsertionEffect: Mt, useLayoutEffect: function() {
  }, useCallback: function(i, u) {
    return at(function() {
      return i;
    }, u);
  }, useImperativeHandle: Mt, useEffect: Mt, useDebugValue: Mt, useDeferredValue: function(i) {
    return Ot(), i;
  }, useTransition: function() {
    return Ot(), [
      !1,
      dr
    ];
  }, useId: function() {
    var i = St.treeContext, u = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - ht(i) - 1)).toString(32) + u;
    var g = $t;
    if (g === null) throw Error(t(404));
    return u = Gt++, i = ":" + g.idPrefix + "R" + i, 0 < u && (i += "H" + u.toString(32)), i + ":";
  }, useMutableSource: function(i, u) {
    return Ot(), u(i._source);
  }, useSyncExternalStore: function(i, u, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, $t = null, Ke = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function fr(i) {
    return console.error(i), null;
  }
  function Pt() {
  }
  function pr(i, u, g, S, I, R, U, K, pe) {
    var be = [], ke = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: S, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ke, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: I === void 0 ? fr : I, onAllReady: Pt, onShellReady: U === void 0 ? Pt : U, onShellError: Pt, onFatalError: Pt }, g = sr(u, 0, null, g, !1, !1), g.parentFlushed = !0, i = Xt(u, i, null, g, ke, le, null, Bt), be.push(i), u;
  }
  function Xt(i, u, g, S, I, R, U, K) {
    i.allPendingTasks++, g === null ? i.pendingRootTasks++ : g.pendingTasks++;
    var pe = { node: u, ping: function() {
      var be = i.pingedTasks;
      be.push(pe), be.length === 1 && Cr(i);
    }, blockedBoundary: g, blockedSegment: S, abortSet: I, legacyContext: R, context: U, treeContext: K };
    return I.add(pe), pe;
  }
  function sr(i, u, g, S, I, R) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: S, boundary: g, lastPushedText: I, textEmbedded: R };
  }
  function y(i, u) {
    if (i = i.onError(u), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function v(i, u) {
    var g = i.onShellError;
    g(u), g = i.onFatalError, g(u), i.destination !== null ? (i.status = 2, i.destination.destroy(u)) : (i.status = 1, i.fatalError = u);
  }
  function C(i, u, g, S, I) {
    for (mt = {}, St = u, Gt = 0, i = g(S, I); ar; ) ar = !1, Gt = 0, st += 1, Le = null, i = g(S, I);
    return Yt(), i;
  }
  function Y(i, u, g, S) {
    var I = g.render(), R = S.childContextTypes;
    if (R != null) {
      var U = u.legacyContext;
      if (typeof g.getChildContext != "function") S = U;
      else {
        g = g.getChildContext();
        for (var K in g) if (!(K in R)) throw Error(t(108, Ue(S) || "Unknown", K));
        S = oe({}, U, g);
      }
      u.legacyContext = S, we(i, u, I), u.legacyContext = U;
    } else we(i, u, I);
  }
  function ye(i, u) {
    if (i && i.defaultProps) {
      u = oe({}, u), i = i.defaultProps;
      for (var g in i) u[g] === void 0 && (u[g] = i[g]);
      return u;
    }
    return u;
  }
  function ve(i, u, g, S, I) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      I = ot(g, u.legacyContext);
      var R = g.contextType;
      R = new g(S, typeof R == "object" && R !== null ? R._currentValue2 : I), nr(R, g, S, I), Y(i, u, R, g);
    } else {
      R = ot(g, u.legacyContext), I = C(i, u, g, S, R);
      var U = Gt !== 0;
      if (typeof I == "object" && I !== null && typeof I.render == "function" && I.$$typeof === void 0) nr(I, g, S, R), Y(i, u, I, g);
      else if (U) {
        S = u.treeContext, u.treeContext = Wt(S, 1, 0);
        try {
          we(i, u, I);
        } finally {
          u.treeContext = S;
        }
      } else we(i, u, I);
    }
    else if (typeof g == "string") {
      switch (I = u.blockedSegment, R = Re(I.chunks, g, S, i.responseState, I.formatContext), I.lastPushedText = !1, U = I.formatContext, I.formatContext = G(U, g, S), Ye(i, u, R), I.formatContext = U, g) {
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
          I.chunks.push("</", g, ">");
      }
      I.lastPushedText = !1;
    } else {
      switch (g) {
        case ge:
        case J:
        case j:
        case b:
        case M:
          we(i, u, S.children);
          return;
        case te:
          we(i, u, S.children);
          return;
        case de:
          throw Error(t(343));
        case Q:
          e: {
            g = u.blockedBoundary, I = u.blockedSegment, R = S.fallback, S = S.children, U = /* @__PURE__ */ new Set();
            var K = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: U, errorDigest: null }, pe = sr(i, I.chunks.length, K, I.formatContext, !1, !1);
            I.children.push(pe), I.lastPushedText = !1;
            var be = sr(i, 0, null, I.formatContext, !1, !1);
            be.parentFlushed = !0, u.blockedBoundary = K, u.blockedSegment = be;
            try {
              if (Ye(
                i,
                u,
                S
              ), i.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, He(K, be), K.pendingTasks === 0) break e;
            } catch (ke) {
              be.status = 4, K.forceClientRender = !0, K.errorDigest = y(i, ke);
            } finally {
              u.blockedBoundary = g, u.blockedSegment = I;
            }
            u = Xt(i, R, g, pe, U, u.legacyContext, u.context, u.treeContext), i.pingedTasks.push(u);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case ae:
          if (S = C(i, u, g.render, S, I), Gt !== 0) {
            g = u.treeContext, u.treeContext = Wt(g, 1, 0);
            try {
              we(i, u, S);
            } finally {
              u.treeContext = g;
            }
          } else we(i, u, S);
          return;
        case X:
          g = g.type, S = ye(g, S), ve(i, u, g, S, I);
          return;
        case ee:
          if (I = S.children, g = g._context, S = S.value, R = g._currentValue2, g._currentValue2 = S, U = We, We = S = { parent: U, depth: U === null ? 0 : U.depth + 1, context: g, parentValue: R, value: S }, u.context = S, we(i, u, I), i = We, i === null) throw Error(t(403));
          S = i.parentValue, i.context._currentValue2 = S === re ? i.context._defaultValue : S, i = We = i.parent, u.context = i;
          return;
        case A:
          S = S.children, S = S(g._currentValue2), we(i, u, S);
          return;
        case ne:
          I = g._init, g = I(g._payload), S = ye(g, S), ve(
            i,
            u,
            g,
            S,
            void 0
          );
          return;
      }
      throw Error(t(130, g == null ? g : typeof g, ""));
    }
  }
  function we(i, u, g) {
    if (u.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case z:
          ve(i, u, g.type, g.props, g.ref);
          return;
        case O:
          throw Error(t(257));
        case ne:
          var S = g._init;
          g = S(g._payload), we(i, u, g);
          return;
      }
      if (H(g)) {
        Me(i, u, g);
        return;
      }
      if (g === null || typeof g != "object" ? S = null : (S = se && g[se] || g["@@iterator"], S = typeof S == "function" ? S : null), S && (S = S.call(g))) {
        if (g = S.next(), !g.done) {
          var I = [];
          do
            I.push(g.value), g = S.next();
          while (!g.done);
          Me(i, u, I);
        }
        return;
      }
      throw i = Object.prototype.toString.call(g), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : i));
    }
    typeof g == "string" ? (S = u.blockedSegment, S.lastPushedText = et(u.blockedSegment.chunks, g, i.responseState, S.lastPushedText)) : typeof g == "number" && (S = u.blockedSegment, S.lastPushedText = et(u.blockedSegment.chunks, "" + g, i.responseState, S.lastPushedText));
  }
  function Me(i, u, g) {
    for (var S = g.length, I = 0; I < S; I++) {
      var R = u.treeContext;
      u.treeContext = Wt(R, S, I);
      try {
        Ye(i, u, g[I]);
      } finally {
        u.treeContext = R;
      }
    }
  }
  function Ye(i, u, g) {
    var S = u.blockedSegment.formatContext, I = u.legacyContext, R = u.context;
    try {
      return we(i, u, g);
    } catch (pe) {
      if (Yt(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        g = pe;
        var U = u.blockedSegment, K = sr(i, U.chunks.length, null, U.formatContext, U.lastPushedText, !0);
        U.children.push(K), U.lastPushedText = !1, i = Xt(i, u.node, u.blockedBoundary, K, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, g.then(i, i), u.blockedSegment.formatContext = S, u.legacyContext = I, u.context = R, De(R);
      } else throw u.blockedSegment.formatContext = S, u.legacyContext = I, u.context = R, De(R), pe;
    }
  }
  function yt(i) {
    var u = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Nt(this, u, i);
  }
  function Ze(i, u, g) {
    var S = i.blockedBoundary;
    i.blockedSegment.status = 3, S === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (S.pendingTasks--, S.forceClientRender || (S.forceClientRender = !0, i = g === void 0 ? Error(t(432)) : g, S.errorDigest = u.onError(i), S.parentFlushed && u.clientRenderedBoundaries.push(S)), S.fallbackAbortableTasks.forEach(function(I) {
      return Ze(I, u, g);
    }), S.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (S = u.onAllReady, S()));
  }
  function He(i, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var g = u.children[0];
      g.id = u.id, g.parentFlushed = !0, g.status === 1 && He(i, g);
    } else i.completedSegments.push(u);
  }
  function Nt(i, u, g) {
    if (u === null) {
      if (g.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = g;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Pt, u = i.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && He(u, g), u.parentFlushed && i.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(yt, i), u.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (He(u, g), u.completedSegments.length === 1 && u.parentFlushed && i.partialBoundaries.push(u)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Cr(i) {
    if (i.status !== 2) {
      var u = We, g = Ke.current;
      Ke.current = zt;
      var S = $t;
      $t = i.responseState;
      try {
        var I = i.pingedTasks, R;
        for (R = 0; R < I.length; R++) {
          var U = I[R], K = i, pe = U.blockedSegment;
          if (pe.status === 0) {
            De(U.context);
            try {
              we(K, U, U.node), K.responseState.generateStaticMarkup || pe.lastPushedText && pe.textEmbedded && pe.chunks.push("<!-- -->"), U.abortSet.delete(U), pe.status = 1, Nt(K, U.blockedBoundary, pe);
            } catch (It) {
              if (Yt(), typeof It == "object" && It !== null && typeof It.then == "function") {
                var be = U.ping;
                It.then(be, be);
              } else {
                U.abortSet.delete(U), pe.status = 4;
                var ke = U.blockedBoundary, tt = It, Zt = y(K, tt);
                if (ke === null ? v(K, tt) : (ke.pendingTasks--, ke.forceClientRender || (ke.forceClientRender = !0, ke.errorDigest = Zt, ke.parentFlushed && K.clientRenderedBoundaries.push(ke))), K.allPendingTasks--, K.allPendingTasks === 0) {
                  var Jt = K.onAllReady;
                  Jt();
                }
              }
            } finally {
            }
          }
        }
        I.splice(0, R), i.destination !== null && Mr(i, i.destination);
      } catch (It) {
        y(i, It), v(i, It);
      } finally {
        $t = S, Ke.current = g, g === zt && De(u);
      }
    }
  }
  function Or(i, u, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var S = g.id = i.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, i = i.responseState, u.push('<template id="'), u.push(i.placeholderPrefix), i = S.toString(16), u.push(i), u.push('"></template>');
      case 1:
        g.status = 2;
        var I = !0;
        S = g.chunks;
        var R = 0;
        g = g.children;
        for (var U = 0; U < g.length; U++) {
          for (I = g[U]; R < I.index; R++) u.push(S[R]);
          I = Rr(i, u, I);
        }
        for (; R < S.length - 1; R++) u.push(S[R]);
        return R < S.length && (I = u.push(S[R])), I;
      default:
        throw Error(t(390));
    }
  }
  function Rr(i, u, g) {
    var S = g.boundary;
    if (S === null) return Or(i, u, g);
    if (S.parentFlushed = !0, S.forceClientRender) return i.responseState.generateStaticMarkup || (S = S.errorDigest, u.push("<!--$!-->"), u.push("<template"), S && (u.push(' data-dgst="'), S = E(S), u.push(S), u.push('"')), u.push("></template>")), Or(i, u, g), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
    if (0 < S.pendingTasks) {
      S.rootSegmentID = i.nextSegmentId++, 0 < S.completedSegments.length && i.partialBoundaries.push(S);
      var I = i.responseState, R = I.nextSuspenseID++;
      return I = I.boundaryPrefix + R.toString(16), S = S.id = I, Pe(u, i.responseState, S), Or(i, u, g), u.push("<!--/$-->");
    }
    if (S.byteSize > i.progressiveChunkSize) return S.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(S), Pe(u, i.responseState, S.id), Or(i, u, g), u.push("<!--/$-->");
    if (i.responseState.generateStaticMarkup || u.push("<!--$-->"), g = S.completedSegments, g.length !== 1) throw Error(t(391));
    return Rr(i, u, g[0]), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
  }
  function Xr(i, u, g) {
    return Ee(u, i.responseState, g.formatContext, g.id), Rr(i, u, g), lt(u, g.formatContext);
  }
  function Zr(i, u, g) {
    for (var S = g.completedSegments, I = 0; I < S.length; I++) Jr(i, u, g, S[I]);
    if (S.length = 0, i = i.responseState, S = g.id, g = g.rootSegmentID, u.push(i.startInlineScript), i.sentCompleteBoundaryFunction ? u.push('$RC("') : (i.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), S === null) throw Error(t(395));
    return g = g.toString(16), u.push(S), u.push('","'), u.push(i.segmentPrefix), u.push(g), u.push('")<\/script>');
  }
  function Jr(i, u, g, S) {
    if (S.status === 2) return !0;
    var I = S.id;
    if (I === -1) {
      if ((S.id = g.rootSegmentID) === -1) throw Error(t(392));
      return Xr(i, u, S);
    }
    return Xr(i, u, S), i = i.responseState, u.push(i.startInlineScript), i.sentCompleteSegmentFunction ? u.push('$RS("') : (i.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(i.segmentPrefix), I = I.toString(16), u.push(I), u.push('","'), u.push(i.placeholderPrefix), u.push(I), u.push('")<\/script>');
  }
  function Mr(i, u) {
    try {
      var g = i.completedRootSegment;
      if (g !== null && i.pendingRootTasks === 0) {
        Rr(i, u, g), i.completedRootSegment = null;
        var S = i.responseState.bootstrapChunks;
        for (g = 0; g < S.length - 1; g++) u.push(S[g]);
        g < S.length && u.push(S[g]);
      }
      var I = i.clientRenderedBoundaries, R;
      for (R = 0; R < I.length; R++) {
        var U = I[R];
        S = u;
        var K = i.responseState, pe = U.id, be = U.errorDigest, ke = U.errorMessage, tt = U.errorComponentStack;
        if (S.push(K.startInlineScript), K.sentClientRenderFunction ? S.push('$RX("') : (K.sentClientRenderFunction = !0, S.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), pe === null) throw Error(t(395));
        if (S.push(pe), S.push('"'), be || ke || tt) {
          S.push(",");
          var Zt = Oe(be || "");
          S.push(Zt);
        }
        if (ke || tt) {
          S.push(",");
          var Jt = Oe(ke || "");
          S.push(Jt);
        }
        if (tt) {
          S.push(",");
          var It = Oe(tt);
          S.push(It);
        }
        if (!S.push(")<\/script>")) {
          i.destination = null, R++, I.splice(0, R);
          return;
        }
      }
      I.splice(0, R);
      var Pr = i.completedBoundaries;
      for (R = 0; R < Pr.length; R++) if (!Zr(i, u, Pr[R])) {
        i.destination = null, R++, Pr.splice(0, R);
        return;
      }
      Pr.splice(0, R);
      var hr = i.partialBoundaries;
      for (R = 0; R < hr.length; R++) {
        var Qr = hr[R];
        e: {
          I = i, U = u;
          var Nr = Qr.completedSegments;
          for (K = 0; K < Nr.length; K++) if (!Jr(I, U, Qr, Nr[K])) {
            K++, Nr.splice(0, K);
            var Rn = !1;
            break e;
          }
          Nr.splice(0, K), Rn = !0;
        }
        if (!Rn) {
          i.destination = null, R++, hr.splice(0, R);
          return;
        }
      }
      hr.splice(0, R);
      var kr = i.completedBoundaries;
      for (R = 0; R < kr.length; R++) if (!Zr(i, u, kr[R])) {
        i.destination = null, R++, kr.splice(0, R);
        return;
      }
      kr.splice(0, R);
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function Cn(i, u) {
    try {
      var g = i.abortableTasks;
      g.forEach(function(S) {
        return Ze(S, i, u);
      }), g.clear(), i.destination !== null && Mr(i, i.destination);
    } catch (S) {
      y(i, S), v(i, S);
    }
  }
  function On() {
  }
  function Kr(i, u, g, S) {
    var I = !1, R = null, U = "", K = { push: function(be) {
      return be !== null && (U += be), !0;
    }, destroy: function(be) {
      I = !0, R = be;
    } }, pe = !1;
    if (i = pr(i, Be(g, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, On, void 0, function() {
      pe = !0;
    }), Cr(i), Cn(i, S), i.status === 1) i.status = 2, K.destroy(i.fatalError);
    else if (i.status !== 2 && i.destination === null) {
      i.destination = K;
      try {
        Mr(i, K);
      } catch (be) {
        y(i, be), v(i, be);
      }
    }
    if (I) throw R;
    if (!pe) throw Error(t(426));
    return U;
  }
  return Dr.renderToNodeStream = function() {
    throw Error(t(207));
  }, Dr.renderToStaticMarkup = function(i, u) {
    return Kr(i, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Dr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Dr.renderToString = function(i, u) {
    return Kr(i, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Dr.version = "18.3.1", Dr;
}
var qn = {}, fo;
function _c() {
  if (fo) return qn;
  fo = 1;
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
  function d(o) {
    r && 0 < n && (o.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var m = new TextEncoder();
  function p(o) {
    return m.encode(o);
  }
  function f(o) {
    return m.encode(o);
  }
  function _(o, c) {
    typeof o.error == "function" ? o.error(c) : o.close();
  }
  var x = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, E = {};
  function k(o) {
    return x.call(E, o) ? !0 : x.call($, o) ? !1 : L.test(o) ? E[o] = !0 : ($[o] = !0, !1);
  }
  function D(o, c, h, w, N, P, B) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = w, this.attributeNamespace = N, this.mustUseProperty = h, this.propertyName = o, this.type = c, this.sanitizeURL = P, this.removeEmptyString = B;
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    H[o] = new D(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var c = o[0];
    H[c] = new D(c, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    H[o] = new D(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    H[o] = new D(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    H[o] = new D(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    H[o] = new D(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    H[o] = new D(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    H[o] = new D(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    H[o] = new D(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var W = /[\-:]([a-z])/g;
  function G(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var c = o.replace(
      W,
      G
    );
    H[c] = new D(c, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var c = o.replace(W, G);
    H[c] = new D(c, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var c = o.replace(W, G);
    H[c] = new D(c, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    H[o] = new D(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), H.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    H[o] = new D(o, 1, !1, o.toLowerCase(), null, !0, !0);
  });
  var V = {
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
  }, T = ["Webkit", "ms", "Moz", "O"];
  Object.keys(V).forEach(function(o) {
    T.forEach(function(c) {
      c = c + o.charAt(0).toUpperCase() + o.substring(1), V[c] = V[o];
    });
  });
  var ce = /["'&<>]/;
  function _e(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var c = ce.exec(o);
    if (c) {
      var h = "", w, N = 0;
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
        N !== w && (h += o.substring(N, w)), N = w + 1, h += c;
      }
      o = N !== w ? h + o.substring(N, w) : h;
    }
    return o;
  }
  var Ie = /([A-Z])/g, je = /^ms-/, Ge = Array.isArray, ue = f("<script>"), me = f("<\/script>"), Re = f('<script src="'), Pe = f('<script type="module" src="'), Ee = f('" async=""><\/script>'), lt = /(<\/|<)(s)(cript)/gi;
  function Fe(o, c, h, w) {
    return "" + c + (h === "s" ? "\\u0073" : "\\u0053") + w;
  }
  function Oe(o, c, h, w, N) {
    o = o === void 0 ? "" : o, c = c === void 0 ? ue : f('<script nonce="' + _e(c) + '">');
    var P = [];
    if (h !== void 0 && P.push(c, p(("" + h).replace(lt, Fe)), me), w !== void 0) for (h = 0; h < w.length; h++) P.push(Re, p(_e(w[h])), Ee);
    if (N !== void 0) for (w = 0; w < N.length; w++) P.push(Pe, p(_e(N[w])), Ee);
    return { bootstrapChunks: P, startInlineScript: c, placeholderPrefix: f(o + "P:"), segmentPrefix: f(o + "S:"), boundaryPrefix: o + "B:", idPrefix: o, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Be(o, c) {
    return { insertionMode: o, selectedValue: c };
  }
  function et(o) {
    return Be(o === "http://www.w3.org/2000/svg" ? 2 : o === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function oe(o, c, h) {
    switch (c) {
      case "select":
        return Be(1, h.value != null ? h.value : h.defaultValue);
      case "svg":
        return Be(2, null);
      case "math":
        return Be(3, null);
      case "foreignObject":
        return Be(1, null);
      case "table":
        return Be(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Be(5, null);
      case "colgroup":
        return Be(7, null);
      case "tr":
        return Be(6, null);
    }
    return 4 <= o.insertionMode || o.insertionMode === 0 ? Be(1, null) : o;
  }
  var z = f("<!-- -->");
  function O(o, c, h, w) {
    return c === "" ? w : (w && o.push(z), o.push(p(_e(c))), !0);
  }
  var M = /* @__PURE__ */ new Map(), j = f(' style="'), b = f(":"), ee = f(";");
  function A(o, c, h) {
    if (typeof h != "object") throw Error(t(62));
    c = !0;
    for (var w in h) if (x.call(h, w)) {
      var N = h[w];
      if (N != null && typeof N != "boolean" && N !== "") {
        if (w.indexOf("--") === 0) {
          var P = p(_e(w));
          N = p(_e(("" + N).trim()));
        } else {
          P = w;
          var B = M.get(P);
          B !== void 0 || (B = f(_e(P.replace(Ie, "-$1").toLowerCase().replace(je, "-ms-"))), M.set(P, B)), P = B, N = typeof N == "number" ? N === 0 || x.call(V, w) ? p("" + N) : p(N + "px") : p(_e(("" + N).trim()));
        }
        c ? (c = !1, o.push(j, P, b, N)) : o.push(ee, P, b, N);
      }
    }
    c || o.push(te);
  }
  var ae = f(" "), Q = f('="'), te = f('"'), X = f('=""');
  function ne(o, c, h, w) {
    switch (h) {
      case "style":
        A(o, c, w);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < h.length) || h[0] !== "o" && h[0] !== "O" || h[1] !== "n" && h[1] !== "N") {
      if (c = H.hasOwnProperty(h) ? H[h] : null, c !== null) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (h = p(c.attributeName), c.type) {
          case 3:
            w && o.push(ae, h, X);
            break;
          case 4:
            w === !0 ? o.push(ae, h, X) : w !== !1 && o.push(ae, h, Q, p(_e(w)), te);
            break;
          case 5:
            isNaN(w) || o.push(ae, h, Q, p(_e(w)), te);
            break;
          case 6:
            !isNaN(w) && 1 <= w && o.push(ae, h, Q, p(_e(w)), te);
            break;
          default:
            c.sanitizeURL && (w = "" + w), o.push(ae, h, Q, p(_e(w)), te);
        }
      } else if (k(h)) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = h.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        o.push(ae, p(h), Q, p(_e(w)), te);
      }
    }
  }
  var de = f(">"), J = f("/>");
  function ge(o, c, h) {
    if (c != null) {
      if (h != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && o.push(p("" + c));
    }
  }
  function re(o) {
    var c = "";
    return e.Children.forEach(o, function(h) {
      h != null && (c += h);
    }), c;
  }
  var se = f(' selected=""');
  function Ue(o, c, h, w) {
    o.push(Se(h));
    var N = h = null, P;
    for (P in c) if (x.call(c, P)) {
      var B = c[P];
      if (B != null) switch (P) {
        case "children":
          h = B;
          break;
        case "dangerouslySetInnerHTML":
          N = B;
          break;
        default:
          ne(o, w, P, B);
      }
    }
    return o.push(de), ge(o, N, h), typeof h == "string" ? (o.push(p(_e(h))), null) : h;
  }
  var le = f(`
`), ot = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, We = /* @__PURE__ */ new Map();
  function Se(o) {
    var c = We.get(o);
    if (c === void 0) {
      if (!ot.test(o)) throw Error(t(65, o));
      c = f("<" + o), We.set(o, c);
    }
    return c;
  }
  var q = f("<!DOCTYPE html>");
  function ie(o, c, h, w, N) {
    switch (c) {
      case "select":
        o.push(Se("select"));
        var P = null, B = null;
        for (xe in h) if (x.call(h, xe)) {
          var Z = h[xe];
          if (Z != null) switch (xe) {
            case "children":
              P = Z;
              break;
            case "dangerouslySetInnerHTML":
              B = Z;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(o, w, xe, Z);
          }
        }
        return o.push(de), ge(o, B, P), P;
      case "option":
        B = N.selectedValue, o.push(Se("option"));
        var he = Z = null, Te = null, xe = null;
        for (P in h) if (x.call(h, P)) {
          var Qe = h[P];
          if (Qe != null) switch (P) {
            case "children":
              Z = Qe;
              break;
            case "selected":
              Te = Qe;
              break;
            case "dangerouslySetInnerHTML":
              xe = Qe;
              break;
            case "value":
              he = Qe;
            default:
              ne(o, w, P, Qe);
          }
        }
        if (B != null) if (h = he !== null ? "" + he : re(Z), Ge(B)) {
          for (w = 0; w < B.length; w++)
            if ("" + B[w] === h) {
              o.push(se);
              break;
            }
        } else "" + B === h && o.push(se);
        else Te && o.push(se);
        return o.push(de), ge(o, xe, Z), Z;
      case "textarea":
        o.push(Se("textarea")), xe = B = P = null;
        for (Z in h) if (x.call(h, Z) && (he = h[Z], he != null)) switch (Z) {
          case "children":
            xe = he;
            break;
          case "value":
            P = he;
            break;
          case "defaultValue":
            B = he;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(o, w, Z, he);
        }
        if (P === null && B !== null && (P = B), o.push(de), xe != null) {
          if (P != null) throw Error(t(92));
          if (Ge(xe) && 1 < xe.length) throw Error(t(93));
          P = "" + xe;
        }
        return typeof P == "string" && P[0] === `
` && o.push(le), P !== null && o.push(p(_e("" + P))), null;
      case "input":
        o.push(Se("input")), he = xe = Z = P = null;
        for (B in h) if (x.call(h, B) && (Te = h[B], Te != null)) switch (B) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            he = Te;
            break;
          case "defaultValue":
            Z = Te;
            break;
          case "checked":
            xe = Te;
            break;
          case "value":
            P = Te;
            break;
          default:
            ne(o, w, B, Te);
        }
        return xe !== null ? ne(
          o,
          w,
          "checked",
          xe
        ) : he !== null && ne(o, w, "checked", he), P !== null ? ne(o, w, "value", P) : Z !== null && ne(o, w, "value", Z), o.push(J), null;
      case "menuitem":
        o.push(Se("menuitem"));
        for (var Lt in h) if (x.call(h, Lt) && (P = h[Lt], P != null)) switch (Lt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(o, w, Lt, P);
        }
        return o.push(de), null;
      case "title":
        o.push(Se("title")), P = null;
        for (Qe in h) if (x.call(h, Qe) && (B = h[Qe], B != null)) switch (Qe) {
          case "children":
            P = B;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(o, w, Qe, B);
        }
        return o.push(de), P;
      case "listing":
      case "pre":
        o.push(Se(c)), B = P = null;
        for (he in h) if (x.call(h, he) && (Z = h[he], Z != null)) switch (he) {
          case "children":
            P = Z;
            break;
          case "dangerouslySetInnerHTML":
            B = Z;
            break;
          default:
            ne(o, w, he, Z);
        }
        if (o.push(de), B != null) {
          if (P != null) throw Error(t(60));
          if (typeof B != "object" || !("__html" in B)) throw Error(t(61));
          h = B.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? o.push(le, p(h)) : o.push(p("" + h)));
        }
        return typeof P == "string" && P[0] === `
` && o.push(le), P;
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
        o.push(Se(c));
        for (var Kt in h) if (x.call(h, Kt) && (P = h[Kt], P != null)) switch (Kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            ne(o, w, Kt, P);
        }
        return o.push(J), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ue(o, h, c, w);
      case "html":
        return N.insertionMode === 0 && o.push(q), Ue(o, h, c, w);
      default:
        if (c.indexOf("-") === -1 && typeof h.is != "string") return Ue(o, h, c, w);
        o.push(Se(c)), B = P = null;
        for (Te in h) if (x.call(h, Te) && (Z = h[Te], Z != null)) switch (Te) {
          case "children":
            P = Z;
            break;
          case "dangerouslySetInnerHTML":
            B = Z;
            break;
          case "style":
            A(o, w, Z);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            k(Te) && typeof Z != "function" && typeof Z != "symbol" && o.push(ae, p(Te), Q, p(_e(Z)), te);
        }
        return o.push(de), ge(o, B, P), P;
    }
  }
  var Xe = f("</"), Ne = f(">"), De = f('<template id="'), rr = f('"></template>'), nr = f("<!--$-->"), Bt = f('<!--$?--><template id="'), Wt = f('"></template>'), ht = f("<!--$!-->"), Ct = f("<!--/$-->"), nt = f("<template"), pt = f('"'), Vt = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var qt = f("></template>");
  function mt(o, c, h) {
    if (a(o, Bt), h === null) throw Error(t(395));
    return a(o, h), s(o, Wt);
  }
  var St = f('<div hidden id="'), gt = f('">'), Le = f("</div>"), ct = f('<svg aria-hidden="true" style="display:none" id="'), ar = f('">'), Gt = f("</svg>"), fe = f('<math aria-hidden="true" style="display:none" id="'), st = f('">'), Ot = f("</math>"), ir = f('<table hidden id="'), Rt = f('">'), Yt = f("</table>"), or = f('<table hidden><tbody id="'), Sr = f('">'), at = f("</tbody></table>"), ut = f('<table hidden><tr id="'), dr = f('">'), Mt = f("</tr></table>"), zt = f('<table hidden><colgroup id="'), $t = f('">'), Ke = f("</colgroup></table>");
  function fr(o, c, h, w) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return a(o, St), a(o, c.segmentPrefix), a(o, p(w.toString(16))), s(o, gt);
      case 2:
        return a(o, ct), a(o, c.segmentPrefix), a(o, p(w.toString(16))), s(o, ar);
      case 3:
        return a(o, fe), a(o, c.segmentPrefix), a(o, p(w.toString(16))), s(o, st);
      case 4:
        return a(o, ir), a(o, c.segmentPrefix), a(o, p(w.toString(16))), s(o, Rt);
      case 5:
        return a(o, or), a(o, c.segmentPrefix), a(o, p(w.toString(16))), s(o, Sr);
      case 6:
        return a(o, ut), a(o, c.segmentPrefix), a(o, p(w.toString(16))), s(o, dr);
      case 7:
        return a(
          o,
          zt
        ), a(o, c.segmentPrefix), a(o, p(w.toString(16))), s(o, $t);
      default:
        throw Error(t(397));
    }
  }
  function Pt(o, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(o, Le);
      case 2:
        return s(o, Gt);
      case 3:
        return s(o, Ot);
      case 4:
        return s(o, Yt);
      case 5:
        return s(o, at);
      case 6:
        return s(o, Mt);
      case 7:
        return s(o, Ke);
      default:
        throw Error(t(397));
    }
  }
  var pr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Xt = f('$RS("'), sr = f('","'), y = f('")<\/script>'), v = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), C = f('$RC("'), Y = f('","'), ye = f('")<\/script>'), ve = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), we = f('$RX("'), Me = f('"'), Ye = f(")<\/script>"), yt = f(","), Ze = /[<\u2028\u2029]/g;
  function He(o) {
    return JSON.stringify(o).replace(Ze, function(c) {
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
  var Nt = Object.assign, Cr = Symbol.for("react.element"), Or = Symbol.for("react.portal"), Rr = Symbol.for("react.fragment"), Xr = Symbol.for("react.strict_mode"), Zr = Symbol.for("react.profiler"), Jr = Symbol.for("react.provider"), Mr = Symbol.for("react.context"), Cn = Symbol.for("react.forward_ref"), On = Symbol.for("react.suspense"), Kr = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), S = Symbol.for("react.debug_trace_mode"), I = Symbol.for("react.legacy_hidden"), R = Symbol.for("react.default_value"), U = Symbol.iterator;
  function K(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case Rr:
        return "Fragment";
      case Or:
        return "Portal";
      case Zr:
        return "Profiler";
      case Xr:
        return "StrictMode";
      case On:
        return "Suspense";
      case Kr:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case Mr:
        return (o.displayName || "Context") + ".Consumer";
      case Jr:
        return (o._context.displayName || "Context") + ".Provider";
      case Cn:
        var c = o.render;
        return o = o.displayName, o || (o = c.displayName || c.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case i:
        return c = o.displayName || null, c !== null ? c : K(o.type) || "Memo";
      case u:
        c = o._payload, o = o._init;
        try {
          return K(o(c));
        } catch {
        }
    }
    return null;
  }
  var pe = {};
  function be(o, c) {
    if (o = o.contextTypes, !o) return pe;
    var h = {}, w;
    for (w in o) h[w] = c[w];
    return h;
  }
  var ke = null;
  function tt(o, c) {
    if (o !== c) {
      o.context._currentValue = o.parentValue, o = o.parent;
      var h = c.parent;
      if (o === null) {
        if (h !== null) throw Error(t(401));
      } else {
        if (h === null) throw Error(t(401));
        tt(o, h);
      }
      c.context._currentValue = c.value;
    }
  }
  function Zt(o) {
    o.context._currentValue = o.parentValue, o = o.parent, o !== null && Zt(o);
  }
  function Jt(o) {
    var c = o.parent;
    c !== null && Jt(c), o.context._currentValue = o.value;
  }
  function It(o, c) {
    if (o.context._currentValue = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === c.depth ? tt(o, c) : It(o, c);
  }
  function Pr(o, c) {
    var h = c.parent;
    if (h === null) throw Error(t(402));
    o.depth === h.depth ? tt(o, h) : Pr(o, h), c.context._currentValue = c.value;
  }
  function hr(o) {
    var c = ke;
    c !== o && (c === null ? Jt(o) : o === null ? Zt(c) : c.depth === o.depth ? tt(c, o) : c.depth > o.depth ? It(c, o) : Pr(c, o), ke = o);
  }
  var Qr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, c) {
    o = o._reactInternals, o.queue !== null && o.queue.push(c);
  }, enqueueReplaceState: function(o, c) {
    o = o._reactInternals, o.replace = !0, o.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Nr(o, c, h, w) {
    var N = o.state !== void 0 ? o.state : null;
    o.updater = Qr, o.props = h, o.state = N;
    var P = { queue: [], replace: !1 };
    o._reactInternals = P;
    var B = c.contextType;
    if (o.context = typeof B == "object" && B !== null ? B._currentValue : w, B = c.getDerivedStateFromProps, typeof B == "function" && (B = B(h, N), N = B == null ? N : Nt({}, N, B), o.state = N), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (c = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), c !== o.state && Qr.enqueueReplaceState(o, o.state, null), P.queue !== null && 0 < P.queue.length) if (c = P.queue, B = P.replace, P.queue = null, P.replace = !1, B && c.length === 1) o.state = c[0];
    else {
      for (P = B ? c[0] : o.state, N = !0, B = B ? 1 : 0; B < c.length; B++) {
        var Z = c[B];
        Z = typeof Z == "function" ? Z.call(o, P, h, w) : Z, Z != null && (N ? (N = !1, P = Nt({}, P, Z)) : Nt(P, Z));
      }
      o.state = P;
    }
    else P.queue = null;
  }
  var Rn = { id: 1, overflow: "" };
  function kr(o, c, h) {
    var w = o.id;
    o = o.overflow;
    var N = 32 - Pn(w) - 1;
    w &= ~(1 << N), h += 1;
    var P = 32 - Pn(c) + N;
    if (30 < P) {
      var B = N - N % 5;
      return P = (w & (1 << B) - 1).toString(32), w >>= B, N -= B, { id: 1 << 32 - Pn(c) + N | h << N | w, overflow: P + o };
    }
    return { id: 1 << P | h << N | w, overflow: o };
  }
  var Pn = Math.clz32 ? Math.clz32 : Nl, Rl = Math.log, Pl = Math.LN2;
  function Nl(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Rl(o) / Pl | 0) | 0;
  }
  function Il(o, c) {
    return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
  }
  var Dl = typeof Object.is == "function" ? Object.is : Il, mr = null, ka = null, Nn = null, Je = null, en = !1, In = !1, tn = 0, xr = null, Dn = 0;
  function Ir() {
    if (mr === null) throw Error(t(321));
    return mr;
  }
  function Di() {
    if (0 < Dn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function xa() {
    return Je === null ? Nn === null ? (en = !1, Nn = Je = Di()) : (en = !0, Je = Nn) : Je.next === null ? (en = !1, Je = Je.next = Di()) : (en = !0, Je = Je.next), Je;
  }
  function _a() {
    ka = mr = null, In = !1, Nn = null, Dn = 0, Je = xr = null;
  }
  function Li(o, c) {
    return typeof c == "function" ? c(o) : c;
  }
  function ji(o, c, h) {
    if (mr = Ir(), Je = xa(), en) {
      var w = Je.queue;
      if (c = w.dispatch, xr !== null && (h = xr.get(w), h !== void 0)) {
        xr.delete(w), w = Je.memoizedState;
        do
          w = o(w, h.action), h = h.next;
        while (h !== null);
        return Je.memoizedState = w, [w, c];
      }
      return [Je.memoizedState, c];
    }
    return o = o === Li ? typeof c == "function" ? c() : c : h !== void 0 ? h(c) : c, Je.memoizedState = o, o = Je.queue = { last: null, dispatch: null }, o = o.dispatch = Ll.bind(null, mr, o), [Je.memoizedState, o];
  }
  function Fi(o, c) {
    if (mr = Ir(), Je = xa(), c = c === void 0 ? null : c, Je !== null) {
      var h = Je.memoizedState;
      if (h !== null && c !== null) {
        var w = h[1];
        e: if (w === null) w = !1;
        else {
          for (var N = 0; N < w.length && N < c.length; N++) if (!Dl(c[N], w[N])) {
            w = !1;
            break e;
          }
          w = !0;
        }
        if (w) return h[0];
      }
    }
    return o = o(), Je.memoizedState = [o, c], o;
  }
  function Ll(o, c, h) {
    if (25 <= Dn) throw Error(t(301));
    if (o === mr) if (In = !0, o = { action: h, next: null }, xr === null && (xr = /* @__PURE__ */ new Map()), h = xr.get(c), h === void 0) xr.set(c, o);
    else {
      for (c = h; c.next !== null; ) c = c.next;
      c.next = o;
    }
  }
  function jl() {
    throw Error(t(394));
  }
  function Ln() {
  }
  var Mi = { readContext: function(o) {
    return o._currentValue;
  }, useContext: function(o) {
    return Ir(), o._currentValue;
  }, useMemo: Fi, useReducer: ji, useRef: function(o) {
    mr = Ir(), Je = xa();
    var c = Je.memoizedState;
    return c === null ? (o = { current: o }, Je.memoizedState = o) : c;
  }, useState: function(o) {
    return ji(Li, o);
  }, useInsertionEffect: Ln, useLayoutEffect: function() {
  }, useCallback: function(o, c) {
    return Fi(function() {
      return o;
    }, c);
  }, useImperativeHandle: Ln, useEffect: Ln, useDebugValue: Ln, useDeferredValue: function(o) {
    return Ir(), o;
  }, useTransition: function() {
    return Ir(), [!1, jl];
  }, useId: function() {
    var o = ka.treeContext, c = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Pn(o) - 1)).toString(32) + c;
    var h = jn;
    if (h === null) throw Error(t(404));
    return c = tn++, o = ":" + h.idPrefix + "R" + o, 0 < c && (o += "H" + c.toString(32)), o + ":";
  }, useMutableSource: function(o, c) {
    return Ir(), c(o._source);
  }, useSyncExternalStore: function(o, c, h) {
    if (h === void 0) throw Error(t(407));
    return h();
  } }, jn = null, Ta = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Fl(o) {
    return console.error(o), null;
  }
  function rn() {
  }
  function Ml(o, c, h, w, N, P, B, Z, he) {
    var Te = [], xe = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: w === void 0 ? 12800 : w, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: Te, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: N === void 0 ? Fl : N, onAllReady: P === void 0 ? rn : P, onShellReady: B === void 0 ? rn : B, onShellError: Z === void 0 ? rn : Z, onFatalError: he === void 0 ? rn : he }, h = Fn(c, 0, null, h, !1, !1), h.parentFlushed = !0, o = Ea(c, o, null, h, xe, pe, null, Rn), Te.push(o), c;
  }
  function Ea(o, c, h, w, N, P, B, Z) {
    o.allPendingTasks++, h === null ? o.pendingRootTasks++ : h.pendingTasks++;
    var he = { node: c, ping: function() {
      var Te = o.pingedTasks;
      Te.push(he), Te.length === 1 && Vi(o);
    }, blockedBoundary: h, blockedSegment: w, abortSet: N, legacyContext: P, context: B, treeContext: Z };
    return N.add(he), he;
  }
  function Fn(o, c, h, w, N, P) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: w, boundary: h, lastPushedText: N, textEmbedded: P };
  }
  function nn(o, c) {
    if (o = o.onError(c), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function Mn(o, c) {
    var h = o.onShellError;
    h(c), h = o.onFatalError, h(c), o.destination !== null ? (o.status = 2, _(o.destination, c)) : (o.status = 1, o.fatalError = c);
  }
  function zi(o, c, h, w, N) {
    for (mr = {}, ka = c, tn = 0, o = h(w, N); In; ) In = !1, tn = 0, Dn += 1, Je = null, o = h(w, N);
    return _a(), o;
  }
  function $i(o, c, h, w) {
    var N = h.render(), P = w.childContextTypes;
    if (P != null) {
      var B = c.legacyContext;
      if (typeof h.getChildContext != "function") w = B;
      else {
        h = h.getChildContext();
        for (var Z in h) if (!(Z in P)) throw Error(t(108, K(w) || "Unknown", Z));
        w = Nt({}, B, h);
      }
      c.legacyContext = w, Dt(o, c, N), c.legacyContext = B;
    } else Dt(o, c, N);
  }
  function Ui(o, c) {
    if (o && o.defaultProps) {
      c = Nt({}, c), o = o.defaultProps;
      for (var h in o) c[h] === void 0 && (c[h] = o[h]);
      return c;
    }
    return c;
  }
  function Aa(o, c, h, w, N) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      N = be(h, c.legacyContext);
      var P = h.contextType;
      P = new h(w, typeof P == "object" && P !== null ? P._currentValue : N), Nr(P, h, w, N), $i(o, c, P, h);
    } else {
      P = be(h, c.legacyContext), N = zi(o, c, h, w, P);
      var B = tn !== 0;
      if (typeof N == "object" && N !== null && typeof N.render == "function" && N.$$typeof === void 0) Nr(N, h, w, P), $i(o, c, N, h);
      else if (B) {
        w = c.treeContext, c.treeContext = kr(w, 1, 0);
        try {
          Dt(o, c, N);
        } finally {
          c.treeContext = w;
        }
      } else Dt(o, c, N);
    }
    else if (typeof h == "string") {
      switch (N = c.blockedSegment, P = ie(N.chunks, h, w, o.responseState, N.formatContext), N.lastPushedText = !1, B = N.formatContext, N.formatContext = oe(B, h, w), Ca(o, c, P), N.formatContext = B, h) {
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
          N.chunks.push(Xe, p(h), Ne);
      }
      N.lastPushedText = !1;
    } else {
      switch (h) {
        case I:
        case S:
        case Xr:
        case Zr:
        case Rr:
          Dt(o, c, w.children);
          return;
        case Kr:
          Dt(o, c, w.children);
          return;
        case g:
          throw Error(t(343));
        case On:
          e: {
            h = c.blockedBoundary, N = c.blockedSegment, P = w.fallback, w = w.children, B = /* @__PURE__ */ new Set();
            var Z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: B, errorDigest: null }, he = Fn(o, N.chunks.length, Z, N.formatContext, !1, !1);
            N.children.push(he), N.lastPushedText = !1;
            var Te = Fn(o, 0, null, N.formatContext, !1, !1);
            Te.parentFlushed = !0, c.blockedBoundary = Z, c.blockedSegment = Te;
            try {
              if (Ca(
                o,
                c,
                w
              ), Te.lastPushedText && Te.textEmbedded && Te.chunks.push(z), Te.status = 1, zn(Z, Te), Z.pendingTasks === 0) break e;
            } catch (xe) {
              Te.status = 4, Z.forceClientRender = !0, Z.errorDigest = nn(o, xe);
            } finally {
              c.blockedBoundary = h, c.blockedSegment = N;
            }
            c = Ea(o, P, h, he, B, c.legacyContext, c.context, c.treeContext), o.pingedTasks.push(c);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case Cn:
          if (w = zi(o, c, h.render, w, N), tn !== 0) {
            h = c.treeContext, c.treeContext = kr(h, 1, 0);
            try {
              Dt(o, c, w);
            } finally {
              c.treeContext = h;
            }
          } else Dt(o, c, w);
          return;
        case i:
          h = h.type, w = Ui(h, w), Aa(o, c, h, w, N);
          return;
        case Jr:
          if (N = w.children, h = h._context, w = w.value, P = h._currentValue, h._currentValue = w, B = ke, ke = w = { parent: B, depth: B === null ? 0 : B.depth + 1, context: h, parentValue: P, value: w }, c.context = w, Dt(o, c, N), o = ke, o === null) throw Error(t(403));
          w = o.parentValue, o.context._currentValue = w === R ? o.context._defaultValue : w, o = ke = o.parent, c.context = o;
          return;
        case Mr:
          w = w.children, w = w(h._currentValue), Dt(o, c, w);
          return;
        case u:
          N = h._init, h = N(h._payload), w = Ui(h, w), Aa(o, c, h, w, void 0);
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
        case Cr:
          Aa(o, c, h.type, h.props, h.ref);
          return;
        case Or:
          throw Error(t(257));
        case u:
          var w = h._init;
          h = w(h._payload), Dt(o, c, h);
          return;
      }
      if (Ge(h)) {
        Hi(o, c, h);
        return;
      }
      if (h === null || typeof h != "object" ? w = null : (w = U && h[U] || h["@@iterator"], w = typeof w == "function" ? w : null), w && (w = w.call(h))) {
        if (h = w.next(), !h.done) {
          var N = [];
          do
            N.push(h.value), h = w.next();
          while (!h.done);
          Hi(o, c, N);
        }
        return;
      }
      throw o = Object.prototype.toString.call(h), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : o));
    }
    typeof h == "string" ? (w = c.blockedSegment, w.lastPushedText = O(c.blockedSegment.chunks, h, o.responseState, w.lastPushedText)) : typeof h == "number" && (w = c.blockedSegment, w.lastPushedText = O(c.blockedSegment.chunks, "" + h, o.responseState, w.lastPushedText));
  }
  function Hi(o, c, h) {
    for (var w = h.length, N = 0; N < w; N++) {
      var P = c.treeContext;
      c.treeContext = kr(P, w, N);
      try {
        Ca(o, c, h[N]);
      } finally {
        c.treeContext = P;
      }
    }
  }
  function Ca(o, c, h) {
    var w = c.blockedSegment.formatContext, N = c.legacyContext, P = c.context;
    try {
      return Dt(o, c, h);
    } catch (he) {
      if (_a(), typeof he == "object" && he !== null && typeof he.then == "function") {
        h = he;
        var B = c.blockedSegment, Z = Fn(o, B.chunks.length, null, B.formatContext, B.lastPushedText, !0);
        B.children.push(Z), B.lastPushedText = !1, o = Ea(o, c.node, c.blockedBoundary, Z, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, h.then(o, o), c.blockedSegment.formatContext = w, c.legacyContext = N, c.context = P, hr(P);
      } else throw c.blockedSegment.formatContext = w, c.legacyContext = N, c.context = P, hr(P), he;
    }
  }
  function zl(o) {
    var c = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, Wi(this, c, o);
  }
  function Bi(o, c, h) {
    var w = o.blockedBoundary;
    o.blockedSegment.status = 3, w === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (w.pendingTasks--, w.forceClientRender || (w.forceClientRender = !0, o = h === void 0 ? Error(t(432)) : h, w.errorDigest = c.onError(o), w.parentFlushed && c.clientRenderedBoundaries.push(w)), w.fallbackAbortableTasks.forEach(function(N) {
      return Bi(N, c, h);
    }), w.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (w = c.onAllReady, w()));
  }
  function zn(o, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var h = c.children[0];
      h.id = c.id, h.parentFlushed = !0, h.status === 1 && zn(o, h);
    } else o.completedSegments.push(c);
  }
  function Wi(o, c, h) {
    if (c === null) {
      if (h.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = h;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = rn, c = o.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && zn(c, h), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(zl, o), c.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (zn(c, h), c.completedSegments.length === 1 && c.parentFlushed && o.partialBoundaries.push(c)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function Vi(o) {
    if (o.status !== 2) {
      var c = ke, h = Ta.current;
      Ta.current = Mi;
      var w = jn;
      jn = o.responseState;
      try {
        var N = o.pingedTasks, P;
        for (P = 0; P < N.length; P++) {
          var B = N[P], Z = o, he = B.blockedSegment;
          if (he.status === 0) {
            hr(B.context);
            try {
              Dt(Z, B, B.node), he.lastPushedText && he.textEmbedded && he.chunks.push(z), B.abortSet.delete(B), he.status = 1, Wi(Z, B.blockedBoundary, he);
            } catch (Qt) {
              if (_a(), typeof Qt == "object" && Qt !== null && typeof Qt.then == "function") {
                var Te = B.ping;
                Qt.then(Te, Te);
              } else {
                B.abortSet.delete(B), he.status = 4;
                var xe = B.blockedBoundary, Qe = Qt, Lt = nn(Z, Qe);
                if (xe === null ? Mn(Z, Qe) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = Lt, xe.parentFlushed && Z.clientRenderedBoundaries.push(xe))), Z.allPendingTasks--, Z.allPendingTasks === 0) {
                  var Kt = Z.onAllReady;
                  Kt();
                }
              }
            } finally {
            }
          }
        }
        N.splice(0, P), o.destination !== null && Oa(o, o.destination);
      } catch (Qt) {
        nn(o, Qt), Mn(o, Qt);
      } finally {
        jn = w, Ta.current = h, h === Mi && hr(c);
      }
    }
  }
  function $n(o, c, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var w = h.id = o.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, o = o.responseState, a(c, De), a(c, o.placeholderPrefix), o = p(w.toString(16)), a(c, o), s(c, rr);
      case 1:
        h.status = 2;
        var N = !0;
        w = h.chunks;
        var P = 0;
        h = h.children;
        for (var B = 0; B < h.length; B++) {
          for (N = h[B]; P < N.index; P++) a(c, w[P]);
          N = Un(o, c, N);
        }
        for (; P < w.length - 1; P++) a(c, w[P]);
        return P < w.length && (N = s(c, w[P])), N;
      default:
        throw Error(t(390));
    }
  }
  function Un(o, c, h) {
    var w = h.boundary;
    if (w === null) return $n(o, c, h);
    if (w.parentFlushed = !0, w.forceClientRender) w = w.errorDigest, s(c, ht), a(c, nt), w && (a(c, Vt), a(c, p(_e(w))), a(c, pt)), s(c, qt), $n(o, c, h);
    else if (0 < w.pendingTasks) {
      w.rootSegmentID = o.nextSegmentId++, 0 < w.completedSegments.length && o.partialBoundaries.push(w);
      var N = o.responseState, P = N.nextSuspenseID++;
      N = f(N.boundaryPrefix + P.toString(16)), w = w.id = N, mt(c, o.responseState, w), $n(o, c, h);
    } else if (w.byteSize > o.progressiveChunkSize) w.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(w), mt(c, o.responseState, w.id), $n(o, c, h);
    else {
      if (s(c, nr), h = w.completedSegments, h.length !== 1) throw Error(t(391));
      Un(o, c, h[0]);
    }
    return s(c, Ct);
  }
  function qi(o, c, h) {
    return fr(c, o.responseState, h.formatContext, h.id), Un(o, c, h), Pt(c, h.formatContext);
  }
  function Gi(o, c, h) {
    for (var w = h.completedSegments, N = 0; N < w.length; N++) Yi(o, c, h, w[N]);
    if (w.length = 0, o = o.responseState, w = h.id, h = h.rootSegmentID, a(c, o.startInlineScript), o.sentCompleteBoundaryFunction ? a(c, C) : (o.sentCompleteBoundaryFunction = !0, a(c, v)), w === null) throw Error(t(395));
    return h = p(h.toString(16)), a(c, w), a(c, Y), a(c, o.segmentPrefix), a(c, h), s(c, ye);
  }
  function Yi(o, c, h, w) {
    if (w.status === 2) return !0;
    var N = w.id;
    if (N === -1) {
      if ((w.id = h.rootSegmentID) === -1) throw Error(t(392));
      return qi(o, c, w);
    }
    return qi(o, c, w), o = o.responseState, a(c, o.startInlineScript), o.sentCompleteSegmentFunction ? a(c, Xt) : (o.sentCompleteSegmentFunction = !0, a(c, pr)), a(c, o.segmentPrefix), N = p(N.toString(16)), a(c, N), a(c, sr), a(c, o.placeholderPrefix), a(c, N), s(c, y);
  }
  function Oa(o, c) {
    r = new Uint8Array(512), n = 0;
    try {
      var h = o.completedRootSegment;
      if (h !== null && o.pendingRootTasks === 0) {
        Un(o, c, h), o.completedRootSegment = null;
        var w = o.responseState.bootstrapChunks;
        for (h = 0; h < w.length - 1; h++) a(c, w[h]);
        h < w.length && s(c, w[h]);
      }
      var N = o.clientRenderedBoundaries, P;
      for (P = 0; P < N.length; P++) {
        var B = N[P];
        w = c;
        var Z = o.responseState, he = B.id, Te = B.errorDigest, xe = B.errorMessage, Qe = B.errorComponentStack;
        if (a(w, Z.startInlineScript), Z.sentClientRenderFunction ? a(w, we) : (Z.sentClientRenderFunction = !0, a(
          w,
          ve
        )), he === null) throw Error(t(395));
        a(w, he), a(w, Me), (Te || xe || Qe) && (a(w, yt), a(w, p(He(Te || "")))), (xe || Qe) && (a(w, yt), a(w, p(He(xe || "")))), Qe && (a(w, yt), a(w, p(He(Qe)))), s(w, Ye);
      }
      N.splice(0, P);
      var Lt = o.completedBoundaries;
      for (P = 0; P < Lt.length; P++) Gi(o, c, Lt[P]);
      Lt.splice(0, P), d(c), r = new Uint8Array(512), n = 0;
      var Kt = o.partialBoundaries;
      for (P = 0; P < Kt.length; P++) {
        var Qt = Kt[P];
        e: {
          N = o, B = c;
          var Hn = Qt.completedSegments;
          for (Z = 0; Z < Hn.length; Z++) if (!Yi(
            N,
            B,
            Qt,
            Hn[Z]
          )) {
            Z++, Hn.splice(0, Z);
            var Zi = !1;
            break e;
          }
          Hn.splice(0, Z), Zi = !0;
        }
        if (!Zi) {
          o.destination = null, P++, Kt.splice(0, P);
          return;
        }
      }
      Kt.splice(0, P);
      var Ra = o.completedBoundaries;
      for (P = 0; P < Ra.length; P++) Gi(o, c, Ra[P]);
      Ra.splice(0, P);
    } finally {
      d(c), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && c.close();
    }
  }
  function Xi(o, c) {
    try {
      var h = o.abortableTasks;
      h.forEach(function(w) {
        return Bi(w, o, c);
      }), h.clear(), o.destination !== null && Oa(o, o.destination);
    } catch (w) {
      nn(o, w), Mn(o, w);
    }
  }
  return qn.renderToReadableStream = function(o, c) {
    return new Promise(function(h, w) {
      var N, P, B = new Promise(function(xe, Qe) {
        P = xe, N = Qe;
      }), Z = Ml(o, Oe(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), et(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, P, function() {
        var xe = new ReadableStream({ type: "bytes", pull: function(Qe) {
          if (Z.status === 1) Z.status = 2, _(Qe, Z.fatalError);
          else if (Z.status !== 2 && Z.destination === null) {
            Z.destination = Qe;
            try {
              Oa(Z, Qe);
            } catch (Lt) {
              nn(Z, Lt), Mn(Z, Lt);
            }
          }
        }, cancel: function() {
          Xi(Z);
        } }, { highWaterMark: 0 });
        xe.allReady = B, h(xe);
      }, function(xe) {
        B.catch(function() {
        }), w(xe);
      }, N);
      if (c && c.signal) {
        var he = c.signal, Te = function() {
          Xi(Z, he.reason), he.removeEventListener("abort", Te);
        };
        he.addEventListener("abort", Te);
      }
      Vi(Z);
    });
  }, qn.version = "18.3.1", qn;
}
var Yr, ks;
Yr = xc(), ks = _c();
Yr.version;
Yr.renderToString;
Yr.renderToStaticMarkup;
Yr.renderToNodeStream;
Yr.renderToStaticNodeStream;
ks.renderToReadableStream;
const Tc = "staticMarkup";
function xs() {
  const e = Wl().indexOf(Tc) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const ur = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = xs(), { onClick: a, ...s } = r.props;
  if (n)
    return ft.cloneElement(r, {
      ...s,
      onClick: (p) => (e && e.event && e.action && wc(e), a ? a(p) : !0)
    });
  let d = "";
  ["input", "header", "header-input"].includes(t) && (d = `-${t}`);
  const m = {
    [`data-ga${d}`]: e.text,
    [`data-ga${d}-name`]: e.name,
    [`data-ga${d}-event`]: e.event,
    [`data-ga${d}-action`]: e.action,
    [`data-ga${d}-type`]: e.type,
    [`data-ga${d}-region`]: e.region,
    [`data-ga${d}-section`]: e.section,
    [`data-ga${d}-component`]: e.component
  };
  return ft.cloneElement(r, {
    ...s,
    onClick: a,
    ...m
  });
}, Ec = bi(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: n,
    onClick: a,
    gaData: s
  }, d) => {
    var m, p, f, _, x, L;
    const $ = e === n, E = $ ? "open" : "close";
    return /* @__PURE__ */ F.jsxs(
      "div",
      {
        ref: d,
        className: er("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (m = r.content) == null ? void 0 : m.icon
        }),
        children: [
          /* @__PURE__ */ F.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ F.jsx("h4", { children: /* @__PURE__ */ F.jsx(
            ur,
            {
              gaData: {
                ...s,
                action: E,
                text: r.content.header
              },
              children: /* @__PURE__ */ F.jsxs(
                "button",
                {
                  "data-testid": "accordion-opener",
                  className: er({ collapsed: !$ }),
                  "data-bs-toggle": "collapse",
                  href: `#card-body-${e}`,
                  type: "button",
                  "aria-expanded": $,
                  "aria-controls": `card-body-${e}`,
                  onClick: (k) => a(k, e),
                  children: [
                    (p = r.content) != null && p.icon ? /* @__PURE__ */ F.jsxs("span", { className: "accordion-icon", children: [
                      /* @__PURE__ */ F.jsx(
                        "i",
                        {
                          className: `${(f = r.content.icon) == null ? void 0 : f[0]} fa-${(_ = r.content.icon) == null ? void 0 : _[1]} me-2`
                        }
                      ),
                      r.content.header
                    ] }) : (x = r.content) == null ? void 0 : x.header,
                    /* @__PURE__ */ F.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              )
            }
          ) }) }),
          ((L = r.content) == null ? void 0 : L.body) && /* @__PURE__ */ F.jsx(
            "div",
            {
              "data-bs-parent": `#${t}`,
              id: `card-body-${e}`,
              className: er("collapse", { show: $ }),
              children: /* @__PURE__ */ F.jsx(
                "div",
                {
                  className: "accordion-body",
                  dangerouslySetInnerHTML: Lr(
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
Ec.propTypes = {
  id: l.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: Ss,
  parentId: l.string,
  openCard: l.number,
  onClick: l.func,
  gaData: l.object
};
l.arrayOf(Ss).isRequired, l.number;
const po = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, _s = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  block: a,
  color: s = "gray",
  disabled: d,
  element: m = "button",
  href: p,
  icon: f,
  innerRef: _,
  onClick: x,
  size: L = "default",
  variant: $,
  classes: E,
  target: k = "_self",
  ...D
}) => {
  if ($) {
    const G = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, V = er("btn", G[$], {
      [`btn-${G[$]}-${s}`]: !0,
      "btn-medium": L === "medium",
      "btn-small": L === "small",
      "btn-large": L === "large" || L === "default",
      disabled: d
    });
    let T = m;
    return p && m === "button" && (T = "a"), /* @__PURE__ */ F.jsx(
      ur,
      {
        gaData: {
          ...po,
          section: t,
          ...r,
          text: e
        },
        children: /* @__PURE__ */ F.jsxs(
          T,
          {
            type: T === "button" && x ? "button" : void 0,
            ...D,
            className: er(E) || V,
            href: p,
            ref: _,
            onClick: x,
            "aria-label": n,
            target: T === "a" ? k : null,
            disabled: d,
            children: [
              f && /* @__PURE__ */ F.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
              e
            ]
          }
        )
      }
    );
  }
  const H = er("btn", {
    [`btn-${s}`]: !0,
    "btn-md": L === "small",
    "btn-sm": L === "xsmall",
    "btn-block": a,
    disabled: d
  });
  let W = m;
  return p && m === "button" && (W = "a"), /* @__PURE__ */ F.jsx(
    ur,
    {
      gaData: {
        ...po,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ F.jsxs(
        W,
        {
          type: W === "button" && x ? "button" : void 0,
          ...D,
          className: er(E) || H,
          href: p,
          ref: _,
          onClick: x,
          "aria-label": n,
          target: W === "a" ? k : null,
          children: [
            f && /* @__PURE__ */ F.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
_s.propTypes = {
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
  gaData: wi,
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
var Ts = { exports: {} }, Ve = {}, ho;
function Ac() {
  if (ho) return Ve;
  ho = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), $ = Symbol.for("react.client.reference");
  function E(k) {
    if (typeof k == "object" && k !== null) {
      var D = k.$$typeof;
      switch (D) {
        case e:
          switch (k = k.type, k) {
            case r:
            case a:
            case n:
            case p:
            case f:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case d:
                case m:
                case x:
                case _:
                  return k;
                case s:
                  return k;
                default:
                  return D;
              }
          }
        case t:
          return D;
      }
    }
  }
  return Ve.ContextConsumer = s, Ve.ContextProvider = d, Ve.Element = e, Ve.ForwardRef = m, Ve.Fragment = r, Ve.Lazy = x, Ve.Memo = _, Ve.Portal = t, Ve.Profiler = a, Ve.StrictMode = n, Ve.Suspense = p, Ve.SuspenseList = f, Ve.isContextConsumer = function(k) {
    return E(k) === s;
  }, Ve.isContextProvider = function(k) {
    return E(k) === d;
  }, Ve.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, Ve.isForwardRef = function(k) {
    return E(k) === m;
  }, Ve.isFragment = function(k) {
    return E(k) === r;
  }, Ve.isLazy = function(k) {
    return E(k) === x;
  }, Ve.isMemo = function(k) {
    return E(k) === _;
  }, Ve.isPortal = function(k) {
    return E(k) === t;
  }, Ve.isProfiler = function(k) {
    return E(k) === a;
  }, Ve.isStrictMode = function(k) {
    return E(k) === n;
  }, Ve.isSuspense = function(k) {
    return E(k) === p;
  }, Ve.isSuspenseList = function(k) {
    return E(k) === f;
  }, Ve.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === a || k === n || k === p || k === f || k === L || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === _ || k.$$typeof === d || k.$$typeof === s || k.$$typeof === m || k.$$typeof === $ || k.getModuleId !== void 0);
  }, Ve.typeOf = E, Ve;
}
Ts.exports = Ac();
var Es = Ts.exports;
function Cc(e) {
  function t(z, O, M, j, b) {
    for (var ee = 0, A = 0, ae = 0, Q = 0, te, X, ne = 0, de = 0, J, ge = J = te = 0, re = 0, se = 0, Ue = 0, le = 0, ot = M.length, We = ot - 1, Se, q = "", ie = "", Xe = "", Ne = "", De; re < ot; ) {
      if (X = M.charCodeAt(re), re === We && A + Q + ae + ee !== 0 && (A !== 0 && (X = A === 47 ? 10 : 47), Q = ae = ee = 0, ot++, We++), A + Q + ae + ee === 0) {
        if (re === We && (0 < se && (q = q.replace(L, "")), 0 < q.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              q += M.charAt(re);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (q = q.trim(), te = q.charCodeAt(0), J = 1, le = ++re; re < ot; ) {
              switch (X = M.charCodeAt(re)) {
                case 123:
                  J++;
                  break;
                case 125:
                  J--;
                  break;
                case 47:
                  switch (X = M.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < We; ++ge)
                          switch (M.charCodeAt(ge)) {
                            case 47:
                              if (X === 42 && M.charCodeAt(ge - 1) === 42 && re + 2 !== ge) {
                                re = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                re = ge + 1;
                                break e;
                              }
                          }
                        re = ge;
                      }
                  }
                  break;
                case 91:
                  X++;
                case 40:
                  X++;
                case 34:
                case 39:
                  for (; re++ < We && M.charCodeAt(re) !== X; )
                    ;
              }
              if (J === 0) break;
              re++;
            }
            switch (J = M.substring(le, re), te === 0 && (te = (q = q.replace(x, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < se && (q = q.replace(L, "")), X = q.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    se = O;
                    break;
                  default:
                    se = lt;
                }
                if (J = t(O, se, J, X, b + 1), le = J.length, 0 < Oe && (se = r(lt, q, Ue), De = m(3, J, se, O, Re, me, le, X, b, j), q = se.join(""), De !== void 0 && (le = (J = De.trim()).length) === 0 && (X = 0, J = "")), 0 < le) switch (X) {
                  case 115:
                    q = q.replace(ce, d);
                  case 100:
                  case 109:
                  case 45:
                    J = q + "{" + J + "}";
                    break;
                  case 107:
                    q = q.replace(W, "$1 $2"), J = q + "{" + J + "}", J = Ee === 1 || Ee === 2 && s("@" + J, 3) ? "@-webkit-" + J + "@" + J : "@" + J;
                    break;
                  default:
                    J = q + J, j === 112 && (J = (ie += J, ""));
                }
                else J = "";
                break;
              default:
                J = t(O, r(O, q, Ue), J, j, b + 1);
            }
            Xe += J, J = Ue = se = ge = te = 0, q = "", X = M.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (q = (0 < se ? q.replace(L, "") : q).trim(), 1 < (le = q.length)) switch (ge === 0 && (te = q.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (le = (q = q.replace(" ", ":")).length), 0 < Oe && (De = m(1, q, O, z, Re, me, ie.length, j, b, j)) !== void 0 && (le = (q = De.trim()).length) === 0 && (q = "\0\0"), te = q.charCodeAt(0), X = q.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  Ne += q + M.charAt(re);
                  break;
                }
              default:
                q.charCodeAt(le - 1) !== 58 && (ie += a(q, te, X, q.charCodeAt(2)));
            }
            Ue = se = ge = te = 0, q = "", X = M.charCodeAt(++re);
        }
      }
      switch (X) {
        case 13:
        case 10:
          A === 47 ? A = 0 : 1 + te === 0 && j !== 107 && 0 < q.length && (se = 1, q += "\0"), 0 < Oe * et && m(0, q, O, z, Re, me, ie.length, j, b, j), me = 1, Re++;
          break;
        case 59:
        case 125:
          if (A + Q + ae + ee === 0) {
            me++;
            break;
          }
        default:
          switch (me++, Se = M.charAt(re), X) {
            case 9:
            case 32:
              if (Q + ee + A === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  Se = "";
                  break;
                default:
                  X !== 32 && (Se = " ");
              }
              break;
            case 0:
              Se = "\\0";
              break;
            case 12:
              Se = "\\f";
              break;
            case 11:
              Se = "\\v";
              break;
            case 38:
              Q + A + ee === 0 && (se = Ue = 1, Se = "\f" + Se);
              break;
            case 108:
              if (Q + A + ee + Pe === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && M.charCodeAt(re - 3) === 58 && (Pe = ne);
                case 8:
                  de === 111 && (Pe = de);
              }
              break;
            case 58:
              Q + A + ee === 0 && (ge = re);
              break;
            case 44:
              A + ae + Q + ee === 0 && (se = 1, Se += "\r");
              break;
            case 34:
            case 39:
              A === 0 && (Q = Q === X ? 0 : Q === 0 ? X : Q);
              break;
            case 91:
              Q + A + ae === 0 && ee++;
              break;
            case 93:
              Q + A + ae === 0 && ee--;
              break;
            case 41:
              Q + A + ee === 0 && ae--;
              break;
            case 40:
              if (Q + A + ee === 0) {
                if (te === 0) switch (2 * ne + 3 * de) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ae++;
              }
              break;
            case 64:
              A + ae + Q + ee + ge + J === 0 && (J = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + ee + ae)) switch (A) {
                case 0:
                  switch (2 * X + 3 * M.charCodeAt(re + 1)) {
                    case 235:
                      A = 47;
                      break;
                    case 220:
                      le = re, A = 42;
                  }
                  break;
                case 42:
                  X === 47 && ne === 42 && le + 2 !== re && (M.charCodeAt(le + 2) === 33 && (ie += M.substring(le, re + 1)), Se = "", A = 0);
              }
          }
          A === 0 && (q += Se);
      }
      de = ne, ne = X, re++;
    }
    if (le = ie.length, 0 < le) {
      if (se = O, 0 < Oe && (De = m(2, ie, se, z, Re, me, le, j, b, j), De !== void 0 && (ie = De).length === 0)) return Ne + ie + Xe;
      if (ie = se.join(",") + "{" + ie + "}", Ee * Pe !== 0) {
        switch (Ee !== 2 || s(ie, 2) || (Pe = 0), Pe) {
          case 111:
            ie = ie.replace(V, ":-moz-$1") + ie;
            break;
          case 112:
            ie = ie.replace(G, "::-webkit-input-$1") + ie.replace(G, "::-moz-$1") + ie.replace(G, ":-ms-input-$1") + ie;
        }
        Pe = 0;
      }
    }
    return Ne + ie + Xe;
  }
  function r(z, O, M) {
    var j = O.trim().split(D);
    O = j;
    var b = j.length, ee = z.length;
    switch (ee) {
      case 0:
      case 1:
        var A = 0;
        for (z = ee === 0 ? "" : z[0] + " "; A < b; ++A)
          O[A] = n(z, O[A], M).trim();
        break;
      default:
        var ae = A = 0;
        for (O = []; A < b; ++A)
          for (var Q = 0; Q < ee; ++Q)
            O[ae++] = n(z[Q] + " ", j[A], M).trim();
    }
    return O;
  }
  function n(z, O, M) {
    var j = O.charCodeAt(0);
    switch (33 > j && (j = (O = O.trim()).charCodeAt(0)), j) {
      case 38:
        return O.replace(H, "$1" + z.trim());
      case 58:
        return z.trim() + O.replace(H, "$1" + z.trim());
      default:
        if (0 < 1 * M && 0 < O.indexOf("\f")) return O.replace(H, (z.charCodeAt(0) === 58 ? "" : "$1") + z.trim());
    }
    return z + O;
  }
  function a(z, O, M, j) {
    var b = z + ";", ee = 2 * O + 3 * M + 4 * j;
    if (ee === 944) {
      z = b.indexOf(":", 9) + 1;
      var A = b.substring(z, b.length - 1).trim();
      return A = b.substring(0, z).trim() + A + ";", Ee === 1 || Ee === 2 && s(A, 1) ? "-webkit-" + A + A : A;
    }
    if (Ee === 0 || Ee === 2 && !s(b, 1)) return b;
    switch (ee) {
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
        if (0 < b.indexOf("image-set(", 11)) return b.replace(ue, "$1-webkit-$2") + b;
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
        return A = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + A + "-webkit-" + b + "-ms-flex-pack" + A + b;
      case 1005:
        return E.test(b) ? b.replace($, ":-webkit-") + b.replace($, ":-moz-") + b : b;
      case 1e3:
        switch (A = b.substring(13).trim(), O = A.indexOf("-") + 1, A.charCodeAt(0) + A.charCodeAt(O)) {
          case 226:
            A = b.replace(T, "tb");
            break;
          case 232:
            A = b.replace(T, "tb-rl");
            break;
          case 220:
            A = b.replace(T, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + A + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (O = (b = z).length - 10, A = (b.charCodeAt(O) === 33 ? b.substring(0, O) : b).substring(z.indexOf(":", 7) + 1).trim(), ee = A.charCodeAt(0) + (A.charCodeAt(7) | 0)) {
          case 203:
            if (111 > A.charCodeAt(8)) break;
          case 115:
            b = b.replace(A, "-webkit-" + A) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(A, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + b.replace(A, "-webkit-" + A) + ";" + b.replace(A, "-ms-" + A + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45) switch (b.charCodeAt(6)) {
          case 105:
            return A = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + A + "-ms-flex-" + A + b;
          case 115:
            return "-webkit-" + b + "-ms-flex-item-" + b.replace(Ie, "") + b;
          default:
            return "-webkit-" + b + "-ms-flex-line-pack" + b.replace("align-content", "").replace(Ie, "") + b;
        }
        break;
      case 973:
      case 989:
        if (b.charCodeAt(3) !== 45 || b.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Ge.test(z) === !0) return (A = z.substring(z.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(z.replace("stretch", "fill-available"), O, M, j).replace(":fill-available", ":stretch") : b.replace(A, "-webkit-" + A) + b.replace(A, "-moz-" + A.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, M + j === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10)) return b.substring(0, b.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(z, O) {
    var M = z.indexOf(O === 1 ? ":" : "{"), j = z.substring(0, O !== 3 ? M : 10);
    return M = z.substring(M + 1, z.length - 1), Be(O !== 2 ? j : j.replace(je, "$1"), M, O);
  }
  function d(z, O) {
    var M = a(O, O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2));
    return M !== O + ";" ? M.replace(_e, " or ($1)").substring(4) : "(" + O + ")";
  }
  function m(z, O, M, j, b, ee, A, ae, Q, te) {
    for (var X = 0, ne = O, de; X < Oe; ++X)
      switch (de = Fe[X].call(_, z, ne, M, j, b, ee, A, ae, Q, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = de;
      }
    if (ne !== O) return ne;
  }
  function p(z) {
    switch (z) {
      case void 0:
      case null:
        Oe = Fe.length = 0;
        break;
      default:
        if (typeof z == "function") Fe[Oe++] = z;
        else if (typeof z == "object") for (var O = 0, M = z.length; O < M; ++O)
          p(z[O]);
        else et = !!z | 0;
    }
    return p;
  }
  function f(z) {
    return z = z.prefix, z !== void 0 && (Be = null, z ? typeof z != "function" ? Ee = 1 : (Ee = 2, Be = z) : Ee = 0), f;
  }
  function _(z, O) {
    var M = z;
    if (33 > M.charCodeAt(0) && (M = M.trim()), oe = M, M = [oe], 0 < Oe) {
      var j = m(-1, O, M, M, Re, me, 0, 0, 0, 0);
      j !== void 0 && typeof j == "string" && (O = j);
    }
    var b = t(lt, M, O, 0, 0);
    return 0 < Oe && (j = m(-2, b, M, M, Re, me, b.length, 0, 0, 0), j !== void 0 && (b = j)), oe = "", Pe = 0, me = Re = 1, b;
  }
  var x = /^\0+/g, L = /[\0\r\f]/g, $ = /: */g, E = /zoo|gra/, k = /([,: ])(transform)/g, D = /,\r+?/g, H = /([\t\r\n ])*\f?&/g, W = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, V = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, _e = /([\s\S]*?);/g, Ie = /-self|flex-/g, je = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ge = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, me = 1, Re = 1, Pe = 0, Ee = 1, lt = [], Fe = [], Oe = 0, Be = null, et = 0, oe = "";
  return _.use = p, _.set = f, e !== void 0 && f(e), _;
}
var Oc = {
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
function Rc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Pc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, mo = /* @__PURE__ */ Rc(
  function(e) {
    return Pc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), As = { exports: {} }, ze = {}, go;
function Nc() {
  if (go) return ze;
  go = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, L = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, H = e ? Symbol.for("react.responder") : 60118, W = e ? Symbol.for("react.scope") : 60119;
  function G(T) {
    if (typeof T == "object" && T !== null) {
      var ce = T.$$typeof;
      switch (ce) {
        case t:
          switch (T = T.type, T) {
            case p:
            case f:
            case n:
            case s:
            case a:
            case x:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case m:
                case _:
                case E:
                case $:
                case d:
                  return T;
                default:
                  return ce;
              }
          }
        case r:
          return ce;
      }
    }
  }
  function V(T) {
    return G(T) === f;
  }
  return ze.AsyncMode = p, ze.ConcurrentMode = f, ze.ContextConsumer = m, ze.ContextProvider = d, ze.Element = t, ze.ForwardRef = _, ze.Fragment = n, ze.Lazy = E, ze.Memo = $, ze.Portal = r, ze.Profiler = s, ze.StrictMode = a, ze.Suspense = x, ze.isAsyncMode = function(T) {
    return V(T) || G(T) === p;
  }, ze.isConcurrentMode = V, ze.isContextConsumer = function(T) {
    return G(T) === m;
  }, ze.isContextProvider = function(T) {
    return G(T) === d;
  }, ze.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, ze.isForwardRef = function(T) {
    return G(T) === _;
  }, ze.isFragment = function(T) {
    return G(T) === n;
  }, ze.isLazy = function(T) {
    return G(T) === E;
  }, ze.isMemo = function(T) {
    return G(T) === $;
  }, ze.isPortal = function(T) {
    return G(T) === r;
  }, ze.isProfiler = function(T) {
    return G(T) === s;
  }, ze.isStrictMode = function(T) {
    return G(T) === a;
  }, ze.isSuspense = function(T) {
    return G(T) === x;
  }, ze.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === n || T === f || T === s || T === a || T === x || T === L || typeof T == "object" && T !== null && (T.$$typeof === E || T.$$typeof === $ || T.$$typeof === d || T.$$typeof === m || T.$$typeof === _ || T.$$typeof === D || T.$$typeof === H || T.$$typeof === W || T.$$typeof === k);
  }, ze.typeOf = G, ze;
}
As.exports = Nc();
var Ic = As.exports, Si = Ic, Dc = {
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
}, Lc = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, jc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Cs = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ki = {};
ki[Si.ForwardRef] = jc;
ki[Si.Memo] = Cs;
function yo(e) {
  return Si.isMemo(e) ? Cs : ki[e.$$typeof] || Dc;
}
var Fc = Object.defineProperty, Mc = Object.getOwnPropertyNames, bo = Object.getOwnPropertySymbols, zc = Object.getOwnPropertyDescriptor, $c = Object.getPrototypeOf, vo = Object.prototype;
function Os(e, t, r) {
  if (typeof t != "string") {
    if (vo) {
      var n = $c(t);
      n && n !== vo && Os(e, n, r);
    }
    var a = Mc(t);
    bo && (a = a.concat(bo(t)));
    for (var s = yo(e), d = yo(t), m = 0; m < a.length; ++m) {
      var p = a[m];
      if (!Lc[p] && !(r && r[p]) && !(d && d[p]) && !(s && s[p])) {
        var f = zc(t, p);
        try {
          Fc(e, p, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var Uc = Os;
const Hc = /* @__PURE__ */ vi(Uc);
var bt = { env: { NODE_ENV: "production" } };
function yr() {
  return (yr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var wo = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, ei = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Es.typeOf(e);
}, ca = Object.freeze([]), _r = Object.freeze({});
function wn(e) {
  return typeof e == "function";
}
function So(e) {
  return e.displayName || e.name || "Component";
}
function xi(e) {
  return e && typeof e.styledComponentId == "string";
}
var Hr = typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_ATTR || bt.env.SC_ATTR) || "data-styled", _i = typeof window < "u" && "HTMLElement" in window, Bc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && bt.env.REACT_APP_SC_DISABLE_SPEEDY : bt.env.SC_DISABLE_SPEEDY !== void 0 && bt.env.SC_DISABLE_SPEEDY !== "" ? bt.env.SC_DISABLE_SPEEDY !== "false" && bt.env.SC_DISABLE_SPEEDY : bt.env.NODE_ENV !== "production"));
function Tn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Wc = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, d = s; r >= d; ) (d <<= 1) < 0 && Tn(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(a), this.length = d;
      for (var m = s; m < d; m++) this.groupSizes[m] = 0;
    }
    for (var p = this.indexOfGroup(r + 1), f = 0, _ = n.length; f < _; f++) this.tag.insertRule(p, n[f]) && (this.groupSizes[r]++, p++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var d = a; d < s; d++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), d = s + a, m = s; m < d; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), na = /* @__PURE__ */ new Map(), ua = /* @__PURE__ */ new Map(), yn = 1, Gn = function(e) {
  if (na.has(e)) return na.get(e);
  for (; ua.has(yn); ) yn++;
  var t = yn++;
  return na.set(e, t), ua.set(t, e), t;
}, Vc = function(e) {
  return ua.get(e);
}, qc = function(e, t) {
  t >= yn && (yn = t + 1), na.set(e, t), ua.set(t, e);
}, Gc = "style[" + Hr + '][data-styled-version="5.3.11"]', Yc = new RegExp("^" + Hr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Xc = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, d = a.length; s < d; s++) (n = a[s]) && e.registerName(t, n);
}, Zc = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var d = r[a].trim();
    if (d) {
      var m = d.match(Yc);
      if (m) {
        var p = 0 | parseInt(m[1], 10), f = m[2];
        p !== 0 && (qc(f, p), Xc(e, f, m[3]), e.getTag().insertRules(p, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, Jc = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Rs = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(m) {
    for (var p = m.childNodes, f = p.length; f >= 0; f--) {
      var _ = p[f];
      if (_ && _.nodeType === 1 && _.hasAttribute(Hr)) return _;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Hr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Jc();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, Kc = function() {
  function e(r) {
    var n = this.element = Rs(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, d = 0, m = s.length; d < m; d++) {
        var p = s[d];
        if (p.ownerNode === a) return p;
      }
      Tn(17);
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
}(), Qc = function() {
  function e(r) {
    var n = this.element = Rs(r);
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
}(), eu = function() {
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
}(), ko = _i, tu = { isServer: !_i, useCSSOMInjection: !Bc }, Ps = function() {
  function e(r, n, a) {
    r === void 0 && (r = _r), n === void 0 && (n = {}), this.options = yr({}, tu, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && _i && ko && (ko = !1, function(s) {
      for (var d = document.querySelectorAll(Gc), m = 0, p = d.length; m < p; m++) {
        var f = d[m];
        f && f.getAttribute(Hr) !== "active" && (Zc(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Gn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(yr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new eu(d) : s ? new Kc(d) : new Qc(d), new Wc(r)));
    var r, n, a, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Gn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(Gn(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Gn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", d = 0; d < a; d++) {
        var m = Vc(d);
        if (m !== void 0) {
          var p = r.names.get(m), f = n.getGroup(d);
          if (p && f && p.size) {
            var _ = Hr + ".g" + d + '[id="' + m + '"]', x = "";
            p !== void 0 && p.forEach(function(L) {
              L.length > 0 && (x += L + ",");
            }), s += "" + f + _ + '{content:"' + x + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), ru = /(a)(d)/gi, xo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ti(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = xo(t % 52) + r;
  return (xo(t % 52) + r).replace(ru, "$1-$2");
}
var $r = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Ns = function(e) {
  return $r(5381, e);
};
function nu(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (wn(r) && !xi(r)) return !1;
  }
  return !0;
}
var au = Ns("5.3.11"), iu = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && nu(t), this.componentId = r, this.baseHash = $r(au, r), this.baseStyle = n, Ps.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Br(this.rules, t, r, n).join(""), m = ti($r(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(a, m)) {
        var p = n(d, "." + m, void 0, a);
        r.insertRules(a, m, p);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, _ = $r(this.baseHash, n.hash), x = "", L = 0; L < f; L++) {
        var $ = this.rules[L];
        if (typeof $ == "string") x += $;
        else if ($) {
          var E = Br($, t, r, n), k = Array.isArray(E) ? E.join("") : E;
          _ = $r(_, k + L), x += k;
        }
      }
      if (x) {
        var D = ti(_ >>> 0);
        if (!r.hasNameForId(a, D)) {
          var H = n(x, "." + D, void 0, a);
          r.insertRules(a, D, H);
        }
        s.push(D);
      }
    }
    return s.join(" ");
  }, e;
}(), ou = /^\s*\/\/.*$/gm, su = [":", "[", ".", "#"];
function lu(e) {
  var t, r, n, a, s = _r, d = s.options, m = d === void 0 ? _r : d, p = s.plugins, f = p === void 0 ? ca : p, _ = new Cc(m), x = [], L = /* @__PURE__ */ function(k) {
    function D(H) {
      if (H) try {
        k(H + "}");
      } catch {
      }
    }
    return function(H, W, G, V, T, ce, _e, Ie, je, Ge) {
      switch (H) {
        case 1:
          if (je === 0 && W.charCodeAt(0) === 64) return k(W + ";"), "";
          break;
        case 2:
          if (Ie === 0) return W + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return k(G[0] + W), "";
            default:
              return W + (Ge === 0 ? "/*|*/" : "");
          }
        case -2:
          W.split("/*|*/}").forEach(D);
      }
    };
  }(function(k) {
    x.push(k);
  }), $ = function(k, D, H) {
    return D === 0 && su.indexOf(H[r.length]) !== -1 || H.match(a) ? k : "." + t;
  };
  function E(k, D, H, W) {
    W === void 0 && (W = "&");
    var G = k.replace(ou, ""), V = D && H ? H + " " + D + " { " + G + " }" : G;
    return t = W, r = D, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), _(H || !D ? "" : D, V);
  }
  return _.use([].concat(f, [function(k, D, H) {
    k === 2 && H.length && H[0].lastIndexOf(r) > 0 && (H[0] = H[0].replace(n, $));
  }, L, function(k) {
    if (k === -2) {
      var D = x;
      return x = [], D;
    }
  }])), E.hash = f.length ? f.reduce(function(k, D) {
    return D.name || Tn(15), $r(k, D.name);
  }, 5381).toString() : "", E;
}
var Is = ft.createContext();
Is.Consumer;
var Ds = ft.createContext(), cu = (Ds.Consumer, new Ps()), ri = lu();
function uu() {
  return wr(Is) || cu;
}
function du() {
  return wr(Ds) || ri;
}
var fu = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = ri);
      var d = n.name + s.hash;
      a.hasNameForId(n.id, d) || a.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return Tn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ri), this.name + t.hash;
  }, e;
}(), pu = /([A-Z])/, hu = /([A-Z])/g, mu = /^ms-/, gu = function(e) {
  return "-" + e.toLowerCase();
};
function _o(e) {
  return pu.test(e) ? e.replace(hu, gu).replace(mu, "-ms-") : e;
}
var To = function(e) {
  return e == null || e === !1 || e === "";
};
function Br(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, m = e.length; d < m; d += 1) (a = Br(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (To(e)) return "";
  if (xi(e)) return "." + e.styledComponentId;
  if (wn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var p = e(t);
    return Br(p, t, r, n);
  }
  var f;
  return e instanceof fu ? r ? (e.inject(r, n), e.getName(n)) : e : ei(e) ? function _(x, L) {
    var $, E, k = [];
    for (var D in x) x.hasOwnProperty(D) && !To(x[D]) && (Array.isArray(x[D]) && x[D].isCss || wn(x[D]) ? k.push(_o(D) + ":", x[D], ";") : ei(x[D]) ? k.push.apply(k, _(x[D], D)) : k.push(_o(D) + ": " + ($ = D, (E = x[D]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || $ in Oc || $.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return L ? [L + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var Eo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function yu(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return wn(e) || ei(e) ? Eo(Br(wo(ca, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Eo(Br(wo(e, r)));
}
var bu = function(e, t, r) {
  return r === void 0 && (r = _r), e.theme !== r.theme && e.theme || t || r.theme;
}, vu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, wu = /(^-|-$)/g;
function $a(e) {
  return e.replace(vu, "-").replace(wu, "");
}
var Su = function(e) {
  return ti(Ns(e) >>> 0);
};
function Yn(e) {
  return typeof e == "string" && bt.env.NODE_ENV === "production";
}
var ni = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ku = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function xu(e, t, r) {
  var n = e[r];
  ni(t) && ni(n) ? Ls(n, t) : e[r] = t;
}
function Ls(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (ni(d)) for (var m in d) ku(m) && xu(e, d[m], m);
  }
  return e;
}
var js = ft.createContext();
js.Consumer;
var Ua = {};
function Fs(e, t, r) {
  var n = xi(e), a = !Yn(e), s = t.attrs, d = s === void 0 ? ca : s, m = t.componentId, p = m === void 0 ? function(W, G) {
    var V = typeof W != "string" ? "sc" : $a(W);
    Ua[V] = (Ua[V] || 0) + 1;
    var T = V + "-" + Su("5.3.11" + V + Ua[V]);
    return G ? G + "-" + T : T;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, _ = f === void 0 ? function(W) {
    return Yn(W) ? "styled." + W : "Styled(" + So(W) + ")";
  }(e) : f, x = t.displayName && t.componentId ? $a(t.displayName) + "-" + t.componentId : t.componentId || p, L = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, $ = t.shouldForwardProp;
  n && e.shouldForwardProp && ($ = t.shouldForwardProp ? function(W, G, V) {
    return e.shouldForwardProp(W, G, V) && t.shouldForwardProp(W, G, V);
  } : e.shouldForwardProp);
  var E, k = new iu(r, x, n ? e.componentStyle : void 0), D = k.isStatic && d.length === 0, H = function(W, G) {
    return function(V, T, ce, _e) {
      var Ie = V.attrs, je = V.componentStyle, Ge = V.defaultProps, ue = V.foldedComponentIds, me = V.shouldForwardProp, Re = V.styledComponentId, Pe = V.target, Ee = function(j, b, ee) {
        j === void 0 && (j = _r);
        var A = yr({}, b, { theme: j }), ae = {};
        return ee.forEach(function(Q) {
          var te, X, ne, de = Q;
          for (te in wn(de) && (de = de(A)), de) A[te] = ae[te] = te === "className" ? (X = ae[te], ne = de[te], X && ne ? X + " " + ne : X || ne) : de[te];
        }), [A, ae];
      }(bu(T, wr(js), Ge) || _r, T, Ie), lt = Ee[0], Fe = Ee[1], Oe = function(j, b, ee, A) {
        var ae = uu(), Q = du(), te = b ? j.generateAndInjectStyles(_r, ae, Q) : j.generateAndInjectStyles(ee, ae, Q);
        return te;
      }(je, _e, lt), Be = ce, et = Fe.$as || T.$as || Fe.as || T.as || Pe, oe = Yn(et), z = Fe !== T ? yr({}, T, {}, Fe) : T, O = {};
      for (var M in z) M[0] !== "$" && M !== "as" && (M === "forwardedAs" ? O.as = z[M] : (me ? me(M, mo, et) : !oe || mo(M)) && (O[M] = z[M]));
      return T.style && Fe.style !== T.style && (O.style = yr({}, T.style, {}, Fe.style)), O.className = Array.prototype.concat(ue, Re, Oe !== Re ? Oe : null, T.className, Fe.className).filter(Boolean).join(" "), O.ref = Be, cs(et, O);
    }(E, W, G, D);
  };
  return H.displayName = _, (E = ft.forwardRef(H)).attrs = L, E.componentStyle = k, E.displayName = _, E.shouldForwardProp = $, E.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ca, E.styledComponentId = x, E.target = n ? e.target : e, E.withComponent = function(W) {
    var G = t.componentId, V = function(ce, _e) {
      if (ce == null) return {};
      var Ie, je, Ge = {}, ue = Object.keys(ce);
      for (je = 0; je < ue.length; je++) Ie = ue[je], _e.indexOf(Ie) >= 0 || (Ge[Ie] = ce[Ie]);
      return Ge;
    }(t, ["componentId"]), T = G && G + "-" + (Yn(W) ? W : $a(So(W)));
    return Fs(W, yr({}, V, { attrs: L, componentId: T }), r);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(W) {
    this._foldedDefaultProps = n ? Ls({}, e.defaultProps, W) : W;
  } }), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), a && Hc(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var tr = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = _r), !Es.isValidElementType(n)) return Tn(1, String(n));
    var s = function() {
      return r(n, a, yu.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, yr({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, yr({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(Fs, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  tr[e] = tr(e);
});
tr.div`
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
`;
l.arrayOf(
  l.shape({
    text: l.string.isRequired,
    targetIdName: l.string.isRequired,
    icon: l.arrayOf(l.string)
  })
).isRequired, l.string.isRequired, l.bool;
function ga(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var _u = /* @__PURE__ */ function() {
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
}(), jr = function() {
  return jr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, jr.apply(this, arguments);
}, Tu = function(e, t, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(d) {
      d(s);
    });
  }
  return new (r || (r = Promise))(function(s, d) {
    function m(_) {
      try {
        f(n.next(_));
      } catch (x) {
        d(x);
      }
    }
    function p(_) {
      try {
        f(n.throw(_));
      } catch (x) {
        d(x);
      }
    }
    function f(_) {
      _.done ? s(_.value) : a(_.value).then(m, p);
    }
    f((n = n.apply(e, [])).next());
  });
}, Eu = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, a, s, d;
  return d = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function m(f) {
    return function(_) {
      return p([f, _]);
    };
  }
  function p(f) {
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
    } catch (_) {
      f = [6, _], a = 0;
    } finally {
      n = s = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, Ms = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, Au = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, Cu = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, Ou = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function Ru(e, t, r) {
  var n = t.height, a = t.width, s = Ms(t, ["height", "width"]), d = jr({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), m = window.open(e, "", Object.keys(d).map(function(f) {
    return "".concat(f, "=").concat(d[f]);
  }).join(", "));
  if (r)
    var p = window.setInterval(function() {
      try {
        (m === null || m.closed) && (window.clearInterval(p), r(m));
      } catch (f) {
        console.error(f);
      }
    }, 1e3);
  return m;
}
var Pu = (
  /** @class */
  function(e) {
    _u(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, s = a.onShareWindowClose, d = a.windowHeight, m = d === void 0 ? 400 : d, p = a.windowPosition, f = p === void 0 ? "windowCenter" : p, _ = a.windowWidth, x = _ === void 0 ? 550 : _, L = jr({ height: m, width: x }, f === "windowCenter" ? Cu(x, m) : Ou(x, m));
        Ru(n, L, s);
      }, r.handleClick = function(n) {
        return Tu(r, void 0, void 0, function() {
          var a, s, d, m, p, f, _, x, L, $;
          return Eu(this, function(E) {
            switch (E.label) {
              case 0:
                return a = this.props, s = a.beforeOnClick, d = a.disabled, m = a.networkLink, p = a.onClick, f = a.url, _ = a.openShareDialogOnClick, x = a.opts, L = m(f, x), d ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? ($ = s(), Au($) ? [4, $] : [3, 2]) : [3, 2]);
              case 1:
                E.sent(), E.label = 2;
              case 2:
                return _ && this.openShareDialog(L), p && p(n, L), [
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
      var n = r.children, a = r.className, s = r.disabled, d = r.disabledStyle, m = r.forwardedRef;
      r.networkLink;
      var p = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var f = r.resetButtonStyle, _ = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var x = Ms(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), L = er("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, a), $ = jr(jr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, _), s && d);
      return ft.createElement("button", jr({}, x, { "aria-label": x["aria-label"] || p, className: L, onClick: this.handleClick, ref: m, style: $ }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }($l)
), da = function() {
  return da = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, da.apply(this, arguments);
};
function ya(e, t, r, n) {
  function a(s, d) {
    var m = r(s), p = da({}, s), f = Object.keys(m);
    return f.forEach(function(_) {
      delete p[_];
    }), ft.createElement(Pu, da({}, n, p, { forwardedRef: d, networkName: e, networkLink: t, opts: r(s) }));
  }
  return a.displayName = "ShareButton-".concat(e), bi(a);
}
function Nu(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + ga({ subject: r, body: n ? n + a + e : e });
}
ya("email", Nu, function(e) {
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
var Iu = /* @__PURE__ */ function() {
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
}(), Du = (
  /** @class */
  function(e) {
    Iu(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function bn(e, t) {
  if (!e)
    throw new Du(t);
}
function Lu(e, t) {
  var r = t.quote, n = t.hashtag;
  return bn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + ga({
    u: e,
    quote: r,
    hashtag: n
  });
}
ya("facebook", Lu, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function ju(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return bn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + ga({ url: e, mini: "true", title: r, summary: n, source: a });
}
ya("linkedin", ju, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Fu(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, s = a === void 0 ? [] : a, d = t.related, m = d === void 0 ? [] : d;
  return bn(e, "twitter.url"), bn(Array.isArray(s), "twitter.hashtags is not an array"), bn(Array.isArray(m), "twitter.related is not an array"), "https://twitter.com/share" + ga({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: m.length > 0 ? m.join(",") : void 0
  });
}
ya("twitter", Fu, function(e) {
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
function ai(e) {
  "@babel/helpers - typeof";
  return ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ai(e);
}
var Mu = (typeof window > "u" ? "undefined" : ai(window)) === "object" && window.Element || function() {
};
function zu(e, t, r) {
  if (!(e[t] instanceof Mu))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, zu, l.shape({
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
tr.div`
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
tr.div`
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
const $u = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, zs = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  color: a = "gray",
  disabled: s,
  element: d = "button",
  innerRef: m,
  href: p,
  onClick: f,
  ..._
}) => {
  const x = er("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: s
  });
  let L = d;
  return p && d === "button" && (L = "a"), /* @__PURE__ */ F.jsx(
    ur,
    {
      gaData: {
        ...$u,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ F.jsx(
        L,
        {
          type: L === "button" && f ? "button" : void 0,
          ..._,
          className: x,
          href: p,
          ref: m,
          onClick: f,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
zs.propTypes = {
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
  gaData: wi,
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
const $s = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: s,
  fetchPriority: d = "auto",
  width: m,
  height: p,
  cardLink: f,
  title: _,
  caption: x,
  captionTitle: L,
  border: $,
  dropShadow: E
}) => {
  const k = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: d,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Jl(r) },
    ...s && { "data-testid": s },
    ...m && { width: m },
    ...p && { height: p }
  }, D = er("uds-img", {
    borderless: !$,
    "uds-img-drop-shadow": E
  }), H = (G) => {
    const V = G ? `${k.className} ${G}` : k.className;
    return f ? /* @__PURE__ */ F.jsxs("a", { href: f, children: [
      /* @__PURE__ */ F.jsx("img", { ...k, className: V }),
      /* @__PURE__ */ F.jsx("span", { className: "visually-hidden", children: _ })
    ] }) : /* @__PURE__ */ F.jsx("img", { ...k, className: V });
  }, W = () => /* @__PURE__ */ F.jsx("div", { className: D, children: /* @__PURE__ */ F.jsxs("figure", { className: "figure uds-figure", children: [
    H(),
    x && /* @__PURE__ */ F.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      L && /* @__PURE__ */ F.jsx("h3", { children: L }),
      /* @__PURE__ */ F.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Lr(x)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ F.jsx(F.Fragment, { children: x ? W() : H(D) });
};
$s.propTypes = {
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
const Uu = tr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Hu = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Bu = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Hu(e) ? `mailto:${e}` : e, Wu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, gr = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n,
  imageAltText: a,
  title: s,
  icon: d,
  body: m,
  eventFormat: p = "stack",
  eventLocation: f,
  eventTime: _,
  buttons: x,
  linkLabel: L,
  linkUrl: $,
  tags: E,
  showBorders: k = !0,
  cardLink: D
}) => /* @__PURE__ */ F.jsx(
  Us,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: s,
    icon: d,
    body: m,
    eventFormat: p,
    eventLocation: f,
    eventTime: _,
    buttons: x,
    linkLabel: L,
    linkUrl: $,
    tags: E,
    showBorders: k,
    cardLink: D
  }
);
gr.propTypes = {
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
const Us = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n = "",
  imageAltText: a = "",
  title: s,
  icon: d = void 0,
  body: m = "",
  eventFormat: p = "stack",
  eventLocation: f = "",
  eventTime: _ = "",
  buttons: x = void 0,
  linkLabel: L = void 0,
  linkUrl: $ = void 0,
  tags: E = void 0,
  showBorders: k = !0,
  cardLink: D
}) => {
  const H = er("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !k
  });
  return /* @__PURE__ */ F.jsx(F.Fragment, { children: /* @__PURE__ */ F.jsxs(Uu, { className: H, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ F.jsx(
      $s,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: D,
        title: s
      }
    ),
    !n && d && /* @__PURE__ */ F.jsx(
      "i",
      {
        className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ F.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ F.jsx(
      ii,
      {
        type: e,
        body: m,
        eventFormat: p,
        eventLocation: f,
        eventTime: _,
        title: s,
        buttons: x,
        linkLabel: L,
        linkUrl: $,
        tags: E,
        cardLink: D
      }
    ) }) : /* @__PURE__ */ F.jsx(
      ii,
      {
        type: e,
        body: m,
        eventFormat: p,
        eventLocation: f,
        eventTime: _,
        title: s,
        buttons: x,
        linkLabel: L,
        linkUrl: $,
        tags: E,
        cardLink: D
      }
    )
  ] }) });
};
Us.propTypes = {
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
const ii = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: n = "",
  eventTime: a = "",
  title: s,
  buttons: d = void 0,
  linkLabel: m = void 0,
  linkUrl: p = void 0,
  tags: f = void 0,
  cardLink: _
}) => /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
  !!s && /* @__PURE__ */ F.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ F.jsx("h3", { className: "card-title", children: _ ? /* @__PURE__ */ F.jsx("a", { href: _, children: s }) : s }) }),
  !!t && /* @__PURE__ */ F.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ F.jsx("div", { dangerouslySetInnerHTML: Lr(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ F.jsx(
    Hs,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  d && /* @__PURE__ */ F.jsx("div", { className: "card-buttons", children: d.map((x) => /* @__PURE__ */ F.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ F.jsx(
        _s,
        {
          ariaLabel: x.ariaLabel,
          color: x.color,
          icon: x.icon,
          href: x.href,
          label: x.label,
          onClick: x.onClick,
          size: x.size,
          target: x.target,
          cardTitle: s
        }
      )
    },
    `${x.label}-${x.href}`
  )) }),
  p && m && /* @__PURE__ */ F.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ F.jsx(
    ur,
    {
      gaData: {
        ...Wu,
        section: s,
        text: m
      },
      children: /* @__PURE__ */ F.jsx("a", { href: Bu(p), children: m })
    }
  ) }),
  f && /* @__PURE__ */ F.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((x) => (
    // @ts-ignore
    /* @__PURE__ */ F.jsx(
      zs,
      {
        ariaLabel: x.ariaLabel,
        color: x.color,
        href: x.href,
        label: x.label,
        onClick: x.onClick,
        cardTitle: s
      },
      `${x.label}-${x.href}`
    )
  )) })
] });
ii.propTypes = {
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
const Hs = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ F.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ F.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ F.jsx("div", { children: /* @__PURE__ */ F.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ F.jsx("div", { dangerouslySetInnerHTML: Lr(r) })
  ] }),
  t && /* @__PURE__ */ F.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ F.jsx("div", { children: /* @__PURE__ */ F.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ F.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Lr(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
  r && /* @__PURE__ */ F.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ F.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ F.jsx("div", { children: /* @__PURE__ */ F.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ F.jsx("div", { dangerouslySetInnerHTML: Lr(r) })
  ] }) }),
  t && /* @__PURE__ */ F.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ F.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ F.jsx("div", { children: /* @__PURE__ */ F.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ F.jsx("span", { children: /* @__PURE__ */ F.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Lr(t)
      }
    ) })
  ] }) })
] });
Hs.propTypes = {
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
const Vu = tr.div`
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
`, qu = () => /* @__PURE__ */ F.jsxs(Vu, { children: [
  /* @__PURE__ */ F.jsx("div", {}),
  /* @__PURE__ */ F.jsx("div", {}),
  /* @__PURE__ */ F.jsx("div", {}),
  /* @__PURE__ */ F.jsx("div", {})
] }), Gu = tr.section``, ba = Ul(null), Bs = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: a,
  dataTransformer: s,
  dataFilter: d,
  maxItems: m
}) => {
  const [{ data: p, loading: f, error: _ }, x] = Zl(), [L, $] = zr([]), E = { ...e.dataSource, ...t };
  return Er(() => {
    x(E == null ? void 0 : E.url);
  }, [E == null ? void 0 : E.url]), Er(() => {
    const k = p == null ? void 0 : p.nodes.map(s), D = k == null ? void 0 : k.filter(
      (H) => d(H, t == null ? void 0 : t.filters)
    );
    $(m ? D == null ? void 0 : D.slice(0, m) : D);
  }, [p]), // Init the context to be used on its childrens
  /* @__PURE__ */ F.jsx(ba.Provider, { value: { feeds: L }, children: /* @__PURE__ */ F.jsxs(Gu, { children: [
    n,
    _ ? /* @__PURE__ */ F.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
      f && !(L != null && L.length) && /* @__PURE__ */ F.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ F.jsx(qu, {}) }),
      L != null && L.length ? a : !f && /* @__PURE__ */ F.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
Bs.propTypes = {
  renderHeader: l.element,
  renderBody: l.element,
  maxItems: l.number,
  dataTransformer: l.func,
  dataFilter: l.func,
  noFeedText: l.string
};
const Ti = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), Ei = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
}), Ws = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
}), Vs = l.shape({
  url: l.string,
  filters: l.string
}), Yu = l.shape({
  header: Ti,
  ctaButton: Ei,
  dataSource: Vs,
  maxItems: l.number
}), Xu = tr.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, qs = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const n = { ...e.header, ...t }, a = { ...e.ctaButton, ...r }, s = n.tag || "h2", d = s !== "h2", m = `text-${n.color} ${d ? "h2" : ""}`.trim();
  return /* @__PURE__ */ F.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ F.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ F.jsx(s, { className: m, children: n.text }) }),
        /* @__PURE__ */ F.jsx(Xu, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ F.jsx(
          ur,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: n.text,
              text: a.text
            },
            children: /* @__PURE__ */ F.jsx("a", { className: `btn btn-${a.color}`, href: a.url, children: a.text })
          }
        ) })
      ]
    }
  );
};
qs.propTypes = {
  defaultProps: Yu,
  header: Ti,
  ctaButton: Ei
};
const Gs = ({ children: e }) => /* @__PURE__ */ F.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ F.jsx("div", { className: "col", children: e }) });
Gs.propTypes = {
  children: l.element
};
tr.img`
  width: 100%;
`;
l.oneOf(["heading-hero", "story-hero"]), l.arrayOf(za), l.string;
l.bool, l.bool, l.bool, l.bool, l.string, l.func, l.node, l.bool, l.string, l.bool;
l.oneOf(["default", "bordered"]).isRequired, l.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, l.number, l.number, l.func.isRequired;
tr.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const Zu = bi(function(e, t) {
  const {
    id: r,
    selected: n,
    title: a,
    selectTab: s,
    leftKeyPressed: d,
    rightKeyPressed: m,
    icon: p,
    gaData: f
  } = e, { isReact: _, isBootstrap: x } = xs(), L = Hl(null);
  Bl(t, () => ({
    focus() {
      L.current.focus();
    },
    scrollIntoView() {
      var E, k, D, H, W, G, V;
      const T = ((E = L.current) == null ? void 0 : E.offsetWidth) / 2 + L.current.offsetLeft, ce = ((D = (k = L.current) == null ? void 0 : k.offsetParent) == null ? void 0 : D.scrollLeft) + ((W = (H = L.current) == null ? void 0 : H.offsetParent) == null ? void 0 : W.offsetWidth) / 2;
      (V = (G = L.current) == null ? void 0 : G.offsetParent) == null || V.scrollBy({
        left: T - ce
      });
    }
  }), []);
  const $ = (E) => {
    E.keyCode === 37 ? (E.preventDefault(), d()) : E.keyCode === 39 && (E.preventDefault(), m());
  };
  return /* @__PURE__ */ F.jsx(ur, { gaData: { ...f, text: a }, children: /* @__PURE__ */ F.jsxs(
    "a",
    {
      ref: L,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      "data-bs-toggle": x && "tab",
      onClick: _ && ((E) => s(E, r, a)),
      onKeyDown: _ && $,
      tabIndex: n ? "" : "-1",
      children: [
        a,
        " ",
        p && /* @__PURE__ */ F.jsx("i", { className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} me-1` })
      ]
    }
  ) });
});
Zu.propTypes = {
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
l.oneOf(["video", "youtube"]), l.string, l.string, l.string, l.string, l.string, l.bool;
const Ju = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, Ys = ({ children: e }) => /* @__PURE__ */ F.jsx(
  "div",
  {
    role: "group",
    className: "glide__bullets",
    "data-glide-el": "controls[nav]",
    "data-testid": "bullets-container",
    onClick: (t) => t.stopPropagation(),
    onKeyDown: (t) => t.stopPropagation(),
    children: e
  }
);
Ys.propTypes = {
  children: l.oneOfType([
    l.element,
    l.arrayOf(l.element)
  ]).isRequired
};
const Xs = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ F.jsx(ur, { gaData: Ju, children: /* @__PURE__ */ F.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`
        }
      ) }, `bullet-${r}`)
    );
  return /* @__PURE__ */ F.jsx(Ys, { children: t });
};
Xs.propTypes = {
  buttonCount: l.number.isRequired
};
l.arrayOf(l.string).isRequired, l.func;
const Zs = ({ onClick: e = () => null }) => /* @__PURE__ */ F.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ F.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
Zs.propTypes = {
  onClick: l.func
};
const Js = ({ onClick: e = () => null }) => /* @__PURE__ */ F.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ F.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
Js.propTypes = {
  onClick: l.func
};
const Ao = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, Ks = ({ children: e = null }) => /* @__PURE__ */ F.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
Ks.propTypes = {
  children: l.arrayOf(l.element)
};
const Qs = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ F.jsxs(Ks, { children: [
  /* @__PURE__ */ F.jsx(ur, { gaData: { ...Ao, text: "left chevron" }, children: /* @__PURE__ */ F.jsx(Js, { onClick: e }) }),
  t,
  /* @__PURE__ */ F.jsx(ur, { gaData: { ...Ao, text: "right chevron" }, children: /* @__PURE__ */ F.jsx(Zs, { onClick: e }) })
] });
Qs.propTypes = {
  children: l.element,
  onClick: l.func
};
const el = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ F.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ F.jsx("ul", { className: "glide__slides", children: t });
};
el.propTypes = {
  carouselItems: l.arrayOf(l.object)
};
function Co(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Co(Object(r), !0).forEach(function(n) {
      Qu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Co(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aa(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? aa = function(t) {
    return typeof t;
  } : aa = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, aa(e);
}
function va(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ku(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function wa(e, t, r) {
  return t && Ku(e.prototype, t), e;
}
function Qu(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function ed(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && oi(e, t);
}
function Wr(e) {
  return Wr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Wr(e);
}
function oi(e, t) {
  return oi = Object.setPrototypeOf || function(r, n) {
    return r.__proto__ = n, r;
  }, oi(e, t);
}
function td() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function rd(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function nd(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return rd(e);
}
function ad(e) {
  var t = td();
  return function() {
    var r = Wr(e), n;
    if (t) {
      var a = Wr(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else
      n = r.apply(this, arguments);
    return nd(this, n);
  };
}
function id(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Wr(e), e !== null); )
    ;
  return e;
}
function ia() {
  return typeof Reflect < "u" && Reflect.get ? ia = Reflect.get : ia = function(e, t, r) {
    var n = id(e, t);
    if (n) {
      var a = Object.getOwnPropertyDescriptor(n, t);
      return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
    }
  }, ia.apply(this, arguments);
}
var od = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: "slider",
  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,
  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,
  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,
  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,
  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: !1,
  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: !0,
  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: !0,
  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: !1,
  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,
  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,
  /**
   * A number of slides moved on single swipe.
   *
   * Available types:
   * `` - Moves slider by one slide per swipe
   * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
   *
   * @type {String}
   */
  perSwipe: "",
  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,
  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,
  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,
  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: !0,
  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,
  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
  /**
   * Wait for the animation to finish until the next user input can be processed
   *
   * @type {boolean}
   */
  waitForTransition: !0,
  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,
  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: "ltr",
  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,
  /**
   * Defines how many clones of current viewport will be generated.
   *
   * @type {Number}
   */
  cloningRatio: 1,
  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},
  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    swipeable: "glide--swipeable",
    dragging: "glide--dragging",
    direction: {
      ltr: "glide--ltr",
      rtl: "glide--rtl"
    },
    type: {
      slider: "glide--slider",
      carousel: "glide--carousel"
    },
    slide: {
      clone: "glide__slide--clone",
      active: "glide__slide--active"
    },
    arrow: {
      disabled: "glide__arrow--disabled"
    },
    nav: {
      active: "glide__bullet--active"
    }
  }
};
function vr(e) {
  console.error("[Glide warn]: ".concat(e));
}
function wt(e) {
  return parseInt(e);
}
function sd(e) {
  return parseFloat(e);
}
function si(e) {
  return typeof e == "string";
}
function Vr(e) {
  var t = aa(e);
  return t === "function" || t === "object" && !!e;
}
function fa(e) {
  return typeof e == "function";
}
function tl(e) {
  return typeof e > "u";
}
function li(e) {
  return e.constructor === Array;
}
function ld(e, t, r) {
  var n = {};
  for (var a in t)
    fa(t[a]) ? n[a] = t[a](e, n, r) : vr("Extension must be a function");
  for (var s in n)
    fa(n[s].mount) && n[s].mount();
  return n;
}
function rt(e, t, r) {
  Object.defineProperty(e, t, r);
}
function cd(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function ci(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(a) {
      t.classes.hasOwnProperty(a) && (r.classes[a] = Oo(Oo({}, e.classes[a]), t.classes[a]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var ud = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    va(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return wa(e, [{
    key: "on",
    value: function(t, r) {
      if (li(t)) {
        for (var n = 0; n < t.length; n++)
          this.on(t[n], r);
        return;
      }
      this.hop.call(this.events, t) || (this.events[t] = []);
      var a = this.events[t].push(r) - 1;
      return {
        remove: function() {
          delete this.events[t][a];
        }
      };
    }
    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */
  }, {
    key: "emit",
    value: function(t, r) {
      if (li(t)) {
        for (var n = 0; n < t.length; n++)
          this.emit(t[n], r);
        return;
      }
      this.hop.call(this.events, t) && this.events[t].forEach(function(a) {
        a(r || {});
      });
    }
  }]), e;
}(), dd = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    va(this, e), this._c = {}, this._t = [], this._e = new ud(), this.disabled = !1, this.selector = t, this.settings = ci(od, r), this.index = this.settings.startAt;
  }
  return wa(e, [{
    key: "mount",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Vr(t) ? this._c = ld(this, t, this._e) : vr("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
    }
    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */
  }, {
    key: "mutate",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return li(t) ? this._t = t : vr("You need to provide a array on `mutate()`"), this;
    }
    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */
  }, {
    key: "update",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.settings = ci(this.settings, t), t.hasOwnProperty("startAt") && (this.index = t.startAt), this._e.emit("update"), this;
    }
    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     * `|>` - Move one viewport forward
     * `|<` - Move one viewport backward
     *
     * @param {String} pattern
     * @return {Glide}
     */
  }, {
    key: "go",
    value: function(t) {
      return this._c.Run.make(t), this;
    }
    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */
  }, {
    key: "move",
    value: function(t) {
      return this._c.Transition.disable(), this._c.Move.make(t), this;
    }
    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */
  }, {
    key: "destroy",
    value: function() {
      return this._e.emit("destroy"), this;
    }
    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */
  }, {
    key: "play",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return t && (this.settings.autoplay = t), this._e.emit("play"), this;
    }
    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */
  }, {
    key: "pause",
    value: function() {
      return this._e.emit("pause"), this;
    }
    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */
  }, {
    key: "disable",
    value: function() {
      return this.disabled = !0, this;
    }
    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */
  }, {
    key: "enable",
    value: function() {
      return this.disabled = !1, this;
    }
    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */
  }, {
    key: "on",
    value: function(t, r) {
      return this._e.on(t, r), this;
    }
    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */
  }, {
    key: "isType",
    value: function(t) {
      return this.settings.type === t;
    }
    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */
  }, {
    key: "settings",
    get: function() {
      return this._o;
    },
    set: function(t) {
      Vr(t) ? this._o = t : vr("Options must be an `object` instance.");
    }
    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */
  }, {
    key: "index",
    get: function() {
      return this._i;
    },
    set: function(t) {
      this._i = wt(t);
    }
    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */
  }, {
    key: "type",
    get: function() {
      return this.settings.type;
    }
    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */
  }, {
    key: "disabled",
    get: function() {
      return this._d;
    },
    set: function(t) {
      this._d = !!t;
    }
  }]), e;
}();
function fd(e, t, r) {
  var n = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function() {
      this._o = !1;
    },
    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function(p) {
      var f = this;
      e.disabled || (!e.settings.waitForTransition || e.disable(), this.move = p, r.emit("run.before", this.move), this.calculate(), r.emit("run", this.move), t.Transition.after(function() {
        f.isStart() && r.emit("run.start", f.move), f.isEnd() && r.emit("run.end", f.move), f.isOffset() && (f._o = !1, r.emit("run.offset", f.move)), r.emit("run.after", f.move), e.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var p = this.move, f = this.length, _ = p.steps, x = p.direction, L = 1;
      if (x === "=") {
        if (e.settings.bound && wt(_) > f) {
          e.index = f;
          return;
        }
        e.index = _;
        return;
      }
      if (x === ">" && _ === ">") {
        e.index = f;
        return;
      }
      if (x === "<" && _ === "<") {
        e.index = 0;
        return;
      }
      if (x === "|" && (L = e.settings.perView || 1), x === ">" || x === "|" && _ === ">") {
        var $ = a(L);
        $ > f && (this._o = !0), e.index = s($, L);
        return;
      }
      if (x === "<" || x === "|" && _ === "<") {
        var E = d(L);
        E < 0 && (this._o = !0), e.index = m(E, L);
        return;
      }
      vr("Invalid direction pattern [".concat(x).concat(_, "] has been used"));
    },
    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function() {
      return e.index <= 0;
    },
    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function() {
      return e.index >= this.length;
    },
    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function() {
      var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return p ? this._o ? p === "|>" ? this.move.direction === "|" && this.move.steps === ">" : p === "|<" ? this.move.direction === "|" && this.move.steps === "<" : this.move.direction === p : !1 : this._o;
    },
    /**
     * Checks if bound mode is active
     *
     * @return {Boolean}
     */
    isBound: function() {
      return e.isType("slider") && e.settings.focusAt !== "center" && e.settings.bound;
    }
  };
  function a(p) {
    var f = e.index;
    return e.isType("carousel") ? f + p : f + (p - f % p);
  }
  function s(p, f) {
    var _ = n.length;
    return p <= _ ? p : e.isType("carousel") ? p - (_ + 1) : e.settings.rewind ? n.isBound() && !n.isEnd() ? _ : 0 : n.isBound() ? _ : Math.floor(_ / f) * f;
  }
  function d(p) {
    var f = e.index;
    if (e.isType("carousel"))
      return f - p;
    var _ = Math.ceil(f / p);
    return (_ - 1) * p;
  }
  function m(p, f) {
    var _ = n.length;
    return p >= 0 ? p : e.isType("carousel") ? p + (_ + 1) : e.settings.rewind ? n.isBound() && n.isStart() ? _ : Math.floor(_ / f) * f : 0;
  }
  return rt(n, "move", {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function() {
      return this._m;
    },
    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function(p) {
      var f = p.substr(1);
      this._m = {
        direction: p.substr(0, 1),
        steps: f ? wt(f) ? wt(f) : f : 0
      };
    }
  }), rt(n, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var p = e.settings, f = t.Html.slides.length;
      return this.isBound() ? f - 1 - (wt(p.perView) - 1) + wt(p.focusAt) : f - 1;
    }
  }), rt(n, "offset", {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function() {
      return this._o;
    }
  }), n;
}
function Ro() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Sa(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, a, s, d, m = 0, p = function() {
    m = r.leading === !1 ? 0 : Ro(), n = null, d = e.apply(a, s), n || (a = s = null);
  }, f = function() {
    var _ = Ro();
    !m && r.leading === !1 && (m = _);
    var x = t - (_ - m);
    return a = this, s = arguments, x <= 0 || x > t ? (n && (clearTimeout(n), n = null), m = _, d = e.apply(a, s), n || (a = s = null)) : !n && r.trailing !== !1 && (n = setTimeout(p, x)), d;
  };
  return f.cancel = function() {
    clearTimeout(n), m = 0, n = a = s = null;
  }, f;
}
var Xn = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function pd(e, t, r) {
  var n = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(a) {
      for (var s = 0, d = a.length; s < d; s++) {
        var m = a[s].style, p = t.Direction.value;
        s !== 0 ? m[Xn[p][0]] = "".concat(this.value / 2, "px") : m[Xn[p][0]] = "", s !== a.length - 1 ? m[Xn[p][1]] = "".concat(this.value / 2, "px") : m[Xn[p][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(a) {
      for (var s = 0, d = a.length; s < d; s++) {
        var m = a[s].style;
        m.marginLeft = "", m.marginRight = "";
      }
    }
  };
  return rt(n, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return wt(e.settings.gap);
    }
  }), rt(n, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return n.value * t.Sizes.length;
    }
  }), rt(n, "reductor", {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function() {
      var a = e.settings.perView;
      return n.value * (a - 1) / a;
    }
  }), r.on(["build.after", "update"], Sa(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function rl(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function ui(e) {
  return Array.prototype.slice.call(e);
}
var hd = '[data-glide-el="track"]';
function md(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(hd), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = ui(this.wrapper.children).filter(function(a) {
        return !a.classList.contains(e.settings.classes.slide.clone);
      });
    }
  };
  return rt(n, "root", {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function() {
      return n._r;
    },
    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function(a) {
      si(a) && (a = document.querySelector(a)), a !== null ? n._r = a : vr("Root element must be a existing Html node");
    }
  }), rt(n, "track", {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function() {
      return n._t;
    },
    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function(a) {
      n._t = a;
    }
  }), rt(n, "wrapper", {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function() {
      return n.track.children[0];
    }
  }), r.on("update", function() {
    n.collectSlides();
  }), n;
}
function gd(e, t, r) {
  var n = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = e.settings.peek;
    }
  };
  return rt(n, "value", {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function() {
      return n._v;
    },
    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function(a) {
      Vr(a) ? (a.before = wt(a.before), a.after = wt(a.after)) : a = wt(a), n._v = a;
    }
  }), rt(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var a = n.value, s = e.settings.perView;
      return Vr(a) ? a.before / s + a.after / s : a * 2 / s;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function yd(e, t, r) {
  var n = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function() {
      this._o = 0;
    },
    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function() {
      var a = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = s, r.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        r.emit("move.after", {
          movement: a.value
        });
      });
    }
  };
  return rt(n, "offset", {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function() {
      return n._o;
    },
    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function(a) {
      n._o = tl(a) ? 0 : wt(a);
    }
  }), rt(n, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return t.Sizes.slideWidth * e.index;
    }
  }), rt(n, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var a = this.offset, s = this.translate;
      return t.Direction.is("rtl") ? s + a : s - a;
    }
  }), r.on(["build.before", "run"], function() {
    n.make();
  }), n;
}
function bd(e, t, r) {
  var n = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var a = "".concat(this.slideWidth, "px"), s = t.Html.slides, d = 0; d < s.length; d++)
        s[d].style.width = a;
    },
    /**
     * Setups dimensions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function() {
      t.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
    },
    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function() {
      for (var a = t.Html.slides, s = 0; s < a.length; s++)
        a[s].style.width = "";
      t.Html.wrapper.style.width = "";
    }
  };
  return rt(n, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.slides.length;
    }
  }), rt(n, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.track.offsetWidth;
    }
  }), rt(n, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return n.slideWidth * n.length + t.Gaps.grow + t.Clones.grow;
    }
  }), rt(n, "slideWidth", {
    /**
     * Gets width value of a single slide.
     *
     * @return {Number}
     */
    get: function() {
      return n.width / e.settings.perView - t.Peek.reductor - t.Gaps.reductor;
    }
  }), r.on(["build.before", "resize", "update"], function() {
    n.setupSlides(), n.setupWrapper();
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function vd(e, t, r) {
  var n = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function() {
      r.emit("build.before"), this.typeClass(), this.activeClass(), r.emit("build.after");
    },
    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function() {
      t.Html.root.classList.add(e.settings.classes.type[e.settings.type]);
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function() {
      var a = e.settings.classes, s = t.Html.slides[e.index];
      s && (s.classList.add(a.slide.active), rl(s).forEach(function(d) {
        d.classList.remove(a.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var a = e.settings.classes, s = a.type, d = a.slide;
      t.Html.root.classList.remove(s[e.settings.type]), t.Html.slides.forEach(function(m) {
        m.classList.remove(d.active);
      });
    }
  };
  return r.on(["destroy", "update"], function() {
    n.removeClasses();
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), r.on("move.after", function() {
    n.activeClass();
  }), n;
}
function wd(e, t, r) {
  var n = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function() {
      this.items = [], e.isType("carousel") && (this.items = this.collect());
    },
    /**
     * Collect clones with pattern.
     *
     * @return {[]}
     */
    collect: function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = t.Html.slides, d = e.settings, m = d.perView, p = d.classes, f = d.cloningRatio;
      if (s.length > 0)
        for (var _ = +!!e.settings.peek, x = m + _ + Math.round(m / 2), L = s.slice(0, x).reverse(), $ = s.slice(x * -1), E = 0; E < Math.max(f, Math.floor(m / s.length)); E++) {
          for (var k = 0; k < L.length; k++) {
            var D = L[k].cloneNode(!0);
            D.classList.add(p.slide.clone), a.push(D);
          }
          for (var H = 0; H < $.length; H++) {
            var W = $[H].cloneNode(!0);
            W.classList.add(p.slide.clone), a.unshift(W);
          }
        }
      return a;
    },
    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function() {
      for (var a = this.items, s = t.Html, d = s.wrapper, m = s.slides, p = Math.floor(a.length / 2), f = a.slice(0, p).reverse(), _ = a.slice(p * -1).reverse(), x = "".concat(t.Sizes.slideWidth, "px"), L = 0; L < _.length; L++)
        d.appendChild(_[L]);
      for (var $ = 0; $ < f.length; $++)
        d.insertBefore(f[$], m[0]);
      for (var E = 0; E < a.length; E++)
        a[E].style.width = x;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var a = this.items, s = 0; s < a.length; s++)
        t.Html.wrapper.removeChild(a[s]);
    }
  };
  return rt(n, "grow", {
    /**
     * Gets additional dimensions value caused by clones.
     *
     * @return {Number}
     */
    get: function() {
      return (t.Sizes.slideWidth + t.Gaps.value) * n.items.length;
    }
  }), r.on("update", function() {
    n.remove(), n.mount(), n.append();
  }), r.on("build.before", function() {
    e.isType("carousel") && n.append();
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
var Ar = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    va(this, e), this.listeners = t;
  }
  return wa(e, [{
    key: "on",
    value: function(t, r, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      si(t) && (t = [t]);
      for (var s = 0; s < t.length; s++)
        this.listeners[t[s]] = n, r.addEventListener(t[s], this.listeners[t[s]], a);
    }
    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */
  }, {
    key: "off",
    value: function(t, r) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      si(t) && (t = [t]);
      for (var a = 0; a < t.length; a++)
        r.removeEventListener(t[a], this.listeners[t[a]], n);
    }
    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */
  }, {
    key: "destroy",
    value: function() {
      delete this.listeners;
    }
  }]), e;
}();
function Sd(e, t, r) {
  var n = new Ar(), a = {
    /**
     * Initializes window bindings.
     */
    mount: function() {
      this.bind();
    },
    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("resize", window, Sa(function() {
        r.emit("resize");
      }, e.settings.throttle));
    },
    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("resize", window);
    }
  };
  return r.on("destroy", function() {
    a.unbind(), n.destroy();
  }), a;
}
var kd = ["ltr", "rtl"], xd = {
  ">": "<",
  "<": ">",
  "=": "="
};
function _d(e, t, r) {
  var n = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = e.settings.direction;
    },
    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function(a) {
      var s = a.slice(0, 1);
      return this.is("rtl") ? a.split(s).join(xd[s]) : a;
    },
    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function(a) {
      return this.value === a;
    },
    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function() {
      t.Html.root.classList.add(e.settings.classes.direction[this.value]);
    },
    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function() {
      t.Html.root.classList.remove(e.settings.classes.direction[this.value]);
    }
  };
  return rt(n, "value", {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function() {
      return n._v;
    },
    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function(a) {
      kd.indexOf(a) > -1 ? n._v = a : vr("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Td(e, t) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      return t.Direction.is("rtl") ? -r : r;
    }
  };
}
function Ed(e, t) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      var n = Math.floor(r / t.Sizes.slideWidth);
      return r + t.Gaps.value * n;
    }
  };
}
function Ad(e, t) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      return r + t.Clones.grow / 2;
    }
  };
}
function Cd(e, t) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      if (e.settings.focusAt >= 0) {
        var n = t.Peek.value;
        return Vr(n) ? r - n.before : r - n;
      }
      return r;
    }
  };
}
function Od(e, t) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      var n = t.Gaps.value, a = t.Sizes.width, s = e.settings.focusAt, d = t.Sizes.slideWidth;
      return s === "center" ? r - (a / 2 - d / 2) : r - d * s - n * s;
    }
  };
}
function Rd(e, t, r) {
  var n = [Ed, Ad, Cd, Od].concat(e._t, [Td]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(a) {
      for (var s = 0; s < n.length; s++) {
        var d = n[s];
        fa(d) && fa(d().modify) ? a = d(e, t, r).modify(a) : vr("Transformer should be a function that returns an object with `modify()` method");
      }
      return a;
    }
  };
}
function Pd(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(a) {
      var s = Rd(e, t).mutate(a), d = "translate3d(".concat(-1 * s, "px, 0px, 0px)");
      t.Html.wrapper.style.mozTransform = d, t.Html.wrapper.style.webkitTransform = d, t.Html.wrapper.style.transform = d;
    },
    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function() {
      t.Html.wrapper.style.transform = "";
    },
    /**
     * @return {number}
     */
    getStartIndex: function() {
      var a = t.Sizes.length, s = e.index, d = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? a + (s - d) : (s + d) % a;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var a = t.Sizes.slideWidth * e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? a * -1 : a;
    }
  };
  return r.on("move", function(a) {
    if (!e.isType("carousel") || !t.Run.isOffset())
      return n.set(a.movement);
    t.Transition.after(function() {
      r.emit("translate.jump"), n.set(t.Sizes.slideWidth * e.index);
    });
    var s = t.Sizes.slideWidth * t.Translate.getStartIndex();
    return n.set(s - t.Translate.getTravelDistance());
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function Nd(e, t, r) {
  var n = !1, a = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function(s) {
      var d = e.settings;
      return n ? "".concat(s, " 0ms ").concat(d.animationTimingFunc) : "".concat(s, " ").concat(this.duration, "ms ").concat(d.animationTimingFunc);
    },
    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      t.Html.wrapper.style.transition = this.compose(s);
    },
    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function() {
      t.Html.wrapper.style.transition = "";
    },
    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function(s) {
      setTimeout(function() {
        s();
      }, this.duration);
    },
    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function() {
      n = !1, this.set();
    },
    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function() {
      n = !0, this.set();
    }
  };
  return rt(a, "duration", {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function() {
      var s = e.settings;
      return e.isType("slider") && t.Run.offset ? s.rewindDuration : s.animationDuration;
    }
  }), r.on("move", function() {
    a.set();
  }), r.on(["build.before", "resize", "translate.jump"], function() {
    a.disable();
  }), r.on("run", function() {
    a.enable();
  }), r.on("destroy", function() {
    a.remove();
  }), a;
}
var nl = !1;
try {
  var Po = Object.defineProperty({}, "passive", {
    get: function() {
      nl = !0;
    }
  });
  window.addEventListener("testPassive", null, Po), window.removeEventListener("testPassive", null, Po);
} catch {
}
var di = nl, Zn = ["touchstart", "mousedown"], No = ["touchmove", "mousemove"], Io = ["touchend", "touchcancel", "mouseup", "mouseleave"], Do = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Id(e, t, r) {
  var n = new Ar(), a = 0, s = 0, d = 0, m = !1, p = di ? {
    passive: !0
  } : !1, f = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function() {
      this.bindSwipeStart();
    },
    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function(_) {
      if (!m && !e.disabled) {
        this.disable();
        var x = this.touches(_);
        a = null, s = wt(x.pageX), d = wt(x.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(_) {
      if (!e.disabled) {
        var x = e.settings, L = x.touchAngle, $ = x.touchRatio, E = x.classes, k = this.touches(_), D = wt(k.pageX) - s, H = wt(k.pageY) - d, W = Math.abs(D << 2), G = Math.abs(H << 2), V = Math.sqrt(W + G), T = Math.sqrt(G);
        if (a = Math.asin(T / V), a * 180 / Math.PI < L)
          _.stopPropagation(), t.Move.make(D * sd($)), t.Html.root.classList.add(E.dragging), r.emit("swipe.move");
        else
          return !1;
      }
    },
    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function(_) {
      if (!e.disabled) {
        var x = e.settings, L = x.perSwipe, $ = x.touchAngle, E = x.classes, k = this.touches(_), D = this.threshold(_), H = k.pageX - s, W = a * 180 / Math.PI;
        this.enable(), H > D && W < $ ? t.Run.make(t.Direction.resolve("".concat(L, "<"))) : H < -D && W < $ ? t.Run.make(t.Direction.resolve("".concat(L, ">"))) : t.Move.make(), t.Html.root.classList.remove(E.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var _ = this, x = e.settings, L = x.swipeThreshold, $ = x.dragThreshold;
      L && n.on(Zn[0], t.Html.wrapper, function(E) {
        _.start(E);
      }, p), $ && n.on(Zn[1], t.Html.wrapper, function(E) {
        _.start(E);
      }, p);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(Zn[0], t.Html.wrapper, p), n.off(Zn[1], t.Html.wrapper, p);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var _ = this;
      n.on(No, t.Html.wrapper, Sa(function(x) {
        _.move(x);
      }, e.settings.throttle), p);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(No, t.Html.wrapper, p);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var _ = this;
      n.on(Io, t.Html.wrapper, function(x) {
        _.end(x);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(Io, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(_) {
      return Do.indexOf(_.type) > -1 ? _ : _.touches[0] || _.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(_) {
      var x = e.settings;
      return Do.indexOf(_.type) > -1 ? x.dragThreshold : x.swipeThreshold;
    },
    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function() {
      return m = !1, t.Transition.enable(), this;
    },
    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function() {
      return m = !0, t.Transition.disable(), this;
    }
  };
  return r.on("build.after", function() {
    t.Html.root.classList.add(e.settings.classes.swipeable);
  }), r.on("destroy", function() {
    f.unbindSwipeStart(), f.unbindSwipeMove(), f.unbindSwipeEnd(), n.destroy();
  }), f;
}
function Dd(e, t, r) {
  var n = new Ar(), a = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function() {
      this.bind();
    },
    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("dragstart", t.Html.wrapper, this.dragstart);
    },
    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("dragstart", t.Html.wrapper);
    },
    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function(s) {
      s.preventDefault();
    }
  };
  return r.on("destroy", function() {
    a.unbind(), n.destroy();
  }), a;
}
function Ld(e, t, r) {
  var n = new Ar(), a = !1, s = !1, d = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function() {
      this._a = t.Html.wrapper.querySelectorAll("a"), this.bind();
    },
    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("click", t.Html.wrapper, this.click);
    },
    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("click", t.Html.wrapper);
    },
    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function(m) {
      s && (m.stopPropagation(), m.preventDefault());
    },
    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function() {
      if (s = !0, !a) {
        for (var m = 0; m < this.items.length; m++)
          this.items[m].draggable = !1;
        a = !0;
      }
      return this;
    },
    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function() {
      if (s = !1, a) {
        for (var m = 0; m < this.items.length; m++)
          this.items[m].draggable = !0;
        a = !1;
      }
      return this;
    }
  };
  return rt(d, "items", {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return d._a;
    }
  }), r.on("swipe.move", function() {
    d.detach();
  }), r.on("swipe.end", function() {
    t.Transition.after(function() {
      d.attach();
    });
  }), r.on("destroy", function() {
    d.attach(), d.unbind(), n.destroy();
  }), d;
}
var jd = '[data-glide-el="controls[nav]"]', Ai = '[data-glide-el^="controls"]', Fd = "".concat(Ai, ' [data-glide-dir*="<"]'), Md = "".concat(Ai, ' [data-glide-dir*=">"]');
function zd(e, t, r) {
  var n = new Ar(), a = di ? {
    passive: !0
  } : !1, s = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(jd), this._c = t.Html.root.querySelectorAll(Ai), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(Fd),
        next: t.Html.root.querySelectorAll(Md)
      }, this.addBindings();
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function() {
      for (var d = 0; d < this._n.length; d++)
        this.addClass(this._n[d].children);
    },
    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function() {
      for (var d = 0; d < this._n.length; d++)
        this.removeClass(this._n[d].children);
    },
    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function(d) {
      var m = e.settings, p = d[e.index];
      p && (p.classList.add(m.classes.nav.active), rl(p).forEach(function(f) {
        f.classList.remove(m.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(d) {
      var m = d[e.index];
      m == null || m.classList.remove(e.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!e.settings.rewind) {
        var d = s._arrowControls.next, m = s._arrowControls.previous;
        this.resetArrowState(d, m), e.index === 0 && this.disableArrow(m), e.index === t.Run.length && this.disableArrow(d);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var d = e.settings, m = arguments.length, p = new Array(m), f = 0; f < m; f++)
        p[f] = arguments[f];
      p.forEach(function(_) {
        ui(_).forEach(function(x) {
          x.classList.remove(d.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var d = e.settings, m = arguments.length, p = new Array(m), f = 0; f < m; f++)
        p[f] = arguments[f];
      p.forEach(function(_) {
        ui(_).forEach(function(x) {
          x.classList.add(d.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function() {
      for (var d = 0; d < this._c.length; d++)
        this.bind(this._c[d].children);
    },
    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function() {
      for (var d = 0; d < this._c.length; d++)
        this.unbind(this._c[d].children);
    },
    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function(d) {
      for (var m = 0; m < d.length; m++)
        n.on("click", d[m], this.click), n.on("touchstart", d[m], this.click, a);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(d) {
      for (var m = 0; m < d.length; m++)
        n.off(["click", "touchstart"], d[m]);
    },
    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function(d) {
      !di && d.type === "touchstart" && d.preventDefault();
      var m = d.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(m));
    }
  };
  return rt(s, "items", {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return s._c;
    }
  }), r.on(["mount.after", "move.after"], function() {
    s.setActive();
  }), r.on(["mount.after", "run"], function() {
    s.setArrowState();
  }), r.on("destroy", function() {
    s.removeBindings(), s.removeActive(), n.destroy();
  }), s;
}
function $d(e, t, r) {
  var n = new Ar(), a = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function() {
      e.settings.keyboard && this.bind();
    },
    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("keyup", document, this.press);
    },
    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("keyup", document);
    },
    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function(s) {
      var d = e.settings.perSwipe, m = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(s.code) && t.Run.make(t.Direction.resolve("".concat(d).concat(m[s.code])));
    }
  };
  return r.on(["destroy", "update"], function() {
    a.unbind();
  }), r.on("update", function() {
    a.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), a;
}
function Ud(e, t, r) {
  var n = new Ar(), a = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function() {
      this.enable(), this.start(), e.settings.hoverpause && this.bind();
    },
    /**
     * Enables autoplaying
     *
     * @returns {Void}
     */
    enable: function() {
      this._e = !0;
    },
    /**
     * Disables autoplaying.
     *
     * @returns {Void}
     */
    disable: function() {
      this._e = !1;
    },
    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function() {
      var s = this;
      this._e && (this.enable(), e.settings.autoplay && tl(this._i) && (this._i = setInterval(function() {
        s.stop(), t.Run.make(">"), s.start(), r.emit("autoplay");
      }, this.time)));
    },
    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function() {
      this._i = clearInterval(this._i);
    },
    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function() {
      var s = this;
      n.on("mouseover", t.Html.root, function() {
        s._e && s.stop();
      }), n.on("mouseout", t.Html.root, function() {
        s._e && s.start();
      });
    },
    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function() {
      n.off(["mouseover", "mouseout"], t.Html.root);
    }
  };
  return rt(a, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var s = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
      return wt(s || e.settings.autoplay);
    }
  }), r.on(["destroy", "update"], function() {
    a.unbind();
  }), r.on(["run.before", "swipe.start", "update"], function() {
    a.stop();
  }), r.on(["pause", "destroy"], function() {
    a.disable(), a.stop();
  }), r.on(["run.after", "swipe.end"], function() {
    a.start();
  }), r.on(["play"], function() {
    a.enable(), a.start();
  }), r.on("update", function() {
    a.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), a;
}
function Lo(e) {
  return Vr(e) ? cd(e) : (vr("Breakpoints option must be an object"), {});
}
function Hd(e, t, r) {
  var n = new Ar(), a = e.settings, s = Lo(a.breakpoints), d = Object.assign({}, a), m = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(p) {
      if (typeof window.matchMedia < "u") {
        for (var f in p)
          if (p.hasOwnProperty(f) && window.matchMedia("(max-width: ".concat(f, "px)")).matches)
            return p[f];
      }
      return d;
    }
  };
  return Object.assign(a, m.match(s)), n.on("resize", window, Sa(function() {
    e.settings = ci(a, m.match(s));
  }, e.settings.throttle)), r.on("update", function() {
    s = Lo(s), d = Object.assign({}, a);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), m;
}
var Bd = {
  // Required
  Html: md,
  Translate: Pd,
  Transition: Nd,
  Direction: _d,
  Peek: gd,
  Sizes: bd,
  Gaps: pd,
  Move: yd,
  Clones: wd,
  Resize: Sd,
  Build: vd,
  Run: fd,
  // Optional
  Swipe: Id,
  Images: Dd,
  Anchors: Ld,
  Controls: zd,
  Keyboard: $d,
  Autoplay: Ud,
  Breakpoints: Hd
}, Wd = /* @__PURE__ */ function(e) {
  ed(r, e);
  var t = ad(r);
  function r() {
    return va(this, r), t.apply(this, arguments);
  }
  return wa(r, [{
    key: "mount",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return ia(Wr(r.prototype), "mount", this).call(this, Object.assign({}, Bd, n));
    }
  }]), r;
}(dd);
function Vd(e) {
  let t, r, n;
  switch (e) {
    case 3:
      t = 1, r = 2, n = 3;
      break;
    case 2:
      t = 1, r = 2, n = 2;
      break;
    case 1:
    default:
      t = 1, r = 1, n = 1;
  }
  return {
    perViewSm: t,
    perViewMd: r,
    perViewLg: n
  };
}
function qd(e = 1, t, r = !0, n) {
  const { perViewSm: a, perViewMd: s, perViewLg: d } = Vd(e), m = r ? 24 : 0, p = r ? { before: 48, after: 48 } : 0, f = r ? { before: 124, after: 124 } : 0;
  return {
    type: "slider",
    // No wrap-around.
    focusAt: 0,
    bound: !0,
    // Only if type slider with focusAt 0
    rewind: !1,
    // Only if type slider
    gap: m,
    // Space between slides... may be impacted by viewport size.
    // `keyboard` Left/Right arrow key support for slides - true is default.
    // Is not fully Accessible, on keydown allcarousels move simultaneously
    // A custome keyboard handler is implemented
    keyboard: !1,
    startAt: 0,
    swipeThreshold: 80,
    // Distance required for swipe to change slide.
    dragThreshold: n ? 120 : !1,
    // Distance for mouse drag to change slide.
    perTouch: 1,
    // Number of slides that can be moved per each swipe/drag.
    perView: d,
    // Can be overwritten at breakpoints
    peek: f,
    // Can be overwritten at breakpoints
    // if isFullWidth = true, then we have only 1 image per view which takes the full width.
    // no need for breakpoints
    breakpoints: t ? null : {
      576: {
        // BS4 sm
        perView: a,
        peek: p
      },
      768: {
        // BS4 md
        perView: s,
        peek: p
      },
      992: {
        // BS4 lg
        perView: d,
        peek: p
      },
      1260: {
        // BS4 xl
        perView: d,
        peek: p
      },
      1400: {
        perView: d,
        peek: f
      },
      1920: {
        perView: d,
        peek: f
      }
    }
  };
}
function Gd(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), a = e.querySelector(".glide__arrow--next"), s = e.querySelector(".glide__track"), d = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || a)) return;
  const m = ["slider-start", "slider-mid", "slider-end"], p = "glide__arrow--disabled";
  s == null || s.classList.remove(...m), d == null || d.classList.remove(...m), t === 0 ? (s == null || s.classList.add("slider-start"), d == null || d.classList.add("slider-start"), n == null || n.classList.add(p), n == null || n.setAttribute("aria-disabled", "true"), a == null || a.classList.remove(p), a == null || a.setAttribute("aria-disabled", "false")) : t >= r - 1 ? (s == null || s.classList.add("slider-end"), d == null || d.classList.add("slider-end"), n == null || n.classList.remove(p), n == null || n.setAttribute("aria-disabled", "false"), a == null || a.classList.add(p), a == null || a.setAttribute("aria-disabled", "true")) : (s == null || s.classList.add("slider-mid"), d == null || d.classList.add("slider-mid"), n == null || n.classList.remove(p), a == null || a.classList.remove(p), n == null || n.setAttribute("aria-disabled", "false"), a == null || a.setAttribute("aria-disabled", "false"));
}
function Yd(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), a = t, s = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((d, m) => {
    m < a || m > s ? (d.setAttribute("aria-hidden", "true"), d.setAttribute("tabindex", "-1"), d.setAttribute("inert", "")) : (d.setAttribute("aria-hidden", "false"), d.removeAttribute("tabindex"), d.removeAttribute("inert"));
  });
}
function Xd({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: a,
  hasPeek: s = !0,
  isDraggable: d
}) {
  const m = qd(t, n, s, d), p = new Wd(`#${e}`, m);
  let f = document.querySelector(`#${e}`);
  return f.addEventListener("keyup", (_) => {
    const x = _;
    x.keyCode === 39 ? p.go(">") : x.keyCode === 37 ? p.go("<") : x.keyCode === 13 && p.go(document.activeElement.dataset.glideDir);
  }), p.on("build.before", () => {
    f = document.querySelector(`#${e}`), f && f.classList.add("slider-start");
  }), p.on("move", () => {
    if (f = document.querySelector(`#${e}`), !f) return;
    const _ = p.index;
    Yd(f, _, t);
    const x = f.querySelector(".navigation-slider"), L = f.querySelector(".image-navigator-images");
    if (x && L) {
      const $ = x.querySelectorAll(
        ".bullet-image-container"
      ), E = x.clientWidth, k = 82, D = $[_], H = L.getBoundingClientRect().x, W = x.getBoundingClientRect().x - H, G = D.getBoundingClientRect().x - H, V = D.getBoundingClientRect().x + D.getBoundingClientRect().width - H;
      if (_ === 0 || G <= 0 + k)
        x.style.left = `${W - G + k}px`;
      else if (V >= E - k) {
        const T = V - E;
        x.style.left = `${W - T - k}px`;
      }
    }
    Gd(f, _, r), f.setAttribute("data-current-index", _), a && a(_);
  }), p.mount(), p;
}
function Zd(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const al = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: a = "",
  CustomNavComponent: s,
  role: d,
  ariaLabelledBy: m,
  isFullWidth: p,
  removeSideBackground: f = !1,
  hasNavButtons: _ = !0,
  hasPositionIndicators: x = !0,
  imageAutoSize: L = !0,
  onItemClick: $ = () => null,
  hasPeek: E = !0,
  isDraggable: k = !0,
  hasShadow: D = !0
}) => {
  const H = `glide-${Math.ceil(Math.random() * 1e4)}`, W = Zd(n.length, e);
  return Er(() => {
    Xd({
      instanceName: H,
      perView: e,
      buttonCount: W,
      isFullWidth: p,
      onItemClick: $,
      hasPeek: E,
      isDraggable: k
    });
  }, [
    H,
    e,
    W,
    p,
    $,
    E,
    k
  ]), /* @__PURE__ */ F.jsxs(
    "div",
    {
      role: d,
      "aria-labelledby": m,
      className: `glide ${a}`,
      id: H,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": f,
      "data-image-auto-size": L,
      "data-has-shadow": D,
      children: [
        /* @__PURE__ */ F.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ F.jsx(el, { carouselItems: n }) }),
        s ? (
          // @ts-ignore
          /* @__PURE__ */ F.jsx(s, { instanceName: H })
        ) : /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
          x && /* @__PURE__ */ F.jsx(Xs, { buttonCount: W }),
          _ && /* @__PURE__ */ F.jsx(Qs, {})
        ] })
      ]
    }
  );
};
al.propTypes = {
  perView: l.number,
  width: l.string,
  maxWidth: l.string,
  carouselItems: l.arrayOf(l.object).isRequired,
  cssClass: l.string,
  CustomNavComponent: l.func,
  role: l.string,
  ariaLabelledBy: l.string,
  onItemClick: l.func,
  isFullWidth: l.bool,
  removeSideBackground: l.bool,
  hasNavButtons: l.bool,
  hasPositionIndicators: l.bool,
  imageAutoSize: l.bool,
  hasPeek: l.bool,
  isDraggable: l.bool,
  hasShadow: l.bool
};
const Jd = ({
  id: e,
  imageSource: t,
  imageAltText: r,
  title: n,
  content: a,
  eventLocation: s,
  eventTime: d,
  buttons: m,
  linkLabel: p,
  linkUrl: f,
  tags: _
}, x, L, $) => {
  var E;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ F.jsx(
      gr,
      {
        type: x,
        horizontal: L,
        image: t,
        imageAltText: r,
        title: n,
        body: a,
        eventFormat: $,
        eventLocation: s,
        eventTime: d,
        buttons: m,
        linkLabel: p,
        linkUrl: f || ((E = m == null ? void 0 : m[0]) == null ? void 0 : E.href),
        tags: _
      }
    )
  };
}, il = ({
  perView: e = 0,
  cardItems: t = [],
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: a = !1,
  width: s = void 0,
  maxWidth: d = void 0,
  imageAutoSize: m = !0
}) => {
  const p = parseInt(`${e}`, 10), [f, _] = zr(p), x = 1024, L = 768;
  Er(() => {
    const k = () => {
      const D = window.innerWidth;
      let H;
      switch (p) {
        case 3:
          D > x ? H = 3 : D > L ? H = 2 : H = 1;
          break;
        case 2:
          H = D < L ? 1 : 2;
          break;
        default:
          H = 1;
          break;
      }
      _(H);
    };
    return k(), window.addEventListener("resize", k), () => window.removeEventListener("resize", k);
  }, [p]);
  const $ = t.map(
    (k) => Jd(k, r, a, n)
  ), E = t.length > f;
  return /* @__PURE__ */ F.jsx(
    al,
    {
      perView: +f,
      maxWidth: d,
      width: s,
      carouselItems: $,
      cssClass: "aligned-carousel",
      imageAutoSize: m,
      removeSideBackground: t.length <= f,
      hasPositionIndicators: E,
      hasNavButtons: E,
      isDraggable: E,
      hasShadow: !0
    }
  );
};
il.propTypes = {
  perView: l.string.isRequired,
  cardItems: l.arrayOf(
    l.shape({
      title: l.string.isRequired,
      content: l.string,
      eventLocation: l.string,
      eventTime: l.string,
      image: l.string,
      imageAltText: l.string,
      buttons: gr.propTypes.buttons,
      linkLabel: l.string,
      linkUrl: l.string,
      tags: gr.propTypes.tags
    })
  ).isRequired,
  cardType: gr.propTypes.type,
  cardEventFormat: gr.propTypes.eventFormat,
  cardHorizontal: gr.propTypes.horizontal,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
l.number.isRequired, l.arrayOf(l.object).isRequired, l.string, l.string, l.bool;
const pa = {
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
l.string, pa.imageItems, pa.hasContent;
pa.imageItems.isRequired, pa.hasContent, l.string, l.string, l.bool;
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
var jo = us;
jo.createRoot, jo.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const {
  entries: ol,
  setPrototypeOf: Fo,
  isFrozen: Kd,
  getPrototypeOf: Qd,
  getOwnPropertyDescriptor: ef
} = Object;
let {
  freeze: Et,
  seal: Ht,
  create: oa
} = Object, {
  apply: fi,
  construct: pi
} = typeof Reflect < "u" && Reflect;
Et || (Et = function(t) {
  return t;
});
Ht || (Ht = function(t) {
  return t;
});
fi || (fi = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    a[s - 2] = arguments[s];
  return t.apply(r, a);
});
pi || (pi = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const Jn = At(Array.prototype.forEach), tf = At(Array.prototype.lastIndexOf), Mo = At(Array.prototype.pop), fn = At(Array.prototype.push), rf = At(Array.prototype.splice), sa = At(String.prototype.toLowerCase), Ha = At(String.prototype.toString), Ba = At(String.prototype.match), pn = At(String.prototype.replace), nf = At(String.prototype.indexOf), af = At(String.prototype.trim), Ft = At(Object.prototype.hasOwnProperty), xt = At(RegExp.prototype.test), hn = of(TypeError);
function At(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return fi(e, t, n);
  };
}
function of(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return pi(e, r);
  };
}
function Ce(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : sa;
  Fo && Fo(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (Kd(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function sf(e) {
  for (let t = 0; t < e.length; t++)
    Ft(e, t) || (e[t] = null);
  return e;
}
function cr(e) {
  const t = oa(null);
  for (const [r, n] of ol(e))
    Ft(e, r) && (Array.isArray(n) ? t[r] = sf(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = cr(n) : t[r] = n);
  return t;
}
function mn(e, t) {
  for (; e !== null; ) {
    const n = ef(e, t);
    if (n) {
      if (n.get)
        return At(n.get);
      if (typeof n.value == "function")
        return At(n.value);
    }
    e = Qd(e);
  }
  function r() {
    return null;
  }
  return r;
}
const zo = Et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Wa = Et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Va = Et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), lf = Et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), qa = Et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), cf = Et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), $o = Et(["#text"]), Uo = Et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ga = Et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ho = Et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Kn = Et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), uf = Ht(/\{\{[\w\W]*|[\w\W]*\}\}/gm), df = Ht(/<%[\w\W]*|[\w\W]*%>/gm), ff = Ht(/\$\{[\w\W]*/gm), pf = Ht(/^data-[\-\w.\u00B7-\uFFFF]+$/), hf = Ht(/^aria-[\-\w]+$/), sl = Ht(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), mf = Ht(/^(?:\w+script|data):/i), gf = Ht(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ll = Ht(/^html$/i), yf = Ht(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Bo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: hf,
  ATTR_WHITESPACE: gf,
  CUSTOM_ELEMENT: yf,
  DATA_ATTR: pf,
  DOCTYPE_NAME: ll,
  ERB_EXPR: df,
  IS_ALLOWED_URI: sl,
  IS_SCRIPT_OR_DATA: mf,
  MUSTACHE_EXPR: uf,
  TMPLIT_EXPR: ff
});
const gn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, bf = function() {
  return typeof window > "u" ? null : window;
}, vf = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (n = r.getAttribute(a));
  const s = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(s, {
      createHTML(d) {
        return d;
      },
      createScriptURL(d) {
        return d;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, Wo = function() {
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
function cl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bf();
  const t = (y) => cl(y);
  if (t.version = "3.3.2", t.removed = [], !e || !e.document || e.document.nodeType !== gn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: d,
    Node: m,
    Element: p,
    NodeFilter: f,
    NamedNodeMap: _ = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: x,
    DOMParser: L,
    trustedTypes: $
  } = e, E = p.prototype, k = mn(E, "cloneNode"), D = mn(E, "remove"), H = mn(E, "nextSibling"), W = mn(E, "childNodes"), G = mn(E, "parentNode");
  if (typeof d == "function") {
    const y = r.createElement("template");
    y.content && y.content.ownerDocument && (r = y.content.ownerDocument);
  }
  let V, T = "";
  const {
    implementation: ce,
    createNodeIterator: _e,
    createDocumentFragment: Ie,
    getElementsByTagName: je
  } = r, {
    importNode: Ge
  } = n;
  let ue = Wo();
  t.isSupported = typeof ol == "function" && typeof G == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: me,
    ERB_EXPR: Re,
    TMPLIT_EXPR: Pe,
    DATA_ATTR: Ee,
    ARIA_ATTR: lt,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Oe,
    CUSTOM_ELEMENT: Be
  } = Bo;
  let {
    IS_ALLOWED_URI: et
  } = Bo, oe = null;
  const z = Ce({}, [...zo, ...Wa, ...Va, ...qa, ...$o]);
  let O = null;
  const M = Ce({}, [...Uo, ...Ga, ...Ho, ...Kn]);
  let j = Object.seal(oa(null, {
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
  })), b = null, ee = null;
  const A = Object.seal(oa(null, {
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
  let ae = !0, Q = !0, te = !1, X = !0, ne = !1, de = !0, J = !1, ge = !1, re = !1, se = !1, Ue = !1, le = !1, ot = !0, We = !1;
  const Se = "user-content-";
  let q = !0, ie = !1, Xe = {}, Ne = null;
  const De = Ce({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let rr = null;
  const nr = Ce({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bt = null;
  const Wt = Ce({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ht = "http://www.w3.org/1998/Math/MathML", Ct = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let pt = nt, Vt = !1, qt = null;
  const mt = Ce({}, [ht, Ct, nt], Ha);
  let St = Ce({}, ["mi", "mo", "mn", "ms", "mtext"]), gt = Ce({}, ["annotation-xml"]);
  const Le = Ce({}, ["title", "style", "font", "a", "script"]);
  let ct = null;
  const ar = ["application/xhtml+xml", "text/html"], Gt = "text/html";
  let fe = null, st = null;
  const Ot = r.createElement("form"), ir = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, Rt = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(st && st === v)) {
      if ((!v || typeof v != "object") && (v = {}), v = cr(v), ct = // eslint-disable-next-line unicorn/prefer-includes
      ar.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? Gt : v.PARSER_MEDIA_TYPE, fe = ct === "application/xhtml+xml" ? Ha : sa, oe = Ft(v, "ALLOWED_TAGS") ? Ce({}, v.ALLOWED_TAGS, fe) : z, O = Ft(v, "ALLOWED_ATTR") ? Ce({}, v.ALLOWED_ATTR, fe) : M, qt = Ft(v, "ALLOWED_NAMESPACES") ? Ce({}, v.ALLOWED_NAMESPACES, Ha) : mt, Bt = Ft(v, "ADD_URI_SAFE_ATTR") ? Ce(cr(Wt), v.ADD_URI_SAFE_ATTR, fe) : Wt, rr = Ft(v, "ADD_DATA_URI_TAGS") ? Ce(cr(nr), v.ADD_DATA_URI_TAGS, fe) : nr, Ne = Ft(v, "FORBID_CONTENTS") ? Ce({}, v.FORBID_CONTENTS, fe) : De, b = Ft(v, "FORBID_TAGS") ? Ce({}, v.FORBID_TAGS, fe) : cr({}), ee = Ft(v, "FORBID_ATTR") ? Ce({}, v.FORBID_ATTR, fe) : cr({}), Xe = Ft(v, "USE_PROFILES") ? v.USE_PROFILES : !1, ae = v.ALLOW_ARIA_ATTR !== !1, Q = v.ALLOW_DATA_ATTR !== !1, te = v.ALLOW_UNKNOWN_PROTOCOLS || !1, X = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = v.SAFE_FOR_TEMPLATES || !1, de = v.SAFE_FOR_XML !== !1, J = v.WHOLE_DOCUMENT || !1, se = v.RETURN_DOM || !1, Ue = v.RETURN_DOM_FRAGMENT || !1, le = v.RETURN_TRUSTED_TYPE || !1, re = v.FORCE_BODY || !1, ot = v.SANITIZE_DOM !== !1, We = v.SANITIZE_NAMED_PROPS || !1, q = v.KEEP_CONTENT !== !1, ie = v.IN_PLACE || !1, et = v.ALLOWED_URI_REGEXP || sl, pt = v.NAMESPACE || nt, St = v.MATHML_TEXT_INTEGRATION_POINTS || St, gt = v.HTML_INTEGRATION_POINTS || gt, j = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && ir(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (j.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && ir(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (j.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), Ue && (se = !0), Xe && (oe = Ce({}, $o), O = oa(null), Xe.html === !0 && (Ce(oe, zo), Ce(O, Uo)), Xe.svg === !0 && (Ce(oe, Wa), Ce(O, Ga), Ce(O, Kn)), Xe.svgFilters === !0 && (Ce(oe, Va), Ce(O, Ga), Ce(O, Kn)), Xe.mathMl === !0 && (Ce(oe, qa), Ce(O, Ho), Ce(O, Kn))), Ft(v, "ADD_TAGS") || (A.tagCheck = null), Ft(v, "ADD_ATTR") || (A.attributeCheck = null), v.ADD_TAGS && (typeof v.ADD_TAGS == "function" ? A.tagCheck = v.ADD_TAGS : (oe === z && (oe = cr(oe)), Ce(oe, v.ADD_TAGS, fe))), v.ADD_ATTR && (typeof v.ADD_ATTR == "function" ? A.attributeCheck = v.ADD_ATTR : (O === M && (O = cr(O)), Ce(O, v.ADD_ATTR, fe))), v.ADD_URI_SAFE_ATTR && Ce(Bt, v.ADD_URI_SAFE_ATTR, fe), v.FORBID_CONTENTS && (Ne === De && (Ne = cr(Ne)), Ce(Ne, v.FORBID_CONTENTS, fe)), v.ADD_FORBID_CONTENTS && (Ne === De && (Ne = cr(Ne)), Ce(Ne, v.ADD_FORBID_CONTENTS, fe)), q && (oe["#text"] = !0), J && Ce(oe, ["html", "head", "body"]), oe.table && (Ce(oe, ["tbody"]), delete b.tbody), v.TRUSTED_TYPES_POLICY) {
        if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        V = v.TRUSTED_TYPES_POLICY, T = V.createHTML("");
      } else
        V === void 0 && (V = vf($, a)), V !== null && typeof T == "string" && (T = V.createHTML(""));
      Et && Et(v), st = v;
    }
  }, Yt = Ce({}, [...Wa, ...Va, ...lf]), or = Ce({}, [...qa, ...cf]), Sr = function(v) {
    let C = G(v);
    (!C || !C.tagName) && (C = {
      namespaceURI: pt,
      tagName: "template"
    });
    const Y = sa(v.tagName), ye = sa(C.tagName);
    return qt[v.namespaceURI] ? v.namespaceURI === Ct ? C.namespaceURI === nt ? Y === "svg" : C.namespaceURI === ht ? Y === "svg" && (ye === "annotation-xml" || St[ye]) : !!Yt[Y] : v.namespaceURI === ht ? C.namespaceURI === nt ? Y === "math" : C.namespaceURI === Ct ? Y === "math" && gt[ye] : !!or[Y] : v.namespaceURI === nt ? C.namespaceURI === Ct && !gt[ye] || C.namespaceURI === ht && !St[ye] ? !1 : !or[Y] && (Le[Y] || !Yt[Y]) : !!(ct === "application/xhtml+xml" && qt[v.namespaceURI]) : !1;
  }, at = function(v) {
    fn(t.removed, {
      element: v
    });
    try {
      G(v).removeChild(v);
    } catch {
      D(v);
    }
  }, ut = function(v, C) {
    try {
      fn(t.removed, {
        attribute: C.getAttributeNode(v),
        from: C
      });
    } catch {
      fn(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(v), v === "is")
      if (se || Ue)
        try {
          at(C);
        } catch {
        }
      else
        try {
          C.setAttribute(v, "");
        } catch {
        }
  }, dr = function(v) {
    let C = null, Y = null;
    if (re)
      v = "<remove></remove>" + v;
    else {
      const we = Ba(v, /^[\r\n\t ]+/);
      Y = we && we[0];
    }
    ct === "application/xhtml+xml" && pt === nt && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const ye = V ? V.createHTML(v) : v;
    if (pt === nt)
      try {
        C = new L().parseFromString(ye, ct);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = ce.createDocument(pt, "template", null);
      try {
        C.documentElement.innerHTML = Vt ? T : ye;
      } catch {
      }
    }
    const ve = C.body || C.documentElement;
    return v && Y && ve.insertBefore(r.createTextNode(Y), ve.childNodes[0] || null), pt === nt ? je.call(C, J ? "html" : "body")[0] : J ? C.documentElement : ve;
  }, Mt = function(v) {
    return _e.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, zt = function(v) {
    return v instanceof x && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof _) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
  }, $t = function(v) {
    return typeof m == "function" && v instanceof m;
  };
  function Ke(y, v, C) {
    Jn(y, (Y) => {
      Y.call(t, v, C, st);
    });
  }
  const fr = function(v) {
    let C = null;
    if (Ke(ue.beforeSanitizeElements, v, null), zt(v))
      return at(v), !0;
    const Y = fe(v.nodeName);
    if (Ke(ue.uponSanitizeElement, v, {
      tagName: Y,
      allowedTags: oe
    }), de && v.hasChildNodes() && !$t(v.firstElementChild) && xt(/<[/\w!]/g, v.innerHTML) && xt(/<[/\w!]/g, v.textContent) || v.nodeType === gn.progressingInstruction || de && v.nodeType === gn.comment && xt(/<[/\w]/g, v.data))
      return at(v), !0;
    if (!(A.tagCheck instanceof Function && A.tagCheck(Y)) && (!oe[Y] || b[Y])) {
      if (!b[Y] && pr(Y) && (j.tagNameCheck instanceof RegExp && xt(j.tagNameCheck, Y) || j.tagNameCheck instanceof Function && j.tagNameCheck(Y)))
        return !1;
      if (q && !Ne[Y]) {
        const ye = G(v) || v.parentNode, ve = W(v) || v.childNodes;
        if (ve && ye) {
          const we = ve.length;
          for (let Me = we - 1; Me >= 0; --Me) {
            const Ye = k(ve[Me], !0);
            Ye.__removalCount = (v.__removalCount || 0) + 1, ye.insertBefore(Ye, H(v));
          }
        }
      }
      return at(v), !0;
    }
    return v instanceof p && !Sr(v) || (Y === "noscript" || Y === "noembed" || Y === "noframes") && xt(/<\/no(script|embed|frames)/i, v.innerHTML) ? (at(v), !0) : (ne && v.nodeType === gn.text && (C = v.textContent, Jn([me, Re, Pe], (ye) => {
      C = pn(C, ye, " ");
    }), v.textContent !== C && (fn(t.removed, {
      element: v.cloneNode()
    }), v.textContent = C)), Ke(ue.afterSanitizeElements, v, null), !1);
  }, Pt = function(v, C, Y) {
    if (ee[C] || ot && (C === "id" || C === "name") && (Y in r || Y in Ot))
      return !1;
    if (!(Q && !ee[C] && xt(Ee, C))) {
      if (!(ae && xt(lt, C))) {
        if (!(A.attributeCheck instanceof Function && A.attributeCheck(C, v))) {
          if (!O[C] || ee[C]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(pr(v) && (j.tagNameCheck instanceof RegExp && xt(j.tagNameCheck, v) || j.tagNameCheck instanceof Function && j.tagNameCheck(v)) && (j.attributeNameCheck instanceof RegExp && xt(j.attributeNameCheck, C) || j.attributeNameCheck instanceof Function && j.attributeNameCheck(C, v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              C === "is" && j.allowCustomizedBuiltInElements && (j.tagNameCheck instanceof RegExp && xt(j.tagNameCheck, Y) || j.tagNameCheck instanceof Function && j.tagNameCheck(Y)))
            ) return !1;
          } else if (!Bt[C]) {
            if (!xt(et, pn(Y, Oe, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && v !== "script" && nf(Y, "data:") === 0 && rr[v])) {
                if (!(te && !xt(Fe, pn(Y, Oe, "")))) {
                  if (Y)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, pr = function(v) {
    return v !== "annotation-xml" && Ba(v, Be);
  }, Xt = function(v) {
    Ke(ue.beforeSanitizeAttributes, v, null);
    const {
      attributes: C
    } = v;
    if (!C || zt(v))
      return;
    const Y = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: O,
      forceKeepAttr: void 0
    };
    let ye = C.length;
    for (; ye--; ) {
      const ve = C[ye], {
        name: we,
        namespaceURI: Me,
        value: Ye
      } = ve, yt = fe(we), Ze = Ye;
      let He = we === "value" ? Ze : af(Ze);
      if (Y.attrName = yt, Y.attrValue = He, Y.keepAttr = !0, Y.forceKeepAttr = void 0, Ke(ue.uponSanitizeAttribute, v, Y), He = Y.attrValue, We && (yt === "id" || yt === "name") && (ut(we, v), He = Se + He), de && xt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, He)) {
        ut(we, v);
        continue;
      }
      if (yt === "attributename" && Ba(He, "href")) {
        ut(we, v);
        continue;
      }
      if (Y.forceKeepAttr)
        continue;
      if (!Y.keepAttr) {
        ut(we, v);
        continue;
      }
      if (!X && xt(/\/>/i, He)) {
        ut(we, v);
        continue;
      }
      ne && Jn([me, Re, Pe], (Cr) => {
        He = pn(He, Cr, " ");
      });
      const Nt = fe(v.nodeName);
      if (!Pt(Nt, yt, He)) {
        ut(we, v);
        continue;
      }
      if (V && typeof $ == "object" && typeof $.getAttributeType == "function" && !Me)
        switch ($.getAttributeType(Nt, yt)) {
          case "TrustedHTML": {
            He = V.createHTML(He);
            break;
          }
          case "TrustedScriptURL": {
            He = V.createScriptURL(He);
            break;
          }
        }
      if (He !== Ze)
        try {
          Me ? v.setAttributeNS(Me, we, He) : v.setAttribute(we, He), zt(v) ? at(v) : Mo(t.removed);
        } catch {
          ut(we, v);
        }
    }
    Ke(ue.afterSanitizeAttributes, v, null);
  }, sr = function y(v) {
    let C = null;
    const Y = Mt(v);
    for (Ke(ue.beforeSanitizeShadowDOM, v, null); C = Y.nextNode(); )
      Ke(ue.uponSanitizeShadowNode, C, null), fr(C), Xt(C), C.content instanceof s && y(C.content);
    Ke(ue.afterSanitizeShadowDOM, v, null);
  };
  return t.sanitize = function(y) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, Y = null, ye = null, ve = null;
    if (Vt = !y, Vt && (y = "<!-->"), typeof y != "string" && !$t(y))
      if (typeof y.toString == "function") {
        if (y = y.toString(), typeof y != "string")
          throw hn("dirty is not a string, aborting");
      } else
        throw hn("toString is not a function");
    if (!t.isSupported)
      return y;
    if (ge || Rt(v), t.removed = [], typeof y == "string" && (ie = !1), ie) {
      if (y.nodeName) {
        const Ye = fe(y.nodeName);
        if (!oe[Ye] || b[Ye])
          throw hn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (y instanceof m)
      C = dr("<!---->"), Y = C.ownerDocument.importNode(y, !0), Y.nodeType === gn.element && Y.nodeName === "BODY" || Y.nodeName === "HTML" ? C = Y : C.appendChild(Y);
    else {
      if (!se && !ne && !J && // eslint-disable-next-line unicorn/prefer-includes
      y.indexOf("<") === -1)
        return V && le ? V.createHTML(y) : y;
      if (C = dr(y), !C)
        return se ? null : le ? T : "";
    }
    C && re && at(C.firstChild);
    const we = Mt(ie ? y : C);
    for (; ye = we.nextNode(); )
      fr(ye), Xt(ye), ye.content instanceof s && sr(ye.content);
    if (ie)
      return y;
    if (se) {
      if (Ue)
        for (ve = Ie.call(C.ownerDocument); C.firstChild; )
          ve.appendChild(C.firstChild);
      else
        ve = C;
      return (O.shadowroot || O.shadowrootmode) && (ve = Ge.call(n, ve, !0)), ve;
    }
    let Me = J ? C.outerHTML : C.innerHTML;
    return J && oe["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && xt(ll, C.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + Me), ne && Jn([me, Re, Pe], (Ye) => {
      Me = pn(Me, Ye, " ");
    }), V && le ? V.createHTML(Me) : Me;
  }, t.setConfig = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Rt(y), ge = !0;
  }, t.clearConfig = function() {
    st = null, ge = !1;
  }, t.isValidAttribute = function(y, v, C) {
    st || Rt({});
    const Y = fe(y), ye = fe(v);
    return Pt(Y, ye, C);
  }, t.addHook = function(y, v) {
    typeof v == "function" && fn(ue[y], v);
  }, t.removeHook = function(y, v) {
    if (v !== void 0) {
      const C = tf(ue[y], v);
      return C === -1 ? void 0 : rf(ue[y], C, 1)[0];
    }
    return Mo(ue[y]);
  }, t.removeHooks = function(y) {
    ue[y] = [];
  }, t.removeAllHooks = function() {
    ue = Wo();
  }, t;
}
cl();
var ul = { exports: {} }, Ya, Vo;
function wf() {
  if (Vo) return Ya;
  Vo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ya = e, Ya;
}
var Xa, qo;
function Sf() {
  if (qo) return Xa;
  qo = 1;
  var e = wf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Xa = function() {
    function n(d, m, p, f, _, x) {
      if (x !== e) {
        var L = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw L.name = "Invariant Violation", L;
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
  }, Xa;
}
ul.exports = Sf()();
var kf = ul.exports;
const dt = /* @__PURE__ */ ds(kf);
dt.shape({
  event: dt.string,
  action: dt.string,
  name: dt.string,
  region: dt.string,
  section: dt.string,
  component: dt.string,
  type: dt.string,
  text: dt.string
});
const En = ({ children: e }) => /* @__PURE__ */ it.jsx(it.Fragment, { children: e });
En.propTypes = {
  children: dt.oneOfType([
    dt.arrayOf(dt.node),
    dt.node,
    dt.string
  ])
};
var xf = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", d = 0; d < arguments.length; d++) {
        var m = arguments[d];
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
      var d = "";
      for (var m in s)
        t.call(s, m) && s[m] && (d = a(d, m));
      return d;
    }
    function a(s, d) {
      return d ? s ? s + " " + d : s + d : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(xf);
({
  ...En.propTypes
});
const dl = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ it.jsx("div", { className: t, ...r, children: /* @__PURE__ */ it.jsx("div", { className: "row", children: e }) });
dl.propTypes = {
  children: En.propTypes.children
};
({
  ...dl.propTypes
});
En.propTypes.children, dt.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
En.propTypes.children;
function Ci({
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
const Sn = {
  header: {
    color: "dark",
    text: ""
  },
  ctaButton: {
    color: "gold",
    text: "More stories and videos",
    url: "https://news.asu.edu"
  },
  cardButton: {
    color: "maroon",
    text: "Read at ASU News",
    size: "default"
  },
  dataSource: {
    url: "https://asunow.asu.edu/feeds-json"
  }
}, Go = ["newsUnits", "interests", "audiences", "eventTypes"], _f = (e, t = "") => {
  if (!t) return !0;
  const r = t.split(",");
  for (let n = 0; n < Go.length; n += 1) {
    const a = Go[n];
    for (let s = 0; s < r.length; s += 1) {
      const d = r[s], p = (e[a] || "").match(new RegExp(d, "gi"));
      if ((p == null ? void 0 : p.length) > 0) return !0;
    }
  }
  return !1;
}, Yo = (e, t) => {
  let r = e;
  return r.length > t && (r = r.substr(0, r.lastIndexOf(" ", t)), r += "..."), r;
}, Tf = ({ node: e }, t) => ({
  index: t,
  id: e.nid,
  imageUrl: e.image_url,
  imageAltText: e.image_alt,
  title: Yo(e.title, 80),
  content: Yo(e == null ? void 0 : e.clas_teaser, 140),
  buttonLink: e.path,
  interests: e.interests,
  newsUnits: e.news_units,
  eventTypes: e.event_types,
  alias: e.path
  // Used for card link in title, matches component-events data transformer
}), Fr = ({
  children: e,
  header: t,
  ctaButton: r,
  dataSource: n,
  maxItems: a
}) => {
  var m;
  const s = (m = n == null ? void 0 : n.filters) == null ? void 0 : m.replace(/_/g, " "), d = { ...n, filters: s };
  return /* @__PURE__ */ it.jsx(
    Bs,
    {
      renderHeader: t && r ? /* @__PURE__ */ it.jsx(
        qs,
        {
          header: t,
          ctaButton: r,
          defaultProps: Sn
        }
      ) : null,
      renderBody: /* @__PURE__ */ it.jsx(Gs, { children: e }),
      dataTransformer: Tf,
      dataFilter: _f,
      dataSource: d,
      defaultProps: Sn,
      noFeedText: "No news to show.",
      maxItems: a
    }
  );
};
Fr.propTypes = {
  header: Ti,
  ctaButton: Ei,
  dataSource: Vs,
  maxItems: dt.number,
  children: dt.element
};
var fl = { exports: {} }, qe = {};
var Xo;
function Ef() {
  if (Xo) return qe;
  Xo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), $ = Symbol.for("react.client.reference");
  function E(k) {
    if (typeof k == "object" && k !== null) {
      var D = k.$$typeof;
      switch (D) {
        case e:
          switch (k = k.type, k) {
            case r:
            case a:
            case n:
            case p:
            case f:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case d:
                case m:
                case x:
                case _:
                  return k;
                case s:
                  return k;
                default:
                  return D;
              }
          }
        case t:
          return D;
      }
    }
  }
  return qe.ContextConsumer = s, qe.ContextProvider = d, qe.Element = e, qe.ForwardRef = m, qe.Fragment = r, qe.Lazy = x, qe.Memo = _, qe.Portal = t, qe.Profiler = a, qe.StrictMode = n, qe.Suspense = p, qe.SuspenseList = f, qe.isContextConsumer = function(k) {
    return E(k) === s;
  }, qe.isContextProvider = function(k) {
    return E(k) === d;
  }, qe.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, qe.isForwardRef = function(k) {
    return E(k) === m;
  }, qe.isFragment = function(k) {
    return E(k) === r;
  }, qe.isLazy = function(k) {
    return E(k) === x;
  }, qe.isMemo = function(k) {
    return E(k) === _;
  }, qe.isPortal = function(k) {
    return E(k) === t;
  }, qe.isProfiler = function(k) {
    return E(k) === a;
  }, qe.isStrictMode = function(k) {
    return E(k) === n;
  }, qe.isSuspense = function(k) {
    return E(k) === p;
  }, qe.isSuspenseList = function(k) {
    return E(k) === f;
  }, qe.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === a || k === n || k === p || k === f || k === L || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === _ || k.$$typeof === d || k.$$typeof === s || k.$$typeof === m || k.$$typeof === $ || k.getModuleId !== void 0);
  }, qe.typeOf = E, qe;
}
fl.exports = Ef();
var pl = fl.exports;
function Af(e) {
  function t(z, O, M, j, b) {
    for (var ee = 0, A = 0, ae = 0, Q = 0, te, X, ne = 0, de = 0, J, ge = J = te = 0, re = 0, se = 0, Ue = 0, le = 0, ot = M.length, We = ot - 1, Se, q = "", ie = "", Xe = "", Ne = "", De; re < ot; ) {
      if (X = M.charCodeAt(re), re === We && A + Q + ae + ee !== 0 && (A !== 0 && (X = A === 47 ? 10 : 47), Q = ae = ee = 0, ot++, We++), A + Q + ae + ee === 0) {
        if (re === We && (0 < se && (q = q.replace(L, "")), 0 < q.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              q += M.charAt(re);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (q = q.trim(), te = q.charCodeAt(0), J = 1, le = ++re; re < ot; ) {
              switch (X = M.charCodeAt(re)) {
                case 123:
                  J++;
                  break;
                case 125:
                  J--;
                  break;
                case 47:
                  switch (X = M.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < We; ++ge)
                          switch (M.charCodeAt(ge)) {
                            case 47:
                              if (X === 42 && M.charCodeAt(ge - 1) === 42 && re + 2 !== ge) {
                                re = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                re = ge + 1;
                                break e;
                              }
                          }
                        re = ge;
                      }
                  }
                  break;
                case 91:
                  X++;
                case 40:
                  X++;
                case 34:
                case 39:
                  for (; re++ < We && M.charCodeAt(re) !== X; )
                    ;
              }
              if (J === 0) break;
              re++;
            }
            switch (J = M.substring(le, re), te === 0 && (te = (q = q.replace(x, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < se && (q = q.replace(L, "")), X = q.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    se = O;
                    break;
                  default:
                    se = lt;
                }
                if (J = t(O, se, J, X, b + 1), le = J.length, 0 < Oe && (se = r(lt, q, Ue), De = m(3, J, se, O, Re, me, le, X, b, j), q = se.join(""), De !== void 0 && (le = (J = De.trim()).length) === 0 && (X = 0, J = "")), 0 < le) switch (X) {
                  case 115:
                    q = q.replace(ce, d);
                  case 100:
                  case 109:
                  case 45:
                    J = q + "{" + J + "}";
                    break;
                  case 107:
                    q = q.replace(W, "$1 $2"), J = q + "{" + J + "}", J = Ee === 1 || Ee === 2 && s("@" + J, 3) ? "@-webkit-" + J + "@" + J : "@" + J;
                    break;
                  default:
                    J = q + J, j === 112 && (J = (ie += J, ""));
                }
                else J = "";
                break;
              default:
                J = t(O, r(O, q, Ue), J, j, b + 1);
            }
            Xe += J, J = Ue = se = ge = te = 0, q = "", X = M.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (q = (0 < se ? q.replace(L, "") : q).trim(), 1 < (le = q.length)) switch (ge === 0 && (te = q.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (le = (q = q.replace(" ", ":")).length), 0 < Oe && (De = m(1, q, O, z, Re, me, ie.length, j, b, j)) !== void 0 && (le = (q = De.trim()).length) === 0 && (q = "\0\0"), te = q.charCodeAt(0), X = q.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  Ne += q + M.charAt(re);
                  break;
                }
              default:
                q.charCodeAt(le - 1) !== 58 && (ie += a(q, te, X, q.charCodeAt(2)));
            }
            Ue = se = ge = te = 0, q = "", X = M.charCodeAt(++re);
        }
      }
      switch (X) {
        case 13:
        case 10:
          A === 47 ? A = 0 : 1 + te === 0 && j !== 107 && 0 < q.length && (se = 1, q += "\0"), 0 < Oe * et && m(0, q, O, z, Re, me, ie.length, j, b, j), me = 1, Re++;
          break;
        case 59:
        case 125:
          if (A + Q + ae + ee === 0) {
            me++;
            break;
          }
        default:
          switch (me++, Se = M.charAt(re), X) {
            case 9:
            case 32:
              if (Q + ee + A === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  Se = "";
                  break;
                default:
                  X !== 32 && (Se = " ");
              }
              break;
            case 0:
              Se = "\\0";
              break;
            case 12:
              Se = "\\f";
              break;
            case 11:
              Se = "\\v";
              break;
            case 38:
              Q + A + ee === 0 && (se = Ue = 1, Se = "\f" + Se);
              break;
            case 108:
              if (Q + A + ee + Pe === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && M.charCodeAt(re - 3) === 58 && (Pe = ne);
                case 8:
                  de === 111 && (Pe = de);
              }
              break;
            case 58:
              Q + A + ee === 0 && (ge = re);
              break;
            case 44:
              A + ae + Q + ee === 0 && (se = 1, Se += "\r");
              break;
            case 34:
            case 39:
              A === 0 && (Q = Q === X ? 0 : Q === 0 ? X : Q);
              break;
            case 91:
              Q + A + ae === 0 && ee++;
              break;
            case 93:
              Q + A + ae === 0 && ee--;
              break;
            case 41:
              Q + A + ee === 0 && ae--;
              break;
            case 40:
              if (Q + A + ee === 0) {
                if (te === 0) switch (2 * ne + 3 * de) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ae++;
              }
              break;
            case 64:
              A + ae + Q + ee + ge + J === 0 && (J = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + ee + ae)) switch (A) {
                case 0:
                  switch (2 * X + 3 * M.charCodeAt(re + 1)) {
                    case 235:
                      A = 47;
                      break;
                    case 220:
                      le = re, A = 42;
                  }
                  break;
                case 42:
                  X === 47 && ne === 42 && le + 2 !== re && (M.charCodeAt(le + 2) === 33 && (ie += M.substring(le, re + 1)), Se = "", A = 0);
              }
          }
          A === 0 && (q += Se);
      }
      de = ne, ne = X, re++;
    }
    if (le = ie.length, 0 < le) {
      if (se = O, 0 < Oe && (De = m(2, ie, se, z, Re, me, le, j, b, j), De !== void 0 && (ie = De).length === 0)) return Ne + ie + Xe;
      if (ie = se.join(",") + "{" + ie + "}", Ee * Pe !== 0) {
        switch (Ee !== 2 || s(ie, 2) || (Pe = 0), Pe) {
          case 111:
            ie = ie.replace(V, ":-moz-$1") + ie;
            break;
          case 112:
            ie = ie.replace(G, "::-webkit-input-$1") + ie.replace(G, "::-moz-$1") + ie.replace(G, ":-ms-input-$1") + ie;
        }
        Pe = 0;
      }
    }
    return Ne + ie + Xe;
  }
  function r(z, O, M) {
    var j = O.trim().split(D);
    O = j;
    var b = j.length, ee = z.length;
    switch (ee) {
      case 0:
      case 1:
        var A = 0;
        for (z = ee === 0 ? "" : z[0] + " "; A < b; ++A)
          O[A] = n(z, O[A], M).trim();
        break;
      default:
        var ae = A = 0;
        for (O = []; A < b; ++A)
          for (var Q = 0; Q < ee; ++Q)
            O[ae++] = n(z[Q] + " ", j[A], M).trim();
    }
    return O;
  }
  function n(z, O, M) {
    var j = O.charCodeAt(0);
    switch (33 > j && (j = (O = O.trim()).charCodeAt(0)), j) {
      case 38:
        return O.replace(H, "$1" + z.trim());
      case 58:
        return z.trim() + O.replace(H, "$1" + z.trim());
      default:
        if (0 < 1 * M && 0 < O.indexOf("\f")) return O.replace(H, (z.charCodeAt(0) === 58 ? "" : "$1") + z.trim());
    }
    return z + O;
  }
  function a(z, O, M, j) {
    var b = z + ";", ee = 2 * O + 3 * M + 4 * j;
    if (ee === 944) {
      z = b.indexOf(":", 9) + 1;
      var A = b.substring(z, b.length - 1).trim();
      return A = b.substring(0, z).trim() + A + ";", Ee === 1 || Ee === 2 && s(A, 1) ? "-webkit-" + A + A : A;
    }
    if (Ee === 0 || Ee === 2 && !s(b, 1)) return b;
    switch (ee) {
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
        if (0 < b.indexOf("image-set(", 11)) return b.replace(ue, "$1-webkit-$2") + b;
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
        return A = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + A + "-webkit-" + b + "-ms-flex-pack" + A + b;
      case 1005:
        return E.test(b) ? b.replace($, ":-webkit-") + b.replace($, ":-moz-") + b : b;
      case 1e3:
        switch (A = b.substring(13).trim(), O = A.indexOf("-") + 1, A.charCodeAt(0) + A.charCodeAt(O)) {
          case 226:
            A = b.replace(T, "tb");
            break;
          case 232:
            A = b.replace(T, "tb-rl");
            break;
          case 220:
            A = b.replace(T, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + A + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (O = (b = z).length - 10, A = (b.charCodeAt(O) === 33 ? b.substring(0, O) : b).substring(z.indexOf(":", 7) + 1).trim(), ee = A.charCodeAt(0) + (A.charCodeAt(7) | 0)) {
          case 203:
            if (111 > A.charCodeAt(8)) break;
          case 115:
            b = b.replace(A, "-webkit-" + A) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(A, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + b.replace(A, "-webkit-" + A) + ";" + b.replace(A, "-ms-" + A + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45) switch (b.charCodeAt(6)) {
          case 105:
            return A = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + A + "-ms-flex-" + A + b;
          case 115:
            return "-webkit-" + b + "-ms-flex-item-" + b.replace(Ie, "") + b;
          default:
            return "-webkit-" + b + "-ms-flex-line-pack" + b.replace("align-content", "").replace(Ie, "") + b;
        }
        break;
      case 973:
      case 989:
        if (b.charCodeAt(3) !== 45 || b.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Ge.test(z) === !0) return (A = z.substring(z.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(z.replace("stretch", "fill-available"), O, M, j).replace(":fill-available", ":stretch") : b.replace(A, "-webkit-" + A) + b.replace(A, "-moz-" + A.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, M + j === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10)) return b.substring(0, b.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(z, O) {
    var M = z.indexOf(O === 1 ? ":" : "{"), j = z.substring(0, O !== 3 ? M : 10);
    return M = z.substring(M + 1, z.length - 1), Be(O !== 2 ? j : j.replace(je, "$1"), M, O);
  }
  function d(z, O) {
    var M = a(O, O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2));
    return M !== O + ";" ? M.replace(_e, " or ($1)").substring(4) : "(" + O + ")";
  }
  function m(z, O, M, j, b, ee, A, ae, Q, te) {
    for (var X = 0, ne = O, de; X < Oe; ++X)
      switch (de = Fe[X].call(_, z, ne, M, j, b, ee, A, ae, Q, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = de;
      }
    if (ne !== O) return ne;
  }
  function p(z) {
    switch (z) {
      case void 0:
      case null:
        Oe = Fe.length = 0;
        break;
      default:
        if (typeof z == "function") Fe[Oe++] = z;
        else if (typeof z == "object") for (var O = 0, M = z.length; O < M; ++O)
          p(z[O]);
        else et = !!z | 0;
    }
    return p;
  }
  function f(z) {
    return z = z.prefix, z !== void 0 && (Be = null, z ? typeof z != "function" ? Ee = 1 : (Ee = 2, Be = z) : Ee = 0), f;
  }
  function _(z, O) {
    var M = z;
    if (33 > M.charCodeAt(0) && (M = M.trim()), oe = M, M = [oe], 0 < Oe) {
      var j = m(-1, O, M, M, Re, me, 0, 0, 0, 0);
      j !== void 0 && typeof j == "string" && (O = j);
    }
    var b = t(lt, M, O, 0, 0);
    return 0 < Oe && (j = m(-2, b, M, M, Re, me, b.length, 0, 0, 0), j !== void 0 && (b = j)), oe = "", Pe = 0, me = Re = 1, b;
  }
  var x = /^\0+/g, L = /[\0\r\f]/g, $ = /: */g, E = /zoo|gra/, k = /([,: ])(transform)/g, D = /,\r+?/g, H = /([\t\r\n ])*\f?&/g, W = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, V = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, _e = /([\s\S]*?);/g, Ie = /-self|flex-/g, je = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ge = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, me = 1, Re = 1, Pe = 0, Ee = 1, lt = [], Fe = [], Oe = 0, Be = null, et = 0, oe = "";
  return _.use = p, _.set = f, e !== void 0 && f(e), _;
}
var Cf = {
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
function Of(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Rf = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Zo = /* @__PURE__ */ Of(
  function(e) {
    return Rf.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), hl = { exports: {} }, $e = {};
var Jo;
function Pf() {
  if (Jo) return $e;
  Jo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, L = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, H = e ? Symbol.for("react.responder") : 60118, W = e ? Symbol.for("react.scope") : 60119;
  function G(T) {
    if (typeof T == "object" && T !== null) {
      var ce = T.$$typeof;
      switch (ce) {
        case t:
          switch (T = T.type, T) {
            case p:
            case f:
            case n:
            case s:
            case a:
            case x:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case m:
                case _:
                case E:
                case $:
                case d:
                  return T;
                default:
                  return ce;
              }
          }
        case r:
          return ce;
      }
    }
  }
  function V(T) {
    return G(T) === f;
  }
  return $e.AsyncMode = p, $e.ConcurrentMode = f, $e.ContextConsumer = m, $e.ContextProvider = d, $e.Element = t, $e.ForwardRef = _, $e.Fragment = n, $e.Lazy = E, $e.Memo = $, $e.Portal = r, $e.Profiler = s, $e.StrictMode = a, $e.Suspense = x, $e.isAsyncMode = function(T) {
    return V(T) || G(T) === p;
  }, $e.isConcurrentMode = V, $e.isContextConsumer = function(T) {
    return G(T) === m;
  }, $e.isContextProvider = function(T) {
    return G(T) === d;
  }, $e.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, $e.isForwardRef = function(T) {
    return G(T) === _;
  }, $e.isFragment = function(T) {
    return G(T) === n;
  }, $e.isLazy = function(T) {
    return G(T) === E;
  }, $e.isMemo = function(T) {
    return G(T) === $;
  }, $e.isPortal = function(T) {
    return G(T) === r;
  }, $e.isProfiler = function(T) {
    return G(T) === s;
  }, $e.isStrictMode = function(T) {
    return G(T) === a;
  }, $e.isSuspense = function(T) {
    return G(T) === x;
  }, $e.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === n || T === f || T === s || T === a || T === x || T === L || typeof T == "object" && T !== null && (T.$$typeof === E || T.$$typeof === $ || T.$$typeof === d || T.$$typeof === m || T.$$typeof === _ || T.$$typeof === D || T.$$typeof === H || T.$$typeof === W || T.$$typeof === k);
  }, $e.typeOf = G, $e;
}
hl.exports = Pf();
var Nf = hl.exports, Oi = Nf, If = {
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
}, Df = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Lf = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ml = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ri = {};
Ri[Oi.ForwardRef] = Lf;
Ri[Oi.Memo] = ml;
function Ko(e) {
  return Oi.isMemo(e) ? ml : Ri[e.$$typeof] || If;
}
var jf = Object.defineProperty, Ff = Object.getOwnPropertyNames, Qo = Object.getOwnPropertySymbols, Mf = Object.getOwnPropertyDescriptor, zf = Object.getPrototypeOf, es = Object.prototype;
function gl(e, t, r) {
  if (typeof t != "string") {
    if (es) {
      var n = zf(t);
      n && n !== es && gl(e, n, r);
    }
    var a = Ff(t);
    Qo && (a = a.concat(Qo(t)));
    for (var s = Ko(e), d = Ko(t), m = 0; m < a.length; ++m) {
      var p = a[m];
      if (!Df[p] && !(r && r[p]) && !(d && d[p]) && !(s && s[p])) {
        var f = Mf(t, p);
        try {
          jf(e, p, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var $f = gl;
const Uf = /* @__PURE__ */ ds($f);
var vt = { env: { NODE_ENV: "production" } };
function br() {
  return (br = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ts = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, hi = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !pl.typeOf(e);
}, ha = Object.freeze([]), Tr = Object.freeze({});
function kn(e) {
  return typeof e == "function";
}
function rs(e) {
  return e.displayName || e.name || "Component";
}
function Pi(e) {
  return e && typeof e.styledComponentId == "string";
}
var qr = typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_ATTR || vt.env.SC_ATTR) || "data-styled", Ni = typeof window < "u" && "HTMLElement" in window, Hf = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && vt.env.REACT_APP_SC_DISABLE_SPEEDY : vt.env.SC_DISABLE_SPEEDY !== void 0 && vt.env.SC_DISABLE_SPEEDY !== "" ? vt.env.SC_DISABLE_SPEEDY !== "false" && vt.env.SC_DISABLE_SPEEDY : vt.env.NODE_ENV !== "production"));
function An(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Bf = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, d = s; r >= d; ) (d <<= 1) < 0 && An(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(a), this.length = d;
      for (var m = s; m < d; m++) this.groupSizes[m] = 0;
    }
    for (var p = this.indexOfGroup(r + 1), f = 0, _ = n.length; f < _; f++) this.tag.insertRule(p, n[f]) && (this.groupSizes[r]++, p++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var d = a; d < s; d++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), d = s + a, m = s; m < d; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), la = /* @__PURE__ */ new Map(), ma = /* @__PURE__ */ new Map(), vn = 1, Qn = function(e) {
  if (la.has(e)) return la.get(e);
  for (; ma.has(vn); ) vn++;
  var t = vn++;
  return la.set(e, t), ma.set(t, e), t;
}, Wf = function(e) {
  return ma.get(e);
}, Vf = function(e, t) {
  t >= vn && (vn = t + 1), la.set(e, t), ma.set(t, e);
}, qf = "style[" + qr + '][data-styled-version="5.3.11"]', Gf = new RegExp("^" + qr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Yf = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, d = a.length; s < d; s++) (n = a[s]) && e.registerName(t, n);
}, Xf = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var d = r[a].trim();
    if (d) {
      var m = d.match(Gf);
      if (m) {
        var p = 0 | parseInt(m[1], 10), f = m[2];
        p !== 0 && (Vf(f, p), Yf(e, f, m[3]), e.getTag().insertRules(p, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, Zf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, yl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(m) {
    for (var p = m.childNodes, f = p.length; f >= 0; f--) {
      var _ = p[f];
      if (_ && _.nodeType === 1 && _.hasAttribute(qr)) return _;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(qr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Zf();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, Jf = function() {
  function e(r) {
    var n = this.element = yl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, d = 0, m = s.length; d < m; d++) {
        var p = s[d];
        if (p.ownerNode === a) return p;
      }
      An(17);
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
}(), Kf = function() {
  function e(r) {
    var n = this.element = yl(r);
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
}(), Qf = function() {
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
}(), ns = Ni, ep = { isServer: !Ni, useCSSOMInjection: !Hf }, bl = function() {
  function e(r, n, a) {
    r === void 0 && (r = Tr), n === void 0 && (n = {}), this.options = br({}, ep, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Ni && ns && (ns = !1, function(s) {
      for (var d = document.querySelectorAll(qf), m = 0, p = d.length; m < p; m++) {
        var f = d[m];
        f && f.getAttribute(qr) !== "active" && (Xf(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Qn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(br({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new Qf(d) : s ? new Jf(d) : new Kf(d), new Bf(r)));
    var r, n, a, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Qn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(Qn(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Qn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", d = 0; d < a; d++) {
        var m = Wf(d);
        if (m !== void 0) {
          var p = r.names.get(m), f = n.getGroup(d);
          if (p && f && p.size) {
            var _ = qr + ".g" + d + '[id="' + m + '"]', x = "";
            p !== void 0 && p.forEach(function(L) {
              L.length > 0 && (x += L + ",");
            }), s += "" + f + _ + '{content:"' + x + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), tp = /(a)(d)/gi, as = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function mi(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = as(t % 52) + r;
  return (as(t % 52) + r).replace(tp, "$1-$2");
}
var Ur = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, vl = function(e) {
  return Ur(5381, e);
};
function rp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (kn(r) && !Pi(r)) return !1;
  }
  return !0;
}
var np = vl("5.3.11"), ap = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && rp(t), this.componentId = r, this.baseHash = Ur(np, r), this.baseStyle = n, bl.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Gr(this.rules, t, r, n).join(""), m = mi(Ur(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(a, m)) {
        var p = n(d, "." + m, void 0, a);
        r.insertRules(a, m, p);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, _ = Ur(this.baseHash, n.hash), x = "", L = 0; L < f; L++) {
        var $ = this.rules[L];
        if (typeof $ == "string") x += $;
        else if ($) {
          var E = Gr($, t, r, n), k = Array.isArray(E) ? E.join("") : E;
          _ = Ur(_, k + L), x += k;
        }
      }
      if (x) {
        var D = mi(_ >>> 0);
        if (!r.hasNameForId(a, D)) {
          var H = n(x, "." + D, void 0, a);
          r.insertRules(a, D, H);
        }
        s.push(D);
      }
    }
    return s.join(" ");
  }, e;
}(), ip = /^\s*\/\/.*$/gm, op = [":", "[", ".", "#"];
function sp(e) {
  var t, r, n, a, s = Tr, d = s.options, m = d === void 0 ? Tr : d, p = s.plugins, f = p === void 0 ? ha : p, _ = new Af(m), x = [], L = /* @__PURE__ */ function(k) {
    function D(H) {
      if (H) try {
        k(H + "}");
      } catch {
      }
    }
    return function(H, W, G, V, T, ce, _e, Ie, je, Ge) {
      switch (H) {
        case 1:
          if (je === 0 && W.charCodeAt(0) === 64) return k(W + ";"), "";
          break;
        case 2:
          if (Ie === 0) return W + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return k(G[0] + W), "";
            default:
              return W + (Ge === 0 ? "/*|*/" : "");
          }
        case -2:
          W.split("/*|*/}").forEach(D);
      }
    };
  }(function(k) {
    x.push(k);
  }), $ = function(k, D, H) {
    return D === 0 && op.indexOf(H[r.length]) !== -1 || H.match(a) ? k : "." + t;
  };
  function E(k, D, H, W) {
    W === void 0 && (W = "&");
    var G = k.replace(ip, ""), V = D && H ? H + " " + D + " { " + G + " }" : G;
    return t = W, r = D, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), _(H || !D ? "" : D, V);
  }
  return _.use([].concat(f, [function(k, D, H) {
    k === 2 && H.length && H[0].lastIndexOf(r) > 0 && (H[0] = H[0].replace(n, $));
  }, L, function(k) {
    if (k === -2) {
      var D = x;
      return x = [], D;
    }
  }])), E.hash = f.length ? f.reduce(function(k, D) {
    return D.name || An(15), Ur(k, D.name);
  }, 5381).toString() : "", E;
}
var wl = ft.createContext();
wl.Consumer;
var Sl = ft.createContext(), lp = (Sl.Consumer, new bl()), gi = sp();
function cp() {
  return wr(wl) || lp;
}
function up() {
  return wr(Sl) || gi;
}
var dp = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = gi);
      var d = n.name + s.hash;
      a.hasNameForId(n.id, d) || a.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return An(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = gi), this.name + t.hash;
  }, e;
}(), fp = /([A-Z])/, pp = /([A-Z])/g, hp = /^ms-/, mp = function(e) {
  return "-" + e.toLowerCase();
};
function is(e) {
  return fp.test(e) ? e.replace(pp, mp).replace(hp, "-ms-") : e;
}
var os = function(e) {
  return e == null || e === !1 || e === "";
};
function Gr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, m = e.length; d < m; d += 1) (a = Gr(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (os(e)) return "";
  if (Pi(e)) return "." + e.styledComponentId;
  if (kn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var p = e(t);
    return Gr(p, t, r, n);
  }
  var f;
  return e instanceof dp ? r ? (e.inject(r, n), e.getName(n)) : e : hi(e) ? function _(x, L) {
    var $, E, k = [];
    for (var D in x) x.hasOwnProperty(D) && !os(x[D]) && (Array.isArray(x[D]) && x[D].isCss || kn(x[D]) ? k.push(is(D) + ":", x[D], ";") : hi(x[D]) ? k.push.apply(k, _(x[D], D)) : k.push(is(D) + ": " + ($ = D, (E = x[D]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || $ in Cf || $.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return L ? [L + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var ss = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function gp(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return kn(e) || hi(e) ? ss(Gr(ts(ha, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ss(Gr(ts(e, r)));
}
var yp = function(e, t, r) {
  return r === void 0 && (r = Tr), e.theme !== r.theme && e.theme || t || r.theme;
}, bp = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, vp = /(^-|-$)/g;
function Za(e) {
  return e.replace(bp, "-").replace(vp, "");
}
var wp = function(e) {
  return mi(vl(e) >>> 0);
};
function ea(e) {
  return typeof e == "string" && vt.env.NODE_ENV === "production";
}
var yi = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Sp = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function kp(e, t, r) {
  var n = e[r];
  yi(t) && yi(n) ? kl(n, t) : e[r] = t;
}
function kl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (yi(d)) for (var m in d) Sp(m) && kp(e, d[m], m);
  }
  return e;
}
var xl = ft.createContext();
xl.Consumer;
var Ja = {};
function _l(e, t, r) {
  var n = Pi(e), a = !ea(e), s = t.attrs, d = s === void 0 ? ha : s, m = t.componentId, p = m === void 0 ? function(W, G) {
    var V = typeof W != "string" ? "sc" : Za(W);
    Ja[V] = (Ja[V] || 0) + 1;
    var T = V + "-" + wp("5.3.11" + V + Ja[V]);
    return G ? G + "-" + T : T;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, _ = f === void 0 ? function(W) {
    return ea(W) ? "styled." + W : "Styled(" + rs(W) + ")";
  }(e) : f, x = t.displayName && t.componentId ? Za(t.displayName) + "-" + t.componentId : t.componentId || p, L = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, $ = t.shouldForwardProp;
  n && e.shouldForwardProp && ($ = t.shouldForwardProp ? function(W, G, V) {
    return e.shouldForwardProp(W, G, V) && t.shouldForwardProp(W, G, V);
  } : e.shouldForwardProp);
  var E, k = new ap(r, x, n ? e.componentStyle : void 0), D = k.isStatic && d.length === 0, H = function(W, G) {
    return function(V, T, ce, _e) {
      var Ie = V.attrs, je = V.componentStyle, Ge = V.defaultProps, ue = V.foldedComponentIds, me = V.shouldForwardProp, Re = V.styledComponentId, Pe = V.target, Ee = function(j, b, ee) {
        j === void 0 && (j = Tr);
        var A = br({}, b, { theme: j }), ae = {};
        return ee.forEach(function(Q) {
          var te, X, ne, de = Q;
          for (te in kn(de) && (de = de(A)), de) A[te] = ae[te] = te === "className" ? (X = ae[te], ne = de[te], X && ne ? X + " " + ne : X || ne) : de[te];
        }), [A, ae];
      }(yp(T, wr(xl), Ge) || Tr, T, Ie), lt = Ee[0], Fe = Ee[1], Oe = function(j, b, ee, A) {
        var ae = cp(), Q = up(), te = b ? j.generateAndInjectStyles(Tr, ae, Q) : j.generateAndInjectStyles(ee, ae, Q);
        return te;
      }(je, _e, lt), Be = ce, et = Fe.$as || T.$as || Fe.as || T.as || Pe, oe = ea(et), z = Fe !== T ? br({}, T, {}, Fe) : T, O = {};
      for (var M in z) M[0] !== "$" && M !== "as" && (M === "forwardedAs" ? O.as = z[M] : (me ? me(M, Zo, et) : !oe || Zo(M)) && (O[M] = z[M]));
      return T.style && Fe.style !== T.style && (O.style = br({}, T.style, {}, Fe.style)), O.className = Array.prototype.concat(ue, Re, Oe !== Re ? Oe : null, T.className, Fe.className).filter(Boolean).join(" "), O.ref = Be, cs(et, O);
    }(E, W, G, D);
  };
  return H.displayName = _, (E = ft.forwardRef(H)).attrs = L, E.componentStyle = k, E.displayName = _, E.shouldForwardProp = $, E.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ha, E.styledComponentId = x, E.target = n ? e.target : e, E.withComponent = function(W) {
    var G = t.componentId, V = function(ce, _e) {
      if (ce == null) return {};
      var Ie, je, Ge = {}, ue = Object.keys(ce);
      for (je = 0; je < ue.length; je++) Ie = ue[je], _e.indexOf(Ie) >= 0 || (Ge[Ie] = ce[Ie]);
      return Ge;
    }(t, ["componentId"]), T = G && G + "-" + (ea(W) ? W : Za(rs(W)));
    return _l(W, br({}, V, { attrs: L, componentId: T }), r);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(W) {
    this._foldedDefaultProps = n ? kl({}, e.defaultProps, W) : W;
  } }), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), a && Uf(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var xn = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Tr), !pl.isValidElementType(n)) return An(1, String(n));
    var s = function() {
      return r(n, a, gp.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, br({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, br({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(_l, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  xn[e] = xn(e);
});
const xp = xn.section``, _p = (e, t, r) => ({
  id: t,
  imageSource: e.imageUrl,
  imageAltText: e.imageAltText,
  title: e.title,
  content: e.content,
  buttons: [
    {
      ariaLabel: r.text,
      color: r.color,
      label: r.text,
      size: r.size,
      href: e.buttonLink
    }
  ]
}), Tp = ({ cardButton: e }) => {
  const { feeds: t } = wr(ba), r = t == null ? void 0 : t.map(
    (n, a) => _p(n, a, e)
  );
  return /* @__PURE__ */ it.jsx(xp, { children: /* @__PURE__ */ it.jsx(
    il,
    {
      width: "auto",
      cardType: "story",
      perView: "3",
      cardItems: r || []
    }
  ) });
}, Tl = ({ cardButton: e, ...t }) => (Er(() => {
  typeof window < "u" && Ci({
    packageName: "component-news",
    component: "CardCarouselNews",
    type: "NA",
    configuration: {
      cardButton: e,
      props: t
    }
  });
}, []), // Calling the high order component that fetches the data
/* @__PURE__ */ it.jsx(Fr, { ...t, children: /* @__PURE__ */ it.jsx(
  Tp,
  {
    cardButton: { ...Sn.cardButton, ...e }
  }
) }));
Tl.propTypes = Fr.propTypes;
const El = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), Ep = xn.section`
  .c-card {
    height: 100%;
  }
`, Ap = (e, t, r) => /* @__PURE__ */ it.jsx(
  "div",
  {
    className: "col col-12 col-md-6 col-lg-4 cards-items-container",
    children: /* @__PURE__ */ it.jsx(
      gr,
      {
        type: "default",
        eventFormat: "inline",
        eventLocation: e.location,
        clickable: !!e.buttonLink,
        title: e.title,
        body: `<p class="card-text text-dark">${e.content}</p>`,
        image: e.imageUrl,
        imageAltText: e.imageAltText,
        linkLabel: e.eventButtonText,
        linkUrl: e.eventButtonUrl || e.buttonLink,
        buttons: [
          {
            ariaLabel: t.text,
            color: t.color,
            label: t.text,
            size: t.size,
            href: e.buttonLink
          }
        ],
        tags: r ? [] : El(e == null ? void 0 : e.interests)
      }
    )
  },
  e.id
), Cp = ({ cardButton: e, hideTags: t }) => {
  const { feeds: r } = wr(ba), n = t === !0 || t === "true";
  return /* @__PURE__ */ it.jsx(Ep, { className: "row row-spaced", "data-testid": "grid-view-container", children: r == null ? void 0 : r.map((a, s) => /* @__PURE__ */ it.jsx(ft.Fragment, { children: Ap(a, e, n) }, s)) });
}, Al = ({ cardButton: e, hideTags: t = !0, ...r }) => (Er(() => {
  typeof window < "u" && Ci({
    packageName: "component-news",
    component: "CardGridNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...r
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ it.jsx(Fr, { ...r, children: /* @__PURE__ */ it.jsx(
  Cp,
  {
    cardButton: { ...Sn.cardButton, ...e },
    hideTags: t
  }
) }));
Al.propTypes = {
  ...Fr.propTypes,
  cardButton: Ws,
  hideTags: dt.oneOf(["true", "false", !0, !1])
};
const Op = xn.section``, Rp = (e, t, r) => /* @__PURE__ */ it.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ it.jsx(
  gr,
  {
    type: "story",
    horizontal: !0,
    eventFormat: "inline",
    eventLocation: e.location,
    clickable: !!e.buttonLink,
    title: e.title,
    body: `<p class="card-text text-dark">${e.content}</p>`,
    image: e.imageUrl,
    imageAltText: e.imageAltText,
    linkLabel: e.eventButtonText,
    linkUrl: e.eventButtonUrl || (e == null ? void 0 : e.buttonLink),
    buttons: [
      {
        ariaLabel: t.text,
        color: t.color,
        label: t.text,
        size: t.size,
        href: e.buttonLink
      }
    ],
    tags: r ? [] : El(e == null ? void 0 : e.interests)
  }
) }, e.id), Pp = ({ cardButton: e, hideTags: t }) => {
  const { feeds: r } = wr(ba), n = t === !0 || t === "true";
  return /* @__PURE__ */ it.jsx(Op, { className: "row-spaced", "data-testid": "list-view-container", children: r == null ? void 0 : r.map((a, s) => /* @__PURE__ */ it.jsx(ft.Fragment, { children: Rp(a, e, n) }, s)) });
}, Cl = ({ cardButton: e, hideTags: t = !0, ...r }) => (Er(() => {
  typeof window < "u" && Ci({
    packageName: "component-news",
    component: "CardListlNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...r
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ it.jsx(Fr, { ...r, children: /* @__PURE__ */ it.jsx(
  Pp,
  {
    cardButton: { ...Sn.cardButton, ...e },
    hideTags: t
  }
) }));
Cl.propTypes = {
  ...Fr.propTypes,
  feedCardButtonShape: Ws,
  hideTags: dt.oneOf(["true", "false", !0, !1])
};
var Ol, ls = us;
Ol = ls.createRoot, ls.hydrateRoot;
const Ii = (e, t, r) => {
  Ol(r).render(ft.createElement(e, t));
}, Dp = ({ targetSelector: e, props: t }) => {
  Ii(Al, t, document.querySelector(e));
}, Lp = ({ targetSelector: e, props: t }) => {
  Ii(Cl, t, document.querySelector(e));
}, jp = ({ targetSelector: e, props: t }) => {
  Ii(Tl, t, document.querySelector(e));
};
export {
  Tl as CardCarouselNews,
  Al as CardGridNews,
  Cl as CardListlNews,
  jp as initCardCarouselNewsComponent,
  Dp as initCardGridNewsComponent,
  Lp as initCardListNewsComponent
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
