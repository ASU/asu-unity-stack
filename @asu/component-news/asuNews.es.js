import Ze, { Component as Js, createContext as Qs, forwardRef as Ro, useRef as Zs, useImperativeHandle as Ks, useId as el, useContext as $t, createElement as Eo, useState as Ar, useEffect as rr } from "react";
import Oo from "react-dom";
function Io(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Po = { exports: {} }, Xr = {};
var Ci;
function tl() {
  if (Ci) return Xr;
  Ci = 1;
  var e = Ze, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, h, f) {
    var x, k = {}, j = null, B = null;
    f !== void 0 && (j = "" + f), h.key !== void 0 && (j = "" + h.key), h.ref !== void 0 && (B = h.ref);
    for (x in h) n.call(h, x) && !s.hasOwnProperty(x) && (k[x] = h[x]);
    if (m && m.defaultProps) for (x in h = m.defaultProps, h) k[x] === void 0 && (k[x] = h[x]);
    return { $$typeof: t, type: m, key: j, ref: B, props: k, _owner: o.current };
  }
  return Xr.Fragment = r, Xr.jsx = d, Xr.jsxs = d, Xr;
}
Po.exports = tl();
var Qe = Po.exports;
function Ua(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jo = { exports: {} }, Jr = {}, _i;
function rl() {
  if (_i) return Jr;
  _i = 1;
  var e = Ze, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, h, f) {
    var x, k = {}, j = null, B = null;
    f !== void 0 && (j = "" + f), h.key !== void 0 && (j = "" + h.key), h.ref !== void 0 && (B = h.ref);
    for (x in h) n.call(h, x) && !s.hasOwnProperty(x) && (k[x] = h[x]);
    if (m && m.defaultProps) for (x in h = m.defaultProps, h) k[x] === void 0 && (k[x] = h[x]);
    return { $$typeof: t, type: m, key: j, ref: B, props: k, _owner: o.current };
  }
  return Jr.Fragment = r, Jr.jsx = d, Jr.jsxs = d, Jr;
}
jo.exports = rl();
var z = jo.exports, No = { exports: {} }, da, Ti;
function nl() {
  if (Ti) return da;
  Ti = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return da = e, da;
}
var fa, Ai;
function al() {
  if (Ai) return fa;
  Ai = 1;
  var e = nl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, fa = function() {
    function n(d, m, h, f, x, k) {
      if (k !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
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
  }, fa;
}
No.exports = al()();
var il = No.exports;
const l = /* @__PURE__ */ Ua(il), ol = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), pa = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), Lo = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.string,
    header: l.string,
    body: l.string
  })
}), Wa = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var Fo = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", d = 0; d < arguments.length; d++) {
        var m = arguments[d];
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
      var d = "";
      for (var m in s)
        t.call(s, m) && s[m] && (d = o(d, m));
      return d;
    }
    function o(s, d) {
      return d ? s ? s + " " + d : s + d : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Fo);
var sl = Fo.exports;
const Ir = /* @__PURE__ */ Ua(sl), ll = () => {
  const [e, t] = Ar(), [r, n] = Ar(!1), [o, s] = Ar(!1), [d, m] = Ar("");
  return rr(() => {
    d && (() => {
      s(null), n(!0);
      try {
        fetch(d).then((h) => h.json()).then((h) => {
          t(h), n(!1);
        }).catch((h) => {
          s(h), n(!1);
        });
      } catch (h) {
        s(h);
      }
    })();
  }, [d]), [{ data: e, loading: r, error: o }, m];
}, ul = (e) => (e || []).join(" "), {
  entries: Mo,
  setPrototypeOf: Ri,
  isFrozen: cl,
  getPrototypeOf: dl,
  getOwnPropertyDescriptor: fl
} = Object;
let {
  freeze: dt,
  seal: vt,
  create: Do
} = Object, {
  apply: _a,
  construct: Ta
} = typeof Reflect < "u" && Reflect;
dt || (dt = function(e) {
  return e;
});
vt || (vt = function(e) {
  return e;
});
_a || (_a = function(e, t, r) {
  return e.apply(t, r);
});
Ta || (Ta = function(e, t) {
  return new e(...t);
});
const Rn = ft(Array.prototype.forEach), pl = ft(Array.prototype.lastIndexOf), Ei = ft(Array.prototype.pop), Qr = ft(Array.prototype.push), hl = ft(Array.prototype.splice), Mn = ft(String.prototype.toLowerCase), ha = ft(String.prototype.toString), Oi = ft(String.prototype.match), Zr = ft(String.prototype.replace), gl = ft(String.prototype.indexOf), ml = ft(String.prototype.trim), _t = ft(Object.prototype.hasOwnProperty), ct = ft(RegExp.prototype.test), Kr = bl(TypeError);
function ft(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    return _a(e, t, n);
  };
}
function bl(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ta(e, r);
  };
}
function we(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mn;
  Ri && Ri(e, null);
  let n = t.length;
  for (; n--; ) {
    let o = t[n];
    if (typeof o == "string") {
      const s = r(o);
      s !== o && (cl(t) || (t[n] = s), o = s);
    }
    e[o] = !0;
  }
  return e;
}
function yl(e) {
  for (let t = 0; t < e.length; t++)
    _t(e, t) || (e[t] = null);
  return e;
}
function mr(e) {
  const t = Do(null);
  for (const [r, n] of Mo(e))
    _t(e, r) && (Array.isArray(n) ? t[r] = yl(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = mr(n) : t[r] = n);
  return t;
}
function en(e, t) {
  for (; e !== null; ) {
    const n = fl(e, t);
    if (n) {
      if (n.get)
        return ft(n.get);
      if (typeof n.value == "function")
        return ft(n.value);
    }
    e = dl(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Ii = dt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ga = dt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ma = dt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), vl = dt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ba = dt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), wl = dt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Pi = dt(["#text"]), ji = dt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ya = dt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ni = dt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), En = dt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), kl = vt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Sl = vt(/<%[\w\W]*|[\w\W]*%>/gm), xl = vt(/\$\{[\w\W]*/gm), Cl = vt(/^data-[\-\w.\u00B7-\uFFFF]+$/), _l = vt(/^aria-[\-\w]+$/), zo = vt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Tl = vt(/^(?:\w+script|data):/i), Al = vt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), $o = vt(/^html$/i), Rl = vt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Li = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: _l,
  ATTR_WHITESPACE: Al,
  CUSTOM_ELEMENT: Rl,
  DATA_ATTR: Cl,
  DOCTYPE_NAME: $o,
  ERB_EXPR: Sl,
  IS_ALLOWED_URI: zo,
  IS_SCRIPT_OR_DATA: Tl,
  MUSTACHE_EXPR: kl,
  TMPLIT_EXPR: xl
});
const tn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, El = function() {
  return typeof window > "u" ? null : window;
}, Ol = function(e, t) {
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
}, Fi = function() {
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
function Bo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : El();
  const t = (S) => Bo(S);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, o = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: d,
    Node: m,
    Element: h,
    NodeFilter: f,
    NamedNodeMap: x = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: k,
    DOMParser: j,
    trustedTypes: B
  } = e, _ = h.prototype, w = en(_, "cloneNode"), P = en(_, "remove"), M = en(_, "nextSibling"), U = en(_, "childNodes"), q = en(_, "parentNode");
  if (typeof d == "function") {
    const S = r.createElement("template");
    S.content && S.content.ownerDocument && (r = S.content.ownerDocument);
  }
  let G, C = "";
  const {
    implementation: ce,
    createNodeIterator: ye,
    createDocumentFragment: Te,
    getElementsByTagName: Ie
  } = r, {
    importNode: $e
  } = n;
  let Se = Fi();
  t.isSupported = typeof Mo == "function" && typeof q == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: fe,
    ERB_EXPR: Ae,
    TMPLIT_EXPR: Re,
    DATA_ATTR: ke,
    ARIA_ATTR: Ke,
    IS_SCRIPT_OR_DATA: Pe,
    ATTR_WHITESPACE: xe,
    CUSTOM_ELEMENT: Me
  } = Li;
  let {
    IS_ALLOWED_URI: Ye
  } = Li, ve = null;
  const L = we({}, [...Ii, ...ga, ...ma, ...ba, ...Pi]);
  let I = null;
  const N = we({}, [...ji, ...ya, ...Ni, ...En]);
  let $ = Object.seal(Do(null, {
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
  })), b = null, te = null, T = !0, re = !0, Q = !1, K = !0, H = !1, ne = !0, se = !1, Z = !1, pe = !1, ee = !1, le = !1, We = !1, de = !0, et = !1;
  const He = "user-content-";
  let he = !0, W = !1, ae = {}, Je = null;
  const st = we({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Fe = null;
  const ir = we({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bt = null;
  const vr = we({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), At = "http://www.w3.org/1998/Math/MathML", wt = "http://www.w3.org/2000/svg", pt = "http://www.w3.org/1999/xhtml";
  let Rt = pt, or = !1, sr = null;
  const zr = we({}, [At, wt, pt], ha);
  let tt = we({}, ["mi", "mo", "mn", "ms", "mtext"]), Et = we({}, ["annotation-xml"]);
  const Ut = we({}, ["title", "style", "font", "a", "script"]);
  let Ce = null;
  const jt = ["application/xhtml+xml", "text/html"], Wt = "text/html";
  let De = null, rt = null;
  const Ht = r.createElement("form"), bt = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, Vt = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(rt && rt === S)) {
      if ((!S || typeof S != "object") && (S = {}), S = mr(S), Ce = // eslint-disable-next-line unicorn/prefer-includes
      jt.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? Wt : S.PARSER_MEDIA_TYPE, De = Ce === "application/xhtml+xml" ? ha : Mn, ve = _t(S, "ALLOWED_TAGS") ? we({}, S.ALLOWED_TAGS, De) : L, I = _t(S, "ALLOWED_ATTR") ? we({}, S.ALLOWED_ATTR, De) : N, sr = _t(S, "ALLOWED_NAMESPACES") ? we({}, S.ALLOWED_NAMESPACES, ha) : zr, Bt = _t(S, "ADD_URI_SAFE_ATTR") ? we(mr(vr), S.ADD_URI_SAFE_ATTR, De) : vr, Fe = _t(S, "ADD_DATA_URI_TAGS") ? we(mr(ir), S.ADD_DATA_URI_TAGS, De) : ir, Je = _t(S, "FORBID_CONTENTS") ? we({}, S.FORBID_CONTENTS, De) : st, b = _t(S, "FORBID_TAGS") ? we({}, S.FORBID_TAGS, De) : {}, te = _t(S, "FORBID_ATTR") ? we({}, S.FORBID_ATTR, De) : {}, ae = _t(S, "USE_PROFILES") ? S.USE_PROFILES : !1, T = S.ALLOW_ARIA_ATTR !== !1, re = S.ALLOW_DATA_ATTR !== !1, Q = S.ALLOW_UNKNOWN_PROTOCOLS || !1, K = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, H = S.SAFE_FOR_TEMPLATES || !1, ne = S.SAFE_FOR_XML !== !1, se = S.WHOLE_DOCUMENT || !1, ee = S.RETURN_DOM || !1, le = S.RETURN_DOM_FRAGMENT || !1, We = S.RETURN_TRUSTED_TYPE || !1, pe = S.FORCE_BODY || !1, de = S.SANITIZE_DOM !== !1, et = S.SANITIZE_NAMED_PROPS || !1, he = S.KEEP_CONTENT !== !1, W = S.IN_PLACE || !1, Ye = S.ALLOWED_URI_REGEXP || zo, Rt = S.NAMESPACE || pt, tt = S.MATHML_TEXT_INTEGRATION_POINTS || tt, Et = S.HTML_INTEGRATION_POINTS || Et, $ = S.CUSTOM_ELEMENT_HANDLING || {}, S.CUSTOM_ELEMENT_HANDLING && bt(S.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && ($.tagNameCheck = S.CUSTOM_ELEMENT_HANDLING.tagNameCheck), S.CUSTOM_ELEMENT_HANDLING && bt(S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && ($.attributeNameCheck = S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), S.CUSTOM_ELEMENT_HANDLING && typeof S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && ($.allowCustomizedBuiltInElements = S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), H && (re = !1), le && (ee = !0), ae && (ve = we({}, Pi), I = [], ae.html === !0 && (we(ve, Ii), we(I, ji)), ae.svg === !0 && (we(ve, ga), we(I, ya), we(I, En)), ae.svgFilters === !0 && (we(ve, ma), we(I, ya), we(I, En)), ae.mathMl === !0 && (we(ve, ba), we(I, Ni), we(I, En))), S.ADD_TAGS && (ve === L && (ve = mr(ve)), we(ve, S.ADD_TAGS, De)), S.ADD_ATTR && (I === N && (I = mr(I)), we(I, S.ADD_ATTR, De)), S.ADD_URI_SAFE_ATTR && we(Bt, S.ADD_URI_SAFE_ATTR, De), S.FORBID_CONTENTS && (Je === st && (Je = mr(Je)), we(Je, S.FORBID_CONTENTS, De)), he && (ve["#text"] = !0), se && we(ve, ["html", "head", "body"]), ve.table && (we(ve, ["tbody"]), delete b.tbody), S.TRUSTED_TYPES_POLICY) {
        if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Kr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Kr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        G = S.TRUSTED_TYPES_POLICY, C = G.createHTML("");
      } else
        G === void 0 && (G = Ol(B, o)), G !== null && typeof C == "string" && (C = G.createHTML(""));
      dt && dt(S), rt = S;
    }
  }, qt = we({}, [...ga, ...ma, ...vl]), Gt = we({}, [...ba, ...wl]), wr = function(S) {
    let J = q(S);
    (!J || !J.tagName) && (J = {
      namespaceURI: Rt,
      tagName: "template"
    });
    const Y = Mn(S.tagName), _e = Mn(J.tagName);
    return sr[S.namespaceURI] ? S.namespaceURI === wt ? J.namespaceURI === pt ? Y === "svg" : J.namespaceURI === At ? Y === "svg" && (_e === "annotation-xml" || tt[_e]) : !!qt[Y] : S.namespaceURI === At ? J.namespaceURI === pt ? Y === "math" : J.namespaceURI === wt ? Y === "math" && Et[_e] : !!Gt[Y] : S.namespaceURI === pt ? J.namespaceURI === wt && !Et[_e] || J.namespaceURI === At && !tt[_e] ? !1 : !Gt[Y] && (Ut[Y] || !qt[Y]) : !!(Ce === "application/xhtml+xml" && sr[S.namespaceURI]) : !1;
  }, yt = function(S) {
    Qr(t.removed, {
      element: S
    });
    try {
      q(S).removeChild(S);
    } catch {
      P(S);
    }
  }, Nt = function(S, J) {
    try {
      Qr(t.removed, {
        attribute: J.getAttributeNode(S),
        from: J
      });
    } catch {
      Qr(t.removed, {
        attribute: null,
        from: J
      });
    }
    if (J.removeAttribute(S), S === "is")
      if (ee || le)
        try {
          yt(J);
        } catch {
        }
      else
        try {
          J.setAttribute(S, "");
        } catch {
        }
  }, kr = function(S) {
    let J = null, Y = null;
    if (pe)
      S = "<remove></remove>" + S;
    else {
      const Be = Oi(S, /^[\r\n\t ]+/);
      Y = Be && Be[0];
    }
    Ce === "application/xhtml+xml" && Rt === pt && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const _e = G ? G.createHTML(S) : S;
    if (Rt === pt)
      try {
        J = new j().parseFromString(_e, Ce);
      } catch {
      }
    if (!J || !J.documentElement) {
      J = ce.createDocument(Rt, "template", null);
      try {
        J.documentElement.innerHTML = or ? C : _e;
      } catch {
      }
    }
    const Ge = J.body || J.documentElement;
    return S && Y && Ge.insertBefore(r.createTextNode(Y), Ge.childNodes[0] || null), Rt === pt ? Ie.call(J, se ? "html" : "body")[0] : se ? J.documentElement : Ge;
  }, Sr = function(S) {
    return ye.call(
      S.ownerDocument || S,
      S,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Ot = function(S) {
    return S instanceof k && (typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || !(S.attributes instanceof x) || typeof S.removeAttribute != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function");
  }, lr = function(S) {
    return typeof m == "function" && S instanceof m;
  };
  function nt(S, J, Y) {
    Rn(S, (_e) => {
      _e.call(t, J, Y, rt);
    });
  }
  const Yt = function(S) {
    let J = null;
    if (nt(Se.beforeSanitizeElements, S, null), Ot(S))
      return yt(S), !0;
    const Y = De(S.nodeName);
    if (nt(Se.uponSanitizeElement, S, {
      tagName: Y,
      allowedTags: ve
    }), S.hasChildNodes() && !lr(S.firstElementChild) && ct(/<[/\w]/g, S.innerHTML) && ct(/<[/\w]/g, S.textContent) || S.nodeType === tn.progressingInstruction || ne && S.nodeType === tn.comment && ct(/<[/\w]/g, S.data))
      return yt(S), !0;
    if (!ve[Y] || b[Y]) {
      if (!b[Y] && It(Y) && ($.tagNameCheck instanceof RegExp && ct($.tagNameCheck, Y) || $.tagNameCheck instanceof Function && $.tagNameCheck(Y)))
        return !1;
      if (he && !Je[Y]) {
        const _e = q(S) || S.parentNode, Ge = U(S) || S.childNodes;
        if (Ge && _e) {
          const Be = Ge.length;
          for (let lt = Be - 1; lt >= 0; --lt) {
            const je = w(Ge[lt], !0);
            je.__removalCount = (S.__removalCount || 0) + 1, _e.insertBefore(je, M(S));
          }
        }
      }
      return yt(S), !0;
    }
    return S instanceof h && !wr(S) || (Y === "noscript" || Y === "noembed" || Y === "noframes") && ct(/<\/no(script|embed|frames)/i, S.innerHTML) ? (yt(S), !0) : (H && S.nodeType === tn.text && (J = S.textContent, Rn([fe, Ae, Re], (_e) => {
      J = Zr(J, _e, " ");
    }), S.textContent !== J && (Qr(t.removed, {
      element: S.cloneNode()
    }), S.textContent = J)), nt(Se.afterSanitizeElements, S, null), !1);
  }, xr = function(S, J, Y) {
    if (de && (J === "id" || J === "name") && (Y in r || Y in Ht))
      return !1;
    if (!(re && !te[J] && ct(ke, J)) && !(T && ct(Ke, J))) {
      if (!I[J] || te[J]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(It(S) && ($.tagNameCheck instanceof RegExp && ct($.tagNameCheck, S) || $.tagNameCheck instanceof Function && $.tagNameCheck(S)) && ($.attributeNameCheck instanceof RegExp && ct($.attributeNameCheck, J) || $.attributeNameCheck instanceof Function && $.attributeNameCheck(J)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          J === "is" && $.allowCustomizedBuiltInElements && ($.tagNameCheck instanceof RegExp && ct($.tagNameCheck, Y) || $.tagNameCheck instanceof Function && $.tagNameCheck(Y)))
        ) return !1;
      } else if (!Bt[J] && !ct(Ye, Zr(Y, xe, "")) && !((J === "src" || J === "xlink:href" || J === "href") && S !== "script" && gl(Y, "data:") === 0 && Fe[S]) && !(Q && !ct(Pe, Zr(Y, xe, ""))) && Y)
        return !1;
    }
    return !0;
  }, It = function(S) {
    return S !== "annotation-xml" && Oi(S, Me);
  }, Cr = function(S) {
    nt(Se.beforeSanitizeAttributes, S, null);
    const {
      attributes: J
    } = S;
    if (!J || Ot(S))
      return;
    const Y = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: I,
      forceKeepAttr: void 0
    };
    let _e = J.length;
    for (; _e--; ) {
      const Ge = J[_e], {
        name: Be,
        namespaceURI: lt,
        value: je
      } = Ge, ut = De(Be);
      let Xe = Be === "value" ? je : ml(je);
      if (Y.attrName = ut, Y.attrValue = Xe, Y.keepAttr = !0, Y.forceKeepAttr = void 0, nt(Se.uponSanitizeAttribute, S, Y), Xe = Y.attrValue, et && (ut === "id" || ut === "name") && (Nt(Be, S), Xe = He + Xe), ne && ct(/((--!?|])>)|<\/(style|title)/i, Xe)) {
        Nt(Be, S);
        continue;
      }
      if (Y.forceKeepAttr || (Nt(Be, S), !Y.keepAttr))
        continue;
      if (!K && ct(/\/>/i, Xe)) {
        Nt(Be, S);
        continue;
      }
      H && Rn([fe, Ae, Re], (_r) => {
        Xe = Zr(Xe, _r, " ");
      });
      const Xt = De(S.nodeName);
      if (xr(Xt, ut, Xe)) {
        if (G && typeof B == "object" && typeof B.getAttributeType == "function" && !lt)
          switch (B.getAttributeType(Xt, ut)) {
            case "TrustedHTML": {
              Xe = G.createHTML(Xe);
              break;
            }
            case "TrustedScriptURL": {
              Xe = G.createScriptURL(Xe);
              break;
            }
          }
        try {
          lt ? S.setAttributeNS(lt, Be, Xe) : S.setAttribute(Be, Xe), Ot(S) ? yt(S) : Ei(t.removed);
        } catch {
        }
      }
    }
    nt(Se.afterSanitizeAttributes, S, null);
  }, ur = function S(J) {
    let Y = null;
    const _e = Sr(J);
    for (nt(Se.beforeSanitizeShadowDOM, J, null); Y = _e.nextNode(); )
      nt(Se.uponSanitizeShadowNode, Y, null), Yt(Y), Cr(Y), Y.content instanceof s && S(Y.content);
    nt(Se.afterSanitizeShadowDOM, J, null);
  };
  return t.sanitize = function(S) {
    let J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = null, _e = null, Ge = null, Be = null;
    if (or = !S, or && (S = "<!-->"), typeof S != "string" && !lr(S))
      if (typeof S.toString == "function") {
        if (S = S.toString(), typeof S != "string")
          throw Kr("dirty is not a string, aborting");
      } else
        throw Kr("toString is not a function");
    if (!t.isSupported)
      return S;
    if (Z || Vt(J), t.removed = [], typeof S == "string" && (W = !1), W) {
      if (S.nodeName) {
        const ut = De(S.nodeName);
        if (!ve[ut] || b[ut])
          throw Kr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (S instanceof m)
      Y = kr("<!---->"), _e = Y.ownerDocument.importNode(S, !0), _e.nodeType === tn.element && _e.nodeName === "BODY" || _e.nodeName === "HTML" ? Y = _e : Y.appendChild(_e);
    else {
      if (!ee && !H && !se && // eslint-disable-next-line unicorn/prefer-includes
      S.indexOf("<") === -1)
        return G && We ? G.createHTML(S) : S;
      if (Y = kr(S), !Y)
        return ee ? null : We ? C : "";
    }
    Y && pe && yt(Y.firstChild);
    const lt = Sr(W ? S : Y);
    for (; Ge = lt.nextNode(); )
      Yt(Ge), Cr(Ge), Ge.content instanceof s && ur(Ge.content);
    if (W)
      return S;
    if (ee) {
      if (le)
        for (Be = Te.call(Y.ownerDocument); Y.firstChild; )
          Be.appendChild(Y.firstChild);
      else
        Be = Y;
      return (I.shadowroot || I.shadowrootmode) && (Be = $e.call(n, Be, !0)), Be;
    }
    let je = se ? Y.outerHTML : Y.innerHTML;
    return se && ve["!doctype"] && Y.ownerDocument && Y.ownerDocument.doctype && Y.ownerDocument.doctype.name && ct($o, Y.ownerDocument.doctype.name) && (je = "<!DOCTYPE " + Y.ownerDocument.doctype.name + `>
` + je), H && Rn([fe, Ae, Re], (ut) => {
      je = Zr(je, ut, " ");
    }), G && We ? G.createHTML(je) : je;
  }, t.setConfig = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Vt(S), Z = !0;
  }, t.clearConfig = function() {
    rt = null, Z = !1;
  }, t.isValidAttribute = function(S, J, Y) {
    rt || Vt({});
    const _e = De(S), Ge = De(J);
    return xr(_e, Ge, Y);
  }, t.addHook = function(S, J) {
    typeof J == "function" && Qr(Se[S], J);
  }, t.removeHook = function(S, J) {
    if (J !== void 0) {
      const Y = pl(Se[S], J);
      return Y === -1 ? void 0 : hl(Se[S], Y, 1)[0];
    }
    return Ei(Se[S]);
  }, t.removeHooks = function(S) {
    Se[S] = [];
  }, t.removeAllHooks = function() {
    Se = Fi();
  }, t;
}
var Il = Bo();
const Rr = (e) => ({ __html: Il.sanitize(e) });
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
const Pl = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: o = "",
  text: s = "",
  region: d = "",
  component: m = ""
}) => {
  const { dataLayer: h } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: d.toLowerCase(),
    section: o.toLowerCase(),
    text: s.toLowerCase(),
    component: m.toLowerCase()
  };
  h && h.push(f);
};
var gr = {}, Mi;
function jl() {
  if (Mi) return gr;
  Mi = 1;
  var e = Ze;
  function t(a) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, g = 1; g < arguments.length; g++) c += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + a + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, o = {}, s = {};
  function d(a) {
    return r.call(s, a) ? !0 : r.call(o, a) ? !1 : n.test(a) ? s[a] = !0 : (o[a] = !0, !1);
  }
  function m(a, c, g, v, O, A, F) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = v, this.attributeNamespace = O, this.mustUseProperty = g, this.propertyName = a, this.type = c, this.sanitizeURL = A, this.removeEmptyString = F;
  }
  var h = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    h[a] = new m(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var c = a[0];
    h[c] = new m(c, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    h[a] = new m(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    h[a] = new m(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    h[a] = new m(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    h[a] = new m(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    h[a] = new m(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    h[a] = new m(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    h[a] = new m(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var f = /[\-:]([a-z])/g;
  function x(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var c = a.replace(
      f,
      x
    );
    h[c] = new m(c, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var c = a.replace(f, x);
    h[c] = new m(c, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var c = a.replace(f, x);
    h[c] = new m(c, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    h[a] = new m(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), h.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    h[a] = new m(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var k = {
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
  }, j = ["Webkit", "ms", "Moz", "O"];
  Object.keys(k).forEach(function(a) {
    j.forEach(function(c) {
      c = c + a.charAt(0).toUpperCase() + a.substring(1), k[c] = k[a];
    });
  });
  var B = /["'&<>]/;
  function _(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var c = B.exec(a);
    if (c) {
      var g = "", v, O = 0;
      for (v = c.index; v < a.length; v++) {
        switch (a.charCodeAt(v)) {
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
        O !== v && (g += a.substring(O, v)), O = v + 1, g += c;
      }
      a = O !== v ? g + a.substring(O, v) : g;
    }
    return a;
  }
  var w = /([A-Z])/g, P = /^ms-/, M = Array.isArray;
  function U(a, c) {
    return { insertionMode: a, selectedValue: c };
  }
  function q(a, c, g) {
    switch (c) {
      case "select":
        return U(1, g.value != null ? g.value : g.defaultValue);
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
  var G = /* @__PURE__ */ new Map();
  function C(a, c, g) {
    if (typeof g != "object") throw Error(t(62));
    c = !0;
    for (var v in g) if (r.call(g, v)) {
      var O = g[v];
      if (O != null && typeof O != "boolean" && O !== "") {
        if (v.indexOf("--") === 0) {
          var A = _(v);
          O = _(("" + O).trim());
        } else {
          A = v;
          var F = G.get(A);
          F !== void 0 || (F = _(A.replace(w, "-$1").toLowerCase().replace(P, "-ms-")), G.set(A, F)), A = F, O = typeof O == "number" ? O === 0 || r.call(k, v) ? "" + O : O + "px" : _(("" + O).trim());
        }
        c ? (c = !1, a.push(' style="', A, ":", O)) : a.push(";", A, ":", O);
      }
    }
    c || a.push('"');
  }
  function ce(a, c, g, v) {
    switch (g) {
      case "style":
        C(a, c, v);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (c = h.hasOwnProperty(g) ? h[g] : null, c !== null) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (g = c.attributeName, c.type) {
          case 3:
            v && a.push(" ", g, '=""');
            break;
          case 4:
            v === !0 ? a.push(" ", g, '=""') : v !== !1 && a.push(" ", g, '="', _(v), '"');
            break;
          case 5:
            isNaN(v) || a.push(" ", g, '="', _(v), '"');
            break;
          case 6:
            !isNaN(v) && 1 <= v && a.push(" ", g, '="', _(v), '"');
            break;
          default:
            c.sanitizeURL && (v = "" + v), a.push(" ", g, '="', _(v), '"');
        }
      } else if (d(g)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = g.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        a.push(" ", g, '="', _(v), '"');
      }
    }
  }
  function ye(a, c, g) {
    if (c != null) {
      if (g != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && a.push("" + c);
    }
  }
  function Te(a) {
    var c = "";
    return e.Children.forEach(a, function(g) {
      g != null && (c += g);
    }), c;
  }
  function Ie(a, c, g, v) {
    a.push(fe(g));
    var O = g = null, A;
    for (A in c) if (r.call(c, A)) {
      var F = c[A];
      if (F != null) switch (A) {
        case "children":
          g = F;
          break;
        case "dangerouslySetInnerHTML":
          O = F;
          break;
        default:
          ce(a, v, A, F);
      }
    }
    return a.push(">"), ye(a, O, g), typeof g == "string" ? (a.push(_(g)), null) : g;
  }
  var $e = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Se = /* @__PURE__ */ new Map();
  function fe(a) {
    var c = Se.get(a);
    if (c === void 0) {
      if (!$e.test(a)) throw Error(t(65, a));
      c = "<" + a, Se.set(a, c);
    }
    return c;
  }
  function Ae(a, c, g, v, O) {
    switch (c) {
      case "select":
        a.push(fe("select"));
        var A = null, F = null;
        for (ge in g) if (r.call(g, ge)) {
          var X = g[ge];
          if (X != null) switch (ge) {
            case "children":
              A = X;
              break;
            case "dangerouslySetInnerHTML":
              F = X;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ce(a, v, ge, X);
          }
        }
        return a.push(">"), ye(a, F, A), A;
      case "option":
        F = O.selectedValue, a.push(fe("option"));
        var ie = X = null, ue = null, ge = null;
        for (A in g) if (r.call(g, A)) {
          var Ve = g[A];
          if (Ve != null) switch (A) {
            case "children":
              X = Ve;
              break;
            case "selected":
              ue = Ve;
              break;
            case "dangerouslySetInnerHTML":
              ge = Ve;
              break;
            case "value":
              ie = Ve;
            default:
              ce(a, v, A, Ve);
          }
        }
        if (F != null) if (g = ie !== null ? "" + ie : Te(X), M(F)) {
          for (v = 0; v < F.length; v++)
            if ("" + F[v] === g) {
              a.push(' selected=""');
              break;
            }
        } else "" + F === g && a.push(' selected=""');
        else ue && a.push(' selected=""');
        return a.push(">"), ye(a, ge, X), X;
      case "textarea":
        a.push(fe("textarea")), ge = F = A = null;
        for (X in g) if (r.call(g, X) && (ie = g[X], ie != null)) switch (X) {
          case "children":
            ge = ie;
            break;
          case "value":
            A = ie;
            break;
          case "defaultValue":
            F = ie;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ce(
              a,
              v,
              X,
              ie
            );
        }
        if (A === null && F !== null && (A = F), a.push(">"), ge != null) {
          if (A != null) throw Error(t(92));
          if (M(ge) && 1 < ge.length) throw Error(t(93));
          A = "" + ge;
        }
        return typeof A == "string" && A[0] === `
` && a.push(`
`), A !== null && a.push(_("" + A)), null;
      case "input":
        a.push(fe("input")), ie = ge = X = A = null;
        for (F in g) if (r.call(g, F) && (ue = g[F], ue != null)) switch (F) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ie = ue;
            break;
          case "defaultValue":
            X = ue;
            break;
          case "checked":
            ge = ue;
            break;
          case "value":
            A = ue;
            break;
          default:
            ce(a, v, F, ue);
        }
        return ge !== null ? ce(a, v, "checked", ge) : ie !== null && ce(a, v, "checked", ie), A !== null ? ce(a, v, "value", A) : X !== null && ce(a, v, "value", X), a.push("/>"), null;
      case "menuitem":
        a.push(fe("menuitem"));
        for (var kt in g) if (r.call(g, kt) && (A = g[kt], A != null)) switch (kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ce(a, v, kt, A);
        }
        return a.push(">"), null;
      case "title":
        a.push(fe("title")), A = null;
        for (Ve in g) if (r.call(g, Ve) && (F = g[Ve], F != null)) switch (Ve) {
          case "children":
            A = F;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ce(a, v, Ve, F);
        }
        return a.push(">"), A;
      case "listing":
      case "pre":
        a.push(fe(c)), F = A = null;
        for (ie in g) if (r.call(g, ie) && (X = g[ie], X != null)) switch (ie) {
          case "children":
            A = X;
            break;
          case "dangerouslySetInnerHTML":
            F = X;
            break;
          default:
            ce(a, v, ie, X);
        }
        if (a.push(">"), F != null) {
          if (A != null) throw Error(t(60));
          if (typeof F != "object" || !("__html" in F)) throw Error(t(61));
          g = F.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? a.push(`
`, g) : a.push("" + g));
        }
        return typeof A == "string" && A[0] === `
` && a.push(`
`), A;
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
        a.push(fe(c));
        for (var St in g) if (r.call(g, St) && (A = g[St], A != null)) switch (St) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            ce(a, v, St, A);
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
        return Ie(
          a,
          g,
          c,
          v
        );
      case "html":
        return O.insertionMode === 0 && a.push("<!DOCTYPE html>"), Ie(a, g, c, v);
      default:
        if (c.indexOf("-") === -1 && typeof g.is != "string") return Ie(a, g, c, v);
        a.push(fe(c)), F = A = null;
        for (ue in g) if (r.call(g, ue) && (X = g[ue], X != null)) switch (ue) {
          case "children":
            A = X;
            break;
          case "dangerouslySetInnerHTML":
            F = X;
            break;
          case "style":
            C(a, v, X);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(ue) && typeof X != "function" && typeof X != "symbol" && a.push(" ", ue, '="', _(X), '"');
        }
        return a.push(">"), ye(a, F, A), A;
    }
  }
  function Re(a, c, g) {
    if (a.push('<!--$?--><template id="'), g === null) throw Error(t(395));
    return a.push(g), a.push('"></template>');
  }
  function ke(a, c, g, v) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return a.push('<div hidden id="'), a.push(c.segmentPrefix), c = v.toString(16), a.push(c), a.push('">');
      case 2:
        return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(c.segmentPrefix), c = v.toString(16), a.push(c), a.push('">');
      case 3:
        return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(c.segmentPrefix), c = v.toString(16), a.push(c), a.push('">');
      case 4:
        return a.push('<table hidden id="'), a.push(c.segmentPrefix), c = v.toString(16), a.push(c), a.push('">');
      case 5:
        return a.push('<table hidden><tbody id="'), a.push(c.segmentPrefix), c = v.toString(16), a.push(c), a.push('">');
      case 6:
        return a.push('<table hidden><tr id="'), a.push(c.segmentPrefix), c = v.toString(16), a.push(c), a.push('">');
      case 7:
        return a.push('<table hidden><colgroup id="'), a.push(c.segmentPrefix), c = v.toString(16), a.push(c), a.push('">');
      default:
        throw Error(t(397));
    }
  }
  function Ke(a, c) {
    switch (c.insertionMode) {
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
  var Pe = /[<\u2028\u2029]/g;
  function xe(a) {
    return JSON.stringify(a).replace(Pe, function(c) {
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
  function Me(a, c) {
    return c = c === void 0 ? "" : c, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: c + "P:", segmentPrefix: c + "S:", boundaryPrefix: c + "B:", idPrefix: c, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: a };
  }
  function Ye(a, c, g, v) {
    return g.generateStaticMarkup ? (a.push(_(c)), !1) : (c === "" ? a = v : (v && a.push("<!-- -->"), a.push(_(c)), a = !0), a);
  }
  var ve = Object.assign, L = Symbol.for("react.element"), I = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), T = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), Z = Symbol.for("react.debug_trace_mode"), pe = Symbol.for("react.legacy_hidden"), ee = Symbol.for("react.default_value"), le = Symbol.iterator;
  function We(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case N:
        return "Fragment";
      case I:
        return "Portal";
      case b:
        return "Profiler";
      case $:
        return "StrictMode";
      case Q:
        return "Suspense";
      case K:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case T:
        return (a.displayName || "Context") + ".Consumer";
      case te:
        return (a._context.displayName || "Context") + ".Provider";
      case re:
        var c = a.render;
        return a = a.displayName, a || (a = c.displayName || c.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case H:
        return c = a.displayName || null, c !== null ? c : We(a.type) || "Memo";
      case ne:
        c = a._payload, a = a._init;
        try {
          return We(a(c));
        } catch {
        }
    }
    return null;
  }
  var de = {};
  function et(a, c) {
    if (a = a.contextTypes, !a) return de;
    var g = {}, v;
    for (v in a) g[v] = c[v];
    return g;
  }
  var He = null;
  function he(a, c) {
    if (a !== c) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var g = c.parent;
      if (a === null) {
        if (g !== null) throw Error(t(401));
      } else {
        if (g === null) throw Error(t(401));
        he(a, g);
      }
      c.context._currentValue2 = c.value;
    }
  }
  function W(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && W(a);
  }
  function ae(a) {
    var c = a.parent;
    c !== null && ae(c), a.context._currentValue2 = a.value;
  }
  function Je(a, c) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === c.depth ? he(a, c) : Je(a, c);
  }
  function st(a, c) {
    var g = c.parent;
    if (g === null) throw Error(t(402));
    a.depth === g.depth ? he(a, g) : st(a, g), c.context._currentValue2 = c.value;
  }
  function Fe(a) {
    var c = He;
    c !== a && (c === null ? ae(a) : a === null ? W(c) : c.depth === a.depth ? he(c, a) : c.depth > a.depth ? Je(c, a) : st(c, a), He = a);
  }
  var ir = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, c) {
    a = a._reactInternals, a.queue !== null && a.queue.push(c);
  }, enqueueReplaceState: function(a, c) {
    a = a._reactInternals, a.replace = !0, a.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Bt(a, c, g, v) {
    var O = a.state !== void 0 ? a.state : null;
    a.updater = ir, a.props = g, a.state = O;
    var A = { queue: [], replace: !1 };
    a._reactInternals = A;
    var F = c.contextType;
    if (a.context = typeof F == "object" && F !== null ? F._currentValue2 : v, F = c.getDerivedStateFromProps, typeof F == "function" && (F = F(g, O), O = F == null ? O : ve({}, O, F), a.state = O), typeof c.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (c = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), c !== a.state && ir.enqueueReplaceState(a, a.state, null), A.queue !== null && 0 < A.queue.length) if (c = A.queue, F = A.replace, A.queue = null, A.replace = !1, F && c.length === 1) a.state = c[0];
    else {
      for (A = F ? c[0] : a.state, O = !0, F = F ? 1 : 0; F < c.length; F++) {
        var X = c[F];
        X = typeof X == "function" ? X.call(a, A, g, v) : X, X != null && (O ? (O = !1, A = ve({}, A, X)) : ve(A, X));
      }
      a.state = A;
    }
    else A.queue = null;
  }
  var vr = { id: 1, overflow: "" };
  function At(a, c, g) {
    var v = a.id;
    a = a.overflow;
    var O = 32 - wt(v) - 1;
    v &= ~(1 << O), g += 1;
    var A = 32 - wt(c) + O;
    if (30 < A) {
      var F = O - O % 5;
      return A = (v & (1 << F) - 1).toString(32), v >>= F, O -= F, { id: 1 << 32 - wt(c) + O | g << O | v, overflow: A + a };
    }
    return { id: 1 << A | g << O | v, overflow: a };
  }
  var wt = Math.clz32 ? Math.clz32 : or, pt = Math.log, Rt = Math.LN2;
  function or(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (pt(a) / Rt | 0) | 0;
  }
  function sr(a, c) {
    return a === c && (a !== 0 || 1 / a === 1 / c) || a !== a && c !== c;
  }
  var zr = typeof Object.is == "function" ? Object.is : sr, tt = null, Et = null, Ut = null, Ce = null, jt = !1, Wt = !1, De = 0, rt = null, Ht = 0;
  function bt() {
    if (tt === null) throw Error(t(321));
    return tt;
  }
  function Vt() {
    if (0 < Ht) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function qt() {
    return Ce === null ? Ut === null ? (jt = !1, Ut = Ce = Vt()) : (jt = !0, Ce = Ut) : Ce.next === null ? (jt = !1, Ce = Ce.next = Vt()) : (jt = !0, Ce = Ce.next), Ce;
  }
  function Gt() {
    Et = tt = null, Wt = !1, Ut = null, Ht = 0, Ce = rt = null;
  }
  function wr(a, c) {
    return typeof c == "function" ? c(a) : c;
  }
  function yt(a, c, g) {
    if (tt = bt(), Ce = qt(), jt) {
      var v = Ce.queue;
      if (c = v.dispatch, rt !== null && (g = rt.get(v), g !== void 0)) {
        rt.delete(v), v = Ce.memoizedState;
        do
          v = a(v, g.action), g = g.next;
        while (g !== null);
        return Ce.memoizedState = v, [v, c];
      }
      return [Ce.memoizedState, c];
    }
    return a = a === wr ? typeof c == "function" ? c() : c : g !== void 0 ? g(c) : c, Ce.memoizedState = a, a = Ce.queue = { last: null, dispatch: null }, a = a.dispatch = kr.bind(null, tt, a), [Ce.memoizedState, a];
  }
  function Nt(a, c) {
    if (tt = bt(), Ce = qt(), c = c === void 0 ? null : c, Ce !== null) {
      var g = Ce.memoizedState;
      if (g !== null && c !== null) {
        var v = g[1];
        e: if (v === null) v = !1;
        else {
          for (var O = 0; O < v.length && O < c.length; O++) if (!zr(c[O], v[O])) {
            v = !1;
            break e;
          }
          v = !0;
        }
        if (v) return g[0];
      }
    }
    return a = a(), Ce.memoizedState = [a, c], a;
  }
  function kr(a, c, g) {
    if (25 <= Ht) throw Error(t(301));
    if (a === tt) if (Wt = !0, a = { action: g, next: null }, rt === null && (rt = /* @__PURE__ */ new Map()), g = rt.get(c), g === void 0) rt.set(c, a);
    else {
      for (c = g; c.next !== null; ) c = c.next;
      c.next = a;
    }
  }
  function Sr() {
    throw Error(t(394));
  }
  function Ot() {
  }
  var lr = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    return bt(), a._currentValue2;
  }, useMemo: Nt, useReducer: yt, useRef: function(a) {
    tt = bt(), Ce = qt();
    var c = Ce.memoizedState;
    return c === null ? (a = { current: a }, Ce.memoizedState = a) : c;
  }, useState: function(a) {
    return yt(wr, a);
  }, useInsertionEffect: Ot, useLayoutEffect: function() {
  }, useCallback: function(a, c) {
    return Nt(function() {
      return a;
    }, c);
  }, useImperativeHandle: Ot, useEffect: Ot, useDebugValue: Ot, useDeferredValue: function(a) {
    return bt(), a;
  }, useTransition: function() {
    return bt(), [
      !1,
      Sr
    ];
  }, useId: function() {
    var a = Et.treeContext, c = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - wt(a) - 1)).toString(32) + c;
    var g = nt;
    if (g === null) throw Error(t(404));
    return c = De++, a = ":" + g.idPrefix + "R" + a, 0 < c && (a += "H" + c.toString(32)), a + ":";
  }, useMutableSource: function(a, c) {
    return bt(), c(a._source);
  }, useSyncExternalStore: function(a, c, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, nt = null, Yt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function xr(a) {
    return console.error(a), null;
  }
  function It() {
  }
  function Cr(a, c, g, v, O, A, F, X, ie) {
    var ue = [], ge = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ge, pingedTasks: ue, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: O === void 0 ? xr : O, onAllReady: It, onShellReady: F === void 0 ? It : F, onShellError: It, onFatalError: It }, g = S(c, 0, null, g, !1, !1), g.parentFlushed = !0, a = ur(c, a, null, g, ge, de, null, vr), ue.push(a), c;
  }
  function ur(a, c, g, v, O, A, F, X) {
    a.allPendingTasks++, g === null ? a.pendingRootTasks++ : g.pendingTasks++;
    var ie = { node: c, ping: function() {
      var ue = a.pingedTasks;
      ue.push(ie), ue.length === 1 && fn(a);
    }, blockedBoundary: g, blockedSegment: v, abortSet: O, legacyContext: A, context: F, treeContext: X };
    return O.add(ie), ie;
  }
  function S(a, c, g, v, O, A) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: g, lastPushedText: O, textEmbedded: A };
  }
  function J(a, c) {
    if (a = a.onError(c), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function Y(a, c) {
    var g = a.onShellError;
    g(c), g = a.onFatalError, g(c), a.destination !== null ? (a.status = 2, a.destination.destroy(c)) : (a.status = 1, a.fatalError = c);
  }
  function _e(a, c, g, v, O) {
    for (tt = {}, Et = c, De = 0, a = g(v, O); Wt; ) Wt = !1, De = 0, Ht += 1, Ce = null, a = g(v, O);
    return Gt(), a;
  }
  function Ge(a, c, g, v) {
    var O = g.render(), A = v.childContextTypes;
    if (A != null) {
      var F = c.legacyContext;
      if (typeof g.getChildContext != "function") v = F;
      else {
        g = g.getChildContext();
        for (var X in g) if (!(X in A)) throw Error(t(108, We(v) || "Unknown", X));
        v = ve({}, F, g);
      }
      c.legacyContext = v, je(a, c, O), c.legacyContext = F;
    } else je(a, c, O);
  }
  function Be(a, c) {
    if (a && a.defaultProps) {
      c = ve({}, c), a = a.defaultProps;
      for (var g in a) c[g] === void 0 && (c[g] = a[g]);
      return c;
    }
    return c;
  }
  function lt(a, c, g, v, O) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      O = et(g, c.legacyContext);
      var A = g.contextType;
      A = new g(v, typeof A == "object" && A !== null ? A._currentValue2 : O), Bt(A, g, v, O), Ge(a, c, A, g);
    } else {
      A = et(g, c.legacyContext), O = _e(a, c, g, v, A);
      var F = De !== 0;
      if (typeof O == "object" && O !== null && typeof O.render == "function" && O.$$typeof === void 0) Bt(O, g, v, A), Ge(a, c, O, g);
      else if (F) {
        v = c.treeContext, c.treeContext = At(v, 1, 0);
        try {
          je(a, c, O);
        } finally {
          c.treeContext = v;
        }
      } else je(a, c, O);
    }
    else if (typeof g == "string") {
      switch (O = c.blockedSegment, A = Ae(O.chunks, g, v, a.responseState, O.formatContext), O.lastPushedText = !1, F = O.formatContext, O.formatContext = q(F, g, v), Xe(a, c, A), O.formatContext = F, g) {
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
          O.chunks.push("</", g, ">");
      }
      O.lastPushedText = !1;
    } else {
      switch (g) {
        case pe:
        case Z:
        case $:
        case b:
        case N:
          je(a, c, v.children);
          return;
        case K:
          je(a, c, v.children);
          return;
        case se:
          throw Error(t(343));
        case Q:
          e: {
            g = c.blockedBoundary, O = c.blockedSegment, A = v.fallback, v = v.children, F = /* @__PURE__ */ new Set();
            var X = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: F, errorDigest: null }, ie = S(a, O.chunks.length, X, O.formatContext, !1, !1);
            O.children.push(ie), O.lastPushedText = !1;
            var ue = S(a, 0, null, O.formatContext, !1, !1);
            ue.parentFlushed = !0, c.blockedBoundary = X, c.blockedSegment = ue;
            try {
              if (Xe(
                a,
                c,
                v
              ), a.responseState.generateStaticMarkup || ue.lastPushedText && ue.textEmbedded && ue.chunks.push("<!-- -->"), ue.status = 1, Jt(X, ue), X.pendingTasks === 0) break e;
            } catch (ge) {
              ue.status = 4, X.forceClientRender = !0, X.errorDigest = J(a, ge);
            } finally {
              c.blockedBoundary = g, c.blockedSegment = O;
            }
            c = ur(a, A, g, ie, F, c.legacyContext, c.context, c.treeContext), a.pingedTasks.push(c);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case re:
          if (v = _e(a, c, g.render, v, O), De !== 0) {
            g = c.treeContext, c.treeContext = At(g, 1, 0);
            try {
              je(a, c, v);
            } finally {
              c.treeContext = g;
            }
          } else je(a, c, v);
          return;
        case H:
          g = g.type, v = Be(g, v), lt(a, c, g, v, O);
          return;
        case te:
          if (O = v.children, g = g._context, v = v.value, A = g._currentValue2, g._currentValue2 = v, F = He, He = v = { parent: F, depth: F === null ? 0 : F.depth + 1, context: g, parentValue: A, value: v }, c.context = v, je(a, c, O), a = He, a === null) throw Error(t(403));
          v = a.parentValue, a.context._currentValue2 = v === ee ? a.context._defaultValue : v, a = He = a.parent, c.context = a;
          return;
        case T:
          v = v.children, v = v(g._currentValue2), je(a, c, v);
          return;
        case ne:
          O = g._init, g = O(g._payload), v = Be(g, v), lt(
            a,
            c,
            g,
            v,
            void 0
          );
          return;
      }
      throw Error(t(130, g == null ? g : typeof g, ""));
    }
  }
  function je(a, c, g) {
    if (c.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case L:
          lt(a, c, g.type, g.props, g.ref);
          return;
        case I:
          throw Error(t(257));
        case ne:
          var v = g._init;
          g = v(g._payload), je(a, c, g);
          return;
      }
      if (M(g)) {
        ut(a, c, g);
        return;
      }
      if (g === null || typeof g != "object" ? v = null : (v = le && g[le] || g["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(g))) {
        if (g = v.next(), !g.done) {
          var O = [];
          do
            O.push(g.value), g = v.next();
          while (!g.done);
          ut(a, c, O);
        }
        return;
      }
      throw a = Object.prototype.toString.call(g), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : a));
    }
    typeof g == "string" ? (v = c.blockedSegment, v.lastPushedText = Ye(c.blockedSegment.chunks, g, a.responseState, v.lastPushedText)) : typeof g == "number" && (v = c.blockedSegment, v.lastPushedText = Ye(c.blockedSegment.chunks, "" + g, a.responseState, v.lastPushedText));
  }
  function ut(a, c, g) {
    for (var v = g.length, O = 0; O < v; O++) {
      var A = c.treeContext;
      c.treeContext = At(A, v, O);
      try {
        Xe(a, c, g[O]);
      } finally {
        c.treeContext = A;
      }
    }
  }
  function Xe(a, c, g) {
    var v = c.blockedSegment.formatContext, O = c.legacyContext, A = c.context;
    try {
      return je(a, c, g);
    } catch (ie) {
      if (Gt(), typeof ie == "object" && ie !== null && typeof ie.then == "function") {
        g = ie;
        var F = c.blockedSegment, X = S(a, F.chunks.length, null, F.formatContext, F.lastPushedText, !0);
        F.children.push(X), F.lastPushedText = !1, a = ur(a, c.node, c.blockedBoundary, X, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, g.then(a, a), c.blockedSegment.formatContext = v, c.legacyContext = O, c.context = A, Fe(A);
      } else throw c.blockedSegment.formatContext = v, c.legacyContext = O, c.context = A, Fe(A), ie;
    }
  }
  function Xt(a) {
    var c = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, Qt(this, c, a);
  }
  function _r(a, c, g) {
    var v = a.blockedBoundary;
    a.blockedSegment.status = 3, v === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.push(null))) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, a = g === void 0 ? Error(t(432)) : g, v.errorDigest = c.onError(a), v.parentFlushed && c.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(O) {
      return _r(O, c, g);
    }), v.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (v = c.onAllReady, v()));
  }
  function Jt(a, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var g = c.children[0];
      g.id = c.id, g.parentFlushed = !0, g.status === 1 && Jt(a, g);
    } else a.completedSegments.push(c);
  }
  function Qt(a, c, g) {
    if (c === null) {
      if (g.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = g;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = It, c = a.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && Jt(c, g), c.parentFlushed && a.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(Xt, a), c.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (Jt(c, g), c.completedSegments.length === 1 && c.parentFlushed && a.partialBoundaries.push(c)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function fn(a) {
    if (a.status !== 2) {
      var c = He, g = Yt.current;
      Yt.current = lr;
      var v = nt;
      nt = a.responseState;
      try {
        var O = a.pingedTasks, A;
        for (A = 0; A < O.length; A++) {
          var F = O[A], X = a, ie = F.blockedSegment;
          if (ie.status === 0) {
            Fe(F.context);
            try {
              je(X, F, F.node), X.responseState.generateStaticMarkup || ie.lastPushedText && ie.textEmbedded && ie.chunks.push("<!-- -->"), F.abortSet.delete(F), ie.status = 1, Qt(X, F.blockedBoundary, ie);
            } catch (ht) {
              if (Gt(), typeof ht == "object" && ht !== null && typeof ht.then == "function") {
                var ue = F.ping;
                ht.then(ue, ue);
              } else {
                F.abortSet.delete(F), ie.status = 4;
                var ge = F.blockedBoundary, Ve = ht, kt = J(X, Ve);
                if (ge === null ? Y(X, Ve) : (ge.pendingTasks--, ge.forceClientRender || (ge.forceClientRender = !0, ge.errorDigest = kt, ge.parentFlushed && X.clientRenderedBoundaries.push(ge))), X.allPendingTasks--, X.allPendingTasks === 0) {
                  var St = X.onAllReady;
                  St();
                }
              }
            } finally {
            }
          }
        }
        O.splice(0, A), a.destination !== null && Tr(a, a.destination);
      } catch (ht) {
        J(a, ht), Y(a, ht);
      } finally {
        nt = v, Yt.current = g, g === lr && Fe(c);
      }
    }
  }
  function cr(a, c, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var v = g.id = a.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, a = a.responseState, c.push('<template id="'), c.push(a.placeholderPrefix), a = v.toString(16), c.push(a), c.push('"></template>');
      case 1:
        g.status = 2;
        var O = !0;
        v = g.chunks;
        var A = 0;
        g = g.children;
        for (var F = 0; F < g.length; F++) {
          for (O = g[F]; A < O.index; A++) c.push(v[A]);
          O = dr(a, c, O);
        }
        for (; A < v.length - 1; A++) c.push(v[A]);
        return A < v.length && (O = c.push(v[A])), O;
      default:
        throw Error(t(390));
    }
  }
  function dr(a, c, g) {
    var v = g.boundary;
    if (v === null) return cr(a, c, g);
    if (v.parentFlushed = !0, v.forceClientRender) return a.responseState.generateStaticMarkup || (v = v.errorDigest, c.push("<!--$!-->"), c.push("<template"), v && (c.push(' data-dgst="'), v = _(v), c.push(v), c.push('"')), c.push("></template>")), cr(a, c, g), a = a.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), a;
    if (0 < v.pendingTasks) {
      v.rootSegmentID = a.nextSegmentId++, 0 < v.completedSegments.length && a.partialBoundaries.push(v);
      var O = a.responseState, A = O.nextSuspenseID++;
      return O = O.boundaryPrefix + A.toString(16), v = v.id = O, Re(c, a.responseState, v), cr(a, c, g), c.push("<!--/$-->");
    }
    if (v.byteSize > a.progressiveChunkSize) return v.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(v), Re(c, a.responseState, v.id), cr(a, c, g), c.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || c.push("<!--$-->"), g = v.completedSegments, g.length !== 1) throw Error(t(391));
    return dr(a, c, g[0]), a = a.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), a;
  }
  function $r(a, c, g) {
    return ke(c, a.responseState, g.formatContext, g.id), dr(a, c, g), Ke(c, g.formatContext);
  }
  function Br(a, c, g) {
    for (var v = g.completedSegments, O = 0; O < v.length; O++) Ur(a, c, g, v[O]);
    if (v.length = 0, a = a.responseState, v = g.id, g = g.rootSegmentID, c.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? c.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, c.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), v === null) throw Error(t(395));
    return g = g.toString(16), c.push(v), c.push('","'), c.push(a.segmentPrefix), c.push(g), c.push('")<\/script>');
  }
  function Ur(a, c, g, v) {
    if (v.status === 2) return !0;
    var O = v.id;
    if (O === -1) {
      if ((v.id = g.rootSegmentID) === -1) throw Error(t(392));
      return $r(a, c, v);
    }
    return $r(a, c, v), a = a.responseState, c.push(a.startInlineScript), a.sentCompleteSegmentFunction ? c.push('$RS("') : (a.sentCompleteSegmentFunction = !0, c.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), c.push(a.segmentPrefix), O = O.toString(16), c.push(O), c.push('","'), c.push(a.placeholderPrefix), c.push(O), c.push('")<\/script>');
  }
  function Tr(a, c) {
    try {
      var g = a.completedRootSegment;
      if (g !== null && a.pendingRootTasks === 0) {
        dr(a, c, g), a.completedRootSegment = null;
        var v = a.responseState.bootstrapChunks;
        for (g = 0; g < v.length - 1; g++) c.push(v[g]);
        g < v.length && c.push(v[g]);
      }
      var O = a.clientRenderedBoundaries, A;
      for (A = 0; A < O.length; A++) {
        var F = O[A];
        v = c;
        var X = a.responseState, ie = F.id, ue = F.errorDigest, ge = F.errorMessage, Ve = F.errorComponentStack;
        if (v.push(X.startInlineScript), X.sentClientRenderFunction ? v.push('$RX("') : (X.sentClientRenderFunction = !0, v.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ie === null) throw Error(t(395));
        if (v.push(ie), v.push('"'), ue || ge || Ve) {
          v.push(",");
          var kt = xe(ue || "");
          v.push(kt);
        }
        if (ge || Ve) {
          v.push(",");
          var St = xe(ge || "");
          v.push(St);
        }
        if (Ve) {
          v.push(",");
          var ht = xe(Ve);
          v.push(ht);
        }
        if (!v.push(")<\/script>")) {
          a.destination = null, A++, O.splice(0, A);
          return;
        }
      }
      O.splice(0, A);
      var fr = a.completedBoundaries;
      for (A = 0; A < fr.length; A++) if (!Br(a, c, fr[A])) {
        a.destination = null, A++, fr.splice(0, A);
        return;
      }
      fr.splice(0, A);
      var Lt = a.partialBoundaries;
      for (A = 0; A < Lt.length; A++) {
        var Hr = Lt[A];
        e: {
          O = a, F = c;
          var pr = Hr.completedSegments;
          for (X = 0; X < pr.length; X++) if (!Ur(O, F, Hr, pr[X])) {
            X++, pr.splice(0, X);
            var gn = !1;
            break e;
          }
          pr.splice(0, X), gn = !0;
        }
        if (!gn) {
          a.destination = null, A++, Lt.splice(0, A);
          return;
        }
      }
      Lt.splice(0, A);
      var Zt = a.completedBoundaries;
      for (A = 0; A < Zt.length; A++) if (!Br(a, c, Zt[A])) {
        a.destination = null, A++, Zt.splice(0, A);
        return;
      }
      Zt.splice(0, A);
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && c.push(null);
    }
  }
  function pn(a, c) {
    try {
      var g = a.abortableTasks;
      g.forEach(function(v) {
        return _r(v, a, c);
      }), g.clear(), a.destination !== null && Tr(a, a.destination);
    } catch (v) {
      J(a, v), Y(a, v);
    }
  }
  function hn() {
  }
  function Wr(a, c, g, v) {
    var O = !1, A = null, F = "", X = { push: function(ue) {
      return ue !== null && (F += ue), !0;
    }, destroy: function(ue) {
      O = !0, A = ue;
    } }, ie = !1;
    if (a = Cr(a, Me(g, c ? c.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, hn, void 0, function() {
      ie = !0;
    }), fn(a), pn(a, v), a.status === 1) a.status = 2, X.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = X;
      try {
        Tr(a, X);
      } catch (ue) {
        J(a, ue), Y(a, ue);
      }
    }
    if (O) throw A;
    if (!ie) throw Error(t(426));
    return F;
  }
  return gr.renderToNodeStream = function() {
    throw Error(t(207));
  }, gr.renderToStaticMarkup = function(a, c) {
    return Wr(a, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, gr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, gr.renderToString = function(a, c) {
    return Wr(a, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, gr.version = "18.3.1", gr;
}
var On = {}, Di;
function Nl() {
  if (Di) return On;
  Di = 1;
  var e = Ze;
  function t(i) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, p = 1; p < arguments.length; p++) u += "&args[]=" + encodeURIComponent(arguments[p]);
    return "Minified React error #" + i + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function o(i, u) {
    if (u.length !== 0) if (512 < u.length) 0 < n && (i.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), i.enqueue(u);
    else {
      var p = r.length - n;
      p < u.length && (p === 0 ? i.enqueue(r) : (r.set(u.subarray(0, p), n), i.enqueue(r), u = u.subarray(p)), r = new Uint8Array(512), n = 0), r.set(u, n), n += u.length;
    }
  }
  function s(i, u) {
    return o(i, u), !0;
  }
  function d(i) {
    r && 0 < n && (i.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var m = new TextEncoder();
  function h(i) {
    return m.encode(i);
  }
  function f(i) {
    return m.encode(i);
  }
  function x(i, u) {
    typeof i.error == "function" ? i.error(u) : i.close();
  }
  var k = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, B = {}, _ = {};
  function w(i) {
    return k.call(_, i) ? !0 : k.call(B, i) ? !1 : j.test(i) ? _[i] = !0 : (B[i] = !0, !1);
  }
  function P(i, u, p, y, E, R, D) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = y, this.attributeNamespace = E, this.mustUseProperty = p, this.propertyName = i, this.type = u, this.sanitizeURL = R, this.removeEmptyString = D;
  }
  var M = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    M[i] = new P(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var u = i[0];
    M[u] = new P(u, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    M[i] = new P(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    M[i] = new P(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    M[i] = new P(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    M[i] = new P(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    M[i] = new P(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    M[i] = new P(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    M[i] = new P(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var U = /[\-:]([a-z])/g;
  function q(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var u = i.replace(
      U,
      q
    );
    M[u] = new P(u, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var u = i.replace(U, q);
    M[u] = new P(u, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var u = i.replace(U, q);
    M[u] = new P(u, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    M[i] = new P(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), M.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    M[i] = new P(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var G = {
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
  }, C = ["Webkit", "ms", "Moz", "O"];
  Object.keys(G).forEach(function(i) {
    C.forEach(function(u) {
      u = u + i.charAt(0).toUpperCase() + i.substring(1), G[u] = G[i];
    });
  });
  var ce = /["'&<>]/;
  function ye(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var u = ce.exec(i);
    if (u) {
      var p = "", y, E = 0;
      for (y = u.index; y < i.length; y++) {
        switch (i.charCodeAt(y)) {
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
        E !== y && (p += i.substring(E, y)), E = y + 1, p += u;
      }
      i = E !== y ? p + i.substring(E, y) : p;
    }
    return i;
  }
  var Te = /([A-Z])/g, Ie = /^ms-/, $e = Array.isArray, Se = f("<script>"), fe = f("<\/script>"), Ae = f('<script src="'), Re = f('<script type="module" src="'), ke = f('" async=""><\/script>'), Ke = /(<\/|<)(s)(cript)/gi;
  function Pe(i, u, p, y) {
    return "" + u + (p === "s" ? "\\u0073" : "\\u0053") + y;
  }
  function xe(i, u, p, y, E) {
    i = i === void 0 ? "" : i, u = u === void 0 ? Se : f('<script nonce="' + ye(u) + '">');
    var R = [];
    if (p !== void 0 && R.push(u, h(("" + p).replace(Ke, Pe)), fe), y !== void 0) for (p = 0; p < y.length; p++) R.push(Ae, h(ye(y[p])), ke);
    if (E !== void 0) for (y = 0; y < E.length; y++) R.push(Re, h(ye(E[y])), ke);
    return { bootstrapChunks: R, startInlineScript: u, placeholderPrefix: f(i + "P:"), segmentPrefix: f(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Me(i, u) {
    return { insertionMode: i, selectedValue: u };
  }
  function Ye(i) {
    return Me(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function ve(i, u, p) {
    switch (u) {
      case "select":
        return Me(1, p.value != null ? p.value : p.defaultValue);
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
    return 4 <= i.insertionMode || i.insertionMode === 0 ? Me(1, null) : i;
  }
  var L = f("<!-- -->");
  function I(i, u, p, y) {
    return u === "" ? y : (y && i.push(L), i.push(h(ye(u))), !0);
  }
  var N = /* @__PURE__ */ new Map(), $ = f(' style="'), b = f(":"), te = f(";");
  function T(i, u, p) {
    if (typeof p != "object") throw Error(t(62));
    u = !0;
    for (var y in p) if (k.call(p, y)) {
      var E = p[y];
      if (E != null && typeof E != "boolean" && E !== "") {
        if (y.indexOf("--") === 0) {
          var R = h(ye(y));
          E = h(ye(("" + E).trim()));
        } else {
          R = y;
          var D = N.get(R);
          D !== void 0 || (D = f(ye(R.replace(Te, "-$1").toLowerCase().replace(Ie, "-ms-"))), N.set(R, D)), R = D, E = typeof E == "number" ? E === 0 || k.call(G, y) ? h("" + E) : h(E + "px") : h(ye(("" + E).trim()));
        }
        u ? (u = !1, i.push($, R, b, E)) : i.push(te, R, b, E);
      }
    }
    u || i.push(K);
  }
  var re = f(" "), Q = f('="'), K = f('"'), H = f('=""');
  function ne(i, u, p, y) {
    switch (p) {
      case "style":
        T(i, u, y);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
      if (u = M.hasOwnProperty(p) ? M[p] : null, u !== null) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (p = h(u.attributeName), u.type) {
          case 3:
            y && i.push(re, p, H);
            break;
          case 4:
            y === !0 ? i.push(re, p, H) : y !== !1 && i.push(re, p, Q, h(ye(y)), K);
            break;
          case 5:
            isNaN(y) || i.push(re, p, Q, h(ye(y)), K);
            break;
          case 6:
            !isNaN(y) && 1 <= y && i.push(re, p, Q, h(ye(y)), K);
            break;
          default:
            u.sanitizeURL && (y = "" + y), i.push(re, p, Q, h(ye(y)), K);
        }
      } else if (w(p)) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = p.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        i.push(re, h(p), Q, h(ye(y)), K);
      }
    }
  }
  var se = f(">"), Z = f("/>");
  function pe(i, u, p) {
    if (u != null) {
      if (p != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && i.push(h("" + u));
    }
  }
  function ee(i) {
    var u = "";
    return e.Children.forEach(i, function(p) {
      p != null && (u += p);
    }), u;
  }
  var le = f(' selected=""');
  function We(i, u, p, y) {
    i.push(he(p));
    var E = p = null, R;
    for (R in u) if (k.call(u, R)) {
      var D = u[R];
      if (D != null) switch (R) {
        case "children":
          p = D;
          break;
        case "dangerouslySetInnerHTML":
          E = D;
          break;
        default:
          ne(i, y, R, D);
      }
    }
    return i.push(se), pe(i, E, p), typeof p == "string" ? (i.push(h(ye(p))), null) : p;
  }
  var de = f(`
`), et = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, He = /* @__PURE__ */ new Map();
  function he(i) {
    var u = He.get(i);
    if (u === void 0) {
      if (!et.test(i)) throw Error(t(65, i));
      u = f("<" + i), He.set(i, u);
    }
    return u;
  }
  var W = f("<!DOCTYPE html>");
  function ae(i, u, p, y, E) {
    switch (u) {
      case "select":
        i.push(he("select"));
        var R = null, D = null;
        for (me in p) if (k.call(p, me)) {
          var V = p[me];
          if (V != null) switch (me) {
            case "children":
              R = V;
              break;
            case "dangerouslySetInnerHTML":
              D = V;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(i, y, me, V);
          }
        }
        return i.push(se), pe(i, D, R), R;
      case "option":
        D = E.selectedValue, i.push(he("option"));
        var oe = V = null, be = null, me = null;
        for (R in p) if (k.call(p, R)) {
          var Ue = p[R];
          if (Ue != null) switch (R) {
            case "children":
              V = Ue;
              break;
            case "selected":
              be = Ue;
              break;
            case "dangerouslySetInnerHTML":
              me = Ue;
              break;
            case "value":
              oe = Ue;
            default:
              ne(i, y, R, Ue);
          }
        }
        if (D != null) if (p = oe !== null ? "" + oe : ee(V), $e(D)) {
          for (y = 0; y < D.length; y++)
            if ("" + D[y] === p) {
              i.push(le);
              break;
            }
        } else "" + D === p && i.push(le);
        else be && i.push(le);
        return i.push(se), pe(i, me, V), V;
      case "textarea":
        i.push(he("textarea")), me = D = R = null;
        for (V in p) if (k.call(p, V) && (oe = p[V], oe != null)) switch (V) {
          case "children":
            me = oe;
            break;
          case "value":
            R = oe;
            break;
          case "defaultValue":
            D = oe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(i, y, V, oe);
        }
        if (R === null && D !== null && (R = D), i.push(se), me != null) {
          if (R != null) throw Error(t(92));
          if ($e(me) && 1 < me.length) throw Error(t(93));
          R = "" + me;
        }
        return typeof R == "string" && R[0] === `
` && i.push(de), R !== null && i.push(h(ye("" + R))), null;
      case "input":
        i.push(he("input")), oe = me = V = R = null;
        for (D in p) if (k.call(p, D) && (be = p[D], be != null)) switch (D) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            oe = be;
            break;
          case "defaultValue":
            V = be;
            break;
          case "checked":
            me = be;
            break;
          case "value":
            R = be;
            break;
          default:
            ne(i, y, D, be);
        }
        return me !== null ? ne(
          i,
          y,
          "checked",
          me
        ) : oe !== null && ne(i, y, "checked", oe), R !== null ? ne(i, y, "value", R) : V !== null && ne(i, y, "value", V), i.push(Z), null;
      case "menuitem":
        i.push(he("menuitem"));
        for (var mt in p) if (k.call(p, mt) && (R = p[mt], R != null)) switch (mt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(i, y, mt, R);
        }
        return i.push(se), null;
      case "title":
        i.push(he("title")), R = null;
        for (Ue in p) if (k.call(p, Ue) && (D = p[Ue], D != null)) switch (Ue) {
          case "children":
            R = D;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(i, y, Ue, D);
        }
        return i.push(se), R;
      case "listing":
      case "pre":
        i.push(he(u)), D = R = null;
        for (oe in p) if (k.call(p, oe) && (V = p[oe], V != null)) switch (oe) {
          case "children":
            R = V;
            break;
          case "dangerouslySetInnerHTML":
            D = V;
            break;
          default:
            ne(i, y, oe, V);
        }
        if (i.push(se), D != null) {
          if (R != null) throw Error(t(60));
          if (typeof D != "object" || !("__html" in D)) throw Error(t(61));
          p = D.__html, p != null && (typeof p == "string" && 0 < p.length && p[0] === `
` ? i.push(de, h(p)) : i.push(h("" + p)));
        }
        return typeof R == "string" && R[0] === `
` && i.push(de), R;
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
        i.push(he(u));
        for (var xt in p) if (k.call(p, xt) && (R = p[xt], R != null)) switch (xt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ne(i, y, xt, R);
        }
        return i.push(Z), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return We(i, p, u, y);
      case "html":
        return E.insertionMode === 0 && i.push(W), We(i, p, u, y);
      default:
        if (u.indexOf("-") === -1 && typeof p.is != "string") return We(i, p, u, y);
        i.push(he(u)), D = R = null;
        for (be in p) if (k.call(p, be) && (V = p[be], V != null)) switch (be) {
          case "children":
            R = V;
            break;
          case "dangerouslySetInnerHTML":
            D = V;
            break;
          case "style":
            T(i, y, V);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            w(be) && typeof V != "function" && typeof V != "symbol" && i.push(re, h(be), Q, h(ye(V)), K);
        }
        return i.push(se), pe(i, D, R), R;
    }
  }
  var Je = f("</"), st = f(">"), Fe = f('<template id="'), ir = f('"></template>'), Bt = f("<!--$-->"), vr = f('<!--$?--><template id="'), At = f('"></template>'), wt = f("<!--$!-->"), pt = f("<!--/$-->"), Rt = f("<template"), or = f('"'), sr = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var zr = f("></template>");
  function tt(i, u, p) {
    if (o(i, vr), p === null) throw Error(t(395));
    return o(i, p), s(i, At);
  }
  var Et = f('<div hidden id="'), Ut = f('">'), Ce = f("</div>"), jt = f('<svg aria-hidden="true" style="display:none" id="'), Wt = f('">'), De = f("</svg>"), rt = f('<math aria-hidden="true" style="display:none" id="'), Ht = f('">'), bt = f("</math>"), Vt = f('<table hidden id="'), qt = f('">'), Gt = f("</table>"), wr = f('<table hidden><tbody id="'), yt = f('">'), Nt = f("</tbody></table>"), kr = f('<table hidden><tr id="'), Sr = f('">'), Ot = f("</tr></table>"), lr = f('<table hidden><colgroup id="'), nt = f('">'), Yt = f("</colgroup></table>");
  function xr(i, u, p, y) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return o(i, Et), o(i, u.segmentPrefix), o(i, h(y.toString(16))), s(i, Ut);
      case 2:
        return o(i, jt), o(i, u.segmentPrefix), o(i, h(y.toString(16))), s(i, Wt);
      case 3:
        return o(i, rt), o(i, u.segmentPrefix), o(i, h(y.toString(16))), s(i, Ht);
      case 4:
        return o(i, Vt), o(i, u.segmentPrefix), o(i, h(y.toString(16))), s(i, qt);
      case 5:
        return o(i, wr), o(i, u.segmentPrefix), o(i, h(y.toString(16))), s(i, yt);
      case 6:
        return o(i, kr), o(i, u.segmentPrefix), o(i, h(y.toString(16))), s(i, Sr);
      case 7:
        return o(
          i,
          lr
        ), o(i, u.segmentPrefix), o(i, h(y.toString(16))), s(i, nt);
      default:
        throw Error(t(397));
    }
  }
  function It(i, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return s(i, Ce);
      case 2:
        return s(i, De);
      case 3:
        return s(i, bt);
      case 4:
        return s(i, Gt);
      case 5:
        return s(i, Nt);
      case 6:
        return s(i, Ot);
      case 7:
        return s(i, Yt);
      default:
        throw Error(t(397));
    }
  }
  var Cr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), ur = f('$RS("'), S = f('","'), J = f('")<\/script>'), Y = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), _e = f('$RC("'), Ge = f('","'), Be = f('")<\/script>'), lt = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), je = f('$RX("'), ut = f('"'), Xe = f(")<\/script>"), Xt = f(","), _r = /[<\u2028\u2029]/g;
  function Jt(i) {
    return JSON.stringify(i).replace(_r, function(u) {
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
  var Qt = Object.assign, fn = Symbol.for("react.element"), cr = Symbol.for("react.portal"), dr = Symbol.for("react.fragment"), $r = Symbol.for("react.strict_mode"), Br = Symbol.for("react.profiler"), Ur = Symbol.for("react.provider"), Tr = Symbol.for("react.context"), pn = Symbol.for("react.forward_ref"), hn = Symbol.for("react.suspense"), Wr = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), v = Symbol.for("react.debug_trace_mode"), O = Symbol.for("react.legacy_hidden"), A = Symbol.for("react.default_value"), F = Symbol.iterator;
  function X(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case dr:
        return "Fragment";
      case cr:
        return "Portal";
      case Br:
        return "Profiler";
      case $r:
        return "StrictMode";
      case hn:
        return "Suspense";
      case Wr:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case Tr:
        return (i.displayName || "Context") + ".Consumer";
      case Ur:
        return (i._context.displayName || "Context") + ".Provider";
      case pn:
        var u = i.render;
        return i = i.displayName, i || (i = u.displayName || u.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case a:
        return u = i.displayName || null, u !== null ? u : X(i.type) || "Memo";
      case c:
        u = i._payload, i = i._init;
        try {
          return X(i(u));
        } catch {
        }
    }
    return null;
  }
  var ie = {};
  function ue(i, u) {
    if (i = i.contextTypes, !i) return ie;
    var p = {}, y;
    for (y in i) p[y] = u[y];
    return p;
  }
  var ge = null;
  function Ve(i, u) {
    if (i !== u) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var p = u.parent;
      if (i === null) {
        if (p !== null) throw Error(t(401));
      } else {
        if (p === null) throw Error(t(401));
        Ve(i, p);
      }
      u.context._currentValue = u.value;
    }
  }
  function kt(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && kt(i);
  }
  function St(i) {
    var u = i.parent;
    u !== null && St(u), i.context._currentValue = i.value;
  }
  function ht(i, u) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === u.depth ? Ve(i, u) : ht(i, u);
  }
  function fr(i, u) {
    var p = u.parent;
    if (p === null) throw Error(t(402));
    i.depth === p.depth ? Ve(i, p) : fr(i, p), u.context._currentValue = u.value;
  }
  function Lt(i) {
    var u = ge;
    u !== i && (u === null ? St(i) : i === null ? kt(u) : u.depth === i.depth ? Ve(u, i) : u.depth > i.depth ? ht(u, i) : fr(u, i), ge = i);
  }
  var Hr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, u) {
    i = i._reactInternals, i.queue !== null && i.queue.push(u);
  }, enqueueReplaceState: function(i, u) {
    i = i._reactInternals, i.replace = !0, i.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function pr(i, u, p, y) {
    var E = i.state !== void 0 ? i.state : null;
    i.updater = Hr, i.props = p, i.state = E;
    var R = { queue: [], replace: !1 };
    i._reactInternals = R;
    var D = u.contextType;
    if (i.context = typeof D == "object" && D !== null ? D._currentValue : y, D = u.getDerivedStateFromProps, typeof D == "function" && (D = D(p, E), E = D == null ? E : Qt({}, E, D), i.state = E), typeof u.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && Hr.enqueueReplaceState(i, i.state, null), R.queue !== null && 0 < R.queue.length) if (u = R.queue, D = R.replace, R.queue = null, R.replace = !1, D && u.length === 1) i.state = u[0];
    else {
      for (R = D ? u[0] : i.state, E = !0, D = D ? 1 : 0; D < u.length; D++) {
        var V = u[D];
        V = typeof V == "function" ? V.call(i, R, p, y) : V, V != null && (E ? (E = !1, R = Qt({}, R, V)) : Qt(R, V));
      }
      i.state = R;
    }
    else R.queue = null;
  }
  var gn = { id: 1, overflow: "" };
  function Zt(i, u, p) {
    var y = i.id;
    i = i.overflow;
    var E = 32 - mn(y) - 1;
    y &= ~(1 << E), p += 1;
    var R = 32 - mn(u) + E;
    if (30 < R) {
      var D = E - E % 5;
      return R = (y & (1 << D) - 1).toString(32), y >>= D, E -= D, { id: 1 << 32 - mn(u) + E | p << E | y, overflow: R + i };
    }
    return { id: 1 << R | p << E | y, overflow: i };
  }
  var mn = Math.clz32 ? Math.clz32 : Us, $s = Math.log, Bs = Math.LN2;
  function Us(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - ($s(i) / Bs | 0) | 0;
  }
  function Ws(i, u) {
    return i === u && (i !== 0 || 1 / i === 1 / u) || i !== i && u !== u;
  }
  var Hs = typeof Object.is == "function" ? Object.is : Ws, Ft = null, ra = null, bn = null, ze = null, Vr = !1, yn = !1, qr = 0, Kt = null, vn = 0;
  function hr() {
    if (Ft === null) throw Error(t(321));
    return Ft;
  }
  function si() {
    if (0 < vn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function na() {
    return ze === null ? bn === null ? (Vr = !1, bn = ze = si()) : (Vr = !0, ze = bn) : ze.next === null ? (Vr = !1, ze = ze.next = si()) : (Vr = !0, ze = ze.next), ze;
  }
  function aa() {
    ra = Ft = null, yn = !1, bn = null, vn = 0, ze = Kt = null;
  }
  function li(i, u) {
    return typeof u == "function" ? u(i) : u;
  }
  function ui(i, u, p) {
    if (Ft = hr(), ze = na(), Vr) {
      var y = ze.queue;
      if (u = y.dispatch, Kt !== null && (p = Kt.get(y), p !== void 0)) {
        Kt.delete(y), y = ze.memoizedState;
        do
          y = i(y, p.action), p = p.next;
        while (p !== null);
        return ze.memoizedState = y, [y, u];
      }
      return [ze.memoizedState, u];
    }
    return i = i === li ? typeof u == "function" ? u() : u : p !== void 0 ? p(u) : u, ze.memoizedState = i, i = ze.queue = { last: null, dispatch: null }, i = i.dispatch = Vs.bind(null, Ft, i), [ze.memoizedState, i];
  }
  function ci(i, u) {
    if (Ft = hr(), ze = na(), u = u === void 0 ? null : u, ze !== null) {
      var p = ze.memoizedState;
      if (p !== null && u !== null) {
        var y = p[1];
        e: if (y === null) y = !1;
        else {
          for (var E = 0; E < y.length && E < u.length; E++) if (!Hs(u[E], y[E])) {
            y = !1;
            break e;
          }
          y = !0;
        }
        if (y) return p[0];
      }
    }
    return i = i(), ze.memoizedState = [i, u], i;
  }
  function Vs(i, u, p) {
    if (25 <= vn) throw Error(t(301));
    if (i === Ft) if (yn = !0, i = { action: p, next: null }, Kt === null && (Kt = /* @__PURE__ */ new Map()), p = Kt.get(u), p === void 0) Kt.set(u, i);
    else {
      for (u = p; u.next !== null; ) u = u.next;
      u.next = i;
    }
  }
  function qs() {
    throw Error(t(394));
  }
  function wn() {
  }
  var di = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return hr(), i._currentValue;
  }, useMemo: ci, useReducer: ui, useRef: function(i) {
    Ft = hr(), ze = na();
    var u = ze.memoizedState;
    return u === null ? (i = { current: i }, ze.memoizedState = i) : u;
  }, useState: function(i) {
    return ui(li, i);
  }, useInsertionEffect: wn, useLayoutEffect: function() {
  }, useCallback: function(i, u) {
    return ci(function() {
      return i;
    }, u);
  }, useImperativeHandle: wn, useEffect: wn, useDebugValue: wn, useDeferredValue: function(i) {
    return hr(), i;
  }, useTransition: function() {
    return hr(), [!1, qs];
  }, useId: function() {
    var i = ra.treeContext, u = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - mn(i) - 1)).toString(32) + u;
    var p = kn;
    if (p === null) throw Error(t(404));
    return u = qr++, i = ":" + p.idPrefix + "R" + i, 0 < u && (i += "H" + u.toString(32)), i + ":";
  }, useMutableSource: function(i, u) {
    return hr(), u(i._source);
  }, useSyncExternalStore: function(i, u, p) {
    if (p === void 0) throw Error(t(407));
    return p();
  } }, kn = null, ia = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Gs(i) {
    return console.error(i), null;
  }
  function Gr() {
  }
  function Ys(i, u, p, y, E, R, D, V, oe) {
    var be = [], me = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: y === void 0 ? 12800 : y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: me, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: E === void 0 ? Gs : E, onAllReady: R === void 0 ? Gr : R, onShellReady: D === void 0 ? Gr : D, onShellError: V === void 0 ? Gr : V, onFatalError: oe === void 0 ? Gr : oe }, p = Sn(u, 0, null, p, !1, !1), p.parentFlushed = !0, i = oa(u, i, null, p, me, ie, null, gn), be.push(i), u;
  }
  function oa(i, u, p, y, E, R, D, V) {
    i.allPendingTasks++, p === null ? i.pendingRootTasks++ : p.pendingTasks++;
    var oe = { node: u, ping: function() {
      var be = i.pingedTasks;
      be.push(oe), be.length === 1 && yi(i);
    }, blockedBoundary: p, blockedSegment: y, abortSet: E, legacyContext: R, context: D, treeContext: V };
    return E.add(oe), oe;
  }
  function Sn(i, u, p, y, E, R) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: y, boundary: p, lastPushedText: E, textEmbedded: R };
  }
  function Yr(i, u) {
    if (i = i.onError(u), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function xn(i, u) {
    var p = i.onShellError;
    p(u), p = i.onFatalError, p(u), i.destination !== null ? (i.status = 2, x(i.destination, u)) : (i.status = 1, i.fatalError = u);
  }
  function fi(i, u, p, y, E) {
    for (Ft = {}, ra = u, qr = 0, i = p(y, E); yn; ) yn = !1, qr = 0, vn += 1, ze = null, i = p(y, E);
    return aa(), i;
  }
  function pi(i, u, p, y) {
    var E = p.render(), R = y.childContextTypes;
    if (R != null) {
      var D = u.legacyContext;
      if (typeof p.getChildContext != "function") y = D;
      else {
        p = p.getChildContext();
        for (var V in p) if (!(V in R)) throw Error(t(108, X(y) || "Unknown", V));
        y = Qt({}, D, p);
      }
      u.legacyContext = y, gt(i, u, E), u.legacyContext = D;
    } else gt(i, u, E);
  }
  function hi(i, u) {
    if (i && i.defaultProps) {
      u = Qt({}, u), i = i.defaultProps;
      for (var p in i) u[p] === void 0 && (u[p] = i[p]);
      return u;
    }
    return u;
  }
  function sa(i, u, p, y, E) {
    if (typeof p == "function") if (p.prototype && p.prototype.isReactComponent) {
      E = ue(p, u.legacyContext);
      var R = p.contextType;
      R = new p(y, typeof R == "object" && R !== null ? R._currentValue : E), pr(R, p, y, E), pi(i, u, R, p);
    } else {
      R = ue(p, u.legacyContext), E = fi(i, u, p, y, R);
      var D = qr !== 0;
      if (typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0) pr(E, p, y, R), pi(i, u, E, p);
      else if (D) {
        y = u.treeContext, u.treeContext = Zt(y, 1, 0);
        try {
          gt(i, u, E);
        } finally {
          u.treeContext = y;
        }
      } else gt(i, u, E);
    }
    else if (typeof p == "string") {
      switch (E = u.blockedSegment, R = ae(E.chunks, p, y, i.responseState, E.formatContext), E.lastPushedText = !1, D = E.formatContext, E.formatContext = ve(D, p, y), la(i, u, R), E.formatContext = D, p) {
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
          E.chunks.push(Je, h(p), st);
      }
      E.lastPushedText = !1;
    } else {
      switch (p) {
        case O:
        case v:
        case $r:
        case Br:
        case dr:
          gt(i, u, y.children);
          return;
        case Wr:
          gt(i, u, y.children);
          return;
        case g:
          throw Error(t(343));
        case hn:
          e: {
            p = u.blockedBoundary, E = u.blockedSegment, R = y.fallback, y = y.children, D = /* @__PURE__ */ new Set();
            var V = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: D, errorDigest: null }, oe = Sn(i, E.chunks.length, V, E.formatContext, !1, !1);
            E.children.push(oe), E.lastPushedText = !1;
            var be = Sn(i, 0, null, E.formatContext, !1, !1);
            be.parentFlushed = !0, u.blockedBoundary = V, u.blockedSegment = be;
            try {
              if (la(
                i,
                u,
                y
              ), be.lastPushedText && be.textEmbedded && be.chunks.push(L), be.status = 1, Cn(V, be), V.pendingTasks === 0) break e;
            } catch (me) {
              be.status = 4, V.forceClientRender = !0, V.errorDigest = Yr(i, me);
            } finally {
              u.blockedBoundary = p, u.blockedSegment = E;
            }
            u = oa(i, R, p, oe, D, u.legacyContext, u.context, u.treeContext), i.pingedTasks.push(u);
          }
          return;
      }
      if (typeof p == "object" && p !== null) switch (p.$$typeof) {
        case pn:
          if (y = fi(i, u, p.render, y, E), qr !== 0) {
            p = u.treeContext, u.treeContext = Zt(p, 1, 0);
            try {
              gt(i, u, y);
            } finally {
              u.treeContext = p;
            }
          } else gt(i, u, y);
          return;
        case a:
          p = p.type, y = hi(p, y), sa(i, u, p, y, E);
          return;
        case Ur:
          if (E = y.children, p = p._context, y = y.value, R = p._currentValue, p._currentValue = y, D = ge, ge = y = { parent: D, depth: D === null ? 0 : D.depth + 1, context: p, parentValue: R, value: y }, u.context = y, gt(i, u, E), i = ge, i === null) throw Error(t(403));
          y = i.parentValue, i.context._currentValue = y === A ? i.context._defaultValue : y, i = ge = i.parent, u.context = i;
          return;
        case Tr:
          y = y.children, y = y(p._currentValue), gt(i, u, y);
          return;
        case c:
          E = p._init, p = E(p._payload), y = hi(p, y), sa(i, u, p, y, void 0);
          return;
      }
      throw Error(t(
        130,
        p == null ? p : typeof p,
        ""
      ));
    }
  }
  function gt(i, u, p) {
    if (u.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case fn:
          sa(i, u, p.type, p.props, p.ref);
          return;
        case cr:
          throw Error(t(257));
        case c:
          var y = p._init;
          p = y(p._payload), gt(i, u, p);
          return;
      }
      if ($e(p)) {
        gi(i, u, p);
        return;
      }
      if (p === null || typeof p != "object" ? y = null : (y = F && p[F] || p["@@iterator"], y = typeof y == "function" ? y : null), y && (y = y.call(p))) {
        if (p = y.next(), !p.done) {
          var E = [];
          do
            E.push(p.value), p = y.next();
          while (!p.done);
          gi(i, u, E);
        }
        return;
      }
      throw i = Object.prototype.toString.call(p), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : i));
    }
    typeof p == "string" ? (y = u.blockedSegment, y.lastPushedText = I(u.blockedSegment.chunks, p, i.responseState, y.lastPushedText)) : typeof p == "number" && (y = u.blockedSegment, y.lastPushedText = I(u.blockedSegment.chunks, "" + p, i.responseState, y.lastPushedText));
  }
  function gi(i, u, p) {
    for (var y = p.length, E = 0; E < y; E++) {
      var R = u.treeContext;
      u.treeContext = Zt(R, y, E);
      try {
        la(i, u, p[E]);
      } finally {
        u.treeContext = R;
      }
    }
  }
  function la(i, u, p) {
    var y = u.blockedSegment.formatContext, E = u.legacyContext, R = u.context;
    try {
      return gt(i, u, p);
    } catch (oe) {
      if (aa(), typeof oe == "object" && oe !== null && typeof oe.then == "function") {
        p = oe;
        var D = u.blockedSegment, V = Sn(i, D.chunks.length, null, D.formatContext, D.lastPushedText, !0);
        D.children.push(V), D.lastPushedText = !1, i = oa(i, u.node, u.blockedBoundary, V, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, p.then(i, i), u.blockedSegment.formatContext = y, u.legacyContext = E, u.context = R, Lt(R);
      } else throw u.blockedSegment.formatContext = y, u.legacyContext = E, u.context = R, Lt(R), oe;
    }
  }
  function Xs(i) {
    var u = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, bi(this, u, i);
  }
  function mi(i, u, p) {
    var y = i.blockedBoundary;
    i.blockedSegment.status = 3, y === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.close())) : (y.pendingTasks--, y.forceClientRender || (y.forceClientRender = !0, i = p === void 0 ? Error(t(432)) : p, y.errorDigest = u.onError(i), y.parentFlushed && u.clientRenderedBoundaries.push(y)), y.fallbackAbortableTasks.forEach(function(E) {
      return mi(E, u, p);
    }), y.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (y = u.onAllReady, y()));
  }
  function Cn(i, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var p = u.children[0];
      p.id = u.id, p.parentFlushed = !0, p.status === 1 && Cn(i, p);
    } else i.completedSegments.push(u);
  }
  function bi(i, u, p) {
    if (u === null) {
      if (p.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = p;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Gr, u = i.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && Cn(u, p), u.parentFlushed && i.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(Xs, i), u.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (Cn(u, p), u.completedSegments.length === 1 && u.parentFlushed && i.partialBoundaries.push(u)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function yi(i) {
    if (i.status !== 2) {
      var u = ge, p = ia.current;
      ia.current = di;
      var y = kn;
      kn = i.responseState;
      try {
        var E = i.pingedTasks, R;
        for (R = 0; R < E.length; R++) {
          var D = E[R], V = i, oe = D.blockedSegment;
          if (oe.status === 0) {
            Lt(D.context);
            try {
              gt(V, D, D.node), oe.lastPushedText && oe.textEmbedded && oe.chunks.push(L), D.abortSet.delete(D), oe.status = 1, bi(V, D.blockedBoundary, oe);
            } catch (Ct) {
              if (aa(), typeof Ct == "object" && Ct !== null && typeof Ct.then == "function") {
                var be = D.ping;
                Ct.then(be, be);
              } else {
                D.abortSet.delete(D), oe.status = 4;
                var me = D.blockedBoundary, Ue = Ct, mt = Yr(V, Ue);
                if (me === null ? xn(V, Ue) : (me.pendingTasks--, me.forceClientRender || (me.forceClientRender = !0, me.errorDigest = mt, me.parentFlushed && V.clientRenderedBoundaries.push(me))), V.allPendingTasks--, V.allPendingTasks === 0) {
                  var xt = V.onAllReady;
                  xt();
                }
              }
            } finally {
            }
          }
        }
        E.splice(0, R), i.destination !== null && ua(i, i.destination);
      } catch (Ct) {
        Yr(i, Ct), xn(i, Ct);
      } finally {
        kn = y, ia.current = p, p === di && Lt(u);
      }
    }
  }
  function _n(i, u, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var y = p.id = i.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, i = i.responseState, o(u, Fe), o(u, i.placeholderPrefix), i = h(y.toString(16)), o(u, i), s(u, ir);
      case 1:
        p.status = 2;
        var E = !0;
        y = p.chunks;
        var R = 0;
        p = p.children;
        for (var D = 0; D < p.length; D++) {
          for (E = p[D]; R < E.index; R++) o(u, y[R]);
          E = Tn(i, u, E);
        }
        for (; R < y.length - 1; R++) o(u, y[R]);
        return R < y.length && (E = s(u, y[R])), E;
      default:
        throw Error(t(390));
    }
  }
  function Tn(i, u, p) {
    var y = p.boundary;
    if (y === null) return _n(i, u, p);
    if (y.parentFlushed = !0, y.forceClientRender) y = y.errorDigest, s(u, wt), o(u, Rt), y && (o(u, sr), o(u, h(ye(y))), o(u, or)), s(u, zr), _n(i, u, p);
    else if (0 < y.pendingTasks) {
      y.rootSegmentID = i.nextSegmentId++, 0 < y.completedSegments.length && i.partialBoundaries.push(y);
      var E = i.responseState, R = E.nextSuspenseID++;
      E = f(E.boundaryPrefix + R.toString(16)), y = y.id = E, tt(u, i.responseState, y), _n(i, u, p);
    } else if (y.byteSize > i.progressiveChunkSize) y.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(y), tt(u, i.responseState, y.id), _n(i, u, p);
    else {
      if (s(u, Bt), p = y.completedSegments, p.length !== 1) throw Error(t(391));
      Tn(i, u, p[0]);
    }
    return s(u, pt);
  }
  function vi(i, u, p) {
    return xr(u, i.responseState, p.formatContext, p.id), Tn(i, u, p), It(u, p.formatContext);
  }
  function wi(i, u, p) {
    for (var y = p.completedSegments, E = 0; E < y.length; E++) ki(i, u, p, y[E]);
    if (y.length = 0, i = i.responseState, y = p.id, p = p.rootSegmentID, o(u, i.startInlineScript), i.sentCompleteBoundaryFunction ? o(u, _e) : (i.sentCompleteBoundaryFunction = !0, o(u, Y)), y === null) throw Error(t(395));
    return p = h(p.toString(16)), o(u, y), o(u, Ge), o(u, i.segmentPrefix), o(u, p), s(u, Be);
  }
  function ki(i, u, p, y) {
    if (y.status === 2) return !0;
    var E = y.id;
    if (E === -1) {
      if ((y.id = p.rootSegmentID) === -1) throw Error(t(392));
      return vi(i, u, y);
    }
    return vi(i, u, y), i = i.responseState, o(u, i.startInlineScript), i.sentCompleteSegmentFunction ? o(u, ur) : (i.sentCompleteSegmentFunction = !0, o(u, Cr)), o(u, i.segmentPrefix), E = h(E.toString(16)), o(u, E), o(u, S), o(u, i.placeholderPrefix), o(u, E), s(u, J);
  }
  function ua(i, u) {
    r = new Uint8Array(512), n = 0;
    try {
      var p = i.completedRootSegment;
      if (p !== null && i.pendingRootTasks === 0) {
        Tn(i, u, p), i.completedRootSegment = null;
        var y = i.responseState.bootstrapChunks;
        for (p = 0; p < y.length - 1; p++) o(u, y[p]);
        p < y.length && s(u, y[p]);
      }
      var E = i.clientRenderedBoundaries, R;
      for (R = 0; R < E.length; R++) {
        var D = E[R];
        y = u;
        var V = i.responseState, oe = D.id, be = D.errorDigest, me = D.errorMessage, Ue = D.errorComponentStack;
        if (o(y, V.startInlineScript), V.sentClientRenderFunction ? o(y, je) : (V.sentClientRenderFunction = !0, o(
          y,
          lt
        )), oe === null) throw Error(t(395));
        o(y, oe), o(y, ut), (be || me || Ue) && (o(y, Xt), o(y, h(Jt(be || "")))), (me || Ue) && (o(y, Xt), o(y, h(Jt(me || "")))), Ue && (o(y, Xt), o(y, h(Jt(Ue)))), s(y, Xe);
      }
      E.splice(0, R);
      var mt = i.completedBoundaries;
      for (R = 0; R < mt.length; R++) wi(i, u, mt[R]);
      mt.splice(0, R), d(u), r = new Uint8Array(512), n = 0;
      var xt = i.partialBoundaries;
      for (R = 0; R < xt.length; R++) {
        var Ct = xt[R];
        e: {
          E = i, D = u;
          var An = Ct.completedSegments;
          for (V = 0; V < An.length; V++) if (!ki(
            E,
            D,
            Ct,
            An[V]
          )) {
            V++, An.splice(0, V);
            var xi = !1;
            break e;
          }
          An.splice(0, V), xi = !0;
        }
        if (!xi) {
          i.destination = null, R++, xt.splice(0, R);
          return;
        }
      }
      xt.splice(0, R);
      var ca = i.completedBoundaries;
      for (R = 0; R < ca.length; R++) wi(i, u, ca[R]);
      ca.splice(0, R);
    } finally {
      d(u), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && u.close();
    }
  }
  function Si(i, u) {
    try {
      var p = i.abortableTasks;
      p.forEach(function(y) {
        return mi(y, i, u);
      }), p.clear(), i.destination !== null && ua(i, i.destination);
    } catch (y) {
      Yr(i, y), xn(i, y);
    }
  }
  return On.renderToReadableStream = function(i, u) {
    return new Promise(function(p, y) {
      var E, R, D = new Promise(function(me, Ue) {
        R = me, E = Ue;
      }), V = Ys(i, xe(u ? u.identifierPrefix : void 0, u ? u.nonce : void 0, u ? u.bootstrapScriptContent : void 0, u ? u.bootstrapScripts : void 0, u ? u.bootstrapModules : void 0), Ye(u ? u.namespaceURI : void 0), u ? u.progressiveChunkSize : void 0, u ? u.onError : void 0, R, function() {
        var me = new ReadableStream({ type: "bytes", pull: function(Ue) {
          if (V.status === 1) V.status = 2, x(Ue, V.fatalError);
          else if (V.status !== 2 && V.destination === null) {
            V.destination = Ue;
            try {
              ua(V, Ue);
            } catch (mt) {
              Yr(V, mt), xn(V, mt);
            }
          }
        }, cancel: function() {
          Si(V);
        } }, { highWaterMark: 0 });
        me.allReady = D, p(me);
      }, function(me) {
        D.catch(function() {
        }), y(me);
      }, E);
      if (u && u.signal) {
        var oe = u.signal, be = function() {
          Si(V, oe.reason), oe.removeEventListener("abort", be);
        };
        oe.addEventListener("abort", be);
      }
      yi(V);
    });
  }, On.version = "18.3.1", On;
}
var Dr, Uo;
Dr = jl(), Uo = Nl();
Dr.version;
Dr.renderToString;
Dr.renderToStaticMarkup;
Dr.renderToNodeStream;
Dr.renderToStaticNodeStream;
Uo.renderToReadableStream;
const Ll = "staticMarkup";
function Fl() {
  const e = el().indexOf(Ll) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const nr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Fl(), { onClick: o, ...s } = r.props;
  if (n)
    return Ze.cloneElement(r, {
      ...s,
      onClick: (h) => (Pl(e), o ? o(h) : !0)
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
  return Ze.cloneElement(r, {
    ...s,
    onClick: o,
    ...m
  });
};
l.number, l.number, l.func, l.object;
l.arrayOf(Lo).isRequired, l.number;
const Ml = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ha = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  block: o,
  color: s,
  disabled: d,
  element: m,
  href: h,
  icon: f,
  innerRef: x,
  onClick: k,
  size: j,
  classes: B,
  target: _,
  ...w
}) => {
  const P = Ir("btn", {
    [`btn-${s}`]: !0,
    "btn-md": j === "small",
    "btn-sm": j === "xsmall",
    "btn-block": o,
    disabled: d
  });
  let M = m;
  return h && m === "button" && (M = "a"), /* @__PURE__ */ z.jsx(
    nr,
    {
      gaData: {
        ...Ml,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ z.jsxs(
        M,
        {
          type: M === "button" && k ? "button" : void 0,
          ...w,
          className: Ir(B) || P,
          href: h,
          ref: x,
          onClick: k,
          "aria-label": n,
          target: M === "a" ? _ : null,
          children: [
            f && /* @__PURE__ */ z.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Ha.propTypes = {
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
  gaData: Wa,
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
Ha.defaultProps = {
  label: "",
  cardTitle: "",
  ariaLabel: void 0,
  block: void 0,
  color: "gray",
  disabled: void 0,
  element: "button",
  href: void 0,
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "default",
  classes: void 0,
  target: "_self"
};
var Wo = { exports: {} }, Ne = {}, zi;
function Dl() {
  if (zi) return Ne;
  zi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), B = Symbol.for("react.client.reference");
  function _(w) {
    if (typeof w == "object" && w !== null) {
      var P = w.$$typeof;
      switch (P) {
        case e:
          switch (w = w.type, w) {
            case r:
            case o:
            case n:
            case h:
            case f:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case d:
                case m:
                case k:
                case x:
                  return w;
                case s:
                  return w;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return Ne.ContextConsumer = s, Ne.ContextProvider = d, Ne.Element = e, Ne.ForwardRef = m, Ne.Fragment = r, Ne.Lazy = k, Ne.Memo = x, Ne.Portal = t, Ne.Profiler = o, Ne.StrictMode = n, Ne.Suspense = h, Ne.SuspenseList = f, Ne.isContextConsumer = function(w) {
    return _(w) === s;
  }, Ne.isContextProvider = function(w) {
    return _(w) === d;
  }, Ne.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Ne.isForwardRef = function(w) {
    return _(w) === m;
  }, Ne.isFragment = function(w) {
    return _(w) === r;
  }, Ne.isLazy = function(w) {
    return _(w) === k;
  }, Ne.isMemo = function(w) {
    return _(w) === x;
  }, Ne.isPortal = function(w) {
    return _(w) === t;
  }, Ne.isProfiler = function(w) {
    return _(w) === o;
  }, Ne.isStrictMode = function(w) {
    return _(w) === n;
  }, Ne.isSuspense = function(w) {
    return _(w) === h;
  }, Ne.isSuspenseList = function(w) {
    return _(w) === f;
  }, Ne.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === o || w === n || w === h || w === f || w === j || typeof w == "object" && w !== null && (w.$$typeof === k || w.$$typeof === x || w.$$typeof === d || w.$$typeof === s || w.$$typeof === m || w.$$typeof === B || w.getModuleId !== void 0);
  }, Ne.typeOf = _, Ne;
}
Wo.exports = Dl();
var Ho = Wo.exports;
function zl(e) {
  function t(L, I, N, $, b) {
    for (var te = 0, T = 0, re = 0, Q = 0, K, H, ne = 0, se = 0, Z, pe = Z = K = 0, ee = 0, le = 0, We = 0, de = 0, et = N.length, He = et - 1, he, W = "", ae = "", Je = "", st = "", Fe; ee < et; ) {
      if (H = N.charCodeAt(ee), ee === He && T + Q + re + te !== 0 && (T !== 0 && (H = T === 47 ? 10 : 47), Q = re = te = 0, et++, He++), T + Q + re + te === 0) {
        if (ee === He && (0 < le && (W = W.replace(j, "")), 0 < W.trim().length)) {
          switch (H) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              W += N.charAt(ee);
          }
          H = 59;
        }
        switch (H) {
          case 123:
            for (W = W.trim(), K = W.charCodeAt(0), Z = 1, de = ++ee; ee < et; ) {
              switch (H = N.charCodeAt(ee)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (H = N.charCodeAt(ee + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (pe = ee + 1; pe < He; ++pe)
                          switch (N.charCodeAt(pe)) {
                            case 47:
                              if (H === 42 && N.charCodeAt(pe - 1) === 42 && ee + 2 !== pe) {
                                ee = pe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (H === 47) {
                                ee = pe + 1;
                                break e;
                              }
                          }
                        ee = pe;
                      }
                  }
                  break;
                case 91:
                  H++;
                case 40:
                  H++;
                case 34:
                case 39:
                  for (; ee++ < He && N.charCodeAt(ee) !== H; )
                    ;
              }
              if (Z === 0) break;
              ee++;
            }
            switch (Z = N.substring(de, ee), K === 0 && (K = (W = W.replace(k, "").trim()).charCodeAt(0)), K) {
              case 64:
                switch (0 < le && (W = W.replace(j, "")), H = W.charCodeAt(1), H) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = I;
                    break;
                  default:
                    le = Ke;
                }
                if (Z = t(I, le, Z, H, b + 1), de = Z.length, 0 < xe && (le = r(Ke, W, We), Fe = m(3, Z, le, I, Ae, fe, de, H, b, $), W = le.join(""), Fe !== void 0 && (de = (Z = Fe.trim()).length) === 0 && (H = 0, Z = "")), 0 < de) switch (H) {
                  case 115:
                    W = W.replace(ce, d);
                  case 100:
                  case 109:
                  case 45:
                    Z = W + "{" + Z + "}";
                    break;
                  case 107:
                    W = W.replace(U, "$1 $2"), Z = W + "{" + Z + "}", Z = ke === 1 || ke === 2 && s("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                    break;
                  default:
                    Z = W + Z, $ === 112 && (Z = (ae += Z, ""));
                }
                else Z = "";
                break;
              default:
                Z = t(I, r(I, W, We), Z, $, b + 1);
            }
            Je += Z, Z = We = le = pe = K = 0, W = "", H = N.charCodeAt(++ee);
            break;
          case 125:
          case 59:
            if (W = (0 < le ? W.replace(j, "") : W).trim(), 1 < (de = W.length)) switch (pe === 0 && (K = W.charCodeAt(0), K === 45 || 96 < K && 123 > K) && (de = (W = W.replace(" ", ":")).length), 0 < xe && (Fe = m(1, W, I, L, Ae, fe, ae.length, $, b, $)) !== void 0 && (de = (W = Fe.trim()).length) === 0 && (W = "\0\0"), K = W.charCodeAt(0), H = W.charCodeAt(1), K) {
              case 0:
                break;
              case 64:
                if (H === 105 || H === 99) {
                  st += W + N.charAt(ee);
                  break;
                }
              default:
                W.charCodeAt(de - 1) !== 58 && (ae += o(W, K, H, W.charCodeAt(2)));
            }
            We = le = pe = K = 0, W = "", H = N.charCodeAt(++ee);
        }
      }
      switch (H) {
        case 13:
        case 10:
          T === 47 ? T = 0 : 1 + K === 0 && $ !== 107 && 0 < W.length && (le = 1, W += "\0"), 0 < xe * Ye && m(0, W, I, L, Ae, fe, ae.length, $, b, $), fe = 1, Ae++;
          break;
        case 59:
        case 125:
          if (T + Q + re + te === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, he = N.charAt(ee), H) {
            case 9:
            case 32:
              if (Q + te + T === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  he = "";
                  break;
                default:
                  H !== 32 && (he = " ");
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
              Q + T + te === 0 && (le = We = 1, he = "\f" + he);
              break;
            case 108:
              if (Q + T + te + Re === 0 && 0 < pe) switch (ee - pe) {
                case 2:
                  ne === 112 && N.charCodeAt(ee - 3) === 58 && (Re = ne);
                case 8:
                  se === 111 && (Re = se);
              }
              break;
            case 58:
              Q + T + te === 0 && (pe = ee);
              break;
            case 44:
              T + re + Q + te === 0 && (le = 1, he += "\r");
              break;
            case 34:
            case 39:
              T === 0 && (Q = Q === H ? 0 : Q === 0 ? H : Q);
              break;
            case 91:
              Q + T + re === 0 && te++;
              break;
            case 93:
              Q + T + re === 0 && te--;
              break;
            case 41:
              Q + T + te === 0 && re--;
              break;
            case 40:
              if (Q + T + te === 0) {
                if (K === 0) switch (2 * ne + 3 * se) {
                  case 533:
                    break;
                  default:
                    K = 1;
                }
                re++;
              }
              break;
            case 64:
              T + re + Q + te + pe + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + te + re)) switch (T) {
                case 0:
                  switch (2 * H + 3 * N.charCodeAt(ee + 1)) {
                    case 235:
                      T = 47;
                      break;
                    case 220:
                      de = ee, T = 42;
                  }
                  break;
                case 42:
                  H === 47 && ne === 42 && de + 2 !== ee && (N.charCodeAt(de + 2) === 33 && (ae += N.substring(de, ee + 1)), he = "", T = 0);
              }
          }
          T === 0 && (W += he);
      }
      se = ne, ne = H, ee++;
    }
    if (de = ae.length, 0 < de) {
      if (le = I, 0 < xe && (Fe = m(2, ae, le, L, Ae, fe, de, $, b, $), Fe !== void 0 && (ae = Fe).length === 0)) return st + ae + Je;
      if (ae = le.join(",") + "{" + ae + "}", ke * Re !== 0) {
        switch (ke !== 2 || s(ae, 2) || (Re = 0), Re) {
          case 111:
            ae = ae.replace(G, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(q, "::-webkit-input-$1") + ae.replace(q, "::-moz-$1") + ae.replace(q, ":-ms-input-$1") + ae;
        }
        Re = 0;
      }
    }
    return st + ae + Je;
  }
  function r(L, I, N) {
    var $ = I.trim().split(P);
    I = $;
    var b = $.length, te = L.length;
    switch (te) {
      case 0:
      case 1:
        var T = 0;
        for (L = te === 0 ? "" : L[0] + " "; T < b; ++T)
          I[T] = n(L, I[T], N).trim();
        break;
      default:
        var re = T = 0;
        for (I = []; T < b; ++T)
          for (var Q = 0; Q < te; ++Q)
            I[re++] = n(L[Q] + " ", $[T], N).trim();
    }
    return I;
  }
  function n(L, I, N) {
    var $ = I.charCodeAt(0);
    switch (33 > $ && ($ = (I = I.trim()).charCodeAt(0)), $) {
      case 38:
        return I.replace(M, "$1" + L.trim());
      case 58:
        return L.trim() + I.replace(M, "$1" + L.trim());
      default:
        if (0 < 1 * N && 0 < I.indexOf("\f")) return I.replace(M, (L.charCodeAt(0) === 58 ? "" : "$1") + L.trim());
    }
    return L + I;
  }
  function o(L, I, N, $) {
    var b = L + ";", te = 2 * I + 3 * N + 4 * $;
    if (te === 944) {
      L = b.indexOf(":", 9) + 1;
      var T = b.substring(L, b.length - 1).trim();
      return T = b.substring(0, L).trim() + T + ";", ke === 1 || ke === 2 && s(T, 1) ? "-webkit-" + T + T : T;
    }
    if (ke === 0 || ke === 2 && !s(b, 1)) return b;
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
        if (0 < b.indexOf("image-set(", 11)) return b.replace(Se, "$1-webkit-$2") + b;
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
        return T = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + T + "-webkit-" + b + "-ms-flex-pack" + T + b;
      case 1005:
        return _.test(b) ? b.replace(B, ":-webkit-") + b.replace(B, ":-moz-") + b : b;
      case 1e3:
        switch (T = b.substring(13).trim(), I = T.indexOf("-") + 1, T.charCodeAt(0) + T.charCodeAt(I)) {
          case 226:
            T = b.replace(C, "tb");
            break;
          case 232:
            T = b.replace(C, "tb-rl");
            break;
          case 220:
            T = b.replace(C, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + T + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (I = (b = L).length - 10, T = (b.charCodeAt(I) === 33 ? b.substring(0, I) : b).substring(L.indexOf(":", 7) + 1).trim(), te = T.charCodeAt(0) + (T.charCodeAt(7) | 0)) {
          case 203:
            if (111 > T.charCodeAt(8)) break;
          case 115:
            b = b.replace(T, "-webkit-" + T) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(T, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + b.replace(T, "-webkit-" + T) + ";" + b.replace(T, "-ms-" + T + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45) switch (b.charCodeAt(6)) {
          case 105:
            return T = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + T + "-ms-flex-" + T + b;
          case 115:
            return "-webkit-" + b + "-ms-flex-item-" + b.replace(Te, "") + b;
          default:
            return "-webkit-" + b + "-ms-flex-line-pack" + b.replace("align-content", "").replace(Te, "") + b;
        }
        break;
      case 973:
      case 989:
        if (b.charCodeAt(3) !== 45 || b.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if ($e.test(L) === !0) return (T = L.substring(L.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(L.replace("stretch", "fill-available"), I, N, $).replace(":fill-available", ":stretch") : b.replace(T, "-webkit-" + T) + b.replace(T, "-moz-" + T.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, N + $ === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10)) return b.substring(0, b.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(L, I) {
    var N = L.indexOf(I === 1 ? ":" : "{"), $ = L.substring(0, I !== 3 ? N : 10);
    return N = L.substring(N + 1, L.length - 1), Me(I !== 2 ? $ : $.replace(Ie, "$1"), N, I);
  }
  function d(L, I) {
    var N = o(I, I.charCodeAt(0), I.charCodeAt(1), I.charCodeAt(2));
    return N !== I + ";" ? N.replace(ye, " or ($1)").substring(4) : "(" + I + ")";
  }
  function m(L, I, N, $, b, te, T, re, Q, K) {
    for (var H = 0, ne = I, se; H < xe; ++H)
      switch (se = Pe[H].call(x, L, ne, N, $, b, te, T, re, Q, K)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = se;
      }
    if (ne !== I) return ne;
  }
  function h(L) {
    switch (L) {
      case void 0:
      case null:
        xe = Pe.length = 0;
        break;
      default:
        if (typeof L == "function") Pe[xe++] = L;
        else if (typeof L == "object") for (var I = 0, N = L.length; I < N; ++I)
          h(L[I]);
        else Ye = !!L | 0;
    }
    return h;
  }
  function f(L) {
    return L = L.prefix, L !== void 0 && (Me = null, L ? typeof L != "function" ? ke = 1 : (ke = 2, Me = L) : ke = 0), f;
  }
  function x(L, I) {
    var N = L;
    if (33 > N.charCodeAt(0) && (N = N.trim()), ve = N, N = [ve], 0 < xe) {
      var $ = m(-1, I, N, N, Ae, fe, 0, 0, 0, 0);
      $ !== void 0 && typeof $ == "string" && (I = $);
    }
    var b = t(Ke, N, I, 0, 0);
    return 0 < xe && ($ = m(-2, b, N, N, Ae, fe, b.length, 0, 0, 0), $ !== void 0 && (b = $)), ve = "", Re = 0, fe = Ae = 1, b;
  }
  var k = /^\0+/g, j = /[\0\r\f]/g, B = /: */g, _ = /zoo|gra/, w = /([,: ])(transform)/g, P = /,\r+?/g, M = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, q = /::(place)/g, G = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, ye = /([\s\S]*?);/g, Te = /-self|flex-/g, Ie = /[^]*?(:[rp][el]a[\w-]+)[^]*/, $e = /stretch|:\s*\w+\-(?:conte|avail)/, Se = /([^-])(image-set\()/, fe = 1, Ae = 1, Re = 0, ke = 1, Ke = [], Pe = [], xe = 0, Me = null, Ye = 0, ve = "";
  return x.use = h, x.set = f, e !== void 0 && f(e), x;
}
var $l = {
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
function Bl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ul = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $i = /* @__PURE__ */ Bl(
  function(e) {
    return Ul.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Vo = { exports: {} }, Ee = {}, Bi;
function Wl() {
  if (Bi) return Ee;
  Bi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, k = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, B = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function q(C) {
    if (typeof C == "object" && C !== null) {
      var ce = C.$$typeof;
      switch (ce) {
        case t:
          switch (C = C.type, C) {
            case h:
            case f:
            case n:
            case s:
            case o:
            case k:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case m:
                case x:
                case _:
                case B:
                case d:
                  return C;
                default:
                  return ce;
              }
          }
        case r:
          return ce;
      }
    }
  }
  function G(C) {
    return q(C) === f;
  }
  return Ee.AsyncMode = h, Ee.ConcurrentMode = f, Ee.ContextConsumer = m, Ee.ContextProvider = d, Ee.Element = t, Ee.ForwardRef = x, Ee.Fragment = n, Ee.Lazy = _, Ee.Memo = B, Ee.Portal = r, Ee.Profiler = s, Ee.StrictMode = o, Ee.Suspense = k, Ee.isAsyncMode = function(C) {
    return G(C) || q(C) === h;
  }, Ee.isConcurrentMode = G, Ee.isContextConsumer = function(C) {
    return q(C) === m;
  }, Ee.isContextProvider = function(C) {
    return q(C) === d;
  }, Ee.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, Ee.isForwardRef = function(C) {
    return q(C) === x;
  }, Ee.isFragment = function(C) {
    return q(C) === n;
  }, Ee.isLazy = function(C) {
    return q(C) === _;
  }, Ee.isMemo = function(C) {
    return q(C) === B;
  }, Ee.isPortal = function(C) {
    return q(C) === r;
  }, Ee.isProfiler = function(C) {
    return q(C) === s;
  }, Ee.isStrictMode = function(C) {
    return q(C) === o;
  }, Ee.isSuspense = function(C) {
    return q(C) === k;
  }, Ee.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === f || C === s || C === o || C === k || C === j || typeof C == "object" && C !== null && (C.$$typeof === _ || C.$$typeof === B || C.$$typeof === d || C.$$typeof === m || C.$$typeof === x || C.$$typeof === P || C.$$typeof === M || C.$$typeof === U || C.$$typeof === w);
  }, Ee.typeOf = q, Ee;
}
Vo.exports = Wl();
var Hl = Vo.exports, Va = Hl, Vl = {
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
}, ql = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Gl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, qo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, qa = {};
qa[Va.ForwardRef] = Gl;
qa[Va.Memo] = qo;
function Ui(e) {
  return Va.isMemo(e) ? qo : qa[e.$$typeof] || Vl;
}
var Yl = Object.defineProperty, Xl = Object.getOwnPropertyNames, Wi = Object.getOwnPropertySymbols, Jl = Object.getOwnPropertyDescriptor, Ql = Object.getPrototypeOf, Hi = Object.prototype;
function Go(e, t, r) {
  if (typeof t != "string") {
    if (Hi) {
      var n = Ql(t);
      n && n !== Hi && Go(e, n, r);
    }
    var o = Xl(t);
    Wi && (o = o.concat(Wi(t)));
    for (var s = Ui(e), d = Ui(t), m = 0; m < o.length; ++m) {
      var h = o[m];
      if (!ql[h] && !(r && r[h]) && !(d && d[h]) && !(s && s[h])) {
        var f = Jl(t, h);
        try {
          Yl(e, h, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var Zl = Go;
const Kl = /* @__PURE__ */ Ua(Zl);
var at = { env: { NODE_ENV: "production" } };
function Mt() {
  return (Mt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Vi = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Aa = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ho.typeOf(e);
}, Un = Object.freeze([]), er = Object.freeze({});
function on(e) {
  return typeof e == "function";
}
function qi(e) {
  return e.displayName || e.name || "Component";
}
function Ga(e) {
  return e && typeof e.styledComponentId == "string";
}
var Pr = typeof at < "u" && at.env !== void 0 && (at.env.REACT_APP_SC_ATTR || at.env.SC_ATTR) || "data-styled", Ya = typeof window < "u" && "HTMLElement" in window, eu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof at < "u" && at.env !== void 0 && (at.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && at.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? at.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && at.env.REACT_APP_SC_DISABLE_SPEEDY : at.env.SC_DISABLE_SPEEDY !== void 0 && at.env.SC_DISABLE_SPEEDY !== "" ? at.env.SC_DISABLE_SPEEDY !== "false" && at.env.SC_DISABLE_SPEEDY : at.env.NODE_ENV !== "production"));
function cn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var tu = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++) n += this.groupSizes[o];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, d = s; r >= d; ) (d <<= 1) < 0 && cn(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(o), this.length = d;
      for (var m = s; m < d; m++) this.groupSizes[m] = 0;
    }
    for (var h = this.indexOfGroup(r + 1), f = 0, x = n.length; f < x; f++) this.tag.insertRule(h, n[f]) && (this.groupSizes[r]++, h++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), s = o + n;
      this.groupSizes[r] = 0;
      for (var d = o; d < s; d++) this.tag.deleteRule(o);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var o = this.groupSizes[r], s = this.indexOfGroup(r), d = s + o, m = s; m < d; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), Dn = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Map(), rn = 1, In = function(e) {
  if (Dn.has(e)) return Dn.get(e);
  for (; Wn.has(rn); ) rn++;
  var t = rn++;
  return Dn.set(e, t), Wn.set(t, e), t;
}, ru = function(e) {
  return Wn.get(e);
}, nu = function(e, t) {
  t >= rn && (rn = t + 1), Dn.set(e, t), Wn.set(t, e);
}, au = "style[" + Pr + '][data-styled-version="5.3.11"]', iu = new RegExp("^" + Pr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ou = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, d = o.length; s < d; s++) (n = o[s]) && e.registerName(t, n);
}, su = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = r.length; o < s; o++) {
    var d = r[o].trim();
    if (d) {
      var m = d.match(iu);
      if (m) {
        var h = 0 | parseInt(m[1], 10), f = m[2];
        h !== 0 && (nu(f, h), ou(e, f, m[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, lu = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Yo = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(m) {
    for (var h = m.childNodes, f = h.length; f >= 0; f--) {
      var x = h[f];
      if (x && x.nodeType === 1 && x.hasAttribute(Pr)) return x;
    }
  }(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Pr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = lu();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, uu = function() {
  function e(r) {
    var n = this.element = Yo(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, d = 0, m = s.length; d < m; d++) {
        var h = s[d];
        if (h.ownerNode === o) return h;
      }
      cn(17);
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
}(), cu = function() {
  function e(r) {
    var n = this.element = Yo(r);
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
}(), du = function() {
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
}(), Gi = Ya, fu = { isServer: !Ya, useCSSOMInjection: !eu }, Xo = function() {
  function e(r, n, o) {
    r === void 0 && (r = er), n === void 0 && (n = {}), this.options = Mt({}, fu, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && Ya && Gi && (Gi = !1, function(s) {
      for (var d = document.querySelectorAll(au), m = 0, h = d.length; m < h; m++) {
        var f = d[m];
        f && f.getAttribute(Pr) !== "active" && (su(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return In(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Mt({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = o ? new du(d) : s ? new uu(d) : new cu(d), new tu(r)));
    var r, n, o, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (In(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(In(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(In(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, s = "", d = 0; d < o; d++) {
        var m = ru(d);
        if (m !== void 0) {
          var h = r.names.get(m), f = n.getGroup(d);
          if (h && f && h.size) {
            var x = Pr + ".g" + d + '[id="' + m + '"]', k = "";
            h !== void 0 && h.forEach(function(j) {
              j.length > 0 && (k += j + ",");
            }), s += "" + f + x + '{content:"' + k + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), pu = /(a)(d)/gi, Yi = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ra(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Yi(t % 52) + r;
  return (Yi(t % 52) + r).replace(pu, "$1-$2");
}
var Er = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Jo = function(e) {
  return Er(5381, e);
};
function hu(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (on(r) && !Ga(r)) return !1;
  }
  return !0;
}
var gu = Jo("5.3.11"), mu = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && hu(t), this.componentId = r, this.baseHash = Er(gu, r), this.baseStyle = n, Xo.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = jr(this.rules, t, r, n).join(""), m = Ra(Er(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(o, m)) {
        var h = n(d, "." + m, void 0, o);
        r.insertRules(o, m, h);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, x = Er(this.baseHash, n.hash), k = "", j = 0; j < f; j++) {
        var B = this.rules[j];
        if (typeof B == "string") k += B;
        else if (B) {
          var _ = jr(B, t, r, n), w = Array.isArray(_) ? _.join("") : _;
          x = Er(x, w + j), k += w;
        }
      }
      if (k) {
        var P = Ra(x >>> 0);
        if (!r.hasNameForId(o, P)) {
          var M = n(k, "." + P, void 0, o);
          r.insertRules(o, P, M);
        }
        s.push(P);
      }
    }
    return s.join(" ");
  }, e;
}(), bu = /^\s*\/\/.*$/gm, yu = [":", "[", ".", "#"];
function vu(e) {
  var t, r, n, o, s = er, d = s.options, m = d === void 0 ? er : d, h = s.plugins, f = h === void 0 ? Un : h, x = new zl(m), k = [], j = /* @__PURE__ */ function(w) {
    function P(M) {
      if (M) try {
        w(M + "}");
      } catch {
      }
    }
    return function(M, U, q, G, C, ce, ye, Te, Ie, $e) {
      switch (M) {
        case 1:
          if (Ie === 0 && U.charCodeAt(0) === 64) return w(U + ";"), "";
          break;
        case 2:
          if (Te === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Te) {
            case 102:
            case 112:
              return w(q[0] + U), "";
            default:
              return U + ($e === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(P);
      }
    };
  }(function(w) {
    k.push(w);
  }), B = function(w, P, M) {
    return P === 0 && yu.indexOf(M[r.length]) !== -1 || M.match(o) ? w : "." + t;
  };
  function _(w, P, M, U) {
    U === void 0 && (U = "&");
    var q = w.replace(bu, ""), G = P && M ? M + " " + P + " { " + q + " }" : q;
    return t = U, r = P, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), x(M || !P ? "" : P, G);
  }
  return x.use([].concat(f, [function(w, P, M) {
    w === 2 && M.length && M[0].lastIndexOf(r) > 0 && (M[0] = M[0].replace(n, B));
  }, j, function(w) {
    if (w === -2) {
      var P = k;
      return k = [], P;
    }
  }])), _.hash = f.length ? f.reduce(function(w, P) {
    return P.name || cn(15), Er(w, P.name);
  }, 5381).toString() : "", _;
}
var Qo = Ze.createContext();
Qo.Consumer;
var Zo = Ze.createContext(), wu = (Zo.Consumer, new Xo()), Ea = vu();
function ku() {
  return $t(Qo) || wu;
}
function Su() {
  return $t(Zo) || Ea;
}
var xu = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Ea);
      var d = n.name + s.hash;
      o.hasNameForId(n.id, d) || o.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return cn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ea), this.name + t.hash;
  }, e;
}(), Cu = /([A-Z])/, _u = /([A-Z])/g, Tu = /^ms-/, Au = function(e) {
  return "-" + e.toLowerCase();
};
function Xi(e) {
  return Cu.test(e) ? e.replace(_u, Au).replace(Tu, "-ms-") : e;
}
var Ji = function(e) {
  return e == null || e === !1 || e === "";
};
function jr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], d = 0, m = e.length; d < m; d += 1) (o = jr(e[d], t, r, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (Ji(e)) return "";
  if (Ga(e)) return "." + e.styledComponentId;
  if (on(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return jr(h, t, r, n);
  }
  var f;
  return e instanceof xu ? r ? (e.inject(r, n), e.getName(n)) : e : Aa(e) ? function x(k, j) {
    var B, _, w = [];
    for (var P in k) k.hasOwnProperty(P) && !Ji(k[P]) && (Array.isArray(k[P]) && k[P].isCss || on(k[P]) ? w.push(Xi(P) + ":", k[P], ";") : Aa(k[P]) ? w.push.apply(w, x(k[P], P)) : w.push(Xi(P) + ": " + (B = P, (_ = k[P]) == null || typeof _ == "boolean" || _ === "" ? "" : typeof _ != "number" || _ === 0 || B in $l || B.startsWith("--") ? String(_).trim() : _ + "px") + ";"));
    return j ? [j + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var Qi = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ru(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return on(e) || Aa(e) ? Qi(jr(Vi(Un, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Qi(jr(Vi(e, r)));
}
var Eu = function(e, t, r) {
  return r === void 0 && (r = er), e.theme !== r.theme && e.theme || t || r.theme;
}, Ou = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Iu = /(^-|-$)/g;
function va(e) {
  return e.replace(Ou, "-").replace(Iu, "");
}
var Pu = function(e) {
  return Ra(Jo(e) >>> 0);
};
function Pn(e) {
  return typeof e == "string" && at.env.NODE_ENV === "production";
}
var Oa = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ju = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Nu(e, t, r) {
  var n = e[r];
  Oa(t) && Oa(n) ? Ko(n, t) : e[r] = t;
}
function Ko(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var o = 0, s = r; o < s.length; o++) {
    var d = s[o];
    if (Oa(d)) for (var m in d) ju(m) && Nu(e, d[m], m);
  }
  return e;
}
var es = Ze.createContext();
es.Consumer;
var wa = {};
function ts(e, t, r) {
  var n = Ga(e), o = !Pn(e), s = t.attrs, d = s === void 0 ? Un : s, m = t.componentId, h = m === void 0 ? function(U, q) {
    var G = typeof U != "string" ? "sc" : va(U);
    wa[G] = (wa[G] || 0) + 1;
    var C = G + "-" + Pu("5.3.11" + G + wa[G]);
    return q ? q + "-" + C : C;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, x = f === void 0 ? function(U) {
    return Pn(U) ? "styled." + U : "Styled(" + qi(U) + ")";
  }(e) : f, k = t.displayName && t.componentId ? va(t.displayName) + "-" + t.componentId : t.componentId || h, j = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, B = t.shouldForwardProp;
  n && e.shouldForwardProp && (B = t.shouldForwardProp ? function(U, q, G) {
    return e.shouldForwardProp(U, q, G) && t.shouldForwardProp(U, q, G);
  } : e.shouldForwardProp);
  var _, w = new mu(r, k, n ? e.componentStyle : void 0), P = w.isStatic && d.length === 0, M = function(U, q) {
    return function(G, C, ce, ye) {
      var Te = G.attrs, Ie = G.componentStyle, $e = G.defaultProps, Se = G.foldedComponentIds, fe = G.shouldForwardProp, Ae = G.styledComponentId, Re = G.target, ke = function($, b, te) {
        $ === void 0 && ($ = er);
        var T = Mt({}, b, { theme: $ }), re = {};
        return te.forEach(function(Q) {
          var K, H, ne, se = Q;
          for (K in on(se) && (se = se(T)), se) T[K] = re[K] = K === "className" ? (H = re[K], ne = se[K], H && ne ? H + " " + ne : H || ne) : se[K];
        }), [T, re];
      }(Eu(C, $t(es), $e) || er, C, Te), Ke = ke[0], Pe = ke[1], xe = function($, b, te, T) {
        var re = ku(), Q = Su(), K = b ? $.generateAndInjectStyles(er, re, Q) : $.generateAndInjectStyles(te, re, Q);
        return K;
      }(Ie, ye, Ke), Me = ce, Ye = Pe.$as || C.$as || Pe.as || C.as || Re, ve = Pn(Ye), L = Pe !== C ? Mt({}, C, {}, Pe) : C, I = {};
      for (var N in L) N[0] !== "$" && N !== "as" && (N === "forwardedAs" ? I.as = L[N] : (fe ? fe(N, $i, Ye) : !ve || $i(N)) && (I[N] = L[N]));
      return C.style && Pe.style !== C.style && (I.style = Mt({}, C.style, {}, Pe.style)), I.className = Array.prototype.concat(Se, Ae, xe !== Ae ? xe : null, C.className, Pe.className).filter(Boolean).join(" "), I.ref = Me, Eo(Ye, I);
    }(_, U, q, P);
  };
  return M.displayName = x, (_ = Ze.forwardRef(M)).attrs = j, _.componentStyle = w, _.displayName = x, _.shouldForwardProp = B, _.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Un, _.styledComponentId = k, _.target = n ? e.target : e, _.withComponent = function(U) {
    var q = t.componentId, G = function(ce, ye) {
      if (ce == null) return {};
      var Te, Ie, $e = {}, Se = Object.keys(ce);
      for (Ie = 0; Ie < Se.length; Ie++) Te = Se[Ie], ye.indexOf(Te) >= 0 || ($e[Te] = ce[Te]);
      return $e;
    }(t, ["componentId"]), C = q && q + "-" + (Pn(U) ? U : va(qi(U)));
    return ts(U, Mt({}, G, { attrs: j, componentId: C }), r);
  }, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? Ko({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(_, "toString", { value: function() {
    return "." + _.styledComponentId;
  } }), o && Kl(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), _;
}
var Tt = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = er), !Ho.isValidElementType(n)) return cn(1, String(n));
    var s = function() {
      return r(n, o, Ru.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, Mt({}, o, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, Mt({}, o, { attrs: Array.prototype.concat(o.attrs, d).filter(Boolean) }));
    }, s;
  }(ts, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Tt[e] = Tt(e);
});
Tt.div`
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
function Jn(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], o = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(o)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Lu = /* @__PURE__ */ function() {
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
}(), br = function() {
  return br = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, br.apply(this, arguments);
}, Fu = function(e, t, r, n) {
  function o(s) {
    return s instanceof r ? s : new r(function(d) {
      d(s);
    });
  }
  return new (r || (r = Promise))(function(s, d) {
    function m(x) {
      try {
        f(n.next(x));
      } catch (k) {
        d(k);
      }
    }
    function h(x) {
      try {
        f(n.throw(x));
      } catch (k) {
        d(k);
      }
    }
    function f(x) {
      x.done ? s(x.value) : o(x.value).then(m, h);
    }
    f((n = n.apply(e, [])).next());
  });
}, Mu = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, o, s, d;
  return d = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function m(f) {
    return function(x) {
      return h([f, x]);
    };
  }
  function h(f) {
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
    } catch (x) {
      f = [6, x], o = 0;
    } finally {
      n = s = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, rs = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}, Du = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, zu = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, $u = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function Bu(e, t, r) {
  var n = t.height, o = t.width, s = rs(t, ["height", "width"]), d = br({ height: n, width: o, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), m = window.open(e, "", Object.keys(d).map(function(f) {
    return "".concat(f, "=").concat(d[f]);
  }).join(", "));
  if (r)
    var h = window.setInterval(function() {
      try {
        (m === null || m.closed) && (window.clearInterval(h), r(m));
      } catch (f) {
        console.error(f);
      }
    }, 1e3);
  return m;
}
var Uu = (
  /** @class */
  function(e) {
    Lu(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var o = r.props, s = o.onShareWindowClose, d = o.windowHeight, m = d === void 0 ? 400 : d, h = o.windowPosition, f = h === void 0 ? "windowCenter" : h, x = o.windowWidth, k = x === void 0 ? 550 : x, j = br({ height: m, width: k }, f === "windowCenter" ? zu(k, m) : $u(k, m));
        Bu(n, j, s);
      }, r.handleClick = function(n) {
        return Fu(r, void 0, void 0, function() {
          var o, s, d, m, h, f, x, k, j, B;
          return Mu(this, function(_) {
            switch (_.label) {
              case 0:
                return o = this.props, s = o.beforeOnClick, d = o.disabled, m = o.networkLink, h = o.onClick, f = o.url, x = o.openShareDialogOnClick, k = o.opts, j = m(f, k), d ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? (B = s(), Du(B) ? [4, B] : [3, 2]) : [3, 2]);
              case 1:
                _.sent(), _.label = 2;
              case 2:
                return x && this.openShareDialog(j), h && h(n, j), [
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
      var n = r.children, o = r.className, s = r.disabled, d = r.disabledStyle, m = r.forwardedRef;
      r.networkLink;
      var h = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var f = r.resetButtonStyle, x = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var k = rs(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), j = Ir("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, o), B = br(br(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, x), s && d);
      return Ze.createElement("button", br({}, k, { "aria-label": k["aria-label"] || h, className: j, onClick: this.handleClick, ref: m, style: B }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(Js)
), Hn = function() {
  return Hn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Hn.apply(this, arguments);
};
function Qn(e, t, r, n) {
  function o(s, d) {
    var m = r(s), h = Hn({}, s), f = Object.keys(m);
    return f.forEach(function(x) {
      delete h[x];
    }), Ze.createElement(Uu, Hn({}, n, h, { forwardedRef: d, networkName: e, networkLink: t, opts: r(s) }));
  }
  return o.displayName = "ShareButton-".concat(e), Ro(o);
}
function Wu(e, t) {
  var r = t.subject, n = t.body, o = t.separator;
  return "mailto:" + Jn({ subject: r, body: n ? n + o + e : e });
}
Qn("email", Wu, function(e) {
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
var Hu = /* @__PURE__ */ function() {
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
}(), Vu = (
  /** @class */
  function(e) {
    Hu(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function nn(e, t) {
  if (!e)
    throw new Vu(t);
}
function qu(e, t) {
  var r = t.quote, n = t.hashtag;
  return nn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Jn({
    u: e,
    quote: r,
    hashtag: n
  });
}
Qn("facebook", qu, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Gu(e, t) {
  var r = t.title, n = t.summary, o = t.source;
  return nn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Jn({ url: e, mini: "true", title: r, summary: n, source: o });
}
Qn("linkedin", Gu, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Yu(e, t) {
  var r = t.title, n = t.via, o = t.hashtags, s = o === void 0 ? [] : o, d = t.related, m = d === void 0 ? [] : d;
  return nn(e, "twitter.url"), nn(Array.isArray(s), "twitter.hashtags is not an array"), nn(Array.isArray(m), "twitter.related is not an array"), "https://twitter.com/share" + Jn({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: m.length > 0 ? m.join(",") : void 0
  });
}
Qn("twitter", Yu, function(e) {
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
function Ia(e) {
  "@babel/helpers - typeof";
  return Ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ia(e);
}
var Xu = (typeof window > "u" ? "undefined" : Ia(window)) === "object" && window.Element || function() {
};
function Ju(e, t, r) {
  if (!(e[t] instanceof Xu))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, Ju, l.shape({
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
Tt.div`
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
Tt.div`
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
const Qu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Xa = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  color: o,
  disabled: s,
  element: d = "button",
  innerRef: m,
  href: h,
  onClick: f,
  ...x
}) => {
  const k = Ir("btn", "btn-tag", {
    "btn-tag-alt-white": o === "white",
    "btn-tag-alt-gray": o === "gray",
    "btn-tag-alt-dark": o === "dark",
    disabled: s
  });
  let j = d;
  return h && d === "button" && (j = "a"), /* @__PURE__ */ z.jsx(
    nr,
    {
      gaData: {
        ...Qu,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ z.jsx(
        j,
        {
          type: j === "button" && f ? "button" : void 0,
          ...x,
          className: k,
          href: h,
          ref: m,
          onClick: f,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
Xa.propTypes = {
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
  gaData: Wa,
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
Xa.defaultProps = {
  label: "",
  cardTitle: "",
  ariaLabel: void 0,
  color: "gray",
  disabled: void 0,
  element: "button",
  href: void 0,
  innerRef: void 0,
  onClick: void 0
};
const ns = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: o = "async",
  dataTestId: s,
  fetchPriority: d = "auto",
  width: m,
  height: h,
  cardLink: f,
  title: x,
  caption: k,
  captionTitle: j,
  border: B,
  dropShadow: _
}) => {
  const w = {
    src: e,
    alt: t,
    loading: n,
    decoding: o,
    fetchpriority: d,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: ul(r) },
    ...s && { "data-testid": s },
    ...m && { width: m },
    ...h && { height: h }
  }, P = Ir("uds-img", {
    borderless: !B,
    "uds-img-drop-shadow": _
  }), M = (q) => {
    const G = q ? `${w.className} ${q}` : w.className;
    return f ? /* @__PURE__ */ z.jsxs("a", { href: f, children: [
      /* @__PURE__ */ z.jsx("img", { ...w, className: G }),
      /* @__PURE__ */ z.jsx("span", { className: "visually-hidden", children: x })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ z.jsx("img", { ...w, className: G })
    );
  }, U = () => /* @__PURE__ */ z.jsx("div", { className: P, children: /* @__PURE__ */ z.jsxs("figure", { className: "figure uds-figure", children: [
    M(),
    k && /* @__PURE__ */ z.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      j && /* @__PURE__ */ z.jsx("h3", { children: j }),
      /* @__PURE__ */ z.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Rr(k)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ z.jsx(z.Fragment, { children: k ? U() : M(P) });
};
ns.propTypes = {
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
const Zu = Tt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Ku = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), ec = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Ku(e) ? `mailto:${e}` : e, tc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Pt = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: o,
  title: s,
  icon: d,
  body: m,
  eventFormat: h,
  eventLocation: f,
  eventTime: x,
  buttons: k,
  linkLabel: j,
  linkUrl: B,
  tags: _,
  showBorders: w,
  cardLink: P
}) => /* @__PURE__ */ z.jsx(
  Ja,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: o,
    title: s,
    icon: d,
    body: m,
    eventFormat: h,
    eventLocation: f,
    eventTime: x,
    buttons: k,
    linkLabel: j,
    linkUrl: B,
    tags: _,
    showBorders: w,
    cardLink: P
  }
);
Pt.propTypes = {
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
Pt.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: !1,
  body: void 0,
  eventFormat: "stack",
  eventTime: void 0,
  eventLocation: void 0,
  icon: void 0,
  image: void 0,
  imageAltText: void 0,
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0,
  showBorders: !0
};
const Ja = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: o,
  title: s,
  icon: d,
  body: m,
  eventFormat: h,
  eventLocation: f,
  eventTime: x,
  buttons: k,
  linkLabel: j,
  linkUrl: B,
  tags: _,
  showBorders: w,
  cardLink: P
}) => {
  const M = Ir("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !w
  });
  return /* @__PURE__ */ z.jsx(z.Fragment, { children: /* @__PURE__ */ z.jsxs(Zu, { className: M, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ z.jsx(
      ns,
      {
        src: n,
        alt: o,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: P,
        title: s
      }
    ),
    !n && d && /* @__PURE__ */ z.jsx(
      "i",
      {
        className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ z.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ z.jsx(
      Vn,
      {
        type: e,
        body: m,
        eventFormat: h,
        eventLocation: f,
        eventTime: x,
        title: s,
        buttons: k,
        linkLabel: j,
        linkUrl: B,
        tags: _,
        cardLink: P
      }
    ) }) : /* @__PURE__ */ z.jsx(
      Vn,
      {
        type: e,
        body: m,
        eventFormat: h,
        eventLocation: f,
        eventTime: x,
        title: s,
        buttons: k,
        linkLabel: j,
        linkUrl: B,
        tags: _,
        cardLink: P
      }
    )
  ] }) });
};
Ja.propTypes = {
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
Ja.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: !1,
  body: "",
  eventFormat: "stack",
  eventTime: "",
  eventLocation: "",
  icon: void 0,
  image: "",
  imageAltText: "",
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0,
  showBorders: !0
};
const Vn = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: o,
  title: s,
  buttons: d,
  linkLabel: m,
  linkUrl: h,
  tags: f,
  cardLink: x
}) => /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
  !!s && /* @__PURE__ */ z.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ z.jsx("h3", { className: "card-title", children: x ? /* @__PURE__ */ z.jsx("a", { href: x, children: s }) : s }) }),
  !!t && /* @__PURE__ */ z.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ z.jsx("div", { dangerouslySetInnerHTML: Rr(t) }) }),
  e === "event" && (o || n) && /* @__PURE__ */ z.jsx(
    Qa,
    {
      eventFormat: r,
      eventTime: o,
      eventLocation: n
    }
  ),
  d && /* @__PURE__ */ z.jsx("div", { className: "card-buttons", children: d.map((k) => /* @__PURE__ */ z.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ z.jsx(
        Ha,
        {
          ariaLabel: k.ariaLabel,
          color: k.color,
          icon: k.icon,
          href: k.href,
          label: k.label,
          onClick: k.onClick,
          size: k.size,
          target: k.target,
          cardTitle: s
        }
      )
    },
    `${k.label}-${k.href}`
  )) }),
  h && m && /* @__PURE__ */ z.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ z.jsx(
    nr,
    {
      gaData: {
        ...tc,
        section: s,
        text: m
      },
      children: /* @__PURE__ */ z.jsx("a", { href: ec(h), children: m })
    }
  ) }),
  f && /* @__PURE__ */ z.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((k) => (
    // @ts-ignore
    /* @__PURE__ */ z.jsx(
      Xa,
      {
        ariaLabel: k.ariaLabel,
        color: k.color,
        href: k.href,
        label: k.label,
        onClick: k.onClick,
        cardTitle: s
      },
      `${k.label}-${k.href}`
    )
  )) })
] });
Vn.propTypes = {
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
Vn.defaultProps = {
  type: "default",
  body: "",
  eventFormat: "stack",
  eventLocation: "",
  eventTime: "",
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0
};
const Qa = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ z.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ z.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ z.jsx("div", { children: /* @__PURE__ */ z.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ z.jsx("div", { dangerouslySetInnerHTML: Rr(t) })
  ] }),
  r && /* @__PURE__ */ z.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ z.jsx("div", { children: /* @__PURE__ */ z.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ z.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Rr(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
  t && /* @__PURE__ */ z.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ z.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ z.jsx("div", { children: /* @__PURE__ */ z.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ z.jsx("div", { dangerouslySetInnerHTML: Rr(t) })
  ] }) }),
  r && /* @__PURE__ */ z.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ z.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ z.jsx("div", { children: /* @__PURE__ */ z.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ z.jsx("span", { children: /* @__PURE__ */ z.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Rr(r)
      }
    ) })
  ] }) })
] });
Qa.propTypes = {
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string
};
Qa.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
const rc = Tt.div`
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
`, nc = () => /* @__PURE__ */ z.jsxs(rc, { children: [
  /* @__PURE__ */ z.jsx("div", {}),
  /* @__PURE__ */ z.jsx("div", {}),
  /* @__PURE__ */ z.jsx("div", {}),
  /* @__PURE__ */ z.jsx("div", {})
] }), ac = Tt.section``, Zn = Qs(null), as = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: o,
  dataTransformer: s,
  dataFilter: d,
  maxItems: m
}) => {
  const [{ data: h, loading: f, error: x }, k] = ll(), [j, B] = Ar([]), _ = { ...e.dataSource, ...t };
  return rr(() => {
    k(_ == null ? void 0 : _.url);
  }, [_ == null ? void 0 : _.url]), rr(() => {
    const w = h == null ? void 0 : h.nodes.map(s), P = w == null ? void 0 : w.filter(
      (M) => d(M, t == null ? void 0 : t.filters)
    );
    B(m ? P == null ? void 0 : P.slice(0, m) : P);
  }, [h]), // Init the context to be used on its childrens
  /* @__PURE__ */ z.jsx(Zn.Provider, { value: { feeds: j }, children: /* @__PURE__ */ z.jsxs(ac, { children: [
    n,
    x ? /* @__PURE__ */ z.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
      f && !(j != null && j.length) && /* @__PURE__ */ z.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ z.jsx(nc, {}) }),
      j != null && j.length ? o : !f && /* @__PURE__ */ z.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
as.propTypes = {
  renderHeader: l.element,
  renderBody: l.element,
  maxItems: l.number,
  dataTransformer: l.func,
  dataFilter: l.func,
  noFeedText: l.string
};
const Za = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), Ka = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
}), is = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
}), os = l.shape({
  url: l.string,
  filters: l.string
}), ic = l.shape({
  header: Za,
  ctaButton: Ka,
  dataSource: os,
  maxItems: l.number
}), oc = Tt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, ss = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const n = { ...e.header, ...t }, o = { ...e.ctaButton, ...r };
  return /* @__PURE__ */ z.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ z.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ z.jsx("h2", { className: `text-${n.color}`, children: n.text }) }),
        /* @__PURE__ */ z.jsx(oc, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ z.jsx(
          nr,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: n.text,
              text: o.text
            },
            children: /* @__PURE__ */ z.jsx("a", { className: `btn btn-${o.color}`, href: o.url, children: o.text })
          }
        ) })
      ]
    }
  );
};
ss.propTypes = {
  defaultProps: ic,
  header: Za,
  ctaButton: Ka
};
const ls = ({ children: e }) => /* @__PURE__ */ z.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ z.jsx("div", { className: "col", children: e }) });
ls.propTypes = {
  children: l.element
};
Tt.img`
  width: 100%;
`;
l.oneOf(["heading-hero", "story-hero"]), l.arrayOf(pa), l.string;
l.bool, l.bool, l.bool, l.bool, l.string, l.func, l.node, l.bool, l.string, l.bool;
l.oneOf(["default", "bordered"]).isRequired, l.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, l.number, l.number, l.func.isRequired;
l.oneOf(["small", "large"]), l.string.isRequired, l.string.isRequired, l.string;
l.oneOf(["small", "large"]).isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string, l.string;
Tt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const sc = Ro(function(e, t) {
  const {
    id: r,
    selected: n,
    title: o,
    selectTab: s,
    leftKeyPressed: d,
    rightKeyPressed: m,
    icon: h,
    gaData: f
  } = e, x = Zs(null);
  Ks(
    t,
    () => ({
      focus() {
        x.current.focus();
      },
      scrollIntoView() {
        var j, B, _, w, P, M, U;
        const q = ((j = x.current) == null ? void 0 : j.offsetWidth) / 2 + x.current.offsetLeft, G = ((_ = (B = x.current) == null ? void 0 : B.offsetParent) == null ? void 0 : _.scrollLeft) + ((P = (w = x.current) == null ? void 0 : w.offsetParent) == null ? void 0 : P.offsetWidth) / 2;
        (U = (M = x.current) == null ? void 0 : M.offsetParent) == null || U.scrollBy({
          left: q - G
        });
      }
    }),
    []
  );
  const k = (j) => {
    j.keyCode === 37 ? (j.preventDefault(), d()) : j.keyCode === 39 && (j.preventDefault(), m());
  };
  return /* @__PURE__ */ z.jsx(nr, { gaData: { ...f, text: o }, children: /* @__PURE__ */ z.jsxs(
    "a",
    {
      ref: x,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      onClick: (j) => s(j, r, o),
      onKeyDown: k,
      tabIndex: n ? "" : "-1",
      children: [
        o,
        " ",
        h && /* @__PURE__ */ z.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` })
      ]
    }
  ) });
});
sc.propTypes = {
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
l.oneOf(["video", "youtube"]), l.string, l.string, l.string, l.string, l.string, l.bool;
const lc = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, us = ({ children: e }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ z.jsx(
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
  )
);
us.propTypes = {
  children: l.oneOfType([
    l.element,
    l.arrayOf(l.element)
  ]).isRequired
};
const cs = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ z.jsx(nr, { gaData: lc, children: /* @__PURE__ */ z.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`
        }
      ) }, `bullet-${r}`)
    );
  return /* @__PURE__ */ z.jsx(us, { children: t });
};
cs.propTypes = {
  buttonCount: l.number.isRequired
};
l.arrayOf(l.string).isRequired, l.func;
const ds = ({ onClick: e = () => null }) => /* @__PURE__ */ z.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ z.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
ds.propTypes = {
  onClick: l.func
};
const fs = ({ onClick: e = () => null }) => /* @__PURE__ */ z.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ z.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
fs.propTypes = {
  onClick: l.func
};
const Zi = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, ps = ({ children: e = null }) => /* @__PURE__ */ z.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
ps.propTypes = {
  children: l.arrayOf(l.element)
};
const hs = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ z.jsxs(ps, { children: [
  /* @__PURE__ */ z.jsx(nr, { gaData: { ...Zi, text: "left chevron" }, children: /* @__PURE__ */ z.jsx(fs, { onClick: e }) }),
  t,
  /* @__PURE__ */ z.jsx(nr, { gaData: { ...Zi, text: "right chevron" }, children: /* @__PURE__ */ z.jsx(ds, { onClick: e }) })
] });
hs.propTypes = {
  children: l.element,
  onClick: l.func
};
const gs = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ z.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ z.jsx("ul", { className: "glide__slides", children: t });
};
gs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: l.arrayOf(l.object)
};
function Ki(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ki(Object(r), !0).forEach(function(n) {
      cc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ki(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zn(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zn = function(t) {
    return typeof t;
  } : zn = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zn(e);
}
function Kn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ea(e, t, r) {
  return t && uc(e.prototype, t), e;
}
function cc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function dc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Pa(e, t);
}
function Nr(e) {
  return Nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Nr(e);
}
function Pa(e, t) {
  return Pa = Object.setPrototypeOf || function(r, n) {
    return r.__proto__ = n, r;
  }, Pa(e, t);
}
function fc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function pc(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hc(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return pc(e);
}
function gc(e) {
  var t = fc();
  return function() {
    var r = Nr(e), n;
    if (t) {
      var o = Nr(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else
      n = r.apply(this, arguments);
    return hc(this, n);
  };
}
function mc(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Nr(e), e !== null); )
    ;
  return e;
}
function $n() {
  return typeof Reflect < "u" && Reflect.get ? $n = Reflect.get : $n = function(e, t, r) {
    var n = mc(e, t);
    if (n) {
      var o = Object.getOwnPropertyDescriptor(n, t);
      return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value;
    }
  }, $n.apply(this, arguments);
}
var bc = {
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
function zt(e) {
  console.error("[Glide warn]: ".concat(e));
}
function ot(e) {
  return parseInt(e);
}
function yc(e) {
  return parseFloat(e);
}
function ja(e) {
  return typeof e == "string";
}
function Lr(e) {
  var t = zn(e);
  return t === "function" || t === "object" && !!e;
}
function qn(e) {
  return typeof e == "function";
}
function ms(e) {
  return typeof e > "u";
}
function Na(e) {
  return e.constructor === Array;
}
function vc(e, t, r) {
  var n = {};
  for (var o in t)
    qn(t[o]) ? n[o] = t[o](e, n, r) : zt("Extension must be a function");
  for (var s in n)
    qn(n[s].mount) && n[s].mount();
  return n;
}
function qe(e, t, r) {
  Object.defineProperty(e, t, r);
}
function wc(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function La(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(o) {
      t.classes.hasOwnProperty(o) && (r.classes[o] = eo(eo({}, e.classes[o]), t.classes[o]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var kc = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Kn(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return ea(e, [{
    key: "on",
    value: function(t, r) {
      if (Na(t)) {
        for (var n = 0; n < t.length; n++)
          this.on(t[n], r);
        return;
      }
      this.hop.call(this.events, t) || (this.events[t] = []);
      var o = this.events[t].push(r) - 1;
      return {
        remove: function() {
          delete this.events[t][o];
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
      if (Na(t)) {
        for (var n = 0; n < t.length; n++)
          this.emit(t[n], r);
        return;
      }
      this.hop.call(this.events, t) && this.events[t].forEach(function(o) {
        o(r || {});
      });
    }
  }]), e;
}(), Sc = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Kn(this, e), this._c = {}, this._t = [], this._e = new kc(), this.disabled = !1, this.selector = t, this.settings = La(bc, r), this.index = this.settings.startAt;
  }
  return ea(e, [{
    key: "mount",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Lr(t) ? this._c = vc(this, t, this._e) : zt("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return Na(t) ? this._t = t : zt("You need to provide a array on `mutate()`"), this;
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
      return this.settings = La(this.settings, t), t.hasOwnProperty("startAt") && (this.index = t.startAt), this._e.emit("update"), this;
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
      Lr(t) ? this._o = t : zt("Options must be an `object` instance.");
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
      this._i = ot(t);
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
function xc(e, t, r) {
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
    make: function(h) {
      var f = this;
      e.disabled || (!e.settings.waitForTransition || e.disable(), this.move = h, r.emit("run.before", this.move), this.calculate(), r.emit("run", this.move), t.Transition.after(function() {
        f.isStart() && r.emit("run.start", f.move), f.isEnd() && r.emit("run.end", f.move), f.isOffset() && (f._o = !1, r.emit("run.offset", f.move)), r.emit("run.after", f.move), e.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var h = this.move, f = this.length, x = h.steps, k = h.direction, j = 1;
      if (k === "=") {
        if (e.settings.bound && ot(x) > f) {
          e.index = f;
          return;
        }
        e.index = x;
        return;
      }
      if (k === ">" && x === ">") {
        e.index = f;
        return;
      }
      if (k === "<" && x === "<") {
        e.index = 0;
        return;
      }
      if (k === "|" && (j = e.settings.perView || 1), k === ">" || k === "|" && x === ">") {
        var B = o(j);
        B > f && (this._o = !0), e.index = s(B, j);
        return;
      }
      if (k === "<" || k === "|" && x === "<") {
        var _ = d(j);
        _ < 0 && (this._o = !0), e.index = m(_, j);
        return;
      }
      zt("Invalid direction pattern [".concat(k).concat(x, "] has been used"));
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
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return h ? this._o ? h === "|>" ? this.move.direction === "|" && this.move.steps === ">" : h === "|<" ? this.move.direction === "|" && this.move.steps === "<" : this.move.direction === h : !1 : this._o;
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
  function o(h) {
    var f = e.index;
    return e.isType("carousel") ? f + h : f + (h - f % h);
  }
  function s(h, f) {
    var x = n.length;
    return h <= x ? h : e.isType("carousel") ? h - (x + 1) : e.settings.rewind ? n.isBound() && !n.isEnd() ? x : 0 : n.isBound() ? x : Math.floor(x / f) * f;
  }
  function d(h) {
    var f = e.index;
    if (e.isType("carousel"))
      return f - h;
    var x = Math.ceil(f / h);
    return (x - 1) * h;
  }
  function m(h, f) {
    var x = n.length;
    return h >= 0 ? h : e.isType("carousel") ? h + (x + 1) : e.settings.rewind ? n.isBound() && n.isStart() ? x : Math.floor(x / f) * f : 0;
  }
  return qe(n, "move", {
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
    set: function(h) {
      var f = h.substr(1);
      this._m = {
        direction: h.substr(0, 1),
        steps: f ? ot(f) ? ot(f) : f : 0
      };
    }
  }), qe(n, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var h = e.settings, f = t.Html.slides.length;
      return this.isBound() ? f - 1 - (ot(h.perView) - 1) + ot(h.focusAt) : f - 1;
    }
  }), qe(n, "offset", {
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
function to() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function ta(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, o, s, d, m = 0, h = function() {
    m = r.leading === !1 ? 0 : to(), n = null, d = e.apply(o, s), n || (o = s = null);
  }, f = function() {
    var x = to();
    !m && r.leading === !1 && (m = x);
    var k = t - (x - m);
    return o = this, s = arguments, k <= 0 || k > t ? (n && (clearTimeout(n), n = null), m = x, d = e.apply(o, s), n || (o = s = null)) : !n && r.trailing !== !1 && (n = setTimeout(h, k)), d;
  };
  return f.cancel = function() {
    clearTimeout(n), m = 0, n = o = s = null;
  }, f;
}
var jn = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function Cc(e, t, r) {
  var n = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(o) {
      for (var s = 0, d = o.length; s < d; s++) {
        var m = o[s].style, h = t.Direction.value;
        s !== 0 ? m[jn[h][0]] = "".concat(this.value / 2, "px") : m[jn[h][0]] = "", s !== o.length - 1 ? m[jn[h][1]] = "".concat(this.value / 2, "px") : m[jn[h][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(o) {
      for (var s = 0, d = o.length; s < d; s++) {
        var m = o[s].style;
        m.marginLeft = "", m.marginRight = "";
      }
    }
  };
  return qe(n, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return ot(e.settings.gap);
    }
  }), qe(n, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return n.value * t.Sizes.length;
    }
  }), qe(n, "reductor", {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function() {
      var o = e.settings.perView;
      return n.value * (o - 1) / o;
    }
  }), r.on(["build.after", "update"], ta(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function bs(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function Fa(e) {
  return Array.prototype.slice.call(e);
}
var _c = '[data-glide-el="track"]';
function Tc(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(_c), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = Fa(this.wrapper.children).filter(function(o) {
        return !o.classList.contains(e.settings.classes.slide.clone);
      });
    }
  };
  return qe(n, "root", {
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
    set: function(o) {
      ja(o) && (o = document.querySelector(o)), o !== null ? n._r = o : zt("Root element must be a existing Html node");
    }
  }), qe(n, "track", {
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
    set: function(o) {
      n._t = o;
    }
  }), qe(n, "wrapper", {
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
function Ac(e, t, r) {
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
  return qe(n, "value", {
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
    set: function(o) {
      Lr(o) ? (o.before = ot(o.before), o.after = ot(o.after)) : o = ot(o), n._v = o;
    }
  }), qe(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var o = n.value, s = e.settings.perView;
      return Lr(o) ? o.before / s + o.after / s : o * 2 / s;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function Rc(e, t, r) {
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
      var o = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = s, r.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        r.emit("move.after", {
          movement: o.value
        });
      });
    }
  };
  return qe(n, "offset", {
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
    set: function(o) {
      n._o = ms(o) ? 0 : ot(o);
    }
  }), qe(n, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return t.Sizes.slideWidth * e.index;
    }
  }), qe(n, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var o = this.offset, s = this.translate;
      return t.Direction.is("rtl") ? s + o : s - o;
    }
  }), r.on(["build.before", "run"], function() {
    n.make();
  }), n;
}
function Ec(e, t, r) {
  var n = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var o = "".concat(this.slideWidth, "px"), s = t.Html.slides, d = 0; d < s.length; d++)
        s[d].style.width = o;
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
      for (var o = t.Html.slides, s = 0; s < o.length; s++)
        o[s].style.width = "";
      t.Html.wrapper.style.width = "";
    }
  };
  return qe(n, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.slides.length;
    }
  }), qe(n, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.track.offsetWidth;
    }
  }), qe(n, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return n.slideWidth * n.length + t.Gaps.grow + t.Clones.grow;
    }
  }), qe(n, "slideWidth", {
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
function Oc(e, t, r) {
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
      var o = e.settings.classes, s = t.Html.slides[e.index];
      s && (s.classList.add(o.slide.active), bs(s).forEach(function(d) {
        d.classList.remove(o.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var o = e.settings.classes, s = o.type, d = o.slide;
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
function Ic(e, t, r) {
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
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = t.Html.slides, d = e.settings, m = d.perView, h = d.classes, f = d.cloningRatio;
      if (s.length > 0)
        for (var x = +!!e.settings.peek, k = m + x + Math.round(m / 2), j = s.slice(0, k).reverse(), B = s.slice(k * -1), _ = 0; _ < Math.max(f, Math.floor(m / s.length)); _++) {
          for (var w = 0; w < j.length; w++) {
            var P = j[w].cloneNode(!0);
            P.classList.add(h.slide.clone), o.push(P);
          }
          for (var M = 0; M < B.length; M++) {
            var U = B[M].cloneNode(!0);
            U.classList.add(h.slide.clone), o.unshift(U);
          }
        }
      return o;
    },
    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function() {
      for (var o = this.items, s = t.Html, d = s.wrapper, m = s.slides, h = Math.floor(o.length / 2), f = o.slice(0, h).reverse(), x = o.slice(h * -1).reverse(), k = "".concat(t.Sizes.slideWidth, "px"), j = 0; j < x.length; j++)
        d.appendChild(x[j]);
      for (var B = 0; B < f.length; B++)
        d.insertBefore(f[B], m[0]);
      for (var _ = 0; _ < o.length; _++)
        o[_].style.width = k;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var o = this.items, s = 0; s < o.length; s++)
        t.Html.wrapper.removeChild(o[s]);
    }
  };
  return qe(n, "grow", {
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
var ar = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Kn(this, e), this.listeners = t;
  }
  return ea(e, [{
    key: "on",
    value: function(t, r, n) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      ja(t) && (t = [t]);
      for (var s = 0; s < t.length; s++)
        this.listeners[t[s]] = n, r.addEventListener(t[s], this.listeners[t[s]], o);
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
      ja(t) && (t = [t]);
      for (var o = 0; o < t.length; o++)
        r.removeEventListener(t[o], this.listeners[t[o]], n);
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
function Pc(e, t, r) {
  var n = new ar(), o = {
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
      n.on("resize", window, ta(function() {
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
    o.unbind(), n.destroy();
  }), o;
}
var jc = ["ltr", "rtl"], Nc = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Lc(e, t, r) {
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
    resolve: function(o) {
      var s = o.slice(0, 1);
      return this.is("rtl") ? o.split(s).join(Nc[s]) : o;
    },
    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function(o) {
      return this.value === o;
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
  return qe(n, "value", {
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
    set: function(o) {
      jc.indexOf(o) > -1 ? n._v = o : zt("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Fc(e, t) {
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
function Mc(e, t) {
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
function Dc(e, t) {
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
function zc(e, t) {
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
        return Lr(n) ? r - n.before : r - n;
      }
      return r;
    }
  };
}
function $c(e, t) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      var n = t.Gaps.value, o = t.Sizes.width, s = e.settings.focusAt, d = t.Sizes.slideWidth;
      return s === "center" ? r - (o / 2 - d / 2) : r - d * s - n * s;
    }
  };
}
function Bc(e, t, r) {
  var n = [Mc, Dc, zc, $c].concat(e._t, [Fc]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(o) {
      for (var s = 0; s < n.length; s++) {
        var d = n[s];
        qn(d) && qn(d().modify) ? o = d(e, t, r).modify(o) : zt("Transformer should be a function that returns an object with `modify()` method");
      }
      return o;
    }
  };
}
function Uc(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(o) {
      var s = Bc(e, t).mutate(o), d = "translate3d(".concat(-1 * s, "px, 0px, 0px)");
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
      var o = t.Sizes.length, s = e.index, d = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? o + (s - d) : (s + d) % o;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var o = t.Sizes.slideWidth * e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? o * -1 : o;
    }
  };
  return r.on("move", function(o) {
    if (!e.isType("carousel") || !t.Run.isOffset())
      return n.set(o.movement);
    t.Transition.after(function() {
      r.emit("translate.jump"), n.set(t.Sizes.slideWidth * e.index);
    });
    var s = t.Sizes.slideWidth * t.Translate.getStartIndex();
    return n.set(s - t.Translate.getTravelDistance());
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function Wc(e, t, r) {
  var n = !1, o = {
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
  return qe(o, "duration", {
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
    o.set();
  }), r.on(["build.before", "resize", "translate.jump"], function() {
    o.disable();
  }), r.on("run", function() {
    o.enable();
  }), r.on("destroy", function() {
    o.remove();
  }), o;
}
var ys = !1;
try {
  var ro = Object.defineProperty({}, "passive", {
    get: function() {
      ys = !0;
    }
  });
  window.addEventListener("testPassive", null, ro), window.removeEventListener("testPassive", null, ro);
} catch {
}
var Ma = ys, Nn = ["touchstart", "mousedown"], no = ["touchmove", "mousemove"], ao = ["touchend", "touchcancel", "mouseup", "mouseleave"], io = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Hc(e, t, r) {
  var n = new ar(), o = 0, s = 0, d = 0, m = !1, h = Ma ? {
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
    start: function(x) {
      if (!m && !e.disabled) {
        this.disable();
        var k = this.touches(x);
        o = null, s = ot(k.pageX), d = ot(k.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(x) {
      if (!e.disabled) {
        var k = e.settings, j = k.touchAngle, B = k.touchRatio, _ = k.classes, w = this.touches(x), P = ot(w.pageX) - s, M = ot(w.pageY) - d, U = Math.abs(P << 2), q = Math.abs(M << 2), G = Math.sqrt(U + q), C = Math.sqrt(q);
        if (o = Math.asin(C / G), o * 180 / Math.PI < j)
          x.stopPropagation(), t.Move.make(P * yc(B)), t.Html.root.classList.add(_.dragging), r.emit("swipe.move");
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
    end: function(x) {
      if (!e.disabled) {
        var k = e.settings, j = k.perSwipe, B = k.touchAngle, _ = k.classes, w = this.touches(x), P = this.threshold(x), M = w.pageX - s, U = o * 180 / Math.PI;
        this.enable(), M > P && U < B ? t.Run.make(t.Direction.resolve("".concat(j, "<"))) : M < -P && U < B ? t.Run.make(t.Direction.resolve("".concat(j, ">"))) : t.Move.make(), t.Html.root.classList.remove(_.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var x = this, k = e.settings, j = k.swipeThreshold, B = k.dragThreshold;
      j && n.on(Nn[0], t.Html.wrapper, function(_) {
        x.start(_);
      }, h), B && n.on(Nn[1], t.Html.wrapper, function(_) {
        x.start(_);
      }, h);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(Nn[0], t.Html.wrapper, h), n.off(Nn[1], t.Html.wrapper, h);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var x = this;
      n.on(no, t.Html.wrapper, ta(function(k) {
        x.move(k);
      }, e.settings.throttle), h);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(no, t.Html.wrapper, h);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var x = this;
      n.on(ao, t.Html.wrapper, function(k) {
        x.end(k);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(ao, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(x) {
      return io.indexOf(x.type) > -1 ? x : x.touches[0] || x.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(x) {
      var k = e.settings;
      return io.indexOf(x.type) > -1 ? k.dragThreshold : k.swipeThreshold;
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
function Vc(e, t, r) {
  var n = new ar(), o = {
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
    o.unbind(), n.destroy();
  }), o;
}
function qc(e, t, r) {
  var n = new ar(), o = !1, s = !1, d = {
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
      if (s = !0, !o) {
        for (var m = 0; m < this.items.length; m++)
          this.items[m].draggable = !1;
        o = !0;
      }
      return this;
    },
    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function() {
      if (s = !1, o) {
        for (var m = 0; m < this.items.length; m++)
          this.items[m].draggable = !0;
        o = !1;
      }
      return this;
    }
  };
  return qe(d, "items", {
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
var Gc = '[data-glide-el="controls[nav]"]', ei = '[data-glide-el^="controls"]', Yc = "".concat(ei, ' [data-glide-dir*="<"]'), Xc = "".concat(ei, ' [data-glide-dir*=">"]');
function Jc(e, t, r) {
  var n = new ar(), o = Ma ? {
    passive: !0
  } : !1, s = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(Gc), this._c = t.Html.root.querySelectorAll(ei), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(Yc),
        next: t.Html.root.querySelectorAll(Xc)
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
      var m = e.settings, h = d[e.index];
      h && (h.classList.add(m.classes.nav.active), bs(h).forEach(function(f) {
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
      for (var d = e.settings, m = arguments.length, h = new Array(m), f = 0; f < m; f++)
        h[f] = arguments[f];
      h.forEach(function(x) {
        Fa(x).forEach(function(k) {
          k.classList.remove(d.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var d = e.settings, m = arguments.length, h = new Array(m), f = 0; f < m; f++)
        h[f] = arguments[f];
      h.forEach(function(x) {
        Fa(x).forEach(function(k) {
          k.classList.add(d.classes.arrow.disabled);
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
        n.on("click", d[m], this.click), n.on("touchstart", d[m], this.click, o);
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
      !Ma && d.type === "touchstart" && d.preventDefault();
      var m = d.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(m));
    }
  };
  return qe(s, "items", {
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
function Qc(e, t, r) {
  var n = new ar(), o = {
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
    o.unbind();
  }), r.on("update", function() {
    o.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), o;
}
function Zc(e, t, r) {
  var n = new ar(), o = {
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
      this._e && (this.enable(), e.settings.autoplay && ms(this._i) && (this._i = setInterval(function() {
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
  return qe(o, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var s = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
      return ot(s || e.settings.autoplay);
    }
  }), r.on(["destroy", "update"], function() {
    o.unbind();
  }), r.on(["run.before", "swipe.start", "update"], function() {
    o.stop();
  }), r.on(["pause", "destroy"], function() {
    o.disable(), o.stop();
  }), r.on(["run.after", "swipe.end"], function() {
    o.start();
  }), r.on(["play"], function() {
    o.enable(), o.start();
  }), r.on("update", function() {
    o.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), o;
}
function oo(e) {
  return Lr(e) ? wc(e) : (zt("Breakpoints option must be an object"), {});
}
function Kc(e, t, r) {
  var n = new ar(), o = e.settings, s = oo(o.breakpoints), d = Object.assign({}, o), m = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(h) {
      if (typeof window.matchMedia < "u") {
        for (var f in h)
          if (h.hasOwnProperty(f) && window.matchMedia("(max-width: ".concat(f, "px)")).matches)
            return h[f];
      }
      return d;
    }
  };
  return Object.assign(o, m.match(s)), n.on("resize", window, ta(function() {
    e.settings = La(o, m.match(s));
  }, e.settings.throttle)), r.on("update", function() {
    s = oo(s), d = Object.assign({}, o);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), m;
}
var ed = {
  // Required
  Html: Tc,
  Translate: Uc,
  Transition: Wc,
  Direction: Lc,
  Peek: Ac,
  Sizes: Ec,
  Gaps: Cc,
  Move: Rc,
  Clones: Ic,
  Resize: Pc,
  Build: Oc,
  Run: xc,
  // Optional
  Swipe: Hc,
  Images: Vc,
  Anchors: qc,
  Controls: Jc,
  Keyboard: Qc,
  Autoplay: Zc,
  Breakpoints: Kc
}, td = /* @__PURE__ */ function(e) {
  dc(r, e);
  var t = gc(r);
  function r() {
    return Kn(this, r), t.apply(this, arguments);
  }
  return ea(r, [{
    key: "mount",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return $n(Nr(r.prototype), "mount", this).call(this, Object.assign({}, ed, n));
    }
  }]), r;
}(Sc);
function rd(e) {
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
function nd(e = 1, t, r = !0, n) {
  const { perViewSm: o, perViewMd: s, perViewLg: d } = rd(e), m = r ? 24 : 0, h = r ? { before: 48, after: 48 } : 0, f = r ? { before: 124, after: 124 } : 0;
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
        perView: o,
        peek: h
      },
      768: {
        // BS4 md
        perView: s,
        peek: h
      },
      992: {
        // BS4 lg
        perView: d,
        peek: h
      },
      1260: {
        // BS4 xl
        perView: d,
        peek: h
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
function ad(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), o = e.querySelector(".glide__arrow--next"), s = e.querySelector(".glide__track"), d = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || o)) return;
  const m = ["slider-start", "slider-mid", "slider-end"], h = "glide__arrow--disabled";
  s == null || s.classList.remove(...m), d == null || d.classList.remove(...m), t === 0 ? (s == null || s.classList.add("slider-start"), d == null || d.classList.add("slider-start"), n == null || n.classList.add(h), n == null || n.setAttribute("aria-disabled", "true"), o == null || o.classList.remove(h), o == null || o.setAttribute("aria-disabled", "false")) : t >= r - 1 ? (s == null || s.classList.add("slider-end"), d == null || d.classList.add("slider-end"), n == null || n.classList.remove(h), n == null || n.setAttribute("aria-disabled", "false"), o == null || o.classList.add(h), o == null || o.setAttribute("aria-disabled", "true")) : (s == null || s.classList.add("slider-mid"), d == null || d.classList.add("slider-mid"), n == null || n.classList.remove(h), o == null || o.classList.remove(h), n == null || n.setAttribute("aria-disabled", "false"), o == null || o.setAttribute("aria-disabled", "false"));
}
function id(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), o = t, s = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((d, m) => {
    m < o || m > s ? (d.setAttribute("aria-hidden", "true"), d.setAttribute("tabindex", "-1"), d.setAttribute("inert", "")) : (d.setAttribute("aria-hidden", "false"), d.removeAttribute("tabindex"), d.removeAttribute("inert"));
  });
}
function od({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: o,
  hasPeek: s = !0,
  isDraggable: d
}) {
  const m = nd(t, n, s, d), h = new td(`#${e}`, m);
  let f = document.querySelector(`#${e}`);
  return f.addEventListener("keyup", (x) => {
    const k = x;
    k.keyCode === 39 ? h.go(">") : k.keyCode === 37 ? h.go("<") : k.keyCode === 13 && h.go(document.activeElement.dataset.glideDir);
  }), h.on("build.before", () => {
    f = document.querySelector(`#${e}`), f && f.classList.add("slider-start");
  }), h.on("move", () => {
    if (f = document.querySelector(`#${e}`), !f) return;
    const x = h.index;
    id(f, x, t);
    const k = f.querySelector(".navigation-slider"), j = f.querySelector(".image-navigator-images");
    if (k && j) {
      const B = k.querySelectorAll(
        ".bullet-image-container"
      ), _ = k.clientWidth, w = 82, P = B[x], M = j.getBoundingClientRect().x, U = k.getBoundingClientRect().x - M, q = P.getBoundingClientRect().x - M, G = P.getBoundingClientRect().x + P.getBoundingClientRect().width - M;
      if (x === 0 || q <= 0 + w)
        k.style.left = `${U - q + w}px`;
      else if (G >= _ - w) {
        const C = G - _;
        k.style.left = `${U - C - w}px`;
      }
    }
    ad(f, x, r), f.setAttribute("data-current-index", x), o && o(x);
  }), h.mount(), h;
}
function sd(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const vs = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: o = "",
  CustomNavComponent: s,
  role: d,
  ariaLabelledBy: m,
  isFullWidth: h,
  removeSideBackground: f = !1,
  hasNavButtons: x = !0,
  hasPositionIndicators: k = !0,
  imageAutoSize: j = !0,
  onItemClick: B = () => null,
  hasPeek: _ = !0,
  isDraggable: w = !0,
  hasShadow: P = !0
}) => {
  const M = `glide-${Math.ceil(Math.random() * 1e4)}`, U = sd(n.length, e);
  return rr(() => {
    od({
      instanceName: M,
      perView: e,
      buttonCount: U,
      isFullWidth: h,
      onItemClick: B,
      hasPeek: _,
      isDraggable: w
    });
  }, [
    M,
    e,
    U,
    h,
    B,
    _,
    w
  ]), /* @__PURE__ */ z.jsxs(
    "div",
    {
      role: d,
      "aria-labelledby": m,
      className: `glide ${o}`,
      id: M,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": f,
      "data-image-auto-size": j,
      "data-has-shadow": P,
      children: [
        /* @__PURE__ */ z.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ z.jsx(gs, { carouselItems: n }) }),
        s ? (
          // @ts-ignore
          /* @__PURE__ */ z.jsx(s, { instanceName: M })
        ) : /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
          k && /* @__PURE__ */ z.jsx(cs, { buttonCount: U }),
          x && /* @__PURE__ */ z.jsx(hs, {})
        ] })
      ]
    }
  );
};
vs.propTypes = {
  perView: l.number,
  width: l.string,
  maxWidth: l.string,
  // eslint-disable-next-line react/forbid-prop-types
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
const ld = ({
  id: e,
  imageSource: t,
  imageAltText: r,
  title: n,
  content: o,
  eventLocation: s,
  eventTime: d,
  buttons: m,
  linkLabel: h,
  linkUrl: f,
  tags: x
}, k, j, B) => {
  var _;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ z.jsx(
      Pt,
      {
        type: k,
        horizontal: j,
        image: t,
        imageAltText: r,
        title: n,
        body: o,
        eventFormat: B,
        eventLocation: s,
        eventTime: d,
        buttons: m,
        linkLabel: h,
        linkUrl: f || ((_ = m == null ? void 0 : m[0]) == null ? void 0 : _.href),
        tags: x
      }
    )
  };
}, ws = ({
  perView: e = 0,
  cardItems: t = [],
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: o = !1,
  width: s = void 0,
  maxWidth: d = void 0,
  imageAutoSize: m = !0
}) => {
  const h = parseInt(`${e}`, 10), [f, x] = Ar(h), k = 1024, j = 768;
  rr(() => {
    const w = () => {
      const P = window.innerWidth;
      let M;
      switch (h) {
        case 3:
          P > k ? M = 3 : P > j ? M = 2 : M = 1;
          break;
        case 2:
          M = P < j ? 1 : 2;
          break;
        default:
          M = 1;
          break;
      }
      x(M);
    };
    return w(), window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, [h]);
  const B = t.map(
    (w) => ld(w, r, o, n)
  ), _ = t.length > f;
  return /* @__PURE__ */ z.jsx(
    vs,
    {
      perView: +f,
      maxWidth: d,
      width: s,
      carouselItems: B,
      cssClass: "aligned-carousel",
      imageAutoSize: m,
      removeSideBackground: t.length <= f,
      hasPositionIndicators: _,
      hasNavButtons: _,
      isDraggable: _,
      hasShadow: !0
    }
  );
};
ws.propTypes = {
  perView: l.string.isRequired,
  cardItems: l.arrayOf(
    l.shape({
      title: l.string.isRequired,
      content: l.string,
      eventLocation: l.string,
      eventTime: l.string,
      image: l.string,
      imageAltText: l.string,
      buttons: Pt.propTypes.buttons,
      linkLabel: l.string,
      linkUrl: l.string,
      tags: Pt.propTypes.tags
    })
  ).isRequired,
  cardType: Pt.propTypes.type,
  cardEventFormat: Pt.propTypes.eventFormat,
  cardHorizontal: Pt.propTypes.horizontal,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
l.number.isRequired, l.arrayOf(l.object).isRequired, l.string, l.string, l.bool;
const Gn = {
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
l.string, Gn.imageItems, Gn.hasContent;
Gn.imageItems.isRequired, Gn.hasContent, l.string, l.string, l.bool;
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
var so = Oo;
so.createRoot, so.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
function ti({
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
var ks = { exports: {} }, ka, lo;
function ud() {
  if (lo) return ka;
  lo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ka = e, ka;
}
var Sa, uo;
function cd() {
  if (uo) return Sa;
  uo = 1;
  var e = ud();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Sa = function() {
    function n(d, m, h, f, x, k) {
      if (k !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
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
  }, Sa;
}
ks.exports = cd()();
var dd = ks.exports;
const co = /* @__PURE__ */ Io(dd), sn = {
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
}, fo = ["newsUnits", "interests", "audiences", "eventTypes"], fd = (e, t = "") => {
  if (!t) return !0;
  const r = t.split(",");
  for (let n = 0; n < fo.length; n += 1) {
    const o = fo[n];
    for (let s = 0; s < r.length; s += 1) {
      const d = r[s], h = (e[o] || "").match(new RegExp(d, "gi"));
      if ((h == null ? void 0 : h.length) > 0) return !0;
    }
  }
  return !1;
}, po = (e, t) => {
  let r = e;
  return r.length > t && (r = r.substr(0, r.lastIndexOf(" ", t)), r += "..."), r;
}, pd = ({ node: e }, t) => ({
  index: t,
  id: e.nid,
  imageUrl: e.image_url,
  imageAltText: e.image_alt,
  title: po(e.title, 80),
  content: po(e == null ? void 0 : e.clas_teaser, 140),
  buttonLink: e.path,
  interests: e.interests,
  newsUnits: e.news_units,
  eventTypes: e.event_types,
  alias: e.path
  // Used for card link in title, matches component-events data transformer
}), yr = ({
  children: e,
  header: t,
  ctaButton: r,
  dataSource: n,
  maxItems: o
}) => {
  var m;
  const s = (m = n == null ? void 0 : n.filters) == null ? void 0 : m.replace(/_/g, " "), d = { ...n, filters: s };
  return /* @__PURE__ */ Qe.jsx(
    as,
    {
      renderHeader: t && r ? /* @__PURE__ */ Qe.jsx(
        ss,
        {
          header: t,
          ctaButton: r,
          defaultProps: sn
        }
      ) : null,
      renderBody: /* @__PURE__ */ Qe.jsx(ls, { children: e }),
      dataTransformer: pd,
      dataFilter: fd,
      dataSource: d,
      defaultProps: sn,
      noFeedText: "No news to show.",
      maxItems: o
    }
  );
};
yr.propTypes = {
  header: Za,
  ctaButton: Ka,
  dataSource: os,
  maxItems: co.number,
  children: co.element
};
var Ss = { exports: {} }, Le = {};
var ho;
function hd() {
  if (ho) return Le;
  ho = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), B = Symbol.for("react.client.reference");
  function _(w) {
    if (typeof w == "object" && w !== null) {
      var P = w.$$typeof;
      switch (P) {
        case e:
          switch (w = w.type, w) {
            case r:
            case o:
            case n:
            case h:
            case f:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case d:
                case m:
                case k:
                case x:
                  return w;
                case s:
                  return w;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return Le.ContextConsumer = s, Le.ContextProvider = d, Le.Element = e, Le.ForwardRef = m, Le.Fragment = r, Le.Lazy = k, Le.Memo = x, Le.Portal = t, Le.Profiler = o, Le.StrictMode = n, Le.Suspense = h, Le.SuspenseList = f, Le.isContextConsumer = function(w) {
    return _(w) === s;
  }, Le.isContextProvider = function(w) {
    return _(w) === d;
  }, Le.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Le.isForwardRef = function(w) {
    return _(w) === m;
  }, Le.isFragment = function(w) {
    return _(w) === r;
  }, Le.isLazy = function(w) {
    return _(w) === k;
  }, Le.isMemo = function(w) {
    return _(w) === x;
  }, Le.isPortal = function(w) {
    return _(w) === t;
  }, Le.isProfiler = function(w) {
    return _(w) === o;
  }, Le.isStrictMode = function(w) {
    return _(w) === n;
  }, Le.isSuspense = function(w) {
    return _(w) === h;
  }, Le.isSuspenseList = function(w) {
    return _(w) === f;
  }, Le.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === o || w === n || w === h || w === f || w === j || typeof w == "object" && w !== null && (w.$$typeof === k || w.$$typeof === x || w.$$typeof === d || w.$$typeof === s || w.$$typeof === m || w.$$typeof === B || w.getModuleId !== void 0);
  }, Le.typeOf = _, Le;
}
Ss.exports = hd();
var xs = Ss.exports;
function gd(e) {
  function t(L, I, N, $, b) {
    for (var te = 0, T = 0, re = 0, Q = 0, K, H, ne = 0, se = 0, Z, pe = Z = K = 0, ee = 0, le = 0, We = 0, de = 0, et = N.length, He = et - 1, he, W = "", ae = "", Je = "", st = "", Fe; ee < et; ) {
      if (H = N.charCodeAt(ee), ee === He && T + Q + re + te !== 0 && (T !== 0 && (H = T === 47 ? 10 : 47), Q = re = te = 0, et++, He++), T + Q + re + te === 0) {
        if (ee === He && (0 < le && (W = W.replace(j, "")), 0 < W.trim().length)) {
          switch (H) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              W += N.charAt(ee);
          }
          H = 59;
        }
        switch (H) {
          case 123:
            for (W = W.trim(), K = W.charCodeAt(0), Z = 1, de = ++ee; ee < et; ) {
              switch (H = N.charCodeAt(ee)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (H = N.charCodeAt(ee + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (pe = ee + 1; pe < He; ++pe)
                          switch (N.charCodeAt(pe)) {
                            case 47:
                              if (H === 42 && N.charCodeAt(pe - 1) === 42 && ee + 2 !== pe) {
                                ee = pe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (H === 47) {
                                ee = pe + 1;
                                break e;
                              }
                          }
                        ee = pe;
                      }
                  }
                  break;
                case 91:
                  H++;
                case 40:
                  H++;
                case 34:
                case 39:
                  for (; ee++ < He && N.charCodeAt(ee) !== H; )
                    ;
              }
              if (Z === 0) break;
              ee++;
            }
            switch (Z = N.substring(de, ee), K === 0 && (K = (W = W.replace(k, "").trim()).charCodeAt(0)), K) {
              case 64:
                switch (0 < le && (W = W.replace(j, "")), H = W.charCodeAt(1), H) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = I;
                    break;
                  default:
                    le = Ke;
                }
                if (Z = t(I, le, Z, H, b + 1), de = Z.length, 0 < xe && (le = r(Ke, W, We), Fe = m(3, Z, le, I, Ae, fe, de, H, b, $), W = le.join(""), Fe !== void 0 && (de = (Z = Fe.trim()).length) === 0 && (H = 0, Z = "")), 0 < de) switch (H) {
                  case 115:
                    W = W.replace(ce, d);
                  case 100:
                  case 109:
                  case 45:
                    Z = W + "{" + Z + "}";
                    break;
                  case 107:
                    W = W.replace(U, "$1 $2"), Z = W + "{" + Z + "}", Z = ke === 1 || ke === 2 && s("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                    break;
                  default:
                    Z = W + Z, $ === 112 && (Z = (ae += Z, ""));
                }
                else Z = "";
                break;
              default:
                Z = t(I, r(I, W, We), Z, $, b + 1);
            }
            Je += Z, Z = We = le = pe = K = 0, W = "", H = N.charCodeAt(++ee);
            break;
          case 125:
          case 59:
            if (W = (0 < le ? W.replace(j, "") : W).trim(), 1 < (de = W.length)) switch (pe === 0 && (K = W.charCodeAt(0), K === 45 || 96 < K && 123 > K) && (de = (W = W.replace(" ", ":")).length), 0 < xe && (Fe = m(1, W, I, L, Ae, fe, ae.length, $, b, $)) !== void 0 && (de = (W = Fe.trim()).length) === 0 && (W = "\0\0"), K = W.charCodeAt(0), H = W.charCodeAt(1), K) {
              case 0:
                break;
              case 64:
                if (H === 105 || H === 99) {
                  st += W + N.charAt(ee);
                  break;
                }
              default:
                W.charCodeAt(de - 1) !== 58 && (ae += o(W, K, H, W.charCodeAt(2)));
            }
            We = le = pe = K = 0, W = "", H = N.charCodeAt(++ee);
        }
      }
      switch (H) {
        case 13:
        case 10:
          T === 47 ? T = 0 : 1 + K === 0 && $ !== 107 && 0 < W.length && (le = 1, W += "\0"), 0 < xe * Ye && m(0, W, I, L, Ae, fe, ae.length, $, b, $), fe = 1, Ae++;
          break;
        case 59:
        case 125:
          if (T + Q + re + te === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, he = N.charAt(ee), H) {
            case 9:
            case 32:
              if (Q + te + T === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  he = "";
                  break;
                default:
                  H !== 32 && (he = " ");
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
              Q + T + te === 0 && (le = We = 1, he = "\f" + he);
              break;
            case 108:
              if (Q + T + te + Re === 0 && 0 < pe) switch (ee - pe) {
                case 2:
                  ne === 112 && N.charCodeAt(ee - 3) === 58 && (Re = ne);
                case 8:
                  se === 111 && (Re = se);
              }
              break;
            case 58:
              Q + T + te === 0 && (pe = ee);
              break;
            case 44:
              T + re + Q + te === 0 && (le = 1, he += "\r");
              break;
            case 34:
            case 39:
              T === 0 && (Q = Q === H ? 0 : Q === 0 ? H : Q);
              break;
            case 91:
              Q + T + re === 0 && te++;
              break;
            case 93:
              Q + T + re === 0 && te--;
              break;
            case 41:
              Q + T + te === 0 && re--;
              break;
            case 40:
              if (Q + T + te === 0) {
                if (K === 0) switch (2 * ne + 3 * se) {
                  case 533:
                    break;
                  default:
                    K = 1;
                }
                re++;
              }
              break;
            case 64:
              T + re + Q + te + pe + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + te + re)) switch (T) {
                case 0:
                  switch (2 * H + 3 * N.charCodeAt(ee + 1)) {
                    case 235:
                      T = 47;
                      break;
                    case 220:
                      de = ee, T = 42;
                  }
                  break;
                case 42:
                  H === 47 && ne === 42 && de + 2 !== ee && (N.charCodeAt(de + 2) === 33 && (ae += N.substring(de, ee + 1)), he = "", T = 0);
              }
          }
          T === 0 && (W += he);
      }
      se = ne, ne = H, ee++;
    }
    if (de = ae.length, 0 < de) {
      if (le = I, 0 < xe && (Fe = m(2, ae, le, L, Ae, fe, de, $, b, $), Fe !== void 0 && (ae = Fe).length === 0)) return st + ae + Je;
      if (ae = le.join(",") + "{" + ae + "}", ke * Re !== 0) {
        switch (ke !== 2 || s(ae, 2) || (Re = 0), Re) {
          case 111:
            ae = ae.replace(G, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(q, "::-webkit-input-$1") + ae.replace(q, "::-moz-$1") + ae.replace(q, ":-ms-input-$1") + ae;
        }
        Re = 0;
      }
    }
    return st + ae + Je;
  }
  function r(L, I, N) {
    var $ = I.trim().split(P);
    I = $;
    var b = $.length, te = L.length;
    switch (te) {
      case 0:
      case 1:
        var T = 0;
        for (L = te === 0 ? "" : L[0] + " "; T < b; ++T)
          I[T] = n(L, I[T], N).trim();
        break;
      default:
        var re = T = 0;
        for (I = []; T < b; ++T)
          for (var Q = 0; Q < te; ++Q)
            I[re++] = n(L[Q] + " ", $[T], N).trim();
    }
    return I;
  }
  function n(L, I, N) {
    var $ = I.charCodeAt(0);
    switch (33 > $ && ($ = (I = I.trim()).charCodeAt(0)), $) {
      case 38:
        return I.replace(M, "$1" + L.trim());
      case 58:
        return L.trim() + I.replace(M, "$1" + L.trim());
      default:
        if (0 < 1 * N && 0 < I.indexOf("\f")) return I.replace(M, (L.charCodeAt(0) === 58 ? "" : "$1") + L.trim());
    }
    return L + I;
  }
  function o(L, I, N, $) {
    var b = L + ";", te = 2 * I + 3 * N + 4 * $;
    if (te === 944) {
      L = b.indexOf(":", 9) + 1;
      var T = b.substring(L, b.length - 1).trim();
      return T = b.substring(0, L).trim() + T + ";", ke === 1 || ke === 2 && s(T, 1) ? "-webkit-" + T + T : T;
    }
    if (ke === 0 || ke === 2 && !s(b, 1)) return b;
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
        if (0 < b.indexOf("image-set(", 11)) return b.replace(Se, "$1-webkit-$2") + b;
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
        return T = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + T + "-webkit-" + b + "-ms-flex-pack" + T + b;
      case 1005:
        return _.test(b) ? b.replace(B, ":-webkit-") + b.replace(B, ":-moz-") + b : b;
      case 1e3:
        switch (T = b.substring(13).trim(), I = T.indexOf("-") + 1, T.charCodeAt(0) + T.charCodeAt(I)) {
          case 226:
            T = b.replace(C, "tb");
            break;
          case 232:
            T = b.replace(C, "tb-rl");
            break;
          case 220:
            T = b.replace(C, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + T + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (I = (b = L).length - 10, T = (b.charCodeAt(I) === 33 ? b.substring(0, I) : b).substring(L.indexOf(":", 7) + 1).trim(), te = T.charCodeAt(0) + (T.charCodeAt(7) | 0)) {
          case 203:
            if (111 > T.charCodeAt(8)) break;
          case 115:
            b = b.replace(T, "-webkit-" + T) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(T, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + b.replace(T, "-webkit-" + T) + ";" + b.replace(T, "-ms-" + T + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45) switch (b.charCodeAt(6)) {
          case 105:
            return T = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + T + "-ms-flex-" + T + b;
          case 115:
            return "-webkit-" + b + "-ms-flex-item-" + b.replace(Te, "") + b;
          default:
            return "-webkit-" + b + "-ms-flex-line-pack" + b.replace("align-content", "").replace(Te, "") + b;
        }
        break;
      case 973:
      case 989:
        if (b.charCodeAt(3) !== 45 || b.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if ($e.test(L) === !0) return (T = L.substring(L.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(L.replace("stretch", "fill-available"), I, N, $).replace(":fill-available", ":stretch") : b.replace(T, "-webkit-" + T) + b.replace(T, "-moz-" + T.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, N + $ === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10)) return b.substring(0, b.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(L, I) {
    var N = L.indexOf(I === 1 ? ":" : "{"), $ = L.substring(0, I !== 3 ? N : 10);
    return N = L.substring(N + 1, L.length - 1), Me(I !== 2 ? $ : $.replace(Ie, "$1"), N, I);
  }
  function d(L, I) {
    var N = o(I, I.charCodeAt(0), I.charCodeAt(1), I.charCodeAt(2));
    return N !== I + ";" ? N.replace(ye, " or ($1)").substring(4) : "(" + I + ")";
  }
  function m(L, I, N, $, b, te, T, re, Q, K) {
    for (var H = 0, ne = I, se; H < xe; ++H)
      switch (se = Pe[H].call(x, L, ne, N, $, b, te, T, re, Q, K)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = se;
      }
    if (ne !== I) return ne;
  }
  function h(L) {
    switch (L) {
      case void 0:
      case null:
        xe = Pe.length = 0;
        break;
      default:
        if (typeof L == "function") Pe[xe++] = L;
        else if (typeof L == "object") for (var I = 0, N = L.length; I < N; ++I)
          h(L[I]);
        else Ye = !!L | 0;
    }
    return h;
  }
  function f(L) {
    return L = L.prefix, L !== void 0 && (Me = null, L ? typeof L != "function" ? ke = 1 : (ke = 2, Me = L) : ke = 0), f;
  }
  function x(L, I) {
    var N = L;
    if (33 > N.charCodeAt(0) && (N = N.trim()), ve = N, N = [ve], 0 < xe) {
      var $ = m(-1, I, N, N, Ae, fe, 0, 0, 0, 0);
      $ !== void 0 && typeof $ == "string" && (I = $);
    }
    var b = t(Ke, N, I, 0, 0);
    return 0 < xe && ($ = m(-2, b, N, N, Ae, fe, b.length, 0, 0, 0), $ !== void 0 && (b = $)), ve = "", Re = 0, fe = Ae = 1, b;
  }
  var k = /^\0+/g, j = /[\0\r\f]/g, B = /: */g, _ = /zoo|gra/, w = /([,: ])(transform)/g, P = /,\r+?/g, M = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, q = /::(place)/g, G = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, ye = /([\s\S]*?);/g, Te = /-self|flex-/g, Ie = /[^]*?(:[rp][el]a[\w-]+)[^]*/, $e = /stretch|:\s*\w+\-(?:conte|avail)/, Se = /([^-])(image-set\()/, fe = 1, Ae = 1, Re = 0, ke = 1, Ke = [], Pe = [], xe = 0, Me = null, Ye = 0, ve = "";
  return x.use = h, x.set = f, e !== void 0 && f(e), x;
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
function bd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var yd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, go = /* @__PURE__ */ bd(
  function(e) {
    return yd.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Cs = { exports: {} }, Oe = {};
var mo;
function vd() {
  if (mo) return Oe;
  mo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, k = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, B = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function q(C) {
    if (typeof C == "object" && C !== null) {
      var ce = C.$$typeof;
      switch (ce) {
        case t:
          switch (C = C.type, C) {
            case h:
            case f:
            case n:
            case s:
            case o:
            case k:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case m:
                case x:
                case _:
                case B:
                case d:
                  return C;
                default:
                  return ce;
              }
          }
        case r:
          return ce;
      }
    }
  }
  function G(C) {
    return q(C) === f;
  }
  return Oe.AsyncMode = h, Oe.ConcurrentMode = f, Oe.ContextConsumer = m, Oe.ContextProvider = d, Oe.Element = t, Oe.ForwardRef = x, Oe.Fragment = n, Oe.Lazy = _, Oe.Memo = B, Oe.Portal = r, Oe.Profiler = s, Oe.StrictMode = o, Oe.Suspense = k, Oe.isAsyncMode = function(C) {
    return G(C) || q(C) === h;
  }, Oe.isConcurrentMode = G, Oe.isContextConsumer = function(C) {
    return q(C) === m;
  }, Oe.isContextProvider = function(C) {
    return q(C) === d;
  }, Oe.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, Oe.isForwardRef = function(C) {
    return q(C) === x;
  }, Oe.isFragment = function(C) {
    return q(C) === n;
  }, Oe.isLazy = function(C) {
    return q(C) === _;
  }, Oe.isMemo = function(C) {
    return q(C) === B;
  }, Oe.isPortal = function(C) {
    return q(C) === r;
  }, Oe.isProfiler = function(C) {
    return q(C) === s;
  }, Oe.isStrictMode = function(C) {
    return q(C) === o;
  }, Oe.isSuspense = function(C) {
    return q(C) === k;
  }, Oe.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === f || C === s || C === o || C === k || C === j || typeof C == "object" && C !== null && (C.$$typeof === _ || C.$$typeof === B || C.$$typeof === d || C.$$typeof === m || C.$$typeof === x || C.$$typeof === P || C.$$typeof === M || C.$$typeof === U || C.$$typeof === w);
  }, Oe.typeOf = q, Oe;
}
Cs.exports = vd();
var wd = Cs.exports, ri = wd, kd = {
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
}, xd = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, _s = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ni = {};
ni[ri.ForwardRef] = xd;
ni[ri.Memo] = _s;
function bo(e) {
  return ri.isMemo(e) ? _s : ni[e.$$typeof] || kd;
}
var Cd = Object.defineProperty, _d = Object.getOwnPropertyNames, yo = Object.getOwnPropertySymbols, Td = Object.getOwnPropertyDescriptor, Ad = Object.getPrototypeOf, vo = Object.prototype;
function Ts(e, t, r) {
  if (typeof t != "string") {
    if (vo) {
      var n = Ad(t);
      n && n !== vo && Ts(e, n, r);
    }
    var o = _d(t);
    yo && (o = o.concat(yo(t)));
    for (var s = bo(e), d = bo(t), m = 0; m < o.length; ++m) {
      var h = o[m];
      if (!Sd[h] && !(r && r[h]) && !(d && d[h]) && !(s && s[h])) {
        var f = Td(t, h);
        try {
          Cd(e, h, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var Rd = Ts;
const Ed = /* @__PURE__ */ Io(Rd);
var it = { env: { NODE_ENV: "production" } };
function Dt() {
  return (Dt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var wo = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Da = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !xs.typeOf(e);
}, Yn = Object.freeze([]), tr = Object.freeze({});
function ln(e) {
  return typeof e == "function";
}
function ko(e) {
  return e.displayName || e.name || "Component";
}
function ai(e) {
  return e && typeof e.styledComponentId == "string";
}
var Fr = typeof it < "u" && it.env !== void 0 && (it.env.REACT_APP_SC_ATTR || it.env.SC_ATTR) || "data-styled", ii = typeof window < "u" && "HTMLElement" in window, Od = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof it < "u" && it.env !== void 0 && (it.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && it.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? it.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && it.env.REACT_APP_SC_DISABLE_SPEEDY : it.env.SC_DISABLE_SPEEDY !== void 0 && it.env.SC_DISABLE_SPEEDY !== "" ? it.env.SC_DISABLE_SPEEDY !== "false" && it.env.SC_DISABLE_SPEEDY : it.env.NODE_ENV !== "production"));
function dn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Id = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++) n += this.groupSizes[o];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, d = s; r >= d; ) (d <<= 1) < 0 && dn(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(o), this.length = d;
      for (var m = s; m < d; m++) this.groupSizes[m] = 0;
    }
    for (var h = this.indexOfGroup(r + 1), f = 0, x = n.length; f < x; f++) this.tag.insertRule(h, n[f]) && (this.groupSizes[r]++, h++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), s = o + n;
      this.groupSizes[r] = 0;
      for (var d = o; d < s; d++) this.tag.deleteRule(o);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var o = this.groupSizes[r], s = this.indexOfGroup(r), d = s + o, m = s; m < d; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), Bn = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map(), an = 1, Ln = function(e) {
  if (Bn.has(e)) return Bn.get(e);
  for (; Xn.has(an); ) an++;
  var t = an++;
  return Bn.set(e, t), Xn.set(t, e), t;
}, Pd = function(e) {
  return Xn.get(e);
}, jd = function(e, t) {
  t >= an && (an = t + 1), Bn.set(e, t), Xn.set(t, e);
}, Nd = "style[" + Fr + '][data-styled-version="5.3.11"]', Ld = new RegExp("^" + Fr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Fd = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, d = o.length; s < d; s++) (n = o[s]) && e.registerName(t, n);
}, Md = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = r.length; o < s; o++) {
    var d = r[o].trim();
    if (d) {
      var m = d.match(Ld);
      if (m) {
        var h = 0 | parseInt(m[1], 10), f = m[2];
        h !== 0 && (jd(f, h), Fd(e, f, m[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, Dd = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, As = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(m) {
    for (var h = m.childNodes, f = h.length; f >= 0; f--) {
      var x = h[f];
      if (x && x.nodeType === 1 && x.hasAttribute(Fr)) return x;
    }
  }(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Fr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Dd();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, zd = function() {
  function e(r) {
    var n = this.element = As(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, d = 0, m = s.length; d < m; d++) {
        var h = s[d];
        if (h.ownerNode === o) return h;
      }
      dn(17);
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
    var n = this.element = As(r);
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
}(), Bd = function() {
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
}(), So = ii, Ud = { isServer: !ii, useCSSOMInjection: !Od }, Rs = function() {
  function e(r, n, o) {
    r === void 0 && (r = tr), n === void 0 && (n = {}), this.options = Dt({}, Ud, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && ii && So && (So = !1, function(s) {
      for (var d = document.querySelectorAll(Nd), m = 0, h = d.length; m < h; m++) {
        var f = d[m];
        f && f.getAttribute(Fr) !== "active" && (Md(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Ln(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Dt({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = o ? new Bd(d) : s ? new zd(d) : new $d(d), new Id(r)));
    var r, n, o, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Ln(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(Ln(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Ln(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, s = "", d = 0; d < o; d++) {
        var m = Pd(d);
        if (m !== void 0) {
          var h = r.names.get(m), f = n.getGroup(d);
          if (h && f && h.size) {
            var x = Fr + ".g" + d + '[id="' + m + '"]', k = "";
            h !== void 0 && h.forEach(function(j) {
              j.length > 0 && (k += j + ",");
            }), s += "" + f + x + '{content:"' + k + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Wd = /(a)(d)/gi, xo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function za(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = xo(t % 52) + r;
  return (xo(t % 52) + r).replace(Wd, "$1-$2");
}
var Or = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Es = function(e) {
  return Or(5381, e);
};
function Hd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (ln(r) && !ai(r)) return !1;
  }
  return !0;
}
var Vd = Es("5.3.11"), qd = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Hd(t), this.componentId = r, this.baseHash = Or(Vd, r), this.baseStyle = n, Rs.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Mr(this.rules, t, r, n).join(""), m = za(Or(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(o, m)) {
        var h = n(d, "." + m, void 0, o);
        r.insertRules(o, m, h);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, x = Or(this.baseHash, n.hash), k = "", j = 0; j < f; j++) {
        var B = this.rules[j];
        if (typeof B == "string") k += B;
        else if (B) {
          var _ = Mr(B, t, r, n), w = Array.isArray(_) ? _.join("") : _;
          x = Or(x, w + j), k += w;
        }
      }
      if (k) {
        var P = za(x >>> 0);
        if (!r.hasNameForId(o, P)) {
          var M = n(k, "." + P, void 0, o);
          r.insertRules(o, P, M);
        }
        s.push(P);
      }
    }
    return s.join(" ");
  }, e;
}(), Gd = /^\s*\/\/.*$/gm, Yd = [":", "[", ".", "#"];
function Xd(e) {
  var t, r, n, o, s = tr, d = s.options, m = d === void 0 ? tr : d, h = s.plugins, f = h === void 0 ? Yn : h, x = new gd(m), k = [], j = /* @__PURE__ */ function(w) {
    function P(M) {
      if (M) try {
        w(M + "}");
      } catch {
      }
    }
    return function(M, U, q, G, C, ce, ye, Te, Ie, $e) {
      switch (M) {
        case 1:
          if (Ie === 0 && U.charCodeAt(0) === 64) return w(U + ";"), "";
          break;
        case 2:
          if (Te === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Te) {
            case 102:
            case 112:
              return w(q[0] + U), "";
            default:
              return U + ($e === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(P);
      }
    };
  }(function(w) {
    k.push(w);
  }), B = function(w, P, M) {
    return P === 0 && Yd.indexOf(M[r.length]) !== -1 || M.match(o) ? w : "." + t;
  };
  function _(w, P, M, U) {
    U === void 0 && (U = "&");
    var q = w.replace(Gd, ""), G = P && M ? M + " " + P + " { " + q + " }" : q;
    return t = U, r = P, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), x(M || !P ? "" : P, G);
  }
  return x.use([].concat(f, [function(w, P, M) {
    w === 2 && M.length && M[0].lastIndexOf(r) > 0 && (M[0] = M[0].replace(n, B));
  }, j, function(w) {
    if (w === -2) {
      var P = k;
      return k = [], P;
    }
  }])), _.hash = f.length ? f.reduce(function(w, P) {
    return P.name || dn(15), Or(w, P.name);
  }, 5381).toString() : "", _;
}
var Os = Ze.createContext();
Os.Consumer;
var Is = Ze.createContext(), Jd = (Is.Consumer, new Rs()), $a = Xd();
function Qd() {
  return $t(Os) || Jd;
}
function Zd() {
  return $t(Is) || $a;
}
var Kd = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = $a);
      var d = n.name + s.hash;
      o.hasNameForId(n.id, d) || o.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return dn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = $a), this.name + t.hash;
  }, e;
}(), ef = /([A-Z])/, tf = /([A-Z])/g, rf = /^ms-/, nf = function(e) {
  return "-" + e.toLowerCase();
};
function Co(e) {
  return ef.test(e) ? e.replace(tf, nf).replace(rf, "-ms-") : e;
}
var _o = function(e) {
  return e == null || e === !1 || e === "";
};
function Mr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], d = 0, m = e.length; d < m; d += 1) (o = Mr(e[d], t, r, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (_o(e)) return "";
  if (ai(e)) return "." + e.styledComponentId;
  if (ln(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return Mr(h, t, r, n);
  }
  var f;
  return e instanceof Kd ? r ? (e.inject(r, n), e.getName(n)) : e : Da(e) ? function x(k, j) {
    var B, _, w = [];
    for (var P in k) k.hasOwnProperty(P) && !_o(k[P]) && (Array.isArray(k[P]) && k[P].isCss || ln(k[P]) ? w.push(Co(P) + ":", k[P], ";") : Da(k[P]) ? w.push.apply(w, x(k[P], P)) : w.push(Co(P) + ": " + (B = P, (_ = k[P]) == null || typeof _ == "boolean" || _ === "" ? "" : typeof _ != "number" || _ === 0 || B in md || B.startsWith("--") ? String(_).trim() : _ + "px") + ";"));
    return j ? [j + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var To = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function af(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return ln(e) || Da(e) ? To(Mr(wo(Yn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : To(Mr(wo(e, r)));
}
var of = function(e, t, r) {
  return r === void 0 && (r = tr), e.theme !== r.theme && e.theme || t || r.theme;
}, sf = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, lf = /(^-|-$)/g;
function xa(e) {
  return e.replace(sf, "-").replace(lf, "");
}
var uf = function(e) {
  return za(Es(e) >>> 0);
};
function Fn(e) {
  return typeof e == "string" && it.env.NODE_ENV === "production";
}
var Ba = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, cf = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function df(e, t, r) {
  var n = e[r];
  Ba(t) && Ba(n) ? Ps(n, t) : e[r] = t;
}
function Ps(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var o = 0, s = r; o < s.length; o++) {
    var d = s[o];
    if (Ba(d)) for (var m in d) cf(m) && df(e, d[m], m);
  }
  return e;
}
var js = Ze.createContext();
js.Consumer;
var Ca = {};
function Ns(e, t, r) {
  var n = ai(e), o = !Fn(e), s = t.attrs, d = s === void 0 ? Yn : s, m = t.componentId, h = m === void 0 ? function(U, q) {
    var G = typeof U != "string" ? "sc" : xa(U);
    Ca[G] = (Ca[G] || 0) + 1;
    var C = G + "-" + uf("5.3.11" + G + Ca[G]);
    return q ? q + "-" + C : C;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, x = f === void 0 ? function(U) {
    return Fn(U) ? "styled." + U : "Styled(" + ko(U) + ")";
  }(e) : f, k = t.displayName && t.componentId ? xa(t.displayName) + "-" + t.componentId : t.componentId || h, j = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, B = t.shouldForwardProp;
  n && e.shouldForwardProp && (B = t.shouldForwardProp ? function(U, q, G) {
    return e.shouldForwardProp(U, q, G) && t.shouldForwardProp(U, q, G);
  } : e.shouldForwardProp);
  var _, w = new qd(r, k, n ? e.componentStyle : void 0), P = w.isStatic && d.length === 0, M = function(U, q) {
    return function(G, C, ce, ye) {
      var Te = G.attrs, Ie = G.componentStyle, $e = G.defaultProps, Se = G.foldedComponentIds, fe = G.shouldForwardProp, Ae = G.styledComponentId, Re = G.target, ke = function($, b, te) {
        $ === void 0 && ($ = tr);
        var T = Dt({}, b, { theme: $ }), re = {};
        return te.forEach(function(Q) {
          var K, H, ne, se = Q;
          for (K in ln(se) && (se = se(T)), se) T[K] = re[K] = K === "className" ? (H = re[K], ne = se[K], H && ne ? H + " " + ne : H || ne) : se[K];
        }), [T, re];
      }(of(C, $t(js), $e) || tr, C, Te), Ke = ke[0], Pe = ke[1], xe = function($, b, te, T) {
        var re = Qd(), Q = Zd(), K = b ? $.generateAndInjectStyles(tr, re, Q) : $.generateAndInjectStyles(te, re, Q);
        return K;
      }(Ie, ye, Ke), Me = ce, Ye = Pe.$as || C.$as || Pe.as || C.as || Re, ve = Fn(Ye), L = Pe !== C ? Dt({}, C, {}, Pe) : C, I = {};
      for (var N in L) N[0] !== "$" && N !== "as" && (N === "forwardedAs" ? I.as = L[N] : (fe ? fe(N, go, Ye) : !ve || go(N)) && (I[N] = L[N]));
      return C.style && Pe.style !== C.style && (I.style = Dt({}, C.style, {}, Pe.style)), I.className = Array.prototype.concat(Se, Ae, xe !== Ae ? xe : null, C.className, Pe.className).filter(Boolean).join(" "), I.ref = Me, Eo(Ye, I);
    }(_, U, q, P);
  };
  return M.displayName = x, (_ = Ze.forwardRef(M)).attrs = j, _.componentStyle = w, _.displayName = x, _.shouldForwardProp = B, _.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Yn, _.styledComponentId = k, _.target = n ? e.target : e, _.withComponent = function(U) {
    var q = t.componentId, G = function(ce, ye) {
      if (ce == null) return {};
      var Te, Ie, $e = {}, Se = Object.keys(ce);
      for (Ie = 0; Ie < Se.length; Ie++) Te = Se[Ie], ye.indexOf(Te) >= 0 || ($e[Te] = ce[Te]);
      return $e;
    }(t, ["componentId"]), C = q && q + "-" + (Fn(U) ? U : xa(ko(U)));
    return Ns(U, Dt({}, G, { attrs: j, componentId: C }), r);
  }, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? Ps({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(_, "toString", { value: function() {
    return "." + _.styledComponentId;
  } }), o && Ed(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), _;
}
var un = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = tr), !xs.isValidElementType(n)) return dn(1, String(n));
    var s = function() {
      return r(n, o, af.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, Dt({}, o, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, Dt({}, o, { attrs: Array.prototype.concat(o.attrs, d).filter(Boolean) }));
    }, s;
  }(Ns, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  un[e] = un(e);
});
const ff = un.section``, pf = (e, t, r) => ({
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
}), hf = ({ cardButton: e }) => {
  const { feeds: t } = $t(Zn), r = t == null ? void 0 : t.map(
    (n, o) => pf(n, o, e)
  );
  return /* @__PURE__ */ Qe.jsx(ff, { children: /* @__PURE__ */ Qe.jsx(
    ws,
    {
      width: "auto",
      cardType: "story",
      perView: "3",
      cardItems: r || []
    }
  ) });
}, Ls = ({ cardButton: e, ...t }) => (rr(() => {
  typeof window < "u" && ti({
    packageName: "component-news",
    component: "CardCarouselNews",
    type: "NA",
    configuration: {
      cardButton: e,
      props: t
    }
  });
}, []), // Calling the high order component that fetches the data
/* @__PURE__ */ Qe.jsx(yr, { ...t, children: /* @__PURE__ */ Qe.jsx(
  hf,
  {
    cardButton: { ...sn.cardButton, ...e }
  }
) }));
Ls.propTypes = yr.propTypes;
const Fs = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), gf = un.section`
  .c-card {
    height: 100%;
  }
`, mf = (e, t) => /* @__PURE__ */ Qe.jsx(
  "div",
  {
    className: "col col-12 col-md-6 col-lg-4 cards-items-container",
    children: /* @__PURE__ */ Qe.jsx(
      Pt,
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
        tags: Fs(e == null ? void 0 : e.interests)
      }
    )
  },
  e.id
), bf = ({ cardButton: e }) => {
  const { feeds: t } = $t(Zn);
  return /* @__PURE__ */ Qe.jsx(gf, { className: "row row-spaced", "data-testid": "grid-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ Qe.jsx(Ze.Fragment, { children: mf(r, e) }, n)
  )) });
}, Ms = ({ cardButton: e, ...t }) => (rr(() => {
  typeof window < "u" && ti({
    packageName: "component-news",
    component: "CardGridNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ Qe.jsx(yr, { ...t, children: /* @__PURE__ */ Qe.jsx(
  bf,
  {
    cardButton: { ...sn.cardButton, ...e }
  }
) }));
Ms.propTypes = {
  ...yr.propTypes,
  cardButton: is
};
const yf = un.section``, vf = (e, t) => /* @__PURE__ */ Qe.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ Qe.jsx(
  Pt,
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
    tags: Fs(e == null ? void 0 : e.interests)
  }
) }, e.id), wf = ({ cardButton: e }) => {
  const { feeds: t } = $t(Zn);
  return /* @__PURE__ */ Qe.jsx(yf, { className: "row-spaced", "data-testid": "list-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ Qe.jsx(Ze.Fragment, { children: vf(r, e) }, n)
  )) });
}, Ds = ({ cardButton: e, ...t }) => (rr(() => {
  typeof window < "u" && ti({
    packageName: "component-news",
    component: "CardListlNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ Qe.jsx(yr, { ...t, children: /* @__PURE__ */ Qe.jsx(
  wf,
  {
    cardButton: { ...sn.cardButton, ...e }
  }
) }));
Ds.propTypes = { ...yr.propTypes, feedCardButtonShape: is };
var zs, Ao = Oo;
zs = Ao.createRoot, Ao.hydrateRoot;
const oi = (e, t, r) => {
  zs(r).render(Ze.createElement(e, t));
}, xf = ({ targetSelector: e, props: t }) => {
  oi(Ms, t, document.querySelector(e));
}, Cf = ({ targetSelector: e, props: t }) => {
  oi(Ds, t, document.querySelector(e));
}, _f = ({ targetSelector: e, props: t }) => {
  oi(Ls, t, document.querySelector(e));
};
export {
  Ls as CardCarouselNews,
  Ms as CardGridNews,
  Ds as CardListlNews,
  _f as initCardCarouselNewsComponent,
  xf as initCardGridNewsComponent,
  Cf as initCardListNewsComponent
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
