import ft, { forwardRef as Ei, Component as Wl, createContext as ql, useRef as Yl, useImperativeHandle as Gl, useId as Vl, useContext as wr, createElement as Es, useState as Hr, useEffect as Er } from "react";
import As from "react-dom";
function Os(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pa = { exports: {} }, an = {};
var ro;
function Xl() {
  if (ro) return an;
  ro = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(g, h, f) {
    var x, _ = {}, D = null, z = null;
    f !== void 0 && (D = "" + f), h.key !== void 0 && (D = "" + h.key), h.ref !== void 0 && (z = h.ref);
    for (x in h) n.call(h, x) && !s.hasOwnProperty(x) && (_[x] = h[x]);
    if (g && g.defaultProps) for (x in h = g.defaultProps, h) _[x] === void 0 && (_[x] = h[x]);
    return { $$typeof: t, type: g, key: D, ref: z, props: _, _owner: a.current };
  }
  return an.Fragment = r, an.jsx = d, an.jsxs = d, an;
}
var no;
function Kl() {
  return no || (no = 1, Pa.exports = Xl()), Pa.exports;
}
var it = Kl();
function Ai(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ao = { exports: {} }, on = {}, io;
function Jl() {
  if (io) return on;
  io = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(g, h, f) {
    var x, _ = {}, D = null, z = null;
    f !== void 0 && (D = "" + f), h.key !== void 0 && (D = "" + h.key), h.ref !== void 0 && (z = h.ref);
    for (x in h) n.call(h, x) && !s.hasOwnProperty(x) && (_[x] = h[x]);
    if (g && g.defaultProps) for (x in h = g.defaultProps, h) _[x] === void 0 && (_[x] = h[x]);
    return { $$typeof: t, type: g, key: D, ref: z, props: _, _owner: a.current };
  }
  return on.Fragment = r, on.jsx = d, on.jsxs = d, on;
}
var oo;
function Zl() {
  return oo || (oo = 1, ao.exports = Jl()), ao.exports;
}
var j = Zl(), so = { exports: {} }, La, lo;
function Ql() {
  if (lo) return La;
  lo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return La = e, La;
}
var Da, co;
function ec() {
  if (co) return Da;
  co = 1;
  var e = /* @__PURE__ */ Ql();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Da = function() {
    function n(d, g, h, f, x, _) {
      if (_ !== e) {
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
  }, Da;
}
var uo;
function tc() {
  return uo || (uo = 1, so.exports = /* @__PURE__ */ ec()()), so.exports;
}
var rc = /* @__PURE__ */ tc();
const l = /* @__PURE__ */ Ai(rc), nc = () => {
  const [e, t] = Hr(null), [r, n] = Hr(!1), [a, s] = Hr(null), [d, g] = Hr("");
  return Er(() => {
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
  }, [d]), [{ data: e, loading: r, error: a }, g];
}, ac = (e) => (e || []).join(" "), {
  entries: Rs,
  setPrototypeOf: fo,
  isFrozen: ic,
  getPrototypeOf: oc,
  getOwnPropertyDescriptor: sc
} = Object;
let {
  freeze: _t,
  seal: $t,
  create: na
} = Object, {
  apply: si,
  construct: li
} = typeof Reflect < "u" && Reflect;
_t || (_t = function(e) {
  return e;
});
$t || ($t = function(e) {
  return e;
});
si || (si = function(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  return e.apply(t, n);
});
li || (li = function(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return new e(...r);
});
const Bn = Tt(Array.prototype.forEach), lc = Tt(Array.prototype.lastIndexOf), po = Tt(Array.prototype.pop), sn = Tt(Array.prototype.push), cc = Tt(Array.prototype.splice), aa = Tt(String.prototype.toLowerCase), ja = Tt(String.prototype.toString), Fa = Tt(String.prototype.match), ln = Tt(String.prototype.replace), uc = Tt(String.prototype.indexOf), dc = Tt(String.prototype.trim), jt = Tt(Object.prototype.hasOwnProperty), kt = Tt(RegExp.prototype.test), cn = fc(TypeError);
function Tt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return si(e, t, n);
  };
}
function fc(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return li(e, r);
  };
}
function Ee(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : aa;
  fo && fo(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (ic(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function pc(e) {
  for (let t = 0; t < e.length; t++)
    jt(e, t) || (e[t] = null);
  return e;
}
function cr(e) {
  const t = na(null);
  for (const [r, n] of Rs(e))
    jt(e, r) && (Array.isArray(n) ? t[r] = pc(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = cr(n) : t[r] = n);
  return t;
}
function un(e, t) {
  for (; e !== null; ) {
    const n = sc(e, t);
    if (n) {
      if (n.get)
        return Tt(n.get);
      if (typeof n.value == "function")
        return Tt(n.value);
    }
    e = oc(e);
  }
  function r() {
    return null;
  }
  return r;
}
const ho = _t(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ma = _t(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), za = _t(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), hc = _t(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ha = _t(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), mc = _t(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), mo = _t(["#text"]), go = _t(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), $a = _t(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), yo = _t(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Wn = _t(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), gc = $t(/\{\{[\w\W]*|[\w\W]*\}\}/gm), yc = $t(/<%[\w\W]*|[\w\W]*%>/gm), bc = $t(/\$\{[\w\W]*/gm), vc = $t(/^data-[\-\w.\u00B7-\uFFFF]+$/), wc = $t(/^aria-[\-\w]+$/), Is = $t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Sc = $t(/^(?:\w+script|data):/i), kc = $t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ns = $t(/^html$/i), xc = $t(/^[a-z][.\w]*(-[.\w]+)+$/i);
var bo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: wc,
  ATTR_WHITESPACE: kc,
  CUSTOM_ELEMENT: xc,
  DATA_ATTR: vc,
  DOCTYPE_NAME: Ns,
  ERB_EXPR: yc,
  IS_ALLOWED_URI: Is,
  IS_SCRIPT_OR_DATA: Sc,
  MUSTACHE_EXPR: gc,
  TMPLIT_EXPR: bc
});
const dn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, _c = function() {
  return typeof window > "u" ? null : window;
}, Tc = function(e, t) {
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
}, vo = function() {
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
function Ps() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _c();
  const t = (y) => Ps(y);
  if (t.version = "3.3.2", t.removed = [], !e || !e.document || e.document.nodeType !== dn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: d,
    Node: g,
    Element: h,
    NodeFilter: f,
    NamedNodeMap: x = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: _,
    DOMParser: D,
    trustedTypes: z
  } = e, T = h.prototype, S = un(T, "cloneNode"), N = un(T, "remove"), H = un(T, "nextSibling"), $ = un(T, "childNodes"), Y = un(T, "parentNode");
  if (typeof d == "function") {
    const y = r.createElement("template");
    y.content && y.content.ownerDocument && (r = y.content.ownerDocument);
  }
  let q, C = "";
  const {
    implementation: ae,
    createNodeIterator: Se,
    createDocumentFragment: Ie,
    getElementsByTagName: je
  } = r, {
    importNode: Ge
  } = n;
  let ue = vo();
  t.isSupported = typeof Rs == "function" && typeof Y == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: me,
    ERB_EXPR: Re,
    TMPLIT_EXPR: Ne,
    DATA_ATTR: Ce,
    ARIA_ATTR: lt,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Oe,
    CUSTOM_ELEMENT: Be
  } = bo;
  let {
    IS_ALLOWED_URI: et
  } = bo, se = null;
  const U = Ee({}, [...ho, ...Ma, ...za, ...Ha, ...mo]);
  let O = null;
  const M = Ee({}, [...go, ...$a, ...yo, ...Wn]);
  let F = Object.seal(na(null, {
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
  const E = Object.seal(na(null, {
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
  let ie = !0, Q = !0, te = !1, X = !0, ne = !1, de = !0, J = !1, ge = !1, re = !1, le = !1, $e = !1, ce = !1, ot = !0, We = !1;
  const ke = "user-content-";
  let G = !0, oe = !1, Xe = {}, Pe = null;
  const Le = Ee({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let nr = null;
  const ar = Ee({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bt = null;
  const Wt = Ee({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ht = "http://www.w3.org/1998/Math/MathML", At = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let pt = nt, qt = !1, Yt = null;
  const mt = Ee({}, [ht, At, nt], ja);
  let St = Ee({}, ["mi", "mo", "mn", "ms", "mtext"]), gt = Ee({}, ["annotation-xml"]);
  const De = Ee({}, ["title", "style", "font", "a", "script"]);
  let ct = null;
  const ir = ["application/xhtml+xml", "text/html"], Gt = "text/html";
  let fe = null, st = null;
  const Ot = r.createElement("form"), or = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Rt = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(st && st === y)) {
      if ((!y || typeof y != "object") && (y = {}), y = cr(y), ct = // eslint-disable-next-line unicorn/prefer-includes
      ir.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Gt : y.PARSER_MEDIA_TYPE, fe = ct === "application/xhtml+xml" ? ja : aa, se = jt(y, "ALLOWED_TAGS") ? Ee({}, y.ALLOWED_TAGS, fe) : U, O = jt(y, "ALLOWED_ATTR") ? Ee({}, y.ALLOWED_ATTR, fe) : M, Yt = jt(y, "ALLOWED_NAMESPACES") ? Ee({}, y.ALLOWED_NAMESPACES, ja) : mt, Bt = jt(y, "ADD_URI_SAFE_ATTR") ? Ee(cr(Wt), y.ADD_URI_SAFE_ATTR, fe) : Wt, nr = jt(y, "ADD_DATA_URI_TAGS") ? Ee(cr(ar), y.ADD_DATA_URI_TAGS, fe) : ar, Pe = jt(y, "FORBID_CONTENTS") ? Ee({}, y.FORBID_CONTENTS, fe) : Le, b = jt(y, "FORBID_TAGS") ? Ee({}, y.FORBID_TAGS, fe) : cr({}), ee = jt(y, "FORBID_ATTR") ? Ee({}, y.FORBID_ATTR, fe) : cr({}), Xe = jt(y, "USE_PROFILES") ? y.USE_PROFILES : !1, ie = y.ALLOW_ARIA_ATTR !== !1, Q = y.ALLOW_DATA_ATTR !== !1, te = y.ALLOW_UNKNOWN_PROTOCOLS || !1, X = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = y.SAFE_FOR_TEMPLATES || !1, de = y.SAFE_FOR_XML !== !1, J = y.WHOLE_DOCUMENT || !1, le = y.RETURN_DOM || !1, $e = y.RETURN_DOM_FRAGMENT || !1, ce = y.RETURN_TRUSTED_TYPE || !1, re = y.FORCE_BODY || !1, ot = y.SANITIZE_DOM !== !1, We = y.SANITIZE_NAMED_PROPS || !1, G = y.KEEP_CONTENT !== !1, oe = y.IN_PLACE || !1, et = y.ALLOWED_URI_REGEXP || Is, pt = y.NAMESPACE || nt, St = y.MATHML_TEXT_INTEGRATION_POINTS || St, gt = y.HTML_INTEGRATION_POINTS || gt, F = y.CUSTOM_ELEMENT_HANDLING || {}, y.CUSTOM_ELEMENT_HANDLING && or(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (F.tagNameCheck = y.CUSTOM_ELEMENT_HANDLING.tagNameCheck), y.CUSTOM_ELEMENT_HANDLING && or(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (F.attributeNameCheck = y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (F.allowCustomizedBuiltInElements = y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), $e && (le = !0), Xe && (se = Ee({}, mo), O = na(null), Xe.html === !0 && (Ee(se, ho), Ee(O, go)), Xe.svg === !0 && (Ee(se, Ma), Ee(O, $a), Ee(O, Wn)), Xe.svgFilters === !0 && (Ee(se, za), Ee(O, $a), Ee(O, Wn)), Xe.mathMl === !0 && (Ee(se, Ha), Ee(O, yo), Ee(O, Wn))), jt(y, "ADD_TAGS") || (E.tagCheck = null), jt(y, "ADD_ATTR") || (E.attributeCheck = null), y.ADD_TAGS && (typeof y.ADD_TAGS == "function" ? E.tagCheck = y.ADD_TAGS : (se === U && (se = cr(se)), Ee(se, y.ADD_TAGS, fe))), y.ADD_ATTR && (typeof y.ADD_ATTR == "function" ? E.attributeCheck = y.ADD_ATTR : (O === M && (O = cr(O)), Ee(O, y.ADD_ATTR, fe))), y.ADD_URI_SAFE_ATTR && Ee(Bt, y.ADD_URI_SAFE_ATTR, fe), y.FORBID_CONTENTS && (Pe === Le && (Pe = cr(Pe)), Ee(Pe, y.FORBID_CONTENTS, fe)), y.ADD_FORBID_CONTENTS && (Pe === Le && (Pe = cr(Pe)), Ee(Pe, y.ADD_FORBID_CONTENTS, fe)), G && (se["#text"] = !0), J && Ee(se, ["html", "head", "body"]), se.table && (Ee(se, ["tbody"]), delete b.tbody), y.TRUSTED_TYPES_POLICY) {
        if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw cn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw cn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        q = y.TRUSTED_TYPES_POLICY, C = q.createHTML("");
      } else
        q === void 0 && (q = Tc(z, a)), q !== null && typeof C == "string" && (C = q.createHTML(""));
      _t && _t(y), st = y;
    }
  }, Vt = Ee({}, [...Ma, ...za, ...hc]), sr = Ee({}, [...Ha, ...mc]), Sr = function(y) {
    let v = Y(y);
    (!v || !v.tagName) && (v = {
      namespaceURI: pt,
      tagName: "template"
    });
    const A = aa(y.tagName), V = aa(v.tagName);
    return Yt[y.namespaceURI] ? y.namespaceURI === At ? v.namespaceURI === nt ? A === "svg" : v.namespaceURI === ht ? A === "svg" && (V === "annotation-xml" || St[V]) : !!Vt[A] : y.namespaceURI === ht ? v.namespaceURI === nt ? A === "math" : v.namespaceURI === At ? A === "math" && gt[V] : !!sr[A] : y.namespaceURI === nt ? v.namespaceURI === At && !gt[V] || v.namespaceURI === ht && !St[V] ? !1 : !sr[A] && (De[A] || !Vt[A]) : !!(ct === "application/xhtml+xml" && Yt[y.namespaceURI]) : !1;
  }, at = function(y) {
    sn(t.removed, {
      element: y
    });
    try {
      Y(y).removeChild(y);
    } catch {
      N(y);
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
      if (le || $e)
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
    let v = null, A = null;
    if (re)
      y = "<remove></remove>" + y;
    else {
      const ve = Fa(y, /^[\r\n\t ]+/);
      A = ve && ve[0];
    }
    ct === "application/xhtml+xml" && pt === nt && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const V = q ? q.createHTML(y) : y;
    if (pt === nt)
      try {
        v = new D().parseFromString(V, ct);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = ae.createDocument(pt, "template", null);
      try {
        v.documentElement.innerHTML = qt ? C : V;
      } catch {
      }
    }
    const ye = v.body || v.documentElement;
    return y && A && ye.insertBefore(r.createTextNode(A), ye.childNodes[0] || null), pt === nt ? je.call(v, J ? "html" : "body")[0] : J ? v.documentElement : ye;
  }, Mt = function(y) {
    return Se.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, zt = function(y) {
    return y instanceof _ && (typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || !(y.attributes instanceof x) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function");
  }, Ht = function(y) {
    return typeof g == "function" && y instanceof g;
  };
  function Ze(y, v, A) {
    Bn(y, (V) => {
      V.call(t, v, A, st);
    });
  }
  const fr = function(y) {
    let v = null;
    if (Ze(ue.beforeSanitizeElements, y, null), zt(y))
      return at(y), !0;
    const A = fe(y.nodeName);
    if (Ze(ue.uponSanitizeElement, y, {
      tagName: A,
      allowedTags: se
    }), de && y.hasChildNodes() && !Ht(y.firstElementChild) && kt(/<[/\w!]/g, y.innerHTML) && kt(/<[/\w!]/g, y.textContent) || y.nodeType === dn.progressingInstruction || de && y.nodeType === dn.comment && kt(/<[/\w]/g, y.data))
      return at(y), !0;
    if (!(E.tagCheck instanceof Function && E.tagCheck(A)) && (!se[A] || b[A])) {
      if (!b[A] && pr(A) && (F.tagNameCheck instanceof RegExp && kt(F.tagNameCheck, A) || F.tagNameCheck instanceof Function && F.tagNameCheck(A)))
        return !1;
      if (G && !Pe[A]) {
        const V = Y(y) || y.parentNode, ye = $(y) || y.childNodes;
        if (ye && V) {
          const ve = ye.length;
          for (let we = ve - 1; we >= 0; --we) {
            const Me = S(ye[we], !0);
            Me.__removalCount = (y.__removalCount || 0) + 1, V.insertBefore(Me, H(y));
          }
        }
      }
      return at(y), !0;
    }
    return y instanceof h && !Sr(y) || (A === "noscript" || A === "noembed" || A === "noframes") && kt(/<\/no(script|embed|frames)/i, y.innerHTML) ? (at(y), !0) : (ne && y.nodeType === dn.text && (v = y.textContent, Bn([me, Re, Ne], (V) => {
      v = ln(v, V, " ");
    }), y.textContent !== v && (sn(t.removed, {
      element: y.cloneNode()
    }), y.textContent = v)), Ze(ue.afterSanitizeElements, y, null), !1);
  }, It = function(y, v, A) {
    if (ee[v] || ot && (v === "id" || v === "name") && (A in r || A in Ot))
      return !1;
    if (!(Q && !ee[v] && kt(Ce, v)) && !(ie && kt(lt, v)) && !(E.attributeCheck instanceof Function && E.attributeCheck(v, y))) {
      if (!O[v] || ee[v]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(pr(y) && (F.tagNameCheck instanceof RegExp && kt(F.tagNameCheck, y) || F.tagNameCheck instanceof Function && F.tagNameCheck(y)) && (F.attributeNameCheck instanceof RegExp && kt(F.attributeNameCheck, v) || F.attributeNameCheck instanceof Function && F.attributeNameCheck(v, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && F.allowCustomizedBuiltInElements && (F.tagNameCheck instanceof RegExp && kt(F.tagNameCheck, A) || F.tagNameCheck instanceof Function && F.tagNameCheck(A)))
        ) return !1;
      } else if (!Bt[v] && !kt(et, ln(A, Oe, "")) && !((v === "src" || v === "xlink:href" || v === "href") && y !== "script" && uc(A, "data:") === 0 && nr[y]) && !(te && !kt(Fe, ln(A, Oe, ""))) && A)
        return !1;
    }
    return !0;
  }, pr = function(y) {
    return y !== "annotation-xml" && Fa(y, Be);
  }, Xt = function(y) {
    Ze(ue.beforeSanitizeAttributes, y, null);
    const {
      attributes: v
    } = y;
    if (!v || zt(y))
      return;
    const A = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: O,
      forceKeepAttr: void 0
    };
    let V = v.length;
    for (; V--; ) {
      const ye = v[V], {
        name: ve,
        namespaceURI: we,
        value: Me
      } = ye, Ve = fe(ve), yt = Me;
      let Ke = ve === "value" ? yt : dc(yt);
      if (A.attrName = Ve, A.attrValue = Ke, A.keepAttr = !0, A.forceKeepAttr = void 0, Ze(ue.uponSanitizeAttribute, y, A), Ke = A.attrValue, We && (Ve === "id" || Ve === "name") && (ut(ve, y), Ke = ke + Ke), de && kt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ke)) {
        ut(ve, y);
        continue;
      }
      if (Ve === "attributename" && Fa(Ke, "href")) {
        ut(ve, y);
        continue;
      }
      if (A.forceKeepAttr)
        continue;
      if (!A.keepAttr) {
        ut(ve, y);
        continue;
      }
      if (!X && kt(/\/>/i, Ke)) {
        ut(ve, y);
        continue;
      }
      ne && Bn([me, Re, Ne], (Nt) => {
        Ke = ln(Ke, Nt, " ");
      });
      const Ue = fe(y.nodeName);
      if (!It(Ue, Ve, Ke)) {
        ut(ve, y);
        continue;
      }
      if (q && typeof z == "object" && typeof z.getAttributeType == "function" && !we)
        switch (z.getAttributeType(Ue, Ve)) {
          case "TrustedHTML": {
            Ke = q.createHTML(Ke);
            break;
          }
          case "TrustedScriptURL": {
            Ke = q.createScriptURL(Ke);
            break;
          }
        }
      if (Ke !== yt)
        try {
          we ? y.setAttributeNS(we, ve, Ke) : y.setAttribute(ve, Ke), zt(y) ? at(y) : po(t.removed);
        } catch {
          ut(ve, y);
        }
    }
    Ze(ue.afterSanitizeAttributes, y, null);
  }, lr = function y(v) {
    let A = null;
    const V = Mt(v);
    for (Ze(ue.beforeSanitizeShadowDOM, v, null); A = V.nextNode(); )
      Ze(ue.uponSanitizeShadowNode, A, null), fr(A), Xt(A), A.content instanceof s && y(A.content);
    Ze(ue.afterSanitizeShadowDOM, v, null);
  };
  return t.sanitize = function(y) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, A = null, V = null, ye = null, ve = null;
    if (qt = !y, qt && (y = "<!-->"), typeof y != "string" && !Ht(y))
      if (typeof y.toString == "function") {
        if (y = y.toString(), typeof y != "string")
          throw cn("dirty is not a string, aborting");
      } else
        throw cn("toString is not a function");
    if (!t.isSupported)
      return y;
    if (ge || Rt(v), t.removed = [], typeof y == "string" && (oe = !1), oe) {
      if (y.nodeName) {
        const Ve = fe(y.nodeName);
        if (!se[Ve] || b[Ve])
          throw cn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (y instanceof g)
      A = dr("<!---->"), V = A.ownerDocument.importNode(y, !0), V.nodeType === dn.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? A = V : A.appendChild(V);
    else {
      if (!le && !ne && !J && // eslint-disable-next-line unicorn/prefer-includes
      y.indexOf("<") === -1)
        return q && ce ? q.createHTML(y) : y;
      if (A = dr(y), !A)
        return le ? null : ce ? C : "";
    }
    A && re && at(A.firstChild);
    const we = Mt(oe ? y : A);
    for (; ye = we.nextNode(); )
      fr(ye), Xt(ye), ye.content instanceof s && lr(ye.content);
    if (oe)
      return y;
    if (le) {
      if ($e)
        for (ve = Ie.call(A.ownerDocument); A.firstChild; )
          ve.appendChild(A.firstChild);
      else
        ve = A;
      return (O.shadowroot || O.shadowrootmode) && (ve = Ge.call(n, ve, !0)), ve;
    }
    let Me = J ? A.outerHTML : A.innerHTML;
    return J && se["!doctype"] && A.ownerDocument && A.ownerDocument.doctype && A.ownerDocument.doctype.name && kt(Ns, A.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + A.ownerDocument.doctype.name + `>
` + Me), ne && Bn([me, Re, Ne], (Ve) => {
      Me = ln(Me, Ve, " ");
    }), q && ce ? q.createHTML(Me) : Me;
  }, t.setConfig = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Rt(y), ge = !0;
  }, t.clearConfig = function() {
    st = null, ge = !1;
  }, t.isValidAttribute = function(y, v, A) {
    st || Rt({});
    const V = fe(y), ye = fe(v);
    return It(V, ye, A);
  }, t.addHook = function(y, v) {
    typeof v == "function" && sn(ue[y], v);
  }, t.removeHook = function(y, v) {
    if (v !== void 0) {
      const A = lc(ue[y], v);
      return A === -1 ? void 0 : cc(ue[y], A, 1)[0];
    }
    return po(ue[y]);
  }, t.removeHooks = function(y) {
    ue[y] = [];
  }, t.removeAllHooks = function() {
    ue = vo();
  }, t;
}
var wo = Ps();
let qn = null;
function Cc() {
  return qn || (typeof window < "u" ? qn = wo(window) : qn = wo), qn;
}
const jr = (e) => ({ __html: Cc().sanitize(e) });
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
const Ec = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
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
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: g.toLowerCase()
  };
  h && h.push(f);
}, _n = ({ children: e }) => /* @__PURE__ */ j.jsx(j.Fragment, { children: e });
_n.propTypes = {
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node,
    l.string
  ])
};
var So = { exports: {} }, ko;
function Ac() {
  return ko || (ko = 1, function(e) {
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
  }(So)), So.exports;
}
var Oc = Ac();
const er = /* @__PURE__ */ Ai(Oc);
({
  ..._n.propTypes
});
const Ls = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ j.jsx("div", { className: t, ...r, children: /* @__PURE__ */ j.jsx("div", { className: "row", children: e }) });
Ls.propTypes = {
  children: _n.propTypes.children
};
({
  ...Ls.propTypes
});
_n.propTypes.children, l.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
_n.propTypes.children;
const Rc = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), Ua = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), Ds = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.arrayOf(l.string),
    header: l.string,
    body: l.string
  })
}), Oi = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var _r = {}, Dr = {}, xo;
function Ic() {
  if (xo) return Dr;
  xo = 1;
  var e = ft;
  function t(i) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, m = 1; m < arguments.length; m++) u += "&args[]=" + encodeURIComponent(arguments[m]);
    return "Minified React error #" + i + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, s = {};
  function d(i) {
    return r.call(s, i) ? !0 : r.call(a, i) ? !1 : n.test(i) ? s[i] = !0 : (a[i] = !0, !1);
  }
  function g(i, u, m, k, L, R, B) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = k, this.attributeNamespace = L, this.mustUseProperty = m, this.propertyName = i, this.type = u, this.sanitizeURL = R, this.removeEmptyString = B;
  }
  var h = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    h[i] = new g(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var u = i[0];
    h[u] = new g(u, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    h[i] = new g(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    h[i] = new g(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    h[i] = new g(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    h[i] = new g(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    h[i] = new g(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    h[i] = new g(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    h[i] = new g(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var f = /[\-:]([a-z])/g;
  function x(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var u = i.replace(
      f,
      x
    );
    h[u] = new g(u, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var u = i.replace(f, x);
    h[u] = new g(u, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var u = i.replace(f, x);
    h[u] = new g(u, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    h[i] = new g(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), h.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    h[i] = new g(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var _ = {
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
  Object.keys(_).forEach(function(i) {
    D.forEach(function(u) {
      u = u + i.charAt(0).toUpperCase() + i.substring(1), _[u] = _[i];
    });
  });
  var z = /["'&<>]/;
  function T(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var u = z.exec(i);
    if (u) {
      var m = "", k, L = 0;
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
        L !== k && (m += i.substring(L, k)), L = k + 1, m += u;
      }
      i = L !== k ? m + i.substring(L, k) : m;
    }
    return i;
  }
  var S = /([A-Z])/g, N = /^ms-/, H = Array.isArray;
  function $(i, u) {
    return { insertionMode: i, selectedValue: u };
  }
  function Y(i, u, m) {
    switch (u) {
      case "select":
        return $(1, m.value != null ? m.value : m.defaultValue);
      case "svg":
        return $(2, null);
      case "math":
        return $(3, null);
      case "foreignObject":
        return $(1, null);
      case "table":
        return $(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return $(5, null);
      case "colgroup":
        return $(7, null);
      case "tr":
        return $(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? $(1, null) : i;
  }
  var q = /* @__PURE__ */ new Map();
  function C(i, u, m) {
    if (typeof m != "object") throw Error(t(62));
    u = !0;
    for (var k in m) if (r.call(m, k)) {
      var L = m[k];
      if (L != null && typeof L != "boolean" && L !== "") {
        if (k.indexOf("--") === 0) {
          var R = T(k);
          L = T(("" + L).trim());
        } else {
          R = k;
          var B = q.get(R);
          B !== void 0 || (B = T(R.replace(S, "-$1").toLowerCase().replace(N, "-ms-")), q.set(R, B)), R = B, L = typeof L == "number" ? L === 0 || r.call(_, k) ? "" + L : L + "px" : T(("" + L).trim());
        }
        u ? (u = !1, i.push(' style="', R, ":", L)) : i.push(";", R, ":", L);
      }
    }
    u || i.push('"');
  }
  function ae(i, u, m, k) {
    switch (m) {
      case "style":
        C(i, u, k);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < m.length) || m[0] !== "o" && m[0] !== "O" || m[1] !== "n" && m[1] !== "N") {
      if (u = h.hasOwnProperty(m) ? h[m] : null, u !== null) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (m = u.attributeName, u.type) {
          case 3:
            k && i.push(" ", m, '=""');
            break;
          case 4:
            k === !0 ? i.push(" ", m, '=""') : k !== !1 && i.push(" ", m, '="', T(k), '"');
            break;
          case 5:
            isNaN(k) || i.push(" ", m, '="', T(k), '"');
            break;
          case 6:
            !isNaN(k) && 1 <= k && i.push(" ", m, '="', T(k), '"');
            break;
          default:
            u.sanitizeURL && (k = "" + k), i.push(" ", m, '="', T(k), '"');
        }
      } else if (d(m)) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = m.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        i.push(" ", m, '="', T(k), '"');
      }
    }
  }
  function Se(i, u, m) {
    if (u != null) {
      if (m != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && i.push("" + u);
    }
  }
  function Ie(i) {
    var u = "";
    return e.Children.forEach(i, function(m) {
      m != null && (u += m);
    }), u;
  }
  function je(i, u, m, k) {
    i.push(me(m));
    var L = m = null, R;
    for (R in u) if (r.call(u, R)) {
      var B = u[R];
      if (B != null) switch (R) {
        case "children":
          m = B;
          break;
        case "dangerouslySetInnerHTML":
          L = B;
          break;
        default:
          ae(i, k, R, B);
      }
    }
    return i.push(">"), Se(i, L, m), typeof m == "string" ? (i.push(T(m)), null) : m;
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
  function Re(i, u, m, k, L) {
    switch (u) {
      case "select":
        i.push(me("select"));
        var R = null, B = null;
        for (xe in m) if (r.call(m, xe)) {
          var Z = m[xe];
          if (Z != null) switch (xe) {
            case "children":
              R = Z;
              break;
            case "dangerouslySetInnerHTML":
              B = Z;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ae(i, k, xe, Z);
          }
        }
        return i.push(">"), Se(i, B, R), R;
      case "option":
        B = L.selectedValue, i.push(me("option"));
        var pe = Z = null, be = null, xe = null;
        for (R in m) if (r.call(m, R)) {
          var tt = m[R];
          if (tt != null) switch (R) {
            case "children":
              Z = tt;
              break;
            case "selected":
              be = tt;
              break;
            case "dangerouslySetInnerHTML":
              xe = tt;
              break;
            case "value":
              pe = tt;
            default:
              ae(i, k, R, tt);
          }
        }
        if (B != null) if (m = pe !== null ? "" + pe : Ie(Z), H(B)) {
          for (k = 0; k < B.length; k++)
            if ("" + B[k] === m) {
              i.push(' selected=""');
              break;
            }
        } else "" + B === m && i.push(' selected=""');
        else be && i.push(' selected=""');
        return i.push(">"), Se(i, xe, Z), Z;
      case "textarea":
        i.push(me("textarea")), xe = B = R = null;
        for (Z in m) if (r.call(m, Z) && (pe = m[Z], pe != null)) switch (Z) {
          case "children":
            xe = pe;
            break;
          case "value":
            R = pe;
            break;
          case "defaultValue":
            B = pe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ae(
              i,
              k,
              Z,
              pe
            );
        }
        if (R === null && B !== null && (R = B), i.push(">"), xe != null) {
          if (R != null) throw Error(t(92));
          if (H(xe) && 1 < xe.length) throw Error(t(93));
          R = "" + xe;
        }
        return typeof R == "string" && R[0] === `
` && i.push(`
`), R !== null && i.push(T("" + R)), null;
      case "input":
        i.push(me("input")), pe = xe = Z = R = null;
        for (B in m) if (r.call(m, B) && (be = m[B], be != null)) switch (B) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            pe = be;
            break;
          case "defaultValue":
            Z = be;
            break;
          case "checked":
            xe = be;
            break;
          case "value":
            R = be;
            break;
          default:
            ae(i, k, B, be);
        }
        return xe !== null ? ae(i, k, "checked", xe) : pe !== null && ae(i, k, "checked", pe), R !== null ? ae(i, k, "value", R) : Z !== null && ae(i, k, "value", Z), i.push("/>"), null;
      case "menuitem":
        i.push(me("menuitem"));
        for (var Kt in m) if (r.call(m, Kt) && (R = m[Kt], R != null)) switch (Kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ae(i, k, Kt, R);
        }
        return i.push(">"), null;
      case "title":
        i.push(me("title")), R = null;
        for (tt in m) if (r.call(m, tt) && (B = m[tt], B != null)) switch (tt) {
          case "children":
            R = B;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ae(i, k, tt, B);
        }
        return i.push(">"), R;
      case "listing":
      case "pre":
        i.push(me(u)), B = R = null;
        for (pe in m) if (r.call(m, pe) && (Z = m[pe], Z != null)) switch (pe) {
          case "children":
            R = Z;
            break;
          case "dangerouslySetInnerHTML":
            B = Z;
            break;
          default:
            ae(i, k, pe, Z);
        }
        if (i.push(">"), B != null) {
          if (R != null) throw Error(t(60));
          if (typeof B != "object" || !("__html" in B)) throw Error(t(61));
          m = B.__html, m != null && (typeof m == "string" && 0 < m.length && m[0] === `
` ? i.push(`
`, m) : i.push("" + m));
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
        for (var Jt in m) if (r.call(m, Jt) && (R = m[Jt], R != null)) switch (Jt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ae(i, k, Jt, R);
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
          m,
          u,
          k
        );
      case "html":
        return L.insertionMode === 0 && i.push("<!DOCTYPE html>"), je(i, m, u, k);
      default:
        if (u.indexOf("-") === -1 && typeof m.is != "string") return je(i, m, u, k);
        i.push(me(u)), B = R = null;
        for (be in m) if (r.call(m, be) && (Z = m[be], Z != null)) switch (be) {
          case "children":
            R = Z;
            break;
          case "dangerouslySetInnerHTML":
            B = Z;
            break;
          case "style":
            C(i, k, Z);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(be) && typeof Z != "function" && typeof Z != "symbol" && i.push(" ", be, '="', T(Z), '"');
        }
        return i.push(">"), Se(i, B, R), R;
    }
  }
  function Ne(i, u, m) {
    if (i.push('<!--$?--><template id="'), m === null) throw Error(t(395));
    return i.push(m), i.push('"></template>');
  }
  function Ce(i, u, m, k) {
    switch (m.insertionMode) {
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
  function et(i, u, m, k) {
    return m.generateStaticMarkup ? (i.push(T(u)), !1) : (u === "" ? i = k : (k && i.push("<!-- -->"), i.push(T(u)), i = !0), i);
  }
  var se = Object.assign, U = Symbol.for("react.element"), O = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), E = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), de = Symbol.for("react.scope"), J = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), re = Symbol.for("react.default_value"), le = Symbol.iterator;
  function $e(i) {
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
      case F:
        return "StrictMode";
      case Q:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case E:
        return (i.displayName || "Context") + ".Consumer";
      case ee:
        return (i._context.displayName || "Context") + ".Provider";
      case ie:
        var u = i.render;
        return i = i.displayName, i || (i = u.displayName || u.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case X:
        return u = i.displayName || null, u !== null ? u : $e(i.type) || "Memo";
      case ne:
        u = i._payload, i = i._init;
        try {
          return $e(i(u));
        } catch {
        }
    }
    return null;
  }
  var ce = {};
  function ot(i, u) {
    if (i = i.contextTypes, !i) return ce;
    var m = {}, k;
    for (k in i) m[k] = u[k];
    return m;
  }
  var We = null;
  function ke(i, u) {
    if (i !== u) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var m = u.parent;
      if (i === null) {
        if (m !== null) throw Error(t(401));
      } else {
        if (m === null) throw Error(t(401));
        ke(i, m);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function G(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && G(i);
  }
  function oe(i) {
    var u = i.parent;
    u !== null && oe(u), i.context._currentValue2 = i.value;
  }
  function Xe(i, u) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === u.depth ? ke(i, u) : Xe(i, u);
  }
  function Pe(i, u) {
    var m = u.parent;
    if (m === null) throw Error(t(402));
    i.depth === m.depth ? ke(i, m) : Pe(i, m), u.context._currentValue2 = u.value;
  }
  function Le(i) {
    var u = We;
    u !== i && (u === null ? oe(i) : i === null ? G(u) : u.depth === i.depth ? ke(u, i) : u.depth > i.depth ? Xe(u, i) : Pe(u, i), We = i);
  }
  var nr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, u) {
    i = i._reactInternals, i.queue !== null && i.queue.push(u);
  }, enqueueReplaceState: function(i, u) {
    i = i._reactInternals, i.replace = !0, i.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function ar(i, u, m, k) {
    var L = i.state !== void 0 ? i.state : null;
    i.updater = nr, i.props = m, i.state = L;
    var R = { queue: [], replace: !1 };
    i._reactInternals = R;
    var B = u.contextType;
    if (i.context = typeof B == "object" && B !== null ? B._currentValue2 : k, B = u.getDerivedStateFromProps, typeof B == "function" && (B = B(m, L), L = B == null ? L : se({}, L, B), i.state = L), typeof u.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && nr.enqueueReplaceState(i, i.state, null), R.queue !== null && 0 < R.queue.length) if (u = R.queue, B = R.replace, R.queue = null, R.replace = !1, B && u.length === 1) i.state = u[0];
    else {
      for (R = B ? u[0] : i.state, L = !0, B = B ? 1 : 0; B < u.length; B++) {
        var Z = u[B];
        Z = typeof Z == "function" ? Z.call(i, R, m, k) : Z, Z != null && (L ? (L = !1, R = se({}, R, Z)) : se(R, Z));
      }
      i.state = R;
    }
    else R.queue = null;
  }
  var Bt = { id: 1, overflow: "" };
  function Wt(i, u, m) {
    var k = i.id;
    i = i.overflow;
    var L = 32 - ht(k) - 1;
    k &= ~(1 << L), m += 1;
    var R = 32 - ht(u) + L;
    if (30 < R) {
      var B = L - L % 5;
      return R = (k & (1 << B) - 1).toString(32), k >>= B, L -= B, { id: 1 << 32 - ht(u) + L | m << L | k, overflow: R + i };
    }
    return { id: 1 << R | m << L | k, overflow: i };
  }
  var ht = Math.clz32 ? Math.clz32 : pt, At = Math.log, nt = Math.LN2;
  function pt(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (At(i) / nt | 0) | 0;
  }
  function qt(i, u) {
    return i === u && (i !== 0 || 1 / i === 1 / u) || i !== i && u !== u;
  }
  var Yt = typeof Object.is == "function" ? Object.is : qt, mt = null, St = null, gt = null, De = null, ct = !1, ir = !1, Gt = 0, fe = null, st = 0;
  function Ot() {
    if (mt === null) throw Error(t(321));
    return mt;
  }
  function or() {
    if (0 < st) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Rt() {
    return De === null ? gt === null ? (ct = !1, gt = De = or()) : (ct = !0, De = gt) : De.next === null ? (ct = !1, De = De.next = or()) : (ct = !0, De = De.next), De;
  }
  function Vt() {
    St = mt = null, ir = !1, gt = null, st = 0, De = fe = null;
  }
  function sr(i, u) {
    return typeof u == "function" ? u(i) : u;
  }
  function Sr(i, u, m) {
    if (mt = Ot(), De = Rt(), ct) {
      var k = De.queue;
      if (u = k.dispatch, fe !== null && (m = fe.get(k), m !== void 0)) {
        fe.delete(k), k = De.memoizedState;
        do
          k = i(k, m.action), m = m.next;
        while (m !== null);
        return De.memoizedState = k, [k, u];
      }
      return [De.memoizedState, u];
    }
    return i = i === sr ? typeof u == "function" ? u() : u : m !== void 0 ? m(u) : u, De.memoizedState = i, i = De.queue = { last: null, dispatch: null }, i = i.dispatch = ut.bind(null, mt, i), [De.memoizedState, i];
  }
  function at(i, u) {
    if (mt = Ot(), De = Rt(), u = u === void 0 ? null : u, De !== null) {
      var m = De.memoizedState;
      if (m !== null && u !== null) {
        var k = m[1];
        e: if (k === null) k = !1;
        else {
          for (var L = 0; L < k.length && L < u.length; L++) if (!Yt(u[L], k[L])) {
            k = !1;
            break e;
          }
          k = !0;
        }
        if (k) return m[0];
      }
    }
    return i = i(), De.memoizedState = [i, u], i;
  }
  function ut(i, u, m) {
    if (25 <= st) throw Error(t(301));
    if (i === mt) if (ir = !0, i = { action: m, next: null }, fe === null && (fe = /* @__PURE__ */ new Map()), m = fe.get(u), m === void 0) fe.set(u, i);
    else {
      for (u = m; u.next !== null; ) u = u.next;
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
    mt = Ot(), De = Rt();
    var u = De.memoizedState;
    return u === null ? (i = { current: i }, De.memoizedState = i) : u;
  }, useState: function(i) {
    return Sr(sr, i);
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
    var m = Ht;
    if (m === null) throw Error(t(404));
    return u = Gt++, i = ":" + m.idPrefix + "R" + i, 0 < u && (i += "H" + u.toString(32)), i + ":";
  }, useMutableSource: function(i, u) {
    return Ot(), u(i._source);
  }, useSyncExternalStore: function(i, u, m) {
    if (m === void 0) throw Error(t(407));
    return m();
  } }, Ht = null, Ze = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function fr(i) {
    return console.error(i), null;
  }
  function It() {
  }
  function pr(i, u, m, k, L, R, B, Z, pe) {
    var be = [], xe = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: k, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? fr : L, onAllReady: It, onShellReady: B === void 0 ? It : B, onShellError: It, onFatalError: It }, m = lr(u, 0, null, m, !1, !1), m.parentFlushed = !0, i = Xt(u, i, null, m, xe, ce, null, Bt), be.push(i), u;
  }
  function Xt(i, u, m, k, L, R, B, Z) {
    i.allPendingTasks++, m === null ? i.pendingRootTasks++ : m.pendingTasks++;
    var pe = { node: u, ping: function() {
      var be = i.pingedTasks;
      be.push(pe), be.length === 1 && Or(i);
    }, blockedBoundary: m, blockedSegment: k, abortSet: L, legacyContext: R, context: B, treeContext: Z };
    return L.add(pe), pe;
  }
  function lr(i, u, m, k, L, R) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: k, boundary: m, lastPushedText: L, textEmbedded: R };
  }
  function y(i, u) {
    if (i = i.onError(u), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function v(i, u) {
    var m = i.onShellError;
    m(u), m = i.onFatalError, m(u), i.destination !== null ? (i.status = 2, i.destination.destroy(u)) : (i.status = 1, i.fatalError = u);
  }
  function A(i, u, m, k, L) {
    for (mt = {}, St = u, Gt = 0, i = m(k, L); ir; ) ir = !1, Gt = 0, st += 1, De = null, i = m(k, L);
    return Vt(), i;
  }
  function V(i, u, m, k) {
    var L = m.render(), R = k.childContextTypes;
    if (R != null) {
      var B = u.legacyContext;
      if (typeof m.getChildContext != "function") k = B;
      else {
        m = m.getChildContext();
        for (var Z in m) if (!(Z in R)) throw Error(t(108, $e(k) || "Unknown", Z));
        k = se({}, B, m);
      }
      u.legacyContext = k, we(i, u, L), u.legacyContext = B;
    } else we(i, u, L);
  }
  function ye(i, u) {
    if (i && i.defaultProps) {
      u = se({}, u), i = i.defaultProps;
      for (var m in i) u[m] === void 0 && (u[m] = i[m]);
      return u;
    }
    return u;
  }
  function ve(i, u, m, k, L) {
    if (typeof m == "function") if (m.prototype && m.prototype.isReactComponent) {
      L = ot(m, u.legacyContext);
      var R = m.contextType;
      R = new m(k, typeof R == "object" && R !== null ? R._currentValue2 : L), ar(R, m, k, L), V(i, u, R, m);
    } else {
      R = ot(m, u.legacyContext), L = A(i, u, m, k, R);
      var B = Gt !== 0;
      if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0) ar(L, m, k, R), V(i, u, L, m);
      else if (B) {
        k = u.treeContext, u.treeContext = Wt(k, 1, 0);
        try {
          we(i, u, L);
        } finally {
          u.treeContext = k;
        }
      } else we(i, u, L);
    }
    else if (typeof m == "string") {
      switch (L = u.blockedSegment, R = Re(L.chunks, m, k, i.responseState, L.formatContext), L.lastPushedText = !1, B = L.formatContext, L.formatContext = Y(B, m, k), Ve(i, u, R), L.formatContext = B, m) {
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
          L.chunks.push("</", m, ">");
      }
      L.lastPushedText = !1;
    } else {
      switch (m) {
        case ge:
        case J:
        case F:
        case b:
        case M:
          we(i, u, k.children);
          return;
        case te:
          we(i, u, k.children);
          return;
        case de:
          throw Error(t(343));
        case Q:
          e: {
            m = u.blockedBoundary, L = u.blockedSegment, R = k.fallback, k = k.children, B = /* @__PURE__ */ new Set();
            var Z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: B, errorDigest: null }, pe = lr(i, L.chunks.length, Z, L.formatContext, !1, !1);
            L.children.push(pe), L.lastPushedText = !1;
            var be = lr(i, 0, null, L.formatContext, !1, !1);
            be.parentFlushed = !0, u.blockedBoundary = Z, u.blockedSegment = be;
            try {
              if (Ve(
                i,
                u,
                k
              ), i.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, Ue(Z, be), Z.pendingTasks === 0) break e;
            } catch (xe) {
              be.status = 4, Z.forceClientRender = !0, Z.errorDigest = y(i, xe);
            } finally {
              u.blockedBoundary = m, u.blockedSegment = L;
            }
            u = Xt(i, R, m, pe, B, u.legacyContext, u.context, u.treeContext), i.pingedTasks.push(u);
          }
          return;
      }
      if (typeof m == "object" && m !== null) switch (m.$$typeof) {
        case ie:
          if (k = A(i, u, m.render, k, L), Gt !== 0) {
            m = u.treeContext, u.treeContext = Wt(m, 1, 0);
            try {
              we(i, u, k);
            } finally {
              u.treeContext = m;
            }
          } else we(i, u, k);
          return;
        case X:
          m = m.type, k = ye(m, k), ve(i, u, m, k, L);
          return;
        case ee:
          if (L = k.children, m = m._context, k = k.value, R = m._currentValue2, m._currentValue2 = k, B = We, We = k = { parent: B, depth: B === null ? 0 : B.depth + 1, context: m, parentValue: R, value: k }, u.context = k, we(i, u, L), i = We, i === null) throw Error(t(403));
          k = i.parentValue, i.context._currentValue2 = k === re ? i.context._defaultValue : k, i = We = i.parent, u.context = i;
          return;
        case E:
          k = k.children, k = k(m._currentValue2), we(i, u, k);
          return;
        case ne:
          L = m._init, m = L(m._payload), k = ye(m, k), ve(
            i,
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
  function we(i, u, m) {
    if (u.node = m, typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case U:
          ve(i, u, m.type, m.props, m.ref);
          return;
        case O:
          throw Error(t(257));
        case ne:
          var k = m._init;
          m = k(m._payload), we(i, u, m);
          return;
      }
      if (H(m)) {
        Me(i, u, m);
        return;
      }
      if (m === null || typeof m != "object" ? k = null : (k = le && m[le] || m["@@iterator"], k = typeof k == "function" ? k : null), k && (k = k.call(m))) {
        if (m = k.next(), !m.done) {
          var L = [];
          do
            L.push(m.value), m = k.next();
          while (!m.done);
          Me(i, u, L);
        }
        return;
      }
      throw i = Object.prototype.toString.call(m), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : i));
    }
    typeof m == "string" ? (k = u.blockedSegment, k.lastPushedText = et(u.blockedSegment.chunks, m, i.responseState, k.lastPushedText)) : typeof m == "number" && (k = u.blockedSegment, k.lastPushedText = et(u.blockedSegment.chunks, "" + m, i.responseState, k.lastPushedText));
  }
  function Me(i, u, m) {
    for (var k = m.length, L = 0; L < k; L++) {
      var R = u.treeContext;
      u.treeContext = Wt(R, k, L);
      try {
        Ve(i, u, m[L]);
      } finally {
        u.treeContext = R;
      }
    }
  }
  function Ve(i, u, m) {
    var k = u.blockedSegment.formatContext, L = u.legacyContext, R = u.context;
    try {
      return we(i, u, m);
    } catch (pe) {
      if (Vt(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        m = pe;
        var B = u.blockedSegment, Z = lr(i, B.chunks.length, null, B.formatContext, B.lastPushedText, !0);
        B.children.push(Z), B.lastPushedText = !1, i = Xt(i, u.node, u.blockedBoundary, Z, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, m.then(i, i), u.blockedSegment.formatContext = k, u.legacyContext = L, u.context = R, Le(R);
      } else throw u.blockedSegment.formatContext = k, u.legacyContext = L, u.context = R, Le(R), pe;
    }
  }
  function yt(i) {
    var u = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Nt(this, u, i);
  }
  function Ke(i, u, m) {
    var k = i.blockedBoundary;
    i.blockedSegment.status = 3, k === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (k.pendingTasks--, k.forceClientRender || (k.forceClientRender = !0, i = m === void 0 ? Error(t(432)) : m, k.errorDigest = u.onError(i), k.parentFlushed && u.clientRenderedBoundaries.push(k)), k.fallbackAbortableTasks.forEach(function(L) {
      return Ke(L, u, m);
    }), k.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (k = u.onAllReady, k()));
  }
  function Ue(i, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var m = u.children[0];
      m.id = u.id, m.parentFlushed = !0, m.status === 1 && Ue(i, m);
    } else i.completedSegments.push(u);
  }
  function Nt(i, u, m) {
    if (u === null) {
      if (m.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = m;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = It, u = i.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (m.parentFlushed && m.status === 1 && Ue(u, m), u.parentFlushed && i.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(yt, i), u.fallbackAbortableTasks.clear()) : m.parentFlushed && m.status === 1 && (Ue(u, m), u.completedSegments.length === 1 && u.parentFlushed && i.partialBoundaries.push(u)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Or(i) {
    if (i.status !== 2) {
      var u = We, m = Ze.current;
      Ze.current = zt;
      var k = Ht;
      Ht = i.responseState;
      try {
        var L = i.pingedTasks, R;
        for (R = 0; R < L.length; R++) {
          var B = L[R], Z = i, pe = B.blockedSegment;
          if (pe.status === 0) {
            Le(B.context);
            try {
              we(Z, B, B.node), Z.responseState.generateStaticMarkup || pe.lastPushedText && pe.textEmbedded && pe.chunks.push("<!-- -->"), B.abortSet.delete(B), pe.status = 1, Nt(Z, B.blockedBoundary, pe);
            } catch (Pt) {
              if (Vt(), typeof Pt == "object" && Pt !== null && typeof Pt.then == "function") {
                var be = B.ping;
                Pt.then(be, be);
              } else {
                B.abortSet.delete(B), pe.status = 4;
                var xe = B.blockedBoundary, tt = Pt, Kt = y(Z, tt);
                if (xe === null ? v(Z, tt) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = Kt, xe.parentFlushed && Z.clientRenderedBoundaries.push(xe))), Z.allPendingTasks--, Z.allPendingTasks === 0) {
                  var Jt = Z.onAllReady;
                  Jt();
                }
              }
            } finally {
            }
          }
        }
        L.splice(0, R), i.destination !== null && zr(i, i.destination);
      } catch (Pt) {
        y(i, Pt), v(i, Pt);
      } finally {
        Ht = k, Ze.current = m, m === zt && Le(u);
      }
    }
  }
  function Rr(i, u, m) {
    switch (m.parentFlushed = !0, m.status) {
      case 0:
        var k = m.id = i.nextSegmentId++;
        return m.lastPushedText = !1, m.textEmbedded = !1, i = i.responseState, u.push('<template id="'), u.push(i.placeholderPrefix), i = k.toString(16), u.push(i), u.push('"></template>');
      case 1:
        m.status = 2;
        var L = !0;
        k = m.chunks;
        var R = 0;
        m = m.children;
        for (var B = 0; B < m.length; B++) {
          for (L = m[B]; R < L.index; R++) u.push(k[R]);
          L = Ir(i, u, L);
        }
        for (; R < k.length - 1; R++) u.push(k[R]);
        return R < k.length && (L = u.push(k[R])), L;
      default:
        throw Error(t(390));
    }
  }
  function Ir(i, u, m) {
    var k = m.boundary;
    if (k === null) return Rr(i, u, m);
    if (k.parentFlushed = !0, k.forceClientRender) return i.responseState.generateStaticMarkup || (k = k.errorDigest, u.push("<!--$!-->"), u.push("<template"), k && (u.push(' data-dgst="'), k = T(k), u.push(k), u.push('"')), u.push("></template>")), Rr(i, u, m), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
    if (0 < k.pendingTasks) {
      k.rootSegmentID = i.nextSegmentId++, 0 < k.completedSegments.length && i.partialBoundaries.push(k);
      var L = i.responseState, R = L.nextSuspenseID++;
      return L = L.boundaryPrefix + R.toString(16), k = k.id = L, Ne(u, i.responseState, k), Rr(i, u, m), u.push("<!--/$-->");
    }
    if (k.byteSize > i.progressiveChunkSize) return k.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(k), Ne(u, i.responseState, k.id), Rr(i, u, m), u.push("<!--/$-->");
    if (i.responseState.generateStaticMarkup || u.push("<!--$-->"), m = k.completedSegments, m.length !== 1) throw Error(t(391));
    return Ir(i, u, m[0]), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
  }
  function Xr(i, u, m) {
    return Ce(u, i.responseState, m.formatContext, m.id), Ir(i, u, m), lt(u, m.formatContext);
  }
  function Kr(i, u, m) {
    for (var k = m.completedSegments, L = 0; L < k.length; L++) Jr(i, u, m, k[L]);
    if (k.length = 0, i = i.responseState, k = m.id, m = m.rootSegmentID, u.push(i.startInlineScript), i.sentCompleteBoundaryFunction ? u.push('$RC("') : (i.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), k === null) throw Error(t(395));
    return m = m.toString(16), u.push(k), u.push('","'), u.push(i.segmentPrefix), u.push(m), u.push('")<\/script>');
  }
  function Jr(i, u, m, k) {
    if (k.status === 2) return !0;
    var L = k.id;
    if (L === -1) {
      if ((k.id = m.rootSegmentID) === -1) throw Error(t(392));
      return Xr(i, u, k);
    }
    return Xr(i, u, k), i = i.responseState, u.push(i.startInlineScript), i.sentCompleteSegmentFunction ? u.push('$RS("') : (i.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(i.segmentPrefix), L = L.toString(16), u.push(L), u.push('","'), u.push(i.placeholderPrefix), u.push(L), u.push('")<\/script>');
  }
  function zr(i, u) {
    try {
      var m = i.completedRootSegment;
      if (m !== null && i.pendingRootTasks === 0) {
        Ir(i, u, m), i.completedRootSegment = null;
        var k = i.responseState.bootstrapChunks;
        for (m = 0; m < k.length - 1; m++) u.push(k[m]);
        m < k.length && u.push(k[m]);
      }
      var L = i.clientRenderedBoundaries, R;
      for (R = 0; R < L.length; R++) {
        var B = L[R];
        k = u;
        var Z = i.responseState, pe = B.id, be = B.errorDigest, xe = B.errorMessage, tt = B.errorComponentStack;
        if (k.push(Z.startInlineScript), Z.sentClientRenderFunction ? k.push('$RX("') : (Z.sentClientRenderFunction = !0, k.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), pe === null) throw Error(t(395));
        if (k.push(pe), k.push('"'), be || xe || tt) {
          k.push(",");
          var Kt = Oe(be || "");
          k.push(Kt);
        }
        if (xe || tt) {
          k.push(",");
          var Jt = Oe(xe || "");
          k.push(Jt);
        }
        if (tt) {
          k.push(",");
          var Pt = Oe(tt);
          k.push(Pt);
        }
        if (!k.push(")<\/script>")) {
          i.destination = null, R++, L.splice(0, R);
          return;
        }
      }
      L.splice(0, R);
      var Nr = i.completedBoundaries;
      for (R = 0; R < Nr.length; R++) if (!Kr(i, u, Nr[R])) {
        i.destination = null, R++, Nr.splice(0, R);
        return;
      }
      Nr.splice(0, R);
      var hr = i.partialBoundaries;
      for (R = 0; R < hr.length; R++) {
        var Qr = hr[R];
        e: {
          L = i, B = u;
          var Pr = Qr.completedSegments;
          for (Z = 0; Z < Pr.length; Z++) if (!Jr(L, B, Qr, Pr[Z])) {
            Z++, Pr.splice(0, Z);
            var Rn = !1;
            break e;
          }
          Pr.splice(0, Z), Rn = !0;
        }
        if (!Rn) {
          i.destination = null, R++, hr.splice(0, R);
          return;
        }
      }
      hr.splice(0, R);
      var kr = i.completedBoundaries;
      for (R = 0; R < kr.length; R++) if (!Kr(i, u, kr[R])) {
        i.destination = null, R++, kr.splice(0, R);
        return;
      }
      kr.splice(0, R);
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function An(i, u) {
    try {
      var m = i.abortableTasks;
      m.forEach(function(k) {
        return Ke(k, i, u);
      }), m.clear(), i.destination !== null && zr(i, i.destination);
    } catch (k) {
      y(i, k), v(i, k);
    }
  }
  function On() {
  }
  function Zr(i, u, m, k) {
    var L = !1, R = null, B = "", Z = { push: function(be) {
      return be !== null && (B += be), !0;
    }, destroy: function(be) {
      L = !0, R = be;
    } }, pe = !1;
    if (i = pr(i, Be(m, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, On, void 0, function() {
      pe = !0;
    }), Or(i), An(i, k), i.status === 1) i.status = 2, Z.destroy(i.fatalError);
    else if (i.status !== 2 && i.destination === null) {
      i.destination = Z;
      try {
        zr(i, Z);
      } catch (be) {
        y(i, be), v(i, be);
      }
    }
    if (L) throw R;
    if (!pe) throw Error(t(426));
    return B;
  }
  return Dr.renderToNodeStream = function() {
    throw Error(t(207));
  }, Dr.renderToStaticMarkup = function(i, u) {
    return Zr(i, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Dr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Dr.renderToString = function(i, u) {
    return Zr(i, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Dr.version = "18.3.1", Dr;
}
var Yn = {}, _o;
function Nc() {
  if (_o) return Yn;
  _o = 1;
  var e = ft;
  function t(o) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, p = 1; p < arguments.length; p++) c += "&args[]=" + encodeURIComponent(arguments[p]);
    return "Minified React error #" + o + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function a(o, c) {
    if (c.length !== 0) if (512 < c.length) 0 < n && (o.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), o.enqueue(c);
    else {
      var p = r.length - n;
      p < c.length && (p === 0 ? o.enqueue(r) : (r.set(c.subarray(0, p), n), o.enqueue(r), c = c.subarray(p)), r = new Uint8Array(512), n = 0), r.set(c, n), n += c.length;
    }
  }
  function s(o, c) {
    return a(o, c), !0;
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
  function x(o, c) {
    typeof o.error == "function" ? o.error(c) : o.close();
  }
  var _ = Object.prototype.hasOwnProperty, D = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, z = {}, T = {};
  function S(o) {
    return _.call(T, o) ? !0 : _.call(z, o) ? !1 : D.test(o) ? T[o] = !0 : (z[o] = !0, !1);
  }
  function N(o, c, p, w, P, I, W) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = w, this.attributeNamespace = P, this.mustUseProperty = p, this.propertyName = o, this.type = c, this.sanitizeURL = I, this.removeEmptyString = W;
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    H[o] = new N(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var c = o[0];
    H[c] = new N(c, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    H[o] = new N(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    H[o] = new N(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    H[o] = new N(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    H[o] = new N(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    H[o] = new N(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    H[o] = new N(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    H[o] = new N(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var $ = /[\-:]([a-z])/g;
  function Y(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var c = o.replace(
      $,
      Y
    );
    H[c] = new N(c, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var c = o.replace($, Y);
    H[c] = new N(c, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var c = o.replace($, Y);
    H[c] = new N(c, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    H[o] = new N(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), H.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    H[o] = new N(o, 1, !1, o.toLowerCase(), null, !0, !0);
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
  }, C = ["Webkit", "ms", "Moz", "O"];
  Object.keys(q).forEach(function(o) {
    C.forEach(function(c) {
      c = c + o.charAt(0).toUpperCase() + o.substring(1), q[c] = q[o];
    });
  });
  var ae = /["'&<>]/;
  function Se(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var c = ae.exec(o);
    if (c) {
      var p = "", w, P = 0;
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
        P !== w && (p += o.substring(P, w)), P = w + 1, p += c;
      }
      o = P !== w ? p + o.substring(P, w) : p;
    }
    return o;
  }
  var Ie = /([A-Z])/g, je = /^ms-/, Ge = Array.isArray, ue = f("<script>"), me = f("<\/script>"), Re = f('<script src="'), Ne = f('<script type="module" src="'), Ce = f('" async=""><\/script>'), lt = /(<\/|<)(s)(cript)/gi;
  function Fe(o, c, p, w) {
    return "" + c + (p === "s" ? "\\u0073" : "\\u0053") + w;
  }
  function Oe(o, c, p, w, P) {
    o = o === void 0 ? "" : o, c = c === void 0 ? ue : f('<script nonce="' + Se(c) + '">');
    var I = [];
    if (p !== void 0 && I.push(c, h(("" + p).replace(lt, Fe)), me), w !== void 0) for (p = 0; p < w.length; p++) I.push(Re, h(Se(w[p])), Ce);
    if (P !== void 0) for (w = 0; w < P.length; w++) I.push(Ne, h(Se(P[w])), Ce);
    return { bootstrapChunks: I, startInlineScript: c, placeholderPrefix: f(o + "P:"), segmentPrefix: f(o + "S:"), boundaryPrefix: o + "B:", idPrefix: o, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Be(o, c) {
    return { insertionMode: o, selectedValue: c };
  }
  function et(o) {
    return Be(o === "http://www.w3.org/2000/svg" ? 2 : o === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function se(o, c, p) {
    switch (c) {
      case "select":
        return Be(1, p.value != null ? p.value : p.defaultValue);
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
  var U = f("<!-- -->");
  function O(o, c, p, w) {
    return c === "" ? w : (w && o.push(U), o.push(h(Se(c))), !0);
  }
  var M = /* @__PURE__ */ new Map(), F = f(' style="'), b = f(":"), ee = f(";");
  function E(o, c, p) {
    if (typeof p != "object") throw Error(t(62));
    c = !0;
    for (var w in p) if (_.call(p, w)) {
      var P = p[w];
      if (P != null && typeof P != "boolean" && P !== "") {
        if (w.indexOf("--") === 0) {
          var I = h(Se(w));
          P = h(Se(("" + P).trim()));
        } else {
          I = w;
          var W = M.get(I);
          W !== void 0 || (W = f(Se(I.replace(Ie, "-$1").toLowerCase().replace(je, "-ms-"))), M.set(I, W)), I = W, P = typeof P == "number" ? P === 0 || _.call(q, w) ? h("" + P) : h(P + "px") : h(Se(("" + P).trim()));
        }
        c ? (c = !1, o.push(F, I, b, P)) : o.push(ee, I, b, P);
      }
    }
    c || o.push(te);
  }
  var ie = f(" "), Q = f('="'), te = f('"'), X = f('=""');
  function ne(o, c, p, w) {
    switch (p) {
      case "style":
        E(o, c, w);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
      if (c = H.hasOwnProperty(p) ? H[p] : null, c !== null) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (p = h(c.attributeName), c.type) {
          case 3:
            w && o.push(ie, p, X);
            break;
          case 4:
            w === !0 ? o.push(ie, p, X) : w !== !1 && o.push(ie, p, Q, h(Se(w)), te);
            break;
          case 5:
            isNaN(w) || o.push(ie, p, Q, h(Se(w)), te);
            break;
          case 6:
            !isNaN(w) && 1 <= w && o.push(ie, p, Q, h(Se(w)), te);
            break;
          default:
            c.sanitizeURL && (w = "" + w), o.push(ie, p, Q, h(Se(w)), te);
        }
      } else if (S(p)) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = p.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        o.push(ie, h(p), Q, h(Se(w)), te);
      }
    }
  }
  var de = f(">"), J = f("/>");
  function ge(o, c, p) {
    if (c != null) {
      if (p != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && o.push(h("" + c));
    }
  }
  function re(o) {
    var c = "";
    return e.Children.forEach(o, function(p) {
      p != null && (c += p);
    }), c;
  }
  var le = f(' selected=""');
  function $e(o, c, p, w) {
    o.push(ke(p));
    var P = p = null, I;
    for (I in c) if (_.call(c, I)) {
      var W = c[I];
      if (W != null) switch (I) {
        case "children":
          p = W;
          break;
        case "dangerouslySetInnerHTML":
          P = W;
          break;
        default:
          ne(o, w, I, W);
      }
    }
    return o.push(de), ge(o, P, p), typeof p == "string" ? (o.push(h(Se(p))), null) : p;
  }
  var ce = f(`
`), ot = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, We = /* @__PURE__ */ new Map();
  function ke(o) {
    var c = We.get(o);
    if (c === void 0) {
      if (!ot.test(o)) throw Error(t(65, o));
      c = f("<" + o), We.set(o, c);
    }
    return c;
  }
  var G = f("<!DOCTYPE html>");
  function oe(o, c, p, w, P) {
    switch (c) {
      case "select":
        o.push(ke("select"));
        var I = null, W = null;
        for (_e in p) if (_.call(p, _e)) {
          var K = p[_e];
          if (K != null) switch (_e) {
            case "children":
              I = K;
              break;
            case "dangerouslySetInnerHTML":
              W = K;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(o, w, _e, K);
          }
        }
        return o.push(de), ge(o, W, I), I;
      case "option":
        W = P.selectedValue, o.push(ke("option"));
        var he = K = null, Te = null, _e = null;
        for (I in p) if (_.call(p, I)) {
          var Qe = p[I];
          if (Qe != null) switch (I) {
            case "children":
              K = Qe;
              break;
            case "selected":
              Te = Qe;
              break;
            case "dangerouslySetInnerHTML":
              _e = Qe;
              break;
            case "value":
              he = Qe;
            default:
              ne(o, w, I, Qe);
          }
        }
        if (W != null) if (p = he !== null ? "" + he : re(K), Ge(W)) {
          for (w = 0; w < W.length; w++)
            if ("" + W[w] === p) {
              o.push(le);
              break;
            }
        } else "" + W === p && o.push(le);
        else Te && o.push(le);
        return o.push(de), ge(o, _e, K), K;
      case "textarea":
        o.push(ke("textarea")), _e = W = I = null;
        for (K in p) if (_.call(p, K) && (he = p[K], he != null)) switch (K) {
          case "children":
            _e = he;
            break;
          case "value":
            I = he;
            break;
          case "defaultValue":
            W = he;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(o, w, K, he);
        }
        if (I === null && W !== null && (I = W), o.push(de), _e != null) {
          if (I != null) throw Error(t(92));
          if (Ge(_e) && 1 < _e.length) throw Error(t(93));
          I = "" + _e;
        }
        return typeof I == "string" && I[0] === `
` && o.push(ce), I !== null && o.push(h(Se("" + I))), null;
      case "input":
        o.push(ke("input")), he = _e = K = I = null;
        for (W in p) if (_.call(p, W) && (Te = p[W], Te != null)) switch (W) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            he = Te;
            break;
          case "defaultValue":
            K = Te;
            break;
          case "checked":
            _e = Te;
            break;
          case "value":
            I = Te;
            break;
          default:
            ne(o, w, W, Te);
        }
        return _e !== null ? ne(
          o,
          w,
          "checked",
          _e
        ) : he !== null && ne(o, w, "checked", he), I !== null ? ne(o, w, "value", I) : K !== null && ne(o, w, "value", K), o.push(J), null;
      case "menuitem":
        o.push(ke("menuitem"));
        for (var Dt in p) if (_.call(p, Dt) && (I = p[Dt], I != null)) switch (Dt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(o, w, Dt, I);
        }
        return o.push(de), null;
      case "title":
        o.push(ke("title")), I = null;
        for (Qe in p) if (_.call(p, Qe) && (W = p[Qe], W != null)) switch (Qe) {
          case "children":
            I = W;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(o, w, Qe, W);
        }
        return o.push(de), I;
      case "listing":
      case "pre":
        o.push(ke(c)), W = I = null;
        for (he in p) if (_.call(p, he) && (K = p[he], K != null)) switch (he) {
          case "children":
            I = K;
            break;
          case "dangerouslySetInnerHTML":
            W = K;
            break;
          default:
            ne(o, w, he, K);
        }
        if (o.push(de), W != null) {
          if (I != null) throw Error(t(60));
          if (typeof W != "object" || !("__html" in W)) throw Error(t(61));
          p = W.__html, p != null && (typeof p == "string" && 0 < p.length && p[0] === `
` ? o.push(ce, h(p)) : o.push(h("" + p)));
        }
        return typeof I == "string" && I[0] === `
` && o.push(ce), I;
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
        o.push(ke(c));
        for (var Zt in p) if (_.call(p, Zt) && (I = p[Zt], I != null)) switch (Zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            ne(o, w, Zt, I);
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
        return $e(o, p, c, w);
      case "html":
        return P.insertionMode === 0 && o.push(G), $e(o, p, c, w);
      default:
        if (c.indexOf("-") === -1 && typeof p.is != "string") return $e(o, p, c, w);
        o.push(ke(c)), W = I = null;
        for (Te in p) if (_.call(p, Te) && (K = p[Te], K != null)) switch (Te) {
          case "children":
            I = K;
            break;
          case "dangerouslySetInnerHTML":
            W = K;
            break;
          case "style":
            E(o, w, K);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            S(Te) && typeof K != "function" && typeof K != "symbol" && o.push(ie, h(Te), Q, h(Se(K)), te);
        }
        return o.push(de), ge(o, W, I), I;
    }
  }
  var Xe = f("</"), Pe = f(">"), Le = f('<template id="'), nr = f('"></template>'), ar = f("<!--$-->"), Bt = f('<!--$?--><template id="'), Wt = f('"></template>'), ht = f("<!--$!-->"), At = f("<!--/$-->"), nt = f("<template"), pt = f('"'), qt = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var Yt = f("></template>");
  function mt(o, c, p) {
    if (a(o, Bt), p === null) throw Error(t(395));
    return a(o, p), s(o, Wt);
  }
  var St = f('<div hidden id="'), gt = f('">'), De = f("</div>"), ct = f('<svg aria-hidden="true" style="display:none" id="'), ir = f('">'), Gt = f("</svg>"), fe = f('<math aria-hidden="true" style="display:none" id="'), st = f('">'), Ot = f("</math>"), or = f('<table hidden id="'), Rt = f('">'), Vt = f("</table>"), sr = f('<table hidden><tbody id="'), Sr = f('">'), at = f("</tbody></table>"), ut = f('<table hidden><tr id="'), dr = f('">'), Mt = f("</tr></table>"), zt = f('<table hidden><colgroup id="'), Ht = f('">'), Ze = f("</colgroup></table>");
  function fr(o, c, p, w) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return a(o, St), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, gt);
      case 2:
        return a(o, ct), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, ir);
      case 3:
        return a(o, fe), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, st);
      case 4:
        return a(o, or), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, Rt);
      case 5:
        return a(o, sr), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, Sr);
      case 6:
        return a(o, ut), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, dr);
      case 7:
        return a(
          o,
          zt
        ), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, Ht);
      default:
        throw Error(t(397));
    }
  }
  function It(o, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(o, De);
      case 2:
        return s(o, Gt);
      case 3:
        return s(o, Ot);
      case 4:
        return s(o, Vt);
      case 5:
        return s(o, at);
      case 6:
        return s(o, Mt);
      case 7:
        return s(o, Ze);
      default:
        throw Error(t(397));
    }
  }
  var pr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Xt = f('$RS("'), lr = f('","'), y = f('")<\/script>'), v = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), A = f('$RC("'), V = f('","'), ye = f('")<\/script>'), ve = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), we = f('$RX("'), Me = f('"'), Ve = f(")<\/script>"), yt = f(","), Ke = /[<\u2028\u2029]/g;
  function Ue(o) {
    return JSON.stringify(o).replace(Ke, function(c) {
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
  var Nt = Object.assign, Or = Symbol.for("react.element"), Rr = Symbol.for("react.portal"), Ir = Symbol.for("react.fragment"), Xr = Symbol.for("react.strict_mode"), Kr = Symbol.for("react.profiler"), Jr = Symbol.for("react.provider"), zr = Symbol.for("react.context"), An = Symbol.for("react.forward_ref"), On = Symbol.for("react.suspense"), Zr = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), m = Symbol.for("react.scope"), k = Symbol.for("react.debug_trace_mode"), L = Symbol.for("react.legacy_hidden"), R = Symbol.for("react.default_value"), B = Symbol.iterator;
  function Z(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case Ir:
        return "Fragment";
      case Rr:
        return "Portal";
      case Kr:
        return "Profiler";
      case Xr:
        return "StrictMode";
      case On:
        return "Suspense";
      case Zr:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case zr:
        return (o.displayName || "Context") + ".Consumer";
      case Jr:
        return (o._context.displayName || "Context") + ".Provider";
      case An:
        var c = o.render;
        return o = o.displayName, o || (o = c.displayName || c.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case i:
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
  var pe = {};
  function be(o, c) {
    if (o = o.contextTypes, !o) return pe;
    var p = {}, w;
    for (w in o) p[w] = c[w];
    return p;
  }
  var xe = null;
  function tt(o, c) {
    if (o !== c) {
      o.context._currentValue = o.parentValue, o = o.parent;
      var p = c.parent;
      if (o === null) {
        if (p !== null) throw Error(t(401));
      } else {
        if (p === null) throw Error(t(401));
        tt(o, p);
      }
      c.context._currentValue = c.value;
    }
  }
  function Kt(o) {
    o.context._currentValue = o.parentValue, o = o.parent, o !== null && Kt(o);
  }
  function Jt(o) {
    var c = o.parent;
    c !== null && Jt(c), o.context._currentValue = o.value;
  }
  function Pt(o, c) {
    if (o.context._currentValue = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === c.depth ? tt(o, c) : Pt(o, c);
  }
  function Nr(o, c) {
    var p = c.parent;
    if (p === null) throw Error(t(402));
    o.depth === p.depth ? tt(o, p) : Nr(o, p), c.context._currentValue = c.value;
  }
  function hr(o) {
    var c = xe;
    c !== o && (c === null ? Jt(o) : o === null ? Kt(c) : c.depth === o.depth ? tt(c, o) : c.depth > o.depth ? Pt(c, o) : Nr(c, o), xe = o);
  }
  var Qr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, c) {
    o = o._reactInternals, o.queue !== null && o.queue.push(c);
  }, enqueueReplaceState: function(o, c) {
    o = o._reactInternals, o.replace = !0, o.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Pr(o, c, p, w) {
    var P = o.state !== void 0 ? o.state : null;
    o.updater = Qr, o.props = p, o.state = P;
    var I = { queue: [], replace: !1 };
    o._reactInternals = I;
    var W = c.contextType;
    if (o.context = typeof W == "object" && W !== null ? W._currentValue : w, W = c.getDerivedStateFromProps, typeof W == "function" && (W = W(p, P), P = W == null ? P : Nt({}, P, W), o.state = P), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (c = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), c !== o.state && Qr.enqueueReplaceState(o, o.state, null), I.queue !== null && 0 < I.queue.length) if (c = I.queue, W = I.replace, I.queue = null, I.replace = !1, W && c.length === 1) o.state = c[0];
    else {
      for (I = W ? c[0] : o.state, P = !0, W = W ? 1 : 0; W < c.length; W++) {
        var K = c[W];
        K = typeof K == "function" ? K.call(o, I, p, w) : K, K != null && (P ? (P = !1, I = Nt({}, I, K)) : Nt(I, K));
      }
      o.state = I;
    }
    else I.queue = null;
  }
  var Rn = { id: 1, overflow: "" };
  function kr(o, c, p) {
    var w = o.id;
    o = o.overflow;
    var P = 32 - In(w) - 1;
    w &= ~(1 << P), p += 1;
    var I = 32 - In(c) + P;
    if (30 < I) {
      var W = P - P % 5;
      return I = (w & (1 << W) - 1).toString(32), w >>= W, P -= W, { id: 1 << 32 - In(c) + P | p << P | w, overflow: I + o };
    }
    return { id: 1 << I | p << P | w, overflow: o };
  }
  var In = Math.clz32 ? Math.clz32 : jl, Ll = Math.log, Dl = Math.LN2;
  function jl(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Ll(o) / Dl | 0) | 0;
  }
  function Fl(o, c) {
    return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
  }
  var Ml = typeof Object.is == "function" ? Object.is : Fl, mr = null, _a = null, Nn = null, Je = null, en = !1, Pn = !1, tn = 0, xr = null, Ln = 0;
  function Lr() {
    if (mr === null) throw Error(t(321));
    return mr;
  }
  function zi() {
    if (0 < Ln) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ta() {
    return Je === null ? Nn === null ? (en = !1, Nn = Je = zi()) : (en = !0, Je = Nn) : Je.next === null ? (en = !1, Je = Je.next = zi()) : (en = !0, Je = Je.next), Je;
  }
  function Ca() {
    _a = mr = null, Pn = !1, Nn = null, Ln = 0, Je = xr = null;
  }
  function Hi(o, c) {
    return typeof c == "function" ? c(o) : c;
  }
  function $i(o, c, p) {
    if (mr = Lr(), Je = Ta(), en) {
      var w = Je.queue;
      if (c = w.dispatch, xr !== null && (p = xr.get(w), p !== void 0)) {
        xr.delete(w), w = Je.memoizedState;
        do
          w = o(w, p.action), p = p.next;
        while (p !== null);
        return Je.memoizedState = w, [w, c];
      }
      return [Je.memoizedState, c];
    }
    return o = o === Hi ? typeof c == "function" ? c() : c : p !== void 0 ? p(c) : c, Je.memoizedState = o, o = Je.queue = { last: null, dispatch: null }, o = o.dispatch = zl.bind(null, mr, o), [Je.memoizedState, o];
  }
  function Ui(o, c) {
    if (mr = Lr(), Je = Ta(), c = c === void 0 ? null : c, Je !== null) {
      var p = Je.memoizedState;
      if (p !== null && c !== null) {
        var w = p[1];
        e: if (w === null) w = !1;
        else {
          for (var P = 0; P < w.length && P < c.length; P++) if (!Ml(c[P], w[P])) {
            w = !1;
            break e;
          }
          w = !0;
        }
        if (w) return p[0];
      }
    }
    return o = o(), Je.memoizedState = [o, c], o;
  }
  function zl(o, c, p) {
    if (25 <= Ln) throw Error(t(301));
    if (o === mr) if (Pn = !0, o = { action: p, next: null }, xr === null && (xr = /* @__PURE__ */ new Map()), p = xr.get(c), p === void 0) xr.set(c, o);
    else {
      for (c = p; c.next !== null; ) c = c.next;
      c.next = o;
    }
  }
  function Hl() {
    throw Error(t(394));
  }
  function Dn() {
  }
  var Bi = { readContext: function(o) {
    return o._currentValue;
  }, useContext: function(o) {
    return Lr(), o._currentValue;
  }, useMemo: Ui, useReducer: $i, useRef: function(o) {
    mr = Lr(), Je = Ta();
    var c = Je.memoizedState;
    return c === null ? (o = { current: o }, Je.memoizedState = o) : c;
  }, useState: function(o) {
    return $i(Hi, o);
  }, useInsertionEffect: Dn, useLayoutEffect: function() {
  }, useCallback: function(o, c) {
    return Ui(function() {
      return o;
    }, c);
  }, useImperativeHandle: Dn, useEffect: Dn, useDebugValue: Dn, useDeferredValue: function(o) {
    return Lr(), o;
  }, useTransition: function() {
    return Lr(), [!1, Hl];
  }, useId: function() {
    var o = _a.treeContext, c = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - In(o) - 1)).toString(32) + c;
    var p = jn;
    if (p === null) throw Error(t(404));
    return c = tn++, o = ":" + p.idPrefix + "R" + o, 0 < c && (o += "H" + c.toString(32)), o + ":";
  }, useMutableSource: function(o, c) {
    return Lr(), c(o._source);
  }, useSyncExternalStore: function(o, c, p) {
    if (p === void 0) throw Error(t(407));
    return p();
  } }, jn = null, Ea = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function $l(o) {
    return console.error(o), null;
  }
  function rn() {
  }
  function Ul(o, c, p, w, P, I, W, K, he) {
    var Te = [], _e = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: w === void 0 ? 12800 : w, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: _e, pingedTasks: Te, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: P === void 0 ? $l : P, onAllReady: I === void 0 ? rn : I, onShellReady: W === void 0 ? rn : W, onShellError: K === void 0 ? rn : K, onFatalError: he === void 0 ? rn : he }, p = Fn(c, 0, null, p, !1, !1), p.parentFlushed = !0, o = Aa(c, o, null, p, _e, pe, null, Rn), Te.push(o), c;
  }
  function Aa(o, c, p, w, P, I, W, K) {
    o.allPendingTasks++, p === null ? o.pendingRootTasks++ : p.pendingTasks++;
    var he = { node: c, ping: function() {
      var Te = o.pingedTasks;
      Te.push(he), Te.length === 1 && Ki(o);
    }, blockedBoundary: p, blockedSegment: w, abortSet: P, legacyContext: I, context: W, treeContext: K };
    return P.add(he), he;
  }
  function Fn(o, c, p, w, P, I) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: w, boundary: p, lastPushedText: P, textEmbedded: I };
  }
  function nn(o, c) {
    if (o = o.onError(c), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function Mn(o, c) {
    var p = o.onShellError;
    p(c), p = o.onFatalError, p(c), o.destination !== null ? (o.status = 2, x(o.destination, c)) : (o.status = 1, o.fatalError = c);
  }
  function Wi(o, c, p, w, P) {
    for (mr = {}, _a = c, tn = 0, o = p(w, P); Pn; ) Pn = !1, tn = 0, Ln += 1, Je = null, o = p(w, P);
    return Ca(), o;
  }
  function qi(o, c, p, w) {
    var P = p.render(), I = w.childContextTypes;
    if (I != null) {
      var W = c.legacyContext;
      if (typeof p.getChildContext != "function") w = W;
      else {
        p = p.getChildContext();
        for (var K in p) if (!(K in I)) throw Error(t(108, Z(w) || "Unknown", K));
        w = Nt({}, W, p);
      }
      c.legacyContext = w, Lt(o, c, P), c.legacyContext = W;
    } else Lt(o, c, P);
  }
  function Yi(o, c) {
    if (o && o.defaultProps) {
      c = Nt({}, c), o = o.defaultProps;
      for (var p in o) c[p] === void 0 && (c[p] = o[p]);
      return c;
    }
    return c;
  }
  function Oa(o, c, p, w, P) {
    if (typeof p == "function") if (p.prototype && p.prototype.isReactComponent) {
      P = be(p, c.legacyContext);
      var I = p.contextType;
      I = new p(w, typeof I == "object" && I !== null ? I._currentValue : P), Pr(I, p, w, P), qi(o, c, I, p);
    } else {
      I = be(p, c.legacyContext), P = Wi(o, c, p, w, I);
      var W = tn !== 0;
      if (typeof P == "object" && P !== null && typeof P.render == "function" && P.$$typeof === void 0) Pr(P, p, w, I), qi(o, c, P, p);
      else if (W) {
        w = c.treeContext, c.treeContext = kr(w, 1, 0);
        try {
          Lt(o, c, P);
        } finally {
          c.treeContext = w;
        }
      } else Lt(o, c, P);
    }
    else if (typeof p == "string") {
      switch (P = c.blockedSegment, I = oe(P.chunks, p, w, o.responseState, P.formatContext), P.lastPushedText = !1, W = P.formatContext, P.formatContext = se(W, p, w), Ra(o, c, I), P.formatContext = W, p) {
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
          P.chunks.push(Xe, h(p), Pe);
      }
      P.lastPushedText = !1;
    } else {
      switch (p) {
        case L:
        case k:
        case Xr:
        case Kr:
        case Ir:
          Lt(o, c, w.children);
          return;
        case Zr:
          Lt(o, c, w.children);
          return;
        case m:
          throw Error(t(343));
        case On:
          e: {
            p = c.blockedBoundary, P = c.blockedSegment, I = w.fallback, w = w.children, W = /* @__PURE__ */ new Set();
            var K = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: W, errorDigest: null }, he = Fn(o, P.chunks.length, K, P.formatContext, !1, !1);
            P.children.push(he), P.lastPushedText = !1;
            var Te = Fn(o, 0, null, P.formatContext, !1, !1);
            Te.parentFlushed = !0, c.blockedBoundary = K, c.blockedSegment = Te;
            try {
              if (Ra(
                o,
                c,
                w
              ), Te.lastPushedText && Te.textEmbedded && Te.chunks.push(U), Te.status = 1, zn(K, Te), K.pendingTasks === 0) break e;
            } catch (_e) {
              Te.status = 4, K.forceClientRender = !0, K.errorDigest = nn(o, _e);
            } finally {
              c.blockedBoundary = p, c.blockedSegment = P;
            }
            c = Aa(o, I, p, he, W, c.legacyContext, c.context, c.treeContext), o.pingedTasks.push(c);
          }
          return;
      }
      if (typeof p == "object" && p !== null) switch (p.$$typeof) {
        case An:
          if (w = Wi(o, c, p.render, w, P), tn !== 0) {
            p = c.treeContext, c.treeContext = kr(p, 1, 0);
            try {
              Lt(o, c, w);
            } finally {
              c.treeContext = p;
            }
          } else Lt(o, c, w);
          return;
        case i:
          p = p.type, w = Yi(p, w), Oa(o, c, p, w, P);
          return;
        case Jr:
          if (P = w.children, p = p._context, w = w.value, I = p._currentValue, p._currentValue = w, W = xe, xe = w = { parent: W, depth: W === null ? 0 : W.depth + 1, context: p, parentValue: I, value: w }, c.context = w, Lt(o, c, P), o = xe, o === null) throw Error(t(403));
          w = o.parentValue, o.context._currentValue = w === R ? o.context._defaultValue : w, o = xe = o.parent, c.context = o;
          return;
        case zr:
          w = w.children, w = w(p._currentValue), Lt(o, c, w);
          return;
        case u:
          P = p._init, p = P(p._payload), w = Yi(p, w), Oa(o, c, p, w, void 0);
          return;
      }
      throw Error(t(
        130,
        p == null ? p : typeof p,
        ""
      ));
    }
  }
  function Lt(o, c, p) {
    if (c.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Or:
          Oa(o, c, p.type, p.props, p.ref);
          return;
        case Rr:
          throw Error(t(257));
        case u:
          var w = p._init;
          p = w(p._payload), Lt(o, c, p);
          return;
      }
      if (Ge(p)) {
        Gi(o, c, p);
        return;
      }
      if (p === null || typeof p != "object" ? w = null : (w = B && p[B] || p["@@iterator"], w = typeof w == "function" ? w : null), w && (w = w.call(p))) {
        if (p = w.next(), !p.done) {
          var P = [];
          do
            P.push(p.value), p = w.next();
          while (!p.done);
          Gi(o, c, P);
        }
        return;
      }
      throw o = Object.prototype.toString.call(p), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : o));
    }
    typeof p == "string" ? (w = c.blockedSegment, w.lastPushedText = O(c.blockedSegment.chunks, p, o.responseState, w.lastPushedText)) : typeof p == "number" && (w = c.blockedSegment, w.lastPushedText = O(c.blockedSegment.chunks, "" + p, o.responseState, w.lastPushedText));
  }
  function Gi(o, c, p) {
    for (var w = p.length, P = 0; P < w; P++) {
      var I = c.treeContext;
      c.treeContext = kr(I, w, P);
      try {
        Ra(o, c, p[P]);
      } finally {
        c.treeContext = I;
      }
    }
  }
  function Ra(o, c, p) {
    var w = c.blockedSegment.formatContext, P = c.legacyContext, I = c.context;
    try {
      return Lt(o, c, p);
    } catch (he) {
      if (Ca(), typeof he == "object" && he !== null && typeof he.then == "function") {
        p = he;
        var W = c.blockedSegment, K = Fn(o, W.chunks.length, null, W.formatContext, W.lastPushedText, !0);
        W.children.push(K), W.lastPushedText = !1, o = Aa(o, c.node, c.blockedBoundary, K, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, p.then(o, o), c.blockedSegment.formatContext = w, c.legacyContext = P, c.context = I, hr(I);
      } else throw c.blockedSegment.formatContext = w, c.legacyContext = P, c.context = I, hr(I), he;
    }
  }
  function Bl(o) {
    var c = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, Xi(this, c, o);
  }
  function Vi(o, c, p) {
    var w = o.blockedBoundary;
    o.blockedSegment.status = 3, w === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (w.pendingTasks--, w.forceClientRender || (w.forceClientRender = !0, o = p === void 0 ? Error(t(432)) : p, w.errorDigest = c.onError(o), w.parentFlushed && c.clientRenderedBoundaries.push(w)), w.fallbackAbortableTasks.forEach(function(P) {
      return Vi(P, c, p);
    }), w.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (w = c.onAllReady, w()));
  }
  function zn(o, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var p = c.children[0];
      p.id = c.id, p.parentFlushed = !0, p.status === 1 && zn(o, p);
    } else o.completedSegments.push(c);
  }
  function Xi(o, c, p) {
    if (c === null) {
      if (p.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = p;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = rn, c = o.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && zn(c, p), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(Bl, o), c.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (zn(c, p), c.completedSegments.length === 1 && c.parentFlushed && o.partialBoundaries.push(c)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function Ki(o) {
    if (o.status !== 2) {
      var c = xe, p = Ea.current;
      Ea.current = Bi;
      var w = jn;
      jn = o.responseState;
      try {
        var P = o.pingedTasks, I;
        for (I = 0; I < P.length; I++) {
          var W = P[I], K = o, he = W.blockedSegment;
          if (he.status === 0) {
            hr(W.context);
            try {
              Lt(K, W, W.node), he.lastPushedText && he.textEmbedded && he.chunks.push(U), W.abortSet.delete(W), he.status = 1, Xi(K, W.blockedBoundary, he);
            } catch (Qt) {
              if (Ca(), typeof Qt == "object" && Qt !== null && typeof Qt.then == "function") {
                var Te = W.ping;
                Qt.then(Te, Te);
              } else {
                W.abortSet.delete(W), he.status = 4;
                var _e = W.blockedBoundary, Qe = Qt, Dt = nn(K, Qe);
                if (_e === null ? Mn(K, Qe) : (_e.pendingTasks--, _e.forceClientRender || (_e.forceClientRender = !0, _e.errorDigest = Dt, _e.parentFlushed && K.clientRenderedBoundaries.push(_e))), K.allPendingTasks--, K.allPendingTasks === 0) {
                  var Zt = K.onAllReady;
                  Zt();
                }
              }
            } finally {
            }
          }
        }
        P.splice(0, I), o.destination !== null && Ia(o, o.destination);
      } catch (Qt) {
        nn(o, Qt), Mn(o, Qt);
      } finally {
        jn = w, Ea.current = p, p === Bi && hr(c);
      }
    }
  }
  function Hn(o, c, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var w = p.id = o.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, o = o.responseState, a(c, Le), a(c, o.placeholderPrefix), o = h(w.toString(16)), a(c, o), s(c, nr);
      case 1:
        p.status = 2;
        var P = !0;
        w = p.chunks;
        var I = 0;
        p = p.children;
        for (var W = 0; W < p.length; W++) {
          for (P = p[W]; I < P.index; I++) a(c, w[I]);
          P = $n(o, c, P);
        }
        for (; I < w.length - 1; I++) a(c, w[I]);
        return I < w.length && (P = s(c, w[I])), P;
      default:
        throw Error(t(390));
    }
  }
  function $n(o, c, p) {
    var w = p.boundary;
    if (w === null) return Hn(o, c, p);
    if (w.parentFlushed = !0, w.forceClientRender) w = w.errorDigest, s(c, ht), a(c, nt), w && (a(c, qt), a(c, h(Se(w))), a(c, pt)), s(c, Yt), Hn(o, c, p);
    else if (0 < w.pendingTasks) {
      w.rootSegmentID = o.nextSegmentId++, 0 < w.completedSegments.length && o.partialBoundaries.push(w);
      var P = o.responseState, I = P.nextSuspenseID++;
      P = f(P.boundaryPrefix + I.toString(16)), w = w.id = P, mt(c, o.responseState, w), Hn(o, c, p);
    } else if (w.byteSize > o.progressiveChunkSize) w.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(w), mt(c, o.responseState, w.id), Hn(o, c, p);
    else {
      if (s(c, ar), p = w.completedSegments, p.length !== 1) throw Error(t(391));
      $n(o, c, p[0]);
    }
    return s(c, At);
  }
  function Ji(o, c, p) {
    return fr(c, o.responseState, p.formatContext, p.id), $n(o, c, p), It(c, p.formatContext);
  }
  function Zi(o, c, p) {
    for (var w = p.completedSegments, P = 0; P < w.length; P++) Qi(o, c, p, w[P]);
    if (w.length = 0, o = o.responseState, w = p.id, p = p.rootSegmentID, a(c, o.startInlineScript), o.sentCompleteBoundaryFunction ? a(c, A) : (o.sentCompleteBoundaryFunction = !0, a(c, v)), w === null) throw Error(t(395));
    return p = h(p.toString(16)), a(c, w), a(c, V), a(c, o.segmentPrefix), a(c, p), s(c, ye);
  }
  function Qi(o, c, p, w) {
    if (w.status === 2) return !0;
    var P = w.id;
    if (P === -1) {
      if ((w.id = p.rootSegmentID) === -1) throw Error(t(392));
      return Ji(o, c, w);
    }
    return Ji(o, c, w), o = o.responseState, a(c, o.startInlineScript), o.sentCompleteSegmentFunction ? a(c, Xt) : (o.sentCompleteSegmentFunction = !0, a(c, pr)), a(c, o.segmentPrefix), P = h(P.toString(16)), a(c, P), a(c, lr), a(c, o.placeholderPrefix), a(c, P), s(c, y);
  }
  function Ia(o, c) {
    r = new Uint8Array(512), n = 0;
    try {
      var p = o.completedRootSegment;
      if (p !== null && o.pendingRootTasks === 0) {
        $n(o, c, p), o.completedRootSegment = null;
        var w = o.responseState.bootstrapChunks;
        for (p = 0; p < w.length - 1; p++) a(c, w[p]);
        p < w.length && s(c, w[p]);
      }
      var P = o.clientRenderedBoundaries, I;
      for (I = 0; I < P.length; I++) {
        var W = P[I];
        w = c;
        var K = o.responseState, he = W.id, Te = W.errorDigest, _e = W.errorMessage, Qe = W.errorComponentStack;
        if (a(w, K.startInlineScript), K.sentClientRenderFunction ? a(w, we) : (K.sentClientRenderFunction = !0, a(
          w,
          ve
        )), he === null) throw Error(t(395));
        a(w, he), a(w, Me), (Te || _e || Qe) && (a(w, yt), a(w, h(Ue(Te || "")))), (_e || Qe) && (a(w, yt), a(w, h(Ue(_e || "")))), Qe && (a(w, yt), a(w, h(Ue(Qe)))), s(w, Ve);
      }
      P.splice(0, I);
      var Dt = o.completedBoundaries;
      for (I = 0; I < Dt.length; I++) Zi(o, c, Dt[I]);
      Dt.splice(0, I), d(c), r = new Uint8Array(512), n = 0;
      var Zt = o.partialBoundaries;
      for (I = 0; I < Zt.length; I++) {
        var Qt = Zt[I];
        e: {
          P = o, W = c;
          var Un = Qt.completedSegments;
          for (K = 0; K < Un.length; K++) if (!Qi(
            P,
            W,
            Qt,
            Un[K]
          )) {
            K++, Un.splice(0, K);
            var to = !1;
            break e;
          }
          Un.splice(0, K), to = !0;
        }
        if (!to) {
          o.destination = null, I++, Zt.splice(0, I);
          return;
        }
      }
      Zt.splice(0, I);
      var Na = o.completedBoundaries;
      for (I = 0; I < Na.length; I++) Zi(o, c, Na[I]);
      Na.splice(0, I);
    } finally {
      d(c), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && c.close();
    }
  }
  function eo(o, c) {
    try {
      var p = o.abortableTasks;
      p.forEach(function(w) {
        return Vi(w, o, c);
      }), p.clear(), o.destination !== null && Ia(o, o.destination);
    } catch (w) {
      nn(o, w), Mn(o, w);
    }
  }
  return Yn.renderToReadableStream = function(o, c) {
    return new Promise(function(p, w) {
      var P, I, W = new Promise(function(_e, Qe) {
        I = _e, P = Qe;
      }), K = Ul(o, Oe(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), et(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, I, function() {
        var _e = new ReadableStream({ type: "bytes", pull: function(Qe) {
          if (K.status === 1) K.status = 2, x(Qe, K.fatalError);
          else if (K.status !== 2 && K.destination === null) {
            K.destination = Qe;
            try {
              Ia(K, Qe);
            } catch (Dt) {
              nn(K, Dt), Mn(K, Dt);
            }
          }
        }, cancel: function() {
          eo(K);
        } }, { highWaterMark: 0 });
        _e.allReady = W, p(_e);
      }, function(_e) {
        W.catch(function() {
        }), w(_e);
      }, P);
      if (c && c.signal) {
        var he = c.signal, Te = function() {
          eo(K, he.reason), he.removeEventListener("abort", Te);
        };
        he.addEventListener("abort", Te);
      }
      Ki(K);
    });
  }, Yn.version = "18.3.1", Yn;
}
var To;
function Pc() {
  if (To) return _r;
  To = 1;
  var e, t;
  return e = Ic(), t = Nc(), _r.version = e.version, _r.renderToString = e.renderToString, _r.renderToStaticMarkup = e.renderToStaticMarkup, _r.renderToNodeStream = e.renderToNodeStream, _r.renderToStaticNodeStream = e.renderToStaticNodeStream, _r.renderToReadableStream = t.renderToReadableStream, _r;
}
Pc();
const Lc = "staticMarkup";
function js() {
  const e = Vl().indexOf(Lc) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const tr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = js(), { onClick: a, ...s } = r.props;
  if (n)
    return ft.cloneElement(r, {
      ...s,
      onClick: (h) => (e && e.event && e.action && Ec(e), a ? a(h) : !0)
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
  return ft.cloneElement(r, {
    ...s,
    onClick: a,
    ...g
  });
}, Dc = Ei(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: n,
    onClick: a,
    gaData: s
  }, d) => {
    var g, h, f, x, _, D;
    const z = e === n, T = z ? "open" : "close";
    return /* @__PURE__ */ j.jsxs(
      "div",
      {
        ref: d,
        className: er("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (g = r.content) == null ? void 0 : g.icon
        }),
        children: [
          /* @__PURE__ */ j.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ j.jsx("h4", { children: /* @__PURE__ */ j.jsx(
            tr,
            {
              gaData: {
                ...s,
                action: T,
                text: r.content.header
              },
              children: /* @__PURE__ */ j.jsxs(
                "button",
                {
                  "data-testid": "accordion-opener",
                  className: er({ collapsed: !z }),
                  "data-bs-toggle": "collapse",
                  href: `#card-body-${e}`,
                  type: "button",
                  "aria-expanded": z,
                  "aria-controls": `card-body-${e}`,
                  onClick: (S) => a(S, e),
                  children: [
                    (h = r.content) != null && h.icon ? /* @__PURE__ */ j.jsxs("span", { className: "accordion-icon", children: [
                      /* @__PURE__ */ j.jsx(
                        "i",
                        {
                          className: `${(f = r.content.icon) == null ? void 0 : f[0]} fa-${(x = r.content.icon) == null ? void 0 : x[1]} me-2`
                        }
                      ),
                      r.content.header
                    ] }) : (_ = r.content) == null ? void 0 : _.header,
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
              className: er("collapse", { show: z }),
              children: /* @__PURE__ */ j.jsx(
                "div",
                {
                  className: "accordion-body",
                  dangerouslySetInnerHTML: jr(
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
Dc.propTypes = {
  id: l.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: Ds,
  parentId: l.string,
  openCard: l.number,
  onClick: l.func,
  gaData: l.object
};
l.arrayOf(Ds).isRequired, l.number;
const Co = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Fs = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  block: a,
  color: s = "gray",
  disabled: d,
  element: g = "button",
  href: h,
  icon: f,
  innerRef: x,
  onClick: _,
  size: D = "default",
  variant: z,
  classes: T,
  target: S = "_self",
  ...N
}) => {
  if (z) {
    const Y = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, q = er("btn", Y[z], {
      [`btn-${Y[z]}-${s}`]: !0,
      "btn-medium": D === "medium",
      "btn-small": D === "small",
      "btn-large": D === "large" || D === "default",
      disabled: d
    });
    let C = g;
    return h && g === "button" && (C = "a"), /* @__PURE__ */ j.jsx(
      tr,
      {
        gaData: {
          ...Co,
          section: t,
          ...r,
          text: e
        },
        children: /* @__PURE__ */ j.jsxs(
          C,
          {
            type: C === "button" && _ ? "button" : void 0,
            ...N,
            className: er(T) || q,
            href: h,
            ref: x,
            onClick: _,
            "aria-label": n,
            target: C === "a" ? S : null,
            disabled: d,
            children: [
              f && /* @__PURE__ */ j.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
              e
            ]
          }
        )
      }
    );
  }
  const H = er("btn", {
    [`btn-${s}`]: !0,
    "btn-md": D === "small",
    "btn-sm": D === "xsmall",
    "btn-block": a,
    disabled: d
  });
  let $ = g;
  return h && g === "button" && ($ = "a"), /* @__PURE__ */ j.jsx(
    tr,
    {
      gaData: {
        ...Co,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ j.jsxs(
        $,
        {
          type: $ === "button" && _ ? "button" : void 0,
          ...N,
          className: er(T) || H,
          href: h,
          ref: x,
          onClick: _,
          "aria-label": n,
          target: $ === "a" ? S : null,
          children: [
            f && /* @__PURE__ */ j.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Fs.propTypes = {
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
  gaData: Oi,
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
var Eo = { exports: {} }, qe = {}, Ao;
function jc() {
  if (Ao) return qe;
  Ao = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), z = Symbol.for("react.client.reference");
  function T(S) {
    if (typeof S == "object" && S !== null) {
      var N = S.$$typeof;
      switch (N) {
        case e:
          switch (S = S.type, S) {
            case r:
            case a:
            case n:
            case h:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case d:
                case g:
                case _:
                case x:
                  return S;
                case s:
                  return S;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  return qe.ContextConsumer = s, qe.ContextProvider = d, qe.Element = e, qe.ForwardRef = g, qe.Fragment = r, qe.Lazy = _, qe.Memo = x, qe.Portal = t, qe.Profiler = a, qe.StrictMode = n, qe.Suspense = h, qe.SuspenseList = f, qe.isContextConsumer = function(S) {
    return T(S) === s;
  }, qe.isContextProvider = function(S) {
    return T(S) === d;
  }, qe.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, qe.isForwardRef = function(S) {
    return T(S) === g;
  }, qe.isFragment = function(S) {
    return T(S) === r;
  }, qe.isLazy = function(S) {
    return T(S) === _;
  }, qe.isMemo = function(S) {
    return T(S) === x;
  }, qe.isPortal = function(S) {
    return T(S) === t;
  }, qe.isProfiler = function(S) {
    return T(S) === a;
  }, qe.isStrictMode = function(S) {
    return T(S) === n;
  }, qe.isSuspense = function(S) {
    return T(S) === h;
  }, qe.isSuspenseList = function(S) {
    return T(S) === f;
  }, qe.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === a || S === n || S === h || S === f || S === D || typeof S == "object" && S !== null && (S.$$typeof === _ || S.$$typeof === x || S.$$typeof === d || S.$$typeof === s || S.$$typeof === g || S.$$typeof === z || S.getModuleId !== void 0);
  }, qe.typeOf = T, qe;
}
var Oo;
function Fc() {
  return Oo || (Oo = 1, Eo.exports = /* @__PURE__ */ jc()), Eo.exports;
}
var Ms = /* @__PURE__ */ Fc();
function Mc(e) {
  function t(U, O, M, F, b) {
    for (var ee = 0, E = 0, ie = 0, Q = 0, te, X, ne = 0, de = 0, J, ge = J = te = 0, re = 0, le = 0, $e = 0, ce = 0, ot = M.length, We = ot - 1, ke, G = "", oe = "", Xe = "", Pe = "", Le; re < ot; ) {
      if (X = M.charCodeAt(re), re === We && E + Q + ie + ee !== 0 && (E !== 0 && (X = E === 47 ? 10 : 47), Q = ie = ee = 0, ot++, We++), E + Q + ie + ee === 0) {
        if (re === We && (0 < le && (G = G.replace(D, "")), 0 < G.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              G += M.charAt(re);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (G = G.trim(), te = G.charCodeAt(0), J = 1, ce = ++re; re < ot; ) {
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
            switch (J = M.substring(ce, re), te === 0 && (te = (G = G.replace(_, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (G = G.replace(D, "")), X = G.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = O;
                    break;
                  default:
                    le = lt;
                }
                if (J = t(O, le, J, X, b + 1), ce = J.length, 0 < Oe && (le = r(lt, G, $e), Le = g(3, J, le, O, Re, me, ce, X, b, F), G = le.join(""), Le !== void 0 && (ce = (J = Le.trim()).length) === 0 && (X = 0, J = "")), 0 < ce) switch (X) {
                  case 115:
                    G = G.replace(ae, d);
                  case 100:
                  case 109:
                  case 45:
                    J = G + "{" + J + "}";
                    break;
                  case 107:
                    G = G.replace($, "$1 $2"), J = G + "{" + J + "}", J = Ce === 1 || Ce === 2 && s("@" + J, 3) ? "@-webkit-" + J + "@" + J : "@" + J;
                    break;
                  default:
                    J = G + J, F === 112 && (J = (oe += J, ""));
                }
                else J = "";
                break;
              default:
                J = t(O, r(O, G, $e), J, F, b + 1);
            }
            Xe += J, J = $e = le = ge = te = 0, G = "", X = M.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (G = (0 < le ? G.replace(D, "") : G).trim(), 1 < (ce = G.length)) switch (ge === 0 && (te = G.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ce = (G = G.replace(" ", ":")).length), 0 < Oe && (Le = g(1, G, O, U, Re, me, oe.length, F, b, F)) !== void 0 && (ce = (G = Le.trim()).length) === 0 && (G = "\0\0"), te = G.charCodeAt(0), X = G.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  Pe += G + M.charAt(re);
                  break;
                }
              default:
                G.charCodeAt(ce - 1) !== 58 && (oe += a(G, te, X, G.charCodeAt(2)));
            }
            $e = le = ge = te = 0, G = "", X = M.charCodeAt(++re);
        }
      }
      switch (X) {
        case 13:
        case 10:
          E === 47 ? E = 0 : 1 + te === 0 && F !== 107 && 0 < G.length && (le = 1, G += "\0"), 0 < Oe * et && g(0, G, O, U, Re, me, oe.length, F, b, F), me = 1, Re++;
          break;
        case 59:
        case 125:
          if (E + Q + ie + ee === 0) {
            me++;
            break;
          }
        default:
          switch (me++, ke = M.charAt(re), X) {
            case 9:
            case 32:
              if (Q + ee + E === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ke = "";
                  break;
                default:
                  X !== 32 && (ke = " ");
              }
              break;
            case 0:
              ke = "\\0";
              break;
            case 12:
              ke = "\\f";
              break;
            case 11:
              ke = "\\v";
              break;
            case 38:
              Q + E + ee === 0 && (le = $e = 1, ke = "\f" + ke);
              break;
            case 108:
              if (Q + E + ee + Ne === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && M.charCodeAt(re - 3) === 58 && (Ne = ne);
                case 8:
                  de === 111 && (Ne = de);
              }
              break;
            case 58:
              Q + E + ee === 0 && (ge = re);
              break;
            case 44:
              E + ie + Q + ee === 0 && (le = 1, ke += "\r");
              break;
            case 34:
            case 39:
              E === 0 && (Q = Q === X ? 0 : Q === 0 ? X : Q);
              break;
            case 91:
              Q + E + ie === 0 && ee++;
              break;
            case 93:
              Q + E + ie === 0 && ee--;
              break;
            case 41:
              Q + E + ee === 0 && ie--;
              break;
            case 40:
              if (Q + E + ee === 0) {
                if (te === 0) switch (2 * ne + 3 * de) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ie++;
              }
              break;
            case 64:
              E + ie + Q + ee + ge + J === 0 && (J = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + ee + ie)) switch (E) {
                case 0:
                  switch (2 * X + 3 * M.charCodeAt(re + 1)) {
                    case 235:
                      E = 47;
                      break;
                    case 220:
                      ce = re, E = 42;
                  }
                  break;
                case 42:
                  X === 47 && ne === 42 && ce + 2 !== re && (M.charCodeAt(ce + 2) === 33 && (oe += M.substring(ce, re + 1)), ke = "", E = 0);
              }
          }
          E === 0 && (G += ke);
      }
      de = ne, ne = X, re++;
    }
    if (ce = oe.length, 0 < ce) {
      if (le = O, 0 < Oe && (Le = g(2, oe, le, U, Re, me, ce, F, b, F), Le !== void 0 && (oe = Le).length === 0)) return Pe + oe + Xe;
      if (oe = le.join(",") + "{" + oe + "}", Ce * Ne !== 0) {
        switch (Ce !== 2 || s(oe, 2) || (Ne = 0), Ne) {
          case 111:
            oe = oe.replace(q, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(Y, "::-webkit-input-$1") + oe.replace(Y, "::-moz-$1") + oe.replace(Y, ":-ms-input-$1") + oe;
        }
        Ne = 0;
      }
    }
    return Pe + oe + Xe;
  }
  function r(U, O, M) {
    var F = O.trim().split(N);
    O = F;
    var b = F.length, ee = U.length;
    switch (ee) {
      case 0:
      case 1:
        var E = 0;
        for (U = ee === 0 ? "" : U[0] + " "; E < b; ++E)
          O[E] = n(U, O[E], M).trim();
        break;
      default:
        var ie = E = 0;
        for (O = []; E < b; ++E)
          for (var Q = 0; Q < ee; ++Q)
            O[ie++] = n(U[Q] + " ", F[E], M).trim();
    }
    return O;
  }
  function n(U, O, M) {
    var F = O.charCodeAt(0);
    switch (33 > F && (F = (O = O.trim()).charCodeAt(0)), F) {
      case 38:
        return O.replace(H, "$1" + U.trim());
      case 58:
        return U.trim() + O.replace(H, "$1" + U.trim());
      default:
        if (0 < 1 * M && 0 < O.indexOf("\f")) return O.replace(H, (U.charCodeAt(0) === 58 ? "" : "$1") + U.trim());
    }
    return U + O;
  }
  function a(U, O, M, F) {
    var b = U + ";", ee = 2 * O + 3 * M + 4 * F;
    if (ee === 944) {
      U = b.indexOf(":", 9) + 1;
      var E = b.substring(U, b.length - 1).trim();
      return E = b.substring(0, U).trim() + E + ";", Ce === 1 || Ce === 2 && s(E, 1) ? "-webkit-" + E + E : E;
    }
    if (Ce === 0 || Ce === 2 && !s(b, 1)) return b;
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
        return E = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + E + "-webkit-" + b + "-ms-flex-pack" + E + b;
      case 1005:
        return T.test(b) ? b.replace(z, ":-webkit-") + b.replace(z, ":-moz-") + b : b;
      case 1e3:
        switch (E = b.substring(13).trim(), O = E.indexOf("-") + 1, E.charCodeAt(0) + E.charCodeAt(O)) {
          case 226:
            E = b.replace(C, "tb");
            break;
          case 232:
            E = b.replace(C, "tb-rl");
            break;
          case 220:
            E = b.replace(C, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + E + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (O = (b = U).length - 10, E = (b.charCodeAt(O) === 33 ? b.substring(0, O) : b).substring(U.indexOf(":", 7) + 1).trim(), ee = E.charCodeAt(0) + (E.charCodeAt(7) | 0)) {
          case 203:
            if (111 > E.charCodeAt(8)) break;
          case 115:
            b = b.replace(E, "-webkit-" + E) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(E, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + b.replace(E, "-webkit-" + E) + ";" + b.replace(E, "-ms-" + E + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45) switch (b.charCodeAt(6)) {
          case 105:
            return E = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + E + "-ms-flex-" + E + b;
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
        if (Ge.test(U) === !0) return (E = U.substring(U.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(U.replace("stretch", "fill-available"), O, M, F).replace(":fill-available", ":stretch") : b.replace(E, "-webkit-" + E) + b.replace(E, "-moz-" + E.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, M + F === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10)) return b.substring(0, b.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(U, O) {
    var M = U.indexOf(O === 1 ? ":" : "{"), F = U.substring(0, O !== 3 ? M : 10);
    return M = U.substring(M + 1, U.length - 1), Be(O !== 2 ? F : F.replace(je, "$1"), M, O);
  }
  function d(U, O) {
    var M = a(O, O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2));
    return M !== O + ";" ? M.replace(Se, " or ($1)").substring(4) : "(" + O + ")";
  }
  function g(U, O, M, F, b, ee, E, ie, Q, te) {
    for (var X = 0, ne = O, de; X < Oe; ++X)
      switch (de = Fe[X].call(x, U, ne, M, F, b, ee, E, ie, Q, te)) {
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
  function h(U) {
    switch (U) {
      case void 0:
      case null:
        Oe = Fe.length = 0;
        break;
      default:
        if (typeof U == "function") Fe[Oe++] = U;
        else if (typeof U == "object") for (var O = 0, M = U.length; O < M; ++O)
          h(U[O]);
        else et = !!U | 0;
    }
    return h;
  }
  function f(U) {
    return U = U.prefix, U !== void 0 && (Be = null, U ? typeof U != "function" ? Ce = 1 : (Ce = 2, Be = U) : Ce = 0), f;
  }
  function x(U, O) {
    var M = U;
    if (33 > M.charCodeAt(0) && (M = M.trim()), se = M, M = [se], 0 < Oe) {
      var F = g(-1, O, M, M, Re, me, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (O = F);
    }
    var b = t(lt, M, O, 0, 0);
    return 0 < Oe && (F = g(-2, b, M, M, Re, me, b.length, 0, 0, 0), F !== void 0 && (b = F)), se = "", Ne = 0, me = Re = 1, b;
  }
  var _ = /^\0+/g, D = /[\0\r\f]/g, z = /: */g, T = /zoo|gra/, S = /([,: ])(transform)/g, N = /,\r+?/g, H = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, q = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, Se = /([\s\S]*?);/g, Ie = /-self|flex-/g, je = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ge = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, me = 1, Re = 1, Ne = 0, Ce = 1, lt = [], Fe = [], Oe = 0, Be = null, et = 0, se = "";
  return x.use = h, x.set = f, e !== void 0 && f(e), x;
}
var zc = {
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
function Hc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var $c = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ro = /* @__PURE__ */ Hc(
  function(e) {
    return $c.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Io = { exports: {} }, ze = {}, No;
function Uc() {
  if (No) return ze;
  No = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, g = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, _ = e ? Symbol.for("react.suspense") : 60113, D = e ? Symbol.for("react.suspense_list") : 60120, z = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, H = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function Y(C) {
    if (typeof C == "object" && C !== null) {
      var ae = C.$$typeof;
      switch (ae) {
        case t:
          switch (C = C.type, C) {
            case h:
            case f:
            case n:
            case s:
            case a:
            case _:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case g:
                case x:
                case T:
                case z:
                case d:
                  return C;
                default:
                  return ae;
              }
          }
        case r:
          return ae;
      }
    }
  }
  function q(C) {
    return Y(C) === f;
  }
  return ze.AsyncMode = h, ze.ConcurrentMode = f, ze.ContextConsumer = g, ze.ContextProvider = d, ze.Element = t, ze.ForwardRef = x, ze.Fragment = n, ze.Lazy = T, ze.Memo = z, ze.Portal = r, ze.Profiler = s, ze.StrictMode = a, ze.Suspense = _, ze.isAsyncMode = function(C) {
    return q(C) || Y(C) === h;
  }, ze.isConcurrentMode = q, ze.isContextConsumer = function(C) {
    return Y(C) === g;
  }, ze.isContextProvider = function(C) {
    return Y(C) === d;
  }, ze.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, ze.isForwardRef = function(C) {
    return Y(C) === x;
  }, ze.isFragment = function(C) {
    return Y(C) === n;
  }, ze.isLazy = function(C) {
    return Y(C) === T;
  }, ze.isMemo = function(C) {
    return Y(C) === z;
  }, ze.isPortal = function(C) {
    return Y(C) === r;
  }, ze.isProfiler = function(C) {
    return Y(C) === s;
  }, ze.isStrictMode = function(C) {
    return Y(C) === a;
  }, ze.isSuspense = function(C) {
    return Y(C) === _;
  }, ze.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === f || C === s || C === a || C === _ || C === D || typeof C == "object" && C !== null && (C.$$typeof === T || C.$$typeof === z || C.$$typeof === d || C.$$typeof === g || C.$$typeof === x || C.$$typeof === N || C.$$typeof === H || C.$$typeof === $ || C.$$typeof === S);
  }, ze.typeOf = Y, ze;
}
var Po;
function Bc() {
  return Po || (Po = 1, Io.exports = Uc()), Io.exports;
}
var Ba, Lo;
function Wc() {
  if (Lo) return Ba;
  Lo = 1;
  var e = Bc(), t = {
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
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, a = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[e.ForwardRef] = n, s[e.Memo] = a;
  function d(T) {
    return e.isMemo(T) ? a : s[T.$$typeof] || t;
  }
  var g = Object.defineProperty, h = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, x = Object.getOwnPropertyDescriptor, _ = Object.getPrototypeOf, D = Object.prototype;
  function z(T, S, N) {
    if (typeof S != "string") {
      if (D) {
        var H = _(S);
        H && H !== D && z(T, H, N);
      }
      var $ = h(S);
      f && ($ = $.concat(f(S)));
      for (var Y = d(T), q = d(S), C = 0; C < $.length; ++C) {
        var ae = $[C];
        if (!r[ae] && !(N && N[ae]) && !(q && q[ae]) && !(Y && Y[ae])) {
          var Se = x(S, ae);
          try {
            g(T, ae, Se);
          } catch {
          }
        }
      }
    }
    return T;
  }
  return Ba = z, Ba;
}
var qc = Wc();
const Yc = /* @__PURE__ */ Ai(qc);
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
var Do = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, ci = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ms.typeOf(e);
}, da = Object.freeze([]), Tr = Object.freeze({});
function wn(e) {
  return typeof e == "function";
}
function jo(e) {
  return e.displayName || e.name || "Component";
}
function Ri(e) {
  return e && typeof e.styledComponentId == "string";
}
var Br = typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_ATTR || bt.env.SC_ATTR) || "data-styled", Ii = typeof window < "u" && "HTMLElement" in window, Gc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && bt.env.REACT_APP_SC_DISABLE_SPEEDY : bt.env.SC_DISABLE_SPEEDY !== void 0 && bt.env.SC_DISABLE_SPEEDY !== "" ? bt.env.SC_DISABLE_SPEEDY !== "false" && bt.env.SC_DISABLE_SPEEDY : bt.env.NODE_ENV !== "production"));
function Tn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Vc = function() {
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
    for (var h = this.indexOfGroup(r + 1), f = 0, x = n.length; f < x; f++) this.tag.insertRule(h, n[f]) && (this.groupSizes[r]++, h++);
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
}(), ia = /* @__PURE__ */ new Map(), fa = /* @__PURE__ */ new Map(), yn = 1, Gn = function(e) {
  if (ia.has(e)) return ia.get(e);
  for (; fa.has(yn); ) yn++;
  var t = yn++;
  return ia.set(e, t), fa.set(t, e), t;
}, Xc = function(e) {
  return fa.get(e);
}, Kc = function(e, t) {
  t >= yn && (yn = t + 1), ia.set(e, t), fa.set(t, e);
}, Jc = "style[" + Br + '][data-styled-version="5.3.11"]', Zc = new RegExp("^" + Br + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Qc = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, d = a.length; s < d; s++) (n = a[s]) && e.registerName(t, n);
}, eu = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var d = r[a].trim();
    if (d) {
      var g = d.match(Zc);
      if (g) {
        var h = 0 | parseInt(g[1], 10), f = g[2];
        h !== 0 && (Kc(f, h), Qc(e, f, g[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, tu = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, zs = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(g) {
    for (var h = g.childNodes, f = h.length; f >= 0; f--) {
      var x = h[f];
      if (x && x.nodeType === 1 && x.hasAttribute(Br)) return x;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Br, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = tu();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, ru = function() {
  function e(r) {
    var n = this.element = zs(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, d = 0, g = s.length; d < g; d++) {
        var h = s[d];
        if (h.ownerNode === a) return h;
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
}(), nu = function() {
  function e(r) {
    var n = this.element = zs(r);
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
}(), au = function() {
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
}(), Fo = Ii, iu = { isServer: !Ii, useCSSOMInjection: !Gc }, Hs = function() {
  function e(r, n, a) {
    r === void 0 && (r = Tr), n === void 0 && (n = {}), this.options = yr({}, iu, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Ii && Fo && (Fo = !1, function(s) {
      for (var d = document.querySelectorAll(Jc), g = 0, h = d.length; g < h; g++) {
        var f = d[g];
        f && f.getAttribute(Br) !== "active" && (eu(s, f), f.parentNode && f.parentNode.removeChild(f));
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
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new au(d) : s ? new ru(d) : new nu(d), new Vc(r)));
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
        var g = Xc(d);
        if (g !== void 0) {
          var h = r.names.get(g), f = n.getGroup(d);
          if (h && f && h.size) {
            var x = Br + ".g" + d + '[id="' + g + '"]', _ = "";
            h !== void 0 && h.forEach(function(D) {
              D.length > 0 && (_ += D + ",");
            }), s += "" + f + x + '{content:"' + _ + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), ou = /(a)(d)/gi, Mo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ui(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Mo(t % 52) + r;
  return (Mo(t % 52) + r).replace(ou, "$1-$2");
}
var $r = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, $s = function(e) {
  return $r(5381, e);
};
function su(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (wn(r) && !Ri(r)) return !1;
  }
  return !0;
}
var lu = $s("5.3.11"), cu = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && su(t), this.componentId = r, this.baseHash = $r(lu, r), this.baseStyle = n, Hs.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Wr(this.rules, t, r, n).join(""), g = ui($r(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(a, g)) {
        var h = n(d, "." + g, void 0, a);
        r.insertRules(a, g, h);
      }
      s.push(g), this.staticRulesId = g;
    }
    else {
      for (var f = this.rules.length, x = $r(this.baseHash, n.hash), _ = "", D = 0; D < f; D++) {
        var z = this.rules[D];
        if (typeof z == "string") _ += z;
        else if (z) {
          var T = Wr(z, t, r, n), S = Array.isArray(T) ? T.join("") : T;
          x = $r(x, S + D), _ += S;
        }
      }
      if (_) {
        var N = ui(x >>> 0);
        if (!r.hasNameForId(a, N)) {
          var H = n(_, "." + N, void 0, a);
          r.insertRules(a, N, H);
        }
        s.push(N);
      }
    }
    return s.join(" ");
  }, e;
}(), uu = /^\s*\/\/.*$/gm, du = [":", "[", ".", "#"];
function fu(e) {
  var t, r, n, a, s = Tr, d = s.options, g = d === void 0 ? Tr : d, h = s.plugins, f = h === void 0 ? da : h, x = new Mc(g), _ = [], D = /* @__PURE__ */ function(S) {
    function N(H) {
      if (H) try {
        S(H + "}");
      } catch {
      }
    }
    return function(H, $, Y, q, C, ae, Se, Ie, je, Ge) {
      switch (H) {
        case 1:
          if (je === 0 && $.charCodeAt(0) === 64) return S($ + ";"), "";
          break;
        case 2:
          if (Ie === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return S(Y[0] + $), "";
            default:
              return $ + (Ge === 0 ? "/*|*/" : "");
          }
        case -2:
          $.split("/*|*/}").forEach(N);
      }
    };
  }(function(S) {
    _.push(S);
  }), z = function(S, N, H) {
    return N === 0 && du.indexOf(H[r.length]) !== -1 || H.match(a) ? S : "." + t;
  };
  function T(S, N, H, $) {
    $ === void 0 && ($ = "&");
    var Y = S.replace(uu, ""), q = N && H ? H + " " + N + " { " + Y + " }" : Y;
    return t = $, r = N, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), x(H || !N ? "" : N, q);
  }
  return x.use([].concat(f, [function(S, N, H) {
    S === 2 && H.length && H[0].lastIndexOf(r) > 0 && (H[0] = H[0].replace(n, z));
  }, D, function(S) {
    if (S === -2) {
      var N = _;
      return _ = [], N;
    }
  }])), T.hash = f.length ? f.reduce(function(S, N) {
    return N.name || Tn(15), $r(S, N.name);
  }, 5381).toString() : "", T;
}
var Us = ft.createContext();
Us.Consumer;
var Bs = ft.createContext(), pu = (Bs.Consumer, new Hs()), di = fu();
function hu() {
  return wr(Us) || pu;
}
function mu() {
  return wr(Bs) || di;
}
var gu = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = di);
      var d = n.name + s.hash;
      a.hasNameForId(n.id, d) || a.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return Tn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = di), this.name + t.hash;
  }, e;
}(), yu = /([A-Z])/, bu = /([A-Z])/g, vu = /^ms-/, wu = function(e) {
  return "-" + e.toLowerCase();
};
function zo(e) {
  return yu.test(e) ? e.replace(bu, wu).replace(vu, "-ms-") : e;
}
var Ho = function(e) {
  return e == null || e === !1 || e === "";
};
function Wr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, g = e.length; d < g; d += 1) (a = Wr(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (Ho(e)) return "";
  if (Ri(e)) return "." + e.styledComponentId;
  if (wn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return Wr(h, t, r, n);
  }
  var f;
  return e instanceof gu ? r ? (e.inject(r, n), e.getName(n)) : e : ci(e) ? function x(_, D) {
    var z, T, S = [];
    for (var N in _) _.hasOwnProperty(N) && !Ho(_[N]) && (Array.isArray(_[N]) && _[N].isCss || wn(_[N]) ? S.push(zo(N) + ":", _[N], ";") : ci(_[N]) ? S.push.apply(S, x(_[N], N)) : S.push(zo(N) + ": " + (z = N, (T = _[N]) == null || typeof T == "boolean" || T === "" ? "" : typeof T != "number" || T === 0 || z in zc || z.startsWith("--") ? String(T).trim() : T + "px") + ";"));
    return D ? [D + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var $o = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Su(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return wn(e) || ci(e) ? $o(Wr(Do(da, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : $o(Wr(Do(e, r)));
}
var ku = function(e, t, r) {
  return r === void 0 && (r = Tr), e.theme !== r.theme && e.theme || t || r.theme;
}, xu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, _u = /(^-|-$)/g;
function Wa(e) {
  return e.replace(xu, "-").replace(_u, "");
}
var Tu = function(e) {
  return ui($s(e) >>> 0);
};
function Vn(e) {
  return typeof e == "string" && bt.env.NODE_ENV === "production";
}
var fi = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Cu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Eu(e, t, r) {
  var n = e[r];
  fi(t) && fi(n) ? Ws(n, t) : e[r] = t;
}
function Ws(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (fi(d)) for (var g in d) Cu(g) && Eu(e, d[g], g);
  }
  return e;
}
var qs = ft.createContext();
qs.Consumer;
var qa = {};
function Ys(e, t, r) {
  var n = Ri(e), a = !Vn(e), s = t.attrs, d = s === void 0 ? da : s, g = t.componentId, h = g === void 0 ? function($, Y) {
    var q = typeof $ != "string" ? "sc" : Wa($);
    qa[q] = (qa[q] || 0) + 1;
    var C = q + "-" + Tu("5.3.11" + q + qa[q]);
    return Y ? Y + "-" + C : C;
  }(t.displayName, t.parentComponentId) : g, f = t.displayName, x = f === void 0 ? function($) {
    return Vn($) ? "styled." + $ : "Styled(" + jo($) + ")";
  }(e) : f, _ = t.displayName && t.componentId ? Wa(t.displayName) + "-" + t.componentId : t.componentId || h, D = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, z = t.shouldForwardProp;
  n && e.shouldForwardProp && (z = t.shouldForwardProp ? function($, Y, q) {
    return e.shouldForwardProp($, Y, q) && t.shouldForwardProp($, Y, q);
  } : e.shouldForwardProp);
  var T, S = new cu(r, _, n ? e.componentStyle : void 0), N = S.isStatic && d.length === 0, H = function($, Y) {
    return function(q, C, ae, Se) {
      var Ie = q.attrs, je = q.componentStyle, Ge = q.defaultProps, ue = q.foldedComponentIds, me = q.shouldForwardProp, Re = q.styledComponentId, Ne = q.target, Ce = function(F, b, ee) {
        F === void 0 && (F = Tr);
        var E = yr({}, b, { theme: F }), ie = {};
        return ee.forEach(function(Q) {
          var te, X, ne, de = Q;
          for (te in wn(de) && (de = de(E)), de) E[te] = ie[te] = te === "className" ? (X = ie[te], ne = de[te], X && ne ? X + " " + ne : X || ne) : de[te];
        }), [E, ie];
      }(ku(C, wr(qs), Ge) || Tr, C, Ie), lt = Ce[0], Fe = Ce[1], Oe = function(F, b, ee, E) {
        var ie = hu(), Q = mu(), te = b ? F.generateAndInjectStyles(Tr, ie, Q) : F.generateAndInjectStyles(ee, ie, Q);
        return te;
      }(je, Se, lt), Be = ae, et = Fe.$as || C.$as || Fe.as || C.as || Ne, se = Vn(et), U = Fe !== C ? yr({}, C, {}, Fe) : C, O = {};
      for (var M in U) M[0] !== "$" && M !== "as" && (M === "forwardedAs" ? O.as = U[M] : (me ? me(M, Ro, et) : !se || Ro(M)) && (O[M] = U[M]));
      return C.style && Fe.style !== C.style && (O.style = yr({}, C.style, {}, Fe.style)), O.className = Array.prototype.concat(ue, Re, Oe !== Re ? Oe : null, C.className, Fe.className).filter(Boolean).join(" "), O.ref = Be, Es(et, O);
    }(T, $, Y, N);
  };
  return H.displayName = x, (T = ft.forwardRef(H)).attrs = D, T.componentStyle = S, T.displayName = x, T.shouldForwardProp = z, T.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : da, T.styledComponentId = _, T.target = n ? e.target : e, T.withComponent = function($) {
    var Y = t.componentId, q = function(ae, Se) {
      if (ae == null) return {};
      var Ie, je, Ge = {}, ue = Object.keys(ae);
      for (je = 0; je < ue.length; je++) Ie = ue[je], Se.indexOf(Ie) >= 0 || (Ge[Ie] = ae[Ie]);
      return Ge;
    }(t, ["componentId"]), C = Y && Y + "-" + (Vn($) ? $ : Wa(jo($)));
    return Ys($, yr({}, q, { attrs: D, componentId: C }), r);
  }, Object.defineProperty(T, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = n ? Ws({}, e.defaultProps, $) : $;
  } }), Object.defineProperty(T, "toString", { value: function() {
    return "." + T.styledComponentId;
  } }), a && Yc(T, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), T;
}
var rr = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Tr), !Ms.isValidElementType(n)) return Tn(1, String(n));
    var s = function() {
      return r(n, a, Su.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, yr({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, yr({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(Ys, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  rr[e] = rr(e);
});
rr.div`
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
    h4,
    h2 {
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
function ba(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Au = /* @__PURE__ */ function() {
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
}(), Fr = function() {
  return Fr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Fr.apply(this, arguments);
}, Ou = function(e, t, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(d) {
      d(s);
    });
  }
  return new (r || (r = Promise))(function(s, d) {
    function g(x) {
      try {
        f(n.next(x));
      } catch (_) {
        d(_);
      }
    }
    function h(x) {
      try {
        f(n.throw(x));
      } catch (_) {
        d(_);
      }
    }
    function f(x) {
      x.done ? s(x.value) : a(x.value).then(g, h);
    }
    f((n = n.apply(e, [])).next());
  });
}, Ru = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, a, s, d;
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
    } catch (x) {
      f = [6, x], a = 0;
    } finally {
      n = s = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, Gs = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, Iu = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, Nu = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, Pu = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function Lu(e, t, r) {
  var n = t.height, a = t.width, s = Gs(t, ["height", "width"]), d = Fr({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), g = window.open(e, "", Object.keys(d).map(function(f) {
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
var Du = (
  /** @class */
  function(e) {
    Au(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, s = a.onShareWindowClose, d = a.windowHeight, g = d === void 0 ? 400 : d, h = a.windowPosition, f = h === void 0 ? "windowCenter" : h, x = a.windowWidth, _ = x === void 0 ? 550 : x, D = Fr({ height: g, width: _ }, f === "windowCenter" ? Nu(_, g) : Pu(_, g));
        Lu(n, D, s);
      }, r.handleClick = function(n) {
        return Ou(r, void 0, void 0, function() {
          var a, s, d, g, h, f, x, _, D, z;
          return Ru(this, function(T) {
            switch (T.label) {
              case 0:
                return a = this.props, s = a.beforeOnClick, d = a.disabled, g = a.networkLink, h = a.onClick, f = a.url, x = a.openShareDialogOnClick, _ = a.opts, D = g(f, _), d ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? (z = s(), Iu(z) ? [4, z] : [3, 2]) : [3, 2]);
              case 1:
                T.sent(), T.label = 2;
              case 2:
                return x && this.openShareDialog(D), h && h(n, D), [
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
      var h = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var f = r.resetButtonStyle, x = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var _ = Gs(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), D = er("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, a), z = Fr(Fr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, x), s && d);
      return ft.createElement("button", Fr({}, _, { "aria-label": _["aria-label"] || h, className: D, onClick: this.handleClick, ref: g, style: z }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(Wl)
), pa = function() {
  return pa = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, pa.apply(this, arguments);
};
function va(e, t, r, n) {
  function a(s, d) {
    var g = r(s), h = pa({}, s), f = Object.keys(g);
    return f.forEach(function(x) {
      delete h[x];
    }), ft.createElement(Du, pa({}, n, h, { forwardedRef: d, networkName: e, networkLink: t, opts: r(s) }));
  }
  return a.displayName = "ShareButton-".concat(e), Ei(a);
}
function ju(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + ba({ subject: r, body: n ? n + a + e : e });
}
va("email", ju, function(e) {
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
var Fu = /* @__PURE__ */ function() {
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
}(), Mu = (
  /** @class */
  function(e) {
    Fu(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function bn(e, t) {
  if (!e)
    throw new Mu(t);
}
function zu(e, t) {
  var r = t.quote, n = t.hashtag;
  return bn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + ba({
    u: e,
    quote: r,
    hashtag: n
  });
}
va("facebook", zu, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Hu(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return bn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + ba({ url: e, mini: "true", title: r, summary: n, source: a });
}
va("linkedin", Hu, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function $u(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, s = a === void 0 ? [] : a, d = t.related, g = d === void 0 ? [] : d;
  return bn(e, "twitter.url"), bn(Array.isArray(s), "twitter.hashtags is not an array"), bn(Array.isArray(g), "twitter.related is not an array"), "https://twitter.com/share" + ba({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: g.length > 0 ? g.join(",") : void 0
  });
}
va("twitter", $u, function(e) {
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
function pi(e) {
  "@babel/helpers - typeof";
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pi(e);
}
var Uu = (typeof window > "u" ? "undefined" : pi(window)) === "object" && window.Element || function() {
};
function Bu(e, t, r) {
  if (!(e[t] instanceof Uu))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, Bu, l.shape({
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
const Wu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Vs = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  color: a = "gray",
  disabled: s,
  element: d = "button",
  innerRef: g,
  href: h,
  onClick: f,
  ...x
}) => {
  const _ = er("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: s
  });
  let D = d;
  return h && d === "button" && (D = "a"), /* @__PURE__ */ j.jsx(
    tr,
    {
      gaData: {
        ...Wu,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ j.jsx(
        D,
        {
          type: D === "button" && f ? "button" : void 0,
          ...x,
          className: _,
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
Vs.propTypes = {
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
  gaData: Oi,
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
const Xs = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: s,
  fetchPriority: d = "auto",
  width: g,
  height: h,
  cardLink: f,
  title: x,
  caption: _,
  captionTitle: D,
  border: z,
  dropShadow: T
}) => {
  const S = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: d,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: ac(r) },
    ...s && { "data-testid": s },
    ...g && { width: g },
    ...h && { height: h }
  }, N = er("uds-img", {
    borderless: !z,
    "uds-img-drop-shadow": T
  }), H = (Y) => {
    const q = Y ? `${S.className} ${Y}` : S.className;
    return f ? /* @__PURE__ */ j.jsxs("a", { href: f, children: [
      /* @__PURE__ */ j.jsx("img", { ...S, className: q }),
      /* @__PURE__ */ j.jsx("span", { className: "visually-hidden", children: x })
    ] }) : /* @__PURE__ */ j.jsx("img", { ...S, className: q });
  }, $ = () => /* @__PURE__ */ j.jsx("div", { className: N, children: /* @__PURE__ */ j.jsxs("figure", { className: "figure uds-figure", children: [
    H(),
    _ && /* @__PURE__ */ j.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      D && /* @__PURE__ */ j.jsx("h3", { children: D }),
      /* @__PURE__ */ j.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: jr(_)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ j.jsx(j.Fragment, { children: _ ? $() : H(N) });
};
Xs.propTypes = {
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
const qu = rr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Yu = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Gu = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Yu(e) ? `mailto:${e}` : e, Uo = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, hi = (e) => e === "event" || e === "news", gr = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n,
  imageAltText: a,
  title: s,
  icon: d,
  body: g,
  eventFormat: h = "stack",
  eventLocation: f,
  eventTime: x,
  buttons: _,
  linkLabel: D,
  linkUrl: z,
  tags: T,
  showBorders: S = !0,
  cardLink: N
}) => /* @__PURE__ */ j.jsx(
  Ks,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: s,
    icon: d,
    body: g,
    eventFormat: h,
    eventLocation: f,
    eventTime: x,
    buttons: _,
    linkLabel: D,
    linkUrl: z,
    tags: T,
    showBorders: S,
    cardLink: N
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
const Ks = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n = "",
  imageAltText: a = "",
  title: s,
  icon: d = void 0,
  body: g = "",
  eventFormat: h = "stack",
  eventLocation: f = "",
  eventTime: x = "",
  buttons: _ = void 0,
  linkLabel: D = void 0,
  linkUrl: z = void 0,
  tags: T = void 0,
  showBorders: S = !0,
  cardLink: N
}) => {
  const H = er("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !S
  }), $ = hi(e) ? !!n : !0, Y = !hi(e);
  return /* @__PURE__ */ j.jsxs(qu, { className: H, "data-testid": "card-container", children: [
    $ && /* @__PURE__ */ j.jsx(
      Xs,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        title: s,
        cardLink: Y ? N : void 0
      }
    ),
    !n && d && /* @__PURE__ */ j.jsx(
      "i",
      {
        className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    /* @__PURE__ */ j.jsx("div", { className: r ? "card-content-wrapper" : void 0, children: /* @__PURE__ */ j.jsx(
      Js,
      {
        type: e,
        body: g,
        eventFormat: h,
        eventLocation: f,
        eventTime: x,
        title: s,
        buttons: _,
        linkLabel: D,
        linkUrl: z,
        tags: T,
        cardLink: N
      }
    ) })
  ] });
};
Ks.propTypes = {
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
const Js = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: n = "",
  eventTime: a = "",
  title: s,
  buttons: d = void 0,
  linkLabel: g = void 0,
  linkUrl: h = void 0,
  tags: f = void 0,
  cardLink: x
}) => {
  const _ = hi(e), D = x && !_, z = _ && x, T = e === "event" && (a || n);
  return /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
    /* @__PURE__ */ j.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ j.jsx("h3", { className: "card-title", children: D ? /* @__PURE__ */ j.jsx("a", { href: x, children: s }) : s }) }),
    t && /* @__PURE__ */ j.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ j.jsx("div", { dangerouslySetInnerHTML: jr(t) }) }),
    T && /* @__PURE__ */ j.jsx(
      Zs,
      {
        eventFormat: r,
        eventTime: a,
        eventLocation: n
      }
    ),
    z ? /* @__PURE__ */ j.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ j.jsx(
      tr,
      {
        gaData: {
          ...Uo,
          text: s
        },
        children: /* @__PURE__ */ j.jsx("a", { href: x, className: "card-arrow-link", "aria-label": s, children: /* @__PURE__ */ j.jsx("i", { className: "fas fa-arrow-right", "aria-hidden": "true" }) })
      }
    ) }) : /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
      d && /* @__PURE__ */ j.jsx("div", { className: "card-buttons", children: d.map((S) => /* @__PURE__ */ j.jsx(
        "div",
        {
          className: "card-button",
          "data-testid": "card-button",
          children: /* @__PURE__ */ j.jsx(
            Fs,
            {
              ariaLabel: S.ariaLabel,
              color: S.color,
              icon: S.icon,
              href: S.href,
              label: S.label,
              onClick: S.onClick,
              size: S.size,
              target: S.target,
              cardTitle: s
            }
          )
        },
        `${S.label}-${S.href}`
      )) }),
      h && g && /* @__PURE__ */ j.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ j.jsx(
        tr,
        {
          gaData: {
            ...Uo,
            section: s,
            text: g
          },
          children: /* @__PURE__ */ j.jsx("a", { href: Gu(h), children: g })
        }
      ) })
    ] }),
    f && /* @__PURE__ */ j.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((S) => (
      // @ts-ignore
      /* @__PURE__ */ j.jsx(
        Vs,
        {
          ariaLabel: S.ariaLabel,
          color: S.color,
          href: S.href,
          label: S.label,
          onClick: S.onClick,
          cardTitle: s
        },
        `${S.label}-${S.href}`
      )
    )) })
  ] });
};
Js.propTypes = {
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
const Zs = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ j.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ j.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ j.jsx("div", { children: /* @__PURE__ */ j.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ j.jsx("div", { dangerouslySetInnerHTML: jr(r) })
  ] }),
  t && /* @__PURE__ */ j.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ j.jsx("div", { children: /* @__PURE__ */ j.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ j.jsx(
      "div",
      {
        dangerouslySetInnerHTML: jr(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
  r && /* @__PURE__ */ j.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ j.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ j.jsx("div", { children: /* @__PURE__ */ j.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ j.jsx("div", { dangerouslySetInnerHTML: jr(r) })
  ] }) }),
  t && /* @__PURE__ */ j.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ j.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ j.jsx("div", { children: /* @__PURE__ */ j.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ j.jsx("span", { children: /* @__PURE__ */ j.jsx(
      "div",
      {
        dangerouslySetInnerHTML: jr(t)
      }
    ) })
  ] }) })
] });
Zs.propTypes = {
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
const Vu = rr.div`
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
`, Xu = () => /* @__PURE__ */ j.jsxs(Vu, { children: [
  /* @__PURE__ */ j.jsx("div", {}),
  /* @__PURE__ */ j.jsx("div", {}),
  /* @__PURE__ */ j.jsx("div", {}),
  /* @__PURE__ */ j.jsx("div", {})
] }), Ku = rr.section``, wa = ql(null), Qs = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: a,
  dataTransformer: s,
  dataFilter: d,
  maxItems: g
}) => {
  const [{ data: h, loading: f, error: x }, _] = nc(), [D, z] = Hr([]), T = { ...e.dataSource, ...t };
  return Er(() => {
    _(T == null ? void 0 : T.url);
  }, [T == null ? void 0 : T.url]), Er(() => {
    const S = h == null ? void 0 : h.nodes.map(s), N = S == null ? void 0 : S.filter(
      (H) => d(H, t == null ? void 0 : t.filters)
    );
    z(g ? N == null ? void 0 : N.slice(0, g) : N);
  }, [h]), // Init the context to be used on its childrens
  /* @__PURE__ */ j.jsx(wa.Provider, { value: { feeds: D }, children: /* @__PURE__ */ j.jsxs(Ku, { children: [
    n,
    x ? /* @__PURE__ */ j.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
      f && !(D != null && D.length) && /* @__PURE__ */ j.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ j.jsx(Xu, {}) }),
      D != null && D.length ? a : !f && /* @__PURE__ */ j.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
Qs.propTypes = {
  renderHeader: l.element,
  renderBody: l.element,
  maxItems: l.number,
  dataTransformer: l.func,
  dataFilter: l.func,
  noFeedText: l.string
};
const Ni = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), Pi = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
}), el = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
}), tl = l.shape({
  url: l.string,
  filters: l.string
}), Ju = l.shape({
  header: Ni,
  ctaButton: Pi,
  dataSource: tl,
  maxItems: l.number
}), Zu = rr.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, rl = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const n = { ...e.header, ...t }, a = { ...e.ctaButton, ...r }, s = n.tag || "h2", d = s !== "h2", g = `text-${n.color} ${d ? "h2" : ""}`.trim();
  return /* @__PURE__ */ j.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ j.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ j.jsx(s, { className: g, children: n.text }) }),
        /* @__PURE__ */ j.jsx(Zu, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ j.jsx(
          tr,
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
rl.propTypes = {
  defaultProps: Ju,
  header: Ni,
  ctaButton: Pi
};
const nl = ({ children: e }) => /* @__PURE__ */ j.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ j.jsx("div", { className: "col", children: e }) });
nl.propTypes = {
  children: l.element
};
rr.img`
  width: 100%;
`;
l.oneOf(["heading-hero", "story-hero"]), l.arrayOf(Ua), l.string;
l.bool, l.bool, l.bool, l.bool, l.string, l.func, l.node, l.bool, l.string, l.bool;
l.oneOf(["default", "bordered"]).isRequired, l.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, l.number, l.number, l.func.isRequired;
rr.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const Qu = Ei(function(e, t) {
  const {
    id: r,
    selected: n,
    title: a,
    selectTab: s,
    leftKeyPressed: d,
    rightKeyPressed: g,
    icon: h,
    gaData: f
  } = e, { isReact: x, isBootstrap: _ } = js(), D = Yl(null);
  Gl(t, () => ({
    focus() {
      D.current.focus();
    },
    scrollIntoView() {
      var T, S, N, H, $, Y, q;
      const C = ((T = D.current) == null ? void 0 : T.offsetWidth) / 2 + D.current.offsetLeft, ae = ((N = (S = D.current) == null ? void 0 : S.offsetParent) == null ? void 0 : N.scrollLeft) + (($ = (H = D.current) == null ? void 0 : H.offsetParent) == null ? void 0 : $.offsetWidth) / 2;
      (q = (Y = D.current) == null ? void 0 : Y.offsetParent) == null || q.scrollBy({
        left: C - ae
      });
    }
  }), []);
  const z = (T) => {
    T.keyCode === 37 ? (T.preventDefault(), d()) : T.keyCode === 39 && (T.preventDefault(), g());
  };
  return /* @__PURE__ */ j.jsx(tr, { gaData: { ...f, text: a }, children: /* @__PURE__ */ j.jsxs(
    "a",
    {
      ref: D,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      "data-bs-toggle": _ && "tab",
      onClick: x && ((T) => s(T, r, a)),
      onKeyDown: x && z,
      tabIndex: n ? "" : "-1",
      children: [
        a,
        " ",
        h && /* @__PURE__ */ j.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` })
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
const ed = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, al = ({ children: e }) => /* @__PURE__ */ j.jsx(
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
al.propTypes = {
  children: l.oneOfType([
    l.element,
    l.arrayOf(l.element)
  ]).isRequired
};
const il = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ j.jsx(tr, { gaData: ed, children: /* @__PURE__ */ j.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`
        }
      ) }, `bullet-${r}`)
    );
  return /* @__PURE__ */ j.jsx(al, { children: t });
};
il.propTypes = {
  buttonCount: l.number.isRequired
};
l.arrayOf(l.string).isRequired, l.func;
const ol = ({ onClick: e = () => null }) => /* @__PURE__ */ j.jsx(
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
ol.propTypes = {
  onClick: l.func
};
const sl = ({ onClick: e = () => null }) => /* @__PURE__ */ j.jsx(
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
sl.propTypes = {
  onClick: l.func
};
const Bo = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, ll = ({ children: e = null }) => /* @__PURE__ */ j.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
ll.propTypes = {
  children: l.arrayOf(l.element)
};
const cl = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ j.jsxs(ll, { children: [
  /* @__PURE__ */ j.jsx(tr, { gaData: { ...Bo, text: "left chevron" }, children: /* @__PURE__ */ j.jsx(sl, { onClick: e }) }),
  t,
  /* @__PURE__ */ j.jsx(tr, { gaData: { ...Bo, text: "right chevron" }, children: /* @__PURE__ */ j.jsx(ol, { onClick: e }) })
] });
cl.propTypes = {
  children: l.element,
  onClick: l.func
};
const ul = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ j.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ j.jsx("ul", { className: "glide__slides", children: t });
};
ul.propTypes = {
  carouselItems: l.arrayOf(l.object)
};
function Wo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wo(Object(r), !0).forEach(function(n) {
      rd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oa(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? oa = function(t) {
    return typeof t;
  } : oa = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oa(e);
}
function Sa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function td(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ka(e, t, r) {
  return t && td(e.prototype, t), e;
}
function rd(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function nd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && mi(e, t);
}
function qr(e) {
  return qr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, qr(e);
}
function mi(e, t) {
  return mi = Object.setPrototypeOf || function(r, n) {
    return r.__proto__ = n, r;
  }, mi(e, t);
}
function ad() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function id(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function od(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return id(e);
}
function sd(e) {
  var t = ad();
  return function() {
    var r = qr(e), n;
    if (t) {
      var a = qr(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else
      n = r.apply(this, arguments);
    return od(this, n);
  };
}
function ld(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = qr(e), e !== null); )
    ;
  return e;
}
function sa() {
  return typeof Reflect < "u" && Reflect.get ? sa = Reflect.get : sa = function(e, t, r) {
    var n = ld(e, t);
    if (n) {
      var a = Object.getOwnPropertyDescriptor(n, t);
      return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
    }
  }, sa.apply(this, arguments);
}
var cd = {
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
function ud(e) {
  return parseFloat(e);
}
function gi(e) {
  return typeof e == "string";
}
function Yr(e) {
  var t = oa(e);
  return t === "function" || t === "object" && !!e;
}
function ha(e) {
  return typeof e == "function";
}
function dl(e) {
  return typeof e > "u";
}
function yi(e) {
  return e.constructor === Array;
}
function dd(e, t, r) {
  var n = {};
  for (var a in t)
    ha(t[a]) ? n[a] = t[a](e, n, r) : vr("Extension must be a function");
  for (var s in n)
    ha(n[s].mount) && n[s].mount();
  return n;
}
function rt(e, t, r) {
  Object.defineProperty(e, t, r);
}
function fd(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function bi(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(a) {
      t.classes.hasOwnProperty(a) && (r.classes[a] = qo(qo({}, e.classes[a]), t.classes[a]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var pd = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Sa(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return ka(e, [{
    key: "on",
    value: function(t, r) {
      if (yi(t)) {
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
      if (yi(t)) {
        for (var n = 0; n < t.length; n++)
          this.emit(t[n], r);
        return;
      }
      this.hop.call(this.events, t) && this.events[t].forEach(function(a) {
        a(r || {});
      });
    }
  }]), e;
}(), hd = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Sa(this, e), this._c = {}, this._t = [], this._e = new pd(), this.disabled = !1, this.selector = t, this.settings = bi(cd, r), this.index = this.settings.startAt;
  }
  return ka(e, [{
    key: "mount",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Yr(t) ? this._c = dd(this, t, this._e) : vr("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return yi(t) ? this._t = t : vr("You need to provide a array on `mutate()`"), this;
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
      return this.settings = bi(this.settings, t), t.hasOwnProperty("startAt") && (this.index = t.startAt), this._e.emit("update"), this;
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
      Yr(t) ? this._o = t : vr("Options must be an `object` instance.");
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
function md(e, t, r) {
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
      var h = this.move, f = this.length, x = h.steps, _ = h.direction, D = 1;
      if (_ === "=") {
        if (e.settings.bound && wt(x) > f) {
          e.index = f;
          return;
        }
        e.index = x;
        return;
      }
      if (_ === ">" && x === ">") {
        e.index = f;
        return;
      }
      if (_ === "<" && x === "<") {
        e.index = 0;
        return;
      }
      if (_ === "|" && (D = e.settings.perView || 1), _ === ">" || _ === "|" && x === ">") {
        var z = a(D);
        z > f && (this._o = !0), e.index = s(z, D);
        return;
      }
      if (_ === "<" || _ === "|" && x === "<") {
        var T = d(D);
        T < 0 && (this._o = !0), e.index = g(T, D);
        return;
      }
      vr("Invalid direction pattern [".concat(_).concat(x, "] has been used"));
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
  function a(h) {
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
    set: function(h) {
      var f = h.substr(1);
      this._m = {
        direction: h.substr(0, 1),
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
      var h = e.settings, f = t.Html.slides.length;
      return this.isBound() ? f - 1 - (wt(h.perView) - 1) + wt(h.focusAt) : f - 1;
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
function Yo() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function xa(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, a, s, d, g = 0, h = function() {
    g = r.leading === !1 ? 0 : Yo(), n = null, d = e.apply(a, s), n || (a = s = null);
  }, f = function() {
    var x = Yo();
    !g && r.leading === !1 && (g = x);
    var _ = t - (x - g);
    return a = this, s = arguments, _ <= 0 || _ > t ? (n && (clearTimeout(n), n = null), g = x, d = e.apply(a, s), n || (a = s = null)) : !n && r.trailing !== !1 && (n = setTimeout(h, _)), d;
  };
  return f.cancel = function() {
    clearTimeout(n), g = 0, n = a = s = null;
  }, f;
}
var Xn = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function gd(e, t, r) {
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
        var g = a[s].style, h = t.Direction.value;
        s !== 0 ? g[Xn[h][0]] = "".concat(this.value / 2, "px") : g[Xn[h][0]] = "", s !== a.length - 1 ? g[Xn[h][1]] = "".concat(this.value / 2, "px") : g[Xn[h][1]] = "";
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
  }), r.on(["build.after", "update"], xa(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function fl(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function vi(e) {
  return Array.prototype.slice.call(e);
}
var yd = '[data-glide-el="track"]';
function bd(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(yd), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = vi(this.wrapper.children).filter(function(a) {
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
      gi(a) && (a = document.querySelector(a)), a !== null ? n._r = a : vr("Root element must be a existing Html node");
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
function vd(e, t, r) {
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
      Yr(a) ? (a.before = wt(a.before), a.after = wt(a.after)) : a = wt(a), n._v = a;
    }
  }), rt(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var a = n.value, s = e.settings.perView;
      return Yr(a) ? a.before / s + a.after / s : a * 2 / s;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function wd(e, t, r) {
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
      n._o = dl(a) ? 0 : wt(a);
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
function Sd(e, t, r) {
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
function kd(e, t, r) {
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
      s && (s.classList.add(a.slide.active), fl(s).forEach(function(d) {
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
function xd(e, t, r) {
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
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = t.Html.slides, d = e.settings, g = d.perView, h = d.classes, f = d.cloningRatio;
      if (s.length > 0)
        for (var x = +!!e.settings.peek, _ = g + x + Math.round(g / 2), D = s.slice(0, _).reverse(), z = s.slice(_ * -1), T = 0; T < Math.max(f, Math.floor(g / s.length)); T++) {
          for (var S = 0; S < D.length; S++) {
            var N = D[S].cloneNode(!0);
            N.classList.add(h.slide.clone), a.push(N);
          }
          for (var H = 0; H < z.length; H++) {
            var $ = z[H].cloneNode(!0);
            $.classList.add(h.slide.clone), a.unshift($);
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
      for (var a = this.items, s = t.Html, d = s.wrapper, g = s.slides, h = Math.floor(a.length / 2), f = a.slice(0, h).reverse(), x = a.slice(h * -1).reverse(), _ = "".concat(t.Sizes.slideWidth, "px"), D = 0; D < x.length; D++)
        d.appendChild(x[D]);
      for (var z = 0; z < f.length; z++)
        d.insertBefore(f[z], g[0]);
      for (var T = 0; T < a.length; T++)
        a[T].style.width = _;
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
    Sa(this, e), this.listeners = t;
  }
  return ka(e, [{
    key: "on",
    value: function(t, r, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      gi(t) && (t = [t]);
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
      gi(t) && (t = [t]);
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
function _d(e, t, r) {
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
      n.on("resize", window, xa(function() {
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
var Td = ["ltr", "rtl"], Cd = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Ed(e, t, r) {
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
      return this.is("rtl") ? a.split(s).join(Cd[s]) : a;
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
      Td.indexOf(a) > -1 ? n._v = a : vr("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Ad(e, t) {
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
function Od(e, t) {
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
function Rd(e, t) {
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
function Id(e, t) {
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
        return Yr(n) ? r - n.before : r - n;
      }
      return r;
    }
  };
}
function Nd(e, t) {
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
function Pd(e, t, r) {
  var n = [Od, Rd, Id, Nd].concat(e._t, [Ad]);
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
        ha(d) && ha(d().modify) ? a = d(e, t, r).modify(a) : vr("Transformer should be a function that returns an object with `modify()` method");
      }
      return a;
    }
  };
}
function Ld(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(a) {
      var s = Pd(e, t).mutate(a), d = "translate3d(".concat(-1 * s, "px, 0px, 0px)");
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
function Dd(e, t, r) {
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
var pl = !1;
try {
  var Go = Object.defineProperty({}, "passive", {
    get: function() {
      pl = !0;
    }
  });
  window.addEventListener("testPassive", null, Go), window.removeEventListener("testPassive", null, Go);
} catch {
}
var wi = pl, Kn = ["touchstart", "mousedown"], Vo = ["touchmove", "mousemove"], Xo = ["touchend", "touchcancel", "mouseup", "mouseleave"], Ko = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function jd(e, t, r) {
  var n = new Ar(), a = 0, s = 0, d = 0, g = !1, h = wi ? {
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
        var _ = this.touches(x);
        a = null, s = wt(_.pageX), d = wt(_.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(x) {
      if (!e.disabled) {
        var _ = e.settings, D = _.touchAngle, z = _.touchRatio, T = _.classes, S = this.touches(x), N = wt(S.pageX) - s, H = wt(S.pageY) - d, $ = Math.abs(N << 2), Y = Math.abs(H << 2), q = Math.sqrt($ + Y), C = Math.sqrt(Y);
        if (a = Math.asin(C / q), a * 180 / Math.PI < D)
          x.stopPropagation(), t.Move.make(N * ud(z)), t.Html.root.classList.add(T.dragging), r.emit("swipe.move");
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
        var _ = e.settings, D = _.perSwipe, z = _.touchAngle, T = _.classes, S = this.touches(x), N = this.threshold(x), H = S.pageX - s, $ = a * 180 / Math.PI;
        this.enable(), H > N && $ < z ? t.Run.make(t.Direction.resolve("".concat(D, "<"))) : H < -N && $ < z ? t.Run.make(t.Direction.resolve("".concat(D, ">"))) : t.Move.make(), t.Html.root.classList.remove(T.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var x = this, _ = e.settings, D = _.swipeThreshold, z = _.dragThreshold;
      D && n.on(Kn[0], t.Html.wrapper, function(T) {
        x.start(T);
      }, h), z && n.on(Kn[1], t.Html.wrapper, function(T) {
        x.start(T);
      }, h);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(Kn[0], t.Html.wrapper, h), n.off(Kn[1], t.Html.wrapper, h);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var x = this;
      n.on(Vo, t.Html.wrapper, xa(function(_) {
        x.move(_);
      }, e.settings.throttle), h);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(Vo, t.Html.wrapper, h);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var x = this;
      n.on(Xo, t.Html.wrapper, function(_) {
        x.end(_);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(Xo, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(x) {
      return Ko.indexOf(x.type) > -1 ? x : x.touches[0] || x.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(x) {
      var _ = e.settings;
      return Ko.indexOf(x.type) > -1 ? _.dragThreshold : _.swipeThreshold;
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
function Fd(e, t, r) {
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
function Md(e, t, r) {
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
var zd = '[data-glide-el="controls[nav]"]', Li = '[data-glide-el^="controls"]', Hd = "".concat(Li, ' [data-glide-dir*="<"]'), $d = "".concat(Li, ' [data-glide-dir*=">"]');
function Ud(e, t, r) {
  var n = new Ar(), a = wi ? {
    passive: !0
  } : !1, s = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(zd), this._c = t.Html.root.querySelectorAll(Li), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(Hd),
        next: t.Html.root.querySelectorAll($d)
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
      h && (h.classList.add(g.classes.nav.active), fl(h).forEach(function(f) {
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
        vi(x).forEach(function(_) {
          _.classList.remove(d.classes.arrow.disabled);
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
        vi(x).forEach(function(_) {
          _.classList.add(d.classes.arrow.disabled);
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
      !wi && d.type === "touchstart" && d.preventDefault();
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
function Bd(e, t, r) {
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
function Wd(e, t, r) {
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
      this._e && (this.enable(), e.settings.autoplay && dl(this._i) && (this._i = setInterval(function() {
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
function Jo(e) {
  return Yr(e) ? fd(e) : (vr("Breakpoints option must be an object"), {});
}
function qd(e, t, r) {
  var n = new Ar(), a = e.settings, s = Jo(a.breakpoints), d = Object.assign({}, a), g = {
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
  return Object.assign(a, g.match(s)), n.on("resize", window, xa(function() {
    e.settings = bi(a, g.match(s));
  }, e.settings.throttle)), r.on("update", function() {
    s = Jo(s), d = Object.assign({}, a);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), g;
}
var Yd = {
  // Required
  Html: bd,
  Translate: Ld,
  Transition: Dd,
  Direction: Ed,
  Peek: vd,
  Sizes: Sd,
  Gaps: gd,
  Move: wd,
  Clones: xd,
  Resize: _d,
  Build: kd,
  Run: md,
  // Optional
  Swipe: jd,
  Images: Fd,
  Anchors: Md,
  Controls: Ud,
  Keyboard: Bd,
  Autoplay: Wd,
  Breakpoints: qd
}, Gd = /* @__PURE__ */ function(e) {
  nd(r, e);
  var t = sd(r);
  function r() {
    return Sa(this, r), t.apply(this, arguments);
  }
  return ka(r, [{
    key: "mount",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return sa(qr(r.prototype), "mount", this).call(this, Object.assign({}, Yd, n));
    }
  }]), r;
}(hd);
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
function Xd(e = 1, t, r = !0, n) {
  const { perViewSm: a, perViewMd: s, perViewLg: d } = Vd(e), g = r ? 24 : 0, h = r ? { before: 48, after: 48 } : 0, f = r ? { before: 124, after: 124 } : 0;
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
function Kd(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), a = e.querySelector(".glide__arrow--next"), s = e.querySelector(".glide__track"), d = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || a)) return;
  const g = ["slider-start", "slider-mid", "slider-end"], h = "glide__arrow--disabled";
  s == null || s.classList.remove(...g), d == null || d.classList.remove(...g), t === 0 ? (s == null || s.classList.add("slider-start"), d == null || d.classList.add("slider-start"), n == null || n.classList.add(h), n == null || n.setAttribute("aria-disabled", "true"), a == null || a.classList.remove(h), a == null || a.setAttribute("aria-disabled", "false")) : t >= r - 1 ? (s == null || s.classList.add("slider-end"), d == null || d.classList.add("slider-end"), n == null || n.classList.remove(h), n == null || n.setAttribute("aria-disabled", "false"), a == null || a.classList.add(h), a == null || a.setAttribute("aria-disabled", "true")) : (s == null || s.classList.add("slider-mid"), d == null || d.classList.add("slider-mid"), n == null || n.classList.remove(h), a == null || a.classList.remove(h), n == null || n.setAttribute("aria-disabled", "false"), a == null || a.setAttribute("aria-disabled", "false"));
}
function Jd(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), a = t, s = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((d, g) => {
    g < a || g > s ? (d.setAttribute("aria-hidden", "true"), d.setAttribute("tabindex", "-1"), d.setAttribute("inert", "")) : (d.setAttribute("aria-hidden", "false"), d.removeAttribute("tabindex"), d.removeAttribute("inert"));
  });
}
function Zd({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: a,
  hasPeek: s = !0,
  isDraggable: d
}) {
  const g = Xd(t, n, s, d), h = new Gd(`#${e}`, g);
  let f = document.querySelector(`#${e}`);
  return f.addEventListener("keyup", (x) => {
    const _ = x;
    _.keyCode === 39 ? h.go(">") : _.keyCode === 37 ? h.go("<") : _.keyCode === 13 && h.go(document.activeElement.dataset.glideDir);
  }), h.on("build.before", () => {
    f = document.querySelector(`#${e}`), f && f.classList.add("slider-start");
  }), h.on("move", () => {
    if (f = document.querySelector(`#${e}`), !f) return;
    const x = h.index;
    Jd(f, x, t);
    const _ = f.querySelector(".navigation-slider"), D = f.querySelector(".image-navigator-images");
    if (_ && D) {
      const z = _.querySelectorAll(
        ".bullet-image-container"
      ), T = _.clientWidth, S = 82, N = z[x], H = D.getBoundingClientRect().x, $ = _.getBoundingClientRect().x - H, Y = N.getBoundingClientRect().x - H, q = N.getBoundingClientRect().x + N.getBoundingClientRect().width - H;
      if (x === 0 || Y <= 0 + S)
        _.style.left = `${$ - Y + S}px`;
      else if (q >= T - S) {
        const C = q - T;
        _.style.left = `${$ - C - S}px`;
      }
    }
    Kd(f, x, r), f.setAttribute("data-current-index", x), a && a(x);
  }), h.mount(), h;
}
function Qd(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const hl = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: a = "",
  CustomNavComponent: s,
  role: d,
  ariaLabelledBy: g,
  isFullWidth: h,
  removeSideBackground: f = !1,
  hasNavButtons: x = !0,
  hasPositionIndicators: _ = !0,
  imageAutoSize: D = !0,
  onItemClick: z = () => null,
  hasPeek: T = !0,
  isDraggable: S = !0,
  hasShadow: N = !0
}) => {
  const H = `glide-${Math.ceil(Math.random() * 1e4)}`, $ = Qd(n.length, e);
  return Er(() => {
    Zd({
      instanceName: H,
      perView: e,
      buttonCount: $,
      isFullWidth: h,
      onItemClick: z,
      hasPeek: T,
      isDraggable: S
    });
  }, [
    H,
    e,
    $,
    h,
    z,
    T,
    S
  ]), /* @__PURE__ */ j.jsxs(
    "div",
    {
      role: d,
      "aria-labelledby": g,
      className: `glide ${a}`,
      id: H,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": f,
      "data-image-auto-size": D,
      "data-has-shadow": N,
      children: [
        /* @__PURE__ */ j.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ j.jsx(ul, { carouselItems: n }) }),
        s ? (
          // @ts-ignore
          /* @__PURE__ */ j.jsx(s, { instanceName: H })
        ) : /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
          _ && /* @__PURE__ */ j.jsx(il, { buttonCount: $ }),
          x && /* @__PURE__ */ j.jsx(cl, {})
        ] })
      ]
    }
  );
};
hl.propTypes = {
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
const ef = ({
  id: e,
  imageSource: t,
  imageAltText: r,
  title: n,
  content: a,
  eventLocation: s,
  eventTime: d,
  buttons: g,
  linkLabel: h,
  linkUrl: f,
  tags: x
}, _, D, z) => {
  var T;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ j.jsx(
      gr,
      {
        type: _,
        horizontal: D,
        image: t,
        imageAltText: r,
        title: n,
        body: a,
        eventFormat: z,
        eventLocation: s,
        eventTime: d,
        buttons: g,
        linkLabel: h,
        linkUrl: f || ((T = g == null ? void 0 : g[0]) == null ? void 0 : T.href),
        tags: x
      }
    )
  };
}, ml = ({
  perView: e = 0,
  cardItems: t = [],
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: a = !1,
  width: s = void 0,
  maxWidth: d = void 0,
  imageAutoSize: g = !0
}) => {
  const h = parseInt(`${e}`, 10), [f, x] = Hr(h), _ = 1024, D = 768;
  Er(() => {
    const S = () => {
      const N = window.innerWidth;
      let H;
      switch (h) {
        case 3:
          N > _ ? H = 3 : N > D ? H = 2 : H = 1;
          break;
        case 2:
          H = N < D ? 1 : 2;
          break;
        default:
          H = 1;
          break;
      }
      x(H);
    };
    return S(), window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, [h]);
  const z = t.map(
    (S) => ef(S, r, a, n)
  ), T = t.length > f;
  return /* @__PURE__ */ j.jsx(
    hl,
    {
      perView: +f,
      maxWidth: d,
      width: s,
      carouselItems: z,
      cssClass: "aligned-carousel",
      imageAutoSize: g,
      removeSideBackground: t.length <= f,
      hasPositionIndicators: T,
      hasNavButtons: T,
      isDraggable: T,
      hasShadow: !0
    }
  );
};
ml.propTypes = {
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
const ma = {
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
l.string, ma.imageItems, ma.hasContent;
ma.imageItems.isRequired, ma.hasContent, l.string, l.string, l.bool;
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
var Jn = {}, Zo;
function tf() {
  if (Zo) return Jn;
  Zo = 1;
  var e = As;
  return Jn.createRoot = e.createRoot, Jn.hydrateRoot = e.hydrateRoot, Jn;
}
tf();
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery figcaption h2{font-size:1.5rem;line-height:1.75rem;letter-spacing:-.0525rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const {
  entries: gl,
  setPrototypeOf: Qo,
  isFrozen: rf,
  getPrototypeOf: nf,
  getOwnPropertyDescriptor: af
} = Object;
let {
  freeze: Ct,
  seal: Ut,
  create: la
} = Object, {
  apply: Si,
  construct: ki
} = typeof Reflect < "u" && Reflect;
Ct || (Ct = function(t) {
  return t;
});
Ut || (Ut = function(t) {
  return t;
});
Si || (Si = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    a[s - 2] = arguments[s];
  return t.apply(r, a);
});
ki || (ki = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const Zn = Et(Array.prototype.forEach), of = Et(Array.prototype.lastIndexOf), es = Et(Array.prototype.pop), fn = Et(Array.prototype.push), sf = Et(Array.prototype.splice), ca = Et(String.prototype.toLowerCase), Ya = Et(String.prototype.toString), Ga = Et(String.prototype.match), pn = Et(String.prototype.replace), lf = Et(String.prototype.indexOf), cf = Et(String.prototype.trim), Ft = Et(Object.prototype.hasOwnProperty), xt = Et(RegExp.prototype.test), hn = uf(TypeError);
function Et(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Si(e, t, n);
  };
}
function uf(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ki(e, r);
  };
}
function Ae(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ca;
  Qo && Qo(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (rf(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function df(e) {
  for (let t = 0; t < e.length; t++)
    Ft(e, t) || (e[t] = null);
  return e;
}
function ur(e) {
  const t = la(null);
  for (const [r, n] of gl(e))
    Ft(e, r) && (Array.isArray(n) ? t[r] = df(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = ur(n) : t[r] = n);
  return t;
}
function mn(e, t) {
  for (; e !== null; ) {
    const n = af(e, t);
    if (n) {
      if (n.get)
        return Et(n.get);
      if (typeof n.value == "function")
        return Et(n.value);
    }
    e = nf(e);
  }
  function r() {
    return null;
  }
  return r;
}
const ts = Ct(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Va = Ct(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Xa = Ct(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ff = Ct(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ka = Ct(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), pf = Ct(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), rs = Ct(["#text"]), ns = Ct(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ja = Ct(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), as = Ct(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Qn = Ct(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), hf = Ut(/\{\{[\w\W]*|[\w\W]*\}\}/gm), mf = Ut(/<%[\w\W]*|[\w\W]*%>/gm), gf = Ut(/\$\{[\w\W]*/gm), yf = Ut(/^data-[\-\w.\u00B7-\uFFFF]+$/), bf = Ut(/^aria-[\-\w]+$/), yl = Ut(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), vf = Ut(/^(?:\w+script|data):/i), wf = Ut(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), bl = Ut(/^html$/i), Sf = Ut(/^[a-z][.\w]*(-[.\w]+)+$/i);
var is = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: bf,
  ATTR_WHITESPACE: wf,
  CUSTOM_ELEMENT: Sf,
  DATA_ATTR: yf,
  DOCTYPE_NAME: bl,
  ERB_EXPR: mf,
  IS_ALLOWED_URI: yl,
  IS_SCRIPT_OR_DATA: vf,
  MUSTACHE_EXPR: hf,
  TMPLIT_EXPR: gf
});
const gn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, kf = function() {
  return typeof window > "u" ? null : window;
}, xf = function(t, r) {
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
}, os = function() {
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
function vl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : kf();
  const t = (y) => vl(y);
  if (t.version = "3.3.2", t.removed = [], !e || !e.document || e.document.nodeType !== gn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: d,
    Node: g,
    Element: h,
    NodeFilter: f,
    NamedNodeMap: x = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: _,
    DOMParser: D,
    trustedTypes: z
  } = e, T = h.prototype, S = mn(T, "cloneNode"), N = mn(T, "remove"), H = mn(T, "nextSibling"), $ = mn(T, "childNodes"), Y = mn(T, "parentNode");
  if (typeof d == "function") {
    const y = r.createElement("template");
    y.content && y.content.ownerDocument && (r = y.content.ownerDocument);
  }
  let q, C = "";
  const {
    implementation: ae,
    createNodeIterator: Se,
    createDocumentFragment: Ie,
    getElementsByTagName: je
  } = r, {
    importNode: Ge
  } = n;
  let ue = os();
  t.isSupported = typeof gl == "function" && typeof Y == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: me,
    ERB_EXPR: Re,
    TMPLIT_EXPR: Ne,
    DATA_ATTR: Ce,
    ARIA_ATTR: lt,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Oe,
    CUSTOM_ELEMENT: Be
  } = is;
  let {
    IS_ALLOWED_URI: et
  } = is, se = null;
  const U = Ae({}, [...ts, ...Va, ...Xa, ...Ka, ...rs]);
  let O = null;
  const M = Ae({}, [...ns, ...Ja, ...as, ...Qn]);
  let F = Object.seal(la(null, {
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
  const E = Object.seal(la(null, {
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
  let ie = !0, Q = !0, te = !1, X = !0, ne = !1, de = !0, J = !1, ge = !1, re = !1, le = !1, $e = !1, ce = !1, ot = !0, We = !1;
  const ke = "user-content-";
  let G = !0, oe = !1, Xe = {}, Pe = null;
  const Le = Ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let nr = null;
  const ar = Ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bt = null;
  const Wt = Ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ht = "http://www.w3.org/1998/Math/MathML", At = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let pt = nt, qt = !1, Yt = null;
  const mt = Ae({}, [ht, At, nt], Ya);
  let St = Ae({}, ["mi", "mo", "mn", "ms", "mtext"]), gt = Ae({}, ["annotation-xml"]);
  const De = Ae({}, ["title", "style", "font", "a", "script"]);
  let ct = null;
  const ir = ["application/xhtml+xml", "text/html"], Gt = "text/html";
  let fe = null, st = null;
  const Ot = r.createElement("form"), or = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, Rt = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(st && st === v)) {
      if ((!v || typeof v != "object") && (v = {}), v = ur(v), ct = // eslint-disable-next-line unicorn/prefer-includes
      ir.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? Gt : v.PARSER_MEDIA_TYPE, fe = ct === "application/xhtml+xml" ? Ya : ca, se = Ft(v, "ALLOWED_TAGS") ? Ae({}, v.ALLOWED_TAGS, fe) : U, O = Ft(v, "ALLOWED_ATTR") ? Ae({}, v.ALLOWED_ATTR, fe) : M, Yt = Ft(v, "ALLOWED_NAMESPACES") ? Ae({}, v.ALLOWED_NAMESPACES, Ya) : mt, Bt = Ft(v, "ADD_URI_SAFE_ATTR") ? Ae(ur(Wt), v.ADD_URI_SAFE_ATTR, fe) : Wt, nr = Ft(v, "ADD_DATA_URI_TAGS") ? Ae(ur(ar), v.ADD_DATA_URI_TAGS, fe) : ar, Pe = Ft(v, "FORBID_CONTENTS") ? Ae({}, v.FORBID_CONTENTS, fe) : Le, b = Ft(v, "FORBID_TAGS") ? Ae({}, v.FORBID_TAGS, fe) : ur({}), ee = Ft(v, "FORBID_ATTR") ? Ae({}, v.FORBID_ATTR, fe) : ur({}), Xe = Ft(v, "USE_PROFILES") ? v.USE_PROFILES : !1, ie = v.ALLOW_ARIA_ATTR !== !1, Q = v.ALLOW_DATA_ATTR !== !1, te = v.ALLOW_UNKNOWN_PROTOCOLS || !1, X = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = v.SAFE_FOR_TEMPLATES || !1, de = v.SAFE_FOR_XML !== !1, J = v.WHOLE_DOCUMENT || !1, le = v.RETURN_DOM || !1, $e = v.RETURN_DOM_FRAGMENT || !1, ce = v.RETURN_TRUSTED_TYPE || !1, re = v.FORCE_BODY || !1, ot = v.SANITIZE_DOM !== !1, We = v.SANITIZE_NAMED_PROPS || !1, G = v.KEEP_CONTENT !== !1, oe = v.IN_PLACE || !1, et = v.ALLOWED_URI_REGEXP || yl, pt = v.NAMESPACE || nt, St = v.MATHML_TEXT_INTEGRATION_POINTS || St, gt = v.HTML_INTEGRATION_POINTS || gt, F = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && or(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (F.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && or(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (F.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (F.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), $e && (le = !0), Xe && (se = Ae({}, rs), O = la(null), Xe.html === !0 && (Ae(se, ts), Ae(O, ns)), Xe.svg === !0 && (Ae(se, Va), Ae(O, Ja), Ae(O, Qn)), Xe.svgFilters === !0 && (Ae(se, Xa), Ae(O, Ja), Ae(O, Qn)), Xe.mathMl === !0 && (Ae(se, Ka), Ae(O, as), Ae(O, Qn))), Ft(v, "ADD_TAGS") || (E.tagCheck = null), Ft(v, "ADD_ATTR") || (E.attributeCheck = null), v.ADD_TAGS && (typeof v.ADD_TAGS == "function" ? E.tagCheck = v.ADD_TAGS : (se === U && (se = ur(se)), Ae(se, v.ADD_TAGS, fe))), v.ADD_ATTR && (typeof v.ADD_ATTR == "function" ? E.attributeCheck = v.ADD_ATTR : (O === M && (O = ur(O)), Ae(O, v.ADD_ATTR, fe))), v.ADD_URI_SAFE_ATTR && Ae(Bt, v.ADD_URI_SAFE_ATTR, fe), v.FORBID_CONTENTS && (Pe === Le && (Pe = ur(Pe)), Ae(Pe, v.FORBID_CONTENTS, fe)), v.ADD_FORBID_CONTENTS && (Pe === Le && (Pe = ur(Pe)), Ae(Pe, v.ADD_FORBID_CONTENTS, fe)), G && (se["#text"] = !0), J && Ae(se, ["html", "head", "body"]), se.table && (Ae(se, ["tbody"]), delete b.tbody), v.TRUSTED_TYPES_POLICY) {
        if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        q = v.TRUSTED_TYPES_POLICY, C = q.createHTML("");
      } else
        q === void 0 && (q = xf(z, a)), q !== null && typeof C == "string" && (C = q.createHTML(""));
      Ct && Ct(v), st = v;
    }
  }, Vt = Ae({}, [...Va, ...Xa, ...ff]), sr = Ae({}, [...Ka, ...pf]), Sr = function(v) {
    let A = Y(v);
    (!A || !A.tagName) && (A = {
      namespaceURI: pt,
      tagName: "template"
    });
    const V = ca(v.tagName), ye = ca(A.tagName);
    return Yt[v.namespaceURI] ? v.namespaceURI === At ? A.namespaceURI === nt ? V === "svg" : A.namespaceURI === ht ? V === "svg" && (ye === "annotation-xml" || St[ye]) : !!Vt[V] : v.namespaceURI === ht ? A.namespaceURI === nt ? V === "math" : A.namespaceURI === At ? V === "math" && gt[ye] : !!sr[V] : v.namespaceURI === nt ? A.namespaceURI === At && !gt[ye] || A.namespaceURI === ht && !St[ye] ? !1 : !sr[V] && (De[V] || !Vt[V]) : !!(ct === "application/xhtml+xml" && Yt[v.namespaceURI]) : !1;
  }, at = function(v) {
    fn(t.removed, {
      element: v
    });
    try {
      Y(v).removeChild(v);
    } catch {
      N(v);
    }
  }, ut = function(v, A) {
    try {
      fn(t.removed, {
        attribute: A.getAttributeNode(v),
        from: A
      });
    } catch {
      fn(t.removed, {
        attribute: null,
        from: A
      });
    }
    if (A.removeAttribute(v), v === "is")
      if (le || $e)
        try {
          at(A);
        } catch {
        }
      else
        try {
          A.setAttribute(v, "");
        } catch {
        }
  }, dr = function(v) {
    let A = null, V = null;
    if (re)
      v = "<remove></remove>" + v;
    else {
      const we = Ga(v, /^[\r\n\t ]+/);
      V = we && we[0];
    }
    ct === "application/xhtml+xml" && pt === nt && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const ye = q ? q.createHTML(v) : v;
    if (pt === nt)
      try {
        A = new D().parseFromString(ye, ct);
      } catch {
      }
    if (!A || !A.documentElement) {
      A = ae.createDocument(pt, "template", null);
      try {
        A.documentElement.innerHTML = qt ? C : ye;
      } catch {
      }
    }
    const ve = A.body || A.documentElement;
    return v && V && ve.insertBefore(r.createTextNode(V), ve.childNodes[0] || null), pt === nt ? je.call(A, J ? "html" : "body")[0] : J ? A.documentElement : ve;
  }, Mt = function(v) {
    return Se.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, zt = function(v) {
    return v instanceof _ && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof x) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
  }, Ht = function(v) {
    return typeof g == "function" && v instanceof g;
  };
  function Ze(y, v, A) {
    Zn(y, (V) => {
      V.call(t, v, A, st);
    });
  }
  const fr = function(v) {
    let A = null;
    if (Ze(ue.beforeSanitizeElements, v, null), zt(v))
      return at(v), !0;
    const V = fe(v.nodeName);
    if (Ze(ue.uponSanitizeElement, v, {
      tagName: V,
      allowedTags: se
    }), de && v.hasChildNodes() && !Ht(v.firstElementChild) && xt(/<[/\w!]/g, v.innerHTML) && xt(/<[/\w!]/g, v.textContent) || v.nodeType === gn.progressingInstruction || de && v.nodeType === gn.comment && xt(/<[/\w]/g, v.data))
      return at(v), !0;
    if (!(E.tagCheck instanceof Function && E.tagCheck(V)) && (!se[V] || b[V])) {
      if (!b[V] && pr(V) && (F.tagNameCheck instanceof RegExp && xt(F.tagNameCheck, V) || F.tagNameCheck instanceof Function && F.tagNameCheck(V)))
        return !1;
      if (G && !Pe[V]) {
        const ye = Y(v) || v.parentNode, ve = $(v) || v.childNodes;
        if (ve && ye) {
          const we = ve.length;
          for (let Me = we - 1; Me >= 0; --Me) {
            const Ve = S(ve[Me], !0);
            Ve.__removalCount = (v.__removalCount || 0) + 1, ye.insertBefore(Ve, H(v));
          }
        }
      }
      return at(v), !0;
    }
    return v instanceof h && !Sr(v) || (V === "noscript" || V === "noembed" || V === "noframes") && xt(/<\/no(script|embed|frames)/i, v.innerHTML) ? (at(v), !0) : (ne && v.nodeType === gn.text && (A = v.textContent, Zn([me, Re, Ne], (ye) => {
      A = pn(A, ye, " ");
    }), v.textContent !== A && (fn(t.removed, {
      element: v.cloneNode()
    }), v.textContent = A)), Ze(ue.afterSanitizeElements, v, null), !1);
  }, It = function(v, A, V) {
    if (ee[A] || ot && (A === "id" || A === "name") && (V in r || V in Ot))
      return !1;
    if (!(Q && !ee[A] && xt(Ce, A))) {
      if (!(ie && xt(lt, A))) {
        if (!(E.attributeCheck instanceof Function && E.attributeCheck(A, v))) {
          if (!O[A] || ee[A]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(pr(v) && (F.tagNameCheck instanceof RegExp && xt(F.tagNameCheck, v) || F.tagNameCheck instanceof Function && F.tagNameCheck(v)) && (F.attributeNameCheck instanceof RegExp && xt(F.attributeNameCheck, A) || F.attributeNameCheck instanceof Function && F.attributeNameCheck(A, v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              A === "is" && F.allowCustomizedBuiltInElements && (F.tagNameCheck instanceof RegExp && xt(F.tagNameCheck, V) || F.tagNameCheck instanceof Function && F.tagNameCheck(V)))
            ) return !1;
          } else if (!Bt[A]) {
            if (!xt(et, pn(V, Oe, ""))) {
              if (!((A === "src" || A === "xlink:href" || A === "href") && v !== "script" && lf(V, "data:") === 0 && nr[v])) {
                if (!(te && !xt(Fe, pn(V, Oe, "")))) {
                  if (V)
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
    return v !== "annotation-xml" && Ga(v, Be);
  }, Xt = function(v) {
    Ze(ue.beforeSanitizeAttributes, v, null);
    const {
      attributes: A
    } = v;
    if (!A || zt(v))
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: O,
      forceKeepAttr: void 0
    };
    let ye = A.length;
    for (; ye--; ) {
      const ve = A[ye], {
        name: we,
        namespaceURI: Me,
        value: Ve
      } = ve, yt = fe(we), Ke = Ve;
      let Ue = we === "value" ? Ke : cf(Ke);
      if (V.attrName = yt, V.attrValue = Ue, V.keepAttr = !0, V.forceKeepAttr = void 0, Ze(ue.uponSanitizeAttribute, v, V), Ue = V.attrValue, We && (yt === "id" || yt === "name") && (ut(we, v), Ue = ke + Ue), de && xt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ue)) {
        ut(we, v);
        continue;
      }
      if (yt === "attributename" && Ga(Ue, "href")) {
        ut(we, v);
        continue;
      }
      if (V.forceKeepAttr)
        continue;
      if (!V.keepAttr) {
        ut(we, v);
        continue;
      }
      if (!X && xt(/\/>/i, Ue)) {
        ut(we, v);
        continue;
      }
      ne && Zn([me, Re, Ne], (Or) => {
        Ue = pn(Ue, Or, " ");
      });
      const Nt = fe(v.nodeName);
      if (!It(Nt, yt, Ue)) {
        ut(we, v);
        continue;
      }
      if (q && typeof z == "object" && typeof z.getAttributeType == "function" && !Me)
        switch (z.getAttributeType(Nt, yt)) {
          case "TrustedHTML": {
            Ue = q.createHTML(Ue);
            break;
          }
          case "TrustedScriptURL": {
            Ue = q.createScriptURL(Ue);
            break;
          }
        }
      if (Ue !== Ke)
        try {
          Me ? v.setAttributeNS(Me, we, Ue) : v.setAttribute(we, Ue), zt(v) ? at(v) : es(t.removed);
        } catch {
          ut(we, v);
        }
    }
    Ze(ue.afterSanitizeAttributes, v, null);
  }, lr = function y(v) {
    let A = null;
    const V = Mt(v);
    for (Ze(ue.beforeSanitizeShadowDOM, v, null); A = V.nextNode(); )
      Ze(ue.uponSanitizeShadowNode, A, null), fr(A), Xt(A), A.content instanceof s && y(A.content);
    Ze(ue.afterSanitizeShadowDOM, v, null);
  };
  return t.sanitize = function(y) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, A = null, V = null, ye = null, ve = null;
    if (qt = !y, qt && (y = "<!-->"), typeof y != "string" && !Ht(y))
      if (typeof y.toString == "function") {
        if (y = y.toString(), typeof y != "string")
          throw hn("dirty is not a string, aborting");
      } else
        throw hn("toString is not a function");
    if (!t.isSupported)
      return y;
    if (ge || Rt(v), t.removed = [], typeof y == "string" && (oe = !1), oe) {
      if (y.nodeName) {
        const Ve = fe(y.nodeName);
        if (!se[Ve] || b[Ve])
          throw hn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (y instanceof g)
      A = dr("<!---->"), V = A.ownerDocument.importNode(y, !0), V.nodeType === gn.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? A = V : A.appendChild(V);
    else {
      if (!le && !ne && !J && // eslint-disable-next-line unicorn/prefer-includes
      y.indexOf("<") === -1)
        return q && ce ? q.createHTML(y) : y;
      if (A = dr(y), !A)
        return le ? null : ce ? C : "";
    }
    A && re && at(A.firstChild);
    const we = Mt(oe ? y : A);
    for (; ye = we.nextNode(); )
      fr(ye), Xt(ye), ye.content instanceof s && lr(ye.content);
    if (oe)
      return y;
    if (le) {
      if ($e)
        for (ve = Ie.call(A.ownerDocument); A.firstChild; )
          ve.appendChild(A.firstChild);
      else
        ve = A;
      return (O.shadowroot || O.shadowrootmode) && (ve = Ge.call(n, ve, !0)), ve;
    }
    let Me = J ? A.outerHTML : A.innerHTML;
    return J && se["!doctype"] && A.ownerDocument && A.ownerDocument.doctype && A.ownerDocument.doctype.name && xt(bl, A.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + A.ownerDocument.doctype.name + `>
` + Me), ne && Zn([me, Re, Ne], (Ve) => {
      Me = pn(Me, Ve, " ");
    }), q && ce ? q.createHTML(Me) : Me;
  }, t.setConfig = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Rt(y), ge = !0;
  }, t.clearConfig = function() {
    st = null, ge = !1;
  }, t.isValidAttribute = function(y, v, A) {
    st || Rt({});
    const V = fe(y), ye = fe(v);
    return It(V, ye, A);
  }, t.addHook = function(y, v) {
    typeof v == "function" && fn(ue[y], v);
  }, t.removeHook = function(y, v) {
    if (v !== void 0) {
      const A = of(ue[y], v);
      return A === -1 ? void 0 : sf(ue[y], A, 1)[0];
    }
    return es(ue[y]);
  }, t.removeHooks = function(y) {
    ue[y] = [];
  }, t.removeAllHooks = function() {
    ue = os();
  }, t;
}
vl();
var Za = { exports: {} }, Qa, ss;
function _f() {
  if (ss) return Qa;
  ss = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qa = e, Qa;
}
var ei, ls;
function Tf() {
  if (ls) return ei;
  ls = 1;
  var e = /* @__PURE__ */ _f();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ei = function() {
    function n(d, g, h, f, x, _) {
      if (_ !== e) {
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
  }, ei;
}
var cs;
function Cf() {
  return cs || (cs = 1, Za.exports = /* @__PURE__ */ Tf()()), Za.exports;
}
var Ef = /* @__PURE__ */ Cf();
const dt = /* @__PURE__ */ Os(Ef);
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
const Cn = ({ children: e }) => /* @__PURE__ */ it.jsx(it.Fragment, { children: e });
Cn.propTypes = {
  children: dt.oneOfType([
    dt.arrayOf(dt.node),
    dt.node,
    dt.string
  ])
};
var ti = { exports: {} };
var us;
function Af() {
  return us || (us = 1, function(e) {
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
  }(ti)), ti.exports;
}
Af();
({
  ...Cn.propTypes
});
const wl = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ it.jsx("div", { className: t, ...r, children: /* @__PURE__ */ it.jsx("div", { className: "row", children: e }) });
wl.propTypes = {
  children: Cn.propTypes.children
};
({
  ...wl.propTypes
});
Cn.propTypes.children, dt.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Cn.propTypes.children;
function Di({
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
}, ds = ["newsUnits", "interests", "audiences", "eventTypes"], Of = (e, t = "") => {
  if (!t) return !0;
  const r = t.split(",");
  for (let n = 0; n < ds.length; n += 1) {
    const a = ds[n];
    for (let s = 0; s < r.length; s += 1) {
      const d = r[s], h = (e[a] || "").match(new RegExp(d, "gi"));
      if ((h == null ? void 0 : h.length) > 0) return !0;
    }
  }
  return !1;
}, fs = (e, t) => {
  let r = e;
  return r.length > t && (r = r.substr(0, r.lastIndexOf(" ", t)), r += "..."), r;
}, Rf = ({ node: e }, t) => ({
  index: t,
  id: e.nid,
  imageUrl: e.image_url,
  imageAltText: e.image_alt,
  title: fs(e.title, 80),
  content: fs(e == null ? void 0 : e.clas_teaser, 140),
  buttonLink: e.path,
  interests: e.interests,
  newsUnits: e.news_units,
  eventTypes: e.event_types,
  alias: e.path
  // Used for card link in title, matches component-events data transformer
}), Mr = ({
  children: e,
  header: t,
  ctaButton: r,
  dataSource: n,
  maxItems: a
}) => {
  var g;
  const s = (g = n == null ? void 0 : n.filters) == null ? void 0 : g.replace(/_/g, " "), d = { ...n, filters: s };
  return /* @__PURE__ */ it.jsx(
    Qs,
    {
      renderHeader: t && r ? /* @__PURE__ */ it.jsx(
        rl,
        {
          header: t,
          ctaButton: r,
          defaultProps: Sn
        }
      ) : null,
      renderBody: /* @__PURE__ */ it.jsx(nl, { children: e }),
      dataTransformer: Rf,
      dataFilter: Of,
      dataSource: d,
      defaultProps: Sn,
      noFeedText: "No news to show.",
      maxItems: a
    }
  );
};
Mr.propTypes = {
  header: Ni,
  ctaButton: Pi,
  dataSource: tl,
  maxItems: dt.number,
  children: dt.element
};
var ri = { exports: {} }, Ye = {};
var ps;
function If() {
  if (ps) return Ye;
  ps = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), z = Symbol.for("react.client.reference");
  function T(S) {
    if (typeof S == "object" && S !== null) {
      var N = S.$$typeof;
      switch (N) {
        case e:
          switch (S = S.type, S) {
            case r:
            case a:
            case n:
            case h:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case d:
                case g:
                case _:
                case x:
                  return S;
                case s:
                  return S;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  return Ye.ContextConsumer = s, Ye.ContextProvider = d, Ye.Element = e, Ye.ForwardRef = g, Ye.Fragment = r, Ye.Lazy = _, Ye.Memo = x, Ye.Portal = t, Ye.Profiler = a, Ye.StrictMode = n, Ye.Suspense = h, Ye.SuspenseList = f, Ye.isContextConsumer = function(S) {
    return T(S) === s;
  }, Ye.isContextProvider = function(S) {
    return T(S) === d;
  }, Ye.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, Ye.isForwardRef = function(S) {
    return T(S) === g;
  }, Ye.isFragment = function(S) {
    return T(S) === r;
  }, Ye.isLazy = function(S) {
    return T(S) === _;
  }, Ye.isMemo = function(S) {
    return T(S) === x;
  }, Ye.isPortal = function(S) {
    return T(S) === t;
  }, Ye.isProfiler = function(S) {
    return T(S) === a;
  }, Ye.isStrictMode = function(S) {
    return T(S) === n;
  }, Ye.isSuspense = function(S) {
    return T(S) === h;
  }, Ye.isSuspenseList = function(S) {
    return T(S) === f;
  }, Ye.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === a || S === n || S === h || S === f || S === D || typeof S == "object" && S !== null && (S.$$typeof === _ || S.$$typeof === x || S.$$typeof === d || S.$$typeof === s || S.$$typeof === g || S.$$typeof === z || S.getModuleId !== void 0);
  }, Ye.typeOf = T, Ye;
}
var hs;
function Nf() {
  return hs || (hs = 1, ri.exports = /* @__PURE__ */ If()), ri.exports;
}
var Sl = /* @__PURE__ */ Nf();
function Pf(e) {
  function t(U, O, M, F, b) {
    for (var ee = 0, E = 0, ie = 0, Q = 0, te, X, ne = 0, de = 0, J, ge = J = te = 0, re = 0, le = 0, $e = 0, ce = 0, ot = M.length, We = ot - 1, ke, G = "", oe = "", Xe = "", Pe = "", Le; re < ot; ) {
      if (X = M.charCodeAt(re), re === We && E + Q + ie + ee !== 0 && (E !== 0 && (X = E === 47 ? 10 : 47), Q = ie = ee = 0, ot++, We++), E + Q + ie + ee === 0) {
        if (re === We && (0 < le && (G = G.replace(D, "")), 0 < G.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              G += M.charAt(re);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (G = G.trim(), te = G.charCodeAt(0), J = 1, ce = ++re; re < ot; ) {
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
            switch (J = M.substring(ce, re), te === 0 && (te = (G = G.replace(_, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (G = G.replace(D, "")), X = G.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = O;
                    break;
                  default:
                    le = lt;
                }
                if (J = t(O, le, J, X, b + 1), ce = J.length, 0 < Oe && (le = r(lt, G, $e), Le = g(3, J, le, O, Re, me, ce, X, b, F), G = le.join(""), Le !== void 0 && (ce = (J = Le.trim()).length) === 0 && (X = 0, J = "")), 0 < ce) switch (X) {
                  case 115:
                    G = G.replace(ae, d);
                  case 100:
                  case 109:
                  case 45:
                    J = G + "{" + J + "}";
                    break;
                  case 107:
                    G = G.replace($, "$1 $2"), J = G + "{" + J + "}", J = Ce === 1 || Ce === 2 && s("@" + J, 3) ? "@-webkit-" + J + "@" + J : "@" + J;
                    break;
                  default:
                    J = G + J, F === 112 && (J = (oe += J, ""));
                }
                else J = "";
                break;
              default:
                J = t(O, r(O, G, $e), J, F, b + 1);
            }
            Xe += J, J = $e = le = ge = te = 0, G = "", X = M.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (G = (0 < le ? G.replace(D, "") : G).trim(), 1 < (ce = G.length)) switch (ge === 0 && (te = G.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ce = (G = G.replace(" ", ":")).length), 0 < Oe && (Le = g(1, G, O, U, Re, me, oe.length, F, b, F)) !== void 0 && (ce = (G = Le.trim()).length) === 0 && (G = "\0\0"), te = G.charCodeAt(0), X = G.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  Pe += G + M.charAt(re);
                  break;
                }
              default:
                G.charCodeAt(ce - 1) !== 58 && (oe += a(G, te, X, G.charCodeAt(2)));
            }
            $e = le = ge = te = 0, G = "", X = M.charCodeAt(++re);
        }
      }
      switch (X) {
        case 13:
        case 10:
          E === 47 ? E = 0 : 1 + te === 0 && F !== 107 && 0 < G.length && (le = 1, G += "\0"), 0 < Oe * et && g(0, G, O, U, Re, me, oe.length, F, b, F), me = 1, Re++;
          break;
        case 59:
        case 125:
          if (E + Q + ie + ee === 0) {
            me++;
            break;
          }
        default:
          switch (me++, ke = M.charAt(re), X) {
            case 9:
            case 32:
              if (Q + ee + E === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ke = "";
                  break;
                default:
                  X !== 32 && (ke = " ");
              }
              break;
            case 0:
              ke = "\\0";
              break;
            case 12:
              ke = "\\f";
              break;
            case 11:
              ke = "\\v";
              break;
            case 38:
              Q + E + ee === 0 && (le = $e = 1, ke = "\f" + ke);
              break;
            case 108:
              if (Q + E + ee + Ne === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && M.charCodeAt(re - 3) === 58 && (Ne = ne);
                case 8:
                  de === 111 && (Ne = de);
              }
              break;
            case 58:
              Q + E + ee === 0 && (ge = re);
              break;
            case 44:
              E + ie + Q + ee === 0 && (le = 1, ke += "\r");
              break;
            case 34:
            case 39:
              E === 0 && (Q = Q === X ? 0 : Q === 0 ? X : Q);
              break;
            case 91:
              Q + E + ie === 0 && ee++;
              break;
            case 93:
              Q + E + ie === 0 && ee--;
              break;
            case 41:
              Q + E + ee === 0 && ie--;
              break;
            case 40:
              if (Q + E + ee === 0) {
                if (te === 0) switch (2 * ne + 3 * de) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ie++;
              }
              break;
            case 64:
              E + ie + Q + ee + ge + J === 0 && (J = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + ee + ie)) switch (E) {
                case 0:
                  switch (2 * X + 3 * M.charCodeAt(re + 1)) {
                    case 235:
                      E = 47;
                      break;
                    case 220:
                      ce = re, E = 42;
                  }
                  break;
                case 42:
                  X === 47 && ne === 42 && ce + 2 !== re && (M.charCodeAt(ce + 2) === 33 && (oe += M.substring(ce, re + 1)), ke = "", E = 0);
              }
          }
          E === 0 && (G += ke);
      }
      de = ne, ne = X, re++;
    }
    if (ce = oe.length, 0 < ce) {
      if (le = O, 0 < Oe && (Le = g(2, oe, le, U, Re, me, ce, F, b, F), Le !== void 0 && (oe = Le).length === 0)) return Pe + oe + Xe;
      if (oe = le.join(",") + "{" + oe + "}", Ce * Ne !== 0) {
        switch (Ce !== 2 || s(oe, 2) || (Ne = 0), Ne) {
          case 111:
            oe = oe.replace(q, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(Y, "::-webkit-input-$1") + oe.replace(Y, "::-moz-$1") + oe.replace(Y, ":-ms-input-$1") + oe;
        }
        Ne = 0;
      }
    }
    return Pe + oe + Xe;
  }
  function r(U, O, M) {
    var F = O.trim().split(N);
    O = F;
    var b = F.length, ee = U.length;
    switch (ee) {
      case 0:
      case 1:
        var E = 0;
        for (U = ee === 0 ? "" : U[0] + " "; E < b; ++E)
          O[E] = n(U, O[E], M).trim();
        break;
      default:
        var ie = E = 0;
        for (O = []; E < b; ++E)
          for (var Q = 0; Q < ee; ++Q)
            O[ie++] = n(U[Q] + " ", F[E], M).trim();
    }
    return O;
  }
  function n(U, O, M) {
    var F = O.charCodeAt(0);
    switch (33 > F && (F = (O = O.trim()).charCodeAt(0)), F) {
      case 38:
        return O.replace(H, "$1" + U.trim());
      case 58:
        return U.trim() + O.replace(H, "$1" + U.trim());
      default:
        if (0 < 1 * M && 0 < O.indexOf("\f")) return O.replace(H, (U.charCodeAt(0) === 58 ? "" : "$1") + U.trim());
    }
    return U + O;
  }
  function a(U, O, M, F) {
    var b = U + ";", ee = 2 * O + 3 * M + 4 * F;
    if (ee === 944) {
      U = b.indexOf(":", 9) + 1;
      var E = b.substring(U, b.length - 1).trim();
      return E = b.substring(0, U).trim() + E + ";", Ce === 1 || Ce === 2 && s(E, 1) ? "-webkit-" + E + E : E;
    }
    if (Ce === 0 || Ce === 2 && !s(b, 1)) return b;
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
        return E = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + E + "-webkit-" + b + "-ms-flex-pack" + E + b;
      case 1005:
        return T.test(b) ? b.replace(z, ":-webkit-") + b.replace(z, ":-moz-") + b : b;
      case 1e3:
        switch (E = b.substring(13).trim(), O = E.indexOf("-") + 1, E.charCodeAt(0) + E.charCodeAt(O)) {
          case 226:
            E = b.replace(C, "tb");
            break;
          case 232:
            E = b.replace(C, "tb-rl");
            break;
          case 220:
            E = b.replace(C, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + E + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (O = (b = U).length - 10, E = (b.charCodeAt(O) === 33 ? b.substring(0, O) : b).substring(U.indexOf(":", 7) + 1).trim(), ee = E.charCodeAt(0) + (E.charCodeAt(7) | 0)) {
          case 203:
            if (111 > E.charCodeAt(8)) break;
          case 115:
            b = b.replace(E, "-webkit-" + E) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(E, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + b.replace(E, "-webkit-" + E) + ";" + b.replace(E, "-ms-" + E + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45) switch (b.charCodeAt(6)) {
          case 105:
            return E = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + E + "-ms-flex-" + E + b;
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
        if (Ge.test(U) === !0) return (E = U.substring(U.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(U.replace("stretch", "fill-available"), O, M, F).replace(":fill-available", ":stretch") : b.replace(E, "-webkit-" + E) + b.replace(E, "-moz-" + E.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, M + F === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10)) return b.substring(0, b.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s(U, O) {
    var M = U.indexOf(O === 1 ? ":" : "{"), F = U.substring(0, O !== 3 ? M : 10);
    return M = U.substring(M + 1, U.length - 1), Be(O !== 2 ? F : F.replace(je, "$1"), M, O);
  }
  function d(U, O) {
    var M = a(O, O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2));
    return M !== O + ";" ? M.replace(Se, " or ($1)").substring(4) : "(" + O + ")";
  }
  function g(U, O, M, F, b, ee, E, ie, Q, te) {
    for (var X = 0, ne = O, de; X < Oe; ++X)
      switch (de = Fe[X].call(x, U, ne, M, F, b, ee, E, ie, Q, te)) {
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
  function h(U) {
    switch (U) {
      case void 0:
      case null:
        Oe = Fe.length = 0;
        break;
      default:
        if (typeof U == "function") Fe[Oe++] = U;
        else if (typeof U == "object") for (var O = 0, M = U.length; O < M; ++O)
          h(U[O]);
        else et = !!U | 0;
    }
    return h;
  }
  function f(U) {
    return U = U.prefix, U !== void 0 && (Be = null, U ? typeof U != "function" ? Ce = 1 : (Ce = 2, Be = U) : Ce = 0), f;
  }
  function x(U, O) {
    var M = U;
    if (33 > M.charCodeAt(0) && (M = M.trim()), se = M, M = [se], 0 < Oe) {
      var F = g(-1, O, M, M, Re, me, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (O = F);
    }
    var b = t(lt, M, O, 0, 0);
    return 0 < Oe && (F = g(-2, b, M, M, Re, me, b.length, 0, 0, 0), F !== void 0 && (b = F)), se = "", Ne = 0, me = Re = 1, b;
  }
  var _ = /^\0+/g, D = /[\0\r\f]/g, z = /: */g, T = /zoo|gra/, S = /([,: ])(transform)/g, N = /,\r+?/g, H = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, q = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, Se = /([\s\S]*?);/g, Ie = /-self|flex-/g, je = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ge = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, me = 1, Re = 1, Ne = 0, Ce = 1, lt = [], Fe = [], Oe = 0, Be = null, et = 0, se = "";
  return x.use = h, x.set = f, e !== void 0 && f(e), x;
}
var Lf = {
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
function Df(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var jf = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ms = /* @__PURE__ */ Df(
  function(e) {
    return jf.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ni = { exports: {} }, He = {};
var gs;
function Ff() {
  if (gs) return He;
  gs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, g = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, _ = e ? Symbol.for("react.suspense") : 60113, D = e ? Symbol.for("react.suspense_list") : 60120, z = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, H = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function Y(C) {
    if (typeof C == "object" && C !== null) {
      var ae = C.$$typeof;
      switch (ae) {
        case t:
          switch (C = C.type, C) {
            case h:
            case f:
            case n:
            case s:
            case a:
            case _:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case g:
                case x:
                case T:
                case z:
                case d:
                  return C;
                default:
                  return ae;
              }
          }
        case r:
          return ae;
      }
    }
  }
  function q(C) {
    return Y(C) === f;
  }
  return He.AsyncMode = h, He.ConcurrentMode = f, He.ContextConsumer = g, He.ContextProvider = d, He.Element = t, He.ForwardRef = x, He.Fragment = n, He.Lazy = T, He.Memo = z, He.Portal = r, He.Profiler = s, He.StrictMode = a, He.Suspense = _, He.isAsyncMode = function(C) {
    return q(C) || Y(C) === h;
  }, He.isConcurrentMode = q, He.isContextConsumer = function(C) {
    return Y(C) === g;
  }, He.isContextProvider = function(C) {
    return Y(C) === d;
  }, He.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, He.isForwardRef = function(C) {
    return Y(C) === x;
  }, He.isFragment = function(C) {
    return Y(C) === n;
  }, He.isLazy = function(C) {
    return Y(C) === T;
  }, He.isMemo = function(C) {
    return Y(C) === z;
  }, He.isPortal = function(C) {
    return Y(C) === r;
  }, He.isProfiler = function(C) {
    return Y(C) === s;
  }, He.isStrictMode = function(C) {
    return Y(C) === a;
  }, He.isSuspense = function(C) {
    return Y(C) === _;
  }, He.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === f || C === s || C === a || C === _ || C === D || typeof C == "object" && C !== null && (C.$$typeof === T || C.$$typeof === z || C.$$typeof === d || C.$$typeof === g || C.$$typeof === x || C.$$typeof === N || C.$$typeof === H || C.$$typeof === $ || C.$$typeof === S);
  }, He.typeOf = Y, He;
}
var ys;
function Mf() {
  return ys || (ys = 1, ni.exports = Ff()), ni.exports;
}
var ai, bs;
function zf() {
  if (bs) return ai;
  bs = 1;
  var e = Mf(), t = {
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
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, a = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[e.ForwardRef] = n, s[e.Memo] = a;
  function d(T) {
    return e.isMemo(T) ? a : s[T.$$typeof] || t;
  }
  var g = Object.defineProperty, h = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, x = Object.getOwnPropertyDescriptor, _ = Object.getPrototypeOf, D = Object.prototype;
  function z(T, S, N) {
    if (typeof S != "string") {
      if (D) {
        var H = _(S);
        H && H !== D && z(T, H, N);
      }
      var $ = h(S);
      f && ($ = $.concat(f(S)));
      for (var Y = d(T), q = d(S), C = 0; C < $.length; ++C) {
        var ae = $[C];
        if (!r[ae] && !(N && N[ae]) && !(q && q[ae]) && !(Y && Y[ae])) {
          var Se = x(S, ae);
          try {
            g(T, ae, Se);
          } catch {
          }
        }
      }
    }
    return T;
  }
  return ai = z, ai;
}
var Hf = zf();
const $f = /* @__PURE__ */ Os(Hf);
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
var vs = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, xi = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Sl.typeOf(e);
}, ga = Object.freeze([]), Cr = Object.freeze({});
function kn(e) {
  return typeof e == "function";
}
function ws(e) {
  return e.displayName || e.name || "Component";
}
function ji(e) {
  return e && typeof e.styledComponentId == "string";
}
var Gr = typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_ATTR || vt.env.SC_ATTR) || "data-styled", Fi = typeof window < "u" && "HTMLElement" in window, Uf = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && vt.env.REACT_APP_SC_DISABLE_SPEEDY : vt.env.SC_DISABLE_SPEEDY !== void 0 && vt.env.SC_DISABLE_SPEEDY !== "" ? vt.env.SC_DISABLE_SPEEDY !== "false" && vt.env.SC_DISABLE_SPEEDY : vt.env.NODE_ENV !== "production"));
function En(e) {
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
      for (var a = this.groupSizes, s = a.length, d = s; r >= d; ) (d <<= 1) < 0 && En(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(a), this.length = d;
      for (var g = s; g < d; g++) this.groupSizes[g] = 0;
    }
    for (var h = this.indexOfGroup(r + 1), f = 0, x = n.length; f < x; f++) this.tag.insertRule(h, n[f]) && (this.groupSizes[r]++, h++);
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
}(), ua = /* @__PURE__ */ new Map(), ya = /* @__PURE__ */ new Map(), vn = 1, ea = function(e) {
  if (ua.has(e)) return ua.get(e);
  for (; ya.has(vn); ) vn++;
  var t = vn++;
  return ua.set(e, t), ya.set(t, e), t;
}, Wf = function(e) {
  return ya.get(e);
}, qf = function(e, t) {
  t >= vn && (vn = t + 1), ua.set(e, t), ya.set(t, e);
}, Yf = "style[" + Gr + '][data-styled-version="5.3.11"]', Gf = new RegExp("^" + Gr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Vf = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, d = a.length; s < d; s++) (n = a[s]) && e.registerName(t, n);
}, Xf = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var d = r[a].trim();
    if (d) {
      var g = d.match(Gf);
      if (g) {
        var h = 0 | parseInt(g[1], 10), f = g[2];
        h !== 0 && (qf(f, h), Vf(e, f, g[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, Kf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, kl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(g) {
    for (var h = g.childNodes, f = h.length; f >= 0; f--) {
      var x = h[f];
      if (x && x.nodeType === 1 && x.hasAttribute(Gr)) return x;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Gr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Kf();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, Jf = function() {
  function e(r) {
    var n = this.element = kl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, d = 0, g = s.length; d < g; d++) {
        var h = s[d];
        if (h.ownerNode === a) return h;
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
    var n = this.element = kl(r);
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
}(), Ss = Fi, ep = { isServer: !Fi, useCSSOMInjection: !Uf }, xl = function() {
  function e(r, n, a) {
    r === void 0 && (r = Cr), n === void 0 && (n = {}), this.options = br({}, ep, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Fi && Ss && (Ss = !1, function(s) {
      for (var d = document.querySelectorAll(Yf), g = 0, h = d.length; g < h; g++) {
        var f = d[g];
        f && f.getAttribute(Gr) !== "active" && (Xf(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ea(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(br({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new Qf(d) : s ? new Jf(d) : new Zf(d), new Bf(r)));
    var r, n, a, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (ea(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(ea(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(ea(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", d = 0; d < a; d++) {
        var g = Wf(d);
        if (g !== void 0) {
          var h = r.names.get(g), f = n.getGroup(d);
          if (h && f && h.size) {
            var x = Gr + ".g" + d + '[id="' + g + '"]', _ = "";
            h !== void 0 && h.forEach(function(D) {
              D.length > 0 && (_ += D + ",");
            }), s += "" + f + x + '{content:"' + _ + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), tp = /(a)(d)/gi, ks = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function _i(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = ks(t % 52) + r;
  return (ks(t % 52) + r).replace(tp, "$1-$2");
}
var Ur = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, _l = function(e) {
  return Ur(5381, e);
};
function rp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (kn(r) && !ji(r)) return !1;
  }
  return !0;
}
var np = _l("5.3.11"), ap = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && rp(t), this.componentId = r, this.baseHash = Ur(np, r), this.baseStyle = n, xl.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Vr(this.rules, t, r, n).join(""), g = _i(Ur(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(a, g)) {
        var h = n(d, "." + g, void 0, a);
        r.insertRules(a, g, h);
      }
      s.push(g), this.staticRulesId = g;
    }
    else {
      for (var f = this.rules.length, x = Ur(this.baseHash, n.hash), _ = "", D = 0; D < f; D++) {
        var z = this.rules[D];
        if (typeof z == "string") _ += z;
        else if (z) {
          var T = Vr(z, t, r, n), S = Array.isArray(T) ? T.join("") : T;
          x = Ur(x, S + D), _ += S;
        }
      }
      if (_) {
        var N = _i(x >>> 0);
        if (!r.hasNameForId(a, N)) {
          var H = n(_, "." + N, void 0, a);
          r.insertRules(a, N, H);
        }
        s.push(N);
      }
    }
    return s.join(" ");
  }, e;
}(), ip = /^\s*\/\/.*$/gm, op = [":", "[", ".", "#"];
function sp(e) {
  var t, r, n, a, s = Cr, d = s.options, g = d === void 0 ? Cr : d, h = s.plugins, f = h === void 0 ? ga : h, x = new Pf(g), _ = [], D = /* @__PURE__ */ function(S) {
    function N(H) {
      if (H) try {
        S(H + "}");
      } catch {
      }
    }
    return function(H, $, Y, q, C, ae, Se, Ie, je, Ge) {
      switch (H) {
        case 1:
          if (je === 0 && $.charCodeAt(0) === 64) return S($ + ";"), "";
          break;
        case 2:
          if (Ie === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return S(Y[0] + $), "";
            default:
              return $ + (Ge === 0 ? "/*|*/" : "");
          }
        case -2:
          $.split("/*|*/}").forEach(N);
      }
    };
  }(function(S) {
    _.push(S);
  }), z = function(S, N, H) {
    return N === 0 && op.indexOf(H[r.length]) !== -1 || H.match(a) ? S : "." + t;
  };
  function T(S, N, H, $) {
    $ === void 0 && ($ = "&");
    var Y = S.replace(ip, ""), q = N && H ? H + " " + N + " { " + Y + " }" : Y;
    return t = $, r = N, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), x(H || !N ? "" : N, q);
  }
  return x.use([].concat(f, [function(S, N, H) {
    S === 2 && H.length && H[0].lastIndexOf(r) > 0 && (H[0] = H[0].replace(n, z));
  }, D, function(S) {
    if (S === -2) {
      var N = _;
      return _ = [], N;
    }
  }])), T.hash = f.length ? f.reduce(function(S, N) {
    return N.name || En(15), Ur(S, N.name);
  }, 5381).toString() : "", T;
}
var Tl = ft.createContext();
Tl.Consumer;
var Cl = ft.createContext(), lp = (Cl.Consumer, new xl()), Ti = sp();
function cp() {
  return wr(Tl) || lp;
}
function up() {
  return wr(Cl) || Ti;
}
var dp = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = Ti);
      var d = n.name + s.hash;
      a.hasNameForId(n.id, d) || a.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return En(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ti), this.name + t.hash;
  }, e;
}(), fp = /([A-Z])/, pp = /([A-Z])/g, hp = /^ms-/, mp = function(e) {
  return "-" + e.toLowerCase();
};
function xs(e) {
  return fp.test(e) ? e.replace(pp, mp).replace(hp, "-ms-") : e;
}
var _s = function(e) {
  return e == null || e === !1 || e === "";
};
function Vr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, g = e.length; d < g; d += 1) (a = Vr(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (_s(e)) return "";
  if (ji(e)) return "." + e.styledComponentId;
  if (kn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return Vr(h, t, r, n);
  }
  var f;
  return e instanceof dp ? r ? (e.inject(r, n), e.getName(n)) : e : xi(e) ? function x(_, D) {
    var z, T, S = [];
    for (var N in _) _.hasOwnProperty(N) && !_s(_[N]) && (Array.isArray(_[N]) && _[N].isCss || kn(_[N]) ? S.push(xs(N) + ":", _[N], ";") : xi(_[N]) ? S.push.apply(S, x(_[N], N)) : S.push(xs(N) + ": " + (z = N, (T = _[N]) == null || typeof T == "boolean" || T === "" ? "" : typeof T != "number" || T === 0 || z in Lf || z.startsWith("--") ? String(T).trim() : T + "px") + ";"));
    return D ? [D + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var Ts = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function gp(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return kn(e) || xi(e) ? Ts(Vr(vs(ga, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ts(Vr(vs(e, r)));
}
var yp = function(e, t, r) {
  return r === void 0 && (r = Cr), e.theme !== r.theme && e.theme || t || r.theme;
}, bp = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, vp = /(^-|-$)/g;
function ii(e) {
  return e.replace(bp, "-").replace(vp, "");
}
var wp = function(e) {
  return _i(_l(e) >>> 0);
};
function ta(e) {
  return typeof e == "string" && vt.env.NODE_ENV === "production";
}
var Ci = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Sp = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function kp(e, t, r) {
  var n = e[r];
  Ci(t) && Ci(n) ? El(n, t) : e[r] = t;
}
function El(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (Ci(d)) for (var g in d) Sp(g) && kp(e, d[g], g);
  }
  return e;
}
var Al = ft.createContext();
Al.Consumer;
var oi = {};
function Ol(e, t, r) {
  var n = ji(e), a = !ta(e), s = t.attrs, d = s === void 0 ? ga : s, g = t.componentId, h = g === void 0 ? function($, Y) {
    var q = typeof $ != "string" ? "sc" : ii($);
    oi[q] = (oi[q] || 0) + 1;
    var C = q + "-" + wp("5.3.11" + q + oi[q]);
    return Y ? Y + "-" + C : C;
  }(t.displayName, t.parentComponentId) : g, f = t.displayName, x = f === void 0 ? function($) {
    return ta($) ? "styled." + $ : "Styled(" + ws($) + ")";
  }(e) : f, _ = t.displayName && t.componentId ? ii(t.displayName) + "-" + t.componentId : t.componentId || h, D = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, z = t.shouldForwardProp;
  n && e.shouldForwardProp && (z = t.shouldForwardProp ? function($, Y, q) {
    return e.shouldForwardProp($, Y, q) && t.shouldForwardProp($, Y, q);
  } : e.shouldForwardProp);
  var T, S = new ap(r, _, n ? e.componentStyle : void 0), N = S.isStatic && d.length === 0, H = function($, Y) {
    return function(q, C, ae, Se) {
      var Ie = q.attrs, je = q.componentStyle, Ge = q.defaultProps, ue = q.foldedComponentIds, me = q.shouldForwardProp, Re = q.styledComponentId, Ne = q.target, Ce = function(F, b, ee) {
        F === void 0 && (F = Cr);
        var E = br({}, b, { theme: F }), ie = {};
        return ee.forEach(function(Q) {
          var te, X, ne, de = Q;
          for (te in kn(de) && (de = de(E)), de) E[te] = ie[te] = te === "className" ? (X = ie[te], ne = de[te], X && ne ? X + " " + ne : X || ne) : de[te];
        }), [E, ie];
      }(yp(C, wr(Al), Ge) || Cr, C, Ie), lt = Ce[0], Fe = Ce[1], Oe = function(F, b, ee, E) {
        var ie = cp(), Q = up(), te = b ? F.generateAndInjectStyles(Cr, ie, Q) : F.generateAndInjectStyles(ee, ie, Q);
        return te;
      }(je, Se, lt), Be = ae, et = Fe.$as || C.$as || Fe.as || C.as || Ne, se = ta(et), U = Fe !== C ? br({}, C, {}, Fe) : C, O = {};
      for (var M in U) M[0] !== "$" && M !== "as" && (M === "forwardedAs" ? O.as = U[M] : (me ? me(M, ms, et) : !se || ms(M)) && (O[M] = U[M]));
      return C.style && Fe.style !== C.style && (O.style = br({}, C.style, {}, Fe.style)), O.className = Array.prototype.concat(ue, Re, Oe !== Re ? Oe : null, C.className, Fe.className).filter(Boolean).join(" "), O.ref = Be, Es(et, O);
    }(T, $, Y, N);
  };
  return H.displayName = x, (T = ft.forwardRef(H)).attrs = D, T.componentStyle = S, T.displayName = x, T.shouldForwardProp = z, T.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ga, T.styledComponentId = _, T.target = n ? e.target : e, T.withComponent = function($) {
    var Y = t.componentId, q = function(ae, Se) {
      if (ae == null) return {};
      var Ie, je, Ge = {}, ue = Object.keys(ae);
      for (je = 0; je < ue.length; je++) Ie = ue[je], Se.indexOf(Ie) >= 0 || (Ge[Ie] = ae[Ie]);
      return Ge;
    }(t, ["componentId"]), C = Y && Y + "-" + (ta($) ? $ : ii(ws($)));
    return Ol($, br({}, q, { attrs: D, componentId: C }), r);
  }, Object.defineProperty(T, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = n ? El({}, e.defaultProps, $) : $;
  } }), Object.defineProperty(T, "toString", { value: function() {
    return "." + T.styledComponentId;
  } }), a && $f(T, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), T;
}
var xn = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Cr), !Sl.isValidElementType(n)) return En(1, String(n));
    var s = function() {
      return r(n, a, gp.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, br({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, br({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(Ol, e);
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
  const { feeds: t } = wr(wa), r = t == null ? void 0 : t.map(
    (n, a) => _p(n, a, e)
  );
  return /* @__PURE__ */ it.jsx(xp, { children: /* @__PURE__ */ it.jsx(
    ml,
    {
      width: "auto",
      cardType: "story",
      perView: "3",
      cardItems: r || []
    }
  ) });
}, Rl = ({ cardButton: e, ...t }) => (Er(() => {
  typeof window < "u" && Di({
    packageName: "component-news",
    component: "CardCarouselNews",
    type: "NA",
    configuration: {
      cardButton: e,
      props: t
    }
  });
}, []), // Calling the high order component that fetches the data
/* @__PURE__ */ it.jsx(Mr, { ...t, children: /* @__PURE__ */ it.jsx(
  Tp,
  {
    cardButton: { ...Sn.cardButton, ...e }
  }
) }));
Rl.propTypes = Mr.propTypes;
const Il = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), Cp = xn.section`
  .c-card {
    height: 100%;
  }
`, Ep = (e, t, r) => /* @__PURE__ */ it.jsx(
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
        tags: r ? [] : Il(e == null ? void 0 : e.interests)
      }
    )
  },
  e.id
), Ap = ({ cardButton: e, hideTags: t }) => {
  const { feeds: r } = wr(wa), n = t === !0 || t === "true";
  return /* @__PURE__ */ it.jsx(Cp, { className: "row row-spaced", "data-testid": "grid-view-container", children: r == null ? void 0 : r.map((a, s) => /* @__PURE__ */ it.jsx(ft.Fragment, { children: Ep(a, e, n) }, s)) });
}, Nl = ({ cardButton: e, hideTags: t = !0, ...r }) => (Er(() => {
  typeof window < "u" && Di({
    packageName: "component-news",
    component: "CardGridNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...r
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ it.jsx(Mr, { ...r, children: /* @__PURE__ */ it.jsx(
  Ap,
  {
    cardButton: { ...Sn.cardButton, ...e },
    hideTags: t
  }
) }));
Nl.propTypes = {
  ...Mr.propTypes,
  cardButton: el,
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
    tags: r ? [] : Il(e == null ? void 0 : e.interests)
  }
) }, e.id), Ip = ({ cardButton: e, hideTags: t }) => {
  const { feeds: r } = wr(wa), n = t === !0 || t === "true";
  return /* @__PURE__ */ it.jsx(Op, { className: "row-spaced", "data-testid": "list-view-container", children: r == null ? void 0 : r.map((a, s) => /* @__PURE__ */ it.jsx(ft.Fragment, { children: Rp(a, e, n) }, s)) });
}, Pl = ({ cardButton: e, hideTags: t = !0, ...r }) => (Er(() => {
  typeof window < "u" && Di({
    packageName: "component-news",
    component: "CardListlNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...r
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ it.jsx(Mr, { ...r, children: /* @__PURE__ */ it.jsx(
  Ip,
  {
    cardButton: { ...Sn.cardButton, ...e },
    hideTags: t
  }
) }));
Pl.propTypes = {
  ...Mr.propTypes,
  feedCardButtonShape: el,
  hideTags: dt.oneOf(["true", "false", !0, !1])
};
var ra = {}, Cs;
function Np() {
  if (Cs) return ra;
  Cs = 1;
  var e = As;
  return ra.createRoot = e.createRoot, ra.hydrateRoot = e.hydrateRoot, ra;
}
var Pp = Np();
const Mi = (e, t, r) => {
  Pp.createRoot(r).render(ft.createElement(e, t));
}, jp = ({ targetSelector: e, props: t }) => {
  Mi(Nl, t, document.querySelector(e));
}, Fp = ({ targetSelector: e, props: t }) => {
  Mi(Pl, t, document.querySelector(e));
}, Mp = ({ targetSelector: e, props: t }) => {
  Mi(Rl, t, document.querySelector(e));
};
export {
  Rl as CardCarouselNews,
  Nl as CardGridNews,
  Pl as CardListlNews,
  Mp as initCardCarouselNewsComponent,
  jp as initCardGridNewsComponent,
  Fp as initCardListNewsComponent
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
