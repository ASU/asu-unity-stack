import Ze, { Component as Qs, createContext as Zs, forwardRef as _i, useRef as Js, useImperativeHandle as el, useId as tl, useContext as $t, createElement as Ci, useState as Rr, useEffect as rr } from "react";
import Ti from "react-dom";
function Ri(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ai = { exports: {} }, Xr = {};
var ko;
function rl() {
  if (ko) return Xr;
  ko = 1;
  var e = Ze, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(g, h, f) {
    var x, k = {}, j = null, B = null;
    f !== void 0 && (j = "" + f), h.key !== void 0 && (j = "" + h.key), h.ref !== void 0 && (B = h.ref);
    for (x in h) n.call(h, x) && !s.hasOwnProperty(x) && (k[x] = h[x]);
    if (g && g.defaultProps) for (x in h = g.defaultProps, h) k[x] === void 0 && (k[x] = h[x]);
    return { $$typeof: t, type: g, key: j, ref: B, props: k, _owner: i.current };
  }
  return Xr.Fragment = r, Xr.jsx = d, Xr.jsxs = d, Xr;
}
Ai.exports = rl();
var Qe = Ai.exports;
function Wa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ei = { exports: {} }, Kr = {}, So;
function nl() {
  if (So) return Kr;
  So = 1;
  var e = Ze, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(g, h, f) {
    var x, k = {}, j = null, B = null;
    f !== void 0 && (j = "" + f), h.key !== void 0 && (j = "" + h.key), h.ref !== void 0 && (B = h.ref);
    for (x in h) n.call(h, x) && !s.hasOwnProperty(x) && (k[x] = h[x]);
    if (g && g.defaultProps) for (x in h = g.defaultProps, h) k[x] === void 0 && (k[x] = h[x]);
    return { $$typeof: t, type: g, key: j, ref: B, props: k, _owner: i.current };
  }
  return Kr.Fragment = r, Kr.jsx = d, Kr.jsxs = d, Kr;
}
Ei.exports = nl();
var z = Ei.exports, Oi = { exports: {} }, ca, xo;
function al() {
  if (xo) return ca;
  xo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ca = e, ca;
}
var da, _o;
function ol() {
  if (_o) return da;
  _o = 1;
  var e = al();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, da = function() {
    function n(d, g, h, f, x, k) {
      if (k !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
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
  }, da;
}
Oi.exports = ol()();
var il = Oi.exports;
const l = /* @__PURE__ */ Wa(il), sl = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), fa = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), Ni = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.arrayOf(l.string),
    header: l.string,
    body: l.string
  })
}), Ua = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var Pi = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", d = 0; d < arguments.length; d++) {
        var g = arguments[d];
        g && (s = i(s, n(g)));
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
      for (var g in s)
        t.call(s, g) && s[g] && (d = i(d, g));
      return d;
    }
    function i(s, d) {
      return d ? s ? s + " " + d : s + d : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Pi);
var ll = Pi.exports;
const Nr = /* @__PURE__ */ Wa(ll), ul = () => {
  const [e, t] = Rr(), [r, n] = Rr(!1), [i, s] = Rr(!1), [d, g] = Rr("");
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
  }, [d]), [{ data: e, loading: r, error: i }, g];
}, cl = (e) => (e || []).join(" "), {
  entries: ji,
  setPrototypeOf: Co,
  isFrozen: dl,
  getPrototypeOf: fl,
  getOwnPropertyDescriptor: pl
} = Object;
let {
  freeze: dt,
  seal: vt,
  create: Ii
} = Object, {
  apply: _a,
  construct: Ca
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
Ca || (Ca = function(e, t) {
  return new e(...t);
});
const An = ft(Array.prototype.forEach), hl = ft(Array.prototype.lastIndexOf), To = ft(Array.prototype.pop), Qr = ft(Array.prototype.push), ml = ft(Array.prototype.splice), Mn = ft(String.prototype.toLowerCase), pa = ft(String.prototype.toString), Ro = ft(String.prototype.match), Zr = ft(String.prototype.replace), gl = ft(String.prototype.indexOf), bl = ft(String.prototype.trim), Ct = ft(Object.prototype.hasOwnProperty), ct = ft(RegExp.prototype.test), Jr = yl(TypeError);
function ft(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return _a(e, t, n);
  };
}
function yl(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ca(e, r);
  };
}
function we(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mn;
  Co && Co(e, null);
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (dl(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function vl(e) {
  for (let t = 0; t < e.length; t++)
    Ct(e, t) || (e[t] = null);
  return e;
}
function gr(e) {
  const t = Ii(null);
  for (const [r, n] of ji(e))
    Ct(e, r) && (Array.isArray(n) ? t[r] = vl(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = gr(n) : t[r] = n);
  return t;
}
function en(e, t) {
  for (; e !== null; ) {
    const n = pl(e, t);
    if (n) {
      if (n.get)
        return ft(n.get);
      if (typeof n.value == "function")
        return ft(n.value);
    }
    e = fl(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Ao = dt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ha = dt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ma = dt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), wl = dt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ga = dt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), kl = dt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Eo = dt(["#text"]), Oo = dt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ba = dt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), No = dt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), En = dt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Sl = vt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), xl = vt(/<%[\w\W]*|[\w\W]*%>/gm), _l = vt(/\$\{[\w\W]*/gm), Cl = vt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Tl = vt(/^aria-[\-\w]+$/), Fi = vt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Rl = vt(/^(?:\w+script|data):/i), Al = vt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Li = vt(/^html$/i), El = vt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Po = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Tl,
  ATTR_WHITESPACE: Al,
  CUSTOM_ELEMENT: El,
  DATA_ATTR: Cl,
  DOCTYPE_NAME: Li,
  ERB_EXPR: xl,
  IS_ALLOWED_URI: Fi,
  IS_SCRIPT_OR_DATA: Rl,
  MUSTACHE_EXPR: Sl,
  TMPLIT_EXPR: _l
});
const tn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Ol = function() {
  return typeof window > "u" ? null : window;
}, Nl = function(e, t) {
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
}, jo = function() {
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
function Mi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ol();
  const t = (S) => Mi(S);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, i = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: d,
    Node: g,
    Element: h,
    NodeFilter: f,
    NamedNodeMap: x = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: k,
    DOMParser: j,
    trustedTypes: B
  } = e, C = h.prototype, w = en(C, "cloneNode"), P = en(C, "remove"), M = en(C, "nextSibling"), W = en(C, "childNodes"), V = en(C, "parentNode");
  if (typeof d == "function") {
    const S = r.createElement("template");
    S.content && S.content.ownerDocument && (r = S.content.ownerDocument);
  }
  let G, _ = "";
  const {
    implementation: le,
    createNodeIterator: ye,
    createDocumentFragment: Te,
    getElementsByTagName: Ne
  } = r, {
    importNode: $e
  } = n;
  let Se = jo();
  t.isSupported = typeof ji == "function" && typeof V == "function" && le && le.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: fe,
    ERB_EXPR: Re,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: ke,
    ARIA_ATTR: Je,
    IS_SCRIPT_OR_DATA: Pe,
    ATTR_WHITESPACE: xe,
    CUSTOM_ELEMENT: Me
  } = Po;
  let {
    IS_ALLOWED_URI: Ye
  } = Po, ve = null;
  const F = we({}, [...Ao, ...ha, ...ma, ...ga, ...Eo]);
  let N = null;
  const I = we({}, [...Oo, ...ba, ...No, ...En]);
  let $ = Object.seal(Ii(null, {
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
  })), b = null, te = null, T = !0, re = !0, Q = !1, J = !0, H = !1, ne = !0, se = !1, Z = !1, pe = !1, ee = !1, ue = !1, Ue = !1, de = !0, et = !1;
  const He = "user-content-";
  let he = !0, U = !1, ae = {}, Ke = null;
  const st = we({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Le = null;
  const or = we({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bt = null;
  const vr = we({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Rt = "http://www.w3.org/1998/Math/MathML", wt = "http://www.w3.org/2000/svg", pt = "http://www.w3.org/1999/xhtml";
  let At = pt, ir = !1, sr = null;
  const zr = we({}, [Rt, wt, pt], pa);
  let tt = we({}, ["mi", "mo", "mn", "ms", "mtext"]), Et = we({}, ["annotation-xml"]);
  const Wt = we({}, ["title", "style", "font", "a", "script"]);
  let _e = null;
  const Pt = ["application/xhtml+xml", "text/html"], Ut = "text/html";
  let De = null, rt = null;
  const Ht = r.createElement("form"), bt = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, Vt = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(rt && rt === S)) {
      if ((!S || typeof S != "object") && (S = {}), S = gr(S), _e = // eslint-disable-next-line unicorn/prefer-includes
      Pt.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? Ut : S.PARSER_MEDIA_TYPE, De = _e === "application/xhtml+xml" ? pa : Mn, ve = Ct(S, "ALLOWED_TAGS") ? we({}, S.ALLOWED_TAGS, De) : F, N = Ct(S, "ALLOWED_ATTR") ? we({}, S.ALLOWED_ATTR, De) : I, sr = Ct(S, "ALLOWED_NAMESPACES") ? we({}, S.ALLOWED_NAMESPACES, pa) : zr, Bt = Ct(S, "ADD_URI_SAFE_ATTR") ? we(gr(vr), S.ADD_URI_SAFE_ATTR, De) : vr, Le = Ct(S, "ADD_DATA_URI_TAGS") ? we(gr(or), S.ADD_DATA_URI_TAGS, De) : or, Ke = Ct(S, "FORBID_CONTENTS") ? we({}, S.FORBID_CONTENTS, De) : st, b = Ct(S, "FORBID_TAGS") ? we({}, S.FORBID_TAGS, De) : {}, te = Ct(S, "FORBID_ATTR") ? we({}, S.FORBID_ATTR, De) : {}, ae = Ct(S, "USE_PROFILES") ? S.USE_PROFILES : !1, T = S.ALLOW_ARIA_ATTR !== !1, re = S.ALLOW_DATA_ATTR !== !1, Q = S.ALLOW_UNKNOWN_PROTOCOLS || !1, J = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, H = S.SAFE_FOR_TEMPLATES || !1, ne = S.SAFE_FOR_XML !== !1, se = S.WHOLE_DOCUMENT || !1, ee = S.RETURN_DOM || !1, ue = S.RETURN_DOM_FRAGMENT || !1, Ue = S.RETURN_TRUSTED_TYPE || !1, pe = S.FORCE_BODY || !1, de = S.SANITIZE_DOM !== !1, et = S.SANITIZE_NAMED_PROPS || !1, he = S.KEEP_CONTENT !== !1, U = S.IN_PLACE || !1, Ye = S.ALLOWED_URI_REGEXP || Fi, At = S.NAMESPACE || pt, tt = S.MATHML_TEXT_INTEGRATION_POINTS || tt, Et = S.HTML_INTEGRATION_POINTS || Et, $ = S.CUSTOM_ELEMENT_HANDLING || {}, S.CUSTOM_ELEMENT_HANDLING && bt(S.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && ($.tagNameCheck = S.CUSTOM_ELEMENT_HANDLING.tagNameCheck), S.CUSTOM_ELEMENT_HANDLING && bt(S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && ($.attributeNameCheck = S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), S.CUSTOM_ELEMENT_HANDLING && typeof S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && ($.allowCustomizedBuiltInElements = S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), H && (re = !1), ue && (ee = !0), ae && (ve = we({}, Eo), N = [], ae.html === !0 && (we(ve, Ao), we(N, Oo)), ae.svg === !0 && (we(ve, ha), we(N, ba), we(N, En)), ae.svgFilters === !0 && (we(ve, ma), we(N, ba), we(N, En)), ae.mathMl === !0 && (we(ve, ga), we(N, No), we(N, En))), S.ADD_TAGS && (ve === F && (ve = gr(ve)), we(ve, S.ADD_TAGS, De)), S.ADD_ATTR && (N === I && (N = gr(N)), we(N, S.ADD_ATTR, De)), S.ADD_URI_SAFE_ATTR && we(Bt, S.ADD_URI_SAFE_ATTR, De), S.FORBID_CONTENTS && (Ke === st && (Ke = gr(Ke)), we(Ke, S.FORBID_CONTENTS, De)), he && (ve["#text"] = !0), se && we(ve, ["html", "head", "body"]), ve.table && (we(ve, ["tbody"]), delete b.tbody), S.TRUSTED_TYPES_POLICY) {
        if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Jr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Jr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        G = S.TRUSTED_TYPES_POLICY, _ = G.createHTML("");
      } else
        G === void 0 && (G = Nl(B, i)), G !== null && typeof _ == "string" && (_ = G.createHTML(""));
      dt && dt(S), rt = S;
    }
  }, qt = we({}, [...ha, ...ma, ...wl]), Gt = we({}, [...ga, ...kl]), wr = function(S) {
    let K = V(S);
    (!K || !K.tagName) && (K = {
      namespaceURI: At,
      tagName: "template"
    });
    const Y = Mn(S.tagName), Ce = Mn(K.tagName);
    return sr[S.namespaceURI] ? S.namespaceURI === wt ? K.namespaceURI === pt ? Y === "svg" : K.namespaceURI === Rt ? Y === "svg" && (Ce === "annotation-xml" || tt[Ce]) : !!qt[Y] : S.namespaceURI === Rt ? K.namespaceURI === pt ? Y === "math" : K.namespaceURI === wt ? Y === "math" && Et[Ce] : !!Gt[Y] : S.namespaceURI === pt ? K.namespaceURI === wt && !Et[Ce] || K.namespaceURI === Rt && !tt[Ce] ? !1 : !Gt[Y] && (Wt[Y] || !qt[Y]) : !!(_e === "application/xhtml+xml" && sr[S.namespaceURI]) : !1;
  }, yt = function(S) {
    Qr(t.removed, {
      element: S
    });
    try {
      V(S).removeChild(S);
    } catch {
      P(S);
    }
  }, jt = function(S, K) {
    try {
      Qr(t.removed, {
        attribute: K.getAttributeNode(S),
        from: K
      });
    } catch {
      Qr(t.removed, {
        attribute: null,
        from: K
      });
    }
    if (K.removeAttribute(S), S === "is")
      if (ee || ue)
        try {
          yt(K);
        } catch {
        }
      else
        try {
          K.setAttribute(S, "");
        } catch {
        }
  }, kr = function(S) {
    let K = null, Y = null;
    if (pe)
      S = "<remove></remove>" + S;
    else {
      const Be = Ro(S, /^[\r\n\t ]+/);
      Y = Be && Be[0];
    }
    _e === "application/xhtml+xml" && At === pt && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const Ce = G ? G.createHTML(S) : S;
    if (At === pt)
      try {
        K = new j().parseFromString(Ce, _e);
      } catch {
      }
    if (!K || !K.documentElement) {
      K = le.createDocument(At, "template", null);
      try {
        K.documentElement.innerHTML = ir ? _ : Ce;
      } catch {
      }
    }
    const Ge = K.body || K.documentElement;
    return S && Y && Ge.insertBefore(r.createTextNode(Y), Ge.childNodes[0] || null), At === pt ? Ne.call(K, se ? "html" : "body")[0] : se ? K.documentElement : Ge;
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
    return typeof g == "function" && S instanceof g;
  };
  function nt(S, K, Y) {
    An(S, (Ce) => {
      Ce.call(t, K, Y, rt);
    });
  }
  const Yt = function(S) {
    let K = null;
    if (nt(Se.beforeSanitizeElements, S, null), Ot(S))
      return yt(S), !0;
    const Y = De(S.nodeName);
    if (nt(Se.uponSanitizeElement, S, {
      tagName: Y,
      allowedTags: ve
    }), S.hasChildNodes() && !lr(S.firstElementChild) && ct(/<[/\w]/g, S.innerHTML) && ct(/<[/\w]/g, S.textContent) || S.nodeType === tn.progressingInstruction || ne && S.nodeType === tn.comment && ct(/<[/\w]/g, S.data))
      return yt(S), !0;
    if (!ve[Y] || b[Y]) {
      if (!b[Y] && Nt(Y) && ($.tagNameCheck instanceof RegExp && ct($.tagNameCheck, Y) || $.tagNameCheck instanceof Function && $.tagNameCheck(Y)))
        return !1;
      if (he && !Ke[Y]) {
        const Ce = V(S) || S.parentNode, Ge = W(S) || S.childNodes;
        if (Ge && Ce) {
          const Be = Ge.length;
          for (let lt = Be - 1; lt >= 0; --lt) {
            const je = w(Ge[lt], !0);
            je.__removalCount = (S.__removalCount || 0) + 1, Ce.insertBefore(je, M(S));
          }
        }
      }
      return yt(S), !0;
    }
    return S instanceof h && !wr(S) || (Y === "noscript" || Y === "noembed" || Y === "noframes") && ct(/<\/no(script|embed|frames)/i, S.innerHTML) ? (yt(S), !0) : (H && S.nodeType === tn.text && (K = S.textContent, An([fe, Re, Ae], (Ce) => {
      K = Zr(K, Ce, " ");
    }), S.textContent !== K && (Qr(t.removed, {
      element: S.cloneNode()
    }), S.textContent = K)), nt(Se.afterSanitizeElements, S, null), !1);
  }, xr = function(S, K, Y) {
    if (de && (K === "id" || K === "name") && (Y in r || Y in Ht))
      return !1;
    if (!(re && !te[K] && ct(ke, K)) && !(T && ct(Je, K))) {
      if (!N[K] || te[K]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Nt(S) && ($.tagNameCheck instanceof RegExp && ct($.tagNameCheck, S) || $.tagNameCheck instanceof Function && $.tagNameCheck(S)) && ($.attributeNameCheck instanceof RegExp && ct($.attributeNameCheck, K) || $.attributeNameCheck instanceof Function && $.attributeNameCheck(K)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          K === "is" && $.allowCustomizedBuiltInElements && ($.tagNameCheck instanceof RegExp && ct($.tagNameCheck, Y) || $.tagNameCheck instanceof Function && $.tagNameCheck(Y)))
        ) return !1;
      } else if (!Bt[K] && !ct(Ye, Zr(Y, xe, "")) && !((K === "src" || K === "xlink:href" || K === "href") && S !== "script" && gl(Y, "data:") === 0 && Le[S]) && !(Q && !ct(Pe, Zr(Y, xe, ""))) && Y)
        return !1;
    }
    return !0;
  }, Nt = function(S) {
    return S !== "annotation-xml" && Ro(S, Me);
  }, _r = function(S) {
    nt(Se.beforeSanitizeAttributes, S, null);
    const {
      attributes: K
    } = S;
    if (!K || Ot(S))
      return;
    const Y = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let Ce = K.length;
    for (; Ce--; ) {
      const Ge = K[Ce], {
        name: Be,
        namespaceURI: lt,
        value: je
      } = Ge, ut = De(Be);
      let Xe = Be === "value" ? je : bl(je);
      if (Y.attrName = ut, Y.attrValue = Xe, Y.keepAttr = !0, Y.forceKeepAttr = void 0, nt(Se.uponSanitizeAttribute, S, Y), Xe = Y.attrValue, et && (ut === "id" || ut === "name") && (jt(Be, S), Xe = He + Xe), ne && ct(/((--!?|])>)|<\/(style|title)/i, Xe)) {
        jt(Be, S);
        continue;
      }
      if (Y.forceKeepAttr || (jt(Be, S), !Y.keepAttr))
        continue;
      if (!J && ct(/\/>/i, Xe)) {
        jt(Be, S);
        continue;
      }
      H && An([fe, Re, Ae], (Cr) => {
        Xe = Zr(Xe, Cr, " ");
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
          lt ? S.setAttributeNS(lt, Be, Xe) : S.setAttribute(Be, Xe), Ot(S) ? yt(S) : To(t.removed);
        } catch {
        }
      }
    }
    nt(Se.afterSanitizeAttributes, S, null);
  }, ur = function S(K) {
    let Y = null;
    const Ce = Sr(K);
    for (nt(Se.beforeSanitizeShadowDOM, K, null); Y = Ce.nextNode(); )
      nt(Se.uponSanitizeShadowNode, Y, null), Yt(Y), _r(Y), Y.content instanceof s && S(Y.content);
    nt(Se.afterSanitizeShadowDOM, K, null);
  };
  return t.sanitize = function(S) {
    let K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = null, Ce = null, Ge = null, Be = null;
    if (ir = !S, ir && (S = "<!-->"), typeof S != "string" && !lr(S))
      if (typeof S.toString == "function") {
        if (S = S.toString(), typeof S != "string")
          throw Jr("dirty is not a string, aborting");
      } else
        throw Jr("toString is not a function");
    if (!t.isSupported)
      return S;
    if (Z || Vt(K), t.removed = [], typeof S == "string" && (U = !1), U) {
      if (S.nodeName) {
        const ut = De(S.nodeName);
        if (!ve[ut] || b[ut])
          throw Jr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (S instanceof g)
      Y = kr("<!---->"), Ce = Y.ownerDocument.importNode(S, !0), Ce.nodeType === tn.element && Ce.nodeName === "BODY" || Ce.nodeName === "HTML" ? Y = Ce : Y.appendChild(Ce);
    else {
      if (!ee && !H && !se && // eslint-disable-next-line unicorn/prefer-includes
      S.indexOf("<") === -1)
        return G && Ue ? G.createHTML(S) : S;
      if (Y = kr(S), !Y)
        return ee ? null : Ue ? _ : "";
    }
    Y && pe && yt(Y.firstChild);
    const lt = Sr(U ? S : Y);
    for (; Ge = lt.nextNode(); )
      Yt(Ge), _r(Ge), Ge.content instanceof s && ur(Ge.content);
    if (U)
      return S;
    if (ee) {
      if (ue)
        for (Be = Te.call(Y.ownerDocument); Y.firstChild; )
          Be.appendChild(Y.firstChild);
      else
        Be = Y;
      return (N.shadowroot || N.shadowrootmode) && (Be = $e.call(n, Be, !0)), Be;
    }
    let je = se ? Y.outerHTML : Y.innerHTML;
    return se && ve["!doctype"] && Y.ownerDocument && Y.ownerDocument.doctype && Y.ownerDocument.doctype.name && ct(Li, Y.ownerDocument.doctype.name) && (je = "<!DOCTYPE " + Y.ownerDocument.doctype.name + `>
` + je), H && An([fe, Re, Ae], (ut) => {
      je = Zr(je, ut, " ");
    }), G && Ue ? G.createHTML(je) : je;
  }, t.setConfig = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Vt(S), Z = !0;
  }, t.clearConfig = function() {
    rt = null, Z = !1;
  }, t.isValidAttribute = function(S, K, Y) {
    rt || Vt({});
    const Ce = De(S), Ge = De(K);
    return xr(Ce, Ge, Y);
  }, t.addHook = function(S, K) {
    typeof K == "function" && Qr(Se[S], K);
  }, t.removeHook = function(S, K) {
    if (K !== void 0) {
      const Y = hl(Se[S], K);
      return Y === -1 ? void 0 : ml(Se[S], Y, 1)[0];
    }
    return To(Se[S]);
  }, t.removeHooks = function(S) {
    Se[S] = [];
  }, t.removeAllHooks = function() {
    Se = jo();
  }, t;
}
var Pl = Mi();
const Ar = (e) => ({ __html: Pl.sanitize(e) });
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
const jl = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: i = "",
  text: s = "",
  region: d = "",
  component: g = ""
}) => {
  const { dataLayer: h } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: d.toLowerCase(),
    section: i.toLowerCase(),
    text: s.toLowerCase(),
    component: g.toLowerCase()
  };
  h && h.push(f);
};
var mr = {}, Io;
function Il() {
  if (Io) return mr;
  Io = 1;
  var e = Ze;
  function t(a) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, m = 1; m < arguments.length; m++) c += "&args[]=" + encodeURIComponent(arguments[m]);
    return "Minified React error #" + a + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, i = {}, s = {};
  function d(a) {
    return r.call(s, a) ? !0 : r.call(i, a) ? !1 : n.test(a) ? s[a] = !0 : (i[a] = !0, !1);
  }
  function g(a, c, m, v, O, R, L) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = v, this.attributeNamespace = O, this.mustUseProperty = m, this.propertyName = a, this.type = c, this.sanitizeURL = R, this.removeEmptyString = L;
  }
  var h = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    h[a] = new g(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var c = a[0];
    h[c] = new g(c, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    h[a] = new g(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    h[a] = new g(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    h[a] = new g(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    h[a] = new g(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    h[a] = new g(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    h[a] = new g(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    h[a] = new g(a, 5, !1, a.toLowerCase(), null, !1, !1);
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
    h[c] = new g(c, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var c = a.replace(f, x);
    h[c] = new g(c, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var c = a.replace(f, x);
    h[c] = new g(c, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    h[a] = new g(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), h.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    h[a] = new g(a, 1, !1, a.toLowerCase(), null, !0, !0);
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
  function C(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var c = B.exec(a);
    if (c) {
      var m = "", v, O = 0;
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
        O !== v && (m += a.substring(O, v)), O = v + 1, m += c;
      }
      a = O !== v ? m + a.substring(O, v) : m;
    }
    return a;
  }
  var w = /([A-Z])/g, P = /^ms-/, M = Array.isArray;
  function W(a, c) {
    return { insertionMode: a, selectedValue: c };
  }
  function V(a, c, m) {
    switch (c) {
      case "select":
        return W(1, m.value != null ? m.value : m.defaultValue);
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
    return 4 <= a.insertionMode || a.insertionMode === 0 ? W(1, null) : a;
  }
  var G = /* @__PURE__ */ new Map();
  function _(a, c, m) {
    if (typeof m != "object") throw Error(t(62));
    c = !0;
    for (var v in m) if (r.call(m, v)) {
      var O = m[v];
      if (O != null && typeof O != "boolean" && O !== "") {
        if (v.indexOf("--") === 0) {
          var R = C(v);
          O = C(("" + O).trim());
        } else {
          R = v;
          var L = G.get(R);
          L !== void 0 || (L = C(R.replace(w, "-$1").toLowerCase().replace(P, "-ms-")), G.set(R, L)), R = L, O = typeof O == "number" ? O === 0 || r.call(k, v) ? "" + O : O + "px" : C(("" + O).trim());
        }
        c ? (c = !1, a.push(' style="', R, ":", O)) : a.push(";", R, ":", O);
      }
    }
    c || a.push('"');
  }
  function le(a, c, m, v) {
    switch (m) {
      case "style":
        _(a, c, v);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < m.length) || m[0] !== "o" && m[0] !== "O" || m[1] !== "n" && m[1] !== "N") {
      if (c = h.hasOwnProperty(m) ? h[m] : null, c !== null) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (m = c.attributeName, c.type) {
          case 3:
            v && a.push(" ", m, '=""');
            break;
          case 4:
            v === !0 ? a.push(" ", m, '=""') : v !== !1 && a.push(" ", m, '="', C(v), '"');
            break;
          case 5:
            isNaN(v) || a.push(" ", m, '="', C(v), '"');
            break;
          case 6:
            !isNaN(v) && 1 <= v && a.push(" ", m, '="', C(v), '"');
            break;
          default:
            c.sanitizeURL && (v = "" + v), a.push(" ", m, '="', C(v), '"');
        }
      } else if (d(m)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = m.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        a.push(" ", m, '="', C(v), '"');
      }
    }
  }
  function ye(a, c, m) {
    if (c != null) {
      if (m != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && a.push("" + c);
    }
  }
  function Te(a) {
    var c = "";
    return e.Children.forEach(a, function(m) {
      m != null && (c += m);
    }), c;
  }
  function Ne(a, c, m, v) {
    a.push(fe(m));
    var O = m = null, R;
    for (R in c) if (r.call(c, R)) {
      var L = c[R];
      if (L != null) switch (R) {
        case "children":
          m = L;
          break;
        case "dangerouslySetInnerHTML":
          O = L;
          break;
        default:
          le(a, v, R, L);
      }
    }
    return a.push(">"), ye(a, O, m), typeof m == "string" ? (a.push(C(m)), null) : m;
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
  function Re(a, c, m, v, O) {
    switch (c) {
      case "select":
        a.push(fe("select"));
        var R = null, L = null;
        for (me in m) if (r.call(m, me)) {
          var X = m[me];
          if (X != null) switch (me) {
            case "children":
              R = X;
              break;
            case "dangerouslySetInnerHTML":
              L = X;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              le(a, v, me, X);
          }
        }
        return a.push(">"), ye(a, L, R), R;
      case "option":
        L = O.selectedValue, a.push(fe("option"));
        var oe = X = null, ce = null, me = null;
        for (R in m) if (r.call(m, R)) {
          var Ve = m[R];
          if (Ve != null) switch (R) {
            case "children":
              X = Ve;
              break;
            case "selected":
              ce = Ve;
              break;
            case "dangerouslySetInnerHTML":
              me = Ve;
              break;
            case "value":
              oe = Ve;
            default:
              le(a, v, R, Ve);
          }
        }
        if (L != null) if (m = oe !== null ? "" + oe : Te(X), M(L)) {
          for (v = 0; v < L.length; v++)
            if ("" + L[v] === m) {
              a.push(' selected=""');
              break;
            }
        } else "" + L === m && a.push(' selected=""');
        else ce && a.push(' selected=""');
        return a.push(">"), ye(a, me, X), X;
      case "textarea":
        a.push(fe("textarea")), me = L = R = null;
        for (X in m) if (r.call(m, X) && (oe = m[X], oe != null)) switch (X) {
          case "children":
            me = oe;
            break;
          case "value":
            R = oe;
            break;
          case "defaultValue":
            L = oe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            le(
              a,
              v,
              X,
              oe
            );
        }
        if (R === null && L !== null && (R = L), a.push(">"), me != null) {
          if (R != null) throw Error(t(92));
          if (M(me) && 1 < me.length) throw Error(t(93));
          R = "" + me;
        }
        return typeof R == "string" && R[0] === `
` && a.push(`
`), R !== null && a.push(C("" + R)), null;
      case "input":
        a.push(fe("input")), oe = me = X = R = null;
        for (L in m) if (r.call(m, L) && (ce = m[L], ce != null)) switch (L) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            oe = ce;
            break;
          case "defaultValue":
            X = ce;
            break;
          case "checked":
            me = ce;
            break;
          case "value":
            R = ce;
            break;
          default:
            le(a, v, L, ce);
        }
        return me !== null ? le(a, v, "checked", me) : oe !== null && le(a, v, "checked", oe), R !== null ? le(a, v, "value", R) : X !== null && le(a, v, "value", X), a.push("/>"), null;
      case "menuitem":
        a.push(fe("menuitem"));
        for (var kt in m) if (r.call(m, kt) && (R = m[kt], R != null)) switch (kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            le(a, v, kt, R);
        }
        return a.push(">"), null;
      case "title":
        a.push(fe("title")), R = null;
        for (Ve in m) if (r.call(m, Ve) && (L = m[Ve], L != null)) switch (Ve) {
          case "children":
            R = L;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            le(a, v, Ve, L);
        }
        return a.push(">"), R;
      case "listing":
      case "pre":
        a.push(fe(c)), L = R = null;
        for (oe in m) if (r.call(m, oe) && (X = m[oe], X != null)) switch (oe) {
          case "children":
            R = X;
            break;
          case "dangerouslySetInnerHTML":
            L = X;
            break;
          default:
            le(a, v, oe, X);
        }
        if (a.push(">"), L != null) {
          if (R != null) throw Error(t(60));
          if (typeof L != "object" || !("__html" in L)) throw Error(t(61));
          m = L.__html, m != null && (typeof m == "string" && 0 < m.length && m[0] === `
` ? a.push(`
`, m) : a.push("" + m));
        }
        return typeof R == "string" && R[0] === `
` && a.push(`
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
        a.push(fe(c));
        for (var St in m) if (r.call(m, St) && (R = m[St], R != null)) switch (St) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            le(a, v, St, R);
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
          m,
          c,
          v
        );
      case "html":
        return O.insertionMode === 0 && a.push("<!DOCTYPE html>"), Ne(a, m, c, v);
      default:
        if (c.indexOf("-") === -1 && typeof m.is != "string") return Ne(a, m, c, v);
        a.push(fe(c)), L = R = null;
        for (ce in m) if (r.call(m, ce) && (X = m[ce], X != null)) switch (ce) {
          case "children":
            R = X;
            break;
          case "dangerouslySetInnerHTML":
            L = X;
            break;
          case "style":
            _(a, v, X);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(ce) && typeof X != "function" && typeof X != "symbol" && a.push(" ", ce, '="', C(X), '"');
        }
        return a.push(">"), ye(a, L, R), R;
    }
  }
  function Ae(a, c, m) {
    if (a.push('<!--$?--><template id="'), m === null) throw Error(t(395));
    return a.push(m), a.push('"></template>');
  }
  function ke(a, c, m, v) {
    switch (m.insertionMode) {
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
  function Je(a, c) {
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
  function Ye(a, c, m, v) {
    return m.generateStaticMarkup ? (a.push(C(c)), !1) : (c === "" ? a = v : (v && a.push("<!-- -->"), a.push(C(c)), a = !0), a);
  }
  var ve = Object.assign, F = Symbol.for("react.element"), N = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), T = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), Z = Symbol.for("react.debug_trace_mode"), pe = Symbol.for("react.legacy_hidden"), ee = Symbol.for("react.default_value"), ue = Symbol.iterator;
  function Ue(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case I:
        return "Fragment";
      case N:
        return "Portal";
      case b:
        return "Profiler";
      case $:
        return "StrictMode";
      case Q:
        return "Suspense";
      case J:
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
        return c = a.displayName || null, c !== null ? c : Ue(a.type) || "Memo";
      case ne:
        c = a._payload, a = a._init;
        try {
          return Ue(a(c));
        } catch {
        }
    }
    return null;
  }
  var de = {};
  function et(a, c) {
    if (a = a.contextTypes, !a) return de;
    var m = {}, v;
    for (v in a) m[v] = c[v];
    return m;
  }
  var He = null;
  function he(a, c) {
    if (a !== c) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var m = c.parent;
      if (a === null) {
        if (m !== null) throw Error(t(401));
      } else {
        if (m === null) throw Error(t(401));
        he(a, m);
      }
      c.context._currentValue2 = c.value;
    }
  }
  function U(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && U(a);
  }
  function ae(a) {
    var c = a.parent;
    c !== null && ae(c), a.context._currentValue2 = a.value;
  }
  function Ke(a, c) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === c.depth ? he(a, c) : Ke(a, c);
  }
  function st(a, c) {
    var m = c.parent;
    if (m === null) throw Error(t(402));
    a.depth === m.depth ? he(a, m) : st(a, m), c.context._currentValue2 = c.value;
  }
  function Le(a) {
    var c = He;
    c !== a && (c === null ? ae(a) : a === null ? U(c) : c.depth === a.depth ? he(c, a) : c.depth > a.depth ? Ke(c, a) : st(c, a), He = a);
  }
  var or = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, c) {
    a = a._reactInternals, a.queue !== null && a.queue.push(c);
  }, enqueueReplaceState: function(a, c) {
    a = a._reactInternals, a.replace = !0, a.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Bt(a, c, m, v) {
    var O = a.state !== void 0 ? a.state : null;
    a.updater = or, a.props = m, a.state = O;
    var R = { queue: [], replace: !1 };
    a._reactInternals = R;
    var L = c.contextType;
    if (a.context = typeof L == "object" && L !== null ? L._currentValue2 : v, L = c.getDerivedStateFromProps, typeof L == "function" && (L = L(m, O), O = L == null ? O : ve({}, O, L), a.state = O), typeof c.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (c = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), c !== a.state && or.enqueueReplaceState(a, a.state, null), R.queue !== null && 0 < R.queue.length) if (c = R.queue, L = R.replace, R.queue = null, R.replace = !1, L && c.length === 1) a.state = c[0];
    else {
      for (R = L ? c[0] : a.state, O = !0, L = L ? 1 : 0; L < c.length; L++) {
        var X = c[L];
        X = typeof X == "function" ? X.call(a, R, m, v) : X, X != null && (O ? (O = !1, R = ve({}, R, X)) : ve(R, X));
      }
      a.state = R;
    }
    else R.queue = null;
  }
  var vr = { id: 1, overflow: "" };
  function Rt(a, c, m) {
    var v = a.id;
    a = a.overflow;
    var O = 32 - wt(v) - 1;
    v &= ~(1 << O), m += 1;
    var R = 32 - wt(c) + O;
    if (30 < R) {
      var L = O - O % 5;
      return R = (v & (1 << L) - 1).toString(32), v >>= L, O -= L, { id: 1 << 32 - wt(c) + O | m << O | v, overflow: R + a };
    }
    return { id: 1 << R | m << O | v, overflow: a };
  }
  var wt = Math.clz32 ? Math.clz32 : ir, pt = Math.log, At = Math.LN2;
  function ir(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (pt(a) / At | 0) | 0;
  }
  function sr(a, c) {
    return a === c && (a !== 0 || 1 / a === 1 / c) || a !== a && c !== c;
  }
  var zr = typeof Object.is == "function" ? Object.is : sr, tt = null, Et = null, Wt = null, _e = null, Pt = !1, Ut = !1, De = 0, rt = null, Ht = 0;
  function bt() {
    if (tt === null) throw Error(t(321));
    return tt;
  }
  function Vt() {
    if (0 < Ht) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function qt() {
    return _e === null ? Wt === null ? (Pt = !1, Wt = _e = Vt()) : (Pt = !0, _e = Wt) : _e.next === null ? (Pt = !1, _e = _e.next = Vt()) : (Pt = !0, _e = _e.next), _e;
  }
  function Gt() {
    Et = tt = null, Ut = !1, Wt = null, Ht = 0, _e = rt = null;
  }
  function wr(a, c) {
    return typeof c == "function" ? c(a) : c;
  }
  function yt(a, c, m) {
    if (tt = bt(), _e = qt(), Pt) {
      var v = _e.queue;
      if (c = v.dispatch, rt !== null && (m = rt.get(v), m !== void 0)) {
        rt.delete(v), v = _e.memoizedState;
        do
          v = a(v, m.action), m = m.next;
        while (m !== null);
        return _e.memoizedState = v, [v, c];
      }
      return [_e.memoizedState, c];
    }
    return a = a === wr ? typeof c == "function" ? c() : c : m !== void 0 ? m(c) : c, _e.memoizedState = a, a = _e.queue = { last: null, dispatch: null }, a = a.dispatch = kr.bind(null, tt, a), [_e.memoizedState, a];
  }
  function jt(a, c) {
    if (tt = bt(), _e = qt(), c = c === void 0 ? null : c, _e !== null) {
      var m = _e.memoizedState;
      if (m !== null && c !== null) {
        var v = m[1];
        e: if (v === null) v = !1;
        else {
          for (var O = 0; O < v.length && O < c.length; O++) if (!zr(c[O], v[O])) {
            v = !1;
            break e;
          }
          v = !0;
        }
        if (v) return m[0];
      }
    }
    return a = a(), _e.memoizedState = [a, c], a;
  }
  function kr(a, c, m) {
    if (25 <= Ht) throw Error(t(301));
    if (a === tt) if (Ut = !0, a = { action: m, next: null }, rt === null && (rt = /* @__PURE__ */ new Map()), m = rt.get(c), m === void 0) rt.set(c, a);
    else {
      for (c = m; c.next !== null; ) c = c.next;
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
  }, useMemo: jt, useReducer: yt, useRef: function(a) {
    tt = bt(), _e = qt();
    var c = _e.memoizedState;
    return c === null ? (a = { current: a }, _e.memoizedState = a) : c;
  }, useState: function(a) {
    return yt(wr, a);
  }, useInsertionEffect: Ot, useLayoutEffect: function() {
  }, useCallback: function(a, c) {
    return jt(function() {
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
    var m = nt;
    if (m === null) throw Error(t(404));
    return c = De++, a = ":" + m.idPrefix + "R" + a, 0 < c && (a += "H" + c.toString(32)), a + ":";
  }, useMutableSource: function(a, c) {
    return bt(), c(a._source);
  }, useSyncExternalStore: function(a, c, m) {
    if (m === void 0) throw Error(t(407));
    return m();
  } }, nt = null, Yt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function xr(a) {
    return console.error(a), null;
  }
  function Nt() {
  }
  function _r(a, c, m, v, O, R, L, X, oe) {
    var ce = [], me = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: me, pingedTasks: ce, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: O === void 0 ? xr : O, onAllReady: Nt, onShellReady: L === void 0 ? Nt : L, onShellError: Nt, onFatalError: Nt }, m = S(c, 0, null, m, !1, !1), m.parentFlushed = !0, a = ur(c, a, null, m, me, de, null, vr), ce.push(a), c;
  }
  function ur(a, c, m, v, O, R, L, X) {
    a.allPendingTasks++, m === null ? a.pendingRootTasks++ : m.pendingTasks++;
    var oe = { node: c, ping: function() {
      var ce = a.pingedTasks;
      ce.push(oe), ce.length === 1 && fn(a);
    }, blockedBoundary: m, blockedSegment: v, abortSet: O, legacyContext: R, context: L, treeContext: X };
    return O.add(oe), oe;
  }
  function S(a, c, m, v, O, R) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: m, lastPushedText: O, textEmbedded: R };
  }
  function K(a, c) {
    if (a = a.onError(c), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function Y(a, c) {
    var m = a.onShellError;
    m(c), m = a.onFatalError, m(c), a.destination !== null ? (a.status = 2, a.destination.destroy(c)) : (a.status = 1, a.fatalError = c);
  }
  function Ce(a, c, m, v, O) {
    for (tt = {}, Et = c, De = 0, a = m(v, O); Ut; ) Ut = !1, De = 0, Ht += 1, _e = null, a = m(v, O);
    return Gt(), a;
  }
  function Ge(a, c, m, v) {
    var O = m.render(), R = v.childContextTypes;
    if (R != null) {
      var L = c.legacyContext;
      if (typeof m.getChildContext != "function") v = L;
      else {
        m = m.getChildContext();
        for (var X in m) if (!(X in R)) throw Error(t(108, Ue(v) || "Unknown", X));
        v = ve({}, L, m);
      }
      c.legacyContext = v, je(a, c, O), c.legacyContext = L;
    } else je(a, c, O);
  }
  function Be(a, c) {
    if (a && a.defaultProps) {
      c = ve({}, c), a = a.defaultProps;
      for (var m in a) c[m] === void 0 && (c[m] = a[m]);
      return c;
    }
    return c;
  }
  function lt(a, c, m, v, O) {
    if (typeof m == "function") if (m.prototype && m.prototype.isReactComponent) {
      O = et(m, c.legacyContext);
      var R = m.contextType;
      R = new m(v, typeof R == "object" && R !== null ? R._currentValue2 : O), Bt(R, m, v, O), Ge(a, c, R, m);
    } else {
      R = et(m, c.legacyContext), O = Ce(a, c, m, v, R);
      var L = De !== 0;
      if (typeof O == "object" && O !== null && typeof O.render == "function" && O.$$typeof === void 0) Bt(O, m, v, R), Ge(a, c, O, m);
      else if (L) {
        v = c.treeContext, c.treeContext = Rt(v, 1, 0);
        try {
          je(a, c, O);
        } finally {
          c.treeContext = v;
        }
      } else je(a, c, O);
    }
    else if (typeof m == "string") {
      switch (O = c.blockedSegment, R = Re(O.chunks, m, v, a.responseState, O.formatContext), O.lastPushedText = !1, L = O.formatContext, O.formatContext = V(L, m, v), Xe(a, c, R), O.formatContext = L, m) {
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
          O.chunks.push("</", m, ">");
      }
      O.lastPushedText = !1;
    } else {
      switch (m) {
        case pe:
        case Z:
        case $:
        case b:
        case I:
          je(a, c, v.children);
          return;
        case J:
          je(a, c, v.children);
          return;
        case se:
          throw Error(t(343));
        case Q:
          e: {
            m = c.blockedBoundary, O = c.blockedSegment, R = v.fallback, v = v.children, L = /* @__PURE__ */ new Set();
            var X = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: L, errorDigest: null }, oe = S(a, O.chunks.length, X, O.formatContext, !1, !1);
            O.children.push(oe), O.lastPushedText = !1;
            var ce = S(a, 0, null, O.formatContext, !1, !1);
            ce.parentFlushed = !0, c.blockedBoundary = X, c.blockedSegment = ce;
            try {
              if (Xe(
                a,
                c,
                v
              ), a.responseState.generateStaticMarkup || ce.lastPushedText && ce.textEmbedded && ce.chunks.push("<!-- -->"), ce.status = 1, Kt(X, ce), X.pendingTasks === 0) break e;
            } catch (me) {
              ce.status = 4, X.forceClientRender = !0, X.errorDigest = K(a, me);
            } finally {
              c.blockedBoundary = m, c.blockedSegment = O;
            }
            c = ur(a, R, m, oe, L, c.legacyContext, c.context, c.treeContext), a.pingedTasks.push(c);
          }
          return;
      }
      if (typeof m == "object" && m !== null) switch (m.$$typeof) {
        case re:
          if (v = Ce(a, c, m.render, v, O), De !== 0) {
            m = c.treeContext, c.treeContext = Rt(m, 1, 0);
            try {
              je(a, c, v);
            } finally {
              c.treeContext = m;
            }
          } else je(a, c, v);
          return;
        case H:
          m = m.type, v = Be(m, v), lt(a, c, m, v, O);
          return;
        case te:
          if (O = v.children, m = m._context, v = v.value, R = m._currentValue2, m._currentValue2 = v, L = He, He = v = { parent: L, depth: L === null ? 0 : L.depth + 1, context: m, parentValue: R, value: v }, c.context = v, je(a, c, O), a = He, a === null) throw Error(t(403));
          v = a.parentValue, a.context._currentValue2 = v === ee ? a.context._defaultValue : v, a = He = a.parent, c.context = a;
          return;
        case T:
          v = v.children, v = v(m._currentValue2), je(a, c, v);
          return;
        case ne:
          O = m._init, m = O(m._payload), v = Be(m, v), lt(
            a,
            c,
            m,
            v,
            void 0
          );
          return;
      }
      throw Error(t(130, m == null ? m : typeof m, ""));
    }
  }
  function je(a, c, m) {
    if (c.node = m, typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case F:
          lt(a, c, m.type, m.props, m.ref);
          return;
        case N:
          throw Error(t(257));
        case ne:
          var v = m._init;
          m = v(m._payload), je(a, c, m);
          return;
      }
      if (M(m)) {
        ut(a, c, m);
        return;
      }
      if (m === null || typeof m != "object" ? v = null : (v = ue && m[ue] || m["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(m))) {
        if (m = v.next(), !m.done) {
          var O = [];
          do
            O.push(m.value), m = v.next();
          while (!m.done);
          ut(a, c, O);
        }
        return;
      }
      throw a = Object.prototype.toString.call(m), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : a));
    }
    typeof m == "string" ? (v = c.blockedSegment, v.lastPushedText = Ye(c.blockedSegment.chunks, m, a.responseState, v.lastPushedText)) : typeof m == "number" && (v = c.blockedSegment, v.lastPushedText = Ye(c.blockedSegment.chunks, "" + m, a.responseState, v.lastPushedText));
  }
  function ut(a, c, m) {
    for (var v = m.length, O = 0; O < v; O++) {
      var R = c.treeContext;
      c.treeContext = Rt(R, v, O);
      try {
        Xe(a, c, m[O]);
      } finally {
        c.treeContext = R;
      }
    }
  }
  function Xe(a, c, m) {
    var v = c.blockedSegment.formatContext, O = c.legacyContext, R = c.context;
    try {
      return je(a, c, m);
    } catch (oe) {
      if (Gt(), typeof oe == "object" && oe !== null && typeof oe.then == "function") {
        m = oe;
        var L = c.blockedSegment, X = S(a, L.chunks.length, null, L.formatContext, L.lastPushedText, !0);
        L.children.push(X), L.lastPushedText = !1, a = ur(a, c.node, c.blockedBoundary, X, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, m.then(a, a), c.blockedSegment.formatContext = v, c.legacyContext = O, c.context = R, Le(R);
      } else throw c.blockedSegment.formatContext = v, c.legacyContext = O, c.context = R, Le(R), oe;
    }
  }
  function Xt(a) {
    var c = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, Qt(this, c, a);
  }
  function Cr(a, c, m) {
    var v = a.blockedBoundary;
    a.blockedSegment.status = 3, v === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.push(null))) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, a = m === void 0 ? Error(t(432)) : m, v.errorDigest = c.onError(a), v.parentFlushed && c.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(O) {
      return Cr(O, c, m);
    }), v.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (v = c.onAllReady, v()));
  }
  function Kt(a, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var m = c.children[0];
      m.id = c.id, m.parentFlushed = !0, m.status === 1 && Kt(a, m);
    } else a.completedSegments.push(c);
  }
  function Qt(a, c, m) {
    if (c === null) {
      if (m.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = m;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = Nt, c = a.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (m.parentFlushed && m.status === 1 && Kt(c, m), c.parentFlushed && a.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(Xt, a), c.fallbackAbortableTasks.clear()) : m.parentFlushed && m.status === 1 && (Kt(c, m), c.completedSegments.length === 1 && c.parentFlushed && a.partialBoundaries.push(c)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function fn(a) {
    if (a.status !== 2) {
      var c = He, m = Yt.current;
      Yt.current = lr;
      var v = nt;
      nt = a.responseState;
      try {
        var O = a.pingedTasks, R;
        for (R = 0; R < O.length; R++) {
          var L = O[R], X = a, oe = L.blockedSegment;
          if (oe.status === 0) {
            Le(L.context);
            try {
              je(X, L, L.node), X.responseState.generateStaticMarkup || oe.lastPushedText && oe.textEmbedded && oe.chunks.push("<!-- -->"), L.abortSet.delete(L), oe.status = 1, Qt(X, L.blockedBoundary, oe);
            } catch (ht) {
              if (Gt(), typeof ht == "object" && ht !== null && typeof ht.then == "function") {
                var ce = L.ping;
                ht.then(ce, ce);
              } else {
                L.abortSet.delete(L), oe.status = 4;
                var me = L.blockedBoundary, Ve = ht, kt = K(X, Ve);
                if (me === null ? Y(X, Ve) : (me.pendingTasks--, me.forceClientRender || (me.forceClientRender = !0, me.errorDigest = kt, me.parentFlushed && X.clientRenderedBoundaries.push(me))), X.allPendingTasks--, X.allPendingTasks === 0) {
                  var St = X.onAllReady;
                  St();
                }
              }
            } finally {
            }
          }
        }
        O.splice(0, R), a.destination !== null && Tr(a, a.destination);
      } catch (ht) {
        K(a, ht), Y(a, ht);
      } finally {
        nt = v, Yt.current = m, m === lr && Le(c);
      }
    }
  }
  function cr(a, c, m) {
    switch (m.parentFlushed = !0, m.status) {
      case 0:
        var v = m.id = a.nextSegmentId++;
        return m.lastPushedText = !1, m.textEmbedded = !1, a = a.responseState, c.push('<template id="'), c.push(a.placeholderPrefix), a = v.toString(16), c.push(a), c.push('"></template>');
      case 1:
        m.status = 2;
        var O = !0;
        v = m.chunks;
        var R = 0;
        m = m.children;
        for (var L = 0; L < m.length; L++) {
          for (O = m[L]; R < O.index; R++) c.push(v[R]);
          O = dr(a, c, O);
        }
        for (; R < v.length - 1; R++) c.push(v[R]);
        return R < v.length && (O = c.push(v[R])), O;
      default:
        throw Error(t(390));
    }
  }
  function dr(a, c, m) {
    var v = m.boundary;
    if (v === null) return cr(a, c, m);
    if (v.parentFlushed = !0, v.forceClientRender) return a.responseState.generateStaticMarkup || (v = v.errorDigest, c.push("<!--$!-->"), c.push("<template"), v && (c.push(' data-dgst="'), v = C(v), c.push(v), c.push('"')), c.push("></template>")), cr(a, c, m), a = a.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), a;
    if (0 < v.pendingTasks) {
      v.rootSegmentID = a.nextSegmentId++, 0 < v.completedSegments.length && a.partialBoundaries.push(v);
      var O = a.responseState, R = O.nextSuspenseID++;
      return O = O.boundaryPrefix + R.toString(16), v = v.id = O, Ae(c, a.responseState, v), cr(a, c, m), c.push("<!--/$-->");
    }
    if (v.byteSize > a.progressiveChunkSize) return v.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(v), Ae(c, a.responseState, v.id), cr(a, c, m), c.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || c.push("<!--$-->"), m = v.completedSegments, m.length !== 1) throw Error(t(391));
    return dr(a, c, m[0]), a = a.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), a;
  }
  function $r(a, c, m) {
    return ke(c, a.responseState, m.formatContext, m.id), dr(a, c, m), Je(c, m.formatContext);
  }
  function Br(a, c, m) {
    for (var v = m.completedSegments, O = 0; O < v.length; O++) Wr(a, c, m, v[O]);
    if (v.length = 0, a = a.responseState, v = m.id, m = m.rootSegmentID, c.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? c.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, c.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), v === null) throw Error(t(395));
    return m = m.toString(16), c.push(v), c.push('","'), c.push(a.segmentPrefix), c.push(m), c.push('")<\/script>');
  }
  function Wr(a, c, m, v) {
    if (v.status === 2) return !0;
    var O = v.id;
    if (O === -1) {
      if ((v.id = m.rootSegmentID) === -1) throw Error(t(392));
      return $r(a, c, v);
    }
    return $r(a, c, v), a = a.responseState, c.push(a.startInlineScript), a.sentCompleteSegmentFunction ? c.push('$RS("') : (a.sentCompleteSegmentFunction = !0, c.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), c.push(a.segmentPrefix), O = O.toString(16), c.push(O), c.push('","'), c.push(a.placeholderPrefix), c.push(O), c.push('")<\/script>');
  }
  function Tr(a, c) {
    try {
      var m = a.completedRootSegment;
      if (m !== null && a.pendingRootTasks === 0) {
        dr(a, c, m), a.completedRootSegment = null;
        var v = a.responseState.bootstrapChunks;
        for (m = 0; m < v.length - 1; m++) c.push(v[m]);
        m < v.length && c.push(v[m]);
      }
      var O = a.clientRenderedBoundaries, R;
      for (R = 0; R < O.length; R++) {
        var L = O[R];
        v = c;
        var X = a.responseState, oe = L.id, ce = L.errorDigest, me = L.errorMessage, Ve = L.errorComponentStack;
        if (v.push(X.startInlineScript), X.sentClientRenderFunction ? v.push('$RX("') : (X.sentClientRenderFunction = !0, v.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), oe === null) throw Error(t(395));
        if (v.push(oe), v.push('"'), ce || me || Ve) {
          v.push(",");
          var kt = xe(ce || "");
          v.push(kt);
        }
        if (me || Ve) {
          v.push(",");
          var St = xe(me || "");
          v.push(St);
        }
        if (Ve) {
          v.push(",");
          var ht = xe(Ve);
          v.push(ht);
        }
        if (!v.push(")<\/script>")) {
          a.destination = null, R++, O.splice(0, R);
          return;
        }
      }
      O.splice(0, R);
      var fr = a.completedBoundaries;
      for (R = 0; R < fr.length; R++) if (!Br(a, c, fr[R])) {
        a.destination = null, R++, fr.splice(0, R);
        return;
      }
      fr.splice(0, R);
      var It = a.partialBoundaries;
      for (R = 0; R < It.length; R++) {
        var Hr = It[R];
        e: {
          O = a, L = c;
          var pr = Hr.completedSegments;
          for (X = 0; X < pr.length; X++) if (!Wr(O, L, Hr, pr[X])) {
            X++, pr.splice(0, X);
            var mn = !1;
            break e;
          }
          pr.splice(0, X), mn = !0;
        }
        if (!mn) {
          a.destination = null, R++, It.splice(0, R);
          return;
        }
      }
      It.splice(0, R);
      var Zt = a.completedBoundaries;
      for (R = 0; R < Zt.length; R++) if (!Br(a, c, Zt[R])) {
        a.destination = null, R++, Zt.splice(0, R);
        return;
      }
      Zt.splice(0, R);
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && c.push(null);
    }
  }
  function pn(a, c) {
    try {
      var m = a.abortableTasks;
      m.forEach(function(v) {
        return Cr(v, a, c);
      }), m.clear(), a.destination !== null && Tr(a, a.destination);
    } catch (v) {
      K(a, v), Y(a, v);
    }
  }
  function hn() {
  }
  function Ur(a, c, m, v) {
    var O = !1, R = null, L = "", X = { push: function(ce) {
      return ce !== null && (L += ce), !0;
    }, destroy: function(ce) {
      O = !0, R = ce;
    } }, oe = !1;
    if (a = _r(a, Me(m, c ? c.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, hn, void 0, function() {
      oe = !0;
    }), fn(a), pn(a, v), a.status === 1) a.status = 2, X.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = X;
      try {
        Tr(a, X);
      } catch (ce) {
        K(a, ce), Y(a, ce);
      }
    }
    if (O) throw R;
    if (!oe) throw Error(t(426));
    return L;
  }
  return mr.renderToNodeStream = function() {
    throw Error(t(207));
  }, mr.renderToStaticMarkup = function(a, c) {
    return Ur(a, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, mr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, mr.renderToString = function(a, c) {
    return Ur(a, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, mr.version = "18.3.1", mr;
}
var On = {}, Fo;
function Fl() {
  if (Fo) return On;
  Fo = 1;
  var e = Ze;
  function t(o) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, p = 1; p < arguments.length; p++) u += "&args[]=" + encodeURIComponent(arguments[p]);
    return "Minified React error #" + o + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function i(o, u) {
    if (u.length !== 0) if (512 < u.length) 0 < n && (o.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), o.enqueue(u);
    else {
      var p = r.length - n;
      p < u.length && (p === 0 ? o.enqueue(r) : (r.set(u.subarray(0, p), n), o.enqueue(r), u = u.subarray(p)), r = new Uint8Array(512), n = 0), r.set(u, n), n += u.length;
    }
  }
  function s(o, u) {
    return i(o, u), !0;
  }
  function d(o) {
    r && 0 < n && (o.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var g = new TextEncoder();
  function h(o) {
    return g.encode(o);
  }
  function f(o) {
    return g.encode(o);
  }
  function x(o, u) {
    typeof o.error == "function" ? o.error(u) : o.close();
  }
  var k = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, B = {}, C = {};
  function w(o) {
    return k.call(C, o) ? !0 : k.call(B, o) ? !1 : j.test(o) ? C[o] = !0 : (B[o] = !0, !1);
  }
  function P(o, u, p, y, E, A, D) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = y, this.attributeNamespace = E, this.mustUseProperty = p, this.propertyName = o, this.type = u, this.sanitizeURL = A, this.removeEmptyString = D;
  }
  var M = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    M[o] = new P(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var u = o[0];
    M[u] = new P(u, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    M[o] = new P(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    M[o] = new P(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    M[o] = new P(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    M[o] = new P(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    M[o] = new P(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    M[o] = new P(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    M[o] = new P(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var W = /[\-:]([a-z])/g;
  function V(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var u = o.replace(
      W,
      V
    );
    M[u] = new P(u, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var u = o.replace(W, V);
    M[u] = new P(u, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var u = o.replace(W, V);
    M[u] = new P(u, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    M[o] = new P(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), M.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    M[o] = new P(o, 1, !1, o.toLowerCase(), null, !0, !0);
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
  }, _ = ["Webkit", "ms", "Moz", "O"];
  Object.keys(G).forEach(function(o) {
    _.forEach(function(u) {
      u = u + o.charAt(0).toUpperCase() + o.substring(1), G[u] = G[o];
    });
  });
  var le = /["'&<>]/;
  function ye(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var u = le.exec(o);
    if (u) {
      var p = "", y, E = 0;
      for (y = u.index; y < o.length; y++) {
        switch (o.charCodeAt(y)) {
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
        E !== y && (p += o.substring(E, y)), E = y + 1, p += u;
      }
      o = E !== y ? p + o.substring(E, y) : p;
    }
    return o;
  }
  var Te = /([A-Z])/g, Ne = /^ms-/, $e = Array.isArray, Se = f("<script>"), fe = f("<\/script>"), Re = f('<script src="'), Ae = f('<script type="module" src="'), ke = f('" async=""><\/script>'), Je = /(<\/|<)(s)(cript)/gi;
  function Pe(o, u, p, y) {
    return "" + u + (p === "s" ? "\\u0073" : "\\u0053") + y;
  }
  function xe(o, u, p, y, E) {
    o = o === void 0 ? "" : o, u = u === void 0 ? Se : f('<script nonce="' + ye(u) + '">');
    var A = [];
    if (p !== void 0 && A.push(u, h(("" + p).replace(Je, Pe)), fe), y !== void 0) for (p = 0; p < y.length; p++) A.push(Re, h(ye(y[p])), ke);
    if (E !== void 0) for (y = 0; y < E.length; y++) A.push(Ae, h(ye(E[y])), ke);
    return { bootstrapChunks: A, startInlineScript: u, placeholderPrefix: f(o + "P:"), segmentPrefix: f(o + "S:"), boundaryPrefix: o + "B:", idPrefix: o, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Me(o, u) {
    return { insertionMode: o, selectedValue: u };
  }
  function Ye(o) {
    return Me(o === "http://www.w3.org/2000/svg" ? 2 : o === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function ve(o, u, p) {
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
    return 4 <= o.insertionMode || o.insertionMode === 0 ? Me(1, null) : o;
  }
  var F = f("<!-- -->");
  function N(o, u, p, y) {
    return u === "" ? y : (y && o.push(F), o.push(h(ye(u))), !0);
  }
  var I = /* @__PURE__ */ new Map(), $ = f(' style="'), b = f(":"), te = f(";");
  function T(o, u, p) {
    if (typeof p != "object") throw Error(t(62));
    u = !0;
    for (var y in p) if (k.call(p, y)) {
      var E = p[y];
      if (E != null && typeof E != "boolean" && E !== "") {
        if (y.indexOf("--") === 0) {
          var A = h(ye(y));
          E = h(ye(("" + E).trim()));
        } else {
          A = y;
          var D = I.get(A);
          D !== void 0 || (D = f(ye(A.replace(Te, "-$1").toLowerCase().replace(Ne, "-ms-"))), I.set(A, D)), A = D, E = typeof E == "number" ? E === 0 || k.call(G, y) ? h("" + E) : h(E + "px") : h(ye(("" + E).trim()));
        }
        u ? (u = !1, o.push($, A, b, E)) : o.push(te, A, b, E);
      }
    }
    u || o.push(J);
  }
  var re = f(" "), Q = f('="'), J = f('"'), H = f('=""');
  function ne(o, u, p, y) {
    switch (p) {
      case "style":
        T(o, u, y);
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
            y && o.push(re, p, H);
            break;
          case 4:
            y === !0 ? o.push(re, p, H) : y !== !1 && o.push(re, p, Q, h(ye(y)), J);
            break;
          case 5:
            isNaN(y) || o.push(re, p, Q, h(ye(y)), J);
            break;
          case 6:
            !isNaN(y) && 1 <= y && o.push(re, p, Q, h(ye(y)), J);
            break;
          default:
            u.sanitizeURL && (y = "" + y), o.push(re, p, Q, h(ye(y)), J);
        }
      } else if (w(p)) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = p.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        o.push(re, h(p), Q, h(ye(y)), J);
      }
    }
  }
  var se = f(">"), Z = f("/>");
  function pe(o, u, p) {
    if (u != null) {
      if (p != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && o.push(h("" + u));
    }
  }
  function ee(o) {
    var u = "";
    return e.Children.forEach(o, function(p) {
      p != null && (u += p);
    }), u;
  }
  var ue = f(' selected=""');
  function Ue(o, u, p, y) {
    o.push(he(p));
    var E = p = null, A;
    for (A in u) if (k.call(u, A)) {
      var D = u[A];
      if (D != null) switch (A) {
        case "children":
          p = D;
          break;
        case "dangerouslySetInnerHTML":
          E = D;
          break;
        default:
          ne(o, y, A, D);
      }
    }
    return o.push(se), pe(o, E, p), typeof p == "string" ? (o.push(h(ye(p))), null) : p;
  }
  var de = f(`
`), et = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, He = /* @__PURE__ */ new Map();
  function he(o) {
    var u = He.get(o);
    if (u === void 0) {
      if (!et.test(o)) throw Error(t(65, o));
      u = f("<" + o), He.set(o, u);
    }
    return u;
  }
  var U = f("<!DOCTYPE html>");
  function ae(o, u, p, y, E) {
    switch (u) {
      case "select":
        o.push(he("select"));
        var A = null, D = null;
        for (ge in p) if (k.call(p, ge)) {
          var q = p[ge];
          if (q != null) switch (ge) {
            case "children":
              A = q;
              break;
            case "dangerouslySetInnerHTML":
              D = q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(o, y, ge, q);
          }
        }
        return o.push(se), pe(o, D, A), A;
      case "option":
        D = E.selectedValue, o.push(he("option"));
        var ie = q = null, be = null, ge = null;
        for (A in p) if (k.call(p, A)) {
          var We = p[A];
          if (We != null) switch (A) {
            case "children":
              q = We;
              break;
            case "selected":
              be = We;
              break;
            case "dangerouslySetInnerHTML":
              ge = We;
              break;
            case "value":
              ie = We;
            default:
              ne(o, y, A, We);
          }
        }
        if (D != null) if (p = ie !== null ? "" + ie : ee(q), $e(D)) {
          for (y = 0; y < D.length; y++)
            if ("" + D[y] === p) {
              o.push(ue);
              break;
            }
        } else "" + D === p && o.push(ue);
        else be && o.push(ue);
        return o.push(se), pe(o, ge, q), q;
      case "textarea":
        o.push(he("textarea")), ge = D = A = null;
        for (q in p) if (k.call(p, q) && (ie = p[q], ie != null)) switch (q) {
          case "children":
            ge = ie;
            break;
          case "value":
            A = ie;
            break;
          case "defaultValue":
            D = ie;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(o, y, q, ie);
        }
        if (A === null && D !== null && (A = D), o.push(se), ge != null) {
          if (A != null) throw Error(t(92));
          if ($e(ge) && 1 < ge.length) throw Error(t(93));
          A = "" + ge;
        }
        return typeof A == "string" && A[0] === `
` && o.push(de), A !== null && o.push(h(ye("" + A))), null;
      case "input":
        o.push(he("input")), ie = ge = q = A = null;
        for (D in p) if (k.call(p, D) && (be = p[D], be != null)) switch (D) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ie = be;
            break;
          case "defaultValue":
            q = be;
            break;
          case "checked":
            ge = be;
            break;
          case "value":
            A = be;
            break;
          default:
            ne(o, y, D, be);
        }
        return ge !== null ? ne(
          o,
          y,
          "checked",
          ge
        ) : ie !== null && ne(o, y, "checked", ie), A !== null ? ne(o, y, "value", A) : q !== null && ne(o, y, "value", q), o.push(Z), null;
      case "menuitem":
        o.push(he("menuitem"));
        for (var gt in p) if (k.call(p, gt) && (A = p[gt], A != null)) switch (gt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(o, y, gt, A);
        }
        return o.push(se), null;
      case "title":
        o.push(he("title")), A = null;
        for (We in p) if (k.call(p, We) && (D = p[We], D != null)) switch (We) {
          case "children":
            A = D;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(o, y, We, D);
        }
        return o.push(se), A;
      case "listing":
      case "pre":
        o.push(he(u)), D = A = null;
        for (ie in p) if (k.call(p, ie) && (q = p[ie], q != null)) switch (ie) {
          case "children":
            A = q;
            break;
          case "dangerouslySetInnerHTML":
            D = q;
            break;
          default:
            ne(o, y, ie, q);
        }
        if (o.push(se), D != null) {
          if (A != null) throw Error(t(60));
          if (typeof D != "object" || !("__html" in D)) throw Error(t(61));
          p = D.__html, p != null && (typeof p == "string" && 0 < p.length && p[0] === `
` ? o.push(de, h(p)) : o.push(h("" + p)));
        }
        return typeof A == "string" && A[0] === `
` && o.push(de), A;
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
        o.push(he(u));
        for (var xt in p) if (k.call(p, xt) && (A = p[xt], A != null)) switch (xt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ne(o, y, xt, A);
        }
        return o.push(Z), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ue(o, p, u, y);
      case "html":
        return E.insertionMode === 0 && o.push(U), Ue(o, p, u, y);
      default:
        if (u.indexOf("-") === -1 && typeof p.is != "string") return Ue(o, p, u, y);
        o.push(he(u)), D = A = null;
        for (be in p) if (k.call(p, be) && (q = p[be], q != null)) switch (be) {
          case "children":
            A = q;
            break;
          case "dangerouslySetInnerHTML":
            D = q;
            break;
          case "style":
            T(o, y, q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            w(be) && typeof q != "function" && typeof q != "symbol" && o.push(re, h(be), Q, h(ye(q)), J);
        }
        return o.push(se), pe(o, D, A), A;
    }
  }
  var Ke = f("</"), st = f(">"), Le = f('<template id="'), or = f('"></template>'), Bt = f("<!--$-->"), vr = f('<!--$?--><template id="'), Rt = f('"></template>'), wt = f("<!--$!-->"), pt = f("<!--/$-->"), At = f("<template"), ir = f('"'), sr = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var zr = f("></template>");
  function tt(o, u, p) {
    if (i(o, vr), p === null) throw Error(t(395));
    return i(o, p), s(o, Rt);
  }
  var Et = f('<div hidden id="'), Wt = f('">'), _e = f("</div>"), Pt = f('<svg aria-hidden="true" style="display:none" id="'), Ut = f('">'), De = f("</svg>"), rt = f('<math aria-hidden="true" style="display:none" id="'), Ht = f('">'), bt = f("</math>"), Vt = f('<table hidden id="'), qt = f('">'), Gt = f("</table>"), wr = f('<table hidden><tbody id="'), yt = f('">'), jt = f("</tbody></table>"), kr = f('<table hidden><tr id="'), Sr = f('">'), Ot = f("</tr></table>"), lr = f('<table hidden><colgroup id="'), nt = f('">'), Yt = f("</colgroup></table>");
  function xr(o, u, p, y) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return i(o, Et), i(o, u.segmentPrefix), i(o, h(y.toString(16))), s(o, Wt);
      case 2:
        return i(o, Pt), i(o, u.segmentPrefix), i(o, h(y.toString(16))), s(o, Ut);
      case 3:
        return i(o, rt), i(o, u.segmentPrefix), i(o, h(y.toString(16))), s(o, Ht);
      case 4:
        return i(o, Vt), i(o, u.segmentPrefix), i(o, h(y.toString(16))), s(o, qt);
      case 5:
        return i(o, wr), i(o, u.segmentPrefix), i(o, h(y.toString(16))), s(o, yt);
      case 6:
        return i(o, kr), i(o, u.segmentPrefix), i(o, h(y.toString(16))), s(o, Sr);
      case 7:
        return i(
          o,
          lr
        ), i(o, u.segmentPrefix), i(o, h(y.toString(16))), s(o, nt);
      default:
        throw Error(t(397));
    }
  }
  function Nt(o, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return s(o, _e);
      case 2:
        return s(o, De);
      case 3:
        return s(o, bt);
      case 4:
        return s(o, Gt);
      case 5:
        return s(o, jt);
      case 6:
        return s(o, Ot);
      case 7:
        return s(o, Yt);
      default:
        throw Error(t(397));
    }
  }
  var _r = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), ur = f('$RS("'), S = f('","'), K = f('")<\/script>'), Y = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Ce = f('$RC("'), Ge = f('","'), Be = f('")<\/script>'), lt = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), je = f('$RX("'), ut = f('"'), Xe = f(")<\/script>"), Xt = f(","), Cr = /[<\u2028\u2029]/g;
  function Kt(o) {
    return JSON.stringify(o).replace(Cr, function(u) {
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
  var Qt = Object.assign, fn = Symbol.for("react.element"), cr = Symbol.for("react.portal"), dr = Symbol.for("react.fragment"), $r = Symbol.for("react.strict_mode"), Br = Symbol.for("react.profiler"), Wr = Symbol.for("react.provider"), Tr = Symbol.for("react.context"), pn = Symbol.for("react.forward_ref"), hn = Symbol.for("react.suspense"), Ur = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), m = Symbol.for("react.scope"), v = Symbol.for("react.debug_trace_mode"), O = Symbol.for("react.legacy_hidden"), R = Symbol.for("react.default_value"), L = Symbol.iterator;
  function X(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
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
      case Ur:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case Tr:
        return (o.displayName || "Context") + ".Consumer";
      case Wr:
        return (o._context.displayName || "Context") + ".Provider";
      case pn:
        var u = o.render;
        return o = o.displayName, o || (o = u.displayName || u.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case a:
        return u = o.displayName || null, u !== null ? u : X(o.type) || "Memo";
      case c:
        u = o._payload, o = o._init;
        try {
          return X(o(u));
        } catch {
        }
    }
    return null;
  }
  var oe = {};
  function ce(o, u) {
    if (o = o.contextTypes, !o) return oe;
    var p = {}, y;
    for (y in o) p[y] = u[y];
    return p;
  }
  var me = null;
  function Ve(o, u) {
    if (o !== u) {
      o.context._currentValue = o.parentValue, o = o.parent;
      var p = u.parent;
      if (o === null) {
        if (p !== null) throw Error(t(401));
      } else {
        if (p === null) throw Error(t(401));
        Ve(o, p);
      }
      u.context._currentValue = u.value;
    }
  }
  function kt(o) {
    o.context._currentValue = o.parentValue, o = o.parent, o !== null && kt(o);
  }
  function St(o) {
    var u = o.parent;
    u !== null && St(u), o.context._currentValue = o.value;
  }
  function ht(o, u) {
    if (o.context._currentValue = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === u.depth ? Ve(o, u) : ht(o, u);
  }
  function fr(o, u) {
    var p = u.parent;
    if (p === null) throw Error(t(402));
    o.depth === p.depth ? Ve(o, p) : fr(o, p), u.context._currentValue = u.value;
  }
  function It(o) {
    var u = me;
    u !== o && (u === null ? St(o) : o === null ? kt(u) : u.depth === o.depth ? Ve(u, o) : u.depth > o.depth ? ht(u, o) : fr(u, o), me = o);
  }
  var Hr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, u) {
    o = o._reactInternals, o.queue !== null && o.queue.push(u);
  }, enqueueReplaceState: function(o, u) {
    o = o._reactInternals, o.replace = !0, o.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function pr(o, u, p, y) {
    var E = o.state !== void 0 ? o.state : null;
    o.updater = Hr, o.props = p, o.state = E;
    var A = { queue: [], replace: !1 };
    o._reactInternals = A;
    var D = u.contextType;
    if (o.context = typeof D == "object" && D !== null ? D._currentValue : y, D = u.getDerivedStateFromProps, typeof D == "function" && (D = D(p, E), E = D == null ? E : Qt({}, E, D), o.state = E), typeof u.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (u = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), u !== o.state && Hr.enqueueReplaceState(o, o.state, null), A.queue !== null && 0 < A.queue.length) if (u = A.queue, D = A.replace, A.queue = null, A.replace = !1, D && u.length === 1) o.state = u[0];
    else {
      for (A = D ? u[0] : o.state, E = !0, D = D ? 1 : 0; D < u.length; D++) {
        var q = u[D];
        q = typeof q == "function" ? q.call(o, A, p, y) : q, q != null && (E ? (E = !1, A = Qt({}, A, q)) : Qt(A, q));
      }
      o.state = A;
    }
    else A.queue = null;
  }
  var mn = { id: 1, overflow: "" };
  function Zt(o, u, p) {
    var y = o.id;
    o = o.overflow;
    var E = 32 - gn(y) - 1;
    y &= ~(1 << E), p += 1;
    var A = 32 - gn(u) + E;
    if (30 < A) {
      var D = E - E % 5;
      return A = (y & (1 << D) - 1).toString(32), y >>= D, E -= D, { id: 1 << 32 - gn(u) + E | p << E | y, overflow: A + o };
    }
    return { id: 1 << A | p << E | y, overflow: o };
  }
  var gn = Math.clz32 ? Math.clz32 : Us, Bs = Math.log, Ws = Math.LN2;
  function Us(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Bs(o) / Ws | 0) | 0;
  }
  function Hs(o, u) {
    return o === u && (o !== 0 || 1 / o === 1 / u) || o !== o && u !== u;
  }
  var Vs = typeof Object.is == "function" ? Object.is : Hs, Ft = null, ta = null, bn = null, ze = null, Vr = !1, yn = !1, qr = 0, Jt = null, vn = 0;
  function hr() {
    if (Ft === null) throw Error(t(321));
    return Ft;
  }
  function no() {
    if (0 < vn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function ra() {
    return ze === null ? bn === null ? (Vr = !1, bn = ze = no()) : (Vr = !0, ze = bn) : ze.next === null ? (Vr = !1, ze = ze.next = no()) : (Vr = !0, ze = ze.next), ze;
  }
  function na() {
    ta = Ft = null, yn = !1, bn = null, vn = 0, ze = Jt = null;
  }
  function ao(o, u) {
    return typeof u == "function" ? u(o) : u;
  }
  function oo(o, u, p) {
    if (Ft = hr(), ze = ra(), Vr) {
      var y = ze.queue;
      if (u = y.dispatch, Jt !== null && (p = Jt.get(y), p !== void 0)) {
        Jt.delete(y), y = ze.memoizedState;
        do
          y = o(y, p.action), p = p.next;
        while (p !== null);
        return ze.memoizedState = y, [y, u];
      }
      return [ze.memoizedState, u];
    }
    return o = o === ao ? typeof u == "function" ? u() : u : p !== void 0 ? p(u) : u, ze.memoizedState = o, o = ze.queue = { last: null, dispatch: null }, o = o.dispatch = qs.bind(null, Ft, o), [ze.memoizedState, o];
  }
  function io(o, u) {
    if (Ft = hr(), ze = ra(), u = u === void 0 ? null : u, ze !== null) {
      var p = ze.memoizedState;
      if (p !== null && u !== null) {
        var y = p[1];
        e: if (y === null) y = !1;
        else {
          for (var E = 0; E < y.length && E < u.length; E++) if (!Vs(u[E], y[E])) {
            y = !1;
            break e;
          }
          y = !0;
        }
        if (y) return p[0];
      }
    }
    return o = o(), ze.memoizedState = [o, u], o;
  }
  function qs(o, u, p) {
    if (25 <= vn) throw Error(t(301));
    if (o === Ft) if (yn = !0, o = { action: p, next: null }, Jt === null && (Jt = /* @__PURE__ */ new Map()), p = Jt.get(u), p === void 0) Jt.set(u, o);
    else {
      for (u = p; u.next !== null; ) u = u.next;
      u.next = o;
    }
  }
  function Gs() {
    throw Error(t(394));
  }
  function wn() {
  }
  var so = { readContext: function(o) {
    return o._currentValue;
  }, useContext: function(o) {
    return hr(), o._currentValue;
  }, useMemo: io, useReducer: oo, useRef: function(o) {
    Ft = hr(), ze = ra();
    var u = ze.memoizedState;
    return u === null ? (o = { current: o }, ze.memoizedState = o) : u;
  }, useState: function(o) {
    return oo(ao, o);
  }, useInsertionEffect: wn, useLayoutEffect: function() {
  }, useCallback: function(o, u) {
    return io(function() {
      return o;
    }, u);
  }, useImperativeHandle: wn, useEffect: wn, useDebugValue: wn, useDeferredValue: function(o) {
    return hr(), o;
  }, useTransition: function() {
    return hr(), [!1, Gs];
  }, useId: function() {
    var o = ta.treeContext, u = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - gn(o) - 1)).toString(32) + u;
    var p = kn;
    if (p === null) throw Error(t(404));
    return u = qr++, o = ":" + p.idPrefix + "R" + o, 0 < u && (o += "H" + u.toString(32)), o + ":";
  }, useMutableSource: function(o, u) {
    return hr(), u(o._source);
  }, useSyncExternalStore: function(o, u, p) {
    if (p === void 0) throw Error(t(407));
    return p();
  } }, kn = null, aa = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ys(o) {
    return console.error(o), null;
  }
  function Gr() {
  }
  function Xs(o, u, p, y, E, A, D, q, ie) {
    var be = [], ge = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: y === void 0 ? 12800 : y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ge, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: E === void 0 ? Ys : E, onAllReady: A === void 0 ? Gr : A, onShellReady: D === void 0 ? Gr : D, onShellError: q === void 0 ? Gr : q, onFatalError: ie === void 0 ? Gr : ie }, p = Sn(u, 0, null, p, !1, !1), p.parentFlushed = !0, o = oa(u, o, null, p, ge, oe, null, mn), be.push(o), u;
  }
  function oa(o, u, p, y, E, A, D, q) {
    o.allPendingTasks++, p === null ? o.pendingRootTasks++ : p.pendingTasks++;
    var ie = { node: u, ping: function() {
      var be = o.pingedTasks;
      be.push(ie), be.length === 1 && mo(o);
    }, blockedBoundary: p, blockedSegment: y, abortSet: E, legacyContext: A, context: D, treeContext: q };
    return E.add(ie), ie;
  }
  function Sn(o, u, p, y, E, A) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: y, boundary: p, lastPushedText: E, textEmbedded: A };
  }
  function Yr(o, u) {
    if (o = o.onError(u), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function xn(o, u) {
    var p = o.onShellError;
    p(u), p = o.onFatalError, p(u), o.destination !== null ? (o.status = 2, x(o.destination, u)) : (o.status = 1, o.fatalError = u);
  }
  function lo(o, u, p, y, E) {
    for (Ft = {}, ta = u, qr = 0, o = p(y, E); yn; ) yn = !1, qr = 0, vn += 1, ze = null, o = p(y, E);
    return na(), o;
  }
  function uo(o, u, p, y) {
    var E = p.render(), A = y.childContextTypes;
    if (A != null) {
      var D = u.legacyContext;
      if (typeof p.getChildContext != "function") y = D;
      else {
        p = p.getChildContext();
        for (var q in p) if (!(q in A)) throw Error(t(108, X(y) || "Unknown", q));
        y = Qt({}, D, p);
      }
      u.legacyContext = y, mt(o, u, E), u.legacyContext = D;
    } else mt(o, u, E);
  }
  function co(o, u) {
    if (o && o.defaultProps) {
      u = Qt({}, u), o = o.defaultProps;
      for (var p in o) u[p] === void 0 && (u[p] = o[p]);
      return u;
    }
    return u;
  }
  function ia(o, u, p, y, E) {
    if (typeof p == "function") if (p.prototype && p.prototype.isReactComponent) {
      E = ce(p, u.legacyContext);
      var A = p.contextType;
      A = new p(y, typeof A == "object" && A !== null ? A._currentValue : E), pr(A, p, y, E), uo(o, u, A, p);
    } else {
      A = ce(p, u.legacyContext), E = lo(o, u, p, y, A);
      var D = qr !== 0;
      if (typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0) pr(E, p, y, A), uo(o, u, E, p);
      else if (D) {
        y = u.treeContext, u.treeContext = Zt(y, 1, 0);
        try {
          mt(o, u, E);
        } finally {
          u.treeContext = y;
        }
      } else mt(o, u, E);
    }
    else if (typeof p == "string") {
      switch (E = u.blockedSegment, A = ae(E.chunks, p, y, o.responseState, E.formatContext), E.lastPushedText = !1, D = E.formatContext, E.formatContext = ve(D, p, y), sa(o, u, A), E.formatContext = D, p) {
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
          E.chunks.push(Ke, h(p), st);
      }
      E.lastPushedText = !1;
    } else {
      switch (p) {
        case O:
        case v:
        case $r:
        case Br:
        case dr:
          mt(o, u, y.children);
          return;
        case Ur:
          mt(o, u, y.children);
          return;
        case m:
          throw Error(t(343));
        case hn:
          e: {
            p = u.blockedBoundary, E = u.blockedSegment, A = y.fallback, y = y.children, D = /* @__PURE__ */ new Set();
            var q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: D, errorDigest: null }, ie = Sn(o, E.chunks.length, q, E.formatContext, !1, !1);
            E.children.push(ie), E.lastPushedText = !1;
            var be = Sn(o, 0, null, E.formatContext, !1, !1);
            be.parentFlushed = !0, u.blockedBoundary = q, u.blockedSegment = be;
            try {
              if (sa(
                o,
                u,
                y
              ), be.lastPushedText && be.textEmbedded && be.chunks.push(F), be.status = 1, _n(q, be), q.pendingTasks === 0) break e;
            } catch (ge) {
              be.status = 4, q.forceClientRender = !0, q.errorDigest = Yr(o, ge);
            } finally {
              u.blockedBoundary = p, u.blockedSegment = E;
            }
            u = oa(o, A, p, ie, D, u.legacyContext, u.context, u.treeContext), o.pingedTasks.push(u);
          }
          return;
      }
      if (typeof p == "object" && p !== null) switch (p.$$typeof) {
        case pn:
          if (y = lo(o, u, p.render, y, E), qr !== 0) {
            p = u.treeContext, u.treeContext = Zt(p, 1, 0);
            try {
              mt(o, u, y);
            } finally {
              u.treeContext = p;
            }
          } else mt(o, u, y);
          return;
        case a:
          p = p.type, y = co(p, y), ia(o, u, p, y, E);
          return;
        case Wr:
          if (E = y.children, p = p._context, y = y.value, A = p._currentValue, p._currentValue = y, D = me, me = y = { parent: D, depth: D === null ? 0 : D.depth + 1, context: p, parentValue: A, value: y }, u.context = y, mt(o, u, E), o = me, o === null) throw Error(t(403));
          y = o.parentValue, o.context._currentValue = y === R ? o.context._defaultValue : y, o = me = o.parent, u.context = o;
          return;
        case Tr:
          y = y.children, y = y(p._currentValue), mt(o, u, y);
          return;
        case c:
          E = p._init, p = E(p._payload), y = co(p, y), ia(o, u, p, y, void 0);
          return;
      }
      throw Error(t(
        130,
        p == null ? p : typeof p,
        ""
      ));
    }
  }
  function mt(o, u, p) {
    if (u.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case fn:
          ia(o, u, p.type, p.props, p.ref);
          return;
        case cr:
          throw Error(t(257));
        case c:
          var y = p._init;
          p = y(p._payload), mt(o, u, p);
          return;
      }
      if ($e(p)) {
        fo(o, u, p);
        return;
      }
      if (p === null || typeof p != "object" ? y = null : (y = L && p[L] || p["@@iterator"], y = typeof y == "function" ? y : null), y && (y = y.call(p))) {
        if (p = y.next(), !p.done) {
          var E = [];
          do
            E.push(p.value), p = y.next();
          while (!p.done);
          fo(o, u, E);
        }
        return;
      }
      throw o = Object.prototype.toString.call(p), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : o));
    }
    typeof p == "string" ? (y = u.blockedSegment, y.lastPushedText = N(u.blockedSegment.chunks, p, o.responseState, y.lastPushedText)) : typeof p == "number" && (y = u.blockedSegment, y.lastPushedText = N(u.blockedSegment.chunks, "" + p, o.responseState, y.lastPushedText));
  }
  function fo(o, u, p) {
    for (var y = p.length, E = 0; E < y; E++) {
      var A = u.treeContext;
      u.treeContext = Zt(A, y, E);
      try {
        sa(o, u, p[E]);
      } finally {
        u.treeContext = A;
      }
    }
  }
  function sa(o, u, p) {
    var y = u.blockedSegment.formatContext, E = u.legacyContext, A = u.context;
    try {
      return mt(o, u, p);
    } catch (ie) {
      if (na(), typeof ie == "object" && ie !== null && typeof ie.then == "function") {
        p = ie;
        var D = u.blockedSegment, q = Sn(o, D.chunks.length, null, D.formatContext, D.lastPushedText, !0);
        D.children.push(q), D.lastPushedText = !1, o = oa(o, u.node, u.blockedBoundary, q, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, p.then(o, o), u.blockedSegment.formatContext = y, u.legacyContext = E, u.context = A, It(A);
      } else throw u.blockedSegment.formatContext = y, u.legacyContext = E, u.context = A, It(A), ie;
    }
  }
  function Ks(o) {
    var u = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, ho(this, u, o);
  }
  function po(o, u, p) {
    var y = o.blockedBoundary;
    o.blockedSegment.status = 3, y === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.close())) : (y.pendingTasks--, y.forceClientRender || (y.forceClientRender = !0, o = p === void 0 ? Error(t(432)) : p, y.errorDigest = u.onError(o), y.parentFlushed && u.clientRenderedBoundaries.push(y)), y.fallbackAbortableTasks.forEach(function(E) {
      return po(E, u, p);
    }), y.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (y = u.onAllReady, y()));
  }
  function _n(o, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var p = u.children[0];
      p.id = u.id, p.parentFlushed = !0, p.status === 1 && _n(o, p);
    } else o.completedSegments.push(u);
  }
  function ho(o, u, p) {
    if (u === null) {
      if (p.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = p;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = Gr, u = o.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && _n(u, p), u.parentFlushed && o.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(Ks, o), u.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (_n(u, p), u.completedSegments.length === 1 && u.parentFlushed && o.partialBoundaries.push(u)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function mo(o) {
    if (o.status !== 2) {
      var u = me, p = aa.current;
      aa.current = so;
      var y = kn;
      kn = o.responseState;
      try {
        var E = o.pingedTasks, A;
        for (A = 0; A < E.length; A++) {
          var D = E[A], q = o, ie = D.blockedSegment;
          if (ie.status === 0) {
            It(D.context);
            try {
              mt(q, D, D.node), ie.lastPushedText && ie.textEmbedded && ie.chunks.push(F), D.abortSet.delete(D), ie.status = 1, ho(q, D.blockedBoundary, ie);
            } catch (_t) {
              if (na(), typeof _t == "object" && _t !== null && typeof _t.then == "function") {
                var be = D.ping;
                _t.then(be, be);
              } else {
                D.abortSet.delete(D), ie.status = 4;
                var ge = D.blockedBoundary, We = _t, gt = Yr(q, We);
                if (ge === null ? xn(q, We) : (ge.pendingTasks--, ge.forceClientRender || (ge.forceClientRender = !0, ge.errorDigest = gt, ge.parentFlushed && q.clientRenderedBoundaries.push(ge))), q.allPendingTasks--, q.allPendingTasks === 0) {
                  var xt = q.onAllReady;
                  xt();
                }
              }
            } finally {
            }
          }
        }
        E.splice(0, A), o.destination !== null && la(o, o.destination);
      } catch (_t) {
        Yr(o, _t), xn(o, _t);
      } finally {
        kn = y, aa.current = p, p === so && It(u);
      }
    }
  }
  function Cn(o, u, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var y = p.id = o.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, o = o.responseState, i(u, Le), i(u, o.placeholderPrefix), o = h(y.toString(16)), i(u, o), s(u, or);
      case 1:
        p.status = 2;
        var E = !0;
        y = p.chunks;
        var A = 0;
        p = p.children;
        for (var D = 0; D < p.length; D++) {
          for (E = p[D]; A < E.index; A++) i(u, y[A]);
          E = Tn(o, u, E);
        }
        for (; A < y.length - 1; A++) i(u, y[A]);
        return A < y.length && (E = s(u, y[A])), E;
      default:
        throw Error(t(390));
    }
  }
  function Tn(o, u, p) {
    var y = p.boundary;
    if (y === null) return Cn(o, u, p);
    if (y.parentFlushed = !0, y.forceClientRender) y = y.errorDigest, s(u, wt), i(u, At), y && (i(u, sr), i(u, h(ye(y))), i(u, ir)), s(u, zr), Cn(o, u, p);
    else if (0 < y.pendingTasks) {
      y.rootSegmentID = o.nextSegmentId++, 0 < y.completedSegments.length && o.partialBoundaries.push(y);
      var E = o.responseState, A = E.nextSuspenseID++;
      E = f(E.boundaryPrefix + A.toString(16)), y = y.id = E, tt(u, o.responseState, y), Cn(o, u, p);
    } else if (y.byteSize > o.progressiveChunkSize) y.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(y), tt(u, o.responseState, y.id), Cn(o, u, p);
    else {
      if (s(u, Bt), p = y.completedSegments, p.length !== 1) throw Error(t(391));
      Tn(o, u, p[0]);
    }
    return s(u, pt);
  }
  function go(o, u, p) {
    return xr(u, o.responseState, p.formatContext, p.id), Tn(o, u, p), Nt(u, p.formatContext);
  }
  function bo(o, u, p) {
    for (var y = p.completedSegments, E = 0; E < y.length; E++) yo(o, u, p, y[E]);
    if (y.length = 0, o = o.responseState, y = p.id, p = p.rootSegmentID, i(u, o.startInlineScript), o.sentCompleteBoundaryFunction ? i(u, Ce) : (o.sentCompleteBoundaryFunction = !0, i(u, Y)), y === null) throw Error(t(395));
    return p = h(p.toString(16)), i(u, y), i(u, Ge), i(u, o.segmentPrefix), i(u, p), s(u, Be);
  }
  function yo(o, u, p, y) {
    if (y.status === 2) return !0;
    var E = y.id;
    if (E === -1) {
      if ((y.id = p.rootSegmentID) === -1) throw Error(t(392));
      return go(o, u, y);
    }
    return go(o, u, y), o = o.responseState, i(u, o.startInlineScript), o.sentCompleteSegmentFunction ? i(u, ur) : (o.sentCompleteSegmentFunction = !0, i(u, _r)), i(u, o.segmentPrefix), E = h(E.toString(16)), i(u, E), i(u, S), i(u, o.placeholderPrefix), i(u, E), s(u, K);
  }
  function la(o, u) {
    r = new Uint8Array(512), n = 0;
    try {
      var p = o.completedRootSegment;
      if (p !== null && o.pendingRootTasks === 0) {
        Tn(o, u, p), o.completedRootSegment = null;
        var y = o.responseState.bootstrapChunks;
        for (p = 0; p < y.length - 1; p++) i(u, y[p]);
        p < y.length && s(u, y[p]);
      }
      var E = o.clientRenderedBoundaries, A;
      for (A = 0; A < E.length; A++) {
        var D = E[A];
        y = u;
        var q = o.responseState, ie = D.id, be = D.errorDigest, ge = D.errorMessage, We = D.errorComponentStack;
        if (i(y, q.startInlineScript), q.sentClientRenderFunction ? i(y, je) : (q.sentClientRenderFunction = !0, i(
          y,
          lt
        )), ie === null) throw Error(t(395));
        i(y, ie), i(y, ut), (be || ge || We) && (i(y, Xt), i(y, h(Kt(be || "")))), (ge || We) && (i(y, Xt), i(y, h(Kt(ge || "")))), We && (i(y, Xt), i(y, h(Kt(We)))), s(y, Xe);
      }
      E.splice(0, A);
      var gt = o.completedBoundaries;
      for (A = 0; A < gt.length; A++) bo(o, u, gt[A]);
      gt.splice(0, A), d(u), r = new Uint8Array(512), n = 0;
      var xt = o.partialBoundaries;
      for (A = 0; A < xt.length; A++) {
        var _t = xt[A];
        e: {
          E = o, D = u;
          var Rn = _t.completedSegments;
          for (q = 0; q < Rn.length; q++) if (!yo(
            E,
            D,
            _t,
            Rn[q]
          )) {
            q++, Rn.splice(0, q);
            var wo = !1;
            break e;
          }
          Rn.splice(0, q), wo = !0;
        }
        if (!wo) {
          o.destination = null, A++, xt.splice(0, A);
          return;
        }
      }
      xt.splice(0, A);
      var ua = o.completedBoundaries;
      for (A = 0; A < ua.length; A++) bo(o, u, ua[A]);
      ua.splice(0, A);
    } finally {
      d(u), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && u.close();
    }
  }
  function vo(o, u) {
    try {
      var p = o.abortableTasks;
      p.forEach(function(y) {
        return po(y, o, u);
      }), p.clear(), o.destination !== null && la(o, o.destination);
    } catch (y) {
      Yr(o, y), xn(o, y);
    }
  }
  return On.renderToReadableStream = function(o, u) {
    return new Promise(function(p, y) {
      var E, A, D = new Promise(function(ge, We) {
        A = ge, E = We;
      }), q = Xs(o, xe(u ? u.identifierPrefix : void 0, u ? u.nonce : void 0, u ? u.bootstrapScriptContent : void 0, u ? u.bootstrapScripts : void 0, u ? u.bootstrapModules : void 0), Ye(u ? u.namespaceURI : void 0), u ? u.progressiveChunkSize : void 0, u ? u.onError : void 0, A, function() {
        var ge = new ReadableStream({ type: "bytes", pull: function(We) {
          if (q.status === 1) q.status = 2, x(We, q.fatalError);
          else if (q.status !== 2 && q.destination === null) {
            q.destination = We;
            try {
              la(q, We);
            } catch (gt) {
              Yr(q, gt), xn(q, gt);
            }
          }
        }, cancel: function() {
          vo(q);
        } }, { highWaterMark: 0 });
        ge.allReady = D, p(ge);
      }, function(ge) {
        D.catch(function() {
        }), y(ge);
      }, E);
      if (u && u.signal) {
        var ie = u.signal, be = function() {
          vo(q, ie.reason), ie.removeEventListener("abort", be);
        };
        ie.addEventListener("abort", be);
      }
      mo(q);
    });
  }, On.version = "18.3.1", On;
}
var Dr, Di;
Dr = Il(), Di = Fl();
Dr.version;
Dr.renderToString;
Dr.renderToStaticMarkup;
Dr.renderToNodeStream;
Dr.renderToStaticNodeStream;
Di.renderToReadableStream;
const Ll = "staticMarkup";
function zi() {
  const e = tl().indexOf(Ll) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const nr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = zi(), { onClick: i, ...s } = r.props;
  if (n)
    return Ze.cloneElement(r, {
      ...s,
      onClick: (h) => (jl(e), i ? i(h) : !0)
    });
  let d = "";
  ["input", "header", "header-input"].includes(t) && (d = `-${t}`);
  const g = {
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
    onClick: i,
    ...g
  });
};
l.number, l.number, l.func, l.object;
l.arrayOf(Ni).isRequired, l.number;
const Ml = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, $i = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  block: i,
  color: s = "gray",
  disabled: d,
  element: g = "button",
  href: h,
  icon: f,
  innerRef: x,
  onClick: k,
  size: j = "default",
  classes: B,
  target: C = "_self",
  ...w
}) => {
  const P = Nr("btn", {
    [`btn-${s}`]: !0,
    "btn-md": j === "small",
    "btn-sm": j === "xsmall",
    "btn-block": i,
    disabled: d
  });
  let M = g;
  return h && g === "button" && (M = "a"), /* @__PURE__ */ z.jsx(
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
          className: Nr(B) || P,
          href: h,
          ref: x,
          onClick: k,
          "aria-label": n,
          target: M === "a" ? C : null,
          children: [
            f && /* @__PURE__ */ z.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
$i.propTypes = {
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
  gaData: Ua,
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
var Bi = { exports: {} }, Ie = {}, Lo;
function Dl() {
  if (Lo) return Ie;
  Lo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), B = Symbol.for("react.client.reference");
  function C(w) {
    if (typeof w == "object" && w !== null) {
      var P = w.$$typeof;
      switch (P) {
        case e:
          switch (w = w.type, w) {
            case r:
            case i:
            case n:
            case h:
            case f:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case d:
                case g:
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
  return Ie.ContextConsumer = s, Ie.ContextProvider = d, Ie.Element = e, Ie.ForwardRef = g, Ie.Fragment = r, Ie.Lazy = k, Ie.Memo = x, Ie.Portal = t, Ie.Profiler = i, Ie.StrictMode = n, Ie.Suspense = h, Ie.SuspenseList = f, Ie.isContextConsumer = function(w) {
    return C(w) === s;
  }, Ie.isContextProvider = function(w) {
    return C(w) === d;
  }, Ie.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Ie.isForwardRef = function(w) {
    return C(w) === g;
  }, Ie.isFragment = function(w) {
    return C(w) === r;
  }, Ie.isLazy = function(w) {
    return C(w) === k;
  }, Ie.isMemo = function(w) {
    return C(w) === x;
  }, Ie.isPortal = function(w) {
    return C(w) === t;
  }, Ie.isProfiler = function(w) {
    return C(w) === i;
  }, Ie.isStrictMode = function(w) {
    return C(w) === n;
  }, Ie.isSuspense = function(w) {
    return C(w) === h;
  }, Ie.isSuspenseList = function(w) {
    return C(w) === f;
  }, Ie.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === i || w === n || w === h || w === f || w === j || typeof w == "object" && w !== null && (w.$$typeof === k || w.$$typeof === x || w.$$typeof === d || w.$$typeof === s || w.$$typeof === g || w.$$typeof === B || w.getModuleId !== void 0);
  }, Ie.typeOf = C, Ie;
}
Bi.exports = Dl();
var Wi = Bi.exports;
function zl(e) {
  function t(F, N, I, $, b) {
    for (var te = 0, T = 0, re = 0, Q = 0, J, H, ne = 0, se = 0, Z, pe = Z = J = 0, ee = 0, ue = 0, Ue = 0, de = 0, et = I.length, He = et - 1, he, U = "", ae = "", Ke = "", st = "", Le; ee < et; ) {
      if (H = I.charCodeAt(ee), ee === He && T + Q + re + te !== 0 && (T !== 0 && (H = T === 47 ? 10 : 47), Q = re = te = 0, et++, He++), T + Q + re + te === 0) {
        if (ee === He && (0 < ue && (U = U.replace(j, "")), 0 < U.trim().length)) {
          switch (H) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              U += I.charAt(ee);
          }
          H = 59;
        }
        switch (H) {
          case 123:
            for (U = U.trim(), J = U.charCodeAt(0), Z = 1, de = ++ee; ee < et; ) {
              switch (H = I.charCodeAt(ee)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (H = I.charCodeAt(ee + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (pe = ee + 1; pe < He; ++pe)
                          switch (I.charCodeAt(pe)) {
                            case 47:
                              if (H === 42 && I.charCodeAt(pe - 1) === 42 && ee + 2 !== pe) {
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
                  for (; ee++ < He && I.charCodeAt(ee) !== H; )
                    ;
              }
              if (Z === 0) break;
              ee++;
            }
            switch (Z = I.substring(de, ee), J === 0 && (J = (U = U.replace(k, "").trim()).charCodeAt(0)), J) {
              case 64:
                switch (0 < ue && (U = U.replace(j, "")), H = U.charCodeAt(1), H) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ue = N;
                    break;
                  default:
                    ue = Je;
                }
                if (Z = t(N, ue, Z, H, b + 1), de = Z.length, 0 < xe && (ue = r(Je, U, Ue), Le = g(3, Z, ue, N, Re, fe, de, H, b, $), U = ue.join(""), Le !== void 0 && (de = (Z = Le.trim()).length) === 0 && (H = 0, Z = "")), 0 < de) switch (H) {
                  case 115:
                    U = U.replace(le, d);
                  case 100:
                  case 109:
                  case 45:
                    Z = U + "{" + Z + "}";
                    break;
                  case 107:
                    U = U.replace(W, "$1 $2"), Z = U + "{" + Z + "}", Z = ke === 1 || ke === 2 && s("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                    break;
                  default:
                    Z = U + Z, $ === 112 && (Z = (ae += Z, ""));
                }
                else Z = "";
                break;
              default:
                Z = t(N, r(N, U, Ue), Z, $, b + 1);
            }
            Ke += Z, Z = Ue = ue = pe = J = 0, U = "", H = I.charCodeAt(++ee);
            break;
          case 125:
          case 59:
            if (U = (0 < ue ? U.replace(j, "") : U).trim(), 1 < (de = U.length)) switch (pe === 0 && (J = U.charCodeAt(0), J === 45 || 96 < J && 123 > J) && (de = (U = U.replace(" ", ":")).length), 0 < xe && (Le = g(1, U, N, F, Re, fe, ae.length, $, b, $)) !== void 0 && (de = (U = Le.trim()).length) === 0 && (U = "\0\0"), J = U.charCodeAt(0), H = U.charCodeAt(1), J) {
              case 0:
                break;
              case 64:
                if (H === 105 || H === 99) {
                  st += U + I.charAt(ee);
                  break;
                }
              default:
                U.charCodeAt(de - 1) !== 58 && (ae += i(U, J, H, U.charCodeAt(2)));
            }
            Ue = ue = pe = J = 0, U = "", H = I.charCodeAt(++ee);
        }
      }
      switch (H) {
        case 13:
        case 10:
          T === 47 ? T = 0 : 1 + J === 0 && $ !== 107 && 0 < U.length && (ue = 1, U += "\0"), 0 < xe * Ye && g(0, U, N, F, Re, fe, ae.length, $, b, $), fe = 1, Re++;
          break;
        case 59:
        case 125:
          if (T + Q + re + te === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, he = I.charAt(ee), H) {
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
              Q + T + te === 0 && (ue = Ue = 1, he = "\f" + he);
              break;
            case 108:
              if (Q + T + te + Ae === 0 && 0 < pe) switch (ee - pe) {
                case 2:
                  ne === 112 && I.charCodeAt(ee - 3) === 58 && (Ae = ne);
                case 8:
                  se === 111 && (Ae = se);
              }
              break;
            case 58:
              Q + T + te === 0 && (pe = ee);
              break;
            case 44:
              T + re + Q + te === 0 && (ue = 1, he += "\r");
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
              T + re + Q + te + pe + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + te + re)) switch (T) {
                case 0:
                  switch (2 * H + 3 * I.charCodeAt(ee + 1)) {
                    case 235:
                      T = 47;
                      break;
                    case 220:
                      de = ee, T = 42;
                  }
                  break;
                case 42:
                  H === 47 && ne === 42 && de + 2 !== ee && (I.charCodeAt(de + 2) === 33 && (ae += I.substring(de, ee + 1)), he = "", T = 0);
              }
          }
          T === 0 && (U += he);
      }
      se = ne, ne = H, ee++;
    }
    if (de = ae.length, 0 < de) {
      if (ue = N, 0 < xe && (Le = g(2, ae, ue, F, Re, fe, de, $, b, $), Le !== void 0 && (ae = Le).length === 0)) return st + ae + Ke;
      if (ae = ue.join(",") + "{" + ae + "}", ke * Ae !== 0) {
        switch (ke !== 2 || s(ae, 2) || (Ae = 0), Ae) {
          case 111:
            ae = ae.replace(G, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(V, "::-webkit-input-$1") + ae.replace(V, "::-moz-$1") + ae.replace(V, ":-ms-input-$1") + ae;
        }
        Ae = 0;
      }
    }
    return st + ae + Ke;
  }
  function r(F, N, I) {
    var $ = N.trim().split(P);
    N = $;
    var b = $.length, te = F.length;
    switch (te) {
      case 0:
      case 1:
        var T = 0;
        for (F = te === 0 ? "" : F[0] + " "; T < b; ++T)
          N[T] = n(F, N[T], I).trim();
        break;
      default:
        var re = T = 0;
        for (N = []; T < b; ++T)
          for (var Q = 0; Q < te; ++Q)
            N[re++] = n(F[Q] + " ", $[T], I).trim();
    }
    return N;
  }
  function n(F, N, I) {
    var $ = N.charCodeAt(0);
    switch (33 > $ && ($ = (N = N.trim()).charCodeAt(0)), $) {
      case 38:
        return N.replace(M, "$1" + F.trim());
      case 58:
        return F.trim() + N.replace(M, "$1" + F.trim());
      default:
        if (0 < 1 * I && 0 < N.indexOf("\f")) return N.replace(M, (F.charCodeAt(0) === 58 ? "" : "$1") + F.trim());
    }
    return F + N;
  }
  function i(F, N, I, $) {
    var b = F + ";", te = 2 * N + 3 * I + 4 * $;
    if (te === 944) {
      F = b.indexOf(":", 9) + 1;
      var T = b.substring(F, b.length - 1).trim();
      return T = b.substring(0, F).trim() + T + ";", ke === 1 || ke === 2 && s(T, 1) ? "-webkit-" + T + T : T;
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
        return C.test(b) ? b.replace(B, ":-webkit-") + b.replace(B, ":-moz-") + b : b;
      case 1e3:
        switch (T = b.substring(13).trim(), N = T.indexOf("-") + 1, T.charCodeAt(0) + T.charCodeAt(N)) {
          case 226:
            T = b.replace(_, "tb");
            break;
          case 232:
            T = b.replace(_, "tb-rl");
            break;
          case 220:
            T = b.replace(_, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + T + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (N = (b = F).length - 10, T = (b.charCodeAt(N) === 33 ? b.substring(0, N) : b).substring(F.indexOf(":", 7) + 1).trim(), te = T.charCodeAt(0) + (T.charCodeAt(7) | 0)) {
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
        if ($e.test(F) === !0) return (T = F.substring(F.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(F.replace("stretch", "fill-available"), N, I, $).replace(":fill-available", ":stretch") : b.replace(T, "-webkit-" + T) + b.replace(T, "-moz-" + T.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, I + $ === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10)) return b.substring(0, b.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(F, N) {
    var I = F.indexOf(N === 1 ? ":" : "{"), $ = F.substring(0, N !== 3 ? I : 10);
    return I = F.substring(I + 1, F.length - 1), Me(N !== 2 ? $ : $.replace(Ne, "$1"), I, N);
  }
  function d(F, N) {
    var I = i(N, N.charCodeAt(0), N.charCodeAt(1), N.charCodeAt(2));
    return I !== N + ";" ? I.replace(ye, " or ($1)").substring(4) : "(" + N + ")";
  }
  function g(F, N, I, $, b, te, T, re, Q, J) {
    for (var H = 0, ne = N, se; H < xe; ++H)
      switch (se = Pe[H].call(x, F, ne, I, $, b, te, T, re, Q, J)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = se;
      }
    if (ne !== N) return ne;
  }
  function h(F) {
    switch (F) {
      case void 0:
      case null:
        xe = Pe.length = 0;
        break;
      default:
        if (typeof F == "function") Pe[xe++] = F;
        else if (typeof F == "object") for (var N = 0, I = F.length; N < I; ++N)
          h(F[N]);
        else Ye = !!F | 0;
    }
    return h;
  }
  function f(F) {
    return F = F.prefix, F !== void 0 && (Me = null, F ? typeof F != "function" ? ke = 1 : (ke = 2, Me = F) : ke = 0), f;
  }
  function x(F, N) {
    var I = F;
    if (33 > I.charCodeAt(0) && (I = I.trim()), ve = I, I = [ve], 0 < xe) {
      var $ = g(-1, N, I, I, Re, fe, 0, 0, 0, 0);
      $ !== void 0 && typeof $ == "string" && (N = $);
    }
    var b = t(Je, I, N, 0, 0);
    return 0 < xe && ($ = g(-2, b, I, I, Re, fe, b.length, 0, 0, 0), $ !== void 0 && (b = $)), ve = "", Ae = 0, fe = Re = 1, b;
  }
  var k = /^\0+/g, j = /[\0\r\f]/g, B = /: */g, C = /zoo|gra/, w = /([,: ])(transform)/g, P = /,\r+?/g, M = /([\t\r\n ])*\f?&/g, W = /@(k\w+)\s*(\S*)\s*/, V = /::(place)/g, G = /:(read-only)/g, _ = /[svh]\w+-[tblr]{2}/, le = /\(\s*(.*)\s*\)/g, ye = /([\s\S]*?);/g, Te = /-self|flex-/g, Ne = /[^]*?(:[rp][el]a[\w-]+)[^]*/, $e = /stretch|:\s*\w+\-(?:conte|avail)/, Se = /([^-])(image-set\()/, fe = 1, Re = 1, Ae = 0, ke = 1, Je = [], Pe = [], xe = 0, Me = null, Ye = 0, ve = "";
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
var Wl = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Mo = /* @__PURE__ */ Bl(
  function(e) {
    return Wl.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ui = { exports: {} }, Ee = {}, Do;
function Ul() {
  if (Do) return Ee;
  Do = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, g = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, k = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, B = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, W = e ? Symbol.for("react.scope") : 60119;
  function V(_) {
    if (typeof _ == "object" && _ !== null) {
      var le = _.$$typeof;
      switch (le) {
        case t:
          switch (_ = _.type, _) {
            case h:
            case f:
            case n:
            case s:
            case i:
            case k:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case g:
                case x:
                case C:
                case B:
                case d:
                  return _;
                default:
                  return le;
              }
          }
        case r:
          return le;
      }
    }
  }
  function G(_) {
    return V(_) === f;
  }
  return Ee.AsyncMode = h, Ee.ConcurrentMode = f, Ee.ContextConsumer = g, Ee.ContextProvider = d, Ee.Element = t, Ee.ForwardRef = x, Ee.Fragment = n, Ee.Lazy = C, Ee.Memo = B, Ee.Portal = r, Ee.Profiler = s, Ee.StrictMode = i, Ee.Suspense = k, Ee.isAsyncMode = function(_) {
    return G(_) || V(_) === h;
  }, Ee.isConcurrentMode = G, Ee.isContextConsumer = function(_) {
    return V(_) === g;
  }, Ee.isContextProvider = function(_) {
    return V(_) === d;
  }, Ee.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, Ee.isForwardRef = function(_) {
    return V(_) === x;
  }, Ee.isFragment = function(_) {
    return V(_) === n;
  }, Ee.isLazy = function(_) {
    return V(_) === C;
  }, Ee.isMemo = function(_) {
    return V(_) === B;
  }, Ee.isPortal = function(_) {
    return V(_) === r;
  }, Ee.isProfiler = function(_) {
    return V(_) === s;
  }, Ee.isStrictMode = function(_) {
    return V(_) === i;
  }, Ee.isSuspense = function(_) {
    return V(_) === k;
  }, Ee.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === n || _ === f || _ === s || _ === i || _ === k || _ === j || typeof _ == "object" && _ !== null && (_.$$typeof === C || _.$$typeof === B || _.$$typeof === d || _.$$typeof === g || _.$$typeof === x || _.$$typeof === P || _.$$typeof === M || _.$$typeof === W || _.$$typeof === w);
  }, Ee.typeOf = V, Ee;
}
Ui.exports = Ul();
var Hl = Ui.exports, Ha = Hl, Vl = {
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
}, Hi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Va = {};
Va[Ha.ForwardRef] = Gl;
Va[Ha.Memo] = Hi;
function zo(e) {
  return Ha.isMemo(e) ? Hi : Va[e.$$typeof] || Vl;
}
var Yl = Object.defineProperty, Xl = Object.getOwnPropertyNames, $o = Object.getOwnPropertySymbols, Kl = Object.getOwnPropertyDescriptor, Ql = Object.getPrototypeOf, Bo = Object.prototype;
function Vi(e, t, r) {
  if (typeof t != "string") {
    if (Bo) {
      var n = Ql(t);
      n && n !== Bo && Vi(e, n, r);
    }
    var i = Xl(t);
    $o && (i = i.concat($o(t)));
    for (var s = zo(e), d = zo(t), g = 0; g < i.length; ++g) {
      var h = i[g];
      if (!ql[h] && !(r && r[h]) && !(d && d[h]) && !(s && s[h])) {
        var f = Kl(t, h);
        try {
          Yl(e, h, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var Zl = Vi;
const Jl = /* @__PURE__ */ Wa(Zl);
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
var Wo = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Ta = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Wi.typeOf(e);
}, Wn = Object.freeze([]), er = Object.freeze({});
function on(e) {
  return typeof e == "function";
}
function Uo(e) {
  return e.displayName || e.name || "Component";
}
function qa(e) {
  return e && typeof e.styledComponentId == "string";
}
var Pr = typeof at < "u" && at.env !== void 0 && (at.env.REACT_APP_SC_ATTR || at.env.SC_ATTR) || "data-styled", Ga = typeof window < "u" && "HTMLElement" in window, eu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof at < "u" && at.env !== void 0 && (at.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && at.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? at.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && at.env.REACT_APP_SC_DISABLE_SPEEDY : at.env.SC_DISABLE_SPEEDY !== void 0 && at.env.SC_DISABLE_SPEEDY !== "" ? at.env.SC_DISABLE_SPEEDY !== "false" && at.env.SC_DISABLE_SPEEDY : at.env.NODE_ENV !== "production"));
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
    for (var n = 0, i = 0; i < r; i++) n += this.groupSizes[i];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, s = i.length, d = s; r >= d; ) (d <<= 1) < 0 && cn(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(i), this.length = d;
      for (var g = s; g < d; g++) this.groupSizes[g] = 0;
    }
    for (var h = this.indexOfGroup(r + 1), f = 0, x = n.length; f < x; f++) this.tag.insertRule(h, n[f]) && (this.groupSizes[r]++, h++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), s = i + n;
      this.groupSizes[r] = 0;
      for (var d = i; d < s; d++) this.tag.deleteRule(i);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var i = this.groupSizes[r], s = this.indexOfGroup(r), d = s + i, g = s; g < d; g++) n += this.tag.getRule(g) + `/*!sc*/
`;
    return n;
  }, e;
}(), Dn = /* @__PURE__ */ new Map(), Un = /* @__PURE__ */ new Map(), rn = 1, Nn = function(e) {
  if (Dn.has(e)) return Dn.get(e);
  for (; Un.has(rn); ) rn++;
  var t = rn++;
  return Dn.set(e, t), Un.set(t, e), t;
}, ru = function(e) {
  return Un.get(e);
}, nu = function(e, t) {
  t >= rn && (rn = t + 1), Dn.set(e, t), Un.set(t, e);
}, au = "style[" + Pr + '][data-styled-version="5.3.11"]', ou = new RegExp("^" + Pr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), iu = function(e, t, r) {
  for (var n, i = r.split(","), s = 0, d = i.length; s < d; s++) (n = i[s]) && e.registerName(t, n);
}, su = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, s = r.length; i < s; i++) {
    var d = r[i].trim();
    if (d) {
      var g = d.match(ou);
      if (g) {
        var h = 0 | parseInt(g[1], 10), f = g[2];
        h !== 0 && (nu(f, h), iu(e, f, g[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, lu = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, qi = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(g) {
    for (var h = g.childNodes, f = h.length; f >= 0; f--) {
      var x = h[f];
      if (x && x.nodeType === 1 && x.hasAttribute(Pr)) return x;
    }
  }(r), s = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Pr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = lu();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, uu = function() {
  function e(r) {
    var n = this.element = qi(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet) return i.sheet;
      for (var s = document.styleSheets, d = 0, g = s.length; d < g; d++) {
        var h = s[d];
        if (h.ownerNode === i) return h;
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
    var n = this.element = qi(r);
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
}(), Ho = Ga, fu = { isServer: !Ga, useCSSOMInjection: !eu }, Gi = function() {
  function e(r, n, i) {
    r === void 0 && (r = er), n === void 0 && (n = {}), this.options = Mt({}, fu, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && Ga && Ho && (Ho = !1, function(s) {
      for (var d = document.querySelectorAll(au), g = 0, h = d.length; g < h; g++) {
        var f = d[g];
        f && f.getAttribute(Pr) !== "active" && (su(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Nn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Mt({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = i ? new du(d) : s ? new uu(d) : new cu(d), new tu(r)));
    var r, n, i, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Nn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(Nn(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Nn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, s = "", d = 0; d < i; d++) {
        var g = ru(d);
        if (g !== void 0) {
          var h = r.names.get(g), f = n.getGroup(d);
          if (h && f && h.size) {
            var x = Pr + ".g" + d + '[id="' + g + '"]', k = "";
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
}(), pu = /(a)(d)/gi, Vo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ra(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Vo(t % 52) + r;
  return (Vo(t % 52) + r).replace(pu, "$1-$2");
}
var Er = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Yi = function(e) {
  return Er(5381, e);
};
function hu(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (on(r) && !qa(r)) return !1;
  }
  return !0;
}
var mu = Yi("5.3.11"), gu = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && hu(t), this.componentId = r, this.baseHash = Er(mu, r), this.baseStyle = n, Gi.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = jr(this.rules, t, r, n).join(""), g = Ra(Er(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(i, g)) {
        var h = n(d, "." + g, void 0, i);
        r.insertRules(i, g, h);
      }
      s.push(g), this.staticRulesId = g;
    }
    else {
      for (var f = this.rules.length, x = Er(this.baseHash, n.hash), k = "", j = 0; j < f; j++) {
        var B = this.rules[j];
        if (typeof B == "string") k += B;
        else if (B) {
          var C = jr(B, t, r, n), w = Array.isArray(C) ? C.join("") : C;
          x = Er(x, w + j), k += w;
        }
      }
      if (k) {
        var P = Ra(x >>> 0);
        if (!r.hasNameForId(i, P)) {
          var M = n(k, "." + P, void 0, i);
          r.insertRules(i, P, M);
        }
        s.push(P);
      }
    }
    return s.join(" ");
  }, e;
}(), bu = /^\s*\/\/.*$/gm, yu = [":", "[", ".", "#"];
function vu(e) {
  var t, r, n, i, s = er, d = s.options, g = d === void 0 ? er : d, h = s.plugins, f = h === void 0 ? Wn : h, x = new zl(g), k = [], j = /* @__PURE__ */ function(w) {
    function P(M) {
      if (M) try {
        w(M + "}");
      } catch {
      }
    }
    return function(M, W, V, G, _, le, ye, Te, Ne, $e) {
      switch (M) {
        case 1:
          if (Ne === 0 && W.charCodeAt(0) === 64) return w(W + ";"), "";
          break;
        case 2:
          if (Te === 0) return W + "/*|*/";
          break;
        case 3:
          switch (Te) {
            case 102:
            case 112:
              return w(V[0] + W), "";
            default:
              return W + ($e === 0 ? "/*|*/" : "");
          }
        case -2:
          W.split("/*|*/}").forEach(P);
      }
    };
  }(function(w) {
    k.push(w);
  }), B = function(w, P, M) {
    return P === 0 && yu.indexOf(M[r.length]) !== -1 || M.match(i) ? w : "." + t;
  };
  function C(w, P, M, W) {
    W === void 0 && (W = "&");
    var V = w.replace(bu, ""), G = P && M ? M + " " + P + " { " + V + " }" : V;
    return t = W, r = P, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), x(M || !P ? "" : P, G);
  }
  return x.use([].concat(f, [function(w, P, M) {
    w === 2 && M.length && M[0].lastIndexOf(r) > 0 && (M[0] = M[0].replace(n, B));
  }, j, function(w) {
    if (w === -2) {
      var P = k;
      return k = [], P;
    }
  }])), C.hash = f.length ? f.reduce(function(w, P) {
    return P.name || cn(15), Er(w, P.name);
  }, 5381).toString() : "", C;
}
var Xi = Ze.createContext();
Xi.Consumer;
var Ki = Ze.createContext(), wu = (Ki.Consumer, new Gi()), Aa = vu();
function ku() {
  return $t(Xi) || wu;
}
function Su() {
  return $t(Ki) || Aa;
}
var xu = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, s) {
      s === void 0 && (s = Aa);
      var d = n.name + s.hash;
      i.hasNameForId(n.id, d) || i.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return cn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Aa), this.name + t.hash;
  }, e;
}(), _u = /([A-Z])/, Cu = /([A-Z])/g, Tu = /^ms-/, Ru = function(e) {
  return "-" + e.toLowerCase();
};
function qo(e) {
  return _u.test(e) ? e.replace(Cu, Ru).replace(Tu, "-ms-") : e;
}
var Go = function(e) {
  return e == null || e === !1 || e === "";
};
function jr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, s = [], d = 0, g = e.length; d < g; d += 1) (i = jr(e[d], t, r, n)) !== "" && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    return s;
  }
  if (Go(e)) return "";
  if (qa(e)) return "." + e.styledComponentId;
  if (on(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return jr(h, t, r, n);
  }
  var f;
  return e instanceof xu ? r ? (e.inject(r, n), e.getName(n)) : e : Ta(e) ? function x(k, j) {
    var B, C, w = [];
    for (var P in k) k.hasOwnProperty(P) && !Go(k[P]) && (Array.isArray(k[P]) && k[P].isCss || on(k[P]) ? w.push(qo(P) + ":", k[P], ";") : Ta(k[P]) ? w.push.apply(w, x(k[P], P)) : w.push(qo(P) + ": " + (B = P, (C = k[P]) == null || typeof C == "boolean" || C === "" ? "" : typeof C != "number" || C === 0 || B in $l || B.startsWith("--") ? String(C).trim() : C + "px") + ";"));
    return j ? [j + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var Yo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Au(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return on(e) || Ta(e) ? Yo(jr(Wo(Wn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Yo(jr(Wo(e, r)));
}
var Eu = function(e, t, r) {
  return r === void 0 && (r = er), e.theme !== r.theme && e.theme || t || r.theme;
}, Ou = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Nu = /(^-|-$)/g;
function ya(e) {
  return e.replace(Ou, "-").replace(Nu, "");
}
var Pu = function(e) {
  return Ra(Yi(e) >>> 0);
};
function Pn(e) {
  return typeof e == "string" && at.env.NODE_ENV === "production";
}
var Ea = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ju = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Iu(e, t, r) {
  var n = e[r];
  Ea(t) && Ea(n) ? Qi(n, t) : e[r] = t;
}
function Qi(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var i = 0, s = r; i < s.length; i++) {
    var d = s[i];
    if (Ea(d)) for (var g in d) ju(g) && Iu(e, d[g], g);
  }
  return e;
}
var Zi = Ze.createContext();
Zi.Consumer;
var va = {};
function Ji(e, t, r) {
  var n = qa(e), i = !Pn(e), s = t.attrs, d = s === void 0 ? Wn : s, g = t.componentId, h = g === void 0 ? function(W, V) {
    var G = typeof W != "string" ? "sc" : ya(W);
    va[G] = (va[G] || 0) + 1;
    var _ = G + "-" + Pu("5.3.11" + G + va[G]);
    return V ? V + "-" + _ : _;
  }(t.displayName, t.parentComponentId) : g, f = t.displayName, x = f === void 0 ? function(W) {
    return Pn(W) ? "styled." + W : "Styled(" + Uo(W) + ")";
  }(e) : f, k = t.displayName && t.componentId ? ya(t.displayName) + "-" + t.componentId : t.componentId || h, j = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, B = t.shouldForwardProp;
  n && e.shouldForwardProp && (B = t.shouldForwardProp ? function(W, V, G) {
    return e.shouldForwardProp(W, V, G) && t.shouldForwardProp(W, V, G);
  } : e.shouldForwardProp);
  var C, w = new gu(r, k, n ? e.componentStyle : void 0), P = w.isStatic && d.length === 0, M = function(W, V) {
    return function(G, _, le, ye) {
      var Te = G.attrs, Ne = G.componentStyle, $e = G.defaultProps, Se = G.foldedComponentIds, fe = G.shouldForwardProp, Re = G.styledComponentId, Ae = G.target, ke = function($, b, te) {
        $ === void 0 && ($ = er);
        var T = Mt({}, b, { theme: $ }), re = {};
        return te.forEach(function(Q) {
          var J, H, ne, se = Q;
          for (J in on(se) && (se = se(T)), se) T[J] = re[J] = J === "className" ? (H = re[J], ne = se[J], H && ne ? H + " " + ne : H || ne) : se[J];
        }), [T, re];
      }(Eu(_, $t(Zi), $e) || er, _, Te), Je = ke[0], Pe = ke[1], xe = function($, b, te, T) {
        var re = ku(), Q = Su(), J = b ? $.generateAndInjectStyles(er, re, Q) : $.generateAndInjectStyles(te, re, Q);
        return J;
      }(Ne, ye, Je), Me = le, Ye = Pe.$as || _.$as || Pe.as || _.as || Ae, ve = Pn(Ye), F = Pe !== _ ? Mt({}, _, {}, Pe) : _, N = {};
      for (var I in F) I[0] !== "$" && I !== "as" && (I === "forwardedAs" ? N.as = F[I] : (fe ? fe(I, Mo, Ye) : !ve || Mo(I)) && (N[I] = F[I]));
      return _.style && Pe.style !== _.style && (N.style = Mt({}, _.style, {}, Pe.style)), N.className = Array.prototype.concat(Se, Re, xe !== Re ? xe : null, _.className, Pe.className).filter(Boolean).join(" "), N.ref = Me, Ci(Ye, N);
    }(C, W, V, P);
  };
  return M.displayName = x, (C = Ze.forwardRef(M)).attrs = j, C.componentStyle = w, C.displayName = x, C.shouldForwardProp = B, C.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Wn, C.styledComponentId = k, C.target = n ? e.target : e, C.withComponent = function(W) {
    var V = t.componentId, G = function(le, ye) {
      if (le == null) return {};
      var Te, Ne, $e = {}, Se = Object.keys(le);
      for (Ne = 0; Ne < Se.length; Ne++) Te = Se[Ne], ye.indexOf(Te) >= 0 || ($e[Te] = le[Te]);
      return $e;
    }(t, ["componentId"]), _ = V && V + "-" + (Pn(W) ? W : ya(Uo(W)));
    return Ji(W, Mt({}, G, { attrs: j, componentId: _ }), r);
  }, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(W) {
    this._foldedDefaultProps = n ? Qi({}, e.defaultProps, W) : W;
  } }), Object.defineProperty(C, "toString", { value: function() {
    return "." + C.styledComponentId;
  } }), i && Jl(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), C;
}
var Tt = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = er), !Wi.isValidElementType(n)) return cn(1, String(n));
    var s = function() {
      return r(n, i, Au.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, Mt({}, i, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, Mt({}, i, { attrs: Array.prototype.concat(i.attrs, d).filter(Boolean) }));
    }, s;
  }(Ji, e);
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
function Xn(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], i = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(i)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Fu = /* @__PURE__ */ function() {
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
}(), br = function() {
  return br = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, br.apply(this, arguments);
}, Lu = function(e, t, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(d) {
      d(s);
    });
  }
  return new (r || (r = Promise))(function(s, d) {
    function g(x) {
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
      x.done ? s(x.value) : i(x.value).then(g, h);
    }
    f((n = n.apply(e, [])).next());
  });
}, Mu = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, d;
  return d = { next: g(0), throw: g(1), return: g(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function g(f) {
    return function(x) {
      return h([f, x]);
    };
  }
  function h(f) {
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
    } catch (x) {
      f = [6, x], i = 0;
    } finally {
      n = s = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, es = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
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
  var n = t.height, i = t.width, s = es(t, ["height", "width"]), d = br({ height: n, width: i, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), g = window.open(e, "", Object.keys(d).map(function(f) {
    return "".concat(f, "=").concat(d[f]);
  }).join(", "));
  if (r)
    var h = window.setInterval(function() {
      try {
        (g === null || g.closed) && (window.clearInterval(h), r(g));
      } catch (f) {
        console.error(f);
      }
    }, 1e3);
  return g;
}
var Wu = (
  /** @class */
  function(e) {
    Fu(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var i = r.props, s = i.onShareWindowClose, d = i.windowHeight, g = d === void 0 ? 400 : d, h = i.windowPosition, f = h === void 0 ? "windowCenter" : h, x = i.windowWidth, k = x === void 0 ? 550 : x, j = br({ height: g, width: k }, f === "windowCenter" ? zu(k, g) : $u(k, g));
        Bu(n, j, s);
      }, r.handleClick = function(n) {
        return Lu(r, void 0, void 0, function() {
          var i, s, d, g, h, f, x, k, j, B;
          return Mu(this, function(C) {
            switch (C.label) {
              case 0:
                return i = this.props, s = i.beforeOnClick, d = i.disabled, g = i.networkLink, h = i.onClick, f = i.url, x = i.openShareDialogOnClick, k = i.opts, j = g(f, k), d ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? (B = s(), Du(B) ? [4, B] : [3, 2]) : [3, 2]);
              case 1:
                C.sent(), C.label = 2;
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
      var n = r.children, i = r.className, s = r.disabled, d = r.disabledStyle, g = r.forwardedRef;
      r.networkLink;
      var h = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var f = r.resetButtonStyle, x = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var k = es(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), j = Nr("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, i), B = br(br(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, x), s && d);
      return Ze.createElement("button", br({}, k, { "aria-label": k["aria-label"] || h, className: j, onClick: this.handleClick, ref: g, style: B }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(Qs)
), Hn = function() {
  return Hn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Hn.apply(this, arguments);
};
function Kn(e, t, r, n) {
  function i(s, d) {
    var g = r(s), h = Hn({}, s), f = Object.keys(g);
    return f.forEach(function(x) {
      delete h[x];
    }), Ze.createElement(Wu, Hn({}, n, h, { forwardedRef: d, networkName: e, networkLink: t, opts: r(s) }));
  }
  return i.displayName = "ShareButton-".concat(e), _i(i);
}
function Uu(e, t) {
  var r = t.subject, n = t.body, i = t.separator;
  return "mailto:" + Xn({ subject: r, body: n ? n + i + e : e });
}
Kn("email", Uu, function(e) {
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
  return nn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Xn({
    u: e,
    quote: r,
    hashtag: n
  });
}
Kn("facebook", qu, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Gu(e, t) {
  var r = t.title, n = t.summary, i = t.source;
  return nn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Xn({ url: e, mini: "true", title: r, summary: n, source: i });
}
Kn("linkedin", Gu, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Yu(e, t) {
  var r = t.title, n = t.via, i = t.hashtags, s = i === void 0 ? [] : i, d = t.related, g = d === void 0 ? [] : d;
  return nn(e, "twitter.url"), nn(Array.isArray(s), "twitter.hashtags is not an array"), nn(Array.isArray(g), "twitter.related is not an array"), "https://twitter.com/share" + Xn({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: g.length > 0 ? g.join(",") : void 0
  });
}
Kn("twitter", Yu, function(e) {
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
function Oa(e) {
  "@babel/helpers - typeof";
  return Oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oa(e);
}
var Xu = (typeof window > "u" ? "undefined" : Oa(window)) === "object" && window.Element || function() {
};
function Ku(e, t, r) {
  if (!(e[t] instanceof Xu))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, Ku, l.shape({
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
}, ts = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  color: i = "gray",
  disabled: s,
  element: d = "button",
  innerRef: g,
  href: h,
  onClick: f,
  ...x
}) => {
  const k = Nr("btn", "btn-tag", {
    "btn-tag-alt-white": i === "white",
    "btn-tag-alt-gray": i === "gray",
    "btn-tag-alt-dark": i === "dark",
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
          ref: g,
          onClick: f,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
ts.propTypes = {
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
  gaData: Ua,
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
const rs = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: i = "async",
  dataTestId: s,
  fetchPriority: d = "auto",
  width: g,
  height: h,
  cardLink: f,
  title: x,
  caption: k,
  captionTitle: j,
  border: B,
  dropShadow: C
}) => {
  const w = {
    src: e,
    alt: t,
    loading: n,
    decoding: i,
    fetchpriority: d,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: cl(r) },
    ...s && { "data-testid": s },
    ...g && { width: g },
    ...h && { height: h }
  }, P = Nr("uds-img", {
    borderless: !B,
    "uds-img-drop-shadow": C
  }), M = (V) => {
    const G = V ? `${w.className} ${V}` : w.className;
    return f ? /* @__PURE__ */ z.jsxs("a", { href: f, children: [
      /* @__PURE__ */ z.jsx("img", { ...w, className: G }),
      /* @__PURE__ */ z.jsx("span", { className: "visually-hidden", children: x })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ z.jsx("img", { ...w, className: G })
    );
  }, W = () => /* @__PURE__ */ z.jsx("div", { className: P, children: /* @__PURE__ */ z.jsxs("figure", { className: "figure uds-figure", children: [
    M(),
    k && /* @__PURE__ */ z.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      j && /* @__PURE__ */ z.jsx("h3", { children: j }),
      /* @__PURE__ */ z.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ar(k)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ z.jsx(z.Fragment, { children: k ? W() : M(P) });
};
rs.propTypes = {
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
`, Ju = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), ec = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Ju(e) ? `mailto:${e}` : e, tc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Lt = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n,
  imageAltText: i,
  title: s,
  icon: d,
  body: g,
  eventFormat: h = "stack",
  eventLocation: f,
  eventTime: x,
  buttons: k,
  linkLabel: j,
  linkUrl: B,
  tags: C,
  showBorders: w = !0,
  cardLink: P
}) => /* @__PURE__ */ z.jsx(
  ns,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: i,
    title: s,
    icon: d,
    body: g,
    eventFormat: h,
    eventLocation: f,
    eventTime: x,
    buttons: k,
    linkLabel: j,
    linkUrl: B,
    tags: C,
    showBorders: w,
    cardLink: P
  }
);
Lt.propTypes = {
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
const ns = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n = "",
  imageAltText: i = "",
  title: s,
  icon: d = void 0,
  body: g = "",
  eventFormat: h = "stack",
  eventLocation: f = "",
  eventTime: x = "",
  buttons: k = void 0,
  linkLabel: j = void 0,
  linkUrl: B = void 0,
  tags: C = void 0,
  showBorders: w = !0,
  cardLink: P
}) => {
  const M = Nr("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !w
  });
  return /* @__PURE__ */ z.jsx(z.Fragment, { children: /* @__PURE__ */ z.jsxs(Zu, { className: M, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ z.jsx(
      rs,
      {
        src: n,
        alt: i,
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
      Na,
      {
        type: e,
        body: g,
        eventFormat: h,
        eventLocation: f,
        eventTime: x,
        title: s,
        buttons: k,
        linkLabel: j,
        linkUrl: B,
        tags: C,
        cardLink: P
      }
    ) }) : /* @__PURE__ */ z.jsx(
      Na,
      {
        type: e,
        body: g,
        eventFormat: h,
        eventLocation: f,
        eventTime: x,
        title: s,
        buttons: k,
        linkLabel: j,
        linkUrl: B,
        tags: C,
        cardLink: P
      }
    )
  ] }) });
};
ns.propTypes = {
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
const Na = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: n = "",
  eventTime: i = "",
  title: s,
  buttons: d = void 0,
  linkLabel: g = void 0,
  linkUrl: h = void 0,
  tags: f = void 0,
  cardLink: x
}) => /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
  !!s && /* @__PURE__ */ z.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ z.jsx("h3", { className: "card-title", children: x ? /* @__PURE__ */ z.jsx("a", { href: x, children: s }) : s }) }),
  !!t && /* @__PURE__ */ z.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ z.jsx("div", { dangerouslySetInnerHTML: Ar(t) }) }),
  e === "event" && (i || n) && /* @__PURE__ */ z.jsx(
    as,
    {
      eventFormat: r,
      eventTime: i,
      eventLocation: n
    }
  ),
  d && /* @__PURE__ */ z.jsx("div", { className: "card-buttons", children: d.map((k) => /* @__PURE__ */ z.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ z.jsx(
        $i,
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
  h && g && /* @__PURE__ */ z.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ z.jsx(
    nr,
    {
      gaData: {
        ...tc,
        section: s,
        text: g
      },
      children: /* @__PURE__ */ z.jsx("a", { href: ec(h), children: g })
    }
  ) }),
  f && /* @__PURE__ */ z.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((k) => (
    // @ts-ignore
    /* @__PURE__ */ z.jsx(
      ts,
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
Na.propTypes = {
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
const as = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ z.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ z.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ z.jsx("div", { children: /* @__PURE__ */ z.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ z.jsx("div", { dangerouslySetInnerHTML: Ar(r) })
  ] }),
  t && /* @__PURE__ */ z.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ z.jsx("div", { children: /* @__PURE__ */ z.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ z.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ar(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
  r && /* @__PURE__ */ z.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ z.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ z.jsx("div", { children: /* @__PURE__ */ z.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ z.jsx("div", { dangerouslySetInnerHTML: Ar(r) })
  ] }) }),
  t && /* @__PURE__ */ z.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ z.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ z.jsx("div", { children: /* @__PURE__ */ z.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ z.jsx("span", { children: /* @__PURE__ */ z.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ar(t)
      }
    ) })
  ] }) })
] });
as.propTypes = {
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string
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
] }), ac = Tt.section``, Qn = Zs(null), os = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: i,
  dataTransformer: s,
  dataFilter: d,
  maxItems: g
}) => {
  const [{ data: h, loading: f, error: x }, k] = ul(), [j, B] = Rr([]), C = { ...e.dataSource, ...t };
  return rr(() => {
    k(C == null ? void 0 : C.url);
  }, [C == null ? void 0 : C.url]), rr(() => {
    const w = h == null ? void 0 : h.nodes.map(s), P = w == null ? void 0 : w.filter(
      (M) => d(M, t == null ? void 0 : t.filters)
    );
    B(g ? P == null ? void 0 : P.slice(0, g) : P);
  }, [h]), // Init the context to be used on its childrens
  /* @__PURE__ */ z.jsx(Qn.Provider, { value: { feeds: j }, children: /* @__PURE__ */ z.jsxs(ac, { children: [
    n,
    x ? /* @__PURE__ */ z.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
      f && !(j != null && j.length) && /* @__PURE__ */ z.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ z.jsx(nc, {}) }),
      j != null && j.length ? i : !f && /* @__PURE__ */ z.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
os.propTypes = {
  renderHeader: l.element,
  renderBody: l.element,
  maxItems: l.number,
  dataTransformer: l.func,
  dataFilter: l.func,
  noFeedText: l.string
};
const Ya = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), Xa = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
}), is = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
}), ss = l.shape({
  url: l.string,
  filters: l.string
}), oc = l.shape({
  header: Ya,
  ctaButton: Xa,
  dataSource: ss,
  maxItems: l.number
}), ic = Tt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, ls = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const n = { ...e.header, ...t }, i = { ...e.ctaButton, ...r };
  return /* @__PURE__ */ z.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ z.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ z.jsx("h2", { className: `text-${n.color}`, children: n.text }) }),
        /* @__PURE__ */ z.jsx(ic, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ z.jsx(
          nr,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: n.text,
              text: i.text
            },
            children: /* @__PURE__ */ z.jsx("a", { className: `btn btn-${i.color}`, href: i.url, children: i.text })
          }
        ) })
      ]
    }
  );
};
ls.propTypes = {
  defaultProps: oc,
  header: Ya,
  ctaButton: Xa
};
const us = ({ children: e }) => /* @__PURE__ */ z.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ z.jsx("div", { className: "col", children: e }) });
us.propTypes = {
  children: l.element
};
Tt.img`
  width: 100%;
`;
l.oneOf(["heading-hero", "story-hero"]), l.arrayOf(fa), l.string;
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
const sc = _i(function(e, t) {
  const {
    id: r,
    selected: n,
    title: i,
    selectTab: s,
    leftKeyPressed: d,
    rightKeyPressed: g,
    icon: h,
    gaData: f
  } = e, { isReact: x, isBootstrap: k } = zi(), j = Js(null);
  el(
    t,
    () => ({
      focus() {
        j.current.focus();
      },
      scrollIntoView() {
        var C, w, P, M, W, V, G;
        const _ = ((C = j.current) == null ? void 0 : C.offsetWidth) / 2 + j.current.offsetLeft, le = ((P = (w = j.current) == null ? void 0 : w.offsetParent) == null ? void 0 : P.scrollLeft) + ((W = (M = j.current) == null ? void 0 : M.offsetParent) == null ? void 0 : W.offsetWidth) / 2;
        (G = (V = j.current) == null ? void 0 : V.offsetParent) == null || G.scrollBy({
          left: _ - le
        });
      }
    }),
    []
  );
  const B = (C) => {
    C.keyCode === 37 ? (C.preventDefault(), d()) : C.keyCode === 39 && (C.preventDefault(), g());
  };
  return /* @__PURE__ */ z.jsx(nr, { gaData: { ...f, text: i }, children: /* @__PURE__ */ z.jsxs(
    "a",
    {
      ref: j,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      "data-bs-toggle": k && "tab",
      onClick: x && ((C) => s(C, r, i)),
      onKeyDown: x && B,
      tabIndex: n ? "" : "-1",
      children: [
        i,
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
}, cs = ({ children: e }) => (
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
cs.propTypes = {
  children: l.oneOfType([
    l.element,
    l.arrayOf(l.element)
  ]).isRequired
};
const ds = ({ buttonCount: e }) => {
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
  return /* @__PURE__ */ z.jsx(cs, { children: t });
};
ds.propTypes = {
  buttonCount: l.number.isRequired
};
l.arrayOf(l.string).isRequired, l.func;
const fs = ({ onClick: e = () => null }) => /* @__PURE__ */ z.jsx(
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
fs.propTypes = {
  onClick: l.func
};
const ps = ({ onClick: e = () => null }) => /* @__PURE__ */ z.jsx(
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
ps.propTypes = {
  onClick: l.func
};
const Xo = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, hs = ({ children: e = null }) => /* @__PURE__ */ z.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
hs.propTypes = {
  children: l.arrayOf(l.element)
};
const ms = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ z.jsxs(hs, { children: [
  /* @__PURE__ */ z.jsx(nr, { gaData: { ...Xo, text: "left chevron" }, children: /* @__PURE__ */ z.jsx(ps, { onClick: e }) }),
  t,
  /* @__PURE__ */ z.jsx(nr, { gaData: { ...Xo, text: "right chevron" }, children: /* @__PURE__ */ z.jsx(fs, { onClick: e }) })
] });
ms.propTypes = {
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
function Ko(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ko(Object(r), !0).forEach(function(n) {
      cc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ko(Object(r)).forEach(function(n) {
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
function Zn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Jn(e, t, r) {
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
function Ir(e) {
  return Ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Ir(e);
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
function mc(e) {
  var t = fc();
  return function() {
    var r = Ir(e), n;
    if (t) {
      var i = Ir(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else
      n = r.apply(this, arguments);
    return hc(this, n);
  };
}
function gc(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Ir(e), e !== null); )
    ;
  return e;
}
function $n() {
  return typeof Reflect < "u" && Reflect.get ? $n = Reflect.get : $n = function(e, t, r) {
    var n = gc(e, t);
    if (n) {
      var i = Object.getOwnPropertyDescriptor(n, t);
      return i.get ? i.get.call(arguments.length < 3 ? e : r) : i.value;
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
function it(e) {
  return parseInt(e);
}
function yc(e) {
  return parseFloat(e);
}
function ja(e) {
  return typeof e == "string";
}
function Fr(e) {
  var t = zn(e);
  return t === "function" || t === "object" && !!e;
}
function Vn(e) {
  return typeof e == "function";
}
function bs(e) {
  return typeof e > "u";
}
function Ia(e) {
  return e.constructor === Array;
}
function vc(e, t, r) {
  var n = {};
  for (var i in t)
    Vn(t[i]) ? n[i] = t[i](e, n, r) : zt("Extension must be a function");
  for (var s in n)
    Vn(n[s].mount) && n[s].mount();
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
function Fa(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(i) {
      t.classes.hasOwnProperty(i) && (r.classes[i] = Qo(Qo({}, e.classes[i]), t.classes[i]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var kc = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zn(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return Jn(e, [{
    key: "on",
    value: function(t, r) {
      if (Ia(t)) {
        for (var n = 0; n < t.length; n++)
          this.on(t[n], r);
        return;
      }
      this.hop.call(this.events, t) || (this.events[t] = []);
      var i = this.events[t].push(r) - 1;
      return {
        remove: function() {
          delete this.events[t][i];
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
      if (Ia(t)) {
        for (var n = 0; n < t.length; n++)
          this.emit(t[n], r);
        return;
      }
      this.hop.call(this.events, t) && this.events[t].forEach(function(i) {
        i(r || {});
      });
    }
  }]), e;
}(), Sc = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Zn(this, e), this._c = {}, this._t = [], this._e = new kc(), this.disabled = !1, this.selector = t, this.settings = Fa(bc, r), this.index = this.settings.startAt;
  }
  return Jn(e, [{
    key: "mount",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Fr(t) ? this._c = vc(this, t, this._e) : zt("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return Ia(t) ? this._t = t : zt("You need to provide a array on `mutate()`"), this;
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
      return this.settings = Fa(this.settings, t), t.hasOwnProperty("startAt") && (this.index = t.startAt), this._e.emit("update"), this;
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
      Fr(t) ? this._o = t : zt("Options must be an `object` instance.");
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
      this._i = it(t);
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
        if (e.settings.bound && it(x) > f) {
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
        var B = i(j);
        B > f && (this._o = !0), e.index = s(B, j);
        return;
      }
      if (k === "<" || k === "|" && x === "<") {
        var C = d(j);
        C < 0 && (this._o = !0), e.index = g(C, j);
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
  function i(h) {
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
  function g(h, f) {
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
        steps: f ? it(f) ? it(f) : f : 0
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
      return this.isBound() ? f - 1 - (it(h.perView) - 1) + it(h.focusAt) : f - 1;
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
function Zo() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function ea(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, i, s, d, g = 0, h = function() {
    g = r.leading === !1 ? 0 : Zo(), n = null, d = e.apply(i, s), n || (i = s = null);
  }, f = function() {
    var x = Zo();
    !g && r.leading === !1 && (g = x);
    var k = t - (x - g);
    return i = this, s = arguments, k <= 0 || k > t ? (n && (clearTimeout(n), n = null), g = x, d = e.apply(i, s), n || (i = s = null)) : !n && r.trailing !== !1 && (n = setTimeout(h, k)), d;
  };
  return f.cancel = function() {
    clearTimeout(n), g = 0, n = i = s = null;
  }, f;
}
var jn = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function _c(e, t, r) {
  var n = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(i) {
      for (var s = 0, d = i.length; s < d; s++) {
        var g = i[s].style, h = t.Direction.value;
        s !== 0 ? g[jn[h][0]] = "".concat(this.value / 2, "px") : g[jn[h][0]] = "", s !== i.length - 1 ? g[jn[h][1]] = "".concat(this.value / 2, "px") : g[jn[h][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(i) {
      for (var s = 0, d = i.length; s < d; s++) {
        var g = i[s].style;
        g.marginLeft = "", g.marginRight = "";
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
      return it(e.settings.gap);
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
      var i = e.settings.perView;
      return n.value * (i - 1) / i;
    }
  }), r.on(["build.after", "update"], ea(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function ys(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function La(e) {
  return Array.prototype.slice.call(e);
}
var Cc = '[data-glide-el="track"]';
function Tc(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(Cc), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = La(this.wrapper.children).filter(function(i) {
        return !i.classList.contains(e.settings.classes.slide.clone);
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
    set: function(i) {
      ja(i) && (i = document.querySelector(i)), i !== null ? n._r = i : zt("Root element must be a existing Html node");
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
    set: function(i) {
      n._t = i;
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
function Rc(e, t, r) {
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
    set: function(i) {
      Fr(i) ? (i.before = it(i.before), i.after = it(i.after)) : i = it(i), n._v = i;
    }
  }), qe(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var i = n.value, s = e.settings.perView;
      return Fr(i) ? i.before / s + i.after / s : i * 2 / s;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function Ac(e, t, r) {
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
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = s, r.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        r.emit("move.after", {
          movement: i.value
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
    set: function(i) {
      n._o = bs(i) ? 0 : it(i);
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
      var i = this.offset, s = this.translate;
      return t.Direction.is("rtl") ? s + i : s - i;
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
      for (var i = "".concat(this.slideWidth, "px"), s = t.Html.slides, d = 0; d < s.length; d++)
        s[d].style.width = i;
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
      for (var i = t.Html.slides, s = 0; s < i.length; s++)
        i[s].style.width = "";
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
      var i = e.settings.classes, s = t.Html.slides[e.index];
      s && (s.classList.add(i.slide.active), ys(s).forEach(function(d) {
        d.classList.remove(i.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var i = e.settings.classes, s = i.type, d = i.slide;
      t.Html.root.classList.remove(s[e.settings.type]), t.Html.slides.forEach(function(g) {
        g.classList.remove(d.active);
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
function Nc(e, t, r) {
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
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = t.Html.slides, d = e.settings, g = d.perView, h = d.classes, f = d.cloningRatio;
      if (s.length > 0)
        for (var x = +!!e.settings.peek, k = g + x + Math.round(g / 2), j = s.slice(0, k).reverse(), B = s.slice(k * -1), C = 0; C < Math.max(f, Math.floor(g / s.length)); C++) {
          for (var w = 0; w < j.length; w++) {
            var P = j[w].cloneNode(!0);
            P.classList.add(h.slide.clone), i.push(P);
          }
          for (var M = 0; M < B.length; M++) {
            var W = B[M].cloneNode(!0);
            W.classList.add(h.slide.clone), i.unshift(W);
          }
        }
      return i;
    },
    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function() {
      for (var i = this.items, s = t.Html, d = s.wrapper, g = s.slides, h = Math.floor(i.length / 2), f = i.slice(0, h).reverse(), x = i.slice(h * -1).reverse(), k = "".concat(t.Sizes.slideWidth, "px"), j = 0; j < x.length; j++)
        d.appendChild(x[j]);
      for (var B = 0; B < f.length; B++)
        d.insertBefore(f[B], g[0]);
      for (var C = 0; C < i.length; C++)
        i[C].style.width = k;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var i = this.items, s = 0; s < i.length; s++)
        t.Html.wrapper.removeChild(i[s]);
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
    Zn(this, e), this.listeners = t;
  }
  return Jn(e, [{
    key: "on",
    value: function(t, r, n) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      ja(t) && (t = [t]);
      for (var s = 0; s < t.length; s++)
        this.listeners[t[s]] = n, r.addEventListener(t[s], this.listeners[t[s]], i);
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
      for (var i = 0; i < t.length; i++)
        r.removeEventListener(t[i], this.listeners[t[i]], n);
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
  var n = new ar(), i = {
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
      n.on("resize", window, ea(function() {
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
    i.unbind(), n.destroy();
  }), i;
}
var jc = ["ltr", "rtl"], Ic = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Fc(e, t, r) {
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
    resolve: function(i) {
      var s = i.slice(0, 1);
      return this.is("rtl") ? i.split(s).join(Ic[s]) : i;
    },
    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function(i) {
      return this.value === i;
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
    set: function(i) {
      jc.indexOf(i) > -1 ? n._v = i : zt("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Lc(e, t) {
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
        return Fr(n) ? r - n.before : r - n;
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
      var n = t.Gaps.value, i = t.Sizes.width, s = e.settings.focusAt, d = t.Sizes.slideWidth;
      return s === "center" ? r - (i / 2 - d / 2) : r - d * s - n * s;
    }
  };
}
function Bc(e, t, r) {
  var n = [Mc, Dc, zc, $c].concat(e._t, [Lc]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(i) {
      for (var s = 0; s < n.length; s++) {
        var d = n[s];
        Vn(d) && Vn(d().modify) ? i = d(e, t, r).modify(i) : zt("Transformer should be a function that returns an object with `modify()` method");
      }
      return i;
    }
  };
}
function Wc(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(i) {
      var s = Bc(e, t).mutate(i), d = "translate3d(".concat(-1 * s, "px, 0px, 0px)");
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
      var i = t.Sizes.length, s = e.index, d = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? i + (s - d) : (s + d) % i;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var i = t.Sizes.slideWidth * e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? i * -1 : i;
    }
  };
  return r.on("move", function(i) {
    if (!e.isType("carousel") || !t.Run.isOffset())
      return n.set(i.movement);
    t.Transition.after(function() {
      r.emit("translate.jump"), n.set(t.Sizes.slideWidth * e.index);
    });
    var s = t.Sizes.slideWidth * t.Translate.getStartIndex();
    return n.set(s - t.Translate.getTravelDistance());
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function Uc(e, t, r) {
  var n = !1, i = {
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
  return qe(i, "duration", {
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
    i.set();
  }), r.on(["build.before", "resize", "translate.jump"], function() {
    i.disable();
  }), r.on("run", function() {
    i.enable();
  }), r.on("destroy", function() {
    i.remove();
  }), i;
}
var vs = !1;
try {
  var Jo = Object.defineProperty({}, "passive", {
    get: function() {
      vs = !0;
    }
  });
  window.addEventListener("testPassive", null, Jo), window.removeEventListener("testPassive", null, Jo);
} catch {
}
var Ma = vs, In = ["touchstart", "mousedown"], ei = ["touchmove", "mousemove"], ti = ["touchend", "touchcancel", "mouseup", "mouseleave"], ri = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Hc(e, t, r) {
  var n = new ar(), i = 0, s = 0, d = 0, g = !1, h = Ma ? {
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
      if (!g && !e.disabled) {
        this.disable();
        var k = this.touches(x);
        i = null, s = it(k.pageX), d = it(k.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(x) {
      if (!e.disabled) {
        var k = e.settings, j = k.touchAngle, B = k.touchRatio, C = k.classes, w = this.touches(x), P = it(w.pageX) - s, M = it(w.pageY) - d, W = Math.abs(P << 2), V = Math.abs(M << 2), G = Math.sqrt(W + V), _ = Math.sqrt(V);
        if (i = Math.asin(_ / G), i * 180 / Math.PI < j)
          x.stopPropagation(), t.Move.make(P * yc(B)), t.Html.root.classList.add(C.dragging), r.emit("swipe.move");
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
        var k = e.settings, j = k.perSwipe, B = k.touchAngle, C = k.classes, w = this.touches(x), P = this.threshold(x), M = w.pageX - s, W = i * 180 / Math.PI;
        this.enable(), M > P && W < B ? t.Run.make(t.Direction.resolve("".concat(j, "<"))) : M < -P && W < B ? t.Run.make(t.Direction.resolve("".concat(j, ">"))) : t.Move.make(), t.Html.root.classList.remove(C.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var x = this, k = e.settings, j = k.swipeThreshold, B = k.dragThreshold;
      j && n.on(In[0], t.Html.wrapper, function(C) {
        x.start(C);
      }, h), B && n.on(In[1], t.Html.wrapper, function(C) {
        x.start(C);
      }, h);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(In[0], t.Html.wrapper, h), n.off(In[1], t.Html.wrapper, h);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var x = this;
      n.on(ei, t.Html.wrapper, ea(function(k) {
        x.move(k);
      }, e.settings.throttle), h);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(ei, t.Html.wrapper, h);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var x = this;
      n.on(ti, t.Html.wrapper, function(k) {
        x.end(k);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(ti, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(x) {
      return ri.indexOf(x.type) > -1 ? x : x.touches[0] || x.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(x) {
      var k = e.settings;
      return ri.indexOf(x.type) > -1 ? k.dragThreshold : k.swipeThreshold;
    },
    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function() {
      return g = !1, t.Transition.enable(), this;
    },
    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function() {
      return g = !0, t.Transition.disable(), this;
    }
  };
  return r.on("build.after", function() {
    t.Html.root.classList.add(e.settings.classes.swipeable);
  }), r.on("destroy", function() {
    f.unbindSwipeStart(), f.unbindSwipeMove(), f.unbindSwipeEnd(), n.destroy();
  }), f;
}
function Vc(e, t, r) {
  var n = new ar(), i = {
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
    i.unbind(), n.destroy();
  }), i;
}
function qc(e, t, r) {
  var n = new ar(), i = !1, s = !1, d = {
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
    click: function(g) {
      s && (g.stopPropagation(), g.preventDefault());
    },
    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function() {
      if (s = !0, !i) {
        for (var g = 0; g < this.items.length; g++)
          this.items[g].draggable = !1;
        i = !0;
      }
      return this;
    },
    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function() {
      if (s = !1, i) {
        for (var g = 0; g < this.items.length; g++)
          this.items[g].draggable = !0;
        i = !1;
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
var Gc = '[data-glide-el="controls[nav]"]', Ka = '[data-glide-el^="controls"]', Yc = "".concat(Ka, ' [data-glide-dir*="<"]'), Xc = "".concat(Ka, ' [data-glide-dir*=">"]');
function Kc(e, t, r) {
  var n = new ar(), i = Ma ? {
    passive: !0
  } : !1, s = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(Gc), this._c = t.Html.root.querySelectorAll(Ka), this._arrowControls = {
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
      var g = e.settings, h = d[e.index];
      h && (h.classList.add(g.classes.nav.active), ys(h).forEach(function(f) {
        f.classList.remove(g.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(d) {
      var g = d[e.index];
      g == null || g.classList.remove(e.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!e.settings.rewind) {
        var d = s._arrowControls.next, g = s._arrowControls.previous;
        this.resetArrowState(d, g), e.index === 0 && this.disableArrow(g), e.index === t.Run.length && this.disableArrow(d);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var d = e.settings, g = arguments.length, h = new Array(g), f = 0; f < g; f++)
        h[f] = arguments[f];
      h.forEach(function(x) {
        La(x).forEach(function(k) {
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
      for (var d = e.settings, g = arguments.length, h = new Array(g), f = 0; f < g; f++)
        h[f] = arguments[f];
      h.forEach(function(x) {
        La(x).forEach(function(k) {
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
      for (var g = 0; g < d.length; g++)
        n.on("click", d[g], this.click), n.on("touchstart", d[g], this.click, i);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(d) {
      for (var g = 0; g < d.length; g++)
        n.off(["click", "touchstart"], d[g]);
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
      var g = d.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(g));
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
  var n = new ar(), i = {
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
      var d = e.settings.perSwipe, g = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(s.code) && t.Run.make(t.Direction.resolve("".concat(d).concat(g[s.code])));
    }
  };
  return r.on(["destroy", "update"], function() {
    i.unbind();
  }), r.on("update", function() {
    i.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), i;
}
function Zc(e, t, r) {
  var n = new ar(), i = {
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
      this._e && (this.enable(), e.settings.autoplay && bs(this._i) && (this._i = setInterval(function() {
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
  return qe(i, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var s = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
      return it(s || e.settings.autoplay);
    }
  }), r.on(["destroy", "update"], function() {
    i.unbind();
  }), r.on(["run.before", "swipe.start", "update"], function() {
    i.stop();
  }), r.on(["pause", "destroy"], function() {
    i.disable(), i.stop();
  }), r.on(["run.after", "swipe.end"], function() {
    i.start();
  }), r.on(["play"], function() {
    i.enable(), i.start();
  }), r.on("update", function() {
    i.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), i;
}
function ni(e) {
  return Fr(e) ? wc(e) : (zt("Breakpoints option must be an object"), {});
}
function Jc(e, t, r) {
  var n = new ar(), i = e.settings, s = ni(i.breakpoints), d = Object.assign({}, i), g = {
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
  return Object.assign(i, g.match(s)), n.on("resize", window, ea(function() {
    e.settings = Fa(i, g.match(s));
  }, e.settings.throttle)), r.on("update", function() {
    s = ni(s), d = Object.assign({}, i);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), g;
}
var ed = {
  // Required
  Html: Tc,
  Translate: Wc,
  Transition: Uc,
  Direction: Fc,
  Peek: Rc,
  Sizes: Ec,
  Gaps: _c,
  Move: Ac,
  Clones: Nc,
  Resize: Pc,
  Build: Oc,
  Run: xc,
  // Optional
  Swipe: Hc,
  Images: Vc,
  Anchors: qc,
  Controls: Kc,
  Keyboard: Qc,
  Autoplay: Zc,
  Breakpoints: Jc
}, td = /* @__PURE__ */ function(e) {
  dc(r, e);
  var t = mc(r);
  function r() {
    return Zn(this, r), t.apply(this, arguments);
  }
  return Jn(r, [{
    key: "mount",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return $n(Ir(r.prototype), "mount", this).call(this, Object.assign({}, ed, n));
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
  const { perViewSm: i, perViewMd: s, perViewLg: d } = rd(e), g = r ? 24 : 0, h = r ? { before: 48, after: 48 } : 0, f = r ? { before: 124, after: 124 } : 0;
  return {
    type: "slider",
    // No wrap-around.
    focusAt: 0,
    bound: !0,
    // Only if type slider with focusAt 0
    rewind: !1,
    // Only if type slider
    gap: g,
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
        perView: i,
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
  const n = e.querySelector(".glide__arrow--prev"), i = e.querySelector(".glide__arrow--next"), s = e.querySelector(".glide__track"), d = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || i)) return;
  const g = ["slider-start", "slider-mid", "slider-end"], h = "glide__arrow--disabled";
  s == null || s.classList.remove(...g), d == null || d.classList.remove(...g), t === 0 ? (s == null || s.classList.add("slider-start"), d == null || d.classList.add("slider-start"), n == null || n.classList.add(h), n == null || n.setAttribute("aria-disabled", "true"), i == null || i.classList.remove(h), i == null || i.setAttribute("aria-disabled", "false")) : t >= r - 1 ? (s == null || s.classList.add("slider-end"), d == null || d.classList.add("slider-end"), n == null || n.classList.remove(h), n == null || n.setAttribute("aria-disabled", "false"), i == null || i.classList.add(h), i == null || i.setAttribute("aria-disabled", "true")) : (s == null || s.classList.add("slider-mid"), d == null || d.classList.add("slider-mid"), n == null || n.classList.remove(h), i == null || i.classList.remove(h), n == null || n.setAttribute("aria-disabled", "false"), i == null || i.setAttribute("aria-disabled", "false"));
}
function od(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), i = t, s = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((d, g) => {
    g < i || g > s ? (d.setAttribute("aria-hidden", "true"), d.setAttribute("tabindex", "-1"), d.setAttribute("inert", "")) : (d.setAttribute("aria-hidden", "false"), d.removeAttribute("tabindex"), d.removeAttribute("inert"));
  });
}
function id({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: i,
  hasPeek: s = !0,
  isDraggable: d
}) {
  const g = nd(t, n, s, d), h = new td(`#${e}`, g);
  let f = document.querySelector(`#${e}`);
  return f.addEventListener("keyup", (x) => {
    const k = x;
    k.keyCode === 39 ? h.go(">") : k.keyCode === 37 ? h.go("<") : k.keyCode === 13 && h.go(document.activeElement.dataset.glideDir);
  }), h.on("build.before", () => {
    f = document.querySelector(`#${e}`), f && f.classList.add("slider-start");
  }), h.on("move", () => {
    if (f = document.querySelector(`#${e}`), !f) return;
    const x = h.index;
    od(f, x, t);
    const k = f.querySelector(".navigation-slider"), j = f.querySelector(".image-navigator-images");
    if (k && j) {
      const B = k.querySelectorAll(
        ".bullet-image-container"
      ), C = k.clientWidth, w = 82, P = B[x], M = j.getBoundingClientRect().x, W = k.getBoundingClientRect().x - M, V = P.getBoundingClientRect().x - M, G = P.getBoundingClientRect().x + P.getBoundingClientRect().width - M;
      if (x === 0 || V <= 0 + w)
        k.style.left = `${W - V + w}px`;
      else if (G >= C - w) {
        const _ = G - C;
        k.style.left = `${W - _ - w}px`;
      }
    }
    ad(f, x, r), f.setAttribute("data-current-index", x), i && i(x);
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
const ws = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: i = "",
  CustomNavComponent: s,
  role: d,
  ariaLabelledBy: g,
  isFullWidth: h,
  removeSideBackground: f = !1,
  hasNavButtons: x = !0,
  hasPositionIndicators: k = !0,
  imageAutoSize: j = !0,
  onItemClick: B = () => null,
  hasPeek: C = !0,
  isDraggable: w = !0,
  hasShadow: P = !0
}) => {
  const M = `glide-${Math.ceil(Math.random() * 1e4)}`, W = sd(n.length, e);
  return rr(() => {
    id({
      instanceName: M,
      perView: e,
      buttonCount: W,
      isFullWidth: h,
      onItemClick: B,
      hasPeek: C,
      isDraggable: w
    });
  }, [
    M,
    e,
    W,
    h,
    B,
    C,
    w
  ]), /* @__PURE__ */ z.jsxs(
    "div",
    {
      role: d,
      "aria-labelledby": g,
      className: `glide ${i}`,
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
          k && /* @__PURE__ */ z.jsx(ds, { buttonCount: W }),
          x && /* @__PURE__ */ z.jsx(ms, {})
        ] })
      ]
    }
  );
};
ws.propTypes = {
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
  content: i,
  eventLocation: s,
  eventTime: d,
  buttons: g,
  linkLabel: h,
  linkUrl: f,
  tags: x
}, k, j, B) => {
  var C;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ z.jsx(
      Lt,
      {
        type: k,
        horizontal: j,
        image: t,
        imageAltText: r,
        title: n,
        body: i,
        eventFormat: B,
        eventLocation: s,
        eventTime: d,
        buttons: g,
        linkLabel: h,
        linkUrl: f || ((C = g == null ? void 0 : g[0]) == null ? void 0 : C.href),
        tags: x
      }
    )
  };
}, ks = ({
  perView: e = 0,
  cardItems: t = [],
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: i = !1,
  width: s = void 0,
  maxWidth: d = void 0,
  imageAutoSize: g = !0
}) => {
  const h = parseInt(`${e}`, 10), [f, x] = Rr(h), k = 1024, j = 768;
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
    (w) => ld(w, r, i, n)
  ), C = t.length > f;
  return /* @__PURE__ */ z.jsx(
    ws,
    {
      perView: +f,
      maxWidth: d,
      width: s,
      carouselItems: B,
      cssClass: "aligned-carousel",
      imageAutoSize: g,
      removeSideBackground: t.length <= f,
      hasPositionIndicators: C,
      hasNavButtons: C,
      isDraggable: C,
      hasShadow: !0
    }
  );
};
ks.propTypes = {
  perView: l.string.isRequired,
  cardItems: l.arrayOf(
    l.shape({
      title: l.string.isRequired,
      content: l.string,
      eventLocation: l.string,
      eventTime: l.string,
      image: l.string,
      imageAltText: l.string,
      buttons: Lt.propTypes.buttons,
      linkLabel: l.string,
      linkUrl: l.string,
      tags: Lt.propTypes.tags
    })
  ).isRequired,
  cardType: Lt.propTypes.type,
  cardEventFormat: Lt.propTypes.eventFormat,
  cardHorizontal: Lt.propTypes.horizontal,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
l.number.isRequired, l.arrayOf(l.object).isRequired, l.string, l.string, l.bool;
const qn = {
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
l.string, qn.imageItems, qn.hasContent;
qn.imageItems.isRequired, qn.hasContent, l.string, l.string, l.bool;
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
var ai = Ti;
ai.createRoot, ai.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
function Qa({
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
var Ss = { exports: {} }, wa, oi;
function ud() {
  if (oi) return wa;
  oi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wa = e, wa;
}
var ka, ii;
function cd() {
  if (ii) return ka;
  ii = 1;
  var e = ud();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ka = function() {
    function n(d, g, h, f, x, k) {
      if (k !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
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
  }, ka;
}
Ss.exports = cd()();
var dd = Ss.exports;
const si = /* @__PURE__ */ Ri(dd), sn = {
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
}, li = ["newsUnits", "interests", "audiences", "eventTypes"], fd = (e, t = "") => {
  if (!t) return !0;
  const r = t.split(",");
  for (let n = 0; n < li.length; n += 1) {
    const i = li[n];
    for (let s = 0; s < r.length; s += 1) {
      const d = r[s], h = (e[i] || "").match(new RegExp(d, "gi"));
      if ((h == null ? void 0 : h.length) > 0) return !0;
    }
  }
  return !1;
}, ui = (e, t) => {
  let r = e;
  return r.length > t && (r = r.substr(0, r.lastIndexOf(" ", t)), r += "..."), r;
}, pd = ({ node: e }, t) => ({
  index: t,
  id: e.nid,
  imageUrl: e.image_url,
  imageAltText: e.image_alt,
  title: ui(e.title, 80),
  content: ui(e == null ? void 0 : e.clas_teaser, 140),
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
  maxItems: i
}) => {
  var g;
  const s = (g = n == null ? void 0 : n.filters) == null ? void 0 : g.replace(/_/g, " "), d = { ...n, filters: s };
  return /* @__PURE__ */ Qe.jsx(
    os,
    {
      renderHeader: t && r ? /* @__PURE__ */ Qe.jsx(
        ls,
        {
          header: t,
          ctaButton: r,
          defaultProps: sn
        }
      ) : null,
      renderBody: /* @__PURE__ */ Qe.jsx(us, { children: e }),
      dataTransformer: pd,
      dataFilter: fd,
      dataSource: d,
      defaultProps: sn,
      noFeedText: "No news to show.",
      maxItems: i
    }
  );
};
yr.propTypes = {
  header: Ya,
  ctaButton: Xa,
  dataSource: ss,
  maxItems: si.number,
  children: si.element
};
var xs = { exports: {} }, Fe = {};
var ci;
function hd() {
  if (ci) return Fe;
  ci = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), B = Symbol.for("react.client.reference");
  function C(w) {
    if (typeof w == "object" && w !== null) {
      var P = w.$$typeof;
      switch (P) {
        case e:
          switch (w = w.type, w) {
            case r:
            case i:
            case n:
            case h:
            case f:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case d:
                case g:
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
  return Fe.ContextConsumer = s, Fe.ContextProvider = d, Fe.Element = e, Fe.ForwardRef = g, Fe.Fragment = r, Fe.Lazy = k, Fe.Memo = x, Fe.Portal = t, Fe.Profiler = i, Fe.StrictMode = n, Fe.Suspense = h, Fe.SuspenseList = f, Fe.isContextConsumer = function(w) {
    return C(w) === s;
  }, Fe.isContextProvider = function(w) {
    return C(w) === d;
  }, Fe.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Fe.isForwardRef = function(w) {
    return C(w) === g;
  }, Fe.isFragment = function(w) {
    return C(w) === r;
  }, Fe.isLazy = function(w) {
    return C(w) === k;
  }, Fe.isMemo = function(w) {
    return C(w) === x;
  }, Fe.isPortal = function(w) {
    return C(w) === t;
  }, Fe.isProfiler = function(w) {
    return C(w) === i;
  }, Fe.isStrictMode = function(w) {
    return C(w) === n;
  }, Fe.isSuspense = function(w) {
    return C(w) === h;
  }, Fe.isSuspenseList = function(w) {
    return C(w) === f;
  }, Fe.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === i || w === n || w === h || w === f || w === j || typeof w == "object" && w !== null && (w.$$typeof === k || w.$$typeof === x || w.$$typeof === d || w.$$typeof === s || w.$$typeof === g || w.$$typeof === B || w.getModuleId !== void 0);
  }, Fe.typeOf = C, Fe;
}
xs.exports = hd();
var _s = xs.exports;
function md(e) {
  function t(F, N, I, $, b) {
    for (var te = 0, T = 0, re = 0, Q = 0, J, H, ne = 0, se = 0, Z, pe = Z = J = 0, ee = 0, ue = 0, Ue = 0, de = 0, et = I.length, He = et - 1, he, U = "", ae = "", Ke = "", st = "", Le; ee < et; ) {
      if (H = I.charCodeAt(ee), ee === He && T + Q + re + te !== 0 && (T !== 0 && (H = T === 47 ? 10 : 47), Q = re = te = 0, et++, He++), T + Q + re + te === 0) {
        if (ee === He && (0 < ue && (U = U.replace(j, "")), 0 < U.trim().length)) {
          switch (H) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              U += I.charAt(ee);
          }
          H = 59;
        }
        switch (H) {
          case 123:
            for (U = U.trim(), J = U.charCodeAt(0), Z = 1, de = ++ee; ee < et; ) {
              switch (H = I.charCodeAt(ee)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (H = I.charCodeAt(ee + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (pe = ee + 1; pe < He; ++pe)
                          switch (I.charCodeAt(pe)) {
                            case 47:
                              if (H === 42 && I.charCodeAt(pe - 1) === 42 && ee + 2 !== pe) {
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
                  for (; ee++ < He && I.charCodeAt(ee) !== H; )
                    ;
              }
              if (Z === 0) break;
              ee++;
            }
            switch (Z = I.substring(de, ee), J === 0 && (J = (U = U.replace(k, "").trim()).charCodeAt(0)), J) {
              case 64:
                switch (0 < ue && (U = U.replace(j, "")), H = U.charCodeAt(1), H) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ue = N;
                    break;
                  default:
                    ue = Je;
                }
                if (Z = t(N, ue, Z, H, b + 1), de = Z.length, 0 < xe && (ue = r(Je, U, Ue), Le = g(3, Z, ue, N, Re, fe, de, H, b, $), U = ue.join(""), Le !== void 0 && (de = (Z = Le.trim()).length) === 0 && (H = 0, Z = "")), 0 < de) switch (H) {
                  case 115:
                    U = U.replace(le, d);
                  case 100:
                  case 109:
                  case 45:
                    Z = U + "{" + Z + "}";
                    break;
                  case 107:
                    U = U.replace(W, "$1 $2"), Z = U + "{" + Z + "}", Z = ke === 1 || ke === 2 && s("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                    break;
                  default:
                    Z = U + Z, $ === 112 && (Z = (ae += Z, ""));
                }
                else Z = "";
                break;
              default:
                Z = t(N, r(N, U, Ue), Z, $, b + 1);
            }
            Ke += Z, Z = Ue = ue = pe = J = 0, U = "", H = I.charCodeAt(++ee);
            break;
          case 125:
          case 59:
            if (U = (0 < ue ? U.replace(j, "") : U).trim(), 1 < (de = U.length)) switch (pe === 0 && (J = U.charCodeAt(0), J === 45 || 96 < J && 123 > J) && (de = (U = U.replace(" ", ":")).length), 0 < xe && (Le = g(1, U, N, F, Re, fe, ae.length, $, b, $)) !== void 0 && (de = (U = Le.trim()).length) === 0 && (U = "\0\0"), J = U.charCodeAt(0), H = U.charCodeAt(1), J) {
              case 0:
                break;
              case 64:
                if (H === 105 || H === 99) {
                  st += U + I.charAt(ee);
                  break;
                }
              default:
                U.charCodeAt(de - 1) !== 58 && (ae += i(U, J, H, U.charCodeAt(2)));
            }
            Ue = ue = pe = J = 0, U = "", H = I.charCodeAt(++ee);
        }
      }
      switch (H) {
        case 13:
        case 10:
          T === 47 ? T = 0 : 1 + J === 0 && $ !== 107 && 0 < U.length && (ue = 1, U += "\0"), 0 < xe * Ye && g(0, U, N, F, Re, fe, ae.length, $, b, $), fe = 1, Re++;
          break;
        case 59:
        case 125:
          if (T + Q + re + te === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, he = I.charAt(ee), H) {
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
              Q + T + te === 0 && (ue = Ue = 1, he = "\f" + he);
              break;
            case 108:
              if (Q + T + te + Ae === 0 && 0 < pe) switch (ee - pe) {
                case 2:
                  ne === 112 && I.charCodeAt(ee - 3) === 58 && (Ae = ne);
                case 8:
                  se === 111 && (Ae = se);
              }
              break;
            case 58:
              Q + T + te === 0 && (pe = ee);
              break;
            case 44:
              T + re + Q + te === 0 && (ue = 1, he += "\r");
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
              T + re + Q + te + pe + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + te + re)) switch (T) {
                case 0:
                  switch (2 * H + 3 * I.charCodeAt(ee + 1)) {
                    case 235:
                      T = 47;
                      break;
                    case 220:
                      de = ee, T = 42;
                  }
                  break;
                case 42:
                  H === 47 && ne === 42 && de + 2 !== ee && (I.charCodeAt(de + 2) === 33 && (ae += I.substring(de, ee + 1)), he = "", T = 0);
              }
          }
          T === 0 && (U += he);
      }
      se = ne, ne = H, ee++;
    }
    if (de = ae.length, 0 < de) {
      if (ue = N, 0 < xe && (Le = g(2, ae, ue, F, Re, fe, de, $, b, $), Le !== void 0 && (ae = Le).length === 0)) return st + ae + Ke;
      if (ae = ue.join(",") + "{" + ae + "}", ke * Ae !== 0) {
        switch (ke !== 2 || s(ae, 2) || (Ae = 0), Ae) {
          case 111:
            ae = ae.replace(G, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(V, "::-webkit-input-$1") + ae.replace(V, "::-moz-$1") + ae.replace(V, ":-ms-input-$1") + ae;
        }
        Ae = 0;
      }
    }
    return st + ae + Ke;
  }
  function r(F, N, I) {
    var $ = N.trim().split(P);
    N = $;
    var b = $.length, te = F.length;
    switch (te) {
      case 0:
      case 1:
        var T = 0;
        for (F = te === 0 ? "" : F[0] + " "; T < b; ++T)
          N[T] = n(F, N[T], I).trim();
        break;
      default:
        var re = T = 0;
        for (N = []; T < b; ++T)
          for (var Q = 0; Q < te; ++Q)
            N[re++] = n(F[Q] + " ", $[T], I).trim();
    }
    return N;
  }
  function n(F, N, I) {
    var $ = N.charCodeAt(0);
    switch (33 > $ && ($ = (N = N.trim()).charCodeAt(0)), $) {
      case 38:
        return N.replace(M, "$1" + F.trim());
      case 58:
        return F.trim() + N.replace(M, "$1" + F.trim());
      default:
        if (0 < 1 * I && 0 < N.indexOf("\f")) return N.replace(M, (F.charCodeAt(0) === 58 ? "" : "$1") + F.trim());
    }
    return F + N;
  }
  function i(F, N, I, $) {
    var b = F + ";", te = 2 * N + 3 * I + 4 * $;
    if (te === 944) {
      F = b.indexOf(":", 9) + 1;
      var T = b.substring(F, b.length - 1).trim();
      return T = b.substring(0, F).trim() + T + ";", ke === 1 || ke === 2 && s(T, 1) ? "-webkit-" + T + T : T;
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
        return C.test(b) ? b.replace(B, ":-webkit-") + b.replace(B, ":-moz-") + b : b;
      case 1e3:
        switch (T = b.substring(13).trim(), N = T.indexOf("-") + 1, T.charCodeAt(0) + T.charCodeAt(N)) {
          case 226:
            T = b.replace(_, "tb");
            break;
          case 232:
            T = b.replace(_, "tb-rl");
            break;
          case 220:
            T = b.replace(_, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + T + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (N = (b = F).length - 10, T = (b.charCodeAt(N) === 33 ? b.substring(0, N) : b).substring(F.indexOf(":", 7) + 1).trim(), te = T.charCodeAt(0) + (T.charCodeAt(7) | 0)) {
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
        if ($e.test(F) === !0) return (T = F.substring(F.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(F.replace("stretch", "fill-available"), N, I, $).replace(":fill-available", ":stretch") : b.replace(T, "-webkit-" + T) + b.replace(T, "-moz-" + T.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, I + $ === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10)) return b.substring(0, b.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(F, N) {
    var I = F.indexOf(N === 1 ? ":" : "{"), $ = F.substring(0, N !== 3 ? I : 10);
    return I = F.substring(I + 1, F.length - 1), Me(N !== 2 ? $ : $.replace(Ne, "$1"), I, N);
  }
  function d(F, N) {
    var I = i(N, N.charCodeAt(0), N.charCodeAt(1), N.charCodeAt(2));
    return I !== N + ";" ? I.replace(ye, " or ($1)").substring(4) : "(" + N + ")";
  }
  function g(F, N, I, $, b, te, T, re, Q, J) {
    for (var H = 0, ne = N, se; H < xe; ++H)
      switch (se = Pe[H].call(x, F, ne, I, $, b, te, T, re, Q, J)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = se;
      }
    if (ne !== N) return ne;
  }
  function h(F) {
    switch (F) {
      case void 0:
      case null:
        xe = Pe.length = 0;
        break;
      default:
        if (typeof F == "function") Pe[xe++] = F;
        else if (typeof F == "object") for (var N = 0, I = F.length; N < I; ++N)
          h(F[N]);
        else Ye = !!F | 0;
    }
    return h;
  }
  function f(F) {
    return F = F.prefix, F !== void 0 && (Me = null, F ? typeof F != "function" ? ke = 1 : (ke = 2, Me = F) : ke = 0), f;
  }
  function x(F, N) {
    var I = F;
    if (33 > I.charCodeAt(0) && (I = I.trim()), ve = I, I = [ve], 0 < xe) {
      var $ = g(-1, N, I, I, Re, fe, 0, 0, 0, 0);
      $ !== void 0 && typeof $ == "string" && (N = $);
    }
    var b = t(Je, I, N, 0, 0);
    return 0 < xe && ($ = g(-2, b, I, I, Re, fe, b.length, 0, 0, 0), $ !== void 0 && (b = $)), ve = "", Ae = 0, fe = Re = 1, b;
  }
  var k = /^\0+/g, j = /[\0\r\f]/g, B = /: */g, C = /zoo|gra/, w = /([,: ])(transform)/g, P = /,\r+?/g, M = /([\t\r\n ])*\f?&/g, W = /@(k\w+)\s*(\S*)\s*/, V = /::(place)/g, G = /:(read-only)/g, _ = /[svh]\w+-[tblr]{2}/, le = /\(\s*(.*)\s*\)/g, ye = /([\s\S]*?);/g, Te = /-self|flex-/g, Ne = /[^]*?(:[rp][el]a[\w-]+)[^]*/, $e = /stretch|:\s*\w+\-(?:conte|avail)/, Se = /([^-])(image-set\()/, fe = 1, Re = 1, Ae = 0, ke = 1, Je = [], Pe = [], xe = 0, Me = null, Ye = 0, ve = "";
  return x.use = h, x.set = f, e !== void 0 && f(e), x;
}
var gd = {
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
var yd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, di = /* @__PURE__ */ bd(
  function(e) {
    return yd.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Cs = { exports: {} }, Oe = {};
var fi;
function vd() {
  if (fi) return Oe;
  fi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, g = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, k = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, B = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, W = e ? Symbol.for("react.scope") : 60119;
  function V(_) {
    if (typeof _ == "object" && _ !== null) {
      var le = _.$$typeof;
      switch (le) {
        case t:
          switch (_ = _.type, _) {
            case h:
            case f:
            case n:
            case s:
            case i:
            case k:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case g:
                case x:
                case C:
                case B:
                case d:
                  return _;
                default:
                  return le;
              }
          }
        case r:
          return le;
      }
    }
  }
  function G(_) {
    return V(_) === f;
  }
  return Oe.AsyncMode = h, Oe.ConcurrentMode = f, Oe.ContextConsumer = g, Oe.ContextProvider = d, Oe.Element = t, Oe.ForwardRef = x, Oe.Fragment = n, Oe.Lazy = C, Oe.Memo = B, Oe.Portal = r, Oe.Profiler = s, Oe.StrictMode = i, Oe.Suspense = k, Oe.isAsyncMode = function(_) {
    return G(_) || V(_) === h;
  }, Oe.isConcurrentMode = G, Oe.isContextConsumer = function(_) {
    return V(_) === g;
  }, Oe.isContextProvider = function(_) {
    return V(_) === d;
  }, Oe.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, Oe.isForwardRef = function(_) {
    return V(_) === x;
  }, Oe.isFragment = function(_) {
    return V(_) === n;
  }, Oe.isLazy = function(_) {
    return V(_) === C;
  }, Oe.isMemo = function(_) {
    return V(_) === B;
  }, Oe.isPortal = function(_) {
    return V(_) === r;
  }, Oe.isProfiler = function(_) {
    return V(_) === s;
  }, Oe.isStrictMode = function(_) {
    return V(_) === i;
  }, Oe.isSuspense = function(_) {
    return V(_) === k;
  }, Oe.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === n || _ === f || _ === s || _ === i || _ === k || _ === j || typeof _ == "object" && _ !== null && (_.$$typeof === C || _.$$typeof === B || _.$$typeof === d || _.$$typeof === g || _.$$typeof === x || _.$$typeof === P || _.$$typeof === M || _.$$typeof === W || _.$$typeof === w);
  }, Oe.typeOf = V, Oe;
}
Cs.exports = vd();
var wd = Cs.exports, Za = wd, kd = {
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
}, Ts = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ja = {};
Ja[Za.ForwardRef] = xd;
Ja[Za.Memo] = Ts;
function pi(e) {
  return Za.isMemo(e) ? Ts : Ja[e.$$typeof] || kd;
}
var _d = Object.defineProperty, Cd = Object.getOwnPropertyNames, hi = Object.getOwnPropertySymbols, Td = Object.getOwnPropertyDescriptor, Rd = Object.getPrototypeOf, mi = Object.prototype;
function Rs(e, t, r) {
  if (typeof t != "string") {
    if (mi) {
      var n = Rd(t);
      n && n !== mi && Rs(e, n, r);
    }
    var i = Cd(t);
    hi && (i = i.concat(hi(t)));
    for (var s = pi(e), d = pi(t), g = 0; g < i.length; ++g) {
      var h = i[g];
      if (!Sd[h] && !(r && r[h]) && !(d && d[h]) && !(s && s[h])) {
        var f = Td(t, h);
        try {
          _d(e, h, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ad = Rs;
const Ed = /* @__PURE__ */ Ri(Ad);
var ot = { env: { NODE_ENV: "production" } };
function Dt() {
  return (Dt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var gi = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Da = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !_s.typeOf(e);
}, Gn = Object.freeze([]), tr = Object.freeze({});
function ln(e) {
  return typeof e == "function";
}
function bi(e) {
  return e.displayName || e.name || "Component";
}
function eo(e) {
  return e && typeof e.styledComponentId == "string";
}
var Lr = typeof ot < "u" && ot.env !== void 0 && (ot.env.REACT_APP_SC_ATTR || ot.env.SC_ATTR) || "data-styled", to = typeof window < "u" && "HTMLElement" in window, Od = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ot < "u" && ot.env !== void 0 && (ot.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ot.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ot.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ot.env.REACT_APP_SC_DISABLE_SPEEDY : ot.env.SC_DISABLE_SPEEDY !== void 0 && ot.env.SC_DISABLE_SPEEDY !== "" ? ot.env.SC_DISABLE_SPEEDY !== "false" && ot.env.SC_DISABLE_SPEEDY : ot.env.NODE_ENV !== "production"));
function dn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Nd = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, i = 0; i < r; i++) n += this.groupSizes[i];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, s = i.length, d = s; r >= d; ) (d <<= 1) < 0 && dn(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(i), this.length = d;
      for (var g = s; g < d; g++) this.groupSizes[g] = 0;
    }
    for (var h = this.indexOfGroup(r + 1), f = 0, x = n.length; f < x; f++) this.tag.insertRule(h, n[f]) && (this.groupSizes[r]++, h++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), s = i + n;
      this.groupSizes[r] = 0;
      for (var d = i; d < s; d++) this.tag.deleteRule(i);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var i = this.groupSizes[r], s = this.indexOfGroup(r), d = s + i, g = s; g < d; g++) n += this.tag.getRule(g) + `/*!sc*/
`;
    return n;
  }, e;
}(), Bn = /* @__PURE__ */ new Map(), Yn = /* @__PURE__ */ new Map(), an = 1, Fn = function(e) {
  if (Bn.has(e)) return Bn.get(e);
  for (; Yn.has(an); ) an++;
  var t = an++;
  return Bn.set(e, t), Yn.set(t, e), t;
}, Pd = function(e) {
  return Yn.get(e);
}, jd = function(e, t) {
  t >= an && (an = t + 1), Bn.set(e, t), Yn.set(t, e);
}, Id = "style[" + Lr + '][data-styled-version="5.3.11"]', Fd = new RegExp("^" + Lr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ld = function(e, t, r) {
  for (var n, i = r.split(","), s = 0, d = i.length; s < d; s++) (n = i[s]) && e.registerName(t, n);
}, Md = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, s = r.length; i < s; i++) {
    var d = r[i].trim();
    if (d) {
      var g = d.match(Fd);
      if (g) {
        var h = 0 | parseInt(g[1], 10), f = g[2];
        h !== 0 && (jd(f, h), Ld(e, f, g[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, Dd = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, As = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(g) {
    for (var h = g.childNodes, f = h.length; f >= 0; f--) {
      var x = h[f];
      if (x && x.nodeType === 1 && x.hasAttribute(Lr)) return x;
    }
  }(r), s = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Lr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Dd();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, zd = function() {
  function e(r) {
    var n = this.element = As(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet) return i.sheet;
      for (var s = document.styleSheets, d = 0, g = s.length; d < g; d++) {
        var h = s[d];
        if (h.ownerNode === i) return h;
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
      var i = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(i, s || null), this.length++, !0;
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
}(), yi = to, Wd = { isServer: !to, useCSSOMInjection: !Od }, Es = function() {
  function e(r, n, i) {
    r === void 0 && (r = tr), n === void 0 && (n = {}), this.options = Dt({}, Wd, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && to && yi && (yi = !1, function(s) {
      for (var d = document.querySelectorAll(Id), g = 0, h = d.length; g < h; g++) {
        var f = d[g];
        f && f.getAttribute(Lr) !== "active" && (Md(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Fn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Dt({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = i ? new Bd(d) : s ? new zd(d) : new $d(d), new Nd(r)));
    var r, n, i, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Fn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(Fn(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Fn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, s = "", d = 0; d < i; d++) {
        var g = Pd(d);
        if (g !== void 0) {
          var h = r.names.get(g), f = n.getGroup(d);
          if (h && f && h.size) {
            var x = Lr + ".g" + d + '[id="' + g + '"]', k = "";
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
}(), Ud = /(a)(d)/gi, vi = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function za(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = vi(t % 52) + r;
  return (vi(t % 52) + r).replace(Ud, "$1-$2");
}
var Or = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Os = function(e) {
  return Or(5381, e);
};
function Hd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (ln(r) && !eo(r)) return !1;
  }
  return !0;
}
var Vd = Os("5.3.11"), qd = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Hd(t), this.componentId = r, this.baseHash = Or(Vd, r), this.baseStyle = n, Es.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Mr(this.rules, t, r, n).join(""), g = za(Or(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(i, g)) {
        var h = n(d, "." + g, void 0, i);
        r.insertRules(i, g, h);
      }
      s.push(g), this.staticRulesId = g;
    }
    else {
      for (var f = this.rules.length, x = Or(this.baseHash, n.hash), k = "", j = 0; j < f; j++) {
        var B = this.rules[j];
        if (typeof B == "string") k += B;
        else if (B) {
          var C = Mr(B, t, r, n), w = Array.isArray(C) ? C.join("") : C;
          x = Or(x, w + j), k += w;
        }
      }
      if (k) {
        var P = za(x >>> 0);
        if (!r.hasNameForId(i, P)) {
          var M = n(k, "." + P, void 0, i);
          r.insertRules(i, P, M);
        }
        s.push(P);
      }
    }
    return s.join(" ");
  }, e;
}(), Gd = /^\s*\/\/.*$/gm, Yd = [":", "[", ".", "#"];
function Xd(e) {
  var t, r, n, i, s = tr, d = s.options, g = d === void 0 ? tr : d, h = s.plugins, f = h === void 0 ? Gn : h, x = new md(g), k = [], j = /* @__PURE__ */ function(w) {
    function P(M) {
      if (M) try {
        w(M + "}");
      } catch {
      }
    }
    return function(M, W, V, G, _, le, ye, Te, Ne, $e) {
      switch (M) {
        case 1:
          if (Ne === 0 && W.charCodeAt(0) === 64) return w(W + ";"), "";
          break;
        case 2:
          if (Te === 0) return W + "/*|*/";
          break;
        case 3:
          switch (Te) {
            case 102:
            case 112:
              return w(V[0] + W), "";
            default:
              return W + ($e === 0 ? "/*|*/" : "");
          }
        case -2:
          W.split("/*|*/}").forEach(P);
      }
    };
  }(function(w) {
    k.push(w);
  }), B = function(w, P, M) {
    return P === 0 && Yd.indexOf(M[r.length]) !== -1 || M.match(i) ? w : "." + t;
  };
  function C(w, P, M, W) {
    W === void 0 && (W = "&");
    var V = w.replace(Gd, ""), G = P && M ? M + " " + P + " { " + V + " }" : V;
    return t = W, r = P, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), x(M || !P ? "" : P, G);
  }
  return x.use([].concat(f, [function(w, P, M) {
    w === 2 && M.length && M[0].lastIndexOf(r) > 0 && (M[0] = M[0].replace(n, B));
  }, j, function(w) {
    if (w === -2) {
      var P = k;
      return k = [], P;
    }
  }])), C.hash = f.length ? f.reduce(function(w, P) {
    return P.name || dn(15), Or(w, P.name);
  }, 5381).toString() : "", C;
}
var Ns = Ze.createContext();
Ns.Consumer;
var Ps = Ze.createContext(), Kd = (Ps.Consumer, new Es()), $a = Xd();
function Qd() {
  return $t(Ns) || Kd;
}
function Zd() {
  return $t(Ps) || $a;
}
var Jd = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, s) {
      s === void 0 && (s = $a);
      var d = n.name + s.hash;
      i.hasNameForId(n.id, d) || i.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
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
function wi(e) {
  return ef.test(e) ? e.replace(tf, nf).replace(rf, "-ms-") : e;
}
var ki = function(e) {
  return e == null || e === !1 || e === "";
};
function Mr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, s = [], d = 0, g = e.length; d < g; d += 1) (i = Mr(e[d], t, r, n)) !== "" && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    return s;
  }
  if (ki(e)) return "";
  if (eo(e)) return "." + e.styledComponentId;
  if (ln(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return Mr(h, t, r, n);
  }
  var f;
  return e instanceof Jd ? r ? (e.inject(r, n), e.getName(n)) : e : Da(e) ? function x(k, j) {
    var B, C, w = [];
    for (var P in k) k.hasOwnProperty(P) && !ki(k[P]) && (Array.isArray(k[P]) && k[P].isCss || ln(k[P]) ? w.push(wi(P) + ":", k[P], ";") : Da(k[P]) ? w.push.apply(w, x(k[P], P)) : w.push(wi(P) + ": " + (B = P, (C = k[P]) == null || typeof C == "boolean" || C === "" ? "" : typeof C != "number" || C === 0 || B in gd || B.startsWith("--") ? String(C).trim() : C + "px") + ";"));
    return j ? [j + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var Si = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function af(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return ln(e) || Da(e) ? Si(Mr(gi(Gn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Si(Mr(gi(e, r)));
}
var of = function(e, t, r) {
  return r === void 0 && (r = tr), e.theme !== r.theme && e.theme || t || r.theme;
}, sf = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, lf = /(^-|-$)/g;
function Sa(e) {
  return e.replace(sf, "-").replace(lf, "");
}
var uf = function(e) {
  return za(Os(e) >>> 0);
};
function Ln(e) {
  return typeof e == "string" && ot.env.NODE_ENV === "production";
}
var Ba = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, cf = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function df(e, t, r) {
  var n = e[r];
  Ba(t) && Ba(n) ? js(n, t) : e[r] = t;
}
function js(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var i = 0, s = r; i < s.length; i++) {
    var d = s[i];
    if (Ba(d)) for (var g in d) cf(g) && df(e, d[g], g);
  }
  return e;
}
var Is = Ze.createContext();
Is.Consumer;
var xa = {};
function Fs(e, t, r) {
  var n = eo(e), i = !Ln(e), s = t.attrs, d = s === void 0 ? Gn : s, g = t.componentId, h = g === void 0 ? function(W, V) {
    var G = typeof W != "string" ? "sc" : Sa(W);
    xa[G] = (xa[G] || 0) + 1;
    var _ = G + "-" + uf("5.3.11" + G + xa[G]);
    return V ? V + "-" + _ : _;
  }(t.displayName, t.parentComponentId) : g, f = t.displayName, x = f === void 0 ? function(W) {
    return Ln(W) ? "styled." + W : "Styled(" + bi(W) + ")";
  }(e) : f, k = t.displayName && t.componentId ? Sa(t.displayName) + "-" + t.componentId : t.componentId || h, j = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, B = t.shouldForwardProp;
  n && e.shouldForwardProp && (B = t.shouldForwardProp ? function(W, V, G) {
    return e.shouldForwardProp(W, V, G) && t.shouldForwardProp(W, V, G);
  } : e.shouldForwardProp);
  var C, w = new qd(r, k, n ? e.componentStyle : void 0), P = w.isStatic && d.length === 0, M = function(W, V) {
    return function(G, _, le, ye) {
      var Te = G.attrs, Ne = G.componentStyle, $e = G.defaultProps, Se = G.foldedComponentIds, fe = G.shouldForwardProp, Re = G.styledComponentId, Ae = G.target, ke = function($, b, te) {
        $ === void 0 && ($ = tr);
        var T = Dt({}, b, { theme: $ }), re = {};
        return te.forEach(function(Q) {
          var J, H, ne, se = Q;
          for (J in ln(se) && (se = se(T)), se) T[J] = re[J] = J === "className" ? (H = re[J], ne = se[J], H && ne ? H + " " + ne : H || ne) : se[J];
        }), [T, re];
      }(of(_, $t(Is), $e) || tr, _, Te), Je = ke[0], Pe = ke[1], xe = function($, b, te, T) {
        var re = Qd(), Q = Zd(), J = b ? $.generateAndInjectStyles(tr, re, Q) : $.generateAndInjectStyles(te, re, Q);
        return J;
      }(Ne, ye, Je), Me = le, Ye = Pe.$as || _.$as || Pe.as || _.as || Ae, ve = Ln(Ye), F = Pe !== _ ? Dt({}, _, {}, Pe) : _, N = {};
      for (var I in F) I[0] !== "$" && I !== "as" && (I === "forwardedAs" ? N.as = F[I] : (fe ? fe(I, di, Ye) : !ve || di(I)) && (N[I] = F[I]));
      return _.style && Pe.style !== _.style && (N.style = Dt({}, _.style, {}, Pe.style)), N.className = Array.prototype.concat(Se, Re, xe !== Re ? xe : null, _.className, Pe.className).filter(Boolean).join(" "), N.ref = Me, Ci(Ye, N);
    }(C, W, V, P);
  };
  return M.displayName = x, (C = Ze.forwardRef(M)).attrs = j, C.componentStyle = w, C.displayName = x, C.shouldForwardProp = B, C.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Gn, C.styledComponentId = k, C.target = n ? e.target : e, C.withComponent = function(W) {
    var V = t.componentId, G = function(le, ye) {
      if (le == null) return {};
      var Te, Ne, $e = {}, Se = Object.keys(le);
      for (Ne = 0; Ne < Se.length; Ne++) Te = Se[Ne], ye.indexOf(Te) >= 0 || ($e[Te] = le[Te]);
      return $e;
    }(t, ["componentId"]), _ = V && V + "-" + (Ln(W) ? W : Sa(bi(W)));
    return Fs(W, Dt({}, G, { attrs: j, componentId: _ }), r);
  }, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(W) {
    this._foldedDefaultProps = n ? js({}, e.defaultProps, W) : W;
  } }), Object.defineProperty(C, "toString", { value: function() {
    return "." + C.styledComponentId;
  } }), i && Ed(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), C;
}
var un = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = tr), !_s.isValidElementType(n)) return dn(1, String(n));
    var s = function() {
      return r(n, i, af.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, Dt({}, i, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, Dt({}, i, { attrs: Array.prototype.concat(i.attrs, d).filter(Boolean) }));
    }, s;
  }(Fs, e);
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
  const { feeds: t } = $t(Qn), r = t == null ? void 0 : t.map(
    (n, i) => pf(n, i, e)
  );
  return /* @__PURE__ */ Qe.jsx(ff, { children: /* @__PURE__ */ Qe.jsx(
    ks,
    {
      width: "auto",
      cardType: "story",
      perView: "3",
      cardItems: r || []
    }
  ) });
}, Ls = ({ cardButton: e, ...t }) => (rr(() => {
  typeof window < "u" && Qa({
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
const Ms = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), mf = un.section`
  .c-card {
    height: 100%;
  }
`, gf = (e, t) => /* @__PURE__ */ Qe.jsx(
  "div",
  {
    className: "col col-12 col-md-6 col-lg-4 cards-items-container",
    children: /* @__PURE__ */ Qe.jsx(
      Lt,
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
        tags: Ms(e == null ? void 0 : e.interests)
      }
    )
  },
  e.id
), bf = ({ cardButton: e }) => {
  const { feeds: t } = $t(Qn);
  return /* @__PURE__ */ Qe.jsx(mf, { className: "row row-spaced", "data-testid": "grid-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ Qe.jsx(Ze.Fragment, { children: gf(r, e) }, n)
  )) });
}, Ds = ({ cardButton: e, ...t }) => (rr(() => {
  typeof window < "u" && Qa({
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
Ds.propTypes = {
  ...yr.propTypes,
  cardButton: is
};
const yf = un.section``, vf = (e, t) => /* @__PURE__ */ Qe.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ Qe.jsx(
  Lt,
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
    tags: Ms(e == null ? void 0 : e.interests)
  }
) }, e.id), wf = ({ cardButton: e }) => {
  const { feeds: t } = $t(Qn);
  return /* @__PURE__ */ Qe.jsx(yf, { className: "row-spaced", "data-testid": "list-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ Qe.jsx(Ze.Fragment, { children: vf(r, e) }, n)
  )) });
}, zs = ({ cardButton: e, ...t }) => (rr(() => {
  typeof window < "u" && Qa({
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
zs.propTypes = { ...yr.propTypes, feedCardButtonShape: is };
var $s, xi = Ti;
$s = xi.createRoot, xi.hydrateRoot;
const ro = (e, t, r) => {
  $s(r).render(Ze.createElement(e, t));
}, xf = ({ targetSelector: e, props: t }) => {
  ro(Ds, t, document.querySelector(e));
}, _f = ({ targetSelector: e, props: t }) => {
  ro(zs, t, document.querySelector(e));
}, Cf = ({ targetSelector: e, props: t }) => {
  ro(Ls, t, document.querySelector(e));
};
export {
  Ls as CardCarouselNews,
  Ds as CardGridNews,
  zs as CardListlNews,
  Cf as initCardCarouselNewsComponent,
  xf as initCardGridNewsComponent,
  _f as initCardListNewsComponent
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
