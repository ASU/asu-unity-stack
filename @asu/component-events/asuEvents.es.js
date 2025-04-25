import et, { Component as ps, createContext as hs, forwardRef as Qo, useRef as ms, useImperativeHandle as gs, useId as ys, useContext as Jt, createElement as Zo, useState as Gr, useEffect as Qr } from "react";
import Jo from "react-dom";
function ei(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ti = { exports: {} }, zr = {};
var Ja;
function bs() {
  if (Ja) return zr;
  Ja = 1;
  var e = et, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(v, b, m) {
    var N, x = {}, L = null, X = null;
    m !== void 0 && (L = "" + m), b.key !== void 0 && (L = "" + b.key), b.ref !== void 0 && (X = b.ref);
    for (N in b) o.call(b, N) && !f.hasOwnProperty(N) && (x[N] = b[N]);
    if (v && v.defaultProps) for (N in b = v.defaultProps, b) x[N] === void 0 && (x[N] = b[N]);
    return { $$typeof: t, type: v, key: L, ref: X, props: x, _owner: c.current };
  }
  return zr.Fragment = a, zr.jsx = y, zr.jsxs = y, zr;
}
ti.exports = bs();
var mt = ti.exports;
function ri({
  packageName: e = "",
  component: t = "",
  type: a = "",
  configuration: o = {}
}) {
  if (!e || !t) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[e] = {
    component: t,
    type: a,
    configuration: o
  };
}
function Sa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ni = { exports: {} }, Ur = {}, eo;
function vs() {
  if (eo) return Ur;
  eo = 1;
  var e = et, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(v, b, m) {
    var N, x = {}, L = null, X = null;
    m !== void 0 && (L = "" + m), b.key !== void 0 && (L = "" + b.key), b.ref !== void 0 && (X = b.ref);
    for (N in b) o.call(b, N) && !f.hasOwnProperty(N) && (x[N] = b[N]);
    if (v && v.defaultProps) for (N in b = v.defaultProps, b) x[N] === void 0 && (x[N] = b[N]);
    return { $$typeof: t, type: v, key: L, ref: X, props: x, _owner: c.current };
  }
  return Ur.Fragment = a, Ur.jsx = y, Ur.jsxs = y, Ur;
}
ni.exports = vs();
var V = ni.exports, ai = { exports: {} }, Xn, to;
function ws() {
  if (to) return Xn;
  to = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xn = e, Xn;
}
var Kn, ro;
function ks() {
  if (ro) return Kn;
  ro = 1;
  var e = ws();
  function t() {
  }
  function a() {
  }
  return a.resetWarningCache = t, Kn = function() {
    function o(y, v, b, m, N, x) {
      if (x !== e) {
        var L = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw L.name = "Invariant Violation", L;
      }
    }
    o.isRequired = o;
    function c() {
      return o;
    }
    var f = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: c,
      element: o,
      elementType: o,
      instanceOf: c,
      node: o,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: a,
      resetWarningCache: t
    };
    return f.PropTypes = f, f;
  }, Kn;
}
ai.exports = ks()();
var Ss = ai.exports;
const i = /* @__PURE__ */ Sa(Ss), xs = i.shape({
  url: i.string,
  altText: i.string,
  cssClass: i.arrayOf(i.string),
  size: i.oneOf(["small", "medium", "large"])
}), Qn = i.shape({
  text: i.string,
  maxWidth: i.string,
  cssClass: i.arrayOf(i.string),
  highlightColor: i.oneOf(["gold", "black"])
}), oi = i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  content: i.shape({
    icon: i.arrayOf(i.string),
    header: i.string,
    body: i.string
  })
}), xa = i.shape({
  text: i.string,
  name: i.string,
  event: i.string,
  action: i.string,
  type: i.string,
  region: i.string,
  section: i.string,
  component: i.string
});
var ii = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function a() {
      for (var f = "", y = 0; y < arguments.length; y++) {
        var v = arguments[y];
        v && (f = c(f, o(v)));
      }
      return f;
    }
    function o(f) {
      if (typeof f == "string" || typeof f == "number")
        return f;
      if (typeof f != "object")
        return "";
      if (Array.isArray(f))
        return a.apply(null, f);
      if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]"))
        return f.toString();
      var y = "";
      for (var v in f)
        t.call(f, v) && f[v] && (y = c(y, v));
      return y;
    }
    function c(f, y) {
      return y ? f ? f + " " + y : f + y : f;
    }
    e.exports ? (a.default = a, e.exports = a) : window.classNames = a;
  })();
})(ii);
var Cs = ii.exports;
const Cr = /* @__PURE__ */ Sa(Cs), _s = () => {
  const [e, t] = Gr(), [a, o] = Gr(!1), [c, f] = Gr(!1), [y, v] = Gr("");
  return Qr(() => {
    y && (() => {
      f(null), o(!0);
      try {
        fetch(y).then((b) => b.json()).then((b) => {
          t(b), o(!1);
        }).catch((b) => {
          f(b), o(!1);
        });
      } catch (b) {
        f(b);
      }
    })();
  }, [y]), [{ data: e, loading: a, error: c }, v];
}, Es = (e) => (e || []).join(" "), {
  entries: si,
  setPrototypeOf: no,
  isFrozen: Ts,
  getPrototypeOf: Rs,
  getOwnPropertyDescriptor: As
} = Object;
let {
  freeze: lt,
  seal: bt,
  create: li
} = Object, {
  apply: ca,
  construct: ua
} = typeof Reflect < "u" && Reflect;
lt || (lt = function(e) {
  return e;
});
bt || (bt = function(e) {
  return e;
});
ca || (ca = function(e, t, a) {
  return e.apply(t, a);
});
ua || (ua = function(e, t) {
  return new e(...t);
});
const wn = ct(Array.prototype.forEach), Os = ct(Array.prototype.lastIndexOf), ao = ct(Array.prototype.pop), Br = ct(Array.prototype.push), Ns = ct(Array.prototype.splice), Tn = ct(String.prototype.toLowerCase), Zn = ct(String.prototype.toString), oo = ct(String.prototype.match), Wr = ct(String.prototype.replace), Ps = ct(String.prototype.indexOf), Fs = ct(String.prototype.trim), Ct = ct(Object.prototype.hasOwnProperty), st = ct(RegExp.prototype.test), Vr = Is(TypeError);
function ct(e) {
  return function(t) {
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
      o[c - 1] = arguments[c];
    return ca(e, t, o);
  };
}
function Is(e) {
  return function() {
    for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++)
      a[o] = arguments[o];
    return ua(e, a);
  };
}
function we(e, t) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Tn;
  no && no(e, null);
  let o = t.length;
  for (; o--; ) {
    let c = t[o];
    if (typeof c == "string") {
      const f = a(c);
      f !== c && (Ts(t) || (t[o] = f), c = f);
    }
    e[c] = !0;
  }
  return e;
}
function Ds(e) {
  for (let t = 0; t < e.length; t++)
    Ct(e, t) || (e[t] = null);
  return e;
}
function dr(e) {
  const t = li(null);
  for (const [a, o] of si(e))
    Ct(e, a) && (Array.isArray(o) ? t[a] = Ds(o) : o && typeof o == "object" && o.constructor === Object ? t[a] = dr(o) : t[a] = o);
  return t;
}
function qr(e, t) {
  for (; e !== null; ) {
    const o = As(e, t);
    if (o) {
      if (o.get)
        return ct(o.get);
      if (typeof o.value == "function")
        return ct(o.value);
    }
    e = Rs(e);
  }
  function a() {
    return null;
  }
  return a;
}
const io = lt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Jn = lt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ea = lt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), js = lt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ta = lt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ms = lt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), so = lt(["#text"]), lo = lt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ra = lt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), co = lt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), kn = lt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ls = bt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), $s = bt(/<%[\w\W]*|[\w\W]*%>/gm), zs = bt(/\$\{[\w\W]*/gm), Us = bt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Bs = bt(/^aria-[\-\w]+$/), ci = bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ws = bt(/^(?:\w+script|data):/i), Vs = bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ui = bt(/^html$/i), qs = bt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var uo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Bs,
  ATTR_WHITESPACE: Vs,
  CUSTOM_ELEMENT: qs,
  DATA_ATTR: Us,
  DOCTYPE_NAME: ui,
  ERB_EXPR: $s,
  IS_ALLOWED_URI: ci,
  IS_SCRIPT_OR_DATA: Ws,
  MUSTACHE_EXPR: Ls,
  TMPLIT_EXPR: zs
});
const Hr = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Hs = function() {
  return typeof window > "u" ? null : window;
}, Gs = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let a = null;
  const o = "data-tt-policy-suffix";
  t && t.hasAttribute(o) && (a = t.getAttribute(o));
  const c = "dompurify" + (a ? "#" + a : "");
  try {
    return e.createPolicy(c, {
      createHTML(f) {
        return f;
      },
      createScriptURL(f) {
        return f;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + c + " could not be created."), null;
  }
}, fo = function() {
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
function di() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Hs();
  const t = (w) => di(w);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== Hr.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: a
  } = e;
  const o = a, c = o.currentScript, {
    DocumentFragment: f,
    HTMLTemplateElement: y,
    Node: v,
    Element: b,
    NodeFilter: m,
    NamedNodeMap: N = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: x,
    DOMParser: L,
    trustedTypes: X
  } = e, R = b.prototype, k = qr(R, "cloneNode"), P = qr(R, "remove"), U = qr(R, "nextSibling"), B = qr(R, "childNodes"), H = qr(R, "parentNode");
  if (typeof y == "function") {
    const w = a.createElement("template");
    w.content && w.content.ownerDocument && (a = w.content.ownerDocument);
  }
  let Y, S = "";
  const {
    implementation: le,
    createNodeIterator: be,
    createDocumentFragment: Ee,
    getElementsByTagName: Ne
  } = a, {
    importNode: ze
  } = o;
  let Se = fo();
  t.isSupported = typeof si == "function" && typeof H == "function" && le && le.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: fe,
    ERB_EXPR: Te,
    TMPLIT_EXPR: Re,
    DATA_ATTR: ke,
    ARIA_ATTR: Ke,
    IS_SCRIPT_OR_DATA: Pe,
    ATTR_WHITESPACE: xe,
    CUSTOM_ELEMENT: Me
  } = uo;
  let {
    IS_ALLOWED_URI: Ge
  } = uo, ve = null;
  const I = we({}, [...io, ...Jn, ...ea, ...ta, ...so]);
  let O = null;
  const F = we({}, [...lo, ...ra, ...co, ...kn]);
  let M = Object.seal(li(null, {
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
  })), p = null, te = null, C = !0, re = !0, Q = !1, J = !0, z = !1, ne = !0, se = !1, Z = !1, pe = !1, ee = !1, ce = !1, We = !1, de = !0, Qe = !1;
  const Ve = "user-content-";
  let he = !0, $ = !1, ae = {}, Xe = null;
  const at = we({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let je = null;
  const er = we({}, ["audio", "video", "img", "source", "image", "track"]);
  let Mt = null;
  const pr = we({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Et = "http://www.w3.org/1998/Math/MathML", vt = "http://www.w3.org/2000/svg", ut = "http://www.w3.org/1999/xhtml";
  let Tt = ut, tr = !1, rr = null;
  const Or = we({}, [Et, vt, ut], Zn);
  let Ze = we({}, ["mi", "mo", "mn", "ms", "mtext"]), Rt = we({}, ["annotation-xml"]);
  const Lt = we({}, ["title", "style", "font", "a", "script"]);
  let Ce = null;
  const Nt = ["application/xhtml+xml", "text/html"], $t = "text/html";
  let Le = null, Je = null;
  const zt = a.createElement("form"), gt = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Ut = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Je && Je === w)) {
      if ((!w || typeof w != "object") && (w = {}), w = dr(w), Ce = // eslint-disable-next-line unicorn/prefer-includes
      Nt.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? $t : w.PARSER_MEDIA_TYPE, Le = Ce === "application/xhtml+xml" ? Zn : Tn, ve = Ct(w, "ALLOWED_TAGS") ? we({}, w.ALLOWED_TAGS, Le) : I, O = Ct(w, "ALLOWED_ATTR") ? we({}, w.ALLOWED_ATTR, Le) : F, rr = Ct(w, "ALLOWED_NAMESPACES") ? we({}, w.ALLOWED_NAMESPACES, Zn) : Or, Mt = Ct(w, "ADD_URI_SAFE_ATTR") ? we(dr(pr), w.ADD_URI_SAFE_ATTR, Le) : pr, je = Ct(w, "ADD_DATA_URI_TAGS") ? we(dr(er), w.ADD_DATA_URI_TAGS, Le) : er, Xe = Ct(w, "FORBID_CONTENTS") ? we({}, w.FORBID_CONTENTS, Le) : at, p = Ct(w, "FORBID_TAGS") ? we({}, w.FORBID_TAGS, Le) : {}, te = Ct(w, "FORBID_ATTR") ? we({}, w.FORBID_ATTR, Le) : {}, ae = Ct(w, "USE_PROFILES") ? w.USE_PROFILES : !1, C = w.ALLOW_ARIA_ATTR !== !1, re = w.ALLOW_DATA_ATTR !== !1, Q = w.ALLOW_UNKNOWN_PROTOCOLS || !1, J = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, z = w.SAFE_FOR_TEMPLATES || !1, ne = w.SAFE_FOR_XML !== !1, se = w.WHOLE_DOCUMENT || !1, ee = w.RETURN_DOM || !1, ce = w.RETURN_DOM_FRAGMENT || !1, We = w.RETURN_TRUSTED_TYPE || !1, pe = w.FORCE_BODY || !1, de = w.SANITIZE_DOM !== !1, Qe = w.SANITIZE_NAMED_PROPS || !1, he = w.KEEP_CONTENT !== !1, $ = w.IN_PLACE || !1, Ge = w.ALLOWED_URI_REGEXP || ci, Tt = w.NAMESPACE || ut, Ze = w.MATHML_TEXT_INTEGRATION_POINTS || Ze, Rt = w.HTML_INTEGRATION_POINTS || Rt, M = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && gt(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (M.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && gt(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (M.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), z && (re = !1), ce && (ee = !0), ae && (ve = we({}, so), O = [], ae.html === !0 && (we(ve, io), we(O, lo)), ae.svg === !0 && (we(ve, Jn), we(O, ra), we(O, kn)), ae.svgFilters === !0 && (we(ve, ea), we(O, ra), we(O, kn)), ae.mathMl === !0 && (we(ve, ta), we(O, co), we(O, kn))), w.ADD_TAGS && (ve === I && (ve = dr(ve)), we(ve, w.ADD_TAGS, Le)), w.ADD_ATTR && (O === F && (O = dr(O)), we(O, w.ADD_ATTR, Le)), w.ADD_URI_SAFE_ATTR && we(Mt, w.ADD_URI_SAFE_ATTR, Le), w.FORBID_CONTENTS && (Xe === at && (Xe = dr(Xe)), we(Xe, w.FORBID_CONTENTS, Le)), he && (ve["#text"] = !0), se && we(ve, ["html", "head", "body"]), ve.table && (we(ve, ["tbody"]), delete p.tbody), w.TRUSTED_TYPES_POLICY) {
        if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Vr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Vr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        Y = w.TRUSTED_TYPES_POLICY, S = Y.createHTML("");
      } else
        Y === void 0 && (Y = Gs(X, c)), Y !== null && typeof S == "string" && (S = Y.createHTML(""));
      lt && lt(w), Je = w;
    }
  }, Bt = we({}, [...Jn, ...ea, ...js]), Wt = we({}, [...ta, ...Ms]), hr = function(w) {
    let K = H(w);
    (!K || !K.tagName) && (K = {
      namespaceURI: Tt,
      tagName: "template"
    });
    const q = Tn(w.tagName), _e = Tn(K.tagName);
    return rr[w.namespaceURI] ? w.namespaceURI === vt ? K.namespaceURI === ut ? q === "svg" : K.namespaceURI === Et ? q === "svg" && (_e === "annotation-xml" || Ze[_e]) : !!Bt[q] : w.namespaceURI === Et ? K.namespaceURI === ut ? q === "math" : K.namespaceURI === vt ? q === "math" && Rt[_e] : !!Wt[q] : w.namespaceURI === ut ? K.namespaceURI === vt && !Rt[_e] || K.namespaceURI === Et && !Ze[_e] ? !1 : !Wt[q] && (Lt[q] || !Bt[q]) : !!(Ce === "application/xhtml+xml" && rr[w.namespaceURI]) : !1;
  }, yt = function(w) {
    Br(t.removed, {
      element: w
    });
    try {
      H(w).removeChild(w);
    } catch {
      P(w);
    }
  }, Pt = function(w, K) {
    try {
      Br(t.removed, {
        attribute: K.getAttributeNode(w),
        from: K
      });
    } catch {
      Br(t.removed, {
        attribute: null,
        from: K
      });
    }
    if (K.removeAttribute(w), w === "is")
      if (ee || ce)
        try {
          yt(K);
        } catch {
        }
      else
        try {
          K.setAttribute(w, "");
        } catch {
        }
  }, mr = function(w) {
    let K = null, q = null;
    if (pe)
      w = "<remove></remove>" + w;
    else {
      const Ue = oo(w, /^[\r\n\t ]+/);
      q = Ue && Ue[0];
    }
    Ce === "application/xhtml+xml" && Tt === ut && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const _e = Y ? Y.createHTML(w) : w;
    if (Tt === ut)
      try {
        K = new L().parseFromString(_e, Ce);
      } catch {
      }
    if (!K || !K.documentElement) {
      K = le.createDocument(Tt, "template", null);
      try {
        K.documentElement.innerHTML = tr ? S : _e;
      } catch {
      }
    }
    const He = K.body || K.documentElement;
    return w && q && He.insertBefore(a.createTextNode(q), He.childNodes[0] || null), Tt === ut ? Ne.call(K, se ? "html" : "body")[0] : se ? K.documentElement : He;
  }, gr = function(w) {
    return be.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null
    );
  }, At = function(w) {
    return w instanceof x && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof N) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, nr = function(w) {
    return typeof v == "function" && w instanceof v;
  };
  function tt(w, K, q) {
    wn(w, (_e) => {
      _e.call(t, K, q, Je);
    });
  }
  const Vt = function(w) {
    let K = null;
    if (tt(Se.beforeSanitizeElements, w, null), At(w))
      return yt(w), !0;
    const q = Le(w.nodeName);
    if (tt(Se.uponSanitizeElement, w, {
      tagName: q,
      allowedTags: ve
    }), w.hasChildNodes() && !nr(w.firstElementChild) && st(/<[/\w]/g, w.innerHTML) && st(/<[/\w]/g, w.textContent) || w.nodeType === Hr.progressingInstruction || ne && w.nodeType === Hr.comment && st(/<[/\w]/g, w.data))
      return yt(w), !0;
    if (!ve[q] || p[q]) {
      if (!p[q] && Ot(q) && (M.tagNameCheck instanceof RegExp && st(M.tagNameCheck, q) || M.tagNameCheck instanceof Function && M.tagNameCheck(q)))
        return !1;
      if (he && !Xe[q]) {
        const _e = H(w) || w.parentNode, He = B(w) || w.childNodes;
        if (He && _e) {
          const Ue = He.length;
          for (let ot = Ue - 1; ot >= 0; --ot) {
            const Fe = k(He[ot], !0);
            Fe.__removalCount = (w.__removalCount || 0) + 1, _e.insertBefore(Fe, U(w));
          }
        }
      }
      return yt(w), !0;
    }
    return w instanceof b && !hr(w) || (q === "noscript" || q === "noembed" || q === "noframes") && st(/<\/no(script|embed|frames)/i, w.innerHTML) ? (yt(w), !0) : (z && w.nodeType === Hr.text && (K = w.textContent, wn([fe, Te, Re], (_e) => {
      K = Wr(K, _e, " ");
    }), w.textContent !== K && (Br(t.removed, {
      element: w.cloneNode()
    }), w.textContent = K)), tt(Se.afterSanitizeElements, w, null), !1);
  }, yr = function(w, K, q) {
    if (de && (K === "id" || K === "name") && (q in a || q in zt))
      return !1;
    if (!(re && !te[K] && st(ke, K)) && !(C && st(Ke, K))) {
      if (!O[K] || te[K]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Ot(w) && (M.tagNameCheck instanceof RegExp && st(M.tagNameCheck, w) || M.tagNameCheck instanceof Function && M.tagNameCheck(w)) && (M.attributeNameCheck instanceof RegExp && st(M.attributeNameCheck, K) || M.attributeNameCheck instanceof Function && M.attributeNameCheck(K)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          K === "is" && M.allowCustomizedBuiltInElements && (M.tagNameCheck instanceof RegExp && st(M.tagNameCheck, q) || M.tagNameCheck instanceof Function && M.tagNameCheck(q)))
        ) return !1;
      } else if (!Mt[K] && !st(Ge, Wr(q, xe, "")) && !((K === "src" || K === "xlink:href" || K === "href") && w !== "script" && Ps(q, "data:") === 0 && je[w]) && !(Q && !st(Pe, Wr(q, xe, ""))) && q)
        return !1;
    }
    return !0;
  }, Ot = function(w) {
    return w !== "annotation-xml" && oo(w, Me);
  }, br = function(w) {
    tt(Se.beforeSanitizeAttributes, w, null);
    const {
      attributes: K
    } = w;
    if (!K || At(w))
      return;
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: O,
      forceKeepAttr: void 0
    };
    let _e = K.length;
    for (; _e--; ) {
      const He = K[_e], {
        name: Ue,
        namespaceURI: ot,
        value: Fe
      } = He, it = Le(Ue);
      let Ye = Ue === "value" ? Fe : Fs(Fe);
      if (q.attrName = it, q.attrValue = Ye, q.keepAttr = !0, q.forceKeepAttr = void 0, tt(Se.uponSanitizeAttribute, w, q), Ye = q.attrValue, Qe && (it === "id" || it === "name") && (Pt(Ue, w), Ye = Ve + Ye), ne && st(/((--!?|])>)|<\/(style|title)/i, Ye)) {
        Pt(Ue, w);
        continue;
      }
      if (q.forceKeepAttr || (Pt(Ue, w), !q.keepAttr))
        continue;
      if (!J && st(/\/>/i, Ye)) {
        Pt(Ue, w);
        continue;
      }
      z && wn([fe, Te, Re], (vr) => {
        Ye = Wr(Ye, vr, " ");
      });
      const qt = Le(w.nodeName);
      if (yr(qt, it, Ye)) {
        if (Y && typeof X == "object" && typeof X.getAttributeType == "function" && !ot)
          switch (X.getAttributeType(qt, it)) {
            case "TrustedHTML": {
              Ye = Y.createHTML(Ye);
              break;
            }
            case "TrustedScriptURL": {
              Ye = Y.createScriptURL(Ye);
              break;
            }
          }
        try {
          ot ? w.setAttributeNS(ot, Ue, Ye) : w.setAttribute(Ue, Ye), At(w) ? yt(w) : ao(t.removed);
        } catch {
        }
      }
    }
    tt(Se.afterSanitizeAttributes, w, null);
  }, ar = function w(K) {
    let q = null;
    const _e = gr(K);
    for (tt(Se.beforeSanitizeShadowDOM, K, null); q = _e.nextNode(); )
      tt(Se.uponSanitizeShadowNode, q, null), Vt(q), br(q), q.content instanceof f && w(q.content);
    tt(Se.afterSanitizeShadowDOM, K, null);
  };
  return t.sanitize = function(w) {
    let K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, q = null, _e = null, He = null, Ue = null;
    if (tr = !w, tr && (w = "<!-->"), typeof w != "string" && !nr(w))
      if (typeof w.toString == "function") {
        if (w = w.toString(), typeof w != "string")
          throw Vr("dirty is not a string, aborting");
      } else
        throw Vr("toString is not a function");
    if (!t.isSupported)
      return w;
    if (Z || Ut(K), t.removed = [], typeof w == "string" && ($ = !1), $) {
      if (w.nodeName) {
        const it = Le(w.nodeName);
        if (!ve[it] || p[it])
          throw Vr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (w instanceof v)
      q = mr("<!---->"), _e = q.ownerDocument.importNode(w, !0), _e.nodeType === Hr.element && _e.nodeName === "BODY" || _e.nodeName === "HTML" ? q = _e : q.appendChild(_e);
    else {
      if (!ee && !z && !se && // eslint-disable-next-line unicorn/prefer-includes
      w.indexOf("<") === -1)
        return Y && We ? Y.createHTML(w) : w;
      if (q = mr(w), !q)
        return ee ? null : We ? S : "";
    }
    q && pe && yt(q.firstChild);
    const ot = gr($ ? w : q);
    for (; He = ot.nextNode(); )
      Vt(He), br(He), He.content instanceof f && ar(He.content);
    if ($)
      return w;
    if (ee) {
      if (ce)
        for (Ue = Ee.call(q.ownerDocument); q.firstChild; )
          Ue.appendChild(q.firstChild);
      else
        Ue = q;
      return (O.shadowroot || O.shadowrootmode) && (Ue = ze.call(o, Ue, !0)), Ue;
    }
    let Fe = se ? q.outerHTML : q.innerHTML;
    return se && ve["!doctype"] && q.ownerDocument && q.ownerDocument.doctype && q.ownerDocument.doctype.name && st(ui, q.ownerDocument.doctype.name) && (Fe = "<!DOCTYPE " + q.ownerDocument.doctype.name + `>
` + Fe), z && wn([fe, Te, Re], (it) => {
      Fe = Wr(Fe, it, " ");
    }), Y && We ? Y.createHTML(Fe) : Fe;
  }, t.setConfig = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ut(w), Z = !0;
  }, t.clearConfig = function() {
    Je = null, Z = !1;
  }, t.isValidAttribute = function(w, K, q) {
    Je || Ut({});
    const _e = Le(w), He = Le(K);
    return yr(_e, He, q);
  }, t.addHook = function(w, K) {
    typeof K == "function" && Br(Se[w], K);
  }, t.removeHook = function(w, K) {
    if (K !== void 0) {
      const q = Os(Se[w], K);
      return q === -1 ? void 0 : Ns(Se[w], q, 1)[0];
    }
    return ao(Se[w]);
  }, t.removeHooks = function(w) {
    Se[w] = [];
  }, t.removeAllHooks = function() {
    Se = fo();
  }, t;
}
var Ys = di();
const kr = (e) => ({ __html: Ys.sanitize(e) });
i.shape({
  event: i.string,
  action: i.string,
  name: i.string,
  region: i.string,
  section: i.string,
  component: i.string,
  type: i.string,
  text: i.string
});
const Xs = ({
  event: e = "",
  action: t = "",
  name: a = "",
  type: o = "",
  section: c = "",
  text: f = "",
  region: y = "",
  component: v = ""
}) => {
  const { dataLayer: b } = window, m = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: a.toLowerCase(),
    type: o.toLowerCase(),
    region: y.toLowerCase(),
    section: c.toLowerCase(),
    text: f.toLowerCase(),
    component: v.toLowerCase()
  };
  b && b.push(m);
};
var ur = {}, po;
function Ks() {
  if (po) return ur;
  po = 1;
  var e = et;
  function t(r) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, d = 1; d < arguments.length; d++) l += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + r + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = Object.prototype.hasOwnProperty, o = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, c = {}, f = {};
  function y(r) {
    return a.call(f, r) ? !0 : a.call(c, r) ? !1 : o.test(r) ? f[r] = !0 : (c[r] = !0, !1);
  }
  function v(r, l, d, g, A, _, D) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = g, this.attributeNamespace = A, this.mustUseProperty = d, this.propertyName = r, this.type = l, this.sanitizeURL = _, this.removeEmptyString = D;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    b[r] = new v(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var l = r[0];
    b[l] = new v(l, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    b[r] = new v(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    b[r] = new v(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    b[r] = new v(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    b[r] = new v(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    b[r] = new v(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    b[r] = new v(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    b[r] = new v(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var m = /[\-:]([a-z])/g;
  function N(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var l = r.replace(
      m,
      N
    );
    b[l] = new v(l, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var l = r.replace(m, N);
    b[l] = new v(l, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var l = r.replace(m, N);
    b[l] = new v(l, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    b[r] = new v(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    b[r] = new v(r, 1, !1, r.toLowerCase(), null, !0, !0);
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
  Object.keys(x).forEach(function(r) {
    L.forEach(function(l) {
      l = l + r.charAt(0).toUpperCase() + r.substring(1), x[l] = x[r];
    });
  });
  var X = /["'&<>]/;
  function R(r) {
    if (typeof r == "boolean" || typeof r == "number") return "" + r;
    r = "" + r;
    var l = X.exec(r);
    if (l) {
      var d = "", g, A = 0;
      for (g = l.index; g < r.length; g++) {
        switch (r.charCodeAt(g)) {
          case 34:
            l = "&quot;";
            break;
          case 38:
            l = "&amp;";
            break;
          case 39:
            l = "&#x27;";
            break;
          case 60:
            l = "&lt;";
            break;
          case 62:
            l = "&gt;";
            break;
          default:
            continue;
        }
        A !== g && (d += r.substring(A, g)), A = g + 1, d += l;
      }
      r = A !== g ? d + r.substring(A, g) : d;
    }
    return r;
  }
  var k = /([A-Z])/g, P = /^ms-/, U = Array.isArray;
  function B(r, l) {
    return { insertionMode: r, selectedValue: l };
  }
  function H(r, l, d) {
    switch (l) {
      case "select":
        return B(1, d.value != null ? d.value : d.defaultValue);
      case "svg":
        return B(2, null);
      case "math":
        return B(3, null);
      case "foreignObject":
        return B(1, null);
      case "table":
        return B(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return B(5, null);
      case "colgroup":
        return B(7, null);
      case "tr":
        return B(6, null);
    }
    return 4 <= r.insertionMode || r.insertionMode === 0 ? B(1, null) : r;
  }
  var Y = /* @__PURE__ */ new Map();
  function S(r, l, d) {
    if (typeof d != "object") throw Error(t(62));
    l = !0;
    for (var g in d) if (a.call(d, g)) {
      var A = d[g];
      if (A != null && typeof A != "boolean" && A !== "") {
        if (g.indexOf("--") === 0) {
          var _ = R(g);
          A = R(("" + A).trim());
        } else {
          _ = g;
          var D = Y.get(_);
          D !== void 0 || (D = R(_.replace(k, "-$1").toLowerCase().replace(P, "-ms-")), Y.set(_, D)), _ = D, A = typeof A == "number" ? A === 0 || a.call(x, g) ? "" + A : A + "px" : R(("" + A).trim());
        }
        l ? (l = !1, r.push(' style="', _, ":", A)) : r.push(";", _, ":", A);
      }
    }
    l || r.push('"');
  }
  function le(r, l, d, g) {
    switch (d) {
      case "style":
        S(r, l, g);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < d.length) || d[0] !== "o" && d[0] !== "O" || d[1] !== "n" && d[1] !== "N") {
      if (l = b.hasOwnProperty(d) ? b[d] : null, l !== null) {
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!l.acceptsBooleans) return;
        }
        switch (d = l.attributeName, l.type) {
          case 3:
            g && r.push(" ", d, '=""');
            break;
          case 4:
            g === !0 ? r.push(" ", d, '=""') : g !== !1 && r.push(" ", d, '="', R(g), '"');
            break;
          case 5:
            isNaN(g) || r.push(" ", d, '="', R(g), '"');
            break;
          case 6:
            !isNaN(g) && 1 <= g && r.push(" ", d, '="', R(g), '"');
            break;
          default:
            l.sanitizeURL && (g = "" + g), r.push(" ", d, '="', R(g), '"');
        }
      } else if (y(d)) {
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = d.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-") return;
        }
        r.push(" ", d, '="', R(g), '"');
      }
    }
  }
  function be(r, l, d) {
    if (l != null) {
      if (d != null) throw Error(t(60));
      if (typeof l != "object" || !("__html" in l)) throw Error(t(61));
      l = l.__html, l != null && r.push("" + l);
    }
  }
  function Ee(r) {
    var l = "";
    return e.Children.forEach(r, function(d) {
      d != null && (l += d);
    }), l;
  }
  function Ne(r, l, d, g) {
    r.push(fe(d));
    var A = d = null, _;
    for (_ in l) if (a.call(l, _)) {
      var D = l[_];
      if (D != null) switch (_) {
        case "children":
          d = D;
          break;
        case "dangerouslySetInnerHTML":
          A = D;
          break;
        default:
          le(r, g, _, D);
      }
    }
    return r.push(">"), be(r, A, d), typeof d == "string" ? (r.push(R(d)), null) : d;
  }
  var ze = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Se = /* @__PURE__ */ new Map();
  function fe(r) {
    var l = Se.get(r);
    if (l === void 0) {
      if (!ze.test(r)) throw Error(t(65, r));
      l = "<" + r, Se.set(r, l);
    }
    return l;
  }
  function Te(r, l, d, g, A) {
    switch (l) {
      case "select":
        r.push(fe("select"));
        var _ = null, D = null;
        for (me in d) if (a.call(d, me)) {
          var G = d[me];
          if (G != null) switch (me) {
            case "children":
              _ = G;
              break;
            case "dangerouslySetInnerHTML":
              D = G;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              le(r, g, me, G);
          }
        }
        return r.push(">"), be(r, D, _), _;
      case "option":
        D = A.selectedValue, r.push(fe("option"));
        var oe = G = null, ue = null, me = null;
        for (_ in d) if (a.call(d, _)) {
          var qe = d[_];
          if (qe != null) switch (_) {
            case "children":
              G = qe;
              break;
            case "selected":
              ue = qe;
              break;
            case "dangerouslySetInnerHTML":
              me = qe;
              break;
            case "value":
              oe = qe;
            default:
              le(r, g, _, qe);
          }
        }
        if (D != null) if (d = oe !== null ? "" + oe : Ee(G), U(D)) {
          for (g = 0; g < D.length; g++)
            if ("" + D[g] === d) {
              r.push(' selected=""');
              break;
            }
        } else "" + D === d && r.push(' selected=""');
        else ue && r.push(' selected=""');
        return r.push(">"), be(r, me, G), G;
      case "textarea":
        r.push(fe("textarea")), me = D = _ = null;
        for (G in d) if (a.call(d, G) && (oe = d[G], oe != null)) switch (G) {
          case "children":
            me = oe;
            break;
          case "value":
            _ = oe;
            break;
          case "defaultValue":
            D = oe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            le(
              r,
              g,
              G,
              oe
            );
        }
        if (_ === null && D !== null && (_ = D), r.push(">"), me != null) {
          if (_ != null) throw Error(t(92));
          if (U(me) && 1 < me.length) throw Error(t(93));
          _ = "" + me;
        }
        return typeof _ == "string" && _[0] === `
` && r.push(`
`), _ !== null && r.push(R("" + _)), null;
      case "input":
        r.push(fe("input")), oe = me = G = _ = null;
        for (D in d) if (a.call(d, D) && (ue = d[D], ue != null)) switch (D) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            oe = ue;
            break;
          case "defaultValue":
            G = ue;
            break;
          case "checked":
            me = ue;
            break;
          case "value":
            _ = ue;
            break;
          default:
            le(r, g, D, ue);
        }
        return me !== null ? le(r, g, "checked", me) : oe !== null && le(r, g, "checked", oe), _ !== null ? le(r, g, "value", _) : G !== null && le(r, g, "value", G), r.push("/>"), null;
      case "menuitem":
        r.push(fe("menuitem"));
        for (var wt in d) if (a.call(d, wt) && (_ = d[wt], _ != null)) switch (wt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            le(r, g, wt, _);
        }
        return r.push(">"), null;
      case "title":
        r.push(fe("title")), _ = null;
        for (qe in d) if (a.call(d, qe) && (D = d[qe], D != null)) switch (qe) {
          case "children":
            _ = D;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            le(r, g, qe, D);
        }
        return r.push(">"), _;
      case "listing":
      case "pre":
        r.push(fe(l)), D = _ = null;
        for (oe in d) if (a.call(d, oe) && (G = d[oe], G != null)) switch (oe) {
          case "children":
            _ = G;
            break;
          case "dangerouslySetInnerHTML":
            D = G;
            break;
          default:
            le(r, g, oe, G);
        }
        if (r.push(">"), D != null) {
          if (_ != null) throw Error(t(60));
          if (typeof D != "object" || !("__html" in D)) throw Error(t(61));
          d = D.__html, d != null && (typeof d == "string" && 0 < d.length && d[0] === `
` ? r.push(`
`, d) : r.push("" + d));
        }
        return typeof _ == "string" && _[0] === `
` && r.push(`
`), _;
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
        r.push(fe(l));
        for (var kt in d) if (a.call(d, kt) && (_ = d[kt], _ != null)) switch (kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, l));
          default:
            le(r, g, kt, _);
        }
        return r.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ne(
          r,
          d,
          l,
          g
        );
      case "html":
        return A.insertionMode === 0 && r.push("<!DOCTYPE html>"), Ne(r, d, l, g);
      default:
        if (l.indexOf("-") === -1 && typeof d.is != "string") return Ne(r, d, l, g);
        r.push(fe(l)), D = _ = null;
        for (ue in d) if (a.call(d, ue) && (G = d[ue], G != null)) switch (ue) {
          case "children":
            _ = G;
            break;
          case "dangerouslySetInnerHTML":
            D = G;
            break;
          case "style":
            S(r, g, G);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            y(ue) && typeof G != "function" && typeof G != "symbol" && r.push(" ", ue, '="', R(G), '"');
        }
        return r.push(">"), be(r, D, _), _;
    }
  }
  function Re(r, l, d) {
    if (r.push('<!--$?--><template id="'), d === null) throw Error(t(395));
    return r.push(d), r.push('"></template>');
  }
  function ke(r, l, d, g) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return r.push('<div hidden id="'), r.push(l.segmentPrefix), l = g.toString(16), r.push(l), r.push('">');
      case 2:
        return r.push('<svg aria-hidden="true" style="display:none" id="'), r.push(l.segmentPrefix), l = g.toString(16), r.push(l), r.push('">');
      case 3:
        return r.push('<math aria-hidden="true" style="display:none" id="'), r.push(l.segmentPrefix), l = g.toString(16), r.push(l), r.push('">');
      case 4:
        return r.push('<table hidden id="'), r.push(l.segmentPrefix), l = g.toString(16), r.push(l), r.push('">');
      case 5:
        return r.push('<table hidden><tbody id="'), r.push(l.segmentPrefix), l = g.toString(16), r.push(l), r.push('">');
      case 6:
        return r.push('<table hidden><tr id="'), r.push(l.segmentPrefix), l = g.toString(16), r.push(l), r.push('">');
      case 7:
        return r.push('<table hidden><colgroup id="'), r.push(l.segmentPrefix), l = g.toString(16), r.push(l), r.push('">');
      default:
        throw Error(t(397));
    }
  }
  function Ke(r, l) {
    switch (l.insertionMode) {
      case 0:
      case 1:
        return r.push("</div>");
      case 2:
        return r.push("</svg>");
      case 3:
        return r.push("</math>");
      case 4:
        return r.push("</table>");
      case 5:
        return r.push("</tbody></table>");
      case 6:
        return r.push("</tr></table>");
      case 7:
        return r.push("</colgroup></table>");
      default:
        throw Error(t(397));
    }
  }
  var Pe = /[<\u2028\u2029]/g;
  function xe(r) {
    return JSON.stringify(r).replace(Pe, function(l) {
      switch (l) {
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
  function Me(r, l) {
    return l = l === void 0 ? "" : l, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: l + "P:", segmentPrefix: l + "S:", boundaryPrefix: l + "B:", idPrefix: l, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: r };
  }
  function Ge(r, l, d, g) {
    return d.generateStaticMarkup ? (r.push(R(l)), !1) : (l === "" ? r = g : (g && r.push("<!-- -->"), r.push(R(l)), r = !0), r);
  }
  var ve = Object.assign, I = Symbol.for("react.element"), O = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), C = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), Z = Symbol.for("react.debug_trace_mode"), pe = Symbol.for("react.legacy_hidden"), ee = Symbol.for("react.default_value"), ce = Symbol.iterator;
  function We(r) {
    if (r == null) return null;
    if (typeof r == "function") return r.displayName || r.name || null;
    if (typeof r == "string") return r;
    switch (r) {
      case F:
        return "Fragment";
      case O:
        return "Portal";
      case p:
        return "Profiler";
      case M:
        return "StrictMode";
      case Q:
        return "Suspense";
      case J:
        return "SuspenseList";
    }
    if (typeof r == "object") switch (r.$$typeof) {
      case C:
        return (r.displayName || "Context") + ".Consumer";
      case te:
        return (r._context.displayName || "Context") + ".Provider";
      case re:
        var l = r.render;
        return r = r.displayName, r || (r = l.displayName || l.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
      case z:
        return l = r.displayName || null, l !== null ? l : We(r.type) || "Memo";
      case ne:
        l = r._payload, r = r._init;
        try {
          return We(r(l));
        } catch {
        }
    }
    return null;
  }
  var de = {};
  function Qe(r, l) {
    if (r = r.contextTypes, !r) return de;
    var d = {}, g;
    for (g in r) d[g] = l[g];
    return d;
  }
  var Ve = null;
  function he(r, l) {
    if (r !== l) {
      r.context._currentValue2 = r.parentValue, r = r.parent;
      var d = l.parent;
      if (r === null) {
        if (d !== null) throw Error(t(401));
      } else {
        if (d === null) throw Error(t(401));
        he(r, d);
      }
      l.context._currentValue2 = l.value;
    }
  }
  function $(r) {
    r.context._currentValue2 = r.parentValue, r = r.parent, r !== null && $(r);
  }
  function ae(r) {
    var l = r.parent;
    l !== null && ae(l), r.context._currentValue2 = r.value;
  }
  function Xe(r, l) {
    if (r.context._currentValue2 = r.parentValue, r = r.parent, r === null) throw Error(t(402));
    r.depth === l.depth ? he(r, l) : Xe(r, l);
  }
  function at(r, l) {
    var d = l.parent;
    if (d === null) throw Error(t(402));
    r.depth === d.depth ? he(r, d) : at(r, d), l.context._currentValue2 = l.value;
  }
  function je(r) {
    var l = Ve;
    l !== r && (l === null ? ae(r) : r === null ? $(l) : l.depth === r.depth ? he(l, r) : l.depth > r.depth ? Xe(l, r) : at(l, r), Ve = r);
  }
  var er = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(r, l) {
    r = r._reactInternals, r.queue !== null && r.queue.push(l);
  }, enqueueReplaceState: function(r, l) {
    r = r._reactInternals, r.replace = !0, r.queue = [l];
  }, enqueueForceUpdate: function() {
  } };
  function Mt(r, l, d, g) {
    var A = r.state !== void 0 ? r.state : null;
    r.updater = er, r.props = d, r.state = A;
    var _ = { queue: [], replace: !1 };
    r._reactInternals = _;
    var D = l.contextType;
    if (r.context = typeof D == "object" && D !== null ? D._currentValue2 : g, D = l.getDerivedStateFromProps, typeof D == "function" && (D = D(d, A), A = D == null ? A : ve({}, A, D), r.state = A), typeof l.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function")) if (l = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), l !== r.state && er.enqueueReplaceState(r, r.state, null), _.queue !== null && 0 < _.queue.length) if (l = _.queue, D = _.replace, _.queue = null, _.replace = !1, D && l.length === 1) r.state = l[0];
    else {
      for (_ = D ? l[0] : r.state, A = !0, D = D ? 1 : 0; D < l.length; D++) {
        var G = l[D];
        G = typeof G == "function" ? G.call(r, _, d, g) : G, G != null && (A ? (A = !1, _ = ve({}, _, G)) : ve(_, G));
      }
      r.state = _;
    }
    else _.queue = null;
  }
  var pr = { id: 1, overflow: "" };
  function Et(r, l, d) {
    var g = r.id;
    r = r.overflow;
    var A = 32 - vt(g) - 1;
    g &= ~(1 << A), d += 1;
    var _ = 32 - vt(l) + A;
    if (30 < _) {
      var D = A - A % 5;
      return _ = (g & (1 << D) - 1).toString(32), g >>= D, A -= D, { id: 1 << 32 - vt(l) + A | d << A | g, overflow: _ + r };
    }
    return { id: 1 << _ | d << A | g, overflow: r };
  }
  var vt = Math.clz32 ? Math.clz32 : tr, ut = Math.log, Tt = Math.LN2;
  function tr(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - (ut(r) / Tt | 0) | 0;
  }
  function rr(r, l) {
    return r === l && (r !== 0 || 1 / r === 1 / l) || r !== r && l !== l;
  }
  var Or = typeof Object.is == "function" ? Object.is : rr, Ze = null, Rt = null, Lt = null, Ce = null, Nt = !1, $t = !1, Le = 0, Je = null, zt = 0;
  function gt() {
    if (Ze === null) throw Error(t(321));
    return Ze;
  }
  function Ut() {
    if (0 < zt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Bt() {
    return Ce === null ? Lt === null ? (Nt = !1, Lt = Ce = Ut()) : (Nt = !0, Ce = Lt) : Ce.next === null ? (Nt = !1, Ce = Ce.next = Ut()) : (Nt = !0, Ce = Ce.next), Ce;
  }
  function Wt() {
    Rt = Ze = null, $t = !1, Lt = null, zt = 0, Ce = Je = null;
  }
  function hr(r, l) {
    return typeof l == "function" ? l(r) : l;
  }
  function yt(r, l, d) {
    if (Ze = gt(), Ce = Bt(), Nt) {
      var g = Ce.queue;
      if (l = g.dispatch, Je !== null && (d = Je.get(g), d !== void 0)) {
        Je.delete(g), g = Ce.memoizedState;
        do
          g = r(g, d.action), d = d.next;
        while (d !== null);
        return Ce.memoizedState = g, [g, l];
      }
      return [Ce.memoizedState, l];
    }
    return r = r === hr ? typeof l == "function" ? l() : l : d !== void 0 ? d(l) : l, Ce.memoizedState = r, r = Ce.queue = { last: null, dispatch: null }, r = r.dispatch = mr.bind(null, Ze, r), [Ce.memoizedState, r];
  }
  function Pt(r, l) {
    if (Ze = gt(), Ce = Bt(), l = l === void 0 ? null : l, Ce !== null) {
      var d = Ce.memoizedState;
      if (d !== null && l !== null) {
        var g = d[1];
        e: if (g === null) g = !1;
        else {
          for (var A = 0; A < g.length && A < l.length; A++) if (!Or(l[A], g[A])) {
            g = !1;
            break e;
          }
          g = !0;
        }
        if (g) return d[0];
      }
    }
    return r = r(), Ce.memoizedState = [r, l], r;
  }
  function mr(r, l, d) {
    if (25 <= zt) throw Error(t(301));
    if (r === Ze) if ($t = !0, r = { action: d, next: null }, Je === null && (Je = /* @__PURE__ */ new Map()), d = Je.get(l), d === void 0) Je.set(l, r);
    else {
      for (l = d; l.next !== null; ) l = l.next;
      l.next = r;
    }
  }
  function gr() {
    throw Error(t(394));
  }
  function At() {
  }
  var nr = { readContext: function(r) {
    return r._currentValue2;
  }, useContext: function(r) {
    return gt(), r._currentValue2;
  }, useMemo: Pt, useReducer: yt, useRef: function(r) {
    Ze = gt(), Ce = Bt();
    var l = Ce.memoizedState;
    return l === null ? (r = { current: r }, Ce.memoizedState = r) : l;
  }, useState: function(r) {
    return yt(hr, r);
  }, useInsertionEffect: At, useLayoutEffect: function() {
  }, useCallback: function(r, l) {
    return Pt(function() {
      return r;
    }, l);
  }, useImperativeHandle: At, useEffect: At, useDebugValue: At, useDeferredValue: function(r) {
    return gt(), r;
  }, useTransition: function() {
    return gt(), [
      !1,
      gr
    ];
  }, useId: function() {
    var r = Rt.treeContext, l = r.overflow;
    r = r.id, r = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + l;
    var d = tt;
    if (d === null) throw Error(t(404));
    return l = Le++, r = ":" + d.idPrefix + "R" + r, 0 < l && (r += "H" + l.toString(32)), r + ":";
  }, useMutableSource: function(r, l) {
    return gt(), l(r._source);
  }, useSyncExternalStore: function(r, l, d) {
    if (d === void 0) throw Error(t(407));
    return d();
  } }, tt = null, Vt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function yr(r) {
    return console.error(r), null;
  }
  function Ot() {
  }
  function br(r, l, d, g, A, _, D, G, oe) {
    var ue = [], me = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: g, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: me, pingedTasks: ue, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: A === void 0 ? yr : A, onAllReady: Ot, onShellReady: D === void 0 ? Ot : D, onShellError: Ot, onFatalError: Ot }, d = w(l, 0, null, d, !1, !1), d.parentFlushed = !0, r = ar(l, r, null, d, me, de, null, pr), ue.push(r), l;
  }
  function ar(r, l, d, g, A, _, D, G) {
    r.allPendingTasks++, d === null ? r.pendingRootTasks++ : d.pendingTasks++;
    var oe = { node: l, ping: function() {
      var ue = r.pingedTasks;
      ue.push(oe), ue.length === 1 && nn(r);
    }, blockedBoundary: d, blockedSegment: g, abortSet: A, legacyContext: _, context: D, treeContext: G };
    return A.add(oe), oe;
  }
  function w(r, l, d, g, A, _) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: g, boundary: d, lastPushedText: A, textEmbedded: _ };
  }
  function K(r, l) {
    if (r = r.onError(l), r != null && typeof r != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof r + '" instead');
    return r;
  }
  function q(r, l) {
    var d = r.onShellError;
    d(l), d = r.onFatalError, d(l), r.destination !== null ? (r.status = 2, r.destination.destroy(l)) : (r.status = 1, r.fatalError = l);
  }
  function _e(r, l, d, g, A) {
    for (Ze = {}, Rt = l, Le = 0, r = d(g, A); $t; ) $t = !1, Le = 0, zt += 1, Ce = null, r = d(g, A);
    return Wt(), r;
  }
  function He(r, l, d, g) {
    var A = d.render(), _ = g.childContextTypes;
    if (_ != null) {
      var D = l.legacyContext;
      if (typeof d.getChildContext != "function") g = D;
      else {
        d = d.getChildContext();
        for (var G in d) if (!(G in _)) throw Error(t(108, We(g) || "Unknown", G));
        g = ve({}, D, d);
      }
      l.legacyContext = g, Fe(r, l, A), l.legacyContext = D;
    } else Fe(r, l, A);
  }
  function Ue(r, l) {
    if (r && r.defaultProps) {
      l = ve({}, l), r = r.defaultProps;
      for (var d in r) l[d] === void 0 && (l[d] = r[d]);
      return l;
    }
    return l;
  }
  function ot(r, l, d, g, A) {
    if (typeof d == "function") if (d.prototype && d.prototype.isReactComponent) {
      A = Qe(d, l.legacyContext);
      var _ = d.contextType;
      _ = new d(g, typeof _ == "object" && _ !== null ? _._currentValue2 : A), Mt(_, d, g, A), He(r, l, _, d);
    } else {
      _ = Qe(d, l.legacyContext), A = _e(r, l, d, g, _);
      var D = Le !== 0;
      if (typeof A == "object" && A !== null && typeof A.render == "function" && A.$$typeof === void 0) Mt(A, d, g, _), He(r, l, A, d);
      else if (D) {
        g = l.treeContext, l.treeContext = Et(g, 1, 0);
        try {
          Fe(r, l, A);
        } finally {
          l.treeContext = g;
        }
      } else Fe(r, l, A);
    }
    else if (typeof d == "string") {
      switch (A = l.blockedSegment, _ = Te(A.chunks, d, g, r.responseState, A.formatContext), A.lastPushedText = !1, D = A.formatContext, A.formatContext = H(D, d, g), Ye(r, l, _), A.formatContext = D, d) {
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
          A.chunks.push("</", d, ">");
      }
      A.lastPushedText = !1;
    } else {
      switch (d) {
        case pe:
        case Z:
        case M:
        case p:
        case F:
          Fe(r, l, g.children);
          return;
        case J:
          Fe(r, l, g.children);
          return;
        case se:
          throw Error(t(343));
        case Q:
          e: {
            d = l.blockedBoundary, A = l.blockedSegment, _ = g.fallback, g = g.children, D = /* @__PURE__ */ new Set();
            var G = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: D, errorDigest: null }, oe = w(r, A.chunks.length, G, A.formatContext, !1, !1);
            A.children.push(oe), A.lastPushedText = !1;
            var ue = w(r, 0, null, A.formatContext, !1, !1);
            ue.parentFlushed = !0, l.blockedBoundary = G, l.blockedSegment = ue;
            try {
              if (Ye(
                r,
                l,
                g
              ), r.responseState.generateStaticMarkup || ue.lastPushedText && ue.textEmbedded && ue.chunks.push("<!-- -->"), ue.status = 1, Ht(G, ue), G.pendingTasks === 0) break e;
            } catch (me) {
              ue.status = 4, G.forceClientRender = !0, G.errorDigest = K(r, me);
            } finally {
              l.blockedBoundary = d, l.blockedSegment = A;
            }
            l = ar(r, _, d, oe, D, l.legacyContext, l.context, l.treeContext), r.pingedTasks.push(l);
          }
          return;
      }
      if (typeof d == "object" && d !== null) switch (d.$$typeof) {
        case re:
          if (g = _e(r, l, d.render, g, A), Le !== 0) {
            d = l.treeContext, l.treeContext = Et(d, 1, 0);
            try {
              Fe(r, l, g);
            } finally {
              l.treeContext = d;
            }
          } else Fe(r, l, g);
          return;
        case z:
          d = d.type, g = Ue(d, g), ot(r, l, d, g, A);
          return;
        case te:
          if (A = g.children, d = d._context, g = g.value, _ = d._currentValue2, d._currentValue2 = g, D = Ve, Ve = g = { parent: D, depth: D === null ? 0 : D.depth + 1, context: d, parentValue: _, value: g }, l.context = g, Fe(r, l, A), r = Ve, r === null) throw Error(t(403));
          g = r.parentValue, r.context._currentValue2 = g === ee ? r.context._defaultValue : g, r = Ve = r.parent, l.context = r;
          return;
        case C:
          g = g.children, g = g(d._currentValue2), Fe(r, l, g);
          return;
        case ne:
          A = d._init, d = A(d._payload), g = Ue(d, g), ot(
            r,
            l,
            d,
            g,
            void 0
          );
          return;
      }
      throw Error(t(130, d == null ? d : typeof d, ""));
    }
  }
  function Fe(r, l, d) {
    if (l.node = d, typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case I:
          ot(r, l, d.type, d.props, d.ref);
          return;
        case O:
          throw Error(t(257));
        case ne:
          var g = d._init;
          d = g(d._payload), Fe(r, l, d);
          return;
      }
      if (U(d)) {
        it(r, l, d);
        return;
      }
      if (d === null || typeof d != "object" ? g = null : (g = ce && d[ce] || d["@@iterator"], g = typeof g == "function" ? g : null), g && (g = g.call(d))) {
        if (d = g.next(), !d.done) {
          var A = [];
          do
            A.push(d.value), d = g.next();
          while (!d.done);
          it(r, l, A);
        }
        return;
      }
      throw r = Object.prototype.toString.call(d), Error(t(31, r === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : r));
    }
    typeof d == "string" ? (g = l.blockedSegment, g.lastPushedText = Ge(l.blockedSegment.chunks, d, r.responseState, g.lastPushedText)) : typeof d == "number" && (g = l.blockedSegment, g.lastPushedText = Ge(l.blockedSegment.chunks, "" + d, r.responseState, g.lastPushedText));
  }
  function it(r, l, d) {
    for (var g = d.length, A = 0; A < g; A++) {
      var _ = l.treeContext;
      l.treeContext = Et(_, g, A);
      try {
        Ye(r, l, d[A]);
      } finally {
        l.treeContext = _;
      }
    }
  }
  function Ye(r, l, d) {
    var g = l.blockedSegment.formatContext, A = l.legacyContext, _ = l.context;
    try {
      return Fe(r, l, d);
    } catch (oe) {
      if (Wt(), typeof oe == "object" && oe !== null && typeof oe.then == "function") {
        d = oe;
        var D = l.blockedSegment, G = w(r, D.chunks.length, null, D.formatContext, D.lastPushedText, !0);
        D.children.push(G), D.lastPushedText = !1, r = ar(r, l.node, l.blockedBoundary, G, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, d.then(r, r), l.blockedSegment.formatContext = g, l.legacyContext = A, l.context = _, je(_);
      } else throw l.blockedSegment.formatContext = g, l.legacyContext = A, l.context = _, je(_), oe;
    }
  }
  function qt(r) {
    var l = r.blockedBoundary;
    r = r.blockedSegment, r.status = 3, Gt(this, l, r);
  }
  function vr(r, l, d) {
    var g = r.blockedBoundary;
    r.blockedSegment.status = 3, g === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.push(null))) : (g.pendingTasks--, g.forceClientRender || (g.forceClientRender = !0, r = d === void 0 ? Error(t(432)) : d, g.errorDigest = l.onError(r), g.parentFlushed && l.clientRenderedBoundaries.push(g)), g.fallbackAbortableTasks.forEach(function(A) {
      return vr(A, l, d);
    }), g.fallbackAbortableTasks.clear(), l.allPendingTasks--, l.allPendingTasks === 0 && (g = l.onAllReady, g()));
  }
  function Ht(r, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null) {
      var d = l.children[0];
      d.id = l.id, d.parentFlushed = !0, d.status === 1 && Ht(r, d);
    } else r.completedSegments.push(l);
  }
  function Gt(r, l, d) {
    if (l === null) {
      if (d.parentFlushed) {
        if (r.completedRootSegment !== null) throw Error(t(389));
        r.completedRootSegment = d;
      }
      r.pendingRootTasks--, r.pendingRootTasks === 0 && (r.onShellError = Ot, l = r.onShellReady, l());
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (d.parentFlushed && d.status === 1 && Ht(l, d), l.parentFlushed && r.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(qt, r), l.fallbackAbortableTasks.clear()) : d.parentFlushed && d.status === 1 && (Ht(l, d), l.completedSegments.length === 1 && l.parentFlushed && r.partialBoundaries.push(l)));
    r.allPendingTasks--, r.allPendingTasks === 0 && (r = r.onAllReady, r());
  }
  function nn(r) {
    if (r.status !== 2) {
      var l = Ve, d = Vt.current;
      Vt.current = nr;
      var g = tt;
      tt = r.responseState;
      try {
        var A = r.pingedTasks, _;
        for (_ = 0; _ < A.length; _++) {
          var D = A[_], G = r, oe = D.blockedSegment;
          if (oe.status === 0) {
            je(D.context);
            try {
              Fe(G, D, D.node), G.responseState.generateStaticMarkup || oe.lastPushedText && oe.textEmbedded && oe.chunks.push("<!-- -->"), D.abortSet.delete(D), oe.status = 1, Gt(G, D.blockedBoundary, oe);
            } catch (dt) {
              if (Wt(), typeof dt == "object" && dt !== null && typeof dt.then == "function") {
                var ue = D.ping;
                dt.then(ue, ue);
              } else {
                D.abortSet.delete(D), oe.status = 4;
                var me = D.blockedBoundary, qe = dt, wt = K(G, qe);
                if (me === null ? q(G, qe) : (me.pendingTasks--, me.forceClientRender || (me.forceClientRender = !0, me.errorDigest = wt, me.parentFlushed && G.clientRenderedBoundaries.push(me))), G.allPendingTasks--, G.allPendingTasks === 0) {
                  var kt = G.onAllReady;
                  kt();
                }
              }
            } finally {
            }
          }
        }
        A.splice(0, _), r.destination !== null && wr(r, r.destination);
      } catch (dt) {
        K(r, dt), q(r, dt);
      } finally {
        tt = g, Vt.current = d, d === nr && je(l);
      }
    }
  }
  function or(r, l, d) {
    switch (d.parentFlushed = !0, d.status) {
      case 0:
        var g = d.id = r.nextSegmentId++;
        return d.lastPushedText = !1, d.textEmbedded = !1, r = r.responseState, l.push('<template id="'), l.push(r.placeholderPrefix), r = g.toString(16), l.push(r), l.push('"></template>');
      case 1:
        d.status = 2;
        var A = !0;
        g = d.chunks;
        var _ = 0;
        d = d.children;
        for (var D = 0; D < d.length; D++) {
          for (A = d[D]; _ < A.index; _++) l.push(g[_]);
          A = ir(r, l, A);
        }
        for (; _ < g.length - 1; _++) l.push(g[_]);
        return _ < g.length && (A = l.push(g[_])), A;
      default:
        throw Error(t(390));
    }
  }
  function ir(r, l, d) {
    var g = d.boundary;
    if (g === null) return or(r, l, d);
    if (g.parentFlushed = !0, g.forceClientRender) return r.responseState.generateStaticMarkup || (g = g.errorDigest, l.push("<!--$!-->"), l.push("<template"), g && (l.push(' data-dgst="'), g = R(g), l.push(g), l.push('"')), l.push("></template>")), or(r, l, d), r = r.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), r;
    if (0 < g.pendingTasks) {
      g.rootSegmentID = r.nextSegmentId++, 0 < g.completedSegments.length && r.partialBoundaries.push(g);
      var A = r.responseState, _ = A.nextSuspenseID++;
      return A = A.boundaryPrefix + _.toString(16), g = g.id = A, Re(l, r.responseState, g), or(r, l, d), l.push("<!--/$-->");
    }
    if (g.byteSize > r.progressiveChunkSize) return g.rootSegmentID = r.nextSegmentId++, r.completedBoundaries.push(g), Re(l, r.responseState, g.id), or(r, l, d), l.push("<!--/$-->");
    if (r.responseState.generateStaticMarkup || l.push("<!--$-->"), d = g.completedSegments, d.length !== 1) throw Error(t(391));
    return ir(r, l, d[0]), r = r.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), r;
  }
  function Nr(r, l, d) {
    return ke(l, r.responseState, d.formatContext, d.id), ir(r, l, d), Ke(l, d.formatContext);
  }
  function Pr(r, l, d) {
    for (var g = d.completedSegments, A = 0; A < g.length; A++) Fr(r, l, d, g[A]);
    if (g.length = 0, r = r.responseState, g = d.id, d = d.rootSegmentID, l.push(r.startInlineScript), r.sentCompleteBoundaryFunction ? l.push('$RC("') : (r.sentCompleteBoundaryFunction = !0, l.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), g === null) throw Error(t(395));
    return d = d.toString(16), l.push(g), l.push('","'), l.push(r.segmentPrefix), l.push(d), l.push('")<\/script>');
  }
  function Fr(r, l, d, g) {
    if (g.status === 2) return !0;
    var A = g.id;
    if (A === -1) {
      if ((g.id = d.rootSegmentID) === -1) throw Error(t(392));
      return Nr(r, l, g);
    }
    return Nr(r, l, g), r = r.responseState, l.push(r.startInlineScript), r.sentCompleteSegmentFunction ? l.push('$RS("') : (r.sentCompleteSegmentFunction = !0, l.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), l.push(r.segmentPrefix), A = A.toString(16), l.push(A), l.push('","'), l.push(r.placeholderPrefix), l.push(A), l.push('")<\/script>');
  }
  function wr(r, l) {
    try {
      var d = r.completedRootSegment;
      if (d !== null && r.pendingRootTasks === 0) {
        ir(r, l, d), r.completedRootSegment = null;
        var g = r.responseState.bootstrapChunks;
        for (d = 0; d < g.length - 1; d++) l.push(g[d]);
        d < g.length && l.push(g[d]);
      }
      var A = r.clientRenderedBoundaries, _;
      for (_ = 0; _ < A.length; _++) {
        var D = A[_];
        g = l;
        var G = r.responseState, oe = D.id, ue = D.errorDigest, me = D.errorMessage, qe = D.errorComponentStack;
        if (g.push(G.startInlineScript), G.sentClientRenderFunction ? g.push('$RX("') : (G.sentClientRenderFunction = !0, g.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), oe === null) throw Error(t(395));
        if (g.push(oe), g.push('"'), ue || me || qe) {
          g.push(",");
          var wt = xe(ue || "");
          g.push(wt);
        }
        if (me || qe) {
          g.push(",");
          var kt = xe(me || "");
          g.push(kt);
        }
        if (qe) {
          g.push(",");
          var dt = xe(qe);
          g.push(dt);
        }
        if (!g.push(")<\/script>")) {
          r.destination = null, _++, A.splice(0, _);
          return;
        }
      }
      A.splice(0, _);
      var sr = r.completedBoundaries;
      for (_ = 0; _ < sr.length; _++) if (!Pr(r, l, sr[_])) {
        r.destination = null, _++, sr.splice(0, _);
        return;
      }
      sr.splice(0, _);
      var Ft = r.partialBoundaries;
      for (_ = 0; _ < Ft.length; _++) {
        var Dr = Ft[_];
        e: {
          A = r, D = l;
          var lr = Dr.completedSegments;
          for (G = 0; G < lr.length; G++) if (!Fr(A, D, Dr, lr[G])) {
            G++, lr.splice(0, G);
            var sn = !1;
            break e;
          }
          lr.splice(0, G), sn = !0;
        }
        if (!sn) {
          r.destination = null, _++, Ft.splice(0, _);
          return;
        }
      }
      Ft.splice(0, _);
      var Yt = r.completedBoundaries;
      for (_ = 0; _ < Yt.length; _++) if (!Pr(r, l, Yt[_])) {
        r.destination = null, _++, Yt.splice(0, _);
        return;
      }
      Yt.splice(0, _);
    } finally {
      r.allPendingTasks === 0 && r.pingedTasks.length === 0 && r.clientRenderedBoundaries.length === 0 && r.completedBoundaries.length === 0 && l.push(null);
    }
  }
  function an(r, l) {
    try {
      var d = r.abortableTasks;
      d.forEach(function(g) {
        return vr(g, r, l);
      }), d.clear(), r.destination !== null && wr(r, r.destination);
    } catch (g) {
      K(r, g), q(r, g);
    }
  }
  function on() {
  }
  function Ir(r, l, d, g) {
    var A = !1, _ = null, D = "", G = { push: function(ue) {
      return ue !== null && (D += ue), !0;
    }, destroy: function(ue) {
      A = !0, _ = ue;
    } }, oe = !1;
    if (r = br(r, Me(d, l ? l.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, on, void 0, function() {
      oe = !0;
    }), nn(r), an(r, g), r.status === 1) r.status = 2, G.destroy(r.fatalError);
    else if (r.status !== 2 && r.destination === null) {
      r.destination = G;
      try {
        wr(r, G);
      } catch (ue) {
        K(r, ue), q(r, ue);
      }
    }
    if (A) throw _;
    if (!oe) throw Error(t(426));
    return D;
  }
  return ur.renderToNodeStream = function() {
    throw Error(t(207));
  }, ur.renderToStaticMarkup = function(r, l) {
    return Ir(r, l, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, ur.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, ur.renderToString = function(r, l) {
    return Ir(r, l, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, ur.version = "18.3.1", ur;
}
var Sn = {}, ho;
function Qs() {
  if (ho) return Sn;
  ho = 1;
  var e = et;
  function t(n) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++) s += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = null, o = 0;
  function c(n, s) {
    if (s.length !== 0) if (512 < s.length) 0 < o && (n.enqueue(new Uint8Array(a.buffer, 0, o)), a = new Uint8Array(512), o = 0), n.enqueue(s);
    else {
      var u = a.length - o;
      u < s.length && (u === 0 ? n.enqueue(a) : (a.set(s.subarray(0, u), o), n.enqueue(a), s = s.subarray(u)), a = new Uint8Array(512), o = 0), a.set(s, o), o += s.length;
    }
  }
  function f(n, s) {
    return c(n, s), !0;
  }
  function y(n) {
    a && 0 < o && (n.enqueue(new Uint8Array(a.buffer, 0, o)), a = null, o = 0);
  }
  var v = new TextEncoder();
  function b(n) {
    return v.encode(n);
  }
  function m(n) {
    return v.encode(n);
  }
  function N(n, s) {
    typeof n.error == "function" ? n.error(s) : n.close();
  }
  var x = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, X = {}, R = {};
  function k(n) {
    return x.call(R, n) ? !0 : x.call(X, n) ? !1 : L.test(n) ? R[n] = !0 : (X[n] = !0, !1);
  }
  function P(n, s, u, h, T, E, j) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = h, this.attributeNamespace = T, this.mustUseProperty = u, this.propertyName = n, this.type = s, this.sanitizeURL = E, this.removeEmptyString = j;
  }
  var U = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    U[n] = new P(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var s = n[0];
    U[s] = new P(s, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    U[n] = new P(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    U[n] = new P(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    U[n] = new P(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    U[n] = new P(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    U[n] = new P(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    U[n] = new P(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    U[n] = new P(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var B = /[\-:]([a-z])/g;
  function H(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var s = n.replace(
      B,
      H
    );
    U[s] = new P(s, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var s = n.replace(B, H);
    U[s] = new P(s, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var s = n.replace(B, H);
    U[s] = new P(s, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    U[n] = new P(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), U.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    U[n] = new P(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  var Y = {
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
  Object.keys(Y).forEach(function(n) {
    S.forEach(function(s) {
      s = s + n.charAt(0).toUpperCase() + n.substring(1), Y[s] = Y[n];
    });
  });
  var le = /["'&<>]/;
  function be(n) {
    if (typeof n == "boolean" || typeof n == "number") return "" + n;
    n = "" + n;
    var s = le.exec(n);
    if (s) {
      var u = "", h, T = 0;
      for (h = s.index; h < n.length; h++) {
        switch (n.charCodeAt(h)) {
          case 34:
            s = "&quot;";
            break;
          case 38:
            s = "&amp;";
            break;
          case 39:
            s = "&#x27;";
            break;
          case 60:
            s = "&lt;";
            break;
          case 62:
            s = "&gt;";
            break;
          default:
            continue;
        }
        T !== h && (u += n.substring(T, h)), T = h + 1, u += s;
      }
      n = T !== h ? u + n.substring(T, h) : u;
    }
    return n;
  }
  var Ee = /([A-Z])/g, Ne = /^ms-/, ze = Array.isArray, Se = m("<script>"), fe = m("<\/script>"), Te = m('<script src="'), Re = m('<script type="module" src="'), ke = m('" async=""><\/script>'), Ke = /(<\/|<)(s)(cript)/gi;
  function Pe(n, s, u, h) {
    return "" + s + (u === "s" ? "\\u0073" : "\\u0053") + h;
  }
  function xe(n, s, u, h, T) {
    n = n === void 0 ? "" : n, s = s === void 0 ? Se : m('<script nonce="' + be(s) + '">');
    var E = [];
    if (u !== void 0 && E.push(s, b(("" + u).replace(Ke, Pe)), fe), h !== void 0) for (u = 0; u < h.length; u++) E.push(Te, b(be(h[u])), ke);
    if (T !== void 0) for (h = 0; h < T.length; h++) E.push(Re, b(be(T[h])), ke);
    return { bootstrapChunks: E, startInlineScript: s, placeholderPrefix: m(n + "P:"), segmentPrefix: m(n + "S:"), boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Me(n, s) {
    return { insertionMode: n, selectedValue: s };
  }
  function Ge(n) {
    return Me(n === "http://www.w3.org/2000/svg" ? 2 : n === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function ve(n, s, u) {
    switch (s) {
      case "select":
        return Me(1, u.value != null ? u.value : u.defaultValue);
      case "svg":
        return Me(2, null);
      case "math":
        return Me(3, null);
      case "foreignObject":
        return Me(1, null);
      case "table":
        return Me(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Me(5, null);
      case "colgroup":
        return Me(7, null);
      case "tr":
        return Me(6, null);
    }
    return 4 <= n.insertionMode || n.insertionMode === 0 ? Me(1, null) : n;
  }
  var I = m("<!-- -->");
  function O(n, s, u, h) {
    return s === "" ? h : (h && n.push(I), n.push(b(be(s))), !0);
  }
  var F = /* @__PURE__ */ new Map(), M = m(' style="'), p = m(":"), te = m(";");
  function C(n, s, u) {
    if (typeof u != "object") throw Error(t(62));
    s = !0;
    for (var h in u) if (x.call(u, h)) {
      var T = u[h];
      if (T != null && typeof T != "boolean" && T !== "") {
        if (h.indexOf("--") === 0) {
          var E = b(be(h));
          T = b(be(("" + T).trim()));
        } else {
          E = h;
          var j = F.get(E);
          j !== void 0 || (j = m(be(E.replace(Ee, "-$1").toLowerCase().replace(Ne, "-ms-"))), F.set(E, j)), E = j, T = typeof T == "number" ? T === 0 || x.call(Y, h) ? b("" + T) : b(T + "px") : b(be(("" + T).trim()));
        }
        s ? (s = !1, n.push(M, E, p, T)) : n.push(te, E, p, T);
      }
    }
    s || n.push(J);
  }
  var re = m(" "), Q = m('="'), J = m('"'), z = m('=""');
  function ne(n, s, u, h) {
    switch (u) {
      case "style":
        C(n, s, h);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") {
      if (s = U.hasOwnProperty(u) ? U[u] : null, s !== null) {
        switch (typeof h) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans) return;
        }
        switch (u = b(s.attributeName), s.type) {
          case 3:
            h && n.push(re, u, z);
            break;
          case 4:
            h === !0 ? n.push(re, u, z) : h !== !1 && n.push(re, u, Q, b(be(h)), J);
            break;
          case 5:
            isNaN(h) || n.push(re, u, Q, b(be(h)), J);
            break;
          case 6:
            !isNaN(h) && 1 <= h && n.push(re, u, Q, b(be(h)), J);
            break;
          default:
            s.sanitizeURL && (h = "" + h), n.push(re, u, Q, b(be(h)), J);
        }
      } else if (k(u)) {
        switch (typeof h) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = u.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        n.push(re, b(u), Q, b(be(h)), J);
      }
    }
  }
  var se = m(">"), Z = m("/>");
  function pe(n, s, u) {
    if (s != null) {
      if (u != null) throw Error(t(60));
      if (typeof s != "object" || !("__html" in s)) throw Error(t(61));
      s = s.__html, s != null && n.push(b("" + s));
    }
  }
  function ee(n) {
    var s = "";
    return e.Children.forEach(n, function(u) {
      u != null && (s += u);
    }), s;
  }
  var ce = m(' selected=""');
  function We(n, s, u, h) {
    n.push(he(u));
    var T = u = null, E;
    for (E in s) if (x.call(s, E)) {
      var j = s[E];
      if (j != null) switch (E) {
        case "children":
          u = j;
          break;
        case "dangerouslySetInnerHTML":
          T = j;
          break;
        default:
          ne(n, h, E, j);
      }
    }
    return n.push(se), pe(n, T, u), typeof u == "string" ? (n.push(b(be(u))), null) : u;
  }
  var de = m(`
`), Qe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ve = /* @__PURE__ */ new Map();
  function he(n) {
    var s = Ve.get(n);
    if (s === void 0) {
      if (!Qe.test(n)) throw Error(t(65, n));
      s = m("<" + n), Ve.set(n, s);
    }
    return s;
  }
  var $ = m("<!DOCTYPE html>");
  function ae(n, s, u, h, T) {
    switch (s) {
      case "select":
        n.push(he("select"));
        var E = null, j = null;
        for (ge in u) if (x.call(u, ge)) {
          var W = u[ge];
          if (W != null) switch (ge) {
            case "children":
              E = W;
              break;
            case "dangerouslySetInnerHTML":
              j = W;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(n, h, ge, W);
          }
        }
        return n.push(se), pe(n, j, E), E;
      case "option":
        j = T.selectedValue, n.push(he("option"));
        var ie = W = null, ye = null, ge = null;
        for (E in u) if (x.call(u, E)) {
          var Be = u[E];
          if (Be != null) switch (E) {
            case "children":
              W = Be;
              break;
            case "selected":
              ye = Be;
              break;
            case "dangerouslySetInnerHTML":
              ge = Be;
              break;
            case "value":
              ie = Be;
            default:
              ne(n, h, E, Be);
          }
        }
        if (j != null) if (u = ie !== null ? "" + ie : ee(W), ze(j)) {
          for (h = 0; h < j.length; h++)
            if ("" + j[h] === u) {
              n.push(ce);
              break;
            }
        } else "" + j === u && n.push(ce);
        else ye && n.push(ce);
        return n.push(se), pe(n, ge, W), W;
      case "textarea":
        n.push(he("textarea")), ge = j = E = null;
        for (W in u) if (x.call(u, W) && (ie = u[W], ie != null)) switch (W) {
          case "children":
            ge = ie;
            break;
          case "value":
            E = ie;
            break;
          case "defaultValue":
            j = ie;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(n, h, W, ie);
        }
        if (E === null && j !== null && (E = j), n.push(se), ge != null) {
          if (E != null) throw Error(t(92));
          if (ze(ge) && 1 < ge.length) throw Error(t(93));
          E = "" + ge;
        }
        return typeof E == "string" && E[0] === `
` && n.push(de), E !== null && n.push(b(be("" + E))), null;
      case "input":
        n.push(he("input")), ie = ge = W = E = null;
        for (j in u) if (x.call(u, j) && (ye = u[j], ye != null)) switch (j) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ie = ye;
            break;
          case "defaultValue":
            W = ye;
            break;
          case "checked":
            ge = ye;
            break;
          case "value":
            E = ye;
            break;
          default:
            ne(n, h, j, ye);
        }
        return ge !== null ? ne(
          n,
          h,
          "checked",
          ge
        ) : ie !== null && ne(n, h, "checked", ie), E !== null ? ne(n, h, "value", E) : W !== null && ne(n, h, "value", W), n.push(Z), null;
      case "menuitem":
        n.push(he("menuitem"));
        for (var pt in u) if (x.call(u, pt) && (E = u[pt], E != null)) switch (pt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(n, h, pt, E);
        }
        return n.push(se), null;
      case "title":
        n.push(he("title")), E = null;
        for (Be in u) if (x.call(u, Be) && (j = u[Be], j != null)) switch (Be) {
          case "children":
            E = j;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(n, h, Be, j);
        }
        return n.push(se), E;
      case "listing":
      case "pre":
        n.push(he(s)), j = E = null;
        for (ie in u) if (x.call(u, ie) && (W = u[ie], W != null)) switch (ie) {
          case "children":
            E = W;
            break;
          case "dangerouslySetInnerHTML":
            j = W;
            break;
          default:
            ne(n, h, ie, W);
        }
        if (n.push(se), j != null) {
          if (E != null) throw Error(t(60));
          if (typeof j != "object" || !("__html" in j)) throw Error(t(61));
          u = j.__html, u != null && (typeof u == "string" && 0 < u.length && u[0] === `
` ? n.push(de, b(u)) : n.push(b("" + u)));
        }
        return typeof E == "string" && E[0] === `
` && n.push(de), E;
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
        n.push(he(s));
        for (var St in u) if (x.call(u, St) && (E = u[St], E != null)) switch (St) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, s));
          default:
            ne(n, h, St, E);
        }
        return n.push(Z), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return We(n, u, s, h);
      case "html":
        return T.insertionMode === 0 && n.push($), We(n, u, s, h);
      default:
        if (s.indexOf("-") === -1 && typeof u.is != "string") return We(n, u, s, h);
        n.push(he(s)), j = E = null;
        for (ye in u) if (x.call(u, ye) && (W = u[ye], W != null)) switch (ye) {
          case "children":
            E = W;
            break;
          case "dangerouslySetInnerHTML":
            j = W;
            break;
          case "style":
            C(n, h, W);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            k(ye) && typeof W != "function" && typeof W != "symbol" && n.push(re, b(ye), Q, b(be(W)), J);
        }
        return n.push(se), pe(n, j, E), E;
    }
  }
  var Xe = m("</"), at = m(">"), je = m('<template id="'), er = m('"></template>'), Mt = m("<!--$-->"), pr = m('<!--$?--><template id="'), Et = m('"></template>'), vt = m("<!--$!-->"), ut = m("<!--/$-->"), Tt = m("<template"), tr = m('"'), rr = m(' data-dgst="');
  m(' data-msg="'), m(' data-stck="');
  var Or = m("></template>");
  function Ze(n, s, u) {
    if (c(n, pr), u === null) throw Error(t(395));
    return c(n, u), f(n, Et);
  }
  var Rt = m('<div hidden id="'), Lt = m('">'), Ce = m("</div>"), Nt = m('<svg aria-hidden="true" style="display:none" id="'), $t = m('">'), Le = m("</svg>"), Je = m('<math aria-hidden="true" style="display:none" id="'), zt = m('">'), gt = m("</math>"), Ut = m('<table hidden id="'), Bt = m('">'), Wt = m("</table>"), hr = m('<table hidden><tbody id="'), yt = m('">'), Pt = m("</tbody></table>"), mr = m('<table hidden><tr id="'), gr = m('">'), At = m("</tr></table>"), nr = m('<table hidden><colgroup id="'), tt = m('">'), Vt = m("</colgroup></table>");
  function yr(n, s, u, h) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return c(n, Rt), c(n, s.segmentPrefix), c(n, b(h.toString(16))), f(n, Lt);
      case 2:
        return c(n, Nt), c(n, s.segmentPrefix), c(n, b(h.toString(16))), f(n, $t);
      case 3:
        return c(n, Je), c(n, s.segmentPrefix), c(n, b(h.toString(16))), f(n, zt);
      case 4:
        return c(n, Ut), c(n, s.segmentPrefix), c(n, b(h.toString(16))), f(n, Bt);
      case 5:
        return c(n, hr), c(n, s.segmentPrefix), c(n, b(h.toString(16))), f(n, yt);
      case 6:
        return c(n, mr), c(n, s.segmentPrefix), c(n, b(h.toString(16))), f(n, gr);
      case 7:
        return c(
          n,
          nr
        ), c(n, s.segmentPrefix), c(n, b(h.toString(16))), f(n, tt);
      default:
        throw Error(t(397));
    }
  }
  function Ot(n, s) {
    switch (s.insertionMode) {
      case 0:
      case 1:
        return f(n, Ce);
      case 2:
        return f(n, Le);
      case 3:
        return f(n, gt);
      case 4:
        return f(n, Wt);
      case 5:
        return f(n, Pt);
      case 6:
        return f(n, At);
      case 7:
        return f(n, Vt);
      default:
        throw Error(t(397));
    }
  }
  var br = m('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), ar = m('$RS("'), w = m('","'), K = m('")<\/script>'), q = m('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), _e = m('$RC("'), He = m('","'), Ue = m('")<\/script>'), ot = m('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Fe = m('$RX("'), it = m('"'), Ye = m(")<\/script>"), qt = m(","), vr = /[<\u2028\u2029]/g;
  function Ht(n) {
    return JSON.stringify(n).replace(vr, function(s) {
      switch (s) {
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
  var Gt = Object.assign, nn = Symbol.for("react.element"), or = Symbol.for("react.portal"), ir = Symbol.for("react.fragment"), Nr = Symbol.for("react.strict_mode"), Pr = Symbol.for("react.profiler"), Fr = Symbol.for("react.provider"), wr = Symbol.for("react.context"), an = Symbol.for("react.forward_ref"), on = Symbol.for("react.suspense"), Ir = Symbol.for("react.suspense_list"), r = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), d = Symbol.for("react.scope"), g = Symbol.for("react.debug_trace_mode"), A = Symbol.for("react.legacy_hidden"), _ = Symbol.for("react.default_value"), D = Symbol.iterator;
  function G(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ir:
        return "Fragment";
      case or:
        return "Portal";
      case Pr:
        return "Profiler";
      case Nr:
        return "StrictMode";
      case on:
        return "Suspense";
      case Ir:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case wr:
        return (n.displayName || "Context") + ".Consumer";
      case Fr:
        return (n._context.displayName || "Context") + ".Provider";
      case an:
        var s = n.render;
        return n = n.displayName, n || (n = s.displayName || s.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case r:
        return s = n.displayName || null, s !== null ? s : G(n.type) || "Memo";
      case l:
        s = n._payload, n = n._init;
        try {
          return G(n(s));
        } catch {
        }
    }
    return null;
  }
  var oe = {};
  function ue(n, s) {
    if (n = n.contextTypes, !n) return oe;
    var u = {}, h;
    for (h in n) u[h] = s[h];
    return u;
  }
  var me = null;
  function qe(n, s) {
    if (n !== s) {
      n.context._currentValue = n.parentValue, n = n.parent;
      var u = s.parent;
      if (n === null) {
        if (u !== null) throw Error(t(401));
      } else {
        if (u === null) throw Error(t(401));
        qe(n, u);
      }
      s.context._currentValue = s.value;
    }
  }
  function wt(n) {
    n.context._currentValue = n.parentValue, n = n.parent, n !== null && wt(n);
  }
  function kt(n) {
    var s = n.parent;
    s !== null && kt(s), n.context._currentValue = n.value;
  }
  function dt(n, s) {
    if (n.context._currentValue = n.parentValue, n = n.parent, n === null) throw Error(t(402));
    n.depth === s.depth ? qe(n, s) : dt(n, s);
  }
  function sr(n, s) {
    var u = s.parent;
    if (u === null) throw Error(t(402));
    n.depth === u.depth ? qe(n, u) : sr(n, u), s.context._currentValue = s.value;
  }
  function Ft(n) {
    var s = me;
    s !== n && (s === null ? kt(n) : n === null ? wt(s) : s.depth === n.depth ? qe(s, n) : s.depth > n.depth ? dt(s, n) : sr(s, n), me = n);
  }
  var Dr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(n, s) {
    n = n._reactInternals, n.queue !== null && n.queue.push(s);
  }, enqueueReplaceState: function(n, s) {
    n = n._reactInternals, n.replace = !0, n.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function lr(n, s, u, h) {
    var T = n.state !== void 0 ? n.state : null;
    n.updater = Dr, n.props = u, n.state = T;
    var E = { queue: [], replace: !1 };
    n._reactInternals = E;
    var j = s.contextType;
    if (n.context = typeof j == "object" && j !== null ? j._currentValue : h, j = s.getDerivedStateFromProps, typeof j == "function" && (j = j(u, T), T = j == null ? T : Gt({}, T, j), n.state = T), typeof s.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function")) if (s = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), s !== n.state && Dr.enqueueReplaceState(n, n.state, null), E.queue !== null && 0 < E.queue.length) if (s = E.queue, j = E.replace, E.queue = null, E.replace = !1, j && s.length === 1) n.state = s[0];
    else {
      for (E = j ? s[0] : n.state, T = !0, j = j ? 1 : 0; j < s.length; j++) {
        var W = s[j];
        W = typeof W == "function" ? W.call(n, E, u, h) : W, W != null && (T ? (T = !1, E = Gt({}, E, W)) : Gt(E, W));
      }
      n.state = E;
    }
    else E.queue = null;
  }
  var sn = { id: 1, overflow: "" };
  function Yt(n, s, u) {
    var h = n.id;
    n = n.overflow;
    var T = 32 - ln(h) - 1;
    h &= ~(1 << T), u += 1;
    var E = 32 - ln(s) + T;
    if (30 < E) {
      var j = T - T % 5;
      return E = (h & (1 << j) - 1).toString(32), h >>= j, T -= j, { id: 1 << 32 - ln(s) + T | u << T | h, overflow: E + n };
    }
    return { id: 1 << E | u << T | h, overflow: n };
  }
  var ln = Math.clz32 ? Math.clz32 : os, ns = Math.log, as = Math.LN2;
  function os(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ns(n) / as | 0) | 0;
  }
  function is(n, s) {
    return n === s && (n !== 0 || 1 / n === 1 / s) || n !== n && s !== s;
  }
  var ss = typeof Object.is == "function" ? Object.is : is, It = null, zn = null, cn = null, $e = null, jr = !1, un = !1, Mr = 0, Xt = null, dn = 0;
  function cr() {
    if (It === null) throw Error(t(321));
    return It;
  }
  function ja() {
    if (0 < dn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Un() {
    return $e === null ? cn === null ? (jr = !1, cn = $e = ja()) : (jr = !0, $e = cn) : $e.next === null ? (jr = !1, $e = $e.next = ja()) : (jr = !0, $e = $e.next), $e;
  }
  function Bn() {
    zn = It = null, un = !1, cn = null, dn = 0, $e = Xt = null;
  }
  function Ma(n, s) {
    return typeof s == "function" ? s(n) : s;
  }
  function La(n, s, u) {
    if (It = cr(), $e = Un(), jr) {
      var h = $e.queue;
      if (s = h.dispatch, Xt !== null && (u = Xt.get(h), u !== void 0)) {
        Xt.delete(h), h = $e.memoizedState;
        do
          h = n(h, u.action), u = u.next;
        while (u !== null);
        return $e.memoizedState = h, [h, s];
      }
      return [$e.memoizedState, s];
    }
    return n = n === Ma ? typeof s == "function" ? s() : s : u !== void 0 ? u(s) : s, $e.memoizedState = n, n = $e.queue = { last: null, dispatch: null }, n = n.dispatch = ls.bind(null, It, n), [$e.memoizedState, n];
  }
  function $a(n, s) {
    if (It = cr(), $e = Un(), s = s === void 0 ? null : s, $e !== null) {
      var u = $e.memoizedState;
      if (u !== null && s !== null) {
        var h = u[1];
        e: if (h === null) h = !1;
        else {
          for (var T = 0; T < h.length && T < s.length; T++) if (!ss(s[T], h[T])) {
            h = !1;
            break e;
          }
          h = !0;
        }
        if (h) return u[0];
      }
    }
    return n = n(), $e.memoizedState = [n, s], n;
  }
  function ls(n, s, u) {
    if (25 <= dn) throw Error(t(301));
    if (n === It) if (un = !0, n = { action: u, next: null }, Xt === null && (Xt = /* @__PURE__ */ new Map()), u = Xt.get(s), u === void 0) Xt.set(s, n);
    else {
      for (s = u; s.next !== null; ) s = s.next;
      s.next = n;
    }
  }
  function cs() {
    throw Error(t(394));
  }
  function fn() {
  }
  var za = { readContext: function(n) {
    return n._currentValue;
  }, useContext: function(n) {
    return cr(), n._currentValue;
  }, useMemo: $a, useReducer: La, useRef: function(n) {
    It = cr(), $e = Un();
    var s = $e.memoizedState;
    return s === null ? (n = { current: n }, $e.memoizedState = n) : s;
  }, useState: function(n) {
    return La(Ma, n);
  }, useInsertionEffect: fn, useLayoutEffect: function() {
  }, useCallback: function(n, s) {
    return $a(function() {
      return n;
    }, s);
  }, useImperativeHandle: fn, useEffect: fn, useDebugValue: fn, useDeferredValue: function(n) {
    return cr(), n;
  }, useTransition: function() {
    return cr(), [!1, cs];
  }, useId: function() {
    var n = zn.treeContext, s = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - ln(n) - 1)).toString(32) + s;
    var u = pn;
    if (u === null) throw Error(t(404));
    return s = Mr++, n = ":" + u.idPrefix + "R" + n, 0 < s && (n += "H" + s.toString(32)), n + ":";
  }, useMutableSource: function(n, s) {
    return cr(), s(n._source);
  }, useSyncExternalStore: function(n, s, u) {
    if (u === void 0) throw Error(t(407));
    return u();
  } }, pn = null, Wn = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function us(n) {
    return console.error(n), null;
  }
  function Lr() {
  }
  function ds(n, s, u, h, T, E, j, W, ie) {
    var ye = [], ge = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: h === void 0 ? 12800 : h, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ge, pingedTasks: ye, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: T === void 0 ? us : T, onAllReady: E === void 0 ? Lr : E, onShellReady: j === void 0 ? Lr : j, onShellError: W === void 0 ? Lr : W, onFatalError: ie === void 0 ? Lr : ie }, u = hn(s, 0, null, u, !1, !1), u.parentFlushed = !0, n = Vn(s, n, null, u, ge, oe, null, sn), ye.push(n), s;
  }
  function Vn(n, s, u, h, T, E, j, W) {
    n.allPendingTasks++, u === null ? n.pendingRootTasks++ : u.pendingTasks++;
    var ie = { node: s, ping: function() {
      var ye = n.pingedTasks;
      ye.push(ie), ye.length === 1 && Ga(n);
    }, blockedBoundary: u, blockedSegment: h, abortSet: T, legacyContext: E, context: j, treeContext: W };
    return T.add(ie), ie;
  }
  function hn(n, s, u, h, T, E) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: h, boundary: u, lastPushedText: T, textEmbedded: E };
  }
  function $r(n, s) {
    if (n = n.onError(s), n != null && typeof n != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
    return n;
  }
  function mn(n, s) {
    var u = n.onShellError;
    u(s), u = n.onFatalError, u(s), n.destination !== null ? (n.status = 2, N(n.destination, s)) : (n.status = 1, n.fatalError = s);
  }
  function Ua(n, s, u, h, T) {
    for (It = {}, zn = s, Mr = 0, n = u(h, T); un; ) un = !1, Mr = 0, dn += 1, $e = null, n = u(h, T);
    return Bn(), n;
  }
  function Ba(n, s, u, h) {
    var T = u.render(), E = h.childContextTypes;
    if (E != null) {
      var j = s.legacyContext;
      if (typeof u.getChildContext != "function") h = j;
      else {
        u = u.getChildContext();
        for (var W in u) if (!(W in E)) throw Error(t(108, G(h) || "Unknown", W));
        h = Gt({}, j, u);
      }
      s.legacyContext = h, ft(n, s, T), s.legacyContext = j;
    } else ft(n, s, T);
  }
  function Wa(n, s) {
    if (n && n.defaultProps) {
      s = Gt({}, s), n = n.defaultProps;
      for (var u in n) s[u] === void 0 && (s[u] = n[u]);
      return s;
    }
    return s;
  }
  function qn(n, s, u, h, T) {
    if (typeof u == "function") if (u.prototype && u.prototype.isReactComponent) {
      T = ue(u, s.legacyContext);
      var E = u.contextType;
      E = new u(h, typeof E == "object" && E !== null ? E._currentValue : T), lr(E, u, h, T), Ba(n, s, E, u);
    } else {
      E = ue(u, s.legacyContext), T = Ua(n, s, u, h, E);
      var j = Mr !== 0;
      if (typeof T == "object" && T !== null && typeof T.render == "function" && T.$$typeof === void 0) lr(T, u, h, E), Ba(n, s, T, u);
      else if (j) {
        h = s.treeContext, s.treeContext = Yt(h, 1, 0);
        try {
          ft(n, s, T);
        } finally {
          s.treeContext = h;
        }
      } else ft(n, s, T);
    }
    else if (typeof u == "string") {
      switch (T = s.blockedSegment, E = ae(T.chunks, u, h, n.responseState, T.formatContext), T.lastPushedText = !1, j = T.formatContext, T.formatContext = ve(j, u, h), Hn(n, s, E), T.formatContext = j, u) {
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
          T.chunks.push(Xe, b(u), at);
      }
      T.lastPushedText = !1;
    } else {
      switch (u) {
        case A:
        case g:
        case Nr:
        case Pr:
        case ir:
          ft(n, s, h.children);
          return;
        case Ir:
          ft(n, s, h.children);
          return;
        case d:
          throw Error(t(343));
        case on:
          e: {
            u = s.blockedBoundary, T = s.blockedSegment, E = h.fallback, h = h.children, j = /* @__PURE__ */ new Set();
            var W = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: j, errorDigest: null }, ie = hn(n, T.chunks.length, W, T.formatContext, !1, !1);
            T.children.push(ie), T.lastPushedText = !1;
            var ye = hn(n, 0, null, T.formatContext, !1, !1);
            ye.parentFlushed = !0, s.blockedBoundary = W, s.blockedSegment = ye;
            try {
              if (Hn(
                n,
                s,
                h
              ), ye.lastPushedText && ye.textEmbedded && ye.chunks.push(I), ye.status = 1, gn(W, ye), W.pendingTasks === 0) break e;
            } catch (ge) {
              ye.status = 4, W.forceClientRender = !0, W.errorDigest = $r(n, ge);
            } finally {
              s.blockedBoundary = u, s.blockedSegment = T;
            }
            s = Vn(n, E, u, ie, j, s.legacyContext, s.context, s.treeContext), n.pingedTasks.push(s);
          }
          return;
      }
      if (typeof u == "object" && u !== null) switch (u.$$typeof) {
        case an:
          if (h = Ua(n, s, u.render, h, T), Mr !== 0) {
            u = s.treeContext, s.treeContext = Yt(u, 1, 0);
            try {
              ft(n, s, h);
            } finally {
              s.treeContext = u;
            }
          } else ft(n, s, h);
          return;
        case r:
          u = u.type, h = Wa(u, h), qn(n, s, u, h, T);
          return;
        case Fr:
          if (T = h.children, u = u._context, h = h.value, E = u._currentValue, u._currentValue = h, j = me, me = h = { parent: j, depth: j === null ? 0 : j.depth + 1, context: u, parentValue: E, value: h }, s.context = h, ft(n, s, T), n = me, n === null) throw Error(t(403));
          h = n.parentValue, n.context._currentValue = h === _ ? n.context._defaultValue : h, n = me = n.parent, s.context = n;
          return;
        case wr:
          h = h.children, h = h(u._currentValue), ft(n, s, h);
          return;
        case l:
          T = u._init, u = T(u._payload), h = Wa(u, h), qn(n, s, u, h, void 0);
          return;
      }
      throw Error(t(
        130,
        u == null ? u : typeof u,
        ""
      ));
    }
  }
  function ft(n, s, u) {
    if (s.node = u, typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case nn:
          qn(n, s, u.type, u.props, u.ref);
          return;
        case or:
          throw Error(t(257));
        case l:
          var h = u._init;
          u = h(u._payload), ft(n, s, u);
          return;
      }
      if (ze(u)) {
        Va(n, s, u);
        return;
      }
      if (u === null || typeof u != "object" ? h = null : (h = D && u[D] || u["@@iterator"], h = typeof h == "function" ? h : null), h && (h = h.call(u))) {
        if (u = h.next(), !u.done) {
          var T = [];
          do
            T.push(u.value), u = h.next();
          while (!u.done);
          Va(n, s, T);
        }
        return;
      }
      throw n = Object.prototype.toString.call(u), Error(t(31, n === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : n));
    }
    typeof u == "string" ? (h = s.blockedSegment, h.lastPushedText = O(s.blockedSegment.chunks, u, n.responseState, h.lastPushedText)) : typeof u == "number" && (h = s.blockedSegment, h.lastPushedText = O(s.blockedSegment.chunks, "" + u, n.responseState, h.lastPushedText));
  }
  function Va(n, s, u) {
    for (var h = u.length, T = 0; T < h; T++) {
      var E = s.treeContext;
      s.treeContext = Yt(E, h, T);
      try {
        Hn(n, s, u[T]);
      } finally {
        s.treeContext = E;
      }
    }
  }
  function Hn(n, s, u) {
    var h = s.blockedSegment.formatContext, T = s.legacyContext, E = s.context;
    try {
      return ft(n, s, u);
    } catch (ie) {
      if (Bn(), typeof ie == "object" && ie !== null && typeof ie.then == "function") {
        u = ie;
        var j = s.blockedSegment, W = hn(n, j.chunks.length, null, j.formatContext, j.lastPushedText, !0);
        j.children.push(W), j.lastPushedText = !1, n = Vn(n, s.node, s.blockedBoundary, W, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, u.then(n, n), s.blockedSegment.formatContext = h, s.legacyContext = T, s.context = E, Ft(E);
      } else throw s.blockedSegment.formatContext = h, s.legacyContext = T, s.context = E, Ft(E), ie;
    }
  }
  function fs(n) {
    var s = n.blockedBoundary;
    n = n.blockedSegment, n.status = 3, Ha(this, s, n);
  }
  function qa(n, s, u) {
    var h = n.blockedBoundary;
    n.blockedSegment.status = 3, h === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.close())) : (h.pendingTasks--, h.forceClientRender || (h.forceClientRender = !0, n = u === void 0 ? Error(t(432)) : u, h.errorDigest = s.onError(n), h.parentFlushed && s.clientRenderedBoundaries.push(h)), h.fallbackAbortableTasks.forEach(function(T) {
      return qa(T, s, u);
    }), h.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (h = s.onAllReady, h()));
  }
  function gn(n, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var u = s.children[0];
      u.id = s.id, u.parentFlushed = !0, u.status === 1 && gn(n, u);
    } else n.completedSegments.push(s);
  }
  function Ha(n, s, u) {
    if (s === null) {
      if (u.parentFlushed) {
        if (n.completedRootSegment !== null) throw Error(t(389));
        n.completedRootSegment = u;
      }
      n.pendingRootTasks--, n.pendingRootTasks === 0 && (n.onShellError = Lr, s = n.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (u.parentFlushed && u.status === 1 && gn(s, u), s.parentFlushed && n.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(fs, n), s.fallbackAbortableTasks.clear()) : u.parentFlushed && u.status === 1 && (gn(s, u), s.completedSegments.length === 1 && s.parentFlushed && n.partialBoundaries.push(s)));
    n.allPendingTasks--, n.allPendingTasks === 0 && (n = n.onAllReady, n());
  }
  function Ga(n) {
    if (n.status !== 2) {
      var s = me, u = Wn.current;
      Wn.current = za;
      var h = pn;
      pn = n.responseState;
      try {
        var T = n.pingedTasks, E;
        for (E = 0; E < T.length; E++) {
          var j = T[E], W = n, ie = j.blockedSegment;
          if (ie.status === 0) {
            Ft(j.context);
            try {
              ft(W, j, j.node), ie.lastPushedText && ie.textEmbedded && ie.chunks.push(I), j.abortSet.delete(j), ie.status = 1, Ha(W, j.blockedBoundary, ie);
            } catch (xt) {
              if (Bn(), typeof xt == "object" && xt !== null && typeof xt.then == "function") {
                var ye = j.ping;
                xt.then(ye, ye);
              } else {
                j.abortSet.delete(j), ie.status = 4;
                var ge = j.blockedBoundary, Be = xt, pt = $r(W, Be);
                if (ge === null ? mn(W, Be) : (ge.pendingTasks--, ge.forceClientRender || (ge.forceClientRender = !0, ge.errorDigest = pt, ge.parentFlushed && W.clientRenderedBoundaries.push(ge))), W.allPendingTasks--, W.allPendingTasks === 0) {
                  var St = W.onAllReady;
                  St();
                }
              }
            } finally {
            }
          }
        }
        T.splice(0, E), n.destination !== null && Gn(n, n.destination);
      } catch (xt) {
        $r(n, xt), mn(n, xt);
      } finally {
        pn = h, Wn.current = u, u === za && Ft(s);
      }
    }
  }
  function yn(n, s, u) {
    switch (u.parentFlushed = !0, u.status) {
      case 0:
        var h = u.id = n.nextSegmentId++;
        return u.lastPushedText = !1, u.textEmbedded = !1, n = n.responseState, c(s, je), c(s, n.placeholderPrefix), n = b(h.toString(16)), c(s, n), f(s, er);
      case 1:
        u.status = 2;
        var T = !0;
        h = u.chunks;
        var E = 0;
        u = u.children;
        for (var j = 0; j < u.length; j++) {
          for (T = u[j]; E < T.index; E++) c(s, h[E]);
          T = bn(n, s, T);
        }
        for (; E < h.length - 1; E++) c(s, h[E]);
        return E < h.length && (T = f(s, h[E])), T;
      default:
        throw Error(t(390));
    }
  }
  function bn(n, s, u) {
    var h = u.boundary;
    if (h === null) return yn(n, s, u);
    if (h.parentFlushed = !0, h.forceClientRender) h = h.errorDigest, f(s, vt), c(s, Tt), h && (c(s, rr), c(s, b(be(h))), c(s, tr)), f(s, Or), yn(n, s, u);
    else if (0 < h.pendingTasks) {
      h.rootSegmentID = n.nextSegmentId++, 0 < h.completedSegments.length && n.partialBoundaries.push(h);
      var T = n.responseState, E = T.nextSuspenseID++;
      T = m(T.boundaryPrefix + E.toString(16)), h = h.id = T, Ze(s, n.responseState, h), yn(n, s, u);
    } else if (h.byteSize > n.progressiveChunkSize) h.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(h), Ze(s, n.responseState, h.id), yn(n, s, u);
    else {
      if (f(s, Mt), u = h.completedSegments, u.length !== 1) throw Error(t(391));
      bn(n, s, u[0]);
    }
    return f(s, ut);
  }
  function Ya(n, s, u) {
    return yr(s, n.responseState, u.formatContext, u.id), bn(n, s, u), Ot(s, u.formatContext);
  }
  function Xa(n, s, u) {
    for (var h = u.completedSegments, T = 0; T < h.length; T++) Ka(n, s, u, h[T]);
    if (h.length = 0, n = n.responseState, h = u.id, u = u.rootSegmentID, c(s, n.startInlineScript), n.sentCompleteBoundaryFunction ? c(s, _e) : (n.sentCompleteBoundaryFunction = !0, c(s, q)), h === null) throw Error(t(395));
    return u = b(u.toString(16)), c(s, h), c(s, He), c(s, n.segmentPrefix), c(s, u), f(s, Ue);
  }
  function Ka(n, s, u, h) {
    if (h.status === 2) return !0;
    var T = h.id;
    if (T === -1) {
      if ((h.id = u.rootSegmentID) === -1) throw Error(t(392));
      return Ya(n, s, h);
    }
    return Ya(n, s, h), n = n.responseState, c(s, n.startInlineScript), n.sentCompleteSegmentFunction ? c(s, ar) : (n.sentCompleteSegmentFunction = !0, c(s, br)), c(s, n.segmentPrefix), T = b(T.toString(16)), c(s, T), c(s, w), c(s, n.placeholderPrefix), c(s, T), f(s, K);
  }
  function Gn(n, s) {
    a = new Uint8Array(512), o = 0;
    try {
      var u = n.completedRootSegment;
      if (u !== null && n.pendingRootTasks === 0) {
        bn(n, s, u), n.completedRootSegment = null;
        var h = n.responseState.bootstrapChunks;
        for (u = 0; u < h.length - 1; u++) c(s, h[u]);
        u < h.length && f(s, h[u]);
      }
      var T = n.clientRenderedBoundaries, E;
      for (E = 0; E < T.length; E++) {
        var j = T[E];
        h = s;
        var W = n.responseState, ie = j.id, ye = j.errorDigest, ge = j.errorMessage, Be = j.errorComponentStack;
        if (c(h, W.startInlineScript), W.sentClientRenderFunction ? c(h, Fe) : (W.sentClientRenderFunction = !0, c(
          h,
          ot
        )), ie === null) throw Error(t(395));
        c(h, ie), c(h, it), (ye || ge || Be) && (c(h, qt), c(h, b(Ht(ye || "")))), (ge || Be) && (c(h, qt), c(h, b(Ht(ge || "")))), Be && (c(h, qt), c(h, b(Ht(Be)))), f(h, Ye);
      }
      T.splice(0, E);
      var pt = n.completedBoundaries;
      for (E = 0; E < pt.length; E++) Xa(n, s, pt[E]);
      pt.splice(0, E), y(s), a = new Uint8Array(512), o = 0;
      var St = n.partialBoundaries;
      for (E = 0; E < St.length; E++) {
        var xt = St[E];
        e: {
          T = n, j = s;
          var vn = xt.completedSegments;
          for (W = 0; W < vn.length; W++) if (!Ka(
            T,
            j,
            xt,
            vn[W]
          )) {
            W++, vn.splice(0, W);
            var Za = !1;
            break e;
          }
          vn.splice(0, W), Za = !0;
        }
        if (!Za) {
          n.destination = null, E++, St.splice(0, E);
          return;
        }
      }
      St.splice(0, E);
      var Yn = n.completedBoundaries;
      for (E = 0; E < Yn.length; E++) Xa(n, s, Yn[E]);
      Yn.splice(0, E);
    } finally {
      y(s), n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && s.close();
    }
  }
  function Qa(n, s) {
    try {
      var u = n.abortableTasks;
      u.forEach(function(h) {
        return qa(h, n, s);
      }), u.clear(), n.destination !== null && Gn(n, n.destination);
    } catch (h) {
      $r(n, h), mn(n, h);
    }
  }
  return Sn.renderToReadableStream = function(n, s) {
    return new Promise(function(u, h) {
      var T, E, j = new Promise(function(ge, Be) {
        E = ge, T = Be;
      }), W = ds(n, xe(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), Ge(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, E, function() {
        var ge = new ReadableStream({ type: "bytes", pull: function(Be) {
          if (W.status === 1) W.status = 2, N(Be, W.fatalError);
          else if (W.status !== 2 && W.destination === null) {
            W.destination = Be;
            try {
              Gn(W, Be);
            } catch (pt) {
              $r(W, pt), mn(W, pt);
            }
          }
        }, cancel: function() {
          Qa(W);
        } }, { highWaterMark: 0 });
        ge.allReady = j, u(ge);
      }, function(ge) {
        j.catch(function() {
        }), h(ge);
      }, T);
      if (s && s.signal) {
        var ie = s.signal, ye = function() {
          Qa(W, ie.reason), ie.removeEventListener("abort", ye);
        };
        ie.addEventListener("abort", ye);
      }
      Ga(W);
    });
  }, Sn.version = "18.3.1", Sn;
}
var Ar, fi;
Ar = Ks(), fi = Qs();
Ar.version;
Ar.renderToString;
Ar.renderToStaticMarkup;
Ar.renderToNodeStream;
Ar.renderToStaticNodeStream;
fi.renderToReadableStream;
const Zs = "staticMarkup";
function pi() {
  const e = ys().indexOf(Zs) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const en = ({ gaData: e, prefix: t = "", children: a }) => {
  const { isReact: o } = pi(), { onClick: c, ...f } = a.props;
  if (o)
    return et.cloneElement(a, {
      ...f,
      onClick: (b) => (Xs(e), c ? c(b) : !0)
    });
  let y = "";
  ["input", "header", "header-input"].includes(t) && (y = `-${t}`);
  const v = {
    [`data-ga${y}`]: e.text,
    [`data-ga${y}-name`]: e.name,
    [`data-ga${y}-event`]: e.event,
    [`data-ga${y}-action`]: e.action,
    [`data-ga${y}-type`]: e.type,
    [`data-ga${y}-region`]: e.region,
    [`data-ga${y}-section`]: e.section,
    [`data-ga${y}-component`]: e.component
  };
  return et.cloneElement(a, {
    ...f,
    onClick: c,
    ...v
  });
};
i.number, i.number, i.func, i.object;
i.arrayOf(oi).isRequired, i.number;
const Js = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, hi = ({
  label: e = "",
  cardTitle: t = "",
  gaData: a,
  ariaLabel: o,
  block: c,
  color: f = "gray",
  disabled: y,
  element: v = "button",
  href: b,
  icon: m,
  innerRef: N,
  onClick: x,
  size: L = "default",
  classes: X,
  target: R = "_self",
  ...k
}) => {
  const P = Cr("btn", {
    [`btn-${f}`]: !0,
    "btn-md": L === "small",
    "btn-sm": L === "xsmall",
    "btn-block": c,
    disabled: y
  });
  let U = v;
  return b && v === "button" && (U = "a"), /* @__PURE__ */ V.jsx(
    en,
    {
      gaData: {
        ...Js,
        section: t,
        // @deprecated - remove at some point
        ...a,
        text: e
      },
      children: /* @__PURE__ */ V.jsxs(
        U,
        {
          type: U === "button" && x ? "button" : void 0,
          ...k,
          className: Cr(X) || P,
          href: b,
          ref: N,
          onClick: x,
          "aria-label": o,
          target: U === "a" ? R : null,
          children: [
            m && /* @__PURE__ */ V.jsx("i", { className: `${m == null ? void 0 : m[0]} fa-${m == null ? void 0 : m[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
hi.propTypes = {
  /**
   * Button label
   */
  label: i.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: i.string,
  /**
   * Google Analytics event data
   */
  gaData: xa,
  /**
    ARIA label for accessibility
  */
  ariaLabel: i.string,
  /**
    Render button as a block-button?
  */
  block: i.bool,
  /**
    Button background color
  */
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: i.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: i.oneOfType([
    i.func,
    i.string,
    i.shape({ $$typeof: i.symbol, render: i.func }),
    i.arrayOf(
      i.oneOfType([
        i.func,
        i.string,
        i.shape({ $$typeof: i.symbol, render: i.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: i.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: i.arrayOf(i.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: i.oneOfType([
    i.object,
    i.func,
    i.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: i.func,
  /**
    Button size
  */
  size: i.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: i.arrayOf(i.string),
  /**
   Link target type
   */
  target: i.oneOf(["_blank", "_self", "_top", "_parent"])
};
var mi = { exports: {} }, Ie = {}, mo;
function el() {
  if (mo) return Ie;
  mo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), y = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), X = Symbol.for("react.client.reference");
  function R(k) {
    if (typeof k == "object" && k !== null) {
      var P = k.$$typeof;
      switch (P) {
        case e:
          switch (k = k.type, k) {
            case a:
            case c:
            case o:
            case b:
            case m:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case y:
                case v:
                case x:
                case N:
                  return k;
                case f:
                  return k;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return Ie.ContextConsumer = f, Ie.ContextProvider = y, Ie.Element = e, Ie.ForwardRef = v, Ie.Fragment = a, Ie.Lazy = x, Ie.Memo = N, Ie.Portal = t, Ie.Profiler = c, Ie.StrictMode = o, Ie.Suspense = b, Ie.SuspenseList = m, Ie.isContextConsumer = function(k) {
    return R(k) === f;
  }, Ie.isContextProvider = function(k) {
    return R(k) === y;
  }, Ie.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, Ie.isForwardRef = function(k) {
    return R(k) === v;
  }, Ie.isFragment = function(k) {
    return R(k) === a;
  }, Ie.isLazy = function(k) {
    return R(k) === x;
  }, Ie.isMemo = function(k) {
    return R(k) === N;
  }, Ie.isPortal = function(k) {
    return R(k) === t;
  }, Ie.isProfiler = function(k) {
    return R(k) === c;
  }, Ie.isStrictMode = function(k) {
    return R(k) === o;
  }, Ie.isSuspense = function(k) {
    return R(k) === b;
  }, Ie.isSuspenseList = function(k) {
    return R(k) === m;
  }, Ie.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === a || k === c || k === o || k === b || k === m || k === L || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === N || k.$$typeof === y || k.$$typeof === f || k.$$typeof === v || k.$$typeof === X || k.getModuleId !== void 0);
  }, Ie.typeOf = R, Ie;
}
mi.exports = el();
var gi = mi.exports;
function tl(e) {
  function t(I, O, F, M, p) {
    for (var te = 0, C = 0, re = 0, Q = 0, J, z, ne = 0, se = 0, Z, pe = Z = J = 0, ee = 0, ce = 0, We = 0, de = 0, Qe = F.length, Ve = Qe - 1, he, $ = "", ae = "", Xe = "", at = "", je; ee < Qe; ) {
      if (z = F.charCodeAt(ee), ee === Ve && C + Q + re + te !== 0 && (C !== 0 && (z = C === 47 ? 10 : 47), Q = re = te = 0, Qe++, Ve++), C + Q + re + te === 0) {
        if (ee === Ve && (0 < ce && ($ = $.replace(L, "")), 0 < $.trim().length)) {
          switch (z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              $ += F.charAt(ee);
          }
          z = 59;
        }
        switch (z) {
          case 123:
            for ($ = $.trim(), J = $.charCodeAt(0), Z = 1, de = ++ee; ee < Qe; ) {
              switch (z = F.charCodeAt(ee)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (z = F.charCodeAt(ee + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (pe = ee + 1; pe < Ve; ++pe)
                          switch (F.charCodeAt(pe)) {
                            case 47:
                              if (z === 42 && F.charCodeAt(pe - 1) === 42 && ee + 2 !== pe) {
                                ee = pe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (z === 47) {
                                ee = pe + 1;
                                break e;
                              }
                          }
                        ee = pe;
                      }
                  }
                  break;
                case 91:
                  z++;
                case 40:
                  z++;
                case 34:
                case 39:
                  for (; ee++ < Ve && F.charCodeAt(ee) !== z; )
                    ;
              }
              if (Z === 0) break;
              ee++;
            }
            switch (Z = F.substring(de, ee), J === 0 && (J = ($ = $.replace(x, "").trim()).charCodeAt(0)), J) {
              case 64:
                switch (0 < ce && ($ = $.replace(L, "")), z = $.charCodeAt(1), z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ce = O;
                    break;
                  default:
                    ce = Ke;
                }
                if (Z = t(O, ce, Z, z, p + 1), de = Z.length, 0 < xe && (ce = a(Ke, $, We), je = v(3, Z, ce, O, Te, fe, de, z, p, M), $ = ce.join(""), je !== void 0 && (de = (Z = je.trim()).length) === 0 && (z = 0, Z = "")), 0 < de) switch (z) {
                  case 115:
                    $ = $.replace(le, y);
                  case 100:
                  case 109:
                  case 45:
                    Z = $ + "{" + Z + "}";
                    break;
                  case 107:
                    $ = $.replace(B, "$1 $2"), Z = $ + "{" + Z + "}", Z = ke === 1 || ke === 2 && f("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                    break;
                  default:
                    Z = $ + Z, M === 112 && (Z = (ae += Z, ""));
                }
                else Z = "";
                break;
              default:
                Z = t(O, a(O, $, We), Z, M, p + 1);
            }
            Xe += Z, Z = We = ce = pe = J = 0, $ = "", z = F.charCodeAt(++ee);
            break;
          case 125:
          case 59:
            if ($ = (0 < ce ? $.replace(L, "") : $).trim(), 1 < (de = $.length)) switch (pe === 0 && (J = $.charCodeAt(0), J === 45 || 96 < J && 123 > J) && (de = ($ = $.replace(" ", ":")).length), 0 < xe && (je = v(1, $, O, I, Te, fe, ae.length, M, p, M)) !== void 0 && (de = ($ = je.trim()).length) === 0 && ($ = "\0\0"), J = $.charCodeAt(0), z = $.charCodeAt(1), J) {
              case 0:
                break;
              case 64:
                if (z === 105 || z === 99) {
                  at += $ + F.charAt(ee);
                  break;
                }
              default:
                $.charCodeAt(de - 1) !== 58 && (ae += c($, J, z, $.charCodeAt(2)));
            }
            We = ce = pe = J = 0, $ = "", z = F.charCodeAt(++ee);
        }
      }
      switch (z) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + J === 0 && M !== 107 && 0 < $.length && (ce = 1, $ += "\0"), 0 < xe * Ge && v(0, $, O, I, Te, fe, ae.length, M, p, M), fe = 1, Te++;
          break;
        case 59:
        case 125:
          if (C + Q + re + te === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, he = F.charAt(ee), z) {
            case 9:
            case 32:
              if (Q + te + C === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  he = "";
                  break;
                default:
                  z !== 32 && (he = " ");
              }
              break;
            case 0:
              he = "\\0";
              break;
            case 12:
              he = "\\f";
              break;
            case 11:
              he = "\\v";
              break;
            case 38:
              Q + C + te === 0 && (ce = We = 1, he = "\f" + he);
              break;
            case 108:
              if (Q + C + te + Re === 0 && 0 < pe) switch (ee - pe) {
                case 2:
                  ne === 112 && F.charCodeAt(ee - 3) === 58 && (Re = ne);
                case 8:
                  se === 111 && (Re = se);
              }
              break;
            case 58:
              Q + C + te === 0 && (pe = ee);
              break;
            case 44:
              C + re + Q + te === 0 && (ce = 1, he += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (Q = Q === z ? 0 : Q === 0 ? z : Q);
              break;
            case 91:
              Q + C + re === 0 && te++;
              break;
            case 93:
              Q + C + re === 0 && te--;
              break;
            case 41:
              Q + C + te === 0 && re--;
              break;
            case 40:
              if (Q + C + te === 0) {
                if (J === 0) switch (2 * ne + 3 * se) {
                  case 533:
                    break;
                  default:
                    J = 1;
                }
                re++;
              }
              break;
            case 64:
              C + re + Q + te + pe + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + te + re)) switch (C) {
                case 0:
                  switch (2 * z + 3 * F.charCodeAt(ee + 1)) {
                    case 235:
                      C = 47;
                      break;
                    case 220:
                      de = ee, C = 42;
                  }
                  break;
                case 42:
                  z === 47 && ne === 42 && de + 2 !== ee && (F.charCodeAt(de + 2) === 33 && (ae += F.substring(de, ee + 1)), he = "", C = 0);
              }
          }
          C === 0 && ($ += he);
      }
      se = ne, ne = z, ee++;
    }
    if (de = ae.length, 0 < de) {
      if (ce = O, 0 < xe && (je = v(2, ae, ce, I, Te, fe, de, M, p, M), je !== void 0 && (ae = je).length === 0)) return at + ae + Xe;
      if (ae = ce.join(",") + "{" + ae + "}", ke * Re !== 0) {
        switch (ke !== 2 || f(ae, 2) || (Re = 0), Re) {
          case 111:
            ae = ae.replace(Y, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(H, "::-webkit-input-$1") + ae.replace(H, "::-moz-$1") + ae.replace(H, ":-ms-input-$1") + ae;
        }
        Re = 0;
      }
    }
    return at + ae + Xe;
  }
  function a(I, O, F) {
    var M = O.trim().split(P);
    O = M;
    var p = M.length, te = I.length;
    switch (te) {
      case 0:
      case 1:
        var C = 0;
        for (I = te === 0 ? "" : I[0] + " "; C < p; ++C)
          O[C] = o(I, O[C], F).trim();
        break;
      default:
        var re = C = 0;
        for (O = []; C < p; ++C)
          for (var Q = 0; Q < te; ++Q)
            O[re++] = o(I[Q] + " ", M[C], F).trim();
    }
    return O;
  }
  function o(I, O, F) {
    var M = O.charCodeAt(0);
    switch (33 > M && (M = (O = O.trim()).charCodeAt(0)), M) {
      case 38:
        return O.replace(U, "$1" + I.trim());
      case 58:
        return I.trim() + O.replace(U, "$1" + I.trim());
      default:
        if (0 < 1 * F && 0 < O.indexOf("\f")) return O.replace(U, (I.charCodeAt(0) === 58 ? "" : "$1") + I.trim());
    }
    return I + O;
  }
  function c(I, O, F, M) {
    var p = I + ";", te = 2 * O + 3 * F + 4 * M;
    if (te === 944) {
      I = p.indexOf(":", 9) + 1;
      var C = p.substring(I, p.length - 1).trim();
      return C = p.substring(0, I).trim() + C + ";", ke === 1 || ke === 2 && f(C, 1) ? "-webkit-" + C + C : C;
    }
    if (ke === 0 || ke === 2 && !f(p, 1)) return p;
    switch (te) {
      case 1015:
        return p.charCodeAt(10) === 97 ? "-webkit-" + p + p : p;
      case 951:
        return p.charCodeAt(3) === 116 ? "-webkit-" + p + p : p;
      case 963:
        return p.charCodeAt(5) === 110 ? "-webkit-" + p + p : p;
      case 1009:
        if (p.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + p + p;
      case 978:
        return "-webkit-" + p + "-moz-" + p + p;
      case 1019:
      case 983:
        return "-webkit-" + p + "-moz-" + p + "-ms-" + p + p;
      case 883:
        if (p.charCodeAt(8) === 45) return "-webkit-" + p + p;
        if (0 < p.indexOf("image-set(", 11)) return p.replace(Se, "$1-webkit-$2") + p;
        break;
      case 932:
        if (p.charCodeAt(4) === 45) switch (p.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + p.replace("-grow", "") + "-webkit-" + p + "-ms-" + p.replace("grow", "positive") + p;
          case 115:
            return "-webkit-" + p + "-ms-" + p.replace("shrink", "negative") + p;
          case 98:
            return "-webkit-" + p + "-ms-" + p.replace("basis", "preferred-size") + p;
        }
        return "-webkit-" + p + "-ms-" + p + p;
      case 964:
        return "-webkit-" + p + "-ms-flex-" + p + p;
      case 1023:
        if (p.charCodeAt(8) !== 99) break;
        return C = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + p + "-ms-flex-pack" + C + p;
      case 1005:
        return R.test(p) ? p.replace(X, ":-webkit-") + p.replace(X, ":-moz-") + p : p;
      case 1e3:
        switch (C = p.substring(13).trim(), O = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(O)) {
          case 226:
            C = p.replace(S, "tb");
            break;
          case 232:
            C = p.replace(S, "tb-rl");
            break;
          case 220:
            C = p.replace(S, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + C + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (O = (p = I).length - 10, C = (p.charCodeAt(O) === 33 ? p.substring(0, O) : p).substring(I.indexOf(":", 7) + 1).trim(), te = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8)) break;
          case 115:
            p = p.replace(C, "-webkit-" + C) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(C, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + p.replace(C, "-webkit-" + C) + ";" + p.replace(C, "-ms-" + C + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45) switch (p.charCodeAt(6)) {
          case 105:
            return C = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + C + "-ms-flex-" + C + p;
          case 115:
            return "-webkit-" + p + "-ms-flex-item-" + p.replace(Ee, "") + p;
          default:
            return "-webkit-" + p + "-ms-flex-line-pack" + p.replace("align-content", "").replace(Ee, "") + p;
        }
        break;
      case 973:
      case 989:
        if (p.charCodeAt(3) !== 45 || p.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (ze.test(I) === !0) return (C = I.substring(I.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(I.replace("stretch", "fill-available"), O, F, M).replace(":fill-available", ":stretch") : p.replace(C, "-webkit-" + C) + p.replace(C, "-moz-" + C.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, F + M === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + p;
    }
    return p;
  }
  function f(I, O) {
    var F = I.indexOf(O === 1 ? ":" : "{"), M = I.substring(0, O !== 3 ? F : 10);
    return F = I.substring(F + 1, I.length - 1), Me(O !== 2 ? M : M.replace(Ne, "$1"), F, O);
  }
  function y(I, O) {
    var F = c(O, O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2));
    return F !== O + ";" ? F.replace(be, " or ($1)").substring(4) : "(" + O + ")";
  }
  function v(I, O, F, M, p, te, C, re, Q, J) {
    for (var z = 0, ne = O, se; z < xe; ++z)
      switch (se = Pe[z].call(N, I, ne, F, M, p, te, C, re, Q, J)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = se;
      }
    if (ne !== O) return ne;
  }
  function b(I) {
    switch (I) {
      case void 0:
      case null:
        xe = Pe.length = 0;
        break;
      default:
        if (typeof I == "function") Pe[xe++] = I;
        else if (typeof I == "object") for (var O = 0, F = I.length; O < F; ++O)
          b(I[O]);
        else Ge = !!I | 0;
    }
    return b;
  }
  function m(I) {
    return I = I.prefix, I !== void 0 && (Me = null, I ? typeof I != "function" ? ke = 1 : (ke = 2, Me = I) : ke = 0), m;
  }
  function N(I, O) {
    var F = I;
    if (33 > F.charCodeAt(0) && (F = F.trim()), ve = F, F = [ve], 0 < xe) {
      var M = v(-1, O, F, F, Te, fe, 0, 0, 0, 0);
      M !== void 0 && typeof M == "string" && (O = M);
    }
    var p = t(Ke, F, O, 0, 0);
    return 0 < xe && (M = v(-2, p, F, F, Te, fe, p.length, 0, 0, 0), M !== void 0 && (p = M)), ve = "", Re = 0, fe = Te = 1, p;
  }
  var x = /^\0+/g, L = /[\0\r\f]/g, X = /: */g, R = /zoo|gra/, k = /([,: ])(transform)/g, P = /,\r+?/g, U = /([\t\r\n ])*\f?&/g, B = /@(k\w+)\s*(\S*)\s*/, H = /::(place)/g, Y = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, le = /\(\s*(.*)\s*\)/g, be = /([\s\S]*?);/g, Ee = /-self|flex-/g, Ne = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ze = /stretch|:\s*\w+\-(?:conte|avail)/, Se = /([^-])(image-set\()/, fe = 1, Te = 1, Re = 0, ke = 1, Ke = [], Pe = [], xe = 0, Me = null, Ge = 0, ve = "";
  return N.use = b, N.set = m, e !== void 0 && m(e), N;
}
var rl = {
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
function nl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(a) {
    return t[a] === void 0 && (t[a] = e(a)), t[a];
  };
}
var al = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, go = /* @__PURE__ */ nl(
  function(e) {
    return al.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), yi = { exports: {} }, Ae = {}, yo;
function ol() {
  if (yo) return Ae;
  yo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, f = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, N = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, L = e ? Symbol.for("react.suspense_list") : 60120, X = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, U = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
  function H(S) {
    if (typeof S == "object" && S !== null) {
      var le = S.$$typeof;
      switch (le) {
        case t:
          switch (S = S.type, S) {
            case b:
            case m:
            case o:
            case f:
            case c:
            case x:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case v:
                case N:
                case R:
                case X:
                case y:
                  return S;
                default:
                  return le;
              }
          }
        case a:
          return le;
      }
    }
  }
  function Y(S) {
    return H(S) === m;
  }
  return Ae.AsyncMode = b, Ae.ConcurrentMode = m, Ae.ContextConsumer = v, Ae.ContextProvider = y, Ae.Element = t, Ae.ForwardRef = N, Ae.Fragment = o, Ae.Lazy = R, Ae.Memo = X, Ae.Portal = a, Ae.Profiler = f, Ae.StrictMode = c, Ae.Suspense = x, Ae.isAsyncMode = function(S) {
    return Y(S) || H(S) === b;
  }, Ae.isConcurrentMode = Y, Ae.isContextConsumer = function(S) {
    return H(S) === v;
  }, Ae.isContextProvider = function(S) {
    return H(S) === y;
  }, Ae.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Ae.isForwardRef = function(S) {
    return H(S) === N;
  }, Ae.isFragment = function(S) {
    return H(S) === o;
  }, Ae.isLazy = function(S) {
    return H(S) === R;
  }, Ae.isMemo = function(S) {
    return H(S) === X;
  }, Ae.isPortal = function(S) {
    return H(S) === a;
  }, Ae.isProfiler = function(S) {
    return H(S) === f;
  }, Ae.isStrictMode = function(S) {
    return H(S) === c;
  }, Ae.isSuspense = function(S) {
    return H(S) === x;
  }, Ae.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === o || S === m || S === f || S === c || S === x || S === L || typeof S == "object" && S !== null && (S.$$typeof === R || S.$$typeof === X || S.$$typeof === y || S.$$typeof === v || S.$$typeof === N || S.$$typeof === P || S.$$typeof === U || S.$$typeof === B || S.$$typeof === k);
  }, Ae.typeOf = H, Ae;
}
yi.exports = ol();
var il = yi.exports, Ca = il, sl = {
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
}, ll = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, cl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, bi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, _a = {};
_a[Ca.ForwardRef] = cl;
_a[Ca.Memo] = bi;
function bo(e) {
  return Ca.isMemo(e) ? bi : _a[e.$$typeof] || sl;
}
var ul = Object.defineProperty, dl = Object.getOwnPropertyNames, vo = Object.getOwnPropertySymbols, fl = Object.getOwnPropertyDescriptor, pl = Object.getPrototypeOf, wo = Object.prototype;
function vi(e, t, a) {
  if (typeof t != "string") {
    if (wo) {
      var o = pl(t);
      o && o !== wo && vi(e, o, a);
    }
    var c = dl(t);
    vo && (c = c.concat(vo(t)));
    for (var f = bo(e), y = bo(t), v = 0; v < c.length; ++v) {
      var b = c[v];
      if (!ll[b] && !(a && a[b]) && !(y && y[b]) && !(f && f[b])) {
        var m = fl(t, b);
        try {
          ul(e, b, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var hl = vi;
const ml = /* @__PURE__ */ Sa(hl);
var rt = { env: { NODE_ENV: "production" } };
function Dt() {
  return (Dt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    }
    return e;
  }).apply(this, arguments);
}
var ko = function(e, t) {
  for (var a = [e[0]], o = 0, c = t.length; o < c; o += 1) a.push(t[o], e[o + 1]);
  return a;
}, da = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !gi.typeOf(e);
}, On = Object.freeze([]), Qt = Object.freeze({});
function Zr(e) {
  return typeof e == "function";
}
function So(e) {
  return e.displayName || e.name || "Component";
}
function Ea(e) {
  return e && typeof e.styledComponentId == "string";
}
var _r = typeof rt < "u" && rt.env !== void 0 && (rt.env.REACT_APP_SC_ATTR || rt.env.SC_ATTR) || "data-styled", Ta = typeof window < "u" && "HTMLElement" in window, gl = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof rt < "u" && rt.env !== void 0 && (rt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && rt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? rt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && rt.env.REACT_APP_SC_DISABLE_SPEEDY : rt.env.SC_DISABLE_SPEEDY !== void 0 && rt.env.SC_DISABLE_SPEEDY !== "" ? rt.env.SC_DISABLE_SPEEDY !== "false" && rt.env.SC_DISABLE_SPEEDY : rt.env.NODE_ENV !== "production"));
function tn(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (a.length > 0 ? " Args: " + a.join(", ") : ""));
}
var yl = function() {
  function e(a) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = a;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(a) {
    for (var o = 0, c = 0; c < a; c++) o += this.groupSizes[c];
    return o;
  }, t.insertRules = function(a, o) {
    if (a >= this.groupSizes.length) {
      for (var c = this.groupSizes, f = c.length, y = f; a >= y; ) (y <<= 1) < 0 && tn(16, "" + a);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(c), this.length = y;
      for (var v = f; v < y; v++) this.groupSizes[v] = 0;
    }
    for (var b = this.indexOfGroup(a + 1), m = 0, N = o.length; m < N; m++) this.tag.insertRule(b, o[m]) && (this.groupSizes[a]++, b++);
  }, t.clearGroup = function(a) {
    if (a < this.length) {
      var o = this.groupSizes[a], c = this.indexOfGroup(a), f = c + o;
      this.groupSizes[a] = 0;
      for (var y = c; y < f; y++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(a) {
    var o = "";
    if (a >= this.length || this.groupSizes[a] === 0) return o;
    for (var c = this.groupSizes[a], f = this.indexOfGroup(a), y = f + c, v = f; v < y; v++) o += this.tag.getRule(v) + `/*!sc*/
`;
    return o;
  }, e;
}(), Rn = /* @__PURE__ */ new Map(), Nn = /* @__PURE__ */ new Map(), Yr = 1, xn = function(e) {
  if (Rn.has(e)) return Rn.get(e);
  for (; Nn.has(Yr); ) Yr++;
  var t = Yr++;
  return Rn.set(e, t), Nn.set(t, e), t;
}, bl = function(e) {
  return Nn.get(e);
}, vl = function(e, t) {
  t >= Yr && (Yr = t + 1), Rn.set(e, t), Nn.set(t, e);
}, wl = "style[" + _r + '][data-styled-version="5.3.11"]', kl = new RegExp("^" + _r + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Sl = function(e, t, a) {
  for (var o, c = a.split(","), f = 0, y = c.length; f < y; f++) (o = c[f]) && e.registerName(t, o);
}, xl = function(e, t) {
  for (var a = (t.textContent || "").split(`/*!sc*/
`), o = [], c = 0, f = a.length; c < f; c++) {
    var y = a[c].trim();
    if (y) {
      var v = y.match(kl);
      if (v) {
        var b = 0 | parseInt(v[1], 10), m = v[2];
        b !== 0 && (vl(m, b), Sl(e, m, v[3]), e.getTag().insertRules(b, o)), o.length = 0;
      } else o.push(y);
    }
  }
}, Cl = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, wi = function(e) {
  var t = document.head, a = e || t, o = document.createElement("style"), c = function(v) {
    for (var b = v.childNodes, m = b.length; m >= 0; m--) {
      var N = b[m];
      if (N && N.nodeType === 1 && N.hasAttribute(_r)) return N;
    }
  }(a), f = c !== void 0 ? c.nextSibling : null;
  o.setAttribute(_r, "active"), o.setAttribute("data-styled-version", "5.3.11");
  var y = Cl();
  return y && o.setAttribute("nonce", y), a.insertBefore(o, f), o;
}, _l = function() {
  function e(a) {
    var o = this.element = wi(a);
    o.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var f = document.styleSheets, y = 0, v = f.length; y < v; y++) {
        var b = f[y];
        if (b.ownerNode === c) return b;
      }
      tn(17);
    }(o), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(a, o) {
    try {
      return this.sheet.insertRule(o, a), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(a) {
    this.sheet.deleteRule(a), this.length--;
  }, t.getRule = function(a) {
    var o = this.sheet.cssRules[a];
    return o !== void 0 && typeof o.cssText == "string" ? o.cssText : "";
  }, e;
}(), El = function() {
  function e(a) {
    var o = this.element = wi(a);
    this.nodes = o.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(a, o) {
    if (a <= this.length && a >= 0) {
      var c = document.createTextNode(o), f = this.nodes[a];
      return this.element.insertBefore(c, f || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(a) {
    this.element.removeChild(this.nodes[a]), this.length--;
  }, t.getRule = function(a) {
    return a < this.length ? this.nodes[a].textContent : "";
  }, e;
}(), Tl = function() {
  function e(a) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(a, o) {
    return a <= this.length && (this.rules.splice(a, 0, o), this.length++, !0);
  }, t.deleteRule = function(a) {
    this.rules.splice(a, 1), this.length--;
  }, t.getRule = function(a) {
    return a < this.length ? this.rules[a] : "";
  }, e;
}(), xo = Ta, Rl = { isServer: !Ta, useCSSOMInjection: !gl }, ki = function() {
  function e(a, o, c) {
    a === void 0 && (a = Qt), o === void 0 && (o = {}), this.options = Dt({}, Rl, {}, a), this.gs = o, this.names = new Map(c), this.server = !!a.isServer, !this.server && Ta && xo && (xo = !1, function(f) {
      for (var y = document.querySelectorAll(wl), v = 0, b = y.length; v < b; v++) {
        var m = y[v];
        m && m.getAttribute(_r) !== "active" && (xl(f, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(a) {
    return xn(a);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(a, o) {
    return o === void 0 && (o = !0), new e(Dt({}, this.options, {}, a), this.gs, o && this.names || void 0);
  }, t.allocateGSInstance = function(a) {
    return this.gs[a] = (this.gs[a] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (o = this.options).isServer, f = o.useCSSOMInjection, y = o.target, a = c ? new Tl(y) : f ? new _l(y) : new El(y), new yl(a)));
    var a, o, c, f, y;
  }, t.hasNameForId = function(a, o) {
    return this.names.has(a) && this.names.get(a).has(o);
  }, t.registerName = function(a, o) {
    if (xn(a), this.names.has(a)) this.names.get(a).add(o);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(o), this.names.set(a, c);
    }
  }, t.insertRules = function(a, o, c) {
    this.registerName(a, o), this.getTag().insertRules(xn(a), c);
  }, t.clearNames = function(a) {
    this.names.has(a) && this.names.get(a).clear();
  }, t.clearRules = function(a) {
    this.getTag().clearGroup(xn(a)), this.clearNames(a);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(a) {
      for (var o = a.getTag(), c = o.length, f = "", y = 0; y < c; y++) {
        var v = bl(y);
        if (v !== void 0) {
          var b = a.names.get(v), m = o.getGroup(y);
          if (b && m && b.size) {
            var N = _r + ".g" + y + '[id="' + v + '"]', x = "";
            b !== void 0 && b.forEach(function(L) {
              L.length > 0 && (x += L + ",");
            }), f += "" + m + N + '{content:"' + x + `"}/*!sc*/
`;
          }
        }
      }
      return f;
    }(this);
  }, e;
}(), Al = /(a)(d)/gi, Co = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function fa(e) {
  var t, a = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) a = Co(t % 52) + a;
  return (Co(t % 52) + a).replace(Al, "$1-$2");
}
var Sr = function(e, t) {
  for (var a = t.length; a; ) e = 33 * e ^ t.charCodeAt(--a);
  return e;
}, Si = function(e) {
  return Sr(5381, e);
};
function Ol(e) {
  for (var t = 0; t < e.length; t += 1) {
    var a = e[t];
    if (Zr(a) && !Ea(a)) return !1;
  }
  return !0;
}
var Nl = Si("5.3.11"), Pl = function() {
  function e(t, a, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (o === void 0 || o.isStatic) && Ol(t), this.componentId = a, this.baseHash = Sr(Nl, a), this.baseStyle = o, ki.registerId(a);
  }
  return e.prototype.generateAndInjectStyles = function(t, a, o) {
    var c = this.componentId, f = [];
    if (this.baseStyle && f.push(this.baseStyle.generateAndInjectStyles(t, a, o)), this.isStatic && !o.hash) if (this.staticRulesId && a.hasNameForId(c, this.staticRulesId)) f.push(this.staticRulesId);
    else {
      var y = Er(this.rules, t, a, o).join(""), v = fa(Sr(this.baseHash, y) >>> 0);
      if (!a.hasNameForId(c, v)) {
        var b = o(y, "." + v, void 0, c);
        a.insertRules(c, v, b);
      }
      f.push(v), this.staticRulesId = v;
    }
    else {
      for (var m = this.rules.length, N = Sr(this.baseHash, o.hash), x = "", L = 0; L < m; L++) {
        var X = this.rules[L];
        if (typeof X == "string") x += X;
        else if (X) {
          var R = Er(X, t, a, o), k = Array.isArray(R) ? R.join("") : R;
          N = Sr(N, k + L), x += k;
        }
      }
      if (x) {
        var P = fa(N >>> 0);
        if (!a.hasNameForId(c, P)) {
          var U = o(x, "." + P, void 0, c);
          a.insertRules(c, P, U);
        }
        f.push(P);
      }
    }
    return f.join(" ");
  }, e;
}(), Fl = /^\s*\/\/.*$/gm, Il = [":", "[", ".", "#"];
function Dl(e) {
  var t, a, o, c, f = Qt, y = f.options, v = y === void 0 ? Qt : y, b = f.plugins, m = b === void 0 ? On : b, N = new tl(v), x = [], L = /* @__PURE__ */ function(k) {
    function P(U) {
      if (U) try {
        k(U + "}");
      } catch {
      }
    }
    return function(U, B, H, Y, S, le, be, Ee, Ne, ze) {
      switch (U) {
        case 1:
          if (Ne === 0 && B.charCodeAt(0) === 64) return k(B + ";"), "";
          break;
        case 2:
          if (Ee === 0) return B + "/*|*/";
          break;
        case 3:
          switch (Ee) {
            case 102:
            case 112:
              return k(H[0] + B), "";
            default:
              return B + (ze === 0 ? "/*|*/" : "");
          }
        case -2:
          B.split("/*|*/}").forEach(P);
      }
    };
  }(function(k) {
    x.push(k);
  }), X = function(k, P, U) {
    return P === 0 && Il.indexOf(U[a.length]) !== -1 || U.match(c) ? k : "." + t;
  };
  function R(k, P, U, B) {
    B === void 0 && (B = "&");
    var H = k.replace(Fl, ""), Y = P && U ? U + " " + P + " { " + H + " }" : H;
    return t = B, a = P, o = new RegExp("\\" + a + "\\b", "g"), c = new RegExp("(\\" + a + "\\b){2,}"), N(U || !P ? "" : P, Y);
  }
  return N.use([].concat(m, [function(k, P, U) {
    k === 2 && U.length && U[0].lastIndexOf(a) > 0 && (U[0] = U[0].replace(o, X));
  }, L, function(k) {
    if (k === -2) {
      var P = x;
      return x = [], P;
    }
  }])), R.hash = m.length ? m.reduce(function(k, P) {
    return P.name || tn(15), Sr(k, P.name);
  }, 5381).toString() : "", R;
}
var xi = et.createContext();
xi.Consumer;
var Ci = et.createContext(), jl = (Ci.Consumer, new ki()), pa = Dl();
function Ml() {
  return Jt(xi) || jl;
}
function Ll() {
  return Jt(Ci) || pa;
}
var $l = function() {
  function e(t, a) {
    var o = this;
    this.inject = function(c, f) {
      f === void 0 && (f = pa);
      var y = o.name + f.hash;
      c.hasNameForId(o.id, y) || c.insertRules(o.id, y, f(o.rules, y, "@keyframes"));
    }, this.toString = function() {
      return tn(12, String(o.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = a;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = pa), this.name + t.hash;
  }, e;
}(), zl = /([A-Z])/, Ul = /([A-Z])/g, Bl = /^ms-/, Wl = function(e) {
  return "-" + e.toLowerCase();
};
function _o(e) {
  return zl.test(e) ? e.replace(Ul, Wl).replace(Bl, "-ms-") : e;
}
var Eo = function(e) {
  return e == null || e === !1 || e === "";
};
function Er(e, t, a, o) {
  if (Array.isArray(e)) {
    for (var c, f = [], y = 0, v = e.length; y < v; y += 1) (c = Er(e[y], t, a, o)) !== "" && (Array.isArray(c) ? f.push.apply(f, c) : f.push(c));
    return f;
  }
  if (Eo(e)) return "";
  if (Ea(e)) return "." + e.styledComponentId;
  if (Zr(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return Er(b, t, a, o);
  }
  var m;
  return e instanceof $l ? a ? (e.inject(a, o), e.getName(o)) : e : da(e) ? function N(x, L) {
    var X, R, k = [];
    for (var P in x) x.hasOwnProperty(P) && !Eo(x[P]) && (Array.isArray(x[P]) && x[P].isCss || Zr(x[P]) ? k.push(_o(P) + ":", x[P], ";") : da(x[P]) ? k.push.apply(k, N(x[P], P)) : k.push(_o(P) + ": " + (X = P, (R = x[P]) == null || typeof R == "boolean" || R === "" ? "" : typeof R != "number" || R === 0 || X in rl || X.startsWith("--") ? String(R).trim() : R + "px") + ";"));
    return L ? [L + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var To = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Vl(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
  return Zr(e) || da(e) ? To(Er(ko(On, [e].concat(a)))) : a.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : To(Er(ko(e, a)));
}
var ql = function(e, t, a) {
  return a === void 0 && (a = Qt), e.theme !== a.theme && e.theme || t || a.theme;
}, Hl = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Gl = /(^-|-$)/g;
function na(e) {
  return e.replace(Hl, "-").replace(Gl, "");
}
var Yl = function(e) {
  return fa(Si(e) >>> 0);
};
function Cn(e) {
  return typeof e == "string" && rt.env.NODE_ENV === "production";
}
var ha = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Xl = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Kl(e, t, a) {
  var o = e[a];
  ha(t) && ha(o) ? _i(o, t) : e[a] = t;
}
function _i(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
  for (var c = 0, f = a; c < f.length; c++) {
    var y = f[c];
    if (ha(y)) for (var v in y) Xl(v) && Kl(e, y[v], v);
  }
  return e;
}
var Ei = et.createContext();
Ei.Consumer;
var aa = {};
function Ti(e, t, a) {
  var o = Ea(e), c = !Cn(e), f = t.attrs, y = f === void 0 ? On : f, v = t.componentId, b = v === void 0 ? function(B, H) {
    var Y = typeof B != "string" ? "sc" : na(B);
    aa[Y] = (aa[Y] || 0) + 1;
    var S = Y + "-" + Yl("5.3.11" + Y + aa[Y]);
    return H ? H + "-" + S : S;
  }(t.displayName, t.parentComponentId) : v, m = t.displayName, N = m === void 0 ? function(B) {
    return Cn(B) ? "styled." + B : "Styled(" + So(B) + ")";
  }(e) : m, x = t.displayName && t.componentId ? na(t.displayName) + "-" + t.componentId : t.componentId || b, L = o && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, X = t.shouldForwardProp;
  o && e.shouldForwardProp && (X = t.shouldForwardProp ? function(B, H, Y) {
    return e.shouldForwardProp(B, H, Y) && t.shouldForwardProp(B, H, Y);
  } : e.shouldForwardProp);
  var R, k = new Pl(a, x, o ? e.componentStyle : void 0), P = k.isStatic && y.length === 0, U = function(B, H) {
    return function(Y, S, le, be) {
      var Ee = Y.attrs, Ne = Y.componentStyle, ze = Y.defaultProps, Se = Y.foldedComponentIds, fe = Y.shouldForwardProp, Te = Y.styledComponentId, Re = Y.target, ke = function(M, p, te) {
        M === void 0 && (M = Qt);
        var C = Dt({}, p, { theme: M }), re = {};
        return te.forEach(function(Q) {
          var J, z, ne, se = Q;
          for (J in Zr(se) && (se = se(C)), se) C[J] = re[J] = J === "className" ? (z = re[J], ne = se[J], z && ne ? z + " " + ne : z || ne) : se[J];
        }), [C, re];
      }(ql(S, Jt(Ei), ze) || Qt, S, Ee), Ke = ke[0], Pe = ke[1], xe = function(M, p, te, C) {
        var re = Ml(), Q = Ll(), J = p ? M.generateAndInjectStyles(Qt, re, Q) : M.generateAndInjectStyles(te, re, Q);
        return J;
      }(Ne, be, Ke), Me = le, Ge = Pe.$as || S.$as || Pe.as || S.as || Re, ve = Cn(Ge), I = Pe !== S ? Dt({}, S, {}, Pe) : S, O = {};
      for (var F in I) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? O.as = I[F] : (fe ? fe(F, go, Ge) : !ve || go(F)) && (O[F] = I[F]));
      return S.style && Pe.style !== S.style && (O.style = Dt({}, S.style, {}, Pe.style)), O.className = Array.prototype.concat(Se, Te, xe !== Te ? xe : null, S.className, Pe.className).filter(Boolean).join(" "), O.ref = Me, Zo(Ge, O);
    }(R, B, H, P);
  };
  return U.displayName = N, (R = et.forwardRef(U)).attrs = L, R.componentStyle = k, R.displayName = N, R.shouldForwardProp = X, R.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : On, R.styledComponentId = x, R.target = o ? e.target : e, R.withComponent = function(B) {
    var H = t.componentId, Y = function(le, be) {
      if (le == null) return {};
      var Ee, Ne, ze = {}, Se = Object.keys(le);
      for (Ne = 0; Ne < Se.length; Ne++) Ee = Se[Ne], be.indexOf(Ee) >= 0 || (ze[Ee] = le[Ee]);
      return ze;
    }(t, ["componentId"]), S = H && H + "-" + (Cn(B) ? B : na(So(B)));
    return Ti(B, Dt({}, Y, { attrs: L, componentId: S }), a);
  }, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(B) {
    this._foldedDefaultProps = o ? _i({}, e.defaultProps, B) : B;
  } }), Object.defineProperty(R, "toString", { value: function() {
    return "." + R.styledComponentId;
  } }), c && ml(R, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), R;
}
var _t = function(e) {
  return function t(a, o, c) {
    if (c === void 0 && (c = Qt), !gi.isValidElementType(o)) return tn(1, String(o));
    var f = function() {
      return a(o, c, Vl.apply(void 0, arguments));
    };
    return f.withConfig = function(y) {
      return t(a, o, Dt({}, c, {}, y));
    }, f.attrs = function(y) {
      return t(a, o, Dt({}, c, { attrs: Array.prototype.concat(c.attrs, y).filter(Boolean) }));
    }, f;
  }(Ti, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  _t[e] = _t(e);
});
_t.div`
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
i.arrayOf(
  i.shape({
    text: i.string.isRequired,
    targetIdName: i.string.isRequired,
    icon: i.arrayOf(i.string)
  })
).isRequired, i.string.isRequired, i.bool;
function Ln(e) {
  var t = Object.entries(e).filter(function(a) {
    var o = a[1];
    return o != null;
  }).map(function(a) {
    var o = a[0], c = a[1];
    return "".concat(encodeURIComponent(o), "=").concat(encodeURIComponent(String(c)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Ql = /* @__PURE__ */ function() {
  var e = function(t, a) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, c) {
      o.__proto__ = c;
    } || function(o, c) {
      for (var f in c) Object.prototype.hasOwnProperty.call(c, f) && (o[f] = c[f]);
    }, e(t, a);
  };
  return function(t, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    e(t, a);
    function o() {
      this.constructor = t;
    }
    t.prototype = a === null ? Object.create(a) : (o.prototype = a.prototype, new o());
  };
}(), fr = function() {
  return fr = Object.assign || function(e) {
    for (var t, a = 1, o = arguments.length; a < o; a++) {
      t = arguments[a];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, fr.apply(this, arguments);
}, Zl = function(e, t, a, o) {
  function c(f) {
    return f instanceof a ? f : new a(function(y) {
      y(f);
    });
  }
  return new (a || (a = Promise))(function(f, y) {
    function v(N) {
      try {
        m(o.next(N));
      } catch (x) {
        y(x);
      }
    }
    function b(N) {
      try {
        m(o.throw(N));
      } catch (x) {
        y(x);
      }
    }
    function m(N) {
      N.done ? f(N.value) : c(N.value).then(v, b);
    }
    m((o = o.apply(e, [])).next());
  });
}, Jl = function(e, t) {
  var a = { label: 0, sent: function() {
    if (f[0] & 1) throw f[1];
    return f[1];
  }, trys: [], ops: [] }, o, c, f, y;
  return y = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
    return this;
  }), y;
  function v(m) {
    return function(N) {
      return b([m, N]);
    };
  }
  function b(m) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; a; ) try {
      if (o = 1, c && (f = m[0] & 2 ? c.return : m[0] ? c.throw || ((f = c.return) && f.call(c), 0) : c.next) && !(f = f.call(c, m[1])).done) return f;
      switch (c = 0, f && (m = [m[0] & 2, f.value]), m[0]) {
        case 0:
        case 1:
          f = m;
          break;
        case 4:
          return a.label++, { value: m[1], done: !1 };
        case 5:
          a.label++, c = m[1], m = [0];
          continue;
        case 7:
          m = a.ops.pop(), a.trys.pop();
          continue;
        default:
          if (f = a.trys, !(f = f.length > 0 && f[f.length - 1]) && (m[0] === 6 || m[0] === 2)) {
            a = 0;
            continue;
          }
          if (m[0] === 3 && (!f || m[1] > f[0] && m[1] < f[3])) {
            a.label = m[1];
            break;
          }
          if (m[0] === 6 && a.label < f[1]) {
            a.label = f[1], f = m;
            break;
          }
          if (f && a.label < f[2]) {
            a.label = f[2], a.ops.push(m);
            break;
          }
          f[2] && a.ops.pop(), a.trys.pop();
          continue;
      }
      m = t.call(e, a);
    } catch (N) {
      m = [6, N], c = 0;
    } finally {
      o = f = 0;
    }
    if (m[0] & 5) throw m[1];
    return { value: m[0] ? m[1] : void 0, done: !0 };
  }
}, Ri = function(e, t) {
  var a = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, o = Object.getOwnPropertySymbols(e); c < o.length; c++)
      t.indexOf(o[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[c]) && (a[o[c]] = e[o[c]]);
  return a;
}, ec = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, tc = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, rc = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function nc(e, t, a) {
  var o = t.height, c = t.width, f = Ri(t, ["height", "width"]), y = fr({ height: o, width: c, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, f), v = window.open(e, "", Object.keys(y).map(function(m) {
    return "".concat(m, "=").concat(y[m]);
  }).join(", "));
  if (a)
    var b = window.setInterval(function() {
      try {
        (v === null || v.closed) && (window.clearInterval(b), a(v));
      } catch (m) {
        console.error(m);
      }
    }, 1e3);
  return v;
}
var ac = (
  /** @class */
  function(e) {
    Ql(t, e);
    function t() {
      var a = e !== null && e.apply(this, arguments) || this;
      return a.openShareDialog = function(o) {
        var c = a.props, f = c.onShareWindowClose, y = c.windowHeight, v = y === void 0 ? 400 : y, b = c.windowPosition, m = b === void 0 ? "windowCenter" : b, N = c.windowWidth, x = N === void 0 ? 550 : N, L = fr({ height: v, width: x }, m === "windowCenter" ? tc(x, v) : rc(x, v));
        nc(o, L, f);
      }, a.handleClick = function(o) {
        return Zl(a, void 0, void 0, function() {
          var c, f, y, v, b, m, N, x, L, X;
          return Jl(this, function(R) {
            switch (R.label) {
              case 0:
                return c = this.props, f = c.beforeOnClick, y = c.disabled, v = c.networkLink, b = c.onClick, m = c.url, N = c.openShareDialogOnClick, x = c.opts, L = v(m, x), y ? [
                  2
                  /*return*/
                ] : (o.preventDefault(), f ? (X = f(), ec(X) ? [4, X] : [3, 2]) : [3, 2]);
              case 1:
                R.sent(), R.label = 2;
              case 2:
                return N && this.openShareDialog(L), b && b(o, L), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, a;
    }
    return t.prototype.render = function() {
      var a = this.props;
      a.beforeOnClick;
      var o = a.children, c = a.className, f = a.disabled, y = a.disabledStyle, v = a.forwardedRef;
      a.networkLink;
      var b = a.networkName;
      a.onShareWindowClose, a.openShareDialogOnClick, a.opts;
      var m = a.resetButtonStyle, N = a.style;
      a.url, a.windowHeight, a.windowPosition, a.windowWidth;
      var x = Ri(a, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), L = Cr("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!f,
        disabled: !!f
      }, c), X = fr(fr(m ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, N), f && y);
      return et.createElement("button", fr({}, x, { "aria-label": x["aria-label"] || b, className: L, onClick: this.handleClick, ref: v, style: X }), o);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(ps)
), Pn = function() {
  return Pn = Object.assign || function(e) {
    for (var t, a = 1, o = arguments.length; a < o; a++) {
      t = arguments[a];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Pn.apply(this, arguments);
};
function $n(e, t, a, o) {
  function c(f, y) {
    var v = a(f), b = Pn({}, f), m = Object.keys(v);
    return m.forEach(function(N) {
      delete b[N];
    }), et.createElement(ac, Pn({}, o, b, { forwardedRef: y, networkName: e, networkLink: t, opts: a(f) }));
  }
  return c.displayName = "ShareButton-".concat(e), Qo(c);
}
function oc(e, t) {
  var a = t.subject, o = t.body, c = t.separator;
  return "mailto:" + Ln({ subject: a, body: o ? o + c + e : e });
}
$n("email", oc, function(e) {
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
var ic = /* @__PURE__ */ function() {
  var e = function(t, a) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, c) {
      o.__proto__ = c;
    } || function(o, c) {
      for (var f in c) Object.prototype.hasOwnProperty.call(c, f) && (o[f] = c[f]);
    }, e(t, a);
  };
  return function(t, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    e(t, a);
    function o() {
      this.constructor = t;
    }
    t.prototype = a === null ? Object.create(a) : (o.prototype = a.prototype, new o());
  };
}(), sc = (
  /** @class */
  function(e) {
    ic(t, e);
    function t(a) {
      var o = e.call(this, a) || this;
      return o.name = "AssertionError", o;
    }
    return t;
  }(Error)
);
function Xr(e, t) {
  if (!e)
    throw new sc(t);
}
function lc(e, t) {
  var a = t.quote, o = t.hashtag;
  return Xr(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Ln({
    u: e,
    quote: a,
    hashtag: o
  });
}
$n("facebook", lc, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function cc(e, t) {
  var a = t.title, o = t.summary, c = t.source;
  return Xr(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Ln({ url: e, mini: "true", title: a, summary: o, source: c });
}
$n("linkedin", cc, function(e) {
  var t = e.title, a = e.summary, o = e.source;
  return { title: t, summary: a, source: o };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function uc(e, t) {
  var a = t.title, o = t.via, c = t.hashtags, f = c === void 0 ? [] : c, y = t.related, v = y === void 0 ? [] : y;
  return Xr(e, "twitter.url"), Xr(Array.isArray(f), "twitter.hashtags is not an array"), Xr(Array.isArray(v), "twitter.related is not an array"), "https://twitter.com/share" + Ln({
    url: e,
    text: a,
    via: o,
    hashtags: f.length > 0 ? f.join(",") : void 0,
    related: v.length > 0 ? v.join(",") : void 0
  });
}
$n("twitter", uc, function(e) {
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
function ma(e) {
  "@babel/helpers - typeof";
  return ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ma(e);
}
var dc = (typeof window > "u" ? "undefined" : ma(window)) === "object" && window.Element || function() {
};
function fc(e, t, a) {
  if (!(e[t] instanceof dc))
    return new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Expected prop to be an instance of Element. Validation failed.");
}
i.oneOfType([i.string, i.func, fc, i.shape({
  current: i.any
})]);
i.oneOfType([i.func, i.string, i.shape({
  $$typeof: i.symbol,
  render: i.func
}), i.arrayOf(i.oneOfType([i.func, i.string, i.shape({
  $$typeof: i.symbol,
  render: i.func
})]))]);
i.string, i.node, i.string, i.object, i.string;
i.bool, i.string, i.object;
_t.div`
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
_t.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`;
i.oneOf(["event", "news"]), i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string, i.string.isRequired, i.string, i.string, i.arrayOf(
  i.shape({
    title: i.string,
    url: i.string,
    active: i.bool
  })
), i.string, i.string, i.string, i.string, i.string, i.string;
i.oneOf(["white", "gray", "black"]), i.arrayOf(i.string), i.oneOfType([
  i.object,
  i.func,
  i.string
]), i.func, i.string, i.oneOf(["large", "small"]), i.string;
const pc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ai = ({
  label: e = "",
  cardTitle: t = "",
  gaData: a,
  ariaLabel: o,
  color: c = "gray",
  disabled: f,
  element: y = "button",
  innerRef: v,
  href: b,
  onClick: m,
  ...N
}) => {
  const x = Cr("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: f
  });
  let L = y;
  return b && y === "button" && (L = "a"), /* @__PURE__ */ V.jsx(
    en,
    {
      gaData: {
        ...pc,
        section: t,
        // @deprecated - remove at some point
        ...a,
        text: e
      },
      children: /* @__PURE__ */ V.jsx(
        L,
        {
          type: L === "button" && m ? "button" : void 0,
          ...N,
          className: x,
          href: b,
          ref: v,
          onClick: m,
          "aria-label": o,
          children: e
        }
      )
    }
  );
};
Ai.propTypes = {
  /**
    Button tag label
  */
  label: i.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: i.string,
  /**
   * Google Analytics event data
   */
  gaData: xa,
  /**
    ARIA label for accessibility
  */
  ariaLabel: i.string,
  /**
    Button background color
  */
  color: i.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: i.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: i.oneOfType([
    i.func,
    i.string,
    i.shape({ $$typeof: i.symbol, render: i.func }),
    i.arrayOf(
      i.oneOfType([
        i.func,
        i.string,
        i.shape({ $$typeof: i.symbol, render: i.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: i.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: i.oneOfType([
    i.object,
    i.func,
    i.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: i.func
};
const Oi = ({
  src: e,
  alt: t,
  cssClasses: a,
  loading: o = "lazy",
  decoding: c = "async",
  dataTestId: f,
  fetchPriority: y = "auto",
  width: v,
  height: b,
  cardLink: m,
  title: N,
  caption: x,
  captionTitle: L,
  border: X,
  dropShadow: R
}) => {
  const k = {
    src: e,
    alt: t,
    loading: o,
    decoding: c,
    fetchpriority: y,
    // React attribute bug workaround
    ...(a == null ? void 0 : a.length) > 0 && { className: Es(a) },
    ...f && { "data-testid": f },
    ...v && { width: v },
    ...b && { height: b }
  }, P = Cr("uds-img", {
    borderless: !X,
    "uds-img-drop-shadow": R
  }), U = (H) => {
    const Y = H ? `${k.className} ${H}` : k.className;
    return m ? /* @__PURE__ */ V.jsxs("a", { href: m, children: [
      /* @__PURE__ */ V.jsx("img", { ...k, className: Y }),
      /* @__PURE__ */ V.jsx("span", { className: "visually-hidden", children: N })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ V.jsx("img", { ...k, className: Y })
    );
  }, B = () => /* @__PURE__ */ V.jsx("div", { className: P, children: /* @__PURE__ */ V.jsxs("figure", { className: "figure uds-figure", children: [
    U(),
    x && /* @__PURE__ */ V.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      L && /* @__PURE__ */ V.jsx("h3", { children: L }),
      /* @__PURE__ */ V.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: kr(x)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ V.jsx(V.Fragment, { children: x ? B() : U(P) });
};
Oi.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: i.string.isRequired,
  /**
   * Image alt text
   */
  alt: i.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: i.arrayOf(i.string),
  /**
   * Image loading mode
   */
  loading: i.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: i.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: i.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: i.string,
  /**
   * Height of the image
   */
  height: i.string,
  dataTestId: i.string,
  cardLink: i.string,
  title: i.string,
  caption: i.string,
  captionTitle: i.string,
  border: i.bool,
  dropShadow: i.bool
};
const hc = _t.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, mc = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), gc = (e) => !e.startsWith("https://") && !e.startsWith("http://") && mc(e) ? `mailto:${e}` : e, yc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Kt = ({
  type: e = "default",
  width: t = "100%",
  horizontal: a = !1,
  image: o,
  imageAltText: c,
  title: f,
  icon: y,
  body: v,
  eventFormat: b = "stack",
  eventLocation: m,
  eventTime: N,
  buttons: x,
  linkLabel: L,
  linkUrl: X,
  tags: R,
  showBorders: k = !0,
  cardLink: P
}) => /* @__PURE__ */ V.jsx(
  Ni,
  {
    type: e,
    width: t,
    horizontal: a,
    image: o,
    imageAltText: c,
    title: f,
    icon: y,
    body: v,
    eventFormat: b,
    eventLocation: m,
    eventTime: N,
    buttons: x,
    linkLabel: L,
    linkUrl: X,
    tags: R,
    showBorders: k,
    cardLink: P
  }
);
Kt.propTypes = {
  /**
   * Type of card
   */
  type: i.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: i.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: i.bool,
  /**
   * Card title
   */
  title: i.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: i.arrayOf(i.string),
  /**
   * Card body content
   */
  body: i.string,
  /**
   * Event info format
   */
  eventFormat: i.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: i.string,
  /**
   * Event start time
   */
  eventTime: i.string,
  /**
   * Card header image
   */
  image: i.string,
  /**
   * Card header image alt text
   */
  imageAltText: i.string,
  /**
   * Buttons
   */
  buttons: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: i.arrayOf(i.string),
      href: i.string,
      label: i.string,
      onClick: i.func,
      size: i.oneOf(["default", "small", "xsmall"]),
      target: i.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: i.string,
  linkUrl: i.string,
  /**
   * Tags
   */
  tags: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["white", "gray", "dark"]),
      href: i.string,
      label: i.string,
      onClick: i.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: i.bool,
  /**
   * Card link
   */
  cardLink: i.string
};
const Ni = ({
  type: e = "default",
  width: t = "100%",
  horizontal: a = !1,
  image: o = "",
  imageAltText: c = "",
  title: f,
  icon: y = void 0,
  body: v = "",
  eventFormat: b = "stack",
  eventLocation: m = "",
  eventTime: N = "",
  buttons: x = void 0,
  linkLabel: L = void 0,
  linkUrl: X = void 0,
  tags: R = void 0,
  showBorders: k = !0,
  cardLink: P
}) => {
  const U = Cr("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": a,
    borderless: !k
  });
  return /* @__PURE__ */ V.jsx(V.Fragment, { children: /* @__PURE__ */ V.jsxs(hc, { className: U, "data-testid": "card-container", children: [
    !!o && /* @__PURE__ */ V.jsx(
      Oi,
      {
        src: o,
        alt: c,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: P,
        title: f
      }
    ),
    !o && y && /* @__PURE__ */ V.jsx(
      "i",
      {
        className: `${y == null ? void 0 : y[0]} fa-${y == null ? void 0 : y[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    a ? /* @__PURE__ */ V.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ V.jsx(
      ga,
      {
        type: e,
        body: v,
        eventFormat: b,
        eventLocation: m,
        eventTime: N,
        title: f,
        buttons: x,
        linkLabel: L,
        linkUrl: X,
        tags: R,
        cardLink: P
      }
    ) }) : /* @__PURE__ */ V.jsx(
      ga,
      {
        type: e,
        body: v,
        eventFormat: b,
        eventLocation: m,
        eventTime: N,
        title: f,
        buttons: x,
        linkLabel: L,
        linkUrl: X,
        tags: R,
        cardLink: P
      }
    )
  ] }) });
};
Ni.propTypes = {
  type: i.oneOf(["default", "degree", "event", "news", "story"]),
  width: i.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: i.bool,
  title: i.string.isRequired,
  icon: i.arrayOf(i.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: i.string,
  eventFormat: i.oneOf(["stack", "inline"]),
  eventLocation: i.string,
  eventTime: i.string,
  image: i.string,
  imageAltText: i.string,
  buttons: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: i.arrayOf(i.string),
      href: i.string,
      label: i.string,
      onClick: i.func,
      size: i.oneOf(["default", "small", "xsmall"]),
      target: i.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: i.string,
  linkUrl: i.string,
  tags: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["white", "gray", "dark"]),
      href: i.string,
      label: i.string,
      onClick: i.func
    })
  ),
  showBorders: i.bool,
  cardLink: i.string
};
const ga = ({
  type: e = "default",
  body: t = "",
  eventFormat: a = "stack",
  eventLocation: o = "",
  eventTime: c = "",
  title: f,
  buttons: y = void 0,
  linkLabel: v = void 0,
  linkUrl: b = void 0,
  tags: m = void 0,
  cardLink: N
}) => /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
  !!f && /* @__PURE__ */ V.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ V.jsx("h3", { className: "card-title", children: N ? /* @__PURE__ */ V.jsx("a", { href: N, children: f }) : f }) }),
  !!t && /* @__PURE__ */ V.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ V.jsx("div", { dangerouslySetInnerHTML: kr(t) }) }),
  e === "event" && (c || o) && /* @__PURE__ */ V.jsx(
    Pi,
    {
      eventFormat: a,
      eventTime: c,
      eventLocation: o
    }
  ),
  y && /* @__PURE__ */ V.jsx("div", { className: "card-buttons", children: y.map((x) => /* @__PURE__ */ V.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ V.jsx(
        hi,
        {
          ariaLabel: x.ariaLabel,
          color: x.color,
          icon: x.icon,
          href: x.href,
          label: x.label,
          onClick: x.onClick,
          size: x.size,
          target: x.target,
          cardTitle: f
        }
      )
    },
    `${x.label}-${x.href}`
  )) }),
  b && v && /* @__PURE__ */ V.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ V.jsx(
    en,
    {
      gaData: {
        ...yc,
        section: f,
        text: v
      },
      children: /* @__PURE__ */ V.jsx("a", { href: gc(b), children: v })
    }
  ) }),
  m && /* @__PURE__ */ V.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: m.map((x) => (
    // @ts-ignore
    /* @__PURE__ */ V.jsx(
      Ai,
      {
        ariaLabel: x.ariaLabel,
        color: x.color,
        href: x.href,
        label: x.label,
        onClick: x.onClick,
        cardTitle: f
      },
      `${x.label}-${x.href}`
    )
  )) })
] });
ga.propTypes = {
  type: i.oneOf(["default", "degree", "event", "news", "story"]),
  body: i.string,
  eventFormat: i.oneOf(["stack", "inline"]),
  eventLocation: i.string,
  eventTime: i.string,
  title: i.string.isRequired,
  buttons: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: i.arrayOf(i.string),
      href: i.string,
      label: i.string,
      onClick: i.func,
      size: i.oneOf(["default", "small", "xsmall"]),
      target: i.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: i.string,
  linkUrl: i.string,
  tags: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["white", "gray", "dark"]),
      href: i.string,
      label: i.string,
      onClick: i.func
    })
  ),
  cardLink: i.string
};
const Pi = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: a = ""
}) => e === "inline" ? /* @__PURE__ */ V.jsxs("div", { className: "card-event-details", children: [
  a && /* @__PURE__ */ V.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ V.jsx("div", { dangerouslySetInnerHTML: kr(a) })
  ] }),
  t && /* @__PURE__ */ V.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ V.jsx(
      "div",
      {
        dangerouslySetInnerHTML: kr(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
  a && /* @__PURE__ */ V.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ V.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ V.jsx("div", { dangerouslySetInnerHTML: kr(a) })
  ] }) }),
  t && /* @__PURE__ */ V.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ V.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ V.jsx("span", { children: /* @__PURE__ */ V.jsx(
      "div",
      {
        dangerouslySetInnerHTML: kr(t)
      }
    ) })
  ] }) })
] });
Pi.propTypes = {
  eventFormat: i.oneOf(["stack", "inline"]),
  eventLocation: i.string,
  eventTime: i.string
};
const bc = _t.div`
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
`, vc = () => /* @__PURE__ */ V.jsxs(bc, { children: [
  /* @__PURE__ */ V.jsx("div", {}),
  /* @__PURE__ */ V.jsx("div", {}),
  /* @__PURE__ */ V.jsx("div", {}),
  /* @__PURE__ */ V.jsx("div", {})
] }), wc = _t.section``, Ra = hs(null), Fi = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: a,
  renderHeader: o,
  renderBody: c,
  dataTransformer: f,
  dataFilter: y,
  maxItems: v
}) => {
  const [{ data: b, loading: m, error: N }, x] = _s(), [L, X] = Gr([]), R = { ...e.dataSource, ...t };
  return Qr(() => {
    x(R == null ? void 0 : R.url);
  }, [R == null ? void 0 : R.url]), Qr(() => {
    const k = b == null ? void 0 : b.nodes.map(f), P = k == null ? void 0 : k.filter(
      (U) => y(U, t == null ? void 0 : t.filters)
    );
    X(v ? P == null ? void 0 : P.slice(0, v) : P);
  }, [b]), // Init the context to be used on its childrens
  /* @__PURE__ */ V.jsx(Ra.Provider, { value: { feeds: L }, children: /* @__PURE__ */ V.jsxs(wc, { children: [
    o,
    N ? /* @__PURE__ */ V.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
      m && !(L != null && L.length) && /* @__PURE__ */ V.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ V.jsx(vc, {}) }),
      L != null && L.length ? c : !m && /* @__PURE__ */ V.jsx("p", { className: "text-center", children: a })
    ] })
  ] }) });
};
Fi.propTypes = {
  renderHeader: i.element,
  renderBody: i.element,
  maxItems: i.number,
  dataTransformer: i.func,
  dataFilter: i.func,
  noFeedText: i.string
};
const Aa = i.shape({
  color: i.oneOf(["white", "dark"]),
  text: i.string
}), Oa = i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  text: i.string
});
i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  text: i.string,
  size: i.string
});
const Ii = i.shape({
  url: i.string,
  filters: i.string
}), kc = i.shape({
  header: Aa,
  ctaButton: Oa,
  dataSource: Ii,
  maxItems: i.number
}), Sc = _t.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Di = ({
  defaultProps: e,
  header: t,
  ctaButton: a
}) => {
  const o = { ...e.header, ...t }, c = { ...e.ctaButton, ...a };
  return /* @__PURE__ */ V.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ V.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ V.jsx("h2", { className: `text-${o.color}`, children: o.text }) }),
        /* @__PURE__ */ V.jsx(Sc, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ V.jsx(
          en,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: o.text,
              text: c.text
            },
            children: /* @__PURE__ */ V.jsx("a", { className: `btn btn-${c.color}`, href: c.url, children: c.text })
          }
        ) })
      ]
    }
  );
};
Di.propTypes = {
  defaultProps: kc,
  header: Aa,
  ctaButton: Oa
};
const ji = ({ children: e }) => /* @__PURE__ */ V.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ V.jsx("div", { className: "col", children: e }) });
ji.propTypes = {
  children: i.element
};
_t.img`
  width: 100%;
`;
i.oneOf(["heading-hero", "story-hero"]), i.arrayOf(Qn), i.string;
i.bool, i.bool, i.bool, i.bool, i.string, i.func, i.node, i.bool, i.string, i.bool;
i.oneOf(["default", "bordered"]).isRequired, i.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, i.number, i.number, i.func.isRequired;
i.oneOf(["small", "large"]), i.string.isRequired, i.string.isRequired, i.string;
i.oneOf(["small", "large"]).isRequired, i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string, i.string;
_t.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
i.object, i.bool, i.bool, i.func.isRequired;
const xc = Qo(function(e, t) {
  const {
    id: a,
    selected: o,
    title: c,
    selectTab: f,
    leftKeyPressed: y,
    rightKeyPressed: v,
    icon: b,
    gaData: m
  } = e, { isReact: N, isBootstrap: x } = pi(), L = ms(null);
  gs(
    t,
    () => ({
      focus() {
        L.current.focus();
      },
      scrollIntoView() {
        var R, k, P, U, B, H, Y;
        const S = ((R = L.current) == null ? void 0 : R.offsetWidth) / 2 + L.current.offsetLeft, le = ((P = (k = L.current) == null ? void 0 : k.offsetParent) == null ? void 0 : P.scrollLeft) + ((B = (U = L.current) == null ? void 0 : U.offsetParent) == null ? void 0 : B.offsetWidth) / 2;
        (Y = (H = L.current) == null ? void 0 : H.offsetParent) == null || Y.scrollBy({
          left: S - le
        });
      }
    }),
    []
  );
  const X = (R) => {
    R.keyCode === 37 ? (R.preventDefault(), y()) : R.keyCode === 39 && (R.preventDefault(), v());
  };
  return /* @__PURE__ */ V.jsx(en, { gaData: { ...m, text: c }, children: /* @__PURE__ */ V.jsxs(
    "a",
    {
      ref: L,
      className: `nav-item nav-link ${o ? "active" : ""}`,
      id: a,
      href: `#nav-${a}`,
      role: "tab",
      "aria-controls": `nav-${a}`,
      "aria-selected": o,
      "data-bs-toggle": x && "tab",
      onClick: N && ((R) => f(R, a, c)),
      onKeyDown: N && X,
      tabIndex: o ? "" : "-1",
      children: [
        c,
        " ",
        b && /* @__PURE__ */ V.jsx("i", { className: `${b == null ? void 0 : b[0]} fa-${b == null ? void 0 : b[1]} me-1` })
      ]
    }
  ) });
});
xc.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: i.object,
  id: i.string.isRequired,
  selected: i.bool.isRequired,
  title: i.string.isRequired,
  selectTab: i.func.isRequired,
  leftKeyPressed: i.func.isRequired,
  rightKeyPressed: i.func.isRequired,
  icon: i.arrayOf(i.string)
};
i.string.isRequired, i.string, i.bool, i.oneOfType([i.array, i.element]);
i.string, i.arrayOf(i.element).isRequired, i.string, i.func;
i.shape({
  title: i.string,
  content: i.string,
  cite: i.shape({
    name: i.string,
    description: i.string
  })
}).isRequired, i.string, i.string, i.shape({
  containerCssClass: i.arrayOf(i.string),
  titleCssClass: i.arrayOf(i.string),
  contentCssClass: i.arrayOf(i.string)
});
i.oneOf(["video", "youtube"]), i.string, i.string, i.string, i.string, i.string, i.bool;
i.oneOfType([
  i.element,
  i.arrayOf(i.element)
]).isRequired;
i.number.isRequired;
i.arrayOf(i.string).isRequired, i.func;
i.func;
i.func;
i.arrayOf(i.element);
i.element, i.func;
i.arrayOf(i.object);
var Cc = !1;
try {
  var Ro = Object.defineProperty({}, "passive", {
    get: function() {
      Cc = !0;
    }
  });
  window.addEventListener("testPassive", null, Ro), window.removeEventListener("testPassive", null, Ro);
} catch {
}
i.number, i.string, i.string, i.arrayOf(i.object).isRequired, i.string, i.func, i.string, i.string, i.func, i.bool, i.bool, i.bool, i.bool, i.bool, i.bool, i.bool, i.bool;
i.string.isRequired, i.arrayOf(
  i.shape({
    title: i.string.isRequired,
    content: i.string,
    eventLocation: i.string,
    eventTime: i.string,
    image: i.string,
    imageAltText: i.string,
    buttons: Kt.propTypes.buttons,
    linkLabel: i.string,
    linkUrl: i.string,
    tags: Kt.propTypes.tags
  })
).isRequired, Kt.propTypes.type, Kt.propTypes.eventFormat, Kt.propTypes.horizontal, i.string, i.string, i.bool;
i.number.isRequired, i.arrayOf(i.object).isRequired, i.string, i.string, i.bool;
const Fn = {
  imageItems: i.arrayOf(
    i.shape({
      id: i.number,
      imageSource: i.string,
      thumbnailSource: i.string,
      imageAltText: i.string,
      content: i.oneOfType([i.string, i.element])
    })
  ),
  hasContent: i.bool
};
i.string, Fn.imageItems, Fn.hasContent;
Fn.imageItems.isRequired, Fn.hasContent, i.string, i.string, i.bool;
i.arrayOf(
  i.shape({
    title: i.string,
    content: i.string,
    cite: i.shape({
      name: i.string,
      description: i.string
    })
  })
).isRequired, i.shape({
  containerCssClass: i.arrayOf(i.string),
  titleCssClass: i.arrayOf(i.string),
  contentCssClass: i.arrayOf(i.string)
}), i.string, i.string, i.bool, i.bool, i.bool;
var Ao = Jo;
Ao.createRoot, Ao.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
var Mi = { exports: {} }, oa, Oo;
function _c() {
  if (Oo) return oa;
  Oo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return oa = e, oa;
}
var ia, No;
function Ec() {
  if (No) return ia;
  No = 1;
  var e = _c();
  function t() {
  }
  function a() {
  }
  return a.resetWarningCache = t, ia = function() {
    function o(y, v, b, m, N, x) {
      if (x !== e) {
        var L = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw L.name = "Invariant Violation", L;
      }
    }
    o.isRequired = o;
    function c() {
      return o;
    }
    var f = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: c,
      element: o,
      elementType: o,
      instanceOf: c,
      node: o,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: a,
      resetWarningCache: t
    };
    return f.PropTypes = f, f;
  }, ia;
}
Mi.exports = Ec()();
var Tc = Mi.exports;
const ht = /* @__PURE__ */ ei(Tc), Po = {
  header: {
    color: "dark",
    text: "Events list"
  },
  ctaButton: {
    color: "gold",
    text: "Click to see more events",
    url: "https://asuevents.asu.edu/"
  },
  dataSource: {
    url: "https://asuevents.asu.edu/feed-json/"
  }
}, Fo = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], Io = (e) => e.toLowerCase().split(" ").join("_"), Rc = (e, t) => {
  if (!t) return !0;
  const a = t.split(",");
  for (let o = 0; o < a.length; o += 1) {
    const c = Io(a[o]);
    for (let f = 0; f < Fo.length; f += 1) {
      const y = Fo[f];
      if (Io(e[y] || "").includes(c)) return !0;
    }
  }
  return !1;
}, Ac = (e) => ({
  id: e.node.nid,
  title: e.node.title,
  imageUrl: e.node.image_url,
  location: (e.node.campus || "").trim(),
  interests: e.node.interests,
  startDate: e.node.very_start_date,
  endDate: e.node.very_end_date,
  alias: e.node.alias,
  // Also used for card link in title of card
  audiences: e.node.audiences,
  eventUnits: e.node.event_units,
  eventTopics: e.node.event_topics,
  eventTypes: e.node.event_types,
  collegeUnit: e.node.college_unit,
  eventButtonUrl: e.node.ticketing_rsvp_url,
  eventButtonText: e.node.ticketing_rsvp_txt
}), Na = ({ children: e, header: t, ctaButton: a, dataSource: o, maxItems: c }) => (
  // Calling the unity-react-core component to fetch the data, transform it and filter it
  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the unity-react-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  /* @__PURE__ */ mt.jsx(
    Fi,
    {
      renderHeader: t && a ? /* @__PURE__ */ mt.jsx(
        Di,
        {
          header: t,
          ctaButton: a,
          defaultProps: Po
        }
      ) : null,
      renderBody: /* @__PURE__ */ mt.jsx(ji, { children: e }),
      dataTransformer: Ac,
      dataFilter: Rc,
      dataSource: o,
      defaultProps: Po,
      noFeedText: "No events to show.",
      maxItems: c
    }
  )
);
Na.propTypes = {
  header: Aa,
  ctaButton: Oa,
  dataSource: Ii,
  maxItems: ht.number,
  children: ht.element
};
const Oc = ht.shape({
  color: ht.oneOf(["white", "dark"]),
  text: ht.string
}), Nc = ht.shape({
  color: ht.oneOf(["gold", "maroon", "gray", "dark"]),
  text: ht.string,
  url: ht.string
}), Pc = ht.shape({
  url: ht.string.isRequired,
  filters: ht.string
}).isRequired, Li = {
  header: Oc,
  ctaButton: Nc,
  dataSource: Pc,
  maxItems: ht.number
}, Fc = (e) => e.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), Do = (e) => e.toLocaleString("en-US", {
  timeZone: "UTC"
}), ya = (e) => {
  let t = e.split("T");
  return t = t.length > 1 ? t.join("T") : `${t[0].split(":")[0]}T00:00:00Z`, t;
}, jo = (e) => {
  let t = e.getHours(), a = e.getMinutes();
  const o = t >= 12 ? "p.m." : "a.m.";
  return t %= 12, t = t || 12, a = a < 10 ? `0${a}` : a, `${t}:${a} ${o}`;
}, $i = (e, t) => {
  const a = ya(e), o = ya(t);
  let c = Do(new Date(a)), f = Do(new Date(o));
  return c = jo(new Date(c)), f = jo(new Date(f)), e === t ? c : `${c} - ${f}`;
}, In = (e, t) => {
  const a = ya(e);
  return {
    ISO: a.split("T")[0],
    COMPLETE: Fc(new Date(a))
  }[t];
};
var zi = { exports: {} }, De = {};
var Mo;
function Ic() {
  if (Mo) return De;
  Mo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), y = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), X = Symbol.for("react.client.reference");
  function R(k) {
    if (typeof k == "object" && k !== null) {
      var P = k.$$typeof;
      switch (P) {
        case e:
          switch (k = k.type, k) {
            case a:
            case c:
            case o:
            case b:
            case m:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case y:
                case v:
                case x:
                case N:
                  return k;
                case f:
                  return k;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return De.ContextConsumer = f, De.ContextProvider = y, De.Element = e, De.ForwardRef = v, De.Fragment = a, De.Lazy = x, De.Memo = N, De.Portal = t, De.Profiler = c, De.StrictMode = o, De.Suspense = b, De.SuspenseList = m, De.isContextConsumer = function(k) {
    return R(k) === f;
  }, De.isContextProvider = function(k) {
    return R(k) === y;
  }, De.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, De.isForwardRef = function(k) {
    return R(k) === v;
  }, De.isFragment = function(k) {
    return R(k) === a;
  }, De.isLazy = function(k) {
    return R(k) === x;
  }, De.isMemo = function(k) {
    return R(k) === N;
  }, De.isPortal = function(k) {
    return R(k) === t;
  }, De.isProfiler = function(k) {
    return R(k) === c;
  }, De.isStrictMode = function(k) {
    return R(k) === o;
  }, De.isSuspense = function(k) {
    return R(k) === b;
  }, De.isSuspenseList = function(k) {
    return R(k) === m;
  }, De.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === a || k === c || k === o || k === b || k === m || k === L || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === N || k.$$typeof === y || k.$$typeof === f || k.$$typeof === v || k.$$typeof === X || k.getModuleId !== void 0);
  }, De.typeOf = R, De;
}
zi.exports = Ic();
var Ui = zi.exports;
function Dc(e) {
  function t(I, O, F, M, p) {
    for (var te = 0, C = 0, re = 0, Q = 0, J, z, ne = 0, se = 0, Z, pe = Z = J = 0, ee = 0, ce = 0, We = 0, de = 0, Qe = F.length, Ve = Qe - 1, he, $ = "", ae = "", Xe = "", at = "", je; ee < Qe; ) {
      if (z = F.charCodeAt(ee), ee === Ve && C + Q + re + te !== 0 && (C !== 0 && (z = C === 47 ? 10 : 47), Q = re = te = 0, Qe++, Ve++), C + Q + re + te === 0) {
        if (ee === Ve && (0 < ce && ($ = $.replace(L, "")), 0 < $.trim().length)) {
          switch (z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              $ += F.charAt(ee);
          }
          z = 59;
        }
        switch (z) {
          case 123:
            for ($ = $.trim(), J = $.charCodeAt(0), Z = 1, de = ++ee; ee < Qe; ) {
              switch (z = F.charCodeAt(ee)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (z = F.charCodeAt(ee + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (pe = ee + 1; pe < Ve; ++pe)
                          switch (F.charCodeAt(pe)) {
                            case 47:
                              if (z === 42 && F.charCodeAt(pe - 1) === 42 && ee + 2 !== pe) {
                                ee = pe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (z === 47) {
                                ee = pe + 1;
                                break e;
                              }
                          }
                        ee = pe;
                      }
                  }
                  break;
                case 91:
                  z++;
                case 40:
                  z++;
                case 34:
                case 39:
                  for (; ee++ < Ve && F.charCodeAt(ee) !== z; )
                    ;
              }
              if (Z === 0) break;
              ee++;
            }
            switch (Z = F.substring(de, ee), J === 0 && (J = ($ = $.replace(x, "").trim()).charCodeAt(0)), J) {
              case 64:
                switch (0 < ce && ($ = $.replace(L, "")), z = $.charCodeAt(1), z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ce = O;
                    break;
                  default:
                    ce = Ke;
                }
                if (Z = t(O, ce, Z, z, p + 1), de = Z.length, 0 < xe && (ce = a(Ke, $, We), je = v(3, Z, ce, O, Te, fe, de, z, p, M), $ = ce.join(""), je !== void 0 && (de = (Z = je.trim()).length) === 0 && (z = 0, Z = "")), 0 < de) switch (z) {
                  case 115:
                    $ = $.replace(le, y);
                  case 100:
                  case 109:
                  case 45:
                    Z = $ + "{" + Z + "}";
                    break;
                  case 107:
                    $ = $.replace(B, "$1 $2"), Z = $ + "{" + Z + "}", Z = ke === 1 || ke === 2 && f("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                    break;
                  default:
                    Z = $ + Z, M === 112 && (Z = (ae += Z, ""));
                }
                else Z = "";
                break;
              default:
                Z = t(O, a(O, $, We), Z, M, p + 1);
            }
            Xe += Z, Z = We = ce = pe = J = 0, $ = "", z = F.charCodeAt(++ee);
            break;
          case 125:
          case 59:
            if ($ = (0 < ce ? $.replace(L, "") : $).trim(), 1 < (de = $.length)) switch (pe === 0 && (J = $.charCodeAt(0), J === 45 || 96 < J && 123 > J) && (de = ($ = $.replace(" ", ":")).length), 0 < xe && (je = v(1, $, O, I, Te, fe, ae.length, M, p, M)) !== void 0 && (de = ($ = je.trim()).length) === 0 && ($ = "\0\0"), J = $.charCodeAt(0), z = $.charCodeAt(1), J) {
              case 0:
                break;
              case 64:
                if (z === 105 || z === 99) {
                  at += $ + F.charAt(ee);
                  break;
                }
              default:
                $.charCodeAt(de - 1) !== 58 && (ae += c($, J, z, $.charCodeAt(2)));
            }
            We = ce = pe = J = 0, $ = "", z = F.charCodeAt(++ee);
        }
      }
      switch (z) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + J === 0 && M !== 107 && 0 < $.length && (ce = 1, $ += "\0"), 0 < xe * Ge && v(0, $, O, I, Te, fe, ae.length, M, p, M), fe = 1, Te++;
          break;
        case 59:
        case 125:
          if (C + Q + re + te === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, he = F.charAt(ee), z) {
            case 9:
            case 32:
              if (Q + te + C === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  he = "";
                  break;
                default:
                  z !== 32 && (he = " ");
              }
              break;
            case 0:
              he = "\\0";
              break;
            case 12:
              he = "\\f";
              break;
            case 11:
              he = "\\v";
              break;
            case 38:
              Q + C + te === 0 && (ce = We = 1, he = "\f" + he);
              break;
            case 108:
              if (Q + C + te + Re === 0 && 0 < pe) switch (ee - pe) {
                case 2:
                  ne === 112 && F.charCodeAt(ee - 3) === 58 && (Re = ne);
                case 8:
                  se === 111 && (Re = se);
              }
              break;
            case 58:
              Q + C + te === 0 && (pe = ee);
              break;
            case 44:
              C + re + Q + te === 0 && (ce = 1, he += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (Q = Q === z ? 0 : Q === 0 ? z : Q);
              break;
            case 91:
              Q + C + re === 0 && te++;
              break;
            case 93:
              Q + C + re === 0 && te--;
              break;
            case 41:
              Q + C + te === 0 && re--;
              break;
            case 40:
              if (Q + C + te === 0) {
                if (J === 0) switch (2 * ne + 3 * se) {
                  case 533:
                    break;
                  default:
                    J = 1;
                }
                re++;
              }
              break;
            case 64:
              C + re + Q + te + pe + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + te + re)) switch (C) {
                case 0:
                  switch (2 * z + 3 * F.charCodeAt(ee + 1)) {
                    case 235:
                      C = 47;
                      break;
                    case 220:
                      de = ee, C = 42;
                  }
                  break;
                case 42:
                  z === 47 && ne === 42 && de + 2 !== ee && (F.charCodeAt(de + 2) === 33 && (ae += F.substring(de, ee + 1)), he = "", C = 0);
              }
          }
          C === 0 && ($ += he);
      }
      se = ne, ne = z, ee++;
    }
    if (de = ae.length, 0 < de) {
      if (ce = O, 0 < xe && (je = v(2, ae, ce, I, Te, fe, de, M, p, M), je !== void 0 && (ae = je).length === 0)) return at + ae + Xe;
      if (ae = ce.join(",") + "{" + ae + "}", ke * Re !== 0) {
        switch (ke !== 2 || f(ae, 2) || (Re = 0), Re) {
          case 111:
            ae = ae.replace(Y, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(H, "::-webkit-input-$1") + ae.replace(H, "::-moz-$1") + ae.replace(H, ":-ms-input-$1") + ae;
        }
        Re = 0;
      }
    }
    return at + ae + Xe;
  }
  function a(I, O, F) {
    var M = O.trim().split(P);
    O = M;
    var p = M.length, te = I.length;
    switch (te) {
      case 0:
      case 1:
        var C = 0;
        for (I = te === 0 ? "" : I[0] + " "; C < p; ++C)
          O[C] = o(I, O[C], F).trim();
        break;
      default:
        var re = C = 0;
        for (O = []; C < p; ++C)
          for (var Q = 0; Q < te; ++Q)
            O[re++] = o(I[Q] + " ", M[C], F).trim();
    }
    return O;
  }
  function o(I, O, F) {
    var M = O.charCodeAt(0);
    switch (33 > M && (M = (O = O.trim()).charCodeAt(0)), M) {
      case 38:
        return O.replace(U, "$1" + I.trim());
      case 58:
        return I.trim() + O.replace(U, "$1" + I.trim());
      default:
        if (0 < 1 * F && 0 < O.indexOf("\f")) return O.replace(U, (I.charCodeAt(0) === 58 ? "" : "$1") + I.trim());
    }
    return I + O;
  }
  function c(I, O, F, M) {
    var p = I + ";", te = 2 * O + 3 * F + 4 * M;
    if (te === 944) {
      I = p.indexOf(":", 9) + 1;
      var C = p.substring(I, p.length - 1).trim();
      return C = p.substring(0, I).trim() + C + ";", ke === 1 || ke === 2 && f(C, 1) ? "-webkit-" + C + C : C;
    }
    if (ke === 0 || ke === 2 && !f(p, 1)) return p;
    switch (te) {
      case 1015:
        return p.charCodeAt(10) === 97 ? "-webkit-" + p + p : p;
      case 951:
        return p.charCodeAt(3) === 116 ? "-webkit-" + p + p : p;
      case 963:
        return p.charCodeAt(5) === 110 ? "-webkit-" + p + p : p;
      case 1009:
        if (p.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + p + p;
      case 978:
        return "-webkit-" + p + "-moz-" + p + p;
      case 1019:
      case 983:
        return "-webkit-" + p + "-moz-" + p + "-ms-" + p + p;
      case 883:
        if (p.charCodeAt(8) === 45) return "-webkit-" + p + p;
        if (0 < p.indexOf("image-set(", 11)) return p.replace(Se, "$1-webkit-$2") + p;
        break;
      case 932:
        if (p.charCodeAt(4) === 45) switch (p.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + p.replace("-grow", "") + "-webkit-" + p + "-ms-" + p.replace("grow", "positive") + p;
          case 115:
            return "-webkit-" + p + "-ms-" + p.replace("shrink", "negative") + p;
          case 98:
            return "-webkit-" + p + "-ms-" + p.replace("basis", "preferred-size") + p;
        }
        return "-webkit-" + p + "-ms-" + p + p;
      case 964:
        return "-webkit-" + p + "-ms-flex-" + p + p;
      case 1023:
        if (p.charCodeAt(8) !== 99) break;
        return C = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + p + "-ms-flex-pack" + C + p;
      case 1005:
        return R.test(p) ? p.replace(X, ":-webkit-") + p.replace(X, ":-moz-") + p : p;
      case 1e3:
        switch (C = p.substring(13).trim(), O = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(O)) {
          case 226:
            C = p.replace(S, "tb");
            break;
          case 232:
            C = p.replace(S, "tb-rl");
            break;
          case 220:
            C = p.replace(S, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + C + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (O = (p = I).length - 10, C = (p.charCodeAt(O) === 33 ? p.substring(0, O) : p).substring(I.indexOf(":", 7) + 1).trim(), te = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8)) break;
          case 115:
            p = p.replace(C, "-webkit-" + C) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(C, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + p.replace(C, "-webkit-" + C) + ";" + p.replace(C, "-ms-" + C + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45) switch (p.charCodeAt(6)) {
          case 105:
            return C = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + C + "-ms-flex-" + C + p;
          case 115:
            return "-webkit-" + p + "-ms-flex-item-" + p.replace(Ee, "") + p;
          default:
            return "-webkit-" + p + "-ms-flex-line-pack" + p.replace("align-content", "").replace(Ee, "") + p;
        }
        break;
      case 973:
      case 989:
        if (p.charCodeAt(3) !== 45 || p.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (ze.test(I) === !0) return (C = I.substring(I.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(I.replace("stretch", "fill-available"), O, F, M).replace(":fill-available", ":stretch") : p.replace(C, "-webkit-" + C) + p.replace(C, "-moz-" + C.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, F + M === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + p;
    }
    return p;
  }
  function f(I, O) {
    var F = I.indexOf(O === 1 ? ":" : "{"), M = I.substring(0, O !== 3 ? F : 10);
    return F = I.substring(F + 1, I.length - 1), Me(O !== 2 ? M : M.replace(Ne, "$1"), F, O);
  }
  function y(I, O) {
    var F = c(O, O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2));
    return F !== O + ";" ? F.replace(be, " or ($1)").substring(4) : "(" + O + ")";
  }
  function v(I, O, F, M, p, te, C, re, Q, J) {
    for (var z = 0, ne = O, se; z < xe; ++z)
      switch (se = Pe[z].call(N, I, ne, F, M, p, te, C, re, Q, J)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = se;
      }
    if (ne !== O) return ne;
  }
  function b(I) {
    switch (I) {
      case void 0:
      case null:
        xe = Pe.length = 0;
        break;
      default:
        if (typeof I == "function") Pe[xe++] = I;
        else if (typeof I == "object") for (var O = 0, F = I.length; O < F; ++O)
          b(I[O]);
        else Ge = !!I | 0;
    }
    return b;
  }
  function m(I) {
    return I = I.prefix, I !== void 0 && (Me = null, I ? typeof I != "function" ? ke = 1 : (ke = 2, Me = I) : ke = 0), m;
  }
  function N(I, O) {
    var F = I;
    if (33 > F.charCodeAt(0) && (F = F.trim()), ve = F, F = [ve], 0 < xe) {
      var M = v(-1, O, F, F, Te, fe, 0, 0, 0, 0);
      M !== void 0 && typeof M == "string" && (O = M);
    }
    var p = t(Ke, F, O, 0, 0);
    return 0 < xe && (M = v(-2, p, F, F, Te, fe, p.length, 0, 0, 0), M !== void 0 && (p = M)), ve = "", Re = 0, fe = Te = 1, p;
  }
  var x = /^\0+/g, L = /[\0\r\f]/g, X = /: */g, R = /zoo|gra/, k = /([,: ])(transform)/g, P = /,\r+?/g, U = /([\t\r\n ])*\f?&/g, B = /@(k\w+)\s*(\S*)\s*/, H = /::(place)/g, Y = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, le = /\(\s*(.*)\s*\)/g, be = /([\s\S]*?);/g, Ee = /-self|flex-/g, Ne = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ze = /stretch|:\s*\w+\-(?:conte|avail)/, Se = /([^-])(image-set\()/, fe = 1, Te = 1, Re = 0, ke = 1, Ke = [], Pe = [], xe = 0, Me = null, Ge = 0, ve = "";
  return N.use = b, N.set = m, e !== void 0 && m(e), N;
}
var jc = {
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
function Mc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(a) {
    return t[a] === void 0 && (t[a] = e(a)), t[a];
  };
}
var Lc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Lo = /* @__PURE__ */ Mc(
  function(e) {
    return Lc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Bi = { exports: {} }, Oe = {};
var $o;
function $c() {
  if ($o) return Oe;
  $o = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, f = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, N = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, L = e ? Symbol.for("react.suspense_list") : 60120, X = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, U = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
  function H(S) {
    if (typeof S == "object" && S !== null) {
      var le = S.$$typeof;
      switch (le) {
        case t:
          switch (S = S.type, S) {
            case b:
            case m:
            case o:
            case f:
            case c:
            case x:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case v:
                case N:
                case R:
                case X:
                case y:
                  return S;
                default:
                  return le;
              }
          }
        case a:
          return le;
      }
    }
  }
  function Y(S) {
    return H(S) === m;
  }
  return Oe.AsyncMode = b, Oe.ConcurrentMode = m, Oe.ContextConsumer = v, Oe.ContextProvider = y, Oe.Element = t, Oe.ForwardRef = N, Oe.Fragment = o, Oe.Lazy = R, Oe.Memo = X, Oe.Portal = a, Oe.Profiler = f, Oe.StrictMode = c, Oe.Suspense = x, Oe.isAsyncMode = function(S) {
    return Y(S) || H(S) === b;
  }, Oe.isConcurrentMode = Y, Oe.isContextConsumer = function(S) {
    return H(S) === v;
  }, Oe.isContextProvider = function(S) {
    return H(S) === y;
  }, Oe.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Oe.isForwardRef = function(S) {
    return H(S) === N;
  }, Oe.isFragment = function(S) {
    return H(S) === o;
  }, Oe.isLazy = function(S) {
    return H(S) === R;
  }, Oe.isMemo = function(S) {
    return H(S) === X;
  }, Oe.isPortal = function(S) {
    return H(S) === a;
  }, Oe.isProfiler = function(S) {
    return H(S) === f;
  }, Oe.isStrictMode = function(S) {
    return H(S) === c;
  }, Oe.isSuspense = function(S) {
    return H(S) === x;
  }, Oe.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === o || S === m || S === f || S === c || S === x || S === L || typeof S == "object" && S !== null && (S.$$typeof === R || S.$$typeof === X || S.$$typeof === y || S.$$typeof === v || S.$$typeof === N || S.$$typeof === P || S.$$typeof === U || S.$$typeof === B || S.$$typeof === k);
  }, Oe.typeOf = H, Oe;
}
Bi.exports = $c();
var zc = Bi.exports, Pa = zc, Uc = {
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
}, Bc = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Wc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Wi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Fa = {};
Fa[Pa.ForwardRef] = Wc;
Fa[Pa.Memo] = Wi;
function zo(e) {
  return Pa.isMemo(e) ? Wi : Fa[e.$$typeof] || Uc;
}
var Vc = Object.defineProperty, qc = Object.getOwnPropertyNames, Uo = Object.getOwnPropertySymbols, Hc = Object.getOwnPropertyDescriptor, Gc = Object.getPrototypeOf, Bo = Object.prototype;
function Vi(e, t, a) {
  if (typeof t != "string") {
    if (Bo) {
      var o = Gc(t);
      o && o !== Bo && Vi(e, o, a);
    }
    var c = qc(t);
    Uo && (c = c.concat(Uo(t)));
    for (var f = zo(e), y = zo(t), v = 0; v < c.length; ++v) {
      var b = c[v];
      if (!Bc[b] && !(a && a[b]) && !(y && y[b]) && !(f && f[b])) {
        var m = Hc(t, b);
        try {
          Vc(e, b, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var Yc = Vi;
const Xc = /* @__PURE__ */ ei(Yc);
var nt = { env: { NODE_ENV: "production" } };
function jt() {
  return (jt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    }
    return e;
  }).apply(this, arguments);
}
var Wo = function(e, t) {
  for (var a = [e[0]], o = 0, c = t.length; o < c; o += 1) a.push(t[o], e[o + 1]);
  return a;
}, ba = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ui.typeOf(e);
}, Dn = Object.freeze([]), Zt = Object.freeze({});
function Jr(e) {
  return typeof e == "function";
}
function Vo(e) {
  return e.displayName || e.name || "Component";
}
function Ia(e) {
  return e && typeof e.styledComponentId == "string";
}
var Tr = typeof nt < "u" && nt.env !== void 0 && (nt.env.REACT_APP_SC_ATTR || nt.env.SC_ATTR) || "data-styled", Da = typeof window < "u" && "HTMLElement" in window, Kc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof nt < "u" && nt.env !== void 0 && (nt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && nt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? nt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && nt.env.REACT_APP_SC_DISABLE_SPEEDY : nt.env.SC_DISABLE_SPEEDY !== void 0 && nt.env.SC_DISABLE_SPEEDY !== "" ? nt.env.SC_DISABLE_SPEEDY !== "false" && nt.env.SC_DISABLE_SPEEDY : nt.env.NODE_ENV !== "production"));
function rn(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (a.length > 0 ? " Args: " + a.join(", ") : ""));
}
var Qc = function() {
  function e(a) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = a;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(a) {
    for (var o = 0, c = 0; c < a; c++) o += this.groupSizes[c];
    return o;
  }, t.insertRules = function(a, o) {
    if (a >= this.groupSizes.length) {
      for (var c = this.groupSizes, f = c.length, y = f; a >= y; ) (y <<= 1) < 0 && rn(16, "" + a);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(c), this.length = y;
      for (var v = f; v < y; v++) this.groupSizes[v] = 0;
    }
    for (var b = this.indexOfGroup(a + 1), m = 0, N = o.length; m < N; m++) this.tag.insertRule(b, o[m]) && (this.groupSizes[a]++, b++);
  }, t.clearGroup = function(a) {
    if (a < this.length) {
      var o = this.groupSizes[a], c = this.indexOfGroup(a), f = c + o;
      this.groupSizes[a] = 0;
      for (var y = c; y < f; y++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(a) {
    var o = "";
    if (a >= this.length || this.groupSizes[a] === 0) return o;
    for (var c = this.groupSizes[a], f = this.indexOfGroup(a), y = f + c, v = f; v < y; v++) o += this.tag.getRule(v) + `/*!sc*/
`;
    return o;
  }, e;
}(), An = /* @__PURE__ */ new Map(), jn = /* @__PURE__ */ new Map(), Kr = 1, _n = function(e) {
  if (An.has(e)) return An.get(e);
  for (; jn.has(Kr); ) Kr++;
  var t = Kr++;
  return An.set(e, t), jn.set(t, e), t;
}, Zc = function(e) {
  return jn.get(e);
}, Jc = function(e, t) {
  t >= Kr && (Kr = t + 1), An.set(e, t), jn.set(t, e);
}, eu = "style[" + Tr + '][data-styled-version="5.3.11"]', tu = new RegExp("^" + Tr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ru = function(e, t, a) {
  for (var o, c = a.split(","), f = 0, y = c.length; f < y; f++) (o = c[f]) && e.registerName(t, o);
}, nu = function(e, t) {
  for (var a = (t.textContent || "").split(`/*!sc*/
`), o = [], c = 0, f = a.length; c < f; c++) {
    var y = a[c].trim();
    if (y) {
      var v = y.match(tu);
      if (v) {
        var b = 0 | parseInt(v[1], 10), m = v[2];
        b !== 0 && (Jc(m, b), ru(e, m, v[3]), e.getTag().insertRules(b, o)), o.length = 0;
      } else o.push(y);
    }
  }
}, au = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, qi = function(e) {
  var t = document.head, a = e || t, o = document.createElement("style"), c = function(v) {
    for (var b = v.childNodes, m = b.length; m >= 0; m--) {
      var N = b[m];
      if (N && N.nodeType === 1 && N.hasAttribute(Tr)) return N;
    }
  }(a), f = c !== void 0 ? c.nextSibling : null;
  o.setAttribute(Tr, "active"), o.setAttribute("data-styled-version", "5.3.11");
  var y = au();
  return y && o.setAttribute("nonce", y), a.insertBefore(o, f), o;
}, ou = function() {
  function e(a) {
    var o = this.element = qi(a);
    o.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var f = document.styleSheets, y = 0, v = f.length; y < v; y++) {
        var b = f[y];
        if (b.ownerNode === c) return b;
      }
      rn(17);
    }(o), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(a, o) {
    try {
      return this.sheet.insertRule(o, a), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(a) {
    this.sheet.deleteRule(a), this.length--;
  }, t.getRule = function(a) {
    var o = this.sheet.cssRules[a];
    return o !== void 0 && typeof o.cssText == "string" ? o.cssText : "";
  }, e;
}(), iu = function() {
  function e(a) {
    var o = this.element = qi(a);
    this.nodes = o.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(a, o) {
    if (a <= this.length && a >= 0) {
      var c = document.createTextNode(o), f = this.nodes[a];
      return this.element.insertBefore(c, f || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(a) {
    this.element.removeChild(this.nodes[a]), this.length--;
  }, t.getRule = function(a) {
    return a < this.length ? this.nodes[a].textContent : "";
  }, e;
}(), su = function() {
  function e(a) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(a, o) {
    return a <= this.length && (this.rules.splice(a, 0, o), this.length++, !0);
  }, t.deleteRule = function(a) {
    this.rules.splice(a, 1), this.length--;
  }, t.getRule = function(a) {
    return a < this.length ? this.rules[a] : "";
  }, e;
}(), qo = Da, lu = { isServer: !Da, useCSSOMInjection: !Kc }, Hi = function() {
  function e(a, o, c) {
    a === void 0 && (a = Zt), o === void 0 && (o = {}), this.options = jt({}, lu, {}, a), this.gs = o, this.names = new Map(c), this.server = !!a.isServer, !this.server && Da && qo && (qo = !1, function(f) {
      for (var y = document.querySelectorAll(eu), v = 0, b = y.length; v < b; v++) {
        var m = y[v];
        m && m.getAttribute(Tr) !== "active" && (nu(f, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(a) {
    return _n(a);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(a, o) {
    return o === void 0 && (o = !0), new e(jt({}, this.options, {}, a), this.gs, o && this.names || void 0);
  }, t.allocateGSInstance = function(a) {
    return this.gs[a] = (this.gs[a] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (o = this.options).isServer, f = o.useCSSOMInjection, y = o.target, a = c ? new su(y) : f ? new ou(y) : new iu(y), new Qc(a)));
    var a, o, c, f, y;
  }, t.hasNameForId = function(a, o) {
    return this.names.has(a) && this.names.get(a).has(o);
  }, t.registerName = function(a, o) {
    if (_n(a), this.names.has(a)) this.names.get(a).add(o);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(o), this.names.set(a, c);
    }
  }, t.insertRules = function(a, o, c) {
    this.registerName(a, o), this.getTag().insertRules(_n(a), c);
  }, t.clearNames = function(a) {
    this.names.has(a) && this.names.get(a).clear();
  }, t.clearRules = function(a) {
    this.getTag().clearGroup(_n(a)), this.clearNames(a);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(a) {
      for (var o = a.getTag(), c = o.length, f = "", y = 0; y < c; y++) {
        var v = Zc(y);
        if (v !== void 0) {
          var b = a.names.get(v), m = o.getGroup(y);
          if (b && m && b.size) {
            var N = Tr + ".g" + y + '[id="' + v + '"]', x = "";
            b !== void 0 && b.forEach(function(L) {
              L.length > 0 && (x += L + ",");
            }), f += "" + m + N + '{content:"' + x + `"}/*!sc*/
`;
          }
        }
      }
      return f;
    }(this);
  }, e;
}(), cu = /(a)(d)/gi, Ho = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function va(e) {
  var t, a = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) a = Ho(t % 52) + a;
  return (Ho(t % 52) + a).replace(cu, "$1-$2");
}
var xr = function(e, t) {
  for (var a = t.length; a; ) e = 33 * e ^ t.charCodeAt(--a);
  return e;
}, Gi = function(e) {
  return xr(5381, e);
};
function uu(e) {
  for (var t = 0; t < e.length; t += 1) {
    var a = e[t];
    if (Jr(a) && !Ia(a)) return !1;
  }
  return !0;
}
var du = Gi("5.3.11"), fu = function() {
  function e(t, a, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (o === void 0 || o.isStatic) && uu(t), this.componentId = a, this.baseHash = xr(du, a), this.baseStyle = o, Hi.registerId(a);
  }
  return e.prototype.generateAndInjectStyles = function(t, a, o) {
    var c = this.componentId, f = [];
    if (this.baseStyle && f.push(this.baseStyle.generateAndInjectStyles(t, a, o)), this.isStatic && !o.hash) if (this.staticRulesId && a.hasNameForId(c, this.staticRulesId)) f.push(this.staticRulesId);
    else {
      var y = Rr(this.rules, t, a, o).join(""), v = va(xr(this.baseHash, y) >>> 0);
      if (!a.hasNameForId(c, v)) {
        var b = o(y, "." + v, void 0, c);
        a.insertRules(c, v, b);
      }
      f.push(v), this.staticRulesId = v;
    }
    else {
      for (var m = this.rules.length, N = xr(this.baseHash, o.hash), x = "", L = 0; L < m; L++) {
        var X = this.rules[L];
        if (typeof X == "string") x += X;
        else if (X) {
          var R = Rr(X, t, a, o), k = Array.isArray(R) ? R.join("") : R;
          N = xr(N, k + L), x += k;
        }
      }
      if (x) {
        var P = va(N >>> 0);
        if (!a.hasNameForId(c, P)) {
          var U = o(x, "." + P, void 0, c);
          a.insertRules(c, P, U);
        }
        f.push(P);
      }
    }
    return f.join(" ");
  }, e;
}(), pu = /^\s*\/\/.*$/gm, hu = [":", "[", ".", "#"];
function mu(e) {
  var t, a, o, c, f = Zt, y = f.options, v = y === void 0 ? Zt : y, b = f.plugins, m = b === void 0 ? Dn : b, N = new Dc(v), x = [], L = /* @__PURE__ */ function(k) {
    function P(U) {
      if (U) try {
        k(U + "}");
      } catch {
      }
    }
    return function(U, B, H, Y, S, le, be, Ee, Ne, ze) {
      switch (U) {
        case 1:
          if (Ne === 0 && B.charCodeAt(0) === 64) return k(B + ";"), "";
          break;
        case 2:
          if (Ee === 0) return B + "/*|*/";
          break;
        case 3:
          switch (Ee) {
            case 102:
            case 112:
              return k(H[0] + B), "";
            default:
              return B + (ze === 0 ? "/*|*/" : "");
          }
        case -2:
          B.split("/*|*/}").forEach(P);
      }
    };
  }(function(k) {
    x.push(k);
  }), X = function(k, P, U) {
    return P === 0 && hu.indexOf(U[a.length]) !== -1 || U.match(c) ? k : "." + t;
  };
  function R(k, P, U, B) {
    B === void 0 && (B = "&");
    var H = k.replace(pu, ""), Y = P && U ? U + " " + P + " { " + H + " }" : H;
    return t = B, a = P, o = new RegExp("\\" + a + "\\b", "g"), c = new RegExp("(\\" + a + "\\b){2,}"), N(U || !P ? "" : P, Y);
  }
  return N.use([].concat(m, [function(k, P, U) {
    k === 2 && U.length && U[0].lastIndexOf(a) > 0 && (U[0] = U[0].replace(o, X));
  }, L, function(k) {
    if (k === -2) {
      var P = x;
      return x = [], P;
    }
  }])), R.hash = m.length ? m.reduce(function(k, P) {
    return P.name || rn(15), xr(k, P.name);
  }, 5381).toString() : "", R;
}
var Yi = et.createContext();
Yi.Consumer;
var Xi = et.createContext(), gu = (Xi.Consumer, new Hi()), wa = mu();
function yu() {
  return Jt(Yi) || gu;
}
function bu() {
  return Jt(Xi) || wa;
}
var vu = function() {
  function e(t, a) {
    var o = this;
    this.inject = function(c, f) {
      f === void 0 && (f = wa);
      var y = o.name + f.hash;
      c.hasNameForId(o.id, y) || c.insertRules(o.id, y, f(o.rules, y, "@keyframes"));
    }, this.toString = function() {
      return rn(12, String(o.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = a;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = wa), this.name + t.hash;
  }, e;
}(), wu = /([A-Z])/, ku = /([A-Z])/g, Su = /^ms-/, xu = function(e) {
  return "-" + e.toLowerCase();
};
function Go(e) {
  return wu.test(e) ? e.replace(ku, xu).replace(Su, "-ms-") : e;
}
var Yo = function(e) {
  return e == null || e === !1 || e === "";
};
function Rr(e, t, a, o) {
  if (Array.isArray(e)) {
    for (var c, f = [], y = 0, v = e.length; y < v; y += 1) (c = Rr(e[y], t, a, o)) !== "" && (Array.isArray(c) ? f.push.apply(f, c) : f.push(c));
    return f;
  }
  if (Yo(e)) return "";
  if (Ia(e)) return "." + e.styledComponentId;
  if (Jr(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return Rr(b, t, a, o);
  }
  var m;
  return e instanceof vu ? a ? (e.inject(a, o), e.getName(o)) : e : ba(e) ? function N(x, L) {
    var X, R, k = [];
    for (var P in x) x.hasOwnProperty(P) && !Yo(x[P]) && (Array.isArray(x[P]) && x[P].isCss || Jr(x[P]) ? k.push(Go(P) + ":", x[P], ";") : ba(x[P]) ? k.push.apply(k, N(x[P], P)) : k.push(Go(P) + ": " + (X = P, (R = x[P]) == null || typeof R == "boolean" || R === "" ? "" : typeof R != "number" || R === 0 || X in jc || X.startsWith("--") ? String(R).trim() : R + "px") + ";"));
    return L ? [L + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var Xo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Cu(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
  return Jr(e) || ba(e) ? Xo(Rr(Wo(Dn, [e].concat(a)))) : a.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Xo(Rr(Wo(e, a)));
}
var _u = function(e, t, a) {
  return a === void 0 && (a = Zt), e.theme !== a.theme && e.theme || t || a.theme;
}, Eu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Tu = /(^-|-$)/g;
function sa(e) {
  return e.replace(Eu, "-").replace(Tu, "");
}
var Ru = function(e) {
  return va(Gi(e) >>> 0);
};
function En(e) {
  return typeof e == "string" && nt.env.NODE_ENV === "production";
}
var ka = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Au = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ou(e, t, a) {
  var o = e[a];
  ka(t) && ka(o) ? Ki(o, t) : e[a] = t;
}
function Ki(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
  for (var c = 0, f = a; c < f.length; c++) {
    var y = f[c];
    if (ka(y)) for (var v in y) Au(v) && Ou(e, y[v], v);
  }
  return e;
}
var Qi = et.createContext();
Qi.Consumer;
var la = {};
function Zi(e, t, a) {
  var o = Ia(e), c = !En(e), f = t.attrs, y = f === void 0 ? Dn : f, v = t.componentId, b = v === void 0 ? function(B, H) {
    var Y = typeof B != "string" ? "sc" : sa(B);
    la[Y] = (la[Y] || 0) + 1;
    var S = Y + "-" + Ru("5.3.11" + Y + la[Y]);
    return H ? H + "-" + S : S;
  }(t.displayName, t.parentComponentId) : v, m = t.displayName, N = m === void 0 ? function(B) {
    return En(B) ? "styled." + B : "Styled(" + Vo(B) + ")";
  }(e) : m, x = t.displayName && t.componentId ? sa(t.displayName) + "-" + t.componentId : t.componentId || b, L = o && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, X = t.shouldForwardProp;
  o && e.shouldForwardProp && (X = t.shouldForwardProp ? function(B, H, Y) {
    return e.shouldForwardProp(B, H, Y) && t.shouldForwardProp(B, H, Y);
  } : e.shouldForwardProp);
  var R, k = new fu(a, x, o ? e.componentStyle : void 0), P = k.isStatic && y.length === 0, U = function(B, H) {
    return function(Y, S, le, be) {
      var Ee = Y.attrs, Ne = Y.componentStyle, ze = Y.defaultProps, Se = Y.foldedComponentIds, fe = Y.shouldForwardProp, Te = Y.styledComponentId, Re = Y.target, ke = function(M, p, te) {
        M === void 0 && (M = Zt);
        var C = jt({}, p, { theme: M }), re = {};
        return te.forEach(function(Q) {
          var J, z, ne, se = Q;
          for (J in Jr(se) && (se = se(C)), se) C[J] = re[J] = J === "className" ? (z = re[J], ne = se[J], z && ne ? z + " " + ne : z || ne) : se[J];
        }), [C, re];
      }(_u(S, Jt(Qi), ze) || Zt, S, Ee), Ke = ke[0], Pe = ke[1], xe = function(M, p, te, C) {
        var re = yu(), Q = bu(), J = p ? M.generateAndInjectStyles(Zt, re, Q) : M.generateAndInjectStyles(te, re, Q);
        return J;
      }(Ne, be, Ke), Me = le, Ge = Pe.$as || S.$as || Pe.as || S.as || Re, ve = En(Ge), I = Pe !== S ? jt({}, S, {}, Pe) : S, O = {};
      for (var F in I) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? O.as = I[F] : (fe ? fe(F, Lo, Ge) : !ve || Lo(F)) && (O[F] = I[F]));
      return S.style && Pe.style !== S.style && (O.style = jt({}, S.style, {}, Pe.style)), O.className = Array.prototype.concat(Se, Te, xe !== Te ? xe : null, S.className, Pe.className).filter(Boolean).join(" "), O.ref = Me, Zo(Ge, O);
    }(R, B, H, P);
  };
  return U.displayName = N, (R = et.forwardRef(U)).attrs = L, R.componentStyle = k, R.displayName = N, R.shouldForwardProp = X, R.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Dn, R.styledComponentId = x, R.target = o ? e.target : e, R.withComponent = function(B) {
    var H = t.componentId, Y = function(le, be) {
      if (le == null) return {};
      var Ee, Ne, ze = {}, Se = Object.keys(le);
      for (Ne = 0; Ne < Se.length; Ne++) Ee = Se[Ne], be.indexOf(Ee) >= 0 || (ze[Ee] = le[Ee]);
      return ze;
    }(t, ["componentId"]), S = H && H + "-" + (En(B) ? B : sa(Vo(B)));
    return Zi(B, jt({}, Y, { attrs: L, componentId: S }), a);
  }, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(B) {
    this._foldedDefaultProps = o ? Ki({}, e.defaultProps, B) : B;
  } }), Object.defineProperty(R, "toString", { value: function() {
    return "." + R.styledComponentId;
  } }), c && Xc(R, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), R;
}
var Mn = function(e) {
  return function t(a, o, c) {
    if (c === void 0 && (c = Zt), !Ui.isValidElementType(o)) return rn(1, String(o));
    var f = function() {
      return a(o, c, Cu.apply(void 0, arguments));
    };
    return f.withConfig = function(y) {
      return t(a, o, jt({}, c, {}, y));
    }, f.attrs = function(y) {
      return t(a, o, jt({}, c, { attrs: Array.prototype.concat(c.attrs, y).filter(Boolean) }));
    }, f;
  }(Zi, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Mn[e] = Mn(e);
});
const Nu = Mn.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  column-gap: 24px;
  row-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  li {
    .card-img-top {
      border-radius: 0 !important;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    .card-event-details {
      flex-direction: column;
      .card-event-icons {
        width: 100%;
        &:nth-child(1) {
          margin-bottom: 24px;
        }
      }
    }
  }
`, Pu = () => {
  const { feeds: e } = Jt(Ra);
  return /* @__PURE__ */ mt.jsx(Nu, { "data-testid": "grid-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ mt.jsx("li", { children: /* @__PURE__ */ mt.jsx(
    Kt,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${In(t.startDate, "COMPLETE")} <br /> ${$i(
        t.startDate,
        t.endDate
      )}
              </span>`,
      eventLocation: t.location,
      clickable: !!t.alias,
      cardLink: `${t.alias}/?eventDate=${In(
        t.startDate,
        "ISO"
      )}`,
      title: t.title,
      image: t.imageUrl,
      imageAltText: t.title,
      linkLabel: t.eventButtonText,
      linkUrl: t.eventButtonUrl
    }
  ) }, t.id)) });
}, Ji = ({ header: e, ctaButton: t, dataSource: a, maxItems: o }) => (Qr(() => {
  typeof window < "u" && ri({
    packageName: "component-events",
    component: "CardsGridEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: t,
      dataSource: a,
      maxItems: o
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ mt.jsx(Na, { header: e, ctaButton: t, dataSource: a, maxItems: o, children: /* @__PURE__ */ mt.jsx(Pu, {}) }));
Ji.propTypes = Li;
const Fu = Mn.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  li {
    max-width: 100%;
    width: 100%;
  }
  .card {
    height: 235px;
    .card-img-top {
      width: 235px;
      height: auto;
      border-radius: 0 !important;
    }
    .card-event-icons {
      &:nth-child(1) {
        width: 58%;
      }
      &:nth-child(2) {
        width: 42%;
      }
    }
  }
  @media (max-width: 992px) {
    .card {
      height: 100%;
      .card-event-details {
        flex-direction: column;
        .card-event-icons {
          width: 100%;
          &:nth-child(1) {
            margin-bottom: 24px;
          }
        }
      }
      .card-img-top {
        height: auto;
        width: auto;
      }
    }
  }
`, Iu = () => {
  const { feeds: e } = Jt(Ra);
  return /* @__PURE__ */ mt.jsx(Fu, { "data-testid": "list-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ mt.jsx("li", { children: /* @__PURE__ */ mt.jsx(
    Kt,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${In(t.startDate, "COMPLETE")} <br /> ${$i(
        t.startDate,
        t.endDate
      )}
              </span>`,
      eventLocation: t.location,
      clickable: !!t.alias,
      cardLink: `${t.alias}/?eventDate=${In(
        t.startDate,
        "ISO"
      )}`,
      title: t.title,
      image: t.imageUrl,
      imageAltText: t.title,
      linkLabel: t.eventButtonText,
      linkUrl: t.eventButtonUrl
    }
  ) }, t.id)) });
}, es = ({ header: e, ctaButton: t, dataSource: a, maxItems: o }) => (Qr(() => {
  typeof window < "u" && ri({
    packageName: "component-events",
    component: "CardsListEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: t,
      dataSource: a,
      maxItems: o
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ mt.jsx(Na, { header: e, ctaButton: t, dataSource: a, maxItems: o, children: /* @__PURE__ */ mt.jsx(Iu, {}) }));
es.propTypes = Li;
var ts, Ko = Jo;
ts = Ko.createRoot, Ko.hydrateRoot;
const rs = (e, t, a) => {
  ts(a).render(et.createElement(e, t));
}, Mu = ({ targetSelector: e, props: t }) => {
  rs(Ji, t, document.querySelector(e));
}, Lu = ({ targetSelector: e, props: t }) => {
  rs(es, t, document.querySelector(e));
};
export {
  Ji as CardsGridEvents,
  es as CardsListEvents,
  Mu as initCardsGridEventsComponent,
  Lu as initCardsListEventsComponent
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
