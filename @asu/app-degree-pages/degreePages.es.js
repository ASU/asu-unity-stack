import gt, { Component as pu, createContext as Ys, forwardRef as Xs, useRef as rn, useImperativeHandle as fu, useId as hu, useContext as Bt, createElement as Js, useState as ut, useEffect as At, useLayoutEffect as gu, useMemo as Qs, Fragment as Zs, createRef as mu } from "react";
import Ks from "react-dom";
function Bo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var el = { exports: {} }, wn = {};
var Di;
function bu() {
  if (Di) return wn;
  Di = 1;
  var e = gt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(g, b, f) {
    var A, E = {}, R = null, $ = null;
    f !== void 0 && (R = "" + f), b.key !== void 0 && (R = "" + b.key), b.ref !== void 0 && ($ = b.ref);
    for (A in b) n.call(b, A) && !s.hasOwnProperty(A) && (E[A] = b[A]);
    if (g && g.defaultProps) for (A in b = g.defaultProps, b) E[A] === void 0 && (E[A] = b[A]);
    return { $$typeof: t, type: g, key: R, ref: $, props: E, _owner: o.current };
  }
  return wn.Fragment = r, wn.jsx = p, wn.jsxs = p, wn;
}
el.exports = bu();
var d = el.exports;
function qo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tl = { exports: {} }, Sn = {}, Li;
function yu() {
  if (Li) return Sn;
  Li = 1;
  var e = gt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(g, b, f) {
    var A, E = {}, R = null, $ = null;
    f !== void 0 && (R = "" + f), b.key !== void 0 && (R = "" + b.key), b.ref !== void 0 && ($ = b.ref);
    for (A in b) n.call(b, A) && !s.hasOwnProperty(A) && (E[A] = b[A]);
    if (g && g.defaultProps) for (A in b = g.defaultProps, b) E[A] === void 0 && (E[A] = b[A]);
    return { $$typeof: t, type: g, key: R, ref: $, props: E, _owner: o.current };
  }
  return Sn.Fragment = r, Sn.jsx = p, Sn.jsxs = p, Sn;
}
tl.exports = yu();
var W = tl.exports, rl = { exports: {} }, Ga, Mi;
function xu() {
  if (Mi) return Ga;
  Mi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ga = e, Ga;
}
var Ya, Fi;
function vu() {
  if (Fi) return Ya;
  Fi = 1;
  var e = xu();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ya = function() {
    function n(p, g, b, f, A, E) {
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
  }, Ya;
}
rl.exports = vu()();
var wu = rl.exports;
const l = /* @__PURE__ */ qo(wu), Su = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), Xa = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), nl = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.string,
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
var al = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", p = 0; p < arguments.length; p++) {
        var g = arguments[p];
        g && (s = o(s, n(g)));
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
      for (var g in s)
        t.call(s, g) && s[g] && (p = o(p, g));
      return p;
    }
    function o(s, p) {
      return p ? s ? s + " " + p : s + p : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(al);
var ku = al.exports;
const ct = /* @__PURE__ */ qo(ku);
function Tu(e) {
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
const $i = (e, t, r) => e ? t : r, Cu = (e) => (e || []).join(" "), {
  entries: ol,
  setPrototypeOf: Ui,
  isFrozen: Au,
  getPrototypeOf: Eu,
  getOwnPropertyDescriptor: _u
} = Object;
let {
  freeze: Et,
  seal: $t,
  create: il
} = Object, {
  apply: vo,
  construct: wo
} = typeof Reflect < "u" && Reflect;
Et || (Et = function(e) {
  return e;
});
$t || ($t = function(e) {
  return e;
});
vo || (vo = function(e, t, r) {
  return e.apply(t, r);
});
wo || (wo = function(e, t) {
  return new e(...t);
});
const sa = _t(Array.prototype.forEach), Ru = _t(Array.prototype.lastIndexOf), zi = _t(Array.prototype.pop), kn = _t(Array.prototype.push), Ou = _t(Array.prototype.splice), ma = _t(String.prototype.toLowerCase), Ja = _t(String.prototype.toString), Bi = _t(String.prototype.match), Tn = _t(String.prototype.replace), Nu = _t(String.prototype.indexOf), ju = _t(String.prototype.trim), er = _t(Object.prototype.hasOwnProperty), Tt = _t(RegExp.prototype.test), Cn = Iu(TypeError);
function _t(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    return vo(e, t, n);
  };
}
function Iu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return wo(e, r);
  };
}
function Le(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ma;
  Ui && Ui(e, null);
  let n = t.length;
  for (; n--; ) {
    let o = t[n];
    if (typeof o == "string") {
      const s = r(o);
      s !== o && (Au(t) || (t[n] = s), o = s);
    }
    e[o] = !0;
  }
  return e;
}
function Pu(e) {
  for (let t = 0; t < e.length; t++)
    er(e, t) || (e[t] = null);
  return e;
}
function Ur(e) {
  const t = il(null);
  for (const [r, n] of ol(e))
    er(e, r) && (Array.isArray(n) ? t[r] = Pu(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = Ur(n) : t[r] = n);
  return t;
}
function An(e, t) {
  for (; e !== null; ) {
    const n = _u(e, t);
    if (n) {
      if (n.get)
        return _t(n.get);
      if (typeof n.value == "function")
        return _t(n.value);
    }
    e = Eu(e);
  }
  function r() {
    return null;
  }
  return r;
}
const qi = Et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Qa = Et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Za = Et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Du = Et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ka = Et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Lu = Et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Wi = Et(["#text"]), Hi = Et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), eo = Et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Vi = Et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), la = Et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Mu = $t(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Fu = $t(/<%[\w\W]*|[\w\W]*%>/gm), $u = $t(/\$\{[\w\W]*/gm), Uu = $t(/^data-[\-\w.\u00B7-\uFFFF]+$/), zu = $t(/^aria-[\-\w]+$/), sl = $t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Bu = $t(/^(?:\w+script|data):/i), qu = $t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ll = $t(/^html$/i), Wu = $t(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Gi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: zu,
  ATTR_WHITESPACE: qu,
  CUSTOM_ELEMENT: Wu,
  DATA_ATTR: Uu,
  DOCTYPE_NAME: ll,
  ERB_EXPR: Fu,
  IS_ALLOWED_URI: sl,
  IS_SCRIPT_OR_DATA: Bu,
  MUSTACHE_EXPR: Mu,
  TMPLIT_EXPR: $u
});
const En = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Hu = function() {
  return typeof window > "u" ? null : window;
}, Vu = function(e, t) {
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
}, Yi = function() {
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
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Hu();
  const t = (x) => cl(x);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== En.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, o = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: p,
    Node: g,
    Element: b,
    NodeFilter: f,
    NamedNodeMap: A = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: R,
    trustedTypes: $
  } = e, _ = b.prototype, w = An(_, "cloneNode"), I = An(_, "remove"), F = An(_, "nextSibling"), B = An(_, "childNodes"), X = An(_, "parentNode");
  if (typeof p == "function") {
    const x = r.createElement("template");
    x.content && x.content.ownerDocument && (r = x.content.ownerDocument);
  }
  let G, T = "";
  const {
    implementation: ue,
    createNodeIterator: he,
    createDocumentFragment: Te,
    getElementsByTagName: Pe
  } = r, {
    importNode: $e
  } = n;
  let ie = Yi();
  t.isSupported = typeof ol == "function" && typeof X == "function" && ue && ue.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: de,
    ERB_EXPR: _e,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: xe,
    ARIA_ATTR: Xe,
    IS_SCRIPT_OR_DATA: Re,
    ATTR_WHITESPACE: Ce,
    CUSTOM_ELEMENT: Fe
  } = Gi;
  let {
    IS_ALLOWED_URI: ze
  } = Gi, se = null;
  const q = Le({}, [...qi, ...Qa, ...Za, ...Ka, ...Wi]);
  let j = null;
  const z = Le({}, [...Hi, ...eo, ...Vi, ...la]);
  let U = Object.seal(il(null, {
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
  })), y = null, te = null, O = !0, oe = !0, ee = !1, re = !0, Y = !1, le = !0, pe = !1, ae = !1, be = !1, ne = !1, fe = !1, He = !1, ye = !0, pt = !1;
  const Qe = "user-content-";
  let ve = !0, J = !1, ce = {}, Ze = null;
  const mt = Le({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Be = null;
  const nr = Le({}, ["audio", "video", "img", "source", "image", "track"]);
  let Mt = null;
  const dr = Le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", yt = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml";
  let bt = it, qt = !1, Wt = null;
  const Ir = Le({}, [wt, yt, it], Ja);
  let lt = Le({}, ["mi", "mo", "mn", "ms", "mtext"]), St = Le({}, ["annotation-xml"]);
  const ar = Le({}, ["title", "style", "font", "a", "script"]);
  let Ie = null;
  const Ht = ["application/xhtml+xml", "text/html"], or = "text/html";
  let ke = null, nt = null;
  const ir = r.createElement("form"), kt = function(x) {
    return x instanceof RegExp || x instanceof Function;
  }, Ft = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(nt && nt === x)) {
      if ((!x || typeof x != "object") && (x = {}), x = Ur(x), Ie = // eslint-disable-next-line unicorn/prefer-includes
      Ht.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? or : x.PARSER_MEDIA_TYPE, ke = Ie === "application/xhtml+xml" ? Ja : ma, se = er(x, "ALLOWED_TAGS") ? Le({}, x.ALLOWED_TAGS, ke) : q, j = er(x, "ALLOWED_ATTR") ? Le({}, x.ALLOWED_ATTR, ke) : z, Wt = er(x, "ALLOWED_NAMESPACES") ? Le({}, x.ALLOWED_NAMESPACES, Ja) : Ir, Mt = er(x, "ADD_URI_SAFE_ATTR") ? Le(Ur(dr), x.ADD_URI_SAFE_ATTR, ke) : dr, Be = er(x, "ADD_DATA_URI_TAGS") ? Le(Ur(nr), x.ADD_DATA_URI_TAGS, ke) : nr, Ze = er(x, "FORBID_CONTENTS") ? Le({}, x.FORBID_CONTENTS, ke) : mt, y = er(x, "FORBID_TAGS") ? Le({}, x.FORBID_TAGS, ke) : {}, te = er(x, "FORBID_ATTR") ? Le({}, x.FORBID_ATTR, ke) : {}, ce = er(x, "USE_PROFILES") ? x.USE_PROFILES : !1, O = x.ALLOW_ARIA_ATTR !== !1, oe = x.ALLOW_DATA_ATTR !== !1, ee = x.ALLOW_UNKNOWN_PROTOCOLS || !1, re = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Y = x.SAFE_FOR_TEMPLATES || !1, le = x.SAFE_FOR_XML !== !1, pe = x.WHOLE_DOCUMENT || !1, ne = x.RETURN_DOM || !1, fe = x.RETURN_DOM_FRAGMENT || !1, He = x.RETURN_TRUSTED_TYPE || !1, be = x.FORCE_BODY || !1, ye = x.SANITIZE_DOM !== !1, pt = x.SANITIZE_NAMED_PROPS || !1, ve = x.KEEP_CONTENT !== !1, J = x.IN_PLACE || !1, ze = x.ALLOWED_URI_REGEXP || sl, bt = x.NAMESPACE || it, lt = x.MATHML_TEXT_INTEGRATION_POINTS || lt, St = x.HTML_INTEGRATION_POINTS || St, U = x.CUSTOM_ELEMENT_HANDLING || {}, x.CUSTOM_ELEMENT_HANDLING && kt(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (U.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && kt(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (U.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (U.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Y && (oe = !1), fe && (ne = !0), ce && (se = Le({}, Wi), j = [], ce.html === !0 && (Le(se, qi), Le(j, Hi)), ce.svg === !0 && (Le(se, Qa), Le(j, eo), Le(j, la)), ce.svgFilters === !0 && (Le(se, Za), Le(j, eo), Le(j, la)), ce.mathMl === !0 && (Le(se, Ka), Le(j, Vi), Le(j, la))), x.ADD_TAGS && (se === q && (se = Ur(se)), Le(se, x.ADD_TAGS, ke)), x.ADD_ATTR && (j === z && (j = Ur(j)), Le(j, x.ADD_ATTR, ke)), x.ADD_URI_SAFE_ATTR && Le(Mt, x.ADD_URI_SAFE_ATTR, ke), x.FORBID_CONTENTS && (Ze === mt && (Ze = Ur(Ze)), Le(Ze, x.FORBID_CONTENTS, ke)), ve && (se["#text"] = !0), pe && Le(se, ["html", "head", "body"]), se.table && (Le(se, ["tbody"]), delete y.tbody), x.TRUSTED_TYPES_POLICY) {
        if (typeof x.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof x.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        G = x.TRUSTED_TYPES_POLICY, T = G.createHTML("");
      } else
        G === void 0 && (G = Vu($, o)), G !== null && typeof T == "string" && (T = G.createHTML(""));
      Et && Et(x), nt = x;
    }
  }, Vt = Le({}, [...Qa, ...Za, ...Du]), Gt = Le({}, [...Ka, ...Lu]), Ar = function(x) {
    let S = X(x);
    (!S || !S.tagName) && (S = {
      namespaceURI: bt,
      tagName: "template"
    });
    const N = ma(x.tagName), Q = ma(S.tagName);
    return Wt[x.namespaceURI] ? x.namespaceURI === yt ? S.namespaceURI === it ? N === "svg" : S.namespaceURI === wt ? N === "svg" && (Q === "annotation-xml" || lt[Q]) : !!Vt[N] : x.namespaceURI === wt ? S.namespaceURI === it ? N === "math" : S.namespaceURI === yt ? N === "math" && St[Q] : !!Gt[N] : x.namespaceURI === it ? S.namespaceURI === yt && !St[Q] || S.namespaceURI === wt && !lt[Q] ? !1 : !Gt[N] && (ar[N] || !Vt[N]) : !!(Ie === "application/xhtml+xml" && Wt[x.namespaceURI]) : !1;
  }, st = function(x) {
    kn(t.removed, {
      element: x
    });
    try {
      X(x).removeChild(x);
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
      if (ne || fe)
        try {
          st(S);
        } catch {
        }
      else
        try {
          S.setAttribute(x, "");
        } catch {
        }
  }, pr = function(x) {
    let S = null, N = null;
    if (be)
      x = "<remove></remove>" + x;
    else {
      const Oe = Bi(x, /^[\r\n\t ]+/);
      N = Oe && Oe[0];
    }
    Ie === "application/xhtml+xml" && bt === it && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
    const Q = G ? G.createHTML(x) : x;
    if (bt === it)
      try {
        S = new R().parseFromString(Q, Ie);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = ue.createDocument(bt, "template", null);
      try {
        S.documentElement.innerHTML = qt ? T : Q;
      } catch {
      }
    }
    const we = S.body || S.documentElement;
    return x && N && we.insertBefore(r.createTextNode(N), we.childNodes[0] || null), bt === it ? Pe.call(S, pe ? "html" : "body")[0] : pe ? S.documentElement : we;
  }, fr = function(x) {
    return he.call(
      x.ownerDocument || x,
      x,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, jt = function(x) {
    return x instanceof E && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof A) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
  }, sr = function(x) {
    return typeof g == "function" && x instanceof g;
  };
  function Ke(x, S, N) {
    sa(x, (Q) => {
      Q.call(t, S, N, nt);
    });
  }
  const Yt = function(x) {
    let S = null;
    if (Ke(ie.beforeSanitizeElements, x, null), jt(x))
      return st(x), !0;
    const N = ke(x.nodeName);
    if (Ke(ie.uponSanitizeElement, x, {
      tagName: N,
      allowedTags: se
    }), x.hasChildNodes() && !sr(x.firstElementChild) && Tt(/<[/\w]/g, x.innerHTML) && Tt(/<[/\w]/g, x.textContent) || x.nodeType === En.progressingInstruction || le && x.nodeType === En.comment && Tt(/<[/\w]/g, x.data))
      return st(x), !0;
    if (!se[N] || y[N]) {
      if (!y[N] && It(N) && (U.tagNameCheck instanceof RegExp && Tt(U.tagNameCheck, N) || U.tagNameCheck instanceof Function && U.tagNameCheck(N)))
        return !1;
      if (ve && !Ze[N]) {
        const Q = X(x) || x.parentNode, we = B(x) || x.childNodes;
        if (we && Q) {
          const Oe = we.length;
          for (let Ue = Oe - 1; Ue >= 0; --Ue) {
            const Ee = w(we[Ue], !0);
            Ee.__removalCount = (x.__removalCount || 0) + 1, Q.insertBefore(Ee, F(x));
          }
        }
      }
      return st(x), !0;
    }
    return x instanceof b && !Ar(x) || (N === "noscript" || N === "noembed" || N === "noframes") && Tt(/<\/no(script|embed|frames)/i, x.innerHTML) ? (st(x), !0) : (Y && x.nodeType === En.text && (S = x.textContent, sa([de, _e, Ae], (Q) => {
      S = Tn(S, Q, " ");
    }), x.textContent !== S && (kn(t.removed, {
      element: x.cloneNode()
    }), x.textContent = S)), Ke(ie.afterSanitizeElements, x, null), !1);
  }, hr = function(x, S, N) {
    if (ye && (S === "id" || S === "name") && (N in r || N in ir))
      return !1;
    if (!(oe && !te[S] && Tt(xe, S)) && !(O && Tt(Xe, S))) {
      if (!j[S] || te[S]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(It(x) && (U.tagNameCheck instanceof RegExp && Tt(U.tagNameCheck, x) || U.tagNameCheck instanceof Function && U.tagNameCheck(x)) && (U.attributeNameCheck instanceof RegExp && Tt(U.attributeNameCheck, S) || U.attributeNameCheck instanceof Function && U.attributeNameCheck(S)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          S === "is" && U.allowCustomizedBuiltInElements && (U.tagNameCheck instanceof RegExp && Tt(U.tagNameCheck, N) || U.tagNameCheck instanceof Function && U.tagNameCheck(N)))
        ) return !1;
      } else if (!Mt[S] && !Tt(ze, Tn(N, Ce, "")) && !((S === "src" || S === "xlink:href" || S === "href") && x !== "script" && Nu(N, "data:") === 0 && Be[x]) && !(ee && !Tt(Re, Tn(N, Ce, ""))) && N)
        return !1;
    }
    return !0;
  }, It = function(x) {
    return x !== "annotation-xml" && Bi(x, Fe);
  }, gr = function(x) {
    Ke(ie.beforeSanitizeAttributes, x, null);
    const {
      attributes: S
    } = x;
    if (!S || jt(x))
      return;
    const N = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: j,
      forceKeepAttr: void 0
    };
    let Q = S.length;
    for (; Q--; ) {
      const we = S[Q], {
        name: Oe,
        namespaceURI: Ue,
        value: Ee
      } = we, et = ke(Oe);
      let Je = Oe === "value" ? Ee : ju(Ee);
      if (N.attrName = et, N.attrValue = Je, N.keepAttr = !0, N.forceKeepAttr = void 0, Ke(ie.uponSanitizeAttribute, x, N), Je = N.attrValue, pt && (et === "id" || et === "name") && (Nt(Oe, x), Je = Qe + Je), le && Tt(/((--!?|])>)|<\/(style|title)/i, Je)) {
        Nt(Oe, x);
        continue;
      }
      if (N.forceKeepAttr || (Nt(Oe, x), !N.keepAttr))
        continue;
      if (!re && Tt(/\/>/i, Je)) {
        Nt(Oe, x);
        continue;
      }
      Y && sa([de, _e, Ae], (br) => {
        Je = Tn(Je, br, " ");
      });
      const at = ke(x.nodeName);
      if (hr(at, et, Je)) {
        if (G && typeof $ == "object" && typeof $.getAttributeType == "function" && !Ue)
          switch ($.getAttributeType(at, et)) {
            case "TrustedHTML": {
              Je = G.createHTML(Je);
              break;
            }
            case "TrustedScriptURL": {
              Je = G.createScriptURL(Je);
              break;
            }
          }
        try {
          Ue ? x.setAttributeNS(Ue, Oe, Je) : x.setAttribute(Oe, Je), jt(x) ? st(x) : zi(t.removed);
        } catch {
        }
      }
    }
    Ke(ie.afterSanitizeAttributes, x, null);
  }, mr = function x(S) {
    let N = null;
    const Q = fr(S);
    for (Ke(ie.beforeSanitizeShadowDOM, S, null); N = Q.nextNode(); )
      Ke(ie.uponSanitizeShadowNode, N, null), Yt(N), gr(N), N.content instanceof s && x(N.content);
    Ke(ie.afterSanitizeShadowDOM, S, null);
  };
  return t.sanitize = function(x) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, Q = null, we = null, Oe = null;
    if (qt = !x, qt && (x = "<!-->"), typeof x != "string" && !sr(x))
      if (typeof x.toString == "function") {
        if (x = x.toString(), typeof x != "string")
          throw Cn("dirty is not a string, aborting");
      } else
        throw Cn("toString is not a function");
    if (!t.isSupported)
      return x;
    if (ae || Ft(S), t.removed = [], typeof x == "string" && (J = !1), J) {
      if (x.nodeName) {
        const et = ke(x.nodeName);
        if (!se[et] || y[et])
          throw Cn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (x instanceof g)
      N = pr("<!---->"), Q = N.ownerDocument.importNode(x, !0), Q.nodeType === En.element && Q.nodeName === "BODY" || Q.nodeName === "HTML" ? N = Q : N.appendChild(Q);
    else {
      if (!ne && !Y && !pe && // eslint-disable-next-line unicorn/prefer-includes
      x.indexOf("<") === -1)
        return G && He ? G.createHTML(x) : x;
      if (N = pr(x), !N)
        return ne ? null : He ? T : "";
    }
    N && be && st(N.firstChild);
    const Ue = fr(J ? x : N);
    for (; we = Ue.nextNode(); )
      Yt(we), gr(we), we.content instanceof s && mr(we.content);
    if (J)
      return x;
    if (ne) {
      if (fe)
        for (Oe = Te.call(N.ownerDocument); N.firstChild; )
          Oe.appendChild(N.firstChild);
      else
        Oe = N;
      return (j.shadowroot || j.shadowrootmode) && (Oe = $e.call(n, Oe, !0)), Oe;
    }
    let Ee = pe ? N.outerHTML : N.innerHTML;
    return pe && se["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && Tt(ll, N.ownerDocument.doctype.name) && (Ee = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + Ee), Y && sa([de, _e, Ae], (et) => {
      Ee = Tn(Ee, et, " ");
    }), G && He ? G.createHTML(Ee) : Ee;
  }, t.setConfig = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ft(x), ae = !0;
  }, t.clearConfig = function() {
    nt = null, ae = !1;
  }, t.isValidAttribute = function(x, S, N) {
    nt || Ft({});
    const Q = ke(x), we = ke(S);
    return hr(Q, we, N);
  }, t.addHook = function(x, S) {
    typeof S == "function" && kn(ie[x], S);
  }, t.removeHook = function(x, S) {
    if (S !== void 0) {
      const N = Ru(ie[x], S);
      return N === -1 ? void 0 : Ou(ie[x], N, 1)[0];
    }
    return zi(ie[x]);
  }, t.removeHooks = function(x) {
    ie[x] = [];
  }, t.removeAllHooks = function() {
    ie = Yi();
  }, t;
}
var Gu = cl();
function Yu(e) {
  return (e ? document.querySelector(e) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
const Wr = (e) => ({ __html: Gu.sanitize(e) }), Xi = (e, t, r) => {
  let n = e;
  const o = [];
  for (; n < t; )
    n > 0 && n <= r && o.push(n), n += 1;
  return o;
};
let to = !1;
const Xu = (e, t) => {
  to || (to = !0, setTimeout(() => {
    e(), to = !1;
  }, t));
};
let Ji;
const Ju = (e, t) => {
  window.clearTimeout(Ji), Ji = window.setTimeout(e, t);
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
const ul = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: o = "",
  text: s = "",
  region: p = "",
  component: g = ""
}) => {
  const { dataLayer: b } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: p.toLowerCase(),
    section: o.toLowerCase(),
    text: s.toLowerCase(),
    component: g.toLowerCase()
  };
  b && b.push(f);
};
var $r = {}, Qi;
function Qu() {
  if (Qi) return $r;
  Qi = 1;
  var e = gt;
  function t(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, m = 1; m < arguments.length; m++) u += "&args[]=" + encodeURIComponent(arguments[m]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, o = {}, s = {};
  function p(a) {
    return r.call(s, a) ? !0 : r.call(o, a) ? !1 : n.test(a) ? s[a] = !0 : (o[a] = !0, !1);
  }
  function g(a, u, m, k, M, P, H) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = k, this.attributeNamespace = M, this.mustUseProperty = m, this.propertyName = a, this.type = u, this.sanitizeURL = P, this.removeEmptyString = H;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    b[a] = new g(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    b[u] = new g(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    b[a] = new g(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    b[a] = new g(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    b[a] = new g(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    b[a] = new g(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    b[a] = new g(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    b[a] = new g(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    b[a] = new g(a, 5, !1, a.toLowerCase(), null, !1, !1);
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
    b[u] = new g(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(f, A);
    b[u] = new g(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(f, A);
    b[u] = new g(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    b[a] = new g(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    b[a] = new g(a, 1, !1, a.toLowerCase(), null, !0, !0);
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
  var $ = /["'&<>]/;
  function _(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var u = $.exec(a);
    if (u) {
      var m = "", k, M = 0;
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
        M !== k && (m += a.substring(M, k)), M = k + 1, m += u;
      }
      a = M !== k ? m + a.substring(M, k) : m;
    }
    return a;
  }
  var w = /([A-Z])/g, I = /^ms-/, F = Array.isArray;
  function B(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function X(a, u, m) {
    switch (u) {
      case "select":
        return B(1, m.value != null ? m.value : m.defaultValue);
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
    return 4 <= a.insertionMode || a.insertionMode === 0 ? B(1, null) : a;
  }
  var G = /* @__PURE__ */ new Map();
  function T(a, u, m) {
    if (typeof m != "object") throw Error(t(62));
    u = !0;
    for (var k in m) if (r.call(m, k)) {
      var M = m[k];
      if (M != null && typeof M != "boolean" && M !== "") {
        if (k.indexOf("--") === 0) {
          var P = _(k);
          M = _(("" + M).trim());
        } else {
          P = k;
          var H = G.get(P);
          H !== void 0 || (H = _(P.replace(w, "-$1").toLowerCase().replace(I, "-ms-")), G.set(P, H)), P = H, M = typeof M == "number" ? M === 0 || r.call(E, k) ? "" + M : M + "px" : _(("" + M).trim());
        }
        u ? (u = !1, a.push(' style="', P, ":", M)) : a.push(";", P, ":", M);
      }
    }
    u || a.push('"');
  }
  function ue(a, u, m, k) {
    switch (m) {
      case "style":
        T(a, u, k);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < m.length) || m[0] !== "o" && m[0] !== "O" || m[1] !== "n" && m[1] !== "N") {
      if (u = b.hasOwnProperty(m) ? b[m] : null, u !== null) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (m = u.attributeName, u.type) {
          case 3:
            k && a.push(" ", m, '=""');
            break;
          case 4:
            k === !0 ? a.push(" ", m, '=""') : k !== !1 && a.push(" ", m, '="', _(k), '"');
            break;
          case 5:
            isNaN(k) || a.push(" ", m, '="', _(k), '"');
            break;
          case 6:
            !isNaN(k) && 1 <= k && a.push(" ", m, '="', _(k), '"');
            break;
          default:
            u.sanitizeURL && (k = "" + k), a.push(" ", m, '="', _(k), '"');
        }
      } else if (p(m)) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = m.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        a.push(" ", m, '="', _(k), '"');
      }
    }
  }
  function he(a, u, m) {
    if (u != null) {
      if (m != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && a.push("" + u);
    }
  }
  function Te(a) {
    var u = "";
    return e.Children.forEach(a, function(m) {
      m != null && (u += m);
    }), u;
  }
  function Pe(a, u, m, k) {
    a.push(de(m));
    var M = m = null, P;
    for (P in u) if (r.call(u, P)) {
      var H = u[P];
      if (H != null) switch (P) {
        case "children":
          m = H;
          break;
        case "dangerouslySetInnerHTML":
          M = H;
          break;
        default:
          ue(a, k, P, H);
      }
    }
    return a.push(">"), he(a, M, m), typeof m == "string" ? (a.push(_(m)), null) : m;
  }
  var $e = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ie = /* @__PURE__ */ new Map();
  function de(a) {
    var u = ie.get(a);
    if (u === void 0) {
      if (!$e.test(a)) throw Error(t(65, a));
      u = "<" + a, ie.set(a, u);
    }
    return u;
  }
  function _e(a, u, m, k, M) {
    switch (u) {
      case "select":
        a.push(de("select"));
        var P = null, H = null;
        for (Ne in m) if (r.call(m, Ne)) {
          var K = m[Ne];
          if (K != null) switch (Ne) {
            case "children":
              P = K;
              break;
            case "dangerouslySetInnerHTML":
              H = K;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ue(a, k, Ne, K);
          }
        }
        return a.push(">"), he(a, H, P), P;
      case "option":
        H = M.selectedValue, a.push(de("option"));
        var ge = K = null, Se = null, Ne = null;
        for (P in m) if (r.call(m, P)) {
          var ot = m[P];
          if (ot != null) switch (P) {
            case "children":
              K = ot;
              break;
            case "selected":
              Se = ot;
              break;
            case "dangerouslySetInnerHTML":
              Ne = ot;
              break;
            case "value":
              ge = ot;
            default:
              ue(a, k, P, ot);
          }
        }
        if (H != null) if (m = ge !== null ? "" + ge : Te(K), F(H)) {
          for (k = 0; k < H.length; k++)
            if ("" + H[k] === m) {
              a.push(' selected=""');
              break;
            }
        } else "" + H === m && a.push(' selected=""');
        else Se && a.push(' selected=""');
        return a.push(">"), he(a, Ne, K), K;
      case "textarea":
        a.push(de("textarea")), Ne = H = P = null;
        for (K in m) if (r.call(m, K) && (ge = m[K], ge != null)) switch (K) {
          case "children":
            Ne = ge;
            break;
          case "value":
            P = ge;
            break;
          case "defaultValue":
            H = ge;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ue(
              a,
              k,
              K,
              ge
            );
        }
        if (P === null && H !== null && (P = H), a.push(">"), Ne != null) {
          if (P != null) throw Error(t(92));
          if (F(Ne) && 1 < Ne.length) throw Error(t(93));
          P = "" + Ne;
        }
        return typeof P == "string" && P[0] === `
` && a.push(`
`), P !== null && a.push(_("" + P)), null;
      case "input":
        a.push(de("input")), ge = Ne = K = P = null;
        for (H in m) if (r.call(m, H) && (Se = m[H], Se != null)) switch (H) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ge = Se;
            break;
          case "defaultValue":
            K = Se;
            break;
          case "checked":
            Ne = Se;
            break;
          case "value":
            P = Se;
            break;
          default:
            ue(a, k, H, Se);
        }
        return Ne !== null ? ue(a, k, "checked", Ne) : ge !== null && ue(a, k, "checked", ge), P !== null ? ue(a, k, "value", P) : K !== null && ue(a, k, "value", K), a.push("/>"), null;
      case "menuitem":
        a.push(de("menuitem"));
        for (var Jt in m) if (r.call(m, Jt) && (P = m[Jt], P != null)) switch (Jt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ue(a, k, Jt, P);
        }
        return a.push(">"), null;
      case "title":
        a.push(de("title")), P = null;
        for (ot in m) if (r.call(m, ot) && (H = m[ot], H != null)) switch (ot) {
          case "children":
            P = H;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ue(a, k, ot, H);
        }
        return a.push(">"), P;
      case "listing":
      case "pre":
        a.push(de(u)), H = P = null;
        for (ge in m) if (r.call(m, ge) && (K = m[ge], K != null)) switch (ge) {
          case "children":
            P = K;
            break;
          case "dangerouslySetInnerHTML":
            H = K;
            break;
          default:
            ue(a, k, ge, K);
        }
        if (a.push(">"), H != null) {
          if (P != null) throw Error(t(60));
          if (typeof H != "object" || !("__html" in H)) throw Error(t(61));
          m = H.__html, m != null && (typeof m == "string" && 0 < m.length && m[0] === `
` ? a.push(`
`, m) : a.push("" + m));
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
        a.push(de(u));
        for (var Qt in m) if (r.call(m, Qt) && (P = m[Qt], P != null)) switch (Qt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ue(a, k, Qt, P);
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
        return Pe(
          a,
          m,
          u,
          k
        );
      case "html":
        return M.insertionMode === 0 && a.push("<!DOCTYPE html>"), Pe(a, m, u, k);
      default:
        if (u.indexOf("-") === -1 && typeof m.is != "string") return Pe(a, m, u, k);
        a.push(de(u)), H = P = null;
        for (Se in m) if (r.call(m, Se) && (K = m[Se], K != null)) switch (Se) {
          case "children":
            P = K;
            break;
          case "dangerouslySetInnerHTML":
            H = K;
            break;
          case "style":
            T(a, k, K);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            p(Se) && typeof K != "function" && typeof K != "symbol" && a.push(" ", Se, '="', _(K), '"');
        }
        return a.push(">"), he(a, H, P), P;
    }
  }
  function Ae(a, u, m) {
    if (a.push('<!--$?--><template id="'), m === null) throw Error(t(395));
    return a.push(m), a.push('"></template>');
  }
  function xe(a, u, m, k) {
    switch (m.insertionMode) {
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
  function Fe(a, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: a };
  }
  function ze(a, u, m, k) {
    return m.generateStaticMarkup ? (a.push(_(u)), !1) : (u === "" ? a = k : (k && a.push("<!-- -->"), a.push(_(u)), a = !0), a);
  }
  var se = Object.assign, q = Symbol.for("react.element"), j = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), O = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), pe = Symbol.for("react.scope"), ae = Symbol.for("react.debug_trace_mode"), be = Symbol.for("react.legacy_hidden"), ne = Symbol.for("react.default_value"), fe = Symbol.iterator;
  function He(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case z:
        return "Fragment";
      case j:
        return "Portal";
      case y:
        return "Profiler";
      case U:
        return "StrictMode";
      case ee:
        return "Suspense";
      case re:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case O:
        return (a.displayName || "Context") + ".Consumer";
      case te:
        return (a._context.displayName || "Context") + ".Provider";
      case oe:
        var u = a.render;
        return a = a.displayName, a || (a = u.displayName || u.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case Y:
        return u = a.displayName || null, u !== null ? u : He(a.type) || "Memo";
      case le:
        u = a._payload, a = a._init;
        try {
          return He(a(u));
        } catch {
        }
    }
    return null;
  }
  var ye = {};
  function pt(a, u) {
    if (a = a.contextTypes, !a) return ye;
    var m = {}, k;
    for (k in a) m[k] = u[k];
    return m;
  }
  var Qe = null;
  function ve(a, u) {
    if (a !== u) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var m = u.parent;
      if (a === null) {
        if (m !== null) throw Error(t(401));
      } else {
        if (m === null) throw Error(t(401));
        ve(a, m);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function J(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && J(a);
  }
  function ce(a) {
    var u = a.parent;
    u !== null && ce(u), a.context._currentValue2 = a.value;
  }
  function Ze(a, u) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === u.depth ? ve(a, u) : Ze(a, u);
  }
  function mt(a, u) {
    var m = u.parent;
    if (m === null) throw Error(t(402));
    a.depth === m.depth ? ve(a, m) : mt(a, m), u.context._currentValue2 = u.value;
  }
  function Be(a) {
    var u = Qe;
    u !== a && (u === null ? ce(a) : a === null ? J(u) : u.depth === a.depth ? ve(u, a) : u.depth > a.depth ? Ze(u, a) : mt(u, a), Qe = a);
  }
  var nr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function Mt(a, u, m, k) {
    var M = a.state !== void 0 ? a.state : null;
    a.updater = nr, a.props = m, a.state = M;
    var P = { queue: [], replace: !1 };
    a._reactInternals = P;
    var H = u.contextType;
    if (a.context = typeof H == "object" && H !== null ? H._currentValue2 : k, H = u.getDerivedStateFromProps, typeof H == "function" && (H = H(m, M), M = H == null ? M : se({}, M, H), a.state = M), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && nr.enqueueReplaceState(a, a.state, null), P.queue !== null && 0 < P.queue.length) if (u = P.queue, H = P.replace, P.queue = null, P.replace = !1, H && u.length === 1) a.state = u[0];
    else {
      for (P = H ? u[0] : a.state, M = !0, H = H ? 1 : 0; H < u.length; H++) {
        var K = u[H];
        K = typeof K == "function" ? K.call(a, P, m, k) : K, K != null && (M ? (M = !1, P = se({}, P, K)) : se(P, K));
      }
      a.state = P;
    }
    else P.queue = null;
  }
  var dr = { id: 1, overflow: "" };
  function wt(a, u, m) {
    var k = a.id;
    a = a.overflow;
    var M = 32 - yt(k) - 1;
    k &= ~(1 << M), m += 1;
    var P = 32 - yt(u) + M;
    if (30 < P) {
      var H = M - M % 5;
      return P = (k & (1 << H) - 1).toString(32), k >>= H, M -= H, { id: 1 << 32 - yt(u) + M | m << M | k, overflow: P + a };
    }
    return { id: 1 << P | m << M | k, overflow: a };
  }
  var yt = Math.clz32 ? Math.clz32 : qt, it = Math.log, bt = Math.LN2;
  function qt(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (it(a) / bt | 0) | 0;
  }
  function Wt(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var Ir = typeof Object.is == "function" ? Object.is : Wt, lt = null, St = null, ar = null, Ie = null, Ht = !1, or = !1, ke = 0, nt = null, ir = 0;
  function kt() {
    if (lt === null) throw Error(t(321));
    return lt;
  }
  function Ft() {
    if (0 < ir) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Vt() {
    return Ie === null ? ar === null ? (Ht = !1, ar = Ie = Ft()) : (Ht = !0, Ie = ar) : Ie.next === null ? (Ht = !1, Ie = Ie.next = Ft()) : (Ht = !0, Ie = Ie.next), Ie;
  }
  function Gt() {
    St = lt = null, or = !1, ar = null, ir = 0, Ie = nt = null;
  }
  function Ar(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function st(a, u, m) {
    if (lt = kt(), Ie = Vt(), Ht) {
      var k = Ie.queue;
      if (u = k.dispatch, nt !== null && (m = nt.get(k), m !== void 0)) {
        nt.delete(k), k = Ie.memoizedState;
        do
          k = a(k, m.action), m = m.next;
        while (m !== null);
        return Ie.memoizedState = k, [k, u];
      }
      return [Ie.memoizedState, u];
    }
    return a = a === Ar ? typeof u == "function" ? u() : u : m !== void 0 ? m(u) : u, Ie.memoizedState = a, a = Ie.queue = { last: null, dispatch: null }, a = a.dispatch = pr.bind(null, lt, a), [Ie.memoizedState, a];
  }
  function Nt(a, u) {
    if (lt = kt(), Ie = Vt(), u = u === void 0 ? null : u, Ie !== null) {
      var m = Ie.memoizedState;
      if (m !== null && u !== null) {
        var k = m[1];
        e: if (k === null) k = !1;
        else {
          for (var M = 0; M < k.length && M < u.length; M++) if (!Ir(u[M], k[M])) {
            k = !1;
            break e;
          }
          k = !0;
        }
        if (k) return m[0];
      }
    }
    return a = a(), Ie.memoizedState = [a, u], a;
  }
  function pr(a, u, m) {
    if (25 <= ir) throw Error(t(301));
    if (a === lt) if (or = !0, a = { action: m, next: null }, nt === null && (nt = /* @__PURE__ */ new Map()), m = nt.get(u), m === void 0) nt.set(u, a);
    else {
      for (u = m; u.next !== null; ) u = u.next;
      u.next = a;
    }
  }
  function fr() {
    throw Error(t(394));
  }
  function jt() {
  }
  var sr = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    return kt(), a._currentValue2;
  }, useMemo: Nt, useReducer: st, useRef: function(a) {
    lt = kt(), Ie = Vt();
    var u = Ie.memoizedState;
    return u === null ? (a = { current: a }, Ie.memoizedState = a) : u;
  }, useState: function(a) {
    return st(Ar, a);
  }, useInsertionEffect: jt, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return Nt(function() {
      return a;
    }, u);
  }, useImperativeHandle: jt, useEffect: jt, useDebugValue: jt, useDeferredValue: function(a) {
    return kt(), a;
  }, useTransition: function() {
    return kt(), [
      !1,
      fr
    ];
  }, useId: function() {
    var a = St.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - yt(a) - 1)).toString(32) + u;
    var m = Ke;
    if (m === null) throw Error(t(404));
    return u = ke++, a = ":" + m.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return kt(), u(a._source);
  }, useSyncExternalStore: function(a, u, m) {
    if (m === void 0) throw Error(t(407));
    return m();
  } }, Ke = null, Yt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function hr(a) {
    return console.error(a), null;
  }
  function It() {
  }
  function gr(a, u, m, k, M, P, H, K, ge) {
    var Se = [], Ne = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: k, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ne, pingedTasks: Se, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: M === void 0 ? hr : M, onAllReady: It, onShellReady: H === void 0 ? It : H, onShellError: It, onFatalError: It }, m = x(u, 0, null, m, !1, !1), m.parentFlushed = !0, a = mr(u, a, null, m, Ne, ye, null, dr), Se.push(a), u;
  }
  function mr(a, u, m, k, M, P, H, K) {
    a.allPendingTasks++, m === null ? a.pendingRootTasks++ : m.pendingTasks++;
    var ge = { node: u, ping: function() {
      var Se = a.pingedTasks;
      Se.push(ge), Se.length === 1 && Hn(a);
    }, blockedBoundary: m, blockedSegment: k, abortSet: M, legacyContext: P, context: H, treeContext: K };
    return M.add(ge), ge;
  }
  function x(a, u, m, k, M, P) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: k, boundary: m, lastPushedText: M, textEmbedded: P };
  }
  function S(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function N(a, u) {
    var m = a.onShellError;
    m(u), m = a.onFatalError, m(u), a.destination !== null ? (a.status = 2, a.destination.destroy(u)) : (a.status = 1, a.fatalError = u);
  }
  function Q(a, u, m, k, M) {
    for (lt = {}, St = u, ke = 0, a = m(k, M); or; ) or = !1, ke = 0, ir += 1, Ie = null, a = m(k, M);
    return Gt(), a;
  }
  function we(a, u, m, k) {
    var M = m.render(), P = k.childContextTypes;
    if (P != null) {
      var H = u.legacyContext;
      if (typeof m.getChildContext != "function") k = H;
      else {
        m = m.getChildContext();
        for (var K in m) if (!(K in P)) throw Error(t(108, He(k) || "Unknown", K));
        k = se({}, H, m);
      }
      u.legacyContext = k, Ee(a, u, M), u.legacyContext = H;
    } else Ee(a, u, M);
  }
  function Oe(a, u) {
    if (a && a.defaultProps) {
      u = se({}, u), a = a.defaultProps;
      for (var m in a) u[m] === void 0 && (u[m] = a[m]);
      return u;
    }
    return u;
  }
  function Ue(a, u, m, k, M) {
    if (typeof m == "function") if (m.prototype && m.prototype.isReactComponent) {
      M = pt(m, u.legacyContext);
      var P = m.contextType;
      P = new m(k, typeof P == "object" && P !== null ? P._currentValue2 : M), Mt(P, m, k, M), we(a, u, P, m);
    } else {
      P = pt(m, u.legacyContext), M = Q(a, u, m, k, P);
      var H = ke !== 0;
      if (typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0) Mt(M, m, k, P), we(a, u, M, m);
      else if (H) {
        k = u.treeContext, u.treeContext = wt(k, 1, 0);
        try {
          Ee(a, u, M);
        } finally {
          u.treeContext = k;
        }
      } else Ee(a, u, M);
    }
    else if (typeof m == "string") {
      switch (M = u.blockedSegment, P = _e(M.chunks, m, k, a.responseState, M.formatContext), M.lastPushedText = !1, H = M.formatContext, M.formatContext = X(H, m, k), Je(a, u, P), M.formatContext = H, m) {
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
          M.chunks.push("</", m, ">");
      }
      M.lastPushedText = !1;
    } else {
      switch (m) {
        case be:
        case ae:
        case U:
        case y:
        case z:
          Ee(a, u, k.children);
          return;
        case re:
          Ee(a, u, k.children);
          return;
        case pe:
          throw Error(t(343));
        case ee:
          e: {
            m = u.blockedBoundary, M = u.blockedSegment, P = k.fallback, k = k.children, H = /* @__PURE__ */ new Set();
            var K = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: H, errorDigest: null }, ge = x(a, M.chunks.length, K, M.formatContext, !1, !1);
            M.children.push(ge), M.lastPushedText = !1;
            var Se = x(a, 0, null, M.formatContext, !1, !1);
            Se.parentFlushed = !0, u.blockedBoundary = K, u.blockedSegment = Se;
            try {
              if (Je(
                a,
                u,
                k
              ), a.responseState.generateStaticMarkup || Se.lastPushedText && Se.textEmbedded && Se.chunks.push("<!-- -->"), Se.status = 1, Xt(K, Se), K.pendingTasks === 0) break e;
            } catch (Ne) {
              Se.status = 4, K.forceClientRender = !0, K.errorDigest = S(a, Ne);
            } finally {
              u.blockedBoundary = m, u.blockedSegment = M;
            }
            u = mr(a, P, m, ge, H, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof m == "object" && m !== null) switch (m.$$typeof) {
        case oe:
          if (k = Q(a, u, m.render, k, M), ke !== 0) {
            m = u.treeContext, u.treeContext = wt(m, 1, 0);
            try {
              Ee(a, u, k);
            } finally {
              u.treeContext = m;
            }
          } else Ee(a, u, k);
          return;
        case Y:
          m = m.type, k = Oe(m, k), Ue(a, u, m, k, M);
          return;
        case te:
          if (M = k.children, m = m._context, k = k.value, P = m._currentValue2, m._currentValue2 = k, H = Qe, Qe = k = { parent: H, depth: H === null ? 0 : H.depth + 1, context: m, parentValue: P, value: k }, u.context = k, Ee(a, u, M), a = Qe, a === null) throw Error(t(403));
          k = a.parentValue, a.context._currentValue2 = k === ne ? a.context._defaultValue : k, a = Qe = a.parent, u.context = a;
          return;
        case O:
          k = k.children, k = k(m._currentValue2), Ee(a, u, k);
          return;
        case le:
          M = m._init, m = M(m._payload), k = Oe(m, k), Ue(
            a,
            u,
            m,
            k,
            void 0
          );
          return;
      }
      throw Error(t(130, m == null ? m : typeof m, ""));
    }
  }
  function Ee(a, u, m) {
    if (u.node = m, typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case q:
          Ue(a, u, m.type, m.props, m.ref);
          return;
        case j:
          throw Error(t(257));
        case le:
          var k = m._init;
          m = k(m._payload), Ee(a, u, m);
          return;
      }
      if (F(m)) {
        et(a, u, m);
        return;
      }
      if (m === null || typeof m != "object" ? k = null : (k = fe && m[fe] || m["@@iterator"], k = typeof k == "function" ? k : null), k && (k = k.call(m))) {
        if (m = k.next(), !m.done) {
          var M = [];
          do
            M.push(m.value), m = k.next();
          while (!m.done);
          et(a, u, M);
        }
        return;
      }
      throw a = Object.prototype.toString.call(m), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : a));
    }
    typeof m == "string" ? (k = u.blockedSegment, k.lastPushedText = ze(u.blockedSegment.chunks, m, a.responseState, k.lastPushedText)) : typeof m == "number" && (k = u.blockedSegment, k.lastPushedText = ze(u.blockedSegment.chunks, "" + m, a.responseState, k.lastPushedText));
  }
  function et(a, u, m) {
    for (var k = m.length, M = 0; M < k; M++) {
      var P = u.treeContext;
      u.treeContext = wt(P, k, M);
      try {
        Je(a, u, m[M]);
      } finally {
        u.treeContext = P;
      }
    }
  }
  function Je(a, u, m) {
    var k = u.blockedSegment.formatContext, M = u.legacyContext, P = u.context;
    try {
      return Ee(a, u, m);
    } catch (ge) {
      if (Gt(), typeof ge == "object" && ge !== null && typeof ge.then == "function") {
        m = ge;
        var H = u.blockedSegment, K = x(a, H.chunks.length, null, H.formatContext, H.lastPushedText, !0);
        H.children.push(K), H.lastPushedText = !1, a = mr(a, u.node, u.blockedBoundary, K, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, m.then(a, a), u.blockedSegment.formatContext = k, u.legacyContext = M, u.context = P, Be(P);
      } else throw u.blockedSegment.formatContext = k, u.legacyContext = M, u.context = P, Be(P), ge;
    }
  }
  function at(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, Er(this, u, a);
  }
  function br(a, u, m) {
    var k = a.blockedBoundary;
    a.blockedSegment.status = 3, k === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (k.pendingTasks--, k.forceClientRender || (k.forceClientRender = !0, a = m === void 0 ? Error(t(432)) : m, k.errorDigest = u.onError(a), k.parentFlushed && u.clientRenderedBoundaries.push(k)), k.fallbackAbortableTasks.forEach(function(M) {
      return br(M, u, m);
    }), k.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (k = u.onAllReady, k()));
  }
  function Xt(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var m = u.children[0];
      m.id = u.id, m.parentFlushed = !0, m.status === 1 && Xt(a, m);
    } else a.completedSegments.push(u);
  }
  function Er(a, u, m) {
    if (u === null) {
      if (m.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = m;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = It, u = a.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (m.parentFlushed && m.status === 1 && Xt(u, m), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(at, a), u.fallbackAbortableTasks.clear()) : m.parentFlushed && m.status === 1 && (Xt(u, m), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function Hn(a) {
    if (a.status !== 2) {
      var u = Qe, m = Yt.current;
      Yt.current = sr;
      var k = Ke;
      Ke = a.responseState;
      try {
        var M = a.pingedTasks, P;
        for (P = 0; P < M.length; P++) {
          var H = M[P], K = a, ge = H.blockedSegment;
          if (ge.status === 0) {
            Be(H.context);
            try {
              Ee(K, H, H.node), K.responseState.generateStaticMarkup || ge.lastPushedText && ge.textEmbedded && ge.chunks.push("<!-- -->"), H.abortSet.delete(H), ge.status = 1, Er(K, H.blockedBoundary, ge);
            } catch (Pt) {
              if (Gt(), typeof Pt == "object" && Pt !== null && typeof Pt.then == "function") {
                var Se = H.ping;
                Pt.then(Se, Se);
              } else {
                H.abortSet.delete(H), ge.status = 4;
                var Ne = H.blockedBoundary, ot = Pt, Jt = S(K, ot);
                if (Ne === null ? N(K, ot) : (Ne.pendingTasks--, Ne.forceClientRender || (Ne.forceClientRender = !0, Ne.errorDigest = Jt, Ne.parentFlushed && K.clientRenderedBoundaries.push(Ne))), K.allPendingTasks--, K.allPendingTasks === 0) {
                  var Qt = K.onAllReady;
                  Qt();
                }
              }
            } finally {
            }
          }
        }
        M.splice(0, P), a.destination !== null && Qr(a, a.destination);
      } catch (Pt) {
        S(a, Pt), N(a, Pt);
      } finally {
        Ke = k, Yt.current = m, m === sr && Be(u);
      }
    }
  }
  function Pr(a, u, m) {
    switch (m.parentFlushed = !0, m.status) {
      case 0:
        var k = m.id = a.nextSegmentId++;
        return m.lastPushedText = !1, m.textEmbedded = !1, a = a.responseState, u.push('<template id="'), u.push(a.placeholderPrefix), a = k.toString(16), u.push(a), u.push('"></template>');
      case 1:
        m.status = 2;
        var M = !0;
        k = m.chunks;
        var P = 0;
        m = m.children;
        for (var H = 0; H < m.length; H++) {
          for (M = m[H]; P < M.index; P++) u.push(k[P]);
          M = Dr(a, u, M);
        }
        for (; P < k.length - 1; P++) u.push(k[P]);
        return P < k.length && (M = u.push(k[P])), M;
      default:
        throw Error(t(390));
    }
  }
  function Dr(a, u, m) {
    var k = m.boundary;
    if (k === null) return Pr(a, u, m);
    if (k.parentFlushed = !0, k.forceClientRender) return a.responseState.generateStaticMarkup || (k = k.errorDigest, u.push("<!--$!-->"), u.push("<template"), k && (u.push(' data-dgst="'), k = _(k), u.push(k), u.push('"')), u.push("></template>")), Pr(a, u, m), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
    if (0 < k.pendingTasks) {
      k.rootSegmentID = a.nextSegmentId++, 0 < k.completedSegments.length && a.partialBoundaries.push(k);
      var M = a.responseState, P = M.nextSuspenseID++;
      return M = M.boundaryPrefix + P.toString(16), k = k.id = M, Ae(u, a.responseState, k), Pr(a, u, m), u.push("<!--/$-->");
    }
    if (k.byteSize > a.progressiveChunkSize) return k.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(k), Ae(u, a.responseState, k.id), Pr(a, u, m), u.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || u.push("<!--$-->"), m = k.completedSegments, m.length !== 1) throw Error(t(391));
    return Dr(a, u, m[0]), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
  }
  function pn(a, u, m) {
    return xe(u, a.responseState, m.formatContext, m.id), Dr(a, u, m), Xe(u, m.formatContext);
  }
  function fn(a, u, m) {
    for (var k = m.completedSegments, M = 0; M < k.length; M++) hn(a, u, m, k[M]);
    if (k.length = 0, a = a.responseState, k = m.id, m = m.rootSegmentID, u.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? u.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), k === null) throw Error(t(395));
    return m = m.toString(16), u.push(k), u.push('","'), u.push(a.segmentPrefix), u.push(m), u.push('")<\/script>');
  }
  function hn(a, u, m, k) {
    if (k.status === 2) return !0;
    var M = k.id;
    if (M === -1) {
      if ((k.id = m.rootSegmentID) === -1) throw Error(t(392));
      return pn(a, u, k);
    }
    return pn(a, u, k), a = a.responseState, u.push(a.startInlineScript), a.sentCompleteSegmentFunction ? u.push('$RS("') : (a.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(a.segmentPrefix), M = M.toString(16), u.push(M), u.push('","'), u.push(a.placeholderPrefix), u.push(M), u.push('")<\/script>');
  }
  function Qr(a, u) {
    try {
      var m = a.completedRootSegment;
      if (m !== null && a.pendingRootTasks === 0) {
        Dr(a, u, m), a.completedRootSegment = null;
        var k = a.responseState.bootstrapChunks;
        for (m = 0; m < k.length - 1; m++) u.push(k[m]);
        m < k.length && u.push(k[m]);
      }
      var M = a.clientRenderedBoundaries, P;
      for (P = 0; P < M.length; P++) {
        var H = M[P];
        k = u;
        var K = a.responseState, ge = H.id, Se = H.errorDigest, Ne = H.errorMessage, ot = H.errorComponentStack;
        if (k.push(K.startInlineScript), K.sentClientRenderFunction ? k.push('$RX("') : (K.sentClientRenderFunction = !0, k.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ge === null) throw Error(t(395));
        if (k.push(ge), k.push('"'), Se || Ne || ot) {
          k.push(",");
          var Jt = Ce(Se || "");
          k.push(Jt);
        }
        if (Ne || ot) {
          k.push(",");
          var Qt = Ce(Ne || "");
          k.push(Qt);
        }
        if (ot) {
          k.push(",");
          var Pt = Ce(ot);
          k.push(Pt);
        }
        if (!k.push(")<\/script>")) {
          a.destination = null, P++, M.splice(0, P);
          return;
        }
      }
      M.splice(0, P);
      var Lr = a.completedBoundaries;
      for (P = 0; P < Lr.length; P++) if (!fn(a, u, Lr[P])) {
        a.destination = null, P++, Lr.splice(0, P);
        return;
      }
      Lr.splice(0, P);
      var yr = a.partialBoundaries;
      for (P = 0; P < yr.length; P++) {
        var mn = yr[P];
        e: {
          M = a, H = u;
          var Mr = mn.completedSegments;
          for (K = 0; K < Mr.length; K++) if (!hn(M, H, mn, Mr[K])) {
            K++, Mr.splice(0, K);
            var Yn = !1;
            break e;
          }
          Mr.splice(0, K), Yn = !0;
        }
        if (!Yn) {
          a.destination = null, P++, yr.splice(0, P);
          return;
        }
      }
      yr.splice(0, P);
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
  function Vn(a, u) {
    try {
      var m = a.abortableTasks;
      m.forEach(function(k) {
        return br(k, a, u);
      }), m.clear(), a.destination !== null && Qr(a, a.destination);
    } catch (k) {
      S(a, k), N(a, k);
    }
  }
  function Gn() {
  }
  function gn(a, u, m, k) {
    var M = !1, P = null, H = "", K = { push: function(Se) {
      return Se !== null && (H += Se), !0;
    }, destroy: function(Se) {
      M = !0, P = Se;
    } }, ge = !1;
    if (a = gr(a, Fe(m, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Gn, void 0, function() {
      ge = !0;
    }), Hn(a), Vn(a, k), a.status === 1) a.status = 2, K.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = K;
      try {
        Qr(a, K);
      } catch (Se) {
        S(a, Se), N(a, Se);
      }
    }
    if (M) throw P;
    if (!ge) throw Error(t(426));
    return H;
  }
  return $r.renderToNodeStream = function() {
    throw Error(t(207));
  }, $r.renderToStaticMarkup = function(a, u) {
    return gn(a, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, $r.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, $r.renderToString = function(a, u) {
    return gn(a, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, $r.version = "18.3.1", $r;
}
var ca = {}, Zi;
function Zu() {
  if (Zi) return ca;
  Zi = 1;
  var e = gt;
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
  var g = new TextEncoder();
  function b(i) {
    return g.encode(i);
  }
  function f(i) {
    return g.encode(i);
  }
  function A(i, c) {
    typeof i.error == "function" ? i.error(c) : i.close();
  }
  var E = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, _ = {};
  function w(i) {
    return E.call(_, i) ? !0 : E.call($, i) ? !1 : R.test(i) ? _[i] = !0 : ($[i] = !0, !1);
  }
  function I(i, c, h, v, L, D, V) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = v, this.attributeNamespace = L, this.mustUseProperty = h, this.propertyName = i, this.type = c, this.sanitizeURL = D, this.removeEmptyString = V;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    F[i] = new I(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var c = i[0];
    F[c] = new I(c, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    F[i] = new I(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    F[i] = new I(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    F[i] = new I(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    F[i] = new I(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    F[i] = new I(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    F[i] = new I(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    F[i] = new I(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var B = /[\-:]([a-z])/g;
  function X(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var c = i.replace(
      B,
      X
    );
    F[c] = new I(c, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var c = i.replace(B, X);
    F[c] = new I(c, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var c = i.replace(B, X);
    F[c] = new I(c, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    F[i] = new I(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    F[i] = new I(i, 1, !1, i.toLowerCase(), null, !0, !0);
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
  }, T = ["Webkit", "ms", "Moz", "O"];
  Object.keys(G).forEach(function(i) {
    T.forEach(function(c) {
      c = c + i.charAt(0).toUpperCase() + i.substring(1), G[c] = G[i];
    });
  });
  var ue = /["'&<>]/;
  function he(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var c = ue.exec(i);
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
  var Te = /([A-Z])/g, Pe = /^ms-/, $e = Array.isArray, ie = f("<script>"), de = f("<\/script>"), _e = f('<script src="'), Ae = f('<script type="module" src="'), xe = f('" async=""><\/script>'), Xe = /(<\/|<)(s)(cript)/gi;
  function Re(i, c, h, v) {
    return "" + c + (h === "s" ? "\\u0073" : "\\u0053") + v;
  }
  function Ce(i, c, h, v, L) {
    i = i === void 0 ? "" : i, c = c === void 0 ? ie : f('<script nonce="' + he(c) + '">');
    var D = [];
    if (h !== void 0 && D.push(c, b(("" + h).replace(Xe, Re)), de), v !== void 0) for (h = 0; h < v.length; h++) D.push(_e, b(he(v[h])), xe);
    if (L !== void 0) for (v = 0; v < L.length; v++) D.push(Ae, b(he(L[v])), xe);
    return { bootstrapChunks: D, startInlineScript: c, placeholderPrefix: f(i + "P:"), segmentPrefix: f(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Fe(i, c) {
    return { insertionMode: i, selectedValue: c };
  }
  function ze(i) {
    return Fe(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function se(i, c, h) {
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
    return 4 <= i.insertionMode || i.insertionMode === 0 ? Fe(1, null) : i;
  }
  var q = f("<!-- -->");
  function j(i, c, h, v) {
    return c === "" ? v : (v && i.push(q), i.push(b(he(c))), !0);
  }
  var z = /* @__PURE__ */ new Map(), U = f(' style="'), y = f(":"), te = f(";");
  function O(i, c, h) {
    if (typeof h != "object") throw Error(t(62));
    c = !0;
    for (var v in h) if (E.call(h, v)) {
      var L = h[v];
      if (L != null && typeof L != "boolean" && L !== "") {
        if (v.indexOf("--") === 0) {
          var D = b(he(v));
          L = b(he(("" + L).trim()));
        } else {
          D = v;
          var V = z.get(D);
          V !== void 0 || (V = f(he(D.replace(Te, "-$1").toLowerCase().replace(Pe, "-ms-"))), z.set(D, V)), D = V, L = typeof L == "number" ? L === 0 || E.call(G, v) ? b("" + L) : b(L + "px") : b(he(("" + L).trim()));
        }
        c ? (c = !1, i.push(U, D, y, L)) : i.push(te, D, y, L);
      }
    }
    c || i.push(re);
  }
  var oe = f(" "), ee = f('="'), re = f('"'), Y = f('=""');
  function le(i, c, h, v) {
    switch (h) {
      case "style":
        O(i, c, v);
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
            v && i.push(oe, h, Y);
            break;
          case 4:
            v === !0 ? i.push(oe, h, Y) : v !== !1 && i.push(oe, h, ee, b(he(v)), re);
            break;
          case 5:
            isNaN(v) || i.push(oe, h, ee, b(he(v)), re);
            break;
          case 6:
            !isNaN(v) && 1 <= v && i.push(oe, h, ee, b(he(v)), re);
            break;
          default:
            c.sanitizeURL && (v = "" + v), i.push(oe, h, ee, b(he(v)), re);
        }
      } else if (w(h)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = h.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        i.push(oe, b(h), ee, b(he(v)), re);
      }
    }
  }
  var pe = f(">"), ae = f("/>");
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
  var fe = f(' selected=""');
  function He(i, c, h, v) {
    i.push(ve(h));
    var L = h = null, D;
    for (D in c) if (E.call(c, D)) {
      var V = c[D];
      if (V != null) switch (D) {
        case "children":
          h = V;
          break;
        case "dangerouslySetInnerHTML":
          L = V;
          break;
        default:
          le(i, v, D, V);
      }
    }
    return i.push(pe), be(i, L, h), typeof h == "string" ? (i.push(b(he(h))), null) : h;
  }
  var ye = f(`
`), pt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Qe = /* @__PURE__ */ new Map();
  function ve(i) {
    var c = Qe.get(i);
    if (c === void 0) {
      if (!pt.test(i)) throw Error(t(65, i));
      c = f("<" + i), Qe.set(i, c);
    }
    return c;
  }
  var J = f("<!DOCTYPE html>");
  function ce(i, c, h, v, L) {
    switch (c) {
      case "select":
        i.push(ve("select"));
        var D = null, V = null;
        for (je in h) if (E.call(h, je)) {
          var Z = h[je];
          if (Z != null) switch (je) {
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
              le(i, v, je, Z);
          }
        }
        return i.push(pe), be(i, V, D), D;
      case "option":
        V = L.selectedValue, i.push(ve("option"));
        var me = Z = null, De = null, je = null;
        for (D in h) if (E.call(h, D)) {
          var rt = h[D];
          if (rt != null) switch (D) {
            case "children":
              Z = rt;
              break;
            case "selected":
              De = rt;
              break;
            case "dangerouslySetInnerHTML":
              je = rt;
              break;
            case "value":
              me = rt;
            default:
              le(i, v, D, rt);
          }
        }
        if (V != null) if (h = me !== null ? "" + me : ne(Z), $e(V)) {
          for (v = 0; v < V.length; v++)
            if ("" + V[v] === h) {
              i.push(fe);
              break;
            }
        } else "" + V === h && i.push(fe);
        else De && i.push(fe);
        return i.push(pe), be(i, je, Z), Z;
      case "textarea":
        i.push(ve("textarea")), je = V = D = null;
        for (Z in h) if (E.call(h, Z) && (me = h[Z], me != null)) switch (Z) {
          case "children":
            je = me;
            break;
          case "value":
            D = me;
            break;
          case "defaultValue":
            V = me;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            le(i, v, Z, me);
        }
        if (D === null && V !== null && (D = V), i.push(pe), je != null) {
          if (D != null) throw Error(t(92));
          if ($e(je) && 1 < je.length) throw Error(t(93));
          D = "" + je;
        }
        return typeof D == "string" && D[0] === `
` && i.push(ye), D !== null && i.push(b(he("" + D))), null;
      case "input":
        i.push(ve("input")), me = je = Z = D = null;
        for (V in h) if (E.call(h, V) && (De = h[V], De != null)) switch (V) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            me = De;
            break;
          case "defaultValue":
            Z = De;
            break;
          case "checked":
            je = De;
            break;
          case "value":
            D = De;
            break;
          default:
            le(i, v, V, De);
        }
        return je !== null ? le(
          i,
          v,
          "checked",
          je
        ) : me !== null && le(i, v, "checked", me), D !== null ? le(i, v, "value", D) : Z !== null && le(i, v, "value", Z), i.push(ae), null;
      case "menuitem":
        i.push(ve("menuitem"));
        for (var Lt in h) if (E.call(h, Lt) && (D = h[Lt], D != null)) switch (Lt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            le(i, v, Lt, D);
        }
        return i.push(pe), null;
      case "title":
        i.push(ve("title")), D = null;
        for (rt in h) if (E.call(h, rt) && (V = h[rt], V != null)) switch (rt) {
          case "children":
            D = V;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            le(i, v, rt, V);
        }
        return i.push(pe), D;
      case "listing":
      case "pre":
        i.push(ve(c)), V = D = null;
        for (me in h) if (E.call(h, me) && (Z = h[me], Z != null)) switch (me) {
          case "children":
            D = Z;
            break;
          case "dangerouslySetInnerHTML":
            V = Z;
            break;
          default:
            le(i, v, me, Z);
        }
        if (i.push(pe), V != null) {
          if (D != null) throw Error(t(60));
          if (typeof V != "object" || !("__html" in V)) throw Error(t(61));
          h = V.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? i.push(ye, b(h)) : i.push(b("" + h)));
        }
        return typeof D == "string" && D[0] === `
` && i.push(ye), D;
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
        i.push(ve(c));
        for (var Zt in h) if (E.call(h, Zt) && (D = h[Zt], D != null)) switch (Zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            le(i, v, Zt, D);
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
        return L.insertionMode === 0 && i.push(J), He(i, h, c, v);
      default:
        if (c.indexOf("-") === -1 && typeof h.is != "string") return He(i, h, c, v);
        i.push(ve(c)), V = D = null;
        for (De in h) if (E.call(h, De) && (Z = h[De], Z != null)) switch (De) {
          case "children":
            D = Z;
            break;
          case "dangerouslySetInnerHTML":
            V = Z;
            break;
          case "style":
            O(i, v, Z);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            w(De) && typeof Z != "function" && typeof Z != "symbol" && i.push(oe, b(De), ee, b(he(Z)), re);
        }
        return i.push(pe), be(i, V, D), D;
    }
  }
  var Ze = f("</"), mt = f(">"), Be = f('<template id="'), nr = f('"></template>'), Mt = f("<!--$-->"), dr = f('<!--$?--><template id="'), wt = f('"></template>'), yt = f("<!--$!-->"), it = f("<!--/$-->"), bt = f("<template"), qt = f('"'), Wt = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var Ir = f("></template>");
  function lt(i, c, h) {
    if (o(i, dr), h === null) throw Error(t(395));
    return o(i, h), s(i, wt);
  }
  var St = f('<div hidden id="'), ar = f('">'), Ie = f("</div>"), Ht = f('<svg aria-hidden="true" style="display:none" id="'), or = f('">'), ke = f("</svg>"), nt = f('<math aria-hidden="true" style="display:none" id="'), ir = f('">'), kt = f("</math>"), Ft = f('<table hidden id="'), Vt = f('">'), Gt = f("</table>"), Ar = f('<table hidden><tbody id="'), st = f('">'), Nt = f("</tbody></table>"), pr = f('<table hidden><tr id="'), fr = f('">'), jt = f("</tr></table>"), sr = f('<table hidden><colgroup id="'), Ke = f('">'), Yt = f("</colgroup></table>");
  function hr(i, c, h, v) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return o(i, St), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, ar);
      case 2:
        return o(i, Ht), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, or);
      case 3:
        return o(i, nt), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, ir);
      case 4:
        return o(i, Ft), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, Vt);
      case 5:
        return o(i, Ar), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, st);
      case 6:
        return o(i, pr), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, fr);
      case 7:
        return o(
          i,
          sr
        ), o(i, c.segmentPrefix), o(i, b(v.toString(16))), s(i, Ke);
      default:
        throw Error(t(397));
    }
  }
  function It(i, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(i, Ie);
      case 2:
        return s(i, ke);
      case 3:
        return s(i, kt);
      case 4:
        return s(i, Gt);
      case 5:
        return s(i, Nt);
      case 6:
        return s(i, jt);
      case 7:
        return s(i, Yt);
      default:
        throw Error(t(397));
    }
  }
  var gr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), mr = f('$RS("'), x = f('","'), S = f('")<\/script>'), N = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Q = f('$RC("'), we = f('","'), Oe = f('")<\/script>'), Ue = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ee = f('$RX("'), et = f('"'), Je = f(")<\/script>"), at = f(","), br = /[<\u2028\u2029]/g;
  function Xt(i) {
    return JSON.stringify(i).replace(br, function(c) {
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
  var Er = Object.assign, Hn = Symbol.for("react.element"), Pr = Symbol.for("react.portal"), Dr = Symbol.for("react.fragment"), pn = Symbol.for("react.strict_mode"), fn = Symbol.for("react.profiler"), hn = Symbol.for("react.provider"), Qr = Symbol.for("react.context"), Vn = Symbol.for("react.forward_ref"), Gn = Symbol.for("react.suspense"), gn = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), m = Symbol.for("react.scope"), k = Symbol.for("react.debug_trace_mode"), M = Symbol.for("react.legacy_hidden"), P = Symbol.for("react.default_value"), H = Symbol.iterator;
  function K(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case Dr:
        return "Fragment";
      case Pr:
        return "Portal";
      case fn:
        return "Profiler";
      case pn:
        return "StrictMode";
      case Gn:
        return "Suspense";
      case gn:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case Qr:
        return (i.displayName || "Context") + ".Consumer";
      case hn:
        return (i._context.displayName || "Context") + ".Provider";
      case Vn:
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
  var ge = {};
  function Se(i, c) {
    if (i = i.contextTypes, !i) return ge;
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
  function Pt(i, c) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === c.depth ? ot(i, c) : Pt(i, c);
  }
  function Lr(i, c) {
    var h = c.parent;
    if (h === null) throw Error(t(402));
    i.depth === h.depth ? ot(i, h) : Lr(i, h), c.context._currentValue = c.value;
  }
  function yr(i) {
    var c = Ne;
    c !== i && (c === null ? Qt(i) : i === null ? Jt(c) : c.depth === i.depth ? ot(c, i) : c.depth > i.depth ? Pt(c, i) : Lr(c, i), Ne = i);
  }
  var mn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, c) {
    i = i._reactInternals, i.queue !== null && i.queue.push(c);
  }, enqueueReplaceState: function(i, c) {
    i = i._reactInternals, i.replace = !0, i.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Mr(i, c, h, v) {
    var L = i.state !== void 0 ? i.state : null;
    i.updater = mn, i.props = h, i.state = L;
    var D = { queue: [], replace: !1 };
    i._reactInternals = D;
    var V = c.contextType;
    if (i.context = typeof V == "object" && V !== null ? V._currentValue : v, V = c.getDerivedStateFromProps, typeof V == "function" && (V = V(h, L), L = V == null ? L : Er({}, L, V), i.state = L), typeof c.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && mn.enqueueReplaceState(i, i.state, null), D.queue !== null && 0 < D.queue.length) if (c = D.queue, V = D.replace, D.queue = null, D.replace = !1, V && c.length === 1) i.state = c[0];
    else {
      for (D = V ? c[0] : i.state, L = !0, V = V ? 1 : 0; V < c.length; V++) {
        var Z = c[V];
        Z = typeof Z == "function" ? Z.call(i, D, h, v) : Z, Z != null && (L ? (L = !1, D = Er({}, D, Z)) : Er(D, Z));
      }
      i.state = D;
    }
    else D.queue = null;
  }
  var Yn = { id: 1, overflow: "" };
  function _r(i, c, h) {
    var v = i.id;
    i = i.overflow;
    var L = 32 - Xn(v) - 1;
    v &= ~(1 << L), h += 1;
    var D = 32 - Xn(c) + L;
    if (30 < D) {
      var V = L - L % 5;
      return D = (v & (1 << V) - 1).toString(32), v >>= V, L -= V, { id: 1 << 32 - Xn(c) + L | h << L | v, overflow: D + i };
    }
    return { id: 1 << D | h << L | v, overflow: i };
  }
  var Xn = Math.clz32 ? Math.clz32 : au, ru = Math.log, nu = Math.LN2;
  function au(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (ru(i) / nu | 0) | 0;
  }
  function ou(i, c) {
    return i === c && (i !== 0 || 1 / i === 1 / c) || i !== i && c !== c;
  }
  var iu = typeof Object.is == "function" ? Object.is : ou, xr = null, Fa = null, Jn = null, tt = null, bn = !1, Qn = !1, yn = 0, Rr = null, Zn = 0;
  function Fr() {
    if (xr === null) throw Error(t(321));
    return xr;
  }
  function yi() {
    if (0 < Zn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function $a() {
    return tt === null ? Jn === null ? (bn = !1, Jn = tt = yi()) : (bn = !0, tt = Jn) : tt.next === null ? (bn = !1, tt = tt.next = yi()) : (bn = !0, tt = tt.next), tt;
  }
  function Ua() {
    Fa = xr = null, Qn = !1, Jn = null, Zn = 0, tt = Rr = null;
  }
  function xi(i, c) {
    return typeof c == "function" ? c(i) : c;
  }
  function vi(i, c, h) {
    if (xr = Fr(), tt = $a(), bn) {
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
    return i = i === xi ? typeof c == "function" ? c() : c : h !== void 0 ? h(c) : c, tt.memoizedState = i, i = tt.queue = { last: null, dispatch: null }, i = i.dispatch = su.bind(null, xr, i), [tt.memoizedState, i];
  }
  function wi(i, c) {
    if (xr = Fr(), tt = $a(), c = c === void 0 ? null : c, tt !== null) {
      var h = tt.memoizedState;
      if (h !== null && c !== null) {
        var v = h[1];
        e: if (v === null) v = !1;
        else {
          for (var L = 0; L < v.length && L < c.length; L++) if (!iu(c[L], v[L])) {
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
  function su(i, c, h) {
    if (25 <= Zn) throw Error(t(301));
    if (i === xr) if (Qn = !0, i = { action: h, next: null }, Rr === null && (Rr = /* @__PURE__ */ new Map()), h = Rr.get(c), h === void 0) Rr.set(c, i);
    else {
      for (c = h; c.next !== null; ) c = c.next;
      c.next = i;
    }
  }
  function lu() {
    throw Error(t(394));
  }
  function Kn() {
  }
  var Si = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return Fr(), i._currentValue;
  }, useMemo: wi, useReducer: vi, useRef: function(i) {
    xr = Fr(), tt = $a();
    var c = tt.memoizedState;
    return c === null ? (i = { current: i }, tt.memoizedState = i) : c;
  }, useState: function(i) {
    return vi(xi, i);
  }, useInsertionEffect: Kn, useLayoutEffect: function() {
  }, useCallback: function(i, c) {
    return wi(function() {
      return i;
    }, c);
  }, useImperativeHandle: Kn, useEffect: Kn, useDebugValue: Kn, useDeferredValue: function(i) {
    return Fr(), i;
  }, useTransition: function() {
    return Fr(), [!1, lu];
  }, useId: function() {
    var i = Fa.treeContext, c = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - Xn(i) - 1)).toString(32) + c;
    var h = ea;
    if (h === null) throw Error(t(404));
    return c = yn++, i = ":" + h.idPrefix + "R" + i, 0 < c && (i += "H" + c.toString(32)), i + ":";
  }, useMutableSource: function(i, c) {
    return Fr(), c(i._source);
  }, useSyncExternalStore: function(i, c, h) {
    if (h === void 0) throw Error(t(407));
    return h();
  } }, ea = null, za = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function cu(i) {
    return console.error(i), null;
  }
  function xn() {
  }
  function uu(i, c, h, v, L, D, V, Z, me) {
    var De = [], je = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: v === void 0 ? 12800 : v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: je, pingedTasks: De, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? cu : L, onAllReady: D === void 0 ? xn : D, onShellReady: V === void 0 ? xn : V, onShellError: Z === void 0 ? xn : Z, onFatalError: me === void 0 ? xn : me }, h = ta(c, 0, null, h, !1, !1), h.parentFlushed = !0, i = Ba(c, i, null, h, je, ge, null, Yn), De.push(i), c;
  }
  function Ba(i, c, h, v, L, D, V, Z) {
    i.allPendingTasks++, h === null ? i.pendingRootTasks++ : h.pendingTasks++;
    var me = { node: c, ping: function() {
      var De = i.pingedTasks;
      De.push(me), De.length === 1 && Ri(i);
    }, blockedBoundary: h, blockedSegment: v, abortSet: L, legacyContext: D, context: V, treeContext: Z };
    return L.add(me), me;
  }
  function ta(i, c, h, v, L, D) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: h, lastPushedText: L, textEmbedded: D };
  }
  function vn(i, c) {
    if (i = i.onError(c), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function ra(i, c) {
    var h = i.onShellError;
    h(c), h = i.onFatalError, h(c), i.destination !== null ? (i.status = 2, A(i.destination, c)) : (i.status = 1, i.fatalError = c);
  }
  function ki(i, c, h, v, L) {
    for (xr = {}, Fa = c, yn = 0, i = h(v, L); Qn; ) Qn = !1, yn = 0, Zn += 1, tt = null, i = h(v, L);
    return Ua(), i;
  }
  function Ti(i, c, h, v) {
    var L = h.render(), D = v.childContextTypes;
    if (D != null) {
      var V = c.legacyContext;
      if (typeof h.getChildContext != "function") v = V;
      else {
        h = h.getChildContext();
        for (var Z in h) if (!(Z in D)) throw Error(t(108, K(v) || "Unknown", Z));
        v = Er({}, V, h);
      }
      c.legacyContext = v, Dt(i, c, L), c.legacyContext = V;
    } else Dt(i, c, L);
  }
  function Ci(i, c) {
    if (i && i.defaultProps) {
      c = Er({}, c), i = i.defaultProps;
      for (var h in i) c[h] === void 0 && (c[h] = i[h]);
      return c;
    }
    return c;
  }
  function qa(i, c, h, v, L) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      L = Se(h, c.legacyContext);
      var D = h.contextType;
      D = new h(v, typeof D == "object" && D !== null ? D._currentValue : L), Mr(D, h, v, L), Ti(i, c, D, h);
    } else {
      D = Se(h, c.legacyContext), L = ki(i, c, h, v, D);
      var V = yn !== 0;
      if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0) Mr(L, h, v, D), Ti(i, c, L, h);
      else if (V) {
        v = c.treeContext, c.treeContext = _r(v, 1, 0);
        try {
          Dt(i, c, L);
        } finally {
          c.treeContext = v;
        }
      } else Dt(i, c, L);
    }
    else if (typeof h == "string") {
      switch (L = c.blockedSegment, D = ce(L.chunks, h, v, i.responseState, L.formatContext), L.lastPushedText = !1, V = L.formatContext, L.formatContext = se(V, h, v), Wa(i, c, D), L.formatContext = V, h) {
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
          L.chunks.push(Ze, b(h), mt);
      }
      L.lastPushedText = !1;
    } else {
      switch (h) {
        case M:
        case k:
        case pn:
        case fn:
        case Dr:
          Dt(i, c, v.children);
          return;
        case gn:
          Dt(i, c, v.children);
          return;
        case m:
          throw Error(t(343));
        case Gn:
          e: {
            h = c.blockedBoundary, L = c.blockedSegment, D = v.fallback, v = v.children, V = /* @__PURE__ */ new Set();
            var Z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: V, errorDigest: null }, me = ta(i, L.chunks.length, Z, L.formatContext, !1, !1);
            L.children.push(me), L.lastPushedText = !1;
            var De = ta(i, 0, null, L.formatContext, !1, !1);
            De.parentFlushed = !0, c.blockedBoundary = Z, c.blockedSegment = De;
            try {
              if (Wa(
                i,
                c,
                v
              ), De.lastPushedText && De.textEmbedded && De.chunks.push(q), De.status = 1, na(Z, De), Z.pendingTasks === 0) break e;
            } catch (je) {
              De.status = 4, Z.forceClientRender = !0, Z.errorDigest = vn(i, je);
            } finally {
              c.blockedBoundary = h, c.blockedSegment = L;
            }
            c = Ba(i, D, h, me, V, c.legacyContext, c.context, c.treeContext), i.pingedTasks.push(c);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case Vn:
          if (v = ki(i, c, h.render, v, L), yn !== 0) {
            h = c.treeContext, c.treeContext = _r(h, 1, 0);
            try {
              Dt(i, c, v);
            } finally {
              c.treeContext = h;
            }
          } else Dt(i, c, v);
          return;
        case a:
          h = h.type, v = Ci(h, v), qa(i, c, h, v, L);
          return;
        case hn:
          if (L = v.children, h = h._context, v = v.value, D = h._currentValue, h._currentValue = v, V = Ne, Ne = v = { parent: V, depth: V === null ? 0 : V.depth + 1, context: h, parentValue: D, value: v }, c.context = v, Dt(i, c, L), i = Ne, i === null) throw Error(t(403));
          v = i.parentValue, i.context._currentValue = v === P ? i.context._defaultValue : v, i = Ne = i.parent, c.context = i;
          return;
        case Qr:
          v = v.children, v = v(h._currentValue), Dt(i, c, v);
          return;
        case u:
          L = h._init, h = L(h._payload), v = Ci(h, v), qa(i, c, h, v, void 0);
          return;
      }
      throw Error(t(
        130,
        h == null ? h : typeof h,
        ""
      ));
    }
  }
  function Dt(i, c, h) {
    if (c.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Hn:
          qa(i, c, h.type, h.props, h.ref);
          return;
        case Pr:
          throw Error(t(257));
        case u:
          var v = h._init;
          h = v(h._payload), Dt(i, c, h);
          return;
      }
      if ($e(h)) {
        Ai(i, c, h);
        return;
      }
      if (h === null || typeof h != "object" ? v = null : (v = H && h[H] || h["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(h))) {
        if (h = v.next(), !h.done) {
          var L = [];
          do
            L.push(h.value), h = v.next();
          while (!h.done);
          Ai(i, c, L);
        }
        return;
      }
      throw i = Object.prototype.toString.call(h), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : i));
    }
    typeof h == "string" ? (v = c.blockedSegment, v.lastPushedText = j(c.blockedSegment.chunks, h, i.responseState, v.lastPushedText)) : typeof h == "number" && (v = c.blockedSegment, v.lastPushedText = j(c.blockedSegment.chunks, "" + h, i.responseState, v.lastPushedText));
  }
  function Ai(i, c, h) {
    for (var v = h.length, L = 0; L < v; L++) {
      var D = c.treeContext;
      c.treeContext = _r(D, v, L);
      try {
        Wa(i, c, h[L]);
      } finally {
        c.treeContext = D;
      }
    }
  }
  function Wa(i, c, h) {
    var v = c.blockedSegment.formatContext, L = c.legacyContext, D = c.context;
    try {
      return Dt(i, c, h);
    } catch (me) {
      if (Ua(), typeof me == "object" && me !== null && typeof me.then == "function") {
        h = me;
        var V = c.blockedSegment, Z = ta(i, V.chunks.length, null, V.formatContext, V.lastPushedText, !0);
        V.children.push(Z), V.lastPushedText = !1, i = Ba(i, c.node, c.blockedBoundary, Z, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, h.then(i, i), c.blockedSegment.formatContext = v, c.legacyContext = L, c.context = D, yr(D);
      } else throw c.blockedSegment.formatContext = v, c.legacyContext = L, c.context = D, yr(D), me;
    }
  }
  function du(i) {
    var c = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, _i(this, c, i);
  }
  function Ei(i, c, h) {
    var v = i.blockedBoundary;
    i.blockedSegment.status = 3, v === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, i = h === void 0 ? Error(t(432)) : h, v.errorDigest = c.onError(i), v.parentFlushed && c.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(L) {
      return Ei(L, c, h);
    }), v.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (v = c.onAllReady, v()));
  }
  function na(i, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var h = c.children[0];
      h.id = c.id, h.parentFlushed = !0, h.status === 1 && na(i, h);
    } else i.completedSegments.push(c);
  }
  function _i(i, c, h) {
    if (c === null) {
      if (h.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = h;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = xn, c = i.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && na(c, h), c.parentFlushed && i.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(du, i), c.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (na(c, h), c.completedSegments.length === 1 && c.parentFlushed && i.partialBoundaries.push(c)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Ri(i) {
    if (i.status !== 2) {
      var c = Ne, h = za.current;
      za.current = Si;
      var v = ea;
      ea = i.responseState;
      try {
        var L = i.pingedTasks, D;
        for (D = 0; D < L.length; D++) {
          var V = L[D], Z = i, me = V.blockedSegment;
          if (me.status === 0) {
            yr(V.context);
            try {
              Dt(Z, V, V.node), me.lastPushedText && me.textEmbedded && me.chunks.push(q), V.abortSet.delete(V), me.status = 1, _i(Z, V.blockedBoundary, me);
            } catch (Kt) {
              if (Ua(), typeof Kt == "object" && Kt !== null && typeof Kt.then == "function") {
                var De = V.ping;
                Kt.then(De, De);
              } else {
                V.abortSet.delete(V), me.status = 4;
                var je = V.blockedBoundary, rt = Kt, Lt = vn(Z, rt);
                if (je === null ? ra(Z, rt) : (je.pendingTasks--, je.forceClientRender || (je.forceClientRender = !0, je.errorDigest = Lt, je.parentFlushed && Z.clientRenderedBoundaries.push(je))), Z.allPendingTasks--, Z.allPendingTasks === 0) {
                  var Zt = Z.onAllReady;
                  Zt();
                }
              }
            } finally {
            }
          }
        }
        L.splice(0, D), i.destination !== null && Ha(i, i.destination);
      } catch (Kt) {
        vn(i, Kt), ra(i, Kt);
      } finally {
        ea = v, za.current = h, h === Si && yr(c);
      }
    }
  }
  function aa(i, c, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var v = h.id = i.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, i = i.responseState, o(c, Be), o(c, i.placeholderPrefix), i = b(v.toString(16)), o(c, i), s(c, nr);
      case 1:
        h.status = 2;
        var L = !0;
        v = h.chunks;
        var D = 0;
        h = h.children;
        for (var V = 0; V < h.length; V++) {
          for (L = h[V]; D < L.index; D++) o(c, v[D]);
          L = oa(i, c, L);
        }
        for (; D < v.length - 1; D++) o(c, v[D]);
        return D < v.length && (L = s(c, v[D])), L;
      default:
        throw Error(t(390));
    }
  }
  function oa(i, c, h) {
    var v = h.boundary;
    if (v === null) return aa(i, c, h);
    if (v.parentFlushed = !0, v.forceClientRender) v = v.errorDigest, s(c, yt), o(c, bt), v && (o(c, Wt), o(c, b(he(v))), o(c, qt)), s(c, Ir), aa(i, c, h);
    else if (0 < v.pendingTasks) {
      v.rootSegmentID = i.nextSegmentId++, 0 < v.completedSegments.length && i.partialBoundaries.push(v);
      var L = i.responseState, D = L.nextSuspenseID++;
      L = f(L.boundaryPrefix + D.toString(16)), v = v.id = L, lt(c, i.responseState, v), aa(i, c, h);
    } else if (v.byteSize > i.progressiveChunkSize) v.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(v), lt(c, i.responseState, v.id), aa(i, c, h);
    else {
      if (s(c, Mt), h = v.completedSegments, h.length !== 1) throw Error(t(391));
      oa(i, c, h[0]);
    }
    return s(c, it);
  }
  function Oi(i, c, h) {
    return hr(c, i.responseState, h.formatContext, h.id), oa(i, c, h), It(c, h.formatContext);
  }
  function Ni(i, c, h) {
    for (var v = h.completedSegments, L = 0; L < v.length; L++) ji(i, c, h, v[L]);
    if (v.length = 0, i = i.responseState, v = h.id, h = h.rootSegmentID, o(c, i.startInlineScript), i.sentCompleteBoundaryFunction ? o(c, Q) : (i.sentCompleteBoundaryFunction = !0, o(c, N)), v === null) throw Error(t(395));
    return h = b(h.toString(16)), o(c, v), o(c, we), o(c, i.segmentPrefix), o(c, h), s(c, Oe);
  }
  function ji(i, c, h, v) {
    if (v.status === 2) return !0;
    var L = v.id;
    if (L === -1) {
      if ((v.id = h.rootSegmentID) === -1) throw Error(t(392));
      return Oi(i, c, v);
    }
    return Oi(i, c, v), i = i.responseState, o(c, i.startInlineScript), i.sentCompleteSegmentFunction ? o(c, mr) : (i.sentCompleteSegmentFunction = !0, o(c, gr)), o(c, i.segmentPrefix), L = b(L.toString(16)), o(c, L), o(c, x), o(c, i.placeholderPrefix), o(c, L), s(c, S);
  }
  function Ha(i, c) {
    r = new Uint8Array(512), n = 0;
    try {
      var h = i.completedRootSegment;
      if (h !== null && i.pendingRootTasks === 0) {
        oa(i, c, h), i.completedRootSegment = null;
        var v = i.responseState.bootstrapChunks;
        for (h = 0; h < v.length - 1; h++) o(c, v[h]);
        h < v.length && s(c, v[h]);
      }
      var L = i.clientRenderedBoundaries, D;
      for (D = 0; D < L.length; D++) {
        var V = L[D];
        v = c;
        var Z = i.responseState, me = V.id, De = V.errorDigest, je = V.errorMessage, rt = V.errorComponentStack;
        if (o(v, Z.startInlineScript), Z.sentClientRenderFunction ? o(v, Ee) : (Z.sentClientRenderFunction = !0, o(
          v,
          Ue
        )), me === null) throw Error(t(395));
        o(v, me), o(v, et), (De || je || rt) && (o(v, at), o(v, b(Xt(De || "")))), (je || rt) && (o(v, at), o(v, b(Xt(je || "")))), rt && (o(v, at), o(v, b(Xt(rt)))), s(v, Je);
      }
      L.splice(0, D);
      var Lt = i.completedBoundaries;
      for (D = 0; D < Lt.length; D++) Ni(i, c, Lt[D]);
      Lt.splice(0, D), p(c), r = new Uint8Array(512), n = 0;
      var Zt = i.partialBoundaries;
      for (D = 0; D < Zt.length; D++) {
        var Kt = Zt[D];
        e: {
          L = i, V = c;
          var ia = Kt.completedSegments;
          for (Z = 0; Z < ia.length; Z++) if (!ji(
            L,
            V,
            Kt,
            ia[Z]
          )) {
            Z++, ia.splice(0, Z);
            var Pi = !1;
            break e;
          }
          ia.splice(0, Z), Pi = !0;
        }
        if (!Pi) {
          i.destination = null, D++, Zt.splice(0, D);
          return;
        }
      }
      Zt.splice(0, D);
      var Va = i.completedBoundaries;
      for (D = 0; D < Va.length; D++) Ni(i, c, Va[D]);
      Va.splice(0, D);
    } finally {
      p(c), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && c.close();
    }
  }
  function Ii(i, c) {
    try {
      var h = i.abortableTasks;
      h.forEach(function(v) {
        return Ei(v, i, c);
      }), h.clear(), i.destination !== null && Ha(i, i.destination);
    } catch (v) {
      vn(i, v), ra(i, v);
    }
  }
  return ca.renderToReadableStream = function(i, c) {
    return new Promise(function(h, v) {
      var L, D, V = new Promise(function(je, rt) {
        D = je, L = rt;
      }), Z = uu(i, Ce(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), ze(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, D, function() {
        var je = new ReadableStream({ type: "bytes", pull: function(rt) {
          if (Z.status === 1) Z.status = 2, A(rt, Z.fatalError);
          else if (Z.status !== 2 && Z.destination === null) {
            Z.destination = rt;
            try {
              Ha(Z, rt);
            } catch (Lt) {
              vn(Z, Lt), ra(Z, Lt);
            }
          }
        }, cancel: function() {
          Ii(Z);
        } }, { highWaterMark: 0 });
        je.allReady = V, h(je);
      }, function(je) {
        V.catch(function() {
        }), v(je);
      }, L);
      if (c && c.signal) {
        var me = c.signal, De = function() {
          Ii(Z, me.reason), me.removeEventListener("abort", De);
        };
        me.addEventListener("abort", De);
      }
      Ri(Z);
    });
  }, ca.version = "18.3.1", ca;
}
var cn, dl;
cn = Qu(), dl = Zu();
cn.version;
cn.renderToString;
cn.renderToStaticMarkup;
cn.renderToNodeStream;
cn.renderToStaticNodeStream;
dl.renderToReadableStream;
const Ku = "staticMarkup";
function ed() {
  const e = hu().indexOf(Ku) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const Xr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = ed(), { onClick: o, ...s } = r.props;
  if (n)
    return gt.cloneElement(r, {
      ...s,
      onClick: (b) => (ul(e), o ? o(b) : !0)
    });
  let p = "";
  ["input", "header", "header-input"].includes(t) && (p = `-${t}`);
  const g = {
    [`data-ga${p}`]: e.text,
    [`data-ga${p}-name`]: e.name,
    [`data-ga${p}-event`]: e.event,
    [`data-ga${p}-action`]: e.action,
    [`data-ga${p}-type`]: e.type,
    [`data-ga${p}-region`]: e.region,
    [`data-ga${p}-section`]: e.section,
    [`data-ga${p}-component`]: e.component
  };
  return gt.cloneElement(r, {
    ...s,
    onClick: o,
    ...g
  });
}, pl = ({ id: e, item: t, openCard: r, onClick: n, gaData: o }) => {
  var s, p, g, b, f, A;
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
          Xr,
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
                onClick: ($) => n($, e),
                children: [
                  (p = t.content) != null && p.icon ? /* @__PURE__ */ W.jsxs("span", { className: "accordion-icon", children: [
                    /* @__PURE__ */ W.jsx(
                      "i",
                      {
                        className: `${(g = t.content.icon) == null ? void 0 : g[0]} fa-${(b = t.content.icon) == null ? void 0 : b[1]} me-2`
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
pl.propTypes = {
  id: l.number,
  item: nl,
  openCard: l.number,
  onClick: l.func,
  // eslint-disable-next-line react/forbid-prop-types
  gaData: l.object
};
const td = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, Ho = ({ cards: e, openedCard: t }) => {
  const [r, n] = ut(t), o = (s, p) => {
    s.preventDefault(), n(r !== p ? p : null);
  };
  return /* @__PURE__ */ W.jsx("div", { className: "accordion", children: e == null ? void 0 : e.map(
    (s, p) => s.content.body && s.content.header && /* @__PURE__ */ W.jsx(
      pl,
      {
        id: p + 1,
        item: s,
        openCard: r,
        onClick: o,
        gaData: td
      },
      p + 1
    )
  ) });
};
Ho.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: l.arrayOf(nl).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: l.number
};
const rd = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Tr = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  block: o,
  color: s,
  disabled: p,
  element: g,
  href: b,
  icon: f,
  innerRef: A,
  onClick: E,
  size: R,
  classes: $,
  target: _,
  ...w
}) => {
  const I = ct("btn", {
    [`btn-${s}`]: !0,
    "btn-md": R === "small",
    "btn-sm": R === "xsmall",
    "btn-block": o,
    disabled: p
  });
  let F = g;
  return b && g === "button" && (F = "a"), /* @__PURE__ */ W.jsx(
    Xr,
    {
      gaData: {
        ...rd,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ W.jsxs(
        F,
        {
          type: F === "button" && E ? "button" : void 0,
          ...w,
          className: ct($) || I,
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
Tr.defaultProps = {
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
var fl = { exports: {} }, Ve = {}, Ki;
function nd() {
  if (Ki) return Ve;
  Ki = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), $ = Symbol.for("react.client.reference");
  function _(w) {
    if (typeof w == "object" && w !== null) {
      var I = w.$$typeof;
      switch (I) {
        case e:
          switch (w = w.type, w) {
            case r:
            case o:
            case n:
            case b:
            case f:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case p:
                case g:
                case E:
                case A:
                  return w;
                case s:
                  return w;
                default:
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  return Ve.ContextConsumer = s, Ve.ContextProvider = p, Ve.Element = e, Ve.ForwardRef = g, Ve.Fragment = r, Ve.Lazy = E, Ve.Memo = A, Ve.Portal = t, Ve.Profiler = o, Ve.StrictMode = n, Ve.Suspense = b, Ve.SuspenseList = f, Ve.isContextConsumer = function(w) {
    return _(w) === s;
  }, Ve.isContextProvider = function(w) {
    return _(w) === p;
  }, Ve.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Ve.isForwardRef = function(w) {
    return _(w) === g;
  }, Ve.isFragment = function(w) {
    return _(w) === r;
  }, Ve.isLazy = function(w) {
    return _(w) === E;
  }, Ve.isMemo = function(w) {
    return _(w) === A;
  }, Ve.isPortal = function(w) {
    return _(w) === t;
  }, Ve.isProfiler = function(w) {
    return _(w) === o;
  }, Ve.isStrictMode = function(w) {
    return _(w) === n;
  }, Ve.isSuspense = function(w) {
    return _(w) === b;
  }, Ve.isSuspenseList = function(w) {
    return _(w) === f;
  }, Ve.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === o || w === n || w === b || w === f || w === R || typeof w == "object" && w !== null && (w.$$typeof === E || w.$$typeof === A || w.$$typeof === p || w.$$typeof === s || w.$$typeof === g || w.$$typeof === $ || w.getModuleId !== void 0);
  }, Ve.typeOf = _, Ve;
}
fl.exports = nd();
var hl = fl.exports;
function ad(e) {
  function t(q, j, z, U, y) {
    for (var te = 0, O = 0, oe = 0, ee = 0, re, Y, le = 0, pe = 0, ae, be = ae = re = 0, ne = 0, fe = 0, He = 0, ye = 0, pt = z.length, Qe = pt - 1, ve, J = "", ce = "", Ze = "", mt = "", Be; ne < pt; ) {
      if (Y = z.charCodeAt(ne), ne === Qe && O + ee + oe + te !== 0 && (O !== 0 && (Y = O === 47 ? 10 : 47), ee = oe = te = 0, pt++, Qe++), O + ee + oe + te === 0) {
        if (ne === Qe && (0 < fe && (J = J.replace(R, "")), 0 < J.trim().length)) {
          switch (Y) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += z.charAt(ne);
          }
          Y = 59;
        }
        switch (Y) {
          case 123:
            for (J = J.trim(), re = J.charCodeAt(0), ae = 1, ye = ++ne; ne < pt; ) {
              switch (Y = z.charCodeAt(ne)) {
                case 123:
                  ae++;
                  break;
                case 125:
                  ae--;
                  break;
                case 47:
                  switch (Y = z.charCodeAt(ne + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (be = ne + 1; be < Qe; ++be)
                          switch (z.charCodeAt(be)) {
                            case 47:
                              if (Y === 42 && z.charCodeAt(be - 1) === 42 && ne + 2 !== be) {
                                ne = be + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Y === 47) {
                                ne = be + 1;
                                break e;
                              }
                          }
                        ne = be;
                      }
                  }
                  break;
                case 91:
                  Y++;
                case 40:
                  Y++;
                case 34:
                case 39:
                  for (; ne++ < Qe && z.charCodeAt(ne) !== Y; )
                    ;
              }
              if (ae === 0) break;
              ne++;
            }
            switch (ae = z.substring(ye, ne), re === 0 && (re = (J = J.replace(E, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < fe && (J = J.replace(R, "")), Y = J.charCodeAt(1), Y) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = j;
                    break;
                  default:
                    fe = Xe;
                }
                if (ae = t(j, fe, ae, Y, y + 1), ye = ae.length, 0 < Ce && (fe = r(Xe, J, He), Be = g(3, ae, fe, j, _e, de, ye, Y, y, U), J = fe.join(""), Be !== void 0 && (ye = (ae = Be.trim()).length) === 0 && (Y = 0, ae = "")), 0 < ye) switch (Y) {
                  case 115:
                    J = J.replace(ue, p);
                  case 100:
                  case 109:
                  case 45:
                    ae = J + "{" + ae + "}";
                    break;
                  case 107:
                    J = J.replace(B, "$1 $2"), ae = J + "{" + ae + "}", ae = xe === 1 || xe === 2 && s("@" + ae, 3) ? "@-webkit-" + ae + "@" + ae : "@" + ae;
                    break;
                  default:
                    ae = J + ae, U === 112 && (ae = (ce += ae, ""));
                }
                else ae = "";
                break;
              default:
                ae = t(j, r(j, J, He), ae, U, y + 1);
            }
            Ze += ae, ae = He = fe = be = re = 0, J = "", Y = z.charCodeAt(++ne);
            break;
          case 125:
          case 59:
            if (J = (0 < fe ? J.replace(R, "") : J).trim(), 1 < (ye = J.length)) switch (be === 0 && (re = J.charCodeAt(0), re === 45 || 96 < re && 123 > re) && (ye = (J = J.replace(" ", ":")).length), 0 < Ce && (Be = g(1, J, j, q, _e, de, ce.length, U, y, U)) !== void 0 && (ye = (J = Be.trim()).length) === 0 && (J = "\0\0"), re = J.charCodeAt(0), Y = J.charCodeAt(1), re) {
              case 0:
                break;
              case 64:
                if (Y === 105 || Y === 99) {
                  mt += J + z.charAt(ne);
                  break;
                }
              default:
                J.charCodeAt(ye - 1) !== 58 && (ce += o(J, re, Y, J.charCodeAt(2)));
            }
            He = fe = be = re = 0, J = "", Y = z.charCodeAt(++ne);
        }
      }
      switch (Y) {
        case 13:
        case 10:
          O === 47 ? O = 0 : 1 + re === 0 && U !== 107 && 0 < J.length && (fe = 1, J += "\0"), 0 < Ce * ze && g(0, J, j, q, _e, de, ce.length, U, y, U), de = 1, _e++;
          break;
        case 59:
        case 125:
          if (O + ee + oe + te === 0) {
            de++;
            break;
          }
        default:
          switch (de++, ve = z.charAt(ne), Y) {
            case 9:
            case 32:
              if (ee + te + O === 0) switch (le) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ve = "";
                  break;
                default:
                  Y !== 32 && (ve = " ");
              }
              break;
            case 0:
              ve = "\\0";
              break;
            case 12:
              ve = "\\f";
              break;
            case 11:
              ve = "\\v";
              break;
            case 38:
              ee + O + te === 0 && (fe = He = 1, ve = "\f" + ve);
              break;
            case 108:
              if (ee + O + te + Ae === 0 && 0 < be) switch (ne - be) {
                case 2:
                  le === 112 && z.charCodeAt(ne - 3) === 58 && (Ae = le);
                case 8:
                  pe === 111 && (Ae = pe);
              }
              break;
            case 58:
              ee + O + te === 0 && (be = ne);
              break;
            case 44:
              O + oe + ee + te === 0 && (fe = 1, ve += "\r");
              break;
            case 34:
            case 39:
              O === 0 && (ee = ee === Y ? 0 : ee === 0 ? Y : ee);
              break;
            case 91:
              ee + O + oe === 0 && te++;
              break;
            case 93:
              ee + O + oe === 0 && te--;
              break;
            case 41:
              ee + O + te === 0 && oe--;
              break;
            case 40:
              if (ee + O + te === 0) {
                if (re === 0) switch (2 * le + 3 * pe) {
                  case 533:
                    break;
                  default:
                    re = 1;
                }
                oe++;
              }
              break;
            case 64:
              O + oe + ee + te + be + ae === 0 && (ae = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + te + oe)) switch (O) {
                case 0:
                  switch (2 * Y + 3 * z.charCodeAt(ne + 1)) {
                    case 235:
                      O = 47;
                      break;
                    case 220:
                      ye = ne, O = 42;
                  }
                  break;
                case 42:
                  Y === 47 && le === 42 && ye + 2 !== ne && (z.charCodeAt(ye + 2) === 33 && (ce += z.substring(ye, ne + 1)), ve = "", O = 0);
              }
          }
          O === 0 && (J += ve);
      }
      pe = le, le = Y, ne++;
    }
    if (ye = ce.length, 0 < ye) {
      if (fe = j, 0 < Ce && (Be = g(2, ce, fe, q, _e, de, ye, U, y, U), Be !== void 0 && (ce = Be).length === 0)) return mt + ce + Ze;
      if (ce = fe.join(",") + "{" + ce + "}", xe * Ae !== 0) {
        switch (xe !== 2 || s(ce, 2) || (Ae = 0), Ae) {
          case 111:
            ce = ce.replace(G, ":-moz-$1") + ce;
            break;
          case 112:
            ce = ce.replace(X, "::-webkit-input-$1") + ce.replace(X, "::-moz-$1") + ce.replace(X, ":-ms-input-$1") + ce;
        }
        Ae = 0;
      }
    }
    return mt + ce + Ze;
  }
  function r(q, j, z) {
    var U = j.trim().split(I);
    j = U;
    var y = U.length, te = q.length;
    switch (te) {
      case 0:
      case 1:
        var O = 0;
        for (q = te === 0 ? "" : q[0] + " "; O < y; ++O)
          j[O] = n(q, j[O], z).trim();
        break;
      default:
        var oe = O = 0;
        for (j = []; O < y; ++O)
          for (var ee = 0; ee < te; ++ee)
            j[oe++] = n(q[ee] + " ", U[O], z).trim();
    }
    return j;
  }
  function n(q, j, z) {
    var U = j.charCodeAt(0);
    switch (33 > U && (U = (j = j.trim()).charCodeAt(0)), U) {
      case 38:
        return j.replace(F, "$1" + q.trim());
      case 58:
        return q.trim() + j.replace(F, "$1" + q.trim());
      default:
        if (0 < 1 * z && 0 < j.indexOf("\f")) return j.replace(F, (q.charCodeAt(0) === 58 ? "" : "$1") + q.trim());
    }
    return q + j;
  }
  function o(q, j, z, U) {
    var y = q + ";", te = 2 * j + 3 * z + 4 * U;
    if (te === 944) {
      q = y.indexOf(":", 9) + 1;
      var O = y.substring(q, y.length - 1).trim();
      return O = y.substring(0, q).trim() + O + ";", xe === 1 || xe === 2 && s(O, 1) ? "-webkit-" + O + O : O;
    }
    if (xe === 0 || xe === 2 && !s(y, 1)) return y;
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
        if (0 < y.indexOf("image-set(", 11)) return y.replace(ie, "$1-webkit-$2") + y;
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
        return O = y.substring(y.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + O + "-webkit-" + y + "-ms-flex-pack" + O + y;
      case 1005:
        return _.test(y) ? y.replace($, ":-webkit-") + y.replace($, ":-moz-") + y : y;
      case 1e3:
        switch (O = y.substring(13).trim(), j = O.indexOf("-") + 1, O.charCodeAt(0) + O.charCodeAt(j)) {
          case 226:
            O = y.replace(T, "tb");
            break;
          case 232:
            O = y.replace(T, "tb-rl");
            break;
          case 220:
            O = y.replace(T, "lr");
            break;
          default:
            return y;
        }
        return "-webkit-" + y + "-ms-" + O + y;
      case 1017:
        if (y.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (j = (y = q).length - 10, O = (y.charCodeAt(j) === 33 ? y.substring(0, j) : y).substring(q.indexOf(":", 7) + 1).trim(), te = O.charCodeAt(0) + (O.charCodeAt(7) | 0)) {
          case 203:
            if (111 > O.charCodeAt(8)) break;
          case 115:
            y = y.replace(O, "-webkit-" + O) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(O, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + y.replace(O, "-webkit-" + O) + ";" + y.replace(O, "-ms-" + O + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return O = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + O + "-ms-flex-" + O + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(Te, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(Te, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if ($e.test(q) === !0) return (O = q.substring(q.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(q.replace("stretch", "fill-available"), j, z, U).replace(":fill-available", ":stretch") : y.replace(O, "-webkit-" + O) + y.replace(O, "-moz-" + O.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, z + U === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(q, j) {
    var z = q.indexOf(j === 1 ? ":" : "{"), U = q.substring(0, j !== 3 ? z : 10);
    return z = q.substring(z + 1, q.length - 1), Fe(j !== 2 ? U : U.replace(Pe, "$1"), z, j);
  }
  function p(q, j) {
    var z = o(j, j.charCodeAt(0), j.charCodeAt(1), j.charCodeAt(2));
    return z !== j + ";" ? z.replace(he, " or ($1)").substring(4) : "(" + j + ")";
  }
  function g(q, j, z, U, y, te, O, oe, ee, re) {
    for (var Y = 0, le = j, pe; Y < Ce; ++Y)
      switch (pe = Re[Y].call(A, q, le, z, U, y, te, O, oe, ee, re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          le = pe;
      }
    if (le !== j) return le;
  }
  function b(q) {
    switch (q) {
      case void 0:
      case null:
        Ce = Re.length = 0;
        break;
      default:
        if (typeof q == "function") Re[Ce++] = q;
        else if (typeof q == "object") for (var j = 0, z = q.length; j < z; ++j)
          b(q[j]);
        else ze = !!q | 0;
    }
    return b;
  }
  function f(q) {
    return q = q.prefix, q !== void 0 && (Fe = null, q ? typeof q != "function" ? xe = 1 : (xe = 2, Fe = q) : xe = 0), f;
  }
  function A(q, j) {
    var z = q;
    if (33 > z.charCodeAt(0) && (z = z.trim()), se = z, z = [se], 0 < Ce) {
      var U = g(-1, j, z, z, _e, de, 0, 0, 0, 0);
      U !== void 0 && typeof U == "string" && (j = U);
    }
    var y = t(Xe, z, j, 0, 0);
    return 0 < Ce && (U = g(-2, y, z, z, _e, de, y.length, 0, 0, 0), U !== void 0 && (y = U)), se = "", Ae = 0, de = _e = 1, y;
  }
  var E = /^\0+/g, R = /[\0\r\f]/g, $ = /: */g, _ = /zoo|gra/, w = /([,: ])(transform)/g, I = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, B = /@(k\w+)\s*(\S*)\s*/, X = /::(place)/g, G = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, ue = /\(\s*(.*)\s*\)/g, he = /([\s\S]*?);/g, Te = /-self|flex-/g, Pe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, $e = /stretch|:\s*\w+\-(?:conte|avail)/, ie = /([^-])(image-set\()/, de = 1, _e = 1, Ae = 0, xe = 1, Xe = [], Re = [], Ce = 0, Fe = null, ze = 0, se = "";
  return A.use = b, A.set = f, e !== void 0 && f(e), A;
}
var od = {
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
function id(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var sd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, es = /* @__PURE__ */ id(
  function(e) {
    return sd.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), gl = { exports: {} }, qe = {}, ts;
function ld() {
  if (ts) return qe;
  ts = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, g = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, A = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
  function X(T) {
    if (typeof T == "object" && T !== null) {
      var ue = T.$$typeof;
      switch (ue) {
        case t:
          switch (T = T.type, T) {
            case b:
            case f:
            case n:
            case s:
            case o:
            case E:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case g:
                case A:
                case _:
                case $:
                case p:
                  return T;
                default:
                  return ue;
              }
          }
        case r:
          return ue;
      }
    }
  }
  function G(T) {
    return X(T) === f;
  }
  return qe.AsyncMode = b, qe.ConcurrentMode = f, qe.ContextConsumer = g, qe.ContextProvider = p, qe.Element = t, qe.ForwardRef = A, qe.Fragment = n, qe.Lazy = _, qe.Memo = $, qe.Portal = r, qe.Profiler = s, qe.StrictMode = o, qe.Suspense = E, qe.isAsyncMode = function(T) {
    return G(T) || X(T) === b;
  }, qe.isConcurrentMode = G, qe.isContextConsumer = function(T) {
    return X(T) === g;
  }, qe.isContextProvider = function(T) {
    return X(T) === p;
  }, qe.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, qe.isForwardRef = function(T) {
    return X(T) === A;
  }, qe.isFragment = function(T) {
    return X(T) === n;
  }, qe.isLazy = function(T) {
    return X(T) === _;
  }, qe.isMemo = function(T) {
    return X(T) === $;
  }, qe.isPortal = function(T) {
    return X(T) === r;
  }, qe.isProfiler = function(T) {
    return X(T) === s;
  }, qe.isStrictMode = function(T) {
    return X(T) === o;
  }, qe.isSuspense = function(T) {
    return X(T) === E;
  }, qe.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === n || T === f || T === s || T === o || T === E || T === R || typeof T == "object" && T !== null && (T.$$typeof === _ || T.$$typeof === $ || T.$$typeof === p || T.$$typeof === g || T.$$typeof === A || T.$$typeof === I || T.$$typeof === F || T.$$typeof === B || T.$$typeof === w);
  }, qe.typeOf = X, qe;
}
gl.exports = ld();
var cd = gl.exports, Vo = cd, ud = {
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
}, dd = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, pd = {
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
}, Go = {};
Go[Vo.ForwardRef] = pd;
Go[Vo.Memo] = ml;
function rs(e) {
  return Vo.isMemo(e) ? ml : Go[e.$$typeof] || ud;
}
var fd = Object.defineProperty, hd = Object.getOwnPropertyNames, ns = Object.getOwnPropertySymbols, gd = Object.getOwnPropertyDescriptor, md = Object.getPrototypeOf, as = Object.prototype;
function bl(e, t, r) {
  if (typeof t != "string") {
    if (as) {
      var n = md(t);
      n && n !== as && bl(e, n, r);
    }
    var o = hd(t);
    ns && (o = o.concat(ns(t)));
    for (var s = rs(e), p = rs(t), g = 0; g < o.length; ++g) {
      var b = o[g];
      if (!dd[b] && !(r && r[b]) && !(p && p[b]) && !(s && s[b])) {
        var f = gd(t, b);
        try {
          fd(e, b, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var bd = bl;
const yd = /* @__PURE__ */ qo(bd);
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
var os = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, So = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !hl.typeOf(e);
}, ka = Object.freeze([]), Or = Object.freeze({});
function Fn(e) {
  return typeof e == "function";
}
function is(e) {
  return e.displayName || e.name || "Component";
}
function Yo(e) {
  return e && typeof e.styledComponentId == "string";
}
var nn = typeof xt < "u" && xt.env !== void 0 && (xt.env.REACT_APP_SC_ATTR || xt.env.SC_ATTR) || "data-styled", Xo = typeof window < "u" && "HTMLElement" in window, xd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof xt < "u" && xt.env !== void 0 && (xt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && xt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? xt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && xt.env.REACT_APP_SC_DISABLE_SPEEDY : xt.env.SC_DISABLE_SPEEDY !== void 0 && xt.env.SC_DISABLE_SPEEDY !== "" ? xt.env.SC_DISABLE_SPEEDY !== "false" && xt.env.SC_DISABLE_SPEEDY : xt.env.NODE_ENV !== "production"));
function Un(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var vd = function() {
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
      for (var g = s; g < p; g++) this.groupSizes[g] = 0;
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
    for (var o = this.groupSizes[r], s = this.indexOfGroup(r), p = s + o, g = s; g < p; g++) n += this.tag.getRule(g) + `/*!sc*/
`;
    return n;
  }, e;
}(), ba = /* @__PURE__ */ new Map(), Ta = /* @__PURE__ */ new Map(), Dn = 1, ua = function(e) {
  if (ba.has(e)) return ba.get(e);
  for (; Ta.has(Dn); ) Dn++;
  var t = Dn++;
  return ba.set(e, t), Ta.set(t, e), t;
}, wd = function(e) {
  return Ta.get(e);
}, Sd = function(e, t) {
  t >= Dn && (Dn = t + 1), ba.set(e, t), Ta.set(t, e);
}, kd = "style[" + nn + '][data-styled-version="5.3.11"]', Td = new RegExp("^" + nn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Cd = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, p = o.length; s < p; s++) (n = o[s]) && e.registerName(t, n);
}, Ad = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = r.length; o < s; o++) {
    var p = r[o].trim();
    if (p) {
      var g = p.match(Td);
      if (g) {
        var b = 0 | parseInt(g[1], 10), f = g[2];
        b !== 0 && (Sd(f, b), Cd(e, f, g[3]), e.getTag().insertRules(b, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, Ed = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, yl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(g) {
    for (var b = g.childNodes, f = b.length; f >= 0; f--) {
      var A = b[f];
      if (A && A.nodeType === 1 && A.hasAttribute(nn)) return A;
    }
  }(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(nn, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = Ed();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, _d = function() {
  function e(r) {
    var n = this.element = yl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, p = 0, g = s.length; p < g; p++) {
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
}(), Rd = function() {
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
}(), ss = Xo, Nd = { isServer: !Xo, useCSSOMInjection: !xd }, xl = function() {
  function e(r, n, o) {
    r === void 0 && (r = Or), n === void 0 && (n = {}), this.options = wr({}, Nd, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && Xo && ss && (ss = !1, function(s) {
      for (var p = document.querySelectorAll(kd), g = 0, b = p.length; g < b; g++) {
        var f = p[g];
        f && f.getAttribute(nn) !== "active" && (Ad(s, f), f.parentNode && f.parentNode.removeChild(f));
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
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = o ? new Od(p) : s ? new _d(p) : new Rd(p), new vd(r)));
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
        var g = wd(p);
        if (g !== void 0) {
          var b = r.names.get(g), f = n.getGroup(p);
          if (b && f && b.size) {
            var A = nn + ".g" + p + '[id="' + g + '"]', E = "";
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
}(), jd = /(a)(d)/gi, ls = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ko(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = ls(t % 52) + r;
  return (ls(t % 52) + r).replace(jd, "$1-$2");
}
var Kr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, vl = function(e) {
  return Kr(5381, e);
};
function Id(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Fn(r) && !Yo(r)) return !1;
  }
  return !0;
}
var Pd = vl("5.3.11"), Dd = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Id(t), this.componentId = r, this.baseHash = Kr(Pd, r), this.baseStyle = n, xl.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = an(this.rules, t, r, n).join(""), g = ko(Kr(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(o, g)) {
        var b = n(p, "." + g, void 0, o);
        r.insertRules(o, g, b);
      }
      s.push(g), this.staticRulesId = g;
    }
    else {
      for (var f = this.rules.length, A = Kr(this.baseHash, n.hash), E = "", R = 0; R < f; R++) {
        var $ = this.rules[R];
        if (typeof $ == "string") E += $;
        else if ($) {
          var _ = an($, t, r, n), w = Array.isArray(_) ? _.join("") : _;
          A = Kr(A, w + R), E += w;
        }
      }
      if (E) {
        var I = ko(A >>> 0);
        if (!r.hasNameForId(o, I)) {
          var F = n(E, "." + I, void 0, o);
          r.insertRules(o, I, F);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), Ld = /^\s*\/\/.*$/gm, Md = [":", "[", ".", "#"];
function Fd(e) {
  var t, r, n, o, s = Or, p = s.options, g = p === void 0 ? Or : p, b = s.plugins, f = b === void 0 ? ka : b, A = new ad(g), E = [], R = /* @__PURE__ */ function(w) {
    function I(F) {
      if (F) try {
        w(F + "}");
      } catch {
      }
    }
    return function(F, B, X, G, T, ue, he, Te, Pe, $e) {
      switch (F) {
        case 1:
          if (Pe === 0 && B.charCodeAt(0) === 64) return w(B + ";"), "";
          break;
        case 2:
          if (Te === 0) return B + "/*|*/";
          break;
        case 3:
          switch (Te) {
            case 102:
            case 112:
              return w(X[0] + B), "";
            default:
              return B + ($e === 0 ? "/*|*/" : "");
          }
        case -2:
          B.split("/*|*/}").forEach(I);
      }
    };
  }(function(w) {
    E.push(w);
  }), $ = function(w, I, F) {
    return I === 0 && Md.indexOf(F[r.length]) !== -1 || F.match(o) ? w : "." + t;
  };
  function _(w, I, F, B) {
    B === void 0 && (B = "&");
    var X = w.replace(Ld, ""), G = I && F ? F + " " + I + " { " + X + " }" : X;
    return t = B, r = I, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), A(F || !I ? "" : I, G);
  }
  return A.use([].concat(f, [function(w, I, F) {
    w === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, $));
  }, R, function(w) {
    if (w === -2) {
      var I = E;
      return E = [], I;
    }
  }])), _.hash = f.length ? f.reduce(function(w, I) {
    return I.name || Un(15), Kr(w, I.name);
  }, 5381).toString() : "", _;
}
var wl = gt.createContext();
wl.Consumer;
var Sl = gt.createContext(), $d = (Sl.Consumer, new xl()), To = Fd();
function Ud() {
  return Bt(wl) || $d;
}
function zd() {
  return Bt(Sl) || To;
}
var Bd = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = To);
      var p = n.name + s.hash;
      o.hasNameForId(n.id, p) || o.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return Un(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = To), this.name + t.hash;
  }, e;
}(), qd = /([A-Z])/, Wd = /([A-Z])/g, Hd = /^ms-/, Vd = function(e) {
  return "-" + e.toLowerCase();
};
function cs(e) {
  return qd.test(e) ? e.replace(Wd, Vd).replace(Hd, "-ms-") : e;
}
var us = function(e) {
  return e == null || e === !1 || e === "";
};
function an(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], p = 0, g = e.length; p < g; p += 1) (o = an(e[p], t, r, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (us(e)) return "";
  if (Yo(e)) return "." + e.styledComponentId;
  if (Fn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return an(b, t, r, n);
  }
  var f;
  return e instanceof Bd ? r ? (e.inject(r, n), e.getName(n)) : e : So(e) ? function A(E, R) {
    var $, _, w = [];
    for (var I in E) E.hasOwnProperty(I) && !us(E[I]) && (Array.isArray(E[I]) && E[I].isCss || Fn(E[I]) ? w.push(cs(I) + ":", E[I], ";") : So(E[I]) ? w.push.apply(w, A(E[I], I)) : w.push(cs(I) + ": " + ($ = I, (_ = E[I]) == null || typeof _ == "boolean" || _ === "" ? "" : typeof _ != "number" || _ === 0 || $ in od || $.startsWith("--") ? String(_).trim() : _ + "px") + ";"));
    return R ? [R + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var ds = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Gd(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Fn(e) || So(e) ? ds(an(os(ka, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ds(an(os(e, r)));
}
var Yd = function(e, t, r) {
  return r === void 0 && (r = Or), e.theme !== r.theme && e.theme || t || r.theme;
}, Xd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Jd = /(^-|-$)/g;
function ro(e) {
  return e.replace(Xd, "-").replace(Jd, "");
}
var Qd = function(e) {
  return ko(vl(e) >>> 0);
};
function da(e) {
  return typeof e == "string" && xt.env.NODE_ENV === "production";
}
var Co = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Zd = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Kd(e, t, r) {
  var n = e[r];
  Co(t) && Co(n) ? kl(n, t) : e[r] = t;
}
function kl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var o = 0, s = r; o < s.length; o++) {
    var p = s[o];
    if (Co(p)) for (var g in p) Zd(g) && Kd(e, p[g], g);
  }
  return e;
}
var Tl = gt.createContext();
Tl.Consumer;
var no = {};
function Cl(e, t, r) {
  var n = Yo(e), o = !da(e), s = t.attrs, p = s === void 0 ? ka : s, g = t.componentId, b = g === void 0 ? function(B, X) {
    var G = typeof B != "string" ? "sc" : ro(B);
    no[G] = (no[G] || 0) + 1;
    var T = G + "-" + Qd("5.3.11" + G + no[G]);
    return X ? X + "-" + T : T;
  }(t.displayName, t.parentComponentId) : g, f = t.displayName, A = f === void 0 ? function(B) {
    return da(B) ? "styled." + B : "Styled(" + is(B) + ")";
  }(e) : f, E = t.displayName && t.componentId ? ro(t.displayName) + "-" + t.componentId : t.componentId || b, R = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, $ = t.shouldForwardProp;
  n && e.shouldForwardProp && ($ = t.shouldForwardProp ? function(B, X, G) {
    return e.shouldForwardProp(B, X, G) && t.shouldForwardProp(B, X, G);
  } : e.shouldForwardProp);
  var _, w = new Dd(r, E, n ? e.componentStyle : void 0), I = w.isStatic && p.length === 0, F = function(B, X) {
    return function(G, T, ue, he) {
      var Te = G.attrs, Pe = G.componentStyle, $e = G.defaultProps, ie = G.foldedComponentIds, de = G.shouldForwardProp, _e = G.styledComponentId, Ae = G.target, xe = function(U, y, te) {
        U === void 0 && (U = Or);
        var O = wr({}, y, { theme: U }), oe = {};
        return te.forEach(function(ee) {
          var re, Y, le, pe = ee;
          for (re in Fn(pe) && (pe = pe(O)), pe) O[re] = oe[re] = re === "className" ? (Y = oe[re], le = pe[re], Y && le ? Y + " " + le : Y || le) : pe[re];
        }), [O, oe];
      }(Yd(T, Bt(Tl), $e) || Or, T, Te), Xe = xe[0], Re = xe[1], Ce = function(U, y, te, O) {
        var oe = Ud(), ee = zd(), re = y ? U.generateAndInjectStyles(Or, oe, ee) : U.generateAndInjectStyles(te, oe, ee);
        return re;
      }(Pe, he, Xe), Fe = ue, ze = Re.$as || T.$as || Re.as || T.as || Ae, se = da(ze), q = Re !== T ? wr({}, T, {}, Re) : T, j = {};
      for (var z in q) z[0] !== "$" && z !== "as" && (z === "forwardedAs" ? j.as = q[z] : (de ? de(z, es, ze) : !se || es(z)) && (j[z] = q[z]));
      return T.style && Re.style !== T.style && (j.style = wr({}, T.style, {}, Re.style)), j.className = Array.prototype.concat(ie, _e, Ce !== _e ? Ce : null, T.className, Re.className).filter(Boolean).join(" "), j.ref = Fe, Js(ze, j);
    }(_, B, X, I);
  };
  return F.displayName = A, (_ = gt.forwardRef(F)).attrs = R, _.componentStyle = w, _.displayName = A, _.shouldForwardProp = $, _.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ka, _.styledComponentId = E, _.target = n ? e.target : e, _.withComponent = function(B) {
    var X = t.componentId, G = function(ue, he) {
      if (ue == null) return {};
      var Te, Pe, $e = {}, ie = Object.keys(ue);
      for (Pe = 0; Pe < ie.length; Pe++) Te = ie[Pe], he.indexOf(Te) >= 0 || ($e[Te] = ue[Te]);
      return $e;
    }(t, ["componentId"]), T = X && X + "-" + (da(B) ? B : ro(is(B)));
    return Cl(B, wr({}, G, { attrs: R, componentId: T }), r);
  }, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(B) {
    this._foldedDefaultProps = n ? kl({}, e.defaultProps, B) : B;
  } }), Object.defineProperty(_, "toString", { value: function() {
    return "." + _.styledComponentId;
  } }), o && yd(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), _;
}
var rr = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = Or), !hl.isValidElementType(n)) return Un(1, String(n));
    var s = function() {
      return r(n, o, Gd.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, wr({}, o, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, wr({}, o, { attrs: Array.prototype.concat(o.attrs, p).filter(Boolean) }));
    }, s;
  }(Cl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  rr[e] = rr(e);
});
const ep = rr.div`
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
`, ya = "On This Page", tp = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: ya
}, Al = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: r = !1
}) => {
  const n = rn(null), o = Tu("(max-width: 991px)"), [s, p] = ut({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), g = o ? 110 : 142, b = () => {
    var w;
    const I = {}, F = window.scrollY, B = (w = document.getElementById(t)) == null ? void 0 : w.getBoundingClientRect().top, X = 103;
    B >= 0 && (I.sticky = !1, I.activeContainer = ""), F > n.current.getBoundingClientRect().top && (I.sticky = !0);
    const G = s.hasHeader ? g + X : X;
    e == null || e.forEach(({ targetIdName: T }) => {
      const ue = document.getElementById(T), he = (ue == null ? void 0 : ue.getBoundingClientRect().top) - G, Te = (ue == null ? void 0 : ue.getBoundingClientRect().bottom) - G;
      he < 0 && Te > 0 && (I.activeContainer = T);
    }), p((T) => ({
      ...T,
      ...I
    }));
  }, f = () => {
    Xu(b, 150), Ju(b, 150);
  }, A = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), E = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function R(w = null) {
    if (w === null) return s.containerClass;
    const I = Object.values(w.classList).filter(
      (F) => [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid"
      ].includes(F)
    );
    return I.length > 0 ? I.join(" ") : R(w.parentElement);
  }
  At(() => {
    const w = document.getElementById(t) || null, I = {
      hasHeader: A(),
      hasAltMenuSpacing: E(),
      containerClass: R(w)
    };
    p((F) => ({
      ...F,
      ...I
    }));
  }, []), At(() => (window == null || window.addEventListener("scroll", f), () => window.removeEventListener("scroll", f)), [s.hasHeader]);
  const $ = (w) => {
    var I, F;
    const B = window.scrollY - (s.hasHeader ? g + 100 : 100), X = o ? 410 : 90;
    let G = ((I = document.getElementById(w)) == null ? void 0 : I.getBoundingClientRect().top) + B;
    n.current.classList.contains("sticky") || (G -= X), r && ((F = Yu(`#${w}`)) == null || F.focus()), window.scrollTo({ top: G, behavior: "smooth" });
  }, _ = () => {
    p((w) => ({
      ...w,
      showMenu: !w.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ W.jsx(
    ep,
    {
      requiresAltMenuSpacing: s.hasAltMenuSpacing,
      ref: n,
      className: ct(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: s.sticky,
          "with-header": s.hasHeader
        }
      ),
      style: s.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ W.jsxs("div", { className: `${s.containerClass} uds-anchor-menu-wrapper`, children: [
        o ? /* @__PURE__ */ W.jsx(
          Xr,
          {
            gaData: {
              ...tp,
              action: s.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ W.jsx(
              "button",
              {
                className: ct("mobile-menu-toggler", {
                  "show-menu": s.showMenu
                }),
                type: "button",
                onClick: _,
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
              show: s.showMenu
            }),
            children: /* @__PURE__ */ W.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": ya,
                children: e == null ? void 0 : e.map((w) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ W.jsx(
                    Tr,
                    {
                      "data-testid": `anchor-item-${w.targetIdName}`,
                      classes: ct("nav-link", {
                        active: s.activeContainer === w.targetIdName
                      }).split(" "),
                      ariaLabel: w.text,
                      label: w.text,
                      icon: w.icon,
                      onClick: () => $(w.targetIdName)
                    },
                    w.targetIdName
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
function ja(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], o = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(o)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var rp = /* @__PURE__ */ function() {
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
}, np = function(e, t, r, n) {
  function o(s) {
    return s instanceof r ? s : new r(function(p) {
      p(s);
    });
  }
  return new (r || (r = Promise))(function(s, p) {
    function g(A) {
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
      A.done ? s(A.value) : o(A.value).then(g, b);
    }
    f((n = n.apply(e, [])).next());
  });
}, ap = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, o, s, p;
  return p = { next: g(0), throw: g(1), return: g(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
    return this;
  }), p;
  function g(f) {
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
}, El = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}, op = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, ip = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, sp = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function lp(e, t, r) {
  var n = t.height, o = t.width, s = El(t, ["height", "width"]), p = Hr({ height: n, width: o, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), g = window.open(e, "", Object.keys(p).map(function(f) {
    return "".concat(f, "=").concat(p[f]);
  }).join(", "));
  if (r)
    var b = window.setInterval(function() {
      try {
        (g === null || g.closed) && (window.clearInterval(b), r(g));
      } catch (f) {
        console.error(f);
      }
    }, 1e3);
  return g;
}
var cp = (
  /** @class */
  function(e) {
    rp(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var o = r.props, s = o.onShareWindowClose, p = o.windowHeight, g = p === void 0 ? 400 : p, b = o.windowPosition, f = b === void 0 ? "windowCenter" : b, A = o.windowWidth, E = A === void 0 ? 550 : A, R = Hr({ height: g, width: E }, f === "windowCenter" ? ip(E, g) : sp(E, g));
        lp(n, R, s);
      }, r.handleClick = function(n) {
        return np(r, void 0, void 0, function() {
          var o, s, p, g, b, f, A, E, R, $;
          return ap(this, function(_) {
            switch (_.label) {
              case 0:
                return o = this.props, s = o.beforeOnClick, p = o.disabled, g = o.networkLink, b = o.onClick, f = o.url, A = o.openShareDialogOnClick, E = o.opts, R = g(f, E), p ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? ($ = s(), op($) ? [4, $] : [3, 2]) : [3, 2]);
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
      var n = r.children, o = r.className, s = r.disabled, p = r.disabledStyle, g = r.forwardedRef;
      r.networkLink;
      var b = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var f = r.resetButtonStyle, A = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var E = El(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), R = ct("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, o), $ = Hr(Hr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, A), s && p);
      return gt.createElement("button", Hr({}, E, { "aria-label": E["aria-label"] || b, className: R, onClick: this.handleClick, ref: g, style: $ }), n);
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
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Ca.apply(this, arguments);
};
function Ia(e, t, r, n) {
  function o(s, p) {
    var g = r(s), b = Ca({}, s), f = Object.keys(g);
    return f.forEach(function(A) {
      delete b[A];
    }), gt.createElement(cp, Ca({}, n, b, { forwardedRef: p, networkName: e, networkLink: t, opts: r(s) }));
  }
  return o.displayName = "ShareButton-".concat(e), Xs(o);
}
function up(e, t) {
  var r = t.subject, n = t.body, o = t.separator;
  return "mailto:" + ja({ subject: r, body: n ? n + o + e : e });
}
Ia("email", up, function(e) {
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
var dp = /* @__PURE__ */ function() {
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
}(), pp = (
  /** @class */
  function(e) {
    dp(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function Ln(e, t) {
  if (!e)
    throw new pp(t);
}
function fp(e, t) {
  var r = t.quote, n = t.hashtag;
  return Ln(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + ja({
    u: e,
    quote: r,
    hashtag: n
  });
}
Ia("facebook", fp, function(e) {
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
  return Ln(e, "linkedin.url"), "https://linkedin.com/shareArticle" + ja({ url: e, mini: "true", title: r, summary: n, source: o });
}
Ia("linkedin", hp, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function gp(e, t) {
  var r = t.title, n = t.via, o = t.hashtags, s = o === void 0 ? [] : o, p = t.related, g = p === void 0 ? [] : p;
  return Ln(e, "twitter.url"), Ln(Array.isArray(s), "twitter.hashtags is not an array"), Ln(Array.isArray(g), "twitter.related is not an array"), "https://twitter.com/share" + ja({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: g.length > 0 ? g.join(",") : void 0
  });
}
Ia("twitter", gp, function(e) {
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
function Ao(e) {
  "@babel/helpers - typeof";
  return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ao(e);
}
var mp = (typeof window > "u" ? "undefined" : Ao(window)) === "object" && window.Element || function() {
};
function bp(e, t, r) {
  if (!(e[t] instanceof mp))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, bp, l.shape({
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
rr.div`
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
rr.div`
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
const yp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Jo = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  color: o,
  disabled: s,
  element: p = "button",
  innerRef: g,
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
    Xr,
    {
      gaData: {
        ...yp,
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
          ref: g,
          onClick: f,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
Jo.propTypes = {
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
Jo.defaultProps = {
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
const _l = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: o = "async",
  dataTestId: s,
  fetchPriority: p = "auto",
  width: g,
  height: b,
  cardLink: f,
  title: A,
  caption: E,
  captionTitle: R,
  border: $,
  dropShadow: _
}) => {
  const w = {
    src: e,
    alt: t,
    loading: n,
    decoding: o,
    fetchpriority: p,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Cu(r) },
    ...s && { "data-testid": s },
    ...g && { width: g },
    ...b && { height: b }
  }, I = ct("uds-img", {
    borderless: !$,
    "uds-img-drop-shadow": _
  }), F = (X) => {
    const G = X ? `${w.className} ${X}` : w.className;
    return f ? /* @__PURE__ */ W.jsxs("a", { href: f, children: [
      /* @__PURE__ */ W.jsx("img", { ...w, className: G }),
      /* @__PURE__ */ W.jsx("span", { className: "visually-hidden", children: A })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ W.jsx("img", { ...w, className: G })
    );
  }, B = () => /* @__PURE__ */ W.jsx("div", { className: I, children: /* @__PURE__ */ W.jsxs("figure", { className: "figure uds-figure", children: [
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
  return /* @__PURE__ */ W.jsx(W.Fragment, { children: E ? B() : F(I) });
};
_l.propTypes = {
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
const xp = rr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, vp = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), wp = (e) => !e.startsWith("https://") && !e.startsWith("http://") && vp(e) ? `mailto:${e}` : e, Sp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ft = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: o,
  title: s,
  icon: p,
  body: g,
  eventFormat: b,
  eventLocation: f,
  eventTime: A,
  buttons: E,
  linkLabel: R,
  linkUrl: $,
  tags: _,
  showBorders: w,
  cardLink: I
}) => /* @__PURE__ */ W.jsx(
  Qo,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: o,
    title: s,
    icon: p,
    body: g,
    eventFormat: b,
    eventLocation: f,
    eventTime: A,
    buttons: E,
    linkLabel: R,
    linkUrl: $,
    tags: _,
    showBorders: w,
    cardLink: I
  }
);
ft.propTypes = {
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
ft.defaultProps = {
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
const Qo = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: o,
  title: s,
  icon: p,
  body: g,
  eventFormat: b,
  eventLocation: f,
  eventTime: A,
  buttons: E,
  linkLabel: R,
  linkUrl: $,
  tags: _,
  showBorders: w,
  cardLink: I
}) => {
  const F = ct("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !w
  });
  return /* @__PURE__ */ W.jsx(W.Fragment, { children: /* @__PURE__ */ W.jsxs(xp, { className: F, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ W.jsx(
      _l,
      {
        src: n,
        alt: o,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: I,
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
      Aa,
      {
        type: e,
        body: g,
        eventFormat: b,
        eventLocation: f,
        eventTime: A,
        title: s,
        buttons: E,
        linkLabel: R,
        linkUrl: $,
        tags: _,
        cardLink: I
      }
    ) }) : /* @__PURE__ */ W.jsx(
      Aa,
      {
        type: e,
        body: g,
        eventFormat: b,
        eventLocation: f,
        eventTime: A,
        title: s,
        buttons: E,
        linkLabel: R,
        linkUrl: $,
        tags: _,
        cardLink: I
      }
    )
  ] }) });
};
Qo.propTypes = {
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
Qo.defaultProps = {
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
const Aa = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: o,
  title: s,
  buttons: p,
  linkLabel: g,
  linkUrl: b,
  tags: f,
  cardLink: A
}) => /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
  !!s && /* @__PURE__ */ W.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ W.jsx("h3", { className: "card-title", children: A ? /* @__PURE__ */ W.jsx("a", { href: A, children: s }) : s }) }),
  !!t && /* @__PURE__ */ W.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ W.jsx("div", { dangerouslySetInnerHTML: Wr(t) }) }),
  e === "event" && (o || n) && /* @__PURE__ */ W.jsx(
    Zo,
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
  b && g && /* @__PURE__ */ W.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ W.jsx(
    Xr,
    {
      gaData: {
        ...Sp,
        section: s,
        text: g
      },
      children: /* @__PURE__ */ W.jsx("a", { href: wp(b), children: g })
    }
  ) }),
  f && /* @__PURE__ */ W.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((E) => (
    // @ts-ignore
    /* @__PURE__ */ W.jsx(
      Jo,
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
Aa.propTypes = {
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
Aa.defaultProps = {
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
const Zo = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ W.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ W.jsx("div", { dangerouslySetInnerHTML: Wr(t) })
  ] }),
  r && /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ W.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Wr(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
  t && /* @__PURE__ */ W.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ W.jsx("div", { dangerouslySetInnerHTML: Wr(t) })
  ] }) }),
  r && /* @__PURE__ */ W.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ W.jsx("span", { children: /* @__PURE__ */ W.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Wr(r)
      }
    ) })
  ] }) })
] });
Zo.propTypes = {
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string
};
Zo.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
rr.div`
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
rr.section``;
Ys(null);
l.element, l.element, l.number, l.func, l.func, l.string;
const kp = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), Tp = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
});
l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
});
const Cp = l.shape({
  url: l.string,
  filters: l.string
});
l.shape({
  header: kp,
  ctaButton: Tp,
  dataSource: Cp,
  maxItems: l.number
});
rr.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`;
l.element;
const Ap = rr.img`
  width: 100%;
`;
function Ep({ image: e, title: t, contents: r }) {
  return console.log({ image: e, title: t, contents: r }), /* @__PURE__ */ W.jsx("div", { children: "TODO: to be implemented" });
}
function _p({
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
  }, g = {
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
          Ap,
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
              [g[t.color]]: t.color,
              [p[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        r && /* @__PURE__ */ W.jsx("h1", { style: { maxWidth: r.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ W.jsx(
          "span",
          {
            className: ct({
              [g[r.color]]: r.color,
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
              [g[o]]: o
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
    "heading-hero": () => _p(e),
    "story-hero": () => Ep(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
zn.propTypes = {
  type: l.oneOf(["heading-hero", "story-hero"]),
  image: Su,
  title: Xa,
  subTitle: Xa,
  contents: l.arrayOf(Xa),
  contentsColor: l.string
};
const vr = ({
  dataId: e,
  isClickeable: t,
  disabled: r,
  pageLinkIcon: n,
  selectedPage: o,
  onClick: s,
  ellipses: p,
  ariaLabel: g,
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
        "aria-label": g,
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
vr.propTypes = {
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
vr.defaultProps = {
  isClickeable: !1,
  disabled: !1,
  pageLinkIcon: !1,
  selectedPage: !1,
  onClick: () => {
  }
};
const Rp = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, Ko = ({
  type: e,
  background: t,
  currentPage: r,
  totalPages: n,
  onChange: o
}) => {
  const [s, p] = ut(null);
  At(() => {
    p(r);
  }, [r]);
  const g = (A) => {
    ul({ ...Rp, text: `page ${A}` });
  }, b = (A, E) => {
    const R = {
      first: 1,
      prev: s === 1 ? 1 : s - 1,
      next: s === n ? n : s + 1,
      last: n
    }[E] ?? E;
    p(R), g(R), o == null || o(A, R);
  }, f = () => {
    const A = $i(
      s === n - 1,
      2,
      s === n ? 3 : 1
    ), E = $i(
      s === 1,
      3,
      s === 2 ? 2 : 1
    ), R = Xi(
      s - A,
      s,
      n
    ), $ = Xi(
      s,
      s + 1 + E,
      n
    ), _ = [...R, ...$];
    return /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
      _[0] !== 1 && /* @__PURE__ */ W.jsx(
        vr,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: s === 1,
          onClick: (w) => b(w, "first"),
          children: "1"
        }
      ),
      _[0] > 2 && /* @__PURE__ */ W.jsx(vr, { ellipses: !0, children: "..." }),
      _.map((w) => /* @__PURE__ */ W.jsx(
        vr,
        {
          ariaLabel: `Page ${w} of ${n}`,
          isClickeable: !0,
          selectedPage: s === w,
          onClick: (I) => b(I, w),
          children: w
        },
        w
      )),
      _[_.length - 1] < n - 1 && /* @__PURE__ */ W.jsx(vr, { ellipses: !0, children: "..." }),
      _[_.length - 1] !== n && /* @__PURE__ */ W.jsx(
        vr,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n} of ${n}`,
          selectedPage: s === n,
          onClick: (w) => b(w, "last"),
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
          vr,
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
          vr,
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
Ko.propTypes = {
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
   * Callback fired when the page is changed.
   */
  onChange: l.func.isRequired
};
Ko.defaultProps = {
  currentPage: 1,
  totalPages: 10
};
l.oneOf(["small", "large"]), l.string.isRequired, l.string.isRequired, l.string;
l.oneOf(["small", "large"]).isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string, l.string;
rr.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const Op = Xs(function(e, t) {
  const {
    id: r,
    selected: n,
    title: o,
    selectTab: s,
    leftKeyPressed: p,
    rightKeyPressed: g,
    icon: b,
    gaData: f
  } = e, A = rn(null);
  fu(
    t,
    () => ({
      focus() {
        A.current.focus();
      },
      scrollIntoView() {
        var R, $, _, w, I, F, B;
        const X = ((R = A.current) == null ? void 0 : R.offsetWidth) / 2 + A.current.offsetLeft, G = ((_ = ($ = A.current) == null ? void 0 : $.offsetParent) == null ? void 0 : _.scrollLeft) + ((I = (w = A.current) == null ? void 0 : w.offsetParent) == null ? void 0 : I.offsetWidth) / 2;
        (B = (F = A.current) == null ? void 0 : F.offsetParent) == null || B.scrollBy({
          left: X - G
        });
      }
    }),
    []
  );
  const E = (R) => {
    R.keyCode === 37 ? (R.preventDefault(), p()) : R.keyCode === 39 && (R.preventDefault(), g());
  };
  return /* @__PURE__ */ W.jsx(Xr, { gaData: { ...f, text: o }, children: /* @__PURE__ */ W.jsxs(
    "a",
    {
      ref: A,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      onClick: (R) => s(R, r, o),
      onKeyDown: E,
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
}, jp = ({
  url: e = "",
  vttUrl: t,
  caption: r,
  title: n = "",
  className: o,
  controls: s = !0
}) => {
  const p = rn(null);
  return /* @__PURE__ */ W.jsxs(
    "div",
    {
      className: ct(`uds-video-container ${o}`, {
        "uds-video-with-caption": r
      }),
      children: [
        /* @__PURE__ */ W.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ W.jsx(Xr, { gaData: { ...Np, section: n }, children: /* @__PURE__ */ W.jsxs(
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
}, Ip = ({ title: e = "", caption: t, url: r = "", className: n }) => /* @__PURE__ */ W.jsxs(
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
), ei = (e) => {
  const {
    type: t = "video",
    url: r = "",
    vttUrl: n,
    title: o = "",
    caption: s,
    className: p,
    controls: g = !0
  } = e;
  return t === "youtube" ? Ip({ url: r, title: o, caption: s, className: p }) : jp({
    url: r,
    vttUrl: n,
    title: o,
    caption: s,
    className: p,
    controls: g
  });
};
ei.propTypes = {
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
var Pp = !1;
try {
  var ps = Object.defineProperty({}, "passive", {
    get: function() {
      Pp = !0;
    }
  });
  window.addEventListener("testPassive", null, ps), window.removeEventListener("testPassive", null, ps);
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
    buttons: ft.propTypes.buttons,
    linkLabel: l.string,
    linkUrl: l.string,
    tags: ft.propTypes.tags
  })
).isRequired, ft.propTypes.type, ft.propTypes.eventFormat, ft.propTypes.horizontal, l.string, l.string, l.bool;
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
var fs = Ks;
fs.createRoot, fs.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .75rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
var Rl = { exports: {} }, ao, hs;
function Dp() {
  if (hs) return ao;
  hs = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ao = e, ao;
}
var oo, gs;
function Lp() {
  if (gs) return oo;
  gs = 1;
  var e = Dp();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, oo = function() {
    function n(p, g, b, f, A, E) {
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
  }, oo;
}
Rl.exports = Lp()();
var xa = Rl.exports;
const C = /* @__PURE__ */ Bo(xa);
var Ol = { exports: {} }, Ge = {};
var ms;
function Mp() {
  if (ms) return Ge;
  ms = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), $ = Symbol.for("react.client.reference");
  function _(w) {
    if (typeof w == "object" && w !== null) {
      var I = w.$$typeof;
      switch (I) {
        case e:
          switch (w = w.type, w) {
            case r:
            case o:
            case n:
            case b:
            case f:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case p:
                case g:
                case E:
                case A:
                  return w;
                case s:
                  return w;
                default:
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  return Ge.ContextConsumer = s, Ge.ContextProvider = p, Ge.Element = e, Ge.ForwardRef = g, Ge.Fragment = r, Ge.Lazy = E, Ge.Memo = A, Ge.Portal = t, Ge.Profiler = o, Ge.StrictMode = n, Ge.Suspense = b, Ge.SuspenseList = f, Ge.isContextConsumer = function(w) {
    return _(w) === s;
  }, Ge.isContextProvider = function(w) {
    return _(w) === p;
  }, Ge.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Ge.isForwardRef = function(w) {
    return _(w) === g;
  }, Ge.isFragment = function(w) {
    return _(w) === r;
  }, Ge.isLazy = function(w) {
    return _(w) === E;
  }, Ge.isMemo = function(w) {
    return _(w) === A;
  }, Ge.isPortal = function(w) {
    return _(w) === t;
  }, Ge.isProfiler = function(w) {
    return _(w) === o;
  }, Ge.isStrictMode = function(w) {
    return _(w) === n;
  }, Ge.isSuspense = function(w) {
    return _(w) === b;
  }, Ge.isSuspenseList = function(w) {
    return _(w) === f;
  }, Ge.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === o || w === n || w === b || w === f || w === R || typeof w == "object" && w !== null && (w.$$typeof === E || w.$$typeof === A || w.$$typeof === p || w.$$typeof === s || w.$$typeof === g || w.$$typeof === $ || w.getModuleId !== void 0);
  }, Ge.typeOf = _, Ge;
}
Ol.exports = Mp();
var Nl = Ol.exports;
function Fp(e) {
  function t(q, j, z, U, y) {
    for (var te = 0, O = 0, oe = 0, ee = 0, re, Y, le = 0, pe = 0, ae, be = ae = re = 0, ne = 0, fe = 0, He = 0, ye = 0, pt = z.length, Qe = pt - 1, ve, J = "", ce = "", Ze = "", mt = "", Be; ne < pt; ) {
      if (Y = z.charCodeAt(ne), ne === Qe && O + ee + oe + te !== 0 && (O !== 0 && (Y = O === 47 ? 10 : 47), ee = oe = te = 0, pt++, Qe++), O + ee + oe + te === 0) {
        if (ne === Qe && (0 < fe && (J = J.replace(R, "")), 0 < J.trim().length)) {
          switch (Y) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += z.charAt(ne);
          }
          Y = 59;
        }
        switch (Y) {
          case 123:
            for (J = J.trim(), re = J.charCodeAt(0), ae = 1, ye = ++ne; ne < pt; ) {
              switch (Y = z.charCodeAt(ne)) {
                case 123:
                  ae++;
                  break;
                case 125:
                  ae--;
                  break;
                case 47:
                  switch (Y = z.charCodeAt(ne + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (be = ne + 1; be < Qe; ++be)
                          switch (z.charCodeAt(be)) {
                            case 47:
                              if (Y === 42 && z.charCodeAt(be - 1) === 42 && ne + 2 !== be) {
                                ne = be + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Y === 47) {
                                ne = be + 1;
                                break e;
                              }
                          }
                        ne = be;
                      }
                  }
                  break;
                case 91:
                  Y++;
                case 40:
                  Y++;
                case 34:
                case 39:
                  for (; ne++ < Qe && z.charCodeAt(ne) !== Y; )
                    ;
              }
              if (ae === 0) break;
              ne++;
            }
            switch (ae = z.substring(ye, ne), re === 0 && (re = (J = J.replace(E, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < fe && (J = J.replace(R, "")), Y = J.charCodeAt(1), Y) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = j;
                    break;
                  default:
                    fe = Xe;
                }
                if (ae = t(j, fe, ae, Y, y + 1), ye = ae.length, 0 < Ce && (fe = r(Xe, J, He), Be = g(3, ae, fe, j, _e, de, ye, Y, y, U), J = fe.join(""), Be !== void 0 && (ye = (ae = Be.trim()).length) === 0 && (Y = 0, ae = "")), 0 < ye) switch (Y) {
                  case 115:
                    J = J.replace(ue, p);
                  case 100:
                  case 109:
                  case 45:
                    ae = J + "{" + ae + "}";
                    break;
                  case 107:
                    J = J.replace(B, "$1 $2"), ae = J + "{" + ae + "}", ae = xe === 1 || xe === 2 && s("@" + ae, 3) ? "@-webkit-" + ae + "@" + ae : "@" + ae;
                    break;
                  default:
                    ae = J + ae, U === 112 && (ae = (ce += ae, ""));
                }
                else ae = "";
                break;
              default:
                ae = t(j, r(j, J, He), ae, U, y + 1);
            }
            Ze += ae, ae = He = fe = be = re = 0, J = "", Y = z.charCodeAt(++ne);
            break;
          case 125:
          case 59:
            if (J = (0 < fe ? J.replace(R, "") : J).trim(), 1 < (ye = J.length)) switch (be === 0 && (re = J.charCodeAt(0), re === 45 || 96 < re && 123 > re) && (ye = (J = J.replace(" ", ":")).length), 0 < Ce && (Be = g(1, J, j, q, _e, de, ce.length, U, y, U)) !== void 0 && (ye = (J = Be.trim()).length) === 0 && (J = "\0\0"), re = J.charCodeAt(0), Y = J.charCodeAt(1), re) {
              case 0:
                break;
              case 64:
                if (Y === 105 || Y === 99) {
                  mt += J + z.charAt(ne);
                  break;
                }
              default:
                J.charCodeAt(ye - 1) !== 58 && (ce += o(J, re, Y, J.charCodeAt(2)));
            }
            He = fe = be = re = 0, J = "", Y = z.charCodeAt(++ne);
        }
      }
      switch (Y) {
        case 13:
        case 10:
          O === 47 ? O = 0 : 1 + re === 0 && U !== 107 && 0 < J.length && (fe = 1, J += "\0"), 0 < Ce * ze && g(0, J, j, q, _e, de, ce.length, U, y, U), de = 1, _e++;
          break;
        case 59:
        case 125:
          if (O + ee + oe + te === 0) {
            de++;
            break;
          }
        default:
          switch (de++, ve = z.charAt(ne), Y) {
            case 9:
            case 32:
              if (ee + te + O === 0) switch (le) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ve = "";
                  break;
                default:
                  Y !== 32 && (ve = " ");
              }
              break;
            case 0:
              ve = "\\0";
              break;
            case 12:
              ve = "\\f";
              break;
            case 11:
              ve = "\\v";
              break;
            case 38:
              ee + O + te === 0 && (fe = He = 1, ve = "\f" + ve);
              break;
            case 108:
              if (ee + O + te + Ae === 0 && 0 < be) switch (ne - be) {
                case 2:
                  le === 112 && z.charCodeAt(ne - 3) === 58 && (Ae = le);
                case 8:
                  pe === 111 && (Ae = pe);
              }
              break;
            case 58:
              ee + O + te === 0 && (be = ne);
              break;
            case 44:
              O + oe + ee + te === 0 && (fe = 1, ve += "\r");
              break;
            case 34:
            case 39:
              O === 0 && (ee = ee === Y ? 0 : ee === 0 ? Y : ee);
              break;
            case 91:
              ee + O + oe === 0 && te++;
              break;
            case 93:
              ee + O + oe === 0 && te--;
              break;
            case 41:
              ee + O + te === 0 && oe--;
              break;
            case 40:
              if (ee + O + te === 0) {
                if (re === 0) switch (2 * le + 3 * pe) {
                  case 533:
                    break;
                  default:
                    re = 1;
                }
                oe++;
              }
              break;
            case 64:
              O + oe + ee + te + be + ae === 0 && (ae = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + te + oe)) switch (O) {
                case 0:
                  switch (2 * Y + 3 * z.charCodeAt(ne + 1)) {
                    case 235:
                      O = 47;
                      break;
                    case 220:
                      ye = ne, O = 42;
                  }
                  break;
                case 42:
                  Y === 47 && le === 42 && ye + 2 !== ne && (z.charCodeAt(ye + 2) === 33 && (ce += z.substring(ye, ne + 1)), ve = "", O = 0);
              }
          }
          O === 0 && (J += ve);
      }
      pe = le, le = Y, ne++;
    }
    if (ye = ce.length, 0 < ye) {
      if (fe = j, 0 < Ce && (Be = g(2, ce, fe, q, _e, de, ye, U, y, U), Be !== void 0 && (ce = Be).length === 0)) return mt + ce + Ze;
      if (ce = fe.join(",") + "{" + ce + "}", xe * Ae !== 0) {
        switch (xe !== 2 || s(ce, 2) || (Ae = 0), Ae) {
          case 111:
            ce = ce.replace(G, ":-moz-$1") + ce;
            break;
          case 112:
            ce = ce.replace(X, "::-webkit-input-$1") + ce.replace(X, "::-moz-$1") + ce.replace(X, ":-ms-input-$1") + ce;
        }
        Ae = 0;
      }
    }
    return mt + ce + Ze;
  }
  function r(q, j, z) {
    var U = j.trim().split(I);
    j = U;
    var y = U.length, te = q.length;
    switch (te) {
      case 0:
      case 1:
        var O = 0;
        for (q = te === 0 ? "" : q[0] + " "; O < y; ++O)
          j[O] = n(q, j[O], z).trim();
        break;
      default:
        var oe = O = 0;
        for (j = []; O < y; ++O)
          for (var ee = 0; ee < te; ++ee)
            j[oe++] = n(q[ee] + " ", U[O], z).trim();
    }
    return j;
  }
  function n(q, j, z) {
    var U = j.charCodeAt(0);
    switch (33 > U && (U = (j = j.trim()).charCodeAt(0)), U) {
      case 38:
        return j.replace(F, "$1" + q.trim());
      case 58:
        return q.trim() + j.replace(F, "$1" + q.trim());
      default:
        if (0 < 1 * z && 0 < j.indexOf("\f")) return j.replace(F, (q.charCodeAt(0) === 58 ? "" : "$1") + q.trim());
    }
    return q + j;
  }
  function o(q, j, z, U) {
    var y = q + ";", te = 2 * j + 3 * z + 4 * U;
    if (te === 944) {
      q = y.indexOf(":", 9) + 1;
      var O = y.substring(q, y.length - 1).trim();
      return O = y.substring(0, q).trim() + O + ";", xe === 1 || xe === 2 && s(O, 1) ? "-webkit-" + O + O : O;
    }
    if (xe === 0 || xe === 2 && !s(y, 1)) return y;
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
        if (0 < y.indexOf("image-set(", 11)) return y.replace(ie, "$1-webkit-$2") + y;
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
        return O = y.substring(y.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + O + "-webkit-" + y + "-ms-flex-pack" + O + y;
      case 1005:
        return _.test(y) ? y.replace($, ":-webkit-") + y.replace($, ":-moz-") + y : y;
      case 1e3:
        switch (O = y.substring(13).trim(), j = O.indexOf("-") + 1, O.charCodeAt(0) + O.charCodeAt(j)) {
          case 226:
            O = y.replace(T, "tb");
            break;
          case 232:
            O = y.replace(T, "tb-rl");
            break;
          case 220:
            O = y.replace(T, "lr");
            break;
          default:
            return y;
        }
        return "-webkit-" + y + "-ms-" + O + y;
      case 1017:
        if (y.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (j = (y = q).length - 10, O = (y.charCodeAt(j) === 33 ? y.substring(0, j) : y).substring(q.indexOf(":", 7) + 1).trim(), te = O.charCodeAt(0) + (O.charCodeAt(7) | 0)) {
          case 203:
            if (111 > O.charCodeAt(8)) break;
          case 115:
            y = y.replace(O, "-webkit-" + O) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(O, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + y.replace(O, "-webkit-" + O) + ";" + y.replace(O, "-ms-" + O + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return O = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + O + "-ms-flex-" + O + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(Te, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(Te, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if ($e.test(q) === !0) return (O = q.substring(q.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(q.replace("stretch", "fill-available"), j, z, U).replace(":fill-available", ":stretch") : y.replace(O, "-webkit-" + O) + y.replace(O, "-moz-" + O.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, z + U === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(q, j) {
    var z = q.indexOf(j === 1 ? ":" : "{"), U = q.substring(0, j !== 3 ? z : 10);
    return z = q.substring(z + 1, q.length - 1), Fe(j !== 2 ? U : U.replace(Pe, "$1"), z, j);
  }
  function p(q, j) {
    var z = o(j, j.charCodeAt(0), j.charCodeAt(1), j.charCodeAt(2));
    return z !== j + ";" ? z.replace(he, " or ($1)").substring(4) : "(" + j + ")";
  }
  function g(q, j, z, U, y, te, O, oe, ee, re) {
    for (var Y = 0, le = j, pe; Y < Ce; ++Y)
      switch (pe = Re[Y].call(A, q, le, z, U, y, te, O, oe, ee, re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          le = pe;
      }
    if (le !== j) return le;
  }
  function b(q) {
    switch (q) {
      case void 0:
      case null:
        Ce = Re.length = 0;
        break;
      default:
        if (typeof q == "function") Re[Ce++] = q;
        else if (typeof q == "object") for (var j = 0, z = q.length; j < z; ++j)
          b(q[j]);
        else ze = !!q | 0;
    }
    return b;
  }
  function f(q) {
    return q = q.prefix, q !== void 0 && (Fe = null, q ? typeof q != "function" ? xe = 1 : (xe = 2, Fe = q) : xe = 0), f;
  }
  function A(q, j) {
    var z = q;
    if (33 > z.charCodeAt(0) && (z = z.trim()), se = z, z = [se], 0 < Ce) {
      var U = g(-1, j, z, z, _e, de, 0, 0, 0, 0);
      U !== void 0 && typeof U == "string" && (j = U);
    }
    var y = t(Xe, z, j, 0, 0);
    return 0 < Ce && (U = g(-2, y, z, z, _e, de, y.length, 0, 0, 0), U !== void 0 && (y = U)), se = "", Ae = 0, de = _e = 1, y;
  }
  var E = /^\0+/g, R = /[\0\r\f]/g, $ = /: */g, _ = /zoo|gra/, w = /([,: ])(transform)/g, I = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, B = /@(k\w+)\s*(\S*)\s*/, X = /::(place)/g, G = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, ue = /\(\s*(.*)\s*\)/g, he = /([\s\S]*?);/g, Te = /-self|flex-/g, Pe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, $e = /stretch|:\s*\w+\-(?:conte|avail)/, ie = /([^-])(image-set\()/, de = 1, _e = 1, Ae = 0, xe = 1, Xe = [], Re = [], Ce = 0, Fe = null, ze = 0, se = "";
  return A.use = b, A.set = f, e !== void 0 && f(e), A;
}
var $p = {
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
function Up(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var zp = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, bs = /* @__PURE__ */ Up(
  function(e) {
    return zp.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), jl = { exports: {} }, We = {};
var ys;
function Bp() {
  if (ys) return We;
  ys = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, g = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, A = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
  function X(T) {
    if (typeof T == "object" && T !== null) {
      var ue = T.$$typeof;
      switch (ue) {
        case t:
          switch (T = T.type, T) {
            case b:
            case f:
            case n:
            case s:
            case o:
            case E:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case g:
                case A:
                case _:
                case $:
                case p:
                  return T;
                default:
                  return ue;
              }
          }
        case r:
          return ue;
      }
    }
  }
  function G(T) {
    return X(T) === f;
  }
  return We.AsyncMode = b, We.ConcurrentMode = f, We.ContextConsumer = g, We.ContextProvider = p, We.Element = t, We.ForwardRef = A, We.Fragment = n, We.Lazy = _, We.Memo = $, We.Portal = r, We.Profiler = s, We.StrictMode = o, We.Suspense = E, We.isAsyncMode = function(T) {
    return G(T) || X(T) === b;
  }, We.isConcurrentMode = G, We.isContextConsumer = function(T) {
    return X(T) === g;
  }, We.isContextProvider = function(T) {
    return X(T) === p;
  }, We.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, We.isForwardRef = function(T) {
    return X(T) === A;
  }, We.isFragment = function(T) {
    return X(T) === n;
  }, We.isLazy = function(T) {
    return X(T) === _;
  }, We.isMemo = function(T) {
    return X(T) === $;
  }, We.isPortal = function(T) {
    return X(T) === r;
  }, We.isProfiler = function(T) {
    return X(T) === s;
  }, We.isStrictMode = function(T) {
    return X(T) === o;
  }, We.isSuspense = function(T) {
    return X(T) === E;
  }, We.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === n || T === f || T === s || T === o || T === E || T === R || typeof T == "object" && T !== null && (T.$$typeof === _ || T.$$typeof === $ || T.$$typeof === p || T.$$typeof === g || T.$$typeof === A || T.$$typeof === I || T.$$typeof === F || T.$$typeof === B || T.$$typeof === w);
  }, We.typeOf = X, We;
}
jl.exports = Bp();
var qp = jl.exports, ti = qp, Wp = {
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
}, Hp = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Vp = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Il = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ri = {};
ri[ti.ForwardRef] = Vp;
ri[ti.Memo] = Il;
function xs(e) {
  return ti.isMemo(e) ? Il : ri[e.$$typeof] || Wp;
}
var Gp = Object.defineProperty, Yp = Object.getOwnPropertyNames, vs = Object.getOwnPropertySymbols, Xp = Object.getOwnPropertyDescriptor, Jp = Object.getPrototypeOf, ws = Object.prototype;
function Pl(e, t, r) {
  if (typeof t != "string") {
    if (ws) {
      var n = Jp(t);
      n && n !== ws && Pl(e, n, r);
    }
    var o = Yp(t);
    vs && (o = o.concat(vs(t)));
    for (var s = xs(e), p = xs(t), g = 0; g < o.length; ++g) {
      var b = o[g];
      if (!Hp[b] && !(r && r[b]) && !(p && p[b]) && !(s && s[b])) {
        var f = Xp(t, b);
        try {
          Gp(e, b, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var Qp = Pl;
const Zp = /* @__PURE__ */ Bo(Qp);
var vt = { env: { NODE_ENV: "production" } };
function ur() {
  return (ur = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Ss = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Eo = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Nl.typeOf(e);
}, _a = Object.freeze([]), Nr = Object.freeze({});
function $n(e) {
  return typeof e == "function";
}
function ks(e) {
  return e.displayName || e.name || "Component";
}
function ni(e) {
  return e && typeof e.styledComponentId == "string";
}
var on = typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_ATTR || vt.env.SC_ATTR) || "data-styled", ai = typeof window < "u" && "HTMLElement" in window, Kp = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && vt.env.REACT_APP_SC_DISABLE_SPEEDY : vt.env.SC_DISABLE_SPEEDY !== void 0 && vt.env.SC_DISABLE_SPEEDY !== "" ? vt.env.SC_DISABLE_SPEEDY !== "false" && vt.env.SC_DISABLE_SPEEDY : vt.env.NODE_ENV !== "production")), ef = {};
function Bn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var tf = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++) n += this.groupSizes[o];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, p = s; r >= p; ) (p <<= 1) < 0 && Bn(16, "" + r);
      this.groupSizes = new Uint32Array(p), this.groupSizes.set(o), this.length = p;
      for (var g = s; g < p; g++) this.groupSizes[g] = 0;
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
    for (var o = this.groupSizes[r], s = this.indexOfGroup(r), p = s + o, g = s; g < p; g++) n += this.tag.getRule(g) + `/*!sc*/
`;
    return n;
  }, e;
}(), va = /* @__PURE__ */ new Map(), Ra = /* @__PURE__ */ new Map(), Mn = 1, pa = function(e) {
  if (va.has(e)) return va.get(e);
  for (; Ra.has(Mn); ) Mn++;
  var t = Mn++;
  return va.set(e, t), Ra.set(t, e), t;
}, rf = function(e) {
  return Ra.get(e);
}, nf = function(e, t) {
  t >= Mn && (Mn = t + 1), va.set(e, t), Ra.set(t, e);
}, af = "style[" + on + '][data-styled-version="5.3.11"]', of = new RegExp("^" + on + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), sf = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, p = o.length; s < p; s++) (n = o[s]) && e.registerName(t, n);
}, lf = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = r.length; o < s; o++) {
    var p = r[o].trim();
    if (p) {
      var g = p.match(of);
      if (g) {
        var b = 0 | parseInt(g[1], 10), f = g[2];
        b !== 0 && (nf(f, b), sf(e, f, g[3]), e.getTag().insertRules(b, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, cf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Dl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(g) {
    for (var b = g.childNodes, f = b.length; f >= 0; f--) {
      var A = b[f];
      if (A && A.nodeType === 1 && A.hasAttribute(on)) return A;
    }
  }(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(on, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = cf();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, uf = function() {
  function e(r) {
    var n = this.element = Dl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, p = 0, g = s.length; p < g; p++) {
        var b = s[p];
        if (b.ownerNode === o) return b;
      }
      Bn(17);
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
}(), df = function() {
  function e(r) {
    var n = this.element = Dl(r);
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
}(), pf = function() {
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
}(), Ts = ai, ff = { isServer: !ai, useCSSOMInjection: !Kp }, Oa = function() {
  function e(r, n, o) {
    r === void 0 && (r = Nr), n === void 0 && (n = {}), this.options = ur({}, ff, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && ai && Ts && (Ts = !1, function(s) {
      for (var p = document.querySelectorAll(af), g = 0, b = p.length; g < b; g++) {
        var f = p[g];
        f && f.getAttribute(on) !== "active" && (lf(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return pa(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(ur({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = o ? new pf(p) : s ? new uf(p) : new df(p), new tf(r)));
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
        var g = rf(p);
        if (g !== void 0) {
          var b = r.names.get(g), f = n.getGroup(p);
          if (b && f && b.size) {
            var A = on + ".g" + p + '[id="' + g + '"]', E = "";
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
}(), hf = /(a)(d)/gi, Cs = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function _o(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Cs(t % 52) + r;
  return (Cs(t % 52) + r).replace(hf, "$1-$2");
}
var en = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Ll = function(e) {
  return en(5381, e);
};
function Ml(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if ($n(r) && !ni(r)) return !1;
  }
  return !0;
}
var gf = Ll("5.3.11"), mf = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Ml(t), this.componentId = r, this.baseHash = en(gf, r), this.baseStyle = n, Oa.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = Yr(this.rules, t, r, n).join(""), g = _o(en(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(o, g)) {
        var b = n(p, "." + g, void 0, o);
        r.insertRules(o, g, b);
      }
      s.push(g), this.staticRulesId = g;
    }
    else {
      for (var f = this.rules.length, A = en(this.baseHash, n.hash), E = "", R = 0; R < f; R++) {
        var $ = this.rules[R];
        if (typeof $ == "string") E += $;
        else if ($) {
          var _ = Yr($, t, r, n), w = Array.isArray(_) ? _.join("") : _;
          A = en(A, w + R), E += w;
        }
      }
      if (E) {
        var I = _o(A >>> 0);
        if (!r.hasNameForId(o, I)) {
          var F = n(E, "." + I, void 0, o);
          r.insertRules(o, I, F);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), bf = /^\s*\/\/.*$/gm, yf = [":", "[", ".", "#"];
function xf(e) {
  var t, r, n, o, s = Nr, p = s.options, g = p === void 0 ? Nr : p, b = s.plugins, f = b === void 0 ? _a : b, A = new Fp(g), E = [], R = /* @__PURE__ */ function(w) {
    function I(F) {
      if (F) try {
        w(F + "}");
      } catch {
      }
    }
    return function(F, B, X, G, T, ue, he, Te, Pe, $e) {
      switch (F) {
        case 1:
          if (Pe === 0 && B.charCodeAt(0) === 64) return w(B + ";"), "";
          break;
        case 2:
          if (Te === 0) return B + "/*|*/";
          break;
        case 3:
          switch (Te) {
            case 102:
            case 112:
              return w(X[0] + B), "";
            default:
              return B + ($e === 0 ? "/*|*/" : "");
          }
        case -2:
          B.split("/*|*/}").forEach(I);
      }
    };
  }(function(w) {
    E.push(w);
  }), $ = function(w, I, F) {
    return I === 0 && yf.indexOf(F[r.length]) !== -1 || F.match(o) ? w : "." + t;
  };
  function _(w, I, F, B) {
    B === void 0 && (B = "&");
    var X = w.replace(bf, ""), G = I && F ? F + " " + I + " { " + X + " }" : X;
    return t = B, r = I, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), A(F || !I ? "" : I, G);
  }
  return A.use([].concat(f, [function(w, I, F) {
    w === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, $));
  }, R, function(w) {
    if (w === -2) {
      var I = E;
      return E = [], I;
    }
  }])), _.hash = f.length ? f.reduce(function(w, I) {
    return I.name || Bn(15), en(w, I.name);
  }, 5381).toString() : "", _;
}
var Fl = gt.createContext();
Fl.Consumer;
var $l = gt.createContext(), vf = ($l.Consumer, new Oa()), Ro = xf();
function Ul() {
  return Bt(Fl) || vf;
}
function zl() {
  return Bt($l) || Ro;
}
var wf = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Ro);
      var p = n.name + s.hash;
      o.hasNameForId(n.id, p) || o.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return Bn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ro), this.name + t.hash;
  }, e;
}(), Sf = /([A-Z])/, kf = /([A-Z])/g, Tf = /^ms-/, Cf = function(e) {
  return "-" + e.toLowerCase();
};
function As(e) {
  return Sf.test(e) ? e.replace(kf, Cf).replace(Tf, "-ms-") : e;
}
var Es = function(e) {
  return e == null || e === !1 || e === "";
};
function Yr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], p = 0, g = e.length; p < g; p += 1) (o = Yr(e[p], t, r, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (Es(e)) return "";
  if (ni(e)) return "." + e.styledComponentId;
  if ($n(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return Yr(b, t, r, n);
  }
  var f;
  return e instanceof wf ? r ? (e.inject(r, n), e.getName(n)) : e : Eo(e) ? function A(E, R) {
    var $, _, w = [];
    for (var I in E) E.hasOwnProperty(I) && !Es(E[I]) && (Array.isArray(E[I]) && E[I].isCss || $n(E[I]) ? w.push(As(I) + ":", E[I], ";") : Eo(E[I]) ? w.push.apply(w, A(E[I], I)) : w.push(As(I) + ": " + ($ = I, (_ = E[I]) == null || typeof _ == "boolean" || _ === "" ? "" : typeof _ != "number" || _ === 0 || $ in $p || $.startsWith("--") ? String(_).trim() : _ + "px") + ";"));
    return R ? [R + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var _s = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function oi(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return $n(e) || Eo(e) ? _s(Yr(Ss(_a, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : _s(Yr(Ss(e, r)));
}
var Bl = function(e, t, r) {
  return r === void 0 && (r = Nr), e.theme !== r.theme && e.theme || t || r.theme;
}, Af = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ef = /(^-|-$)/g;
function io(e) {
  return e.replace(Af, "-").replace(Ef, "");
}
var ql = function(e) {
  return _o(Ll(e) >>> 0);
};
function fa(e) {
  return typeof e == "string" && vt.env.NODE_ENV === "production";
}
var Oo = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, _f = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Rf(e, t, r) {
  var n = e[r];
  Oo(t) && Oo(n) ? Wl(n, t) : e[r] = t;
}
function Wl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var o = 0, s = r; o < s.length; o++) {
    var p = s[o];
    if (Oo(p)) for (var g in p) _f(g) && Rf(e, p[g], g);
  }
  return e;
}
var ii = gt.createContext();
ii.Consumer;
var so = {};
function Hl(e, t, r) {
  var n = ni(e), o = !fa(e), s = t.attrs, p = s === void 0 ? _a : s, g = t.componentId, b = g === void 0 ? function(B, X) {
    var G = typeof B != "string" ? "sc" : io(B);
    so[G] = (so[G] || 0) + 1;
    var T = G + "-" + ql("5.3.11" + G + so[G]);
    return X ? X + "-" + T : T;
  }(t.displayName, t.parentComponentId) : g, f = t.displayName, A = f === void 0 ? function(B) {
    return fa(B) ? "styled." + B : "Styled(" + ks(B) + ")";
  }(e) : f, E = t.displayName && t.componentId ? io(t.displayName) + "-" + t.componentId : t.componentId || b, R = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, $ = t.shouldForwardProp;
  n && e.shouldForwardProp && ($ = t.shouldForwardProp ? function(B, X, G) {
    return e.shouldForwardProp(B, X, G) && t.shouldForwardProp(B, X, G);
  } : e.shouldForwardProp);
  var _, w = new mf(r, E, n ? e.componentStyle : void 0), I = w.isStatic && p.length === 0, F = function(B, X) {
    return function(G, T, ue, he) {
      var Te = G.attrs, Pe = G.componentStyle, $e = G.defaultProps, ie = G.foldedComponentIds, de = G.shouldForwardProp, _e = G.styledComponentId, Ae = G.target, xe = function(U, y, te) {
        U === void 0 && (U = Nr);
        var O = ur({}, y, { theme: U }), oe = {};
        return te.forEach(function(ee) {
          var re, Y, le, pe = ee;
          for (re in $n(pe) && (pe = pe(O)), pe) O[re] = oe[re] = re === "className" ? (Y = oe[re], le = pe[re], Y && le ? Y + " " + le : Y || le) : pe[re];
        }), [O, oe];
      }(Bl(T, Bt(ii), $e) || Nr, T, Te), Xe = xe[0], Re = xe[1], Ce = function(U, y, te, O) {
        var oe = Ul(), ee = zl(), re = y ? U.generateAndInjectStyles(Nr, oe, ee) : U.generateAndInjectStyles(te, oe, ee);
        return re;
      }(Pe, he, Xe), Fe = ue, ze = Re.$as || T.$as || Re.as || T.as || Ae, se = fa(ze), q = Re !== T ? ur({}, T, {}, Re) : T, j = {};
      for (var z in q) z[0] !== "$" && z !== "as" && (z === "forwardedAs" ? j.as = q[z] : (de ? de(z, bs, ze) : !se || bs(z)) && (j[z] = q[z]));
      return T.style && Re.style !== T.style && (j.style = ur({}, T.style, {}, Re.style)), j.className = Array.prototype.concat(ie, _e, Ce !== _e ? Ce : null, T.className, Re.className).filter(Boolean).join(" "), j.ref = Fe, Js(ze, j);
    }(_, B, X, I);
  };
  return F.displayName = A, (_ = gt.forwardRef(F)).attrs = R, _.componentStyle = w, _.displayName = A, _.shouldForwardProp = $, _.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : _a, _.styledComponentId = E, _.target = n ? e.target : e, _.withComponent = function(B) {
    var X = t.componentId, G = function(ue, he) {
      if (ue == null) return {};
      var Te, Pe, $e = {}, ie = Object.keys(ue);
      for (Pe = 0; Pe < ie.length; Pe++) Te = ie[Pe], he.indexOf(Te) >= 0 || ($e[Te] = ue[Te]);
      return $e;
    }(t, ["componentId"]), T = X && X + "-" + (fa(B) ? B : io(ks(B)));
    return Hl(B, ur({}, G, { attrs: R, componentId: T }), r);
  }, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(B) {
    this._foldedDefaultProps = n ? Wl({}, e.defaultProps, B) : B;
  } }), Object.defineProperty(_, "toString", { value: function() {
    return "." + _.styledComponentId;
  } }), o && Zp(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), _;
}
var Ye = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = Nr), !Nl.isValidElementType(n)) return Bn(1, String(n));
    var s = function() {
      return r(n, o, oi.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, ur({}, o, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, ur({}, o, { attrs: Array.prototype.concat(o.attrs, p).filter(Boolean) }));
    }, s;
  }(Hl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ye[e] = Ye(e);
});
var Of = function() {
  function e(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = Ml(r), Oa.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function(r, n, o, s) {
    var p = s(Yr(this.rules, n, o, s).join(""), ""), g = this.componentId + r;
    o.insertRules(g, g, p);
  }, t.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, t.renderStyles = function(r, n, o, s) {
    r > 2 && Oa.registerId(this.componentId + r), this.removeStyles(r, o), this.createStyles(r, n, o, s);
  }, e;
}();
function Pa(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  var o = oi.apply(void 0, [e].concat(r)), s = "sc-global-" + ql(JSON.stringify(o)), p = new Of(o, s);
  function g(f) {
    var A = Ul(), E = zl(), R = Bt(ii), $ = rn(A.allocateGSInstance(s)).current;
    return A.server && b($, f, A, R, E), gu(function() {
      if (!A.server) return b($, f, A, R, E), function() {
        return p.removeStyles($, A);
      };
    }, [$, f, A, R, E]), null;
  }
  function b(f, A, E, R, $) {
    if (p.isStatic) p.renderStyles(f, ef, E, $);
    else {
      var _ = ur({}, A, { theme: Bl(A, R, g.defaultProps) });
      p.renderStyles(f, _, E, $);
    }
  }
  return gt.memo(g);
}
const Vl = () => {
  const [e, t] = ut(), [r, n] = ut(!1), [o, s] = ut(!1), [p, g] = ut("");
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
  }, [p]), [{ data: e, loading: r, error: o }, g];
}, sn = (e) => (e || []).join(" ");
const {
  entries: Gl,
  setPrototypeOf: Rs,
  isFrozen: Nf,
  getPrototypeOf: jf,
  getOwnPropertyDescriptor: If
} = Object;
let {
  freeze: Rt,
  seal: Ut,
  create: Yl
} = Object, {
  apply: No,
  construct: jo
} = typeof Reflect < "u" && Reflect;
Rt || (Rt = function(t) {
  return t;
});
Ut || (Ut = function(t) {
  return t;
});
No || (No = function(t, r, n) {
  return t.apply(r, n);
});
jo || (jo = function(t, r) {
  return new t(...r);
});
const ha = Ot(Array.prototype.forEach), Pf = Ot(Array.prototype.lastIndexOf), Os = Ot(Array.prototype.pop), _n = Ot(Array.prototype.push), Df = Ot(Array.prototype.splice), wa = Ot(String.prototype.toLowerCase), lo = Ot(String.prototype.toString), Ns = Ot(String.prototype.match), Rn = Ot(String.prototype.replace), Lf = Ot(String.prototype.indexOf), Mf = Ot(String.prototype.trim), tr = Ot(Object.prototype.hasOwnProperty), Ct = Ot(RegExp.prototype.test), On = Ff(TypeError);
function Ot(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    return No(e, t, n);
  };
}
function Ff(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return jo(e, r);
  };
}
function Me(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wa;
  Rs && Rs(e, null);
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
function $f(e) {
  for (let t = 0; t < e.length; t++)
    tr(e, t) || (e[t] = null);
  return e;
}
function zr(e) {
  const t = Yl(null);
  for (const [r, n] of Gl(e))
    tr(e, r) && (Array.isArray(n) ? t[r] = $f(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = zr(n) : t[r] = n);
  return t;
}
function Nn(e, t) {
  for (; e !== null; ) {
    const n = If(e, t);
    if (n) {
      if (n.get)
        return Ot(n.get);
      if (typeof n.value == "function")
        return Ot(n.value);
    }
    e = jf(e);
  }
  function r() {
    return null;
  }
  return r;
}
const js = Rt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), co = Rt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), uo = Rt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Uf = Rt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), po = Rt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), zf = Rt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Is = Rt(["#text"]), Ps = Rt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), fo = Rt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ds = Rt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ga = Rt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Bf = Ut(/\{\{[\w\W]*|[\w\W]*\}\}/gm), qf = Ut(/<%[\w\W]*|[\w\W]*%>/gm), Wf = Ut(/\$\{[\w\W]*/gm), Hf = Ut(/^data-[\-\w.\u00B7-\uFFFF]+$/), Vf = Ut(/^aria-[\-\w]+$/), Xl = Ut(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Gf = Ut(/^(?:\w+script|data):/i), Yf = Ut(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Jl = Ut(/^html$/i), Xf = Ut(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ls = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Vf,
  ATTR_WHITESPACE: Yf,
  CUSTOM_ELEMENT: Xf,
  DATA_ATTR: Hf,
  DOCTYPE_NAME: Jl,
  ERB_EXPR: qf,
  IS_ALLOWED_URI: Xl,
  IS_SCRIPT_OR_DATA: Gf,
  MUSTACHE_EXPR: Bf,
  TMPLIT_EXPR: Wf
});
const jn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Jf = function() {
  return typeof window > "u" ? null : window;
}, Qf = function(t, r) {
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
}, Ms = function() {
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
function Ql() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jf();
  const t = (x) => Ql(x);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== jn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, o = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: p,
    Node: g,
    Element: b,
    NodeFilter: f,
    NamedNodeMap: A = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: R,
    trustedTypes: $
  } = e, _ = b.prototype, w = Nn(_, "cloneNode"), I = Nn(_, "remove"), F = Nn(_, "nextSibling"), B = Nn(_, "childNodes"), X = Nn(_, "parentNode");
  if (typeof p == "function") {
    const x = r.createElement("template");
    x.content && x.content.ownerDocument && (r = x.content.ownerDocument);
  }
  let G, T = "";
  const {
    implementation: ue,
    createNodeIterator: he,
    createDocumentFragment: Te,
    getElementsByTagName: Pe
  } = r, {
    importNode: $e
  } = n;
  let ie = Ms();
  t.isSupported = typeof Gl == "function" && typeof X == "function" && ue && ue.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: de,
    ERB_EXPR: _e,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: xe,
    ARIA_ATTR: Xe,
    IS_SCRIPT_OR_DATA: Re,
    ATTR_WHITESPACE: Ce,
    CUSTOM_ELEMENT: Fe
  } = Ls;
  let {
    IS_ALLOWED_URI: ze
  } = Ls, se = null;
  const q = Me({}, [...js, ...co, ...uo, ...po, ...Is]);
  let j = null;
  const z = Me({}, [...Ps, ...fo, ...Ds, ...ga]);
  let U = Object.seal(Yl(null, {
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
  })), y = null, te = null, O = !0, oe = !0, ee = !1, re = !0, Y = !1, le = !0, pe = !1, ae = !1, be = !1, ne = !1, fe = !1, He = !1, ye = !0, pt = !1;
  const Qe = "user-content-";
  let ve = !0, J = !1, ce = {}, Ze = null;
  const mt = Me({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Be = null;
  const nr = Me({}, ["audio", "video", "img", "source", "image", "track"]);
  let Mt = null;
  const dr = Me({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", yt = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml";
  let bt = it, qt = !1, Wt = null;
  const Ir = Me({}, [wt, yt, it], lo);
  let lt = Me({}, ["mi", "mo", "mn", "ms", "mtext"]), St = Me({}, ["annotation-xml"]);
  const ar = Me({}, ["title", "style", "font", "a", "script"]);
  let Ie = null;
  const Ht = ["application/xhtml+xml", "text/html"], or = "text/html";
  let ke = null, nt = null;
  const ir = r.createElement("form"), kt = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, Ft = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(nt && nt === S)) {
      if ((!S || typeof S != "object") && (S = {}), S = zr(S), Ie = // eslint-disable-next-line unicorn/prefer-includes
      Ht.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? or : S.PARSER_MEDIA_TYPE, ke = Ie === "application/xhtml+xml" ? lo : wa, se = tr(S, "ALLOWED_TAGS") ? Me({}, S.ALLOWED_TAGS, ke) : q, j = tr(S, "ALLOWED_ATTR") ? Me({}, S.ALLOWED_ATTR, ke) : z, Wt = tr(S, "ALLOWED_NAMESPACES") ? Me({}, S.ALLOWED_NAMESPACES, lo) : Ir, Mt = tr(S, "ADD_URI_SAFE_ATTR") ? Me(zr(dr), S.ADD_URI_SAFE_ATTR, ke) : dr, Be = tr(S, "ADD_DATA_URI_TAGS") ? Me(zr(nr), S.ADD_DATA_URI_TAGS, ke) : nr, Ze = tr(S, "FORBID_CONTENTS") ? Me({}, S.FORBID_CONTENTS, ke) : mt, y = tr(S, "FORBID_TAGS") ? Me({}, S.FORBID_TAGS, ke) : {}, te = tr(S, "FORBID_ATTR") ? Me({}, S.FORBID_ATTR, ke) : {}, ce = tr(S, "USE_PROFILES") ? S.USE_PROFILES : !1, O = S.ALLOW_ARIA_ATTR !== !1, oe = S.ALLOW_DATA_ATTR !== !1, ee = S.ALLOW_UNKNOWN_PROTOCOLS || !1, re = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Y = S.SAFE_FOR_TEMPLATES || !1, le = S.SAFE_FOR_XML !== !1, pe = S.WHOLE_DOCUMENT || !1, ne = S.RETURN_DOM || !1, fe = S.RETURN_DOM_FRAGMENT || !1, He = S.RETURN_TRUSTED_TYPE || !1, be = S.FORCE_BODY || !1, ye = S.SANITIZE_DOM !== !1, pt = S.SANITIZE_NAMED_PROPS || !1, ve = S.KEEP_CONTENT !== !1, J = S.IN_PLACE || !1, ze = S.ALLOWED_URI_REGEXP || Xl, bt = S.NAMESPACE || it, lt = S.MATHML_TEXT_INTEGRATION_POINTS || lt, St = S.HTML_INTEGRATION_POINTS || St, U = S.CUSTOM_ELEMENT_HANDLING || {}, S.CUSTOM_ELEMENT_HANDLING && kt(S.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (U.tagNameCheck = S.CUSTOM_ELEMENT_HANDLING.tagNameCheck), S.CUSTOM_ELEMENT_HANDLING && kt(S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (U.attributeNameCheck = S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), S.CUSTOM_ELEMENT_HANDLING && typeof S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (U.allowCustomizedBuiltInElements = S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Y && (oe = !1), fe && (ne = !0), ce && (se = Me({}, Is), j = [], ce.html === !0 && (Me(se, js), Me(j, Ps)), ce.svg === !0 && (Me(se, co), Me(j, fo), Me(j, ga)), ce.svgFilters === !0 && (Me(se, uo), Me(j, fo), Me(j, ga)), ce.mathMl === !0 && (Me(se, po), Me(j, Ds), Me(j, ga))), S.ADD_TAGS && (se === q && (se = zr(se)), Me(se, S.ADD_TAGS, ke)), S.ADD_ATTR && (j === z && (j = zr(j)), Me(j, S.ADD_ATTR, ke)), S.ADD_URI_SAFE_ATTR && Me(Mt, S.ADD_URI_SAFE_ATTR, ke), S.FORBID_CONTENTS && (Ze === mt && (Ze = zr(Ze)), Me(Ze, S.FORBID_CONTENTS, ke)), ve && (se["#text"] = !0), pe && Me(se, ["html", "head", "body"]), se.table && (Me(se, ["tbody"]), delete y.tbody), S.TRUSTED_TYPES_POLICY) {
        if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw On('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw On('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        G = S.TRUSTED_TYPES_POLICY, T = G.createHTML("");
      } else
        G === void 0 && (G = Qf($, o)), G !== null && typeof T == "string" && (T = G.createHTML(""));
      Rt && Rt(S), nt = S;
    }
  }, Vt = Me({}, [...co, ...uo, ...Uf]), Gt = Me({}, [...po, ...zf]), Ar = function(S) {
    let N = X(S);
    (!N || !N.tagName) && (N = {
      namespaceURI: bt,
      tagName: "template"
    });
    const Q = wa(S.tagName), we = wa(N.tagName);
    return Wt[S.namespaceURI] ? S.namespaceURI === yt ? N.namespaceURI === it ? Q === "svg" : N.namespaceURI === wt ? Q === "svg" && (we === "annotation-xml" || lt[we]) : !!Vt[Q] : S.namespaceURI === wt ? N.namespaceURI === it ? Q === "math" : N.namespaceURI === yt ? Q === "math" && St[we] : !!Gt[Q] : S.namespaceURI === it ? N.namespaceURI === yt && !St[we] || N.namespaceURI === wt && !lt[we] ? !1 : !Gt[Q] && (ar[Q] || !Vt[Q]) : !!(Ie === "application/xhtml+xml" && Wt[S.namespaceURI]) : !1;
  }, st = function(S) {
    _n(t.removed, {
      element: S
    });
    try {
      X(S).removeChild(S);
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
      if (ne || fe)
        try {
          st(N);
        } catch {
        }
      else
        try {
          N.setAttribute(S, "");
        } catch {
        }
  }, pr = function(S) {
    let N = null, Q = null;
    if (be)
      S = "<remove></remove>" + S;
    else {
      const Ue = Ns(S, /^[\r\n\t ]+/);
      Q = Ue && Ue[0];
    }
    Ie === "application/xhtml+xml" && bt === it && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const we = G ? G.createHTML(S) : S;
    if (bt === it)
      try {
        N = new R().parseFromString(we, Ie);
      } catch {
      }
    if (!N || !N.documentElement) {
      N = ue.createDocument(bt, "template", null);
      try {
        N.documentElement.innerHTML = qt ? T : we;
      } catch {
      }
    }
    const Oe = N.body || N.documentElement;
    return S && Q && Oe.insertBefore(r.createTextNode(Q), Oe.childNodes[0] || null), bt === it ? Pe.call(N, pe ? "html" : "body")[0] : pe ? N.documentElement : Oe;
  }, fr = function(S) {
    return he.call(
      S.ownerDocument || S,
      S,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, jt = function(S) {
    return S instanceof E && (typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || !(S.attributes instanceof A) || typeof S.removeAttribute != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function");
  }, sr = function(S) {
    return typeof g == "function" && S instanceof g;
  };
  function Ke(x, S, N) {
    ha(x, (Q) => {
      Q.call(t, S, N, nt);
    });
  }
  const Yt = function(S) {
    let N = null;
    if (Ke(ie.beforeSanitizeElements, S, null), jt(S))
      return st(S), !0;
    const Q = ke(S.nodeName);
    if (Ke(ie.uponSanitizeElement, S, {
      tagName: Q,
      allowedTags: se
    }), S.hasChildNodes() && !sr(S.firstElementChild) && Ct(/<[/\w]/g, S.innerHTML) && Ct(/<[/\w]/g, S.textContent) || S.nodeType === jn.progressingInstruction || le && S.nodeType === jn.comment && Ct(/<[/\w]/g, S.data))
      return st(S), !0;
    if (!se[Q] || y[Q]) {
      if (!y[Q] && It(Q) && (U.tagNameCheck instanceof RegExp && Ct(U.tagNameCheck, Q) || U.tagNameCheck instanceof Function && U.tagNameCheck(Q)))
        return !1;
      if (ve && !Ze[Q]) {
        const we = X(S) || S.parentNode, Oe = B(S) || S.childNodes;
        if (Oe && we) {
          const Ue = Oe.length;
          for (let Ee = Ue - 1; Ee >= 0; --Ee) {
            const et = w(Oe[Ee], !0);
            et.__removalCount = (S.__removalCount || 0) + 1, we.insertBefore(et, F(S));
          }
        }
      }
      return st(S), !0;
    }
    return S instanceof b && !Ar(S) || (Q === "noscript" || Q === "noembed" || Q === "noframes") && Ct(/<\/no(script|embed|frames)/i, S.innerHTML) ? (st(S), !0) : (Y && S.nodeType === jn.text && (N = S.textContent, ha([de, _e, Ae], (we) => {
      N = Rn(N, we, " ");
    }), S.textContent !== N && (_n(t.removed, {
      element: S.cloneNode()
    }), S.textContent = N)), Ke(ie.afterSanitizeElements, S, null), !1);
  }, hr = function(S, N, Q) {
    if (ye && (N === "id" || N === "name") && (Q in r || Q in ir))
      return !1;
    if (!(oe && !te[N] && Ct(xe, N))) {
      if (!(O && Ct(Xe, N))) {
        if (!j[N] || te[N]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(It(S) && (U.tagNameCheck instanceof RegExp && Ct(U.tagNameCheck, S) || U.tagNameCheck instanceof Function && U.tagNameCheck(S)) && (U.attributeNameCheck instanceof RegExp && Ct(U.attributeNameCheck, N) || U.attributeNameCheck instanceof Function && U.attributeNameCheck(N)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            N === "is" && U.allowCustomizedBuiltInElements && (U.tagNameCheck instanceof RegExp && Ct(U.tagNameCheck, Q) || U.tagNameCheck instanceof Function && U.tagNameCheck(Q)))
          ) return !1;
        } else if (!Mt[N]) {
          if (!Ct(ze, Rn(Q, Ce, ""))) {
            if (!((N === "src" || N === "xlink:href" || N === "href") && S !== "script" && Lf(Q, "data:") === 0 && Be[S])) {
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
  }, It = function(S) {
    return S !== "annotation-xml" && Ns(S, Fe);
  }, gr = function(S) {
    Ke(ie.beforeSanitizeAttributes, S, null);
    const {
      attributes: N
    } = S;
    if (!N || jt(S))
      return;
    const Q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: j,
      forceKeepAttr: void 0
    };
    let we = N.length;
    for (; we--; ) {
      const Oe = N[we], {
        name: Ue,
        namespaceURI: Ee,
        value: et
      } = Oe, Je = ke(Ue);
      let at = Ue === "value" ? et : Mf(et);
      if (Q.attrName = Je, Q.attrValue = at, Q.keepAttr = !0, Q.forceKeepAttr = void 0, Ke(ie.uponSanitizeAttribute, S, Q), at = Q.attrValue, pt && (Je === "id" || Je === "name") && (Nt(Ue, S), at = Qe + at), le && Ct(/((--!?|])>)|<\/(style|title)/i, at)) {
        Nt(Ue, S);
        continue;
      }
      if (Q.forceKeepAttr || (Nt(Ue, S), !Q.keepAttr))
        continue;
      if (!re && Ct(/\/>/i, at)) {
        Nt(Ue, S);
        continue;
      }
      Y && ha([de, _e, Ae], (Xt) => {
        at = Rn(at, Xt, " ");
      });
      const br = ke(S.nodeName);
      if (hr(br, Je, at)) {
        if (G && typeof $ == "object" && typeof $.getAttributeType == "function" && !Ee)
          switch ($.getAttributeType(br, Je)) {
            case "TrustedHTML": {
              at = G.createHTML(at);
              break;
            }
            case "TrustedScriptURL": {
              at = G.createScriptURL(at);
              break;
            }
          }
        try {
          Ee ? S.setAttributeNS(Ee, Ue, at) : S.setAttribute(Ue, at), jt(S) ? st(S) : Os(t.removed);
        } catch {
        }
      }
    }
    Ke(ie.afterSanitizeAttributes, S, null);
  }, mr = function x(S) {
    let N = null;
    const Q = fr(S);
    for (Ke(ie.beforeSanitizeShadowDOM, S, null); N = Q.nextNode(); )
      Ke(ie.uponSanitizeShadowNode, N, null), Yt(N), gr(N), N.content instanceof s && x(N.content);
    Ke(ie.afterSanitizeShadowDOM, S, null);
  };
  return t.sanitize = function(x) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, Q = null, we = null, Oe = null;
    if (qt = !x, qt && (x = "<!-->"), typeof x != "string" && !sr(x))
      if (typeof x.toString == "function") {
        if (x = x.toString(), typeof x != "string")
          throw On("dirty is not a string, aborting");
      } else
        throw On("toString is not a function");
    if (!t.isSupported)
      return x;
    if (ae || Ft(S), t.removed = [], typeof x == "string" && (J = !1), J) {
      if (x.nodeName) {
        const et = ke(x.nodeName);
        if (!se[et] || y[et])
          throw On("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (x instanceof g)
      N = pr("<!---->"), Q = N.ownerDocument.importNode(x, !0), Q.nodeType === jn.element && Q.nodeName === "BODY" || Q.nodeName === "HTML" ? N = Q : N.appendChild(Q);
    else {
      if (!ne && !Y && !pe && // eslint-disable-next-line unicorn/prefer-includes
      x.indexOf("<") === -1)
        return G && He ? G.createHTML(x) : x;
      if (N = pr(x), !N)
        return ne ? null : He ? T : "";
    }
    N && be && st(N.firstChild);
    const Ue = fr(J ? x : N);
    for (; we = Ue.nextNode(); )
      Yt(we), gr(we), we.content instanceof s && mr(we.content);
    if (J)
      return x;
    if (ne) {
      if (fe)
        for (Oe = Te.call(N.ownerDocument); N.firstChild; )
          Oe.appendChild(N.firstChild);
      else
        Oe = N;
      return (j.shadowroot || j.shadowrootmode) && (Oe = $e.call(n, Oe, !0)), Oe;
    }
    let Ee = pe ? N.outerHTML : N.innerHTML;
    return pe && se["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && Ct(Jl, N.ownerDocument.doctype.name) && (Ee = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + Ee), Y && ha([de, _e, Ae], (et) => {
      Ee = Rn(Ee, et, " ");
    }), G && He ? G.createHTML(Ee) : Ee;
  }, t.setConfig = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ft(x), ae = !0;
  }, t.clearConfig = function() {
    nt = null, ae = !1;
  }, t.isValidAttribute = function(x, S, N) {
    nt || Ft({});
    const Q = ke(x), we = ke(S);
    return hr(Q, we, N);
  }, t.addHook = function(x, S) {
    typeof S == "function" && _n(ie[x], S);
  }, t.removeHook = function(x, S) {
    if (S !== void 0) {
      const N = Pf(ie[x], S);
      return N === -1 ? void 0 : Df(ie[x], N, 1)[0];
    }
    return Os(ie[x]);
  }, t.removeHooks = function(x) {
    ie[x] = [];
  }, t.removeAllHooks = function() {
    ie = Ms();
  }, t;
}
var Zf = Ql();
const zt = (e) => ({ __html: Zf.sanitize(e) });
function* Jr(e = "id-", t = 0) {
  let r = t;
  for (; ; )
    r += 1, yield e + r;
}
function Kf() {
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
function Zl({
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
const qn = ({ href: e = null }) => (
  // @ts-ignore
  /* @__PURE__ */ d.jsx(Tr, { label: "Apply now", ariaLabel: "Apply now", href: e, color: "gold" })
);
qn.propTypes = {
  href: C.string
};
C.string;
function si({ message: e, type: t }) {
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
si.propTypes = {
  type: C.oneOf(["error", "info"]).isRequired,
  message: C.string.isRequired
};
function Kl({ message: e }) {
  return /* @__PURE__ */ d.jsx(si, { message: e, type: "error" });
}
function eh({ message: e }) {
  return /* @__PURE__ */ d.jsx(si, { message: e, type: "info" });
}
const th = Ye.div`
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
function ec() {
  return /* @__PURE__ */ d.jsxs(th, { "data-testid": "loader", className: "container ball-loader mt-4", children: [
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
const tc = C.shape({
  ariaLabel: C.string,
  color: C.oneOf(["gold", "maroon", "gray", "dark"]),
  icon: C.string,
  href: C.string,
  label: C.string,
  onClick: C.func,
  size: C.oneOf(["default", "small", "xsmall"])
}), li = {
  url: C.string,
  altText: C.string,
  cssClass: C.arrayOf(C.string)
}, rc = {
  text: C.string,
  cssClass: C.arrayOf(C.string)
}, ci = {
  type: C.oneOf(["video", "youtube"]),
  url: C.string,
  altText: C.string,
  vttUrl: C.string,
  title: C.string
}, rh = {
  url: C.string,
  text: C.string,
  isActive: C.bool
}, Sr = C.shape({
  ...li
}), Na = C.shape({
  ...rc
}), nh = C.shape({
  ...ci
}), Gr = C.shape({
  ...rh
}), nc = C.shape({
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
}), Io = C.shape({
  text: C.string,
  url: C.string
}), Br = C.shape({
  icon: C.arrayOf(C.string),
  title: C.string,
  content: C.string,
  buttonLink: tc
}), Po = C.arrayOf(
  C.shape({
    title: C.string,
    url: C.string
  })
), ac = C.shape({
  career: Gr,
  growth: C.oneOfType([C.number, C.string]),
  medianSalary: C.string,
  brightOutlook: C.bool,
  greenOccupation: C.bool
}), ah = {
  hideCollegeSchool: C.bool,
  defaultView: C.oneOf(["list-view", "grid-view"]),
  cardDefaultImage: Sr
}, oh = C.shape({
  ...ah
}), ui = {
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
}, Zr = C.shape({
  image: Sr,
  title: C.string,
  text: C.string,
  button: tc
}), Fs = C.shape({
  faculty: Zr,
  programs: Zr,
  research: Zr,
  inclusion: Zr,
  mentors: Zr,
  honors: Zr
}), oc = {
  hide: C.bool,
  sectionIntroText: C.string,
  cards: Fs,
  defaultCards: Fs
};
C.shape({
  ...ui
});
const ho = C.shape({
  id: C.oneOfType([C.string, C.number]),
  value: C.string
}), ic = C.shape({
  locations: C.arrayOf(ho),
  asuLocals: C.arrayOf(ho),
  acceleratedConcurrent: ho
});
var dt = {}, lr, cr;
function Do() {
  throw new Error("setTimeout has not been defined");
}
function Lo() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? lr = setTimeout : lr = Do;
  } catch {
    lr = Do;
  }
  try {
    typeof clearTimeout == "function" ? cr = clearTimeout : cr = Lo;
  } catch {
    cr = Lo;
  }
})();
function sc(e) {
  if (lr === setTimeout)
    return setTimeout(e, 0);
  if ((lr === Do || !lr) && setTimeout)
    return lr = setTimeout, setTimeout(e, 0);
  try {
    return lr(e, 0);
  } catch {
    try {
      return lr.call(null, e, 0);
    } catch {
      return lr.call(this, e, 0);
    }
  }
}
function ih(e) {
  if (cr === clearTimeout)
    return clearTimeout(e);
  if ((cr === Lo || !cr) && clearTimeout)
    return cr = clearTimeout, clearTimeout(e);
  try {
    return cr(e);
  } catch {
    try {
      return cr.call(null, e);
    } catch {
      return cr.call(this, e);
    }
  }
}
var kr = [], tn = !1, Vr, Sa = -1;
function sh() {
  !tn || !Vr || (tn = !1, Vr.length ? kr = Vr.concat(kr) : Sa = -1, kr.length && lc());
}
function lc() {
  if (!tn) {
    var e = sc(sh);
    tn = !0;
    for (var t = kr.length; t; ) {
      for (Vr = kr, kr = []; ++Sa < t; )
        Vr && Vr[Sa].run();
      Sa = -1, t = kr.length;
    }
    Vr = null, tn = !1, ih(e);
  }
}
dt.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  kr.push(new cc(e, t)), kr.length === 1 && !tn && sc(lc);
};
function cc(e, t) {
  this.fun = e, this.array = t;
}
cc.prototype.run = function() {
  this.fun.apply(null, this.array);
};
dt.title = "browser";
dt.browser = !0;
dt.env = {};
dt.argv = [];
dt.version = "";
dt.versions = {};
function Cr() {
}
dt.on = Cr;
dt.addListener = Cr;
dt.once = Cr;
dt.off = Cr;
dt.removeListener = Cr;
dt.removeAllListeners = Cr;
dt.emit = Cr;
dt.prependListener = Cr;
dt.prependOnceListener = Cr;
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
const lh = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, uc = Object.values(lh), $s = {
  offeredBy: { icon: "university", title: "Offered by" },
  locations: { icon: "map-marker-alt", title: "Location" },
  firstRequirementMathCourse: {
    icon: "pencil-alt",
    title: "First Required math Course"
  },
  mathIntensity: { icon: "calculator", title: "Math intensity" },
  timeCommitment: { icon: "calendar-alt", title: "Time commitment" },
  stemOptText: { icon: "star", title: "STEM-OPT extension eligible" }
}, dc = "grid-view", Mo = "list-view", pc = "degree-list-programs", fc = "Sorry, Something went wrong.", ch = "STEM-OPT for international students on F-1 visas", uh = `This degree is not found.
  This may be a temporary issue. Please try again in 5 minutes.
  If the issue persists, the degree may no longer be available.`, dh = Kf(), ph = (e) => {
  const t = e || dh, r = `${t}/assets/img/detail-page`, n = `${t}/assets/img/listing-page`, o = {
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
}, fh = (e) => {
  if (typeof e == "string") return "Degrees";
  const { program: t, cert: r } = e;
  return t === "undergrad" && r === "true" ? "Undergraduate Minors and Certificates" : t === "undergrad" ? "Undergraduate Degrees" : t === "graduate" && r === "true" ? "Graduate Certificates" : t === "graduate" ? "Graduate Degrees" : "Degrees";
}, di = [
  { id: 0, value: "DTPHX", text: "Downtown Phoenix campus" },
  { id: 1, value: "POLY", text: "Polytechnic campus" },
  { id: 2, value: "TEMPE", text: "Tempe campus" },
  { id: 3, value: "WEST", text: "West Valley campus" },
  { id: 4, value: "ONLNE", text: "ASU Online" }
], hh = di[4], hc = [
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
], pi = [
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
], gh = pi[0], Fo = (e) => (e == null ? void 0 : e.value) && (e == null ? void 0 : e.value) !== "all", mh = (e) => {
  var t;
  return ((t = [
    ...di,
    ...hc,
    ...pi
  ].find(({ value: r }) => r === e)) == null ? void 0 : t.text) || e;
}, ht = {
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
}, bh = {
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
}, Us = (e, t) => {
  const r = ["TUCSN", "AWC"], n = e.toUpperCase(), o = r.includes(n) ? `${n}-${t}` : n;
  return bh[o];
};
function gc({ anchorMenu: e }) {
  var n, o;
  const t = (n = e == null ? void 0 : e.externalAnchors) == null ? void 0 : n.map((s) => {
    const { targetIdName: p, text: g } = s;
    return {
      targetIdName: p.startsWith("#") ? p.substring(1) : p,
      text: g,
      icon: null
    };
  }), r = Object.keys(ht).filter((s) => e[s]).map((s) => ht[s]).concat(t || []);
  return /* @__PURE__ */ d.jsx(
    Al,
    {
      items: r,
      firstElementId: (o = r[0]) == null ? void 0 : o.targetIdName,
      focusFirstFocusableElement: !1
    }
  );
}
gc.propTypes = {
  anchorMenu: C.shape(ui)
};
function yh(e, t) {
  const r = Math.floor(e / t), n = e % t;
  return r + (n > 0 ? 1 : 0);
}
const xh = "https://degrees.apps.asu.edu", vh = "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan/", wh = {
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
}, Sh = {
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
}, zs = (e) => e.map((t) => ({
  title: t.acadPlanDescription,
  url: t.academicOfficeUrl
})).sort((t, r) => t.title.localeCompare(r.title)), kh = (e) => e == null ? void 0 : e.map((t) => ({
  career: {
    text: t.alternateTitle,
    url: `${xh}/career-details/${t.onetCode}`
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
function mc(e, t) {
  const r = { ...t, ...e };
  if (r.collegeAcadOrg && (r.collegeOrg = r.collegeAcadOrg, delete r.collegeAcadOrg), r.program) {
    const { program: b } = r;
    r.cert === "true" && b === "undergrad" ? r.degreeType = "UGCM" : b === "graduate" ? r.degreeType = "GR" : r.degreeType = "UG", delete r.program;
  }
  r.acadPlan && (r.endpoint += `/${r.acadPlan}`, delete r.acadPlan);
  const { endpoint: n, include: o, ...s } = r, p = o.split(",").map((b) => `include=${b.trim()}`).join("&"), g = Object.keys(s).reduce(
    (b, f) => `${b}&${f}=${r[f]}`,
    ""
  );
  return `${n}?${g}&${p}`;
}
function Da(e, t = "h2") {
  return (
    /** @type {keyof JSX.IntrinsicElements} */
    uc.includes(e.component) ? e.component : t
  );
}
function $o(e) {
  return typeof e != "string" ? console.error("Invalid string", e) : e == null ? void 0 : e.replace(
    /\w\S*/g,
    (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
  );
}
function Th(e) {
  return /<\/?[a-z][\s\S]*>/i.test(e);
}
const bc = "AsuDevTools", Ch = {
  isDebug: !1
};
function Ah() {
  const e = JSON.parse(localStorage.getItem(bc));
  return e == null ? void 0 : e.isDebug;
}
window.__AsuDevTools = {
  enableDebug(e) {
    const t = JSON.stringify({
      ...Ch,
      isDebug: e
    });
    localStorage.setItem(bc, t);
  }
};
async function go(e) {
  return e != null && e.length ? (await Promise.all(
    e.map(async (r) => {
      try {
        return await (await Promise.race([
          fetch(
            `${vh}${r}?include=academicOfficeUrl&include=acadPlanDescription`
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
function Eh(e, t) {
  Promise.all(e).then((r) => {
    const n = r[0], o = r[1];
    t({ accelerateData: n, concurrentData: o });
  }).catch(() => {
    t({ accelerateData: [], concurrentData: [] });
  });
}
function Wn({ contents: e = [] }) {
  const t = Jr("paragrap-");
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.map(
    (r) => Th(r.text) ? /* @__PURE__ */ d.jsx(
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
Wn.propTypes = {
  contents: C.arrayOf(Na)
};
const _h = Pa`
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
`, Rh = Ye.div`
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
`, Oh = Ye.img`
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
  const p = rn(), g = rn(), b = Da(s);
  function f() {
    const E = p.current.offsetHeight;
    g.current.style.height = `${E * 1.2}px`;
  }
  return At(() => {
    f();
    let A;
    const E = () => {
      clearTimeout(A), A = setTimeout(() => f(), 150);
    };
    return window.addEventListener("resize", E), () => window.removeEventListener("resize", E);
  }, [g, p]), /* @__PURE__ */ d.jsxs("div", { className: `uds-image-overlap content-${r}`, children: [
    /* @__PURE__ */ d.jsx(_h, {}),
    /* @__PURE__ */ d.jsx(
      Oh,
      {
        ref: g,
        className: "img-fluid",
        src: t == null ? void 0 : t.url,
        alt: t == null ? void 0 : t.altText,
        onError: (A) => {
          A.currentTarget.style.display = "none";
        }
      }
    ),
    /* @__PURE__ */ d.jsxs(Rh, { ref: p, className: "content-wrapper", children: [
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
const yc = Pa`
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
`, xc = Ye.main`
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
function Nh({
  baseIconClassName1: e,
  baseIconAriaLabel1: t,
  baseIconStyle1: r,
  baseIconAriaLabel2: n,
  baseIconClassName2: o,
  baseIconStyle2: s,
  ariaLabel: p,
  ariaControls: g,
  dataId: b,
  onClick: f = () => null
}) {
  const [A, E] = ut(!1), R = (w, I, F, B) => /* @__PURE__ */ d.jsx(
    "span",
    {
      style: {
        cursor: "pointer",
        display: I
      },
      children: /* @__PURE__ */ d.jsx(
        "i",
        {
          className: `${w}`,
          "aria-label": F,
          title: F,
          style: B
        }
      )
    }
  ), $ = () => {
    E(!A), f(!A);
  }, _ = /* @__PURE__ */ d.jsxs(
    "span",
    {
      "data-testid": b,
      role: "button",
      className: "element-focus",
      tabIndex: 0,
      onKeyDown: (w) => w.key === "Enter" && $(),
      onClick: $,
      "aria-label": p,
      "aria-expanded": A,
      "aria-controls": g,
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
  return Qs(() => _, [A]);
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
const mo = (e) => /* @__PURE__ */ d.jsx("span", {}), jh = ({
  onClick: e = () => null,
  ariaLabel: t,
  ariaControls: r,
  dataId: n
}) => Nh({
  dataId: n,
  baseIconClassName1: "fas fa-chevron-up",
  baseIconClassName2: "fas fa-chevron-down",
  onClick: e,
  ariaLabel: t,
  ariaControls: r
}), dn = Ys(null), fi = ({ listPageProps: e, detailPageProps: t, children: r }) => {
  const { detailPageDefault: n, listingPageDefault: o } = Qs(
    () => ph((e || t).appPathFolder),
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
fi.propTypes = {
  children: C.oneOfType([
    C.arrayOf(C.element),
    C.element
  ]),
  listPageProps: C.shape({}),
  detailPageProps: C.shape({})
};
const Ih = ({
  dataSource: e,
  tableView: t = [],
  programs: r,
  stateFilters: n
}) => {
  const { collegeAcadOrg: o, departmentCode: s } = e;
  At(() => {
    if (!r || !Ah()) return;
    const p = "background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;", g = "font-size:30px;", b = "font-size:24px;", f = "font-size: 18px; margin-left: 0.5rem;";
    console.group("<< ASU Degree Page >>"), console.log("%c🏫 Listing Page Programs 📚", p + g), console.log(
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
}, Bs = (e) => e.degreeType === "UG", vc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, wc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, Ph = (e) => Object.keys(e).length > 0 ? wc(e) || vc(e) : !0, In = (e) => {
  const { owners: t } = e;
  return t ? t.reduce(
    (n, o) => n.percentOwned > o.percentOwned ? n : o
  ) : null;
};
function ln(e = {}) {
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
    isUndergradProgram: () => Bs(e),
    isPhdOrMasters: () => e.degreeDescriptionShort !== "CERT",
    // Only called in functions that already checked if its a grad program
    isGradProgram: () => e.degreeType === "GR",
    // GR is present for grad degrees and grad certificates
    isMinorOrCertificate: () => e.degreeType === "UGCM" || e.degreeType === "GR" && e.acadPlanTypeDescription === "Certificate",
    /** @returns {"undergrad" |  "graduate"} */
    getProgramType: () => Bs(e) ? "undergrad" : "graduate",
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
      } catch (o) {
        return console.error("Error parsing HTML: ", o.message), "";
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
    hasGraduateApplyDates: () => vc(e),
    /** @return {Object.<string, string>} */
    getPlanDeadlines: () => e.applicationDeadlines,
    hasPlanDeadlines: () => wc(e),
    isValidActiveProgram: () => Ph(e),
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
      const r = [...e.majorMapSubplans], n = (p, g) => p.filter(
        (b) => b.acadSubPlanCode !== g
      ), o = (p, g) => p.some(
        (b) => b.acadSubPlanCode !== g
      ), s = [];
      for (let p = r.length - 1; p >= 0 && t.length !== 0; p -= 1) {
        const g = r[p];
        (g.defaultFlag || o(
          t,
          g.acadSubPlanCode
        )) && (t = n(
          t,
          g.acadSubPlanCode
        ), s.push(g));
      }
      return s;
    },
    getSubPln: () => e.subplans
  };
}
function Dh(e) {
  const t = e.getProgramType(), r = [], n = (g) => ({
    text: g,
    url: ""
  }), o = (g) => ({
    text: "Online",
    url: g
  }), s = e.getCampusList().map((g) => g.campusCode);
  s.length > 0 && r.push(
    ...s.map(
      (g) => g === "ONLNE" && o(e.getCurriculumUrl()) || Us(g, t) || n(g)
    )
  );
  const p = e.getCampusWue();
  return p && r.push(
    Us(p, t) || n(p)
  ), r;
}
const Lh = (e, t) => {
  const r = { ...e };
  return r.globalOpportunity && !t.getGlobalExp() && (r.globalOpportunity = !1), r.careerOutlook && !t.getAsuCareerOpportunity() && (r.careerOutlook = !1), r.attendOnline && !t.getCurriculumUrl() && (r.attendOnline = !1), r;
}, Mh = (e) => {
  var o;
  const t = Object.values(e).filter(
    (s) => s === !0
  );
  return ((o = e == null ? void 0 : e.externalAnchors) == null ? void 0 : o.length) > 0 || t.length > 0;
};
function Fh(e) {
  return "";
}
function $h(e) {
  return "";
}
function Uh() {
  return "";
}
function La(e, t) {
  let r = t || "";
  return r = r.replaceAll("{INSTITUTION_CODE}", e.getInstitution()).replaceAll("{ACAD_PLAN_CODE}", e.getAcadPlan()), r;
}
function Sc(e, t) {
  return `${La(e, t)}#${ht.flexibleDegreeOptions.acceleratedId}`;
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
    program: g,
    showCerts: b
  }
}) {
  const f = (F) => !t || F.getCollegeAcadOrgJoint().includes(t), A = (F) => !r || F.getDepartmentCode().includes(r), E = (F) => {
    var B;
    return !o.length || ((B = F.getCampusList()) == null ? void 0 : B.some((X) => o.some((G) => G.value === X.campusCode)));
  }, R = (F = {}) => {
    var B;
    return !Fo(n) || ((B = F[n.value]) == null ? void 0 : B.length) > 0;
  }, $ = (F, B) => B ? new RegExp(B, "i").test(F.getFullDescription()) : !0, _ = (F) => !(p != null && p.includes(F.getAcadPlan())), w = (F) => g === "undergrad" ? !0 : b === "true" && g === "graduate" ? F.isMinorOrCertificate() : F.isPhdOrMasters(), I = (F) => {
    const B = ln(F);
    return f(B) && A(B) && E(B) && R(F) && $(B, s) && _(B) && w(B);
  };
  return e.filter(I);
}
const zh = (e) => e.sort(
  (r, n) => r.acadPlanMarketingDescription.localeCompare(
    n.acadPlanMarketingDescription
  )
), jr = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: o = "",
  text: s = "",
  region: p = "",
  component: g = ""
}) => {
  const { dataLayer: b } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: p.toLowerCase(),
    section: o.toLowerCase(),
    text: s.toLowerCase(),
    component: g.toLowerCase()
  };
  b && b.push(f);
};
function hi({ breadcrumbs: e, section: t }) {
  const r = Jr("breadcrumb-");
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
            onClick: () => jr({
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
        onClick: () => jr({
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
hi.propTypes = {
  breadcrumbs: C.arrayOf(Gr),
  section: C.string
};
const Bh = () => /* @__PURE__ */ d.jsx("div", { className: "container", "data-testid": "browse-title", children: /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Browse degrees" }) }) }), bo = ({
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
      children: o == null ? void 0 : o.map((p) => /* @__PURE__ */ d.jsx("option", { id: p.id, value: p.value, children: p.text }, p.id))
    }
  )
] }), qh = Ye.div`
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
`, Wh = Ye.button`
  font-weight: 400;
  text-decoration: underline;
`, Hh = {
  event: "select",
  action: "click",
  name: "onclick"
}, Vh = {
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
}, yo = (e) => ({
  id: e.id,
  value: e.value,
  text: e.text
}), Gh = (e) => e.map((t) => t.text).join(", "), Ws = (e, t) => {
  jr({ ...Hh, type: e, text: t });
}, Hs = (e) => {
  jr({ ...Vh, text: e });
}, kc = ({ value: e, onChange: t, onApply: r, onClean: n }) => {
  const o = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (b, { target: { selectedOptions: f } }) => {
      let A = [], E = [];
      const R = Array.from(f, yo), { locations: $, asuLocals: _ } = e;
      ({
        locationsRender: () => {
          A = R, E = _;
        },
        asuLocalsRender: () => {
          E = R, A = $;
        }
      })[`${b}Render`](), t({
        ...e,
        locations: A,
        asuLocals: E
      }), Ws({
        locations: "location or online",
        asuLocals: "as local"
      }[b], Gh(R));
    }
  ), s = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (b, { target: { selectedOptions: f } }) => {
      t({ ...e, [b]: yo(f[0]) }), Ws(
        "accelerated/concurrent",
        yo(f[0]).text
      );
    }
  ), p = () => {
    r == null || r({
      ...e,
      isActive: !0
    });
  }, g = () => {
    t(Pn), n == null || n();
  };
  return /* @__PURE__ */ d.jsxs(qh, { className: "container", "data-testid": "filters", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Filter your results" }),
    /* @__PURE__ */ d.jsxs("form", { className: "mt-3 uds-form row", children: [
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        bo,
        {
          multiple: !0,
          id: "locations",
          label: "Campuses or online",
          selected: e.locations.map((b) => b.value),
          options: di,
          onChange: o
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        bo,
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
        bo,
        {
          id: "acceleratedConcurrent",
          label: "Accelerated, Concurrent",
          selected: e.acceleratedConcurrent.value,
          options: pi,
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
            p(), Hs("apply filters");
          }
        }
      ),
      /* @__PURE__ */ d.jsx(
        Wh,
        {
          "data-testid": "btn-clear-filters",
          className: "btn btn-link",
          onClick: () => {
            g(), Hs("clean filters");
          },
          children: "Clear filters"
        }
      )
    ] })
  ] });
};
kc.propTypes = {
  value: ic,
  onChange: C.func,
  onApply: C.func,
  onClean: C.func
};
function Tc({
  value: { isActive: e, locations: t, asuLocals: r, acceleratedConcurrent: n } = {},
  onRemove: o
}) {
  const s = Jr("filter-"), p = (t == null ? void 0 : t.length) + (r == null ? void 0 : r.length) + (Fo(n) ? 1 : 0), g = (b, f) => {
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
      t.map((b) => g("locations", b)),
      r.map((b) => g("asuLocals", b)),
      (Fo(n) ? [n] : []).map((b) => g("acceleratedConcurrent", b))
    ] }) })
  ] });
}
Tc.propTypes = {
  value: ic,
  onRemove: C.func
};
const Yh = Ye.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`, Xh = Ye.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;
function Jh({
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
          /* @__PURE__ */ d.jsx(Wn, { contents: r }),
          /* @__PURE__ */ d.jsx(qn, { href: e })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-7 d-none d-sm-none d-md-block", children: /* @__PURE__ */ d.jsx(Yh, { className: "row", children: n.images.map((s, p) => /* @__PURE__ */ d.jsx(
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
function Qh({
  applyNowUrl: e,
  title: t,
  contents: r,
  image: n,
  video: o
}) {
  const s = Da(t);
  return /* @__PURE__ */ d.jsx(
    Xh,
    {
      className: "container",
      "data-type": "text-media",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ d.jsxs("div", { className: "row gy-3", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ d.jsx(s, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${sn(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ d.jsx(Wn, { contents: r }),
          /* @__PURE__ */ d.jsx(qn, { href: e })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7 mt-2 mt-sm-0", children: [
          o && /* @__PURE__ */ d.jsx(
            ei,
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
function Zh({
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
          contentChildren: /* @__PURE__ */ d.jsx("div", { className: "mt-2", children: /* @__PURE__ */ d.jsx(qn, { href: e }) })
        }
      ) }) })
    }
  );
}
const Kh = ({ applyNowUrl: e, title: t, contents: r }) => {
  const n = Da(t);
  return /* @__PURE__ */ d.jsx("section", { className: "container", "data-type": "text", "data-testid": "intro-content", children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-5", children: /* @__PURE__ */ d.jsx(n, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${sn(t.cssClass)}`, children: t.text }) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7", children: [
      /* @__PURE__ */ d.jsx(Wn, { contents: r }),
      /* @__PURE__ */ d.jsx(qn, { href: e })
    ] })
  ] }) });
}, gi = ({
  applyNowUrl: e,
  type: t,
  title: r,
  contents: n,
  image: o,
  video: s,
  photoGrid: p
}) => ({
  text: () => Kh({ applyNowUrl: e, title: r, contents: n }),
  "text-media": () => Qh({
    applyNowUrl: e,
    title: r,
    contents: n,
    image: o,
    video: s
  }),
  "text-image-overlay": () => Zh({ applyNowUrl: e, title: r, contents: n, image: o }),
  "text-photo-grid": () => Jh({
    applyNowUrl: e,
    title: r,
    contents: n,
    photoGrid: p
  }),
  undefined: () => (console.error(
    `the type '${t}' is not supported by the 'IntroContent' component.`
  ), null)
})[t]();
gi.propTypes = {
  applyNowUrl: C.string,
  type: C.oneOf([
    "text",
    "text-media",
    "text-image-overlay",
    "text-photo-grid"
  ]).isRequired,
  video: C.shape({ ...ci }),
  image: C.shape({ ...li }),
  header: Na,
  title: C.shape({
    ...rc,
    component: C.oneOf(uc)
  }),
  contents: C.arrayOf(Na),
  photoGrid: C.shape({
    images: C.arrayOf(Sr)
  })
};
const Ma = {
  programs: C.arrayOf(C.object),
  totalRows: C.number,
  loading: C.bool,
  actionUrls: C.shape({
    applyNowUrl: C.string,
    majorInfoUrl: C.string,
    majorInfoOnlineUrl: C.string
  }),
  degreesPerPage: C.number
}, eg = Ye.div`
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
`, Cc = ({ programs: e, actionUrls: t }) => {
  var p, g, b, f, A;
  const { state: r } = Bt(dn), n = (g = (p = r == null ? void 0 : r.listPageProps) == null ? void 0 : p.programList) == null ? void 0 : g.settings, o = ((A = (f = (b = r == null ? void 0 : r.listPageProps) == null ? void 0 : b.programList) == null ? void 0 : f.dataSource) == null ? void 0 : A.program) === "graduate", s = e.map((E) => {
    const R = ln(E), $ = () => {
      var B;
      const I = R.isOnline() ? R.getOnlineMajorMapURL() : R.getGeneralDegreeMajorMap();
      let F;
      try {
        F = `<a href=${(B = new URL(I)) == null ? void 0 : B.toString()}>${R.getRequiredCoursesLabel()} Map</a>`;
      } catch {
        return "";
      }
      return F;
    }, _ = () => `<div>
        ${R.hasConcurrentDegrees() ? "<div className='cell-container'>concurrent</div>" : ""}
        ${R.hasAccelerateDegrees() ? `<div className="cell-container">
                <a href=${Sc(
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
            <a href=${La(R, t.majorInfoUrl)}>
              ${R.getMajorDesc()}
            </a>
        </li>
        <li>
          <strong>Degree:</strong>
          <br />${R.getDegree()}
        </li>
        ${o ? "" : `<li>
              <strong>Required Courses:</strong>
              <br />${$()}
            </li>`}
        <li>
          <strong>Campus or location:</strong>
          <br />${R.getCampusList().map((w) => $o(w.campusCode)).join(", ")}
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
  return /* @__PURE__ */ d.jsx(eg, { "data-testid": "accordion-view", children: /* @__PURE__ */ d.jsx(Ho, { cards: s }) });
};
Cc.propTypes = {
  ...Ma
};
const tg = Ye.section`
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
  var b, f, A, E;
  const { defaultState: n, state: o } = Bt(dn), s = (E = (A = (f = (b = o == null ? void 0 : o.listPageProps) == null ? void 0 : b.programList) == null ? void 0 : f.settings) == null ? void 0 : A.cardDefaultImage) == null ? void 0 : E.url, p = n.detailPageDefault.hero.image.url, g = s || p;
  return /* @__PURE__ */ d.jsx(
    tg,
    {
      id: pc,
      className: "container row",
      "data-loading": t,
      "data-testid": "grid-view",
      children: e.map((R) => {
        const $ = ln(R);
        return /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-4 col-lg-3 mb-2", children: /* @__PURE__ */ d.jsx(
          ft,
          {
            type: "degree",
            horizontal: !1,
            clickable: !1,
            image: g,
            imageAltText: "An example image",
            title: $.getMajorDesc(),
            linkLabel: "View Program Details",
            linkUrl: La($, r.majorInfoUrl),
            buttons: [
              {
                color: "maroon",
                size: "small",
                label: "Reqeuest Info",
                href: Uh()
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
  ...Ma
};
const rg = [
  {
    dataKey: "Major",
    label: "Major",
    className: "major",
    sortable: !0,
    contentTemplate: ({ resolver: e, rowIndex: t, actionUrls: r, onClick: n }) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
      /* @__PURE__ */ d.jsx("a", { href: La(e, r == null ? void 0 : r.majorInfoUrl), children: e.getMajorDesc() }),
      /* @__PURE__ */ d.jsx(
        jh,
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
        mo,
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
      const t = Jr("campus-");
      return /* @__PURE__ */ d.jsx("div", { children: e.getCampusList().map((r, n, o) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
        /* @__PURE__ */ d.jsx("span", { children: `${$o(
          mh(r.campusCode)
        )}${n < o.length - 1 ? ", " : ""}` }, r.campusCode),
        /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx(
          mo,
          {
            popover: {
              title: $o(r.campusCode),
              body: () => fetch(Fh(r.campusCode)),
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
        /* @__PURE__ */ d.jsx("a", { href: Sc(e, t.majorInfoUrl), children: "4+1 years" }),
        /* @__PURE__ */ d.jsx(
          mo,
          {
            popover: {
              title: "4+1 years",
              body: () => fetch($h(e.getAcadPlan())),
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
], ng = oi`
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
`, ag = Ye.table`
  ${ng}
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
`, og = ({ resolver: e, id: t }) => {
  const r = mu(), n = (o) => {
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
}, ig = ({ resolver: e }) => /* @__PURE__ */ d.jsxs("div", { children: [
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
] }), sg = Jr("row-"), Ec = ({ programs: e, totalRows: t, loading: r, actionUrls: n }) => {
  var A, E;
  const o = gt.useRef(null), s = gt.useRef(null), { state: p } = Bt(dn), g = (E = (A = p == null ? void 0 : p.listPageProps) == null ? void 0 : A.programList) == null ? void 0 : E.settings;
  let b = rg;
  p.listPageProps.programList.dataSource.program === "graduate" && (b = b.filter((R) => R.dataKey !== "RequiredCourses")), g != null && g.hideCollegeSchool && (b = b.filter((R) => R.dataKey !== "CollegeSchool"));
  const f = (R, $) => {
    const _ = s.current.children;
    Array.prototype.forEach.call(
      _,
      (I, F) => F !== R && I.setAttribute("data-is-open", "false")
    ), s.current.children[R].setAttribute("data-is-open", String($));
  };
  return /* @__PURE__ */ d.jsx("section", { className: "container mb-4", "data-testid": "list-view", children: /* @__PURE__ */ d.jsxs(
    ag,
    {
      id: pc,
      ref: o,
      "data-loading": r,
      title: `${t} program found`,
      children: [
        /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsx("tr", { role: "row", children: b.map((R) => {
          var $;
          return /* @__PURE__ */ d.jsx(
            "th",
            {
              tabIndex: 0,
              className: `${R.className}`,
              scope: "col",
              "aria-label": R.ariaLabel,
              children: (($ = R.headerTemplate) == null ? void 0 : $.call(R)) || /* @__PURE__ */ d.jsx("span", { children: R.label })
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
          e.map((R, $) => {
            const _ = sg.next().value, w = $ * 2, I = ln(R);
            return /* @__PURE__ */ d.jsxs(Zs, { children: [
              /* @__PURE__ */ d.jsx("tr", { role: "row", children: b.map((F) => {
                var B;
                return /* @__PURE__ */ d.jsx(
                  "td",
                  {
                    className: `${F.className}`,
                    children: (B = F.contentTemplate) == null ? void 0 : B.call(F, {
                      resolver: I,
                      col: F,
                      row: R,
                      rowIndex: w,
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
                  id: `row-info-${w}`,
                  className: "row-info",
                  children: [
                    /* @__PURE__ */ d.jsx("td", { colSpan: 3, children: og({ resolver: I, id: `${_}-more-text` }) }, `${_}-info`),
                    /* @__PURE__ */ d.jsx("td", { colSpan: 2, children: ig({ resolver: I }) }, `${_}-extra-info`)
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
Ec.propTypes = {
  ...Ma
};
const lg = Pa`

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
`, cg = {
  [dc]: Ac,
  [Mo]: Ec
};
function _c({
  dataViewComponent: e,
  loading: t,
  programs: r,
  actionUrls: n,
  degreesPerPage: o
}) {
  let s;
  o ? typeof o != "number" && (s = parseInt(o, 10)) : s = 8;
  const p = o || s, g = yh(r.length, p), b = cg[e], [f, A] = ut([]), E = (R, $) => {
    const _ = ($ - 1) * p, w = _ + p;
    A(r.slice(_, w));
  };
  return At(() => {
    A(r.slice(0, p));
  }, [r]), /* @__PURE__ */ d.jsxs("section", { "data-testid": "program-list", "data-view-type": e, children: [
    /* @__PURE__ */ d.jsx(lg, {}),
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
      Cc,
      {
        loading: t,
        programs: f,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: o || s
      }
    ) }),
    r.length > 0 ? /* @__PURE__ */ d.jsx(
      Ko,
      {
        totalNumbers: 7,
        type: "default",
        background: "white",
        totalPages: g,
        onChange: E,
        showFirstButton: !0,
        showLastButton: !0
      }
    ) : /* @__PURE__ */ d.jsx("section", { className: "container no-space", children: /* @__PURE__ */ d.jsx(eh, { message: "No result found for the filters applied" }) })
  ] });
}
_c.propTypes = {
  dataViewComponent: C.string,
  ...Ma,
  degreesPerPage: C.number
};
const ug = Ye.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
  }
`, Rc = ({ value: e, onChange: t, onSearch: r }) => {
  const [n, o] = ut(!1);
  let s;
  At(() => () => clearTimeout(s), []);
  const p = (g) => {
    jr({
      event: "search",
      action: "type",
      name: "onenter",
      type: "search degree programs",
      text: g
    });
  };
  return /* @__PURE__ */ d.jsx(
    ug,
    {
      className: "container mt-5",
      "data-searching": n,
      "data-testid": "search-bar",
      children: /* @__PURE__ */ d.jsx(
        "form",
        {
          "data-testid": "search-bar-form",
          className: "uds-form p-0 col-md-6 col-sm-12",
          onSubmit: (g) => {
            g.preventDefault(), r(), o(!0), s = setTimeout(() => o(!1), 500), clearTimeout(s);
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
                  onChange: (g) => {
                    t(g.target.value), p(g.target.value);
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
Rc.propTypes = {
  value: C.string,
  onChange: C.func,
  onSearch: C.func
};
const dg = Ye(xc)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`, pg = Pa`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`, fg = Ye.div.attrs({ className: "container" })`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`, mi = ({
  appPathFolder: e,
  actionUrls: t,
  hasSearchBar: r = !0,
  hasFilters: n = !0,
  hero: o,
  introContent: s,
  programList: p,
  degreesPerPage: g
}) => {
  var te;
  const [{ data: b, loading: f, error: A }, E] = Vl(), [R, $] = ut(!1), [_, w] = ut([]), [I, F] = ut([]), [B, X] = ut(""), G = (te = p.settings) == null ? void 0 : te.defaultView, T = [Mo, dc].includes(G) ? G : Mo, [ue, he] = ut(T), Te = mc(p.dataSource, wh), { defaultState: Pe } = Bt(dn), { listingPageDefault: $e } = Pe, {
    collegeAcadOrg: ie,
    departmentCode: de,
    showInactivePrograms: _e,
    blacklistAcadPlans: Ae,
    program: xe,
    cert: Xe
  } = p.dataSource, [Re, Ce] = ut({
    ...Pn
  }), [Fe, ze] = ut({
    ...Pn
  });
  Ih({
    dataSource: p.dataSource,
    tableView: _,
    programs: b,
    stateFilters: Re
  }), At(() => {
    typeof window < "u" && Zl({
      packageName: "app-degree-pages",
      component: "ListingPage",
      type: "NA",
      configuration: {
        programList: p,
        degreesPerPage: g
      }
    });
  }, []), At(() => {
    E(Te);
  }, [Te]), At(() => {
    let O = zh(b || []);
    O = qs({
      programs: O,
      filters: {
        collegeAcadOrg: ie,
        departmentCode: de,
        blacklistAcadPlans: Ae,
        program: xe,
        showCerts: Xe
      }
    }), F(O), w(O);
  }, [b, g]);
  const se = async (O) => {
    const { acceleratedConcurrent: oe, locations: ee, asuLocals: re, keyword: Y } = O;
    $(!0), E(Te);
    const le = qs({
      programs: I,
      filters: {
        collegeAcadOrg: ie,
        departmentCode: de,
        acceleratedConcurrent: oe,
        locations: re.length > 0 ? ee.concat(hh) : ee,
        keyword: Y,
        blacklistAcadPlans: Ae,
        program: xe
      }
    });
    Ce({ ...O }), ze({ ...O }), w(le), $(!1);
  }, q = async () => {
    const O = {
      ...Fe,
      keyword: B
    };
    se(O);
  }, j = (O) => {
    f || R || se(O);
  }, z = async (O) => {
    Ce(O);
  }, U = () => {
    Ce(Pn), ze(Pn), w(I), X("");
  }, y = (O, { value: oe }) => {
    const ee = O === "acceleratedConcurrent" ? gh : Fe[O].filter((Y) => Y.value !== oe), re = {
      ...Fe,
      [O]: ee
    };
    se(re);
  };
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(yc, {}),
    /* @__PURE__ */ d.jsx(pg, {}),
    A && /* @__PURE__ */ d.jsx(Kl, { message: fc }),
    o != null && o.hide ? null : /* @__PURE__ */ d.jsx("section", { "data-testid": "hero", children: /* @__PURE__ */ d.jsx(
      zn,
      {
        image: (o == null ? void 0 : o.image) || $e.hero.image,
        title: {
          text: fh(p.dataSource),
          highlightColor: "gold",
          ...o == null ? void 0 : o.title,
          maxWidth: "100%"
        },
        contents: o == null ? void 0 : o.contents
      }
    ) }),
    /* @__PURE__ */ d.jsxs(dg, { "data-is-loading": f, className: "main-section dg-margin-top", children: [
      (s == null ? void 0 : s.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        hi,
        {
          breadcrumbs: s.breadcrumbs,
          section: o ? o.title.text : ""
        }
      ) }),
      s ? /* @__PURE__ */ d.jsx(
        gi,
        {
          applyNowUrl: (t == null ? void 0 : t.applyNowUrl) || $e.actionUrls.applyNowUrl,
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
        /* @__PURE__ */ d.jsx(Bh, {}),
        r ? /* @__PURE__ */ d.jsx(
          Rc,
          {
            value: B,
            onChange: X,
            onSearch: q
          }
        ) : null,
        n ? /* @__PURE__ */ d.jsx(
          kc,
          {
            value: Re,
            onChange: z,
            onApply: j,
            onClean: U
          }
        ) : null,
        /* @__PURE__ */ d.jsx(fg, {})
      ] }) : null,
      /* @__PURE__ */ d.jsx("section", { className: "container", children: /* @__PURE__ */ d.jsx("div", { className: "d-flex justify-content-between filter-switch-container", children: n ? /* @__PURE__ */ d.jsx(
        Tc,
        {
          value: Fe,
          onRemove: y
        }
      ) : null }) }),
      f || R ? /* @__PURE__ */ d.jsx(ec, {}) : /* @__PURE__ */ d.jsx(
        _c,
        {
          dataViewComponent: ue,
          loading: f || R,
          programs: _,
          actionUrls: t,
          degreesPerPage: g
        }
      )
    ] })
  ] });
};
mi.propTypes = {
  appPathFolder: C.string,
  actionUrls: C.shape({
    applyNowUrl: C.string
  }),
  hasSearchBar: C.bool,
  hasFilters: C.bool,
  hero: C.shape(zn.propTypes),
  introContent: C.shape(gi.propTypes),
  programList: C.shape({
    dataSource: nc,
    settings: oh
  }),
  degreesPerPage: C.number
};
const Oc = (e) => /* @__PURE__ */ d.jsx(fi, { listPageProps: e, children: /* @__PURE__ */ d.jsx(mi, { ...e }) });
Oc.propTypes = mi.propTypes;
const hg = Ye.section`
  position: relative;
  padding-top: var(--uds-dp-section-margin);
  padding-bottom: var(--uds-dp-section-margin);
`, gg = Ye.div`
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
function mg() {
  return /* @__PURE__ */ d.jsxs(
    hg,
    {
      className: "container",
      id: ht.affordingCollege.targetIdName,
      "data-testid": "affording-college",
      children: [
        /* @__PURE__ */ d.jsx(gg, {}),
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Affording college" }) }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ft,
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
            ft,
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
            ft,
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
        var g = arguments[p];
        g && (s = o(s, n(g)));
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
      for (var g in s)
        t.call(s, g) && s[g] && (p = o(p, g));
      return p;
    }
    function o(s, p) {
      return p ? s ? s + " " + p : s + p : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Nc);
var bg = Nc.exports;
const yg = /* @__PURE__ */ Bo(bg), xg = Ye.ul`
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
`, vg = ({
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
      xg,
      {
        className: yg("", {
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
    n.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "mt-2 mb-4", children: /* @__PURE__ */ d.jsx(Ho, { cards: n, openedCard: 1 }) })
  ] });
};
function jc({
  graduateRequirements: e,
  transferRequirements: t,
  isMinorOrCertificate: r,
  additionalRequirements: n,
  minorRequirements: o
}) {
  let s;
  return e || r ? s = r ? "Program requirements" : "Degree requirements" : s = r ? "Program requirements" : "Admission requirements", /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: ht.applicationRequirements.targetIdName,
        "data-testid": "application-requirements",
        children: [
          /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: s }) }),
          e || r ? /* @__PURE__ */ d.jsx(
            "div",
            {
              dangerouslySetInnerHTML: zt(
                e || o
              )
            }
          ) : vg({
            transferRequirements: t,
            additionalRequirements: n
          })
        ]
      }
    ),
    e || r ? /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: ht.degreeRequirements.targetIdName,
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
    ) : null
  ] });
}
jc.propTypes = {
  graduateRequirements: C.string,
  transferRequirements: C.string,
  isMinorOrCertificate: C.bool,
  additionalRequirements: C.string,
  minorRequirements: C.string
};
const qr = ({ item: e, type: t }) => {
  const r = Jr("glance-"), n = () => typeof e == "object" ? e.map((o, s) => {
    const p = ["", "#"].includes(o.url) ? null : o.url;
    let g = "";
    return s > 0 && s < e.length - 1 && (g = ", "), s === e.length - 1 && e.length > 1 && (g = " or "), /* @__PURE__ */ d.jsxs(Zs, { children: [
      g,
      /* @__PURE__ */ d.jsx("a", { href: p, rel: "noreferrer", target: "_blank", children: o.text })
    ] }, r.next().value);
  }) : e;
  return /* @__PURE__ */ d.jsxs("li", { children: [
    /* @__PURE__ */ d.jsx("i", { className: `fas fa-${$s[t].icon} fa-li` }),
    /* @__PURE__ */ d.jsxs("strong", { children: [
      $s[t].title,
      ": "
    ] }),
    n()
  ] });
};
qr.propTypes = {
  item: C.oneOfType([
    C.arrayOf(Io),
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
    id: ht.atAGlance.targetIdName,
    "data-testid": "at-aglance",
    children: [
      /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "At a glance: program details" }) }),
      /* @__PURE__ */ d.jsxs("ul", { className: "uds-list fa-ul maroon pt-2 pb-0 pe-0", children: [
        e && /* @__PURE__ */ d.jsx(qr, { item: [e], type: "offeredBy" }),
        t && /* @__PURE__ */ d.jsx(qr, { item: t, type: "locations" }),
        r && /* @__PURE__ */ d.jsx(
          qr,
          {
            item: r,
            type: "firstRequirementMathCourse"
          }
        ),
        n && /* @__PURE__ */ d.jsx(qr, { item: n, type: "mathIntensity" }),
        o && /* @__PURE__ */ d.jsx(qr, { item: o, type: "timeCommitment" }),
        s && /* @__PURE__ */ d.jsx(qr, { item: s, type: "stemOptText" })
      ] })
    ]
  }
);
Ic.propTypes = {
  offeredBy: Io.isRequired,
  locations: C.arrayOf(Io).isRequired,
  firstRequirementMathCourse: C.string.isRequired,
  mathIntensity: C.string,
  timeCommitment: C.string,
  stemOptText: C.string
};
const wg = `
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;
function Pc({ image: e, learnMoreLink: t, contents: r }) {
  const n = `linear-gradient(180deg, #19191900 0%, #191919c9 100%),url('${e.url}')`, o = Jr("attend-online-");
  return /* @__PURE__ */ d.jsx(
    "section",
    {
      id: ht.attendOnline.targetIdName,
      className: "uds-card-and-image",
      style: {
        backgroundImage: n
      },
      "data-testid": "attend-online",
      children: /* @__PURE__ */ d.jsx("div", { className: "uds-card-and-image-container", children: /* @__PURE__ */ d.jsxs("div", { className: "card card-centered", children: [
        /* @__PURE__ */ d.jsx("i", { className: "fas fa-wifi fa-2x card-icon-top" }),
        /* @__PURE__ */ d.jsx("div", { className: "card-header", children: /* @__PURE__ */ d.jsx("h3", { className: "card-title", children: "Attend online" }) }),
        /* @__PURE__ */ d.jsx("div", { className: "card-body", children: r ? r.map((s) => /* @__PURE__ */ d.jsx("p", { children: s }, o.next().value)) : /* @__PURE__ */ d.jsx("p", { children: wg }) }),
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
Pc.propTypes = {
  learnMoreLink: C.string,
  image: Sr,
  contents: C.arrayOf(
    C.shape({
      text: C.string
    })
  )
};
const Sg = Ye.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Dc = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  Sg,
  {
    id: ht.careerOutlook.targetIdName,
    "data-testid": "career-outlook",
    children: /* @__PURE__ */ d.jsx(
      un,
      {
        headingTag: "H2",
        title: ht.careerOutlook.text,
        contents: e,
        image: t
      }
    )
  }
);
Dc.propTypes = un.propTypes;
const kg = Ye.div`
  & p:last-of-type {
    margin-bottom: 0;
  }

  & a {
    word-break: break-word;
  }
`;
function Lc({ content: e }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: ht.changeMajorRequirements.targetIdName,
      className: "change-your-major",
      "data-testid": "change-your-major",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Change your major requirements for current students" }) }),
        /* @__PURE__ */ d.jsx(
          kg,
          {
            dangerouslySetInnerHTML: zt(e)
          }
        )
      ]
    }
  );
}
Lc.propTypes = {
  content: C.string
};
function Mc({ content: e = "" }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-testid": "custom-text",
      className: "mt-3",
      dangerouslySetInnerHTML: zt(e)
    }
  );
}
Mc.propTypes = {
  content: C.string
};
const Fc = `
  width: unset !important;
  min-width: unset !important;
`, $c = Ye.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${Fc}
`, Uc = Ye.i`
  color: #78be21;
  ${Fc}
`;
function zc({ data: e }) {
  return /* @__PURE__ */ d.jsx("div", { className: "uds-table mb-1", children: /* @__PURE__ */ d.jsxs("table", { children: [
    /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsxs("tr", { children: [
      /* @__PURE__ */ d.jsx("th", { scope: "col", children: "Career" }),
      /* @__PURE__ */ d.jsx("th", { scope: "col", className: "text-end", children: "Growth*" }),
      /* @__PURE__ */ d.jsx("th", { scope: "col", className: "text-end", children: "Median Salary*" })
    ] }) }),
    /* @__PURE__ */ d.jsx("tbody", { children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ d.jsxs("tr", { children: [
      /* @__PURE__ */ d.jsxs("th", { scope: "row", style: { fontWeight: "normal" }, children: [
        /* @__PURE__ */ d.jsx("a", { href: t.career.url, target: "_blank", rel: "noreferrer", children: t.career.text }),
        t.greenOccupation && /* @__PURE__ */ d.jsx(Uc, { className: "fas fa-leaf ms-1" }),
        t.brightOutlook && /* @__PURE__ */ d.jsx($c, { className: "fas fa-sun ms-1" })
      ] }),
      /* @__PURE__ */ d.jsxs("td", { className: "text-end", children: [
        +t.growth,
        "%"
      ] }),
      /* @__PURE__ */ d.jsx("td", { className: "text-end", children: t.medianSalary || 0 })
    ] }, t.career.url)) })
  ] }) });
}
zc.propTypes = {
  data: C.arrayOf(ac)
};
function Bc({ tableData: e }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: ht.exampleCareers.targetIdName,
      className: "container",
      "data-testid": "example-careers",
      children: [
        /* @__PURE__ */ d.jsx("h3", { children: "Example careers" }),
        /* @__PURE__ */ d.jsx("p", { children: "Example job titles and salaries listed below are not necessarily entry level, and students should take into consideration how years of experience and geographical location may affect pay scales. Some jobs also may require advanced degrees, certifications or state-specific licensure." }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-4 mb-4", children: [
          /* @__PURE__ */ d.jsx(zc, { data: e }),
          /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("small", { children: "* Data obtained from the Occupational Information Network (O*NET) under sponsorship of the U.S. Department of Labor/Employment and Training Administration (USDOL/ETA)." }) })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "d-flex", children: [
          /* @__PURE__ */ d.jsxs("p", { className: "me-3", children: [
            /* @__PURE__ */ d.jsx($c, { className: "fas fa-sun me-1" }),
            "Bright outlook"
          ] }),
          /* @__PURE__ */ d.jsxs("p", { children: [
            /* @__PURE__ */ d.jsx(Uc, { className: "fas fa-leaf me-1" }),
            "Green occupation"
          ] })
        ] })
      ]
    }
  );
}
Bc.propTypes = {
  tableData: C.arrayOf(ac)
};
const Tg = Ye.ul`
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
  /* @__PURE__ */ d.jsx(Tg, { className: "mt-3 mb-3", children: r.map((n, o) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: n.url, target: "_blank", rel: "noreferrer", children: n.title }) }, `${n.title}-${o}`)
  )) }),
  /* @__PURE__ */ d.jsx("p", { className: "mb-0", children: "Acceptance to the graduate program requires a separate application. During their junior year, eligible students will be advised by their academic departments to apply." })
] });
Uo.propTypes = {
  id: C.string,
  title: C.string,
  links: Po
};
function qc({ acceleratedLinks: e, concurrentLinks: t }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: ht.flexibleDegreeOptions.targetIdName,
      className: "container",
      "data-testid": "flexible-degree-options",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Flexible degree options" }) }),
        !!e.length && /* @__PURE__ */ d.jsx(
          Uo,
          {
            id: ht.flexibleDegreeOptions.acceleratedId,
            title: "Accelerated program options",
            links: e
          }
        ),
        !!t.length && /* @__PURE__ */ d.jsx(
          Uo,
          {
            id: ht.flexibleDegreeOptions.concurrentId,
            title: "Concurrent degree program",
            links: t
          }
        )
      ]
    }
  );
}
qc.propTypes = {
  acceleratedLinks: Po,
  concurrentLinks: Po
};
const Cg = Ye.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Wc = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  Cg,
  {
    id: ht.globalOpportunity.targetIdName,
    "data-testid": "global-opportunity",
    children: /* @__PURE__ */ d.jsx(
      un,
      {
        headingTag: "H2",
        title: ht.globalOpportunity.text,
        contents: e,
        image: t
      }
    )
  }
);
Wc.propTypes = un.propTypes;
const Hc = ({ url: e, altText: t }) => /* @__PURE__ */ d.jsx("div", { className: "uds-img pt-3 pb-3", "data-testid": "intro-image", children: /* @__PURE__ */ d.jsx("img", { src: e, className: "img-fluid", alt: t }) });
Hc.propTypes = { ...li };
const Ag = (e, t) => {
  if (e !== "youtube")
    return t;
  const r = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, n = t.match(r);
  return n && n[7].length === 11 ? `https://www.youtube.com/embed/${n[7]}` : t;
}, Eg = Ye.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`, Vc = ({ type: e, url: t, vttUrl: r, title: n }) => /* @__PURE__ */ d.jsx(Eg, { "data-testid": "intro-video", children: /* @__PURE__ */ d.jsx(
  ei,
  {
    type: e,
    url: Ag(e, t),
    vttUrl: r,
    title: n,
    controls: !0
  }
) });
Vc.propTypes = { ...ci };
function Gc({ contents: e = [] }) {
  return /* @__PURE__ */ d.jsx("div", { "data-testid": "market-text", children: e.map((t, r) => /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `mt-3 ${sn(t.cssClass)}`,
      dangerouslySetInnerHTML: zt(t.text)
    },
    `content-${r + 1}`
  )) });
}
Gc.propTypes = {
  contents: C.arrayOf(Na)
};
function Yc({ cards: e, defaultCards: t }) {
  var r, n, o, s, p, g, b, f, A, E, R, $;
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      className: "container",
      id: ht.nextSteps.targetIdName,
      "data-testid": "next-steps",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: "Next steps to attend ASU" }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ft,
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
            ft,
            {
              icon: ((p = e == null ? void 0 : e.apply) == null ? void 0 : p.icon) ?? t.apply.icon,
              title: ((g = e == null ? void 0 : e.apply) == null ? void 0 : g.title) ?? t.apply.title,
              body: ((b = e == null ? void 0 : e.apply) == null ? void 0 : b.content) ?? t.apply.content,
              buttons: [
                ((f = e == null ? void 0 : e.apply) == null ? void 0 : f.buttonLink) ?? t.apply.buttonLink
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ft,
            {
              icon: ((A = e == null ? void 0 : e.visit) == null ? void 0 : A.icon) ?? t.visit.icon,
              title: ((E = e == null ? void 0 : e.visit) == null ? void 0 : E.title) ?? t.visit.title,
              body: ((R = e == null ? void 0 : e.visit) == null ? void 0 : R.content) ?? t.visit.content,
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
Yc.propTypes = {
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
function Xc({ content: e = "" }) {
  return /* @__PURE__ */ d.jsxs("section", { className: "container", "data-testid": "professional-licensure", children: [
    /* @__PURE__ */ d.jsx("h3", { children: "Professional licensure" }),
    /* @__PURE__ */ d.jsx("p", { dangerouslySetInnerHTML: zt(e) })
  ] });
}
Xc.propTypes = {
  content: C.node
};
const xo = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "main content",
  section: "Program contact information"
}, _g = Ye.ul`
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
      id: ht.programContactInfo.targetIdName,
      "data-testid": "program-contact-info",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Program contact information" }) }),
        /* @__PURE__ */ d.jsx("p", { children: "If you have questions related to admission, please fill out the request information form above and an admission specialist will contact you directly. For questions regarding faculty or courses, please use the contact information below." }),
        /* @__PURE__ */ d.jsxs(_g, { className: "text-maroon", children: [
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
                onClick: () => jr({ ...xo, text: e.text }),
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
                onClick: () => jr({ ...xo, text: r.text }),
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
                onClick: () => jr({ ...xo, text: n }),
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
      /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("strong", { children: ch }) }),
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
const Rg = "https://changemajor.apps.asu.edu/", Og = "On-campus students", Ng = "Online students", jg = "View major map -", Vs = "View major map";
function Qc({
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
  }, p = [], g = [];
  r.forEach((A) => {
    const E = o(A.acadSubPlanCode), R = `${jg} ${E}`;
    s(A.url, R, p);
  }), t && s(t, Vs, p), e && s(e, Vs, g);
  const b = (A, E) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("h5", { children: A }),
    /* @__PURE__ */ d.jsx("ul", { className: "mb-3", children: E.map((R) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: R.href, children: R.text }) }, R.href)) })
  ] }), f = () => /* @__PURE__ */ d.jsxs("section", { className: "container ps-0", "data-testid": "required-course", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Required courses (major map)" }),
    p.length > 0 && b(Og, p),
    g.length > 0 && b(Ng, g),
    /* @__PURE__ */ d.jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ d.jsx("strong", { children: "What if:" }),
      " See how your courses can be applied to another major and find out how to ",
      /* @__PURE__ */ d.jsx("a", { href: Rg, children: "change your major" })
    ] })
  ] });
  return !(r != null && r.length) && !e && !t ? /* @__PURE__ */ d.jsx("div", {}) : f();
}
Qc.propTypes = {
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
const Zc = ({ sectionIntroText: e, cards: t, defaultCards: r }) => {
  var n, o, s, p, g, b, f, A, E, R, $, _, w, I, F, B, X, G, T, ue, he, Te, Pe, $e, ie, de, _e, Ae, xe, Xe, Re, Ce, Fe, ze, se, q, j, z, U, y, te, O;
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: ht.whyChooseAsu.targetIdName,
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
            ft,
            {
              image: ((o = (n = t == null ? void 0 : t.faculty) == null ? void 0 : n.image) == null ? void 0 : o.url) ?? r.faculty.image.url,
              imageAltText: ((p = (s = t == null ? void 0 : t.faculty) == null ? void 0 : s.image) == null ? void 0 : p.altText) ?? r.faculty.image.altText,
              title: ((g = t == null ? void 0 : t.faculty) == null ? void 0 : g.title) ?? r.faculty.title,
              body: ((b = t == null ? void 0 : t.faculty) == null ? void 0 : b.text) ?? r.faculty.text,
              buttons: [((f = t == null ? void 0 : t.faculty) == null ? void 0 : f.button) ?? r.faculty.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ft,
            {
              image: ((E = (A = t == null ? void 0 : t.programs) == null ? void 0 : A.image) == null ? void 0 : E.url) ?? r.programs.image.url,
              imageAltText: (($ = (R = t == null ? void 0 : t.programs) == null ? void 0 : R.image) == null ? void 0 : $.altText) ?? r.programs.image.altText,
              title: ((_ = t == null ? void 0 : t.programs) == null ? void 0 : _.title) ?? r.programs.title,
              body: ((w = t == null ? void 0 : t.programs) == null ? void 0 : w.text) ?? r.programs.text,
              buttons: [((I = t == null ? void 0 : t.programs) == null ? void 0 : I.button) ?? r.programs.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ft,
            {
              image: ((B = (F = t == null ? void 0 : t.research) == null ? void 0 : F.image) == null ? void 0 : B.url) ?? r.research.image.url,
              imageAltText: ((G = (X = t == null ? void 0 : t.research) == null ? void 0 : X.image) == null ? void 0 : G.altText) ?? r.research.image.altText,
              title: ((T = t == null ? void 0 : t.research) == null ? void 0 : T.title) ?? r.research.title,
              body: ((ue = t == null ? void 0 : t.research) == null ? void 0 : ue.text) ?? r.research.text,
              buttons: [((he = t == null ? void 0 : t.research) == null ? void 0 : he.button) ?? r.research.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ft,
            {
              image: ((Pe = (Te = t == null ? void 0 : t.inclusion) == null ? void 0 : Te.image) == null ? void 0 : Pe.url) ?? r.inclusion.image.url,
              imageAltText: ((ie = ($e = t == null ? void 0 : t.inclusion) == null ? void 0 : $e.image) == null ? void 0 : ie.altText) ?? r.inclusion.image.altText,
              title: ((de = t == null ? void 0 : t.inclusion) == null ? void 0 : de.title) ?? r.inclusion.title,
              body: ((_e = t == null ? void 0 : t.inclusion) == null ? void 0 : _e.text) ?? r.inclusion.text,
              buttons: [
                ((Ae = t == null ? void 0 : t.inclusion) == null ? void 0 : Ae.button) ?? r.inclusion.button
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ft,
            {
              image: ((Xe = (xe = t == null ? void 0 : t.mentors) == null ? void 0 : xe.image) == null ? void 0 : Xe.url) ?? r.mentors.image.url,
              imageAltText: ((Ce = (Re = t == null ? void 0 : t.mentors) == null ? void 0 : Re.image) == null ? void 0 : Ce.altText) ?? r.mentors.image.altText,
              title: ((Fe = t == null ? void 0 : t.mentors) == null ? void 0 : Fe.title) ?? r.mentors.title,
              body: ((ze = t == null ? void 0 : t.mentors) == null ? void 0 : ze.text) ?? r.mentors.text,
              buttons: [((se = t == null ? void 0 : t.mentors) == null ? void 0 : se.button) ?? r.mentors.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ft,
            {
              image: ((j = (q = t == null ? void 0 : t.honors) == null ? void 0 : q.image) == null ? void 0 : j.url) ?? r.honors.image.url,
              imageAltText: ((U = (z = t == null ? void 0 : t.honors) == null ? void 0 : z.image) == null ? void 0 : U.altText) ?? r.honors.image.altText,
              title: ((y = t == null ? void 0 : t.honors) == null ? void 0 : y.title) ?? r.honors.title,
              body: ((te = t == null ? void 0 : t.honors) == null ? void 0 : te.text) ?? r.honors.text,
              buttons: [((O = t == null ? void 0 : t.honors) == null ? void 0 : O.button) ?? r.honors.button]
            }
          ) })
        ] })
      ]
    }
  );
};
Zc.propTypes = oc;
const bi = ({
  appPathFolder: e,
  dataSource: t,
  anchorMenu: r,
  hero: n,
  introContent: o,
  atAGlance: s,
  applicationRequirements: p,
  changeMajorRequirements: g,
  affordingCollege: b,
  flexibleDegreeOptions: f,
  careerOutlook: A,
  exampleCareers: E,
  globalOpportunity: R,
  attendOnline: $,
  programContactInfo: _,
  nextSteps: w,
  whyChooseAsu: I
}) => {
  var _e, Ae, xe, Xe;
  const [{ data: F, loading: B, error: X }, G] = Vl(), [T, ue] = ut(ln({})), [he, Te] = ut({ accelerateData: [], concurrentData: [] }), Pe = mc(t, Sh), { defaultState: $e } = Bt(dn), { detailPageDefault: ie } = $e;
  At(() => {
    typeof window < "u" && Zl({
      packageName: "app-degree-pages",
      component: "DetailPage",
      type: "NA",
      configuration: {
        dataSource: t
      }
    });
  }, []), At(() => {
    G(Pe);
  }, [Pe]), At(() => {
    if (F) {
      const Re = ln(F);
      ue(Re), Re.hasConcurrentOrAccelerateDegrees() && Eh(
        [
          Re.getAccelerateDegrees(),
          Re.getConcurrentDegrees()
        ],
        Te
      );
    }
  }, [F]);
  const de = Lh(r, T);
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(yc, {}),
    X && /* @__PURE__ */ d.jsx(Kl, { message: fc }),
    !(n != null && n.hide) && /* @__PURE__ */ d.jsx("section", { children: /* @__PURE__ */ d.jsx(
      zn,
      {
        image: (n == null ? void 0 : n.image) || ie.hero.image,
        title: {
          ...ie.hero.title,
          text: T.getMajorDesc(),
          ...n == null ? void 0 : n.title
        },
        contents: n == null ? void 0 : n.contents
      }
    ) }),
    !B && Mh(de) && /* @__PURE__ */ d.jsx(gc, { anchorMenu: de }),
    /* @__PURE__ */ d.jsxs(xc, { as: "div", "data-is-loading": B, className: "main-section", children: [
      B && /* @__PURE__ */ d.jsx(ec, {}),
      !B && (F != null && F.error ? /* @__PURE__ */ d.jsx("section", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        zo,
        {
          content: uh,
          programNotFound: !0
        }
      ) }) : /* @__PURE__ */ d.jsxs("section", { className: "container mt-4 mb-0", children: [
        (o == null ? void 0 : o.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "row col-12", children: /* @__PURE__ */ d.jsx(
          hi,
          {
            breadcrumbs: o.breadcrumbs,
            section: n ? n.title.text : T.getMajorDesc()
          }
        ) }),
        /* @__PURE__ */ d.jsxs("div", { className: "row flex-column-reverse flex-sm-row", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-7 col-lg-7", children: [
            /* @__PURE__ */ d.jsxs("section", { className: "intro", children: [
              !T.isValidActiveProgram() && /* @__PURE__ */ d.jsx(Mc, { content: T.getAsuCustomText() }),
              !(o != null && o.hideMarketText) && ((o == null ? void 0 : o.contents) || T.getMarketText()) && /* @__PURE__ */ d.jsx(
                Gc,
                {
                  contents: (o == null ? void 0 : o.contents) || [
                    { text: T.getMarketText() }
                  ]
                }
              ),
              !(o != null && o.hideProgramDesc) && /* @__PURE__ */ d.jsx(
                zo,
                {
                  content: T.getFullDescription(),
                  stemOptText: T.getStemOptText()
                }
              )
            ] }),
            !(s != null && s.hide) && /* @__PURE__ */ d.jsx(
              Ic,
              {
                offeredBy: (s == null ? void 0 : s.offeredBy) || {
                  text: T.getCollegeDesc(),
                  url: T.getCollegeUrl()
                },
                locations: (s == null ? void 0 : s.locations) || Dh(T),
                firstRequirementMathCourse: (s == null ? void 0 : s.firstRequirementMathCourse) || T.getMinMathReq(),
                mathIntensity: (s == null ? void 0 : s.mathIntensity) || T.getMathIntensity(),
                stemOptText: T.hasStemOptText()
              }
            ),
            !(o != null && o.hideRequiredCourses) && !T.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
              Qc,
              {
                onlineMajorMapURL: T.getOnlineMajorMapURL(),
                majorMapOnCampusURL: T.getGeneralDegreeMajorMap(),
                subPlnMajorMaps: T.getSubPlnMajorMaps(),
                subPlns: T.getSubPln()
              }
            ),
            !(p != null && p.hide) && /* @__PURE__ */ d.jsx(
              jc,
              {
                graduateRequirements: T.isGradProgram() ? T.getGraduateRequirements() : null,
                isMinorOrCertificate: T.isMinorOrCertificate(),
                minorRequirements: T.getMinorCourseRequirements(),
                additionalRequirements: T.getAdmissionsRequirementsText(),
                transferRequirements: T.getTransferAdmission()
              }
            ),
            !(g != null && g.hide) && !T.isMinorOrCertificate() && !T.isGradProgram() && /* @__PURE__ */ d.jsx(Lc, { content: T.getChangeMajor() })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-5 col-lg-5", children: [
            (o == null ? void 0 : o.video) && /* @__PURE__ */ d.jsx(
              Vc,
              {
                type: o.video.type,
                url: o.video.url,
                vttUrl: o.video.vttUrl,
                title: o.video.title
              }
            ),
            !(o != null && o.video) && /* @__PURE__ */ d.jsx(
              Hc,
              {
                url: ((_e = o == null ? void 0 : o.image) == null ? void 0 : _e.url) || ie.introContent.image.url,
                altText: ((Ae = o == null ? void 0 : o.image) == null ? void 0 : Ae.altText) || ie.introContent.image.altText
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
          !(w != null && w.hide) && !T.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
            Yc,
            {
              cards: w == null ? void 0 : w.cards,
              defaultCards: ie.nextSteps.cards
            }
          ),
          !(b != null && b.hide) && /* @__PURE__ */ d.jsx(mg, {}),
          !(f != null && f.hide) && T.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ d.jsx(
            qc,
            {
              acceleratedLinks: zs(
                he.accelerateData
              ),
              concurrentLinks: zs(
                he.concurrentData
              )
            }
          ),
          !(A != null && A.hide) && T.getAsuCareerOpportunity() && /* @__PURE__ */ d.jsx(
            Dc,
            {
              image: (A == null ? void 0 : A.image) || ie.careerOutlook.image,
              contents: [{ text: T.getAsuCareerOpportunity() }]
            }
          ),
          !(E != null && E.hide) && T.hasCareerData() && /* @__PURE__ */ d.jsx(
            Bc,
            {
              tableData: kh(T.getCareerData())
            }
          ),
          T.getProfessionalLicensureText() && /* @__PURE__ */ d.jsx(
            Xc,
            {
              content: T.getProfessionalLicensureText()
            }
          ),
          !(R != null && R.hide) && T.getGlobalExp() && /* @__PURE__ */ d.jsx(
            Wc,
            {
              contents: [{ text: T.getGlobalExp() }],
              image: (R == null ? void 0 : R.image) || ie.globalOpportunity.image
            }
          ),
          !(I != null && I.hide) && /* @__PURE__ */ d.jsx(
            Zc,
            {
              sectionIntroText: (I == null ? void 0 : I.sectionIntroText) || ie.whyChooseAsu.sectionIntroText,
              cards: I == null ? void 0 : I.cards,
              defaultCards: ie.whyChooseAsu.cards
            }
          ),
          !($ != null && $.hide) && T.isOnline() && /* @__PURE__ */ d.jsx(
            Pc,
            {
              learnMoreLink: T.getCurriculumUrl(),
              image: ($ == null ? void 0 : $.image) || ie.attendOnline.image
            }
          )
        ] }),
        !(_ != null && _.hide) && /* @__PURE__ */ d.jsx("div", { className: "row", children: /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-6 col-lg-6 ", children: /* @__PURE__ */ d.jsx(
          Jc,
          {
            department: {
              text: T.getDepartmentName(),
              url: ((xe = _ == null ? void 0 : _.department) == null ? void 0 : xe.url) || T.getPlanUrl()
            },
            email: {
              text: T.getEmailAddress(),
              url: ((Xe = _ == null ? void 0 : _.email) == null ? void 0 : Xe.url) || T.getEmailAddress()
            },
            asuOfficeLoc: T.getAsuOfficeLoc(),
            phone: T.getPhone()
          }
        ) }) })
      ] }))
    ] })
  ] });
};
bi.propTypes = {
  appPathFolder: C.string,
  dataSource: nc,
  anchorMenu: C.shape(ui),
  hero: C.shape(zn.propTypes),
  introContent: C.shape({
    hideMarketText: C.bool,
    hideProgramDesc: C.bool,
    hideRequiredCourses: C.bool,
    breadcrumbs: xa.arrayOf(Gr),
    // eslint-disable-next-line react/forbid-prop-types
    contents: xa.arrayOf(C.object),
    video: nh,
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
    cards: C.arrayOf(Br)
  }),
  whyChooseAsu: C.shape(oc)
};
const Kc = (e) => /* @__PURE__ */ d.jsx(fi, { detailPageProps: e, children: /* @__PURE__ */ d.jsx(bi, { ...e }) });
Kc.propTypes = bi.propTypes;
var eu, Gs = Ks;
eu = Gs.createRoot, Gs.hydrateRoot;
const tu = (e, t, r) => {
  const n = document.querySelector(r);
  eu(n).render(gt.createElement(e, t));
}, Dg = ({ targetSelector: e, props: t }) => {
  tu(Oc, t, e);
}, Lg = ({ targetSelector: e, props: t }) => {
  tu(Kc, t, e);
};
export {
  Kc as DetailPage,
  Oc as ListingPage,
  Dg as initListingPage,
  Lg as initProgramDetailPage
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
