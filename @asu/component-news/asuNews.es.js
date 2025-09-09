import ct, { forwardRef as ho, Component as Ml, createContext as jl, useRef as zl, useImperativeHandle as $l, useId as Ul, useContext as gr, createElement as as, useState as jr, useEffect as xr } from "react";
import os from "react-dom";
function is(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ss = { exports: {} }, nn = {};
var Go;
function Bl() {
  if (Go) return nn;
  Go = 1;
  var e = ct, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(g, p, f) {
    var _, x = {}, D = null, B = null;
    f !== void 0 && (D = "" + f), p.key !== void 0 && (D = "" + p.key), p.ref !== void 0 && (B = p.ref);
    for (_ in p) n.call(p, _) && !s.hasOwnProperty(_) && (x[_] = p[_]);
    if (g && g.defaultProps) for (_ in p = g.defaultProps, p) x[_] === void 0 && (x[_] = p[_]);
    return { $$typeof: t, type: g, key: D, ref: B, props: x, _owner: a.current };
  }
  return nn.Fragment = r, nn.jsx = d, nn.jsxs = d, nn;
}
ss.exports = Bl();
var ot = ss.exports;
function mo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ls = { exports: {} }, an = {}, Yo;
function Wl() {
  if (Yo) return an;
  Yo = 1;
  var e = ct, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(g, p, f) {
    var _, x = {}, D = null, B = null;
    f !== void 0 && (D = "" + f), p.key !== void 0 && (D = "" + p.key), p.ref !== void 0 && (B = p.ref);
    for (_ in p) n.call(p, _) && !s.hasOwnProperty(_) && (x[_] = p[_]);
    if (g && g.defaultProps) for (_ in p = g.defaultProps, p) x[_] === void 0 && (x[_] = p[_]);
    return { $$typeof: t, type: g, key: D, ref: B, props: x, _owner: a.current };
  }
  return an.Fragment = r, an.jsx = d, an.jsxs = d, an;
}
ls.exports = Wl();
var j = ls.exports, cs = { exports: {} }, Aa, Xo;
function Hl() {
  if (Xo) return Aa;
  Xo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Aa = e, Aa;
}
var Oa, Jo;
function Vl() {
  if (Jo) return Oa;
  Jo = 1;
  var e = Hl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Oa = function() {
    function n(d, g, p, f, _, x) {
      if (x !== e) {
        var D = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw D.name = "Invariant Violation", D;
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
  }, Oa;
}
cs.exports = Vl()();
var ql = cs.exports;
const l = /* @__PURE__ */ mo(ql), Gl = () => {
  const [e, t] = jr(null), [r, n] = jr(!1), [a, s] = jr(null), [d, g] = jr("");
  return xr(() => {
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
  }, [d]), [{ data: e, loading: r, error: a }, g];
}, Yl = (e) => (e || []).join(" "), {
  entries: us,
  setPrototypeOf: Qo,
  isFrozen: Xl,
  getPrototypeOf: Jl,
  getOwnPropertyDescriptor: Ql
} = Object;
let {
  freeze: St,
  seal: It,
  create: ds
} = Object, {
  apply: Ga,
  construct: Ya
} = typeof Reflect < "u" && Reflect;
St || (St = function(e) {
  return e;
});
It || (It = function(e) {
  return e;
});
Ga || (Ga = function(e, t, r) {
  return e.apply(t, r);
});
Ya || (Ya = function(e, t) {
  return new e(...t);
});
const Wn = xt(Array.prototype.forEach), Zl = xt(Array.prototype.lastIndexOf), Zo = xt(Array.prototype.pop), on = xt(Array.prototype.push), Kl = xt(Array.prototype.splice), ea = xt(String.prototype.toLowerCase), Ra = xt(String.prototype.toString), Ko = xt(String.prototype.match), sn = xt(String.prototype.replace), ec = xt(String.prototype.indexOf), tc = xt(String.prototype.trim), Gt = xt(Object.prototype.hasOwnProperty), wt = xt(RegExp.prototype.test), ln = rc(TypeError);
function xt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Ga(e, t, n);
  };
}
function rc(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ya(e, r);
  };
}
function Oe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ea;
  Qo && Qo(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (Xl(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function nc(e) {
  for (let t = 0; t < e.length; t++)
    Gt(e, t) || (e[t] = null);
  return e;
}
function Lr(e) {
  const t = ds(null);
  for (const [r, n] of us(e))
    Gt(e, r) && (Array.isArray(n) ? t[r] = nc(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = Lr(n) : t[r] = n);
  return t;
}
function cn(e, t) {
  for (; e !== null; ) {
    const n = Ql(e, t);
    if (n) {
      if (n.get)
        return xt(n.get);
      if (typeof n.value == "function")
        return xt(n.value);
    }
    e = Jl(e);
  }
  function r() {
    return null;
  }
  return r;
}
const ei = St(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Na = St(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), La = St(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ac = St(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Pa = St(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), oc = St(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ti = St(["#text"]), ri = St(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ia = St(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ni = St(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Hn = St(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ic = It(/\{\{[\w\W]*|[\w\W]*\}\}/gm), sc = It(/<%[\w\W]*|[\w\W]*%>/gm), lc = It(/\$\{[\w\W]*/gm), cc = It(/^data-[\-\w.\u00B7-\uFFFF]+$/), uc = It(/^aria-[\-\w]+$/), fs = It(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), dc = It(/^(?:\w+script|data):/i), fc = It(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ps = It(/^html$/i), pc = It(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ai = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: uc,
  ATTR_WHITESPACE: fc,
  CUSTOM_ELEMENT: pc,
  DATA_ATTR: cc,
  DOCTYPE_NAME: ps,
  ERB_EXPR: sc,
  IS_ALLOWED_URI: fs,
  IS_SCRIPT_OR_DATA: dc,
  MUSTACHE_EXPR: ic,
  TMPLIT_EXPR: lc
});
const un = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, hc = function() {
  return typeof window > "u" ? null : window;
}, mc = function(e, t) {
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
}, oi = function() {
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
function hs() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : hc();
  const t = (b) => hs(b);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== un.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: d,
    Node: g,
    Element: p,
    NodeFilter: f,
    NamedNodeMap: _ = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: x,
    DOMParser: D,
    trustedTypes: B
  } = e, C = p.prototype, S = cn(C, "cloneNode"), I = cn(C, "remove"), $ = cn(C, "nextSibling"), H = cn(C, "childNodes"), Y = cn(C, "parentNode");
  if (typeof d == "function") {
    const b = r.createElement("template");
    b.content && b.content.ownerDocument && (r = b.content.ownerDocument);
  }
  let q, T = "";
  const {
    implementation: ce,
    createNodeIterator: _e,
    createDocumentFragment: Pe,
    getElementsByTagName: De
  } = r, {
    importNode: He
  } = n;
  let ue = oi();
  t.isSupported = typeof us == "function" && typeof Y == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: Ne,
    TMPLIT_EXPR: Le,
    DATA_ATTR: Ee,
    ARIA_ATTR: lt,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Ae,
    CUSTOM_ELEMENT: Ue
  } = ai;
  let {
    IS_ALLOWED_URI: Ze
  } = ai, ie = null;
  const z = Oe({}, [...ei, ...Na, ...La, ...Pa, ...ti]);
  let A = null;
  const M = Oe({}, [...ri, ...Ia, ...ni, ...Hn]);
  let F = Object.seal(ds(null, {
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
  })), y = null, re = null, O = !0, ne = !0, ee = !1, te = !0, G = !1, oe = !0, se = !1, K = !1, he = !1, Z = !1, le = !1, $e = !1, me = !0, st = !1;
  const qe = "user-content-";
  let ge = !0, V = !1, ae = {}, Ge = null;
  const ut = Oe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Me = null;
  const Jt = Oe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Lt = null;
  const tr = Oe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), yt = "http://www.w3.org/1998/Math/MathML", pt = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let dt = nt, Ft = !1, Mt = null;
  const Cr = Oe({}, [yt, pt, nt], Ra);
  let it = Oe({}, ["mi", "mo", "mn", "ms", "mtext"]), bt = Oe({}, ["annotation-xml"]);
  const Qt = Oe({}, ["title", "style", "font", "a", "script"]);
  let Ce = null;
  const jt = ["application/xhtml+xml", "text/html"], Zt = "text/html";
  let ve = null, Ke = null;
  const Kt = r.createElement("form"), vt = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Pt = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ke && Ke === b)) {
      if ((!b || typeof b != "object") && (b = {}), b = Lr(b), Ce = // eslint-disable-next-line unicorn/prefer-includes
      jt.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Zt : b.PARSER_MEDIA_TYPE, ve = Ce === "application/xhtml+xml" ? Ra : ea, ie = Gt(b, "ALLOWED_TAGS") ? Oe({}, b.ALLOWED_TAGS, ve) : z, A = Gt(b, "ALLOWED_ATTR") ? Oe({}, b.ALLOWED_ATTR, ve) : M, Mt = Gt(b, "ALLOWED_NAMESPACES") ? Oe({}, b.ALLOWED_NAMESPACES, Ra) : Cr, Lt = Gt(b, "ADD_URI_SAFE_ATTR") ? Oe(Lr(tr), b.ADD_URI_SAFE_ATTR, ve) : tr, Me = Gt(b, "ADD_DATA_URI_TAGS") ? Oe(Lr(Jt), b.ADD_DATA_URI_TAGS, ve) : Jt, Ge = Gt(b, "FORBID_CONTENTS") ? Oe({}, b.FORBID_CONTENTS, ve) : ut, y = Gt(b, "FORBID_TAGS") ? Oe({}, b.FORBID_TAGS, ve) : {}, re = Gt(b, "FORBID_ATTR") ? Oe({}, b.FORBID_ATTR, ve) : {}, ae = Gt(b, "USE_PROFILES") ? b.USE_PROFILES : !1, O = b.ALLOW_ARIA_ATTR !== !1, ne = b.ALLOW_DATA_ATTR !== !1, ee = b.ALLOW_UNKNOWN_PROTOCOLS || !1, te = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, G = b.SAFE_FOR_TEMPLATES || !1, oe = b.SAFE_FOR_XML !== !1, se = b.WHOLE_DOCUMENT || !1, Z = b.RETURN_DOM || !1, le = b.RETURN_DOM_FRAGMENT || !1, $e = b.RETURN_TRUSTED_TYPE || !1, he = b.FORCE_BODY || !1, me = b.SANITIZE_DOM !== !1, st = b.SANITIZE_NAMED_PROPS || !1, ge = b.KEEP_CONTENT !== !1, V = b.IN_PLACE || !1, Ze = b.ALLOWED_URI_REGEXP || fs, dt = b.NAMESPACE || nt, it = b.MATHML_TEXT_INTEGRATION_POINTS || it, bt = b.HTML_INTEGRATION_POINTS || bt, F = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && vt(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (F.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && vt(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (F.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (F.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), G && (ne = !1), le && (Z = !0), ae && (ie = Oe({}, ti), A = [], ae.html === !0 && (Oe(ie, ei), Oe(A, ri)), ae.svg === !0 && (Oe(ie, Na), Oe(A, Ia), Oe(A, Hn)), ae.svgFilters === !0 && (Oe(ie, La), Oe(A, Ia), Oe(A, Hn)), ae.mathMl === !0 && (Oe(ie, Pa), Oe(A, ni), Oe(A, Hn))), b.ADD_TAGS && (ie === z && (ie = Lr(ie)), Oe(ie, b.ADD_TAGS, ve)), b.ADD_ATTR && (A === M && (A = Lr(A)), Oe(A, b.ADD_ATTR, ve)), b.ADD_URI_SAFE_ATTR && Oe(Lt, b.ADD_URI_SAFE_ATTR, ve), b.FORBID_CONTENTS && (Ge === ut && (Ge = Lr(Ge)), Oe(Ge, b.FORBID_CONTENTS, ve)), ge && (ie["#text"] = !0), se && Oe(ie, ["html", "head", "body"]), ie.table && (Oe(ie, ["tbody"]), delete y.tbody), b.TRUSTED_TYPES_POLICY) {
        if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ln('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ln('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        q = b.TRUSTED_TYPES_POLICY, T = q.createHTML("");
      } else
        q === void 0 && (q = mc(B, a)), q !== null && typeof T == "string" && (T = q.createHTML(""));
      St && St(b), Ke = b;
    }
  }, zt = Oe({}, [...Na, ...La, ...ac]), $t = Oe({}, [...Pa, ...oc]), yr = function(b) {
    let w = Y(b);
    (!w || !w.tagName) && (w = {
      namespaceURI: dt,
      tagName: "template"
    });
    const E = ea(b.tagName), X = ea(w.tagName);
    return Mt[b.namespaceURI] ? b.namespaceURI === pt ? w.namespaceURI === nt ? E === "svg" : w.namespaceURI === yt ? E === "svg" && (X === "annotation-xml" || it[X]) : !!zt[E] : b.namespaceURI === yt ? w.namespaceURI === nt ? E === "math" : w.namespaceURI === pt ? E === "math" && bt[X] : !!$t[E] : b.namespaceURI === nt ? w.namespaceURI === pt && !bt[X] || w.namespaceURI === yt && !it[X] ? !1 : !$t[E] && (Qt[E] || !zt[E]) : !!(Ce === "application/xhtml+xml" && Mt[b.namespaceURI]) : !1;
  }, at = function(b) {
    on(t.removed, {
      element: b
    });
    try {
      Y(b).removeChild(b);
    } catch {
      I(b);
    }
  }, Tt = function(b, w) {
    try {
      on(t.removed, {
        attribute: w.getAttributeNode(b),
        from: w
      });
    } catch {
      on(t.removed, {
        attribute: null,
        from: w
      });
    }
    if (w.removeAttribute(b), b === "is")
      if (Z || le)
        try {
          at(w);
        } catch {
        }
      else
        try {
          w.setAttribute(b, "");
        } catch {
        }
  }, rr = function(b) {
    let w = null, E = null;
    if (he)
      b = "<remove></remove>" + b;
    else {
      const ke = Ko(b, /^[\r\n\t ]+/);
      E = ke && ke[0];
    }
    Ce === "application/xhtml+xml" && dt === nt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const X = q ? q.createHTML(b) : b;
    if (dt === nt)
      try {
        w = new D().parseFromString(X, Ce);
      } catch {
      }
    if (!w || !w.documentElement) {
      w = ce.createDocument(dt, "template", null);
      try {
        w.documentElement.innerHTML = Ft ? T : X;
      } catch {
      }
    }
    const ye = w.body || w.documentElement;
    return b && E && ye.insertBefore(r.createTextNode(E), ye.childNodes[0] || null), dt === nt ? De.call(w, se ? "html" : "body")[0] : se ? w.documentElement : ye;
  }, nr = function(b) {
    return _e.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Et = function(b) {
    return b instanceof x && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof _) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, er = function(b) {
    return typeof g == "function" && b instanceof g;
  };
  function Ye(b, w, E) {
    Wn(b, (X) => {
      X.call(t, w, E, Ke);
    });
  }
  const Ut = function(b) {
    let w = null;
    if (Ye(ue.beforeSanitizeElements, b, null), Et(b))
      return at(b), !0;
    const E = ve(b.nodeName);
    if (Ye(ue.uponSanitizeElement, b, {
      tagName: E,
      allowedTags: ie
    }), b.hasChildNodes() && !er(b.firstElementChild) && wt(/<[/\w]/g, b.innerHTML) && wt(/<[/\w]/g, b.textContent) || b.nodeType === un.progressingInstruction || oe && b.nodeType === un.comment && wt(/<[/\w]/g, b.data))
      return at(b), !0;
    if (!ie[E] || y[E]) {
      if (!y[E] && At(E) && (F.tagNameCheck instanceof RegExp && wt(F.tagNameCheck, E) || F.tagNameCheck instanceof Function && F.tagNameCheck(E)))
        return !1;
      if (ge && !Ge[E]) {
        const X = Y(b) || b.parentNode, ye = H(b) || b.childNodes;
        if (ye && X) {
          const ke = ye.length;
          for (let Ie = ke - 1; Ie >= 0; --Ie) {
            const we = S(ye[Ie], !0);
            we.__removalCount = (b.__removalCount || 0) + 1, X.insertBefore(we, $(b));
          }
        }
      }
      return at(b), !0;
    }
    return b instanceof p && !yr(b) || (E === "noscript" || E === "noembed" || E === "noframes") && wt(/<\/no(script|embed|frames)/i, b.innerHTML) ? (at(b), !0) : (G && b.nodeType === un.text && (w = b.textContent, Wn([pe, Ne, Le], (X) => {
      w = sn(w, X, " ");
    }), b.textContent !== w && (on(t.removed, {
      element: b.cloneNode()
    }), b.textContent = w)), Ye(ue.afterSanitizeElements, b, null), !1);
  }, ar = function(b, w, E) {
    if (me && (w === "id" || w === "name") && (E in r || E in Kt))
      return !1;
    if (!(ne && !re[w] && wt(Ee, w)) && !(O && wt(lt, w))) {
      if (!A[w] || re[w]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(At(b) && (F.tagNameCheck instanceof RegExp && wt(F.tagNameCheck, b) || F.tagNameCheck instanceof Function && F.tagNameCheck(b)) && (F.attributeNameCheck instanceof RegExp && wt(F.attributeNameCheck, w) || F.attributeNameCheck instanceof Function && F.attributeNameCheck(w)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          w === "is" && F.allowCustomizedBuiltInElements && (F.tagNameCheck instanceof RegExp && wt(F.tagNameCheck, E) || F.tagNameCheck instanceof Function && F.tagNameCheck(E)))
        ) return !1;
      } else if (!Lt[w] && !wt(Ze, sn(E, Ae, "")) && !((w === "src" || w === "xlink:href" || w === "href") && b !== "script" && ec(E, "data:") === 0 && Me[b]) && !(ee && !wt(Fe, sn(E, Ae, ""))) && E)
        return !1;
    }
    return !0;
  }, At = function(b) {
    return b !== "annotation-xml" && Ko(b, Ue);
  }, or = function(b) {
    Ye(ue.beforeSanitizeAttributes, b, null);
    const {
      attributes: w
    } = b;
    if (!w || Et(b))
      return;
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: A,
      forceKeepAttr: void 0
    };
    let X = w.length;
    for (; X--; ) {
      const ye = w[X], {
        name: ke,
        namespaceURI: Ie,
        value: we
      } = ye, Xe = ve(ke);
      let Ve = ke === "value" ? we : tc(we);
      if (E.attrName = Xe, E.attrValue = Ve, E.keepAttr = !0, E.forceKeepAttr = void 0, Ye(ue.uponSanitizeAttribute, b, E), Ve = E.attrValue, st && (Xe === "id" || Xe === "name") && (Tt(ke, b), Ve = qe + Ve), oe && wt(/((--!?|])>)|<\/(style|title)/i, Ve)) {
        Tt(ke, b);
        continue;
      }
      if (E.forceKeepAttr || (Tt(ke, b), !E.keepAttr))
        continue;
      if (!te && wt(/\/>/i, Ve)) {
        Tt(ke, b);
        continue;
      }
      G && Wn([pe, Ne, Le], (sr) => {
        Ve = sn(Ve, sr, " ");
      });
      const et = ve(b.nodeName);
      if (ar(et, Xe, Ve)) {
        if (q && typeof B == "object" && typeof B.getAttributeType == "function" && !Ie)
          switch (B.getAttributeType(et, Xe)) {
            case "TrustedHTML": {
              Ve = q.createHTML(Ve);
              break;
            }
            case "TrustedScriptURL": {
              Ve = q.createScriptURL(Ve);
              break;
            }
          }
        try {
          Ie ? b.setAttributeNS(Ie, ke, Ve) : b.setAttribute(ke, Ve), Et(b) ? at(b) : Zo(t.removed);
        } catch {
        }
      }
    }
    Ye(ue.afterSanitizeAttributes, b, null);
  }, ir = function b(w) {
    let E = null;
    const X = nr(w);
    for (Ye(ue.beforeSanitizeShadowDOM, w, null); E = X.nextNode(); )
      Ye(ue.uponSanitizeShadowNode, E, null), Ut(E), or(E), E.content instanceof s && b(E.content);
    Ye(ue.afterSanitizeShadowDOM, w, null);
  };
  return t.sanitize = function(b) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = null, X = null, ye = null, ke = null;
    if (Ft = !b, Ft && (b = "<!-->"), typeof b != "string" && !er(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw ln("dirty is not a string, aborting");
      } else
        throw ln("toString is not a function");
    if (!t.isSupported)
      return b;
    if (K || Pt(w), t.removed = [], typeof b == "string" && (V = !1), V) {
      if (b.nodeName) {
        const Xe = ve(b.nodeName);
        if (!ie[Xe] || y[Xe])
          throw ln("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof g)
      E = rr("<!---->"), X = E.ownerDocument.importNode(b, !0), X.nodeType === un.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? E = X : E.appendChild(X);
    else {
      if (!Z && !G && !se && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return q && $e ? q.createHTML(b) : b;
      if (E = rr(b), !E)
        return Z ? null : $e ? T : "";
    }
    E && he && at(E.firstChild);
    const Ie = nr(V ? b : E);
    for (; ye = Ie.nextNode(); )
      Ut(ye), or(ye), ye.content instanceof s && ir(ye.content);
    if (V)
      return b;
    if (Z) {
      if (le)
        for (ke = Pe.call(E.ownerDocument); E.firstChild; )
          ke.appendChild(E.firstChild);
      else
        ke = E;
      return (A.shadowroot || A.shadowrootmode) && (ke = He.call(n, ke, !0)), ke;
    }
    let we = se ? E.outerHTML : E.innerHTML;
    return se && ie["!doctype"] && E.ownerDocument && E.ownerDocument.doctype && E.ownerDocument.doctype.name && wt(ps, E.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + E.ownerDocument.doctype.name + `>
` + we), G && Wn([pe, Ne, Le], (Xe) => {
      we = sn(we, Xe, " ");
    }), q && $e ? q.createHTML(we) : we;
  }, t.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pt(b), K = !0;
  }, t.clearConfig = function() {
    Ke = null, K = !1;
  }, t.isValidAttribute = function(b, w, E) {
    Ke || Pt({});
    const X = ve(b), ye = ve(w);
    return ar(X, ye, E);
  }, t.addHook = function(b, w) {
    typeof w == "function" && on(ue[b], w);
  }, t.removeHook = function(b, w) {
    if (w !== void 0) {
      const E = Zl(ue[b], w);
      return E === -1 ? void 0 : Kl(ue[b], E, 1)[0];
    }
    return Zo(ue[b]);
  }, t.removeHooks = function(b) {
    ue[b] = [];
  }, t.removeAllHooks = function() {
    ue = oi();
  }, t;
}
var gc = hs();
const Ir = (e) => ({ __html: gc.sanitize(e) });
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
const yc = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: s = "",
  region: d = "",
  component: g = ""
}) => {
  const { dataLayer: p } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: d.toLowerCase(),
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: g.toLowerCase()
  };
  p && p.push(f);
}, xn = ({ children: e }) => /* @__PURE__ */ j.jsx(j.Fragment, { children: e });
xn.propTypes = {
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node,
    l.string
  ])
};
var ms = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", d = 0; d < arguments.length; d++) {
        var g = arguments[d];
        g && (s = a(s, n(g)));
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
        t.call(s, g) && s[g] && (d = a(d, g));
      return d;
    }
    function a(s, d) {
      return d ? s ? s + " " + d : s + d : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(ms);
var bc = ms.exports;
const pr = /* @__PURE__ */ mo(bc);
({
  ...xn.propTypes
});
const gs = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ j.jsx("div", { className: t, ...r, children: /* @__PURE__ */ j.jsx("div", { className: "row", children: e }) });
gs.propTypes = {
  children: xn.propTypes.children
};
({
  ...gs.propTypes
});
xn.propTypes.children, l.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
xn.propTypes.children;
const vc = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), Da = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), ys = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.arrayOf(l.string),
    header: l.string,
    body: l.string
  })
}), go = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var Nr = {}, ii;
function wc() {
  if (ii) return Nr;
  ii = 1;
  var e = ct;
  function t(o) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, m = 1; m < arguments.length; m++) u += "&args[]=" + encodeURIComponent(arguments[m]);
    return "Minified React error #" + o + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, s = {};
  function d(o) {
    return r.call(s, o) ? !0 : r.call(a, o) ? !1 : n.test(o) ? s[o] = !0 : (a[o] = !0, !1);
  }
  function g(o, u, m, k, P, R, U) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = k, this.attributeNamespace = P, this.mustUseProperty = m, this.propertyName = o, this.type = u, this.sanitizeURL = R, this.removeEmptyString = U;
  }
  var p = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    p[o] = new g(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var u = o[0];
    p[u] = new g(u, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    p[o] = new g(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    p[o] = new g(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    p[o] = new g(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    p[o] = new g(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    p[o] = new g(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    p[o] = new g(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    p[o] = new g(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var f = /[\-:]([a-z])/g;
  function _(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var u = o.replace(
      f,
      _
    );
    p[u] = new g(u, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var u = o.replace(f, _);
    p[u] = new g(u, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var u = o.replace(f, _);
    p[u] = new g(u, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    p[o] = new g(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), p.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    p[o] = new g(o, 1, !1, o.toLowerCase(), null, !0, !0);
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
  }, D = ["Webkit", "ms", "Moz", "O"];
  Object.keys(x).forEach(function(o) {
    D.forEach(function(u) {
      u = u + o.charAt(0).toUpperCase() + o.substring(1), x[u] = x[o];
    });
  });
  var B = /["'&<>]/;
  function C(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var u = B.exec(o);
    if (u) {
      var m = "", k, P = 0;
      for (k = u.index; k < o.length; k++) {
        switch (o.charCodeAt(k)) {
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
        P !== k && (m += o.substring(P, k)), P = k + 1, m += u;
      }
      o = P !== k ? m + o.substring(P, k) : m;
    }
    return o;
  }
  var S = /([A-Z])/g, I = /^ms-/, $ = Array.isArray;
  function H(o, u) {
    return { insertionMode: o, selectedValue: u };
  }
  function Y(o, u, m) {
    switch (u) {
      case "select":
        return H(1, m.value != null ? m.value : m.defaultValue);
      case "svg":
        return H(2, null);
      case "math":
        return H(3, null);
      case "foreignObject":
        return H(1, null);
      case "table":
        return H(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return H(5, null);
      case "colgroup":
        return H(7, null);
      case "tr":
        return H(6, null);
    }
    return 4 <= o.insertionMode || o.insertionMode === 0 ? H(1, null) : o;
  }
  var q = /* @__PURE__ */ new Map();
  function T(o, u, m) {
    if (typeof m != "object") throw Error(t(62));
    u = !0;
    for (var k in m) if (r.call(m, k)) {
      var P = m[k];
      if (P != null && typeof P != "boolean" && P !== "") {
        if (k.indexOf("--") === 0) {
          var R = C(k);
          P = C(("" + P).trim());
        } else {
          R = k;
          var U = q.get(R);
          U !== void 0 || (U = C(R.replace(S, "-$1").toLowerCase().replace(I, "-ms-")), q.set(R, U)), R = U, P = typeof P == "number" ? P === 0 || r.call(x, k) ? "" + P : P + "px" : C(("" + P).trim());
        }
        u ? (u = !1, o.push(' style="', R, ":", P)) : o.push(";", R, ":", P);
      }
    }
    u || o.push('"');
  }
  function ce(o, u, m, k) {
    switch (m) {
      case "style":
        T(o, u, k);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < m.length) || m[0] !== "o" && m[0] !== "O" || m[1] !== "n" && m[1] !== "N") {
      if (u = p.hasOwnProperty(m) ? p[m] : null, u !== null) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (m = u.attributeName, u.type) {
          case 3:
            k && o.push(" ", m, '=""');
            break;
          case 4:
            k === !0 ? o.push(" ", m, '=""') : k !== !1 && o.push(" ", m, '="', C(k), '"');
            break;
          case 5:
            isNaN(k) || o.push(" ", m, '="', C(k), '"');
            break;
          case 6:
            !isNaN(k) && 1 <= k && o.push(" ", m, '="', C(k), '"');
            break;
          default:
            u.sanitizeURL && (k = "" + k), o.push(" ", m, '="', C(k), '"');
        }
      } else if (d(m)) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = m.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        o.push(" ", m, '="', C(k), '"');
      }
    }
  }
  function _e(o, u, m) {
    if (u != null) {
      if (m != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && o.push("" + u);
    }
  }
  function Pe(o) {
    var u = "";
    return e.Children.forEach(o, function(m) {
      m != null && (u += m);
    }), u;
  }
  function De(o, u, m, k) {
    o.push(pe(m));
    var P = m = null, R;
    for (R in u) if (r.call(u, R)) {
      var U = u[R];
      if (U != null) switch (R) {
        case "children":
          m = U;
          break;
        case "dangerouslySetInnerHTML":
          P = U;
          break;
        default:
          ce(o, k, R, U);
      }
    }
    return o.push(">"), _e(o, P, m), typeof m == "string" ? (o.push(C(m)), null) : m;
  }
  var He = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ue = /* @__PURE__ */ new Map();
  function pe(o) {
    var u = ue.get(o);
    if (u === void 0) {
      if (!He.test(o)) throw Error(t(65, o));
      u = "<" + o, ue.set(o, u);
    }
    return u;
  }
  function Ne(o, u, m, k, P) {
    switch (u) {
      case "select":
        o.push(pe("select"));
        var R = null, U = null;
        for (Se in m) if (r.call(m, Se)) {
          var Q = m[Se];
          if (Q != null) switch (Se) {
            case "children":
              R = Q;
              break;
            case "dangerouslySetInnerHTML":
              U = Q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ce(o, k, Se, Q);
          }
        }
        return o.push(">"), _e(o, U, R), R;
      case "option":
        U = P.selectedValue, o.push(pe("option"));
        var de = Q = null, be = null, Se = null;
        for (R in m) if (r.call(m, R)) {
          var tt = m[R];
          if (tt != null) switch (R) {
            case "children":
              Q = tt;
              break;
            case "selected":
              be = tt;
              break;
            case "dangerouslySetInnerHTML":
              Se = tt;
              break;
            case "value":
              de = tt;
            default:
              ce(o, k, R, tt);
          }
        }
        if (U != null) if (m = de !== null ? "" + de : Pe(Q), $(U)) {
          for (k = 0; k < U.length; k++)
            if ("" + U[k] === m) {
              o.push(' selected=""');
              break;
            }
        } else "" + U === m && o.push(' selected=""');
        else be && o.push(' selected=""');
        return o.push(">"), _e(o, Se, Q), Q;
      case "textarea":
        o.push(pe("textarea")), Se = U = R = null;
        for (Q in m) if (r.call(m, Q) && (de = m[Q], de != null)) switch (Q) {
          case "children":
            Se = de;
            break;
          case "value":
            R = de;
            break;
          case "defaultValue":
            U = de;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ce(
              o,
              k,
              Q,
              de
            );
        }
        if (R === null && U !== null && (R = U), o.push(">"), Se != null) {
          if (R != null) throw Error(t(92));
          if ($(Se) && 1 < Se.length) throw Error(t(93));
          R = "" + Se;
        }
        return typeof R == "string" && R[0] === `
` && o.push(`
`), R !== null && o.push(C("" + R)), null;
      case "input":
        o.push(pe("input")), de = Se = Q = R = null;
        for (U in m) if (r.call(m, U) && (be = m[U], be != null)) switch (U) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            de = be;
            break;
          case "defaultValue":
            Q = be;
            break;
          case "checked":
            Se = be;
            break;
          case "value":
            R = be;
            break;
          default:
            ce(o, k, U, be);
        }
        return Se !== null ? ce(o, k, "checked", Se) : de !== null && ce(o, k, "checked", de), R !== null ? ce(o, k, "value", R) : Q !== null && ce(o, k, "value", Q), o.push("/>"), null;
      case "menuitem":
        o.push(pe("menuitem"));
        for (var Wt in m) if (r.call(m, Wt) && (R = m[Wt], R != null)) switch (Wt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ce(o, k, Wt, R);
        }
        return o.push(">"), null;
      case "title":
        o.push(pe("title")), R = null;
        for (tt in m) if (r.call(m, tt) && (U = m[tt], U != null)) switch (tt) {
          case "children":
            R = U;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ce(o, k, tt, U);
        }
        return o.push(">"), R;
      case "listing":
      case "pre":
        o.push(pe(u)), U = R = null;
        for (de in m) if (r.call(m, de) && (Q = m[de], Q != null)) switch (de) {
          case "children":
            R = Q;
            break;
          case "dangerouslySetInnerHTML":
            U = Q;
            break;
          default:
            ce(o, k, de, Q);
        }
        if (o.push(">"), U != null) {
          if (R != null) throw Error(t(60));
          if (typeof U != "object" || !("__html" in U)) throw Error(t(61));
          m = U.__html, m != null && (typeof m == "string" && 0 < m.length && m[0] === `
` ? o.push(`
`, m) : o.push("" + m));
        }
        return typeof R == "string" && R[0] === `
` && o.push(`
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
        o.push(pe(u));
        for (var Ht in m) if (r.call(m, Ht) && (R = m[Ht], R != null)) switch (Ht) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ce(o, k, Ht, R);
        }
        return o.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return De(
          o,
          m,
          u,
          k
        );
      case "html":
        return P.insertionMode === 0 && o.push("<!DOCTYPE html>"), De(o, m, u, k);
      default:
        if (u.indexOf("-") === -1 && typeof m.is != "string") return De(o, m, u, k);
        o.push(pe(u)), U = R = null;
        for (be in m) if (r.call(m, be) && (Q = m[be], Q != null)) switch (be) {
          case "children":
            R = Q;
            break;
          case "dangerouslySetInnerHTML":
            U = Q;
            break;
          case "style":
            T(o, k, Q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(be) && typeof Q != "function" && typeof Q != "symbol" && o.push(" ", be, '="', C(Q), '"');
        }
        return o.push(">"), _e(o, U, R), R;
    }
  }
  function Le(o, u, m) {
    if (o.push('<!--$?--><template id="'), m === null) throw Error(t(395));
    return o.push(m), o.push('"></template>');
  }
  function Ee(o, u, m, k) {
    switch (m.insertionMode) {
      case 0:
      case 1:
        return o.push('<div hidden id="'), o.push(u.segmentPrefix), u = k.toString(16), o.push(u), o.push('">');
      case 2:
        return o.push('<svg aria-hidden="true" style="display:none" id="'), o.push(u.segmentPrefix), u = k.toString(16), o.push(u), o.push('">');
      case 3:
        return o.push('<math aria-hidden="true" style="display:none" id="'), o.push(u.segmentPrefix), u = k.toString(16), o.push(u), o.push('">');
      case 4:
        return o.push('<table hidden id="'), o.push(u.segmentPrefix), u = k.toString(16), o.push(u), o.push('">');
      case 5:
        return o.push('<table hidden><tbody id="'), o.push(u.segmentPrefix), u = k.toString(16), o.push(u), o.push('">');
      case 6:
        return o.push('<table hidden><tr id="'), o.push(u.segmentPrefix), u = k.toString(16), o.push(u), o.push('">');
      case 7:
        return o.push('<table hidden><colgroup id="'), o.push(u.segmentPrefix), u = k.toString(16), o.push(u), o.push('">');
      default:
        throw Error(t(397));
    }
  }
  function lt(o, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return o.push("</div>");
      case 2:
        return o.push("</svg>");
      case 3:
        return o.push("</math>");
      case 4:
        return o.push("</table>");
      case 5:
        return o.push("</tbody></table>");
      case 6:
        return o.push("</tr></table>");
      case 7:
        return o.push("</colgroup></table>");
      default:
        throw Error(t(397));
    }
  }
  var Fe = /[<\u2028\u2029]/g;
  function Ae(o) {
    return JSON.stringify(o).replace(Fe, function(u) {
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
  function Ue(o, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: o };
  }
  function Ze(o, u, m, k) {
    return m.generateStaticMarkup ? (o.push(C(u)), !1) : (u === "" ? o = k : (k && o.push("<!-- -->"), o.push(C(u)), o = !0), o);
  }
  var ie = Object.assign, z = Symbol.for("react.element"), A = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), O = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), K = Symbol.for("react.debug_trace_mode"), he = Symbol.for("react.legacy_hidden"), Z = Symbol.for("react.default_value"), le = Symbol.iterator;
  function $e(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case M:
        return "Fragment";
      case A:
        return "Portal";
      case y:
        return "Profiler";
      case F:
        return "StrictMode";
      case ee:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case O:
        return (o.displayName || "Context") + ".Consumer";
      case re:
        return (o._context.displayName || "Context") + ".Provider";
      case ne:
        var u = o.render;
        return o = o.displayName, o || (o = u.displayName || u.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case G:
        return u = o.displayName || null, u !== null ? u : $e(o.type) || "Memo";
      case oe:
        u = o._payload, o = o._init;
        try {
          return $e(o(u));
        } catch {
        }
    }
    return null;
  }
  var me = {};
  function st(o, u) {
    if (o = o.contextTypes, !o) return me;
    var m = {}, k;
    for (k in o) m[k] = u[k];
    return m;
  }
  var qe = null;
  function ge(o, u) {
    if (o !== u) {
      o.context._currentValue2 = o.parentValue, o = o.parent;
      var m = u.parent;
      if (o === null) {
        if (m !== null) throw Error(t(401));
      } else {
        if (m === null) throw Error(t(401));
        ge(o, m);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function V(o) {
    o.context._currentValue2 = o.parentValue, o = o.parent, o !== null && V(o);
  }
  function ae(o) {
    var u = o.parent;
    u !== null && ae(u), o.context._currentValue2 = o.value;
  }
  function Ge(o, u) {
    if (o.context._currentValue2 = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === u.depth ? ge(o, u) : Ge(o, u);
  }
  function ut(o, u) {
    var m = u.parent;
    if (m === null) throw Error(t(402));
    o.depth === m.depth ? ge(o, m) : ut(o, m), u.context._currentValue2 = u.value;
  }
  function Me(o) {
    var u = qe;
    u !== o && (u === null ? ae(o) : o === null ? V(u) : u.depth === o.depth ? ge(u, o) : u.depth > o.depth ? Ge(u, o) : ut(u, o), qe = o);
  }
  var Jt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, u) {
    o = o._reactInternals, o.queue !== null && o.queue.push(u);
  }, enqueueReplaceState: function(o, u) {
    o = o._reactInternals, o.replace = !0, o.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function Lt(o, u, m, k) {
    var P = o.state !== void 0 ? o.state : null;
    o.updater = Jt, o.props = m, o.state = P;
    var R = { queue: [], replace: !1 };
    o._reactInternals = R;
    var U = u.contextType;
    if (o.context = typeof U == "object" && U !== null ? U._currentValue2 : k, U = u.getDerivedStateFromProps, typeof U == "function" && (U = U(m, P), P = U == null ? P : ie({}, P, U), o.state = P), typeof u.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (u = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), u !== o.state && Jt.enqueueReplaceState(o, o.state, null), R.queue !== null && 0 < R.queue.length) if (u = R.queue, U = R.replace, R.queue = null, R.replace = !1, U && u.length === 1) o.state = u[0];
    else {
      for (R = U ? u[0] : o.state, P = !0, U = U ? 1 : 0; U < u.length; U++) {
        var Q = u[U];
        Q = typeof Q == "function" ? Q.call(o, R, m, k) : Q, Q != null && (P ? (P = !1, R = ie({}, R, Q)) : ie(R, Q));
      }
      o.state = R;
    }
    else R.queue = null;
  }
  var tr = { id: 1, overflow: "" };
  function yt(o, u, m) {
    var k = o.id;
    o = o.overflow;
    var P = 32 - pt(k) - 1;
    k &= ~(1 << P), m += 1;
    var R = 32 - pt(u) + P;
    if (30 < R) {
      var U = P - P % 5;
      return R = (k & (1 << U) - 1).toString(32), k >>= U, P -= U, { id: 1 << 32 - pt(u) + P | m << P | k, overflow: R + o };
    }
    return { id: 1 << R | m << P | k, overflow: o };
  }
  var pt = Math.clz32 ? Math.clz32 : Ft, nt = Math.log, dt = Math.LN2;
  function Ft(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (nt(o) / dt | 0) | 0;
  }
  function Mt(o, u) {
    return o === u && (o !== 0 || 1 / o === 1 / u) || o !== o && u !== u;
  }
  var Cr = typeof Object.is == "function" ? Object.is : Mt, it = null, bt = null, Qt = null, Ce = null, jt = !1, Zt = !1, ve = 0, Ke = null, Kt = 0;
  function vt() {
    if (it === null) throw Error(t(321));
    return it;
  }
  function Pt() {
    if (0 < Kt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function zt() {
    return Ce === null ? Qt === null ? (jt = !1, Qt = Ce = Pt()) : (jt = !0, Ce = Qt) : Ce.next === null ? (jt = !1, Ce = Ce.next = Pt()) : (jt = !0, Ce = Ce.next), Ce;
  }
  function $t() {
    bt = it = null, Zt = !1, Qt = null, Kt = 0, Ce = Ke = null;
  }
  function yr(o, u) {
    return typeof u == "function" ? u(o) : u;
  }
  function at(o, u, m) {
    if (it = vt(), Ce = zt(), jt) {
      var k = Ce.queue;
      if (u = k.dispatch, Ke !== null && (m = Ke.get(k), m !== void 0)) {
        Ke.delete(k), k = Ce.memoizedState;
        do
          k = o(k, m.action), m = m.next;
        while (m !== null);
        return Ce.memoizedState = k, [k, u];
      }
      return [Ce.memoizedState, u];
    }
    return o = o === yr ? typeof u == "function" ? u() : u : m !== void 0 ? m(u) : u, Ce.memoizedState = o, o = Ce.queue = { last: null, dispatch: null }, o = o.dispatch = rr.bind(null, it, o), [Ce.memoizedState, o];
  }
  function Tt(o, u) {
    if (it = vt(), Ce = zt(), u = u === void 0 ? null : u, Ce !== null) {
      var m = Ce.memoizedState;
      if (m !== null && u !== null) {
        var k = m[1];
        e: if (k === null) k = !1;
        else {
          for (var P = 0; P < k.length && P < u.length; P++) if (!Cr(u[P], k[P])) {
            k = !1;
            break e;
          }
          k = !0;
        }
        if (k) return m[0];
      }
    }
    return o = o(), Ce.memoizedState = [o, u], o;
  }
  function rr(o, u, m) {
    if (25 <= Kt) throw Error(t(301));
    if (o === it) if (Zt = !0, o = { action: m, next: null }, Ke === null && (Ke = /* @__PURE__ */ new Map()), m = Ke.get(u), m === void 0) Ke.set(u, o);
    else {
      for (u = m; u.next !== null; ) u = u.next;
      u.next = o;
    }
  }
  function nr() {
    throw Error(t(394));
  }
  function Et() {
  }
  var er = { readContext: function(o) {
    return o._currentValue2;
  }, useContext: function(o) {
    return vt(), o._currentValue2;
  }, useMemo: Tt, useReducer: at, useRef: function(o) {
    it = vt(), Ce = zt();
    var u = Ce.memoizedState;
    return u === null ? (o = { current: o }, Ce.memoizedState = o) : u;
  }, useState: function(o) {
    return at(yr, o);
  }, useInsertionEffect: Et, useLayoutEffect: function() {
  }, useCallback: function(o, u) {
    return Tt(function() {
      return o;
    }, u);
  }, useImperativeHandle: Et, useEffect: Et, useDebugValue: Et, useDeferredValue: function(o) {
    return vt(), o;
  }, useTransition: function() {
    return vt(), [
      !1,
      nr
    ];
  }, useId: function() {
    var o = bt.treeContext, u = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - pt(o) - 1)).toString(32) + u;
    var m = Ye;
    if (m === null) throw Error(t(404));
    return u = ve++, o = ":" + m.idPrefix + "R" + o, 0 < u && (o += "H" + u.toString(32)), o + ":";
  }, useMutableSource: function(o, u) {
    return vt(), u(o._source);
  }, useSyncExternalStore: function(o, u, m) {
    if (m === void 0) throw Error(t(407));
    return m();
  } }, Ye = null, Ut = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ar(o) {
    return console.error(o), null;
  }
  function At() {
  }
  function or(o, u, m, k, P, R, U, Q, de) {
    var be = [], Se = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: k, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Se, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: P === void 0 ? ar : P, onAllReady: At, onShellReady: U === void 0 ? At : U, onShellError: At, onFatalError: At }, m = b(u, 0, null, m, !1, !1), m.parentFlushed = !0, o = ir(u, o, null, m, Se, me, null, tr), be.push(o), u;
  }
  function ir(o, u, m, k, P, R, U, Q) {
    o.allPendingTasks++, m === null ? o.pendingRootTasks++ : m.pendingTasks++;
    var de = { node: u, ping: function() {
      var be = o.pingedTasks;
      be.push(de), be.length === 1 && En(o);
    }, blockedBoundary: m, blockedSegment: k, abortSet: P, legacyContext: R, context: U, treeContext: Q };
    return P.add(de), de;
  }
  function b(o, u, m, k, P, R) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: k, boundary: m, lastPushedText: P, textEmbedded: R };
  }
  function w(o, u) {
    if (o = o.onError(u), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function E(o, u) {
    var m = o.onShellError;
    m(u), m = o.onFatalError, m(u), o.destination !== null ? (o.status = 2, o.destination.destroy(u)) : (o.status = 1, o.fatalError = u);
  }
  function X(o, u, m, k, P) {
    for (it = {}, bt = u, ve = 0, o = m(k, P); Zt; ) Zt = !1, ve = 0, Kt += 1, Ce = null, o = m(k, P);
    return $t(), o;
  }
  function ye(o, u, m, k) {
    var P = m.render(), R = k.childContextTypes;
    if (R != null) {
      var U = u.legacyContext;
      if (typeof m.getChildContext != "function") k = U;
      else {
        m = m.getChildContext();
        for (var Q in m) if (!(Q in R)) throw Error(t(108, $e(k) || "Unknown", Q));
        k = ie({}, U, m);
      }
      u.legacyContext = k, we(o, u, P), u.legacyContext = U;
    } else we(o, u, P);
  }
  function ke(o, u) {
    if (o && o.defaultProps) {
      u = ie({}, u), o = o.defaultProps;
      for (var m in o) u[m] === void 0 && (u[m] = o[m]);
      return u;
    }
    return u;
  }
  function Ie(o, u, m, k, P) {
    if (typeof m == "function") if (m.prototype && m.prototype.isReactComponent) {
      P = st(m, u.legacyContext);
      var R = m.contextType;
      R = new m(k, typeof R == "object" && R !== null ? R._currentValue2 : P), Lt(R, m, k, P), ye(o, u, R, m);
    } else {
      R = st(m, u.legacyContext), P = X(o, u, m, k, R);
      var U = ve !== 0;
      if (typeof P == "object" && P !== null && typeof P.render == "function" && P.$$typeof === void 0) Lt(P, m, k, R), ye(o, u, P, m);
      else if (U) {
        k = u.treeContext, u.treeContext = yt(k, 1, 0);
        try {
          we(o, u, P);
        } finally {
          u.treeContext = k;
        }
      } else we(o, u, P);
    }
    else if (typeof m == "string") {
      switch (P = u.blockedSegment, R = Ne(P.chunks, m, k, o.responseState, P.formatContext), P.lastPushedText = !1, U = P.formatContext, P.formatContext = Y(U, m, k), Ve(o, u, R), P.formatContext = U, m) {
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
          P.chunks.push("</", m, ">");
      }
      P.lastPushedText = !1;
    } else {
      switch (m) {
        case he:
        case K:
        case F:
        case y:
        case M:
          we(o, u, k.children);
          return;
        case te:
          we(o, u, k.children);
          return;
        case se:
          throw Error(t(343));
        case ee:
          e: {
            m = u.blockedBoundary, P = u.blockedSegment, R = k.fallback, k = k.children, U = /* @__PURE__ */ new Set();
            var Q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: U, errorDigest: null }, de = b(o, P.chunks.length, Q, P.formatContext, !1, !1);
            P.children.push(de), P.lastPushedText = !1;
            var be = b(o, 0, null, P.formatContext, !1, !1);
            be.parentFlushed = !0, u.blockedBoundary = Q, u.blockedSegment = be;
            try {
              if (Ve(
                o,
                u,
                k
              ), o.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, Bt(Q, be), Q.pendingTasks === 0) break e;
            } catch (Se) {
              be.status = 4, Q.forceClientRender = !0, Q.errorDigest = w(o, Se);
            } finally {
              u.blockedBoundary = m, u.blockedSegment = P;
            }
            u = ir(o, R, m, de, U, u.legacyContext, u.context, u.treeContext), o.pingedTasks.push(u);
          }
          return;
      }
      if (typeof m == "object" && m !== null) switch (m.$$typeof) {
        case ne:
          if (k = X(o, u, m.render, k, P), ve !== 0) {
            m = u.treeContext, u.treeContext = yt(m, 1, 0);
            try {
              we(o, u, k);
            } finally {
              u.treeContext = m;
            }
          } else we(o, u, k);
          return;
        case G:
          m = m.type, k = ke(m, k), Ie(o, u, m, k, P);
          return;
        case re:
          if (P = k.children, m = m._context, k = k.value, R = m._currentValue2, m._currentValue2 = k, U = qe, qe = k = { parent: U, depth: U === null ? 0 : U.depth + 1, context: m, parentValue: R, value: k }, u.context = k, we(o, u, P), o = qe, o === null) throw Error(t(403));
          k = o.parentValue, o.context._currentValue2 = k === Z ? o.context._defaultValue : k, o = qe = o.parent, u.context = o;
          return;
        case O:
          k = k.children, k = k(m._currentValue2), we(o, u, k);
          return;
        case oe:
          P = m._init, m = P(m._payload), k = ke(m, k), Ie(
            o,
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
  function we(o, u, m) {
    if (u.node = m, typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case z:
          Ie(o, u, m.type, m.props, m.ref);
          return;
        case A:
          throw Error(t(257));
        case oe:
          var k = m._init;
          m = k(m._payload), we(o, u, m);
          return;
      }
      if ($(m)) {
        Xe(o, u, m);
        return;
      }
      if (m === null || typeof m != "object" ? k = null : (k = le && m[le] || m["@@iterator"], k = typeof k == "function" ? k : null), k && (k = k.call(m))) {
        if (m = k.next(), !m.done) {
          var P = [];
          do
            P.push(m.value), m = k.next();
          while (!m.done);
          Xe(o, u, P);
        }
        return;
      }
      throw o = Object.prototype.toString.call(m), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : o));
    }
    typeof m == "string" ? (k = u.blockedSegment, k.lastPushedText = Ze(u.blockedSegment.chunks, m, o.responseState, k.lastPushedText)) : typeof m == "number" && (k = u.blockedSegment, k.lastPushedText = Ze(u.blockedSegment.chunks, "" + m, o.responseState, k.lastPushedText));
  }
  function Xe(o, u, m) {
    for (var k = m.length, P = 0; P < k; P++) {
      var R = u.treeContext;
      u.treeContext = yt(R, k, P);
      try {
        Ve(o, u, m[P]);
      } finally {
        u.treeContext = R;
      }
    }
  }
  function Ve(o, u, m) {
    var k = u.blockedSegment.formatContext, P = u.legacyContext, R = u.context;
    try {
      return we(o, u, m);
    } catch (de) {
      if ($t(), typeof de == "object" && de !== null && typeof de.then == "function") {
        m = de;
        var U = u.blockedSegment, Q = b(o, U.chunks.length, null, U.formatContext, U.lastPushedText, !0);
        U.children.push(Q), U.lastPushedText = !1, o = ir(o, u.node, u.blockedBoundary, Q, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, m.then(o, o), u.blockedSegment.formatContext = k, u.legacyContext = P, u.context = R, Me(R);
      } else throw u.blockedSegment.formatContext = k, u.legacyContext = P, u.context = R, Me(R), de;
    }
  }
  function et(o) {
    var u = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, br(this, u, o);
  }
  function sr(o, u, m) {
    var k = o.blockedBoundary;
    o.blockedSegment.status = 3, k === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (k.pendingTasks--, k.forceClientRender || (k.forceClientRender = !0, o = m === void 0 ? Error(t(432)) : m, k.errorDigest = u.onError(o), k.parentFlushed && u.clientRenderedBoundaries.push(k)), k.fallbackAbortableTasks.forEach(function(P) {
      return sr(P, u, m);
    }), k.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (k = u.onAllReady, k()));
  }
  function Bt(o, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var m = u.children[0];
      m.id = u.id, m.parentFlushed = !0, m.status === 1 && Bt(o, m);
    } else o.completedSegments.push(u);
  }
  function br(o, u, m) {
    if (u === null) {
      if (m.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = m;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = At, u = o.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (m.parentFlushed && m.status === 1 && Bt(u, m), u.parentFlushed && o.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(et, o), u.fallbackAbortableTasks.clear()) : m.parentFlushed && m.status === 1 && (Bt(u, m), u.completedSegments.length === 1 && u.parentFlushed && o.partialBoundaries.push(u)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function En(o) {
    if (o.status !== 2) {
      var u = qe, m = Ut.current;
      Ut.current = er;
      var k = Ye;
      Ye = o.responseState;
      try {
        var P = o.pingedTasks, R;
        for (R = 0; R < P.length; R++) {
          var U = P[R], Q = o, de = U.blockedSegment;
          if (de.status === 0) {
            Me(U.context);
            try {
              we(Q, U, U.node), Q.responseState.generateStaticMarkup || de.lastPushedText && de.textEmbedded && de.chunks.push("<!-- -->"), U.abortSet.delete(U), de.status = 1, br(Q, U.blockedBoundary, de);
            } catch (Ot) {
              if ($t(), typeof Ot == "object" && Ot !== null && typeof Ot.then == "function") {
                var be = U.ping;
                Ot.then(be, be);
              } else {
                U.abortSet.delete(U), de.status = 4;
                var Se = U.blockedBoundary, tt = Ot, Wt = w(Q, tt);
                if (Se === null ? E(Q, tt) : (Se.pendingTasks--, Se.forceClientRender || (Se.forceClientRender = !0, Se.errorDigest = Wt, Se.parentFlushed && Q.clientRenderedBoundaries.push(Se))), Q.allPendingTasks--, Q.allPendingTasks === 0) {
                  var Ht = Q.onAllReady;
                  Ht();
                }
              }
            } finally {
            }
          }
        }
        P.splice(0, R), o.destination !== null && Mr(o, o.destination);
      } catch (Ot) {
        w(o, Ot), E(o, Ot);
      } finally {
        Ye = k, Ut.current = m, m === er && Me(u);
      }
    }
  }
  function Tr(o, u, m) {
    switch (m.parentFlushed = !0, m.status) {
      case 0:
        var k = m.id = o.nextSegmentId++;
        return m.lastPushedText = !1, m.textEmbedded = !1, o = o.responseState, u.push('<template id="'), u.push(o.placeholderPrefix), o = k.toString(16), u.push(o), u.push('"></template>');
      case 1:
        m.status = 2;
        var P = !0;
        k = m.chunks;
        var R = 0;
        m = m.children;
        for (var U = 0; U < m.length; U++) {
          for (P = m[U]; R < P.index; R++) u.push(k[R]);
          P = Er(o, u, P);
        }
        for (; R < k.length - 1; R++) u.push(k[R]);
        return R < k.length && (P = u.push(k[R])), P;
      default:
        throw Error(t(390));
    }
  }
  function Er(o, u, m) {
    var k = m.boundary;
    if (k === null) return Tr(o, u, m);
    if (k.parentFlushed = !0, k.forceClientRender) return o.responseState.generateStaticMarkup || (k = k.errorDigest, u.push("<!--$!-->"), u.push("<template"), k && (u.push(' data-dgst="'), k = C(k), u.push(k), u.push('"')), u.push("></template>")), Tr(o, u, m), o = o.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), o;
    if (0 < k.pendingTasks) {
      k.rootSegmentID = o.nextSegmentId++, 0 < k.completedSegments.length && o.partialBoundaries.push(k);
      var P = o.responseState, R = P.nextSuspenseID++;
      return P = P.boundaryPrefix + R.toString(16), k = k.id = P, Le(u, o.responseState, k), Tr(o, u, m), u.push("<!--/$-->");
    }
    if (k.byteSize > o.progressiveChunkSize) return k.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(k), Le(u, o.responseState, k.id), Tr(o, u, m), u.push("<!--/$-->");
    if (o.responseState.generateStaticMarkup || u.push("<!--$-->"), m = k.completedSegments, m.length !== 1) throw Error(t(391));
    return Er(o, u, m[0]), o = o.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), o;
  }
  function Yr(o, u, m) {
    return Ee(u, o.responseState, m.formatContext, m.id), Er(o, u, m), lt(u, m.formatContext);
  }
  function Xr(o, u, m) {
    for (var k = m.completedSegments, P = 0; P < k.length; P++) Jr(o, u, m, k[P]);
    if (k.length = 0, o = o.responseState, k = m.id, m = m.rootSegmentID, u.push(o.startInlineScript), o.sentCompleteBoundaryFunction ? u.push('$RC("') : (o.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), k === null) throw Error(t(395));
    return m = m.toString(16), u.push(k), u.push('","'), u.push(o.segmentPrefix), u.push(m), u.push('")<\/script>');
  }
  function Jr(o, u, m, k) {
    if (k.status === 2) return !0;
    var P = k.id;
    if (P === -1) {
      if ((k.id = m.rootSegmentID) === -1) throw Error(t(392));
      return Yr(o, u, k);
    }
    return Yr(o, u, k), o = o.responseState, u.push(o.startInlineScript), o.sentCompleteSegmentFunction ? u.push('$RS("') : (o.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(o.segmentPrefix), P = P.toString(16), u.push(P), u.push('","'), u.push(o.placeholderPrefix), u.push(P), u.push('")<\/script>');
  }
  function Mr(o, u) {
    try {
      var m = o.completedRootSegment;
      if (m !== null && o.pendingRootTasks === 0) {
        Er(o, u, m), o.completedRootSegment = null;
        var k = o.responseState.bootstrapChunks;
        for (m = 0; m < k.length - 1; m++) u.push(k[m]);
        m < k.length && u.push(k[m]);
      }
      var P = o.clientRenderedBoundaries, R;
      for (R = 0; R < P.length; R++) {
        var U = P[R];
        k = u;
        var Q = o.responseState, de = U.id, be = U.errorDigest, Se = U.errorMessage, tt = U.errorComponentStack;
        if (k.push(Q.startInlineScript), Q.sentClientRenderFunction ? k.push('$RX("') : (Q.sentClientRenderFunction = !0, k.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), de === null) throw Error(t(395));
        if (k.push(de), k.push('"'), be || Se || tt) {
          k.push(",");
          var Wt = Ae(be || "");
          k.push(Wt);
        }
        if (Se || tt) {
          k.push(",");
          var Ht = Ae(Se || "");
          k.push(Ht);
        }
        if (tt) {
          k.push(",");
          var Ot = Ae(tt);
          k.push(Ot);
        }
        if (!k.push(")<\/script>")) {
          o.destination = null, R++, P.splice(0, R);
          return;
        }
      }
      P.splice(0, R);
      var Ar = o.completedBoundaries;
      for (R = 0; R < Ar.length; R++) if (!Xr(o, u, Ar[R])) {
        o.destination = null, R++, Ar.splice(0, R);
        return;
      }
      Ar.splice(0, R);
      var lr = o.partialBoundaries;
      for (R = 0; R < lr.length; R++) {
        var Zr = lr[R];
        e: {
          P = o, U = u;
          var Or = Zr.completedSegments;
          for (Q = 0; Q < Or.length; Q++) if (!Jr(P, U, Zr, Or[Q])) {
            Q++, Or.splice(0, Q);
            var Rn = !1;
            break e;
          }
          Or.splice(0, Q), Rn = !0;
        }
        if (!Rn) {
          o.destination = null, R++, lr.splice(0, R);
          return;
        }
      }
      lr.splice(0, R);
      var vr = o.completedBoundaries;
      for (R = 0; R < vr.length; R++) if (!Xr(o, u, vr[R])) {
        o.destination = null, R++, vr.splice(0, R);
        return;
      }
      vr.splice(0, R);
    } finally {
      o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function An(o, u) {
    try {
      var m = o.abortableTasks;
      m.forEach(function(k) {
        return sr(k, o, u);
      }), m.clear(), o.destination !== null && Mr(o, o.destination);
    } catch (k) {
      w(o, k), E(o, k);
    }
  }
  function On() {
  }
  function Qr(o, u, m, k) {
    var P = !1, R = null, U = "", Q = { push: function(be) {
      return be !== null && (U += be), !0;
    }, destroy: function(be) {
      P = !0, R = be;
    } }, de = !1;
    if (o = or(o, Ue(m, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, On, void 0, function() {
      de = !0;
    }), En(o), An(o, k), o.status === 1) o.status = 2, Q.destroy(o.fatalError);
    else if (o.status !== 2 && o.destination === null) {
      o.destination = Q;
      try {
        Mr(o, Q);
      } catch (be) {
        w(o, be), E(o, be);
      }
    }
    if (P) throw R;
    if (!de) throw Error(t(426));
    return U;
  }
  return Nr.renderToNodeStream = function() {
    throw Error(t(207));
  }, Nr.renderToStaticMarkup = function(o, u) {
    return Qr(o, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Nr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Nr.renderToString = function(o, u) {
    return Qr(o, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Nr.version = "18.3.1", Nr;
}
var Vn = {}, si;
function kc() {
  if (si) return Vn;
  si = 1;
  var e = ct;
  function t(i) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, h = 1; h < arguments.length; h++) c += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + i + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function a(i, c) {
    if (c.length !== 0) if (512 < c.length) 0 < n && (i.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), i.enqueue(c);
    else {
      var h = r.length - n;
      h < c.length && (h === 0 ? i.enqueue(r) : (r.set(c.subarray(0, h), n), i.enqueue(r), c = c.subarray(h)), r = new Uint8Array(512), n = 0), r.set(c, n), n += c.length;
    }
  }
  function s(i, c) {
    return a(i, c), !0;
  }
  function d(i) {
    r && 0 < n && (i.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var g = new TextEncoder();
  function p(i) {
    return g.encode(i);
  }
  function f(i) {
    return g.encode(i);
  }
  function _(i, c) {
    typeof i.error == "function" ? i.error(c) : i.close();
  }
  var x = Object.prototype.hasOwnProperty, D = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, B = {}, C = {};
  function S(i) {
    return x.call(C, i) ? !0 : x.call(B, i) ? !1 : D.test(i) ? C[i] = !0 : (B[i] = !0, !1);
  }
  function I(i, c, h, v, L, N, W) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = v, this.attributeNamespace = L, this.mustUseProperty = h, this.propertyName = i, this.type = c, this.sanitizeURL = N, this.removeEmptyString = W;
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    $[i] = new I(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var c = i[0];
    $[c] = new I(c, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    $[i] = new I(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    $[i] = new I(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    $[i] = new I(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    $[i] = new I(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    $[i] = new I(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    $[i] = new I(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    $[i] = new I(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var H = /[\-:]([a-z])/g;
  function Y(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var c = i.replace(
      H,
      Y
    );
    $[c] = new I(c, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var c = i.replace(H, Y);
    $[c] = new I(c, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var c = i.replace(H, Y);
    $[c] = new I(c, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    $[i] = new I(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), $.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    $[i] = new I(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var q = {
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
  Object.keys(q).forEach(function(i) {
    T.forEach(function(c) {
      c = c + i.charAt(0).toUpperCase() + i.substring(1), q[c] = q[i];
    });
  });
  var ce = /["'&<>]/;
  function _e(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var c = ce.exec(i);
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
  var Pe = /([A-Z])/g, De = /^ms-/, He = Array.isArray, ue = f("<script>"), pe = f("<\/script>"), Ne = f('<script src="'), Le = f('<script type="module" src="'), Ee = f('" async=""><\/script>'), lt = /(<\/|<)(s)(cript)/gi;
  function Fe(i, c, h, v) {
    return "" + c + (h === "s" ? "\\u0073" : "\\u0053") + v;
  }
  function Ae(i, c, h, v, L) {
    i = i === void 0 ? "" : i, c = c === void 0 ? ue : f('<script nonce="' + _e(c) + '">');
    var N = [];
    if (h !== void 0 && N.push(c, p(("" + h).replace(lt, Fe)), pe), v !== void 0) for (h = 0; h < v.length; h++) N.push(Ne, p(_e(v[h])), Ee);
    if (L !== void 0) for (v = 0; v < L.length; v++) N.push(Le, p(_e(L[v])), Ee);
    return { bootstrapChunks: N, startInlineScript: c, placeholderPrefix: f(i + "P:"), segmentPrefix: f(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Ue(i, c) {
    return { insertionMode: i, selectedValue: c };
  }
  function Ze(i) {
    return Ue(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function ie(i, c, h) {
    switch (c) {
      case "select":
        return Ue(1, h.value != null ? h.value : h.defaultValue);
      case "svg":
        return Ue(2, null);
      case "math":
        return Ue(3, null);
      case "foreignObject":
        return Ue(1, null);
      case "table":
        return Ue(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Ue(5, null);
      case "colgroup":
        return Ue(7, null);
      case "tr":
        return Ue(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? Ue(1, null) : i;
  }
  var z = f("<!-- -->");
  function A(i, c, h, v) {
    return c === "" ? v : (v && i.push(z), i.push(p(_e(c))), !0);
  }
  var M = /* @__PURE__ */ new Map(), F = f(' style="'), y = f(":"), re = f(";");
  function O(i, c, h) {
    if (typeof h != "object") throw Error(t(62));
    c = !0;
    for (var v in h) if (x.call(h, v)) {
      var L = h[v];
      if (L != null && typeof L != "boolean" && L !== "") {
        if (v.indexOf("--") === 0) {
          var N = p(_e(v));
          L = p(_e(("" + L).trim()));
        } else {
          N = v;
          var W = M.get(N);
          W !== void 0 || (W = f(_e(N.replace(Pe, "-$1").toLowerCase().replace(De, "-ms-"))), M.set(N, W)), N = W, L = typeof L == "number" ? L === 0 || x.call(q, v) ? p("" + L) : p(L + "px") : p(_e(("" + L).trim()));
        }
        c ? (c = !1, i.push(F, N, y, L)) : i.push(re, N, y, L);
      }
    }
    c || i.push(te);
  }
  var ne = f(" "), ee = f('="'), te = f('"'), G = f('=""');
  function oe(i, c, h, v) {
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
      if (c = $.hasOwnProperty(h) ? $[h] : null, c !== null) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (h = p(c.attributeName), c.type) {
          case 3:
            v && i.push(ne, h, G);
            break;
          case 4:
            v === !0 ? i.push(ne, h, G) : v !== !1 && i.push(ne, h, ee, p(_e(v)), te);
            break;
          case 5:
            isNaN(v) || i.push(ne, h, ee, p(_e(v)), te);
            break;
          case 6:
            !isNaN(v) && 1 <= v && i.push(ne, h, ee, p(_e(v)), te);
            break;
          default:
            c.sanitizeURL && (v = "" + v), i.push(ne, h, ee, p(_e(v)), te);
        }
      } else if (S(h)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = h.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        i.push(ne, p(h), ee, p(_e(v)), te);
      }
    }
  }
  var se = f(">"), K = f("/>");
  function he(i, c, h) {
    if (c != null) {
      if (h != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && i.push(p("" + c));
    }
  }
  function Z(i) {
    var c = "";
    return e.Children.forEach(i, function(h) {
      h != null && (c += h);
    }), c;
  }
  var le = f(' selected=""');
  function $e(i, c, h, v) {
    i.push(ge(h));
    var L = h = null, N;
    for (N in c) if (x.call(c, N)) {
      var W = c[N];
      if (W != null) switch (N) {
        case "children":
          h = W;
          break;
        case "dangerouslySetInnerHTML":
          L = W;
          break;
        default:
          oe(i, v, N, W);
      }
    }
    return i.push(se), he(i, L, h), typeof h == "string" ? (i.push(p(_e(h))), null) : h;
  }
  var me = f(`
`), st = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, qe = /* @__PURE__ */ new Map();
  function ge(i) {
    var c = qe.get(i);
    if (c === void 0) {
      if (!st.test(i)) throw Error(t(65, i));
      c = f("<" + i), qe.set(i, c);
    }
    return c;
  }
  var V = f("<!DOCTYPE html>");
  function ae(i, c, h, v, L) {
    switch (c) {
      case "select":
        i.push(ge("select"));
        var N = null, W = null;
        for (xe in h) if (x.call(h, xe)) {
          var J = h[xe];
          if (J != null) switch (xe) {
            case "children":
              N = J;
              break;
            case "dangerouslySetInnerHTML":
              W = J;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              oe(i, v, xe, J);
          }
        }
        return i.push(se), he(i, W, N), N;
      case "option":
        W = L.selectedValue, i.push(ge("option"));
        var fe = J = null, Te = null, xe = null;
        for (N in h) if (x.call(h, N)) {
          var Qe = h[N];
          if (Qe != null) switch (N) {
            case "children":
              J = Qe;
              break;
            case "selected":
              Te = Qe;
              break;
            case "dangerouslySetInnerHTML":
              xe = Qe;
              break;
            case "value":
              fe = Qe;
            default:
              oe(i, v, N, Qe);
          }
        }
        if (W != null) if (h = fe !== null ? "" + fe : Z(J), He(W)) {
          for (v = 0; v < W.length; v++)
            if ("" + W[v] === h) {
              i.push(le);
              break;
            }
        } else "" + W === h && i.push(le);
        else Te && i.push(le);
        return i.push(se), he(i, xe, J), J;
      case "textarea":
        i.push(ge("textarea")), xe = W = N = null;
        for (J in h) if (x.call(h, J) && (fe = h[J], fe != null)) switch (J) {
          case "children":
            xe = fe;
            break;
          case "value":
            N = fe;
            break;
          case "defaultValue":
            W = fe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            oe(i, v, J, fe);
        }
        if (N === null && W !== null && (N = W), i.push(se), xe != null) {
          if (N != null) throw Error(t(92));
          if (He(xe) && 1 < xe.length) throw Error(t(93));
          N = "" + xe;
        }
        return typeof N == "string" && N[0] === `
` && i.push(me), N !== null && i.push(p(_e("" + N))), null;
      case "input":
        i.push(ge("input")), fe = xe = J = N = null;
        for (W in h) if (x.call(h, W) && (Te = h[W], Te != null)) switch (W) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            fe = Te;
            break;
          case "defaultValue":
            J = Te;
            break;
          case "checked":
            xe = Te;
            break;
          case "value":
            N = Te;
            break;
          default:
            oe(i, v, W, Te);
        }
        return xe !== null ? oe(
          i,
          v,
          "checked",
          xe
        ) : fe !== null && oe(i, v, "checked", fe), N !== null ? oe(i, v, "value", N) : J !== null && oe(i, v, "value", J), i.push(K), null;
      case "menuitem":
        i.push(ge("menuitem"));
        for (var Nt in h) if (x.call(h, Nt) && (N = h[Nt], N != null)) switch (Nt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            oe(i, v, Nt, N);
        }
        return i.push(se), null;
      case "title":
        i.push(ge("title")), N = null;
        for (Qe in h) if (x.call(h, Qe) && (W = h[Qe], W != null)) switch (Qe) {
          case "children":
            N = W;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            oe(i, v, Qe, W);
        }
        return i.push(se), N;
      case "listing":
      case "pre":
        i.push(ge(c)), W = N = null;
        for (fe in h) if (x.call(h, fe) && (J = h[fe], J != null)) switch (fe) {
          case "children":
            N = J;
            break;
          case "dangerouslySetInnerHTML":
            W = J;
            break;
          default:
            oe(i, v, fe, J);
        }
        if (i.push(se), W != null) {
          if (N != null) throw Error(t(60));
          if (typeof W != "object" || !("__html" in W)) throw Error(t(61));
          h = W.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? i.push(me, p(h)) : i.push(p("" + h)));
        }
        return typeof N == "string" && N[0] === `
` && i.push(me), N;
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
        i.push(ge(c));
        for (var Vt in h) if (x.call(h, Vt) && (N = h[Vt], N != null)) switch (Vt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            oe(i, v, Vt, N);
        }
        return i.push(K), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return $e(i, h, c, v);
      case "html":
        return L.insertionMode === 0 && i.push(V), $e(i, h, c, v);
      default:
        if (c.indexOf("-") === -1 && typeof h.is != "string") return $e(i, h, c, v);
        i.push(ge(c)), W = N = null;
        for (Te in h) if (x.call(h, Te) && (J = h[Te], J != null)) switch (Te) {
          case "children":
            N = J;
            break;
          case "dangerouslySetInnerHTML":
            W = J;
            break;
          case "style":
            O(i, v, J);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            S(Te) && typeof J != "function" && typeof J != "symbol" && i.push(ne, p(Te), ee, p(_e(J)), te);
        }
        return i.push(se), he(i, W, N), N;
    }
  }
  var Ge = f("</"), ut = f(">"), Me = f('<template id="'), Jt = f('"></template>'), Lt = f("<!--$-->"), tr = f('<!--$?--><template id="'), yt = f('"></template>'), pt = f("<!--$!-->"), nt = f("<!--/$-->"), dt = f("<template"), Ft = f('"'), Mt = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var Cr = f("></template>");
  function it(i, c, h) {
    if (a(i, tr), h === null) throw Error(t(395));
    return a(i, h), s(i, yt);
  }
  var bt = f('<div hidden id="'), Qt = f('">'), Ce = f("</div>"), jt = f('<svg aria-hidden="true" style="display:none" id="'), Zt = f('">'), ve = f("</svg>"), Ke = f('<math aria-hidden="true" style="display:none" id="'), Kt = f('">'), vt = f("</math>"), Pt = f('<table hidden id="'), zt = f('">'), $t = f("</table>"), yr = f('<table hidden><tbody id="'), at = f('">'), Tt = f("</tbody></table>"), rr = f('<table hidden><tr id="'), nr = f('">'), Et = f("</tr></table>"), er = f('<table hidden><colgroup id="'), Ye = f('">'), Ut = f("</colgroup></table>");
  function ar(i, c, h, v) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return a(i, bt), a(i, c.segmentPrefix), a(i, p(v.toString(16))), s(i, Qt);
      case 2:
        return a(i, jt), a(i, c.segmentPrefix), a(i, p(v.toString(16))), s(i, Zt);
      case 3:
        return a(i, Ke), a(i, c.segmentPrefix), a(i, p(v.toString(16))), s(i, Kt);
      case 4:
        return a(i, Pt), a(i, c.segmentPrefix), a(i, p(v.toString(16))), s(i, zt);
      case 5:
        return a(i, yr), a(i, c.segmentPrefix), a(i, p(v.toString(16))), s(i, at);
      case 6:
        return a(i, rr), a(i, c.segmentPrefix), a(i, p(v.toString(16))), s(i, nr);
      case 7:
        return a(
          i,
          er
        ), a(i, c.segmentPrefix), a(i, p(v.toString(16))), s(i, Ye);
      default:
        throw Error(t(397));
    }
  }
  function At(i, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(i, Ce);
      case 2:
        return s(i, ve);
      case 3:
        return s(i, vt);
      case 4:
        return s(i, $t);
      case 5:
        return s(i, Tt);
      case 6:
        return s(i, Et);
      case 7:
        return s(i, Ut);
      default:
        throw Error(t(397));
    }
  }
  var or = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), ir = f('$RS("'), b = f('","'), w = f('")<\/script>'), E = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), X = f('$RC("'), ye = f('","'), ke = f('")<\/script>'), Ie = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), we = f('$RX("'), Xe = f('"'), Ve = f(")<\/script>"), et = f(","), sr = /[<\u2028\u2029]/g;
  function Bt(i) {
    return JSON.stringify(i).replace(sr, function(c) {
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
  var br = Object.assign, En = Symbol.for("react.element"), Tr = Symbol.for("react.portal"), Er = Symbol.for("react.fragment"), Yr = Symbol.for("react.strict_mode"), Xr = Symbol.for("react.profiler"), Jr = Symbol.for("react.provider"), Mr = Symbol.for("react.context"), An = Symbol.for("react.forward_ref"), On = Symbol.for("react.suspense"), Qr = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), m = Symbol.for("react.scope"), k = Symbol.for("react.debug_trace_mode"), P = Symbol.for("react.legacy_hidden"), R = Symbol.for("react.default_value"), U = Symbol.iterator;
  function Q(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case Er:
        return "Fragment";
      case Tr:
        return "Portal";
      case Xr:
        return "Profiler";
      case Yr:
        return "StrictMode";
      case On:
        return "Suspense";
      case Qr:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case Mr:
        return (i.displayName || "Context") + ".Consumer";
      case Jr:
        return (i._context.displayName || "Context") + ".Provider";
      case An:
        var c = i.render;
        return i = i.displayName, i || (i = c.displayName || c.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case o:
        return c = i.displayName || null, c !== null ? c : Q(i.type) || "Memo";
      case u:
        c = i._payload, i = i._init;
        try {
          return Q(i(c));
        } catch {
        }
    }
    return null;
  }
  var de = {};
  function be(i, c) {
    if (i = i.contextTypes, !i) return de;
    var h = {}, v;
    for (v in i) h[v] = c[v];
    return h;
  }
  var Se = null;
  function tt(i, c) {
    if (i !== c) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var h = c.parent;
      if (i === null) {
        if (h !== null) throw Error(t(401));
      } else {
        if (h === null) throw Error(t(401));
        tt(i, h);
      }
      c.context._currentValue = c.value;
    }
  }
  function Wt(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && Wt(i);
  }
  function Ht(i) {
    var c = i.parent;
    c !== null && Ht(c), i.context._currentValue = i.value;
  }
  function Ot(i, c) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === c.depth ? tt(i, c) : Ot(i, c);
  }
  function Ar(i, c) {
    var h = c.parent;
    if (h === null) throw Error(t(402));
    i.depth === h.depth ? tt(i, h) : Ar(i, h), c.context._currentValue = c.value;
  }
  function lr(i) {
    var c = Se;
    c !== i && (c === null ? Ht(i) : i === null ? Wt(c) : c.depth === i.depth ? tt(c, i) : c.depth > i.depth ? Ot(c, i) : Ar(c, i), Se = i);
  }
  var Zr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, c) {
    i = i._reactInternals, i.queue !== null && i.queue.push(c);
  }, enqueueReplaceState: function(i, c) {
    i = i._reactInternals, i.replace = !0, i.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Or(i, c, h, v) {
    var L = i.state !== void 0 ? i.state : null;
    i.updater = Zr, i.props = h, i.state = L;
    var N = { queue: [], replace: !1 };
    i._reactInternals = N;
    var W = c.contextType;
    if (i.context = typeof W == "object" && W !== null ? W._currentValue : v, W = c.getDerivedStateFromProps, typeof W == "function" && (W = W(h, L), L = W == null ? L : br({}, L, W), i.state = L), typeof c.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && Zr.enqueueReplaceState(i, i.state, null), N.queue !== null && 0 < N.queue.length) if (c = N.queue, W = N.replace, N.queue = null, N.replace = !1, W && c.length === 1) i.state = c[0];
    else {
      for (N = W ? c[0] : i.state, L = !0, W = W ? 1 : 0; W < c.length; W++) {
        var J = c[W];
        J = typeof J == "function" ? J.call(i, N, h, v) : J, J != null && (L ? (L = !1, N = br({}, N, J)) : br(N, J));
      }
      i.state = N;
    }
    else N.queue = null;
  }
  var Rn = { id: 1, overflow: "" };
  function vr(i, c, h) {
    var v = i.id;
    i = i.overflow;
    var L = 32 - Nn(v) - 1;
    v &= ~(1 << L), h += 1;
    var N = 32 - Nn(c) + L;
    if (30 < N) {
      var W = L - L % 5;
      return N = (v & (1 << W) - 1).toString(32), v >>= W, L -= W, { id: 1 << 32 - Nn(c) + L | h << L | v, overflow: N + i };
    }
    return { id: 1 << N | h << L | v, overflow: i };
  }
  var Nn = Math.clz32 ? Math.clz32 : Ol, El = Math.log, Al = Math.LN2;
  function Ol(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (El(i) / Al | 0) | 0;
  }
  function Rl(i, c) {
    return i === c && (i !== 0 || 1 / i === 1 / c) || i !== i && c !== c;
  }
  var Nl = typeof Object.is == "function" ? Object.is : Rl, cr = null, va = null, Ln = null, Je = null, Kr = !1, Pn = !1, en = 0, wr = null, In = 0;
  function Rr() {
    if (cr === null) throw Error(t(321));
    return cr;
  }
  function Ro() {
    if (0 < In) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function wa() {
    return Je === null ? Ln === null ? (Kr = !1, Ln = Je = Ro()) : (Kr = !0, Je = Ln) : Je.next === null ? (Kr = !1, Je = Je.next = Ro()) : (Kr = !0, Je = Je.next), Je;
  }
  function ka() {
    va = cr = null, Pn = !1, Ln = null, In = 0, Je = wr = null;
  }
  function No(i, c) {
    return typeof c == "function" ? c(i) : c;
  }
  function Lo(i, c, h) {
    if (cr = Rr(), Je = wa(), Kr) {
      var v = Je.queue;
      if (c = v.dispatch, wr !== null && (h = wr.get(v), h !== void 0)) {
        wr.delete(v), v = Je.memoizedState;
        do
          v = i(v, h.action), h = h.next;
        while (h !== null);
        return Je.memoizedState = v, [v, c];
      }
      return [Je.memoizedState, c];
    }
    return i = i === No ? typeof c == "function" ? c() : c : h !== void 0 ? h(c) : c, Je.memoizedState = i, i = Je.queue = { last: null, dispatch: null }, i = i.dispatch = Ll.bind(null, cr, i), [Je.memoizedState, i];
  }
  function Po(i, c) {
    if (cr = Rr(), Je = wa(), c = c === void 0 ? null : c, Je !== null) {
      var h = Je.memoizedState;
      if (h !== null && c !== null) {
        var v = h[1];
        e: if (v === null) v = !1;
        else {
          for (var L = 0; L < v.length && L < c.length; L++) if (!Nl(c[L], v[L])) {
            v = !1;
            break e;
          }
          v = !0;
        }
        if (v) return h[0];
      }
    }
    return i = i(), Je.memoizedState = [i, c], i;
  }
  function Ll(i, c, h) {
    if (25 <= In) throw Error(t(301));
    if (i === cr) if (Pn = !0, i = { action: h, next: null }, wr === null && (wr = /* @__PURE__ */ new Map()), h = wr.get(c), h === void 0) wr.set(c, i);
    else {
      for (c = h; c.next !== null; ) c = c.next;
      c.next = i;
    }
  }
  function Pl() {
    throw Error(t(394));
  }
  function Dn() {
  }
  var Io = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return Rr(), i._currentValue;
  }, useMemo: Po, useReducer: Lo, useRef: function(i) {
    cr = Rr(), Je = wa();
    var c = Je.memoizedState;
    return c === null ? (i = { current: i }, Je.memoizedState = i) : c;
  }, useState: function(i) {
    return Lo(No, i);
  }, useInsertionEffect: Dn, useLayoutEffect: function() {
  }, useCallback: function(i, c) {
    return Po(function() {
      return i;
    }, c);
  }, useImperativeHandle: Dn, useEffect: Dn, useDebugValue: Dn, useDeferredValue: function(i) {
    return Rr(), i;
  }, useTransition: function() {
    return Rr(), [!1, Pl];
  }, useId: function() {
    var i = va.treeContext, c = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - Nn(i) - 1)).toString(32) + c;
    var h = Fn;
    if (h === null) throw Error(t(404));
    return c = en++, i = ":" + h.idPrefix + "R" + i, 0 < c && (i += "H" + c.toString(32)), i + ":";
  }, useMutableSource: function(i, c) {
    return Rr(), c(i._source);
  }, useSyncExternalStore: function(i, c, h) {
    if (h === void 0) throw Error(t(407));
    return h();
  } }, Fn = null, Sa = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Il(i) {
    return console.error(i), null;
  }
  function tn() {
  }
  function Dl(i, c, h, v, L, N, W, J, fe) {
    var Te = [], xe = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: v === void 0 ? 12800 : v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: Te, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? Il : L, onAllReady: N === void 0 ? tn : N, onShellReady: W === void 0 ? tn : W, onShellError: J === void 0 ? tn : J, onFatalError: fe === void 0 ? tn : fe }, h = Mn(c, 0, null, h, !1, !1), h.parentFlushed = !0, i = xa(c, i, null, h, xe, de, null, Rn), Te.push(i), c;
  }
  function xa(i, c, h, v, L, N, W, J) {
    i.allPendingTasks++, h === null ? i.pendingRootTasks++ : h.pendingTasks++;
    var fe = { node: c, ping: function() {
      var Te = i.pingedTasks;
      Te.push(fe), Te.length === 1 && Uo(i);
    }, blockedBoundary: h, blockedSegment: v, abortSet: L, legacyContext: N, context: W, treeContext: J };
    return L.add(fe), fe;
  }
  function Mn(i, c, h, v, L, N) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: h, lastPushedText: L, textEmbedded: N };
  }
  function rn(i, c) {
    if (i = i.onError(c), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function jn(i, c) {
    var h = i.onShellError;
    h(c), h = i.onFatalError, h(c), i.destination !== null ? (i.status = 2, _(i.destination, c)) : (i.status = 1, i.fatalError = c);
  }
  function Do(i, c, h, v, L) {
    for (cr = {}, va = c, en = 0, i = h(v, L); Pn; ) Pn = !1, en = 0, In += 1, Je = null, i = h(v, L);
    return ka(), i;
  }
  function Fo(i, c, h, v) {
    var L = h.render(), N = v.childContextTypes;
    if (N != null) {
      var W = c.legacyContext;
      if (typeof h.getChildContext != "function") v = W;
      else {
        h = h.getChildContext();
        for (var J in h) if (!(J in N)) throw Error(t(108, Q(v) || "Unknown", J));
        v = br({}, W, h);
      }
      c.legacyContext = v, Rt(i, c, L), c.legacyContext = W;
    } else Rt(i, c, L);
  }
  function Mo(i, c) {
    if (i && i.defaultProps) {
      c = br({}, c), i = i.defaultProps;
      for (var h in i) c[h] === void 0 && (c[h] = i[h]);
      return c;
    }
    return c;
  }
  function _a(i, c, h, v, L) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      L = be(h, c.legacyContext);
      var N = h.contextType;
      N = new h(v, typeof N == "object" && N !== null ? N._currentValue : L), Or(N, h, v, L), Fo(i, c, N, h);
    } else {
      N = be(h, c.legacyContext), L = Do(i, c, h, v, N);
      var W = en !== 0;
      if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0) Or(L, h, v, N), Fo(i, c, L, h);
      else if (W) {
        v = c.treeContext, c.treeContext = vr(v, 1, 0);
        try {
          Rt(i, c, L);
        } finally {
          c.treeContext = v;
        }
      } else Rt(i, c, L);
    }
    else if (typeof h == "string") {
      switch (L = c.blockedSegment, N = ae(L.chunks, h, v, i.responseState, L.formatContext), L.lastPushedText = !1, W = L.formatContext, L.formatContext = ie(W, h, v), Ca(i, c, N), L.formatContext = W, h) {
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
          L.chunks.push(Ge, p(h), ut);
      }
      L.lastPushedText = !1;
    } else {
      switch (h) {
        case P:
        case k:
        case Yr:
        case Xr:
        case Er:
          Rt(i, c, v.children);
          return;
        case Qr:
          Rt(i, c, v.children);
          return;
        case m:
          throw Error(t(343));
        case On:
          e: {
            h = c.blockedBoundary, L = c.blockedSegment, N = v.fallback, v = v.children, W = /* @__PURE__ */ new Set();
            var J = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: W, errorDigest: null }, fe = Mn(i, L.chunks.length, J, L.formatContext, !1, !1);
            L.children.push(fe), L.lastPushedText = !1;
            var Te = Mn(i, 0, null, L.formatContext, !1, !1);
            Te.parentFlushed = !0, c.blockedBoundary = J, c.blockedSegment = Te;
            try {
              if (Ca(
                i,
                c,
                v
              ), Te.lastPushedText && Te.textEmbedded && Te.chunks.push(z), Te.status = 1, zn(J, Te), J.pendingTasks === 0) break e;
            } catch (xe) {
              Te.status = 4, J.forceClientRender = !0, J.errorDigest = rn(i, xe);
            } finally {
              c.blockedBoundary = h, c.blockedSegment = L;
            }
            c = xa(i, N, h, fe, W, c.legacyContext, c.context, c.treeContext), i.pingedTasks.push(c);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case An:
          if (v = Do(i, c, h.render, v, L), en !== 0) {
            h = c.treeContext, c.treeContext = vr(h, 1, 0);
            try {
              Rt(i, c, v);
            } finally {
              c.treeContext = h;
            }
          } else Rt(i, c, v);
          return;
        case o:
          h = h.type, v = Mo(h, v), _a(i, c, h, v, L);
          return;
        case Jr:
          if (L = v.children, h = h._context, v = v.value, N = h._currentValue, h._currentValue = v, W = Se, Se = v = { parent: W, depth: W === null ? 0 : W.depth + 1, context: h, parentValue: N, value: v }, c.context = v, Rt(i, c, L), i = Se, i === null) throw Error(t(403));
          v = i.parentValue, i.context._currentValue = v === R ? i.context._defaultValue : v, i = Se = i.parent, c.context = i;
          return;
        case Mr:
          v = v.children, v = v(h._currentValue), Rt(i, c, v);
          return;
        case u:
          L = h._init, h = L(h._payload), v = Mo(h, v), _a(i, c, h, v, void 0);
          return;
      }
      throw Error(t(
        130,
        h == null ? h : typeof h,
        ""
      ));
    }
  }
  function Rt(i, c, h) {
    if (c.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case En:
          _a(i, c, h.type, h.props, h.ref);
          return;
        case Tr:
          throw Error(t(257));
        case u:
          var v = h._init;
          h = v(h._payload), Rt(i, c, h);
          return;
      }
      if (He(h)) {
        jo(i, c, h);
        return;
      }
      if (h === null || typeof h != "object" ? v = null : (v = U && h[U] || h["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(h))) {
        if (h = v.next(), !h.done) {
          var L = [];
          do
            L.push(h.value), h = v.next();
          while (!h.done);
          jo(i, c, L);
        }
        return;
      }
      throw i = Object.prototype.toString.call(h), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : i));
    }
    typeof h == "string" ? (v = c.blockedSegment, v.lastPushedText = A(c.blockedSegment.chunks, h, i.responseState, v.lastPushedText)) : typeof h == "number" && (v = c.blockedSegment, v.lastPushedText = A(c.blockedSegment.chunks, "" + h, i.responseState, v.lastPushedText));
  }
  function jo(i, c, h) {
    for (var v = h.length, L = 0; L < v; L++) {
      var N = c.treeContext;
      c.treeContext = vr(N, v, L);
      try {
        Ca(i, c, h[L]);
      } finally {
        c.treeContext = N;
      }
    }
  }
  function Ca(i, c, h) {
    var v = c.blockedSegment.formatContext, L = c.legacyContext, N = c.context;
    try {
      return Rt(i, c, h);
    } catch (fe) {
      if (ka(), typeof fe == "object" && fe !== null && typeof fe.then == "function") {
        h = fe;
        var W = c.blockedSegment, J = Mn(i, W.chunks.length, null, W.formatContext, W.lastPushedText, !0);
        W.children.push(J), W.lastPushedText = !1, i = xa(i, c.node, c.blockedBoundary, J, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, h.then(i, i), c.blockedSegment.formatContext = v, c.legacyContext = L, c.context = N, lr(N);
      } else throw c.blockedSegment.formatContext = v, c.legacyContext = L, c.context = N, lr(N), fe;
    }
  }
  function Fl(i) {
    var c = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, $o(this, c, i);
  }
  function zo(i, c, h) {
    var v = i.blockedBoundary;
    i.blockedSegment.status = 3, v === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, i = h === void 0 ? Error(t(432)) : h, v.errorDigest = c.onError(i), v.parentFlushed && c.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(L) {
      return zo(L, c, h);
    }), v.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (v = c.onAllReady, v()));
  }
  function zn(i, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var h = c.children[0];
      h.id = c.id, h.parentFlushed = !0, h.status === 1 && zn(i, h);
    } else i.completedSegments.push(c);
  }
  function $o(i, c, h) {
    if (c === null) {
      if (h.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = h;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = tn, c = i.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && zn(c, h), c.parentFlushed && i.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(Fl, i), c.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (zn(c, h), c.completedSegments.length === 1 && c.parentFlushed && i.partialBoundaries.push(c)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Uo(i) {
    if (i.status !== 2) {
      var c = Se, h = Sa.current;
      Sa.current = Io;
      var v = Fn;
      Fn = i.responseState;
      try {
        var L = i.pingedTasks, N;
        for (N = 0; N < L.length; N++) {
          var W = L[N], J = i, fe = W.blockedSegment;
          if (fe.status === 0) {
            lr(W.context);
            try {
              Rt(J, W, W.node), fe.lastPushedText && fe.textEmbedded && fe.chunks.push(z), W.abortSet.delete(W), fe.status = 1, $o(J, W.blockedBoundary, fe);
            } catch (qt) {
              if (ka(), typeof qt == "object" && qt !== null && typeof qt.then == "function") {
                var Te = W.ping;
                qt.then(Te, Te);
              } else {
                W.abortSet.delete(W), fe.status = 4;
                var xe = W.blockedBoundary, Qe = qt, Nt = rn(J, Qe);
                if (xe === null ? jn(J, Qe) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = Nt, xe.parentFlushed && J.clientRenderedBoundaries.push(xe))), J.allPendingTasks--, J.allPendingTasks === 0) {
                  var Vt = J.onAllReady;
                  Vt();
                }
              }
            } finally {
            }
          }
        }
        L.splice(0, N), i.destination !== null && Ta(i, i.destination);
      } catch (qt) {
        rn(i, qt), jn(i, qt);
      } finally {
        Fn = v, Sa.current = h, h === Io && lr(c);
      }
    }
  }
  function $n(i, c, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var v = h.id = i.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, i = i.responseState, a(c, Me), a(c, i.placeholderPrefix), i = p(v.toString(16)), a(c, i), s(c, Jt);
      case 1:
        h.status = 2;
        var L = !0;
        v = h.chunks;
        var N = 0;
        h = h.children;
        for (var W = 0; W < h.length; W++) {
          for (L = h[W]; N < L.index; N++) a(c, v[N]);
          L = Un(i, c, L);
        }
        for (; N < v.length - 1; N++) a(c, v[N]);
        return N < v.length && (L = s(c, v[N])), L;
      default:
        throw Error(t(390));
    }
  }
  function Un(i, c, h) {
    var v = h.boundary;
    if (v === null) return $n(i, c, h);
    if (v.parentFlushed = !0, v.forceClientRender) v = v.errorDigest, s(c, pt), a(c, dt), v && (a(c, Mt), a(c, p(_e(v))), a(c, Ft)), s(c, Cr), $n(i, c, h);
    else if (0 < v.pendingTasks) {
      v.rootSegmentID = i.nextSegmentId++, 0 < v.completedSegments.length && i.partialBoundaries.push(v);
      var L = i.responseState, N = L.nextSuspenseID++;
      L = f(L.boundaryPrefix + N.toString(16)), v = v.id = L, it(c, i.responseState, v), $n(i, c, h);
    } else if (v.byteSize > i.progressiveChunkSize) v.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(v), it(c, i.responseState, v.id), $n(i, c, h);
    else {
      if (s(c, Lt), h = v.completedSegments, h.length !== 1) throw Error(t(391));
      Un(i, c, h[0]);
    }
    return s(c, nt);
  }
  function Bo(i, c, h) {
    return ar(c, i.responseState, h.formatContext, h.id), Un(i, c, h), At(c, h.formatContext);
  }
  function Wo(i, c, h) {
    for (var v = h.completedSegments, L = 0; L < v.length; L++) Ho(i, c, h, v[L]);
    if (v.length = 0, i = i.responseState, v = h.id, h = h.rootSegmentID, a(c, i.startInlineScript), i.sentCompleteBoundaryFunction ? a(c, X) : (i.sentCompleteBoundaryFunction = !0, a(c, E)), v === null) throw Error(t(395));
    return h = p(h.toString(16)), a(c, v), a(c, ye), a(c, i.segmentPrefix), a(c, h), s(c, ke);
  }
  function Ho(i, c, h, v) {
    if (v.status === 2) return !0;
    var L = v.id;
    if (L === -1) {
      if ((v.id = h.rootSegmentID) === -1) throw Error(t(392));
      return Bo(i, c, v);
    }
    return Bo(i, c, v), i = i.responseState, a(c, i.startInlineScript), i.sentCompleteSegmentFunction ? a(c, ir) : (i.sentCompleteSegmentFunction = !0, a(c, or)), a(c, i.segmentPrefix), L = p(L.toString(16)), a(c, L), a(c, b), a(c, i.placeholderPrefix), a(c, L), s(c, w);
  }
  function Ta(i, c) {
    r = new Uint8Array(512), n = 0;
    try {
      var h = i.completedRootSegment;
      if (h !== null && i.pendingRootTasks === 0) {
        Un(i, c, h), i.completedRootSegment = null;
        var v = i.responseState.bootstrapChunks;
        for (h = 0; h < v.length - 1; h++) a(c, v[h]);
        h < v.length && s(c, v[h]);
      }
      var L = i.clientRenderedBoundaries, N;
      for (N = 0; N < L.length; N++) {
        var W = L[N];
        v = c;
        var J = i.responseState, fe = W.id, Te = W.errorDigest, xe = W.errorMessage, Qe = W.errorComponentStack;
        if (a(v, J.startInlineScript), J.sentClientRenderFunction ? a(v, we) : (J.sentClientRenderFunction = !0, a(
          v,
          Ie
        )), fe === null) throw Error(t(395));
        a(v, fe), a(v, Xe), (Te || xe || Qe) && (a(v, et), a(v, p(Bt(Te || "")))), (xe || Qe) && (a(v, et), a(v, p(Bt(xe || "")))), Qe && (a(v, et), a(v, p(Bt(Qe)))), s(v, Ve);
      }
      L.splice(0, N);
      var Nt = i.completedBoundaries;
      for (N = 0; N < Nt.length; N++) Wo(i, c, Nt[N]);
      Nt.splice(0, N), d(c), r = new Uint8Array(512), n = 0;
      var Vt = i.partialBoundaries;
      for (N = 0; N < Vt.length; N++) {
        var qt = Vt[N];
        e: {
          L = i, W = c;
          var Bn = qt.completedSegments;
          for (J = 0; J < Bn.length; J++) if (!Ho(
            L,
            W,
            qt,
            Bn[J]
          )) {
            J++, Bn.splice(0, J);
            var qo = !1;
            break e;
          }
          Bn.splice(0, J), qo = !0;
        }
        if (!qo) {
          i.destination = null, N++, Vt.splice(0, N);
          return;
        }
      }
      Vt.splice(0, N);
      var Ea = i.completedBoundaries;
      for (N = 0; N < Ea.length; N++) Wo(i, c, Ea[N]);
      Ea.splice(0, N);
    } finally {
      d(c), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && c.close();
    }
  }
  function Vo(i, c) {
    try {
      var h = i.abortableTasks;
      h.forEach(function(v) {
        return zo(v, i, c);
      }), h.clear(), i.destination !== null && Ta(i, i.destination);
    } catch (v) {
      rn(i, v), jn(i, v);
    }
  }
  return Vn.renderToReadableStream = function(i, c) {
    return new Promise(function(h, v) {
      var L, N, W = new Promise(function(xe, Qe) {
        N = xe, L = Qe;
      }), J = Dl(i, Ae(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), Ze(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, N, function() {
        var xe = new ReadableStream({ type: "bytes", pull: function(Qe) {
          if (J.status === 1) J.status = 2, _(Qe, J.fatalError);
          else if (J.status !== 2 && J.destination === null) {
            J.destination = Qe;
            try {
              Ta(J, Qe);
            } catch (Nt) {
              rn(J, Nt), jn(J, Nt);
            }
          }
        }, cancel: function() {
          Vo(J);
        } }, { highWaterMark: 0 });
        xe.allReady = W, h(xe);
      }, function(xe) {
        W.catch(function() {
        }), v(xe);
      }, L);
      if (c && c.signal) {
        var fe = c.signal, Te = function() {
          Vo(J, fe.reason), fe.removeEventListener("abort", Te);
        };
        fe.addEventListener("abort", Te);
      }
      Uo(J);
    });
  }, Vn.version = "18.3.1", Vn;
}
var Gr, bs;
Gr = wc(), bs = kc();
Gr.version;
Gr.renderToString;
Gr.renderToStaticMarkup;
Gr.renderToNodeStream;
Gr.renderToStaticNodeStream;
bs.renderToReadableStream;
const Sc = "staticMarkup";
function vs() {
  const e = Ul().indexOf(Sc) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const mr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = vs(), { onClick: a, ...s } = r.props;
  if (n)
    return ct.cloneElement(r, {
      ...s,
      onClick: (p) => (yc(e), a ? a(p) : !0)
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
  return ct.cloneElement(r, {
    ...s,
    onClick: a,
    ...g
  });
}, xc = ho(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: n,
    onClick: a,
    gaData: s
  }, d) => {
    var g, p, f, _, x, D;
    const B = e === n, C = B ? "open" : "close";
    return /* @__PURE__ */ j.jsxs(
      "div",
      {
        ref: d,
        className: pr("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (g = r.content) == null ? void 0 : g.icon
        }),
        children: [
          /* @__PURE__ */ j.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ j.jsx("h4", { children: /* @__PURE__ */ j.jsx(
            mr,
            {
              gaData: {
                ...s,
                action: C,
                text: r.content.header
              },
              children: /* @__PURE__ */ j.jsxs(
                "button",
                {
                  "data-testid": "accordion-opener",
                  className: pr({ collapsed: !B }),
                  "data-bs-toggle": "collapse",
                  href: `#card-body-${e}`,
                  type: "button",
                  "aria-expanded": B,
                  "aria-controls": `card-body-${e}`,
                  onClick: (S) => a(S, e),
                  children: [
                    (p = r.content) != null && p.icon ? /* @__PURE__ */ j.jsxs("span", { className: "accordion-icon", children: [
                      /* @__PURE__ */ j.jsx(
                        "i",
                        {
                          className: `${(f = r.content.icon) == null ? void 0 : f[0]} fa-${(_ = r.content.icon) == null ? void 0 : _[1]} me-2`
                        }
                      ),
                      r.content.header
                    ] }) : (x = r.content) == null ? void 0 : x.header,
                    /* @__PURE__ */ j.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              )
            }
          ) }) }),
          ((D = r.content) == null ? void 0 : D.body) && /* @__PURE__ */ j.jsx(
            "div",
            {
              "data-bs-parent": `#${t}`,
              id: `card-body-${e}`,
              className: pr("collapse", { show: B }),
              children: /* @__PURE__ */ j.jsx(
                "div",
                {
                  className: "accordion-body",
                  dangerouslySetInnerHTML: Ir(
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
xc.propTypes = {
  id: l.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: ys,
  parentId: l.string,
  openCard: l.number,
  onClick: l.func,
  gaData: l.object
};
l.arrayOf(ys).isRequired, l.number;
const _c = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ws = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  block: a,
  color: s = "gray",
  disabled: d,
  element: g = "button",
  href: p,
  icon: f,
  innerRef: _,
  onClick: x,
  size: D = "default",
  classes: B,
  target: C = "_self",
  ...S
}) => {
  const I = pr("btn", {
    [`btn-${s}`]: !0,
    "btn-md": D === "small",
    "btn-sm": D === "xsmall",
    "btn-block": a,
    disabled: d
  });
  let $ = g;
  return p && g === "button" && ($ = "a"), /* @__PURE__ */ j.jsx(
    mr,
    {
      gaData: {
        ..._c,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ j.jsxs(
        $,
        {
          type: $ === "button" && x ? "button" : void 0,
          ...S,
          className: pr(B) || I,
          href: p,
          ref: _,
          onClick: x,
          "aria-label": n,
          target: $ === "a" ? C : null,
          children: [
            f && /* @__PURE__ */ j.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
ws.propTypes = {
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
  gaData: go,
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
var ks = { exports: {} }, Be = {}, li;
function Cc() {
  if (li) return Be;
  li = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), B = Symbol.for("react.client.reference");
  function C(S) {
    if (typeof S == "object" && S !== null) {
      var I = S.$$typeof;
      switch (I) {
        case e:
          switch (S = S.type, S) {
            case r:
            case a:
            case n:
            case p:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case d:
                case g:
                case x:
                case _:
                  return S;
                case s:
                  return S;
                default:
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  return Be.ContextConsumer = s, Be.ContextProvider = d, Be.Element = e, Be.ForwardRef = g, Be.Fragment = r, Be.Lazy = x, Be.Memo = _, Be.Portal = t, Be.Profiler = a, Be.StrictMode = n, Be.Suspense = p, Be.SuspenseList = f, Be.isContextConsumer = function(S) {
    return C(S) === s;
  }, Be.isContextProvider = function(S) {
    return C(S) === d;
  }, Be.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, Be.isForwardRef = function(S) {
    return C(S) === g;
  }, Be.isFragment = function(S) {
    return C(S) === r;
  }, Be.isLazy = function(S) {
    return C(S) === x;
  }, Be.isMemo = function(S) {
    return C(S) === _;
  }, Be.isPortal = function(S) {
    return C(S) === t;
  }, Be.isProfiler = function(S) {
    return C(S) === a;
  }, Be.isStrictMode = function(S) {
    return C(S) === n;
  }, Be.isSuspense = function(S) {
    return C(S) === p;
  }, Be.isSuspenseList = function(S) {
    return C(S) === f;
  }, Be.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === a || S === n || S === p || S === f || S === D || typeof S == "object" && S !== null && (S.$$typeof === x || S.$$typeof === _ || S.$$typeof === d || S.$$typeof === s || S.$$typeof === g || S.$$typeof === B || S.getModuleId !== void 0);
  }, Be.typeOf = C, Be;
}
ks.exports = Cc();
var Ss = ks.exports;
function Tc(e) {
  function t(z, A, M, F, y) {
    for (var re = 0, O = 0, ne = 0, ee = 0, te, G, oe = 0, se = 0, K, he = K = te = 0, Z = 0, le = 0, $e = 0, me = 0, st = M.length, qe = st - 1, ge, V = "", ae = "", Ge = "", ut = "", Me; Z < st; ) {
      if (G = M.charCodeAt(Z), Z === qe && O + ee + ne + re !== 0 && (O !== 0 && (G = O === 47 ? 10 : 47), ee = ne = re = 0, st++, qe++), O + ee + ne + re === 0) {
        if (Z === qe && (0 < le && (V = V.replace(D, "")), 0 < V.trim().length)) {
          switch (G) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              V += M.charAt(Z);
          }
          G = 59;
        }
        switch (G) {
          case 123:
            for (V = V.trim(), te = V.charCodeAt(0), K = 1, me = ++Z; Z < st; ) {
              switch (G = M.charCodeAt(Z)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (G = M.charCodeAt(Z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = Z + 1; he < qe; ++he)
                          switch (M.charCodeAt(he)) {
                            case 47:
                              if (G === 42 && M.charCodeAt(he - 1) === 42 && Z + 2 !== he) {
                                Z = he + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (G === 47) {
                                Z = he + 1;
                                break e;
                              }
                          }
                        Z = he;
                      }
                  }
                  break;
                case 91:
                  G++;
                case 40:
                  G++;
                case 34:
                case 39:
                  for (; Z++ < qe && M.charCodeAt(Z) !== G; )
                    ;
              }
              if (K === 0) break;
              Z++;
            }
            switch (K = M.substring(me, Z), te === 0 && (te = (V = V.replace(x, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (V = V.replace(D, "")), G = V.charCodeAt(1), G) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = A;
                    break;
                  default:
                    le = lt;
                }
                if (K = t(A, le, K, G, y + 1), me = K.length, 0 < Ae && (le = r(lt, V, $e), Me = g(3, K, le, A, Ne, pe, me, G, y, F), V = le.join(""), Me !== void 0 && (me = (K = Me.trim()).length) === 0 && (G = 0, K = "")), 0 < me) switch (G) {
                  case 115:
                    V = V.replace(ce, d);
                  case 100:
                  case 109:
                  case 45:
                    K = V + "{" + K + "}";
                    break;
                  case 107:
                    V = V.replace(H, "$1 $2"), K = V + "{" + K + "}", K = Ee === 1 || Ee === 2 && s("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = V + K, F === 112 && (K = (ae += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(A, r(A, V, $e), K, F, y + 1);
            }
            Ge += K, K = $e = le = he = te = 0, V = "", G = M.charCodeAt(++Z);
            break;
          case 125:
          case 59:
            if (V = (0 < le ? V.replace(D, "") : V).trim(), 1 < (me = V.length)) switch (he === 0 && (te = V.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (me = (V = V.replace(" ", ":")).length), 0 < Ae && (Me = g(1, V, A, z, Ne, pe, ae.length, F, y, F)) !== void 0 && (me = (V = Me.trim()).length) === 0 && (V = "\0\0"), te = V.charCodeAt(0), G = V.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (G === 105 || G === 99) {
                  ut += V + M.charAt(Z);
                  break;
                }
              default:
                V.charCodeAt(me - 1) !== 58 && (ae += a(V, te, G, V.charCodeAt(2)));
            }
            $e = le = he = te = 0, V = "", G = M.charCodeAt(++Z);
        }
      }
      switch (G) {
        case 13:
        case 10:
          O === 47 ? O = 0 : 1 + te === 0 && F !== 107 && 0 < V.length && (le = 1, V += "\0"), 0 < Ae * Ze && g(0, V, A, z, Ne, pe, ae.length, F, y, F), pe = 1, Ne++;
          break;
        case 59:
        case 125:
          if (O + ee + ne + re === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, ge = M.charAt(Z), G) {
            case 9:
            case 32:
              if (ee + re + O === 0) switch (oe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ge = "";
                  break;
                default:
                  G !== 32 && (ge = " ");
              }
              break;
            case 0:
              ge = "\\0";
              break;
            case 12:
              ge = "\\f";
              break;
            case 11:
              ge = "\\v";
              break;
            case 38:
              ee + O + re === 0 && (le = $e = 1, ge = "\f" + ge);
              break;
            case 108:
              if (ee + O + re + Le === 0 && 0 < he) switch (Z - he) {
                case 2:
                  oe === 112 && M.charCodeAt(Z - 3) === 58 && (Le = oe);
                case 8:
                  se === 111 && (Le = se);
              }
              break;
            case 58:
              ee + O + re === 0 && (he = Z);
              break;
            case 44:
              O + ne + ee + re === 0 && (le = 1, ge += "\r");
              break;
            case 34:
            case 39:
              O === 0 && (ee = ee === G ? 0 : ee === 0 ? G : ee);
              break;
            case 91:
              ee + O + ne === 0 && re++;
              break;
            case 93:
              ee + O + ne === 0 && re--;
              break;
            case 41:
              ee + O + re === 0 && ne--;
              break;
            case 40:
              if (ee + O + re === 0) {
                if (te === 0) switch (2 * oe + 3 * se) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ne++;
              }
              break;
            case 64:
              O + ne + ee + re + he + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + re + ne)) switch (O) {
                case 0:
                  switch (2 * G + 3 * M.charCodeAt(Z + 1)) {
                    case 235:
                      O = 47;
                      break;
                    case 220:
                      me = Z, O = 42;
                  }
                  break;
                case 42:
                  G === 47 && oe === 42 && me + 2 !== Z && (M.charCodeAt(me + 2) === 33 && (ae += M.substring(me, Z + 1)), ge = "", O = 0);
              }
          }
          O === 0 && (V += ge);
      }
      se = oe, oe = G, Z++;
    }
    if (me = ae.length, 0 < me) {
      if (le = A, 0 < Ae && (Me = g(2, ae, le, z, Ne, pe, me, F, y, F), Me !== void 0 && (ae = Me).length === 0)) return ut + ae + Ge;
      if (ae = le.join(",") + "{" + ae + "}", Ee * Le !== 0) {
        switch (Ee !== 2 || s(ae, 2) || (Le = 0), Le) {
          case 111:
            ae = ae.replace(q, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(Y, "::-webkit-input-$1") + ae.replace(Y, "::-moz-$1") + ae.replace(Y, ":-ms-input-$1") + ae;
        }
        Le = 0;
      }
    }
    return ut + ae + Ge;
  }
  function r(z, A, M) {
    var F = A.trim().split(I);
    A = F;
    var y = F.length, re = z.length;
    switch (re) {
      case 0:
      case 1:
        var O = 0;
        for (z = re === 0 ? "" : z[0] + " "; O < y; ++O)
          A[O] = n(z, A[O], M).trim();
        break;
      default:
        var ne = O = 0;
        for (A = []; O < y; ++O)
          for (var ee = 0; ee < re; ++ee)
            A[ne++] = n(z[ee] + " ", F[O], M).trim();
    }
    return A;
  }
  function n(z, A, M) {
    var F = A.charCodeAt(0);
    switch (33 > F && (F = (A = A.trim()).charCodeAt(0)), F) {
      case 38:
        return A.replace($, "$1" + z.trim());
      case 58:
        return z.trim() + A.replace($, "$1" + z.trim());
      default:
        if (0 < 1 * M && 0 < A.indexOf("\f")) return A.replace($, (z.charCodeAt(0) === 58 ? "" : "$1") + z.trim());
    }
    return z + A;
  }
  function a(z, A, M, F) {
    var y = z + ";", re = 2 * A + 3 * M + 4 * F;
    if (re === 944) {
      z = y.indexOf(":", 9) + 1;
      var O = y.substring(z, y.length - 1).trim();
      return O = y.substring(0, z).trim() + O + ";", Ee === 1 || Ee === 2 && s(O, 1) ? "-webkit-" + O + O : O;
    }
    if (Ee === 0 || Ee === 2 && !s(y, 1)) return y;
    switch (re) {
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
        if (0 < y.indexOf("image-set(", 11)) return y.replace(ue, "$1-webkit-$2") + y;
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
        return C.test(y) ? y.replace(B, ":-webkit-") + y.replace(B, ":-moz-") + y : y;
      case 1e3:
        switch (O = y.substring(13).trim(), A = O.indexOf("-") + 1, O.charCodeAt(0) + O.charCodeAt(A)) {
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
        switch (A = (y = z).length - 10, O = (y.charCodeAt(A) === 33 ? y.substring(0, A) : y).substring(z.indexOf(":", 7) + 1).trim(), re = O.charCodeAt(0) + (O.charCodeAt(7) | 0)) {
          case 203:
            if (111 > O.charCodeAt(8)) break;
          case 115:
            y = y.replace(O, "-webkit-" + O) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(O, "-webkit-" + (102 < re ? "inline-" : "") + "box") + ";" + y.replace(O, "-webkit-" + O) + ";" + y.replace(O, "-ms-" + O + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return O = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + O + "-ms-flex-" + O + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(Pe, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(Pe, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (He.test(z) === !0) return (O = z.substring(z.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(z.replace("stretch", "fill-available"), A, M, F).replace(":fill-available", ":stretch") : y.replace(O, "-webkit-" + O) + y.replace(O, "-moz-" + O.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, M + F === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(z, A) {
    var M = z.indexOf(A === 1 ? ":" : "{"), F = z.substring(0, A !== 3 ? M : 10);
    return M = z.substring(M + 1, z.length - 1), Ue(A !== 2 ? F : F.replace(De, "$1"), M, A);
  }
  function d(z, A) {
    var M = a(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return M !== A + ";" ? M.replace(_e, " or ($1)").substring(4) : "(" + A + ")";
  }
  function g(z, A, M, F, y, re, O, ne, ee, te) {
    for (var G = 0, oe = A, se; G < Ae; ++G)
      switch (se = Fe[G].call(_, z, oe, M, F, y, re, O, ne, ee, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          oe = se;
      }
    if (oe !== A) return oe;
  }
  function p(z) {
    switch (z) {
      case void 0:
      case null:
        Ae = Fe.length = 0;
        break;
      default:
        if (typeof z == "function") Fe[Ae++] = z;
        else if (typeof z == "object") for (var A = 0, M = z.length; A < M; ++A)
          p(z[A]);
        else Ze = !!z | 0;
    }
    return p;
  }
  function f(z) {
    return z = z.prefix, z !== void 0 && (Ue = null, z ? typeof z != "function" ? Ee = 1 : (Ee = 2, Ue = z) : Ee = 0), f;
  }
  function _(z, A) {
    var M = z;
    if (33 > M.charCodeAt(0) && (M = M.trim()), ie = M, M = [ie], 0 < Ae) {
      var F = g(-1, A, M, M, Ne, pe, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (A = F);
    }
    var y = t(lt, M, A, 0, 0);
    return 0 < Ae && (F = g(-2, y, M, M, Ne, pe, y.length, 0, 0, 0), F !== void 0 && (y = F)), ie = "", Le = 0, pe = Ne = 1, y;
  }
  var x = /^\0+/g, D = /[\0\r\f]/g, B = /: */g, C = /zoo|gra/, S = /([,: ])(transform)/g, I = /,\r+?/g, $ = /([\t\r\n ])*\f?&/g, H = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, q = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, _e = /([\s\S]*?);/g, Pe = /-self|flex-/g, De = /[^]*?(:[rp][el]a[\w-]+)[^]*/, He = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, pe = 1, Ne = 1, Le = 0, Ee = 1, lt = [], Fe = [], Ae = 0, Ue = null, Ze = 0, ie = "";
  return _.use = p, _.set = f, e !== void 0 && f(e), _;
}
var Ec = {
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
function Ac(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Oc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ci = /* @__PURE__ */ Ac(
  function(e) {
    return Oc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), xs = { exports: {} }, je = {}, ui;
function Rc() {
  if (ui) return je;
  ui = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, g = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, D = e ? Symbol.for("react.suspense_list") : 60120, B = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, H = e ? Symbol.for("react.scope") : 60119;
  function Y(T) {
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
                case g:
                case _:
                case C:
                case B:
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
  function q(T) {
    return Y(T) === f;
  }
  return je.AsyncMode = p, je.ConcurrentMode = f, je.ContextConsumer = g, je.ContextProvider = d, je.Element = t, je.ForwardRef = _, je.Fragment = n, je.Lazy = C, je.Memo = B, je.Portal = r, je.Profiler = s, je.StrictMode = a, je.Suspense = x, je.isAsyncMode = function(T) {
    return q(T) || Y(T) === p;
  }, je.isConcurrentMode = q, je.isContextConsumer = function(T) {
    return Y(T) === g;
  }, je.isContextProvider = function(T) {
    return Y(T) === d;
  }, je.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, je.isForwardRef = function(T) {
    return Y(T) === _;
  }, je.isFragment = function(T) {
    return Y(T) === n;
  }, je.isLazy = function(T) {
    return Y(T) === C;
  }, je.isMemo = function(T) {
    return Y(T) === B;
  }, je.isPortal = function(T) {
    return Y(T) === r;
  }, je.isProfiler = function(T) {
    return Y(T) === s;
  }, je.isStrictMode = function(T) {
    return Y(T) === a;
  }, je.isSuspense = function(T) {
    return Y(T) === x;
  }, je.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === n || T === f || T === s || T === a || T === x || T === D || typeof T == "object" && T !== null && (T.$$typeof === C || T.$$typeof === B || T.$$typeof === d || T.$$typeof === g || T.$$typeof === _ || T.$$typeof === I || T.$$typeof === $ || T.$$typeof === H || T.$$typeof === S);
  }, je.typeOf = Y, je;
}
xs.exports = Rc();
var Nc = xs.exports, yo = Nc, Lc = {
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
}, Pc = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ic = {
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
}, bo = {};
bo[yo.ForwardRef] = Ic;
bo[yo.Memo] = _s;
function di(e) {
  return yo.isMemo(e) ? _s : bo[e.$$typeof] || Lc;
}
var Dc = Object.defineProperty, Fc = Object.getOwnPropertyNames, fi = Object.getOwnPropertySymbols, Mc = Object.getOwnPropertyDescriptor, jc = Object.getPrototypeOf, pi = Object.prototype;
function Cs(e, t, r) {
  if (typeof t != "string") {
    if (pi) {
      var n = jc(t);
      n && n !== pi && Cs(e, n, r);
    }
    var a = Fc(t);
    fi && (a = a.concat(fi(t)));
    for (var s = di(e), d = di(t), g = 0; g < a.length; ++g) {
      var p = a[g];
      if (!Pc[p] && !(r && r[p]) && !(d && d[p]) && !(s && s[p])) {
        var f = Mc(t, p);
        try {
          Dc(e, p, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var zc = Cs;
const $c = /* @__PURE__ */ mo(zc);
var ht = { env: { NODE_ENV: "production" } };
function dr() {
  return (dr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var hi = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Xa = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ss.typeOf(e);
}, ia = Object.freeze([]), kr = Object.freeze({});
function vn(e) {
  return typeof e == "function";
}
function mi(e) {
  return e.displayName || e.name || "Component";
}
function vo(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ur = typeof ht < "u" && ht.env !== void 0 && (ht.env.REACT_APP_SC_ATTR || ht.env.SC_ATTR) || "data-styled", wo = typeof window < "u" && "HTMLElement" in window, Uc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ht < "u" && ht.env !== void 0 && (ht.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ht.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ht.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ht.env.REACT_APP_SC_DISABLE_SPEEDY : ht.env.SC_DISABLE_SPEEDY !== void 0 && ht.env.SC_DISABLE_SPEEDY !== "" ? ht.env.SC_DISABLE_SPEEDY !== "false" && ht.env.SC_DISABLE_SPEEDY : ht.env.NODE_ENV !== "production"));
function _n(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Bc = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, d = s; r >= d; ) (d <<= 1) < 0 && _n(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(a), this.length = d;
      for (var g = s; g < d; g++) this.groupSizes[g] = 0;
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
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), d = s + a, g = s; g < d; g++) n += this.tag.getRule(g) + `/*!sc*/
`;
    return n;
  }, e;
}(), ta = /* @__PURE__ */ new Map(), sa = /* @__PURE__ */ new Map(), gn = 1, qn = function(e) {
  if (ta.has(e)) return ta.get(e);
  for (; sa.has(gn); ) gn++;
  var t = gn++;
  return ta.set(e, t), sa.set(t, e), t;
}, Wc = function(e) {
  return sa.get(e);
}, Hc = function(e, t) {
  t >= gn && (gn = t + 1), ta.set(e, t), sa.set(t, e);
}, Vc = "style[" + Ur + '][data-styled-version="5.3.11"]', qc = new RegExp("^" + Ur + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Gc = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, d = a.length; s < d; s++) (n = a[s]) && e.registerName(t, n);
}, Yc = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var d = r[a].trim();
    if (d) {
      var g = d.match(qc);
      if (g) {
        var p = 0 | parseInt(g[1], 10), f = g[2];
        p !== 0 && (Hc(f, p), Gc(e, f, g[3]), e.getTag().insertRules(p, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, Xc = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ts = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(g) {
    for (var p = g.childNodes, f = p.length; f >= 0; f--) {
      var _ = p[f];
      if (_ && _.nodeType === 1 && _.hasAttribute(Ur)) return _;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Ur, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Xc();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, Jc = function() {
  function e(r) {
    var n = this.element = Ts(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, d = 0, g = s.length; d < g; d++) {
        var p = s[d];
        if (p.ownerNode === a) return p;
      }
      _n(17);
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
    var n = this.element = Ts(r);
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
}(), Zc = function() {
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
}(), gi = wo, Kc = { isServer: !wo, useCSSOMInjection: !Uc }, Es = function() {
  function e(r, n, a) {
    r === void 0 && (r = kr), n === void 0 && (n = {}), this.options = dr({}, Kc, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && wo && gi && (gi = !1, function(s) {
      for (var d = document.querySelectorAll(Vc), g = 0, p = d.length; g < p; g++) {
        var f = d[g];
        f && f.getAttribute(Ur) !== "active" && (Yc(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return qn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(dr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new Zc(d) : s ? new Jc(d) : new Qc(d), new Bc(r)));
    var r, n, a, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (qn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(qn(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(qn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", d = 0; d < a; d++) {
        var g = Wc(d);
        if (g !== void 0) {
          var p = r.names.get(g), f = n.getGroup(d);
          if (p && f && p.size) {
            var _ = Ur + ".g" + d + '[id="' + g + '"]', x = "";
            p !== void 0 && p.forEach(function(D) {
              D.length > 0 && (x += D + ",");
            }), s += "" + f + _ + '{content:"' + x + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), eu = /(a)(d)/gi, yi = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ja(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = yi(t % 52) + r;
  return (yi(t % 52) + r).replace(eu, "$1-$2");
}
var zr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, As = function(e) {
  return zr(5381, e);
};
function tu(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (vn(r) && !vo(r)) return !1;
  }
  return !0;
}
var ru = As("5.3.11"), nu = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && tu(t), this.componentId = r, this.baseHash = zr(ru, r), this.baseStyle = n, Es.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Br(this.rules, t, r, n).join(""), g = Ja(zr(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(a, g)) {
        var p = n(d, "." + g, void 0, a);
        r.insertRules(a, g, p);
      }
      s.push(g), this.staticRulesId = g;
    }
    else {
      for (var f = this.rules.length, _ = zr(this.baseHash, n.hash), x = "", D = 0; D < f; D++) {
        var B = this.rules[D];
        if (typeof B == "string") x += B;
        else if (B) {
          var C = Br(B, t, r, n), S = Array.isArray(C) ? C.join("") : C;
          _ = zr(_, S + D), x += S;
        }
      }
      if (x) {
        var I = Ja(_ >>> 0);
        if (!r.hasNameForId(a, I)) {
          var $ = n(x, "." + I, void 0, a);
          r.insertRules(a, I, $);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), au = /^\s*\/\/.*$/gm, ou = [":", "[", ".", "#"];
function iu(e) {
  var t, r, n, a, s = kr, d = s.options, g = d === void 0 ? kr : d, p = s.plugins, f = p === void 0 ? ia : p, _ = new Tc(g), x = [], D = /* @__PURE__ */ function(S) {
    function I($) {
      if ($) try {
        S($ + "}");
      } catch {
      }
    }
    return function($, H, Y, q, T, ce, _e, Pe, De, He) {
      switch ($) {
        case 1:
          if (De === 0 && H.charCodeAt(0) === 64) return S(H + ";"), "";
          break;
        case 2:
          if (Pe === 0) return H + "/*|*/";
          break;
        case 3:
          switch (Pe) {
            case 102:
            case 112:
              return S(Y[0] + H), "";
            default:
              return H + (He === 0 ? "/*|*/" : "");
          }
        case -2:
          H.split("/*|*/}").forEach(I);
      }
    };
  }(function(S) {
    x.push(S);
  }), B = function(S, I, $) {
    return I === 0 && ou.indexOf($[r.length]) !== -1 || $.match(a) ? S : "." + t;
  };
  function C(S, I, $, H) {
    H === void 0 && (H = "&");
    var Y = S.replace(au, ""), q = I && $ ? $ + " " + I + " { " + Y + " }" : Y;
    return t = H, r = I, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), _($ || !I ? "" : I, q);
  }
  return _.use([].concat(f, [function(S, I, $) {
    S === 2 && $.length && $[0].lastIndexOf(r) > 0 && ($[0] = $[0].replace(n, B));
  }, D, function(S) {
    if (S === -2) {
      var I = x;
      return x = [], I;
    }
  }])), C.hash = f.length ? f.reduce(function(S, I) {
    return I.name || _n(15), zr(S, I.name);
  }, 5381).toString() : "", C;
}
var Os = ct.createContext();
Os.Consumer;
var Rs = ct.createContext(), su = (Rs.Consumer, new Es()), Qa = iu();
function lu() {
  return gr(Os) || su;
}
function cu() {
  return gr(Rs) || Qa;
}
var uu = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = Qa);
      var d = n.name + s.hash;
      a.hasNameForId(n.id, d) || a.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return _n(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Qa), this.name + t.hash;
  }, e;
}(), du = /([A-Z])/, fu = /([A-Z])/g, pu = /^ms-/, hu = function(e) {
  return "-" + e.toLowerCase();
};
function bi(e) {
  return du.test(e) ? e.replace(fu, hu).replace(pu, "-ms-") : e;
}
var vi = function(e) {
  return e == null || e === !1 || e === "";
};
function Br(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, g = e.length; d < g; d += 1) (a = Br(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (vi(e)) return "";
  if (vo(e)) return "." + e.styledComponentId;
  if (vn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var p = e(t);
    return Br(p, t, r, n);
  }
  var f;
  return e instanceof uu ? r ? (e.inject(r, n), e.getName(n)) : e : Xa(e) ? function _(x, D) {
    var B, C, S = [];
    for (var I in x) x.hasOwnProperty(I) && !vi(x[I]) && (Array.isArray(x[I]) && x[I].isCss || vn(x[I]) ? S.push(bi(I) + ":", x[I], ";") : Xa(x[I]) ? S.push.apply(S, _(x[I], I)) : S.push(bi(I) + ": " + (B = I, (C = x[I]) == null || typeof C == "boolean" || C === "" ? "" : typeof C != "number" || C === 0 || B in Ec || B.startsWith("--") ? String(C).trim() : C + "px") + ";"));
    return D ? [D + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var wi = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function mu(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return vn(e) || Xa(e) ? wi(Br(hi(ia, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : wi(Br(hi(e, r)));
}
var gu = function(e, t, r) {
  return r === void 0 && (r = kr), e.theme !== r.theme && e.theme || t || r.theme;
}, yu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, bu = /(^-|-$)/g;
function Fa(e) {
  return e.replace(yu, "-").replace(bu, "");
}
var vu = function(e) {
  return Ja(As(e) >>> 0);
};
function Gn(e) {
  return typeof e == "string" && ht.env.NODE_ENV === "production";
}
var Za = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, wu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ku(e, t, r) {
  var n = e[r];
  Za(t) && Za(n) ? Ns(n, t) : e[r] = t;
}
function Ns(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (Za(d)) for (var g in d) wu(g) && ku(e, d[g], g);
  }
  return e;
}
var Ls = ct.createContext();
Ls.Consumer;
var Ma = {};
function Ps(e, t, r) {
  var n = vo(e), a = !Gn(e), s = t.attrs, d = s === void 0 ? ia : s, g = t.componentId, p = g === void 0 ? function(H, Y) {
    var q = typeof H != "string" ? "sc" : Fa(H);
    Ma[q] = (Ma[q] || 0) + 1;
    var T = q + "-" + vu("5.3.11" + q + Ma[q]);
    return Y ? Y + "-" + T : T;
  }(t.displayName, t.parentComponentId) : g, f = t.displayName, _ = f === void 0 ? function(H) {
    return Gn(H) ? "styled." + H : "Styled(" + mi(H) + ")";
  }(e) : f, x = t.displayName && t.componentId ? Fa(t.displayName) + "-" + t.componentId : t.componentId || p, D = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, B = t.shouldForwardProp;
  n && e.shouldForwardProp && (B = t.shouldForwardProp ? function(H, Y, q) {
    return e.shouldForwardProp(H, Y, q) && t.shouldForwardProp(H, Y, q);
  } : e.shouldForwardProp);
  var C, S = new nu(r, x, n ? e.componentStyle : void 0), I = S.isStatic && d.length === 0, $ = function(H, Y) {
    return function(q, T, ce, _e) {
      var Pe = q.attrs, De = q.componentStyle, He = q.defaultProps, ue = q.foldedComponentIds, pe = q.shouldForwardProp, Ne = q.styledComponentId, Le = q.target, Ee = function(F, y, re) {
        F === void 0 && (F = kr);
        var O = dr({}, y, { theme: F }), ne = {};
        return re.forEach(function(ee) {
          var te, G, oe, se = ee;
          for (te in vn(se) && (se = se(O)), se) O[te] = ne[te] = te === "className" ? (G = ne[te], oe = se[te], G && oe ? G + " " + oe : G || oe) : se[te];
        }), [O, ne];
      }(gu(T, gr(Ls), He) || kr, T, Pe), lt = Ee[0], Fe = Ee[1], Ae = function(F, y, re, O) {
        var ne = lu(), ee = cu(), te = y ? F.generateAndInjectStyles(kr, ne, ee) : F.generateAndInjectStyles(re, ne, ee);
        return te;
      }(De, _e, lt), Ue = ce, Ze = Fe.$as || T.$as || Fe.as || T.as || Le, ie = Gn(Ze), z = Fe !== T ? dr({}, T, {}, Fe) : T, A = {};
      for (var M in z) M[0] !== "$" && M !== "as" && (M === "forwardedAs" ? A.as = z[M] : (pe ? pe(M, ci, Ze) : !ie || ci(M)) && (A[M] = z[M]));
      return T.style && Fe.style !== T.style && (A.style = dr({}, T.style, {}, Fe.style)), A.className = Array.prototype.concat(ue, Ne, Ae !== Ne ? Ae : null, T.className, Fe.className).filter(Boolean).join(" "), A.ref = Ue, as(Ze, A);
    }(C, H, Y, I);
  };
  return $.displayName = _, (C = ct.forwardRef($)).attrs = D, C.componentStyle = S, C.displayName = _, C.shouldForwardProp = B, C.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ia, C.styledComponentId = x, C.target = n ? e.target : e, C.withComponent = function(H) {
    var Y = t.componentId, q = function(ce, _e) {
      if (ce == null) return {};
      var Pe, De, He = {}, ue = Object.keys(ce);
      for (De = 0; De < ue.length; De++) Pe = ue[De], _e.indexOf(Pe) >= 0 || (He[Pe] = ce[Pe]);
      return He;
    }(t, ["componentId"]), T = Y && Y + "-" + (Gn(H) ? H : Fa(mi(H)));
    return Ps(H, dr({}, q, { attrs: D, componentId: T }), r);
  }, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(H) {
    this._foldedDefaultProps = n ? Ns({}, e.defaultProps, H) : H;
  } }), Object.defineProperty(C, "toString", { value: function() {
    return "." + C.styledComponentId;
  } }), a && $c(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), C;
}
var Xt = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = kr), !Ss.isValidElementType(n)) return _n(1, String(n));
    var s = function() {
      return r(n, a, mu.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, dr({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, dr({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(Ps, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Xt[e] = Xt(e);
});
Xt.div`
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
function pa(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Su = /* @__PURE__ */ function() {
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
}(), Dr = function() {
  return Dr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Dr.apply(this, arguments);
}, xu = function(e, t, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(d) {
      d(s);
    });
  }
  return new (r || (r = Promise))(function(s, d) {
    function g(_) {
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
      _.done ? s(_.value) : a(_.value).then(g, p);
    }
    f((n = n.apply(e, [])).next());
  });
}, _u = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, a, s, d;
  return d = { next: g(0), throw: g(1), return: g(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function g(f) {
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
}, Is = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, Cu = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, Tu = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, Eu = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function Au(e, t, r) {
  var n = t.height, a = t.width, s = Is(t, ["height", "width"]), d = Dr({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), g = window.open(e, "", Object.keys(d).map(function(f) {
    return "".concat(f, "=").concat(d[f]);
  }).join(", "));
  if (r)
    var p = window.setInterval(function() {
      try {
        (g === null || g.closed) && (window.clearInterval(p), r(g));
      } catch (f) {
        console.error(f);
      }
    }, 1e3);
  return g;
}
var Ou = (
  /** @class */
  function(e) {
    Su(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, s = a.onShareWindowClose, d = a.windowHeight, g = d === void 0 ? 400 : d, p = a.windowPosition, f = p === void 0 ? "windowCenter" : p, _ = a.windowWidth, x = _ === void 0 ? 550 : _, D = Dr({ height: g, width: x }, f === "windowCenter" ? Tu(x, g) : Eu(x, g));
        Au(n, D, s);
      }, r.handleClick = function(n) {
        return xu(r, void 0, void 0, function() {
          var a, s, d, g, p, f, _, x, D, B;
          return _u(this, function(C) {
            switch (C.label) {
              case 0:
                return a = this.props, s = a.beforeOnClick, d = a.disabled, g = a.networkLink, p = a.onClick, f = a.url, _ = a.openShareDialogOnClick, x = a.opts, D = g(f, x), d ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? (B = s(), Cu(B) ? [4, B] : [3, 2]) : [3, 2]);
              case 1:
                C.sent(), C.label = 2;
              case 2:
                return _ && this.openShareDialog(D), p && p(n, D), [
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
      var n = r.children, a = r.className, s = r.disabled, d = r.disabledStyle, g = r.forwardedRef;
      r.networkLink;
      var p = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var f = r.resetButtonStyle, _ = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var x = Is(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), D = pr("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, a), B = Dr(Dr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, _), s && d);
      return ct.createElement("button", Dr({}, x, { "aria-label": x["aria-label"] || p, className: D, onClick: this.handleClick, ref: g, style: B }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(Ml)
), la = function() {
  return la = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, la.apply(this, arguments);
};
function ha(e, t, r, n) {
  function a(s, d) {
    var g = r(s), p = la({}, s), f = Object.keys(g);
    return f.forEach(function(_) {
      delete p[_];
    }), ct.createElement(Ou, la({}, n, p, { forwardedRef: d, networkName: e, networkLink: t, opts: r(s) }));
  }
  return a.displayName = "ShareButton-".concat(e), ho(a);
}
function Ru(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + pa({ subject: r, body: n ? n + a + e : e });
}
ha("email", Ru, function(e) {
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
var Nu = /* @__PURE__ */ function() {
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
}(), Lu = (
  /** @class */
  function(e) {
    Nu(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function yn(e, t) {
  if (!e)
    throw new Lu(t);
}
function Pu(e, t) {
  var r = t.quote, n = t.hashtag;
  return yn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + pa({
    u: e,
    quote: r,
    hashtag: n
  });
}
ha("facebook", Pu, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Iu(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return yn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + pa({ url: e, mini: "true", title: r, summary: n, source: a });
}
ha("linkedin", Iu, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Du(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, s = a === void 0 ? [] : a, d = t.related, g = d === void 0 ? [] : d;
  return yn(e, "twitter.url"), yn(Array.isArray(s), "twitter.hashtags is not an array"), yn(Array.isArray(g), "twitter.related is not an array"), "https://twitter.com/share" + pa({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: g.length > 0 ? g.join(",") : void 0
  });
}
ha("twitter", Du, function(e) {
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
function Ka(e) {
  "@babel/helpers - typeof";
  return Ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ka(e);
}
var Fu = (typeof window > "u" ? "undefined" : Ka(window)) === "object" && window.Element || function() {
};
function Mu(e, t, r) {
  if (!(e[t] instanceof Fu))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, Mu, l.shape({
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
Xt.div`
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
Xt.div`
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
const ju = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ds = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  color: a = "gray",
  disabled: s,
  element: d = "button",
  innerRef: g,
  href: p,
  onClick: f,
  ..._
}) => {
  const x = pr("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: s
  });
  let D = d;
  return p && d === "button" && (D = "a"), /* @__PURE__ */ j.jsx(
    mr,
    {
      gaData: {
        ...ju,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ j.jsx(
        D,
        {
          type: D === "button" && f ? "button" : void 0,
          ..._,
          className: x,
          href: p,
          ref: g,
          onClick: f,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
Ds.propTypes = {
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
  gaData: go,
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
const Fs = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: s,
  fetchPriority: d = "auto",
  width: g,
  height: p,
  cardLink: f,
  title: _,
  caption: x,
  captionTitle: D,
  border: B,
  dropShadow: C
}) => {
  const S = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: d,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Yl(r) },
    ...s && { "data-testid": s },
    ...g && { width: g },
    ...p && { height: p }
  }, I = pr("uds-img", {
    borderless: !B,
    "uds-img-drop-shadow": C
  }), $ = (Y) => {
    const q = Y ? `${S.className} ${Y}` : S.className;
    return f ? /* @__PURE__ */ j.jsxs("a", { href: f, children: [
      /* @__PURE__ */ j.jsx("img", { ...S, className: q }),
      /* @__PURE__ */ j.jsx("span", { className: "visually-hidden", children: _ })
    ] }) : /* @__PURE__ */ j.jsx("img", { ...S, className: q });
  }, H = () => /* @__PURE__ */ j.jsx("div", { className: I, children: /* @__PURE__ */ j.jsxs("figure", { className: "figure uds-figure", children: [
    $(),
    x && /* @__PURE__ */ j.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      D && /* @__PURE__ */ j.jsx("h3", { children: D }),
      /* @__PURE__ */ j.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ir(x)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ j.jsx(j.Fragment, { children: x ? H() : $(I) });
};
Fs.propTypes = {
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
const zu = Xt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, $u = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Uu = (e) => !e.startsWith("https://") && !e.startsWith("http://") && $u(e) ? `mailto:${e}` : e, Bu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ur = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n,
  imageAltText: a,
  title: s,
  icon: d,
  body: g,
  eventFormat: p = "stack",
  eventLocation: f,
  eventTime: _,
  buttons: x,
  linkLabel: D,
  linkUrl: B,
  tags: C,
  showBorders: S = !0,
  cardLink: I
}) => /* @__PURE__ */ j.jsx(
  Ms,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: s,
    icon: d,
    body: g,
    eventFormat: p,
    eventLocation: f,
    eventTime: _,
    buttons: x,
    linkLabel: D,
    linkUrl: B,
    tags: C,
    showBorders: S,
    cardLink: I
  }
);
ur.propTypes = {
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
const Ms = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n = "",
  imageAltText: a = "",
  title: s,
  icon: d = void 0,
  body: g = "",
  eventFormat: p = "stack",
  eventLocation: f = "",
  eventTime: _ = "",
  buttons: x = void 0,
  linkLabel: D = void 0,
  linkUrl: B = void 0,
  tags: C = void 0,
  showBorders: S = !0,
  cardLink: I
}) => {
  const $ = pr("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !S
  });
  return /* @__PURE__ */ j.jsx(j.Fragment, { children: /* @__PURE__ */ j.jsxs(zu, { className: $, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ j.jsx(
      Fs,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: I,
        title: s
      }
    ),
    !n && d && /* @__PURE__ */ j.jsx(
      "i",
      {
        className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ j.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ j.jsx(
      eo,
      {
        type: e,
        body: g,
        eventFormat: p,
        eventLocation: f,
        eventTime: _,
        title: s,
        buttons: x,
        linkLabel: D,
        linkUrl: B,
        tags: C,
        cardLink: I
      }
    ) }) : /* @__PURE__ */ j.jsx(
      eo,
      {
        type: e,
        body: g,
        eventFormat: p,
        eventLocation: f,
        eventTime: _,
        title: s,
        buttons: x,
        linkLabel: D,
        linkUrl: B,
        tags: C,
        cardLink: I
      }
    )
  ] }) });
};
Ms.propTypes = {
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
const eo = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: n = "",
  eventTime: a = "",
  title: s,
  buttons: d = void 0,
  linkLabel: g = void 0,
  linkUrl: p = void 0,
  tags: f = void 0,
  cardLink: _
}) => /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
  !!s && /* @__PURE__ */ j.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ j.jsx("h3", { className: "card-title", children: _ ? /* @__PURE__ */ j.jsx("a", { href: _, children: s }) : s }) }),
  !!t && /* @__PURE__ */ j.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ j.jsx("div", { dangerouslySetInnerHTML: Ir(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ j.jsx(
    js,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  d && /* @__PURE__ */ j.jsx("div", { className: "card-buttons", children: d.map((x) => /* @__PURE__ */ j.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ j.jsx(
        ws,
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
  p && g && /* @__PURE__ */ j.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ j.jsx(
    mr,
    {
      gaData: {
        ...Bu,
        section: s,
        text: g
      },
      children: /* @__PURE__ */ j.jsx("a", { href: Uu(p), children: g })
    }
  ) }),
  f && /* @__PURE__ */ j.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((x) => (
    // @ts-ignore
    /* @__PURE__ */ j.jsx(
      Ds,
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
eo.propTypes = {
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
const js = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ j.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ j.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ j.jsx("div", { children: /* @__PURE__ */ j.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ j.jsx("div", { dangerouslySetInnerHTML: Ir(r) })
  ] }),
  t && /* @__PURE__ */ j.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ j.jsx("div", { children: /* @__PURE__ */ j.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ j.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ir(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
  r && /* @__PURE__ */ j.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ j.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ j.jsx("div", { children: /* @__PURE__ */ j.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ j.jsx("div", { dangerouslySetInnerHTML: Ir(r) })
  ] }) }),
  t && /* @__PURE__ */ j.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ j.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ j.jsx("div", { children: /* @__PURE__ */ j.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ j.jsx("span", { children: /* @__PURE__ */ j.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ir(t)
      }
    ) })
  ] }) })
] });
js.propTypes = {
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string
};
const Wu = Xt.div`
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
`, Hu = () => /* @__PURE__ */ j.jsxs(Wu, { children: [
  /* @__PURE__ */ j.jsx("div", {}),
  /* @__PURE__ */ j.jsx("div", {}),
  /* @__PURE__ */ j.jsx("div", {}),
  /* @__PURE__ */ j.jsx("div", {})
] }), Vu = Xt.section``, ma = jl(null), zs = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: a,
  dataTransformer: s,
  dataFilter: d,
  maxItems: g
}) => {
  const [{ data: p, loading: f, error: _ }, x] = Gl(), [D, B] = jr([]), C = { ...e.dataSource, ...t };
  return xr(() => {
    x(C == null ? void 0 : C.url);
  }, [C == null ? void 0 : C.url]), xr(() => {
    const S = p == null ? void 0 : p.nodes.map(s), I = S == null ? void 0 : S.filter(
      ($) => d($, t == null ? void 0 : t.filters)
    );
    B(g ? I == null ? void 0 : I.slice(0, g) : I);
  }, [p]), // Init the context to be used on its childrens
  /* @__PURE__ */ j.jsx(ma.Provider, { value: { feeds: D }, children: /* @__PURE__ */ j.jsxs(Vu, { children: [
    n,
    _ ? /* @__PURE__ */ j.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
      f && !(D != null && D.length) && /* @__PURE__ */ j.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ j.jsx(Hu, {}) }),
      D != null && D.length ? a : !f && /* @__PURE__ */ j.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
zs.propTypes = {
  renderHeader: l.element,
  renderBody: l.element,
  maxItems: l.number,
  dataTransformer: l.func,
  dataFilter: l.func,
  noFeedText: l.string
};
const ko = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), So = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
}), $s = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
}), Us = l.shape({
  url: l.string,
  filters: l.string
}), qu = l.shape({
  header: ko,
  ctaButton: So,
  dataSource: Us,
  maxItems: l.number
}), Gu = Xt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Bs = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const n = { ...e.header, ...t }, a = { ...e.ctaButton, ...r };
  return /* @__PURE__ */ j.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ j.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ j.jsx("h2", { className: `text-${n.color}`, children: n.text }) }),
        /* @__PURE__ */ j.jsx(Gu, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ j.jsx(
          mr,
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
            children: /* @__PURE__ */ j.jsx("a", { className: `btn btn-${a.color}`, href: a.url, children: a.text })
          }
        ) })
      ]
    }
  );
};
Bs.propTypes = {
  defaultProps: qu,
  header: ko,
  ctaButton: So
};
const Ws = ({ children: e }) => /* @__PURE__ */ j.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ j.jsx("div", { className: "col", children: e }) });
Ws.propTypes = {
  children: l.element
};
Xt.img`
  width: 100%;
`;
l.oneOf(["heading-hero", "story-hero"]), l.arrayOf(Da), l.string;
l.bool, l.bool, l.bool, l.bool, l.string, l.func, l.node, l.bool, l.string, l.bool;
l.oneOf(["default", "bordered"]).isRequired, l.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, l.number, l.number, l.func.isRequired;
l.oneOf(["small", "large"]), l.string.isRequired, l.string.isRequired, l.string;
l.oneOf(["small", "large"]).isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string, l.string;
Xt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const Yu = ho(function(e, t) {
  const {
    id: r,
    selected: n,
    title: a,
    selectTab: s,
    leftKeyPressed: d,
    rightKeyPressed: g,
    icon: p,
    gaData: f
  } = e, { isReact: _, isBootstrap: x } = vs(), D = zl(null);
  $l(t, () => ({
    focus() {
      D.current.focus();
    },
    scrollIntoView() {
      var C, S, I, $, H, Y, q;
      const T = ((C = D.current) == null ? void 0 : C.offsetWidth) / 2 + D.current.offsetLeft, ce = ((I = (S = D.current) == null ? void 0 : S.offsetParent) == null ? void 0 : I.scrollLeft) + ((H = ($ = D.current) == null ? void 0 : $.offsetParent) == null ? void 0 : H.offsetWidth) / 2;
      (q = (Y = D.current) == null ? void 0 : Y.offsetParent) == null || q.scrollBy({
        left: T - ce
      });
    }
  }), []);
  const B = (C) => {
    C.keyCode === 37 ? (C.preventDefault(), d()) : C.keyCode === 39 && (C.preventDefault(), g());
  };
  return /* @__PURE__ */ j.jsx(mr, { gaData: { ...f, text: a }, children: /* @__PURE__ */ j.jsxs(
    "a",
    {
      ref: D,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      "data-bs-toggle": x && "tab",
      onClick: _ && ((C) => s(C, r, a)),
      onKeyDown: _ && B,
      tabIndex: n ? "" : "-1",
      children: [
        a,
        " ",
        p && /* @__PURE__ */ j.jsx("i", { className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} me-1` })
      ]
    }
  ) });
});
Yu.propTypes = {
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
const Xu = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, Hs = ({ children: e }) => /* @__PURE__ */ j.jsx(
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
Hs.propTypes = {
  children: l.oneOfType([
    l.element,
    l.arrayOf(l.element)
  ]).isRequired
};
const Vs = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ j.jsx(mr, { gaData: Xu, children: /* @__PURE__ */ j.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`
        }
      ) }, `bullet-${r}`)
    );
  return /* @__PURE__ */ j.jsx(Hs, { children: t });
};
Vs.propTypes = {
  buttonCount: l.number.isRequired
};
l.arrayOf(l.string).isRequired, l.func;
const qs = ({ onClick: e = () => null }) => /* @__PURE__ */ j.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ j.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
qs.propTypes = {
  onClick: l.func
};
const Gs = ({ onClick: e = () => null }) => /* @__PURE__ */ j.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ j.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
Gs.propTypes = {
  onClick: l.func
};
const ki = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, Ys = ({ children: e = null }) => /* @__PURE__ */ j.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
Ys.propTypes = {
  children: l.arrayOf(l.element)
};
const Xs = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ j.jsxs(Ys, { children: [
  /* @__PURE__ */ j.jsx(mr, { gaData: { ...ki, text: "left chevron" }, children: /* @__PURE__ */ j.jsx(Gs, { onClick: e }) }),
  t,
  /* @__PURE__ */ j.jsx(mr, { gaData: { ...ki, text: "right chevron" }, children: /* @__PURE__ */ j.jsx(qs, { onClick: e }) })
] });
Xs.propTypes = {
  children: l.element,
  onClick: l.func
};
const Js = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ j.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ j.jsx("ul", { className: "glide__slides", children: t });
};
Js.propTypes = {
  carouselItems: l.arrayOf(l.object)
};
function Si(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Si(Object(r), !0).forEach(function(n) {
      Qu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Si(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ra(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ra = function(t) {
    return typeof t;
  } : ra = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ra(e);
}
function ga(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ju(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ya(e, t, r) {
  return t && Ju(e.prototype, t), e;
}
function Qu(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Zu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && to(e, t);
}
function Wr(e) {
  return Wr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Wr(e);
}
function to(e, t) {
  return to = Object.setPrototypeOf || function(r, n) {
    return r.__proto__ = n, r;
  }, to(e, t);
}
function Ku() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ed(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function td(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ed(e);
}
function rd(e) {
  var t = Ku();
  return function() {
    var r = Wr(e), n;
    if (t) {
      var a = Wr(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else
      n = r.apply(this, arguments);
    return td(this, n);
  };
}
function nd(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Wr(e), e !== null); )
    ;
  return e;
}
function na() {
  return typeof Reflect < "u" && Reflect.get ? na = Reflect.get : na = function(e, t, r) {
    var n = nd(e, t);
    if (n) {
      var a = Object.getOwnPropertyDescriptor(n, t);
      return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
    }
  }, na.apply(this, arguments);
}
var ad = {
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
function hr(e) {
  console.error("[Glide warn]: ".concat(e));
}
function gt(e) {
  return parseInt(e);
}
function od(e) {
  return parseFloat(e);
}
function ro(e) {
  return typeof e == "string";
}
function Hr(e) {
  var t = ra(e);
  return t === "function" || t === "object" && !!e;
}
function ca(e) {
  return typeof e == "function";
}
function Qs(e) {
  return typeof e > "u";
}
function no(e) {
  return e.constructor === Array;
}
function id(e, t, r) {
  var n = {};
  for (var a in t)
    ca(t[a]) ? n[a] = t[a](e, n, r) : hr("Extension must be a function");
  for (var s in n)
    ca(n[s].mount) && n[s].mount();
  return n;
}
function rt(e, t, r) {
  Object.defineProperty(e, t, r);
}
function sd(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function ao(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(a) {
      t.classes.hasOwnProperty(a) && (r.classes[a] = xi(xi({}, e.classes[a]), t.classes[a]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var ld = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ga(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return ya(e, [{
    key: "on",
    value: function(t, r) {
      if (no(t)) {
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
      if (no(t)) {
        for (var n = 0; n < t.length; n++)
          this.emit(t[n], r);
        return;
      }
      this.hop.call(this.events, t) && this.events[t].forEach(function(a) {
        a(r || {});
      });
    }
  }]), e;
}(), cd = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ga(this, e), this._c = {}, this._t = [], this._e = new ld(), this.disabled = !1, this.selector = t, this.settings = ao(ad, r), this.index = this.settings.startAt;
  }
  return ya(e, [{
    key: "mount",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Hr(t) ? this._c = id(this, t, this._e) : hr("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return no(t) ? this._t = t : hr("You need to provide a array on `mutate()`"), this;
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
      return this.settings = ao(this.settings, t), t.hasOwnProperty("startAt") && (this.index = t.startAt), this._e.emit("update"), this;
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
      Hr(t) ? this._o = t : hr("Options must be an `object` instance.");
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
      this._i = gt(t);
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
function ud(e, t, r) {
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
      var p = this.move, f = this.length, _ = p.steps, x = p.direction, D = 1;
      if (x === "=") {
        if (e.settings.bound && gt(_) > f) {
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
      if (x === "|" && (D = e.settings.perView || 1), x === ">" || x === "|" && _ === ">") {
        var B = a(D);
        B > f && (this._o = !0), e.index = s(B, D);
        return;
      }
      if (x === "<" || x === "|" && _ === "<") {
        var C = d(D);
        C < 0 && (this._o = !0), e.index = g(C, D);
        return;
      }
      hr("Invalid direction pattern [".concat(x).concat(_, "] has been used"));
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
  function g(p, f) {
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
        steps: f ? gt(f) ? gt(f) : f : 0
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
      return this.isBound() ? f - 1 - (gt(p.perView) - 1) + gt(p.focusAt) : f - 1;
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
function _i() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function ba(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, a, s, d, g = 0, p = function() {
    g = r.leading === !1 ? 0 : _i(), n = null, d = e.apply(a, s), n || (a = s = null);
  }, f = function() {
    var _ = _i();
    !g && r.leading === !1 && (g = _);
    var x = t - (_ - g);
    return a = this, s = arguments, x <= 0 || x > t ? (n && (clearTimeout(n), n = null), g = _, d = e.apply(a, s), n || (a = s = null)) : !n && r.trailing !== !1 && (n = setTimeout(p, x)), d;
  };
  return f.cancel = function() {
    clearTimeout(n), g = 0, n = a = s = null;
  }, f;
}
var Yn = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function dd(e, t, r) {
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
        var g = a[s].style, p = t.Direction.value;
        s !== 0 ? g[Yn[p][0]] = "".concat(this.value / 2, "px") : g[Yn[p][0]] = "", s !== a.length - 1 ? g[Yn[p][1]] = "".concat(this.value / 2, "px") : g[Yn[p][1]] = "";
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
        var g = a[s].style;
        g.marginLeft = "", g.marginRight = "";
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
      return gt(e.settings.gap);
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
  }), r.on(["build.after", "update"], ba(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function Zs(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function oo(e) {
  return Array.prototype.slice.call(e);
}
var fd = '[data-glide-el="track"]';
function pd(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(fd), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = oo(this.wrapper.children).filter(function(a) {
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
      ro(a) && (a = document.querySelector(a)), a !== null ? n._r = a : hr("Root element must be a existing Html node");
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
function hd(e, t, r) {
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
      Hr(a) ? (a.before = gt(a.before), a.after = gt(a.after)) : a = gt(a), n._v = a;
    }
  }), rt(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var a = n.value, s = e.settings.perView;
      return Hr(a) ? a.before / s + a.after / s : a * 2 / s;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function md(e, t, r) {
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
      n._o = Qs(a) ? 0 : gt(a);
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
function gd(e, t, r) {
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
function yd(e, t, r) {
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
      s && (s.classList.add(a.slide.active), Zs(s).forEach(function(d) {
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
function bd(e, t, r) {
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
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = t.Html.slides, d = e.settings, g = d.perView, p = d.classes, f = d.cloningRatio;
      if (s.length > 0)
        for (var _ = +!!e.settings.peek, x = g + _ + Math.round(g / 2), D = s.slice(0, x).reverse(), B = s.slice(x * -1), C = 0; C < Math.max(f, Math.floor(g / s.length)); C++) {
          for (var S = 0; S < D.length; S++) {
            var I = D[S].cloneNode(!0);
            I.classList.add(p.slide.clone), a.push(I);
          }
          for (var $ = 0; $ < B.length; $++) {
            var H = B[$].cloneNode(!0);
            H.classList.add(p.slide.clone), a.unshift(H);
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
      for (var a = this.items, s = t.Html, d = s.wrapper, g = s.slides, p = Math.floor(a.length / 2), f = a.slice(0, p).reverse(), _ = a.slice(p * -1).reverse(), x = "".concat(t.Sizes.slideWidth, "px"), D = 0; D < _.length; D++)
        d.appendChild(_[D]);
      for (var B = 0; B < f.length; B++)
        d.insertBefore(f[B], g[0]);
      for (var C = 0; C < a.length; C++)
        a[C].style.width = x;
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
var _r = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ga(this, e), this.listeners = t;
  }
  return ya(e, [{
    key: "on",
    value: function(t, r, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      ro(t) && (t = [t]);
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
      ro(t) && (t = [t]);
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
function vd(e, t, r) {
  var n = new _r(), a = {
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
      n.on("resize", window, ba(function() {
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
var wd = ["ltr", "rtl"], kd = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Sd(e, t, r) {
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
      return this.is("rtl") ? a.split(s).join(kd[s]) : a;
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
      wd.indexOf(a) > -1 ? n._v = a : hr("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function xd(e, t) {
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
function _d(e, t) {
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
function Cd(e, t) {
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
function Td(e, t) {
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
        return Hr(n) ? r - n.before : r - n;
      }
      return r;
    }
  };
}
function Ed(e, t) {
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
function Ad(e, t, r) {
  var n = [_d, Cd, Td, Ed].concat(e._t, [xd]);
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
        ca(d) && ca(d().modify) ? a = d(e, t, r).modify(a) : hr("Transformer should be a function that returns an object with `modify()` method");
      }
      return a;
    }
  };
}
function Od(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(a) {
      var s = Ad(e, t).mutate(a), d = "translate3d(".concat(-1 * s, "px, 0px, 0px)");
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
function Rd(e, t, r) {
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
var Ks = !1;
try {
  var Ci = Object.defineProperty({}, "passive", {
    get: function() {
      Ks = !0;
    }
  });
  window.addEventListener("testPassive", null, Ci), window.removeEventListener("testPassive", null, Ci);
} catch {
}
var io = Ks, Xn = ["touchstart", "mousedown"], Ti = ["touchmove", "mousemove"], Ei = ["touchend", "touchcancel", "mouseup", "mouseleave"], Ai = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Nd(e, t, r) {
  var n = new _r(), a = 0, s = 0, d = 0, g = !1, p = io ? {
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
      if (!g && !e.disabled) {
        this.disable();
        var x = this.touches(_);
        a = null, s = gt(x.pageX), d = gt(x.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(_) {
      if (!e.disabled) {
        var x = e.settings, D = x.touchAngle, B = x.touchRatio, C = x.classes, S = this.touches(_), I = gt(S.pageX) - s, $ = gt(S.pageY) - d, H = Math.abs(I << 2), Y = Math.abs($ << 2), q = Math.sqrt(H + Y), T = Math.sqrt(Y);
        if (a = Math.asin(T / q), a * 180 / Math.PI < D)
          _.stopPropagation(), t.Move.make(I * od(B)), t.Html.root.classList.add(C.dragging), r.emit("swipe.move");
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
        var x = e.settings, D = x.perSwipe, B = x.touchAngle, C = x.classes, S = this.touches(_), I = this.threshold(_), $ = S.pageX - s, H = a * 180 / Math.PI;
        this.enable(), $ > I && H < B ? t.Run.make(t.Direction.resolve("".concat(D, "<"))) : $ < -I && H < B ? t.Run.make(t.Direction.resolve("".concat(D, ">"))) : t.Move.make(), t.Html.root.classList.remove(C.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var _ = this, x = e.settings, D = x.swipeThreshold, B = x.dragThreshold;
      D && n.on(Xn[0], t.Html.wrapper, function(C) {
        _.start(C);
      }, p), B && n.on(Xn[1], t.Html.wrapper, function(C) {
        _.start(C);
      }, p);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(Xn[0], t.Html.wrapper, p), n.off(Xn[1], t.Html.wrapper, p);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var _ = this;
      n.on(Ti, t.Html.wrapper, ba(function(x) {
        _.move(x);
      }, e.settings.throttle), p);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(Ti, t.Html.wrapper, p);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var _ = this;
      n.on(Ei, t.Html.wrapper, function(x) {
        _.end(x);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(Ei, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(_) {
      return Ai.indexOf(_.type) > -1 ? _ : _.touches[0] || _.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(_) {
      var x = e.settings;
      return Ai.indexOf(_.type) > -1 ? x.dragThreshold : x.swipeThreshold;
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
function Ld(e, t, r) {
  var n = new _r(), a = {
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
function Pd(e, t, r) {
  var n = new _r(), a = !1, s = !1, d = {
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
      if (s = !0, !a) {
        for (var g = 0; g < this.items.length; g++)
          this.items[g].draggable = !1;
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
        for (var g = 0; g < this.items.length; g++)
          this.items[g].draggable = !0;
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
var Id = '[data-glide-el="controls[nav]"]', xo = '[data-glide-el^="controls"]', Dd = "".concat(xo, ' [data-glide-dir*="<"]'), Fd = "".concat(xo, ' [data-glide-dir*=">"]');
function Md(e, t, r) {
  var n = new _r(), a = io ? {
    passive: !0
  } : !1, s = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(Id), this._c = t.Html.root.querySelectorAll(xo), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(Dd),
        next: t.Html.root.querySelectorAll(Fd)
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
      var g = e.settings, p = d[e.index];
      p && (p.classList.add(g.classes.nav.active), Zs(p).forEach(function(f) {
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
      for (var d = e.settings, g = arguments.length, p = new Array(g), f = 0; f < g; f++)
        p[f] = arguments[f];
      p.forEach(function(_) {
        oo(_).forEach(function(x) {
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
      for (var d = e.settings, g = arguments.length, p = new Array(g), f = 0; f < g; f++)
        p[f] = arguments[f];
      p.forEach(function(_) {
        oo(_).forEach(function(x) {
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
      for (var g = 0; g < d.length; g++)
        n.on("click", d[g], this.click), n.on("touchstart", d[g], this.click, a);
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
      !io && d.type === "touchstart" && d.preventDefault();
      var g = d.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(g));
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
function jd(e, t, r) {
  var n = new _r(), a = {
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
    a.unbind();
  }), r.on("update", function() {
    a.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), a;
}
function zd(e, t, r) {
  var n = new _r(), a = {
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
      this._e && (this.enable(), e.settings.autoplay && Qs(this._i) && (this._i = setInterval(function() {
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
      return gt(s || e.settings.autoplay);
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
function Oi(e) {
  return Hr(e) ? sd(e) : (hr("Breakpoints option must be an object"), {});
}
function $d(e, t, r) {
  var n = new _r(), a = e.settings, s = Oi(a.breakpoints), d = Object.assign({}, a), g = {
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
  return Object.assign(a, g.match(s)), n.on("resize", window, ba(function() {
    e.settings = ao(a, g.match(s));
  }, e.settings.throttle)), r.on("update", function() {
    s = Oi(s), d = Object.assign({}, a);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), g;
}
var Ud = {
  // Required
  Html: pd,
  Translate: Od,
  Transition: Rd,
  Direction: Sd,
  Peek: hd,
  Sizes: gd,
  Gaps: dd,
  Move: md,
  Clones: bd,
  Resize: vd,
  Build: yd,
  Run: ud,
  // Optional
  Swipe: Nd,
  Images: Ld,
  Anchors: Pd,
  Controls: Md,
  Keyboard: jd,
  Autoplay: zd,
  Breakpoints: $d
}, Bd = /* @__PURE__ */ function(e) {
  Zu(r, e);
  var t = rd(r);
  function r() {
    return ga(this, r), t.apply(this, arguments);
  }
  return ya(r, [{
    key: "mount",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return na(Wr(r.prototype), "mount", this).call(this, Object.assign({}, Ud, n));
    }
  }]), r;
}(cd);
function Wd(e) {
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
function Hd(e = 1, t, r = !0, n) {
  const { perViewSm: a, perViewMd: s, perViewLg: d } = Wd(e), g = r ? 24 : 0, p = r ? { before: 48, after: 48 } : 0, f = r ? { before: 124, after: 124 } : 0;
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
function Vd(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), a = e.querySelector(".glide__arrow--next"), s = e.querySelector(".glide__track"), d = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || a)) return;
  const g = ["slider-start", "slider-mid", "slider-end"], p = "glide__arrow--disabled";
  s == null || s.classList.remove(...g), d == null || d.classList.remove(...g), t === 0 ? (s == null || s.classList.add("slider-start"), d == null || d.classList.add("slider-start"), n == null || n.classList.add(p), n == null || n.setAttribute("aria-disabled", "true"), a == null || a.classList.remove(p), a == null || a.setAttribute("aria-disabled", "false")) : t >= r - 1 ? (s == null || s.classList.add("slider-end"), d == null || d.classList.add("slider-end"), n == null || n.classList.remove(p), n == null || n.setAttribute("aria-disabled", "false"), a == null || a.classList.add(p), a == null || a.setAttribute("aria-disabled", "true")) : (s == null || s.classList.add("slider-mid"), d == null || d.classList.add("slider-mid"), n == null || n.classList.remove(p), a == null || a.classList.remove(p), n == null || n.setAttribute("aria-disabled", "false"), a == null || a.setAttribute("aria-disabled", "false"));
}
function qd(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), a = t, s = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((d, g) => {
    g < a || g > s ? (d.setAttribute("aria-hidden", "true"), d.setAttribute("tabindex", "-1"), d.setAttribute("inert", "")) : (d.setAttribute("aria-hidden", "false"), d.removeAttribute("tabindex"), d.removeAttribute("inert"));
  });
}
function Gd({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: a,
  hasPeek: s = !0,
  isDraggable: d
}) {
  const g = Hd(t, n, s, d), p = new Bd(`#${e}`, g);
  let f = document.querySelector(`#${e}`);
  return f.addEventListener("keyup", (_) => {
    const x = _;
    x.keyCode === 39 ? p.go(">") : x.keyCode === 37 ? p.go("<") : x.keyCode === 13 && p.go(document.activeElement.dataset.glideDir);
  }), p.on("build.before", () => {
    f = document.querySelector(`#${e}`), f && f.classList.add("slider-start");
  }), p.on("move", () => {
    if (f = document.querySelector(`#${e}`), !f) return;
    const _ = p.index;
    qd(f, _, t);
    const x = f.querySelector(".navigation-slider"), D = f.querySelector(".image-navigator-images");
    if (x && D) {
      const B = x.querySelectorAll(
        ".bullet-image-container"
      ), C = x.clientWidth, S = 82, I = B[_], $ = D.getBoundingClientRect().x, H = x.getBoundingClientRect().x - $, Y = I.getBoundingClientRect().x - $, q = I.getBoundingClientRect().x + I.getBoundingClientRect().width - $;
      if (_ === 0 || Y <= 0 + S)
        x.style.left = `${H - Y + S}px`;
      else if (q >= C - S) {
        const T = q - C;
        x.style.left = `${H - T - S}px`;
      }
    }
    Vd(f, _, r), f.setAttribute("data-current-index", _), a && a(_);
  }), p.mount(), p;
}
function Yd(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const el = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: a = "",
  CustomNavComponent: s,
  role: d,
  ariaLabelledBy: g,
  isFullWidth: p,
  removeSideBackground: f = !1,
  hasNavButtons: _ = !0,
  hasPositionIndicators: x = !0,
  imageAutoSize: D = !0,
  onItemClick: B = () => null,
  hasPeek: C = !0,
  isDraggable: S = !0,
  hasShadow: I = !0
}) => {
  const $ = `glide-${Math.ceil(Math.random() * 1e4)}`, H = Yd(n.length, e);
  return xr(() => {
    Gd({
      instanceName: $,
      perView: e,
      buttonCount: H,
      isFullWidth: p,
      onItemClick: B,
      hasPeek: C,
      isDraggable: S
    });
  }, [
    $,
    e,
    H,
    p,
    B,
    C,
    S
  ]), /* @__PURE__ */ j.jsxs(
    "div",
    {
      role: d,
      "aria-labelledby": g,
      className: `glide ${a}`,
      id: $,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": f,
      "data-image-auto-size": D,
      "data-has-shadow": I,
      children: [
        /* @__PURE__ */ j.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ j.jsx(Js, { carouselItems: n }) }),
        s ? (
          // @ts-ignore
          /* @__PURE__ */ j.jsx(s, { instanceName: $ })
        ) : /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
          x && /* @__PURE__ */ j.jsx(Vs, { buttonCount: H }),
          _ && /* @__PURE__ */ j.jsx(Xs, {})
        ] })
      ]
    }
  );
};
el.propTypes = {
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
const Xd = ({
  id: e,
  imageSource: t,
  imageAltText: r,
  title: n,
  content: a,
  eventLocation: s,
  eventTime: d,
  buttons: g,
  linkLabel: p,
  linkUrl: f,
  tags: _
}, x, D, B) => {
  var C;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ j.jsx(
      ur,
      {
        type: x,
        horizontal: D,
        image: t,
        imageAltText: r,
        title: n,
        body: a,
        eventFormat: B,
        eventLocation: s,
        eventTime: d,
        buttons: g,
        linkLabel: p,
        linkUrl: f || ((C = g == null ? void 0 : g[0]) == null ? void 0 : C.href),
        tags: _
      }
    )
  };
}, tl = ({
  perView: e = 0,
  cardItems: t = [],
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: a = !1,
  width: s = void 0,
  maxWidth: d = void 0,
  imageAutoSize: g = !0
}) => {
  const p = parseInt(`${e}`, 10), [f, _] = jr(p), x = 1024, D = 768;
  xr(() => {
    const S = () => {
      const I = window.innerWidth;
      let $;
      switch (p) {
        case 3:
          I > x ? $ = 3 : I > D ? $ = 2 : $ = 1;
          break;
        case 2:
          $ = I < D ? 1 : 2;
          break;
        default:
          $ = 1;
          break;
      }
      _($);
    };
    return S(), window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, [p]);
  const B = t.map(
    (S) => Xd(S, r, a, n)
  ), C = t.length > f;
  return /* @__PURE__ */ j.jsx(
    el,
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
tl.propTypes = {
  perView: l.string.isRequired,
  cardItems: l.arrayOf(
    l.shape({
      title: l.string.isRequired,
      content: l.string,
      eventLocation: l.string,
      eventTime: l.string,
      image: l.string,
      imageAltText: l.string,
      buttons: ur.propTypes.buttons,
      linkLabel: l.string,
      linkUrl: l.string,
      tags: ur.propTypes.tags
    })
  ).isRequired,
  cardType: ur.propTypes.type,
  cardEventFormat: ur.propTypes.eventFormat,
  cardHorizontal: ur.propTypes.horizontal,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
l.number.isRequired, l.arrayOf(l.object).isRequired, l.string, l.string, l.bool;
const ua = {
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
l.string, ua.imageItems, ua.hasContent;
ua.imageItems.isRequired, ua.hasContent, l.string, l.string, l.bool;
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
var Ri = os;
Ri.createRoot, Ri.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const {
  entries: rl,
  setPrototypeOf: Ni,
  isFrozen: Jd,
  getPrototypeOf: Qd,
  getOwnPropertyDescriptor: Zd
} = Object;
let {
  freeze: _t,
  seal: Dt,
  create: nl
} = Object, {
  apply: so,
  construct: lo
} = typeof Reflect < "u" && Reflect;
_t || (_t = function(t) {
  return t;
});
Dt || (Dt = function(t) {
  return t;
});
so || (so = function(t, r, n) {
  return t.apply(r, n);
});
lo || (lo = function(t, r) {
  return new t(...r);
});
const Jn = Ct(Array.prototype.forEach), Kd = Ct(Array.prototype.lastIndexOf), Li = Ct(Array.prototype.pop), dn = Ct(Array.prototype.push), ef = Ct(Array.prototype.splice), aa = Ct(String.prototype.toLowerCase), ja = Ct(String.prototype.toString), Pi = Ct(String.prototype.match), fn = Ct(String.prototype.replace), tf = Ct(String.prototype.indexOf), rf = Ct(String.prototype.trim), Yt = Ct(Object.prototype.hasOwnProperty), kt = Ct(RegExp.prototype.test), pn = nf(TypeError);
function Ct(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return so(e, t, n);
  };
}
function nf(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return lo(e, r);
  };
}
function Re(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : aa;
  Ni && Ni(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (Jd(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function af(e) {
  for (let t = 0; t < e.length; t++)
    Yt(e, t) || (e[t] = null);
  return e;
}
function Pr(e) {
  const t = nl(null);
  for (const [r, n] of rl(e))
    Yt(e, r) && (Array.isArray(n) ? t[r] = af(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = Pr(n) : t[r] = n);
  return t;
}
function hn(e, t) {
  for (; e !== null; ) {
    const n = Zd(e, t);
    if (n) {
      if (n.get)
        return Ct(n.get);
      if (typeof n.value == "function")
        return Ct(n.value);
    }
    e = Qd(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Ii = _t(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), za = _t(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), $a = _t(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), of = _t(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ua = _t(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), sf = _t(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Di = _t(["#text"]), Fi = _t(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ba = _t(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Mi = _t(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Qn = _t(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), lf = Dt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), cf = Dt(/<%[\w\W]*|[\w\W]*%>/gm), uf = Dt(/\$\{[\w\W]*/gm), df = Dt(/^data-[\-\w.\u00B7-\uFFFF]+$/), ff = Dt(/^aria-[\-\w]+$/), al = Dt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), pf = Dt(/^(?:\w+script|data):/i), hf = Dt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ol = Dt(/^html$/i), mf = Dt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ji = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: ff,
  ATTR_WHITESPACE: hf,
  CUSTOM_ELEMENT: mf,
  DATA_ATTR: df,
  DOCTYPE_NAME: ol,
  ERB_EXPR: cf,
  IS_ALLOWED_URI: al,
  IS_SCRIPT_OR_DATA: pf,
  MUSTACHE_EXPR: lf,
  TMPLIT_EXPR: uf
});
const mn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, gf = function() {
  return typeof window > "u" ? null : window;
}, yf = function(t, r) {
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
}, zi = function() {
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
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gf();
  const t = (b) => il(b);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== mn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: d,
    Node: g,
    Element: p,
    NodeFilter: f,
    NamedNodeMap: _ = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: x,
    DOMParser: D,
    trustedTypes: B
  } = e, C = p.prototype, S = hn(C, "cloneNode"), I = hn(C, "remove"), $ = hn(C, "nextSibling"), H = hn(C, "childNodes"), Y = hn(C, "parentNode");
  if (typeof d == "function") {
    const b = r.createElement("template");
    b.content && b.content.ownerDocument && (r = b.content.ownerDocument);
  }
  let q, T = "";
  const {
    implementation: ce,
    createNodeIterator: _e,
    createDocumentFragment: Pe,
    getElementsByTagName: De
  } = r, {
    importNode: He
  } = n;
  let ue = zi();
  t.isSupported = typeof rl == "function" && typeof Y == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: Ne,
    TMPLIT_EXPR: Le,
    DATA_ATTR: Ee,
    ARIA_ATTR: lt,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Ae,
    CUSTOM_ELEMENT: Ue
  } = ji;
  let {
    IS_ALLOWED_URI: Ze
  } = ji, ie = null;
  const z = Re({}, [...Ii, ...za, ...$a, ...Ua, ...Di]);
  let A = null;
  const M = Re({}, [...Fi, ...Ba, ...Mi, ...Qn]);
  let F = Object.seal(nl(null, {
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
  })), y = null, re = null, O = !0, ne = !0, ee = !1, te = !0, G = !1, oe = !0, se = !1, K = !1, he = !1, Z = !1, le = !1, $e = !1, me = !0, st = !1;
  const qe = "user-content-";
  let ge = !0, V = !1, ae = {}, Ge = null;
  const ut = Re({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Me = null;
  const Jt = Re({}, ["audio", "video", "img", "source", "image", "track"]);
  let Lt = null;
  const tr = Re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), yt = "http://www.w3.org/1998/Math/MathML", pt = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let dt = nt, Ft = !1, Mt = null;
  const Cr = Re({}, [yt, pt, nt], ja);
  let it = Re({}, ["mi", "mo", "mn", "ms", "mtext"]), bt = Re({}, ["annotation-xml"]);
  const Qt = Re({}, ["title", "style", "font", "a", "script"]);
  let Ce = null;
  const jt = ["application/xhtml+xml", "text/html"], Zt = "text/html";
  let ve = null, Ke = null;
  const Kt = r.createElement("form"), vt = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Pt = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ke && Ke === w)) {
      if ((!w || typeof w != "object") && (w = {}), w = Pr(w), Ce = // eslint-disable-next-line unicorn/prefer-includes
      jt.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Zt : w.PARSER_MEDIA_TYPE, ve = Ce === "application/xhtml+xml" ? ja : aa, ie = Yt(w, "ALLOWED_TAGS") ? Re({}, w.ALLOWED_TAGS, ve) : z, A = Yt(w, "ALLOWED_ATTR") ? Re({}, w.ALLOWED_ATTR, ve) : M, Mt = Yt(w, "ALLOWED_NAMESPACES") ? Re({}, w.ALLOWED_NAMESPACES, ja) : Cr, Lt = Yt(w, "ADD_URI_SAFE_ATTR") ? Re(Pr(tr), w.ADD_URI_SAFE_ATTR, ve) : tr, Me = Yt(w, "ADD_DATA_URI_TAGS") ? Re(Pr(Jt), w.ADD_DATA_URI_TAGS, ve) : Jt, Ge = Yt(w, "FORBID_CONTENTS") ? Re({}, w.FORBID_CONTENTS, ve) : ut, y = Yt(w, "FORBID_TAGS") ? Re({}, w.FORBID_TAGS, ve) : {}, re = Yt(w, "FORBID_ATTR") ? Re({}, w.FORBID_ATTR, ve) : {}, ae = Yt(w, "USE_PROFILES") ? w.USE_PROFILES : !1, O = w.ALLOW_ARIA_ATTR !== !1, ne = w.ALLOW_DATA_ATTR !== !1, ee = w.ALLOW_UNKNOWN_PROTOCOLS || !1, te = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, G = w.SAFE_FOR_TEMPLATES || !1, oe = w.SAFE_FOR_XML !== !1, se = w.WHOLE_DOCUMENT || !1, Z = w.RETURN_DOM || !1, le = w.RETURN_DOM_FRAGMENT || !1, $e = w.RETURN_TRUSTED_TYPE || !1, he = w.FORCE_BODY || !1, me = w.SANITIZE_DOM !== !1, st = w.SANITIZE_NAMED_PROPS || !1, ge = w.KEEP_CONTENT !== !1, V = w.IN_PLACE || !1, Ze = w.ALLOWED_URI_REGEXP || al, dt = w.NAMESPACE || nt, it = w.MATHML_TEXT_INTEGRATION_POINTS || it, bt = w.HTML_INTEGRATION_POINTS || bt, F = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && vt(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (F.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && vt(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (F.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (F.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), G && (ne = !1), le && (Z = !0), ae && (ie = Re({}, Di), A = [], ae.html === !0 && (Re(ie, Ii), Re(A, Fi)), ae.svg === !0 && (Re(ie, za), Re(A, Ba), Re(A, Qn)), ae.svgFilters === !0 && (Re(ie, $a), Re(A, Ba), Re(A, Qn)), ae.mathMl === !0 && (Re(ie, Ua), Re(A, Mi), Re(A, Qn))), w.ADD_TAGS && (ie === z && (ie = Pr(ie)), Re(ie, w.ADD_TAGS, ve)), w.ADD_ATTR && (A === M && (A = Pr(A)), Re(A, w.ADD_ATTR, ve)), w.ADD_URI_SAFE_ATTR && Re(Lt, w.ADD_URI_SAFE_ATTR, ve), w.FORBID_CONTENTS && (Ge === ut && (Ge = Pr(Ge)), Re(Ge, w.FORBID_CONTENTS, ve)), ge && (ie["#text"] = !0), se && Re(ie, ["html", "head", "body"]), ie.table && (Re(ie, ["tbody"]), delete y.tbody), w.TRUSTED_TYPES_POLICY) {
        if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        q = w.TRUSTED_TYPES_POLICY, T = q.createHTML("");
      } else
        q === void 0 && (q = yf(B, a)), q !== null && typeof T == "string" && (T = q.createHTML(""));
      _t && _t(w), Ke = w;
    }
  }, zt = Re({}, [...za, ...$a, ...of]), $t = Re({}, [...Ua, ...sf]), yr = function(w) {
    let E = Y(w);
    (!E || !E.tagName) && (E = {
      namespaceURI: dt,
      tagName: "template"
    });
    const X = aa(w.tagName), ye = aa(E.tagName);
    return Mt[w.namespaceURI] ? w.namespaceURI === pt ? E.namespaceURI === nt ? X === "svg" : E.namespaceURI === yt ? X === "svg" && (ye === "annotation-xml" || it[ye]) : !!zt[X] : w.namespaceURI === yt ? E.namespaceURI === nt ? X === "math" : E.namespaceURI === pt ? X === "math" && bt[ye] : !!$t[X] : w.namespaceURI === nt ? E.namespaceURI === pt && !bt[ye] || E.namespaceURI === yt && !it[ye] ? !1 : !$t[X] && (Qt[X] || !zt[X]) : !!(Ce === "application/xhtml+xml" && Mt[w.namespaceURI]) : !1;
  }, at = function(w) {
    dn(t.removed, {
      element: w
    });
    try {
      Y(w).removeChild(w);
    } catch {
      I(w);
    }
  }, Tt = function(w, E) {
    try {
      dn(t.removed, {
        attribute: E.getAttributeNode(w),
        from: E
      });
    } catch {
      dn(t.removed, {
        attribute: null,
        from: E
      });
    }
    if (E.removeAttribute(w), w === "is")
      if (Z || le)
        try {
          at(E);
        } catch {
        }
      else
        try {
          E.setAttribute(w, "");
        } catch {
        }
  }, rr = function(w) {
    let E = null, X = null;
    if (he)
      w = "<remove></remove>" + w;
    else {
      const Ie = Pi(w, /^[\r\n\t ]+/);
      X = Ie && Ie[0];
    }
    Ce === "application/xhtml+xml" && dt === nt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const ye = q ? q.createHTML(w) : w;
    if (dt === nt)
      try {
        E = new D().parseFromString(ye, Ce);
      } catch {
      }
    if (!E || !E.documentElement) {
      E = ce.createDocument(dt, "template", null);
      try {
        E.documentElement.innerHTML = Ft ? T : ye;
      } catch {
      }
    }
    const ke = E.body || E.documentElement;
    return w && X && ke.insertBefore(r.createTextNode(X), ke.childNodes[0] || null), dt === nt ? De.call(E, se ? "html" : "body")[0] : se ? E.documentElement : ke;
  }, nr = function(w) {
    return _e.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Et = function(w) {
    return w instanceof x && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof _) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, er = function(w) {
    return typeof g == "function" && w instanceof g;
  };
  function Ye(b, w, E) {
    Jn(b, (X) => {
      X.call(t, w, E, Ke);
    });
  }
  const Ut = function(w) {
    let E = null;
    if (Ye(ue.beforeSanitizeElements, w, null), Et(w))
      return at(w), !0;
    const X = ve(w.nodeName);
    if (Ye(ue.uponSanitizeElement, w, {
      tagName: X,
      allowedTags: ie
    }), w.hasChildNodes() && !er(w.firstElementChild) && kt(/<[/\w]/g, w.innerHTML) && kt(/<[/\w]/g, w.textContent) || w.nodeType === mn.progressingInstruction || oe && w.nodeType === mn.comment && kt(/<[/\w]/g, w.data))
      return at(w), !0;
    if (!ie[X] || y[X]) {
      if (!y[X] && At(X) && (F.tagNameCheck instanceof RegExp && kt(F.tagNameCheck, X) || F.tagNameCheck instanceof Function && F.tagNameCheck(X)))
        return !1;
      if (ge && !Ge[X]) {
        const ye = Y(w) || w.parentNode, ke = H(w) || w.childNodes;
        if (ke && ye) {
          const Ie = ke.length;
          for (let we = Ie - 1; we >= 0; --we) {
            const Xe = S(ke[we], !0);
            Xe.__removalCount = (w.__removalCount || 0) + 1, ye.insertBefore(Xe, $(w));
          }
        }
      }
      return at(w), !0;
    }
    return w instanceof p && !yr(w) || (X === "noscript" || X === "noembed" || X === "noframes") && kt(/<\/no(script|embed|frames)/i, w.innerHTML) ? (at(w), !0) : (G && w.nodeType === mn.text && (E = w.textContent, Jn([pe, Ne, Le], (ye) => {
      E = fn(E, ye, " ");
    }), w.textContent !== E && (dn(t.removed, {
      element: w.cloneNode()
    }), w.textContent = E)), Ye(ue.afterSanitizeElements, w, null), !1);
  }, ar = function(w, E, X) {
    if (me && (E === "id" || E === "name") && (X in r || X in Kt))
      return !1;
    if (!(ne && !re[E] && kt(Ee, E))) {
      if (!(O && kt(lt, E))) {
        if (!A[E] || re[E]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(At(w) && (F.tagNameCheck instanceof RegExp && kt(F.tagNameCheck, w) || F.tagNameCheck instanceof Function && F.tagNameCheck(w)) && (F.attributeNameCheck instanceof RegExp && kt(F.attributeNameCheck, E) || F.attributeNameCheck instanceof Function && F.attributeNameCheck(E)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            E === "is" && F.allowCustomizedBuiltInElements && (F.tagNameCheck instanceof RegExp && kt(F.tagNameCheck, X) || F.tagNameCheck instanceof Function && F.tagNameCheck(X)))
          ) return !1;
        } else if (!Lt[E]) {
          if (!kt(Ze, fn(X, Ae, ""))) {
            if (!((E === "src" || E === "xlink:href" || E === "href") && w !== "script" && tf(X, "data:") === 0 && Me[w])) {
              if (!(ee && !kt(Fe, fn(X, Ae, "")))) {
                if (X)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, At = function(w) {
    return w !== "annotation-xml" && Pi(w, Ue);
  }, or = function(w) {
    Ye(ue.beforeSanitizeAttributes, w, null);
    const {
      attributes: E
    } = w;
    if (!E || Et(w))
      return;
    const X = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: A,
      forceKeepAttr: void 0
    };
    let ye = E.length;
    for (; ye--; ) {
      const ke = E[ye], {
        name: Ie,
        namespaceURI: we,
        value: Xe
      } = ke, Ve = ve(Ie);
      let et = Ie === "value" ? Xe : rf(Xe);
      if (X.attrName = Ve, X.attrValue = et, X.keepAttr = !0, X.forceKeepAttr = void 0, Ye(ue.uponSanitizeAttribute, w, X), et = X.attrValue, st && (Ve === "id" || Ve === "name") && (Tt(Ie, w), et = qe + et), oe && kt(/((--!?|])>)|<\/(style|title)/i, et)) {
        Tt(Ie, w);
        continue;
      }
      if (X.forceKeepAttr || (Tt(Ie, w), !X.keepAttr))
        continue;
      if (!te && kt(/\/>/i, et)) {
        Tt(Ie, w);
        continue;
      }
      G && Jn([pe, Ne, Le], (Bt) => {
        et = fn(et, Bt, " ");
      });
      const sr = ve(w.nodeName);
      if (ar(sr, Ve, et)) {
        if (q && typeof B == "object" && typeof B.getAttributeType == "function" && !we)
          switch (B.getAttributeType(sr, Ve)) {
            case "TrustedHTML": {
              et = q.createHTML(et);
              break;
            }
            case "TrustedScriptURL": {
              et = q.createScriptURL(et);
              break;
            }
          }
        try {
          we ? w.setAttributeNS(we, Ie, et) : w.setAttribute(Ie, et), Et(w) ? at(w) : Li(t.removed);
        } catch {
        }
      }
    }
    Ye(ue.afterSanitizeAttributes, w, null);
  }, ir = function b(w) {
    let E = null;
    const X = nr(w);
    for (Ye(ue.beforeSanitizeShadowDOM, w, null); E = X.nextNode(); )
      Ye(ue.uponSanitizeShadowNode, E, null), Ut(E), or(E), E.content instanceof s && b(E.content);
    Ye(ue.afterSanitizeShadowDOM, w, null);
  };
  return t.sanitize = function(b) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = null, X = null, ye = null, ke = null;
    if (Ft = !b, Ft && (b = "<!-->"), typeof b != "string" && !er(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw pn("dirty is not a string, aborting");
      } else
        throw pn("toString is not a function");
    if (!t.isSupported)
      return b;
    if (K || Pt(w), t.removed = [], typeof b == "string" && (V = !1), V) {
      if (b.nodeName) {
        const Xe = ve(b.nodeName);
        if (!ie[Xe] || y[Xe])
          throw pn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof g)
      E = rr("<!---->"), X = E.ownerDocument.importNode(b, !0), X.nodeType === mn.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? E = X : E.appendChild(X);
    else {
      if (!Z && !G && !se && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return q && $e ? q.createHTML(b) : b;
      if (E = rr(b), !E)
        return Z ? null : $e ? T : "";
    }
    E && he && at(E.firstChild);
    const Ie = nr(V ? b : E);
    for (; ye = Ie.nextNode(); )
      Ut(ye), or(ye), ye.content instanceof s && ir(ye.content);
    if (V)
      return b;
    if (Z) {
      if (le)
        for (ke = Pe.call(E.ownerDocument); E.firstChild; )
          ke.appendChild(E.firstChild);
      else
        ke = E;
      return (A.shadowroot || A.shadowrootmode) && (ke = He.call(n, ke, !0)), ke;
    }
    let we = se ? E.outerHTML : E.innerHTML;
    return se && ie["!doctype"] && E.ownerDocument && E.ownerDocument.doctype && E.ownerDocument.doctype.name && kt(ol, E.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + E.ownerDocument.doctype.name + `>
` + we), G && Jn([pe, Ne, Le], (Xe) => {
      we = fn(we, Xe, " ");
    }), q && $e ? q.createHTML(we) : we;
  }, t.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pt(b), K = !0;
  }, t.clearConfig = function() {
    Ke = null, K = !1;
  }, t.isValidAttribute = function(b, w, E) {
    Ke || Pt({});
    const X = ve(b), ye = ve(w);
    return ar(X, ye, E);
  }, t.addHook = function(b, w) {
    typeof w == "function" && dn(ue[b], w);
  }, t.removeHook = function(b, w) {
    if (w !== void 0) {
      const E = Kd(ue[b], w);
      return E === -1 ? void 0 : ef(ue[b], E, 1)[0];
    }
    return Li(ue[b]);
  }, t.removeHooks = function(b) {
    ue[b] = [];
  }, t.removeAllHooks = function() {
    ue = zi();
  }, t;
}
il();
var sl = { exports: {} }, Wa, $i;
function bf() {
  if ($i) return Wa;
  $i = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wa = e, Wa;
}
var Ha, Ui;
function vf() {
  if (Ui) return Ha;
  Ui = 1;
  var e = bf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ha = function() {
    function n(d, g, p, f, _, x) {
      if (x !== e) {
        var D = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw D.name = "Invariant Violation", D;
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
  }, Ha;
}
sl.exports = vf()();
var wf = sl.exports;
const ft = /* @__PURE__ */ is(wf);
ft.shape({
  event: ft.string,
  action: ft.string,
  name: ft.string,
  region: ft.string,
  section: ft.string,
  component: ft.string,
  type: ft.string,
  text: ft.string
});
const Cn = ({ children: e }) => /* @__PURE__ */ ot.jsx(ot.Fragment, { children: e });
Cn.propTypes = {
  children: ft.oneOfType([
    ft.arrayOf(ft.node),
    ft.node,
    ft.string
  ])
};
var kf = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", d = 0; d < arguments.length; d++) {
        var g = arguments[d];
        g && (s = a(s, n(g)));
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
        t.call(s, g) && s[g] && (d = a(d, g));
      return d;
    }
    function a(s, d) {
      return d ? s ? s + " " + d : s + d : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(kf);
({
  ...Cn.propTypes
});
const ll = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ ot.jsx("div", { className: t, ...r, children: /* @__PURE__ */ ot.jsx("div", { className: "row", children: e }) });
ll.propTypes = {
  children: Cn.propTypes.children
};
({
  ...ll.propTypes
});
Cn.propTypes.children, ft.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Cn.propTypes.children;
function _o({
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
const wn = {
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
}, Bi = ["newsUnits", "interests", "audiences", "eventTypes"], Sf = (e, t = "") => {
  if (!t) return !0;
  const r = t.split(",");
  for (let n = 0; n < Bi.length; n += 1) {
    const a = Bi[n];
    for (let s = 0; s < r.length; s += 1) {
      const d = r[s], p = (e[a] || "").match(new RegExp(d, "gi"));
      if ((p == null ? void 0 : p.length) > 0) return !0;
    }
  }
  return !1;
}, Wi = (e, t) => {
  let r = e;
  return r.length > t && (r = r.substr(0, r.lastIndexOf(" ", t)), r += "..."), r;
}, xf = ({ node: e }, t) => ({
  index: t,
  id: e.nid,
  imageUrl: e.image_url,
  imageAltText: e.image_alt,
  title: Wi(e.title, 80),
  content: Wi(e == null ? void 0 : e.clas_teaser, 140),
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
  var g;
  const s = (g = n == null ? void 0 : n.filters) == null ? void 0 : g.replace(/_/g, " "), d = { ...n, filters: s };
  return /* @__PURE__ */ ot.jsx(
    zs,
    {
      renderHeader: t && r ? /* @__PURE__ */ ot.jsx(
        Bs,
        {
          header: t,
          ctaButton: r,
          defaultProps: wn
        }
      ) : null,
      renderBody: /* @__PURE__ */ ot.jsx(Ws, { children: e }),
      dataTransformer: xf,
      dataFilter: Sf,
      dataSource: d,
      defaultProps: wn,
      noFeedText: "No news to show.",
      maxItems: a
    }
  );
};
Fr.propTypes = {
  header: ko,
  ctaButton: So,
  dataSource: Us,
  maxItems: ft.number,
  children: ft.element
};
var cl = { exports: {} }, We = {};
var Hi;
function _f() {
  if (Hi) return We;
  Hi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), B = Symbol.for("react.client.reference");
  function C(S) {
    if (typeof S == "object" && S !== null) {
      var I = S.$$typeof;
      switch (I) {
        case e:
          switch (S = S.type, S) {
            case r:
            case a:
            case n:
            case p:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case d:
                case g:
                case x:
                case _:
                  return S;
                case s:
                  return S;
                default:
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  return We.ContextConsumer = s, We.ContextProvider = d, We.Element = e, We.ForwardRef = g, We.Fragment = r, We.Lazy = x, We.Memo = _, We.Portal = t, We.Profiler = a, We.StrictMode = n, We.Suspense = p, We.SuspenseList = f, We.isContextConsumer = function(S) {
    return C(S) === s;
  }, We.isContextProvider = function(S) {
    return C(S) === d;
  }, We.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, We.isForwardRef = function(S) {
    return C(S) === g;
  }, We.isFragment = function(S) {
    return C(S) === r;
  }, We.isLazy = function(S) {
    return C(S) === x;
  }, We.isMemo = function(S) {
    return C(S) === _;
  }, We.isPortal = function(S) {
    return C(S) === t;
  }, We.isProfiler = function(S) {
    return C(S) === a;
  }, We.isStrictMode = function(S) {
    return C(S) === n;
  }, We.isSuspense = function(S) {
    return C(S) === p;
  }, We.isSuspenseList = function(S) {
    return C(S) === f;
  }, We.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === a || S === n || S === p || S === f || S === D || typeof S == "object" && S !== null && (S.$$typeof === x || S.$$typeof === _ || S.$$typeof === d || S.$$typeof === s || S.$$typeof === g || S.$$typeof === B || S.getModuleId !== void 0);
  }, We.typeOf = C, We;
}
cl.exports = _f();
var ul = cl.exports;
function Cf(e) {
  function t(z, A, M, F, y) {
    for (var re = 0, O = 0, ne = 0, ee = 0, te, G, oe = 0, se = 0, K, he = K = te = 0, Z = 0, le = 0, $e = 0, me = 0, st = M.length, qe = st - 1, ge, V = "", ae = "", Ge = "", ut = "", Me; Z < st; ) {
      if (G = M.charCodeAt(Z), Z === qe && O + ee + ne + re !== 0 && (O !== 0 && (G = O === 47 ? 10 : 47), ee = ne = re = 0, st++, qe++), O + ee + ne + re === 0) {
        if (Z === qe && (0 < le && (V = V.replace(D, "")), 0 < V.trim().length)) {
          switch (G) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              V += M.charAt(Z);
          }
          G = 59;
        }
        switch (G) {
          case 123:
            for (V = V.trim(), te = V.charCodeAt(0), K = 1, me = ++Z; Z < st; ) {
              switch (G = M.charCodeAt(Z)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (G = M.charCodeAt(Z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = Z + 1; he < qe; ++he)
                          switch (M.charCodeAt(he)) {
                            case 47:
                              if (G === 42 && M.charCodeAt(he - 1) === 42 && Z + 2 !== he) {
                                Z = he + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (G === 47) {
                                Z = he + 1;
                                break e;
                              }
                          }
                        Z = he;
                      }
                  }
                  break;
                case 91:
                  G++;
                case 40:
                  G++;
                case 34:
                case 39:
                  for (; Z++ < qe && M.charCodeAt(Z) !== G; )
                    ;
              }
              if (K === 0) break;
              Z++;
            }
            switch (K = M.substring(me, Z), te === 0 && (te = (V = V.replace(x, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (V = V.replace(D, "")), G = V.charCodeAt(1), G) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = A;
                    break;
                  default:
                    le = lt;
                }
                if (K = t(A, le, K, G, y + 1), me = K.length, 0 < Ae && (le = r(lt, V, $e), Me = g(3, K, le, A, Ne, pe, me, G, y, F), V = le.join(""), Me !== void 0 && (me = (K = Me.trim()).length) === 0 && (G = 0, K = "")), 0 < me) switch (G) {
                  case 115:
                    V = V.replace(ce, d);
                  case 100:
                  case 109:
                  case 45:
                    K = V + "{" + K + "}";
                    break;
                  case 107:
                    V = V.replace(H, "$1 $2"), K = V + "{" + K + "}", K = Ee === 1 || Ee === 2 && s("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = V + K, F === 112 && (K = (ae += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(A, r(A, V, $e), K, F, y + 1);
            }
            Ge += K, K = $e = le = he = te = 0, V = "", G = M.charCodeAt(++Z);
            break;
          case 125:
          case 59:
            if (V = (0 < le ? V.replace(D, "") : V).trim(), 1 < (me = V.length)) switch (he === 0 && (te = V.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (me = (V = V.replace(" ", ":")).length), 0 < Ae && (Me = g(1, V, A, z, Ne, pe, ae.length, F, y, F)) !== void 0 && (me = (V = Me.trim()).length) === 0 && (V = "\0\0"), te = V.charCodeAt(0), G = V.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (G === 105 || G === 99) {
                  ut += V + M.charAt(Z);
                  break;
                }
              default:
                V.charCodeAt(me - 1) !== 58 && (ae += a(V, te, G, V.charCodeAt(2)));
            }
            $e = le = he = te = 0, V = "", G = M.charCodeAt(++Z);
        }
      }
      switch (G) {
        case 13:
        case 10:
          O === 47 ? O = 0 : 1 + te === 0 && F !== 107 && 0 < V.length && (le = 1, V += "\0"), 0 < Ae * Ze && g(0, V, A, z, Ne, pe, ae.length, F, y, F), pe = 1, Ne++;
          break;
        case 59:
        case 125:
          if (O + ee + ne + re === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, ge = M.charAt(Z), G) {
            case 9:
            case 32:
              if (ee + re + O === 0) switch (oe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ge = "";
                  break;
                default:
                  G !== 32 && (ge = " ");
              }
              break;
            case 0:
              ge = "\\0";
              break;
            case 12:
              ge = "\\f";
              break;
            case 11:
              ge = "\\v";
              break;
            case 38:
              ee + O + re === 0 && (le = $e = 1, ge = "\f" + ge);
              break;
            case 108:
              if (ee + O + re + Le === 0 && 0 < he) switch (Z - he) {
                case 2:
                  oe === 112 && M.charCodeAt(Z - 3) === 58 && (Le = oe);
                case 8:
                  se === 111 && (Le = se);
              }
              break;
            case 58:
              ee + O + re === 0 && (he = Z);
              break;
            case 44:
              O + ne + ee + re === 0 && (le = 1, ge += "\r");
              break;
            case 34:
            case 39:
              O === 0 && (ee = ee === G ? 0 : ee === 0 ? G : ee);
              break;
            case 91:
              ee + O + ne === 0 && re++;
              break;
            case 93:
              ee + O + ne === 0 && re--;
              break;
            case 41:
              ee + O + re === 0 && ne--;
              break;
            case 40:
              if (ee + O + re === 0) {
                if (te === 0) switch (2 * oe + 3 * se) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ne++;
              }
              break;
            case 64:
              O + ne + ee + re + he + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + re + ne)) switch (O) {
                case 0:
                  switch (2 * G + 3 * M.charCodeAt(Z + 1)) {
                    case 235:
                      O = 47;
                      break;
                    case 220:
                      me = Z, O = 42;
                  }
                  break;
                case 42:
                  G === 47 && oe === 42 && me + 2 !== Z && (M.charCodeAt(me + 2) === 33 && (ae += M.substring(me, Z + 1)), ge = "", O = 0);
              }
          }
          O === 0 && (V += ge);
      }
      se = oe, oe = G, Z++;
    }
    if (me = ae.length, 0 < me) {
      if (le = A, 0 < Ae && (Me = g(2, ae, le, z, Ne, pe, me, F, y, F), Me !== void 0 && (ae = Me).length === 0)) return ut + ae + Ge;
      if (ae = le.join(",") + "{" + ae + "}", Ee * Le !== 0) {
        switch (Ee !== 2 || s(ae, 2) || (Le = 0), Le) {
          case 111:
            ae = ae.replace(q, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(Y, "::-webkit-input-$1") + ae.replace(Y, "::-moz-$1") + ae.replace(Y, ":-ms-input-$1") + ae;
        }
        Le = 0;
      }
    }
    return ut + ae + Ge;
  }
  function r(z, A, M) {
    var F = A.trim().split(I);
    A = F;
    var y = F.length, re = z.length;
    switch (re) {
      case 0:
      case 1:
        var O = 0;
        for (z = re === 0 ? "" : z[0] + " "; O < y; ++O)
          A[O] = n(z, A[O], M).trim();
        break;
      default:
        var ne = O = 0;
        for (A = []; O < y; ++O)
          for (var ee = 0; ee < re; ++ee)
            A[ne++] = n(z[ee] + " ", F[O], M).trim();
    }
    return A;
  }
  function n(z, A, M) {
    var F = A.charCodeAt(0);
    switch (33 > F && (F = (A = A.trim()).charCodeAt(0)), F) {
      case 38:
        return A.replace($, "$1" + z.trim());
      case 58:
        return z.trim() + A.replace($, "$1" + z.trim());
      default:
        if (0 < 1 * M && 0 < A.indexOf("\f")) return A.replace($, (z.charCodeAt(0) === 58 ? "" : "$1") + z.trim());
    }
    return z + A;
  }
  function a(z, A, M, F) {
    var y = z + ";", re = 2 * A + 3 * M + 4 * F;
    if (re === 944) {
      z = y.indexOf(":", 9) + 1;
      var O = y.substring(z, y.length - 1).trim();
      return O = y.substring(0, z).trim() + O + ";", Ee === 1 || Ee === 2 && s(O, 1) ? "-webkit-" + O + O : O;
    }
    if (Ee === 0 || Ee === 2 && !s(y, 1)) return y;
    switch (re) {
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
        if (0 < y.indexOf("image-set(", 11)) return y.replace(ue, "$1-webkit-$2") + y;
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
        return C.test(y) ? y.replace(B, ":-webkit-") + y.replace(B, ":-moz-") + y : y;
      case 1e3:
        switch (O = y.substring(13).trim(), A = O.indexOf("-") + 1, O.charCodeAt(0) + O.charCodeAt(A)) {
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
        switch (A = (y = z).length - 10, O = (y.charCodeAt(A) === 33 ? y.substring(0, A) : y).substring(z.indexOf(":", 7) + 1).trim(), re = O.charCodeAt(0) + (O.charCodeAt(7) | 0)) {
          case 203:
            if (111 > O.charCodeAt(8)) break;
          case 115:
            y = y.replace(O, "-webkit-" + O) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(O, "-webkit-" + (102 < re ? "inline-" : "") + "box") + ";" + y.replace(O, "-webkit-" + O) + ";" + y.replace(O, "-ms-" + O + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return O = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + O + "-ms-flex-" + O + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(Pe, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(Pe, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (He.test(z) === !0) return (O = z.substring(z.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(z.replace("stretch", "fill-available"), A, M, F).replace(":fill-available", ":stretch") : y.replace(O, "-webkit-" + O) + y.replace(O, "-moz-" + O.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, M + F === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(z, A) {
    var M = z.indexOf(A === 1 ? ":" : "{"), F = z.substring(0, A !== 3 ? M : 10);
    return M = z.substring(M + 1, z.length - 1), Ue(A !== 2 ? F : F.replace(De, "$1"), M, A);
  }
  function d(z, A) {
    var M = a(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return M !== A + ";" ? M.replace(_e, " or ($1)").substring(4) : "(" + A + ")";
  }
  function g(z, A, M, F, y, re, O, ne, ee, te) {
    for (var G = 0, oe = A, se; G < Ae; ++G)
      switch (se = Fe[G].call(_, z, oe, M, F, y, re, O, ne, ee, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          oe = se;
      }
    if (oe !== A) return oe;
  }
  function p(z) {
    switch (z) {
      case void 0:
      case null:
        Ae = Fe.length = 0;
        break;
      default:
        if (typeof z == "function") Fe[Ae++] = z;
        else if (typeof z == "object") for (var A = 0, M = z.length; A < M; ++A)
          p(z[A]);
        else Ze = !!z | 0;
    }
    return p;
  }
  function f(z) {
    return z = z.prefix, z !== void 0 && (Ue = null, z ? typeof z != "function" ? Ee = 1 : (Ee = 2, Ue = z) : Ee = 0), f;
  }
  function _(z, A) {
    var M = z;
    if (33 > M.charCodeAt(0) && (M = M.trim()), ie = M, M = [ie], 0 < Ae) {
      var F = g(-1, A, M, M, Ne, pe, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (A = F);
    }
    var y = t(lt, M, A, 0, 0);
    return 0 < Ae && (F = g(-2, y, M, M, Ne, pe, y.length, 0, 0, 0), F !== void 0 && (y = F)), ie = "", Le = 0, pe = Ne = 1, y;
  }
  var x = /^\0+/g, D = /[\0\r\f]/g, B = /: */g, C = /zoo|gra/, S = /([,: ])(transform)/g, I = /,\r+?/g, $ = /([\t\r\n ])*\f?&/g, H = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, q = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, _e = /([\s\S]*?);/g, Pe = /-self|flex-/g, De = /[^]*?(:[rp][el]a[\w-]+)[^]*/, He = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, pe = 1, Ne = 1, Le = 0, Ee = 1, lt = [], Fe = [], Ae = 0, Ue = null, Ze = 0, ie = "";
  return _.use = p, _.set = f, e !== void 0 && f(e), _;
}
var Tf = {
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
function Ef(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Af = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Vi = /* @__PURE__ */ Ef(
  function(e) {
    return Af.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), dl = { exports: {} }, ze = {};
var qi;
function Of() {
  if (qi) return ze;
  qi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, g = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, D = e ? Symbol.for("react.suspense_list") : 60120, B = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, H = e ? Symbol.for("react.scope") : 60119;
  function Y(T) {
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
                case g:
                case _:
                case C:
                case B:
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
  function q(T) {
    return Y(T) === f;
  }
  return ze.AsyncMode = p, ze.ConcurrentMode = f, ze.ContextConsumer = g, ze.ContextProvider = d, ze.Element = t, ze.ForwardRef = _, ze.Fragment = n, ze.Lazy = C, ze.Memo = B, ze.Portal = r, ze.Profiler = s, ze.StrictMode = a, ze.Suspense = x, ze.isAsyncMode = function(T) {
    return q(T) || Y(T) === p;
  }, ze.isConcurrentMode = q, ze.isContextConsumer = function(T) {
    return Y(T) === g;
  }, ze.isContextProvider = function(T) {
    return Y(T) === d;
  }, ze.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, ze.isForwardRef = function(T) {
    return Y(T) === _;
  }, ze.isFragment = function(T) {
    return Y(T) === n;
  }, ze.isLazy = function(T) {
    return Y(T) === C;
  }, ze.isMemo = function(T) {
    return Y(T) === B;
  }, ze.isPortal = function(T) {
    return Y(T) === r;
  }, ze.isProfiler = function(T) {
    return Y(T) === s;
  }, ze.isStrictMode = function(T) {
    return Y(T) === a;
  }, ze.isSuspense = function(T) {
    return Y(T) === x;
  }, ze.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === n || T === f || T === s || T === a || T === x || T === D || typeof T == "object" && T !== null && (T.$$typeof === C || T.$$typeof === B || T.$$typeof === d || T.$$typeof === g || T.$$typeof === _ || T.$$typeof === I || T.$$typeof === $ || T.$$typeof === H || T.$$typeof === S);
  }, ze.typeOf = Y, ze;
}
dl.exports = Of();
var Rf = dl.exports, Co = Rf, Nf = {
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
}, Lf = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Pf = {
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
}, To = {};
To[Co.ForwardRef] = Pf;
To[Co.Memo] = fl;
function Gi(e) {
  return Co.isMemo(e) ? fl : To[e.$$typeof] || Nf;
}
var If = Object.defineProperty, Df = Object.getOwnPropertyNames, Yi = Object.getOwnPropertySymbols, Ff = Object.getOwnPropertyDescriptor, Mf = Object.getPrototypeOf, Xi = Object.prototype;
function pl(e, t, r) {
  if (typeof t != "string") {
    if (Xi) {
      var n = Mf(t);
      n && n !== Xi && pl(e, n, r);
    }
    var a = Df(t);
    Yi && (a = a.concat(Yi(t)));
    for (var s = Gi(e), d = Gi(t), g = 0; g < a.length; ++g) {
      var p = a[g];
      if (!Lf[p] && !(r && r[p]) && !(d && d[p]) && !(s && s[p])) {
        var f = Ff(t, p);
        try {
          If(e, p, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var jf = pl;
const zf = /* @__PURE__ */ is(jf);
var mt = { env: { NODE_ENV: "production" } };
function fr() {
  return (fr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Ji = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, co = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !ul.typeOf(e);
}, da = Object.freeze([]), Sr = Object.freeze({});
function kn(e) {
  return typeof e == "function";
}
function Qi(e) {
  return e.displayName || e.name || "Component";
}
function Eo(e) {
  return e && typeof e.styledComponentId == "string";
}
var Vr = typeof mt < "u" && mt.env !== void 0 && (mt.env.REACT_APP_SC_ATTR || mt.env.SC_ATTR) || "data-styled", Ao = typeof window < "u" && "HTMLElement" in window, $f = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof mt < "u" && mt.env !== void 0 && (mt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && mt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? mt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && mt.env.REACT_APP_SC_DISABLE_SPEEDY : mt.env.SC_DISABLE_SPEEDY !== void 0 && mt.env.SC_DISABLE_SPEEDY !== "" ? mt.env.SC_DISABLE_SPEEDY !== "false" && mt.env.SC_DISABLE_SPEEDY : mt.env.NODE_ENV !== "production"));
function Tn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Uf = function() {
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
      for (var g = s; g < d; g++) this.groupSizes[g] = 0;
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
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), d = s + a, g = s; g < d; g++) n += this.tag.getRule(g) + `/*!sc*/
`;
    return n;
  }, e;
}(), oa = /* @__PURE__ */ new Map(), fa = /* @__PURE__ */ new Map(), bn = 1, Zn = function(e) {
  if (oa.has(e)) return oa.get(e);
  for (; fa.has(bn); ) bn++;
  var t = bn++;
  return oa.set(e, t), fa.set(t, e), t;
}, Bf = function(e) {
  return fa.get(e);
}, Wf = function(e, t) {
  t >= bn && (bn = t + 1), oa.set(e, t), fa.set(t, e);
}, Hf = "style[" + Vr + '][data-styled-version="5.3.11"]', Vf = new RegExp("^" + Vr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), qf = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, d = a.length; s < d; s++) (n = a[s]) && e.registerName(t, n);
}, Gf = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var d = r[a].trim();
    if (d) {
      var g = d.match(Vf);
      if (g) {
        var p = 0 | parseInt(g[1], 10), f = g[2];
        p !== 0 && (Wf(f, p), qf(e, f, g[3]), e.getTag().insertRules(p, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, Yf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, hl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(g) {
    for (var p = g.childNodes, f = p.length; f >= 0; f--) {
      var _ = p[f];
      if (_ && _.nodeType === 1 && _.hasAttribute(Vr)) return _;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Vr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Yf();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, Xf = function() {
  function e(r) {
    var n = this.element = hl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, d = 0, g = s.length; d < g; d++) {
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
}(), Jf = function() {
  function e(r) {
    var n = this.element = hl(r);
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
}(), Zi = Ao, Zf = { isServer: !Ao, useCSSOMInjection: !$f }, ml = function() {
  function e(r, n, a) {
    r === void 0 && (r = Sr), n === void 0 && (n = {}), this.options = fr({}, Zf, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Ao && Zi && (Zi = !1, function(s) {
      for (var d = document.querySelectorAll(Hf), g = 0, p = d.length; g < p; g++) {
        var f = d[g];
        f && f.getAttribute(Vr) !== "active" && (Gf(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Zn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(fr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new Qf(d) : s ? new Xf(d) : new Jf(d), new Uf(r)));
    var r, n, a, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Zn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(Zn(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Zn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", d = 0; d < a; d++) {
        var g = Bf(d);
        if (g !== void 0) {
          var p = r.names.get(g), f = n.getGroup(d);
          if (p && f && p.size) {
            var _ = Vr + ".g" + d + '[id="' + g + '"]', x = "";
            p !== void 0 && p.forEach(function(D) {
              D.length > 0 && (x += D + ",");
            }), s += "" + f + _ + '{content:"' + x + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Kf = /(a)(d)/gi, Ki = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function uo(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Ki(t % 52) + r;
  return (Ki(t % 52) + r).replace(Kf, "$1-$2");
}
var $r = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, gl = function(e) {
  return $r(5381, e);
};
function ep(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (kn(r) && !Eo(r)) return !1;
  }
  return !0;
}
var tp = gl("5.3.11"), rp = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && ep(t), this.componentId = r, this.baseHash = $r(tp, r), this.baseStyle = n, ml.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = qr(this.rules, t, r, n).join(""), g = uo($r(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(a, g)) {
        var p = n(d, "." + g, void 0, a);
        r.insertRules(a, g, p);
      }
      s.push(g), this.staticRulesId = g;
    }
    else {
      for (var f = this.rules.length, _ = $r(this.baseHash, n.hash), x = "", D = 0; D < f; D++) {
        var B = this.rules[D];
        if (typeof B == "string") x += B;
        else if (B) {
          var C = qr(B, t, r, n), S = Array.isArray(C) ? C.join("") : C;
          _ = $r(_, S + D), x += S;
        }
      }
      if (x) {
        var I = uo(_ >>> 0);
        if (!r.hasNameForId(a, I)) {
          var $ = n(x, "." + I, void 0, a);
          r.insertRules(a, I, $);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), np = /^\s*\/\/.*$/gm, ap = [":", "[", ".", "#"];
function op(e) {
  var t, r, n, a, s = Sr, d = s.options, g = d === void 0 ? Sr : d, p = s.plugins, f = p === void 0 ? da : p, _ = new Cf(g), x = [], D = /* @__PURE__ */ function(S) {
    function I($) {
      if ($) try {
        S($ + "}");
      } catch {
      }
    }
    return function($, H, Y, q, T, ce, _e, Pe, De, He) {
      switch ($) {
        case 1:
          if (De === 0 && H.charCodeAt(0) === 64) return S(H + ";"), "";
          break;
        case 2:
          if (Pe === 0) return H + "/*|*/";
          break;
        case 3:
          switch (Pe) {
            case 102:
            case 112:
              return S(Y[0] + H), "";
            default:
              return H + (He === 0 ? "/*|*/" : "");
          }
        case -2:
          H.split("/*|*/}").forEach(I);
      }
    };
  }(function(S) {
    x.push(S);
  }), B = function(S, I, $) {
    return I === 0 && ap.indexOf($[r.length]) !== -1 || $.match(a) ? S : "." + t;
  };
  function C(S, I, $, H) {
    H === void 0 && (H = "&");
    var Y = S.replace(np, ""), q = I && $ ? $ + " " + I + " { " + Y + " }" : Y;
    return t = H, r = I, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), _($ || !I ? "" : I, q);
  }
  return _.use([].concat(f, [function(S, I, $) {
    S === 2 && $.length && $[0].lastIndexOf(r) > 0 && ($[0] = $[0].replace(n, B));
  }, D, function(S) {
    if (S === -2) {
      var I = x;
      return x = [], I;
    }
  }])), C.hash = f.length ? f.reduce(function(S, I) {
    return I.name || Tn(15), $r(S, I.name);
  }, 5381).toString() : "", C;
}
var yl = ct.createContext();
yl.Consumer;
var bl = ct.createContext(), ip = (bl.Consumer, new ml()), fo = op();
function sp() {
  return gr(yl) || ip;
}
function lp() {
  return gr(bl) || fo;
}
var cp = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = fo);
      var d = n.name + s.hash;
      a.hasNameForId(n.id, d) || a.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return Tn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = fo), this.name + t.hash;
  }, e;
}(), up = /([A-Z])/, dp = /([A-Z])/g, fp = /^ms-/, pp = function(e) {
  return "-" + e.toLowerCase();
};
function es(e) {
  return up.test(e) ? e.replace(dp, pp).replace(fp, "-ms-") : e;
}
var ts = function(e) {
  return e == null || e === !1 || e === "";
};
function qr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, g = e.length; d < g; d += 1) (a = qr(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (ts(e)) return "";
  if (Eo(e)) return "." + e.styledComponentId;
  if (kn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var p = e(t);
    return qr(p, t, r, n);
  }
  var f;
  return e instanceof cp ? r ? (e.inject(r, n), e.getName(n)) : e : co(e) ? function _(x, D) {
    var B, C, S = [];
    for (var I in x) x.hasOwnProperty(I) && !ts(x[I]) && (Array.isArray(x[I]) && x[I].isCss || kn(x[I]) ? S.push(es(I) + ":", x[I], ";") : co(x[I]) ? S.push.apply(S, _(x[I], I)) : S.push(es(I) + ": " + (B = I, (C = x[I]) == null || typeof C == "boolean" || C === "" ? "" : typeof C != "number" || C === 0 || B in Tf || B.startsWith("--") ? String(C).trim() : C + "px") + ";"));
    return D ? [D + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var rs = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function hp(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return kn(e) || co(e) ? rs(qr(Ji(da, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : rs(qr(Ji(e, r)));
}
var mp = function(e, t, r) {
  return r === void 0 && (r = Sr), e.theme !== r.theme && e.theme || t || r.theme;
}, gp = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, yp = /(^-|-$)/g;
function Va(e) {
  return e.replace(gp, "-").replace(yp, "");
}
var bp = function(e) {
  return uo(gl(e) >>> 0);
};
function Kn(e) {
  return typeof e == "string" && mt.env.NODE_ENV === "production";
}
var po = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, vp = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function wp(e, t, r) {
  var n = e[r];
  po(t) && po(n) ? vl(n, t) : e[r] = t;
}
function vl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (po(d)) for (var g in d) vp(g) && wp(e, d[g], g);
  }
  return e;
}
var wl = ct.createContext();
wl.Consumer;
var qa = {};
function kl(e, t, r) {
  var n = Eo(e), a = !Kn(e), s = t.attrs, d = s === void 0 ? da : s, g = t.componentId, p = g === void 0 ? function(H, Y) {
    var q = typeof H != "string" ? "sc" : Va(H);
    qa[q] = (qa[q] || 0) + 1;
    var T = q + "-" + bp("5.3.11" + q + qa[q]);
    return Y ? Y + "-" + T : T;
  }(t.displayName, t.parentComponentId) : g, f = t.displayName, _ = f === void 0 ? function(H) {
    return Kn(H) ? "styled." + H : "Styled(" + Qi(H) + ")";
  }(e) : f, x = t.displayName && t.componentId ? Va(t.displayName) + "-" + t.componentId : t.componentId || p, D = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, B = t.shouldForwardProp;
  n && e.shouldForwardProp && (B = t.shouldForwardProp ? function(H, Y, q) {
    return e.shouldForwardProp(H, Y, q) && t.shouldForwardProp(H, Y, q);
  } : e.shouldForwardProp);
  var C, S = new rp(r, x, n ? e.componentStyle : void 0), I = S.isStatic && d.length === 0, $ = function(H, Y) {
    return function(q, T, ce, _e) {
      var Pe = q.attrs, De = q.componentStyle, He = q.defaultProps, ue = q.foldedComponentIds, pe = q.shouldForwardProp, Ne = q.styledComponentId, Le = q.target, Ee = function(F, y, re) {
        F === void 0 && (F = Sr);
        var O = fr({}, y, { theme: F }), ne = {};
        return re.forEach(function(ee) {
          var te, G, oe, se = ee;
          for (te in kn(se) && (se = se(O)), se) O[te] = ne[te] = te === "className" ? (G = ne[te], oe = se[te], G && oe ? G + " " + oe : G || oe) : se[te];
        }), [O, ne];
      }(mp(T, gr(wl), He) || Sr, T, Pe), lt = Ee[0], Fe = Ee[1], Ae = function(F, y, re, O) {
        var ne = sp(), ee = lp(), te = y ? F.generateAndInjectStyles(Sr, ne, ee) : F.generateAndInjectStyles(re, ne, ee);
        return te;
      }(De, _e, lt), Ue = ce, Ze = Fe.$as || T.$as || Fe.as || T.as || Le, ie = Kn(Ze), z = Fe !== T ? fr({}, T, {}, Fe) : T, A = {};
      for (var M in z) M[0] !== "$" && M !== "as" && (M === "forwardedAs" ? A.as = z[M] : (pe ? pe(M, Vi, Ze) : !ie || Vi(M)) && (A[M] = z[M]));
      return T.style && Fe.style !== T.style && (A.style = fr({}, T.style, {}, Fe.style)), A.className = Array.prototype.concat(ue, Ne, Ae !== Ne ? Ae : null, T.className, Fe.className).filter(Boolean).join(" "), A.ref = Ue, as(Ze, A);
    }(C, H, Y, I);
  };
  return $.displayName = _, (C = ct.forwardRef($)).attrs = D, C.componentStyle = S, C.displayName = _, C.shouldForwardProp = B, C.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : da, C.styledComponentId = x, C.target = n ? e.target : e, C.withComponent = function(H) {
    var Y = t.componentId, q = function(ce, _e) {
      if (ce == null) return {};
      var Pe, De, He = {}, ue = Object.keys(ce);
      for (De = 0; De < ue.length; De++) Pe = ue[De], _e.indexOf(Pe) >= 0 || (He[Pe] = ce[Pe]);
      return He;
    }(t, ["componentId"]), T = Y && Y + "-" + (Kn(H) ? H : Va(Qi(H)));
    return kl(H, fr({}, q, { attrs: D, componentId: T }), r);
  }, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(H) {
    this._foldedDefaultProps = n ? vl({}, e.defaultProps, H) : H;
  } }), Object.defineProperty(C, "toString", { value: function() {
    return "." + C.styledComponentId;
  } }), a && zf(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), C;
}
var Sn = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Sr), !ul.isValidElementType(n)) return Tn(1, String(n));
    var s = function() {
      return r(n, a, hp.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, fr({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, fr({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(kl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Sn[e] = Sn(e);
});
const kp = Sn.section``, Sp = (e, t, r) => ({
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
}), xp = ({ cardButton: e }) => {
  const { feeds: t } = gr(ma), r = t == null ? void 0 : t.map(
    (n, a) => Sp(n, a, e)
  );
  return /* @__PURE__ */ ot.jsx(kp, { children: /* @__PURE__ */ ot.jsx(
    tl,
    {
      width: "auto",
      cardType: "story",
      perView: "3",
      cardItems: r || []
    }
  ) });
}, Sl = ({ cardButton: e, ...t }) => (xr(() => {
  typeof window < "u" && _o({
    packageName: "component-news",
    component: "CardCarouselNews",
    type: "NA",
    configuration: {
      cardButton: e,
      props: t
    }
  });
}, []), // Calling the high order component that fetches the data
/* @__PURE__ */ ot.jsx(Fr, { ...t, children: /* @__PURE__ */ ot.jsx(
  xp,
  {
    cardButton: { ...wn.cardButton, ...e }
  }
) }));
Sl.propTypes = Fr.propTypes;
const xl = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), _p = Sn.section`
  .c-card {
    height: 100%;
  }
`, Cp = (e, t) => /* @__PURE__ */ ot.jsx(
  "div",
  {
    className: "col col-12 col-md-6 col-lg-4 cards-items-container",
    children: /* @__PURE__ */ ot.jsx(
      ur,
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
        tags: xl(e == null ? void 0 : e.interests)
      }
    )
  },
  e.id
), Tp = ({ cardButton: e }) => {
  const { feeds: t } = gr(ma);
  return /* @__PURE__ */ ot.jsx(_p, { className: "row row-spaced", "data-testid": "grid-view-container", children: t == null ? void 0 : t.map((r, n) => /* @__PURE__ */ ot.jsx(ct.Fragment, { children: Cp(r, e) }, n)) });
}, _l = ({ cardButton: e, ...t }) => (xr(() => {
  typeof window < "u" && _o({
    packageName: "component-news",
    component: "CardGridNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ ot.jsx(Fr, { ...t, children: /* @__PURE__ */ ot.jsx(
  Tp,
  {
    cardButton: { ...wn.cardButton, ...e }
  }
) }));
_l.propTypes = {
  ...Fr.propTypes,
  cardButton: $s
};
const Ep = Sn.section``, Ap = (e, t) => /* @__PURE__ */ ot.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ ot.jsx(
  ur,
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
    tags: xl(e == null ? void 0 : e.interests)
  }
) }, e.id), Op = ({ cardButton: e }) => {
  const { feeds: t } = gr(ma);
  return /* @__PURE__ */ ot.jsx(Ep, { className: "row-spaced", "data-testid": "list-view-container", children: t == null ? void 0 : t.map((r, n) => /* @__PURE__ */ ot.jsx(ct.Fragment, { children: Ap(r, e) }, n)) });
}, Cl = ({ cardButton: e, ...t }) => (xr(() => {
  typeof window < "u" && _o({
    packageName: "component-news",
    component: "CardListlNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ ot.jsx(Fr, { ...t, children: /* @__PURE__ */ ot.jsx(
  Op,
  {
    cardButton: { ...wn.cardButton, ...e }
  }
) }));
Cl.propTypes = { ...Fr.propTypes, feedCardButtonShape: $s };
var Tl, ns = os;
Tl = ns.createRoot, ns.hydrateRoot;
const Oo = (e, t, r) => {
  Tl(r).render(ct.createElement(e, t));
}, Lp = ({ targetSelector: e, props: t }) => {
  Oo(_l, t, document.querySelector(e));
}, Pp = ({ targetSelector: e, props: t }) => {
  Oo(Cl, t, document.querySelector(e));
}, Ip = ({ targetSelector: e, props: t }) => {
  Oo(Sl, t, document.querySelector(e));
};
export {
  Sl as CardCarouselNews,
  _l as CardGridNews,
  Cl as CardListlNews,
  Ip as initCardCarouselNewsComponent,
  Lp as initCardGridNewsComponent,
  Pp as initCardListNewsComponent
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
