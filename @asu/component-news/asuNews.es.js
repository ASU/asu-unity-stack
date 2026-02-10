import ut, { forwardRef as hi, Component as $l, createContext as Ul, useRef as Bl, useImperativeHandle as Wl, useId as Hl, useContext as gr, createElement as ss, useState as jr, useEffect as xr } from "react";
import ls from "react-dom";
function cs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var us = { exports: {} }, nn = {};
var Gi;
function Vl() {
  if (Gi) return nn;
  Gi = 1;
  var e = ut, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, p, f) {
    var _, x = {}, L = null, $ = null;
    f !== void 0 && (L = "" + f), p.key !== void 0 && (L = "" + p.key), p.ref !== void 0 && ($ = p.ref);
    for (_ in p) n.call(p, _) && !s.hasOwnProperty(_) && (x[_] = p[_]);
    if (m && m.defaultProps) for (_ in p = m.defaultProps, p) x[_] === void 0 && (x[_] = p[_]);
    return { $$typeof: t, type: m, key: L, ref: $, props: x, _owner: a.current };
  }
  return nn.Fragment = r, nn.jsx = d, nn.jsxs = d, nn;
}
us.exports = Vl();
var it = us.exports;
function mi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ds = { exports: {} }, an = {}, Yi;
function ql() {
  if (Yi) return an;
  Yi = 1;
  var e = ut, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, p, f) {
    var _, x = {}, L = null, $ = null;
    f !== void 0 && (L = "" + f), p.key !== void 0 && (L = "" + p.key), p.ref !== void 0 && ($ = p.ref);
    for (_ in p) n.call(p, _) && !s.hasOwnProperty(_) && (x[_] = p[_]);
    if (m && m.defaultProps) for (_ in p = m.defaultProps, p) x[_] === void 0 && (x[_] = p[_]);
    return { $$typeof: t, type: m, key: L, ref: $, props: x, _owner: a.current };
  }
  return an.Fragment = r, an.jsx = d, an.jsxs = d, an;
}
ds.exports = ql();
var M = ds.exports, fs = { exports: {} }, Oa, Xi;
function Gl() {
  if (Xi) return Oa;
  Xi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Oa = e, Oa;
}
var Ra, Qi;
function Yl() {
  if (Qi) return Ra;
  Qi = 1;
  var e = Gl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ra = function() {
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
  }, Ra;
}
fs.exports = Yl()();
var Xl = fs.exports;
const l = /* @__PURE__ */ mi(Xl), Ql = () => {
  const [e, t] = jr(null), [r, n] = jr(!1), [a, s] = jr(null), [d, m] = jr("");
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
  }, [d]), [{ data: e, loading: r, error: a }, m];
}, Jl = (e) => (e || []).join(" "), {
  entries: ps,
  setPrototypeOf: Ji,
  isFrozen: Zl,
  getPrototypeOf: Kl,
  getOwnPropertyDescriptor: ec
} = Object;
let {
  freeze: St,
  seal: Dt,
  create: hs
} = Object, {
  apply: Ya,
  construct: Xa
} = typeof Reflect < "u" && Reflect;
St || (St = function(e) {
  return e;
});
Dt || (Dt = function(e) {
  return e;
});
Ya || (Ya = function(e, t, r) {
  return e.apply(t, r);
});
Xa || (Xa = function(e, t) {
  return new e(...t);
});
const Wn = xt(Array.prototype.forEach), tc = xt(Array.prototype.lastIndexOf), Zi = xt(Array.prototype.pop), on = xt(Array.prototype.push), rc = xt(Array.prototype.splice), ta = xt(String.prototype.toLowerCase), Ia = xt(String.prototype.toString), Ki = xt(String.prototype.match), sn = xt(String.prototype.replace), nc = xt(String.prototype.indexOf), ac = xt(String.prototype.trim), Gt = xt(Object.prototype.hasOwnProperty), wt = xt(RegExp.prototype.test), ln = ic(TypeError);
function xt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Ya(e, t, n);
  };
}
function ic(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Xa(e, r);
  };
}
function Oe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ta;
  Ji && Ji(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (Zl(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function oc(e) {
  for (let t = 0; t < e.length; t++)
    Gt(e, t) || (e[t] = null);
  return e;
}
function Nr(e) {
  const t = hs(null);
  for (const [r, n] of ps(e))
    Gt(e, r) && (Array.isArray(n) ? t[r] = oc(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = Nr(n) : t[r] = n);
  return t;
}
function cn(e, t) {
  for (; e !== null; ) {
    const n = ec(e, t);
    if (n) {
      if (n.get)
        return xt(n.get);
      if (typeof n.value == "function")
        return xt(n.value);
    }
    e = Kl(e);
  }
  function r() {
    return null;
  }
  return r;
}
const eo = St(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Na = St(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Pa = St(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), sc = St(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Da = St(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), lc = St(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), to = St(["#text"]), ro = St(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), La = St(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), no = St(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Hn = St(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), cc = Dt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), uc = Dt(/<%[\w\W]*|[\w\W]*%>/gm), dc = Dt(/\$\{[\w\W]*/gm), fc = Dt(/^data-[\-\w.\u00B7-\uFFFF]+$/), pc = Dt(/^aria-[\-\w]+$/), ms = Dt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), hc = Dt(/^(?:\w+script|data):/i), mc = Dt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), gs = Dt(/^html$/i), gc = Dt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ao = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: pc,
  ATTR_WHITESPACE: mc,
  CUSTOM_ELEMENT: gc,
  DATA_ATTR: fc,
  DOCTYPE_NAME: gs,
  ERB_EXPR: uc,
  IS_ALLOWED_URI: ms,
  IS_SCRIPT_OR_DATA: hc,
  MUSTACHE_EXPR: cc,
  TMPLIT_EXPR: dc
});
const un = {
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
}, io = function() {
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
function ys() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yc();
  const t = (b) => ys(b);
  if (t.version = "3.2.5", t.removed = [], !e || !e.document || e.document.nodeType !== un.document || !e.Element)
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
  } = e, E = p.prototype, S = cn(E, "cloneNode"), D = cn(E, "remove"), B = cn(E, "nextSibling"), H = cn(E, "childNodes"), Y = cn(E, "parentNode");
  if (typeof d == "function") {
    const b = r.createElement("template");
    b.content && b.content.ownerDocument && (r = b.content.ownerDocument);
  }
  let V, T = "";
  const {
    implementation: ce,
    createNodeIterator: _e,
    createDocumentFragment: Pe,
    getElementsByTagName: Le
  } = r, {
    importNode: He
  } = n;
  let ue = io();
  t.isSupported = typeof ps == "function" && typeof Y == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: Ie,
    TMPLIT_EXPR: Ne,
    DATA_ATTR: Ce,
    ARIA_ATTR: lt,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Ae,
    CUSTOM_ELEMENT: Ue
  } = ao;
  let {
    IS_ALLOWED_URI: Ze
  } = ao, oe = null;
  const z = Oe({}, [...eo, ...Na, ...Pa, ...Da, ...to]);
  let A = null;
  const j = Oe({}, [...ro, ...La, ...no, ...Hn]);
  let F = Object.seal(hs(null, {
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
  })), y = null, re = null, O = !0, ne = !0, ee = !1, te = !0, G = !1, ie = !0, se = !1, K = !1, he = !1, Z = !1, le = !1, $e = !1, me = !0, st = !1;
  const qe = "user-content-";
  let ge = !0, q = !1, ae = {}, Ge = null;
  const dt = Oe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Me = null;
  const Jt = Oe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Nt = null;
  const nr = Oe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), yt = "http://www.w3.org/1998/Math/MathML", pt = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let ft = nt, Ft = !1, Mt = null;
  const Tr = Oe({}, [yt, pt, nt], Ia);
  let ot = Oe({}, ["mi", "mo", "mn", "ms", "mtext"]), bt = Oe({}, ["annotation-xml"]);
  const Zt = Oe({}, ["title", "style", "font", "a", "script"]);
  let Te = null;
  const jt = ["application/xhtml+xml", "text/html"], Kt = "text/html";
  let ve = null, Ke = null;
  const er = r.createElement("form"), vt = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Pt = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ke && Ke === b)) {
      if ((!b || typeof b != "object") && (b = {}), b = Nr(b), Te = // eslint-disable-next-line unicorn/prefer-includes
      jt.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Kt : b.PARSER_MEDIA_TYPE, ve = Te === "application/xhtml+xml" ? Ia : ta, oe = Gt(b, "ALLOWED_TAGS") ? Oe({}, b.ALLOWED_TAGS, ve) : z, A = Gt(b, "ALLOWED_ATTR") ? Oe({}, b.ALLOWED_ATTR, ve) : j, Mt = Gt(b, "ALLOWED_NAMESPACES") ? Oe({}, b.ALLOWED_NAMESPACES, Ia) : Tr, Nt = Gt(b, "ADD_URI_SAFE_ATTR") ? Oe(Nr(nr), b.ADD_URI_SAFE_ATTR, ve) : nr, Me = Gt(b, "ADD_DATA_URI_TAGS") ? Oe(Nr(Jt), b.ADD_DATA_URI_TAGS, ve) : Jt, Ge = Gt(b, "FORBID_CONTENTS") ? Oe({}, b.FORBID_CONTENTS, ve) : dt, y = Gt(b, "FORBID_TAGS") ? Oe({}, b.FORBID_TAGS, ve) : {}, re = Gt(b, "FORBID_ATTR") ? Oe({}, b.FORBID_ATTR, ve) : {}, ae = Gt(b, "USE_PROFILES") ? b.USE_PROFILES : !1, O = b.ALLOW_ARIA_ATTR !== !1, ne = b.ALLOW_DATA_ATTR !== !1, ee = b.ALLOW_UNKNOWN_PROTOCOLS || !1, te = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, G = b.SAFE_FOR_TEMPLATES || !1, ie = b.SAFE_FOR_XML !== !1, se = b.WHOLE_DOCUMENT || !1, Z = b.RETURN_DOM || !1, le = b.RETURN_DOM_FRAGMENT || !1, $e = b.RETURN_TRUSTED_TYPE || !1, he = b.FORCE_BODY || !1, me = b.SANITIZE_DOM !== !1, st = b.SANITIZE_NAMED_PROPS || !1, ge = b.KEEP_CONTENT !== !1, q = b.IN_PLACE || !1, Ze = b.ALLOWED_URI_REGEXP || ms, ft = b.NAMESPACE || nt, ot = b.MATHML_TEXT_INTEGRATION_POINTS || ot, bt = b.HTML_INTEGRATION_POINTS || bt, F = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && vt(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (F.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && vt(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (F.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (F.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), G && (ne = !1), le && (Z = !0), ae && (oe = Oe({}, to), A = [], ae.html === !0 && (Oe(oe, eo), Oe(A, ro)), ae.svg === !0 && (Oe(oe, Na), Oe(A, La), Oe(A, Hn)), ae.svgFilters === !0 && (Oe(oe, Pa), Oe(A, La), Oe(A, Hn)), ae.mathMl === !0 && (Oe(oe, Da), Oe(A, no), Oe(A, Hn))), b.ADD_TAGS && (oe === z && (oe = Nr(oe)), Oe(oe, b.ADD_TAGS, ve)), b.ADD_ATTR && (A === j && (A = Nr(A)), Oe(A, b.ADD_ATTR, ve)), b.ADD_URI_SAFE_ATTR && Oe(Nt, b.ADD_URI_SAFE_ATTR, ve), b.FORBID_CONTENTS && (Ge === dt && (Ge = Nr(Ge)), Oe(Ge, b.FORBID_CONTENTS, ve)), ge && (oe["#text"] = !0), se && Oe(oe, ["html", "head", "body"]), oe.table && (Oe(oe, ["tbody"]), delete y.tbody), b.TRUSTED_TYPES_POLICY) {
        if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ln('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ln('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        V = b.TRUSTED_TYPES_POLICY, T = V.createHTML("");
      } else
        V === void 0 && (V = bc($, a)), V !== null && typeof T == "string" && (T = V.createHTML(""));
      St && St(b), Ke = b;
    }
  }, zt = Oe({}, [...Na, ...Pa, ...sc]), $t = Oe({}, [...Da, ...lc]), yr = function(b) {
    let w = Y(b);
    (!w || !w.tagName) && (w = {
      namespaceURI: ft,
      tagName: "template"
    });
    const C = ta(b.tagName), X = ta(w.tagName);
    return Mt[b.namespaceURI] ? b.namespaceURI === pt ? w.namespaceURI === nt ? C === "svg" : w.namespaceURI === yt ? C === "svg" && (X === "annotation-xml" || ot[X]) : !!zt[C] : b.namespaceURI === yt ? w.namespaceURI === nt ? C === "math" : w.namespaceURI === pt ? C === "math" && bt[X] : !!$t[C] : b.namespaceURI === nt ? w.namespaceURI === pt && !bt[X] || w.namespaceURI === yt && !ot[X] ? !1 : !$t[C] && (Zt[C] || !zt[C]) : !!(Te === "application/xhtml+xml" && Mt[b.namespaceURI]) : !1;
  }, at = function(b) {
    on(t.removed, {
      element: b
    });
    try {
      Y(b).removeChild(b);
    } catch {
      D(b);
    }
  }, Et = function(b, w) {
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
  }, ar = function(b) {
    let w = null, C = null;
    if (he)
      b = "<remove></remove>" + b;
    else {
      const ke = Ki(b, /^[\r\n\t ]+/);
      C = ke && ke[0];
    }
    Te === "application/xhtml+xml" && ft === nt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const X = V ? V.createHTML(b) : b;
    if (ft === nt)
      try {
        w = new L().parseFromString(X, Te);
      } catch {
      }
    if (!w || !w.documentElement) {
      w = ce.createDocument(ft, "template", null);
      try {
        w.documentElement.innerHTML = Ft ? T : X;
      } catch {
      }
    }
    const ye = w.body || w.documentElement;
    return b && C && ye.insertBefore(r.createTextNode(C), ye.childNodes[0] || null), ft === nt ? Le.call(w, se ? "html" : "body")[0] : se ? w.documentElement : ye;
  }, ir = function(b) {
    return _e.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Ct = function(b) {
    return b instanceof x && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof _) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, tr = function(b) {
    return typeof m == "function" && b instanceof m;
  };
  function Ye(b, w, C) {
    Wn(b, (X) => {
      X.call(t, w, C, Ke);
    });
  }
  const Ut = function(b) {
    let w = null;
    if (Ye(ue.beforeSanitizeElements, b, null), Ct(b))
      return at(b), !0;
    const C = ve(b.nodeName);
    if (Ye(ue.uponSanitizeElement, b, {
      tagName: C,
      allowedTags: oe
    }), b.hasChildNodes() && !tr(b.firstElementChild) && wt(/<[/\w!]/g, b.innerHTML) && wt(/<[/\w!]/g, b.textContent) || b.nodeType === un.progressingInstruction || ie && b.nodeType === un.comment && wt(/<[/\w]/g, b.data))
      return at(b), !0;
    if (!oe[C] || y[C]) {
      if (!y[C] && At(C) && (F.tagNameCheck instanceof RegExp && wt(F.tagNameCheck, C) || F.tagNameCheck instanceof Function && F.tagNameCheck(C)))
        return !1;
      if (ge && !Ge[C]) {
        const X = Y(b) || b.parentNode, ye = H(b) || b.childNodes;
        if (ye && X) {
          const ke = ye.length;
          for (let De = ke - 1; De >= 0; --De) {
            const we = S(ye[De], !0);
            we.__removalCount = (b.__removalCount || 0) + 1, X.insertBefore(we, B(b));
          }
        }
      }
      return at(b), !0;
    }
    return b instanceof p && !yr(b) || (C === "noscript" || C === "noembed" || C === "noframes") && wt(/<\/no(script|embed|frames)/i, b.innerHTML) ? (at(b), !0) : (G && b.nodeType === un.text && (w = b.textContent, Wn([pe, Ie, Ne], (X) => {
      w = sn(w, X, " ");
    }), b.textContent !== w && (on(t.removed, {
      element: b.cloneNode()
    }), b.textContent = w)), Ye(ue.afterSanitizeElements, b, null), !1);
  }, or = function(b, w, C) {
    if (me && (w === "id" || w === "name") && (C in r || C in er))
      return !1;
    if (!(ne && !re[w] && wt(Ce, w)) && !(O && wt(lt, w))) {
      if (!A[w] || re[w]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(At(b) && (F.tagNameCheck instanceof RegExp && wt(F.tagNameCheck, b) || F.tagNameCheck instanceof Function && F.tagNameCheck(b)) && (F.attributeNameCheck instanceof RegExp && wt(F.attributeNameCheck, w) || F.attributeNameCheck instanceof Function && F.attributeNameCheck(w)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          w === "is" && F.allowCustomizedBuiltInElements && (F.tagNameCheck instanceof RegExp && wt(F.tagNameCheck, C) || F.tagNameCheck instanceof Function && F.tagNameCheck(C)))
        ) return !1;
      } else if (!Nt[w] && !wt(Ze, sn(C, Ae, "")) && !((w === "src" || w === "xlink:href" || w === "href") && b !== "script" && nc(C, "data:") === 0 && Me[b]) && !(ee && !wt(Fe, sn(C, Ae, ""))) && C)
        return !1;
    }
    return !0;
  }, At = function(b) {
    return b !== "annotation-xml" && Ki(b, Ue);
  }, sr = function(b) {
    Ye(ue.beforeSanitizeAttributes, b, null);
    const {
      attributes: w
    } = b;
    if (!w || Ct(b))
      return;
    const C = {
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
        namespaceURI: De,
        value: we
      } = ye, Xe = ve(ke);
      let Ve = ke === "value" ? we : ac(we);
      if (C.attrName = Xe, C.attrValue = Ve, C.keepAttr = !0, C.forceKeepAttr = void 0, Ye(ue.uponSanitizeAttribute, b, C), Ve = C.attrValue, st && (Xe === "id" || Xe === "name") && (Et(ke, b), Ve = qe + Ve), ie && wt(/((--!?|])>)|<\/(style|title)/i, Ve)) {
        Et(ke, b);
        continue;
      }
      if (C.forceKeepAttr || (Et(ke, b), !C.keepAttr))
        continue;
      if (!te && wt(/\/>/i, Ve)) {
        Et(ke, b);
        continue;
      }
      G && Wn([pe, Ie, Ne], (cr) => {
        Ve = sn(Ve, cr, " ");
      });
      const et = ve(b.nodeName);
      if (or(et, Xe, Ve)) {
        if (V && typeof $ == "object" && typeof $.getAttributeType == "function" && !De)
          switch ($.getAttributeType(et, Xe)) {
            case "TrustedHTML": {
              Ve = V.createHTML(Ve);
              break;
            }
            case "TrustedScriptURL": {
              Ve = V.createScriptURL(Ve);
              break;
            }
          }
        try {
          De ? b.setAttributeNS(De, ke, Ve) : b.setAttribute(ke, Ve), Ct(b) ? at(b) : Zi(t.removed);
        } catch {
        }
      }
    }
    Ye(ue.afterSanitizeAttributes, b, null);
  }, lr = function b(w) {
    let C = null;
    const X = ir(w);
    for (Ye(ue.beforeSanitizeShadowDOM, w, null); C = X.nextNode(); )
      Ye(ue.uponSanitizeShadowNode, C, null), Ut(C), sr(C), C.content instanceof s && b(C.content);
    Ye(ue.afterSanitizeShadowDOM, w, null);
  };
  return t.sanitize = function(b) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, X = null, ye = null, ke = null;
    if (Ft = !b, Ft && (b = "<!-->"), typeof b != "string" && !tr(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw ln("dirty is not a string, aborting");
      } else
        throw ln("toString is not a function");
    if (!t.isSupported)
      return b;
    if (K || Pt(w), t.removed = [], typeof b == "string" && (q = !1), q) {
      if (b.nodeName) {
        const Xe = ve(b.nodeName);
        if (!oe[Xe] || y[Xe])
          throw ln("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof m)
      C = ar("<!---->"), X = C.ownerDocument.importNode(b, !0), X.nodeType === un.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? C = X : C.appendChild(X);
    else {
      if (!Z && !G && !se && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return V && $e ? V.createHTML(b) : b;
      if (C = ar(b), !C)
        return Z ? null : $e ? T : "";
    }
    C && he && at(C.firstChild);
    const De = ir(q ? b : C);
    for (; ye = De.nextNode(); )
      Ut(ye), sr(ye), ye.content instanceof s && lr(ye.content);
    if (q)
      return b;
    if (Z) {
      if (le)
        for (ke = Pe.call(C.ownerDocument); C.firstChild; )
          ke.appendChild(C.firstChild);
      else
        ke = C;
      return (A.shadowroot || A.shadowrootmode) && (ke = He.call(n, ke, !0)), ke;
    }
    let we = se ? C.outerHTML : C.innerHTML;
    return se && oe["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && wt(gs, C.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + we), G && Wn([pe, Ie, Ne], (Xe) => {
      we = sn(we, Xe, " ");
    }), V && $e ? V.createHTML(we) : we;
  }, t.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pt(b), K = !0;
  }, t.clearConfig = function() {
    Ke = null, K = !1;
  }, t.isValidAttribute = function(b, w, C) {
    Ke || Pt({});
    const X = ve(b), ye = ve(w);
    return or(X, ye, C);
  }, t.addHook = function(b, w) {
    typeof w == "function" && on(ue[b], w);
  }, t.removeHook = function(b, w) {
    if (w !== void 0) {
      const C = tc(ue[b], w);
      return C === -1 ? void 0 : rc(ue[b], C, 1)[0];
    }
    return Zi(ue[b]);
  }, t.removeHooks = function(b) {
    ue[b] = [];
  }, t.removeAllHooks = function() {
    ue = io();
  }, t;
}
var oo = ys();
let Vn = null;
function vc() {
  return Vn || (typeof window < "u" ? Vn = oo(window) : Vn = oo), Vn;
}
const Dr = (e) => ({ __html: vc().sanitize(e) });
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
}, xn = ({ children: e }) => /* @__PURE__ */ M.jsx(M.Fragment, { children: e });
xn.propTypes = {
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node,
    l.string
  ])
};
var bs = { exports: {} };
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
})(bs);
var kc = bs.exports;
const Xt = /* @__PURE__ */ mi(kc);
({
  ...xn.propTypes
});
const vs = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ M.jsx("div", { className: t, ...r, children: /* @__PURE__ */ M.jsx("div", { className: "row", children: e }) });
vs.propTypes = {
  children: xn.propTypes.children
};
({
  ...vs.propTypes
});
xn.propTypes.children, l.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
xn.propTypes.children;
const Sc = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), Fa = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), ws = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.arrayOf(l.string),
    header: l.string,
    body: l.string
  })
}), gi = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var Ir = {}, so;
function xc() {
  if (so) return Ir;
  so = 1;
  var e = ut;
  function t(i) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, g = 1; g < arguments.length; g++) u += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + i + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, s = {};
  function d(i) {
    return r.call(s, i) ? !0 : r.call(a, i) ? !1 : n.test(i) ? s[i] = !0 : (a[i] = !0, !1);
  }
  function m(i, u, g, k, P, R, U) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = k, this.attributeNamespace = P, this.mustUseProperty = g, this.propertyName = i, this.type = u, this.sanitizeURL = R, this.removeEmptyString = U;
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
      var g = "", k, P = 0;
      for (k = u.index; k < i.length; k++) {
        switch (i.charCodeAt(k)) {
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
        P !== k && (g += i.substring(P, k)), P = k + 1, g += u;
      }
      i = P !== k ? g + i.substring(P, k) : g;
    }
    return i;
  }
  var S = /([A-Z])/g, D = /^ms-/, B = Array.isArray;
  function H(i, u) {
    return { insertionMode: i, selectedValue: u };
  }
  function Y(i, u, g) {
    switch (u) {
      case "select":
        return H(1, g.value != null ? g.value : g.defaultValue);
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
    return 4 <= i.insertionMode || i.insertionMode === 0 ? H(1, null) : i;
  }
  var V = /* @__PURE__ */ new Map();
  function T(i, u, g) {
    if (typeof g != "object") throw Error(t(62));
    u = !0;
    for (var k in g) if (r.call(g, k)) {
      var P = g[k];
      if (P != null && typeof P != "boolean" && P !== "") {
        if (k.indexOf("--") === 0) {
          var R = E(k);
          P = E(("" + P).trim());
        } else {
          R = k;
          var U = V.get(R);
          U !== void 0 || (U = E(R.replace(S, "-$1").toLowerCase().replace(D, "-ms-")), V.set(R, U)), R = U, P = typeof P == "number" ? P === 0 || r.call(x, k) ? "" + P : P + "px" : E(("" + P).trim());
        }
        u ? (u = !1, i.push(' style="', R, ":", P)) : i.push(";", R, ":", P);
      }
    }
    u || i.push('"');
  }
  function ce(i, u, g, k) {
    switch (g) {
      case "style":
        T(i, u, k);
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
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (g = u.attributeName, u.type) {
          case 3:
            k && i.push(" ", g, '=""');
            break;
          case 4:
            k === !0 ? i.push(" ", g, '=""') : k !== !1 && i.push(" ", g, '="', E(k), '"');
            break;
          case 5:
            isNaN(k) || i.push(" ", g, '="', E(k), '"');
            break;
          case 6:
            !isNaN(k) && 1 <= k && i.push(" ", g, '="', E(k), '"');
            break;
          default:
            u.sanitizeURL && (k = "" + k), i.push(" ", g, '="', E(k), '"');
        }
      } else if (d(g)) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = g.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        i.push(" ", g, '="', E(k), '"');
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
  function Pe(i) {
    var u = "";
    return e.Children.forEach(i, function(g) {
      g != null && (u += g);
    }), u;
  }
  function Le(i, u, g, k) {
    i.push(pe(g));
    var P = g = null, R;
    for (R in u) if (r.call(u, R)) {
      var U = u[R];
      if (U != null) switch (R) {
        case "children":
          g = U;
          break;
        case "dangerouslySetInnerHTML":
          P = U;
          break;
        default:
          ce(i, k, R, U);
      }
    }
    return i.push(">"), _e(i, P, g), typeof g == "string" ? (i.push(E(g)), null) : g;
  }
  var He = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ue = /* @__PURE__ */ new Map();
  function pe(i) {
    var u = ue.get(i);
    if (u === void 0) {
      if (!He.test(i)) throw Error(t(65, i));
      u = "<" + i, ue.set(i, u);
    }
    return u;
  }
  function Ie(i, u, g, k, P) {
    switch (u) {
      case "select":
        i.push(pe("select"));
        var R = null, U = null;
        for (Se in g) if (r.call(g, Se)) {
          var J = g[Se];
          if (J != null) switch (Se) {
            case "children":
              R = J;
              break;
            case "dangerouslySetInnerHTML":
              U = J;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ce(i, k, Se, J);
          }
        }
        return i.push(">"), _e(i, U, R), R;
      case "option":
        U = P.selectedValue, i.push(pe("option"));
        var de = J = null, be = null, Se = null;
        for (R in g) if (r.call(g, R)) {
          var tt = g[R];
          if (tt != null) switch (R) {
            case "children":
              J = tt;
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
              ce(i, k, R, tt);
          }
        }
        if (U != null) if (g = de !== null ? "" + de : Pe(J), B(U)) {
          for (k = 0; k < U.length; k++)
            if ("" + U[k] === g) {
              i.push(' selected=""');
              break;
            }
        } else "" + U === g && i.push(' selected=""');
        else be && i.push(' selected=""');
        return i.push(">"), _e(i, Se, J), J;
      case "textarea":
        i.push(pe("textarea")), Se = U = R = null;
        for (J in g) if (r.call(g, J) && (de = g[J], de != null)) switch (J) {
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
              i,
              k,
              J,
              de
            );
        }
        if (R === null && U !== null && (R = U), i.push(">"), Se != null) {
          if (R != null) throw Error(t(92));
          if (B(Se) && 1 < Se.length) throw Error(t(93));
          R = "" + Se;
        }
        return typeof R == "string" && R[0] === `
` && i.push(`
`), R !== null && i.push(E("" + R)), null;
      case "input":
        i.push(pe("input")), de = Se = J = R = null;
        for (U in g) if (r.call(g, U) && (be = g[U], be != null)) switch (U) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            de = be;
            break;
          case "defaultValue":
            J = be;
            break;
          case "checked":
            Se = be;
            break;
          case "value":
            R = be;
            break;
          default:
            ce(i, k, U, be);
        }
        return Se !== null ? ce(i, k, "checked", Se) : de !== null && ce(i, k, "checked", de), R !== null ? ce(i, k, "value", R) : J !== null && ce(i, k, "value", J), i.push("/>"), null;
      case "menuitem":
        i.push(pe("menuitem"));
        for (var Wt in g) if (r.call(g, Wt) && (R = g[Wt], R != null)) switch (Wt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ce(i, k, Wt, R);
        }
        return i.push(">"), null;
      case "title":
        i.push(pe("title")), R = null;
        for (tt in g) if (r.call(g, tt) && (U = g[tt], U != null)) switch (tt) {
          case "children":
            R = U;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ce(i, k, tt, U);
        }
        return i.push(">"), R;
      case "listing":
      case "pre":
        i.push(pe(u)), U = R = null;
        for (de in g) if (r.call(g, de) && (J = g[de], J != null)) switch (de) {
          case "children":
            R = J;
            break;
          case "dangerouslySetInnerHTML":
            U = J;
            break;
          default:
            ce(i, k, de, J);
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
        i.push(pe(u));
        for (var Ht in g) if (r.call(g, Ht) && (R = g[Ht], R != null)) switch (Ht) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ce(i, k, Ht, R);
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
        return Le(
          i,
          g,
          u,
          k
        );
      case "html":
        return P.insertionMode === 0 && i.push("<!DOCTYPE html>"), Le(i, g, u, k);
      default:
        if (u.indexOf("-") === -1 && typeof g.is != "string") return Le(i, g, u, k);
        i.push(pe(u)), U = R = null;
        for (be in g) if (r.call(g, be) && (J = g[be], J != null)) switch (be) {
          case "children":
            R = J;
            break;
          case "dangerouslySetInnerHTML":
            U = J;
            break;
          case "style":
            T(i, k, J);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(be) && typeof J != "function" && typeof J != "symbol" && i.push(" ", be, '="', E(J), '"');
        }
        return i.push(">"), _e(i, U, R), R;
    }
  }
  function Ne(i, u, g) {
    if (i.push('<!--$?--><template id="'), g === null) throw Error(t(395));
    return i.push(g), i.push('"></template>');
  }
  function Ce(i, u, g, k) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return i.push('<div hidden id="'), i.push(u.segmentPrefix), u = k.toString(16), i.push(u), i.push('">');
      case 2:
        return i.push('<svg aria-hidden="true" style="display:none" id="'), i.push(u.segmentPrefix), u = k.toString(16), i.push(u), i.push('">');
      case 3:
        return i.push('<math aria-hidden="true" style="display:none" id="'), i.push(u.segmentPrefix), u = k.toString(16), i.push(u), i.push('">');
      case 4:
        return i.push('<table hidden id="'), i.push(u.segmentPrefix), u = k.toString(16), i.push(u), i.push('">');
      case 5:
        return i.push('<table hidden><tbody id="'), i.push(u.segmentPrefix), u = k.toString(16), i.push(u), i.push('">');
      case 6:
        return i.push('<table hidden><tr id="'), i.push(u.segmentPrefix), u = k.toString(16), i.push(u), i.push('">');
      case 7:
        return i.push('<table hidden><colgroup id="'), i.push(u.segmentPrefix), u = k.toString(16), i.push(u), i.push('">');
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
  function Ae(i) {
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
  function Ue(i, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: i };
  }
  function Ze(i, u, g, k) {
    return g.generateStaticMarkup ? (i.push(E(u)), !1) : (u === "" ? i = k : (k && i.push("<!-- -->"), i.push(E(u)), i = !0), i);
  }
  var oe = Object.assign, z = Symbol.for("react.element"), A = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), O = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), K = Symbol.for("react.debug_trace_mode"), he = Symbol.for("react.legacy_hidden"), Z = Symbol.for("react.default_value"), le = Symbol.iterator;
  function $e(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case j:
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
    if (typeof i == "object") switch (i.$$typeof) {
      case O:
        return (i.displayName || "Context") + ".Consumer";
      case re:
        return (i._context.displayName || "Context") + ".Provider";
      case ne:
        var u = i.render;
        return i = i.displayName, i || (i = u.displayName || u.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case G:
        return u = i.displayName || null, u !== null ? u : $e(i.type) || "Memo";
      case ie:
        u = i._payload, i = i._init;
        try {
          return $e(i(u));
        } catch {
        }
    }
    return null;
  }
  var me = {};
  function st(i, u) {
    if (i = i.contextTypes, !i) return me;
    var g = {}, k;
    for (k in i) g[k] = u[k];
    return g;
  }
  var qe = null;
  function ge(i, u) {
    if (i !== u) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var g = u.parent;
      if (i === null) {
        if (g !== null) throw Error(t(401));
      } else {
        if (g === null) throw Error(t(401));
        ge(i, g);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function q(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && q(i);
  }
  function ae(i) {
    var u = i.parent;
    u !== null && ae(u), i.context._currentValue2 = i.value;
  }
  function Ge(i, u) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === u.depth ? ge(i, u) : Ge(i, u);
  }
  function dt(i, u) {
    var g = u.parent;
    if (g === null) throw Error(t(402));
    i.depth === g.depth ? ge(i, g) : dt(i, g), u.context._currentValue2 = u.value;
  }
  function Me(i) {
    var u = qe;
    u !== i && (u === null ? ae(i) : i === null ? q(u) : u.depth === i.depth ? ge(u, i) : u.depth > i.depth ? Ge(u, i) : dt(u, i), qe = i);
  }
  var Jt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, u) {
    i = i._reactInternals, i.queue !== null && i.queue.push(u);
  }, enqueueReplaceState: function(i, u) {
    i = i._reactInternals, i.replace = !0, i.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function Nt(i, u, g, k) {
    var P = i.state !== void 0 ? i.state : null;
    i.updater = Jt, i.props = g, i.state = P;
    var R = { queue: [], replace: !1 };
    i._reactInternals = R;
    var U = u.contextType;
    if (i.context = typeof U == "object" && U !== null ? U._currentValue2 : k, U = u.getDerivedStateFromProps, typeof U == "function" && (U = U(g, P), P = U == null ? P : oe({}, P, U), i.state = P), typeof u.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && Jt.enqueueReplaceState(i, i.state, null), R.queue !== null && 0 < R.queue.length) if (u = R.queue, U = R.replace, R.queue = null, R.replace = !1, U && u.length === 1) i.state = u[0];
    else {
      for (R = U ? u[0] : i.state, P = !0, U = U ? 1 : 0; U < u.length; U++) {
        var J = u[U];
        J = typeof J == "function" ? J.call(i, R, g, k) : J, J != null && (P ? (P = !1, R = oe({}, R, J)) : oe(R, J));
      }
      i.state = R;
    }
    else R.queue = null;
  }
  var nr = { id: 1, overflow: "" };
  function yt(i, u, g) {
    var k = i.id;
    i = i.overflow;
    var P = 32 - pt(k) - 1;
    k &= ~(1 << P), g += 1;
    var R = 32 - pt(u) + P;
    if (30 < R) {
      var U = P - P % 5;
      return R = (k & (1 << U) - 1).toString(32), k >>= U, P -= U, { id: 1 << 32 - pt(u) + P | g << P | k, overflow: R + i };
    }
    return { id: 1 << R | g << P | k, overflow: i };
  }
  var pt = Math.clz32 ? Math.clz32 : Ft, nt = Math.log, ft = Math.LN2;
  function Ft(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (nt(i) / ft | 0) | 0;
  }
  function Mt(i, u) {
    return i === u && (i !== 0 || 1 / i === 1 / u) || i !== i && u !== u;
  }
  var Tr = typeof Object.is == "function" ? Object.is : Mt, ot = null, bt = null, Zt = null, Te = null, jt = !1, Kt = !1, ve = 0, Ke = null, er = 0;
  function vt() {
    if (ot === null) throw Error(t(321));
    return ot;
  }
  function Pt() {
    if (0 < er) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function zt() {
    return Te === null ? Zt === null ? (jt = !1, Zt = Te = Pt()) : (jt = !0, Te = Zt) : Te.next === null ? (jt = !1, Te = Te.next = Pt()) : (jt = !0, Te = Te.next), Te;
  }
  function $t() {
    bt = ot = null, Kt = !1, Zt = null, er = 0, Te = Ke = null;
  }
  function yr(i, u) {
    return typeof u == "function" ? u(i) : u;
  }
  function at(i, u, g) {
    if (ot = vt(), Te = zt(), jt) {
      var k = Te.queue;
      if (u = k.dispatch, Ke !== null && (g = Ke.get(k), g !== void 0)) {
        Ke.delete(k), k = Te.memoizedState;
        do
          k = i(k, g.action), g = g.next;
        while (g !== null);
        return Te.memoizedState = k, [k, u];
      }
      return [Te.memoizedState, u];
    }
    return i = i === yr ? typeof u == "function" ? u() : u : g !== void 0 ? g(u) : u, Te.memoizedState = i, i = Te.queue = { last: null, dispatch: null }, i = i.dispatch = ar.bind(null, ot, i), [Te.memoizedState, i];
  }
  function Et(i, u) {
    if (ot = vt(), Te = zt(), u = u === void 0 ? null : u, Te !== null) {
      var g = Te.memoizedState;
      if (g !== null && u !== null) {
        var k = g[1];
        e: if (k === null) k = !1;
        else {
          for (var P = 0; P < k.length && P < u.length; P++) if (!Tr(u[P], k[P])) {
            k = !1;
            break e;
          }
          k = !0;
        }
        if (k) return g[0];
      }
    }
    return i = i(), Te.memoizedState = [i, u], i;
  }
  function ar(i, u, g) {
    if (25 <= er) throw Error(t(301));
    if (i === ot) if (Kt = !0, i = { action: g, next: null }, Ke === null && (Ke = /* @__PURE__ */ new Map()), g = Ke.get(u), g === void 0) Ke.set(u, i);
    else {
      for (u = g; u.next !== null; ) u = u.next;
      u.next = i;
    }
  }
  function ir() {
    throw Error(t(394));
  }
  function Ct() {
  }
  var tr = { readContext: function(i) {
    return i._currentValue2;
  }, useContext: function(i) {
    return vt(), i._currentValue2;
  }, useMemo: Et, useReducer: at, useRef: function(i) {
    ot = vt(), Te = zt();
    var u = Te.memoizedState;
    return u === null ? (i = { current: i }, Te.memoizedState = i) : u;
  }, useState: function(i) {
    return at(yr, i);
  }, useInsertionEffect: Ct, useLayoutEffect: function() {
  }, useCallback: function(i, u) {
    return Et(function() {
      return i;
    }, u);
  }, useImperativeHandle: Ct, useEffect: Ct, useDebugValue: Ct, useDeferredValue: function(i) {
    return vt(), i;
  }, useTransition: function() {
    return vt(), [
      !1,
      ir
    ];
  }, useId: function() {
    var i = bt.treeContext, u = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - pt(i) - 1)).toString(32) + u;
    var g = Ye;
    if (g === null) throw Error(t(404));
    return u = ve++, i = ":" + g.idPrefix + "R" + i, 0 < u && (i += "H" + u.toString(32)), i + ":";
  }, useMutableSource: function(i, u) {
    return vt(), u(i._source);
  }, useSyncExternalStore: function(i, u, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, Ye = null, Ut = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function or(i) {
    return console.error(i), null;
  }
  function At() {
  }
  function sr(i, u, g, k, P, R, U, J, de) {
    var be = [], Se = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: k, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Se, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: P === void 0 ? or : P, onAllReady: At, onShellReady: U === void 0 ? At : U, onShellError: At, onFatalError: At }, g = b(u, 0, null, g, !1, !1), g.parentFlushed = !0, i = lr(u, i, null, g, Se, me, null, nr), be.push(i), u;
  }
  function lr(i, u, g, k, P, R, U, J) {
    i.allPendingTasks++, g === null ? i.pendingRootTasks++ : g.pendingTasks++;
    var de = { node: u, ping: function() {
      var be = i.pingedTasks;
      be.push(de), be.length === 1 && Cn(i);
    }, blockedBoundary: g, blockedSegment: k, abortSet: P, legacyContext: R, context: U, treeContext: J };
    return P.add(de), de;
  }
  function b(i, u, g, k, P, R) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: k, boundary: g, lastPushedText: P, textEmbedded: R };
  }
  function w(i, u) {
    if (i = i.onError(u), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function C(i, u) {
    var g = i.onShellError;
    g(u), g = i.onFatalError, g(u), i.destination !== null ? (i.status = 2, i.destination.destroy(u)) : (i.status = 1, i.fatalError = u);
  }
  function X(i, u, g, k, P) {
    for (ot = {}, bt = u, ve = 0, i = g(k, P); Kt; ) Kt = !1, ve = 0, er += 1, Te = null, i = g(k, P);
    return $t(), i;
  }
  function ye(i, u, g, k) {
    var P = g.render(), R = k.childContextTypes;
    if (R != null) {
      var U = u.legacyContext;
      if (typeof g.getChildContext != "function") k = U;
      else {
        g = g.getChildContext();
        for (var J in g) if (!(J in R)) throw Error(t(108, $e(k) || "Unknown", J));
        k = oe({}, U, g);
      }
      u.legacyContext = k, we(i, u, P), u.legacyContext = U;
    } else we(i, u, P);
  }
  function ke(i, u) {
    if (i && i.defaultProps) {
      u = oe({}, u), i = i.defaultProps;
      for (var g in i) u[g] === void 0 && (u[g] = i[g]);
      return u;
    }
    return u;
  }
  function De(i, u, g, k, P) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      P = st(g, u.legacyContext);
      var R = g.contextType;
      R = new g(k, typeof R == "object" && R !== null ? R._currentValue2 : P), Nt(R, g, k, P), ye(i, u, R, g);
    } else {
      R = st(g, u.legacyContext), P = X(i, u, g, k, R);
      var U = ve !== 0;
      if (typeof P == "object" && P !== null && typeof P.render == "function" && P.$$typeof === void 0) Nt(P, g, k, R), ye(i, u, P, g);
      else if (U) {
        k = u.treeContext, u.treeContext = yt(k, 1, 0);
        try {
          we(i, u, P);
        } finally {
          u.treeContext = k;
        }
      } else we(i, u, P);
    }
    else if (typeof g == "string") {
      switch (P = u.blockedSegment, R = Ie(P.chunks, g, k, i.responseState, P.formatContext), P.lastPushedText = !1, U = P.formatContext, P.formatContext = Y(U, g, k), Ve(i, u, R), P.formatContext = U, g) {
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
          P.chunks.push("</", g, ">");
      }
      P.lastPushedText = !1;
    } else {
      switch (g) {
        case he:
        case K:
        case F:
        case y:
        case j:
          we(i, u, k.children);
          return;
        case te:
          we(i, u, k.children);
          return;
        case se:
          throw Error(t(343));
        case ee:
          e: {
            g = u.blockedBoundary, P = u.blockedSegment, R = k.fallback, k = k.children, U = /* @__PURE__ */ new Set();
            var J = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: U, errorDigest: null }, de = b(i, P.chunks.length, J, P.formatContext, !1, !1);
            P.children.push(de), P.lastPushedText = !1;
            var be = b(i, 0, null, P.formatContext, !1, !1);
            be.parentFlushed = !0, u.blockedBoundary = J, u.blockedSegment = be;
            try {
              if (Ve(
                i,
                u,
                k
              ), i.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, Bt(J, be), J.pendingTasks === 0) break e;
            } catch (Se) {
              be.status = 4, J.forceClientRender = !0, J.errorDigest = w(i, Se);
            } finally {
              u.blockedBoundary = g, u.blockedSegment = P;
            }
            u = lr(i, R, g, de, U, u.legacyContext, u.context, u.treeContext), i.pingedTasks.push(u);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case ne:
          if (k = X(i, u, g.render, k, P), ve !== 0) {
            g = u.treeContext, u.treeContext = yt(g, 1, 0);
            try {
              we(i, u, k);
            } finally {
              u.treeContext = g;
            }
          } else we(i, u, k);
          return;
        case G:
          g = g.type, k = ke(g, k), De(i, u, g, k, P);
          return;
        case re:
          if (P = k.children, g = g._context, k = k.value, R = g._currentValue2, g._currentValue2 = k, U = qe, qe = k = { parent: U, depth: U === null ? 0 : U.depth + 1, context: g, parentValue: R, value: k }, u.context = k, we(i, u, P), i = qe, i === null) throw Error(t(403));
          k = i.parentValue, i.context._currentValue2 = k === Z ? i.context._defaultValue : k, i = qe = i.parent, u.context = i;
          return;
        case O:
          k = k.children, k = k(g._currentValue2), we(i, u, k);
          return;
        case ie:
          P = g._init, g = P(g._payload), k = ke(g, k), De(
            i,
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
  function we(i, u, g) {
    if (u.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case z:
          De(i, u, g.type, g.props, g.ref);
          return;
        case A:
          throw Error(t(257));
        case ie:
          var k = g._init;
          g = k(g._payload), we(i, u, g);
          return;
      }
      if (B(g)) {
        Xe(i, u, g);
        return;
      }
      if (g === null || typeof g != "object" ? k = null : (k = le && g[le] || g["@@iterator"], k = typeof k == "function" ? k : null), k && (k = k.call(g))) {
        if (g = k.next(), !g.done) {
          var P = [];
          do
            P.push(g.value), g = k.next();
          while (!g.done);
          Xe(i, u, P);
        }
        return;
      }
      throw i = Object.prototype.toString.call(g), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : i));
    }
    typeof g == "string" ? (k = u.blockedSegment, k.lastPushedText = Ze(u.blockedSegment.chunks, g, i.responseState, k.lastPushedText)) : typeof g == "number" && (k = u.blockedSegment, k.lastPushedText = Ze(u.blockedSegment.chunks, "" + g, i.responseState, k.lastPushedText));
  }
  function Xe(i, u, g) {
    for (var k = g.length, P = 0; P < k; P++) {
      var R = u.treeContext;
      u.treeContext = yt(R, k, P);
      try {
        Ve(i, u, g[P]);
      } finally {
        u.treeContext = R;
      }
    }
  }
  function Ve(i, u, g) {
    var k = u.blockedSegment.formatContext, P = u.legacyContext, R = u.context;
    try {
      return we(i, u, g);
    } catch (de) {
      if ($t(), typeof de == "object" && de !== null && typeof de.then == "function") {
        g = de;
        var U = u.blockedSegment, J = b(i, U.chunks.length, null, U.formatContext, U.lastPushedText, !0);
        U.children.push(J), U.lastPushedText = !1, i = lr(i, u.node, u.blockedBoundary, J, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, g.then(i, i), u.blockedSegment.formatContext = k, u.legacyContext = P, u.context = R, Me(R);
      } else throw u.blockedSegment.formatContext = k, u.legacyContext = P, u.context = R, Me(R), de;
    }
  }
  function et(i) {
    var u = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, br(this, u, i);
  }
  function cr(i, u, g) {
    var k = i.blockedBoundary;
    i.blockedSegment.status = 3, k === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (k.pendingTasks--, k.forceClientRender || (k.forceClientRender = !0, i = g === void 0 ? Error(t(432)) : g, k.errorDigest = u.onError(i), k.parentFlushed && u.clientRenderedBoundaries.push(k)), k.fallbackAbortableTasks.forEach(function(P) {
      return cr(P, u, g);
    }), k.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (k = u.onAllReady, k()));
  }
  function Bt(i, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var g = u.children[0];
      g.id = u.id, g.parentFlushed = !0, g.status === 1 && Bt(i, g);
    } else i.completedSegments.push(u);
  }
  function br(i, u, g) {
    if (u === null) {
      if (g.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = g;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = At, u = i.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && Bt(u, g), u.parentFlushed && i.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(et, i), u.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (Bt(u, g), u.completedSegments.length === 1 && u.parentFlushed && i.partialBoundaries.push(u)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Cn(i) {
    if (i.status !== 2) {
      var u = qe, g = Ut.current;
      Ut.current = tr;
      var k = Ye;
      Ye = i.responseState;
      try {
        var P = i.pingedTasks, R;
        for (R = 0; R < P.length; R++) {
          var U = P[R], J = i, de = U.blockedSegment;
          if (de.status === 0) {
            Me(U.context);
            try {
              we(J, U, U.node), J.responseState.generateStaticMarkup || de.lastPushedText && de.textEmbedded && de.chunks.push("<!-- -->"), U.abortSet.delete(U), de.status = 1, br(J, U.blockedBoundary, de);
            } catch (Ot) {
              if ($t(), typeof Ot == "object" && Ot !== null && typeof Ot.then == "function") {
                var be = U.ping;
                Ot.then(be, be);
              } else {
                U.abortSet.delete(U), de.status = 4;
                var Se = U.blockedBoundary, tt = Ot, Wt = w(J, tt);
                if (Se === null ? C(J, tt) : (Se.pendingTasks--, Se.forceClientRender || (Se.forceClientRender = !0, Se.errorDigest = Wt, Se.parentFlushed && J.clientRenderedBoundaries.push(Se))), J.allPendingTasks--, J.allPendingTasks === 0) {
                  var Ht = J.onAllReady;
                  Ht();
                }
              }
            } finally {
            }
          }
        }
        P.splice(0, R), i.destination !== null && Mr(i, i.destination);
      } catch (Ot) {
        w(i, Ot), C(i, Ot);
      } finally {
        Ye = k, Ut.current = g, g === tr && Me(u);
      }
    }
  }
  function Er(i, u, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var k = g.id = i.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, i = i.responseState, u.push('<template id="'), u.push(i.placeholderPrefix), i = k.toString(16), u.push(i), u.push('"></template>');
      case 1:
        g.status = 2;
        var P = !0;
        k = g.chunks;
        var R = 0;
        g = g.children;
        for (var U = 0; U < g.length; U++) {
          for (P = g[U]; R < P.index; R++) u.push(k[R]);
          P = Cr(i, u, P);
        }
        for (; R < k.length - 1; R++) u.push(k[R]);
        return R < k.length && (P = u.push(k[R])), P;
      default:
        throw Error(t(390));
    }
  }
  function Cr(i, u, g) {
    var k = g.boundary;
    if (k === null) return Er(i, u, g);
    if (k.parentFlushed = !0, k.forceClientRender) return i.responseState.generateStaticMarkup || (k = k.errorDigest, u.push("<!--$!-->"), u.push("<template"), k && (u.push(' data-dgst="'), k = E(k), u.push(k), u.push('"')), u.push("></template>")), Er(i, u, g), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
    if (0 < k.pendingTasks) {
      k.rootSegmentID = i.nextSegmentId++, 0 < k.completedSegments.length && i.partialBoundaries.push(k);
      var P = i.responseState, R = P.nextSuspenseID++;
      return P = P.boundaryPrefix + R.toString(16), k = k.id = P, Ne(u, i.responseState, k), Er(i, u, g), u.push("<!--/$-->");
    }
    if (k.byteSize > i.progressiveChunkSize) return k.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(k), Ne(u, i.responseState, k.id), Er(i, u, g), u.push("<!--/$-->");
    if (i.responseState.generateStaticMarkup || u.push("<!--$-->"), g = k.completedSegments, g.length !== 1) throw Error(t(391));
    return Cr(i, u, g[0]), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
  }
  function Yr(i, u, g) {
    return Ce(u, i.responseState, g.formatContext, g.id), Cr(i, u, g), lt(u, g.formatContext);
  }
  function Xr(i, u, g) {
    for (var k = g.completedSegments, P = 0; P < k.length; P++) Qr(i, u, g, k[P]);
    if (k.length = 0, i = i.responseState, k = g.id, g = g.rootSegmentID, u.push(i.startInlineScript), i.sentCompleteBoundaryFunction ? u.push('$RC("') : (i.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), k === null) throw Error(t(395));
    return g = g.toString(16), u.push(k), u.push('","'), u.push(i.segmentPrefix), u.push(g), u.push('")<\/script>');
  }
  function Qr(i, u, g, k) {
    if (k.status === 2) return !0;
    var P = k.id;
    if (P === -1) {
      if ((k.id = g.rootSegmentID) === -1) throw Error(t(392));
      return Yr(i, u, k);
    }
    return Yr(i, u, k), i = i.responseState, u.push(i.startInlineScript), i.sentCompleteSegmentFunction ? u.push('$RS("') : (i.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(i.segmentPrefix), P = P.toString(16), u.push(P), u.push('","'), u.push(i.placeholderPrefix), u.push(P), u.push('")<\/script>');
  }
  function Mr(i, u) {
    try {
      var g = i.completedRootSegment;
      if (g !== null && i.pendingRootTasks === 0) {
        Cr(i, u, g), i.completedRootSegment = null;
        var k = i.responseState.bootstrapChunks;
        for (g = 0; g < k.length - 1; g++) u.push(k[g]);
        g < k.length && u.push(k[g]);
      }
      var P = i.clientRenderedBoundaries, R;
      for (R = 0; R < P.length; R++) {
        var U = P[R];
        k = u;
        var J = i.responseState, de = U.id, be = U.errorDigest, Se = U.errorMessage, tt = U.errorComponentStack;
        if (k.push(J.startInlineScript), J.sentClientRenderFunction ? k.push('$RX("') : (J.sentClientRenderFunction = !0, k.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), de === null) throw Error(t(395));
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
          i.destination = null, R++, P.splice(0, R);
          return;
        }
      }
      P.splice(0, R);
      var Ar = i.completedBoundaries;
      for (R = 0; R < Ar.length; R++) if (!Xr(i, u, Ar[R])) {
        i.destination = null, R++, Ar.splice(0, R);
        return;
      }
      Ar.splice(0, R);
      var ur = i.partialBoundaries;
      for (R = 0; R < ur.length; R++) {
        var Zr = ur[R];
        e: {
          P = i, U = u;
          var Or = Zr.completedSegments;
          for (J = 0; J < Or.length; J++) if (!Qr(P, U, Zr, Or[J])) {
            J++, Or.splice(0, J);
            var Rn = !1;
            break e;
          }
          Or.splice(0, J), Rn = !0;
        }
        if (!Rn) {
          i.destination = null, R++, ur.splice(0, R);
          return;
        }
      }
      ur.splice(0, R);
      var vr = i.completedBoundaries;
      for (R = 0; R < vr.length; R++) if (!Xr(i, u, vr[R])) {
        i.destination = null, R++, vr.splice(0, R);
        return;
      }
      vr.splice(0, R);
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function An(i, u) {
    try {
      var g = i.abortableTasks;
      g.forEach(function(k) {
        return cr(k, i, u);
      }), g.clear(), i.destination !== null && Mr(i, i.destination);
    } catch (k) {
      w(i, k), C(i, k);
    }
  }
  function On() {
  }
  function Jr(i, u, g, k) {
    var P = !1, R = null, U = "", J = { push: function(be) {
      return be !== null && (U += be), !0;
    }, destroy: function(be) {
      P = !0, R = be;
    } }, de = !1;
    if (i = sr(i, Ue(g, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, On, void 0, function() {
      de = !0;
    }), Cn(i), An(i, k), i.status === 1) i.status = 2, J.destroy(i.fatalError);
    else if (i.status !== 2 && i.destination === null) {
      i.destination = J;
      try {
        Mr(i, J);
      } catch (be) {
        w(i, be), C(i, be);
      }
    }
    if (P) throw R;
    if (!de) throw Error(t(426));
    return U;
  }
  return Ir.renderToNodeStream = function() {
    throw Error(t(207));
  }, Ir.renderToStaticMarkup = function(i, u) {
    return Jr(i, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ir.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Ir.renderToString = function(i, u) {
    return Jr(i, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ir.version = "18.3.1", Ir;
}
var qn = {}, lo;
function _c() {
  if (lo) return qn;
  lo = 1;
  var e = ut;
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
  function S(o) {
    return x.call(E, o) ? !0 : x.call($, o) ? !1 : L.test(o) ? E[o] = !0 : ($[o] = !0, !1);
  }
  function D(o, c, h, v, N, I, W) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = v, this.attributeNamespace = N, this.mustUseProperty = h, this.propertyName = o, this.type = c, this.sanitizeURL = I, this.removeEmptyString = W;
  }
  var B = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    B[o] = new D(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var c = o[0];
    B[c] = new D(c, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    B[o] = new D(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    B[o] = new D(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    B[o] = new D(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    B[o] = new D(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    B[o] = new D(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    B[o] = new D(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    B[o] = new D(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var H = /[\-:]([a-z])/g;
  function Y(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var c = o.replace(
      H,
      Y
    );
    B[c] = new D(c, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var c = o.replace(H, Y);
    B[c] = new D(c, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var c = o.replace(H, Y);
    B[c] = new D(c, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    B[o] = new D(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), B.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    B[o] = new D(o, 1, !1, o.toLowerCase(), null, !0, !0);
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
      var h = "", v, N = 0;
      for (v = c.index; v < o.length; v++) {
        switch (o.charCodeAt(v)) {
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
        N !== v && (h += o.substring(N, v)), N = v + 1, h += c;
      }
      o = N !== v ? h + o.substring(N, v) : h;
    }
    return o;
  }
  var Pe = /([A-Z])/g, Le = /^ms-/, He = Array.isArray, ue = f("<script>"), pe = f("<\/script>"), Ie = f('<script src="'), Ne = f('<script type="module" src="'), Ce = f('" async=""><\/script>'), lt = /(<\/|<)(s)(cript)/gi;
  function Fe(o, c, h, v) {
    return "" + c + (h === "s" ? "\\u0073" : "\\u0053") + v;
  }
  function Ae(o, c, h, v, N) {
    o = o === void 0 ? "" : o, c = c === void 0 ? ue : f('<script nonce="' + _e(c) + '">');
    var I = [];
    if (h !== void 0 && I.push(c, p(("" + h).replace(lt, Fe)), pe), v !== void 0) for (h = 0; h < v.length; h++) I.push(Ie, p(_e(v[h])), Ce);
    if (N !== void 0) for (v = 0; v < N.length; v++) I.push(Ne, p(_e(N[v])), Ce);
    return { bootstrapChunks: I, startInlineScript: c, placeholderPrefix: f(o + "P:"), segmentPrefix: f(o + "S:"), boundaryPrefix: o + "B:", idPrefix: o, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Ue(o, c) {
    return { insertionMode: o, selectedValue: c };
  }
  function Ze(o) {
    return Ue(o === "http://www.w3.org/2000/svg" ? 2 : o === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function oe(o, c, h) {
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
    return 4 <= o.insertionMode || o.insertionMode === 0 ? Ue(1, null) : o;
  }
  var z = f("<!-- -->");
  function A(o, c, h, v) {
    return c === "" ? v : (v && o.push(z), o.push(p(_e(c))), !0);
  }
  var j = /* @__PURE__ */ new Map(), F = f(' style="'), y = f(":"), re = f(";");
  function O(o, c, h) {
    if (typeof h != "object") throw Error(t(62));
    c = !0;
    for (var v in h) if (x.call(h, v)) {
      var N = h[v];
      if (N != null && typeof N != "boolean" && N !== "") {
        if (v.indexOf("--") === 0) {
          var I = p(_e(v));
          N = p(_e(("" + N).trim()));
        } else {
          I = v;
          var W = j.get(I);
          W !== void 0 || (W = f(_e(I.replace(Pe, "-$1").toLowerCase().replace(Le, "-ms-"))), j.set(I, W)), I = W, N = typeof N == "number" ? N === 0 || x.call(V, v) ? p("" + N) : p(N + "px") : p(_e(("" + N).trim()));
        }
        c ? (c = !1, o.push(F, I, y, N)) : o.push(re, I, y, N);
      }
    }
    c || o.push(te);
  }
  var ne = f(" "), ee = f('="'), te = f('"'), G = f('=""');
  function ie(o, c, h, v) {
    switch (h) {
      case "style":
        O(o, c, v);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < h.length) || h[0] !== "o" && h[0] !== "O" || h[1] !== "n" && h[1] !== "N") {
      if (c = B.hasOwnProperty(h) ? B[h] : null, c !== null) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (h = p(c.attributeName), c.type) {
          case 3:
            v && o.push(ne, h, G);
            break;
          case 4:
            v === !0 ? o.push(ne, h, G) : v !== !1 && o.push(ne, h, ee, p(_e(v)), te);
            break;
          case 5:
            isNaN(v) || o.push(ne, h, ee, p(_e(v)), te);
            break;
          case 6:
            !isNaN(v) && 1 <= v && o.push(ne, h, ee, p(_e(v)), te);
            break;
          default:
            c.sanitizeURL && (v = "" + v), o.push(ne, h, ee, p(_e(v)), te);
        }
      } else if (S(h)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = h.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        o.push(ne, p(h), ee, p(_e(v)), te);
      }
    }
  }
  var se = f(">"), K = f("/>");
  function he(o, c, h) {
    if (c != null) {
      if (h != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && o.push(p("" + c));
    }
  }
  function Z(o) {
    var c = "";
    return e.Children.forEach(o, function(h) {
      h != null && (c += h);
    }), c;
  }
  var le = f(' selected=""');
  function $e(o, c, h, v) {
    o.push(ge(h));
    var N = h = null, I;
    for (I in c) if (x.call(c, I)) {
      var W = c[I];
      if (W != null) switch (I) {
        case "children":
          h = W;
          break;
        case "dangerouslySetInnerHTML":
          N = W;
          break;
        default:
          ie(o, v, I, W);
      }
    }
    return o.push(se), he(o, N, h), typeof h == "string" ? (o.push(p(_e(h))), null) : h;
  }
  var me = f(`
`), st = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, qe = /* @__PURE__ */ new Map();
  function ge(o) {
    var c = qe.get(o);
    if (c === void 0) {
      if (!st.test(o)) throw Error(t(65, o));
      c = f("<" + o), qe.set(o, c);
    }
    return c;
  }
  var q = f("<!DOCTYPE html>");
  function ae(o, c, h, v, N) {
    switch (c) {
      case "select":
        o.push(ge("select"));
        var I = null, W = null;
        for (xe in h) if (x.call(h, xe)) {
          var Q = h[xe];
          if (Q != null) switch (xe) {
            case "children":
              I = Q;
              break;
            case "dangerouslySetInnerHTML":
              W = Q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ie(o, v, xe, Q);
          }
        }
        return o.push(se), he(o, W, I), I;
      case "option":
        W = N.selectedValue, o.push(ge("option"));
        var fe = Q = null, Ee = null, xe = null;
        for (I in h) if (x.call(h, I)) {
          var Je = h[I];
          if (Je != null) switch (I) {
            case "children":
              Q = Je;
              break;
            case "selected":
              Ee = Je;
              break;
            case "dangerouslySetInnerHTML":
              xe = Je;
              break;
            case "value":
              fe = Je;
            default:
              ie(o, v, I, Je);
          }
        }
        if (W != null) if (h = fe !== null ? "" + fe : Z(Q), He(W)) {
          for (v = 0; v < W.length; v++)
            if ("" + W[v] === h) {
              o.push(le);
              break;
            }
        } else "" + W === h && o.push(le);
        else Ee && o.push(le);
        return o.push(se), he(o, xe, Q), Q;
      case "textarea":
        o.push(ge("textarea")), xe = W = I = null;
        for (Q in h) if (x.call(h, Q) && (fe = h[Q], fe != null)) switch (Q) {
          case "children":
            xe = fe;
            break;
          case "value":
            I = fe;
            break;
          case "defaultValue":
            W = fe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ie(o, v, Q, fe);
        }
        if (I === null && W !== null && (I = W), o.push(se), xe != null) {
          if (I != null) throw Error(t(92));
          if (He(xe) && 1 < xe.length) throw Error(t(93));
          I = "" + xe;
        }
        return typeof I == "string" && I[0] === `
` && o.push(me), I !== null && o.push(p(_e("" + I))), null;
      case "input":
        o.push(ge("input")), fe = xe = Q = I = null;
        for (W in h) if (x.call(h, W) && (Ee = h[W], Ee != null)) switch (W) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            fe = Ee;
            break;
          case "defaultValue":
            Q = Ee;
            break;
          case "checked":
            xe = Ee;
            break;
          case "value":
            I = Ee;
            break;
          default:
            ie(o, v, W, Ee);
        }
        return xe !== null ? ie(
          o,
          v,
          "checked",
          xe
        ) : fe !== null && ie(o, v, "checked", fe), I !== null ? ie(o, v, "value", I) : Q !== null && ie(o, v, "value", Q), o.push(K), null;
      case "menuitem":
        o.push(ge("menuitem"));
        for (var It in h) if (x.call(h, It) && (I = h[It], I != null)) switch (It) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ie(o, v, It, I);
        }
        return o.push(se), null;
      case "title":
        o.push(ge("title")), I = null;
        for (Je in h) if (x.call(h, Je) && (W = h[Je], W != null)) switch (Je) {
          case "children":
            I = W;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ie(o, v, Je, W);
        }
        return o.push(se), I;
      case "listing":
      case "pre":
        o.push(ge(c)), W = I = null;
        for (fe in h) if (x.call(h, fe) && (Q = h[fe], Q != null)) switch (fe) {
          case "children":
            I = Q;
            break;
          case "dangerouslySetInnerHTML":
            W = Q;
            break;
          default:
            ie(o, v, fe, Q);
        }
        if (o.push(se), W != null) {
          if (I != null) throw Error(t(60));
          if (typeof W != "object" || !("__html" in W)) throw Error(t(61));
          h = W.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? o.push(me, p(h)) : o.push(p("" + h)));
        }
        return typeof I == "string" && I[0] === `
` && o.push(me), I;
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
        o.push(ge(c));
        for (var Vt in h) if (x.call(h, Vt) && (I = h[Vt], I != null)) switch (Vt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            ie(o, v, Vt, I);
        }
        return o.push(K), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return $e(o, h, c, v);
      case "html":
        return N.insertionMode === 0 && o.push(q), $e(o, h, c, v);
      default:
        if (c.indexOf("-") === -1 && typeof h.is != "string") return $e(o, h, c, v);
        o.push(ge(c)), W = I = null;
        for (Ee in h) if (x.call(h, Ee) && (Q = h[Ee], Q != null)) switch (Ee) {
          case "children":
            I = Q;
            break;
          case "dangerouslySetInnerHTML":
            W = Q;
            break;
          case "style":
            O(o, v, Q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            S(Ee) && typeof Q != "function" && typeof Q != "symbol" && o.push(ne, p(Ee), ee, p(_e(Q)), te);
        }
        return o.push(se), he(o, W, I), I;
    }
  }
  var Ge = f("</"), dt = f(">"), Me = f('<template id="'), Jt = f('"></template>'), Nt = f("<!--$-->"), nr = f('<!--$?--><template id="'), yt = f('"></template>'), pt = f("<!--$!-->"), nt = f("<!--/$-->"), ft = f("<template"), Ft = f('"'), Mt = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var Tr = f("></template>");
  function ot(o, c, h) {
    if (a(o, nr), h === null) throw Error(t(395));
    return a(o, h), s(o, yt);
  }
  var bt = f('<div hidden id="'), Zt = f('">'), Te = f("</div>"), jt = f('<svg aria-hidden="true" style="display:none" id="'), Kt = f('">'), ve = f("</svg>"), Ke = f('<math aria-hidden="true" style="display:none" id="'), er = f('">'), vt = f("</math>"), Pt = f('<table hidden id="'), zt = f('">'), $t = f("</table>"), yr = f('<table hidden><tbody id="'), at = f('">'), Et = f("</tbody></table>"), ar = f('<table hidden><tr id="'), ir = f('">'), Ct = f("</tr></table>"), tr = f('<table hidden><colgroup id="'), Ye = f('">'), Ut = f("</colgroup></table>");
  function or(o, c, h, v) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return a(o, bt), a(o, c.segmentPrefix), a(o, p(v.toString(16))), s(o, Zt);
      case 2:
        return a(o, jt), a(o, c.segmentPrefix), a(o, p(v.toString(16))), s(o, Kt);
      case 3:
        return a(o, Ke), a(o, c.segmentPrefix), a(o, p(v.toString(16))), s(o, er);
      case 4:
        return a(o, Pt), a(o, c.segmentPrefix), a(o, p(v.toString(16))), s(o, zt);
      case 5:
        return a(o, yr), a(o, c.segmentPrefix), a(o, p(v.toString(16))), s(o, at);
      case 6:
        return a(o, ar), a(o, c.segmentPrefix), a(o, p(v.toString(16))), s(o, ir);
      case 7:
        return a(
          o,
          tr
        ), a(o, c.segmentPrefix), a(o, p(v.toString(16))), s(o, Ye);
      default:
        throw Error(t(397));
    }
  }
  function At(o, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(o, Te);
      case 2:
        return s(o, ve);
      case 3:
        return s(o, vt);
      case 4:
        return s(o, $t);
      case 5:
        return s(o, Et);
      case 6:
        return s(o, Ct);
      case 7:
        return s(o, Ut);
      default:
        throw Error(t(397));
    }
  }
  var sr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), lr = f('$RS("'), b = f('","'), w = f('")<\/script>'), C = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), X = f('$RC("'), ye = f('","'), ke = f('")<\/script>'), De = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), we = f('$RX("'), Xe = f('"'), Ve = f(")<\/script>"), et = f(","), cr = /[<\u2028\u2029]/g;
  function Bt(o) {
    return JSON.stringify(o).replace(cr, function(c) {
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
  var br = Object.assign, Cn = Symbol.for("react.element"), Er = Symbol.for("react.portal"), Cr = Symbol.for("react.fragment"), Yr = Symbol.for("react.strict_mode"), Xr = Symbol.for("react.profiler"), Qr = Symbol.for("react.provider"), Mr = Symbol.for("react.context"), An = Symbol.for("react.forward_ref"), On = Symbol.for("react.suspense"), Jr = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), k = Symbol.for("react.debug_trace_mode"), P = Symbol.for("react.legacy_hidden"), R = Symbol.for("react.default_value"), U = Symbol.iterator;
  function J(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case Cr:
        return "Fragment";
      case Er:
        return "Portal";
      case Xr:
        return "Profiler";
      case Yr:
        return "StrictMode";
      case On:
        return "Suspense";
      case Jr:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case Mr:
        return (o.displayName || "Context") + ".Consumer";
      case Qr:
        return (o._context.displayName || "Context") + ".Provider";
      case An:
        var c = o.render;
        return o = o.displayName, o || (o = c.displayName || c.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case i:
        return c = o.displayName || null, c !== null ? c : J(o.type) || "Memo";
      case u:
        c = o._payload, o = o._init;
        try {
          return J(o(c));
        } catch {
        }
    }
    return null;
  }
  var de = {};
  function be(o, c) {
    if (o = o.contextTypes, !o) return de;
    var h = {}, v;
    for (v in o) h[v] = c[v];
    return h;
  }
  var Se = null;
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
  function Wt(o) {
    o.context._currentValue = o.parentValue, o = o.parent, o !== null && Wt(o);
  }
  function Ht(o) {
    var c = o.parent;
    c !== null && Ht(c), o.context._currentValue = o.value;
  }
  function Ot(o, c) {
    if (o.context._currentValue = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === c.depth ? tt(o, c) : Ot(o, c);
  }
  function Ar(o, c) {
    var h = c.parent;
    if (h === null) throw Error(t(402));
    o.depth === h.depth ? tt(o, h) : Ar(o, h), c.context._currentValue = c.value;
  }
  function ur(o) {
    var c = Se;
    c !== o && (c === null ? Ht(o) : o === null ? Wt(c) : c.depth === o.depth ? tt(c, o) : c.depth > o.depth ? Ot(c, o) : Ar(c, o), Se = o);
  }
  var Zr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, c) {
    o = o._reactInternals, o.queue !== null && o.queue.push(c);
  }, enqueueReplaceState: function(o, c) {
    o = o._reactInternals, o.replace = !0, o.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Or(o, c, h, v) {
    var N = o.state !== void 0 ? o.state : null;
    o.updater = Zr, o.props = h, o.state = N;
    var I = { queue: [], replace: !1 };
    o._reactInternals = I;
    var W = c.contextType;
    if (o.context = typeof W == "object" && W !== null ? W._currentValue : v, W = c.getDerivedStateFromProps, typeof W == "function" && (W = W(h, N), N = W == null ? N : br({}, N, W), o.state = N), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (c = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), c !== o.state && Zr.enqueueReplaceState(o, o.state, null), I.queue !== null && 0 < I.queue.length) if (c = I.queue, W = I.replace, I.queue = null, I.replace = !1, W && c.length === 1) o.state = c[0];
    else {
      for (I = W ? c[0] : o.state, N = !0, W = W ? 1 : 0; W < c.length; W++) {
        var Q = c[W];
        Q = typeof Q == "function" ? Q.call(o, I, h, v) : Q, Q != null && (N ? (N = !1, I = br({}, I, Q)) : br(I, Q));
      }
      o.state = I;
    }
    else I.queue = null;
  }
  var Rn = { id: 1, overflow: "" };
  function vr(o, c, h) {
    var v = o.id;
    o = o.overflow;
    var N = 32 - In(v) - 1;
    v &= ~(1 << N), h += 1;
    var I = 32 - In(c) + N;
    if (30 < I) {
      var W = N - N % 5;
      return I = (v & (1 << W) - 1).toString(32), v >>= W, N -= W, { id: 1 << 32 - In(c) + N | h << N | v, overflow: I + o };
    }
    return { id: 1 << I | h << N | v, overflow: o };
  }
  var In = Math.clz32 ? Math.clz32 : Nl, Rl = Math.log, Il = Math.LN2;
  function Nl(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Rl(o) / Il | 0) | 0;
  }
  function Pl(o, c) {
    return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
  }
  var Dl = typeof Object.is == "function" ? Object.is : Pl, dr = null, wa = null, Nn = null, Qe = null, Kr = !1, Pn = !1, en = 0, wr = null, Dn = 0;
  function Rr() {
    if (dr === null) throw Error(t(321));
    return dr;
  }
  function Ri() {
    if (0 < Dn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function ka() {
    return Qe === null ? Nn === null ? (Kr = !1, Nn = Qe = Ri()) : (Kr = !0, Qe = Nn) : Qe.next === null ? (Kr = !1, Qe = Qe.next = Ri()) : (Kr = !0, Qe = Qe.next), Qe;
  }
  function Sa() {
    wa = dr = null, Pn = !1, Nn = null, Dn = 0, Qe = wr = null;
  }
  function Ii(o, c) {
    return typeof c == "function" ? c(o) : c;
  }
  function Ni(o, c, h) {
    if (dr = Rr(), Qe = ka(), Kr) {
      var v = Qe.queue;
      if (c = v.dispatch, wr !== null && (h = wr.get(v), h !== void 0)) {
        wr.delete(v), v = Qe.memoizedState;
        do
          v = o(v, h.action), h = h.next;
        while (h !== null);
        return Qe.memoizedState = v, [v, c];
      }
      return [Qe.memoizedState, c];
    }
    return o = o === Ii ? typeof c == "function" ? c() : c : h !== void 0 ? h(c) : c, Qe.memoizedState = o, o = Qe.queue = { last: null, dispatch: null }, o = o.dispatch = Ll.bind(null, dr, o), [Qe.memoizedState, o];
  }
  function Pi(o, c) {
    if (dr = Rr(), Qe = ka(), c = c === void 0 ? null : c, Qe !== null) {
      var h = Qe.memoizedState;
      if (h !== null && c !== null) {
        var v = h[1];
        e: if (v === null) v = !1;
        else {
          for (var N = 0; N < v.length && N < c.length; N++) if (!Dl(c[N], v[N])) {
            v = !1;
            break e;
          }
          v = !0;
        }
        if (v) return h[0];
      }
    }
    return o = o(), Qe.memoizedState = [o, c], o;
  }
  function Ll(o, c, h) {
    if (25 <= Dn) throw Error(t(301));
    if (o === dr) if (Pn = !0, o = { action: h, next: null }, wr === null && (wr = /* @__PURE__ */ new Map()), h = wr.get(c), h === void 0) wr.set(c, o);
    else {
      for (c = h; c.next !== null; ) c = c.next;
      c.next = o;
    }
  }
  function Fl() {
    throw Error(t(394));
  }
  function Ln() {
  }
  var Di = { readContext: function(o) {
    return o._currentValue;
  }, useContext: function(o) {
    return Rr(), o._currentValue;
  }, useMemo: Pi, useReducer: Ni, useRef: function(o) {
    dr = Rr(), Qe = ka();
    var c = Qe.memoizedState;
    return c === null ? (o = { current: o }, Qe.memoizedState = o) : c;
  }, useState: function(o) {
    return Ni(Ii, o);
  }, useInsertionEffect: Ln, useLayoutEffect: function() {
  }, useCallback: function(o, c) {
    return Pi(function() {
      return o;
    }, c);
  }, useImperativeHandle: Ln, useEffect: Ln, useDebugValue: Ln, useDeferredValue: function(o) {
    return Rr(), o;
  }, useTransition: function() {
    return Rr(), [!1, Fl];
  }, useId: function() {
    var o = wa.treeContext, c = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - In(o) - 1)).toString(32) + c;
    var h = Fn;
    if (h === null) throw Error(t(404));
    return c = en++, o = ":" + h.idPrefix + "R" + o, 0 < c && (o += "H" + c.toString(32)), o + ":";
  }, useMutableSource: function(o, c) {
    return Rr(), c(o._source);
  }, useSyncExternalStore: function(o, c, h) {
    if (h === void 0) throw Error(t(407));
    return h();
  } }, Fn = null, xa = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ml(o) {
    return console.error(o), null;
  }
  function tn() {
  }
  function jl(o, c, h, v, N, I, W, Q, fe) {
    var Ee = [], xe = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: v === void 0 ? 12800 : v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: Ee, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: N === void 0 ? Ml : N, onAllReady: I === void 0 ? tn : I, onShellReady: W === void 0 ? tn : W, onShellError: Q === void 0 ? tn : Q, onFatalError: fe === void 0 ? tn : fe }, h = Mn(c, 0, null, h, !1, !1), h.parentFlushed = !0, o = _a(c, o, null, h, xe, de, null, Rn), Ee.push(o), c;
  }
  function _a(o, c, h, v, N, I, W, Q) {
    o.allPendingTasks++, h === null ? o.pendingRootTasks++ : h.pendingTasks++;
    var fe = { node: c, ping: function() {
      var Ee = o.pingedTasks;
      Ee.push(fe), Ee.length === 1 && Ui(o);
    }, blockedBoundary: h, blockedSegment: v, abortSet: N, legacyContext: I, context: W, treeContext: Q };
    return N.add(fe), fe;
  }
  function Mn(o, c, h, v, N, I) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: h, lastPushedText: N, textEmbedded: I };
  }
  function rn(o, c) {
    if (o = o.onError(c), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function jn(o, c) {
    var h = o.onShellError;
    h(c), h = o.onFatalError, h(c), o.destination !== null ? (o.status = 2, _(o.destination, c)) : (o.status = 1, o.fatalError = c);
  }
  function Li(o, c, h, v, N) {
    for (dr = {}, wa = c, en = 0, o = h(v, N); Pn; ) Pn = !1, en = 0, Dn += 1, Qe = null, o = h(v, N);
    return Sa(), o;
  }
  function Fi(o, c, h, v) {
    var N = h.render(), I = v.childContextTypes;
    if (I != null) {
      var W = c.legacyContext;
      if (typeof h.getChildContext != "function") v = W;
      else {
        h = h.getChildContext();
        for (var Q in h) if (!(Q in I)) throw Error(t(108, J(v) || "Unknown", Q));
        v = br({}, W, h);
      }
      c.legacyContext = v, Rt(o, c, N), c.legacyContext = W;
    } else Rt(o, c, N);
  }
  function Mi(o, c) {
    if (o && o.defaultProps) {
      c = br({}, c), o = o.defaultProps;
      for (var h in o) c[h] === void 0 && (c[h] = o[h]);
      return c;
    }
    return c;
  }
  function Ta(o, c, h, v, N) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      N = be(h, c.legacyContext);
      var I = h.contextType;
      I = new h(v, typeof I == "object" && I !== null ? I._currentValue : N), Or(I, h, v, N), Fi(o, c, I, h);
    } else {
      I = be(h, c.legacyContext), N = Li(o, c, h, v, I);
      var W = en !== 0;
      if (typeof N == "object" && N !== null && typeof N.render == "function" && N.$$typeof === void 0) Or(N, h, v, I), Fi(o, c, N, h);
      else if (W) {
        v = c.treeContext, c.treeContext = vr(v, 1, 0);
        try {
          Rt(o, c, N);
        } finally {
          c.treeContext = v;
        }
      } else Rt(o, c, N);
    }
    else if (typeof h == "string") {
      switch (N = c.blockedSegment, I = ae(N.chunks, h, v, o.responseState, N.formatContext), N.lastPushedText = !1, W = N.formatContext, N.formatContext = oe(W, h, v), Ea(o, c, I), N.formatContext = W, h) {
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
          N.chunks.push(Ge, p(h), dt);
      }
      N.lastPushedText = !1;
    } else {
      switch (h) {
        case P:
        case k:
        case Yr:
        case Xr:
        case Cr:
          Rt(o, c, v.children);
          return;
        case Jr:
          Rt(o, c, v.children);
          return;
        case g:
          throw Error(t(343));
        case On:
          e: {
            h = c.blockedBoundary, N = c.blockedSegment, I = v.fallback, v = v.children, W = /* @__PURE__ */ new Set();
            var Q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: W, errorDigest: null }, fe = Mn(o, N.chunks.length, Q, N.formatContext, !1, !1);
            N.children.push(fe), N.lastPushedText = !1;
            var Ee = Mn(o, 0, null, N.formatContext, !1, !1);
            Ee.parentFlushed = !0, c.blockedBoundary = Q, c.blockedSegment = Ee;
            try {
              if (Ea(
                o,
                c,
                v
              ), Ee.lastPushedText && Ee.textEmbedded && Ee.chunks.push(z), Ee.status = 1, zn(Q, Ee), Q.pendingTasks === 0) break e;
            } catch (xe) {
              Ee.status = 4, Q.forceClientRender = !0, Q.errorDigest = rn(o, xe);
            } finally {
              c.blockedBoundary = h, c.blockedSegment = N;
            }
            c = _a(o, I, h, fe, W, c.legacyContext, c.context, c.treeContext), o.pingedTasks.push(c);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case An:
          if (v = Li(o, c, h.render, v, N), en !== 0) {
            h = c.treeContext, c.treeContext = vr(h, 1, 0);
            try {
              Rt(o, c, v);
            } finally {
              c.treeContext = h;
            }
          } else Rt(o, c, v);
          return;
        case i:
          h = h.type, v = Mi(h, v), Ta(o, c, h, v, N);
          return;
        case Qr:
          if (N = v.children, h = h._context, v = v.value, I = h._currentValue, h._currentValue = v, W = Se, Se = v = { parent: W, depth: W === null ? 0 : W.depth + 1, context: h, parentValue: I, value: v }, c.context = v, Rt(o, c, N), o = Se, o === null) throw Error(t(403));
          v = o.parentValue, o.context._currentValue = v === R ? o.context._defaultValue : v, o = Se = o.parent, c.context = o;
          return;
        case Mr:
          v = v.children, v = v(h._currentValue), Rt(o, c, v);
          return;
        case u:
          N = h._init, h = N(h._payload), v = Mi(h, v), Ta(o, c, h, v, void 0);
          return;
      }
      throw Error(t(
        130,
        h == null ? h : typeof h,
        ""
      ));
    }
  }
  function Rt(o, c, h) {
    if (c.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Cn:
          Ta(o, c, h.type, h.props, h.ref);
          return;
        case Er:
          throw Error(t(257));
        case u:
          var v = h._init;
          h = v(h._payload), Rt(o, c, h);
          return;
      }
      if (He(h)) {
        ji(o, c, h);
        return;
      }
      if (h === null || typeof h != "object" ? v = null : (v = U && h[U] || h["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(h))) {
        if (h = v.next(), !h.done) {
          var N = [];
          do
            N.push(h.value), h = v.next();
          while (!h.done);
          ji(o, c, N);
        }
        return;
      }
      throw o = Object.prototype.toString.call(h), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : o));
    }
    typeof h == "string" ? (v = c.blockedSegment, v.lastPushedText = A(c.blockedSegment.chunks, h, o.responseState, v.lastPushedText)) : typeof h == "number" && (v = c.blockedSegment, v.lastPushedText = A(c.blockedSegment.chunks, "" + h, o.responseState, v.lastPushedText));
  }
  function ji(o, c, h) {
    for (var v = h.length, N = 0; N < v; N++) {
      var I = c.treeContext;
      c.treeContext = vr(I, v, N);
      try {
        Ea(o, c, h[N]);
      } finally {
        c.treeContext = I;
      }
    }
  }
  function Ea(o, c, h) {
    var v = c.blockedSegment.formatContext, N = c.legacyContext, I = c.context;
    try {
      return Rt(o, c, h);
    } catch (fe) {
      if (Sa(), typeof fe == "object" && fe !== null && typeof fe.then == "function") {
        h = fe;
        var W = c.blockedSegment, Q = Mn(o, W.chunks.length, null, W.formatContext, W.lastPushedText, !0);
        W.children.push(Q), W.lastPushedText = !1, o = _a(o, c.node, c.blockedBoundary, Q, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, h.then(o, o), c.blockedSegment.formatContext = v, c.legacyContext = N, c.context = I, ur(I);
      } else throw c.blockedSegment.formatContext = v, c.legacyContext = N, c.context = I, ur(I), fe;
    }
  }
  function zl(o) {
    var c = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, $i(this, c, o);
  }
  function zi(o, c, h) {
    var v = o.blockedBoundary;
    o.blockedSegment.status = 3, v === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, o = h === void 0 ? Error(t(432)) : h, v.errorDigest = c.onError(o), v.parentFlushed && c.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(N) {
      return zi(N, c, h);
    }), v.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (v = c.onAllReady, v()));
  }
  function zn(o, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var h = c.children[0];
      h.id = c.id, h.parentFlushed = !0, h.status === 1 && zn(o, h);
    } else o.completedSegments.push(c);
  }
  function $i(o, c, h) {
    if (c === null) {
      if (h.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = h;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = tn, c = o.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && zn(c, h), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(zl, o), c.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (zn(c, h), c.completedSegments.length === 1 && c.parentFlushed && o.partialBoundaries.push(c)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function Ui(o) {
    if (o.status !== 2) {
      var c = Se, h = xa.current;
      xa.current = Di;
      var v = Fn;
      Fn = o.responseState;
      try {
        var N = o.pingedTasks, I;
        for (I = 0; I < N.length; I++) {
          var W = N[I], Q = o, fe = W.blockedSegment;
          if (fe.status === 0) {
            ur(W.context);
            try {
              Rt(Q, W, W.node), fe.lastPushedText && fe.textEmbedded && fe.chunks.push(z), W.abortSet.delete(W), fe.status = 1, $i(Q, W.blockedBoundary, fe);
            } catch (qt) {
              if (Sa(), typeof qt == "object" && qt !== null && typeof qt.then == "function") {
                var Ee = W.ping;
                qt.then(Ee, Ee);
              } else {
                W.abortSet.delete(W), fe.status = 4;
                var xe = W.blockedBoundary, Je = qt, It = rn(Q, Je);
                if (xe === null ? jn(Q, Je) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = It, xe.parentFlushed && Q.clientRenderedBoundaries.push(xe))), Q.allPendingTasks--, Q.allPendingTasks === 0) {
                  var Vt = Q.onAllReady;
                  Vt();
                }
              }
            } finally {
            }
          }
        }
        N.splice(0, I), o.destination !== null && Ca(o, o.destination);
      } catch (qt) {
        rn(o, qt), jn(o, qt);
      } finally {
        Fn = v, xa.current = h, h === Di && ur(c);
      }
    }
  }
  function $n(o, c, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var v = h.id = o.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, o = o.responseState, a(c, Me), a(c, o.placeholderPrefix), o = p(v.toString(16)), a(c, o), s(c, Jt);
      case 1:
        h.status = 2;
        var N = !0;
        v = h.chunks;
        var I = 0;
        h = h.children;
        for (var W = 0; W < h.length; W++) {
          for (N = h[W]; I < N.index; I++) a(c, v[I]);
          N = Un(o, c, N);
        }
        for (; I < v.length - 1; I++) a(c, v[I]);
        return I < v.length && (N = s(c, v[I])), N;
      default:
        throw Error(t(390));
    }
  }
  function Un(o, c, h) {
    var v = h.boundary;
    if (v === null) return $n(o, c, h);
    if (v.parentFlushed = !0, v.forceClientRender) v = v.errorDigest, s(c, pt), a(c, ft), v && (a(c, Mt), a(c, p(_e(v))), a(c, Ft)), s(c, Tr), $n(o, c, h);
    else if (0 < v.pendingTasks) {
      v.rootSegmentID = o.nextSegmentId++, 0 < v.completedSegments.length && o.partialBoundaries.push(v);
      var N = o.responseState, I = N.nextSuspenseID++;
      N = f(N.boundaryPrefix + I.toString(16)), v = v.id = N, ot(c, o.responseState, v), $n(o, c, h);
    } else if (v.byteSize > o.progressiveChunkSize) v.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(v), ot(c, o.responseState, v.id), $n(o, c, h);
    else {
      if (s(c, Nt), h = v.completedSegments, h.length !== 1) throw Error(t(391));
      Un(o, c, h[0]);
    }
    return s(c, nt);
  }
  function Bi(o, c, h) {
    return or(c, o.responseState, h.formatContext, h.id), Un(o, c, h), At(c, h.formatContext);
  }
  function Wi(o, c, h) {
    for (var v = h.completedSegments, N = 0; N < v.length; N++) Hi(o, c, h, v[N]);
    if (v.length = 0, o = o.responseState, v = h.id, h = h.rootSegmentID, a(c, o.startInlineScript), o.sentCompleteBoundaryFunction ? a(c, X) : (o.sentCompleteBoundaryFunction = !0, a(c, C)), v === null) throw Error(t(395));
    return h = p(h.toString(16)), a(c, v), a(c, ye), a(c, o.segmentPrefix), a(c, h), s(c, ke);
  }
  function Hi(o, c, h, v) {
    if (v.status === 2) return !0;
    var N = v.id;
    if (N === -1) {
      if ((v.id = h.rootSegmentID) === -1) throw Error(t(392));
      return Bi(o, c, v);
    }
    return Bi(o, c, v), o = o.responseState, a(c, o.startInlineScript), o.sentCompleteSegmentFunction ? a(c, lr) : (o.sentCompleteSegmentFunction = !0, a(c, sr)), a(c, o.segmentPrefix), N = p(N.toString(16)), a(c, N), a(c, b), a(c, o.placeholderPrefix), a(c, N), s(c, w);
  }
  function Ca(o, c) {
    r = new Uint8Array(512), n = 0;
    try {
      var h = o.completedRootSegment;
      if (h !== null && o.pendingRootTasks === 0) {
        Un(o, c, h), o.completedRootSegment = null;
        var v = o.responseState.bootstrapChunks;
        for (h = 0; h < v.length - 1; h++) a(c, v[h]);
        h < v.length && s(c, v[h]);
      }
      var N = o.clientRenderedBoundaries, I;
      for (I = 0; I < N.length; I++) {
        var W = N[I];
        v = c;
        var Q = o.responseState, fe = W.id, Ee = W.errorDigest, xe = W.errorMessage, Je = W.errorComponentStack;
        if (a(v, Q.startInlineScript), Q.sentClientRenderFunction ? a(v, we) : (Q.sentClientRenderFunction = !0, a(
          v,
          De
        )), fe === null) throw Error(t(395));
        a(v, fe), a(v, Xe), (Ee || xe || Je) && (a(v, et), a(v, p(Bt(Ee || "")))), (xe || Je) && (a(v, et), a(v, p(Bt(xe || "")))), Je && (a(v, et), a(v, p(Bt(Je)))), s(v, Ve);
      }
      N.splice(0, I);
      var It = o.completedBoundaries;
      for (I = 0; I < It.length; I++) Wi(o, c, It[I]);
      It.splice(0, I), d(c), r = new Uint8Array(512), n = 0;
      var Vt = o.partialBoundaries;
      for (I = 0; I < Vt.length; I++) {
        var qt = Vt[I];
        e: {
          N = o, W = c;
          var Bn = qt.completedSegments;
          for (Q = 0; Q < Bn.length; Q++) if (!Hi(
            N,
            W,
            qt,
            Bn[Q]
          )) {
            Q++, Bn.splice(0, Q);
            var qi = !1;
            break e;
          }
          Bn.splice(0, Q), qi = !0;
        }
        if (!qi) {
          o.destination = null, I++, Vt.splice(0, I);
          return;
        }
      }
      Vt.splice(0, I);
      var Aa = o.completedBoundaries;
      for (I = 0; I < Aa.length; I++) Wi(o, c, Aa[I]);
      Aa.splice(0, I);
    } finally {
      d(c), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && c.close();
    }
  }
  function Vi(o, c) {
    try {
      var h = o.abortableTasks;
      h.forEach(function(v) {
        return zi(v, o, c);
      }), h.clear(), o.destination !== null && Ca(o, o.destination);
    } catch (v) {
      rn(o, v), jn(o, v);
    }
  }
  return qn.renderToReadableStream = function(o, c) {
    return new Promise(function(h, v) {
      var N, I, W = new Promise(function(xe, Je) {
        I = xe, N = Je;
      }), Q = jl(o, Ae(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), Ze(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, I, function() {
        var xe = new ReadableStream({ type: "bytes", pull: function(Je) {
          if (Q.status === 1) Q.status = 2, _(Je, Q.fatalError);
          else if (Q.status !== 2 && Q.destination === null) {
            Q.destination = Je;
            try {
              Ca(Q, Je);
            } catch (It) {
              rn(Q, It), jn(Q, It);
            }
          }
        }, cancel: function() {
          Vi(Q);
        } }, { highWaterMark: 0 });
        xe.allReady = W, h(xe);
      }, function(xe) {
        W.catch(function() {
        }), v(xe);
      }, N);
      if (c && c.signal) {
        var fe = c.signal, Ee = function() {
          Vi(Q, fe.reason), fe.removeEventListener("abort", Ee);
        };
        fe.addEventListener("abort", Ee);
      }
      Ui(Q);
    });
  }, qn.version = "18.3.1", qn;
}
var Gr, ks;
Gr = xc(), ks = _c();
Gr.version;
Gr.renderToString;
Gr.renderToStaticMarkup;
Gr.renderToNodeStream;
Gr.renderToStaticNodeStream;
ks.renderToReadableStream;
const Tc = "staticMarkup";
function Ss() {
  const e = Hl().indexOf(Tc) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const rr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Ss(), { onClick: a, ...s } = r.props;
  if (n)
    return ut.cloneElement(r, {
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
  return ut.cloneElement(r, {
    ...s,
    onClick: a,
    ...m
  });
}, Ec = hi(
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
    return /* @__PURE__ */ M.jsxs(
      "div",
      {
        ref: d,
        className: Xt("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (m = r.content) == null ? void 0 : m.icon
        }),
        children: [
          /* @__PURE__ */ M.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ M.jsx("h4", { children: /* @__PURE__ */ M.jsx(
            rr,
            {
              gaData: {
                ...s,
                action: E,
                text: r.content.header
              },
              children: /* @__PURE__ */ M.jsxs(
                "button",
                {
                  "data-testid": "accordion-opener",
                  className: Xt({ collapsed: !$ }),
                  "data-bs-toggle": "collapse",
                  href: `#card-body-${e}`,
                  type: "button",
                  "aria-expanded": $,
                  "aria-controls": `card-body-${e}`,
                  onClick: (S) => a(S, e),
                  children: [
                    (p = r.content) != null && p.icon ? /* @__PURE__ */ M.jsxs("span", { className: "accordion-icon", children: [
                      /* @__PURE__ */ M.jsx(
                        "i",
                        {
                          className: `${(f = r.content.icon) == null ? void 0 : f[0]} fa-${(_ = r.content.icon) == null ? void 0 : _[1]} me-2`
                        }
                      ),
                      r.content.header
                    ] }) : (x = r.content) == null ? void 0 : x.header,
                    /* @__PURE__ */ M.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              )
            }
          ) }) }),
          ((L = r.content) == null ? void 0 : L.body) && /* @__PURE__ */ M.jsx(
            "div",
            {
              "data-bs-parent": `#${t}`,
              id: `card-body-${e}`,
              className: Xt("collapse", { show: $ }),
              children: /* @__PURE__ */ M.jsx(
                "div",
                {
                  className: "accordion-body",
                  dangerouslySetInnerHTML: Dr(
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
  item: ws,
  parentId: l.string,
  openCard: l.number,
  onClick: l.func,
  gaData: l.object
};
l.arrayOf(ws).isRequired, l.number;
const co = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, xs = ({
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
  target: S = "_self",
  ...D
}) => {
  if ($) {
    const Y = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, V = Xt("btn", Y[$], {
      [`btn-${Y[$]}-${s}`]: !0,
      "btn-medium": L === "medium",
      "btn-small": L === "small",
      "btn-large": L === "large" || L === "default",
      disabled: d
    });
    let T = m;
    return p && m === "button" && (T = "a"), /* @__PURE__ */ M.jsx(
      rr,
      {
        gaData: {
          ...co,
          section: t,
          ...r,
          text: e
        },
        children: /* @__PURE__ */ M.jsxs(
          T,
          {
            type: T === "button" && x ? "button" : void 0,
            ...D,
            className: Xt(E) || V,
            href: p,
            ref: _,
            onClick: x,
            "aria-label": n,
            target: T === "a" ? S : null,
            disabled: d,
            children: [
              f && /* @__PURE__ */ M.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
              e
            ]
          }
        )
      }
    );
  }
  const B = Xt("btn", {
    [`btn-${s}`]: !0,
    "btn-md": L === "small",
    "btn-sm": L === "xsmall",
    "btn-block": a,
    disabled: d
  });
  let H = m;
  return p && m === "button" && (H = "a"), /* @__PURE__ */ M.jsx(
    rr,
    {
      gaData: {
        ...co,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ M.jsxs(
        H,
        {
          type: H === "button" && x ? "button" : void 0,
          ...D,
          className: Xt(E) || B,
          href: p,
          ref: _,
          onClick: x,
          "aria-label": n,
          target: H === "a" ? S : null,
          children: [
            f && /* @__PURE__ */ M.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
xs.propTypes = {
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
  gaData: gi,
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
var _s = { exports: {} }, Be = {}, uo;
function Cc() {
  if (uo) return Be;
  uo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), $ = Symbol.for("react.client.reference");
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var D = S.$$typeof;
      switch (D) {
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
                case m:
                case x:
                case _:
                  return S;
                case s:
                  return S;
                default:
                  return D;
              }
          }
        case t:
          return D;
      }
    }
  }
  return Be.ContextConsumer = s, Be.ContextProvider = d, Be.Element = e, Be.ForwardRef = m, Be.Fragment = r, Be.Lazy = x, Be.Memo = _, Be.Portal = t, Be.Profiler = a, Be.StrictMode = n, Be.Suspense = p, Be.SuspenseList = f, Be.isContextConsumer = function(S) {
    return E(S) === s;
  }, Be.isContextProvider = function(S) {
    return E(S) === d;
  }, Be.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, Be.isForwardRef = function(S) {
    return E(S) === m;
  }, Be.isFragment = function(S) {
    return E(S) === r;
  }, Be.isLazy = function(S) {
    return E(S) === x;
  }, Be.isMemo = function(S) {
    return E(S) === _;
  }, Be.isPortal = function(S) {
    return E(S) === t;
  }, Be.isProfiler = function(S) {
    return E(S) === a;
  }, Be.isStrictMode = function(S) {
    return E(S) === n;
  }, Be.isSuspense = function(S) {
    return E(S) === p;
  }, Be.isSuspenseList = function(S) {
    return E(S) === f;
  }, Be.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === a || S === n || S === p || S === f || S === L || typeof S == "object" && S !== null && (S.$$typeof === x || S.$$typeof === _ || S.$$typeof === d || S.$$typeof === s || S.$$typeof === m || S.$$typeof === $ || S.getModuleId !== void 0);
  }, Be.typeOf = E, Be;
}
_s.exports = Cc();
var Ts = _s.exports;
function Ac(e) {
  function t(z, A, j, F, y) {
    for (var re = 0, O = 0, ne = 0, ee = 0, te, G, ie = 0, se = 0, K, he = K = te = 0, Z = 0, le = 0, $e = 0, me = 0, st = j.length, qe = st - 1, ge, q = "", ae = "", Ge = "", dt = "", Me; Z < st; ) {
      if (G = j.charCodeAt(Z), Z === qe && O + ee + ne + re !== 0 && (O !== 0 && (G = O === 47 ? 10 : 47), ee = ne = re = 0, st++, qe++), O + ee + ne + re === 0) {
        if (Z === qe && (0 < le && (q = q.replace(L, "")), 0 < q.trim().length)) {
          switch (G) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              q += j.charAt(Z);
          }
          G = 59;
        }
        switch (G) {
          case 123:
            for (q = q.trim(), te = q.charCodeAt(0), K = 1, me = ++Z; Z < st; ) {
              switch (G = j.charCodeAt(Z)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (G = j.charCodeAt(Z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = Z + 1; he < qe; ++he)
                          switch (j.charCodeAt(he)) {
                            case 47:
                              if (G === 42 && j.charCodeAt(he - 1) === 42 && Z + 2 !== he) {
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
                  for (; Z++ < qe && j.charCodeAt(Z) !== G; )
                    ;
              }
              if (K === 0) break;
              Z++;
            }
            switch (K = j.substring(me, Z), te === 0 && (te = (q = q.replace(x, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (q = q.replace(L, "")), G = q.charCodeAt(1), G) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = A;
                    break;
                  default:
                    le = lt;
                }
                if (K = t(A, le, K, G, y + 1), me = K.length, 0 < Ae && (le = r(lt, q, $e), Me = m(3, K, le, A, Ie, pe, me, G, y, F), q = le.join(""), Me !== void 0 && (me = (K = Me.trim()).length) === 0 && (G = 0, K = "")), 0 < me) switch (G) {
                  case 115:
                    q = q.replace(ce, d);
                  case 100:
                  case 109:
                  case 45:
                    K = q + "{" + K + "}";
                    break;
                  case 107:
                    q = q.replace(H, "$1 $2"), K = q + "{" + K + "}", K = Ce === 1 || Ce === 2 && s("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = q + K, F === 112 && (K = (ae += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(A, r(A, q, $e), K, F, y + 1);
            }
            Ge += K, K = $e = le = he = te = 0, q = "", G = j.charCodeAt(++Z);
            break;
          case 125:
          case 59:
            if (q = (0 < le ? q.replace(L, "") : q).trim(), 1 < (me = q.length)) switch (he === 0 && (te = q.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (me = (q = q.replace(" ", ":")).length), 0 < Ae && (Me = m(1, q, A, z, Ie, pe, ae.length, F, y, F)) !== void 0 && (me = (q = Me.trim()).length) === 0 && (q = "\0\0"), te = q.charCodeAt(0), G = q.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (G === 105 || G === 99) {
                  dt += q + j.charAt(Z);
                  break;
                }
              default:
                q.charCodeAt(me - 1) !== 58 && (ae += a(q, te, G, q.charCodeAt(2)));
            }
            $e = le = he = te = 0, q = "", G = j.charCodeAt(++Z);
        }
      }
      switch (G) {
        case 13:
        case 10:
          O === 47 ? O = 0 : 1 + te === 0 && F !== 107 && 0 < q.length && (le = 1, q += "\0"), 0 < Ae * Ze && m(0, q, A, z, Ie, pe, ae.length, F, y, F), pe = 1, Ie++;
          break;
        case 59:
        case 125:
          if (O + ee + ne + re === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, ge = j.charAt(Z), G) {
            case 9:
            case 32:
              if (ee + re + O === 0) switch (ie) {
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
              if (ee + O + re + Ne === 0 && 0 < he) switch (Z - he) {
                case 2:
                  ie === 112 && j.charCodeAt(Z - 3) === 58 && (Ne = ie);
                case 8:
                  se === 111 && (Ne = se);
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
                if (te === 0) switch (2 * ie + 3 * se) {
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
                  switch (2 * G + 3 * j.charCodeAt(Z + 1)) {
                    case 235:
                      O = 47;
                      break;
                    case 220:
                      me = Z, O = 42;
                  }
                  break;
                case 42:
                  G === 47 && ie === 42 && me + 2 !== Z && (j.charCodeAt(me + 2) === 33 && (ae += j.substring(me, Z + 1)), ge = "", O = 0);
              }
          }
          O === 0 && (q += ge);
      }
      se = ie, ie = G, Z++;
    }
    if (me = ae.length, 0 < me) {
      if (le = A, 0 < Ae && (Me = m(2, ae, le, z, Ie, pe, me, F, y, F), Me !== void 0 && (ae = Me).length === 0)) return dt + ae + Ge;
      if (ae = le.join(",") + "{" + ae + "}", Ce * Ne !== 0) {
        switch (Ce !== 2 || s(ae, 2) || (Ne = 0), Ne) {
          case 111:
            ae = ae.replace(V, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(Y, "::-webkit-input-$1") + ae.replace(Y, "::-moz-$1") + ae.replace(Y, ":-ms-input-$1") + ae;
        }
        Ne = 0;
      }
    }
    return dt + ae + Ge;
  }
  function r(z, A, j) {
    var F = A.trim().split(D);
    A = F;
    var y = F.length, re = z.length;
    switch (re) {
      case 0:
      case 1:
        var O = 0;
        for (z = re === 0 ? "" : z[0] + " "; O < y; ++O)
          A[O] = n(z, A[O], j).trim();
        break;
      default:
        var ne = O = 0;
        for (A = []; O < y; ++O)
          for (var ee = 0; ee < re; ++ee)
            A[ne++] = n(z[ee] + " ", F[O], j).trim();
    }
    return A;
  }
  function n(z, A, j) {
    var F = A.charCodeAt(0);
    switch (33 > F && (F = (A = A.trim()).charCodeAt(0)), F) {
      case 38:
        return A.replace(B, "$1" + z.trim());
      case 58:
        return z.trim() + A.replace(B, "$1" + z.trim());
      default:
        if (0 < 1 * j && 0 < A.indexOf("\f")) return A.replace(B, (z.charCodeAt(0) === 58 ? "" : "$1") + z.trim());
    }
    return z + A;
  }
  function a(z, A, j, F) {
    var y = z + ";", re = 2 * A + 3 * j + 4 * F;
    if (re === 944) {
      z = y.indexOf(":", 9) + 1;
      var O = y.substring(z, y.length - 1).trim();
      return O = y.substring(0, z).trim() + O + ";", Ce === 1 || Ce === 2 && s(O, 1) ? "-webkit-" + O + O : O;
    }
    if (Ce === 0 || Ce === 2 && !s(y, 1)) return y;
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
        return E.test(y) ? y.replace($, ":-webkit-") + y.replace($, ":-moz-") + y : y;
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
        if (He.test(z) === !0) return (O = z.substring(z.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(z.replace("stretch", "fill-available"), A, j, F).replace(":fill-available", ":stretch") : y.replace(O, "-webkit-" + O) + y.replace(O, "-moz-" + O.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, j + F === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(z, A) {
    var j = z.indexOf(A === 1 ? ":" : "{"), F = z.substring(0, A !== 3 ? j : 10);
    return j = z.substring(j + 1, z.length - 1), Ue(A !== 2 ? F : F.replace(Le, "$1"), j, A);
  }
  function d(z, A) {
    var j = a(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return j !== A + ";" ? j.replace(_e, " or ($1)").substring(4) : "(" + A + ")";
  }
  function m(z, A, j, F, y, re, O, ne, ee, te) {
    for (var G = 0, ie = A, se; G < Ae; ++G)
      switch (se = Fe[G].call(_, z, ie, j, F, y, re, O, ne, ee, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ie = se;
      }
    if (ie !== A) return ie;
  }
  function p(z) {
    switch (z) {
      case void 0:
      case null:
        Ae = Fe.length = 0;
        break;
      default:
        if (typeof z == "function") Fe[Ae++] = z;
        else if (typeof z == "object") for (var A = 0, j = z.length; A < j; ++A)
          p(z[A]);
        else Ze = !!z | 0;
    }
    return p;
  }
  function f(z) {
    return z = z.prefix, z !== void 0 && (Ue = null, z ? typeof z != "function" ? Ce = 1 : (Ce = 2, Ue = z) : Ce = 0), f;
  }
  function _(z, A) {
    var j = z;
    if (33 > j.charCodeAt(0) && (j = j.trim()), oe = j, j = [oe], 0 < Ae) {
      var F = m(-1, A, j, j, Ie, pe, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (A = F);
    }
    var y = t(lt, j, A, 0, 0);
    return 0 < Ae && (F = m(-2, y, j, j, Ie, pe, y.length, 0, 0, 0), F !== void 0 && (y = F)), oe = "", Ne = 0, pe = Ie = 1, y;
  }
  var x = /^\0+/g, L = /[\0\r\f]/g, $ = /: */g, E = /zoo|gra/, S = /([,: ])(transform)/g, D = /,\r+?/g, B = /([\t\r\n ])*\f?&/g, H = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, V = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, _e = /([\s\S]*?);/g, Pe = /-self|flex-/g, Le = /[^]*?(:[rp][el]a[\w-]+)[^]*/, He = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, pe = 1, Ie = 1, Ne = 0, Ce = 1, lt = [], Fe = [], Ae = 0, Ue = null, Ze = 0, oe = "";
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
var Ic = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, fo = /* @__PURE__ */ Rc(
  function(e) {
    return Ic.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Es = { exports: {} }, je = {}, po;
function Nc() {
  if (po) return je;
  po = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, L = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, H = e ? Symbol.for("react.scope") : 60119;
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
    return Y(T) === f;
  }
  return je.AsyncMode = p, je.ConcurrentMode = f, je.ContextConsumer = m, je.ContextProvider = d, je.Element = t, je.ForwardRef = _, je.Fragment = n, je.Lazy = E, je.Memo = $, je.Portal = r, je.Profiler = s, je.StrictMode = a, je.Suspense = x, je.isAsyncMode = function(T) {
    return V(T) || Y(T) === p;
  }, je.isConcurrentMode = V, je.isContextConsumer = function(T) {
    return Y(T) === m;
  }, je.isContextProvider = function(T) {
    return Y(T) === d;
  }, je.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, je.isForwardRef = function(T) {
    return Y(T) === _;
  }, je.isFragment = function(T) {
    return Y(T) === n;
  }, je.isLazy = function(T) {
    return Y(T) === E;
  }, je.isMemo = function(T) {
    return Y(T) === $;
  }, je.isPortal = function(T) {
    return Y(T) === r;
  }, je.isProfiler = function(T) {
    return Y(T) === s;
  }, je.isStrictMode = function(T) {
    return Y(T) === a;
  }, je.isSuspense = function(T) {
    return Y(T) === x;
  }, je.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === n || T === f || T === s || T === a || T === x || T === L || typeof T == "object" && T !== null && (T.$$typeof === E || T.$$typeof === $ || T.$$typeof === d || T.$$typeof === m || T.$$typeof === _ || T.$$typeof === D || T.$$typeof === B || T.$$typeof === H || T.$$typeof === S);
  }, je.typeOf = Y, je;
}
Es.exports = Nc();
var Pc = Es.exports, yi = Pc, Dc = {
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
}, Fc = {
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
}, bi = {};
bi[yi.ForwardRef] = Fc;
bi[yi.Memo] = Cs;
function ho(e) {
  return yi.isMemo(e) ? Cs : bi[e.$$typeof] || Dc;
}
var Mc = Object.defineProperty, jc = Object.getOwnPropertyNames, mo = Object.getOwnPropertySymbols, zc = Object.getOwnPropertyDescriptor, $c = Object.getPrototypeOf, go = Object.prototype;
function As(e, t, r) {
  if (typeof t != "string") {
    if (go) {
      var n = $c(t);
      n && n !== go && As(e, n, r);
    }
    var a = jc(t);
    mo && (a = a.concat(mo(t)));
    for (var s = ho(e), d = ho(t), m = 0; m < a.length; ++m) {
      var p = a[m];
      if (!Lc[p] && !(r && r[p]) && !(d && d[p]) && !(s && s[p])) {
        var f = zc(t, p);
        try {
          Mc(e, p, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var Uc = As;
const Bc = /* @__PURE__ */ mi(Uc);
var ht = { env: { NODE_ENV: "production" } };
function pr() {
  return (pr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var yo = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Qa = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ts.typeOf(e);
}, sa = Object.freeze([]), kr = Object.freeze({});
function vn(e) {
  return typeof e == "function";
}
function bo(e) {
  return e.displayName || e.name || "Component";
}
function vi(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ur = typeof ht < "u" && ht.env !== void 0 && (ht.env.REACT_APP_SC_ATTR || ht.env.SC_ATTR) || "data-styled", wi = typeof window < "u" && "HTMLElement" in window, Wc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ht < "u" && ht.env !== void 0 && (ht.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ht.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ht.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ht.env.REACT_APP_SC_DISABLE_SPEEDY : ht.env.SC_DISABLE_SPEEDY !== void 0 && ht.env.SC_DISABLE_SPEEDY !== "" ? ht.env.SC_DISABLE_SPEEDY !== "false" && ht.env.SC_DISABLE_SPEEDY : ht.env.NODE_ENV !== "production"));
function _n(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Hc = function() {
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
}(), ra = /* @__PURE__ */ new Map(), la = /* @__PURE__ */ new Map(), gn = 1, Gn = function(e) {
  if (ra.has(e)) return ra.get(e);
  for (; la.has(gn); ) gn++;
  var t = gn++;
  return ra.set(e, t), la.set(t, e), t;
}, Vc = function(e) {
  return la.get(e);
}, qc = function(e, t) {
  t >= gn && (gn = t + 1), ra.set(e, t), la.set(t, e);
}, Gc = "style[" + Ur + '][data-styled-version="5.3.11"]', Yc = new RegExp("^" + Ur + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Xc = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, d = a.length; s < d; s++) (n = a[s]) && e.registerName(t, n);
}, Qc = function(e, t) {
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
}, Os = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(m) {
    for (var p = m.childNodes, f = p.length; f >= 0; f--) {
      var _ = p[f];
      if (_ && _.nodeType === 1 && _.hasAttribute(Ur)) return _;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Ur, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Jc();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, Zc = function() {
  function e(r) {
    var n = this.element = Os(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, d = 0, m = s.length; d < m; d++) {
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
}(), Kc = function() {
  function e(r) {
    var n = this.element = Os(r);
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
}(), vo = wi, tu = { isServer: !wi, useCSSOMInjection: !Wc }, Rs = function() {
  function e(r, n, a) {
    r === void 0 && (r = kr), n === void 0 && (n = {}), this.options = pr({}, tu, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && wi && vo && (vo = !1, function(s) {
      for (var d = document.querySelectorAll(Gc), m = 0, p = d.length; m < p; m++) {
        var f = d[m];
        f && f.getAttribute(Ur) !== "active" && (Qc(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Gn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(pr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new eu(d) : s ? new Zc(d) : new Kc(d), new Hc(r)));
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
            var _ = Ur + ".g" + d + '[id="' + m + '"]', x = "";
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
}(), ru = /(a)(d)/gi, wo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ja(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = wo(t % 52) + r;
  return (wo(t % 52) + r).replace(ru, "$1-$2");
}
var zr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Is = function(e) {
  return zr(5381, e);
};
function nu(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (vn(r) && !vi(r)) return !1;
  }
  return !0;
}
var au = Is("5.3.11"), iu = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && nu(t), this.componentId = r, this.baseHash = zr(au, r), this.baseStyle = n, Rs.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Br(this.rules, t, r, n).join(""), m = Ja(zr(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(a, m)) {
        var p = n(d, "." + m, void 0, a);
        r.insertRules(a, m, p);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, _ = zr(this.baseHash, n.hash), x = "", L = 0; L < f; L++) {
        var $ = this.rules[L];
        if (typeof $ == "string") x += $;
        else if ($) {
          var E = Br($, t, r, n), S = Array.isArray(E) ? E.join("") : E;
          _ = zr(_, S + L), x += S;
        }
      }
      if (x) {
        var D = Ja(_ >>> 0);
        if (!r.hasNameForId(a, D)) {
          var B = n(x, "." + D, void 0, a);
          r.insertRules(a, D, B);
        }
        s.push(D);
      }
    }
    return s.join(" ");
  }, e;
}(), ou = /^\s*\/\/.*$/gm, su = [":", "[", ".", "#"];
function lu(e) {
  var t, r, n, a, s = kr, d = s.options, m = d === void 0 ? kr : d, p = s.plugins, f = p === void 0 ? sa : p, _ = new Ac(m), x = [], L = /* @__PURE__ */ function(S) {
    function D(B) {
      if (B) try {
        S(B + "}");
      } catch {
      }
    }
    return function(B, H, Y, V, T, ce, _e, Pe, Le, He) {
      switch (B) {
        case 1:
          if (Le === 0 && H.charCodeAt(0) === 64) return S(H + ";"), "";
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
          H.split("/*|*/}").forEach(D);
      }
    };
  }(function(S) {
    x.push(S);
  }), $ = function(S, D, B) {
    return D === 0 && su.indexOf(B[r.length]) !== -1 || B.match(a) ? S : "." + t;
  };
  function E(S, D, B, H) {
    H === void 0 && (H = "&");
    var Y = S.replace(ou, ""), V = D && B ? B + " " + D + " { " + Y + " }" : Y;
    return t = H, r = D, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), _(B || !D ? "" : D, V);
  }
  return _.use([].concat(f, [function(S, D, B) {
    S === 2 && B.length && B[0].lastIndexOf(r) > 0 && (B[0] = B[0].replace(n, $));
  }, L, function(S) {
    if (S === -2) {
      var D = x;
      return x = [], D;
    }
  }])), E.hash = f.length ? f.reduce(function(S, D) {
    return D.name || _n(15), zr(S, D.name);
  }, 5381).toString() : "", E;
}
var Ns = ut.createContext();
Ns.Consumer;
var Ps = ut.createContext(), cu = (Ps.Consumer, new Rs()), Za = lu();
function uu() {
  return gr(Ns) || cu;
}
function du() {
  return gr(Ps) || Za;
}
var fu = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = Za);
      var d = n.name + s.hash;
      a.hasNameForId(n.id, d) || a.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return _n(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Za), this.name + t.hash;
  }, e;
}(), pu = /([A-Z])/, hu = /([A-Z])/g, mu = /^ms-/, gu = function(e) {
  return "-" + e.toLowerCase();
};
function ko(e) {
  return pu.test(e) ? e.replace(hu, gu).replace(mu, "-ms-") : e;
}
var So = function(e) {
  return e == null || e === !1 || e === "";
};
function Br(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, m = e.length; d < m; d += 1) (a = Br(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (So(e)) return "";
  if (vi(e)) return "." + e.styledComponentId;
  if (vn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var p = e(t);
    return Br(p, t, r, n);
  }
  var f;
  return e instanceof fu ? r ? (e.inject(r, n), e.getName(n)) : e : Qa(e) ? function _(x, L) {
    var $, E, S = [];
    for (var D in x) x.hasOwnProperty(D) && !So(x[D]) && (Array.isArray(x[D]) && x[D].isCss || vn(x[D]) ? S.push(ko(D) + ":", x[D], ";") : Qa(x[D]) ? S.push.apply(S, _(x[D], D)) : S.push(ko(D) + ": " + ($ = D, (E = x[D]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || $ in Oc || $.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return L ? [L + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var xo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function yu(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return vn(e) || Qa(e) ? xo(Br(yo(sa, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : xo(Br(yo(e, r)));
}
var bu = function(e, t, r) {
  return r === void 0 && (r = kr), e.theme !== r.theme && e.theme || t || r.theme;
}, vu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, wu = /(^-|-$)/g;
function Ma(e) {
  return e.replace(vu, "-").replace(wu, "");
}
var ku = function(e) {
  return Ja(Is(e) >>> 0);
};
function Yn(e) {
  return typeof e == "string" && ht.env.NODE_ENV === "production";
}
var Ka = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Su = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function xu(e, t, r) {
  var n = e[r];
  Ka(t) && Ka(n) ? Ds(n, t) : e[r] = t;
}
function Ds(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (Ka(d)) for (var m in d) Su(m) && xu(e, d[m], m);
  }
  return e;
}
var Ls = ut.createContext();
Ls.Consumer;
var ja = {};
function Fs(e, t, r) {
  var n = vi(e), a = !Yn(e), s = t.attrs, d = s === void 0 ? sa : s, m = t.componentId, p = m === void 0 ? function(H, Y) {
    var V = typeof H != "string" ? "sc" : Ma(H);
    ja[V] = (ja[V] || 0) + 1;
    var T = V + "-" + ku("5.3.11" + V + ja[V]);
    return Y ? Y + "-" + T : T;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, _ = f === void 0 ? function(H) {
    return Yn(H) ? "styled." + H : "Styled(" + bo(H) + ")";
  }(e) : f, x = t.displayName && t.componentId ? Ma(t.displayName) + "-" + t.componentId : t.componentId || p, L = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, $ = t.shouldForwardProp;
  n && e.shouldForwardProp && ($ = t.shouldForwardProp ? function(H, Y, V) {
    return e.shouldForwardProp(H, Y, V) && t.shouldForwardProp(H, Y, V);
  } : e.shouldForwardProp);
  var E, S = new iu(r, x, n ? e.componentStyle : void 0), D = S.isStatic && d.length === 0, B = function(H, Y) {
    return function(V, T, ce, _e) {
      var Pe = V.attrs, Le = V.componentStyle, He = V.defaultProps, ue = V.foldedComponentIds, pe = V.shouldForwardProp, Ie = V.styledComponentId, Ne = V.target, Ce = function(F, y, re) {
        F === void 0 && (F = kr);
        var O = pr({}, y, { theme: F }), ne = {};
        return re.forEach(function(ee) {
          var te, G, ie, se = ee;
          for (te in vn(se) && (se = se(O)), se) O[te] = ne[te] = te === "className" ? (G = ne[te], ie = se[te], G && ie ? G + " " + ie : G || ie) : se[te];
        }), [O, ne];
      }(bu(T, gr(Ls), He) || kr, T, Pe), lt = Ce[0], Fe = Ce[1], Ae = function(F, y, re, O) {
        var ne = uu(), ee = du(), te = y ? F.generateAndInjectStyles(kr, ne, ee) : F.generateAndInjectStyles(re, ne, ee);
        return te;
      }(Le, _e, lt), Ue = ce, Ze = Fe.$as || T.$as || Fe.as || T.as || Ne, oe = Yn(Ze), z = Fe !== T ? pr({}, T, {}, Fe) : T, A = {};
      for (var j in z) j[0] !== "$" && j !== "as" && (j === "forwardedAs" ? A.as = z[j] : (pe ? pe(j, fo, Ze) : !oe || fo(j)) && (A[j] = z[j]));
      return T.style && Fe.style !== T.style && (A.style = pr({}, T.style, {}, Fe.style)), A.className = Array.prototype.concat(ue, Ie, Ae !== Ie ? Ae : null, T.className, Fe.className).filter(Boolean).join(" "), A.ref = Ue, ss(Ze, A);
    }(E, H, Y, D);
  };
  return B.displayName = _, (E = ut.forwardRef(B)).attrs = L, E.componentStyle = S, E.displayName = _, E.shouldForwardProp = $, E.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : sa, E.styledComponentId = x, E.target = n ? e.target : e, E.withComponent = function(H) {
    var Y = t.componentId, V = function(ce, _e) {
      if (ce == null) return {};
      var Pe, Le, He = {}, ue = Object.keys(ce);
      for (Le = 0; Le < ue.length; Le++) Pe = ue[Le], _e.indexOf(Pe) >= 0 || (He[Pe] = ce[Pe]);
      return He;
    }(t, ["componentId"]), T = Y && Y + "-" + (Yn(H) ? H : Ma(bo(H)));
    return Fs(H, pr({}, V, { attrs: L, componentId: T }), r);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(H) {
    this._foldedDefaultProps = n ? Ds({}, e.defaultProps, H) : H;
  } }), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), a && Bc(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var Qt = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = kr), !Ts.isValidElementType(n)) return _n(1, String(n));
    var s = function() {
      return r(n, a, yu.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, pr({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, pr({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(Fs, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Qt[e] = Qt(e);
});
Qt.div`
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
function ha(e) {
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
}(), Lr = function() {
  return Lr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Lr.apply(this, arguments);
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
}, Cu = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, Au = function(e, t) {
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
  var n = t.height, a = t.width, s = Ms(t, ["height", "width"]), d = Lr({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), m = window.open(e, "", Object.keys(d).map(function(f) {
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
var Iu = (
  /** @class */
  function(e) {
    _u(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, s = a.onShareWindowClose, d = a.windowHeight, m = d === void 0 ? 400 : d, p = a.windowPosition, f = p === void 0 ? "windowCenter" : p, _ = a.windowWidth, x = _ === void 0 ? 550 : _, L = Lr({ height: m, width: x }, f === "windowCenter" ? Au(x, m) : Ou(x, m));
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
                ] : (n.preventDefault(), s ? ($ = s(), Cu($) ? [4, $] : [3, 2]) : [3, 2]);
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
      var x = Ms(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), L = Xt("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, a), $ = Lr(Lr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, _), s && d);
      return ut.createElement("button", Lr({}, x, { "aria-label": x["aria-label"] || p, className: L, onClick: this.handleClick, ref: m, style: $ }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }($l)
), ca = function() {
  return ca = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ca.apply(this, arguments);
};
function ma(e, t, r, n) {
  function a(s, d) {
    var m = r(s), p = ca({}, s), f = Object.keys(m);
    return f.forEach(function(_) {
      delete p[_];
    }), ut.createElement(Iu, ca({}, n, p, { forwardedRef: d, networkName: e, networkLink: t, opts: r(s) }));
  }
  return a.displayName = "ShareButton-".concat(e), hi(a);
}
function Nu(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + ha({ subject: r, body: n ? n + a + e : e });
}
ma("email", Nu, function(e) {
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
var Pu = /* @__PURE__ */ function() {
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
    Pu(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function yn(e, t) {
  if (!e)
    throw new Du(t);
}
function Lu(e, t) {
  var r = t.quote, n = t.hashtag;
  return yn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + ha({
    u: e,
    quote: r,
    hashtag: n
  });
}
ma("facebook", Lu, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Fu(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return yn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + ha({ url: e, mini: "true", title: r, summary: n, source: a });
}
ma("linkedin", Fu, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Mu(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, s = a === void 0 ? [] : a, d = t.related, m = d === void 0 ? [] : d;
  return yn(e, "twitter.url"), yn(Array.isArray(s), "twitter.hashtags is not an array"), yn(Array.isArray(m), "twitter.related is not an array"), "https://twitter.com/share" + ha({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: m.length > 0 ? m.join(",") : void 0
  });
}
ma("twitter", Mu, function(e) {
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
function ei(e) {
  "@babel/helpers - typeof";
  return ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ei(e);
}
var ju = (typeof window > "u" ? "undefined" : ei(window)) === "object" && window.Element || function() {
};
function zu(e, t, r) {
  if (!(e[t] instanceof ju))
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
Qt.div`
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
Qt.div`
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
}, js = ({
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
  const x = Xt("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: s
  });
  let L = d;
  return p && d === "button" && (L = "a"), /* @__PURE__ */ M.jsx(
    rr,
    {
      gaData: {
        ...$u,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ M.jsx(
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
js.propTypes = {
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
  gaData: gi,
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
const zs = ({
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
  const S = {
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
  }, D = Xt("uds-img", {
    borderless: !$,
    "uds-img-drop-shadow": E
  }), B = (Y) => {
    const V = Y ? `${S.className} ${Y}` : S.className;
    return f ? /* @__PURE__ */ M.jsxs("a", { href: f, children: [
      /* @__PURE__ */ M.jsx("img", { ...S, className: V }),
      /* @__PURE__ */ M.jsx("span", { className: "visually-hidden", children: _ })
    ] }) : /* @__PURE__ */ M.jsx("img", { ...S, className: V });
  }, H = () => /* @__PURE__ */ M.jsx("div", { className: D, children: /* @__PURE__ */ M.jsxs("figure", { className: "figure uds-figure", children: [
    B(),
    x && /* @__PURE__ */ M.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      L && /* @__PURE__ */ M.jsx("h3", { children: L }),
      /* @__PURE__ */ M.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Dr(x)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ M.jsx(M.Fragment, { children: x ? H() : B(D) });
};
zs.propTypes = {
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
const Uu = Qt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Bu = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Wu = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Bu(e) ? `mailto:${e}` : e, Hu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, fr = ({
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
  showBorders: S = !0,
  cardLink: D
}) => /* @__PURE__ */ M.jsx(
  $s,
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
    showBorders: S,
    cardLink: D
  }
);
fr.propTypes = {
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
const $s = ({
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
  showBorders: S = !0,
  cardLink: D
}) => {
  const B = Xt("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !S
  });
  return /* @__PURE__ */ M.jsx(M.Fragment, { children: /* @__PURE__ */ M.jsxs(Uu, { className: B, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ M.jsx(
      zs,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: D,
        title: s
      }
    ),
    !n && d && /* @__PURE__ */ M.jsx(
      "i",
      {
        className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ M.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ M.jsx(
      ti,
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
    ) }) : /* @__PURE__ */ M.jsx(
      ti,
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
$s.propTypes = {
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
const ti = ({
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
}) => /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
  !!s && /* @__PURE__ */ M.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ M.jsx("h3", { className: "card-title", children: _ ? /* @__PURE__ */ M.jsx("a", { href: _, children: s }) : s }) }),
  !!t && /* @__PURE__ */ M.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ M.jsx("div", { dangerouslySetInnerHTML: Dr(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ M.jsx(
    Us,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  d && /* @__PURE__ */ M.jsx("div", { className: "card-buttons", children: d.map((x) => /* @__PURE__ */ M.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ M.jsx(
        xs,
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
  p && m && /* @__PURE__ */ M.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ M.jsx(
    rr,
    {
      gaData: {
        ...Hu,
        section: s,
        text: m
      },
      children: /* @__PURE__ */ M.jsx("a", { href: Wu(p), children: m })
    }
  ) }),
  f && /* @__PURE__ */ M.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((x) => (
    // @ts-ignore
    /* @__PURE__ */ M.jsx(
      js,
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
ti.propTypes = {
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
const Us = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ M.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ M.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ M.jsx("div", { dangerouslySetInnerHTML: Dr(r) })
  ] }),
  t && /* @__PURE__ */ M.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ M.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Dr(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
  r && /* @__PURE__ */ M.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ M.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ M.jsx("div", { dangerouslySetInnerHTML: Dr(r) })
  ] }) }),
  t && /* @__PURE__ */ M.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ M.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ M.jsx("span", { children: /* @__PURE__ */ M.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Dr(t)
      }
    ) })
  ] }) })
] });
Us.propTypes = {
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
const Vu = Qt.div`
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
`, qu = () => /* @__PURE__ */ M.jsxs(Vu, { children: [
  /* @__PURE__ */ M.jsx("div", {}),
  /* @__PURE__ */ M.jsx("div", {}),
  /* @__PURE__ */ M.jsx("div", {}),
  /* @__PURE__ */ M.jsx("div", {})
] }), Gu = Qt.section``, ga = Ul(null), Bs = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: a,
  dataTransformer: s,
  dataFilter: d,
  maxItems: m
}) => {
  const [{ data: p, loading: f, error: _ }, x] = Ql(), [L, $] = jr([]), E = { ...e.dataSource, ...t };
  return xr(() => {
    x(E == null ? void 0 : E.url);
  }, [E == null ? void 0 : E.url]), xr(() => {
    const S = p == null ? void 0 : p.nodes.map(s), D = S == null ? void 0 : S.filter(
      (B) => d(B, t == null ? void 0 : t.filters)
    );
    $(m ? D == null ? void 0 : D.slice(0, m) : D);
  }, [p]), // Init the context to be used on its childrens
  /* @__PURE__ */ M.jsx(ga.Provider, { value: { feeds: L }, children: /* @__PURE__ */ M.jsxs(Gu, { children: [
    n,
    _ ? /* @__PURE__ */ M.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
      f && !(L != null && L.length) && /* @__PURE__ */ M.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ M.jsx(qu, {}) }),
      L != null && L.length ? a : !f && /* @__PURE__ */ M.jsx("p", { className: "text-center", children: r })
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
const ki = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), Si = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
}), Ws = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
}), Hs = l.shape({
  url: l.string,
  filters: l.string
}), Yu = l.shape({
  header: ki,
  ctaButton: Si,
  dataSource: Hs,
  maxItems: l.number
}), Xu = Qt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Vs = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const n = { ...e.header, ...t }, a = { ...e.ctaButton, ...r }, s = n.tag || "h2", d = s !== "h2", m = `text-${n.color} ${d ? "h2" : ""}`.trim();
  return /* @__PURE__ */ M.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ M.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ M.jsx(s, { className: m, children: n.text }) }),
        /* @__PURE__ */ M.jsx(Xu, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ M.jsx(
          rr,
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
            children: /* @__PURE__ */ M.jsx("a", { className: `btn btn-${a.color}`, href: a.url, children: a.text })
          }
        ) })
      ]
    }
  );
};
Vs.propTypes = {
  defaultProps: Yu,
  header: ki,
  ctaButton: Si
};
const qs = ({ children: e }) => /* @__PURE__ */ M.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ M.jsx("div", { className: "col", children: e }) });
qs.propTypes = {
  children: l.element
};
Qt.img`
  width: 100%;
`;
l.oneOf(["heading-hero", "story-hero"]), l.arrayOf(Fa), l.string;
l.bool, l.bool, l.bool, l.bool, l.string, l.func, l.node, l.bool, l.string, l.bool;
l.oneOf(["default", "bordered"]).isRequired, l.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, l.number, l.number, l.func.isRequired;
Qt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const Qu = hi(function(e, t) {
  const {
    id: r,
    selected: n,
    title: a,
    selectTab: s,
    leftKeyPressed: d,
    rightKeyPressed: m,
    icon: p,
    gaData: f
  } = e, { isReact: _, isBootstrap: x } = Ss(), L = Bl(null);
  Wl(t, () => ({
    focus() {
      L.current.focus();
    },
    scrollIntoView() {
      var E, S, D, B, H, Y, V;
      const T = ((E = L.current) == null ? void 0 : E.offsetWidth) / 2 + L.current.offsetLeft, ce = ((D = (S = L.current) == null ? void 0 : S.offsetParent) == null ? void 0 : D.scrollLeft) + ((H = (B = L.current) == null ? void 0 : B.offsetParent) == null ? void 0 : H.offsetWidth) / 2;
      (V = (Y = L.current) == null ? void 0 : Y.offsetParent) == null || V.scrollBy({
        left: T - ce
      });
    }
  }), []);
  const $ = (E) => {
    E.keyCode === 37 ? (E.preventDefault(), d()) : E.keyCode === 39 && (E.preventDefault(), m());
  };
  return /* @__PURE__ */ M.jsx(rr, { gaData: { ...f, text: a }, children: /* @__PURE__ */ M.jsxs(
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
        p && /* @__PURE__ */ M.jsx("i", { className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} me-1` })
      ]
    }
  ) });
});
Qu.propTypes = {
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
}, Gs = ({ children: e }) => /* @__PURE__ */ M.jsx(
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
Gs.propTypes = {
  children: l.oneOfType([
    l.element,
    l.arrayOf(l.element)
  ]).isRequired
};
const Ys = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ M.jsx(rr, { gaData: Ju, children: /* @__PURE__ */ M.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`
        }
      ) }, `bullet-${r}`)
    );
  return /* @__PURE__ */ M.jsx(Gs, { children: t });
};
Ys.propTypes = {
  buttonCount: l.number.isRequired
};
l.arrayOf(l.string).isRequired, l.func;
const Xs = ({ onClick: e = () => null }) => /* @__PURE__ */ M.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ M.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
Xs.propTypes = {
  onClick: l.func
};
const Qs = ({ onClick: e = () => null }) => /* @__PURE__ */ M.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ M.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
Qs.propTypes = {
  onClick: l.func
};
const _o = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, Js = ({ children: e = null }) => /* @__PURE__ */ M.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
Js.propTypes = {
  children: l.arrayOf(l.element)
};
const Zs = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ M.jsxs(Js, { children: [
  /* @__PURE__ */ M.jsx(rr, { gaData: { ..._o, text: "left chevron" }, children: /* @__PURE__ */ M.jsx(Qs, { onClick: e }) }),
  t,
  /* @__PURE__ */ M.jsx(rr, { gaData: { ..._o, text: "right chevron" }, children: /* @__PURE__ */ M.jsx(Xs, { onClick: e }) })
] });
Zs.propTypes = {
  children: l.element,
  onClick: l.func
};
const Ks = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ M.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ M.jsx("ul", { className: "glide__slides", children: t });
};
Ks.propTypes = {
  carouselItems: l.arrayOf(l.object)
};
function To(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? To(Object(r), !0).forEach(function(n) {
      Ku(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : To(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function na(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? na = function(t) {
    return typeof t;
  } : na = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, na(e);
}
function ya(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zu(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ba(e, t, r) {
  return t && Zu(e.prototype, t), e;
}
function Ku(e, t, r) {
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
  }), t && ri(e, t);
}
function Wr(e) {
  return Wr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Wr(e);
}
function ri(e, t) {
  return ri = Object.setPrototypeOf || function(r, n) {
    return r.__proto__ = n, r;
  }, ri(e, t);
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
function aa() {
  return typeof Reflect < "u" && Reflect.get ? aa = Reflect.get : aa = function(e, t, r) {
    var n = id(e, t);
    if (n) {
      var a = Object.getOwnPropertyDescriptor(n, t);
      return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
    }
  }, aa.apply(this, arguments);
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
function mr(e) {
  console.error("[Glide warn]: ".concat(e));
}
function gt(e) {
  return parseInt(e);
}
function sd(e) {
  return parseFloat(e);
}
function ni(e) {
  return typeof e == "string";
}
function Hr(e) {
  var t = na(e);
  return t === "function" || t === "object" && !!e;
}
function ua(e) {
  return typeof e == "function";
}
function el(e) {
  return typeof e > "u";
}
function ai(e) {
  return e.constructor === Array;
}
function ld(e, t, r) {
  var n = {};
  for (var a in t)
    ua(t[a]) ? n[a] = t[a](e, n, r) : mr("Extension must be a function");
  for (var s in n)
    ua(n[s].mount) && n[s].mount();
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
function ii(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(a) {
      t.classes.hasOwnProperty(a) && (r.classes[a] = Eo(Eo({}, e.classes[a]), t.classes[a]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var ud = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ya(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return ba(e, [{
    key: "on",
    value: function(t, r) {
      if (ai(t)) {
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
      if (ai(t)) {
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
    ya(this, e), this._c = {}, this._t = [], this._e = new ud(), this.disabled = !1, this.selector = t, this.settings = ii(od, r), this.index = this.settings.startAt;
  }
  return ba(e, [{
    key: "mount",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Hr(t) ? this._c = ld(this, t, this._e) : mr("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return ai(t) ? this._t = t : mr("You need to provide a array on `mutate()`"), this;
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
      return this.settings = ii(this.settings, t), t.hasOwnProperty("startAt") && (this.index = t.startAt), this._e.emit("update"), this;
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
      Hr(t) ? this._o = t : mr("Options must be an `object` instance.");
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
      mr("Invalid direction pattern [".concat(x).concat(_, "] has been used"));
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
function Co() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function va(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, a, s, d, m = 0, p = function() {
    m = r.leading === !1 ? 0 : Co(), n = null, d = e.apply(a, s), n || (a = s = null);
  }, f = function() {
    var _ = Co();
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
  }), r.on(["build.after", "update"], va(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function tl(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function oi(e) {
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
      this.slides = oi(this.wrapper.children).filter(function(a) {
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
      ni(a) && (a = document.querySelector(a)), a !== null ? n._r = a : mr("Root element must be a existing Html node");
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
      n._o = el(a) ? 0 : gt(a);
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
      s && (s.classList.add(a.slide.active), tl(s).forEach(function(d) {
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
          for (var S = 0; S < L.length; S++) {
            var D = L[S].cloneNode(!0);
            D.classList.add(p.slide.clone), a.push(D);
          }
          for (var B = 0; B < $.length; B++) {
            var H = $[B].cloneNode(!0);
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
var _r = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ya(this, e), this.listeners = t;
  }
  return ba(e, [{
    key: "on",
    value: function(t, r, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      ni(t) && (t = [t]);
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
      ni(t) && (t = [t]);
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
function kd(e, t, r) {
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
      n.on("resize", window, va(function() {
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
var Sd = ["ltr", "rtl"], xd = {
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
      Sd.indexOf(a) > -1 ? n._v = a : mr("Direction value must be `ltr` or `rtl`");
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
function Ad(e, t) {
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
  var n = [Ed, Cd, Ad, Od].concat(e._t, [Td]);
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
        ua(d) && ua(d().modify) ? a = d(e, t, r).modify(a) : mr("Transformer should be a function that returns an object with `modify()` method");
      }
      return a;
    }
  };
}
function Id(e, t, r) {
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
var rl = !1;
try {
  var Ao = Object.defineProperty({}, "passive", {
    get: function() {
      rl = !0;
    }
  });
  window.addEventListener("testPassive", null, Ao), window.removeEventListener("testPassive", null, Ao);
} catch {
}
var si = rl, Qn = ["touchstart", "mousedown"], Oo = ["touchmove", "mousemove"], Ro = ["touchend", "touchcancel", "mouseup", "mouseleave"], Io = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Pd(e, t, r) {
  var n = new _r(), a = 0, s = 0, d = 0, m = !1, p = si ? {
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
        var x = e.settings, L = x.touchAngle, $ = x.touchRatio, E = x.classes, S = this.touches(_), D = gt(S.pageX) - s, B = gt(S.pageY) - d, H = Math.abs(D << 2), Y = Math.abs(B << 2), V = Math.sqrt(H + Y), T = Math.sqrt(Y);
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
        var x = e.settings, L = x.perSwipe, $ = x.touchAngle, E = x.classes, S = this.touches(_), D = this.threshold(_), B = S.pageX - s, H = a * 180 / Math.PI;
        this.enable(), B > D && H < $ ? t.Run.make(t.Direction.resolve("".concat(L, "<"))) : B < -D && H < $ ? t.Run.make(t.Direction.resolve("".concat(L, ">"))) : t.Move.make(), t.Html.root.classList.remove(E.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var _ = this, x = e.settings, L = x.swipeThreshold, $ = x.dragThreshold;
      L && n.on(Qn[0], t.Html.wrapper, function(E) {
        _.start(E);
      }, p), $ && n.on(Qn[1], t.Html.wrapper, function(E) {
        _.start(E);
      }, p);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(Qn[0], t.Html.wrapper, p), n.off(Qn[1], t.Html.wrapper, p);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var _ = this;
      n.on(Oo, t.Html.wrapper, va(function(x) {
        _.move(x);
      }, e.settings.throttle), p);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(Oo, t.Html.wrapper, p);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var _ = this;
      n.on(Ro, t.Html.wrapper, function(x) {
        _.end(x);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(Ro, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(_) {
      return Io.indexOf(_.type) > -1 ? _ : _.touches[0] || _.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(_) {
      var x = e.settings;
      return Io.indexOf(_.type) > -1 ? x.dragThreshold : x.swipeThreshold;
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
function Ld(e, t, r) {
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
var Fd = '[data-glide-el="controls[nav]"]', xi = '[data-glide-el^="controls"]', Md = "".concat(xi, ' [data-glide-dir*="<"]'), jd = "".concat(xi, ' [data-glide-dir*=">"]');
function zd(e, t, r) {
  var n = new _r(), a = si ? {
    passive: !0
  } : !1, s = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(Fd), this._c = t.Html.root.querySelectorAll(xi), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(Md),
        next: t.Html.root.querySelectorAll(jd)
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
      p && (p.classList.add(m.classes.nav.active), tl(p).forEach(function(f) {
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
        oi(_).forEach(function(x) {
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
        oi(_).forEach(function(x) {
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
      !si && d.type === "touchstart" && d.preventDefault();
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
      this._e && (this.enable(), e.settings.autoplay && el(this._i) && (this._i = setInterval(function() {
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
function No(e) {
  return Hr(e) ? cd(e) : (mr("Breakpoints option must be an object"), {});
}
function Bd(e, t, r) {
  var n = new _r(), a = e.settings, s = No(a.breakpoints), d = Object.assign({}, a), m = {
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
  return Object.assign(a, m.match(s)), n.on("resize", window, va(function() {
    e.settings = ii(a, m.match(s));
  }, e.settings.throttle)), r.on("update", function() {
    s = No(s), d = Object.assign({}, a);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), m;
}
var Wd = {
  // Required
  Html: md,
  Translate: Id,
  Transition: Nd,
  Direction: _d,
  Peek: gd,
  Sizes: bd,
  Gaps: pd,
  Move: yd,
  Clones: wd,
  Resize: kd,
  Build: vd,
  Run: fd,
  // Optional
  Swipe: Pd,
  Images: Dd,
  Anchors: Ld,
  Controls: zd,
  Keyboard: $d,
  Autoplay: Ud,
  Breakpoints: Bd
}, Hd = /* @__PURE__ */ function(e) {
  ed(r, e);
  var t = ad(r);
  function r() {
    return ya(this, r), t.apply(this, arguments);
  }
  return ba(r, [{
    key: "mount",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return aa(Wr(r.prototype), "mount", this).call(this, Object.assign({}, Wd, n));
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
  const m = qd(t, n, s, d), p = new Hd(`#${e}`, m);
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
      ), E = x.clientWidth, S = 82, D = $[_], B = L.getBoundingClientRect().x, H = x.getBoundingClientRect().x - B, Y = D.getBoundingClientRect().x - B, V = D.getBoundingClientRect().x + D.getBoundingClientRect().width - B;
      if (_ === 0 || Y <= 0 + S)
        x.style.left = `${H - Y + S}px`;
      else if (V >= E - S) {
        const T = V - E;
        x.style.left = `${H - T - S}px`;
      }
    }
    Gd(f, _, r), f.setAttribute("data-current-index", _), a && a(_);
  }), p.mount(), p;
}
function Qd(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const nl = ({
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
  isDraggable: S = !0,
  hasShadow: D = !0
}) => {
  const B = `glide-${Math.ceil(Math.random() * 1e4)}`, H = Qd(n.length, e);
  return xr(() => {
    Xd({
      instanceName: B,
      perView: e,
      buttonCount: H,
      isFullWidth: p,
      onItemClick: $,
      hasPeek: E,
      isDraggable: S
    });
  }, [
    B,
    e,
    H,
    p,
    $,
    E,
    S
  ]), /* @__PURE__ */ M.jsxs(
    "div",
    {
      role: d,
      "aria-labelledby": m,
      className: `glide ${a}`,
      id: B,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": f,
      "data-image-auto-size": L,
      "data-has-shadow": D,
      children: [
        /* @__PURE__ */ M.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ M.jsx(Ks, { carouselItems: n }) }),
        s ? (
          // @ts-ignore
          /* @__PURE__ */ M.jsx(s, { instanceName: B })
        ) : /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
          x && /* @__PURE__ */ M.jsx(Ys, { buttonCount: H }),
          _ && /* @__PURE__ */ M.jsx(Zs, {})
        ] })
      ]
    }
  );
};
nl.propTypes = {
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
    item: /* @__PURE__ */ M.jsx(
      fr,
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
}, al = ({
  perView: e = 0,
  cardItems: t = [],
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: a = !1,
  width: s = void 0,
  maxWidth: d = void 0,
  imageAutoSize: m = !0
}) => {
  const p = parseInt(`${e}`, 10), [f, _] = jr(p), x = 1024, L = 768;
  xr(() => {
    const S = () => {
      const D = window.innerWidth;
      let B;
      switch (p) {
        case 3:
          D > x ? B = 3 : D > L ? B = 2 : B = 1;
          break;
        case 2:
          B = D < L ? 1 : 2;
          break;
        default:
          B = 1;
          break;
      }
      _(B);
    };
    return S(), window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, [p]);
  const $ = t.map(
    (S) => Jd(S, r, a, n)
  ), E = t.length > f;
  return /* @__PURE__ */ M.jsx(
    nl,
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
al.propTypes = {
  perView: l.string.isRequired,
  cardItems: l.arrayOf(
    l.shape({
      title: l.string.isRequired,
      content: l.string,
      eventLocation: l.string,
      eventTime: l.string,
      image: l.string,
      imageAltText: l.string,
      buttons: fr.propTypes.buttons,
      linkLabel: l.string,
      linkUrl: l.string,
      tags: fr.propTypes.tags
    })
  ).isRequired,
  cardType: fr.propTypes.type,
  cardEventFormat: fr.propTypes.eventFormat,
  cardHorizontal: fr.propTypes.horizontal,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
l.number.isRequired, l.arrayOf(l.object).isRequired, l.string, l.string, l.bool;
const da = {
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
l.string, da.imageItems, da.hasContent;
da.imageItems.isRequired, da.hasContent, l.string, l.string, l.bool;
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
var Po = ls;
Po.createRoot, Po.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const {
  entries: il,
  setPrototypeOf: Do,
  isFrozen: Zd,
  getPrototypeOf: Kd,
  getOwnPropertyDescriptor: ef
} = Object;
let {
  freeze: _t,
  seal: Lt,
  create: ol
} = Object, {
  apply: li,
  construct: ci
} = typeof Reflect < "u" && Reflect;
_t || (_t = function(t) {
  return t;
});
Lt || (Lt = function(t) {
  return t;
});
li || (li = function(t, r, n) {
  return t.apply(r, n);
});
ci || (ci = function(t, r) {
  return new t(...r);
});
const Jn = Tt(Array.prototype.forEach), tf = Tt(Array.prototype.lastIndexOf), Lo = Tt(Array.prototype.pop), dn = Tt(Array.prototype.push), rf = Tt(Array.prototype.splice), ia = Tt(String.prototype.toLowerCase), za = Tt(String.prototype.toString), Fo = Tt(String.prototype.match), fn = Tt(String.prototype.replace), nf = Tt(String.prototype.indexOf), af = Tt(String.prototype.trim), Yt = Tt(Object.prototype.hasOwnProperty), kt = Tt(RegExp.prototype.test), pn = of(TypeError);
function Tt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return li(e, t, n);
  };
}
function of(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ci(e, r);
  };
}
function Re(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ia;
  Do && Do(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (Zd(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function sf(e) {
  for (let t = 0; t < e.length; t++)
    Yt(e, t) || (e[t] = null);
  return e;
}
function Pr(e) {
  const t = ol(null);
  for (const [r, n] of il(e))
    Yt(e, r) && (Array.isArray(n) ? t[r] = sf(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = Pr(n) : t[r] = n);
  return t;
}
function hn(e, t) {
  for (; e !== null; ) {
    const n = ef(e, t);
    if (n) {
      if (n.get)
        return Tt(n.get);
      if (typeof n.value == "function")
        return Tt(n.value);
    }
    e = Kd(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Mo = _t(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), $a = _t(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ua = _t(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), lf = _t(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ba = _t(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), cf = _t(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), jo = _t(["#text"]), zo = _t(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Wa = _t(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), $o = _t(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Zn = _t(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), uf = Lt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), df = Lt(/<%[\w\W]*|[\w\W]*%>/gm), ff = Lt(/\$\{[\w\W]*/gm), pf = Lt(/^data-[\-\w.\u00B7-\uFFFF]+$/), hf = Lt(/^aria-[\-\w]+$/), sl = Lt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), mf = Lt(/^(?:\w+script|data):/i), gf = Lt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ll = Lt(/^html$/i), yf = Lt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Uo = /* @__PURE__ */ Object.freeze({
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
const mn = {
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
}, Bo = function() {
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
  const t = (b) => cl(b);
  if (t.version = "3.2.5", t.removed = [], !e || !e.document || e.document.nodeType !== mn.document || !e.Element)
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
  } = e, E = p.prototype, S = hn(E, "cloneNode"), D = hn(E, "remove"), B = hn(E, "nextSibling"), H = hn(E, "childNodes"), Y = hn(E, "parentNode");
  if (typeof d == "function") {
    const b = r.createElement("template");
    b.content && b.content.ownerDocument && (r = b.content.ownerDocument);
  }
  let V, T = "";
  const {
    implementation: ce,
    createNodeIterator: _e,
    createDocumentFragment: Pe,
    getElementsByTagName: Le
  } = r, {
    importNode: He
  } = n;
  let ue = Bo();
  t.isSupported = typeof il == "function" && typeof Y == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: Ie,
    TMPLIT_EXPR: Ne,
    DATA_ATTR: Ce,
    ARIA_ATTR: lt,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Ae,
    CUSTOM_ELEMENT: Ue
  } = Uo;
  let {
    IS_ALLOWED_URI: Ze
  } = Uo, oe = null;
  const z = Re({}, [...Mo, ...$a, ...Ua, ...Ba, ...jo]);
  let A = null;
  const j = Re({}, [...zo, ...Wa, ...$o, ...Zn]);
  let F = Object.seal(ol(null, {
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
  })), y = null, re = null, O = !0, ne = !0, ee = !1, te = !0, G = !1, ie = !0, se = !1, K = !1, he = !1, Z = !1, le = !1, $e = !1, me = !0, st = !1;
  const qe = "user-content-";
  let ge = !0, q = !1, ae = {}, Ge = null;
  const dt = Re({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Me = null;
  const Jt = Re({}, ["audio", "video", "img", "source", "image", "track"]);
  let Nt = null;
  const nr = Re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), yt = "http://www.w3.org/1998/Math/MathML", pt = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let ft = nt, Ft = !1, Mt = null;
  const Tr = Re({}, [yt, pt, nt], za);
  let ot = Re({}, ["mi", "mo", "mn", "ms", "mtext"]), bt = Re({}, ["annotation-xml"]);
  const Zt = Re({}, ["title", "style", "font", "a", "script"]);
  let Te = null;
  const jt = ["application/xhtml+xml", "text/html"], Kt = "text/html";
  let ve = null, Ke = null;
  const er = r.createElement("form"), vt = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Pt = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ke && Ke === w)) {
      if ((!w || typeof w != "object") && (w = {}), w = Pr(w), Te = // eslint-disable-next-line unicorn/prefer-includes
      jt.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Kt : w.PARSER_MEDIA_TYPE, ve = Te === "application/xhtml+xml" ? za : ia, oe = Yt(w, "ALLOWED_TAGS") ? Re({}, w.ALLOWED_TAGS, ve) : z, A = Yt(w, "ALLOWED_ATTR") ? Re({}, w.ALLOWED_ATTR, ve) : j, Mt = Yt(w, "ALLOWED_NAMESPACES") ? Re({}, w.ALLOWED_NAMESPACES, za) : Tr, Nt = Yt(w, "ADD_URI_SAFE_ATTR") ? Re(Pr(nr), w.ADD_URI_SAFE_ATTR, ve) : nr, Me = Yt(w, "ADD_DATA_URI_TAGS") ? Re(Pr(Jt), w.ADD_DATA_URI_TAGS, ve) : Jt, Ge = Yt(w, "FORBID_CONTENTS") ? Re({}, w.FORBID_CONTENTS, ve) : dt, y = Yt(w, "FORBID_TAGS") ? Re({}, w.FORBID_TAGS, ve) : {}, re = Yt(w, "FORBID_ATTR") ? Re({}, w.FORBID_ATTR, ve) : {}, ae = Yt(w, "USE_PROFILES") ? w.USE_PROFILES : !1, O = w.ALLOW_ARIA_ATTR !== !1, ne = w.ALLOW_DATA_ATTR !== !1, ee = w.ALLOW_UNKNOWN_PROTOCOLS || !1, te = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, G = w.SAFE_FOR_TEMPLATES || !1, ie = w.SAFE_FOR_XML !== !1, se = w.WHOLE_DOCUMENT || !1, Z = w.RETURN_DOM || !1, le = w.RETURN_DOM_FRAGMENT || !1, $e = w.RETURN_TRUSTED_TYPE || !1, he = w.FORCE_BODY || !1, me = w.SANITIZE_DOM !== !1, st = w.SANITIZE_NAMED_PROPS || !1, ge = w.KEEP_CONTENT !== !1, q = w.IN_PLACE || !1, Ze = w.ALLOWED_URI_REGEXP || sl, ft = w.NAMESPACE || nt, ot = w.MATHML_TEXT_INTEGRATION_POINTS || ot, bt = w.HTML_INTEGRATION_POINTS || bt, F = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && vt(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (F.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && vt(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (F.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (F.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), G && (ne = !1), le && (Z = !0), ae && (oe = Re({}, jo), A = [], ae.html === !0 && (Re(oe, Mo), Re(A, zo)), ae.svg === !0 && (Re(oe, $a), Re(A, Wa), Re(A, Zn)), ae.svgFilters === !0 && (Re(oe, Ua), Re(A, Wa), Re(A, Zn)), ae.mathMl === !0 && (Re(oe, Ba), Re(A, $o), Re(A, Zn))), w.ADD_TAGS && (oe === z && (oe = Pr(oe)), Re(oe, w.ADD_TAGS, ve)), w.ADD_ATTR && (A === j && (A = Pr(A)), Re(A, w.ADD_ATTR, ve)), w.ADD_URI_SAFE_ATTR && Re(Nt, w.ADD_URI_SAFE_ATTR, ve), w.FORBID_CONTENTS && (Ge === dt && (Ge = Pr(Ge)), Re(Ge, w.FORBID_CONTENTS, ve)), ge && (oe["#text"] = !0), se && Re(oe, ["html", "head", "body"]), oe.table && (Re(oe, ["tbody"]), delete y.tbody), w.TRUSTED_TYPES_POLICY) {
        if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        V = w.TRUSTED_TYPES_POLICY, T = V.createHTML("");
      } else
        V === void 0 && (V = vf($, a)), V !== null && typeof T == "string" && (T = V.createHTML(""));
      _t && _t(w), Ke = w;
    }
  }, zt = Re({}, [...$a, ...Ua, ...lf]), $t = Re({}, [...Ba, ...cf]), yr = function(w) {
    let C = Y(w);
    (!C || !C.tagName) && (C = {
      namespaceURI: ft,
      tagName: "template"
    });
    const X = ia(w.tagName), ye = ia(C.tagName);
    return Mt[w.namespaceURI] ? w.namespaceURI === pt ? C.namespaceURI === nt ? X === "svg" : C.namespaceURI === yt ? X === "svg" && (ye === "annotation-xml" || ot[ye]) : !!zt[X] : w.namespaceURI === yt ? C.namespaceURI === nt ? X === "math" : C.namespaceURI === pt ? X === "math" && bt[ye] : !!$t[X] : w.namespaceURI === nt ? C.namespaceURI === pt && !bt[ye] || C.namespaceURI === yt && !ot[ye] ? !1 : !$t[X] && (Zt[X] || !zt[X]) : !!(Te === "application/xhtml+xml" && Mt[w.namespaceURI]) : !1;
  }, at = function(w) {
    dn(t.removed, {
      element: w
    });
    try {
      Y(w).removeChild(w);
    } catch {
      D(w);
    }
  }, Et = function(w, C) {
    try {
      dn(t.removed, {
        attribute: C.getAttributeNode(w),
        from: C
      });
    } catch {
      dn(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(w), w === "is")
      if (Z || le)
        try {
          at(C);
        } catch {
        }
      else
        try {
          C.setAttribute(w, "");
        } catch {
        }
  }, ar = function(w) {
    let C = null, X = null;
    if (he)
      w = "<remove></remove>" + w;
    else {
      const De = Fo(w, /^[\r\n\t ]+/);
      X = De && De[0];
    }
    Te === "application/xhtml+xml" && ft === nt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const ye = V ? V.createHTML(w) : w;
    if (ft === nt)
      try {
        C = new L().parseFromString(ye, Te);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = ce.createDocument(ft, "template", null);
      try {
        C.documentElement.innerHTML = Ft ? T : ye;
      } catch {
      }
    }
    const ke = C.body || C.documentElement;
    return w && X && ke.insertBefore(r.createTextNode(X), ke.childNodes[0] || null), ft === nt ? Le.call(C, se ? "html" : "body")[0] : se ? C.documentElement : ke;
  }, ir = function(w) {
    return _e.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Ct = function(w) {
    return w instanceof x && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof _) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, tr = function(w) {
    return typeof m == "function" && w instanceof m;
  };
  function Ye(b, w, C) {
    Jn(b, (X) => {
      X.call(t, w, C, Ke);
    });
  }
  const Ut = function(w) {
    let C = null;
    if (Ye(ue.beforeSanitizeElements, w, null), Ct(w))
      return at(w), !0;
    const X = ve(w.nodeName);
    if (Ye(ue.uponSanitizeElement, w, {
      tagName: X,
      allowedTags: oe
    }), w.hasChildNodes() && !tr(w.firstElementChild) && kt(/<[/\w!]/g, w.innerHTML) && kt(/<[/\w!]/g, w.textContent) || w.nodeType === mn.progressingInstruction || ie && w.nodeType === mn.comment && kt(/<[/\w]/g, w.data))
      return at(w), !0;
    if (!oe[X] || y[X]) {
      if (!y[X] && At(X) && (F.tagNameCheck instanceof RegExp && kt(F.tagNameCheck, X) || F.tagNameCheck instanceof Function && F.tagNameCheck(X)))
        return !1;
      if (ge && !Ge[X]) {
        const ye = Y(w) || w.parentNode, ke = H(w) || w.childNodes;
        if (ke && ye) {
          const De = ke.length;
          for (let we = De - 1; we >= 0; --we) {
            const Xe = S(ke[we], !0);
            Xe.__removalCount = (w.__removalCount || 0) + 1, ye.insertBefore(Xe, B(w));
          }
        }
      }
      return at(w), !0;
    }
    return w instanceof p && !yr(w) || (X === "noscript" || X === "noembed" || X === "noframes") && kt(/<\/no(script|embed|frames)/i, w.innerHTML) ? (at(w), !0) : (G && w.nodeType === mn.text && (C = w.textContent, Jn([pe, Ie, Ne], (ye) => {
      C = fn(C, ye, " ");
    }), w.textContent !== C && (dn(t.removed, {
      element: w.cloneNode()
    }), w.textContent = C)), Ye(ue.afterSanitizeElements, w, null), !1);
  }, or = function(w, C, X) {
    if (me && (C === "id" || C === "name") && (X in r || X in er))
      return !1;
    if (!(ne && !re[C] && kt(Ce, C))) {
      if (!(O && kt(lt, C))) {
        if (!A[C] || re[C]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(At(w) && (F.tagNameCheck instanceof RegExp && kt(F.tagNameCheck, w) || F.tagNameCheck instanceof Function && F.tagNameCheck(w)) && (F.attributeNameCheck instanceof RegExp && kt(F.attributeNameCheck, C) || F.attributeNameCheck instanceof Function && F.attributeNameCheck(C)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            C === "is" && F.allowCustomizedBuiltInElements && (F.tagNameCheck instanceof RegExp && kt(F.tagNameCheck, X) || F.tagNameCheck instanceof Function && F.tagNameCheck(X)))
          ) return !1;
        } else if (!Nt[C]) {
          if (!kt(Ze, fn(X, Ae, ""))) {
            if (!((C === "src" || C === "xlink:href" || C === "href") && w !== "script" && nf(X, "data:") === 0 && Me[w])) {
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
    return w !== "annotation-xml" && Fo(w, Ue);
  }, sr = function(w) {
    Ye(ue.beforeSanitizeAttributes, w, null);
    const {
      attributes: C
    } = w;
    if (!C || Ct(w))
      return;
    const X = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: A,
      forceKeepAttr: void 0
    };
    let ye = C.length;
    for (; ye--; ) {
      const ke = C[ye], {
        name: De,
        namespaceURI: we,
        value: Xe
      } = ke, Ve = ve(De);
      let et = De === "value" ? Xe : af(Xe);
      if (X.attrName = Ve, X.attrValue = et, X.keepAttr = !0, X.forceKeepAttr = void 0, Ye(ue.uponSanitizeAttribute, w, X), et = X.attrValue, st && (Ve === "id" || Ve === "name") && (Et(De, w), et = qe + et), ie && kt(/((--!?|])>)|<\/(style|title)/i, et)) {
        Et(De, w);
        continue;
      }
      if (X.forceKeepAttr || (Et(De, w), !X.keepAttr))
        continue;
      if (!te && kt(/\/>/i, et)) {
        Et(De, w);
        continue;
      }
      G && Jn([pe, Ie, Ne], (Bt) => {
        et = fn(et, Bt, " ");
      });
      const cr = ve(w.nodeName);
      if (or(cr, Ve, et)) {
        if (V && typeof $ == "object" && typeof $.getAttributeType == "function" && !we)
          switch ($.getAttributeType(cr, Ve)) {
            case "TrustedHTML": {
              et = V.createHTML(et);
              break;
            }
            case "TrustedScriptURL": {
              et = V.createScriptURL(et);
              break;
            }
          }
        try {
          we ? w.setAttributeNS(we, De, et) : w.setAttribute(De, et), Ct(w) ? at(w) : Lo(t.removed);
        } catch {
        }
      }
    }
    Ye(ue.afterSanitizeAttributes, w, null);
  }, lr = function b(w) {
    let C = null;
    const X = ir(w);
    for (Ye(ue.beforeSanitizeShadowDOM, w, null); C = X.nextNode(); )
      Ye(ue.uponSanitizeShadowNode, C, null), Ut(C), sr(C), C.content instanceof s && b(C.content);
    Ye(ue.afterSanitizeShadowDOM, w, null);
  };
  return t.sanitize = function(b) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, X = null, ye = null, ke = null;
    if (Ft = !b, Ft && (b = "<!-->"), typeof b != "string" && !tr(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw pn("dirty is not a string, aborting");
      } else
        throw pn("toString is not a function");
    if (!t.isSupported)
      return b;
    if (K || Pt(w), t.removed = [], typeof b == "string" && (q = !1), q) {
      if (b.nodeName) {
        const Xe = ve(b.nodeName);
        if (!oe[Xe] || y[Xe])
          throw pn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof m)
      C = ar("<!---->"), X = C.ownerDocument.importNode(b, !0), X.nodeType === mn.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? C = X : C.appendChild(X);
    else {
      if (!Z && !G && !se && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return V && $e ? V.createHTML(b) : b;
      if (C = ar(b), !C)
        return Z ? null : $e ? T : "";
    }
    C && he && at(C.firstChild);
    const De = ir(q ? b : C);
    for (; ye = De.nextNode(); )
      Ut(ye), sr(ye), ye.content instanceof s && lr(ye.content);
    if (q)
      return b;
    if (Z) {
      if (le)
        for (ke = Pe.call(C.ownerDocument); C.firstChild; )
          ke.appendChild(C.firstChild);
      else
        ke = C;
      return (A.shadowroot || A.shadowrootmode) && (ke = He.call(n, ke, !0)), ke;
    }
    let we = se ? C.outerHTML : C.innerHTML;
    return se && oe["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && kt(ll, C.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + we), G && Jn([pe, Ie, Ne], (Xe) => {
      we = fn(we, Xe, " ");
    }), V && $e ? V.createHTML(we) : we;
  }, t.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pt(b), K = !0;
  }, t.clearConfig = function() {
    Ke = null, K = !1;
  }, t.isValidAttribute = function(b, w, C) {
    Ke || Pt({});
    const X = ve(b), ye = ve(w);
    return or(X, ye, C);
  }, t.addHook = function(b, w) {
    typeof w == "function" && dn(ue[b], w);
  }, t.removeHook = function(b, w) {
    if (w !== void 0) {
      const C = tf(ue[b], w);
      return C === -1 ? void 0 : rf(ue[b], C, 1)[0];
    }
    return Lo(ue[b]);
  }, t.removeHooks = function(b) {
    ue[b] = [];
  }, t.removeAllHooks = function() {
    ue = Bo();
  }, t;
}
cl();
var ul = { exports: {} }, Ha, Wo;
function wf() {
  if (Wo) return Ha;
  Wo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ha = e, Ha;
}
var Va, Ho;
function kf() {
  if (Ho) return Va;
  Ho = 1;
  var e = wf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Va = function() {
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
  }, Va;
}
ul.exports = kf()();
var Sf = ul.exports;
const ct = /* @__PURE__ */ cs(Sf);
ct.shape({
  event: ct.string,
  action: ct.string,
  name: ct.string,
  region: ct.string,
  section: ct.string,
  component: ct.string,
  type: ct.string,
  text: ct.string
});
const Tn = ({ children: e }) => /* @__PURE__ */ it.jsx(it.Fragment, { children: e });
Tn.propTypes = {
  children: ct.oneOfType([
    ct.arrayOf(ct.node),
    ct.node,
    ct.string
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
  ...Tn.propTypes
});
const dl = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ it.jsx("div", { className: t, ...r, children: /* @__PURE__ */ it.jsx("div", { className: "row", children: e }) });
dl.propTypes = {
  children: Tn.propTypes.children
};
({
  ...dl.propTypes
});
Tn.propTypes.children, ct.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Tn.propTypes.children;
function _i({
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
}, Vo = ["newsUnits", "interests", "audiences", "eventTypes"], _f = (e, t = "") => {
  if (!t) return !0;
  const r = t.split(",");
  for (let n = 0; n < Vo.length; n += 1) {
    const a = Vo[n];
    for (let s = 0; s < r.length; s += 1) {
      const d = r[s], p = (e[a] || "").match(new RegExp(d, "gi"));
      if ((p == null ? void 0 : p.length) > 0) return !0;
    }
  }
  return !1;
}, qo = (e, t) => {
  let r = e;
  return r.length > t && (r = r.substr(0, r.lastIndexOf(" ", t)), r += "..."), r;
}, Tf = ({ node: e }, t) => ({
  index: t,
  id: e.nid,
  imageUrl: e.image_url,
  imageAltText: e.image_alt,
  title: qo(e.title, 80),
  content: qo(e == null ? void 0 : e.clas_teaser, 140),
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
        Vs,
        {
          header: t,
          ctaButton: r,
          defaultProps: wn
        }
      ) : null,
      renderBody: /* @__PURE__ */ it.jsx(qs, { children: e }),
      dataTransformer: Tf,
      dataFilter: _f,
      dataSource: d,
      defaultProps: wn,
      noFeedText: "No news to show.",
      maxItems: a
    }
  );
};
Fr.propTypes = {
  header: ki,
  ctaButton: Si,
  dataSource: Hs,
  maxItems: ct.number,
  children: ct.element
};
var fl = { exports: {} }, We = {};
var Go;
function Ef() {
  if (Go) return We;
  Go = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), $ = Symbol.for("react.client.reference");
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var D = S.$$typeof;
      switch (D) {
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
                case m:
                case x:
                case _:
                  return S;
                case s:
                  return S;
                default:
                  return D;
              }
          }
        case t:
          return D;
      }
    }
  }
  return We.ContextConsumer = s, We.ContextProvider = d, We.Element = e, We.ForwardRef = m, We.Fragment = r, We.Lazy = x, We.Memo = _, We.Portal = t, We.Profiler = a, We.StrictMode = n, We.Suspense = p, We.SuspenseList = f, We.isContextConsumer = function(S) {
    return E(S) === s;
  }, We.isContextProvider = function(S) {
    return E(S) === d;
  }, We.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, We.isForwardRef = function(S) {
    return E(S) === m;
  }, We.isFragment = function(S) {
    return E(S) === r;
  }, We.isLazy = function(S) {
    return E(S) === x;
  }, We.isMemo = function(S) {
    return E(S) === _;
  }, We.isPortal = function(S) {
    return E(S) === t;
  }, We.isProfiler = function(S) {
    return E(S) === a;
  }, We.isStrictMode = function(S) {
    return E(S) === n;
  }, We.isSuspense = function(S) {
    return E(S) === p;
  }, We.isSuspenseList = function(S) {
    return E(S) === f;
  }, We.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === a || S === n || S === p || S === f || S === L || typeof S == "object" && S !== null && (S.$$typeof === x || S.$$typeof === _ || S.$$typeof === d || S.$$typeof === s || S.$$typeof === m || S.$$typeof === $ || S.getModuleId !== void 0);
  }, We.typeOf = E, We;
}
fl.exports = Ef();
var pl = fl.exports;
function Cf(e) {
  function t(z, A, j, F, y) {
    for (var re = 0, O = 0, ne = 0, ee = 0, te, G, ie = 0, se = 0, K, he = K = te = 0, Z = 0, le = 0, $e = 0, me = 0, st = j.length, qe = st - 1, ge, q = "", ae = "", Ge = "", dt = "", Me; Z < st; ) {
      if (G = j.charCodeAt(Z), Z === qe && O + ee + ne + re !== 0 && (O !== 0 && (G = O === 47 ? 10 : 47), ee = ne = re = 0, st++, qe++), O + ee + ne + re === 0) {
        if (Z === qe && (0 < le && (q = q.replace(L, "")), 0 < q.trim().length)) {
          switch (G) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              q += j.charAt(Z);
          }
          G = 59;
        }
        switch (G) {
          case 123:
            for (q = q.trim(), te = q.charCodeAt(0), K = 1, me = ++Z; Z < st; ) {
              switch (G = j.charCodeAt(Z)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (G = j.charCodeAt(Z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = Z + 1; he < qe; ++he)
                          switch (j.charCodeAt(he)) {
                            case 47:
                              if (G === 42 && j.charCodeAt(he - 1) === 42 && Z + 2 !== he) {
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
                  for (; Z++ < qe && j.charCodeAt(Z) !== G; )
                    ;
              }
              if (K === 0) break;
              Z++;
            }
            switch (K = j.substring(me, Z), te === 0 && (te = (q = q.replace(x, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (q = q.replace(L, "")), G = q.charCodeAt(1), G) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = A;
                    break;
                  default:
                    le = lt;
                }
                if (K = t(A, le, K, G, y + 1), me = K.length, 0 < Ae && (le = r(lt, q, $e), Me = m(3, K, le, A, Ie, pe, me, G, y, F), q = le.join(""), Me !== void 0 && (me = (K = Me.trim()).length) === 0 && (G = 0, K = "")), 0 < me) switch (G) {
                  case 115:
                    q = q.replace(ce, d);
                  case 100:
                  case 109:
                  case 45:
                    K = q + "{" + K + "}";
                    break;
                  case 107:
                    q = q.replace(H, "$1 $2"), K = q + "{" + K + "}", K = Ce === 1 || Ce === 2 && s("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = q + K, F === 112 && (K = (ae += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(A, r(A, q, $e), K, F, y + 1);
            }
            Ge += K, K = $e = le = he = te = 0, q = "", G = j.charCodeAt(++Z);
            break;
          case 125:
          case 59:
            if (q = (0 < le ? q.replace(L, "") : q).trim(), 1 < (me = q.length)) switch (he === 0 && (te = q.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (me = (q = q.replace(" ", ":")).length), 0 < Ae && (Me = m(1, q, A, z, Ie, pe, ae.length, F, y, F)) !== void 0 && (me = (q = Me.trim()).length) === 0 && (q = "\0\0"), te = q.charCodeAt(0), G = q.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (G === 105 || G === 99) {
                  dt += q + j.charAt(Z);
                  break;
                }
              default:
                q.charCodeAt(me - 1) !== 58 && (ae += a(q, te, G, q.charCodeAt(2)));
            }
            $e = le = he = te = 0, q = "", G = j.charCodeAt(++Z);
        }
      }
      switch (G) {
        case 13:
        case 10:
          O === 47 ? O = 0 : 1 + te === 0 && F !== 107 && 0 < q.length && (le = 1, q += "\0"), 0 < Ae * Ze && m(0, q, A, z, Ie, pe, ae.length, F, y, F), pe = 1, Ie++;
          break;
        case 59:
        case 125:
          if (O + ee + ne + re === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, ge = j.charAt(Z), G) {
            case 9:
            case 32:
              if (ee + re + O === 0) switch (ie) {
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
              if (ee + O + re + Ne === 0 && 0 < he) switch (Z - he) {
                case 2:
                  ie === 112 && j.charCodeAt(Z - 3) === 58 && (Ne = ie);
                case 8:
                  se === 111 && (Ne = se);
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
                if (te === 0) switch (2 * ie + 3 * se) {
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
                  switch (2 * G + 3 * j.charCodeAt(Z + 1)) {
                    case 235:
                      O = 47;
                      break;
                    case 220:
                      me = Z, O = 42;
                  }
                  break;
                case 42:
                  G === 47 && ie === 42 && me + 2 !== Z && (j.charCodeAt(me + 2) === 33 && (ae += j.substring(me, Z + 1)), ge = "", O = 0);
              }
          }
          O === 0 && (q += ge);
      }
      se = ie, ie = G, Z++;
    }
    if (me = ae.length, 0 < me) {
      if (le = A, 0 < Ae && (Me = m(2, ae, le, z, Ie, pe, me, F, y, F), Me !== void 0 && (ae = Me).length === 0)) return dt + ae + Ge;
      if (ae = le.join(",") + "{" + ae + "}", Ce * Ne !== 0) {
        switch (Ce !== 2 || s(ae, 2) || (Ne = 0), Ne) {
          case 111:
            ae = ae.replace(V, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(Y, "::-webkit-input-$1") + ae.replace(Y, "::-moz-$1") + ae.replace(Y, ":-ms-input-$1") + ae;
        }
        Ne = 0;
      }
    }
    return dt + ae + Ge;
  }
  function r(z, A, j) {
    var F = A.trim().split(D);
    A = F;
    var y = F.length, re = z.length;
    switch (re) {
      case 0:
      case 1:
        var O = 0;
        for (z = re === 0 ? "" : z[0] + " "; O < y; ++O)
          A[O] = n(z, A[O], j).trim();
        break;
      default:
        var ne = O = 0;
        for (A = []; O < y; ++O)
          for (var ee = 0; ee < re; ++ee)
            A[ne++] = n(z[ee] + " ", F[O], j).trim();
    }
    return A;
  }
  function n(z, A, j) {
    var F = A.charCodeAt(0);
    switch (33 > F && (F = (A = A.trim()).charCodeAt(0)), F) {
      case 38:
        return A.replace(B, "$1" + z.trim());
      case 58:
        return z.trim() + A.replace(B, "$1" + z.trim());
      default:
        if (0 < 1 * j && 0 < A.indexOf("\f")) return A.replace(B, (z.charCodeAt(0) === 58 ? "" : "$1") + z.trim());
    }
    return z + A;
  }
  function a(z, A, j, F) {
    var y = z + ";", re = 2 * A + 3 * j + 4 * F;
    if (re === 944) {
      z = y.indexOf(":", 9) + 1;
      var O = y.substring(z, y.length - 1).trim();
      return O = y.substring(0, z).trim() + O + ";", Ce === 1 || Ce === 2 && s(O, 1) ? "-webkit-" + O + O : O;
    }
    if (Ce === 0 || Ce === 2 && !s(y, 1)) return y;
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
        return E.test(y) ? y.replace($, ":-webkit-") + y.replace($, ":-moz-") + y : y;
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
        if (He.test(z) === !0) return (O = z.substring(z.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(z.replace("stretch", "fill-available"), A, j, F).replace(":fill-available", ":stretch") : y.replace(O, "-webkit-" + O) + y.replace(O, "-moz-" + O.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, j + F === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(z, A) {
    var j = z.indexOf(A === 1 ? ":" : "{"), F = z.substring(0, A !== 3 ? j : 10);
    return j = z.substring(j + 1, z.length - 1), Ue(A !== 2 ? F : F.replace(Le, "$1"), j, A);
  }
  function d(z, A) {
    var j = a(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return j !== A + ";" ? j.replace(_e, " or ($1)").substring(4) : "(" + A + ")";
  }
  function m(z, A, j, F, y, re, O, ne, ee, te) {
    for (var G = 0, ie = A, se; G < Ae; ++G)
      switch (se = Fe[G].call(_, z, ie, j, F, y, re, O, ne, ee, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ie = se;
      }
    if (ie !== A) return ie;
  }
  function p(z) {
    switch (z) {
      case void 0:
      case null:
        Ae = Fe.length = 0;
        break;
      default:
        if (typeof z == "function") Fe[Ae++] = z;
        else if (typeof z == "object") for (var A = 0, j = z.length; A < j; ++A)
          p(z[A]);
        else Ze = !!z | 0;
    }
    return p;
  }
  function f(z) {
    return z = z.prefix, z !== void 0 && (Ue = null, z ? typeof z != "function" ? Ce = 1 : (Ce = 2, Ue = z) : Ce = 0), f;
  }
  function _(z, A) {
    var j = z;
    if (33 > j.charCodeAt(0) && (j = j.trim()), oe = j, j = [oe], 0 < Ae) {
      var F = m(-1, A, j, j, Ie, pe, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (A = F);
    }
    var y = t(lt, j, A, 0, 0);
    return 0 < Ae && (F = m(-2, y, j, j, Ie, pe, y.length, 0, 0, 0), F !== void 0 && (y = F)), oe = "", Ne = 0, pe = Ie = 1, y;
  }
  var x = /^\0+/g, L = /[\0\r\f]/g, $ = /: */g, E = /zoo|gra/, S = /([,: ])(transform)/g, D = /,\r+?/g, B = /([\t\r\n ])*\f?&/g, H = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, V = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, _e = /([\s\S]*?);/g, Pe = /-self|flex-/g, Le = /[^]*?(:[rp][el]a[\w-]+)[^]*/, He = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, pe = 1, Ie = 1, Ne = 0, Ce = 1, lt = [], Fe = [], Ae = 0, Ue = null, Ze = 0, oe = "";
  return _.use = p, _.set = f, e !== void 0 && f(e), _;
}
var Af = {
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
var Rf = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Yo = /* @__PURE__ */ Of(
  function(e) {
    return Rf.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), hl = { exports: {} }, ze = {};
var Xo;
function If() {
  if (Xo) return ze;
  Xo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, L = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, H = e ? Symbol.for("react.scope") : 60119;
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
    return Y(T) === f;
  }
  return ze.AsyncMode = p, ze.ConcurrentMode = f, ze.ContextConsumer = m, ze.ContextProvider = d, ze.Element = t, ze.ForwardRef = _, ze.Fragment = n, ze.Lazy = E, ze.Memo = $, ze.Portal = r, ze.Profiler = s, ze.StrictMode = a, ze.Suspense = x, ze.isAsyncMode = function(T) {
    return V(T) || Y(T) === p;
  }, ze.isConcurrentMode = V, ze.isContextConsumer = function(T) {
    return Y(T) === m;
  }, ze.isContextProvider = function(T) {
    return Y(T) === d;
  }, ze.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, ze.isForwardRef = function(T) {
    return Y(T) === _;
  }, ze.isFragment = function(T) {
    return Y(T) === n;
  }, ze.isLazy = function(T) {
    return Y(T) === E;
  }, ze.isMemo = function(T) {
    return Y(T) === $;
  }, ze.isPortal = function(T) {
    return Y(T) === r;
  }, ze.isProfiler = function(T) {
    return Y(T) === s;
  }, ze.isStrictMode = function(T) {
    return Y(T) === a;
  }, ze.isSuspense = function(T) {
    return Y(T) === x;
  }, ze.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === n || T === f || T === s || T === a || T === x || T === L || typeof T == "object" && T !== null && (T.$$typeof === E || T.$$typeof === $ || T.$$typeof === d || T.$$typeof === m || T.$$typeof === _ || T.$$typeof === D || T.$$typeof === B || T.$$typeof === H || T.$$typeof === S);
  }, ze.typeOf = Y, ze;
}
hl.exports = If();
var Nf = hl.exports, Ti = Nf, Pf = {
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
}, Ei = {};
Ei[Ti.ForwardRef] = Lf;
Ei[Ti.Memo] = ml;
function Qo(e) {
  return Ti.isMemo(e) ? ml : Ei[e.$$typeof] || Pf;
}
var Ff = Object.defineProperty, Mf = Object.getOwnPropertyNames, Jo = Object.getOwnPropertySymbols, jf = Object.getOwnPropertyDescriptor, zf = Object.getPrototypeOf, Zo = Object.prototype;
function gl(e, t, r) {
  if (typeof t != "string") {
    if (Zo) {
      var n = zf(t);
      n && n !== Zo && gl(e, n, r);
    }
    var a = Mf(t);
    Jo && (a = a.concat(Jo(t)));
    for (var s = Qo(e), d = Qo(t), m = 0; m < a.length; ++m) {
      var p = a[m];
      if (!Df[p] && !(r && r[p]) && !(d && d[p]) && !(s && s[p])) {
        var f = jf(t, p);
        try {
          Ff(e, p, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var $f = gl;
const Uf = /* @__PURE__ */ cs($f);
var mt = { env: { NODE_ENV: "production" } };
function hr() {
  return (hr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Ko = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, ui = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !pl.typeOf(e);
}, fa = Object.freeze([]), Sr = Object.freeze({});
function kn(e) {
  return typeof e == "function";
}
function es(e) {
  return e.displayName || e.name || "Component";
}
function Ci(e) {
  return e && typeof e.styledComponentId == "string";
}
var Vr = typeof mt < "u" && mt.env !== void 0 && (mt.env.REACT_APP_SC_ATTR || mt.env.SC_ATTR) || "data-styled", Ai = typeof window < "u" && "HTMLElement" in window, Bf = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof mt < "u" && mt.env !== void 0 && (mt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && mt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? mt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && mt.env.REACT_APP_SC_DISABLE_SPEEDY : mt.env.SC_DISABLE_SPEEDY !== void 0 && mt.env.SC_DISABLE_SPEEDY !== "" ? mt.env.SC_DISABLE_SPEEDY !== "false" && mt.env.SC_DISABLE_SPEEDY : mt.env.NODE_ENV !== "production"));
function En(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Wf = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, d = s; r >= d; ) (d <<= 1) < 0 && En(16, "" + r);
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
}(), oa = /* @__PURE__ */ new Map(), pa = /* @__PURE__ */ new Map(), bn = 1, Kn = function(e) {
  if (oa.has(e)) return oa.get(e);
  for (; pa.has(bn); ) bn++;
  var t = bn++;
  return oa.set(e, t), pa.set(t, e), t;
}, Hf = function(e) {
  return pa.get(e);
}, Vf = function(e, t) {
  t >= bn && (bn = t + 1), oa.set(e, t), pa.set(t, e);
}, qf = "style[" + Vr + '][data-styled-version="5.3.11"]', Gf = new RegExp("^" + Vr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Yf = function(e, t, r) {
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
}, Qf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, yl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(m) {
    for (var p = m.childNodes, f = p.length; f >= 0; f--) {
      var _ = p[f];
      if (_ && _.nodeType === 1 && _.hasAttribute(Vr)) return _;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Vr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Qf();
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
      En(17);
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
}(), Zf = function() {
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
}(), Kf = function() {
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
}(), ts = Ai, ep = { isServer: !Ai, useCSSOMInjection: !Bf }, bl = function() {
  function e(r, n, a) {
    r === void 0 && (r = Sr), n === void 0 && (n = {}), this.options = hr({}, ep, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Ai && ts && (ts = !1, function(s) {
      for (var d = document.querySelectorAll(qf), m = 0, p = d.length; m < p; m++) {
        var f = d[m];
        f && f.getAttribute(Vr) !== "active" && (Xf(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Kn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(hr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new Kf(d) : s ? new Jf(d) : new Zf(d), new Wf(r)));
    var r, n, a, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Kn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(Kn(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Kn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", d = 0; d < a; d++) {
        var m = Hf(d);
        if (m !== void 0) {
          var p = r.names.get(m), f = n.getGroup(d);
          if (p && f && p.size) {
            var _ = Vr + ".g" + d + '[id="' + m + '"]', x = "";
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
}(), tp = /(a)(d)/gi, rs = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function di(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = rs(t % 52) + r;
  return (rs(t % 52) + r).replace(tp, "$1-$2");
}
var $r = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, vl = function(e) {
  return $r(5381, e);
};
function rp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (kn(r) && !Ci(r)) return !1;
  }
  return !0;
}
var np = vl("5.3.11"), ap = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && rp(t), this.componentId = r, this.baseHash = $r(np, r), this.baseStyle = n, bl.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = qr(this.rules, t, r, n).join(""), m = di($r(this.baseHash, d) >>> 0);
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
          var E = qr($, t, r, n), S = Array.isArray(E) ? E.join("") : E;
          _ = $r(_, S + L), x += S;
        }
      }
      if (x) {
        var D = di(_ >>> 0);
        if (!r.hasNameForId(a, D)) {
          var B = n(x, "." + D, void 0, a);
          r.insertRules(a, D, B);
        }
        s.push(D);
      }
    }
    return s.join(" ");
  }, e;
}(), ip = /^\s*\/\/.*$/gm, op = [":", "[", ".", "#"];
function sp(e) {
  var t, r, n, a, s = Sr, d = s.options, m = d === void 0 ? Sr : d, p = s.plugins, f = p === void 0 ? fa : p, _ = new Cf(m), x = [], L = /* @__PURE__ */ function(S) {
    function D(B) {
      if (B) try {
        S(B + "}");
      } catch {
      }
    }
    return function(B, H, Y, V, T, ce, _e, Pe, Le, He) {
      switch (B) {
        case 1:
          if (Le === 0 && H.charCodeAt(0) === 64) return S(H + ";"), "";
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
          H.split("/*|*/}").forEach(D);
      }
    };
  }(function(S) {
    x.push(S);
  }), $ = function(S, D, B) {
    return D === 0 && op.indexOf(B[r.length]) !== -1 || B.match(a) ? S : "." + t;
  };
  function E(S, D, B, H) {
    H === void 0 && (H = "&");
    var Y = S.replace(ip, ""), V = D && B ? B + " " + D + " { " + Y + " }" : Y;
    return t = H, r = D, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), _(B || !D ? "" : D, V);
  }
  return _.use([].concat(f, [function(S, D, B) {
    S === 2 && B.length && B[0].lastIndexOf(r) > 0 && (B[0] = B[0].replace(n, $));
  }, L, function(S) {
    if (S === -2) {
      var D = x;
      return x = [], D;
    }
  }])), E.hash = f.length ? f.reduce(function(S, D) {
    return D.name || En(15), $r(S, D.name);
  }, 5381).toString() : "", E;
}
var wl = ut.createContext();
wl.Consumer;
var kl = ut.createContext(), lp = (kl.Consumer, new bl()), fi = sp();
function cp() {
  return gr(wl) || lp;
}
function up() {
  return gr(kl) || fi;
}
var dp = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = fi);
      var d = n.name + s.hash;
      a.hasNameForId(n.id, d) || a.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return En(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = fi), this.name + t.hash;
  }, e;
}(), fp = /([A-Z])/, pp = /([A-Z])/g, hp = /^ms-/, mp = function(e) {
  return "-" + e.toLowerCase();
};
function ns(e) {
  return fp.test(e) ? e.replace(pp, mp).replace(hp, "-ms-") : e;
}
var as = function(e) {
  return e == null || e === !1 || e === "";
};
function qr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, m = e.length; d < m; d += 1) (a = qr(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (as(e)) return "";
  if (Ci(e)) return "." + e.styledComponentId;
  if (kn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var p = e(t);
    return qr(p, t, r, n);
  }
  var f;
  return e instanceof dp ? r ? (e.inject(r, n), e.getName(n)) : e : ui(e) ? function _(x, L) {
    var $, E, S = [];
    for (var D in x) x.hasOwnProperty(D) && !as(x[D]) && (Array.isArray(x[D]) && x[D].isCss || kn(x[D]) ? S.push(ns(D) + ":", x[D], ";") : ui(x[D]) ? S.push.apply(S, _(x[D], D)) : S.push(ns(D) + ": " + ($ = D, (E = x[D]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || $ in Af || $.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return L ? [L + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var is = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function gp(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return kn(e) || ui(e) ? is(qr(Ko(fa, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : is(qr(Ko(e, r)));
}
var yp = function(e, t, r) {
  return r === void 0 && (r = Sr), e.theme !== r.theme && e.theme || t || r.theme;
}, bp = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, vp = /(^-|-$)/g;
function qa(e) {
  return e.replace(bp, "-").replace(vp, "");
}
var wp = function(e) {
  return di(vl(e) >>> 0);
};
function ea(e) {
  return typeof e == "string" && mt.env.NODE_ENV === "production";
}
var pi = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, kp = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Sp(e, t, r) {
  var n = e[r];
  pi(t) && pi(n) ? Sl(n, t) : e[r] = t;
}
function Sl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (pi(d)) for (var m in d) kp(m) && Sp(e, d[m], m);
  }
  return e;
}
var xl = ut.createContext();
xl.Consumer;
var Ga = {};
function _l(e, t, r) {
  var n = Ci(e), a = !ea(e), s = t.attrs, d = s === void 0 ? fa : s, m = t.componentId, p = m === void 0 ? function(H, Y) {
    var V = typeof H != "string" ? "sc" : qa(H);
    Ga[V] = (Ga[V] || 0) + 1;
    var T = V + "-" + wp("5.3.11" + V + Ga[V]);
    return Y ? Y + "-" + T : T;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, _ = f === void 0 ? function(H) {
    return ea(H) ? "styled." + H : "Styled(" + es(H) + ")";
  }(e) : f, x = t.displayName && t.componentId ? qa(t.displayName) + "-" + t.componentId : t.componentId || p, L = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, $ = t.shouldForwardProp;
  n && e.shouldForwardProp && ($ = t.shouldForwardProp ? function(H, Y, V) {
    return e.shouldForwardProp(H, Y, V) && t.shouldForwardProp(H, Y, V);
  } : e.shouldForwardProp);
  var E, S = new ap(r, x, n ? e.componentStyle : void 0), D = S.isStatic && d.length === 0, B = function(H, Y) {
    return function(V, T, ce, _e) {
      var Pe = V.attrs, Le = V.componentStyle, He = V.defaultProps, ue = V.foldedComponentIds, pe = V.shouldForwardProp, Ie = V.styledComponentId, Ne = V.target, Ce = function(F, y, re) {
        F === void 0 && (F = Sr);
        var O = hr({}, y, { theme: F }), ne = {};
        return re.forEach(function(ee) {
          var te, G, ie, se = ee;
          for (te in kn(se) && (se = se(O)), se) O[te] = ne[te] = te === "className" ? (G = ne[te], ie = se[te], G && ie ? G + " " + ie : G || ie) : se[te];
        }), [O, ne];
      }(yp(T, gr(xl), He) || Sr, T, Pe), lt = Ce[0], Fe = Ce[1], Ae = function(F, y, re, O) {
        var ne = cp(), ee = up(), te = y ? F.generateAndInjectStyles(Sr, ne, ee) : F.generateAndInjectStyles(re, ne, ee);
        return te;
      }(Le, _e, lt), Ue = ce, Ze = Fe.$as || T.$as || Fe.as || T.as || Ne, oe = ea(Ze), z = Fe !== T ? hr({}, T, {}, Fe) : T, A = {};
      for (var j in z) j[0] !== "$" && j !== "as" && (j === "forwardedAs" ? A.as = z[j] : (pe ? pe(j, Yo, Ze) : !oe || Yo(j)) && (A[j] = z[j]));
      return T.style && Fe.style !== T.style && (A.style = hr({}, T.style, {}, Fe.style)), A.className = Array.prototype.concat(ue, Ie, Ae !== Ie ? Ae : null, T.className, Fe.className).filter(Boolean).join(" "), A.ref = Ue, ss(Ze, A);
    }(E, H, Y, D);
  };
  return B.displayName = _, (E = ut.forwardRef(B)).attrs = L, E.componentStyle = S, E.displayName = _, E.shouldForwardProp = $, E.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : fa, E.styledComponentId = x, E.target = n ? e.target : e, E.withComponent = function(H) {
    var Y = t.componentId, V = function(ce, _e) {
      if (ce == null) return {};
      var Pe, Le, He = {}, ue = Object.keys(ce);
      for (Le = 0; Le < ue.length; Le++) Pe = ue[Le], _e.indexOf(Pe) >= 0 || (He[Pe] = ce[Pe]);
      return He;
    }(t, ["componentId"]), T = Y && Y + "-" + (ea(H) ? H : qa(es(H)));
    return _l(H, hr({}, V, { attrs: L, componentId: T }), r);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(H) {
    this._foldedDefaultProps = n ? Sl({}, e.defaultProps, H) : H;
  } }), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), a && Uf(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var Sn = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Sr), !pl.isValidElementType(n)) return En(1, String(n));
    var s = function() {
      return r(n, a, gp.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, hr({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, hr({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(_l, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Sn[e] = Sn(e);
});
const xp = Sn.section``, _p = (e, t, r) => ({
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
  const { feeds: t } = gr(ga), r = t == null ? void 0 : t.map(
    (n, a) => _p(n, a, e)
  );
  return /* @__PURE__ */ it.jsx(xp, { children: /* @__PURE__ */ it.jsx(
    al,
    {
      width: "auto",
      cardType: "story",
      perView: "3",
      cardItems: r || []
    }
  ) });
}, Tl = ({ cardButton: e, ...t }) => (xr(() => {
  typeof window < "u" && _i({
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
    cardButton: { ...wn.cardButton, ...e }
  }
) }));
Tl.propTypes = Fr.propTypes;
const El = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), Ep = Sn.section`
  .c-card {
    height: 100%;
  }
`, Cp = (e, t, r) => /* @__PURE__ */ it.jsx(
  "div",
  {
    className: "col col-12 col-md-6 col-lg-4 cards-items-container",
    children: /* @__PURE__ */ it.jsx(
      fr,
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
), Ap = ({ cardButton: e, hideTags: t }) => {
  const { feeds: r } = gr(ga), n = t === !0 || t === "true";
  return /* @__PURE__ */ it.jsx(Ep, { className: "row row-spaced", "data-testid": "grid-view-container", children: r == null ? void 0 : r.map((a, s) => /* @__PURE__ */ it.jsx(ut.Fragment, { children: Cp(a, e, n) }, s)) });
}, Cl = ({ cardButton: e, hideTags: t = !0, ...r }) => (xr(() => {
  typeof window < "u" && _i({
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
  Ap,
  {
    cardButton: { ...wn.cardButton, ...e },
    hideTags: t
  }
) }));
Cl.propTypes = {
  ...Fr.propTypes,
  cardButton: Ws,
  hideTags: ct.oneOf(["true", "false", !0, !1])
};
const Op = Sn.section``, Rp = (e, t, r) => /* @__PURE__ */ it.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ it.jsx(
  fr,
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
) }, e.id), Ip = ({ cardButton: e, hideTags: t }) => {
  const { feeds: r } = gr(ga), n = t === !0 || t === "true";
  return /* @__PURE__ */ it.jsx(Op, { className: "row-spaced", "data-testid": "list-view-container", children: r == null ? void 0 : r.map((a, s) => /* @__PURE__ */ it.jsx(ut.Fragment, { children: Rp(a, e, n) }, s)) });
}, Al = ({ cardButton: e, hideTags: t = !0, ...r }) => (xr(() => {
  typeof window < "u" && _i({
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
  Ip,
  {
    cardButton: { ...wn.cardButton, ...e },
    hideTags: t
  }
) }));
Al.propTypes = {
  ...Fr.propTypes,
  feedCardButtonShape: Ws,
  hideTags: ct.oneOf(["true", "false", !0, !1])
};
var Ol, os = ls;
Ol = os.createRoot, os.hydrateRoot;
const Oi = (e, t, r) => {
  Ol(r).render(ut.createElement(e, t));
}, Dp = ({ targetSelector: e, props: t }) => {
  Oi(Cl, t, document.querySelector(e));
}, Lp = ({ targetSelector: e, props: t }) => {
  Oi(Al, t, document.querySelector(e));
}, Fp = ({ targetSelector: e, props: t }) => {
  Oi(Tl, t, document.querySelector(e));
};
export {
  Tl as CardCarouselNews,
  Cl as CardGridNews,
  Al as CardListlNews,
  Fp as initCardCarouselNewsComponent,
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
